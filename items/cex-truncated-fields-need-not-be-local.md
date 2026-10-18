---
id: cex-truncated-fields-need-not-be-local
kind: counterexample
title: Lower truncation alone does not imply locality
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-formal-distribution-on-a-vector-space]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement refuted

Every pair of lower-truncated fields on a complex vector space is mutually local.

## Facts & Assumptions

**Given:** The field and locality conventions of [[def-formal-distribution-on-a-vector-space]].

[F1] [[def-formal-distribution-on-a-vector-space]]: $A(z)=\sum_nA_{(n)}z^{-n-1}$ is a field if for every vector $v$, $A_{(n)}v=0$ for all sufficiently large $n$; locality requires $(z-w)^N[A(z),B(w)]=0$ for some $N\ge0$.

## Proof

1.1 Let $V=\mathbb C^2$ with basis $v_1,v_2$. Define constant fields $A(z)=E_{12}$ and $B(w)=E_{21}$, where $E_{12}v_2=v_1$, $E_{12}v_1=0$, $E_{21}v_1=v_2$, and $E_{21}v_2=0$. Their only nonzero modes are $A_{(-1)}=E_{12}$ and $B_{(-1)}=E_{21}$, so both are fields by [F1]. [F1, given, construct]

2.1 Their commutator is $[A(z),B(w)]=E_{11}-E_{22}\ne0$. For every integer $N\ge0$, $(z-w)^N(E_{11}-E_{22})$ has nonzero coefficient $z^N(E_{11}-E_{22})$, including $N=0$. Thus no locality exponent exists, although both fields are lower-truncated; the refuted implication fails. [F1, step 1.1, algebra] ∎
