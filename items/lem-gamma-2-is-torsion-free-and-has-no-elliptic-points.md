---
id: lem-gamma-2-is-torsion-free-and-has-no-elliptic-points
kind: lemma
title: "The projective group $\\bar\\Gamma(2)$ is torsion-free and acts freely"
status: published
origin: pipeline
deps:
  - def-principal-congruence-subgroup-gamma-2
  - def-modular-group-action-on-the-upper-half-plane
  - thm-standard-fundamental-domain-for-the-modular-group
  - def-order-in-a-group
  - def-congruence-modulo-an-integer
  - thm-classification-mobius-transformations
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "The trace/parity argument and Theorem 5.29, printed p. 96; torsion-freeness is interpreted modulo the scalar kernel."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Example 4.2, printed p. 48: level-two quotient background, not the torsion-free proof."
proof_strategy: direct
---

## Statement

The only torsion elements of $\Gamma(2)$ are $\pm I$; equivalently $\bar\Gamma(2)=\Gamma(2)/\{\pm I\}$ is torsion-free and has no elliptic fixed points on $\mathfrak H$. In particular $\Gamma(2)$ has no elliptic points and every point of $\mathfrak H$ has trivial stabiliser in $\bar\Gamma(2)$.

## Facts & Assumptions

**Given:** $\Gamma(2)=\{\gamma\in SL_2(\mathbb Z):\gamma\equiv I\pmod 2\}$ with image $\bar\Gamma(2)\le PSL_2(\mathbb Z)$ ([[def-principal-congruence-subgroup-gamma-2]], [[def-congruence-modulo-an-integer]]); the action of $PSL_2(\mathbb Z)$ on $\mathfrak H$ ([[def-modular-group-action-on-the-upper-half-plane]]).

[F1] A matrix $\gamma=\bigl(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\bigr)\in\Gamma(2)$ satisfies $a\equiv d\equiv1\pmod2$ and $b\equiv c\equiv0\pmod2$, and $ad-bc=1$ ([[def-principal-congruence-subgroup-gamma-2]], [[def-congruence-modulo-an-integer]]).

[F2] A nonidentity element of $PSL_2(\mathbb R)$ represented by $A\in SL_2(\mathbb R)$ is either parabolic (conjugate to a nonzero translation) or, with two fixed points on $\widehat{\mathbb C}$, is conjugate to $z\mapsto\lambda z$, $\lambda\ne0,1$, and $\operatorname{tr}(A)^2=\lambda+2+\lambda^{-1}$; it is elliptic exactly when $|\lambda|=1$ ([[thm-classification-mobius-transformations]]).

[F3] Order and torsion in a group; a nonidentity element of $PSL_2(\mathbb R)$ with a fixed point in $\mathfrak H$ is conjugate to a rotation $z\mapsto e^{i\theta}z$, and every point of $\mathfrak H$ with nontrivial stabiliser in $PSL_2(\mathbb Z)$ is $PSL_2(\mathbb Z)$-equivalent to $i$, $\omega$ or $\omega+1$ ([[def-order-in-a-group]], [[thm-standard-fundamental-domain-for-the-modular-group]], [[thm-classification-mobius-transformations]]).

## Proof

1.1 Suppose $\gamma\in\Gamma(2)$ has a nontrivial finite-order class in $PSL_2(\mathbb Z)$. By [F2] it cannot be parabolic, since a nonzero translation has infinite order. Thus it is conjugate to $z\mapsto\lambda z$ with $\lambda\ne1$ a root of unity, and $(\operatorname{tr}\gamma)^2=\lambda+2+\lambda^{-1}=2+2\cos\theta<4$. The trace $a+d$ is an even integer by [F1], so $|a+d|<2$ forces $a+d=0$. Hence $d=-a$, where $a$ is odd, and the determinant equation gives $bc=-a^2-1\equiv2\pmod4$. But $b,c$ are even, so $bc\equiv0\pmod4$, a contradiction. Therefore a finite-order projective class is trivial and its representative is $\pm I$. In particular the only torsion matrices in $\Gamma(2)$ are $\pm I$. [F1, F2, given, algebra]

2.1 For any $\tau\in\mathfrak H$, its $PSL_2(\mathbb Z)$-stabiliser is conjugate to a subgroup of the finite stabilisers in the standard domain [F3]. Thus every matrix in $\Gamma(2)$ fixing $\tau$ has a finite-order projective class. By 1.1 it is $\pm I$, so its class in $\bar\Gamma(2)$ is the identity. Hence $\bar\Gamma(2)$ is torsion-free and acts freely on $\mathfrak H$, and there are no elliptic points modulo scalars. [F3, step 1.1, given, algebra] ∎
