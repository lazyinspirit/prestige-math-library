---
id: lem-qft-qed-conserved-current-gauge
kind: lemma
title: Gauge-longitudinal kernel decoupling for explicit tree currents
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 6
deps:
  - lem-qft-qed-tree-ward
dependency_roles:
  lem-qft-qed-tree-ward: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, §6.4
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted Chapter 6 HTML; explicit tree-level cancellation of longitudinal covariant-gauge propagator terms by on-shell Dirac currents.
    - title: Mark Srednicki, Quantum Field Theory, §§67–68
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete author-hosted draft; external-photon Ward identities and exact vertex relation, printed pp. 400–404. The present claim is only finite tree algebra.
---

## Statement

Let $p_1,p_1',p_2,p_2'$ be future-shell momenta for the same $\mu>0$ convention as [[lem-qft-qed-tree-ward]], and suppose $k=p_1-p_1'=p_2'-p_2$. Define
$$ J_1^\mu:=\bar u(p_1')\gamma^\mu u(p_1),\qquad J_2^\nu:=\bar u(p_2')\gamma^\nu u(p_2), $$
with the on-shell Dirac equations in [[lem-qft-qed-tree-ward]]. If a finite rational covariant-gauge kernel changes by $\Delta D_{\mu\nu}(k)=c(k)k_\mu k_\nu$, where $c(k)\in\mathbb C$ is finite at the chosen $k$, then
$$ J_1^\mu\Delta D_{\mu\nu}(k)J_2^\nu=0. $$
Likewise, for any conserved tree current $J^\mu$ of the forms proved in [[lem-qft-qed-tree-ward]], the contraction $\epsilon_\mu J^\mu$ is unchanged by $\epsilon^\mu\mapsto\epsilon^\mu+\alpha k^\mu$. These statements concern only the displayed finite tree-current contractions; they assert no gauge independence for arbitrary loop diagrams or renormalization schemes.

## Facts & Assumptions

**Given:** The four future-shell spinors and momenta in the Statement, with transfers $k$ and $-k$ on the two fermion lines.

[F1] [[lem-qft-qed-tree-ward]]: for each stated on-shell Dirac current, contraction with its momentum transfer is zero; the proof uses the fixed $h=-\eta$ slash convention.

[A1] $\mu>0$; each displayed momentum lies on the future shell $h(p,p)=\mu^2$; the spinors satisfy the positive-energy Dirac equations in the cited tree lemma; $k=p_1-p_1'=p_2'-p_2$; and $c(k)\in\mathbb C$ is finite at the selected $k$. The polarization shift uses a finite scalar $\alpha$ and one of the conserved current forms in that lemma.

## Proof

1.1 The first line has transfer $p_1-p_1'=k$, so [F1] gives $k_\mu J_1^\mu=0$. The second line has transfer $p_2-p_2'=-k$, so $(-k)_\nu J_2^\nu=0$, hence $k_\nu J_2^\nu=0$. [A1, F1, algebra]

2.1 Contracting the longitudinal kernel gives
$$ J_1^\mu\Delta D_{\mu\nu}(k)J_2^\nu =c(k)(k_\mu J_1^\mu)(k_\nu J_2^\nu)=0 $$
by [step 1.1]. [A1, step 1.1, algebra]

3.1 For a tree current with $k_\mu J^\mu=0$, the change under $\epsilon^\mu\mapsto\epsilon^\mu+\alpha k^\mu$ is $\alpha k_\mu J^\mu=0$. This proves the polarization claim for the explicit current types of [F1]. [A1, F1, algebra] ∎
