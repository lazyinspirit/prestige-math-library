---
id: def-arithmetic-genus-proper-curve
kind: definition
title: "Genus and arithmetic genus of a curve"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - cor-projective-cohomology-finite-dimensional-field
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-dimension
  - def-dimension-noetherian-topological-space
  - def-euler-characteristic-coherent-sheaf
  - def-finite-type-finite-presentation-module-sheaf
  - def-locally-noetherian-and-noetherian-scheme
  - def-noetherian-topological-space
  - def-proper-morphism
  - def-quasi-coherent-module-scheme
  - def-sheaf-cohomology-derived-global-sections
  - lem-field-is-noetherian
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-noetherian-topological-space-dimension-vanishing
  - thm-h0-structure-sheaf-proper-curve
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
---

## Definition

Assume the Axiom of Choice for the coherence and cohomology routes below
([[def-axiom-of-choice]]); it supplies Dependent Choice where the proper
cohomology-finiteness route requires it
([[thm-choice-implies-dependent-implies-countable-choice]]).

Let $k$ be a field and let $C$ be a smooth proper geometrically connected
curve over $k$ ([[def-algebraic-curve-over-field]]). Its **genus** is
$$ g(C):=h^1(C,\mathcal O_C)=\dim_k H^1(C,\mathcal O_C), $$
the $k$-dimension of the degree-one sheaf cohomology of the structure sheaf
([[def-sheaf-cohomology-derived-global-sections]], [[def-dimension]]). The
structure sheaf is coherent: it is quasi-coherent of finite type on the
locally Noetherian scheme $C$
([[def-quasi-coherent-module-scheme]],
[[def-finite-type-finite-presentation-module-sheaf]],
[[def-locally-noetherian-and-noetherian-scheme]],
[[thm-coherent-sheaves-abelian-noetherian-scheme]]). Since $C$ is proper,
coherent cohomology is finite-dimensional over $k$
([[def-proper-morphism]],
[[cor-projective-cohomology-finite-dimensional-field]]). By
[[thm-h0-structure-sheaf-proper-curve]] one has $H^0(C,\mathcal O_C)=k$,
so
$$ g(C)=1-\chi(\mathcal O_C), $$
where $\chi(\mathcal O_C)=h^0(C,\mathcal O_C)-h^1(C,\mathcal O_C)$ is the
Euler characteristic of the coherent sheaf $\mathcal O_C$
([[def-euler-characteristic-coherent-sheaf]],
[[def-coherent-module-scheme]]). Thus $g(C)$ is a finite integer.

For any integral proper finite-type $k$-scheme $X$ whose underlying
Noetherian topological space has dimension one, define the **arithmetic
genus**
$$ p_a(X):=1-\chi(\mathcal O_X)=h^1(X,\mathcal O_X)-h^0(X,\mathcal O_X)+1. $$
The structure sheaf $\mathcal O_X$ is coherent: $X$ is locally Noetherian
because a field is Noetherian and finite-type algebras over it are Noetherian;
it is quasi-compact because it is proper, and $\mathcal O_X$ is
quasi-coherent of finite type
([[def-locally-noetherian-and-noetherian-scheme]],
[[lem-field-is-noetherian]],
[[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]],
[[def-proper-morphism]], [[def-quasi-coherent-module-scheme]],
[[def-finite-type-finite-presentation-module-sheaf]],
[[thm-coherent-sheaves-abelian-noetherian-scheme]]). Proper cohomology
finiteness makes $H^0(X,\mathcal O_X)$ and $H^1(X,\mathcal O_X)$ finite-
dimensional over $k$
([[cor-projective-cohomology-finite-dimensional-field]]). The Noetherian
topological-space dimension theorem gives
$H^q(X,\mathcal O_X)=0$ for every $q\ge2$, since $\dim X=1$
([[def-noetherian-topological-space]],
[[def-dimension-noetherian-topological-space]],
[[thm-noetherian-topological-space-dimension-vanishing]]). Hence
$\chi(\mathcal O_X)$ is the finite integer
$h^0(X,\mathcal O_X)-h^1(X,\mathcal O_X)$, and so is $p_a(X)$
([[def-euler-characteristic-coherent-sheaf]]). This definition requires only
integrality, properness, finite type, and dimension one; $X$ need not be
smooth or geometrically integral.

For a smooth proper geometrically connected curve $C$, the two invariants
agree, $p_a(C)=g(C)$, because $H^0(C,\mathcal O_C)=k$ by
[[thm-h0-structure-sheaf-proper-curve]]. The arithmetic genus is defined for
singular integral proper curves as well, while $g(C)$ is the
smoothness-dependent invariant.
