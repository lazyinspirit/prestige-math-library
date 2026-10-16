---
id: thm-qa-27-pseudoinverse-polynomial-degree
kind: theorem
title: "Gapped pseudoinverse polynomial degree and error"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 15
deps:
  - def-qa-27-block-encoded-qlsp
  - alg-qa-27-qsvt-pseudoinverse
  - lem-qa-27-even-sign-window
  - def-qa-24-singular-value-transform
  - thm-qa-24-real-polynomial-extraction
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
      locator: "Lemma 40 and Theorem 41, PDF pp.36–38; polynomial approximation proof."
---

## Statement

For rational $0<e\le\delta\le1/2$, the intended OP1A construction returns an odd real polynomial $p$ of degree $O(\delta^{-1}\log(1/e))$ satisfying $|p(x)|\le1$ on $[-1,1]$, $p(0)=0$, and
$$\sup_{x\in[\delta,1]}\left|p(x)-\frac{\delta}{2x}\right|\le e.$$
For a normalized block $\bar A=A/\alpha$ whose supported singular values lie in $\{0\}\cup[\delta,1]$, this gives the singular-space approximation $p^{\rm SV}(\bar A^\dagger)\approx(\delta/2)\bar A^+=(\gamma/2)A^+$ on the supported input, where $\delta=\gamma/\alpha$.

## Proof status

The statement retains Gilyén et al. Theorem 41's full mathematical claim. No complete proof is supplied here, so this item is escalated. The displayed formula for $P'$ in their Lemma 29 (PDF p.28), at the parameters used in Theorem 41 ($t=3/4$, $\delta'=\delta/4$), is inconsistent with its stated bound: at $x=0$, $P(t)\ge1-e'/2$ and the printed expression gives $P'(0)=(1-e'/2)P(t)+e'\ge1+e'^2/4>1$. The corrected local window is proved in [[lem-qa-27-even-sign-window]], but that does not establish OP1A's erf interpolation error and range, its inverse-polynomial approximation and global product margin, termination of the exact Bernstein refinement, the asserted degree/resource bound, or the charged bit complexity. Those proof obligations remain explicit; the source citation is not used as a proof.
