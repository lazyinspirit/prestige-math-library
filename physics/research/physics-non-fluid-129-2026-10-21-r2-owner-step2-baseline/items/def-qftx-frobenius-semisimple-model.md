---
id: def-qftx-frobenius-semisimple-model
kind: definition
title: "Semisimple closed two-dimensional TQFT data"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
deps: [thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras]
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: "The classification input inherits AC_omega only through its boundary-relative surface normal-form supplier; the finite algebra calculation below uses no choice."
proof_strategy: direct
sources:
  references:
    - title: "Joachim Kock, Frobenius algebras and 2D topological quantum field theories (short version)"
      url: "https://ncatlab.org/nlab/files/Kock-FrobAlgTQFT-short.pdf"
      locator: "§§1.3.5–1.3.20 and 3.1.12–3.1.13 (PDF pp. 14–20, 34–36), for the closed surface normal form, Frobenius generators and relations, and closed TQFT classification."
    - title: "Joachim Kock, Frobenius Algebras and 2D Topological Quantum Field Theories (Cambridge book excerpt)"
      url: "https://assets.cambridge.org/97805218/32670/excerpt/9780521832670_excerpt.pdf"
      locator: "Excerpt pp. 1–7: closed TQFTs as symmetric monoidal functors, the closed cobordism generators, and the Frobenius-algebra classification. This excerpt gives a proof sketch, not the book's full proof."
    - title: "Aaron D. Lauda and Hendryk Pfeiffer, Open-closed strings: Two-dimensional extended TQFTs and Frobenius algebras, arXiv:math/0510664v3"
      url: "https://arxiv.org/pdf/math/0510664v3"
      locator: "§§3.3–3.7 and 4 (PDF pp. 18–42), for the open-closed generators, normal form, symmetric monoidal equivalence, and closed-sector Corollary 4.6."
verification:
  precheck: pass
---

## Definition

Fix an integer $r\ge1$ and let $A=\bigoplus_{i=1}^{r}\mathbb C e_i$, with coordinatewise multiplication $e_i e_j=\delta_{ij}e_i$ and unit $1_A=\sum_{i=1}^{r}e_i$. Choose weights $w_i\in\mathbb C^\times$ and define $\epsilon(e_i)=w_i$ and $\Delta(e_i)=w_i^{-1}e_i\otimes e_i$. The Frobenius pairing $b(a,b)=\epsilon(ab)$ is diagonal in the basis $(e_i)$ with entries $w_i$; $\Delta$ is the inverse-pairing comultiplication. These maps define a finite-dimensional commutative Frobenius algebra over $\mathbb C$.

A **closed oriented two-dimensional TQFT** here is a strong symmetric monoidal functor from $\mathsf{Cob}^{\mathrm{cl}}_2$ to $\mathrm{Vect}_{\mathrm{fd}}(\mathbb C)$. The objects of $\mathsf{Cob}^{\mathrm{cl}}_2$ are finite ordered words of oriented circles; its morphisms are compact oriented smooth surfaces with parametrized incoming and outgoing circle boundaries and no free boundary, modulo orientation-preserving diffeomorphism relative to those boundary parameterizations. Composition is collar gluing and the monoidal operation is ordered disjoint union. The supplied closed classification associates to $(A,\mu,\eta,\Delta,\epsilon)$ a closed oriented two-dimensional TQFT. Put $H=\mu\circ\Delta$. For the connected closed surface $\Sigma_g$ of genus $g\ge0$, it assigns $Z_A(\Sigma_g)=\epsilon(H^g(\eta(1)))$; the cylinder acts by $1_A$.

This is a closed-sector construction. It asserts no open sector, Cardy datum, or fully extended point-level theory. Countable choice is inherited only through the root surface-normal-form input to the classification.

## Definition references

[[thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras]]

## Facts & Assumptions

**Given:** $r\ge1$, the basis $e_1,\ldots,e_r$, the nonzero weights $w_1,\ldots,w_r$, and the four displayed structure maps in the Definition.

[A1] $A$ is the finite direct sum of $r$ copies of $\mathbb C$ with coordinatewise multiplication, so its dimension is exactly $r$ and $e_i e_j=\delta_{ij}e_i$.

[F1] [[thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras]]: over any field, finite-dimensional commutative Frobenius algebras correspond to strong symmetric monoidal functors on the closed oriented two-dimensional cobordism category.

[F2] [[thm-closed-oriented-two-dimensional-tqfts-are-commutative-frobenius-algebras]]: a connected closed surface of genus $g$ is evaluated by the counit after $g$ copies of $H=\mu\Delta$ after the unit; the arity-one cylinder conventions are identities.

## Proof

1.1 Coordinatewise multiplication is associative and commutative, and $1_A=\sum_i e_i$ is a unit because $e_i1_A=e_i$. The pairing matrix is $\operatorname{diag}(w_1,\ldots,w_r)$, whose determinant $\prod_i w_i$ is nonzero since every $w_i\ne0$; hence $b(a,b)=\epsilon(ab)$ is nondegenerate. [given, A1, algebra]

1.2 The formulas for $\Delta$ and $\epsilon$ are linear maps. For each $i$, both counit composites give $w_i^{-1}\epsilon(e_i)e_i=e_i$, and both coassociative composites give $w_i^{-2}e_i\otimes e_i\otimes e_i$. On a basis tensor $e_i\otimes e_j$, each of the two Frobenius composites and $\Delta\mu$ equals $0$ if $i\ne j$ and equals $w_i^{-1}e_i\otimes e_i$ if $i=j$. By bilinearity the counit, coassociativity, and Frobenius identities hold on all inputs, so these maps form a commutative Frobenius algebra. [given, A1, algebra]

2.1 Apply [F1] to the finite-dimensional commutative Frobenius algebra established in steps 1.1–1.2. The resulting functor has the genus-$g$ evaluation and cylinder action stated in the Definition by [F2]; no positivity or open-sector hypothesis is used. [given, F1, F2, step 1.1, step 1.2] ∎

## Sewing diagram

The following typed composition displays the handle operator used by the classification: $\Delta$ splits one state into two tensor factors and $\mu$ joins those factors. The diagram records the map types and composition only; the algebraic identities and surface classification above establish the result independently of the drawing.

```tikzcd
A \arrow[r,"\\Delta"] & A\otimes A \arrow[r,"\\mu"] & A
```
