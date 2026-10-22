---
id: lem-ip-calderon-disk-inclusion-perimeter-scaling
kind: lemma
title: Scaling the perimeter of a disk inclusion
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-countable-choice
  - def-ip-spatial-bv-and-distributional-tv
  - lem-ip-lipschitz-graph-area-and-calculus-under-countable-choice
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - lem-surface-integral-is-independent-of-c-one-boundary-charts
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - thm-chain-rule-for-total-derivatives
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes,
        version 1.6
      url: https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf
      locator: "§7.1, Definition 7.12, Remark 7.13 and Proposition 7.16, printed pp.
        233–234 (PDF pp. 239–240): Gauss–Green sign, perimeter measure and graph
        flux; contextual source, with the disk argument proved locally below."
---

## Statement

Assume Countable Choice. Let $x_0\in\mathbb R^2$, $r>0$, $E=B(x_0,r)$, and let $D\subset\mathbb R^2$ be open with $\overline E\subset D$. Then $\chi_E\in BV(\mathbb R^2)$, its distributional derivative is
$$D\chi_E=-\nu_E\,\mathcal H^1|_{\partial E},\qquad \nu_E(x)=\frac{x-x_0}{r},$$
and
$$TV(\chi_E;\mathbb R^2)=TV(\chi_E;D)=2\pi r.$$

## Statement references

[[def-ip-spatial-bv-and-distributional-tv|The distributional derivative and total-variation conventions.]]

[[lem-ip-lipschitz-graph-area-and-calculus-under-countable-choice|The epigraph/subgraph flux identity under Countable Choice.]]

[[def-surface-integral-on-a-compact-c-one-hypersurface|Surface measure as a chart integral on a compact C1 hypersurface.]]

## Facts & Assumptions

**Given:** Countable Choice, $x_0\in\mathbb R^2$, $r>0$, $E=B(x_0,r)$, and an open $D$ with $\overline E\subset D$.

[F1] For $u\in L^1$, $\langle Du,\phi\rangle=-\int u\,\operatorname{div}\phi$ on smooth compactly supported tests; if $Du$ is a vector measure, $|Du|(A)$ is the supremum of $\sum_j|Du(A_j)|$ over Borel partitions of $A$, and $TV(u;G)=|Du|(G)$. ([[def-ip-spatial-bv-and-distributional-tv]])

[F2] On an epigraph of a locally Lipschitz graph, a smooth vector field supported away from the chart sides has divergence integral $\int\psi(y,h(y))\cdot(Dh(y),-1)\,dy$; the sign reverses for a subgraph. For smooth graphs, [F4] identifies this with outward-normal surface flux. ([[lem-ip-lipschitz-graph-area-and-calculus-under-countable-choice]])

[F3] For a $C^1$ diffeomorphism $T$, the change-of-variables identity holds for every nonnegative Lebesgue-measurable integrand; additivity gives the corresponding identity for an integrable signed integrand by applying it to its positive and negative parts. ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[cor-additivity-of-the-nonnegative-lebesgue-integral]])

[F4] Surface measure on a compact $C^1$ hypersurface is the chart integral; the regular chart density is the square root of the Gram determinant, so a circle parametrization has density equal to its speed. ([[def-surface-integral-on-a-compact-c-one-hypersurface]], [[lem-surface-integral-is-independent-of-c-one-boundary-charts]])

[F5] The derivative of a $C^1$ composition is the product of the derivative matrices. ([[thm-chain-rule-for-total-derivatives]])

[A1] Countable Choice is assumed at the graph-calculus, surface-integral, and change-of-variables interfaces. ([[def-countable-choice]])

## Proof

**Given:** The data in the statement.

