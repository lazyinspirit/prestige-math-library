# Step 3b authoring report — A/B pair `affine-reflections-coroot-translations-and-alcoves`

Run: frontier-42-coxeter-32 · role: alpha-high · batch 24 · design label CG-19 · orders 1764/1765
A page: `affine-reflections-coroot-translations-and-alcoves` (7 items)
B page: `affine-reflections-coroot-translations-and-alcoves-examples` (4 items)

## Owned IDs and dispatch order

| level | item | page | status |
|---|---|---|---|
| 0 | def-cg-affine-root-hyperplane-reflection-and-alcove | A | authored; accept recorded |
| 1 | lem-cg-affine-reflection-identities-and-local-finiteness | A | authored; repaired decision recorded; one-shot proof-layout report noted below |
| 2 | lem-cg-highest-root-and-fundamental-alcove | A | authored; repaired decision recorded |
| 2 | ex-cg-root-versus-coroot-translation-lattices | B | authored; repaired decision recorded; relevelled from 3 to 2 after removing an unused dependency |
| 3 | lem-cg-affine-alcove-separation-and-facet-types | A | authored; repaired decision recorded |
| 4 | ex-cg-a1-affine-line-alcoves-and-translations | B | authored; repaired decision recorded |
| 10 | lem-cg-affine-point-stabilizers-and-vertex-residues | A | authored; prior escalation is stale after dependency repairs; owner decision required |
| 11 | lem-cg-affine-generic-gallery-paths-and-disk-moves | A | authored; escalated for draft Coxeter and residue suppliers |
| 12 | thm-cg-affine-alcove-transitivity-presentation-and-length | A | authored; escalated for item 7, draft Coxeter, and open page prerequisites |
| 13 | ex-cg-a2-and-b2-alcove-shapes-and-corner-data | B | authored; escalated for vertex-residue and affine-presentation suppliers |
| 13 | ex-cg-extended-affine-weyl-group-and-alcove-stabilizers | B | authored; escalated for the affine-presentation supplier |

The root-versus-coroot example's level changed when its unused `def-full-euclidean-lattice-and-covolume` dependency was removed. The recomputed order places it after level 2 item `lem-cg-highest-root-and-fundamental-alcove` and before level 3 `lem-cg-affine-alcove-separation-and-facet-types`; its proof uses only items 0–1 and published suppliers, so it does not rely on a later item.

## Bounded authoring continuation — 2026-10-08

This continuation rechecks the stable failed-output recovery for the current
`alpha-high` assignment. It does not change the immutable failed native-dispatch
receipt, claim native-author success, or certify the run-wide Step-3 snapshot.
The current run status remains paused with other author work in flight, so no
Step-3 gate or stage transition is attempted here.

### Entry inventory and open obligations

Owned IDs, in the dispatch order above: `def-cg-affine-root-hyperplane-reflection-and-alcove`,
`lem-cg-affine-reflection-identities-and-local-finiteness`,
`lem-cg-highest-root-and-fundamental-alcove`,
`ex-cg-root-versus-coroot-translation-lattices`,
`lem-cg-affine-alcove-separation-and-facet-types`,
`ex-cg-a1-affine-line-alcoves-and-translations`,
`lem-cg-affine-point-stabilizers-and-vertex-residues`,
`lem-cg-affine-generic-gallery-paths-and-disk-moves`,
`thm-cg-affine-alcove-transitivity-presentation-and-length`,
`ex-cg-a2-and-b2-alcove-shapes-and-corner-data`, and
`ex-cg-extended-affine-weyl-group-and-alcove-stabilizers`.

At entry, the current batch-24 dependency input has four open item edges: point
stabilizers to `def-hh-coxeter-matrix-word-group-and-length` and
`lem-cg-integer-pairings-and-allowed-dihedral-labels`; gallery/disk moves to
`def-hh-coxeter-matrix-word-group-and-length`; and the affine presentation
theorem to that same Coxeter definition. The A-page also has open `requires`
edges to batch 21 `crystallographic-root-lattices-and-weyl-group-interfaces`
and batch 4 `real-forms-and-reflection-geometry`. The named repair report records
the exact proof uses and earlier local supplier reviews; this continuation must
recheck each current supplier and consuming use before closing a row. The prior
scope/authoring report and repair report are history, not current item decisions.

### Checkpoint 0 — `def-cg-affine-root-hyperplane-reflection-and-alcove`

- Reloaded the current definition and its exact 16 declared published suppliers.
  Their interfaces match the finite reduced crystallographic root system,
  coroot, Weyl action, lattices, induced Euclidean metric, subgroup, semidirect
  product, isometry, and alcove-topology conventions used in the Definition.
- The current statement retains `H_{α,k}={x:B(x,α)=k}` and
  `r_{α,k}(x)=x-(B(x,α)-k)α∨`; its direct calculations establish the
  hyperplanes and Weyl action. It expressly leaves local finiteness, the affine
  group identity, simplex/fundamental-domain claims, and non-crystallographic
  cases to other scope. No Choice use or missing published prerequisite was
  found. No item edit was needed.
- Explicit current-file precheck: `not-applicable` (definition; 1 file, 0 proof
  sections checked, 0 failures). Explicit current-file rendercheck: pass (1
  checked, 0 errors, 0 warnings).
- The declared `justified_by` obligation is still pending this continuation's
  later dependency-ordered check of item 1, proof step 2.2. Therefore item 0's
  final item decision remains open until that exact isometry use is verified.
  Batch content policy, strict contracts, dependency levels, plan validation,
  and the required final proof-layout command remain pending for the full pair.
- Next: recheck and checkpoint item 1 before opening item 2.

## Open obligations at entry

1. **In-run suppliers not yet authored on disk (must be flagged, not hidden).** Batch 2 (page
   `coxeter-presentations-exchange-and-reduced-word-theorems`): `def-hh-coxeter-matrix-word-group-and-length`
   (draft on disk at entry), `lem-hh-dihedral-root-recurrence-and-root-sign` (draft), 
   `thm-hh-coxeter-exchange-deletion-and-faithfulness` (draft), `thm-hh-matsumoto-reduced-word-theorem` (draft),
   `thm-hh-parabolic-minimal-representatives-and-length-additivity` (**absent**). Batch 21 (page
   `crystallographic-root-lattices-and-weyl-group-interfaces`): `lem-cg-integer-pairings-and-allowed-dihedral-labels`
   (draft on disk), `thm-cg-crystallographic-finite-type-and-lattice-stability` (**absent**). Consuming items and
   steps are listed per item below; the consumers are authored and their Step-3 item decisions stay escalated
   until the suppliers and the actual proof uses are reconciled.
2. **Scaffold repairs found in audit (carried out while authoring).**
   a. The separation lemma's type-map clause as scaffolded asserts *existence* of `g` with `C=g(A)` for every
      alcove, which is the later transitivity theorem's content; restated on the orbit `W_a·A` (well posed at
      level 3), with the global extension moved to the transitivity theorem.
   b. The point-stabilizer lemma as scaffolded says "exactly two walls through `v` implies the walls meet
      orthogonally" with a sketch that does not prove it; a complete proof is supplied, via the local root system
      `R_v = {σ∈Φ : B(v,σ)∈Z}` (a reduced crystallographic root system) whose rank is the number of local
      facets.
   c. The gallery lemma's strategy cites "the same finite bad-set avoidance as in A2(3)", which states no such
      lemma; the avoidance is proved locally (finite-union of proper affine subspaces, published supplier).
   d. Plan §CG-19 deliberately declines the loop-model comparison; the Perrin coverage row re-pointing is a
      coverage-record matter for Step 4, reported, not edited here.
3. **Choice.** The pair is choice-free: no item declares `def-axiom-of-choice`; the only choice-like step is
   finite bad-set avoidance over a finite union of proper affine subspaces, which is the published
   finite-union lemma (no AC).

