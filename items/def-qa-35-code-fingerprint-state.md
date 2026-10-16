---
id: def-qa-35-code-fingerprint-state
kind: definition
title: "Code-based quantum fingerprint"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps: ["def-qa-35-equality-promise", "def-qc-register-and-computational-basis", "def-qc-dirac-notation-conversion"]
justified_by: ["thm-qa-35-code-fingerprint-state-properties"]
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions, sums, bases, and selection sets are finite."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Harry Buhrman, Richard Cleve, John Watrous, Ronald de Wolf, Quantum Fingerprinting"
      url: https://arxiv.org/pdf/quant-ph/0102001
      locator: "Complete 8-page paper, especially §2, PDF pp.2–4, code fingerprints and swap-test analysis."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 16 §§16.1 and 16.6, PDF pp.147–153; private/public-coin SMP and equality lower-bound context (§16.1), quantum fingerprint construction and SWAP-test analysis (§16.6)."
---

## Definition

For $n\ge1$ and $N\ge1$, let $E:\{0,1\}^n\to\{0,1\}^N$ be a binary code map. Define its relative distance by
$$\delta(E):=\frac1N\min_{x\ne y}d_H(E(x),E(y)),$$
where $d_H(u,v):=|\{i<N:u_i\ne v_i\}|$ and the minimum is over distinct inputs. Thus duplicate codewords are allowed and give relative distance $0$, and $\delta(E)\in[0,1]$; the minimum is over a nonempty finite set because $n\ge1$. For every such map, with no positive-distance assumption, let $m=\lceil\log_2N\rceil$ and use the ordered computational basis of the $m$-qubit index register, padding unused indices by zero amplitude. The **fingerprint state** of $x$ is
$$|h_x\rangle:=\frac1{\sqrt N}\sum_{i=0}^{N-1}|i\rangle|E_i(x)\rangle,$$
where $E_i(x)$ is bit $i$ of $E(x)$, indexed from $0$ to $N-1$. It is a vector in the $(m+1)$-qubit index-and-data register. The following theorem proves it is normalized and computes its overlap. This is a state definition; it makes no uniformity or encoder-time claim.
