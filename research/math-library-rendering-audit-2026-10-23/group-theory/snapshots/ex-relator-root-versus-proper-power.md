---
id: ex-relator-root-versus-proper-power
kind: example
title: "Relator root versus proper power"
status: published
origin: pipeline
deps: [def-sc-toolkit-symmetrised-relators-and-pieces, def-minimal-cyclic-power-diagram-and-relator-root]
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
sources:
  references:
    - title: "Lipschutz (1964), \u00a76 common-root exception; cyclic-group example computed locally"
      url: "http://lib.ysu.am/articles_art/6b5e2e5df94354a3efa7529c0c38c956.pdf"
---

## Example

For the symmetrisation of $a^7$, the root is $a$, equal cyclic rotations do not create pieces, and $\langle a\mid a^7\rangle$ is cyclic of exact order seven.

## Facts & Assumptions

**Given:** The one-generator presentation with the symmetrised relator set of $a^7$.

[F1] Pieces require distinct full symmetrised words ([[def-sc-toolkit-symmetrised-relators-and-pieces]]).

[F2] Relator roots are nonempty words not literally proper powers ([[def-minimal-cyclic-power-diagram-and-relator-root]]).

## Verification

1.1 The symmetrised set is exactly $\{a^7,a^{-7}\}$. Its two words start in different letters, so have no nonempty common prefix; equal positive rotations all give the first word and equal inverse rotations the second. Thus there are no pieces and $C'(1/6)$ holds vacuously by [F1]. The one-letter word $a$ cannot be a proper power of a nonempty shorter word, so it is a root by [F2]. [F1, F2, given]

1.2 Every one-generator word freely reduces to $a^j$ for an integer $j$, since any change of sign in the string creates an adjacent inverse pair. The relation $a^7=1$ reduces the exponent modulo seven, so every element is one of $1,a,\ldots,a^6$. The exponent sum modulo seven is unchanged by free cancellation and by inserting or deleting any conjugate of $a^{\pm7}$: the conjugating exponents cancel and the relator contributes a multiple of seven. It therefore defines a homomorphism from the quotient to the additive residues modulo seven, taking $a^j$ to the residue of $j$. [given, algebra]

2.1 The seven displayed elements have distinct images, so they are distinct; step 1.2 also proves that they exhaust the quotient. In particular $a^7=1$ and $a^j\ne1$ for $1\le j\le6$. This proves exact order seven, while keeping the literal word root $a$ distinct from its quotient image. [step 1.1, step 1.2, algebra] ∎
