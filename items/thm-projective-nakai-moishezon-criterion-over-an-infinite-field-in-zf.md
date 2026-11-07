---
id: thm-projective-nakai-moishezon-criterion-over-an-infinite-field-in-zf
kind: theorem
title: Projective Nakai–Moishezon criterion over an infinite field without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - lem-projective-field-ampleness-and-finite-map-criteria-in-zf
  - lem-projective-finite-difference-intersections-and-generated-positivity-in-zf
  - lem-finite-projection-top-cech-duality-and-polarization-degree-in-zf
  - lem-finite-graded-resolutions-and-projective-cech-cohomology-in-zf
justified_by: []
proof_strategy: direct
axiom_use: Work in ZF over an infinite field; the proof uses finite dimension induction, finite divisor supports, explicit Euler polynomials and stabilization of given integer cohomology dimensions.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Robert Lazarsfeld, Positivity in Algebraic Geometry I, Chapter 1
      url: https://www.math.stonybrook.edu/~roblaz/Reprints/Laz.PAG.Chapt1.pdf
      locator: Theorem 1.2.23, printed pages 34–36 (PDF30–32); complete local argument read and adapted below using the finite ZF suppliers, not imported.
---

## Statement

Work in ZF. Let $k$ be infinite, $X/k$ a specified projective scheme, and $L$ an invertible sheaf. Then $L$ is ample in the affine nonvanishing-section sense if and only if for every positive-dimensional reduced integral closed subscheme $V\subseteq X$,
$$J_{O_V}(L|_V,\ldots,L|_V)>0,$$
with $\dim V$ entries. No smoothness, normality, reducedness, irreducibility or Cohen–Macaulay assumption on $X$ is required. Empty and zero-dimensional schemes are included, with the numerical condition vacuous. Here $J$ is the proved finite Euler-difference intersection, not an imported Chow-ring intersection.

## Facts & Assumptions

**Given:** The infinite field, projective finite presentation and line bundle in the Statement.

[F1] On projective schemes over an infinite field, the affine-section definition of ampleness is equivalent to having a positive very ample power. An ample bundle has finite-cohomology Serre vanishing and finite global generation after sufficiently large twists for every coherent sheaf. Amplitude is equivalent to amplitude on the reduced irreducible components; restrictions to closed subschemes and positive tensor powers preserve amplitude. A generated bundle positive on every curve is ample. Tensoring a very ample bundle with a generated bundle is very ample. [[lem-projective-field-ampleness-and-finite-map-criteria-in-zf]]

[F2] Finite mixed Euler differences vanish above coherent support dimension and are top tensor multilinear and invariant under twisting the coherent argument. [[lem-projective-finite-difference-intersections-and-generated-positivity-in-zf]]

[F3] A very ample bundle $H$ on an integral projective variety of dimension $a$ has $J_{O_V}(H,\ldots,H)>0$, equal to the positive degree of a finite linear projection. [[lem-finite-projection-top-cech-duality-and-polarization-degree-in-zf]]

[F4] Coherent projective cohomology and Euler characteristics are intrinsic and finite, admit exact sequences, and coherent twists by a fixed very ample bundle become finitely globally generated. Standard affine Cech complexes have a finite dimension bound. [[lem-finite-graded-resolutions-and-projective-cech-cohomology-in-zf]]

## Proof

1.1 If $L$ is ample, [F1] makes its restriction to each $V$ ample and some positive power very ample. By [F2], its top intersection multiplied by that positive power raised to $\dim V$ is the very ample degree, which is strictly positive by [F3]. This proves necessity. For sufficiency induct on $n=\dim X$. For a zero-dimensional scheme, every reduced integral component is the spectrum of a finite field extension; the restricted line bundle is trivial, so has an affine nonvanishing section cover. The component criterion in [F1] therefore makes every line bundle ample. The empty case is vacuous in the same definition. At a positive induction stage first prove the result for integral schemes of dimension $n$; then the component criterion in [F1] proves it for all schemes of that dimension, since each component has the same numerical inequalities and no greater dimension. On an integral $X$ of dimension $n$, the numerical hypothesis and induction consequently make $L|_Z$ ample for every proper closed subscheme $Z$: its integral components have dimension at most $n-1$ and satisfy exactly the same inequalities. [F1, F2, F3, given, induction, algebra]

2.1 Choose a fixed very ample $H$. For sufficiently large $a$, both $B=H^a$ and $A=L\otimes H^a$ are very ample: [F4] makes $L\otimes H^{a-1}$ generated, and [F1] then applies to its tensor product with $H$. Take nonzero coordinate sections of $A,B$. Since $X$ is integral, they have effective Cartier divisors, denoted also $A,B$, and $L=O(A-B)$. Both supports are proper. For every $m\ge0$ the two actual restriction sequences are
$$0\to L^m(-B)\to L^{m+1}\to L^{m+1}|_A\to0,$$
$$0\to L^m(-B)\to L^m\to L^m|_B\to0.$$
The restrictions of $L$ to $A$ and $B$ are ample by step 1.1, including any nilpotent or reducible structure. Serre vanishing [F1] therefore makes all their positive cohomology zero for $m$ sufficiently large. The two long exact sequences give $H^i(X,L^m)\cong H^i(X,L^{m+1})$ for every $i\ge2$ in that range. Only finitely many $i$ occur, by the finite Cech bound [F4]. Thus all these higher dimensions are eventually constant. [F1, F4, step 1.1, construct, algebra]

3.1 Put $u(m)=\chi(X,L^m)$. The $(n+1)$st forward difference is zero by [F2], and its $n$th difference is the constant $J_{O_X}(L,\ldots,L)$ by coherent twist invariance. Finite Newton interpolation, or induction using $\Delta\binom{m}{j}=\binom{m}{j-1}$, therefore gives a polynomial in $m$ of degree $n$ whose leading coefficient is $J_{O_X}(L,\ldots,L)/n!>0$. By step 2.1, for all large $m$ its Euler expression is $h^0(L^m)-h^1(L^m)+C$ with fixed integer $C$. Hence $h^0(L^m)\ge u(m)-C>0$ for all sufficiently large $m$. Choose one such positive exponent $b$ and a nonzero section. Ampleness of $L^b$ implies ampleness of $L$ by [F1], and the numerical inequalities persist by [F2], so we may replace $L$ by $L^b$. It now has an effective Cartier divisor $D$ and $L=O(D)$. [F1, F2, F4, step 2.1, algebra]

4.1 The restriction $L|_D$ is ample by step 1.1. Therefore $L^m|_D$ is finitely globally generated and $H^1(D,L^m|_D)=0$ for all large $m$, by [F1]. The exact sequence
$$0\to L^{m-1}\to L^m\to L^m|_D\to0$$
gives surjections $H^1(X,L^{m-1})\to H^1(X,L^m)$ for all those $m$. Their dimensions are a given nonincreasing sequence of nonnegative integers, hence eventually constant: take its least attained value. The maps are then isomorphisms. Exactness makes $H^0(X,L^m)\to H^0(D,L^m|_D)$ surjective for all sufficiently large $m$. Lift a finite generating family on $D$; together with the canonical section to the $m$th power, which is nonzero away from $D$, these sections generate $L^m$ on all of $X$. Each curve has positive $L^m$-degree by the original numerical inequality and [F2]. The generated positive-curve criterion [F1] now makes $L^m$, and thus $L$, ample. This proves the integral induction step and then, by the component reduction of step 1.1, the full theorem. [F1, F2, F4, step 1.1, step 3.1, algebra] ∎