**Current prerequisite-pair recheck.** The page-level `requires` edges to batch 4
`real-forms-and-reflection-geometry` and batch 21
`crystallographic-root-lattices-and-weyl-group-interfaces` remain open in the batch-24 dependency
input. Both current A-page carriers and manifests were inspected. The six batch-4 items and three
batch-21 items are on disk as `draft`; the batch-21 finite-type theorem that was absent at entry is
now present as a draft. No batch-4 or batch-21 item is a direct dependency of items 0–1, and the
lemma-1 “style” citation to batch-4 `lem-cg-dual-action-and-chamber-faces-exist` was removed from
the authored proof route. Keep both page edges open until their authored interfaces and the actual
uses in later owned items are reconciled. No sibling carrier was edited.

## Checkpoints

(updated per item as authoring proceeds)

### 0. `def-cg-affine-root-hyperplane-reflection-and-alcove`

- **Claim/conventions authored:** supplied finite-dimensional real reduced crystallographic
  root system; walls `H_{α,k}={x:B(x,α)=k}`; reflection maps
  `r_{α,k}(x)=x−(B(x,α)−k)α∨`; alcoves as connected components; `W_a`, coroot translations,
  and the explicit external product `Q∨⋊W`. The item makes no semidirect-product identity,
  local-finiteness, simplex, or fundamental-alcove claim. The Weyl action on `Q∨` is verified
  inline: roots are permuted, orthogonality gives `w(α∨)=(wα)∨`, and restrictions compose as
  automorphisms. The Euclidean metric is explicitly the one induced by the inner-product norm.
- **Authoring repairs:** the original manifest omitted the design-mandated well-definedness
  justifier and said both `W_a≤Isom(E)` and that the reflections were not asserted isometries.
  The file now assigns `lem-cg-affine-reflection-identities-and-local-finiteness` as
  `justified_by`; its proof use is now verified in that lemma's step 2.2, which proves every
  generator is a Euclidean isometry. The original dependency
  list also included unused `def-algebraic-dual-and-linear-functional`, `def-compact-space`,
  and `def-linear-basis`; those were removed. The exact definition of a semidirect-product
  action required `def-action-by-automorphisms`, and the Euclidean isometry group required the
  published chain `def-inner-product-norm`, `cor-inner-product-induces-a-norm`, and
  `def-norm-and-normed-space`; these suppliers were added. All are published. No new prerequisite
  item is needed. Item metadata and batch-24 manifest both record `dependency_level: 0`.
- **Source review:** Morgan, *Lecture XII*, §1.1 Definition 1.1 and Claim 2.3 (complete 7-page
  lecture opened; source uses levels `α=2πk`, and its affine-root parameter is retained only as a
  normalization comparison); Magyar, §1.4 (type-A example; sign differs and is recorded); Perrin,
  §12.2.3 Definition 12.2.17 (untwisted Kac–Moody terminology only); Davis, §6.8 (Euclidean
  simplex/reflection-group context only). None is used as a proof supplier. Exact locators and
  qualifications are in the item source metadata. The relevant local suppliers were checked:
  the reduced-root-system, coroot, Weyl-group, root/coroot-lattice, positive-system, inner-product,
  inner-product-norm, norm-to-metric, generated-subgroup, action-by-automorphisms, semidirect-product,
  isometry, connected-component, and subspace-topology items are published and match their uses.
- **Dependencies/choice:** 16 direct published inputs listed in the item and manifest; no in-run
  `deps`. The `justified_by` supplier is `lem-cg-affine-reflection-identities-and-local-finiteness`,
  consumer `def-cg-affine-root-hyperplane-reflection-and-alcove`, consuming clause “`W_a` is a
  subgroup of `Isom(E)` generated by the `r_{α,k}`”; the actual proof use is lemma step 2.2. The
  mathematical obligation is reconciled; no item decision is recorded until the stable batch pass.
  No Choice principle is used.
- **Checks/decision:** explicit-path `precheck` returned `not-applicable` (definition, 1 file,
  0 proof sections checked, 0 failures); explicit-path `rendercheck` returned 1 checked, 0 errors,
  0 warnings. A local comparison confirmed that the manifest Statement, deps and level match the
  item file. No item decision has been recorded; `content-policy`, strict contracts and dependency
  levels remain batch checks after authoring. The Step-3a `sufficient` receipt was refreshed for the
  current item interface at `research/frontier-42-coxeter-32-step3a-review-affine-reflections-coroot-translations-and-alcoves.json`.
  One invalid `rendercheck --help` probe was interrupted after it invoked the unscoped renderer;
  one invalid `content-policy --help` probe returned an unscoped-usage error. Neither is counted
  as a check result. The justifier is reconciled in lemma step 2.2. Batch item decisions and the
  stable-content gates remain open.

### 1. `lem-cg-affine-reflection-identities-and-local-finiteness`

- **Claim/conventions authored:** the translation identity
  `r_{α,k}=t_{kα∨}∘s_α`, involution and fixed wall; the wall-image formula with the root-pairing
  convention `H_{α,k}={x:B(x,α)=k}`; preservation of walls and alcoves; local finiteness, closed
  union, open convex alcoves and local finiteness of alcoves; the simple-coroot translations and
  `W_a=Q∨⋊W` with unique Euclidean decomposition. Degenerate rank zero, empty `Φ`, empty compact
  `K`, `k=0`, and arbitrary positive/negative integer levels are included by the argument.
- **Scaffold repair:** part (1)'s displayed expansion incorrectly used
  `B(x,α∨)α∨`; direct substitution gives `B(x,α)α∨`. The authored statement and proof use the
  corrected formula. This preserves the claimed translation form and all downstream conclusions.
  The uniqueness proof is completed by comparing distances to every point of the fixed wall.
- **Source audit:** Morgan §1.1, Claim 2.3, Lemma 2.1 and Corollary 2.2; Lewis–McCammond–Petersen–Schwer
  §1.3 Definitions 1.9–1.11 and Remark 1.12; Magyar §1.4; Davis §6.8; Perrin §12.2.3. Morgan's
  Corollary 2.2 proof asserts that `r` walls give at most `2r` local chambers. This is a confirmed
  source error: the `A3` braid arrangement has six walls through the origin and 24 chambers, so
  `24>2·6`. The local proof does not use that bound; for `N` walls it distinguishes at most `2^N`
  sign vectors. The other sources are used only for conventions and comparison; no source is used
  as a proof supplier.
- **Dependencies/level/choice:** `def-cg-affine-root-hyperplane-reflection-and-alcove` is the only
  in-run item dependency, at level 0; all other declared inputs are published. The resulting
  level is 1 in both item metadata and the batch-24 manifest. No AC is used; the compact-cover
  argument takes a finite subcover, and all other lists are finite.
- **Checks/decision:** explicit-path `precheck` initially proposed a canonical proof-step ordering;
  that repair was adopted, and the next explicit-path run passed (1 checked, 0 failed). Explicit-path
  `rendercheck` passed (1 checked, 0 errors, 0 warnings). Manifest statement/dependency/level
  comparison passed; A-page order now lists item 0 before item 1. Content policy, strict contracts,
  dependency levels, plan validation, and item decisions remain for the stable batch pass. Next:
  audit and author level-3 `lem-cg-affine-alcove-separation-and-facet-types` from its exact suppliers.

### 2. `lem-cg-highest-root-and-fundamental-alcove`

- **Claim/conventions authored:** for every nonempty irreducible component $\Phi_i$, its highest
  root $\theta_i$ has strictly positive simple-root coefficients, is dominant against each
  $\gamma\in\Phi_i^+$, and bounds the pairings $0<B(x,\gamma)\le B(x,\theta_i)$ for $x$ in the
  global fundamental chamber. The inequality is explicitly componentwise. In coordinates
  $u_s=n_{i,s}B(x,\alpha_s)$, the component region is $u_s>0$, $\sum_su_s<1$; its closure is
  the standard simplex, with exactly the simple-root walls and the highest-root wall as facets.
  The full alcove is the finite product of component regions. The empty root system is treated
  as the singleton alcove in $E=0$; rank-one $A_1$ factors are treated factorwise.
