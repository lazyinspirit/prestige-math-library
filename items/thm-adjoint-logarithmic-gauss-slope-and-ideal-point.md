---
id: thm-adjoint-logarithmic-gauss-slope-and-ideal-point
kind: theorem
title: "Adjoint logarithmic Gauss slope on an affine character component"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 12
deps:
  - lem-adjoint-twisted-slope-is-rational-on-a-character-component
  - def-character-variety-logarithmic-slope-invariant
  - def-knot-a-polynomial
  - def-adjoint-twisted-homology-and-culler-shalen-data
  - lem-generic-adjoint-peripheral-kernel-is-the-logarithmic-conormal-line
  - lem-logarithmic-ideal-point-limits-and-lattice-fixed-peripheral-slopes
justified_by: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the generic representation, local-coefficient duality, normalization and valuation-extension suppliers; no additional choice principle is introduced."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Léo Bénard, Vincent Florens, and Adrien Rodau, A slope invariant and the A-polynomial of knots, Theorems 1.3 and 1.5 and §§4–5"
      url: "https://arxiv.org/html/2103.14151"
    - title: "Marc Culler and Peter B. Shalen, Varieties of group representations and splittings of 3-manifolds, §2.1, Theorems 2.1.1–2.1.2 and Proposition 2.3.1, pp. 123–126"
      url: "https://marc-culler.info/static/home/papers/CharacterVarieties.pdf"
---

## Statement

Assume full AC. Let $X$ be an irreducible one-dimensional character component whose peripheral eigenvalue image is a curve component $A_X(M,L)=0$ of the ordinary A-polynomial. At a smooth point where $M,L\ne0$, $\partial_M A_X\ne0$, and $\partial_L A_X\ne0$, the rational adjoint-twisted slope is
$$s_K=-\frac{M}{L}\frac{\partial_M A_X}{\partial_L A_X}.$$
If $x$ is an ideal point of the smooth projective completion of this curve and the associated Culler-Shalen construction yields an essential surface of boundary slope $r$ in the fixed meridian-longitude convention, the limiting slope at $x$ is $-r$.

## Statement references

