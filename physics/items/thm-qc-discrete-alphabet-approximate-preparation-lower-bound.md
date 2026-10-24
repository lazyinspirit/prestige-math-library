---
id: thm-qc-discrete-alphabet-approximate-preparation-lower-bound
kind: theorem
title: QC24 Discrete Alphabet Approximate Preparation Lower Bound
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - def-qc-state-preparation-cost-model
  - def-qc-projective-chord-distance
  - lem-qc-projective-chord-distance-formula
  - lem-qc-signed-ray-packing-code
  - thm-qc-finite-width-topology-count
  - cor-triangle-inequality-for-inner-product-norm
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
    - title: John Preskill, Quantum Computation, Chapter 5, Classical and Quantum Circuits
      url: https://www.preskill.caltech.edu/ph219/chap5_15.pdf
    - title: John Watrous, The Theory of Quantum Information
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
---

## Statement

Fix real numbers $0<\delta<1/4$ and $0\le\varepsilon<\sqrt\delta$. Let integers $n\ge2$, $A\ge1$, $k\ge1$, and $W\ge n$ be fixed, with $D=2^n$, gate-alphabet size $A$, and maximum arity $k$. For an integer gate budget $g\ge0$, every circuit starts on $|0^n\rangle|0^{W-n}\rangle$ and must return the workspace exactly to zero, with its data output within projective chord distance $\varepsilon$ of the target ray. If a circuit family prepares every $D$-dimensional pure-state ray and each circuit in the family has at most $g$ gates in this model, then $g=\Omega(D/\log W)$ as $n\to\infty$, with constants depending on $A,k,\delta,\varepsilon$. In particular, if $W=\operatorname{poly}(n)$, then $g=\Omega(2^n/\log n)$.

## Facts & Assumptions

**Given:** The fixed finite-alphabet width model with exact clean-workspace output, fixed integers $A\ge1$, $k\ge1$, and fixed $\delta,\varepsilon$ in the Statement, and the ray-packing and circuit-count bounds below.

[F1] The page contains at least $\exp(c_\delta D)$ rays pairwise separated by at least $2\sqrt\delta$ in $d_{\mathrm{ch}}$ ([[lem-qc-signed-ray-packing-code]]).

[F2] At width $W$, a length-$j$ circuit has at most $(C_k A W^k)^j$ descriptions, with $C_k=k+1$ ([[thm-qc-finite-width-topology-count]]).

[F3] $d_{\mathrm{ch}}([u],[v])=\sqrt{2-2|\langle u,v\rangle_{\mathrm{root}}|}$ and the phase-minimum is attained ([[lem-qc-projective-chord-distance-formula]]).

[F4] The Euclidean norm induced by the root inner product satisfies the triangle inequality ([[cor-triangle-inequality-for-inner-product-norm]]).

## Proof

**Given:** As in Facts & Assumptions.

1.1 A single output ray cannot be within $\varepsilon$ of two distinct packed rays. Indeed, if $d_{\mathrm{ch}}([u],[q])\le\varepsilon$ and $d_{\mathrm{ch}}([v],[q])\le\varepsilon$, [F3] gives unit phases $\lambda,\mu$ with $\|u-\lambda q\|_2\le\varepsilon$ and $\|v-\mu q\|_2\le\varepsilon$; then [F4] gives $\|u-(\lambda/\mu)v\|_2\le2\varepsilon<2\sqrt\delta$, contradicting [F1]. Thus each circuit covers at most one packed ray. [F1, F3, F4, given, algebra, contradiction]

2.1 Put $B=C_k A W^k\ge2$. By [F2], the number of descriptions of length at most $g$ is $\sum_{j=0}^g B^j\le B^{g+1}$. If these circuits approximate all packed rays, step 1.1 implies $\exp(c_\delta D)\le B^{g+1}$, so $g\ge c_\delta D/\log B-1$. [F1, F2, step 1.1, algebra]

3.1 Since $A,k$ are fixed and $W\ge2$, there is a constant $K>0$ with $\log B=\log(C_kA)+k\log W\le K\log W$. Put $X=c_\delta D/(K\log W)$. Step 2.1 gives $g+1\ge X$. If $X\ge2$, then $g\ge X-1\ge X/2$. If $X<2$, a family with $g=0$ has only the single zero-gate output ray, whereas the packing in [F1] contains at least two rays for $D\ge4$; hence $g\ge1>X/2$. Thus $g\ge X/2=\Omega(D/\log W)$. If $W=\operatorname{poly}(n)$, then $\log W=O(\log n)$ and also $W\ge n$, so $\log W=\Theta(\log n)$, giving $\Omega(2^n/\log n)$. [given, F1, step 2.1, algebra, cases] ∎
