---
id: lem-ip-calderon-disk-inclusion-perimeter-scaling
kind: lemma
title: Scaling the perimeter of a disk inclusion
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-countable-choice
  - def-ip-spatial-bv-and-distributional-tv
  - ex-ip-bv-jump-across-smooth-curve
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - lem-surface-integral-is-independent-of-c-one-boundary-charts
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - thm-chain-rule-for-total-derivatives
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume Countable Choice. Let $x_0\in\mathbb R^2$, $r>0$, $E=B(x_0,r)$, and let $D\subset\mathbb R^2$ be open with $\overline E\subset D$. Then $\chi_E\in BV(\mathbb R^2)$, its distributional derivative is
$$D\chi_E=-\nu_E\,\mathcal H^1|_{\partial E},\qquad \nu_E(x)=\frac{x-x_0}{r},$$
and
$$TV(\chi_E;\mathbb R^2)=TV(\chi_E;D)=2\pi r.$$

## Statement references

[[def-ip-spatial-bv-and-distributional-tv|The distributional derivative and total-variation conventions.]]

[[ex-ip-bv-jump-across-smooth-curve|The unit-disk distributional derivative and perimeter.]]

[[def-surface-integral-on-a-compact-c-one-hypersurface|Surface measure as a chart integral on a compact C1 hypersurface.]]

## Facts & Assumptions

**Given:** Countable Choice, $x_0\in\mathbb R^2$, $r>0$, $E=B(x_0,r)$, and an open $D$ with $\overline E\subset D$.

[F1] For $u\in L^1$, $\langle Du,\phi\rangle=-\int u\,\operatorname{div}\phi$ on smooth compactly supported tests; if $Du$ is a vector measure, $|Du|(A)$ is the supremum of $\sum_j|Du(A_j)|$ over Borel partitions of $A$, and $TV(u;G)=|Du|(G)$. ([[def-ip-spatial-bv-and-distributional-tv]])

[F2] For the unit disk $B$, $D\chi_B=-\nu_B\mathcal H^1|_{\partial B}$ and $TV(\chi_B;\mathbb R^2)=\mathcal H^1(\partial B)=2\pi$; equivalently, $\int_B\operatorname{div}\psi\,dy=\int_{\partial B}\psi\cdot\nu_B\,d\mathcal H^1$. ([[ex-ip-bv-jump-across-smooth-curve]])

[F3] For a $C^1$ diffeomorphism $T$, the change-of-variables identity holds for every nonnegative Lebesgue-measurable integrand; additivity gives the corresponding identity for an integrable signed integrand by applying it to its positive and negative parts. ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[cor-additivity-of-the-nonnegative-lebesgue-integral]])

[F4] Surface measure on a compact $C^1$ hypersurface is the chart integral; the regular chart density is the square root of the Gram determinant, so a circle parametrization has density equal to its speed. ([[def-surface-integral-on-a-compact-c-one-hypersurface]], [[lem-surface-integral-is-independent-of-c-one-boundary-charts]])

[F5] The derivative of a $C^1$ composition is the product of the derivative matrices. ([[thm-chain-rule-for-total-derivatives]])

[A1] Countable Choice is assumed at the unit-disk jump, surface-integral, and change-of-variables interfaces. ([[def-countable-choice]])

## Proof

**Given:** The data in the statement.

1.1 Let $T(y)=x_0+ry$ and, for arbitrary $\phi\in C_c^\infty(\mathbb R^2;\mathbb R^2)$, put $\psi=\phi\circ T$. By [F5], $\operatorname{div}_y\psi(y)=r\,\operatorname{div}_x\phi(T(y))$. Applying [F3] to the positive and negative parts of $\operatorname{div}\phi$, whose integrals are finite because $\phi$ is smooth and compactly supported, gives
$$\int_E\operatorname{div}\phi(x)\,dx=r^2\int_B\operatorname{div}\phi(T(y))\,dy=r\int_B\operatorname{div}\psi(y)\,dy.$$
By [F2] this is $r\int_{\partial B}\psi\cdot\nu_B\,d\mathcal H^1$. The circle parametrization in [F4] has outward normal $(\cos\theta,\sin\theta)$ and arclength element $r\,d\theta$, so this last expression equals $\int_{\partial E}\phi\cdot\nu_E\,d\mathcal H^1$. Thus $\int_E\operatorname{div}\phi=\int_{\partial E}\phi\cdot\nu_E\,d\mathcal H^1$ for every test field; [F1] yields $D\chi_E=-\nu_E\mathcal H^1|_{\partial E}$. [A1, F1, F2, F3, F4, F5, given, algebra]

2.1 By [F4], the circle is parametrized with speed $r$, so $\mathcal H^1(\partial E)=2\pi r$. For any Borel partition $(A_j)$ of $\partial E$, [F1] and $|\nu_E|=1$ give $\sum_j|D\chi_E(A_j)|=\sum_j|\int_{A_j}\nu_E\,d\mathcal H^1|\le2\pi r$. For the reverse bound, partition the circle into $N$ equal arcs and their finitely many endpoints. The endpoints have zero arclength; on each arc, direct integration of $(\cos\theta,\sin\theta)r$ gives a vector of norm $2r\sin(\pi/N)$. Thus the partition sum is $2rN\sin(\pi/N)$, which tends to $2\pi r$ as $N\to\infty$. By the partition definition in [F1], $TV(\chi_E;\mathbb R^2)=2\pi r$. This finite variation proves $\chi_E\in BV(\mathbb R^2)$. [A1, F1, F4, step 1.1, algebra]

2.2 Because $\overline E\subset D$, the full derivative measure in step 1.1 is supported inside $D$. Hence $TV(\chi_E;D)=|D\chi_E|(D)=|D\chi_E|(\mathbb R^2)=2\pi r$. [F1, step 1.1, step 2.1, given] ∎
