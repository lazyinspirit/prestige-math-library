---
id: def-upper-global-basis-by-the-contravariant-form
kind: definition
title: "The upper (form-dual) global basis and the required perfectness of the integral pairing"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lower-global-basis-of-a-quantum-highest-weight-module, thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis, def-the-bar-lattice-and-integral-lattice-of-a-based-module, def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half, thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral, def-contravariant-form-on-an-integrable-quantum-highest-weight-module, lem-crystal-lattice-polarizations-are-perfect-at-q-zero]
justified_by: []
aliases: []
landmark: false
dependency_level: 15
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Mathematical Journal 63 (1991), 465–516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§5.1–5.2, printed pp. 503–506 (PDF pp. 39–42): the polarization and its positive definiteness, Proposition 5.1.3 (the maximality characterizations $L(\\infty)=\\{u:(u,u)\\in A\\}$), Proposition 5.2.1 ((P^*,Q^*)=(P,Q)) and Proposition 5.2.4; §6.1, Corollary 6.1.2 and the conjecture on B(infty)^* following it."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "§§1.2.2–1.2.3 printed3/PDF12 specifies the Lusztig half form, whose root-color factor differs from the Kashiwara form. The actual restricted graded dual lattice, inverse-field-Gram construction and upper bar are proved locally; no lower A-self-duality is attributed to Chapters14/23."
    - title: "Jonathan Brundan, Dual Canonical Bases and Kazhdan–Lusztig Polynomials, arXiv:math/0509700v2 (Transform. Groups 14 (2009), 535–558)"
      url: "https://arxiv.org/pdf/math/0509700v2"
      locator: "§§4–5, printed pp. 10–18: upper and lower global crystal lattices, the dual canonical basis of the type-A modules and the triangular monomial orders; §3, printed p. 8, for the dictionary with [L, 27.3.1]."
---

## Definition

Let $M=\bigoplus_\mu M_\mu$ be $U_q^-$ or an integrable highest weight module $V(\lambda)$, with finite root or label components, lower global $A$-lattice $M_A=\bigoplus_\mu(M_A)_\mu=\bigoplus_{b\in\mathcal B}AG(b)$ of [[def-lower-global-basis-of-a-quantum-highest-weight-module]] with rational lower charts $L_0$, $L_\infty=\psi(L_0)$ of the balanced triple [[def-balanced-triple-and-globalization-map]], and let $B$ be the normalized homogeneous Kashiwara half form, respectively the contravariant polarization of [[def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half]], [[thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral]] and [[def-contravariant-form-on-an-integrable-quantum-highest-weight-module]].

The **restricted graded integral form-dual** of $M_A$ is
$$M_A^\vee:=\bigoplus_\mu\{x\in M_\mu:B(x,(M_A)_\mu)\subseteq A\},$$
the direct sum being taken over weight components so that ordinary (not product) duals of the infinite-dimensional pieces are used; the **dual rational charts** are
$$L_0^\vee:=\bigoplus_\mu\{x\in M_\mu:B(x,(L_0)_\mu)\subseteq A_0\},\qquad L_\infty^\vee:=\bigoplus_\mu\{x\in M_\mu:B(x,(L_\infty)_\mu)\subseteq A_\infty\}.$$
The **upper global family** is the unique homogeneous field family $G^{\mathrm{up}}(b)$ ($b\in\mathcal B$) determined by the inverse Gram system
$$B(G(b'),G^{\mathrm{up}}(b))=\delta_{b,b'}\qquad(b,b'\in\mathcal B_\mu);$$
it is defined componentwise by finite-dimensional linear algebra because each component form is nondegenerate. The **upper bar** $\psi^\vee$ is the $B$-adjoint semilinear involution characterized by $B(\psi u,\psi^\vee v)=\overline{B(u,v)}$, and the **upper Kashiwara operators** are the adjoints $\tilde e_i^{\mathrm{up}}:=(\tilde f_i^{\mathrm{low}})^{\mathrm{adj}}$ and $\tilde f_i^{\mathrm{up}}:=(\tilde e_i^{\mathrm{low}})^{\mathrm{adj}}$, defined componentwise by the same nondegenerate finite-dimensional forms; they are in general distinct from the lower operators.

The upper zero chart is the dual chart $L_0^\vee$, and after the grand loop its perfection identifies it with $L_0$; the upper infinity chart $L_\infty^\vee$ is not automatically the lower bar chart $L_\infty$, and no such identification is asserted. Existence of the upper family in the integral lattices, weightwise perfect $A$-duality, dual globalization in these genuine dual charts and crystal compatibility for the adjoint operators are the exact conclusions of [[thm-upper-and-lower-global-bases-are-dual-and-crystal-compatible]]; adjacent divided-string formulas of the next lemma supply the adjoints of the lower string shifts with their weights, so no unweighted adjunction, no full product identification $M_A^\vee=\operatorname{Hom}_A(M_A,A)$, no lower $A$-self-duality, no ordinary-bar fixedness and no unqualified upper/lower operator equality is assumed here.

