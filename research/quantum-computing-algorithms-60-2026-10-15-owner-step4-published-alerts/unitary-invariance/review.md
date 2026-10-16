# Published unitary-invariance proof correction

Run: `quantum-computing-algorithms-60-2026-10-15`.

Read the genuine batch-59 Step-5 context alert, the full published theorem, the full actual singular-value-decomposition theorem, the unitary/isometry definition and unitary group corollary, adjoint algebra, and the Frobenius-norm definition. Confirmed the reported nonfatal algebra defect in Proof 1.4: the displayed right multiplier had the adjoint on the wrong product. For scalars A=U=U0=Sigma=V0=1 and V=i, the original right-hand sides are -i although UAV=i.

The valid calculation is

`A=U0 Sigma V0*`, hence `UAV=(U U0) Sigma (V0* V)=(U U0) Sigma (V* V0)*`.

Adjoints reverse products, so `(V* V0)*=V0* V`. The SVD right unitary is therefore `V* V0`; it is unitary by the already declared L5, as is `U U0`. The middle rectangular diagonal matrix Sigma is unchanged, so the factorization has exactly the original singular values. This also handles real orthogonal matrices and empty shapes without changing any hypothesis.

Changed only Proof 1.4: corrected both displayed right multipliers and the name of the right unitary factor. The Statement, title, dependency list, metadata, Facts, and every other proof byte are preserved. Exact before source bytes were archived at `before/thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison.md` and required to equal current bytes immediately before the literal replacement. Root confirmed native published-repair ownership before this edit.

Affected-use disposition: the actual assigned consumer `thm-qa-35-quantum-fingerprint-message-lower-bound` cites the Frobenius singular-value formula in F6 and uses it in Proof 2.1/3.1. That formula is proved in the supplier's unchanged Proof 2.1 from SVD and the separately established Frobenius left/right invariance in 1.2/1.3; it does not use the defective 1.4. The supplier's unchanged 3.1 now obtains unitary invariance from the corrected 1.4. The consumer's cited formula and actual use need no source change. No theorem interface changed and no Statement/Definition consumer-closure expansion is triggered; no broad consumer proof audit is claimed.

Changed mathematical source: `items/thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison.md` only. Evidence: this review and the genuine before archive. Native digest/report artifacts remain untouched. No tests, gates, validators, formatting, hashes, stamps, metadata or ledger edits were performed. Root owns final layout, local policy checks, receipt and alert route. Source writes are frozen.
