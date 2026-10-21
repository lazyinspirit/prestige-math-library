---
id: def-knot-floer-cobordism-map
kind: definition
title: "The decorated knot Floer cobordism map"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-admissible-pointed-heegaard-floer-data
  - def-countable-choice
  - def-colored-multipointed-heegaard-module-for-link-cobordisms
  - def-decorated-link-cobordism-and-floer-target
  - def-given-spin-and-spinc-structures-and-associated-spinor-bundles
  - thm-strictly-admissible-triple-free-polygons-have-full-marked-low-dimensional-counts
  - lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The analytic construction assumes AC_omega through the regularity and compactness supplier. Each map is indexed by one Spin-c structure; the composition law sums over extensions only when stated."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ian Zemke, Link cobordisms and functoriality in link Floer homology, §§1–9 and 12"
      url: "https://arxiv.org/pdf/1610.05207v3"
      locator: "PDF pp.1–68 and 85–97; Definition 2.1, Theorems A and B, elementary handle/band/quasi-stabilization maps, and the decomposition construction"
    - title: "Andras Juhasz, Cobordisms of sutured manifolds and the functoriality of link Floer homology, §§8 and 11.3"
      url: "https://arxiv.org/pdf/0910.4382v5"
      locator: "PDF pp.43–54 and 77–79; hat link Floer cobordism maps and their composition scope"
---

## Definition

Let $(W,\Sigma,\mathcal A)$ be a decorated knot cobordism from $(Y_0,K_0)$ to $(Y_1,K_1)$, and fix $\mathfrak s\in\operatorname{Spin}^c(W)$. Choose a parametrized Kirby decomposition of $W$, together with admissible Heegaard data and regular almost-complex structures for its elementary pieces. Intermediate pieces may contain links with several components or more than one pair of basepoints. Use the colored multipointed modules with $g+n-1$ attaching curves in $\operatorname{Sym}^{g+n-1}(S)$, and specialize all $w$-colors to $U$ and all $z$-colors to $V$; the displayed doubly pointed formula is the $n=1$ case. For a piece represented by a subordinate Heegaard triple $(S,\boldsymbol\alpha,\boldsymbol\beta,\boldsymbol\gamma,w,z)$, its triangle-count map has the form
$$
\mathbf x\longmapsto \sum_{\mathbf y}\ \sum_{\substack{\phi\in\pi_2(\mathbf x,\Theta^+_{\boldsymbol\beta\boldsymbol\gamma},\mathbf y)\\ \mu(\phi)=0,\ \mathfrak s(\phi)=\mathfrak s}} \#_2\bigl(\mathcal M(\phi)\bigr)U^{n_w(\phi)}V^{n_z(\phi)}\mathbf y,
$$
where $\Theta^+_{\boldsymbol\beta\boldsymbol\gamma}$ denotes a chosen cycle representative of the distinguished top-degree homology class of the appropriate standard auxiliary Heegaard pair, $\mathfrak s(\phi)$ is the Spin-c structure determined by the triangle class, and the other symbols and coefficient ring are as in the two-color target definition. For a chosen auxiliary cycle with finite support $\Theta=\sum_j p_j\theta_j$, with $p_j\in\mathbb F_2[U,V]$ and basis generators $\theta_j$, interpret the displayed formula by $\mathbb F_2[U,V]$-linearity as $\sum_j p_j F(\mathbf x,\theta_j)$ (or $\sum_j p_j F(\theta_j,\mathbf x)$ for the alpha-triple convention). The elementary 2-handle maps and band maps are triangle-count maps; the 0-, 1-, 3-, and 4-handle maps use the corresponding stabilization or destabilization maps; cylindrical changes of the dividing set use basepoint and quasi-stabilization maps. Compose the elementary maps in the chosen decomposition to obtain a representative
$$
\widetilde F_{W,\Sigma,\mathcal A,\mathfrak s,\mathcal K}: CFL^-_{UV}(Y_0,K_0,\mathfrak s|_{Y_0})\longrightarrow CFL^-_{UV}(Y_1,K_1,\mathfrak s|_{Y_1}).
$$
The subscript $\mathcal K$ records the chosen decomposition and auxiliary data. This is one map for one Spin-c structure; maps for different Spin-c structures are not summed unless a sum is explicitly specified. Independence from $\mathcal K$, regular data, and parametrization is a separate naturality assertion.

