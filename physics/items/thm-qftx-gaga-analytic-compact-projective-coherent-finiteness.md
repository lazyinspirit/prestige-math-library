---
id: thm-qftx-gaga-analytic-compact-projective-coherent-finiteness
kind: theorem
title: Finite-dimensional coherent cohomology on compact projective space
status: "published"
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-complex-projective-space-and-holomorphic-charts
  - def-qftx-analytic-coherent-module
  - def-qftx-gaga-coherent-section-topology
  - def-qftx-gaga-frechet-space
  - thm-qftx-gaga-analytic-oka-coherence
  - thm-qftx-gaga-analytic-local-coherent-polydisc-acyclicity
  - thm-long-exact-sequence-sheaf-cohomology
  - thm-artin-rees-lemma
  - thm-krull-intersection-theorem
  - thm-cauchy-estimates-on-a-polydisc
  - thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables
  - cor-ascoli-arzela-for-compact-metric-domains
  - thm-leray-acyclic-cover-theorem
  - thm-cech-to-sheaf-cohomology-comparison
  - def-cech-cochain-complex-open-cover
  - lem-cech-differential-squares-zero
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - rem-complex-euclidean-space-dictionary
  - cor-dolbeault-vanishing-pseudoconvex-domain
  - lem-qftx-gaga-pseudoconvex-intersection-acyclicity
  - lem-qftx-gaga-coherent-section-topology-well-defined
  - lem-qftx-gaga-coherent-section-restriction-compact
  - lem-qftx-gaga-frechet-complex-compact-finiteness
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-complex-projective-space-and-holomorphic-charts: mathematical-premise
  def-qftx-analytic-coherent-module: mathematical-premise
  def-qftx-gaga-coherent-section-topology: mathematical-premise
  def-qftx-gaga-frechet-space: mathematical-premise
  thm-qftx-gaga-analytic-oka-coherence: mathematical-premise
  thm-qftx-gaga-analytic-local-coherent-polydisc-acyclicity: mathematical-premise
  thm-long-exact-sequence-sheaf-cohomology: mathematical-premise
  thm-artin-rees-lemma: mathematical-premise
  thm-krull-intersection-theorem: mathematical-premise
  thm-cauchy-estimates-on-a-polydisc: mathematical-premise
  thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables: mathematical-premise
  cor-ascoli-arzela-for-compact-metric-domains: mathematical-premise
  thm-leray-acyclic-cover-theorem: mathematical-premise
  thm-cech-to-sheaf-cohomology-comparison: mathematical-premise
  def-cech-cochain-complex-open-cover: mathematical-premise
  lem-cech-differential-squares-zero: mathematical-premise
  thm-euclidean-heine-borel-pseudocompactness-and-extreme-values: mathematical-premise
  rem-complex-euclidean-space-dictionary: mathematical-premise
  cor-dolbeault-vanishing-pseudoconvex-domain: mathematical-premise
  lem-qftx-gaga-pseudoconvex-intersection-acyclicity: mathematical-premise
  lem-qftx-gaga-coherent-section-topology-well-defined: mathematical-premise
  lem-qftx-gaga-coherent-section-restriction-compact: mathematical-premise
  lem-qftx-gaga-frechet-complex-compact-finiteness: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Pierre Demailly, Complex Analytic and Differential Geometry
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
      locator: "Chapter IX §1.B, Theorems 1.8–1.9, printed pp. 406–408; §4.B–4.D, Lemma 4.4, Proposition 4.7 and Theorem 4.8, printed pp. 421–424."
    - title: Henri Cartan, Un théorème de finitude
      url: https://www.numdam.org/item/SHC_1953-1954__6__A17_0.pdf
      locator: "Exposé 17, pp. 1–11: complete compact-complex finiteness argument, Fréchet quotient topology, compact restriction, Leray comparison, and Schwartz perturbation."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
page: qftx-gaga-compact-coherent-finiteness
category: quantum-field-theory-mathematics
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
---

## Statement

Assume full AC. For $0\le r\le3$, let $P^r(\mathbb C)$ be the space of complex lines in $\mathbb C^{r+1}$ with its usual complex-manifold structure, and let $\mathcal F$ be a coherent analytic module over its holomorphic structure sheaf. Write $H^q(P^r(\mathbb C),\mathcal F)$ for the $q$th right-derived global-sections group. Then every such group is finite-dimensional over $\mathbb C$ for every integer $q\ge0$.

