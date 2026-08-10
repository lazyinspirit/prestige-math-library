---
id: ex-change-of-basepoint-isomorphism-for-fundamental-groups
kind: example
title: "A path between basepoints induces an isomorphism of fundamental groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-based-loops-and-fundamental-group, thm-fundamental-group-laws, def-path-connected, def-homotopy-relative-and-path-homotopy, cor-homotopy-relative-and-path-homotopy-are-equivalence-relations, lem-continuity-is-local-and-pastes, def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Chapter 1"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Example

If a path $\gamma$ joins $x_0$ to $x_1$, conjugating loops by $\gamma$
gives an isomorphism $\pi_1(X,x_0)\cong\pi_1(X,x_1)$.

## Facts & Assumptions

**Given:** A space $X$ and a path $\gamma:x_0\to x_1$.

[L1] Loop classes at a basepoint multiply by concatenation in traversal order, $[\alpha][\beta]=[\alpha*\beta]$, and form a group with identity the class of the constant loop and $[\alpha]^{-1}=[\bar\alpha]$ ([[def-based-loops-and-fundamental-group]], [[thm-fundamental-group-laws]]).

[L2] A path in $X$ from $x$ to $y$ is a continuous $\gamma:I\to X$ with $\gamma(0)=x$ and $\gamma(1)=y$; its reversal is $\bar\gamma(t)=\gamma(1-t)$, and paths with matching endpoints concatenate by traversing each at double speed ([[def-path-connected]]).

[L3] A path homotopy relative to the endpoints between paths $\alpha,\beta$ with the same initial and terminal points is a continuous $H:I\times I\to X$ with $H(s,0)=\alpha(s)$, $H(s,1)=\beta(s)$, $H(0,t)=\alpha(0)$ and $H(1,t)=\alpha(1)$ ([[def-homotopy-relative-and-path-homotopy]]); this relation is an equivalence relation ([[cor-homotopy-relative-and-path-homotopy-are-equivalence-relations]]).

[L4] A map is continuous when its restrictions to the members of a finite closed cover are continuous and agree on overlaps ([[lem-continuity-is-local-and-pastes]]).

[L5] A bijective group homomorphism is a group isomorphism ([[def-group-isomorphism-and-automorphism]]).

## Verification

**Proof technique:** direct.

1.1 *Concatenation respects path homotopy.* Let $\alpha\simeq\alpha'$ rel endpoints by $H$, and let $\beta\simeq\beta'$ rel endpoints by $K$, with the terminal point of $\alpha$ equal to the initial point of $\beta$. Setting $G(s,t)=H(2s,t)$ for $s\le\tfrac12$ and $G(s,t)=K(2s-1,t)$ for $s\ge\tfrac12$ gives a map on the two closed sets $[0,\tfrac12]\times I$ and $[\tfrac12,1]\times I$, which cover $I\times I$ and meet where $H(1,t)$ and $K(0,t)$ are both the shared endpoint. Each piece is a composite of $H$ or $K$ with an affine map of $I\times I$, so [L4] makes $G$ continuous, and it is a path homotopy $\alpha*\beta\simeq\alpha'*\beta'$ rel endpoints. [L2, L3, L4]

1.2 *Reparametrisation does not change the class.* Let $\varphi:I\to I$ be continuous with $\varphi(0)=0$ and $\varphi(1)=1$, and let $\lambda$ be a path. Then $H(s,t)=\lambda\bigl((1-t)\varphi(s)+ts\bigr)$ is continuous, starts at $\lambda\circ\varphi$, ends at $\lambda$, and is constant at each endpoint, so $\lambda\circ\varphi\simeq\lambda$ rel endpoints. Both bracketings of a triple concatenation, and each concatenation of a path with a constant path at its own endpoint, differ from the path itself precisely by such a $\varphi$. Hence concatenation is associative and the constant paths act as identities, in both cases up to path homotopy rel endpoints. [L2, L3]

1.3 *A path cancels its reversal.* For a path $\lambda$ from $x$ to $y$, put $H(s,t)=\lambda(2s(1-t))$ for $s\le\tfrac12$ and $H(s,t)=\lambda(2(1-s)(1-t))$ for $s\ge\tfrac12$. The two closed pieces agree at $s=\tfrac12$, where both give $\lambda(1-t)$, so [L4] makes $H$ continuous. At $t=0$ it is $\lambda*\bar\lambda$ and at $t=1$ it is the constant path at $x$, and $H(0,t)=H(1,t)=x$ throughout. Thus $\lambda*\bar\lambda\simeq c_x$ rel endpoints, and applying this to $\bar\lambda$ gives $\bar\lambda*\lambda\simeq c_y$. [L2, L3, L4]

2.1 Define $\gamma_\#:\pi_1(X,x_0)\to\pi_1(X,x_1)$ by $\gamma_\#([\alpha])=[\bar\gamma*\alpha*\gamma]$, bracketed as $(\bar\gamma*\alpha)*\gamma$. The path $\bar\gamma$ runs from $x_1$ to $x_0$ and $\gamma$ from $x_0$ to $x_1$, so this is a loop at $x_1$. If $\alpha\simeq\alpha'$ rel endpoints, step 1.1 applied twice gives $\bar\gamma*\alpha*\gamma\simeq\bar\gamma*\alpha'*\gamma$, so $\gamma_\#$ is independent of the representative. [step 1.1, L1, L2, L3]

3.1 *Homomorphism.* For loops $\alpha,\beta$ at $x_0$, reassociating by step 1.2 turns $(\bar\gamma*\alpha*\gamma)*(\bar\gamma*\beta*\gamma)$ into $\bar\gamma*\alpha*(\gamma*\bar\gamma)*\beta*\gamma$; step 1.3 replaces the middle $\gamma*\bar\gamma$ by the constant path at $x_0$, step 1.2 deletes that constant factor, and each replacement is licensed inside the larger concatenation by step 1.1. The result is $\bar\gamma*(\alpha*\beta)*\gamma$, so $\gamma_\#([\alpha])\gamma_\#([\beta])=\gamma_\#([\alpha][\beta])$ by [L1]. [step 1.1, step 1.2, step 1.3, step 2.1, L1]

3.2 *Two-sided inverse.* The same construction applied to $\bar\gamma$, whose reversal is $\gamma$, gives $\bar\gamma_\#:\pi_1(X,x_1)\to\pi_1(X,x_0)$. Composing, $\bar\gamma_\#(\gamma_\#([\alpha]))=[\gamma*(\bar\gamma*\alpha*\gamma)*\bar\gamma]$, and steps 1.2 and 1.3 reduce the two inserted pairs $\gamma*\bar\gamma$ and $\gamma*\bar\gamma$ to constant paths, leaving $[\alpha]$. The other composite is identical with the roles exchanged. [step 1.1, step 1.2, step 1.3, step 2.1]

4.1 Thus $\gamma_\#$ is a homomorphism with a two-sided inverse, hence bijective, and [L5] makes it a group isomorphism $\pi_1(X,x_0)\cong\pi_1(X,x_1)$. [step 3.1, step 3.2, L5] ∎
