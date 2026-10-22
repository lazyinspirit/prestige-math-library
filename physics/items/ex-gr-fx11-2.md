---
id: ex-gr-fx11-2
kind: example
title: "Zero sampled constraint residual with unresolved smooth data"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - alg-gr-fx-periodic-wave-leapfrog
  - def-gr-fx-constraint-residual-diagnostic
  - def-abs-value
  - lem-of-abs-value
  - def-gr-fx-conformal-constraint-data
  - thm-gr-fx-lichnerowicz-reduction
  - def-countable-choice
  - prop-christoffel-formula-for-the-levi-civita-connection
  - def-curvature-of-an-affine-connection
  - cor-trigonometric-parity-and-pythagorean-identity
  - thm-sine-cosine-zero-sets-and-fundamental-period
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-and-cosine-derivatives
  - thm-chain-rule
dependency_roles:
  alg-gr-fx-periodic-wave-leapfrog: mathematical-premise
  def-gr-fx-constraint-residual-diagnostic: mathematical-premise
  def-abs-value: mathematical-premise
  lem-of-abs-value: mathematical-premise
  def-gr-fx-conformal-constraint-data: mathematical-premise
  thm-gr-fx-lichnerowicz-reduction: mathematical-premise
  def-countable-choice: mathematical-premise
  prop-christoffel-formula-for-the-levi-civita-connection: mathematical-premise
  def-curvature-of-an-affine-connection: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-sine-cosine-zero-sets-and-fundamental-period: mathematical-premise
  thm-quarter-turn-values-and-shift-formulas: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-chain-rule: mathematical-premise
physical_scope: "A mathematical aliasing example for the discrete constraint diagnostic. It is not a reported simulation, a measurement, or a claim that the sampled data admit a spacetime development."
sources:
  references:
    - title: "Éric Gourgoulhon, 3+1 Formalism and Bases of Numerical Relativity, Lecture Notes in Physics 846 (2012; author preprint arXiv:gr-qc/0703035v1), §§2.5, 4.4.3, 6.5.2–6.5.3 and 10.3.2; complete 220-page lecture notes"
      url: "https://arxiv.org/pdf/gr-qc/0703035"
    - title: "Helmut Friedrich and Alan Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), §§2.2 and 3.1; complete 97-page review"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "José Luis Jaramillo, Juan Antonio Valiente Kroon and Éric Gourgoulhon, From Geometry to Numerics, arXiv:0712.2332v2 (2008), §§3.2, 4.1–4.2 and 5.1; complete 72-page review"
      url: "https://arxiv.org/pdf/0712.2332"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Example

