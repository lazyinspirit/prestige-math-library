# frontier-32 · beta · batch 16 scaffold notes

## Scope, design, and drift record

The only modified artifacts are this note, `frontier-32-batch-16.pages.json`,
and `frontier-32-batch-16.coverage.json`. No item body, library page, plan
structure, workflow-state file, or artifact owned by another batch was changed.

I read the RL-3 design inventory at
`research/plan-representation-theory-lie-track.md` L147–L180, its authority,
requirement, and convention sections at L181–L280, and the Batch 16 task. The
design names the same A and B slugs and gives no competing numeric order;
`research/plan-spec.json` and the task agree on `510.005`/`510.006`.

There is a declared-prerequisite drift, recorded but not adjudicated here. The
design says RL-3 consumes RL-1, RL-2, and DG-31 Weyl/Bruhat combinatorics;
the controlling spec gives the A page only
`verma-modules-and-shapovalov-forms-examples`. Per dispatch, this batch retains
the spec unchanged. The item graph does explicitly consume already-published
RL-1 central-character and root-system interfaces where the proof needs them;
Stage 1 owns any page-level reconciliation.

The design’s 14 A claims and 5 B leaves are retained. Six necessary, non-padding
intermediates have been added, leaving 20 A items—well below the 60-item split
ceiling—so no page split is warranted:

1. PBW-domain, simple-Verma-submodule, and simple-source Hom-dimension lemmas
   are the three steps in Etingof Exercise 8.14 required before the designed
   general Hom-dimension theorem.
2. The Jantzen deformation, first-filtration-term lemma, and Jantzen sum
   formula are the exact steps Etingof uses in the proof of the strong-linkage
   theorem. Leaving them implicit would make the designed BGG theorem depend
   on later Category O/projective material, which is not an established
   prerequisite.

## Conventions and proof boundary

Throughout, $\mathfrak g$ is finite-dimensional complex semisimple with the
fixed positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$,
$M(\lambda)=U(\mathfrak g)\otimes_{U(\mathfrak b)}\mathbb C_\lambda$, and
simple quotient $L(\lambda)$. The dot action is
$w\mathbin\cdot\lambda=w(\lambda+\rho)-\rho$; it is never silently replaced
by an ordinary Weyl action on shifted parameters. Write $\mu\uparrow\lambda$
when there is a descending chain
$\lambda=\eta_0\succ\eta_1\succ\cdots\succ\eta_r=\mu$ of
positive-integral dot reflections, with
$\eta_j=s_{\alpha_j}\mathbin\cdot\eta_{j-1}$ and
$\langle\eta_{j-1}+\rho,\alpha_j^\vee\rangle\in\mathbb Z_{>0}$.

The proof order is deliberate: PBW gives the torsion-free domain needed for
injectivity; Casimir control gives a simple Verma submodule and hence the
Hom-dimension bound; rank-one calculations give reflection embeddings; the
Jantzen deformation and determinant formula give the strong-linkage induction;
only then does the Hom criterion combine the two directions. The authoring
pass must keep the $t$-adic filtration weight-spacewise (each PBW block is
finite), prove the determinant-order identity rather than treating it as a
black box, and state antidominance concretely in the corollary. It must not
identify equality of central characters with an embedding direction.

## Read and fetch-verified source record

The following complete source ranges were opened and read in the web reader on
2026-09-06; their live HTTP(S) URLs, exact page/section locators, every named
heading/result read, and a result-specific disposition are recorded in
`frontier-32-batch-16.coverage.json`.

| Key | Independent treatment and URL | Read range used here |
| --- | --- | --- |
| E757 | Pavel Etingof, *Representations of Lie Groups* — https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf | Contents PDF pp. 2–3; Exercise 8.14(i)–(iv), pp. 44–45; Exercise 8.15(i)–(ii), p. 45; §15.1–§15.4, pp. 79–83; §§20.5–20.6, pp. 104–105. This full MIT course-note set supplies the harvestable table of contents and the principal proof route. |
| Sak | Yiannis Sakellaridis, *Verma Modules and the Category O* — https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf | Contents p. 1 and §§1–3, pp. 1–4: Definitions 1.1, 1.3, 2.1, 2.4, 3.3; Lemmas 1.2, 1.4–1.5, 2.2–2.3, 2.5, 3.1; Propositions 1.6, 3.2, 3.4. This independent lecture-note treatment provides the rank-one embedding. |
| Lin-2 | Lin Chen, *Geometric Representation Theory I*, Lecture 2 — https://windshower.github.io/linchen/teaching/s2024/lecture2.pdf | Course-set contents: https://windshower.github.io/linchen/teaching/s2024.html. PDF pp. 1–4, §§1–3 through Corollary 3.8. It verifies the PBW/Verma and category-O context. |
| Lin-4 | Lin Chen, *Geometric Representation Theory I*, Lecture 4 — https://windshower.github.io/linchen/teaching/s2024/lecture4.pdf | Same course-set contents. PDF pp. 1–5, §§1–4 through Proposition 4.4. It independently checks the dot-action, central-character, and block-oriented distinctions. |