1.1 Put $B=B(0,1)$ and first prove its flux formula directly from [F2]. Cover $\partial B$ by finitely many graph neighborhoods, each expressing $B$ locally as an epigraph or subgraph of a smooth function, and add an interior open set compactly contained in $B$ to cover $\overline B$. Rigid changes of coordinates preserve volume, divergence and normal flux by [F3]–[F5], so the graph identities apply in these coordinates. Choose smooth nonnegative functions $\eta_i$ compactly supported in those sets and with $\sum_i\eta_i>0$ on $\overline B$: finitely many smaller balls cover this compact set, and ordinary Euclidean smooth bumps positive on those balls supply the functions. Normalize their sum on a neighborhood of $\overline B$, using one additional smooth cutoff equal to one near $\overline B$ and supported where that sum is positive. This gives functions $\chi_i$ subordinate to the same sets with $\sum_i\chi_i=1$ near $\overline B$. For any smooth compactly supported vector field $\psi$, apply [F2] to $\chi_i\psi$ in each boundary graph patch. Its divergence integral over $B$ is its outward flux over $\partial B$ by [F4], because the graph domain and $B$ agree on the support. The interior piece has divergence integral zero: its support is compact inside $B$, so choose a horizontal line below that support and apply [F2] on the half-plane above that line. The field vanishes on the line and its half-plane integral equals its whole-space integral, which equals its integral over $B$. Summing the finitely many identities, the derivatives of the partition cancel since its sum is one near $\overline B$. Consequently $\int_B\operatorname{div}\psi=\int_{\partial B}\psi\cdot\nu_B\,d\mathcal H^1$. This proves the required unit-disk identity without using a B-example or a stronger-choice divergence theorem. [A1, F2, F3, F4, F5, given, construct, algebra]

1.2 Let $T(y)=x_0+ry$ and, for arbitrary $\phi\in C_c^\infty(\mathbb R^2;\mathbb R^2)$, put $\psi=\phi\circ T$. By [F5], $\operatorname{div}_y\psi(y)=r\,\operatorname{div}_x\phi(T(y))$. Applying [F3] to the positive and negative parts of $\operatorname{div}\phi$, whose integrals are finite because $\phi$ is smooth and compactly supported, gives
$$\int_E\operatorname{div}\phi(x)\,dx=r^2\int_B\operatorname{div}\phi(T(y))\,dy=r\int_B\operatorname{div}\psi(y)\,dy.$$
By step 1.1 this is $r\int_{\partial B}\psi\cdot\nu_B\,d\mathcal H^1$. The circle parametrization in [F4] has outward normal $(\cos\theta,\sin\theta)$ and arclength element $r\,d\theta$, so this last expression equals $\int_{\partial E}\phi\cdot\nu_E\,d\mathcal H^1$. Thus $\int_E\operatorname{div}\phi=\int_{\partial E}\phi\cdot\nu_E\,d\mathcal H^1$ for every test field; [F1] yields $D\chi_E=-\nu_E\mathcal H^1|_{\partial E}$. [A1, F1, F3, F4, F5, step 1.1, given, algebra]

2.1 By [F4], the circle is parametrized with speed $r$, so $\mathcal H^1(\partial E)=2\pi r$. For any Borel partition $(A_j)$ of $\partial E$, [F1] and $|\nu_E|=1$ give $\sum_j|D\chi_E(A_j)|=\sum_j|\int_{A_j}\nu_E\,d\mathcal H^1|\le2\pi r$. For the reverse bound, partition the circle into $N$ equal arcs and their finitely many endpoints. The endpoints have zero arclength; on each arc, direct integration of $(\cos\theta,\sin\theta)r$ gives a vector of norm $2r\sin(\pi/N)$. Thus the partition sum is $2rN\sin(\pi/N)$, which tends to $2\pi r$ as $N\to\infty$. By the partition definition in [F1], $TV(\chi_E;\mathbb R^2)=2\pi r$. This finite variation proves $\chi_E\in BV(\mathbb R^2)$. [A1, F1, F4, step 1.2, algebra]

3.1 Because $\overline E\subset D$, the full derivative measure in step 1.2 is supported inside $D$. Hence $TV(\chi_E;D)=|D\chi_E|(D)=|D\chi_E|(\mathbb R^2)=2\pi r$. [F1, step 1.2, step 2.1, given] ∎
