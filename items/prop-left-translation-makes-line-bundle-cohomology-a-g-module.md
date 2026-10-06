---
id: prop-left-translation-makes-line-bundle-cohomology-a-g-module
kind: proposition
title: The cohomology of a Borel-character line bundle is a rational G-module
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps:
- lem-sections-of-an-associated-line-bundle-as-equivariant-functions
- def-borel-character-equivariant-line-bundle
- lem-semisimple-projective-orbit-flag-quotients
- thm-semisimple-flag-variety-smooth-projective
- cor-projective-cohomology-finite-dimensional-field
- def-sheaf-cohomology-derived-global-sections
- thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
- thm-affine-quasi-coherent-equivalence
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Joshua Ng (Hoi Hei Jan Sum), The Borel-Weil-Bott Theorem (Chicago REU 2015)"
      url: "https://math.uchicago.edu/~may/REU2015/REUPapers/Ng.pdf"
      locator: "Sections 3-4, printed pp. 6-11: homogeneous bundles, the G-action on sections, and induced representations"
    - title: "Xiong Rui, Borel-Weil and Borel-Weil-Bott, Lecture 1"
      url: "https://cubicbear.github.io/doc/BorelWeil.pdf"
      locator: "Sections 1.5-1.8, printed pp. 2-4: the G-equivariant structure on the associated bundle and its functoriality"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). In the setting of
[[lem-sections-of-an-associated-line-bundle-as-equivariant-functions]], the
$G$-equivariant structure of $\mathcal L_\lambda$ induces for every $i\ge0$ a
natural linear action of $G$ on $H^i(X,\mathcal L_\lambda)$; for $i=0$ it is
the left translation action on the function model, and for every
$G$-equivariant isomorphism $\phi:\mathcal L_\lambda\to\mathcal L_\mu$ the
induced maps $H^i(\phi)$ are $G$-equivariant. Each
$H^i(X,\mathcal L_\lambda)$ is a finite-dimensional rational $G$-module,
meaning that its action homomorphism $G\to\operatorname{GL}(H^i(X,\mathcal{L}_\lambda))$
is a morphism of algebraic groups, and hence differentiates to a
finite-dimensional $\mathfrak g$-module. On
$H^0(X,\mathcal L_\lambda)$ the action is left translation
$(g\cdot f)(g')=f(g^{-1}g')$ in the function model. The canonical isomorphisms
$\mathcal L_\lambda\otimes\mathcal L_\mu\cong\mathcal L_{\lambda+\mu}$ and
$\mathcal L_\lambda^\vee\cong\mathcal L_{-\lambda}$ of
[[def-borel-character-equivariant-line-bundle]] are $G$-equivariant.

## Facts & Assumptions

**Given:** The Axiom of Choice, the group $G$, its Borel $B$, the flag variety $X=G/B$, the equivariant line bundles $\mathcal L_\lambda$ and a weight $\lambda\in X^*(T)$.

[F1] Restriction along $G\to X$ identifies $H^0(X,\mathcal L_\lambda)$ with the regular functions on $G$ satisfying $f(gb)=\lambda(b)f(g)$; under this identification the $G$-action on sections induced by the equivariant structure corresponds to left translation $(g_0\cdot f)(g)=f(g_0^{-1}g)$, and the identification is natural in $\lambda$ ([[lem-sections-of-an-associated-line-bundle-as-equivariant-functions]]).

[F2] The bundle $\mathcal L_\lambda=G\times^B\mathbb C_{-\lambda}$ carries the algebraic left $G$-action $g'\cdot[g,v]=[g'g,v]$ commuting with the right $B$-action and making it a $G$-equivariant line bundle. It gives fibre maps $\Phi_g:\mathcal L_\lambda\to a_g^*\mathcal L_\lambda$ which vary algebraically in $g$ and satisfy $\Phi_{gh}=a_h^*\Phi_g\circ\Phi_h$. The canonical tensor and dual isomorphisms are induced by the corresponding identifications of one-dimensional $B$-modules, hence are $G$-equivariant ([[def-borel-character-equivariant-line-bundle]]).

[F3] $X=G/B$ is a nonempty closed irreducible smooth projective subvariety of a projective space on which $G$ acts transitively by automorphisms through a morphism $G\times X\to X$, with orbit maps $a_g:X\to X$, $x\mapsto gx$, and $X$ is the algebraic quotient of $G$ by right translation by $B$ ([[thm-semisimple-flag-variety-smooth-projective]], [[lem-semisimple-projective-orbit-flag-quotients]]).

[F4] For a proper complex scheme $X$ and a coherent sheaf $\mathcal F$, each $H^i(X,\mathcal F)$ is a finite-dimensional complex vector space, and $H^i$ is a functor on sheaves: a morphism $\phi:\mathcal F\to\mathcal G$ induces linear maps $H^i(\phi)$, with $H^i(\mathrm{id})=\mathrm{id}$ and $H^i(\psi\circ\phi)=H^i(\psi)\circ H^i(\phi)$ ([[cor-projective-cohomology-finite-dimensional-field]], [[def-sheaf-cohomology-derived-global-sections]]).

