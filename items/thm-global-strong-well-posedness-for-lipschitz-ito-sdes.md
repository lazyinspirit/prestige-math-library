---
id: thm-global-strong-well-posedness-for-lipschitz-ito-sdes
kind: theorem
title: Global strong well-posedness for Lipschitz Itô SDEs
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
axiom_base: Full AC
deps:
  - def-ito-sde-and-strong-solution
  - lem-lipschitz-sde-map-is-well-defined
  - lem-lipschitz-sde-local-solution-has-finite-path-moment
  - cor-cauchy-schwarz-for-random-variables
  - thm-monotone-convergence-for-the-integral
  - thm-fatou-lemma
  - lem-rat-embeds-dense
  - thm-reals-cauchy-complete
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Ramon van Handel, Stochastic Calculus, Filtering, and Stochastic Control: Lecture Notes (ACM 217, Spring 2007), Chapter 5.1"
      url: "https://web.math.princeton.edu/~rvan/acm217/ACM217.pdf"
    - title: "A.W. van der Vaart, Martingales, Diffusions and Financial Mathematics (preliminary notes), Section 7.1"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Statement

Assume the data and hypotheses of
[[def-ito-sde-and-strong-solution]] on $[0,T]$, with $T\ge0$, finite
dimensions $d,m\ge1$, Lipschitz constant $L$, and linear-growth constant
$K$. There is a strong solution $X$ on the given filtered probability space.
It is unique up to indistinguishability among strong solutions with the same
initial value and Brownian driver, and it satisfies
$$E\sup_{0\le t\le T}|X_t|^2\le(1+3E|X_0|^2)e^{C_TT},\qquad C_T:=6K^2T+24mK^2.$$
The bound is independent of any later numerical mesh.

## Facts & Assumptions

**Given:** the complete usual filtered Brownian space, $T\ge0$, finite
$d,m\ge1$, jointly Borel coefficients with the stated uniform global
Lipschitz and linear-growth constants, an $\mathcal F_0$-measurable
$X_0\in L^2$ independent of future Brownian increments, and the Axiom of
Choice as required by the Itô-integral interfaces.

[F1] The Picard map $\Phi$ is well-defined on adapted continuous inputs with
finite $L^2$ path supremum; it has the path-sup difference estimate with
$C_d=2TL^2+8mL^2$, the growth estimate with
$C_T=6K^2T+24mK^2$, and the first-iterate bound
$(4K^2T^2+16mK^2T)(1+E|X_0|^2)$. [[lem-lipschitz-sde-map-is-well-defined]]

[F2] A strong solution is an adapted continuous process on the given space
with the locally defined finite-coordinate Itô integral equation satisfied
indistinguishably. The complete filtration contains all null sets at time zero.
[[def-ito-sde-and-strong-solution]]

[F3] The declared Itô-integral and martingale interfaces use the Axiom of
Choice; the Picard recursion, integer bounds, and stopping conventions below
make no further selections. [[def-axiom-of-choice]]

[F4] Cauchy–Schwarz bounds expectations by second moments; monotone
convergence passes to expectations of nonnegative partial sums, and Fatou
passes the finite-tail $L^2$ bounds to their pointwise limit.
[[cor-cauchy-schwarz-for-random-variables]] [[thm-monotone-convergence-for-the-integral]] [[thm-fatou-lemma]]

[F5] For a continuous path, its supremum on $[0,T]$ equals the supremum over
rational times in $[0,T]$ and the endpoint $T$. [[lem-rat-embeds-dense]]

[F6] Every adapted continuous solution of the same SDE with the stated
initial-value and coefficient hypotheses has finite $E\sup_{t\le T}|Y_t|^2$.
[[lem-lipschitz-sde-local-solution-has-finite-path-moment]]

[F7] Every Cauchy sequence of real numbers converges. Hence, on each path
where the Picard iterates are uniformly Cauchy, their finitely many coordinate
sequences have real limits; these limits form the pointwise $\mathbb R^d$
limit, and the uniform Cauchy bound passes to that limit.
[[thm-reals-cauchy-complete]]

## Proof

1.1 If $T=0$, set $X_0$ as the sole value of the process; both integrals vanish, the path-sup bound follows from $(1+3E|X_0|^2)\ge E|X_0|^2$, and any two solutions with that initial value agree. For $T>0$, let $\Phi$ be the map of [F1], set $X^0_t=X_0$, and recursively set $X^{n+1}=\Phi(X^n)$. [F1, F2, given]

2.1 Put $a_n(t)=E\sup_{u\le t}|X^n_u-X^{n-1}_u|^2$ for $n\ge1$. By [F1], $a_1(T)\le A_T:= (4K^2T^2+16mK^2T)(1+E|X_0|^2)$ and $a_{n+1}(t)\le C_d\int_0^t a_n(s)ds$. Induction on $n$ gives $a_n(t)\le A_TC_d^{n-1}t^{n-1}/(n-1)!$. [F1, step 1.1, algebra]

