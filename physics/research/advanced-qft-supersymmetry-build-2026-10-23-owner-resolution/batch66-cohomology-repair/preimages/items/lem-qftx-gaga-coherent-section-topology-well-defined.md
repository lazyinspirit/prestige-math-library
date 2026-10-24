---
id: lem-qftx-gaga-coherent-section-topology-well-defined
kind: lemma
title: Coherent-section quotient topologies are Fréchet and presentation-independent
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-qftx-analytic-coherent-module
  - def-qftx-gaga-frechet-space
  - thm-qftx-gaga-analytic-oka-coherence
  - thm-qftx-gaga-analytic-local-coherent-polydisc-acyclicity
  - thm-long-exact-sequence-sheaf-cohomology
  - thm-holomorphic-germ-ring-is-noetherian
  - thm-artin-rees-lemma
  - thm-krull-intersection-theorem
  - thm-cauchy-estimates-on-a-polydisc
  - thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qftx-analytic-coherent-module: mathematical-premise
  def-qftx-gaga-frechet-space: mathematical-premise
  thm-qftx-gaga-analytic-oka-coherence: mathematical-premise
  thm-qftx-gaga-analytic-local-coherent-polydisc-acyclicity: mathematical-premise
  thm-long-exact-sequence-sheaf-cohomology: mathematical-premise
  thm-holomorphic-germ-ring-is-noetherian: mathematical-premise
  thm-artin-rees-lemma: mathematical-premise
  thm-krull-intersection-theorem: mathematical-premise
  thm-cauchy-estimates-on-a-polydisc: mathematical-premise
  thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables: mathematical-premise
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
      locator: "Chapter IX §1.A and §4.C, Theorem 1.5 and Proposition 4.6, printed pp. 404–405 and 422–423: Krull topology, Artin–Rees closedness, and independence of the coherent-section quotient topology."
    - title: Henri Cartan, Un théorème de finitude
      url: https://www.numdam.org/item/SHC_1953-1954__6__A17_0.pdf
      locator: "Exposé 17, pp. 8–10: compact-convergence quotient topology on local coherent sections."
verification:
  precheck: pending
page: qftx-gaga-compact-coherent-finiteness
category: quantum-field-theory-mathematics
---

## Statement

Assume full AC. Let $M$ be a finite-dimensional complex manifold, let $\mathcal F$ be a coherent analytic $\mathcal O_M$-module, and let $V$ be a nonempty open subset of one holomorphic chart on which a finite presentation $\mathcal O_V^{p_1}\to\mathcal O_V^{p_0}\xrightarrow{\pi}\mathcal F|_V\to0$ is fixed. Assume that the induced section map $\Gamma(V,\mathcal O_V^{p_0})\to\Gamma(V,\mathcal F)$ is surjective. Then its quotient topology from compact-convergence on $\mathcal O(V)^{p_0}$ is a Fréchet topology. If two such presentations are locally defined on a common cover and both section maps are surjective, their quotient topologies agree; the compatible-family topology on sections over any open set admitting a countable cover by such presentation neighborhoods is also Fréchet and independent of the chosen chart cover and presentations.

## Statement references