For its topology, a coordinate polydisc means the image in a holomorphic chart of a product of open coordinate discs. Take any finite ordered cover $\mathcal U=(U_i)$ by relatively compact coordinate polydiscs such that each nonempty finite intersection $U_I$ has a finite presentation $\mathcal O_{U_I}^{p_1}\to\mathcal O_{U_I}^{p_0}\to\mathcal F|_{U_I}\to0$ whose global section map is surjective, and such that $H^q(U_I,\mathcal F|_{U_I})=0$ for every $q>0$. Give $\mathcal O(U_I)^{p_0}$ compact-convergence topology and $\Gamma(U_I,\mathcal F)$ the induced quotient topology. Set $C^k(\mathcal U,\mathcal F)=\prod_{i_0<\cdots<i_k}\Gamma(U_{i_0}\cap\cdots\cap U_{i_k},\mathcal F)$ with finite-product topology and differential
$$
(\delta c)_{i_0\cdots i_{k+1}}=\sum_{\nu=0}^{k+1}(-1)^\nu c_{i_0\cdots\widehat{i_\nu}\cdots i_{k+1}}\big|_{U_{i_0}\cap\cdots\cap U_{i_{k+1}}}.
$$
Give the cocycle space its subspace topology and its quotient by coboundaries the Čech quotient topology. These cohomology groups are Hausdorff in that topology, which is independent of the chosen finite cover and local presentations.

## Statement references

