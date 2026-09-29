---
id: ex-twisting-sheaf-projective-line-transitions
kind: example
title: "Twist transitions on the projective line"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - thm-twisting-sheaf-invertible-standard-graded
  - thm-projective-space-as-proj
  - def-twisting-sheaf-proj
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Sections 27.8-27.21"
      url: https://stacks.math.columbia.edu/download/constructions.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Sections 4.5, 7.4, 9.3, 10.6, 17.4, 17.6, 18.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
    - title: "Gao-Zhang, Lectures on Algebraic Geometry, Chapter 5"
      url: https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field and $S=k[x_0,x_1]$ with $\deg x_0=\deg x_1=1$, so that
$\mathbb P^1_k=\operatorname{Proj}S$ with charts $U_0=D_+(x_0)$ and
$U_1=D_+(x_1)$, and let $t=x_1/x_0$, the coordinate on $U_0$. Then for every
integer $n$ the twisting sheaf $\mathcal O(n)=\widetilde{S(n)}$ has frames
$$e_0=x_0^{\,n}\ \text{on }U_0,\qquad e_1=x_1^{\,n}\ \text{on }U_1,$$
and on the overlap $U_0\cap U_1$ these frames are related by
$$e_1=t^{\,n}e_0 .$$
Here for $n<0$ the symbols $x_i^n$ denote the corresponding units
$x_i^{n}\in S[x_0^{-1}]$ or $S[x_1^{-1}]$, and the frames are nowhere-vanishing
local generators of the invertible sheaf $\mathcal O(n)$
([[thm-twisting-sheaf-invertible-standard-graded]]).

## Facts & Assumptions

**Given:** The Axiom of Choice, A field $k$, the graded ring $S=k[x_0,x_1]$ with $\deg x_i=1$, an integer $n$, and the charts $U_i=D_+(x_i)$ of $\mathbb P^1_k$.

[F1] $\mathbb P^1_k=\operatorname{Proj}S$, $U_i=D_+(x_i)=\operatorname{Spec}S_{(x_i)}$ with $S_{(x_0)}=k[t]$, $t=x_1/x_0$, and $S_{(x_1)}=k[t^{-1}]$; the overlap is $D_+(x_0x_1)=\operatorname{Spec}k[t,t^{-1}]$. ([[thm-projective-space-as-proj]])

[F2] $\mathcal O(n)=\widetilde{S(n)}$ has sections $\Gamma(U_i,\mathcal O(n))=S(n)_{(x_i)}=(S(n)[x_i^{-1}])_0$, the degree-zero part of the homogeneous localisation, and restrictions are the canonical localisations. ([[def-twisting-sheaf-proj]])

[F3] Since $S$ is generated over $k$ by $S_1$, every $\mathcal O(n)$ is invertible, with frame $x_i^n$ on $D_+(x_i)$: $S(n)_{(x_i)}=S_{(x_i)}\cdot x_i^n$ is free of rank one. ([[thm-twisting-sheaf-invertible-standard-graded]])

[F4] The assumed Axiom of Choice is the choice-function principle ([[def-axiom-of-choice]]); it licenses the AC-qualified Proj and associated-sheaf suppliers at step 1.1.

## Verification

**Proof technique:** direct: compute the degree-zero localisations of the shifted modules and compare the resulting local generators on the overlap.

1.1 The chart modules. The AC premise [F4] licenses the associated-sheaf and Proj charts [F1]–[F3]. For $n\in\mathbb Z$ the module $S(n)_{(x_0)}=(S(n)[x_0^{-1}])_0$ consists of the classes $a/x_0^{k}$ with $a\in S(n)_k=S_{n+k}$ homogeneous of degree $n+k$. Since $x_0$ is a unit in the localisation, every such class equals $(a/x_0^{\,n+k})\cdot x_0^{\,n}$ with $a/x_0^{\,n+k}\in S_{(x_0)}=k[t]$; hence $e_0:=x_0^{\,n}$ generates $S(n)_{(x_0)}$ over $k[t]$, and symmetrically $e_1:=x_1^{\,n}$ generates $S(n)_{(x_1)}$ over $k[t^{-1}]$. [F1, F2, F3, F4, algebra]

2.1 The overlap. On the overlap $D_+(x_0x_1)$ the ring is $k[t,t^{-1}]$ with $t=x_1/x_0$, so $x_1=tx_0$ and therefore $x_1^{\,n}=t^{\,n}x_0^{\,n}$ holds in the localisation of $S$ at $x_0x_1$ for every integer $n$, positive or negative; under the identifications of step 1.1 this is precisely the frame relation $$e_1=t^{\,n}e_0$$ on $U_0\cap U_1$. [F1, F2, step 1.1, algebra]

3.1 Conclusion. The frame section $e_i$ is nowhere vanishing on $U_i$, and the transition relation $e_1=t^ne_0$ is exactly the change of frame of the invertible sheaf $\mathcal O(n)$ from the $0$-chart to the $1$-chart: for $n=0$ both frames are the constant function $1$ and the relation is $e_1=e_0$; for $n=1$ it is $e_1=te_0$; for $n=-1$ it is $e_1=t^{-1}e_0$ with $t^{-1}=x_0/x_1$ the coordinate on $U_1$. [F2, F3, step 1.1, step 2.1, cases: n=0 and negative n]
\qed
