---
id: thm-tdmath-compact-continuous-mixture-attainment
kind: theorem
title: "Attainment and finite support for compact continuous mixtures"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: ["def-tdmath-mixture-generator-space-and-energy","def-borel-probability-law-on-a-polish-space","def-integrable-real-and-complex-functions-and-their-integrals","thm-extreme-value-metric","thm-heine-borel-rn"]
justified_by: []
dependency_roles: {"def-tdmath-mixture-generator-space-and-energy":"mathematical-premise","def-borel-probability-law-on-a-polish-space":"mathematical-premise","def-integrable-real-and-complex-functions-and-their-integrals":"mathematical-premise","thm-extreme-value-metric":"mathematical-premise","thm-heine-borel-rn":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture text"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S1
      locator: "Complete author-hosted HTML chapter read; §§1.2–1.4, finite canonical and microcanonical ensemble conventions."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics"
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
      locator: "Complete 635-page lecture notes retrieved and read; §§4.2–4.6, pp.192–217, ensembles, microcanonical phase space, quantum density matrices, and traces."
---

## Statement

Let $K\subset\mathbb R^d$ be nonempty compact, $d\ge1$, and $a:K\to\mathbb R$ continuous. Define $a_{\rm mix}$ as in [[def-tdmath-mixture-generator-space-and-energy]]. Then for every $x\in\operatorname{conv}K$ the infimum defining $a_{\rm mix}(x)$ is attained by a Borel probability measure supported on at most $d+1$ points. The function $a_{\rm mix}$ is lower semicontinuous and convex on $\operatorname{conv}K$, and is the greatest convex function on $\operatorname{conv}K$ bounded above by $a$ on $K$. Minimizing over all Borel probabilities on $K$ gives the same attained value as minimizing over finite mixtures. This is a mathematical compactness result; it makes no phase-preparation or equilibrium postulate.

## Facts & Assumptions

**Given:** The compact generator space, continuous energy, and Borel-probability mixture convention.

[A1] $K\subset\mathbb R^d$ is nonempty compact, $d\ge1$, and $a:K\to\mathbb R$ is continuous.

[F1] [[def-tdmath-mixture-generator-space-and-energy]]: a mixture is a Borel probability on $K$; its barycenter and mean energy are coordinatewise Lebesgue integrals; $a_{\rm mix}$ is their constrained infimum.

[F2] [[def-borel-probability-law-on-a-polish-space]] and [[def-integrable-real-and-complex-functions-and-their-integrals]]: Borel probability measures integrate bounded Borel real functions, and the integral is linear.

[F3] [[thm-heine-borel-rn]]: in finite-dimensional Euclidean space, a set is compact exactly when it is closed and bounded; in particular, compact sets are closed and bounded.

[F4] [[thm-extreme-value-metric]]: a continuous real function on a nonempty compact metric space attains its minimum and maximum.

## Proof



**Given:** The data in [A1] and the mixture definitions in [F1].

1.1 Define $\Phi(y)=(y,a(y))\in\mathbb R^{d+1}$ and $G=\Phi(K)$. The map $\Phi$ is continuous. Each coordinate of $\Phi$ is continuous on compact $K$, so [F4] bounds it; hence $G$ is bounded. To see $G$ is closed, take $(y,r)\notin G$. If $y\notin K$, closedness of $K$ gives a neighborhood of $y$ disjoint from $K$. If $y\in K$, then $r\ne a(y)$, and continuity of $a$ gives neighborhoods of $y$ and $r$ whose product misses the graph of $a$. Thus the complement of $G$ is open. By [F3], $G$ is compact. [A1, F3, F4, algebra]

2.1 In a finite convex combination, discard zero-weight terms. If more than $d+2$ positive-weight points $g_i\in G\subset\mathbb R^{d+1}$ remain, the vectors $(g_i,1)\in\mathbb R^{d+2}$ are linearly dependent; hence there are coefficients $c_i$, not all zero, with $\sum_i c_i=0$ and $\sum_i c_i g_i=0$. Both signs occur. Replacing the positive weights $\theta_i$ by $\theta_i-tc_i$, where $t=\min_{c_i>0}\theta_i/c_i$, preserves their sum and combination, keeps them nonnegative, and makes at least one zero. Repeating gives at most $d+2$ points. Pad shorter combinations by zero weights and repeat any fixed point of nonempty $G$. The parameter set $G^{d+2}\times\Delta_{d+2}$ is closed and bounded in a finite-dimensional Euclidean space, hence compact by [F3]. The map $\Theta:G^{d+2}\times\Delta_{d+2}\to\mathbb R^{d+1}$, $\Theta((g_i),\theta)=\sum_i\theta_i g_i$, is continuous and has image exactly $\operatorname{conv}G$: every open cover of the image pulls back to an open cover of the compact parameter set and therefore has a finite subcover. Thus $\operatorname{conv}G$ is compact and closed by [F3]. [A1, F3, step 1.1, algebra]

3.1 Fix $x\in\operatorname{conv}K$. Its fiber $F_x=\{r:(x,r)\in\operatorname{conv}G\}$ is nonempty, since each finite convex combination of generators gives such a point. It is closed and bounded because $\operatorname{conv}G$ is closed and bounded by [F3]; hence it is compact by [F3]. Therefore [F4] gives a minimum $r_x$. A convex-combination representation of $(x,r_x)$ by points $(y_i,a(y_i))$ defines a finite atomic Borel probability $P_x$ with barycenter $x$ and energy $r_x$. [A1, F1, F3, F4, step 2.1]

4.1 Conversely, for any Borel probability $P$ on $K$, the vector-valued map $\Phi$ is bounded and coordinatewise integrable by [F2]. Its integral is in $\operatorname{conv}G$: for each $\epsilon>0$, cover compact $G$ by finitely many open Euclidean balls of radius $\epsilon/2$ and pull the cover back to $K$ by $\Phi$. Disjointifying the finite preimages in order gives a finite Borel partition of $K$ whose pieces have image diameter at most $\epsilon$. Choose a point in each nonempty piece and weight it by that piece's $P$-mass. The resulting finite convex combination differs coordinatewise from $\int\Phi\,dP$ by at most $\epsilon$; as $\operatorname{conv}G$ is closed by step 2.1, the integral belongs to it. If $\bar y(P)=x$, then $(x,\bar a(P))\in\operatorname{conv}G$, so $\bar a(P)\ge r_x$. Together with step 3.1 this proves that the all-measure infimum equals $r_x$ and is attained by $P_x$. [A1, F1, F2, F3, step 1.1, step 2.1, step 3.1]

5.1 To prove lower semicontinuity, let $x_n\to x$ in $\operatorname{conv}K$ and put $L=\liminf_n a_{\rm mix}(x_n)$. The values lie between $\min_K a$ and $\max_K a$, attained by [F4], so $L$ is finite. By the definition of liminf, choose a subsequence $n_j$ with $a_{\rm mix}(x_{n_j})\to L$. Each pair $(x_{n_j},a_{\rm mix}(x_{n_j}))$ lies in the closed set $\operatorname{conv}G$ by step 4.1, and the pairs converge to $(x,L)$; hence $(x,L)\in\operatorname{conv}G$. The minimum in the fiber at $x$ satisfies $a_{\rm mix}(x)\le L=\liminf_n a_{\rm mix}(x_n)$. [A1, F3, F4, step 2.1, step 3.1, step 4.1]

5.2 Combine minimizers $P_x$ and $P_z$ with weights $s$ and $1-s$, $0\le s\le1$. The combined finite measure has barycenter $sx+(1-s)z$ and energy $s a_{\rm mix}(x)+(1-s)a_{\rm mix}(z)$. By step 4.1, the minimum at the combined barycenter is no greater than this value. Hence $a_{\rm mix}$ is convex. [F1, step 3.1, step 4.1]

5.3 The support reduction in 2.1 first gives at most $d+2$ atoms. If an optimal representation has more than $d+1$ positive weights, the points $y_i\in\mathbb R^d$ have an affine dependence $\sum_i c_i y_i=0$, $\sum_i c_i=0$. For sufficiently small positive $t$, both weight lists $\theta_i\pm t c_i$ remain nonnegative and preserve the barycenter. If $\sum_i c_i a(y_i)\ne0$, one of these lists strictly lowers energy, contradicting optimality; hence this sum is zero. Increase $t$ in one sign to the first value at which a positive coefficient becomes zero. The new weights preserve barycenter and energy and still attain the minimum; iteration leaves at most $d+1$ positive weights. [A1, F1, step 3.1, step 4.1, algebra]

6.1 Finally, let $g$ be any convex function on $\operatorname{conv}K$ with $g(y)\le a(y)$ for $y\in K$. For the finite optimal measure from 4.1, finite Jensen (obtained by iterating the two-point convexity inequality) gives $g(x)\le\sum_i\theta_i g(y_i)\le\sum_i\theta_i a(y_i)=a_{\rm mix}(x)$. Since $a_{\rm mix}(y)\le a(y)$ for $y\in K$ by the point mass at $y$, it is itself such a convex minorant and dominates every other one. [F1, step 5.2, step 5.3, algebra] ∎
