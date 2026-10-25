---
id: ex-qftx-su2-null-wave-yang-mills-solution
kind: example
title: A nonzero null plane-wave solution of the pure SU(2) model
status: "published"
origin: session
dependency_level: 4
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-nonabelian-yang-mills-model-examples
deps:
  - post-qftx-nonabelian-yang-mills-model
  - lem-qftx-su2-compact-nonabelian-invariant-form
  - def-qftx-lie-algebra-valued-form-bracket
  - lem-qftx-principal-curvature-cartan-bianchi
  - pthm-qftx-nonabelian-yang-mills-euler-lagrange
dependency_roles:
  post-qftx-nonabelian-yang-mills-model: physical-assumption
  lem-qftx-su2-compact-nonabelian-invariant-form: mathematical-premise
  def-qftx-lie-algebra-valued-form-bracket: mathematical-premise
  lem-qftx-principal-curvature-cartan-bianchi: mathematical-premise
  pthm-qftx-nonabelian-yang-mills-euler-lagrange: physical-result
physical_scope: "An exact smooth source-free classical solution of the adopted pure SU(2) model on the trivial bundle over Minkowski spacetime. It is a mathematical model solution, not an observed field or claim about nature."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "David Tong, Gauge Theory, Chapter 2, Yang-Mills Theory"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge2.pdf"
      locator: "§2.1.1, printed pp. 28–29: the Minkowski action and classical source-free equation."
    - title: "Matthijs Vákár, Principal Bundles and Gauge Theories"
      url: "https://arxiv.org/html/2110.06334"
      locator: "§2.6.5: compactly supported Yang–Mills variation and the covariant field equation."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Example

Specialize the adopted model to the trivial bundle
$P=\mathbb R^{1,3}\times SU(2)$ with its canonical section. Let
$q=x^0-x^3$, choose a length $\ell>0$ and a nonzero constant $b$ with unit
$\mathrm m^{-1}$, and set
$A=T_3 b\sin(q/\ell)\,dx^1$. Its curvature is
$F=T_3(b/\ell)\cos(q/\ell)(dx^0-dx^3)\wedge dx^1$, which is not identically
zero. With orientation $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$ and metric
$\eta=\operatorname{diag}(-1,1,1,1)$, this connection satisfies
$D_A(*_\eta F)=0$ and $\kappa(F\wedge *_\eta F)=0$. It is therefore a
stationary source-free solution of the adopted classical model; no
uniqueness, quantum, or empirical claim is made.

## Example references

[David Tong, Gauge Theory, Chapter 2, Yang-Mills Theory](https://davidtong.org/pdfs/teaching/gauge-theory/gauge2.pdf)

[Matthijs Vákár, Principal Bundles and Gauge Theories](https://arxiv.org/html/2110.06334)

## Facts & Assumptions

**Given:** The trivial-bundle specialization of the adopted pure $SU(2)$ model, $b\ne0$, and $\ell>0$.

[F1] [[post-qftx-nonabelian-yang-mills-model]]: the metric is $\operatorname{diag}(-1,1,1,1)$, the orientation is $dx^0\wedge dx^1\wedge dx^2\wedge dx^3$, and the action density uses the positive invariant form $\kappa$.

[F2] [[lem-qftx-su2-compact-nonabelian-invariant-form]]: $T_3\in\mathfrak{su}(2)$ and $\kappa(T_3,T_3)=1$.

[F3] [[def-qftx-lie-algebra-valued-form-bracket]] and [[lem-qftx-principal-curvature-cartan-bianchi]]: $F=dA+\frac12[A\wedge A]$ and $D_A\eta=d\eta+[A\wedge\eta]$.

[F4] [[pthm-qftx-nonabelian-yang-mills-euler-lagrange]]: within the adopted model, the source-free equation $D_A(*_\eta F)=0$ is equivalent to stationarity under all smooth compactly supported connection variations.

[A1] [[post-qftx-nonabelian-yang-mills-model]]: the local action density is $-\kappa(F\wedge *_\eta F)/(2g_{\mathrm{YM}}^2)$.

## Verification

1.1 Write $q=x^0-x^3$. Since the coefficient depends only on $q$,
$dA=T_3(b/\ell)\cos(q/\ell)(dx^0-dx^3)\wedge dx^1$. The bracket term
vanishes because $[T_3,T_3]=0$, so this is $F$; it is not identically zero
because $b\ne0$; if $b=0$, both the potential and curvature vanish.
[F1, F2, F3, algebra]

2.1 The Lorentzian Hodge operator for the stated orientation gives
$*_\eta((dx^0-dx^3)\wedge dx^1)=-(dx^0-dx^3)\wedge dx^2$. Hence
$*_\eta F=-T_3(b/\ell)\cos(q/\ell)(dx^0-dx^3)\wedge dx^2$. Its exterior
derivative vanishes because differentiating its coefficient contributes a
factor $(dx^0-dx^3)$ already present in the wedge product; the covariant
bracket term also vanishes because both Lie-algebra factors are $T_3$.
Thus $D_A(*_\eta F)=0$. The same repeated null one-form gives
$F\wedge *_\eta F=0$, so the action density vanishes. [A1, F1, F2, F3, step 1.1, algebra]

3.1 By [F4] and step 2.1, the connection is stationary under every
admissible compactly supported variation. The curvature is nonzero by step 1.1, so this is a nontrivial classical solution with zero Lorentzian
quadratic density. [F1, F4, step 1.1, step 2.1] ∎
