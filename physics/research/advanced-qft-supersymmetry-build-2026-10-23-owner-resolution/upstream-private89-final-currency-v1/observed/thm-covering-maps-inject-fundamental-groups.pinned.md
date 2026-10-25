---
id: thm-covering-maps-inject-fundamental-groups
kind: theorem
title: "A covering map induces an injective homomorphism on fundamental groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-homotopy-lifting-for-covering-maps, def-induced-homomorphism-on-fundamental-groups, def-simply-connected]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
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

For a covering $p:(E,e_0)\to(B,b_0)$, the induced homomorphism $p_*:\pi_1(E,e_0)\to\pi_1(B,b_0)$ is injective.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] Let $p:E\to B$ be a covering, $H:Y\times I\to B$ a homotopy, and $\widetilde H_0:Y\to E$ a lift of $H(-,0)$. There is a unique lift $\widetilde H:Y\times I\to E$ of $H$ extending $\widetilde H_0$. ([[thm-homotopy-lifting-for-covering-maps]]).

[F2] Let $f:X\to Y$ be continuous and let $x_0\in X$. Composition sends a loop $\alpha$ at $x_0$ to the loop $f\circ\alpha$ at $f(x_0)$. Using the loop classes and fundamental group of def-based-loops-and-fundamental-group, the proposed **induced homomorphism** is $$f_*:\pi_1(X,x_0)\longrightarrow\pi_1(Y,f(x_0)),\qquad f_*([\alpha]):=[f\circ\alpha].$$ The next theorem proves that this value is independent of the representative, that it is a group homomorphism in the sense of def-group-homomorphism, and that induced maps respect identities, composition and homotopies that fix the basepoint. ([[def-induced-homomorphism-on-fundamental-groups]]).

[F3] A topological space $X$ is **simply connected** when it is nonempty and path-connected (def-path-connected) and, for every $x_0\in X$, the group $\pi_1(X,x_0)$ has exactly one element. ([[def-simply-connected]]).

## Proof

**Proof technique:** direct.

1.1 If a loop upstairs maps to a nullhomotopic loop downstairs, lift a nullhomotopy with the given loop as its initial edge. [given, F2, F1, F3]

2.1 Uniqueness forces the opposite edge to be constant, yielding a nullhomotopy upstairs. [step 1.1, F2]

3.1 Preserve the chosen basepoints and the exact published definition of the induced map. [step 2.1, F2]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎
