---
id: lem-one-point-extension-for-finite-dimensional-nonexpansive-map
kind: lemma
title: "One-point extension of a nonexpansive map in finite dimensions"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
axiom_base: "ZF finite-dimensional compactness and finite convex combinations only. The sole point $p_0$ is chosen once from a stated nonempty set; no axiom of choice is used."
deps:
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-heine-borel-rn
  - thm-euclidean-semicontinuous-extreme-value-theorem
  - thm-nearest-point-in-a-nonempty-closed-convex-set
  - lem-projection-onto-a-closed-convex-set-has-the-variational-inequality
  - thm-compact-iff-finite-intersection-property
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jonathan Eckstein and Dimitri P. Bertsekas, On the Douglas–Rachford splitting method and the proximal point algorithm for maximal monotone operators, §2"
      url: "https://web.mit.edu/dimitrib/www/Eckstein_Bertsekas_D-R.pdf"
---

## Statement

Let $E=\mathbb R^n$ with its Euclidean norm, let $D\subseteq E$, and let
$T:D\to E$ satisfy $\|T(p)-T(p')\|_2\le\|p-p'\|_2$ for all $p,p'\in D$.
For every $y\in E$ there exists $q\in E$ such that
$$\|q-T(p)\|_2\le\|y-p\|_2\qquad(p\in D).$$
Equivalently, one value can be added at the new input $y$ without violating
the Lipschitz constant $1$.

## Facts & Assumptions

**Given:** $E,D,T,y$ as in the Statement.

[A1] The map $T:D\to E$ is 1-Lipschitz and $y\in E$.


[F1] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: for $n\ge1$, $\lVert\cdot\rVert_2$ is a norm inducing $d_2$, and the parallelogram and polarization identities hold.

[F2] [[thm-heine-borel-rn]]: for $n\ge1$, a closed bounded subset of $\mathbb R^n$ is compact.

[F3] [[thm-euclidean-semicontinuous-extreme-value-theorem]]: for $n\ge1$, a continuous real function on a nonempty compact subset of $\mathbb R^n$ attains its minimum.

[F4] [[thm-nearest-point-in-a-nonempty-closed-convex-set]] and [[lem-projection-onto-a-closed-convex-set-has-the-variational-inequality]]: in $\mathbb R^n$ for $n\ge1$, a nonempty closed convex subset has a nearest point to any point, and that projection satisfies the variational inequality.

[F5] [[thm-compact-iff-finite-intersection-property]]: a family of closed subsets of a compact space with the finite-intersection property has nonempty total intersection.

## Proof


1.1 If $n=0$, then $E=\{0\}$. If $D$ is empty choose $q=0$; if it is nonempty then $D=\{0\}$, $y=p=T(p)=0$, and $q=0$ satisfies the inequality. Hence assume $n\ge1$. If $D=\varnothing$, any $q$ works. Otherwise consider any finite nonempty list $p_1,\ldots,p_m\in D$ and set $$h_i(q)=\|q-Tp_i\|_2^2-\|y-p_i\|_2^2,\qquad H(q)=\max_{1\le i\le m}h_i(q).$$ By [F1], $|\lVert u\rVert_2-\lVert v\rVert_2|\le\lVert u-v\rVert_2=d_2(u,v)$, so each $h_i$ and their finite maximum $H$ are continuous. Also, when $\lVert q\rVert_2\ge\lVert Tp_i\rVert_2$, $$h_i(q)\ge(\lVert q\rVert_2-\lVert Tp_i\rVert_2)^2-\lVert y-p_i\rVert_2^2,$$ which tends to $+\infty$ as $\lVert q\rVert_2\to\infty$; thus $H$ is coercive. The nonempty sublevel $\{H\le H(0)\}$ is closed and bounded, hence compact by [F2]; [F3] gives a global minimizer $q_0$ of $H$. [A1, given, F1, F2, F3, construct]

2.1 Let $I=\{i:h_i(q_0)=H(q_0)\}$ be the nonempty active set. Its gradients' convex hull is the image of the closed bounded simplex $\{\alpha\in\mathbb R^m:\alpha_i\ge0,\sum_i\alpha_i=1\}$ under the continuous affine map $\alpha\mapsto\sum_{i\in I}\alpha_i\,2(q_0-Tp_i)$ (with zero weights outside $I$). The simplex is compact by [F2]; pulling an open cover back to it shows its continuous image is compact, and [F2] then makes that image closed. If $0$ were not in the convex hull, project $0$ onto it using [F4]. The projection vector $v\ne0$ obeys $\langle v,2(q_0-Tp_i)\rangle\ge\|v\|_2^2$ for each $i\in I$, by the variational inequality. For sufficiently small $\epsilon>0$, every active $h_i(q_0-\epsilon v)$ decreases strictly; the finitely many inactive terms have a strict gap below $H(q_0)$ and remain below it by continuity. This contradicts minimality. Therefore there are weights $\alpha_i\ge0$, supported on $I$, with $\sum_i\alpha_i=1$ and $q_0=\sum_i\alpha_i T p_i$. [A1, F1, F2, F4, step 1.1, contradiction, algebra]

3.1 Put $\bar p=\sum_i\alpha_i p_i$. Expanding squares and using $q_0=\sum_i\alpha_iTp_i$ gives $$H(q_0)=\sum_i\alpha_i h_i(q_0)=\frac12\sum_{i,j}\alpha_i\alpha_j\|Tp_i-Tp_j\|_2^2-\sum_i\alpha_i\|y-p_i\|_2^2.$$ The nonexpansive hypothesis bounds the double sum by $\frac12\sum_{i,j}\alpha_i\alpha_j\|p_i-p_j\|_2^2=\sum_i\alpha_i\|p_i-\bar p\|_2^2$. The variance identity also gives $\sum_i\alpha_i\|y-p_i\|_2^2=\|y-\bar p\|_2^2+\sum_i\alpha_i\|p_i-\bar p\|_2^2$. Hence $H(q_0)\le-\|y-\bar p\|_2^2\le0$. Thus every finite family of the closed balls $\overline B(Tp,\|y-p\|_2)$ has nonempty intersection. [A1, F1, step 2.1, algebra]

4.1 Choose one $p_0\in D$. The ball $C_0=\overline B(Tp_0,\|y-p_0\|_2)$ is compact by [F2]. The sets $C_0\cap\overline B(Tp,\|y-p\|_2)$ are closed in $C_0$, and every finite intersection is nonempty by step 3.1 applied with $p_0$ included. [F5] therefore supplies a point $q$ in their total intersection, which satisfies every required inequality. The proof used only finite-dimensional compactness and finite convex combinations; no choice principle is invoked. [A1, F2, F5, step 3.1, choose] ∎
