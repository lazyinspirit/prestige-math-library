---
id: thm-yarotsky-approximation-lower-bounds
kind: theorem
title: "Approximation lower bounds under distinct selection assumptions"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [def-relu-network, lem-univariate-relu-affine-interval-count, def-sobolev-space-wkp-and-its-norm, thm-w-one-infinity-functions-have-lipschitz-representatives, def-axiom-of-choice, thm-sobolev-continuous-nonlinear-width-lower-bound, thm-borsuk-ulam-general, thm-borsuk-ulam-in-dimension-two, thm-warren-polynomial-sign-pattern-bound, lem-relu-network-vc-dimension-bound, def-countable-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Dmitry Yarotsky, Error bounds for approximations with deep ReLU networks, Theorems 3, 4, and 6 and complete proofs"
      url: "https://arxiv.org/pdf/1610.01145"
      locator: "§§4.1–4.2 and 4.4, printed pp. 19–27."
    - title: "Ronald DeVore, Ralph Howard, and Charles Micchelli, Optimal nonlinear approximation, Theorems 3.1 and 4.2 and proofs"
      url: "https://gwern.net/doc/cs/algorithm/1989-devore.pdf"
      locator: "Theorem 3.1 proof (continuous nonlinear widths) and Theorem 4.2 Sobolev bump construction, pp. 472–477."
    - title: "Michael J. Sullivan, Deep Learning Theory, §§5.3 and 17.3"
      url: "https://mjt.cs.illinois.edu/dlt/index.html"
      locator: "§5.3, lower-bound context; §17.3, ReLU VC argument and explicit Warren-theorem citation."
---

## Statement

Assume the Axiom of Choice. Let $F_{d,n}$ be the unit ball of $W^{n,\infty}((0,1)^d)$ for the maximum weak-derivative norm, identified with its continuous representatives on $[0,1]^d$. The following lower bounds have distinct hypotheses. (i) Let $W\ge1$, let $\eta:\mathbb R^W\to C([0,1]^d)$ be an approximation map, and suppose a parameter-selection map $M:F_{d,n}\to\mathbb R^W$, continuous for the uniform norm on $F_{d,n}$, satisfies $\|f-\eta(M(f))\|_\infty\le\varepsilon$ for every $f\in F_{d,n}$. Then $W\ge c\varepsilon^{-d/n}$. (ii) If one fixed ReLU architecture with $W$ weights approximates every $f\in F_{d,n}$ within $\varepsilon$, with no continuity assumption on weight selection, then $W\ge c\varepsilon^{-d/(2n)}$; if its depth is at most $c_1(\log(1/\varepsilon))^p$ for fixed $p\ge0$ and $c_1>0$, then $W\ge c_2\varepsilon^{-d/n}(\log(1/\varepsilon))^{-2p-1}$ for sufficiently small $\varepsilon$. (iii) If $L\ge3$ is fixed and $f\in C^2([0,1]^d)$ is nonlinear, then every depth-$L$ ReLU network approximating $f$ uniformly within $\varepsilon$ has at least $c(f,L)\varepsilon^{-1/(2(L-2))}$ weights and computation units for sufficiently small $\varepsilon$. All constants may depend only on the indicated fixed parameters.

## Statement references

[Yarotsky, Theorems 3, 4, and 6: approximation lower bounds](https://arxiv.org/pdf/1610.01145)

[DeVore, Howard, and Micchelli, Theorems 3.1 and 4.2: continuous nonlinear widths and Sobolev bump spaces](https://gwern.net/doc/cs/algorithm/1989-devore.pdf)

[Sullivan, §§5.3 and 17.3: lower-bound context and VC dimension](https://mjt.cs.illinois.edu/dlt/index.html)

## Facts & Assumptions

**Given:** The Axiom of Choice, integers $d,n\ge1$, the class $F_{d,n}$, the parameter-selection hypotheses for clauses (i)–(ii), and the depth and smoothness hypotheses for clause (iii).

[F1] A scalar-input ReLU network with hidden widths $n_1,\ldots,n_H$ has at most $\prod_{\ell=1}^H(n_\ell+1)$ affine intervals ([[lem-univariate-relu-affine-interval-count]]).

## Proof

1.1 Since $f$ is nonlinear, its Hessian is nonzero at some interior point; otherwise all first derivatives are constant on the connected cube and $f$ is affine. Because the Hessian is symmetric, choose a direction $v$ with nonzero second directional derivative there. By continuity, after restricting to a sufficiently short line segment inside the cube and reparameterizing it by $t\in[0,1]$, the function $g(t)=f(x_0+tv)$ satisfies either $g''(t)\ge c_0>0$ throughout or $g''(t)\le-c_0<0$. Any network approximating $f$ within $\varepsilon$ restricts to a univariate network of the same depth and no more units. [given, choose, construct]

2.1 Let $U$ be its number of hidden units and $H=L-2$. By [F1] and AM–GM, the restricted network has at most $M\le\prod_{\ell=1}^{H}(n_\ell+1)\le(1+U/H)^H$ affine intervals. [F1, step 1.1, algebra]

3.1 One of these intervals has length $h\ge1/M$. On it the network output $q$ is affine. If $g''\ge c_0$, then $g(a)+g(b)-2g((a+b)/2)\ge c_0h^2/4$; if $g''\le-c_0$, the negative of this second difference has the same lower bound. Since the second difference of $q$ is zero and each of the three approximation errors is at most $\varepsilon$, its magnitude for $g$ is at most $4\varepsilon$. Thus $\varepsilon\ge c_0h^2/16\ge c_0/(16M^2)$. Combining with step 2.1 yields $U\ge c(f,L)\varepsilon^{-1/(2H)}$ for sufficiently small $\varepsilon$. Each hidden unit has a bias parameter, so the number of weights is at least $U$ as well. This proves clause (iii). [step 2.1, algebra] ∎



## Unresolved proof obligations

Clauses (i)–(ii) remain stated at full strength and are not marked ready. The continuous-selection branch needs the general Sobolev nonlinear-width lower bound thm-sobolev-continuous-nonlinear-width-lower-bound in approximation theory; its proof requires general Borsuk–Ulam for spheres S^W to R^W. The existing [[thm-borsuk-ulam-in-dimension-two]] proves only the case S^2 to R^2 and does not discharge that hypothesis. The arbitrary-selection branches need a complete Warren polynomial sign-pattern theorem and a local derivation of the ReLU VC bounds $\operatorname{VC}\le C W^2$ and $\operatorname{VC}\le C L^2 W\log W$. The unresolved supplier IDs are thm-borsuk-ulam-general, thm-sobolev-continuous-nonlinear-width-lower-bound, thm-warren-polynomial-sign-pattern-bound, and lem-relu-network-vc-dimension-bound. The fixed-depth curvature clause is proved above.
