---
id: lem-adapted-continuous-processes-are-progressively-measurable
kind: lemma
title: "Adapted continuous processes are progressively measurable"
status: draft
origin: pipeline
deps: [def-progressively-measurable-and-predictable-process, def-continuous-time-adapted-process-and-martingale, thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Aad van der Vaart, Stochastic Integration and Differential Equations, Section 5.1"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
---

## Statement

Let $(\Omega,\mathcal F,P)$ be a probability space with a continuous-time
filtration $(\mathcal F_t)_{t\ge0}$, and let $X=(X_t)_{t\ge0}$ be a real process
that is adapted [[def-continuous-time-adapted-process-and-martingale]] and has
continuous paths, in the strong sense that $s\mapsto X_s(\omega)$ is continuous
on $[0,\infty)$ for every $\omega\in\Omega$. Then $X$ is progressively
measurable and predictable relative to $(\mathcal F_t)$ in the sense of
[[def-progressively-measurable-and-predictable-process]], including at time
zero under the generator convention $\{0\}\times A$, $A\in\mathcal F_0$. No
choice principle is used.

If instead the paths are continuous only on an event $A\in\mathcal F$ with
$P(A)=1$, the conclusion holds for the modification that is set equal to $0$
off $A$ provided $A\in\mathcal F_0$; without such a measurability assumption on
the continuity event no predictability claim is made, because predictability
is a property of the given joint map.

## Facts & Assumptions

**Given:** a probability space with a filtration $(\mathcal F_t)_{t\ge0}$, a real adapted process $X$ with continuous paths everywhere, a horizon $T>0$, and for $n\ge1$ the dyadic grid $t_k=kT/2^n$, $0\le k\le 2^n$.

[F1] $X$ is adapted: $X_u$ is $\mathcal F_u$-measurable for every $u\ge0$; in particular $X_u$ is $\mathcal F_T$-measurable for $u\le T$. [[def-continuous-time-adapted-process-and-martingale]]

[F2] The finite and countable unions of sets of the form $C\times A$ with $C\in\mathcal B([0,T])$ and $A\in\mathcal F_T$ generate $\mathcal B([0,T])\otimes\mathcal F_T$; the same holds with the filtration index of $A$ lowered to any $u\le T$. [[def-progressively-measurable-and-predictable-process]]

[F3] A pointwise limit of measurable functions into $\mathbb R$ is measurable; the same theorem applied coordinatewise gives measurability of limits of jointly measurable maps. [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]]

[F4] The generators of the predictable sigma-algebra are the sets $(s,u]\times A$ with $A\in\mathcal F_s$ and the time-zero sets $\{0\}\times A$ with $A\in\mathcal F_0$; $[0,T]\times\Omega$ itself is a generator, as it equals $(0,T]\times\Omega$ together with $\{0\}\times\Omega$. [[def-progressively-measurable-and-predictable-process]]

## Proof

**Proof technique:** direct.

1.1 Fix $n\ge1$ and define, for $(s,\omega)\in[0,T]\times\Omega$, $$H^n_s(\omega):=\sum_{k=0}^{2^n-1}X_{t_k}(\omega)\,1_{(t_k,t_{k+1}]}(s)+X_0(\omega)\,1_{\{0\}}(s).$$ For a Borel set $B\subseteq\mathbb R$ the preimage is $\{H^n\in B\}=\bigl(\{0\}\times\{X_0\in B\}\bigr)\cup\bigcup_{k=0}^{2^n-1}\bigl((t_k,t_{k+1}]\times\{X_{t_k}\in B\}\bigr)$, a finite union of measurable rectangles of $\mathcal B([0,T])\otimes\mathcal F_T$, since $X_{t_k}$ is $\mathcal F_{t_k}$-measurable and $\mathcal F_{t_k}\subseteq\mathcal F_T$. [F1, F2, given]

2.1 Each $H^n$ is measurable for $\mathcal B([0,T])\otimes\mathcal F_T$, and for every $(s,\omega)$ the identity $H^n_s(\omega)\to X_s(\omega)$ holds: at $s=0$ both sides equal $X_0(\omega)$, and for $s\in(0,T]$ the left endpoints $t_k$ of the dyadic intervals containing $s$ tend to $s$, so path continuity gives $X_{t_k}(\omega)\to X_s(\omega)$. [step 1.1, given]

3.1 By [F3] the pointwise limit $X$ restricted to $[0,T]\times\Omega$ is $\mathcal B([0,T])\otimes\mathcal F_T$-measurable; $T>0$ was arbitrary, so $X$ is progressively measurable. [F3, step 2.1]

3.2 Each $H^n$ is predictable: the preimage formula of step 2.1 exhibits $H^n$ as a finite sum of generators of the predictable sigma-algebra, since $X_{t_k}$ is $\mathcal F_{t_k}$-measurable and each interval $(t_k,t_{k+1}]$ is a generator interval, while the time-zero term is $\{0\}\times\{X_0\in B\}$ with $\{X_0\in B\}\in\mathcal F_0$. [F1, F4, step 2.1]

4.1 For each fixed $T$ the restriction of $X$ to $[0,T]\times\Omega$ is a pointwise limit of the predictable processes $H^n$ restricted to $[0,T]$, hence is predictable on that horizon by [F3]; and the horizon-$T$ pieces assemble to a globally predictable process because $[0,T]\times\Omega\in\mathcal P$ and a set is predictable as soon as all its intersections with the countably many sets $[0,m]\times\Omega$, $m\ge1$, are. [F3, F4, step 3.2]

5.1 Collecting steps 3.1 and 4.1, an adapted process with everywhere continuous paths is progressively measurable and predictable. The time-zero case is included: $H^n_0=X_0$ at every stage and the generator $\{0\}\times A$, $A\in\mathcal F_0$, was used in step 3.2. No grid point, approximant or limit in the argument is chosen: the dyadic grids and the left endpoints are fixed functions of $n$, and pointwise limits are unique. [step 3.1, step 4.1, given] ∎

## Source notes

The approximation is the standard dyadic-step argument of van der Vaart, Section 5.1; continuous adapted processes generate the predictable sigma-algebra, and the left-continuous staircase approximants are predictable by construction. The time-zero generator is the only place where the convention $\{0\}\times\mathcal F_0$ is used; the alternative convention that identifies $\{0\}\times\Omega$ with the whole filtration at time zero changes nothing for processes that are already $\mathcal F_0$-measurable at time zero.
