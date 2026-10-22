---
id: thm-compact-betti-one-manifolds-have-primitive-alexander-annihilators-without-choice
kind: theorem
title: Primitive Alexander annihilators for compact manifolds with first homology Z
status: draft
origin: session
deps: [thm-compact-manifolds-have-finite-presentation-complexes-without-choice, lem-normal-cover-local-homology-detects-mixed-derived-kernels-without-choice, thm-cellular-chains-compute-homology-with-local-coefficients]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Finite presentations and cellular chains, Chapters1–2
    - title: Cha and Kim, Iterated satellite operators on the knot concordance group
      url: https://arxiv.org/pdf/2402.04629v2
      locator: Section4.1, integral-to-prime Alexander coefficients
---

## Statement

Let $M$ be a compact connected Hausdorff manifold, with boundary allowed, with a specified based loop $\mu$ whose integral homology class freely generates $H_1(M;\mathbb Z)\cong\mathbb Z$. Let $\phi:\pi_1(M)\to\mathbb Z$ be the abelianization taking $\mu$ to $1$, put $\Lambda=\mathbb Z[t,t^{-1}]$, and use its associated normal-cover right coefficient system, whose transport around a loop $a$ is left multiplication by $t^{-\phi(a)}$ in the based fiber.

There is a finite Laurent matrix $A(t)$ such that
$$H_1(M;\Lambda)\cong\operatorname{coker}A(t),$$
naturally on changing the constant coefficient ring from $\mathbb Z$ to any commutative unital ring $k$. More precisely the actual coefficient map gives
$$H_1(M;\Lambda)\otimes_{\mathbb Z}k\cong H_1(M;k[t,t^{-1}]).$$
There is a polynomial $\Delta(t)\in\mathbb Z[t]$ with $\Delta(0)\ne0$ and $\Delta(1)=1$ annihilating $H_1(M;\Lambda)$; its coefficient image annihilates $H_1(M;k[t,t^{-1}])$ for every $k$. In particular $\Delta$ is primitive and its reduction modulo any prime is nonzero. No choice principle, finite CW type, triangulation, smoothness or Seifert presentation for $M$ is assumed.

## Facts & Assumptions

**Given:** The compact manifold, marked homology generator and coefficient convention.

[F1] There is a finite one-vertex presentation two-complex $K$ and a based map $K\to M$ inducing a fundamental-group isomorphism, with a marked one-cell mapping exactly by $\mu$. Its underlying space is a finite polyhedron. [[thm-compact-manifolds-have-finite-presentation-complexes-without-choice]]

[F2] Normal-cover local first homology is naturally the covering subgroup's abelianization tensored with the constant coefficient ring. This applies to both spaces of [F1] and their actual map. [[lem-normal-cover-local-homology-detects-mixed-derived-kernels-without-choice]]

[F3] For a finite CW complex with supplied cell lifts the cellular local chains, with their transported signed incidence matrices, compute singular local homology. Here the coefficient rings are commutative, so the left/right distinction is just the corresponding identical scalar action. [[thm-cellular-chains-compute-homology-with-local-coefficients]]

## Proof

1.1 Apply [F1], and pull the given coefficient system to $K$. The induced fundamental-group map is an isomorphism and matches $\mu$, so [F2] identifies the actual $H_1$ of $K$ with that of $M$ for $\Lambda$ and every $k[t,t^{-1}]$. Use [F3] on this actual finite two-complex. Its chain groups are finite free, with $C_0=\Lambda$, a basis of one-cells including $e_\mu$, and a finite basis of two-cells. Cell lifts and orientations require only finitely many choices. Their incidence coefficients reduce under every constant-ring map, so coefficient change on these finite cellular chains is literally coefficientwise change in their Laurent matrices. In particular augmentation $t=1$ gives exactly the ordinary integral cellular complex of $K$. [F1, F2, F3, given, construct, algebra]

2.1 If the other oriented one-cells have images $n_j\in\mathbb Z$, their degree-one boundaries are $t^{-n_j}-1$, while $d_1e_\mu=t^{-1}-1$. Set $z=-t e_\mu$, so $d_1z=t-1$. Write $q_j=(t^{-n_j}-1)/(t-1)\in\Lambda$, an explicit finite geometric sum also for negative exponents, and replace $e_j$ by $f_j=e_j-zq_j$. This is an invertible triangular basis change with $C_1=\Lambda z\oplus\Lambda^r\langle f_j\rangle$ and $d_1f_j=0$. Multiplication by $t-1$ is injective in $k[t,t^{-1}]$ for every commutative $k$: the top nonzero coefficient of a nonzero finite Laurent list remains a nonzero top coefficient after multiplication by this monic polynomial. Thus $\ker d_1$ is exactly the $f_j$ summand, both integrally and after every constant-ring change. Since $d_1d_2=0$, the $z$ row of $d_2$ is zero. Let $A(t)$ be its remaining $r\times s$ matrix, giving $H_1(K;\Lambda)=\operatorname{coker}A(t)$ and $H_1(K;k[t,t^{-1}])=\operatorname{coker}A_k(t)$. [F3, step 1.1, construct, algebra]

3.1 At $t=1$, $d_1=0$ and the integral first homology is therefore $\mathbb Z[z]\oplus\operatorname{coker}A(1)$. The marked class $z$ maps to $-[\mu]$, a free generator of $H_1(M;\mathbb Z)$ by hypothesis and [F1]–[F2]. Hence $\operatorname{coker}A(1)=0$ and $A(1):\mathbb Z^s\to\mathbb Z^r$ is onto. For each of the finitely many coordinate vectors choose one preimage, giving an integer $s\times r$ matrix $S$ with $A(1)S=I_r$. Put $D(t)=A(t)S$ and $\Delta_0(t)=\det D(t)$. Then $\Delta_0(1)=1$. The adjugate identity $D\,\operatorname{adj}D=\Delta_0 I_r$, proved by finite signed minor expansion, gives $\Delta_0\Lambda^r\subseteq\operatorname{im}D\subseteq\operatorname{im}A$. Thus $\Delta_0$ annihilates the presented first homology. The same identity is an identity of integer Laurent matrices, so holds after every coefficient change as well. For $r=0$, use the empty determinant one; the corresponding first homology is zero. [F1, F2, given, step 1.1, step 2.1, construct, algebra]

4.1 Normalize $\Delta_0$ by a power of $t$ so its smallest exponent is zero, obtaining the asserted polynomial $\Delta$ with nonzero constant term. This multiplies it by a Laurent unit and retains $\Delta(1)=1$ and every annihilation assertion. The coefficients sum to one, so their greatest common divisor is one; reduction modulo any prime still evaluates to one at $t=1$ and is therefore nonzero. Finally finite presentation cokernels commute with the change $\mathbb Z\to k$ here directly: tensoring the presentation generators imposes exactly the same finite-column relations with their coefficients in $k$, so $\operatorname{coker}A\otimes_{\mathbb Z}k=\operatorname{coker}A_k$ by the tensor generators-and-relations construction. Via the natural identifications in steps 1.1–2.1 this is the actual coefficient map on local $H_1$, not just an abstract isomorphism of modules. All selections in step 3.1 were finite preimages of a finite standard basis, and the remaining operations were finite integer or Laurent-matrix calculations. This proves the full scope without a choice axiom or a finite CW claim about $M$. [F1, F2, F3, step 1.1, step 2.1, step 3.1, construct, algebra] ∎
