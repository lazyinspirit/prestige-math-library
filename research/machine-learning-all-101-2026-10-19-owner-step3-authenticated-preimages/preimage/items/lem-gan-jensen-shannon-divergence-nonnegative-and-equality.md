---
id: lem-gan-jensen-shannon-divergence-nonnegative-and-equality
kind: lemma
title: Nonnegativity and equality for density Jensen–Shannon divergence
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-gan-jensen-shannon-divergence
  - def-gan-minimax-objective
  - thm-coordinatewise-measurability-into-r-n
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
proof_strategy: direct
aliases: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Ian J. Goodfellow et al., Generative Adversarial Nets, arXiv:1406.2661v1"
      url: "https://arxiv.org/pdf/1406.2661"
    - title: "Yingzhen Li, Lecture notes on generative adversarial networks (GANs), Deep Learning (Winter 2022, Imperial College London)"
      url: "https://yingzhenli.net/home/pdf/imperial_dlcourse2022_gan_notes.pdf"
verification:
  precheck: pass
---

## Statement

For two probability measures $P,Q$ with finite-valued nonnegative densities $p,q$ relative to a common measure $\mu$, put $m=(p+q)/2$, $r=p/m$ and $s=q/m$ where $m>0$, and $r=s=0$ where $m=0$. Set $\phi(0)=0$ and $\phi(t)=t\ln t$ for $t>0$. The functions $m\phi(r)$ and $m\phi(s)$ are integrable, and the density-defined Jensen–Shannon divergence $\operatorname{JS}_\mu(P,Q)=\tfrac12\int m\phi(r)\,d\mu+\tfrac12\int m\phi(s)\,d\mu$ is a finite nonnegative real number. It is zero if and only if $P=Q$, equivalently if and only if $p=q$ $\mu$-almost everywhere.

## Statement references

[[def-gan-jensen-shannon-divergence|Density-defined Jensen–Shannon divergence]]

