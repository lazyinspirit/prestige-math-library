---
id: thm-left-coset-action-and-its-kernel
kind: theorem
title: 'Left multiplication on $G/H$ is transitive, has stabiliser $H$ at $H$, and has kernel $\operatorname{Core}_G(H)$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-action, thm-group-actions-correspond-to-homomorphisms, def-coset, def-index, lem-coset-membership-and-equality, def-kernel-and-image-of-group-homomorphism, def-core-of-a-subgroup, lem-core-is-largest-normal-subgroup-contained]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Brosnan, Undergraduate Algebra Notes, 3.14: G-Sets, Proposition 3.102 and Corollary 3.104"
      url: "https://www.math.umd.edu/~pbrosnan/notes/ugalg/sect0035.html"
    - title: "K. Conrad, Group Actions, Theorem 6.8"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf"
pipeline_run: null
---

## Statement

Let $H\le G$. Left multiplication defines a transitive action of $G$ on the
coset set $G/H$ by

$$g\cdot(aH):=(ga)H.$$

The stabilizer of the point $H$ is $H$. The corresponding homomorphism
$\rho:G\to\operatorname{Sym}(G/H)$ has

$$\ker\rho=\operatorname{Core}_G(H).$$

## Facts & Assumptions

**Given:** A group $G$ and a subgroup $H\le G$.

[L1] A left action satisfies the identity and multiplication laws and is transitive when some group element carries any chosen point to any other ([[def-group-action]]).

[L2] Every action yields a homomorphism into the symmetric group of the acted-on set ([[thm-group-actions-correspond-to-homomorphisms]]).

[L3] The elements of $G/H$ are the left cosets $aH$ ([[def-coset]], [[def-index]]).

[L4] One has $aH=bH$ exactly when $a^{-1}b\in H$ ([[lem-coset-membership-and-equality]]).

[L5] The kernel of a homomorphism consists of the elements mapped to the identity ([[def-kernel-and-image-of-group-homomorphism]]).

[L6] The core is $\operatorname{Core}_G(H)=\bigcap_{a\in G}aHa^{-1}$ ([[def-core-of-a-subgroup]]).

[L7] The core is a normal subgroup contained in $H$ ([[lem-core-is-largest-normal-subgroup-contained]]).

## Proof

**Proof technique:** direct.

1.1 If $aH=bH$, then $a^{-1}b\in H$ by [L4], and $(ga)^{-1}(gb)=a^{-1}b\in H$, so $(ga)H=(gb)H$ and the rule is well-defined. It satisfies $e\cdot(aH)=aH$ and $g\cdot(k\cdot(aH))=(gk)aH=(gk)\cdot(aH)$; moreover $a\cdot H=aH$, so the action is transitive, and $g\cdot H=H$ exactly when $g\in H$. [L1, L3, L4]

2.1 By [L2], the action defines $\rho:G\to\operatorname{Sym}(G/H)$. By [L5], an element $k$ lies in $\ker\rho$ exactly when $k\cdot(aH)=aH$ for every $a\in G$, that is, when $(ka)H=aH$ for every $a$. [step 1.1, L2, L5]

3.1 By [L4], $(ka)H=aH$ is equivalent to $a^{-1}ka\in H$, or to $k\in aHa^{-1}$. Requiring this for every $a$ gives $k\in\bigcap_a aHa^{-1}=\operatorname{Core}_G(H)$, so $\ker\rho=\operatorname{Core}_G(H)$, which is normal by [L7]. [step 2.1, L4, L6, L7] ∎
