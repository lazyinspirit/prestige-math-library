---
id: def-algebraically-constructible-complex-of-analytic-field-sheaves
kind: definition
title: "Algebraically constructible complexes of analytic field sheaves"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-analytic-topology-and-finite-smooth-algebraic-stratifications,
       def-locally-constant-sheaf-of-finite-rank,
       def-sheaf-on-topological-space, def-presheaf-of-groups-rings-modules,
       def-module-on-ringed-space, thm-abelian-sheaves-form-abelian-category,
       def-derived-category-of-an-abelian-category]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Mark Goresky, Lecture Notes on Sheaves and Perverse Sheaves, version of June 26, 2026"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
      locator: "1(d) (local systems), 8.1-8.2 (stratifications and the frontier axiom), 9.1-9.2 (constructible sheaves and the bounded constructible derived category)"
---

## Definition

Let $X$ be a separated finite-type complex algebraic variety, i.e. a classical
algebraic variety over $\mathbb C$
([[def-classical-algebraic-prevariety-regular-maps-and-varieties]]), regarded as
a topological space with its analytic topology
([[def-analytic-topology-and-finite-smooth-algebraic-stratifications]]), and
let $k$ be a field. Write $\operatorname{Sh}_k(X)$ for the category of sheaves
of $k$-vector spaces and $k$-linear morphisms
([[def-sheaf-on-topological-space]],
[[def-presheaf-of-groups-rings-modules]], [[def-module-on-ringed-space]]); it is
an abelian category ([[thm-abelian-sheaves-form-abelian-category]]), so its
bounded derived category $D^b(\operatorname{Sh}_k(X))$ is defined with the
conventions of [[def-derived-category-of-an-abelian-category]], under the
standing smallness hypothesis recorded there.

The category $D_c^b(X;k)$ is the full subcategory of
$D^b(\operatorname{Sh}_k(X))$ consisting of the complexes $A$ satisfying:

1. $A$ is **cohomologically bounded**: $H^j(A)=0$ for $|j|$ sufficiently large;
   and
2. $A$ is **algebraically constructible**: there exists a finite smooth
   algebraic stratification with the frontier condition $\mathfrak S$ of $X$
   ([[def-analytic-topology-and-finite-smooth-algebraic-stratifications]]) such
   that for every stratum $S\in\mathfrak S$ and every integer $j$ the
   restriction $H^j(A)|_S$ is locally constant of finite rank
   ([[def-locally-constant-sheaf-of-finite-rank]]).

These are topological constructible sheaves, not coherent or quasi-coherent
sheaves. We use the shift convention of
[[def-derived-category-of-an-abelian-category]]: $H^j(A[m])=H^{j+m}(A)$. A
groupoid local system is identified with a locally constant sheaf only through
an explicit local comparison, which is not made here.

Constructibility is a condition on the cohomology sheaves of a complex, and it
is quantified existentially over finite smooth algebraic frontier
stratifications: no stratification is fixed, and no existence or
common-refinement theorem for stratifications is asserted by this definition.
Shifting replaces $H^j$ by $H^{j+m}$, which preserves cohomological boundedness
and shifts a witnessing stratification nowhere, so the class is closed under
shifts and under isomorphisms in $D^b(\operatorname{Sh}_k(X))$. No choice
principle is used.
