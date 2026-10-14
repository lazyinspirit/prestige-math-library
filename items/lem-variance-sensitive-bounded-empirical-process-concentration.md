---
id: lem-variance-sensitive-bounded-empirical-process-concentration
kind: lemma
title: "A variance-sensitive bound for bounded empirical suprema"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps: [def-expectation-of-a-nonnegative-or-integrable-random-variable, thm-independent-random-elements-have-product-joint-law, thm-jensen-inequality-for-expectation, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-dominated-convergence, cor-markov-inequality-for-random-variables, thm-natural-logarithm-laws, thm-logarithm-derivative-and-integral, thm-derivative-of-exponential]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Boucheron, Bousquet, Lugosi and Massart, Moment Inequalities for Functions of Independent Random Variables, Section 3, pp. 9-16"
      url: "https://arxiv.org/pdf/math/0503651"
---

## Statement

Let $X_1,\ldots,X_n$ be iid with law $P$, $n\ge1$, and let $\mathcal F$ be a finite or countable class of measurable real functions containing $0$. Suppose $|f|\le B$ everywhere and $Pf^2\le s^2$ for all $f\in\mathcal F$, with finite $B,s\ge0$. Put
$$Z=\sup_{f\in\mathcal F}\sum_{i=1}^n(f(X_i)-Pf),\qquad W=\sup_{f\in\mathcal F}\sum_{i=1}^n f(X_i)^2,\qquad m=EW.$$
For every $x>0$,
$$P\left(Z>EZ+2\sqrt{(8m+4ns^2)x}+\sqrt8\,Bx\right)\le e^{-x}.$$
The bound uses second moments, not only variances. All suprema are measurable by countability. No choice axiom is assumed.

## Facts & Assumptions

**Given:** The iid sample, countable class containing zero, and boundedness and second-moment hypotheses in the Statement.

[F1] [[thm-independent-random-elements-have-product-joint-law]] and [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] allow coordinatewise integration and independent ghost coordinates on the finite product law.

[F2] [[thm-jensen-inequality-for-expectation]] gives Jensen's inequality for convex functions; [[thm-dominated-convergence]] permits bounded limits under integration.

[F3] [[cor-markov-inequality-for-random-variables]] turns exponential-moment bounds into tail bounds. Logarithm and exponential obey their usual derivative rules ([[thm-natural-logarithm-laws]], [[thm-logarithm-derivative-and-integral]], [[thm-derivative-of-exponential]]).

## Proof

**Given:** The objects and hypotheses in the Statement. First take a finite class and $B>0$; the case $B=0$ is immediate.

1.1 For positive bounded $U$ bounded away from zero, define $\operatorname{Ent}(U)=E[U\log U]-EU\log EU$. The function $\Phi(u,a)=u\log(u/a)-u+a$ is jointly convex: its Hessian quadratic form is $(du-(u/a)da)^2/u\ge0$. Direct differentiation in $a$ gives $\operatorname{Ent}(U)=\inf_{a>0}E\Phi(U,a)$, attained at $a=EU$. If $E_i$ integrates coordinate $i$, the product identity $\operatorname{Ent}(U)=E_{-i}\operatorname{Ent}_i(U)+\operatorname{Ent}_{-i}(E_iU)$ is obtained by adding and subtracting $E[(E_iU)\log(E_iU)]$. Joint convexity gives $\operatorname{Ent}_j(E_iU)\le E_i\operatorname{Ent}_j(U)$ for $j\ne i$: apply Jensen to $\Phi(E_iU,E_iE_jU)$ and integrate coordinate $j$. Induction in the product identity proves tensorization $\operatorname{Ent}(U)\le E\sum_i\operatorname{Ent}_i(U)$. All integrations here are on finite product laws. [F1, F2, F3, algebra]

