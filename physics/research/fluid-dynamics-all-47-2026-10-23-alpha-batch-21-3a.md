# Batch 21 Step 3a adjudication

Run: `fluid-dynamics-all-47-2026-10-23`; group: `batch-21`; original scope group `d` unchanged.

Reviewed the routed scope, reader report/findings, refuter report, pre/post snapshots, and the four current touched carriers. Recovered exact pre-reader item bytes for all four in `research/fluid-dynamics-all-47-2026-10-23-owner-step2-escalations/before-root-metadata/items__<id>.md`; their SHA256 values match the immutable pre snapshot. Current touched item bytes match the post snapshot. Compared actual deltas, not readiness assertions.

## Level 3: stationary Navier law

The reader correctly defines eta=mu and ell_s=eta/beta for beta>0, with units metres, and excludes finite slip length at beta=0. The tangential traction sign matches Chen–Qian equation (2.5) under sigma=-pI+2eta D. The beta=0 extension is explicitly adopted, not attributed as a positive-slip-length source claim. Read current continuum and boundary postulates and the frame dictionary. Its direct consumer is wall mechanical power, reviewed below; only the traction clause is used. No additional consumer was found by the items/library reference search. Reader edit accepted; confidence 1. No physical applicability or empirical precision is added.

## Level 4: acoustic prediction (review in progress)

The reader explicitly defines pointwise first variation, local positive-density admissibility, C-infinity initial data, normalized Fourier coefficients and longitudinal/transverse/mean modes. The C1 pressure hypothesis suffices: grad p(rho_*+epsilon z)/epsilon=p'(rho_*+epsilon z) grad z tends pointwise to p'(rho_*) grad z; no second pressure derivative is used. Positivity is uniform on compact time intervals by compactness of the spatial torus. The scaling y=x/L, s=c_*t/L, z/rho_* and v/c_* gives the unit-coefficient supplier exactly. The energy has units joules, its periodic divergence integral vanishes, transverse projections and zero modes are constant, and nonzero longitudinal normal frequencies obey omega^2=c_*^2|kappa|^2. Zero initial data are included. Countable Choice is explicitly carried; there are no measured inputs or finite-amplitude error claims.

Read the entire current batch-18 global-acoustics proof and its Fourier-space definition, embedding proof and published Fourier-basis/Parseval statement/proof. Two routed supplier issues are still present at this checkpoint: F1/3.1 omits the elementary smooth-to-all-Sobolev argument and both Golse citations still say section 7.4. The producer remains outside edit scope. No claim of upstream repair is made.

Next: record current supplier disposition, finish the remaining risk reviews, synchronize the owned manifest, and run focused checks.

## Level 4: local momentum

Accepted the reader repair after reading transport-and-density (complete proof), C1-domain/Jordan compatibility (complete proof), the continuum and closure postulates, frame and incompressible definitions, and the exact published divergence theorem. The time translation and relatively compact label neighborhood meet the transport supplier's bounded-reference/neighborhood hypotheses without requiring the whole reference region to be bounded. q=rho u is C1 on the swept open set. Its stress is spatially C1 on each compact image. The inverse image of a compactly contained closed ball is compactly contained in B and has C1 boundary, so continuity localization applies. Empty B is vacuous; b=0 requires no division; rho and eta are positive and no endpoint conclusion is asserted. Countable Choice is exactly the divergence supplier hypothesis. The only direct consumer is wall mechanical power; its explicit lifted or bounded motion and regularity satisfy this interface. No consumer change is necessary. Confidence 1.

## Level 5: wall mechanical power

Accepted the reader's velocity-only uniqueness correction: adding any spatially constant time function to pressure preserves the equations and homogeneous wall laws, so the former unqualified solution-uniqueness wording was overstrong. The inspected smooth-wall uniqueness theorem proves equality of velocities by its difference energy estimate and explicit integrating factor; no pressure normalization is assumed here. Its current bounded-domain definition gives the exact scalar pressure and velocity classes used here.

