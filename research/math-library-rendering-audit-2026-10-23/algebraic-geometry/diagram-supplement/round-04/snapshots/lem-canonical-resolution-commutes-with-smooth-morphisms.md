---
id: "lem-canonical-resolution-commutes-with-smooth-morphisms"
kind: "lemma"
title: "Canonical resolutions commute with smooth morphisms"
status: published
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 13
deps:
  - "lem-ag-geometrically-regular-fibres-local-presentation"
  - "def-axiom-of-choice"
  - "def-canonical-resolution-invariants"
  - "def-etale-morphism-schemes"
  - "def-marked-ideal"
  - "def-multiple-test-blowup-and-controlled-transform"
  - "def-relative-dimension-smooth-morphism"
  - "def-smooth-morphism-schemes"
  - "lem-coefficient-ideal-under-smooth-morphisms"
  - "lem-etale-commutativity-of-companion-step"
  - "lem-etale-commutativity-of-maximal-order-case"
  - "lem-homogenized-ideal-under-smooth-morphisms"
  - "lem-order-and-snc-under-smooth-morphisms"
  - "lem-smooth-pullback-of-multiple-test-blowups"
  - "prop-canonical-resolution-of-marked-ideals"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
    - title: "Dan Abramovich, Michael Temkin and Jaroslaw Wlodarczyk, Functorial embedded resolution via weighted blowings up, Algebra & Number Theory 18 (2024) 1557-1587; arXiv:1906.07106"
      url: "https://arxiv.org/pdf/1906.07106"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

