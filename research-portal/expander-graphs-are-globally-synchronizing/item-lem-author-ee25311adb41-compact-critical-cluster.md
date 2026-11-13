---
title: A critical cluster point for a compact gradient trajectory
status: draft
research_item: lem-author-ee25311adb41-compact-critical-cluster
dependency_level: 5
---

## Prerequisites

- [lem-author-ee25311adb41-analytic-metric-transfer](item-lem-author-ee25311adb41-analytic-metric-transfer)
- [prop-expander-prereq-gradient-dissipation](item-prop-expander-prereq-gradient-dissipation)
- [math:cor-every-smooth-vector-field-on-a-compact-manifold-is-complete](https://alphabetamath.cc/item/cor-every-smooth-vector-field-on-a-compact-manifold-is-complete)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:thm-extreme-value-metric](https://alphabetamath.cc/item/thm-extreme-value-metric)
- [math:thm-compact-implies-the-other-compactness-forms](https://alphabetamath.cc/item/thm-compact-implies-the-other-compactness-forms)
- [math:def-riemannian-distance-on-a-connected-manifold](https://alphabetamath.cc/item/def-riemannian-distance-on-a-connected-manifold)
- [math:thm-riemannian-distance-is-a-metric](https://alphabetamath.cc/item/thm-riemannian-distance-is-a-metric)
- [math:thm-the-riemannian-distance-topology-is-the-manifold-topology](https://alphabetamath.cc/item/thm-the-riemannian-distance-topology-is-the-manifold-topology)
- [math:def-riemannian-speed-and-length](https://alphabetamath.cc/item/def-riemannian-speed-and-length)
- [math:lem-continuous-functions-riemann-integrable](https://alphabetamath.cc/item/lem-continuous-functions-riemann-integrable)
- [math:thm-first-mean-value-theorem-for-integrals](https://alphabetamath.cc/item/thm-first-mean-value-theorem-for-integrals)


## Statement

Assume countable choice. Let $(M,g)$ be a nonempty connected compact manifold with analytic potential $U$ and smooth Riemannian metric as in [lem-author-ee25311adb41-analytic-metric-transfer](item-lem-author-ee25311adb41-analytic-metric-transfer). Every downward gradient trajectory $q$, satisfying $q'=-\operatorname{grad}_g U$, exists for all forward times. Set $E(t)=U(q(t))$. There are $L\in\mathbb R$, $p\in M$ and times $t_j\to\infty$ such that $E(t)\downarrow L$, $q(t_j)\to p$, $U(p)=L$ and $\operatorname{grad}_g U(p)=0$.

## Facts & Assumptions

[F1] Smooth vector fields on compact manifolds are complete under countable choice. Riemannian distance is a finite metric on a connected manifold ([math:thm-riemannian-distance-is-a-metric](https://alphabetamath.cc/item/thm-riemannian-distance-is-a-metric)), induces its topology and is at most the length of any joining curve. Compact metric spaces are sequentially compact, and continuous real functions on them are bounded. Gradient dissipation gives $E'=-\|q'\|_g^2$ and, for energy bounded below, a finite limit $L$ and $\int_0^\infty\|q'\|_g^2dt=E(0)-L$.

[F2] A continuous real function on a closed nondegenerate real interval is Riemann integrable; its integral is additive over adjacent intervals and is nonnegative when the integrand is nonnegative ([math:lem-continuous-functions-riemann-integrable](https://alphabetamath.cc/item/lem-continuous-functions-riemann-integrable)).

[F3] If $f$ is continuous on $[a,b]$ with $a<b$, the first mean-value theorem for integrals with the nonnegative integrable weight identically one gives $s\in[a,b]$ such that $\int_a^b f(t)\,dt=f(s)(b-a)$ ([math:thm-first-mean-value-theorem-for-integrals](https://alphabetamath.cc/item/thm-first-mean-value-theorem-for-integrals)).

[F9] Exact suppliers: [lem-author-ee25311adb41-analytic-metric-transfer](item-lem-author-ee25311adb41-analytic-metric-transfer), [prop-expander-prereq-gradient-dissipation](item-prop-expander-prereq-gradient-dissipation), [math:cor-every-smooth-vector-field-on-a-compact-manifold-is-complete](https://alphabetamath.cc/item/cor-every-smooth-vector-field-on-a-compact-manifold-is-complete), [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice), [math:thm-extreme-value-metric](https://alphabetamath.cc/item/thm-extreme-value-metric), [math:thm-compact-implies-the-other-compactness-forms](https://alphabetamath.cc/item/thm-compact-implies-the-other-compactness-forms), [math:def-riemannian-distance-on-a-connected-manifold](https://alphabetamath.cc/item/def-riemannian-distance-on-a-connected-manifold), [math:thm-riemannian-distance-is-a-metric](https://alphabetamath.cc/item/thm-riemannian-distance-is-a-metric), [math:thm-the-riemannian-distance-topology-is-the-manifold-topology](https://alphabetamath.cc/item/thm-the-riemannian-distance-topology-is-the-manifold-topology), [math:def-riemannian-speed-and-length](https://alphabetamath.cc/item/def-riemannian-speed-and-length).

## Proof

**Given:** The data and hypotheses of the Statement.

**Goal:** Establish its conclusion.

1.1 The smooth metric and analytic potential give a smooth vector field $-\operatorname{grad}_g U$. Compact-vector-field completeness gives its global trajectories. The metric theorem makes $d_g$ a finite metric, and the distance-topology theorem makes $(M,d_g)$ a compact metric space. Boundedness below of $U$ and dissipation therefore supply $L$ and the finite squared-speed integral. [F1, F9, given]

2.1 Put $f(t)=\|q'(t)\|_g^2$, a continuous nonnegative function, and $I(T)=\int_0^T f(t)\,dt$. By step 1.1, $I(T)\to I:=E(0)-L$ as $T\to\infty$. For each integer $n\ge0$, set $a_n=\int_n^{n+1}f(t)\,dt$. Additivity and nonnegativity give $a_n=I(n+1)-I(n)\ge0$. Given $\varepsilon>0$, choose $N$ so $|I(T)-I|<\varepsilon/2$ for $T\ge N$. For integers $n\ge N$, $0\le a_n\le|I(n+1)-I|+|I(n)-I|<\varepsilon$, so $a_n\to0$. [F2, step 1.1, algebra, choose]

3.1 On each interval $[n,n+1]$, $f$ is continuous and the constant weight one is integrable and nonnegative. Applying [F3] with $a=n$, $b=n+1$ gives a nonempty set of $s_n\in[n,n+1]$ for which $f(s_n)=a_n$. Countable choice permits these selections simultaneously for all integers $n\ge0$. Thus $\|q'(s_n)\|_g^2\to0$. [F3, F9, step 2.1, choose]

4.1 Sequential compactness supplies a subsequence $q(s_{n_j})\to p$. The subsequence indices are strictly increasing, hence $n_j\to\infty$, and $t_j:=s_{n_j}\ge n_j$ gives $t_j\to\infty$. Continuity of $U$ and $E(t)\to L$ give $U(p)=L$. Continuity of the scalar function $x\mapsto\|\operatorname{grad}_g U(x)\|_g^2$, the gradient equation, and step 3.1 give $\|\operatorname{grad}_g U(p)\|_g^2=0$. Positive definiteness therefore gives $\operatorname{grad}_g U(p)=0$, as required. [F1, F9, step 1.1, step 3.1, choose] ∎
