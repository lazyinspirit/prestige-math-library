# Step 3b authoring report — `ordered-and-unordered-configuration-spaces`

- Run: `frontier-35-ten-categories` · role `alpha-high` · dispatch
  `step3b-pair-ordered-and-unordered-configuration-spaces-b46560cd56c26c99`
- A page: `ordered-and-unordered-configuration-spaces` (order 731, `braid-groups`, 14 items)
- B page: `ordered-and-unordered-configuration-spaces-examples` (order 732, 4 items)
- Batch 16; the sibling pair `graded-quiver-algebras-and-derived-tensor-functors`
  (orders 755/756) shares the batch files and was **not** edited here.
- Scope: the Step 3a review decision
  (`research/frontier-35-ten-categories-step3a-review-ordered-and-unordered-configuration-spaces.json`)
  was `sufficient`; it was **refreshed in this dispatch** after two local
  suppliers were added (sha256 `71618aa24967d71e…`), because a pair's scope hash
  covers its item inventory and the original receipt predates those additions.
  No owner-held escalation exists for this pair.

## Progress log (one entry per item, manifest order)

| # | item | state | checks | notes |
|---|---|---|---|---|
| 1 | `def-ordered-configuration-space` | authored | rendercheck OK; precheck n/a (definition) | label convention $\kappa(i)=i-1$; $F_0(X)$ a point, $F_1(X)=X$; nonemptiness equivalence and separation of coordinates proved in the Definition section for later reuse |
| 2 | `prop-the-symmetric-group-acts-freely-on-ordered-configurations` | authored | precheck PASS; rendercheck OK | $(\sigma\cdot x)_i=x_{\sigma^{-1}(i-1)+1}$ fixed so the action is a left action for the library's composition convention; freeness from pairwise distinctness |
| 3 | `def-unordered-configuration-space` | authored | rendercheck OK; precheck n/a | quotient topology, orbit basepoint $[q]$, and the bijection onto $n$-element subsets proved in-item |
| 4 | `lem-path-conjugation-isomorphism-of-fundamental-groups` | authored (**new local supplier**) | precheck PASS; rendercheck OK | see "Scaffold audit and repairs" below |
| 5 | `lem-interior-and-closed-disk-configuration-spaces-are-homotopy-equivalent` | authored | precheck PASS; rendercheck OK | radial $H_t(x_i)=(1-t/2)x_i$, quotient descent, moving-basepoint arguments, ordered and unordered $\pi_1$ isomorphisms; the $[L7]$ fact now cites item 4 |
| 6 | `lem-disjoint-coordinate-neighborhoods-evenly-cover-unordered-configurations` | authored | precheck PASS; rendercheck OK | $n!$ disjoint translates $\sigma(U)$; quotient openness proved; $n=0$ in step 1.2; no connectedness or manifold hypothesis |
| 7 | `thm-ordered-configurations-cover-unordered-configurations-regularly` | authored | precheck PASS; rendercheck OK | covering, connectivity, deck group $S_n$, regularity; punctured relative half-space balls cover boundary points; choice-free |
| 8 | `lem-the-closed-disk-is-a-manifold-with-boundary` | authored (**local supplier**) | precheck PASS; rendercheck OK | translation charts and the Möbius chart $\varphi_q(w)=i(q-w)/(q+w)$ with explicit inverse; supplies the manifold-with-boundary hypothesis at $M=D^2$ |
| 9 | `def-pure-braid-group-from-ordered-configurations` | authored | rendercheck OK; precheck n/a | $PB_n=\pi_1(F_n(D^2),q)$; open-disc isomorphism; basepoint-change remark now cites item 4 |
| 10 | `def-braid-group-from-unordered-configurations` | authored | rendercheck OK; precheck n/a | $B_n^{\mathrm{conf}}=\pi_1(C_n(D^2),[q])$; the decoration is retained until the geometric identification |
| 11 | `def-endpoint-monodromy-of-a-configuration-loop` | authored | precheck PASS; rendercheck OK | $\pi([\alpha])=\sigma_\alpha=e_\alpha^{-1}$; the raw label record is an antihomomorphism for the first-then-second product; identified with the published right monodromy |
| 12 | `thm-configuration-braid-pure-braid-short-exact-sequence` | authored | precheck PASS; rendercheck OK | exact for every $n\ge0$: injectivity from covering theory, kernel $=$ image from the lift-closes criterion, surjectivity by explicit adjacent half twists at $q'_j=(2j-n-1)/(2n)$; no Artin presentation consumed |
| 13 | `lem-forgetting-configuration-points-is-locally-trivial` | authored | precheck PASS; rendercheck OK | point-moving bump homeomorphisms with Banach fixed-point inverse and explicit trivialization; choice-free; no paracompactness |
| 14 | `thm-fadell-neuwirth-forgetful-fibration` | authored | precheck PASS; rendercheck OK | local triviality; constant fibre type by an open-and-closed argument; under AC + DC the numerable bundle and Hurewicz fibration for $M=\operatorname{int}D^2$ |
| 15 | `ex-two-point-ordered-configurations-of-the-plane` | authored | precheck PASS; rendercheck OK | explicit homeomorphism to $\mathbb C\times\mathbb C^\times$ with polynomial inverse; $\varepsilon$-$\delta$ continuity; choice-free |
| 16 | `ex-the-two-point-unordered-cover-and-its-monodromy` | authored | precheck PASS; rendercheck OK | $\mathbb C\times(\mathbb C^\times/\{\pm1\})$ model and the half-turn loop with nontrivial endpoint monodromy read off its unique lift |
| 17 | `cex-collisions-destroy-freeness-of-coordinate-permutation` | authored | precheck PASS; rendercheck OK | constant tuple fixed by a transposition refutes freeness on the full product; boundary cases $n\le1$ explicitly disclaimed |
| 18 | `cex-the-ordered-to-unordered-two-point-quotient-is-not-one-to-one` | authored | precheck PASS; rendercheck OK | $(0,1)$ and $(1,0)$ distinct with equal image; refutation confined to the natural quotient map |

