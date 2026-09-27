# Frontier 35, batch 15 — Step 1 scaffold evidence

Scope: the two assigned braid-group A/B pairs at orders 729/730 and 741/742. This is construction evidence, not proof approval or a publication verdict. No published item, shared plan, design, or engine state was edited. The owner-authoring direction file named in the dispatch was absent when construction began.

## Design and plan decisions

I read `CLAUDE.md`, `SCHEMA.md`, `WORKFLOW.md`, the batch task, current plan and batch inputs, and both complete A/B design sections in `research/plan-braid-groups-track.md`: BG-1 at lines 188 and 215, and BG-7 at lines 393 and 420. The A section controls each A inventory and proof route; the following examples section controls its B inventory. The current `research/plan-spec.json` controls page IDs, orders, categories, and `requires`. Its four rows agree with the assigned design on those fields, so there is no canonical plan conflict. The plan has empty item inventories for these pages; the manifest remains an unspliced proposal.

There is one internal design conflict: BG-1's proof seam assigns injectivity of the Artin-to-geometric map to BG-3 via Fox–Neuwirth cells, while the detailed BG-6 design assigns presentation completeness to braid combing. BG-1 therefore proves only surjectivity. Neither claimed later supplier is treated as published or used here; the later owner must reconcile the BG-3/BG-6 wording. BG-7's abbreviated sequence would use general positive lcms to show that all positive braids divide powers of Δ, while the cited reversing criterion supplies only **conditional** lcms until common multiples exist. The owned order first proves explicit atom complements, Δ index reversal and atom factors, then common Δ powers, then unconditional lcms/gcds. This closes that circularity. The source's triangular expressions for Δ are equivalent under positive braid relations and are not separate conventions.

BG-1 has ten A items and four B items. The added polygonal-genericity lemma makes the crossing-generation proof finite and collision-free. BG-7 has 24 A items and four B items. Added local right-complement definition, cube-condition and completeness lemmas, Δ atom-factor lemma, and type-A reduced-word lift lemma appear before their consumers. Both A inventories are below the 60-item limit; no page split or new prerequisite pair is required. Every item has explicit `deps`. The first-under-second stacking convention, setwise endpoint condition, transported strand labels, positive half twist and its opposite, left/right divisibility, and `n=2` center exception are retained. The geometric half-turn orientation must be written explicitly with the fixed disk orientation and projection when Step 3 authors the definition; GM Figure 2 fixes the source picture, and all signed uses must follow that choice.

The moving points in `def-geometric-braid-with-setwise-endpoints` must lie in the **interior** of the fixed disk, with the base configuration there. This is the convention needed for the uniform boundary margin used by the later polygonal approximation; a closed-disk formulation allowing a strand to touch the boundary would require an additional inward-pushing argument.

For `lem-geometric-braids-admit-generic-polygonal-representatives`, read “finitely many proper affine conditions” in its brief strategy as finite **algebraic** degeneracy conditions on vertex coordinates. Simultaneous crossing-height coincidences need not be affine in all coordinates. A small perturbation away from those proper loci, inside the established collision margin, is the intended proof; Step 3 must print that argument precisely.

## Mathematical dependency review

The nine inherited direct item prerequisites are `def-product-topology`, `def-homotopy-relative-and-path-homotopy`, `def-braid-group-by-the-artin-presentation`, `thm-von-dyck`, `thm-heine-borel-rn`, `thm-heine-cantor-metric`, `thm-extreme-value-metric`, `thm-adjacent-transpositions-generate-the-symmetric-group`, and `thm-reduced-words-form-the-free-group`. Their published statements and load-bearing proof steps were inspected. The Artin item defines the **abstract** presented group; the proposed positive-monoid proof does not rely on geometric presentation completeness. The compactness/continuity claims provide a uniform positive distance for a finite path family on a compact interval; the proof uses only finite products and finite choices. Von Dyck supplies the relator extension, while generation is separately proved by a generic finite-crossing representative. The reduced-word theorem supplies the nonidentity of a one-letter free generator for the `B_2` calculation. The local type-A exchange argument, rather than a published Coxeter-presentation theorem, supplies well-defined positive permutation lifts.

The source-backed difficult step is positive right reversing. Dehornoy et al., Chapter II, Proposition 4.16 uses a right-Noetherian complemented presentation and the **ordinary** cube condition. Its Example 4.20 checks precisely the Artin triple patterns and warns that the sharp cube condition fails for `n≥4`. The manifest asks for the complete induction from Proposition 4.51 and Appendix Lemma II.4.62, not just an assertion of cancellation. Reversing first gives cancellation and conditional right lcms; explicit Δ multiples make the lcm conclusion unconditional. Word reversal handles the opposite side. The local exchange lemma then identifies simple braids with reduced permutation lifts. The center argument follows GM Theorem 4.2 separately for even and odd Δ exponents; an odd exponent is rejected only for `n>2`, using distinct adjacent transpositions.

Traversal using the published `items/*.md` frontmatter for actual upstream deps, the four owned manifests for new deps, and published `library/**/*.md` page membership found 341 unique IDs over all four owned pages, 1,796 traversed dependency edges, no missing or cyclic ID, no unpublished or `proved_here: false` upstream item, no other-batch draft supplier, and no dependency outside each page's declared prerequisite closure. The separate per-page closures contain 298, 302, 142, and 142 IDs respectively, all mapped to allowed pages. No path reaches `deferred-set-theory-beyond-choice`. This is a structural traversal plus a review of the load-bearing statements/proofs above; it is not a claim that every proof in the 341-item foundational closure has been independently re-proved. There is no AC hypothesis in these finite braid constructions. The arbitrary-product AC statement in the topology supplier is not used: only finite products occur.

The consumer-batch input is `research/frontier-35-ten-categories-batch-15.cross-batch-dependencies.json` with `[]`: no owned item uses an in-run item in another batch, and both declared A-page prerequisite closures contain all actual inherited published suppliers. `node tools/frontier-dependency-ledger.mjs refresh --run frontier-35-ten-categories` completed after writing that input. No selected pair was changed.

## Published defects for owner ledger

These are defects in published proofs, so this worker did not change the items or the canonical published-consumer ledger. Neither item is an actual prerequisite of this batch's scaffold.

1. `thm-the-two-strand-braid-group-is-infinite-cyclic` is **published**. Its proof step 2.1 infers that the free generator has infinite order from `thm-free-groups-are-torsion-free`; torsion-freeness alone does not establish that the generator is nonidentity. The already **published** `thm-reduced-words-form-the-free-group` is the planned repair supplier: cite the nonempty reduced one-letter word, then torsion-freeness or distinct reduced powers. `ex-geometric-two-strand-braids-are-integer-twists` instead proves its own integer winding invariant, and `prop-the-center-of-b-two-is-all-of-b-two` explicitly cites the reduced-word supplier. No new unpublished result is mistaken for this repair.
2. `thm-the-symmetric-group-has-the-coxeter-presentation` is **published**. Its proof step 1.1 invokes [F1], an external statement of the exact target presentation, without deriving the completeness of the listed relations. The already **published** `thm-adjacent-transpositions-generate-the-symmetric-group` gives surjectivity only. Repair the published proof by adding an earlier or internal type-A exchange/reduced-word argument and the square-deletion step; the new `lem-reduced-adjacent-transposition-words-have-well-defined-positive-lifts` is only a **planned, unpublished** later BG-7 item, so it cannot serve as a prerequisite for this earlier published theorem. The already **published** `thm-the-braid-group-surjects-onto-the-symmetric-group` declares the Coxeter theorem as a dependency and is a downstream review target, although its elementary generator image can be justified directly. This batch does not depend on either published theorem.

## Source record

The coverage file records 39 individually disposed harvested results: BG-1 has 13 across two independent complete treatments; BG-7 has 26 across three, including a monograph. It records exact locators and each included/inline item ID, valid deferred destinations, or specific out-of-scope reasons. All five source entries passed full-text `source-fetch-check --stamp`; the stamps in coverage are GM 45 pages/474454 bytes (`8fef987df3601d1e`), Birman–Brendle 91 pages/809077 bytes (`22f52d9961a3f0fc`), and Dehornoy et al. 700 pages/6792607 bytes (`f33620adecd8e5cb`). The repeated GM and Birman–Brendle entries serve distinct A pages. No retrieval failure, replacement source, or `source_resolution` drop occurred.

