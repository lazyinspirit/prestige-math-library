---
id: thm-existence-and-uniqueness-of-multilinear-extension
kind: theorem
title: "Boolean-cube interpolation"
status: draft
origin: pipeline
deps: [def-multilinear-extension]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: induction
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Justin Thaler, Proofs, Arguments, and Zero-Knowledge (2023), \u00a73.5, Fact 3.5 and Lemma 3.6, pp.29\u201330"
      url: "https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf"
---

## Statement

For every field $F$, $n\geq0$, and table $f:\{0,1\}^n\to F$, there is exactly one multilinear extension. It is
$$\widetilde f(X)=\sum_{b\in\{0,1\}^n} f(b)\lambda_b(X),\qquad \lambda_b(X)=\prod_{i=1}^n\bigl(b_iX_i+(1-b_i)(1-X_i)\bigr).$$
An empty product is $1$. Equality and uniqueness are for formal polynomials, including in characteristic two.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] A multilinear extension agrees with the table at every Boolean vertex and has individual exponents at most one ([[def-multilinear-extension]]).

## Proof

1.1 Each factor in $\lambda_b$ is $X_i$ when $b_i=1$ and $1-X_i$ when $b_i=0$. Hence $\lambda_b$ is multilinear. At a Boolean vector $c$, every factor equals one if $c=b$; if $c\ne b$, a differing coordinate supplies a zero factor. Thus $\lambda_b(c)$ is one for $b=c$ and zero otherwise. [F1, algebra]

1.2 For uniqueness consider a multilinear polynomial $h$ vanishing at all Boolean vertices. In dimension zero it is a constant with value zero, hence is zero. For positive dimension assume the assertion in dimension $n-1$ and write $h=A+X_nB$ with $A,B$ multilinear in the other variables. Its restrictions $h_0=A$ and $h_1=A+B$ vanish on that smaller cube, so both are zero by the induction hypothesis. [F1, base, ih]

2.1 The displayed finite sum is multilinear and takes value $f(c)$ at $c$. When $n=0$ it is the single constant $f(())$. In particular the zero table extends to zero and the constant-one table extends to one. [step 1.1, algebra]

3.1 The formal identity $h=(1-X_n)h_0+X_nh_1$ gives $h=0$. Induction proves the vanishing assertion in every dimension; applying it to the difference of two extensions proves uniqueness. All identities used only field addition and multiplication, with $0\ne1$, so characteristic two is included. [step 2.1, step 1.2, discharge-induction, algebra] ∎
