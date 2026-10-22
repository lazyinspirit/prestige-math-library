---
id: thm-csm-frontier-compact-laplace-tilt
kind: theorem
title: Compact-space Laplace principle and exponential tilting
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps: []
dependency_roles: {}
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; compactness supplies finite subcovers only."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Hugo Touchette, The large deviation approach to statistical mechanics
      url: https://arxiv.org/pdf/0804.0327
      locator: Section III.E.4, equations (59)–(60), printed pp. 19–20 / PDF pp. 18–19.
    - title: Julien Poisat, Introduction to Large Deviations, complete author-hosted lecture notes
      url: https://www.ceremade.dauphine.fr/~poisat/files/M2-largedeviations/lecturenotes.pdf
      locator: Section 3.4, Theorem 3.8 and its proof indications, printed pp. 10–11 / PDF pp. 9–10.
verification:
  precheck: pending
---

## Statement

Let $(K,d_K)$ be a nonempty compact metric space and let $(\mu_n)_{n\geq1}$ be Borel probability measures on $K$. Let $I:K\to[0,+\infty]$ be lower semicontinuous and not identically $+\infty$. Assume the speed-$n$ large-deviation bounds
$$\liminf_{n\to\infty}\frac1n\ln\mu_n(G)\geq-\inf_{x\in G}I(x)\quad\text{for every open }G\subseteq K,$$
$$\limsup_{n\to\infty}\frac1n\ln\mu_n(C)\leq-\inf_{x\in C}I(x)\quad\text{for every closed }C\subseteq K,$$
with $\inf\varnothing=+\infty$ and $\ln0=-\infty$. Let $F:K\to\mathbb R$ be continuous and put
$$Z_n:=\int_K e^{nF(x)}\,d\mu_n(x),\qquad c:=\sup_{x\in K}\bigl(F(x)-I(x)\bigr).$$
For Borel $B\subseteq K$, define the normalized exponential tilt
$$\nu_n^F(B):=Z_n^{-1}\int_B e^{nF(x)}\,d\mu_n(x).$$
Then $Z_n$ is finite and positive,
$$\lim_{n\to\infty}\frac1n\ln Z_n=c,$$
and $(\nu_n^F)$ satisfies a speed-$n$ large-deviation principle with the good rate function $I_F(x):=I(x)-F(x)+c$. Its zero set is precisely $\operatorname*{argmax}_{x\in K}(F(x)-I(x))$.

## Facts & Assumptions

**Given:** The compact metric space, measures, rate function, LDP bounds, and continuous tilt in the Statement.

[A1] The LDP hypothesis is the open-set lower bound and closed-set upper bound written in the Statement, at speed $n$.

[A2] $K$ is nonempty compact metric, $I$ is lower semicontinuous with at least one finite value, and $F$ is continuous. Here compactness means that every cover of $K$ by sets open in its metric topology has a finite subcover.

## Proof
1.1 For each integer $m\geq1$, put $U_m:=\{x\in K:|F(x)|<m\}$. These sets are open by continuity of $F$: if $x\in U_m$, continuity gives a neighborhood on which $|F(y)-F(x)|<m-|F(x)|$, hence $|F(y)|<m$. They cover $K$ because every real $|F(x)|$ is less than some positive integer. By the finite-open-cover meaning of compactness in [A2], finitely many $U_{m_1},\ldots,U_{m_k}$ cover $K$, with $k\geq1$ since $K$ is nonempty. Let $M:=\max\{m_1,\ldots,m_k\}$; then $-M<F(x)<M$ for every $x\in K$. Thus $F$ is bounded above and below. This uses the explicitly defined cover and a maximum of finitely many integers, without any simultaneous choice of pointwise neighborhoods. Since $I$ is not identically $+\infty$, choose $x_0\in K$ with $I(x_0)<+\infty$. Therefore $F(x_0)-I(x_0)\leq c\leq\sup_K F<+\infty$, so $c$ is finite. The integrand $e^{nF}$ is bounded above and bounded below by the positive constant $e^{n\inf_KF}$, and $\mu_n$ is a probability measure, hence $0<Z_n<+\infty$ and $\nu_n^F$ is a probability measure. [A2, choose]

1.2 Let $G\subseteq K$ be open, let $x\in G$ with $I(x)<+\infty$, and let $\varepsilon>0$. Continuity of $F$ gives an open neighborhood $U$ with $x\in U\subseteq G$ and $F(y)>F(x)-\varepsilon$ for every $y\in U$. Hence $\int_G e^{nF}\,d\mu_n\geq e^{n(F(x)-\varepsilon)}\mu_n(U)$. By [A1], the logarithm of this integral divided by $n$ has liminf at least $F(x)-\varepsilon-\inf_U I\geq F(x)-\varepsilon-I(x)$. Taking the supremum over finite-rate $x\in G$ and then $\varepsilon\downarrow0$ proves the open-set integral lower bound $\liminf_n n^{-1}\ln\int_G e^{nF}\,d\mu_n\geq\sup_{x\in G}(F(x)-I(x))$. [A1, A2, algebra]

