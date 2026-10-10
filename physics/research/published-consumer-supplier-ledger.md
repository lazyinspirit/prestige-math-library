# Published consumer and supplier maintenance ledger

These records identify defects in read-only published mathematics. A closed Step5 finding disposition does not repair a published carrier.

## Deduplicated classification index

| Published item | Classification | Status | Record |
|---|---|---|---|
| `def-alternating-k-linear-map` | false published characteristic-two remark | open; mathematics-owner disposition required | `physics-em-sr-40-2026-10-08-batch-1-published-char2-symmetry` |
| `thm-total-derivative-computes-directional-and-partial-derivatives` | nonfatal: missing zero-direction case | Open mathematical maintenance; Step5 finding nonfatal-recorded | [physics-em-sr-40-2026-10-08-b20-zero-direction](#physics-em-sr-40-2026-10-08-b20-zero-direction) |
| `thm-gradient-represents-directional-derivatives-and-steepest-ascent` | nonfatal: missing equality necessity | Open mathematical maintenance; Step5 finding nonfatal-recorded | [physics-em-sr-40-2026-10-08-b20-gradient-converse](#physics-em-sr-40-2026-10-08-b20-gradient-converse) |
| `thm-the-classical-stokes-theorem-for-a-c2-surface-patch` | fatal: false intermediate C1 curl claim | Open; batch-24 escalation | [physics-em-sr-40-2026-10-08-b24-stokes-regularity](#physics-em-sr-40-2026-10-08-b24-stokes-regularity) |


| `thm-the-classical-stokes-theorem-for-a-c2-surface-patch` | nonfatal: false C1 curl assertion in proof 5.1 | Open mathematical maintenance; used integral identity independently adequate | [physics-em-sr-40-2026-10-08-b30-stokes-curl-regularity](#physics-em-sr-40-2026-10-08-b30-stokes-curl-regularity) |

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
