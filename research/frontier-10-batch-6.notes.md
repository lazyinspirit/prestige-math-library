# Beta-frontier-10-6 scaffold notes

These notes are the durable step-2 reasoning record for the two batch-6 page pairs. They propose no edits outside the four authorised `research/frontier-10-batch-6.*` artifacts.

## Continuity checkpoint — 2026-08-11, step 2

Disk state verified at the original step-2 checkpoint: the machine scaffold then contained 21 + 6 Ramsey items and 38 + 7 plane-graph items; both A pages were below the 60-item split threshold. The final hidden-lemma pass subsequently added the graph-theoretic bridge definition and bridge–cycle equivalence, so the final plane A count is 40. Alpha's step-3 repair now leaves the Ramsey A page unchanged at 21 items and enlarges only its B companion to 8 items. The coverage harvest still contains two independent Ramsey treatments and four plane-graph treatments, including textbooks on both A pages. The contractible-edge prerequisite is a numbered lemma before the three-connected Kuratowski reduction. The page definition also fixes facial boundary-walk length explicitly, counting a bridge twice.

The audit-facing work after that checkpoint is now complete: every final published dependency was read on disk, the exact-schema proof-contract ledger covers every proof-bearing item, and the proposed pages pass an in-memory splice validation against the live plan. The original step-2 aggregate-wrapper restriction is retained as historical context in the gate section; the three individual gates required for this repair all pass, so it is not a current blocker.

## 1. Page shape, reading order, and split decision

| order | page | kind | item count | decision |
|---:|---|:---:|---:|---|
| 217 | `ramsey-theory` | A | 21 | no split |
| 218 | `ramsey-theory-examples` | B | 8 | companion; two Alpha-required boundary witnesses added |
| 357 | `plane-graphs-euler-and-the-five-colour-theorem` | A | 40 | no split |
| 358 | `plane-graphs-euler-and-the-five-colour-theorem-examples` | B | 7 | companion |

Neither A page approaches 60 items, so no split is proposed. The exact cut question is therefore inapplicable. If later adjudication adds at least 40 Ramsey items or 21 plane-graph items, the page must be split before authoring rather than shortened; nothing harvested here should be dropped merely to stay under the cap.

The Ramsey spine is: notation and the two-colour recursion; explicit finite bounds and `R(3,3)`; uniform finite Ramsey; a choice-free ordered-tree König lemma; infinite Ramsey on `N` and its exact Dedekind-infinite corollary; the compactness proof of the finite theorem; canonical pairs; van der Waerden; and Schur. The B page supplies exact small values, two infinite-sequence applications, sharp failures of the tempting infinite-progression and unrestricted-branching claims, a countercolouring showing why infinite Ramsey requires finitely many colours, and explicit witnesses that all four canonical pair-colouring types occur.

The plane-graph spine is: polygonal topology; faces and facial boundary walks; Euler and its extremal corollaries; Kuratowski–Wagner with the contractible-edge and separation machinery exposed; duality; and the six- then five-colour induction. The B page tests Euler, planarity, dual embedding dependence, Kempe swapping, insufficiency of the edge bound, and the polygonal convention.

## 2. Proposed two-paragraph A-page summaries

### `ramsey-theory`

Ramsey theory turns a finite colouring into unavoidable homogeneous structure. This page develops the arrow notation, proves the finite graph theorem with the explicit binomial bound, computes `R(3,3)=6`, proves the finite uniform-hypergraph theorem, and records the elementary counting lower bound. It then builds König's infinity lemma for ordered finitely branching trees and proves infinite Ramsey on the natural numbers before using that theorem as a second, compactness-style route back to the finite result.

The later results illustrate the reach and the limits of the method: canonical Ramsey theory for pairs, van der Waerden's theorem with a monochromatic common difference, and Schur's theorem. All infinite constructions are stated over `N` in ZF; transfer is claimed only for a set supplied with an injection from `N`. Van der Waerden guarantees arbitrarily long finite progressions, not an infinite monochromatic progression, and the examples page makes that boundary explicit.

### `plane-graphs-euler-and-the-five-colour-theorem`

A plane graph is treated here as a finite graph drawn with polygonal edges, so its faces can be constructed without assuming the general Jordan curve theorem. The page proves the polygonal separation lemmas, establishes finite face structure and facial boundary walks, and derives Euler's formula, the standard planar edge and girth bounds, low-degree vertices, and the nonplanarity of `K_5` and `K_{3,3}`.

The page then proves the finite Kuratowski–Wagner characterisation with its three-connected contraction machinery exposed, constructs plane duals, and culminates in the five colour theorem by Kempe-chain swapping. The four colour theorem is true but is not proved or used here: its known proof needs computer-verified reducible configurations and discharging beyond this page. Likewise, every geometric argument is polygonal; no equivalence with arbitrary Jordan-arc or straight-line embeddings is asserted.

## 3. Applyable amendments to the prose scaffold

These are proposals for step-3 adjudication; this Beta did not edit the normative prose.

1. CB-11 `requires` block.

   Exact old text:

   ```text
   `requires`: `graph-colouring` (197),
   `inclusion-exclusion-and-the-pigeonhole-principle` (22),
   `countability-and-uncountability` (18)
   ```

   Exact new text:

   ```text
   `requires`: `graph-colouring` (197),
   `inclusion-exclusion-and-the-pigeonhole-principle` (22),
   `countability-and-uncountability` (18), `sequences-and-limits` (112)
   ```

   The B-page monotone and convex/concave subsequence applications cite the published sequence definition; the existing three requirements remain.

2. CB-11 infinite theorem sentence.

   Exact old text:

   ```text
   **the infinite Ramsey theorem**
   (landmark), with **DC named in the Statement** (§7) and a choice-ledger remark;
   ```

   Exact new text:

   ```text
   **the infinite Ramsey theorem on $\mathbb N$** (landmark), proved in ZF by
   choosing least colours and least natural witnesses; the transfer corollary is
   stated only for a set equipped with an injection from $\mathbb N$;
   ```

   This avoids the false ZF assertion that every infinite set contains a countably infinite subset.

3. CB-11 compactness sentence.

   Exact old text:

   ```text
   **the finite theorem derived from the infinite one by compactness** (König's
   lemma, DC), as a *second* proof with an agreement remark — the first proof is
   choice-free and that contrast is the item's whole point;
   ```

   Exact new text:

   ```text
   **the finite theorem derived from the infinite one by compactness** (König's
   lemma for ordered trees of finite sequences, in ZF), as a *second* proof with
   an agreement remark — both proofs are choice-free, and the compactness proof
   chooses the least successor with arbitrarily high descendants;
   ```

4. CB-11 Schur/Fermat sentence.

   Exact old text:

   ```text
   **Schur's theorem** and the corollary
   that $x^n + y^n \equiv z^n \pmod p$ has a nontrivial solution for large $p$
   (cites the number theory pages at 26–30);
   ```

   Exact new text:

   ```text
   **Schur's theorem**; its modular Fermat corollary is deferred to the finite-
   fields material, because the standard proof also needs cyclicity of
   $\mathbb F_p^\times$ and a polynomial root bound, neither of which is available
   from the number-theory pages at 26–30;
   ```

5. GT-8 Kuratowski sentence.

   Exact old text:

   ```text
   **Kuratowski's theorem** (landmark: planar iff no subdivision of $K_5$ or
   $K_{3,3}$), via 3-connectivity, citing GT-4's Menger/Whitney form and building
   the drawing by induction on edge contraction;
   ```

   Exact new text:

   ```text
   **Kuratowski–Wagner's theorem** (landmark: planar iff no subdivision of
   $K_5$ or $K_{3,3}$, equivalently neither minor), via separately numbered
   contractible-edge, three-connected drawing, separation-augmentation, and
   edge-maximal three-connectivity lemmas, citing GT-4's Menger/Whitney form;
   ```

   The existing general-Jordan and four-colour trap text remains: the former is not a dependency and the latter is true, unproved here, and never cited.

## 4. Canonical source harvest and licensing ledger

The machine-readable heading-by-heading harvest is in `frontier-10-batch-6.coverage.json`. The source pair for each A page was read over the exact ranges recorded there; the extra sources below resolve exact constants, examples, and proof seams.

