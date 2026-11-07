---
id: lem-projective-finite-difference-intersections-and-generated-positivity-in-zf
kind: lemma
title: Finite-difference mixed intersections and generated positivity without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - lem-finite-graded-resolutions-and-projective-cech-cohomology-in-zf
  - cor-noether-normalisation-module-finiteness
  - thm-localisation-of-modules-is-exact
justified_by: []
proof_strategy: direct
axiom_use: Work in ZF over a field; Euler differences are finite sums, and universal sections use only finitely many specified transcendental parameters.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: The Stacks Project, Numerical intersections
      url: https://stacks.math.columbia.edu/tag/0BEL
      locator: Finite-difference conventions; all numerical and universal-section arguments below constructed locally, not imported.
---

## Statement

Work in ZF. Let $X$ be a specified projective scheme over any field $k$, let $G$ be a coherent sheaf with support dimension at most $d$, and let $L_1,\ldots,L_r$ be invertible sheaves. Define the finite integer
$$J_G(L_1,\ldots,L_r)=\sum_{A\subseteq\{1,\ldots,r\}}(-1)^{r-|A|}\chi\left(G\otimes\bigotimes_{i\in A}L_i\right).$$
Then $J_G=0$ if $r>d$. For $r=d$, it is symmetric, additive in short exact sequences of $G$, invariant under replacing $G$ by $G\otimes M$ for any invertible $M$, and additive under tensor product in each $L_i$. It commutes with every field extension. If all $L_i$ are globally generated, then $J_G(L_1,\ldots,L_d)\ge0$. In particular, on a projective $d$-dimensional integral scheme, $J_{O_X}$ defines a symmetric multilinear integer pairing of $d$ line bundles, with nonnegative value for globally generated entries. For $d=1$, $J_{O_X}(L)=\chi(L)-\chi(O_X)$ is the curve degree convention. For $d=0$, the empty-list value is the nonnegative finite Euler length of $G$.

The positivity assertion concerns globally generated bundles. It does not assume, or establish, that every bundle nonnegative on curves is an ample-limit class; no mixed positivity assertion for arbitrary such nef bundles is obtained by changing their definition.

## Facts & Assumptions

**Given:** The field, specified projective embedding, coherent sheaf, support-dimension bound and finite line-bundle list. Global generation is assumed only in the stated positivity assertion.

[F1] Coherent sheaves on specified projective schemes over any field have intrinsic finite Cech cohomology and Euler characteristic, large twists are finitely globally generated, and their cohomology and Euler values commute with field extension. [[lem-finite-graded-resolutions-and-projective-cech-cohomology-in-zf]]

[F2] Every nonzero finite-type algebra over a field is finite over a polynomial subalgebra. [[cor-noether-normalisation-module-finiteness]]

[F3] Localization of modules preserves short exact sequences. [[thm-localisation-of-modules-is-exact]]

## Proof

1.1 The Euler terms are finite by [F1], and finite Cech complexes on a common affine cover give additivity for exact coherent sequences: termwise localization is exact by [F3], and the finite cycle-lifting chase gives the long exact cohomology sequence. Tensoring with a line bundle preserves exactness in its rank-one frames. Thus one may use finite additive formal expressions in coherent sheaves with the relation $[B]=[A]+[C]$ for every short exact $0\to A\to B\to C\to0$. Only the finite expressions used in this proof are required, not a general K-theory construction. Write $T_L[G]=[G\otimes L]$ and $\Delta_L=T_L-1$. The operators commute, and the displayed $J_G$ is exactly $\chi(\Delta_{L_1}\cdots\Delta_{L_r}[G])$. Field extension preserves every term by [F1]. [F1, F3, given, algebra]

