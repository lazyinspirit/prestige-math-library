---
id: lem-ros2-w-method-order-two-expansion
kind: lemma
title: ROS2 order-two expansion and Jacobian-defect cancellation
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps: [alg-rosenbrock-ros2-step, thm-multivariable-taylor-formula-with-lagrange-remainder]
dependency_level: 1
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Peter Benner and Hermann Mena, Rosenbrock methods for solving differential Riccati equations, §II, pp. 3–4"
      url: "https://cscproxy.mpi-magdeburg.mpg.de/preprints/2011/MPIMD11-06.pdf"
    - title: "Ralf Kornhuber, Notes on Numerical Methods for ODEs and Numerical Linear Algebra, §1.8, pp. 33–35"
      url: "https://numerik.mi.fu-berlin.de/wiki/WS_2021/NumericsII_Dokumente/NumericsIIKornhuber_rev5.pdf"
---

## Statement

Let $f(t,y)$ be $C^2$ on a compact time-state tube, let $F,F_t,L,H$ bound respectively $\|f\|$, $\|\partial_tf\|$, $\|D_yf\|$, and the norm of the full second derivative there, and let $W$ satisfy $\|W\|\le W_0$. Assume the stage matrix $M=I-\gamma hW$ is invertible with $\|M^{-1}\|\le B$ uniformly for $0<h\le h_0$ and that the second-stage evaluation lies in the tube. For the stages of [[alg-rosenbrock-ros2-step]],
$$
\frac h2(3k_1+k_2)=hf(t,y)+\frac{h^2}{2}\bigl(\partial_tf(t,y)+D_yf(t,y)f(t,y)\bigr)+r_h,
$$
where $\|r_h\|\le C h^3$ for a finite constant depending only on the displayed bounds, $B$, $h_0$, and $\gamma$. In particular, the $W$ terms cancel through order $h^2$ for every bounded approximate Jacobian; no closeness $W-D_yf=O(h)$ is needed for this local expansion. Comparing with the exact flow shows a local defect of order $h^3$.

## Facts & Assumptions

**Given:** The smooth time-dependent vector field, compact tube, derivative bounds, bounded approximate matrix, and uniform stage inverse bound in the statement.

[F1] [[alg-rosenbrock-ros2-step]] uses $Mk_1=f+\gamma h f_t$, $Mk_2=f(t+h,y+hk_1)-2k_1-\gamma h f_t$, and output $y+\frac h2(3k_1+k_2)$.

[F2] [[thm-multivariable-taylor-formula-with-lagrange-remainder]]: on an open convex set, a $C^{k+1}$ map has its degree-$k$ Taylor polynomial plus a bounded order-$(k+1)$ Lagrange remainder along each segment.

## Proof

1.1 Write $f=f(t,y)$, $f_t=\partial_tf(t,y)$, and $J=D_yf(t,y)$. From $M^{-1}-I=\gamma hM^{-1}W$ and the uniform inverse bound, $\|M^{-1}-I\|\le\gamma hBW_0$. Thus [F1] gives $k_1=f+\gamma h(Wf+f_t)+r_1$ with $\|r_1\|\le C_1h^2$, where $C_1=\gamma^2BW_0(W_0F+F_t)$. [given, F1, algebra]

1.2 Taylor's formula [F2] along the segment $(t+s,y+s k_1)$ gives $f(t+h,y+hk_1)=f+h f_t+hJf+R$, with $\|R\|\le h^2\{\frac H2(1+K_1)^2+L C_k\}$, where $K_1:=B(F+\gamma h_0F_t)$ bounds $\|k_1\|$ and $C_k:=\gamma B(W_0F+F_t)$ bounds $\|k_1-f\|/h$. Substitution in the second equation of [F1] yields $Mk_2=-f+h\{Jf+(1-3\gamma)f_t-2\gamma Wf\}+E$ with $\|E\|\le h^2(C_f+2C_1)$, where $C_f:=\frac H2(1+K_1)^2+LC_k$. [given, F1, F2, step 1.1, algebra]

1.3 Multiply the last expression by $M^{-1}$. Using $M^{-1}(-f)=-f-\gamma hWf+O(h^2)$, $M^{-1}S=S+O(h)$ for the bounded coefficient $S:=Jf+(1-3\gamma)f_t-2\gamma Wf$, and $\|M^{-1}E\|\le B\|E\|$, gives $k_2=-f+h\{Jf+(1-3\gamma)f_t-3\gamma Wf\}+r_2$, with $\|r_2\|\le C_2h^2$; for example one may take $C_2=\gamma^2BW_0^2F+\gamma BW_0S_0+B(C_f+2C_1)$ with $S_0:=LF+|1-3\gamma|F_t+2\gamma W_0F$. [given, F1, step 1.2, algebra]

1.4 Combining the expansions in steps 1.1 and 1.3 cancels $3\gamma Wf-3\gamma Wf$ and cancels the time-derivative coefficients to leave $3k_1+k_2=2f+h(Jf+f_t)+3r_1+r_2$. Hence the stated stage increment holds with $C=(3C_1+C_2)/2$. Along an exact solution, $y''=f_t+Jf$; integrating its variation once more, bounded second derivatives give $y(t+h)=y+hf+\frac{h^2}{2}(f_t+Jf)+O(h^3)$. The local defect is therefore $O(h^3)$, for exact $W=J$ and for every bounded approximate $W$. [step 1.1, step 1.3, algebra, calculus] ∎