| source and locator | use | licence / handling |
|---|---|---|
| Reinhard Diestel, *Graph Theory*, 6th ed. preview, Ch. 9 §9.1, <https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch9.pdf> | finite and infinite Ramsey, uniform form | official copyrighted preview; facts and result structure only |
| I. B. Leader, *Ramsey Theory*, §§1.1–1.2, pp. 1–7, <https://www.dpmms.cam.ac.uk/~par31/notes/ramsey.pdf> | infinite and canonical Ramsey, van der Waerden, Schur, sequence applications | official lecture notes; no explicit reuse licence found, so reference only |
| Leader, §1.3 from the combinatorial-line definition through the remarks after Theorem 9, pp. 7–8, same URL | explicit Hales–Jewett disposition and its relation to van der Waerden | same official lecture notes; reference only |
| Leader, §2.1 displayed statement of Rado's theorem, p. 11, same URL | explicit Rado disposition after Schur | same official lecture notes; reference only |
| Jacob Fox et al., *Graph Ramsey Theory*, §2.1, <https://math.mit.edu/~fox/paper-graphramsey.pdf> | recursion and binomial bound cross-check | author-hosted survey; reference only |
| MIT OCW 18.310, Ch. 3, <https://ocw.mit.edu/courses/18-310-principles-of-discrete-applied-mathematics-fall-2013/resources/mit18_310f13_ch3/> | exact `W(3,2)=9` | CC BY-NC-SA course material; adapted mathematics, independently worded |
| Douglas West / Whitman College combinatorial game-theory text, Ramsey example, <https://www.whitman.edu/mathematics/cgt_online/cgt.pdf> | explicit `R(3,3)` extremal colouring cross-check | reference only |
| Diestel, Ch. 3 §3.2 Lemma 3.2.4, <https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch3.pdf> | contractible-edge lemma | official copyrighted preview; reference only |
| Diestel, Ch. 4 §§4.1, 4.2, 4.4, 4.6, <https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch4.pdf> | polygonal topology, faces, Euler, Kuratowski, duality | official copyrighted preview; reference only |
| Diestel, Ch. 5 §5.1 through Proposition 5.1.2, <https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch5.pdf> | five-colour theorem and four-colour boundary | official copyrighted preview; reference only |
| Richard Grassl and Oscar Levin, *Exploring Combinatorial Mathematics*, §§3.3, 3.4.1, 3.5, <https://openmathbooks.org/ecm/ecm.html> | independent Euler, nonplanarity, edge bounds, six/five colours | GNU FDL; reference and independently worded derivations |
| J. A. Bondy and U. S. R. Murty, *Graph Theory with Applications*, plane dual examples, <https://math.arizona.edu/~kglasner/math443/BondyMurtyGTWA.pdf> | nonisomorphic duals from distinct embeddings | reference only |
| Jeff Erickson, *Planar Graphs*, §9, <https://jeffe.cs.illinois.edu/teaching/comptop/2023/notes/09-planar-graphs.pdf> | plane-embedding/dual and nonpolygonal seam cross-check | author-hosted course notes; reference only |

No source prose or diagram is copied. All references will be cited at the theorem or example that uses them. Generated provenance is reserved for directly checked leaf examples/counterexamples, never for a load-bearing theorem.

## 5. Coverage dispositions likely to be challenged

The repaired harvest records 95 source/result-heading dispositions: 69 `included`, 15 `inline`, one `already-published`, seven `deferred`, and three `out-of-scope`. Thus 84 harvested headings feed the scaffold, one is discharged by a published item, and ten are declines. The five new Ramsey declines are the section, definition, theorem, and immediate remarks needed to make the Hales–Jewett stop explicit, plus Rado's theorem. They are source-anchored in the two supplementary Leader slices above rather than hidden beyond a locator boundary.

| result | disposition | defence |
|---|---|---|
| Schur's modular Fermat corollary | deferred | Its usual proof uses the cyclic multiplicative group of a finite field and a polynomial root bound. Those are an unbuilt algebraic subject, not a local lemma that can honestly be added here. Schur itself is included. |
| Hales–Jewett section, combinatorial-line vocabulary, Theorem 9, and its immediate remarks | deferred | This is a separate high-dimensional word-cube Ramsey theory with its own colour-focussing induction. Van der Waerden is already proved directly and does not use it; every individual heading now has a result-specific reason in the harvest. |
| Rado's theorem | deferred | The rational-matrix classification needs partition regularity, the columns property, and valuation/focussing machinery. Schur is proved here as a single equation without invoking that distinct arithmetic-Ramsey subject. |
| General Jordan curve theorem | out of scope | The polygonal theorem required by finite plane graphs is built here. Arbitrary topological circles and Schoenflies theory belong to the later embedding/topology subject. |
| Whitney uniqueness of embeddings | deferred | Euler already proves face-count invariance. Full embedding uniqueness requires a separate 3-connected topological-equivalence theory; it is not being invoked by duality or colouring. |
| Four colour theorem (two source records) | out of scope | The dispatch explicitly requires the five-colour theorem and explicitly forbids silently omitting four-colour. The known proof's computer-verified reducible-configuration/discharging machinery is outside the auditable scope; the theorem is neither cited nor labelled false. |

No canonical result was declined merely because it needed an ordinary lemma. In particular, polygonal Jordan separation, face incidence, the contractible-edge lemma, both Kuratowski reduction lemmas, and the Kempe separation lemma are all built.

## 6. Convention disagreements and seams

- **Choice:** textbook statements over an arbitrary “infinite set” commonly hide a countably infinite selection. This scaffold proves the theorem over `N` in ZF and transfers it only along a supplied injection `N -> X`. It does not cite `def-dependent-choice` or `def-countable-choice`.
- **König:** the tree consists of finite sequences and each finite successor set is ordered. Choosing the least viable successor is therefore definable in ZF. “Infinite branching is enough” is separately refuted.
- **Ramsey numbers:** `R(s,t)` is introduced only after a finite witness theorem and leastness uses well-ordering. The same theorem-before-definition discipline is used for `R_k(r;c)`, `W(k,c)`, and `S(c)`.
- **Arithmetic progressions:** natural-number indexing includes zero in the `W(3,2)` example; translating an interval does not change the exact value. The page always requires a positive common difference.
- **Plane graph:** edges are polygonal arcs and meet only at common endpoints. This is deliberately narrower than arbitrary Jordan-arc drawing and makes the topological proof surface auditable.
- **Face length:** a facial boundary is a closed walk, not always a cycle. A bridge is traversed twice, so the face handshake sum is exactly `2|E|`. Cycle boundaries are asserted only under two-connectivity.
- **Dual:** the dual is a multigraph: a bridge creates a loop and parallel primal separations can create parallel dual edges. Duals depend on the embedding; only reciprocal duality for a fixed connected plane embedding is claimed.
- **Planarity obstructions:** the page proves both the subdivision and minor forms and states their equivalence specifically for `K_5` and `K_{3,3}`; it does not conflate an arbitrary minor with an arbitrary topological minor.
- **Colouring:** the page proves six colours first as the induction baseline, then five via a Kempe swap and a polygonal separation lemma. It makes no four-colour inference.

## 7. Item-by-item provenance ledger

Abbreviations: D9 = Diestel Ch. 9 §9.1; L1 = Leader §§1.1–1.2; F2 = Fox et al. §2.1; M3 = MIT OCW Ch. 3; D3/D4/D5 = Diestel Chapters 3/4/5; ECM = *Exploring Combinatorial Mathematics* §§3.3–3.5; BM = Bondy–Murty; JE = Erickson.

### Ramsey A

| item | provenance route |
|---|---|
| `def-ramsey-colouring-and-arrow-notation` | D9 definitions, cross-checked L1 |
| `lem-two-colour-ramsey-arrow-recursion` | F2 recursion proof, cross-checked from D9's induction |
| `thm-finite-graph-ramsey-binomial-bound` | F2 §2.1 and D9 Theorem 9.1.1 |
| `def-off-diagonal-ramsey-number` | F2/D9 after the witness theorem |
| `cor-ramsey-recursion-and-diagonal-upper-bound` | direct corollary of the preceding sourced recursion and Pascal/binomial theorem |
| `thm-r-three-three-equals-six` | standard six-vertex pigeonhole proof and five-cycle colouring, cross-checked in the Whitman text |
| `thm-diagonal-ramsey-counting-lower-bound` | Erdős finite counting argument as presented in modern Ramsey surveys including F2 |
| `thm-finite-ramsey-for-uniform-subsets` | D9 Theorem 9.1.3, cross-checked L1 Corollary 3 |
| `def-uniform-ramsey-number` | direct least-witness definition after the preceding theorem |
| `def-finitely-branching-tree-on-finite-sequences` | standard ordered finite-sequence model, tailored to the ZF proof obligation |
| `thm-konig-infinity-lemma-for-ordered-trees` | constructive least-successor proof; compactness role cross-checked L1 Corollary 3 |
| `lem-infinite-pigeonhole-on-the-naturals` | direct finite-partition lemma from the published pigeonhole/sum rules |
| `thm-infinite-ramsey-on-the-naturals` | D9 Theorem 9.1.2 and L1 Theorems 1–2, with choice assumptions corrected to the exact `N` form |
| `cor-infinite-ramsey-for-dedekind-infinite-sets` | direct transport along the supplied injection |
| `cor-finite-ramsey-by-konig-compactness` | L1 Corollary 3, written through the numbered ordered-tree lemma |
| `thm-canonical-ramsey-theorem-for-pairs` | L1 Theorem 4 |
| `lem-colour-focussing-for-arithmetic-progressions` | L1 §1.2 preliminary focussing claim |
| `thm-van-der-waerden-with-monochromatic-difference` | L1 Theorems 6 and 8 |
| `def-van-der-waerden-number` | L1 definition after the witness theorem |
| `thm-schur-monochromatic-sum` | L1 remark deriving Schur from finite Ramsey |
| `def-schur-number` | direct bounded-set maximum definition after Schur |

