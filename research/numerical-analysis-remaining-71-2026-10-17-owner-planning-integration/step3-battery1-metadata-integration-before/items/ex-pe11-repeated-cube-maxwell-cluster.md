---
id: ex-pe11-repeated-cube-maxwell-cluster
kind: example
title: A repeated unit-cube Maxwell eigenvalue cluster
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 10
deps:
  - def-na-pe11-maxwell-cavity-eigenproblem
  - def-na-zero-tangential-hcurl
  - thm-pe11-edge-maxwell-spectral-approximation
  - thm-compact-coercive-form-spectrum-and-minmax
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
---

## Example

On the unit cube with constant $\epsilon,\mu>0$, the two fields
$$E_1=(0,0,\sin(\pi x)\sin(2\pi y)),\qquad E_2=(0,0,\sin(2\pi x)\sin(\pi y))$$
are independent PEC eigenfields with the same eigenvalue
$5\pi^2/(\epsilon\mu)$. Thus the continuous eigenspace at this value has
multiplicity at least two, and a convergent edge discretization must reproduce
the full cluster. The theorem asserts convergence of eigenspaces, not a
canonical choice of one eigenvector.

## Facts & Assumptions

**Given:** Countable Choice, the Axiom of Choice and Dependent Choice; the unit cube; constant $\epsilon,\mu>0$; the PEC curl-curl formulation; and a shape-regular refining family $\{\mathcal T_{h_n}\}_{n\ge1}$ of matching affine tetrahedral meshes with $h_n\to0$. Assume the three supplier statements on regular decomposition ([[thm-na-regular-decomposition-zero-tangential-hcurl]]), discrete compactness ([[thm-na-discrete-compactness-and-poincare-lowest-order-nedelec]]) and uniformly bounded commuting cochain projections ([[thm-na-uniformly-bounded-commuting-cochain-projection]]) hold for this exact domain, PEC boundary convention and mesh family.

[F1] The PEC eigenrelation is $(\mu^{-1}\operatorname{curl}E,\operatorname{curl}v)_{L^2} =\lambda(E,v)_\epsilon$ for every gauge test field. ([[def-na-pe11-maxwell-cavity-eigenproblem]])

[F2] The edge spectral theorem approximates every isolated positive eigenvalue with full multiplicity and converges the associated eigenspaces in $L^2$ gap. ([[thm-pe11-edge-maxwell-spectral-approximation]])

[F3] The compact coercive solution operator has isolated positive eigenvalues of finite multiplicity. ([[thm-compact-coercive-form-spectrum-and-minmax]])

[F4] The choice assumptions are hypotheses of the edge spectral theorem and its compact spectral suppliers. ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]])

[F5] $H_0(\operatorname{curl};\Omega)$ is the graph-norm closure of $C_c^\infty(\Omega;\mathbb R^3)$. ([[def-na-zero-tangential-hcurl]])

## Verification

1.1 For positive integers $m,n$, set $E_{m,n}=(0,0,\sin(m\pi x)\sin(n\pi y))$. It is divergence-free and its tangential component vanishes on $x=0,1$ and $y=0,1$ because its third component vanishes there; on $z=0,1$ it is normal. A product cutoff $\chi_\delta(x,y,z)$ vanishing within distance $\delta$ of the cube faces, equal to one outside the $2\delta$ boundary layer, and with derivatives $O(\delta^{-1})$ gives compactly supported smooth approximants $\chi_\delta E_{m,n}$. The $z$-derivative term crossed with $E_{m,n}$ is zero; on $x$ and $y$ layers the corresponding sine factor is $O(\delta)$, so $\|\nabla\chi_\delta\times E_{m,n}\|_2=O(\sqrt\delta)$. The remaining curl error is bounded on a layer of volume $O(\delta)$, hence tends to zero in $L^2$. Also $E_{m,n}-\chi_\delta E_{m,n}$ is bounded and supported in a layer of volume $O(\delta)$, so it tends to zero in $L^2$. Therefore $E_{m,n}\in H_0(\operatorname{curl})$. [F1, F5, given, construct, algebra]

1.2 Direct differentiation gives $\operatorname{curl}\operatorname{curl}E_{m,n} =\pi^2(m^2+n^2)E_{m,n}$. Testing against compactly supported smooth fields and integrating by parts proves the weak eigenrelation; by the closure definition [F5] and continuity of both pairings it holds for every PEC test field. Testing with each $k$ in the curl kernel gives $0=\lambda(E_{m,n},k)_\epsilon$, so the fields lie in the full-kernel gauge. [F1, F5, given, algebra]

1.3 The eigenvalue is positive and isolated by [F3]. [F3, given]

2.1 For $(m,n)=(1,2)$ and $(2,1)$ the eigenvalue is $\lambda=\pi^2(1^2+2^2)/(\epsilon\mu)=5\pi^2/(\epsilon\mu)$. Their mass inner product is zero because $\int_0^1\sin(\pi x)\sin(2\pi x)\,dx=0$; hence they are linearly independent and the eigenspace multiplicity is at least two. [step 1.1, step 1.2, algebra]

3.1 Apply [F2] to the full eigenspace cluster: exactly its actual multiplicity of discrete eigenvalues converges to this value and the discrete eigenspaces converge in gap. The explicit two orthogonal modes show the multiplicity is at least two; no individual basis vector is selected by the theorem. [F2, F4, step 2.1, step 1.3] ∎
