---
id: ex-qa-24-rank-one-pue
kind: example
title: Rank-one PUE singular-plane calculation
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - lem-qa-24-pue-svd-invariant-subspaces
  - thm-qa-24-qsvt-singular-space-action
proof_strategy: direct
axiom_use: "None; this is a finite two-by-two calculation."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: https://arxiv.org/pdf/1806.01838
      locator: "Definitions 11–16, Lemma 14, Theorem 17, PDF pp. 15–19."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 29"
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Chapter 29 §29.3, printed pp. 146–147; PDF pp. 154–155."
---

## Example

Let $0\le\sigma\le1$, $H=\mathbb C^2$, $U_\sigma=\begin{pmatrix}\sigma&\sqrt{1-\sigma^2}\\\sqrt{1-\sigma^2}&-\sigma\end{pmatrix}$, and $\Pi_R=\Pi_L=|0\rangle\langle0|$. The PUE block is the scalar matrix $A=[\sigma]$. Use the degree-one phase list $(0,0)$, whose scalar polynomial is $P(x)=x$.

## Facts & Assumptions

**Given:** $\sigma\in[0,1]$, the standard orthonormal basis $|0\rangle,|1\rangle$ of $\mathbb C^2$, the PUE definition, and the ordered QSVT sequence.

[F1] [[lem-qa-24-pue-svd-invariant-subspaces]]: for $0<\sigma<1$, the matrix of the PUE unitary on its singular plane is $W_R(\sigma)$; at $\sigma=0$ the right kernel maps into the left projector complement, and at $\sigma=1$ the singular block is a line.

[F2] [[thm-qa-24-qsvt-singular-space-action]]: degree-one QSVT compresses to the odd singular-value transform with coefficient $P(\sigma)$, including the zero-kernel case.

## Proof

1.1 Put $s=\sqrt{1-\sigma^2}$. Direct multiplication gives $U_\sigma^*U_\sigma=U_\sigma^2=\begin{pmatrix}\sigma^2+s^2&\sigma s-\sigma s\\\sigma s-\sigma s&s^2+\sigma^2\end{pmatrix}=I$, so $U_\sigma$ is unitary. The projection onto $|0\rangle$ gives $A|0\rangle=\Pi_LU_\sigma|0\rangle=\sigma|0\rangle$, hence the PUE block is $[\sigma]$. Its complementary matrix entry is $s$, so the ordered basis realizes $W_R(\sigma)$ on the full ambient space: for $0<\sigma<1$ this is the singular plane, at $\sigma=0$ it is the zero-kernel/complement block, and at $\sigma=1$ it splits into the singular line $\mathbb C|0\rangle$ and residual complement $\mathbb C|1\rangle$. [given, F1, algebra]

2.1 The zero phases make both endpoint phase matrices the identity, so the degree-one sequence is $U_\sigma$ itself. Its compressed block is $\Pi_LU_\sigma\Pi_R|_{H_R}=[\sigma]$. The scalar polynomial is the upper-left entry of $W_R(x)$, namely $P(x)=x$; therefore for $\sigma>0$ the odd transform is $P^{\mathrm{SV}}_{\mathrm{odd}}(A)=[P(\sigma)]=[\sigma]$, and for $\sigma=0$ the positive singular sum is empty and both blocks are zero. The same formulas give $[1]$ at $\sigma=1$. [F1, F2, step 1.1, algebra] ∎
