---
id: thm-standard-polytabloid-basis
kind: theorem
title: Standard polytabloids form a basis of a complex Specht module
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
landmark: false
deps:
  - def-young-tableau-standard-tableau-and-shape
  - def-young-subgroup-tabloid-and-permutation-module
  - def-tabloid-and-column-orders-for-specht-straightening
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - lem-leading-tabloid-coefficient-of-a-standard-polytabloid
  - lem-garnir-straightening-of-polytabloids
  - def-linear-basis
  - def-linear-combination-and-span
  - lem-span-is-the-set-of-linear-combinations
  - def-dimension
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups, Theorem 4.11 and proof, Remark 4.13, printed pp. 16-17; the local spanning proof uses Garnir straightening instead of Chan's later RSK count"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
    - title: "Mark Wildon, Representation Theory of the Symmetric Group, Theorem 6.2, Proposition 6.5, Theorem 6.8, Definition 6.9 and Lemma 6.10 with proof, printed pp. 26-31"
      url: "https://www.ma.rhul.ac.uk/~uvah099/Maths/Sym/SymGroup2014.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

For every $n\ge0$ and partition $\lambda\vdash n$, the family
$$\{e_t:t\text{ is a standard }\lambda\text{-tableau}\}$$
is a $\mathbb C$-basis of $S^\lambda$. In particular,
$$\dim_{\mathbb C}S^\lambda=f^\lambda,$$
including $\dim_{\mathbb C}S^\varnothing=1$.

## Facts & Assumptions

**Given:** $n\ge0$ and a partition $\lambda\vdash n$.

[F1] A $\lambda$-tableau is a bijection from its finite Young diagram to
$\{1,\ldots,n\}$ ([[def-young-tableau-standard-tableau-and-shape]]).

[F2] A standard tableau has entries strictly increasing along rows and down
columns ([[def-young-tableau-standard-tableau-and-shape]]).

[F3] The empty tableau is the unique standard tableau of shape
$\varnothing$ ([[def-young-tableau-standard-tableau-and-shape]]).

[F4] $f^\lambda$ is the number of standard $\lambda$-tableaux
([[def-young-tableau-standard-tableau-and-shape]]).

[F5] A canonical standard row-filled $\lambda$-tableau $t_0$ exists; for
$\lambda=\varnothing$ it is the empty tableau
([[def-young-subgroup-tabloid-and-permutation-module]]).

[F6] Two tabloids are equal exactly when their corresponding tableaux have the
same row sets ([[def-young-subgroup-tabloid-and-permutation-module]]).

[F7] The tabloid order is a finite strict total order
([[def-tabloid-and-column-orders-for-specht-straightening]]).

[F8] $e_t\in M^\lambda$ for every $\lambda$-tableau $t$, and
$S^\lambda=\operatorname{span}_{\mathbb C}\{e_t:t\text{ is a }\lambda\text{-tableau}\};$
for the empty shape, $e_{t_0}=\{\varnothing\}$ and $S^\varnothing=\mathbb C$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F9] For a column-standard tableau, the coefficient of its own tabloid in its
polytabloid is $1$ and every other tabloid in it is strictly lower; the
standard polytabloids are linearly independent
([[lem-leading-tabloid-coefficient-of-a-standard-polytabloid]]).

[F10] Every polytabloid is a finite complex linear combination of standard
polytabloids ([[lem-garnir-straightening-of-polytabloids]]).

[F11] The span of a subset of a vector space is exactly the set of finite
linear combinations of its elements
([[lem-span-is-the-set-of-linear-combinations]]).

[F12] A span is a linear subspace containing its generators
([[def-linear-combination-and-span]]).

[F13] A span is contained in every linear subspace containing its generators
([[def-linear-combination-and-span]]).

[F14] A basis is a linearly independent subset whose span is the whole vector
space ([[def-linear-basis]]).

[F15] The dimension of a vector space with a finite basis is the unique natural
number equinumerous with that basis ([[def-dimension]]).

No form of the Axiom of Choice (AC) is used. The tableau set is finite, the
row-filled tableau is canonical, and Garnir straightening gives finite sums.

## Proof

**Proof technique:** direct.

1.1 Let $E_\lambda=\{e_t:t\text{ is a standard }\lambda\text{-tableau}\}$. The canonical tableau $t_0$ from [F5] makes the indexing set nonempty, and [F8] gives $E_\lambda\subseteq S^\lambda$. [given, F5, F8]

1.2 The family $(e_t)_{t\text{ standard}}$ is linearly independent by [F9]. The increasing rows [F2] and the row-set characterization [F6] show distinct standard tableaux have distinct tabloids; by the total order [F7], one of $\{t\},\{u\}$ is greater, with coefficient $1$ in its own polytabloid by [F9] and coefficient $0$ in the other, whose terms are below its smaller leading tabloid. Thus $t\mapsto e_t$ is injective. [given, F2, F6, F7, F9, algebra]

2.1 Put $W=\operatorname{span}_{\mathbb C}(E_\lambda)$. Garnir straightening [F10] expresses every $e_u$ as a finite complex linear combination of members of $E_\lambda$, so [F11] gives $e_u\in W$. Since $W$ is a subspace [F12] containing all these generators, [F13] and [F8] give $S^\lambda\subseteq W$; conversely, step 1.1 gives $E_\lambda\subseteq S^\lambda$, so [F13] gives $W\subseteq S^\lambda$. Hence $W=S^\lambda$. [given, F8, F10, F11, F12, F13, step 1.1]

3.1 By [F14], steps 1.2 and 2.1 show that $E_\lambda$ is a basis of $S^\lambda$. [given, F14, step 1.2, step 2.1]

4.1 By [F1], standard tableaux form a finite set, and by [F4] it has $f^\lambda$ members; step 1.2 makes $t\mapsto e_t$ injective, so $|E_\lambda|=f^\lambda$. Thus [F15] and step 3.1 give $\dim_{\mathbb C}S^\lambda=f^\lambda$. If $\lambda=\varnothing$, [F3] gives the unique empty standard tableau and [F8] gives its nonzero polytabloid and $S^\varnothing=\mathbb C$, hence the same singleton-basis argument gives $\dim_{\mathbb C}S^\varnothing=1$. All sums in [F10] are finite; no RSK identity or axiom of choice is used. [given, F1, F3, F4, F8, F10, F15, step 1.2, step 3.1] ∎
