---
id: thm-global-function-field-infinitely-many-nonsplit-primes
kind: theorem
title: "Every nontrivial finite Galois function-field extension has infinitely many nonsplit places"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - thm-function-field-first-norm-index-inequality
  - thm-weak-approximation-for-global-fields
  - thm-local-artin-reciprocity-and-norm-index
  - def-axiom-of-choice
  - def-dependent-choice
  - def-finite-galois-extension-and-galois-group
  - def-place-of-a-global-field
  - def-completion-of-a-global-field-at-a-place
justified_by: []
proof_strategy: contradiction-by-norms
axiom_use: AC and DC are inherited from the first norm-index, weak-approximation, and local Artin suppliers; the finite subgroup argument adds no choice.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Romyar Yoon, Global Function Field Class Field Theory: A Neukirch Approach, §3.3.1, Corollary 1"
      url: "https://arxiv.org/pdf/1610.07486"
    - title: "J. S. Milne, Class Field Theory, Chapter VII §6"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
verification: {}
---

## Statement

Assume AC and DC.

Let $L/F$ be a nontrivial finite Galois extension of global function fields.
Infinitely many places of $F$ do not split completely in $L$. A place is
split completely when its decomposition group in $\operatorname{Gal}(L/F)$
is trivial.

## Statement references

[[thm-function-field-first-norm-index-inequality]]

[[thm-weak-approximation-for-global-fields]]

[[thm-local-artin-reciprocity-and-norm-index]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[[def-finite-galois-extension-and-galois-group]]

[[def-place-of-a-global-field]]

[[def-completion-of-a-global-field-at-a-place]]

[Yoon, *Global Function Field Class Field Theory: A Neukirch Approach*, §3.3.1, Corollary 1](https://arxiv.org/pdf/1610.07486)

## Facts & Assumptions

**Given:** A nontrivial finite Galois extension $L/F$ of global function
fields, and AC and DC.

[A1] AC and DC are the choice assumptions of the global-place,
weak-approximation and local Artin interfaces.
([[def-axiom-of-choice]], [[def-dependent-choice]])

[F1] If $L/F$ is cyclic of degree $n>1$, its global norm index is at least
$n$. ([[thm-function-field-first-norm-index-inequality]])

[F2] Weak approximation holds for a finite family of distinct places of a
global field. ([[thm-weak-approximation-for-global-fields]])

[F3] For a finite local extension, the norm subgroup is open; for a split
local algebra the product norm is onto.
([[thm-local-artin-reciprocity-and-norm-index]])

[F4] A place splits completely exactly when its decomposition group is
trivial. ([[def-finite-galois-extension-and-galois-group]],
[[def-place-of-a-global-field]],
[[def-completion-of-a-global-field-at-a-place]])

## Proof

**Given:** The data in the Statement and Facts & Assumptions.

1.1 First suppose $L/F$ is cyclic. If only finitely many places fail to split
completely, let $S$ be that finite set. For an arbitrary idele class choose
an idele $a=(a_v)$ representing it. At each $v\in S$, the coset of the open
local norm subgroup [F3] containing $a_v$ is open. By weak approximation
[F2], choose $x\in F^\times$ simultaneously in those cosets, so that
$x^{-1}a_v$ is a local norm at every $v\in S$. [A1, F2, F3, choose]

1.2 After multiplying $a$ by $x^{-1}$, every component at $S$ is a local
norm. For $v\notin S$, the extension splits completely, so every local
element is a norm from the product of split completions. Since $a_v$ is a
unit at almost all $v$, choose unit preimages there; the preimages form an
idele of $L$. Thus every class of $C_F$ is a global norm, contradicting
[F1]. [A1, F1, step 1.1, algebra]

2.1 For general nontrivial finite Galois $L/F$, choose a prime $p$ dividing
$|\operatorname{Gal}(L/F)|$. The cyclic rotation action on the set of
$p$-tuples $(g_1,\ldots,g_p)$ with product $1$ is closed under rotation,
since $g_2\cdots g_pg_1=g_1^{-1}(g_1\cdots g_p)g_1=1$, and
has $|G|^{p-1}$ elements. Since $p\mid |G|$, this count is divisible by $p$.
Every rotation orbit has size $1$ or $p$, so the number of fixed tuples is
divisible by $p$. Fixed tuples are $(g,\ldots,g)$ with $g^p=1$; since the
identity tuple is one fixed tuple, at least one other exists and gives an
element of order $p$. Let $H$ be the subgroup it generates and put $E=L^H$.
Then $L/E$ is cyclic of degree $p$. [given, algebra]

2.2 By steps 1.1–1.2, infinitely many places $w$ of $E$ do not split in
$L/E$. Each lies above a place $v$ of $F$. If $v$ split completely in $L/F$,
then every place above it in $E$ would split completely in $L/E$, a
contradiction. A place of $F$ has only finitely many places above it in the
finite extension $E/F$, so infinitely many distinct $v$ are nonsplit in
$L/F$. [F4, step 1.1, step 1.2, algebra] ∎
