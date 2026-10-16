---
id: def-qa-27-variable-time-model
kind: definition
title: "Coherent variable-time algorithm model"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qc-classical-control-and-measurement-circuit
  - def-qc-clean-and-dirty-ancillas
  - def-qc-circuit-denotational-semantics
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-projective-measurement
  - thm-qc-projective-measurement-outcome-law
  - thm-qc-projective-conditional-state
  - def-qc-dirac-notation-conversion
justified_by: []
axiom_use: "None; the model uses finitely many orthogonal outcome and clock subspaces."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andris Ambainis, Variable time amplitude amplification and a faster quantum algorithm for solving systems of linear equations"
      url: "https://arxiv.org/pdf/1010.4458"
      locator: "§§3.1–3.3, PDF pp.4–8."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 19 §19.3 and Chapter 28, full lecture-note corpus."
---

## Definition

A finite coherent variable-time algorithm has a finite family of stopping times $0<t_1<\cdots<t_m=T_{\max}$, a designated output space, and a finite clock/step register. A run is **unfinished** at stage $j$ if it has not entered a stopping subspace by $t_j$; otherwise it is **stopped**. The stopping subspaces are pairwise orthogonal, and the output register labels each stopped branch as **good** or **bad**. Every later stage is controlled on the unfinished projector, so a stopped branch is not advanced. The input specifies each stage unitary, its inverse and every controlled form used, and the gate/query cost for each.

For a normalized input state, let $p_i$ be the Born probability mass in the subspace that first stops at $t_i$. The masses satisfy $p_i\ge0$ and $\sum_{i=1}^m p_i=1$. Define the root-mean-square stopping time
$$T_{\rm av}:=\left(\sum_{i=1}^m p_i t_i^2\right)^{1/2}.$$
Let $p_{\rm succ}$ be the total Born probability of the good-output subspace. When $p_{\rm succ}>0$, the good output means the normalized conditional state of the declared good projector; it is defined only on that positive-probability branch. The mean stopping time $\sum_i p_i t_i$ is a different quantity and is not substituted for $T_{\rm av}$.

A measured adaptive procedure qualifies only if it has a finite coherent implementation with the same stopped/unfinished branch semantics and the required inverse/coherent access. Measurement records used to choose a circuit may be classical construction data; no intermediate measurement is inserted into a branch whose later inverse must erase that record. All stopping times, branch probabilities, reflections, inverses, controlled calls, and state preparation remain explicit resource inputs.
