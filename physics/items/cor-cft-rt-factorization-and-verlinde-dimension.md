---
id: cor-cft-rt-factorization-and-verlinde-dimension
kind: corollary
title: CFT conformal-block dimensions from the VOA modular functor
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 17
domain: mathematics
library: mathematics
deps:
- def-cft-strong-rational-voa
- def-cft-modular-functor-and-sewing
- def-cft-modular-functor-equivalence
- def-modular-ribbon-category-and-hopf-link-data
- thm-cft-conformal-blocks-form-modular-functor
- thm-cft-strongly-rational-module-category-is-modular
- thm-cft-conformal-block-modular-functor-is-rt
- lem-modular-hom-state-spaces-have-exact-sewing-inverses
- thm-weighted-rt-tqft-and-factorization
- def-axiom-of-choice
- def-countable-choice
dependency_roles:
  def-cft-strong-rational-voa: mathematical-premise
  def-cft-modular-functor-and-sewing: mathematical-premise
  def-cft-modular-functor-equivalence: mathematical-premise
  def-modular-ribbon-category-and-hopf-link-data: mathematical-premise
  thm-cft-conformal-blocks-form-modular-functor: mathematical-premise
  thm-cft-strongly-rational-module-category-is-modular: mathematical-premise
  thm-cft-conformal-block-modular-functor-is-rt: mathematical-premise
  lem-modular-hom-state-spaces-have-exact-sewing-inverses: mathematical-premise
  thm-weighted-rt-tqft-and-factorization: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
  - title: Chiara Damiolini and Lukas Woike, Modular Functors from Conformal Blocks
      of Rational Vertex Operator Algebras
    url: https://arxiv.org/pdf/2507.05845v2
    locator: Theorems 4.2.2, 5.3.1, and 5.5.1; Section 5.4 comparison limits.
  - title: Adrien Brochier and Lukas Woike, A Classification of Modular Functors via
      Factorization Homology
    url: https://arxiv.org/pdf/2212.11259v5
    locator: Theorem 6.8 and Sections 8.1–8.2, for the genus-zero classification and
      modular-category extension.
  - title: Bojko Bakalov and Alexander Kirillov Jr., Lectures on Tensor Categories
      and Modular Functor, Chapter 5
    url: https://www.math.stonybrook.edu/~kirillov/tensor/chapter5.ps.gz
    locator: Sections 5.1–5.2 and 5.7, for modular-functor sewing, torus conventions,
      and central extensions. Preliminary lecture-note version.
---

## Statement

Assume full AC and its inherited countable-choice consequences AC$_\omega$, exactly as in the weighted RT theorem and torus/state-dimension corollary. Let $V$ be strongly rational in the shared five-condition convention, let $(g,n)$ be stable with $2g-2+n>0$, and let $i_1,\ldots,i_n$ be simple labels of the modular fusion category induced from its genus-zero conformal-block sewing data. Under the exact coinvariant modular-functor hypotheses and the corresponding modular-functor-to-RT comparison, the rank of the genus-$g$, $n$-point conformal-block bundle equals the RT state-space dimension and is

$$\operatorname{rk}\mathbb V_{g,n}(i_1,\ldots,i_n)=\dim V^{\mathrm{RT}}(\Sigma_g;i_1,\ldots,i_n)=\sum_{x\in I}S_{0x}^{\,2-2g-n}\prod_{r=1}^{n}S_{i_rx}.$$

The formula uses the same label duals, boundary order, and normalized $S$ matrix on both sides; it has no inserted complex conjugation.

## Statement references

[[def-cft-strong-rational-voa]]

[[def-cft-modular-functor-and-sewing]]

[[def-cft-modular-functor-equivalence]]

[[def-modular-ribbon-category-and-hopf-link-data]]

[[thm-cft-conformal-blocks-form-modular-functor]]

[[thm-cft-strongly-rational-module-category-is-modular]]

[[thm-cft-conformal-block-modular-functor-is-rt]]

[[lem-modular-hom-state-spaces-have-exact-sewing-inverses]]

[[thm-weighted-rt-tqft-and-factorization]]

[[def-axiom-of-choice]]

[[def-countable-choice]]

## Facts & Assumptions

**Given:** A strongly rational VOA $V$, a stable pair $(g,n)$, its stated simple labels, and full AC with the inherited AC$_\omega$ premise. The complete VOA and RT comparison suppliers are used with the same labels, duals and anomaly convention.

[F1] [[def-cft-strong-rational-voa]]: strong rationality is the five-condition conjunction; it does not itself assert finite-rank coinvariant bundles or modularity of a module category.

[F2] [[thm-cft-conformal-blocks-form-modular-functor]]: coinvariant sheaves form the $\mathsf{Surf}_{c/2}$ modular functor, with the actual finite-category pairing, stable-curve descent, Hodge action, propagation, normalization/formal sewing and coherence.

[F3] [[thm-cft-strongly-rational-module-category-is-modular]]: the category induced from those genus-zero data is a modular fusion category, with its actual rigidity, ribbon duality and nondegenerate Hopf matrix.

[F4] [[thm-cft-conformal-block-modular-functor-is-rt]]: the coinvariant modular functor is equivalent to the RT-type modular functor of that induced category; its local classification supplier gives the complete cyclic identification, common extension and scalar framing pushout.

[F5] [[def-cft-modular-functor-equivalence]]: an equivalence supplies isomorphisms on every labeled surface value and commutes with the modular-functor operations.

[F6] [[def-modular-ribbon-category-and-hopf-link-data]] fixes the pivotal trace, Hopf-link matrix, normalized $S$ convention, and dual-label notation.

[F7] [[lem-modular-hom-state-spaces-have-exact-sewing-inverses]] proves, for the actual modular-category Hom state spaces and their fixed tensor order, the full dimension formula displayed in the Statement, including exceptional spheres and empty label lists.

[F8] [[thm-weighted-rt-tqft-and-factorization]] constructs the weighted RT modular functor and its factorization maps under full AC and inherited AC$_\omega$; its weight anomaly is separate from vector-space dimensions.

[F9] [[def-axiom-of-choice]] states that every family of nonempty sets has a choice function. [[def-countable-choice]] states the corresponding countable choice principle AC$_\omega$.

## Proof

1.1 F2 supplies the finite-rank conformal-block bundle and F3 supplies its induced modular fusion category. The stated full AC and inherited countable choice are exactly the hypotheses of F8; no additional supplier conclusion is assumed. [given, F1, F2, F3, F8, F9, algebra]

2.1 The comparison F4, in the precise sense of F5, identifies their vector-space values after the specified extension pullbacks. Each comparison in that zigzag is an isomorphism on a fixed surface value; it changes the anomaly presentation, not its dimension. Thus the finite bundle rank equals its fiber dimension and equals the RT state-space dimension, with the same label and dual conventions. [F2, F4, F5, step 1.1, algebra]

3.1 F7 computes that RT Hom-space dimension by the displayed sum in the fixed normalized categorical S convention. F6 retains its pivotal trace and tensor order; the formula has no complex conjugation. F8–F9 supply precisely the inherited choice context. This proves the unchanged Statement. No character-S identification or full local CFT is used. [F6, F7, F8, F9, step 2.1, algebra] ∎

## Scope

This is a chiral conformal-block rank and RT vector-space dimension statement. The anomaly acts on the mapping-class extension and contributes no additional dimension factor.
