---
id: lem-hilbert-valued-path-energy-characterization
kind: lemma
title: Finite partition energy yields Hilbert-valued AC2 paths
status: draft
dependency_level: 1
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: [lem-bochner-time-l2-is-separable-hilbert, thm-riesz-representation-for-hilbert-space, thm-bounded-linear-maps-commute-with-bochner-integration, thm-cauchy-schwarz-in-an-inner-product-space, thm-minkowski-inequality-for-integrals, def-axiom-of-choice, def-countable-choice, def-dependent-choice, thm-choice-implies-dependent-implies-countable-choice, def-bochner-integrable-function, thm-bochner-integrability-criterion, thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n, thm-chebyshev-markov-inequality-for-the-integral, thm-finite-and-countable-subadditivity-of-measures]
justified_by: []
proof_strategy: direct
axiom_use: "AC supplies Countable and Dependent Choice for Bochner representatives, Riesz representation, and countable null-set unions. No RNP assumption is needed for the derivative identification, which follows from simple-function approximation and scalar Lebesgue differentiation."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Luigi Ambrosio, Nicola Gigli, and Giuseppe Savaré, Gradient Flows in Metric Spaces and in the Space of Probability Measures"
      url: "https://www2.stat.duke.edu/~sayan/ambrosio.pdf"
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport"
      url: "https://arxiv.org/pdf/1805.09545"
---
## Statement

Assume AC. Let $H$ be a separable real Hilbert space, $T>0$, and $x:[0,T]\to H$ be continuous. For a finite partition $P=(t_i)_{i=0}^N$ with $0=t_0<\cdots<t_N=T$, set
$$Q_P(x)=\sum_{i=0}^{N-1}\frac{\|x(t_{i+1})-x(t_i)\|_H^2}{t_{i+1}-t_i},\qquad C(x)=\sup_P Q_P(x).$$
If $C(x)<\infty$, then there is a strongly measurable $u\in L^2((0,T);H)$ such that $x(t)=x(0)+\int_0^t u(s)\,ds$ for every $t$, $x$ is norm-differentiable almost everywhere with derivative $u$, and
$$\int_0^T\|u(t)\|_H^2\,dt=C(x).$$

## Statement references

[[lem-bochner-time-l2-is-separable-hilbert]]

[[thm-riesz-representation-for-hilbert-space]]

