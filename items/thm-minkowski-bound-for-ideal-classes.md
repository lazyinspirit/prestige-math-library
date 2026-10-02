---
id: thm-minkowski-bound-for-ideal-classes
kind: theorem
title: "Minkowski bound for ideal classes"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-small-element-in-a-number-field-ideal
  - cor-ring-of-integers-is-a-dedekind-domain
  - def-ideal-class-group-of-a-domain
  - lem-ideal-class-group-well-defined
  - thm-nonzero-ideals-in-dedekind-domains-are-invertible
  - def-invertible-fractional-ideal
  - def-product-and-colon-of-fractional-ideals
  - lem-fractional-ideal-operations-well-defined
  - def-fractional-ideal
  - def-generated-and-principal-ideals
  - thm-ideal-norm-is-multiplicative
  - thm-principal-ideal-norm-is-absolute-field-norm
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 4 Theorem 4.3 proof, p.81."
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "§7.1 Theorem 7.1.2 proof, pp.81-82."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a number
field of degree $n$ and signature $(r_1,r_2)$, and put

$$M_K:=\Bigl(\frac4\pi\Bigr)^{r_2}\frac{n!}{n^n}\sqrt{|d_K|}.$$

Then every class in the ideal class group
$\operatorname{Cl}(\mathcal O_K)$
([[def-ideal-class-group-of-a-domain]]) contains an integral ideal
$\mathfrak b\subseteq\mathcal O_K$ with $N\mathfrak b\le M_K$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$, its ring of integers
$\mathcal O_K$, and a class $[I]\in\operatorname{Cl}(\mathcal O_K)$ represented
by a nonzero fractional ideal $I$.

[F1] Under the Axiom of Choice, $\mathcal O_K$ is a Dedekind domain
([[cor-ring-of-integers-is-a-dedekind-domain]]).

[F2] A fractional ideal of $\mathcal O_K$ is a nonzero $\mathcal O_K$-submodule
$I\subseteq K$ for which some $0\ne d\in\mathcal O_K$ satisfies
$dI\subseteq\mathcal O_K$; its inverse is $I^{-1}=(\mathcal O_K:I)$, products
and colons of fractional ideals are fractional ideals, and every nonzero
fractional ideal of a Dedekind domain is invertible, so that
$II^{-1}=\mathcal O_K$ and the nonzero fractional ideals form a group under
multiplication
([[def-fractional-ideal]],
[[def-product-and-colon-of-fractional-ideals]],
[[lem-fractional-ideal-operations-well-defined]],
[[def-invertible-fractional-ideal]],
[[thm-nonzero-ideals-in-dedekind-domains-are-invertible]]).

[F3] $\operatorname{Cl}(\mathcal O_K)$ is the quotient of the group of nonzero
fractional ideals by the subgroup of nonzero principal fractional ideals, and
multiplication descends to the quotient
([[def-ideal-class-group-of-a-domain]],
[[lem-ideal-class-group-well-defined]]).

[F4] Small nonzero element in an integral ideal: for every nonzero integral
ideal $\mathfrak c\subseteq\mathcal O_K$ there is $0\ne\beta\in\mathfrak c$
with $|N_{K/\mathbb Q}(\beta)|\le M_K\,N\mathfrak c$
([[thm-small-element-in-a-number-field-ideal]]).

[F5] For $0\ne\alpha\in\mathcal O_K$ the principal ideal $(\alpha)$ satisfies
$N((\alpha))=|N_{K/\mathbb Q}(\alpha)|$, and for nonzero integral ideals
$\mathfrak a,\mathfrak b$ one has $N(\mathfrak a\mathfrak b)=N\mathfrak a\,N\mathfrak b$
([[thm-principal-ideal-norm-is-absolute-field-norm]],
[[thm-ideal-norm-is-multiplicative]]).

[F6] $(\alpha)\subseteq\mathfrak c$ exactly when $\alpha\in\mathfrak c$
([[def-generated-and-principal-ideals]]).

## Proof

1.1 By [F1] the ring $\mathcal O_K$ is Dedekind, so the fractional ideals and the class group of [F2] and [F3] are available, and the class $[I]$ has a nonzero fractional representative $I$. [F1, F2, F3, given]
2.1 By the denominator condition in [F2] applied to the fractional ideal $I^{-1}$, there is $0\ne u\in\mathcal O_K$ with $\mathfrak b:=uI^{-1}\subseteq\mathcal O_K$; $\mathfrak b$ is a nonzero integral ideal, and $[\mathfrak b]=[I]^{-1}$ in $\operatorname{Cl}(\mathcal O_K)$ because $u$ contributes the principal class. [F2, F3, step 1.1]
3.1 Applying [F4] to the nonzero integral ideal $\mathfrak b$ gives $0\ne\beta\in\mathfrak b$ with $|N_{K/\mathbb Q}(\beta)|\le M_K\,N\mathfrak b$. [F4, step 2.1]
4.1 By [F6] the membership $\beta\in\mathfrak b$ says $(\beta)\subseteq\mathfrak b$; multiplying this inclusion by the fractional ideal $\mathfrak b^{-1}$ and using $\mathfrak b\mathfrak b^{-1}=\mathcal O_K$ from [F2] gives $\mathfrak a:=(\beta)\mathfrak b^{-1}\subseteq\mathcal O_K$, a nonzero integral ideal because $(\beta)\ne0$ and $\mathfrak b^{-1}\ne0$. [F2, F6, step 3.1]
5.1 In the class group, $[\mathfrak a]=[(\beta)]\,[\mathfrak b]^{-1}=[\mathfrak b]^{-1}=[I]$, since the principal fractional ideal $(\beta)$ represents the identity class. [F3, step 2.1, step 4.1]
5.2 From $\mathfrak a=(\beta)\mathfrak b^{-1}$ we get the identity of integral ideals $\mathfrak a\mathfrak b=(\beta)$; both factors are nonzero integral ideals, so [F5] gives $N\mathfrak a\,N\mathfrak b=N((\beta))=|N_{K/\mathbb Q}(\beta)|\le M_K\,N\mathfrak b$, and dividing by the positive integer $N\mathfrak b$ yields $N\mathfrak a\le M_K$. [F5, step 3.1, step 4.1, algebra]
6.1 Thus the integral ideal $\mathfrak a$ lies in the class $[I]$ and satisfies $N\mathfrak a\le M_K$; since the class was arbitrary, every class of $\operatorname{Cl}(\mathcal O_K)$ contains such an ideal. [step 5.1, step 5.2] ∎

## Remarks

The preliminary denominator $u$ is what makes the argument work without a norm
theory for fractional ideals: it converts $I^{-1}$ into an integral ideal, the
small-element theorem is applied there, and the factor $(\beta)$ then produces
the integral representative $\mathfrak a=(\beta)\mathfrak b^{-1}$ in the class
$[I]$. The class direction is $[\mathfrak a]=[\mathfrak b]^{-1}=[I]$, not
$[I]^{-1}$. Because $M_K$ depends only on the signature and discriminant, the
theorem bounds every class by one numerical constant; this is the input to
both the finiteness of the class group and the generation by small prime
ideals.
