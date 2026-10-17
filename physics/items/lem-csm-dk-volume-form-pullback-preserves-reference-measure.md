---
id: lem-csm-dk-volume-form-pullback-preserves-reference-measure
kind: lemma
title: A volume-preserving diffeomorphism preserves its induced Borel measure
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-countable-choice
  - def-borel-measurable-nonnegative-density-on-a-manifold
  - thm-density-measure-is-independent-of-the-chart-gluing
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
dependency_roles:
  def-countable-choice: mathematical-premise
  def-borel-measurable-nonnegative-density-on-a-manifold: mathematical-premise
  thm-density-measure-is-independent-of-the-chart-gluing: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Gerald B. Folland, Real Analysis, 2nd ed., §11.4 and Theorem 2.47
      url: https://djvu.online/file/NPF4BEtSuqdFA
---

## Statement

Assume countable choice. Let $M$ be a Hausdorff second-countable smooth
$n$-manifold and let $\eta$ be a positive smooth density, with Borel
coefficients as in [[def-borel-measurable-nonnegative-density-on-a-manifold]].
Let $\mu_\eta$ be the intrinsic chart-gluing Borel measure of
[[thm-density-measure-is-independent-of-the-chart-gluing]]. If
$\phi:M\to M$ is a $C^1$
diffeomorphism satisfying $\phi^*\eta=\eta$, then
$$\mu_\eta(\phi^{-1}(E))=\mu_\eta(E)$$
for every Borel set $E\subseteq M$. The total measure may be infinite.

## Facts & Assumptions

**Given:** Countable choice, a positive smooth density on a Hausdorff
second-countable smooth manifold, and a $C^1$ diffeomorphism preserving that
density.

[A1] Adopt $\mathrm{AC}_\omega$ as stated in [[def-countable-choice]].

[F1] [[thm-density-measure-is-independent-of-the-chart-gluing]]: under
$\mathrm{AC}_\omega$, the positive density induces an intrinsic Borel measure,
and in every chart the measure of a Borel subset is the Lebesgue integral of
the chart coefficient of $\eta$.

[F2] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]:
under $\mathrm{AC}_\omega$, a $C^1$ diffeomorphism between open Euclidean sets
transforms nonnegative Lebesgue integrals by its absolute Jacobian.

## Proof

**Given:** [A1], [F1], and [F2].

1.1 Choose a countable chart cover $(U_i,x_i)_{i\ge1}$, and replace it by the
disjoint Borel partition $A_i=U_i\setminus\bigcup_{k<i}U_k$. Choose a countable
chart cover $(V_j,y_j)_{j\ge1}$ for the target and form
$B_j=V_j\setminus\bigcup_{\ell<j}V_\ell$. These are Borel partitions of $M$.
For fixed $i,j$, the coordinate map
$T_{ji}=y_j\circ\phi\circ x_i^{-1}$ is a $C^1$ diffeomorphism from the open
set $x_i(U_i\cap\phi^{-1}(V_j))$ onto the open set
$y_j(\phi(U_i)\cap V_j)$. The pieces
$S_{ij}=A_i\cap\phi^{-1}(B_j\cap E)$ are Borel subsets of its coordinate
domain. [A1, F1, construct]

2.1 By [F1] and countable additivity, $\mu_\eta(\phi^{-1}E)$ is the sum over
$i,j$ of the chart integrals of $\eta$ on $S_{ij}$. The equality
$\phi^*\eta=\eta$ says in these charts that
$\eta_{x_i}(u)=\eta_{y_j}(T_{ji}(u))|\det DT_{ji}(u)|$. Applying [F2] to the
indicator of $T_{ji}(x_i(S_{ij}))$ times the nonnegative coefficient
$\eta_{y_j}$ makes each chart integral equal the integral of $\eta$ on
$\phi(S_{ij})$. The latter sets, as $i$ varies for a fixed $j$, partition
$B_j\cap E$ because $\phi$ is bijective; summing over $i,j$ therefore gives
$\mu_\eta(E)$. All sums have nonnegative terms, so the argument also holds
when either total is infinite. [A1, F1, F2, step 1.1] ∎

## Remarks

The coordinate comparison used in step 2.1 is the commuting square below.
The proof uses its coordinate-map Jacobian through [F2]; the diagram is only
an aid to locating that map.

~~~tikzcd
S_{ij}\subseteq U_i \arrow[r,"\phi"] \arrow[d,"x_i"'] &
\phi(S_{ij})\subseteq V_j \arrow[d,"y_j"] \\
x_i(S_{ij}) \arrow[r,"y_j\circ\phi\circ x_i^{-1}"'] &
y_j(\phi(S_{ij}))
~~~
