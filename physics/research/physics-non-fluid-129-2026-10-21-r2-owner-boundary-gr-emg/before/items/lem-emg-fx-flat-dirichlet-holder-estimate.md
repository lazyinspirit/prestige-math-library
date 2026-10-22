---
id: lem-emg-fx-flat-dirichlet-holder-estimate
kind: lemma
title: Flat Dirichlet Holder estimate by normal-jet lifting and reflection
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 1
proof_strategy: direct
deps:
  - lem-emg-fx-newtonian-holder-potential
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - def-countable-choice
dependency_roles:
  lem-emg-fx-newtonian-holder-potential: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Xu-Jia Wang, Schauder Estimates for Elliptic and Parabolic Equations (2006), Theorem 1 and Theorem 1-prime, pages 1-3"
      url: "https://maths-people.anu.edu.au/~wang/publications/3-Schauder-esti.pdf"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice and fix $0<\alpha<1$. Put $B_R^+=B_R(0)\cap\{x_3>0\}$ and $T_R=B_R(0)\cap\{x_3=0\}$. Suppose $u$ is bounded and $C^2$ up to the flat face locally in $B_R\cap\{x_3\ge0\}$, $\Delta u=f$ in $B_R^+$, $u=0$ on $T_R$, and $f\in C^{0,\alpha}(\overline{B_R^+})$. There is no condition on the curved boundary and no requirement that $f|_{T_R}=0$. Then

$$\sum_{j=0}^2R^j\|D^ju\|_{\infty;B_{R/2}^+}+R^{2+\alpha}[D^2u]_{\alpha;B_{R/2}^+}\le C_\alpha\bigl(\|u\|_{\infty;B_R^+}+R^2\|f\|_\infty+R^{2+\alpha}[f]_\alpha\bigr).$$

The derivatives extend Hölder continuously to the flat face. The constant is independent of $R$ and of any higher derivative of a smooth approximant.

## Statement references

[[lem-emg-fx-newtonian-holder-potential]]

## Facts & Assumptions

**Given:** The radius, exponent, half-ball, classical solution and forcing in the Statement.

[A1] Countable Choice is assumed for the integration suppliers. [[def-countable-choice]]

[F1] The local Newtonian cancellation proof supplies $-\Delta NG=G$ and the full scaled $C^{2,\alpha}$ estimate for compactly supported globally Hölder data in three dimensions. [[lem-emg-fx-newtonian-holder-potential]]

[F2] Smooth nonnegative radial bumps, and hence normalized smooth mollifiers, exist in Euclidean balls. [[lem-smooth-bump-between-concentric-euclidean-balls]]

[F3] The divergence theorem on balls gives the mean-value identity for classical harmonic functions, by differentiation of their sphere averages. [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]

## Proof

1.1 Scale first to $R=1$. Write $x=(x',t)$, $t=x_3$. The boundary function $g(x')=f(x',0)$ on the closed unit disk is bounded by $M=\|f\|_\infty$ and has seminorm at most $H=[f]_\alpha$. Extend it to all $\mathbb R^2$ by taking $\inf_z(g(z)+H|x'-z|^\alpha)$ over the original disk and clamping to $[-M,M]$. The inequality $(a+b)^\alpha\le a^\alpha+b^\alpha$ shows that this infimum is $H$-Hölder; the original Hölder inequality and $z=x'$ show agreement on the disk. Clamping is one-Lipschitz and preserves this agreement. For $H=0$ take the constant extension. Thus no differentiability of the boundary forcing is assumed. [given, construct, algebra]

2.1 Choose a two-dimensional mollifier $\rho$ from [F2], set $g_t(x')=\int\rho(z)g(x'-tz)\,dz$ for $t>0$, and put $L(x',t)=t^2g_t(x')/2$. A derivative of total order $k\ge1$ in $(x',t)$ of the kernel $t^{-2}\rho((x'-y')/t)$ has integral zero and has the form $t^{-2-k}P((x'-y')/t)$, with $P$ smooth and compactly supported. Subtract $g(x')$ under that differentiated integral to obtain $|D^kg_t|\le C_kH t^{\alpha-k}$ for $k=1,2,3$, and $|g_t-g|\le CHt^\alpha$. Differentiation is legitimate on every compact positive-$t$ interval because the differentiated kernels are bounded and compactly supported there. [given, F2, step 1.1, construct, algebra]

