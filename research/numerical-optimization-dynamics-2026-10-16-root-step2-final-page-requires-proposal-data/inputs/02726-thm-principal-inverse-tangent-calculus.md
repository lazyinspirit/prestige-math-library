---
id: thm-principal-inverse-tangent-calculus
kind: theorem
title: "Principal arctangent: derivative, integral, power series, and the Gregory–Leibniz series"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-principal-inverse-tangent, thm-derivative-of-an-inverse, def-tangent-cotangent-secant-cosecant, thm-sine-and-cosine-derivatives, thm-tangent-cotangent-secant-cosecant-derivatives-and-periods, thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions, def-oriented-integral, thm-ftc-first-part, thm-additivity-over-subintervals, thm-continuous-implies-integrable, thm-algebra-of-continuous-functions, cor-differentiable-implies-continuous, cor-zero-derivative-implies-constant, thm-geometric-series, cor-termwise-integration-of-a-real-power-series, thm-alternating-series-test, thm-abel-limit-theorem, thm-cofunction-supplementary-and-reflection-identities]
justified_by: []
aliases: [gregory-leibniz-series]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "NIST Digital Library of Mathematical Functions, §4.23–4.24"
      url: "https://dlmf.nist.gov/4.24"
    - title: "J. Lebl, Basic Analysis I, §4.4 Inverse function theorem"
      url: "https://www.jirka.org/ra/html/sec_ift.html"
pipeline_run: null
---

## Statement

For every $x\in\mathbb R$,

$$\frac{d}{dx}\arctan x=\frac1{1+x^2},\qquad \arctan x=\int_0^x\frac{dt}{1+t^2}.$$

For $|x|<1$,

$$\arctan x=\sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{2n+1}.$$

At the endpoint, the ordinarily convergent alternating series satisfies

$$\frac\pi4=1-\frac13+\frac15-\frac17+\cdots.$$

## Facts & Assumptions

**Given:** No hypotheses beyond those quantified in the statement.

[L1] Principal arctangent is the continuous increasing inverse of tangent on $(-\pi/2,\pi/2)$ ([[def-principal-inverse-tangent]]).

[L2] The derivative of an inverse is the reciprocal of the original derivative when the latter is nonzero ([[thm-derivative-of-an-inverse]]).

[L3] $(\tan u)'=\sec^2u=1+\tan^2u$ on the tangent domain, and $\tan0=0$ because $\sin0=0$, $\cos0=1$, and $\tan0=\sin0/\cos0$ ([[def-tangent-cotangent-secant-cosecant]], [[thm-sine-and-cosine-derivatives]], [[thm-tangent-cotangent-secant-cosecant-derivatives-and-periods]], [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]).

[L4] A continuous integrand has the integral-function derivative asserted by the first fundamental theorem. Oriented integrals reverse sign and are additive over arbitrary successive endpoints ([[thm-continuous-implies-integrable]], [[thm-ftc-first-part]], [[def-oriented-integral]], [[thm-additivity-over-subintervals]]).

[L5] For $|r|<1$, $\sum_{n\ge0}r^n=1/(1-r)$, and a real power series may be integrated termwise on compact subintervals of its convergence interval ([[thm-geometric-series]], [[cor-termwise-integration-of-a-real-power-series]]).

[L6] The alternating series $\sum_{n\ge0}(-1)^n/(2n+1)$ converges, and Abel's limit theorem identifies its sum with the radial limit of its power series ([[thm-alternating-series-test]], [[thm-abel-limit-theorem]]).

[L7] The cofunction identities and the Pythagorean identity give $\tan(\pi/4)=1$ ([[thm-cofunction-supplementary-and-reflection-identities]], [[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]).

[L8] Continuous functions are closed under the algebra used below; differentiable functions are continuous; and two continuous functions on an interval with the same derivative differ by a constant ([[thm-algebra-of-continuous-functions]], [[cor-differentiable-implies-continuous]], [[cor-zero-derivative-implies-constant]]).

## Proof

**Proof technique:** direct.

1.1 For $y\in\mathbb R$, put $u:=\arctan y$.  Then $\tan u=y$ and [L3] gives $(\tan)'(u)=1+y^2>0$.  Applying [L2] to the principal branch proves $(\arctan y)'=1/(1+y^2)$.  [L1, L2, L3]

2.1 The function $t\mapsto1/(1+t^2)$ is continuous. By [L4], its oriented integral from $0$ to $x$ has derivative $1/(1+x^2)$ and value $0$ at $x=0$. By [L3], $\tan0=0$, so the inverse identity in [L1] gives $\arctan0=0$; step 1.1 gives its derivative and [L8] makes it continuous. Their difference is therefore continuous on $\mathbb R$ with zero derivative, so [L8] makes it zero. [step 1.1, L1, L3, L4, L8]

3.1 If $|t|<1$, [L5] with $r=-t^2$ gives $$\frac1{1+t^2}=\sum_{n=0}^{\infty}(-1)^nt^{2n}.$$ Termwise integration between $0$ and $x$ (reversing endpoints when $x<0$) and step 2.1 give the asserted arctangent series for $|x|<1$. [step 2.1, L5]

4.1 Let $S:=\sum_{n\ge0}(-1)^n/(2n+1)$, which exists by [L6].  Abel's theorem and step 3.1 yield $$S=\lim_{x\uparrow1}\sum_{n\ge0}\frac{(-1)^nx^{2n+1}}{2n+1} =\lim_{x\uparrow1}\arctan x=\arctan1.$$ By [L7] and the principal range, $\arctan1=\pi/4$.  [step 3.1, L1, L6, L7]

5.1 Steps 1.1–4.1 establish all four displayed claims.  [step 1.1, step 2.1, step 3.1, step 4.1] ∎
