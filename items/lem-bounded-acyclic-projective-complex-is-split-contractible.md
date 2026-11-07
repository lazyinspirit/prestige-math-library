---
id: lem-bounded-acyclic-projective-complex-is-split-contractible
kind: lemma
title: Bounded Acyclic Complexes of Projectives Are Split Contractible
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps:
  - def-projective-module
  - def-bounded-bounded-below-and-bounded-above-complex
  - def-cochain-complex-in-an-abelian-category
  - def-exactness-of-a-complex-at-a-degree-and-acyclic-complex
verification:
  precheck: pass
sources:
  references:
    - title: "Weibel, The K-book, Chapter II, §9"
      url: "https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf"
---

## Statement

Let $A$ be a unital associative ring and let $P^\bullet$ be a bounded acyclic cochain complex of projective left $A$-modules. Then every short exact sequence $0\to Z^n(P)\to P^n\to Z^{n+1}(P)\to0$, where $Z^n(P)=\ker(d^n)$, splits; each cycle module is projective; and $P^\bullet$ is contractible. No finite-generation hypothesis or choice principle is required.

## Statement references

[Weibel, *The K-book*, Chapter II, §9](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf)

## Facts & Assumptions

**Given:** A unital associative ring $A$ and a bounded acyclic cochain complex $P^\bullet$ of projective left $A$-modules.

[F1] [[def-projective-module]]: a projective module lifts maps through surjective module homomorphisms.

[F2] [[def-cochain-complex-in-an-abelian-category]] and [[def-bounded-bounded-below-and-bounded-above-complex]]: $P^\bullet$ is a cochain complex with only finitely many nonzero degrees.

[F3] [[def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]]: acyclicity means exactness at every degree, so $\ker d^n=\operatorname{im}d^{n-1}$ and each sequence $0\to Z^n(P)\to P^n\to Z^{n+1}(P)\to0$ is exact.

## Proof

**Proof technique:** finite descending induction.

1.1 If $P^\bullet=0$, then every cycle and every displayed sequence is zero, and the zero homotopy contracts the complex. Otherwise boundedness gives a largest degree $b$ with $P^b\ne0$. Acyclicity and $P^{b+1}=0$ make $d^{b-1}:P^{b-1}\twoheadrightarrow P^b$ surjective. Since $P^b$ is projective, [F1] splits this surjection, so $Z^{b-1}(P)$ is a direct summand of $P^{b-1}$ and is projective. [F1, F2, F3, given, cases, algebra]

2.1 Assume now $P^\bullet\ne0$. Starting with the projective module $P^b$, descend through the finite support: once $Z^{n+1}(P)$ is projective, acyclicity gives a surjection $P^n\twoheadrightarrow Z^{n+1}(P)$, which splits by [F1], so its kernel $Z^n(P)$ is a direct summand of $P^n$ and is projective. Thus every cycle is projective and every displayed short exact sequence splits. [F1, F2, F3, step 1.1, induction, algebra]

3.1 For each of the finitely many possibly nonzero degrees choose a splitting $s^n:Z^{n+1}(P)\to P^n$ of $d^n:P^n\to Z^{n+1}(P)$. The split sequence gives $P^n=Z^n(P)\oplus s^n Z^{n+1}(P)$. Define $h^{n+1}:P^{n+1}\to P^n$ by projection onto $Z^{n+1}(P)$ followed by $s^n$. On $Z^n(P)$ the composite $d^{n-1}h^n$ is the identity, and on $s^nZ^{n+1}(P)$ the composite $h^{n+1}d^n$ is the identity; the other composite vanishes on each of these respective summands. Thus $d^{n-1}h^n+h^{n+1}d^n=1_{P^n}$. Set all maps outside the finite support to zero. This is a contracting homotopy, obtained from finitely many splittings only, so no choice principle is used. [F1, F2, F3, step 2.1, construct, algebra] ∎
