# Final adjudication — position 41

Disposition: repaired. Source status: verified.

Read the current definition, both Terra verdicts and Alpha's AC correction, manifest/coverage, contract/risk, the shared A/B page and the cited compactness, relative-boundedness, resolvent, spectral, bounded-calculus, DCT and Riesz interfaces. The final rejection is correct: the resolvent definition does not export the resolvent identity. The first rejection is addressed by full AC in the item but its old contract still said no choice was declared.

The repair derives the identity from inverses on the correct domain. Since R_w y lies in D(A), applying R_z to (z-A)R_w y=y+(z-w)R_w y gives R_z-R_w=(w-z)R_zR_w. Interchanging parameters gives the other product order. Applying B is legitimate because both sides lie in D(A). This gives compactness transfer by composition and finite sums in both directions. Self-adjointness ensures i is in the resolvent, so 'some' and 'every' are not vacuously equivalent. B is explicitly linear and graph-norm bounded; the zero Hilbert space is direct.

For bound zero, the corrected inverse identity is B psi=BR_A(z)(z-A)psi. With z=in the factorization is BR_A(in)=C F_n, C=BR_A(i), F_n=(i-A)R_A(in). The spectral symbol is (i-mu)/(in-mu), bounded in modulus by one and tending pointwise to zero. The domain rule verifies the resolvent symbol and product before any multiplication with A. Bounded-calculus conjugation and the squared-norm identity show that F_n and F_n* both tend strongly to zero by scalar DCT. This explicitly supplies the missing adjoint argument; strong convergence of arbitrary operators alone would not suffice.

If ||C F_n|| failed to tend to zero, AC supplies unit-ball witnesses y_k along a subsequence with norm bounded below. Testing F_nk y_k against each vector and using strong convergence of F_nk* proves weak convergence to zero by Riesz. The read compact weak-to-norm theorem contradicts the norm lower bound. Thus ||BR_A(in)|| tends to zero, and its admissible relative-bound estimates give infimum zero, without asserting attainment. This avoids importing Schauder's Banach transpose theorem as a Hilbert-adjoint statement without identifying the two.

Authority: https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf Section 6.4, the relative-compactness paragraph and Lemma 6.22 with its complete proof, printed p.173 (PDF184); also the complete preceding Lemma 6.21 proof on p.172. These support the compact-times-normal-resolvent route and parameter independence. The library uses zI-A rather than the source's A-z convention, so all signs were derived locally. The cited source leaves the compact-times-strong limit to earlier results; the local proof supplies it via the read compact weak-to-norm and Riesz interfaces. No claim is made to have newly consulted the second contextual source.

Updated the item's own manifest/contract/risk and consumer dependency record, then refreshed briefs/tasks/frontier-dependency-ledger.md. Precheck: 0 checked (definition), 0 failing. Strict contract: 0 errors, 0 warnings. No supplier or published item edited and no new lemma, theorem, page or pass stamp created.

Next: queue-status and ascending reseals for the changed shared spectral context, then record position 41 and begin position 42.
