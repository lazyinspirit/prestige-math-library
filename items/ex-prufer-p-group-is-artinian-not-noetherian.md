---
id: ex-prufer-p-group-is-artinian-not-noetherian
kind: example
title: "The Prüfer $p$-group is Artinian but not Noetherian"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-noetherian-module, def-artinian-module, thm-rat-field, lem-int-embeds-rat, def-quotient-module]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Arvind Nair, Algebra I, Lecture 5"
      url: "https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf"
pipeline_run: null
---

## Example

For every prime $p$, the Prüfer group $\mathbb Z(p^\infty)\le\mathbb Q/\mathbb Z$ is Artinian but not Noetherian as a $\mathbb Z$-module. See [[def-noetherian-module]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] A left $R$-module $M$ is Noetherian when every submodule of $M$ is finitely generated (def-generated-cyclic-finitely-generated-and-free-modules). This finite-generation definition is the convention; its equivalence with ACC and the maximal condition is proved in thm-equivalent-characterizations-of-noetherian-modules. ([[def-noetherian-module]]).

[L2] A left $R$-module $M$ is Artinian when every descending chain $M_0\supseteq M_1\supseteq\cdots$ of submodules stabilizes: there is $N$ such that $M_n=M_N$ for all $n\ge N$. This is the descending chain condition. ([[def-artinian-module]]).

[L3] $(\mathbb{Q}, +, \cdot, 0, 1)$ with the operations of def-rat-operations is a field: a commutative ring with $1 \ne 0$ in which every nonzero element has a multiplicative inverse. ([[thm-rat-field]]).

[L4] The map $j(k) = [(k,1)]$ is injective and preserves addition, multiplication, and order. Composing with lem-nat-embeds-int embeds $\mathbb{N}$ in $\mathbb{Q}$; we write $k$ for $j(k)$ throughout. ([[lem-int-embeds-rat]]).

[L5] For $N\le M$, the additive cosets $m+N$ form the quotient module $M/N$ under the well-defined scalar action $$r(m+N):=rm+N.$$ ([[def-quotient-module]]).

## Verification

**Proof technique:** direct.

1.1 Let $C_n=\{a/p^n+\mathbb Z:a\in\mathbb Z\}\le\mathbb Q/\mathbb Z$. The class $1/p^n+\mathbb Z$ generates $C_n$ and has order $p^n$, while $C_n<C_{n+1}$. If an element of $\bigcup_kC_k$ has order dividing $p^n$, cancelling its denominator shows that it lies in $C_n$. Hence every cyclic subgroup of order $p^n$ is $C_n$, and $$\mathbb Z(p^\infty):=\bigcup_{n\ge0}C_n$$ is the Prüfer $p$-group. [L1, L2, L3, L4, L5, given, algebra]

2.1 The group is not finitely generated, which is the failure of [L1] directly: a finite subset of $\bigcup_kC_k$ lies in a single $C_N$, because each of its finitely many members lies in some $C_k$ and the $C_k$ are nested, so the submodule it generates is contained in $C_N$ and is proper. Equivalently, the strict ascending chain $C_0<C_1<C_2<\cdots$ of step 1.1 does not stabilize. [step 1.1, L1, given, algebra]

3.1 If a subgroup $H$ contains elements of unbounded order, then for every $n$ it contains an element whose cyclic subgroup contains the unique $C_n$, so $C_n\le H$ and $H=\mathbb Z(p^\infty)$. Otherwise the element orders in $H$ are bounded by some $p^n$, and step 1.1 gives $H\le C_n$. The subgroups of the cyclic group $C_n$ are the unique $C_m$ for $0\le m\le n$, so every proper subgroup of the Prüfer group is one of these finite cyclic groups. [step 1.1, step 2.1, given, algebra]

4.1 A descending chain either remains at the whole group or enters some finite $C_n$, after which it stabilizes because $C_n$ has only the chain $0=C_0<C_1<\cdots<C_n$ of subgroups. Thus DCC holds. The argument includes $C_0=0$ and is unchanged for $p=2$. This proves the stated claim. [step 3.1, given, algebra] ∎
