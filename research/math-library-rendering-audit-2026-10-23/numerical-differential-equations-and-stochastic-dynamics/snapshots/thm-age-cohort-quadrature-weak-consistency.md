---
id: thm-age-cohort-quadrature-weak-consistency
kind: theorem
title: Weak consistency of age-cohort characteristic quadrature
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-age-structured-renewal-transport-problem
  - thm-age-structured-renewal-characteristic-solution
  - alg-age-cohort-characteristic-quadrature
  - thm-age-structured-renewal-semigroup-growth-and-data-stability
  - thm-forward-euler-one-step-consistency-and-local-error
  - lem-discrete-one-step-error-recurrence-bound
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
axiom_base: No choice axiom is used; all cohort and birth sums are finite.
provenance:
  statement: literature-derived
  proof: ai-generated
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Åke Brännström, Linus Carlsson, and Daniel Simpson, On the Convergence of the Escalator Boxcar Train"
      url: "https://arxiv.org/pdf/1210.1444"
      locator: "§3, Lemmas 6–12 and Theorem 14, PDF pp. 5–11: weak cohort consistency and uniqueness-based convergence; the present result gives a separate quantitative linear-age bound."
    - title: "MATH 373 lecture notes, §8 Approximation of Integrals"
      url: "https://sites.math.rutgers.edu/~falk/math373/lecture12.pdf"
      locator: "Complete four-page Lecture 12 PDF; §8.2, printed pp. 37–38/PDF pp. 3–4: midpoint quadrature formula and composite error argument."
---

## Statement

Let $\mu,\beta:[0,\infty)\to[0,\infty)$ be bounded $C^1$ functions with bounded derivatives, let $n_0\in C^1([0,\infty))\cap L^1(0,\infty)$ be nonnegative, and fix $T>0$, $\Delta t>0$, and $A>T$. Put $\widehat n_0=n_0\mathbf1_{[0,A-T)}$ and $\tau_A=\int_{A-T}^\infty n_0(a)\,da$. Choose the initial positive cohort quadrature for $\widehat n_0(a)\,da$ with support in $[0,A-T)$ and bounded-Lipschitz defect $\epsilon_0$ on test functions of norm at most $1$. For the procedure [[alg-age-cohort-characteristic-quadrature]], set $N=\lfloor T/\Delta t\rfloor$, consider its levels $0\le k\le N$, and write $\beta_\infty:=\|\beta\|_\infty$. Assume $\Delta t\|\mu\|_\infty\le1$. Define

$$\|\eta\|_{BL^*}:=\sup_{\|\phi\|_\infty+\operatorname{Lip}(\phi)\le1}\left|\int\phi\,d\eta\right|$$

for a finite signed measure $\eta$. Then, for fixed $T$, there is $C_T$ independent of $\Delta t$, initial cohort count and cutoff such that

$$\max_{k\Delta t\le T}\|\nu_h^k-n(t_k,a)\,da\|_{BL^*}\le C_T(\epsilon_0+\Delta t+\tau_A).$$

The measure norm is weak and does not assert $L^1$ convergence of atomic cohorts to a density. The constant $C_T$ may depend on $T$, the stated coefficient bounds and $\|n_0\|_1$, but is independent of the time step, cutoff and number of cohorts. For midpoint initial cohorts on $[0,A-T]$ and Lipschitz $n_0$, $\epsilon_0=O_A(\Delta a)$; the omitted initial tail $\tau_A$ remains separate.

## Facts & Assumptions

**Given:** The renewal model, its characteristic solution, the cohort algorithm and the supplier one-step and discrete-recurrence results.

[F1] [[def-age-structured-renewal-transport-problem]]: survival is $S(a,s)=\exp(-\int_a^{a+s}\mu)$ and births reset cohort age to zero.

[F2] [[thm-age-structured-renewal-characteristic-solution]]: the exact birth rate satisfies $B(t)=G(t)+\int_0^tK(t-s)B(s)\,ds$, with $K(s)=\beta(s)S(0,s)$, and the density is the corresponding characteristic pushforward.

[F3] [[alg-age-cohort-characteristic-quadrature]]: old cohort ages advance by $\Delta t$, cohort masses use the forward-Euler survival step, and each discrete birth mass is $\Delta t B_h^k$ at age zero.

[F4] [[thm-forward-euler-one-step-consistency-and-local-error]]: on a compact tube with a $C^1$ vector field, forward Euler has local defect $O(\Delta t^2)$ and one-step Lipschitz factor $1+L\Delta t$.

[F5] [[thm-age-structured-renewal-semigroup-growth-and-data-stability]]: for two solutions with the same rates and different initial data, their $L^1$ difference is at most $e^{\beta_\infty t}$ times the initial $L^1$ difference.

[L1] [[lem-discrete-one-step-error-recurrence-bound]]: a recurrence $e_{k+1}\le(1+Lh)e_k+Ch^2$ on a fixed finite horizon has maximum error $O(h)$.

## Proof

1.1 Let $\widehat n$ be the exact solution with initial density $\widehat n_0$. Applying the characteristic formula [F2] and changing variables from age $a$ to birth time $s=t-a$ gives, for every bounded Lipschitz $\phi$, $\int\phi(a)\widehat n(t,a)da=\int_0^{A-T}\phi(x+t)S(x,t)n_0(x)dx+\int_0^t\phi(t-s)S(0,t-s)\widehat B(s)ds$. The birth kernel $K(s)=\beta(s)S(0,s)$ is bounded and Lipschitz, and $\widehat G(t)=\int_0^{A-T}\beta(x+t)S(x,t)n_0(x)dx$ is bounded and Lipschitz because $\beta,\mu$ have bounded first derivatives and $n_0$ is integrable. The mass estimate [F5] bounds $\widehat B$ by $\beta_\infty e^{\beta_\infty T}\|n_0\|_1$. Subtracting its Volterra equation at $t$ and $t+h$, the old-history kernel difference is at most $\operatorname{Lip}(K)h\int_0^T|\widehat B|$ and the new interval at most $h\|K\|_\infty\|\widehat B\|_\infty$. Thus $\widehat B$ is Lipschitz on $[0,T]$. [F1, F2, F5, algebra]

2.1 If $N=0$, there are no time steps and the survival-error claim is zero. Suppose $N\ge1$, and put $T_h=N\Delta t>0$. A cohort born with mass $m_0$ and initial age $a_0$ has exact survival mass solving $m'(s)=-\mu(a_0+s)m(s)$; let $q=m_0$ be its reference mass. To apply [F4] at $a_0=0$, define the extension $\bar\mu(r)=\mu(r)$ for $r\ge0$ and $\bar\mu(r)=\mu(0)+\mu'_+(0)r e^r$ for $r<0$. The one-sided derivative $\mu'_+(0)$ exists; the two formulas and their first derivatives match at zero, and $\bar\mu$ and $\bar\mu'$ are bounded on $\mathbb R$. For a cohort whose reference mass is $q>0$, the vector field $f(s,m)=-\bar\mu(a_0+s)m$ is $C^1$ on the open tube $V=(-1,T_h+1)\times(-q,2q)$, where $T_h=N\Delta t$, with all bounds required by [F4] uniform in $a_0$ and proportional to $q$ except for the state-Lipschitz constant, which is bounded by $\|\bar\mu\|_\infty$. The exact continuation $m(s)=m_{\mathrm{start}}\exp(-\int_0^s\bar\mu(a_0+r)\,dr)$ exists on an open interval containing $[0,T_h]$; after shrinking that interval at the endpoints its graph lies in $V$. Its exact forward solution from any $m\in[0,q]$ and its Euler input/output states lie in $K=[0,T_h]\times[0,q]$: mortality is nonnegative for ages $a_0+s\ge0$, and $\Delta t\|\mu\|_\infty\le1$. Thus [F4] gives one-step defect at most $C\Delta t^2q$ and a stability factor $1+L\Delta t$, with constants independent of $a_0$ and proportional to $q$. Applying [L1] on the aligned horizon $T_h=N\Delta t$ gives survival-weight error at most $C_T\Delta t q$ over the full run; the zero-mass case is exact. For the discrete total cohort mass $N_h^k$, positivity and $B_h^k\le\beta_\infty N_h^k$ give $N_h^{k+1}\le(1+\Delta t\beta_\infty)N_h^k$, hence $N_h^k\le e^{\beta_\infty T}N_h^0$. Since $N_h^0\le\|n_0\|_1+\epsilon_0$ (test the initial BL defect with $\phi\equiv1$), the sum of the initial cohort masses and all inserted newborn masses $\sum_{j<k}\Delta t B_h^j$ is at most $C_T(\|n_0\|_1+\epsilon_0)$. Thus the sum of all cohort survival-weight errors is at most $C_T\Delta t(\|n_0\|_1+\epsilon_0)$. [F3, F4, L1, step 1.1, algebra]

