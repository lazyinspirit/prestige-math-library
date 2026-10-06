---
id: def-exponent-sum-of-a-braid
kind: definition
title: "The exponent sum of a braid"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps: [def-braid-group-by-the-artin-presentation, thm-von-dyck, def-group-homomorphism, def-abelianisation-of-a-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; section 2.2 (the exponent sum of a braid word), printed pp. 14-16"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
---

## Definition

Let $n\ge1$ and let $B_n=\langle\sigma_1,\dots,\sigma_{n-1}\mid\text{Artin
relators}\rangle$ be the braid group of the Artin presentation
([[def-braid-group-by-the-artin-presentation]]); recall that $B_0$ and $B_1$
are trivial. The **exponent sum** is the unique homomorphism

$$e_n:B_n\longrightarrow\mathbb Z,\qquad e_n(\sigma_i)=1\quad(1\le i\le n-1),$$

where $\mathbb Z$ is the additive group of integers. It is well defined because
every defining relator of the Artin presentation has exponent sum $0$: the
braid relator $\sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}$
has both sides of exponent sum $3$, and each far-commutation relator has both
sides of exponent sum $2$, so the assignment $\sigma_i\mapsto1$ kills all
relators, and [[thm-von-dyck]] applies. It is surjective for $n\ge2$ and it is
the trivial map on the trivial group $B_1$. For every Artin word
$\beta=\sigma_{i_1}^{\varepsilon_1}\cdots\sigma_{i_k}^{\varepsilon_k}$ one has
$e_n(\beta)=\sum_{r=1}^k\varepsilon_r$ independently of the word, and
$e_n(\beta^{-1})=-e_n(\beta)$. **Caveat:** $e_n$ is the composite of the
abelianisation $B_n\to B_n^{\mathrm{ab}}$ with a surjection onto the free cyclic
group $\mathbb Z$ (for $n\ge2$): since the target is abelian, every commutator is sent to $0$, so $e_n$ factors through $B_n/[B_n,B_n]$ ([[def-abelianisation-of-a-group]]). No normal form, Garside structure or
faithfulness statement is used anywhere.

## Facts & Assumptions

**Given:** An integer $n\ge1$ and the Artin presentation of $B_n$; no choice principle is used.

[F1] $B_n=\langle\sigma_1,\dots,\sigma_{n-1}\mid \sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}\ (1\le i\le n-2),\ \sigma_i\sigma_j=\sigma_j\sigma_i\ (|i-j|>1)\rangle$, with $B_0=B_1$ trivial and $B_n$ defined by the empty presentation for $n\le1$ ([[def-braid-group-by-the-artin-presentation]]).

[F2] Von Dyck: if a function from the generators of a presented group to a group $H$ sends every defining relator to the identity of $H$, then it extends to a unique homomorphism from the presented group to $H$ ([[thm-von-dyck]]).

[F3] A group homomorphism $f:G\to G'$ satisfies $f(xy)=f(x)f(y)$ for all $x,y$, hence $f(x^k)=f(x)^k$ for all $k\in\mathbb Z$ ([[def-group-homomorphism]]).

## Proof

1.1 **Well-definedness.** Write the target additively, so the identity of $\mathbb Z$ is $0$. Define $u$ on generators by $u(\sigma_i):=1$. At the braid relator both sides receive $1+1+1=3$; at each far-commutation relator both sides receive $1+1=2$. Hence every defining relator of [F1] is sent to $0$, and [F2] produces a unique homomorphism $e_n:B_n\to\mathbb Z$ with $e_n(\sigma_i)=1$. For $n\le1$ the group $B_n$ is trivial by [F1] and the unique homomorphism to $\mathbb Z$ is the trivial one; this is the case $n=1$ of the statement. [F1, F2, given]

2.1 **Values on words and inverses.** Let $\beta=\sigma_{i_1}^{\varepsilon_1}\cdots\sigma_{i_k}^{\varepsilon_k}$ be an Artin word. By [F3] applied successively, $e_n(\beta)=\sum_{r=1}^k\varepsilon_r e_n(\sigma_{i_r})=\sum_{r=1}^k\varepsilon_r$; in particular the value does not depend on the word chosen to represent the element $\beta$, because it equals the value of the well-defined map $e_n$ at $\beta$. Taking $k=1$, $e_n(\sigma_i^{-1})=-1=-e_n(\sigma_i)$, so the same computation gives $e_n(\beta^{-1})=-e_n(\beta)$ for every Artin word by [F3] and the multiplicativity of group homomorphisms. [F3, step 1.1, algebra]

3.1 **Surjectivity.** For $n\ge2$ the element $e_n(\sigma_1)=1$ generates the additive group $\mathbb Z$, so $e_n$ is surjective; for $n=1$ the domain $B_1$ is trivial, and the exponent sum is the (trivial, hence not surjective) map into $\mathbb Z$. This proves all claims of the definition and completes the construction of the unique homomorphism with the prescribed values. [F1, step 1.1, step 2.1, given] ∎
