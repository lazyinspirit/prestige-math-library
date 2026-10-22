# Batch 5 Step 3a adjudication

Run: physics-non-fluid-129-2026-10-21-r2. Group: batch-5. Scope: batch 5 only.

The scope routes exactly two touched obligations and no reader, refuter or page findings. The generated dependency order controls this review. No judgment or engine certification is supplied.

## Completed item reviews

### Level 0: post-emx-drude-current-closure

Read the full postulate and the relevant formulation of post-em-material-closure, pthm-em-macroscopic-maxwell, def-em-fields, def-em-polarization-magnetization and def-em-si-conventions. The rest-frame equation is a phenomenological assumption with time-regularity only; each field-equation consumer must impose spatial regularity. Verified SI dimensions, positivity, total P/M identification, arbitrary initial data, constant polarization offset, and gamma=0 / zero-frequency exclusions. No empirical inference occurs. No defect found; no decision owed. Its contract risk review is complete.

Sources actually opened: [Tong](https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf), section 7.6.1 printed pp. 205–206, equations (7.46)–(7.48); [Fitzpatrick](https://farside.ph.utexas.edu/teaching/em/lectures/node103.html), equations (1201)–(1208). These support model context, not a microscopic derivation of the continuum closure. Only relevant passages were read.

## Initial routing

Initial risk-report on the owning contract: exit 0, six HIGH/CRITICAL items and one MODERATE item. All routed reviews and final local checks are completed below.

### Level 1: pthm-emx-lorentz-susceptibility

Reviewed all eight steps and the statements of every direct supplier. For the causal result read pthm-em-causal-dispersive-response clauses (a)–(b) and its supplier-identification proof. The real scalar kernels act componentwise (equivalently as scalar multiples of I3). The three damping regimes give the required L1 kernel, derivative and first moment; bounded C2 histories justify both differentiation and integration by parts. The endpoint term in the double integration is +E(t), and the transform endpoint is -1, yielding the correct rational denominator. Checked zero amplitude, gamma=0, gamma=2omega0 and gamma>2omega0; poles remain outside the open upper half-plane, with undamped boundary poles excluded. Normalization by epsilon0 and CC/DC assumptions match the supplier. No defect found; no decision owed. Risk review complete.

Mathematical statements inspected: def-countable-choice, def-dependent-choice, def-complex-exponential, thm-algebra-of-derivatives, thm-derivative-of-exponential, thm-complex-exponential-is-entire-with-derivative-itself, thm-sine-and-cosine-derivatives, thm-of-square-roots, thm-integration-by-parts, thm-differentiation-under-the-integral-sign and thm-exponential-beats-every-polynomial. These are existing suppliers, not newly audited proofs. Tong section 7.5.1 equations (7.29)–(7.30) and section 7.5.4 printed p. 204 were opened; the local stricter kernel hypotheses, rather than causality alone, support dispersion. Next: energy and its exact PEC supplier.

### Level 2: pthm-emx-oscillator-energy

Reviewed every step, both postulates, the full def-emx-finite-energy-boundary-model and pthm-emx-weak-poynting-uniqueness proof, and the exact divergence-cross-product, Euclidean product and derivative supplier statements. The minus sign on field work and cancellation of material work are correct in both branches. In the PEC application the effective evolution current is Jf plus material current, with static coefficients epsilon_infinity I3 and mu I3; the theorem uses the evolution/energy identity, not an identification of the physical displacement with epsilon_infinity E. C1/C2 L2 regularity justifies integrating quadratic storage derivatives. The supplied closure definition gives zero PEC contribution without asserting a general trace theorem. Checked gamma=0, zero state, nonzero free work and constant Drude polarization offset. No defect found; no decision owed. Risk review complete.

Additional source passage opened: [Fitzpatrick node99](https://farside.ph.utexas.edu/teaching/em/lectures/node99.html), equations (1147)–(1149), used only as bound-oscillator context. The augmented storage is locally derived. Next: anomalous-wave touched obligation.

### Level 2: ex-emx-anomalous-group-delay

Verdict: amended_repair; confidence 1. Exact pre-reader archive at research/physics-non-fluid-129-2026-10-21-r2-owner-step2-em5-consumers/checked-current/ex-emx-anomalous-group-delay.md has SHA256 704ab13d5615d659f840698fd9b77693994a5bec806fce9fded4774622fe21a9, matching the native pre snapshot. Read its full diff against the current carrier, whose SHA256 c171b6b80074771c25107707615adde4b19b533b1721faf89a481e43d21c5d30 matches the post snapshot. Reader supplies real smooth field maps, domain, units, complex-k extension, divergence checks and complex-bilinear conventions. Retain these corrections; the earlier missing explicit maps were nonfatal because the displayed phasor and later mode witness already specified the construction. Alpha synchronizes the stale manifest Statement, dependencies and roles; no item bytes change. Closed defect: pnf129-r2-b5-complex-k-fields.

Independent calculation: Im Z(nu)>0 for nu>0, so the constructed positive p,q are unique; the given continuity estimate validates the root difference quotient at 1. Z(1)=1+2i, Zprime(1)=-8-2i, pq=1, p²+q²=sqrt(5), and Re(n+nprime)=((sqrt(5)-4)p-q)/sqrt(5)<0. Units and c/omega0 scaling are correct. The eternal fields grow towards negative z and are deliberately formal bulk modes with no finite-energy claim. No pulse/front-speed assertion follows. Every direct supplier statement was inspected, including the full real plane-wave definition and triple-product proof. Full-item/source/contract reference scan finds no item or reference consumer beyond its own B-page placement; that placement makes no additional claim. Risk review complete. Next: Drude response.

### Level 3: pthm-emx-drude-plasma-response

Verdict: amended_repair; confidence 1. Preserved checked-current/pthm-emx-drude-plasma-response.md under the same owner-step2-em5-consumers directory has raw SHA256 b6d832afbc0837177b17d0bfede16161ea0132aaacf586aa8e51462ad093e9f8 (native pre). Its full diff shows only the reader harmonic-particular qualification in Statement, Given, A1 and step 1.1. Current raw SHA256 is 2b30d1ff9f10d898540aca334cc092c3939bffc1622b958386359ce3b03f7fdf (native post). The qualification is sound: homogeneous current terms decay as exp(-gamma t) when gamma>0, while gamma=0 admits constant current and associated linear polarization; a constant polarization offset is also independent state data. The phasor equations specify a particular solution, rather than all initial states. The original phasor language already suggested this selection, so this is nonfatal clarification. Alpha retains the item and synchronizes the stale manifest Statement. Closed defect: pnf129-r2-b5-harmonic-particular.

Independently checked all five steps and eight supplier interfaces. Nonzero scalar denominators follow from omega>0, including zero electric amplitude and gamma=0. The negative sign in p and permittivity is correct. The energy clause carries the exact preceding Maxwell-energy hypotheses and CC. The transverse symbol gives positive squared real wavenumber above cutoff and negative below; the two witnesses satisfy both curls and divergences. Equality forces the excluded zero wavevector. The evanescent construction makes no interface or longitudinal classification. The only TikZ diagram projects k along +z, e along +x and b along +y; z cross x=y and z cross y=-x match the text. No diagram repair/addition is needed and the proof stands independently. Full dependency/reference scan finds only its own frontmatter-only A-page placement, which remains valid; no outside consumer action is needed. Risk review complete.

Additional source read: [Fitzpatrick node100](https://farside.ph.utexas.edu/teaching/em/lectures/node100.html), equations (1150)–(1155), (1162)–(1165), as restricted collisionless model context. No universal information/group-speed or interface-reflection assertion from that source is imported. Next: lossless state comparison.

### Level 3: ex-emx-lossless-dispersive-energy

Read both verification steps and every direct supplier. The nonzero v state has the same E,D,B,H,P at t0 as the zero state, and positive material storage |v|²/(2a). The postulate permits independent P,Pt initial data; no zero-past restriction is asserted here. As a consistency check, with W²=omega0²+a/epsilon_infinity the spatially uniform fields P(t)=v sin(W(t-t0))/W, E=-P/epsilon_infinity, D=B=H=0 satisfy the undamped closure and source-free Maxwell on a bounded region without a boundary condition. Thus the comparison does not require a hidden global existence assumption or a PEC-compatible uniform solution. It is a local density comparison, not an experiment. CC is retained from the energy supplier. No defect found; no decision owed. Risk review complete.

## Source fidelity and reading limits

Also opened [MIT OCW Lecture 22](https://ocw.mit.edu/courses/6-007-electromagnetic-energy-from-motors-to-lasers-spring-2011/6434fa7aae0266ed6d40109d70c724f9_MIT6_007S11_lec22.pdf), relevant oscillator/response slides 8–15. The source uses exp(+i omega t), so its damping sign is conjugate to the local exp(-i omega t) convention. It supplies contextual oscillator response, not the local energy comparison, kernel estimates or negative-delay computation. Opened [Beisert](https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf), section 12.1, printed pp. 12.1–12.2 (PDF pages 142–143), equations (12.1)–(12.10), as real-field and material-wave context. Two web screenshot attempts failed with cache misses; the extracted relevant text was available and read. Its general group-speed bound is not a premise of these items. No complete-book rereading, new transitive supplier audit, empirical validation, judge stamp or gate completion is claimed.

## Consumer and dependency disposition

Full items/library text searches for both changed interface IDs found only the carriers themselves and their own A/B page placements. Those pages are frontmatter-only and impose no additional claim. No downstream item or reference consumer requires repair; there is no additional hop. Manifest mirrors now match both repaired statements and the anomalous example's added formulation dependency. Cross-batch uses remain the exact batch-4 finite-energy model and weak-Poynting interfaces already checked in the energy review. Stable IDs, placements and withdrawals are unchanged; no withdrawal or defective published supplier was identified. Published originals/imports remain untouched.

## Local validation and contract correction

The first strict proof-contract check found one citation-quote-mismatch: the reader-added F6 contract quote summarized the plane-wave supplier rather than reproducing its bytes. Replaced that quote with the exact inspected opening Definition excerpt, preserving the real-k supplier restriction and the local explicit complex-k extension. This is an amendment to the same dependency-explication repair, with no item or interface change; no mechanical-failure defect row is created. All six required Alpha risk reviews were complete before this check. Final checks follow below.

## Final local results and handoff

- Final risk-report on research/physics-non-fluid-129-2026-10-21-r2-batch-5.proof-contracts.json with --require-reviewed: exit 0; all six required reviews complete.
- Strict proof-contract on the owning batch contract after the F6 correction: exit 0; 7/7 items, 0 errors, 0 warnings.
- Precheck through tsx-run on both touched item paths: exit 0; 2 checked, 0 failing.
- Explicit rendercheck on both touched item paths: exit 0; 2 files, all frontmatter and math parsed. This checker does not claim a separately rendered TikZ image; the diagram source was reviewed mathematically above.
- Final batched proof-layout on items/ex-emx-anomalous-group-delay.md and items/pthm-emx-drude-plasma-response.md: exit 0; 2 items, 8 steps, 0 defects.
- Both current item raw hashes still match their native post-reader snapshots. Both preserved raw preimages match their native pre-reader snapshots. Final exact manifest/public-statement and anomalous dependency/role mirrors were checked locally.
- Two closed defect rows were appended through the serialized defect-ledger command, with caught_at_stage 3a-adjudicate, group-alpha ownership, disposition fixed and repair_confidence 1. The generated ledger view was refreshed by that command. No row was created for the mechanical check failure.

Delivered exactly two owed touched decisions, both amended_repair with confidence 1; no reader/refuter/page decision is owed. No item bytes, public scope, published original or import were changed by Alpha. The amendments are manifest, exact citation and risk-review bookkeeping supporting the independently reviewed reader repairs. The frontier dependency ledger contains the owned consumer disposition. No blocker, escalation, proposed withdrawal or published-supplier finding remains. The engine retains all stamping, gates and stage-transition duties.
