---
id: def-vinogradov-mean-value-Jsk
kind: definition
title: "Vinogradov’s Mean Value J_{s,k}(X)"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-exponential-character-e
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture in Vinogradov’s mean value theorem for degrees higher than three"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf"
      locator: "§1, p. 633: the exponential-sum definition and integral representation of J_{s,k}(X)"
    - title: "N. Assing, The Circle Method and Waring’s Problem (2022 lecture notes)"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§8.2, printed p. 77: the sum f_k(α,N) and its 2s-th mean value"
---

## Definition

For positive integers $s,k$ and a real $X\ge1$, put $\mathcal N_X=\{n\in\mathbb Z:1\le n\le X\}$. For $\alpha=(\alpha_1,\ldots,\alpha_k)\in[0,1]^k$ define
$$f_{k,X}(\alpha)=\sum_{n\in\mathcal N_X}e\!\left(\sum_{j=1}^k\alpha_jn^j\right),$$
where $e(t)=\exp(2\pi i t)$. The Vinogradov mean value is
$$J_{s,k}(X)=\int_{[0,1]^k}|f_{k,X}(\alpha)|^{2s}\,d\alpha,$$
with the ordinary Riemann integral on the cube.

## Definition references

[[def-exponential-character-e]]

[Bourgain–Demeter–Guth, §1](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

[Assing, §8.2](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)
