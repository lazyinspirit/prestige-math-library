---
id: ex-steenrod-squares-on-real-projective-space
kind: example
title: Steenrod squares on real projective space
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [thm-cartan-formula-for-steenrod-squares, prop-steenrod-square-normalization-instability-and-top-square, def-total-steenrod-square, thm-steenrod-squares-are-well-defined-and-natural, prop-cup-product-is-natural-unital-and-associative, lem-mod-two-cohomology-ring-of-infinite-real-projective-space, lem-real-projective-space-cellular-homology-and-pinch-map, lem-axiomatic-cellular-boundaries-are-integral-incidence-matrices-with-coefficients, thm-cellular-homology-computes-singular-homology, cor-cohomology-over-a-field-is-dual-to-homology-over-that-field, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Section 4.L, formula (*) and its derivation, printed pages 490--491
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Example

Assume AC, and write
$H^*(\mathbb {RP}^{\infty};\mathbb F_2)=\mathbb F_2[a]$ with $|a|=1$.
For all integers $i,j\geq0$,

$$Sq^i(a^j)=\binom ji a^{j+i},$$

where the binomial coefficient is reduced modulo two. If $a_n$ is the named
degree-one class on $\mathbb {RP}^n$, the finite-dimensional formula is

$$Sq^i(a_n^j)=\binom ji a_n^{j+i}\quad\text{in }\mathbb F_2[a_n]/(a_n^{n+1}).$$

Thus the right side vanishes when $i>j$ or $j+i>n$.

## Facts & Assumptions

**Given:** Integers $i,j,n\geq0$, with $n$ used for the
finite-dimensional assertion.

[F1] Under AC,
[[lem-mod-two-cohomology-ring-of-infinite-real-projective-space]] gives the
polynomial ring on $a$. For $n\geq1$, restriction to $\mathbb {RP}^n$
preserves the degree-one generator; for $n=0$ it sends $a$ to zero.

[F2] [[def-total-steenrod-square]] defines
$Sq(x)=\sum_{r=0}^{\deg x}Sq^r(x)$ on a homogeneous class, a finite sum.

[F3] [[prop-steenrod-square-normalization-instability-and-top-square]] gives
$Sq^0x=x$, $Sq^r x=0$ for $r>\deg x$, and
$Sq^{\deg x}x=x\smile x$.

[F4] [[thm-cartan-formula-for-steenrod-squares]] gives
$Sq^k(xy)=\sum_{r+s=k}Sq^r(x)Sq^s(y)$, with only finitely many nonzero terms.

[F5] [[lem-real-projective-space-cellular-homology-and-pinch-map]] constructs
$\mathbb {RP}^n$ with one cell in every degree from zero through $n$, and its
integral cellular boundary coefficients are zero or two.
[[lem-axiomatic-cellular-boundaries-are-integral-incidence-matrices-with-coefficients]]
says that this integral incidence matrix acts on arbitrary coefficients.
[[thm-cellular-homology-computes-singular-homology]] compares the resulting
mod-two cellular homology with singular homology, and, under AC,
[[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]] computes
the corresponding singular cohomology.

[F6] Steenrod squares commute with pullback by
[[thm-steenrod-squares-are-well-defined-and-natural]].

[F7] Pullback preserves cup products and powers by
[[prop-cup-product-is-natural-unital-and-associative]].

[A1] [[def-axiom-of-choice]] is assumed exactly through the ring supplier in
[F1] and field duality in [F5].  Reducing the finite cellular boundary and the
binomial calculation make no further choices.

## Verification

**Proof technique:** total Cartan followed by a finite binomial expansion.

1.1 The total square of the degree-one generator is
$Sq(a)=a+a^2$. [F2, F3]
Indeed, $Sq^0(a)=a$, the top square is $Sq^1(a)=a^2$, and instability removes
every higher component.

2.1 The total square is multiplicative on the powers of $a$. [F2, F4, step 1.1]
All component sums are finite, so summing [F4] over $k$ gives

$$Sq(xy)=\sum_k\sum_{r+s=k}Sq^r(x)Sq^s(y)=Sq(x)Sq(y).$$

Induction on the finite integer $j$, beginning with $Sq(1)=1$, therefore gives
$Sq(a^j)=Sq(a)^j$.

3.1 The infinite-dimensional formula follows by coefficient comparison. [F1, step 1.1, step 2.1]
The ordinary binomial theorem over $\mathbb F_2$ gives

$$Sq(a^j)=(a+a^2)^j=\sum_{r=0}^j\binom jr a^{j+r}.$$

The homogeneous component of degree $j+i$ on the left is $Sq^i(a^j)$.
The component on the right is $\binom ji a^{j+i}$ when $0\leq i\leq j$,
and is zero when $i>j$, which agrees with the usual zero convention for that
binomial coefficient.

4.1 Restriction gives exactly the truncated finite formula. [F1, F5, F6, F7, step 3.1]
Reduction modulo two turns every boundary coefficient in [F5] into zero.
Thus cellular comparison and field duality give one copy of $\mathbb F_2$ in
cohomological degrees $0,\ldots,n$ and zero above degree $n$.  By [F1] and
[F7], the restrictions $a_n^k=i_n^*(a^k)$ are nonzero for $0\leq k\leq n$.
Consequently these powers form every nonzero graded piece and

$$H^*(\mathbb {RP}^n;\mathbb F_2)=\mathbb F_2[a_n]/(a_n^{n+1}).$$

Naturality [F6]--[F7] and [F1] give

$$Sq^i(a_n^j)=Sq^i(i_n^*a^j)=i_n^*Sq^i(a^j)=\binom ji a_n^{j+i}.$$

The quotient in [F5] makes this zero when $j+i>n$. If $j>n$, both sides are
already zero: the input power vanishes, while $j+i>n$ for every $i\geq0$.

5.1 The endpoint and choice conventions agree with the formulas. [F1, F2, F3, F5, F6, A1, step 1.1, step 2.1, step 3.1, step 4.1]
For $j=0$, the formula says $Sq^0(1)=1$ and all positive squares of the unit
vanish. For $i=0$ it says $Sq^0(a^j)=a^j$; for $i=j$ it is the top-square
identity $Sq^j(a^j)=a^{2j}$; and for $i>j$ it is instability. The case $n=0$
is the point: $a_0=0$ and only its zeroth power survives. Projective spaces
are nonempty, zero classes map to zero, and degenerate singular simplices are
already included in the natural operations of [F6]. AC is used only by the
two ring suppliers [F1] and [F5]; every sum and induction here is finite. The
formula is an equality, not either direction of a biconditional. ∎
