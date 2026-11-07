---
id: def-distance-to-nearest-integer
kind: definition
title: "Distance to the nearest integer"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
sources:
  references:
    - title: "Chow–Technau, Dispersion and Littlewood's conjecture"
      url: "https://arxiv.org/pdf/2307.14871v1"
      locator: "§1, printed p. 1: distance-to-nearest-integer convention"
---

## Definition

For $x\in\mathbb R$, define
$$\|x\|_{\mathbb R/\mathbb Z}:=\min_{k\in\mathbb Z}|x-k|.$$
When no ambiguity is possible, write this as $\|x\|$. The minimum exists because every real number lies within $1/2$ of an integer; the definition does not select a unique nearest integer.

## Definition references

[Chow–Technau, §1, printed p. 1](https://arxiv.org/pdf/2307.14871v1) — the distance-to-nearest-integer convention.