These are at least two independent eligible primary treatments (E757 and Sak).
No citation is used as an unread proxy. In particular, Lin Lecture 2 contains
the Verma-module preliminaries and the $\mathfrak{sl}_2$ sequence, but it does
**not** state the general simple-reflection embedding claimed by the original
design locator; the harvest records it for the material it actually contains,
and the scaffold grounds that proposition in Sak Proposition 3.2 and E757
Exercise 8.15(i) instead.

The earlier full-text pass left durable `fetch_verified` receipts for E757,
Lin-2, and Lin-4; Sak remains unstamped. The terminal's later `EAI_AGAIN`
responses are a DNS limitation, not a dead-source finding: the recorded
liveness sweep opened all four reader-facing PDFs. If a later runtime has DNS,
rerun the same stamping command for Sak; do not replace or remove a verified
source merely to clear that mechanical gate.

## Item checkpoint — A page

The manifest is the exact dependency authority; each object has its explicit
`deps` array. `E757` means the Etingof ranges above; `Sak` means §§1–3;
`Lin-2` and `Lin-4` mean the exact ranges above.

| Item | Exact planned claim and proof strategy | Deps and source support |
| --- | --- | --- |
| `prop-verma-homomorphisms-are-singular-vectors` | Evaluate a map at $v_\mu$ and apply the Verma universal property to identify Hom with weight-$\mu$ singular vectors in $M(\lambda)$. | `thm-universal-property-of-verma-modules`; E757 §15.1, Sak §§1–2. |
| `lem-enveloping-algebra-of-the-negative-nilpotent-lie-algebra-is-a-domain` | Use the PBW filtration and its polynomial associated graded algebra to prove $U(\mathfrak n^-)$ has no zero divisors. | `thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra`; E757 Exercise 8.14(i), Lin-2 Theorem 1.5. |
| `lem-a-nonzero-verma-homomorphism-is-injective` | In the PBW free rank-one models, a nonzero map is multiplication by a nonzero element of the domain from the preceding lemma. | `thm-pbw-model-of-a-verma-module`, preceding domain lemma; E757 Exercise 8.14(i), Sak Proposition 3.2. |
| `lem-every-verma-module-contains-a-simple-verma-submodule` | If proper embedded Verma submodules continued indefinitely, their highest weights would lie in one downward lattice cone with the same Casimir scalar, contradicting positive-definite growth. | Injectivity; `lem-every-nonzero-verma-submodule-contains-a-singular-vector`, `prop-casimir-eigenvalue-on-a-highest-weight-module`, `prop-weights-of-a-verma-module-lie-below-lambda`; E757 Exercise 8.14(ii). |
| `lem-homomorphisms-from-a-simple-verma-module-have-dimension-at-most-one` | Two distinct embedded copies of a simple Verma would give a direct sum whose shifted PBW weight-space growth cannot fit into one target Verma module. | Injectivity and `prop-formal-character-of-a-verma-module`; E757 Exercise 8.14(iii). |
| `thm-verma-homomorphism-spaces-have-dimension-at-most-one` | Restrict maps to a simple Verma submodule; proportional restrictions force proportional original maps by injectivity. | The two preceding simple-source lemmas; E757 Exercise 8.14(iv), E757 Theorem 15.11. |
| `lem-simple-root-singular-vector-in-a-verma-module` | The rank-one commutator calculation makes $f_i^m v_\lambda$ singular exactly for $m=\langle\lambda+\rho,\alpha_i^\vee\rangle\in\mathbb Z_{>0}$, with weight $s_i\cdot\lambda$. | `def-verma-module`, root-reflection and $\rho$ definitions, `prop-opposite-root-spaces-bracket-to-the-killing-dual-line`; E757 Exercise 8.15(i), Sak Proposition 3.2. |
| `prop-simple-reflection-embedding-of-verma-modules` | Apply the universal property to that singular vector, then injectivity. | Simple-root singular-vector lemma and `thm-universal-property-of-verma-modules`; E757 Exercise 8.15(i), Sak Proposition 3.2. |
| `thm-verma-embedding-for-an-arbitrary-positive-root` | Conjugate/reduce a positive-root reflection to a chain of simple reflections while preserving the needed positive-integral pairings, then compose the rank-one embeddings. | Simple-reflection embedding plus root-reflection/$\rho$ conventions; E757 Exercise 8.15(ii), E757 Theorem 15.11. |
| `def-strong-linkage-order-on-weights` | Define the directed transitive closure of positive-integral dot reflections, with the strict lowering condition included rather than inferred. | Root-reflection and $\rho$ definitions; E757 §15.2, Sak Definition 3.3, Lin-4 Definition 3.9. |
| `lem-a-verma-composition-factor-has-the-same-central-character` | A central scalar on $M(\lambda)$ survives all subquotients; identify a simple highest-weight subquotient with the appropriate $L(\mu)$. | Central-character definition and scalar-action lemma, `thm-verma-module-has-a-unique-simple-quotient`; E757 §15.1, Lin-4 Lemma 1.7. |
| `prop-verma-composition-multiplicities-are-finite` | Bound a composition series by finitely many detecting weight spaces after the Casimir and dot-orbit restrictions leave only finitely many candidate highest weights. | Same-central-character lemma, `cor-central-characters-are-dot-weyl-orbits`, Casimir/weight-space results; E757 Lemma 15.9. |
| `def-jantzen-deformation-and-filtration-of-a-verma-module` | Define the $\lambda+t\rho$ family and the weightwise $t$-adic filtration induced by the deformed Shapovalov map. | Shapovalov form, $\rho$, PBW model; E757 §20.5. |
| `lem-first-jantzen-filtration-term-is-the-verma-maximal-submodule` | Identify the first specialised filtration term with the Shapovalov radical and then with $J(\lambda)$. | Jantzen definition and `prop-the-shapovalov-radical-is-the-maximal-submodule`; E757 §20.5. |
| `thm-jantzen-sum-formula-for-a-verma-module` | Combine the elementary invariant-factor determinant-order identity with the Shapovalov determinant formula, weight block by weight block, to obtain the character sum. | Jantzen definition, Shapovalov determinant formula, formal Verma character; E757 Exercises 20.11–20.12. |
| `thm-strong-linkage-principle-for-verma-modules` | Induct on positive-root height: a nontrivial factor lies in $J(\lambda)$, the Jantzen sum puts it in a one-reflection lower Verma, and the induction appends that reflection. | Strong-linkage definition, finite-multiplicity proposition, first Jantzen term, Jantzen sum; E757 Theorem 20.13. |
| `lem-verma-embedding-implies-strong-linkage` | An embedding makes $L(\mu)$ a simple subquotient of $M(\lambda)$; invoke strong linkage. | Injectivity and strong-linkage theorem; E757 Corollary 20.14. |
| `thm-bgg-verma-homomorphism-criterion` | A linkage chain gives a composite reflection embedding; a nonzero Hom is injective and hence strongly linked in the converse direction. | Arbitrary-root embedding, strong-linkage definition, embedding-implies-linkage lemma; E757 Theorem 15.11 and Corollary 20.14. |
| `cor-generic-verma-modules-are-simple` | Invoke the already-established determinant irreducibility criterion off all positive-integral root hyperplanes. | `cor-verma-irreducibility-criterion-from-shapovalov-determinants`; E757 §15 and RL-2 determinant source. |
| `cor-antidominant-verma-modules-are-simple` | A proper submodule would yield a lower strongly linked singular weight, excluded by the explicitly stated antidominant regular inequalities. | Strong-linkage definition, singular-vector lemma, universal property, embedding-implies-linkage; E757 §15.2–15.3. |

