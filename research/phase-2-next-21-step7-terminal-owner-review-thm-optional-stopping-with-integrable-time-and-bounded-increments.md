# Step 7 owner mathematical review — thm-optional-stopping-with-integrable-time-and-bounded-increments

Rejected Terra verdict (current paid cycle, context f53f2748bfb39568b90a8ccce45cb3f55d39877058e68a316ff659faaa537018): The statement uses M_τ without specifying its cemetery value on {τ=∞}. The supplied stopped-random-variable interface requires a fixed real value (or supplied M_∞); a.s. finiteness does not make the definition well-formed.

Owner repair review: The stopped variable M_τ now has cemetery value 0 on the null event {τ=∞}. This makes it a total random variable while leaving its a.s. value and the integrable-time bounded-increment estimate unchanged.

The present item bytes have SHA-256 0e0de1b3f9628fe8058533cc2385ebc9d8c224b7f81cc1cae3be5795057e6629. This review describes the repaired item and its exact rejected mathematical objection; it is owner evidence for terminal closure, not an independent judge verdict. Proof-contract and content gates must still pass on these bytes before the terminal record is entered.
