---
id: thm-short-exact-two-open-singular-chain-mayer-vietoris-sequence
kind: theorem
title: "Short exact chain Mayer–Vietoris sequence"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-two-open-cover-small-chains-are-the-sum-of-the-two-singular-subcomplexes]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §2.2"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
---

## Statement

For $X=U\cup V$ open, there is a short exact sequence
$$0\to C_\bullet(U\cap V;G)\xrightarrow{i}(C_\bullet(U;G)\oplus C_\bullet(V;G))\xrightarrow{j}C_\bullet^{\{U,V\}}(X;G)\to0,$$
where $i(c)=(c,-c)$ and $j(u,v)=u+v$.

## Facts & Assumptions

**Given:** An open cover $X=U\cup V$.

## Proof

**Proof technique:** direct.

1.1 Both $i$ and $j$ commute with boundaries; $i$ is injective and $j$ is surjective by the sum description of cover-small chains. [given, construct]

2.1 If $u+v=0$, then $u=-v$ is a chain in both $U$ and $V$, so $(u,v)=i(u)$. Thus the kernel of $j$ is the image of $i$. [step 1.1, algebra] ∎
