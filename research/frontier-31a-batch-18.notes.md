# frontier-31a / beta / batch 18 — scaffold notes

## Scope and reconciliation

This is the `lie-theory` A/B pair `verma-modules-and-shapovalov-forms`
(order `510.003`) and `verma-modules-and-shapovalov-forms-examples` (order
`510.004`).  The A page requires
`harish-chandra-isomorphism-casimir-and-central-characters-examples`; the B
page requires the A page.  The design at
`research/plan-representation-theory-lie-track.md`, RL-2 (L108–145), and
`research/plan-spec.json` agree on those orders and prerequisites.  The alpha
drift audit records `no-drift` for this page.  There is therefore no
design-versus-spec conflict to adjudicate in this batch.

The A manifest has 17 items and the B manifest has 6, so neither crosses the
60-item split boundary.  The proposed pair split is retained: the A page
establishes the construction, form, radical, determinant, and criterion; the
B page contains the rank-one calculations, the one `A2` PBW calculation, and
the sign counterexample.  The collision scan found none of the 23 proposed
item IDs in the current library or current owned artifacts.

All mathematics is over a finite-dimensional complex semisimple Lie algebra
`g`, with a fixed triangular decomposition
`g = n- ⊕ h ⊕ n+`, Borel `b = h ⊕ n+`, and its fixed positive roots.  For
`lambda in h*`, `C_lambda` is the one-dimensional `b`-module on which `n+`
acts by zero and `h` acts by the *unshifted* weight `lambda`; the Verma module
is `M(lambda) = U(g) tensor_{U(b)} C_lambda` and its distinguished generator
is `v_lambda`.  `rho` is the established half-sum of positive roots and the
dot action, when it appears in a source disposition, means
`w dot lambda = w(lambda + rho) - rho`.

The anti-involution for the form is the Chevalley anti-involution `tau` with
`tau(e_i)=f_i`, `tau(f_i)=e_i`, and `tau(h)=h`; it is not the Cartan involution.
The Shapovalov form is bilinear and normalized by
`(v_lambda,v_lambda)=1`.  A determinant changes by a nonzero scalar when the
weight-space basis changes, so its formula is stated up to `doteq`.  Formal
characters live in the usual completion of the group algebra for finite-union
downward cones.  No positivity, Hermitian, or unitarity claim is intended.

## Source register and repair record

The full harvest, including every source heading/result read and its item or
specific disposition, is in `research/frontier-31a-batch-18.coverage.json`.
The independent backing treatments are:

| Key | Verified URL and exact reading range | Role in this scaffold |
| --- | --- | --- |
| E755 | Pavel Etingof, *Lie Groups and Lie Algebras I & II*, [full PDF](https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf), §25.2 `Verma modules`, printed pp. 134–136 / PDF pp. 135–137, heading through Corollary 25.13 | Primary full lecture-note treatment of induction, PBW, universal property, weights, and unique simple quotient. |
| Thatte | Mrudul Thatte, *Category O: Verma's Thesis*, [PDF](https://member.ipmu.jp/henry.liu/seminars/s20-category-o/mrudul-notes.pdf), all of §§1–6, PDF pp. 1–6 | Independent full treatment of contravariant forms, radical/criterion, and the rank-one examples.  §6 is explicitly read but excluded because the document itself marks its claims false. |
| E757 | Pavel Etingof, *Representations of Lie Groups*, [full PDF](https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf), §8.1–§8.4 through Exercise 8.15(xi), printed pp. 41–47, and §15.1 through the formal-character formula/product/additivity, printed p. 79 | Independent cross-check for highest-weight and determinant material, plus the formal-character convention. |

Each URL was opened as the stated complete PDF and the stated range was read;
the coverage records the page counts and `web-open` verification.  The local
fetch and liveness validator outcomes are recorded below after they run.

Source repair: the determinant support formerly described as E757 §8.3 was
re-read and corrected.  In the source, the determinant `D_beta` is introduced
at Exercise 8.15(iv), and the factor/determinant and irreducibility work is
Exercise 8.15(v)–(xi), printed pp. 45–47.  This scaffold records that exact
locator and has not retained the stale §8.3 attribution.  The Henry Liu-hosted
PDF is accurately credited to its title-page author, Mrudul Thatte, rather
than treating the host path as authorship.

## Item ledger: claims, dependencies, and authoring route

Source keys use the register above.  Every ID below appears once in the batch
manifest with the listed explicit `deps` array.  The page author must reread
the cited range and the current dependency statements before writing the
corresponding proof.

### A — Verma Modules and Shapovalov Forms