[Ambrosio, Gigli, and Savaré, Chapter 4](https://www2.stat.duke.edu/~sayan/ambrosio.pdf)

[Chizat and Bach, Appendix B.2.1](https://arxiv.org/pdf/1805.09545)

## Facts & Assumptions

**Given:** AC, $H,T,x$, and the finite partition bound $C(x)$.

[F1] The interval space $Z=L^2((0,T);H)$ with its Bochner inner product is a separable Hilbert space, and interval step functions with values in a countable dense subset of $H$ are dense in $Z$. [[lem-bochner-time-l2-is-separable-hilbert]]

[F2] A bounded real linear functional on a real Hilbert space has a unique Riesz representative, with equal norm. [[thm-riesz-representation-for-hilbert-space]]

[F3] Strongly measurable Bochner-integrable functions admit integrable simple approximations, and Bochner integrability is equivalent to integrability of the norm. [[def-bochner-integrable-function]] [[thm-bochner-integrability-criterion]]

[F4] Bochner integrals commute with bounded linear functionals, and Cauchy–Schwarz bounds the scalar pairings. [[thm-bounded-linear-maps-commute-with-bochner-integration]] [[thm-cauchy-schwarz-in-an-inner-product-space]]

[F5] AC implies Countable and Dependent Choice, as needed for countable approximations and null-set unions. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F6] Scalar locally integrable functions equal the limits of their centered interval averages almost everywhere. [[thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]]

[F7] Markov's inequality and countable subadditivity show that sets with summable measures have a null limsup. [[thm-chebyshev-markov-inequality-for-the-integral]] [[thm-finite-and-countable-subadditivity-of-measures]]

## Proof


**Given:** AC, a continuous path $x$, and $C=C(x)<\infty$.

1.1 Let $S$ be the vector space of all finite $H$-valued interval step functions. It contains the dense family in [F1], hence is dense in $Z$. If $f(t)=\sum_{i=0}^{N-1}c_i\mathbf1_{(t_i,t_{i+1})}(t)$ on a partition $P$, define $\Lambda(f)=\sum_i\langle c_i,x(t_{i+1})-x(t_i)\rangle_H$. Refining $P$ leaves this sum unchanged, so $\Lambda$ is well-defined and linear on $S$. Finite-sum Cauchy–Schwarz gives $|\Lambda(f)|\le\|f\|_Z Q_P(x)^{1/2}\le\sqrt C\,\|f\|_Z$. By [F1], $\Lambda$ extends uniquely to a bounded linear functional on $Z$, and [F2] represents it by $u\in Z$. [F1, F2, given, construct]

2.1 Fix $0\le s<t\le T$ and $c\in H$. The function $c\mathbf1_{(s,t)}$ belongs to $S$, so its defining value is $\Lambda(c\mathbf1_{(s,t)})=\langle c,x(t)-x(s)\rangle_H$. By the Riesz representation in step 1.1 and commutation of bounded linear functionals with Bochner integrals, this equals $\int_s^t\langle c,u(r)\rangle_Hdr$. The identity holds for every $c\in H$; take $c$ equal to the difference of $x(t)-x(s)$ and $\int_s^tu(r)dr$ to see that its squared norm is zero. Thus $x(t)-x(s)=\int_s^t u(r)dr$ in $H$. [F2, F4, step 1.1]

3.1 By [F3], choose simple $H$-valued functions $s_n$ with $\int_0^T\|u-s_n\|_Hdt<2^{-3n}$ and put $g_n(t)=\|u(t)-s_n(t)\|_H$. Markov's inequality gives $\operatorname{Leb}\{g_n>2^{-n}\}\le2^{-2n}$; [F7] shows that outside a null set $g_n(t)\le2^{-n}$ eventually. Remove also the countable union of differentiation exceptional sets for all scalar functions $g_n$ and the finitely many indicators defining each $s_n$, using [F5] and [F6]. At each remaining interior $t$, the average of $g_n$ over either one-sided interval with endpoint $t$ has limsup at most $2g_n(t)$, since that interval lies in the centered interval of twice its length. The average of $\|s_n(q)-s_n(t)\|_H$ tends to zero: $s_n$ has finitely many values and each level-set indicator has density $1$ or $0$ at $t$. Therefore $\displaystyle \limsup_{h\to0}\left\|\frac1h\int_t^{t+h}u(q)dq-u(t)\right\|_H\le3g_n(t)$ for every $n$, and letting $n\to\infty$ proves the limit is zero. Step 2.1 identifies this average with $(x(t+h)-x(t))/h$, proving norm differentiability of $x$ with derivative $u$ almost everywhere. [F3, F5, F6, F7, step 2.1]

4.1 The norm of $\Lambda$ is exactly $\sqrt C$. The upper bound is step 1.1. For any partition $P$ with $Q_P(x)>0$, take the step function $f$ with $c_i=(x(t_{i+1})-x(t_i))/(t_{i+1}-t_i)$ on each interval. It belongs to $S$ and satisfies $\Lambda(f)=\|f\|_Z^2=Q_P(x)$, so $\|\Lambda\|_Z\ge|\Lambda(f)|/\|f\|_Z=\sqrt{Q_P(x)}$. If $Q_P(x)=0$, this lower bound is automatic. Taking the supremum over partitions gives $\|\Lambda\|_Z^2=C$. By [F2], $\|u\|_Z=\|\Lambda\|_Z$, proving the displayed energy identity. [F2, step 1.1, step 3.1] ∎
