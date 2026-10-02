---
id: rem-duality-trace-normalization
kind: remark
title: "Normalization of the trace for Serre duality on a curve"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-canonical-line-bundle-curve
  - def-cech-cochain-complex-open-cover
  - def-field-norm-and-trace
  - def-residue-pairing-principal-parts
  - def-residue-rational-differential-curve-point
  - def-smooth-projective-dualizing-line-bundle-and-trace
  - lem-curve-closed-subsets-finite
  - lem-principal-parts-cech-h1-presentation
  - lem-proper-cohomology-field-extension
  - lem-regular-immersion-local-to-global-ext-collapse
  - lem-residue-pairing-descends-cohomology
  - lem-smooth-projective-embedding-gysin-trace-compatibility
  - lem-smooth-projective-rational-point-koszul-residue-normalization
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - thm-ext-is-hom-in-the-derived-category
  - thm-field-norm-and-trace-by-embeddings
  - thm-global-residue-theorem-algebraic-curve
  - thm-h0-structure-sheaf-proper-curve
  - thm-primitive-element-theorem-for-finite-separable-extensions
  - thm-serre-duality-curves-line-bundles
  - thm-serre-duality-smooth-projective-variety-locally-free-sheaves
  - thm-trace-form-is-nondegenerate-iff-separable
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Tate, Residues of differentials on curves, Ann. Sci. E.N.S. (4) 1 (1968) 149-159"
      url: "http://www.numdam.org/article/ASENS_1968_4_1_1_149_0.pdf"
    - title: "Joseph Lipman, Residues, duality, and the fundamental class of a scheme-map (2011)"
      url: "https://www.math.purdue.edu/~lipman/papers/Algecom.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
verification:
  precheck: n/a

---

## Remark

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited from the
fixed-trace, duality, cohomology and residue suppliers below. Let $C$ be a
smooth proper geometrically integral curve over a perfect field $k$, and put $\omega_C=\Omega^1_{C/k}$
([[def-canonical-line-bundle-curve]]). The trace $t_C$ is fixed by the
projective Gysin construction in
[[def-smooth-projective-dualizing-line-bundle-and-trace]] and the published
smooth-projective duality theorem
([[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]). It is
not selected after a residue formula is chosen.

The functional
$$t_C^{\rm res}(\xi)=\sum_{p\in C}\operatorname{res}_p(\xi_p),\qquad \xi\in H^1(C,\omega_C),$$
is well defined on principal-parts classes by the global residue theorem and
[[lem-residue-pairing-descends-cohomology]]. The comparison proved in
[[thm-serre-duality-curves-line-bundles]] is
$t_C=-t_C^{\rm res}$ over perfect fields. In outline, published duality
applied to $\mathcal O_C$ and $H^0(C,\mathcal O_C)=k$ give
$\dim_kH^1(C,\omega_C)=1$. At a closed point $p$ with $L=\kappa(p)$, choose
$a\in L$ with $\operatorname{Tr}_{L/k}(a)\ne0$. After extension to an
algebraic closure $K$, the finite separable algebra splits as
$L\otimes_kK\cong\prod_{\sigma:L\hookrightarrow K}K$. On each resulting
rational point, the point-last ordered Čech boundary of $u^{-1}du$ has raw
Koszul cocycle $e_u\mapsto+du$. The fixed-Gysin trace-one point class has
cocycle $e_u\mapsto-du$. The one-point sheaf-Ext spectral-sequence argument
in the cited theorem proves this comparison in global
$\operatorname{Ext}^1_{\mathcal O_C}(\kappa(x),\omega_C)$, not merely after
localization. Thus the positive Yoneda boundary is the negative of the
trace-one point class, with exactly one sign conversion. Trace base change
then gives
$t_C(\delta_p(a t^{-1}dt))=-\sum_\sigma\sigma(a)
=-\operatorname{Tr}_{L/k}(a)$, while the coefficient-trace residue sum is
$+\operatorname{Tr}_{L/k}(a)$. This nonzero class spans
$H^1(C,\omega_C)$, proving the asserted negative comparison without a free
scalar choice.

The residue realization for general invertible $\mathcal L$ is also proved
there: multiplication by a section of $\omega_C\otimes\mathcal L^{-1}$
forms a commutative diagram between the $\mathcal L(D)$ and $\omega_C(D)$
Cartier-twist exact sequences. Naturality identifies the lower connecting
class with cup product, and the local residue formula evaluates it. Thus the
fixed-trace pairing is the negative of the positive residue pairing.
The coefficient-trace assertion here is scoped to perfect $k$, where every
closed-point residue extension is separable; the fixed Gysin trace itself is
defined over arbitrary fields.

The residue-field-valued coefficient residue $\operatorname{Res}_p$ satisfies $\operatorname{Res}_p(t^{-1}dt)=1\in\kappa(p)$. The $k$-valued residue used here is $\operatorname{res}_p=\operatorname{Tr}_{\kappa(p)/k}\circ\operatorname{Res}_p$, so $\operatorname{res}_p(t^{-1}dt)=\operatorname{Tr}_{\kappa(p)/k}(1)=[\kappa(p):k]\cdot1_k$; it equals $1$ at a $k$-rational point, and may be zero when the characteristic divides the residue degree. Tate’s curve residue results supply
the finite-extension trace formulas. The comparison of this local residue
orientation with this library’s fixed projective Gysin orientation is the
explicit Koszul and Čech calculation above; a computation on $\mathbf P^1$
alone would not establish the comparison on an arbitrary curve.
