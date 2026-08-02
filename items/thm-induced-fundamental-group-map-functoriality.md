---
id: thm-induced-fundamental-group-map-functoriality
kind: theorem
title: "Induced fundamental-group maps are well defined, functorial and invariant under based homotopy"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-induced-homomorphism-on-fundamental-groups,
       def-based-loops-and-fundamental-group,
       thm-composition-respects-homotopy, thm-fundamental-group-laws,
       def-group-homomorphism]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Chapter 1, Induced Homomorphisms"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Statement

Let $f:(X,x_0)\to(Y,y_0)$ be a continuous map with $f(x_0)=y_0$. Then

$$f_*([\alpha])=[f\circ\alpha]$$

is a well-defined group homomorphism. For pointed continuous maps,

$$\operatorname{id}_*=\operatorname{id},\qquad (g\circ f)_*=g_*\circ f_*.$$

If $f_0,f_1:(X,x_0)\to(Y,y_0)$ are homotopic through a homotopy that keeps
$x_0$ at $y_0$, then $(f_0)_*=(f_1)_*$.

## Facts & Assumptions

**Given:** Pointed continuous maps between pointed topological spaces and based loops in their domains.

[L1] The proposed induced map sends $[\alpha]$ to $[f\circ\alpha]$ ([[def-induced-homomorphism-on-fundamental-groups]]).

[L2] Postcomposition preserves homotopies, and precomposition preserves a homotopy relative to a subspace whose image lies in the fixed subspace ([[thm-composition-respects-homotopy]]).

[L3] Loop multiplication traverses the first loop and then the second, using the explicit two-piece concatenation formula ([[def-based-loops-and-fundamental-group]]).

[L4] A map between groups is a group homomorphism exactly when it preserves
products, and the loop-class operations in question are groups
([[def-group-homomorphism]], [[thm-fundamental-group-laws]]).

## Proof

**Proof technique:** direct.

1.1 If $\alpha_0$ and $\alpha_1$ are endpoint-homotopic, postcomposing their homotopy by $f$ gives an endpoint-homotopy from $f\circ\alpha_0$ to $f\circ\alpha_1$ by [L2]; hence the formula in [L1] is independent of the representative. [L1, L2]

1.2 The concatenation formulas give the literal equality $f\circ(\alpha*\beta)=(f\circ\alpha)*(f\circ\beta)$, so $f_*([\alpha][\beta])=f_*([\alpha])f_*([\beta])$; thus $f_*$ is a group homomorphism. [L1, L3, L4]

1.3 For every loop $\alpha$, $\operatorname{id}\circ\alpha=\alpha$ and $(g\circ f)\circ\alpha=g\circ(f\circ\alpha)$, which proves the identity and composition formulas on every loop class. [L1]

1.4 If $H$ is a homotopy from $f_0$ to $f_1$ fixing $x_0$, precomposition by a based loop $\alpha$ gives an endpoint-fixed path homotopy from $f_0\circ\alpha$ to $f_1\circ\alpha$ by [L2], so $(f_0)_*([\alpha])=(f_1)_*([\alpha])$. [L1, L2]

2.1 Steps 1.1--1.4 prove well-definedness, the homomorphism law, functoriality and based-homotopy invariance. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
