---
id: prop-qc-unitary-conjugation-is-channel
kind: proposition
title: "Unitary conjugation is a channel"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-and-complex-inner-product-space, def-adjoint-of-a-linear-map-between-inner-product-spaces, prop-adjoint-algebra, def-qc-quantum-channel, def-qc-unitary-conjugation-channel, thm-qc-kraus-map-completely-positive, thm-qc-trace-preserving-kraus-normalization]
justified_by: []
proof_strategy: direct
dependency_level: 6
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.2.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
---

## Statement

Let $H,K$ be nonzero finite-dimensional complex inner-product spaces and let
$U:H\to K$ be a unitary map. Then $\operatorname{Ad}_U$ is a channel. For
any nonzero finite-dimensional complex inner-product space $L$ and unitary
map $V:K\to L$,
$\operatorname{Ad}_{VU}=\operatorname{Ad}_V\circ\operatorname{Ad}_U$; the
inverse channel to $\operatorname{Ad}_U$ is $\operatorname{Ad}_{U^\dagger}$.

## Facts & Assumptions

**Given:** The finite-dimensional spaces and unitary maps specified in the
Statement.

[F1] [[def-qc-unitary-conjugation-channel]]: $\operatorname{Ad}_U(X)=
UXU^\dagger$, and a unitary map is a surjective linear isometry satisfying
$U^\dagger U=I_H$ and $UU^\dagger=I_K$.

[F2] [[thm-qc-kraus-map-completely-positive]]: every finite Kraus sum is
completely positive.

[F3] [[thm-qc-trace-preserving-kraus-normalization]]: a Kraus map is
trace-preserving exactly when its adjoint-square sum is the input identity.

[F4] [[def-qc-quantum-channel]]: a channel is completely positive and
trace-preserving on all input operators.

[F5] [[prop-adjoint-algebra]]: adjoints reverse compositions.

## Proof


1.1 The single-operator family $(U)$ is a Kraus representation of $\operatorname{Ad}_U$ by [F1]. Hence the map is completely positive by [F2]; its adjoint-square sum is $U^\dagger U=I_H$ by [F1], so it is trace-preserving by [F3]. It is a channel by [F4]. [given, F1, F2, F3, F4]

2.1 The composite $VU$ is surjective and norm-preserving because both $U$ and $V$ are; hence $VU$ is a unitary map by [F1]. For every $X\in\mathcal L(H)$, [F1] and [F5] give $\operatorname{Ad}_V(\operatorname{Ad}_U(X)) =V(UXU^\dagger)V^\dagger =(VU)X(U^\dagger V^\dagger) =(VU)X(VU)^\dagger$. Thus $\operatorname{Ad}_{VU}=\operatorname{Ad}_V\circ\operatorname{Ad}_U$. Also $U^\dagger$ is a unitary map: for $y=Ux$, [F1] gives $U^\dagger y=x$, so $U^\dagger$ preserves norms, and it is onto because $U^\dagger(Ux)=x$. Applying the composition identity to $U$ and $U^\dagger$ in both orders shows that $\operatorname{Ad}_{U^\dagger}$ is a two-sided inverse. It is a channel by step 1.1 applied to $U^\dagger$. [given, F1, F5, step 1.1, algebra] ∎

