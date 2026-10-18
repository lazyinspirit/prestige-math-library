---
id: ex-fas-semilinear-reaction-diffusion-local-convergence
kind: example
title: "A two-node semilinear diffusion FAS cycle has an explicit local rate"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - alg-fas-two-grid-cycle
  - lem-fas-fine-root-fixed-point
  - lem-fas-coarse-branch-derivative
  - lem-fas-second-derivative-of-composed-cycle-map
  - thm-fas-local-contraction-under-derivative-bound
  - thm-mean-value-inequality-for-total-derivatives
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "William L. Briggs, Van Emden Henson, and Steve F. McCormick, A Multigrid Tutorial, 2nd ed., Chapter 6"
      url: "https://amath.colorado.edu/~stevem/appm6640/mgtut13notes.pdf"
    - title: "Harald van Brummelen, Basics of Multigrid Methods, SINTEF winter-school lecture notes"
      url: "https://www.sintef.no/globalassets/project/evitameeting/2011/lecture1.pdf"
    - title: "Van Emden Henson, Multigrid Methods for Nonlinear Problems: An Overview, UCRL-JC-150259"
      url: "https://digital.library.unt.edu/ark%3A/67531/metadc1402426/m2/1/high_res_d/15002749.pdf"
---

## Statement

On $\Omega=(0,3)$ with homogeneous endpoint values, the $h=1$ centered
finite-difference discretization of the semilinear equation
$-u''+u^3=0$ has fine residual
$$F(u)=Au+(u_1^3,u_2^3),\qquad A=\begin{pmatrix}2&-1\\-1&2\end{pmatrix}.$$
Use $P=(1,1)^{\mathsf T}$, $Iu=(u_1+u_2)/2$, $R=P^{\mathsf T}$, the
Galerkin coarse residual $F_H(v)=P^{\mathsf T}F(Pv)$, one pre- and one
post-sweep $S(u)=u-\tfrac14F(u)$, and the exact selected coarse root. The
unique fine root is $u_*=0$. The actual exact-branch FAS two-grid map is a
contraction toward $u_*$ on $\overline B_2(0,1/100)$ with error factor at most
$27/400$.

## Facts & Assumptions

**Given:** The finite-difference model, transfer maps, Galerkin coarse operator, exact coarse branch, one pre/post update $S$, and exact real arithmetic specified in the Statement. Matrix and linear-map operator norms are induced by the Euclidean norm; for a bilinear map $B$, $\|B\|_{\rm op}:=\sup_{\|v\|_2=\|w\|_2=1}\|B[v,w]\|_2$.

[F1] [[alg-fas-two-grid-cycle]]: the coarse target is $F_H(Iu)+R(-F(u))$ and the corrected state is $u+P(v-Iu)$.

[F2] [[lem-fas-coarse-branch-derivative]]: with invertible coarse Jacobian, the derivative of the actual two-grid map is the composition of the pre-smoother derivative, $I-PDF_H(Iu_*)^{-1}RDF(u_*)$, and the post-smoother derivative.

[F3] [[thm-fas-local-contraction-under-derivative-bound]]: if the actual cycle fixes the root, $q=\|DE(u_*)\|<1$, and $DE$ is $L$-Lipschitz on a radius-$r$ convex ball with $q+Lr/2<1$, then the cycle maps the ball into itself and contracts errors toward that root by $q+Lr/2$.

[F4] [[thm-mean-value-inequality-for-total-derivatives]]: on a convex open Euclidean set, a uniform bound on the total derivative of a map implies the corresponding Lipschitz bound between points of that set.

[F5] [[lem-fas-second-derivative-of-composed-cycle-map]]: if $E=T\circ C\circ S$, $y=S(x)$, and $z=C(y)$, then $D^2E(x)[h,k]=D^2T(z)[DC(y)DS(x)h,DC(y)DS(x)k]+DT(z)\bigl(D^2C(y)[DS(x)h,DS(x)k]+DC(y)D^2S(x)[h,k]\bigr)$.

## Example

**Given:** The mesh nodes $0,1,2,3$, endpoint values $u_0=u_3=0$, the fine operator and transfers in the Statement, and exact coarse root selection.

## Verification

1.1 The continuous model is $-u''+u^3=0$ on $(0,3)$ with zero endpoint values, and this proof concerns the specified finite-difference residual. The vectors $(1,1)^{\mathsf T}$ and $(1,-1)^{\mathsf T}$ are eigenvectors of $A$ with eigenvalues $1$ and $3$, so $z^{\mathsf T}Az\ge\|z\|_2^2$. For real $s,t$, $(s-t)(s^3-t^3)=(s-t)^2(s^2+st+t^2)\ge0$, since $s^2+st+t^2=((2s+t)^2+3t^2)/4$. Therefore, for $a,b\in\mathbb R^2$, $\langle a-b,F(a)-F(b)\rangle=(a-b)^{\mathsf T}A(a-b)+\sum_{i=1}^2(a_i-b_i)(a_i^3-b_i^3)\ge\|a-b\|_2^2$. Since $F(0)=0$, any other root $a$ would give $0=\langle a,F(a)-F(0)\rangle\ge\|a\|_2^2$, so $u_*=0$ is the unique root. Direct differentiation gives $DF(0)=A$. [given, algebra]

