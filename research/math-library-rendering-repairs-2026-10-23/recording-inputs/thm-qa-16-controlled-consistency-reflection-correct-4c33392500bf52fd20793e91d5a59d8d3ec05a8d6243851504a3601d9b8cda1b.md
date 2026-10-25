---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-qa-16-controlled-consistency-reflection-correct.json
  precheck: pass
id: thm-qa-16-controlled-consistency-reflection-correct
kind: theorem
title: The controlled input-consistency circuit realizes the exact reflection
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
deps:
  - alg-qa-16-controlled-consistency-reflection
  - def-qc-reflection
  - thm-qc-reflection-unitary-involution
  - def-qa-standard-bit-query
  - def-qa-16-query-address-projectors
  - def-qa-16-boolean-query-domain
  - def-qc-clean-and-dirty-ancillas
  - def-qc-dirac-notation-conversion
  - def-qa-quantum-query-algorithm
  - def-qc-register-and-computational-basis
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: None; all spaces, matrices, decompositions and optimization variables are finite-dimensional.
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement


Assume the distinguished vector $|start\rangle$ in the input decomposition is unit, as required by [[alg-qa-16-controlled-consistency-reflection]]. For every promised input $x$, that circuit realizes the control-first block operator
$$\operatorname{diag}(I_{\mathcal H},R_{\Pi_x}),\qquad R_{\Pi_x}=2\Pi_x-I,$$
where $\Pi_x$ projects onto the start vector and all query states whose response equals $x_i$. The controlled operation uses the plus-on-range sign, including on the distinguished start state.

The displayed consistency sum is an orthogonal projection. For arbitrary control/data superpositions, the supplied circuit restores its scratch qubit to zero, including the start mode protected by a $|+\rangle$ scratch during both unconditional calls; no controlled unknown-oracle call is required.

## Facts & Assumptions

**Given:** The finite controlled consistency-reflection circuit and its projection $\Pi_x$.



[F21] [[def-qa-16-boolean-query-domain]]: each promised input $x$ supplies the bit $x_i$ at each address $i$.

[F22] [[def-qa-standard-bit-query]]: the XOR oracle toggles a response bit by $x_i$ and is an involution.

[F23] [[def-qc-clean-and-dirty-ancillas]]: a clean scratch qubit is initialized to $|0\rangle$ and must be returned to $|0\rangle$.

[F24] [[thm-qc-reflection-unitary-involution]]: $R_\Pi=2\Pi-I$ is the unitary reflection acting $+1$ on $\operatorname{ran}\Pi$ and $-1$ on $\ker\Pi$.

[F25] [[def-qc-register-and-computational-basis]]: the $d$-level register is $\mathbb C^d$ with its standard coordinate pairing and ordered standard basis. The mode/address/response/work decomposition is supplied by the input of [[alg-qa-16-controlled-consistency-reflection]].

## Proof

1.1 Let $\mathcal H=\operatorname{span}\{|start\rangle\}\oplus(\mathbb C^N\otimes K\otimes\mathbb C^2)$. The algorithm input requires $|start\rangle$ to be unit and orthogonal to every query mode; hence $|start\rangle\langle start|$ is the orthogonal projection onto its span. It also labels the standard address basis by $|i\rangle=e_{i-1}$, $i\in[N]$. Under the standard coordinate pairing in [F25], $\langle e_j,e_k\rangle=\sum_r\delta_{rj}\delta_{rk}=\delta_{jk}$, so these address vectors and the response basis vectors are orthonormal. Therefore the query summands $|i\rangle\langle i|\otimes I_K\otimes|x_i\rangle\langle x_i|$ are mutually orthogonal projections and are orthogonal to the start projection. Thus $\Pi_x$ is an orthogonal projection. [given, F25, algebra]

2.1 Append a clean scratch bit $u=0$. In query mode, call $O_x$ at address $i$ to write $u=x_i$. In start mode route the oracle address to a fixed $i_0\in[N]$ and apply $H$ to $u$ so the target is $|+\rangle$; since $X^{x_{i_0}}|+\rangle=|+\rangle$, the unconditional oracle call leaves start unchanged. Apply a fixed phase $-1$ exactly when $c=1$, the mode is a query state, and $z\ne u$; apply $+1$ on the start mode and when $c=0$. On query basis states this phase is $+1$ exactly when $z=x_i$, and $-1$ otherwise. [given, F21, F22, F23, step 1.1, algebra]

3.1 Call $O_x$ again at the same address to reset $u$ to $0$ in query mode, using $O_x^2=I$ from [F22]. In start mode the second call again fixes $|+\rangle$, and the final controlled $H$ returns $u$ to $|0\rangle$. For $c=1$ the induced operator on $\mathcal H$ is $2\Pi_x-I$; for $c=0$ it is $I$. Thus this fixed circuit realizes controlled $R_{\Pi_x}$ with the plus-on-range sign specified in [F24], without a controlled unknown-oracle call. By linearity the same control/data action holds for arbitrary superpositions with the scratch returned clean. [given, F22, F23, F24, step 1.1, step 2.1, algebra] ∎
