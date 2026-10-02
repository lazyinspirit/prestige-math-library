---
id: ex-discriminant-lower-bound
kind: example
title: "Signature constant rules out discriminant ±1"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one
  - thm-minkowski-bound-for-ideal-classes
  - def-ideal-class-group-of-a-domain
  - def-absolute-norm-of-an-ideal
  - lem-nonzero-number-field-ideal-has-finite-quotient
  - lem-bernoulli-inequality
  - thm-gregory-leibniz-series-for-pi-from-a-finite-remainder
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 4 Theorem 4.9 proof, p.72."
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "§7.1 Corollary 7.1.9, p.82."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

Assume the Axiom of Choice. Write the Minkowski numerical constant of a
signature $(r_1,r_2)$ with $n=r_1+2r_2>1$ as
$C_{n,r_2}=(4/\pi)^{r_2}n!/n^n$. Then $C_{n,r_2}<1$, and consequently the
inequality $1\le C_{n,r_2}\sqrt{|d_K|}$ that the class bound produces for a
field of that signature forces $|d_K|>1$. The two cases of degree $2$ are
$C_{2,0}=1/2$ and $C_{2,1}=2/\pi$, and for $n\ge3$ the bound
$r_2\le n/2$ reduces the constant to the auxiliary sequence
$U_n=(4/\pi)^{n/2}n!/n^n<1$.

## Facts & Assumptions

**Given:** The Axiom of Choice and a signature $(r_1,r_2)$ with
$n=r_1+2r_2>1$, together with a number field $K$ of that signature.

[F1] Minkowski bound: every class of $\operatorname{Cl}(\mathcal O_K)$
contains an integral ideal $\mathfrak b$ with
$N\mathfrak b\le M_K=(4/\pi)^{r_2}\frac{n!}{n^n}\sqrt{|d_K|}$
([[thm-minkowski-bound-for-ideal-classes]],
[[def-ideal-class-group-of-a-domain]]).

[F2] For a nonzero integral ideal $\mathfrak b$ the norm
$N\mathfrak b=|\mathcal O_K/\mathfrak b|$ is a finite positive integer, hence
$N\mathfrak b\ge1$
([[def-absolute-norm-of-an-ideal]],
[[lem-nonzero-number-field-ideal-has-finite-quotient]]).

[F3] Gregory-Leibniz with $N=1$ and $N=2$: $\pi/4=1-1/3+R_1$ with
$R_1=\int_0^1x^4/(1+x^2)\,dx>0$ and $\pi/4=1-1/3+1/5+R_2$ with
$R_2=-\int_0^1x^6/(1+x^2)\,dx<0$, so $8/3<\pi<52/15<4$; in particular
$2/\pi<1$ and $4/\pi>1$
([[thm-gregory-leibniz-series-for-pi-from-a-finite-remainder]]).

[F4] Bernoulli's inequality: $(1+x)^m\ge1+mx$ for $x\ge-1$ and natural $m$
([[lem-bernoulli-inequality]]).

[F5] The preceding corollary: for $n>1$, $|d_K|>1$
([[cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one]]).

## Proof

1.1 Degree two: $C_{2,0}=(4/\pi)^0\cdot2!/2^2=1/2<1$, while $C_{2,1}=(4/\pi)\cdot2!/2^2=2/\pi<1$ by [F3]. [F3, algebra]

1.2 Auxiliary sequence: put $U_m:=(4/\pi)^{m/2}m!/m^m$ for $m\ge2$. Then $U_2=2/\pi<1$ by [F3]; for $m\ge2$ Bernoulli's inequality [F4] with $x=1/m$ gives $(1+1/m)^m\ge2$, so $U_{m+1}/U_m=\frac2{\sqrt\pi}\left(\frac m{m+1}\right)^m\le\frac1{\sqrt\pi}<1$ by [F3], and therefore $U_m\le U_2(\sqrt\pi)^{-(m-2)}<1$ for every $m\ge2$. [F3, F4, algebra]

2.1 General signature: $4/\pi>1$ by [F3], so $C_{n,r_2}=(4/\pi)^{r_2}n!/n^n\le(4/\pi)^{n/2}n!/n^n=U_n<1$ by step 1.2 and the hypothesis $r_2\le n/2$; thus $C_{n,r_2}<1$ for every $n>1$. [F3, step 1.2, given, algebra]

3.1 Class bound and conclusion: by [F1] the principal class contains an integral ideal $\mathfrak b$ with $N\mathfrak b\le C_{n,r_2}\sqrt{|d_K|}$; by [F2] $N\mathfrak b$ is a positive integer, so $1\le N\mathfrak b\le C_{n,r_2}\sqrt{|d_K|}$. Since $0<C_{n,r_2}<1$ by steps 1.1 and 2.1, dividing gives $\sqrt{|d_K|}\ge1/C_{n,r_2}>1$, hence $|d_K|>1$. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Summary: for every signature with $n>1$ the numerical constant $C_{n,r_2}$ is less than $1$, so the Minkowski inequality $1\le C_{n,r_2}\sqrt{|d_K|}$ forces $|d_K|>1$; the degree-two constants are $C_{2,0}=1/2$ and $C_{2,1}=2/\pi$. This records exactly where the signature factor $(4/\pi)^{r_2}$ enters and recovers the conclusion of [F5] from the class bound alone. [F5, step 1.1, step 2.1, step 3.1] ∎

## Remarks

The example isolates the arithmetic of the constant: the factor $4/\pi$ is
larger than $1$, so the worst case for a given degree is the maximal number
$r_2\le n/2$ of conjugate pairs, and at $n=2$ the two constants $1/2$ and
$2/\pi$ are already smaller than the smallest possible ideal norm. Only the
elementary bounds $2<\pi<4$ and Bernoulli's inequality are used; the value of
the constant is never needed beyond strict comparison with $1$. Signatures
with $n>1$ that are not realized by any number field cause no difficulty,
since the statement is conditional on a field of the given signature existing.
