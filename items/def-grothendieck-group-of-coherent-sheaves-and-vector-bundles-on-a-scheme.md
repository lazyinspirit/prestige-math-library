---
id: def-grothendieck-group-of-coherent-sheaves-and-vector-bundles-on-a-scheme
kind: definition
title: "Grothendieck groups of coherent sheaves and of vector bundles on a scheme"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-grothendieck-group-of-an-essentially-small-abelian-category
  - def-locally-free-sheaf-finite-rank
  - def-locally-noetherian-and-noetherian-scheme
  - def-sheaf-tensor-product
  - lem-dual-locally-free-and-base-change
  - lem-pullback-qc-module-quasi-coherent
  - lem-tensor-qc-modules-quasi-coherent
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-cohomological-dimension-noetherian-scheme
  - thm-proper-pushforward-coherent
  - thm-serre-finiteness-projective-cohomology
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "The Stacks Project, Chow Homology and Chern Classes, Appendix B (rational equivalence and K-groups, tag 0AYD)"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Appendix 42.69; in particular the definitions of K_0(X) and K^0(X), the tensor-product ring and module structures and pullback"
    - title: "Borel and Serre, Le theoreme de Riemann-Roch (1958), §4-§5"
      url: "https://www.numdam.org/item/?id=BSMF_1958__86__97_0"
      locator: "Sections 4-5: the Grothendieck groups of coherent and of locally free sheaves, their ring structure and functoriality"
    - title: "Ravi Vakil, Math 245 Topics in Algebraic Geometry: Introduction to Intersection Theory, Class 18"
      url: "https://math.stanford.edu/~vakil/245/245class18.pdf"
      locator: "Class 18, Section 2.2: definitions of K_0 X, K^0 X, functoriality, module structure and projection formula"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the
coherent-category and higher-direct-image suppliers. Let $X$ be a locally Noetherian scheme
([[def-locally-noetherian-and-noetherian-scheme]]). Then the category of
coherent $\mathcal O_X$-modules is abelian
([[thm-coherent-sheaves-abelian-noetherian-scheme]],
[[def-coherent-module-scheme]]), and the category of finite locally free
$\mathcal O_X$-modules of locally constant rank is an exact category
([[def-locally-free-sheaf-finite-rank]]).

1. The **Grothendieck group of coherent sheaves** $K_0(X):=K_0(\operatorname{Coh}(X))$
   is the abelian group with one generator $[\mathcal F]$ for each isomorphism class of coherent
   sheaves, subject to $[\mathcal F]=[\mathcal F']+[\mathcal F'']$ for every
   short exact sequence $0\to\mathcal F'\to\mathcal F\to\mathcal F''\to0$
   ([[def-grothendieck-group-of-an-essentially-small-abelian-category]]);
   existence of the group is the group completion of the commutative monoid
   modulo the exact-sequence relations. These isomorphism classes form a set:
   on a fixed set-indexed affine cover, finite presentations give a set of
   local module models, and their overlap isomorphisms form sets; gluing
   those data gives a set of representatives. The same applies to vector
   bundles, using finite free local models.
2. The **Grothendieck group of vector bundles** $K^0(X)$ is the abelian group
   with one generator $[\mathcal E]$ for each isomorphism class of finite locally free sheaves of
   locally constant rank, subject to $[\mathcal E]=[\mathcal E']+[\mathcal E'']$
   for every exact sequence $0\to\mathcal E'\to\mathcal E\to\mathcal E''\to0$
   of such sheaves. Tensor product makes $K^0(X)$ a commutative ring with unit
   $[\mathcal O_X]$ ([[def-sheaf-tensor-product]],
   [[lem-tensor-qc-modules-quasi-coherent]]), and makes $K_0(X)$ a
   $K^0(X)$-module via $[\mathcal E]\cdot[\mathcal F]:=[\mathcal E\otimes\mathcal F]$,
   using that tensoring with a locally free sheaf is exact.
3. Every morphism $f:X\to Y$ of locally Noetherian schemes induces
   $f^*:K^0(Y)\to K^0(X)$ by pullback of locally free sheaves
   ([[lem-pullback-qc-module-quasi-coherent]],
   [[lem-dual-locally-free-and-base-change]]); flat $f$ also induces
   $f^*:K_0(Y)\to K_0(X)$.
4. Under the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the
   coherent-cohomology suppliers, if $f:X\to Y$ is proper between finite type
   schemes over a field, the higher direct images $R^qf_*\mathcal F$ are
   coherent ([[thm-proper-pushforward-coherent]]) and vanish for $q\gg0$ over
   affine opens of $Y$ ([[thm-cohomological-dimension-noetherian-scheme]],
   with the global bound $q>\dim X$); the resulting pushforward
   $f_!:K_0(X)\to K_0(Y)$ is defined in def-pushforward-in-algebraic-k-theory.
5. The natural map $K^0(X)\to K_0(X)$, $[\mathcal E]\mapsto[\mathcal E]$, is
   well defined and additive; under the same Axiom of Choice premise it is an
   isomorphism when $X$ is a regular quasi-projective scheme of finite type
   over a field (lem-k-zero-vector-bundles-versus-coherent-sheaves).
