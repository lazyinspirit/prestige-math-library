---
id: lem-projective-curve-degrees-and-projection-formula-in-zf
kind: lemma
title: Projective curve degrees and the projection formula without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - cor-noether-normalisation-module-finiteness
  - cor-finitely-generated-torsion-free-modules-over-a-pid-are-free
  - thm-sections-basic-open-affine-scheme
  - thm-polynomial-algebras-over-fields-have-finite-integral-closures
justified_by: []
proof_strategy: direct
axiom_use: Work in ZF with a supplied infinite field; all covers, coordinate operations and vector-space choices are finite.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: The Stacks Project, Degrees on curves
      url: https://stacks.math.columbia.edu/tag/0AYQ
      locator: Curve-degree conventions; finite pencil and finite-Cech construction supplied here, not imported.
---

## Statement

Work in ZF. Let $k$ be an infinite field and $C/k$ an integral projective curve, allowing singular curves. There is a finite flat nonconstant morphism $C\to\mathbb P^1_k$. Its finite normalization $\nu:\widetilde C\to C$ is projective. For every invertible sheaf $L$ on $C$, the integer
$$\deg_C L=\sum_{z\in\widetilde C}[\kappa(z):k]\operatorname{ord}_z(s)$$
for any nonzero rational section $s$ of $\nu^*L$ is well-defined, additive under tensor products, and equals the usual Euler-characteristic degree $\chi(C,L)-\chi(C,O_C)$. The cohomology spaces in that expression are finite-dimensional and can be constructed by a two-affine Cech complex, without an injective-resolution existence assertion.
For a nonconstant morphism $f:C'\to C$ of integral projective curves,
$$\deg_{C'}f^*L=[k(C'):k(C)]\deg_C L.$$
If a morphism from an integral projective curve has point image, every pulled-back invertible sheaf has degree zero. For a vector bundle $V$ of rank $r$, one also has $\chi(C,V)-r\chi(C,O_C)=\deg_C\det V$. A globally generated invertible sheaf has nonnegative degree. Thus restriction of a nef line bundle to an integral projective curve has the same nonnegative degree whether computed by Euler characteristic or on the normalization. No positivity assertion for a product of several nef classes in higher dimension is made by this lemma.

## Facts & Assumptions

**Given:** The infinite field, projective integral curves and invertible sheaves in the Statement.

[F1] Every nonzero finite-type algebra over a field is module-finite over a polynomial subalgebra on finitely many algebraically independent elements. [[cor-noether-normalisation-module-finiteness]]

[F2] A finitely generated torsion-free module over a PID is finite free. [[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]]

[F3] Regular functions on an affine principal open are given by localization. [[thm-sections-basic-open-affine-scheme]]

[F4] The integral closure of a polynomial algebra over any field in a finite extension of its fraction field is module-finite, by a choice-free construction. [[thm-polynomial-algebras-over-fields-have-finite-integral-closures]]

## Proof

1.1 We first justify the finite algebraic zero-set argument without a maximal-ideal choice theorem. For a nonzero finite-type $k$-algebra $A$, take a finite polynomial subalgebra $R=k[t_1,\ldots,t_d]$ as in [F1]. The ideal $(t_1,\ldots,t_d)A$ is proper: otherwise the determinant trick on finite $R$-generators produces an element of $1+(t_1,\ldots,t_d)$ annihilating the faithful $R$-module $A$, a contradiction. The quotient is a nonzero finite-dimensional $k$-algebra. A nonzero quotient of least positive dimension is a field, finite over $k$. Hence every nonzero finite-type $k$-algebra has a point over a finite field extension. Every finite-type field over $k$ is finite over $k$ as well: [F1] makes it integral over a polynomial subring, which must be a field: if a field is integral over a domain, that domain is a field, as a monic equation for the inverse of any nonzero element shows. In particular, if $g$ is not nilpotent in such an algebra, localizing at $g$ gives a finite-extension-valued point where $g\ne0$. Thus a coordinate vanishing at all such points has a power equal to zero. This is exactly the radical test used below, and requires no algebraic closure. [F1, given, construct, algebra]

