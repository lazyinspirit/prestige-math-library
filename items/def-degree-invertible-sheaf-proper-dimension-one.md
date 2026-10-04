---
id: def-degree-invertible-sheaf-proper-dimension-one
kind: definition
title: "Degree of an invertible sheaf on a proper one-dimensional scheme"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-dimension-noetherian-topological-space
  - def-euler-characteristic-coherent-sheaf
  - def-field
  - def-invertible-sheaf
  - def-locally-free-sheaf-finite-rank
  - def-locally-noetherian-and-noetherian-scheme
  - def-proper-morphism
  - thm-coherent-sheaves-abelian-noetherian-scheme
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "The Stacks Project, Varieties, Section 33.44 (Degrees on curves)"
      url: "https://stacks.math.columbia.edu/tag/0AYQ"
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
---

## Definition

Assume the Axiom of Choice, inherited from the Euler-characteristic supplier
below ([[def-axiom-of-choice]]). Let $k$ be a field ([[def-field]]) and let $C$
be a proper $k$-scheme ([[def-proper-morphism]]) whose underlying topological
space is Noetherian of dimension at most one
([[def-dimension-noetherian-topological-space]],
[[def-locally-noetherian-and-noetherian-scheme]]). Write $\chi(-,-)$ for the
Euler characteristic of coherent sheaves on a proper $k$-scheme
([[def-euler-characteristic-coherent-sheaf]]).

**Degree of an invertible sheaf.** For an invertible $\mathcal O_C$-module
$\mathcal L$ ([[def-invertible-sheaf]]) set
$$\deg_C(\mathcal L):=\chi(C,\mathcal L)-\chi(C,\mathcal O_C)\in\mathbb Z.$$

**Degree of a finite locally free sheaf.** For a locally free
$\mathcal O_C$-module $\mathcal E$ of finite constant rank $n\ge 0$
([[def-locally-free-sheaf-finite-rank]]) set
$$\deg_C(\mathcal E):=\chi(C,\mathcal E)-n\,\chi(C,\mathcal O_C)\in\mathbb Z.$$

**Well-definedness and immediate values.**

- The structure sheaf, its dual, and every invertible or locally free
  finite-rank module on $C$ are coherent, so the Euler characteristic applies.
  Indeed $C$ is of finite type over the field $k$, hence every affine chart of
  $C$ is a spectrum of a Noetherian ring
  ([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]],
  [[def-locally-noetherian-and-noetherian-scheme]]), so $C$ is locally
  Noetherian; on a locally Noetherian scheme the coherent modules are exactly
  the finite-type quasi-coherent modules
  ([[thm-coherent-sheaves-abelian-noetherian-scheme]]), and
  $\mathcal O_C$ and every invertible or finite locally free module are
  quasi-coherent of finite type ([[def-coherent-module-scheme]],
  [[def-invertible-sheaf]], [[def-locally-free-sheaf-finite-rank]]). Each
  alternating sum in the definition is therefore finite and defines an integer
  ([[def-euler-characteristic-coherent-sheaf]]).
- Both expressions depend only on the isomorphism class of the sheaf: an
  isomorphism of coherent sheaves induces isomorphisms on all cohomology
  groups ([[def-euler-characteristic-coherent-sheaf]]), so the Euler
  characteristic, and with it each degree, is an isomorphism invariant. In
  particular the degree is a function on isomorphism classes, hence on
  $\operatorname{Pic}(C)$, and on the isomorphism classes of finite locally free
  modules; the rank alone does not determine their degree.
- $\deg_C(\mathcal O_C)=\chi(C,\mathcal O_C)-\chi(C,\mathcal O_C)=0$, and
  $\deg_C(\mathcal E)=0$ for every finite locally free $\mathcal E$ of rank
  $0$, since such a module is the zero sheaf and $\chi(C,0)=0$.
- If $C=\varnothing$, then $H^q(C,\mathcal F)=0$ for every coherent
  $\mathcal F$ and every $q\ge0$ and $\chi(C,\mathcal F)=0$
  ([[def-euler-characteristic-coherent-sheaf]]); every degree above is
  therefore $0$.

The dimension bound at most one records that the base is a curve: the
definition is applied below to proper curves and to effective Cartier divisors
on surfaces, and the degree of a curve in the sense of
[[def-degree-divisor-proper-curve]] agrees with it on smooth proper
geometrically integral curves by [[thm-euler-characteristic-degree-shift-curve]].
