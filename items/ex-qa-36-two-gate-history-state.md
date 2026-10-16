---
id: ex-qa-36-two-gate-history-state
kind: example
title: Two-gate padded history state
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - alg-qa-36-five-local-history-path
  - lem-qa-36-history-state-ground-and-output
  - def-qc-dirac-notation-conversion
justified_by: []
proof_strategy: direct
axiom_use: None; the calculation uses the finite history-state formula and two explicit one-qubit gates.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Dorit Aharonov, Wim van Dam, Julia Kempe, Zeph Landau, Seth Lloyd, and Oded Regev, Adiabatic Computation is Equivalent to Standard Quantum Computation
      url: https://arxiv.org/pdf/quant-ph/0405098
      locator: §3.1.1, PDF pp. 10–11; propagation terms and history states.
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: Chapter 33, printed pp. 171–176; unary-clock history construction.
---

## Example

Take the algebraic one-qubit macro-gate circuit $U_1=X$, $U_2=Z$ and tolerance $\varepsilon=1$. Applying the propagation formula at this macro-step level gives $K=4$, $N=6$, and $U_3=\cdots=U_6=I$. Write its legal clocks as $c_0=000000,c_1=100000,\ldots,c_6=111111$. This is an algebraic illustration of the propagation formula, rather than a literal fixed-alphabet input to the uniform-circuit construction: expanding $X=HT^4H$ and $Z=T^4$ changes the gate count and padding. The normalized history state is
$$|\eta\rangle=\frac1{\sqrt7}\bigl(|0\rangle|c_0\rangle+|1\rangle|c_1\rangle-|1\rangle|c_2\rangle-|1\rangle|c_3\rangle-|1\rangle|c_4\rangle-|1\rangle|c_5\rangle-|1\rangle|c_6\rangle\bigr).$$

## Facts & Assumptions

**Given:** The unary-clock propagation formula and padded circuit conventions from [[alg-qa-36-five-local-history-path]] and [[lem-qa-36-history-state-ground-and-output]].

[F1] Each propagation term couples only its two adjacent legal clocks and its kernel condition on their data amplitudes is $\phi_\ell=U_\ell\phi_{\ell-1}$ ([[lem-qa-36-history-state-ground-and-output]]).

[F2] Dirac kets denote the corresponding computational basis vectors ([[def-qc-dirac-notation-conversion]]).

## Verification

1.1 At the algebraic macro-step level, the padding count is $K=\lceil2\cdot2/1\rceil=4$, so $N=6$. The prefix states are $V_0|0\rangle=|0\rangle$, $V_1|0\rangle=X|0\rangle=|1\rangle$, and $V_2|0\rangle=ZX|0\rangle=Z|1\rangle=-|1\rangle$. Since $U_3,\ldots,U_6$ are identities, all later prefix states remain $-|1\rangle$. Substitution in the history-state formula of [F1] gives the displayed normalized vector. [given, F1, F2, algebra]

2.1 For $\ell=1$, the endpoint patterns are $a_1=00,b_1=10$ on clock bits $(1,2)$; for $\ell=2,3,4,5$, the internal patterns are $a_\ell=100,b_\ell=110$ on bits $(\ell-1,\ell,\ell+1)$; for $\ell=6$, the endpoint patterns are $a_6=10,b_6=11$ on bits $(5,6)$. On every adjacent pair $(c_{\ell-1},c_\ell)$, the data amplitudes in step 1.1 satisfy $\phi_\ell=U_\ell\phi_{\ell-1}$: the first two transitions apply $X$ and $Z$, and the last four apply $I$. [given, F1, step 1.1, algebra]

3.1 By [F1], each $h_\ell$ restricted to its pattern pair has quadratic form $\frac12\|\phi_\ell-U_\ell\phi_{\ell-1}\|^2$. Step 2.1 makes this zero for each $\ell=1,\ldots,6$; all other legal clock amplitudes are outside that term's two-pattern support. Thus every propagation term annihilates $|\eta\rangle$, and the sum $H_{\rm prop}$ does as well. [F1, step 2.1, algebra] ∎
