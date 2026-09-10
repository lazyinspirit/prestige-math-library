---
id: thm-portmanteau-theorem
kind: theorem
title: Portmanteau theorem
deps: ["def-weak-convergence-of-borel-probability-measures", "lem-distance-to-set-is-lipschitz", "thm-dominated-convergence", "thm-continuity-from-above-for-measures", "thm-dynkin-pi-lambda", "thm-change-of-variables-for-expectation"]
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: van Gaans, Theorem 3.2, pp. 7–9
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

For Borel probabilities $\mu_n,\mu$ on a metric space S, the following are equivalent: (i) $\mu_n\Rightarrow\mu$; (ii) integrals converge for all bounded uniformly continuous real tests; (iii) $\limsup_n\mu_n(F)\le\mu(F)$ for every closed F; (iv) $\liminf_n\mu_n(G)\ge\mu(G)$ for every open G; (v) $\mu_n(A)\to\mu(A)$ for every Borel A with $\mu(\partial A)=0$.

## Facts & Assumptions

[F1] [[lem-distance-to-set-is-lipschitz]]: Let $(X,d)$ be a metric space (def-metric-space), let $A \subseteq X$ be
nonempty and let $x, y \in X$. Then

$$|d(x,A) - d(y,A)| \le d(x,y),$$

with $d(\cdot,A)$ the distance to a nonempty set (def-metric-bounded-diameter).
Thus the real-valued function $u \mapsto d(u,A)$ changes by at most $d(u,v)$
between $u$ and $v$: it is **$1$-Lipschitz**.

[F2] [[thm-dominated-convergence]]: Let $f$ and $(f_n)$ be measurable complex-valued functions such that
$f_n\to f$ almost everywhere and $|f_n|\le g$ almost everywhere for a single
nonnegative measurable function $g$ with $\int g\,d\mu<+\infty$. Then
$f\in L^1(\mu)$,
$$\int|f_n-f|\,d\mu\longrightarrow0,$$
and hence
$$\int f_n\,d\mu\longrightarrow\int f\,d\mu.$$

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 (i) implies (ii) because a uniformly continuous function is continuous. Suppose (ii), and let F be nonempty and closed. By F1, $f_m(x)=\max(0,1-md(x,F))$ is bounded and uniformly continuous. Moreover $f_m\downarrow\mathbf1_F$. Thus $\limsup_n\mu_n(F)\le\int f_m\,d\mu$ for every m. F2 with majorant one gives (iii) as m tends to infinity. For F empty the inequality is zero<=zero. [F1, F2]

1.2 For G open, apply (iii) to its closed complement and use $\mu_n(G)=1-\mu_n(S\setminus G)$ to obtain (iv). Conversely the same complement calculation obtains (iii) from (iv). If A is a Borel continuity set, $A^\circ\subseteq A\subseteq\overline A$ and $\mu(A^\circ)=\mu(A)=\mu(\overline A)$. The open lower bound and closed upper bound therefore squeeze $\mu_n(A)$ to $\mu(A)$, proving (v). [given, algebra]

1.3 Assume (v), and fix a bounded continuous real f and $\eta$>0. The disjoint level sets with $\mu(f=t)\ge1/r$ number at most r for each positive integer r. Their union over r contains all positive-mass levels and is countable (each finite subset of the real line can be listed in increasing order). Choose finitely many increasing levels $t_0<\cdots<t_m$ outside this countable set, with $t_0<-\|f\|_\infty$, $t_m>\|f\|_\infty$ and mesh below $\eta$. Such levels exist in every open interval, since an interval is uncountable. [given, algebra]

2.1 For $A_j=\{t_{j-1}\le f<t_j\}$, continuity of f gives $\partial A_j\subseteq\{f=t_{j-1}\}\cup\{f=t_j\}$, so (v) applies. The simple function $s=\sum_jt_{j-1}\mathbf1_{A_j}$ satisfies $|f-s|\le\eta$ everywhere. Therefore $|\int f\,d\mu_n-\int f\,d\mu|\le2\eta+|\sum_jt_{j-1}(\mu_n(A_j)-\mu(A_j))|$. The finite sum tends to zero, by step 1.3 and (v). Letting $\eta$ tend to zero proves (i), closing all equivalences. [step 1.3] ∎