- **Scaffold repairs:** the old part-(1) bound quantified over all global positive roots while
  allowing $\theta$ to belong to just one reducible component; that claim is false across other
  factors. Replaced it with exact componentwise quantifiers. Clarified that a product of $A_1$
  factors means a factorwise product and supplied the omitted empty-system case, which has no
  highest root. The statement's note that transitivity is proved by item 8 now uses the exact
  item ID as plain text rather than a same-page forward wikilink; it is a scope note, not a
  dependency of this level-2 lemma.
- **Source review:** the complete published proof of
  `prop-highest-root-exists-and-is-unique-in-an-irreducible-finite-root-system` was read and
  checked for existence, uniqueness, and dominance. Its Statement is the local input for those
  claims; full support is proved here using the published connected-Dynkin-diagram proposition
  and nonpositive pairings of distinct simple roots, and the unique maximal root is shown locally
  to be greatest by finiteness of the root order. The complete proofs of
  `prop-irreducibility-corresponds-to-connectedness-of-the-dynkin-diagram` and
  `prop-distinct-simple-roots-have-nonpositive-inner-product` were also read. Knapp, Chapter II
  §12 Problem 8, printed p. 204, asks for highest-root dominance as an exercise but supplies no
  proof; it is recorded only as claim context. Magyar §1.5, PDF p. 4, states the closed
  simplex/fundamental-domain comparison in its type-A loop-group setting; it is not used as a
  general proof. The simplex coordinates, closure, facet count, wall avoidance, and
  connected-component argument are proved locally. Exact qualifications are in the item metadata
  and batch coverage row.
- **Dependencies/level/choice:** 15 direct dependencies, including item 0 and item 1; its
  computed level is 2 in both item metadata and manifest. No missing prerequisite was found.
  Only finite component decompositions and finite coordinate vectors are used; no AC is used.
- **Checks/decision:** the first explicit-path precheck proposed canonical ordering of the proof
  phases; that ordering was adopted, preserving exact supplier-step locators in the Facts block.
  The subsequent explicit-path precheck passed (1 checked, 0 failed), and explicit-path
  `rendercheck` passed (1 checked, 0 errors, 0 warnings). The item statement/dependency/level
  matches its manifest row. The item contract was added to
  `research/frontier-42-coxeter-32-batch-24.proof-contracts.json`; strict item selection passed
  (1 checked, 0 errors, 0 warnings), including boundary worksheets. Content policy, full batch
  strict contracts, dependency-level checks, plan validation, and item decisions remain open until
  the pair is authored. The existing Step-3a sufficient receipt is stale after the corrected
  componentwise statement. The pair scope receipt was refreshed after final statement edits.
  Item 2 remains dependency level 2.

### 3. lem-cg-affine-alcove-separation-and-facet-types

- **Claim/conventions authored:** separation by a facet reflection is exactly its wall, and separation sets obey symmetric difference. The fundamental alcove stabilizer is trivial, with the same result for its interior. The facet-type map assigns a unique group element and type only to alcoves in W_a·A; adjacent panels have the same type from either side, every alcove in the orbit has one facet of each type, and the wall reflection is the corresponding conjugate. Reducible systems use one affine label 0_i for each nonempty irreducible component; the empty system has the empty type set.
- **Scaffold repairs:** the original vertex argument inferred g(0)=0 from the value of B(v,θ), although an affine isometry need not preserve that functional. I replaced that route with finite generic galleries, identification of all affine-wall reflections as conjugates of fundamental-facet reflections, and a shortest-word repeated-wall deletion proof of the stabilizer. The scaffold's single H_0=H_{θ,1} label was also componentized because the previously authored highest-root claim is factorwise for reducible systems. The type-map statement remains restricted to the group orbit as decided at Step 3a. The gallery proof establishes reachability internally as an auxiliary step needed to identify the generating reflections; the item does not widen its stated type-map domain.
- **Source review:** Morgan, Lecture XII §2.4 Proposition 2.4 states the general affine simple-transitivity result but refers to Lecture IX §5.3 for the argument. I read that full finite-Weyl-chamber proof (Lecture IX, PDF pp. 12–13): it uses generic segments to obtain transitivity and repeated-wall deletion for stabilizers. It does not prove the locally finite affine case, which is supplied here. Morgan Lecture XII §2.1 Lemma 2.1 and §2.2 Corollary 2.2 were also rechecked; the asserted 2r bound in Corollary 2.2 is false for the A3 central arrangement (six walls, 24 chambers), and this proof does not use it. Magyar §1.4–1.5, PDF pp. 4–5, distinguishes Q∨ translations from the type-A extended P∨ group and its alcove stabilizer; this is comparison only, not a general proof or lattice-quotient input.
- **Dependencies/level/choice:** eight direct dependencies: items 0–2 and the published finite-union, compact convex hull, finite-dimensional local compactness, compact closed-ball, and Cauchy–Schwarz suppliers. All are complete and the computed dependency level is 3 in both metadata and the manifest. No AC is used; every selection is finite or from one nonempty open set, and the cited local-compactness and compact-ball results are choice-free.
- **Checks/decision:** explicit-path precheck passed (1 checked, 0 failed), explicit-path rendercheck passed (1 checked, 0 errors, 0 warnings), and strict item-contract selection passed (1 checked, 0 errors, 0 warnings), including boundary cases. A local comparison confirmed the Statement, dependencies, and level match the manifest. The A page and its manifest row now include item 3; the proof-contract scope and Morgan Lecture IX coverage record were updated. The item decision, content policy, full batch contract check, dependency-level check, plan validation, and refresh of the stale Step-3a sufficient receipt remain open for the stable pair pass. Next: read the exact suppliers of level-3 example ex-cg-root-versus-coroot-translation-lattices before authoring it.

### 4. ex-cg-root-versus-coroot-translation-lattices

- **Claim/conventions authored:** the standard walls H_(α,k) = {x:B(x,α)=k} have coroot-lattice translations. In A2, α∨=α and Q=Q∨. In the explicit B2 model, Q=Z² and Q∨=Z(e1−e2)+Z(2e2), with index two. A half-open basis parallelogram for Q∨ tiles E and has covolume two versus Q's covolume one. Replacing α by α∨ in the wall normal is the affine arrangement of the dual root system, so its translations are Q. The example also computes that B2/C2 exchange root and coroot lattices while their unoriented Coxeter diagram is the same edge labelled 4.
- **Scaffold repairs:** removed ex-classical-root-systems-in-euclidean-coordinates as a direct supplier because an example-page item cannot carry this example's root data. The A2 and B2 coordinate sets and all root-system axioms are checked locally. Removed the unused highest-root/fundamental-alcove and `def-full-euclidean-lattice-and-covolume` dependencies. The root/coroot index uses the determinant corollary; the covolume convention is defined as basis-parallelogram area and computed locally from determinants. The coroot generators in the Q-basis give the matrix [[1,0],[-1,2]], whose determinant is 2. The choice-free integer-part lemma proves the half-open parallelogram's unique tiling.
- **Source review:** Knapp Chapter II §5 (printed pp. 149–156), specifically (2.43), Figure 2.2, Propositions 2.48–2.49 and (2.50), gives the root-system axioms, classical coordinate models, B2/C2 isomorphism and simple-root data. It does not state the lattice index or covolume calculation; those are local. The earlier source locator calling this “root and coroot lattices” was corrected. Magyar §1.4–1.5 (PDF pp. 4–5) is an SL_n/type-A comparison of Q∨ translations and the extended P∨ group; its affine reflection sign/composition convention differs and it is not used for the B2 computation. Morgan Lecture XII §3.1–3.2 (PDF pp. 4–7) uses walls α=2πk and compact-Lie-group lattices; its coroot-scaled translation vectors match only after the 2π normalization and are context, not a proof supplier.
- **Dependencies/level/choice:** eight direct dependencies: A-page items 0–1 and six published items for the root systems, coroots, lattices, index and integer parts. With no dependency on item 3 or later, its computed level is 2 in metadata and the batch-24 manifest. No Choice is used; the root lists and lattice generators are finite, and the integer-part supplier is choice-free.
- **Checks/decision:** explicit-path precheck passed (1 checked, 0 failed), rendercheck passed (1 checked, 0 errors, 0 warnings), and strict item-contract selection passed (1 checked, 0 errors, 0 warnings), including explicit empty/zero/one inapplicable boundaries and endpoint, reducibility and Choice evidence. A local comparison confirmed that the manifest Statement, dependencies and level match. The B page and its manifest row now include this example, and Knapp/Magyar coverage records were updated. The item decision, content policy, full batch contract check, dependency-level check, plan validation, and stale Step-3a scope refresh remain for the stable pair pass. Next: read the exact suppliers of level-10 `lem-cg-affine-point-stabilizers-and-vertex-residues` before authoring it.

