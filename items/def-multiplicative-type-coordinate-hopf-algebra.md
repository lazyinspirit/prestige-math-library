---
id: def-multiplicative-type-coordinate-hopf-algebra
kind: definition
title: "Coordinate Hopf algebras for multiplicative type"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
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
deps: ["def-group-scheme-over-a-field"]
---

## Definition

For an affine $k$-group scheme $G$, its coordinate algebra $A$ has maps $\Delta:A\to A\otimes_k A$, $\epsilon:A\to k$, and $S:A\to A$ obtained by reversing multiplication, identity, and inverse. A commutative Hopf $k$-algebra means a commutative unital algebra with these algebra maps satisfying coassociativity, counit, and inverse identities. The inverse identity is $m(S\otimes1)\Delta=m(1\otimes S)\Delta=\eta\epsilon$, where $m$ is algebra multiplication and $\eta:k\to A$ is the unit. A Hopf map respects all three maps. A group-like element is $a$ with $\Delta(a)=a\otimes a$ and $\epsilon(a)=1$.

Group schemes and their morphisms have the convention of [[def-group-scheme-over-a-field]]. In particular the term group here refers to the whole scheme, including nilpotents, rather than only its points over a field.
