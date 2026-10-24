---
id: ex-pseudo-arclength-crosses-x-squared-fold
kind: example
title: 'Pseudo arclength crosses the fold $x^2-\lambda=0$'
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - alg-pseudo-arclength-continuation-with-certified-local-corrector
  - thm-pseudo-arclength-local-newton-correction
  - thm-simple-fold-lyapunov-schmidt-parameterization
  - thm-augmented-residual-contraction-certificate
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

For $F(x,\lambda)=x^2-\lambda$, the solution curve is
$(x,\lambda)=(s,s^2)$. At its fold $(0,0)$, the natural parameter $\lambda$
turns around, while an $x$-normal pseudo-arclength step can pass from the
negative-$x$ branch through the fold to the positive-$x$ branch.

## Facts & Assumptions

**Given:** The equation $F(x,\lambda)=x^2-\lambda$ on $\mathbb R^2$, the fold point $(0,0)$, and $0<\alpha<1/32$ for the certified local realization.

[F1] [[thm-simple-fold-lyapunov-schmidt-parameterization]]: for a simple fold, $\lambda''(0)=-w^TF_{xx}[v,v]/(w^TF_\lambda)$ and the solution curve has tangent $(v,0)$ in the normalized fold parameter.

[F2] [[thm-pseudo-arclength-local-newton-correction]]: at a regular solution point, a transverse augmented section has an invertible bordered derivative and its exact Newton corrections are locally quadratic.

[F3] [[thm-augmented-residual-contraction-certificate]]: if the strict contraction inequalities hold for an augmented residual on a closed ball, that ball contains exactly one zero and the theorem gives its center error bound.

[F4] [[alg-pseudo-arclength-continuation-with-certified-local-corrector]]: a finite continuation step is accepted only after its section-root certificate passes; a finite trace claims no global branch completeness.

## Verification

**Proof technique:** direct.

1.1 At $(0,0)$, $F_x=0$, $F_\lambda=-1$, and $F_{xx}=2$. With $v=w=1$, $a=-1$ and $b=2$, so [F1] gives $\lambda''(0)=2$. The full derivative is $DF(x,\lambda)=[2x,-1]$, which has rank $1$ everywhere, and at the fold its unit kernel tangent is $t=(1,0)$. [F1, given, algebra]

1.2 Choose $0<\alpha<1/32$ and use the seed center $\bar z_0=(-\alpha,\alpha^2)$, radius $R_0=\alpha/4$, previous orientation $\tau_{-1}=(1,0)$, and seed section point $z_{p,-1}=(-\alpha,0)$, so $G_{-1}(x,\lambda)=(x^2-\lambda,x+\alpha)$. At the seed center the residual is zero and the inverse of the bordered Jacobian is $\begin{bmatrix}0&1\\-1&-2\alpha\end{bmatrix}$, whose operator norm is less than $2$. The Jacobian is $2$-Lipschitz, so the exact-data certificate with $\widehat\beta=2$, $\widehat g=0$, zero error bounds, and radius $R_0$ has $q=4R_0=\alpha<1$ and certifies the seed ball. The ball lies in $V=\{(x,\lambda):|x|<1/4\}$, where every zero lies on the regular graph $(x,x^2)$ and $DF=[2x,-1]$ has rank $1$. Parametrize that graph from $x=-\alpha$ by arclength $s(x)=\int_{-\alpha}^x\sqrt{1+4u^2}\,du$. Its positive unit tangent is $(1,2x)/\sqrt{1+4x^2}$, so the previous normal has dot product at least $\kappa=2/\sqrt5$ throughout $|x|\le1/4$. The forward chart length to $x=1/4$ is at least $1/4+\alpha$. [F1, F3, F4, given, choose, algebra]

2.1 At the seed root, the exact unit tangent oriented toward increasing $x$ is $t=(1,-2\alpha)/\sqrt{1+4\alpha^2}$. The tangent callback may return $\widehat t=(1,0)$ with certified error $e=\|\widehat t-t\|_2=\sqrt{2-\frac{2}{\sqrt{1+4\alpha^2}}}$. With the previous normal $\tau=(1,0)$, the angle tests are $\tau^Tt=1/\sqrt{1+4\alpha^2}\ge2/\sqrt5$ and $a=\tau^T\widehat t=1$. Set the algorithm's step length to $H=2\alpha+\alpha^2$. Then the predictor is $z_p=\bar z_0+H\widehat t=(\alpha+\alpha^2,\alpha^2)$. Its section is $G_H(x,\lambda)=(x^2-\lambda,x-(\alpha+\alpha^2))$, with unique zero $z_*=(x_*,x_*^2)$, where $x_*:=\alpha+\alpha^2$. The forward-offset tests hold because $H>R_0$ and $H+R_0=\frac94\alpha+\alpha^2<\frac18<\frac1{2\sqrt5}\le\kappa r_{\rm ch}^+$. The section is transverse throughout the chart. At its selected root, set $\sigma_*:=\sqrt{1+4x_*^2}$, $t_*=(1,2x_*)/\sigma_*$, and $A:=DF(x_*,x_*^2)$. The unit vector $e_*=(-2x_*,1)/\sigma_*$ spans $t_*^\perp$, and $[2x_*,-1]e_*=-\sigma_*$, so $A|_{t_*^\perp}$ has inverse norm $1/\sigma_*\le1$. Since $\tau^Tt_*=1/\sigma_*>0$, [F2] gives a local quadratic Newton corrector; the bordered Jacobian has determinant $1$. [F2, F4, step 1.1, step 1.2, given, algebra]

