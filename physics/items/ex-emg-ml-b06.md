---
id: ex-emg-ml-b06
kind: example
title: Quantitative dilute comparison of actual coupled solutions
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
physical_scope: "Exact coordinate metric and density inequalities in a restricted dilute subfamily of the smooth coupled model. Bounds compare ideal mathematical fields and are not experimental or numerical measurements."
dependency_level: 6
proof_strategy: direct
deps:
  - def-countable-choice
  - pthm-emg-counterpoised-smooth-sphere
dependency_roles:
  def-countable-choice: mathematical-premise
  pthm-emg-counterpoised-smooth-sphere: physical-result
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

Assume $\mathrm{AC}_\omega$ as defined in [[def-countable-choice]]. Fix $b>0$ and $0<\delta\le1/10$, and set $a=\delta b$. With $r^2=\sum_i(x^i)^2$, let $h_0:=b/\sqrt{r^2+b^2}$ and $\rho_{\mathrm{lin}}:=3c^2\delta b^3/[4\pi G_N(r^2+b^2)^{5/2}]$. The exact coupled fields of the A-page theorem satisfy, entrywise in this Cartesian chart,
$$\left|g_{00}+\bigl(1-2\delta h_0\bigr)\right|\le\frac3{100},\qquad \left|g_{ij}-\bigl(1+2\delta h_0\bigr)\delta_{ij}\right|\le\frac1{100},$$
and
$$0\le1-\frac{\rho}{\rho_{\mathrm{lin}}}\le\frac3{10}.$$
These fractions bound discrepancies in an ideal exact model family. They are not measured errors and imply no stability or small-data existence theorem.

## Facts & Assumptions

**Given:** The indexed $\mathrm{AC}_\omega$ premise [A1], $b>0$, $0<\delta\le1/10$, $a=\delta b$, and the exact A-page family.

[F1] Under $\mathrm{AC}_\omega$, [[pthm-emg-counterpoised-smooth-sphere]] establishes that for $a=\delta b$, $0<\delta\le1$, the same exact smooth coupled fields satisfy $|g_{00}+(1-2\delta h_0)|\le3\delta^2$, $|g_{ij}-(1+2\delta h_0)\delta_{ij}|\le\delta^2$, and $0\le1-\rho/\rho_{\mathrm{lin}}\le3\delta$, with the displayed positive density profile.

[A1] [[def-countable-choice]] is the indexed premise that every family $(X_n)_{n\in\mathbb N}$ of nonempty sets has a function $f$ on $\mathbb N$ with $f(n)\in X_n$ for each $n$. It is assumed here because the exact A-page theorem [F1] requires it; the finite substitutions below add no stronger choice principle.

## Verification

1.1 Since $r^2+b^2\ge b^2>0$, the function $h_0=b/\sqrt{r^2+b^2}$ satisfies $0<h_0\le1$. The chosen $a=\delta b$ has $a,b>0$ and $0<\delta\le1$, so the stated profile and positive $\rho_{\mathrm{lin}}$ meet [F1]'s exact spherical hypotheses. [given, A1, F1, algebra]

2.1 Apply [F1]'s exact bounds and use $\delta^2\le1/100$ and $3\delta\le3/10$, which follow from $0<\delta\le1/10$. This gives all three inequalities in the Example. Every comparison concerns exact model fields; no measured error is being reported. [given, A1, F1, step 1.1, algebra] ∎
