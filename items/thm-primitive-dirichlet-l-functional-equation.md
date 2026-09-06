---
id: thm-primitive-dirichlet-l-functional-equation
kind: theorem
title: "Functional equation for primitive Dirichlet L-functions"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-primitive-dirichlet-l-analytic-continuation, def-completed-dirichlet-l-function, lem-fourier-transform-of-a-gaussian, thm-twisted-poisson-summation, thm-primitive-gauss-sum-norm]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Nickolas Andersen, Analytic Number Theory, Theorems 16.7-16.8"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Statement

For primitive $\chi$ modulo $q$ of parity $a$,
$$\Lambda(s,\chi)=\varepsilon(\chi)\Lambda(1-s,\overline\chi),\qquad \varepsilon(\chi)=(-i)^a\tau(\chi)/\sqrt q.$$
For $q=1$ this is the zeta functional equation.

## Facts & Assumptions

**Given:** A primitive character $\chi$ modulo $q$ of parity $a$.

[F1] The completion continues as stated ([[thm-primitive-dirichlet-l-analytic-continuation]]).

[F2] Its normalization is fixed in [[def-completed-dirichlet-l-function]].

[F3] The Gaussian transform and twisted Poisson formula have the stated normalizations ([[lem-fourier-transform-of-a-gaussian]], [[thm-twisted-poisson-summation]]).

## Proof

**Proof technique:** direct.

1.1 Define, for $t>0$, $$\theta_\chi(t)=\sum_{n\in\mathbb Z}n^a\chi(n)e^{-\pi n^2t/q}.$$ For $a=0$, [F3] applied to $x\mapsto e^{-\pi tx^2/q}$ gives $$\theta_\chi(t)=\frac{\tau(\chi)}{\sqrt q}\,t^{-1/2}\theta_{\overline\chi}(1/t).$$ For $a=1$, differentiating the Gaussian transform gives $$\widehat{xe^{-\pi tx^2/q}}(m/q)=-i\,m\sqrt q\,t^{-3/2}e^{-\pi m^2/(qt)},$$ so [F3] gives the same formula with the extra factor $-i$ and exponent $t^{-3/2}$. Thus in both cases $$\theta_\chi(t)=\varepsilon(\chi)t^{-a-1/2}\theta_{\overline\chi}(1/t).$$ [F3, given, algebra]

2.1 Suppose first that $q>1$. Then $\chi(0)=0$, so termwise integration for $\operatorname{Re}s>1$ and parity give $$2\Lambda(s,\chi)=\int_0^\infty \theta_\chi(t)t^{(s+a)/2-1}\,dt.$$ Substitute $t=1/u$ after using step 1.1; the exponent becomes $u^{(1-s+a)/2-1}$, so the right side is $2\varepsilon(\chi)\Lambda(1-s,\overline\chi)$. Thus the displayed equation holds for $q>1$ by [F1]. [F1, F2, step 1.1, algebra]

3.1 For $q=1$, put $\theta(t)=\sum_{n\in\mathbb Z}e^{-\pi n^2t}$. Step 1.1 becomes $\theta(t)=t^{-1/2}\theta(1/t)$, while termwise integration gives $$2\Lambda(s,\mathbf1)=\int_0^\infty(\theta(t)-1)t^{s/2-1}\,dt\qquad(\operatorname{Re}s>1).$$ Splitting at $1$ and substituting $t=1/u$ in the first piece yields $$2\Lambda(s,\mathbf1)=\int_1^\infty(\theta(t)-1)\left(t^{s/2-1}+t^{(1-s)/2-1}\right)\,dt+\frac{2}{s(s-1)}.$$ The right side is invariant under $s\mapsto1-s$ and supplies its meromorphic continuation, so $\Lambda(s,\mathbf1)=\Lambda(1-s,\mathbf1)$. Together with step 2.1 this proves the theorem. [F1, F2, step 1.1, algebra] ∎
