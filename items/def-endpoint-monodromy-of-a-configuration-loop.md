---
id: def-endpoint-monodromy-of-a-configuration-loop
kind: definition
title: "Endpoint monodromy of an unordered configuration loop as a permutation of the labels"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-braid-group-from-unordered-configurations,
       def-pure-braid-group-from-ordered-configurations,
       thm-ordered-configurations-cover-unordered-configurations-regularly,
       lem-the-closed-disk-is-a-manifold-with-boundary,
       def-unordered-configuration-space, def-ordered-configuration-space,
       prop-the-symmetric-group-acts-freely-on-ordered-configurations,
       thm-path-lifting-for-covering-maps,
       cor-lifted-path-endpoints-depend-only-on-path-homotopy,
       def-monodromy-action-on-a-covering-fibre,
       def-based-loops-and-fundamental-group, thm-fundamental-group-laws,
       def-group-homomorphism, def-group,
       lem-disjoint-coordinate-neighborhoods-evenly-cover-unordered-configurations]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, sections 1.1-1.3 and 2.1, printed pp. 3-6, 11-13"
      url: "https://arxiv.org/pdf/1010.0321"
verification:
  audited: 2026-09-27
  precheck: pass
---

## Definition

Fix $n\in\mathbb N$ and the base configuration $q=(q_1,\dots,q_n)$ of pairwise
distinct points of $\operatorname{int}D^2$ used in
[[def-pure-braid-group-from-ordered-configurations]] and
[[def-braid-group-from-unordered-configurations]], and let
$$p:F_n(D^2)\longrightarrow C_n(D^2)$$
be the quotient map, which is an $n!$-sheeted covering with deck group $S_n$
acting by coordinate permutations
([[thm-ordered-configurations-cover-unordered-configurations-regularly]],
[[lem-disjoint-coordinate-neighborhoods-evenly-cover-unordered-configurations]]);
the theorem applies to $M=D^2$ because the closed disk is a nonempty connected
Hausdorff topological $2$-manifold with boundary
([[lem-the-closed-disk-is-a-manifold-with-boundary]]).

Now let $\alpha:I\to C_n(D^2)$ be a **based loop** at the orbit $[q]$, that is
$\alpha(0)=[q]=\alpha(1)$ ([[def-based-loops-and-fundamental-group]]). By the
path-lifting property of a covering ([[thm-path-lifting-for-covering-maps]])
there is a unique path
$$\widetilde\alpha:I\longrightarrow F_n(D^2),\qquad \widetilde\alpha(0)=q,\qquad p\circ\widetilde\alpha=\alpha .$$
Its endpoint $\widetilde\alpha(1)$ lies in the fibre $p^{-1}([q])$, which is
exactly the orbit $S_n\cdot q=\{\sigma\cdot q:\sigma\in S_n\}$
([[def-unordered-configuration-space]]); since the action is free, there is a
**unique** permutation $\sigma_\alpha\in S_n$ with
$$\widetilde\alpha(1)=\sigma_\alpha\cdot q .$$
The **endpoint monodromy** of $\alpha$ is
$$\pi([\alpha]):=\sigma_\alpha\in S_n .$$

**The label form and the inverse.** Equivalently, reading the endpoint tuple
position by position, define $e_\alpha\in S_n$ by
$$\widetilde\alpha(1)_i=q_{e_\alpha(i)}\qquad(1\le i\le n),$$
so that the point standing at position $i$ at the end of the lifted motion is
the one that carried label $e_\alpha(i)$ at the start. Comparing with the
coordinate formula $(\sigma\cdot q)_i=q_{\sigma^{-1}(i-1)+1}$ of
[[prop-the-symmetric-group-acts-freely-on-ordered-configurations]] gives
$$e_\alpha=\sigma_\alpha^{-1},\qquad\text{equivalently}\qquad \pi([\alpha])=e_\alpha^{-1}.$$
The naive endpoint record $e$ is an **antihomomorphism** for the library's
first-then-second loop product, $e_{\alpha\beta}=e_\beta\circ e_\alpha$, as
verified in step 3.1 below; the inversion in the definition of $\pi$ is exactly
what turns it into the group homomorphism that the next results need.

