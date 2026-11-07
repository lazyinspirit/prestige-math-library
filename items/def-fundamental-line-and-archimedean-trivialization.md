---
id: def-fundamental-line-and-archimedean-trivialization
kind: definition
title: "Fundamental Determinant Line and Its Archimedean Trivialization"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 19
deps:
  - def-grothendieck-motive-of-a-newform-and-realizations
  - def-motivic-cohomology-of-a-modular-motive
  - def-gillet-soule-height-pairing-and-motivic-regulator-determinant
  - def-determinant-line-of-a-perfect-complex
  - def-l-function-and-analytic-rank-of-modular-motive
  - def-borel-regulator-of-a-number-field
  - thm-borel-regulator-dedekind-zeta-value-rationality
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
proof_strategy: not-applicable
sources:
  references:
    - title: "M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version"
      url: "https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf"
      locator: "§§2.6–2.20, 2.36–2.56, 4.14–4.15, 5.4–5.9; definitions, conjectures, and Theorems 5.24, 5.29, 5.37 and 5.42."
    - title: "Charles A. Weibel, The K-book: An Introduction to Algebraic K-Theory, textbook"
      url: "https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf"
      locator: "Chapter IV §1 and §6.3.2; Quillen K-theory and determinant conventions."
    - title: "Armand Borel, Cohomologie de SL_n et valeurs de fonctions zêta aux points entiers"
      url: "https://www.numdam.org/item/ASNSP_1977_4_4_4_613_0.pdf"
      locator: "§§4–6, Theorem 6.2 and §6.4; stable-cohomology comparison and regulator normalization."
---

## Definition

Let $M=M(f)(k/2)$ be the central motive over its coefficient field $F$, and assume that $H^1_{\mathrm{mot}}(\mathbb Q,M)$ is finite-dimensional over $F$. Write $H^1_{\mathrm{mot}}(\mathbb Q,M)^*:=\operatorname{Hom}_F(H^1_{\mathrm{mot}}(\mathbb Q,M),F)$, let $t(M)=H^1_{dR}(M)/F^0H^1_{dR}(M)$, and let $V_B^+$ be the fixed subspace of complex conjugation on the Betti realization. Define the fundamental line
$$\Delta(M):=\operatorname{Det}_F^{-1}H^1_{\mathrm{mot}}(\mathbb Q,M)\otimes_F\operatorname{Det}_F H^1_{\mathrm{mot}}(\mathbb Q,M)^*\otimes_F\operatorname{Det}_F t(M)\otimes_F\operatorname{Det}_F^{-1}V_B^+.$$
It is a one-dimensional $F$-vector space. When the height pairing is nondegenerate and the comparison maps are defined, the Betti–de Rham comparison and the height-pairing determinant give the archimedean trivialization $\theta_\infty:\Delta(M)\otimes_FF_\infty\xrightarrow{\sim}F_\infty$.

For the finite-linear normalization, write $H=H^1_{\mathrm{mot}}(\mathbb Q,M)\otimes_FF_\infty$, and let $h:H\xrightarrow{\sim}H^*$ be the map $x\mapsto\langle x,-\rangle$ supplied by the nondegenerate height pairing. Write $c_\infty:V_B^+\otimes_FF_\infty\xrightarrow{\sim}t(M)\otimes_FF_\infty$ for the induced archimedean comparison isomorphism in this trivialization. On determinant tensors the map is explicitly
$$\theta_\infty(u^{-1}\otimes v\otimes z\otimes b^{-1})=u^{-1}((\det h)^{-1}v)\,b^{-1}((\det c_\infty)^{-1}z).$$
Here inverse determinant lines mean dual lines, and $u^{-1},b^{-1}$ are covectors. Thus in bases with height Gram matrix $G$ and comparison matrix $C$, the tensor of the associated determinant generators maps to $(\det G\det C)^{-1}$. This is basis independent because it is a composition of exterior-power isomorphisms and evaluation maps; it is an isomorphism because both determinants are nonzero. The determinant of a zero-dimensional space and the empty Gram determinant are $1$. This specifies the conditional trivialization and its normalization from the supplied maps, without asserting the existence of the motivic realization, comparison or height pairing.

## Definition references

[M. Longo and S. Vigni, The Tamagawa Number Conjecture and Kolyvagin’s Conjecture for Motives of Modular Forms, published version](https://link.springer.com/content/pdf/10.1007/s40687-026-00646-7.pdf)

[Charles A. Weibel, The K-book: An Introduction to Algebraic K-Theory, textbook](https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.pdf)

[Armand Borel, Cohomologie de SL_n et valeurs de fonctions zêta aux points entiers](https://www.numdam.org/item/ASNSP_1977_4_4_4_613_0.pdf)

## Facts & Assumptions

**Given:** A central modular motive with Betti and de Rham realizations, motivic cohomology, and the determinant functor.

[F1] [[def-grothendieck-motive-of-a-newform-and-realizations]]: the Betti and de Rham realizations have their comparison maps and Hodge filtration.

[F2] [[def-motivic-cohomology-of-a-modular-motive]]: $H^1_{\mathrm{mot}}$ and the algebraic rank are defined from the projected arithmetic cycle group.

[F3] [[def-gillet-soule-height-pairing-and-motivic-regulator-determinant]]: the height regulator is the determinant of the pairing Gram matrix.

[F4] [[def-determinant-line-of-a-perfect-complex]]: determinant lines are alternating tensor products of top exterior powers.

[F5] [[def-l-function-and-analytic-rank-of-modular-motive]]: the order and leading term at the central point are defined.

[F6] [[def-borel-regulator-of-a-number-field]] and [[thm-borel-regulator-dedekind-zeta-value-rationality]]: the archimedean regulator normalization and its rational zeta-value comparison are fixed.

[A1] [[def-axiom-of-choice]]: AC supplies the Galois/motive realization data used by this item.

## Authoring status

The line formula follows Longo–Vigni Definition 2.36. The comparison trivialization is conditional on finite motivic cohomology and nondegenerate height pairing, which are separately conjectural. The finite determinant-line construction and the conditional trivialization above are specified completely relative to these data. The separate construction of modular-motive realizations, comparison maps and height pairing, and the Borel-regulator comparison theorem, are not proved or certified by this Definition. No zeta-element rationality is asserted here.
