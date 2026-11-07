---
id: lem-henselian-finite-residue-brauer-completion-and-support-trace
kind: lemma
title: "Brauer completion and the support trace for a Henselian finite-residue DVR"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-discrete-valuation-ring
  - thm-completion-of-an-absolutely-valued-field
  - thm-jacobian-criterion-smooth-morphism
  - thm-etale-locally-standard-etale
  - def-henselian-pair-and-henselian-local-ring
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - cor-henselian-local-simple-root-criterion
  - thm-adjugate-identity-over-a-commutative-ring
  - lem-ag-geometric-regularity-field-tests
  - lem-central-division-algebra-separable-maximal-subfield
  - lem-finite-galois-obstruction-brauer-cohomology-comparison
  - thm-local-brauer-invariant-for-finite-residue-local-field
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree
  - thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
  - thm-smooth-affine-commutative-groups-have-etale-fppf-comparison
  - thm-finite-field-galois-higher-cohomology-of-torsion-modules-vanishes
  - def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings
  - lem-site-slice-restriction-locality-and-composition
justified_by: []
proof_strategy: direct
axiom_use: "AC is retained for actual smooth geometry, field comparisons and site models and implies the CC/DC conventions used by completion and absolute continuous cohomology. No completeness assumption is imposed on R or K."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, II Section1 and III Section1"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "The noncomplete Henselian trace prerequisite is reconstructed below by approximation, finite matrix-algebra forms and explicit unramified cyclic classes. No local Tate duality is imported."
verification: {}
---

## Statement

Assume AC. Let $R$ be a Henselian DVR with finite residue field $k$ of order
$q$, fraction field $K$, uniformizer $\pi$, and completion $\widehat K$ for
$|a|=q^{-v(a)}$. Scalar extension induces an isomorphism of algebraic
Brauer groups
$$\operatorname{Br}_{\mathrm{alg}}(K)\xrightarrow{\sim}\operatorname{Br}_{\mathrm{alg}}(\widehat K).$$
Consequently $\operatorname{inv}_K=\operatorname{inv}_{\widehat K}\circ
\operatorname{res}$ is a canonical isomorphism to $\mathbb Q/\mathbb Z$.
If $L/K$ is the cyclic unramified extension obtained by lifting the
residue extension of degree $n$, its arithmetic Frobenius $\sigma$ gives
$\operatorname{inv}_K[(L/K,\sigma,\pi^r)]=r/n$ modulo $\mathbb Z$.
With the stated local support cone convention, the boundary map and this
invariant identify
$$H_x^3(R,\mathbb G_m)\cong H^2_{\mathrm{fppf}}(K,\mathbb G_m)\cong\mathbb Q/\mathbb Z.$$
This trace is compatible with the actual restriction to completion. No
fraction-field characteristic restriction or generic Tate-duality theorem is
assumed. The AC qualification is explicit.

## Facts & Assumptions

**Given:** Exactly AC and the Henselian valued field data in the Statement.

[A1] AC implies the CC and DC conventions in the completion and continuous-cohomology suppliers. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] The valuation completion is a field containing $K$ densely, with the same value group and residue field. The original DVR is its valuation ring before completion. [[def-discrete-valuation-ring]] [[thm-completion-of-an-absolutely-valued-field]]

[F2] Smooth schemes have finite standard smooth charts; etale schemes have standard-etale charts; Henselian local rings lift simple monic residue roots uniquely, and complete DVRs have monic Hensel factor lifting. [[thm-jacobian-criterion-smooth-morphism]] [[thm-etale-locally-standard-etale]] [[def-henselian-pair-and-henselian-local-ring]] [[cor-henselian-local-simple-root-criterion]] [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F3] A unit determinant gives an inverse by the adjugate identity. Geometric regularity over a field descends from a field extension. [[thm-adjugate-identity-over-a-commutative-ring]] [[lem-ag-geometric-regularity-field-tests]]

