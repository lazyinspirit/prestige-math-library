---
id: def-qft-photon-transverse-space
kind: definition
title: Positive transverse photon one-particle space
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-countable-choice
  - def-euclidean-inner-product
  - def-qft-fock-and-test-spaces
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
dependency_roles:
  def-countable-choice: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-qft-fock-and-test-spaces: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 6, §§6.2.1–6.2.2
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted HTML chapter 6; Coulomb-gauge transverse photon modes and the subsidiary condition.
    - title: Mark Srednicki, Quantum Field Theory, author-hosted 2006 book draft, §§54–56
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page book draft; Maxwell modes, Coulomb gauge and the transverse projector.
---

## Definition

Assume Countable Choice [[def-countable-choice]]. Let
$$\mathcal H=L^2(\mathbb R^3,d^3\mathbf k;\mathbb C^3),\qquad \langle u,v\rangle_2=\int_{\mathbb R^3}\overline{u(\mathbf k)}\cdot v(\mathbf k)\,d^3\mathbf k,$$
with the second-variable-linear convention of [[def-qft-fock-and-test-spaces]]; the dot product and norm on each $\mathbb R^3$ fiber are those of [[def-euclidean-inner-product]], and Hilbert completeness follows from [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]. For $\mathbf k\ne0$, write $n(\mathbf k)=\mathbf k/|\mathbf k|$ and
$$P_T(\mathbf k)=I_3-n(\mathbf k)n(\mathbf k)^T.$$
Assign any value at $\mathbf k=0$, which is a Lebesgue-null set. Let $M_{P_T}$ be multiplication by this measurable matrix field and define the positive transverse photon space
$$\mathcal H_T=\operatorname{Ran}M_{P_T} =\{u\in\mathcal H:\mathbf k\cdot u(\mathbf k)=0\text{ for almost every }\mathbf k\ne0\}.$$
The inner product on $\mathcal H_T$ is the restriction of that on $\mathcal H$. Each nonzero momentum fiber is the two-dimensional plane perpendicular to $\mathbf k$; no global continuous polarization frame is part of the definition.

## Facts & Assumptions

**Given:** Countable Choice and the $L^2$ Hilbert-space and Fock-pairing conventions stated above.

[A1] Under Countable Choice, complex $L^2(\mu)$ with the integral pairing is a Hilbert space. [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]

[A2] Assume Countable Choice. [[def-countable-choice]]

[F1] The Fock convention uses a second-variable-linear Hilbert pairing. [[def-qft-fock-and-test-spaces]]

[F2] The Euclidean dot product is $u\cdot v=\sum_{i=1}^3u_iv_i$ and $|u|=\sqrt{u\cdot u}$. [[def-euclidean-inner-product]]

## Proof

**Given:** [A1], [A2], [F1], [F2], and the measurable matrix field in the definition.

1.1 For each $\mathbf k\ne0$, $n^Tn=n\cdot n=1$ by [F2], so $P_T^*=P_T$ and
$$P_T^2=(I-nn^T)^2=I-2nn^T+n(n^Tn)n^T=I-nn^T=P_T.$$
Its kernel is $\operatorname{span}\{n\}$ and its range is $n^\perp$, of dimension two. Its operator norm is one. The arbitrary value at the single point $\mathbf k=0$ does not affect its multiplication operator on $L^2$. [F2, given, algebra]

2.1 Under [A2], [A1] makes each complex scalar $L^2$ component complete for its first-variable-linear pairing $(u,v)_1=\int u\overline v$. The three-component direct sum is complete componentwise. Its second-variable-linear pairing is $\langle u,v\rangle_2:=(v,u)_1=\int\overline u\cdot v$, with the same norm; [F1] fixes this convention. Thus $\mathcal H$ is complete. The multiplier $M_{P_T}$ is bounded and idempotent by step 1.1. If $u_r=M_{P_T}v_r\to u$ in $\mathcal H$, then $M_{P_T}u=\lim_rM_{P_T}u_r=\lim_ru_r=u$ by boundedness, so $u$ belongs to its range. Thus $\mathcal H_T$ is closed and inherits a positive Hilbert inner product. Since $P_Tu=u$ is equivalent to $n\cdot u=0$ for unit $n$ by [F2], the pointwise range formula gives the displayed transverse condition almost everywhere. [A1, A2, F1, F2, step 1.1, given] ∎
