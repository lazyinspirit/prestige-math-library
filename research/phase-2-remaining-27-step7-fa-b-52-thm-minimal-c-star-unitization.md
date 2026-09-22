# FA position 52 — minimal C*-unitization

Disposition: repaired. Source status: familiar.

Independently inspected the current statement and complete proof, direct dependency interfaces (including the normal-element spectral-radius proof), Gelfand A/B context, batch-4 manifest and coverage (Proposition 2.1.15), proof contract and risk record, initial Terra rejection, Alpha response and final Terra rejection. Rejected input SHA-256: 8f13b5561d09d32bde5c35d9e42ec37ed1bc08b4ec9b84154c19ec35759371a1.

The Alpha contraction argument is valid: with y=x*b, the C*-identity gives ||y||²=||b*x x*b||≤||b||||T||||y||, including y=0 separately. It therefore closes the original involution-isometry gap. The final Terra objection remains valid: normal-element spectral-radius equality requires AC. The statement, dependency list, facts and manifest now state that assumption and its use in norm uniqueness.

The closedness argument now uses d=dist(I,L(A))>0, rather than an unjustified inference about an unbounded scalar sequence. Isometry and completeness make L(A) closed; nonunitality excludes I. The estimate |lambda|d≤||L_a+lambda I|| proves the scalar coordinates of a convergent operator sequence are Cauchy. Completeness of C and closedness of L(A) give the required limit in the image. AC supplies closure-to-sequence choices explicitly.

Multiplicativity is expanded without presuming an identity in A. The transported involution, submultiplicativity and the two inequalities prove the C*-identity. For any other complete C*-norm, the self-adjoint unit has norm one; algebraic invertibility makes the spectra of x*x identical in the two norms. Normal-element spectral-radius equality therefore gives equality of their squared norms. The zero algebra is treated separately as C, never by the degenerate operator representation on the zero space.

This is familiar Banach-algebra and C*-norm mathematics, checked directly against the library interfaces; no external source verification was required or claimed. No new result, supplier edit or published edit was needed. Updated only the item and its contracts/manifest and owning consumer dependency rows; refreshed briefs/tasks/frontier-dependency-ledger.md through its generator.

Validation: focused precheck 1 checked, 0 failing; strict batch-4 proof contract 0 errors, 0 warnings. Canonical step numbering and boundary references agree. Six frozen predecessor receipts are being resealed in ascending order after unchanged-byte and context checks. Next action: record this repaired item once every predecessor is current, then review position 53. No judge verdict or pass stamp is created.
