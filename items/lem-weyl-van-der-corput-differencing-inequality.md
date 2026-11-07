---
id: lem-weyl-van-der-corput-differencing-inequality
kind: lemma
title: "Weyl–van der Corput Differencing Inequality for a Finite Complex Sequence"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-finite-sum
  - def-finite-sum-in-a-commutative-monoid
  - lem-finite-sum-laws
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - thm-complex-numbers-form-a-field
  - lem-of-square-monotone
  - thm-cauchy-schwarz-finite
  - lem-complex-conjugation-and-modulus-laws
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "H. W. E. Elkies, Math 229, Exponential sums III: the van der Corput inequalities"
      url: "https://people.math.harvard.edu/~elkies/M229.09/vdc.pdf"
      locator: "Complete handout, printed pp. 2-3, Weyl's shift inequality and its proof"
---

## Statement

Let $N\ge1$ and $1\le H\le N$ be integers, and let
$z_0,\ldots,z_{N-1}\in\mathbb C$. Define
$
S:=\sum_{j<N}z_j,\qquad
C_h:=\sum_{j<N-h}z_{j+h}\overline{z_j}\quad(1\le h<H).
$
Then
$
|S|^2\le \frac{N+H-1}{H}
\left(\sum_{j<N}|z_j|^2+
2\sum_{h=1}^{H-1}\left(1-\frac hH\right)|C_h|\right).
$
An empty correlation sum, including the case $H=1$, has value $0$.

## Statement references

[Elkies, Math 229, “Exponential sums III: the van der Corput inequalities,” complete handout](https://people.math.harvard.edu/~elkies/M229.09/vdc.pdf)

## Facts & Assumptions

**Given:** Integers $N\ge1$ and $1\le H\le N$, and complex numbers
$z_0,\ldots,z_{N-1}$. Prove the displayed inequality.

[F1] [[def-finite-sum-in-a-commutative-monoid]]: each displayed complex sum is
the finite-set sum in $(\mathbb C,+,0)$ over its indicated finite index set,
using the increasing enumeration of an integer interval; for an initial
segment this is $\sum_{j<m}z_j$. The empty sum is $0$.

[F2] [[def-finite-sum]]: real initial-segment sums are defined by recursion,
with empty sum $0$ and $\sum_{j<m+1}a_j=\sum_{j<m}a_j+a_m$.

[F3] [[lem-finite-sum-laws]]: real finite sums are additive, including
$\sum_{j<m}(a_j+b_j)=\sum_{j<m}a_j+\sum_{j<m}b_j$, and
$\sum_{j<m}1=m$.

[F4] [[thm-cauchy-schwarz-finite]]: for real lists $a_0,\ldots,a_{m-1}$ and $b_0,\ldots,b_{m-1}$,
$\left(\sum_{j<m}a_jb_j\right)^2\le
\left(\sum_{j<m}a_j^2\right)\left(\sum_{j<m}b_j^2\right)$.

[F5] [[def-complex-conjugate-real-imaginary-part-and-modulus]],
[[thm-complex-numbers-form-a-field]], and [[lem-of-square-monotone]]: if
$z=x+iy$, then $|z|^2=x^2+y^2$ and the coordinate formulas for addition show
that the real and imaginary parts of a finite sum are the sums of the
corresponding coordinates. Moreover $x\le|z|$: this is immediate for $x\le0$,
while for $x>0$ one has $x^2\le x^2+y^2=|z|^2$ and both sides being squared are
nonnegative.

[F6] [[lem-complex-conjugation-and-modulus-laws]]:
$\overline{z+w}=\overline z+\overline w$,
$\overline{zw}=\overline z\,\overline w$, and
$z\overline z=|z|^2$ for complex $z,w$. Its additivity law passes through
finite sums by the finite-sum recursion in [F1].

## Proof

1.1 Extend $z_j$ by $w_j=0$ for integers $j\notin\{0,\ldots,N-1\}$, and set $A_n=\sum_{r=0}^{H-1}w_{n+r}$. Each $z_j$ occurs once for every $r\in\{0,\ldots,H-1\}$, at the index $n=j-r$; hence $H S=\sum_{n=1-H}^{N-1}A_n$. There are $N+H-1$ terms in this last sum. [given, F1, construct]

1.2 Expanding each $|A_n|^2$, the pairs with equal shift contribute $H\sum_{j<N}|z_j|^2$. For each $h\in\{1,\ldots,H-1\}$, there are exactly $H-h$ pairs whose shifts differ by $h$; the two orders of each pair contribute $C_h+\overline{C_h}=2\operatorname{Re}C_h\le2|C_h|$, by [F5]-[F6]. Therefore $ \sum_{n=1-H}^{N-1}|A_n|^2 \le H\sum_{j<N}|z_j|^2+ 2\sum_{h=1}^{H-1}(H-h)|C_h|. $ [given, F1, F5, F6, algebra]

2.1 Write $A_n=x_n+iy_n$. Applying [F4] to the real lists $(x_n)$ and $(y_n)$ against the list of $N+H-1$ ones, and using [F3] for real-sum additivity and the sum of ones, gives $\left(\sum_n x_n\right)^2+\left(\sum_n y_n\right)^2\le(N+H-1)\sum_n(x_n^2+y_n^2)$. By [F5], this is $ \left|\sum_{n=1-H}^{N-1}A_n\right|^2 \le (N+H-1)\sum_{n=1-H}^{N-1}|A_n|^2. $ [F3, F4, F5, step 1.1, algebra]

3.1 Substitute step 1.2 into step 2.1, use $H S=\sum_nA_n$ from step 1.1, and divide by $H^2>0$. This gives the displayed inequality, including $H=1$, when the correlation sum is empty. [given, step 1.1, step 2.1, step 1.2, algebra] ∎
