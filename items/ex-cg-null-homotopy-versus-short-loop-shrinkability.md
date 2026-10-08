---
id: ex-cg-null-homotopy-versus-short-loop-shrinkability
kind: example
title: "Null-homotopy versus shrinkability through short loops on $S^2$ and on a short circle"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 16
deps: [thm-heine-cantor-metric, cor-connected-subsets-of-the-line, cor-pi-is-the-first-positive-sine-zero, def-axiom-of-choice, def-cg-cat-zero-cat-one-and-local-geodesic, def-cg-short-loop-homotopy-and-nonshrinkability, def-metric-ball, def-metric-compactness, def-metric-space, def-pointwise-uniform-and-uniformly-cauchy-convergence, def-principal-inverse-sine-and-cosine, lem-cg-bowditch-quantitative-short-loop-control, lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity, thm-sine-and-cosine-derivatives, thm-sine-and-cosine-addition-formulas, lem-cg-comparison-convexity-and-model-spaces, thm-sine-cosine-signs-monotonicity-and-ranges, thm-principal-inverse-sine-and-cosine-derivatives]
proof_strategy: direct
axiom_use: "AC enters through the cited general quantitative or short-loop criterion; the explicit model-space computations require no additional choice."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "B. H. Bowditch, Notes on locally CAT(1) spaces (Aberdeen preprint, 27 scanned sheets)"
      url: "https://www.bhbowditch.com/papers/bhb-catone.pdf"
      locator: "§3.1, printed pp. 20–21 (closed local geodesics versus the constant loop; 3.1.4–3.1.5); §3.1.7 (the minimum nonshrinkable loop)"
    - title: "Martin R. Bridson and André Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "II.4.12 (compact balls), II.4.15–II.4.17 (injectivity radius, systole, minimum embedded circle)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Assume the Axiom of Choice for the cited short-loop criterion.

**(i) The two-sphere.** $S^2$ is CAT(1) ([[lem-cg-comparison-convexity-and-model-spaces]] (ii)) and contains no isometrically embedded circle of length $<2\pi$; hence its minimal embedded-circle length is $m=2\pi$ and, by [[lem-cg-bowditch-quantitative-short-loop-control]] (iv), every loop of length $<2\pi$ on $S^2$ is shrinkable through loops of length $<2\pi$.

**(ii) The equator is null-homotopic but not short.** Let $E$ be the equator (length exactly $2\pi$). The latitude homotopy $E_\varphi$, moving $E$ to a pole through the parallel at latitude $\varphi\in[0,\pi/2]$, is a null-homotopy whose loops have lengths $2\pi\cos\varphi$, all strictly less than $2\pi$ for $\varphi>0$, while $L(E_0)=2\pi$. Since $E$ itself has length $2\pi$, it is not a short loop, and it cannot be the first member of any short-loop homotopy: shrinkability is defined only for loops of length $<2\pi$, and the constant $2\pi$ is sharp. Thus ordinary null-homotopy imposes no length bound on the intermediate loops, whereas a short-loop homotopy constrains every member, including the first.

**(iii) A short nonshrinkable loop.** On $S^1_\ell$ with $0<\ell<2\pi$, the full circle has length $\ell<2\pi$; it is an isometrically embedded circle, it is nonshrinkable, and it is not null-homotopic, while every loop of length $<\ell$ is null-homotopic and shrinkable ([[lem-cg-bowditch-quantitative-short-loop-control]] (iii), [[lem-cg-comparison-convexity-and-model-spaces]] (vi)). So 'short' does not imply 'null-homotopic', and a short loop is nonshrinkable exactly when its winding number is nonzero; every such loop has length at least $m=\ell$.

**(iv) Separation.** Both examples are consistent with the criterion of [[lem-cg-bowditch-quantitative-short-loop-control]] (iv): in a compact geodesic locally CAT(1) space the existence of a short nonshrinkable loop is equivalent to the failure of CAT(1), and in that case the minimal embedded circle realizes the minimum nonshrinkable length.

## Facts & Assumptions

**Given:** The round unit sphere $S^2$ with its intrinsic metric; the circle $S^1_\ell=\mathbb R/\ell\mathbb Z$ of circumference $0<\ell<2\pi$; the equator $E\subset S^2$ and the latitude family $E_\varphi$.

[L1] [[lem-cg-comparison-convexity-and-model-spaces]]: $S^2$ is CAT(1), comparison triangles and the spherical cosine rule, and the properties of the round circle $S^1_\ell$ (statement (vi)).

[L2] [[def-cg-short-loop-homotopy-and-nonshrinkability]]: short loops are the loops of length $<2\pi$, shrinkability is short-loop homotopy to a constant, and the uniform-plus-length topology.

[L3] [[lem-cg-bowditch-quantitative-short-loop-control]] (iii)-(iv): every short loop of length $<m$ is shrinkable, and for compact geodesic locally CAT(1) $X$ the equivalence between CAT(1), $m\ge2\pi$ and the absence of isometrically embedded circles of length $<2\pi$.