[F4] A central simple algebra splits over a finite Galois extension. Finite obstruction comparison and crossed products are compatible with scalar extension, with $b=-o$ and the cyclic carry factor mapping to its own class. The absolute Brauer/continuous-$H^2$ comparison is supplied under AC/DC. [[lem-central-division-algebra-separable-maximal-subfield]] [[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[F5] Over a complete finite-residue discretely valued field the Brauer invariant is an isomorphism to $\mathbb Q/\mathbb Z$, normalized by unramified arithmetic Frobenius and the cyclic uniformizer class $r/n$. [[thm-local-brauer-invariant-for-finite-residue-local-field]] [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[F6] A finite field has monic irreducible polynomials in every positive degree; its finite extensions are separable cyclic Galois extensions generated by Frobenius. [[cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree]] [[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]]

[F7] Smooth affine groups have the actual etale/fppf and Henselian positive-degree residue comparisons under AC. Higher continuous cohomology of a finite-field torsion module vanishes from degree two on. [[thm-smooth-affine-commutative-groups-have-etale-fppf-comparison]] [[thm-finite-field-galois-higher-cohomology-of-torsion-modules-vanishes]]

[F8] The support complex is $\operatorname{Cone}(R\Gamma(R,F)\to R\Gamma(K,F))[-1]$, with its actual boundary sequence; the fixed site models and finite comparison calculus apply. [[def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings]] [[lem-site-slice-restriction-locality-and-composition]]

## Proof

**Proof technique:** finite smooth approximation, explicit matrix-algebra isomorphism schemes, and normalized cyclic generators.

**Given:** The data above. All geometric and cohomological constructions retain [A1].

1.1 Any square finite polynomial system over $R$ whose residual Jacobian is invertible has a unique solution specializing to a specified residual zero. Its solution scheme is etale near that zero by [F2]. A standard-etale chart reduces the lifting to a monic simple-root equation; [F2] lifts it and preserves every unit denominator. For a smooth chart with additional free variables, fix arbitrary lifts of their finitely many residue coordinates and apply the same square-system argument. This proves the Henselian smooth-point lifting assertion used below from the actual monic convention. [F2, F3, given, choose, construct, algebra]

1.2 If $Y/K$ is smooth of finite type, its $K$-points are dense in $Y(\widehat K)$. Fix a completed point and a $K$-defined standard smooth chart through it, with equations $f=(f_1,\ldots,f_r)$, an invertible $r\times r$ Jacobian block and finitely many nonzero denominators. Approximate all its coordinates by $a\in K^m$, fix the free coordinates at those approximations, and write $J=\partial f/\partial x_{\mathrm{dep}}(a)$. On a sufficiently small neighbourhood the entries of $a$, $J^{-1}$ and all finitely many polynomial coefficients have fixed valuation lower bounds; the determinant and the nonzero denominators retain their valuations. Choose $N$ large enough that every coefficient of degree at least two in
$$F(z)=\pi^{-N}f(a_{\mathrm{dep}}+\pi^NJ^{-1}z,a_{\mathrm{free}})$$
is integral. This is possible because a degree-$d$ term gains $(d-1)N$ and only finitely many coefficient bounds occur. Choose the approximation $a$ sufficiently close that $f(a)\in\pi^{N+1}R^r$; the uniform bounds remain valid. Then $F\in R[z]^r$, $F(0)\in\pi R^r$ and its Jacobian at zero is the identity. Step 1.1 gives $z\in\pi R^r$ with $F(z)=0$. Substitution gives a $K$-point of the original chart. Increasing $N$ makes it arbitrarily close to the completed point and preserves every prescribed open denominator. This uses density of $K$ from [F1] and Henselianity, not completeness of $K$. [F1, F2, F3, step 1.1, choose, construct, algebra]

1.3 For any central simple $K$-algebra $A$ of dimension $d^2$, the functor of algebra isomorphisms $A\to M_d$ is an affine finite-type scheme $Y$: impose the finite multiplication and unit equations on a $d^2\times d^2$ matrix and invert its determinant. It is smooth over $K$. To prove this, split $A$ over one finite Galois extension $E$ by [F4]. Over $E$ the scheme becomes the automorphism scheme of $M_d$. That automorphism scheme has explicit smooth affine charts, as follows. For any universal automorphism $\phi$ over a ring, $P=\phi(E_{11})S^d$ is a projective line: the $d$ orthogonal images of $E_{ii}$ sum to $S^d$ and are mutually isomorphic through the images of $E_{ij}$, so their fibre ranks are one. On the open where $(\phi(E_{11}))_{jk}$ is a unit, take $v=\phi(E_{11})e_k/(\phi(E_{11}))_{jk}$. Its $j$th coordinate is one and it generates $P$. The columns $\phi(E_{i1})v$ form an invertible matrix $g$, and the matrix-unit identities give $\phi(a)=gag^{-1}$. Conversely these matrices, with $g_{j1}=1$ and $(g^{-1})_{1k}$ a unit, give exactly this chart. It is an open of an affine hyperplane in matrix space with determinant inverted, hence smooth of dimension $d^2-1$. The charts cover, since the nonzero rank-one projection has some nonzero entry at every residue point. Thus $Y_E$ is smooth. Over a field flatness is automatic and [F3] descends geometrically regular fibres from $E$, so the finite-type $Y$ is smooth over $K$. [F2, F3, F4, construct, algebra]

1.4 For each $n\ge1$, choose a monic irreducible polynomial $\bar f\in k[T]$ of degree $n$ and lift it to $f\in R[T]$. Then $f$ is irreducible over $K$. The least coefficient valuation is additive on nonzero polynomial products: scale each factor by a power of $\pi$ so its least coefficient valuation is zero, and reduce; the product of the two nonzero residue polynomials remains nonzero. If $f=gh$ with both factors monic over $K$, each least coefficient valuation is at most zero and their sum is zero, so both are zero. Hence $g,h\in R[T]$, and reduction preserves their monic degrees, contradicting irreducibility of $\bar f$. Set $B=R[T]/f$. It is free of rank $n$ with residue field $k_n$. Every element of nonzero residue is a unit, since its multiplication determinant is nonzero modulo $\pi$. Every nonzero element is a power of $\pi$ times such a unit, by the least valuation of its coordinates. Thus $B$ is a DVR, its fraction field $L$ has degree $n$ and its residue degree is $n$, with uniformizer $\pi$. [F3, F6, choose, construct, algebra]

2.1 If $[A]$ becomes zero in $\operatorname{Br}_{\mathrm{alg}}(\widehat K)$, then $A_{\widehat K}$ itself is a matrix algebra, since zero similarity class is precisely split by [F4]. The scheme $Y$ in step 1.3 therefore has a $\widehat K$-point. Step 1.2 gives a $K$-point, hence $A\cong M_d(K)$. Thus scalar extension of Brauer groups is injective. The degree $d$ exists because one finite splitting field in [F4] identifies $A$ with a matrix algebra and preserves its dimension. No general algebraic closure or proper Severi-Brauer comparison is needed. [F4, step 1.2, step 1.3, algebra]

2.2 Every residue root of $\bar f$ lifts uniquely to a root of $f$ in $B$. Indeed express $f(z)=0$ in one $R$-basis of $B$; at a lift of that residue root its Jacobian is multiplication by $f'(z)$, invertible modulo $\pi$, hence invertible over $R$. Step 1.1 gives its unique coefficient lift. Applying this to all $n$ Frobenius conjugates gives $n$ distinct roots in $B$, with unit pairwise differences. They give all $K$-automorphisms of $L$, with unique arithmetic Frobenius $\sigma$ and $\sigma^n=1$. The same polynomial over $\widehat K$ defines its complete unramified extension of degree $n$ by [F5]; its Frobenius agrees with the extension of $\sigma$ on roots by the same residue uniqueness. In particular $L\otimes_K\widehat K$ is that field, not a product of smaller factors. [F2, F3, F5, step 1.1, step 1.4, construct, algebra]

3.1 The cyclic crossed product $(L/K,\sigma,\pi^r)$ exists as a central simple algebra by the finite comparison [F4], and its scalar extension is the complete unramified cyclic algebra with the same Frobenius and uniformizer. Its invariant there is $r/n$ by [F5]. Every element of $\mathbb Q/\mathbb Z$ has this form, so the Brauer scalar-extension map is surjective. Together with step 2.1 and the complete invariant isomorphism, this gives the claimed canonical invariant isomorphism on $K$, with the required sign normalization. At $n=1$ it is the split class and $r/n=0$ modulo $\mathbb Z$. [F4, F5, step 2.1, step 2.2, algebra]

4.1 We identify the actual cohomological targets, retaining [A1]. Over any field with the fixed separable closure, etale sheaves are computed through finite separable neighbourhoods; finite Galois Cech nerves on an injective sheaf are exact after Hom, and the geometric stalk is exact. The first-quadrant continuous-cochain/injective double complex consequently identifies small-etale cohomology of $\mathbb G_m$ with continuous cohomology of $K_s^\times$. The cochain functor is exact since a continuous cochain has finite image, whose finitely many preimages lift it continuously. This proves the actual natural field comparison on the given models; it does not assume a Brauer/cohomology theorem. The smooth affine topology comparison [F7] identifies the etale group with its fppf group, and [F4] identifies this $H^2$ with the algebraic Brauer group at exactly the retained AC/DC scope. Thus the invariant of step 3.1 is a natural map on $H^2_{\mathrm{fppf}}(K,\mathbb G_m)$ and commutes with completion restriction. [A1, F4, F7, F8, step 3.1, construct, algebra]

5.1 The multiplicative group over $\bar k$ is torsion, because every element lies in a finite field. Hence [F7] and the finite-field instance of step 4.1 give $H^r_{\mathrm{fppf}}(k,\mathbb G_m)=0$ for $r\ge2$. The recorded smooth affine residue comparison [F7] gives the same vanishing over $R$, in particular in degrees two and three. In the support long exact sequence [F8], the boundary $H^2(K,\mathbb G_m)\to H_x^3(R,\mathbb G_m)$ is therefore an isomorphism. Inverting that boundary and applying the invariant from step 4.1 gives exactly the asserted trace. The completed valuation ring is Henselian by [F2], so the same outer-group vanishing and boundary isomorphism hold there. Natural restriction of the cone diagram and the field comparison therefore proves compatibility with completion. No full local Tate pairing, exact-annihilator assertion or unqualified choice-strength conclusion has been used. [F7, F8, step 4.1, algebra] ∎
