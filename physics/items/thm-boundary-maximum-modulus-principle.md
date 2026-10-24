---
verification:
  repair: research/quantum-computing-algorithms-60-2026-10-15-owner/published-repairs/thm-boundary-maximum-modulus-principle.json
id: thm-boundary-maximum-modulus-principle
kind: theorem
title: "Boundary maximum modulus principle on a bounded domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-local-maximum-modulus-principle, thm-heine-borel-rn, thm-extreme-value-metric, def-metric-interior-closure-boundary, cor-rn-is-polygonally-connected-and-locally-path-connected, def-complex-domain, def-complex-metric-convergence-and-continuity, thm-complex-coordinate-isometry-and-topology-transport, thm-metric-closure-characterisation, def-metric-ball, lem-metric-reverse-triangle, def-metric-bounded-diameter, def-metric-continuity, lem-complex-conjugation-and-modulus-laws, cor-archimedean-reciprocal]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "The boundary carries the maximum modulus"
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Corollary 3.3.7"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "B. V. Shabat, Introduction to Complex Analysis, Theorem 1.15"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
    - title: "J. A. Tropp, Matrix Analysis, Theorem 7.12"
      url: "https://tropp.caltech.edu/notes/Tro22-Matrix-Analysis-LN.pdf"
pipeline_run: null
---

## Statement

If $\Omega$ is a bounded complex domain and $f$ is continuous on $\overline\Omega$ and holomorphic on $\Omega$, then $|f|$ attains its maximum on $\partial\Omega$.

Equivalently, there is $\zeta\in\partial\Omega$ such that
$$|f(z)|\le|f(\zeta)|\qquad(z\in\overline\Omega).$$

## Facts & Assumptions

**Given:** A bounded complex domain $\Omega$ and a continuous function $f:\overline\Omega\to\mathbb C$ whose restriction to $\Omega$ is holomorphic. The domain is nonempty, open and connected in $d_{\mathbb C}$ ([[def-complex-domain]], [[def-complex-metric-convergence-and-continuity]]). Use the coordinate isometric homeomorphism of [[thm-complex-coordinate-isometry-and-topology-transport]].

[L1] If the modulus of a holomorphic function on a complex domain has an interior local maximum, then the function is constant ([[thm-local-maximum-modulus-principle]]).

[L2] A subset of $\mathbb R^n$ is compact exactly when it is closed and bounded, for $n\ge1$ ([[thm-heine-borel-rn]]).

[L3] A continuous real-valued function on a nonempty compact metric space has a maximum and a minimum ([[thm-extreme-value-metric]]).

[L4] The Euclidean plane $\mathbb R^2$ is connected ([[cor-rn-is-polygonally-connected-and-locally-path-connected]]).

## Proof

**Proof technique:** direct.

1.1 Choose $c\in\mathbb C$ and $R>0$ with $\Omega\subseteq B(c,R)$, using boundedness ([[def-metric-bounded-diameter]], [[def-metric-ball]]). The closure is closed by [[thm-metric-closure-characterisation]] and is nonempty since it contains $\Omega$. If $|x-c|>R$, the ball of radius $(|x-c|-R)/2$ around $x$ misses $\Omega$: the reverse triangle inequality ([[lem-metric-reverse-triangle]]) gives $|y-c|>R$ for its points. Thus every closure point has $|x-c|\le R$, and the closure lies in $B(c,R+1)$. The coordinate theorem transfers closedness and boundedness to $\mathbb R^2$, so [L2] gives compactness there and transport gives compactness back. The modulus laws of [[lem-complex-conjugation-and-modulus-laws]] give $||u|-|v||\le|u-v|$; together with continuity of $f$ in [[def-metric-continuity]] they show $|f|$ is continuous. By [L3] it has a maximizer $z_0\in\overline\Omega$. [given, L2, L3, choose, algebra]

2.1 If $z_0\in\Omega$, then $|f|$ has an interior local maximum, and [L1] makes $f$ constant on $\Omega$. [step 1.1, L1]

3.1 If $z_0\notin\Omega$, then $z_0\in\partial\Omega$ because $\Omega$ is open. Otherwise step 2.1 gives $f=c_0$ on $\Omega$. For $x\in\overline\Omega$ and any $\varepsilon>0$, continuity gives a ball in the restricted closure on which $|f(y)-f(x)|<\varepsilon$; adherence gives $y\in\Omega$ in that ball, so $|c_0-f(x)|<\varepsilon$ and $f(x)=c_0$. Finally the boundary is nonempty. If empty, openness and $\partial\Omega=\overline\Omega\setminus\Omega$ give $\Omega=\overline\Omega$, a nonempty clopen set. Connectedness of the plane, transferred from [L4], implies $\Omega=\mathbb C$. But for every ball $B(c,R)$, [[cor-archimedean-reciprocal]] supplies a positive natural $n>R+|c|$, and $|n-c|\ge n-|c|>R$; hence the plane is unbounded. This contradicts boundedness. Any boundary point therefore has modulus equal to the maximum in the constant branch. [given, step 1.1, step 2.1, L4, choose, algebra]

4.1 In either branch, a point of $\partial\Omega$ carries the global maximum of $|f|$ on $\overline\Omega$. [step 3.1] ∎
