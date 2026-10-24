---
id: thm-certified-bracketed-inverse-error
kind: theorem
title: "Certified bisection controls CDF residual, spatial error, and distribution error"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - lem-geometric-sequence-null
  - alg-certified-bracketed-cdf-inversion
  - lem-generalized-inverse-sublevel-identity
  - thm-midpoint-bit-stream-coupling-and-error
  - cor-compact-domain-maps-are-uniformly-continuous
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Luc Devroye, Non-Uniform Random Variate Generation, Chapter II §2.2, bisection inversion"
      url: "https://luc.devroye.org/chapter_two.pdf"
    - title: "D. Pollard, A User's Guide to Measure Theoretic Probability, generalized inverse discussion"
      url: "https://web.archive.org/web/20210415110203if_/http://www.stat.yale.edu/~james/Courses/600.spring2011/Handouts/Extract-from-UGMTP.pdf"
---

## Statement

For the fixed-depth procedure of [[alg-certified-bracketed-cdf-inversion]], a successful call uses two endpoint evaluations and $N$ midpoint evaluations, at most $N+2$ CDF evaluations in total. For every continuous CDF on its compact bracket, some finite depth meets each positive modulus tolerance. The bracket invariant holds and its returned point satisfies $|F(\widehat x)-u|\le\varepsilon$. For $u\in(0,1)$, if the exact quantile $Q(u)$ lies in $[a,b]$ and a density $f$ satisfies $F(y)-F(x)=\int_x^y f(t)\,dt$ and $f\ge m>0$ almost everywhere on the bracket, then $|\widehat x-Q(u)|\le\varepsilon/m$.

For the distribution bound, assume the procedure is run with one fixed depth and bracket on every $u\in[0,1]$, with $\widetilde F(a)=0$, $\widetilde F(b)=1$, and residual at most $\varepsilon$ for a continuous CDF $\widetilde F$. Let $g(u)$ be its returned point. Then $g$ is nondecreasing. If $\sup_x|F(x)-\widetilde F(x)|\le\eta$ for another CDF $F$, then
$$d_K\bigl(\mathcal L(g(U_q)),F\bigr)\le\delta_q+\varepsilon+\eta,$$
where $U_q$ is the $q$-bit midpoint uniform, $q\ge1$, and $\delta_q=2^{-q-1}$. If the target is unbounded, the finite-bracket algorithm alone has no global distribution guarantee; its outside-bracket status remains tail-unresolved. Here $d_K(\mu,\nu)=\sup_x|F_\mu(x)-F_\nu(x)|$.

## Facts & Assumptions

**Given:** The algorithm inputs and hypotheses in the Statement. The Kolmogorov distance is $d_K(\mu,\nu)=\sup_x|F_\mu(x)-F_\nu(x)|$.

[F1] For $u\in(0,1)$, the generalized inverse satisfies $Q(u)\le x$ exactly when $u\le F(x)$. [[lem-generalized-inverse-sublevel-identity]]

[F2] A $q$-bit midpoint input has both strict and non-strict CDF discrepancies at most $\delta_q=2^{-q-1}$. [[thm-midpoint-bit-stream-coupling-and-error]]

[F3] A continuous real-valued function on a compact interval is uniformly continuous. [[cor-compact-domain-maps-are-uniformly-continuous]]

[F4] The geometric sequence $2^{-N}$ tends to zero. [[lem-geometric-sequence-null]]

[A4] For the spatial claim, the density identity and lower bound in the Statement imply $F(y)-F(x)\ge m(y-x)$ on the bracket by integrating $f\ge m$.

[A1] The bisection depth, bracket, tolerance, modulus, and evaluation budget satisfy the algorithm's Definition. A returned $\widehat x$ comes from a successful call that passed its endpoint bracket test. The distribution claim additionally has a single fixed depth and full-support bracket.

[A2] The approximate CDF $\widetilde F$ is continuous, nondecreasing, and satisfies the stated uniform CDF error bound $\eta$.

[A5] The generalized-inverse supplier in [F1] assumes Countable Choice. [[def-countable-choice]]

[A6] When $U_q$ in [F2] is realized from the countable fair-bit product, its source model assumes Countable Choice and Dependent Choice; the distribution bound is conditional on that stated midpoint law. [[def-countable-choice]], [[def-dependent-choice]]

## Proof

1.1 Initially $F(\ell)\le u\le F(r)$ by the algorithm's bracket test. If $F(m)\le u$, replacing $\ell$ by $m$ preserves both inequalities by monotonicity; if $F(m)>u$, replacing $r$ by $m$ preserves them. After $N$ steps, $r-\ell=(b-a)2^{-N}$, so the modulus certificate gives $F(r)-F(\ell)\le\varepsilon$. Since $\widehat x\in[\ell,r]$, monotonicity puts both $F(\widehat x)$ and $u$ in this range, proving $|F(\widehat x)-u|\le\varepsilon$. For a continuous $F$, uniform continuity [F3] supplies a positive distance tolerance; since $(b-a)2^{-N}\to0$ by [F4], some finite $N$ meets it. A successful run evaluates the two endpoints once and one midpoint per update, hence uses $N+2$ CDF evaluations; the budget explicitly includes these endpoints. [given, F3, F4, algebra]

1.2 For fixed depth $N$, the grid consists of the $2^N$ cells in the partition of $[a,b]$; their left endpoints are $a+j(b-a)2^{-N}$ for $0\le j<2^N$. At each bisection, the tested midpoint separates the remaining candidate left endpoints into lower and upper halves, and the rule keeps the upper half exactly when $\widetilde F(m)\le u$. Induction on the $N$ updates shows that the final $\ell$ is the greatest such left endpoint and $r$ is the next grid point. As $u$ increases, the predicate set can only grow, so the selected cell midpoint $g(u)$ is nondecreasing. [given, A1, algebra, induction]

2.1 The successful call's endpoint test gives $F(a)\le u\le F(b)$. By [F1], $Q(u)\le Q(u)$ gives $u\le F(Q(u))$, while every $y<Q(u)$ satisfies $F(y)<u$. If $Q(u)=a$, the endpoint test and [F1] give $F(Q(u))=u$. If $Q(u)>a$, take $y_n=Q(u)-(Q(u)-a)/(n+1)$ for $n\in\mathbb N$; then $y_n\in[a,Q(u))$ and $y_n\uparrow Q(u)$. Continuity of $F$ on $[a,b]$ gives $F(Q(u))=\lim_nF(y_n)\le u$. Thus $F(Q(u))=u$ in either case. Since $Q(u),\widehat x\in[a,b]$, [A4] gives $m|\widehat x-Q(u)|\le|F(\widehat x)-F(Q(u))|\le\varepsilon$ by step 1.1. [given, F1, A1, A4, A5, step 1.1, algebra]

2.2 Fix $x$ and set $E=\{u\in[0,1]:g(u)\le x\}$ and $t=\sup(E\cup\{0\})$. Monotonicity makes $E$ an initial interval. If $u<t$, then $u\in E$, so $\widetilde F(x)\ge\widetilde F(g(u))\ge u-\varepsilon$. If $u>t$, then $u\notin E$, so $g(u)>x$ and $\widetilde F(x)\le\widetilde F(g(u))\le u+\varepsilon$. Taking one-sided limits gives $|\widetilde F(x)-t|\le\varepsilon$; if $t=0$ or $1$, the missing side follows from $0\le\widetilde F(x)\le1$. The set $E$ is either an initial closed or open interval, or empty/all; its $q$-bit midpoint-grid probability differs from $t$ by at most $\delta_q$, using the strict or non-strict CDF bound in [F2]. Thus $d_K(\mathcal L(g(U_q)),\widetilde F)\le\delta_q+\varepsilon$. [A1, A2, F2, A6, step 1.2, algebra]

3.1 The uniform CDF error implies $d_K(\widetilde F,F)\le\eta$. The triangle inequality for the supremum norm of CDF differences and step 2.2 give the stated $\delta_q+\varepsilon+\eta$ bound. [A2, step 2.2, algebra] ∎
