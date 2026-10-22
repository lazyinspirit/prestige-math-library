# Batch 15 Step 3a adjudication

Run: physics-non-fluid-129-2026-10-21-r2. Group: batch-15. Scope: batch 15 only.

Reviewed the dispatched order, scope, reader report/findings, refuter report and immutable pre/post snapshots. All five item and both page pre/post fingerprints agree: the reader made no repairs and no touched/page obligations exist. The only decisions owed are reader:15:1 and refuter:15:1.

## Completed level 2: def-emx-port-scattering-model

Both findings are confirmed_nonfatal and identify one citation-inaccurate defect. Independently retrieved [Beisert](https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf), Section 13.2, printed 13.3–13.6, PDF pages 155–158 (one-based), equations (13.10)–(13.28). The ideal-conductor vacuum guide reduction neglects penetration; its propagating-mode discussion does not establish finiteness for arbitrary transverse coefficient/wall models. The reports refer to printed pages 13.4–13.5 as sections; the actual section is 13.2. Corrected the locator only, explicitly retaining independent finite-list adoption. No Definition, scope, prerequisite, inventory or manifest claim changed. Repair confidence: 1.

Read the current complete definition and its direct suppliers: def-countable-choice, def-emx-reciprocal-phasor-medium, pthm-emx-lorentz-reciprocity and pthm-emx-weak-poynting-uniqueness. AC_omega selects from countable nonempty families; it is carried for the reciprocity divergence theorem. The phasor supplier defines continuous complex tensors, C1 fields and unconjugated products. The Lorentz proof cancels transpose-symmetric tensor terms and applies real/imaginary divergence identities on bounded C1 domains. The weak-energy supplier concerns initial-value uniqueness on its own H(curl)/polyhedron model and does not supply open scattering existence. The definition stipulates the latter. N=0, zero input, N=1 and excluded cutoff/zero-frequency cases checked. Power and reciprocal pairings are distinct explicit assumptions; the orientation diagram is correct and proof-independent. Risk review complete in the owning contract before proceeding higher.

Level-2 disposition and risk review were completed before the higher-level reviews below.

## Completed level 3: pthm-emx-scattering-contraction

Read all eight proof steps and direct suppliers: def-euclidean-inner-product (finite component product), lem-the-divergence-and-curl-of-a-cross-product (C1 real fields), post-emx-lorentz-medium and post-emx-drude-current-closure (adopted homogeneous ODEs and SI signs), pthm-em-macroscopic-maxwell (smooth curl equations), thm-algebra-of-derivatives (component product rule), thm-divergence-theorem-for-bounded-c-one-euclidean-domains (bounded C1 domain and AC_omega), thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces (integrable function on sigma-finite product), plus the already reviewed choice/port definitions. The local energy proof meets these hypotheses directly. Periodicity eliminates stored energy over a cycle; all losses and omitted output remain counted. Hermitian entry tests and finite square injectivity establish unitarity only when all three powers vanish for every input. Checked zero input, empty matrix, zero damping and excluded cutoffs. No repair needed. Risk review complete before proceeding to level 4.

## Completed level 4: pthm-emx-scattering-reciprocity

Read all six steps and the six actual supplier interfaces (all already inspected above). Substitution into the conjugated Poynting product gives the negative omega/2 imaginary-part sum, independently of the unconjugated reciprocity calculation. Pairing plus source-free Lorentz identity proves ordinary-transpose symmetry; the operational bulk power is signed and the zero-power criterion quantifies over every input. Hermitian coefficients make their quadratic forms real. Verified both harmonic closures, nonzero Lorentz denominators, Drude omega>0, sinusoidal factor 1/2, equality of bulk and oscillator loss, and zero damping. Empty-matrix conclusions remain valid. No claim of general passivity, time reversal or physical realization is used. No repair needed; risk review complete.

## Completed level 4: ex-emx-single-port-lossless-reflection

