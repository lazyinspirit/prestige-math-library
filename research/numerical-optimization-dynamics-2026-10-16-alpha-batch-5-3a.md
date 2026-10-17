# Batch 5 Step 3a adjudication

Run: numerical-optimization-dynamics-2026-10-16; group: batch-5.

## Completed level 0 interface

`def-common-space-linear-scheme-interface`: reviewed_no_defect, audit_enrichment. The reader added a valid recursion justification, not a correction of a false definition: fixed S acts on the set B(X), identity belongs to it, and composition preserves bounds. Exact suppliers read: def-strongly-continuous-semigroup, def-operator-norm, def-bounded-linear-operator, def-natural-numbers, def-space-of-bounded-linear-operators, thm-recursion. Positive steps ensure nonempty finite maxima; zero space and n=0 are valid. No AC. Synchronized the two reader-added dependencies in the owning manifest. Pre/post snapshots record item hashes 7a9e5335732454c5e87bce5bd32d47f6c778148421ee289c95fd4f247546cafa -> 7aad3399d4503ee72b8d8be15ed3eb5e5b4cf943f394f24b41eade692ef4a633. No defect ledger row is appropriate for this enrichment. Consumer semantics are unchanged; all batch consumers will be checked below. Risk review complete.

Checkpoint at interface completion: remaining reviews followed below. No blocker.

## Completed level 0 diagonal heat semigroup

`thm-diagonal-heat-semigroup-on-c-zero`: Read all four proof steps and exact c0, completeness, semigroup, operator-norm and exponential suppliers. Coordinate multipliers are in (0,1], including mode j=0 and time zero; they preserve null sequences and multiply under addition. At arbitrary t0>=0, the tail is uniformly small and the finite head is continuous, giving strong continuity also at the endpoint t0=0. Real/complex completeness is supplied without choice. Supremum bounds and all stated conclusions are valid; no defect. Exact source locations are the named suppliers Statement/Definition and Proof 1.1–3.1 of the carrier. No edit. Next: Lax reverse UBP application.

## Completed thm-lax-equivalence-for-common-banach-space-schemes

Reviewed Proof 1.1–4.1 and all exact suppliers, including the current DC/Baire argument behind UBP. The telescoping identity needs no commutation of S and U. Stability controls every exponent n-1-r on the same interval, yielding C_T T eta. Density extends to all X using C_T+M_T. Reverse convergence bounds late meshes pointwise, finitely many early meshes have finitely many admissible powers, and Separation/Replacement form a set of bounded linear operators. UBP applies to Banach X under the explicit DC assumption, including X={0}. No choice of an infinite family of operator bounds occurs; n=0 and the T endpoint are included. Both directions valid, no defect. No edit; risk review complete. Next: next routed item in dependency order.

## Completed lem-grid-stability-transfers-under-uniform-norm-comparison

Reviewed Proof 1.1–4.1 against lift, common-space, operator-norm and induction suppliers. PR=I gives the range/kernel decomposition, kernel invariance makes the power formula valid; at n=0 the formula is I, also for G={0}. Grid-to-common uses only b,P and M_T, with bound b C_T P+M_T(1+bP); reverse uses a>0 and b with bound C_T b/a. All comparisons are uniform in mesh and time endpoint. The stated equivalence is conditional and does not assert necessity of comparison hypotheses for individual families. No AC or defect. No edit; risk review complete. Next: next routed item in dependency order.

## Completed ex-consistent-unstable-explicit-grid-heat-step

Reviewed Verification 1.1–3.1 and every cited supplier. Truncation/inclusion norms are one for m>=1, the diagonal tail kernel is invariant, and the finite maximum gives a bounded Q_m for each mesh. Finite-support D is dense and invariant. For each fixed mode j>0 the divided local defect tends to zero by exp derivative at zero; j=0 is exactly zero, and a finite maximum makes the limit uniform over orbit times. The highest included mode gives 3-m-1/m, with magnitude m-3+1/m for m>=4, so n=1 violates stability on every T>0. Zero vector, m=1 and time zero cause no exception. No AC, defect or edit. Risk review complete. Next: stable example.

## Completed ex-stable-explicit-grid-heat-step

Reviewed Verification 1.1–3.1 and all suppliers. For m=nu+1>=1, truncation and inclusion have norm one and preserve the diagonal kernel. With tau=m^-2 every included Euler multiplier lies in [0,1], and every complementary exact multiplier lies in (0,1], giving contraction of every power by induction including n=0. Finite-support sequences are dense and invariant. The fixed finite-mode divided local defect tends to zero by exp derivative at zero, uniformly in exact-orbit grid time; mode zero and the zero vector have zero defect. The Lax conclusion applies with exactly its explicit DC premise, assumed in A1. No defect or edit; risk complete. Next: mesh norm example.

## Completed ex-mesh-grid-norm-hides-common-space-instability

