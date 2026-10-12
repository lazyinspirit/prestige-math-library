---
id: cex-gr-half-trace-subtraction-on-the-rest-space
kind: counterexample
title: "The half-trace subtraction with the rank-three spatial projector is not trace-free"
status: draft
origin: session
domain: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-wave-screen-and-tt-projection, lem-gr-tt-screen-projector, def-gr-minkowski-model-and-inertial-chart, def-gr-observer-and-rest-space, def-gr-inverse-metric-and-musical-isomorphisms]
dependency_roles:
  def-gr-wave-screen-and-tt-projection: mathematical-premise
  lem-gr-tt-screen-projector: mathematical-premise
  def-gr-minkowski-model-and-inertial-chart: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 6 (6.55)-(6.57): the four-dimensional projector P_{mu nu} = eta_{mu nu} - n_mu n_nu and the transverse-traceless projection with the half-trace subtraction, printed pp. 151-152 (PDF pp. 158-159)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), section 5.2.1 (5.21)-(5.22): the transverse-traceless conditions restricted to the two-dimensional screen of the wave, printed pp. 211-212 (PDF pp. 218-219)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: pass
---
## Statement refuted

**Statement refuted:** "Let $n$ be an observer and $s$ a propagation
direction of the flat model, let $h^a{}_b=\delta^a{}_b+n^an_b$ be the spatial
projector of clause (a) of [[def-gr-wave-screen-and-tt-projection]], let
$h_{ab}=\eta_{ac}h^c{}_b$, and let $A$ be any symmetric covariant
$2$-tensor with $A(n,\cdot)=0$. Then the tensor

$$A^{\mathrm{TT}}:=h_a{}^ch_b{}^dA_{cd}-\tfrac12\,h_{ab}\,h^{cd}A_{cd}$$

is transverse-traceless: $A^{\mathrm{TT}}(n,\cdot)=0$, $A^{\mathrm{TT}}(s,\cdot)=0$ and $\eta^{ab}A^{\mathrm{TT}}_{ab}=0$."

## Facts & Assumptions

**Given:** The flat model with inertial chart, the observer $n=\partial_0$ and propagation direction $s=\partial_3$, the spatial projector $h^a{}_b=\delta^a{}_b+n^an_b$ and the symmetric spatial tensor $A=\operatorname{diag}(0,1,1,0)$.

[L1] In the basis $(e_0,e_1,e_2,e_3)$ with $e_0=n$, $e_3=s$, the spatial projector of $n$ has components $h^a{}_b=\operatorname{diag}(0,1,1,1)$ and $h_{ab}=\eta_{ac}h^c{}_b=\operatorname{diag}(0,1,1,1)$; it fixes every spatial tensor, $h_a{}^ch_b{}^dA_{cd}=A_{ab}$ whenever $A(n,\cdot)=0$ ([[def-gr-wave-screen-and-tt-projection]] clause (a), [[lem-gr-tt-screen-projector]] clause (a), [[def-gr-observer-and-rest-space]], [[def-gr-inverse-metric-and-musical-isomorphisms]]).

[L2] For the rank-two screen projector $p=\operatorname{diag}(0,1,1,0)$ of the same pair, $p_a{}^cp_b{}^dA_{cd}=A$ for the tensor $A$ above, $p^{cd}A_{cd}=A_{11}+A_{22}=2$ and the screen TT projection is $\Pi_{n,s}(A)=A-\tfrac12\cdot2\,p=\operatorname{diag}(0,1,1,0)-\operatorname{diag}(0,1,1,0)=0$ ([[lem-gr-tt-screen-projector]] clauses (b)-(d), [[def-gr-wave-screen-and-tt-projection]] clause (b)).

## Counterexample

Work in the inertial chart of the flat model with $n=\partial_0$,
$s=\partial_3$, and take the symmetric spatial tensor

$$(A_{ab})=\operatorname{diag}(0,1,1,0)$$

(the screen projector of the pair $(n,s)$; in particular $A(n,\cdot)=0$).
Then

$$A^{\mathrm{TT}}=\operatorname{diag}(0,0,0,-1),$$

which is spatial, $A^{\mathrm{TT}}(n,\cdot)=0$, but is not transverse to $s$, since $A^{\mathrm{TT}}(s,s)=-1$, and
has trace $\eta^{ab}A^{\mathrm{TT}}_{ab}=\eta^{33}(-1)=-1\ne0$; so it is not
trace-free.

1.1 (The "half-trace" tensor.) By [L1], $h_a{}^ch_b{}^dA_{cd}=A$ because $A$ is spatial, and $h^{cd}A_{cd}=A_{11}+A_{22}+A_{33}=1+1+0=2$; hence $$A^{\mathrm{TT}}=A-\tfrac12\cdot2\,h=\operatorname{diag}(0,1,1,0)-\operatorname{diag}(0,1,1,1)=\operatorname{diag}(0,0,0,-1).$$ [L1, algebra]

2.1 (Failure of trace-freeness and the rank-two contrast.) The tensor $A^{\mathrm{TT}}=\operatorname{diag}(0,0,0,-1)$ kills $n=\partial_0$, but $A^{\mathrm{TT}}(s,s)=-1$ for $s=\partial_3$, so it is not propagation-transverse; its trace is $\eta^{ab}A^{\mathrm{TT}}_{ab}=\eta^{33}(-1)=-1\ne0$, so the asserted conclusion fails. By contrast, [L2] computes that the same half-trace formula with the rank-two screen projector gives $\Pi_{n,s}(A)=0$, which is trace-free: the failure is exactly the rank-three projector weight. This refutes the statement. [step 1.1, L2, algebra] ∎

## Remarks

- **The rank-two repair.** The contrast computed in step 2.1 shows which weight is correct: the same half-trace formula is trace-free precisely for the rank-two screen projector $p$, while the rank-three spatial projector fails it. The general identity is $\operatorname{tr}\bigl(q_a{}^cq_b{}^dA_{cd}-\tfrac12q_{ab}q^{cd}A_{cd}\bigr)=\bigl(1-\tfrac r2\bigr)q^{cd}A_{cd}$ for a projector $q$ of rank $r$, which vanishes only for $r=2$; this is why the half weight belongs to the two-dimensional screen and not to the three-dimensional rest space ([[lem-gr-tt-screen-projector]] remark).

- **Scope.** The counterexample concerns the algebraic projector formula in the flat model; it makes no statement about metric perturbations, field equations or observations.
