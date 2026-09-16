---
id: ex-simple-pendulum-phase-portrait
kind: example
title: Simple pendulum phase portrait
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
      locator: Homework 13, Simple Pendulum, p. 112
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: cases
---

## Example

Assume $\mathrm{AC}_\omega$. On $T^*S^1$ consider the normalized pendulum

$$H(q,p)=\frac{p^2}{2}+1-\cos q.$$

For $0<E<2$ its energy curve describes oscillation; for $E>2$ its two
components describe rotations in opposite directions; and $E=2$ is the
singular separatrix through the unstable equilibrium.

## Facts & Assumptions

**Given:** $q$ is taken modulo $2\pi$ and $p\in\mathbb R$.

[F1] Hamilton's equations give $\dot q=p$ and $\dot p=-\sin q$. [[thm-hamilton-equations-in-canonical-cotangent-coordinates]].

## Verification

**Proof technique:** cases.

1.1 The level equation is $p^2=2(E-1+\cos q)$. Its critical points solve $p=0$ and $\sin q=0$: $(0,0)$ is a minimum of energy $0$, while $(\pi,0)$ is a saddle of energy $2$. [given, algebra]

2.1 Assume $0<E<2$. The allowed angles form a proper interval about $q=0$; the positive and negative square-root branches meet at two turning points $p=0$, producing a closed oscillatory curve. By [F1], the sign of $p$ is the direction of angular travel and reverses at those endpoints. [assume-case oscillation, F1, step 1.1]

2.2 Assume $E>2$. The right-hand side is strictly positive for every $q$. The two graphs $p=\pm\sqrt{2(E-1+\cos q)}$ are disjoint circles over $S^1$, and [F1] gives rotation with fixed sign. [assume-case rotation, F1, step 1.1]

2.3 Assume $E=2$. The two branches meet at the saddle and form the homoclinic separatrix; the level is singular and is not a regular Liouville torus. [assume-case separatrix, F1, step 1.1]

3.1 Finally $E=0$ gives only the stable equilibrium, while $E<0$ gives the empty level because $H\ge0$. These alternatives and steps 2.1--2.3 exhaust all energies. [step 1.1, step 2.1, step 2.2, step 2.3, cases-exhaustive] ∎
