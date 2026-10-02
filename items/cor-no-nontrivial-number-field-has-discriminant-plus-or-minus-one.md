---
id: cor-no-nontrivial-number-field-has-discriminant-plus-or-minus-one
kind: corollary
title: "Nontrivial number fields have discriminant of absolute value greater than one"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-minkowski-bound-for-ideal-classes
  - def-absolute-norm-of-an-ideal
  - lem-nonzero-number-field-ideal-has-finite-quotient
  - lem-bernoulli-inequality
  - thm-gregory-leibniz-series-for-pi-from-a-finite-remainder
  - def-ideal-class-group-of-a-domain
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
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a number
field of degree $n=[K:\mathbb Q]>1$. Then $|d_K|>1$; in particular $d_K$ is
neither $1$ nor $-1$.

## Facts & Assumptions

**Given:** The Axiom of Choice and a number field $K$ of degree $n>1$ with
signature $(r_1,r_2)$, so that $0\le r_2\le n/2$.

[F1] Minkowski bound: every class of $\operatorname{Cl}(\mathcal O_K)$
contains an integral ideal $\mathfrak b$ with
$N\mathfrak b\le M_K=(4/\pi)^{r_2}(n!/n^n)\sqrt{|d_K|}$
([[thm-minkowski-bound-for-ideal-classes]],
[[def-ideal-class-group-of-a-domain]]).

[F2] For a nonzero integral ideal $\mathfrak b$ the absolute norm
$N\mathfrak b=|\mathcal O_K/\mathfrak b|$ is a finite positive integer, hence
at least $1$
([[def-absolute-norm-of-an-ideal]],
[[lem-nonzero-number-field-ideal-has-finite-quotient]]).

[F3] Bernoulli's inequality: $(1+x)^n\ge1+nx$ for $x\ge-1$ and natural $n$
([[lem-bernoulli-inequality]]).

[F4] Gregory-Leibniz: for every natural $N$,
$\pi/4=\sum_{k=0}^N(-1)^k/(2k+1)+R_N$ with
$R_N=(-1)^{N+1}\int_0^1x^{2N+2}/(1+x^2)\,dx$
([[thm-gregory-leibniz-series-for-pi-from-a-finite-remainder]]).

## Proof

1.1 The principal class of $\operatorname{Cl}(\mathcal O_K)$ exists, so by [F1] it contains an integral ideal $\mathfrak b$ with $N\mathfrak b\le M_K$; by [F2] the norm $N\mathfrak b$ is a positive integer, so $N\mathfrak b\ge1$ and therefore $1\le(4/\pi)^{r_2}(n!/n^n)\sqrt{|d_K|}$. [F1, F2, given]
1.2 Take $N=1$ and $N=2$ in [F4]: $\pi/4=1-1/3+R_1$ with $R_1=\int_0^1x^4/(1+x^2)\,dx>0$ gives $\pi>8/3>2$, and $\pi/4=1-1/3+1/5+R_2$ with $R_2=-\int_0^1x^6/(1+x^2)\,dx<0$ gives $\pi<52/15<4$. Hence $2/\pi<1$ and $4/\pi>1$. [F4, algebra]
2.1 Put $U_m:=(4/\pi)^{m/2}m!/m^m$ for $m\ge2$. Then $U_2=(4/\pi)\cdot2/4=2/\pi<1$ by step 1.2. [step 1.2, algebra]
2.2 For $m\ge2$, Bernoulli's inequality [F3] with $x=1/m$ gives $(1+1/m)^m\ge2$, so $(m/(m+1))^m\le1/2$ and $\frac{U_{m+1}}{U_m}=\frac2{\sqrt\pi}\left(\frac{m}{m+1}\right)^m\le\frac1{\sqrt\pi}<1$. [F3, step 1.2, algebra]
3.1 Consequently $U_m\le U_2(\sqrt\pi)^{-(m-2)}<1$ for every $m\ge2$; in particular $U_n<1$. [step 2.1, step 2.2, algebra]
4.1 Since $r_2\le n/2$ and $4/\pi>1$ by step 1.2, $(4/\pi)^{r_2}\le(4/\pi)^{n/2}$, so $c:=(4/\pi)^{r_2}n!/n^n\le U_n<1$ with $c>0$. [step 3.1, given, algebra]
5.1 Step 1.1 gives $1\le c\sqrt{|d_K|}$ with $0<c<1$, so $\sqrt{|d_K|}\ge1/c>1$ and hence $|d_K|>1$. [step 1.1, step 4.1, algebra]
6.1 Thus every number field of degree $n>1$ has $|d_K|>1$, so its discriminant is neither $1$ nor $-1$; the degree-one case is excluded by the hypothesis. [step 5.1, given] ∎
## Remarks

The estimate compares the Minkowski constant against the smallest possible
norm of an integral ideal, namely $1$. Two elementary inequalities drive it:
the two-sided bound $2<\pi<4$, extracted here from the Gregory-Leibniz series
with two and three terms respectively (so that $2/\pi<1$ and $4/\pi>1$), and
Bernoulli's inequality $(1+1/m)^m\ge2$, which makes the auxiliary sequence
$U_m$ strictly decreasing. The hypothesis $n>1$ is essential: $d_{\mathbb Q}=1$,
so the conclusion fails for the degree-one field.
