---
id: lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing
kind: lemma
title: "Regularity, compactness, and gluing for decorated knot Floer triangles"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-admissible-pointed-heegaard-floer-data
  - def-countable-choice
  - lem-weighted-moduli-boundary-counts-give-floer-chain-identities
  - def-knot-floer-cobordism-map
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - lem-pointed-transverse-multidiagrams-admit-small-triple-free-curve-representatives
  - lem-heegaard-polygon-spin-c-difference-is-the-capped-periodic-domain
  - lem-strong-polygon-admissibility-bounds-indices-and-positive-domains
  - thm-strictly-admissible-triple-free-polygons-have-full-marked-low-dimensional-counts
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assumes AC_omega for countable generic-regularity choices across the pointed triangle classes."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ian Zemke, Link cobordisms and functoriality in link Floer homology, §§3 and 5–9"
      url: "https://arxiv.org/pdf/1610.05207v3"
      locator: "PDF pp.11–68; admissible colored diagrams, triangle maps, basepoint multiplicities, and algebraic relations used by the cobordism construction"
    - title: "Peter S. Ozsvath and Zoltan Szabo, Holomorphic disks and topological invariants for closed three-manifolds, §§3.2–3.8"
      url: "https://arxiv.org/pdf/math/0101206"
      locator: "Printed pp.19–33; Fredholm regularity, compactness, index-two boundary strata, and gluing for disk moduli spaces"
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Grid Homology for Knots and Links, Chapter 16"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
      locator: "Printed pp.325–338; pointed disk counts and the analytic boundary of the grid comparison"
---

## Statement

Assume countable choice. Let $(S,\boldsymbol\alpha,\boldsymbol\beta,\boldsymbol\gamma,w,z)$ be a strictly strongly admissible pointed Heegaard triple for a decorated knot cobordism, with the strong condition normalized at ALL $w$ marks. Fix one Spin-c structure $\mathfrak s$ and nonnegative $w,z$-multiplicities. In positive symmetric rank $m=h+k-1>0$, among the auxiliary Heegaard data first choose an arbitrarily small pointed Hamiltonian representative with no common intersection of three attaching families, following the pair generators and transporting the actual Spin-c label and strict admissibility. Such positive-rank representatives exist. Fix that representative; this is an explicit curve choice, not a claim that varying the almost-complex tensor alone regularizes constant triangles on the original arbitrary fixed triple.

At rank $m=0$, keep the original empty attaching systems: the target is one point and no triple-torus exclusion is imposed. Its unique constant triangle, when its assigned Spin-c label and zero marked-degree vectors match the specified ones, is regular of index zero and contributes one; all other specified-label or positive-degree sets are empty. The fixed index-one and universal index-minus-one spaces are empty, and a matching one-parameter family is the parameter interval.

In positive rank choose regular end data in the open dense set of allowed genuine constant-collar paths described in the proof. For generic fixed source-dependent almost-complex data compatible with those ends, the Maslov-index-zero triangle moduli spaces used in the triangle-count map are regular zero-manifolds and finite. For generic one-parameter families with those fixed regular ends, the universal triangle moduli spaces are regular with the parameter included in the expected dimension; slice counts are taken at regular parameter values. The compactified one-dimensional Maslov-index-one triangle spaces have precisely the broken triangle/strip strata, with actual gluing collars. In these dimensions no nonconstant one-torus boundary degeneration is allowed: its index contribution is at least two and the remaining triangle would have negative count dimension. In a one-parameter family the compactified universal index-zero spaces additionally have the two parameter-endpoint strata; the zero-dimensional universal index-minus-one spaces define the homotopy terms.

The mod-two boundary counts give the weighted bilinear triangle chain-map equation and its chain homotopy. Inserting an actual intermediate cycle gives the corresponding one-input chain-map equation. All nonnegative marked multiplicities and the fixed Spin-c extension are retained, including intermediate closed three-manifolds beyond $S^3$ and multiple mark pairs. No additional ends arise from sphere bubbling, escape through nonzero periodic domains or uncontrolled marked-point multiplicities. This analytic assertion does not itself establish that a named top generator is a cycle or prove invariance under changing the chosen attaching curves.

## Statement references

[[def-admissible-pointed-heegaard-floer-data|Pointed Heegaard data and admissibility]]

[[def-knot-floer-cobordism-map|The triangle-count map and its Spin-c indexing]]

[[lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing|The disk-analysis supplier and its stated scope]]

[[lem-weighted-moduli-boundary-counts-give-floer-chain-identities|The finite weighted boundary-count assembly, conditional on the actual analytic boundary theorem]]

