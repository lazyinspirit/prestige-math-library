---
id: thm-character-inner-product-computes-intertwiner-dimension
kind: theorem
title: "The class-function inner product $\\langle\\chi_V,\\chi_W\\rangle$ equals $\\dim\\operatorname{Hom}_G(W,V)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-standard-inner-product-on-complex-class-functions, lem-averaging-operator-projects-onto-the-fixed-subspace, lem-g-equivariant-maps-are-the-fixed-points-of-the-dual-tensor-representation, thm-characters-of-direct-sums-tensor-products-and-duals]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Theorem 3.8"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Section 3.2"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Statement

Let $G$ be a finite group and let $V$ and $W$ be finite-dimensional complex
representations of $G$ with characters $\chi_V$ and $\chi_W$. Then

$$\langle\chi_V,\chi_W\rangle=\dim\operatorname{Hom}_G(W,V).$$

## Facts & Assumptions

**Given:** Finite-dimensional complex representations $V$ and $W$ of a finite group $G$, with characters $\chi_V$ and $\chi_W$.

[F1] The inner product of class functions is $\langle\varphi,\psi\rangle=\frac{1}{|G|}\sum_{g\in G}\varphi(g) \overline{\psi(g)}$ ([[def-standard-inner-product-on-complex-class-functions]]).

[F2] For a finite-dimensional complex representation $U$, the averaging operator $P_U=\frac{1}{|G|}\sum_g\rho_U(g)$ has image $U^{G}$ and trace $\dim U^{G}$ ([[lem-averaging-operator-projects-onto-the-fixed-subspace]]).

[F3] The fixed points of the diagonal representation on $W^{*}\otimes V$ are exactly the intertwiners $W\to V$, so $(W^{*}\otimes V)^{G}\cong\operatorname{Hom}_G(W,V)$ ([[lem-g-equivariant-maps-are-the-fixed-points-of-the-dual-tensor-representation]]).

[F4] Characters add on direct sums, multiply on tensor products, and conjugate on duals ([[thm-characters-of-direct-sums-tensor-products-and-duals]]).

[A1] The character of a representation is by definition the trace of its action operator, $\chi_U(g)=\operatorname{tr}\rho_U(g)$.

## Proof

**Proof technique:** direct.

1.1 By [F3], $\dim\operatorname{Hom}_G(W,V)=\dim(W^{*}\otimes V)^{G}$. By [F2] applied to $U=W^{*}\otimes V$, this equals $\operatorname{tr}P_U$ for the averaging operator $P_U=\frac{1}{|G|}\sum_g\rho_{W^{*}\otimes V}(g)$. [F2, F3, given]

1.2 Trace is linear, so $\operatorname{tr}P_U=\frac{1}{|G|}\sum_{g}\operatorname{tr}\rho_{W^{*} \otimes V}(g)=\frac{1}{|G|}\sum_g\chi_{W^{*}\otimes V}(g)$, the second equality by [A1]. [A1, algebra, given]

1.3 By [F4], the tensor-product and dual clauses give $\chi_{W^{*}\otimes V}(g)=\chi_{W^{*}}(g)\chi_V(g)=\overline{\chi_W(g)} \chi_V(g)$. [F4, given]

2.1 Combining steps 1.1 through 1.3, $\dim\operatorname{Hom}_G(W,V)=\frac{1}{|G|}\sum_g\overline{\chi_W(g)} \chi_V(g)=\frac{1}{|G|}\sum_g\chi_V(g)\overline{\chi_W(g)}$, reordering the product of two complex numbers in each summand. This is $\langle\chi_V,\chi_W\rangle$ by [F1]. [F1, step 1.1, step 1.2, step 1.3, algebra] ∎
