---
id: cor-zero-height-preperiodic-for-nonisotrivial-rational-map-over-function-field
kind: corollary
title: Zero canonical height is equivalent to preperiodicity under Baker's hypothesis
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - def-axiom-of-choice
  - thm-positive-height-gap-for-nonisotrivial-rational-map-over-function-field
  - thm-function-field-dynamical-height-growth-and-functional-equation
  - lem-projective-height-scales-over-finite-function-field-extension
  - def-isotrivial-rational-map-over-function-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Matthew Baker, A Finiteness Theorem for Canonical Heights Attached to Rational Maps over Function Fields, Theorem 1.6 and §1.2"
      url: "https://arxiv.org/pdf/math/0601046v2"
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $(K,k,M_K)$ be a one-variable function-field
datum with exact constants, let $\phi:\mathbb P^1_K\to\mathbb P^1_K$ be a
rational self-map of degree $d\ge2$ that is non-isotrivial after every finite
extension of $K$, and let $P\in\mathbb P^1(\overline K)$. Then
$\widehat h_{\phi,K}(P)=0$ if and only if there are integers $0\le m<n$ such
that $\phi^{\circ n}(P)=\phi^{\circ m}(P)$.

## Statement references

[[def-axiom-of-choice]]

[[def-one-variable-function-field-with-constant-field]]

[[def-rational-map-on-projective-line-degree]]

[[def-isotrivial-rational-map-over-function-field]]

[[def-dynamical-canonical-height-over-function-field]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a one-variable function-field datum $K/k$,
a rational self-map $\phi$ of degree $d\ge2$ non-isotrivial after every
finite extension, and $P\in\mathbb P^1(\overline K)$.

[F1] For every finite extension $E/K$, the base-changed pair $(E/k_E,\phi)$
still satisfies the hypothesis of the positive small-height theorem. Thus
there is $\epsilon_E>0$ for which
$$\{Q\in\mathbb P^1(E):\widehat h_{\phi,E}(Q)\le\epsilon_E\}$$
is finite. ([[def-isotrivial-rational-map-over-function-field]],
[[thm-positive-height-gap-for-nonisotrivial-rational-map-over-function-field]])

[F2] For each finite extension $E/K$ and each point defined over $E$, the
canonical heights satisfy
$$\widehat h_{\phi,K}(Q)=\lambda_{E/K}\widehat h_{\phi,E}(Q),\qquad
\lambda_{E/K}>0,$$
and each canonical height is nonnegative and satisfies
$\widehat h_{\phi,E}(\phi(Q))=d\widehat h_{\phi,E}(Q)$.
The scaling follows by applying the projective-height scaling lemma to every
iterate and taking the limits supplied by the dynamical height theorem.
([[lem-projective-height-scales-over-finite-function-field-extension]],
[[thm-function-field-dynamical-height-growth-and-functional-equation]])

[A1] The Axiom of Choice is assumed by the curve models and height/gap
suppliers; the orbit-repetition argument is choice-free.
([[def-axiom-of-choice]])

## Proof

1.1 Suppose that $P$ is preperiodic, so $\phi^{\circ n}(P)=\phi^{\circ m}(P)$
for some $0\le m<n$. Iterating the functional equation in [F2] gives
$d^n\widehat h_{\phi,K}(P)=d^m\widehat h_{\phi,K}(P)$. Since $d^n-d^m>0$,
this forces $\widehat h_{\phi,K}(P)=0$. [F2, given, algebra]

2.1 Conversely suppose $\widehat h_{\phi,K}(P)=0$. Choose a finite extension
$E/K$ containing the coordinates of $P$. By [F2],
$\widehat h_{\phi,E}(P)=0$. Every iterate belongs to $\mathbb P^1(E)$ and
has canonical height $d^j\widehat h_{\phi,E}(P)=0$ by the functional
equation. [A1, F2, given]

2.2 By [F1], the set of $E$-rational points with canonical height at most
$\epsilon_E$ is finite. All iterates from step 2.1 belong to this set, so two
iterates coincide: if the finite set has $N$ elements and the first $N+1$
iterates were distinct, it would contain at least $N+1$ elements. Therefore
$P$ is preperiodic. [F1, step 2.1, algebra]

3.1 Steps 1.1 and 2.2 prove the two implications and hence the stated
equivalence. [step 1.1, step 2.2] ∎