2.1 For a globally generated $L$, take a finite generating family $s_0,\ldots,s_m$. A finite family suffices because the support is quasi-compact; alternatively a global generating family has a finite subfamily generating on each of a finite affine trivializing cover. Introduce independent indeterminates $u_0,\ldots,u_m$ and the prescribed field $K'=k(u_0,\ldots,u_m)$. Multiplication by $s=\sum u_is_i$ gives an injection $G_{K'}\to G_{K'}\otimes L_{K'}$. To check it before passing to the parameter field, cover each trivializing chart by the finitely many principal opens where one generator $s_i$ is a unit. There the equation is monic, up to that unit, as a polynomial in $u_i$, so its multiplication on any polynomial module is injective by its highest coefficient. Localizing the parameter ring to $K'$ preserves injection by [F3]. The cokernel $Q$ has support dimension at most $\dim\operatorname{Supp}G-1$. Here is a direct check that needs no selected associated or generic primes. On a chart where $s_i$ is a unit, a prime in its cokernel support contracts to a prime $p$ in $\operatorname{Supp}G$, and its residue field satisfies the linear relation expressing $u_i$ in terms of the other $m$ parameters and $\kappa(p)$. Consequently its transcendence degree over $k$ is at most $\operatorname{trdeg}_k\kappa(p)+m$, and over $K'$ it is at most $\operatorname{trdeg}_k\kappa(p)-1$. For finite-type domains, dimension equals fraction-field transcendence degree without Choice: [F2] gives a finite polynomial normalization, strict prime quotients drop transcendence degree because a least-degree monic equation for a nonzero element has a nonzero constant term in the contracted prime, and the reverse dimension bound follows by lifting the finite coordinate-prime chain. Such finite lifts exist directly: localize a finite integral domain extension at the next base prime; finite Nakayama makes its residue algebra nonzero, and a quotient of least positive dimension of that finite-dimensional algebra is a field. Repeat on the finite integral quotient by the preceding lifted prime. This is finite chain lifting, not a general maximal-ideal principle. It follows that $\operatorname{trdeg}_k\kappa(p)\le\dim\operatorname{Supp}G$, and that every strict chain in the new support has length at most the claimed smaller bound. If the old support dimension is zero there can be no such new prime, so $Q=0$, by the finite-type-field affine detection in [F1]. Thus $\Delta_L[G_{K'}]=[Q]$ is an actual lower-dimensional coherent class, without selecting a section avoiding a family of associated primes. [F1, F2, F3, step 1.1, construct, algebra]

3.1 For an arbitrary $L$, choose the fixed projective $O(1)$ and a finite $a\ge0$ for which $L(a)$ and $O(a)$ are globally generated, by [F1]. The exact operator identity is
$$\Delta_L=T_{O(-a)}\bigl(\Delta_{L(a)}-\Delta_{O(a)}\bigr).$$
Twisting preserves support dimension. Expand a finite product of arbitrary $\Delta_{L_i}$ by this identity. For each of the finitely many resulting branches, apply step 2.1 with a fresh finite group of independent parameters at each successive factor. Take the rational function field in all these finitely many groups at the end. All previous injections survive further field extension, by the finite-coefficient exactness in [F1]. Each branch is therefore represented by a coherent sheaf whose support dimension has fallen by at least the number of factors, with its indicated sign and harmless twist. If that number is greater than $d$, every branch is zero. Their Euler sum over the final field is zero; field-extension invariance in step 1.1 makes the original $J_G$ zero. This proves the full vanishing assertion for arbitrary bundles. It also treats zero sheaves and empty intermediate supports. [F1, step 1.1, step 2.1, construct, algebra]

4.1 Symmetry is immediate from the commuting operators. The identity $\Delta_{AB}=\Delta_A+\Delta_B+\Delta_A\Delta_B$ shows that replacing one of $d$ entries by a tensor product adds their two separate values and an error with $d+1$ difference operators. That error is zero by step 3.1. The trivial bundle has zero operator, and inverses give opposite values, so this is genuine tensor-group multilinearity. The difference between the values on $G\otimes M$ and $G$ is $\chi(\Delta_M\Delta_{L_1}\cdots\Delta_{L_d}[G])$, also zero. This proves twist invariance. Exact-sequence additivity and field-extension compatibility are already termwise in step 1.1. All arguments remain valid if the true support dimension is smaller than $d$, in which case the entire value vanishes. [step 1.1, step 3.1, algebra]

5.1 If the $d$ bundles are globally generated, use only the successive universal-section injections of step 2.1, with one fresh finite parameter group per factor. They identify the whole product $\Delta_{L_1}\cdots\Delta_{L_d}[G]$, after that single specified finite transcendental extension, with a coherent sheaf $Q$ of support dimension at most zero, or with zero. Its Euler characteristic is nonnegative. Indeed a further generic projective hyperplane misses the zero-dimensional support by exactly the unit calculation of step 2.1; its affine complement contains the support. Coherent cohomology there has no positive degrees by the finite affine contraction in [F1], and the finite global $H^0$ has nonnegative dimension. Equivalently its finite-dimensional support algebra and module have a finite simple filtration and their Euler value is the sum of nonnegative local lengths times finite residue-field degrees. Descending this Euler number through field-extension invariance proves $J_G\ge0$ over the original field. This proof applies over finite fields as well, because all generic parameters were explicitly constructed rather than selected in $k$. [F1, step 1.1, step 2.1, algebra]

6.1 For $G=O_X$ and $d=\dim X$, steps 3.1–5.1 give the numerical mixed intersection pairing asserted in the Statement. For $d=1$ its defining two-term difference is exactly $\chi(L)-\chi(O_X)$, with no normalization factor. For $d=0$, step 5.1 with an empty difference list proves nonnegativity of $\chi(G)$ directly, and the finite local-length description includes nonreduced supports and nontrivial residue extensions. Every formula is a finite sum; no limit, Chow moving theorem, higher cycle-class construction or approximate-ampleness theorem for curve-nef bundles has been invoked. [step 3.1, step 4.1, step 5.1, algebra] ∎