3.1 The majorant series $\sum_{n\ge1}\sqrt{A_TC_d^{n-1}T^{n-1}/(n-1)!}$ converges. If $A_T=0$, it is identically zero; if $C_dT=0$, every term after the first is zero; otherwise the ratio of consecutive terms is $\sqrt{C_dT/n}\to0$. By [F4], $E\sup|X^n-X^{n-1}|\le\sqrt{a_n(T)}$ and monotone convergence gives $E\sum_n\sup|X^n-X^{n-1}|=\sum_nE\sup|X^n-X^{n-1}|<\infty$; hence that nonnegative series is finite almost surely. On this event, for every $t$ the vector sequence $(X^n_t)_n$ is Cauchy, since $\sup_{u\le T}|X^m_u-X^n_u|\le\sum_{j=n+1}^m\sup_{u\le T}|X^j_u-X^{j-1}_u|$; [F7] gives the coordinate limits and therefore a vector limit $X_t$. Letting $m\to\infty$ in the same inequality bounds $\sup_{t\le T}|X^n_t-X_t|$ by the tail of the summable series, which tends to zero. Thus the convergence is almost surely uniform. For finite tails the $L^2$ triangle inequality follows by expanding the square and applying Cauchy–Schwarz, so $\|X^m-X^n\|_{L^2(\sup)}\le\sum_{j=n+1}^m\sqrt{a_j(T)}$. Fatou's lemma [F4] then gives $E\sup_{t\le T}|X^n_t-X_t|^2\le(\sum_{j=n+1}^{\infty}\sqrt{a_j(T)})^2\to0$. [F4, F7, step 2.1, algebra, construct]

4.1 Let $A$ be the measurable probability-one event on which that series of path suprema is finite; measurability follows because each supremum is a supremum over the countable dense set in [F5]. Uniform convergence makes $X$ continuous on $A$; completeness gives $A^c\in\mathcal F_0$, so set $X_t=X_0$ on $A^c$. For each fixed $t$, the limit on $A$ of the $\mathcal F_t$-measurable $X^n_t$, together with the $\mathcal F_0$-measurable value on $A^c$, is $\mathcal F_t$-measurable. Thus $X$ is adapted and continuous, and its $L^2$ path-sup convergence places it in the class of [F2]. [F2, F5, step 3.1, given]

5.1 For every $n$, $X^{n+1}=\Phi(X^n)$. The difference estimate of [F1] gives $E\sup_{u\le T}|\Phi(X^n)_u-\Phi(X)_u|^2\le C_dT E\sup_{u\le T}|X^n_u-X_u|^2\to0$. Since $X^{n+1}\to X$ in the same norm by step 3.1, uniqueness of an $L^2$ limit implies $\Phi(X)=X$ indistinguishably. Hence $X$ satisfies the SDE. [F1, F2, step 3.1, step 4.1]

6.1 Write $f(t)=E\sup_{u\le t}|X_u|^2$. The growth estimate of [F1] and $X=\Phi(X)$ imply $f(t)\le3E|X_0|^2+C_T\int_0^t(1+f(s))ds$. Put $g=1+f$ and $H(t)=1+3E|X_0|^2+C_T\int_0^tg(s)ds$. Then $g\le H$, $H(0)=1+3E|X_0|^2$, and $H'(t)=C_Tg(t)\le C_TH(t)$ almost everywhere. Consequently $(e^{-C_Tt}H(t))'\le0$ almost everywhere, so $f(T)\le g(T)\le(1+3E|X_0|^2)e^{C_TT}$. [F1, step 5.1, algebra]

7.1 If $Y$ is any other strong solution with the same data, then $Y=\Phi(Y)$ by [F2] and $Y\in\mathcal H_T$ by [F6]. The difference estimate in [F1] gives $q(t):=E\sup_{u\le t}|X_u-Y_u|^2\le C_d\int_0^tq(s)ds$. With $Q(t)=C_d\int_0^tq(s)ds$, one has $Q(0)=0$ and $Q'\le C_dQ$ almost everywhere, hence $Q=q=0$. Thus $\sup_{t\le T}|X_t-Y_t|=0$ almost surely, which is indistinguishability. AC is exactly the inherited assumption [F3]. [F1, F2, F3, F6, step 5.1] ∎

## Remarks

The proof uses no ellipticity or nondegeneracy of $\sigma$. The result gives
strong existence, uniqueness, and moment control only; it implies no
transition-density regularity, forward Kolmogorov uniqueness, or reversal
theorem.

## Sources

Van Handel, Chapter 5.1, Theorems 5.1.3 and 5.1.5 with proofs, and van der
Vaart, Section 7.1, Theorem 7.8 with proof, independently develop Picard
iteration and Gronwall uniqueness. The proof here supplies the vector
coordinate estimates, complete path-space limit argument, and exact
finite-horizon supremum bound under the displayed hypotheses.