**Relation to the published monodromy action.** For the right action
$e\cdot[\alpha]$ of the fundamental group on the fibre recorded in
[[def-monodromy-action-on-a-covering-fibre]] one has $q\cdot[\alpha]=
\widetilde\alpha(1)=\sigma_\alpha\cdot q=\pi([\alpha])\cdot q$. Thus
$\pi([\alpha])$ is the unique permutation $\sigma$ satisfying
$q\cdot[\alpha]=\sigma\cdot q$: the endpoint monodromy is the published
covering monodromy, translated into the coordinate-permutation labels of
$F_n(D^2)$. The corresponding left-action element of
[[def-monodromy-action-on-a-covering-fibre]] is $[\alpha]\cdot q=
\pi([\alpha])^{-1}\cdot q$.

**Scope and trivial cases.** The map $\pi$ is the homomorphism
$$\pi:B_n^{\mathrm{conf}}=\pi_1\big(C_n(D^2),[q]\big)\longrightarrow S_n$$
whose image records the permutation of the labels effected by a loop; it is the
last arrow of the configuration braid short exact sequence proved in
[[thm-configuration-braid-pure-braid-short-exact-sequence]]. For $n\le1$ the
group $S_n$ is trivial, so $\pi$ is the trivial homomorphism; the case $n=0$
concerns the one-point space $C_0(D^2)$.

## Facts & Assumptions

**Given:** A natural number $n$, the base configuration $q\in F_n(\operatorname{int}D^2)$, the covering $p:F_n(D^2)\to C_n(D^2)$, and a based loop $\alpha:I\to C_n(D^2)$ at $[q]$.

[F1] Points of $F_n(X)$ are tuples $(x_1,\dots,x_n)$ of pairwise distinct points, with $F_0(X)$ a one-point space and labels identified with $n=\{0,\dots,n-1\}$ by $\kappa(i)=i-1$ ([[def-ordered-configuration-space]]).

[L2] $C_n(X)=F_n(X)/S_n$ with the quotient topology of $p$, which is a covering map here; two tuples have the same image exactly when they differ by a permutation of coordinates, and the fibre $p^{-1}([q])$ is the orbit $S_n\cdot q$ ([[def-unordered-configuration-space]], [[thm-ordered-configurations-cover-unordered-configurations-regularly]]). The closed disk $D^2\subseteq\mathbb C$ is nonempty, connected, Hausdorff and a topological $2$-manifold with boundary, so that theorem applies with $M=D^2$ and $d=2\ge2$, and $p:F_n(D^2)\to C_n(D^2)$ is an $n!$-sheeted covering whose deck group $S_n$ acts by coordinate permutations ([[lem-the-closed-disk-is-a-manifold-with-boundary]]).

[L3] The action $(\sigma\cdot x)_i=x_{\sigma^{-1}(i-1)+1}$ is a continuous, free left action of $S_n$ on $F_n(X)$, so $\widetilde\alpha(1)=\sigma\cdot q$ determines $\sigma$ uniquely and the action law $(\sigma\tau)\cdot x=\sigma\cdot(\tau\cdot x)$ holds ([[prop-the-symmetric-group-acts-freely-on-ordered-configurations]], [[def-group]]).

[L4] For a covering $p$ and a path $\alpha$ in the base there is a unique lift with a prescribed starting point, and the endpoints of lifts of path-homotopic paths with the same initial point coincide ([[thm-path-lifting-for-covering-maps]], [[cor-lifted-path-endpoints-depend-only-on-path-homotopy]]).

[L5] The monodromy $e\cdot[\alpha]$ is the endpoint of the unique lift of $\alpha$ beginning at $e$, and with the first-then-second product $[\alpha][\beta]=[\alpha*\beta]$ it is a right action, so $e\cdot([\alpha][\beta])=(e\cdot[\alpha])\cdot[\beta]$ ([[def-monodromy-action-on-a-covering-fibre]], [[def-based-loops-and-fundamental-group]]).

[L6] Loop classes at a point form a group under $[\alpha][\beta]=[\alpha*\beta]$ ([[thm-fundamental-group-laws]]), and a homomorphism of groups is a map preserving products ([[def-group-homomorphism]]).



## Proof

**Proof technique:** direct.

1.1 *The lift and its endpoint permutation.* By [L4] the lift $\widetilde\alpha$ with $\widetilde\alpha(0)=q$ exists and is unique. Its endpoint satisfies $p(\widetilde\alpha(1))=\alpha(1)=[q]$, so $\widetilde\alpha(1)\in p^{-1}([q])=S_n\cdot q$ by [L2]; thus there is $\sigma_\alpha\in S_n$ with $\widetilde\alpha(1)=\sigma_\alpha\cdot q$, and it is unique by freeness in [L3]. So $e_\alpha$ and $\sigma_\alpha$ are related by $\widetilde\alpha(1)_i=q_{\sigma_\alpha^{-1}(i-1)+1}$ by the coordinate formula of [L3], that is $e_\alpha(i)=\sigma_\alpha^{-1}(i-1)+1$, which is $e_\alpha=\sigma_\alpha^{-1}$ under the label identification of [F1]. [F1, L2, L3, L4]

