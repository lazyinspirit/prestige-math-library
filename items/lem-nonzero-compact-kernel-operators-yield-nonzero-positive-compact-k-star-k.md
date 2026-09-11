---
id: "lem-nonzero-compact-kernel-operators-yield-nonzero-positive-compact-k-star-k"
kind: "lemma"
title: "Nonzero compact kernel operators yield nonzero positive compact k star k"
deps: ["lem-conjugate-transpose-kernels-give-adjoints", "def-l-two-operator-conventions-for-weak-mixing", "thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Axler Example 10.5; 10.69(b) p.313 and 10.96 p.326; direct K-star-K argument
      url: https://measure.axler.net/MIRA.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. For a nonzero compact kernel operator $K$ with $K\mathbf1=K^*\mathbf1=0$, $S=K^*K$ on $H_0$ is bounded, compact, self-adjoint, positive and nonzero. If $K$ and $K^*$ commute with a Koopman isometry $U$, then $SU=US$ on $H_0$.

## Facts & Assumptions

[F1] Kernel adjoints are bounded, satisfy the pairing identity, and have double adjoint $K$ [[lem-conjugate-transpose-kernels-give-adjoints]].

[F2] Positivity, self-adjointness and compactness use the local operator conventions [[def-l-two-operator-conventions-for-weak-mixing]].

[F3] The complex pairing is positive definite [[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]].

[F4] Assume AC [[def-axiom-of-choice]].

## Proof

**Given:** $K$ and its two zero images of $\mathbf1$, under AC.

1.1 If $h\in H_0$, the adjoint identities and the two zero images give $\langle Kh,\mathbf1\rangle=\langle h,K^*\mathbf1\rangle=0$ and $\langle K^*h,\mathbf1\rangle=\langle h,K\mathbf1\rangle=0$. Thus both operators preserve $H_0$. Their restrictions include a nonzero K: choose f with $Kf\ne0$ and write $f=(\int f)\mathbf1+f_0$; then $f_0\in H_0$ and $Kf_0=Kf\ne0$. Thus $S$ is a well-defined bounded endomorphism of $H_0$, with $\|S\|\le\|K^*\|\|K\|$. AC supplies the inherited kernel results. [F1, F3, F4]

2.1 For $f,g\in H_0$, the two adjoint identities give $\langle Sf,g\rangle=\langle Kf,Kg\rangle=\langle f,Sg\rangle$. Also $\langle Sf,f\rangle=\|Kf\|^2\ge0$. Therefore $S$ is self-adjoint and positive. For the $f_0$ in step 1.1, this quantity is strictly positive; hence $Sf_0\ne0$ and $S\ne0$. [F1, F2, F3, step 1.1]

3.1 For any bounded sequence in $H_0$, compactness of $K$ gives a subsequence of its images convergent in $L^2$. The limit lies in $H_0$ because it is closed. Applying the bounded, hence continuous, operator $K^*$ shows the corresponding $S$ images converge in $H_0$. This is compactness of $S$. A Koopman operator fixes $\mathbf1$; since the isometry U preserves the pairing, $\langle Uh,\mathbf1\rangle=\langle Uh,U\mathbf1\rangle=\langle h,\mathbf1\rangle$, so U preserves $H_0$. If both factors commute with U, then $SU=K^*KU=K^*UK=UK^*K=US$ on $H_0$. No eigenvalue of K itself has been asserted. [F1, F2, step 2.1] ∎
