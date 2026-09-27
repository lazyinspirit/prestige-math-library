# Step 3b — pair `simple-homotopy-whitehead-groups-and-torsion`

Run `frontier-35-ten-categories`, role `alpha-high`, dispatch label
`step3b-pair-simple-homotopy-whitehead-groups-and-torsion-121f12e9f5b1d6a0`.
Owned pair: A page `simple-homotopy-whitehead-groups-and-torsion` (27 items) and
B page `simple-homotopy-whitehead-groups-and-torsion-examples` (4 items), both
in batch 2 (`research/frontier-35-ten-categories-batch-2.pages.json`). No sibling
pair in batch 2; nothing outside this pair is edited.

## State at start of this dispatch

31 scaffolded items (Step 1 `ready` 31/31, Step 3a scope decision `sufficient`,
scope phase `closed: true`). 22 items already carried authored bodies before this
dispatch; 9 items had no file: the seven A items
`lem-cell-trading-reduces-a-finite-relative-equivalence-to-two-high-cell-degrees`,
`lem-two-relative-cell-layers-have-free-group-ring-homotopy-bases`,
`lem-cell-slides-and-stabilizations-realize-elementary-group-ring-matrices`,
`lem-an-identity-relative-boundary-matrix-allows-cell-cancellation`,
`lem-zero-torsion-is-realized-by-elementary-expansions-collapses-and-cellular-basis-moves`,
`lem-every-whitehead-class-is-realized-by-a-finite-cw-homotopy-equivalence`,
`thm-a-finite-cw-homotopy-equivalence-is-simple-if-and-only-if-its-whitehead-torsion-vanishes`
and the two B items `ex-the-whitehead-group-of-the-trivial-group-is-zero`,
`cex-ordinary-acyclicity-forgets-basis-and-group-ring-torsion`. Both page files
were missing. Nine `scope-item-missing` findings from `content-policy` were
exactly these nine items.

## Conventions used in this pair

- Right `R = Z[π₁]`-modules with column coordinates, matrices acting on the left;
  the deck action is `c·g = T_g^{-1}c`.
- `Wh(π) = K₁(Z[π])/⟨[±g]⟩`, additive notation, parity sign `(−1)^{q+1}` in the
  two-term contraction torsion `[u]`.
- Torsion of a relative inclusion `L ⊂ K` is the torsion of the homotopy
  equivalence `L → K` in `Wh(π₁K)`; all transport statements are of the form
  `τ(i′) = f_*τ(i)` for the homotopy equivalence `f: K → K′` induced by a formal
  deformation fixing `L`.
- No item in this pair declares or uses AC. Every cited supplier clause used is
  the choice-free one (finite CW source for cellular approximation, finite clause
  of the Whitehead theorem, choice-free relative Hurewicz comparison).

## Per-item checkpoints

Order of work: 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9. Each entry lists the item ID,
its exact claim, the source locators used, dependencies actually consumed,
decision, checks, and any open gap. `(new)` marks an item authored in this
dispatch.

### 1. `lem-cell-trading-reduces-a-finite-relative-equivalence-to-two-high-cell-degrees` (new)

- Claim preserved: a finite relative homotopy equivalence of finite connected CW
  complexes is carried, by finitely many elementary expansions and collapses
  relative to `L`, to a pair whose relative cells lie in two adjacent degrees
  `n,n+1`, `n >= 3`, with the deformation respecting the homotopy class and
  transporting the relative torsion.
- Sources: Casson Ch. 4 Lemma 4.8 and the proof of Thm 4.7 (pp.32-34, `/tmp/casson.txt`
  3214-3390, read in full); Cohen §§7.3-7.4 cited through Casson/Lück; Davis-Kirk
  Thm 11.31(3) as an independent statement.
- Local repair: the draft had lost its `## Proof` heading (adopted repair block);
  restored, and two wording defects fixed (the complex named in step 7.1 and the
  self-reference in 9.1). Precheck PASS afterwards.
- Dependencies actually consumed: `thm-long-exact-sequence-of-relative-homotopy-groups`,
  `thm-cellular-approximation-for-maps-of-cw-pairs` (finite choice-free clause),
  `lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts`,
  `prop-relative-cw-inclusions-are-cofibrations`, `def-simple-homotopy-equivalence`,
  `thm-simple-homotopy-equivalences-have-zero-whitehead-torsion`,
  `thm-composition-and-sum-formulas-for-whitehead-torsion`,
  `lem-the-target-inclusion-in-a-cellular-mapping-cylinder-is-simple`,
  `def-elementary-expansion-and-collapse-of-finite-cw-complexes`.