Let $N\ge4$ be even, let $N_2,N_3\ge3$, let $L_*>0$ be a length, and choose
$0<\varepsilon<1$. On $\mathbb T^3_{2\pi}$ with dimensionless angular
coordinates $x^i$, set
$$
\widetilde h=L_*^2\bigl((dx^1)^2+(dx^2)^2+(dx^3)^2\bigr),\qquad \widetilde\sigma=0,\qquad \tau=0,\qquad \phi_N(x)=1+\varepsilon\sin(Nx^1/2).
$$
Take the vacuum branch with $\Lambda=0$ and $\rho=j=0$. Fix any
$\kappa>0$ with the SI units specified by the discrete diagnostic; its value
drops out because $j=0$. The conformal data are
$h=\phi_N^4\widetilde h$ and $K=0$. Use a periodic mesh with
$N_1=N$ and counts $N_2,N_3$ in the other directions. Put
$\Delta_i=2\pi/N_i$ and use nodes
$x^i_{j_i}=2\pi j_i/N_i$, $0\le j_i<N_i$, with indices wrapped modulo each
$N_i$. For $i=1,2,3$, let $\mathbf e_i$ be the $i$th standard basis vector of
$\mathbb Z^3$. For a scalar grid array
$f_{\mathbf j}$, use the centered periodic maps
$$
(\delta_i f)_{\mathbf j}:= \frac{f_{\mathbf j+\mathbf e_i}-f_{\mathbf j-\mathbf e_i}}{2\Delta_i}, \qquad i=1,2,3,
$$
with indices reduced modulo $(N_1,N_2,N_3)$, and apply them componentwise.
For reconstruction, partition each periodic coordinate circle into the
half-open cells
$$
C_{\mathbf j}:=\prod_{i=1}^3 \left[\frac{2\pi(j_i-1/2)}{N_i}, \frac{2\pi(j_i+1/2)}{N_i}\right)\pmod{2\pi},
$$
and assign every component on $C_{\mathbf j}$ its value at node
$\mathbf j$. This specifies the piecewise-constant map
$\mathcal I_{\boldsymbol\Delta}$ in the constraint-residual definition.
For the reported residual arrays use uniform dimensionless weights
$w_{\mathbf j}:=(NN_2N_3)^{-1}$ and the norm
$$
\| (\mathcal H_{\boldsymbol\Delta},\mathcal M_{\boldsymbol\Delta})\|_{\boldsymbol\Delta,2} :=\left(\sum_{\mathbf j}w_{\mathbf j} \left(|\mathcal H_{\boldsymbol\Delta}(\mathbf j)|^2+ h^{ik}(\mathbf j)\mathcal M_{\boldsymbol\Delta,i}(\mathbf j) \mathcal M_{\boldsymbol\Delta,k}(\mathbf j)\right)\right)^{1/2}.
$$
The bars around the scalar residual denote the real absolute value. For the
sampled scalar and covector arrays, define the bilinear form
$$
\langle (H,M),(\widehat H,\widehat M)\rangle_{\boldsymbol\Delta}:=\sum_{\mathbf j}w_{\mathbf j}\left(H(\mathbf j)\widehat H(\mathbf j)+h^{ik}(\mathbf j)M_i(\mathbf j)\widehat M_k(\mathbf j)\right).
$$
At the nodes of this example $h^{ik}=L_*^{-2}\delta^{ik}$ and every
$w_{\mathbf j}=(NN_2N_3)^{-1}$ is positive. Hence this bilinear form is
positive definite on the finite-dimensional space of scalar and covector
grid arrays, and the displayed quantity is its induced norm. In the fixed SI
component convention, each summand has units $\mathrm m^{-4}$, so the norm has
units $\mathrm m^{-2}$.
The recorded mesh hierarchy for this diagnostic is the singleton containing
this grid; no refinement or convergence comparison is made.

The discrete residuals $\mathcal H_{\boldsymbol\Delta}$ and
$\mathcal M_{\boldsymbol\Delta}$ vanish at every grid node, so their stated
weighted norm is zero. However, the
continuum Hamiltonian residual at $x^1=\pi/N$ is
$$
\mathcal H(h,K)=\frac{2\varepsilon N^2}{L_*^2(1+\varepsilon)^5}>0.
$$
Thus a smooth high-frequency field can have the same samples and zero discrete
residual as flat data while violating the continuum constraint between grid
points. A small or vanishing grid residual alone does not certify continuum
constraint satisfaction or solution accuracy.

## Statement references

[[alg-gr-fx-periodic-wave-leapfrog]]

[[def-gr-fx-constraint-residual-diagnostic]]

[[def-abs-value]]

[[lem-of-abs-value]]

[[def-gr-fx-conformal-constraint-data]]

[[thm-gr-fx-lichnerowicz-reduction]]

[[def-countable-choice]]

[[prop-christoffel-formula-for-the-levi-civita-connection]]

[[def-curvature-of-an-affine-connection]]

[[cor-trigonometric-parity-and-pythagorean-identity]]

[[thm-sine-cosine-zero-sets-and-fundamental-period]]

[[thm-quarter-turn-values-and-shift-formulas]]

[[thm-sine-and-cosine-derivatives]]

[[thm-chain-rule]]

## Facts & Assumptions

**Given:** The Axiom of Countable Choice for the exact conformal-data supplier's embedded interpretation, an even mesh count $N\ge4$, the stated smooth conformal data, and the vacuum convention.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is the axiom that every countable family of nonempty sets has a choice function. It is retained because the conformal-data supplier includes the embedded Lorentzian interpretation; the algebraic grid example itself uses only the abstract data.

[F1] [[def-gr-fx-conformal-constraint-data]]: on a compact smooth three-manifold, $h=\phi^4\widetilde h$ and $K=\phi^{-2}\widetilde\sigma+(\tau/3)h$; vacuum means $\Lambda=0$ and zero stress-energy, and zero $\widetilde\sigma$ is transverse-traceless.

[F2] [[thm-gr-fx-lichnerowicz-reduction]]: for these data,
$$
\mathcal H(h,K)=\phi^{-5}\left(-8\widetilde\Delta\phi+\widetilde R\phi -|\widetilde\sigma|_{\widetilde h}^2\phi^{-7}+\frac23\tau^2\phi^5\right).
$$