## Definition references

[[def-decorated-link-cobordism-and-floer-target|Decorated surface, two-color target, and filtration]]

[[def-admissible-pointed-heegaard-floer-data|Admissible pointed Heegaard data]]

[[def-colored-multipointed-heegaard-module-for-link-cobordisms|The necessary intermediate multi-based link modules and color specialization]]

[[def-countable-choice|Countable choice]]

[[def-given-spin-and-spinc-structures-and-associated-spinor-bundles|Spin-c structures and their restrictions]]

[Zemke, *Link cobordisms and functoriality in link Floer homology*, §§1–9 and 12](https://arxiv.org/pdf/1610.05207v3)

[Juhasz, *Cobordisms of sutured manifolds and the functoriality of link Floer homology*, §§8 and 11.3](https://arxiv.org/pdf/0910.4382v5)

## Facts & Assumptions

**Given:** The decorated knot cobordism $(W,\Sigma,\mathcal A)$, fixed $\mathfrak s\in\operatorname{Spin}^c(W)$, chosen decomposition and auxiliary data of the Definition, with its stated Countable Choice assumptions.

[F1] **External construction input.** Zemke, *Link cobordisms and functoriality in link Floer homology*, arXiv:1610.05207v3, Theorem A (p.3), Definitions 2.1–2.4 (pp.7–8), Proposition 3.5 and §3.4 (p.14), and §12 (pp.85–97), constructs the fixed-Spin-c colored maps for the full decorated category, as filtered equivariant chain maps on transitive chain homotopy types. Boundary parametrizations are retained (Remark 2.6, p.8). Components need not meet both ends: §12.5, Definition 12.8, Lemma 12.9 and equation (55) (pp.95–97) supply puncturing and the 0/4-handle maps. This is an explicitly imported established theorem, not a reconstruction from the local triangle lemma. ([Source](https://arxiv.org/pdf/1610.05207v3))

[F2] **External elementary-input convention.** For a two-handle use the standard auxiliary top homology class in Zemke §5. For band surgery the actual inputs are the classes $\Theta^w$ for a type-z band and $\Theta^z$ for a type-w band (§§6.2–6.3, pp.46–47; auxiliary unlink calculation Lemmas 3.7 and 6.4). Choose cycle representatives. Changing a representative by a boundary changes the triangle map by filtered equivariant chain homotopy (§6.2, p.46). There is no canonical chain generator on arbitrary triples. The displayed formula is the beta-triple convention; alpha-triples insert the auxiliary cycle in the other tensor factor. The dividing set chooses the band type. ([Source](https://arxiv.org/pdf/1610.05207v3))

[F3] **Two-color scope.** Color every component of $\Sigma_w$ by $U$ and every component of $\Sigma_z$ by $V$. This is a coloring in Definition 2.3 and induces exactly the given endpoint coloring. Remark 2.14 (p.10) gives zero curvature for this specialization, including intermediate links; §3.4 gives the colored polynomial modules and variable-power filtration.

[F4] **Countable-choice specialization of the imported construction.** Use the retained Countable-Choice theorem on full-marked low-dimensional polygons at its stated coherent-relative-face scope, with finite balanced diagrams, fixed labels and all nonnegative marked multiplicities. It supplies regular perturbations, finite counts, compact one-manifolds and gluing for the disk/polygon boundary identities used here. Its permitted small pointed curve choices retain the Spin-c labels and admissibility. The general naturality/move identities, top-input calculations and geometric decomposition theorems remain the explicitly external parts of [F1]–[F2], not conclusions of polygon analysis alone. Their remaining choices are finite topological data and countably indexed analytic families for each specified input/comparison, as detailed below. ([[thm-strictly-admissible-triple-free-polygons-have-full-marked-low-dimensional-counts]], [[lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing]])

## Well-definedness of the construction

0.1 **Choice scope.** Fix the actual compact smooth cobordism, decoration, Spin-c structure and, for a comparison, the two actual decompositions. A compact smooth input has finite atlas/handle data. A Morse decomposition has finitely many critical points; a generic Cerf comparison has finitely many exceptional times (Zemke Lemma 11.18, p.80, and Theorem 11.5, pp.74 and 84–85). Choosing a finite list of charts, gradient-like fields, band neighborhoods, puncturing balls and standard auxiliary classes uses finite choice only. No choice of one decomposition for every cobordism is required: existence and pairwise comparison are quantified separately for arbitrary given inputs. [F1, F2, given, specialize]

0.2 For that finite list of diagrams, the homotopy and periodic-domain data are countably indexed: use the finite-cell models of the compact manifolds and finite products of circles, and integer words in their finite attaching data; Spin-c extensions form a subset of a finitely generated integral cohomology torsor. Integer degrees, multiplicities, polygon types and neck lengths in $\mathbb N$ are countable indices as well. The count theorem [F4] supplies coherent perturbations relative to faces and fixed ends, rather than making independent choices at every real parameter value. Model counts and the finite move identities of [F1] use such zero- and one-dimensional polygon families; the elementary top classes in [F2] are algebraic classes on specified standard diagrams. A cycle representative, if needed, may be selected as the first representative in the explicit enumeration of finite polynomial chains over the countable ring. Nonempty single choices and finite choices require no additional axiom; countably many choices are covered by the assumed Countable Choice. [F1, F2, F4, step 0.1, construct]

0.3 The geometric generic functions and comparison families can be chosen in the separable smooth spaces on those finitely many compact charts, with their countable derivative seminorms. Their residual conditions are indexed by countable jet charts/exhaustions, the finite singularity types and the countable curve classes; the analytic regularity choices are already furnished by [F4]. For the geometric Baire choices one may recursively select the first basic ball whose closure lies in the preceding ball and in the next dense open set, with diameters tending to zero. Completeness supplies the limit, so this step requires no choice over an uncountable set of functions. Source model relations are imported as finite geometric/count identities, with these actual CC-regular counts; their use does not require a well-ordering of all diagrams or a full-Choice selection of a global transitive system. Consequently the external proof specializes to the declared CC setting. This is a bounded choice inventory of its use here; it is not a claim that the publication itself discusses foundational optimality. [F1, F2, F4, step 0.1, step 0.2, construct]

1.1 The dividing surface and boundary data meet the source category in [F1]: basepoints alternate, the dividing set separates the two regions, every three-manifold component meets the link, and every four-manifold component meets the divided surface. Closed dividing curves are allowed by its properly embedded one-manifold definition. The two-color assignment in [F3] is compatible on every elementary piece, including multicomponent and multiply based intermediate links. Its curvature is zero, so the imported curved maps are genuine maps of complexes over $\mathbb F_2[U,V]$. [F1, F3, given, specialize]

1.2 Use the elementary maps of [F1] for the chosen parametrized Kirby decomposition, with [F2]'s actual auxiliary cycles and the fixed restricted Spin-c labels. Their finite polynomial counts, chain-map property and compatibility with the natural Heegaard transition maps are supplied by that external construction. Thus their composition is the displayed representative. If a component has an empty incoming or outgoing end, apply [F1]'s standard puncturing prescription before composing, not an undefined intermediate empty-link Heegaard diagram. No graph-TQFT reduction or hat-only construction is substituted for this two-variable map. [F1, F2, F3, construct]

1.3 The distinguished class notation in the formula never selects a canonical cycle on every diagram: choose a representative on the actual standard auxiliary pair and carry it by the transition maps. Its boundary ambiguity is exactly the homotopy in [F2]. The local analytic triangle theorem supplies its own weighted bilinear identity, but the existence and correctness of the required elementary inputs come from [F1]–[F2]. Independence of all chosen decomposition data and the Spin-c extension sum are established in the separate naturality lemma by the external Theorems A and B. [F1, F2, step 1.2, conclude] ∎
