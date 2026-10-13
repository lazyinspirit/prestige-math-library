---
id: lem-em-mean-zero-coercivity-on-a-c-one-domain
kind: lemma
domain: mathematics
title: "Mean-zero Poincare inequality on a bounded connected $C^1$ domain"
status: published
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 0
deps: [def-bounded-c-k-domain-and-boundary-charts, thm-smooth-up-to-the-boundary-density-on-smooth-domains, lem-c-k-boundary-flattening-preserves-wkp-locally, def-sobolev-space-wkp-and-its-norm, lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces, thm-acl-characterisation-of-w-one-p, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-tonelli-theorem-for-sigma-finite-product-spaces, cor-cauchy-schwarz-inequality-for-l-two, def-connected-space, def-compact-space, def-axiom-of-choice, def-countable-choice, lem-compactness-of-a-subspace-is-ambient, thm-heine-borel-rn]
dependency_roles:
  thm-heine-borel-rn: mathematical-premise
  lem-compactness-of-a-subspace-is-ambient: mathematical-premise
  def-bounded-c-k-domain-and-boundary-charts: mathematical-premise
  thm-smooth-up-to-the-boundary-density-on-smooth-domains: mathematical-premise
  lem-c-k-boundary-flattening-preserves-wkp-locally: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces: mathematical-premise
  thm-acl-characterisation-of-w-one-p: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-connected-space: mathematical-premise
  def-compact-space: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-countable-choice: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. K. Hunter, Notes on Partial Differential Equations (University of California, Davis; revised 6/18/2014)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Ch. 4.4 (Poincare inequality, Theorem 4.9 and Eq. 4.11, printed pp. 98-99), read for the one-variable fundamental-theorem-with-Cauchy-Schwarz proof; the box, half-box, C^1-chart and finite-connected-cover bookkeeping is supplied locally here."
    - title: "S. Dyatlov, Lecture notes for 18.155: distributions, elliptic regularity, and applications to PDEs (MIT, author-hosted notes)"
      url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      locator: "Ch. 12.1-12.2 (Sobolev spaces and elliptic regularity II, printed pp. 139-154), consulted for the W^{1,2} conventions used by the cited Sobolev suppliers."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice (used through the smooth-up-to-the-boundary density theorem below) and the Axiom of Countable Choice (declared by the flattening and Sobolev suppliers). The axiom interfaces are [[def-axiom-of-choice]] and [[def-countable-choice]]. Let $\Omega\subset\mathbb R^3$ be a bounded connected $C^1$ domain in the graph sense ([[def-bounded-c-k-domain-and-boundary-charts]], [[def-connected-space]]); its closure is compact, so the boundary has a finite cover by boundary charts ([[def-compact-space]]). There is a constant $C_\Omega$, depending only on $\Omega$, with

$$\|v-v_\Omega\|_{L^2(\Omega)}\le C_\Omega\,\|\nabla v\|_{L^2(\Omega)}\qquad\text{for every }v\in H^1(\Omega),\qquad v_\Omega:=\frac1{|\Omega|}\int_\Omega v\,dx .$$

Here $H^1(\Omega)=W^{1,2}(\Omega;\mathbb R)$ with the weak coordinate derivatives, and $\nabla v$ denotes the weak gradient. The estimate is the mean-zero (Poincare) inequality needed for weak Neumann solvability, where the mean-zero subspace carries the gradient norm.

## Facts & Assumptions

**Given:** A bounded connected $C^1$ domain $\Omega\subset\mathbb R^3$ in the graph sense of [[def-bounded-c-k-domain-and-boundary-charts]], the Axiom of Choice and Countable Choice, and a function $v\in H^1(\Omega)=W^{1,2}(\Omega;\mathbb R)$. For a measurable $A\subseteq\Omega$ with $|A|>0$ write $v_A=|A|^{-1}\int_Av$.