### 5. `ex-cg-a1-affine-line-alcoves-and-translations`

- **Claim/conventions authored:** for $E=\mathbb R$, $\alpha=1$, $\Phi=\{\pm1\}$, the coroot is $2$, $W=\{\pm1\}$, $Q=\mathbb Z$, and $Q^\vee=2\mathbb Z$. Walls are the integers, alcoves are $A_n=(n,n+1)$, and $W_a$ consists exactly of $x\mapsto x+2m$ and $x\mapsto -x+2m$. The fundamental interval is $(0,1)$ with $s_0(x)=-x$ and $s_1(x)=2-x$; these act simply transitively on all intervals, adjacent panel types agree, the presentation is infinite dihedral with $m_{01}=\infty$, and $\ell(g)=|\operatorname{Sep}(A,g(A))|=|n|$ when $g(A)=A_n$. Under the dual-normal convention, walls are $2x=k$ and translations are $Q=\mathbb Z$, with $[Q:Q^\vee]=2$.
- **Scaffold repairs:** removed the example-page dependency `ex-root-system-a-one` and verified the A1 root-system axioms directly in step 1.1, so no B-page result carries root data. Replaced the scaffold's reference to the later transitivity theorem with explicit interval-image and word calculations. The explicit positive/negative formulas $t_{2q}=(s_1s_0)^q$, $t_{-2q}=(s_0s_1)^q$, $t_{2q}s_1$, and $t_{-2q}s_0$ establish the length upper bound for every integer index; separating walls give the matching lower bound.
- **Source review:** Morgan, Lecture XII §1.1 Definition 1.1 and Claim 2.3, §1.2 Theorem 1.2, §2.3, and §3.2 Proposition 3.2 (PDF pp. 1–7) gives the analogous compact-Lie-group chamber action and coroot-scaled translations, with walls normalized as $\alpha=2\pi k$; all A1 calculations here are local. Lewis–McCammond–Petersen–Schwer §1.3 Definitions 1.9–1.11 and Remark 1.12 (PDF pp. 4–5) gives general affine-group and alcove/group context; it treats alcoves as closures and Figure 2 has rank-two examples, not A1 coordinates. The item uses neither source as a proof supplier.
- **Dependencies/level/choice:** eight direct dependencies: items 0–3 plus the published root-system, coroot, Weyl-group, and lattice definitions. The root set, walls, all group elements, galleries, words, and lattice cosets are explicit and finite/integer; no AC is used. The computed dependency level is 4 in both the item metadata and batch-24 manifest.
- **Registration/coverage:** added the A1 example to the B-page list and prose, synchronized its statement/dependencies/sources/level in the manifest, and recorded the A1 calculation in coverage. Morgan's Theorem 1.2 and §2.3 coverage is retained with its $2\pi$ normalization caveat; Lewis Remark 1.12 is recorded as general alcove/group context, not an explicit A1 computation.
- **Checks/decision:** explicit-path `precheck` passed (1 checked, 0 failed); explicit-path `rendercheck` passed (1 checked, 0 errors, 0 warnings); strict item contract passed (1 checked, 0 errors, 0 warnings). The contract records all nine proof steps, exact source excerpts, and empty/zero/one, degenerate, endpoint, Choice, and iff worksheets. Content policy, full batch contracts, dependency-level checks, plan validation, the Step-3a scope refresh, and this item's decision remain open until the pair stabilizes. Next: read the exact suppliers of level-10 `lem-cg-affine-point-stabilizers-and-vertex-residues` before authoring it.

### 6. `lem-cg-affine-point-stabilizers-and-vertex-residues`

- **Claim/conventions authored:** For $v\in E$, the local root subsystem is
  $\Phi_v=\{\alpha\in\Phi:B(v,\alpha)\in\mathbb Z\}$ in its span. The point
  stabilizer is exactly its finite local Weyl group, acts simply transitively on
  local sectors, and fixes the common orthogonal complement. The proof establishes
  local sector-to-incident-alcove correspondence, global alcove reachability by a
  finite generic segment, independence of panel types through $v$, and rank-two
  boundary relations. Affine facet types use
  $J=\bigsqcup_i(\{0_i\}\sqcup S_i)$, with one $0_i$ per nonempty irreducible
  component.
- **Scaffold repairs:** replaced the scaffold's $t(v)\subseteq S$ type universe
  with the earlier proved affine type set $J$; the old $S$ omitted each affine
  facet type $0_i$. Replaced the unsupported claim that the fixed space of the
  stabilizer is exactly $\{v\}$ with the local root-subsystem action, which also
  handles regular points and points on a single wall. Proved the generic gallery
  and local sector-to-alcove correspondence locally, rather than depending on the
  later transitivity theorem. Removed the unused batch-2 exchange/deletion edge
  and the unused exact-order lemma: the geometric local dihedral group supplies
  the actual affine product order, while the abstract boundary word uses only
  the defining Coxeter relator.
- **Source review:** Aguiar–Petersen, *The module of affine descent classes of a
  Weyl group*, §2.2, PDF p. 5, states simple transitivity on affine alcoves and a
  proper-subset description of stabilizers for points in a fundamental-alcove
  closure. The 12-page extended abstract explicitly omits many proofs and assumes
  irreducibility; it is recorded as context only, and no claim is imported. The
  published finite-Weyl chamber theorem and finite-Weyl finiteness proposition
  were read in full; they apply to $\Phi_v$ in its span, including the empty and
  rank-one cases. Batch-21 `lem-cg-integer-pairings-and-allowed-dihedral-labels`
  and batch-2 `def-hh-coxeter-matrix-word-group-and-length` were inspected as
  drafts; their exact remaining uses are recorded below. No published defect was
  found.
- **Dependencies/level/choice:** Direct dependencies are
  `def-cg-affine-root-hyperplane-reflection-and-alcove`,
  `lem-cg-affine-reflection-identities-and-local-finiteness`,
  `lem-cg-highest-root-and-fundamental-alcove`,
  `lem-cg-affine-alcove-separation-and-facet-types`,
  `def-connected-component-and-quasicomponent`,
  `def-isometry-and-metric-embedding`,
  `def-reduced-crystallographic-euclidean-root-system`,
  `def-coroot-and-dual-root-system`, `def-weyl-group-of-a-root-system`,
  `def-open-and-closed-weyl-chambers`,
  `prop-the-weyl-group-is-finite-and-acts-faithfully-on-the-root-system`,
  `thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers`,
  `lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces`,
  `def-inner-product-space`, `def-inner-product-norm`,
  `cor-inner-product-induces-a-norm`, `def-metric-topology`, `def-metric-ball`,
  `thm-cauchy-schwarz-in-an-inner-product-space`, `lem-integer-part`,
  `def-group-homomorphism`, batch-2 `def-hh-coxeter-matrix-word-group-and-length`,
  and batch-21 `lem-cg-integer-pairings-and-allowed-dihedral-labels`. The level
  remains 10 in item metadata and manifest (batch-21 level 9 is the maximum).
  The argument is choice-free: finite wall/root lists and the finite-union lemma
  provide each generic point.
- **Open supplier flags:** batch-21
  `lem-cg-integer-pairings-and-allowed-dihedral-labels` is consumed in item 6,
  proof step 2.2, to restrict a positive-definite crystallographic rank-two label
  to $2,3,4,6$; the supplier remains draft. Batch-2
  `def-hh-coxeter-matrix-word-group-and-length` is consumed in item 6, proof step
  5.1, for the abstract rank-two presentation relation and its quotient use; it
  remains draft. Keep the item decision escalated until both supplier statements
  are authored and their actual proof uses reconciled. The former direct
  `lem-hh-dihedral-root-recurrence-and-root-sign` edge is not used: exact geometric
  order is proved locally. The `thm-hh-coxeter-exchange-deletion-and-faithfulness`
  edge is also not used by this item; sibling edges remain untouched.
