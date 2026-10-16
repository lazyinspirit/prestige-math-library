---
id: lem-qc-projective-chord-distance-formula
kind: lemma
title: Projective Chord Distance Formula
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - def-qc-projective-chord-distance
  - def-qc-pure-state-and-ray
  - def-real-and-complex-inner-product-space
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, Chapter 1
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    - title: John Preskill, Quantum Computation, Chapter 5, Classical and Quantum Circuits
      url: https://www.preskill.caltech.edu/ph219/chap5_15.pdf
---

## Statement

For unit vectors $u,v\in\mathbb C^D$,

$$d_{\mathrm{ch}}([u],[v])=\sqrt{2-2|\langle u,v\rangle_{\mathrm{root}}|}.$$

In particular, this value is independent of the chosen unit representatives, and it is zero exactly when the two vectors represent the same ray.

## Facts & Assumptions

**Given:** Unit vectors $u,v\in\mathbb C^D$ and the projective chord distance of [[def-qc-projective-chord-distance]].

[F1] For unit representatives, $d_{\mathrm{ch}}([u],[v])=\inf_{|\lambda|=1}\|u-\lambda v\|_2$ ([[def-qc-projective-chord-distance]]).

[F2] The root pairing is linear in the first argument, conjugate-linear in the second, conjugate-symmetric, and induces $\|w\|_2^2=\langle w,w\rangle_{\mathrm{root}}$ ([[def-real-and-complex-inner-product-space]]).

[F3] Two nonzero vectors represent the same pure-state ray exactly when one is a nonzero complex scalar multiple of the other; for unit vectors that scalar has modulus one ([[def-qc-pure-state-and-ray]]).

[F4] Cauchy–Schwarz gives $|\langle u,v\rangle_{\mathrm{root}}|\le\|u\|_2\|v\|_2=1$ for unit vectors ([[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]).

## Proof

**Given:** As in Facts & Assumptions.

1.1 Put $c=\langle v,u\rangle_{\mathrm{root}}$. For every $|\lambda|=1$, expand by [F2]: $\|u-\lambda v\|_2^2=2-\overline\lambda\langle u,v\rangle_{\mathrm{root}}-\lambda\langle v,u\rangle_{\mathrm{root}}=2-2\operatorname{Re}(\lambda c)$. [F1, F2, algebra]

2.1 If $c=0$, the real part is zero for every unit $\lambda$; if $c\ne0$, choose $\lambda=\overline c/|c|$, giving $\operatorname{Re}(\lambda c)=|c|$. Since $\operatorname{Re}(\lambda c)\le|c|$ for every unit $\lambda$, this phase attains the infimum in [F1]; the value is $\sqrt{2-2|c|}$, a real nonnegative number by [F4]. [F1, F4, step 1.1, choose, algebra]

3.1 Replacing $u$ and $v$ by unit scalar multiples changes $\langle u,v\rangle_{\mathrm{root}}$ by a unit scalar, so its modulus and the displayed value do not change. Since the infimum is attained, it is zero exactly when a minimizing phase satisfies $u=\lambda v$, which is exactly equality of the represented rays by [F3]. [F1, F2, F3, step 2.1, algebra] ∎
