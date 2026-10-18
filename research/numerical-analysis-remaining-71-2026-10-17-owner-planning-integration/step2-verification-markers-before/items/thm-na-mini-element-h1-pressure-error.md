---
id: thm-na-mini-element-h1-pressure-error
kind: theorem
title: "Mini-element H1 velocity and L2 pressure error estimate"
status: draft
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps: ["def-na-mini-element-p1-bubble-p1-spaces", "lem-na-scott-zhang-boundary-preserving-p1-interpolant", "thm-na-mixed-galerkin-quasioptimality", "thm-na-mini-element-fortin-stability", "def-na-stokes-zero-mean-pressure-and-velocity-spaces", "lem-na-homogeneous-dirichlet-korn-identity", "thm-holder-inequality-for-integrals", "def-countable-choice", "lem-na-homogeneous-dirichlet-poincare", "cor-cauchy-schwarz-inequality-for-l-two"]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Chapters 49–54 (complete course notes)"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap49.pdf
      locator: "§49.4.2, Babuška–Brezzi; Chapter 50, §§50.1–50.2, mixed approximation and Schur complement; Chapters 53–54, Stokes and MINI element."
    - title: "Daniele Boffi, Franco Brezzi, Michel Fortin, Mixed Finite Element Methods and Applications (complete textbook)"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Chapter 5, Theorem 5.2.2 and pp. 276–277; Chapter 8, §§8.2, 8.4.2, 8.5.5, 8.6.1, 8.7.1 and 8.10."
---

## Statement

Assume Countable Choice. Let $D$ be a bounded connected Lipschitz polygonal/polyhedral domain in dimension $d=2$ or $3$, with a conforming shape-regular simplicial mesh family of mesh size $h$. Put $V=H^1_0(D;\mathbb R^d)$ and $Q=L^2_0(D)$. For $\nu>0$ and $F\in V'$, suppose $(u,p)\in V\times Q$ satisfies
$$2\nu\int_D\varepsilon(u):\varepsilon(v)-\int_Dp\,\operatorname{div}v=F(v),\qquad -\int_Dq\,\operatorname{div}u=0$$
for every $v\in V,q\in Q$, with $u\in H^2(D;\mathbb R^d)$ and $p\in H^1(D)$. Let $(u_h,p_h)\in V_h\times Q_h$ solve the same equations for every $v_h\in V_h,q_h\in Q_h$, where $V_h,Q_h$ are the P1-bubble/P1 mini spaces. Then
$$\|u-u_h\|_{H^1(D)}+\|p-p_h\|_{L^2(D)}\le C h(\|u\|_{H^2(D)}+\|p\|_{H^1(D)}).$$
The constant is independent of $h$ and depends on $d$, $D$, shape regularity, $\nu$, $C_{\rm div}(D)$, and the Poincare constant. The mixed error formula retains $M_a=2\nu$, $M_b=\sqrt d$, discrete-kernel coercivity $\alpha_*=\nu$, and $\beta_h\ge(C_FC_{\rm div}(D))^{-1}$ explicitly.
## Facts & Assumptions

**Given:** Countable Choice; the continuous Stokes solution with the stated regularity, the mini-element spaces, a conforming shape-regular mesh, and positive viscosity $\nu$.

[A1] Countable Choice is inherited through the Sobolev Hilbert and interpolation inputs. ([[def-countable-choice]])

[F1] The mini pair is $V_h=[S^1_{h,0}]^d\oplus\sum_Kb_K\mathbb R^d$, $Q_h=S^1_h\cap L^2_0$, with continuous piecewise P1 pressures. ([[def-na-mini-element-p1-bubble-p1-spaces]])

[F2] The face-average map is defined on all of $H^1(D)$ with values in continuous piecewise P1, has the H1-to-L2 and H2-to-H1 estimates, and maps $H^1_0(D)$ into the zero-boundary subspace. ([[lem-na-scott-zhang-boundary-preserving-p1-interpolant]])

[F3] The mini Fortin map gives $\beta_h\ge(C_FC_{\rm div}(D))^{-1}$, and the mixed Galerkin theorem gives the explicit velocity/pressure bounds $U_h,P_h$. ([[thm-na-mini-element-fortin-stability]], [[thm-na-mixed-galerkin-quasioptimality]])

[F4] The Stokes conventions are $a_\nu(u,v)=2\nu\int\varepsilon(u):\varepsilon(v)$, $b(v,q)=-\int q\operatorname{div}v$, and the velocity gradient norm; the zero-boundary Poincare inequality controls the full H1 norm. ([[def-na-stokes-zero-mean-pressure-and-velocity-spaces]], [[lem-na-homogeneous-dirichlet-poincare]])

[F5] The homogeneous Korn identity gives $2\|\varepsilon(v)\|_2^2=\|\nabla v\|_2^2+\|\operatorname{div}v\|_2^2$. ([[lem-na-homogeneous-dirichlet-korn-identity]])

[F6] Holder bounds the mean of an L2 error by $|D|^{1/2}$ times its L2 norm. ([[thm-holder-inequality-for-integrals]])

[F7] The L2 Cauchy--Schwarz inequality gives $\int|fg|\le\|f\|_2\|g\|_2$. ([[cor-cauchy-schwarz-inequality-for-l-two]])

## Proof

1.1 Set $w_h=I_hu$. By [F2], $w_h\in V_h$ and $\delta_u:=\|u-w_h\|_V\le C_Ih\|u\|_{H^2}$. Define $\widetilde p_h=I_hp$ and subtract its mean, $r_h=\widetilde p_h-|D|^{-1}\int_D\widetilde p_h$. Then $r_h\in Q_h$. Since $p$ has zero mean, $|D|^{1/2}|D|^{-1}|\int_D(\widetilde p_h-p)|\le\|\widetilde p_h-p\|_2$, and [F2] gives $\delta_p:=\|p-r_h\|_2\le2C_Ih\|p\|_{H^1}$. [A1, F1, F2, F6, given]

2.1 The strain bound $|\varepsilon(v)|\le|\nabla v|_F$ and Cauchy–Schwarz give $M_a\le2\nu$; $|\operatorname{div}v|\le\sqrt d|\nabla v|_F$ gives $M_b\le\sqrt d$. By [F5], $a_\nu(v,v)=2\nu\|\varepsilon(v)\|_2^2\ge\nu\|\nabla v\|_2^2$ for every $v\in V_h$, so $\alpha_*=\nu$. The uniform Fortin theorem in [F3] supplies the stated $\beta_h$ bound. [A1, F3, F4, F5, F7, step 1.1]

3.1 Apply [F3] with the approximants of step 1.1 and these constants. The explicit quantities $R_h,U_h,P_h$ are linear combinations of $\delta_u,\delta_p$ with coefficients depending only on $\nu,d,\beta_h$; the lower bound on $\beta_h$ makes those coefficients uniform in $h$. Thus $\|u-u_h\|_V+\|p-p_h\|_2\le C h(\|u\|_{H^2}+\|p\|_{H^1})$. [A1, F2, F3, step 1.1, step 2.1]

4.1 Since $u-u_h\in H^1_0(D)^d$, [F4] gives $\|u-u_h\|_{H^1}\le(1+C_P(D)^2)^{1/2}\|u-u_h\|_V$. Absorb this fixed domain factor into $C$; it is independent of $h$. This proves the asserted full H1 velocity estimate without asserting additional regularity of the Stokes solution. [A1, F4, step 3.1] ∎
