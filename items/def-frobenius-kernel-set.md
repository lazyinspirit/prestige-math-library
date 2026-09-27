---
id: def-frobenius-kernel-set
kind: definition
title: "Frobenius kernel set"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-frobenius-complement-and-frobenius-group, prop-frobenius-permutation-action-characterization]
justified_by: []
forward_refs: [rem-frobenius-kernel-closure-is-the-content-of-the-theorem]
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
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Definition

Let $G$ be a finite group and let $H$ be a Frobenius complement of $G$
([[def-frobenius-complement-and-frobenius-group]]). The **candidate Frobenius
kernel set**, or simply the kernel set, attached to $H$ is

$$N:=\Big(G\setminus\!\!\bigcup_{x\in G}xHx^{-1}\Big)\cup\{1\}.$$

Thus an element $g\in G$ lies in $N$ exactly when $g=1$ or $g$ lies in no
conjugate $xHx^{-1}$ of $H$. Equivalently, by the fixed-point description of the
coset action ([[prop-frobenius-permutation-action-characterization]]), $N$ is the
set of elements that either are the identity or fix no coset of $H$ in the left
action of $G$ on $G/H$; the identity is included by hand, because it lies in
every conjugate of $H$.

Two cautions are part of the definition. First, $N$ is defined as a *subset*
of $G$; no claim that $N$ is a subgroup is built into the notation, and the
description "kernel" is provisional. Second, the set is invariant under
conjugation: if $g\in N$ and $t\in G$ then $tgt^{-1}$ lies in no conjugate of
$H$ whenever $g$ does, since $u(tgt^{-1})u^{-1}=(ut)g(ut)^{-1}$; this setwise
invariance is *not* closure under products.

## Remarks

- **Why "candidate".** The counting argument of
  [[lem-frobenius-kernel-cardinality]] shows $|N|=[G:H]$, which is exactly the
  order a normal complement of $H$ would have to have. That argument alone
  produces no product in $N$; closure and normality are supplied only by the
  character-theoretic [[thm-frobenius-kernel-theorem]], as recorded in
  [[rem-frobenius-kernel-closure-is-the-content-of-the-theorem]].

- **Relation to the identity.** Since $1\in xHx^{-1}$ for every $x$, the element
  $1$ must be added back by hand, and $N\cap H=\{1\}$: a nonidentity element of
  $H$ lies in the conjugate $1H1^{-1}=H$ and hence outside $N$. Both facts are
  used in [[lem-frobenius-kernel-cardinality]].
