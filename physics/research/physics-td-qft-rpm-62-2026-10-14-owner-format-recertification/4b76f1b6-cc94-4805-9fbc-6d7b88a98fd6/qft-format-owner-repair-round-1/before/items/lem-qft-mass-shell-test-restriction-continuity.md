---
id: lem-qft-mass-shell-test-restriction-continuity
kind: lemma
title: Continuity and Klein–Gordon annihilation of scalar shell restriction
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-qft-scalar-mass-shell
  - def-countable-choice
  - def-schwartz-space-and-its-seminorms
  - cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space
  - thm-fourier-transform-maps-schwartz-space-continuously-to-itself
dependency_roles:
  def-qft-scalar-mass-shell: mathematical-premise
  def-countable-choice: mathematical-premise
  def-schwartz-space-and-its-seminorms: mathematical-premise
  cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space: mathematical-premise
  thm-fourier-transform-maps-schwartz-space-continuously-to-itself: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, author-hosted HTML text of chapter 2
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html
      locator: Sections 2.2 and 2.4, free scalar Fourier modes and relativistic shell normalization.
    - title: Mark Srednicki, Quantum Field Theory, author draft, chapters 3–4
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page author-hosted draft; chapter 3 equations 3.15–3.19 and chapter 4 equations 4.11–4.15.
---

## Statement

Assume Countable Choice [[def-countable-choice]]. For every $\mu\ge0$, the
pointwise restriction
$$K_\mu f(p)=\int_{\mathbb R^4}f(x)e^{ip\circ x}\,d^4x$$
of [[def-qft-scalar-mass-shell]] maps $\mathscr S(\mathbb R^4)$ continuously
and linearly into $H_\mu$. It also annihilates the Klein–Gordon test operator:
$$K_\mu\bigl((\partial_0^2-\Delta+\mu^2)f\bigr)=0
\qquad(f\in\mathscr S(\mathbb R^4)).$$
The coordinates are the fixed length coordinates of that definition and
$\mu$ has inverse-length units.

## Facts & Assumptions

**Given:** Countable Choice, the scalar shell and Fourier convention, and the
Schwartz seminorm topology.

[A1] Assume Countable Choice. [[def-countable-choice]]

[F1] The shell phase is $p\circ x=p^0x^0-\mathbf p\cdot\mathbf x$, and
$K_\mu f(p)=\mathcal F_+f(p)$ on $p=p_\mu(\mathbf k)$.
[[def-qft-scalar-mass-shell]]

[F2] Schwartz space consists of smooth functions whose coordinate-weighted
derivatives are bounded; these seminorms define its topology.
[[def-schwartz-space-and-its-seminorms]]

[F3] The standard Fourier transform and inverse are continuous on Schwartz
space and are an automorphism; the reflection and rescaling in [F1] preserve
this property.
[[cor-fourier-transform-is-a-topological-automorphism-of-schwartz-space]]

[F4] For the standard Fourier convention,
Fourier transformation is continuous on Schwartz space and transforms
derivatives into polynomial multiplication, with the stated $2\pi$ factors.
After the coordinate reflection and rescaling in [F1], the same derivative
identity holds for $\mathcal F_+$.
[[thm-fourier-transform-maps-schwartz-space-continuously-to-itself]]

## Proof

1.1 Define the continuous Schwartz seminorm
$$q_2(f)=\sup_{p\in\mathbb R^4}(1+|p|)^2|\mathcal F_+f(p)|.$$
Continuity follows from [F3,F4] and [F2]. On shell,
$|\mathcal F_+f(p_\mu(\mathbf k))|
\le q_2(f)(1+|\mathbf k|)^{-2}$ because
$|p_\mu(\mathbf k)|\ge|\mathbf k|$. Hence
$$\|K_\mu f\|_{H_\mu}^2
\le\frac{q_2(f)^2}{2(2\pi)^3}
\int_{\mathbb R^3}
\frac{(1+|\mathbf k|)^{-4}}{\omega_\mu(\mathbf k)}\,d^3\mathbf k.$$
The integral is finite: in polar coordinates its radial integrand is
$r^2(1+r)^{-4}/\sqrt{r^2+\mu^2}$, which is $O(r)$ near $0$ when $\mu=0$,
is $O(r^2)$ near $0$ when $\mu>0$, and is $O(r^{-3})$ at infinity.
Therefore $K_\mu f\in H_\mu$, and the displayed seminorm bound proves
continuity and linearity. [A1,F1,F2,F3,F4,given,algebra]

2.1 By [F4], applying $\partial_0^2-\Delta+\mu^2$ before $\mathcal F_+$
multiplies by $-(p^0)^2+|\mathbf p|^2+\mu^2$. On the shell this multiplier
is $-\omega_\mu(\mathbf k)^2+|\mathbf k|^2+\mu^2=0$. Restriction to the
shell therefore gives the asserted Klein–Gordon identity. [A1,F1,F4,step 1.1,given,algebra] ∎
