---
id: cex-sr-orthogonal-complement-of-a-null-vector-is-not-positive-definite
kind: counterexample
title: "The orthogonal complement of a null vector need not be positive definite"
status: published
origin: session
domain: mathematics
dependency_level: 5
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
deps: [def-lorentz-form-and-inertia, def-causal-classification-of-lorentz-vectors, def-lorentz-orthogonality-and-orthogonal-complement, def-inertial-frame-and-inertial-chart]
dependency_roles:
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-lorentz-orthogonality-and-orthogonal-complement: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
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

## Statement refuted

Statement refuted: "for every nonzero displacement $u$ of a Lorentz vector
space the restriction of $\eta$ to $u^{\perp}$ is positive definite"
([[def-lorentz-orthogonality-and-orthogonal-complement]]).

## Facts & Assumptions

**Given:** An inertial frame of an oriented time-oriented affine Minkowski space $(A,V,\eta,C^+)$ with $\eta=\operatorname{diag}(-1,1,1,1)$ in the frame's coordinates, and the displacement $u=(1,1,0,0)$.

[L1] $\eta(v,v)=-(v^0)^2+(v^1)^2+(v^2)^2+(v^3)^2$ and $\eta(u,v)=-u^0v^0+u^1v^1+u^2v^2+u^3v^3$ in an $\eta$-orthonormal basis ([[def-inertial-frame-and-inertial-chart]], [[def-lorentz-form-and-inertia]]).

[L2] $u^{\perp}=\{v:\eta(u,v)=0\}$ is a linear subspace and $u\in u^{\perp}$ exactly when $\eta(u,u)=0$ ([[def-lorentz-orthogonality-and-orthogonal-complement]]).

[L3] A vector is null when it is nonzero with $\eta(v,v)=0$ ([[def-causal-classification-of-lorentz-vectors]]).

[L4] A symmetric bilinear form $B$ on a subspace $W$ is **positive semidefinite** when $B(v,v)\ge0$ for every $v\in W$; it is **positive definite** when $B(v,v)>0$ for every nonzero $v\in W$. Its **kernel** here means its radical, $\{v\in W:B(v,w)=0\text{ for all }w\in W\}$.

## Counterexample

1.1 For $u=(1,1,0,0)$ one has $\eta(u,u)=-1+1=0$ with $u\ne0$, so $u$ is null by [L3]. [L1, L3, algebra]

1.2 The orthogonality conditions $\eta(u,v)=0$ read $-v^0+v^1=0$, that is, $v^1=v^0$; on that hyperplane $\eta(v,v)=-(v^0)^2+(v^0)^2+(v^2)^2+(v^3)^2=(v^2)^2+(v^3)^2$. [L1, L2, algebra]

2.1 The expression $(v^2)^2+(v^3)^2$ of step 1.2 is nonnegative on $u^{\perp}$ and vanishes exactly when $v^2=v^3=0$, and then $v^1=v^0$ is free; thus the restriction is positive semidefinite by [L4]. For $v,w\in u^{\perp}$ its bilinear pairing is $\eta(v,w)=v^2w^2+v^3w^3$, since $v^1=v^0$ and $w^1=w^0$. Testing $w=e_2,e_3\in u^{\perp}$ shows its kernel consists exactly of vectors with $v^2=v^3=0$, namely $v=v^0u$. Therefore the kernel is the one-dimensional nonzero subspace $\operatorname{span}(u)$, and the restriction is not positive definite by [L4]. In particular $u$ itself is orthogonal to $u$, by [L2] and step 1.1, and is a nonzero vector of $u^{\perp}$ with $\eta(u,u)=0$. [step 1.1, step 1.2, L1, L2, L3, L4, algebra] ∎

## Remarks

The failure is exactly the one-dimensional kernel $\operatorname{span}(u)$ found above; the statement is refuted by the single vector $u$, which is a nonzero element of its own orthogonal complement. The timelike case is genuinely different, as the companion example [[ex-sr-orthogonal-complement-of-a-timelike-vector]] shows: the orthogonal complement of a timelike displacement is positive definite.
