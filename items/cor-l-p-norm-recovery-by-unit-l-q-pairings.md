---
id: cor-l-p-norm-recovery-by-unit-l-q-pairings
kind: corollary
title: "The $L^p$ norm is the supremum of pairings against unit $L^q$ functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm, thm-sigma-finite-duality-for-bounded-functionals-on-l-p, thm-arbitrary-measure-duality-for-l-p-when-one-less-p-less-infinity]
proof_strategy: "Holder gives the universal upper bound. Equality comes from the explicit norming function $|f|^{p-1}\\operatorname{sgn} f$ for $p>1$ and the sign function for $p=1$."
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
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

[L1] For every $g \in L^q(\mu)$, the pairing functional satisfies $\|\Lambda_g\|=\|g\|_q$ in the ranges covered by this page ([[prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm]]).

## Proof

**Proof technique:** Holder gives the universal upper bound. Equality comes from the explicit norming function $|f|^{p-1}\operatorname{sgn} f$ for $p>1$ and the sign function for $p=1$.

1.1 For every $g \in L^q(\mu)$ with $\|g\|_q \le 1$, [L1, given] [L1] gives $$\left|\int fg\,d\mu\right|=|\Lambda_g([f])| \le \|\Lambda_g\|\|f\|_p \le \|f\|_p.$$ Therefore the supremum is at most $\|f\|_p$. [L1, given]

1.2 If $f=0$, the displayed formula is immediate. Hence assume from now on $f \ne 0$. [given]

1.3 Assume $1<p<\infty$ and choose a representative $u$ of $f$. [given, choose, construct, algebra] Define $$g(x):=\frac{|u(x)|^{p-1}\operatorname{sgn} u(x)}{\|f\|_p^{p-1}}.$$ Then $$|g|^q=\frac{|u|^p}{\|f\|_p^p},$$ so $\|g\|_q=1$. Also $$\int ug\,d\mu=\frac{1}{\|f\|_p^{p-1}}\int |u|^p\,d\mu=\|f\|_p.$$ Hence the supremum is at least $\|f\|_p$. [given, choose, construct, algebra]

1.4 Assume $p=1$ and choose a representative $u$ of $f$. [given, choose, construct, algebra] Put $$g:=\operatorname{sgn} u.$$ Then $g \in L^\infty(\mu)$ with $\|g\|_\infty \le 1$, and $$\int ug\,d\mu=\int |u|\,d\mu=\|f\|_1.$$ So the supremum is at least $\|f\|_1$. [given, choose, construct, algebra]

2.1 Step 1.1 gives the upper bound, while step 1.3 or step 1.4 gives a unit [step 1.1, step 1.3, step 1.4] $L^q$ function attaining it. Therefore the displayed supremum equals $\|f\|_p$. [step 1.1, step 1.3, step 1.4] ∎
