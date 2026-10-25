---
id: thm-winding-number-locally-constant
kind: theorem
title: "The winding number is constant on each connected component of the complement of the trace"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-winding-number-closed-complex-contour, thm-winding-number-is-integer, lem-contour-subdivision-into-discs-missing-a-point, cor-ml-estimate-for-complex-line-integrals, prop-linearity-of-complex-line-integrals, def-connected-component-and-quasicomponent, cor-components-of-open-subsets-of-rn-are-polygonally-connected, thm-continuous-image-of-a-connected-space, cor-connected-subsets-of-the-line, thm-compact-subset-is-closed-and-bounded, thm-continuous-image-of-a-compact-space-is-compact, thm-heine-borel-rn, def-metric-topology, def-metric-ball, lem-complex-conjugation-and-modulus-laws, def-integers, thm-int-comm-ring, thm-int-ordered-ring, lem-integer-part, rem-complex-plane-euclidean-dictionary]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §2.1, Property (ii)"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.1"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $\gamma$ be a closed complex contour with trace $\gamma^\ast$ and length
$L(\gamma)$. Then $\mathbb C\setminus\gamma^\ast$ is open, and the index function
$p\mapsto n(\gamma,p)$ satisfies the quantitative estimate

$$|n(\gamma,p)-n(\gamma,p_0)|\ \le\ \frac{L(\gamma)\,|p-p_0|}{\pi\,d^2} \qquad\text{whenever }p_0\notin\gamma^\ast,\ d=\inf_{w\in\gamma^\ast}|w-p_0|,\ |p-p_0|<\tfrac d2 .$$

In particular $n(\gamma,\cdot)$ is continuous on $\mathbb C\setminus\gamma^\ast$;
it is constant on every connected component of that set; and since those
components are open, it is locally constant.

## Facts & Assumptions

**Given:** A closed complex contour $\gamma:[a,b]\to\mathbb C$; the plane carries the Euclidean metric of [[rem-complex-plane-euclidean-dictionary]].

[L1] For a closed complex contour $\gamma$ and $p\notin\gamma^\ast$, $n(\gamma,p)=(2\pi i)^{-1}\int_\gamma dz/(z-p)$ ([[def-winding-number-closed-complex-contour]]).

[L2] The winding number of a closed complex contour about a point off its trace is an integer ([[thm-winding-number-is-integer]]).

[L3] For a complex contour $\gamma$ and $p_0\notin\gamma^\ast$, the distance $d=\inf\{|w-p_0|:w\in\gamma^\ast\}$ exists and is positive ([[lem-contour-subdivision-into-discs-missing-a-point]]).

[L4] If $|f(z)|\le M$ on the trace of a rectifiable contour $\gamma$, with $M\ge0$, then $|\int_\gamma f(z)\,dz|\le M\,L(\gamma)$ ([[cor-ml-estimate-for-complex-line-integrals]]).

[L5] For continuous $f,g$ on the trace of a rectifiable contour $\gamma$ and $\alpha,\beta\in\mathbb C$, $\int_\gamma(\alpha f+\beta g)\,dz=\alpha\int_\gamma f\,dz+\beta\int_\gamma g\,dz$ ([[prop-linearity-of-complex-line-integrals]]).

[L6] The connected component $C(x)$ is the union of all connected subsets containing $x$, hence the largest connected subset containing $x$ ([[def-connected-component-and-quasicomponent]]).

[L7] Every connected component of an open subset $U\subseteq\mathbb R^n$ is open in $\mathbb R^n$ and polygonally connected ([[cor-components-of-open-subsets-of-rn-are-polygonally-connected]]).

[L8] The continuous image of a connected subset is connected ([[thm-continuous-image-of-a-connected-space]]), and a connected subset of $\mathbb R$ is order-convex ([[cor-connected-subsets-of-the-line]]).

[L9] A compact subset of a metric space is closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]); the continuous image of a compact subset is compact ([[thm-continuous-image-of-a-compact-space-is-compact]]); and a closed bounded interval is compact ([[thm-heine-borel-rn]]).

[L10] A set is closed exactly when its complement is open ([[def-metric-topology]]), and $B(x,r)=\{y:d(x,y)<r\}$ ([[def-metric-ball]]).

[L11] $|zw|=|z||w|$ and $|z+w|\le|z|+|w|$ for complex $z,w$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L12] The integers form an ordered commutative ring, and their canonical image in $\mathbb R$ is discrete; hence if $m<n$ then $m+\tfrac12$ lies strictly between them and is not an integer ([[thm-int-comm-ring]], [[thm-int-ordered-ring]], [[lem-integer-part]]).

## Proof

**Proof technique:** direct.

1.1 The trace $\gamma^\ast$ is the continuous image of a compact interval, hence compact and closed by [L9], so its complement $\mathbb C\setminus\gamma^\ast$ is open by [L10]. [given, L9, L10]

1.2 Fix $p_0\notin\gamma^\ast$ and put $d=\inf\{|w-p_0|:w\in\gamma^\ast\}$, which is positive by [L3]; let $p$ satisfy $|p-p_0|<d/2$. For $z\in\gamma^\ast$ one has $|z-p_0|\ge d$ and, by [L11], $|z-p|\ge|z-p_0|-|p-p_0|>d-\tfrac d2=\tfrac d2>0$, so $p\notin\gamma^\ast$ as well. [given, L3, L11]

2.1 For $z\in\gamma^\ast$, elementary algebra gives $\frac1{z-p}-\frac1{z-p_0}=\frac{p-p_0}{(z-p)(z-p_0)}$, whose modulus is at most $|p-p_0|/\bigl(\tfrac d2\cdot d\bigr)=2|p-p_0|/d^2$ by step 1.2 and [L11]. [step 1.2, L11, algebra]

3.1 By [L1] and [L5] the difference $n(\gamma,p)-n(\gamma,p_0)$ is $(2\pi i)^{-1}\int_\gamma\bigl(\frac1{z-p}-\frac1{z-p_0}\bigr)dz$, and [L4] with the bound of step 2.1 makes its modulus at most $(2\pi)^{-1}\cdot 2|p-p_0|L(\gamma)/d^2=L(\gamma)|p-p_0|/(\pi d^2)$. [step 2.1, L1, L4, L5]

4.1 Step 3.1 shows $n(\gamma,\cdot)$ is continuous at every $p_0\notin\gamma^\ast$, since the bound tends to $0$ with $|p-p_0|$. [step 3.1, L10]

5.1 Let $C$ be a connected component of $\mathbb C\setminus\gamma^\ast$. By [L2] the function $n(\gamma,\cdot)$ is integer-valued, and by step 4.1 it is continuous, so by [L6] and [L8] its image on $C$ is an order-convex subset of $\mathbb R$ contained in $\mathbb Z$; by [L12] such a set has at most one element, so $n(\gamma,\cdot)$ is constant on $C$. By [L7] applied to the open set of step 1.1, $C$ is open, so the index is locally constant on $\mathbb C\setminus\gamma^\ast$. [step 1.1, step 4.1, L2, L6, L7, L8, L12] ∎
