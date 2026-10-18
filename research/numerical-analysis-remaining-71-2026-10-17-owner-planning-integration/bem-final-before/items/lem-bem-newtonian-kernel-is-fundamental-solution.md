---
id: lem-bem-newtonian-kernel-is-fundamental-solution
kind: lemma
title: The three-dimensional Newton kernel is a fundamental solution
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-bem-newtonian-kernel-in-three-dimensions, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Martin Costabel, Boundary Integral Operators on Lipschitz Domains: Elementary Results (1988)"
      url: https://costabel.perso.math.cnrs.fr/publis/Co88_Lip.pdf
      locator: "§2, printed p. 615: the normalized fundamental solution for a strongly elliptic operator, specialized to the Laplacian."
    - title: "Francisco-Javier Sayas, First Steps in the Boundary Element Method (2015 lecture notes)"
      url: https://team-pancho.github.io/teaching/math838/BEM.pdf
      locator: "Chapter 1 §2.2, PDF p. 3: $1/(4\\pi|x-y|)$ as the 3D fundamental solution."
---

## Statement

For every $y\in\mathbb R^3$, the locally integrable kernel $G_3(x,y)=(4\pi|x-y|)^{-1}$ of [[def-bem-newtonian-kernel-in-three-dimensions]] satisfies $-\Delta_xG_3(x,y)=\delta_y$ in the sense of distributions: for every $\varphi\in C_c^\infty(\mathbb R^3)$,
$$\int_{\mathbb R^3}G_3(x,y)(-\Delta\varphi(x))\,dx=\varphi(y).$$

## Facts & Assumptions

**Given:** The Axiom of Choice, a point $y\in\mathbb R^3$, the kernel in [[def-bem-newtonian-kernel-in-three-dimensions]], and a test function $\varphi\in C_c^\infty(\mathbb R^3)$.

[A1] The Axiom of Choice is assumed as required by the cited divergence theorem ([[def-axiom-of-choice]]).

[F1] The divergence theorem on a bounded smooth domain identifies the integral of $\operatorname{div}F$ with the outward boundary flux for $C^1$ vector fields ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]).

## Proof

1.1 Translation reduces to $y=0$. For $x\ne0$, direct radial differentiation gives $\Delta(1/|x|)=0$. Fix $R$ so that $\varphi$ vanishes in a neighborhood of $\partial B_R$, and apply Green's identity, obtained by applying [F1] to $G_3\nabla\varphi-\varphi\nabla G_3$, on the annulus $B_R\setminus\overline{B_\epsilon}$. Its inner outward normal is $-e_r$, and $\partial_{-e_r}G_3=1/(4\pi\epsilon^2)$; therefore $\int_{B_R\setminus B_\epsilon}G_3(-\Delta\varphi)\,dx=\int_{\partial B_\epsilon}\left(\varphi\,\partial_{-e_r}G_3-G_3\,\partial_{-e_r}\varphi\right)dS.$ The outer flux vanishes by the choice of $R$. [A1, F1, given, choose]

2.1 On $\partial B_\epsilon$, the first inner term is the spherical average of $\varphi$ because $\partial_{-e_r}G_3=1/(4\pi\epsilon^2)$, and so tends to $\varphi(0)$ by continuity. The second inner term has absolute value at most $\sup|\nabla\varphi|\,(4\pi\epsilon^2)/(4\pi\epsilon)=O(\epsilon)$ and tends to zero. The omitted ball integral of $G_3\Delta\varphi$ is also $O(\epsilon^2)$ since $\Delta\varphi$ is bounded and $\int_0^\epsilon r^{-1}r^2dr=\epsilon^2/2$. Letting $\epsilon\downarrow0$ proves the identity at $y=0$; translating coordinates proves it for every $y$. [step 1.1, given, algebra] ∎

