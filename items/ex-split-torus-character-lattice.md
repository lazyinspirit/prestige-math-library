---
id: ex-split-torus-character-lattice
kind: example
title: "The character lattice of a split torus"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups, corrected 2022 edition"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "SGA 3, Expose VIII, section 1, Polo\u2013Gille edition"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp8-8nov09.pdf
    - title: "SGA 3, Expose X, section 1, Polo\u2013Gille edition"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Expo10-8nov09.pdf
deps: ["def-axiom-of-choice", "lem-diagonalizable-character-antiequivalence", "thm-multiplicative-type-groups-and-galois-character-modules", "cor-tori-correspond-to-torsion-free-character-lattices"]
proof_strategy: direct
---

## Example

Assume the Axiom of Choice. For every field $k$, $T=\mathbf G_m^r$ has $X^*(T)=\mathbb Z^r$ with trivial Galois action. A vector $(n_1,\ldots,n_r)$ represents the character $(t_1,\ldots,t_r)\mapsto\prod_i t_i^{n_i}$. A map $\mathbf G_m^r\to\mathbf G_m^s$ is therefore an $s$-tuple of such monomials, or an integer $s\times r$ matrix, in every characteristic.

## Facts & Assumptions

[A1] Assume [[def-axiom-of-choice]]; it is used through the general multiplicative-type classification, whose affineness interface uses fpqc submersiveness.

[F1] The complete split character dictionary is [[lem-diagonalizable-character-antiequivalence]].

[F2] Galois descent of characters and the torus distinction are [[thm-multiplicative-type-groups-and-galois-character-modules]], [[cor-tori-correspond-to-torsion-free-character-lattices]].

## Verification

**Given:** $r,s\ge0$ and a field $k$.

1.1 The coordinate algebra is $k[t_1^{\pm1},\ldots,t_r^{\pm1}]=k[\mathbb Z^r]$. F1 shows that all characters are exactly its monomials; every exponent tuple occurs uniquely. These functions are defined over $k$, so the entire Galois action is trivial. [F1, F2, algebra]

2.1 F1 identifies a map to $\mathbf G_m^s$ with a homomorphism $\mathbb Z^s\to\mathbb Z^r$, determined by the images of the $s$ basis vectors, giving the stated matrix and formulas. The module is torsion-free, so F2 identifies this group as a torus. The same formulas include rank zero and the unique map involving a trivial source or target as appropriate. [A1, F1, F2, step 1.1, algebra] ∎