[Goodfellow et al., §4.1, equations (5)–(6), complete 9-page paper](https://arxiv.org/pdf/1406.2661)

[Li, §1.2, equation (11), complete 6-page lecture note](https://yingzhenli.net/home/pdf/imperial_dlcourse2022_gan_notes.pdf)

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$, probability measures $P,Q$, and finite-valued nonnegative measurable densities $p,q$ relative to $\mu$.

[F1] [[def-gan-minimax-objective]]: $P(E)=\int_Ep\,d\mu$ and $Q(E)=\int_Eq\,d\mu$ for every measurable $E$, and $\int p\,d\mu=\int q\,d\mu=1$.

[F2] [[def-gan-jensen-shannon-divergence]]: $m=(p+q)/2$; on $m>0$, $r=p/m$, $s=q/m$ satisfy $0\le r,s\le2$ and $r+s=2$; on $m=0$ set $r=s=0$. With $\phi(0)=0$ and $\phi(t)=t\ln t$ for $t>0$, $\operatorname{JS}_\mu(P,Q)=\tfrac12\int m\phi(r)\,d\mu+\tfrac12\int m\phi(s)\,d\mu$.

[F3] [[thm-logarithm-derivative-and-integral]]: for $t>0$, $\ln t=\int_1^t du/u$.

[F4] [[thm-natural-logarithm-laws]]: $\ln$ is strictly increasing and $\ln1=0$.

[F5] [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]: a nonnegative measurable function has integral zero exactly when it vanishes $\mu$-almost everywhere.

[F6] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the Lebesgue integral is linear on integrable functions.

[F7] [[cor-additivity-of-the-nonnegative-lebesgue-integral]]: the nonnegative Lebesgue integral is additive on nonnegative measurable functions.

[F8] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: the nonnegative integral is monotone and homogeneous for positive scalars.

[F9] [[prop-closure-properties-of-measurable-functions-used-by-the-integral]]: sums and finite scalar multiples of real measurable functions are measurable.

[F10] [[thm-coordinatewise-measurability-into-r-n]]: a map into $\mathbb R^n$ is measurable when its coordinate functions are measurable.

[F11] [[thm-composition-with-borel-functions-preserves-measurability]]: composing a measurable map with a Borel map preserves measurability.

[F12] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: arithmetic operations, including pointwise products, preserve measurability when defined.

## Proof

1.1 Define $\psi(0)=1$ and $\psi(t)=t\ln t-t+1$ for $t>0$. If $0<t<1$, then $\ln t=-\int_t^1du/u>-(1-t)/t=1-1/t$, since $1/u<1/t$ for $t<u\le1$. If $t>1$, then $\ln t=\int_1^tdu/u>(t-1)/t=1-1/t$, since $1/u>1/t$ for $1\le u<t$. Thus $\psi(t)>0$ for $t\ne1$ and $\psi(1)=0$. Also $-1\le\phi(t)\le0$ for $0<t\le1$, by the first inequality and $\ln t\le0$; and $0\le\phi(t)\le t(t-1)\le2$ for $1\le t\le2$, since $\ln t=\int_1^tdu/u\le t-1$. At $t=0$, $\phi(0)=0$ and $\psi(0)=1$. Hence $\psi\ge0$ with equality exactly at $1$, $|\phi(t)|\le2$, and $\psi(t)\le5$ on $[0,2]$. [given, F3, F4, algebra]

2.1 By [F1], [F7] and [F8], $\int m\,d\mu=\tfrac12\int(p+q)\,d\mu=1$. By [F2], $0\le r,s\le2$. Coordinatewise measurability [F10], Borel composition [F11], and arithmetic/product closure [F9, F12] make $m\phi(r)$, $m\phi(s)$, and $\tfrac12m(\psi(r)+\psi(s))$ measurable. Step 1.1 gives $|m\phi(r)|,|m\phi(s)|\le2m$ and $0\le\tfrac12m(\psi(r)+\psi(s))\le5m$, so they are integrable. On $m>0$, $r+s=2$ and $\phi(t)=\psi(t)+t-1$, so $\phi(r)+\phi(s)=\psi(r)+\psi(s)\ge0$; when $m=0$ both products by $m$ vanish. Linearity in [F6] gives $\operatorname{JS}_\mu(P,Q)=\int \tfrac12m(\psi(r)+\psi(s))\,d\mu\ge0$. [F1, F2, F6, F7, F8, F9, F10, F11, F12, step 1.1, algebra]

3.1 If $\operatorname{JS}_\mu(P,Q)=0$, the nonnegative measurable function $h:=\tfrac12m(\psi(r)+\psi(s))$ has integral zero by step 2.1. By [F5], $h=0$ $\mu$-almost everywhere. On $m>0$, both $\psi(r)$ and $\psi(s)$ are nonnegative, so they must each be zero almost everywhere there; step 1.1 gives $r=s=1$ there, hence $p=q$. On $m=0$, nonnegativity and $m=(p+q)/2$ give $p=q=0$. Therefore $p=q$ $\mu$-almost everywhere, and [F1] implies $P(E)=Q(E)$ for every measurable $E$. [F1, F5, step 1.1, step 2.1, algebra]

3.2 Conversely, suppose $P=Q$. If $\{p>q\}$ had positive measure, it would be the countable union over positive integers $n,k$ of $E_{n,k}:=\{p-q\ge1/n\}\cap\{p+q\ge1/k\}$, so some $E_{n,k}$ would have positive measure. On that set, $\mu(E_{n,k})/k\le\int_{E_{n,k}}(p+q)\,d\mu\le\int(p+q)\,d\mu=2\int m\,d\mu=2$ by [F1], [F7], [F8] and step 2.1, so its measure is finite. By [F1] and [F6], $0=P(E_{n,k})-Q(E_{n,k})=\int_{E_{n,k}}(p-q)\,d\mu\ge\mu(E_{n,k})/n>0$, a contradiction. The same argument with $p,q$ exchanged rules out $\{q>p\}$, hence $p=q$ $\mu$-almost everywhere. Then $r=s=1$ almost everywhere on $m>0$, so [F2] gives $\operatorname{JS}_\mu(P,Q)=0$. [F1, F2, F6, F7, F8, F9, step 2.1, algebra]

4.1 Steps 3.1 and 3.2 prove that $\operatorname{JS}_\mu(P,Q)$ is zero exactly when $P=Q$; step 2.1 proves it is finite and nonnegative. These are all claims in the Statement. [step 2.1, step 3.1, step 3.2] ∎
