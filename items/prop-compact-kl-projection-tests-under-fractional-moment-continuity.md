---
id: prop-compact-kl-projection-tests-under-fractional-moment-continuity
kind: proposition
title: "Compact models admit tests at a unique KL projection under fractional-moment continuity"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-kl-projection-set-and-relative-kl-neighborhoods
  - def-likelihood-tilted-measure-at-kl-projection
  - def-metric-space
  - def-metric-compactness
  - def-metric-topology
  - lem-closed-subset-of-a-compact-space-is-compact
  - def-probability-measure
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-axiom-of-choice
  - lem-product-likelihood-tilt-has-product-density
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-dominated-convergence
  - thm-monotone-convergence-for-the-integral
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-composition-with-borel-functions-preserves-measurability
  - lem-coordinate-maps-and-permutations-are-measurable-on-finite-products
  - thm-logarithm-derivative-and-integral
  - def-real-exponential-function-and-e
  - thm-derivative-of-exponential
  - thm-algebra-of-derivatives
  - thm-exponential-is-strictly-increasing
  - cor-mean-value-theorem
proof_strategy: direct
axiom_use: "AC enters through the imported KL and likelihood-density conventions; the displayed joint density family is supplied, so the proof makes no further selections."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises Theorem under Misspecification, Theorem 3.2 and proof, pp. 369–370"
      url: "https://pure.uva.nl/ws/files/1850322/114737_376240.pdf"
    - title: "B. J. K. Kleijn, Bayesian Statistics for Frequentists, §5.3.1, pp. 158–160"
      url: "https://staff.fnwi.uva.nl/b.j.k.kleijn/bkleijn-book-work-in-progress-Bayesian_Statistics_for_frequentists-Version-1.0-July-2025.pdf"
    - title: "R. V. Ramamoorthi, K. Sriram, and R. Martin, On Posterior Concentration in Misspecified Models, §§2–3"
      url: "https://arxiv.org/pdf/1312.4620"
---

## Statement

Assume AC as required by the imported KL and likelihood-density conventions
[[def-axiom-of-choice]]. Let $(\Theta,\rho)$ be a compact metric space in its
metric topology ([[def-metric-compactness]], [[def-metric-space]]). Let
$p_\theta$ be jointly measurable finite-valued probability densities with
respect to one sigma-finite measure $\mu$, and let $P_0$ have supplied density
$p_0$. Suppose $\theta^*$ is the unique minimizer of
$\theta\mapsto\mathrm{KL}(P_0\Vert P_\theta)$ with finite minimum. For every
$\theta$, assume
$$\mathbb E_{P_0}\frac{p_\theta(X)}{p_{\theta^*}(X)}<\infty.$$
For every $\theta_1\ne\theta^*$, assume the extended relative contrast is
well-defined and satisfies
$$\mathbb E_{P_0}\log\frac{p_{\theta_1}(X)}{p_{\theta^*}(X)} =-\left[\mathrm{KL}(P_0\Vert P_{\theta_1})-\mathrm{KL}(P_0\Vert P_{\theta^*})\right]<0,$$
where the value $-\infty$ is allowed. For every such $\theta_1$, assume
that for all $s$ in some interval $(s_0,1)$ with $0\le s_0<1$, the finite
fractional-moment function
$$M_s(\theta_1,\theta):= \mathbb E_{P_0}\left[ \left(\frac{p_\theta(X)}{p_{\theta_1}(X)}\right)^s \cdot \left(\frac{p_\theta(X)}{p_{\theta^*}(X)}\right)^{1-s} \right]$$
is continuous at $\theta_1$. Define its integrand to be zero where
$p_\theta=0$, to be $+\infty$ where $p_\theta>0$ and $p_{\theta_1}=0$, and
to have the displayed value elsewhere; on the $P_0$-null set where
$p_{\theta^*}=0$, assign it value zero. Then, for every $\eta>0$, there are
measurable tests $\phi_n:\mathsf X^n\to[0,1]$ and constants
$c_\eta,C_\eta>0$ such that, for all sufficiently large $n$,
$$P_0^n\phi_n\le C_\eta e^{-c_\eta n},\qquad \sup_{\theta:\rho(\theta,\theta^*)\ge\eta} Q_\theta^n(1-\phi_n)\le C_\eta e^{-c_\eta n}.$$
If the separated set is empty, take $\phi_n=0$. This sufficient
test construction is restricted to the stated compact, unique-minimizer
case; it asserts no generic testability on noncompact parameter spaces.

## Facts & Assumptions

