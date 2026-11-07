---
id: lem-normal-projective-surface-cartier-intersection-pairing-in-zf
kind: lemma
title: Cartier intersection on normal projective surfaces without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - lem-projective-curve-degrees-and-projection-formula-in-zf
  - lem-finite-type-normal-domain-codimension-one-test-in-zf
  - thm-sections-basic-open-affine-scheme
  - cor-noether-normalisation-module-finiteness
justified_by: []
proof_strategy: direct
axiom_use: Work in ZF; component lists, homogeneous equations, affine covers and complexes used below are finite.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: The Stacks Project, Intersection Theory
      url: https://stacks.math.columbia.edu/tag/0AZ7
      locator: Cartier-on-curves intersection conventions; the finite surface construction is proved below, not imported.
---

## Statement

Work in ZF. Let $k$ be algebraically closed and $S/k$ a normal integral projective surface. For Cartier divisors $D,E$ on $S$, define
$$D\cdot E=\sum_C\operatorname{ord}_C(D)\deg_C\bigl(O_S(E)|_C\bigr),$$
using reduced integral curves and their normalization degrees. The sum is finite, symmetric and bilinear; it vanishes if either divisor is principal. Thus it gives a rational-section-independent symmetric bilinear integer pairing $L\cdot M$ on invertible sheaves. For a projective birational morphism $f:T\to S$ of normal integral projective surfaces,
$$(f^*L)\cdot(f^*M)=L\cdot M.$$
If $D,E$ are effective Cartier divisors with no common component, their pairing is the sum of the finite local intersection lengths. If $L$ has nonnegative degree on every integral curve and $M$ has a nonzero global section, then $L\cdot M\ge0$; in particular this holds when $M$ is globally generated. For an effective Cartier divisor $D$ and arbitrary $E$, there is the exact finite Euler formula
$$D\cdot E=\chi(O_D)-\chi(O_D(-E)).$$
No surface cohomology-finiteness, Riemann–Roch, duality, higher Chow construction or positivity for a product of two arbitrary nef bundles is asserted as an input.

## Facts & Assumptions

**Given:** The algebraically closed field, normal integral projective surfaces, Cartier divisors, line bundles and morphism in the Statement.

[F1] Integral projective curve degrees are tensor additive, agree with Euler-characteristic degrees, and satisfy normalization and projection formulas. Coherent line-bundle cohomology on these curves is finite and computed by finite affine Cech complexes; pullback of a line bundle from a point has degree zero. [[lem-projective-curve-degrees-and-projection-formula-in-zf]]

[F2] Normal finite-type charts and their localizations satisfy codimension-one regularity and Cartier effectivity/zero tests, without Choice. [[lem-finite-type-normal-domain-codimension-one-test-in-zf]]

[F3] Sections on an affine principal open are given by localization. [[thm-sections-basic-open-affine-scheme]]

[F4] A nonzero finite-type algebra over a field is finite over a polynomial subalgebra. [[cor-noether-normalisation-module-finiteness]]

## Proof

1.1 A normal height-one local ring is a DVR by the finite ideal argument: choose $0\ne b\in m$, the least $r$ with $m^r\subseteq(b)$ and $x\in m^{r-1}\setminus(b)$; $z=x/b$ satisfies $zm\subseteq A$. If $zm\subseteq m$, the determinant trick contradicts normality. Otherwise $zy$ is a unit for some $y\in m$, so $m=(y)$; its finitely generated intersection of powers is zero by the determinant trick. These orders are the ones in the Statement. The height-one orders of a Cartier divisor have finite support: on a finite affine trivializing cover, each rational equation has a numerator and denominator, and only finitely many minimal primes over these elements occur in the Noetherian chart. A height-one prime containing one of them is minimal. Any effective Cartier quotient has support of dimension at most one. One direct dimension bound uses [F4]: in a finite-type domain finite over a polynomial subring, a nonzero prime has nonzero contraction, by the nonzero constant term of a least-degree monic equation for a nonzero element of that prime. Its quotient fraction field therefore has strictly lower transcendence degree. Repeating on quotient domains bounds chains by transcendence degree; a surface has function-field transcendence degree two. These arguments also bound all the supports used below. [F2, F4, given, algebra]

2.1 For a coherent sheaf $G$ on any projective scheme supported in dimension at most one, its Euler characteristic is finite, and
$$\chi(G\otimes N)-\chi(G)=\sum_C\ell_{\eta_C}(G)\deg_C(N|_C)$$
for any line bundle $N$. Here is the required construction. A socle vector at a component's generic point gives a generic map $O_C\to G$, since the last nonzero maximal-ideal power of its finite-length generic module is annihilated by that ideal. The coherent $\operatorname{Hom}(O_C,G)$ has a nonzero generic section. Finite local presentation denominators and homogeneous chart coordinates, using [F3], extend it after a sufficiently large twist to a global map $O_C(-m)\to G$ nonzero at that generic point. It is injective because its source is torsion-free on integral $C$. Its quotient lowers that component's generic length by one and leaves other generic lengths unchanged. Finite iteration leaves a finite-support sheaf. Curve terms have finite cohomology by [F1]; finite-support terms have finite-dimensional sections and zero higher cohomology, and twisting preserves their lengths. Compute all terms using finite standard projective affine covers. On principal refinements, affine localization cocycles contract after clearing finitely many denominators and using $1=\sum a_if_i^N$; bounded double-Cech complexes compare covers and give the long exact sequences. Hence these finite computations give finite cohomology and additive Euler characteristics throughout the devissage. For each $O_C(-m)$ the difference is $\deg_C N$ by [F1], and for the final finite-support sheaf it is zero. This proves the formula, including nonreduced and embedded finite supports. [F1, F3, step 1.1, construct, algebra]

