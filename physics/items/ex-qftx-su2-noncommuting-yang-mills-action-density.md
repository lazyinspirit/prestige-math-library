---
id: ex-qftx-su2-noncommuting-yang-mills-action-density
kind: example
title: A noncommuting SU(2) configuration with nonzero Yang–Mills density
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
physical_scope: "A smooth noncommuting connection configuration in the adopted classical pure SU(2) model on the trivial bundle over Minkowski spacetime. It computes curvature and action density only and makes no field-equation or empirical claim."
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
      locator: "§2.1.1, printed pp. 28–29: the non-Abelian curvature and quadratic action conventions."
    - title: "Matthijs Vákár, Principal Bundles and Gauge Theories"
      url: "https://arxiv.org/html/2110.06334"
      locator: "§§1.3.1 and 2.6.5: Cartan curvature and the classical Yang–Mills density."
verification:
  precheck: pass
---

## Example

Specialize the adopted model to the trivial bundle
$P=\mathbb R^{1,3}\times SU(2)$ with its product section. Let $T_1,T_2,T_3$
be the normalized basis of the model, so $[T_1,T_2]=T_3$ and
$\kappa(T_3,T_3)=1$. For a constant $a\ne0$ with unit $\mathrm m^{-1}$, take
the smooth connection potential
$A=a(T_1\,dx^1+T_2\,dx^2)$. Its curvature is
$F=a^2T_3\,dx^1\wedge dx^2$, and its Lorentzian action density is
$-\frac{a^4}{2g_{\mathrm{YM}}^2}\,
dx^0\wedge dx^1\wedge dx^2\wedge dx^3$. This is a field configuration;
no stationarity or field-equation claim is made.

## Example references

[David Tong, Gauge Theory, Chapter 2, Yang-Mills Theory](https://davidtong.org/pdfs/teaching/gauge-theory/gauge2.pdf)

[Matthijs Vákár, Principal Bundles and Gauge Theories](https://arxiv.org/html/2110.06334)

## Facts & Assumptions

**Given:** The trivial-bundle specialization of the adopted pure $SU(2)$ model and the constant $a\ne0$.

[F1] [[post-qftx-nonabelian-yang-mills-model]]: the spacetime metric is $\operatorname{diag}(-1,1,1,1)$ with the stated orientation.

[A1] [[post-qftx-nonabelian-yang-mills-model]]: the action density is $-\kappa(F\wedge *_\eta F)/(2g_{\mathrm{YM}}^2)$ with fixed $g_{\mathrm{YM}}>0$.

[F2] Use the explicit matrices and trace form fixed in [[lem-qftx-su2-compact-nonabelian-invariant-form]]:
$T_1=\frac12\begin{pmatrix}0&-i\\-i&0\end{pmatrix}$,
$T_2=\frac12\begin{pmatrix}0&-1\\1&0\end{pmatrix}$,
$T_3=\frac12\begin{pmatrix}-i&0\\0&i\end{pmatrix}$, and
$\kappa(X,Y)=-2\operatorname{Tr}_2(XY)$. Direct multiplication gives
$T_1T_2=T_3/2$, $T_2T_1=-T_3/2$, and $T_3^2=-I_2/4$.
Consequently $[T_1,T_2]=T_1T_2-T_2T_1=T_3$ and
$\kappa(T_3,T_3)=-2\operatorname{Tr}_2(-I_2/4)=1$.
These finite matrix identities are established here without countable choice.

[F3] [[def-qftx-lie-algebra-valued-form-bracket]] and [[lem-qftx-principal-curvature-cartan-bianchi]]: local curvature is $F=dA+\frac12[A\wedge A]$ with the alternating-form bracket convention.

## Verification

1.1 The coefficients of $A$ are constant, so $dA=0$. The degree-one bracket convention gives
$\frac12[A\wedge A](\partial_1,\partial_2)
=[aT_1,aT_2]=a^2T_3$,
while its other independent coordinate components vanish. Thus
$F=a^2T_3\,dx^1\wedge dx^2$. If $a=0$, this same formula gives zero
curvature; the Statement assumes $a\ne0$. [F2, F3, algebra]

2.1 For the stated orientation and metric,
$*_\eta(dx^1\wedge dx^2)=dx^0\wedge dx^3$. Therefore
$\kappa(F\wedge *_\eta F)
=a^4\kappa(T_3,T_3)\,
dx^1\wedge dx^2\wedge dx^0\wedge dx^3
=a^4\,dx^0\wedge dx^1\wedge dx^2\wedge dx^3$;
the last reordering is even. Multiplying by the adopted coefficient gives
the stated action density. This verifies only a configuration and its
nonzero density; no Euler–Lagrange equation is asserted. [A1, F1, F2, step 1.1, algebra] ∎