| Item | Exact planned claim and conventions | `deps` | Source and proof route |
| --- | --- | --- | --- |
| `def-one-dimensional-borel-module-of-weight-lambda` | Define `C_lambda` with unshifted `h`-weight `lambda` and trivial `n+` action. | [`thm-triangular-decomposition-from-a-chosen-positive-root-system`] | E755 Remark 25.8; check the Borel relations directly. |
| `def-verma-module` | Define `M(lambda)=U(g) tensor_{U(b)} C_lambda` and `v_lambda=1 tensor 1`. | [`def-universal-enveloping-algebra-as-a-tensor-quotient`, `def-one-dimensional-borel-module-of-weight-lambda`] | E755 Definition 25.6; give the induced-module quotient relation explicitly. |
| `thm-universal-property-of-verma-modules` | A `g`-map from `M(lambda)` to a module is equivalent to the choice of a weight-`lambda`, `n+`-annihilated vector. | [`def-verma-module`, `def-highest-weight-vector-and-cyclic-highest-weight-module`] | E755 Proposition 25.10; construct the map from `u tensor 1` and prove both inverses. |
| `thm-pbw-model-of-a-verma-module` | Multiplication identifies `M(lambda)` linearly with `U(n-)v_lambda`; ordered negative-root PBW monomials give a basis. | [`def-verma-module`, `thm-triangular-decomposition-from-a-chosen-positive-root-system`, `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`] | E755 Proposition 25.7; combine triangular PBW with the tensor relations, rather than assuming freeness. |
| `prop-weights-of-a-verma-module-lie-below-lambda` | Its weights are `lambda-beta`, `beta in Q+`, with finite-dimensional spaces; the top space is `C v_lambda`. | [`thm-pbw-model-of-a-verma-module`] | E755 Corollary 25.9; calculate PBW monomial weights. |
| `prop-formal-character-of-a-verma-module` | In the declared completion, `ch M(lambda)=e^lambda product_{alpha in Phi+}(1-e^-alpha)^-1`. | [`thm-pbw-model-of-a-verma-module`, `prop-weights-of-a-verma-module-lie-below-lambda`] | E757 §15.1; multiply the PBW geometric series and establish that each coefficient is finite. |
| `lem-a-proper-verma-submodule-misses-the-highest-weight-line` | A proper submodule cannot contain a nonzero multiple of `v_lambda`. | [`def-verma-module`] | E755 §25.2; the highest vector generates all of `M(lambda)`. |
| `lem-sum-of-all-proper-submodules-of-a-verma-module-is-proper` | The sum of all proper submodules remains proper. | [`lem-a-proper-verma-submodule-misses-the-highest-weight-line`, `prop-weights-of-a-verma-module-lie-below-lambda`] | E755 Proposition 25.12; use the highest-weight boundary/weight support, not the invalid inference that arbitrary sums of proper submodules are proper. |
| `thm-verma-module-has-a-unique-simple-quotient` | The quotient by that sum is the unique simple quotient `L(lambda)`. | [`lem-sum-of-all-proper-submodules-of-a-verma-module-is-proper`] | E755 Proposition 25.12; prove properness, maximality, and uniqueness in that order. |
| `lem-every-nonzero-verma-submodule-contains-a-singular-vector` | Each nonzero submodule has a nonzero vector annihilated by `n+`. | [`prop-weights-of-a-verma-module-lie-below-lambda`, `def-highest-weight-vector-and-cyclic-highest-weight-module`] | E755 §25.2 / E757 §8; choose a maximal occurring weight using the finite-union downward support and height well-ordering; show every positive-root operator vanishes.  Do not rely on Thatte §6. |
| `def-chevalley-contravariant-form` | Define a bilinear form satisfying `(xu,v)=(u,tau(x)v)` for the stated `tau`. | [`thm-triangular-decomposition-from-a-chosen-positive-root-system`, `def-highest-weight-vector-and-cyclic-highest-weight-module`] | Thatte Definition 1.1; distinguish bilinear contravariance from a Hermitian form. |
| `thm-existence-and-uniqueness-of-the-shapovalov-form` | There is a unique normalized contravariant form on `M(lambda)`. | [`def-chevalley-contravariant-form`, `def-verma-module`, `thm-pbw-model-of-a-verma-module`] | Thatte §1.1, §1.3, Theorem 1.3; construct via the PBW/Harish-Chandra projection or equivalent universal construction, verify the tensor relations, then normalize and prove uniqueness from cyclicity. |
| `lem-distinct-verma-weight-spaces-are-shapovalov-orthogonal` | Weight spaces of different weights are orthogonal. | [`def-chevalley-contravariant-form`, `thm-existence-and-uniqueness-of-the-shapovalov-form`] | Thatte Proposition 1.2(a); move `h` using `tau(h)=h` and separate distinct weights. |
| `prop-the-shapovalov-radical-is-the-maximal-submodule` | The form radical equals the unique maximal submodule, hence `L(lambda)` carries a nondegenerate descended form. | [`thm-existence-and-uniqueness-of-the-shapovalov-form`, `thm-verma-module-has-a-unique-simple-quotient`] | Thatte Proposition 1.2(b); prove the radical is a submodule and proper; use the quotient and its normalized nonzero form to establish equality. |
| `def-shapovalov-determinant-on-a-weight-space` | For each `beta in Q+`, define the block determinant on `M(lambda)_{lambda-beta}`, well-defined up to nonzero scalar. | [`thm-existence-and-uniqueness-of-the-shapovalov-form`, `lem-distinct-verma-weight-spaces-are-shapovalov-orthogonal`, `prop-weights-of-a-verma-module-lie-below-lambda`] | E757 Exercise 8.15(iv); select a PBW basis and record the change-of-basis ambiguity. |
| `thm-shapovalov-determinant-formula` | `D_beta(lambda) doteq product_{alpha in Phi+} product_{n>=1} ( <lambda+rho,alpha^vee>-n )^{K(beta-n alpha)}`, with the exponent zero unless `beta-n alpha in Q+`. | [`def-shapovalov-determinant-on-a-weight-space`, `def-weyl-vector-rho-for-a-chosen-positive-system`, `def-root-reflections-and-the-weyl-group-action`, `prop-casimir-eigenvalue-on-a-highest-weight-module`] | E757 Exercise 8.15(iv)–(x); author a complete route: polynomiality/leading PBW term, singular-vector factor hyperplanes, and degree/multiplicity comparison (using the supplied Casimir/root data where required).  For fixed `beta` only finitely many factors are nontrivial.  Do not cite the formula as an unexplained exercise answer. |
| `cor-verma-irreducibility-criterion-from-shapovalov-determinants` | `M(lambda)` is simple iff `<lambda+rho,alpha^vee>` is not a positive integer for every positive root `alpha`. | [`prop-the-shapovalov-radical-is-the-maximal-submodule`, `thm-shapovalov-determinant-formula`] | Thatte Theorem 4.1 / E757 Exercise 8.15(xi); connect nonzero determinant blocks to a zero radical and use the formula in both directions. |