- **Checks/decision:** explicit-path `precheck` passed (1 checked, 0 failed);
  explicit-path `rendercheck` passed (1 checked, 0 errors, 0 warnings); strict
  item-contract selection passed (1 checked, 0 errors, 0 warnings), including
  empty, zero, one, degenerate, endpoint, nonempty-choice and both iff worksheets.
  `step3-decisions record-item` recorded `escalate` with all 23 direct dependency
  IDs and the two exact supplier uses above; only the owner can clear it after
  supplier authoring and proof-use reconciliation. Content policy, full batch contracts, dependency
  levels, `validate-plan`, and refresh of the sufficient Step-3a page-scope receipt
  remain for the stable pair pass. Next: recheck the A-page prose, manifest and
  coverage against this completed item, then read the exact suppliers of level-11
  `lem-cg-affine-generic-gallery-paths-and-disk-moves` before authoring it.


### 7. `lem-cg-affine-generic-gallery-paths-and-disk-moves`

- **Claim/conventions authored:** `Q` and `Q∨` are discrete full-rank lattices; every pair of alcoves has a finite generic gallery; closed generic paths cross each wall evenly; generic fixed boundary loops admit a cone filling whose wall preimage has only transverse rank-two multiway vertices and avoids codimension-three strata; and a closed gallery word fixing `A` is trivial in its abstract Coxeter presentation. The presentation uses the actual affine label set `J`, with one `0_i` per nonempty irreducible factor and `m=∞` only for the opposite facets of a rank-one factor.
- **Scaffold repairs:** the original generator list `s_0,...,s_n` was invalid for reducible systems and is replaced by `J`. “Any two points” was restricted to alcove interiors/regular path vertices; arbitrary wall endpoints cannot satisfy transverse endpoint crossings. The disk claim now requires a generic fixed boundary, and codimension-two vertices are the full `2m`-branch rank-two cycles, not double points. Replaced the imported lattice-discreteness lemma with a local dual-basis coordinate bound: on a bounded set the integer coordinates are bounded, so only finitely many lattice points occur. Replaced the van Kampen-boundary dependencies with a local spanning-tree face-collapse proof of the disk boundary word. The item no longer depends on `dirichlets-unit-theorem-regulators-and-s-units` or `small-cancellation-and-dehn-algorithms`; it uses the exact Coxeter presentation and point-residue inputs, with exchange/deletion and Matsumoto removed.
- **Source review:** the published lattice-discreteness and van Kampen-diagram results were inspected, then removed as direct suppliers because the complete coordinate-bound and spanning-tree arguments are now proved locally. Davis, *Geometry and Topology of Coxeter Groups*, §7.3 Proposition 7.3.4 and Lemma 7.3.5 (printed pp. 130–131/PDF pp. 145–146) remains context only; it assumes the Coxeter presentation and is not used to prove this affine presentation. No proof claim is imported from Davis.
- **Dependencies/level/choice:** the item has 17 direct dependencies and level 11, set by item 6. It is choice-free: every bad family is finite, and the finite-union lemma produces generic points. `def-hh-coxeter-matrix-word-group-and-length` remains draft, consumed in the Statement/Fact F8 and steps 1.6, 2.1, and 3.1. Item 6 `lem-cg-affine-point-stabilizers-and-vertex-residues` remains owner-held; its rank-two residue is provisionally consumed in steps 1.5, 1.6, and 2.1. Keep item 7 escalated until both supplier interfaces and actual uses are reconciled.
- **Registration:** the batch-24 manifest now mirrors the 17 direct dependencies and level 11; the eight-step proof contract has exact source excerpts and empty/zero/one/degenerate/endpoint/Choice/iff worksheets. Davis remains a context-only coverage entry. The item uses no B-page examples.
- **Checks:** explicit-path `precheck` passed (1 checked, 0 failed); explicit-path `rendercheck` passed (1 file, 0 errors); strict item contract passed (1/1, 0 errors, 0 warnings). The first content-policy invocation found only the three later dispatch item files not yet authored (`thm-cg-affine-alcove-transitivity-presentation-and-length`, `ex-cg-a2-and-b2-alcove-shapes-and-corner-data`, `ex-cg-extended-affine-weyl-group-and-alcove-stabilizers`); rerun the batch check after completing them. The required final proof-layout command remains deferred until all changed item files are final.
- **Next:** audit exact suppliers for level-16 `thm-cg-affine-alcove-transitivity-presentation-and-length`, beginning with item 7 and item 6 and then the exact batch-2 and batch-21 inputs in its manifest.



### 8. thm-cg-affine-alcove-transitivity-presentation-and-length

- **Claim/conventions authored:** transitivity and generation by the fundamental affine facets, the affine Coxeter presentation and simple transitivity, and the length formula by the number of separating walls. The generator set is the componentwise affine type set J, with the actual product-order matrix and the rank-one m=infinity pair.
- **Scaffold repairs and route:** replaced the single-chain generator labels with J. Removed the draft batch-2 exchange/deletion and parabolic-additivity routes after inspecting them; a separating-wall lower bound and a generic straight-segment upper bound prove length directly. Replaced the draft batch-21 finite-type theorem with published thm-classification-of-irreducible-reduced-crystallographic-root-systems. The page-level batch-21 requirement remains open through item 6 and the page inputs.
- **Open supplier flags:** direct item 7 is consumed in proof steps 1.3, 3.1 and 5.1; its decision remains escalated for the draft Coxeter definition and owner-held item-6 residue uses. The item-6 obligation is provisionally consumed here in steps 3.1 and 5.1 through item 7. Direct batch-2 def-hh-coxeter-matrix-word-group-and-length is consumed in Fact F5 and steps 3.1–3.2. The owner must reconcile these suppliers and actual uses before acceptance.
- **Dependencies/level/Choice:** 20 direct dependencies and computed level 12 (item 7 is level 11). All bad-set selections are finite; no AC is used.
- **Source review/shared prose:** Magyar §1.4–1.5, Morgan Lecture XII Theorem 1.2/Propositions 2.4 and 3.1–3.2, and Lewis–McCammond–Petersen–Schwer §1.3/Remark 1.12 were read as context only with their normalization and existing-presentation qualifications. The A-page ordered-construction prose now describes the local wall-count proof and published finite-type classification; report the shared-prose amendment for Step 4.
- **Checks:** explicit-path precheck passed (1/1, no failures); rendercheck passed (1 file, no errors); strict item contract passed (1/1, no errors or warnings). Full content policy and batch gates await items 9–10. Final proof-layout remains deferred.
- **Next:** author B item ex-cg-a2-and-b2-alcove-shapes-and-corner-data.

### 9. ex-cg-a2-and-b2-alcove-shapes-and-corner-data

