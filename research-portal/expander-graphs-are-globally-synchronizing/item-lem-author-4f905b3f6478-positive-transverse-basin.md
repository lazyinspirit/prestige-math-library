---
title: A positive transverse Hessian gives an open nonsynchronous basin
status: published
research_item: lem-author-4f905b3f6478-positive-transverse-basin
dependency_level: 2
sources:
  references:
    - title: Eduardo A. Canale, From weighted to unweighted graphs in Synchronizing
        Graph Theory, arXiv:2209.06362v3
      url: https://arxiv.org/pdf/2209.06362v3
      locator: Section II.B, printed p. 6 (PDF page 6), paragraph beginning "One way
        to see"
      statement: For the homogeneous Kuramoto flow, a nonsynchronous equilibrium whose
        potential Hessian has precisely the rotation zero mode and otherwise
        positive eigenvalues obstructs synchronization from almost every initial
        condition.
      hypotheses: A finite weighted graph with the homogeneous Kuramoto
        negative-gradient flow and its rotation-invariant cosine-difference
        potential; the equilibrium is not a consensus and the transverse Hessian
        is positive.
      reading_limits: Checked Section II.B, printed pp. 5–6, for this attribution
        only. The smooth-potential generalization and its attraction argument
        below are local deductions, not an imported theorem or a reconstruction
        of the rest of Canale's paper.
---

## Prerequisites

