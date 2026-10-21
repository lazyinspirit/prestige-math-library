---
id: ex-ip-anisotropic-boundary-fixing-gauge-example
kind: example
title: A nontrivial boundary-fixing radial gauge on the ball
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-ip-anisotropic-conductivity-dirichlet-to-neumann-map
  - thm-ip-boundary-fixing-diffeomorphism-preserves-dn-map
  - def-axiom-of-choice
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-altered
sources:
  references:
    - title: "Mikko Salo, The Calderón problem on Riemannian manifolds (2012)"
      url: "https://library.slmath.org/books/Book60/files/30salo.pdf"
    - title: "Thierry Daudé, Niky Kamran, and François Nicoleau, A survey of non-uniqueness results for the anisotropic Calderón problem with disjoint data (2018)"
      url: "https://arxiv.org/pdf/1803.00910"
---

## Example

Assume the Axiom of Choice and let $n\ge3$. On the unit ball $B^n=\{x\in\mathbb R^n:|x|<1\}$ take the constant matrix conductivity $\gamma(x)=I_n$, the $n\times n$ identity matrix. For $0<\varepsilon<1/2$, define $F_\varepsilon:\overline{B^n}\to\overline{B^n}$ by $F_\varepsilon(x)=(1+\varepsilon(1-|x|^2))x$ and define $\widetilde\gamma_\varepsilon=(F_\varepsilon)_*\gamma$ by the anisotropic conductivity pushforward formula. For $\eta=\gamma$ or $\widetilde\gamma_\varepsilon$, let $\Lambda_\eta$ be the weak energy map on $\mathcal B_{B^n}=H^1(B^n)/H_0^1(B^n)$ given by $\langle\Lambda_\eta f,h\rangle=\int_{B^n}\eta\nabla u_{\eta,f}\cdot\nabla V_h\,dx$, where $u_{\eta,f}$ is the unique weak solution with boundary class $f$ and $V_h$ is any representative of $h$. Then $F_\varepsilon$ is a smooth diffeomorphism that fixes $\partial B^n$ pointwise, $\widetilde\gamma_\varepsilon$ is smooth and uniformly positive definite, and $\widetilde\gamma_\varepsilon\not\equiv I_n$; nevertheless $\Lambda_{\widetilde\gamma_\varepsilon}=\Lambda_{I_n}$.

## Example references

[[def-ip-anisotropic-conductivity-dirichlet-to-neumann-map|Anisotropic conductivity and weak DN map]]

[[thm-ip-boundary-fixing-diffeomorphism-preserves-dn-map|Boundary-fixing diffeomorphism invariance]]

[Salo, §1, pp. 170–171](https://library.slmath.org/books/Book60/files/30salo.pdf)

[Daudé, Kamran, and Nicoleau, §1, equation (1.6)](https://arxiv.org/pdf/1803.00910)

## Facts & Assumptions

**Given:** The Axiom of Choice; an integer $n\ge3$; the unit ball $B^n$; the identity matrix conductivity $I_n$; and $0<\varepsilon<1/2$.

[A1] The Axiom of Choice, as assumed by the local anisotropic DN map and gauge theorem. ([[def-axiom-of-choice]])

[F1] If $F$ is a smooth boundary-fixing diffeomorphism and $\gamma$ is a smooth uniformly positive-definite symmetric conductivity, then $(F_*\gamma)(x)=DF(y)\gamma(y)DF(y)^T/|\det DF(y)|$ for $y=F^{-1}(x)$ is smooth uniformly positive definite and $\Lambda_{F_*\gamma}=\Lambda_\gamma$. ([[thm-ip-boundary-fixing-diffeomorphism-preserves-dn-map]], Statement)

[F2] The weak DN map is the energy form on $\mathcal B_\Omega=H^1(\Omega)/H_0^1(\Omega)$, defined using the unique weak solution and any $H^1$ representative of the second boundary datum. ([[def-ip-anisotropic-conductivity-dirichlet-to-neumann-map]], Definition)

## Verification

1.1 Write $R_\varepsilon(r)=r(1+\varepsilon(1-r^2))$ for $0\le r\le1$. Then $R_\varepsilon(0)=0$, $R_\varepsilon(1)=1$, and $R_\varepsilon'(r)=1+\varepsilon-3\varepsilon r^2\ge1-2\varepsilon>0$. Thus $R_\varepsilon$ is a strictly increasing bijection of $[0,1]$ to itself; $F_\varepsilon$ preserves each radial ray, is bijective on the ball, and fixes the boundary pointwise. [given, algebra]

1.2 At the origin $DF_\varepsilon(0)=(1+\varepsilon)I_n$ and $J_{F_\varepsilon}(0)=(1+\varepsilon)^n>0$. At $r>0$ the radial derivative is $R_\varepsilon'(r)>0$ and each tangential eigenvalue is $R_\varepsilon(r)/r=1+\varepsilon(1-r^2)>0$. By continuity, $R_\varepsilon'$ stays positive on $[0,1+\delta]$ for some $\delta>0$. The same radial formula extends $F_\varepsilon$ to a smooth diffeomorphism from the ball of radius $1+\delta$ onto its image, which contains a neighborhood of $\overline{B^n}$; its inverse is smooth there. Thus the inverse is smooth through the boundary and the differential is nonsingular on the closed ball. [given, step 1.1, algebra]

2.1 Since $F_\varepsilon(0)=0$, the pushforward formula in [F1] gives $\widetilde\gamma_\varepsilon(0)=DF_\varepsilon(0)DF_\varepsilon(0)^T/J_{F_\varepsilon}(0)=(1+\varepsilon)^{2-n}I_n$. Because $n\ge3$ and $\varepsilon>0$, this differs from $I_n$, so the pushed-forward conductivity is nontrivial. [F1, given, step 1.2, algebra]

2.2 The hypotheses of [F1] hold for $\gamma=I_n$ and $F_\varepsilon$, so $\Lambda_{\widetilde\gamma_\varepsilon}=\Lambda_{I_n}$. The example therefore exhibits a distinct smooth anisotropic conductivity with exactly the same boundary energy map, caused by the stated boundary-fixing change of variables. [A1, F1, F2, step 1.1, step 1.2, step 2.1, algebra] ∎
