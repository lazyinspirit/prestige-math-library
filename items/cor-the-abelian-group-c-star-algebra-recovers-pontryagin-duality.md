---
id: cor-the-abelian-group-c-star-algebra-recovers-pontryagin-duality
kind: corollary
title: The abelian group C star algebra recovers Pontryagin duality
deps:
  - lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
  - def-convolution-on-cc-and-l1-of-a-group
  - def-compactly-supported-convolution-on-a-group
  - lem-haar-change-of-variables-under-inversion
  - prop-compact-discrete-and-abelian-groups-are-unimodular
  - thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g
  - def-full-group-c-star-algebra
  - def-unitary-dual-of-a-locally-compact-group
  - thm-locally-compact-gelfand-duality
  - thm-nonunital-commutative-gelfand-naimark
  - lem-characters-on-a-commutative-c-star-algebra-preserve-star
  - def-pontryagin-dual-and-compact-open-topology
  - lem-continuous-characters-of-the-real-line-are-exponentials
  - thm-schurs-lemma-for-unitary-representations
  - def-fell-topology-on-the-unitary-dual
  - thm-raikov-compact-open-and-weak-star-topologies-coincide-on-normalized-positive-type-functions
  - def-axiom-of-choice
dependency_level: 5
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC, inherited from Schur, Raikov and Gelfand-Naimark; the identification of the two topologies and of the character spaces adds no further choice."
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T) (Cambridge University Press 2008; author-hosted complete text)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix F, §F.4: Example F.4.7 (abelian case) and §F.2, Example F.2.5(i)"
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 8, §8.B: Example 8.B.7(1); Chapter 1, §1.D: the discussion before Proposition 1.D.6"
status: published
origin: pipeline
---
## Statement

Assume the Axiom of Choice. Let $G$ be a locally compact abelian group. Then
$C^*(G)$ is a commutative C\*-algebra
([[def-full-group-c-star-algebra]]), the Gelfand transform is an isometric
$\ast$-isomorphism $C^*(G)\cong C_0(\widehat G)$, and the Gelfand spectrum of
$C^*(G)$ is homeomorphic to the Pontryagin dual $\widehat G$ with the
compact-open topology ([[thm-nonunital-commutative-gelfand-naimark]],
[[def-pontryagin-dual-and-compact-open-topology]]); the Fell topology on
$\widehat G$ agrees with the compact-open topology
([[def-fell-topology-on-the-unitary-dual]]). In particular
$C^*(\mathbb Z)\cong C(\mathbb T)$ and $C^*(\mathbb R)\cong C_0(\mathbb R)$.

## Facts & Assumptions

**Given:** AC; a locally compact abelian group $G$; the full C\*-algebra $C^*(G)$; the character group $\widehat G=\operatorname{Hom}_{cts}(G,\mathbb T)$ with the compact-open topology.

[F1] For abelian $G$, convolution on $L^1(G)$ is commutative. Indeed $G$ is unimodular ([[prop-compact-discrete-and-abelian-groups-are-unimodular]]), so Haar inversion preserves integration ([[lem-haar-change-of-variables-under-inversion]]). For $u,w\in C_c(G)$, substituting $y=xz^{-1}$ gives $(u*w)(x)=\int u(xz^{-1})w(z)\,dz=\int w(z)u(z^{-1}x)\,dz=(w*u)(x)$ ([[def-compactly-supported-convolution-on-a-group]]). Boundedness and density extend this identity to $L^1(G)$ ([[def-convolution-on-cc-and-l1-of-a-group]], [[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]]). The canonical image of $L^1(G)$ is dense in $C^*(G)$ ([[def-full-group-c-star-algebra]]).

[F2] Irreducible unitary representations of abelian $G$ are one-dimensional, and conversely every continuous unitary character is an irreducible representation: for fixed $g$, $\pi(g)$ is a bounded self-intertwiner, hence scalar by Schur, and irreducibility forces dimension one ([[thm-schurs-lemma-for-unitary-representations]], [[def-unitary-dual-of-a-locally-compact-group]]).

[F3] Unitary representations of $G$ correspond to nondegenerate star-representations of $C^*(G)$, respecting irreducibility; hence the Gelfand characters of $C^*(G)$ (nonzero multiplicative linear functionals) are exactly the functionals $f\mapsto\int_Gf(g)\gamma(g)\,dg$ extended from $L^1(G)$ for continuous unitary characters $\gamma$, and every character of a commutative C\*-algebra preserves the involution: use the unital character lemma in the unital case, and the isometric star Gelfand transform and its evaluation functionals in the nonunital case ([[thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g]], [[lem-characters-on-a-commutative-c-star-algebra-preserve-star]], [[thm-nonunital-commutative-gelfand-naimark]]).

[F4] Raikov's theorem: on the normalized continuous positive-type functions $P_1(G)$, weak-* convergence against $L^1(G)$ coincides with uniform convergence on compact subsets ([[thm-raikov-compact-open-and-weak-star-topologies-coincide-on-normalized-positive-type-functions]]). Every continuous unitary character belongs to $P_1(G)$.

[F5] Nonunital commutative Gelfand–Naimark: a commutative C\*-algebra $A$ is isometrically $\ast$-isomorphic to $C_0(\Delta(A))$, where $\Delta(A)$ is the character space with the weak-* topology; the Gelfand transform is $a\mapsto(\varphi\mapsto\varphi(a))$ ([[thm-nonunital-commutative-gelfand-naimark]], [[thm-locally-compact-gelfand-duality]]).

