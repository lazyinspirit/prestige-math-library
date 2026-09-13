---
id: ex-action-angle-coordinates-for-the-harmonic-oscillator
kind: example
title: Action–angle coordinates for the harmonic oscillator
status: draft
origin: pipeline
deps: ["def-action-and-angle-coordinates"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, harmonic oscillator and Theorem 18.12, pp. 110--111
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Example

For the oscillator $H=(p^2+\Omega^2q^2)/2$ with $\Omega>0$, remove the
equilibrium. With a radian angle $\phi\in\mathbb R/(2\pi\mathbb Z)$,

$$q=\sqrt{\frac{2J}{\Omega}}\sin\phi,\qquad p=\sqrt{2J\Omega}\cos\phi,\qquad J=\frac H\Omega.$$

Then $\omega=d\phi\wedge dJ$. In the page's period-one convention,
$\theta=\phi/(2\pi)$ and $I=2\pi J=2\pi H/\Omega$ are action–angle
coordinates.

## Facts & Assumptions

**Given:** The standard form $dq\wedge dp$ and positive frequency $\Omega$.

[F1] Period-one action–angle coordinates satisfy
$\omega=d\theta\wedge dI$.
[[def-action-and-angle-coordinates]].

## Verification

**Proof technique:** direct.

1.1 Differentiating the displayed substitution gives $dq\wedge dp=d\phi\wedge dJ$; its Jacobian coefficient is $\cos^2\phi+\sin^2\phi=1$. Also direct substitution gives $H=\Omega J$. [given, algebra]

2.1 Since $d\theta\wedge dI=(d\phi/(2\pi))\wedge(2\pi\,dJ)=d\phi\wedge dJ$, [F1] applies. Moreover $H=\Omega I/(2\pi)$, so the library Hamiltonian convention gives $\dot\theta=\Omega/(2\pi)$, equivalently $\dot\phi=\Omega$. Thus the displayed substitution explicitly supplies the action–angle coordinates. If angle has period $2\pi$ instead, the corresponding action is $J=H/\Omega$; the factor $2\pi$ is purely normalization. [F1, step 1.1] ∎
