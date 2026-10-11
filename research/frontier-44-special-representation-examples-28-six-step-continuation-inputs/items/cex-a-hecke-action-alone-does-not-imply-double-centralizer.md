---
id: cex-a-hecke-action-alone-does-not-imply-double-centralizer
kind: counterexample
title: "A Hecke action alone does not imply a double centralizer"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 33
deps: [thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer,
       def-the-type-a-finite-w-algebra-and-whittaker-category,
       def-arakawa-suzuki-casimir-operators-on-tensor-functors,
       thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations,
       def-degenerate-affine-hecke-algebra,
       def-classical-complex-matrix-lie-algebras, def-representation-of-a-lie-algebra,
       def-tensor-product-of-modules-by-generators-and-relations,
       thm-tensor-product-basis-from-bases]
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
      locator: "Introduction and Sections 2.2-2.3, printed pp. 1-3 and 8-9: the Arakawa-Suzuki action is defined for every g-module M, while the double centralizer theorem requires the truncated deformed setup; the tensor module over the pyramid is where the centralizer identities hold."
    - title: "Jonathan Brundan and Alexander Kleshchev, Representations of shifted Yangians and finite W-algebras, Mem. Amer. Math. Soc. 196 (2008), no. 918 (complete 109-page arXiv memoir)"
      url: "https://arxiv.org/pdf/math/0508003"
      locator: "Chapter 3, Section 3.2, printed pp. 30-33 and Chapter 8, Sections 8.3-8.5, printed pp. 92-96: the commuting W(lambda)- and H_d-actions whose truncated hypotheses are exactly what the counterexample isolates."
verification:
  precheck: pass
---

## Statement refuted

**Refuted claim:** if a Hecke algebra action on $M\otimes V^{\otimes d}$ is
natural in the $\mathfrak g$-module $M$ and commutes with $\mathfrak g$, then
the two double centralizer equalities
$\varphi(U(\mathfrak g))=\operatorname{End}_{H_d}(M\otimes V^{\otimes d})$ and
$\psi(H_d)=\operatorname{End}_{\mathfrak g}(M\otimes V^{\otimes d})$ hold.

## Facts & Assumptions

**Given:** The trivial module $M=\mathbb C^2$, the natural module $V=\mathbb C^2$, the tensor product $M\otimes V$ with basis $u_a\otimes v_b$ ([[thm-tensor-product-basis-from-bases]], [[def-tensor-product-of-modules-by-generators-and-relations]]), and the Casimir operator $x_1=\Omega^{M,V}$.

[F1] On $M\otimes V$ the Casimir acts as $\Omega^{M,V}=\sum_{i,j}\rho_M(E_{ij})\otimes\rho_V(E_{ji})$; since $\rho_M=0$, $x_1=0$ ([[def-arakawa-suzuki-casimir-operators-on-tensor-functors]], [[def-classical-complex-matrix-lie-algebras]]).

[F2] The natural action of $\mathfrak{gl}_2$ on $M\otimes V$ has image $1\otimes M_2(\mathbb C)\subseteq M_4(\mathbb C)$, of dimension $4$; the dimension and the surjectivity of $U(\mathfrak{gl}_2)\to M_2(\mathbb C)$ are standard for the natural module ([[def-classical-complex-matrix-lie-algebras]], [[def-representation-of-a-lie-algebra]]).

## Counterexample

Let $\mathfrak g=\mathfrak{gl}_2(\mathbb C)$
([[def-classical-complex-matrix-lie-algebras]]), let $M=\mathbb C^2$ be the
trivial $\mathfrak g$-module (all matrix units act by $0$), let $V=\mathbb C^2$
be the natural module
([[def-representation-of-a-lie-algebra]]), and let $d=1$. The Arakawa-Suzuki
construction of [[def-arakawa-suzuki-casimir-operators-on-tensor-functors]]
provides an action of $H_1=\mathbb C[x_1]$
([[def-degenerate-affine-hecke-algebra]]) on
$M\otimes V\cong\mathbb C^4$ commuting with $\mathfrak{gl}_2$
([[thm-the-casimir-and-place-permutation-operators-satisfy-degenerate-affine-hecke-relations]]).

**Proof technique:** direct.

**Given:** The operators and modules of the Counterexample.

1.1 The Hecke action. By [F1] the generator $x_1$ acts as $0$ on $M\otimes V$, so the $H_1$-action is the evaluation action $x_1\mapsto0$ (the quotient $H_1/(x_1)=\mathbb C$ of [[def-degenerate-affine-hecke-algebra]] specialized to the scalar $0$). [F1, algebra]

2.1 The first centralizer. Since $H_1$ acts by the scalars $\mathbb C$ on the four-dimensional space, $\operatorname{End}_{H_1}(M\otimes V)=\operatorname{End}_{\mathbb C}(\mathbb C^4)=M_4(\mathbb C)$, of dimension $16$. [step 1.1, algebra]

3.1 The image of the enveloping algebra. By [F2] the image of $U(\mathfrak{gl}_2)$ in $\operatorname{End}(M\otimes V)$ is the subalgebra $1\otimes M_2(\mathbb C)$, of dimension $4$. Hence the first double centralizer equality fails by a factor of $4$ in dimension. [F2, step 2.1, algebra]

4.1 The second centralizer. The $\mathfrak{gl}_2$-endomorphisms of $M\otimes V$ are $M_2(\mathbb C)\otimes1$, of dimension $4$, while $\psi(H_1)=\mathbb C\cdot\mathrm{id}$ has dimension $1$; hence the second equality also fails. The missing hypothesis is the truncated/deformed setup: the double centralizer theorem applies to the finite-W-algebra tensor space $V_c^{\otimes d}$ over a pyramid (equivalently, to $U(\mathfrak g^e)$ with the truncated polynomial algebra $\mathbb C_l[x_1,\dots,x_d]\rtimes\mathbb C[S_d]$), where the Hecke action is the cyclotomic quotient action and the algebra on the opposite side is the finite W-algebra, not $U(\mathfrak g)$ itself ([[thm-the-finite-w-and-degenerate-cyclotomic-hecke-actions-satisfy-double-centralizer]], [[def-the-type-a-finite-w-algebra-and-whittaker-category]]). [F2, step 3.1, given] ∎

## Remarks

- The example is not a counterexample to the higher-level Schur-Weyl theorem; it shows exactly that a natural commuting Hecke action on an arbitrary tensor module is not sufficient, and that the truncation (the deformed tensor space over a pyramid) is a needed hypothesis.

- The trivial module is legitimate as an input to the Arakawa-Suzuki construction: the construction assigns an $H_d$-action to every $\mathfrak g$-module $M$.