Reviewed Verification 1.1–4.1 and every cited supplier. Positive mesh weights define a norm for m>=2; restriction has finite bound m and reconstruction bound one. Q has zeroth coordinate g0+m*g_(m-1), fixes all other low coordinates and kills the high coordinate, so its norm is at most two and Q^2=Q even at m=2. Identity semigroup preserves the kernel and finite-support core; for m>=N+2 local defect is exactly zero. The unit common-space vector e_(m-1) maps to m e0, disproving every finite-time uniform power bound using n=1. Its weighted grid norm m also disproves a uniform positive lower reconstruction comparison, and restriction norm is at least m. No defect, AC or edit; risk complete. Next: routed page correction and checks.

## Routed page finding

`refuter:5:1`: confirmed_fatal; repair_confidence: 1. The original A-page summary asserts transfer only under uniform operator/norm comparisons. With the weighted G_m norm of ex-mesh-grid-norm-hides-common-space-instability, set Q_m=I and U=I, retaining truncation P_m and inclusion R_m. Then P_m R_m=I, the kernel is invariant and S_m=R_m P_m+(I-R_m P_m)=I. Both power families have norm one, while ||P_m||>=m and ||R_m e_(m-1)||/||e_(m-1)||=1/m, so no uniform lower reconstruction bound exists. The original necessary-condition assertion is false. The transfer lemma itself correctly states sufficient hypotheses. Corrected only the page summary to identify those hypotheses as sufficient. Closed defect: `nod-b5-grid-transfer-summary-necessity`. Original page raw hash matches the pre/post snapshot (066e4ba54d74994a2812551a4d21409f6e40984c72e2c8c4bc168ae9c52b0b66); the refuter scope observed_sha256 is a different fingerprint, so the review relies on the independently read actual assertion and this explicit counterexample rather than claiming raw-hash identity to that field. Companion page is sound and unchanged. No extra page obligation is invented for this single routed finding.

## Consumer and metadata closure

Read all six local direct item consumers and the outside draft consumer `ex-grid-fourier-stability-needs-a-common-space-lift` (F1/F2, Verification 1.2–2.1). The enriched definition changes no interface semantics, hypotheses or conclusions; the outside consumer needs no mathematical repair. Direct-reference search over current items/library found no other item consumer. The page correction changes no item Statement/Definition. Five owned quotation mirrors still held the pre-reader Definition; strict contract checking exposed this mechanical drift. Refreshed those exact quotations from the current Definition without adding defect rows. Owner metadata alert: inspect any outside batch contract quotation of that definition, particularly the Fourier example, for the same reader-induced stale quote; outside files remain read-only. No missing prerequisite, published defect, withdrawal, new item or new page. Stable IDs and all existing proposals are preserved.

## Sources and scope limits

Independently read the exact local supplier carriers cited above, including their complete relevant arguments; these local proofs carry the mathematics. External context checked in [Trefethen, Chapter 4 §4.2](https://people.maths.ox.ac.uk/trefethen/4all.pdf), PDF pages 9–13 (zero-based 8–12): well-posed common-space data, stability power bound, Theorem 4.1 and the same-norm caveat. The printed theorem explicitly leaves its proof unwritten; no proof completion is attributed to it. [LeVeque, Chapter 12 §§12.5–12.5.1](https://usermanual.wiki/Document/LeVequeFiniteDiff.545303893.pdf), printed pp. 160–161 (PDF zero-based 167–168), supplies the error recurrence, inequality (12.18), uniform finite-time power criterion and growing-grid versus fixed-ODE distinction. The local proof uses stronger explicit uniform-in-grid-time consistency/convergence conventions and an explicit DC-qualified UBP argument. PDF extracted text was available; some screenshot fetches failed, so no reliance on unavailable screenshots is claimed. No unfamiliar unresolved mathematics or substantial unmet prerequisite remains.

## Checks and handoff

- Initial risk-report: all eight carriers routed, seven CRITICAL; no errors. All seven have specific complete current-content risk reviews, recorded in dependency order.
- risk-report --require-reviewed: eight items, zero errors.
- Strict proof-contract: initial five stale Definition mirrors identified; after exact synchronization, eight of eight checked, zero errors and zero warnings. This mechanical failure has no defect row.
- Focused rendercheck on repaired page and enriched definition: two files, no errors; actual KaTeX and renderer YAML parser used.
- Definition precheck: zero proofs checked, zero failing (definition, not applicable).
- All eight actual current raw item hashes equal the post-reader snapshot: no item text was changed by this adjudication. Only the A-page summary and owning metadata/evidence were edited.
- Defect-ledger append succeeded for the one confirmed page defect; generated view refreshed. The two owed decisions are exactly touched:5:def-common-space-linear-scheme-interface and refuter:5:1. No reader finding is owed.

No mathematical blocker, published defect or affected outside consumer repair found. Outside quotation metadata alert above is for owner routing only and grants no review credit outside batch 5. No judge, stamp, dispatch or gate battery was initiated. Engine owns current hash stamping and subsequent gates.

Final focused proof-layout after all content/formatter work: `node tools/proof-layout.mjs items/def-common-space-linear-scheme-interface.md` reported one item, zero steps, zero defects. This checks the reader-touched definition; this adjudication changed no item text. All owed obligations and risk reviews are complete.
