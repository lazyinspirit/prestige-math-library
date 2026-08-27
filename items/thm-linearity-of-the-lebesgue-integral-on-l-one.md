---
id: thm-linearity-of-the-lebesgue-integral-on-l-one
kind: theorem
title: "The Lebesgue integral is linear on $L^1(\\mu)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-integrable-real-and-complex-functions-and-their-integrals, cor-additivity-of-the-nonnegative-lebesgue-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-closure-properties-of-measurable-functions-used-by-the-integral]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 7.4"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "John K. Hunter, Measure Theory Notes, Proposition 4.9"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes_ch4.pdf"
---

## Statement

The class $L^1(\mu)$ is a complex vector space, and the Lebesgue integral is
complex-linear on it:
$$\int (\alpha f+\beta g)\,d\mu=\alpha\int f\,d\mu+\beta\int g\,d\mu \qquad(\alpha,\beta\in\mathbb C,\ f,g\in L^1(\mu)).$$

## Facts & Assumptions

**Given:** Integrable functions $f,g\in L^1(\mu)$ and scalars $\alpha,\beta\in\mathbb C$.

[L1] Real and complex integrability, together with the decomposition into positive and negative parts and into real and imaginary parts, is defined in [[def-integrable-real-and-complex-functions-and-their-integrals]].

[L2] The nonnegative integral is additive ([[cor-additivity-of-the-nonnegative-lebesgue-integral]]).

[L3] The nonnegative integral is monotone and homogeneous ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[L4] Sums and real scalar multiples of measurable real-valued functions are measurable ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]]).

## Proof

**Proof technique:** direct.

1.1 First treat real-valued $f,g$ and put $h:=f+g$. By [L4], the function $h$ is measurable. Also $$h^+\le f^++g^+,\qquad h^-\le f^-+g^-,$$ so [L2] and [L3] give $$\int h^+\,d\mu\le\int f^+\,d\mu+\int g^+\,d\mu<+\infty,\qquad \int h^-\,d\mu\le\int f^-\,d\mu+\int g^-\,d\mu<+\infty.$$ Hence $h$ is integrable. Since $$h^++f^-+g^-=h^-+f^++g^+,$$ another application of [L2] yields $$\int h^+\,d\mu+\int f^-\,d\mu+\int g^-\,d\mu =\int h^-\,d\mu+\int f^+\,d\mu+\int g^+\,d\mu,$$ which rearranges to $$\int(f+g)\,d\mu=\int f\,d\mu+\int g\,d\mu.$$ [L1, L2, L3, L4, algebra]

1.2 Now let $c\in\mathbb R$ and let $f$ be real-valued. By [L4], $cf$ is measurable. If $c\ge0$, then $$(cf)^+=cf^+,\qquad (cf)^-=cf^-;$$ if $c<0$, then $$(cf)^+=(-c)f^-,\qquad (cf)^-=(-c)f^+.$$ In both cases [L3] shows that $cf$ is integrable and that $$\int(cf)\,d\mu=c\int f\,d\mu.$$ [L1, L3, L4, algebra]

2.1 Let $h=u+iv\in L^1(\mu)$ and $\gamma=a+ib\in\mathbb C$. Then $$\gamma h=(au-bv)+i(av+bu).$$ The real-valued functions $au-bv$ and $av+bu$ are integrable by steps 1.1 and 1.2, and their real-linear integral formulas combine into $$\int(\gamma h)\,d\mu=\gamma\int h\,d\mu.$$ Writing $\alpha f=h_1+ik_1$ and $\beta g=h_2+ik_2$ with real-valued integrable $h_j,k_j$, step 1.1 gives $$\int(\alpha f+\beta g)\,d\mu =\int(h_1+h_2)\,d\mu+i\int(k_1+k_2)\,d\mu =\int h_1\,d\mu+i\int k_1\,d\mu+\int h_2\,d\mu+i\int k_2\,d\mu =\alpha\int f\,d\mu+\beta\int g\,d\mu.$$ [L1, step 1.1, step 1.2, algebra] ∎
