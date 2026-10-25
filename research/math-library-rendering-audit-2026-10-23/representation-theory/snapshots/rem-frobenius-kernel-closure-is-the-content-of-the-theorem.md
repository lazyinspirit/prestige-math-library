---
id: rem-frobenius-kernel-closure-is-the-content-of-the-theorem
kind: remark
title: "Frobenius kernel closure is the content of the theorem"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-frobenius-kernel-set, thm-frobenius-kernel-theorem, lem-frobenius-kernel-cardinality, def-frobenius-complement-and-frobenius-group]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Alex Bartel, Introduction to Representation Theory of Finite Groups, §6.1"
      url: "https://www.maths.gla.ac.uk/~abartel/docs/reptheory.pdf"
      locator: "§6.1, printed pp. 28–30"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $G$ be a finite Frobenius group with complement $H$ and let

$$N=\Big(G\setminus\bigcup_{x\in G}xHx^{-1}\Big)\cup\{1\}$$

be the associated candidate kernel set ([[def-frobenius-kernel-set]],
[[def-frobenius-complement-and-frobenius-group]]). Then $N$ is defined by a
membership condition on individual elements: $g\in N$ means that $g=1$ or that
$g$ lies in no conjugate of $H$. Nothing in the definition asserts that $N$ is
closed under products, and the counting statement $|N|=[G:H]$, $N\cap H=\{1\}$
of [[lem-frobenius-kernel-cardinality]] likewise says nothing about products of
elements of $N$.

**The remark.** The passage from this candidate set to a subgroup is not
formal; it is the content of the Frobenius kernel theorem
([[thm-frobenius-kernel-theorem]]), which proves that $N$ is a normal subgroup
of $G$ by character-theoretic means. In particular, the theorem is not a
consequence of the cardinality computation, and a proof of the kernel theorem
must somewhere use more than the definition of $N$ and the orbit-counting
identities.

## Remarks

The reason no product closure is available for free is that $N$ is described by
a *negative* condition on conjugation, while a product $gg'$ of two elements
avoiding every conjugate of $H$ need not avoid them; the subgroups
$H^{x}=xHx^{-1}$ are numerous and the description of $N$ quantifies over all of
them. This is visible already in the smallest case $G=S_3$ with
$H=\langle(0\,1)\rangle$, where the kernel is $A_3$
([[ex-s3-as-a-frobenius-group]]): the two nonidentity elements of $A_3$ are
$3$-cycles, and the product of either one with itself is the other, while their mutual product is the identity, so closure holds there — but
this is a computation in one group, not a general structural reason.

Conversely, the reverse implication is immediate: if a normal subgroup $K$
with $K\le N$, $G=KH$ and $K\cap H=\{1\}$ is exhibited by other means, then $K$
is the Frobenius kernel by the uniqueness statement of
[[cor-frobenius-semidirect-product-decomposition]]. The character-theoretic
theorem is exactly the tool that produces such a $K$ from the Frobenius
condition alone.