3.1 Set $L=DL=0$ on the face. For $i,j<3$, direct differentiation gives $L_{ij}=t^2(g_t)_{ij}/2$, $L_{it}=t(g_t)_i+t^2(g_t)_{it}/2$ and $L_{tt}=g_t+2t(g_t)_t+t^2(g_t)_{tt}/2$. Consequently $D^2L(x',t)$ differs by at most $CHt^\alpha$ from the boundary matrix whose sole nonzero entry is its normal-normal entry $g(x')$, and $|D^3L|\le CHt^{\alpha-1}$. These are actual boundary jets: $L/t^2\to g/2$, $L_t/t\to g$, and $L_i/t\to0$. For points $X=(x',t),Y=(y',s)$ at distance $d$, if $d<\min(t,s)/2$, integrate the third-derivative bound along their segment to get $CHd\min(t,s)^{\alpha-1}\le CHd^\alpha$. Otherwise $\min(t,s)\le2d$ and $\max(t,s)\le3d$; compare both Hessians to their boundary jets and use the Hölder bound of $g$. Thus $\|L\|_{C^{2,\alpha}(\mathbb R^2\times[0,1])}\le C_\alpha(M+H)$ and $(\Delta L)(x',0)=g(x')$. [step 2.1, algebra]

4.1 Let $v=u-L$ and $F=f-\Delta L$. Then $v=0$ and $F=0$ on the flat face, $\Delta v=F$, and $\|F\|_{C^{0,\alpha}}+\|L\|_{C^{2,\alpha}}\le C_\alpha\|f\|_{C^{0,\alpha}}$. Because $v$ is $C^2$ up to the face and has zero face restriction, its tangential first and second derivatives vanish there. The continuous equation then gives $v_{tt}=0$ there. Its odd reflection $V(x',-t)=-v(x',t)$ is therefore $C^2$ across the face: tangential-tangential and normal-normal Hessian entries are odd with zero trace, and mixed entries are even with matching traces. Its equation is $\Delta V=F_o$, with $F_o$ the odd reflection of $F$. For opposite-side points $(x',t),(y',-s)$, the zero trace gives $|F_o(x',t)-F_o(y',-s)|\le[F]_\alpha(t^\alpha+s^\alpha)\le2^{1-\alpha}[F]_\alpha|(x',t)-(y',-s)|^\alpha$. Same-side pairs use the original bound. Hence $F_o\in C^{0,\alpha}(B_1)$ with controlled norm. The original forcing has not been reflected without first removing its possibly nonzero trace. [given, step 3.1, algebra]

5.1 Choose a fixed radial $\eta$ equal to one on $B_{3/4}$ and supported in $B_{7/8}$, extend $G=\eta F_o$ by zero, and put $W=-NG$. The Hölder product inequality and the support buffer give $\|G\|_{C^{0,\alpha}(\mathbb R^3)}\le C\|F_o\|_{C^{0,\alpha}(B_1)}$: a point in $B_{7/8}$ is at distance at least $1/8$ from the exterior of $B_1$. By [F1], $\Delta W=G$ and $\|W\|_{C^{2,\alpha}(B_{3/4})}\le C_\alpha\|f\|_{C^{0,\alpha}}$. The radial kernel and cutoff are even in the normal coordinate, so $W$ is odd, and on the upper half-space it is exactly the reflected Green potential $-\int_{y_3>0}(\Phi(x-y)-\Phi(x-y^*))\eta(y)F(y)\,dy$, with $y^*=(y',-y_3)$. This reflection uses the corrected zero-trace Hölder datum, not a discontinuous odd extension of $f$. [A1, F1, F2, step 4.1, construct, algebra]

6.1 The remainder $H_0=V-W$ is harmonic in $B_{3/4}$ with $\|H_0\|_\infty\le\|u\|_\infty+C_\alpha\|f\|_{C^{0,\alpha}}$. By [F3], its sphere averages equal its center value. Average those identities against a fixed smooth radial kernel supported in $B_{1/16}$. On $B_{5/8}$ this writes $H_0=\kappa*H_0$ using only values in $B_{3/4}$; differentiation falls on $\kappa$, giving $\|D^jH_0\|_{\infty;B_{1/2}}\le C_j\|H_0\|_\infty$ for $j\le3$. Integration along segments then bounds $[D^2H_0]_{\alpha;B_{1/2}}$. Combining these bounds with $u=L+W+H_0$ on the upper half-ball proves the unit-radius estimate, including its flat-face limits. [F2, F3, step 3.1, step 5.1, algebra]

7.1 For general $R$, apply the unit result to $u_R(x)=u(Rx)$ and $f_R(x)=R^2f(Rx)$. Derivatives scale by $R^j$ and the Hessian Hölder seminorm by $R^{2+\alpha}$. Thus the displayed estimate follows with the same constant. Only the given $C^2$ boundary regularity was used to justify reflection; no bound on higher derivatives of $u$ or $f$ has entered. [step 1.1, step 6.1, algebra] ∎
