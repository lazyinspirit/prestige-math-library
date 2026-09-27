---
id: lem-path-conjugation-isomorphism-of-fundamental-groups
kind: lemma
title: "Conjugating loop classes by a path is an isomorphism of fundamental groups"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-based-loops-and-fundamental-group, thm-fundamental-group-laws,
       def-path-connected, def-homotopy-relative-and-path-homotopy,
       cor-homotopy-relative-and-path-homotopy-are-equivalence-relations,
       lem-continuity-is-local-and-pastes, def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, section 1.1, printed p. 28, Proposition 1.5"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Statement

Let $X$ be a topological space, let $x_0,x_1\in X$ and let $c:I\to X$ be a path
in $X$ from $x_0$ to $x_1$ ([[def-path-connected]]). Write $\bar c(s):=c(1-s)$
for the reversed path and let $*$ denote the first-then-second concatenation of
composable paths of [[def-path-connected]], so that for every based loop
$\alpha:I\to X$ at $x_0$ ([[def-based-loops-and-fundamental-group]]) the
concatenation $\bar c*\alpha*c$ is a loop at $x_1$; the bracketing of that
triple product is immaterial up to path homotopy rel endpoints by step 1.2
below, and the bracket $(\bar c*\alpha)*c$ is used throughout. Then:

1. The assignment
$$\varphi_c:\pi_1(X,x_0)\longrightarrow\pi_1(X,x_1),\qquad \varphi_c([\alpha]):=[(\bar c*\alpha)*c],$$
is well defined: if $\alpha\simeq\alpha'$ rel endpoints
([[def-homotopy-relative-and-path-homotopy]]), then
$(\bar c*\alpha)*c\simeq(\bar c*\alpha')*c$ rel endpoints.
2. $\varphi_c$ is a group isomorphism
([[def-group-isomorphism-and-automorphism]]), and its two-sided inverse is
$$\varphi_{\bar c}:\pi_1(X,x_1)\longrightarrow\pi_1(X,x_0),\qquad \varphi_{\bar c}([\beta]):=[(c*\beta)*\bar c].$$

Consequently $\pi_1(X,x_0)\cong\pi_1(X,x_1)$ whenever a path from $x_0$ to
$x_1$ exists, that is, whenever $x_0$ and $x_1$ lie in the same path component
of $X$; the isomorphism depends on the chosen path, and no claim is made that
it is independent of that choice.

## Facts & Assumptions

**Given:** A topological space $X$, points $x_0,x_1\in X$ and a path $c:I\to X$ from $x_0$ to $x_1$.

[F1] A path in $X$ from $x$ to $y$ is a continuous map $\gamma:I\to X$ with $\gamma(0)=x$ and $\gamma(1)=y$; its reversal is $\bar\gamma(t)=\gamma(1-t)$ and joins $y$ to $x$; composable paths concatenate by traversing each at double speed, and the constant path at a point $x$ is continuous ([[def-path-connected]]).

[F2] Based loops at $x_0$ are paths $\alpha:I\to X$ with $\alpha(0)=x_0=\alpha(1)$, and $\pi_1(X,x_0)$ is their set of path-homotopy classes rel endpoints; the product $[\alpha][\beta]=[\alpha*\beta]$ traverses $\alpha$ first and $\beta$ second, is well defined, and makes $\pi_1(X,x_0)$ a group whose identity is the class of the constant loop $c_{x_0}$ and in which $[\alpha]^{-1}=[\bar\alpha]$ ([[def-based-loops-and-fundamental-group]], [[thm-fundamental-group-laws]]).

[L3] A path homotopy relative to the endpoints from $\alpha$ to $\alpha'$ is a continuous $H:I\times I\to X$ with $H(s,0)=\alpha(s)$, $H(s,1)=\alpha'(s)$, $H(0,t)=\alpha(0)$ and $H(1,t)=\alpha(1)$, and this relation is an equivalence relation on paths with fixed endpoints ([[def-homotopy-relative-and-path-homotopy]], [[cor-homotopy-relative-and-path-homotopy-are-equivalence-relations]]).

[L4] A map is continuous when its restrictions to the members of a finite closed cover are continuous and agree on overlaps; composites and restrictions of continuous maps are continuous ([[lem-continuity-is-local-and-pastes]]).

[L5] A bijective group homomorphism is a group isomorphism ([[def-group-isomorphism-and-automorphism]]).



## Proof

**Proof technique:** direct.

1.1 *Concatenation respects path homotopy rel endpoints.* Let $\alpha\simeq\alpha'$ rel endpoints by $H$ and $\beta\simeq\beta'$ rel endpoints by $K$, where $\alpha(1)=\beta(0)$ and $\alpha'(1)=\beta'(0)$ so that both concatenations are defined. Put $G(s,t):=H(2s,t)$ for $0\le s\le\tfrac12$ and $G(s,t):=K(2s-1,t)$ for $\tfrac12\le s\le1$. At $s=\tfrac12$ the two formulas give $H(1,t)=\alpha(1)$ and $K(0,t)=\beta(0)$ by the rel-endpoints condition, and these agree because the middle endpoints agree; hence $G$ is a well-defined function on $I\times I$. The two closed sets $[0,\tfrac12]\times I$ and $[\tfrac12,1]\times I$ cover $I\times I$, and on each of them $G$ is a composite of $H$ or $K$ with the continuous affine map $(s,t)\mapsto(2s,t)$ or $(s,t)\mapsto(2s-1,t)$, so [L4] makes $G$ continuous. Finally $G(s,0)=\alpha*\beta(s)$, $G(s,1)=\alpha'*\beta'(s)$, $G(0,t)=\alpha(0)=\alpha'(0)$ and $G(1,t)=\beta(1)=\beta'(1)$, so $G$ is a path homotopy $\alpha*\beta\simeq\alpha'*\beta'$ rel endpoints. A constant homotopy on one factor is the case $\beta=\beta'$, $K(s,t):=\beta(s)$, so the same statement applies when only one of the two factors is deformed. [F1, L3, L4]

1.2 *Reparametrisation does not change the class.* Let $\lambda:I\to X$ be a path and let $\varphi:I\to I$ be continuous with $\varphi(0)=0$ and $\varphi(1)=1$. Then $H(s,t):=\lambda\bigl((1-t)\varphi(s)+ts\bigr)$ is continuous because the argument is obtained from the continuous maps $s\mapsto\varphi(s)$, $s\mapsto s$ and $t\mapsto t$ by products, sums and the continuous inclusion of $I$ in $\mathbb R$, and it satisfies $H(s,0)=\lambda(\varphi(s))$, $H(s,1)=\lambda(s)$, $H(0,t)=\lambda(0)$ and $H(1,t)=\lambda(1)$: the last two because $\varphi(0)=0$ and $\varphi(1)=1$. So $\lambda\circ\varphi\simeq\lambda$ rel endpoints. Consequently the two bracketings of a triple concatenation of composable paths are reparametrisations of one another, so they are path-homotopic rel endpoints, and for a path $\lambda$ from $x$ to $y$ the concatenations $\lambda*c_y$ and $c_x*\lambda$ with the constant paths at the endpoints are reparametrisations of $\lambda$, so both are path-homotopic to $\lambda$ rel endpoints. Hence constant factors may be inserted and deleted inside a larger concatenation up to path homotopy rel endpoints. [F1, L3, L4]

1.3 *A path cancels its reversal.* Let $\lambda:I\to X$ be a path from $x$ to $y$ and put $H(s,t):=\lambda(2s(1-t))$ for $0\le s\le\tfrac12$ and $H(s,t):=\lambda(2(1-s)(1-t))$ for $\tfrac12\le s\le1$. At $s=\tfrac12$ both formulas give $\lambda(1-t)$, and the two closed pieces cover $I\times I$, so [L4] makes $H$ continuous. One has $H(s,0)=\lambda*\bar\lambda(s)$, $H(s,1)=\lambda(0)=x$, and $H(0,t)=\lambda(0)=x=H(1,t)$, so $H$ is a path homotopy $\lambda*\bar\lambda\simeq c_x$ rel endpoints, where $c_x$ is the constant path at the initial point. Applying the same statement to the reversed path $\bar\lambda$, whose reversal is $\lambda$, gives $\bar\lambda*\lambda\simeq c_y$ rel endpoints. [F1, L3, L4]

2.1 *Well-definedness of $\varphi_c$.* By [F1] the path $\bar c$ joins $x_1$ to $x_0$ and the concatenation $(\bar c*\alpha)*c$ is a loop at $x_1$ for every based loop $\alpha$ at $x_0$, so the formula of the statement defines a function on the set of based loops. Let $\alpha\simeq\alpha'$ rel endpoints. Step 1.1 applied to the pair $\alpha\simeq\alpha'$ and the constant homotopy of $\bar c$ gives $\bar c*\alpha\simeq\bar c*\alpha'$ rel endpoints, and step 1.1 applied again to that homotopy and the constant homotopy of $c$ gives $(\bar c*\alpha)*c\simeq(\bar c*\alpha')*c$ rel endpoints. Both are loops at $x_1$, so their classes in $\pi_1(X,x_1)$ coincide by [F2], and $\varphi_c$ is independent of the representative of $[\alpha]$. [step 1.1, F1, F2, L3]

