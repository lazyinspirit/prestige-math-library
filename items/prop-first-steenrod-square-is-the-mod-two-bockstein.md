---
id: prop-first-steenrod-square-is-the-mod-two-bockstein
kind: proposition
title: Sq^1 is the mod-two Bockstein
status: draft
origin: pipeline
deps: ["def-bockstein-connecting-operation", "lem-bockstein-square-parity-recurrence", "prop-steenrod-square-normalization-instability-and-top-square"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: N. E. Steenrod and D. B. A. Epstein, Cohomology Operations
      url: https://web.archive.org/web/20230124163804if_/https://people.math.rochester.edu/faculty/doug/otherpapers/steenrod-epstein.pdf
      locator: Chapter VII section 6, Theorem 6.7, printed pages 113--114
    - title: Mosher and Tangora, Cohomology Operations and Applications in Homotopy Theory
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/moshtang.pdf
      locator: Chapter 3 Lemma 1 and its j=0 consequence, printed page 23
---

## Statement

For every space $X$, every $n\geq0$, and every
$x\in H^n(X;\mathbb F_2)$,

$$Sq^1(x)=\beta(x),$$

where $\beta$ is the Bockstein of

$$0\longrightarrow\mathbb F_2\xrightarrow{\,2\,}\mathbb Z/4\longrightarrow\mathbb F_2\longrightarrow0.$$

This equality, including its residue-lift calculation, requires no AC.

## Facts & Assumptions

**Given:** A space $X$, a nonnegative degree $n$, and
$x\in H^n(X;\mathbb F_2)$.

[F1] The displayed cyclic coefficient sequence defines the mod-two Bockstein,
and least residue representatives supply its lifts without AC
([[def-bockstein-connecting-operation]]).

[F2] The choice-free parity recurrence gives
$\beta Sq^j=Sq^{j+1}$ when $j$ is even
([[lem-bockstein-square-parity-recurrence]]).

[F3] The zero square is the identity in every degree
([[prop-steenrod-square-normalization-instability-and-top-square]]).

## Proof

**Proof technique:** specialize the proved Bockstein recurrence at the zero
square.

1.1 Apply the parity recurrence at $j=0$. [given, F2, F3]

$$\beta(x)=\beta Sq^0(x)=Sq^1(x).$$

This is the claimed equality of operations.

2.1 Both operations vanish on the empty space and zero class, and the canonical lifts use no choice. [F1, F2, F3, step 1.1]
For the empty space or zero class, both sides vanish. On a point and, more
generally, in degree zero, [F3] makes $Sq^1$ zero by instability, so step 1.1
makes the Bockstein zero as well. The index $j=0$ is included explicitly in
[F2], and no negative degree or converse assertion occurs. Ordinary
unnormalized singular cochains, including degenerate simplices, are inherited
from [F1] and [F2]. The only lift used in [F2] is the valuewise zero/one
residue lift described in [F1], so the equality is choice-free and assumes no
AC. ∎
