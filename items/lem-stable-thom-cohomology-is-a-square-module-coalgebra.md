---
id: lem-stable-thom-cohomology-is-a-square-module-coalgebra
kind: lemma
title: "Stable Thom cohomology is a square-module coalgebra"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - thm-admissible-square-algebra-is-a-connected-bialgebra
  - def-whitney-sum-coalgebra-on-stable-unoriented-thom-cohomology
  - lem-stable-squares-on-universal-thom-classes
  - thm-steenrod-squares-are-well-defined-and-natural
  - thm-cartan-formula-for-steenrod-squares
  - thm-external-product-and-whitney-sum-formulas-for-thom-classes
  - lem-whitney-sum-coalgebra-is-well-defined-on-stable-thom-cohomology
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "§12, printed pp. 22–24: Cartan compatibility for the Thom cohomology coproduct."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. For a∈A and m∈M, the stable Steenrod action and Whitney-sum coproduct satisfy Δ_M(a·m)=Δ_A(a)·Δ_M(m), where A acts diagonally on M⊗M. The counit is compatible with the action, so M is an A-module coalgebra.

## Facts & Assumptions

**Given:** AC; the stable Thom cohomology module $M=\widehat H^*(TO;\mathbb F_2)$ with its Whitney-sum coproduct $\Delta_M$ from [[def-whitney-sum-coalgebra-on-stable-unoriented-thom-cohomology]]; the connected bialgebra $\mathcal A$ of square operations with coproduct $\Delta_{\mathcal A}$; and the componentwise stable square action of [[lem-stable-squares-on-universal-thom-classes]].

[F1] The Whitney-sum coproduct is induced by the finite-rank direct-sum Thom pullbacks, and the stable-square lemma gives the componentwise action with the compatibility identities ([[lem-whitney-sum-coalgebra-is-well-defined-on-stable-thom-cohomology]], [[lem-stable-squares-on-universal-thom-classes]], [[def-whitney-sum-coalgebra-on-stable-unoriented-thom-cohomology]]).

[F2] Squares are natural and satisfy the Cartan formula, so on external products they split as sums of componentwise squares; the bialgebra coproduct of the square algebra is $\Delta_{\mathcal A}(Sq^k)=\sum_{i+j=k}Sq^i\otimes Sq^j$ ([[thm-steenrod-squares-are-well-defined-and-natural]], [[thm-cartan-formula-for-steenrod-squares]], [[thm-admissible-square-algebra-is-a-connected-bialgebra]]).

[F3] The bialgebra coproduct is multiplicative and unital, so the tensor action respects composition and the unit; positive-degree action raises degree, while degree-zero action is scalar. These elementary checks give the diagonal action and counit identities below; AC fixes the module presentational choices ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 For x∈M, take its sufficiently high finite-rank components x_n. The Whitney coalgebra is induced by the finite-rank direct-sum Thom pullback μ*, so naturality gives Δ_M(Sq^k x)=μ*(Sq^k x)=Sq^k(μ* x). Write μ*x under the Künneth isomorphism as a finite sum Σx_a⊗y_b. Cartan gives $Sq^k(x_a\times y_b)=\sum_{i+j=k}Sq^i(x_a)\times Sq^j(y_b)$. [given, F1, F2]

2.1 Therefore Δ_M(Sq^k x)=Σ_{i+j=k}(Sq^i⊗Sq^j)Δ_M(x) =Sq^k·Δ_M(x), where the last action is the diagonal A-action defined from Δ_A(Sq^k). This is the required compatibility for the generators. For a product ab∈A, Δ_A(ab)=Δ_A(a)Δ_A(b); the module law on M and the already-verified generator compatibility give Δ_M((ab)x)=(ab)·Δ_M(x). Extend by linearity to all a∈A. The diagonal action is unital because $\Delta_A(1)=1\otimes1$; its composition law follows by expanding $\Delta_A(ab)=\Delta_A(a)\Delta_A(b)$ and using the action law in each factor. For homogeneous $a,m$, $\varepsilon_M(am)=\varepsilon_A(a)\varepsilon_M(m)$: both sides vanish if either degree is positive, and in total degree zero this is the scalar-action identity. Linearity gives the same conclusion for all inputs. Thus all hypotheses involving the action and coproduct are satisfied. [step 1.1, F2, F3] ∎
