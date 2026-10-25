---
id: ex-the-free-proper-integer-translation-action-on-the-line
kind: example
title: Integer translations on the line
status: published
origin: pipeline
deps: [def-lie-group, def-free-and-proper-lie-group-actions, thm-compactness-under-continuous-maps, thm-compact-subset-is-closed-and-bounded, thm-finite-products-of-compact-spaces, thm-closed-subspace-of-a-compact-space-is-compact, thm-a-free-proper-action-makes-m-to-m-mod-g-a-principal-g-bundle]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Discrete-group quotient discussion following Theorem 21.29, printed page 557; principal-bundle construction in Theorem 21.10, printed pages 545–547
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Covering Lie groups, Proposition 3.5 and Example 3.7, printed pages 26–27
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Example

Give $\mathbb Z$ its discrete zero-dimensional Lie-group structure and let it
act smoothly on $\mathbb R$ by

$$n\mathbin{\cdot}x=x+n.$$

This action is free and proper. Its orbit quotient is diffeomorphic to $S^1$,
and, under that identification, the orbit map is the principal
$\mathbb Z$-bundle

$$p:\mathbb R\longrightarrow S^1,\qquad p(x)=e^{2\pi i x}.$$

## Facts & Assumptions

**Given:** The discrete Lie group $\mathbb Z$, the usual smooth line $\mathbb R$, and the displayed translation action.

[F1] Any countable discrete group is a zero-dimensional Lie group. [[def-lie-group]].

[F2] Continuous images of compact sets are compact; compact subsets of metric spaces are closed and bounded; finite products of compact spaces and closed subspaces of compact spaces are compact. [[thm-compactness-under-continuous-maps]], [[thm-compact-subset-is-closed-and-bounded]], [[thm-finite-products-of-compact-spaces]], [[thm-closed-subspace-of-a-compact-space-is-compact]].

[F3] A smooth free proper left action makes its orbit projection, for the equivalent right action $x\cdot n=(-n)\cdot x=x-n$, a principal bundle. [[def-free-and-proper-lie-group-actions]], [[thm-a-free-proper-action-makes-m-to-m-mod-g-a-principal-g-bundle]].

## Verification

**Proof technique:** direct.

1.1 Addition gives $0\cdot x=x$ and $(m+n)\cdot x=m\cdot(n\cdot x)$, so the formula is a left action. It is smooth because its restriction to every open component $\{n\}\times\mathbb R$ is the smooth translation $x\mapsto x+n$. If $n\cdot x=x$, then $n=0$, so the action is free. [given, F1, algebra]

2.1 The action is proper. Let $K\subseteq\mathbb R^2$ be compact and write $\Theta(n,x)=(x+n,x)$. The continuous coordinate projections and difference map $(a,b)\mapsto a-b$ send $K$ to compact, hence bounded, subsets $P$ and $D$ of $\mathbb R$ by [F2]. Thus the first coordinate of every $(n,x)\in\Theta^{-1}(K)$ lies in the finite set $E=\mathbb Z\cap D$, while $x\in P$. The set $E$ is finite and therefore compact; hence $E\times P$ is compact by [F2]. Because compact $K$ is closed and $\Theta$ is continuous, $\Theta^{-1}(K)$ is closed in $\mathbb Z\times\mathbb R$, and consequently is a closed subspace of the compact set $E\times P$. It is compact by [F2], proving properness. [F2, step 1.1]

3.1 The map $p(x)=e^{2\pi i x}$ is constant on translation orbits. Conversely, $p(x)=p(y)$ exactly when $x-y\in\mathbb Z$, so it induces a bijection $\bar p:\mathbb R/\mathbb Z\to S^1$. For every $z_0=e^{2\pi i x_0}$, the restriction of $p$ to $(x_0-\tfrac12,x_0+\tfrac12)$ maps each sufficiently short subinterval diffeomorphically onto an open arc about $z_0$, with a smooth argument branch as inverse. These local inverse branches show that $p$ is a covering map and, using the quotient slice charts supplied by the free proper action, that $\bar p$ and $\bar p^{-1}$ are smooth. Thus $\bar p$ is a diffeomorphism. [step 1.1, step 2.1, algebra]

4.1 By [F3], the orbit projection $\mathbb R\to\mathbb R/\mathbb Z$ is a principal $\mathbb Z$-bundle for the right action $x\cdot n=x-n$. Transporting its base along the diffeomorphism $\bar p$ from step 3.1 gives precisely $p:\mathbb R\to S^1$. This verifies every claim, including both the quotient smooth structure and the principal-bundle assertion, without any choice principle. [F3, step 2.1, step 3.1] ∎
