---
id: def-ip-spatial-bv-and-distributional-tv
kind: definition
title: Spatial BV and distributional total variation
status: draft
origin: pipeline
deps:
  - def-distributional-derivative
  - def-l-p-space-as-a-quotient-by-null-functions
  - def-radon-measure-on-an-lch-space
  - def-regular-complex-borel-measure-on-an-lch-space
  - lem-ip-distributional-radon-representation-unique
  - lem-ip-vector-radon-variation-is-radon
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "Gláucio Terra, Introduction to Geometric Measure Theory — Lecture Notes, version 1.6"
      url: "https://www.ime.usp.br/~glaucio/mat6704/textos/GMTLecureNotes.pdf"
    - title: "Piotr Rybka, The space in variational and evolution problems — Lecture Notes in Mathematical Sciences 15"
      url: "https://www.ms.u-tokyo.ac.jp/publication/docs/lecturenotes15-rybka.pdf"
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
---

## Definition

Let $\Omega\subseteq\mathbb R^n$ be open and let $u\in L^1(\Omega;\mathbb R)$, where elements of $L^1$ are almost-everywhere equivalence classes. For each $i\in\{1,\ldots,n\}$, its distributional derivative $D_i u$ acts on $\varphi\in C_c^\infty(\Omega)$ by
$$\langle D_i u,\varphi\rangle:=-\int_\Omega u\,\partial_i\varphi\,dx.$$
The function $u$ is in $BV(\Omega)$ when each $D_i u$ is represented by a finite signed Radon measure and the resulting vector-valued measure $Du=(D_1u,\ldots,D_nu)$ has finite total variation. Here a finite vector-valued Radon measure means that its partition variation is a finite Radon measure. For a Borel set $A\subseteq\Omega$, define
$$|Du|(A):=\sup\left\{\sum_{j=1}^\infty |Du(A_j)|:\ (A_j)_{j\ge1}\text{ is a Borel partition of }A\right\},$$
using the Euclidean norm on each vector value. Define the spatial total variation by $TV(u;\Omega):=|Du|(\Omega)$. A Lebesgue-measurable set $E\subseteq\Omega$ of finite measure has finite perimeter relative to $\Omega$ when $\chi_E\in BV(\Omega)$; its relative perimeter is $P(E;\Omega):=TV(\chi_E;\Omega)$.

## Definition references

[[def-distributional-derivative|The distributional derivative uses the negative transpose sign on compactly supported tests.]]

[[def-l-p-space-as-a-quotient-by-null-functions|An L1 element is an almost-everywhere equivalence class.]]

[[def-radon-measure-on-an-lch-space|Radon measures are finite on compact sets and regular.]]

[[def-regular-complex-borel-measure-on-an-lch-space|For signed or complex measures, regularity is carried by total variation.]]

[[lem-ip-distributional-radon-representation-unique|A finite signed Radon measure representing a distribution on smooth compactly supported tests is unique.]]

[[lem-ip-vector-radon-variation-is-radon|The partition variation of a finite vector of signed Radon measures is a finite positive Radon measure.]]
