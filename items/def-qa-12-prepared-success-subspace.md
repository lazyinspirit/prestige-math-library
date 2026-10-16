---
id: def-qa-12-prepared-success-subspace
kind: definition
title: "Prepared unitary and success subspace for amplitude amplification"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qc-pure-state-and-ray
  - def-qc-projective-measurement
  - thm-qc-projective-measurement-outcome-law
  - thm-qc-projective-conditional-state
  - thm-qc-unit-vector-projector-is-density
  - def-qc-inverse-unitary-access
  - def-qc-reflection
  - thm-qc-reflection-unitary-involution
  - def-qc-dirac-notation-conversion
justified_by: []
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
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Definition

Let $H$ be a nonzero finite-dimensional complex inner-product space, let $|0\rangle\in H$ be a specified unit input vector, let $A:H\to H$ be a supplied measurement-free unitary, and let $\Pi_{\mathrm{good}}$ be an orthogonal projection on $H$. The access contract supplies and charges calls to $A$, its inverse $A^\dagger$, the good phase reflection
$
S_{\mathrm{good}}:=I_H-2\Pi_{\mathrm{good}},
$
and the zero-input phase reflection
$
S_0:=I_H-2|0\rangle\langle0|.
$
The signs are part of the contract: $S_{\mathrm{good}}$ is $-I$ on $\operatorname{ran}\Pi_{\mathrm{good}}$ and $+I$ on its orthogonal complement. Reflection about the prepared state is the composite $A S_0 A^\dagger$, with its component calls charged unless a separate direct-reflection access is supplied.

Put $|\psi\rangle=A|0\rangle$ and define the initial success weight
$
a:=\|\Pi_{\mathrm{good}}|\psi\rangle\|^2\in[0,1].
$
When $a>0$, define $|G\rangle:=\Pi_{\mathrm{good}}|\psi\rangle/\sqrt a$. When $a<1$, define $|B\rangle:=(I_H-\Pi_{\mathrm{good}})|\psi\rangle/\sqrt{1-a}$. These vectors are normalized and lie respectively in the range and kernel of $\Pi_{\mathrm{good}}$. If $a=0$ or $a=1$, the corresponding zero component is omitted and no vector is normalized from it. With this convention,
$
|\psi\rangle=\sqrt a\,|G\rangle+\sqrt{1-a}\,|B\rangle
$
means the sum of the nonzero component terms. Under the projective measurement $\{\Pi_{\mathrm{good}},I_H-\Pi_{\mathrm{good}}\}$, the probability of the good outcome is $a$; the finite-dimensional rank-one density and projective-measurement outcome laws are [[thm-qc-unit-vector-projector-is-density]] and [[thm-qc-projective-measurement-outcome-law]].

The output task may return the conditional quantum state after the good outcome; that state is defined only on a positive-probability branch and is supported in $\operatorname{ran}\Pi_{\mathrm{good}}$ by [[thm-qc-projective-conditional-state]]. A classical output additionally requires $\Pi_{\mathrm{good}}$ to be diagonal in a specified output basis and a costed coherent or ordinary verifier. An arbitrary projection does not supply a classical predicate.

## Remarks

The unitary must be supplied coherently. A measured randomized procedure is not an admissible $A$ unless a separate coherent embedding is supplied. Controlled access to $A$ is not assumed. A controlled verifier, if used, is a distinct charged access capability.