### Ramsey B

| item | provenance route |
|---|---|
| `ex-r-three-three-both-bounds` | sourced theorem specialised with the explicit five-cycle witness |
| `ex-w-three-two-equals-nine` | M3 exact value and extremal colouring; the finite upper case will be independently enumerated |
| `ex-infinite-monotone-subsequence-by-ramsey` | L1 example after Theorem 1 |
| `ex-infinite-convex-or-concave-subsequence-by-ramsey` | L1 example after Theorem 2 |
| `fs-two-colouring-forces-an-infinite-monochromatic-progression` | L1 explicit warning; constructive dyadic-block colouring supplied in the proof |
| `cex-infinite-branching-is-not-enough-for-konig` | standard decreasing-sequence tree, directly verified |
| `cex-infinite-ramsey-fails-with-infinitely-many-colours` | expected statement `ai-altered` from Leader Theorem 4's left-dependent canonical form and Alpha's explicit minimum-colouring specialisation; expected proof `ai-generated` by the direct three-point check; Leader URL above will appear in `sources.references` |
| `ex-all-four-canonical-pair-colouring-types` | expected statement `ai-altered` from Leader Theorem 4 and its following canonical-colourings remark; expected proof `ai-generated` by checking the four explicit formulas; Leader URL above will appear in `sources.references` |

### Plane-graph A

| item | provenance route |
|---|---|
| `def-polygonal-arc-and-polygon` | D4 §4.1 definitions plus the published polygonal-path definition |
| `def-plane-region-and-frontier` | D4 §4.1 and published topology definitions |
| `lem-polygonal-ray-general-position` | D4 §4.1 ray-crossing setup, expanded into its own well-definedness lemma |
| `lem-polygonal-crossing-parity-is-locally-constant` | D4 §4.1 parity proof, expanded |
| `thm-polygonal-jordan-curve` | D4 Lemma 4.1.2 |
| `lem-polygonal-arc-does-not-separate-the-plane` | D4 Lemma 4.1.3 |
| `def-plane-graph-face-and-boundary` | D4 §4.2 and ECM §3.3, with facial boundary walks made explicit |
| `lem-plane-graph-faces-are-finite-with-one-unbounded-face` | D4 §4.2 opening facts, proved from the numbered polygonal lemmas |
| `lem-face-containment-under-plane-subgraphs` | D4 Lemma 4.2.1 |
| `def-bridge-in-a-graph` | standard graph definition used explicitly by D4 §4.2 edge incidence |
| `lem-edge-is-a-bridge-iff-it-lies-on-no-cycle` | direct graph-theoretic equivalence required before D4 Lemma 4.2.2 |
| `lem-plane-edge-face-incidence` | D4 Propositions/Lemmas 4.2.2–4.2.3 |
| `prop-plane-forest-has-one-face` | D4 Proposition 4.2.4 |
| `lem-equal-plane-face-boundaries-force-a-cycle` | D4 Lemma 4.2.5 |
| `prop-face-boundaries-in-two-connected-plane-graphs` | D4 Proposition 4.2.6 |
| `prop-face-boundaries-in-three-connected-plane-graphs` | D4 Proposition 4.2.7 |
| `def-maximal-plane-and-maximally-planar-graph` | D4 §4.2 definitions |
| `prop-maximal-plane-triangulation-characterisation` | D4 Proposition 4.2.8 |
| `thm-euler-formula-for-connected-plane-graphs` | D4 Theorem 4.2.9 and ECM Theorem 3.3.1 |
| `cor-euler-formula-for-disconnected-plane-graphs` | direct component induction from sourced connected Euler |
| `lem-plane-face-handshake-by-girth` | D4 face-incidence derivation, cross-checked ECM Activities 294–296 |
| `cor-planar-simple-graph-edge-bound` | D4 Corollary 4.2.10 and ECM Activity 298 |
| `cor-triangle-free-planar-edge-bound` | D4 derivation and ECM Activity 296 |
| `cor-planar-graph-has-low-degree-vertex` | D4/ECM Activity 299 |
| `cor-k-five-and-k-three-three-are-nonplanar` | D4/ECM Activities 295–296 |
| `cor-planar-graphs-have-no-kuratowski-subdivision` | D4 Corollary 4.2.11 |
| `prop-maximally-planar-edge-characterisation` | D4 Proposition 4.4.1 |
| `lem-kuratowski-minors-are-topological-minors` | D4 Lemma 4.4.2 |
| `lem-three-connected-graph-has-a-contractible-edge` | D3 Lemma 3.2.4 |
| `lem-three-connected-kuratowski-free-is-planar` | D4 Lemma 4.4.3, now explicitly depending on D3 Lemma 3.2.4 |
| `lem-separation-augmentation-for-kuratowski-free-graphs` | D4 Lemma 4.4.4 |
| `lem-edge-maximal-kuratowski-free-is-three-connected` | D4 Lemma 4.4.5 |
| `thm-kuratowski-wagner-planarity-characterisation` | D4 Theorem 4.4.6 |
| `def-plane-dual-multigraph` | D4 §4.6 and JE |
| `thm-plane-dual-exists-and-double-dual-recovers-primal` | D4 §4.6 reciprocal-dual paragraph |
| `thm-six-colour-theorem-for-planar-graphs` | ECM Activity 306 |
| `def-kempe-chain` | D5 §5.1 proof vocabulary |
| `lem-kempe-component-colour-swap` | D5 Proposition 5.1.2 proof, isolated |
| `lem-alternating-kempe-paths-cannot-both-occur` | D5 Proposition 5.1.2 plus the numbered polygonal JCT |
| `thm-five-colour-theorem` | D5 Proposition 5.1.2 and ECM Activity 307 |

### Plane-graph B

| item | provenance route |
|---|---|
| `ex-euler-formula-on-a-tree-cycle-and-k-four` | ECM Activities 287–293; direct finite checks |
| `cex-k-four-is-planar-but-not-three-colourable` | direct leaf counterexample from the complete-graph and colouring definitions |
| `ex-petersen-graph-nonplanar-by-kuratowski` | standard explicit subdivision, checked against D4's criterion |
| `ex-one-planar-graph-two-nonisomorphic-duals` | BM dual-embedding example, cross-checked JE |
| `ex-five-colouring-by-a-kempe-swap` | D5 proof specialised to one degree-five insertion |
| `cex-k-three-three-satisfies-the-planar-edge-bound` | direct arithmetic leaf counterexample from D4/ECM bounds |
| `cex-a-wild-arc-drawing-is-not-a-plane-graph` | direct convention counterexample, motivated by JE's embedding discussion |

## 8. Proof decomposition and authoring obligations

- The finite graph Ramsey proof first establishes the asymmetric recursion, including the base cases `s=1` or `t=1`, and only then iterates Pascal's identity. `R(s,t)` is not available before this witness.
- The counting lower bound must count bad colourings of each `K_k`, union-bound those finite sets without probability language, and prove the displayed inequality for every `k>=3`; small `k` cannot be waved away.
- The uniform finite proof must show its induction parameter and explicit finite witness recurrence. The infinite proof must construct a sequence of vertices and nested infinite reservoirs by least choices on `N`, then invoke induction on subset size.
- The canonical pair theorem must define the four behaviours precisely, especially “left-dependent” and “right-dependent,” and prove mutual coverage after thinning.
- The canonical-type example must give four formulas on unordered pairs, order each pair as `i<j`, and verify both directions of the equality pattern for the injective, left-dependent, and right-dependent cases. The infinite-colour counterexample must separately show that its range is infinite and that any three increasing vertices already contain two differently coloured pairs.
- The van der Waerden focussing lemma is the engine, not a slogan. The author must record the induction parameters and the colour-vector pigeonhole bound used at each extension.
- Polygonal Jordan must number general position, parity invariance, existence of both parities, connectedness of each parity class, and frontier equality. No arbitrary-Jordan theorem may enter a citation.
- Before geometric edge incidence, prove from paths that an edge is a bridge exactly when it lies on no cycle. Euler must then treat bridge and cycle-edge cases explicitly and state what happens to the number of faces on edge deletion. The disconnected formula includes the null graph.
- The Kuratowski chain must prove the contractible-edge lemma, the three-connected induction, the separation augmentation, and the edge-maximal three-connectivity reduction as separate arguments. A citation to the final theorem cannot substitute for these proofs.
- Dual construction must explain loop/parallel-edge cases and why reciprocal crossing arcs can be chosen polygonally without unintended intersections.
- Five-colour must extract the cyclic neighbour order from the plane embedding, prove the two alternating Kempe connections cannot coexist by polygonal separation, and verify that the colour swap frees a colour at the deleted vertex.

