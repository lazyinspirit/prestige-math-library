---
id: prop-lambda-g-has-operator-norm-equal-to-the-l-q-norm
kind: proposition
title: "The functional $\\Lambda_g$ has norm $\\|g\\|_q$; for $q=\\infty$ assume $\\mu$ is semifinite"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p, def-conjugate-exponents, def-finite-sigma-finite-and-semifinite-measures, prop-essential-supremum-is-attained-as-the-least-essential-bound, rem-elements-of-l-p-are-equivalence-classes-and-pointwise-statements-require-a-representative]
proof_strategy: "Use Holder for the upper bound. For $1<p<\\infty$ test against the normalized extremizer $|g|^{q-1}\\operatorname{sgn} g$; for $p=1$ use a finite-measure subset of an almost-maximal level set, which is exactly where semifiniteness enters."
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 6.2"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Proposition 15.10"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "John K. Hunter, Measure Theory, Proposition 7.13"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space, let $1 \le p < \infty$, and let
$q$ be conjugate to $p$. For $g \in L^q(\mu)$, let
$$\Lambda_g([f])=\int fg\,d\mu.$$
Then
$$\|\Lambda_g\|\le\|g\|_q.$$
If $1<p<\infty$, then equality holds:
$$\|\Lambda_g\|=\|g\|_q.$$
If $p=1$ and hence $q=\infty$, the same equality holds provided $\mu$ is
semifinite.

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$, an exponent $1 \le p < \infty$, its conjugate exponent $q$, and an element $g \in L^q(\mu)$.

[L1] The pairing functional $\Lambda_g$ is bounded and satisfies $$\|\Lambda_g\|\le\|g\|_q$$ ([[thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p]]).

[L2] If $1<p<\infty$ and $q$ is conjugate to $p$, then $p(q-1)=q$ ([[def-conjugate-exponents]]).

[L3] The essential supremum is the least essential bound: if $M=\|g\|_\infty$ and $u$ is any measurable representative of $g$, then $|u|\le M$ almost everywhere. If $M>0$ and $0<\varepsilon<M$, then the set $\{|u|>M-\varepsilon\}$ has positive measure; otherwise $M-\varepsilon$ would be a smaller essential bound ([[prop-essential-supremum-is-attained-as-the-least-essential-bound]]).

[L4] In a semifinite measure space, every measurable set of positive measure contains a measurable subset of positive finite measure ([[def-finite-sigma-finite-and-semifinite-measures]]).

## Proof

**Proof technique:** Use Holder for the upper bound. For $1<p<\infty$ test against the normalized extremizer $|g|^{q-1}\operatorname{sgn} g$; for $p=1$ use a finite-measure subset of an almost-maximal level set, which is exactly where semifiniteness enters.

1.1 The upper bound $$\|\Lambda_g\|\le\|g\|_q$$ is exactly [L1]. [L1, given]

2.1 If $g=0$ in $L^q(\mu)$, then $\Lambda_g=0$ by definition, so $\|\Lambda_g\|=0=\|g\|_q$. Hence only the case $g\ne0$ remains. [step 1.1, given]

2.2 Assume $1<p<\infty$. Choose a representative $u$ of $g$ and define $$s(x):=\begin{cases}u(x)/|u(x)|,&u(x)\ne0,\\0,&u(x)=0,\end{cases} \qquad f(x):=\frac{|u(x)|^{q-1}s(x)}{\|g\|_q^{q-1}}.$$ Then $|f|^p=|u|^q/\|g\|_q^q$ by [L2], so $$\|[f]\|_p^p=\frac{1}{\|g\|_q^q}\int |u|^q\,d\mu=1.$$ Also $fu=|u|^q/\|g\|_q^{q-1}$, so $$\Lambda_g([f])=\frac{1}{\|g\|_q^{q-1}}\int |u|^q\,d\mu=\|g\|_q.$$ Therefore $\|\Lambda_g\|\ge\|g\|_q$. Together with step 1.1, this gives $\|\Lambda_g\|=\|g\|_q$. [L2, step 1.1, given, choose, construct]

3.1 Assume $p=1$, so $q=\infty$, and assume $\mu$ is semifinite. Put $M:=\|g\|_\infty$. Step 2.1 leaves only $g\ne0$, so $M>0$. Choose a representative $u$ of $g$, and define $$s(x):=\begin{cases}1,&u(x)>0,\\-1,&u(x)<0,\\0,&u(x)=0.\end{cases}$$ For $0<\varepsilon<M$, [L3] gives a measurable set $E_\varepsilon:=\{|u|>M-\varepsilon\}$ of positive measure. By [L4], choose $F_\varepsilon \subseteq E_\varepsilon$ with $0<\mu(F_\varepsilon)<\infty$, and set $$f_\varepsilon:=\frac{s\mathbf 1_{F_\varepsilon}}{\mu(F_\varepsilon)}.$$ Then $\|[f_\varepsilon]\|_1=1$ and $$\Lambda_g([f_\varepsilon])= \frac{1}{\mu(F_\varepsilon)}\int_{F_\varepsilon}|u|\,d\mu\ge M-\varepsilon.$$ Hence $\|\Lambda_g\|\ge M-\varepsilon$ for every $0<\varepsilon<M$, so $\|\Lambda_g\|\ge M=\|g\|_\infty$. Step 1.1 gives the reverse inequality, and therefore $\|\Lambda_g\|=\|g\|_\infty$. [L3, L4, step 1.1, step 2.1, given, choose, construct]

4.1 Step 2.2 proves the strict-exponent case, and step 3.1 proves the $q=\infty$ endpoint under semifiniteness. Together with steps 1.1 and 2.1, this proves the proposition. [step 1.1, step 2.1, step 2.2, step 3.1] ∎
