---
id: "def-skeletal-mapping-telescope-of-a-cw-pair"
kind: "definition"
title: "Skeletal mapping telescope of a cw pair"
deps: ["def-skeleta-cw-subcomplex-and-relative-cw-complex"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Lemma 2.34, telescope construction p.138"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Lemma 2.34, telescope construction p.138"
    - title: "May, A Concise Course in Algebraic Topology, 14§6, telescope construction pp.114–116"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "14§6, telescope construction pp.114–116"
status: "draft"
origin: "pipeline"
---

## Definition

For a CW pair $(X,A)$ let $X^i$ be its $i$-skeleton and $A^i=A\cap X^i$, following [[def-skeleta-cw-subcomplex-and-relative-cw-complex]]. Its **skeletal mapping telescope** is the CW pair
$$T_X=\bigcup_{i\ge0}X^i\times[i,\infty),\qquad T_A=\bigcup_{i\ge0}A^i\times[i,\infty).$$
Give $[0,\infty)$ vertices at the nonnegative integers and use the CW weak topology on these subcomplexes of $X\times[0,\infty)$. Projection $p(x,t)=x$ defines a continuous map $(T_X,T_A)\to(X,A)$. The telescope of the empty space is empty.
