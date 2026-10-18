# Step 3a — batch 53

Run: `non-ml-math-remaining-81-2026-10-18`; group: `batch-53`.

Scope has no touched items, changed pages, reader findings or refuter findings. The decisions array is therefore empty. Reader and refuter both report no confirmed defects. Pre/post snapshot item, contract, manifest and page projections are identical. Nine HIGH/CRITICAL risk reviews remain required; the initial risk-report command succeeded (13 routed items, zero errors).

## Dependency-ordered review

### Level 0: def-a1-nakajima-framed-quiver-data

Reviewed its complete Definition and its six declared suppliers. The maps have types I:W→V and J:V→W, so IJ acts on V; positive stability is injectivity of J. For v=0 stability is vacuous; for v=1 the stable orbit is i=0,j≠0. The invariant ring construction and vanishing-ideal map are well-defined (evaluation is onto C). The subdatum identities force I=0 and yield an unframed one-dimensional quotient. The point correspondence convention uses only H0(point;C)=C, supplied by the homology dimension theorem. No arbitrary choice is used. No defect or edit. Source: Nakajima, https://arxiv.org/pdf/1611.10000v1, Example 10 and §4.4 (the printed inclusion equations have a typing typo; the locally written equations are independently correct). Next: level-1 cotangent model and point lemma.

### Level 1: lem-a1-arbitrary-framing-cotangent-hecke-model

Checked every proof step and six prerequisites: frame-bundle inverse identifies stable orbits algebraically with Hom(W/S,S), trace gives T*Gr. Incidence is closed in Gr×End(W), hence moment map is projective; A=0 is the scheme zero section. The Hecke inverse gives Hom(W/T,S); its rank v(w-v-1) and flag fiber dimensions give a_v+a_(v+1). Trace against all End(W) identifies the signed conormal; incidence projections are projective and zero inverse images kill all vector coordinates. Verified w=0 and v=0,w, GL(W) transport and inherited AC (finite bases locally). Nakajima Example 10, §§4.4–4.5 agree; no defect.

### Level 1: lem-a1-nakajima-varieties-and-hecke-correspondence-are-points

Checked steps 1.1–2.1 against both suppliers: v=0 has one stable solution; at v=1, ij=0 and j≠0 force i=0 and one orbit. The basis 1,i^a,j^b of C[i,j]/ij has no nonconstant weight-zero monomial, so invariants are C and Spec is one point. Explicit middle datum (0,1) realizes the framed inclusion and simple quotient, proving nonempty incidence and identity projections. Both permitted endpoints and the excluded unstable origin checked. Nakajima Example 10 and §4.4 support the conventions; no defect.

No level-1 edits or blockers. Next: excess coefficients and supported convolution.

### Level 2: lem-a1-hecke-zero-section-excess-coefficients

Checked full proof and all six suppliers. Zero-section pullback is Y in Tot(K), normal K included in q*T*X_v (or r*T*X_(v+1)); dual restriction to flag-fiber tangent has precisely that kernel, giving excess ranks v and w-v-1. Quotient Euler sequence gives top Chern sum with coefficient (n+1-i); projective-bundle pushforward retains only h^n, hence (-1)^n(n+1). Verified both n=0 endpoints, ordinary rational Chow, retained support and canonical equivariance, without global splitting. Stacks §42.54.3–5 excess and §42.36.2 projective-bundle formula checked. No defect.

### Level 2: lem-a1-supported-chow-convolution-and-action

Checked steps 1.1–4.1 and all five suppliers. Common-End(W) supports make forgetting the middle factor projective by base change of mu; zero-fiber support is L_u×L_v with L_u projective. Smooth ambient diagonals have codimension 2a_v, giving both exact degree shifts and top-to-top action. Independent-factor diagonal Gysins commute, compose and pass proper pushforwards on these supports; this yields associativity/action law. Smooth-section cancellation proves diagonal units and graph composition identifies the supported zero-section calculation. GL(W) transports supports and operations. Stacks §42.54.8–10 matches the used identities. All endpoint/empty adjacent-correspondence cases valid, inherited AC retained. No defect.

