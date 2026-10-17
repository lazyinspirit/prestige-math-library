---
id: lem-sir-bounded-potential-unnormalized-update-variance
kind: lemma
title: A bounded-potential SIR update has a uniform unnormalized variance bound
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-measure-kernel-and-probability-kernel
  - def-probability-measure
  - def-moments-variance-and-covariance
  - thm-iid-monte-carlo-mean-moments
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Adam M. Johansen, Pierre Del Moral, and Arnaud Doucet, Sequential Monte Carlo Samplers for Rare Events, §§2–3"
      url: "https://people.bordeaux.inria.fr/pierre.delmoral/resim_paper.pdf"
    - title: "Frédéric Cérou, Pierre Del Moral, and Arnaud Guyader, A nonasymptotic theorem for unnormalized Feynman–Kac particle models, §§1–2"
      url: "https://www.numdam.org/item/10.1214/10-AIHP358.pdf"
---

## Statement

Let $\nu$ be a probability measure on $(E,\mathcal E)$, $M$ a probability kernel on $E$, $G,f:E\to[0,1]$ measurable, $z\in[0,1]$, and $N\ge1$. Draw $Y_1,\ldots,Y_N$ IID from the probability law $\nu M$. Put $a=N^{-1}\sum_{i=1}^NG(Y_i)$. If $a>0$, set
$
\eta^N=\frac{\sum_{i=1}^NG(Y_i)\delta_{Y_i}}{Na};
$
if $a=0$, let $\eta^N$ be any probability measure. Define the one-step unnormalized estimate $\Gamma^N(f)=za\,\eta^N(f)$. Then
$
\mathbb E[\Gamma^N(f)]=z\,\nu M(Gf),
\qquad
\operatorname{Var}(\Gamma^N(f))\le\frac{z^2}{4N}.
$
The estimate is the normalizer update $za$ multiplied by the weighted empirical mean of $f$. The zero-weight fallback does not affect $\Gamma^N$.

## Facts & Assumptions

**Given:** The probability measure $\nu$, probability kernel $M$, measurable functions $G,f$ valued in $[0,1]$, $z\in[0,1]$, and $N$ independent proposals from $\nu M$.

[F1] [[def-measure-kernel-and-probability-kernel]]: Integrating a probability measure against a probability kernel defines a probability law $\nu M$.

[F2] [[thm-iid-monte-carlo-mean-moments]]: The mean of an IID sample average is the common mean, and its variance is the common variance divided by $N$ when the variables are square-integrable.

[F3] [[def-moments-variance-and-covariance]]: For square-integrable $H$, $\operatorname{Var}(H)=\mathbb E[H^2]-(\mathbb E H)^2$.

## Proof

1.1 If $a>0$, then $za\,\eta^N(f)=\frac zN\sum_{i=1}^NG(Y_i)f(Y_i)$ by the definition of $\eta^N$. If $a=0$, each nonnegative $G(Y_i)=0$, so both sides equal zero for any fallback $\eta^N$. Thus the identity holds on every proposal outcome. [given, algebra]

2.1 The variables $H_i=G(Y_i)f(Y_i)$ are IID and lie in $[0,1]$. For $H=H_1$, $H^2\le H$, so [F3] gives $\operatorname{Var}(H)\le\mathbb EH-(\mathbb EH)^2\le1/4$, since $u(1-u)\le1/4$ for $u\in[0,1]$. By [F2], the average $N^{-1}\sum_iH_i$ has mean $\nu M(Gf)$ and variance at most $1/(4N)$. Multiplication by $z$ and step 1.1 give both claims. [F1, F2, F3, step 1.1, given, algebra] ∎

## Source notes

The cited rare-event SMC papers motivate the particle update; this exact one-step bound is proved locally from the canonical IID sample-mean moments, including the zero-weight branch.
