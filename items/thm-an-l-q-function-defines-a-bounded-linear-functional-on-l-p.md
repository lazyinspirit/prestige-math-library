---
id: thm-an-l-q-function-defines-a-bounded-linear-functional-on-l-p
kind: theorem
title: "Every $g\\in L^q(\\mu)$ defines a bounded linear functional on $L^p(\\mu)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bounded-linear-functional-on-l-p-and-its-operator-norm, def-l-p-space-as-a-quotient-by-null-functions, thm-holder-inequality-for-integrals, thm-the-lebesgue-integral-respects-almost-everywhere-equality, rem-elements-of-l-p-are-equivalence-classes-and-pointwise-statements-require-a-representative, thm-linearity-of-the-lebesgue-integral-on-l-one]
proof_strategy: "Use Holder to make the pairing integrable, then use almost-everywhere invariance of the integral to descend from representatives to $L^p$ classes."
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 6.15"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Proposition 15.10"
      url: "https://www.math.wustl.edu/~victor/classes/ma5051/rags100514.pdf"
    - title: "John K. Hunter, Measure Theory, Proposition 7.13"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space, let $1 \le p < \infty$, and let
$q$ be conjugate to $p$. For each $g \in L^q(\mu)$, the formula
$$\Lambda_g([f]):=\int fg\,d\mu$$
defines a bounded linear functional on $L^p(\mu)$, and
$$|\Lambda_g([f])|\le \|[f]\|_p\|g\|_q\qquad([f]\in L^p(\mu)).$$
In particular,
$$\|\Lambda_g\|\le\|g\|_q.$$

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$, an exponent $1 \le p < \infty$, its conjugate exponent $q$, an element $g \in L^q(\mu)$, and an element $[f] \in L^p(\mu)$.

[L1] Elements of $L^p(\mu)$ are almost-everywhere equivalence classes of measurable representatives ([[def-l-p-space-as-a-quotient-by-null-functions]]).

[L2] Holder's inequality gives $$\int |uv|\,d\mu\le\|u\|_p\|v\|_q$$ for measurable representatives $u \in \mathcal L^p(\mu)$ and $v \in \mathcal L^q(\mu)$ when both exponents are finite, with the corresponding $\mathcal L^1$--$L^\infty$ representative form at the endpoint ([[thm-holder-inequality-for-integrals]]).

[L3] Two integrable functions have the same integral whenever they are equal almost everywhere ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

[L4] The Lebesgue integral is linear on $L^1(\mu)$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

## Proof

**Proof technique:** Use Holder to make the pairing integrable, then use almost-everywhere invariance of the integral to descend from representatives to $L^p$ classes.

1.1 Choose measurable representatives $u$ of $[f]$ and $v$ of $g$. Then $u \in \mathcal L^p(\mu)$; if $q<\infty$ then $v\in\mathcal L^q(\mu)$, while if $q=\infty$ then $v$ is an essentially bounded representative. Thus [L2] gives $uv \in L^1(\mu)$ and $$\left|\int uv\,d\mu\right|\le \|u\|_p\|v\|_q=\|[f]\|_p\|g\|_q.$$ [L1, L2, given]

2.1 If $u'$ is another representative of $[f]$, then $u=u'$ almost everywhere. Hence $uv=u'v$ almost everywhere. Since both products are integrable by step 1.1, [L3] gives $$\int uv\,d\mu=\int u'v\,d\mu,$$ so $\Lambda_g([f])$ is well defined on the class $[f]$. [L1, L3, step 1.1]

2.2 If $v'$ is another representative of $g$, then $v=v'$ almost everywhere. Hence $uv=uv'$ almost everywhere. Since both products are integrable by step 1.1, [L3] gives $$\int uv\,d\mu=\int uv'\,d\mu,$$ so $\Lambda_g([f])$ is independent of the chosen representative of $g$. [L1, L3, step 1.1]

3.1 Let $[f],[h] \in L^p(\mu)$ and let $a,b \in \mathbb R$. Choose representatives $u,w$. By step 2.1 we may compute with representatives, and [L4] gives $$\Lambda_g(a[f]+b[h])=\int (au+bw)v\,d\mu =a\int uv\,d\mu+b\int wv\,d\mu =a\Lambda_g([f])+b\Lambda_g([h]).$$ The estimate from step 1.1 also shows $$|\Lambda_g([f])|\le\|[f]\|_p\|g\|_q,$$ so $\Lambda_g$ is linear and bounded. [step 1.1, step 2.1, step 2.2, L4, given]

4.1 The estimate in step 3.1 holds for every $[f]$ with $\|[f]\|_p \le 1$. Taking the supremum over the unit ball gives $$\|\Lambda_g\|\le\|g\|_q.$$ Thus $\Lambda_g$ is a bounded linear functional on $L^p(\mu)$. [step 3.1, given] ∎