3.1 For effective $D$, apply step 2.1 to $G=O_D$ and $N=O(-E)$. Its generic length along $C$ is $\operatorname{ord}_C(D)$ by the local DVR equation, proving the Euler formula in the Statement. If $E$ is also effective, tensor the two length-one complexes $[O(-D)\to O]$ and $[O(-E)\to O]$ in degrees $-1,0$. Each is an explicit locally free resolution of its Cartier quotient. On affine charts the total complex reduces, by exact kernel complexes, both to $[O_D(-E)\to O_D]$ and to $[O_E(-D)\to O_E]$. Interchanging factors changes only the sign on the degree $-2$ term and gives an isomorphism. Finite Cech complexes preserve both reductions by affine localization exactness and their finite row filtrations. The two reduced complexes have finite-dimensional coherent cohomology by step 2.1; their Euler characteristics are respectively $D\cdot E$ and $E\cdot D$. A finite filtration of the same total complex proves equality. This proves effective symmetry, even with shared components. It uses finite cohomology on divisor supports only, not on any line bundle on the whole surface. [step 1.1, step 2.1, construct, algebra]

4.1 Every Cartier divisor $D$ is a difference of effective Cartier divisors. There are finitely many curves with negative coefficient by step 1.1. In a projective embedding, for each such curve choose a homogeneous polynomial vanishing on it but not on $S$; it exists in the nonzero homogeneous ideal of that proper closed subset. Its zero divisor on integral $S$ is effective Cartier and has strictly positive order at the chosen curve's DVR. Multiply these finitely many sections, with powers large enough to dominate all negative coefficients of $D$. Their product has effective Cartier divisor $H$, and every height-one order of $D+H$ is nonnegative. The effectivity test [F2] makes $D+H$ effective. Thus $D=(D+H)-H$. The displayed sum in the Statement is bilinear: orders add in the first variable and curve degrees add in the second by [F1]. Decomposing both variables into effective differences now extends step 3.1's symmetry to all Cartier divisors. If $D=\operatorname{div}(f)$ is principal, symmetry gives $D\cdot E=E\cdot D=0$, since $O(D)$ is trivial on every curve. Every line bundle has a nonzero rational section, by one choice of a nonzero vector in its one-dimensional generic fibre. The local rational equations of that section give its Cartier divisor, and replacing the section adds a principal divisor. This proves the line-bundle pairing and its independence from rational sections. [F1, F2, step 1.1, step 3.1, construct, algebra]

5.1 For a projective birational $f:T\to S$ and a curve $C\subset S$, its generic DVR lifts to $T$: in a projective embedding over $S$ scale the finitely many homogeneous coordinates of the inverse generic point by one with least valuation. The equations then hold over the DVR, giving a centre over $\eta_C$. Its residue contains $k(C)$, so the dimension bound of step 1.1 makes it the generic point of a curve $C'$. The resulting inclusion of DVRs $O_{S,\eta_C}\subseteq O_{T,\eta_{C'}}$ inside the same function field is equality: units stay units and all orders would otherwise have a common positive integer factor, contrary to the target DVR's value group $\mathbb Z$. Uniqueness of this projective centre implies there is exactly one such $C'$, with identical order and residue field. All other curves of $T$ have point image or dominate a different curve. The curve projection formula [F1] gives $\deg_{C'}f^*M=\deg_CM$, whereas point-image curves have degree zero. Evaluating the finite definition with a rational section of $L$ therefore yields $(f^*L)\cdot(f^*M)=L\cdot M$, including any exceptional curves in that section's divisor. [F1, step 1.1, step 4.1, construct, algebra]

6.1 If effective $D,E$ have no common component, multiplication by the equation of $E$ on $O_D$ is injective. Indeed, if locally $fx=0$ modulo an equation $g$ of $D$, then $fx/g$ is regular; at every height-one prime where $g$ has positive order, $f$ is a unit, and at the other height-one primes $x/g$ is already regular. By [F2], $x/g$ is regular on the chart, so $x=0$ modulo $g$. Thus $0\to O_D(-E)\to O_D\to O_{D\cap E}\to0$ is exact. Its final support is finite: the dimension bound in step 1.1 excludes positive-dimensional intersections without a common curve. Step 3.1's Euler difference is consequently the sum of its local lengths, with residue-field degrees, which are one over algebraically closed $k$. Finally, if $L$ is curve-nef and $M$ has a nonzero global section, that section gives an effective divisor $D$. Symmetry and the definition give $L\cdot M=\sum_C\operatorname{ord}_C(D)\deg_C L\ge0$. A globally generated line bundle has a nonzero section by evaluating a finite generating family at the generic fibre. Empty divisors and trivial line bundles give zero. This is the claimed positivity, with no inference of general nef-nef positivity. [F1, F2, step 1.1, step 3.1, step 4.1, algebra] ∎
