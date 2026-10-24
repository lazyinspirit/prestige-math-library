---
id: ex-second-order-delta-method-quadratic
kind: example
title: "A zero-gradient quadratic limit"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps: [thm-first-and-second-order-delta-method-for-random-vectors]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Example

Let $\Omega=\{-\sqrt2,0,\sqrt2\}$ with probabilities $1/4,1/2,1/4$, let $Z(\omega)=\omega$, and set $T_n=Z/\sqrt n$ for $n\ge1$. For $g(t)=t^2$ at $\theta=0$, the first derivative vanishes and the second derivative is $2$. The second-order delta method gives $nT_n^2\Rightarrow Z^2$, which equals $0$ or $2$ with probability $1/2$ each.

## Facts & Assumptions

**Given:** The finite three-point law and sequence in the example.

[A1] $\Omega=\{-\sqrt2,0,\sqrt2\}$ has full sigma-field and assigns probabilities $1/4,1/2,1/4$ respectively; $Z(\omega)=\omega$.

[F1] [[thm-first-and-second-order-delta-method-for-random-vectors]]: if $r_n>0$ is deterministic with $r_n\to\infty$, $r_n(T_n-\theta)\Rightarrow Z$, the Borel map $g$ has zero first derivative at $\theta$, and $g(\theta+h)-g(\theta)=\frac12H[h,h]+o(\|h\|^2)$ for a continuous symmetric bilinear map $H$, then $r_n^2(g(T_n)-g(\theta))\Rightarrow\frac12H[Z,Z]$.

## Verification

**Given:** The three-point law, $r_n=\sqrt n$, $\theta=0$, and $g(t)=t^2$.

1.1 By [A1], $Z$ has the stated three-point law. We have $\sqrt n(T_n-0)=Z$ exactly and $g(h)-g(0)=h^2=\frac12(2)h^2$ for every $h$, so the first derivative is zero, the second derivative is $2$, and the second-order remainder vanishes. [A1, given, algebra]

2.1 Apply [F1] to obtain $nT_n^2\Rightarrow Z^2$. By [A1], $Z^2=0$ at $\omega=0$ and $Z^2=2$ at $\omega=\pm\sqrt2$, so each value has probability $1/2$. [A1, F1, given, step 1.1, algebra] ∎