## Item checkpoint — B companion

Each B item only points back to an A or established item and is a leaf.

| Item | Exact planned verification | Deps and source support |
| --- | --- | --- |
| `ex-sl2-verma-embedding-chain` | For $m\ge0$, calculate $M(-m-2)\subset M(m)$, including $m=0$, and contrast the generic case. | `prop-simple-reflection-embedding-of-verma-modules`, `thm-bgg-verma-homomorphism-criterion`; Sak Lemma 3.1, Lin-2 Exercise 2.17, Lin-4 Example 2.8. |
| `ex-a2-regular-dominant-verma-embedding-poset` | List the six dot translates in a regular $A_2$ orbit and draw exactly the directed Bruhat/strong-linkage embeddings. | `def-strong-linkage-order-on-weights`, `thm-bgg-verma-homomorphism-criterion`; E757 §15 and Lin-4 Examples 3.7–3.8. |
| `ex-a2-singular-dot-orbit-collapses` | Choose a wall weight, compute its nontrivial dot stabilizer, and enumerate the fewer distinct translates without claiming regular Bruhat behaviour. | `def-strong-linkage-order-on-weights`; Lin-4 Definition 3.9 and the design’s Lin block reading. |
| `cex-equal-central-character-does-not-give-every-verma-embedding-direction` | Exhibit dot-conjugate $A_2$ weights in the opposite directed relation, separating central-character equality from the arrow direction. | `cor-central-characters-are-dot-weyl-orbits`, `thm-bgg-verma-homomorphism-criterion`; E757 Remark 15.10 and Sak §§2–3. |
| `cex-nonintegral-reflection-does-not-produce-a-singular-power` | Use the $\mathfrak{sl}_2$ action to show a nonintegral formal exponent is not a vector power and produces no singular-vector map. | `def-verma-module`; direct rank-one calculation, as required for this AI-generated leaf. |

