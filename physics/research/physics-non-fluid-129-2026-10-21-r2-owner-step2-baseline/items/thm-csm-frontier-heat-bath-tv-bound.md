---
id: thm-csm-frontier-heat-bath-tv-bound
kind: theorem
title: Finite Dobrushin bound for random-scan heat-bath sampling
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - alg-csm-frontier-heat-bath-update
dependency_roles:
  alg-csm-frontier-heat-bath-update: mathematical-premise
justified_by: []
aliases: []
axiom_use: No choice axiom is used; the argument uses finite sums, finite couplings, and finite maxima.
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction"
      url: https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf
      locator: "Chapter 6, §6.5.2, Theorem 6.31 and equations (6.37)–(6.40), printed pp. 268–269 (PDF pp. 285–286). That theorem concerns an infinite-volume uniqueness criterion; the finite-time chain estimate below is proved locally."
    - title: "David A. Levin, Yuval Peres, and Elizabeth L. Wilmer, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
      locator: "Chapter 3, §3.3.2, printed pp. 42–43; Chapter 14, §14.2, printed pp. 203–205; and Chapter 15, §15.1, printed pp. 215–217. The local proof supplies the finite influence estimate and its constants."
verification:
  precheck: pending
---

## Statement

Let $V$ be a finite nonempty set with $n=|V|$, let $S$ be a finite nonempty set, and let $w:S^V\to(0,\infty)$ be a finite positive weight. Let $\pi(x)=w(x)/\sum_{y\in S^V}w(y)$ and let $q_i(s\mid\eta)$ be the one-site conditional law defined by the finite-spin heat-bath update. For $i\ne j$, define
$$c_{ij}=\sup_{\substack{\eta,\eta'\in S^{V\setminus\{i\}}\\\eta_k=\eta'_k\ \text{for all }k\ne j}}\frac12\sum_{s\in S}|q_i(s\mid\eta)-q_i(s\mid\eta')|,\qquad c_{ii}=0.$$
Assume that for some $c\in[0,1)$, both $\max_i\sum_jc_{ij}\leq c$ and $\max_j\sum_ic_{ij}\leq c$. Define $P(x,y)$ as the one-step transition probability of the random-scan heat-bath update, and let $X_t$ be the resulting chain started at $x\in S^V$. For every integer $t\geq0$,
$$\left\|\mathcal L_x(X_t)-\pi\right\|_{\rm TV}\leq n\left(1-\frac{1-c}{n}\right)^t\leq n\exp\!\left(-\frac{(1-c)t}{n}\right),\qquad \|\mu-\nu\|_{\rm TV}:=\frac12\sum_{z\in S^V}|\mu(z)-\nu(z)|.$$
Consequently, for every $a\leq b$ and every $f:S^V\to[a,b]$,
$$\left|\mathbb E_x f(X_t)-\sum_{z\in S^V}\pi(z)f(z)\right|\leq(b-a)n\exp\!\left(-\frac{(1-c)t}{n}\right).$$
This is a deterministic bias certificate for the expectation under the specified finite model. It is not a per-realization guarantee, an independent-sample confidence bound, or a claim about critical systems.

## Statement references

[[alg-csm-frontier-heat-bath-update]]

## Facts & Assumptions

**Given:** A finite nonempty $V$, a finite nonempty $S$, a strictly positive weight $w:S^V\to(0,\infty)$, and the random-scan update.

[F1] [[alg-csm-frontier-heat-bath-update]]: each step selects a site uniformly and resamples its spin from $q_i(s\mid\eta)=w(\eta^{i,s})/\sum_{a\in S}w(\eta^{i,a})$, leaving every other spin fixed.

[A1] The finite influence coefficients in the Statement have row and column sums at most $c<1$.

## Proof
**Given:** The finite weight, conditional laws, and hypotheses [F1] and [A1].

1.1 For any fixed site $i$, a configuration sampled from $\pi$ has conditional distribution $q_i(\cdot\mid\eta)$ at $i$ given its exterior $\eta$. Replacing its spin by a fresh draw from that same conditional leaves the joint law unchanged: for each $\eta$ and $s$, the resulting mass is $\pi_{V\setminus\{i\}}(\eta)q_i(s\mid\eta)=\pi(\eta^{i,s})$. Averaging these invariant updates over the uniform site choice proves that $\pi$ is invariant for $P$. [given, F1, algebra]

1.2 For probability vectors $p,q$ on a finite set, put $r_s=\min\{p_s,q_s\}$ and $\alpha=\sum_s r_s$. Assign joint mass $r_s$ to $(s,s)$. If $\alpha<1$, add mass $(p_s-r_s)(q_a-r_a)/(1-\alpha)$ to each pair $(s,a)$. The residual supports are disjoint, so this added mass is off the diagonal; summing rows and columns gives marginals $p$ and $q$, and the disagreement probability is $1-\alpha=\frac12\sum_s|p_s-q_s|$. If $\alpha=1$, the diagonal masses alone give the required joint law. [given, algebra]

2.1 If configurations $x,y$ differ on the set $D=\{j:x_j\ne y_j\}$, then for each site $i$ the triangle inequality, applied while changing the differing exterior coordinates one at a time, gives $\|q_i(\cdot\mid x_{-i})-q_i(\cdot\mid y_{-i})\|_{\rm TV}\leq\sum_{j\in D}c_{ij}$. Use the joint law from step 1.2 to resample the updated spins maximally, and choose the same uniformly random update site in both chains. If $d_H$ is the number of differing coordinates, the expected new Hamming distance is therefore at most $$d_H(x,y)-\frac{d_H(x,y)}n+\frac1n\sum_{j\in D}\sum_i c_{ij}\leq\left(1-\frac{1-c}{n}\right)d_H(x,y).$$ The last inequality uses the column-sum bound in [A1]; the row-sum bound is retained as a stated hypothesis but is not needed for this estimate. [A1, step 1.2, algebra]

3.1 Repeat this joint construction at each update. Conditional expectation and induction give $\mathbb E[d_H(X_t,Y_t)]\leq n(1-(1-c)/n)^t$ when one chain starts at $x$ and the other starts with law $\pi$: initially $d_H\leq n$, and the second marginal remains $\pi$ by step 1.1. [step 1.1, step 2.1, algebra]

4.1 Since $\mathbf1_{\{X_t\ne Y_t\}}\leq d_H(X_t,Y_t)$, for every event $A\subseteq S^V$ the difference $|\Pr(X_t\in A)-\Pr(Y_t\in A)|$ is at most $\Pr(X_t\ne Y_t)$. For finite laws of equal mass, the supremum of this event difference equals half the $\ell^1$ distance: the positive and negative parts of their signed difference have equal mass, each half the sum of absolute values. Taking the supremum over $A$ therefore proves the first total-variation bound in the Statement. For $t=0$ the exponential bound is equality; for $t\geq1$, $(1-u)^t\leq e^{-ut}$ with $u=(1-c)/n\in(0,1]$ gives the stated exponential estimate. [step 3.1, algebra]

5.1 If $a=b$, the observable bound is immediate. Otherwise set $g=(f-a)/(b-a)$, so $0\leq g\leq1$. For the signed measure $\Delta=\mathcal L_x(X_t)-\pi$, the positive and negative masses both equal $\|\Delta\|_{\rm TV}$ because $\Delta(S^V)=0$; hence $|\sum_z g(z)\Delta(z)|\leq\|\Delta\|_{\rm TV}$. Multiplying by $b-a$ and using step 4.1 proves the asserted bias bound. [step 4.1, algebra] ∎
