---
id: def-arc-reduction-and-combinatorial-curvature-of-a-disc-diagram
kind: definition
title: "Arc reduction and combinatorial curvature of a disc diagram"
status: published
origin: pipeline
deps: [def-sc-toolkit-labelled-planar-disc-diagram]
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Touikan \u00a73.4.2 curvature formulas; \u00a73.5.1 arc reduction"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/section-17.html"
---

## Definition

In a diagram of [[def-sc-toolkit-labelled-planar-disc-diagram]], an **arc** is an edge path whose internal vertices have degree two and whose endpoints are vertices of other degrees. Replace each maximal such path by one edge labelled by its whole word; this is **arc reduction**. Edge lengths are retained as word lengths. Internal arcs have a face on both sides; exterior arcs border the unbounded region. A component that is a whole circle is retained with one marked vertex and one loop, rather than being suppressed to a vertex-free object. In particular use that convention for a one-face disc. A tree reduces to a tree with its spur tips retained. The isolated point is unchanged.

Give each face corner a real angle $\alpha_c$ measured in units of $\pi$. Let $d(f)$ count the edge occurrences around $f$. The link $\operatorname{lk}(v)$ is the finite graph with one vertex for each edge germ at $v$ and one edge for each incident face corner. Loop edges have two germs. Put $\chi(\operatorname{lk}(v))=V_{\operatorname{lk}(v)}-E_{\operatorname{lk}(v)}$ and

$$k(f)=\sum_{c\text{ at }f}\alpha_c-(d(f)-2),\qquad k(v)=2-\chi(\operatorname{lk}(v))-\sum_{c\text{ at }v}\alpha_c.$$

All incidences are counted with multiplicity. An interior disc vertex has circular link of Euler characteristic zero; an ordinary boundary vertex has interval link of Euler characteristic one. A spur tip has singleton link, no corners, and curvature one. The isolated point has empty link and curvature two. These angles are combinatorial data; they need not be geometrically realizable.
