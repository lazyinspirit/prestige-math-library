---
id: lem-positive-c-zero-functionals-have-finite-regular-representing-measures
kind: lemma
title: "Positive C_0(X) functionals have finite regular representing measures"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dependent-choice, def-compact-support-c-c-and-c-zero-on-an-lch-space, def-regular-borel-measure-on-an-lch-space, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, thm-rmk-positive-functional-is-integration-against-its-representing-measure, thm-rmk-uniqueness-among-radon-measures]
proof_strategy: direct
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-01-receipts.jsonl (lem-positive-c-zero-functionals-have-finite-regular-representing-measures). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Chapter 7"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]). Let $X$ be LCH and let
$L:C_0(X;\mathbb R)\to\mathbb R$ be bounded and positive. There is a unique finite regular Borel measure $\mu$ such that
$L(f)=\int f\,d\mu$ for all $f\in C_0(X)$, and $\mu(X)=\|L\|$.

## Facts & Assumptions

**Given:** Dependent Choice and $L$ bounded and positive on $C_0(X)$.

[L1] Positive functionals on $C_c(X)$ have unique Radon representing measures. ([[thm-rmk-positive-functional-is-integration-against-its-representing-measure]], [[thm-rmk-uniqueness-among-radon-measures]])

[L2] Under Dependent Choice, compact sets inside open sets have continuous compactly supported cutoffs. ([[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]])

## Proof

**Proof technique:** direct.

1.1 Restrict $L$ to $C_c(X)$ and apply [L1], obtaining a Radon measure $\mu$. For every compact $K$, [L2] with $U=X$ gives a cutoff $0\le h\le1$ equal to $1$ on $K$. Thus $\mu(K)\le\int h\,d\mu=L(h)\le\|L\|$. Inner regularity on the open set $X$ therefore yields $\mu(X)\le\|L\|<\infty$. This is where Dependent Choice enters. [L1, L2, given]

2.1 Conversely, $|L(f)|\le L(|f|)\le\|f\|_\infty\mu(X)$ first for $f\in C_c(X)$. To see uniform density directly, for $f\in C_0(X)$ and $\epsilon>0$ the set $K=\{|f|\ge\epsilon\}$ is compact; [L2] with $U=X$ gives $h\in C_c(X)$ equal to one on $K$ and between zero and one, so $\|f-hf\|_\infty\le\epsilon$. Since $L$ is bounded and $\mu$ is finite, both sides extend continuously to $C_0(X)$, giving the representation and $\|L\|\le\mu(X)$. Thus equality holds. [L2, step 1.1]

3.1 Let $E$ be Borel and $\epsilon>0$. Open inner regularity of $X$ gives a compact $H\subseteq X$ with $\mu(X\setminus H)<\epsilon$. Outer regularity of $X\setminus E$ gives an open $V\supseteq X\setminus E$ with $\mu(V)<\mu(X\setminus E)+\epsilon$. Then $K:=H\setminus V$ is compact and contained in $E$, while $E\setminus K\subseteq(X\setminus H)\cup(E\cap V)$ and $\mu(E\cap V)=\mu(V)-\mu(X\setminus E)<\epsilon$, using finiteness of $\mu$. Thus $\mu(E)\le\mu(K)+2\epsilon$; letting $\epsilon\downarrow0$ proves compact inner regularity for every Borel $E$. Uniqueness follows from [L1]. [L1, step 1.1, step 2.1] ∎
