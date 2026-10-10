---
id: ex-sr-orthogonal-complement-of-a-timelike-vector
kind: example
title: "Worked orthogonal complement of a timelike displacement is positive definite"
status: draft
origin: session
domain: mathematics
dependency_level: 5
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
deps: [def-lorentz-form-and-inertia, def-causal-classification-of-lorentz-vectors, def-lorentz-orthogonality-and-orthogonal-complement, def-inertial-frame-and-inertial-chart, def-time-orientation-and-future-causal-sets, lem-timelike-cone-has-two-convex-components, thm-cauchy-schwarz-and-the-euclidean-norm, def-euclidean-inner-product]
dependency_roles:
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
sources:
  references:
    - title: "K. Conrad, Bilinear Forms (orthogonality, radicals, inertia)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/bilinearform.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Example

Worked computation. In an inertial frame of an oriented time-oriented affine
Minkowski space $(A,V,\eta,C^+)$, with $\eta=\operatorname{diag}(-1,1,1,1)$ in
the frame's coordinates, take the displacement

$$u=(2,1,0,0),$$

a future timelike displacement with $\eta(u,u)=-3$. A displacement
$v=(v^0,v^1,v^2,v^3)$ is $\eta$-orthogonal to $u$ exactly when
$-2v^0+v^1=0$, that is, exactly when $v^1=2v^0$. On that hyperplane

$$\eta(v,v)=-(v^0)^2+(2v^0)^2+(v^2)^2+(v^3)^2=3(v^0)^2+(v^2)^2+(v^3)^2,$$

which is nonnegative and vanishes exactly at $v=0$. Hence the restriction of
$\eta$ to $u^{\perp}$ is positive definite, and every nonzero displacement
orthogonal to a timelike displacement is spacelike.

## Facts & Assumptions

**Given:** An inertial frame with $\eta=\operatorname{diag}(-1,1,1,1)$ in its
coordinates, and the displacement $u=(2,1,0,0)$.

[L1] $\eta(v,w)=-v^0w^0+v^1w^1+v^2w^2+v^3w^3$ in an $\eta$-orthonormal basis,
so $\eta(v,v)=-(v^0)^2+(v^1)^2+(v^2)^2+(v^3)^2$
([[def-inertial-frame-and-inertial-chart]]).

[L2] $u\perp v$ means $\eta(u,v)=0$, and
$u^{\perp}=\{v:\eta(u,v)=0\}$ is a linear subspace
([[def-lorentz-orthogonality-and-orthogonal-complement]]).

[L3] A vector is timelike, null or spacelike according as $\eta(v,v)$ is
negative, zero with $v\ne0$, or positive
([[def-causal-classification-of-lorentz-vectors]]).

[L4] The future closed cone is
$\{v:v^0\ge\lvert v_{\mathrm{vec}}\rvert\}$, so a timelike vector with
$v^0>\lvert v_{\mathrm{vec}}\rvert$ is future timelike
([[def-time-orientation-and-future-causal-sets]],
[[lem-timelike-cone-has-two-convex-components]]).

[L5] For $x,y\in\mathbb R^3$ one has
$\lvert\langle x,y\rangle\rvert\le\lVert x\rVert_2\lVert y\rVert_2$, where
$\langle\cdot,\cdot\rangle$ and $\lVert\cdot\rVert_2$ are the Euclidean inner
product and norm of $\mathbb R^3$
([[thm-cauchy-schwarz-and-the-euclidean-norm]],
[[def-euclidean-inner-product]]).

## Verification

**Proof technique:** direct computation with the diagonal form.

1.1 Evaluating the form on $u$ against $v$, $\eta(u,v)=-2v^0+v^1$, so the orthogonality condition $\eta(u,v)=0$ is $v^1=2v^0$ and $u^{\perp}$ is that hyperplane by [L2]. [L1, L2, algebra]

2.1 On $u^{\perp}$, substituting $v^1=2v^0$ into the quadratic form gives $\eta(v,v)=-(v^0)^2+4(v^0)^2+(v^2)^2+(v^3)^2=3(v^0)^2+(v^2)^2+(v^3)^2$, a sum of nonnegative terms; it vanishes exactly when $v^0=v^2=v^3=0$, and then also $v^1=2v^0=0$, so $v=0$. Hence the restriction of $\eta$ to $u^{\perp}$ is positive definite. [step 1.1, L1, algebra]

3.1 Every nonzero $v\in u^{\perp}$ is spacelike by step 2.1 and [L3]; moreover $u$ itself is future timelike by [L4], since $\eta(u,u)=-3<0$ and $u^0=2>1=\lvert u_{\mathrm{vec}}\rvert$. Thus the orthogonal complement of this timelike displacement is genuinely positive definite, in contrast with the null case. [step 1.1, step 2.1, L1, L2, L3, L4, algebra]

4.1 For the general clause of the Example, let $\tilde u=(\tilde u^0,\tilde u_{\mathrm{vec}})$ be any timelike displacement and let $w=(w^0,w_{\mathrm{vec}})\neq0$ satisfy $\eta(\tilde u,w)=0$. Timelikeness gives $\lvert\tilde u^0\rvert>\lvert\tilde u_{\mathrm{vec}}\rvert$ by [L1] and [L3], and orthogonality gives $\tilde u_{\mathrm{vec}}\cdot w_{\mathrm{vec}}=\tilde u^0w^0$. Suppose, for contradiction, that $\eta(w,w)\le0$; then $\lvert w_{\mathrm{vec}}\rvert\le\lvert w^0\rvert$, and $w_{\mathrm{vec}}\neq0$, because $w_{\mathrm{vec}}=0$ would give $\tilde u^0w^0=0$ and hence $w=0$, contradicting $w\neq0$. Cauchy–Schwarz [L5] now yields the contradictory chain $\lvert\tilde u^0\rvert\lvert w^0\rvert=\lvert\tilde u_{\mathrm{vec}}\cdot w_{\mathrm{vec}}\rvert\le\lvert\tilde u_{\mathrm{vec}}\rvert\lvert w_{\mathrm{vec}}\rvert<\lvert\tilde u^0\rvert\lvert w_{\mathrm{vec}}\rvert\le\lvert\tilde u^0\rvert\lvert w^0\rvert$, where the strict inequality uses $\lvert\tilde u_{\mathrm{vec}}\rvert<\lvert\tilde u^0\rvert$ and $w_{\mathrm{vec}}\neq0$ and the last inequality uses $\lvert w_{\mathrm{vec}}\rvert\le\lvert w^0\rvert$. Hence $\eta(w,w)>0$, that is, every nonzero displacement orthogonal to a timelike displacement is spacelike by [L3]. [step 3.1, L1, L2, L3, L5, algebra] ∎
