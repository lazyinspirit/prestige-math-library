---
id: "thm-leibniz-rule-for-distributions"
kind: "theorem"
title: "Leibniz rule for distributions"
deps: ["def-distributional-derivative", "def-multiplication-of-a-distribution-by-a-smooth-function"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For $a\in C^\infty(\Omega)$, $u\in\mathcal D'(\Omega)$ and $\alpha\in\mathbb N_0^n$,
$$\partial^\alpha(au)=\sum_{\beta\le\alpha}\binom\alpha\beta(\partial^\beta a)\partial^{\alpha-\beta}u.$$
Here $\beta\le\alpha$ is coordinatewise and $\binom\alpha\beta=\prod_i\binom{\alpha_i}{\beta_i}$. The identity is in the bilinear complex convention and requires no choice axiom.

## Facts & Assumptions

[F1] Distribution derivatives are signed transposes of the continuous test derivatives, whose smooth mixed partials commute ([[def-distributional-derivative]]).

[F2] Smooth multiplication is defined by $(av)(\varphi)=v(a\varphi)$ and is associative ([[def-multiplication-of-a-distribution-by-a-smooth-function]]).

## Proof

**Given:** $a,u,\alpha$ as in the statement.

1.1 Fix $i$ and a test $\varphi$. The ordinary product rule gives $a\partial_i\varphi=\partial_i(a\varphi)-(\partial_i a)\varphi$: subtract the product at a point from the product at its coordinate increment, insert the mixed product, divide by the increment and pass to the limit. Therefore [given, F1, F2, algebra]
$$\langle\partial_i(au),\varphi\rangle=-\langle u,a\partial_i\varphi\rangle=\langle\partial_i u,a\varphi\rangle+\langle u,(\partial_i a)\varphi\rangle.$$
By F2 this is the first-order formula. [given, F1, F2, algebra]

2.1 From F1, evaluating two consecutive derivative operations on a test gives the sign $(-1)^{|\gamma|+1}$ times $u(\partial^\gamma\partial_i\varphi)$. Commutation of the smooth test partials identifies this with $(\partial^{\gamma+e_i}u)(\varphi)$. Hence $\partial_i\partial^\gamma u=\partial^{\gamma+e_i}u$. The asserted formula for $\alpha=0$ is $au=au$. [step 1.1, F1]

3.1 Suppose the formula holds for $\alpha$. Differentiate it by $\partial_i$ and apply step 1.1 to each smooth coefficient times its distribution. Step 2.1 yields the two terms with indices $\beta+e_i$ and $\beta$, respectively. For each resulting index $\eta$, their coefficients add to $\binom\alpha{\eta-e_i}+\binom\alpha\eta=\binom{\alpha+e_i}\eta$, using zero for an out-of-range binomial coefficient. The equality is Pascal's identity in coordinate $i$ with all other coordinate factors unchanged. Thus the formula holds for $\alpha+e_i$, and induction on total degree proves every case. All sums are finite. For $a=0$ or $u=0$ every term is zero, and on the empty domain the identity is between zero functionals. $\square$ [step 2.1, step 1.1, F1, F2, algebra]
