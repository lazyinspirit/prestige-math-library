---
id: prop-polynomially-related-encodings-preserve-polynomial-classes
kind: proposition
title: "Polynomially related encodings preserve polynomial-time and polynomial-space classes"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-dtime-ntime-dspace-and-nspace, def-instance-size-under-an-encoding, prop-polynomially-related-encodings-preserve-polynomial-size]
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Julian Panetta, ECS 120 Theory of Computation: Asymptotic analysis (cont'd) and time complexity"
      url: "https://www.cs.ucdavis.edu/~doty/ecs120slides/05c_Asymptotic_analysis-contd-TimeIntro-deck.html"
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $I$ be a set of instances, let $L\subseteq I$, and let
$\sigma,\tau:I\to\{0,1\}^*$ be effective encodings that are polynomially
related in the sense of [[def-instance-size-under-an-encoding]]. Assume in
addition that the valid-code languages $\sigma[I]$ and $\tau[I]$ are decidable
in polynomial time and polynomial space, and that there are total functions
$$ T_{\sigma\to\tau},T_{\tau\to\sigma}:\{0,1\}^*\to\{0,1\}^* $$
computable in polynomial time and polynomial space such that
$$ T_{\sigma\to\tau}(\sigma(x))=\tau(x),\qquad T_{\tau\to\sigma}(\tau(x))=\sigma(x) $$
for every $x\in I$. Then $L$ is decidable in polynomial time under $\sigma$ if
and only if it is decidable in polynomial time under $\tau$, and likewise for
polynomial space.

## Facts & Assumptions

**Given:** The instance set $I$, the language $L\subseteq I$, the polynomially related encodings $\sigma,\tau$, polynomial-time and polynomial-space deciders for the valid-code languages $\sigma[I]$ and $\tau[I]$, and total polynomial-time and polynomial-space translators $T_{\sigma\to\tau},T_{\tau\to\sigma}$ that agree with the two encodings on valid codes.

[L1] Polynomially related encodings preserve polynomial size bounds, by [[prop-polynomially-related-encodings-preserve-polynomial-size]].

[L2] Instance size and polynomial relatedness are measured by the code lengths $|x|_\sigma$ and $|x|_\tau$, by [[def-instance-size-under-an-encoding]].

[L3] DTIME and DSPACE are the language classes decided within the stated asymptotic bounds, by [[def-dtime-ntime-dspace-and-nspace]].

## Proof

**Proof technique:** direct.

1.1 Assume $L$ is decidable in polynomial time under $\tau$. Let $M_\tau$ be a decider for the code language $\tau[L]$ whose running time is polynomial in the input length. On an arbitrary binary input $z$, first run the assumed polynomial-time decider for the valid-code language $\sigma[I]$. If $z\notin\sigma[I]$, reject. If $z=\sigma(x)$ is valid, compute $T_{\sigma\to\tau}(z)$ and run $M_\tau$ on that translated word. The output is correct because $T_{\sigma\to\tau}(\sigma(x))=\tau(x)$. By [L1] and [L2], the translated length is polynomially bounded in $|z|$, and the validity test and translator are polynomial-time by hypothesis, so the whole composition is polynomial-time. [L1, L2, L3, given, construct]

2.1 The same composition argument works in the opposite direction using the validity test for $\tau[I]$ and the translator $T_{\tau\to\sigma}$. Therefore polynomial-time decidability under $\sigma$ and under $\tau$ are equivalent. [step 1.1, given]

2.2 Replace the time bounds in step 1.1 by space bounds. The validity tests and translators use polynomial space by hypothesis, and [L1] again converts a polynomial bound in one encoding length into a polynomial bound in the other. Hence polynomial-space decidability is preserved in both directions as well. [L1, L2, step 1.1, given]

3.1 Steps 2.1 and 2.2 prove the preservation of polynomial-time and polynomial-space classes described in [L3]. [L3, step 2.1, step 2.2] ∎
