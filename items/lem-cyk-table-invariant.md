---
id: lem-cyk-table-invariant
kind: lemma
title: "A variable lies in a CYK table cell exactly when it derives that span"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cyk-table-and-span-variable, def-one-step-and-reflexive-transitive-derivation]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alfred V. Aho, COMS W3261 CS Theory, Lecture 10"
      url: "https://www.cs.columbia.edu/~aho/cs3261/Lectures/L10-PL_for_CFLs.html"
---

## Statement

Let $G$ be a Chomsky-normal-form grammar, let $w=a_1\cdots a_n$ be a nonempty
word, and let $T[i,\ell]$ be the CYK table of $G$ on $w$. Then for every
variable $A$ and every valid cell $(i,\ell)$,
$$ A\in T[i,\ell]\quad\text{if and only if}\quad A\Rightarrow_G^* a_i\cdots a_{i+\ell-1}. $$

## Facts & Assumptions

**Given:** A CNF grammar $G$, a nonempty word $w=a_1\cdots a_n$, and its CYK
table.

[L1] By [[def-cyk-table-and-span-variable]], the cells $T[i,\ell]$ are defined by terminal productions for $\ell=1$ and by binary productions $A\to BC$ together with a split point for $\ell\ge 2$.

[L2] By [[def-one-step-and-reflexive-transitive-derivation]], $A\Rightarrow_G^* u$ means that the sentential form $A$ derives the word $u$ by finitely many grammar steps.

## Proof

**Proof technique:** direct.

1.1 We induct on the span length $\ell$. For $\ell=1$, [L1] says that $A\in T[i,1]$ exactly when $A\to a_i$ is a production, and by [L2] that is exactly when $A\Rightarrow_G^* a_i$. [L1, L2, given]

2.1 Assume the claim known for all shorter spans and let $\ell\ge 2$. If $A\in T[i,\ell]$, then [L1] provides a split $k$ and a production $A\to BC$ with $B\in T[i,k]$ and $C\in T[i+k,\ell-k]$. By the induction hypothesis, $B\Rightarrow_G^* a_i\cdots a_{i+k-1}$ and $C\Rightarrow_G^* a_{i+k}\cdots a_{i+\ell-1}$, so one use of $A\to BC$ followed by those derivations gives $A\Rightarrow_G^* a_i\cdots a_{i+\ell-1}$. [L1, L2, step 1.1, induction]

2.2 Conversely, suppose $A\Rightarrow_G^* a_i\cdots a_{i+\ell-1}$ with $\ell\ge 2$. Because $G$ is in CNF, the first derivation step from $A$ must be a binary production $A\to BC$, and the derived word must split at some $k$ into a prefix from $B$ and a suffix from $C$. The induction hypothesis then gives $B\in T[i,k]$ and $C\in T[i+k,\ell-k]$, so [L1] places $A$ in $T[i,\ell]$. [L1, L2, step 1.1, induction]

3.1 Steps 1.1, 2.1, and 2.2 prove the equivalence for every cell. [step 1.1, step 2.1, step 2.2] ∎