[L1] **Sobolev conventions.** [[def-sobolev-space-wkp-and-its-norm]] (Countable Choice): $W^{1,2}(\Omega;\mathbb R)$ is the set of $L^2$ classes whose weak coordinate derivatives $D^\alpha v$, $|\alpha|\le1$, exist as $L^2$ classes; for the multi-index $e_i$, $D^{e_i}v$ is the weak gradient component $\partial_iv$, and $\|\nabla v\|_2=(\sum_i\|\partial_iv\|_2^2)^{1/2}$. [[lem-bounded-restriction-and-cutoff-localisation-in-sobolev-spaces]] (Axiom of Choice): restriction to an open $U\subseteq\Omega$ maps $W^{1,2}(\Omega)$ contractively into $W^{1,2}(U)$.

[L2] **One-dimensional absolute continuity and product integration.** [[thm-acl-characterisation-of-w-one-p]]: a $W^{1,2}$ function on a box is, after modification on a null set, absolutely continuous on almost every line parallel to each coordinate axis, with the one-variable fundamental theorem and the $L^2$ derivative along that line. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] and [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: iterated integrals of nonnegative and $L^1$ functions over product domains agree. [[cor-cauchy-schwarz-inequality-for-l-two]]: $\int|fg|\le\|f\|_2\|g\|_2$; in particular $\bigl|\frac1{|A|}\int_A h\bigr|^2\le\frac1{|A|}\int_A|h|^2$ for $h\in L^2(A)$.

[L3] **Charts, flattening, density and change of variables.** [[def-bounded-c-k-domain-and-boundary-charts]]: about each boundary point there is a $C^1$ flattening chart $\Phi$ of the local graph, with $C^1$ inverse, mapping the local piece of $\Omega$ exactly onto the half-box $\{t<0\}$; on compact patches the chart and its inverse have bounded first derivatives. [[lem-c-k-boundary-flattening-preserves-wkp-locally]] (Countable Choice, $k=1$, $p=2$): composition with such a chart is a bounded operation on $W^{1,2}$ between the compact patches, in both directions when the patches correspond. [[thm-smooth-up-to-the-boundary-density-on-smooth-domains]] (Axiom of Choice, $k=1$, $p=2$): the restrictions to $\Omega$ of compactly supported smooth functions are dense in $W^{1,2}(\Omega)$. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]] (Countable Choice): a $C^1$ diffeomorphism $T$ gives $\int f\,d\lambda=\int(f\circ T)|\det DT|\,d\lambda$ for nonnegative measurable $f$.

[L4] **Topology.** [[lem-compactness-of-a-subspace-is-ambient]]: a compact subspace has a finite subcover from any cover by ambient open sets. [[thm-heine-borel-rn]] makes the closed bounded closure compact; [[def-compact-space]] defines intrinsic compactness. By [[def-connected-space]], a topological space is connected when it has no partition into two nonempty relatively open sets.

[L5] **Choice.** [[def-axiom-of-choice]] supplies the density and localization interfaces of [L1] and [L3], the ACL interface of [L2], and the countable selection of density approximants. [[def-countable-choice]] is declared by the Sobolev, flattening and change-of-variables interfaces of [L1] and [L3].

## Proof

1.1 Let $R=\prod_{i=1}^3I_i$ be a box of positive side lengths and $u\in W^{1,2}(R^\circ)$. For almost every pair $x,y\in R$, put $p_0=x$ and $p_i=(y_1,\ldots,y_i,x_{i+1},\ldots,x_3)$ for $1\le i\le3$, so $p_3=y$. The telescoping sum gives $|u(x)-u(y)|^2\le3\sum_{i=1}^3|u(p_{i-1})-u(p_i)|^2$. Along the coordinate segment from $p_{i-1}$ to $p_i$, ACL and Cauchy--Schwarz [L2] bound its squared difference by $|I_i|\int_{I_i}|\partial_i u(y_1,\ldots,y_{i-1},s,x_{i+1},\ldots,x_3)|^2ds$. Fubini makes all these statements valid for almost every pair; integrating in $x,y$ gives $\int_R\int_R|u(p_{i-1})-u(p_i)|^2dx\,dy\le |R|\,|I_i|^2\int_R|\partial_i u|^2$. Thus $\int_R\int_R|u(x)-u(y)|^2dx\,dy\le C_R|R|\int_R|\nabla u|^2$ with $C_R=3\max_i|I_i|^2$. [L1, L2]

