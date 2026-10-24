---
id: thm-hh-finite-dimensional-dual-hopf-algebra
kind: theorem
title: "The dual of a finite-dimensional Hopf algebra is a Hopf algebra"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 3
deps:
  - def-hh-hopf-algebra-and-antipode
  - def-hh-scalar-and-tensor-conventions
  - lem-hh-tensor-coherence-on-elementary-tensors
  - thm-hh-finite-algebra-coalgebra-duality
  - lem-hh-finite-tensor-duality-and-canonical-coevaluation
  - def-hh-bialgebra-and-bialgebra-map
  - lem-hh-counit-uniqueness-and-finite-sweedler-calculus
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Kalle Kytölä, Introduction to Hopf algebras and representations, §§3.8–3.9"
      url: "https://www.math.csi.cuny.edu/abhijit/iiser2018/reading/Hopf-lecture_notes.pdf"
      locator: "Complete 91-page notes; §§3.8–3.9, printed pp.47–52, especially Theorems 3.45–3.46 on restricted-dual coalgebra and Hopf structures."
---

## Statement

Let $k$ be a field and $H=(H,m,u,\Delta,\varepsilon,S)$ a finite-dimensional Hopf $k$-algebra. Give $H^*=\operatorname{Hom}_k(H,k)$ the transposed Hopf structure: multiplication is convolution,
$$
(\phi\psi)(h)=(\phi\otimes\psi)(\Delta(h)),
$$
the unit is $\varepsilon$, coproduct is the transpose $m^*:H^*\to H^*\otimes H^*$ under finite tensor duality, the counit is $\phi\mapsto\phi(1_H)$, and the antipode is $S^*(\phi)=\phi\circ S$. Then $H^*$ is a Hopf algebra. No bijectivity assumption on $S$ is required.

## Facts & Assumptions

**Given:** A field $k$ and a finite-dimensional Hopf $k$-algebra $H$, with the structural maps in the Statement.

[F1] [[def-hh-hopf-algebra-and-antipode]]: a Hopf algebra is a bialgebra with antipode $S$ satisfying both convolution equations; no bijectivity is required.

[F2] [[thm-hh-finite-algebra-coalgebra-duality]]: for finite-dimensional algebras and coalgebras, full duality transposes multiplication/unit and coproduct/counit, reverses structure maps, and identifies each object with its bidual.

[F3] [[lem-hh-finite-tensor-duality-and-canonical-coevaluation]]: for finite-dimensional $V,W$, $V^*\otimes W^*\cong(V\otimes W)^*$, and the isomorphism is induced by $(f\otimes g)(v\otimes w)=f(v)g(w)$.

[F4] [[def-hh-bialgebra-and-bialgebra-map]]: $\Delta$ and $\varepsilon$ are unital algebra maps, and the tensor-product algebra uses $(a\otimes b)(c\otimes d)=ac\otimes bd$.

[F5] [[lem-hh-counit-uniqueness-and-finite-sweedler-calculus]]: Sweedler notation records a finite tensor expression, and every contraction is a well-defined linear map on that tensor.

## Proof

**Proof technique:** direct.

1.1 Since $H$ is finite-dimensional, [F3] identifies $(H\otimes H)^*$ with $H^*\otimes H^*$; thus for each $\phi\in H^*$, the transpose $m^*(\phi)$ is a tensor $\sum_i\phi_i\otimes\psi_i$ characterized by $\phi(ab)=\sum_i\phi_i(a)\psi_i(b)$. The same finite tensor duality for $H\otimes H$ permits transposing every structural identity in [F1] and [F2]. [given, F1, F2, F3]

2.1 The convolution product on $H^*$ is associative: evaluating $(\phi\psi)\theta$ and $\phi(\psi\theta)$ on $h$ gives respectively $\sum\phi(h_1)\psi(h_2)\theta(h_3)$ through the two iterated coproducts of $H$, which agree by coassociativity; the counit identities make $\varepsilon$ its left and right unit. [given, F1, F5, step 1.1, algebra]

2.2 The coproduct $m^*$ on $H^*$ is coassociative because evaluating $(m^*\otimes\mathrm{id})m^*(\phi)$ and $(\mathrm{id}\otimes m^*)m^*(\phi)$ on $a\otimes b\otimes c$ gives $\phi((ab)c)$ and $\phi(a(bc))$, equal by associativity of $H$; evaluation at $1_H$ is a two-sided counit by $1_Ha=a=a1_H$. [given, F2, step 1.1, algebra]

2.3 The coproduct on $H^*$ preserves convolution products: for $\phi,\psi\in H^*$ and $a,b\in H$, $\Delta_{H^*}(\phi\psi)(a\otimes b) =(\phi\psi)(ab) =\sum \phi(a_1b_1)\psi(a_2b_2) =\bigl(\Delta_{H^*}(\phi)\Delta_{H^*}(\psi)\bigr)(a\otimes b),$ where the second equality uses that $\Delta_H$ is an algebra map. Finite tensor duality makes equality on all $a\otimes b$ equality of tensors. [given, F1, F2, F4, F5, step 1.1, algebra]

3.1 The unit $\varepsilon_H$ is group-like for $\Delta_{H^*}$, since $\varepsilon_H(ab)=\varepsilon_H(a)\varepsilon_H(b)$; the counit $\phi\mapsto\phi(1_H)$ preserves convolution products because $\Delta_H(1_H)=1_H\otimes1_H$. Thus the maps in the Statement make $H^*$ a bialgebra. [step 2.1, step 2.2, step 2.3, F4, given, algebra]

4.1 Define $S^*(\phi)=\phi\circ S$. If $\Delta_{H^*}(\phi)=\sum_i\phi_i\otimes\psi_i$, then for $h\in H$, $\bigl(S^*(\phi_{(1)})\phi_{(2)}\bigr)(h) =\sum_{(h),i}\phi_i(S(h_1))\psi_i(h_2) =\sum_{(h)}\phi(S(h_1)h_2) =\varepsilon(h)\phi(1_H).$ The last equality is the left antipode equation in [F1]; this is the left antipode equation for $S^*$ in $H^*$. [given, F1, F5, step 1.1, step 3.1]

5.1 Likewise, $\bigl(\phi_{(1)}S^*(\phi_{(2)})\bigr)(h) =\sum_{(h),i}\phi_i(h_1)\psi_i(S(h_2)) =\sum_{(h)}\phi(h_1S(h_2)) =\varepsilon(h)\phi(1_H),$ using the right antipode equation in [F1]. Both convolution equations hold, so $S^*$ is an antipode on $H^*$, and no step uses $S^{-1}$. [given, F1, F5, step 1.1, step 3.1, step 4.1] ∎
