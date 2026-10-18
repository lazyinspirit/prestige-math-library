---
id: ex-hp-reentrant-corner-h-versus-hp
kind: example
title: A reentrant-corner mode separates fixed-degree h error from hp error
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps:
  - def-hp-variable-degree-spaces-on-matching-meshes
  - cor-finite-dimensional-subspaces-are-closed
  - lem-hp-weighted-analytic-corner-pointwise-control
  - thm-hp-corner-exponential-energy-convergence
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
axiom_use: The local H1/not-H2 computation and fixed-degree h lower bound are choice-free. The geometric hp comparison uses Countable Choice through the weighted pointwise, conformity, and Céa suppliers.
generation:
  role: example
sources:
  references:
    - title: "Martin Vohralík, Finite Element Methods, Chapter 6: hp finite elements"
      url: https://who.rocq.inria.fr/Martin.Vohralik/Enseig/FEM/FEM.pdf
      locator: "Theorems 6.2.1 and 6.4.1, printed pp. 55–58: the p-approximation and exponential corner comparison context; omitted approximation details are supplied locally in this batch."
    - title: Yanchen He, Paul Houston, Christoph Schwab, and Thomas P. Wihler, Exponential Convergence of hp-ILGFEM, version 1
      url: https://arxiv.org/pdf/2404.18569
      locator: "§2.3 and §4.1, Definition 1, equations (29)–(31), and Theorem 2, PDF pp. 5–11: weighted corner class and geometric hp comparison context; the proof below verifies both the local h witness and its weighted membership."
---

## Example

Assume Countable Choice for the hp comparison. Let

$$
\Omega=((-1,1)\times(0,1))\cup((-1,0)\times(-1,1)),
$$

the L-shaped polygon with reentrant corner at the origin. In polar coordinates about the origin, $\Omega$ lies in $0<\theta<3\pi/2$. Define

$$
u(r,\theta)=r^{2/3}\sin(2\theta/3).
$$

This mode vanishes on exactly the two boundary edges ending at the origin, which are the fixed Dirichlet set $\Gamma_D$; no zero boundary value is imposed on the outer edges. Let $\widehat T$ be a fixed nondegenerate closed triangle with one vertex at the origin and $\widehat T\setminus\{0\}\subset\Omega$. Choose $h_0>0$ so $T_h=h\widehat T\subset\overline\Omega$ for $0<h\le h_0$. For each fixed integer degree $p\ge0$ there is $c_p>0$ such that

$$
\inf_{q\in\mathbb P_p(T_h)}|u-q|_{H^1(T_h)}\ge c_ph^{2/3}.
$$

This gives a local lower bound for fixed-degree approximation; if $T_h$ is itself one cell of a piecewise-polynomial mesh and its local degree is $p$, it also bounds below the global error on that mesh. In contrast, on any nested matching shape-regular corner-graded mesh family satisfying the hypotheses of [[thm-hp-corner-exponential-energy-convergence]], with uniform total degrees $p_k\simeq k$ and zero values imposed only on $\Gamma_D$,

$$
\inf_{v_k\in V_k}|u-v_k|_{H^1(\Omega)}\le Ce^{-bN_k^{1/3}}.
$$


The diagram records the reentrant sector and the two boundary edges in $\Gamma_D$. The proof uses the coordinate description above, not the picture.