No repairs. Relevant published suppliers remain read-only; no defect established in their used assertions. Next: point sl2 theorem.

### Level 2: thm-a1-nakajima-hecke-correspondence-gives-sl2-action

Read every step and all four dependencies. H0 of each point is C and identity projections send point classes to point classes; both complex dimensions are zero, so the reverse sign is +1. Direct computation on e0,e1 yields EF-FE=diag(1,-1), [H,E]=2E and [H,F]=-2F. Endpoint zero extensions and the standard trace-zero matrix basis agree exactly with Nakajima §4.5 equation (4.5). No extra homology or general correspondence theorem is assumed; no defect.

### Level 3: thm-a1-arbitrary-framing-geometric-sl2-action

Checked all four suppliers and steps 1.1–4.1. Irreducible L_v has top Chow Q b_v directly from absence of higher cycles. Reverse sign exponent 2v+1-w combines with excess sign to (-1)^v; EF=(v+1)(w-v), FE=v(w-v+1), including v=0,w, give all sl2 brackets. F^v b0=(-1)^(v(v-1)/2)v! b_v; distinct rational H weights and nonzero E^v coefficients establish irreducibility, with nilpotence and w=0 included. Rephasing yields standard divided powers. GL(W) fixes top fundamental classes; no equivariant-parameter assertion. Inherited AC is retained in Given and dependencies. Nakajima Example 10, §§4.2–4.5 conventions checked; no defect.

Levels 2–3 complete without edits or blockers. Next: normalized Fock theorem and degree-one example.

### Level 6: thm-jordan-quiver-hall-module-realizes-normalized-heisenberg-fock-action

Read all four proof steps and all ten direct suppliers, including current generic Hall and Green-pairing proofs. Exact generator map is u_(1^r)↦t^(-r(r-1)/2)e_r over Laurent coefficients then K=Q(t). Orthogonal norm ratio for adding part n is n(m_n+1)/(t^n-1); all denominators are nonzero in K. It proves the displayed adjoint on every pair of power-sum basis elements, not only equal-degree examples. Renormalization gives formal partial derivative; product rule gives [P_n,X_m]=delta_nm id with correct bracket orientation. Polynomial direct-sum elements have finite support, so vacuum/spanning uses no completion or analytic limit; absent part and empty partition give zero derivative. Checked Schiffmann §2.4 equation (2.9) and ordinary Hall-form suppliers. No defect.

The generic Hall supplier proof uses polynomial subspace-profile counts, kernel-flag unitriangularity and polynomial specialization; its generator scaling is exactly the one used here. The Green supplier proves the pairing by double-flag orbit counting and formal exponential comparison, then rational-function interpolation. Its degree-d factor t^(-d) converts the Hall–Littlewood norm into the asserted Green norm. No outside repair is required. Next: degree-one example.

### Level 7: ex-degree-one-green-pairing-normalization-of-jordan-fock-action

Checked Verification 1.1–2.1 against its four current suppliers. For partition (1^r), z=r!, giving ordinary norm r! and Green norm r!/(t-1)^r. Orthogonality against every degree-(r-1) power monomial, with all other degrees orthogonal, forces the adjoint coefficient from the consecutive norm ratio: r and r/(t-1). Finite-dimensional homogeneous pieces ensure existence and uniqueness; r=0 has norm 1 and zero adjoints. Multiplication by t-1 restores the exact derivative. All calculations are over Q(t), where t-1 is nonzero; no specialization at t=1 or analytic completion is asserted. No defect.

All nine required risk reviews are complete. No carrier was edited, no mathematical defect was established, and no escalation remains.

## Sources and prerequisite evidence