- [def-expander-prereq-gradient-trajectories](item-def-expander-prereq-gradient-trajectories)
- [def-expander-prereq-rotation-reduction](item-def-expander-prereq-rotation-reduction)
- [def-expander-prereq-phase-volume](item-def-expander-prereq-phase-volume)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-hessian-and-euclidean-critical-point](https://alphabetamath.cc/item/def-hessian-and-euclidean-critical-point)
- [math:thm-clairaut-schwarz-mixed-partials](https://alphabetamath.cc/item/thm-clairaut-schwarz-mixed-partials)
- [math:cor-real-spectral-theorem-for-self-adjoint-endomorphisms](https://alphabetamath.cc/item/cor-real-spectral-theorem-for-self-adjoint-endomorphisms)
- [math:thm-continuous-partial-derivatives-imply-total-differentiability](https://alphabetamath.cc/item/thm-continuous-partial-derivatives-imply-total-differentiability)
- [math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives)
- [math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules)
- [math:lem-fundamental-theorem-and-integration-by-parts](https://alphabetamath.cc/item/lem-fundamental-theorem-and-integration-by-parts)
- [math:thm-monotonicity-of-the-integral](https://alphabetamath.cc/item/thm-monotonicity-of-the-integral)
- [math:thm-derivative-of-exponential](https://alphabetamath.cc/item/thm-derivative-of-exponential)
- [math:cor-exponential-reciprocal-and-positivity](https://alphabetamath.cc/item/cor-exponential-reciprocal-and-positivity)
- [math:thm-exponential-limits-and-range](https://alphabetamath.cc/item/thm-exponential-limits-and-range)
- [` Eduardo A. Canale, From weighted to unweighted graphs in Synchronizing Graph Theory, arXiv:2209.06362v3 · Section II.B, printed p. 6 (PDF page 6), paragraph beginning "One way to see" `](https://arxiv.org/pdf/2209.06362v3)


## Statement

Assume countable choice. Let $U$ be a smooth real potential on a finite flat phase torus $T_V$, invariant under simultaneous rotations, and let $q$ be an equilibrium of its negative gradient flow. If its Hessian is positive on $\mathbf1^\perp$ and its rotation orbit contains no all-equal phase configuration, that orbit attracts a nonempty open set of initial phases. This set has positive normalized phase volume. Therefore the flow does not converge to the synchronous set for almost every initial phase. Positive transverse Hessian means $x^THx>0$ for every nonzero real $x$ with $\sum_vx_v=0$.

## Facts & Assumptions

[F1] Smooth negative gradient trajectories on the phase torus exist uniquely for all real times under countable choice, by [def-expander-prereq-gradient-trajectories](item-def-expander-prereq-gradient-trajectories) and [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice).

[F2] Rotation and relative phase conventions are those of [def-expander-prereq-rotation-reduction](item-def-expander-prereq-rotation-reduction).

[F3] Every nonempty open phase set has positive phase volume, and almost-everywhere assertions mean outside a phase-null set, by [def-expander-prereq-phase-volume](item-def-expander-prereq-phase-volume).

[F4] In angular Euclidean charts the Hessian is the matrix of second partial derivatives, and a critical point has zero gradient ([math:def-hessian-and-euclidean-critical-point](https://alphabetamath.cc/item/def-hessian-and-euclidean-critical-point)). Continuous second partial derivatives commute, so the Hessian of the smooth potential is symmetric at every chart point, without a local-minimum assumption ([math:thm-clairaut-schwarz-mixed-partials](https://alphabetamath.cc/item/thm-clairaut-schwarz-mixed-partials)).

[F5] A self-adjoint endomorphism of a finite-dimensional real inner product space has an orthonormal eigenbasis ([math:cor-real-spectral-theorem-for-self-adjoint-endomorphisms](https://alphabetamath.cc/item/cor-real-spectral-theorem-for-self-adjoint-endomorphisms)).

[F6] Continuous partial derivatives give total differentiability with the Jacobian as derivative ([math:thm-continuous-partial-derivatives-imply-total-differentiability](https://alphabetamath.cc/item/thm-continuous-partial-derivatives-imply-total-differentiability)); total derivatives obey the chain rule ([math:thm-chain-rule-for-total-derivatives](https://alphabetamath.cc/item/thm-chain-rule-for-total-derivatives)). Scalar sums, products, powers and compositions obey the usual derivative rules ([math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules)).

[F7] For a continuously differentiable scalar function on an open interval containing $[a,b]$, $f(b)-f(a)=\int_a^b f'(s)\,ds$ ([math:lem-fundamental-theorem-and-integration-by-parts](https://alphabetamath.cc/item/lem-fundamental-theorem-and-integration-by-parts)). Pointwise bounds on an integrable function bound its integral by the same constants times $b-a$ for $a<b$ ([math:thm-monotonicity-of-the-integral](https://alphabetamath.cc/item/thm-monotonicity-of-the-integral)).

[F8] The exponential is smooth with derivative itself ([math:thm-derivative-of-exponential](https://alphabetamath.cc/item/thm-derivative-of-exponential)), is positive with $e^{-x}=1/e^x$ ([math:cor-exponential-reciprocal-and-positivity](https://alphabetamath.cc/item/cor-exponential-reciprocal-and-positivity)), and tends to zero as its argument tends to negative infinity ([math:thm-exponential-limits-and-range](https://alphabetamath.cc/item/thm-exponential-limits-and-range)).

## Proof

**Given:** The torus, invariant potential and nonsynchronous equilibrium $q$ with a positive transverse Hessian.

**Goal:** Produce an open positive-volume set converging to nonsynchronous rotations of $q$.

1.1 Choose real representatives of $q$ in an angular chart and put $n=|V|$ and $E=\mathbf1^\perp$. Differentiating $U(\theta+c\mathbf1)=U(\theta)$ in $c$ and in the coordinates of $\theta$, using [F6], gives $\mathbf1^T\nabla U(\theta)=0$ and $\nabla U(\theta+c\mathbf1)=\nabla U(\theta)$. Differentiating the latter identity in $c$ gives $H\mathbf1=0$. By [F4], $H$ is symmetric, so $\mathbf1^THx=(H\mathbf1)^Tx=0$ for $x\in E$: its restriction to $E$ is a self-adjoint endomorphism. The nonsynchrony hypothesis excludes $n=1$, so $E$ has positive dimension. By [F5], choose an orthonormal eigenbasis of this restriction. Every eigenvalue is positive by the assumed positive quadratic form; let $m>0$ be their minimum. Expansion in this basis gives $x^THx\ge m\|x\|^2$ for $x\in E$. [given, F1, F2, F4, F5, F6, algebra]

2.1 Continuity of the Hessian gives $r>0$ such that for $\|z\|\le r$, all entries of $A(z)=\nabla^2U(q+z)-H$ have absolute value less than $m/(2n)$ and these points lie in the chosen chart. Indeed, $|x^TA(z)x|\le\max_{i,j}|A(z)_{ij}|(\sum_i|x_i|)^2\le n\max_{i,j}|A(z)_{ij}|\|x\|^2$; the last inequality follows by expanding $\sum_{i<j}(|x_i|-|x_j|)^2\ge0$. Thus $x^T\nabla^2U(q+z)x\ge(m/2)\|x\|^2$ for $x\in E$. For $y\in E$ with $\|y\|<r$, the scalar function $s\mapsto y^T\nabla U(q+sy)$ is continuously differentiable on an open interval containing $[0,1]$, by smoothness and [F6]. Its derivative is $y^T\nabla^2U(q+sy)y$, and its value at zero is zero because $q$ is an equilibrium. Applying both parts of [F7] yields $y^T\nabla U(q+y)=\int_0^1 y^T\nabla^2U(q+sy)y\,ds\ge(m/2)\|y\|^2$. [given, F4, F6, F7, step 1.1, algebra]

3.1 Shrink $r$ if necessary and choose $\delta>0$ so that the closed cylinder $q+c\mathbf1+y$, $|c|\le\delta$, $y\in E$, $\|y\|\le r$, lies inside the angular chart. A solution initially $q+c\mathbf1+y_0$ with $|c|<\delta$ and $\|y_0\|<r$ has constant mean coordinate $c$ and satisfies $\dot y=-\nabla U(q+y)$ by the rotation identities in step 1.1. As long as it stays in the ball, step 2.1 and [F6] give $d\|y\|^2/dt\le-m\|y\|^2$. By [F6] and [F8], $g(t)=e^{mt}\|y(t)\|^2$ has $g'(t)\le0$. On any such interval $[0,t]$, [F7] gives $g(t)-g(0)=\int_0^t g'(s)\,ds\le0$; hence $\|y(t)\|^2\le e^{-mt}\|y_0\|^2$. Since $e^{mt}$ has positive derivative and $e^0=1$ (the reciprocal identity at zero and positivity in [F8]), [F7] also gives $e^{mt}\ge1$ for $t\ge0$. Thus the estimate prevents a first exit from the ball by continuity. The closed cylinder stays inside the chart, and the complete flow in [F1] continues this estimate for all positive times. Finally [F8] gives $y(t)\to0$, so the trajectory converges to $R_cq$. [F1, F2, F6, F7, F8, step 1.1, step 2.1, algebra]

4.1 Allowing $c$ to range over $(-\delta,\delta)$ and $y_0$ over a smaller open ball in $E$ gives a nonempty open set in the angular chart: $\mathbb R\mathbf1\oplus E=\mathbb R^V$, with continuous inverse coordinates $c=n^{-1}\sum_v(\theta_v-q_v)$ and $y=\theta-q-c\mathbf1$. Step 3.1 makes each such solution converge to a rotation of $q$. No such limit is synchronous by hypothesis. The synchronous set is closed, being the zero fibre of the continuous relative-phase map in [F2]; an open metric ball about each nonsynchronous limit is therefore disjoint from that set. Convergence to this limit prevents the solution from approaching the synchronous set. By [F3] the open initial set has positive phase volume and cannot be contained in a phase-null exception set. This rules out almost-everywhere synchronous convergence. [F2, F3, step 3.1, construct] ∎

## Source notes

This locally proves the dynamical implication invoked in [Canale, Section II.B, p. 6](https://arxiv.org/pdf/2209.06362v3). The source supplies attribution for the Kuramoto case; the smooth-potential attraction argument here uses the declared mathematical suppliers. It establishes an open basin for the rotation orbit, rather than for one prescribed equilibrium point.
