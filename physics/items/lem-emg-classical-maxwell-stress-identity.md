---
id: lem-emg-classical-maxwell-stress-identity
kind: lemma
title: "Maxwell stress divergence for classical fields"
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-emg-electrovacuum-cauchy-system
dependency_roles:
  def-emg-electrovacuum-cauchy-system: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "M. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, sections II.1–II.2"
      url: "https://arxiv.org/pdf/0907.1151"
      locator: "Context for Maxwell stress and its observer split. The finite-regularity identity with the local SI normalization is proved directly here."
verification:
  precheck: pending
---

## Statement

Let $M$ be a smooth Hausdorff, second-countable, oriented four-manifold, let
$g$ be a time-oriented $C^1$ Lorentzian metric of signature $(-,+,+,+)$, and
let $F$ be a real $C^1$ two-form with $dF=0$. Use the connection and stress
conventions of [[def-emg-electrovacuum-cauchy-system]], interpreted here by
their explicit coordinate formulas at this regularity. Fix $\mu_0>0$ and put

$$T^{\mathrm{EM}}_{ab}=\mu_0^{-1}\left(F_{ac}F_b{}^c-\tfrac14g_{ab}F_{cd}F^{cd}\right).$$

The Christoffel formula defines a continuous metric-compatible torsion-free
connection, $T^{\mathrm{EM}}$ is $C^1$, and the following continuous
pointwise identity holds:

$$\nabla_a(T^{\mathrm{EM}})^a{}_b=\mu_0^{-1}F_{bc}\nabla_aF^{ac}.$$

In particular, if a continuous vector field $J$ satisfies
$\nabla_aF^{ab}=-\mu_0J^b$, then
$\nabla^aT^{\mathrm{EM}}_{ab}=-F_{bc}J^c$. For $J=0$ the stress is
conserved. No Einstein equation, smoothness of $F$ beyond $C^1$, or global
potential/exactness hypothesis is needed.

At each point, for a future unit normal $n$ and a positively oriented
orthonormal spatial basis $(\mathsf e_i)$, set
$e_i=F(\mathsf e_i,n)$ and
$b_i=\tfrac12\epsilon_i{}^{jk}F(\mathsf e_j,\mathsf e_k)$, with
$\epsilon_{123}=1$. The algebraic observer identities are

$$T^{\mathrm{EM}}(n,n)=\frac{|e|^2+|b|^2}{2\mu_0},\qquad T^{\mathrm{EM}}(n,X)=-\frac{1}{\mu_0}\langle e\times b,X\rangle$$

for every spatial $X$. These formulas have the same signs and normalization
as the smooth electrovacuum convention. They assert no field existence or
regularity threshold for a coupled PDE.

## Facts & Assumptions

**Given:** The $C^1$ metric and closed two-form, positive $\mu_0$, and the
continuous sourced-divergence hypothesis only when that conclusion is used.

[F1] [[def-emg-electrovacuum-cauchy-system]] fixes
$T^{\mathrm{EM}}=\mu_0^{-1}(F_{ac}F_b{}^c-\tfrac14g_{ab}F_{cd}F^{cd})$,
$F_{0i}=-e_i$, $F_{ij}=\epsilon_{ijk}b_k$, and the sourced sign
$\nabla_aF^{ab}=-\mu_0J^b$. Its smooth-field domain is not used to infer
the classical identity below.

## Proof

**Proof technique:** differentiate the explicit tensor and contract the
closedness identity; check the observer projections by finite algebra.

1.1 In a chart the inverse matrix of $g$ is $C^1$. Its Christoffel formula
has continuous coefficients symmetric in its lower indices. Substitution
into $\nabla_ag_{bc}$ cancels the first metric derivatives and gives zero,
so raising indices commutes with the connection on $C^1$ tensors. The
antisymmetrized connection terms also cancel, giving
$\nabla_aF_{bc}+\nabla_bF_{ca}+\nabla_cF_{ab}=0$ from $dF=0$.
Multiplying by $F^{ac}$ and exchanging $a,c$ in the third term gives
$2F^{ac}\nabla_aF_{bc}=\tfrac12\partial_b(F_{cd}F^{cd})$. Every term is
continuous and uses only the stated first derivatives. [given, F1, algebra]

2.1 Raise the first stress index and differentiate by the product rule:
$\nabla_a(T^{\mathrm{EM}})^a{}_b=\mu_0^{-1}[(\nabla_aF^{ac})F_{bc}+F^{ac}\nabla_aF_{bc}-\tfrac14\partial_b(F_{cd}F^{cd})]$.
The last two terms cancel by step 1.1. Inserting the sourced equation then
gives $-F_{bc}J^c$; setting $J=0$ gives conservation. Metric compatibility
identifies this with $\nabla^aT^{\mathrm{EM}}_{ab}$. Thus the identity
holds at $C^1$ without applying a smooth-only stress theorem. [given, F1, step 1.1, algebra]

3.1 In the orthonormal basis, $F_{0i}=-e_i$ and
$F_{ij}=\epsilon_{ijk}b_k$, so
$F_{ab}F^{ab}=2(|b|^2-|e|^2)$. The $00$ component of
$F_{ac}F_b{}^c$ is $|e|^2$, and its $0i$ component is
$-e_j\epsilon_{ijk}b_k=-(e\times b)_i$.
Substitution into the stress formula gives its two displayed observer
projections. All calculations are at a single point, require no derivatives
of the basis, and apply also when either field is zero. [given, F1, algebra] ∎
