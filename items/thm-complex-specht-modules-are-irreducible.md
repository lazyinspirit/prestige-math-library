---
id: thm-complex-specht-modules-are-irreducible
kind: theorem
title: Complex Specht modules are irreducible
status: published
origin: pipeline
pipeline_run: frontier-36-complete
landmark: false
deps:
  - def-column-antisymmetrizer-polytabloid-and-specht-module
  - def-subrepresentation-and-irreducible-representation
  - def-young-subgroup-tabloid-and-permutation-module
  - lem-polytabloid-covariance-and-column-sign
  - lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero
  - thm-james-submodule-theorem-in-characteristic-zero
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups, Theorem 4.4(b) and proof, printed p. 16; Theorem 9.4 and complete proof of the submodule dichotomy, printed pp. 31-32"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

For every $n\ge0$ and $\lambda\vdash n$, the nonzero complex
$S_n$-representation $S^\lambda$ is irreducible.

## Facts & Assumptions

**Given:** $n\ge0$, $\lambda\vdash n$, and a nonzero $S_n$-subrepresentation
$U\subseteq S^\lambda$.

[F1] $S^\lambda$ is the complex span of its polytabloids, which lie in the
tabloid module $M^\lambda$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]]).

[F2] $M^\lambda$ is a finite-dimensional complex representation of $S_n$
([[def-young-subgroup-tabloid-and-permutation-module]]).

[F3] $S^\lambda$ is an $S_n$-subrepresentation of $M^\lambda$
([[lem-polytabloid-covariance-and-column-sign]]).

[F4] For every $S_n$-submodule $V\subseteq M^\lambda$, either
$S^\lambda\subseteq V$ or $V\subseteq(S^\lambda)^\perp$
([[thm-james-submodule-theorem-in-characteristic-zero]]).

[F5] $S^\lambda\ne0$ and
$S^\lambda\cap(S^\lambda)^\perp=\{0\}$
([[lem-specht-module-has-nondegenerate-self-pairing-in-characteristic-zero]]).

[F6] A subrepresentation is a linear subspace stable under every group element
([[def-subrepresentation-and-irreducible-representation]]).

[F7] A representation is irreducible when it is nonzero and its only
subrepresentations are $0$ and the whole representation
([[def-subrepresentation-and-irreducible-representation]]).

No form of the Axiom of Choice is used.

## Proof

**Proof technique:** direct.

1.1 By [F1]-[F3], $S^\lambda$ is a finite-dimensional subrepresentation of $M^\lambda$. Since the given $U$ is a subrepresentation of $S^\lambda$, [F6] makes $U$ stable under every $\sigma\in S_n$ also as a subspace of $M^\lambda$. Therefore [F4] applies to $U$. [given, F1, F2, F3, F4, F6]

2.1 If the second branch of [F4] holds, then the given $U\subseteq S^\lambda$ also satisfies $U\subseteq(S^\lambda)^\perp$. By [F5], this forces $U\subseteq\{0\}$, contrary to the nonzero hypothesis. Thus the first branch gives $S^\lambda\subseteq U$. [given, F4, F5, step 1.1]

3.1 The given inclusion $U\subseteq S^\lambda$ and step 2.1 imply $U=S^\lambda$. [given, step 2.1]

4.1 By [F5], $S^\lambda$ is nonzero, and step 3.1 shows that every nonzero subrepresentation equals $S^\lambda$. Thus [F7] gives that $S^\lambda$ is irreducible. [given, F5, F7, step 3.1] ∎
