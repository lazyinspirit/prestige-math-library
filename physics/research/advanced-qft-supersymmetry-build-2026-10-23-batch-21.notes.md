# Batch 21 authoring notes

Run: advanced-qft-supersymmetry-build-2026-10-23  
Batch: 21  
Pair: qftx-yang-mills-instanton-physics / qftx-yang-mills-instanton-physics-examples

## Plan and design comparison

The assigned design section and active plan entries agree with the manifest on the A/B page IDs, title, order 977, category, library, and required pages qftx-nonabelian-yang-mills-model and qftx-instanton-topology-mathematics. The scaffold’s empty item arrays are build placeholders. Its proposed definition row has proposed_deps: []; this conflicts with the exact item’s real geometry, charge, model, and choice inputs, so the authored manifest records those edges. No shared plan or other owner’s content was edited.

A material prerequisite mismatch remains. The actual post-qftx-nonabelian-yang-mills-model carrier is a source-free pure SU(2) postulate on Minkowski R^(1,3), signature (-+++), with Lorentzian action density -κ(F∧*_ηF)/(2g²). It contains no Euclidean branch. The live step1Decision result is ready (hash 8f4f7b5ace5187170381ad383d2dc6475e8b326b46e786499305b6fcc476667b); its exact scope mismatch remains despite current readiness. The assigned Definition therefore labels its Euclidean action a separate conditional model input and does not derive it by Wick rotation. The page-level prerequisite qftx-nonabelian-yang-mills-model stays open for the owner to resolve. The mathematical prerequisite page qftx-instanton-topology-mathematics is present; its actual charge interface matches and has a current ready record, so that page edge is verified.

## Item interfaces, dependencies, and levels

- def-qftx-euclidean-yang-mills-sector (A page, level 3) fixes the SU(2) global form, right-action connection and Cartan curvature, explicit compactification data, natural units, the Euclidean functional S_E=(2g²)^-1∫κ(F∧*F), κ=-2tr₂, and ν=q_B=-c₂ with B_top=-tr₂=κ/2. It distinguishes classical saddles from the formal sector expression and states no measure, regulator limit, or continuum theory. The actual mathematical charge definition is present, its complete proof was inspected, and its current Step-1 record is ready (SHA-256 0d60cbf483b3e448972b8dac47121e6cef167046c84955b6e3e9c52020608bd3). Its hypotheses are a compact connected oriented Riemannian four-manifold, and its SU(2) interface matches the compactification branch. The model postulate does not supply the Euclidean action, so this item is escalated.
- ex-qftx-euclidean-trivial-vacuum-sector (B page, level 4) verifies F=0, ν=0, and S_E=0 on the trivial bundle over S4 and expands the quadratic action under A_t=ta to verify stationarity. No empirical or quantum inference is made. Its readiness inherits the unresolved Euclidean model prerequisite.
- ex-qftx-bpst-instanton-formal-sector-weight (B page, level 5) states the two-chart BPST data and proves the normalization map to the action-bound supplier. The actual theorem gives S_B=g^-2∫B_top(F∧*F)≥8π²|q_B|, equality for self-dual or anti-self-dual curvature, and D_A*F=0 from Bianchi. The actual BPST example verifies a smooth two-chart connection on the round S4, F=*F, q_B=1, and S_B=8π²/g². Both items have current ready Step-1 records (theorem hash 9e6e87043a0430d14c732a839bcbc5832531b694685ca48f56f39d030fe6faac; BPST hash 61eaacbc24ad8da323cff49e2776a83785b61dd62e62f9d98b54ccf91c114950). Compact Stokes is used for the local first-variation calculation. The Lorentzian physical Euler–Lagrange item is excluded because it is not a Euclidean result.

Levels were recomputed from current in-run dependencies: gauge data, principal connection, and bracket are level 0; curvature is level 1; the mathematical charge definition and Lorentzian model postulate are level 2; the action-bound theorem is level 3; and the BPST math example is level 4. Thus this batch’s A definition is level 3, its zero-sector example level 4, and its BPST example level 5. No cycle occurs. The global dependency-level script also reports empty inventories on unrelated scaffold pages; the assigned closure levels above are consistent.

## Sources and dispositions

- David Tong, TASI Lectures on Solitons, full 39-page PDF: https://www.damtp.cam.ac.uk/user/tong/tasi/instanton.pdf, §§1.1–1.1.1, printed pp. 6–9. Read the full relevant argument: Euclidean action and trace convention, finite-action pure-gauge boundary data, winding sectors, square completion and equality, Bianchi implication, vacuum, and charge-one context. Supports the Definition and both examples; local proofs establish the authored deductions.
- Stefan Vandoren and Peter van Nieuwenhuizen, Lectures on instantons, full 118-page PDF: https://arxiv.org/pdf/0802.1862, §§1–2, printed pp. 3–9. Read the complete relevant sections: anti-Hermitian convention, R4-to-S4 compactification, winding normalization, action bound, and theta term. Independently supports the Definition and BPST example; no continuum measure is imported.
- A. A. Belavin, A. M. Polyakov, A. S. Schwartz, and Yu. S. Tyupkin, Pseudoparticle Solutions of the Yang-Mills Equations, full three-page paper: https://strings.itp.ac.ru/Papers/belavin1975.pdf, printed pp. 85–87. Read all pages. Supports the explicit charge-one connection and action saturation; the q>1 uncertainty on p. 87 is historical and recorded out-of-scope.

