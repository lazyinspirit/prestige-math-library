---
id: ex-kac-reciprocal-return-frequency-from-birkhoff
kind: example
title: Reciprocal return frequency from Birkhoff
status: draft
origin: pipeline
deps: [cor-birkhoff-ergodic-theorem-for-ergodic-probability-systems, thm-kac-return-time-formula, def-first-return-time-and-induced-transformation, def-axiom-of-choice]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§10.5, printed pp. 93–97; return-frequency consequence"
proof_strategy: direct
---

## Example

Assume the Axiom of Choice.  In an ergodic probability system, let
$E$ be measurable with $\mu(E)>0$.  If $\tau_m(x)$ is the time of the $m$th
visit of $x$ to $E$, counting time zero as a possible visit, then

$$\frac{\tau_m(x)}m\longrightarrow\frac1{\mu(E)}$$

for almost every $x$.  This is the orbit-frequency form of Kac's reciprocal
law.

## Facts & Assumptions

**Given:** Full choice, an ergodic probability system $(X,\mathcal A,\mu,T)$, and $E\in\mathcal A$ with $\mu(E)>0$.

[F1] Birkhoff's ergodic specialization gives $A_n\mathbf1_E(x)\to\mu(E)$ almost everywhere ([[cor-birkhoff-ergodic-theorem-for-ergodic-probability-systems]]).

[F2] The first-return convention uses positive return times and its Kac formula is $\int_Er_E\,d\mu=1$, equivalently mean induced return time $1/\mu(E)$ ([[def-first-return-time-and-induced-transformation]], [[thm-kac-return-time-formula]]).

[F3] Full choice is the assumption recorded in [[def-axiom-of-choice]].

## Verification

**Proof technique:** invert the visit-frequency limit.

1.1 Put $N_E(n,x)=\sum_{k=0}^{n-1}\mathbf1_E(T^kx)$.  By [F1], on a conull set $N_E(n,x)/n\to\mu(E)>0$.  Consequently $N_E(n,x)\to\infty$, so every positive visit number occurs. [F1]

2.1 For such an $x$ define canonically $$\tau_m(x)=\min\{r\geq0:N_E(r+1,x)=m\},\qquad m\geq1.$$ Then $\tau_m(x)\to\infty$ and $N_E(\tau_m(x)+1,x)=m$. [step 1.1, construct]

3.1 Evaluating the limit in step 1.1 along $n=\tau_m(x)+1$ gives $$\frac{m}{\tau_m(x)+1}\longrightarrow\mu(E).$$ Positivity permits reciprocals, so $(\tau_m(x)+1)/m\to1/\mu(E)$; subtracting $1/m$ proves $\tau_m(x)/m\to1/\mu(E)$. [step 1.1, step 2.1, algebra]

4.1 The result is orbitwise and complements [F2], which integrates the first positive return time over $E$.  Full choice is used only through the Birkhoff specialization [F1]; the visit times in step 2.1 are least integers, not chosen from an arbitrary family. [F1, F2, F3, step 3.1] ∎