- **Claim/conventions authored:** verified the explicit A2 and B2 root models, their componentwise highest-root alcove regions, all three vertices and facet types in each model, the affine Coxeter labels, the A2 corner residue at v1, its alternating 2,0 panel cycle and rank-two circuit, and the two panel types on the same affine wall.
- **Scaffold audit and repairs:** added lem-cg-affine-point-stabilizers-and-vertex-residues as a direct dependency because the statement and step 4.1 use its six-sector/cycle and boundary-word claim. Removed the published-example dependencies ex-classical-root-systems-in-euclidean-coordinates and ex-root-systems-a-two-b-two-and-g-two, plus the unused root/coroot/weight/coweight lattice definition: the A2 and B2 root systems and all root/coroot data are verified locally, and no lattice claim occurs here. The item has eight direct dependencies.
- **Mathematical verification:** the A2 six-root set is the unit hexagon, so its root reflections preserve the set and all Cartan numbers are integral; its coroots are $2\\alpha$ because the roots have squared norm $1$. For B2, short-root reflections flip one coordinate and long-root reflections are signed coordinate permutations; the short/long coroot formulas give all Cartan integers. The positive-root lists establish the stated simple and highest roots. Solving the boundary pairs gives the recorded vertices. Each affine facet-wall pair meets at a displayed vertex; translating that vertex to the origin reduces the product to two line reflections, whose rotation angle gives the stated order. The explicit coroot-pairing products are also listed. No AC is used.
- **Sources:** Knapp, Chapter II §5, equation (2.43), Figure 2.2, Proposition 2.48, and simple-root table (2.50)/Proposition 2.49 (printed pp. 150–156), was read through the coordinate/root-system and simple-root passages. Knapp’s standard A2 roots have squared length $2$, whereas this model has squared length $1$; its root configuration is context only, and the local proof recalculates the affine walls and coordinates. Aguiar–Petersen §2.2 (PDF pp. 4–5) was read through the affine-complex and balanced-coloring passage; it assumes the irreducible affine-Coxeter setup and omits proofs, so it is context only. Lewis–McCammond–Petersen–Schwer §1.3, Definitions 1.9–1.11, Remark 1.12 and Figure 2 (PDF pp. 4–5) was read; its A2/B2 arrangement figures and closed-alcove terminology are context only. No source is used as a proof supplier and no uncertainty remains.
- **Dependencies/level/open supplier flags:** computed level 13 because direct supplier thm-cg-affine-alcove-transitivity-presentation-and-length is level 12; the corrected level is recorded in item and manifest. Direct supplier lem-cg-affine-point-stabilizers-and-vertex-residues is consumed in step 4.1 for the six incident alcoves, alternating local panel labels, and circuit word. Its decision remains escalated for draft def-hh-coxeter-matrix-word-group-and-length (item 6 step 5.1) and draft lem-cg-integer-pairings-and-allowed-dihedral-labels (item 6 step 2.2). Direct supplier thm-cg-affine-alcove-transitivity-presentation-and-length is consumed in Fact F6 and steps 3.1, 4.1 and 5.1 for the affine Coxeter matrix/presentation; its decision remains escalated for item 7 and the draft Coxeter definition. Keep this consumer escalated until these supplier interfaces and actual uses are reconciled. No published concern was identified.
- **Checks/decision:** explicit-path precheck passed (1 checked, 0 failed); explicit-path rendercheck passed (1 file, 0 errors); strict item contract passed (1 checked, 0 errors, 0 warnings). Manifest statement, dependencies and level match the item. Full batch content policy and batch gates are pending the stable pair pass; item decisions await those checks. Final proof-layout remains deferred.
- **Next:** audit B item ex-cg-extended-affine-weyl-group-and-alcove-stabilizers, beginning with its exact in-run and published suppliers.

### 10. ex-cg-extended-affine-weyl-group-and-alcove-stabilizers

- **Claim/conventions authored:** proved in general that the coweight semidirect product preserves the affine arrangement, contains the affine reflection group as a normal finite-index subgroup, and has quotient \(P^\vee/Q^\vee\). Identified that quotient with the fundamental-alcove stabilizer, proved its action on the alcove vertices is faithful, and computed an explicit A2 order-three rotation and stabilizer.
- **Scaffold audit and repairs:** repaired the claim that \(P^\vee/Q^\vee\) acts faithfully on the set of \(W_a\)-orbits of alcoves. Item 8 proves \(W_a\) is transitive on alcoves, so that orbit set is a singleton and cannot support a faithful action when the quotient is nontrivial. The faithful action is instead the stabilizer's action on the vertices of \(\overline A\). Qualified the “not a Coxeter group” claim to cases where \(P^\vee/Q^\vee\ne1\); the groups with trivial quotient equal \(W_a\). Removed the unused direct dependency on item 6, and added the simple-root basis and full-rank integer-index suppliers needed for the general finiteness proof. The item now has 12 direct dependencies.
- **A2 calculation:** for the displayed unit-length root model, \(\alpha_i^\vee=2\alpha_i\). The dual coweights are \(v_1=(1,1/\sqrt3)\) and \(v_2=(0,2/\sqrt3)\); the simple-coroot matrix in this basis is \(\begin{pmatrix}2&-1\\-1&2\end{pmatrix}\), with determinant 3. The coweight \(v_1\) generates the quotient. The extended element \(t_{v_1}s_{\alpha_1}s_{\alpha_2}\) cycles the three vertices \(0,v_1,v_2\) and their facet walls.
- **Source review and repair:** Magyar §1.3–1.5 (PDF pp. 4–6) was read through its coweight/coroot quotient, extended affine group, and explicit type-A stabilizer passages; its hypotheses are type A and it is context only. Vogan's cited URL affineWHO.pdf is an 18-slide deck on alcoves/facets and unitary-representation parameters; it does not contain the extended-stabilizer theorem named in the scaffold locator. Replaced it with Vogan's 23-page BC24HO.pdf, slides titled “Extended affine Weyl group” and “And a nice consequence actually to finish” (PDF pp. 19, 22–23), which state the extended quotient and the stabilizer formula under a complex reductive root-datum hypothesis. Those slides are context only; the item proves the Euclidean claims locally. No source uncertainty remains.
- **Dependencies/level/open supplier flag:** computed level 13 (item 8 is level 12), recorded in item metadata and manifest; order ties item 9 and follows it by B-page order. Direct supplier thm-cg-affine-alcove-transitivity-presentation-and-length is used in Fact F7 and steps 3.1 and 4.1 for alcove transitivity and the affine facet-reflection Coxeter group. Its decision remains escalated because it uses item 7 and draft batch-2 def-hh-coxeter-matrix-word-group-and-length. Item 8's exact uses of item 7 are its Statement and steps 1.3, 3.1, and 5.1; item 7's open uses of owner-held item 6 include its steps 1.5, 1.6, and 2.1, and its open batch-2 Coxeter definition uses include Fact F9 and steps 1.6, 2.1, and 3.1. Item 8 also uses the draft Coxeter definition in Fact F5 and steps 3.1–3.2. Keep item 10 escalated until item 8's suppliers and actual uses are reconciled. No published concern was identified.
- **Choice/checks:** no AC is used; the representative for a fixed quotient class is unique after the transitivity argument. Explicit-path precheck passed (1 checked, 0 failed); explicit-path rendercheck passed (1 file, 0 errors); strict item contract passed (1 checked, 0 errors, 0 warnings). The manifest row matches item statement, dependencies, level, and sources. Full batch content policy and checks are still pending; final proof-layout remains deferred until all changed item files are final.

### Continuation checkpoint 1 — `lem-cg-affine-reflection-identities-and-local-finiteness`

- Re-read the current proof and all 31 exact declared suppliers: item 0 plus 30
  published inputs. The formulas, positive-root coordinates, compactness,
  integer discreteness, metric topology, and component facts match their actual
  uses. Also read the full proofs of the published signed-integral simple-root
  theorem and metric-open-set theorem. No Choice is used.
- Confirmed and repaired three authoring gaps in the current proof: Step 2.3
  now handles the empty root system explicitly; it proves convexity of the
  finite-wall neighborhood from inner-product norm homogeneity and the triangle
  inequality; and Step 1.3 now depends on `thm-metric-open-set-algebra` for the
  openness of metric balls and finite intersections. The new dependency is
  published, so item level remains 1. Its exact ordered dependency list and
  level match the item manifest.
- Step 1.5 verifies the dual root system before using the signed-integral
  theorem and proves the simple coroots are its simple system, a basis, and an
  integral generating set of $Q^\vee$. Step 3.1 now proves directly that
  `Isom(E)` is a group and that each affine reflection is an isometry. This
  discharges item 0's `justified_by` obligation at the current step 3.1; the
  earlier checkpoint's provisional reference to step 2.2 is superseded.
