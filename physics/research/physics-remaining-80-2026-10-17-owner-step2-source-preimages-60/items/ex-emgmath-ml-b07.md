---
id: ex-emgmath-ml-b07
kind: example
title: Exact finite-frequency transverse Maxwell field
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
proof_strategy: direct
deps:
  - lem-emg-controlled-maxwell-wkb
  - lem-emg-source-and-test-scaling
  - def-emg-matter-formal-systems
dependency_roles:
  lem-emg-controlled-maxwell-wkb: mathematical-premise
  lem-emg-source-and-test-scaling: mathematical-premise
  def-emg-matter-formal-systems: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. I. Harte, Gravitational lensing beyond geometric optics: I. Formalism and observables, arXiv:1808.06203v2 (2018), §§3.1–3.3"
      url: https://arxiv.org/pdf/1808.06203v2
      locator: "The vector-potential WKB ansatz, gauge constraints and field-strength expansion, equations (40)–(55), PDF pp. 10–13; the exact plane wave below is computed directly."
    - title: "H. S. Reall, General Relativity, Cambridge Part III lecture notes, 12 October 2022 revision, §6.2"
      url: https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf
      locator: "Equations (6.7)–(6.14), PDF pp. 61–64, provide the curved Maxwell and null-ray geometric-optics context; the field below is an exact flat-space component calculation."
verification:
  precheck: pass
---

## Example

Let $M=\mathbb R^4$ have length coordinates $(x^0,x^1,x^2,z)$, Minkowski metric $\eta=\operatorname{diag}(-1,1,1,1)$, orientation $dx^0\wedge dx^1\wedge dx^2\wedge dz$, and future direction $\partial_0$, with $x^0=ct$. Choose constants $\nu>0$ with units $\mathrm m^{-1}$ and $A_*\ne0$ with potential-component units $\mathrm{T\,m}$. For $0<\epsilon\le1$, set

$$ \theta=\nu(x^0-z),\qquad a_0=A_*\,dx^1,\qquad a_1=0,\qquad A_\epsilon^{\mathbb R}:=\operatorname{Re}\left(\epsilon e^{i\theta/\epsilon}a_0\right). $$

Then the real potential and field are

$$ A_\epsilon^{\mathbb R}=\epsilon A_*\cos(\theta/\epsilon)\,dx^1,\qquad (F_\epsilon)_{01}=-\nu A_*\sin(\theta/\epsilon),\qquad (F_\epsilon)_{31}=+\nu A_*\sin(\theta/\epsilon), $$

with all other independent field components zero. Consequently $E_1=c\nu A_*\sin(\theta/\epsilon)$ and $B_2=\nu A_*\sin(\theta/\epsilon)$ in the SI convention of [[def-emg-matter-formal-systems]]. This is an exact source-free Maxwell field for every fixed $\epsilon$. For $A_*\ne0$ it has nonzero electromagnetic stress on an open set, so it is not a fully coupled source-free Einstein–Maxwell solution on unchanged Minkowski space with $\Lambda=0$.

## Facts & Assumptions

**Given:** The Minkowski chart, phase, constant transverse amplitude and parameter ranges in the Example.

[F1] [[def-emg-matter-formal-systems]] fixes $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$ and the smooth-field conventions.

[F2] [[lem-emg-controlled-maxwell-wkb]] proves the exact finite-parameter potential and field expansions, residual identity, and conditional residual bounds under its four stated amplitude constraints.

[F3] [[lem-emg-source-and-test-scaling]] proves that a nonzero source-free Maxwell field with positive observer energy cannot solve the vacuum Einstein equation on the unchanged Minkowski metric; it also states the qualification against interpreting a test field as a coupled solution.

[A1] The real field is the real part of the complex potential specified in the Example. This is an algebraic construction, not an observation.

## Verification


1.1 The phase gradient is $k=\nu(dx^0-dz)$ and $g^{-1}(k,k)=\nu^2(-1+1)=0$. The constant $a_0$ obeys $g^{-1}(k,a_0)=0$ and $La_0=0$; $a_1=0$ makes $iLa_1+Pa_0=0$ and $ik^a(a_1)_a+\nabla^a(a_0)_a=0$. Here $\nabla$ is the flat connection and the Ricci tensor vanishes. Thus all four hypotheses of [F2] hold. [given, A1, F1, F2, algebra]

1.2 Differentiating $A_\epsilon^{\mathbb R}$ in the displayed coordinates gives $(F_\epsilon)_{01}=\partial_0(A_\epsilon^{\mathbb R})_1=-\nu A_*\sin(\theta/\epsilon)$ and $(F_\epsilon)_{31}=\partial_z(A_\epsilon^{\mathbb R})_1=+\nu A_*\sin(\theta/\epsilon)$; no other independent component is produced. The SI component convention in [F1] therefore gives the displayed $E_1$ and $B_2$. [given, A1, F1, algebra]

2.1 In [F2], this example has $a_1=0$, hence $d_1=0$ and $Pa_1-\nabla d_1=0$. Its exact residual formula therefore gives $\nabla^a(F_\epsilon)_{ab}=0$, and its exact closure identity gives $dF_\epsilon=0$. Raising the free index in the first equality gives the equivalent component equation $\nabla_aF_\epsilon^{ab}=0$. Thus both source-free Maxwell equations hold exactly for every fixed $\epsilon$. [F2, step 1.1, step 1.2, algebra]

3.1 Since $\nu A_*\ne0$, there are points with $\sin(\theta/\epsilon)\ne0$. At any such point the field is nonzero and [F3] gives positive electromagnetic observer energy. Minkowski has $G_{ab}=0$, so the source-free Einstein equation with unchanged metric and $\Lambda=0$ fails there. This caveat concerns coupling only; the Maxwell calculation in step 2.1 remains exact. [given, F3, step 2.1, algebra] ∎
