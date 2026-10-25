---
id: ex-qftx-su2-pure-gauge-yang-mills-action
kind: example
title: A nonzero pure-gauge potential with zero Yang–Mills density
status: draft
origin: session
dependency_level: 3
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-nonabelian-yang-mills-model-examples
deps:
  - post-qftx-nonabelian-yang-mills-model
  - lem-qftx-su2-compact-nonabelian-invariant-form
  - def-qftx-lie-algebra-valued-form-bracket
  - lem-qftx-principal-curvature-cartan-bianchi
dependency_roles:
  post-qftx-nonabelian-yang-mills-model: physical-assumption
  lem-qftx-su2-compact-nonabelian-invariant-form: mathematical-premise
  def-qftx-lie-algebra-valued-form-bracket: mathematical-premise
  lem-qftx-principal-curvature-cartan-bianchi: mathematical-premise
physical_scope: "A section-change example for the classical pure SU(2) Yang–Mills model on the trivial bundle over Minkowski spacetime. It is a classical gauge description, not an observation or quantum claim."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Matthijs Vákár, Principal Bundles and Gauge Theories"
      url: "https://arxiv.org/html/2110.06334"
      locator: "§§1.3.1, 2.1, and 2.6.5: right-action local potentials, bundle gauge transformations, and the classical action."
    - title: "David Tong, Gauge Theory, Chapter 2, Yang-Mills Theory"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge2.pdf"
      locator: "§2.1.2, printed pp. 30–31: local gauge transformation of the connection and adjoint covariance of curvature."
verification:
  precheck: pass
---

## Example

Specialize the adopted model to the trivial bundle
$P=\mathbb R^{1,3}\times SU(2)$ with canonical section $s$. Let
$T_3=-i\sigma_3/2$ and choose a length $\ell>0$. Change section to
$s^u(x)=s(x)u(x)$ with
$u(x)=\exp(T_3\sin(x^0/\ell))$. The connection whose potential in $s$ is
$A=0$ has potential in $s^u$
$A^u=u^{-1}du=T_3\ell^{-1}\cos(x^0/\ell)\,dx^0$, which is nonzero. Its
Cartan curvature and Yang–Mills action density are zero. This is a change
of gauge description of a classical connection, not a distinct physical
observation.

## Example references

[Matthijs Vákár, Principal Bundles and Gauge Theories](https://arxiv.org/html/2110.06334)

[David Tong, Gauge Theory, Chapter 2, Yang-Mills Theory](https://davidtong.org/pdfs/teaching/gauge-theory/gauge2.pdf)

## Facts & Assumptions

**Given:** The adopted pure $SU(2)$ model specialized to its trivial bundle, canonical section, and length parameter $\ell>0$.

[F1] [[post-qftx-nonabelian-yang-mills-model]]: each model instance may select the trivial bundle $P=\mathbb R^{1,3}\times SU(2)$, and the local curvature convention is $F=dA+\frac12[A\wedge A]$.

[F2] [[lem-qftx-su2-compact-nonabelian-invariant-form]]: $T_3$ lies in $\mathfrak{su}(2)$ and $[T_3,T_3]=0$.

[F3] [[def-qftx-lie-algebra-valued-form-bracket]] and [[lem-qftx-principal-curvature-cartan-bianchi]]: if two local sections satisfy $s_j=s_i g_{ij}$, then $A_j=\operatorname{Ad}_{g_{ij}^{-1}}A_i+g_{ij}^{-1}dg_{ij}$ and $F_j=dA_j+\frac12[A_j\wedge A_j]$.

[A1] [[post-qftx-nonabelian-yang-mills-model]]: the action density is $-\kappa(F\wedge *_\eta F)/(2g_{\mathrm{YM}}^2)$.

## Verification

1.1 The section-transition law in [F3], applied to $s^u=su$ and $A=0$, gives
$A^u=u^{-1}du$. Since $u=\exp(T_3\sin(x^0/\ell))$ and $T_3$ commutes with itself, differentiation yields
$u^{-1}du=T_3\ell^{-1}\cos(x^0/\ell)\,dx^0$. If the phase were constant,
the same formula would give the zero potential; the chosen sine has
nonzero derivative, so $A^u$ is nonzero. [F1, F2, F3, algebra]

2.1 The coefficient of $A^u$ depends only on $x^0$ and its one-form factor is $dx^0$, so $dA^u=0$. Every value of $A^u$ is proportional to $T_3$, hence $[A^u\wedge A^u]=0$ by [F2]. The Cartan formula in [F3] gives $F^u=0$, and therefore $\kappa(F^u\wedge *_\eta F^u)=0$. The asserted zero density is exact for this classical field. [A1, F1, F2, F3, step 1.1, algebra] ∎
