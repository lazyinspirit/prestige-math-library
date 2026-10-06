---
id: cex-strong-continuity-does-not-imply-operator-norm-continuity
kind: counterexample
title: "Strong continuity does not imply operator-norm continuity"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps:
  - def-countable-choice
  - ex-right-translation-semigroup-on-lp
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-operator-norm
  - def-strongly-continuous-semigroup
  - def-translation-of-a-function-on-rn
  - def-bounded-linear-operator
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter I Section 5, the translation example and the strong-versus-norm discussion, printed pp. 39-41"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.3, Example 11.2, printed pp. 256-258"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement refuted

Assume Countable Choice ([[def-countable-choice]]). Let $1\le p<\infty$ and let $(T(t))_{t\ge0}$ be the right-translation semigroup on $L^p(\mathbb R)$ ([[ex-right-translation-semigroup-on-lp]]), which is strongly continuous. Then $T$ is not continuous at $0$ in the operator norm: $\|T(t)-I\|\ge2^{1/p}$ for every $t>0$, so $\|T(t)-I\|\not\to0$ as $t\downarrow0$. Hence strong continuity of a $C_0$-semigroup is strictly weaker than norm continuity of $t\mapsto T(t)$.

**Refuted claim.** For a strongly continuous semigroup on a Banach space, the map $t\mapsto T(t)$ is continuous at $0$ in the operator norm. The right-translation semigroup on $L^p(\mathbb R)$, $1\le p<\infty$, is strongly continuous, but the distance $\|T(t)-I\|$ stays bounded below by $2^{1/p}$ for all $t>0$.

## Facts & Assumptions

**Given:** Countable Choice; $1\le p<\infty$; the right-translation semigroup $(T(t))_{t\ge0}$ on $L^p(\mathbb R)$ with $(T(t)g)(s)=g(s+t)$, which is a strongly continuous semigroup of isometries ([[ex-right-translation-semigroup-on-lp]], [[def-strongly-continuous-semigroup]]); for $t>0$ the function $f_t:=t^{-1/p}\mathbf 1_{(0,t)}$.

[F1] $(T(t)g)(s)=g(s+t)$ for $g\in L^p(\mathbb R)$, so $T(t)$ acts by translation of the argument; translation preserves almost-everywhere classes ([[ex-right-translation-semigroup-on-lp]], [[def-translation-of-a-function-on-rn]]).

[F2] For $1\le p<\infty$ the class norm is $\|h\|_p=\bigl(\int_{\mathbb R}|h(s)|^p\,ds\bigr)^{1/p}$, and indicators of sets of finite measure have the $p$-th power of the norm equal to the measure of the set; null sets are invisible ([[def-l-p-space-as-a-quotient-by-null-functions]]).

[F3] The operator norm is the supremum of $\|Ah\|$ over the unit vectors $h$ ([[def-operator-norm]], [[def-bounded-linear-operator]]).



## Counterexample

**Proof technique:** direct computation with the unit vector $f_t=t^{-1/p}\mathbf 1_{(0,t)}$.

1.1 For every $t>0$ the vector $f_t$ has norm $\|f_t\|_p^p=\int_0^tt^{-1}\,ds=1$, so $f_t$ is a unit vector of $L^p(\mathbb R)$. [F2]

2.1 $T(t)f_t=t^{-1/p}\mathbf 1_{(-t,0)}$: indeed $(T(t)f_t)(s)=f_t(s+t)=t^{-1/p}\mathbf 1_{(0,t)}(s+t)$, and $s+t\in(0,t)$ exactly when $s\in(-t,0)$. [F1, step 1.1]

3.1 The two indicators $\mathbf 1_{(-t,0)}$ and $\mathbf 1_{(0,t)}$ are disjoint up to the null set $\{0\}$, so $\|T(t)f_t-f_t\|_p^p=t^{-1}\int_{\mathbb R}\bigl|\mathbf 1_{(-t,0)}-\mathbf 1_{(0,t)}\bigr|^pds=t^{-1}\bigl(\lambda((-t,0))+\lambda((0,t))\bigr)=t^{-1}(t+t)=2$; hence $\|T(t)f_t-f_t\|_p=2^{1/p}$. [F2, step 2.1]

4.1 Since $f_t$ is a unit vector, [F3] and [step 3.1] give $\|T(t)-I\|\ge\|T(t)f_t-f_t\|_p=2^{1/p}$ for every $t>0$, so $\|T(t)-I\|$ does not tend to $0$ as $t\downarrow0$ and the semigroup is not continuous at $0$ in the operator norm, although it is strongly continuous; hence strong continuity does not imply operator-norm continuity. [F3, step 1.1, step 3.1] ∎
