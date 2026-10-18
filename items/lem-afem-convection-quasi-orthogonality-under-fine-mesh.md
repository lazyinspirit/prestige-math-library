---
id: "lem-afem-convection-quasi-orthogonality-under-fine-mesh"
kind: "lemma"
title: "Quasi-orthogonality for constant convection on a fine initial mesh"
status: draft
origin: pipeline
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 1
deps:
  - "def-afem-p1-residual-estimator-and-data-oscillation"
  - "def-afem-nvb-labelled-triangulation-family"
  - "lem-galerkin-orthogonality-for-conforming-galerkin-approximations"
  - "def-countable-choice"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "def-sobolev-space-wkp-and-its-norm"
proof_strategy: direct
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Ricardo H. Nochetto, Adaptive Finite Element Methods, Lecture 3"
      url: "https://www.math.umd.edu/~rhn/lectures/lecture3.pdf"
      locator: "§§3.1–3.3, quasi-orthogonality and convection fine-mesh condition, PDF
        pp. 1–5."
    - title: "Cascón, Kreuzer, Nochetto & Siebert, Quasi-optimal convergence rate for
        an AFEM"
      url: "https://math.umd.edu/~rhn/papers/pdf/optimality.pdf"
      locator: "§§2.1–2.7, 3.2–3.3, Theorem 4.1, and §5."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---
## Statement

Assume Countable Choice, as in the zero-boundary Sobolev convention.

Let $\mathcal T_H\le\mathcal T_h$ be nested conforming meshes and let $U_H,U_h$ be exact P1 Galerkin solutions for the constant-convection model of [[def-afem-p1-residual-estimator-and-data-oscillation]]. Write $e_j=u-U_j$ and $d=U_h-U_H$. For $b=0$,
$$\|\nabla e_h\|_2^2=\|\nabla e_H\|_2^2-\|\nabla d\|_2^2.$$
For constant $b$, assume the explicit dual-pickup bound
$$\|e_h\|_{L^2}\le C_D h_0^s\|\nabla e_h\|_{L^2}$$
for the nested sequence, with $s>0$, where $h_0=\max_{K\in\mathcal T_0}\operatorname{diam}K$, and put $\mu=C_Dh_0^s|b|<1$. Then
$$\|\nabla e_h\|_2^2\le(1-\mu)^{-1}\|\nabla e_H\|_2^2-\|\nabla d\|_2^2.$$
The dual-pickup bound is an additional hypothesis. It is not asserted for every polygon or mesh.

## Facts & Assumptions

[A1] Countable Choice is assumed in the cited Sobolev and reference-simplex suppliers ([[def-countable-choice]]).

**Given:** Countable Choice, nested conforming P1 spaces, exact Galerkin solutions, constant $b$, and in the nonsymmetric case the stated dual-pickup bound.

[F1] Galerkin orthogonality says $a(u-U_h,v_h)=0$ for every $v_h\in V(\mathcal T_h)$; nestedness puts $d=U_h-U_H$ in the fine space ([[lem-galerkin-orthogonality-for-conforming-galerkin-approximations]]).

[F2] $H_0^1$ is the closure of compactly supported smooth functions in $H^1$; constant-vector integration by parts on those functions extends by continuity to this closure ([[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]]).

## Proof

1.1 If $b=0$, [F1] with $v_h=d$ gives $(\nabla e_h,\nabla d)=0$. Since $e_H=e_h+d$, expanding the squared norm yields $\|\nabla e_H\|_2^2=\|\nabla e_h\|_2^2+\|\nabla d\|_2^2$. Rearrangement is the symmetric identity. [A1, F1, given, algebra]

1.2 For constant $b$, [F1] gives $(\nabla e_h,\nabla d)+(b\cdot\nabla e_h,d)=0$. By [F2], $(b\cdot\nabla e_h,d)=-(b\cdot\nabla d,e_h)$. Expanding $e_H=e_h+d$ therefore gives $\|\nabla e_H\|_2^2=\|\nabla e_h\|_2^2+\|\nabla d\|_2^2+2(b\cdot\nabla d,e_h).$ The sign in this identity follows directly from the preceding orthogonality equation. [A1, F1, F2, given, algebra]

2.1 By the assumed dual-pickup estimate and Cauchy–Schwarz, $|2(b\cdot\nabla d,e_h)|\le2|b|\|\nabla d\|_2\|e_h\|_2\le2\mu\|\nabla d\|_2\|\nabla e_h\|_2\le\mu(\|\nabla d\|_2^2+\|\nabla e_h\|_2^2)$. Using this in step 1.2 gives $(1-\mu)\|\nabla e_h\|_2^2\le\|\nabla e_H\|_2^2-(1-\mu)\|\nabla d\|_2^2$. Divide by $1-\mu>0$ to obtain the stated estimate. [A1, step 1.2, given, algebra] ∎
