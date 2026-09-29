---
id: lem-antisymmetrizer-image-on-its-tabloid-module-is-one-dimensional
kind: lemma
title: The antisymmetrizer image in its own tabloid module is one-dimensional
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-column-antisymmetrizer-polytabloid-and-specht-module, lem-column-collision-causes-antisymmetrizer-cancellation, lem-basic-combinatorial-lemma-for-tableaux, def-young-subgroup-tabloid-and-permutation-module, thm-sign-is-a-homomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups - Lemma 2.14 and proof, Definition 3.8, Lemma 3.11(b), and Theorem 4.1(b), printed pp. 9-10, 12-13, 15"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
---

## Statement

For every $n\ge0$, partition $\lambda\vdash n$, and $\lambda$-tableau $t$,
the image of the column antisymmetrizer on the tabloid module is exactly the
nonzero line
$$
\kappa_t M^\lambda=\mathbb C e_t,\qquad e_t\ne0.
$$

## Facts & Assumptions

**Given:** $n\ge0$, $\lambda\vdash n$, and a $\lambda$-tableau $t$.

[F1] The column antisymmetrizer is
$\kappa_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\gamma$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F8] The polytabloid is $e_t=\kappa_t\cdot\{t\}$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F2] The coefficient of $\{t\}$ in $e_t$ is $1$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F3] The $\lambda$-tabloids form a basis of $M^\lambda$, and its $S_n$ action
extends linearly from the left action on tabloids
([[def-young-subgroup-tabloid-and-permutation-module]]).

[F4] The stabilizer of the tabloid $\{s\}$ is $R_s$
([[def-young-subgroup-tabloid-and-permutation-module]]).

[F5] If a row of a tabloid contains two entries from one column of $t$, then
$\kappa_t$ sends that tabloid to zero
([[lem-column-collision-causes-antisymmetrizer-cancellation]]).

[F6] If every row of a tableau $s$ meets every column of $t$ in at most one
entry and $s,t$ have shape $\lambda$, then there are
$\rho\in R_s$ and $\gamma\in C_t$ with $\rho\cdot s=\gamma\cdot t$
([[lem-basic-combinatorial-lemma-for-tableaux]]).

[F7] The sign function is a group homomorphism to $\{+1,-1\}$
([[thm-sign-is-a-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 The coefficient of $\{t\}$ in $e_t$ is $1$ by [F2], so $e_t\ne0$. [given, F2]

1.2 Let $\{s\}$ be any basis tabloid. If $\kappa_t\cdot\{s\}=0$, its image already lies in $\mathbb C e_t$. Otherwise, [F5] implies that each row of $s$ meets each column of $t$ in at most one entry, and [F6] gives $\rho\in R_s$ and $\gamma\in C_t$ with $\rho\cdot s=\gamma\cdot t$; since $\rho$ stabilizes $\{s\}$ by [F4], this yields $\{s\}=\gamma\cdot\{t\}$. [given, F4, F5, F6]

2.1 For any $\gamma\in C_t$, reindex the defining sum by $d=c\gamma$ to obtain $\kappa_t\gamma=\sum_{c\in C_t}\operatorname{sgn}(c)c\gamma=\sum_{d\in C_t}\operatorname{sgn}(d\gamma^{-1})d=\operatorname{sgn}(\gamma)\kappa_t$, using [F1,F7] and $\operatorname{sgn}(\gamma^{-1})=\operatorname{sgn}(\gamma)$; applying this to the tabloid equality of step 1.2 gives $\kappa_t\cdot\{s\}=\operatorname{sgn}(\gamma)e_t$ in its nonzero case. Thus every basis tabloid maps into $\mathbb C e_t$, and linearity with [F3] gives $\kappa_tM^\lambda\subseteq\mathbb C e_t$. [step 1.2, F1, F3, F7, algebra]

3.1 Since $e_t=\kappa_t\cdot\{t\}$ by [F8], the vector $e_t$ belongs to the image $\kappa_tM^\lambda$; step 1.1 makes its span nonzero, so step 2.1 gives $\kappa_tM^\lambda=\mathbb C e_t$ and proves the statement. [step 1.1, step 2.1, F8]

∎
