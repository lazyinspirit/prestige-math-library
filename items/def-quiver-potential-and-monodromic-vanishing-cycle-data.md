---
id: def-quiver-potential-and-monodromic-vanishing-cycle-data
kind: definition
title: "Quiver potentials and realized monodromic coefficient data"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-quiver-representation-stacks-and-exact-sequence-correspondences
  - def-equivariant-constructible-derived-category-for-complex-algebraic-varieties
  - def-path-ring-of-a-finite-quiver-over-the-integers
  - thm-normalized-rational-vanishing-cycles-have-coherent-operations
  - def-intrinsic-quotient-stack-borel-moore-grading
justified_by:
  - lem-standard-rational-quiver-vanishing-cycles-realize-critical-correspondences
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
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
be a finite complex quiver. A **potential** is a finite $\mathbb C$-linear
combination of directed cycles in $\mathbb C Q$, modulo cyclic rotation.
For $h_1:i_0\to i_1,\ldots,h_\ell:i_{\ell-1}\to i_0$, its trace on a
representation $X$ is $\operatorname{tr}(X_{h_\ell}\cdots X_{h_1})$.
Extending linearly defines the invariant regular function $W_{\mathbf d}$
on $X_{\mathbf d}=\operatorname{Rep}_Q(\mathbf d)$. Its critical locus is
the zero scheme of $dW_{\mathbf d}$.

An **on-shell monodromic homological coefficient datum** consists of the
following. For each dimension vector choose $S_{\mathbf d}\subset\mathbb C$
containing its critical values, with $S_{\mathbf a}+S_{\mathbf b}\subset
S_{\mathbf a+\mathbf b}$. One may take every $S_{\mathbf d}=\mathbb C$.
For every value supply a bounded equivariant constructible complex
$K_{\mathbf d,z}$ on the representation action nerve, supported on
$\operatorname{Crit}(W_{\mathbf d})\cap W_{\mathbf d}^{-1}(z)$, with an
invertible monodromy automorphism. These are PRIMARY HOMOLOGICAL
coefficients in the intrinsic grading of
[[def-intrinsic-quotient-stack-borel-moore-grading]]. They are actual
Cartesian complexes on the indicated quotient presentations; no full
six-functor category on arbitrary Artin stacks is presumed.

For the subobject-first correspondence
$B=\mathfrak M_{\mathbf a}\times\mathfrak M_{\mathbf b}
\xleftarrow q E=\mathfrak E_{\mathbf a,\mathbf b}\xrightarrow p
\mathfrak M_{\mathbf a+\mathbf b}$ and $z=z_1+z_2$, put
$r=-\chi_Q(\mathbf b,\mathbf a)$. Supply a coefficient $K_{E,z_1,z_2}$,
a smooth oriented identification and a proper coefficient morphism
$$q^*(K_{\mathbf a,z_1}\boxtimes K_{\mathbf b,z_2})[2r]\simeq K_{E,z_1,z_2},\qquad Rp_*K_{E,z_1,z_2}\longrightarrow K_{\mathbf a+\mathbf b,z}.$$
Here the smooth operation, including the nonrepresentable map $q$, is
interpreted through the affine-bundle/Levi and induced fixed-group frame
models; the datum includes compatibility with those identifications.
Require these maps to preserve monodromy and external products, to obey
proper composition and proper/smooth Cartesian pasting, and to give the
same identifications on every iterated block flag under the tensor
associator. Require $K_{\mathbf0,0}=\mathbb Q$ and the identity maps in
both endpoint correspondences; dimension-zero coefficients at other
values are zero. These are explicit coherence requirements for an
arbitrary supplied datum, not an existence axiom for vanishing cycles.
They retain arbitrary coherent coefficient complexes. In particular a
choice $\omega\otimes\Phi$ remains admissible whenever its required
operations actually exist; it is not silently identified with $D\Phi$
for arbitrary $\Phi$.

The **standard rational instance** uses the normalized functor of
[[thm-normalized-rational-vanishing-cycles-have-coherent-operations]]:
$$\Phi_{\mathbf d,z}=V_{W_{\mathbf d}-z}\mathbb Q_{X_{\mathbf d}},\qquad K_{\mathbf d,z}=D^{G_{\mathbf d}}_{X_{\mathbf d}}\Phi_{\mathbf d,z}[-2\dim G_{\mathbf d}].$$
The equivariant duality here is VARIETY normalized; the displayed extra
shift is indispensable. The positive-loop automorphism is $T$ on $\Phi$,
and the homological coefficient has contragredient transport $D(T^{-1})$.
For an isolated critical point,
$H^k(\Phi)_x=\widetilde H^{k-1}(F_x;\mathbb Q)$; reduced $H^0$ is in
degree one. This is consistent with $V_0\mathbb Q=\mathbb Q$ and the
unit. For example $x^2$ on $\mathbb A^1$ has its one-dimensional stalk
in degree one, with monodromy $-1$.

On the extension space, Thom–Sebastiani identifies the intrinsic
vanishing cycles of the RESTRICTED trace function with the smooth
pullback of the two diagonal coefficients. Proper functoriality supplies
a morphism from the total-dimension vanishing cycles to the proper
image of that extension coefficient; its dual gives the displayed
homological coefficient morphism. There is no asserted isomorphism to
the inverse image of the total-dimension coefficient. The full standard
realization, its degree and coherent operations are proved in
[[lem-standard-rational-quiver-vanishing-cycles-realize-critical-correspondences]],
recorded in `justified_by`. Mixed Hodge enrichment and off-shell
rapid-decay cohomology are not part of this rational construction.