2.2 *$\varphi_c$ is a homomorphism.* Let $\alpha,\beta$ be based loops at $x_0$. Then, using the product formula of [F2] and the bracketing freedom of step 1.2,
$$\varphi_c([\alpha])\varphi_c([\beta])=[(\bar c*\alpha*c)*(\bar c*\beta*c)]\simeq[(\bar c*\alpha)*(c*\bar c)*(\beta*c)]\simeq[(\bar c*\alpha)*(\beta*c)]\simeq[\bar c*(\alpha*\beta)*c]=\varphi_c([\alpha][\beta]),$$
where the second reduction replaces the loop $c*\bar c$ at $x_0$ by a constant path using step 1.3 and deletes that constant factor using step 1.2, and where each replacement is licensed inside the ambient concatenation by step 1.1. Hence $\varphi_c$ is a group homomorphism. [step 1.1, step 1.2, step 1.3, F2]

3.1 *$\varphi_{\bar c}$ is a two-sided inverse.* The assignment $\varphi_{\bar c}([\beta]):=[(c*\beta)*\bar c]$ is well defined by the argument of step 2.1 with $c$ replaced by $\bar c$, and it maps $\pi_1(X,x_1)$ to $\pi_1(X,x_0)$. For a based loop $\alpha$ at $x_0$ one has $\varphi_{\bar c}(\varphi_c([\alpha]))=[c*((\bar c*\alpha)*c)*\bar c]$; reassociating by step 1.2 and applying step 1.1 to insert the pairs, this class equals $[(c*\bar c)*\alpha*(c*\bar c)]$, and since $c*\bar c$ is homotopic to the constant path at $x_0$ by step 1.3, deleting both constant factors with step 1.2 gives $[\alpha]$. Symmetrically, for a based loop $\beta$ at $x_1$ one has $\varphi_c(\varphi_{\bar c}([\beta]))=[\bar c*((c*\beta)*\bar c)*c]\simeq[(\bar c*c)*\beta*(\bar c*c)]=[\beta]$ by the same two steps, because $\bar c*c$ is homotopic to the constant path at $x_1$ by step 1.3. So the two composites are the identities. [step 1.1, step 1.2, step 1.3, step 2.1, F2]

4.1 *Conclusion.* Steps 2.1, 2.2 and 3.1 exhibit $\varphi_c$ as a well-defined group homomorphism with a two-sided inverse, hence a bijection, and [L5] makes it a group isomorphism. The final assertion follows because a path from $x_0$ to $x_1$ exists exactly when the two points lie in the same path component of $X$ by [F1]. [step 2.1, step 2.2, step 3.1, F1, L5] ∎
