---
id: lem-strict-subsolution-perturbation-for-the-heat-operator
kind: lemma
title: Strict-subsolution perturbation for the heat operator
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps:
  - def-parabolic-cylinder-and-parabolic-boundary
  - lem-negative-semidefinite-hessian-at-an-interior-local-maximum
  - def-laplacian-of-a-c2-function
  - def-directional-and-partial-derivatives
  - def-ck-and-multi-index-notation-in-several-variables
  - thm-fermat-interior-extremum
  - cor-mean-value-theorem
  - def-euclidean-inner-product
  - thm-extreme-value-metric
  - thm-heine-borel-rn
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - def-metric-compactness
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Universitext, Springer 2011)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§10.2, printed p. 335, proof of Theorem 10.6: $v=u+\varepsilon|x|^2$ satisfies (24) and the cases $t_0<T$, $t_0=T$"
    - title: "Victor Ivrii, Partial Differential Equations (University of Toronto, 2018, CC BY-SA)"
      url: "https://www.math.toronto.edu/courses/apm346h1/20181/PDE-textbook/PDE-textbook.pdf"
      locator: "§3.2.5, printed pp. 112–113: strict subsolutions and the $\varepsilon t$ perturbation"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, AMS Graduate Studies in Mathematics)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§3.1, printed p. 55, proof of Theorem 3.4 (the perturbation $v_\varepsilon=v-\frac\varepsilon2(1-x)x$)"
---

## Statement

Let $Q=\Omega\times(0,T]$ be a parabolic cylinder
([[def-parabolic-cylinder-and-parabolic-boundary]]) with $\Omega$ bounded, and
let $u\in C^{2,1}(\overline Q)$ satisfy $u_t-\Delta u\le0$ in $Q$. Then:

(i) for every $\varepsilon>0$ the function $v:=u+\varepsilon|x|^2$ is in
$C^{2,1}(\overline Q)$ and satisfies
$$v_t-\Delta v\le-2n\varepsilon<0\qquad\text{in }Q;$$

(ii) if $w\in C^{2,1}(\overline Q)$ satisfies $w_t-\Delta w<0$ in $Q$, then
$\max_{\overline Q}w=\max_{\partial_pQ}w$.

## Facts & Assumptions

**Given:** A parabolic cylinder $Q=\Omega\times(0,T]$ with $\Omega$ bounded,
$u\in C^{2,1}(\overline Q)$ with $u_t-\Delta u\le0$ in $Q$, and
$w\in C^{2,1}(\overline Q)$ with $w_t-\Delta w<0$ in $Q$.

[F1] On the open cylinder, $C^{2,1}(\overline Q)$ means continuous on
$\overline Q$ with $C^2$ spatial and $C^1$ time derivatives on $Q$ extending
continuously, and $\overline Q$ is compact while $\partial_pQ$ is closed
([[def-parabolic-cylinder-and-parabolic-boundary]]).

[F2] $\Delta=\sum_i\partial_i\partial_i$ and the partial derivatives are those
of [[def-directional-and-partial-derivatives]]
([[def-laplacian-of-a-c2-function]],
[[def-ck-and-multi-index-notation-in-several-variables]]).

[F3] The chain and product rules give $\partial_i|x|^2=2x_i$ and
$\partial_i\partial_i|x|^2=2$
([[thm-chain-rule]], [[thm-algebra-of-derivatives]],
[[def-euclidean-inner-product]]).

[F4] At an interior local maximum of a $C^2$ function the Hessian is negative
semidefinite, so the Laplacian is $\le0$
([[lem-negative-semidefinite-hessian-at-an-interior-local-maximum]]).

[F5] At an interior local extremum of a differentiable one-variable function
the derivative vanishes ([[thm-fermat-interior-extremum]]), and the mean value
theorem identifies a difference quotient with a derivative at an interior point
([[cor-mean-value-theorem]]).

[F6] A continuous real function on the nonempty compact set $\overline Q$
attains its maximum ([[thm-extreme-value-metric]], [[thm-heine-borel-rn]],
[[def-metric-compactness]]).

## Proof

**Given:** A bounded parabolic cylinder $Q$, $u\in C^{2,1}(\overline Q)$ with $u_t-\Delta u\le0$ in $Q$, and $w\in C^{2,1}(\overline Q)$ with $w_t-\Delta w<0$ in $Q$.

1.1 For $|x|^2=\langle x,x\rangle$ the chain rule and product rule give $\partial_i|x|^2=2x_i$ and hence $\partial_i\partial_i|x|^2=2$ by [F3], so [F2] gives $\Delta|x|^2=\sum_i2=2n$; therefore for $v=u+\varepsilon|x|^2$ one has $v_t=u_t$ and $\Delta v=\Delta u+2n\varepsilon$, hence $v_t-\Delta v=(u_t-\Delta u)-2n\varepsilon\le-2n\varepsilon<0$ on $Q$. [F2, F3, given]

1.2 By [F6] the function $w$ attains its maximum on $\overline Q$; suppose it is attained at a point $P=(x_0,t_0)\notin\partial_pQ$. Then $t_0\ne0$ and $x_0\notin\partial\Omega$ by the definition of $\partial_pQ$, so $x_0$ is an interior point of $\Omega$ and $0<t_0\le T$; since $x_0$ is an unconstrained local maximum of the spatial function $x\mapsto w(x,t_0)$, [F4] gives $\Delta w(P)\le0$. [F1, F4, F6, given]

2.1 If $t_0<T$, then $t_0$ is an interior point of $(0,T)$ at which the one-variable function $t\mapsto w(x_0,t)$ has a local maximum, so [F5] gives $w_t(P)=0$; with step 1.2 this yields $(w_t-\Delta w)(P)\ge0-0=0$, contradicting $w_t-\Delta w<0$ in $Q$. [step 1.2, F5, given]

2.2 If $t_0=T$, then for every $0<h<T$ the difference quotient $\bigl(w(x_0,T)-w(x_0,T-h)\bigr)/h$ is $\ge0$ because $T$ maximises $t\mapsto w(x_0,t)$; [F5] gives an interior point $c_h\in(T-h,T)$ with $w_t(x_0,c_h)$ equal to that quotient, and continuity of $w_t$ up to the top face (the class of [F1]) gives $w_t(x_0,T)=\lim_{h\downarrow0}w_t(x_0,c_h)\ge0$; with $\Delta w(x_0,T)\le0$ from step 1.2 this again contradicts $w_t-\Delta w<0$. [step 1.2, F1, F5, given]

3.1 Steps 1.1, 2.1 and 2.2 show (i) and that the maximum of any strict subsolution $w$ is attained on $\partial_pQ$, which is (ii). [step 1.1, step 2.1, step 2.2, given] ∎ 