The review above is of the authored arguments and the actual direct suppliers, not of the scaffold worksheets. The six foundational suppliers of the A1 definition, Grassmannian chart/dimension and projective-bundle suppliers, all declared Chow suppliers, all ten Fock suppliers, and the four degree-one suppliers were opened. The current generic-Hall and Green-pairing proofs were read independently as prerequisite context; no outside producer was edited or certified. This is not a re-audit of every transitive prerequisite beneath these suppliers.

External comparisons actually opened:

- [Nakajima](https://arxiv.org/pdf/1611.10000v1), Example 10, PDF p. 9 (printed p. 8), and §§4.4–4.5, PDF pp. 15–16. Checked positive-stability convention, cotangent model, Hecke construction and equation (4.5)'s reverse sign. The local typed inclusion equations were checked directly rather than copying the ill-typed printed equations.
- [Stacks, §42.54](https://stacks.math.columbia.edu/tag/0FBI), especially Lemmas 42.54.3–5 and 42.54.8–10: exact excess sequence, base-change and composition hypotheses. All schemes here are finite type over C and the used diagonals/zero sections are regular embeddings in smooth spaces.
- [Stacks, projective bundle formula](https://stacks.math.columbia.edu/tag/02TX): quotient convention and the top relative hyperplane pushforward used by the Euler calculation.
- [Schiffmann](https://arxiv.org/pdf/math/0611617v2), §2.4, PDF pp. 29–30, equation (2.9): exact generator scaling and power-sum Green normalization, checked against the locally proved suppliers.
- [Macdonald](https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf), I §4, printed pp. 62–64 (PDF pp. 73–75), equations (4.1), (4.5)–(4.7) and the finite dual-kernel argument. Checked the ordinary Hall form separately from the Green form. The web text provided the complete relevant argument; the attempted local pdftotext fallback was unavailable and supplied no evidence.

## Disposition and checks

- Required decisions: zero. Scope routes no touched/page/reader/refuter obligations; `decisions: []` is intentional. No invented audit-enrichment decision is added for risk-review metadata.
- Repairs: none; no claim, Definition, dependency or page changed. All 13 current raw item SHA256 values equal the reader-post `item_sha256` values, and all pre/post item/contract/manifest/page projections agree. Only nine `risk_review` objects were updated in the owning contract.
- Published findings: none established. Published content stayed read-only; no published-ledger entry or defect-ledger row is warranted.
- Consumer records: all 13 existing cross-batch rows remain intact. Owned Hall/Fock consumers use the untwisted algebra, exact generic generator map and Green normalization, with finite Heisenberg brackets over Q(t). Page reading routes confer no extra logical supplier. No defining clause changed, so no consumer repair propagation is triggered. Stable IDs and any proposed withdrawals are preserved. A focused review note is appended to the frontier dependency ledger.
- `node tools/risk-report.mjs research/non-ml-math-remaining-81-2026-10-18-batch-53.proof-contracts.json`: exit 0; 13 routed, zero errors; nine HIGH/CRITICAL.
- Same command with `--require-reviewed`: exit 0; all nine complete.
- `node tools/proof-contract.mjs research/non-ml-math-remaining-81-2026-10-18-batch-53.proof-contracts.json --strict`: exit 0; 13/13 checked, zero errors and warnings. An initial help probe used the nonexistent plural filename `proof-contracts.mjs`; this was a mechanical command error, corrected by running the real singular tool above.
- No changed item paths, so reflow, precheck and proof-layout are not applicable. No judgment, stamping, gate battery, stage transition, publication or push was performed.

No unresolved mathematical blocker or owner decision is required by this dispatch. The engine retains stamping and gate duties.

Live-run read-only status check succeeded: Step 3a is active and no worker was in flight in the reported snapshot. The engine reports an unrelated batch-18 collection failure (collect-18 failed three times); this dispatch neither changes its state nor claims to resolve it. Batch-53 local review has no blocker.