Read both verification steps and the three already inspected direct suppliers. Nonzero input permits division by its squared modulus; all-input zero loss yields unit reflection modulus. Empty/singleton frequency sets cause no varying-family claim. The explicit two-frequency phase function is choice-free and its potential lack of physical realization is retained. Risk review complete; no repair.

The unflagged omitted-channel example was read as downstream context: S swaps e1,e2, S squared is I, and compression to span(e1) is zero; its missing recorded power is exactly the omitted output and no actual measurement is asserted. Both page inventories are unchanged and their bodies empty. The only assigned TikZ diagram is the correct port-orientation diagram; no additional diagram is required for these explicit matrix calculations.

## Decisions and repair boundary

Exactly two decisions are written: reader:15:1 (reader) and refuter:15:1 (flagged), both confirmed_nonfatal, confidence 1, referencing the single closed defect physics-non-fluid-129-2026-10-21-r2-3a-batch-15-port-source-scope. Reversing only the locator edit reproduces the pre/post raw item SHA256 145eb801c74b3ca3e5ce71be0e055c8fd7b0a0f411f21d6d9a4113a4f2bc0940. The other four carriers retain their pre/post raw hashes. No historical-byte uncertainty, touched-carrier verdict or extra risk-only decision is invented.

Sources additionally inspected: [Chew](https://engineering.purdue.edu/wcchew/course/tgwAll20121211.pdf), Section 1.12.2, printed 25–26, equation (1.12.3), for the incident-to-outgoing matrix convention; [Marks–Williams](https://nistdigitalarchives.contentdm.oclc.org/digital/api/collection/p16009coll6/id/74796/download), Section 5, printed 555–556, equations (121)–(125), for the distinct power-wave normalization and lossy-guide symmetry caveat. The local proofs derive their identities rather than treating these contextual references as existence/completeness suppliers. No full-book or transitive published-supplier audit is claimed.

The finite-list/well-posedness assumptions and all empirical exclusions remain explicit. No empirical premises, measurements, fitted precision or statistical inference occur. No defective published supplier was established by this scoped review; published/imported carriers remain read-only. No withdrawal or outside consumer repair is required because the only item change is bibliographic. The contract changes record the four required current risk reviews; manifest statements, dependencies, provenance and inventories need no change.

## Local checks and handoff

After the final item edit, ran once: `node tools/physics-support/proof-layout.mjs items/def-emx-port-scattering-model.md`: 1 item, 0 proof steps, 0 defects (definition has no numbered proof). `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts items/def-emx-port-scattering-model.md`: 0 applicable proofs, 0 failures. `node tools/physics-support/rendercheck.mjs items/def-emx-port-scattering-model.md`: exit 0; YAML and all math spans parsed. No mathematical reflow was necessary for the locator-only change.

`node tools/physics-support/proof-contract.mjs research/physics-non-fluid-129-2026-10-21-r2-batch-15.proof-contracts.json --strict`: exit 0, 5/5 items, 0 errors; one advisory shotgun-bracket warning on reciprocity step 1.2. That step actually uses the port boundary bookkeeping and both vector-calculus facts; its algebraic coordinate-test steps require no extra cited fact, so no proof change was needed.

Ran the owning `risk-report.mjs` before reviews and again with `--require-reviewed`: exit 0 both times, 5 items routed, all four HIGH/CRITICAL reviews complete. Appended one fixed defect row using the serialized native ledger append, with both decision obligations in its adjudication_ref; generated ledger view refreshed. `node tools/physics-support/defect-ledger.mjs validate --run physics-non-fluid-129-2026-10-21-r2`: exit 0, 6 current run rows, 0 errors at check time. Maintained the owned-consumer entry in briefs/tasks/frontier-dependency-ledger.md.

Changed content: items/def-emx-port-scattering-model.md (one locator); owning batch-15 proof contract (four current risk_review records). Authored the exact requested report and decisions file; appended the single canonical defect and frontier review records. No manifests, page carriers, published suppliers or imported mathematics changed. No unresolved scientific blocker or outside-consumer obligation remains for this dispatch. These are local checks, not a judge verdict, stamp, engine gate battery or stage transition; the engine owns hash stamping and gates.