**Given:** The objects and hypotheses in the Statement, and the likelihood tilts of [[def-likelihood-tilted-measure-at-kl-projection]].

[A1] Assume AC for the imported KL and likelihood-density conventions [[def-axiom-of-choice]].

[F1] [[def-kl-projection-set-and-relative-kl-neighborhoods]]: for $\theta_1\ne\theta^*$, uniqueness means $K(\theta_1)-K^*>0$.

[F2] [[def-likelihood-tilted-measure-at-kl-projection]]: $Q_\theta$ has $P_0$-density $r_\theta=p_\theta/p_{\theta^*}$.

[F4] [[def-metric-compactness]]: every open cover of a compact metric space has a finite subcover.

[F5] [[lem-closed-subset-of-a-compact-space-is-compact]]: a closed subset of a compact metric space is compact in its subspace metric.

[F6] [[lem-product-likelihood-tilt-has-product-density]]: $Q_\theta^n$ has density $\prod_i(p_\theta/p_{\theta^*})(x_i)$ relative to $P_0^n$.

[F7] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: nonnegative product-measurable functions may be integrated in either order.

[F8] [[thm-dominated-convergence]]: dominated pointwise limits pass through the integral.

[F9] [[thm-monotone-convergence-for-the-integral]]: increasing nonnegative functions pass to the limit under the integral.

[F10] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: the supplied density ratios and their products are measurable.

[F11] [[thm-logarithm-derivative-and-integral]]: $\log r=\int_1^r u^{-1}\,du$ for $r>0$.

[F12] [[def-metric-topology]]: closed sets are complements of open sets in the metric topology; a set is open when each of its points contains a metric ball inside the set.

[F13] [[def-metric-space]]: $\rho$ is symmetric and satisfies the triangle inequality.

[F14] [[thm-composition-with-borel-functions-preserves-measurability]]: composition of the supplied measurable densities with Borel ratio, logarithm, and power functions is measurable wherever defined.

[F15] [[lem-coordinate-maps-and-permutations-are-measurable-on-finite-products]]: the coordinate maps on $\mathsf X^n$ are measurable.

[F16] [[def-real-exponential-function-and-e]]: $\exp(0)=1$.

[F17] [[thm-derivative-of-exponential]] and [[thm-algebra-of-derivatives]]: $(\exp u-1-u)'=\exp u-1$.

[F18] [[thm-exponential-is-strictly-increasing]]: $\exp u\ge1$ for $u\ge0$.

[F19] [[cor-mean-value-theorem]]: if a real function is continuous on a closed interval and differentiable in its interior, its endpoint difference is its derivative at an interior point times the interval length.

## Proof


**Given:** The hypotheses and conventions in the Statement.

1.1 Fix $\theta_1\ne\theta^*$ and put $r_1=p_{\theta_1}/p_{\theta^*}$ on $\{p_{\theta^*}>0\}$, with value zero on its $P_0$-null complement. The finite likelihood-ratio mean makes $r_1$ integrable. For $r_1\ge1$, [F11] gives $0\le\log r_1=\int_1^{r_1}u^{-1}du\le r_1-1\le r_1$, so the positive part is integrable. The log ratio is measurable by [F14]. Also $\mathbb E_{P_0}\log r_1 =-\bigl(K(\theta_1)-K^*\bigr)<0,$ by the extended relative-contrast hypothesis, with value $-\infty$ allowed. [A1, F1, F2, F11, F14, given]

2.1 For $t\downarrow0$, let $A(t)=\mathbb E_{P_0}r_1^t$. Since $r_1^t\le1+r_1$ for $0<t\le1$, [F8] gives $A(t)\to P_0(r_1>0)\le1$. If this limit is less than one, then $A(t)<1$ for all sufficiently small $t>0$. If the limit equals one, split into $\{r_1\ge1\}$ and $\{0<r_1<1\}$. On the first set, $(r_1^t-1)/t\to\log r_1$ and, for fixed $t_0<1$ and $0<t\le t_0$, the mean-value theorem bounds this quotient above by $r_1^{t_0}\log r_1\le C r_1$ for a finite constant $C$: the function $r^{t_0-1}\log r$ is continuous on $[1,\infty)$ and tends to zero at infinity. On the second set, write $y=-\log r_1>0$. Then $(1-r_1^t)/t=y(1-e^{-yt})/(yt)$. The function $u\mapsto(1-e^{-u})/u$ decreases on $u>0$, since its derivative is $((u+1)e^{-u}-1)/u^2\le0$ by $e^u\ge1+u$: for $u\ge0$, $h(u)=\exp(u)-1-u$ has $h(0)=0$ by the exponential definition and $h'(u)=\exp(u)-1\ge0$ by the derivative formula and exponential monotonicity, the mean value theorem then gives $h(u)\ge0$. Hence the quotient increases to $y$ as $t\downarrow0$. Dominated convergence on the first set and monotone convergence [F9] on the second show $\frac{A(t)-1}{t}\longrightarrow \mathbb E_{P_0}\log r_1<0$ in the extended sense. Thus $A(t)<1$ for all sufficiently small $t>0$. [step 1.1, F8, F9, F10, F14, F16, F17, F18, F19, algebra]

