---
id: ex-oriented-two-plane-bundles-over-s-two-by-winding-number
kind: example
title: Oriented two-plane bundles over the two-sphere by winding number
status: published
origin: pipeline
deps: [thm-oriented-clutching-classifies-oriented-bundles-over-spheres, thm-fundamental-group-of-the-circle]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, Sections 1.1–1.2"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Oriented clutching and the tangent two-plane example, printed pp.21–27"
---

## Example

Oriented real two-plane bundles over $S^2$ are indexed by the winding number
$m\in\mathbb Z$ of their clutching map in
$\pi_1(\operatorname{SO}(2))$. Reversing the chosen fiber orientation sends
$m$ to $-m$.

## Facts & Assumptions

**Given:** oriented rank-two real vector bundles over $S^2$.

[F1] Oriented rank-$n$ bundles over $S^k$ are classified by $[S^{k-1},\operatorname{SO}(n)]$, and reversing the chosen fiber orientation conjugates the clutching map by a reflection ([[thm-oriented-clutching-classifies-oriented-bundles-over-spheres]]).

[F2] The degree map identifies the fundamental group of the circle with $\mathbb Z$ ([[thm-fundamental-group-of-the-circle]]).

## Verification

**Proof technique:** direct.

1.1 The map $R:\mathbb R/\mathbb Z\to\operatorname{SO}(2)$ defined by $R([t])=\begin{pmatrix}\cos(2\pi t)&-\sin(2\pi t)\\ \sin(2\pi t)&\cos(2\pi t)\end{pmatrix}$ is a continuous group isomorphism with continuous inverse obtained from the oriented angle of the first column. Hence [F2] gives $\pi_1(\operatorname{SO}(2),I)\cong\mathbb Z$, with the class of $t\mapsto R([mt])$ corresponding to $m$. [F2, construct]

2.1 Apply [F1] with $n=k=2$. Since $\operatorname{SO}(2)$ is path connected, the unbased set $[S^1,\operatorname{SO}(2)]$ is identified with its fundamental group; it is abelian, so changing the path used to the basepoint causes no conjugacy ambiguity. Step 1.1 therefore assigns exactly one integer $m$ to each oriented bundle, and every $m$ is realized by clutching with $t\mapsto R([mt])$. In particular $m=0$ gives the trivial oriented bundle. [F1, step 1.1]

3.1 Take the reflection $r=\operatorname{diag}(1,-1)$. Direct multiplication gives $rR([t])r^{-1}=R([-t])$. Thus the orientation-reversal action from [F1] sends the loop of winding $m$ to the loop of winding $-m$, as asserted. The calculation uses no choice principle. [F1, step 1.1, step 2.1, algebra] ∎
