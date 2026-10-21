---
id: lem-kneser-haken-finiteness-for-incompressible-tori
kind: lemma
title: "Kneser–Haken finiteness for incompressible tori"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-incompressibility-seifert-fibration-and-jsj-system
  - lem-relative-transversality-for-embedded-surfaces
  - thm-parametric-transversality
  - def-countable-choice
  - lem-smooth-incompressible-tori-admit-normal-position-in-a-compatible-triangulation
  - lem-rectangular-normal-cut-components-are-interval-bundles
  - lem-connected-complement-surfaces-have-independent-mod-two-homology-classes
  - lem-haken-torus-bound-for-a-supplied-compatible-smooth-triangulation
  - thm-simplicial-and-singular-homology-agree-for-simplicial-complexes
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The finite-position and isotopy steps use countable choice through relative transversality; the finite combinatorial bound itself is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "Proposition 1.7 and Corollary 1.8, printed pp.11–13"
    - title: "Ryan Budney, JSJ-decompositions of knot and link complements in the 3-sphere"
      url: "https://arxiv.org/pdf/math/0506523"
      locator: "§1, finiteness and minimality of the torus system, PDF pp.2–3"
---

## Statement

Assume countable choice. Let $M$ be a compact connected irreducible orientable smooth $3$-manifold with nonempty boundary, and fix a finite compatible whole-star smooth manifold triangulation of $M$ with $t$ triangular faces. If $\mathcal T$ is any finite family of pairwise disjoint, two-sided, incompressible smoothly embedded tori in $\operatorname{int}M$ such that no component obtained by cutting $M$ along $\mathcal T$ is homeomorphic to $T^2\times[0,1]$, then
$$
|\mathcal T|\le 4t+\dim_{\mathbb Z_2}H_2(M;\mathbb Z_2)-1.
$$
Consequently, any iterative process that cuts along tori and for which every finite stage satisfies this no-product condition terminates after finitely many cuts.

## Statement references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*, Proposition 1.7 and Corollary 1.8](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Ryan Budney, *JSJ-decompositions of knot and link complements in the 3-sphere*](https://arxiv.org/pdf/math/0506523)

## Facts & Assumptions

**Given:** Countable choice, a compact connected irreducible orientable smooth three-manifold $M$ with nonempty boundary, the fixed finite compatible triangulation with $t$ triangular faces, and the finite torus family in the Statement. Here compatible triangulation is used in the original smooth-manifold sense required by the smooth-strata transversality argument: its simplex maps and whole-star manifold charts are compatible with the given smooth structure. No new assertion for an arbitrary TOP marking unrelated to that structure is inferred.

[A1] Countable choice is [[def-countable-choice]].

[F1] Incompressibility, irreducibility and a product cut component have the given conventions. [[def-incompressibility-seifert-fibration-and-jsj-system]]

[F2] For this supplied compatible smooth triangulation, a finite incompressible smooth torus family has simultaneous smooth normal position. The actual cut tetrahedra and normal face disks retain their marked ball and rectangle parameters. [[lem-smooth-incompressible-tori-admit-normal-position-in-a-compatible-triangulation]]

[F3] A rectangular-only cut component with those actual parameters is an interval bundle. If it is not $T^2\times I$, it has a compact one-sided locally flat core whose removal leaves the component connected. [[lem-rectangular-normal-cut-components-are-interval-bundles]]

[F4] In a connected boundaryless three-manifold, disjoint compact locally flat closed surfaces with connected complement have independent mod-two homology classes, including one-sided surfaces. [[lem-connected-complement-surfaces-have-independent-mod-two-homology-classes]]

[F5] The accepted Haken bound proof constructs the finite normal face-cell and rectangle parameters and the finite inward collar push, and identifies finite simplicial and singular homology. These finite constructions and their declared countable-choice hypothesis apply to the exact same supplied triangulation here. [[lem-haken-torus-bound-for-a-supplied-compatible-smooth-triangulation]], Proof1.1 and4.1; [[thm-simplicial-and-singular-homology-agree-for-simplicial-complexes]]

## Proof

1.1 Apply [F2] to the given finite torus family for the very triangulation in the Statement. Its smooth ambient isotopy retains incompressibility, all cut-component homeomorphism types and the no-product condition. It puts the family into actual normal disks in each parametrized tetrahedron and disjoint arcs in each triangular face, joining distinct edges. This invokes the accepted marked normal-position construction rather than treating a surgery that changes a torus as an isotopy. [A1, F1, F2, given, construct]

2.1 In each triangular face group the arcs by the pair of distinct edges they join. Within each of the three types they occur in a parallel stack. Between consecutive arcs of a stack is a rectangle, and collapsing those strips leaves at most one arc of each type, hence at most four complementary regions. Every nonrectangular region survives distinctly in this collapsed picture, so there are at most $4t$ such regions over all faces. The successive finite face-disk cuts and the marked rectangle product maps are supplied by [F2] and [F5]; no unparametrized polygon or missing side matching is being assumed. [F2, F5, step 1.1, construct, algebra]

3.1 Let $m$ be the number of cut components meeting all faces only in rectangles. By [F3] each is an interval bundle. The torus-product possibility is excluded by hypothesis. Thus they have disjoint one-sided compact locally flat cores $Q_1,\ldots,Q_m$, and removing each core leaves its component connected. No ambient triangulation or smoothness of these cores is required. [F1, F3, step 2.1, construct]

4.1 Form the connected finite dual graph of all torus cuts, allowing loops, and choose a spanning tree. Let $k$ be the number of edges outside that tree. The corresponding $k$ tori, together with all the $Q_j$, have connected complement: remove the cores in the fully cut pieces, which remain connected by step 3.1, and glue back the tree faces. A tree joins all the pieces and cannot create a new disconnection. Pass to $\operatorname{Int}M$ by the finite inward collar push in [F5], chosen disjoint from these compact surfaces; its homotopy fixes them and proves that the interior inclusion induces a homology isomorphism, while their complement remains connected. Now [F4] gives $k+m$ independent mod-two classes, so $k+m\le\beta$, where $\beta=\dim_{\mathbb F_2}H_2(M;\mathbb F_2)$. This number is finite because the supplied triangulation is finite and its simplicial homology computes singular homology. [F3, F4, F5, step 3.1, construct, algebra]

5.1 Write $n=|\mathcal T|$ and let $v$ be the number of cut components. The dual graph has $n$ edges, $v$ vertices and $k=n-v+1$ non-tree edges; thus $v=n-k+1$. Each component other than the $m$ rectangular-only ones contains a nonrectangular face region. A physical region belongs to just one cut component: its two tetrahedral sides are glued through its interior, or it is a boundary face with only one incident side. Distinct components therefore use distinct such regions, and step 2.1 gives $v\le m+4t$. [step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 Combining these inequalities yields $n+1\le k+m+4t\le\beta+4t$, which is exactly the stated bound. It also holds for the empty family. If an accumulating cutting process continued past $4t+\beta-1$ cuts while each finite accumulated family retained the stated hypotheses, that stage would contradict the same bound for the fixed original triangulation. Thus no such process continues indefinitely. The proof retains the original countable-choice and smooth-compatible triangulation scope; it does not postulate an arbitrary unrelated TOP marking. [step 4.1, step 5.1, algebra] ∎