3.1 Choose such a $t$ with $s:=1-t$ in the left-neighborhood from the fractional-moment hypothesis. Then $M_s(\theta_1,\theta_1)=A(t)<1$. By continuity at $\theta_1$, there are an open neighborhood $G_{\theta_1}$ and $0<a_{\theta_1}<1$ such that $\sup_{\theta\in G_{\theta_1}}M_s(\theta_1,\theta)\le a_{\theta_1}$. [step 2.1, given]

4.1 Define $\phi_{n,\theta_1} =\mathbf 1\left\{\prod_{i=1}^n r_1(X_i)>1\right\}.$ The score and test are measurable by [F10], [F14], and [F15]. On the rejection event the product raised to $t$ exceeds one. Repeated Tonelli integration under $P_0^n$ therefore gives $P_0^n\phi_{n,\theta_1} \le \left(\mathbb E_{P_0}r_1^t\right)^n =M_s(\theta_1,\theta_1)^n \le a_{\theta_1}^n.$ For the second error, let $g_{\theta,\theta_1,s}$ be the integrand defining $M_s(\theta_1,\theta)$, with the zero and infinite conventions in the Statement. On the $P_0$-full set where $p_{\theta^*}>0$, if $p_\theta>0$ and $p_{\theta_1}>0$ then algebra gives $g_{\theta,\theta_1,s}=r_\theta r_1^{-s}$; the displayed conventions extend this identity to the boundary values. On nonrejection, $\prod_i r_1(X_i)\le1$. If every factor is positive, this gives $\prod_i r_\theta(X_i) \le\prod_i\bigl(r_\theta(X_i)r_1(X_i)^{-s}\bigr) =\prod_i g_{\theta,\theta_1,s}(X_i).$ If some $r_\theta(X_i)=0$, both the density product and the right-hand product are zero under $0\cdot\infty=0$; if some $r_1(X_i)=0$ while every $r_\theta(X_i)>0$, the right-hand product is infinite and the inequality still holds. The product-density identity [F6] and repeated Tonelli [F7] now give, for $\theta\in G_{\theta_1}$, $Q_\theta^n(1-\phi_{n,\theta_1}) \le\left(\mathbb E_{P_0}g_{\theta,\theta_1,s}(X)\right)^n =M_s(\theta_1,\theta)^n \le a_{\theta_1}^n.$ The moment hypothesis makes these integrals finite on the chosen neighborhood. [F6, F7, F10, F14, F15, step 3.1, algebra, given]

4.2 Put $C_\eta=\{\theta:\rho(\theta,\theta^*)\ge\eta\}$. If $\rho(\theta,\theta^*)<\eta$, then every $\theta'$ with $\rho(\theta',\theta)<\eta-\rho(\theta,\theta^*)$ satisfies $\rho(\theta',\theta^*)<\eta$ by [F13]. Thus the complement of $C_\eta$ is open, so $C_\eta$ is closed by [F12]. By [F5], it is compact. For every point of $C_\eta$, step 3.1 supplies a neighborhood; [F4] gives a finite subcover $G_{\theta_1},\ldots,G_{\theta_k}$. [F4, F5, F12, F13, step 3.1, given]

5.1 Set $\phi_n=\max_{1\le j\le k}\phi_{n,\theta_j}$. The union bound and step 4.1 give $P_0^n\phi_n\le\sum_{j=1}^k a_{\theta_j}^n,\qquad \sup_{\theta\in C_\eta}Q_\theta^n(1-\phi_n) \le\max_{1\le j\le k}a_{\theta_j}^n.$ Since the subcover is finite and each $a_{\theta_j}<1$, both bounds are at most $C_\eta e^{-c_\eta n}$ for suitable $c_\eta,C_\eta>0$ and all sufficiently large $n$. The set $\{\rho(\theta,\theta^*)>\eta\}$ is contained in $C_\eta$, so the same type-II bound holds there. If $C_\eta=\varnothing$, the zero test has both errors zero. [step 4.1, step 4.2, algebra] ∎