## Validation checkpoint and next action

- PASS — JSON parse for the manifest and coverage harvest.
- PASS — `node tools/manifest-deps.mjs research/frontier-32-batch-16.pages.json`: 25 items, all `deps` arrays explicit.
- PASS — `node tools/content-policy.mjs --manifest-only research/frontier-32-batch-16.pages.json`: 25 scoped items, zero errors and warnings.
- PASS with advisory — `node tools/coverage-checklist.mjs research/frontier-32-batch-16.coverage.json --require-destination`: one A page, 75 harvested headings/results, zero errors; one `coverage-low-yield` advisory (21 scaffolded headings of 75). The advisory is expected because all four sources’ category-O and already-published prerequisites are faithfully retained rather than relabelled as new page claims.
- PASS — read-only batch graph audit: 25 dependencies resolved, acyclic, same-page ordered, and B-leaf-safe.
- PASS — `node tools/validate-plan.mjs research/plan-spec.json`: the full declared plan is acyclic and consistent; its unrelated global redundant-prerequisite advisories do not name this batch. The validator accepts a full `{pages: [...]}` spec, so the standalone batch array is checked by the read-only graph audit above rather than passed to the wrong interface.
- PASS — `git diff --check -- research/frontier-32-batch-16.pages.json research/frontier-32-batch-16.coverage.json`.
- HISTORICAL DNS note — the original source-receipt attempt saw `EAI_AGAIN` in
  its terminal. The receipt state and current retry result are corrected in the
  Reharvest-1 checkpoint below.

The next safe action is Step-5 authoring from this dependency-closed manifest,
while retaining every Jantzen, PBW-domain, Casimir, and growth subargument
listed above. Before final source-gated handoff, rerun the same source-fetch
command in a DNS-capable runtime; no harvest result is to be removed or
re-sourced merely to make that check green.

## Reharvest-1 pass — 2026-09-06

`research/frontier-32-reharvest-plan.json` has six work rows, but **none** has
`file: research/frontier-32-batch-16.coverage.json`. Therefore this dispatch
has no named dead source, affected orphaned result, or replacement source to
apply. The batch coverage and every item claim remain unchanged; in particular,
the page keeps its four independent treatments and its 75 source-content rows.

| Required reharvest record | Result |
| --- | --- |
| Dead source / affected result | None assigned to batch 16 by the reharvest plan. |
| Same-document recovery or archive search | Not applicable: no batch-16 source was identified as dead. A bounded local-cache check found no alternate copy to stamp. |
| Changed claim constraint | None. No item id, dependency, locator, disposition, or source provenance was changed. |
| Original-URL provenance | Unchanged; all four reader-facing source rows retain their existing URLs and have no replacement `original_url`. |

