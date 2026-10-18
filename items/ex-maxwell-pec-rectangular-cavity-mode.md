---
id: ex-maxwell-pec-rectangular-cavity-mode
kind: example
title: A smooth Maxwell eigenmode in a rectangular PEC cavity
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-transient-maxwell-system-with-material-interfaces]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: John B. Schneider, Understanding the Finite-Difference Time-Domain Method
      url: https://eecs.wsu.edu/~schneidj/ufdtd/ufdtd.pdf
      locator: "Chapter 8 §8.8, printed pp. 225–227: PEC boundary implementation; the rectangular cavity field is checked directly."
verification:
  precheck: pass
---

## Example

Let $\Omega=(0,a)\times(0,b)\times(0,d)$ with $a,b,d>0$, constant scalar $\epsilon,\mu>0$, zero conductivity, zero impressed current $J_{\rm src}=0$, and zero volume charge, and choose positive integers $m,n$ and a real amplitude $E_0\ne0$. Put $k_x=m\pi/a$, $k_y=n\pi/b$, $\omega=(\epsilon\mu)^{-1/2}\sqrt{k_x^2+k_y^2}$, and $\Phi=E_0\sin(k_xx)\sin(k_yy)$. Define the real fields
$$E=(0,0,\Phi\cos(\omega t)),\qquad B=\frac{E_0}{\omega}\bigl(-k_y\sin(k_xx)\cos(k_yy),\ k_x\cos(k_xx)\sin(k_yy),\ 0\bigr)\sin(\omega t).$$

## Facts & Assumptions


**Given:** The constant-coefficient source-free lossless Maxwell equations and the PEC condition $n\times E=0$.

[F1] In a homogeneous source-free lossless medium, $\epsilon E_t=\operatorname{curl}(\mu^{-1}B)$, $B_t=-\operatorname{curl}E$, and PEC means zero tangential electric trace. ([[def-transient-maxwell-system-with-material-interfaces]])

## Verification

1.1 The tangential electric field vanishes on $x=0,a$ and $y=0,b$ because $\Phi=0$ there; it also vanishes on $z=0,d$ because the only component of $E$ is normal to those faces. Direct differentiation gives $\operatorname{div}B=0$ and $\operatorname{div}(\epsilon E)=0$. Thus both divergence constraints and the PEC trace hold. [F1, given, algebra]

2.1 Differentiation gives $B_t=-\operatorname{curl}E$. The $z$ component of $\operatorname{curl}B$ is $-(k_x^2+k_y^2)\Phi\sin(\omega t)/\omega$, with the other two components zero. Since $\epsilon\omega^2=(k_x^2+k_y^2)/\mu$, the expression $-(k_x^2+k_y^2)\Phi\sin(\omega t)/(\mu\omega)$ equals $-\epsilon\omega\Phi\sin(\omega t)=\epsilon E_t$. Hence $\epsilon E_t=\operatorname{curl}(\mu^{-1}B)$. At $t=0$, $x=a/(2m)$ and $y=b/(2n)$, the electric component is $E_z=E_0\ne0$, so this is a nonzero cavity mode. The angular frequency is therefore $\omega=(\epsilon\mu)^{-1/2}\sqrt{(m\pi/a)^2+(n\pi/b)^2}$. [F1, given, algebra] ∎

## Remarks

The same formulas with $E_0=0$ give the zero Maxwell solution, which is not an eigenmode.