All five coverage entries are recorded with their URLs, locators, supported items, and included or out-of-scope dispositions. Source-fetch-check and the final scoped checks are recorded below. No retrieval failure occurred; no recovery retry was needed.

## Owner escalations and native blockers

- Euclidean model input: post-qftx-nonabelian-yang-mills-model is current and ready, but its actual statement is Lorentzian-only. Proposed supplier and placement: a Euclidean SU(2) action/model postulate on the A page qftx-nonabelian-yang-mills-model, with its oriented Riemannian domain, trace normalization, coupling, action, and compactification/boundary data. The assigned Definition does not infer this from Wick rotation.
- BPST construction placement: ex-qftx-su2-bpst-one-instanton is current and ready and its exact mathematical interface matches, but it lives only on qftx-instanton-topology-mathematics-examples. Focused depcheck reports b-leaf-content for the consuming B example. Proposed supplier and placement: an A-page mathematical theorem such as thm-qftx-su2-bpst-explicit-connection-on-s4 on qftx-instanton-topology-mathematics, carrying the same explicit two-chart connection and verified smoothness, self-duality, charge, and action; alternatively the owner can rehome the exact existing construction. This batch preserves the direct logical dependency and does not copy that proof.
- Plan ordering: the active plan gives both qftx-yang-mills-instanton-physics and its B companion order 977 while the B page requires the A page. Focused fwdcheck reports plan-order-broken. Proposed correction is a strictly later B order, for example 978, applied by the plan owner to plan-spec and the matching batch manifest.
- Shared schedule: batch-dependency-levels check reports the run-level schedule stale after the authored manifest changed. The shared schedule was left untouched for its owner to recompute after resolving the plan and supplier-placement issues.

## Final readiness and unresolved work

The mathematical charge definition, self-dual action-bound theorem, and BPST example have current ready Step-1 records and their actual interfaces were inspected. The batch-2 gauge data, principal connection, bracket, and curvature suppliers also have current ready records. The model postulate has a current ready record but its actual interface is Lorentzian-only. Step-1 records now mark the A Definition and both B examples escalated: the Definition and vacuum example inherit the Euclidean model gap, and the BPST example also has the B-leaf placement blocker. Their record hashes are 7f8141480675011a6c61bf9550fe96e8dc343983f01e7eaad931eb686c7b2486, 1b2a331987569159d1cf68ae4ec2b7d75b224d26259b5430136d04e1a11a8c69, and a80d4db090e153a80421c2029f195256c07a9bfc3e094e00131d1ae772ec9ff6, respectively. No independent acceptance or publication is claimed.

## Check results

Final checks:

- content-policy: pass, 3 items, 0 errors and 0 warnings.
- proof-contract: pass, all 3 assigned items checked, 0 errors and 0 warnings.
- precheck: pass for both proof-bearing examples; the Definition is not proof-bearing.
- proof-layout: pass, 3 items and 9 numbered steps, 0 defects.
- rendercheck: pass on the 3 items and 2 YAML-only page files; all KaTeX spans parse.
- source-fetch-check --stamp: pass, 5/5 sources fetch-verified, 0 new stamps, no documented drops. Coverage checklist: 2 pages and 10 harvested results, 0 errors and 0 warnings.
- citecheck: pass on all 3 items. Cross-batch dependency JSON is an array of 11 unique rows with nonempty evidence and valid statuses.
- Scoped item dependency levels: pass for the 15-item, 6-page prerequisite closure; the assigned levels are 3, 4, and 5. The full-run check reports 54 unrelated empty scaffold inventories and no stale numeric levels.
- Focused depcheck: one owner blocker, b-leaf-content on ex-qftx-bpst-instanton-formal-sector-weight -> ex-qftx-su2-bpst-one-instanton, because the mathematical supplier is on a different B page.
- Focused fwdcheck: one plan blocker, plan-order-broken for the A/B pair, since both active plan entries have order 977 while B requires A.
- batch-dependency-levels check: stale after this authored manifest changed; the shared scheduling file was left unchanged for its owner.

The unresolved model interface, B-leaf mathematical supplier placement, A/B plan order, and shared scheduling digest are recorded as owner escalations above. The proofs remain complete conditional arguments and all affected items remain escalated.


## Owner repair addendum (2026-10-23)

The current source/interface repair is recorded in `research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/euclidean-instanton-repair.md`. It supersedes the original Euclidean-action and BPST B-leaf escalation diagnoses for current content, while retaining their original native records and author notes. Canonical A/B orders are unchanged. Native recertification is pending with the root owner.
