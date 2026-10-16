---
id: lem-qa-35-kl-event-separation
kind: lemma
title: "A separating event forces relative entropy"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 1
deps: ["def-qa-35-finite-probability-entropy-and-stochastic-matrices", "lem-qa-35-log-tangent-bound"]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions, sums, bases, and selection sets are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 16 §§16.1 and 16.6, PDF pp.147–153; private/public-coin SMP and equality lower-bound context (§16.1), quantum fingerprint construction and SWAP-test analysis (§16.6)."
---

## Statement

For finite distributions P,Q and a vector X∈[0,1]^m, if P·X≤0.06 and Q·X≥0.94, then D(Q∥P)≥1 (with +∞ allowed).

## Facts & Assumptions

**Given:** Probability vectors $P,Q$ on $[m]$ and $X\in[0,1]^m$ with $PX^{\mathsf T}\le0.06$ and $QX^{\mathsf T}\ge0.94$.

[F1] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $D(p\|q)=\sum_{i:p_i>0}p_i\ln(p_i/q_i)$, with value $+\infty$ if $p_i>0=q_i$ for some $i$.

[F2] [[lem-qa-35-log-tangent-bound]]: For every $t>0$, $\ln t\le t-1$.

## Proof

**Proof technique:** direct.

1.1 If $D(Q\|P)=+\infty$, the result holds. Otherwise form distributions on $[m]\times\{0,1\}$ by $\widetilde Q(i,1)=Q_iX_i$, $\widetilde Q(i,0)=Q_i(1-X_i)$ and the analogous formulas for $\widetilde P$. Expanding the defining finite sum and summing the common two-outcome kernel gives $D(\widetilde Q\|\widetilde P)=D(Q\|P)$. [given, F1, algebra]

2.1 Group the terms of this divergence according to the second coordinate $z$. For each $z$, the group equals $q_z\ln(q_z/p_z)+q_zD(\widetilde Q(\cdot\mid z)\|\widetilde P(\cdot\mid z))$, where $q_z=\widetilde Q(z)$ and $p_z=\widetilde P(z)$; the conditional divergence is nonnegative by applying [F2] to each ratio, and zero-mass cases follow by the stated $+\infty$ convention. Hence $D(Q\|P)\ge D_{\rm Ber}(QX^{\mathsf T}\|PX^{\mathsf T})$. [step 1.1, F1, F2, algebra]

3.1 For $0<q<p<1$, the binary divergence $K(p,q)=p\ln(p/q)+(1-p)\ln((1-p)/(1-q))$ has $\partial_pK=\ln\frac{p(1-q)}{q(1-p)}>0$ and $\partial_qK=\frac{q-p}{q(1-q)}<0$. Therefore the hypotheses imply $K(QX^{\mathsf T},PX^{\mathsf T})\ge K(0.94,0.06)=0.88\ln(47/3)>1$, since $47/3>9>e^2$. Boundary values follow by limits or give infinite divergence. Combining with step 2.1 proves $D(Q\|P)\ge1$. [given, step 2.1, algebra] ∎