Fresh batch-only liveness was nevertheless attempted with
`node tools/url-sweep.mjs --coverage research/frontier-32-batch-16.coverage.json
--out /tmp/frontier-32-batch-16-liveness.json --recover --fail-on-dead
--timeout-ms 30000`. Its five URLs (the four PDFs and Lin's course-set contents
page) all failed before HTTP with `curl: (6) Could not resolve host`; recovery
found no snapshot because the same terminal DNS restriction also prevented the
archive probes. This is not evidence that a particular source has no usable
same-document URL. In contrast, the run's recorded
`research/frontier-32-url-liveness.json` has live rows for all four source URLs:
E757 `200`, Sak `206`, Lin-2 `200`, and Lin-4 `200`.

The required validation results for this zero-orphan pass are:

- PASS — `node tools/source-backing.mjs --coverage research/frontier-32-batch-16.coverage.json --liveness research/frontier-32-url-liveness.json`: 15 included authored results retain at least one openable backing source.
- PASS with advisory — `node tools/coverage-checklist.mjs --require-destination research/frontier-32-batch-16.coverage.json`: 75 harvested results, zero errors, and the existing `coverage-low-yield` advisory at 21 included results.
- PASS — `node tools/manifest-deps.mjs research/frontier-32-batch-16.pages.json`: 25 items, zero normalization and dependency errors.
- PASS — `node tools/content-policy.mjs --manifest-only research/frontier-32-batch-16.pages.json`: 25 scoped items, zero errors and warnings.
- BLOCKED by terminal DNS — `node tools/source-fetch-check.mjs --coverage research/frontier-32-batch-16.coverage.json --stamp --timeout-sec 60`: the only unstamped row, Sak, returned `EAI_AGAIN`; the existing E757, Lin-2, and Lin-4 receipts were retained. Check mode consequently remains 3/4 rather than being treated as a pass.

Next action: rerun the liveness and fetch-stamp commands from a DNS-capable
runtime. If Sak then fails as a source-specific HTTP/full-text failure, first
recover a live URL or complete archive copy of the **same** Sakellaridis PDF,
retain its original URL as provenance, and only then consider a replacement
treatment. No mathematical reharvest is currently owed.

## Step-3 fix pass

### Alpha-D verdict entry — `homomorphisms-between-verma-modules-and-linkage`

- **Finding id:** the unkeyed page entry in
  `frontier-32-alpha-d-step3-scaffold-review.md` under
  `### homomorphisms-between-verma-modules-and-linkage` (the paired stable
  `frontier-32-alpha-d-step3-verdicts.json` record is
  `{page: "homomorphisms-between-verma-modules-and-linkage",
  verdict: "sufficient"}`; no separate finding id was emitted).
- **Disposition:** applied — no mathematical scaffold repair is requested or
  warranted. The A graph retains the design's fourteen claims plus the six
  necessary PBW-domain, simple-Verma, Hom-growth, and Jantzen intermediates;
  the B graph retains its five leaf checks. This is 20 A and 5 B items, so the
  A page remains below the 60-item split threshold.
- **Evidence:** I reread RL-3 at
  `research/plan-representation-theory-lie-track.md` L147–L180 and verified
  the declared plan entries at 510.005/510.006. The direct Etingof range
  confirms the Exercise 8.14 dependency chain, the reflection embeddings,
  the weightwise Jantzen construction and sum formula, and the BGG induction;
  the complete Sakellaridis, Lin-2, and Lin-4 ranges independently confirm
  the universal/PBW, rank-one, low-rank, dot-action, and central-character
  boundaries recorded above. All four recorded coverage URLs have durable
  full-text receipts; `source-fetch-check` reports 4/4.
- **Changed scaffold record:** none in
  `frontier-32-batch-16.pages.json` or
  `frontier-32-batch-16.coverage.json`; this note is the sole amended
  task-authorised artifact.

### Reviewer prose identifier-span assertion — unkeyed

- **Finding id:** the unkeyed assertion at review lines 133–135 that the 20 A
  ids run from `def-dot-action-and-strong-linkage-order` through
  `fs-equal-infinitesimal-character-implies-a-verma-homomorphism`.