2.1 Embed $C$ in $\mathbb P^r_k$ with homogeneous coordinate ring $A$. Choose a linear form $h_0$ not zero on $C$; its zero set on this curve is finite. Choose $h_1$ nonzero at those finitely many closed points. Their residue fields are finite over $k$ by step 1.1. This is a finite avoidance argument: coefficient vectors $(1,a,\ldots,a^r)$ fail at each point for only finitely many $a\in k$, since the resulting nonzero polynomial over its residue field has finitely many roots. The supplied field $k$ is infinite. Thus $h_0,h_1$ have no common point on $C$. The affine cone cut out by $I(C),h_0,h_1$ has only the origin. By step 1.1, each coordinate has a power in this homogeneous ideal. Therefore $A/(h_0,h_1)$ is finite-dimensional, and all sufficiently high-degree monomials belong to $(h_0,h_1)A$. Induction on degree now expresses $A$ as a finite graded module over $k[h_0,h_1]$, generated by its finitely many low-degree monomials. [F1, step 1.1, construct, algebra]

3.1 The ratio $[h_0:h_1]$ defines a morphism $\pi:C\to\mathbb P^1$. On the chart $h_0\ne0$, divide the finitely many graded module generators by the appropriate power of $h_0$; they generate $A[h_0^{-1}]_0$ over $k[h_1/h_0]$. The same holds on the other chart. Thus $\pi$ is finite. It cannot be constant, because a fiber of a finite morphism over a $k$-point is a finite-dimensional algebra and has dimension zero, whereas $C$ has dimension one. Its affine coordinate modules over $k[t]$ and $k[t^{-1}]$ are torsion-free, hence finite free by [F2]. The same is true for the modules representing a finite-rank locally free sheaf on those affine preimages: finite frame covers give finite generators, and torsion-freeness follows from integrality. Hence the morphism is flat. [F2, F3, step 2.1, algebra]

4.1 The two affine preimages and their affine intersection give the Cech complex of such a sheaf. In bases of its free modules over $k[t]$ and $k[t^{-1}]$, its degree-one term is $k[t,t^{-1}]^d$, and the two images are $k[t]^d$ and $T(t)k[t^{-1}]^d$ for an invertible Laurent matrix $T$. If all exponents in $T,T^{-1}$ have absolute value at most $M$, the cokernel is spanned by monomials with exponents strictly between $-M$ and $0$, and the kernel is contained in the polynomials of degrees between $0$ and $M$. Both are finite-dimensional. This finite Cech computation is canonical: on any affine principal refinement a localization cocycle is killed by clearing finitely many denominators and choosing $\sum a_i f_i^N=1$; the explicit contraction is $b_I=\sum_i a_i f_i^N c_{iI}$. Finite double-Cech complexes consequently compare covers and give the usual coherent cohomology and its long exact sequences. Higher cohomology is zero for this two-affine computation. Finite-support sheaves have only degree-zero cohomology, equal to their finite lengths. No selection of resolutions or infinite affine covers is involved. [F2, F3, step 1.1, step 3.1, construct, algebra]

5.1 Normalize $\mathbb P^1$ in $k(C)$ using [F4] on its two polynomial charts. Integral closure commutes with localization by clearing the finitely many denominators of a monic equation. The coordinate algebra of $C$ is integral over the base polynomial ring, so its integral closure in $k(C)$ is the same as that of the base. The resulting curve is finite over $C$ and is its normalization $\widetilde C$. It is projective: its finite locally free algebra over $\mathbb P^1$ embeds it in the associated projective bundle by evaluation; the homogeneous multiplication relations have no points at infinity. Twisting that algebra bundle by a large $O(m)$ makes it globally generated by clearing the finite Laurent transition matrix, and gives an embedding into a finite projective space over $\mathbb P^1$. Its normal local rings of dimension one are DVRs by the following finite ideal argument. For such a ring $T$, choose $0\ne b\in\mathfrak m$, the least $r$ with $\mathfrak m^r\subseteq bT$, and $x\in\mathfrak m^{r-1}\setminus bT$. Then $z=x/b\notin T$ and $z\mathfrak m\subseteq T$. If $z\mathfrak m\subseteq\mathfrak m$, the determinant trick makes $z$ integral, a contradiction; thus some $y\in\mathfrak m$ has $zy$ a unit and $\mathfrak m=yT$. The finitely generated intersection $I=\bigcap y^aT$ satisfies $I=yI$ and is zero by the determinant trick, giving the DVR valuation. A rational section on this normal curve has a finite divisor $D=\sum m_z z$. The exact sequence $0\to O(D-z)\to O(D)\to\kappa(z)\to0$ changes the finite Euler characteristic from step 4.1 by $[\kappa(z):k]$. Adding and subtracting the finitely many points therefore proves $\chi(L)-\chi(O)=\sum m_z[\kappa(z):k]$, and proves degree zero for principal divisors. [F2, F4, step 3.1, step 4.1, algebra]

