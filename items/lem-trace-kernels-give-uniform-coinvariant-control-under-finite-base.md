---
id: lem-trace-kernels-give-uniform-coinvariant-control-under-finite-base
kind: lemma
title: "Uniform coinvariant control from a finite base quotient"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Romyar Sharifi, Iwasawa Theory"
      url: "https://www.math.ucla.edu/~sharifi/iwasawa.pdf"
      locator: "Lemma 3.2.13, pp. 81–82; the elementary finite-base control deduction is proved below, with its finite-base hypothesis explicit."
---

## Statement

Let $X$ be an abelian group with an automorphism $\gamma$, let $p$ be a prime and $m\ge0$. For $n\ge m$ put $\omega_n=\gamma^{p^n}-1$ and $\nu_{n,m}=\sum_{j=0}^{p^{n-m}-1}\gamma^{jp^m}$. Let $Y_m\le X$ be $\gamma$-stable, contain $\omega_mX$, and have finite index, and suppose that $X/\omega_mX$ is finite. Define $Y_n=\nu_{n,m}Y_m$ and $A_n=X/Y_n$. Then the natural map
$$X/\omega_nX\longrightarrow A_n$$
is surjective and its kernel has order at most $|Y_m/\omega_mX|$, independently of $n$. This lemma assumes the finite base coinvariant quotient; it does not assert that number-field Iwasawa modules satisfy that assumption.

## Facts & Assumptions

**Given:** The groups, automorphism, finite-index subgroup and finite quotient in the Statement.

## Proof

1.1 The geometric-series identity gives $\omega_n=\nu_{n,m}\omega_m=\omega_m\nu_{n,m}$. As $\omega_mX\subseteq Y_m$, this implies $\omega_nX\subseteq\nu_{n,m}Y_m=Y_n$, so the displayed quotient map is well defined and surjective. Its kernel is $Y_n/\omega_nX$. [given, algebra]

2.1 Multiplication by $\nu_{n,m}$ induces a surjection $Y_m/\omega_mX\to Y_n/\omega_nX$, because it maps $Y_m$ onto $Y_n$ and $\omega_mX$ onto $\omega_nX$. The source is a subgroup of the finite group $X/\omega_mX$, so the kernel order is bounded by its order independently of $n$. If the groups $A_n$ are finite for separate reasons, the same exact sequence then makes each $X/\omega_nX$ finite. [step 1.1, given, algebra] ∎
