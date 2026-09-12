---
id: "lem-a-finite-endpoint-of-a-maximal-unit-speed-geodesic-produces-a-cauchy-curve"
kind: "lemma"
title: "A finite endpoint of a maximal unit-speed geodesic produces a Cauchy curve"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["prop-components-of-a-topological-manifold-are-open-and-at-most-countable","thm-path-connected-implies-connected","def-riemannian-distance-on-a-connected-manifold","thm-riemannian-distance-is-a-metric","def-riemannian-speed-and-length","prop-length-dominates-endpoint-distance"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ben Andrews, Geodesics and Completeness, proof of Theorem 11.5.1, printed p.106
      url: https://maths-people.anu.edu.au/andrews/DG/DG_chap11.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $M$ be a Riemannian manifold, let $I=(a,b)$ be a nonempty open interval
with $b<\infty$, and let $\gamma:I\to M$ be a unit-speed geodesic. Let $C$ be
the connected component containing its image, and let $d_C$ be the Riemannian
distance of the restricted metric on $C$. Then $\gamma$ is **Cauchy as
$t\uparrow b$**, in the explicit sense that for every $\varepsilon>0$ there is
$T\in I$ such that
$$T<s,t<b\quad\Longrightarrow\quad d_C(\gamma(s),\gamma(t))<\varepsilon.$$

In particular this holds at a finite right endpoint of the maximal interval of
a maximal unit-speed geodesic. By reversing the parameter, the analogous
statement holds as $t\downarrow a$ when $a> -\infty$.

## Facts & Assumptions

**Given:** The manifold, interval, component, and unit-speed geodesic in the statement.

[F1] Connected components of a manifold are open ([[prop-components-of-a-topological-manifold-are-open-and-at-most-countable]]), so $C$ inherits a connected Riemannian-manifold structure. A path component lies in a connected component ([[thm-path-connected-implies-connected]]).

[F2] [[def-riemannian-distance-on-a-connected-manifold]] defines $d_C$ as the infimum of lengths of piecewise-$C^1$ curves in $C$, [[thm-riemannian-distance-is-a-metric]] makes it symmetric, and [[prop-length-dominates-endpoint-distance]] gives endpoint distance at most the length of any such curve.

[F3] For a $C^1$ curve, [[def-riemannian-speed-and-length]] gives $L_g(\gamma|_{[s,t]})=\int_s^t|\gamma'(u)|_g\,du$.

## Proof

1.1 Fix $r\in I$. For every $t\in I$, the restriction of $\gamma$ between $r$ and $t$, affinely reparametrized to $[0,1]$, is a path from $\gamma(r)$ to $\gamma(t)$. Thus the image of $\gamma$ lies in the path component of $\gamma(r)$ and hence in the single connected component $C$; openness from [F1] makes every restricted segment a curve in the Riemannian manifold $C$. [F1, given]

2.1 If $s<t$ are in $I$, the unit-speed hypothesis and [F3] give $$L_g(\gamma|_{[s,t]})=\int_s^t1\,du=t-s.$$ Applying [F2] in $C$ therefore yields $$d_C(\gamma(s),\gamma(t))\le t-s=|t-s|.$$ The same inequality for $t<s$ follows by interchanging the two parameters, and equality of the parameters gives distance zero. [F2, F3, step 1.1, algebra]

3.1 Let $\varepsilon>0$ and put $T=\max\{r,b-\varepsilon/2\}$. Both entries of the maximum are less than $b$, so $T\in I$. If $T<s,t<b$, then $|s-t|<b-T\le\varepsilon/2<\varepsilon$; step 2.1 gives $d_C(\gamma(s),\gamma(t))<\varepsilon$. This is exactly the displayed Cauchy condition. [step 2.1, algebra]

4.1 Maximality was not needed, so the special case for a maximal geodesic is immediate. If $a> -\infty$, the curve $u\mapsto\gamma(-u)$ is again unit speed on $(-b,-a)$, and step 3.1 at its finite right endpoint $-a$ gives the stated left-endpoint version. The empty manifold admits no curve with nonempty domain; in dimension zero there is no unit-speed curve, while dimension one is covered unchanged. The assumptions $I\ne\varnothing$ and $b<\infty$ exclude an empty source and an infinite endpoint; arbitrarily small positive $\varepsilon$ is handled explicitly. No choice principle is used: $r$ is one fixed witness from the given nonempty interval and $T$ is a formula. [step 3.1, given, algebra] ∎

## Remarks

- Andrews writes the estimate $d(\gamma(s),\gamma(t))\le |s-t|$ and immediately concludes that $\gamma(t)$ is Cauchy as $t$ approaches the finite endpoint in the proof of Theorem 11.5.1. The proof above spells out its quantifiers and makes distance well defined even when the ambient manifold is disconnected.
- The original scaffold listed constant speed as a dependency, but unit speed is already a hypothesis. No constant-speed theorem is used here.