```tikz
\begin{tikzpicture}[scale=1.35]
  \fill[gray!12] (-1,-1) -- (0,-1) -- (0,0) -- (1,0) -- (1,1) -- (-1,1) -- cycle;
  \draw[thick] (-1,-1) -- (0,-1) -- (0,0) -- (1,0) -- (1,1) -- (-1,1) -- cycle;
  \draw[blue,very thick] (0,-1) -- (0,0) -- (1,0);
  \draw[->] (0.42,0) arc[start angle=0,end angle=270,radius=0.42];
  \node[blue] at (0.47,0.13) {$\Gamma_D$};
  \node[above left] at (0,0) {$c=(0,0)$};
  \node at (-0.55,0.52) {$u(r,\theta)$};
  \node[right] at (1,0) {$\theta=0$};
  \node[below] at (0,-1) {$\theta=3\pi/2$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The L-shaped polygon and mode just defined; polar exponent $\lambda=2/3$; a fixed nondegenerate closed triangle $\widehat T$ with vertex $0$ and punctured interior in $\Omega$; $h_0>0$ such that $T_h\subset\overline\Omega$ for $0<h\le h_0$; integer $p\ge0$; and Countable Choice for the hp comparison.

[F1] On an affine simplex of size $h$, the local degree-$p$ approximation space is $\mathbb P_p$ and the hp conformity convention is matching polynomial traces. ([[def-hp-variable-degree-spaces-on-matching-meshes]])

[F2] Every finite-dimensional subspace of a normed space is closed, including the gradient image of $\mathbb P_p(\widehat T)$. ([[cor-finite-dimensional-subspaces-are-closed]])

[F3] The geometric corner theorem proves the best-approximation rate for the stated weighted-analytic class, grading law, uniform degree law, and boundary set. ([[thm-hp-corner-exponential-energy-convergence]])

[F4] The weighted pointwise supplier verifies the continuous representative and the meaning of its boundary values for the corner class. ([[lem-hp-weighted-analytic-corner-pointwise-control]])

## Verification

1.1 With $\lambda=2/3$, polar differentiation gives $|u|=r^\lambda|\sin(\lambda\theta)|$ and $|\nabla u|^2=\lambda^2r^{2\lambda-2}$. The polygon is bounded, and the area element is $r\,dr\,d\theta$, so $u\in L^2(\Omega)$ and $\nabla u\in L^2(\Omega)$ because $\int_0^Rr^{2\lambda+1}dr$ and $\int_0^Rr^{2\lambda-1}dr$ are finite at zero. The origin is on the boundary and $u$ is smooth in $\Omega$, so these classical derivatives are its weak derivatives; hence $u\in H^1(\Omega)$. [given, algebra]

2.1 In the polar orthonormal frame the Hessian entries are $u_{rr}=\lambda(\lambda-1)r^{\lambda-2}\sin(\lambda\theta)$, $u_{r\theta}^{\rm orth}=\lambda(\lambda-1)r^{\lambda-2}\cos(\lambda\theta)$, and $u_{\theta\theta}^{\rm orth}=\lambda(1-\lambda)r^{\lambda-2}\sin(\lambda\theta)$. Counting both symmetric off-diagonal entries gives $|D^2u|^2=2\lambda^2(1-\lambda)^2r^{2\lambda-4}$. Its area integral contains $\int_0^1r^{2\lambda-3}dr=\int_0^1r^{-5/3}dr=\infty$. If $u\in H^2$, its weak Hessian agrees with its classical Hessian on every punctured sub-sector, contradicting this divergent integral. Thus $u\notin H^2(\Omega)$. [given, step 1.1, algebra]

2.2 On the sector, $u=\operatorname{Im}z^{2/3}$ for the branch $0<\arg z<3\pi/2$. Repeated differentiation gives $\sum_{|\alpha|=j}|D^\alpha u|\le C^jj!r^{2/3-j}$. Set $\beta_0=1/2$ at the origin and $\beta_i=0$ at every other polygon corner. The other-corner factors in $\Phi_{\beta+j-2}$ are bounded above by $C^j$ on the bounded polygon; the origin factor changes the radial power to $r^{1/2+j-2+2/3-j}=r^{-5/6}$. Hence the squared weighted integral near the origin is bounded by $C^{2j}(j!)^2\int_0^Rr^{-5/3}r\,dr$, which is finite. Away from the origin the mode has a local analytic branch at every point of the closure, so all remaining weighted integrals are bounded by another $C^{2j}(j!)^2$ factor. Since $j!/(j-2)!=j(j-1)\le2^j$, the bound is at most $(2C)^j(j-2)!$; taking $d_u=\max(1,2C)$ and $C_u=d_u^2$ proves the exact $B^2_\beta$ factorial bound in [F3]. The pointwise supplier [F4] then gives the continuous representative. [F3, F4, step 1.1, given, algebra]

3.1 Define $c_p=\inf_{q\in\mathbb P_p(\widehat T)}\|\nabla(u-q)\|_{L^2(\widehat T)}$. The gradients of $\mathbb P_p(\widehat T)$ form a finite-dimensional, hence closed, subspace of $L^2(\widehat T;\mathbb R^2)$ by [F2]. If $c_p=0$, then $\nabla u$ lies in the closure of that subspace, hence equals $\nabla q$ almost everywhere for some $q\in\mathbb P_p(\widehat T)$. Both gradients are continuous on the punctured open triangle. If they differed at one point, continuity would give a nonempty open rectangle on which they differ, contradicting their almost-everywhere equality. Thus they agree throughout that open set; differentiating gives $D^2u=D^2q$, impossible because the polynomial Hessian is bounded near the origin while step 2.1 has a nonintegrable Hessian. Therefore $c_p>0$. [F1, F2, step 2.1, given]

4.1 For any $q_h\in\mathbb P_p(T_h)$ set $\widehat q(y)=h^{-2/3}q_h(hy)\in\mathbb P_p(\widehat T)$. Homogeneity $u(hy)=h^{2/3}u(y)$ and the change of variables $x=hy$ give $\|\nabla_x(u-q_h)\|_{L^2(T_h)}=h^{2/3}\|\nabla_y(u-\widehat q)\|_{L^2(\widehat T)}\ge c_ph^{2/3}$. Taking the infimum proves the asserted local lower bound. If $T_h$ is one mesh cell of degree $p$, restricting any global finite-element error to that cell gives the same lower bound. [F1, step 3.1, given, algebra]

5.1 The mode vanishes on the two edges $\theta=0$ and $\theta=3\pi/2$, so it satisfies precisely the boundary condition on $\Gamma_D$. Step 2.2 verifies $u\in B^2_\beta(\Omega)$ for the stated weights. Applying [F3] to any mesh and uniform degree sequence satisfying its geometric grading, cell-count, and degree hypotheses proves the global hp upper estimate on this same polygon. Together with step 4.1 this is the stated fixed-degree local h lower bound versus global hp upper bound. No outer-edge zero condition is used. [F3, F4, step 1.1, step 4.1, step 2.2, given] ∎
