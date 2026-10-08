---
id: lem-cut-surface-and-boundary-jumps-of-primitives
kind: lemma
title: The cut surface, primitives of closed forms, and their boundary jumps
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
proof_strategy: direct
dependency_level: 17
deps:
  - cor-closed-differential-forms-are-locally-exact
  - cor-complex-analytic-functions-have-local-primitives
  - def-axiom-of-choice
  - def-bigraded-complex-differential-forms
  - def-meromorphic-differential-on-a-riemann-surface
  - def-period-pairing-and-period-lattice
  - def-polygonal-schema-and-edge-pairing
  - def-quotient-topology
  - def-simply-connected
  - def-smooth-differential-k-form
  - lem-cellular-homology-of-the-one-polygon-surface-model
  - lem-finite-choice
  - lem-period-pairing-is-well-defined-and-computed-by-integration
  - thm-complex-numbers-are-the-real-coordinate-plane
  - thm-heine-borel-rn
  - thm-lebesgue-number-lemma
  - thm-symplectic-homology-basis-compact-riemann-surface
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Curtis T. McMullen, Riemann Surfaces, Harvard Math 213b course notes (2026)
      url: https://people.math.harvard.edu/~ctm/papers/home/text/class/harvard/213b/course/course.pdf
      locator: "Ch. 15, proof of Theorem 15.13, printed pp. 134–135: the cut complement, boundary word, and primitive jumps; the source writes ∂F=Σ(a_i+b_i′−a_i′−b_i) and f|a_i′−f|a_i=α(b_i), f|b_i′−f|b_i=α(a_i)."
    - title: Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: "Ch. 7 §2, printed pp. 61–62: the simply connected complement, separate side copies, orientation of the 4g-gon, and the boundary-jump calculation."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement

Assume full AC ([[def-axiom-of-choice]]), used to obtain the one-polygon
symplectic side-loop data. Let $X$ be a compact connected Riemann surface of
genus $g\ge1$ with the symplectic basis $a_1,b_1,\ldots,a_g,b_g$ supplied by
[[thm-symplectic-homology-basis-compact-riemann-surface]], and let
$A_i,B_i:[0,1]\to X$ be its fixed continuous side-loop representatives. The
standard one-polygon schema has a closed polygon disk $D$ and quotient map
$q:D\to X$ ([[def-polygonal-schema-and-edge-pairing]]). Let
$C:=\bigcup_i(\operatorname{im}A_i\cup\operatorname{im}B_i)$ and
$F:=X\setminus C$. Define $\widehat F:=D$, the cut-open completion before
the side identifications; it is not the closure of $F$ in $X$. Then:

1. **Cut geometry.** $q$ restricts to a homeomorphism from the polygon interior
   $D^\circ$ onto $F$. Thus $F$ is open and simply connected
   ([[def-simply-connected]]). The boundary of
   $\widehat F$ retains separate copies $A_i^+,A_i^-,B_i^+,B_i^-$ of each
   paired side, in the boundary word
   $\prod_{i=1}^g a_i b_i a_i^{-1}b_i^{-1}$.
2. **Primitives.** For every closed smooth complex $1$-form $\alpha$ on $X$ and
   base point $x_0\in F$, define integrals along continuous paths by local
   primitive endpoint differences. The function
   $$f(x):=\int_{x_0}^{x}\alpha\qquad(x\in F),$$
   taken along any continuous path in $F$, is well defined and smooth, with
   $df=\alpha|_F$. If $\alpha$ is holomorphic, then $f$ is holomorphic.
3. **Boundary jumps.** Label the positive-exponent occurrence in each pair of
   sides by $+$ and the inverse-exponent occurrence by $-$; parameterize both
   copies in the orientation of the corresponding side loop. The function $f$
   extends continuously to each separate boundary copy of $\widehat F$. Write
   $\Pi_\alpha(a_i):=\int_{A_i}\alpha$ and
   $\Pi_\alpha(b_i):=\int_{B_i}\alpha$ for the local-primitive path integrals.
   Then, as equalities of functions on the parameterized side loops,
   $$f|_{A_i^-}-f|_{A_i^+}=\Pi_\alpha(b_i),\qquad f|_{B_i^-}-f|_{B_i^+}=-\Pi_\alpha(a_i).$$
   When $\alpha\in\Omega(X)$, these are respectively
   $P(b_i,\alpha)$ and $-P(a_i,\alpha)$ for the period pairing of
   [[def-period-pairing-and-period-lattice]].

The analytic construction of local path integrals and the jump calculation use
no choice principle; only the selected polygonal symplectic data uses full AC.

## Facts & Assumptions

**Given:** Full AC, the compact connected Riemann surface $X$ of genus $g\ge1$, its selected one-polygon symplectic side loops, and a closed smooth complex $1$-form $\alpha$ on $X$.

[F1] The symplectic basis theorem supplies the orientation-compatible standard one-polygon schema, its side-loop classes, and the boundary word $\prod_i a_i b_i a_i^{-1}b_i^{-1}$; the cellular calculation identifies the side pairs as the $1$-cells based at the single vertex ([[thm-symplectic-homology-basis-compact-riemann-surface]], [[lem-cellular-homology-of-the-one-polygon-surface-model]]).

[F2] A one-polygon schema is a quotient of a closed polygon disk by its paired boundary sides, with the quotient topology. The disk interior is disjoint from the boundary and maps injectively; the images of boundary side pairs form the one-skeleton ([[def-polygonal-schema-and-edge-pairing]], [[def-quotient-topology]]).