[Jean-Pierre Demailly, *Complex Analytic and Differential Geometry*, Chapter IX §4.C](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

[Henri Cartan, *Un théorème de finitude*, Exposé 17](https://www.numdam.org/item/SHC_1953-1954__6__A17_0.pdf)

## Facts & Assumptions

**Given:** Full AC; a finite-dimensional complex manifold; a coherent analytic module; and a finite presentation on a chart-open set $V$ whose global section map is surjective.

[F1] Coherence means local finite generation and local finite generation of every finite relation sheaf ([[def-qftx-analytic-coherent-module]]).

[F2] At each point $x$, the local ring $R=\mathcal O_{M,x}$ is Noetherian with maximal ideal $\mathfrak m_x$. For a finite $R$-module $E$, its analytic Krull topology is induced by the finite-dimensional quotients $E/\mathfrak m_x^kE$ with their usual complex-vector-space topologies; it is Hausdorff because $\bigcap_k\mathfrak m_x^kE=0$. For a finite submodule $L\subseteq R^{p_0}$, Artin–Rees makes the topology induced from $R^{p_0}$ agree with the intrinsic Krull topology on $L$, so $L$ is closed ([[thm-holomorphic-germ-ring-is-noetherian]], [[thm-artin-rees-lemma]], [[thm-krull-intersection-theorem]]).

[F3] Cauchy estimates control every finite jet by a uniform bound on a larger compact polydisc, and locally uniform limits of holomorphic functions are holomorphic ([[thm-cauchy-estimates-on-a-polydisc]], [[thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables]]).

[F4] A Fréchet space is a Hausdorff complete metrizable locally convex vector space ([[def-qftx-gaga-frechet-space]]).

[A1] Full AC is the set-choice postulate ([[def-axiom-of-choice]]).

[A2] Planned Oka interface: assume AC; on every finite-dimensional complex manifold $M$, $\mathcal O_M$ is coherent, coherent modules are closed under kernels, cokernels and finite extensions, and every coherent $\mathcal F$, point $x$ and finite integer $\ell\ge0$ have a chart neighborhood with an exact partial finite-rank free resolution $\mathcal O^{p_\ell}\to\cdots\to\mathcal O^{p_0}\to\mathcal F\to0$, exact at the module and every free term except the leftmost. No global free resolution is asserted ([[thm-qftx-gaga-analytic-oka-coherence]]). Its current ready record is hash-stale, so this use is conditional.

[A3] Full exact planned local supplier claim: “Assume AC. Let $F$ be coherent analytic on a neighborhood of a point $x$ in $\mathbb C^N$. There is a coordinate polydisc $W$ about $x$ such that for every nonempty coordinate polydisc $D\subset W$ and every $q>0$, $H^q(D,F|_D)=0$. Scalar sheaf cohomology on such $D$ is computed by its smooth Dolbeault resolution. One can choose $W$ subordinate to a partial finite-rank free resolution of $F$ of length exceeding $2N$. The assertion is local in the supplied resolution neighborhood; no untwisted projective Cartan A/B or global Stein generation theorem is asserted.” ([[thm-qftx-gaga-analytic-local-coherent-polydisc-acyclicity]]). The exact planned item ID is absent from the batch 65 manifest and has no readiness record. The manifested alternate-ID theorem has a matching stronger interface, but its current Step 1 record is escalated because that record identifies hash-stale readiness for its Oka and bounded-degree-relations inputs. Only the positive-degree polydisc vanishing clause is used below, conditionally on the exact planned supplier.

[F5] A short exact sequence of sheaves gives the long exact sequence of derived sheaf cohomology ([[thm-long-exact-sequence-sheaf-cohomology]]).

## Proof

1.1 In chart coordinates, choose a compact exhaustion $K_1\subseteq K_2\subseteq\cdots$ of $V$, for example $K_n=\{z:|z|\le n,\ \operatorname{dist}(z,\mathbb C^m\setminus V)\ge1/n\}$, with distance to the empty set taken as $+\infty$. The seminorms $p_n(f)=\sup_{K_n}\|f\|$ generate compact-convergence. The resulting topology on $\mathcal O(V)^{p_0}$ is Hausdorff and locally convex. A Cauchy sequence converges uniformly on each $K_n$ to a compatible continuous limit; it converges locally uniformly on $V$, so [F3] makes the limit holomorphic. Thus $\mathcal O(V)^{p_0}$ is Fréchet. [F3, F4, given, construct]

1.2 Let $R=\mathcal O_{M,x}$ and let $L_x\subseteq R^{p_0}$ be the stalk of the relation sheaf $\ker(\mathcal O_V^{p_0}\to\mathcal F|_V)$. By [F1], $L_x$ is finitely generated. Artin–Rees in [F2] identifies the topology induced on $L_x$ from $R^{p_0}$ with its intrinsic Krull topology, while Krull intersection makes $R^{p_0}/L_x$ separated; thus $L_x$ is closed in the analytic Krull topology. If relation sections converge uniformly on compact subsets, [F3] makes every finite Taylor jet converge. These jets are the classes in the finite-dimensional quotients $R^{p_0}/\mathfrak m_x^kR^{p_0}$, so the germs converge in the analytic Krull topology; closedness gives that the limit germ belongs to $L_x$. This holds at every $x$, and the sheaf-kernel condition puts the limit in the relation section space. Therefore the kernel of the global section map is closed in $\mathcal O(V)^{p_0}$. [F1, F2, F3, given]

2.1 A quotient of a Fréchet space by a closed linear subspace is Hausdorff and metrizable by the quotient seminorms. For completeness, choose a decreasing absolutely convex neighborhood basis $U_n$ in the original space such that $p_j(u)\le2^{-n}$ for $u\in U_n$ and $j\le n$, for a defining countable seminorm family $(p_j)$. From a Cauchy sequence of cosets choose a subsequence whose $n$th successive difference lies in the open quotient image of $U_n$, and lift that difference to some $u_n\in U_n$. For each fixed $j$, $\sum_n p_j(u_n)$ converges, so $(u_n)$ is summable in the Fréchet topology. Its sum gives a limit of the subsequence's cosets, and the original Cauchy sequence converges to the same coset. Local convexity descends through the open quotient map. Applying this argument to the closed kernel in step 1.2 proves the quotient topology is Fréchet. [F4, step 1.1, step 1.2, construct]

2.2 Let two finite presentations be given near a point $x$, with coherent relation kernels $K,K'$ by [A2]. Apply [A3] to both kernels and intersect the resulting polydisc neighborhoods with the presentation neighborhoods. On a sufficiently small coordinate polydisc $D$ in this intersection, $H^1(D,K)=H^1(D,K')=0$. The long exact sequence [F5] for each presentation then proves that both section maps on $D$ are surjective. More generally, on any common open set $W$ where both presentations are defined and their section maps are surjective, lift the images of the finitely many basis sections of the first free module through the second section surjection. These lifts form a holomorphic matrix $A$ on $W$ with $\pi'A=\pi$. Multiplication by $A$ is continuous for compact-convergence because its entries are bounded on compact subsets; it induces the identity continuously between the quotient topologies. Reversing the presentations gives the reverse continuous identity. Thus the quotient topologies agree on each common presentation neighborhood. A holomorphic change of chart preserves compact-convergence because it and its inverse send compact subsets to compact subsets. [A1, A2, A3, F1, F5, step 1.1, step 2.1, given, construct]

3.1 For nested chart-open sets $W\subseteq V$ with the same finite presentation and surjective section maps, restriction of the free section spaces $\mathcal O(V)^{p_0}\to\mathcal O(W)^{p_0}$ is continuous for compact-convergence. Its commutative factorization through the quotient maps makes $\Gamma(V,\mathcal F)\to\Gamma(W,\mathcal F)$ continuous. For a general overlap, cover it by countably many small chart polydiscs on which the source presentation and local target presentations have surjective section maps, as in step 2.2. On each such polydisc, first restrict the source free generators and then express their images in the local target generators by the matrix construction of step 2.2. This gives a continuous map from the source free space into the local target quotient; because the source section map is a quotient surjection, it induces the continuous section restriction. Hence restriction into the compatible-family product is continuous. The compatible families form the intersection of the closed kernels of the pairwise differences of restrictions inside the product of the local Fréchet spaces, hence a closed subspace of a countable Fréchet product and itself Fréchet. [F4, step 2.2, construct]

3.2 On any common presentation neighborhood where two presentations have surjective section maps, the global lifting and continuous-matrix argument of step 2.2 makes their quotient topologies agree. Any two countable presentation covers have a common countable refinement, so their product topologies agree on that refinement and induce the same compatible-family topology. [F4, step 2.2, step 3.1, construct] ∎
