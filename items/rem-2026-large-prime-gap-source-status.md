---
id: rem-2026-large-prime-gap-source-status
kind: remark
title: "Dated 2026 large-prime-gap claims and verification boundaries"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 25
deps:
  - def-prime-gap-functions
  - def-iterated-logarithms-and-prime-gap-scale
  - thm-fgmt-quantitative-large-prime-gap-bound
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "A Tilted Residue-Class Construction for Long Prime-Free Intervals"
      url: "https://github.com/DottedCalculator/ai-math/blob/main/Erdos_4_GPT_5.6_Sol.pdf"
    - title: "VibeMathed status record for the tilted residue-class construction"
      url: "https://vibemathed.com/problem/tilted-residue-class-construction-for-long-prime-free-intervals"
    - title: "Lean formalization of the tilted residue-class construction"
      url: "https://github.com/plby/lean-proofs/blob/main/src/latest/ErdosProblems/Erdos4Tilted.lean"
    - title: "OpenAI, Improved Long Gaps Between Primes"
      url: "https://cdn.openai.com/pdf/51126fac-1b68-4128-9666-c908bcc16033/long_gaps.pdf"
    - title: "OpenAI LongGapsBetweenPrimes Lean repository"
      url: "https://github.com/openai/LongGapsBetweenPrimes"
    - title: "VibeMathed status record for the improved maximal prime-gap lower bound"
      url: "https://vibemathed.com/problem/improved-maximal-prime-gap-lower-bound"
    - title: "OpenAI, Positive lower density of large prime gaps"
      url: "https://github.com/openai/math/blob/adc7f1241/preprints/Positive-lower-density-of-large-prime-gaps-September-25-2026/main.pdf"
---

## Remark

Let $G_+(X)=\max_{p_{n+1}\le X}(p_{n+1}-p_n)$ be the upper-prime cutoff used by the cited large-gap papers. The library’s $G(X)$ uses the smaller-prime cutoff, so $G(X)\ge G_+(X)$. As checked on 26 October 2026, the 2018 Ford–Green–Konyagin–Maynard–Tao result is the published baseline $G_+(X)\gg\log X\,\log_2X\,\log_4X/\log_3X$ for all sufficiently large $X$. Several 2026 manuscripts and formalization reports make later claims; their publication and verification records must be read separately from the mathematical Statements in this page.

The 25 August tilted residue-class manuscript claims $G_+(T)\gg\log T\,\log_2T/\log_4T$, together with a covering length $Y(X)\gg X\log X/\log_3X$. The current VibeMathed record labels this claim independently expert-verified and reports that Ben Green became “more or less convinced” after discussion with Terence Tao and James Maynard; it also reports a Lean formalization. That record says it did not build the Lean development or audit the informal-to-formal correspondence, and it records no journal publication. The status is a community-curated report, not an acceptance ruling by this library.

The 3 September OpenAI manuscript claims $G_+(X)\gg\log X\,(\log_2X)^2\,\log_4X/(\log_3X)^2$. The official repository describes a Lean formalization and gives build and comparator commands. VibeMathed later reported a clean-checkout build of a repository commit and kernel replay; that is a third-party report, and this authoring batch did not reproduce the build or independently audit the proof. The claim is stronger than the August manuscript and the published 2018 bound, but remains a reported preprint/formalization status here.

The 25 September OpenAI manuscript concerns a different statistic: for every fixed $C>0$, it claims there are $c(C)>0$ and $N_0(C)$ such that, for every $N\ge N_0(C)$, at least $c(C)N$ of the indices $n\le N$ satisfy $p_{n+1}-p_n>C\log p_n$. This is a frequency statement and does not replace a maximal-gap lower bound. Its proof and companion formalization were not independently replayed for this batch.

These records describe what their sources claim and what external status pages report. They are not logical suppliers for the classical or published theorem items, and no claim of independent approval is made.

## Remark references

[[def-prime-gap-functions]]

[[def-iterated-logarithms-and-prime-gap-scale]]

[[thm-fgmt-quantitative-large-prime-gap-bound]]

[25 August 2026 tilted residue-class manuscript](https://github.com/DottedCalculator/ai-math/blob/main/Erdos_4_GPT_5.6_Sol.pdf)

[VibeMathed record for the tilted construction](https://vibemathed.com/problem/tilted-residue-class-construction-for-long-prime-free-intervals)

[Lean source for the tilted construction](https://github.com/plby/lean-proofs/blob/main/src/latest/ErdosProblems/Erdos4Tilted.lean)

[3 September 2026 OpenAI manuscript](https://cdn.openai.com/pdf/51126fac-1b68-4128-9666-c908bcc16033/long_gaps.pdf)

[OpenAI LongGapsBetweenPrimes repository](https://github.com/openai/LongGapsBetweenPrimes)

[VibeMathed record for the improved maximal-gap bound](https://vibemathed.com/problem/improved-maximal-prime-gap-lower-bound)

[25 September 2026 OpenAI positive-density manuscript](https://github.com/openai/math/blob/adc7f1241/preprints/Positive-lower-density-of-large-prime-gaps-September-25-2026/main.pdf)
