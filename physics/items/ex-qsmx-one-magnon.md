---
id: ex-qsmx-one-magnon
kind: example
title: One down-spin Fourier dispersion
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 4
deps: [thm-qsmx-transfer-heisenberg-charge]
dependency_roles:
  thm-qsmx-transfer-heisenberg-charge: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Classical and Quantum Integrable Systems, Lecture 10: The coordinate Bethe ansatz: the Heisenberg chain"
      url: "https://vu-ff.github.io/integrability/en/lectures/10/"
      locator: "Sections 10.2–10.3, equations (10.2)–(10.5): periodic spin-half exchange convention and one-magnon plane-wave dispersion."
    - title: "L. D. Faddeev, How Algebraic Bethe Ansatz Works for Integrable Model"
      url: "https://arxiv.org/pdf/hep-th/9605187"
      locator: "Section 4, PDF p. 15, equations (108)–(112): one-particle momentum and dispersion for H_source=(1/2) sum(P-I); the present H_N=J sum P has energy E=2J epsilon+JN."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

Fix $N\ge3$, $J\in\mathbb R$, and periodic bonds $P_{N,N+1}:=P_{N,1}$ on
$V_N=(\mathbb C^2)^{\otimes N}$. Let $|j\rangle$ be the basis vector with
$e_\downarrow$ at site $j$ and $e_\uparrow$ at every other site. Set
$H_N:=J\sum_{j=1}^N P_{j,j+1}$. For each integer $m$ with $0\le m<N$, put
$k_m:=2\pi m/N$ and
$$|k_m\rangle:=\sum_{j=1}^N e^{ik_mj}|j\rangle.$$
Then $|k_m\rangle$ is a nonzero eigenvector of $H_N$ with eigenvalue
$$E_m=J\big(N-2+2\cos k_m\big).$$
If interpreted as an energy, $J$ and $E_m$ are in joules.

## Example references

[[thm-qsmx-transfer-heisenberg-charge]]

[Classical and Quantum Integrable Systems, Lecture 10, §§10.2–10.3](https://vu-ff.github.io/integrability/en/lectures/10/)

[Faddeev, §4, equations (108)–(112); source normalization $H_{\mathrm{source}}=\tfrac12\sum_j(P_{j,j+1}-I)$](https://arxiv.org/pdf/hep-th/9605187)

## Facts & Assumptions

**Given:** $N\ge3$, $J\in\mathbb R$, and the finite tensor basis and periodic bond convention specified above.

[F1] [[thm-qsmx-transfer-heisenberg-charge]]: for real $J$, the periodic exchange operator is $H_N=J\sum_{j=1}^NP_{j,j+1}$ when its additive scalar offset is $c=0$.

## Verification

1.1 For a fixed $j$, exactly two of the $N$ periodic bonds touch site $j$;
they are distinct because $N\ge3$. Each of the other $N-2$ swaps exchanges
two up spins and fixes $|j\rangle$, while the two touching swaps move the down
spin to $j-1$ and $j+1$. Therefore
$$H_N|j\rangle=J\big((N-2)|j\rangle+|j-1\rangle+|j+1\rangle\big),$$
with indices interpreted modulo $N$. [given, F1, algebra]

2.1 The vectors $|j\rangle$ are linearly independent and every coefficient $e^{ik_mj}$ has modulus one, so $|k_m\rangle\ne0$. Since $e^{ik_mN}=1$, periodic reindexing gives $\sum_j e^{ik_mj}|j-1\rangle=e^{ik_m}|k_m\rangle$ and $\sum_j e^{ik_mj}|j+1\rangle=e^{-ik_m}|k_m\rangle$. Applying step 1.1 linearly now yields $H_N|k_m\rangle=J(N-2+e^{ik_m}+e^{-ik_m})|k_m\rangle$; using $e^{ik_m}+e^{-ik_m}=2\cos k_m$ proves the claimed eigenvalue. [given, F1, step 1.1, algebra] ∎