[L4] [[thm-heine-cantor-metric]], [[cor-connected-subsets-of-the-line]], [[def-metric-space]], [[def-metric-ball]], [[def-metric-compactness]], [[def-pointwise-uniform-and-uniformly-cauchy-convergence]]: the metric axioms, balls, compactness, and uniform convergence of families of maps.

[L5] [[def-principal-inverse-sine-and-cosine]], [[thm-sine-cosine-signs-monotonicity-and-ranges]], [[cor-pi-is-the-first-positive-sine-zero]]: cosine decreases on $[0,\pi]$ and sine increases on $[0,\pi/2]$.

[L6] [[def-axiom-of-choice]]: AC enters only through the supplier [L3]; the explicit latitude and arc contractions are choice-free.



## Verification

**Proof technique:** explicit latitude and arc contractions together with the short-loop criterion.

1.1 **The two-sphere (i).** $S^2$ is CAT(1) by [L1], so by [L3] every isometrically embedded circle in $S^2$ has length at least $2\pi$, i.e. $m\ge2\pi$; the equator is an isometrically embedded circle of length $2\pi$, so $m=2\pi$, and [L3](iii) gives that every loop of length $<2\pi$ is shrinkable. [L1, L3, algebra]

1.2 **The latitude homotopy (ii).** Parametrize the parallel by $E_\varphi(t)=(\cos\varphi\cos(2\pi t),\cos\varphi\sin(2\pi t),\sin\varphi)$. For an angular increment $u$ with $|u|\le\pi$, dot products and the addition formulas give the spherical distance $D_\varphi(u)=2\arcsin(\cos\varphi\sin(|u|/2))$. Its right derivative at zero is $\cos\varphi$, by [[thm-sine-and-cosine-derivatives]] and [[thm-principal-inverse-sine-and-cosine-derivatives]]. Consequently, for every $\epsilon>0$, all sufficiently small increments satisfy $(\cos\varphi-\epsilon)|u|\le D_\varphi(u)\le(\cos\varphi+\epsilon)|u|$. Refining any partition and summing proves that its supremum length on an angular interval of size $A$ is $A\cos\varphi$, using the metric partition definition [[lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity]]. Thus $L(E_\varphi)=2\pi\cos\varphi$ and these loops are normalized, including the constant pole. The displayed coordinates vary uniformly continuously with $\varphi$, and their lengths vary continuously. This gives the asserted null-homotopy, with short members for $\varphi>0$, while $E_0$ has length $2\pi$ and is outside the domain of short-loop homotopy. [L1, L2, L4, L5, algebra]

1.3 **The short circle (iii).** In $S^1_\ell$, every pair at distance $<\ell/2$ has exactly one shortest arc, whereas opposite points have two distinct minimizing arcs of length $\ell/2$. Any isometrically embedded circle of length $u$ has two minimizing arcs between its opposite points, so $u/2\ge\ell/2$. The full circle realizes equality, proving $m=\ell$. By [L3] every loop of length $<\ell$ is shrinkable; the full circle is nonshrinkable. For the ordinary null-homotopy assertions, lift a loop to $\mathbb R$ under $t\mapsto t\bmod\ell$: subdivision into arcs lying in intervals of length $<\ell/2$ gives successive unique local lifts once the initial value is fixed. The endpoint displacement is $k\ell$ for an integer $k$. A loop of length $<\ell$ has $|k|\ell\le L<\ell$, so $k=0$ and its lift is closed; For any loop with $k=0$, multiplying its closed lift about its initial point by $t\in[0,1]$ contracts it through loops of lengths $tL$: local lifts preserve length by the partition definition, and Euclidean scaling multiplies length by $t$. For a normalized loop this family is normalized and continuous in the uniform-plus-length topology, including $t=0$. Thus every short zero-winding loop is shrinkable. For a continuous homotopy, compact uniform continuity [L4] gives a common finite subdivision into the same local lifting charts near each parameter value; compatible local lifts therefore depend continuously on the parameter. Their endpoint displacement is a continuous integer multiple of $\ell$, hence constant on the parameter interval. The full circle has $k=1$ and a constant loop has $k=0$, so the full circle is not null-homotopic. Thus every nonzero-winding short loop is nonshrinkable, has length at least $\ell$, and is not null-homotopic, proving the asserted classification. [L1, L2, L3, L4, algebra, construct]

1.4 **Separation (iv).** In a compact geodesic locally CAT(1) space the existence of a short nonshrinkable loop is equivalent to the failure of CAT(1) by [L3](iv), and when $m<2\pi$ the minimum nonshrinkable length is $m$, realized by an isometrically embedded circle; both examples above are instances of this criterion, since $S^2$ has $m=2\pi$ and no short nonshrinkable loop, while $S^1_\ell$ has $m=\ell<2\pi$ and the full circle as shortest nonshrinkable loop. [L1, L3, algebra]

2.1 **Conclusion.** Clause (i) is step 1.1, clause (ii) is step 1.2, clause (iii) is step 1.3 and clause (iv) is step 1.4; AC enters only through the supplier [L3] ([L6]). [step 1.1, step 1.2, step 1.3, step 1.4, L6] ∎