- **Published supplier concerns (not edited here; serial reconciler owns the
  shared ledger).** In `thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates`,
  proof step 2.1 assumes every nontrivial real relation splits into nonempty
  positive and negative coefficient sets, but does not rule out a relation
  with coefficients of only one sign. The statement is sound: pairing such a
  relation with the defining regular vector gives a strictly positive (or
  strictly negative) value. Confidence: 1. Required supplier: the positive
  system's regular-vector clause; repair strategy: record this one-line
  justification in the producer during its owner's reconciliation. The
  published `def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice`
  also asserts that simple coroots form a basis and generate $Q^\vee$ while its
  cited simple-root theorem does not establish the dual-system assertion.
  Confidence: 1. Required supplier: a proof that the coroot set is reduced
  crystallographic with the declared dual simple system; this item supplies
  that complete argument locally in step 1.5. No published Statement is
  changed and no shared-ledger row is edited.
- The external citations in this item remain convention/context only; the
  proof is local. No new external-source reading is claimed in this
  continuation. Explicit current-file precheck passed (1 checked, 0 failed);
  rendercheck passed (1 checked, 0 errors/warnings); strict item contract
  passed (1/1, 0 errors/warnings). Batch content policy, dependency-level,
  plan validation, item decisions, and final pair proof-layout are still
  pending after the remaining current items and pair inputs are reconciled.
- Next: verify the current design/prose and proceed to level-2 item
  `lem-cg-highest-root-and-fundamental-alcove` without re-authoring unchanged
  completed content.

### Continuation checkpoint 2 — `lem-cg-highest-root-and-fundamental-alcove`

- Re-read this current item and the exact interfaces of its direct suppliers,
  including the full published highest-root proposition and its dominance
  argument. The statement retains componentwise highest-root bounds, the
  simplex alcove and its facet walls, reducible products, the empty system,
  rank-one factors, and the explicit non-transitivity boundary.
- Repaired the component proof in step 1.1: projection to each orthogonal
  summand now rules out cancellation of two positive roots outside the target
  component, using positivity against the defining regular vector. Repaired
  step 1.2: if the highest-root support were proper, every zero coefficient
  vertex is orthogonal to the whole nonempty support; the Dynkin graph then
  disconnects, contrary to irreducibility. The previous proof inferred this
  from only one zero vertex and was incomplete.
- Completed step 1.3's topology and geometry: the coordinate functionals are
  continuous by Cauchy–Schwarz; closure membership is approximated explicitly
  by the segment to the interior coordinate vector; the norm bound uses the
  published inner-product norm inequality; and barycentric coordinates identify
  all $|S_i|+1$ facets. Step 2.1 now quantifies only over nonempty component
  sets; the rank-zero full system is handled in step 3.1 without relying on an
  unstated empty-product convention.
- Added direct published dependencies
  `def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention`,
  `def-cartan-matrix-of-a-based-root-system`, and
  `cor-inner-product-induces-a-norm` for the exact graph and norm facts. No new
  item was required. Level remains 2; all 18 current dependencies and their
  order match the manifest. There is no cross-batch item edge for this item.
- No AC is used. The cited Knapp exercise and Magyar type-A passage remain
  context only; the proof uses the local published highest-root proposition.
  No new external-source reading is claimed here. Explicit current-file
  precheck passed (1 checked, 0 failed); rendercheck passed (1 checked, 0
  errors/warnings); strict item contract passed (1/1, 0 errors/warnings).
  Batch content policy, dependency-level check, validate-plan, item decisions,
  and the final pair proof-layout are pending the stable pair pass.
- Next: audit and checkpoint the level-2 B-page item
  `ex-cg-root-versus-coroot-translation-lattices`.

### Continuation checkpoint 3 — `ex-cg-root-versus-coroot-translation-lattices`

- Re-read the current example and its exact suppliers. The explicit A2 and B2
  coordinate sets satisfy the finite, spanning, reflection-invariance,
  crystallographic-integrality and reducedness hypotheses. The B2 coroot
  generators are exactly $e_1-e_2$ and $2e_2$; the index matrix has determinant
  2; the parallelogram area ratio is 2; and the normalized B2/C2 simple-root
  pairs both give product order 4. The floor supplier covers all real
  coordinates, including negative ones, and makes the half-open tiling unique.
- Step 1.3's dual-normal convention now cites item 1's `Remark` for the
  verified fact that $\Phi^\vee$ is a reduced crystallographic root system
  with the same reflections; this is the exact hypothesis needed to apply the
  affine translation lemma to $\Phi^\vee$. The root/coroot lattice equations
  and the finite index and area calculations remain local. The B2 example
  does not rely on item 2 or any later item.
- The example remains choice-free. The current item and manifest both record
  level 2 and the same eight direct dependencies. Explicit current-file
  precheck passed (1 checked, 0 failed); rendercheck passed (1 checked, 0
  errors/warnings); strict item contract passed (1/1, 0 errors/warnings).
  No new item was added. Batch content policy, dependency-level check,
  validate-plan, item decisions, and final pair proof-layout remain pending
  after the stable pair pass.
- Next: audit and checkpoint the level-3 A-page item
  `lem-cg-affine-alcove-separation-and-facet-types`.

### Continuation checkpoint 4 — `lem-cg-affine-alcove-separation-and-facet-types`

- Re-read the current argument and its eight exact suppliers. The claim remains
  restricted to the orbit of the fundamental alcove for the type map; the
  later transitivity theorem is not assumed. The generic finite-wall gallery
  route, local one-wall adjacency, symmetric-difference identity, repeated-wall
  deletion, and componentwise facet labels are supported by the current
  arguments of items 0–2 and the published finite-avoidance, compact-hull,
  local-compactness, compact-ball, and Cauchy–Schwarz suppliers.
- Checked the affine subspace avoidance in steps 1.1, 3.1 and 5.1: each
  forbidden locus is a proper affine subspace of the ambient affine space or
  wall, and only finitely many such loci arise from the compact finite-wall
  hull. The rank-one and zero-dimensional clauses in step 9.1 are separate.
  No AC or missing prerequisite was found. No item edit was needed.
- Current explicit-file precheck passed (1 checked, 0 failed), rendercheck
  passed (1 checked, 0 errors/warnings), and strict item contract passed (1/1,
  0 errors/warnings). Metadata and manifest both record level 3 and the same
  eight dependencies. The external Morgan/Magyar citations remain context only;
  this continuation makes no new external-source-reading claim.
- Batch content policy, run dependency-level check, validate-plan, item
  decisions and final pair proof-layout remain pending after the stable pair
  pass.
- Next: audit and checkpoint level-4 B-page item
  `ex-cg-a1-affine-line-alcoves-and-translations`.

### Continuation checkpoint 5 — `ex-cg-a1-affine-line-alcoves-and-translations`

- Re-read the current A1 example and its exact suppliers. With $\alpha=1$,
  the coroot is $2$, walls are $\mathbb Z$, reflections are $x\mapsto2k-x$,
  and the two generator reflections act on the intervals as stated. The group
  normal forms, trivial fundamental interval stabilizer, separating-wall
  count, infinite-dihedral presentation and root/coroot convention switch are
  all verified by direct coordinate calculations.
- Made the dual-root-system hypothesis explicit: Fact F13 cites item 1's
  current `Remark`, which proves $\Phi^\vee$ is reduced crystallographic and
  has the same reflections; step 5.1 now cites that fact before applying the
  affine translation result to the dual system. This is necessary for the
  general dual-normal clause. No other edit was needed.
- No Choice is used. The item and manifest both retain level 4 and the same
  eight direct dependencies. Explicit current-file precheck passed (1 checked,
  0 failed); rendercheck passed (1 checked, 0 errors/warnings); strict item
  contract passed (1/1, 0 errors/warnings). Batch content policy,
  dependency-level check, validate-plan, item decisions, and final pair
  proof-layout remain pending the stable pair pass.
- Next: audit and checkpoint level-10 A-page item
  `lem-cg-affine-point-stabilizers-and-vertex-residues`.

### Final reconciliation checkpoint — 2026-10-08

