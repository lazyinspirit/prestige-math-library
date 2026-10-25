---
id: prop-two-classical-counterexamples-in-polar-coordinates
kind: proposition
title: "Polar-coordinate forms of two Cartesian expressions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-trigonometric-parity-and-pythagorean-identity,
       thm-double-angle-and-power-reduction-identities,
       def-tangent-cotangent-secant-cosecant]
justified_by: []
aliases: []
landmark: true
short: "Two Cartesian expressions in polar form"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, sections 8.3 and 11.4"
      url: "https://jirilebl.github.io/ra/realanal2.pdf"
    - title: "University of Toronto MAT237, section 2.1 Differentiation of real-valued functions"
      url: "https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter2/S2.1.html"
pipeline_run: null
---

## Statement

Let $r>0$ and $\theta\in\mathbb R$, and put
$x=r\cos\theta$ and $y=r\sin\theta$. Then

$$\frac{xy}{x^2+y^2}=\frac12\sin(2\theta).$$

If also $\cos\theta\ne0$, equivalently $x\ne0$, then

$$\frac{y(x^2+y^2)}{x}=r^2\tan\theta.$$

Thus the Cartesian functions $xy/(x^2+y^2)$ and
$y(x^2+y^2)/x$ become, on their stated domains, a purely angular function and
a quadratic radial factor times an angular function, respectively.

## Facts & Assumptions

**Given:** A real $r>0$, a real angle $\theta$, and $x=r\cos\theta$, $y=r\sin\theta$.

[L1] For every real $t$, $\sin^2t+\cos^2t=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L2] For every real $t$, $\sin(2t)=2\sin t\cos t$ ([[thm-double-angle-and-power-reduction-identities]]).

[L3] Where $\cos t\ne0$, $\tan t=\sin t/\cos t$ ([[def-tangent-cotangent-secant-cosecant]]).

## Proof

**Proof technique:** direct.

1.1 The Pythagorean identity gives $x^2+y^2=r^2(\cos^2\theta+\sin^2\theta)=r^2$, which is nonzero because $r>0$. [given, L1, algebra]

2.1 Therefore $xy/(x^2+y^2)=r^2\sin\theta\cos\theta/r^2=\sin\theta\cos\theta=\tfrac12\sin(2\theta)$. [step 1.1, L2, algebra]

2.2 If $\cos\theta\ne0$, then $x=r\cos\theta\ne0$ and $y(x^2+y^2)/x=(r\sin\theta)r^2/(r\cos\theta)=r^2\tan\theta$. [step 1.1, L3, algebra]

3.1 Steps 2.1 and 2.2 prove both identities on exactly the domains stated. [step 2.1, step 2.2] ∎

## Remarks

The first identity has no radial dependence, whereas the second carries the factor $r^2$. This difference explains why setting either expression equal to zero at the origin produces markedly different behaviour along rays.
