---
id: lem-standard-hermitian-form-on-functions-on-a-nonempty-finite-set-is-an-inner-product
kind: lemma
title: "The normalized Hermitian form on a finite function space"
status: draft
origin: pipeline
pipeline_run: phase-2-wave-1
deps: [def-inner-product-space, def-complex-conjugate-real-imaginary-part-and-modulus, def-sum-over-a-finite-index-set, lem-finite-sum-laws, def-finite-sum-in-a-commutative-monoid, lem-complex-conjugation-and-modulus-laws, thm-induction-principle]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Etingof et al., Introduction to Representation Theory"
      url: "https://math.mit.edu/~etingof/reprbook.pdf"
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

Let $X$ be a nonempty finite set. On $\mathbb C^X$, with pointwise vector-space operations, define $\langle f,h\rangle=|X|^{-1}\sum_{x\in X}f(x)\overline{h(x)}$. The denominator is the positive real image of $|X|$. This is an inner product, linear in the first variable.

## Facts & Assumptions

**Given:** $X$ finite and nonempty, $m=|X|>0$ viewed in $\mathbb R\subset\mathbb C$, and functions $f,h:X\to\mathbb C$.

[F1] The linear-first inner-product axioms are linearity in the first variable, conjugate symmetry, and positive definiteness ([[def-inner-product-space]]).

[F2] For $z=a+bi$, $\overline z=a-bi$ and $|z|=\sqrt{a^2+b^2}$ ([[def-complex-conjugate-real-imaginary-part-and-modulus]]).

[F3] Finite real sums are defined by enumeration, independently of that enumeration ([[def-sum-over-a-finite-index-set]]).

[F4] A finite sum of nonnegative reals is nonnegative and is zero only if every summand is zero ([[lem-finite-sum-laws]]).

[F5] Finite monoid sums are independent of enumeration and agree with real sums on real summands ([[def-finite-sum-in-a-commutative-monoid]]).

[F6] Conjugation preserves addition and multiplication, is involutive, and $z\overline z=|z|^2\ge0$ with equality exactly at $z=0$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F7] A property holding at zero and preserved under successor holds for every natural number ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 Pointwise addition and scaling make $\mathbb C^X$ a vector space: each abelian addition identity, both distributive identities, scalar associativity and the scalar identity hold at each $x$ by the field laws in $\mathbb C$. F5 defines every complex sum in the displayed form. Since $m>0$, $m^{-1}$ exists and is positive real, and F2 gives $\overline{m^{-1}}=m^{-1}$. Thus the form is defined on every pair of functions. [F5, F2, given, algebra]

1.2 For complex lists $a_j,b_j$ and $c\in\mathbb C$, finite sums satisfy $\sum_j(a_j+b_j)=\sum_j a_j+\sum_j b_j$, $\sum_j ca_j=c\sum_j a_j$ and $\overline{\sum_j a_j}=\sum_j\overline{a_j}$. Here is the induction verifying their complex types: at length zero all sums vanish and $\overline0=0$. On appending $a,b$, the first formula follows by rearranging $(A+B)+(a+b)=(A+a)+(B+b)$; the second from $cA+ca=c(A+a)$; the third from $\overline{A+a}=\overline A+\overline a$. F7 proves the three identities for every length, and F5 transfers them to any finite enumeration of $X$. [F5, F6, F7, algebra]

2.1 For $a,b\in\mathbb C$ and $f_1,f_2,h\in\mathbb C^X$, expand the summand and apply step 1.2 to obtain $\langle af_1+bf_2,h\rangle=m^{-1}\sum_x(af_1(x)+bf_2(x))\overline{h(x)}=a\langle f_1,h\rangle+b\langle f_2,h\rangle$. [step 1.2, algebra]

2.2 Applying conjugation to the finite sum and using its involution gives $\overline{\langle h,f\rangle}=m^{-1}\sum_x\overline{h(x)}f(x)=\langle f,h\rangle$. [step 1.1, step 1.2, F6, algebra]

2.3 On the diagonal, F6 gives $\langle f,f\rangle=m^{-1}\sum_x|f(x)|^2$. These are nonnegative real summands, so F5 identifies their sum with the real finite sum of F3, and F4 shows the result is real and nonnegative. If it is zero, multiplication by $m>0$ gives $\sum_x|f(x)|^2=0$; F4 forces each $|f(x)|^2=0$, hence $f(x)=0$ by F6. Conversely $f=0$ makes every summand zero. [F6, F5, F3, F4, step 1.1]

3.1 Steps 2.1–2.3 verify F1 and therefore give an inner product. If $X=\{x\}$ the expression is $f(x)\overline{h(x)}$ and the same verification applies. The zero function has diagonal value zero by step 2.3; the empty set is excluded precisely because the prescribed normalization would divide by zero. [F1, step 2.1, step 2.2, step 2.3] ∎

## Sources

[Axler](https://linear.axler.net/LADR4e.pdf), 6.2–6.3(a),(b), pp. 183–184, fixes the linear-first convention and positive weights. [Etingof et al.](https://math.mit.edu/~etingof/reprbook.pdf), §4.5 opening, p. 67, is the class-function specialization. The complex finite-sum laws and definiteness are explicitly derived above.
