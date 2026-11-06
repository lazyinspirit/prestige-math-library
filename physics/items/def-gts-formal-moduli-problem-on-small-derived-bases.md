---
id: def-gts-formal-moduli-problem-on-small-derived-bases
kind: definition
title: Formal moduli problem on small derived bases
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps:
- def-simplicial-object-and-simplicial-commutative-ring
- def-model-category-and-quillen-adjunction
- def-simplicial-set-homotopy-and-trivial-kan-fibration
- thm-model-structures-on-variable-simplicial-modules-and-algebras
dependency_roles:
  def-simplicial-object-and-simplicial-commutative-ring: mathematical-premise
  def-model-category-and-quillen-adjunction: mathematical-premise
  def-simplicial-set-homotopy-and-trivial-kan-fibration: mathematical-premise
  thm-model-structures-on-variable-simplicial-modules-and-algebras: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: 'Jacob Lurie, Derived Algebraic Geometry X: Formal Moduli Problems'
    url: https://www.math.ias.edu/~lurie/papers/DAG-X.pdf
    locator: Definition 0.0.8 (PDF p. 4); Proposition 1.1.11 and proof (PDF pp. 10–11); Definition 1.2.1 and Proposition 1.2.4 (PDF pp. 13–14) for the tangent spectrum and its excision structure. No formal-moduli recognition theorem is used in this definition.
  - title: 'Joost Nuiten, Lecture 8: Koszul duality for formal moduli problems'
    url: https://people.maths.ox.ac.uk/brantner/24L8.pdf
    locator: Definitions 8.2–8.3, PDF pp. 74–75
  - title: J. P. Pridham, Unifying derived deformation theories
    url: https://arxiv.org/pdf/0705.0344
    locator: Definitions 3.1, 3.3 and 3.7 (PDF pp. 29–30), for comparison with classical set-valued functors on Artinian local dg algebras; this is not the source of the simplicial-base definition.
---

## Definition

Fix a field $k$ of characteristic zero. Write $\mathrm{CAlg}^{\mathrm{sm}}_k$
for the infinity-category of small connective augmented $E_\infty$ $k$-algebras
over $k$, with its mapping spaces computed in the derived localization of
simplicial commutative $k$-algebras. Here small means: $\pi_i(R)=0$ for $i<0$
and for all sufficiently large $i$; every $\pi_i(R)$ is finite-dimensional
over $k$; and $\pi_0(R)$ is a local Artinian ring equipped with its specified
residue identification $\pi_0(R)/\mathfrak m_{\pi_0(R)}\cong k$. The augmentation is a map $R\to k$.
The notation $\pi_i$ uses homotopy grading; when represented by a nonpositive
cochain dg algebra, $\pi_i(R)=H^{-i}(R)$.

A **formal moduli problem** over $k$ is a functor
$$F:\mathrm{CAlg}^{\mathrm{sm}}_k\to\mathrm{Spaces}$$
such that $F(k)$ is contractible and such that, for every pullback square
```tikzcd
R \arrow[r] \arrow[d] & R_0 \arrow[d] \\
R_1 \arrow[r] & R_{01}
```
in which both maps $\pi_0(R_0)\to\pi_0(R_{01})\leftarrow\pi_0(R_1)$ are
surjective, the induced square
```tikzcd
F(R) \arrow[r] \arrow[d] & F(R_0) \arrow[d] \\
F(R_1) \arrow[r] & F(R_{01})
```
is a homotopy pullback of spaces. A space means a Kan complex up to weak
equivalence, and all pullbacks of spaces in this definition are homotopy
pullbacks. This is a derived, space-valued functor: it retains automorphisms
and higher homotopies and is not just the set of isomorphism classes over
ordinary Artinian rings.

Let $\mathbb E_k$ be the spectrum object in the stabilization of the category of
augmented connective $E_\infty$ $k$-algebras at $k$, corresponding under the
square-zero stabilization to the $k$-module spectrum $k$. Thus its value on
the pointed sphere $S^i$ is the square-zero algebra $k\oplus k[i]$ for
$i\ge0$. The functor $F\circ\mathbb E_k$ on finite pointed spaces is strongly
excisive: it sends the base point to the contractible space $F(k)$, and its
pullback condition follows from the formal-moduli condition above, as in
Lurie, Proposition 1.2.4. Define the **tangent spectrum** of $F$ to be the
object of spectra represented by this strongly excisive functor. Its value on
$S^i$ is the pointed space $F(k\oplus k[i])$, based at the zero section. The
scalar endomorphisms of the square-zero summand give this spectrum its
canonical $k$-module structure. Let $T_F$ be the corresponding cochain complex
of $k$-vector spaces, with $\pi_i(F\circ\mathbb E_k)\cong H^{-i}(T_F)$. With
the cohomological shift convention
$K[r]^j=K^{j+r}$, the characteristic-zero dg Lie correspondence uses
$\mathfrak g_F\simeq T_F[-1]$. No nilcompleteness condition is included for an
enlarged pro-Artinian domain; that domain requires a separately specified
completion condition.

## Definition references

[[def-simplicial-object-and-simplicial-commutative-ring]]

[[def-model-category-and-quillen-adjunction]]

[[def-simplicial-set-homotopy-and-trivial-kan-fibration]]

[[thm-model-structures-on-variable-simplicial-modules-and-algebras]]
