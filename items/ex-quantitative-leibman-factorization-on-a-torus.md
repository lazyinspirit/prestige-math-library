---
dependency_level: 12
id: ex-quantitative-leibman-factorization-on-a-torus
kind: example
title: An explicit smooth–rational factorization of a torus orbit
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - thm-green-tao-quantitative-nil-orbit-factorization
  - def-smooth-and-rational-polynomial-nilsequences
  - def-polynomial-sequence-on-a-filtered-group
  - def-filtered-nilpotent-lie-group-and-nilmanifold
  - def-malcev-basis-and-rationality
  - def-total-equidistribution-of-a-nil-orbit
  - lem-tangent-space-of-a-lie-group-is-a-lie-algebra
justified_by: []
aliases: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Ben Green and Terence Tao, The quantitative behaviour of polynomial orbits on nilmanifolds
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf
      locator: Theorem 1.19 and torus transition example, printed pp. 474–476
    - title: Bob Hough, Math 639 Lecture 16, Equidistribution on nilmanifolds
      url: https://www.math.stonybrook.edu/~rdhough/mat639-spring17/lectures/lecture16.pdf
      locator: Torus quantitative-equidistribution example and factorization statement, pp. 22 and 26–28
---

## Example

For every integer $N\geq2$, consider the filtered nilmanifold
$G/\Gamma=\mathbb R/\mathbb Z$ with additive group $G=\mathbb R$, lattice
$\Gamma=\mathbb Z$, filtration $G_0=G_1=\mathbb R$, $G_2=\{0\}$, and
Mal’cev basis $X=1$. For any $A>0$, the polynomial orbit
$g(n)=n(1/2+1/N)$ on $[N]$ has the exact factorization

$$g(n)=\varepsilon(n)+g'(n)+\gamma(n),\qquad \varepsilon(n)=n/N,\quad g'(n)=0\text{ in }G'=\{0\},\quad \gamma(n)=n/2.$$

With $M=2$ and $M_0=1$, the smooth factor is $(M,N)$-smooth, the middle
factor is totally $M^{-A}$-equidistributed on the one-point nilmanifold, and
the rational factor has period $2$.

## Example references

[Green and Tao, Theorem 1.19](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n2-p02-p.pdf)

