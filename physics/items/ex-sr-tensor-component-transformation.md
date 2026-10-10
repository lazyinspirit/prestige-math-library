---
id: ex-sr-tensor-component-transformation
kind: example
title: "Worked covector and vector component transformation under a beta = 3/5 boost"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 10
deps: [def-lorentz-boost, thm-sr-tensor-and-current-transformation,
       lem-inertial-chart-transitions-are-affine-lorentz,
       def-inertial-frame-and-inertial-chart,
       def-causal-classification-of-lorentz-vectors,
       def-type-r-s-tensor-on-a-finite-dimensional-vector-space,
       def-lorentz-form-and-inertia]
dependency_roles:
  def-lorentz-boost: mathematical-premise
  thm-sr-tensor-and-current-transformation: mathematical-premise
  lem-inertial-chart-transitions-are-affine-lorentz: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-type-r-s-tensor-on-a-finite-dimensional-vector-space: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), Section 2.1 'Manifolds' and Section 2.2 'Lorentzian signature' pp. 25-28 (PDF pp. 26-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 'Special relativity and flat spacetime' pp. 3-7 (PDF pp. 10-14), equations (1.3)-(1.21)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
---

## Example

Worked computation. In an inertial frame with coordinates
$(x^0,x^1,x^2,x^3)$ consider the passive boost
$\Lambda:=B(\frac35e_1)$
([[def-lorentz-boost]]), so that on the $(x^0,x^1)$ plane
$\Lambda=\begin{pmatrix}5/4&-3/4\\ -3/4&5/4\end{pmatrix}$ and
$\Lambda^{-1}=B(-\frac35e_1)=\begin{pmatrix}5/4&3/4\\ 3/4&5/4\end{pmatrix}$,
and let $x'$ be an inertial chart with $x\prime=\Lambda x+b$ ([[lem-inertial-chart-transitions-are-affine-lorentz]]). Take the
covector $k$ with components $(k_0,k_1)=(-1,1)$ and the vector $w$ with
components $(w^0,w^1)=(1,1)$, with transverse components zero. A covector $k\ne0$ is called null here
when $\eta^{-1}(k,k)=0$, where the inverse form is defined by
$\eta^{-1}(k,l):=\eta(k^\sharp,l^\sharp)$ and
$\eta(k^\sharp,v)=k(v)$ for every $v\in V$. In this orthonormal basis the
unique vector $k^\sharp$ has coordinates $(-k_0,k_1,k_2,k_3)$, verifying both
existence and uniqueness directly; hence
$\eta^{-1}(k,k)=-k_0^2+k_1^2+k_2^2+k_3^2$. This uses the nondegenerate
Lorentz form of [[def-lorentz-form-and-inertia]]. Then:

(i) $k'_a=(\Lambda^{-1})^{b}{}_{a}k_b$ gives
$k'_0=(5/4)(-1)+(3/4)(1)=-1/2$ and
$k'_1=(3/4)(-1)+(5/4)(1)=1/2$, so $k'=(-1/2,1/2)$.

(ii) $w'^a=\Lambda^{a}{}_{b}w^b$ gives
$w'^0=(5/4)\bigl(1-(3/5)\cdot1\bigr)=1/2$ and
$w'^1=(5/4)\bigl(1-(3/5)\cdot1\bigr)=1/2$, so $w'=(1/2,1/2)$.

(iii) $k$ is null for the inverse form and $w$ is null for $\eta_0$: $-1+1=0$, and so are $k'$ and
$w'$: $-1/4+1/4=0$.

(iv) The contraction is invariant:
$k'_aw'^a=(-1/2)(1/2)+(1/2)(1/2)=0=(-1)(1)+(1)(1)=k_aw^a$.

The example shows all three features of the component law of
[[thm-sr-tensor-and-current-transformation]]: the covariant slot transforms
with $\Lambda^{-1}$, the contravariant slot with $\Lambda$, and the
contraction is unchanged. The common factor $1/2$ on the null covector is the
numerical form of the transformation law; no frequency or Doppler
interpretation is attached to it here (that belongs to the light-and-doppler
page).

## Facts & Assumptions

**Given:** An inertial frame with coordinates $(x^0,x^1,x^2,x^3)$ and $\eta_0=\operatorname{diag}(-1,1,1,1)$, the passive boost $\Lambda=B(\frac35e_1)$ on the $(x^0,x^1)$ plane, an inertial chart $x\prime$ with $x\prime=\Lambda x+b$, the covector $k$ with components $(-1,1,0,0)$ and the vector $w$ with components $(1,1,0,0)$.

[L1] For $|\beta|<1$ the boost $B(\beta e_1)$ acts on the $(x^0,x^1)$ coordinates by $x'^0=\gamma(x^0-\beta x^1)$, $x'^1=\gamma(x^1-\beta x^0)$, with $\gamma=(1-\beta^2)^{-1/2}>0$, and its matrix on $(e_0,e_1)$ is $\begin{pmatrix}\gamma&-\gamma\beta\\ -\gamma\beta&\gamma\end{pmatrix}$; $B(\beta e_1)^{-1}=B(-\beta e_1)$ ([[def-lorentz-boost]]).

[L2] For every proper orthochronous linear Lorentz map $L$ and every event $c$ there is an inertial frame whose chart $x_L$ satisfies $x_L(p)=M_L^{-1}(x(p)-x(c))$, where $M_L=E^{-1}\circ L\circ E$; the transition $x'\circ x^{-1}$ of inertial charts $x,x'$ is affine with linear part a proper orthochronous Lorentz matrix ([[lem-inertial-chart-transitions-are-affine-lorentz]]).

[L3] Let $x,x'$ be inertial charts with transition $x'=\Lambda x+b$, $\Omega$ open, and let $J$, $k$, $T$ be $\mathcal C^\ell$ vector, covector and type-$(r,s)$ tensor fields with components $J^a$, $k_a$, $T^{a_1\dots a_r}{}_{b_1\dots b_s}$ in $x$ and primed components in $x'$. Then (i) $J'^a=\Lambda^a{}_bJ^b$; (ii) $k'_a=(\Lambda^{-1})^b{}_ak_b$; (iii) every contraction of one contravariant with one covariant index is invariant ([[thm-sr-tensor-and-current-transformation]], [[def-type-r-s-tensor-on-a-finite-dimensional-vector-space]]).

[L4] A nonzero vector is null when $\eta(v,v)=0$, and in the frame $\eta(v,v)=-(v^0)^2+(v^1)^2+(v^2)^2+(v^3)^2$ ([[def-causal-classification-of-lorentz-vectors]], [[def-inertial-frame-and-inertial-chart]]).



## Proof

**Proof technique:** direct.

1.1 By [L1] with $\beta=3/5$, $\gamma=(1-9/25)^{-1/2}=5/4$, so the matrix of $\Lambda=B(\frac35e_1)$ on the $(x^0,x^1)$ plane is $\begin{pmatrix}5/4&-3/4\\ -3/4&5/4\end{pmatrix}$ and its inverse is the matrix of $B(-\frac35e_1)$, namely $\begin{pmatrix}5/4&3/4\\ 3/4&5/4\end{pmatrix}$; the existence of the chart $x'$ with this linear part is [L2]. [L1, L2, algebra]

2.1 Clause (i): by [L3](ii), $k'_a=(\Lambda^{-1})^b{}_ak_b$, where $(\Lambda^{-1})^b{}_a$ is the matrix entry in row $b$ and column $a$ of $\Lambda^{-1}$ from step 1.1. Hence $k'_0=(5/4)(-1)+(3/4)(1)=-5/4+3/4=-1/2$ and $k'_1=(3/4)(-1)+(5/4)(1)=-3/4+5/4=1/2$. [L3, step 1.1, algebra]

2.2 Clause (ii): by [L3](i), $w'^a=\Lambda^a{}_bw^b$, so $w'^0=(5/4)(1)+(-3/4)(1)=1/2$ and $w'^1=(-3/4)(1)+(5/4)(1)=1/2$, which agrees with the displayed forms $(5/4)(1-3/5)=1/2$; the components in the transverse directions are unaffected. [L3, step 1.1, algebra]

3.1 Clause (iii): the inverse form defined in the Example gives $\eta^{-1}(k,k)=-(-1)^2+1^2=0$, while [L4] gives $\eta(w,w)=-(1)^2+1^2=0$. Both objects are nonzero, so the covector and vector are null in their respective spaces. In the primed orthonormal frame the inverse metric matrix is again $\operatorname{diag}(-1,1,1,1)$, the inverse of its metric matrix; the computed components give $\eta^{-1}(k,k)=-(-1/2)^2+(1/2)^2=0$ and $\eta(w,w)=-(1/2)^2+(1/2)^2=0$. Thus the primed components describe the same null covector and null vector; no covector is inserted into the form on $V\times V$. [L3, L4, step 2.1, step 2.2, algebra]

3.2 Clause (iv): by [L3](iii) the contraction $k_aw^a$ is invariant under the chart change, so $k'_aw'^a=k_aw^a$; directly, $k'_aw'^a=(-1/2)(1/2)+(1/2)(1/2)=-1/4+1/4=0$ and $k_aw^a=(-1)(1)+(1)(1)=0$, consistent with the invariant statement. [L3, step 2.1, step 2.2, algebra]

4.1 Steps 1.1-2.2 prove clauses (i)-(ii), step 3.1 proves clause (iii) and step 3.2 proves clause (iv); every entry is an exact rational matrix computation from the displayed law, and no frequency, wave or Doppler interpretation is attached to the null covector. [step 1.1, step 2.1, step 2.2, step 3.1, step 3.2] ∎
