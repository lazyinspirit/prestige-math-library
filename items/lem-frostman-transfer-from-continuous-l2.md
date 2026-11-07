---
dependency_level: 0
id: lem-frostman-transfer-from-continuous-l2
kind: lemma
title: "Frostman transfer from a continuous L2 bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - lem-mean-value-theorem-on-closed-interval
proof_strategy: direct
sources:
  references:
    - title: "Queffélec–Ramaré, Analyse de Fourier des fractions continues à quotients restreints"
      url: "https://ramare-olivier.github.io/Maths/kaufmanbis.pdf"
      locator: "§6, transfer from Lebesgue L2 estimates to the constructed Frostman measure"
---

## Statement

Let $\lambda$ be a Borel probability on $[0,1]$ satisfying $\lambda(I)\le C|I|^d$ for all intervals of length at most1, where $0<d\le1$. Let $F:[0,1]\to\mathbb C$ be $C^1$, with $|F|\le1$ and $|F'|\le M$, where $M>0$. Write $m_2=\int_0^1|F(t)|^2\,dt$. If $0<r<1$ and $r/M<1$, then
$$\int|F|\,d\lambda\le2r+C(r/M)^d(1+m_2M/r^3).$$
For $M=0$, $F$ is constant and $\int|F|\,d\lambda=\sqrt{m_2}$.

## Statement references

[Queffélec–Ramaré, §6](https://ramare-olivier.github.io/Maths/kaufmanbis.pdf) — finite-interval transfer estimate.

## Facts & Assumptions

**Given:** The probability $\lambda$, exponent $d$, constant $C$, differentiable function $F$ and positive parameters $M,r$ as stated.

[F1] The real closed-interval mean value theorem holds. [[lem-mean-value-theorem-on-closed-interval]] Applied to $\operatorname{Re}(\bar zF)$ with $z=(F(t)-F(u))/|F(t)-F(u)|$ when that difference is nonzero, it gives $|F(t)-F(u)|\le M|t-u|$; the zero-difference case is immediate. Hence also $||F(t)|-|F(u)||\le M|t-u|$.

## Proof

**Proof technique:** a finite equal-length interval partition.

1.1 Put $h=r/M<1$ and partition $[0,1]$ into intervals of length $h$ and at most one final shorter interval. Endpoints cause no ambiguity: the Frostman bound implies $\lambda(\{x\})=0$ by containing each point in arbitrarily short intervals. Call a full interval bad if its supremum of $|F|$ is at least $2r$. By F1, $|F|\ge r$ everywhere on any such interval. If there are $b$ bad full intervals, Lebesgue integration therefore gives $m_2\ge b r^2h$, so $b\le m_2M/r^3$. [given, F1, construct, algebra]

2.1 On all remaining full intervals $|F|\le2r$, giving total $\lambda$ integral at most $2r$. On each bad interval and on the possible shorter final interval use $|F|\le1$ and the mass bound $\lambda(I)\le Ch^d$. Their total contribution is at most $C(r/M)^d(1+m_2M/r^3)$ by step 1.1. Summing proves the displayed estimate. If $M=0$, F1 with zero Lipschitz constant makes $F$ constant, so the last assertion follows directly from the definitions. [given, F1, step 1.1, algebra] ∎

