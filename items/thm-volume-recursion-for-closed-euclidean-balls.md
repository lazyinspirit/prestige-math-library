---
id: thm-volume-recursion-for-closed-euclidean-balls
kind: theorem
title: 'Closed Euclidean balls are Jordan measurable and their volumes satisfy the slicing recursion'
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-solid-between-continuous-graphs-fubini-formula, cor-cavalieri-principle-for-jordan-content, thm-linear-images-scale-jordan-content-by-absolute-determinant, def-euclidean-spheres-and-closed-balls, def-rational-power, thm-continuous-inverse, thm-nth-roots-exist, lem-continuity-is-local-and-pastes, lem-metrics-on-rn, thm-induction-principle, thm-heine-borel-rn]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §2.4"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, §5C"
      url: "https://measure.axler.net/MIRA.pdf"
pipeline_run: null
---

## Statement

For every integer $n\ge1$ and every $r\ge0$, put $\overline B_n(0,r):=\{x\in\mathbb R^n:\lVert x\rVert_2\le r\}$, extending the positive-radius notation of [[def-euclidean-spheres-and-closed-balls]] to $r=0$. This closed Euclidean ball is Jordan measurable; write its content as $V_n(r)$. One has $V_1(r)=2r$. For $n\ge2$ and $r\ge0$, $V_n(r)=V_{n-1}(1)\int_{-r}^{r}(r^2-t^2)^{(n-1)/2}\,dt$.

## Facts & Assumptions

**Given:** Positive integer dimension $n$, radius $r\ge0$, and the closed Euclidean balls defined in the Statement.

[F1] A solid between continuous graphs over a compact Jordan base is compact and Jordan measurable ([[thm-solid-between-continuous-graphs-fubini-formula]]).

[F2] If a linear map $T$ has matrix $A$ and $E$ is a bounded Jordan set, then $\operatorname{cont}(T(E))=|\det A|\operatorname{cont}(E)$ ([[thm-linear-images-scale-jordan-content-by-absolute-determinant]]).

[F3] If a bounded Jordan set has Jordan-measurable sections outside a content-zero parameter set, then its completed sectional-content function, with empty sections assigned content $0$, is integrable and its integral is the set's content ([[cor-cavalieri-principle-for-jordan-content]]).

[F4] A composite of continuous maps is continuous ([[lem-continuity-is-local-and-pastes]]).

[F5] The inverse of a continuous injective real function on an interval is continuous on its image ([[thm-continuous-inverse]]).

[F6] Every nonnegative real has a unique nonnegative square root ([[thm-nth-roots-exist]]).

[F7] A Euclidean set is compact if and only if it is closed and bounded ([[thm-heine-borel-rn]]).

[F8] The Euclidean distance is $d_2(u,v)=\|u-v\|_2$ and satisfies the metric triangle inequality ([[lem-metrics-on-rn]]).

## Proof

**Proof technique:** induction.

1.1 For $n=1$, the ball is the closed bounded interval $[-r,r]$, hence compact by [F7], and it is Jordan measurable with content $2r$, including $r=0$. [given, F7, base]

2.1 Assume closed balls in dimension $n-1$ are compact and Jordan measurable. The triangle inequality in [F8], applied in both orders, gives $|\|u\|_2-\|v\|_2|\le\|u-v\|_2$, so the Euclidean norm is continuous. On $[0,r]$, the estimate $|(r^2-s^2)-(r^2-t^2)|=|s-t||s+t|\le2r|s-t|$ makes $s\mapsto r^2-s^2$ continuous; [F5] and [F6] make its nonnegative square root continuous, and [F4] makes the resulting composite continuous on the ball. Thus the $n$-ball is the solid between two continuous square-root graphs over $\overline B_{n-1}(0,r)$, and [F1] makes it compact and Jordan measurable. [step 1.1, ih, F1, F4, F5, F6, F8, algebra]

3.1 For $|t|\le r$, the section at last coordinate $t$ is the $(n-1)$-ball of radius $\rho(t):=\sqrt{r^2-t^2}$. It is the image of the unit $(n-1)$-ball under scalar multiplication by $\rho(t)$, whose determinant has absolute value $\rho(t)^{n-1}$; [F2] gives section content $V_{n-1}(1)(r^2-t^2)^{(n-1)/2}$. At $t=\pm r$ this is zero. [step 2.1, F2, algebra]

4.1 By [F3], integration of the section contents in step 3.1 gives the displayed recursion. Thus the induction proves Jordan measurability in every positive dimension and the recursion for every $n\ge2$. [step 3.1, F3, discharge-induction] ∎
