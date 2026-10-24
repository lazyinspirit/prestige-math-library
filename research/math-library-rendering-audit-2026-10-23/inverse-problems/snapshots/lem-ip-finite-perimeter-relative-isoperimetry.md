---
id: lem-ip-finite-perimeter-relative-isoperimetry
kind: lemma
title: Relative isoperimetric inequality on bounded connected Lipschitz domains
status: published
origin: pipeline
deps:
  - def-countable-choice
  - def-ip-spatial-bv-and-distributional-tv
  - lem-ip-bv-compactness-lower-semicontinuity
  - lem-ip-bv-extension-and-translation
  - lem-ip-bv-sobolev-inequality
  - lem-ip-bv-zero-gradient-constant-on-connected-domain
  - thm-lebesgue-measure-is-a-radon-measure-on-rn
  - thm-lebesgue-measure-of-a-box-of-every-kind
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
    - title: "Piotr Rybka, The space in variational and evolution problems — Lecture Notes in Mathematical Sciences 15"
      url: "https://www.ms.u-tokyo.ac.jp/publication/docs/lecturenotes15-rybka.pdf"
proof_strategy: direct
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Assume Countable Choice, let $n\ge2$, and let $\Omega\subseteq\mathbb R^n$ be a bounded connected Lipschitz domain (a bounded open set with a finite Lipschitz graph cover of its boundary, with the domain on one side of each graph, and not separable into two disjoint nonempty relatively open subsets). There is a constant $C_\Omega<\infty$ such that every measurable $E\subseteq\Omega$ with $\chi_E\in BV(\Omega)$ satisfies $$\min\{|E|,|\Omega\setminus E|\}^{(n-1)/n}\le C_\Omega P(E;\Omega).$$

## Statement references

[[def-ip-spatial-bv-and-distributional-tv|Finite perimeter relative to an open set.]]

[[lem-ip-bv-sobolev-inequality|The full-space BV Sobolev inequality.]]

## Facts & Assumptions

**Given:** Countable Choice, $n\ge2$, a bounded connected Lipschitz domain $\Omega$, and a finite-perimeter set $E\subseteq\Omega$.

[F1] Zero extension has a BV bound controlled by interior variation and the $L^1$ norm. ([[lem-ip-bv-extension-and-translation]])

[F2] Under Countable Choice, a bounded BV sequence on $\Omega$ has an $L^1$-convergent subsequence with a BV limit and lower semicontinuity. ([[lem-ip-bv-compactness-lower-semicontinuity]])

[F3] Zero distributional gradient on a connected open domain forces an almost-everywhere constant under Countable Choice. ([[lem-ip-bv-zero-gradient-constant-on-connected-domain]])

[F4] The full-space BV Sobolev inequality holds under Countable Choice. ([[lem-ip-bv-sobolev-inequality]])

[F5] Under Countable Choice, Lebesgue measure is finite on bounded sets. Every nonempty open subset of $\mathbb R^n$ contains an open box with positive side lengths, whose measure is their positive product; hence bounded nonempty openness gives $0<|\Omega|<\infty$. ([[thm-lebesgue-measure-is-a-radon-measure-on-rn]], [[thm-lebesgue-measure-of-a-box-of-every-kind]])

## Proof

**Given:** The hypotheses in the Statement. Put $a=(n-1)/n$.

1.1 The empty domain gives the inequality with both sides zero, so assume $\Omega\ne\varnothing$. Its openness and nonemptiness give an open box with positive side lengths contained in $\Omega$, and its boundedness puts $\Omega$ inside a bounded box; [F5] therefore gives $0<|\Omega|<\infty$. For $m=\min(|E|,|\Omega\setminus E|)$, take $A$ to be the smaller side. Its indicator is BV: the distributional derivative of the constant function $1$ in $\Omega$ is zero, so $D\chi_{\Omega\setminus E}=-D\chi_E$ and both sides have the same relative perimeter $P$. Its zero extension has $L^{n/(n-1)}$ norm $m^a$. By [F1] and [F4], $m^a\le C(m+P)$ for a fixed $C\ge1$ depending only on $\Omega$. If $0<m\le\delta=(2C)^{-n}$, then $Cm\le m^a/2$, so $m^a\le2CP$. For $m=0$ the conclusion is immediate. [F1, F4, F5, given, construct, algebra]

2.1 Among sets with $\delta\le|E|\le|\Omega|-\delta$, the relative perimeters have a positive lower bound, unless that family is empty. Otherwise, if the infimum were zero, Countable Choice would select a sequence $E_j$ in this family with $P(E_j;\Omega)<1/j$. Its indicators are uniformly BV-bounded. By [F2], a subsequence converges in $L^1(\Omega)$ to $v\in BV(\Omega)$ with $TV(v;\Omega)=0$. The distance from $v(x)$ to $\{0,1\}$ is bounded by $|v(x)-\chi_{E_j}(x)|$ for every $j$, so its integral is zero by $L^1$ convergence; hence $v$ is an indicator almost everywhere. Its volume lies in $[\delta,|\Omega|-\delta]$ by $L^1$ convergence. But its zero variation makes every coordinate distributional derivative zero, so [F3] makes $v$ constant almost everywhere. An indicator constant must be zero or one, contradicting the volume bounds. This proves a positive lower bound $b_\Omega$ whenever the family is nonempty. [F2, F3, step 1.1, choose, algebra]

3.1 In the remaining case $m\ge\delta$, both side volumes meet the bounds in step 2.1, so $P\ge b_\Omega$ and $m^a\le(|\Omega|/2)^a\le(|\Omega|/2)^ab_\Omega^{-1}P$. Combine this constant with $2C$ from step 1.1. If the intermediate-volume family is empty, step 1.1 already covers every set. Thus a finite domain constant gives the asserted inequality for every finite-perimeter $E$. [step 1.1, step 2.1, algebra] ∎ 
