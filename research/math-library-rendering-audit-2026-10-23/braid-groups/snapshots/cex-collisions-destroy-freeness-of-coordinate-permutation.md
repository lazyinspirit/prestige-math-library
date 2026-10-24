---
id: cex-collisions-destroy-freeness-of-coordinate-permutation
kind: counterexample
title: "Collisions destroy freeness of the coordinate permutation action"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [prop-the-symmetric-group-acts-freely-on-ordered-configurations,
       def-ordered-configuration-space,
       def-finite-symmetric-group-and-permutation-notation,
       lem-symmetric-group-is-a-group, def-free-group-action,
       def-group-action, def-product-topology]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Juan González-Meneses, Basic results on braid groups, §§1.1–1.3 and 2.1, printed pp. 3–6, 11–13"
      url: "https://arxiv.org/pdf/1010.0321"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Statement refuted

The following over-generalisation is false. Let $n\ge2$, let $X$ be a nonempty
topological space, and let $S_n$ act on the full product $X^n=\prod_{k<n}X$
([[def-product-topology]]) by the coordinate permutation formula

$$(\sigma\cdot x)_i:=x_{\sigma^{-1}(i-1)+1}\qquad(1\le i\le n),$$

the formula by which $S_n$ acts on the collision-free subspace
$F_n(X)\subseteq X^n$ ([[prop-the-symmetric-group-acts-freely-on-ordered-configurations]]).
**Refuted claim:** this action on $X^n$ is free
([[def-free-group-action]]). It is not: for $n\ge2$ and every nonempty $X$ some
nonidentity permutation fixes a tuple whose coordinates are not pairwise
distinct, whereas the restricted action on $F_n(X)$ is free precisely because
collisions have been removed. No claim is made here about the boundary cases
$n\le1$, where $S_n$ is trivial and the action is free for trivial reasons.

## Facts & Assumptions

**Given:** A natural number $n\ge2$, a nonempty topological space $X$, the product $X^n$ with the product topology, and an element $x\in X$.

[F1] For $n\in\mathbb N$ the product $X^n=\prod_{k<n}X$ has as its points the functions $n\to X$, displayed as tuples $(x_1,\dots,x_n)$ where the label $i$ names the coordinate of index $i-1$; the collision-free subspace is $F_n(X)=\{(x_1,\dots,x_n)\in X^n:x_i\neq x_j\text{ for }i\neq j\}$, and for $X^n$ no distinctness is required ([[def-product-topology]], [[def-ordered-configuration-space]]).

[F2] $S_n=\operatorname{Sym}(n)$ is a group under composition with $(\sigma\tau)(k)=\sigma(\tau(k))$ for $k\in n$ and $(\sigma\tau)^{-1}=\tau^{-1}\sigma^{-1}$, and the formula $(\sigma\cdot x)_i=x_{\sigma^{-1}(i-1)+1}$ defines a continuous free left action of $S_n$ on $F_n(X)$; in particular $\sigma\cdot x=x$ for $x\in F_n(X)$ forces $\sigma=\operatorname{id}$ ([[lem-symmetric-group-is-a-group]], [[def-finite-symmetric-group-and-permutation-notation]], [[def-group-action]], [[def-free-group-action]], [[prop-the-symmetric-group-acts-freely-on-ordered-configurations]]).

[F3] For $n\ge2$ the symmetric group $S_n$ contains nonidentity elements: the transposition $\tau$ defined by $\tau(0)=1$, $\tau(1)=0$ and $\tau(k)=k$ for $k\in n\setminus\{0,1\}$ satisfies $\tau\neq\operatorname{id}$, and cycle notation records it as $(0\,1)$ ([[def-finite-symmetric-group-and-permutation-notation]], [[lem-symmetric-group-is-a-group]]).

[F4] A left action is free when $g\cdot x=x$ implies $g=e$; a single tuple with a nonidentity stabiliser therefore refutes freeness ([[def-free-group-action]], [[def-group-action]]). Nonemptiness of $X$ means exactly that some element $x\in X$ exists, and exhibiting one element requires no choice principle.

[F5] Two elements of a product are equal exactly when they agree in every coordinate; the constant tuple $(x,\dots,x)\in X^n$ has all its coordinates equal to $x$ ([[def-product-topology]]).


## Refutation

**Proof technique:** direct.

1.1 *The formula defines a left action on the whole product.* For $\sigma\in S_n$ and $y\in X^n$ the tuple $\sigma\cdot y$ with $(\sigma\cdot y)_i=y_{\sigma^{-1}(i-1)+1}$ is well defined in $X^n$, because $\sigma^{-1}(i-1)+1$ is a label for every $i$ by [F2]; and the formal verification of $\operatorname{id}\cdot y=y$ and $(\sigma\tau)\cdot y=\sigma\cdot(\tau\cdot y)$ for $\sigma,\tau\in S_n$ is the reindexing computation of [F2], which never uses the distinctness of coordinates, so it applies to all of $X^n$. Hence [F3] and [F4] apply to this action. [F1, F2]

1.2 *The collision witness.* Fix an element $x\in X$, which exists by [F4], and put $a:=(x,x,\dots,x)\in X^n$, the tuple with $a_i=x$ for every label $i$; its coordinates collide, and $a\notin F_n(X)$ when $n\ge2$ because $a_1=a_2$. So $a$ is a point of $X^n$ to which the freeness conclusion of [F2] does not apply. [F1, F4, F5]

2.1 *The transposition fixes $a$.* By step 1.1 the tuple $\tau\cdot a\in X^n$ is defined, and for every label $i$ one has $(\tau\cdot a)_i=a_{\tau^{-1}(i-1)+1}=x=a_i$, because all coordinates of $a$ equal $x$; hence $\tau\cdot a=a$ by [F5]. [step 1.1, F2, F5]

3.1 *Freeness fails.* The transposition $\tau$ is not the identity by [F3], yet it fixes the point $a$ of $X^n$ by step 2.1. Therefore the action of $S_n$ on $X^n$ is not free, in the sense of the definition in [F4]. [step 2.1, F3, F4]

4.1 *Conclusion.* The claim stated in the refuted statement is false for every $n\ge2$ and every nonempty $X$, with the explicit witness $a=(x,\dots,x)$ fixed by the transposition $\tau=(0\,1)$. The contrast with [F2] is exactly the removal of the collision diagonals: freeness of the coordinate permutation action is a property of $F_n(X)$, not of the full product $X^n$. [step 1.2, step 3.1, F2] ∎