1.2 Direct multiplication gives $AP=P$, $P^{\mathsf T}AP=2$, and hence $F_H(v)=P^{\mathsf T}F(Pv)=2v+2v^3.$ Writing $m=Iu=(u_1+u_2)/2$, [F1] gives the coarse target $g(u)=F_H(m)-P^{\mathsf T}F(u)=2m^3-u_1^3-u_2^3.$ The scalar map $\phi(v)=2v+2v^3$ has $\phi'(v)=2+6v^2\ge2$ and limits $\pm\infty$ at $v\to\pm\infty$, so for every $g$ it has one exact root. An exact direct solver is $v(g)=\frac{2}{\sqrt3}\sinh\!\left(\frac13\operatorname{arsinh}\!\left(\frac{3\sqrt3}{4}g\right)\right),$ because $\sinh(3t)=3\sinh(t)+4\sinh^3(t)$; thus $\phi(v(g))=g$. The displayed formula is a composition of smooth real functions, so the selected branch, correction map $C$, and cycle map $E$ are $C^2$ on an open neighborhood of the ball. At $g=0$ the branch has $v=0$ and $\phi'(0)=2$. [given, F1, construct, algebra]

1.3 The pre/post map has derivative at zero $B_s=DS(0)=I_2-\tfrac14A=\begin{pmatrix}1/2&1/4\\1/4&1/2\end{pmatrix}.$ The coarse-branch equation has right side $g(u)$, a cubic with $Dg(0)=0$. Differentiating $\phi(v(u))=g(u)$ at zero gives $2Dv(0)=Dg(0)=0$. The derivative of the coarse correction is $Q=I_2-PI=I_2-\tfrac12\begin{pmatrix}1&1\\1&1\end{pmatrix},$ the orthogonal projection onto $(1,-1)$. The symmetric vector $(1,1)$ is an eigenvector of $B_s$ with eigenvalue $3/4$, and $(1,-1)$ has eigenvalue $1/4$. Thus for $E=S\circ C\circ S$, [F2] gives $DE(0)=B_sQB_s=\tfrac1{16}Q,\qquad q=\|DE(0)\|_2=\tfrac1{16}.$ [F2, algebra]

1.4 It remains to bound the derivative variation. Set $r=1/100$ and $m(u)=(u_1+u_2)/2$. On $\|u\|_2\le r$, $|m|\le r/\sqrt2,\quad |g(u)|<2r^3,\quad \|Dg(u)\|_2<6r^2,\quad \|D^2g(u)\|_{\rm op}<11r.$ The first inequality is Cauchy--Schwarz. The second follows from $g=2m^3-u_1^3-u_2^3$ and $|u_1|^3+|u_2|^3\le\|u\|_2^3$. Differentiating gives $Dg=6m^2Dm-3(u_1^2,u_2^2)$ and $D^2g=12m(Dm\otimes Dm)-\operatorname{diag}(6u_1,6u_2)$, which give the last two bounds. If $\phi(v(u))=g(u)$, then $|v|\le|g|/2<r^3$, $\|Dv\|\le\|Dg\|/2<3r^2$, and twice differentiating yields $\|D^2v\|<\tfrac12\bigl(11r+12r^3(3r^2)^2\bigr)=5.5r+54r^7.$ Writing $C(u)=Qu+Pv(u)$, it follows that $\|DC\|<1.001$ and $\|D^2C\|<0.08$ on this ball. [given, algebra]

2.1 Since $\|B_s\|_2=3/4$, $\|S(u)\|_2\le3r/4+r^3/4<r$ for $u$ in the radius-$r$ ball. Orthogonality of $Q u$ and $P v(u)$ gives $\|C(S(u))\|_2^2\le r^2+2r^6<4r^2$. On the radius-$2r$ ball, $\|DS\|_2<0.751$ and $\|D^2S\|_{\rm op}\le0.03$; on the radius-$r$ ball, $\|D^2S\|_{\rm op}\le0.015$. The formula [F5] for $E=S\circ C\circ S$ therefore gives $\|D^2E(u)\|_{\rm op}\le0.03(1.001\cdot0.751)^2+0.751\bigl(0.08\cdot0.751^2+1.001\cdot0.015\bigr)<0.07<1.$ For each unit $w\in\mathbb R^2$, apply [F4] on the open radius-$r$ ball to the map $u\mapsto DE(u)w$; the Hessian bound gives derivative norm less than $1$. By continuity the resulting Lipschitz bound extends to the closed ball, so $\|DE(x)-DE(y)\|_{\rm op}\le\|x-y\|_2$ there. [F4, F5, step 1.4, algebra]

3.1 The pre/post map $S$ fixes zero because $F(0)=0$. At $u=0$, [F1] gives restricted value $Iu=0$ and coarse target $F_H(0)=0$; by step 1.2, the exact selected coarse root is $v=0$, so the correction is zero and $E(0)=0$. By steps 1.3 and 2.1, $q=1/16$, $L=1$, and $r=1/100$, hence $q+Lr/2=\tfrac1{16}+\tfrac1{200}=\tfrac{27}{400}<1.$ Applying [F3] proves invariance of the ball and the stated local error rate. This single fixed mesh example makes no mesh-independent claim. [given, F1, F3, step 1.2, step 1.3, step 2.1, algebra] ∎
## Remarks

The diffusion matrix is the standard second-difference Dirichlet matrix for $-u''$ on the four nodes, and the cubic is a monotone semilinear reaction. The monotonicity and all FAS convergence hypotheses used here are checked directly in finite dimensions; no parabolic compactness, finite-element projector stability, or continuum convergence theorem is imported.