- Checks: `precheck` PASS; proof contract written and `proof-contract --strict`
  0 errors / 0 warnings. Step layering 1.1-17.1; 10 facts, 18 steps.
- Open gaps: none. The three degree-0/1 removals are recorded in the boundary
  worksheet (steps 2.1, 2.2, 14.1).

### 2. `lem-two-relative-cell-layers-have-free-group-ring-homotopy-bases` (new)

- Claim preserved: `pi_n(K_n,L)` and `pi_{n+1}(K,K_n)` are finite free right
  `R = Z[pi_1 K]`-modules on the chosen oriented characteristic cells up to `±g`;
  the triple boundary is represented by the relative cellular differential
  `d_{n+1}`; if `L -> K` is a homotopy equivalence the boundary is an isomorphism
  and its matrix invertible.
- Sources: Cohen §8.1 and the start of §8.2 (pp.28-30, image-only this session,
  cross-checked); Lück Thm 2.21 sketch pp.37-38; Hatcher Prop 4.21 for the
  choice-free relative Hurewicz input.
- Derivation: universal cover `p: K~ -> K`; `L~ = p^{-1}(L)` proved connected and
  simply connected by monodromy/deck transitivity plus a lifted `D^2`
  null-homotopy; `K~_n` simply connected by the high-cells lemma; the published
  choice-free single-cell-layer lemma applied to `(K~_n, L~)` and `(K~, K~_n)`;
  deck orbits give free `R`-bases; covering isomorphisms on pairs via the five
  lemma; Hurewicz square with the triple boundary computed on disk models; the
  bottom composite identified with `d_{n+1}` by the relative cellular differential
  recipe; homotopy-equivalence case closed by the strong deformation retraction.
- Repair: rewritten so every proof step is a single line (the precheck layer
  repair reorders line-by-line; a display inside a step corrupts the block).
  `precheck` PASS with no repair.
- Checks: proof contract written, `proof-contract --strict` 0 errors / 0 warnings
  (21 citations, 19 derivations, 8 boundary rows).
- Open gaps: none local. Note for Step 4: this item *defines* the right module
  structure on the base-side groups as the transport of the deck action along
  `p_*` (the library has no separate "standard pi_1-action on relative homotopy"
  item); the statement records this explicitly.



## Primary source locators read for this pair

| Source | Locator actually inspected | Used for |
| --- | --- | --- |
| Casson, *Simple Homotopy Theory* | Chapter 4, proof of Theorem 4.7 and Lemma 4.8, printed pp.32–34 (`/tmp/casson.txt` lines 3214–3390) | complete geometric trading argument, cell slides, identity-matrix cancellation |
| Cohen, *A Course in Simple-Homotopy Theory* | §§7.3–8.5, printed pp.25–33 (image-only scan; claims cross-checked against Casson/Lück/Lurie) | structure of trading, two-layer bases, geometric realization of matrix moves |
| Lück, *A Basic Introduction to Surgery Theory* | Lemma 2.18, Definition 2.17, Lemma 2.19, Theorem 2.21, printed pp.34–38 (`/tmp/lueck.txt` lines 3260–3580) | realization of Whitehead classes, zero-torsion ⇒ elementary moves |
| Lurie, *Whitehead Torsion, Part II* | complete Lecture 4, pp.1–4 (`/tmp/frontier35-b2-lurie4.txt`) | Example 7 (`C₅` unit), Example 9, Example 11, Remark 12, Remark 6 |
| Davis–Kirk | Theorem 11.31, pp.343–345 (`/tmp/frontier35-b2-daviskirk.txt` lines 17230–17360) | independent statement of the simple ⟺ zero-torsion equivalence |

## Published concerns and open obligations

(filled at the end of the dispatch; see the report section)

## Owner-held completion after the artifact-incomplete dispatch

The original dispatch result above remains the historical record: it exited
successfully while leaving seven item files and both A/B pages absent. The
following owner repair completed those artifacts; it is not attributed to the
original author result and does not create a substitute dispatch receipt.

- Repaired `lem-cell-trading-reduces-a-finite-relative-equivalence-to-two-high-cell-degrees`.
  Its former step 3.1 falsely confined the *interior* of the trading homotopy
  to $L\cup e^r$; Cohen §7.3, printed pp.25–26, needs only its boundary there.
  The repaired proof keeps the prism interior in $K^{r+1}$, builds the actual
  subcomplex from the boundary data, pushes remaining cells in their CW order,
  and uses Cohen §7.4's fixed finite target degree for termination. It also
  now derives the rel-boundary disk homotopy from the homotopy-group
  isomorphisms rather than treating relative triviality as sufficient by
  definition. Its proof contract was refreshed.
