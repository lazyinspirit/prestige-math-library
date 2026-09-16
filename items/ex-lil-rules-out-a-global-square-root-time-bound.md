---
id: ex-lil-rules-out-a-global-square-root-time-bound
kind: example
title: "LIL rules out a square-root-time bound"
status: draft
origin: pipeline
deps: [cor-brownian-law-of-the-iterated-logarithm-at-zero, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Rick Durrett, Probability: Theory and Examples, fifth edition, Theorem 8.5.1"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
---

## Example

Let $B$ be a standard Brownian motion. Almost surely there is no finite random
constant $C$ and no random $\delta>0$ such that
$$|B_t|\le C\sqrt t\qquad\text{for all }0<t<\delta .$$
Thus the square-root bound that holds in expectation for a single time is
false as a pathwise statement near the origin.

## Facts & Assumptions

**Given:** AC and a standard Brownian motion $B$.

[F1] Almost surely $\limsup_{t\downarrow0}B_t/\sqrt{2t\log\log(1/t)}=1$ and the corresponding limit inferior is $-1$. [[cor-brownian-law-of-the-iterated-logarithm-at-zero]]

[F2] AC is the ambient assumption of the Brownian interfaces. [[def-axiom-of-choice]]

## Verification

**Proof technique:** direct.

1.1 On the probability-one event of [F1], combining the two limit statements gives $\limsup_{t\downarrow0}|B_t|/\sqrt{2t\log\log(1/t)}=1$, so there are $t_n\downarrow0$ with $\sqrt{2\log\log(1/t_n)}\,|B_{t_n}|/\sqrt{2t_n\log\log(1/t_n)}\to\infty$. [given, F1]

2.1 For such a sequence $|B_{t_n}|/\sqrt{t_n}=\sqrt{2\log\log(1/t_n)}\cdot\frac{|B_{t_n}|}{\sqrt{2t_n\log\log(1/t_n)}}\to\infty$; hence for every finite constant $c$ there exist $t\in(0,\delta)$ with $|B_t|>c\sqrt t$, whatever $\delta>0$ is prescribed, which is exactly the failure of the displayed bound for a finite random $C$ and random $\delta>0$. [step 1.1]

3.1 The cases are covered: only $t>0$ is quantified, so the normalizer $\log\log(1/t)$ is defined and positive for small $t$; the constant $C$ is allowed to be random and finite, and the argument produces, on the given outcome, arbitrarily small times violating any fixed finite value; and AC enters only through [F2]. [step 2.1, F2, given] ∎

## Source notes

The law of the iterated logarithm at zero does more than fail to provide a one-half modulus: it exhibits a sequence of times along which $|B_t|/\sqrt t$ diverges. Durrett's Theorem 8.5.1, transported to zero, is the source of that sequence.
