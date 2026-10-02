---
id: ex-poisson-extension-of-a-coordinate-function-on-a-ball
kind: example
title: Poisson extension fixes coordinate functions
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [def-countable-choice, def-directional-and-partial-derivatives, def-laplacian-of-a-c2-function, lem-sphere-and-ball-measures-scale, thm-dirichlet-problem-on-a-ball-by-the-poisson-integral, thm-poisson-kernel-for-a-ball-in-rn]
sources:
  references:
    - title: "Thomas Schmidt, Partial Differential Equations I (2026)"
      url: "https://wwwp2.math.uni-hamburg.de/en/forschung/bereiche/am/geom-part-differentialgleichungen/dokumente/pde.pdf"
      locator: "§2.8, printed pp. 44–49"
---

## Example

Assume Countable Choice and $n\ge3$. Use one-based coordinate labels $x_j:=x_{j-1}^{\mathrm{can}}$ and $y_j:=y_{j-1}^{\mathrm{can}}$ for $1\le j\le n$. For every ball $B_R(a)$, every coordinate index $j\in\{1,\dots,n\}$ and the boundary datum $g(y)=y_j$, the ball Poisson integral is
$$U_g(x)=\int_{\partial B_R(a)}P_{R,a}(x,y)\,y_j\,dS_y=x_j\qquad(x\in B_R(a)).$$

## Facts & Assumptions

**Given:** Countable Choice, an integer $n\ge3$, a centre $a\in\mathbb R^n$, a radius $R>0$, a coordinate index $j$ and the datum $g(y)=y_j$ on $\partial B_R(a)$.

[F1] $U_g$ is the unique function in $C^2(B_R(a))\cap C(\overline{B_R(a)})$ that is harmonic on $B_R(a)$ and equals $g$ on $\partial B_R(a)$ ([[thm-dirichlet-problem-on-a-ball-by-the-poisson-integral]]).

[F2] With the one-based coordinate labels of the Example and canonical derivative indices $0\le i<n$, the line identity $u(x+te_i^{\mathrm{can}})=x_j+t\delta_{i,j-1}$ gives $\partial_ix_j=\delta_{i,j-1}$. These derivatives are constant, so all second partials vanish and $\Delta x_j=\sum_{i<n}\partial_i\partial_ix_j=0$; thus $u(x):=x_j$ is smooth and harmonic ([[def-directional-and-partial-derivatives]], [[def-laplacian-of-a-c2-function]]).

[F3] At the centre the kernel is constant, $P_{R,a}(a,y)=R^2/(R\omega_{n-1}|a-y|^n)=1/(\omega_{n-1}R^{n-1})$, and $|\partial B_R(a)|=\omega_{n-1}R^{n-1}$ ([[thm-poisson-kernel-for-a-ball-in-rn]], [[lem-sphere-and-ball-measures-scale]]).

[F4] Countable Choice $\mathrm{AC}_\omega$ is the standing hypothesis ([[def-countable-choice]]).

## Verification

**Proof technique:** direct.

1.1 Work under [F4] and put $u(x):=x_j$. By [F2] the function $u$ is smooth with $\Delta u=0$ on $\mathbb R^n$, hence on $B_R(a)$, and it lies in $C^2(B_R(a))\cap C(\overline{B_R(a)})$; its restriction to the sphere is $u(y)=y_j=g(y)$. [given, F2, F4]

2.1 By [F1] the Poisson integral $U_g$ lies in the same class, is harmonic on $B_R(a)$ and has the same boundary trace $g$. Applying the uniqueness clause of [F1] to the two admissible functions $u$ and $U_g$ gives $U_g(x)=u(x)=x_j$ for every $x\in B_R(a)$. [step 1.1, F1]

3.1 Evaluating at the centre checks the spherical first moment: step 2.1 gives $\int_{\partial B_R(a)}P_{R,a}(a,y)y_j\,dS_y=a_j$, and by [F3] the kernel there is the constant $1/|\partial B_R(a)|$, so $\frac{1}{|\partial B_R(a)|}\int_{\partial B_R(a)}y_j\,dS_y=a_j$. [step 2.1, F3, algebra]

4.1 Steps 2.1 and 3.1 prove the displayed identity and its central specialization; the argument uses only the uniqueness clause of the ball Dirichlet theorem together with the elementary harmonicity of $x_j$. [step 2.1, step 3.1] ∎