- Repaired `lem-two-relative-cell-layers-have-free-group-ring-homotopy-bases`:
  its old steps 1.2 and 1.4 equated $K_n=L\cup K^{(n)}$ with $K^{(n)}$,
  false when $L$ contains cells above $n$. The cover-side relative skeleton is
  now correctly $\widetilde K_n=\widetilde L\cup\widetilde K^{(n)}$;
  the later relative cellular filtration already used this form. Its step
  5.2 now computes integral homology of the universal-cover pair with the deck
  action, rather than changing coefficients to $R$ a second time. The proof
  contract's step-1.2 and step-5.2 claims and all descendant item decisions
  were refreshed.
- Authored the five remaining A items in dependency order: cell-slide and
  stabilization realization; homotopy-level identity-matrix cancellation;
  zero-torsion relative converse; realization of arbitrary Whitehead classes;
  and the final simple-if-and-only-if-zero theorem. Cohen §§7.1, 7.4, 8.2–8.5
  (printed pp.23, 26–27, 30–33) supplies the geometric moves; Casson Theorem
  4.7 (printed pp.32–34) and Lück Lemma 2.18(2)/Theorem 2.21 (printed
  pp.35–38) independently support the reduction and realization. The slide
  item now explicitly assumes the homotopy-equivalence inclusion needed to
  trivialize lower attaching maps before Cohen's simplified-form argument.
  Right elementary column operations are obtained from geometric row moves
  by $AQ=(AQA^{-1})A$ and normality of $E(R)$; no unsupplied direct upper-cell
  slide is claimed. The identity-matrix lemma first clears other upper
  attaching maps and then obtains a genuine free face.
- Authored both missing B items. Integer Euclidean elementary reduction gives
  $K_1(\mathbb Z)=\{\pm1\}$ and $\operatorname{Wh}(1)=0$. The $C_5$ example
  checks $(1-t^2-t^3)(1-t-t^4)=1$ coefficientwise; determinant on the
  commutative group ring detects a nontrivial Whitehead class. The A-page
  realization lemma supplies the finite non-simple homotopy equivalence.
- Authored both pages with their full 27/4 item inventories, preserving the
  choice-free finite-CW clauses and excluding smooth $s$-cobordism claims.
  Batch-2 manifest changes were limited to the mathematically necessary
  item-23 hypothesis and direct dependencies; no item was dropped.

Validation after the final item edits: targeted precheck passed all nine
touched items; rendercheck passed those nine and both pages; `manifest-deps`
found 31 items and zero errors; `content-policy` found 31 scoped items and zero
errors/warnings; strict proof contracts passed 31/31 with zero errors/warnings.
A current owner scope `proceed` decision and nine current item content
decisions were recorded; the Step-3 final check has no outstanding work for
this pair. All 31 current batch-2 item IDs are present in the immutable
pre-author Step-3 auditor baseline, so these seven late-authored files are
ordinary scaffold items, not auditor-created additions; the V2
auditor-created-item certification rule does not apply to them. The original
result, failed first attempt, scaffold, source coverage, and scope review
remain unchanged. No synthetic dispatch result, baseline, or certificate was
written here.

## Run-wide Step-3 recertification of all 31 baseline items

A subsequent run-wide final check showed 22 previously authored batch-2 items
without current item decisions. The earlier pair-local closure statement above
covered only the nine touched items and was therefore incomplete as a report
of the 31-item pair. A full mathematical reread of the preexisting chain,
cover, torsion and example items led to these additional repairs:

- The stable elementary-subgroup proof now uses the inverse of the second
  block-swap matrix; the unrepaired product was `diag(-Z,-Z^{-1})`, not
  `diag(Z,Z^{-1})`. The noncommutative commutator factorization then holds.
- The parity lemma now has `s²` and its correction terms raising degree, with
  the finite nilpotent inverse and degree-descending triangular order stated
  correctly. Lück §2.2, printed pp.27–28, supplies the parity comparison.
- Universal-cover cellular homology uses integral coefficients and obtains
  the right group-ring module from deck transformations. The whole
  characteristic disk is lifted; an inverse defined only on the open cell
  cannot supply its boundary map. Compatible based lifts and coefficient
  transports are now explicit. The homotopy lemma distinguishes the
  right-linear *deck-twisted endpoint composite* from a deck transformation
  alone, which need not be right-linear for a nonabelian group.
