# FA terminal evidence — item 8

Decision: repaired. Read the theorem, primes-above definition, repaired
ramification-index definition, published power-integral-basis definition and
local integral-factorisation theorem, prime-ideal A/B context, batch-7 notes,
manifest/coverage, proof contract and boundaries, reader record, Alpha's repair
and original/final Terra rejections with the initial adjudication.

Sol correctly separated the polynomial F from the residue-degree function f.
Terra correctly requires a nonzero prime p. The final statement now explicitly
fixes a finite extension of number fields, integral alpha, its minimal polynomial
over K, and a nonzero prime ideal of O_K. It retains the exact monogeneity
hypothesis and explains that the additional order-index condition is automatic
(index 1) here. It specifies monic lifts g_i, whose prime ideals do not depend
on the lift.

Expanded the proof rather than claiming that a quotient presentation instantly
gives prime powers. Monic division establishes A[X]/(F)=B; reduction gives
k[X]/(Fbar). The maximal ideals and residue fields identify all primes above p
and their residue degrees. Localising at each factor gives k[X]_(gbar)/(gbar^e),
whose maximal ideal has nilpotency index e. The DVR localisation in the declared
ZF integral-factorisation theorem gives nilpotency index equal to the actual
prime exponent a. Hence a=e, including e=1. This is finite algebra and imports
no Choice-qualified general Dedekind theorem.

Verified Milne, Algebraic Number Theory, complete Theorem 3.41 and proof,
printed pp. 62–63, with Remarks 3.42–3.43:
https://www.jmilne.org/math/CourseNotes/ANT.pdf
It supports the monogenic quotient proof, lifted prime ideals, residue fields
and exponent comparison. The source's more general good-index variant is not
silently substituted for this item's retained monogenic statement.

Updated this item's manifest edge and exact contract derivations/boundaries/risk
record. No dependency file changed; no licence needed. Focused precheck and
rendercheck pass; strict batch-7 contracts pass (43/43). No new judge or stamp.
No unresolved obligation. Next: record item 8, then Riemann-von Mangoldt.
