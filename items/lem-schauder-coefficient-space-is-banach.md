---
id: lem-schauder-coefficient-space-is-banach
kind: lemma
title: "The Schauder coefficient space is Banach"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-schauder-basis-and-coordinate-functionals, thm-coordinate-map-for-a-finite-dimensional-normed-space]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Thomas Schlumprecht, Course Notes in Functional Analysis, Math 655"
      url: "https://people.tamu.edu/~t-schlumprecht/course_notes_math655_23c.pdf"
      locator: "Proposition 3.1.3 and its proof, printed pp.64-65; reorganized here to avoid assuming coordinate continuity on X"
pipeline_run: phase-2-next-18
---

## Statement

Let $(e_n)_{n\ge1}$ be a Schauder basis of the Banach space $X$. Let $E$ be
the vector space of scalar families
$a:\mathbb N_{\ge1}\to\mathbb K$, written $(a_n)_{n\ge1}$, for which
$\sum_{n=1}^{\infty}a_ne_n$ converges, and set

$$\|a\|_E:=\sup_{N\ge0}\left\|\sum_{n=1}^N a_ne_n\right\|.$$

Then $E$ is a Banach space, and the summation map

$$S:E\longrightarrow X,\qquad Sa=\sum_{n=1}^{\infty}a_ne_n,$$

is a bounded linear bijection with $\|S\|\le1$.

## Facts & Assumptions

[L1] Every finite ordered basis has continuous coordinate maps
([[thm-coordinate-map-for-a-finite-dimensional-normed-space]]).

[L2] Every $x\in X$ has a unique norm-convergent expansion in $(e_n)$
([[def-schauder-basis-and-coordinate-functionals]]).

## Proof

**Proof technique:** direct.

**Given:** The objects and hypotheses in the Statement.

1.1 The displayed formula is a norm on $E$: definiteness follows because its [given, L2] value zero forces every partial sum, hence every coefficient since $e_n\ne0$, to vanish. Linearity of $E$ and the remaining norm axioms follow termwise from the norm axioms in $X$. [L2, algebra]

2.1 Let $(a^{(k)})$ be Cauchy in $E$. For fixed $n$, apply the $n$th coordinate [given, L1, step 1.1] map on $\operatorname{span}\{e_1,\ldots,e_n\}$ to $\sum_{j\le n}(a_j^{(k)}-a_j^{(\ell)})e_j$. By [L1], $(a_n^{(k)})_k$ is Cauchy, so it has a scalar limit $a_n$. [L1, algebra]

3.1 Given $\varepsilon>0$, choose $k_0$ so $\|a^{(k)}-a^{(\ell)}\|_E<\varepsilon$ for $k,\ell\ge k_0$. Fix $k\ge k_0$ and $N$, and let $\ell\to\infty$ in the finite sum. Coordinatewise convergence and continuity of finite sums give [given, step 2.1]

$$\left\|\sum_{n=1}^N(a_n^{(k)}-a_n)e_n\right\|\le\varepsilon.$$

The estimate is uniform in $N$. [step 2.1, Cauchy, finite limit]

4.1 Fix $k\ge k_0$. Since $a^{(k)}\in E$, its series has Cauchy tails. For [given, step 3.1] $M>N$, step 3.1 applied to the two partial sums bounds the corresponding finite block for $a-a^{(k)}$ by $2\varepsilon$. Hence the partial sums for $a$ are Cauchy in the Banach space $X$, so $a\in E$. Step 3.1 then yields $\|a^{(k)}-a\|_E\le\varepsilon$; thus $E$ is complete. [step 3.1, algebra]

5.1 For $a\in E$, norm continuity gives [given, L2, step 4.1] $\|Sa\|=\lim_N\|\sum_{n\le N}a_ne_n\|\le\|a\|_E$, so $S$ is bounded. Surjectivity and injectivity are respectively existence and uniqueness in [L2]. [L2, algebra] ∎