[Jean-Pierre Demailly, *Complex Analytic and Differential Geometry*, Chapter IX §§1.B and 4.B–4.D](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

[Henri Cartan, *Un théorème de finitude*, Exposé 17](https://www.numdam.org/item/SHC_1953-1954__6__A17_0.pdf)

## Facts & Assumptions

**Given:** Full AC; an integer $0\le r\le3$; complex projective space $P^r(\mathbb C)$; and a coherent analytic module $\mathcal F$ on it. Cohomology means ordinary right-derived global-sections cohomology.

[A1] Oka coherence and local partial resolutions: assume AC; on every finite-dimensional complex manifold $M$, $\mathcal O_M$ is coherent, coherent modules are closed under kernels, cokernels and finite extensions, and for every coherent $\mathcal F$, point $x$ and finite $\ell\ge0$ there is a chart neighborhood with an exact partial finite-rank free resolution $\mathcal O^{p_\ell}\to\cdots\to\mathcal O^{p_0}\to\mathcal F\to0$, exact at $\mathcal F$ and at every free term except the leftmost. No global free resolution is asserted ([[thm-qftx-gaga-analytic-oka-coherence]]).

[A2] Local coherent polydisc acyclicity: “Assume AC. Let $F$ be coherent analytic on a neighborhood of a point $x$ in $\mathbb C^N$. There is a coordinate polydisc $W$ about $x$ such that for every nonempty coordinate polydisc $D\subset W$ and every $q>0$, $H^q(D,F|_D)=0$. Scalar sheaf cohomology on such $D$ is computed by its smooth Dolbeault resolution. One can choose $W$ subordinate to a partial finite-rank free resolution of $F$ of length exceeding $2N$. The assertion is local in the supplied resolution neighborhood; no untwisted projective Cartan A/B or global Stein generation theorem is asserted.” ([[thm-qftx-gaga-analytic-local-coherent-polydisc-acyclicity]]). Only its positive-degree polydisc vanishing clause is used below.

[F1] For $r\ge1$, $P^r(\mathbb C)$ is the quotient of $\mathbb C^{r+1}\setminus\{0\}$ by nonzero complex scaling, with standard charts $U_i=\{Z_i\ne0\}$ and coordinates $Z_j/Z_i$, and is compact by the projective-space definition ([[def-complex-projective-space-and-holomorphic-charts]]). For $r=0$, every nonzero vector in $\mathbb C$ spans the same line, so $P^0(\mathbb C)$ is a singleton and is compact. In either case, for $r\ge1$ the sphere $S^{2r+1}$ maps continuously and surjectively to $P^r(\mathbb C)$, with compactness supplied by the Euclidean dictionary and Heine–Borel ([[rem-complex-euclidean-space-dictionary]], [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

[F2] A coherent analytic module is locally of finite type and every finite-rank free relation sheaf is locally of finite type ([[def-qftx-analytic-coherent-module]]).

[F3] On a finite-dimensional complex manifold, the coherent-section quotient topology is Fréchet and independent of finite presentation and chart whenever the section maps are surjective ([[lem-qftx-gaga-coherent-section-topology-well-defined]]); the Čech cochain and quotient topologies are as specified in the Definition ([[def-qftx-gaga-coherent-section-topology]]).

[F4] On a nonempty finite intersection of relatively compact coordinate polydiscs, a coherent module is acyclic if it admits a length-$2r$ local free resolution on a participating polydisc ([[lem-qftx-gaga-pseudoconvex-intersection-acyclicity]]). The proof uses ordinary cohomological dimension $2r$ on open chart subsets, not compact-support cohomology.

[F5] The restriction map on coherent sections from a chart-open set to a relatively compact open subset is compact when the finite-presentation section maps are surjective ([[lem-qftx-gaga-coherent-section-restriction-compact]]).

[F6] A compact cochain map between Fréchet complexes inducing a surjection on cohomology has Hausdorff finite-dimensional target cohomology; any cohomology map induced by a continuous cochain map that is surjective is open ([[lem-qftx-gaga-frechet-complex-compact-finiteness]]).

[F7] If every nonempty finite intersection in an open cover is acyclic for a sheaf, the fixed-cover Čech cohomology is naturally isomorphic to its derived sheaf cohomology ([[thm-leray-acyclic-cover-theorem]], [[thm-cech-to-sheaf-cohomology-comparison]]).

[F8] Ordered Čech cochains use the alternating restriction differential displayed in the Statement, and that differential squares to zero ([[def-cech-cochain-complex-open-cover]], [[lem-cech-differential-squares-zero]]).

[F9] The long exact sequence of ordinary sheaf cohomology makes a finite-presentation section map surjective whenever its relation kernel has zero $H^1$ ([[thm-long-exact-sequence-sheaf-cohomology]]).

## Proof

1.1 If $r=0$, $P^0(\mathbb C)$ is a point and $\mathcal O_{P^0}=\mathbb C$. Coherence makes its module of global sections finitely generated over $\mathbb C$, hence finite-dimensional. Sheaves on a point are abelian groups and global sections is the identity functor, so positive right-derived global sections vanish. Every finite-presentation quotient topology on this finite-dimensional space is Hausdorff; finite-dimensional complex vector spaces have a unique Hausdorff locally convex topology, so the cover/presentation topology is independent. [F2, given, algebra]

1.2 Suppose $1\le r\le3$ and fix $x\in P^r$. Apply [A1] to $\mathcal F$ at $x$ with length $2r$ to obtain a chart neighborhood $W_0$ with a partial free resolution. Its first relation kernel $K_0$ is coherent by [A1]. Apply [A1] again to $K_0$ at $x$ with length $2r$, and choose a neighborhood $W_1\subseteq W_0$ on which that kernel resolution is defined. Apply [A2] to $\mathcal F$ at $x$ to obtain a polydisc neighborhood $W_2$. Choose concentric coordinate polydiscs $D'_x\Subset D_x$ with $\overline{D_x}\subseteq W_1\cap W_2$. Then $D'_x$ is a neighborhood of $x$. [A1, A2, F2, given, construct]

1.3 For any finite family of centers $x_1,\ldots,x_s$ with nested pairs $D'_{x_i}\Subset D_{x_i}$ as in the local construction above and with the $D'_{x_i}$ covering $P^r$, put $U_i=D_{x_i}$ and $U'_i=D'_{x_i}$. Conditional on such a choice, the refinement from $\mathcal U=(U_i)$ to $\mathcal U'=(U'_i)$ uses the same index set and sends each index $i$ to itself. In every degree its cochain map is componentwise restriction $\Gamma(U_I,\mathcal F)\to\Gamma(U'_I,\mathcal F)$. It commutes with the Čech differential because restriction of sections commutes with each term of the alternating sum [F8]. [F8, given, construct]

2.1 The sets $D'_x$ cover $P^r$. Compactness [F1] gives finitely many centers $x_1,\ldots,x_s$ whose smaller polydiscs still cover; set $U_i=D_{x_i}$ and $U'_i=D'_{x_i}$. Each singleton $U_i$ and $U'_i$ is $\mathcal F$-acyclic by [A2]. For every nonempty finite intersection of at least two of the $U_i$, the intersection lemma [F4] applies using the length-$2r$ resolution of $\mathcal F$ on the closure of any participating $U_i$. It also applies to the corresponding intersections of the $U'_i$, since their closures lie inside those same resolution neighborhoods. Thus both finite covers are acyclic for $\mathcal F$. [A1, A2, F1, F4, step 1.2]

3.1 On any nonempty intersection $V=U_I$ or $V=U'_I$, use the first presentation of $\mathcal F$ from a chosen participating $U_{i_0}$. Its relation kernel is $K_0|_V$, and the same local Oka construction in step 1.2 gives a length-$2r$ resolution of $K_0$ on a neighborhood of $\overline{U_{i_0}}$. Applying [F4] to $K_0$ on $V$ gives $H^1(V,K_0)=0$. The long exact sequence of $0\to K_0\to\mathcal O_V^{p_0}\to\mathcal F|_V\to0$ then makes the section map $\Gamma(V,\mathcal O_V^{p_0})\to\Gamma(V,\mathcal F)$ surjective. Therefore [F3] supplies the required Fréchet section and Čech topologies on both covers. [A1, F3, F4, F9, step 1.2, step 2.1]

3.2 For every index set $I$, $\overline{U'_I}\subseteq\bigcap_{i\in I}\overline{U'_i}\subseteq U_I$, and this closure is compact because it is a closed subset of the finite intersection of the compact sets $\overline{U'_i}$. Every nonzero component of the cochain map in step 1.3 is therefore a restriction with relatively compact target, hence compact by [F5]. For the finitely many components in a fixed degree, choose in each source a zero-neighborhood whose restriction has compact closure; their finite product is a zero-neighborhood and the product of those compact closures is compact. Thus the full cochain map in that degree is compact. [F5, step 1.2, step 2.1, step 1.3]

3.3 Both covers in step 2.1 are acyclic for $\mathcal F$. By [F7], the induced map on Čech cohomology is the identity comparison through $H^q(P^r,\mathcal F)$, hence an isomorphism in every degree. In particular it is surjective. [F7, step 2.1, step 1.3]

4.1 Each Čech cochain space is a finite product of Fréchet section spaces by [F3], and restrictions are continuous, so the two Čech cochain complexes are Fréchet complexes. By steps 3.2–3.3, their cochain map is compact in degree $q$ and surjective on degree-$q$ cohomology. Apply [F6] to conclude that $H^q(C^\bullet(\mathcal U',\mathcal F))$ is Hausdorff and finite-dimensional. The Leray comparison [F7] transfers both conclusions to $H^q(P^r,\mathcal F)$. If $q$ is at least the number of cover members, the Čech cochain space is zero and the conclusion is immediate as well. [F3, F6, F7, step 3.2, step 3.3]

4.2 To compare two finite admissible covers, retain the given presentation $\pi_I$ on every nonempty intersection $U_I$ of either parent cover, and write $K_I=\ker\pi_I$; there are only finitely many such coherent kernels by [A1]. First shrink each parent cover to open sets $B_i$ with $\overline{B_i}\subset U_i$, still covering $P^r$: at every point choose a coordinate polydisc with compact closure in some parent member, take a finite subcover by compactness [F1], and for each parent member take the union of its finitely many assigned polydiscs. Do this for both parent covers. At a point $x$, repeat step 1.2 for $\mathcal F$ and its new presentation kernel. In addition, for every parent intersection $U_I$ containing $x$, use [A1] to choose a length-$2r$ resolution neighborhood of its particular kernel $K_I$. Intersect these finitely many neighborhoods. Choose nested polydiscs $D'_x\Subset D_x$ whose closures lie in this intersection and in one selected $B_i$ from each parent cover. Also choose $\overline{D_x}$ disjoint from every $\overline{B_j}$ whose parent $U_j$ does not contain $x$; those are finitely many closed sets missing $x$. Compactness gives a finite cover $\mathcal W$ by some of the $D'_x$, with the selected parent assignments. As in steps 1.2, 2.1 and 3.1, its intersections are $\mathcal F$-acyclic and have surjective finite-presentation section maps. Now take a nonempty refined intersection $T=D'_{x_0}\cap\cdots\cap D'_{x_k}$ and one parent cover. Let $I$ be its distinct assigned parent indices. Since $D'_{x_0}$ meets each selected $B_i$, the avoidance condition implies $x_0\in U_i$ for every $i\in I$. Hence the closure of $D'_{x_0}$ lies inside a resolution neighborhood for this very $K_I$. Applying [F4] to $K_I$ on $T$ gives $H^1(T,K_I)=0$, so [F9] proves surjectivity of the section map of the SAME parent presentation $\pi_I|_T$. Its section map on $U_I$ is surjective by parent admissibility. Moreover $\overline T$ is compact in $U_I$, since each refined polydisc has compact closure in its assigned parent. Thus [F5] applies to $\Gamma(U_I,\mathcal F)\to\Gamma(T,\mathcal F)$ using that common presentation. By [F3], the resulting target quotient topology agrees with the chosen one on $T$. This works for both parent covers and all tuples; no newly chosen presentation is substituted for a parent presentation without proving its section surjectivity. [A1, A2, F1, F3, F4, F5, F9, step 1.2, step 2.1, step 3.1, construct]

5.1 For either parent cover, the standard refinement cochain map to $\mathcal W$ sends a component to its restriction with the sign of the permutation that sorts the parent indices, and sends it to zero when two parent indices repeat. The alternating formula [F8] shows it is a cochain map: with distinct parents, deletion commutes with restriction and permutation signs; with a repeated parent, the two faces deleting that repeated pair cancel. Each nonzero component restriction is continuous by [F3] and compact by [F5]; its refined intersection has compact closure in the corresponding parent intersection by step 4.2. The covers are finite, so the finite-product argument of step 3.2 makes both cochain maps compact. Their induced cohomology maps are isomorphisms by [F7], hence surjective and open by [F6]; the maps themselves are continuous as cochain maps, so these bijections are topological isomorphisms. Therefore the two original Čech quotient topologies agree. [F3, F5, F6, F7, F8, step 3.2, step 4.2] ∎