Checked all six proof steps. The local-momentum hypotheses hold on the bounded domain or translation-equivariant Euclidean lift. For k=rho|u|^2/2, the convective flux vanishes at impermeable walls; paired periodic sides cancel. Rowwise divergence gives div(sigma^T u)-sigma:grad u; D:W=0 and div u=0 leave 2eta|D|^2. No-slip substitutes u=g, and stationary slip gives -beta|u_tau|^2, including beta=0. Each term is watts. Uniqueness is only on bounded branch B with common force, rho, eta and selected homogeneous wall law, for the same initial velocity; zero force and zero data are included. No existence assertion is imported. Read the sole direct consumer ex-fd-adopted-poiseuille-couette: F1 explicitly excludes using uniqueness, and the periodic no-slip profiles and power identities are unchanged. No further propagation or outside consumer repair is required. Confidence 1.

## Current producer disposition and owner alert

All four upstream obligations (`reader:21:1`, `reader:21:2`, `refuter:21:1`, `refuter:21:2`) are **escalated to producer batch 18**, retaining the original consumer, dependency path, producer pre-reader fingerprint and split carrier in each decision. This is the required outside-scope disposition, not a claim that the acoustic theorem is false. The underlying issues are nonfatal; the refuter's fatal classification of the locator overstates its mathematical consequence because the Fourier proof is local. No repaired historical observation is relabelled false-positive.

During this review the producer acquired a new mathematical tangent-model definition and residual-derivative step. Re-read the resulting entire current proof, its current owning contract and manifest. The new C2 auxiliary pressure law does not restrict the physical consumer's C1 law: the consumer derives its own tangent PDE, and applies the supplier with coefficients 1,1, for which the auxiliary choice P(rho)=rho is available. Nevertheless both routed issues remain in the current producer: F1/3.1 still does not supply the smooth-to-all-Hm argument, and both Golse labels still say section 7.4. Its current contract repeats the finiteness assertion without deriving it. No upstream acceptance is inferred from its completed readiness/risk record.

Attempted mathematical closure of the first issue is explicit: for smooth periodic f and every nonnegative integer N, repeated periodic integration by parts gives (1+|k|^2)^N fhat(k)=Fourier((1-Delta)^N f)(k), whose modulus is bounded by the L1 norm of that smooth function on the compact probability torus. Choose N with 4N-2m>d. Lattice shell summation then proves sum_k (1+|k|^2)^m |fhat(k)|^2<infinity for every m, componentwise. Mode energy conservation preserves these bounds, and higher-weight tails plus the embedding estimate yield spatially differentiated series uniformly in time; mode equations similarly control all time derivatives. This short argument closes the mathematical gap without a stronger choice assumption, but this report does not edit or certify the outside producer. Owner must incorporate it into F1/3.1 and the producer contract, and return reviewed current bytes before the consumer risk review can close.

For the second issue, independently read Golse section 7.1.2, printed pp.81-82, Theorem7.2 and its full reconstruction argument, and section7.4, printed p.85. The first gives the acoustic Cauchy theorem for L2 data on R3; the second treats compressible Euler. Correct both producer labels to the actual acoustic locations, while preserving the distinction between that R3 theorem and the locally proved smooth periodic theorem. Owner must resolve that correction in batch18 and its manifest. No invented source coverage or uncertainty is used.

Two open defect rows record these exact producer issues and both lanes' obligations. They deliberately remain open, as does the acoustic risk review: the escalation exception precludes manufacturing closed rows or setting repair_confidence=1 for an unperformed outside repair. Four closed rows record the four accepted reader repairs. The decisions file contains exactly eight obligations, no page or untouched-example decision. The engine must resolve the upstream escalations before closure; this report does not request a gate or stamp.

## Sources and review limits

Read the relevant current source passages through the PDF text interface:

