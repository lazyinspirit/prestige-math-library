---
id: cex-based-circle-loops-with-the-same-endpoints-need-not-be-path-homotopic
kind: counterexample
title: "Based circle loops with the same endpoints need not be path-homotopic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-based-loops-and-fundamental-group, def-standard-integer-loops-in-the-circle, cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero, prop-standard-circle-loops-have-their-integer-degrees]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Ch. 1, Section 1.1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 1, Section 5"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement refuted

The claim that any two based circle loops with the same initial and terminal
points are path-homotopic relative to those endpoints is false.

## Facts & Assumptions

**Given:** The standard loops $\omega_0$ and $\omega_1$ in $\mathbb R/\mathbb Z$.

[L1] A based loop at $x_0$ is a path whose values at both endpoints are $x_0$ ([[def-based-loops-and-fundamental-group]]).

[L2] A based circle loop is nullhomotopic exactly when its degree is zero ([[cor-a-circle-loop-is-nullhomotopic-iff-its-degree-is-zero]]).

[L3] $\deg(\omega_n)=n$ for every integer $n$ ([[prop-standard-circle-loops-have-their-integer-degrees]]).

[L4] For every integer $n$, $\omega_n(t)=[nt]$, and $\omega_0$ is constant ([[def-standard-integer-loops-in-the-circle]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L4], $\omega_0(0)=\omega_0(1)=[0]$ and $\omega_1(0)=[0]=[1]=\omega_1(1)$, so both satisfy the two endpoint equalities in [L1]. Their degrees are $0$ and $1$ by [L3]. [L1, L3, L4]

2.1 If $\omega_0$ and $\omega_1$ were path-homotopic relative to the endpoints, then $\omega_1$ would be path-homotopic to the constant loop and hence nullhomotopic. But [L2] and [L3] rule this out because $\deg(\omega_1)=1\ne0$. Thus equal endpoints do not imply path homotopy. [step 1.1, L2, L3, algebra] ∎
