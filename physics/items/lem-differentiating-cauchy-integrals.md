---
id: lem-differentiating-cauchy-integrals
kind: lemma
title: "Cauchy-kernel contour integrals may be differentiated by a direct difference-quotient estimate"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-line-integral-over-a-rectifiable-path, thm-existence-of-complex-line-integrals-on-rectifiable-paths, prop-linearity-of-complex-line-integrals, cor-ml-estimate-for-complex-line-integrals, lem-complex-conjugation-and-modulus-laws, thm-heine-borel-r, thm-continuous-image-of-a-compact-space-is-compact, thm-compact-subset-is-closed-and-bounded, def-complex-integer-powers]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Lars Ahlfors, Complex Analysis, third edition, Ch. 4, Section 2.3, Lemma 3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $\gamma:[\alpha,\beta]\to\mathbb C$ be a rectifiable contour, let $\varphi$ be continuous on its trace, and let $V\subseteq\mathbb C$ be open and disjoint from that trace. For every natural number $n\ge1$, with powers understood as in [[def-complex-integer-powers]], define the following [[def-complex-line-integral-over-a-rectifiable-path]]:

$$F_n(z)=\frac{1}{2\pi i}\int_\gamma\frac{\varphi(\zeta)}{(\zeta-z)^n}\,d\zeta\qquad(z\in V).$$

Then $F_n$ is holomorphic on $V$ and

$$F_n'(z)=nF_{n+1}(z).$$

## Facts & Assumptions

**Given:** A rectifiable contour $\gamma$, continuous boundary data $\varphi$, an open set $V$ disjoint from the trace, and a natural $n\ge1$.

[L1] A continuous integrand has a complex line integral along every rectifiable contour ([[thm-existence-of-complex-line-integrals-on-rectifiable-paths]]).

[L2] Complex line integrals are linear, and the ML estimate bounds an integral by a uniform integrand bound times the contour length ([[prop-linearity-of-complex-line-integrals]], [[cor-ml-estimate-for-complex-line-integrals]]).

[L3] A closed bounded interval is compact, continuous images of compact metric spaces are compact, and compact subsets of metric spaces are bounded ([[thm-heine-borel-r]], [[thm-continuous-image-of-a-compact-space-is-compact]], [[thm-compact-subset-is-closed-and-bounded]]).

[L4] The complex modulus is multiplicative and satisfies the triangle inequality ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

**Proof technique:** direct.

1.1 For every $z\in V$, the function $\zeta\mapsto\varphi(\zeta)/(\zeta-z)^n$ is continuous on the trace, so $F_n(z)$ exists by [L1]. Moreover, [L3] applied to $\varphi\circ\gamma$ gives a finite $M\ge0$ with $|\varphi(\zeta)|\le M$ on the trace. [given, L1, L3]

1.2 Fix $z_0\in V$. Choose $\rho>0$ with $B(z_0,\rho)\subseteq V$; because the trace is disjoint from $V$, $w=\zeta-z_0$ satisfies $|w|\ge\rho$, and if $0<|h|<\rho/2$ then $|w-h|\ge\rho/2$. [given, L4, choose]

2.1 The finite power identity gives $\big((w-h)^{-n}-w^{-n}\big)/h=\sum_{j=0}^{n-1}1/(w^{j+1}(w-h)^{n-j})$, and after subtracting $n/w^{n+1}$ the remainder is $h\sum_{j=0}^{n-1}\sum_{k=0}^{n-j-1}1/(w^{j+k+2}(w-h)^{n-j-k})$; by step 1.2 and [L4], its modulus is at most $|h|\,n(n+1)(2/\rho)^{n+2}/2$, uniformly on the trace. [step 1.2, L4, algebra]

3.1 By [L2], the difference between $(F_n(z_0+h)-F_n(z_0))/h$ and $nF_{n+1}(z_0)$ has modulus at most a fixed finite constant times $M L(\gamma)|h|$, which tends to zero. Hence $F_n'(z_0)=nF_{n+1}(z_0)$; since $z_0$ was arbitrary, $F_n$ is holomorphic on $V$. The estimate also covers $n=1$ and a constant contour, while $h=0$ is only the excluded difference-quotient value. [step 1.1, step 2.1, L2] ∎