- [Chen and Qian, arXiv:0901.0147v1](https://arxiv.org/pdf/0901.0147), section1 equation(1.3), and section2 equation(2.5), PDF pp.2 and5: stationary normal/tangential wall conventions and positive slip length. Conversion to dimensional stress gives beta=eta/ell_s; beta=0 is the explicitly adopted extension.
- [Tong, Fluid Mechanics, Chapter2](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf), sections3.1.1–3.1.2 and3.2.1–3.2.2, printed pp.58–65: stress/viscosity, local momentum and boundary conventions. The actual transport, localization, power and uniqueness deductions were checked in the local proofs and exact mathematical suppliers.
- [Tong, Fluid Mechanics, Chapter3](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf), section4.4.4, printed pp.150–153, equations(4.67)–(4.75): rest-state perturbations, pressure derivative, waves and longitudinal modes. The physical item retains its exact conditional tangent-model scope.
- [Golse, Chapter3](https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf), section7.1.2/Theorem7.2, printed pp.81–82, and section7.4, p.85: independently verified the locator discrepancy and actual acoustic theorem scope.

The Powers URL timed out in this session; I do not attest independent retrieval of its printed pages. It is supplementary source context, not an unproved mathematical premise: the local proofs and exact supplier statements establish the adopted-model deductions. No experimental measurements or precision are reported. Exact imported statements and necessary proofs were inspected at their uses; this is not a new audit of every transitive foundational supplier.

No defective published supplier was established in this scope, so no published ledger edit was needed. No TikZ/tikzcd diagram occurs and no omitted diagram is required for these deductions. A/B pages remain frontmatter-only with compact-v1; no page body was authored. Statement/Postulate sections are uninterrupted and links remain in their immediately following references sections.

## Local checks and handoff

- Initial risk-report: zero errors; routed three HIGH/CRITICAL items. Recorded complete specific risk reviews for local momentum and wall power. Acoustic review remains open with exact upstream evidence.
- Precheck: all four touched carriers pass (three direct proofs and one nonproof structure).
- Rendercheck: all four pass YAML and actual KaTeX parsing.
- Final proof-layout: four items, fifteen steps, zero defects. No item edits followed it.
- Frontier dependency refresh: succeeded and deduplicated. The owned acoustic-to-global-acoustics edge is open with the upstream owner alert; other verified interfaces are preserved.
- Required risk-report --require-reviewed: reports exactly one error, acoustic risk-review-missing, reflecting the explicit unresolved escalation. This is a recorded incomplete check, not a passing result.
- Defect append: six rows, with four fixed reader-repair rows and two open producer issues; generated ledger view refreshed by the supported append tool.

Authored changes are the owned proof-contract risk reviews, manifest Statement/Postulate synchronization, owned cross-batch dependency input, these report/decision outputs and defect-ledger records. No item source, imported mathematics, published content, verification judge record or page body was changed by this adjudicator. Repair confidence 1 applies only to the accepted completed reader repairs. Engine-owned current-hash stamping and the gate battery have not been run.

Next owner action: resolve the two batch18 supplier issues, return their current proof/contract/manifest for independent consumer review, then close the four upstream decisions and acoustic risk review. Preserve the present open rows and original routed observations until that resolution.

## Reviewed current bytes

Raw SHA256 values at handoff (recorded evidence, not engine decision stamps):

- `items/post-fd-navier-slip-wall-law.md`: `09246f28a6d7f23bf6aab128b1f65c024959d990f20709142ffb90be8d205322`.
- `items/pthm-fd-linear-acoustic-model-prediction.md`: `147bfbfa119d8ffe1a209a6d68498d3891659463658855183bb8fe330c926748`.
- `items/pthm-fd-local-momentum-balance-from-continuum.md`: `58a5a36d12f6ce692aff781174b55f9acf31b3a8c85b6d9d82bc65d00ddf950a`.
- `items/pthm-fd-wall-mechanical-power-balance.md`: `62caba3acd8534bb22ff4f57279dfffe236c474307f8b09393c4f012b9c4e526`.
- `items/thm-fd-global-linear-acoustics.md`: `86feddfd87466b9732547f8a9c6321bfcd8764c64a420e72246abd44eabbde51`.
- `research/fluid-dynamics-all-47-2026-10-23-batch-18.proof-contracts.json`: `cd90b62682bc069557e55bd00eb1b180da4bdc1ec3ab90c7cc87961485524704`.
- `research/fluid-dynamics-all-47-2026-10-23-batch-18.pages.json`: `9b024d74230e31ffcc42e868f9b93b3e69fdd1df5a6ad4a13b4ce5b3598a3bfa`.

Additional scoped ledger validation: `node tools/physics-support/defect-ledger.mjs validate --run fluid-dynamics-all-47-2026-10-23` checked 210 rows and exited 1 with two diagnostics on outside-scope row `fluid-dynamics-all-47-2026-10-23-3a-batch-33-sobol-expansion`: disposition `repaired` is outside the closed enum, and prevention.kind is invalid. None of the six batch21 rows was reported invalid. Route these mechanical metadata diagnostics to the batch33 owner; no defect row was created for a mechanical failure and no outside row was edited.
