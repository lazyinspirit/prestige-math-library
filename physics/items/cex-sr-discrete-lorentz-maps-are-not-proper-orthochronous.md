---
id: cex-sr-discrete-lorentz-maps-are-not-proper-orthochronous
kind: counterexample
title: The parity and time-reversal maps are Lorentz maps that are not proper, and det = 1 does not imply orthochrony
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
domain: mathematics
dependency_level: 7
deps: [def-lorentz-map-and-lorentz-group,
       lem-lorentz-map-preserves-metric-and-causal-structure,
       def-time-orientation-and-future-causal-sets,
       def-causal-classification-of-lorentz-vectors,
       def-inertial-frame-and-inertial-chart,
       thm-determinant-of-a-triangular-matrix,
       def-matrix-product-and-identity-matrix]
dependency_roles:
  def-lorentz-map-and-lorentz-group: mathematical-premise
  lem-lorentz-map-preserves-metric-and-causal-structure: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  thm-determinant-of-a-triangular-matrix: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
sources:
  references:
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Chapter 1 'Special relativity and flat spacetime' pp. 3-7 (PDF pp. 10-14), equations (1.3)-(1.21)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "H. S. Reall, Mathematical Tripos Part III General Relativity (Cambridge, October 12, 2022 revision), Section 2.2 'Lorentzian signature' pp. 26-28 (PDF pp. 27-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
---

## Statement refuted

The statements "every Lorentz map is proper and orthochronous" and,
separately, "every Lorentz map with $\det L=1$ is orthochronous" are false.

## Facts & Assumptions

**Given:** An inertial frame $(o;e_0,e_1,e_2,e_3)$ with $\eta_0=\operatorname{diag}(-1,1,1,1)$, and the coordinate columns $x=(x^0,x^1,x^2,x^3)$ of a vector in that frame.

[L1] A linear map $L$ is a Lorentz map exactly when its matrix $M$ satisfies $M^{T}\eta_0M=\eta_0$ in the frame's ordered basis; $L$ is proper when $\det L=1$ and orthochronous when $L(C^+)=C^+$ ([[def-lorentz-map-and-lorentz-group]]).

[L2] A Lorentz map satisfies $\det L=\pm1$; $L(C^+)$ is one of the two components $C^+,C^-$; and $L(C^+)=C^+$ if and only if $L(C^+)\subseteq C^+$ ([[lem-lorentz-map-preserves-metric-and-causal-structure]]).

[L3] Since $e_0\in C^+$ in an inertial frame, the components are described in the frame's coordinates by $C^+=\{x:x^0>|x_{\mathrm{vec}}|\}$ and $C^-=\{x:x^0<-|x_{\mathrm{vec}}|\}$ ([[def-inertial-frame-and-inertial-chart]], [[def-time-orientation-and-future-causal-sets]]).

[L4] A vector is timelike when $\eta(x,x)<0$, and $\eta(x,x)=-(x^0)^2+|x_{\mathrm{vec}}|^2$ in an $\eta$-orthonormal basis ([[def-causal-classification-of-lorentz-vectors]]).

[L5] The determinant of a diagonal matrix is the product of its diagonal entries ([[thm-determinant-of-a-triangular-matrix]]), and the matrix product of two diagonal matrices is the diagonal matrix of the products of the corresponding entries ([[def-matrix-product-and-identity-matrix]]).

## Counterexample

1.1 Define $\Pi$ and $T$ by their matrices in the frame basis, $\Pi=\operatorname{diag}(1,-1,-1,-1)$ and $T=\operatorname{diag}(-1,1,1,1)$. For any diagonal $M=\operatorname{diag}(m_0,m_1,m_2,m_3)$, $M^{T}\eta_0M=\operatorname{diag}(-m_0^2,m_1^2,m_2^2,m_3^2)$ by [L5]; for $\Pi$ and for $T$ each $m_a^2=1$, so both matrices equal $\eta_0=\operatorname{diag}(-1,1,1,1)$. Hence $\Pi$ and $T$ are Lorentz maps by the matrix criterion [L1]. [L1, L5, algebra]

1.2 By the diagonal product rule [L5], $\det\Pi=1\cdot(-1)^3=-1$ and $\det T=-1$, so by [L1] neither $\Pi$ nor $T$ is proper: they are Lorentz maps failing properness. [L1, L5, algebra]

1.3 For every $x$, $(\Pi x)^0=x^0$ and $(\Pi x)_{\mathrm{vec}}=-x_{\mathrm{vec}}$, so $|(\Pi x)_{\mathrm{vec}}|=|x_{\mathrm{vec}}|$; if $x\in C^+$ then $x^0>|x_{\mathrm{vec}}|$ by [L3], hence $(\Pi x)^0=x^0>|(\Pi x)_{\mathrm{vec}}|$ and $\Pi x\in C^+$ by [L3] again. Thus $\Pi(C^+)\subseteq C^+$, and [L2] gives $\Pi(C^+)=C^+$: the improper map $\Pi$ is orthochronous, so $\Pi$ refutes "orthochronous implies proper". [L2, L3, algebra]

1.4 For every future timelike $x$, $(Tx)^0=-x^0<0$ and $|(Tx)_{\mathrm{vec}}|=|x_{\mathrm{vec}}|<x^0=-(Tx)^0$, so $Tx\in C^-$ by [L3]; since $T$ is a bijection with inverse $T$, $T(C^+)=C^-$ and $T$ is not orthochronous. [L2, L3, L4, algebra]

1.5 By the diagonal product rule [L5], $\Pi T=\operatorname{diag}(-1,-1,-1,-1)=-I_4$, whose determinant is $(-1)^4=+1$; and for every $x\in C^+$ one has $x^0>|x_{\mathrm{vec}}|\ge0$, so $(\Pi T)x=-x$ has $((\Pi T)x)^0=-x^0<0$ and $|((\Pi T)x)_{\mathrm{vec}}|=|x_{\mathrm{vec}}|<x^0=-((\Pi T)x)^0$, whence $(\Pi T)x\in C^-$ by [L3] and $(\Pi T)(C^+)\subseteq C^-$; since $\Pi T$ is a bijection, $\Pi T(C^+)=C^-$ by [L2]. Hence $\det(\Pi T)=+1$ and $\Pi T$ is not orthochronous: $\det L=1$ does not imply orthochrony, and this proper non-orthochronous map refutes "proper implies orthochronous". [L1, L2, L3, L5, algebra]

2.1 Steps 1.1 and 1.2 exhibit Lorentz maps that are not proper ($\Pi$ and $T$), step 1.3 exhibits a Lorentz map that is not proper yet is orthochronous, and steps 1.4 and 1.5 exhibit Lorentz maps that are not orthochronous, including one, $\Pi T$, with $\det=+1$. The identity supplies the proper orthochronous sign class, so together with $\Pi,T,\Pi T$ all four classes are realized. Therefore $O(V,\eta)$ strictly contains $SO^+(V,\eta)$, the four combinations of the sign of the determinant and orthochrony are genuinely distinct, and the convention of [[def-lorentz-map-and-lorentz-group]](e), which reserves "Lorentz transformation" for the proper orthochronous maps, is not automatic. Both refuted statements are false. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, L1, L2] ∎