### B — Verma Modules and Shapovalov Forms — Examples

| Item | Exact planned claim and conventions | `deps` | Source and proof route |
| --- | --- | --- | --- |
| `ex-sl2-verma-action-in-the-pbw-basis` | For `sl2`, calculate `h f^n v_lambda=(lambda-2n)f^n v_lambda`, `f f^n v_lambda=f^{n+1}v_lambda`, and `e f^n v_lambda=n(lambda-n+1)f^{n-1}v_lambda`. | [`def-verma-module`, `thm-pbw-model-of-a-verma-module`] | Thatte §1.2 / E757 §8; derive inductively from the commutators. |
| `ex-sl2-shapovalov-norm-product` | The normalized norms satisfy `(f^n v_lambda,f^n v_lambda)=n! product_{j=0}^{n-1}(lambda-j)`. | [`thm-existence-and-uniqueness-of-the-shapovalov-form`, `ex-sl2-verma-action-in-the-pbw-basis`] | Thatte §1.2; apply contravariance and the preceding action recurrence. |
| `ex-sl2-reducible-and-generic-verma-modules` | Work out that `M(lambda)` is reducible exactly when `lambda` is a nonnegative integer, with the indicated singular vector; contrast generic `lambda`. | [`cor-verma-irreducibility-criterion-from-shapovalov-determinants`, `ex-sl2-verma-action-in-the-pbw-basis`] | Thatte Example 4.3; check the criterion and action formula agree. |
| `ex-an-a2-verma-weight-space-of-dimension-two` | In type `A2`, exhibit the two PBW vectors at `lambda-alpha_1-alpha_2` and calculate the relevant form block/determinant behaviour. | [`def-verma-module`, `thm-pbw-model-of-a-verma-module`] | E757 Exercise 8.14 / source cross-check in coverage; fix an ordered root-vector convention before calculating. |
| `cex-the-shapovalov-form-is-not-positive-definite-in-general` | Give `sl2`, `lambda=-1`, where `(f v_lambda,f v_lambda)=-1`, as a counterexample to positivity. | [`ex-sl2-shapovalov-norm-product`] | Thatte §1.2; this negates positivity only, not nondegeneracy or contravariance. |
| `ex-finite-dimensional-sl2-quotient-of-a-verma-module` | For `lambda=m in Z_{>=0}`, identify the quotient by the submodule generated by `f^{m+1}v_m` and its dimension `m+1`. | [`thm-verma-module-has-a-unique-simple-quotient`, `ex-sl2-verma-action-in-the-pbw-basis`, `ex-sl2-reducible-and-generic-verma-modules`] | Thatte Example 2.2; use the preceding singular-vector calculation and quotient basis. |