- The lifted-equivalence cone proof now factors the chosen lift through the
  finite cellular mapping cylinder. Both endpoint inclusions are homotopy
  equivalences and strong deformation retracts fixing their own endpoint
  subcomplexes. After relative cellular approximation, their based
  deformation homotopies lift equivariantly over one common deck group; the
  source prism path identifies that group with the target group through
  `f_*`. This gives a genuinely right-linear chain inverse and hence a
  contractible algebraic cone. The torsion definition and independence proof
  now use compatible lifts and treat a change of lifted map as an
  inner-semilinear cone isomorphism, whose basis units vanish in `Wh`.
- The pair torsion formula now takes cones of the actual split cellular-chain
  rows for `(X,A)` and `(Y,B)`, including the preimages of `A` and `B` in the
  chosen universal covers. The former proof had used nonexistent pairs
  `(Y,A)` and `(B,A)`. Component subcomplex chains are induced modules, so
  scalar extension carries their chain equivalences to the ambient ring;
  a corrected chain section proves the relative cone contractible. The
  underlying based exact-sequence lemma also now supplies its two-out-of-three
  chain-splitting argument. Lück Lemma 2.9, printed pp.29–30, is the
  independent algebraic composition source.
- The interval elementary-expansion example now types the inclusion map at
  its actual basepoint `v`, then transports to `w` along the edge. Its relative
  differential remains in degree `1→0`; the two-term example uses right-module
  basis coordinates explicitly.
- An independent final review found one further defect in the cell-trading
  proof: cellular approximation of `C×I` gives
  `G(C^(m)×I) ⊂ C^(m+1)`, not `C^(m)`. The endpoint retraction is first
  cellularized relative to `L`; HEP adjusts the homotopy while fixing its
  bottom and `L×I` side; relative cellular approximation then gives a
  cellular prism and the needed endpoint bound
  `G_1(C^(m)) ⊂ L^(m)`. The later push uses the endpoint bound and that the
  side track lands in `C`. The step-6.1 contract and its transitive receipts
  were refreshed after this repair.

The final batch-2 checks passed: precheck on all 24 proof-bearing items;
rendercheck on all 31 items and both pages; `manifest-deps` on 31 items with
zero errors; `content-policy` on 31 items with zero errors and warnings; and
strict proof contracts on all 31 items with zero errors and warnings. The
owner scope `proceed` decision and all 31 item decisions were recorded against
the final item/dependency hashes. The run-wide
`step3-decisions check --run frontier-35-ten-categories --phase final --json`
returned **zero work rows for this pair** (31 items and its scope decision).
The run as a whole remained open with 195 work rows in other pairs; no
run-wide completion is claimed. The seven late-authored items remain ordinary
immutable-baseline IDs, so no V2 auditor-created-item certificate is owed.

A further independent proof review found two issues after that recertification, and
the final receipts were refreshed once more:

- The cell-trading collar of step 8.1 needs its side track in the target
  $k$-skeleton for a $(k+1)$-cell attachment. The corrected step 6.1 $+1$
  prism bound gives exactly
  $G(\varphi_0(S^{k-1})\times I)\subseteq C^{(k)}$ because
  $\varphi_0(S^{k-1})\subseteq C^{(k-1)}$; step 8.1 now states this use.
- The former cell-slide step 4.1 treated a formal sum of lower relative classes
  as a characteristic disk for an existing lower cell. Cohen's actual move
  (printed pp.31–32) replaces an **upper** attaching map $\varphi_j$ by a
  pinch-and-whisker representative of $[\varphi_j]+[\varphi_i]r$.
  The $i$th upper cell null-homotopes the added term in the subcomplex
  containing every cell except the $j$th upper cell, so the attaching-map
  collar comparison is a finite formal deformation. With upper cells as
  boundary-matrix columns, this directly realizes
  $A\mapsto A(I+E_{ij}r)$. Normality of $E(R)$ and invertibility of $A$ then
  give a finite product of these slides realizing the opposite left action
  $PA=A(A^{-1}PA)$. No pre-existing lower characteristic cell is replaced by
  a formal homotopy sum.
- Item 22's F3 now agrees with its proof and the corrected universal-cover
  definition: the lifted relative cellular chain group is integral homology
  with a deck-induced right $R$-action, never homology with $R$ coefficients
  applied a second time.

The final strict proof contracts were refreshed for the modified steps and
still cover all 31 items with zero errors and warnings. The pair decisions
below are certified against these last content hashes, not the earlier ones.
