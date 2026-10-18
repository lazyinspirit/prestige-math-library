---
id: ex-na-periodic-taylor-green-vortex
kind: example
title: The two-dimensional Taylor–Green vortex on the flat torus
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-na-evolutionary-skew-convective-form
  - thm-sine-and-cosine-derivatives
  - thm-double-angle-and-power-reduction-identities
  - thm-sine-cosine-zero-sets-and-fundamental-period
  - thm-derivative-of-exponential
  - thm-ftc-first-part
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references: []
generation:
  role: example
verification:
  precheck: pass
---

## Example

This is a periodic-boundary example, not a no-slip example. On the torus obtained by identifying opposite sides of $(0,2\pi)^2$, let $A(t)=e^{-2\nu t}$ and define
$$u(x,y,t)=A(t)(\sin x\cos y,-\cos x\sin y),\qquad p(x,y,t)=\frac{A(t)^2}{4}(\cos 2x+\cos 2y).$$
The pressure is periodic and has zero mean on the fundamental square.

\begin{center}
\begin{tikzpicture}[scale=0.85]
\draw[thick] (0,0) rectangle (4,2.6);
\node at (2,1.3) {fundamental square};
\node[blue] at (2,2.82) {$y=0\sim2\pi$};
\node[blue] at (2,-0.22) {$y=0\sim2\pi$};
\node[red,rotate=90] at (-0.28,1.3) {$x=0\sim2\pi$};
\node[red,rotate=90] at (4.28,1.3) {$x=0\sim2\pi$};
\end{tikzpicture}
\end{center}

The rectangle is only a fundamental-domain picture: each pair of equally labelled opposite edges is identified point-for-point, so fields and derivatives must be periodic across the seams. The picture records the topology; the verification below is analytic.

## Facts & Assumptions

**Given:** $\nu>0$, the periodic square with opposite-edge identification, and the displayed smooth fields.

[F1] The skew form in [[def-na-evolutionary-skew-convective-form]] is defined for zero-boundary fields on bounded Lipschitz domains. This periodic example is verified directly from its classical strong equation; it does not identify these fields with the no-slip test space.

[F2] Derivatives of sine and cosine and the double-angle identity are the usual real calculus identities. ([[thm-sine-and-cosine-derivatives]], [[thm-double-angle-and-power-reduction-identities]])

[F3] Sine and cosine have period $2\pi$. ([[thm-sine-cosine-zero-sets-and-fundamental-period]])

[F4] $A'(t)=-2\nu A(t)$, and the fundamental theorem evaluates integrals of cosine by its sine antiderivative. ([[thm-derivative-of-exponential]], [[thm-sine-and-cosine-derivatives]], [[thm-ftc-first-part]])

## Verification

1.1 By [F2]–[F3], the fields and all their derivatives are periodic across opposite edges. Differentiating gives $\operatorname{div}u=A(\cos x\cos y-\cos x\cos y)=0$ and $\Delta u=-2u$. Since $A'=-2\nu A$ by [F4], one has $\partial_tu=\nu\Delta u$. [F2, F3, F4, given, algebra]

2.1 The derivatives are $\partial_xu_1=A\cos x\cos y$, $\partial_yu_1=-A\sin x\sin y$, $\partial_xu_2=A\sin x\sin y$, and $\partial_yu_2=-A\cos x\cos y$. Direct multiplication gives $(u\cdot\nabla)u=\frac{A^2}{2}(\sin 2x,\sin 2y),\qquad \nabla p=-\frac{A^2}{2}(\sin 2x,\sin 2y).$ Thus $\partial_tu+(u\cdot\nabla)u+\nabla p-\nu\Delta u=0$. By [F4], $\int_0^{2\pi}\cos(2x)\,dx=\tfrac12(\sin4\pi-\sin0)=0$, and the identical calculation gives $\int_0^{2\pi}\cos(2y)\,dy=0$; hence $p$ has zero mean at every time. At $x=0$ and $y=\pi/3$, $u_2=-A\sin(\pi/3)\ne0$, so this periodic solution does not satisfy homogeneous no-slip data on the square boundary. [F2, F3, F4, step 1.1, algebra] ∎
