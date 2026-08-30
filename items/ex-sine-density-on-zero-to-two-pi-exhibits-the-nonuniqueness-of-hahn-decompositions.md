---
id: ex-sine-density-on-zero-to-two-pi-exhibits-the-nonuniqueness-of-hahn-decompositions
kind: example
title: "The signed measure with density sin x on [0,2pi] exhibits the nonuniqueness of Hahn decompositions"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data, thm-hahn-decomposition-for-signed-measures]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Example 12.3"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Example

Let $\lambda$ be Lebesgue measure on $[0,2\pi]$ and define
$$\nu(E):=\int_E \sin x\,d\lambda\qquad(E\in\mathcal B([0,2\pi])).$$
Then
$$P_0=(0,\pi),\qquad N_0=\{0\}\cup[\pi,2\pi]$$
is a Hahn decomposition, and so is
$$P_1=[0,\pi],\qquad N_1=(\pi,2\pi],$$
because the points $0$ and $\pi$ are $\nu$-null.

## Facts & Assumptions

**Given:** The signed measure $\nu(E)=\int_E \sin x\,d\lambda$ on $[0,2\pi]$.

[L1] A real $L^1$ density defines a finite signed measure whose canonical Hahn sets are $\{f>0\}$ and $\{f\le0\}$. ([[thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data]])

[L2] Hahn decompositions are unique only up to null sets. ([[thm-hahn-decomposition-for-signed-measures]])

[A1] On $[0,2\pi]$, one has $\sin x>0$ on $(0,\pi)$, $\sin x<0$ on $(\pi,2\pi)$, and $\sin x=0$ exactly at $0,\pi,2\pi$.

## Verification

**Proof technique:** direct.

1.1 By [A1], the density theorem [L1] makes $(0,\pi)$ positive and $\{0\}\cup[\pi,2\pi]$ negative for $\nu$. Thus $P_0,N_0$ is a Hahn decomposition. [L1, A1]

2.1 The points $0$ and $\pi$ are $\nu$-null because $\sin x=0$ there. Moving those null points from $N_0$ to $P_1$ preserves positivity and negativity, so $P_1,N_1$ is another Hahn decomposition. It is distinct from $P_0,N_0$ and compatible with the uniqueness clause of [L2]. [L2, A1, step 1.1] ∎