Let $(\mathcal I,E,\mu)$ be a marked ideal with $\mu\ge1$ and with $\mathcal I$ not identically zero on any irreducible component of the smooth finite-type $K$-scheme $X$, and let $\varphi\colon X'\to X$ be a smooth morphism of relative dimension $n$ with $X'$ of finite type over $K$ ([[def-smooth-morphism-schemes]], [[def-relative-dimension-smooth-morphism]]).
Let $(X_i)$ be the canonical resolution of $(\mathcal I,E,\mu)$ ([[prop-canonical-resolution-of-marked-ideals]]).
Then:
(1) $\varphi^*(X_i)$ is an extension of the canonical resolution of $\varphi^*(\mathcal I,E,\mu)$, locally obtained by pulling back the centers on $X\times\mathbb A^n$ along an étale factorization of $\varphi$;
(2) for every $x'\in\operatorname{supp}(\varphi^*(\mathcal I_i,\mu))$ the invariants agree:
$$\operatorname{inv}(\varphi_i(x'))=\operatorname{inv}(x'),\qquad \nu(\varphi_i(x'))=\nu(x'),\qquad \rho(\varphi_i(x'))=\rho(x').$$

## Facts & Assumptions

**Given:** Assume AC. A marked ideal $(\mathcal I,E,\mu)$ with $\mu\ge1$ and generic nonvanishing on every component of a smooth finite-type $K$-scheme $X$, and a smooth morphism $\varphi\colon X'\to X$ of relative dimension $n$ with $X'$ of finite type over $K$.

[A1] [[def-axiom-of-choice]]: AC is used through the coefficient-ideal smooth-pullback equality in [F4].

[F1] [[def-smooth-morphism-schemes]], [[lem-order-and-snc-under-smooth-morphisms]]: smooth morphisms preserve orders, hence supports, and [[lem-ag-geometrically-regular-fibres-local-presentation]] factors a smooth germ locally as an étale morphism $U'\to X\times\mathbb A^n$ followed by the projection. At each point the local ring map is flat and local, hence faithfully flat: every proper ideal extends into the target maximal ideal, and flatness preserves injections of nonzero cyclic modules. Thus the pullback of a nonzero ideal stalk remains nonzero; in particular $\varphi^*\mathcal I$ is generically nonzero on every irreducible component of $X'$. The explicit finite-type hypothesis on $X'$ and the constant relative dimension over the pure-dimensional marked-ideal ambient $X$ make $X'$ a smooth pure-dimensional finite-type ambient, satisfying the resolution proposition's hypotheses.

[F2] [[lem-smooth-pullback-of-multiple-test-blowups]]: the pullback of the canonical resolution of $\mathcal I$ is a multiple test blow-up of $\varphi^*\mathcal I$, and if the original resolves then so does the pullback.

[F3] [[prop-canonical-resolution-of-marked-ideals]], [[lem-etale-commutativity-of-maximal-order-case]], [[lem-etale-commutativity-of-companion-step]]: the canonical resolution is natural under étale morphisms, with equality of the invariants; its derivative operations commute with pullback, and its homogenization and coefficient operations do so on their maximal-order inputs, in particular on the positive-residual-order companions.

[F4] [[lem-coefficient-ideal-under-smooth-morphisms]], [[lem-homogenized-ideal-under-smooth-morphisms]]: under AC, coefficient ideals commute with smooth pullback; homogenizations also commute with smooth pullback.

[F5] [[def-canonical-resolution-invariants]]: the invariants determine the centers, so equality of invariants for the induced and the canonical resolution suffices for them to coincide up to extension.

## Proof

1.1 The projection case: direct branches. For $\pi\colon X\times\mathbb A^n\to X$, induct on the dimension of the base $X$, for all positive-marked, componentwise generically nonzero inputs. Dimension zero has empty support. Consider first a maximal-order pass of the algorithm in [F3]. Orders and boundary counts agree under projection by [F1], and boundary strata pull back to their products with $\mathbb A^n$. In the contained-stratum Step 1aa, containment in the support is preserved and reflected by this surjective projection. The stratum is regular and SNC with the boundary; its blowup and controlled division commute with projection by [F2]. Both sides give it the same encoded count/infinity primary value, $\nu=0$ and $\rho=\varnothing$. Its restricted ideal may be zero, so no lower-dimensional induction is used here. In the nonboundary Step 1ba, the isolated codimension-one support components likewise pull back to their products. The proposition proves their SNC with the current boundary and their local equation $\mathcal J=(u^\mu)$; the labelled Cartier blowup divides by $u^\mu$ and gives the unit ideal near the component on both sides. Its encoded infinity branch and zero auxiliary values therefore agree directly. [A1, F1, F2, F3]

2.1 The projection case: inductive branches and general inputs. After the contained strata are removed, each retained boundary-stratum restriction is generically nonzero; after the codimension-one components are removed, the coefficient restriction to each maximal-contact hypersurface is generically nonzero. Indeed, the support identities in the proposition identify these restricted supports with proper subsets of their respective components. Projection preserves these identities, and the products of the components remain generically outside the restricted supports. These restrictions have base dimension smaller than $\dim X$, so induction now compares their resolutions with their products, including all three invariants. The homogenization and coefficient operations commute with projection by [F4]; derivatives in the new coordinates add no generators, since local extended ideals are generated by functions from $X$ and Leibniz's rule differentiates only their coefficients in those directions. The chosen maximal-contact hypersurfaces can therefore be their products, and [F3] ensures independence of those choices. For a general input, the monomial exponents, residual orders and threshold subsets are unchanged by projection, so companion passes reduce to the compared maximal-order passes and the monomial branch has identical values and centers. The proposition's successive assignment transports the remaining values through unchanged lifts on both sides. Thus at every stage $\operatorname{inv}_{\pi^*\mathcal I}(z)=\operatorname{inv}_{\mathcal I}(\pi(z))$, and likewise for $\nu$ and $\rho$; [F5] gives the same centers, while [F2] identifies their blowups and transforms. Hence the canonical sequence is $(X_i\times\mathbb A^n)$. [A1, F1, F2, F3, F4, F5, step 1.1]

3.1 The étale case and conclusion. For an étale morphism $\psi$ this is [F3]: the induced resolution is an extension of the canonical one and the invariants agree. For a general smooth $\varphi$ with local factorization $\varphi=\pi\circ\psi$, $\psi$ étale and $\pi$ the projection, the canonical resolution of $\varphi^*\mathcal I=\psi^*\pi^*\mathcal I$ is obtained by first taking the projection case for $\pi^*\mathcal I$ and then the étale case for $\psi$; both steps preserve the invariants, so $\operatorname{inv}(\varphi(x'))=\operatorname{inv}(\pi(\psi(x')))=\operatorname{inv}(\psi(x'))=\operatorname{inv}(x')$, and analogously for $\nu$ and $\rho$. [A1, F1, F2, F3, step 2.1] ∎
