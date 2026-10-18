---
id: thm-it-dmc-uniform-quadratic-capacity-decay
kind: theorem
title: Finite-DMC information deficit controls squared distance to the CAID set
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [lem-it-dmc-capacity-output-law-is-unique, lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound, lem-discrete-memoryless-channel-capacity-is-attained, def-discrete-memoryless-channel-information-capacity, def-it-finite-mutual-information, def-finite-kullback-leibler-divergence, thm-it-finite-kl-nonnegative-equality, lem-it-finite-pinsker-euclidean-bound, lem-it-finite-affine-slice-error-bound]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the proof uses finite KL identities, finite Pinsker, and a finite-dimensional affine-slice bound.
provenance:
  statement: ai-altered
  proof: ai-generated
proof_obligations:
  - Derive the exact KL gap identity and identify the CAID set as a finite affine slice.
  - Combine a positive slack on inactive input letters, Pinsker, and the proved affine-slice error bound.
  - Treat the whole-simplex CAID case and an empty inactive-input block.
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 22 §22.1"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 22, §22.1; capacity-achieving output divergence and finite-DMC information density.
    - title: Yury Polyanskiy, H. Vincent Poor, and Sergio Verdú, Channel Coding Rate in the Finite Blocklength Regime
      url: https://people.lids.mit.edu/yp/homepage/data/finite_block.pdf
      locator: Theorem 48, PDF p. 50; constant-composition converse context. The quadratic capacity gap is proved locally here by the finite KL/Pinsker/affine-slice argument.
---

## Statement

Let $W$ be a finite DMC, $C=C(W)$, and $\Pi=\{P:I(P,W)=C\}$. There is $\alpha>0$, depending on $W$, such that every input law $P$ satisfies
$$C-I(P,W)\ge\alpha\,\operatorname{dist}_2(P,\Pi)^2.$$

## Facts & Assumptions

**Given:** A finite DMC $W$, its capacity $C$, and its nonempty CAID set $\Pi$.

[F1] [[lem-it-dmc-capacity-output-law-is-unique]]: every $P^*\in\Pi$ induces one common output law $Q^*$.

[F2] [[lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound]]: every row $W_x$ is supported on $Q^*$ and $d_x:=D(W_x\|Q^*)\le C$.

[F3] [[def-it-finite-mutual-information]] and [[def-finite-kullback-leibler-divergence]]: finite mutual information and KL are the support-aware finite sums in the direction $D(P\|Q)$.

[F4] [[thm-it-finite-kl-nonnegative-equality]]: finite KL is nonnegative and equals zero exactly when its probability vectors agree.

[F5] [[lem-it-finite-pinsker-euclidean-bound]]: $D(R\|Q)\ge\tfrac12\|R-Q\|_2^2$ for finite probability vectors.

[F6] [[lem-it-finite-affine-slice-error-bound]]: for a nonempty affine slice $F$ of a finite simplex, $\operatorname{dist}_2(P,F)\le H\|MP-b\|_2$ for its defining linear map and target.

## Proof
1.1 Fix a CAID and let $Q^*$ be its output. For every input law $P$, expanding the finite sums using [F2]–[F3] gives $C-I(P,W)=\sum_xP(x)(C-d_x)+D(PW\|Q^*).$ Indeed, $\sum_xP(x)d_x-I(P,W)=\sum_y(PW)(y)\ln[(PW)(y)/Q^*(y)]$. [F2, F3, given, algebra]

2.1 Put $E=\{x:d_x=C\}$. By [F2] and [F4], the right side of step 1.1 vanishes exactly when $P(x)=0$ for $x\notin E$ and $PW=Q^*$. Thus $\Pi=\{P\in\Delta_{\mathcal X}:P|_{E^c}=0,\ PW=Q^*\}$, a nonempty affine slice of the input simplex. [F1, F2, F4, step 1.1, algebra]

2.2 If $E^c\ne\varnothing$, let $\eta=\min_{x\notin E}(C-d_x)>0$. The first term in step 1.1 is at least $\eta\|P|_{E^c}\|_2^2$, since $P(x)\in[0,1]$ and $\sum_{E^c}P(x)\ge\|P|_{E^c}\|_2\ge\|P|_{E^c}\|_2^2$. By [F5], the second term is at least $\tfrac12\|PW-Q^*\|_2^2$. Hence the gap is at least $a$ times the squared norm of the concatenated residual $(P|_{E^c},PW-Q^*)$, with $a=\min(\eta,1/2)$. If $E^c=\varnothing$, omit that block and take $a=1/2$. [F2, F5, step 1.1, given, algebra]

3.1 Apply [F6] to the slice in step 2.1 with linear map $P\mapsto(P|_{E^c},PW)$ and target $(0,Q^*)$, omitting the first component when $E^c=\varnothing$. For its finite constant $H$, step 2.2 gives $C-I(P,W)\ge aH^{-2}\operatorname{dist}_2(P,\Pi)^2$. If $\Pi$ is the whole simplex, the distance is identically zero and any positive $\alpha$ works; otherwise take $\alpha=aH^{-2}>0$. [F6, step 2.1, step 2.2, cases, algebra] ∎
