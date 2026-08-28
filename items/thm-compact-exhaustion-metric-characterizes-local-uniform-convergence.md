---
id: thm-compact-exhaustion-metric-characterizes-local-uniform-convergence
kind: theorem
title: "The exhaustion metric induces exactly the topology of locally uniform convergence"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-compact-exhaustion-metric-on-function-space, rem-local-uniform-convergence-dictionary-on-plane-domains, lem-canonical-compact-exhaustion-of-a-plane-domain]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Matthias Weber, Complex Analysis, Ch. 5 §§5.1-5.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 2 §5.2 and Ch. 8 §3.2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, Ch. 2"
      url: "https://www.axler.net/HFT.pdf"
pipeline_run: frontier-22
---

## Statement

Let $(K_n)$ be the canonical compact exhaustion of a plane domain $\Omega$, and
let $(f_m)$ be a sequence of functions $\Omega\to\mathbb C$. Then
$$f_m\to f\text{ in }d_K\quad\Longleftrightarrow\quad f_m\to f\text{ locally uniformly on }\Omega.$$
Consequently the exhaustion metric induces exactly the topology of locally
uniform convergence.

## Facts & Assumptions

**Given:** The canonical exhaustion $(K_n)$, the exhaustion metric $d_K$, and a sequence $f_m:\Omega\to\mathbb C$.

[L1] The sets $K_n$ are compact, nested inside successive interiors, and exhaust $\Omega$ ([[lem-canonical-compact-exhaustion-of-a-plane-domain]]).

[L2] On a plane domain, local uniform convergence is the same as uniform convergence on every compact subset ([[rem-local-uniform-convergence-dictionary-on-plane-domains]]).

## Proof

**Proof technique:** direct.

1.1 If $d_K(f_m,f)\to0$, then each summand $2^{-n}\min(1,s_n(f_m,f))$ tends to $0$, so $f_m\to f$ uniformly on every $K_n$. [given, algebra]

2.1 Any compact set $L\subseteq\Omega$ is contained in some $K_N$ because the interiors of the $K_n$ cover $\Omega$ by [L1]. Step 1.1 then gives uniform convergence on every compact $L$, and [L2] makes the convergence locally uniform. [L1, L2, given]

3.1 Conversely, if $f_m\to f$ locally uniformly, then [L2] gives uniform convergence on every $K_n$, including the empty stages with zero supremum. A finite-head plus geometric-tail estimate then gives $d_K(f_m,f)\to0$. [L2, given, algebra] ∎
