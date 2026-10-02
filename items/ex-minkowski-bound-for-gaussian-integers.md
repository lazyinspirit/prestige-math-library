---
id: ex-minkowski-bound-for-gaussian-integers
kind: example
title: "Minkowski bound for Gaussian integers"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-minkowski-bound-for-ideal-classes
  - thm-ring-of-integers-of-a-quadratic-field
  - cor-discriminant-of-a-quadratic-field
  - def-archimedean-embeddings-and-number-field-signature
  - def-absolute-norm-of-an-ideal
  - lem-nonzero-number-field-ideal-has-finite-quotient
  - def-ideal-class-group-of-a-domain
  - cor-ring-of-integers-is-a-dedekind-domain
  - thm-dedekind-pid-class-group-characterisation
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
      locator: "Ch. 4 Example 4.5, p.71."
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "§7.1 Example 7.1.3, p.78."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

Assume the Axiom of Choice. For $K=\mathbb Q(i)$ the Minkowski constant is
$M_K=4/\pi<2$, so every class in $\operatorname{Cl}(\mathbb Z[i])$ has an
integral representative of norm at most $M_K$, hence of norm $1$ and equal to
$\mathbb Z[i]$ itself; the class group of the Gaussian integers is trivial and
$\mathbb Z[i]$ is a principal ideal domain.

## Facts & Assumptions

**Given:** The Axiom of Choice and the imaginary quadratic field
$K=\mathbb Q(i)$ with $\mathcal O_K=\mathbb Z[i]$ and discriminant $d_K=-4$.

[F1] For the squarefree integer $d=-1$, which is $3\pmod4$, the
quadratic-field formulas give $\mathcal O_K=\mathbb Z[i]$ and
$d_K=4\cdot(-1)=-4$
([[thm-ring-of-integers-of-a-quadratic-field]],
[[cor-discriminant-of-a-quadratic-field]]).

[F2] Signature: $r_1$ is the number of field embeddings $K\to\mathbb R$ fixing
$\mathbb Q$ and $r_2$ is the number of complex-conjugate pairs among the
nonreal field embeddings $K\to\mathbb C$ fixing $\mathbb Q$, with
$r_1+2r_2=[K:\mathbb Q]$
([[def-archimedean-embeddings-and-number-field-signature]]).

[F3] Minkowski bound: every class of $\operatorname{Cl}(\mathcal O_K)$
contains an integral ideal $\mathfrak b$ with $N\mathfrak b\le M_K$
([[thm-minkowski-bound-for-ideal-classes]],
[[def-ideal-class-group-of-a-domain]]).

[F4] For a nonzero integral ideal $\mathfrak a$ the norm
$N\mathfrak a=|\mathcal O_K/\mathfrak a|$ is a finite positive integer, so
$N\mathfrak a\ge1$, and $N\mathfrak a=1$ forces $\mathfrak a=\mathcal O_K$
([[def-absolute-norm-of-an-ideal]],
[[lem-nonzero-number-field-ideal-has-finite-quotient]]).

[F5] Gregory-Leibniz: $\pi/4=1-1/3+R_1$ with
$R_1=\int_0^1x^4/(1+x^2)\,dx>0$, hence $\pi>8/3>2$
([[thm-gregory-leibniz-series-for-pi-from-a-finite-remainder]]).

[F6] Under the Axiom of Choice, the ring of integers of a number field is a
Dedekind domain ([[cor-ring-of-integers-is-a-dedekind-domain]]).

[F7] Dedekind PID criterion: a Dedekind domain $R$ is a principal ideal
domain if and only if its ideal class group is trivial
([[thm-dedekind-pid-class-group-characterisation]]).

## Proof

1.1 By [F1], $\mathcal O_K=\mathbb Z[i]$ and $d_K=-4$. Every field embedding $K\to\mathbb C$ fixing $\mathbb Q$ sends $i$ to a root of $X^2+1$, that is, to $\pm i$, and both of these are nonreal; so $(r_1,r_2)=(0,1)$ with $n=2$ by [F2]. [F1, F2, algebra]
2.1 Minkowski constant: by step 1.1 and [F1], $M_K=(4/\pi)^{1}\frac{2!}{2^2}\sqrt{4}=\frac4\pi\cdot\frac12\cdot2=\frac4\pi$; by [F5] $\pi>8/3>2$, so $M_K=4/\pi<2$. [F5, step 1.1, algebra]
3.1 Every class of $\operatorname{Cl}(\mathcal O_K)$ contains an integral ideal $\mathfrak b$ with $N\mathfrak b\le M_K<2$ by [F3] and step 2.1. By [F4] the norm $N\mathfrak b$ is a positive integer, so $N\mathfrak b=1$ and therefore $\mathfrak b=\mathcal O_K$, which is principal; hence every class is the principal class and $\operatorname{Cl}(\mathbb Z[i])$ is trivial. [F3, F4, step 2.1]
4.1 By [F6] the Gaussian integers $\mathbb Z[i]=\mathcal O_K$ form a Dedekind domain, so the criterion [F7] applies and the triviality of the class group from step 3.1 makes $\mathbb Z[i]$ a principal ideal domain. [F6, F7, step 3.1]
5.1 In summary, $K=\mathbb Q(i)$ has $M_K=4/\pi<2$, $\operatorname{Cl}(\mathbb Z[i])$ is trivial, and $\mathbb Z[i]$ is a principal ideal domain. [step 1.1, step 2.1, step 3.1, step 4.1] ∎

## Remarks

This is the smallest case of the Minkowski bound: the signature $(0,1)$
contributes the factor $4/\pi$ rather than none, but the unique class bound
$4/\pi<2$ still falls below the smallest norm of a nonzero nonunit ideal, so
the bound certifies that the class group is trivial without any further
computation. The passage from a trivial class group to the principal ideal
domain property uses that $\mathbb Z[i]$ is Dedekind, since a general domain
with trivial class group need not be a PID.
