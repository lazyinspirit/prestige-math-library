# FA terminal evidence: lem-protocol-value-is-computable-in-polynomial-space

Disposition: repaired. Queue frontier-32, group a, position 4; position 3
was recorded before substantive review began.

Read the full current item, all three cited dependency statements/proofs,
the transcript definition underlying the game tree, both IP pages, the
IP-in-PSPACE consumer, the manifest and both coverage source entries, batch-2
notes and group convention digest, Alpha report/adjudication, and both Terra
rejections. Neither batch nor merged contract scope contained this lemma;
there was consequently no item-specific contract risk record to accept.
Added the missing local contract and risk review in both files.

Alpha's compatible-history repair addresses the original fatal defect.
A public transcript does not expose the verifier's private state; one response
must serve all its compatible tapes. Terra's final type objection is also
valid: PSPACE classifies languages, not the rational-valued output itself.
The title's polynomial-space computation claim is meaningful but step 4's
class-membership assertion needs a decision language and output interface.

The repair fixes the verifier and polynomial resource bounds, explicitly
outputs binary integers (A,2^r), and defines the strict rational-threshold
language with malformed encodings rejected. To substantiate the bit bound,
it computes W(tau), the optimum accepting-tape count on the compatible set
C(tau). At a verifier move the child tape sets partition C(tau), so their
integer optima add. Their strategies combine on distinguishable public
histories. At a prover move C is unchanged and one message is selected for
all its hidden tapes, so the optima are maximized. A terminal node counts
accepting tapes. Induction gives 0<=W<=|C|<=2^r, and conditional value W/|C|
when the denominator is positive. Empty states return zero without division.
Every partial sum is bounded by the same parent tape count. Polynomial-depth
recursion with polynomial space per frame thus suffices without an
unjustified assumption about products of rational denominators. Zero coins
means one empty tape; early halting is absorbed by dummy exchanges retaining
the outcome. Integer cross multiplication decides A*b>a*2^r in space
polynomial in the entire threshold input, with equality correctly rejected.

Source verification: https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf,
Goldreich, Foundations of Complexity Theory, §11.3.1, Claim 11.3.1, printed
pp. 140--141 / zero-based PDF pp. 161--162. Opened both complete proof pages.
The source conditions on consistent verifier coins, maximizes over a public
response, and recursively enumerates private tapes in polynomial space.
The integer-count recurrence and explicit binary threshold interface above
are the independent implementation details used to close this item's gaps.
The source's later IP threshold prose is not needed for the exact comparison.

Only this item, its manifest strategy and its newly supplied local contract
entries changed. No dependency edit or licence was necessary. Focused
precheck and both strict contract checks passed one item with zero errors.
The renderer found an escaped empty-transcript symbol error; it was corrected
in the item and both contracts. The final real-renderer and merged-contract
checks passed. No mathematical obligation remains and no judge verdict or
stamp was created. Next action: record position 4, then open position 5.
