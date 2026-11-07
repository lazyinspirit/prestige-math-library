---
id: lem-balanced-cm-type-relations-have-effective-generators
kind: lemma
title: "Balanced CM-type relations have effective generators"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Deligne, Hodge Cycles on Abelian Varieties, notes by J. S. Milne"
      url: "https://www.jmilne.org/math/Documents/Deligne82.pdf"
      locator: "Section 5, Lemma 5.2 and complete proof, printed page 40 (PDF page 40), read. The assertion and proof below isolate its finite relation argument; no absolute-Hodge theorem is imported."
verification: {}
---

## Statement

Let $S$ be a nonempty finite set with a fixed-point-free involution $s\mapsto\bar s$, and let $\mathcal T$ be the finite set of all subsets $\Phi\subseteq S$ containing exactly one element from each involution orbit. Write $\mathbf1_\Phi:S\to\{0,1\}$ for the characteristic function of $\Phi$. Let $L$ consist of the pairs $((d_\Phi)_{\Phi\in\mathcal T},w)\in\mathbb Z^{\mathcal T}\times\mathbb Z$ for which
$$\sum_{\Phi\in\mathcal T}d_\Phi\mathbf1_\Phi(s)=w\qquad(s\in S).$$
Then $\sum_\Phi d_\Phi=2w$, and $L$ is generated as an abelian group by its elements with every $d_\Phi\ge0$. More precisely, for every element $x\in L$ there are nonnegative balanced elements $x_+,x_-\in L$ with $x=x_+-x_-$; $x_-$ can be chosen as a finite nonnegative sum of complementary-type pairs.

If a finite group $G$ acts simply transitively on $S$ and $s_0\in S$, let $\mu_g(\Phi)=\mathbf1_\Phi(g^{-1}s_0)$ for $g\in G$. The same group $L$ is exactly the set of integer pairs annihilating every affine functional
$$((d_\Phi),w)\longmapsto\sum_\Phi d_\Phi\mu_g(\Phi)-w\qquad(g\in G).$$
No assumption on an algebraic group, cohomology theory, or Hodge classes is made.

## Facts & Assumptions

**Given:** The finite involutive set and, for the final assertion, the specified finite simply transitive action.

## Proof

**Proof technique:** pair complementary types and clear finitely many negative coefficients.

1.1 Each orbit of the involution has two elements. Because there are finitely many, a transversal exists by finite induction and the set $\mathcal T$ is finite. For each $\Phi\in\mathcal T$, its complement $\bar\Phi=S\setminus\Phi$ is also a type and satisfies $\mathbf1_\Phi(s)+\mathbf1_{\bar\Phi}(s)=1$ for every $s\in S$. [given, construct, algebra]

2.1 Let $((d_\Phi),w)\in L$ and choose $s\in S$. Adding its balancing equation to that for $\bar s$ and using step 1.1 gives $\sum_\Phi d_\Phi=2w$. For every type $\Phi$ the pair $c_\Phi=(e_\Phi+e_{\bar\Phi},1)$ is balanced, where $e_\Phi$ is the corresponding standard basis vector. [given, step 1.1, algebra]

3.1 The finitely many $d_\Phi$ have a minimum. Choose a nonnegative integer $N$ at least the negative of that minimum, and put $q=N\sum_{\Phi\in\mathcal T}c_\Phi$. Both $q$ and $x+q$ belong to $L$ by step 2.1. Every coefficient of $x+q$ is at least $d_\Phi+N\ge0$, while all coefficients of $q$ are nonnegative. Thus $x=(x+q)-q$ is the stated difference, and the effective balanced elements generate $L$. This requires only finite selections. [given, step 2.1, choose, construct, algebra]

4.1 Under the stated simply transitive action, as $g$ ranges over $G$ the points $g^{-1}s_0$ range over all $s\in S$. Consequently vanishing of every displayed functional is exactly the family of balancing equations in the definition of $L$. This proves the final assertion. [given, algebra] ∎

## Source-reading boundary

Only Deligne's finite lattice lemma and its proof at the cited page are used for this reconstruction. This carrier does not assert the absolute-Hodge, split-Weil-cycle, deformation, or comparison principles needed for the original over-$\mathbb Q$ theorem.
