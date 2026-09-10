---
id: def-trees-and-bodies-on-discrete-alphabets
kind: definition
title: "Trees and their bodies"
status: draft
origin: pipeline
deps: ["def-the-set-of-functions-from-one-set-to-another"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Lemma 1.14 and Definition 1.15; general-alphabet extension also in Buffard–Levrel–Mayo opening definitions"
      url: "https://homepages.math.uic.edu/~marker/math512/dst.pdf"
---
## Definition

Work in ZF. For a set $E$, use the function sets of [[def-the-set-of-functions-from-one-set-to-another]] to put $E^{<\omega}=\bigcup_{n\in\mathbb N}E^n$. Replacement followed by Union forms this set. Write $\varnothing$ for the empty word, $|s|$ for the domain length of $s$, and $s^\frown e$ for appending $e\in E$.

A **tree on $E$** is a subset $T\subseteq E^{<\omega}$ such that $s\upharpoonright m\in T$ whenever $s\in T$ and $m\leq |s|$. The empty tree is permitted. Every nonempty tree contains $\varnothing$. Its **body** is

$$[T]=\{x\in E^{\mathbb N}:(\forall n\in\mathbb N)\ x\upharpoonright n\in T\}.$$

A tree is **pruned** when every node has a proper extension in $T$. Equivalently, every $s\in T$ has a child $s^\frown e\in T$: restrict a proper extension to length $|s|+1$ for the forward implication; a child itself is a proper extension for the reverse implication. This is not a claim that branches exist through nodes of arbitrary-alphabet pruned trees in ZF.

The empty tree is vacuously pruned and has empty body, because every branch would require its empty prefix to belong to the tree. The root-only tree $\{\varnothing\}$ has empty body and is not pruned. If $E=\varnothing$, these are the only two trees, since $E^0=\{\varnothing\}$ and $E^n=\varnothing$ for $n>0$.
