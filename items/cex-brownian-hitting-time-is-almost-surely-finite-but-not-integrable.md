---
id: cex-brownian-hitting-time-is-almost-surely-finite-but-not-integrable
kind: counterexample
title: "Almost-sure finiteness does not imply integrability"
status: draft
origin: pipeline
deps: [cor-one-dimensional-brownian-motion-hits-every-point-almost-surely, ex-density-and-infinite-mean-of-a-one-sided-hitting-time, def-brownian-motion, def-random-element-and-real-random-variable, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Section 2.7"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Statement refuted

The statement "if a real-valued random time is finite almost surely, then it is
integrable" is false: a real-valued null-set modification of the first hitting
time of a positive level by standard Brownian motion is finite everywhere and
has infinite mean.

## Counterexample

**Given:** AC, a standard Brownian motion $B$ [[def-brownian-motion]] in the
everywhere-continuous zero-start representative fixed by
[[cor-one-dimensional-brownian-motion-hits-every-point-almost-surely]] and
[[ex-density-and-infinite-mean-of-a-one-sided-hitting-time]], a real $a>0$,
and $\tau_a=\inf\{t\ge0:B_t=a\}$, with $\inf\varnothing=+\infty$.

**Proof technique:** direct.

1.1 By [[cor-one-dimensional-brownian-motion-hits-every-point-almost-surely]], $\tau_a$ is a measurable $[0,\infty]$-valued random time and the measurable event $N:=\{\tau_a=+\infty\}$ has probability zero. [given]

2.1 Define $T_a(\omega)=\tau_a(\omega)$ for $\omega\notin N$ and $T_a(\omega)=0$ for $\omega\in N$. Then $T_a$ takes values in $[0,\infty)\subset\mathbb R$ on every outcome. It is measurable: for $c<0$ the set $\{T_a\le c\}$ is empty, while for $c\ge0$ it is $N\cup\{\tau_a\le c\}$. Thus $T_a$ is a real random variable in the sense of [[def-random-element-and-real-random-variable]], and in particular a real-valued random time. [step 1.1]

3.1 The variables $T_a$ and $\tau_a$ differ only on the null event $N$. Consequently, for every Borel set $C\subseteq[0,\infty)$, the events $\{T_a\in C\}$ and $\{\tau_a\in C\}$ have symmetric difference contained in $N$, so they have the same probability. Hence $T_a$ has the density $a(2\pi t^3)^{-1/2}e^{-a^2/(2t)}$ from [[ex-density-and-infinite-mean-of-a-one-sided-hitting-time]], and the same supplier's calculation gives $E[T_a]=+\infty$. [given, step 1.1, step 2.1]

4.1 Therefore $T_a$ is finite on every outcome, hence finite almost surely, but is not integrable. This real-valued witness refutes the stated implication. The null-set modification is explicit, and AC is used only through the Brownian construction and the two cited hitting-time suppliers. [step 2.1, step 3.1] ∎
