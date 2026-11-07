---
id: lem-finite-projection-top-cech-duality-and-polarization-degree-in-zf
kind: lemma
title: Finite projection, top Cech duality and polarization degree without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - lem-finite-graded-resolutions-and-projective-cech-cohomology-in-zf
  - lem-nef-and-generated-mixed-intersection-positivity-in-zf
  - lem-projective-finite-difference-intersections-and-generated-positivity-in-zf
  - cor-noether-normalisation-module-finiteness
justified_by: []
proof_strategy: direct
axiom_use: Work in ZF over an infinite field; all projections, presentations, residue coefficients, field-functional choices and section lists are finite.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: The Stacks Project, Cohomology of Schemes
      url: https://stacks.math.columbia.edu/tag/01XT
      locator: Standard Laurent charts; fixed-projection top duality reconstructed here from finite presentations, not imported as a general duality theorem.
---

## Statement

Work in ZF. Let $k$ be infinite, $X/k$ an integral projective scheme of dimension $d\ge0$, and $H$ a specified very ample line bundle. There is a finite dominant morphism $\pi:X\to\mathbb P^d_k$ with $\pi^*O(1)=H$ when $d>0$. Its generic field degree $e>0$ satisfies $J_{O_X}(H,\ldots,H)=e$. For $d=0$, take the structure map to $\mathbb P^0_k$ and the empty mixed degree $\chi(O_X)=[k(X):k]$.

For this fixed finite projection, put $A=\pi_*O_X$ and form the coherent $A$-module $\operatorname{Hom}_{O_{\mathbb P^d}}(A,O(-d-1))$, with $(a\varphi)(b)=\varphi(ab)$. Its corresponding coherent sheaf $W$ on $X$ is torsion-free of generic rank one. For every line bundle $L$ there is a natural perfect finite-dimensional pairing
$$H^d(X,L)\times H^0(X,L^{-1}\otimes W)\longrightarrow k.$$
All $H^q(X,L)$ with $q>d$ vanish. Moreover $W$ injects into $H^c$ for some finite $c\ge0$. These conclusions require no normality, smoothness, separability or Cohen–Macaulay assumption on $X$. The pairing is constructed for the supplied projection from Laurent coefficient extraction; no generic derived dualizing complex, injective resolutions or embedding-independence theorem is asserted.

## Facts & Assumptions

**Given:** The infinite field, integral projective scheme, dimension, very ample embedding and line bundle in the Statement.

[F1] Intrinsic finite projective Cech cohomology, finite coherent chart presentations, finite sums-of-twists presentations and large-twist finite global generation hold over every field. All the cohomology commutes with field extension, and the standard Laurent-monomial computation applies to every twist. [[lem-finite-graded-resolutions-and-projective-cech-cohomology-in-zf]]

[F2] Over an infinite field, every coherent projective sheaf has a finite filtration by twists of integral subvariety structure sheaves; a globally generated line bundle has an actual section acting injectively on it with smaller-dimensional cokernel. [[lem-nef-and-generated-mixed-intersection-positivity-in-zf]]

[F3] Mixed Euler differences are tensor multilinear at the top and commute with field extension; universal parameter sections of generated bundles give exact successive quotient computations of their mixed values. [[lem-projective-finite-difference-intersections-and-generated-positivity-in-zf]]

[F4] Every nonzero finite-type algebra over a field is finite over a polynomial subalgebra. [[cor-noether-normalisation-module-finiteness]]

## Proof

1.1 Suppose $d>0$ and use the embedding defined by $H$. Apply [F2] $d+1$ times to its globally generated restriction on the successive coherent quotients, obtaining linear forms $h_0,\ldots,h_d$ with no common point on $X$: their final quotient is zero by support dimension. Put $S_X$ for the standard graded coordinate domain. Then $S_X/(h_0,\ldots,h_d)$ has only finitely many nonzero graded pieces. To check this directly, a nonnilpotent homogeneous coordinate in that quotient would give a nonzero dehomogenized chart algebra; [F4], quotient at the polynomial origin, and a quotient of least positive vector-space dimension give a finite-extension-valued point, contradicting the empty projective zero set. Thus every coordinate has a power zero and all high-degree pieces vanish. Induction on degree makes $S_X$ finite over $k[h_0,\ldots,h_d]$. The forms are algebraically independent: $\operatorname{Frac}S_X$ has transcendence degree $d+1$, being the generic projective function field plus one independent homogeneous coordinate, while the finite module extension preserves this degree. Division by a nonvanishing $h_i$ on each chart therefore gives the finite morphism $\pi$ to $\mathbb P^d$. It is dominant and has $\pi^*O(1)=H$. Its generic field extension has some finite degree $e>0$. For $d=0$, the finite-type integral zero-dimensional projective scheme is a point with finite residue field over $k$, by the same finite-type field criterion, so the stated structure morphism is finite. [F2, F4, given, construct, algebra]

