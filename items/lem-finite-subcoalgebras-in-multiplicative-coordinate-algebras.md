---
id: lem-finite-subcoalgebras-in-multiplicative-coordinate-algebras
kind: lemma
title: "Finite coalgebra pieces of a multiplicative coordinate algebra"
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
deps: ["def-multiplicative-type-coordinate-hopf-algebra"]
proof_strategy: direct
---

## Statement

Every finite subset of a coalgebra $A$ over a field lies in a finite-dimensional subcoalgebra $C$. If $A$ is a Hopf algebra and $A\otimes_k K\cong K[M]$ as Hopf algebras for some extension field $K$, then for every finite-dimensional subcoalgebra $C\subseteq A$ the base change $C^*\otimes_k K$ is a product of $\dim_k C$ copies of $K$.

## Facts & Assumptions

[F1] Coalgebra structure is the coassociative comultiplication and counit in [[def-multiplicative-type-coordinate-hopf-algebra]].

## Proof

**Given:** A coalgebra $A$ and a finite subset of $A$.

1.1 For $a\in A$, write $\Delta(a)=\sum_{i=1}^s v_i\otimes w_i$ with the $w_i$ linearly independent. Coassociativity, followed by coefficient functionals on the third tensor factor, shows $\Delta(v_i)\in V\otimes A$, where $V$ is the span of the $v_i$. The counit gives $a\in V$. Adding the finitely many resulting spaces gives a finite-dimensional right coideal $V$ containing the prescribed subset. In a basis $v_1,\ldots,v_d$ write $\Delta(v_j)=\sum_i v_i\otimes c_{ij}$. Coassociativity and the counit give $\Delta(c_{ij})=\sum_\ell c_{i\ell}\otimes c_{\ell j}$ and $\epsilon(c_{ij})=\delta_{ij}$. Their finite span $C$ is a subcoalgebra; applying $\epsilon$ on the first factor gives $v_j=\sum_i\epsilon(v_i)c_{ij}$, so $V\subset C$. [F1, algebra]

2.1 Inside $K[M]$, any finite-dimensional subcoalgebra $C_K$ is spanned by monomials. Indeed, if $\sum a_m e_m\in C_K$, apply the $e_m$ coefficient functional to the second tensor factor of its comultiplication; this produces $a_m e_m\in C_K$. All monomials appearing in a finite basis therefore belong to $C_K$ and span it. The dual basis consists of orthogonal idempotents, with sum the unit, because $\Delta(e_m)=e_m\otimes e_m$ and $\epsilon(e_m)=1$. Hence $(C_K)^*\cong K^d$ where $d=\dim C$, and finite dimension identifies this dual with $C^*\otimes_k K$. [step 1.1, algebra] ∎
