---
id: ex-sine-period-arc-length-as-a-complete-elliptic-integral
kind: example
title: "The arc length of one sine period is $4\\sqrt{2}\\,E(1/\\sqrt{2})$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-length-of-the-graph-of-a-c1-function,
       thm-sine-and-cosine-derivatives,
       thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions,
       thm-cofunction-supplementary-and-reflection-identities,
       thm-additivity-over-subintervals, thm-substitution,
       thm-nth-roots-exist, def-oriented-integral,
       cor-differentiable-implies-continuous,
       def-pi-via-first-positive-cosine-zero,
       thm-cosine-has-a-smallest-positive-zero,
       thm-real-power-continuity-and-derivatives,
       thm-algebra-of-continuous-functions,
       thm-composition-of-continuous-functions,
       thm-continuous-implies-integrable]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jishan Hu, Jian-Shu Li, Wei-Ping Li, and Min Yan, Calculus: Rigor, Concision, Clarity, Example 7.1.7"
      url: "https://web.archive.org/web/20100306161427if_/http://www.math.ust.hk:80/~majhu/Math024/Notes.pdf"
    - title: "L. M. Hall, Special Functions, §3.1, Example 3.1.2"
      url: "https://web.mst.edu/_disabled/lmhall/SPFNS/spfns.pdf"
pipeline_run: null
---

## Example

For $0<k<1$, write

$$E(k):=\int_0^{\pi/2}\sqrt{1-k^2\sin^2t}\,dt$$

for the complete elliptic integral of the second kind. The graph of sine over
one period, parametrized by $\gamma(x)=(x,\sin x)$ for $0\le x\le2\pi$, has
arc length

$$L(\gamma)=4\sqrt2\,E(1/\sqrt2).$$

## Facts & Assumptions

**Given:** The graph path $\gamma(x)=(x,\sin x)$ on $[0,2\pi]$.

[L1] If $f:[a,b]\to\mathbb R$ has a continuous derivative $q$, then its graph has length $\int_a^b\sqrt{1+q(t)^2}\,dt$ ([[cor-length-of-the-graph-of-a-c1-function]]).

[L2] $(\sin x)'=\cos x$ on $\mathbb R$ ([[thm-sine-and-cosine-derivatives]]).

[L3] The supplementary, reflection, and quarter-turn identities give $\cos(\pi-x)=-\cos x$, $\cos(\pi/2-x)=\sin x$, and $\cos(-x)=\cos x$ ([[thm-cofunction-supplementary-and-reflection-identities]]).

[L4] Integrals are additive over subintervals, and affine substitutions obey the substitution formula with oriented endpoints ([[thm-additivity-over-subintervals]], [[thm-substitution]], [[def-oriented-integral]]).

[L5] For every real $x$, $\sin^2x+\cos^2x=1$ ([[thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions]]).

[L6] Every positive real has a unique positive square root ([[thm-nth-roots-exist]], case $n=2$).

[L7] Differentiable real functions are continuous ([[cor-differentiable-implies-continuous]]).

[L8] The number $\pi=2\gamma$ is positive because the smallest positive zero of cosine satisfies $\gamma\in(0,2)$ ([[def-pi-via-first-positive-cosine-zero]], [[thm-cosine-has-a-smallest-positive-zero]]).

[L9] For $\alpha\in\mathbb R$, the function $u\mapsto u^\alpha$ is continuous on $(0,\infty)$; in particular the positive square-root function is continuous there ([[thm-real-power-continuity-and-derivatives]]).

[L10] Polynomial algebra and composites preserve continuity, and continuous functions on a compact interval are Riemann integrable ([[thm-algebra-of-continuous-functions]], [[thm-composition-of-continuous-functions]], [[thm-continuous-implies-integrable]]).

## Verification

**Proof technique:** direct.

1.1 If $0<k<1$, then [L5] gives $1-k^2\sin^2t\ge1-k^2>0$. By [L2], [L7], [L9], and [L10], the integrand defining $E(k)$ is continuous on $[0,\pi/2]$ and therefore integrable. Thus $E(k)$ is well defined on the stated range. [L2, L5, L7, L8, L9, L10, algebra]

1.2 The derivative in [L2] is continuous by [L7], and [L8] gives $0<2\pi$, so [L1] gives $$L(\gamma)=\int_0^{2\pi}\sqrt{1+\cos^2x}\,dx.$$ [L1, L2, L7, L8]

2.1 Split the integral in step 1.2 at $\pi/2$, $\pi$, and $3\pi/2$. The affine reflections and translations licensed by [L4], together with [L3] and the square on cosine, show that all four pieces equal $\int_0^{\pi/2}\sqrt{1+\cos^2x}\,dx$. [step 1.2, L3, L4]

3.1 The modulus $k:=1/\sqrt2$ exists by [L6] and satisfies $0<k<1$. By [L5], $$1+\cos^2x=2-\sin^2x=2\left(1-\frac12\sin^2x\right),$$ so the quarter-period integral in step 2.1 is $\sqrt2\,E(1/\sqrt2)$. [step 2.1, L5, L6, construct, algebra]

4.1 Multiplying the quarter-period value in step 3.1 by the symmetry factor in step 2.1 yields $L(\gamma)=4\sqrt2\,E(1/\sqrt2)$. [step 2.1, step 3.1, algebra] ∎
