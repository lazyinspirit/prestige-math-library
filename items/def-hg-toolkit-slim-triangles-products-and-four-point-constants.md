---
id: "def-hg-toolkit-slim-triangles-products-and-four-point-constants"
kind: "definition"
title: "Hg toolkit slim triangles products and four point constants"
deps: ["def-geodesic-and-geodesic-metric-space", "def-complete-ordered-field"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Druţu–Kapovich Chapter 9 §§9.1,9.5"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
status: published
origin: "pipeline"
---

## Definition

Work in a metric space $(X,d)$ over the real complete ordered field of [[def-complete-ordered-field]]. Geodesic segments and geodesic spaces have the meaning in [[def-geodesic-and-geodesic-metric-space]]. A geodesic triangle consists of three specified segments joining three points; repeated vertices and zero-length sides are permitted. A Cayley graph here means its unit-edge geometric realization when geodesics are discussed, rather than only its vertex word metric.

For nonempty $A\subseteq X$, put $d(x,A)=\inf\{d(x,a):a\in A\}$. This infimum exists: the set is nonempty and bounded below by zero, and the infimum property follows by negating the least-upper-bound property. The closed $r$-neighbourhood means $\{x:d(x,A)\le r\}$, for $r\ge0$; it does not assert that a closest point exists.

For $\delta\ge0$, a triangle is **$\delta$-slim** if each side is contained in the closed $\delta$-neighbourhood of the union of the other two sides. A space has $\delta$-slim triangles if this holds for every choice of triangle and sides.

The **Gromov product** is
$$ (x|y)_o=\frac{d(o,x)+d(o,y)-d(x,y)}2. $$
The triangle inequality and its reverse give $0\le(x|y)_o\le\min\{d(o,x),d(o,y)\}$. For $\kappa\ge0$, the **product condition with constant $\kappa$** is
$$ (x|z)_o\ge\min\{(x|y)_o,(y|z)_o\}-\kappa $$
for every $o,x,y,z\in X$.

For four points $a,b,c,d$, form $d(a,b)+d(c,d)$, $d(a,c)+d(b,d)$ and $d(a,d)+d(b,c)$. The **four-point condition with constant $\kappa$** says the largest minus the second-largest of these three numbers is at most $2\kappa$, for every quadruple, including repeated points. Ties are allowed. None of these definitions assumes properness or AC.
