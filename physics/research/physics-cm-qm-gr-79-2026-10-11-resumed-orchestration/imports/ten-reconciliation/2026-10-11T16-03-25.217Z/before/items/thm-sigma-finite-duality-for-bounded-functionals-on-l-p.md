---
id: thm-sigma-finite-duality-for-bounded-functionals-on-l-p
kind: theorem
title: "On a sigma-finite measure space, every bounded linear functional on $L^p$ is integration against a unique $L^q$ function"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-semifinite-measures-make-l-q-representatives-unique, lem-bounded-functionals-on-finite-l-p-define-finite-signed-or-complex-measures, lem-functional-induced-measures-are-absolutely-continuous-with-respect-to-mu, lem-finite-measure-bounded-l-p-functionals-are-integration-against-rn-densities, lem-rn-densities-of-bounded-l-p-functionals-belong-to-l-q, def-finite-sigma-finite-and-semifinite-measures, thm-dominated-convergence, thm-monotone-convergence-for-the-integral, prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm]
proof_strategy: "Restrict the functional to an increasing finite-measure exhaustion, obtain local $L^q$ densities, glue them by uniqueness on overlaps, and pass to the limit using continuity on $L^p$."
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 6.15"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 15.11"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "John K. Hunter, Measure Theory, Theorem 7.14"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a sigma-finite measure space, let
$1 \le p < \infty$, and let $q$ be conjugate to $p$. For every bounded linear
functional $\Lambda:L^p(\mu)\to\mathbb R$ there exists a unique
$g \in L^q(\mu)$ such that
$$\Lambda([f])=\int fg\,d\mu\qquad([f]\in L^p(\mu)).$$
Moreover,
$$\|\Lambda\|=\|g\|_q.$$

## Facts & Assumptions

**Given:** A sigma-finite measure space $(X,\mathcal A,\mu)$, an exponent $1 \le p < \infty$, its conjugate exponent $q$, and a bounded linear functional $\Lambda$ on $L^p(\mu)$.

[L1] On a finite measure space, a bounded $L^p$ functional has an $L^q$ Radon-Nikodym density representing it on all of $L^p$ ([[lem-rn-densities-of-bounded-l-p-functionals-belong-to-l-q]]).

[L2] On a semifinite measure space, representing $L^q$ classes are unique ([[prop-semifinite-measures-make-l-q-representatives-unique]]).

[L3] Sigma-finiteness means there is an increasing exhaustion by measurable finite-measure sets, and every sigma-finite measure is semifinite ([[def-finite-sigma-finite-and-semifinite-measures]]).

[L4] For $u \in L^q(\mu)$, the pairing functional $\Lambda_u$ has norm $\|u\|_q$ in the ranges treated here ([[prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm]]).

[L5] Dominated convergence applies to integrable majorants ([[thm-dominated-convergence]]).

[L6] Monotone convergence applies to increasing nonnegative measurable sequences ([[thm-monotone-convergence-for-the-integral]]).

## Proof

**Proof technique:** Restrict the functional to an increasing finite-measure exhaustion, obtain local $L^q$ densities, glue them by uniqueness on overlaps, and pass to the limit using continuity on $L^p$.

1.1 By [L3], choose an increasing sequence $(X_n)$ of measurable sets with [L1, L3, given, choose, construct] $X=\bigcup_n X_n$ and $\mu(X_n)<\infty$ for every $n$. For each $n$, let $\Lambda_n$ be the bounded functional on $L^p(\mu|_{X_n})$ defined by $$\Lambda_n([u]):=\Lambda([\widetilde u]),$$ where $\widetilde u$ is the extension of $u$ by $0$ outside $X_n$. Then $\|\Lambda_n\| \le \|\Lambda\|$. Applying [L1] on $X_n$, choose $g_n \in L^q(\mu|_{X_n})$ such that $$\Lambda_n([u])=\int_{X_n} ug_n\,d\mu\qquad([u]\in L^p(\mu|_{X_n}))$$ and $\|g_n\|_q \le \|\Lambda\|$. [L1, L3, given, choose, construct]

2.1 If $m>n$, then both $g_n$ and $g_m|_{X_n}$ represent the same functional [L2, L3, step 1.1] $\Lambda_n$ on the finite measure space $X_n$. Since finite measure implies semifinite, [L2] gives $$g_m=g_n\quad\mu\text{-almost everywhere on }X_n.$$ Therefore the local densities are compatible on overlaps. [L2, L3, step 1.1]

3.1 Define a measurable function $g$ by setting $g=g_n$ almost everywhere on [L6, step 1.1, step 2.1, algebra] each $X_n$. This is consistent by step 2.1. If $q<\infty$, then $$\int_{X_n}|g|^q\,d\mu=\int_{X_n}|g_n|^q\,d\mu\le\|\Lambda\|^q,$$ so monotone convergence gives $$\int_X |g|^q\,d\mu=\lim_{n\to\infty}\int_{X_n}|g|^q\,d\mu\le\|\Lambda\|^q.$$ If $q=\infty$, then for each $n$ there is a null set $N_n \subseteq X_n$ with $|g_n| \le \|\Lambda\|$ on $X_n \setminus N_n$; the union $N:=\bigcup_n N_n$ is null, and $|g| \le \|\Lambda\|$ on $X \setminus N$. Hence in every case $g \in L^q(\mu)$ and $\|g\|_q \le \|\Lambda\|$. [L6, step 1.1, step 2.1, algebra]

4.1 Let $[f] \in L^p(\mu)$ and choose a representative $w$. [L4, L5, step 1.1, step 3.1, given, construct] Set $w_n:=w\mathbf 1_{X_n}$. Then $$|w_n-w|^p=|w|^p\mathbf 1_{X \setminus X_n}\le |w|^p,$$ and the right-hand side is integrable. Since $w_n \to w$ pointwise, [L5] gives $$\|[w_n]-[f]\|_p^p=\int |w_n-w|^p\,d\mu\longrightarrow0.$$ For each $n$, step 1.1 gives $$\Lambda([w_n])=\Lambda_n([w|_{X_n}])=\int_{X_n} wg_n\,d\mu=\int w_ng\,d\mu.$$ By step 3.1 and [L4], the map $I_g([h])=\int hg\,d\mu$ is a bounded linear functional on $L^p(\mu)$. Taking limits in the last display yields $$\Lambda([f])=I_g([f])=\int wg\,d\mu.$$ So $g$ represents $\Lambda$ on all of $L^p(\mu)$. [L4, L5, step 1.1, step 3.1, given, construct]

5.1 Since $\Lambda=\Lambda_g$, [L2, L3, L4, step 4.1] [L4] gives $$\|\Lambda\|=\|\Lambda_g\|=\|g\|_q.$$ If $h \in L^q(\mu)$ also represents $\Lambda$, then sigma-finite implies semifinite by [L3], so [L2] gives $h=g$ in $L^q(\mu)$. Thus the representing class is unique. [L2, L3, L4, step 4.1] ∎
