---
id: lem-qa-13-grover-eigenphase-relation
kind: lemma
title: "Grover eigenphases encode the good probability"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-13-amplitude-estimation-task
  - lem-qa-12-amplification-plane-invariant
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all constructions and measurement schedules are finite, and the analytic estimates use the stated real-analysis suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brassard, Høyer, Mosca, and Tapp, Quantum Amplitude Amplification and Estimation, complete article, §§4–5, Theorems 11–18"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, complete lecture notes, §§19.1–19.3"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, complete 239-page notes, §7.3"
      url: "https://arxiv.org/pdf/1907.09415"
---
## Statement

Let $\psi=A|0\rangle$, $a=\|\Pi_{\rm good}\psi\|^2$, and $\theta=\arcsin\sqrt a$. If $0<a<1$, define the unit vectors $G=\Pi_{\rm good}\psi/\sqrt a$ and $B=(I-\Pi_{\rm good})\psi/\sqrt{1-a}$. In the ordered basis $(B,G)$, the Grover iterate $Q$ of [[def-qa-13-amplitude-estimation-task]] restricts to
$$\begin{pmatrix}\cos(2\theta)&-\sin(2\theta)\\\sin(2\theta)&\cos(2\theta)\end{pmatrix}.$$
Its eigenvalues are $e^{2i\theta}$ and $e^{-2i\theta}$, and $\psi=\cos\theta B+\sin\theta G$ has squared overlap $1/2$ with each corresponding normalized eigenvector. At $a=0$, $\psi$ is a $+1$ eigenvector; at $a=1$, it is a $-1$ eigenvector.

## Facts & Assumptions

**Given:** The unitary $A$, the orthogonal good projection, the state $\psi=A|0\rangle$, and the signed iterate $Q=-AS_0A^*S_{\rm good}$.

[F1] The definitions of $S_0$, $S_{\rm good}$, $Q$, $a$, and $\theta$ are fixed in [[def-qa-13-amplitude-estimation-task]].

[F2] The signed iterate leaves the good/bad plane invariant and has matrix $\begin{pmatrix}\cos(2\theta)&-\sin(2\theta)\\\sin(2\theta)&\cos(2\theta)\end{pmatrix}$ in the ordered $(B,G)$ basis ([[lem-qa-12-amplification-plane-invariant]]).

## Proof

1.1 When $0<a<1$, the definition in [F1] has $\sqrt{1-a}=\cos\theta$ and $\sqrt a=\sin\theta$ because $\theta\in(0,\pi/2)$. The supplier matrix in [F2] therefore applies to the same ordered basis and the same signed $Q$ defined in [F1]. [given, F1, F2, algebra]

2.1 For that matrix, the characteristic polynomial is $\lambda^2-2\cos(2\theta)\lambda+1$, with roots $\cos(2\theta)\pm i\sin(2\theta)=e^{\pm2i\theta}$. The normalized vectors $(B-iG)/\sqrt2$ and $(B+iG)/\sqrt2$ are eigenvectors for these roots. Their inner products with $\psi=\cos\theta B+\sin\theta G$ have squared modulus $(\cos^2\theta+\sin^2\theta)/2=1/2$. [F2, step 1.1, algebra]

3.1 At $a=0$, [F2]’s endpoint statement gives $Q\psi=\psi$, with phase $0$ modulo one. At $a=1$, it gives $Q\psi=-\psi=e^{2\pi i(1/2)}\psi$, with phase $1/2$. These are the remaining endpoint eigenphases and require no zero component normalization. [F2, algebra] ∎

