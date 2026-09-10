---
id: lem-idempotents-lift-through-finite-commutative-algebra-quotients
kind: lemma
title: Idempotents lift through finite commutative algebra quotients
deps: [lem-finite-dimensional-commutative-algebras-decompose-into-local-factors]
provenance:
  statement: literature-derived
  proof: ai-altered
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Jacobsen, Block fusion systems and the center of the group ring, Lemma 2.32 and Theorem 2.33, pp.18–19; general-field lifting proved locally
      url: https://www.math.ku.dk/bibliotek/arkivet/phd-theses/phd14mwj.pdf
proof_strategy: direct
---

## Statement

For a finite-dimensional commutative unital $k$-algebra $A$ and any ideal $I$, every idempotent of $A/I$ lifts to an idempotent of $A$.

## Facts & Assumptions

**Given:** The stated algebra, ideal, and $\bar e^2=\bar e$ in $A/I$.

[F1] The algebra and its quotient decompose into local factors, with zero quotient factors allowed. ([[lem-finite-dimensional-commutative-algebras-decompose-into-local-factors]])

## Proof

**Proof technique:** direct.

1.1 Use [F1] to write $A=\prod A_i$ and $A/I=\prod A_i/I_i$. In a nonzero local quotient, $x$ and $1-x$ cannot both be nonunits: their sum is $1$ and nonunits form its maximal ideal. For an idempotent $x$, $x(1-x)=0$, so if $x$ is a unit then $x=1$, and if $1-x$ is a unit then $x=0$. Thus each nonzero quotient coordinate of $\bar e$ is $0$ or $1$. [F1]

2.1 In each factor $A_i$ choose the same coordinate $0$ or $1$, choosing $0$ for a zero quotient factor. Their finite tuple $e$ satisfies $e^2=e$ coordinatewise and maps to $\bar e$. If $A=0$, the empty tuple is its sole idempotent and is already a lift. [F1, step 1.1] ∎

## Sources

Jacobsen, Block fusion systems and the center of the group ring, Lemma 2.32 and Theorem 2.33, pp.18–19; general-field lifting proved locally. Local argument and conventions as displayed above.