2.1 We construct top duality on $P=\mathbb P^d_k$ first. For twists, multiply Laurent representatives and extract the coefficient of $x_0^{-1}\cdots x_d^{-1}$ to pair $H^d(O(a))$ with $H^0(O(-a-d-1))$. The monomial description in [F1] makes this perfect: the all-negative exponent vector $u$ pairs with the unique nonnegative vector $-u-(1,\ldots,1)$, and all other monomials pair to zero. Zero groups match, and for $d=0$ there is one monomial in every twist and the same rule pairs them. Polynomial multiplication and finite matrices commute with this coefficient extraction, giving naturality for maps between finite sums of twists. For any coherent $F$ on $P$, use a two-term presentation $E_1\to E_0\to F\to0$ from [F1]. Since all Cech groups above $d$ vanish, two short exact kernel sequences give
$$H^d(F)=\operatorname{coker}(H^d(E_1)\to H^d(E_0)).$$
On the other hand $\operatorname{Hom}(F,O(-d-1))$ is the kernel of the transpose map from $\operatorname{Hom}(E_0,O(-d-1))$ to $\operatorname{Hom}(E_1,O(-d-1))$. The perfect twist pairings identify this kernel with $H^d(F)^\vee$. This proves actual top duality for every coherent $F$ by a finite matrix calculation, without an Ext or injective-resolution theorem. [F1, construct, algebra]

3.1 A finite map is affine on the standard projective charts: its inverse images have finite coordinate algebras, and their intersections have the same localizations. Thus for a coherent sheaf $L$ on $X$ its finite chart modules $\pi_*L$ are coherent on $P$, and their Cech complex is exactly the Cech complex on the inverse-image affine cover. The intrinsic finite comparison in [F1] identifies their cohomology, including zero in degrees above $d$. On an affine base chart $R$ with finite algebra $B$, the elementary coinduction identity is
$$\operatorname{Hom}_B(M,\operatorname{Hom}_R(B,Q))\cong\operatorname{Hom}_R(M,Q),$$
by $\varphi\mapsto(m\mapsto\varphi(m)(1))$, with inverse $\lambda\mapsto(m\mapsto(b\mapsto\lambda(bm)))$. These formulas respect all restrictions. They construct and glue the stated coherent $A$-module sheaf $W$, and for an invertible $L$ identify the right side of step 2.1 with $H^0(X,L^{-1}\otimes W)$. Composing with the residue pairing proves the asserted natural perfect pairing. Only finite Hom kernels of finite presentations and actual finite chart maps occur. [F1, step 1.1, step 2.1, construct, algebra]

4.1 Let $E=k(\mathbb P^d)$ and $F=k(X)$. The generic fibre of $W$ is $\operatorname{Hom}_E(F,E)$ as an $F$-module. It has rank one even inseparably: choose one nonzero $E$-linear functional $\lambda$ in this finite-dimensional space. The map $a\mapsto(b\mapsto\lambda(ab))$ from $F$ to that space is injective, since multiplication by $a\ne0$ is surjective on the field $F$; its source and target have the same finite $E$-dimension, so it is an isomorphism. Locally $\operatorname{Hom}_R(B,Q)$ injects into this generic space, since $Q$ is a line bundle on the integral base and a function vanishing generically vanishes. A nonzero element of the domain $B$ acts injectively on that generic space, so $W$ is torsion-free. Now $\operatorname{Hom}(W,O_X)$ is coherent and generically nonzero. By [F1], a sufficiently large twist of it by $H^c$ has a finite global generating family with some member nonzero generically. The resulting map $W\to H^c$ is injective because $W$ is torsion-free. Increase $c$ if necessary so $c\ge0$. This proves the stated rank and global bound without a trace-form separability assumption or invertibility of $W$. [F1, step 1.1, step 3.1, construct, algebra]

5.1 To compute the polarization degree, shrink to a nonempty affine open $U\subseteq P$ on which the finite algebra $\pi_*O_X$ is free of rank $e$. This uses only finite field-basis coordinates: lift a basis of its generic algebra and clear the finitely many coefficients and denominators expressing the finite module generators and their relations. The generic quotient then has an explicit inverse after one further nonzero denominator is inverted. Take $d$ independent universal hyperplanes on $P$ over their prescribed finite rational parameter field. Their intersection is one rational point of that parameter field, lying in $U$. Its genericity is explicit: tuples of hyperplanes with independent coefficient matrix have intersection given by their finite maximal minors, and the tuples $x_i-u_ix_0$ realize the generic point $[1:u_1:\cdots:u_d]$ of the standard chart. Thus no fixed proper closed subset contains that universal intersection. Pull these same universal hyperplanes to $X$. By [F3] their successive sections act injectively, and their final quotient is the finite fibre algebra over that point, of vector-space dimension $e$. Their mixed Euler value is its finite Euler length, hence $e$. Field-extension invariance [F3] returns $J_{O_X}(H,\ldots,H)=e$ over $k$. For $d=0$, this is the finite field dimension directly. [F3, step 1.1, algebra]

6.1 The case $d=0$ also fits the coinduction and pairing formulas: $W=\operatorname{Hom}_k(k(X),k)$ is a one-dimensional torsion-free module over that finite field, and all positive cohomology is zero. In positive dimension no step used smoothness, normality, a trace-form nondegeneracy hypothesis or a Cohen–Macaulay assertion. The coherent sheaf $W$ and its pairing were constructed for the fixed finite projection, so no independence or general dualizing-functor property has been presumed. This proves precisely the finite top-duality and polarization facts needed for the surface argument. [step 2.1, step 3.1, step 4.1, step 5.1, algebra] ∎