[Hough, Math 639 Lecture 16](https://www.math.stonybrook.edu/~rdhough/mat639-spring17/lectures/lecture16.pdf)

## Facts & Assumptions

**Given:** An integer $N\geq2$, a real $A>0$, $G=\mathbb R$ with additive
operation, $\Gamma=\mathbb Z$, $G_0=G_1=\mathbb R$, $G_2=\{0\}$, and
$g(n)=n(1/2+1/N)$.

[F1] The lattice is a discrete subgroup whose right quotient is compact.
[[def-filtered-nilpotent-lie-group-and-nilmanifold]]

[F2] The nilmanifold quotient consists of right cosets $g\Gamma$.
[[def-filtered-nilpotent-lie-group-and-nilmanifold]]

[F3] A filtration is a decreasing sequence of closed connected subgroups
satisfying the stated group commutator condition.
[[def-filtered-nilpotent-lie-group-and-nilmanifold]]

[F4] The Mal’cev basis coordinates are the unique ordered exponential
coordinates with a smooth coordinate map and lattice coordinate set
$\mathbb Z^m$. [[def-malcev-basis-and-rationality]]

[F5] A $Q$-rational basis has rational structure constants of height at most
$Q$. [[def-malcev-basis-and-rationality]]

[F6] The coordinate chain and quotient distances are defined by the displayed
infima over finite chains and lattice translates.
[[def-malcev-basis-and-rationality]]

[F7] Polynomial sequences are characterized by their iterated right
differences lying in the filtration groups. [[def-polynomial-sequence-on-a-filtered-group]]

[F8] $(M,N)$-smoothness bounds the coordinate-chain distance to the identity
and between successive terms. [[def-smooth-and-rational-polynomial-nilsequences]]

[F9] Rational subgroups have bounded-height Lie-algebra bases and lattice
intersection; rational elements have powers of bounded positive order in the
lattice, and rational points have rational representatives.
[[def-smooth-and-rational-polynomial-nilsequences]]

[F10] Total Lipschitz equidistribution means the normalized Lipschitz average
bound on every sufficiently long arithmetic progression.
[[def-total-equidistribution-of-a-nil-orbit]]

[F11] The tangent Lie bracket is induced by commutators of
left-translation-invariant derivations. [[lem-tangent-space-of-a-lie-group-is-a-lie-algebra]]

## Verification

**Proof technique:** direct.

1.1 The additive group $\mathbb R$ is connected and simply connected, and its group commutator vanishes. In the coordinate $x$, the invariant derivation with tangent value $r$ is $r\partial_x$, so its bracket with $s\partial_x$ is zero by the commutator convention [F11]. Thus the tangent Lie algebra is abelian and nilpotent. The subgroup $\Gamma=\mathbb Z$ is discrete; for every $x\in\mathbb R$, subtracting $\lfloor x\rfloor$ gives a representative in $[0,1]$, so the image of the compact interval $[0,1]$ covers $\mathbb R/\mathbb Z$. The filtration $G_0=G_1=\mathbb R$, $G_2=\{0\}$ has closed connected terms and satisfies the commutator condition; because $G\ne\{0\}$, its degree is one. The Lie exponential is the identity map, so $X=1$ gives $\psi_X(x)=x$ and zero structure constants, all of height one; hence it is $1$-rational. Every subspace of this one-dimensional abelian Lie algebra is an ideal, and its exponential is closed and connected. The tails $H_0=\mathbb R$ and $H_1=\{0\}$ therefore match $G_1$ and $G_2$, and $\Gamma=\psi_X^{-1}(\mathbb Z)$, so $X$ is adapted. Each chain cost is the absolute difference of adjacent coordinates; the triangle inequality makes every chain cost at least $|x-y|$, and a one-edge chain attains it. Hence $d_X^G(x,y)=|x-y|$, so the stated quotient, filtration, basis, rationality, and coordinate metric satisfy [F1], [F2], [F3], [F4], [F5], and [F6]. [given, F1, F2, F3, F4, F5, F6, F11, algebra]

1.2 The map $g(n)=n(1/2+1/N)$ is a homomorphism from $\mathbb Z$ into the additive group $G$. Its first right difference is the constant $h(1/2+1/N)$, and its second difference is zero. Hence it is a polynomial sequence for the degree-one filtration by [F7]. The three factors are also polynomial: $\varepsilon(n)=n/N$ and $\gamma(n)=n/2$ have constant first differences and zero second differences, while $g'$ is constant. Direct addition gives $g(n)=\varepsilon(n)+g'(n)+\gamma(n)$. [given, F7, algebra]

2.1 For every $n\in[N]$, $|\varepsilon(n)|=n/N\leq1\leq M$, and $|\varepsilon(n)-\varepsilon(n-1)|=1/N\leq M/N$. Thus $\varepsilon$ is $(M,N)$-smooth. For every $n$, $2\gamma(n)=n\in\Gamma$, so $\gamma(n)\Gamma$ is $M$-rational; moreover $\gamma(n+2)-\gamma(n)=1\in\Gamma$, giving period two. [given, F5, F6, F8, F9, step 1.2, algebra]

3.1 The subgroup $G'=\{0\}$ is closed and connected, its intersection with $\Gamma$ is a lattice, and its empty basis is $M$-rational. Its quotient has one point and normalized Haar measure concentrated there. Every average of the constant orbit $g'(n)\Gamma'$ equals the integral of every Lipschitz function exactly, on every arithmetic progression. Its discrepancy is zero, so it is totally $M^{-A}$-equidistributed for every $A>0$. The chosen $M=2$ satisfies $M_0\leq M$; the implicit constant in a bound depending on $A,m,d$ may be enlarged to at least $2$. [given, F1, F2, F3, F4, F5, F6, F9, F10, step 1.2, algebra] ∎