[F3] A closed smooth real $1$-form has a smooth local primitive on a neighborhood of each point ([[cor-closed-differential-forms-are-locally-exact]]). A smooth complex form has real and imaginary parts, so applying local exactness to both parts and combining their primitives gives a complex primitive ([[def-bigraded-complex-differential-forms]], [[def-smooth-differential-k-form]], [[thm-complex-numbers-are-the-real-coordinate-plane]]).

[F4] The interval and square with their Euclidean metrics are compact; every open cover of a compact metric space has a Lebesgue number; and a finite family of nonempty sets admits a choice function in ZF ([[thm-heine-borel-rn]], [[thm-lebesgue-number-lemma]], [[lem-finite-choice]]).

[F5] A holomorphic differential has local form $h(z)\,dz$ with $h$ holomorphic, and $h$ has a local holomorphic primitive ([[def-meromorphic-differential-on-a-riemann-surface]], [[cor-complex-analytic-functions-have-local-primitives]]).

[F6] The period pairing is defined using the fixed continuous side-loop representatives, and for holomorphic differentials it agrees with the local primitive path integral on each representative ([[def-period-pairing-and-period-lattice]], [[lem-period-pairing-is-well-defined-and-computed-by-integration]]).

[F7] Full AC is used through the existence of the polygonal symplectic basis; the local primitive, finite subdivision, homotopy, and boundary calculations require only finite choices ([[def-axiom-of-choice]], [[thm-symplectic-homology-basis-compact-riemann-surface]]).

[F8] A simply connected space is path connected and has trivial fundamental group; the open unit disk contracts to its center by the straight-line homotopy ([[def-simply-connected]]).

## Proof

**Proof technique:** construct the path integral from local primitives, use homotopy invariance on a disk, and compute the jumps from the oriented boundary word.

1.1 Let $q:D\to X$ be the quotient model from [F1,F2]. The boundary image is $C$, and no interior points are identified, so $q^{-1}(F)=D^\circ$ and this restriction is a homeomorphism by the quotient topology. The interior of a disk is path connected and contracts to a point, hence is simply connected by [F8]; this proves the cut geometry. [F1,F2,F7,F8,given]

1.2 For any continuous path $\gamma:[0,1]\to X$, cover its image by neighborhoods $U$ with local primitives $H_U$ from [F3]. Compactness of $[0,1]$ and a Lebesgue number for the pulled-back cover give a finite subdivision so that each subpath lies in one such $U$. Define $\mathcal I_\alpha(\gamma):=\sum_j\bigl(H_{U_j}(\gamma(t_j))-H_{U_j}(\gamma(t_{j-1}))\bigr)$. This value is independent of the subdivision and primitives: on each segment of a common refinement, the two primitives differ by a locally constant function on their overlap, and the connected path image lies in one component of that overlap. The definition is additive under concatenation and changes sign under path reversal. [F3,F4]

2.1 The path integral is invariant under homotopy with fixed endpoints. For a homotopy $H:[0,1]^2\to X$, pull back the local-primitive cover along $H$. By [F4], choose $n$ so that $\sqrt2/n$ is below a Lebesgue number, divide the square into an $n\times n$ grid, and split each small square into two triangles; each triangle maps into one primitive neighborhood. Choose such a neighborhood for each triangle using finite choice. The integral around each triangle is zero because it is the sum of endpoint differences of one primitive. Summing cancels all interior edges and leaves the integral around the square boundary; for a fixed-endpoint homotopy the two vertical edges are constant paths and contribute zero, so the two endpoint paths have equal integrals. For any two paths from $x_0$ to $x$ in $F$, their concatenation with one path reversed is a loop; [F8] makes its class trivial, hence a null-homotopy gives a homotopy between the two paths with endpoints fixed. Applying the square argument inside $F$ shows their integrals agree, so $f$ is well defined. Near each point, a local primitive $H_U$ gives $f=H_U+\text{constant}$, proving smoothness and $df=\alpha|_F$. If $\alpha$ is holomorphic, [F5] gives a holomorphic local primitive and the same local equality proves that $f$ is holomorphic. [F3,F4,F5,F8,step 1.1,step 1.2]

3.1 For $z\in D$, define $\widehat f(z)$ by integrating $\alpha$ along the image under $q$ of any path in $D$ from the lift of $x_0$ to $z$. The disk is simply connected, so the homotopy argument of step 2.1 makes this independent of the path. Near each point of $D$, a local primitive on $X$ shows that $\widehat f$ is that primitive composed with $q$, plus a constant; hence $\widehat f$ is continuous up to every boundary side and corner and restricts to $f$ on $D^\circ$. For a matched point at parameter $t$ on $A_i^+$ and $A_i^-$, the positively oriented boundary path from $A_i^+(t)$ to $A_i^-(t)$ traverses the remaining part of $A_i^+$, all of $B_i^+$, and the oppositely oriented matching part of $A_i^-$. The two $a_i$ contributions cancel by additivity and reversal, leaving $\Pi_\alpha(b_i)$. For a matched point on $B_i^+$ and $B_i^-$, the corresponding boundary path traverses the remaining part of $B_i^+$, the inverse-oriented $A_i^-$, and the inverse-oriented matching part of $B_i^-$. The $b_i$ contributions cancel, leaving $-\Pi_\alpha(a_i)$. These differences are independent of $t$. When $\alpha$ is holomorphic, [F6] identifies these local-primitive path integrals with $P$ on the named homology classes. [F1,F2,F3,F6,step 2.1] ∎