6.1 For the possibly singular curve, the quotient $Q=\nu_*O_{\widetilde C}/O_C$ has finite support, because the finite birational map is an isomorphism on a nonempty open. Tensoring by $L$ gives $0\to L\to\nu_*\nu^*L\to Q\otimes L\to0$, and $Q\otimes L$ has the same local lengths as $Q$, including their residue-field dimensions over $k$. Finite affine preimages show that the Cech complex of $\nu_*F$ is that of $F$ on $\widetilde C$. Subtract the Euler identities of these two exact sequences; the finite lengths cancel. This proves $\chi(C,L)-\chi(C,O_C)=\chi(\widetilde C,\nu^*L)-\chi(\widetilde C,O_{\widetilde C})$, which equals the asserted divisor degree by step 5.1. It also proves independence from the rational section and the stated agreement of degree conventions. [step 4.1, step 5.1, algebra]

7.1 A nonconstant $f:C'\to C$ induces a finite function-field extension. The map between the normalizations extends from the generic map by the projective homogeneous-coordinate calculation over DVRs. Normalize the finite pencil of the normal target in $k(C')$ using [F4]; integrality through its intermediate coordinate rings makes this a finite normalization over the target. It is the normal source: inverse generic maps of projective normal curves extend over their DVRs by scaling finitely many homogeneous coordinates to be integral with one a unit, and their composites are the identity by generic agreement. At a point $z$ of the normal target, the finite normalization algebra is torsion-free over $O_{C,z}$ and is free of rank $d=[k(C'):k(C)]$ by [F2]. Its quotient by a uniformizer is a finite algebra whose local factors have lengths $e_{w/z}$ over their residue fields. Taking dimensions over $\kappa(z)$ gives $\sum_{w\mid z}e_{w/z}[\kappa(w):\kappa(z)]=d$. Pulling back a section divisor $D=\sum m_z z$ multiplies its local coefficients by $e_{w/z}$. Summing with residue degrees proves the projection formula; step 6.1 transfers it to the singular curves. If the image is a point, pullback of a basis of its line-bundle fiber trivializes the line bundle, so the degree is zero. [F2, F4, step 5.1, step 6.1, algebra]

8.1 Tensoring rational sections adds their divisors on the normalization, proving additivity of degree; inversion changes its sign. For a globally generated line bundle, choose a nonzero global section. Its pullback to the normalization has an effective divisor, so the degree is nonnegative. Finally the definition of nefness is nonnegative degree on every integral projective curve; step 6.1 proves that this condition uses exactly the same numbers with either of the stated degree conventions. The structure sheaf has degree zero, and all formulas include birational degree one, singular curves and inseparable maps. This supplies the curve-degree and projection layer, not a higher-dimensional mixed positivity theorem. [step 5.1, step 6.1, step 7.1, algebra]


9.1 For a vector bundle on a normal curve, choose a one-dimensional subspace of its generic fiber and intersect it with the bundle. On each affine chart this is the kernel of finitely many linear equations with rational coefficients after clearing denominators, hence is coherent. At every DVR stalk the saturated intersection is free of rank one and the quotient is torsion-free, hence free; thus it is a line subbundle with vector-bundle quotient. Induction gives a finite line-bundle filtration. Additivity of the finite Euler characteristic and the local wedge formula for determinants now give $\chi(V)-r\chi(O)=\deg\det V$. On a singular curve, pull back to the normalization: in the normalization exact sequence the quotient tensored with $V$ has $r$ times its original finite length, so this expression is unchanged, and the determinant pulls back to the determinant of the pullback. The identity therefore holds on the original curve too. The rank-zero case is zero on both sides. [F2, step 4.1, step 5.1, step 6.1, step 8.1, induction, algebra] ∎
