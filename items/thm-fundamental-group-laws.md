---
id: thm-fundamental-group-laws
kind: theorem
title: "Loop classes form the group $\\pi_1(X,x_0)$ under concatenation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-based-loops-and-fundamental-group, def-path-connected,
       def-homotopy-relative-and-path-homotopy,
       lem-continuity-is-local-and-pastes, thm-product-universal-property,
       thm-algebra-of-continuous-functions,
       lem-straight-line-homotopies-are-continuous, def-group]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Chapter 1, Proposition 1.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Statement

For every pointed topological space $(X,x_0)$, the product

$$[\alpha][\beta]=[\alpha*\beta]$$

is well defined and makes $\pi_1(X,x_0)$ a group. Its identity is the class of
the constant loop $c_{x_0}$, and $[\alpha]^{-1}=[\bar\alpha]$.

## Facts & Assumptions

**Given:** A topological space $X$, a basepoint $x_0\in X$, and based loops at $x_0$.

[L1] The loop-class set, concatenation order, constant loop and reversed loop are those of [[def-based-loops-and-fundamental-group]].

[L2] Affine real coordinate maps are continuous, and finitely many continuous
pieces agreeing on closed seams paste; hence the piecewise-affine
reparametrisations used below are continuous. Reversal and constant paths are
continuous ([[thm-algebra-of-continuous-functions]],
[[lem-continuity-is-local-and-pastes]], [[def-path-connected]]).

[L3] A path homotopy is a continuous map $I\times I\to X$ that fixes both path endpoints throughout the homotopy ([[def-homotopy-relative-and-path-homotopy]]).

[L4] Maps into products are continuous exactly when their components are
continuous, and composites of continuous maps are continuous
([[thm-product-universal-property]],
[[lem-continuity-is-local-and-pastes]], claim 1).

[L5] For continuous maps into the convex line $\mathbb R$, the straight-line
formula is a continuous homotopy
([[lem-straight-line-homotopies-are-continuous]]).

[L6] Continuous maps defined on finitely many closed sets and agreeing on overlaps paste to a continuous map ([[lem-continuity-is-local-and-pastes]], claim 3).

[L7] A group operation is associative, has a two-sided identity and gives every element a two-sided inverse ([[def-group]]).

## Proof

**Proof technique:** direct.

1.1 If $A$ is an endpoint-fixed homotopy from $\alpha_0$ to $\alpha_1$ and $B$ one from $\beta_0$ to $\beta_1$, define $K(s,t)=A(2s,t)$ for $s\leq\tfrac12$ and $K(s,t)=B(2s-1,t)$ for $s\geq\tfrac12$; the clauses agree because $A(1,t)=x_0=B(0,t)$, and [L2], [L4], and [L6] make $K$ continuous, so $\alpha_0*\beta_0$ and $\alpha_1*\beta_1$ are endpoint-homotopic. Thus the proposed product is independent of representatives. [L1, L2, L3, L4, L6]

1.2 If $\phi:I\to I$ is continuous with $\phi(0)=0$ and $\phi(1)=1$, then [L5] makes $(s,t)\mapsto(1-t)s+t\phi(s)$ continuous. Composing with $\alpha$ by [L4] gives a continuous $H(s,t):=\alpha((1-t)s+t\phi(s))$; it takes values in $I$, fixes $s=0,1$, and joins $\alpha$ to $\alpha\circ\phi$. Hence endpoint-fixing reparametrisation preserves a path class. [L3, L4, L5]

1.3 The formula $H(s,t)=\alpha(2s(1-t))$ for $s\leq\tfrac12$ and $H(s,t)=\alpha(2(1-s)(1-t))$ for $s\geq\tfrac12$ is continuous by [L2], [L4], and [L6], fixes both endpoints at $x_0$, starts at $\alpha*\bar\alpha$, and ends at $c_{x_0}$; applying the same construction to $\bar\alpha$ contracts $\bar\alpha*\alpha$. [L1, L2, L3, L4, L6]

2.1 Put $w:=(\alpha*\beta)*\gamma$ and define $\phi(s)=s/2$ for $0\leq s\leq\tfrac12$, $\phi(s)=s-\tfrac14$ for $\tfrac12\leq s\leq\tfrac34$, and $\phi(s)=2s-1$ for $\tfrac34\leq s\leq1$; [L2] makes this continuous, the clauses agree at the seams, $\phi$ fixes $0,1$, and direct substitution gives $w\circ\phi=\alpha*(\beta*\gamma)$, so step 1.2 proves associativity on classes. [step 1.2, L1, L2]

2.2 For $\phi_R(s)=\min\{2s,1\}$ one has $\alpha\circ\phi_R=\alpha*c_{x_0}$, and for $\phi_L(s)=\max\{2s-1,0\}$ one has $\alpha\circ\phi_L=c_{x_0}*\alpha$; these continuous endpoint-fixing maps and step 1.2 show that $[c_{x_0}]$ is a two-sided identity. [step 1.2, L1, L2]

3.1 Step 1.1 gives a well-defined operation, step 2.1 gives associativity, step 2.2 gives the identity, and step 1.3 gives the two-sided inverse $[\bar\alpha]$; these are exactly the axioms in [L7], so $\pi_1(X,x_0)$ is a group. [step 1.1, step 1.3, step 2.1, step 2.2, L7] ∎
