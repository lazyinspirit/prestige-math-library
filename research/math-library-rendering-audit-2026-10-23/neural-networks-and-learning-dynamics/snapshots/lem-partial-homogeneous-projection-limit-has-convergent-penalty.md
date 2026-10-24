---
id: lem-partial-homogeneous-projection-limit-has-convergent-penalty
kind: lemma
title: A partial signed projection limit has convergent penalty and energy
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps: [def-axiom-of-choice, def-feature-measure-energy, def-wasserstein-gradient-flow-for-feature-energy, def-partial-one-homogeneous-measure-projection, def-partial-homogeneous-relaxed-objective, lem-signed-narrow-convergence-controls-bochner-moments, lem-partial-feature-flow-moment-and-energy-identities, lem-partial-homogeneous-projection-limit-is-stationary]
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from signed Bochner moment convergence, the partial flow identities and signwise stationarity, including their Jordan, DC and characteristic-representation branches. The final scalar contradiction uses no further choice."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport, Appendix C.4.2; local reconstruction of the penalty-convergence argument"
      url: "https://arxiv.org/pdf/1805.09545"
---
## Statement

Assume AC and the full partially homogeneous hypotheses of the stationarity lemma: a separable real Hilbert space $\mathcal H$; the feature-energy hypotheses with convex differentiable $R:\mathcal H\to[0,\infty)$ whose differential is locally Lipschitz on bounded subsets and bounded on sublevels; $d\ge2$; bounded continuously differentiable maps $\varphi:\Theta\to\mathcal H$ and $\widetilde V:\Theta\to[0,\infty)$ with Lipschitz differentials; $\Phi(w,\theta)=w\varphi(\theta)$ and the semiconvex potential $V(w,\theta)=|w|\widetilde V(\theta)$; and the nested cutoff and derivative-growth conditions of the feature-energy definition. For every $f\in\mathcal H$, require dense regular values for $G_f(\theta)=\langle f,\varphi(\theta)\rangle+\widetilde V(\theta)$. Retain either (i) $\Theta$ is the closure of a nonempty bounded connected open convex set with $C^1$ boundary and $dG_f(\theta)[n_\theta]=0$ on $\partial\Theta$ for every $f\in\mathcal H$, or (ii) $\Theta=\mathbb R^{d-1}$ and, for every $f\in\mathcal H$, $G_f(r\cdot)$ converges uniformly in $C^1(\mathbb S^{d-2})$ as $r\to\infty$ to a function with dense regular values.

Let $\mu_t$ be a Wasserstein gradient flow in $\mathcal P_2(\mathbb R\times\Theta)$ with finite initial energy. Suppose the finite signed projections $\sigma_t=h^1(\mu_t)$ converge narrowly to a finite signed measure $\nu$, meaning convergence of integrals against every bounded continuous real test function on $\Theta$. Put $m_\nu=\int\varphi\,d\nu$, with the intrinsic signed Bochner-integral convention, and $J(\nu)=R(m_\nu)+\int\widetilde V\,d|\nu|$. Then
$$\lim_{t\to\infty}\int|w|\widetilde V(\theta)\,d\mu_t(w,\theta)=\int\widetilde V\,d|\nu|,\qquad \lim_{t\to\infty}F(\mu_t)=J(\nu).$$
No separation condition on the initial support is required.

## Statement references

[[def-axiom-of-choice]]

[[def-feature-measure-energy]]

[[def-wasserstein-gradient-flow-for-feature-energy]]

[[def-partial-one-homogeneous-measure-projection]]

[[def-partial-homogeneous-relaxed-objective]]

[[lem-signed-narrow-convergence-controls-bochner-moments]]

[[lem-partial-feature-flow-moment-and-energy-identities]]

[[lem-partial-homogeneous-projection-limit-is-stationary]]

