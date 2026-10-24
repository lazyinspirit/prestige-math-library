---
id: lem-qftx-gaga-coherent-section-restriction-compact
kind: lemma
title: Restriction of coherent sections to a relatively compact open set is compact
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-qftx-gaga-coherent-section-topology
  - def-qftx-gaga-frechet-space
  - lem-qftx-gaga-coherent-section-topology-well-defined
  - thm-cauchy-estimates-on-a-polydisc
  - cor-ascoli-arzela-for-compact-metric-domains
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
  - rem-complex-euclidean-space-dictionary
  - thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-qftx-gaga-coherent-section-topology: mathematical-premise
  def-qftx-gaga-frechet-space: mathematical-premise
  lem-qftx-gaga-coherent-section-topology-well-defined: mathematical-premise
  thm-cauchy-estimates-on-a-polydisc: mathematical-premise
  cor-ascoli-arzela-for-compact-metric-domains: mathematical-premise
  thm-euclidean-heine-borel-pseudocompactness-and-extreme-values: mathematical-premise
  rem-complex-euclidean-space-dictionary: mathematical-premise
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
      locator: "Chapter IX §4.C, Proposition 4.7(d), printed pp. 423–424: compactness of restriction for coherent sections from compact restriction of holomorphic functions."
    - title: Henri Cartan, Un théorème de finitude
      url: https://www.numdam.org/item/SHC_1953-1954__6__A17_0.pdf
      locator: "Exposé 17, pp. 8–10: compact restriction in the finite-dimensional cohomology argument."
verification:
  precheck: pending
page: qftx-gaga-compact-coherent-finiteness
category: quantum-field-theory-mathematics
---

## Statement

Assume full AC. Let $m\ge1$, let $\Omega\subseteq\mathbb C^m$ be open, and let $\Omega'\subseteq\Omega$ be open with compact closure contained in $\Omega$. Let $\mathcal F$ be a coherent analytic module on a neighborhood of $\overline\Omega'$. Suppose it has a finite presentation by free sheaves on $\Omega$ and that the presentation section maps on both $\Omega$ and $\Omega'$ are surjective. Give the two section spaces the quotient topologies from compact-convergence on the finite free section spaces. Then the restriction map $\Gamma(\Omega,\mathcal F)\to\Gamma(\Omega',\mathcal F)$ is compact, meaning that it sends some neighborhood of zero to a set with compact closure.

## Statement references

[Jean-Pierre Demailly, *Complex Analytic and Differential Geometry*, Chapter IX §4.C](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

[Henri Cartan, *Un théorème de finitude*, Exposé 17](https://www.numdam.org/item/SHC_1953-1954__6__A17_0.pdf)

## Facts & Assumptions

**Given:** Full AC; $m\ge1$; open sets $\Omega'\Subset\Omega\subseteq\mathbb C^m$; a coherent module; and surjective finite-presentation section maps on both sets.

[A1] Full AC is the set-choice postulate and is an explicit hypothesis of the Ascoli–Arzelà input ([[def-axiom-of-choice]]).

[F1] Holomorphic section spaces carry compact-convergence Fréchet topologies, and the coherent section quotients are well-defined Fréchet spaces ([[def-qftx-gaga-frechet-space]], [[lem-qftx-gaga-coherent-section-topology-well-defined]]).

[F2] Cauchy estimates bound first derivatives on a smaller polydisc by a uniform bound on a larger polydisc ([[thm-cauchy-estimates-on-a-polydisc]]).

[F3] Under full AC, an equicontinuous family of continuous functions on a compact metric space has compact closure in the uniform topology when its values are pointwise relatively compact ([[cor-ascoli-arzela-for-compact-metric-domains]]).

[F4] A locally uniform limit of holomorphic functions is holomorphic ([[thm-locally-uniform-limit-of-holomorphic-functions-in-several-variables]]).

[F5] A surjective section map defines the quotient topology, and compact-convergence on finite free section spaces is the topology used in the coherent-section definition ([[def-qftx-gaga-coherent-section-topology]]).

[F6] For $d\ge1$, bounded closed subsets of $\mathbb C^d$ are compact by its real-coordinate identification and Heine–Borel; $\mathbb C^0$ is a singleton and is compact as well ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]], [[rem-complex-euclidean-space-dictionary]]).

## Proof

1.1 If $\Omega'=\varnothing$, the target section space is zero and restriction is the zero compact map. Otherwise, since $\overline{\Omega'}$ is compact in $\Omega$, choose a compact set $L$ with $\overline{\Omega'}\subseteq\operatorname{int}L\subseteq L\subseteq\Omega$. The set $B=\{f\in\mathcal O(\Omega)^p:\sup_L\|f\|<1\}$ is an open neighborhood of zero in the compact-convergence topology. Cover $\overline{\Omega'}$ by finitely many smaller polydiscs whose slightly larger closed polydiscs lie in $\operatorname{int}L$. By [F2], the family $B$ has uniformly bounded first derivatives on each smaller polydisc, hence is equicontinuous and uniformly bounded on each compact subset of $\Omega'$. [F2, F5, given, construct]

1.2 Use the compact exhaustion $K_j=\{z\in\Omega':|z|\le j,\ \operatorname{dist}(z,\mathbb C^m\setminus\Omega')\ge1/j\}$, with distance to the empty set taken as $+\infty$. Each $K_j$ is compact by [F6], and their union is $\Omega'$. On each nonempty $K_j$, the family from step 1.1 is equicontinuous and pointwise relatively compact: its values lie in a bounded subset of $\mathbb C^p$, whose closure is compact by [F6] (for $p=0$ the target is the singleton). Apply [F3] and take nested subsequences diagonally; every sequence in the restrictions of $B$ then has a subsequence converging uniformly on every $K_j$. Its limit is holomorphic by [F4]. By [F1] the compact-convergence topology on $\mathcal O(\Omega')^p$ is metrizable, so this sequential compactness proves that the restricted set has compact closure. Thus restriction $\mathcal O(\Omega)^p\to\mathcal O(\Omega')^p$ sends the neighborhood $B$ to a set with compact closure. [A1, F1, F3, F4, F6, step 1.1]

2.1 Let $Q$ and $Q'$ be the quotient maps from the finite free section spaces onto $\Gamma(\Omega,\mathcal F)$ and $\Gamma(\Omega',\mathcal F)$. The image $N=Q(B)$ is a neighborhood of zero because a quotient map is open. Every section in $N$ has a lift in $B$, so the restriction identity $\operatorname{res}_{\mathcal F}\circ Q=Q'\circ\operatorname{res}_{\mathcal O}$ puts $\operatorname{res}_{\mathcal F}(N)$ inside $Q'(\operatorname{res}_{\mathcal O}(B))$. The latter has compact closure, being a continuous image of the compact closure from step 1.2. Thus the coherent-section restriction is compact. [F1, F5, step 1.2, given] ∎