[F3] [[alg-gr-fx-periodic-wave-leapfrog]]: the periodic coordinate grid has nodes $x_j=2\pi j/N$ in its first circle factor.

[F4] [[def-gr-fx-constraint-residual-diagnostic]]: the discrete derivatives annihilate constant arrays, the signed vacuum scalar residual is $R_{\boldsymbol\Delta}+\tau_{\boldsymbol\Delta}^2-|K|^2_{\boldsymbol\Delta}$, and the reconstruction map acts from admissible metric/extrinsic-curvature grid arrays to pointwise fields on the periodic torus without a smoothness claim.

[F5] [[prop-christoffel-formula-for-the-levi-civita-connection]], [[def-curvature-of-an-affine-connection]]: Christoffel symbols are given by the first-derivative metric formula, and curvature is the derivative-plus- quadratic expression in those symbols.

[F6] [[cor-trigonometric-parity-and-pythagorean-identity]], [[thm-sine-cosine-zero-sets-and-fundamental-period]], [[thm-quarter-turn-values-and-shift-formulas]]: $|\sin x|\le1$, $\sin(\pi j)=0$ for integer $j$, and $\sin(\pi/2)=1$.

[F7] [[thm-sine-and-cosine-derivatives]], [[thm-chain-rule]]: the second derivative of $x\mapsto\sin(Nx/2)$ is $-(N/2)^2\sin(Nx/2)$.

[F8] [[def-abs-value]]: for real $x$, $|x|=x$ if $x\ge0$ and $|x|=-x$ if $x<0$.

[F9] [[lem-of-abs-value]]: $|x|\ge0$ and $|x|=0$ exactly when $x=0$; in particular, $|0|=0$.

## Verification

**Given:** The mesh, parameter $L_*$, amplitude $\varepsilon$, and the vacuum conformal data and discrete reconstruction in the Example.

1.1 Since $N/2$ is an integer, $\phi_N$ is $2\pi$-periodic. By [F6], $\phi_N\ge1-\varepsilon>0$. The flat seed metric is smooth positive-definite; $\widetilde\sigma=0$ is symmetric, trace-free and divergence-free, and $\tau=0$ is constant. Thus the data satisfy [F1] and $h=\phi_N^4\widetilde h$, $K=0$. [given, A1, F1, F6, algebra]

2.1 At each first-coordinate grid node $x^1_j=2\pi j/N$, [F6] gives $\phi_N(x_j)=1$. The sampled arrays therefore have $h_{ij}=L_*^2\delta_{ij}$, $h^{ik}=L_*^{-2}\delta^{ik}$, $K_{ij}=0$, $\rho=j=\Lambda=0$. Since the discrete derivatives annihilate these constant arrays, the discrete connection and curvature formulas of [F4] give zero; [F4] then gives $\mathcal H_{\boldsymbol\Delta}=\mathcal M_{\boldsymbol\Delta}=0$ at every node. By [F8, F9], each scalar term $|\mathcal H_{\boldsymbol\Delta}(\mathbf j)|^2=|0|^2=0$, and the covector term is zero because $\mathcal M_{\boldsymbol\Delta}=0$. The induced norm of this zero array is therefore zero. The specified piecewise-constant reconstruction of these samples is flat. [given, F3, F4, F6, F8, F9, step 1.1, algebra]

2.2 In the lifted angular coordinates the coefficients of $\widetilde h$ are constant. The Christoffel formula in [F5] therefore gives $\widetilde\Gamma^k{}_{ij}=0$, and the curvature formula in [F5] gives $\widetilde R=0$. Thus $\widetilde\Delta\phi_N=L_*^{-2}\partial_1^2\phi_N$. By [F7], $$ \widetilde\Delta\phi_N=-\frac{\varepsilon N^2}{4L_*^2}\sin(Nx^1/2). $$ At $x^1=\pi/N$, [F6] gives $\phi_N=1+\varepsilon$ and $\sin(Nx^1/2)=1$. Substituting $\widetilde\sigma=0$, $\tau=0$ and this Laplacian into [F2] gives $\mathcal H(h,K)=2\varepsilon N^2/[L_*^2(1+\varepsilon)^5]>0$. [given, F2, F5, F6, F7, step 1.1, algebra]

3.1 Step 2.1 and step 2.2 exhibit identical grid data with zero discrete residuals and a smooth continuum representative with a nonzero exact Hamiltonian residual. The reconstruction and finite differences cannot identify the unresolved sine mode from these samples; the residual therefore does not certify continuum constraint satisfaction. [step 2.1, step 2.2, F3, F4] ∎
