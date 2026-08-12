---
id: thm-disc-area-is-pi-r-squared
kind: theorem
title: "A disc of radius r has Riemann area pi r squared; in particular the unit disc has area pi"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-riemann-area-between-continuous-graphs, thm-substitution, thm-quarter-turn-values-and-shift-formulas, thm-sine-and-cosine-addition-formulas, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-linearity-of-the-integral, thm-ftc-second-part, lem-integral-elementary-bounds]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "H. J. Keisler, Elementary Calculus, chapter 4A, section 4.4"
      url: "https://people.math.wisc.edu/~hkeisler/chapter_4a.pdf"
pipeline_run: null
---

## Statement

For every $r>0$, the Riemann area of the closed disc of radius $r$ is $\pi r^2$. In particular, the unit disc has area $\pi$.

## Facts & Assumptions
**Given:** A real $r>0$ and the graph-area convention of [[def-riemann-area-between-continuous-graphs]].

[L1] If $\varphi$ is differentiable with integrable derivative and $f$ is continuous on an interval containing its image, then $\int_{\varphi(c)}^{\varphi(d)}f=\int_c^d(f\circ\varphi)\varphi'$ ([[thm-substitution]]).

[L2] For every real $x$, the quarter-turn shift formulas are $\sin(x+\pi/2)=\cos x$ and $\cos(x+\pi/2)=-\sin x$, and in particular $\sin(\pi/2)=1$ and $\cos(\pi/2)=0$. For all real $x,y$, the sine and cosine addition formulas hold; moreover, $\sin^2x+\cos^2x=1$ for every real $x$ ([[thm-quarter-turn-values-and-shift-formulas]], [[thm-sine-and-cosine-addition-formulas]], [[cor-trigonometric-parity-and-pythagorean-identity]]).

[L3] $(\sin t)'=\cos t$ and $(\cos t)'=-\sin t$ ([[thm-sine-and-cosine-derivatives]]).

[L4] The Riemann integral is linear ([[thm-linearity-of-the-integral]]).

[L5] If $G$ is differentiable at every point of $[a,b]$, $f=G'$ there, and $f$ is integrable, then $\int_a^b f=G(b)-G(a)$ ([[thm-ftc-second-part]]).

[L6] The integral of the constant $1$ on $[a,b]$ is $b-a$ ([[lem-integral-elementary-bounds]]).



## Proof

**Proof technique:** direct.

1.1 By the definition of graph area, the unit-disc area is $2\int_{-1}^{1}\sqrt{1-x^2}\,dx$. [given]

1.2 For radius $r$, the graph-area formula is $2\int_{-r}^{r}\sqrt{r^2-x^2}\,dx$. Substitute $x=ru$ by [L1]; since $r>0$, the integrand becomes $r\sqrt{1-u^2}$ and $dx=r\,du$, so the value is $r^2$ times the unit-disc area. [given, L1, algebra]

2.1 Apply [L1] with $x=\sin t$ on $[-\pi/2,\pi/2]$. Cosine is nonnegative there, so $\sqrt{1-\sin^2t}=\cos t$ by [L2]; hence the area is $2\int_{-\pi/2}^{\pi/2}\cos^2t\,dt$. [step 1.1, L1, L2, L3, algebra]

3.1 By [L2] and [L4], this equals $\int_{-\pi/2}^{\pi/2}1\,dt+\int_{-\pi/2}^{\pi/2}\cos(2t)\,dt$. [step 2.1, L2, L4, algebra]

4.1 The first integral is $\pi$ by [L6]. The second is $0$: $(\tfrac12\sin(2t))'=\cos(2t)$ by [L3], and [L5] evaluates its endpoint difference as $0$. Thus the unit-disc area is $\pi$. [step 3.1, L2, L3, L5, L6, algebra]

5.1 Combining steps 4.1 and 1.2 gives area $\pi r^2$ for every $r>0$. [step 4.1, step 1.2, algebra] ∎
