---
id: def-qc-tqc-ising-majorana-interface
kind: definition
title: Ising–Majorana exchange interface
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - ex-qc-tqc-ising-data
dependency_level: 7
axiom_use: None; the interface identities are finite-dimensional operator algebra.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §III.B.2, Eq. (53), PDF p. 32 (Majorana exchange and relative Ising phase); §III.C.2, PDF p. 37 (absolute Ising phases)
---

## Definition

Let $m\ge2$ and let $\mathcal H=(\mathbb C^2)^{\otimes m}$. A **Majorana
system of length $2m$** is a family of operators
$\gamma_1,\ldots,\gamma_{2m}\in\operatorname{End}(\mathcal H)$ satisfying
$$\gamma_j^*=\gamma_j,\qquad \gamma_j^2=I,\qquad \gamma_j\gamma_k=-\gamma_k\gamma_j\quad(j\ne k).$$
Its parity operator is $\Pi=i^m\gamma_1\cdots\gamma_{2m}$. For each adjacent
pair, put
$$Q_1(j)=\frac{I-i\gamma_j\gamma_{j+1}}2,\qquad Q_\psi(j)=\frac{I+i\gamma_j\gamma_{j+1}}2,\qquad U_j=\exp\!\left(-\frac\pi4\gamma_j\gamma_{j+1}\right).$$

A **Majorana–Ising exchange interface** on a fixed parity sector consists of
such a system, a choice $\eta\in\{1,-1\}$ and the sector
$\mathcal H_\eta=\ker(\Pi-\eta I)$, together with the following explicit
model-identification hypotheses for every $1\le j<2m$: the Ising pair-charge
projections are identified with $Q_1(j),Q_\psi(j)$, and the exchange is
$R_1Q_1(j)+R_\psi Q_\psi(j)$ with the same relative phase
$R_\psi/R_1=i$. The last identity is required for all adjacent pairs as part
of the interface; the three-anyon supplier below establishes it only in its
stated sector and does not prove this all-$m$ identification.

## Facts & Assumptions

**Given:** A Majorana system, a fixed parity sector, and the interface
hypotheses in the Definition.

[F1] In the three-$\sigma$, total-$\sigma$ Ising sector, the supplier gives
$R_1=e^{-i\pi/8}$ and $R_\psi=e^{3i\pi/8}$, hence
$R_\psi/R_1=i$. [[ex-qc-tqc-ising-data]]

## Proof

1.1 Let $A_j=i\gamma_j\gamma_{j+1}$. The Majorana relations give $A_j^*=A_j$ and $A_j^2=I$. Therefore $Q_1(j)=(I-A_j)/2$ and $Q_\psi(j)=(I+A_j)/2$ are self-adjoint idempotents, $Q_1(j)Q_\psi(j)=0$, and $Q_1(j)+Q_\psi(j)=I$. They are the orthogonal complementary pair-channel projections stipulated by the interface. [given, algebra]

2.1 Since $(\gamma_j\gamma_{j+1})^2=-I$, expansion of the exponential gives $U_j=2^{-1/2}(I-\gamma_j\gamma_{j+1})$. Its restrictions to $\operatorname{ran}Q_1(j)$ and $\operatorname{ran}Q_\psi(j)$ are respectively $e^{-i\pi/4}I$ and $e^{i\pi/4}I$. Using the phase ratio in [F1] as imposed for every generator by the interface, the channel exchange equals $$R_1Q_1(j)+R_\psi Q_\psi(j)=R_1e^{i\pi/4}U_j.$$ Thus it differs from $U_j$ by one common scalar. [given, F1, algebra] ∎
