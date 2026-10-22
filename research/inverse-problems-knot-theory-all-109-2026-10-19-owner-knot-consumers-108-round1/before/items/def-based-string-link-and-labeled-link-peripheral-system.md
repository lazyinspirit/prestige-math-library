---
id: def-based-string-link-and-labeled-link-peripheral-system
kind: definition
title: "Based string links and labeled link peripheral systems"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 2
deps:
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Milnor, Link Groups"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf"
      locator: "§§1–2 and 4–5, PDF pp. 1–6 and 14–16"
    - title: "Ryan Stees, Milnor’s Invariants for Knots and Links in Closed Orientable 3-Manifolds"
      url: "https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/54c7d68f-d982-4e1f-9550-e54140ada5ea/content"
      locator: "§2.5, printed pp. 16–18 (PDF pp. 24–26)"
verification:
  precheck: n/a
---

## Definition

Let $D^2$ be the oriented closed disk and give $C=D^2\times[0,1]$ the product orientation. An $r$-component string link is an ordered family of pairwise disjoint smooth proper embeddings $\tau_i:[0,1]\to C$, for $1\le i\le r$, with fixed distinct endpoints $\tau_i(0)=(p_i,0)$ and $\tau_i(1)=(p_i,1)$ and fixed product collars at the endpoints. Orient each interval from bottom to top. The exterior $X_\tau$ is obtained by removing the relative interiors of chosen pairwise disjoint product tubes around the intervals. The bottom and top punctured disks $P_-$ and $P_+$ are the copies of $D^2$ with the interiors of the endpoint tube disks removed.

Choose a basepoint on the outer boundary of $P_-$, a path in the side boundary of $C$ to the corresponding top basepoint, and basing paths from these points to the component meridians. Each end inclusion, with the chosen connecting path for the top end, induces a based homomorphism $\iota_\pm:\pi_1(P_\pm)\to\pi_1(X_\tau)$. For each string component choose a parallel path on its tube boundary from the bottom endpoint to the top endpoint, and choose access paths that close it to a based loop using the fixed side connector. The resulting element of $\pi_1(X_\tau)$ is its based string-link longitude; the parallel and access paths are part of the peripheral datum. The positively oriented boundaries of the endpoint tube disks are the designated meridian loops. Stacking two string links means rescaling them into the lower and upper halves of $C$ and identifying their matching endpoint collars; closure joins each top endpoint to the matching bottom endpoint outside $C$ and retains the component labels.

For a nonempty labeled oriented link $L=K_1\cup\cdots\cup K_r$ in the oriented three-sphere, choose pairwise disjoint closed product tubes $N(K_i)$, put $E_L=S^3\setminus\operatorname{int}\bigl(\bigcup_iN(K_i)\bigr)$, and write $T_i=\partial N(K_i)$. A positive meridian $\mu_i$ is the oriented boundary of a normal disk, with the disk orientation fixed by the rule that the oriented tangent of $K_i$ followed by the disk orientation gives the ambient orientation. A degree-one parallel is a simple closed curve on $T_i$ whose projection to $K_i$ has degree $+1$. A based longitude is the class of such a parallel transported to the common basepoint by a specified path. When the positive meridians form a basis of $H_1(E_L;\mathbb Z)$, the self-meridian coordinate of a longitude is its coefficient on $[\mu_i]$. A preferred zero-self-meridian longitude is a chosen degree-one parallel whose self-meridian coordinate is zero. The choice, when it exists, is part of the peripheral datum; this definition asserts neither existence nor uniqueness. Changing a common basing path conjugates the peripheral group elements simultaneously.

## Definition references

[[def-oriented-link-in-s-three-and-ambient-isotopy|Smooth oriented links in the standard oriented three-sphere]]

[[def-knot-exterior|Chosen tubular exterior and boundary orientation]]

[[def-knot-meridian-and-preferred-longitude|Positive meridian and degree-one peripheral curve]]

[[def-oriented-crossing-sign-writhe-and-blackboard-framing|Oriented crossing and framing conventions]]

## Remarks

The product-tube choices, endpoint collars, basepoints, connecting path, labels, and longitude basings are part of the input. The term preferred zero-self-linking longitude names a condition on the peripheral data, not an existence theorem.
