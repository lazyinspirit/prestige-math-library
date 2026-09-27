---
id: cor-l-p-norm-recovery-by-unit-l-q-pairings
kind: corollary
title: "The $L^p$ norm is the supremum of pairings against unit $L^q$ functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-holder-inequality-for-integrals]
proof_strategy: "Holder gives the universal upper bound. Equality uses the conjugate phase of a representative, weighted by its $(p-1)$st power when $p>1$."
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Corollary 15.9"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 6.2"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space, let $1 \le p < \infty$, and let
$q$ be conjugate to $p$. Assume either $1<p<\infty$, or $p=1$ and $\mu$ is
sigma-finite. Then for every $f \in L^p(\mu)$,
$$\|f\|_p= \sup\left\{\,\left|\int fg\,d\mu\right|:g \in L^q(\mu),\ \|g\|_q\le1\,\right\}.$$

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$, an exponent $1 \le p < \infty$ with conjugate exponent $q$, and an element $f \in L^p(\mu)$.

[L1] Apply Hölder's inequality to the real nonnegative functions $|f|$ and $|g|$, then use $|\int fg\,d\mu|\le\int|fg|\,d\mu$. This gives $\left|\int fg\,d\mu\right|\le\|f\|_p\|g\|_q$ for complex or real functions and conjugate exponents, including $p=1$, $q=\infty$ ([[thm-holder-inequality-for-integrals]]).

## Proof

**Proof technique:** Hölder gives the upper bound; the conjugate phase supplies a norming function.

1.1 For every $g \in L^q(\mu)$ with $\|g\|_q \le 1$, [L1] gives $$\left|\int fg\,d\mu\right|\le\|f\|_p\|g\|_q\le\|f\|_p.$$ Therefore the supremum is at most $\|f\|_p$. [L1, given]

1.2 If $f=0$, the displayed formula is immediate. Hence assume from now on $f \ne 0$. For a measurable representative $u$ of $f$, define its conjugate phase by $$\theta_u(x):=\begin{cases}\overline{u(x)}/|u(x)|,&u(x)\ne0,\\0,&u(x)=0.\end{cases}$$ Then $|\theta_u|\le1$ and $u\theta_u=|u|$ pointwise. [given, construct]

2.1 Assume $1<p<\infty$ and choose a representative $u$ of $f$. Define $$g(x):=\frac{|u(x)|^{p-1}\theta_u(x)}{\|f\|_p^{p-1}}.$$ Since $(p-1)q=p$, $$|g|^q=\frac{|u|^p}{\|f\|_p^p},$$ so $\|g\|_q=1$. Also $u\theta_u=|u|$ gives $$\int ug\,d\mu=\frac{1}{\|f\|_p^{p-1}}\int |u|^p\,d\mu=\|f\|_p.$$ Hence the supremum is at least $\|f\|_p$. [step 1.2, given, choose, construct, algebra]

2.2 Assume $p=1$ and choose a representative $u$ of $f$. Put $g:=\theta_u$. Then $g \in L^\infty(\mu)$ with $\|g\|_\infty \le 1$, and $$\int ug\,d\mu=\int |u|\,d\mu=\|f\|_1.$$ So the supremum is at least $\|f\|_1$. [step 1.2, given, choose, construct, algebra]

3.1 Step 1.1 gives the upper bound, while step 2.1 or step 2.2 gives an $L^q$ function of norm at most one attaining it. Therefore the displayed supremum equals $\|f\|_p$. [step 1.1, step 2.1, step 2.2] ∎
