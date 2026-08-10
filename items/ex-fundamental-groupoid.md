---
id: ex-fundamental-groupoid
kind: example
title: "The fundamental groupoid of a topological space"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-category, def-isomorphism-groupoid-and-connected-category, def-path-connected, def-homotopy-relative-and-path-homotopy, cor-homotopy-relative-and-path-homotopy-are-equivalence-relations, lem-continuity-is-local-and-pastes, def-based-loops-and-fundamental-group, thm-fundamental-group-laws]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Example 1.1.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Example

For a topological space $X$, paths modulo endpoint-preserving homotopy form a
groupoid $\Pi_1(X)$ with
$[\beta]\circ[\alpha]=[\alpha*\beta]$ and
$[\alpha]^{-1}=[\bar\alpha]$. With this library's traversal-order
multiplication on fundamental groups,
$\operatorname{Aut}_{\Pi_1(X)}(x)$ is the opposite group of $\pi_1(X,x)$ and is
canonically isomorphic to $\pi_1(X,x)$ by path reversal.

## Facts & Assumptions

**Given:** A topological space $X$.

[L1] Endpoint-preserving path homotopy is defined in [[def-homotopy-relative-and-path-homotopy]] and is an equivalence relation for each fixed pair of endpoints ([[cor-homotopy-relative-and-path-homotopy-are-equivalence-relations]]).

[L2] Paths and their elementary concatenation and reversal constructions are given in [[def-path-connected]], while continuous maps compose and maps continuous on a finite closed cover paste continuously ([[lem-continuity-is-local-and-pastes]]).

[L3] Categories and groupoids have identity, associative composition, and invertible arrows ([[def-category]], [[def-isomorphism-groupoid-and-connected-category]]). For an object $x$, multiplication in its automorphism group is categorical composition: $vu:=v\circ u$.

[L4] The traversal-order fundamental-group product is $[\alpha][\beta]=[\alpha*\beta]$, with inversion induced by path reversal ([[def-based-loops-and-fundamental-group]], [[thm-fundamental-group-laws]]).

## Verification

**Proof technique:** direct.

1.1 Take the points of $X$ as objects and define $\operatorname{Hom}(x,y)$ to be the endpoint-preserving homotopy classes of paths from $x$ to $y$. For $\alpha:x\to y$ and $\beta:y\to z$, put $[\beta]\circ[\alpha]=[\alpha*\beta]$, and take the constant path at $x$ as $1_x$. [L1, L2]

2.1 If $H$ deforms $\alpha$ to $\alpha'$ and $K$ deforms $\beta$ to $\beta'$ rel endpoints, paste $H(2s,t)$ for $s\le1/2$ to $K(2s-1,t)$ for $s\ge1/2$. The endpoint conditions agree along the seam, so the finite closed-pasting argument in [L2] gives an endpoint-preserving homotopy $\alpha*\beta\simeq\alpha'*\beta'$. Thus composition is well defined on classes. [step 1.1, L1, L2]

2.2 Composing a path $\alpha$ with the straight-line homotopies from $s$ to $\max(0,2s-1)$ and to $\min(2s,1)$ proves the left and right identity laws. If $r(s)=2s$ for $s\le1/2$ and $r(s)=2-2s$ for $s\ge1/2$, then $\alpha((1-t)r(s))$ contracts $\alpha*\bar\alpha$ rel endpoints; the analogous formula $\alpha(t+(1-t)(1-r(s)))$ contracts $\bar\alpha*\alpha$. Hence reversal supplies a two-sided inverse class. [step 1.1, L1, L2, algebra]

3.1 For three composable paths, let $\delta:[0,3]\to X$ traverse them successively. The two bracketings are $\delta\circ p$ and $\delta\circ q$, where $p(s)=4s$ for $s\le1/2$ and $p(s)=2s+1$ for $s\ge1/2$, while $q(s)=2s$ for $s\le1/2$ and $q(s)=4s-1$ for $s\ge1/2$. The formula $\delta((1-t)p(s)+tq(s))$ is an endpoint-preserving homotopy, so composition is associative on classes. [step 1.1, step 2.1, L1, L2, algebra]

4.1 Steps 2.1, 3.1, and 2.2 make $\Pi_1(X)$ a groupoid. Its automorphisms at $x$ are the based-loop classes, but $[\beta]\circ[\alpha]=[\alpha*\beta]=[\alpha][\beta]$ in the traversal-order product of [L4]. Thus the identity on loop classes identifies $\operatorname{Aut}_{\Pi_1(X)}(x)$ with $\pi_1(X,x)^{\mathrm{op}}$. The inversion map $[\alpha]\mapsto[\bar\alpha]$ is therefore a canonical group isomorphism $\operatorname{Aut}_{\Pi_1(X)}(x)\cong\pi_1(X,x)$. [step 2.1, step 3.1, step 2.2, L3, L4, algebra] ∎