The proof-contract JSON is the step-5 checklist. Its cited clauses are obligations to reproduce or cite exactly; its derivation nodes are not permission to collapse multi-step arguments into “standard.”

## 9. Boundary pass

- Ramsey indices: `s,t,k,c,r` positivity is explicit; recursion assumes `s,t>=2`; `R(3,3)` checks both bounds; `W(k,c)` requires a positive difference; Schur uses the positive interval `{1,...,N}`, excludes the trivial zero solution, and permits `x=y` unless the source theorem states otherwise.
- Infinite results: only finite colour sets; `k=1` is a real base case; the homogeneous set is infinite in the sense of an injection/enumeration, not merely not-finite; no arbitrary-set choice is hidden. The B counterexample assigns colour `0` to `{0,1}`, permits one- and two-point homogeneous sets, and rules out every homogeneous set of size at least three.
- Trees: root and empty sequence included; every level is nonempty; finite branching includes zero successors; an infinite branch has a node at every level.
- Plane graphs: null graph and disconnected graphs handled in the extended Euler formula; loops are excluded in the primal simple graph but allowed in its dual; bridges count twice in facial length.
- Edge bounds: `n>=3` is explicit; simple graphs only; triangle-free gives face length at least four after bridge/tree boundary cases are discharged rather than assumed.
- Connectivity: three-connected statements exclude small graphs as required; `K_4` is the base case for contraction; simple contraction deletes resulting loops and merges parallel edges.
- Colouring: isolated vertices and disconnected components reduce immediately; degree `<5` is separate from degree `5`; a Kempe component swap affects no edge with exactly one endpoint in the component and the other carrying one of the two swapped colours.

## 10. Published dependency audit

All 60 candidate external dependency files were opened in full from `items/`, not inferred from a page summary. The clause audit rejected two direct dependencies, leaving 58: `def-bipartite-graph` and `thm-bipartite-iff-no-odd-cycle` cannot support the triangle-free edge bound because triangle-free does not imply bipartite. They remain in the table as opened-and-rejected evidence and are not present in the final manifest. For every row the route was: confirm `status: published`; read and match the exact Statement/Definition clause used; confirm the owning page is earlier than order 217 or 357 through the live plan/library frontmatter; inspect `provenance.statement`; then run the spliced validator and manifest content policy. “LD” means `literature-derived` statement provenance and “AA” means `ai-altered`. No dependency has `provenance.statement: ai-generated`; generated legacy proofs are not being treated as statement evidence.

| published dependency opened | owning published page | route |
|---|---|---|
| `cor-complete-graph-edge-count` | `graphs-walks-and-connectivity` (207) | AA; exact edge-count Statement matched |
| `cor-components-of-open-subsets-of-rn-are-polygonally-connected` | `the-topology-of-euclidean-space` (257) | AA; exact component Statement matched |
| `cor-connected-components-partition-the-vertex-set` | `graphs-walks-and-connectivity` (207) | AA; exact partition/maximality Statement matched |
| `cor-whitney-k-connected-path-characterisation` | `matchings-covers-menger-and-network-flows` (213) | LD; both directions and size hypothesis matched |
| `def-binomial-coefficient` | `finite-counting-and-binomial-coefficients` (20) | LD; definition and boundary clauses matched |
| `def-bipartite-graph` | `graphs-walks-and-connectivity` (207) | AA; opened, then rejected as non-load-bearing for triangle-free graphs |
| `def-bounded-set` | `suprema-and-infima` (14) | LD; boundedness Definition matched |
| `def-connected-component-and-quasicomponent` | `connectedness` (253) | AA; largest-connected-subset clause matched |
| `def-connected-graph-and-connected-component` | `graphs-walks-and-connectivity` (207) | AA; path-connected graph/component Definition matched |
| `def-countable` | `countability-and-uncountability` (18) | AA; finite/countably-infinite convention matched |
| `def-equinumerous` | `countability-and-uncountability` (18) | AA; bijection and domination clauses matched |
| `def-finite-cardinality` | `finite-counting-and-binomial-coefficients` (20) | AA; uniqueness/transport/cardinality clauses matched |
| `def-finite-simple-graph` | `graphs-walks-and-connectivity` (207) | AA; finite simple graph convention matched |
| `def-graph-adjacency-incidence-neighbourhood-and-degree` | `graphs-walks-and-connectivity` (207) | AA; adjacency/degree clauses matched |
| `def-graph-deletion-contraction-minor-and-subdivision` | `graphs-walks-and-connectivity` (207) | AA; simple contraction, minor, subdivision clauses matched |
| `def-graph-distance-and-girth` | `graphs-walks-and-connectivity` (207) | AA; girth and acyclic convention matched |
| `def-graph-isomorphism-and-complement` | `graphs-walks-and-connectivity` (207) | AA; isomorphism/complement Definition matched |
| `def-graph-walk-trail-path-and-cycle` | `graphs-walks-and-connectivity` (207) | AA; walk/path/cycle clauses matched |
| `def-injection-surjection-bijection` | `relations-functions-and-quotients` (5.3) | AA; injective/bijective clauses matched |
| `def-interior-closure-boundary-top` | `topological-spaces-and-continuity` (249) | AA; closure/frontier Definition matched |
| `def-multigraph-loop-and-digraph` | `graphs-walks-and-connectivity` (207) | AA; loop/parallel-edge clauses matched |
| `def-nat-order` | `construction-of-the-natural-numbers` (6) | LD; additive order Definition matched |
| `def-nat-power` | `finite-counting-and-binomial-coefficients` (20) | AA; natural exponentiation recursion matched |
| `def-natural-numbers` | `construction-of-the-natural-numbers` (6) | LD; von Neumann natural convention matched |
| `def-ordered-field` | `foundations-of-the-real-numbers` (9) | AA; positive-cone order Definition matched |
| `def-path-connected` | `connectedness` (253) | AA; path and path-connectedness clauses matched |
| `def-petersen-graph` | `graphs-walks-and-connectivity` (207) | AA; disjoint-two-subset Definition matched |
| `def-polygonal-path-and-polygonal-connectedness` | `the-topology-of-euclidean-space` (257) | AA; finite polygonal path Definition matched |
| `def-proper-vertex-colouring-and-chromatic-number` | `graph-colouring` (215) | LD; proper-colouring/chromatic-number clauses matched |
| `def-rational-power` | `roots-and-rational-powers` (16) | AA; positive-base rational power Definition matched |
| `def-real-order` | `construction-of-r-via-cauchy-sequences` (7) | AA; real-order Definition matched |
| `def-sequence` | `sequences-and-limits` (112) | AA; real sequence/subsequence clauses matched |
| `def-standard-complete-bipartite-path-and-cycle-graphs` | `graphs-walks-and-connectivity` (207) | AA; complete/bipartite/cycle conventions matched |
| `def-subgraph-induced-subgraph-and-spanning-subgraph` | `graphs-walks-and-connectivity` (207) | AA; subgraph/induced/spanning clauses matched |
| `def-subspace-topology-top` | `topological-spaces-and-continuity` (249) | AA; trace and subspace clauses matched |
| `def-sum-over-a-finite-index-set` | `finite-counting-and-binomial-coefficients` (20) | AA; finite reindexing and constant-sum clauses matched |
| `def-tree-forest-and-leaf` | `trees-forests-and-spanning-trees` (209) | LD; forest/tree/leaf conventions matched |
| `def-vertex-and-edge-connectivity` | `graphs-walks-and-connectivity` (207) | AA; cut/connectivity and small-graph conventions matched |
| `lem-alternating-sequence` | `monotone-sequences-and-cauchy-completeness` (114) | AA; recursive parity partition Statement matched |
| `lem-edge-deletion-in-a-tree` | `trees-forests-and-spanning-trees` (209) | AA; exact two-component Statement matched |
| `lem-metrics-on-rn` | `metric-spaces` (116) | AA; `R^2` function-coordinate model and metric clauses matched |
| `lem-nonempty-forest-has-low-degree-vertex` | `trees-forests-and-spanning-trees` (209) | AA; degree-at-most-one Statement matched |
| `lem-of-q-dense` | `foundations-of-the-real-numbers` (9) | LD; Archimedean density Statement matched |
| `lem-rational-power-monotone` | `roots-and-rational-powers` (16) | AA; monotonicity in base/exponent clauses matched |
| `thm-binomial-closed-formula` | `finite-counting-and-binomial-coefficients` (20) | AA; natural identity and symmetry clauses matched |
| `thm-binomial-theorem` | `finite-counting-and-binomial-coefficients` (20) | AA; real binomial identity matched |
| `thm-bipartite-iff-no-odd-cycle` | `graphs-walks-and-connectivity` (207) | LD; opened, then rejected because “no triangle” is weaker than “no odd cycle” |
| `thm-cardinality-of-a-set-of-functions` | `finite-counting-and-binomial-coefficients` (20) | LD; function-set count including empty cases matched |
| `thm-connected-iff-has-spanning-tree` | `trees-forests-and-spanning-trees` (209) | AA; both directions matched |
| `thm-double-counting` | `inclusion-exclusion-and-the-pigeonhole-principle` (22) | AA; row/column fibre identity matched |
| `thm-forest-edge-component-count` | `trees-forests-and-spanning-trees` (209) | AA; null-inclusive edge/component identity matched |
| `thm-handshake-lemma-for-finite-simple-graphs` | `graphs-walks-and-connectivity` (207) | LD; null-inclusive handshake identity matched |
| `thm-induction-principle` | `construction-of-the-natural-numbers` (6) | LD; set and property forms matched |
| `thm-menger-finite-directed-and-undirected-path-forms` | `matchings-covers-menger-and-network-flows` (213) | LD; finite undirected vertex form and nonadjacency hypothesis matched |
| `thm-pascals-rule` | `finite-counting-and-binomial-coefficients` (20) | AA; unrestricted Pascal identity matched |
| `thm-product-rule` | `finite-counting-and-binomial-coefficients` (20) | AA; two-factor and finite-family forms matched |
| `thm-recursion` | `construction-of-the-natural-numbers` (6) | LD; existence-and-uniqueness recursion Statement matched |
| `thm-sum-rule` | `finite-counting-and-binomial-coefficients` (20) | AA; disjoint finite union/partition forms matched |
| `thm-the-strong-pigeonhole-principle` | `inclusion-exclusion-and-the-pigeonhole-principle` (22) | AA; counting and ceiling forms matched |
| `thm-well-ordering-principle` | `construction-of-the-natural-numbers` (6) | LD; least-element Statement matched |