- Juan González-Meneses, *Basic results on braid groups*, [complete PDF](https://arxiv.org/pdf/1010.0321): §§1.2–1.5 and 3.2, printed pp. 4–8 and 23–26, for geometric braids, half twists, finite crossing generation and relations; §4–4.3, pp. 26–31, for positive braids, Garside form, torsion and center.
- Joan S. Birman and Tara E. Brendle, *Braids: A Survey*, [author manuscript](https://www.math.columbia.edu/~jb/Handbook-21.pdf): §§1.1–1.3, pp. 3–7, for geometric conventions and the Artin map; §5.1 (G1)–(G6), pp. 61–64, for positive monoid, Δ and simple factors. Mapping classes, conjugacy algorithms and abstract Garside extensions have their recorded dispositions.
- Patrick Dehornoy et al., *Foundations of Garside Theory*, [author PDF](https://dehornoy.lmno.cnrs.fr/Books/Garside/Text.pdf): Chapter II, Proposition 4.16, Example 4.20 and Proposition 4.51, printed pp. 63–68 and 79–83; Appendix proof of Lemma II.4.62, pp. 659–661; Chapter IX, Lemmas 1.22 and 1.30–1.31 and Proposition 1.29, pp. 438–443. These give the full reversing hypotheses/proof and positive permutation lifts. The broader category construction is out of scope.

## Recorded outcomes and checks

Each of the 42 owned items was built once in prerequisite order, then given a current `ready` record with examined dependency IDs via `node tools/step1-decisions.mjs record`. No unchanged ready item or escalation was overwritten. These records certify Step 1 proof strategies and met prerequisites, not Step 3 mathematical approval.

- `coverage-checklist.mjs ... --require-destination`: pass, two A pages, 39 results, zero errors/warnings.
- `source-fetch-check.mjs --coverage ... --stamp`: pass, five of five full-text entries verified and stamped; subsequent source check resolved all five.
- `url-sweep.mjs --coverage ... --out /tmp/frontier35-b15-url-liveness.json --fail-on-dead`: pass, three distinct citations live, zero failed or suspect.
- `source-backing.mjs --coverage ... --liveness /tmp/frontier35-b15-url-liveness.json --require-verified`: pass, 23 unique authored results backed by openable verified sources or a documented alternative; no alternative was needed here.
- Whole-run `manifest-deps.mjs research/frontier-35-ten-categories-batch-*.pages.json`: pass, 370 items at the final check, zero normalization/errors.
- Whole-run `content-policy.mjs --manifest-only research/frontier-35-ten-categories-batch-*.pages.json`: pass, 370 scoped items at the final check, zero errors/warnings.
- `validate-plan.mjs research/plan-spec.json`: pass for the **current** plan, 1,624 pages and 19,824 new items, with pre-existing redundant-prerequisite warnings; it does not splice or approve these inventories.
- `extcheck.mjs --quiet`: exit 1 with 12 repository-wide hard errors and 48 warnings outside the assigned batch. The hard-error subjects are `fs-every-subexponential-growth-group-has-polynomial-growth` (three unproved flags), eight `rem-*` items missing `n/a` prechecks (`rem-cauchy-kovalevskaya-theorem-for-a-noncharacteristic-analytic-cauchy-problem`, `rem-dominated-convergence-theorem`, `rem-hahn-banach-hamel-basis-open`, `rem-martins-axiom`, `rem-nonamenable-groups-without-nonabelian-free-subgroups`, `rem-sierpinski-ultrafilter-not-measurable`, `rem-suslin-line-non-ccc-square-unverified`, `rem-vitali-non-measurable-set`), and `thm-onan-scott-classification-of-finite-primitive-groups` (unproved kind). No out-of-scope repair was attempted.
- Whole-run `step1-decisions.mjs check --run frontier-35-ten-categories`: exit 1 with 300 of 370 run items ready and 18 empty inventories among 88 unclosed entries; other batches retain escalations, stale records and empty inventories. A targeted current-hash check of this batch found all 42 ready records closed.

Step 3 must author and independently audit the full proofs, especially reversing completeness, the type-A exchange lemma and the odd/even center argument. The published-proof defects and unrelated global check failures remain for their respective owners.

## Step 3b checkpoint — pair `geometric-braids-and-artin-generators` (batch 15)

Authoring order, one item at a time, in prerequisite order. Items 1–8 were already on disk from Step 3a of this dispatch; each was re-read before its consumer was written. No other pair's file was touched.

### Item 9 — `lem-every-geometric-braid-is-a-word-in-half-twists` (authored, precheck PASS)

- Claim: for every braid $\beta$ based at $Q$ there are $M\ge0$, indices and signs with $\beta\sim\sigma_{i_1}^{\varepsilon_1}\star\cdots\star\sigma_{i_M}^{\varepsilon_M}$, hence $[\beta]=[\sigma_{i_1}]^{\varepsilon_1}\cdots$ in $G_n$ and generation of $G_n$ by the $[\sigma_i]$; empty word $=e$. The statement also records the crossing-by-crossing reading of the word ($p_k$ from the number of strands left of the crossing, $\varepsilon_k$ from whether the position-$p_k$ strand is below its partner at the crossing, lowest crossing giving the rightmost factor).
- Conventions preserved: $h=1/(4(n+1))$, $q_j=((2j-n-1)h,0)$, first-under-second stacking, $\sigma_i$ the half twist in which the label-$i$ strand passes below the midpoint (item 5), $\sigma_i^-$ its opposite.
- Mathematical route: (i) item 8 gives a generic polygonal representative; (ii) between crossing heights the first-coordinate order is constant, so each crossing-free stretch straightens inside a convex order chamber ($\Re$-order chambers are convex, $D^\circ$ is an open ball hence convex); (iii) the one-crossing case is reduced to the convex "wall" family $P_s=(1-s)\alpha(c)+sT^{\epsilon}$: every $P_s$ is collision-free with the pair vertically aligned and the other strands strictly ordered on either side, and the two-piece affine braid through $P_s$ is a braid for every $s$; (iv) the end $T^{\epsilon}$ of that family is exactly $\sigma_p^{\epsilon}$ up to a monotone height reparametrisation (step 1.3 proves reparametrisation invariance). The sign $\epsilon$ is $+1$ iff the left (position-$p$) strand is below at the crossing. Induction on the crossing count over a cut at a height between the two lowest crossings, where the slice is first straightened to the configuration $Q_\sigma$ inside its order chamber.
- Deps realised: items 2, 3, 4, 5, 6, 8 of this page plus published `def-interval`, `def-continuous-map-top`, `def-product-topology`, `lem-continuity-is-local-and-pastes`, `thm-algebra-of-continuous-functions`, `def-convex-subset-of-euclidean-space`, `ex-convex-subsets-of-rn-are-path-connected`, `def-metric-ball`, `thm-induction-principle`, `def-natural-numbers`, `def-finite-symmetric-group-and-permutation-notation`. No `forward_refs`; no AC.
- Checks run: `node tools/tsx-run.mjs tools/precheck.mts items/lem-every-geometric-braid-is-a-word-in-half-twists.md` → PASS (direct) after adopting the canonical stratification with `tools/adopt-repair.mjs` (run via a local stand-in because `npx` needs `npm_config_cache=/tmp/npm-cache` in this container).
- Open gaps: none mathematical. Contract entry, manifest refresh, coverage registration and the decision record are still to be written (see below).

### Item 10 — `prop-the-artin-presentation-surjects-onto-geometric-braids` (authored, precheck PASS)

- Claim: the assignment $x_i\mapsto[\sigma_i]$ ($x_i$ the abstract Artin generator, renamed to avoid collision with the geometric half twist) extends uniquely to $\varphi\colon B_n\to G_n$, and $\varphi$ is **surjective**; no injectivity is claimed anywhere.
- Relators evaluated geometrically: braid relation from item 7, far commutativity from item 6; extension and the surjectivity criterion from published `thm-von-dyck`; generation from item 9. The cases $n\le1$ are handled separately: $B_n$ trivial by `def-braid-group-by-the-artin-presentation`, and the empty family generates $G_n$ by item 9 with `def-generated-subgroup` ($\langle\varnothing\rangle=\{e\}$).
- Deps realised: `def-braid-group-by-the-artin-presentation`, `def-group-presentation`, `def-relators-relations-and-finite-presentations`, `def-free-group`, `def-group`, `thm-von-dyck`, `def-generated-subgroup`, plus items 5, 6, 7, 9 and `thm-geometric-braids-form-a-group` of this page.
- Checks run: precheck PASS (direct) after canonical stratification.
- Open gaps: none mathematical; the deferred BG-3/BG-6 injectivity wording is deliberately not imported.

### Next action

Author `ex-geometric-two-strand-braids-are-integer-twists` (B1) on the companion page: argument-lift invariant $k(\beta)=\Delta/\pi$ via `thm-path-lifting-for-covering-maps` and `thm-homotopy-lifting-for-covering-maps`, isotopy invariance, additivity under stacking, $k(\sigma_1)=1$, and $[\beta]=[\sigma_1]^{k(\beta)}$ from item 10's generation; not `thm-the-two-strand-braid-group-is-infinite-cyclic` (published defective proof, reported to the owner).

### Item B1 — `ex-geometric-two-strand-braids-are-integer-twists` (authored, precheck PASS)

- Claim kept from the manifest: $n=2$, $h=\frac1{12}$, $q_1=(-\frac1{12},0)$, $q_2=(\frac1{12},0)$; the argument lift $\theta$ of the relative motion $w=z_1-z_2$ normalised by $\theta(0)=\frac12$ gives $k(\beta)=2\theta(1)-1\in\mathbb Z$; $k$ is a homomorphism with $k(\gamma\star\beta)=k(\gamma)+k(\beta)$; $k(e)=0$, $k(\sigma_1)=1$, $k(\sigma_1^-)=-1$, $k(\sigma_1^m)=m$; $[\beta]=[\sigma_1]^{k(\beta)}$, so $G_2\cong\mathbb Z$ and the twists classify two-strand braids.
- Rewrite of the Step-3a draft (a Step-3b repair of my own draft): the previous step 1.4 normalised the isotopy lift at the *top* endpoint, which does not give $\Theta(1,\cdot)=\theta'$; the new step 4.1 uses the homotopy lifting theorem with the initial lift $s\mapsto\frac12$ on $I\times\{0\}$, which is legitimate because every slice has the same bottom value $q_1-q_2=(-2h,0)$. The previous additivity step also silently assumed that the second-half offset $\frac{\epsilon}{2}$ is an integer; the new step 3.1 records the parity dictionary $k(\beta)$ even $\iff\pi(\beta)=\mathrm{id}$ (equivalently $\epsilon\equiv k(\beta)\bmod 2$) and step 4.2 uses it to solve for the integer offset $z$.
- Deps realised: items 4, 5, 10 of this page plus published `thm-real-line-covers-real-line-mod-integers`, `thm-path-lifting-for-covering-maps`, `thm-homotopy-lifting-for-covering-maps`, `thm-real-line-mod-integers-is-homeomorphic-to-the-unit-circle`, `thm-quarter-turn-values-and-shift-formulas`, `lem-radial-normalisation-is-continuous`, `thm-continuous-image-of-a-connected-space`, `cor-connected-subsets-of-the-line`, `thm-algebra-of-continuous-functions`, `def-homeomorphism-and-open-maps`, `def-finite-symmetric-group-and-permutation-notation`. No `forward_refs`; no AC; no use of the defective published `thm-the-two-strand-braid-group-is-infinite-cyclic`.
- Checks run: precheck PASS (direct, 7 steps: 1.1, 2.1, 3.1, 4.1, 4.2, 5.1, 6.1).

### Item B2 — `ex-the-three-strand-geometric-braid-relation` (authored, precheck PASS)

- Claim: at $n=3$, $i=1$, $h=\frac1{16}$, $q_1=(-\frac18,0),q_2=(0,0),q_3=(\frac18,0)$, the two words $W_0=\sigma_1\star(\sigma_2\star\sigma_1)$ and $W_1=\sigma_2\star(\sigma_1\star\sigma_2)$ are braids based at $Q$ with endpoint permutation $(1\,3)$; $\mathrm{rot}$ (rigid rotation of the triple about $q_2$ by $\pi u$) is a braid based at $Q$ with the same permutation; the two words are braid-isotopic (isotopies from item 7) and $[\sigma_1][\sigma_2][\sigma_1]=[\sigma_2][\sigma_1][\sigma_2]$ in $G_3$.
- Calculations recorded in the item: the six window formulas obtained from the stacking formula (glue checks at $u=\frac14,\frac12$), the bounds $\frac{h^2}{2}\le\lVert\rho(v)\rVert_2^2\le h^2$ giving pair separation $\ge\sqrt2h=\frac{\sqrt2}{16}$ and frozen-point clearance $\ge 2h=\frac18$ (and all values inside the ball of radius $2h$ about $0$, hence in $D^\circ$), the products $(1\,2)(2\,3)(1\,2)=(2\,3)(1\,2)(2\,3)=(1\,3)$ evaluated at $1,2,3$, the collision criterion for the linear interpolation $Z(s,u)=(1-s)W_0(u)+s\,\mathrm{rot}(u)$ (collision $\iff$ a difference is a positive multiple of $(\cos\pi u,\sin\pi u)$) checked at $u=0,\frac12,1$, and the sample value $Z(\frac12,\frac12)=((h,-h),(-h,0),(0,h))$.
- Repair made to item 7 (own A-page draft) before writing B2: step 1.1 misidentified which 3-cycle is $\pi(\sigma_{i+1}\star\sigma_i)$; it is the inverse $i\mapsto i+2\mapsto i+1\mapsto i$, while $\pi(\sigma_i\star\sigma_{i+1})$ is $i\mapsto i+1\mapsto i+2\mapsto i$. The window formulas and the products $\pi(W_0),\pi(W_1)$ were already correct; only the parenthetical identification was inverted. Precheck re-run: PASS.
- Checks run: precheck PASS (direct, 5 steps: 1.1, 1.2, 2.1, 2.2, 2.3, 3.1 — canonical form adopted from the precheck repair block).
- Post-session follow-up (recorded in the appended entries below): the $W_0,W_1$ display block was joined onto one source line to clear the item-level `rendercheck` `multiline-display` error, and the item decision was re-recorded afterwards (sha256 `449d0459358611a2d4c31ea664e3c5c4b000812761e237b03be0bd20239e2449`).

### Items 1–8 and B3–B4 — Step 3b checkpoint entries (appended at handoff)

Written from the authored files and the recorded decisions; every claim below is the item's own statement, every decision is the recorded `record-item` row.

#### Item 1 — `def-geometric-braid-with-setwise-endpoints` (decision `repaired`)

- Claim/conventions: braids are tuples $z_j\colon I\to D^\circ$, collision-free at every height, $z_j(0)=q_j$, top endpoint set $=Q$; $h=\frac1{4(n+1)}$, $q_j=((2j-n-1)h,0)$, so $\lVert q_j\rVert_2\le(n-1)h<1$ — the interior-disc convention later consumed by item 8; endpoint permutation $\pi(\beta)$ well defined, pure $=$ identity permutation; empty and single-strand cases recorded.
- Sources: GM §§1.2–1.3, printed pp. 4–5; Birman–Brendle §1.1, author manuscript pp. 3–5.
- Deps realised: `def-product-topology`, `def-subspace-topology-top`, `def-continuous-map-top`, `def-interval`, `def-euclidean-spheres-and-closed-balls`, `def-natural-numbers`, `def-finite-symmetric-group-and-permutation-notation`.
- Repair: scaffold tightened to the interior convention and to the explicit identification of labels with $S_n$ through $\kappa$ (as recorded in the Step 1 notes above).
- Checks: precheck `n/a` (definition), rendercheck pass, manifest-deps and content-policy clean on this id. Open gaps: none.

#### Item 2 — `def-braid-isotopy-relative-top-and-bottom` (decision `accept`)

- Claim/conventions: a braid isotopy is a tuple of jointly continuous $Z_j\colon I\times I\to D^\circ$ with every slice a braid based at $Q$, bottom fixed pointwise and top set fixed setwise; slice permutations are *not* imposed, their constancy is proved in item 3.
- Sources: GM §§1.2–1.3, pp. 4–5; Birman–Brendle §1.1, pp. 3–4.
- Deps realised: item 1 plus `def-homotopy-relative-and-path-homotopy`, `def-continuous-map-top`, `def-product-topology`, `def-interval`, `def-finite-symmetric-group-and-permutation-notation`.
- Checks: precheck `n/a` (definition), rendercheck pass. Open gaps: none.

#### Item 3 — `prop-stacking-of-geometric-braids-is-well-defined` (decision `repaired`)

- Claim/conventions: $(\gamma\star\beta)_j(t)=z_j(2t)$ for $t\le\frac12$, $=w_{\pi(\beta)(j)}(2t-1)$ for $t\ge\frac12$ (first-under-second); the stacked tuple is a braid; $\pi(\gamma\star\beta)=\pi(\gamma)\circ\pi(\beta)$; the operation descends to isotopy classes and is associative; $\pi$ is constant along isotopies (clopen/connectedness argument on $I$).
- Sources: GM §§1.2–1.3, pp. 4–5; Birman–Brendle §§1.1–1.2.
- Deps realised: items 1, 2 plus `lem-continuity-is-local-and-pastes`, `thm-continuity-characterisations-top`, `cor-connected-subsets-of-the-line`, `def-connected-space`, `def-interval`, `def-subspace-topology-top`.
- Repair: step 4.1's tag now cites `[F2]` (used by the step); clears the `shotgun-bracket` warning. Checks: precheck pass; proof-contract `--strict` 0/0. Open gaps: none.

#### Item 4 — `thm-geometric-braids-form-a-group` (decision `repaired`)

- Claim/conventions: $G_n$ is a group under stacking, identity $[e]$, inverse $[\overline\beta]$ with $\overline\beta_j(t)=z_{\pi(\beta)^{-1}(j)}(1-t)$; $\pi\colon G_n\to S_n$ is a homomorphism.
- Sources: GM §§1.2–1.3; Birman–Brendle §1.1.
- Deps realised: items 1–3 plus `def-group`, `def-finite-symmetric-group-and-permutation-notation`, `lem-continuity-is-local-and-pastes`, `def-interval`, `def-homotopy-relative-and-path-homotopy`.
- Repair: step 3.1 now interpolates the parametrisation to its constant value $1$ (was "constant slot $0$", which did not match the out-and-back path). Checks: precheck pass; $n=0,1$ cases covered by formula. Open gaps: none.

#### Item 5 — `def-elementary-geometric-half-twist` (decision `repaired`)

- Claim/conventions: support disc $U_i=B(m_i,\frac32h)$ contains exactly $q_i,q_{i+1}$, lies in $D^\circ$, and $U_i\cap U_j=\varnothing$ for $|i-j|>1$; the diamond path $\rho$ with $\rho(0)=(-h,0)$, $\rho(\frac12)=(0,-h)$, $\rho(1)=(h,0)$, $\rho(t)\neq0$; positive $=$ anticlockwise with label $i$ below $m_i$ (with the fixed projection and first-under-second stacking): $\sigma_i^{-}$ and $[\sigma_i^{-}]=[\sigma_i]^{-1}$.
- Sources: GM §1.5, pp. 7–8 with Figure 2; Birman–Brendle §1.2.
- Deps realised: items 1, 4 plus `def-interval`, `def-continuous-map-top`, `lem-continuity-is-local-and-pastes`.
- Repair: the reversal computation now writes the relative path $-\rho(1-t)=\rho^{-}(t)$ (the superseded $(\rho_1,-\rho_2)(1-t)$ is a different path). Checks: precheck `n/a` (definition), rendercheck pass. Open gaps: none.

#### Item 6 — `lem-geometric-far-commutativity` (decision `repaired`)

- Claim/conventions: for $|i-j|>1$ the simultaneous braid $\Sigma_{ij}$ (both pairs moving at once) is a braid based at $Q$, and both stackings are braid-isotopic to it, hence $[\sigma_i][\sigma_j]=[\sigma_j][\sigma_i]$; vacuous for $n\le3$.
- Route recorded: two continuous time-window reparametrisations $\alpha_s,\beta_s$ (windows $(1-s)/2$ to $(1+s)/2$) slide the disjoint supports past one another; the interpolated tuple is collision-free slice by slice because the supports are disjoint and the other strands are constant.
- Sources: GM §1.5, pp. 7–8; Birman–Brendle §1.2.
- Deps realised: items 1–5 plus `lem-continuity-is-local-and-pastes`, `def-continuous-map-top`, `def-interval`.
- Repair: step 1.1 justifies the antipodal pair by $\rho(t)\neq0$ (source [F2]). Checks: precheck pass. Open gaps: none.

#### Item 7 — `lem-geometric-three-strand-braid-relation` (decision `repaired`)

- Claim/conventions: for $1\le i\le n-2$, $\sigma_i\star\sigma_{i+1}\star\sigma_i\sim\sigma_{i+1}\star\sigma_i\star\sigma_{i+1}$ and hence the relation in $G_n$; the intermediate braid is the rigid rotation of the triple about $q_{i+1}$ by $\pi u$.
- Route recorded: six explicit windows (validated against the stacking formula), the collision criterion "$(W_0)_k-(W_0)_l$ a positive multiple of $(\cos\pi u,\sin\pi u)$", the three phases checked separately, and the reflection identity $Z'_k=\kappa(Z_{\tau(k)})$ turning $W_0$'s windows into $W_1$'s.
- Sources: GM §3.2, printed pp. 23–26 (movies); Birman–Brendle §1.2.
- Deps realised: items 1–5 plus `lem-continuity-is-local-and-pastes`, `def-continuous-map-top`, `def-interval`.
- Repairs: step 1.1's $3$-cycle identification corrected to the inverse cycle for $\pi(\sigma_{i+1}\star\sigma_i)$; step 4.1 records $\lVert c\rVert_2+2h\le(n+1)h<1$ for the reflected values. Checks: precheck pass. Open gaps: none.

#### Item 8 — `lem-geometric-braids-admit-generic-polygonal-representatives` (decision `repaired`)

- Claim/conventions: every braid based at $Q$ is braid-isotopic to a polygonal representative with breakpoints $0=t_0<\dots<t_m=1$, no strand meeting another in projection at a breakpoint, and finitely many interior crossing heights at each of which exactly one pair has equal first coordinates, in the interior of one affine piece with a sign change, no third strand at that height.
- Route recorded: uniform margins $M$ (min pair distance) and $b$ (boundary clearance) from compactness; mesh with $\varepsilon=\min(M/4,b/2)$ so that $M-2\varepsilon>0$ and $b-\varepsilon>0$; independent vertex moves in a box of radius $\eta_*$ preserving the braid conditions; then finitely many proper algebraic conditions avoided by induction on the number of parameters (root bound + uncountability of an interval).
- Sources: GM §1.5, printed pp. 7–8 (generic finite-crossing projection); Birman–Brendle §1.2, pp. 5–6.
- Deps realised: items 1, 2 plus `thm-heine-borel-rn`, `thm-heine-cantor-metric`, `thm-extreme-value-metric`, `thm-algebra-of-continuous-functions`, `lem-continuity-is-local-and-pastes`, `thm-cauchy-schwarz-and-the-euclidean-norm`, `def-norm-and-normed-space`, `lem-euclidean-polygonal-paths-are-continuous`, `def-polygonal-path-and-polygonal-connectedness`, `thm-root-bound-for-polynomials-over-a-domain`, `def-polynomial-evaluation-and-root`, `def-polynomial-ring-over-a-commutative-ring`, `thm-polynomial-degree-of-a-product-over-a-domain`, `def-finite-cardinality`, `thm-subset-of-a-finite-set`, `cor-interval-uncountable`, `lem-finite-choice`, `def-interval`, `def-continuous-map-top`.
- Repairs: $\varepsilon=\min(M/4,b/2)$; step 4.1(b) proves the shared piece (piece interiors disjoint); step 5.1 witnesses non-vanishing by independent vertex parameters ($\partial\Phi/\partial X_{l,k}=\mp A_2$; case $k=m$: $\pm C_2$ with $C_r\neq0$ by [F1]); step 6.1 "not the zero polynomial"; step 7.1 one coincidence per piece; remark updated. Checks: precheck pass; strict contract 0/0. Open gaps: none; the only finite choices are those of `lem-finite-choice`.

#### Item B3 — `cex-setwise-endpoints-do-not-make-a-braid-pure` (decision `accept`)

- Claim/witness: $\sigma_1$ on two strands ($h=\frac1{12}$, $q_1=(-\frac1{12},0)$, $q_2=(\frac1{12},0)$) has top endpoint set $\{q_1,q_2\}$ but ends at $(q_2,q_1)$, so no strand returns to its own point; $\pi(\sigma_1)$ is the transposition, so $\sigma_1\not\sim e$ by constancy of $\pi$.
- Sources: GM §§1.2–1.3, pp. 4–5; Birman–Brendle §1.1, pp. 3–5.
- Deps realised: items 1, 2, 3, 4, 5 plus `def-finite-symmetric-group-and-permutation-notation`, `def-interval`, `def-continuous-map-top`.
- Checks: precheck pass; no claim beyond the endpoint permutation is made. Open gaps: none.

#### Item B4 — `cex-arbitrary-link-isotopy-need-not-be-braid-isotopy` (decision `accept`)

- Claim/witness: the family $\alpha_s(u)=((\lambda(s)w(u)/8,0),\,u+\lambda(s)w(u))$ with $\lambda(s)=\frac14\min(2s,2-2s)$ and the piecewise linear $w$ has injective arcs, fixed endpoints $(q_1,0)$, $(q_1,1)$ and trivial boundary arcs, but at $s=\frac12$ two distinct parameters give height $\frac12$, so the slice is not a strand; the monotonicity clause is not redundant.
- Sources: GM §§1.2–1.3, pp. 4–5; Birman–Brendle §1.1, pp. 3–5.
- Deps realised: items 1, 2 plus `def-euclidean-spheres-and-closed-balls`, `thm-algebra-of-continuous-functions`, `lem-continuity-is-local-and-pastes`, `def-continuous-map-top`, `def-product-topology`, `def-interval`, `def-natural-numbers`.
- Checks: precheck pass. Open gaps: none.

## Step 3b re-audit checkpoint — 2026-09-26 (dispatch `773dfe50aeec0964`)

The per-item entries above record the 2026-09-24 authoring session. The owner
then repaired the pair
(`frontier-35-ten-categories-geometric-braids-owner-step3-repair-2026-09-26.md`),
which invalidated every item receipt of that session and refreshed scope. This
dispatch re-audited all 14 items against disk and re-recorded decisions; the
old `dfec911c…` receipts and the "Handoff state" they described no longer
exist and are superseded by the state below.

- **Scope.** Owner `proceed` receipt, sha256
  `1c9e0859ff6dbc1f833cb7a1a2a7e452e8d1b98d44b5fc8f2d7fefce673c1560`, recorded
  2026-09-26T09:06:12Z, current for rows 729/730. `check --phase scope` lists
  only `type-a-soergel-bimodules-and-hecke-categorification` as needing a
  current review (another group's live work); no pair receipt of this pair is
  open.
- **Local repair (mine).** `lem-geometric-braids-admit-generic-polygonal-representatives`:
  restored the scaffold-promised uniform boundary clearance as Statement
  clause 4 ($\exists b'>0$, $\lVert\beta'_j(t)\rVert_2\le1-b'$ for all $j,t$)
  and matching clauses in the closing "Thus…" paragraph; step 2.1 records the
  $n=1$ clearance $1-\lVert p_1(t)\rVert_2\ge b-\varepsilon=b/2>0$; step 7.1
  records $\lVert p^{(\eta)}_j(t)\rVert_2\le1-b_1+\eta_*$ with
  $b_1-\eta_*>0$. The proof already derived these; only the claim text was
  missing. The manifest row's `statement` (unspliced scaffold promise) names
  the clearance explicitly, so this restores a dropped promise, it does not
  widen scope.
- **Manifest `deps` sync.** Three rows were resynced to the authored item
  frontmatter: A8 dropped
  `cor-polynomials-over-an-infinite-domain-are-determined-by-values`, A9
  dropped `ex-convex-subsets-of-rn-are-path-connected`, B1 added
  `lem-continuity-is-local-and-pastes`. A fresh comparison of all 14 rows
  against item frontmatter shows zero mismatches; sibling rows 740/741 are
  untouched.
- **Proof-contract resync.** `research/frontier-35-ten-categories-batch-15.proof-contracts.json`:
  A8 steps 2.1 and 7.1 `claim` text set to the current item steps; A8
  boundary rows for `empty`/`one`/`zero` rewritten to the current proof; item
  9's `F5` citation quote set to the current A8 `## Statement`.
- **Decisions.** All 14 items re-recorded via `tools/step3-decisions.mjs
  record-item` (confidence 1, `--dependencies` = the item's frontmatter
  `deps`): A8 `repaired`, the other 13 `accept`. `check` shows all 14 CLOSED
  at current hashes; run-wide `--phase final` has 618 accepted and 65 open
  entries, all in the sibling `type-a-soergel-*` pair (another group's live
  work), none among these 14 ids.
- **Receipt refresh (post-record event).** After the records above, an
  out-of-group edit landed in `items/def-sine-and-cosine-by-power-series.md`
  at 2026-09-26T09:24:25Z (metadata only: the justification
  `lem-sine-and-cosine-series-converge-everywhere` moved from `justified_by`
  into `deps`; the Definition section and all statements unchanged). Because
  `itemHash` covers the whole transitive closure, that byte change re-opened
  the B1 and B2 receipts (`current item audit required`) although neither
  their mathematics nor any cited statement moved. Both were re-recorded as
  `accept` at 2026-09-26T09:24:59Z / 09:25:03Z with a reason naming the event
  and the unchanged interface; all 14 receipts verify CLOSED again. Note for
  later readers: receipts are closure-byte-sensitive, so any further
  concurrent edit to a shared prerequisite can re-open them without a
  mathematical change.
- **Checks run today** (all from the repository root): precheck on the 14
  explicit item paths → 11 checked, 0 failing (3 definitions `n/a`);
  rendercheck on 14 items + 2 pages → OK; proof-contract `--strict` → 0
  errors, 0 warnings, 14/14; manifest-deps → 42 items, 0 errors;
  coverage-checklist `--require-destination` → 3 pages, 46 results, 0/0;
  content-policy → 42 scoped items, 28 errors, every one
  `scope-item-missing` for an unauthored sibling `garside-*` id, 0 on this
  pair; validate-plan `research/plan-spec.json` → exit 0 (NOTE over 431
  pages, including the unspliced 729/730, is the Step-4 obligation); depcheck
  → exit 1 with 352 repository-wide errors (333 `published-unaudited`, 9
  `published-unchecked`, 6 `b-leaf-content`, 3 `justification-backward`, 1
  Brauer page cycle) and 262 warnings, **zero** mentioning this pair; the
  frontier dependency ledger refresh → completed, batch 15 input `[]` is
  complete (no in-run cross-batch edge touches batch 15; the required pages
  are already-published pages not declared in any batch manifest), no
  orphaned reviews.
- **Published concerns re-checked first-hand** (unchanged, outside this pair,
  not in its dependency closure — a 585-item transitive closure of the 14
  items contains neither id): (1)
  `thm-the-two-strand-braid-group-is-infinite-cyclic` step 2.1 applies
  `thm-free-groups-are-torsion-free` (statement: a *nonidentity* element has
  no nontrivial power equal to the identity) without establishing that
  $\sigma_1$ is nonidentity in the free group on one generator; claim true,
  proof incomplete; repair supplier `thm-reduced-words-form-the-free-group`.
  (2) `thm-the-symmetric-group-has-the-coxeter-presentation` step 1.1 proves
  the presentation by citing [F1], an external statement of the target, and
  leaves declared deps `thm-adjacent-transpositions-generate-the-symmetric-group`
  and `thm-von-dyck` unused; an internal type-A exchange/reduced-word
  argument (with the square/deletion step) is required. Both are for the
  owner and the serial published-consumer ledger; this dispatch did not edit
  them or the ledger.
- **Open obligations.** (i) Pre-splice plan mismatch: `plan-spec.json`
  carries empty item inventories for 729/730 — Step 4 splices the manifest
  rows. (ii) Sibling rows 740/741 remain unauthored; the 28 content-policy
  `scope-item-missing` errors are exactly those items. (iii) The two
  published concerns above. (iv) The BG-3/BG-6 injectivity seam
  (inventory-neutral, order 739) stays for Step 4 reconciliation; this pair
  claims surjectivity only. No owner-held escalation, no local supplier, no
  AC usage. Next action: write the dispatch report; nothing further on this
  pair until Step 4.

## Step 3b checkpoint — pair `garside-structure-normal-forms-and-the-center` (batch 15)

Writer lane opened after the geometric pair closed. Decisions taken before authoring, from the readiness audit and my own reads of `research/plan-braid-groups-track.md` (BG-7 at lines 393/420), the Step-3a scope receipt, `research/plan-spec.json` closure, and the three sources (GM §4, /tmp/gm-braids.txt lines 1378–1622; Dehornoy Ch. II §4 and Appendix, /tmp/deh.txt lines 3725–4020, 4420–5000, 35448–35845; Dehornoy Ch. IX §§1.1–1.2, lines 23540–24160).

- Manifest thinness: rows 741/742 keep `id/kind/title/strategy/deps` only; no `statement`/`sources`/`provenance` is added, because the Step-3a scope hash covers `id/kind/title/statement` for both pages and enriching would void the owner scope receipt (`research/frontier-35-ten-categories-step3a-review-garside-structure-normal-forms-and-the-center.json`, sha256 991caec7aa…, `sufficient`). Binding claim text = BG-7 exact-content column + strategy. Manifest `deps` rows may be synced to authored frontmatter (deps are outside the scope hash).
- Plan-closure restriction: the A-page `requires` closure (110 pages / 2910 items) contains `thm-adjacent-transpositions-generate-the-symmetric-group`, `thm-reduced-words-form-the-free-group`, `thm-von-dyck`, `def-natural-numbers`, `def-semigroup-and-monoid`, `def-alphabet-words-and-reduction`, but **not** the finite-Weyl root-system items (`lem-finite-weyl-strong-exchange-and-deletion` etc.) nor the draft `lem-type-a-reduced-words-are-connected-by-braid-moves`. The type-A lift lemma is therefore proved locally from the published generation theorem only.
- Reversing route fixed as Dehornoy case (4.53): right-complemented Artin presentation (Ex 4.4), homogeneous ⇒ ℕ-valued right-Noetherianity witness `lg` (Prop 2.32/2.33), ordinary (not sharp) cube condition on generators verified via the θ-cube computations of Ex 4.20 plus the θ-cube ⇒ cube link (Lemma 4.55), then Appendix Lemma II.4.62 (nested induction E_α, E_{α,ℓ}, E_{α,2,d}, reproduced in full) ⇒ Prop 4.51 completeness ⇒ Cor 4.45 left-cancellativity and Cor 4.47 conditional right-lcms. The three nontrivial θ* values of Ex 4.20 were re-derived by hand from (4.7)–(4.10) (θ*(σ2σ1,σ3)=σ3σ2σ1; θ*(σ1σ2,σ3σ2)=σ3σ2σ1; θ*(σ1,σ2σ3)=σ2σ1σ3σ2 ≡⁺ σ2σ3σ1σ2 = θ*(σ3,σ2σ1)) and agree with the source.
- Scaffold repair: `research/frontier-35-ten-categories-batch-15.coverage.json` has rows for the geometric A, Garside A and geometric B pages, but **no Garside B-page row**; I add one for `garside-structure-normal-forms-and-the-center-examples` (three sources, four `inline` example dispositions).
- No AC/choice principle anywhere in this pair; every argument is finite or over ℕ. State this explicitly in the items.

### Item 1 — `def-positive-braid-monoid` (authored, precheck clean, rendercheck OK)

- Claim: $\Sigma_n=\{\sigma_1,\dots,\sigma_{n-1}\}$; positive words; $R_n$ = braid and far-commutation pairs; $\equiv^{+}$ = smallest congruence containing $R_n$; $B_n^{+}=\Sigma_n^{*}/\!\equiv^{+}$ with $[uv]=[u][v]$; universal property for monoids; explicit distinction from the group $B_n$; trivial for $n\le1$. Deps realised: `def-braid-group-by-the-artin-presentation`, `def-semigroup-and-monoid`, `def-alphabet-words-and-reduction`, `def-equivalence-relation`, `def-natural-numbers`.
- Checks: `precheck` (definitions are skipped: "0 checked, 0 failing") and `rendercheck` OK after joining the two display blocks onto single source lines.
- Next: item 2 `lem-positive-artin-relations-preserve-homogeneous-length`.

### Items 5–7 — reversing completeness, cancellativity, divisibility orders (authored, precheck PASS / n-a)

- **Item 5** `lem-artin-positive-word-reversing-is-complete`: repaired from the Step-3a draft before closing. (i) The draft left the coherence of the two recursion rules as an unproved "adoption"; the binder now records three precisely stated source facts with hypothesis checks — [L7] Lemma 4.32 (right-complemented presentations have a unique least partial extension $\theta^*$; at most one terminal pair), [L8] Definition II.2.31(ii)+Proposition 2.32 (no-Noetherianity witness; homogeneous presentations have the $\mathbb N$-valued length witness), [L9] Lemma 4.55 ($\theta$-cube $\Rightarrow$ cube) — and every other step is re-derived: the Appendix Lemma II.4.62 nested induction (steps 1.6, 1.7, 2.3, 3.1, 4.1), Corollary 4.45 (step 5.1) and Corollary 4.47 (step 5.2). (ii) The draft's step 3.2(iii) and outer induction used $|w|$ as witness without saying why strictness holds; now the non-invertibility of letters is proved from $\ell([s])=1$ ($1+\ell(x)=0$ impossible in $\mathbb N$). (iii) A forward-reference/phase repair was adopted mechanically (final steps 1.1–1.7, 2.1–2.3, 3.1, 4.1, 5.1–5.2, 6.1, 7.1); precheck PASS (direct), rendercheck OK. Locators: Dehornoy et al. Chapter II §§4.1–4.4 and Appendix II.4.62 (printed pp. 63–83, 657–661).
- **Item 6** `lem-the-positive-braid-monoid-is-left-and-right-cancellative`: new local supplier. Statement: reversal descends to an involutive anti-automorphism $\rho$ of $B_n^+$ ($u\equiv^+v\Rightarrow u^{rev}\equiv^+v^{rev}$); left cancellation (restated at class level, from item 5(d)); right cancellation (apply $\rho$ to $ax=bx$ and cancel on the left); dictionary $[w]=[u][v]\Leftrightarrow[w^{rev}]=[v^{rev}][u^{rev}]$. Steps 1.1–1.3, 2.1–2.3, 3.1; precheck PASS (direct), rendercheck OK.
- **Item 7** `def-left-and-right-divisibility-for-positive-braids`: $a\preccurlyeq_L b\iff\exists c\,(b=ac)$, $a\preccurlyeq_R b\iff\exists c\,(b=ca)$, strict versions, partial-order properties (antisymmetry from additivity of $\ell$ and $\ell(x)=0\Rightarrow x=1$), left/right- invariance with converses from cancellation, witness uniqueness, length monotonicity and finiteness of divisor sets, reversal exchange of the two orders, and the lcm/gcd vocabulary ($\vee_L,\wedge_L,\vee_R,\wedge_R$). Definition item: precheck n/a, rendercheck OK.
- Also repaired in `def-artin-right-complements-and-word-reversing`: the draft claimed $\Theta$ is defined on *every* pair and derived well-definedness from a bogus induction. It now states that $\Theta$ is the source's partial map (defined exactly when the reversing of $u|v$ terminates), that its four rules are item 5(a), and that totality for the Artin presentation is a later theorem (item 12 + item 5(c)); rendercheck OK.
- Next: item 8 `lem-artin-atoms-have-explicit-left-and-right-lcms-and-complements`.

### Items 11–17 checkpoint (appended 2026-09-26, session 2)

- **11–15 authored and precheck-clean in the previous segment** (summary of session 1): atom factors Δ=σ_iR_i; every positive braid divides a Δ-power; unconditional positive lcm/gcd (item 13); Ore fraction group ≅ B_n (item 14); lattice extension of both orders to B_n with positive/group agreement for positive elements (item 15). Their source locators are unchanged (GM §4 pp. 26–31; Dehornoy Ch. II §4 + App. II.4.62). **Provenance repair this session:** ten Garside item files carried the wrong González-Meneses URL `https://arxiv.org/abs/1010.2848` (readiness-audit flag); all were rewritten to the verified `https://arxiv.org/abs/1010.0321` (no other file in the repo contains 1010.2848 now).
- **16** `lem-reduced-adjacent-transposition-words-have-well-defined-positive-lifts`: canonical step relabelling adopted; precheck PASS (direct), rendercheck OK. [F4] imports only Dehornoy Prop. IX.1.10 + Cor. IX.1.11(ii) (Matsumoto) for type A with the three relation families checked in step 1.1; exchange (f) and the prefix invariant (d) are proved locally.
- **17** `lem-simple-positive-braids-are-indexed-by-permutations`: NEW. Statement parts (a) permutation calculus, (b) reducedness criterion a≼_LΔ ⟺ a≼_RΔ ⟺ a=σ̂(π(a)) ⟺ ℓ(a)=inv(π(a)), (c) bijection S_n ≅ {left divisors of Δ} = {right divisors of Δ} of cardinality n!, (d) descent criterion (σ_i≼_L b, b reduced ⟹ pos(i)>pos(i+1); all atoms ⟹ b=Δ), (e) group-divisibility agreement. Key routines: inv(σ)+inv(σ^{-1}w_0)=N via E(σ^{-1}w_0) = increasing pairs; concatenation of reduced words is a reduced word for w_0; forward direction of (b) by the length chain N≤inv(π(a))+inv(π(c))≤ℓ(a)+ℓ(c)=N; right divisors via ρ (π∘ρ anti-homomorphism, ρ(σ̂(τ))=σ̂(τ^{-1}), ρ(Δ)=Δ). precheck PASS (direct), rendercheck OK. No AC. Next: item 18.


### Items 8–10 checkpoint (appended 2026-09-26, session 3)

- **Item 8** `lem-artin-atoms-have-explicit-left-and-right-lcms-and-complements`: claim (a) $\Theta(\sigma_i,\sigma_j)=\varepsilon$ for $i=j$, $=\sigma_j\sigma_i$ for $|i-j|=1$, $=\sigma_j$ for $|i-j|\ge2$, symmetrically; (b) $\sigma_i\vee_L\sigma_j=\sigma_i$ (i=j), $\sigma_i\sigma_j\sigma_i$ (adjacent), $\sigma_i\sigma_j$ (distant); (c) the right-handed analogue; (d) $\Theta(\sigma_i,\sigma_j)=\varepsilon\iff i=j$, so distinct atoms are $L$-incomparable; (e) right-divisibility test; (f) lengths 1,2,3. Scaffold repairs: added `## Proof`, replaced citations to nonexistent steps 1.4/1.5 in Assembly, justified distinct atom classes by the absence of a length-one defining rewrite (not by the tautology), corrected the GM URL to `1010.0321`. Steps 1.1–1.3, 2.1–2.2, 3.1, 4.1. Complements re-verified against the machine reversing oracle. Deps: [F1] recursion (item 3), [L3] divisibility (item 7), [L4] conditional lcm (item 5).
- **Item 9** `def-garside-half-twist-and-simple-positive-braid`: $T_k=\sigma_k\cdots\sigma_1$, $U_k=\sigma_1\cdots\sigma_k$, $\Delta=\Delta_n=T_1\cdots T_{n-1}=\sigma_1(\sigma_2\sigma_1)\cdots(\sigma_{n-1}\cdots\sigma_1)$, $\ell(\Delta)=N=n(n-1)/2$, recursion $\Delta_n=\Delta_{n-1}T_{n-1}$. Repairs: *balanced* redefined so that the divisor $s$ itself is both a left and a right divisor of $\Delta$ ($\Delta=sc=ds$), since the old definition was automatic for every complement; $\tau(\Delta)$ and the reversed triangular word kept as **distinct words** whose classes are identified only in item 10 (for $n=4$ the literal words are $323123$ vs $123121$). Definition item: precheck n/a, rendercheck OK. Source GM §4.
- **Item 10** `lem-conjugation-by-delta-reverses-artin-generators`: (a) $\sigma_i\Delta\equiv^{+}\Delta\sigma_{n-i}$; (b) $\Delta w\equiv^{+}\tau(w)\Delta$ and $w\Delta\equiv^{+}\Delta\tau(w)$; (c) $\tau(\Delta)=\Delta$ and the reversed triangular word represents $\Delta$; (d) $\Delta^{2}$ central; (e) the sliding identity. Repairs: [F1]/step 1.1 use support (not multiset) preservation; statement (e) restricted to $k\le n-2$ (at $k=n-1$ the symbol $\sigma_n$ does not exist) with the $\sigma_kT_k$ vs $T_k\sigma_{k+1}$ distinction made by endpoint permutations; the $\Delta_m$ reversal proved by the local induction $C(m):U_{m-1}\Delta_{m-1}=\Delta_m$ with steps 2.1/3.1 as a simultaneous induction; GM URL corrected. Steps 1.1–1.2, 2.1, 3.1, 4.1, 5.1–5.2, 6.1. Source: GM §4 pp. 27–28; Dehornoy IX Lemma 1.22 (printed p. 438).

### Items 18–24 checkpoint (appended 2026-09-26, session 3)

- **Item 18** `lem-delta-is-the-lcm-of-the-artin-atoms-and-has-the-same-left-and-right-divisors`: (a) $\Delta$ is the left-lcm of the atoms; (b) same on the right (via the reversal anti-automorphism $\rho$); (c) left divisors = right divisors $=\{\widehat{\sigma}:\sigma\in S_n\}$, $n!$ elements; (d) $\sigma_i\preccurlyeq_L m$ for all $i$ iff $\Delta\preccurlyeq_L m$, and likewise right. Repair: step 3.1 cited nonexistent step 1.2 for the right-hand half; now cites step 2.1. Steps 1.1, 2.1, 3.1, 4.1. Deps: items 13, 17.
- **Item 19** `thm-left-garside-normal-form-is-unique`: (a) $p(x)=\max\{p:\Delta^{p}\preccurlyeq_L x\}$ exists and the pair $(p(x),A(x)=\Delta^{-p(x)}x)$ is the unique one with $A\in B_n^{+}$, $\Delta\not\preccurlyeq_L A$; (b) greedy existence of $x=\Delta^{p}a_1\cdots a_r$ with $a_i$ proper simple and $a_i=\Delta\wedge_L(a_i\cdots a_r)$; (c) uniqueness; (d)(i) $r=0\iff x\in\langle\Delta\rangle$, (d)(ii) $p(x)\ge0\iff x\in B_n^{+}$; (e) left weighting $(a_ia_{i+1})\wedge_L\Delta=a_i$; $n=2$ degenerates to powers of $\sigma_1$. Repairs: removed the false scaffold claim "$p=0$ unless $r=0$" (counterexample $x=\Delta\sigma_1$ in $B_3$: positive, $p=1$, $r=1$); step 1.1 now moves $\Delta^{-1}$ with $w\Delta^{-1}=\Delta^{-1}\tau(w)$ ($\tau^{2}=\mathrm{id}$). Steps 1.1–1.2, 2.1, 3.1, 4.1, 5.1, 6.1, 7.1.
- **Item 20** `cor-the-braid-group-word-problem-is-decidable-by-garside-normal-form`: effective procedures — (a) positive-word congruence/divisibility via $\Theta$ ($u\equiv^{+}v\iff\Theta(u,v)=\Theta(v,u)=\varepsilon$; $[v]\preccurlyeq_L[u]\iff\Theta(u,v)=\varepsilon$), (b) rewrite any signed word to $\Delta^{p}A$ and compute the left normal form, (c) left-gcds of finite families. Repairs: [F2] now says the words of length $\le\ell(b)$ are a finite **superset** of the divisor candidates (filtered by the effective test), statement and tests use the signed input $u^{-1}v$, and the inverse-$\Delta$ move cites $z\Delta^{-1}=\Delta^{-1}\tau(z)$. Steps 1.1–1.2, 2.1, 3.1, 4.1, 5.1. Deps: items 5, 12, 15, 19.
- **Item 21** `thm-braid-groups-are-torsion-free-by-the-garside-lattice`: $x^{r}=1$, $r\ge1$, implies $x=1$: $d=1\wedge_Lx\wedge_L\cdots\wedge_Lx^{r-1}$ exists ($n\ge2$, item 15 group lattice + left translations as lattice automorphisms), $xd=x\wedge\cdots\wedge x^{r}=d$ since $x^{r}=1$, so $x=1$ by cancellation; $n\le1$ trivial. Steps 1.1–1.2, 2.1, 3.1, 4.1. The Statement's mention of the normal-form theorem is an explicit *non-use* disclaimer (records that the argument needs no normal form), hence the deliberate `cited-not-in-deps` advisory.
- **Item 22** `lem-a-central-positive-braid-is-a-power-of-delta-squared-for-n-greater-than-two`: central $z\in B_n^{+}$ with $n>2$ implies $z=\Delta^{2k}$, $k\ge0$. Even $p$: $A$ is central; odd $p$: the twisted identity $A\sigma_{n-j}\sigma_{n-i}=\sigma_j\sigma_i A$; then $S=\{k:\sigma_k\preccurlyeq_L A\}$ is nonempty and closed under neighbours, so $S$ is everything, $\Delta\preccurlyeq_L A$, contradiction; odd exponents are excluded by $\sigma_1\ne\sigma_{n-1}$ in $S_n$. Repair: [F1]'s sliding parity statement restricted to nonnegative powers (positivity of $z$ gives $p\ge0$ in the normal-form split), so no negative-power induction is needed. Steps 1.1–1.2, 2.1, 3.1, 4.1, 5.1, 6.1. Deps: items 8, 10, 18, 19.
- **Item 23** `thm-the-center-of-b-n-is-generated-by-the-full-twist-for-n-greater-than-two`: $\langle\Delta^{2}\rangle\subseteq Z(B_n)$ from $\sigma_i\Delta^{2}=\Delta^{2}\sigma_i$; every central $x=ab^{-1}$ is shifted by a central even power into $B_n^{+}$ ($\Delta^{2r}=c'b$ from item 12) and item 22 makes it $\Delta^{2s}$, so $x=\Delta^{2(s-r)}$; infinite cyclic by torsion-freeness and $\ell(\Delta^{2})=2N>0$. Repairs: [F4] rewritten without the iota-notation, dependency additions, and (today) the Remarks' dangling "(step 1.3)" corrected to "(step 1.2, applied in step 2.1)" — machine-scanned: no dangling step references remain in any of the 28 items. Steps 1.1–1.2, 2.1, 3.1, 4.1.
- **Item 24** `prop-the-center-of-b-two-is-all-of-b-two`: $B_2=\{\sigma_1^{k}:k\in\mathbb Z\}=\langle\Delta\rangle$ infinite cyclic and abelian, so $Z(B_2)=B_2=\langle\Delta\rangle$; the $n=2$ exception to the centre theorem, proved from the published free-group description of $B_2$ (`thm-reduced-words-form-the-free-group`). Repair: Assembly step labels. Steps 1.1, 2.1, 3.1, 4.1.

### B-page items 25–28 checkpoint (appended 2026-09-26, session 3)

- **Item 25** `ex-the-simple-braids-and-divisibility-lattice-for-b-three`: $n=3$; the six simple braids $1,\sigma_1,\sigma_2,\sigma_1\sigma_2,\sigma_2\sigma_1,\Delta$ with the six permutations $\mathrm{id},(1\,2),(2\,3),(1\,2\,3),(1\,3\,2),(1\,3)$; $\sigma_1\wedge_L\sigma_2=1$, $\sigma_1\vee_L\sigma_2=\Delta$; for $a=\sigma_1\sigma_2$, $b=\sigma_1$: $a\wedge_Lb=\sigma_1$ (prefix) while $a\wedge_Rb=1$ (suffixes of $a$ are $1,\sigma_2,a$; those of $b$ are $1,b$). Repair: the two-letter candidate sentence rewritten (four distinct length-two words; the only right-atom divisor of $a$ is $\sigma_2$). Steps 1.1–1.4. I re-derived both meets by hand under the page's conventions ($x\preccurlyeq_R y\iff y=cx$).
- **Item 26** `ex-a-left-garside-normal-form-computation-in-b-three`: $x=\sigma_1^{-1}\sigma_2=\Delta^{-1}\sigma_1\sigma_2^{2}$; meet $\Delta\wedge_L\sigma_1\sigma_2^{2}=\sigma_1\sigma_2$ via the scaling identity $D(A\wedge_LB)=(DA)\wedge_L(DB)$ with $D=\sigma_1\sigma_2$, $A=\sigma_1$, $B=\sigma_2$ and $\sigma_1\wedge_L\sigma_2=1$; left normal form $x=\Delta^{-1}(\sigma_1\sigma_2)\sigma_2$, $p(x)=-1$, $A(x)=\sigma_1\sigma_2^{2}$, factors proper simple with images $s_1s_2$, $s_2$, left weighting $(a_1a_2)\wedge_L\Delta=a_1$; $x\notin B_3^{+}$ (via $p(x)<0$). Repairs: separate suffix $c'$ in $\sigma_2=dc'$; nonpositivity from $p(x)<0$ rather than from the presence of an inverse letter; the substitution described correctly. Steps 1.1–1.2, 2.1, 3.1–3.2, 4.1, 5.1, 6.1. Scaling-identity instance machine-checked against the Artin-action oracle.
- **Item 27** `ex-the-full-twist-in-b-three`: $(\sigma_1\sigma_2)^{3}=\sigma_1\sigma_2\sigma_1\cdot\sigma_2\sigma_1\sigma_2=\Delta^{2}$; $\Delta^{2}$ commutes with both generators and hence is central; $Z(B_3)=\langle\Delta^{2}\rangle\cong\mathbb Z$ (centre theorem + torsion-freeness); $\Delta\notin Z(B_3)$ since $\sigma_1\Delta=\Delta\sigma_2$ and $\sigma_1\ne\sigma_2$. Repair: first Remark now says the exponent sums are 3 and 6 **respectively** (they are different). Steps 1.1–1.2, 2.1–2.2, 3.1–3.2, 4.1.
- **Item 28** `cex-exponent-sum-is-not-a-complete-braid-normal-form`: $\varepsilon\colon\sigma_i^{\pm1}\mapsto\pm1$ is a homomorphism by von Dyck, but not complete: $\varepsilon(\sigma_1)=\varepsilon(\sigma_2)=1$ while $\sigma_1\ne\sigma_2$ in $B_3$ (distinct images $s_1\ne s_2$ in $S_3$); both witnesses have $(\varepsilon,p,r)=(1,0,1)$, so even the coarse Garside data fail to separate them. Repairs: surjectivity qualified to $n\ge2$; step 3.2 now spells out that $p\ge1$ would give $\Delta\preccurlyeq_L\sigma_i$ (a $\Delta$-prefix), so $p=0$. Steps 1.1–1.2, 2.1, 3.1–3.2, 4.1. Two advisory `shotgun-bracket` warnings remain (step 3.2 cites 4 of 6 facts while steps 3.1 and 4.1 are assembly steps) — reported, not suppressed.

### Session-3 repair pass and verification battery (appended 2026-09-26, session 3)

- **Right-reversing orientation (items 3 and 5).** $\Theta(u,v)$ is the *first* block $v'$ of the terminal pair $v'\,(u')^{-1}$ of the reversing of the negative–positive path $u^{-1}v$ (negatives read in reverse order), whose blocks satisfy $u v'\equiv^{+}v u'$; the opposite orientation $uv^{-1}$ is already terminal. This was re-verified against Dehornoy II Definition 4.21, Lemma 4.32 and Example 4.22, and independently by a machine oracle (element-faithful reversing with the syntactic $\theta$; `/tmp/gv`): the oracle reproduces Example 4.11's $\theta^{*}(\sigma_1\sigma_2,\sigma_3\sigma_2)=\sigma_3\sigma_2\sigma_1$, the *five-step* reversing of Example 4.22 with terminal blocks $(\sigma_3\sigma_2\sigma_1,\sigma_1\sigma_2\sigma_3)$, the worked value $\Theta(\sigma_2\sigma_1,\sigma_3)=\sigma_3\sigma_2\sigma_1$ of item 3, and the companion value $\Theta(\sigma_3,\sigma_2\sigma_1)=\sigma_2\sigma_3\sigma_1\sigma_2$; with the Artin action on $F_n$ (faithful) it also confirms $u\Theta(u,v)=v\Theta(v,u)$ for these pairs.
- **Cube-condition item.** The six consecutive-triple values of steps 2.4–2.6 were recomputed by the oracle and agree word-for-word; $\Theta_3(x,y,z)\equiv^{+}\Theta_3(y,x,z)$ holds for **all** letter triples of $B_6$ (0 failures; $\equiv^{+}$-equivalence checked by braid equality in the Artin action), and $\sigma_{i+1}\sigma_i\sigma_{i+2}\sigma_{i+1}\equiv^{+}\sigma_{i+1}\sigma_{i+2}\sigma_i\sigma_{i+1}$.
- **Item 5's proof-step repairs (today).** Step 1.4's scaffold-inherited phrase "the lengths of the two blocks never decrease and never increase" (empty/false) replaced by the accurate length accounting of a reversing step ($s\ne t$: two letters replaced by $|\theta(s,t)|+|\theta(t,s)|\ge2$; $s=t$: two letters removed). Step 5.2's uniqueness of the terminal pair now cites [L7](i) (the source's maximal-diagram uniqueness) instead of the local-determinism sentence; the contract entry for the item was regenerated, and the corollary's F1 quote refreshed, after the Statement's own orientation repair.
- **Item 23's Remarks**: dangling "(step 1.3)" → "(step 1.2, applied in step 2.1)"; a scan of all 28 items for prose references to nonexistent steps now returns none.
- **Battery actually run on the final bytes:** explicit-path `precheck` on the 28 item files → 24 checked / 0 failing (4 definitions n/a); `rendercheck` on 28 items + both pages → OK (30 files; KaTeX + YAML); `proof-contract --strict` → 0 errors, 2 advisory warnings, 42/42 items; `citation-fidelity` → 329 citations, no quote-not-found, no widening candidates; `content-policy` (batch file, full) → 42 items, 0 errors, 0 warnings; `content-policy --manifest-only` → 42 `batch-item-already-exists` (the pre-splice shape, see below); `manifest-deps` → 42 items, 0 errors, and `/tmp/syncdeps.py` reports `changed 0`; `coverage-checklist research/frontier-35-ten-categories-batch-15.coverage.json --require-destination` → 4 pages, 58 harvested results, 0 errors, 1 accepted advisory; `validate-plan research/plan-spec.json` → OK; `frontier-dependency-ledger.mjs refresh --run frontier-35-ten-categories` → refreshed (batch-15 input file is `[]`, no in-run edge touches batch 15; sibling rows preserved); `depcheck.mjs` → repo-wide FAIL from pre-existing published debt, with only the 5 deliberate forward remarks attributable to this pair (items 5, 11, 21, 22, 23; plus the published-unaudited flag on a published item outside the pair).
- **Open obligations.** (1) Pre-splice plan mismatch: `research/plan-spec.json` rows 741/742 still carry empty item inventories (431 planned pages repo-wide) → Step 4 splice; the `--manifest-only` errors are exactly this shape, as for the closed 729/730 pair. (2) Birman–Brendle §5.3 (dual Garside) still needs an explicit out-of-scope coverage row (serial reconciler). (3) Published defects outside this pair, reported not edited: `thm-the-symmetric-group-has-the-coxeter-presentation` (step 1.1 cites external [F1] for the target presentation; declared deps unused) with the downstream review candidate `thm-the-braid-group-surjects-onto-the-symmetric-group` (its [L3] borrows that unproved presentation where the Coxeter relations in $S_n$ are a direct finite check); note that `thm-the-two-strand-braid-group-is-infinite-cyclic` was **repaired on disk today at 19:29** by its owner (now depends on `thm-reduced-words-form-the-free-group` and proves $\sigma_1^{m}\ne1$ by reduced words), so the earlier defect report for it is resolved. (4) BG-3/BG-6 injectivity seam (inventory-neutral, order 739) stays for Step 4. (5) Local supplier stated on the page: `thm-left-and-right-divisibility-extend-to-lattice-orders-on-the-braid-group` step 1.3, the scaling identity $D(A\wedge_LB)=(DA)\wedge_L(DB)$, used by item 26 step 2.1. (6) Forward-reference `cited-not-in-deps` advisories as listed above; 2 `shotgun-bracket` advisories in items 5 and 28.
- **Next:** record the 28 Step-3b item decisions (`accept`/`repaired`), then write the dispatch report `research/frontier-35-ten-categories-step3b-pair-garside-structure-normal-forms-and-the-center.md`.

### Final checkpoint (appended 2026-09-26, session 3 close)

- **Decisions recorded and verified CLOSED.** All 28 items recorded via
  `tools/step3-decisions.mjs record-item` with `--confidence 1`, the items'
  authored frontmatter `deps`, and a concrete evidence reason: 27 `repaired`,
  1 `accept` (`def-positive-braid-monoid`, never edited). Re-run
  `check --run frontier-35-ten-categories --phase final` at close: none of the
  28 ids appears in the open-work list (the run-wide phase stays open only for
  other groups' pairs, e.g. `type-a-soergel-bimodules-and-hecke-categorification`).
- **Dispatch report written:**
  `research/frontier-35-ten-categories-step3b-pair-garside-structure-normal-forms-and-the-center.md`
  (430 lines): scope/receipts, scaffold audit and repairs, conventions, axiom
  policy, machine verification, the full list of checks actually run, local
  supplier, published concerns with exact ids/evidence/confidence, and the open
  obligations (pre-splice plan rows 741/742; missing Birman--Brendle §5.3
  out-of-scope coverage row; the confirmed Coxeter-presentation defect and its
  downstream review candidate; BG-3/BG-6 seam; accepted advisories).
- **Independent re-verification on the frozen bytes (this close):** batch rows
  741/742 carry exactly `id/kind/title/strategy/deps` with 24+4 items matching
  `/tmp/b15ids.txt`; precheck 24/0; rendercheck 30 files OK; proof-contract
  `--strict` 0 errors / 2 advisory warnings, 42/42; content-policy 0/0;
  manifest-deps 0 errors; coverage-checklist 0 errors / 1 accepted warning;
  citation-fidelity no quote-not-found and no widening; validate-plan OK plus
  the 431-page NOTE; cross-batch input file `[]`. Source conventions re-read at
  Dehornoy Definition 4.21 / Lemma 4.32 / Example 4.22 / Example 4.11 in
  `/tmp/deh.txt`, and the two oracles in `/tmp/gv/` re-run clean (the five-step
  Example 4.22 terminal pair `(σ3σ2σ1, σ1σ2σ3)`, and the theta-cube condition
  with 0 failures over all letter triples of `B_6`; the checker's debug print
  merely labels the two step-2.6 claims in swapped order — both printed values
  occur verbatim in step 2.6).
- **Published concerns re-confirmed by direct read (not inherited):**
  `thm-the-symmetric-group-has-the-coxeter-presentation` step 1.1 is the
  external citation [F1] (Muger, Section 4) of the target statement, and its
  declared deps are unused — confirmed defect, unchanged; `thm-the-braid-group-
  surjects-onto-the-symmetric-group` [L3] cites that item for the direct finite
  check that adjacent transpositions satisfy the Coxeter relations — suspicion
  only, conclusion sound. Neither is in this pair's closure and neither was
  edited.
- **Next action: none.** Nothing further for this pair until Step 4 splices rows
  741/742 into `plan-spec.json` and the serial reconciler folds the published
  concerns and the §5.3 coverage row in; the 28 receipts are closed against the
  current bytes.
