---
id: lem-it-qudit-erasure-channel-complement-and-degradability
kind: lemma
title: Complement and degradation maps of the erasure channel
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-it-qudit-erasure-channel
  - def-it-degradable-channel
  - lem-it-quantum-coherent-information-complement-identity
  - thm-it-qudit-erasure-channel-is-cptp
  - thm-qc-kraus-map-completely-positive
  - thm-qc-trace-preserving-kraus-normalization
  - def-qc-quantum-channel
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all Kraus families are finite."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §8.3.2 and §8.3.3"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, §24.7"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

For $\mathcal E_{d,\epsilon}$, choose the Stinespring isometry in [[thm-it-qudit-erasure-channel-is-cptp]], with environment $E=A\oplus\mathbb C e_E$. Its complement is

$$\mathcal E^c_{d,\epsilon}(X)=\epsilon J_EXJ_E^*+(1-\epsilon)\operatorname{tr}(X)|e_E\rangle\langle e_E|.$$

The channel is degradable for $0\le\epsilon\le\tfrac12$ and antidegradable for $\tfrac12\le\epsilon\le1$.

## Facts & Assumptions

**Given:** An input dimension $d\ge1$ and erasure probability $\epsilon\in[0,1]$.

[F1] [[def-it-qudit-erasure-channel]]: the receiver output space is the orthogonal sum of the data space and its erasure flag, and the data map is the isometric inclusion $J_B$.

[F2] [[def-it-degradable-channel]]: degradability means that a channel from $B$ to $E$ simulates the complement, and antidegradability means a channel from $E$ to $B$ simulates the original channel.

[F3] [[thm-it-qudit-erasure-channel-is-cptp]]: $\mathcal E_{d,\epsilon}$ is a finite-dimensional channel.

[F4] [[thm-qc-kraus-map-completely-positive]]: every finite Kraus sum is completely positive.

[F5] [[thm-qc-trace-preserving-kraus-normalization]]: a finite Kraus sum is trace-preserving when the sum of $K_j^*K_j$ is the identity.

[F6] [[def-qc-quantum-channel]]: a channel is complex-linear, completely positive, and trace-preserving.

## Proof

1.1 Use the isometry $V_\epsilon x=\sqrt{1-\epsilon}J_Bx\otimes e_E+\sqrt\epsilon e\otimes J_Ex$ from the proof of [[thm-it-qudit-erasure-channel-is-cptp]]. Tracing the first factor $B$ leaves the data block $\epsilon J_EXJ_E^*$ and the flag block $(1-\epsilon)\operatorname{tr}(X)|e_E\rangle\langle e_E|$; the cross terms vanish because the data and erasure subspaces are orthogonal. The data block precedes the flag block because $E=A\oplus\mathbb C e_E$. [F1, F3, construct, algebra]

2.1 Suppose $0\le\epsilon\le\tfrac12$ and set $\alpha=\epsilon/(1-\epsilon)\in[0,1]$. Choose an orthonormal basis $(u_j)_{j<d}$ of the data summand of $B$, and define the finite Kraus family from $B$ to $E$ by $K_0=\sqrt\alpha J_EJ_B^*$, $K_j=\sqrt{1-\alpha}|e_E\rangle\langle u_j|$ for $j<d$, and $K_e=|e_E\rangle\langle e_B|$. The sum of adjoint products is $\alpha\Pi_A+(1-\alpha)\Pi_A+|e_B\rangle\langle e_B|=I_B$, so the induced map $\mathcal D_\epsilon(X)=\sum KXK^*$ is a channel by [F4]–[F6]. On an erasure-channel output, its data block has weight $\alpha(1-\epsilon)X=\epsilon X$ and its flag block has weight $[(1-\alpha)(1-\epsilon)+\epsilon]\operatorname{tr}(X)=(1-\epsilon)\operatorname{tr}(X)$. Thus $\mathcal D_\epsilon\mathcal E_{d,\epsilon}=\mathcal E^c_{d,\epsilon}$, proving degradability. [F1, F2, F3, F4, F5, F6, step 1.1, algebra, construct, choose]

3.1 Suppose $\tfrac12\le\epsilon\le1$ and set $\beta=(1-\epsilon)/\epsilon\in[0,1]$. Choose an orthonormal basis $(u_j^E)_{j<d}$ of the data summand of $E$ and define a finite Kraus family from $E$ to $B$ by $L_0=\sqrt\beta J_BJ_E^*$, $L_j=\sqrt{1-\beta}|e_B\rangle\langle u_j^E|$ for $j<d$, and $L_e=|e_B\rangle\langle e_E|$. Its adjoint products sum to $I_E$, so its Kraus map $\mathcal A_\epsilon$ is a channel by [F4]–[F6]. Applying it to the complement in step 1.1 gives data weight $\beta\epsilon X=(1-\epsilon)X$ and erasure-flag weight $[(1-\beta)\epsilon+(1-\epsilon)]\operatorname{tr}(X)=\epsilon\operatorname{tr}(X)$. Hence $\mathcal A_\epsilon\mathcal E^c_{d,\epsilon}=\mathcal E_{d,\epsilon}$, proving antidegradability. At $\epsilon=\tfrac12$ both parameters equal one and both relations hold. [F1, F2, F3, F4, F5, F6, step 1.1, algebra, construct, choose] ∎