## Proof

**Proof technique:** direct.

**Given:** AC, a locally compact abelian group $G$, the full C\*-algebra $C^*(G)$ and the character group $\widehat G$.

1.1 $C^*(G)$ is commutative: $L^1(G)$ is commutative and its canonical image is dense in $C^*(G)$ by [F1], and commutativity passes to norm limits. [F1]

1.2 The Gelfand characters of $C^*(G)$ are in bijection with the continuous unitary characters of $G$, through $\chi_\gamma(f)=\int_Gf(g)\gamma(g)\,dg$ for $f\in L^1(G)$, extended by continuity to $C^*(G)$. Indeed, the unitary character $\gamma$ is a one-dimensional unitary representation, so [F3] gives its unique nondegenerate star-representation $\chi_\gamma$ of $C^*(G)$, whose restriction to $L^1(G)$ is the displayed integral. Equivalently, $|\chi_\gamma(f)|\le\|f\|_{C^*}$ because its integrated operator occurs in the universal supremum; this is the bound that gives an extension in the full C*-norm. conversely a character $\chi$ of $C^*(G)$ preserves the involution by [F3], hence is a one-dimensional nondegenerate star-representation of $C^*(G)$, which corresponds to a unitary representation of $G$ by [F3]; being nonzero and one-dimensional it is irreducible by [F2], so it is a continuous character $\gamma$ and $\chi=\chi_\gamma$ by density. [F2, F3]

2.1 The Gelfand topology on the character space corresponds to the compact-open topology on $\widehat G$: pointwise convergence on $C^*(G)$ is equivalent to pointwise convergence on the dense subspace $L^1(G)$ by uniform boundedness of the character functionals, which is weak-* convergence of the functions $\gamma_i$ against $L^1(G)$; by Raikov [F4] (all $\gamma\in P_1(G)$) this is exactly uniform convergence on compact subsets, that is, convergence in $\widehat G$. [F1, F4, step 1.2]

3.1 The Fell topology on $\widehat G$ agrees with compact-uniform convergence. For a character $\gamma$, all finite sums of diagonal coefficients are exactly $c\gamma$ with $c\ge0$ ([[def-fell-topology-on-the-unitary-dual]]). Given a compact $Q$ and $\epsilon>0$, the Fell neighborhood testing $\gamma$ on $Q\cup\{e\}$ with tolerance $\epsilon/2$ is contained in $\{\gamma':\sup_Q|\gamma-\gamma'|<\epsilon\}$: its witness $c'\ge0$ satisfies $|1-c'|<\epsilon/2$ at $e$, hence $\sup_Q|\gamma-\gamma'|\le\sup_Q|\gamma-c'\gamma'|+|c'-1|<\epsilon$. Conversely, for a displayed Fell neighborhood with tests $c_1\gamma,\ldots,c_k\gamma$ on $Q$ and tolerance $\epsilon$, the compact-uniform neighborhood $\sup_Q|\gamma-\gamma'|<\epsilon/(1+\max_i c_i)$ is contained in it, using witnesses $c_i\gamma'$; the empty test list needs no restriction. These two refinements at every center prove equality of the topologies, hence equivalence of convergence for arbitrary nets. The compact-open topology on $\widehat G$ is uniform convergence on compacta ([[def-pontryagin-dual-and-compact-open-topology]]). [F2, F4, step 2.1]

4.1 By [F5] the commutative C\*-algebra $C^*(G)$ is isometrically $\ast$-isomorphic to $C_0(\Delta(C^*(G)))$, and by steps 1.2, 2.1 and 3.1 the character space with the Gelfand topology is homeomorphic to $\widehat G$ with the compact-open topology, which by step 3.1 is also the Fell topology; hence $C^*(G)\cong C_0(\widehat G)$. [F5, step 1.2, step 2.1, step 3.1]

5.1 For $G=\mathbb Z$ every character is determined by its value at $1$, $\gamma(n)=\gamma(1)^n$, and $z\mapsto(n\mapsto z^n)$ is a homeomorphism $\mathbb T\to\widehat{\mathbb Z}$ for the compact-open topology, because compact subsets of $\mathbb Z$ are finite and pointwise convergence is convergence of the value at $1$; hence $C^*(\mathbb Z)\cong C(\mathbb T)$ by step 4.1. For $G=\mathbb R$ the continuous characters are exactly $x\mapsto e^{itx}$, $t\in\mathbb R$, by [[lem-continuous-characters-of-the-real-line-are-exponentials]], and $t\mapsto e_t:=e^{it(\cdot)}$ is a homeomorphism onto $\widehat{\mathbb R}$: it is continuous since $\sup_{x\in K}|e^{it_kx}-e^{itx}|\le|t_k-t|\sup_{x\in K}|x|$ on compact $K$, and if $t_k\not\to t$ then for some $\delta>0$ and a subnet $|t_k-t|\ge\delta$, and each compact interval $[0,\pi/\delta]$ contains $x_k=\pi/|t_k-t|$ with $|e^{it_kx_k}-e^{itx_k}|=|e^{\pm i\pi}-1|=2$, so compact-uniform convergence fails; thus by step 4.1 $C^*(\mathbb R)\cong C_0(\mathbb R)$. [F2, F5, step 4.1]

6.1 The Axiom of Choice is inherited from Schur's lemma, Raikov's theorem and Gelfand–Naimark; no further choice is used in the identifications ([[def-axiom-of-choice]]). [given, F4, F5] ∎ 