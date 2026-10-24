---
id: thm-ringel-map-embedding-and-finite-dynkin-criterion
kind: theorem
title: "The Ringel map embeds the extended positive Borel and is full Hall exactly in finite Dynkin type"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 12
deps:
  - def-axiom-of-choice
  - def-quiver-hall-positive-borel
  - def-extended-hall-algebra-and-composition-subalgebra
  - lem-finite-loopless-quiver-nilpotent-category-is-hereditary-finitary
  - thm-prime-power-numerical-serre-half-is-the-integral-specialization
  - prop-ringel-map-is-well-defined-and-has-composition-image
  - prop-green-hall-pairing-is-nondegenerate
  - lem-hall-composition-full-exactly-finite-dynkin
  - thm-prime-power-specializations-of-the-integral-quantum-half-have-a-nondegenerate-green-form
  - lem-positive-green-pairing-specializes-the-integral-half-into-the-composition-algebra
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Olivier Schiffmann, Lectures on Hall Algebras, arXiv:math/0611617v2"
      url: "https://arxiv.org/pdf/math/0611617v2"
      locator: "Theorem 3.16 and its proof, PDF pp. 39–40: Ringel–Green embedding and finite-type criterion, using Kac classification and a quantum pairing theorem."
    - title: "Claus Michael Ringel, Hall algebras and quantum groups, E.L.A.M. Lectures (1993)"
      url: "https://www.math.uni-bielefeld.de/~ringel/opus/elam.pdf"
      locator: "§4: the Hall realization and finite-type comparison."
---

## Statement

Assume the Axiom of Choice inherited from the quantum global-basis suppliers. Let $Q$ be a finite loopless quiver over $\mathbb F_q$, using finite-dimensional
nilpotent representations when $Q$ has oriented cycles. The assignment
$E_i\mapsto[S_i]$, $K_i\mapsto k_i$ embeds the extended positive Borel for
the symmetric Cartan matrix of the underlying graph into the extended Hall
algebra, with image the torus extension of the composition subalgebra. Its
positive half maps onto the full Hall algebra exactly when the underlying
graph is finite Dynkin, meaning that each connected component is a finite ADE Dynkin diagram (including the empty graph).

## Facts & Assumptions

**Given:** The finite loopless quiver, its nilpotent convention, $q=p^a$, $\nu=\sqrt q>1$, $K=\mathbb Q(\nu)$, and inherited Axiom of Choice.

[F1] The selected quiver category is a small finite-field hereditary Hall category, with $K_0=\mathbb Z^{Q_0}$ and the vertex-simple Euler values ([[lem-finite-loopless-quiver-nilpotent-category-is-hereditary-finitary]]).

[F2] The assignment on simples and torus is a well-defined bialgebra homomorphism with extended composition image ([[prop-ringel-map-is-well-defined-and-has-composition-image]]).

[F3] The numerical symmetric Serre-only half at $\nu$ is canonically the actual divided-power integral specialization at $\nu^{-1}$ after renaming the half generators; its homogeneous Green-normalized form is nondegenerate. The proof supplies numerical skew-kernel integrability and the actual-quotient Casimir argument, rather than specializing a generic determinant ([[thm-prime-power-numerical-serre-half-is-the-integral-specialization]], [[thm-prime-power-specializations-of-the-integral-quantum-half-have-a-nondegenerate-green-form]]).

[F4] That actual integral specialization surjects isometrically onto the Hall composition algebra, sending its generators to $[S_i]$ ([[lem-positive-green-pairing-specializes-the-integral-half-into-the-composition-algebra]]). The target Green form has diagonal values $1/a_M$ ([[prop-green-hall-pairing-is-nondegenerate]]).

[F5] The composition algebra equals the full Hall algebra exactly when each graph component is finite ADE, including the empty graph ([[lem-hall-composition-full-exactly-finite-dynkin]]).

[F6] The numerical extended positive Borel has the displayed torus action and homogeneous Serre presentation ([[def-quiver-hall-positive-borel]]). The extended Hall algebra uses actual left-torus normal order $k_\alpha x$, whose product scalar is $\nu^{-(\beta,\deg x)}$ ([[def-extended-hall-algebra-and-composition-subalgebra]]).



## Proof

1.1 If the vertex set is empty, the representation category has only its zero object, both presented halves are $K$, the torus is trivial, and the assignment is the identity; every assertion follows directly. Assume henceforth that the vertex set is nonempty. Let $S_\nu$ denote the numerical Serre-only positive half in [F6]. By [F3], its generator map to the actual integral-half specialization at the inverse parameter is an isomorphism; the symmetric Serre coefficients are unchanged by $\nu\leftrightarrow\nu^{-1}$. Compose with [F4] to obtain the Hall assignment $\phi:S_\nu\to C_K$. It is surjective and isometric for a nondegenerate source form. If $\phi(x)=0$, then for every $y$ in the same homogeneous component its source pairing is $(\phi(x),\phi(y))_G=0$, forcing $x=0$ by [F3]. Separate the finitely many homogeneous components for an arbitrary vector. Thus the positive Hall assignment is injective, with image exactly the composition algebra. [F3, F4, F6, algebra]

1.2 The source Borel has the actual normal-form vector space $K[\mathbb Z^{Q_0}]\otimes_K S_\nu$. Indeed, homogeneity of the Serre relations makes $x\mapsto\nu^{(\alpha,\deg x)}x$ an automorphism of $S_\nu$ for every $\alpha$; on the displayed vector space define $(K_\alpha x)(K_\beta y)=\nu^{-(\beta,\deg x)}K_{\alpha+\beta}xy$ for homogeneous $x,y$. Bilinearity of the symmetric form makes this product associative: on a triple the exponents are $-(\beta,\deg x)-(\gamma,\deg x+\deg y)$ and $-(\gamma,\deg y)-(\beta+\gamma,\deg x)$, which agree. It satisfies all relations in [F6]. Conversely moving torus letters left in that presentation defines the inverse map; both composites fix every $E_i,K_i^{\pm1}$. Thus this is an isomorphism of algebras, proving the source normal form directly. [F1, F6, construct, algebra]

2.1 By [F1] and [F6], the target has the matching vector space $K[\mathbb Z^{Q_0}]\otimes_K H$, in the same left-torus order. Under these normal forms the map of [F2] is the identity on the torus factor tensor $\phi$ of step 1.1. Write an element as a finite sum $\sum_\alpha K_\alpha x_\alpha$. If its image is zero, independence of the distinct target toral basis factors gives $\phi(x_\alpha)=0$ for every $\alpha$, and step 1.1 gives $x_\alpha=0$. The source map is therefore injective. Its image and bialgebra compatibility are those in [F2]. Every object in the selected representation category has finitely many subobjects, since its underlying vector spaces are finite sets; hence its coproduct has the ordinary finite-support tensor target. This argument requires no nondegeneracy of a torus pairing. [F1, F2, F6, step 1.1, step 1.2, algebra]

3.1 The full-Hall criterion for the positive half is [F5]. The two normal forms show that adjoining the full torus preserves equality or properness of the positive subspaces. Hence the embedding is onto the full extended Hall algebra exactly in the same componentwise finite ADE cases, including disconnected and empty quivers. The nilpotent convention is retained for every oriented-cycle case. [F5, step 1.1, step 2.1, algebra] ∎