[Zemke, *Link cobordisms and functoriality in link Floer homology*, §§3 and 5–9](https://arxiv.org/pdf/1610.05207v3)

[Ozsvath and Szabo, *Holomorphic disks and topological invariants for closed three-manifolds*, §§3.2–3.8](https://arxiv.org/pdf/math/0101206)

[Ozsvath, Stipsicz, and Szabo, *Grid Homology for Knots and Links*, Chapter 16](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the actual strictly strongly admissible balanced triple, fixed Spin-c extension and marked multiplicities, and the auxiliary curve and end choices specified in the Statement.

[F1] In positive rank, small pointed Hamiltonian representatives avoiding triple torus intersections exist, with pair generators followed without births, an integral swept-annulus transport of domains and an actual smooth source-dependent transport of polygon map spaces. This uses no global symmetric power of a nonholomorphic surface map. ([[lem-pointed-transverse-multidiagrams-admit-small-triple-free-curve-representatives]])

[F2] The actual finite Morse Spin-c construction, capped-domain difference, attaching-curve collar transport and strict positive-domain bounds are proved. The collar transport carries the lift including torsion and preserves the Chern functional and all old admissibility witnesses. ([[lem-heegaard-polygon-spin-c-difference-is-the-capped-periodic-domain]], [[lem-strong-polygon-admissibility-bounds-indices-and-positive-domains]])

[F3] Actual full-marked low-dimensional polygon analysis proves the open dense good end choices, source-dependent universal transversality, finite counts, index budgets, compact one-manifold boundaries and exhaustive gluing, on general balanced intermediate three-manifolds. Its proof includes the finite lower-index band and excludes all nonconstant nonpositive-index strips before analyzing limiting levels. ([[thm-strictly-admissible-triple-free-polygons-have-full-marked-low-dimensional-counts]])

[F4] The two-color map convention composes actual elementary maps and inserts the specified intermediate top input. Independence of the decomposition and the proof that each required input is a cycle are separate construction duties; neither is inferred from generic regularity. ([[def-knot-floer-cobordism-map]])

## Proof

1.1 Treat rank zero directly. The target and all empty product tori are one point. The fixed-map operator is the zero map from the zero section space to the zero forcing space; it is onto of index zero. The three-marked source has no conformal parameter or automorphism. Hence its unique map is a regular isolated triangle with all marked degrees zero, in its assigned constant-class Spin-c extension. With another prescribed label or a nonzero degree vector the relevant set is empty. A fixed index-one triangle or universal index-minus-one triangle cannot occur. A matching one-parameter family is exactly its compact parameter interval, with its two identical endpoint counts; there are no nonconstant strips, spheres or boundary disks. Thus its differential is zero and its triangle and parameter-boundary identities hold directly. No strip translation is divided out and no empty tuple is claimed to supply a constituent surface point. [given, construct, algebra]

1.2 Now suppose that $m>0$ and apply [F1] with the marked points and one witness in every original region protected. The resulting representative has no triple torus intersection and has the same followed pair generators. [F2]'s actual collar extension carries the compression disks and Morse data, identifies the actual Spin-c lift and capped classes, and preserves every old strict witness coefficient under the swept-annulus lattice isomorphism. Thus the new triple has the same required strict admissibility and Spin-c indexing. Its polygon spaces represent exactly the transported literal continuous classes, not classes modulo a sphere or fundamental-group action. A constant triangle would lie in all three tori, so none occurs. This explicitly permitted auxiliary curve choice is necessary: at a constant triangle the almost-complex parameter derivative vanishes because $du=0$, so no J-only universal argument can be substituted for it. [F1, F2, given, construct, algebra]

2.1 Apply [F3] to this actual triple and its restricted pair sectors. The geometric strict-domain theorem first supplies a finite lower strip index and finite nonnegative domains in every upper-index band. Its actual auxiliary all-index regular path and bubble budget then produce the open dense good genuine-collar end data with no nonconstant index at most zero and index-one regularity. Hence the ensuing polygon limits have the required regular strip levels; a claim of index-one regularity alone would not justify that conclusion. The source-local Hilbert perturbations give actual fixed-data and one-parameter universal transversality at every nonconstant triangle, preserving the protected divisors, tori and exact product-angle end charts. There are no constant triangles by step1.2. [F2, F3, step 1.2, construct, algebra]

3.1 A triangle has three marked ends and no conformal modulus or translation action. Its fixed count index is therefore $\mu$, and a one-parameter universal count has index $\mu+1$. The domain bounds in [F2] and actual domain-area inequality in [F3] give one energy bound for each required low-dimensional set, across all its literal classes and all nonnegative degree vectors. Every limiting nonconstant strip has positive index. Every nonconstant disk bubble contributes at least two, every sphere at least $2k$, and every regular triangle vertex has nonnegative count dimension. The unconditional determinant index budget of [F3] thus excludes all bubbles in count dimensions zero and one. The only broken one-dimensional ends have one rigid triangle and one rigid strip. The same calculation with the family parameter counted ONCE gives rigid universal index-minus-one triangles and the stated universal index-zero ends. This retains $k=1$ and general intermediate $Y$; it does not borrow a knot-in-$S^3$ disk theorem outside its scope. [F2, F3, step 2.1, algebra]

4.1 The actual product-chart, correction and exhaustion proof in [F3] supplies exactly one collar for every such compatible broken pair. Its global tail estimate promotes compact-core convergence to the true Sobolev chart, so a rigid total set is compact discrete and finite under Countable Choice. Its explicit Hausdorff collar compactification of a one-dimensional space is a compact one-manifold with finite boundary. Degree vectors and the actual total Spin-c structure are carried by each neck smoothing; restricting either these labels or an actual class gives the corresponding open-and-closed part. Thus neither multiple classes with the same domain nor the Spin-c extension orbit creates a missing or an extra end. [F2, F3, step 2.1, step 3.1, construct, algebra]

5.1 Count the boundary of this actual compact one-manifold over $\mathbb F_2$. Writing $F$ for the bilinear triangle count, the strip breaks give $dF+F(d\otimes1)+F(1\otimes d)=0$. The marked vectors add at each actual gluing, so the component weights multiply, with every $w,z$ exponent retained. For a fixed-end one-parameter family its universal one-manifold also has the two parameter endpoints; the universal index-minus-one counts $H$ give $F_1+F_0=dH+H(d\otimes1)+H(1\otimes d)$. These are finite weighted equations, also after specializing every $w$ color to $U$ and every $z$ color to $V$. If the intermediate input $\Theta$ is an actual cycle, substituting it removes the $F(1\otimes d)$ term and gives the required one-input chain map and homotopy. Together with the direct point model in step1.1, this proves exactly the analytic identities; [F4]'s independent top-cycle, elementary-map and movie-invariance duties have not been assumed proved by this calculation. [F2, F3, F4, step 1.1, step 3.1, step 4.1, algebra] ∎