- **Item 6 claim and proof route:** for each $v$, the stabilizer in $W_a$ is
  finite, generated by the affine walls through $v$, and acts simply transitively
  on the local sectors; the local root subsystem describes the chambers modulo
  its common fixed space. Two walls through one point are orthogonal. Rank-two
  residues have the crystallographic labels $2,3,4,6$, panel types are
  independent of the incident alcove, and each codimension-two residue gives
  its alternating rank-two boundary word. Re-read the complete current item,
  supplier statements and proof uses. The current proof phases are 1.1–1.5,
  2.1–2.4, 3.1, 4.1–4.2 and 5.1. It explicitly handles the empty root system,
  local finite wall sets and sectors, compact neighborhoods, and finite bad-set
  avoidance. No AC is used.
- **Item 6 additions and open uses:** added published direct suppliers
  `thm-path-connected-implies-connected`,
  `def-affine-subspace-of-a-vector-space`, and `def-path-connected`; item and
  manifest both record 38 dependencies and level 10. Its current Fact F8 and
  proof step 2.4 use draft
  `lem-cg-integer-pairings-and-allowed-dihedral-labels` for the allowed
  positive-definite crystallographic rank-two labels. Its current Statement
  (3), Fact F9 and step 5.1 use draft
  `def-hh-coxeter-matrix-word-group-and-length` for the abstract rank-two
  relator and quotient map. The existing Step-3b receipt records an earlier
  23-dependency version and step 2.2/step 5.1 uses; the engine now reports
  `changed inputs require a current owner decision`. A non-owner attempt to
  refresh it was rejected because an existing escalation is owner-held. No
  receipt was overwritten. This is a precise open owner obligation, not an
  acceptance.
- **Items 7–10 supplier reconciliation:** item 7's draft Coxeter definition
  uses are in its Statement, Fact F8 and steps 1.5, 4.1, 5.1; its item-6
  residue uses are in Fact F5 and steps 1.5, 2.1, 4.1. The transitivity theorem
  uses item 7 in its Statement, Fact F4 and steps 1.3, 3.1, 5.1, and uses the
  draft Coxeter definition in Fact F5 and steps 3.1–3.2. Example 9 uses item 6
  in Fact F7/step 4.1 and the theorem in Fact F6/steps 3.1, 4.1, 5.1. Example
  10 uses the theorem in Fact F7/steps 3.1, 4.1. Their actual consumers are
  recorded in the current item Remarks and all four decisions were recorded as
  `escalate`, confidence 1, with the exact direct dependencies. Keep each
  escalated until supplier statements and uses are reconciled.
- **Other published prerequisites added/selected during repairs:** item 0 now
  directly names `def-action-by-automorphisms`, `def-inner-product-norm`,
  `cor-inner-product-induces-a-norm`, and `def-norm-and-normed-space`; item 1
  adds `thm-metric-open-set-algebra`; item 2 adds
  `def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention`,
  `def-cartan-matrix-of-a-based-root-system`, and
  `cor-inner-product-induces-a-norm`. The transitivity theorem replaces the
  draft finite-type supplier with published
  `thm-classification-of-irreducible-reduced-crystallographic-root-systems`
  and uses published basis, dimension, simplex and Cauchy–Schwarz suppliers for
  its local wall-count proof. Example 10 adds the published simple-root basis
  theorem and full-rank integer-index determinant corollary. Item dependencies,
  levels and manifests match; no new item was needed.
- **Current supplier dependencies across batches:** the six open batch-24
  input rows remain: item 6 to the batch-2 Coxeter definition (step 5.1), item
  6 to the batch-21 allowed-label lemma (step 2.4), item 7 to the batch-2
  definition (Statement/Fact F8 and steps 1.5, 4.1, 5.1), and the transitivity
  theorem to that definition (Fact F5 and steps 3.1–3.2). The A-page's batch-21
  prerequisite remains open at item 6 Fact F8/step 2.4; the theorem no longer
  uses the draft batch-21 finite-type theorem after the published classification
  replacement. The A-page's batch-4
  `real-forms-and-reflection-geometry` edge remains page-level and owner-held;
  no item-level batch-4 dependency is declared. The dependency ledger was
  refreshed and deduplicated without altering sibling inputs.
- **Pages and scope:** re-read both current shared pages; the authored claims
  align with their prose, and no further page edit was made. The A-page
  ordered-construction prose now describes the local wall-count proof and the
  published finite-type classification; report that shared-prose amendment for
  Step 4. Step-3a scope check reports no outstanding scope work on this pair.
  `validate-plan research/plan-spec.json` remains pre-splice and page-only: no
  selected item inventories, zero hard errors, and seven existing
  `redundant-prereq` warnings. Page order is consistent; preserve the open
  page prerequisites for Step 4 rather than hiding them.
- **Sources and published concerns:** read Perrin §12.2.3, Theorem 12.2.19 and
  its complete proof in the cited PDF (the coroot-translation affine group is
  $W\ltimes Q^\vee$, with the stated simple-generator images); it is recorded
  as convention/comparison context only, and its coverage row is marked
  context-only/out-of-scope. No unresolved source uncertainty remains. Keep
  the three published concerns above in this report for the serial reconciler:
  the signed-integral simple-root theorem's unproved sign split, the root/coroot
  lattice definition's unsupported coroot-basis clause, and Morgan Lecture XII
  Corollary 2.2's false local chamber bound (A3: six walls, 24 chambers, while
  $2r=12$). Exact IDs, evidence, confidence and remedies are in the earlier
  concern entries; no published item or shared ledger was edited here.
- **Checks after final authoring:** explicit-path precheck: 10 proof-bearing
  items checked, 0 failing (definition item 0 is not applicable). Explicit
  rendercheck: all 11 items plus both pages, 13 files, clean. Batch content
  policy: 11 scoped items, 0 errors/warnings. Strict proof contracts: 10/10,
  0 errors/warnings. Citation fidelity: 211 citations, no missing quotes or
  widening candidates. Coverage checklist: two pages, 51 harvested results,
  0 errors and one low-yield warning (A page 7/41). Source-fetch: 13/13
  resolved; source-backing: all 8 authored results source-backed. Manifest
  dependency check: 11 items, 0 errors. Scoped dependency, forward-reference,
  external-reference, pathway and prose checks passed; no recorded-but-unproved
  dependencies. Cross-batch dependency source check reports 198 external
  dependencies: 157 published, 41 draft-page and 0 unresolved.
- **Run-wide checks and plan mismatch:** dependency-level check still reports
  two unrelated metadata errors: `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion`
  (metadata 11, computed 10) and
  `thm-cg-compact-local-cat-one-short-circle-criterion` (metadata 12, computed
  11). The assigned 11 items' metadata, manifests and computed levels agree:
  0, 1, 2, 2, 3, 4, 10, 11, 12, 13, 13. The run-wide final Step-3 check has
  other pairs/items open; within this pair the only current owner work is item
  6's stale escalation receipt described above. Final read-only autopilot
  status still reports PAUSED at 31/32, missing this pair, with nothing in
  flight. The recorded blockers are the malformed exclusive-cohort JSON, the
  alpha-high dispatch's unknown `gpt-6-luna-xhigh` profile, and an invalid
  `\l` escape in another task's planning input. This report does not change run
  state or claim native author success.
- **Proof layout (single required invocation):**
  `node tools/proof-layout.mjs` was run once for all 11 owned item paths and
  reported 11 items, 90 source steps, and two defects in item 1: the source
  inventory included step 3.2 but the paragraph inventory did not, and the
  rendered rows therefore mismatched. On the current-file re-read, step 3.2 is
  a plain-labeled paragraph preceded by a blank line; targeted precheck, render
  and strict-contract checks pass. Per the explicit once-only instruction, the
  layout command was not rerun, so its recorded output remains a failure and
  is reported as such rather than presented as a passing receipt.
- **Item decisions:** `accept` recorded for item 0; `repaired` recorded for
  items 1–5; `escalate` recorded for items 7–10, each with confidence 1 and
  examined direct dependency IDs. Item 6 already had an owner-held escalation;
  the current author could not refresh it after the dependency changes. No
  `--owner` option was used, and no escalation was cleared.
- **Invalid probes not counted as checks:** two early targeted commands used
  unsupported argument forms (`precheck --items` and proof-contract `check`);
  a `content-policy --help` probe also returned usage error. Corrected explicit
  invocations passed as reported above; these probes changed no files.