3.1 Write $e_k=|B_h^k-\widehat B(t_k)|$. The initial-cohort contribution is at most $C_T(\epsilon_0+\Delta t)$: the test $x\mapsto\beta(x+t_k)S(x,t_k)$ has bounded-Lipschitz norm at most $C_T$, and step 2.1 bounds the accumulated Euler survival error. Each cohort born during $[t_j,t_{j+1}]$ is inserted at $t_{j+1}$ with mass $\Delta t B_h^j$, so at $t_k$ its age is $(k-j-1)\Delta t$. The exact renewal convolution is the integral of $K(t_k-s)\widehat B(s)$ over $s\in[0,t_k]$. Since $K$ and $\widehat B$ are Lipschitz, replacing this integral by the left-endpoint sum with age $(k-j-1)\Delta t$ costs at most $C_T\Delta t$ (the age sample differs from $t_k-t_j$ by one step). Replacing $\widehat B(t_j)$ by $B_h^j$ contributes at most $\|K\|_\infty\Delta t\sum_{j<k}e_j$, and replacing exact newborn survival by its Euler product contributes at most $C_T\Delta t$ by step 2.1. Therefore $e_k\le C_T(\epsilon_0+\Delta t)+\|K\|_\infty\Delta t\sum_{j<k}e_j$. Set $r_k=C_T(\epsilon_0+\Delta t)+\|K\|_\infty\Delta t\sum_{j<k}e_j$. Then $e_k\le r_k$ and $r_{k+1}=r_k+\|K\|_\infty\Delta t e_k\le(1+\|K\|_\infty\Delta t)r_k$, so $e_k\le e^{\|K\|_\infty T}C_T(\epsilon_0+\Delta t)$. [F2, F3, step 2.1, algebra]

4.1 For any test function with $\|\phi\|_\infty+\operatorname{Lip}(\phi)\le1$, the initial cohort pushforward differs from the first integral for $\widehat n$ in step 1.1 by at most $C_T(\epsilon_0+\Delta t)$, using step 2.1 and the bounded-Lipschitz norm of $x\mapsto\phi(x+t)S(x,t)$. The newborn cohort sum differs from the second integral by its left-Riemann error $C_T\Delta t$ plus $\Delta t\sum_{j<k}e_j\le C_T(\epsilon_0+\Delta t)$ by step 3.1. Thus $\|\nu_h^k-\widehat n(t_k,a)da\|_{BL^*}\le C_T(\epsilon_0+\Delta t)$. The initial data difference is $\|n_0-\widehat n_0\|_1=\tau_A$, so [F5] gives $\|n(t_k)-\widehat n(t_k)\|_1\le e^{\beta_\infty T}\tau_A$. The inequality $\|f(a)da\|_{BL^*}\le\|f\|_1$ and the triangle inequality prove the stated bound. [F1, F2, F5, step 1.1, step 2.1, step 3.1, algebra] ∎

