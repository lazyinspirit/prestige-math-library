---
id: def-quiver-potential-and-monodromic-vanishing-cycle-data
kind: definition
title: "Quiver potentials and on-shell monodromic coefficient data"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-quiver-representation-stacks-and-exact-sequence-correspondences
  - def-equivariant-constructible-derived-category-for-complex-algebraic-varieties
  - def-path-ring-of-a-finite-quiver-over-the-integers
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Maxim Kontsevich and Yan Soibelman, Cohomological Hall algebra, exponential Hodge structures and motivic Donaldson-Thomas invariants, §§4.7 and 7.4–7.6"
      url: "https://arxiv.org/pdf/1006.2706v2"
    - title: "Ben Davison, The critical CoHA of a quiver with potential, §§2.2–2.7 and 3.1–3.2"
      url: "https://arxiv.org/pdf/1311.7172v5"
    - title: "Yan Soibelman, Remarks on Cohomological Hall algebras and their representations, §§2.1 and 2.4"
      url: "https://www.math.ksu.edu/~soibel/COHA-modules-2-1.pdf"
---

## Definition

Assume AC as inherited from the equivariant constructible category. Let $Q$
be a finite quiver. A **quiver potential** is a finite
$\mathbb C$-linear combination of directed cycles in the path algebra
$\mathbb C Q=\mathbb C\otimes_{\mathbb Z}\mathbb ZQ$, modulo cyclic
rotation of each cycle. For a cycle
$h_1:i_0\to i_1,\ldots,h_\ell:i_{\ell-1}\to i_0$ and a representation
$X\in\operatorname{Rep}_Q(\mathbf d)$, its trace is
$\operatorname{tr}(X_{h_\ell}\cdots X_{h_1})$. Extending linearly defines
the regular function $W_{\mathbf d}$ on $\operatorname{Rep}_Q(\mathbf d)$.

This formula is well-defined modulo cyclic rotation. For linear maps
$A:U\to V$ and $B:V\to U$, the matrix-entry formula gives
$\operatorname{tr}_V(AB)=\sum_{v,u}A_{vu}B_{uv}=\sum_{u,v}B_{uv}A_{vu}=\operatorname{tr}_U(BA)$. Taking $A$ to be the first arrow map of a cycle and $B$ the product of its remaining arrow maps proves that moving the first arrow to the end leaves the trace unchanged. Under a change of vertex bases $(g_i)$, the product around a cycle based at $i_0$ changes to $g_{i_0}(X_{h_\ell}\cdots X_{h_1})g_{i_0}^{-1}$, whose trace is unchanged by the same identity. Thus $W_{\mathbf d}$ is $G_{\mathbf d}$-invariant and descends to the representation stack; differentiating this invariance shows that its critical locus is $G_{\mathbf d}$-stable.

Its critical locus $\operatorname{Crit}(W_{\mathbf d})$ is the zero scheme of the differential $dW_{\mathbf d}$.

The following is the **on-shell monodromic coefficient datum** used for a
conditional critical CoHA. For each $\mathbf d$, choose a set
$S_{\mathbf d}\subseteq\mathbb C$ containing the critical values of
$W_{\mathbf d}$, and require $S_{\mathbf a}+S_{\mathbf b}\subseteq
S_{\mathbf a+\mathbf b}$ for every pair of dimension vectors. One may always
take $S_{\mathbf d}=\mathbb C$; coefficients supported on an empty critical
fiber are zero. For each $z\in S_{\mathbf d}$, supply a bounded
$G_{\mathbf d}$-equivariant constructible complex $\Phi_{\mathbf d,z}$
supported on
$\operatorname{Crit}(W_{\mathbf d})\cap W_{\mathbf d}^{-1}(z)$, together
with a specified monodromy automorphism. Here **monodromic** means a complex
together with that chosen automorphism. At an isolated critical point, the
chosen normalization identifies its stalk with the reduced cohomology of the
local Milnor fiber, with $\widetilde H^0$ in degree zero; monodromy is
continuation around a positive loop about $z$.

The datum also specifies its coefficient category, complex-orientation shifts,
and the following operations for the exact-sequence correspondences:

1. proper pushforward along $p$ and smooth pullback along $q$;
2. an external-product (Thom–Sebastiani) isomorphism from the coefficients
   for $(\mathbf a,z_1)$ and $(\mathbf b,z_2)$ to the coefficient on the
   extension correspondence for $(\mathbf a+\mathbf b,z_1+z_2)$;
3. associativity and unit coherence of the iterated external products, and
   compatibility of all these maps with composition and proper/smooth base
   change;
4. the coefficient $\mathbb Q$ in dimension zero with its identity unit.

These clauses define the input data and required interface; they do not assert
that a canonical vanishing-cycle theory supplies it. The usual critical
vanishing-cycle complexes in monodromic mixed Hodge modules are an intended
instance, but their equivariant functoriality, orientation, and
Thom–Sebastiani compatibility are not proved by this Definition. Off-shell
rapid-decay cohomology is a different construction and is not included here.

## Remarks

This definition makes the potential, on-shell support, coefficient category,
monodromy, orientation shifts, and correspondence operations explicit. A
standard realization is a separate prerequisite recorded on the A page and in
the batch evidence.
