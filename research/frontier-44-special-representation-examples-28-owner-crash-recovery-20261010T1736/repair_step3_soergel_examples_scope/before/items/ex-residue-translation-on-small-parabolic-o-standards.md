---
id: ex-residue-translation-on-small-parabolic-o-standards
kind: example
title: "Residue translation on small parabolic category-O standards"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 27
deps:
  - thm-residue-translation-functors-give-the-integrable-fock-space-action
  - def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks
  - def-integral-parabolic-category-o-block-for-higher-level-schur-weyl-duality
  - def-higher-level-wedge-tensor-fock-module
  - thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis
  - thm-bgg-reciprocity
  - def-verma-flag-and-its-multiplicities
  - def-axiom-of-choice
  - def-crystal-graph-epsilon-phi-and-weight
  - def-kashiwara-crystal-operators
  - def-tensor-product-of-crystals
  - lem-residue-casimir-operators-give-local-affine-hecke-actions
  - lem-the-local-affine-hecke-socle-argument-for-residue-translations
  - thm-crystal-basis-tensor-product-rule
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Lemma 4.3 and Theorem 4.5 (printed pp. 19-21): the multiplicity-free parabolic Verma flag computation for $f_i,e_i$ and the crystal action on irreducibles, specialized here to the smallest two-factor case; complete passage read."
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Section 3.1, (3.6) and Theorem 3.1(iii)-(iv) (printed pp. 21-22): the functor definition, the Chevalley action and the socle/head statement; complete passage read."
---

## Example

Take $I=\{0\}$ and $\Lambda=2\Lambda_0$ in the conventions of
[[def-higher-level-wedge-tensor-fock-module]], so $F=V\otimes V$ has the four
monomials $M_{00},M_{01},M_{10},M_{11}$ and there is only the residue $0$.

On these four basis vectors the residue functors of
[[def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks]] act by
$$f_0M_{00}=M_{01}+M_{10},\qquad f_0M_{01}=f_0M_{10}=M_{11},\qquad f_0M_{11}=0,$$
$$e_0M_{11}=M_{01}+M_{10},\qquad e_0M_{01}=e_0M_{10}=M_{00},\qquad e_0M_{00}=0 .$$
In the ordered basis $(M_{00},M_{01},M_{10},M_{11})$ the commutator is
$$[e_0,f_0]=\operatorname{diag}(2,0,0,-2).$$
The source crystal has the component $00\to01\to11$ and the isolated label
$10$; the categorical residue translates of the simples have the corresponding
unique heads and socles. Outside the allowed alphabet the moves vanish. The
calculation uses generalized standards and exact functors, not labels alone.

## Facts & Assumptions

**Given:** The rank-one Fock model $I^+=\{0,1\}$, $\Lambda=2\Lambda_0$, its four monomials, the residue functors $f_0,e_0$ of [[def-residue-translation-functors-on-the-sum-of-parabolic-o-blocks]], the crystal of [[def-kashiwara-crystal-operators]] and [[def-crystal-graph-epsilon-phi-and-weight]], and the head/socle behavior of [[lem-the-local-affine-hecke-socle-argument-for-residue-translations]].

[F1] Flag action ([[lem-residue-casimir-operators-give-local-affine-hecke-actions]], [[thm-residue-translation-functors-give-the-integrable-fock-space-action]]): multiplicity-free generalized-standard flags given by the valid single-entry moves, the standard-class isomorphism, and the head/socle statement for simples.

[F2] Crystal ([[def-higher-level-wedge-tensor-fock-module]], [[def-tensor-product-of-crystals]], [[thm-crystal-basis-tensor-product-rule]]): the Fock crystal with its signature rule, components and isolated labels.

## Verification

**Proof technique:** direct.

1.1 **The moves.** Apply the Levi tensor decomposition to each one-box column and add the two valid positions: tensoring with the natural module moves an entry $0$ to $1$ in either position, giving $f_0M_{00}=M_{01}+M_{10}$; two entries equal to $1$ become a repeated column and vanish, giving $f_0M_{11}=0$; and a single entry $1$ moves to the other position, giving $f_0M_{01}=f_0M_{10}=M_{11}$. The dual functor $e_0$ is computed verbatim with the dual natural module and gives the displayed reverse moves. [F1, algebra]

1.2 **The commutator.** In the ordered basis $(M_{00},M_{01},M_{10},M_{11})$ the matrices of $f_0$ and $e_0$ are
$$f_0=\begin{pmatrix}0&0&0&0\\1&0&0&0\\1&0&0&0\\0&1&1&0\end{pmatrix},\qquad e_0=\begin{pmatrix}0&0&0&0\\0&0&0&1\\0&0&0&1\\0&0&0&0\end{pmatrix}^{\!t}=\begin{pmatrix}0&0&0&0\\0&0&0&1\\0&0&0&1\\0&0&0&0\end{pmatrix},$$
and direct multiplication gives $[e_0,f_0]=\operatorname{diag}(2,0,0,-2)$, the $\mathfrak{sl}_2$-Cartan action on the Fock basis. [F1, step 1.1, algebra]

2.1 **Crystal and head/socle comparison.** In the source crystal the signature rule cancels $-+$ pairs, so the label $10$ is isolated and the remaining component is $00\to01\to11$; by [F2] these are the Fock crystal components, and the head/socle lemma [F1] identifies the actual simple labels of the categorical translates. For instance $f_0L_{00}$ has class $2L_{01}+L_{10}$, with unique head and socle $L_{01}$ and the isolated lower-height factor $L_{10}$, rather than being a sum of its two crystal labels; the class calculation and the crystal calculation are distinct and both displayed. [F1, F2, step 1.2]

3.1 **Conclusion.** On the four standard monomials the residue functors act by the displayed moves, their commutator is $\operatorname{diag}(2,0,0,-2)$, the source crystal is $00\to01\to11$ with isolated $10$, and the categorical translates have the corresponding unique heads and socles; all computations use the actual generalized standards and exact functors. [step 1.1, step 1.2, step 2.1] ∎