## Scaffold audit and repairs performed

1. **Missing proof-section headings (12 items).** All lemma, theorem, example and
   counterexample items had been authored with `**Proof technique:** direct.`
   but without the `## Proof` / `## Verification` / `## Refutation` heading, so
   the strict proof-contract parser (`tools/facts-block.mjs`
   `numberedProofSteps`) saw **zero** steps in every one of them and no
   derivation contract could have been satisfied. Headings were added in the
   item-specific convention of the library (lemma/theorem → `## Proof`,
   example → `## Verification`, counterexample → `## Refutation`), precheck still
   passes, and all 13 proof-bearing items now parse their numbered steps.
2. **Load-bearing dependency on a B/examples-page item (3 items + 1 new
   supplier).** `lem-interior-and-…`, `def-pure-braid-group-…` and
   `def-braid-group-…` cited published
   `ex-change-of-basepoint-isomorphism-for-fundamental-groups`, whose only home
   is `library/category-theory/categories-functors-and-natural-transformations-examples.md`.
   `depcheck.mjs` reports such an edge as the hard error `b-leaf-content`, and
   the published item cannot be re-homed from this dispatch. The mathematical
   content (a path between basepoints conjugates loop classes and induces a
   $\pi_1$-isomorphism) is preserved and now supplied on the assigned A page by
   the fully authored lemma `lem-path-conjugation-isomorphism-of-fundamental-groups`
   (statement literature-backed by Hatcher §1.1, Proposition 1.5, printed p. 28;
   proof re-derived locally from published A-page items:
   `def-based-loops-and-fundamental-group`, `thm-fundamental-group-laws`,
   `def-path-connected`, `def-homotopy-relative-and-path-homotopy`,
   `cor-homotopy-relative-and-path-homotopy-are-equivalence-relations`,
   `lem-continuity-is-local-and-pastes`,
   `def-group-isomorphism-and-automorphism`). The three consumers were rewired
   to it and the B-page item is no longer referenced by this pair.
