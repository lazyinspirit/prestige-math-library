---
id: def-qc-adaptive-measurement-pattern
kind: definition
title: "Finite open-graph adaptive measurement pattern"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-graph-state, def-qc-projective-measurement, def-qc-povm-and-outcome-law, def-qc-instrument-and-conditional-state, def-qc-circuit-syntax-and-register-order, def-qc-circuit-denotational-semantics, def-qc-classical-control-and-measurement-circuit, def-qc-elementary-circuit-resources, def-qc-tensor-register-and-permutation, def-qc-tensor-map, def-qc-pure-state-and-ray, def-qc-controlled-phase-rotation, def-qc-dirac-notation-conversion, def-qc-j-gate-and-equatorial-basis, lem-qc-j-basis-and-phase-identities]
justified_by: []
dependency_level: 9
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415, §20.6, pp. 178–180"
      url: https://arxiv.org/pdf/1907.09415
    - title: "Robert Raussendorf, Daniel E. Browne, and Hans J. Briegel, Measurement-based quantum computation on cluster states, arXiv:quant-ph/0301052, §§II D–F, pp. 8–16"
      url: https://arxiv.org/pdf/quant-ph/0301052
---

## Definition

An **open-graph adaptive measurement pattern** consists of an ordered finite
simple graph $G=(V,E)$, input and output subsets $I,O\subseteq V$, an ordering
$m_1,\ldots,m_q$ of $M:=V\setminus O$, basis-choice functions
$\alpha_j:\{0,1\}^{j-1}\to\mathbb R$, and a terminal correction function
$C:\{0,1\}^q\to U(\mathcal H_O)$. For each subset $S\subseteq V$, write
$\mathcal H_S:=\bigotimes_{v\in S}\mathbb C^2$ in inherited vertex order,
with $\mathcal H_\varnothing=\mathbb C$. The tensor register $\mathcal H_V$
and all wire permutations use the fixed vertex order. Let
$\Pi_{I,V\setminus I}:\mathcal H_V\to
\mathcal H_I\otimes\mathcal H_{V\setminus I}$ be the wire permutation listing
$I$ first and then $V\setminus I$, each in inherited order. Let
$a_+:\mathbb C\to\mathbb C^2$ be the linear map $c\mapsto c|+\rangle$, and
let $a_{+,V\setminus I}:=\bigotimes_{v\in V\setminus I}a_+$ in inherited
order. Using the empty-tensor identifications, define the ordered input map
$$\iota_I:=\Pi_{I,V\setminus I}^{-1} (I_{\mathcal H_I}\otimes a_{+,V\setminus I}): \mathcal H_I\to\mathcal H_V.$$
Thus the input is unchanged and each complementary vertex receives $|+\rangle$.
Apply $U_G:=\prod_{\{u,v\}\in E}^{\mathrm{lex}}CZ_{uv}$.
At step $j$, after transcript prefix $b_1,\ldots,b_{j-1}$, measure vertex
$m_j$ in the ordered basis $\{|b_j\rangle_{\alpha_j(b_{<j})}:b_j\in\{0,1\}\}$
from [[def-qc-j-gate-and-equatorial-basis]]. The measured systems are removed
and the vertices in $O$ are retained in their inherited order.

Let $\Pi_{M,O}$ be the tensor permutation listing $m_1,\ldots,m_q$ first and
the vertices of $O$ in inherited order. For a full transcript
$\mathbf b=(b_1,\ldots,b_q)$, define the linear measurement contraction
$$B_{\mathbf b}:= \left(\bigotimes_{j=1}^q {}_{\alpha_j(b_{<j})}\!\langle b_j|_{m_j}\right)\otimes I_{\mathcal H_O},$$
where the bras are the linear functionals from
[[def-qc-dirac-notation-conversion]], their tensor map is formed in
$m_1,\ldots,m_q$ order, so
$B_{\mathbf b}:\mathcal H_{m_1}\otimes\cdots\otimes\mathcal H_{m_q}
\otimes\mathcal H_O\to\mathcal H_O$. The scalar output
$\mathbb C^{\otimes q}$ is identified with
$\mathbb C$ by the tensor-unit convention. This tensor map is supplied by
[[def-qc-tensor-map]]; for $q=0$ its measured-register factor is the identity
on the empty tensor product. The branch map is the ordered composition

$$K_{\mathbf b}=B_{\mathbf b}\Pi_{M,O}U_G\iota_I: \mathcal H_I\to\mathcal H_O.$$

The measured systems are removed and the vertices in $O$ are retained in
their inherited order. This pattern uses $|V|$ qubit registers, its width in
the convention of [[def-qc-elementary-circuit-resources]]. Its projective
measurement count is $q$, counting one occurrence for each listed vertex
$m_j$. On a normalized pure input its
probability is $\|K_{\mathbf b}\psi\|^2$; for a density operator $\rho$ it is
$\operatorname{tr}(K_{\mathbf b}\rho K_{\mathbf b}^\dagger)$. The conditional
output is normalized only when that probability is positive. The corrected
branch is $C(\mathbf b)K_{\mathbf b}$; the correction does not change the
branch probability. This is a finite-dimensional mathematical circuit and
instrument semantics, with no physical postulate or implementation claim.

## Remarks

If $I=\varnothing$, the inputless resource is the graph state
$|G\rangle$. If $M=\varnothing$, the transcript is empty and no conditional
normalization occurs. A zero-probability transcript has no normalized
conditional output.
