---
id: thm-covering-space-lifting-criterion
kind: theorem
title: "Lifting criterion for maps from path-connected locally path-connected spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-path-lifting-for-covering-maps, cor-lifted-path-endpoints-depend-only-on-path-homotopy, thm-uniqueness-of-lifts-from-a-connected-space, def-induced-homomorphism-on-fundamental-groups, def-locally-connected]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, §1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Ch. 3"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
    - title: "Marco Gualtieri, MAT1300 Week 4 Term 2, §1.6"
      url: "https://www.math.toronto.edu/mgualt/MAT1300/Week%204%20Term%202.pdf"
pipeline_run: null
---

## Statement

Let $Y$ be path-connected and locally path-connected, let $f:(Y,y_0)\to(B,b_0)$ be based, and let $p:(E,e_0)\to(B,b_0)$ be a covering. A based lift $\widetilde f:(Y,y_0)\to(E,e_0)$ exists if and only if $f_*\pi_1(Y,y_0)\subseteq p_*\pi_1(E,e_0)$; when it exists it is unique.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Let $p:E\to B$ be a covering, let $\alpha:I\to B$ be a path, and let $e_0\in E$ satisfy $p(e_0)=\alpha(0)$. There is a unique path $\widetilde\alpha:I\to E$ with $\widetilde\alpha(0)=e_0$ and $p\circ\widetilde\alpha=\alpha$. ([[thm-path-lifting-for-covering-maps]]).

[F2] Endpoint-fixed homotopic paths in the base have lifts with the same endpoint whenever their lifts begin at the same point. ([[cor-lifted-path-endpoints-depend-only-on-path-homotopy]]).

[F3] Let $Y$ be connected and let $f,g:Y\to E$ be lifts through the same covering of the same map $Y\to B$. If $f(y_0)=g(y_0)$ for some $y_0\in Y$, then $f=g$. ([[thm-uniqueness-of-lifts-from-a-connected-space]]).

[F4] Let $f:X\to Y$ be continuous and let $x_0\in X$. Composition sends a loop $\alpha$ at $x_0$ to the loop $f\circ\alpha$ at $f(x_0)$. Using the loop classes and fundamental group of def-based-loops-and-fundamental-group, the proposed **induced homomorphism** is $$f_*:\pi_1(X,x_0)\longrightarrow\pi_1(Y,f(x_0)),\qquad f_*([\alpha]):=[f\circ\alpha].$$ The next theorem proves that this value is independent of the representative, that it is a group homomorphism in the sense of def-group-homomorphism, and that induced maps respect identities, composition and homotopies that fix the basepoint. ([[def-induced-homomorphism-on-fundamental-groups]]).

[F5] Let $(X, \mathcal{T})$ be a topological space (def-topological-space) and let $x \in X$. Subsets carry the subspace topology (def-subspace-topology-top); connectedness is def-connected-space and path-connectedness is def-path-connected. ([[def-locally-connected]]).

## Proof

**Proof technique:** direct.

1.1 For a based map $f:(Y,y_0)\to(X,x_0)$ with $Y$ path-connected and locally path-connected, necessity follows by functoriality. [given, F5, F1, F2, F4]

2.1 For sufficiency, define the candidate lift at $y$ by lifting $f$ along any path from $y_0$; the subgroup inclusion makes the endpoint independent of the chosen path. [step 1.1, F1, F2, F5]

3.1 Local path-connectedness and an evenly covered neighbourhood make the candidate continuous. [step 2.1, F5, F1, F2]

4.1 Uniqueness follows from connectedness. [step 3.1, F3, F5]

5.1 The preceding construction and implications establish the assertion. [step 4.1] ∎