The spliced `validate-plan.mjs` run reports no unresolved ids, item-level forward references, B-page dependencies, or cycles. `content-policy.mjs ... --manifest-only` reports 74 scoped items with zero errors and zero warnings. The validator's redundant-prerequisite notices for the plane page concern the four direct requirements supplied by the dispatch; they are not removed here.

## 11. Gate record and blockers

The direct gate receipts are green. The first three rows below are the exact step-3 repair commands required by the dispatch:

- `node tools/validate-plan.mjs research/plan-spec.json --rehomed research/frontier-10-rehomed.json`: exit 0; the rehomed plan is acyclic and has no item-level cycles, forward references, B-page dependencies, or unresolved ids among its 176 pages with item lists.
- `node tools/coverage-checklist.mjs research/frontier-10-batch-6.coverage.json`: exit 0; two A pages, 95 harvested headings, zero errors, zero warnings.
- `node tools/content-policy.mjs research/frontier-10-batch-6.pages.json --manifest-only --rehomed research/frontier-10-rehomed.json`: exit 0; 76 scoped items, zero errors, zero warnings.

- `node tools/validate-plan.mjs research/plan-spec.json`: exit 0; the live plan is acyclic and has no item-level cycles, forward references, B-page dependencies, or unresolved ids among its 176 pages with item lists.
- Final-manifest in-memory splice through `validate-plan.mjs`: exit 0; the plan with these four pages substituted is acyclic and has no item-level cycles, forward references, B-page dependencies, or unresolved ids among 180 pages with item lists.
- `node tools/depsource.mjs research/plan-spec.json`: exit 0; 16,688 dependencies resolve to published pages and zero are unresolved. Because the orchestrator has not yet performed the step-4 splice, the batch-specific supplement is the 60-file clause audit in section 10: 58 final external dependencies resolve to published earlier pages and two opened candidates were rejected.
- Structural proof-contract check: 63 proof-bearing ids, 63 scope ids, and 63 contracts; no missing or extra ids, and every contract has citations, derivations, routine steps, all eight boundary cases, and a finite-smoke array. Strict item-file checking belongs to step 5, after those files exist.
- Additional `prosecheck.mjs --warnings`: zero errors. Its twelve advisory `count-in-prose` rows are confined to this audit-facing notes ledger, which necessarily records page/item/gate counts; no A-page summary or B-page content row is implicated.

The historical step-2 aggregate command `node tools/gates.mjs --step 2 --run frontier-10` was blocked in the original sandbox because its internal child-process spawns received `EPERM`. The step-3 dispatch expressly forbids rerunning that wrapper, so it was not run in this repair. The required individual scripts all pass and there is no current source-access, licensing, page-size, dependency, or mathematical blocker.

The only proposed plan amendment is the direct `sequences-and-limits` requirement and the prose correction to the choice ledger; this Beta did not edit the plan.

## 12. Alpha step-3 Ramsey repair — 2026-08-11

Alpha's §9 finding is accepted in full.

1. The finite-colour hypothesis is now tested by `cex-infinite-ramsey-fails-with-infinitely-many-colours` on the B page. Its colouring is the left-dependent canonical colouring `c({i,j})=min{i,j}`; three increasing vertices force two different colours. The harvest records it under Leader's explicit Theorem 4 case (iii).
2. `ex-all-four-canonical-pair-colouring-types` now gives constant, injective, left-dependent, and right-dependent witnesses. The harvest records it under Leader's named remark after Theorem 4.
3. The previously silent Hales–Jewett stop now has four explicit `deferred` rows in a supplementary Leader §1.3 source slice, and Rado's theorem has its own `deferred` row in a supplementary Leader §2.1 slice. These are whole adjacent subjects, not results declined for want of a local prerequisite.

The Ramsey A page remains at 21 items, so the 60-item split contingency does not fire. The B page is 8 items. Both new items are proof-bearing leaves, are present in the proof-contract scope, and cite only earlier A-page results. They introduce no external published dependency, no forward reference, and no cross-batch edge. The plane-graph pair was sufficient and was not changed in this repair.

## 13. Step-5 continuity checkpoint — 2026-08-11

The step-5 authoring pass is in progress on the shared branch. The 21 Ramsey A items, all 8 Ramsey B items, and all 40 plane-graph A items declared by `research/frontier-10-batch-6.pages.json` are authored as draft/session files. No page file, coverage row, or proof contract has yet been certified by the step-5 checks, and unrelated batches' working-tree changes remain untouched.

The remaining authored items are the seven plane-graph B examples and counterexamples. After those files are written, the exact next actions are to assemble the four owned page files, reconcile the proof-contract JSON with every final item proof, keep the coverage ledger literal, record component-level provenance rationales and dependency deviations here, and run the seven individual step-5 commands from the dispatch. The aggregate gates wrapper remains forbidden.

Four dependency deviations already require final recording: the colour-focussing lemma omits the unused strong-pigeonhole dependency; the strengthened van der Waerden theorem keeps only the focussing lemma and induction as direct dependencies; the three-connected lifting lemma directly adds face containment and two-connected face boundaries; and the edge-maximal Kuratowski-free lemma directly adds planar-side embedding and obstruction-exclusion results. These changes follow the proofs actually written and must be mirrored in the strict contracts.

## 14. Component provenance rationales

Each row records separate statement and proof judgments. A definition's `not-applicable` proof label means that the item makes no proof claim.

### Ramsey A

