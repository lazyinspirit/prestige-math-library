---
id: lem-bounded-lipschitz-metric-characterizes-weak-convergence-on-polish-spaces
kind: lemma
title: The bounded-Lipschitz metric characterizes weak convergence on Polish spaces
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - def-polish-space
  - def-weak-convergence-of-borel-probability-measures
  - lem-finite-measure-uniqueness-on-a-pi-system
  - thm-dominated-convergence
  - thm-portmanteau-theorem
  - thm-prokhorov-tightness-theorem-on-polish-spaces
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Giné and Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, §3.7 and §7.3.4, printed pp. 246–247 and 594–595
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf
    - title: Castillo and Nickl, Nonparametric Bernstein–von Mises theorems in Gaussian white noise, Definition 1, printed pp. 2003–2004
      url: https://www.statslab.cam.ac.uk/~rn289/Site/__files/AOS1133.pdf
dependency_level: 0
---

## Statement

Assume the Axiom of Choice. Let $(S,d)$ be a Polish space, and let $\mu_n,\mu$ be Borel probability measures on $S$. Define

$$\beta_{BL}(\nu,\rho):=\sup\left\{\left|\int g\,d\nu-\int g\,d\rho\right|:g:S\to\mathbb R,\ \|g\|_\infty\le1,\ \operatorname{Lip}_d(g)\le1\right\},$$

where $\operatorname{Lip}_d(g):=\sup_{x\ne y}|g(x)-g(y)|/d(x,y)$, with value $0$ when $S$ has at most one point. Then

$$\mu_n\Rightarrow\mu\quad\Longleftrightarrow\quad\beta_{BL}(\mu_n,\mu)\longrightarrow0,$$

where $\Rightarrow$ is weak convergence of Borel probabilities ([[def-weak-convergence-of-borel-probability-measures]]). The implication from bounded-Lipschitz convergence to weak convergence is choice-free; the reverse implication below uses AC through Prokhorov's theorem.

## Facts & Assumptions

[F1] [[def-weak-convergence-of-borel-probability-measures]]: $\mu_n\Rightarrow\mu$ means convergence of integrals for every bounded continuous real test function.

[F2] [[thm-portmanteau-theorem]]: Weak convergence of Borel probabilities on a metric space is equivalent to the closed-set bound $\limsup_n\mu_n(F)\le\mu(F)$ for every closed $F$.

[F3] [[thm-prokhorov-tightness-theorem-on-polish-spaces]]: Assume AC. A family of Borel probabilities on a Polish space is tight if and only if it is relatively sequentially compact for weak convergence.

[F4] [[thm-dominated-convergence]]: If measurable functions converge pointwise almost everywhere and are dominated by one integrable function, their integrals converge.

[F5] [[def-polish-space]]: A Polish space is separable and completely metrizable.

[F6] [[lem-finite-measure-uniqueness-on-a-pi-system]]: finite measures agreeing on a generating pi-system and on the whole space agree on its generated sigma-algebra.

[A1] [[def-axiom-of-choice]]: AC is used only for the Prokhorov implication from relative sequential compactness to tightness in step 2.2; step 1.1 proves the reverse metric implication without AC.

**Given:** The objects in the statement and AC for step 2.2.

## Proof

1.1 Nonnegativity, symmetry and the triangle inequality for $\beta_{BL}$ follow by applying these properties to the difference of the two test integrals and then taking the supremum. If $\beta_{BL}(\nu,\rho)=0$, fix a nonempty closed $F$ and put $g_m=(1-md(\cdot,F))_+$. The function $g_m/m$ is an admissible test, so $\int g_m\,d\nu=\int g_m\,d\rho$. By [F4], these integrals decrease to $\nu(F)$ and $\rho(F)$, respectively. The two probabilities therefore agree on every closed set, including the empty set. Closed sets form a pi-system generating the Borel sigma-algebra, and both total masses are one, so [F6] gives $\nu=\rho$. Thus $\beta_{BL}$ is a metric; this argument uses no choice. [given, F4, F6, algebra]

1.2 Assume $\beta_{BL}(\mu_n,\mu)\to0$, and fix a nonempty closed set $F\subseteq S$. For every integer $m\ge1$, the function $g_m(x)=(1-md(x,F))_+$ satisfies $0\le g_m\le1$ and $\operatorname{Lip}_d(g_m)\le m$. Hence $g_m/m$ is admissible in the definition of $\beta_{BL}$, so $\int g_m\,d\mu_n\to\int g_m\,d\mu$. Since $1_F\le g_m$, it follows that $\limsup_n\mu_n(F)\le\int g_m\,d\mu$ for every $m$. [given, F1]

1.3 Now assume $\mu_n\Rightarrow\mu$, and put $\mathcal A=\{\mu\}\cup\{\mu_n:n\ge1\}$. Any sequence chosen from $\mathcal A$ either has a member repeated infinitely often, yielding a constant convergent subsequence, or has a subsequence of the form $(\mu_{n_j})$ with $n_j\to\infty$, which converges weakly to $\mu$. Therefore $\mathcal A$ is relatively sequentially compact for weak convergence. [given, F1, choose]

2.1 The functions $g_m$ decrease pointwise to $1_F$ and are bounded by the integrable constant function $1$ under the probability $\mu$. By [F4], $\int g_m\,d\mu\to\mu(F)$, so the closed-set bound holds; it is trivial for $F=\varnothing$. The Portmanteau theorem [F2] gives weak convergence in the sense of [F1]. [F1, F2, F4, step 1.2]

2.2 By [F5], $S$ is Polish; therefore [F3] applies under [A1] and $\mathcal A$ is tight. Thus for every $\varepsilon>0$ there is a compact $K\subseteq S$ such that $\sup_{\nu\in\mathcal A}\nu(K^c)<\varepsilon$. [A1, F3, F5, step 1.3]

3.1 Fix $\eta>0$. Compactness gives a finite $\eta/8$-net $x_1,\dots,x_q$ of $K$. Quantize each value $g(x_i)\in[-1,1]$ into finitely many bins of width at most $\eta/2$. There are finitely many resulting value patterns for the bounded 1-Lipschitz test class; choose one representative $h_r$ from each nonempty pattern. If $g$ and $h_r$ share a pattern, then for $x\in K$ a net point $x_i$ gives $|g(x)-h_r(x)|\le2d(x,x_i)+|g(x_i)-h_r(x_i)|<\eta$. [given, construct, choose, step 2.2]

4.1 For any admissible $g$, choose the representative $h_r$ from its pattern. The integral difference is bounded by $\left|\int g\,d\mu_n-\int g\,d\mu\right|\le\max_r\left|\int h_r\,d\mu_n-\int h_r\,d\mu\right|+2\eta+2\mu_n(K^c)+2\mu(K^c).$ The maximum tends to zero by [F1], because there are finitely many bounded continuous representatives, and the last two terms are at most $4\varepsilon$ by step 2.2. Taking the supremum over $g$, then the limit superior in $n$, gives $\limsup_n\beta_{BL}(\mu_n,\mu)\le2\eta+4\varepsilon$. Letting $\eta,\varepsilon\downarrow0$ proves the reverse implication. [F1, step 2.2, step 3.1] ∎
