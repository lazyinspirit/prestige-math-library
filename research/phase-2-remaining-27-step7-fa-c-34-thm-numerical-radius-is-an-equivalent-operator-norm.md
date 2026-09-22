# FA position 34 — repaired

Independently reviewed the theorem, exact dependency statements, continuous-functional-calculus A/B conventions and numerical-range coverage, manifest, contract/risk, Alpha repair and Terra judgments. Alpha's zero-based tolerance repair is correct. Terra's final rejection is also correct: the statement includes the zero Hilbert space, while the prior proof assumed it nonzero.

The repaired proof treats the zero space at step 4.1 using W(0)={0}, w(0)=0 and the unit-ball operator norm. Its operator vector space has only zero, so the norm axioms and both inequalities hold directly. The spectral-radius maximum is used only on a nonzero complex Hilbert space, exactly as its supplier requires.

For the nonzero case, independently expanded the first-linear sesquilinear form: the four diagonal terms cancel to 4<Tx,y> even when T is not self-adjoint. The proof now cites the inner-product axioms and parallelogram law rather than misapplying an inner-product polarization theorem to a non-Hermitian form. Scaling a nonzero z to a unit vector gives |<Tz,z>|<=w(T)||z||², and the four norms sum to 8 for unit x,y. The norming choice y=Tx/||Tx|| and the supplier's unit-sphere supremum yield ||T||<=2w(T). Definiteness, homogeneity and the triangle inequality are checked separately.

For normal T, expanding shifted adjoints preserves normality and equality of adjoint norms gives equal kernels. A hypothetical lower bound c>0 makes closure approximants Cauchy and proves closed range; kernel orthogonality makes that range dense, so inversion exists with bound 1/c. This contradicts a spectral value. AC explicitly selects the approximate eigenvectors at tolerances 1/(n+1), and Cauchy–Schwarz puts each spectral value in closure W(T). The normal spectral-radius identity gives the equality.

These are familiar sesquilinear and Hilbert-operator arguments; no external verification was needed for this item. Actual adjoint, parallelogram, complex-modulus and reciprocal-Archimedean interfaces were inspected and added as dependencies. Own manifest, proof contract, zero boundary/risk and consumer-batch dependency records were reconciled; the frontier ledger was refreshed. No supplier or published bytes were edited.

Validation: precheck PASS; strict proof contract 0 errors/0 warnings; rendercheck PASS. Statement unchanged; next action is queue-status and record position 34, then review 35. No unresolved mathematical obligation and no new judge or pass stamp.
