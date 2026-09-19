---
id: lem-good-tree-watson-selector-obstruction
kind: lemma
title: "The symmetric Stone model has no componentwise proper selector"
status: draft
origin: pipeline
deps: [def-good-tree-watson-symmetric-stone-model, def-symmetric-forcing-system-and-hereditarily-symmetric-names, def-forcing-name-automorphism-action, lem-symmetry-lemma-for-forcing-automorphisms, def-forcing-preorder-compatibility-and-filter]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: contradiction
sources:
  scraped: []
  references:
    - title: "C. Good, I. J. Tree, and W. S. Watson, On Stone's theorem and the axiom of choice"
      url: "https://web.mat.bham.ac.uk/C.Good/research/pdfs/stone.pdf"
      locator: "Sections 2-4, printed pp. 2-9"
---

## Statement

No function in the symmetric model $N$ of
[[def-good-tree-watson-symmetric-stone-model]] assigns to every distinguished
metric component $R_\xi$ a nonempty proper subset of that component.

## Facts & Assumptions

**Given:** A function $f \in N$ with domain $M = \{R_\xi : \xi < \lambda\}$ and $f(R_\xi)$ a proper nonempty subset of $R_\xi$ for every $\xi$.

[F1] Membership in $N$ is hereditary symmetry: $f$ has a support $\operatorname{fix}(e)$ in the normal filter, with $e \subseteq \lambda \times \mathbb{R} \times \lambda$ of size below $\lambda$ ([[def-good-tree-watson-symmetric-stone-model]], [[def-symmetric-forcing-system-and-hereditarily-symmetric-names]]).

[F2] In Claim 1.3 of the source, the reflection/identity choice is made separately at each first coordinate. Explicitly, if $\xi<\lambda$, $\rho$ is a reflection of $\mathbb R$, and $\tau$ is a permutation of $\lambda$, the coordinate map which is the identity off the $\xi$-block and sends $(\xi,t,\alpha)$ to $(\xi,\rho(t),\tau(\alpha))$ is an allowed automorphism. It fixes $R_\xi$ and sends $X_{\xi t}$ to $X_{\xi,\rho(t)}$. [given, source, [[def-forcing-name-automorphism-action]]]

[F3] The symmetry lemma sends a forced statement to its image under a forcing automorphism; if two conditions are compatible, their common extension cannot force contradictory statements ([[lem-symmetry-lemma-for-forcing-automorphisms]], [[def-forcing-preorder-compatibility-and-filter]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $f\in N$ is such a selector. Choose a hereditarily symmetric name $\dot f$, a condition $p_0$ forcing that $\dot f$ has the stated selector property, and a support $e\subseteq\lambda\times\mathbb R\times\lambda$ of size below $\lambda$ such that every member of $\operatorname{fix}(e)$ fixes $\dot f$. [assume-contra, F1]

2.1 The projection of $e$ to the first coordinate has size below $\lambda$, so choose $\xi<\lambda$ outside it. Strengthen $p_0$ to a condition $p$ and choose distinct ground-model reals $r,s$ so that $p$ forces $X_{\xi r}\in\dot f(R_\xi)$ and $X_{\xi s}\notin\dot f(R_\xi)$. [step 1.1, F1]

3.1 Let $C$ be the set of third coordinates $\alpha$ occurring in $\operatorname{dom}(p)$ at first coordinate $\xi$. Then $|C|<\lambda$. Choose a disjoint $C'\subseteq\lambda$ of the same cardinality and a permutation $\tau$ of $\lambda$ interchanging $C$ and $C'$ and fixing the complement. Let $\rho$ be reflection about $(r+s)/2$, and let $\pi$ be the coordinate-local automorphism from [F2] using $\rho$ and $\tau$ at $\xi$ and the identity elsewhere. [step 2.1, F2]

4.1 The automorphism $\pi$ lies in $\operatorname{fix}(e)$ because it is the identity outside the $\xi$-block, so $\pi\dot f=\dot f$. It fixes $R_\xi$ and swaps $X_{\xi r}$ with $X_{\xi s}$. By [F3], $\pi p$ therefore forces $X_{\xi s}\in\dot f(R_\xi)$ and $X_{\xi r}\notin\dot f(R_\xi)$. [step 1.1, step 2.1, step 3.1, F2, F3]

4.2 The conditions $p$ and $\pi p$ are compatible. On every coordinate whose first index is not $\xi$, $\pi$ is the identity, so the two conditions agree on their common domain. At first index $\xi$, every third coordinate used by $p$ lies in $C$, whereas every third coordinate used by $\pi p$ lies in the disjoint set $C'$, so their domains are disjoint there. Hence $p\cup\pi p$ is a common extension. [step 3.1, F3]

5.1 The common extension $p\cup\pi p$ inherits from $p$ the assertion $X_{\xi s}\notin\dot f(R_\xi)$ and from $\pi p$ the assertion $X_{\xi s}\in\dot f(R_\xi)$, a contradiction. Therefore no componentwise nonempty proper selector belongs to $N$. [step 2.1, step 4.1, step 4.2, discharge-contradiction] ∎
