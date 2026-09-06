# FA terminal evidence — item 2

Decision: repaired. Inspected the definition, its local integral-factorisation
dependency (including its finite-quotient proof), the newly declared primes-above
definition and published integral-basis theorem, batch-7 manifest/coverage/notes,
prime-ideal A/B context, reader/refuter records, Sol's adjudication and repair
report, and both Terra rejection rows. Definitions are outside the batch's
proof-contract and proof risk_review scope. The pertinent risk is existence and
indexing of the displayed factorisation.

Sol correctly supplied finite L/K and nonzero p. The rejudge correctly noted
that factorisation alone did not explicitly identify factors with contraction
primes. Added both implications: a factor contracts to a proper ideal containing
the maximal p, and a prime above p contains one factor of the finite product,
which equals it by maximality. Also supplied properness of p O_L by a finite
generator matrix and its adjugate: det(I-A) annihilates 1 yet is 1 modulo p.
The integral basis generates O_L over O_K; linear independence over O_K is
neither assumed nor needed. Nonzeroness follows from p's nonzeroness. The local
factorisation theorem now gives positive uniquely determined exponents.
All steps use finite algebra, preserving the prescribed ZF scope.

Source verified: J. S. Milne, Algebraic Number Theory, printed page 59 (PDF
page 61), Factorization in extensions and complete Lemma 3.33 proof:
https://www.jmilne.org/math/CourseNotes/ANT.pdf
This supports the ramification-index convention and equivalence of prime
factor occurrence with contraction. The properness determinant argument is
independently checked finite linear algebra.

Updated the matching manifest dependency row. No dependency bytes changed and
no prerequisite licence is needed. Focused precheck and rendercheck both exit 0.
No pass stamp or additional judge call. No unresolved obligation. Next action:
record item 2, then review ex-a2-regular-dominant-verma-embedding-poset.
