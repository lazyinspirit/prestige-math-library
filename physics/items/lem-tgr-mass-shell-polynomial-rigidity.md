---
id: lem-tgr-mass-shell-polynomial-rigidity
kind: lemma
title: Mass-shell polynomial rigidity
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
deps: [def-lorentz-form-and-inertia, def-causal-classification-of-lorentz-vectors, def-time-orientation-and-future-causal-sets, lem-lorentz-form-has-orthonormal-basis, lem-timelike-cone-has-two-convex-components]
dependency_roles:
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  lem-lorentz-form-has-orthonormal-basis: mathematical-premise
  lem-timelike-cone-has-two-convex-components: mathematical-premise
sources:
  references:
    - title: "Rubén O. Acuña-Cárdenas, Carlos Gabarrete, and Olivier Sarbach, An introduction to the relativistic kinetic theory on curved spacetimes, §§III.3 and VI.2"
      url: "https://arxiv.org/pdf/2106.09235"
    - title: "David Tong, General Relativity, full Cambridge Part III lecture notes, §§2.1–2.2 and 4.3.1"
      url: "https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
---

## Statement

Let $(V,g,C^+)$ be a four-dimensional time-oriented Lorentz vector space of
signature $(-,+,+,+)$, with future cone $C^+$ as in
[[def-time-orientation-and-future-causal-sets]]. Let $M>0$ and let $A$ be a
symmetric bilinear form on $V$ and $b$ a covector. If
$$A(P,P)+b(P)=0\qquad\text{for every }P\in C^+\text{ with }g(P,P)=-M^2,$$
then $A=0$ and $b=0$. If instead this identity holds for every nonzero future
null vector $P\in\overline{C^+}$, then $b=0$ and $A=\lambda g$ for some
$\lambda\in\mathbb R$. The second clause is the exact massless conformal
exception.

## Facts & Assumptions

**Given:** The time-oriented Lorentz vector space and the symmetric form and
covector in the Statement.

[F1] There is a basis with Lorentz matrix $\operatorname{diag}(-1,1,1,1)$
([[lem-lorentz-form-has-orthonormal-basis]]). Replacing its timelike basis
vector by its negative when needed gives a future orthonormal basis because
the time orientation selects one of the two timelike components
([[def-time-orientation-and-future-causal-sets]],
[[lem-timelike-cone-has-two-convex-components]]).

[F2] In this basis $g(P,P)=-(P^0)^2+\sum_{i=1}^3(P^i)^2$, and the future
massive and null shells have respectively $P^0=\sqrt{M^2+|\mathbf q|^2}$,
$P^0>0$, and $P^0=|\mathbf q|>0$
([[def-lorentz-form-and-inertia]],
[[def-causal-classification-of-lorentz-vectors]]).

## Proof

1.1 In the future massive shell write $P=(E,rn)$, where
$E=\sqrt{M^2+r^2}$, $r>0$ and $n\in S^2$. Apply the assumed identity to
the two shell vectors $(E,rn)$ and $(E,-rn)$ and subtract. Dividing the
result by $2r>0$ gives
$2E A_{0i}n_i+b_i n_i=0$ for every $E>M$ and every unit $n$. For fixed $n$,
the left side is affine in $E$ and vanishes on an interval, so
$A_{0i}n_i=b_i n_i=0$; varying $n$ yields $A_{0i}=b_i=0$. [given, F1, F2, algebra]

1.2 On the future null cone write $P=\rho(1,n)$ with $\rho>0$ and
$n\in S^2$. The identity becomes
$\rho^2A((1,n),(1,n))+\rho b(1,n)=0$ for every $\rho>0$; comparing the two
polynomial coefficients gives $A((1,n),(1,n))=b(1,n)=0$. Replacing $n$ by
$-n$ in the covector equation gives $b_0=0$ and $b_i n_i=0$ for every $n$,
so $b=0$. [given, F2, algebra]

2.1 The remaining massive-shell identity is
$A_{00}(M^2+r^2)+r^2 n^TA_{\rm sp}n+b_0\sqrt{M^2+r^2}=0$, where
$A_{\rm sp}=(A_{ij})$. Varying $n$ shows $n^TA_{\rm sp}n$ is a constant
$a$ on $S^2$. Taking $n=e_i$ gives $A_{ii}=a$; taking
$n=(e_i+e_j)/\sqrt2$ gives $A_{ij}=0$ for $i\ne j$. With
$z=\sqrt{M^2+r^2}$ the remaining identity is
$(A_{00}+a)z^2+b_0z-aM^2=0$ for every $z>M$. A polynomial vanishing on
an interval has all coefficients zero; since $M>0$, this yields
$a=A_{00}=b_0=0$, hence $A=b=0$. [step 1.1, F2, algebra]

3.1 In the quadratic null-cone equation, comparing $n$ and $-n$ gives
$A_{0i}=0$. Its value on $e_i$ yields $A_{ii}=-A_{00}$, and its value on
$(e_i+e_j)/\sqrt2$ yields $A_{ij}=0$ for $i\ne j$. Thus
$A=\operatorname{diag}(A_{00},-A_{00},-A_{00},-A_{00})=\lambda g$ with
$\lambda=-A_{00}$. This proves the null clause and completes the lemma.
[step 1.2, algebra] ∎
