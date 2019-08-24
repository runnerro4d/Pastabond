using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace UsersApi.Models
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Name")]
        public string Name { get; set; }

        public string Age { get; set; }

        public string Gender { get; set; }

        public string Occupation { get; set; }

        public string FoodPreference { get; set; }

        public string Smoking { get; set; }

        public string Car { get; set; }

        public string Pet { get; set; }

        public rent_range RentRange { get; set; }

        public string SleepHabit { get; set; }

        public string Location { get; set; }

        public string BillIncluded { get; set; }

        public string InternetUsage { get; set; }

        public string Hygiene { get; set; }

        public string SleepOver { get; set; }

        public preference Preference { get; set; }

        public class preference
        {
            [BsonElement("Smoking")]
            public string Smoking { get; set; }

            public age_range AgeRange { get; set; }

            public string Occupation { get; set; }

            public string FoodPreference { get; set; }

            public string Car { get; set; }

            public string Pet { get; set; }

            public string SleepHabit { get; set; }

            public string Location { get; set; }

            public string BillIncluded { get; set; }

            public string InternetUsage { get; set; }

            public string Hygiene { get; set; }

            public string SleepOver { get; set; }

            public class age_range
            {
                [BsonElement("UpperBound")]
                public string UpperBound { get; set; }

                public string LowerBound { get; set; }
            }

        }

        public class rent_range
        {
            [BsonElement("UpperBound")]
            public string UpperBound { get; set; }

            public string LowerBound { get; set; }
        }
    }
}