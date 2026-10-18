---
id: lem-compressible-ideal-gas-entropy-pair-and-variables
kind: lemma
title: Strict convexity and entropy variables for the ideal-gas Euler flux
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
aliases: []
deps:
  - def-compressible-navier-stokes-fourier-model
  - lem-compressible-admissible-state-set-open-convex
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "F. Ismail and P. L. Roe, Affordable, entropy-consistent Euler flux functions II: Entropy production at shocks, Journal of Computational Physics 228 (2009), 5410–5436, complete paper"
      url: "https://www.math.umd.edu/~tadmor/references/files/Ismail%20and%20Roe%20affordable%20fluxes%20JCP2009.pdf"
      locator: "PDF pp. 8–9, printed pp. 5417–5418, equations (38)–(40): ideal-gas mathematical entropy and entropy variables in the normalized convention."
    - title: "Eitan Tadmor, Entropy Stable Schemes, Chapter 18, Handbook of Numerical Methods for Hyperbolic Problems: Basic and Fundamental Issues, 2016, complete chapter"
      url: "https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf"
      locator: "Printed pp. 469–470 and 482–483, Sections 1.1–1.2 and 4.6: entropy pairs, entropy variables, entropy potential, and ideal-gas Euler example."
    - title: "Pablo Fernandez, Ngoc-Cuong Nguyen, and Jaime Peraire, Entropy-stable hybridized discontinuous Galerkin methods for the compressible Euler and Navier-Stokes equations, complete author preprint"
      url: "https://arxiv.org/pdf/1808.05066"
      locator: "Section 2.3, equations (7)–(12), PDF pp. 3–4."
---

## Statement

For the ideal-gas model in [[def-compressible-navier-stokes-fourier-model]], the mathematical entropy $\eta=-\rho s$ has positive-definite Hessian on $\mathcal G$. Its entropy variables are

$$v(U)=\nabla_U\eta(U)=\left(c_v\gamma-s-\frac{\beta|u|^2}{2},\ \beta u,\ -\beta\right),\qquad \beta=\frac{c_v\rho}{\varepsilon}=\frac1T.$$

The Euler entropy flux $q_j(U)=\eta(U)u_j$ is compatible with $F_j$, meaning $\nabla_Uq_j=(\nabla_U\eta)^TDF_j$, and its entropy potential is $\psi_j(U)=v(U)^TF_j(U)-q_j(U)=\rho R u_j$. Consequently $U\mapsto v(U)$ is a local diffeomorphism at every $U\in\mathcal G$ and $\eta$ is strictly convex on $\mathcal G$.

## Facts & Assumptions

**Given:** $d\ge1$, $R>0$, $\gamma>1$, $c_v=R/(\gamma-1)$, $s_0\in\mathbb R$, and an admissible state $U=(\rho,m,E)\in\mathcal G$ with the thermodynamic functions defined in the model item.

[F1] [[def-compressible-navier-stokes-fourier-model]]: $\varepsilon=E-|m|^2/(2\rho)>0$, $u=m/\rho$, $p=(\gamma-1)\varepsilon$, $T=p/(R\rho)$, $s=c_v\log(p/\rho^\gamma)+s_0$, $\eta=-\rho s$, $F_j=(\rho u_j,mu_j+pe_j,(E+p)u_j)$, and $q_j=\eta u_j$.

[F2] [[lem-compressible-admissible-state-set-open-convex]]: $\mathcal G$ is open and convex, with $\rho>0$ and $E>|m|^2/(2\rho)$.

## Proof


1.1 Set $\varepsilon=E-|m|^2/(2\rho)$ and $u=m/\rho$. Rewriting the entropy gives $\eta=-c_v\rho\log((\gamma-1)\varepsilon)+c_v\gamma\rho\log\rho-s_0\rho$. For an increment $\delta U=(a,b,c)$, its first internal-energy variation is $\delta\varepsilon=c-u\cdot b+|u|^2a/2$, and its second directional variation is $D^2\varepsilon[\delta U,\delta U]=-|b-ua|^2/\rho$. The chain rule therefore yields $D^2\eta[\delta U,\delta U]=c_v\left(\frac{\gamma}{\rho}a^2-\frac{2}{\varepsilon}a\,\delta\varepsilon+\frac{\rho}{\varepsilon^2}(\delta\varepsilon)^2+\frac1{\varepsilon}|b-ua|^2\right)$. The first three terms have matrix $\begin{pmatrix}\gamma/\rho&-1/\varepsilon\\-1/\varepsilon&\rho/\varepsilon^2\end{pmatrix}$, whose leading diagonal entry is positive and determinant is $(\gamma-1)/\varepsilon^2>0$. The last term is nonnegative. If the full quadratic form is zero, then $a=\delta\varepsilon=0$ and $b=0$; the formula for $\delta\varepsilon$ then gives $c=0$. Thus the Hessian is positive definite. [F1, algebra]

2.1 Differentiating the same expression for $\eta$ gives $\beta=c_v\rho/\varepsilon=1/T$ and $v=(c_v\gamma-s-\beta|u|^2/2,\beta u,-\beta)$. Positive definiteness from step 1.1 makes $D_Uv=D_U^2\eta$ invertible, so the inverse function theorem gives a smooth local inverse near each state. Since $\mathcal G$ is convex by [F2], integrating the positive Hessian along the segment between any two distinct states also gives strict convexity of $\eta$ on $\mathcal G$. [F1, F2, step 1.1, algebra]

3.1 Fix $j$ and an arbitrary variation $dU=(d\rho,dm,dE)$, and write $du_j=(dm_j-u_j\,d\rho)/\rho$. Differentiating the flux in [F1] gives $dF_j=(u_jd\rho+\rho du_j,\ u_jdm+m\,du_j+e_jdp,\ u_j(dE+dp)+(E+p)du_j)$. With $v_m=\beta u$ and $v_E=-\beta$ from step 2.1, the $dp$ terms in $v^TdF_j-u_jv^TdU$ cancel, and the coefficient of $du_j$ is $\rho v_\rho+\beta\rho|u|^2-\beta(E+p)=-\rho s=\eta$, using $E=\varepsilon+\rho|u|^2/2$, $p=(\gamma-1)\varepsilon$, and $\beta\varepsilon=c_v\rho$. Thus $v^TdF_j=u_jv^TdU+\eta\,du_j=dq_j$ for every variation, proving $\nabla_Uq_j=v^TDF_j$ directly. [F1, step 2.1, algebra]

4.1 Direct substitution of $v$, $F_j$, and $q_j$ gives $v^TF_j-q_j=\bigl(\rho(c_v\gamma-s-\beta|u|^2/2)+\beta\rho|u|^2-\beta E+\rho s\bigr)u_j$. Using $E=\varepsilon+\rho|u|^2/2$ and $\beta\varepsilon=c_v\rho$, the coefficient simplifies to $c_v(\gamma-1)\rho=R\rho$. This proves $\psi_j=\rho R u_j$ and completes the stated entropy-pair and potential identities. [F1, step 2.1, step 3.1, algebra] ∎