## Boundaries and outstanding authoring checks

This pair does not prove the classification of all irreducible highest-weight
modules, a unique simple *submodule*, homomorphisms/embeddings between Verma
modules, linkage, block decomposition of Category O, or finite-dimensional
highest-weight classification.  Their exact destinations and reasons appear
against the appropriate harvested headings in coverage.  The existing
highest-weight, PBW, root-data, `rho`, Weyl-action, and Casimir items are
published dependencies; the page prerequisite is also already published.

The following are non-negotiable proof checks for step 5:

- The maximal-submodule lemma must use the top-weight boundary correctly; it
  may not rely on the generally false statement that any sum of proper
  submodules is proper.
- The singular-vector lemma needs the finite-support/height maximality
  argument, including why a positive-root action cannot stay at the chosen
  maximal weight.  The false claims in Thatte §6 are not available.
- The form construction must show that it descends through the induced-module
  relations and satisfies contravariance.  Invoking an unproved
  Harish-Chandra projection formula is insufficient.
- The determinant proof must justify its factors and exponents rather than
  quote a source exercise.  It must retain `K(beta-n alpha)`, the finite
  factor condition for fixed `beta`, and the basis-scalar ambiguity.
- The `A2` example needs an explicit PBW order and root-vector normalization;
  the form is bilinear, so neither this calculation nor the `sl2` examples
  imply a positivity statement.

## Validation record

Run from the repository root on 2026-09-05:

| Command | Outcome |
| --- | --- |
| `node -e "JSON.parse(...)"` for the batch manifest and coverage | PASS: both JSON files parse. |
| `node tools/manifest-deps.mjs research/frontier-31a-batch-18.pages.json` | PASS: `23 item(s), 0 normalized, 0 error(s)`. |
| `node tools/coverage-checklist.mjs research/frontier-31a-batch-18.coverage.json --require-destination` | PASS: `1 page(s), 69 harvested result(s), 0 error(s), 0 warning(s)`. |
| `node tools/content-policy.mjs --manifest-only research/frontier-31a-batch-18.pages.json` | PASS: `23 scoped item(s), 0 error(s), 0 warning(s)`. |
| `node tools/content-policy.mjs --manifest-only research/frontier-31a-batch-*.pages.json` | NOT CLEAN, but unrelated to this batch: `research/frontier-31a-batch-9.pages.json` declares `thm-kunneth-theorem-for-free-complexes-over-a-pid` with unresolved dependency `lem-boundaries-and-cycles-in-a-free-complex-over-a-pid`.  The scan reports `628 scoped item(s), 1 error(s)`; no batch-18 artifact was altered to hide it. |
| `node tools/validate-plan.mjs research/plan-spec.json` | PASS: declared page order is acyclic and consistent; no cycles, forward references, B-page dependency violations, or unresolved IDs among pages currently carrying item lists.  The validator also emits its repository-wide redundant-prerequisite diagnostics and notes that 547 planned pages have no item list; neither is a batch-18 mutation. |
| `node tools/source-fetch-check.mjs --coverage research/frontier-31a-batch-18.coverage.json` | PASS: `3/3 source(s) fetch-verified`, using the recorded browser-open verification. |
| `node tools/source-fetch-check.mjs --coverage research/frontier-31a-batch-18.coverage.json --stamp --force --timeout-sec 30` | Local re-fetch BLOCKED: all three hosts returned `EAI_AGAIN`; no stamps were replaced. |
| `node tools/url-sweep.mjs --coverage research/frontier-31a-batch-18.coverage.json --out /tmp/frontier-31a-batch-18.url-liveness.json --recover --fail-on-dead --timeout-ms 5000` | Local liveness BLOCKED: `curl (6) Could not resolve host` for all three hosts and the archive probe could not recover under that resolver.  The report is `/tmp/frontier-31a-batch-18.url-liveness.json`. |
| Browser fetcher re-open of all three recorded URLs | PASS: E755 returned the 284-page PDF, Thatte returned the 6-page PDF, and E757 returned the 162-page PDF.  This independently re-confirms the URLs and the source ranges after the local DNS failure. |
| `git diff --check` on the three batch artifacts | PASS: no whitespace errors. |