3. **Duplicate citation targets (2 items).** `lem-forgetting-…` and
   `thm-fadell-neuwirth-…` repeated the same wikilink twice inside one fact, so
   the generated citation list contained a duplicate pair and the strict
   contract checker rejected it (`citation-duplicate`); the repeated link was
   removed from the fact text without changing any claim.
4. **Endpoint monodromy dependencies** were repaired to add
   `lem-the-closed-disk-is-a-manifold-with-boundary`, and the definition now
   records why the regular-covering theorem applies at $M=D^2$.
5. **Local supplier for $D^2$** (`lem-the-closed-disk-is-a-manifold-with-boundary`)
   supplies the manifold-with-boundary hypothesis; sources Mărcuț,
   *Manifolds* §14.5–15.1 (Definition 15.1.4, Example 15.1.8), and Hitchin,
   *Differentiable Manifolds* §2.2 (Definition 29, p. 65 example 2) were
   downloaded, read on the cited pages and added to the coverage harvest.

## Conventions fixed for the pair

- Labels $1,\dots,n$ are identified with $n=\{0,\dots,n-1\}$ by
  $\kappa(i)=i-1$; the $S_n$-action on $F_n(X)$ is
  $(\sigma\cdot x)_i=x_{\sigma^{-1}(i-1)+1}$, compatible with
  $(\sigma\tau)(k)=\sigma(\tau(k))$; $F_n(X)\to C_n(X)$ is the orbit quotient.
- $D^2=\{z\in\mathbb C:|z|\le1\}$, $\operatorname{int}D^2=\{z:|z|<1\}$, related
  by the radial homotopy $H_t(x)=((1-t/2)x_1,\dots,(1-t/2)x_n)$.
- The loop product is first-then-second; the endpoint monodromy is
  $\pi([\alpha])=\sigma_\alpha=e_\alpha^{-1}$; the raw label record $e$ is an
  antihomomorphism, and the published right monodromy satisfies
  $q\cdot[\alpha]=\pi([\alpha])\cdot q$.
- Basepoint change uses $\varphi_c([\alpha])=[(\bar c*\alpha)*c]$ with
  $\varphi_{\bar c}$ as its inverse (item 4).

## Owner direction and deferral cross-check

`research/frontier-35-ten-categories-owner-authoring-direction.md` **exists** and
was read in this dispatch. Its two deferrals — the batch 8
smooth-projective Serre-duality/flag-variety pair and the batch 13 item
`thm-pseudointersection-number-equals-tower-number` — concern no page or item of
this pair; `frontier-35-ten-categories-deferred-pairs.json` and
`frontier-35-ten-categories-deferred-items.json` contain no occurrence of
"configuration" or "braid". So the owner direction adds no repair obligation
here, and this pair is asserted, spliced and counted normally.

## Checks actually run

All gates below were re-run once more at session close (after the only
subsequent change, this report file) with identical results; none of them reads
this report.

- `node tools/tsx-run.mjs tools/precheck.mts <all 18 items>`: **14 PASS** (every
  proof-bearing item, including the two local suppliers), 0 failing; the 4 plain
  definitions report `0 checked, 0 failing` (`precheck: n/a`).
- `node tools/rendercheck.mjs <18 items + 3 library/braid-groups files>`:
  **OK — 21 files**, no wikilink inside math, balanced delimiters, all math
  parses under KaTeX, frontmatter parses.
- `node tools/proof-contract.mjs research/frontier-35-ten-categories-batch-16.proof-contracts.json --strict`:
  **0 errors, 1 warning, 18/18 items checked**. The warning is a
  `shotgun-bracket` advisory on step 3.2 of item 5 (it cites 4 of 8 declared
  facts while two summary steps cite none); every citation carries its exact
  quote and use, and all eight boundary cases are disposed for all 18 items.
- `node tools/coverage-checklist.mjs research/frontier-35-ten-categories-batch-16.coverage.json --require-destination`:
  **2 pages, 51 harvested results, 0 errors, 0 warnings**.
- `node tools/content-policy.mjs research/frontier-35-ten-categories-batch-16.pages.json`:
  **22 errors, all `scope-item-missing` for the sibling BG-14 pair** (orders
  755/756, items not yet on disk). **Zero findings for this pair**; this is
  expected sibling in-progress state, not a defect of this dispatch.
