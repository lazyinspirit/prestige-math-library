# Published consumer and supplier maintenance ledger

These records identify defects in read-only published mathematics. A closed Step5 finding disposition does not repair a published carrier.

## Deduplicated classification index

| Published item | Classification | Status | Record |
|---|---|---|---|
| `def-alternating-k-linear-map` | false published characteristic-two remark | open; mathematics-owner disposition required | `physics-em-sr-40-2026-10-08-batch-1-published-char2-symmetry` |
| `thm-total-derivative-computes-directional-and-partial-derivatives` | nonfatal: missing zero-direction case | Open mathematical maintenance; Step5 finding nonfatal-recorded | [physics-em-sr-40-2026-10-08-b20-zero-direction](#physics-em-sr-40-2026-10-08-b20-zero-direction) |
| `thm-gradient-represents-directional-derivatives-and-steepest-ascent` | nonfatal: missing equality necessity | Open mathematical maintenance; Step5 finding nonfatal-recorded | [physics-em-sr-40-2026-10-08-b20-gradient-converse](#physics-em-sr-40-2026-10-08-b20-gradient-converse) |
| `thm-the-classical-stokes-theorem-for-a-c2-surface-patch` | fatal: false intermediate C1 curl claim | Open; batch-24 escalation | [physics-em-sr-40-2026-10-08-b24-stokes-regularity](#physics-em-sr-40-2026-10-08-b24-stokes-regularity) |
| `thm-existence-and-uniqueness-of-a-maximal-ode-solution` | nonfatal: omitted representative gluing in openness argument | Open mathematics-owner maintenance; batch-7 nonfatal-recorded | [physics-cm-qm-gr-79-2026-10-11-b7-maximal-gluing](#physics-cm-qm-gr-79-2026-10-11-b7-maximal-gluing) |
| `def-locally-lipschitz-in-the-state-variable` | nonfatal: undefined cylinder family | Open mathematics-owner maintenance; Step 3a nonfatal-recorded | [physics-cm-qm-gr-79-2026-10-11-b2-cylinder-definition](#physics-cm-qm-gr-79-2026-10-11-b2-cylinder-definition) |
| `def-action-and-angle-coordinates` | missing smooth quotient atlas | open; mathematics-owner maintenance | `physics-cm-qm-gr-79-2026-10-11-3a-batch-6-published` |
| `thm-liouville-arnold-action-angle-theorem` | two-form primitive cited from one-form lemma | open; mathematics-owner maintenance | `physics-cm-qm-gr-79-2026-10-11-3a-batch-6-published` |
| `thm-tensor-transition-laws-define-a-smooth-vector-bundle` | fatal: reversed tensor-component transition factors | open; mathematics-owner proof repair and import reconciliation required | `physics-cm-qm-gr-79-2026-10-11-3a-batch-66-published-tensor-transition` |
| `lem-linear-functional-annihilating-kernel-of-a-surjection-is-a-transpose-multiple` | nonfatal: row/column mismatch in equivalent Statement | Open mathematics-owner maintenance; main functional identity adequate | [physics-cm-qm-gr-79-2026-10-11-b4-transpose-functional-typing](#physics-cm-qm-gr-79-2026-10-11-b4-transpose-functional-typing) |
| `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis` | nonfatal: display/proof layout | open mathematics-owner maintenance; adjudication nonfatal-recorded | [physics-cm-qm-gr-79-2026-10-11-b57-orthonormal-layout](#physics-cm-qm-gr-79-2026-10-11-b57-orthonormal-layout) |
| `cor-cauchy-schwarz-inequality-for-l-two` | nonfatal: display/proof layout | open mathematics-owner maintenance; adjudication nonfatal-recorded | [physics-cm-qm-gr-79-2026-10-11-b57-cauchy-schwarz-layout](#physics-cm-qm-gr-79-2026-10-11-b57-cauchy-schwarz-layout) |





| `thm-the-classical-stokes-theorem-for-a-c2-surface-patch` | nonfatal: false C1 curl assertion in proof 5.1 | Open mathematical maintenance; used integral identity independently adequate | [physics-em-sr-40-2026-10-08-b30-stokes-curl-regularity](#physics-em-sr-40-2026-10-08-b30-stokes-curl-regularity) |

| `prop-regular-common-level-sets-are-lagrangian-submanifolds` | nonfatal: incorrect bracket sign in Proof 1.1 | Open mathematics-owner maintenance; Step 3a nonfatal-recorded | [physics-cm-qm-gr-79-2026-10-11-b30-lagrangian-sign](#physics-cm-qm-gr-79-2026-10-11-b30-lagrangian-sign) |

## physics-em-sr-40-2026-10-08-b20-zero-direction

Published ID: `thm-total-derivative-computes-directional-and-partial-derivatives`. Run: `physics-em-sr-40-2026-10-08`; reporting group: `batch-20`; consumer: `thm-em-uncertainty-analysis`. Snapshot raw SHA256: `1166fd81e189cef59466041f45af0b44691398851cb20398b47941cf9a9f12dd`.

Evidence: Proof1.1-2.1 normalizes by ||tv|| without v!=0. The exact total-derivative definition permits only nonzero increments. Complete the v=0 branch by the identically-zero directional quotient and linearity Df(a)0=0; retain the existing v!=0 argument.

Suppliers: def-total-derivative-in-euclidean-space; def-directional-and-partial-derivatives; lem-euclidean-linear-maps-have-matrices-and-are-bounded.

Consumer disposition: thm-em-uncertainty-analysis F15, steps6.1-7.1 consumes only v=1 and unit u. Both are nonzero; zero output coordinates do not change the source direction. The finding is `confirmed_nonfatal`, with closed adjudication row `physics-em-sr-40-2026-10-08-b20-zero-direction` (`nonfatal-recorded`). This independently establishes adequacy of the consumed clause; it does not certify or repair the whole supplier.

Status: open published mathematical maintenance, routed to the mathematics owner through Step5b. Strategy: the immediate surgical proof insertion stated above, followed by its owners required checks; original and import remain unchanged by this physics worker. Evidence report: `research/physics-em-sr-40-2026-10-08-alpha-batch-20-5a.md`; original findings: reader20 findings2 and3.

## physics-em-sr-40-2026-10-08-b20-gradient-converse

Published ID: `thm-gradient-represents-directional-derivatives-and-steepest-ascent`. Run: `physics-em-sr-40-2026-10-08`; reporting group: `batch-20`; consumer: `thm-em-uncertainty-analysis`. Snapshot raw SHA256: `117877c5c3163b83e36e56e5aeafa3af21d50a19ad46e8035d21d8e2aead7839`.

Evidence: Statement equality holds exactly at the normalized gradient; Proof2.1 gives attainment but omits necessity. For nonzero gradient write w=gradient/||gradient||; equality for unit v gives <w,v>=1, so ||v-w||^2=2-2<w,v>=0 and norm separation gives v=w.

Suppliers: thm-total-derivative-computes-directional-and-partial-derivatives; def-jacobian-matrix-and-gradient; thm-cauchy-schwarz-and-the-euclidean-norm; def-euclidean-inner-product.

Consumer disposition: thm-em-uncertainty-analysis F17, steps1.2 and7.1 consumes only the proved gradient/Jacobian pairing in unit direction u. No extremizer characterization is consumed. The finding is `confirmed_nonfatal`, with closed adjudication row `physics-em-sr-40-2026-10-08-b20-gradient-converse` (`nonfatal-recorded`). This independently establishes adequacy of the consumed clause; it does not certify or repair the whole supplier.

Status: open published mathematical maintenance, routed to the mathematics owner through Step5b. Strategy: the immediate surgical proof insertion stated above, followed by its owners required checks; original and import remain unchanged by this physics worker. Evidence report: `research/physics-em-sr-40-2026-10-08-alpha-batch-20-5a.md`; original findings: reader20 findings2 and3.

## lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval

Run `physics-em-sr-40-2026-10-08`, Alpha batch-4. Published pinned mathematical supplier; raw SHA256 `993f0404d772f05ad036d289e7f40d605fe3f9cd0160605558ce0c2ebbe7b1b0`. Status: open maintenance; read-only.

Its Statement permits I=[a,b] without a<b, and asserts a differentiable solution on all of I. At a=b and n=1, the sole point is isolated, so the domain-relative derivative is undefined under `def-vector-valued-derivative-and-integral`. The exact ODE solution definition (`def-first-order-ode-initial-value-problem-and-solution`) requires differentiability on I, including every endpoint; the proof extends to an open interval and then restricts to I without noting that differentiability cannot be restricted to an isolated point.

Owned consumer: `lem-sr-fermi-walker-transport-existence-and-uniqueness`, Facts F4 and proof 2.1/3.1. It explicitly uses only nondegenerate compact intervals inside a worldline domain with at least two points. The published proof 1.1–4.1 supplies this restricted claim: extend C continuously by endpoint constants, apply local existence, use forward/backward Gronwall bounds and compact-region continuation, then restrict to a<b. This use has been independently checked; no singleton ODE claim is needed.

Repair strategy for the mathematics owner: add a<b (and the positive matrix dimension required by the ODE definition), or define the singleton case as initial data without a derivative assertion and handle it separately. Check direct mathematical consumers in their own workspace. No physics edit or certification of the published supplier is made.

<!-- published-maintenance:physics-em-sr-40-2026-10-08-batch-1-published-char2-symmetry -->

## physics-em-sr-40-2026-10-08-batch-1-published-char2-symmetry

- Published supplier: `items/def-alternating-k-linear-map.md`, Remarks, line 41. Raw SHA256 `6b881d2bb3c8fca6c1af5d1b4a348100cb32dfefc31fe27fb95e3958fb66f4d8`; routed carrier-envelope SHA256 `126315b4d5423608c149973f2333ccfb505a7486cb665a393276716dc699f74b`; canonical routed pre-hash `ff7ee44f5e9899b37e43afa45e6253fc1d67e6939cbe3d0e76f50c514710bd2a`. The raw hash matches the pinned import.
- Owned consumer: `def-oriented-minkowski-volume-form`; independently reviewed real-field definition and determinant construction. Its discharge `lem-volume-form-is-independent-of-the-oriented-frame` uses the repeated-argument definition over R, not the erroneous remark.
- Other published context: `cex-antisymmetric-need-not-be-alternating-in-characteristic-two` was read in full. Its coordinate-product witness is symmetric and nonalternating; it does not make all bilinear functions symmetric.
- Evidence: over F2, the sign rule becomes f(v,w)=f(w,v). For f(v,w)=v1*w2 on F2^2, f(e1,e2)=1 but f(e2,e1)=0. Thus symmetry is substantive. Symmetry still need not imply alternation, as f(v,w)=v1*w1 gives f(e1,e1)=1.
- Source checked: [Conrad, Exterior Powers](https://kconrad.math.uconn.edu/blurbs/linmultialg/extmod.pdf), section 2, printed pp. 2–4, Definition 2.1, Example 2.6, Theorems 2.8 and 2.10, with their proofs.
- Disposition: confirmed false claim; maintenance remains open. `reader:1:1` is escalated in `research/physics-em-sr-40-2026-10-08-alpha-batch-1-5a-decisions.json`; no closed finding row or supplier repair is claimed.
- Repair strategy and owner decision: the mathematics owner should replace the tautology claim by the substantive symmetry condition while preserving the failure of symmetry to imply alternation. Alternatively the run owner may issue a sealed exact real-consumer context disposition while keeping this maintenance defect open. Physics imports and the original mathematics workspace were not edited.

## physics-em-sr-40-2026-10-08-b24-stokes-regularity

Run: `physics-em-sr-40-2026-10-08`; reporting group: `batch-24`; published supplier: `thm-the-classical-stokes-theorem-for-a-c2-surface-patch`; owned consumer: `pthm-em-integral-maxwell` (F5; Proof 1.2, 1.4); supplier raw SHA-256: `fb6e1f112f643620ac5277f6c6dfacd0627aebd77bc921312e29e8ec411d9c5a`.

Evidence: Proof 5.1 calls curl F C1 for F merely C1. The field F=(0,0,|x|^(3/2)) is a counterexample to that intermediate regularity assertion. The exact flux supplier `def-oriented-unit-normal-and-flux-of-a-surface-patch` requires continuity only; `lem-the-stokes-integrand-identity-on-a-c2-patch`, `lem-a-vector-line-integral-pulls-back-to-the-parameter-region`, and `thm-greens-theorem-for-finite-unions-of-elementary-regions` establish the identity under the existing public hypotheses.

Status: open published mathematical maintenance and unresolved `reader:24:1` escalation; ledger defect `physics-em-sr-40-2026-10-08-5a-batch-24-stokes-curl-regularity`. The exact identity needed by the consumer has been independently checked, but this is not a repair or certification of the published supplier.

Repair strategy: the mathematics owner replaces C1 by continuous in Proof 5.1, retaining F C1 and the public Statement; the physics import remains pinned/read-only and any reconciliation follows its owner workflow. An owner may instead record a sealed exact-consumer-context disposition while retaining this maintenance finding. Evidence: `research/physics-em-sr-40-2026-10-08-alpha-batch-24-5a.md` and `research/physics-em-sr-40-2026-10-08-alpha-batch-24-5a-decisions.json`.

| `thm-the-classical-stokes-theorem-for-a-c2-surface-patch` | false regularity assertion; inaccurate locator | `em-sr40-5a-b13-published-1`, `em-sr40-5a-b13-published-2` | open |
| `lem-a-vector-line-integral-pulls-back-to-the-parameter-region` | inaccurate locator | `em-sr40-5a-b13-published-3` | open |
| `lem-the-stokes-integrand-identity-on-a-c2-patch` | inaccurate locator | `em-sr40-5a-b13-published-4` | open |
| `thm-greens-theorem-for-finite-unions-of-elementary-regions` | inaccurate locator | `em-sr40-5a-b13-published-5` | open |

<!-- physics-em-sr-40-2026-10-08:batch-13:begin -->

## Batch 13 — physics-em-sr-40-2026-10-08

### `em-sr40-5a-b13-published-1` (`reader:13:1`)

Supplier: `thm-the-classical-stokes-theorem-for-a-c2-surface-patch`. Owned consumer: `ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries`. Current raw imported hash: `fb6e1f112f643620ac5277f6c6dfacd0627aebd77bc921312e29e8ec411d9c5a` (matches import pin). Location: Proof, step 5.1: the assertion that curl F is a C1 field.

Only F in C1 is assumed. For F(x1,x2,x3)=(0,0,x1|x1|), curl F=(0,-2|x1|,0), which is continuous but not differentiable at x1=0. The flux definition requires only continuity, so the theorem can retain its statement by correcting this false regularity assertion; no C2 premise is available.

Status: **open; deferred to original mathematics owner**. Required suppliers: rank-free pullback, Stokes-integrand and finite-Green identities plus the continuous-field flux definition; their exact local uses are independently reviewed in [research/physics-em-sr-40-2026-10-08-alpha-batch-13-5a.md](physics-em-sr-40-2026-10-08-alpha-batch-13-5a.md). Strategy: correct the published regularity wording to continuity / correct the OpenStax section URL or Lebl theorem locator, preserving the sound mathematical Statement, then reconcile pinned imports only through owner controls. Alternatively the lead may explicitly disposition the exact current consumer use while retaining this maintenance finding; no such receipt is asserted here.

### `em-sr40-5a-b13-published-2` (`reader:13:2`)

Supplier: `thm-the-classical-stokes-theorem-for-a-c2-surface-patch`. Owned consumer: `ex-em-elementary-mathematical-prerequisites-hypothesis-boundaries`. Current raw imported hash: `fb6e1f112f643620ac5277f6c6dfacd0627aebd77bc921312e29e8ec411d9c5a` (matches import pin). Location: Frontmatter, sources.references[1]: OpenStax Theorem 6.19 URL.

The reference names Theorem 6.19 but links [OpenStax §6.8](https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem), inspected as section 6.8 / Theorem 6.20 (divergence). The named Stokes theorem is at [OpenStax §6.7](https://openstax.org/books/calculus-volume-3/pages/6-7-stokes-theorem), Theorem 6.19. Correct the URL or provide the actual intended locator; the local proof is separately present.

Status: **open; deferred to original mathematics owner**. Required suppliers: rank-free pullback, Stokes-integrand and finite-Green identities plus the continuous-field flux definition; their exact local uses are independently reviewed in [research/physics-em-sr-40-2026-10-08-alpha-batch-13-5a.md](physics-em-sr-40-2026-10-08-alpha-batch-13-5a.md). Strategy: correct the published regularity wording to continuity / correct the OpenStax section URL or Lebl theorem locator, preserving the sound mathematical Statement, then reconcile pinned imports only through owner controls. Alternatively the lead may explicitly disposition the exact current consumer use while retaining this maintenance finding; no such receipt is asserted here.

### `em-sr40-5a-b13-published-3` (`reader:13:3`)

Supplier: `lem-a-vector-line-integral-pulls-back-to-the-parameter-region`. Owned consumer: `lem-em-moving-flux`. Current raw imported hash: `691adf144313d12ed86b2d3a01efa5e11f8fc12e8d70e6e5055e53056f0a0723` (matches import pin). Location: Frontmatter, sources.references[0]: OpenStax section 6.7 URL.

The reference names OpenStax section 6.7 but links [OpenStax §6.8](https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem), which is section 6.8. Both linked sections were opened; the intended section is [OpenStax §6.7](https://openstax.org/books/calculus-volume-3/pages/6-7-stokes-theorem). Correct the section URL and identify the relevant argument. This is a citation defect in a published read-only supplier, not a refutation of its local proof.

Status: **open; deferred to original mathematics owner**. Required suppliers: rank-free pullback, Stokes-integrand and finite-Green identities plus the continuous-field flux definition; their exact local uses are independently reviewed in [research/physics-em-sr-40-2026-10-08-alpha-batch-13-5a.md](physics-em-sr-40-2026-10-08-alpha-batch-13-5a.md). Strategy: correct the published regularity wording to continuity / correct the OpenStax section URL or Lebl theorem locator, preserving the sound mathematical Statement, then reconcile pinned imports only through owner controls. Alternatively the lead may explicitly disposition the exact current consumer use while retaining this maintenance finding; no such receipt is asserted here.

### `em-sr40-5a-b13-published-4` (`reader:13:4`)

Supplier: `lem-the-stokes-integrand-identity-on-a-c2-patch`. Owned consumer: `lem-em-moving-flux`. Current raw imported hash: `e714175c4a98978d3dfabc5b71eec38c82171b1ee665fa44d047aafc712c079c` (matches import pin). Location: Frontmatter, sources.references[0]: OpenStax section 6.7 URL.

The reference names OpenStax section 6.7 but links [OpenStax §6.8](https://openstax.org/books/calculus-volume-3/pages/6-8-the-divergence-theorem), which is section 6.8. Both linked sections were opened; the intended section is [OpenStax §6.7](https://openstax.org/books/calculus-volume-3/pages/6-7-stokes-theorem). Correct the section URL and identify the relevant argument. This is a citation defect in a published read-only supplier, not a refutation of its local proof.

Status: **open; deferred to original mathematics owner**. Required suppliers: rank-free pullback, Stokes-integrand and finite-Green identities plus the continuous-field flux definition; their exact local uses are independently reviewed in [research/physics-em-sr-40-2026-10-08-alpha-batch-13-5a.md](physics-em-sr-40-2026-10-08-alpha-batch-13-5a.md). Strategy: correct the published regularity wording to continuity / correct the OpenStax section URL or Lebl theorem locator, preserving the sound mathematical Statement, then reconcile pinned imports only through owner controls. Alternatively the lead may explicitly disposition the exact current consumer use while retaining this maintenance finding; no such receipt is asserted here.

### `em-sr40-5a-b13-published-5` (`reader:13:5`)

Supplier: `thm-greens-theorem-for-finite-unions-of-elementary-regions`. Owned consumer: `lem-em-moving-flux`. Current raw imported hash: `470312dbef674c246d22677ef24874404609faee6575ccc41ad086651011966b` (matches import pin). Location: Frontmatter, sources.references[0].title: Lebl Theorem 10.6.1.

The currently linked [Lebl §10.6](https://www.jirka.org/ra/html/sec_mvgreenstheorem.html) identifies Green as Theorem 10.6.4, with its type-III proof immediately following (lines 625-669); 10.6.1 is a domain definition. A dated older edition might explain the numbering, but none is specified. Identify that edition or update the locator. The source argument and the local finite-gluing proof agree on the asserted identity.

Status: **open; deferred to original mathematics owner**. Required suppliers: rank-free pullback, Stokes-integrand and finite-Green identities plus the continuous-field flux definition; their exact local uses are independently reviewed in [research/physics-em-sr-40-2026-10-08-alpha-batch-13-5a.md](physics-em-sr-40-2026-10-08-alpha-batch-13-5a.md). Strategy: correct the published regularity wording to continuity / correct the OpenStax section URL or Lebl theorem locator, preserving the sound mathematical Statement, then reconcile pinned imports only through owner controls. Alternatively the lead may explicitly disposition the exact current consumer use while retaining this maintenance finding; no such receipt is asserted here.

<!-- physics-em-sr-40-2026-10-08:batch-13:end -->

Binding clarification for `physics-em-sr-40-2026-10-08-batch-1-published-char2-symmetry`: active defect-ledger row `physics-em-sr-40-2026-10-08-batch-1-published-char2-symmetry-binding` supersedes the initial row’s raw/envelope hash-label error without resolving the published finding.

## physics-em-sr-40-2026-10-08-b30-stokes-curl-regularity

Run `physics-em-sr-40-2026-10-08`; group `batch-30`. Published read-only ID: `thm-the-classical-stokes-theorem-for-a-c2-surface-patch`; raw SHA256 `fb6e1f112f643620ac5277f6c6dfacd0627aebd77bc921312e29e8ec411d9c5a`. Owned consumer: `pthm-em-motional-emf`, F15 and proof 1.1; producer context: `lem-em-moving-flux`, whose current proof instead uses the direct pullback/Green argument.

Evidence: supplier proof 5.1 calls curl F a C1 field when F is only C1. For F(x,y,z)=(0,|x|^(3/2),0), F is C1, whereas its curl is (0,0,(3/2) sign(x) sqrt(|x|)), continuous but not differentiable at x=0. Suppliers: `def-divergence-and-curl-of-a-c1-vector-field`, `lem-the-stokes-integrand-identity-on-a-c2-patch`, `thm-greens-theorem-for-finite-unions-of-elementary-regions`, `lem-a-vector-line-integral-pulls-back-to-the-parameter-region`, `def-oriented-unit-normal-and-flux-of-a-surface-patch`.

Consumer disposition: independently read the full supplier proof. Its integral identity is proved by C1 pullbacks, Green and arc pullback; continuous curl suffices for flux. The owned motional consumer has C2 E and C1 v cross B, so it needs this valid continuous-curl identity, never a derivative of that curl. This proof adjective is nonfatal to the actual used clause; no published bytes or audit markers changed.

Status: open published mathematical maintenance, routed to the mathematics owner through Step 5b. Repair strategy: replace C1 by continuous in proof 5.1, preserving the theorem, then perform the mathematics owner’s local checks. Evidence report: `research/physics-em-sr-40-2026-10-08-alpha-batch-30-5a.md`.

## physics-cm-qm-gr-79-2026-10-11-b2-cylinder-definition

Run `physics-cm-qm-gr-79-2026-10-11`; group `batch-2`. Published read-only supplier: `def-locally-lipschitz-in-the-state-variable`, Definition (both ordinary and parameter-family clauses). Current raw import SHA256 `ae015e1f76770988632ebca4012e0df93fd03340b388190d76e521690bc94597`. Routed finding carrier-envelope hash `eb3b8ff88b5ec3fafaa5218cb5a42e8086b9f6a42d34afc23d5a251f8a22684d` is not a raw file hash.

Evidence: both clauses quantify over compact cylinders without specifying their factors. Exact dependencies `def-first-order-ode-initial-value-problem-and-solution`, `def-lipschitz-holder-contraction` and `lem-metrics-on-rn` provide no cylinder family. The Picard supplier explicitly uses `[t0-h,t0+h] x closed B(x0,r)`, supplying intended local context. The owned consumer `thm-cm-compact-continuation-for-locally-lipschitz-odes`, L2/Proof 5.2, now explicitly uses compact time intervals times positive-radius closed state balls; `ex-cm-balances-continuation-boundary-checks`, Verification 1.2, defines interval cylinders and proves its polynomial field inequality.

Disposition: `reader:2:1` confirmed nonfatal, ledger `physics-cm-qm-gr-79-2026-10-11-3a-batch-2-published-cylinder` nonfatal-recorded. The current consumer proof has been independently checked; this does not certify or repair the published definition. Status: open mathematics-owner maintenance. Repair strategy: define both cylinder families and their allowed time/state/parameter factors in the original mathematical workspace, then inspect its mathematical consumers and reconcile pinned imports through the owner workflow. Report: `research/physics-cm-qm-gr-79-2026-10-11-alpha-batch-2-3a.md`.

Batch 9 supplement (`alpha-batch-9`): the current consumers `thm-cm-stability-of-extreme-principal-axes` [L3], `thm-cm-instability-of-the-intermediate-axis` [L1], and `thm-cm-linearized-torque-free-euler-equations` [L4] prove their state-Lipschitz inequalities on every bounded state ball. Thus they satisfy the intended compact time-interval times closed-state-ball convention used by Picard–Lindelof, independently of the undefined published terminology. Exact suppliers: `thm-heine-borel-rn`, `thm-cross-product-norm-is-the-two-vector-gram-determinant`, and `thm-cauchy-schwarz-and-the-euclidean-norm`. Existing published classification/status and original read-only bytes are preserved; no additional published defect is asserted. Evidence: `research/physics-cm-qm-gr-79-2026-10-11-alpha-batch-9-3a.md`.

Batch-16 supplement (`reader:16:1`): confirmed nonfatal, closed adjudication row `physics-cm-qm-gr-79-2026-10-11-3a-batch-16-published-cylinder`. Owned consumer `lem-cm-quaternion-lift-of-a-prescribed-body-angular-velocity`, F7/Proof 1.1, defines compact interval × compact state-set factors and proves a state-Lipschitz bound on all of H locally uniformly in time. The exact published supplier and its three declared dependency Definitions/Statements were independently inspected. The ordinary and parameter-cylinder families remain undefined in the published item; the existing classification index and open mathematics-owner repair strategy above still apply. No published/imported edit was made. Evidence: `research/physics-cm-qm-gr-79-2026-10-11-alpha-batch-16-3a.md`.


Batch-31 supplement (`alpha-batch-31`): owned `pthm-cm15-central-scattering`, Facts [L6]/Proof 2.1, uses an explicit positive-radius closed convex state ball and bounds the continuous Cartesian derivative there, giving the Picard state-Lipschitz inequality along each segment. `pthm-cm15-rutherford-model`, Facts [L1]/Proof 2.1, consumes the Coulomb supplier's identical local convex-ball construction. The latter has a separate open tail-estimate defect at supplier Proof 4.1, routed to batch 5; this supplement does not certify that proof. Existing cylinder-family classification, exact published supplier ID, original read-only status and mathematics-owner repair strategy remain unchanged. Evidence: `research/physics-cm-qm-gr-79-2026-10-11-alpha-batch-31-3a.md`.

## physics-cm-qm-gr-79-2026-10-11-3a-batch-6-published

Published/imported supplier: `def-action-and-angle-coordinates`; current raw SHA-256 `e61131e55422ebb263e2f00e9d943ad0e168fe62386a4d359fd5b2b49577de5e`. Original/imported mathematical bytes remain read-only.

Evidence: Definition uses a diffeomorphism to B × (R/Z)^n and d theta without specifying quotient smooth charts. Its sole logical supplier defines symplectic manifolds, and the torus supplier provides quotient topology. Required repair: standard short-box lift charts with integer-translation transitions and invariant angle differentials. Reader:6:8 remains escalated; local theorem and radian-scaling consumers now supply the missing structure locally. Source location: Meinrenken, Symplectic Geometry (Fall 2024), sections 6.1-6.2, Proposition 6.13 and Definitions 6.16/6.18, printed pp.70-74, https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf. Owner must resolve published maintenance and original mathematical consumers.

Published/imported supplier: `thm-liouville-arnold-action-angle-theorem`; current raw SHA-256 `bd90c50656dddf098c31571a1ce98775f82e4785ef26081160d6188957eb7b35`. Original/imported mathematical bytes remain read-only.

Evidence: Proof 5.2 invokes F4 for tau=sigma*omega=d alpha, while F4 cites thm-poincare-lemma-for-star-shaped-domains, whose exact Statement gives potentials only for closed C1 vector fields/one-forms. It does not supply a primitive of a two-form. Required repair: cite/apply thm-poincare-lemma-for-differential-forms-on-star-shaped-domains at k=2 with all hypotheses, or prove the radial construction. Owned local suppliers lem-cm-closed-two-form-radial-primitive and thm-cm-liouville-arnold-action-angle-repaired already close this use independently; the published theorem is only a contextual remark, not a logical premise. Status: open mathematics-owner maintenance; this is a context alert, not an additional routed decision or a repaired published finding.


## physics-cm-qm-gr-79-2026-10-11-b7-maximal-gluing

Run `physics-cm-qm-gr-79-2026-10-11`; alpha `batch-7`. Published supplier `thm-existence-and-uniqueness-of-a-maximal-ode-solution`, Proof 1.1; consumer `ex-cm-domain-escape-in-finite-time`. Raw import SHA256 `51f5c145f2c831786179aef798b8cc387dba82a83072e2ec3d376ca32286c45b`. The union family must include the extension obtained by gluing an existing representative through t0 to the local solution through its graph point. Its already cited `lem-locally-unique-ode-solutions-agree-and-glue-on-overlaps` supplies agreement and gluing; `thm-picard-lindelof-local-existence-and-uniqueness` supplies local existence. This short omission is confirmed nonfatal and recorded in closed adjudication row `physics-cm-qm-gr-79-2026-10-11-batch-7-reader-7-2`; published maintenance remains open. Repair strategy: mathematics owner inserts the gluing sentence, checks its own consumers, and reconciles imports through its workflow. No published bytes changed.

Batch-7 supplement to the existing cylinder-definition record: `reader:7:1` is confirmed nonfatal, row `physics-cm-qm-gr-79-2026-10-11-batch-7-reader-7-1`. Owned consumer `thm-cm-averaging-for-fast-periodic-oscillations`, F2, explicitly constructs a local compact time interval and convex positive-radius state ball and derives a uniform inequality from continuous D_x f. Undefined published cylinder factors remain owner maintenance; source `def-locally-lipschitz-in-the-state-variable` and its mathematical originals remain unchanged.

## physics-cm-qm-gr-79-2026-10-11-b30-lagrangian-sign

Run `physics-cm-qm-gr-79-2026-10-11`; group `batch-30`; published supplier `prop-regular-common-level-sets-are-lagrangian-submanifolds`; owned consumer `pthm-cm14-regular-tori`, Facts F4 and Proof 1.1. Current import raw SHA256 `894907c1ce42f4513fec9f1c8866a5475acc048756ee19bae6bfcf62fb880539`. Routed observed envelope SHA256 `07ce8d8e879fec808fca3ba1fd37bbf53bcb885874aadcc6009ef588a8d516b3`; historical pre envelope `a503ba11e8931d3da6c974f25ba6a0d1fa45b4a5503fdc502233c8bd803b744f`.

Evidence: current supplier Proof 1.1 incorrectly writes dFj(XFi)=omega(XFj,XFi)=-{Fj,Fi}. Exact suppliers `def-hamiltonian-vector-field-and-hamiltonian-function` and `def-poisson-bracket-on-a-symplectic-manifold` give i_Xf omega=df and {f,g}=omega(Xf,Xg), hence the sign is positive. The expression is used only with zero bracket. The rest of the tangent-space/independence/isotropy argument is sound; the owned consumer independently proves it with the correct sign in its Proof 1.1. Reader locator Facts F1 is imprecise; the exact present location is Proof 1.1.

Disposition: reader:30:1 confirmed_nonfatal; closed defect row `physics-cm-qm-gr-79-2026-10-11-3a-batch-30-published-lagrangian-sign` is nonfatal-recorded, not a supplier repair. Status: open mathematics-owner maintenance. Strategy: replace the erroneous minus sign by the positive bracket, preserve the Lagrangian conclusion and check actual mathematical consumers in the mathematics workspace. The imported snapshot and root original remain read-only. Report: `research/physics-cm-qm-gr-79-2026-10-11-alpha-batch-30-3a.md`.

## physics-cm-qm-gr-79-2026-10-11-3a-batch-66-published-tensor-transition

Published item: `thm-tensor-transition-laws-define-a-smooth-vector-bundle`, Proof 2.1. Consumer: `def-gr-tensor-fields-and-components` (b); downstream owned component/contraction and mixed-tensor carriers retain this dependency closure. Exact suppliers: `thm-change-of-coordinate-formula-for-tangent-bases`, `lem-cotangent-coordinate-changes-use-the-inverse-transpose-jacobian`, `def-type-r-s-tensor-bundle`, `def-vector-bundle-chart-and-transition-function`, `thm-vector-bundle-construction-from-a-smooth-cocycle`.

Evidence: the chart convention J=D(y o x^-1) gives dy=J dx and partial_y=J^-1 partial_x; tensor upper slots evaluate on covectors, hence upper J and lower J^-1. Proof 2.1 states the reverse. Scaling y0=2x0 gives vector component 2 instead of 1/2. [Lee, Introduction to Smooth Manifolds, equations (11.4)–(11.7), printed pp. 275–276](https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf) confirms the component rules. Imported raw SHA-256 `7e1258dd86981791c0f74ff163085cabd7ec9831aafc04af419ffcc9a14eb6b1` matches `research/math-imports.json`.

Status: OPEN; `reader:66:1` escalated, fatal proof gap, no published or imported edits. Strategy: mathematics owner specifies and repairs the exact x-to-y cocycle proof, checks its cover/choice hypotheses and actual published consumers, then resolves the physics dependency hold through authorized immutable-import reconciliation. The theorem conclusion is not claimed false. Evidence and local consumer distinctions: `research/physics-cm-qm-gr-79-2026-10-11-alpha-batch-66-3a.md`.

## physics-cm-qm-gr-79-2026-10-11-b4-transpose-functional-typing

Published ID: `lem-linear-functional-annihilating-kernel-of-a-surjection-is-a-transpose-multiple`. Run: `physics-cm-qm-gr-79-2026-10-11`; reporting group: `batch-4`; owned consumer: `lem-cm-constraint-multipliers-and-accelerations` F1, Proof 1.1. Raw snapshot SHA256: `c324294f6e66291bc7d248fd2037a5bf06e8d564a888d0323c92440528710d99`.

Evidence: the final Statement sentence calls the row vector of the functional `A^T lambda`, whereas A is n by m and lambda is a column in R^n: A^T lambda is m by 1, while the functional row is lambda^T A. The preceding equation ell(v)=<lambda,Av> and the finite-standard-basis proof are correct. Consumer 1.1 uses that functional equation, then proves R=A^T lambda by testing against every v; it does not use the mislabelled row sentence.

Suppliers: `def-linear-map`, `def-matrix-product-and-identity-matrix`, `def-transpose-of-a-matrix`, `def-euclidean-inner-product`, `lem-standard-basis-of-f-n`. Status: open published mathematical maintenance; consumer main clause independently adequate. Strategy: change row sentence to row=lambda^T A, or name A^T lambda the column coefficient vector, then run mathematics-owner checks and import reconciliation. Imported and original carrier remain read-only.

### physics-cm-qm-gr-79-2026-10-11-b4-cylinder-use

Batch-4 supplement to the existing `def-locally-lipschitz-in-the-state-variable` cylinder-definition record: owned `prop-cm-ideal-holonomic-system-in-a-time-dependent-chart` Proof 1.1 now explicitly uses compact products [t0-h,t0+h] x closed B((q0,v0),r) inside the open time-state domain. Continuous state derivative has a finite bound there; straight state-segment integration yields one Lipschitz constant. Owned hoop phase-field use likewise has a C1 field on all R2. Local deductions use this concrete compact-product meaning, rather than assuming an undefined cylinder family. Existing published maintenance remains open; no published edit.

## physics-cm-qm-gr-79-2026-10-11-b57-orthonormal-layout

Published/imported supplier: `def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis`; raw SHA-256 `38a58028cba5b72fedda880b9acc6d268039ce4cbcd9c00c552f3c77641521a7`. Consumer: `thm-nrqm-identical-particles-occupation-number-basis`.

Evidence: Definition line 37 closes the formula as $$Because with prose attached; independence formula is likewise embedded. The orthonormal equations, finite independence and empty-family conventions are mathematically sound.

Actual suppliers: def-hilbert-space; def-real-and-complex-inner-product-space; def-orthogonality-and-orthogonal-complement; def-linear-subspace. Status: read-only; open mathematical maintenance. The consumed result is independently adequate, and the finding is closed only as `nonfatal-recorded`, not as a carrier repair. Strategy: Separate displays from prose and reflow; no definition change is needed.

Report: `research/physics-cm-qm-gr-79-2026-10-11-alpha-batch-57-3a.md`.

## physics-cm-qm-gr-79-2026-10-11-b57-cauchy-schwarz-layout

Published/imported supplier: `cor-cauchy-schwarz-inequality-for-l-two`; raw SHA-256 `79f38217a89e18ac1a1333c0c89ff3af65f68e37eecb84bc8e0dd4f5c0d4dce8`. Consumer: `ex-nrqm-identical-particles-exchange-versus-coulomb-terms`.

Evidence: Proof 1.1 repeats L1 and embeds a display in prose; 2.1 places a tag between the words to and p=q=2. Specialization of Holder and its equality criterion at p=q=2 is valid, including zero functions. For complex consumers apply the inequality to the real moduli, which are measurable with unchanged L2 norms.

Actual suppliers: thm-holder-inequality-for-integrals; thm-equality-case-in-holder-inequality. Status: read-only; open mathematical maintenance. The consumed result is independently adequate, and the finding is closed only as `nonfatal-recorded`, not as a carrier repair. Strategy: Remove interior tags, restore the specialization sentence and place valid tags at step ends; preserve the inequality and equality cases.

Report: `research/physics-cm-qm-gr-79-2026-10-11-alpha-batch-57-3a.md`.


### physics-cm-qm-gr-79-2026-10-11-step5-v2-impact-initial-r1-u2-scoped-effects

The owner impact review changed only assigned draft physics-frontier carriers. Exact direct dependency/reference inventory is recorded in [step5-v2-impact-initial-r1-u2.json](research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-impact-initial-r1-u2.json). All 69 inventoried item consumers are draft frontier members; no published mathematical carrier was changed or given an acceptance verdict. The corrected interfaces preserve positive integer Sobolev orders, the tilted dust velocity U=u and explicit Weyl/Schouten construction, finite-factor spin assignments, spectrum-relative isolation, and qualified moment/reduction readings. Classical mechanics retains admissible canonical domains and distinguishes the adopted reference linear elastic balance from exact current-region balances. The unassigned scope consumer `rem-cm17-boundary-regularity-and-scope` needs its final dependency account reconciled; its exact affected clause and minimal repair are recorded in the defect ledger and owner report. This is a local owner audit, not independent review or central certification.

## physics-cm-qm-gr-79-2026-10-11-impact-pass-2-u1-regularity

Assigned draft `def-cm12-regularity`, Definition (a)-(b), unconditionally instantiated the nonempty fibre-full chart of `def-cm07-action-and-mechanical-lagrangian` despite permitting empty Q. Repaired the instantiation to require Q nonempty and recorded vacuous empty-domain regularity; statewise Hessian and inverse-branch predicates are unchanged. Batch-28 empty-boundary contract reconciled. Repair review by alpha-repair, not independent certification. Direct consumers retain their existing statewise or nonempty chart uses; exact inventory is in `research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-impact-initial-pass-2-r1-u1.json`. No imported or published supplier edited.

## physics-cm-qm-gr-79-2026-10-11-impact-pass-2-u2-gaussian-choice

Assigned draft consumer `ex-nrqm-kinematics-gaussian-position-momentum-packet` invoked the full-Choice momentum-representation and spin-s outcome-law statements in F2/F5 while explicitly declaring only Countable Choice. The Example, Given and prerequisite metadata now retain full Choice as well; batch-48 manifest and nonempty-choice contract evidence agree. The Gaussian, Fourier and variance computations are unchanged. No imported or published supplier is defective or edited. Direct contextual consumers are `rem-nrqm-kinematics-examples-scope-limits` and page `qm-massive-particle-kinematics-examples`; both describe the conditional model calculation without claiming a weaker choice hypothesis and remain sound. This is an owner repair review, not independent review or certification. Exact guarded evidence is in `research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-impact-initial-pass-2-r1-u2.json`.

## physics-cm-qm-gr-79-2026-10-11-impact-pass2-u3-hamiltonian-dependency

Consumer: `rem-cm14-scope-of-hamilton-jacobi-and-integrability` (assigned draft frontier, batch 30). Supplier: `def-cm12-hamiltonian`.

Finding: the first paragraph under "Scope of the Hamilton-Jacobi statements" explicitly uses the supplier to identify the chosen chart branch Hamiltonian, including uniqueness on a fixed hyperregular chart, but omitted its formulation dependency. The supplier defines the Cartesian and generalized-coordinate branches from their inverse Legendre maps; the existing prose is accurate.

Repair: declare `def-cm12-hamiltonian` in the consumer deps with role `formulation-prerequisite` and reconcile the same row of the owning batch-30 manifest. No proof contract exists for this nonproof remark. Body, physical scope and empirical qualifications are unchanged; no downstream interface event is created. No published supplier is edited.

Audit status: local owner dependency review and repair only, not independent review, publication or central certification. Exact review guards and focused validation are recorded in `research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-impact-initial-pass-2-r1-u3.json`.

## physics-cm-qm-gr-79-2026-10-11-impact-pass-2-u1-generated-and-cutoff

Assigned draft `ex-cm13-point-transformation-generating-function-and-projection` cited the Cartesian-only physics generating theorem for a generalized source chart. Replaced that use by its existing general mathematical proposition on Omega times R3 and retained the physics theorem only for the Cartesian momentum shift; reconciled the batch-29 citation uses. No Statement/Definition or physical-scope change.

Assigned draft `pthm-cm15-rutherford-model`, Statement 4, incorrectly required an angular acceptance for predictivity despite the revised finite incident preparation. Retained every ideal Rutherford density and angular-band result, and proved finite cutoff rates from the incident-area bound for all Borel angular windows, including the full interval. Removed the unsupported blanket measurement-acceptance claim in its remark; reconciled proof 5.1 in batch-31. Direct dependency/reference consumers and owning-page use are inventoried in the lane report. These are alpha repair reviews, not independent audits; no imported/published supplier was edited.

### physics-cm-qm-gr-79-2026-10-11-impact-pass-2-u2-contract-source-fidelity

Reconciled 27 stale exact supplier quotations in 23 assigned owner contracts against the current Statement/Definition sections. The affected uses preserve nonempty splitting domains, ideal versus incident-cutoff cross-sections, chosen Galilean representative conventions, weighted finite-moment criteria, bounded periodic translation scope, dust tensor variance, derived fluid stress, the Kruskal choice locator, correctly typed screen projectors, chronology openness and eventual half-line limit domains. Consumer arguments were examined and remain valid; their item carriers were unchanged. This metadata repair confers no independent review or published-supplier verdict. Item-specific guarded evidence and exact citation uses are recorded in `research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-impact-initial-pass-2-r1-u2.json`.

### Separate consumer proposal from impact-pass-2-u1

`ex-cm15-rutherford-cutoff-check`, Remarks / Units, still writes `[kappa]=mathsf M ell^3 tau^-2`, whereas its declared unit supplier `def-cm01-units` defines the mass-dimension symbol `mu`. The numeric J m unit and the ideal cutoff calculations remain correct. This item is outside this lane; no edit or gate obligation was taken here. Proposed minimal maintenance: replace the undefined mass-dimension generator only. Evidence and exact affected use are recorded in the lane report; supplier-interface ownership/routing remains with the engine.

## physics-cm-qm-gr-79-2026-10-11-step5-central-scattering-velocity-angle

Assigned draft consumer: `pthm-cm15-central-scattering`, Proof 4.1; supplier use: `def-cm15-asymptotic-data` Definition (iii), which defines signed velocity rotation as the continuous rotation of the velocity direction. The endpoint identity with R_(2Δ−π) alone determines that rotation only modulo 2π.

Local repair: the polar velocity has positive tangential component J/(μρ), so ψ=arccos(ρ′/|r′|) lies in (0,π) and θ+ψ is a continuous real velocity angle. Its incoming and outgoing limits are θ_-+π and θ_+, yielding net rotation 2Δ−π. Existing read-only mathematical suppliers `thm-sine-and-cosine-derivatives`, `thm-quarter-turn-values-and-shift-formulas`, `thm-sine-cosine-signs-monotonicity-and-ranges`, and `thm-continuous-inverse` justify the inverse cosine and its endpoint continuity; no defect or repair to those suppliers is claimed.

Status: locally repaired and reviewed by the assigned repair author; no independent judgment or certification asserted. Statement, physical_scope and empirical qualifications are unchanged, so this proof-only correction creates no consumer-interface event. Owning batch-31 contract and manifest record the actual prerequisites. Source actually consulted: Fitzpatrick §6.4, equations (340)–(351), https://farside.ph.utexas.edu/teaching/336k/Newtonhtml/node51.html. Durable review and focused-check evidence: `research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-impact-initial-pass-3-r1-u2.json`.


### physics-cm-qm-gr-79-2026-10-11-step5-v2-gate-r1-u2-scoped-contract-and-source-review

Assigned draft consumer `ex-nrqm-many-body-two-site-bond-thermal-ensemble`: gate diagnostic 2 identified L2's stale contract quotation from `def-nrqm-many-body-framework-declared-fixed-n-model`. The current finite-mode branch explicitly adopts retained-space energy data rather than full-space P5 dynamics. Verification 1.1-3.1 uses only K=C^2, N=1, W=0, the assigned 2x2 h and the two-level Gibbs formulas, so its use remains valid. Replaced the obsolete whole-Definition quote in owning batch-62 contract with the exact current finite-mode Hamiltonian/energy/non-interacting passage (d)(iii)-(f); item untouched. No new supplier-interface event or outside consumer repair arises.

Assigned draft `post-cm02-interactions`: completed the missing source/scope risk-review metadata in its batch-18 contract after inspecting all clauses and relevant Tong, Likharev and Stewart source passages. Corrected only its two Likharev source locators: gravitational law/footnote11 on Chapter1 pp4-5/PDF8-9; central internal-force discussion on pp9-10/PDF13-14. Formulation, physical_scope and empirical qualifications are unchanged. No mathematical or published-supplier defect asserted. Owner repair review only, with engine judgment/certification still outstanding; evidence and actual checks belong in `research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-gate-r1-u2.json`.


## physics-cm-qm-gr-79-2026-10-11-gate-r1-u3-continuity-empty-region

Assigned draft `thm-nrqm-magnetic-and-detection-smooth-local-continuity-calculation`, Proof 2.1, allowed an empty bounded region D but took a maximum over its empty closure. The repair handles D=empty first: both integrals are zero and the derivative identity is immediate; the compact-maximum argument is retained for D nonempty. Actual suppliers `thm-differentiation-under-the-integral-sign` and `thm-divergence-theorem-for-bounded-c-one-euclidean-domains` remain read-only; no defect in them is asserted. Batch-42 empty-boundary metadata now records this checked proof branch. Statement, choice assumptions and physical interpretation are unchanged; this proof-only repair creates no downstream interface event. Status: local repair-author review, without independent judgment, item resealing or central certification. Guarded review and focused checks: `research/physics-cm-qm-gr-79-2026-10-11-step5-v2/step5-v2-gate-r1-u3.json`.