The local DNS failure is an environment transport limitation, not a conclusion
that the documents are dead: the independent browser fetcher successfully
opened the exact URLs before and after the local probe.  Because the sources
remain available and their text was re-verified, neither an alternate URL nor
a re-source is warranted.  A later environment with working DNS should rerun
the two blocked local transport checks; the task-local content and coverage
contracts already pass.

## Step-3 fix pass

The controlling review is
`research/frontier-31a-alpha-a-step3-scaffold-review.md`, Batch 18
(`verma-modules-and-shapovalov-forms`).  It assigns the pair the verdict
`sufficient` and contains no numbered or otherwise individually identified
in-scope finding for this batch.  No finding id is invented or renumbered here:
there is consequently no repair or push-back record to apply to an item,
dependency, coverage disposition, or page split.

| Finding id | Disposition | Evidence | Changed scaffold record |
| --- | --- | --- | --- |
| None stated for batch 18 | Accepted as a no-change review result | The review confirms the 17-item A / 6-item B order, scalar ambiguity of the determinant, completed formal-character convention, determinant proof obligation, and rejection of Thatte §6.  The group-a verdict record independently says `sufficient`. | None.  `frontier-31a-batch-18.pages.json` and `frontier-31a-batch-18.coverage.json` retain their 23 unique proposed ids, explicit dependency arrays, 69 harvested results, and existing source dispositions. |

Source re-read and URL verification on 2026-09-05 reconfirmed all three
recorded HTTP(S) PDFs and their locators: E755 §25.2 / printed pp. 134–136
(284-page PDF); Thatte §§1–6 / PDF pp. 1–6 (6-page PDF); and E757 §§8.1–8.4,
Exercise 8.15(iv)–(xi) / printed pp. 41–47, plus §15.1 / printed p. 79
(162-page PDF).  In particular, Thatte §6 expressly labels its results false,
so its Lemma 6.1 and Theorem 6.2 remain excluded; E757 places the determinant
formula in Exercise 8.15(x), so the existing coverage locator remains exact.
No replacement source or `original_url` field is needed because every recorded
URL was live and the same text was read.

Fresh checks, run from the repository root on 2026-09-05:

| Command | Outcome |
| --- | --- |
| `node tools/manifest-deps.mjs research/frontier-31a-batch-18.pages.json` | PASS: `23 item(s), 0 normalized, 0 error(s)`. |
| `node tools/coverage-checklist.mjs research/frontier-31a-batch-18.coverage.json --require-destination` | PASS: `1 page(s), 69 harvested result(s), 0 error(s), 0 warning(s)`. |
| `node tools/source-fetch-check.mjs --coverage research/frontier-31a-batch-18.coverage.json` | PASS: `3/3 source(s) fetch-verified`. |
| `node tools/content-policy.mjs --manifest-only research/frontier-31a-batch-*.pages.json` | PASS: `903 scoped item(s), 0 error(s), 0 warning(s)`. |
| `node tools/validate-plan.mjs research/plan-spec.json` | PASS: declared page order is acyclic and consistent, with no item-level cycles, forward references, B-page dependency violations, or unresolved ids among 746 itemized pages.  Its existing 547-page no-item-list note is outside this batch. |

The next action is Step 4 splicing or ordinary Step 5 authoring; this fix pass
leaves all mathematical claims, conventions, dependencies, source dispositions,
and the proposed A/B split unchanged.

## Step-5 authoring

Authored draft pages `verma-modules-and-shapovalov-forms` and
`verma-modules-and-shapovalov-forms-examples`, with the 23 manifest item IDs.
The literature-derived items retain the E755, Thatte, and E757 provenance and
URLs from the source register; the direct $A_2$ calculation and the negative
norm counterexample are marked `ai-generated` with their required generation
roles and are not dependency targets.  The stated conventions are the
unshifted weight, Chevalley anti-involution, bilinear normalized form, and
basis-scalar determinant ambiguity.  The explicit focused precheck over all
23 paths passed (19 proof-bearing files checked, 0 failing).

Blocker: the determinant formula's generic-hyperplane multiplicity step needs
the rank-one embedding/flat-family argument used in E757 Exercise 8.15(vii)--(ix).
That result is not an authored, resolvable dependency in the assigned manifest.
The proof-contract output therefore has its full scope but no completed
item-specific entries, and its strict validator has not been claimed clean.