- **Disposition:** pushed back. Neither named id exists outside that review
  sentence. The controlling design and this manifest instead use
  `def-strong-linkage-order-on-weights` and end the A graph with
  `cor-antidominant-verma-modules-are-simple`; their stated claims and the
  five B leaves match RL-3 exactly. Renaming or adding the review-only ids
  would silently duplicate or alter claims, contrary to the task contract.
- **Evidence:** exact-id searches find the two review-only ids nowhere else;
  the design inventory lists `def-strong-linkage-order-on-weights` at L162
  and `cor-antidominant-verma-modules-are-simple` at L168, and both are
  present in the manifest with explicit dependency arrays.
- **Changed scaffold record:** none; the established, source-grounded ids and
  dependencies are retained.

### Validation after the fix pass

- PASS — `node tools/manifest-deps.mjs research/frontier-32-batch-16.pages.json`:
  25 items, zero normalizations and errors.
- PASS with advisory — `node tools/coverage-checklist.mjs
  research/frontier-32-batch-16.coverage.json --require-destination`: 1 A
  page, 75 harvested results, zero errors, and the existing
  `coverage-low-yield` advisory (21/75 scaffolded results).
- PASS — `node tools/source-fetch-check.mjs --coverage
  research/frontier-32-batch-16.coverage.json`: 4/4 fetch-verified sources.
- PASS — whole-run `node tools/content-policy.mjs --manifest-only
  research/frontier-32-batch-*.pages.json`: 672 scoped items, zero errors and
  warnings.
- PASS — `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; the
  declared plan is acyclic and consistent. Its printed redundant-prerequisite
  advisories are global and do not request a batch-16 change.
- PASS — `git diff --check -- research/frontier-32-batch-16.pages.json
  research/frontier-32-batch-16.coverage.json
  research/frontier-32-batch-16.notes.md`.

## Step-5 authoring

Authored the two draft pages `homomorphisms-between-verma-modules-and-linkage`
and `homomorphisms-between-verma-modules-and-linkage-examples` at their
planned `library/lie-theory/` paths, and authored all 25 manifest ids as draft
items. The A page has the PBW-domain/injectivity and simple-source Hom
intermediates, reflection embeddings, strong linkage, Jantzen deformation and
sum formula, BGG criterion, and the two simplicity corollaries; its companion
has the three finite examples and two counterexamples. All source-backed items
preserve the E757, Sak, or Lin locators recorded in coverage. The one
AI-generated statement remains the intended leaf
`cex-nonintegral-reflection-does-not-produce-a-singular-power`, with
`generation.role: counterexample`; no generated statement is a dependency
target. Every current-run page and item is `status: draft`, and no judge record
was introduced.

The authored proofs retain the positive-Borel convention and dot action
$w\mathbin\cdot\lambda=w(\lambda+\rho)-\rho$. In particular, the BGG
criterion proves the two directions separately, the Jantzen proof derives the
weight-block determinant-order identity from Smith normal form, and the
antidominant corollary says explicitly that all positive-root pairings are
strictly negative. No claim was narrowed or dropped; no authoring blocker
remains.

Validation actually run after authoring:

- PASS — `node tools/tsx-run.mjs tools/precheck.mts` with the explicit 25
  manifest paths: 23 proof-bearing files checked, 0 failing (the two
  definitions are non-proof items).
- PASS — `node tools/content-policy.mjs
  research/frontier-32-batch-16.pages.json`: 25 scoped items, 0 errors and 0
  warnings.
- PASS — `node tools/proof-contract.mjs
  research/frontier-32-batch-16.proof-contracts.json --strict`: 23/23
  proof-bearing items checked, 0 errors and 0 warnings. The new contract maps
  each numbered proof row and records all eight standard boundary axes; the BGG
  iff directions are checked at steps 1.1 and 2.1.
- PASS — `node tools/validate-plan.mjs research/plan-spec.json`: declared
  page order is acyclic and consistent, with no unresolved ids or item-level
  cycles among its pages carrying item lists. Its printed redundant-prerequisite
  advisories are global and do not name this batch.
- PASS — `git diff --check` on the authored items, pages, contract, and this
  note.

The bare command `node tools/validate-plan.mjs` was also attempted exactly as
named in the dispatch; this tool requires its mandatory plan-spec argument and
printed its usage line. The passing invocation above supplies the repository's
controlling `research/plan-spec.json`.
