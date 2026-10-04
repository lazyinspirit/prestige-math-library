---
id: lem-multiplicative-type-local-hopf-dictionary
kind: lemma
title: "The affine Hopf dictionary used for multiplicative type"
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
deps: ["def-multiplicative-type-coordinate-hopf-algebra", "thm-affine-scheme-ring-anti-equivalence"]
proof_strategy: direct
---

## Statement

Affine $k$-group schemes are contravariantly equivalent to commutative Hopf $k$-algebras. A group character $G\to\mathbf G_m$ corresponds precisely to a group-like element of its coordinate algebra. These correspondences commute with field extension.

## Facts & Assumptions

[F1] Affine schemes and rings are contravariantly equivalent: [[thm-affine-scheme-ring-anti-equivalence]].

[F2] Hopf maps and group-like elements have the convention of [[def-multiplicative-type-coordinate-hopf-algebra]].

## Proof

**Given:** An affine scheme $G=\operatorname{Spec}A$ over $k$.

1.1 The ring $A\otimes_k B$ represents pairs of maps from $A,B$ into any commutative $k$-algebra: the unique map is $a\otimes b\mapsto f(a)g(b)$. Therefore $\operatorname{Spec}(A\otimes B)$ is the product of the two affine schemes. Apply F1 to multiplication, identity, and inverse. Their group diagrams reverse to exactly the coassociativity, counit, and inverse identities in F2. Conversely these identities reverse to the group diagrams, so reconstruct a group object. Maps reverse in the same manner, and the two constructions are inverse. [F1, F2, algebra]

2.1 A map $k[t,t^{-1}]\to A$ is determined by an invertible element $a$, the image of $t$. The multiplication and identity diagrams say $\Delta(a)=a\otimes a$ and $\epsilon(a)=1$. The inverse identity gives $S(a)a=1$, so every group-like element is invertible and also respects inverse. Thus characters are exactly group-like elements. Tensoring each structural map with an extension field preserves the identities and all formulas, proving base-change compatibility. [step 1.1, F2, algebra] ∎
