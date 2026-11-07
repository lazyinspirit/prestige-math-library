---
id: thm-absolute-galois-restriction-to-finite-galois-subextensions-is-surjective
kind: theorem
title: "Restriction from an absolute Galois group to a finite Galois subextension is surjective"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-absolute-galois-group-of-a-field
  - def-separable-closure-in-an-algebraic-extension
  - def-separable-elements-and-separable-extensions
  - thm-separability-is-transitive
  - thm-algebraic-embedding-extension
  - def-algebraic-closure
  - def-finite-galois-extension-and-galois-group
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Fields and Galois Theory, version 5.10, Theorem 7.7 and Theorem 7.4"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $F$ be a field, let $\Omega$ be an algebraic
closure of $F$, and let $F_s$ be the relative separable closure of $F$ in
$\Omega$. If $E/F$ is a finite Galois subextension of $F_s$, then restriction
is a surjective homomorphism
$$\operatorname{res}_{E/F}:G_F=\operatorname{Gal}(F_s/F)\longrightarrow\operatorname{Gal}(E/F).$$

## Statement references

[[def-absolute-galois-group-of-a-field]]

[[def-separable-closure-in-an-algebraic-extension]]

[[def-finite-galois-extension-and-galois-group]]

[[def-algebraic-closure]]

[J. S. Milne, *Fields and Galois Theory*, Theorems 7.4 and 7.7, printed p. 95](https://www.jmilne.org/math/Books/FT0.pdf)

## Facts & Assumptions

**Given:** Choice, a field $F$, an algebraic closure $\Omega/F$, its relative
separable closure $F_s$, and a finite Galois intermediate extension $E/F$.

[A1] The Axiom of Choice asserts that every family of nonempty sets has a
choice function ([[def-axiom-of-choice]]).

[F1] [[def-separable-closure-in-an-algebraic-extension]] and
[[def-separable-elements-and-separable-extensions]]: $F_s$ is the subfield of
$\Omega$ consisting of elements separable over $F$.

[F2] [[thm-separability-is-transitive]]: separability in an algebraic tower
is transitive.

[F3] [[thm-algebraic-embedding-extension]]: assuming Choice, an embedding of a
field into an algebraically closed field extends across any algebraic extension
of its domain.

[F4] [[def-finite-galois-extension-and-galois-group]]: an element of
$\operatorname{Gal}(E/F)$ is an $F$-automorphism of $E$.

[F5] [[def-algebraic-closure]]: $\Omega$ is algebraic over $F$ and
algebraically closed.

## Proof

**Given:** The data in the Statement, including Choice.

1.1 The field $F_s$ is separably closed inside $\Omega$: if $x\in\Omega$ is separable over $F_s$, then $F_s/F$ is separable and [F2] makes $x$ separable over $F$. By [F1], $x\in F_s$. [F1, F2, given]

1.2 Let $\tau\in\operatorname{Gal}(E/F)$. By [F4], it is an $F$-embedding $E\to\Omega$. Since $F_s/E$ is algebraic, [F3] extends $\tau$ to an $F$-embedding $\widetilde\tau:F_s\to\Omega$. Every $x\in F_s$ is separable over $F$, so its image $\widetilde\tau(x)$ is also separable over $F$ and therefore lies in $F_s$ by [F1]. Thus $\widetilde\tau(F_s)\subseteq F_s$. [A1, F1, F3, F4, given, construct]

2.1 The image $S=\widetilde\tau(F_s)$ is separably closed by step 1.1 and the field isomorphism $F_s\cong S$. If $y\in F_s$, its minimal polynomial over $S$ divides its separable minimal polynomial over $F$, so $y$ is separable over $S$ and belongs to $S$. Hence $\widetilde\tau$ is onto $F_s$, is an automorphism fixing $F$, and restricts to $\tau$ on $E$. Since $\tau$ was arbitrary, the restriction homomorphism is surjective. [F1, F2, step 1.1, step 1.2, algebra] ∎