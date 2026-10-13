---
id: prop-core-quotient-size-and-weight-formula
kind: proposition
title: "The core-quotient size formula defines the weight"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [thm-e-core-is-independent-of-the-rim-hook-removal-order, thm-e-quotient-controls-hooks-divisible-by-e, def-e-core-e-quotient-and-e-weight, def-hook-arm-leg-and-hook-length, def-removable-and-addable-nodes-of-a-partition]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
proof_strategy: induction
sources:
  scraped: []
  references:
    - title: "Stacey Law (lecturer), notes by Leonard Tomczak, Representation Theory of Symmetric Groups, Cambridge Part III Michaelmas 2022 lecture notes, complete 76-page PDF"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/RepSn_Notes.pdf"
      locator: "Section 4.1, printed pp. 62-63: Proposition 4.12 (i)-(iii) with its proof"
---

## Statement

Let $e\ge2$ and let $\lambda\vdash n$ with $e$-core $C_e(\lambda)$ and
$e$-weight $w_e(\lambda)=|Q_e(\lambda)|$
([[def-e-core-e-quotient-and-e-weight]]). Then
$$n=|\lambda|=|C_e(\lambda)|+e\,w_e(\lambda),$$
so $w_e(\lambda)=(n-|C_e(\lambda)|)/e\in\mathbb N_0$. Equivalently every
sequence of removals of removable border strips of size $e$ from $\lambda$ down
to its $e$-core
([[thm-e-core-is-independent-of-the-rim-hook-removal-order]]) has exactly
$w_e(\lambda)$ steps, and $w_e(\lambda)=|Q_e(\lambda)|$ equals both the number
of hooks of the multipartition $Q_e(\lambda)$ and, by the bijection of
[[thm-e-quotient-controls-hooks-divisible-by-e]], the number of hooks of
$\lambda$ of length divisible by $e$.

Throughout the proof, $\lambda\setminus H$ means deletion of the rim strip
corresponding to the node hook $H$, as in
[[thm-e-quotient-controls-hooks-divisible-by-e]].

No choice principle is used.

## Facts & Assumptions

**Given:** An integer $e\ge2$ and a partition $\lambda\vdash n$ with $e$-quotient $Q_e(\lambda)=(\lambda^{(0)},\dots,\lambda^{(e-1)})$, $e$-core $C_e(\lambda)$ and $e$-weight $w_e(\lambda)=\sum_i|\lambda^{(i)}|$ ([[def-e-core-e-quotient-and-e-weight]]).

[F1] $C_e(\lambda)$ is well defined and is the terminal partition of every maximal sequence of removals of removable border strips of size $e$ from $\lambda$; each removed strip has size exactly $e$ and the terminal partition contains no hook of length $e$ ([[thm-e-core-is-independent-of-the-rim-hook-removal-order]]).

[F2] There is a bijection $f$ from the hooks of $\lambda$ of $e$-divisible length onto the hooks of the multipartition $Q_e(\lambda)$ with $|H|=e\,|f(H)|$ and $Q_e(\lambda\setminus H)=Q_e(\lambda)\setminus f(H)$, where the latter removes the hook $f(H)$ from its component ([[thm-e-quotient-controls-hooks-divisible-by-e]]).

[F3] For a partition $\mu$, the number of hooks of $\mu$ equals $|\mu|$, since each box is the anchor of exactly one hook of $[\mu]$ ([[def-hook-arm-leg-and-hook-length]]); a nonempty partition has a removable box, that is, a hook of size $1$ ([[def-removable-and-addable-nodes-of-a-partition]]); and a hook of the multipartition $Q_e(\lambda)$ has the size of the corresponding hook of the component $\lambda^{(i)}$ ([[def-e-core-e-quotient-and-e-weight]], [[thm-e-quotient-controls-hooks-divisible-by-e]]).

## Proof


**Proof technique:** induction on $w_e(\lambda)$.

1.1 We first record the counting consequences of the quotient theorem. A hook of $\lambda$ has $e$-divisible length exactly when it is the preimage under the bijection $f$ of [F2] of a hook of $Q_e(\lambda)$, and the number of hooks of a partition equals its size by [F3]; hence the number of $e$-divisible hooks of $\lambda$ equals the total size $w_e(\lambda)=\sum_i|\lambda^{(i)}|$ of $Q_e(\lambda)$. In particular $Q_e(\lambda)$ has a hook if and only if $w_e(\lambda)>0$, and then some hook has size $1$ by [F3], so $\lambda$ has a hook of length $e$. [F2, F3]

2.1 Base case: if $w_e(\lambda)=0$ then $Q_e(\lambda)$ has no hook by step 1.1, so $\lambda$ has no hook of $e$-divisible length, hence no hook of length $e$; by [F1] the terminal partition of the empty removal sequence is $\lambda$ itself, that is, $C_e(\lambda)=\lambda$, and the removal sequence has $0=w_e(\lambda)$ steps. [F1, base, step 1.1]

2.2 Induction step: let $w_e(\lambda)>0$. By step 1.1 there is a hook $H$ of $\lambda$ of length exactly $e$, a removable border strip of size $e$ by [F1]. By the removal identity of [F2], $$Q_e(\lambda\setminus H)=Q_e(\lambda)\setminus f(H),$$ and since $f(H)$ is a hook of a component of $Q_e(\lambda)$ of size $|H|/e=1$, the right-hand side is the multipartition obtained by deleting one box, so by [F3] its size is $w_e(\lambda)-1$. Moreover $C_e(\lambda\setminus H)=C_e(\lambda)$: a maximal sequence from $\lambda\setminus H$ is the tail of a maximal sequence from $\lambda$ beginning with $H$, and all maximal sequences from $\lambda$ end at $C_e(\lambda)$ by [F1]. [F1, F2, F3, step 1.1]

3.1 By step 2.2 we may apply the induction hypothesis to $\lambda\setminus H$, whose weight is $w_e(\lambda)-1<w_e(\lambda)$: every maximal sequence of $e$-strip removals from $\lambda\setminus H$ has $w_e(\lambda)-1$ steps and $$|\lambda|-e=|\lambda\setminus H|=|C_e(\lambda\setminus H)|+e\,(w_e(\lambda)-1)=|C_e(\lambda)|+e\,w_e(\lambda)-e,$$ so $|\lambda|=|C_e(\lambda)|+e\,w_e(\lambda)$; and appending the single step $H$ shows that every maximal sequence from $\lambda$ has exactly $w_e(\lambda)$ steps, because $H$ was an arbitrary possible first $e$-hook removal and step 2.2 applies to every such first step. [F1, IH, step 2.1, step 2.2, algebra]

4.1 The base case of step 2.1 and the induction step of steps 2.2 and 3.1 establish the size formula and the step count for every partition of finite weight, and the counting statement is step 1.1. This is all that was asserted. [step 1.1, step 2.1, step 3.1, discharge-induction: step 2.2] ∎
