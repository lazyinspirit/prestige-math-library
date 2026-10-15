---
id: thm-tdmath-reaction-offset-feasibility
kind: theorem
title: Feasibility of finite reaction offsets
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-complete-ordered-field, thm-tdmath-finite-inequality-alternative, lem-finite-sum-reindexing-and-fubini]
dependency_roles:
  def-complete-ordered-field: mathematical-premise
  thm-tdmath-finite-inequality-alternative: mathematical-premise
  lem-finite-sum-reindexing-and-fubini: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §VI.B"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Stanford EE464, Fourier–Motzkin Elimination lecture notes"
      url: "https://lall.stanford.edu/ee464/lectures/fourier_motzkin.pdf?download=1"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

Let $A$ be a finite set of channel labels and $r\in\mathbb N$. For each $a\in A$, take $\nu_a\in\mathbb R^r$ and $d_a\in\mathbb R$ as independently specified real input data; this theorem does not define channel input/output compounds, a calibration map, or a map producing $d_a$. In an application, separate model data may specify vectors $\nu_a^{\mathrm{in}},\nu_a^{\mathrm{out}}\in\mathbb R^r$ and set $\nu_a:=\nu_a^{\mathrm{out}}-\nu_a^{\mathrm{in}}$, while a separately supplied real number $\Delta\sigma_a$ may be designated as a channel's calibrated entropy change and $d_a\le\Delta\sigma_a$ as its lower bound. These are additional application premises, not conclusions or inputs derived here. Use the dot product and coordinatewise finite vector sums defined in [[thm-tdmath-finite-inequality-alternative]]: for $u,v\in\mathbb R^r$, $u\cdot v:=\sum_{k<r}u(k)v(k)$, and $(\sum_{a\in A}\lambda_a\nu_a)(k):=\sum_{a\in A}\lambda_a\nu_a(k)$. A multiplier $\lambda\in\mathbb R^A$ is a function $A\to\mathbb R$. There exists an offset vector $b\in\mathbb R^r$ satisfying

$$b\cdot\nu_a+d_a\ge0\qquad(a\in A)$$

if and only if every $\lambda\in\mathbb R^A$ with $\lambda_a\ge0$ and $\sum_{a\in A}\lambda_a\nu_a=0$ satisfies $\sum_{a\in A}\lambda_ad_a\ge0$. If a separate model supplies for each $a$ a real number $\Delta\sigma_a$, designated as its transition entropy change, and assumes $\Delta\sigma_a\ge d_a$, such a vector guarantees $\Delta\sigma_a+b\cdot\nu_a\ge0$ for those channels. The criterion is exact for the finite lower-bound inequalities; it does not claim necessity for actual transitions when $d_a$ is only a loose bound.

## Facts & Assumptions

[A1] The finite vectors $\nu_a$ and reals $d_a$ are independent input data. No relation between channel input/output compounds, common-meter values, calibrated changes, and $d_a$ is assumed or constructed here; the transition conclusion is conditional on separate real values $\Delta\sigma_a$ satisfying $\Delta\sigma_a\ge d_a$.

[F1] [[thm-tdmath-finite-inequality-alternative]]: the stated dot product is a finite coordinate sum and vector sums are coordinatewise; the finite row system $c_j\cdot b\ge h_j$ is feasible exactly when every nonnegative zero-left-side multiplier has nonpositive combined right side.

[F2] [[lem-finite-sum-reindexing-and-fubini]]: every finite row-label set admits an enumeration by a natural-number index set; reindexing by a bijection preserves the finite vector and scalar sums.

## Proof

**Given:** [A1], [F1], and [F2].

1.1 By [F2], choose a natural number $m$ and a bijection $\phi:m\to A$; when $A=\varnothing$, take $m=0$ and the empty bijection. Reindex the data as $c_j:=\nu_{\phi(j)}$ and $h_j:=-d_{\phi(j)}$ for $j<m$. The row system $c_j\cdot b\ge h_j$ is exactly the required offset system. By [F1], it is feasible exactly when every nonnegative multiplier family $\mu\in\mathbb R^m$ with $\sum_{j<m}\mu_jc_j=0$ has $\sum_{j<m}\mu_jh_j\le0$. The bijection transports such a family to $\lambda_a:=\mu_{\phi^{-1}(a)}$ on $A$, preserving nonnegativity and both finite sums by [F2]. Hence this condition is precisely $\sum_{a\in A}\lambda_a\nu_a=0\Rightarrow\sum_{a\in A}\lambda_ad_a\ge0$. For $A=\varnothing$, $b=0$ is feasible and the multiplier condition is vacuous. If $r=0$ and $A$ is nonempty, every $\nu_a=0$; testing the coordinate multiplier for each channel makes the criterion equivalent to $d_a\ge0$ for every $a$, and then the unique empty vector $b$ satisfies all rows. [A1, F1, F2, algebra]

2.1 For any channel with actual change $\Delta\sigma_a\ge d_a$, add $b\cdot\nu_a$ to both sides of that bound and use the solved row inequality $b\cdot\nu_a\ge-d_a$. Then $\Delta\sigma_a+b\cdot\nu_a\ge d_a+b\cdot\nu_a\ge0$. This is a sufficient monotonicity conclusion for the stated channels. [A1, step 1.1, algebra] ∎

## Remarks

For $r=0$ and nonempty $A$, the criterion reduces to $d_a\ge0$ for every channel. Strict increase, infinitely many channels, and lower bounds equal to actual changes are separate conditions and are not inferred here.

