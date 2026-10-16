---
id: alg-qa-21-segmented-taylor-simulation
kind: algorithm
title: Segmented Taylor LCU simulator
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - def-qa-21-truncated-taylor-lcu
  - def-qa-21-lcu-input-and-access-model
  - alg-qa-21-one-step-oblivious-amplification
  - thm-qa-21-taylor-tail-bound
  - thm-qa-21-lcu-block-correctness
  - def-qc-clean-and-dirty-ancillas
  - def-qc-circuit-cost-model
  - lem-qa-21-robust-one-step-oaa-isometry
justified_by: []
axiom_use: None; all term lists, registers, and circuits are finite.
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
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 28 §28.3
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Eqs. (28.5)–(28.25), printed pp.141–143: Taylor LCU, padding scale, and OAA block."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, §9.3.1"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Eqs. (9.4)–(9.5), printed pp.75–76: Taylor simulation by ordered unitary products and LCU."
---

## Definition

**Inputs:** A finite list $H=\sum_{j=0}^{m-1}a_jV_j$ on a nonzero finite-dimensional complex system space, where $m\ge1$, $a_j\in\mathbb R$ and each $V_j$ is a supplied Hermitian unitary; real time $t$ and a tolerance $0<\epsilon\le1$, each with a finite exact description. The description of $\epsilon$ supplies arbitrarily tight rational interval enclosures. Also supply the complete PREPARE/SELECT, inverse, and cost interfaces from [[def-qa-21-lcu-input-and-access-model]] for the Taylor list selected below. For the certified procedure the real descriptions supply arbitrarily tight rational interval enclosures for $S=\Lambda|t|$ and $S/\ln2$, where $\Lambda=\sum_j|a_j|$. Exact coefficient phases and the required unitary/circuit access for the selected list are separate supplied data; interval names alone do not provide them. Arithmetic, refinement, description and generation costs are charged separately. No efficient classical compiler is asserted.

For the **indexed term-query implementation**, additionally supply the complete unitary $T(|j\rangle\otimes x)=|j\rangle\otimes V_jx$ for $j<m$, acting as identity at padded term indices, together with every controlled or inverse form actually used and its separate costs. A call to this coherent multiplexer is one indexed term query. Individual accesses to the separate $V_j$ do not grant this operation: when it is assembled from individual controlled $V_j$, each multiplexed call uses $m$ equality-controlled individual calls, and all label tests, routing, phase gates and work are charged. With an independently supplied Taylor SELECT, only its declared internal resource record applies.

**Procedure:**

1. Refine an enclosure $[\epsilon_-,\epsilon_+]$ of $\epsilon$ until $0<\epsilon_-$ and $\epsilon_+\le2\epsilon_-$. Refine an enclosure $[S_-,S_+]$ of $S=\Lambda|t|$, intersecting with the known nonnegative half-line, until its width is less than $\epsilon_-/8$. If $S_+\le\epsilon_-/4$, return the exact identity circuit with no oracle calls and the certificate $S\le\epsilon/4$. Otherwise proceed to the segmented branch; no positive lower bound on $S$ is needed. These refinements terminate because $\epsilon>0$ and the supplied descriptions give arbitrarily tight rational enclosures. No exact equality test on interval-described reals is used; every $t=0$ or $\Lambda=0$ input takes the identity branch.
2. In the remaining branch put $q=S/\ln2$. In the ideal exact-arithmetic variant set $r=\max(1,\lceil q\rceil)$. In the certified variant refine an enclosure $[q_-,q_+]$ until its width is less than $1$, then set $r=\max(1,\lceil q_+\rceil)$. Either choice has $r\ge1$, $\Lambda|t|/r\le\ln2$, and $r<q+2$. Set $h=t/r$ and $\eta=\epsilon^2/(1600r^2)$. All refinement and segment-count costs are recorded.
3. Set $\eta_-:=\epsilon_-^2/(1600r^2)$, a positive rational lower bound for $\eta$. Set $n=1$ and successively double $n$ until the exact rational comparison $4/n!\le\eta_-$ holds; compute the factorial by finite integer multiplication and set $K=n-1$. This finite scheduler has no real-equality test or unbounded refinement at a fixed failed order. Since $x=\Lambda|h|\le\ln2<1$, the tail in [[thm-qa-21-taylor-tail-bound]] is at most $2/n!\le\eta_-/2\le\eta/2$. Its factorial estimate gives the stated logarithmic-over-double-logarithmic order, including the factor of at most two from doubling. Charge the factorial and coefficient arithmetic.
4. Expand $M_K(h)$ into the ordered product-term LCU list of [[def-qa-21-truncated-taylor-lcu]]. The certificate $\Lambda|h|\le\ln2$ and [[thm-qa-21-taylor-tail-bound]] prove $s_K\le2$ analytically. Add two distinct identity terms $+qI,-qI$ with $q=(2-s_K)/2$, retaining zero-weight padding labels if needed; the matrix is unchanged and the listed norm is exactly $2$. Under the indexed term-query implementation, implement each Taylor SELECT using at most $K$ controlled indexed term queries: process tuple positions from $K$ down to $1$, condition each call on a valid tuple having that position, and use its term label. Compute/uncompute those labels in charged work registers. This reverse execution order yields the displayed product $V_{j_1}\cdots V_{j_k}$. Apply the coefficient phase separately and act as identity on padding and unused labels. The adjoint SELECT reverses this sequence and uses the declared inverse calls.
5. For each of the $r$ segments, allocate a fresh clean register containing the expanded-term index and every PREPARE work wire. Build $W=P^\dagger S_{\rm sel}P$ using the exact coefficient phases and the padded invalid-index behavior. Apply the phase-corrected chronological circuit $W,R_0,W^\dagger,R_0,W$, with $R_0=I-2\Pi_0$ on the complete clean coefficient/work register. Thus the segment unitary is $-WR_0W^\dagger R_0W$, with two reflection calls, two forward $W$ calls, and one inverse call.
6. Compose the $r$ segment circuits in time order. Retain every segment's coefficient/work register in the output dilation; do not measure or claim exact cleanup. The output is the finite unitary/access-circuit description together with the chosen $r,K$, coefficient table or generator, and resource record.

The default procedure is uncontrolled. A controlled variant is defined only when controlled access to every component is supplied; the known minus sign is applied as a phase on the outer control, not discarded. If a compiled implementation is used, the per-call operator-norm error bounds $\delta_i$ must satisfy the certified sum $\sum_i\delta_i\le\delta_{\rm impl}\le\epsilon/2$. The exact-access variant has $\delta_{\rm impl}=0$. Every PREPARE, SELECT, inverse, reflection, control, coefficient, table, precision, wire, and gate cost remains explicit.