2.1 Let $Z_i'$ replace $X_i$ by an independent copy and put $V_+=\sum_i E_i'(Z-Z_i')_+^2$. Jensen for the logarithm gives $\operatorname{Ent}_i(e^{tZ})\le\operatorname{Cov}_i(e^{tZ},tZ)$ for $t>0$. A fresh-copy expansion expresses this covariance as $\frac t2E_{i,i'}[(e^{tZ}-e^{tZ_i'})(Z-Z_i')]$. Swap the two copies to restrict to $Z>Z_i'$ and use $1-e^{-ta}\le ta$ for $a\ge0$. Tensorization from step 1.1 then yields $\operatorname{Ent}(e^{tZ})\le t^2E[e^{tZ}V_+]$. Choose the first maximizing function $f_*$ for $Z$ in a fixed finite ordering. Since $Z-Z_i'\le f_*(X_i)-f_*(X_i')$, the bound $(a-b)^2\le2a^2+2b^2$ gives $V_+\le2W+2ns^2$. [F1, F2, step 1.1, algebra]

2.2 Write $c=B^2$ and $W_i=\sup_f\sum_{j\ne i}f(X_j)^2$. Choosing a common maximizer for $W$ shows $0\le\Delta_i=W-W_i\le c$ and $\sum_i\Delta_i\le W$. Use the conditional variational formula of step 1.1 with comparator $e^{aW_i}$, which is independent of coordinate $i$. With $\psi(u)=e^u-u-1$, it gives $\operatorname{Ent}_i(e^{aW})\le E_i[e^{aW}\psi(-a\Delta_i)]$. Convexity and $\psi(0)=0$ imply $\psi(-a\Delta_i)\le(\Delta_i/c)\psi(-ac)$. Tensorization therefore implies, for $L(a)=\log Ee^{aW}$, $aL'(a)-L(a)\le\psi(-ac)L'(a)/c$, or $(1-e^{-ac})L'(a)\le cL(a)$. If $m=0$, $W=0$ almost surely and the following bound is immediate. Otherwise differentiating $L(a)/(e^{ac}-1)$ shows it is nonincreasing; its limit at zero is $m/c$. Thus $L(a)\le(m/c)(e^{ac}-1)\le2am$ whenever $0\le ac\le1/2$, where the last scalar inequality follows by integrating $e^u\le2$ on $[0,1/2]$. [F2, F3, step 1.1, algebra]

3.1 Put $H(t)=\log Ee^{tZ}$ and $D=tH'(t)-H(t)$, and let $E_t$ denote integration against density $e^{tZ-H(t)}$. Step 2.1 gives $D\le2t^2E_tW+2t^2ns^2$. Jensen under this tilted law applied to $e^{aW}/e^{tZ-H(t)}$ gives $aE_tW\le L(a)+D$; indeed its expectation under the tilt is $Ee^{aW}$, while the expectation of its logarithm is $aE_tW-D$. Taking $a=4t^2$ and using step 2.2 yields $D\le(8m+4ns^2)t^2$ for $0<t\le1/(\sqrt8 B)$. Integrating $(H(t)/t)'=D/t^2$ from zero proves $\log Ee^{t(Z-EZ)}\le At^2$, where $A=8m+4ns^2$. [F2, F3, step 2.1, step 2.2, algebra]

4.1 Put $b=\sqrt8 B$. If $A>0$, choose $t=\sqrt{x}/(\sqrt A+b\sqrt x)<1/b$. Markov's inequality and step 3.1 show that a deviation of size $At+x/t$ has probability at most $e^{-x}$. Since $At+x/t\le2\sqrt{Ax}+bx$, the stated tail bound follows. The case $A=0$ follows by taking $t\uparrow1/b$ in the same exponential bound. Finally enumerate a countable class with zero first and increase its finite initial subclasses. Their $Z,W$ increase to the displayed suprema and are bounded by $2nB,nB^2$; bounded convergence passes the exponential bounds and their expectations to the limit. The same Chernoff argument proves the assertion for the countable class. [F2, F3, step 3.1, algebra] ∎

