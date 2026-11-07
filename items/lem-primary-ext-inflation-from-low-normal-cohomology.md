---
id: lem-primary-ext-inflation-from-low-normal-cohomology
kind: lemma
title: Primary finite-module Ext inflation from low normal cohomology
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-discrete-profinite-modules-injective-ext-and-cochain-comparison
  - thm-continuous-lyndon-hochschild-serre-spectral-sequence
  - thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
  - prop-finite-groups-have-torsion-annihilation-in-positive-cohomology
  - lem-subgroups-of-free-abelian-groups-are-free
proof_strategy: direct
axiom_use: AC and DC are explicit for discrete continuous Ext, finite-free resolutions and the continuous Hochschild–Serre sequence.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Arithmetic Duality Theorems, second edition
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
      locator: I §0.9 and Lemma 4.13, printed pp.12 and 59–61. The finite-lattice low-degree argument is supplied below.
verification: {}
---

## Statement

Assume AC and DC. Let $G$ be profinite, $H\trianglelefteq G$ closed, $Q=G/H$, and $C$ a discrete continuous $G$-module. Let $\ell$ be a prime and $M$ a finite discrete $Q$-module killed by a power of $\ell$, regarded by inflation as a $G$-module. Suppose
$$H^1(H,C)=0,\qquad H^2(H,C)(\ell)=0,$$
where the second group denotes the $\ell$-primary subgroup. Then the actual inflation maps
$$\operatorname{Ext}^r_Q(M,C^H)\longrightarrow\operatorname{Ext}^r_G(M,C)$$
are isomorphisms for $r=0,1,2$. No statement for higher Ext degrees or arbitrary non-primary $M$ is made, and no torsion-module Tor vanishing is assumed.

## Facts & Assumptions

**Given:** The profinite extension, coefficient, finite primary module, low-degree cohomology hypotheses and explicit AC/DC in the Statement.

[A1] AC and DC supply the named continuous Ext and cohomology constructions. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] Discrete profinite modules have actual injective Ext and natural long exact sequences in the first variable. For a finite free integer lattice $L$, Ext from $L$ is continuous cohomology with coefficient $L^*\otimes C$. [[lem-discrete-profinite-modules-injective-ext-and-cochain-comparison]]

[F2] The continuous Hochschild–Serre spectral sequence has $E_2^{a,b}=H^a(Q,H^b(H,N))$ and converges naturally to $H^{a+b}(G,N)$; continuous cohomology is the filtered limit of finite-quotient cohomology, whose positive degrees are annihilated by the finite group order. [[thm-continuous-lyndon-hochschild-serre-spectral-sequence]] [[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]] [[prop-finite-groups-have-torsion-annihilation-in-positive-cohomology]]

[F3] A subgroup of a free abelian group is free. [[lem-subgroups-of-free-abelian-groups-are-free]]

## Proof

**Proof technique:** compare free-lattice cohomology on the $\ell$-primary part and descend through one finite-free presentation.

1.1 Let $L$ be a finite free integer $Q$-lattice and put $N=L^*\otimes C$. Since $H$ acts trivially on $L^*$, finite direct sums of cochains give $H^b(H,N)=L^*\otimes H^b(H,C)$ as abelian groups, with their natural $Q$-action. The $b=1$ group is zero. By [F2], positive continuous cohomology of a discrete profinite module is torsion, so the $b=2$ group becomes zero after localization at $\ell$ by the assumed vanishing of the $\ell$-primary subgroup. Localization is exact. The spectral sequence [F2], localized at $\ell$, therefore has only the $b=0$ row in total degrees at most two. Its edge map is the actual inflation map, giving $H^r(Q,L^*\otimes C^H)_{(\ell)}\cong H^r(G,L^*\otimes C)_{(\ell)}$ for $r=0,1,2$. The degree-zero map is already an integral isomorphism. [F2, given, algebra]

1.2 Present $M$ as $0\to L_1\to L_0\to M\to0$ with $L_i$ finite free integer $Q$-lattices. Choose a finite quotient of $Q$ acting on $M$ and map a finite direct sum of its integral group ring onto an abelian generating list of $M$. Its kernel is free by [F3] and has finite rank as a subgroup of a finite-rank free group. [F3, given, choose, construct, algebra]

2.1 By [F1], step 1.1 is the actual inflation isomorphism on the localized Ext groups from $L_0$ and $L_1$ in degrees zero through two. The natural first-variable long exact Ext sequences for step 1.2 form a commutative diagram under inflation. Their five-term portions and exactness of localization give localized isomorphisms for $\operatorname{Ext}^r(M,-)$ for $r=0,1,2$. Multiplication by $\ell^n$ annihilates $M$, so functoriality makes both Ext groups in every degree $\ell$-primary; localization at $\ell$ is therefore the identity on them. This proves the actual integral isomorphisms, including $M=0$. [F1, step 1.1, step 1.2, algebra] ∎
