---
id: "lem-global-smooth-strictly-psh-defining-function"
kind: "lemma"
title: "Smooth global defining functions for strongly pseudoconvex boundaries"
status: "draft"
origin: "pipeline"
deps: ["def-axiom-of-choice", "def-levi-pseudoconvex-domain", "def-levi-form-and-strict-plurisubharmonicity", "lem-test-function-cutoffs-and-euclidean-localization"]
landmark: false
proof_strategy: "direct"
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Mohammad Jabbari, Several Complex Variables course notes
      url: https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf
      locator: "§3.6.4, Theorem 64(1), printed p. 74: exponential improvement of a
        defining function. The smooth globalization from smooth local data is
        proved explicitly here."
verification: {"precheck": "pass", judge: {model: "gpt-6.1-sol", verdict: pass, date: 2026-10-02}}
---

## Statement

Assume the Axiom of Choice. Let $D\subset\mathbb C^n$, $n\ge1$, be a bounded domain with $C^\infty$ boundary, strongly pseudoconvex at every boundary point. Then there are a neighborhood $U$ of $\overline D$ and $\rho\in C^\infty(U,\mathbb R)$ with $D=\{\rho<0\}$ in $U$, $d\rho\ne0$ on $\partial D$, and $\rho$ strictly plurisubharmonic near $\partial D$.

## Facts & Assumptions

**Given:** AC; $D$ and its local smooth strongly pseudoconvex boundary data.

[F1] A local defining function $r_i$ is smooth, defines the negative side $D$, has nonzero differential on the boundary, and has positive Levi form on every nonzero complex tangent vector ([[def-levi-pseudoconvex-domain]]).

[F2] For compact $K$ in an open Euclidean set $V$ there is a smooth cutoff in $[0,1]$, equal to $1$ near $K$ and compactly supported in $V$ ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F3] Strict plurisubharmonicity is positive definiteness of the Levi form ([[def-levi-form-and-strict-plurisubharmonicity]]).

**Choice use.** AC licenses the stated ambient hypotheses; the compact-boundary cover and cutoffs use finitely many selections.

## Proof

1.1 Compactness of $\partial D$ supplies finitely many local defining charts and smaller relatively compact neighborhoods covering $\partial D$. Shrink them so each local differential stays nonzero on the boundary in its chart and each tangential Levi form stays positive there. By [F2] take nonnegative smooth bumps $b_i$ supported in the charts and equal to $1$ on the smaller neighborhoods. On a neighborhood $T$ of $\partial D$ where $B=\sum_i b_i>0$, put $\lambda_i=b_i/B$ and $r_0=\sum_i\lambda_i r_i$, extending each supported product by zero outside its chart. This is smooth and has the same negative, zero and positive sides as the local defining functions. At a boundary point, all active differentials are positive multiples of one outward conormal: they annihilate the common real tangent hyperplane and evaluate positively on an outward vector. Thus $dr_0=\sum_i\lambda_i dr_i\ne0$. [F1, F2, given, construct]

2.1 If $v$ is complex tangent at a boundary point, then $\partial r_i(v)=0$ for all active charts and $r_i=0$. The product rule therefore gives $$\mathcal L_{r_0}(v)=\sum_i\lambda_i\mathcal L_{r_i}(v)>0\quad(v\ne0).$$ Terms involving derivatives of the weights vanish because they contain either $r_i$ or a tangential first derivative of $r_i$. By [F2] choose $\eta\in C_c^\infty(T,[0,1])$ equal to $1$ near $\partial D$. Define $s=-1$ on $D$ and $s=1$ on $\mathbb C^n\setminus\overline D$, and define $$r=\eta r_0+(1-\eta)s$$ off $\partial D$, with $r=r_0=0$ on the boundary. Here $\eta r_0$ is extended by zero off $T$, and $(1-\eta)s$ is zero near the boundary. Hence $r$ is globally smooth, negative exactly on $D$, positive outside $\overline D$, and agrees with $r_0$ near the boundary. [F1, F2, step 1.1, algebra]

3.1 On the compact boundary put $a=\partial r$. Its norm has a positive lower bound $m$, and the operator norm of the Levi matrix of $r$ has a finite bound $M$. For $n>1$ the tangential Levi form has a uniform positive bound $\lambda$. Write any $v=t+w$ with $t\in\ker a$ and $w\perp\ker a$. Then $|a(v)|=|a|\,|w|\ge m|w|$ and $$\mathcal L_r(v)\ge\lambda|t|^2-2M|t||w|-M|w|^2\ge\frac\lambda2|t|^2-\left(M+\frac{2M^2}{\lambda}\right)|w|^2.$$ Choose $C$ with $Cm^2>M+2M^2/\lambda$. For $n=1$ the tangent space is zero and one instead chooses $Cm^2>M$. In either case $\mathcal L_r(v)+C|a(v)|^2>0$ for every nonzero $v$ on the boundary. [F3, step 1.1, step 2.1, algebra]

4.1 Set $\rho=e^{Cr}-1$. The chain rule gives $$\mathcal L_\rho(v)=Ce^{Cr}\bigl(\mathcal L_r(v)+C|\partial r(v)|^2\bigr).$$ Step 3.1 and compactness give strict positivity on a neighborhood of $\partial D$. The function is $C^\infty$ because the constructed $r$ is $C^\infty$; its negative set is exactly $D$ and $d\rho=Cdr\ne0$ on the boundary. Restricting to any neighborhood $U$ of $\overline D$ gives the Statement. [F3, step 2.1, step 3.1, algebra] ∎