| Item | Statement rationale | Proof rationale |
|---|---|---|
| `def-ramsey-colouring-and-arrow-notation` | `literature-derived`: standard finite-colouring and arrow notation follows Leader and Fox. | `not-applicable`: this is notation and terminology. |
| `lem-two-colour-ramsey-arrow-recursion` | `literature-derived`: the two-parameter recursion is the standard Ramsey recursion. | `ai-altered`: the textbook vertex argument is recast in the library's arrow notation and finite-cardinality conventions. |
| `thm-finite-graph-ramsey-binomial-bound` | `literature-derived`: the binomial Ramsey bound is stated in the cited sources. | `ai-altered`: the standard Pascal induction is expanded with positive-parameter base cases. |
| `def-off-diagonal-ramsey-number` | `literature-derived`: the least-witness definition is standard. | `not-applicable`: this is a definition backed by prior existence. |
| `cor-ramsey-recursion-and-diagonal-upper-bound` | `literature-derived`: both the Ramsey recursion and diagonal binomial bound are standard consequences. | `ai-altered`: the source deductions are joined and the power-of-two comparison is made explicit. |
| `thm-r-three-three-equals-six` | `literature-derived`: the first exact Ramsey number is a standard cited result. | `ai-altered`: the upper pigeonhole proof and explicit five-cycle lower witness are presented together. |
| `thm-diagonal-ramsey-counting-lower-bound` | `literature-derived`: the stated Erdős counting bound follows the cited standard argument. | `ai-altered`: the random-colouring proof is written as finite counting with every numerical inequality exposed. |
| `thm-finite-ramsey-for-uniform-subsets` | `literature-derived`: finite Ramsey for uniform subsets is standard. | `ai-altered`: the induction is reconstructed using finite colour-pattern vectors and the authored pair theorem. |
| `def-uniform-ramsey-number` | `literature-derived`: the least finite uniform witness is standard notation. | `not-applicable`: this is a definition backed by the preceding theorem. |
| `def-finitely-branching-tree-on-finite-sequences` | `ai-altered`: standard tree language is specialized to ordered finite sequences for a choice-free proof. | `not-applicable`: this item only fixes conventions. |
| `thm-konig-infinity-lemma-for-ordered-trees` | `literature-derived`: König's infinity lemma is the cited theorem. | `ai-altered`: the proof selects the least live successor to make the ZF construction explicit. |
| `lem-infinite-pigeonhole-on-the-naturals` | `literature-derived`: the finite-colouring conclusion is the standard infinite pigeonhole principle. | `ai-generated`: the contradiction is rebuilt from finite union and boundedness facts in this library. |
| `thm-infinite-ramsey-on-the-naturals` | `literature-derived`: the theorem and finite-colour scope follow Leader. | `ai-altered`: the inductive thinning proof uses canonical least choices to record the ZF boundary. |
| `cor-infinite-ramsey-for-dedekind-infinite-sets` | `ai-generated`: this explicit injection-form transfer was derived from the authored natural-number theorem. | `ai-generated`: the proof pulls back the colouring and pushes forward the homogeneous set. |
| `cor-finite-ramsey-by-konig-compactness` | `literature-derived`: the compactness deduction by a tree of bad colourings is standard. | `ai-altered`: nodes and compatibility are spelled out using the ordered-tree convention. |
| `thm-canonical-ramsey-theorem-for-pairs` | `literature-derived`: the four canonical alternatives are Leader's theorem. | `ai-altered`: the source thinning argument is reorganized into labelled equality-pattern stages. |
| `lem-colour-focussing-for-arithmetic-progressions` | `ai-altered`: Leader's focusing device is isolated and strengthened to the exact extension interface used here. | `ai-altered`: the block-vector proof is reconstructed with explicit finite Ramsey witnesses. |
| `thm-van-der-waerden-with-monochromatic-difference` | `literature-derived`: Leader states the progression-plus-difference strengthening. | `ai-altered`: the nested induction is expanded around the preceding focusing lemma. |
| `def-van-der-waerden-number` | `literature-derived`: the least forcing interval is standard terminology. | `not-applicable`: this is a definition backed by existence. |
| `thm-schur-monochromatic-sum` | `literature-derived`: Schur's finite monochromatic-sum theorem is standard. | `ai-altered`: the familiar difference-colouring proof is expressed with the page's finite Ramsey witness. |
| `def-schur-number` | `ai-altered`: the standard least-witness definition is normalized to positive initial intervals and this page's variables. | `not-applicable`: this is a definition backed by Schur's theorem. |

### Ramsey B

| Item | Statement rationale | Proof rationale |
|---|---|---|
| `ex-r-three-three-both-bounds` | `literature-derived`: the six-vertex upper proof and five-cycle witness are standard examples. | `ai-altered`: both directions are relabelled and checked directly. |
| `ex-w-three-two-equals-nine` | `literature-derived`: the exact value $W(3,2)=9$ is the cited standard example. | `ai-altered`: the lower colouring and finite upper propagation are written out rather than quoted. |
| `ex-infinite-monotone-subsequence-by-ramsey` | `literature-derived`: the Ramsey proof of monotone subsequences is classical. | `ai-altered`: the pair colouring is aligned with the library's sequence and order definitions. |
| `ex-infinite-convex-or-concave-subsequence-by-ramsey` | `literature-derived`: the triple-colouring application is standard. | `ai-altered`: divided-difference signs and the telescoping conclusion are exposed. |
| `fs-two-colouring-forces-an-infinite-monochromatic-progression` | `literature-derived`: the false strengthening and its standard alternating-block obstruction come from the cited discussion. | `ai-altered`: the counter-colouring is specified and checked against every infinite progression. |
| `cex-infinite-branching-is-not-enough-for-konig` | `ai-generated`: the decreasing-sequence tree was chosen to isolate finite branching exactly. | `ai-generated`: the level and no-branch checks are direct constructions. |
| `cex-infinite-ramsey-fails-with-infinitely-many-colours` | `ai-altered`: Leader's left-dependent canonical form is repurposed as the finite-colour boundary test. | `ai-generated`: the three-vertex colour clash is checked directly. |
| `ex-all-four-canonical-pair-colouring-types` | `ai-altered`: Leader's four named alternatives are converted into an explicit witness request. | `ai-generated`: simple formulas are supplied and their equality patterns verified. |

### Plane graphs A

