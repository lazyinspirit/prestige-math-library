---
id: lem-rn-densities-of-bounded-l-p-functionals-belong-to-l-q
kind: lemma
title: "The Radon-Nikodym density of a bounded $L^p$ functional belongs to $L^q$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities, prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm, thm-monotone-convergence-for-the-integral, def-conjugate-exponents, prop-essential-supremum-is-attained-as-the-least-essential-bound]
proof_strategy: "For $1<p<\\infty$, test the Radon-Nikodym density against bounded truncated extremizers and pass to the limit by monotone convergence. For $p=1$, level-set testing forces the essential supremum below the operator norm."
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 6.14 and Theorem 6.15"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "John K. Hunter, Measure Theory, Proposition 7.13 and Theorem 7.14"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a finite measure space, let $1 \le p < \infty$,
let $q$ be conjugate to $p$, and let $\Lambda:L^p(\mu)\to\mathbb R$ be a
bounded linear functional. Let $g \in L^1(\mu)$ be the Radon-Nikodym density
from
[[lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities]].
Then $g \in L^q(\mu)$ and
$$\|g\|_q\le\|\Lambda\|.$$
Moreover,
$$\Lambda([f])=\int fg\,d\mu\qquad([f]\in L^p(\mu)).$$

## Facts & Assumptions

**Given:** A finite measure space $(X,\mathcal A,\mu)$, an exponent $1 \le p < \infty$, its conjugate exponent $q$, a bounded linear functional $\Lambda$ on $L^p(\mu)$, and its Radon-Nikodym density $g \in L^1(\mu)$ from the previous lemma.

[L1] The density $g$ represents $\Lambda$ on every bounded measurable representative ([[lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities]]).

[L2] If $1<p<\infty$ and $q$ is conjugate to $p$, then $p(q-1)=q$ ([[def-conjugate-exponents]]).

[L3] Monotone convergence applies to increasing nonnegative measurable sequences ([[thm-monotone-convergence-for-the-integral]]).

[L4] The essential supremum is the least essential bound ([[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

[L5] If $u \in L^q(\mu)$, then the functional $\Lambda_u$ has norm $\|u\|_q$ for $q<\infty$, and also for $q=\infty$ on a finite measure space ([[prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm]]).

## Proof

**Proof technique:** For $1<p<\infty$, test the Radon-Nikodym density against bounded truncated extremizers and pass to the limit by monotone convergence. For $p=1$, level-set testing forces the essential supremum below the operator norm.

1.1 Assume first $1<p<\infty$. Choose a representative $u$ of $g$ and, for $k \ge 1$, define $$u_k:=u\mathbf 1_{\{|u|\le k\}},\qquad f_k:=|u_k|^{q-1}\operatorname{sgn} u.$$ Each $f_k$ is bounded, so [L1] gives $$\Lambda([f_k])=\int f_kg\,d\mu=\int |u_k|^q\,d\mu.$$ Also $|f_k|^p=|u_k|^q$ by [L2], hence $$\int |u_k|^q\,d\mu=|\Lambda([f_k])| \le \|\Lambda\|\|[f_k]\|_p =\|\Lambda\|\left(\int |u_k|^q\,d\mu\right)^{1/p}.$$ Therefore $$\int |u_k|^q\,d\mu\le\|\Lambda\|^q\qquad(k \ge 1).$$ [L1, L2, given, choose, construct]

1.2 Assume instead $p=1$, so $q=\infty$. Put $M:=\|\Lambda\|$ and let $u$ be a representative of $g$. Fix $t>M$ and set $E_t:=\{|u|>t\}$. If $\mu(E_t)>0$, then $E_t$ has finite measure because $\mu(X)<\infty$, and $$f_t:=\operatorname{sgn} u\,\mathbf 1_{E_t}$$ is bounded with $\|[f_t]\|_1=\mu(E_t)$. By [L1], $$|\Lambda([f_t])|=\int_{E_t}|u|\,d\mu>t\,\mu(E_t)=t\|[f_t]\|_1,$$ contradicting the bound $|\Lambda([f_t])|\le M\|[f_t]\|_1$. Hence $\mu(E_t)=0$ for every $t>M$, and [L4] gives $\|g\|_\infty\le M$. [L1, L4, given, construct]

2.1 Step 1.1 and monotone convergence prove the strict-exponent case, while step 1.2 proves the endpoint case. Indeed, from step 1.1 the sequence $|u_k|^q$ increases pointwise to $|u|^q$, so [L3] gives $$\int |u|^q\,d\mu=\lim_{k\to\infty}\int |u_k|^q\,d\mu\le\|\Lambda\|^q.$$ Thus in every case $g \in L^q(\mu)$ and $\|g\|_q\le\|\Lambda\|$. [L3, step 1.1, step 1.2]

3.1 Let $[f] \in L^p(\mu)$ and choose a representative $w$. For each $n \ge 1$, set $$w_n:=w\mathbf 1_{\{|w|\le n\}}.$$ Then each $w_n$ is bounded and $|w_n-w|^p \le |w|^p$ with $|w_n-w|^p \to 0$ pointwise, so dominated convergence gives $$\|[w_n]-[f]\|_p^p=\int |w_n-w|^p\,d\mu\longrightarrow0.$$ By step 2.1, $g \in L^q(\mu)$, so [L5] shows that $I_g([h]):=\int hg\,d\mu$ is a bounded linear functional on $L^p(\mu)$. Since [L1] gives $\Lambda([w_n])=I_g([w_n])$ for every $n$, continuity of both functionals yields $$\Lambda([f])=I_g([f])=\int wg\,d\mu.$$ Thus the Radon-Nikodym density represents $\Lambda$ on all of $L^p(\mu)$. [L1, L5, step 1.2, step 2.1, given, construct] ∎