[F5] Since $X$ is projective and $G$ is affine, choose a finite affine open cover $U_1,\ldots,U_r$ of $X$ with affine finite intersections; the product cover $G\times U_1,\ldots,G\times U_r$ has the same properties on the quasi-compact separated scheme $G\times X$. For a quasi-coherent sheaf, the ordered Cech complex of either cover computes sheaf cohomology ([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]).

[F6] Write $G=\operatorname{Spec}R$. On each affine intersection $U_I$, the pullback of $\mathcal L_\lambda$ to $G\times U_I$ has module of sections $R\otimes_{\mathbb C}\Gamma(U_I,\mathcal L_\lambda)$; this is the affine module description of pullback of a quasi-coherent sheaf ([[thm-affine-quasi-coherent-equivalence]]).

## Proof

1.1 For $g\in G$ let $a_g:X\to X$ be $x\mapsto gx$. The left action on the total bundle gives $\Phi_g:\mathcal L_\lambda\to a_g^*\mathcal L_\lambda$, whose fibre map at $x$ sends $v\in(\mathcal L_\lambda)_x$ to $g\cdot v\in(\mathcal L_\lambda)_{gx}$. These maps are algebraic in $g$ and satisfy $\Phi_{gh}=a_h^*\Phi_g\circ\Phi_h$: at $x$ the composite first applies $h$ to the fibre over $x$, then $g$ to the fibre over $hx$. Define
$$\rho_i(g):=H^i(a_{g^{-1}}^*\Phi_g)\circ a_{g^{-1}}^*:H^i(X,\mathcal L_\lambda)\longrightarrow H^i(X,\mathcal L_\lambda).$$
Here $a_{g^{-1}}^*$ first pulls cohomology to $H^i(X,a_{g^{-1}}^*\mathcal L_\lambda)$, and the pulled-back bundle map $a_{g^{-1}}^*\Phi_g:a_{g^{-1}}^*\mathcal L_\lambda\to\mathcal L_\lambda$ then returns to the original cohomology group. The cocycle gives $\rho_i(gh)=\rho_i(g)\rho_i(h)$ and $\rho_i(e)=\mathrm{id}$, so these are linear actions. They are natural in $\lambda$ because the bundle maps are. [F2, F3, F4, given, algebra]

1.2 The groups $V_i:=H^i(X,\mathcal L_\lambda)$ are finite-dimensional: $X$ is smooth projective, hence proper over $\mathbb C$ by [F3], and $\mathcal L_\lambda$ is coherent by [F2], so [F4] applies. [F2, F3, F4]

2.1 On degree zero, the formula in step 1.1 sends a section to $x\mapsto g\cdot s(g^{-1}x)$, which corresponds by [F1] to left translation $(g\cdot f)(g')=f(g^{-1}g')$. If $\phi:\mathcal L_\lambda\to\mathcal L_\mu$ is $G$-equivariant, its compatibility with the total-space action makes the induced family maps commute with $\phi$; by functoriality [F4], every $H^i(\phi)$ intertwines the actions $\rho_i$. [F1, F2, F4, step 1.1, algebra]

2.2 To prove rationality, put $R=\mathcal O(G)$, let $q:G\times X\to X$ be projection and define the algebraic automorphism $A:G\times X\to G\times X$ by $A(g,x)=(g,g^{-1}x)$. The product cover $G\times U_I$ and [F5] compute $H^i(G\times X,q^*\mathcal L_\lambda)$ by the Cech complex whose terms, by [F6], are $R\otimes_\mathbb C\Gamma(U_I,\mathcal L_\lambda)$. Its differentials are $1_R\otimes d$, so exactness of tensoring over the field $\mathbb C$ identifies this cohomology with $R\otimes_\mathbb C V_i$. The left action on the line bundle gives an algebraic isomorphism $A^*q^*\mathcal L_\lambda\to q^*\mathcal L_\lambda$ over $G\times X$, sending the fibre over $(g,x)$ by the action of $g$ from $(\mathcal L_\lambda)_{g^{-1}x}$ to $(\mathcal L_\lambda)_x$. Pullback by $A$ followed by this isomorphism induces an $R$-linear endomorphism of $R\otimes V_i$. Under evaluation at each $g\in G$, the same product Cech computation identifies its fibre map with $\rho_i(g)$ of step 1.1. Thus the matrix entries of $\rho_i$ are regular functions on $G$; the action law makes $\rho_i:G\to\operatorname{GL}(V_i)$ an algebraic group homomorphism. [F2, F3, F5, F6, step 1.1, step 1.2, algebra]

3.1 The identifications $\mathcal L_\lambda\otimes\mathcal L_\mu\cong\mathcal L_{\lambda+\mu}$ and $\mathcal L_\lambda^\vee\cong\mathcal L_{-\lambda}$ are morphisms of equivariant bundles by [F2], so the induced cohomology maps intertwine the actions from step 1.1. Each algebraic representation of step 2.2 differentiates to a $\mathfrak g$-module, and the tensor/dual identifications remain equivariant for both actions. [F2, F4, step 1.1, step 2.2, algebra] ∎



The rationality claim means algebraicity of the action homomorphism on each
finite-dimensional cohomology space; its matrix coefficients are obtained
from the product-family Cech complex in step 2.2. This proof uses only the
published affine Cech and quasi-coherent module suppliers listed above.
