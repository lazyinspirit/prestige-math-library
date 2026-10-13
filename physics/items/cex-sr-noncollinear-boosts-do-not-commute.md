---
id: cex-sr-noncollinear-boosts-do-not-commute
kind: counterexample
title: "Counterexample: noncollinear boosts do not commute"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 9
deps: [def-lorentz-boost, lem-collinear-boost-composition-and-velocity-addition,
       lem-boost-rotation-factorization,
       def-inertial-frame-and-inertial-chart,
       lem-lorentz-map-preserves-metric-and-causal-structure,
       lem-boost-is-proper-orthochronous-with-inverse]
dependency_roles:
  def-lorentz-boost: mathematical-premise
  lem-collinear-boost-composition-and-velocity-addition: mathematical-premise
  lem-boost-rotation-factorization: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  lem-lorentz-map-preserves-metric-and-causal-structure: mathematical-premise
  lem-boost-is-proper-orthochronous-with-inverse: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook), Section 1.4 'The Lorentz transformation' pp. 30-32 including Examples 11-14, Sections 2.3-2.4 'Additional postulates'/'Other axiomatizations' pp. 46-49, and Section 8.3 'Boosts and rotations' pp. 174-176; signature (+---) converted to (-+++) with x^0 = ct restored"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
---

## Statement refuted

The statement "for all $\boldsymbol\beta_1,\boldsymbol\beta_2\in\mathbb R^3$
with $|\boldsymbol\beta_i|<1$ the passive boosts satisfy
$B(\boldsymbol\beta_1)B(\boldsymbol\beta_2)=B(\boldsymbol\beta_2)B(\boldsymbol\beta_1)$"
is false.

## Facts & Assumptions

**Given:** An inertial frame with ordered basis $(e_0,e_1,e_2,e_3)$ and $\eta_0=\operatorname{diag}(-1,1,1,1)$, and the boost parameters $\boldsymbol\beta_1=(3/5,0,0)$ and $\boldsymbol\beta_2=(0,3/5,0)$.

[L1] For $0<|\boldsymbol\beta|<1$ the passive boost has matrix entries $B^0{}_0=\gamma$, $B^0{}_i=B^i{}_0=-\gamma\beta_i$ and $B^i{}_j=\delta^i{}_j+\frac{\gamma-1}{|\boldsymbol\beta|^2}\beta_i\beta_j$ in the frame's basis, with $\gamma=(1-|\boldsymbol\beta|^2)^{-1/2}$; for $\boldsymbol\beta=\mathbf0$ one defines $B(\mathbf0)=\operatorname{id}_V$, whose matrix is $I_4$ ([[def-lorentz-boost]]).

[L2] For boosts in a common unit direction $e$ one has $B(\beta_1e)B(\beta_2e)=B\bigl(\frac{\beta_1+\beta_2}{1+\beta_1\beta_2}e\bigr)$ and the two collinear boosts commute ([[lem-collinear-boost-composition-and-velocity-addition]]).

[L3] Every $B(\boldsymbol\beta)$ is a proper orthochronous Lorentz map, and products of Lorentz maps are Lorentz maps; the proper orthochronous Lorentz maps form a group ([[lem-boost-is-proper-orthochronous-with-inverse]], [[lem-lorentz-map-preserves-metric-and-causal-structure]]).

[L4] The decomposition $L=B(-\boldsymbol\beta)\widehat R$ of a proper orthochronous Lorentz map into a boost and a spatial rotation, with $\boldsymbol\beta=u_{\mathrm{vec}}/u^0$ for $u=Le_0$, is unique, and its rotation factor is the identity if and only if $L$ is a passive boost ([[lem-boost-rotation-factorization]]).

[L5] Coordinates of the frame are read in the ordered basis $(e_0,e_1,e_2,e_3)$ ([[def-inertial-frame-and-inertial-chart]]).



## Counterexample

1.1 For $\boldsymbol\beta_1=(3/5,0,0)$ and $\boldsymbol\beta_2=(0,3/5,0)$ one has $|\boldsymbol\beta_1|=|\boldsymbol\beta_2|=3/5$ and $\gamma=(1-9/25)^{-1/2}=5/4$, while $(\gamma-1)/|\boldsymbol\beta_i|^2=(1/4)/(9/25)=25/36$; substituting into [L1] gives $B(\boldsymbol\beta_1)=\begin{pmatrix}5/4&-3/4&0&0\\ -3/4&5/4&0&0\\ 0&0&1&0\\ 0&0&0&1\end{pmatrix}$ and $B(\boldsymbol\beta_2)=\begin{pmatrix}5/4&0&-3/4&0\\ 0&1&0&0\\ -3/4&0&5/4&0\\ 0&0&0&1\end{pmatrix}$: the contributions $(25/36)\beta_i\beta_j$ place the entries $25/36\cdot9/25=1/4$ on the diagonal blocks, giving $5/4$ on each boosted spatial diagonal and leaving the transverse directions at $1$. [L1, L5, algebra]

2.1 By matrix multiplication, $B(\boldsymbol\beta_1)B(\boldsymbol\beta_2)=\begin{pmatrix}25/16&-3/4&-15/16&0\\ -15/16&5/4&9/16&0\\ -3/4&0&5/4&0\\ 0&0&0&1\end{pmatrix}$: the first row is $5/4$ times the first row of $B(\boldsymbol\beta_2)$ plus $-3/4$ times its second row, giving $(25/16,0,-15/16,0)+(0,-3/4,0,0)$, and the remaining rows are computed the same way from the displayed matrices. Reversing the order gives $B(\boldsymbol\beta_2)B(\boldsymbol\beta_1)=\begin{pmatrix}25/16&-15/16&-3/4&0\\ -3/4&5/4&0&0\\ -15/16&9/16&5/4&0\\ 0&0&0&1\end{pmatrix}$. [step 1.1, algebra]

3.1 The two products differ in the $(0,1)$ entry ($-3/4$ versus $-15/16$), the $(0,2)$ entry ($-15/16$ versus $-3/4$) and the $(2,1)$ entry ($0$ versus $9/16$); a single differing entry already refutes the asserted commutation, so $B(\boldsymbol\beta_1)B(\boldsymbol\beta_2)\neq B(\boldsymbol\beta_2)B(\boldsymbol\beta_1)$ and the group of proper orthochronous Lorentz maps is not abelian. This is consistent with [L2], which asserts commutation only for boosts in a common direction, and the counterexample makes no claim that the two products fail to be Lorentz maps: both are proper orthochronous Lorentz maps as products of such maps by [L3]. [L2, L3, step 1.1, step 2.1, algebra]

4.1 The result is consistent with [L2], which asserts commutation only for boosts along one common direction, and with [L4], which factors any proper orthochronous Lorentz map as a boost times a spatial rotation: the product $L:=B(\boldsymbol\beta_1)B(\boldsymbol\beta_2)$ is a proper orthochronous Lorentz map by [L3], so [L4] represents it as such a product, and no contradiction with the collinear law arises. The counterexample itself proves only the noncommutation asserted in the refuted statement, namely that the group of proper orthochronous Lorentz maps is not abelian. [L2, L3, L4, step 3.1, algebra] ∎