2.1 The identity $u(x)-u_R=|R|^{-1}\int_R(u(x)-u(y))dy$ and averaged Cauchy--Schwarz [L2], integrated in $x$, give $\int_R|u-u_R|^2\le |R|^{-1}\int_R\int_R|u(x)-u(y)|^2dx\,dy\le C_R\int_R|\nabla u|^2$. A nonempty half-box obtained by truncating the third interval at zero is itself a product of three intervals, so the same coordinate-line proof applies to it; no ACL assertion along arbitrary slanted segments is used. [step 1.1, L1, L2]

3.1 Shrink each graph chart to the inverse image of a box compactly contained in its ambient chart range; its intersection $U$ with $\Omega$ maps to a half-box $H$. For $v$ smooth near $\overline\Omega$, $w=v\circ\Phi^{-1}$ is $C^1$ on $\overline H$, which suffices for step 2.1. The mean $v_U$ minimizes $\int_U|v-a|^2$ over constants $a$: expanding about $v_U$ gives $\int_U|v-a|^2=\int_U|v-v_U|^2+|U||a-v_U|^2$. Choose $a=w_H$. The bounded Jacobian and inverse-chart derivatives [L3] then give $\int_U|v-v_U|^2\le\int_U|v-w_H|^2\le C\int_H|w-w_H|^2\le C_U\int_U|\nabla v|^2$. Interior boxes obey step 2.1 directly. [step 2.1, L3, algebra]

4.1 The ambient chart boxes of step 3.1 and interior boxes cover the compact closure, so a finite subcover gives $\Omega=\bigcup_{j=1}^N U_j$ with nonempty open patches. Every nonempty overlap is open in $\mathbb R^3$, contains a box, and has positive measure. The graph joining nonempty overlaps is connected: otherwise its component unions would partition the connected $\Omega$ into disjoint nonempty relatively open sets [L4]. Choose ambient smooth approximants $v_m\to v$ in $H^1(\Omega)$ using density [L3] and Countable Choice [L5]. Restrictions and gradients converge in $L^2$, and $|(v_m)_{U_j}-v_{U_j}|\le |U_j|^{-1/2}\|v_m-v\|_{L^2(U_j)}$ by [L2]. Hence step 3.1 passes to the limit, giving $\int_{U_j}|v-v_{U_j}|^2\le C_j\int_{U_j}|\nabla v|^2$. [step 3.1, L1, L2, L3, L4, L5]

5.1 For an edge $(j,k)$, integrating $|v_{U_j}-v_{U_k}|^2\le2|v_{U_j}-v(x)|^2+2|v(x)-v_{U_k}|^2$ over its positive-measure overlap and using step 4.1 bounds the squared mean difference by a cover-dependent constant times $\int_\Omega|\nabla v|^2$. A path of at most $N-1$ edges from $1$ to $j$ exists by connectedness; the squared sum of its differences is at most the path length times the sum of their squares. Thus $|v_{U_j}-v_{U_1}|^2\le C''\int_\Omega|\nabla v|^2$ for every $j$, also for $N=1$ when the difference is zero. [step 4.1, L2, algebra]

6.1 The constant-minimization identity of step 3.1 on $\Omega$ gives $\int_\Omega|v-v_\Omega|^2\le\int_\Omega|v-v_{U_1}|^2\le\sum_j\int_{U_j}|v-v_{U_1}|^2\le2\sum_j\int_{U_j}|v-v_{U_j}|^2+2\sum_j|U_j||v_{U_j}-v_{U_1}|^2$. Step 4.1 bounds the first sum by $2\sum_j C_j\int_\Omega|\nabla v|^2$, and step 5.1 bounds the second by a cover-dependent multiple of the same integral. Taking square roots gives the stated estimate with a constant depending only on the fixed domain and cover. The choice uses are those recorded in [L5]. [step 3.1, step 4.1, step 5.1, L5] ∎
