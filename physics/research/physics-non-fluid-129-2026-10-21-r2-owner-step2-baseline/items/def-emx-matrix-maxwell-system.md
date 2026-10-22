---
id: def-emx-matrix-maxwell-system
kind: definition
title: "Finite compatible matrix system"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - thm-finite-dimensional-orthogonal-decomposition
justified_by: []
dependency_roles:
  thm-finite-dimensional-orthogonal-decomposition: mathematical-premise
physical_scope: "Pure mathematics; no physical premise."
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
aliases: []
verification:
  precheck: pending
sources:
  references:
    - title: "Gilbert Strang, The Wave Equation and Staggered Leapfrog, MIT 18.086 lecture notes, §5.3"
      url: "https://math.mit.edu/classes/18.086/2006/am53.pdf"
      locator: "Section 5.3, first-order systems and Maxwell equations, PDF pp. 7–10."
    - title: "J. Zank, Topics in Finite Elements, Part I: Wave Equation, University of Vienna lecture notes"
      url: "https://www.mat.univie.ac.at/~zank/lehre/2020SS_lecture_notes_wave_equation.pdf"
      locator: "Chapter 2, §2.3, leapfrog method and discrete energy, PDF pp. 12–17."
---

## Definition

Let $n_e,n_b,n_c,n_g$ be nonnegative integers. For dimension zero, $\mathbb R^0$ has its single empty vector and its unique square matrix acts as the identity on that space. Choose real matrices $M_e\in\mathbb R^{n_e\times n_e}$ and $M_b\in\mathbb R^{n_b\times n_b}$ that are symmetric positive definite, meaning $M_e^T=M_e$, $M_b^T=M_b$, $x^TM_ex>0$ for every nonzero $x\in\mathbb R^{n_e}$, and $y^TM_by>0$ for every nonzero $y\in\mathbb R^{n_b}$; these positivity conditions are vacuous on $\mathbb R^0$. Choose $C\in\mathbb R^{n_b\times n_e}$, a symmetric positive semidefinite $S\in\mathbb R^{n_e\times n_e}$, meaning $S^T=S$ and $x^TSx\ge0$ for every $x\in\mathbb R^{n_e}$, and matrices $D\in\mathbb R^{n_c\times n_b}$ and $G\in\mathbb R^{n_e\times n_g}$ satisfying $DC=0$ and $CG=0$. These are finite real matrix data; no mesh or continuum field is assumed.

Let $I\subseteq\mathbb R$ be an open interval, let $j:I\to\mathbb R^{n_e}$ be continuous, and let candidate states $e:I\to\mathbb R^{n_e}$ and $b:I\to\mathbb R^{n_b}$ be of class $C^1$. The **finite compatible matrix system** is

$$M_e\dot e(t)=C^TM_bb(t)-Se(t)-j(t),\qquad \dot b(t)=-Ce(t)\quad(t\in I).$$

Its quadratic **energy** is $W(e,b):=\tfrac12(e^TM_ee+b^TM_bb)$. Its magnetic constraint is the vector $Db\in\mathbb R^{n_c}$. For the chosen $G$, its weak-divergence coordinate is $q:=-G^TM_ee\in\mathbb R^{n_g}$. The term “weak-divergence” names this finite-dimensional quantity only. If the columns of $G$ form a basis of $\ker C:=\{v\in\mathbb R^{n_e}:Cv=0\}$, then $q=0$ exactly when $M_ee\in\operatorname{im}C^T:=\{C^Tu:u\in\mathbb R^{n_b}\}$.

## Definition references

[[thm-finite-dimensional-orthogonal-decomposition]]

## Facts & Assumptions

**Given:** The finite real matrices and the interval and maps specified in the Definition; for the final characterization, assume additionally that $\operatorname{im}G=\ker C$.

[F1] Every subspace $U$ of a finite-dimensional real inner-product space $V$ satisfies $V=U\oplus U^\perp$ ([[thm-finite-dimensional-orthogonal-decomposition]]).

## Proof

1.1 In positive dimension, if $M_ex=0$, then $x^TM_ex=0$, so positive definiteness gives $x=0$; the same argument applies to $M_b$. In dimension zero the unique square matrix is the identity map on the singleton space and is invertible. Thus both matrices are injective and hence invertible in their finite-dimensional domains, so their inverse operations used by consumers are defined in every allowed dimension. [given, algebra]

1.2 For $u\in\mathbb R^{n_b}$ and $v\in\ker C$, $\langle C^Tu,v\rangle=u^TCv=0$, hence $\operatorname{im}C^T\subseteq(\ker C)^\perp$. Also $z\in(\operatorname{im}C^T)^\perp$ exactly when $u^TCz=0$ for every $u\in\mathbb R^{n_b}$, which is exactly $Cz=0$; therefore $(\operatorname{im}C^T)^\perp=\ker C$. By [F1], decompose any $w\in(\ker C)^\perp$ as $w=u+v$ with $u\in\operatorname{im}C^T$ and $v\in(\operatorname{im}C^T)^\perp=\ker C$. Both $w$ and $u$ are orthogonal to $v$, so $\lVert v\rVert^2=\langle w-u,v\rangle=0$ and $v=0$. Hence $(\ker C)^\perp=\operatorname{im}C^T$. [given, F1, algebra]

2.1 Assume $\operatorname{im}G=\ker C$. If $q=0$, then $G^TM_ee=0$, so $M_ee$ is orthogonal to every column of $G$ and hence to $\ker C$. By step 1.2, $M_ee\in\operatorname{im}C^T$. [given, step 1.2, algebra]

3.1 Conversely, if $M_ee\in\operatorname{im}C^T$, then step 1.2 gives $M_ee\in(\ker C)^\perp$. Every column of $G$ lies in $\ker C$, so $G^TM_ee=0$ and therefore $q=0$. The two implications prove the stated characterization. [given, step 1.2, algebra] ∎
