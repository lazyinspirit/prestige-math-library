---
id: ex-tgr-uniform-perfect-background
kind: example
title: "Uniform prescribed-background perfect material"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 8
proof_strategy: direct
deps:
  - post-tgr-perfect-fluid-model
  - def-tgr-framework-units
dependency_roles:
  post-tgr-perfect-fluid-model: physical-assumption
  def-tgr-framework-units: formulation-prerequisite
physical_scope: "Exact constant-state perfect-material solution on prescribed Minkowski spacetime and its boosted observer energy density; no Einstein backreaction, material universality, measurement, or nonconstant solution claim."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Éric Gourgoulhon, An Introduction to Relativistic Hydrodynamics, arXiv:gr-qc/0603009v1 (2006), §4.2 equations (4.6)–(4.9)"
      url: "https://arxiv.org/pdf/gr-qc/0603009"
      locator: "Full 37-page PDF; PDF pp. 14–15: perfect stress in the fluid rest frame and energy measured by a moving observer."
    - title: "Nicolas Borghini, Elements of Hydrodynamics, University of Bielefeld lecture notes (version of 2 September 2015), §IX.3.1"
      url: "https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics15/Hydrodynamics.pdf"
      locator: "Full 184-page PDF; PDF pp. 146–147: perfect particle four-current and stress-energy tensor in arbitrary frames and coordinates."
---

## Example

Choose Minkowski spacetime $\mathbb R^4$ with length coordinates $x^0=ct$, metric $g=\operatorname{diag}(-1,1,1,1)$, and its standard future cone. On a material state domain $X$, fix $(v_0,\sigma_0)\in X$ with the adopted state function $e$ and its derived constants $n_0=1/v_0$, $\varepsilon_0=n_0e(v_0,\sigma_0)$, $p_0=-e_v(v_0,\sigma_0)$, and $T_0=e_{\sigma_p}(v_0,\sigma_0)>0$. Let $u=(1,0,0,0)$ be the constant future unit observer field and adopt the perfect model of [[post-tgr-perfect-fluid-model]] on this prescribed background. Then the resulting homogeneous material is an exact solution of the local particle and stress balances.

For the constant future unit observer field $w=\gamma(1,\boldsymbol\beta)$, parameterize its boost relative to $u$ in this global Cartesian chart by the dimensionless vector $\boldsymbol\beta\in\mathbb R^3$ with $|\boldsymbol\beta|<1$, and put $\gamma=(1-|\boldsymbol\beta|^2)^{-1/2}$. The observer-projected energy density is
$$\varepsilon_{(w)}:=\mathsf T^{ab}w_aw_b=(\varepsilon_0+p_0)\gamma^2-p_0.$$
At zero boost this equals $\varepsilon_0$. The nonzero-boost value is a frame-dependent stress-energy prediction within the model, not an observation. Prescribing Minkowski geometry here does not make this nonzero-stress configuration a solution of the coupled Einstein equations.

## Facts & Assumptions

**Given:** Minkowski spacetime with signature $(-,+,+,+)$, a constant state $(v_0,\sigma_0)\in X$, the adopted perfect-fluid model on a prescribed background, and a dimensionless boost vector $\boldsymbol\beta$ with $|\boldsymbol\beta|<1$.

[F1] [[post-tgr-perfect-fluid-model]] (draft physical postulate): $J^a=nu^a$, $\mathsf T^{ab}=\varepsilon u^a u^b+p(g^{ab}+u^a u^b)$, and the local balance equations are adopted in the stated smooth regime. This example uses only the prescribed-background branch.

[F2] [[def-tgr-framework-units]]: use length coordinates $x^0=ct$ with $c>0$ in SI units, dimensionless unit observers satisfying $g(u,u)=-1$, and stress/energy densities in pascals ($\mathrm{J\,m^{-3}}$).

[A1] The background is fixed to Minkowski spacetime; no Einstein equation is imposed on it in this example.

[A2] The material state is spatially and temporally constant and lies in the open domain $X$; the boost satisfies $|\boldsymbol\beta|<1$.

## Verification

1.1 In the global Cartesian coordinates, $g_{ab}$ is constant. Let $\nabla_{\partial_a}\partial_b=\Gamma^d{}_{ab}\partial_d$. The coordinate fields commute, so torsion freedom in [F1] gives $\Gamma^d{}_{ab}=\Gamma^d{}_{ba}$; metric compatibility gives $\partial_ag_{bc}=\Gamma^d{}_{ab}g_{dc}+\Gamma^d{}_{ac}g_{bd}$. Writing this compatibility identity with the permutations $(a,b,c)$, $(b,a,c)$, and $(c,a,b)$, then adding the first two and subtracting the third, the terms with $\Gamma^d{}_{ac}$ and $\Gamma^d{}_{bc}$ cancel by symmetry and leave $2g_{cd}\Gamma^d{}_{ab}=\partial_ag_{bc}+\partial_bg_{ac}-\partial_cg_{ab}=0$. Nondegeneracy of $g$ gives $\Gamma^d{}_{ab}=0$. Since $u$, the state, $n_0$, $\varepsilon_0$, and $p_0$ are constant, $J^a=n_0u^a$ and $\mathsf T^{ab}=\varepsilon_0u^au^b+p_0(g^{ab}+u^au^b)$ have constant components. Their partial derivatives and every connection term vanish, so $\nabla_aJ^a=0$ and $\nabla_a\mathsf T^{ab}=0$. This verifies the adopted local balances on the prescribed background. [given, A1, A2, F1, algebra]

2.1 The vector $w=\gamma(1,\boldsymbol\beta)$ is future unit because $g(w,w)=\gamma^2(-1+|\boldsymbol\beta|^2)=-1$. Since $u\cdot w=-\gamma$ and $g^{ab}w_aw_b=-1$, contraction with the adopted stress gives $\mathsf T^{ab}w_aw_b=\varepsilon_0(u\cdot w)^2+p_0(g^{ab}+u^au^b)w_aw_b=\varepsilon_0\gamma^2+p_0(-1+\gamma^2)=(\varepsilon_0+p_0)\gamma^2-p_0$. When $\boldsymbol\beta=0$, $\gamma=1$ and this reduces to $\varepsilon_0$. [given, A2, F1, F2, step 1.1, algebra] ∎