1.3 Let $C\subseteq K$ be closed and put $c_C:=\sup_{x\in C}(F(x)-I(x))$, with $\sup\varnothing=-\infty$. If $C=\varnothing$, its integral is zero and the required bound is immediate. Since $F$ is bounded and $I\geq0$, either $c_C$ is finite or $c_C=-\infty$. Suppose first that $c_C$ is finite, and fix $\varepsilon>0$. For each $x\in C$ with $I(x)<+\infty$, lower semicontinuity of $I$ and continuity of $F$ give an open neighborhood $V_x$ on which $F\leq F(x)+\varepsilon$ and $I\geq I(x)-\varepsilon$. Choose a ball $U_x$ centered at $x$ with $\overline U_x\subseteq V_x$. For each $x\in C$ with $I(x)=+\infty$, choose $M>\sup_KF-c_C+1$; lower semicontinuity gives an open neighborhood $V_x$ on which $I>M$, and choose such a ball $U_x$. These balls cover compact $C$, so finitely many suffice. Put $C_j:=C\cap\overline U_{x_j}$ for the resulting centers. Each $C_j$ is closed. At a finite-rate center,
$$\sup_{C_j}F-\inf_{C_j}I\leq F(x_j)-I(x_j)+2\varepsilon\leq c_C+2\varepsilon;$$
at an infinite-rate center,
$$\sup_{C_j}F-\inf_{C_j}I\leq\sup_KF-M<c_C-1.$$
The integral over $C$ is bounded by the finite sum $\sum_j e^{n\sup_{C_j}F}\mu_n(C_j)$. Applying [A1] to each closed $C_j$ and using that a finite sum has logarithmic limsup no greater than its largest summand gives
$$\limsup_n\frac1n\ln\int_Ce^{nF}\,d\mu_n\leq c_C+2\varepsilon.$$
Letting $\varepsilon\downarrow0$ proves the localized bound in this case. If $c_C=-\infty$, every point of $C$ has infinite $I$. For any real $M$, lower semicontinuity gives, at each $x\in C$, an open neighborhood $V_x$ with $I>M$; choose balls with closures in those neighborhoods and take a finite subcover of $C$. The corresponding closed pieces $C_j$ then satisfy $\sup_{C_j}F-\inf_{C_j}I\leq\sup_KF-M$. The same finite-sum and LDP argument gives a logarithmic limsup at most $\sup_KF-M$. Since $M$ is arbitrary, this limsup is $-\infty=c_C$. Thus in all cases
$$\limsup_n\frac1n\ln\int_Ce^{nF}\,d\mu_n\leq\sup_{x\in C}(F(x)-I(x)).$$
[A1, A2, choose, algebra]

2.1 Taking $G=K$ in step 1.2 and $C=K$ in step 1.3 gives $\liminf_n n^{-1}\ln Z_n\geq c$ and $\limsup_n n^{-1}\ln Z_n\leq c$, proving the log-Laplace limit. The function $I_F=I-F+c$ is lower semicontinuous, is nonnegative by the definition of $c$, and has compact sublevel sets because those sets are closed in compact $K$. To prove attainment, set $f:=F-I$, which is upper semicontinuous and bounded above by $\sup_KF$. For every integer $k\geq1$, the set $A_k:=\{x\in K:f(x)\geq c-1/k\}$ is closed and nonempty by the definition of $c$; these sets are nested. Compactness gives $\bigcap_{k\geq1}A_k\ne\varnothing$: otherwise their open complements would cover $K$, and a finite subcover would contradict that a nested finite intersection is nonempty. Every point of this intersection has $f(x)\geq c-1/k$ for all $k$, hence $f(x)\geq c$ and therefore $f(x)=c$. Equality $I_F(x)=0$ holds exactly when $F(x)-I(x)=c$, so its nonempty zero set is precisely the stated maximizing set. [A2, step 1.1, step 1.2, step 1.3, algebra]

3.1 For open $G\subseteq K$, apply the open-set integral lower bound from step 1.2 and subtract the log-normalizer limit in step 2.1. Since $\sup_G(F-I)-c=-\inf_G I_F$, this is the LDP lower bound for $\nu_n^F$. [step 1.2, step 2.1, algebra]

4.1 For closed $C\subseteq K$, apply the closed-set integral upper bound from step 1.3 and subtract the log-normalizer limit in step 2.1. Since $\sup_C(F-I)-c=-\inf_C I_F$, this is the LDP upper bound for $\nu_n^F$. [step 1.3, step 2.1, algebra] ∎