| Item | Statement rationale | Proof rationale |
|---|---|---|
| `def-polygonal-arc-and-polygon` | `ai-altered`: Diestel's polygonal conventions are normalized to the existing path definition. | `not-applicable`: this is a definition. |
| `def-plane-region-and-frontier` | `literature-derived`: components of complements and their frontiers are standard plane-topology definitions. | `not-applicable`: this is a definition. |
| `lem-polygonal-ray-general-position` | `ai-altered`: Diestel's ray setup is isolated as a finite avoidance lemma. | `ai-generated`: the forbidden-direction and perturbation argument is supplied explicitly. |
| `lem-polygonal-crossing-parity-is-locally-constant` | `ai-altered`: the parity assertion is extracted from Diestel's Jordan proof. | `ai-altered`: the source crossing argument is decomposed into local moves and parity preservation. |
| `thm-polygonal-jordan-curve` | `literature-derived`: this is Diestel's polygonal Jordan lemma. | `ai-altered`: the ray-parity proof is expanded to cover nonemptiness, connectedness, and frontier. |
| `lem-polygonal-arc-does-not-separate-the-plane` | `literature-derived`: the polygonal-arc complement lemma is stated by Diestel. | `ai-altered`: a thin-neighbourhood polygonal completion reduces the claim to the authored Jordan theorem. |
| `def-plane-graph-face-and-boundary` | `ai-altered`: standard plane-graph and face definitions are specialized to finite simple polygonal drawings. | `not-applicable`: this item fixes the page's embedding convention. |
| `lem-plane-graph-faces-are-finite-with-one-unbounded-face` | `literature-derived`: finiteness and the unique unbounded face are standard plane-graph facts. | `ai-altered`: the proof is rebuilt by successive polygonal edge insertions. |
| `lem-face-containment-under-plane-subgraphs` | `literature-derived`: face containment under deletion is a standard embedding fact. | `ai-altered`: component maximality is written as a direct containment proof. |
| `def-bridge-in-a-graph` | `literature-derived`: the deletion/component definition is standard. | `not-applicable`: this is a definition. |
| `lem-edge-is-a-bridge-iff-it-lies-on-no-cycle` | `literature-derived`: the bridge-cycle equivalence is standard. | `ai-generated`: both directions are reconstructed from path and deletion definitions. |
| `lem-plane-edge-face-incidence` | `literature-derived`: the two-side incidence and bridge criterion follow Diestel. | `ai-altered`: local Jordan separation and the bridge equivalence are combined explicitly. |
| `prop-plane-forest-has-one-face` | `literature-derived`: a plane forest has one face in the standard theory. | `ai-altered`: forest counts and edge-side incidence are used to expose disconnected and null cases. |
| `lem-equal-plane-face-boundaries-force-a-cycle` | `literature-derived`: the equal-boundary obstruction is standard face theory. | `ai-altered`: the minimal closed-walk reduction and Jordan separation are detailed. |
| `prop-face-boundaries-in-two-connected-plane-graphs` | `literature-derived`: facial boundaries in two-connected plane graphs are cycles. | `ai-altered`: repeated-vertex boundary walks are ruled out by a cut-vertex argument. |
| `prop-face-boundaries-in-three-connected-plane-graphs` | `literature-derived`: induced nonseparating facial cycles characterize the three-connected case used here. | `ai-altered`: chords and separating deletions are handled as separate labelled steps. |
| `def-maximal-plane-and-maximally-planar-graph` | `literature-derived`: both maximality notions are standard. | `not-applicable`: this is a definition. |
| `prop-maximal-plane-triangulation-characterisation` | `literature-derived`: maximal plane simple graphs are triangulations under the stated order boundary. | `ai-altered`: both implications and the small-order exclusions are made explicit. |
| `thm-euler-formula-for-connected-plane-graphs` | `literature-derived`: Euler's plane-graph formula is standard. | `ai-altered`: induction on non-tree edges uses the authored face-incidence lemma. |
| `cor-euler-formula-for-disconnected-plane-graphs` | `ai-altered`: the usual component correction is stated with null-graph and isolated-component conventions. | `ai-generated`: components are connected by added polygonal bridges and the counts are tracked. |
| `lem-plane-face-handshake-by-girth` | `literature-derived`: face-length double counting and the girth bound are standard. | `ai-altered`: bridge multiplicity and forest exceptions are recorded directly. |
| `cor-planar-simple-graph-edge-bound` | `literature-derived`: the $3n-6$ planar bound is standard. | `ai-altered`: maximal completion, face counting, and disconnected cases are separated. |
| `cor-triangle-free-planar-edge-bound` | `literature-derived`: the $2n-4$ triangle-free bound is standard. | `ai-altered`: forest and component-joining cases are retained rather than suppressed. |
| `cor-planar-graph-has-low-degree-vertex` | `literature-derived`: the degree-at-most-five consequence is standard. | `ai-altered`: handshake and edge bounds are combined with null and small-order boundaries. |
| `cor-k-five-and-k-three-three-are-nonplanar` | `literature-derived`: both classical nonplanarity conclusions are cited. | `ai-altered`: the two distinct edge inequalities are calculated explicitly. |
| `cor-planar-graphs-have-no-kuratowski-subdivision` | `literature-derived`: subdivisions of either obstruction remain nonplanar. | `ai-altered`: planarity inheritance and suppression are stated in the library's subdivision language. |
| `prop-maximally-planar-edge-characterisation` | `literature-derived`: maximal planarity is characterized by the sharp Euler edge count. | `ai-altered`: maximal completion and equality are used for both directions. |
| `lem-kuratowski-minors-are-topological-minors` | `literature-derived`: for $K_5$ and $K_{3,3}$ the minor and subdivision obstructions coincide. | `ai-altered`: minimal branch trees and degree constraints are expanded from Diestel's argument. |
| `lem-three-connected-graph-has-a-contractible-edge` | `literature-derived`: the contractible-edge lemma is Diestel's standard reduction. | `ai-altered`: the maximal-fragment argument is aligned with the published Whitney-Menger form. |
| `lem-three-connected-kuratowski-free-is-planar` | `literature-derived`: the three-connected lifting lemma follows Diestel's Kuratowski proof. | `ai-altered`: contraction, facial placement, and obstruction cases are exposed separately. |
| `lem-separation-augmentation-for-kuratowski-free-graphs` | `literature-derived`: adding an edge across a small separation is Diestel's augmentation device. | `ai-altered`: both separation orders and obstruction preservation are written out. |
| `lem-edge-maximal-kuratowski-free-is-three-connected` | `literature-derived`: edge-maximal obstruction-free graphs are the standard reduction target. | `ai-altered`: the augmentation induction and planar-side gluing are expanded with direct dependencies. |
| `thm-kuratowski-wagner-planarity-characterisation` | `literature-derived`: the subdivision and minor formulations are the classical theorem. | `ai-altered`: easy direction, maximal supergraph reduction, and obstruction equivalence are composed explicitly. |
| `def-plane-dual-multigraph` | `literature-derived`: face vertices and crossing edges are the standard plane dual definition. | `not-applicable`: this is a definition, including loop and parallel-edge conventions. |
| `thm-plane-dual-exists-and-double-dual-recovers-primal` | `literature-derived`: reciprocal plane duality is stated by Diestel and Erickson. | `ai-altered`: polygonal corridors and the primal-to-double-dual incidence map are constructed explicitly. |
| `thm-six-colour-theorem-for-planar-graphs` | `literature-derived`: the six-colour theorem is the standard low-degree induction. | `ai-altered`: disconnected, isolated, and extension cases are made explicit. |
| `def-kempe-chain` | `literature-derived`: two-colour components and Kempe chains are standard. | `not-applicable`: this is a definition. |
| `lem-kempe-component-colour-swap` | `literature-derived`: safe swapping on a Kempe component is standard. | `ai-altered`: every endpoint-colour case is checked directly. |
| `lem-alternating-kempe-paths-cannot-both-occur` | `ai-altered`: the standard planar Kempe separation fact is isolated at the exact cyclic-neighbour interface. | `ai-altered`: the proof is rebuilt using the authored polygonal Jordan theorem. |
| `thm-five-colour-theorem` | `literature-derived`: this is the classical five-colour theorem. | `ai-altered`: low-degree induction and the alternating Kempe case are integrated with explicit boundaries. |

### Plane graphs B

| Item | Statement rationale | Proof rationale |
|---|---|---|
| `ex-euler-formula-on-a-tree-cycle-and-k-four` | `literature-derived`: these are the standard first checks of Euler's formula. | `ai-altered`: all vertex, edge, and face counts are written out, including the one-vertex tree. |
| `cex-k-four-is-planar-but-not-three-colourable` | `ai-altered`: the familiar $K_4$ observation is framed specifically as the three-colour boundary. | `ai-generated`: an explicit plane embedding and colouring lower bound are checked directly. |
| `ex-petersen-graph-nonplanar-by-kuratowski` | `literature-derived`: Petersen nonplanarity via a Kuratowski obstruction is standard. | `ai-altered`: the subset-labelled deletion and all nine subdivided connections are listed explicitly. |
| `ex-one-planar-graph-two-nonisomorphic-duals` | `literature-derived`: embedding-dependent nonisomorphic duals are standard examples in Bondy-Murty. | `ai-altered`: an asymmetric theta graph with a bridge is constructed and distinguished by dual degree multisets. |
| `ex-five-colouring-by-a-kempe-swap` | `ai-altered`: the general five-colour step is converted into a minimal worked wheel configuration. | `ai-generated`: the singleton Kempe component, swap, and extension colour are computed explicitly. |
| `cex-k-three-three-satisfies-the-planar-edge-bound` | `literature-derived`: $K_{3,3}$ is the standard witness that the Euler edge bound is not sufficient. | `ai-altered`: the inequality and nonplanarity are verified in separate steps. |
| `cex-a-wild-arc-drawing-is-not-a-plane-graph` | `ai-generated`: the oscillating graph arc was selected to test the page's polygonal convention without denying abstract planarity. | `ai-generated`: continuity, injectivity, nonpolygonality, and the straight-edge alternative are all checked directly. |

## 15. Step-5 reconciliation, yield, and boundaries

All 76 manifest ids were authored with their settled kinds, titles, and reading order: Ramsey A has 21 items, Ramsey B has 8 examples, plane graphs A has 40 items, and plane graphs B has 7 examples. Both A pages remain below the 60-item stop boundary. No item was dropped, renamed, or merged during authoring, so every `included` coverage row remains literally true.

The 95 harvested headings now have these dispositions: 69 `included`, 1 `already-published`, 15 `inline`, 7 `deferred`, and 3 `out-of-scope`. The direct included-heading yield is therefore 69 of 95, or 72.6 percent. The 76 authored items exceed the count of distinct source headings because the proof machinery includes normalized definitions, extracted lemmas, corollaries, and boundary examples; conversely, some harvested headings merge into one authored result.

Ten items changed their baseline direct-dependency lists to match the proof actually written:

| Item | Change | Rationale |
|---|---|---|
| `lem-colour-focussing-for-arithmetic-progressions` | Dropped `thm-the-strong-pigeonhole-principle`. | The block-vector proof uses a finite Ramsey witness on identical colour vectors, not pigeonhole directly. |
| `thm-diagonal-ramsey-counting-lower-bound` | Added `lem-integer-part`. | The final strict inequality directly uses the defining floor inequality for $\lfloor2^{k/2}\rfloor$. |
| `thm-van-der-waerden-with-monochromatic-difference` | Dropped `thm-the-strong-pigeonhole-principle`, `thm-product-rule`, and `def-nat-order`. | These are internal to the focusing lemma; the theorem itself directly uses that lemma and induction. |
| `thm-infinite-ramsey-on-the-naturals` | Added `thm-well-ordering-principle`. | The ZF recursion canonically selects least extendable naturals and the least index of an infinite colour class. |
| `lem-polygonal-arc-does-not-separate-the-plane` | Added `def-polygonal-path-and-polygonal-connectedness` and `thm-polygonal-jordan-curve`. | Its fact ledger directly cites polygonal paths, and its thin-neighbourhood completion directly invokes polygonal Jordan separation. |
| `lem-three-connected-kuratowski-free-is-planar` | Added `lem-face-containment-under-plane-subgraphs` and `prop-face-boundaries-in-two-connected-plane-graphs`. | The contraction-lifting step directly places the split vertex using face containment and a facial boundary cycle. |
| `lem-edge-maximal-kuratowski-free-is-three-connected` | Added `lem-three-connected-kuratowski-free-is-planar`, `cor-planar-graphs-have-no-kuratowski-subdivision`, and `lem-kuratowski-minors-are-topological-minors`. | The separation induction directly embeds both sides and excludes the two equivalent obstruction forms. |
| `thm-plane-dual-exists-and-double-dual-recovers-primal` | Added `def-multigraph-loop-and-digraph`. | The construction directly invokes loop and parallel-edge incidence in the dual. |
| `ex-one-planar-graph-two-nonisomorphic-duals` | Added `def-graph-adjacency-incidence-neighbourhood-and-degree`. | The nonisomorphism certificate directly compares dual degree multisets. |
| `ex-euler-formula-on-a-tree-cycle-and-k-four` | Added `thm-forest-edge-component-count`. | The tree check directly uses the exact $n-1$ edge count before substituting in Euler's formula. |

The strict proof-contract scope contains 63 proof-bearing items and 504 standard boundary dispositions. Every case is disposed: 224 are checked in a numbered step or the item statement and 280 are specifically not applicable.

| Boundary | Checked | Not applicable |
|---|---:|---:|
| empty | 10 | 53 |
| zero | 30 | 33 |
| one | 39 | 24 |
| degenerate | 59 | 4 |
| endpoints | 40 | 23 |
| nonempty-choice | 25 | 38 |
| iff-forward | 11 | 52 |
| iff-reverse | 10 | 53 |

## 16. Step-5 validation receipts

Batch-scoped validation is green: all 63 proof-bearing items pass precheck; all 80 owned item/page files pass renderer parsing and delimiter checks; scoped prose has zero errors; content policy checks 76 items with zero errors or warnings; the coverage checklist checks 95 headings with zero errors or warnings; and the strict proof contract checks 63 of 63 items with zero errors or warnings. Dependency-check output filtered against all 76 ids has no batch-6 finding.

The final exact repository-wide receipts are also green. `precheck.mts` checks 2,675 proof-bearing files with zero failures. `depcheck.mjs` reports no cycles, all references resolved, and no draft items on published pages. `rendercheck.mjs` checks 3,689 files with no renderer error. `prosecheck.mjs` has zero errors; its 583 heuristic warnings are repository-wide advisories. The scoped content-policy, coverage, and strict-contract commands each report zero errors and zero warnings. The aggregate gates wrapper was not run, exactly as the dispatch requires. There is no blocker.

## Independent-reader-6 continuity checkpoint — 2026-08-11, step 6a

All 76 assigned items, all 63 proofs/verifications/refutations, all four page files, and the on-disk Statements/Definitions of every cited dependency have been read. The generated-statement probes are complete for `cor-infinite-ramsey-for-dedekind-infinite-sets`, `cex-infinite-branching-is-not-enough-for-konig`, and `cex-a-wild-arc-drawing-is-not-a-plane-graph`; no counterexample was found. Concrete repairs remain to be applied for the false “first exact Ramsey number” title, the missing `k <= N` case in the counting lower bound, two short ZF recursion/countability bridges, several hypothesis-dropping Fact restatements, the peripheral-cycle proof, the undefined separation interface and inflated Menger citation, the four-attachment branch-tree reduction, the edge-maximal planar gluing step, the disconnected Euler face-count sentence, and the dual-example multigraph-isomorphism Fact. Exact findings and severity will be recorded in `research/frontier-10-reader-6.findings.md`. External source URLs could not be independently fetched in this runtime (the web fetch returned no content and sandboxed `curl` had no DNS); source-provenance verification is therefore limited to the durable harvest/notes and on-disk citation text. Exact next action: patch only batch-6 files, reconcile `research/frontier-10-batch-6.proof-contracts.json`, run file-level gates, and write the per-item report.

## Independent-reader-6 completion — 2026-08-11, step 6a

The independent batch-6 read is complete. The required per-item report is `research/frontier-10-reader-6.findings.md`: 76/76 items and 63/63 proof-bearing items are accounted for. It proposes six fatal findings and eight nonfatal findings for Alpha's adjudication. Sixteen batch item files were repaired; no item was added, deleted, renamed, or rehomed, and no page prose changed. The batch manifest, plan, proof contracts, and the newly exposed `limits-of-real-functions` prerequisite were reconciled.

Post-repair scoped receipts are green: precheck 16/16 changed proof-bearing files; rendercheck 16/16; prosecheck zero errors and zero warnings; strict proof contract 63/63 with zero errors and warnings; content policy 76/76 with zero errors and warnings; coverage 95 headings with zero errors and warnings; plan validation exit 0; depcheck exit 0; and item-frontmatter/batch-manifest/plan equality 76/76. External source URLs remained inaccessible in this runtime, so the limitation recorded in the findings file still applies.

## 17. Owner-directed post-step-10 triangulation addition

The owner-directed addition is `lem-plane-triangulation-is-connected`: every
plane triangulation with at least three vertices is connected. The statement is
`ai-altered` because it combines the exact cited Diestel chain—Proposition
4.2.8 (triangulations and maximal plane graphs), Proposition 4.4.1 (maximal
plane graphs are maximally planar), and Corollary 4.4.7 (maximal planar graphs
of order at least four are three-connected)—with the explicitly checked
three-vertex endpoint. The proof is `ai-generated`: it reconstructs the
owner-requested face-boundary argument from the page's component, region,
polygonal-connectivity, and edge-face-incidence toolkit rather than copying a
source proof.

The contradiction proof chooses one component $C$ and the union $H$ of the
others, places the connected drawing of $C$ in a face $h$ of $H$, and follows a
polygonal path in $h$ from a local boundary sector at $H$ to its first contact
with $C$. The resulting face of the full graph has a boundary subgraph meeting
two components and is therefore disconnected, contradicting that a
triangulation bounds every face by a triangle. The proof explicitly disposes
of the order-three endpoint, isolated or one-edge component degeneracies,
nonempty finite choices, and both bounded and unbounded faces. Its remaining
five standard proof-contract boundaries are specifically not applicable.

The two consumers were synchronized. In
`cor-planar-simple-graph-edge-bound`, the equality clause now says that every
plane triangulation with at least three vertices has equality; [L5] cites the
new connectedness lemma, and proof step 3.1 uses it before Euler's formula. In
`prop-maximally-planar-edge-characterisation`, [L1] now quotes that broadened
source statement exactly. Their existing provenance rationales remain true:
the edge bound and maximal-planarity characterization are
`literature-derived`, while their adapted proofs are `ai-altered`.

The batch now contains 77 items, with 41 items on plane graphs A, so the
60-item split boundary is not approached. No item was dropped, renamed, or
merged. The 97 harvested headings have 70 `included`, 1
`already-published`, 16 `inline`, 7 `deferred`, and 3 `out-of-scope`
dispositions. Direct included-heading yield is 70 of 97, or 72.2 percent; the
new lemma has both an included canonical row and a real inline Diestel
Corollary 4.4.7 source row. The strict proof-contract scope now contains 64
proof-bearing items and 512 standard boundary dispositions.

Post-addition validation is green. Repository-wide precheck passes 2,677
proof-bearing files; dependency checking covers 3,481 items on 210 pages with
no cycles, unresolved references, or draft items on published pages; and
rendercheck passes 3,691 files. The scoped content-policy check passes all 77
items, the coverage checklist passes all 97 harvested rows, and the strict
proof contract passes 64 of 64 items, each with zero errors and zero warnings.
The aggregate gates wrapper was not run, as directed. There is no blocker.
