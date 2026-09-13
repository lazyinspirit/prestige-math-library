---
id: ex-harmonic-oscillator-and-elliptic-phase-curves
kind: example
title: Harmonic oscillator and elliptic phase curves
status: published
origin: pipeline
deps: ["def-countable-choice", "thm-hamilton-equations-in-canonical-cotangent-coordinates"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, §§18.2 and 18.4, pp. 107--110
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$. For $m,\Omega>0$, the one-dimensional harmonic
oscillator

$$H(q,p)=\frac{p^2}{2m}+\frac{m\Omega^2q^2}{2}$$

has period $2\pi/\Omega$ away from the equilibrium. Every positive-energy
phase curve is the ellipse $p^2/(2mE)+m\Omega^2q^2/(2E)=1$.

## Facts & Assumptions

**Given:** Positive $m,\Omega$ and canonical coordinates on $T^*\mathbb R$.

[F1] Hamilton's equations hold under the stated choice assumption.
[[thm-hamilton-equations-in-canonical-cotangent-coordinates]].

## Verification

**Proof technique:** direct.

1.1 By [F1], $\dot q=p/m$ and $\dot p=-m\Omega^2q$, hence $\ddot q+\Omega^2q=0$. Thus $q(t)=A\cos(\Omega t)+B\sin(\Omega t)$ and $p(t)=m\dot q(t)$. Every nonconstant solution has period $2\pi/\Omega$. [F1, algebra]

2.1 Conservation follows directly from $\frac d{dt}H=(p/m)\dot p+m\Omega^2q\dot q=0$. Setting the constant value to $E>0$ and dividing its level equation by $E$ gives the displayed ellipse. For $E=0$, positivity forces $(q,p)=(0,0)$, the stationary equilibrium. [step 1.1, algebra] ∎
