---
id: ex-steenrod-squares-on-complex-projective-space-mod-two
kind: example
title: Steenrod squares on complex projective space mod two
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [thm-cartan-formula-for-steenrod-squares, prop-steenrod-square-normalization-instability-and-top-square, def-total-steenrod-square, thm-steenrod-squares-are-well-defined-and-natural, prop-cup-product-is-natural-unital-and-associative, lem-mod-two-cohomology-rings-of-complex-projective-spaces, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: Section 4.L, projective-space formulas after (*), printed pages 490--491
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
$H^*(\mathbb {CP}^{\infty};\mathbb F_2)=\mathbb F_2[c]$ with $|c|=2$.
For all integers $i,j\geq0$,

$$Sq^{2i}(c^j)=\binom ji c^{j+i},$$

with the coefficient reduced modulo two, while
$Sq^r(c^j)=0$ for every odd integer $r\geq0$. For the named class $c_n$ on
$\mathbb {CP}^n$, the same formulas hold in
$\mathbb F_2[c_n]/(c_n^{n+1})$; in particular the even formula vanishes when
$i>j$ or $j+i>n$.

## Facts & Assumptions

**Given:** Integers $i,j,n\geq0$ and an odd integer $r\geq0$, with $n$ used
for the finite-dimensional assertion.

[F1] Under AC,
[[lem-mod-two-cohomology-rings-of-complex-projective-spaces]] gives the finite
and infinite polynomial rings on the degree-two classes $c_n,c$, makes
skeletal restrictions preserve them, and makes all odd cohomology groups zero.

[F2] [[def-total-steenrod-square]] defines
$Sq(x)=\sum_{s=0}^{\deg x}Sq^s(x)$ as a finite sum.

[F3] [[prop-steenrod-square-normalization-instability-and-top-square]] gives
$Sq^0x=x$, $Sq^s x=0$ for $s>\deg x$, and
$Sq^{\deg x}x=x\smile x$.

[F4] [[thm-cartan-formula-for-steenrod-squares]] gives the finite component
formula $Sq^k(xy)=\sum_{s+t=k}Sq^s(x)Sq^t(y)$.

[F5] Steenrod squares commute with pullback by
[[thm-steenrod-squares-are-well-defined-and-natural]].

[F6] Pullback preserves products and powers by
[[prop-cup-product-is-natural-unital-and-associative]].

[A1] [[def-axiom-of-choice]] is assumed exactly through [F1].

## Verification

**Proof technique:** total Cartan and comparison of homogeneous degrees.

1.1 The total square of the degree-two generator is $Sq(c)=c+c^2$. [F1, F2, F3]
Normalization gives the degree-two term $Sq^0(c)=c$, and the top square gives
the degree-four term $Sq^2(c)=c^2$. The intermediate class $Sq^1(c)$ lies in
the zero group $H^3(\mathbb {CP}^{\infty};\mathbb F_2)$ from [F1], and
instability removes every higher component.

2.1 The total square is multiplicative on powers of $c$. [F2, F4, step 1.1]
Summing the finite Cartan identities and regrouping their finite terms gives

$$Sq(xy)=\sum_k\sum_{s+t=k}Sq^s(x)Sq^t(y)=Sq(x)Sq(y).$$

Starting with $Sq(1)=1$, finite induction yields $Sq(c^j)=Sq(c)^j$.

3.1 Homogeneous components give both the even formula and odd vanishing. [F1, step 1.1, step 2.1]
The binomial theorem gives

$$Sq(c^j)=(c+c^2)^j=\sum_{q=0}^j\binom jq c^{j+q}.$$

Every term on the right has degree $2j+2q$. The degree-$2j+2i$ component is
therefore $\binom ji c^{j+i}$, and every component of degree $2j+r$ for odd
$r$ is zero. When $i>j$, the relevant binomial coefficient is zero, agreeing
with instability since $2i>2j$.

4.1 Restriction gives the finite formulas and their truncation. [F1, F5, F6, step 3.1]
For $i_n:\mathbb {CP}^n\hookrightarrow\mathbb {CP}^{\infty}$, naturality
gives

$$Sq^s(c_n^j)=Sq^s(i_n^*c^j)=i_n^*Sq^s(c^j).$$

Facts [F1] and [F6] identify all powers under this pullback. Thus step 3.1
restricts to the two claimed formulas, and the relation $c_n^{n+1}=0$ makes
the even right side zero when $j+i>n$. If $j>n$, the input and every displayed
right side already vanish.

5.1 The boundary and choice conventions are complete. [F1, F2, F3, F5, F6, A1, step 1.1, step 2.1, step 3.1, step 4.1]
For $j=0$, only $Sq^0(1)=1$ survives. For $i=0$ the formula is
$Sq^0(c^j)=c^j$; for $i=j$ it is the top square
$Sq^{2j}(c^j)=c^{2j}$; and $i>j$ is zero. Odd indices include $r=1$ and
are zero even before finite truncation. The point case $n=0$, the first
truncated exponent $j+i=n+1$, zero inputs, and nonemptiness are explicit.
Degenerate singular simplices are included in the natural operations [F5].
AC is inherited only from [F1], while every sum and induction here is finite.
No biconditional or converse is asserted. ∎