- `node tools/depcheck.mjs`: repo-wide exit 1 with pre-existing findings in
  other tracks (`published-unaudited`, `multi-home`, `cited-not-in-deps`,
  `link-unresolved`, `justification-backward`, one `page-cycle` in the Brauer
  pages, six `b-leaf-content` in unrelated items). **No finding names any item
  of this pair** (verified by grepping the report for all 18 ids).
- `node tools/manifest-integrity.mjs --run frontier-35-ten-categories`:
  **52 pages owed, 52 in the manifests, no scope drift**.
- `node tools/validate-plan.mjs research/plan-spec.json`: **exit 0**
  (1 624 pages, 19 824 planned items; pre-existing warnings only).
- `node tools/source-backing.mjs --coverage …batch-16.coverage.json --liveness …batch-16.url-liveness.json --require-verified`:
  **exit 0**, 25 authored results backed.
- `node tools/url-sweep.mjs --coverage …batch-16.coverage.json`: **9/9 live**
  (the seven batch sources plus the Mărcuț and Hitchin documents added to the
  coverage harvest this session); the two new rows were merged into the batch
  liveness snapshot.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-35-ten-categories`:
  refreshed; the run-level ledger has **21 cross-batch edges, all reviewed, no
  orphaned reviews**. This pair declares **no cross-batch edge** (checked with
  the ledger's own `collect`), so the batch-16 cross-batch input is unchanged
  for it and its sibling rows are preserved.
- `node tools/step3-decisions.mjs record-scope`: refreshed **`sufficient`** for
  the A page, sha256 `71618aa24967d71e…`.
- `node tools/step3-decisions.mjs record-item` (18 receipts, decision `accept`,
  confidence 1, examined dependency ids recorded): **18/18 items closed**; the
  pair scope reads closed.

## Published concerns and cross-group notes

1. **Published-defect lead (outside this pair, not repaired here):**
   `lem-degree-zero-horseshoe-lift` is published with a claim for an arbitrary
   abelian category but its proof performs an element chase (`a∈A`,
   `y∈P''₀`); possible dependents
   `lem-the-horseshoe-kernel-fits-a-short-exact-sequence`,
   `lem-inductive-horseshoe-step`,
   `thm-horseshoe-lemma-for-projective-resolutions`. Proposed repair: use
   `def-projective-object`,
   `def-projective-resolution-in-an-abelian-category` and the abelian cokernel
   property with maps instead of elements. Recorded at scaffold time in
   `research/frontier-35-ten-categories-batch-16.notes.md`; the serial
   reconciler owns `research/published-consumer-supplier-ledger.md`.
2. **Change-of-basepoint pagination:** the published item
   `ex-change-of-basepoint-isomorphism-for-fundamental-groups` lives only on a
   category-theory B page, which makes it unusable as a load-bearing supplier
   for any authored A-page item (`depcheck` `b-leaf-content`). This pair now
   avoids it with a local A-page lemma, but the owner may wish to give the
   general fact a proper A-page home in the topology track at the next plan
   reconciliation; a sibling draft in this run
   (`lem-elementary-basis-changes-orientations-and-deck-lift-changes-die-in-the-whitehead-group`)
   had the same class of dependency and no longer appears in the depcheck list.
3. **BG-14 `scope-item-missing`:** 22 `content-policy` errors name sibling
   batch-16 items with no files yet; they belong to the other owner of this
   batch and are reported, not touched.

## Open obligations

- Nothing is open for the mathematics of this pair: both pages, all 16 assigned
  items and both local suppliers are authored, checked and receipted.
- For Step 4 (serial reconciliation): (a) refresh the pair's scope decision if
  any item statement changes before splicing; (b) splice the two local suppliers
  into the plan's item lists for the A page if the plan harness requires
  inventory agreement; (c) route the published-defect lead above into the
  canonical published-consumer-supplier ledger; (d) the one `shotgun-bracket`
  warning is advisory and does not block splicing.
