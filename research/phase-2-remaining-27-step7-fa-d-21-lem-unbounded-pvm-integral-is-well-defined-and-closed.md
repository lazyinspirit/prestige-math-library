# FA position 21 — repaired

Rejected bytes: `33b736756485d80cce37ad9f3ff4088e6e8d9f125b0244061589d435cd2b3d0a`.

Independently inspected the current lemma, its cited interfaces, current repaired integral definition, A/B context, batch manifest, contract with risk record, both judge rejections and Alpha row 80. Alpha changed the integral MCT citation correctly in the item, but not in the manifest. Terra's nonzero-H objection is valid for the remaining unrestricted A2. The proof also had an incorrect L1-majorant-to-squared-convergence assertion, an unjustified difference identity in approximation, an adjoint inclusion before density, and a multiplication argument that failed to explicitly establish the right multiplier's domain. The manifest's proposed closedness argument incorrectly compared f(E)x_n to conjugate-f(E)x.

The new proof treats H={0} directly using the integral definition: unique full-domain zero operator, zero scalar measures, adjoint itself, graph all H direct-sum H. Subsequent bounded calculus uses are explicitly restricted to nonzero H. All functions are Sigma-measurable, including the fact records and proof.

Independent mathematical checks:

- Norm identity follows by MCT from the defining truncations. The pairing identity has conjugate f, since this page uses an inner product linear in the first variable. Integrability of |f| follows from |f|<=1+|f|^2 and finite E_x; no incorrect implication from finite measure alone is needed.
- For fixed bounded g, first compare g(E)x with f_m(E)x using only the bounded quadratic identity. Passing m to infinity is justified by 2||g||_infinity^2+2|f|^2. Only after this limit is the difference identity used for g_n. Their squared errors are dominated by (C+1)^2|f|^2. The corrected A3 states precisely the integrable majorant required for each scalar limit.
- For bounded h, E(B)h(E)=(1_B h)(E) gives E_(h(E)x)(B)=integral_B |h|^2 dE_x. This measure identity establishes h(E)x in the unbounded domain when x is. Bounded multiplication followed by the already proved approximation establishes both left and right multiplication on that domain, without assuming closedness.
- Spectral cutoffs E(Omega_n)x have finite f-energy and converge to x by the bounded quadratic identity and dominated convergence. Their defining truncations stabilize, giving f(E)E(Omega_n)w=f_n(E)w for every w in H. Thus density precedes both uses of the adjoint interface, and the cutoff identity is available on all H, not merely D(f(E)).
- The first adjoint inclusion follows by limits of bounded adjoint pairings. For the reverse inclusion, y in D(f(E)^*) with z=f(E)^*y satisfies conjugate-f_n(E)y=E(Omega_n)z. MCT and contractivity give integral |f|^2 dE_y<=||z||^2. This proves equality of domains and the representing action.
- Applying the established identity to conjugate f gives f(E)=(conjugate-f(E))^*, hence closedness from the cited closed-adjoint lemma. Equality of squared-modulus domains and norms gives the stated normality convention. Real f gives self-adjointness. No graph-norm completeness shortcut remains.

Source verification: read the complete relevant construction (3.26)–(3.28), Theorem 3.2 and its proof (3.29)–(3.33), printed pp.103–105, PDF pages 114–116, at https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf . This supports truncation domains, the adjoint cutoff argument and the normality convention. The source works on the real Borel space and uses the opposite scalar-pairing placement; the local proof supplies the abstract measurable-space version and the library's conjugated pairing explicitly. Source status: verified. No source is used to waive a library hypothesis.

Only this item and its own manifest/contracts/consumer records were repaired. Current source quotes were refreshed and derivations aligned to canonical proof numbering. The frontier dependency ledger was refreshed for the owning consumer batch. No existing supplier or published bytes were edited and no new lemma or pass stamp was made.

Checks: focused precheck PASS, 1 checked, 0 failing; strict proof-contract 0 errors, 0 warnings, 1/1 checked. A contract input omission for the explicit A2 qualification in step 1.1 was corrected before the successful check. Next: queue-status, reseal stale predecessors in order, record this item, then position 22.