3.1 At the predictor, the augmented residual is $(2\alpha^3+\alpha^4,0)$ and its Jacobian is $\begin{bmatrix}2(\alpha+\alpha^2)&-1\\1&0\end{bmatrix}$. The Newton equation forces $\Delta x=0$ and $\Delta\lambda=2\alpha^3+\alpha^4$, so one exact correction reaches the section root $(\alpha+\alpha^2,(\alpha+\alpha^2)^2)$. [F2, step 2.1, algebra]

4.1 At the corrected center $z_*=(x_*,x_*^2)$, where $x_*:=\alpha+\alpha^2<1/4$, the inverse bordered Jacobian is $\begin{bmatrix}0&1\\-1&2x_*\end{bmatrix}$. Its operator norm is at most its Frobenius norm $\sqrt{2+4x_*^2}<2$. Choose corrected-ball radius $R_1=\alpha/4$. The ball lies in $V$ since $x_*+R_1<1/4$. With exact data, $\widehat\beta=2$, zero residual and derivative errors, and Jacobian Lipschitz constant $2$, the certificate has $q=4R_1=\alpha<1$ and $\beta\rho=0$. It therefore certifies the next section root and, because the whole ball lies in $V$, identifies it with the unique forward branch point. With $N_{\rm req}=N_s=N_c=1$, residual tolerance $\epsilon=0$, and exact callbacks, steps 2.1 and 3.1 produce this accepted ball in one attempt and one Newton update. [F3, F4, step 1.2, step 2.1, step 3.1, given, choose, algebra]

5.1 The certified trace therefore starts at $x=-\alpha$ and accepts a next section root at $x=\alpha+\alpha^2>0$, with the fold $x=0$ lying between them on the supplied chart. It is a finite local continuation step through the fold even though $\lambda'(0)=0$; it asserts nothing about other components. [F4, step 1.1, step 1.2, step 2.1, step 4.1] ∎


## Remarks

The schematic below separates the horizontal predictor from the vertical
Newton correction; the small correction separation is enlarged and the
picture is not to scale. Here $x_*=\alpha+\alpha^2$,
$\bar z_0=(-\alpha,\alpha^2)$, $z_p=(x_*,\alpha^2)$, and
$z_*=(x_*,x_*^2)$. The dashed section has normal $\tau=(1,0)$.

```tikz
\begin{tikzpicture}[scale=1.6]
\draw[->] (-1.9,0) -- (2.5,0) node[right] {$x$};
\draw[->] (0,-0.35) -- (0,2.8) node[above] {$\lambda$};
\draw[thick] (-1.55,2.4025) .. controls (-1.033333,0.800833) and (-0.516667,0) .. (0,0);
\draw[thick] (0,0) .. controls (0.5,0) and (1,0.75) .. (1.5,2.25);
\node[right] at (1.55,2.35) {$\lambda=x^2$};
\draw[dashed] (1.25,-0.25) -- (1.25,2.1);
\node[below] at (1.25,-0.25) {$x=x_*$};
\draw[->,thick] (-1,1) -- (1.25,1);
\node[below] at (-0.45,1) {$H\widehat t$};
\draw[->,thick] (1.25,1) -- (1.25,1.5625);
\fill (-1,1) circle (1.5pt);
\node[left] at (-1.05,1) {$\bar z_0$};
\fill (1.25,1) circle (1.5pt);
\node[right] at (1.3,0.85) {$z_p$};
\fill (1.25,1.5625) circle (1.5pt);
\node[right] at (1.3,1.6) {$z_*$};
\fill (0,0) circle (1.5pt);
\node[below left] at (0,0) {fold};
\end{tikzpicture}
```

The predictor displacement is $H\widehat t=(2\alpha+\alpha^2,0)$.
The correction keeps $x=x_*$ fixed and adds
$\Delta\lambda=x_*^2-\alpha^2=2\alpha^3+\alpha^4>0$, exactly as in
Verification steps 2.1 and 3.1. The two solution points have opposite signs
of $x$, with the fold between them on the graph. Acceptance still requires
the certificate in step 4.1; the rigorous verification is independent of
the illustration.
