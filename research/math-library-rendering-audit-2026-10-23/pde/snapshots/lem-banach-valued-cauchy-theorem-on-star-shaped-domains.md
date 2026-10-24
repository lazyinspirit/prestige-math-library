---
id: lem-banach-valued-cauchy-theorem-on-star-shaped-domains
kind: lemma
title: Primitive and Cauchy theorem for Banach-valued holomorphic maps on star-shaped domains
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-banach-space, def-bochner-integrable-function, thm-bochner-integrability-criterion, lem-bochner-integral-norm-inequality, lem-linearity-of-the-bochner-integral, lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves, def-complex-contours-reversal-concatenation-and-closedness, def-complex-differentiability-holomorphic-and-entire, def-complex-domain, def-complex-line-integral-over-a-rectifiable-path, def-countable-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roland Schnaubelt, Evolution Equations, Karlsruhe Institute of Technology (2023/24 course, complete lecture notes)"
      url: "https://iana.math.kit.edu/downloads/iana3/schnaubelt/Skripten/evgl-skript.pdf"
      locator: 'Chapter 2 Section 2.3, curve integrals and Cauchy''s theorem (2.14), printed pp. 57-58'
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 4.a, Cauchy's integral theorem quoted for the contour deformation in the proof of Proposition 4.3, printed pp. 98-99"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the cited integral and semigroup suppliers.

Let $Y$ be a complex Banach space ([[def-banach-space]]), let
$U\subseteq\mathbb C$ be open and star-shaped with base point $a\in U$ (so
$[a,z]\subseteq U$ for every $z\in U$; [[def-complex-domain]]), and let
$F:U\to Y$ be continuous and complex-differentiable on $U$
([[def-complex-differentiability-holomorphic-and-entire]]). For a piecewise
$C^1$ contour $\gamma:[\alpha,\beta]\to U$ put
$$\int_\gamma F\,dw:=\int_\alpha^\beta F(\gamma(t))\gamma'(t)\,dt,$$
a Bochner integral ([[def-bochner-integrable-function]]), the Banach-valued
analogue of [[def-complex-line-integral-over-a-rectifiable-path]]. Then:

1. the segment integral
   $$G(z):=\int_0^1F\bigl(a+t(z-a)\bigr)(z-a)\,dt$$
   is a well-defined element of $Y$ for every $z\in U$, and $G:U\to Y$ is
   complex-differentiable with $G'(z)=F(z)$ on $U$;
2. for every closed piecewise $C^1$ contour
   $\gamma:[\alpha,\beta]\to U$
   ([[def-complex-contours-reversal-concatenation-and-closedness]]) one has
   $\int_\gamma F\,dw=0$, and for two such contours in $U$ with common initial
   and terminal point the integrals agree.

No choice principle beyond Countable Choice is used.

## Facts & Assumptions

**Given:** An open star-shaped $U\subseteq\mathbb C$ with base point $a$, a continuous complex-differentiable $F:U\to Y$ into a complex Banach space $Y$, and the segment integral $G(z)=\int_0^1F(a+t(z-a))(z-a)\,dt$.

[L1] A continuous $f:[u,v]\to Y$ is Bochner integrable and its primitive is differentiable with derivative $f$; for a curve $\varphi$ continuous on $[u,v]$, differentiable in the interior with derivative extending continuously, $\int_u^v\varphi'=\varphi(v)-\varphi(u)$ ([[lem-fundamental-theorem-of-calculus-for-banach-valued-continuous-curves]]).

[L2] The Bochner integral is linear in the integrand and $\|\int_Ef\|\le\int_E\|f\|$ ([[lem-linearity-of-the-bochner-integral]], [[lem-bochner-integral-norm-inequality]]).

[L3] A contour is a rectifiable path; it is closed when its endpoints agree, its reversal is $\gamma^-(t)=\gamma(a+b-t)$, and concatenation $\alpha*\beta$ is defined when $\alpha(1)=\beta(0)$ ([[def-complex-contours-reversal-concatenation-and-closedness]]).

## Proof

**Proof technique:** direct.

1.1 Triangle subdivision. For a closed nondegenerate triangle $\Delta\subset U$, put $I(\Delta)=\int_{\partial\Delta}F\,dw$. Subdivide into four similar triangles, with matching boundary orientations; internal edges cancel by [L2, L3], so some child has integral norm at least $\|I(\Delta)\|/4$. Order the four children once and take the first satisfying this inequality at each subdivision. The resulting nested triangles $\Delta_n$ have diameter $2^{-n}d$ and perimeter $2^{-n}p$, where $d,p$ are those of $\Delta$, and $\|I(\Delta_n)\|\ge4^{-n}\|I(\Delta)\|$. Their intersection is a point $w_0$: a specified vertex of each triangle is a Cauchy sequence in $\mathbb C$, its limit lies in every closed triangle, and the diameters tend to zero. [L1, L2, L3, given, construct]

2.1 Goursat's estimate. Differentiability at $w_0$ gives $F(w)=F(w_0)+F'(w_0)(w-w_0)+(w-w_0)r(w)$ with $r(w)\to0$ as $w\to w_0$ and $r(w_0)=0$. The affine part has polynomial primitive $F(w_0)w+F'(w_0)(w-w_0)^2/2$, so its boundary integral vanishes by [L1]. On $\Delta_n$, $|w-w_0|\le2^{-n}d$ and $\sup_{\Delta_n}\|r\|\to0$; hence [L2] gives $\|I(\Delta_n)\|\le4^{-n}pd\sup_{\Delta_n}\|r\|$. Comparing with step 1.1 proves $I(\Delta)=0$. For a degenerate triangle the oriented segment integrals cancel directly. [step 1.1, L1, L2, L3, given, algebra]

3.1 The segment primitive. The segment integrand defining $G(z)$ is continuous, so [L1] makes it integrable. Fix $z\in U$ and take $h$ sufficiently small that $[z,z+h]\subset U$. Every point of $\operatorname{conv}\{a,z,z+h\}$ is on a segment from $a$ to a point of $[z,z+h]$, so the triangle lies in $U$. Its boundary integral is zero by step 2.1; additivity and reversal therefore give $G(z+h)-G(z)=\int_{[z,z+h]}F\,dw=h\int_0^1F(z+th)\,dt$. The norm of the difference between this quotient and $F(z)$ is at most $\sup_{0\le t\le1}\|F(z+th)-F(z)\|$, which tends to zero by continuity. Thus $G'=F$. [step 2.1, L1, L2, L3, given, algebra]

4.1 Closed contours. On each $C^1$ piece of a contour $\gamma$, the difference-quotient chain rule gives $(G\circ\gamma)'=F(\gamma)\gamma'$; this derivative is continuous on the closed piece because $F$ and $\gamma'$ are continuous. Applying [L1] piecewise and telescoping gives $\int_\gamma F\,dw=G(\gamma(\beta))-G(\gamma(\alpha))$. It is zero for a closed contour; concatenating a contour with the reversal of another having the same endpoints gives path independence. The subdivision choices were specified by a finite ordering, so no choice principle beyond Countable Choice was used. [step 3.1, L1, L2, L3, given, algebra] ∎

## Remarks

The triangle-subdivision argument uses the differentiability remainder only on triangles shrinking to its base point. It does not estimate that remainder on a fixed segment from the star center.
