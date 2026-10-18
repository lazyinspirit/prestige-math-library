---
id: ex-pe11-unit-cube-maxwell-mode
kind: example
title: An explicit PEC standing wave in the unit cube
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

Let $\Omega=(0,1)^3$ and let $\epsilon,\mu>0$ be constant. The field
$$E(x,y,z)=(0,0,\sin(\pi x)\sin(\pi y))$$
is a nonzero PEC Maxwell eigenfield with eigenvalue
$\lambda=2\pi^2/(\epsilon\mu)$. It belongs to the full-kernel quotient gauge,
and the spectral approximation theorem places this eigenvalue in a convergent
discrete edge-element cluster. No claim is made that this eigenvalue is
simple.

## Facts & Assumptions

**Given:** the Axiom of Choice, Countable Choice, Dependent Choice, the unit cube, positive constants $\epsilon,\mu$, the real PEC curl-curl formulation and its full-kernel quotient gauge, and a shape-regular refining family $\{\mathcal T_{h_n}\}_{n\ge1}$ of matching affine tetrahedral meshes with $h_n\to0$. Assume the three supplier statements on regular decomposition ([[thm-na-regular-decomposition-zero-tangential-hcurl]]), discrete compactness ([[thm-na-discrete-compactness-and-poincare-lowest-order-nedelec]]) and uniformly bounded commuting cochain projections ([[thm-na-uniformly-bounded-commuting-cochain-projection]]) hold for this exact domain, PEC boundary convention and mesh family.

[F1] The eigenrelation is $(\mu^{-1}\operatorname{curl}E,\operatorname{curl}v)_{L^2} =\lambda(E,v)_\epsilon$ for every $v$ in the gauge space. ([[def-na-pe11-maxwell-cavity-eigenproblem]])

[F2] Compactly supported smooth vector fields are dense in $H_0(\operatorname{curl})$ in the graph norm. This is the zero-tangential space's closure definition. ([[def-na-zero-tangential-hcurl]])

[F3] The spectral approximation theorem gives full-multiplicity cluster convergence and no positive spectral pollution under its declared suppliers. ([[thm-pe11-edge-maxwell-spectral-approximation]])

[F4] Countable Choice is inherited through the theorem's compact spectral supplier; the item also retains its explicitly declared AC and DC branches. ([[def-axiom-of-choice]], [[def-countable-choice]], [[def-dependent-choice]])

[F5] The compact coercive solution operator has isolated positive eigenvalues of finite multiplicity. ([[thm-compact-coercive-form-spectrum-and-minmax]])

## Verification

1.1 Put $f(x,y)=\sin(\pi x)\sin(\pi y)$. On the faces $x=0,1$ and $y=0,1$, $E=0$, so its tangential component vanishes there; on $z=0,1$, $E$ is normal. To verify the closure convention in [F2], choose a smooth one-variable cutoff $\theta_\delta$ which is zero within distance $\delta$ of $0,1$, one beyond distance $2\delta$, and has derivative bounded by $C/\delta$. Let $\chi_\delta(x,y,z)=\theta_\delta(x)\theta_\delta(y)\theta_\delta(z)$. Then $E_\delta=\chi_\delta E\in C_c^\infty(\Omega;\mathbb R^3)$ and $\operatorname{curl}(E_\delta-E)=\nabla\chi_\delta\times E+(\chi_\delta-1)\operatorname{curl}E$. The $z$-derivative term in the cross product is zero because it is parallel to $E$; on an $x$- or $y$-boundary layer, the corresponding sine factor is $O(\delta)$ and cancels the $O(\delta^{-1})$ cutoff derivative. The remaining terms are bounded and supported in a layer of volume $O(\delta)$, so their $L^2$ norms tend to zero. Also $E_\delta\to E$ in $L^2$. Thus $E\in H_0(\operatorname{curl})$. [F2, given, construct, algebra]

1.2 Direct differentiation gives $\operatorname{div}E=0$, $\operatorname{curl}E=(\pi\sin(\pi x)\cos(\pi y),-\pi\cos(\pi x)\sin(\pi y),0)$, and $\operatorname{curl}\operatorname{curl}E=2\pi^2E$. For every compactly supported smooth test field $v$, distributional integration by parts yields $(\operatorname{curl}E,\operatorname{curl}v)_{L^2} =(\operatorname{curl}\operatorname{curl}E,v)_{L^2}$. By [F2] and continuity of both pairings, the identity extends to all $v\in H_0(\operatorname{curl})$. Hence [F1] holds with $\lambda=2\pi^2/(\epsilon\mu)$. Testing that identity with any $k\in K$ gives $0=\lambda(E,k)_\epsilon$, so $E\perp K$ and $E\in X$. [F1, F2, given, algebra]

2.1 The eigenvalue is positive and the field is nonzero. By [F5], its full continuous eigenspace cluster is approximated with its actual multiplicity; the argument makes no selection of an individual limiting discrete eigenvector. [F3, F4, F5, step 1.2] ∎
