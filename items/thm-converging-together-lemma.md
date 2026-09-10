---
id: thm-converging-together-lemma
kind: theorem
title: Converging together lemma
deps: ["thm-portmanteau-theorem", "thm-continuity-from-above-for-measures", "def-convergence-in-probability", "lem-distance-to-set-is-lipschitz"]
sources:
  references:
    - title: van Gaans, Theorem 3.2 and closed-neighborhood argument
      url: https://pub.math.leidenuniv.nl/~gaansowvan/jancol1.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Let $X_n$ and $Y_n$ be Borel-measurable random elements with values in a metric space $S$, on the same probability space for each $n$, and let $X$ be an $S$-valued Borel-measurable random element. Suppose $d(X_n,Y_n)$ is measurable and $P(d(X_n,Y_n)>\varepsilon)\to0$ for every $\varepsilon$>0. If $X_n\Rightarrow X$, then $Y_n\Rightarrow X$.

## Facts & Assumptions

[F1] [[thm-portmanteau-theorem]]: For Borel probabilities $\mu_n,\mu$ on a metric space S, the following are equivalent: (i) $\mu_n\Rightarrow\mu$; (ii) integrals converge for all bounded uniformly continuous real tests; (iii) $\limsup_n\mu_n(F)\le\mu(F)$ for every closed F; (iv) $\liminf_n\mu_n(G)\ge\mu(G)$ for every open G; (v) $\mu_n(A)\to\mu(A)$ for every Borel A with $\mu(\partial A)=0$.

[F2] [[thm-continuity-from-above-for-measures]]: Let $(E_n)_{n\in\mathbb N}$ be a decreasing sequence of measurable sets for a measure $\mu$. If $\mu(E_{n_0})<+\infty$ for some $n_0$, then

$$\mu\left(\bigcap_{n\in\mathbb N}E_n\right)=\inf_{n\in\mathbb N}\mu(E_n).$$

[F3] [[lem-distance-to-set-is-lipschitz]]: Let $(X,d)$ be a metric space (def-metric-space), let $A \subseteq X$ be
nonempty and let $x, y \in X$. Then

$$|d(x,A) - d(y,A)| \le d(x,y),$$

with $d(\cdot,A)$ the distance to a nonempty set (def-metric-bounded-diameter).
Thus the real-valued function $u \mapsto d(u,A)$ changes by at most $d(u,v)$
between $u$ and $v$: it is **$1$-Lipschitz**.

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 By F3, distance to nonempty $F$ is continuous; its sublevel sets are closed. For nonempty closed F put $F^{[\varepsilon]}=\{x:d(x,F)\le\varepsilon\}$, which is closed. If $Y_n$ lies in F and $d(X_n,Y_n)\le\varepsilon$, then $X_n$ lies in this enlargement. Thus $P(Y_n\in F)\le P(X_n\in F^{[\varepsilon]})+P(d(X_n,Y_n)>\varepsilon)$. [given, algebra, F3]

2.1 F1 and the probability hypothesis give $\limsup_nP(Y_n\in F)\le P_X(F^{[\varepsilon]})$. For $m\in\mathbb N$, the sets $E_m:=F^{[1/(m+1)]}$ decrease to F, so F2 makes their probabilities decrease to P_X(F). Empty F has probability zero without an enlargement. The resulting closed-set bound is again F1, now proving $Y_n\Rightarrow X$. [F1, F2] ∎