[Chizat and Bach, Appendix C.4.2](https://arxiv.org/pdf/1805.09545)

## Facts & Assumptions

**Given:** AC, the full partial hypotheses, the flow $\mu_t$, and narrow signed-projection convergence in the Statement.

[F1] The intrinsic signed projection factors the feature moment: $m_t:=\int w\varphi(\theta)d\mu_t=\int\varphi\,d\sigma_t$. The relaxed-objective inequality gives $P_t:=\int|w|\widetilde V(\theta)d\mu_t\ge\int\widetilde V\,d|\sigma_t|$. [[def-partial-one-homogeneous-measure-projection]] [[def-partial-homogeneous-relaxed-objective]]

[F2] Narrow convergence of finite signed measures on a closed Euclidean domain gives norm convergence of their integrals against bounded norm-continuous Hilbert-valued maps. For bounded nonnegative continuous $W$, it also gives $\int Wd|\nu|\le\liminf_{t\to\infty}\int Wd|\sigma_t|$. [[lem-signed-narrow-convergence-controls-bochner-moments]]

[F3] The energy is nonnegative and nonincreasing. With $f_t=\nabla R(m_t)$ and $S(t)=\int w^2d\mu_t\ge0$, the exact identity $S(t)-S(s)=-2\int_s^t(\langle f_q,m_q\rangle+P_q)dq$ holds for every finite $0\le s\le t$. [[lem-partial-feature-flow-moment-and-energy-identities]]

[F4] Writing $a_\nu(\theta)=\langle\nabla R(m_\nu),\varphi(\theta)\rangle$, signwise stationarity gives $a_\nu+\widetilde V=0$ $\nu^+$-almost everywhere and $-a_\nu+\widetilde V=0$ $\nu^-$-almost everywhere. [[lem-partial-homogeneous-projection-limit-is-stationary]]

[A1] The existing AC assumption supplies the choice hypotheses inherited from these suppliers. [[def-axiom-of-choice]]

## Proof

**Given:** The data in the Statement and [F1]–[F4].

1.1 By [F1] and [F2], $m_t\to m_\nu$ in Hilbert norm. Continuity of $R$ and local Lipschitz continuity of its differential imply $R(m_t)\to R(m_\nu)$ and $f_t\to f_\nu:=\nabla R(m_\nu)$ in norm, hence $\langle f_t,m_t\rangle\to\langle f_\nu,m_\nu\rangle$. By [F3], $F(\mu_t)$ decreases to a finite limit $E_\infty\ge0$. Since $F(\mu_t)=R(m_t)+P_t$, it follows that $P_t\to P_\infty:=E_\infty-R(m_\nu)$. [A1, F1, F2, F3, given]

2.1 Put $P_\nu=\int\widetilde V\,d|\nu|$. The static inequality [F1] and weighted-variation lower semicontinuity [F2], applied to the bounded nonnegative continuous function $\widetilde V$, give $P_\infty\ge\liminf_{t\to\infty}\int\widetilde V\,d|\sigma_t|\ge P_\nu$. This does not require convergence of the separate raw sign measures or their Jordan parts. [F1, F2, step 1.1]

3.1 Integrate the two stationarity equalities [F4] against the respective finite Jordan parts. The intrinsic signed Bochner integral and $|\nu|=\nu^++\nu^-$ give $\langle f_\nu,m_\nu\rangle=\int a_\nu d\nu^+-\int a_\nu d\nu^-=-\int\widetilde Vd\nu^+-\int\widetilde Vd\nu^-=-P_\nu$. All integrands are bounded, so these integrals are finite. [F1, F4, step 2.1]

4.1 If $P_\infty>P_\nu$, let $\epsilon=(P_\infty-P_\nu)/2>0$. Steps 1.1 and 3.1 imply that there is a finite $T$ such that $\langle f_q,m_q\rangle+P_q\ge\epsilon$ for every $q\ge T$. The all-endpoint moment identity [F3] then gives $S(t)\le S(T)-2\epsilon(t-T)$ for every finite $t\ge T$. Choosing $t>T+S(T)/(2\epsilon)$ contradicts $S(t)\ge0$. Hence $P_\infty\le P_\nu$, which together with step 2.1 yields $P_\infty=P_\nu$. [F3, step 1.1, step 2.1, step 3.1]

5.1 Therefore $P_t\to P_\nu$, and step 1.1 gives $F(\mu_t)\to R(m_\nu)+P_\nu=J(\nu)$. These are the two asserted limits. [F1, step 1.1, step 4.1] ∎

## Source note

Appendix C.4.2 motivates the projected-limit energy claim. The convergence of the lifted penalty is proved here from signwise stationarity, signed norm-moment convergence and the exact weight-moment identity; continuity of the penalty as a function of the signed projection is not assumed.