[Bénard, Florens, and Rodau, Theorems 1.3 and 1.5 and §§4–5](https://arxiv.org/html/2103.14151)

[Culler and Shalen, §2.1 and Proposition 2.3.1, pp. 123–126](https://marc-culler.info/static/home/papers/CharacterVarieties.pdf)

## Facts & Assumptions

**Given:** Full AC, a one-dimensional character component, an admissible generic locus, its peripheral eigenvalue curve, and an ideal point with the associated surface specified in the statement.

[F1] The rationality lemma supplies this projective extension on components containing irreducible characters when its stated dense scheme-smooth, non-boundary-parabolic admissible locus is nonempty. Its hypotheses are not automatic for every component in the present Statement. The generic word-chain calculation in [F3] proves the needed rational extension on the specified curve components; its Proof8.1 handles the reducible-only component explicitly, where the peripheral curve is $L=1$ and the slope is zero. Thus the rationality lemma is used only within its stated scope, and it independently records the corresponding extension when that scope applies. [[lem-adjoint-twisted-slope-is-rational-on-a-character-component]]

[F2] The Bénard–Florens–Rodau convention orders the boundary basis as $(v\otimes\lambda,v\otimes\mu)$ and defines $s=-b/a$ for a kernel generator $a(v\otimes\lambda)+b(v\otimes\mu)$ ([[def-character-variety-logarithmic-slope-invariant]]).

[F3] [[lem-generic-adjoint-peripheral-kernel-is-the-logarithmic-conormal-line]] gives the actual generic representation, rank-one peripheral inclusion, differentiated word-chain functional, and the projective identity $s=[-M(A_X)_M:L(A_X)_L]$. It explicitly includes infinite slopes and requires no cotangent-space identification or scheme-reducedness premise.

[F4] [[lem-logarithmic-ideal-point-limits-and-lattice-fixed-peripheral-slopes]] constructs finite-field extending valuations, proves the logarithmic projective limit at a peripheral-curve ideal point, and proves the boundary-slope equality for an actual supplied equivariant inverse-image witness. It does not supply that witness or identify a character ideal point with a peripheral ideal point.

[F5] **External input (Culler–Shalen, §2.1 and Proposition 2.3.1, pp. 123–126).** For a discretely valued field, the rank-two lattice graph is a tree, and the induced $SL_2$ action yields the stabilizer splitting. For a compact orientable three-manifold with a nontrivial splitting, Proposition 2.3.1 produces incompressible, non-boundary-parallel surfaces whose fundamental-group images are contained in edge groups. Such groups are contained in vertex stabilizers of the same action. These are properties of the associated construction, including its final incompressible surfaces, rather than consequences of the local definition. We import these results; the proof of Proposition 2.3.1 itself invokes Hempel, Lemma 6.5, for the incompressibility homotopy, which is not reconstructed here. [Culler and Shalen, §2.1 and Proposition 2.3.1](https://marc-culler.info/static/home/papers/CharacterVarieties.pdf)

## Proof

1.1 **The rational affine identity.** By [F3], the actual generic peripheral inclusion kernel, in the ordered basis [F2], is the kernel of $(a,b)\mapsto a\,\mathrm dL/L+b\,\mathrm dM/M$. Its dimension is one, and the differential pair is nonzero. Differentiating $A_X(M,L)=0$ gives $$L(A_X)_L\,\mathrm dL/L+M(A_X)_M\,\mathrm dM/M=0.$$ Therefore [F2] and [F3] give the projective rational slope $[-M(A_X)_M:L(A_X)_L]$. Its affine ratio at the stated smooth point is $-M(A_X)_M/(L(A_X)_L)$, since the denominator there is nonzero. The rational extension is the one constructed by [F3]; where [F1]'s hypotheses hold, it agrees with the extension recorded there. This identity therefore includes its values wherever that displayed denominator is nonzero and does not rely on an unproved identification of exceptional pointwise homology kernels. [F1, F2, F3, given, algebra]

1.2 **The peripheral ideal point and its actual valuation.** The curve whose completion occurs in the second clause is the preceding peripheral curve $A_X(M,L)=0$. Use its normalized affine open and the actual local DVR at its stipulated ideal point $x$, with valuation $v$. By [F4], $(v(L),v(M))\ne(0,0)$: if both coordinates were units, their affine coordinate ring and its integral closure would lie in the local DVR, and separatedness would put its center in that normalized affine open, contrary to idealness. The actual generic representation and common peripheral eigenline may be taken over a finite extension of this peripheral function field by [F3]: its field is finitely generated of transcendence degree one and finite over the field generated by the nonconstant coordinates $M,L$. By [F4] the valuation extends to this finite field, or to any further finite field used by the stipulated construction, with restriction $e v$ for an integer $e>0$. Thus no valuation on the representation field is merely assumed to exist. [F3, F4, given, construct, algebra]

2.1 **The associated surface group fixes a lattice vertex.** Use the valuation and representation field of step 1.2 for the associated construction. The resulting lattice action is nontrivial: if the whole group fixed a vertex, [F4] applied separately to $lambda$ and $mu$ would give $v(L)=v(M)=0$, contrary to step 1.2. The exterior is compact and orientable, so [F5] applies to its stabilizer splitting. Each final associated surface component has fundamental-group image in an edge group, hence in a vertex stabilizer. A boundary circle representing the primitive class $a[lambda]+b[mu]$ lies in that surface group. Transport to the peripheral basepoint conjugates both its element and its fixed vertex, so $
ho(lambda^amu^b)$ fixes a lattice vertex. Its eigenvalue on the common peripheral line is $L^aM^b$. By [F4] this eigenvalue has valuation zero and therefore $$a,v(L)+b,v(M)=0.$$ This uses the carrying property of the final associated surface itself; it does not assume a supplied transverse inverse-image map or a particular boundary-preserving compression sequence. The Statement remains conditional on an associated essential surface with the asserted boundary slope. [F4, F5, step 1.2, given, algebra]

3.1 **Evaluate the projective limit, including infinity.** By [F4], the rational logarithmic pair $[\mathrm dL/L:\mathrm dM/M]$ has value $[v(L):v(M)]$ at $x$. More explicitly, with a uniformizer $t$ and $D=\mathrm d/\mathrm dt$, writing $f=t^{v(f)}u$ gives $t Df/f=v(f)+t Du/u$, where $D$ preserves the actual local ring; the unit term vanishes on reduction. The valuation pair is nonzero by step 1.2. Its relation in step 2.1 identifies its projective line as $[-b:a]$. By step 1.1 this logarithmic pair is the rational slope, so its limiting value is $-b/a=-r$ in the fixed convention. The same homogeneous computation gives $0$ when $b=0$ and $\infty$ when $a=0$; neither case requires division by a zero valuation. All assertions of the Statement follow. [F1, F2, F3, F4, step 1.1, step 1.2, step 2.1, algebra] ∎
