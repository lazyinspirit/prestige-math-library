---
id: thm-complex-path-length-invariant-under-monotone-reparametrization
kind: theorem
title: Complex path length is invariant under monotone surjective reparametrization
status: draft
origin: pipeline
pipeline_run: quantum-prerequisites-4-2026-10-15
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-complex-path-polygonal-length-and-rectifiability
  - thm-complex-coordinate-isometry-and-topology-transport
  - thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed
  - thm-arc-length-is-invariant-under-monotone-reparametrization
  - def-monotone-function
  - def-complex-metric-convergence-and-continuity
  - def-metric-continuity
  - def-interval
  - lem-real-line-is-a-metric-space
justified_by: []
aliases: []
proof_strategy: direct
sources:
  references:
    - title: E. Stein and R. Shakarchi, Complex Analysis, Princeton Lectures in Analysis II, Chapter 1, Section 3
      url: https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf
    - title: U. Lang, Differential Geometry I, Section 1.1
      url: https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf
---

## Statement

Let $a\le b$ and $c\le d$. Suppose $\gamma:[a,b]\to\mathbb C$ is continuous and
$\varphi:[c,d]\to[a,b]$ is continuous, surjective, and either nondecreasing or
nonincreasing in the sense of [[def-monotone-function]]. Then

$$L_{\mathbb C}(\gamma\circ\varphi)=L_{\mathbb C}(\gamma).$$

The equality includes finite and infinite lengths, constant pauses, reversal,
and singleton intervals. A nondecreasing map preserves parameter order; a
nonincreasing map reverses it. When $a=b$, $\varphi$ is constant and there is
no nontrivial orientation to distinguish.

## Facts & Assumptions

**Given:** The intervals, continuous path, and continuous surjective monotone
map in the statement.

[F1] [[def-complex-path-polygonal-length-and-rectifiability]]: A complex path must be continuous from the usual real metric to $d_{\mathbb C}$, and its length is the extended-real supremum of its partition sums, with singleton length zero.

[F2] [[thm-complex-coordinate-isometry-and-topology-transport]] and [[thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed]]: $\Phi$ is an isometry and the length of every continuous complex path equals that of its coordinate path, including singleton intervals.

[F3] [[thm-arc-length-is-invariant-under-monotone-reparametrization]]: A continuous surjective nondecreasing or nonincreasing reparametrization preserves Euclidean polygonal length, including pauses, reversal, and singleton intervals.

[F4] [[def-monotone-function]]: Nondecreasing maps preserve order and nonincreasing maps reverse order.

[F5] [[def-metric-continuity]], [[def-complex-metric-convergence-and-continuity]], [[lem-real-line-is-a-metric-space]], and [[def-interval]]: Continuity is the metric $\varepsilon$-$\delta$ condition on the indicated interval subspaces; the real metric is $|s-t|$ and the complex metric is $|z-w|$.

## Proof

1.1 The composite $\gamma\circ\varphi$ is continuous. Indeed, fix $s_0\in[c,d]$ and $\varepsilon>0$. By continuity of $\gamma$ at $\varphi(s_0)$ choose $\delta>0$ such that $u\in[a,b]$ and $|u-\varphi(s_0)|<\delta$ imply $d_{\mathbb C}(\gamma(u),\gamma(\varphi(s_0)))<\varepsilon$. By continuity of $\varphi$ at $s_0$ choose $\eta>0$ such that $s\in[c,d]$ and $|s-s_0|<\eta$ imply $|\varphi(s)-\varphi(s_0)|<\delta$. The implication in [F5] then proves continuity of the composite at $s_0$. [given, F1, F5, choose]

1.2 If $c=d$, surjectivity forces $a=b$, so both lengths are zero by [F1]. If $a=b$ while $c<d$, then $\gamma$ and $\gamma\circ\varphi$ are constant paths and both lengths are zero by [F1]. Thus the equality covers all singleton cases. [given, F1]

2.1 Put $\Gamma=\Phi\circ\gamma$. By the isometry in [F2], $\Gamma$ is continuous and $\Phi\circ(\gamma\circ\varphi)=\Gamma\circ\varphi$. The Euclidean reparametrization theorem [F3] gives $L_{\mathbb R^2}(\Gamma\circ\varphi)=L_{\mathbb R^2}(\Gamma)$. [given, F2, F3, step 1.1]

3.1 Apply the complex-to-coordinate length equality [F2] to $\gamma$ and, using step 1.1, to $\gamma\circ\varphi$. Together with step 2.1 this yields $L_{\mathbb C}(\gamma\circ\varphi)=L_{\mathbb C}(\gamma)$. [F2, step 1.1, step 2.1]

4.1 By [F4], the nondecreasing case preserves order and the nonincreasing case reverses it. If $a<b$, a nondecreasing surjection must attain $a$ at $c$ and $b$ at $d$; a nonincreasing surjection must attain $b$ at $c$ and $a$ at $d$. If $a=b$, the map is constant and there is no nontrivial orientation. [given, F4, algebra] ∎