2.1 *Independence of the representative.* Let $\alpha'\simeq\alpha$ rel endpoints be another based loop at $[q]$. A path homotopy rel endpoints from $\alpha$ to $\alpha'$ lifts, by [L4], to a homotopy of paths from $\widetilde\alpha$ to the lift of $\alpha'$ starting at $q$, keeping the starting point fixed; in particular the two lifts have the same endpoint, so $\sigma_{\alpha'}=\sigma_\alpha$ by uniqueness in step 1.1. Hence $\pi([\alpha]):=\sigma_\alpha$ is well defined on classes. [step 1.1, L4]

2.2 *The endpoint permutation is multiplicative.* Let $\alpha,\beta$ be based loops at $[q]$ and let $\widetilde\alpha,\widetilde\beta$ be their lifts starting at $q$. The path $s\mapsto\sigma_\alpha\cdot\widetilde\beta(s)$ is a path in $F_n(D^2)$ starting at $\sigma_\alpha\cdot q=\widetilde\alpha(1)$ and covering $\beta$, because $p(\sigma_\alpha\cdot x)=p(x)$ for every $x$ by [L2]; by uniqueness of lifts in [L4] it is the lift of $\beta$ beginning at $\widetilde\alpha(1)$. Therefore the concatenation $s\mapsto\widetilde\alpha(2s)$ for $s\le\frac12$ and $s\mapsto\sigma_\alpha\cdot\widetilde\beta(2s-1)$ for $s\ge\frac12$ is a path in $F_n(D^2)$ starting at $q$ and covering $\alpha*\beta$ — the two pieces agree at $s=\frac12$ at the point $\widetilde\alpha(1)$ — so by uniqueness it is the lift of $\alpha*\beta$ starting at $q$. Its endpoint is $\sigma_\alpha\cdot\widetilde\beta(1)=\sigma_\alpha\cdot(\sigma_\beta\cdot q)=(\sigma_\alpha\sigma_\beta)\cdot q$ by the action law of [L3]. Hence $\sigma_{\alpha\beta}=\sigma_\alpha\sigma_\beta$, that is $\pi([\alpha][\beta])=\pi([\alpha])\pi([\beta])$ by [L5] and [L6]. [step 1.1, L2, L3, L4, L5, L6]

2.3 *Relation to the published monodromy.* By [L5] and step 1.1, $q\cdot[\alpha]$ is the endpoint of the lift of $\alpha$ beginning at $q$, namely $\sigma_\alpha\cdot q=\pi([\alpha])\cdot q$; since the action is free by [L3], $\pi([\alpha])$ is the unique $\sigma$ with $q\cdot[\alpha]=\sigma\cdot q$. [step 1.1, L3, L5]

3.1 *The label form is an antihomomorphism.* For based loops $\alpha,\beta$ at $[q]$, step 1.1 gives $e_{\alpha\beta}=\sigma_{\alpha\beta}^{-1}$ and $e_\alpha=\sigma_\alpha^{-1}$, $e_\beta=\sigma_\beta^{-1}$; by step 2.2 and the group law $(\sigma_\alpha\sigma_\beta)^{-1}=\sigma_\beta^{-1}\sigma_\alpha^{-1}$ of [L3], $$e_{\alpha\beta}=\sigma_\beta^{-1}\sigma_\alpha^{-1}=e_\beta\circ e_\alpha$$ in the composition convention of $S_n$. Thus the endpoint record $e$ reverses the order of the product, while $\pi=e^{-1}$ does not. [step 1.1, step 2.2, L3]

4.1 *Conclusion.* Steps 1.1, 2.1 and 2.2 show that $\pi([\alpha])=\sigma_\alpha=e_\alpha^{-1}$ is a well-defined group homomorphism $B_n^{\mathrm{conf}}\to S_n$, step 3.1 records that the label form $e$ itself is an antihomomorphism, and step 2.3 identifies $\pi$ with the published covering monodromy at the element $q$. For $n\le1$, $S_n$ is trivial and $\pi$ is trivially a homomorphism. [step 1.1, step 2.1, step 2.2, step 3.1, step 2.3, L6] ∎
