---
id: def-phase-field-discrete-realizations
kind: definition
title: No-flux finite-volume and conforming realizations for phase fields
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-phase-field-gradient-flow-and-double-well
  - def-fv-admissible-cell-face-mesh
  - def-tpfa-harmonic-face-scheme
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: R. Eymard, T. Gallouët, and R. Herbin, Finite Volume Methods, Handbook of Numerical Analysis, Vol. VII, 2000; complete updated author text
      url: https://raphaeleh.github.io/PUBLI/bookevol.pdf
      locator: "Chapter 9 §9.2, Definition 9.1 and equations (9.17)–(9.23), printed pp. 35–42, for orthogonal cell-centred transmissibilities and conservative face fluxes; Chapter 10 §§10.1–10.2, printed pp. 63–68, for the pure-diffusion Neumann scheme, mean-zero gauge, and connected-cell kernel."
    - title: "Jérôme Droniou, Finite volume schemes for diffusion equations: introduction to and review of modern methods, 2014"
      url: https://arxiv.org/pdf/1407.1567
      locator: "§2, equations (2.1)–(2.7), PDF pp. 8–10, for orthogonality, the two-point flux, the discrete energy, and the fact that the Dirichlet boundary term belongs only to the Dirichlet branch."
    - title: Jie Shen and Xiaofeng Yang, Numerical approximations of Allen-Cahn and Cahn-Hilliard equations, Discrete and Continuous Dynamical Systems A 28 (2010), 1669–1691
      url: https://www.math.purdue.edu/~shen7/pub/ac_ch.pdf
      locator: "§3.1, mixed Cahn–Hilliard formulation (3.1), printed p. 1681 / PDF p. 12: the two second-order weak equations and homogeneous Neumann conventions."
verification:
  precheck: n/a
---

## Definition

The **no-flux finite-volume realization** starts from a finite connected cell-face mesh as in [[def-fv-admissible-cell-face-mesh]] and uses the interior-face orthogonality and positive transmissibilities of [[def-tpfa-harmonic-face-scheme]]. For unit diffusivity, let $X_h=\mathbb R^{\mathcal K}$, $m_h(u,v)=\sum_{K\in\mathcal K}|K|u_Kv_K$, and
$$a_h(u,v)=\sum_{F=K|L\in\mathcal F_{\rm int}}T_F(u_K-u_L)(v_K-v_L).$$
There is no boundary-face term: the flux through each physical boundary face is prescribed to be zero. Define $A_h:X_h\to X_h$ by $m_h(A_hu,v)=a_h(u,v)$ for all $v\in X_h$. Split the double-well density as
$$F_\varepsilon=F_c-F_e,\qquad F_c(s)=\frac{s^4}{4\varepsilon^2}+\frac{s^2}{2\varepsilon^2},\qquad F_e(s)=\frac{s^2}{\varepsilon^2}-\frac{1}{4\varepsilon^2}.$$
The associated finite-volume energy components are
$$E_{c,h}(u)=\sum_K|K|\left(\frac{u_K^4}{4\varepsilon^2}+\frac{u_K^2}{2\varepsilon^2}\right),\qquad E_{e,h}(u)=\sum_K|K|\left(\frac{u_K^2}{\varepsilon^2}-\frac{1}{4\varepsilon^2}\right).$$

For convergence on $\Omega=(0,L)$, a second realization uses the same orthogonal dual mesh with centers $x_i=(i-\tfrac12)h$, $h=L/N$. Its conforming space $V_h$ consists of functions affine between consecutive centers and constant on the two half-cells between a boundary and the nearest center. Its inner product is the exact $L^2(0,L)$ inner product, its stiffness is $a_h(v,w)=\int_0^L v'w'\,dx$, and its energy components are $E_{c,h}(v)=\int_0^L F_c(v)\,dx$ and $E_{e,h}(v)=\int_0^L F_e(v)\,dx$. Define $A_h:V_h\to V_h$ by $(A_hv,w)_{L^2}=a_h(v,w)$. For degrees of freedom $v_i=v(x_i)$, this stiffness is exactly the interior two-point flux form $\sum_{i=1}^{N-1}(v_{i+1}-v_i)(w_{i+1}-w_i)/h$; the exact mass and potential integrals are the conforming reconstruction used in the convergence theorem.

Both realizations have a constant function $\mathbf1$, a real finite-dimensional inner-product space, and a self-adjoint nonnegative operator $A_h$. They share the physical energy $E_h(u)=\frac\kappa2m_h(A_hu,u)+E_{c,h}(u)-E_{e,h}(u)$, with the appropriate inner product and energy components for the realization. The sign convention is $A_h\approx-\Delta$.

```tikz
\begin{tikzpicture}[x=1.2cm,y=1cm]
  \draw[thick] (0,0) -- (4,0);
  \foreach \x/\lab in {0.5/K_1,1.5/K_2,2.5/K_3,3.5/K_4} {
    \fill (\x,0) circle (2pt);
    \node[above] at (\x,0.05) {$\lab$};
  }
  \foreach \x in {1,2,3} {
    \draw[dashed] (\x,-0.2) -- (\x,0.2);
    \draw[->,blue] (\x-0.28,-0.42) -- (\x+0.28,-0.42);
    \node[below] at (\x,-0.42) {$Q_F$};
  }
  \draw[red] (0,-0.23) -- (0,0.23);
  \draw[red] (4,-0.23) -- (4,0.23);
  \node[below] at (0,-0.23) {$Q=0$};
  \node[below] at (4,-0.23) {$Q=0$};
\end{tikzpicture}
```

The diagram labels four adjacent cell values, three shared interior fluxes, and the prescribed zero boundary fluxes. Each interior flux appears with opposite signs in its two cell balances. The diagram records the convention only; it is not used as a proof.

## Remarks

The published TPFA theorem [[thm-tpfa-green-coercivity-maximum-principle]] treats homogeneous Dirichlet data and its energy includes boundary penalties. The no-flux realization above deliberately omits those terms and uses only its interior transmissibilities; its kernel and gauge are proved separately in [[lem-phase-field-neumann-laplacian-kernel-and-gauge]]. The conditional parabolic limit item [[lem-mimetic-fv-parabolic-limit-identification]] assumes zero-boundary $W_0^{1,p}$ reconstructions and is not used for this Neumann branch. The finite-dimensional gradient-flow algorithm also applies to the conforming realization stated above.
