---
id: "lem-the-skeletal-telescope-projects-by-a-homotopy-equivalence-of-pairs"
kind: "lemma"
title: "The skeletal telescope projects by a homotopy equivalence of pairs"
deps: ["def-skeletal-mapping-telescope-of-a-cw-pair", "prop-relative-cw-inclusions-are-cofibrations"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - title: "Hatcher, Algebraic Topology, Lemma 2.34, complete telescope deformation pp.138–139"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
      locator: "Lemma 2.34, complete telescope deformation pp.138–139"
    - title: "Hatcher, Algebraic Topology, Proposition 0.16 p.15 and Theorem A.6 p.524"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Proposition 0.16 p.15 and Theorem A.6 p.524"
status: "draft"
origin: "pipeline"
proof_strategy: "Collapse cell prisms in descending dimension, with times accumulating at zero, to obtain compatible filtered slab retractions. Then concatenate slab retractions with times accumulating at one; finite skeleta become stationary. Preserve the subcomplex A throughout."
---

## Statement

For every CW pair $(X,A)$, the skeletal telescope projection $p:(T_X,T_A)\to(X,A)$ is a homotopy equivalence of pairs.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] For a CW pair $(X,A)$ let $X^i$ be its $i$-skeleton and $A^i=A\cap X^i$, following def-skeleta-cw-subcomplex-and-relative-cw-complex. Its **skeletal mapping telescope** is the CW pair $$T_X=\bigcup_{i\ge0}X^i\times[i,\infty),\qquad T_A=\bigcup_{i\ge0}A^i\times[i,\infty).$$ Give $[0,\infty)$ vertices at the nonnegative integers and use the CW weak topology on these subcomplexes of $X\times[0,\infty)$. Projection $p(x,t)=x$ defines a continuous map $(T_X,T_A)\to(X,A)$. The telescope of the empty space is empty. ([[def-skeletal-mapping-telescope-of-a-cw-pair]])

[F2] If $(X,A)$ is a relative CW complex, then $A\hookrightarrow X$ has the homotopy extension property; in particular it is a cofibration. ([[prop-relative-cw-inclusions-are-cofibrations]])

## Proof

1.1 In $X\times[0,\infty)$ put $Y_i=T_X\cup X\times[i,\infty)$ and $B_i=X^i\times[i,i+1]\cup X\times\{i+1\}$. Then $Y_0=X\times[0,\infty)$ and $\bigcap_iY_i=T_X$. We construct a slab strong deformation retraction onto $B_i$ that preserves every skeleton and $A$. Extending such a retraction by the identity on the rest of $Y_i$ gives $Y_i\to Y_{i+1}$: its intersection with the rest is contained in $B_i$. [F1, given]

2.1 Here is the controlled prism construction underlying the CW homotopy extension property. Rescale the slab coordinate to $u\in[0,1]$. On $D^n\times[0,1]$ project radially from $(0,-1)$ onto $E_n=\partial D^n\times[0,1]\cup D^n\times\{1\}$. Explicitly put $\lambda(x,u)=2/\max(2\|x\|,u+1)$ and $r(x,u)=(\lambda x,-1+\lambda(u+1))$. We have $1\le\lambda\le2$; the image lies on the side or top and $r$ fixes $E_n$. The straight-line homotopy $r_s=(1-s)\mathrm{id}+sr$ stays in the convex prism and fixes $E_n$. For a fixed $n>i$, applying this to all $n$-cell prisms gives a strong deformation retraction of $X^n\times[i,i+1]$ onto $X^{n-1}\times[i,i+1]\cup X^n\times\{i+1\}$. It glues along characteristic boundaries because the entire lower skeleton is fixed during this particular collapse. It also preserves $A$: an $n$-cell of $A$ and its attaching boundary both map into $A$. [F2, step 1.1, algebra]

3.1 For the fixed slab index $i$, perform the dimension-$n$ collapse during $[2^{-(n-i)},2^{-(n-i-1)}]$, for $n>i$, so higher dimensions collapse before lower ones. This specifies a homotopy on each $X^d\times[i,i+1]$: start with the identity until time $2^{-(d-i)}$ when $d>i$, then perform the finitely many collapses $n=d,d-1,\ldots,i+1$, always fixing the top; for $d\le i$ use the identity throughout. These homotopies agree on lower skeleta because a higher-dimensional collapse fixes its entire lower skeleton. Their endpoints lie in $B_i$ and they fix $B_i$ at every time. They preserve every skeleton and $A$, and assemble continuously: the restriction to every characteristic disk prism times the homotopy interval is a finite continuous concatenation. Products of a CW complex with the locally finite interval cell structures have their CW weak topology, so these restrictions test continuity, including at time zero. Thus this is the required single slab retraction. [F1, step 2.1]

4.1 Perform the retraction $Y_i\to Y_{i+1}$ during $[1-2^{-i},1-2^{-(i+1)}]$. A point initially in $X^d\times[0,\infty)$ stays in that skeleton and, by the end of stage $d$, lies in $Y_{d+1}\cap(X^d\times[0,\infty))\subset T_X$. It is fixed thereafter. On each closed cell prism the infinite concatenation is therefore eventually stationary uniformly in its points. Define the time-one value by that stationary value. On each characteristic disk prism times the time interval the homotopy is a finite concatenation followed by a constant homotopy; the same CW product weak topology proves continuity at time one as well. [step 1.1, step 3.1]

5.1 The whole homotopy fixes $T_X$ and preserves $A\times[0,\infty)$, ending there in $T_A$. It is a strong deformation retraction of pairs $(X\times[0,\infty),A\times[0,\infty))$ onto $(T_X,T_A)$. The ambient projection is a pair homotopy equivalence, with section at height zero and homotopy $(x,t,s)\mapsto(x,(1-s)t)$. Its composite with the telescope inclusion is the specified projection $p$, hence $p$ is a pair homotopy equivalence. Empty $X$, empty $A$, $A=X$, and zero-dimensional complexes are included by the same construction. [step 4.1, algebra] ∎
