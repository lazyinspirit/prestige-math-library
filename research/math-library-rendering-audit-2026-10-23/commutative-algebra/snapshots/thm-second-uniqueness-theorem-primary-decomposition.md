---
id: thm-second-uniqueness-theorem-primary-decomposition
kind: theorem
title: "Downward-closed intersections of primary components are intrinsic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-localisation-of-a-module, thm-first-uniqueness-theorem-primary-decomposition, lem-localisation-of-a-primary-submodule, lem-contraction-recovers-primary-component-after-localising-away-from-radical, cor-localisation-commutes-with-finite-intersections-of-submodules, lem-finite-prime-avoidance]
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (18.25)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Theorem 19.10 and isolated-component discussion"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Statement

Assume the Axiom of Choice.

Let $R$ be a Noetherian commutative ring, let $M$ be a finitely generated left
$R$-module, and let
$$ N=Q_1\cap\cdots\cap Q_r $$
be a minimal primary decomposition with each $Q_i$ $\mathfrak p_i$-primary for
a prime ideal $\mathfrak p_i$.
Let $\Sigma \subseteq \operatorname{Ass}_R(M/N)$ be downward-closed under
inclusion. Then
$$ \bigcap_{\mathfrak p_i \in \Sigma}Q_i $$
depends only on $N \subseteq M$ and on $\Sigma$, not on the chosen minimal
decomposition. When $\Sigma=\varnothing$, the empty intersection is interpreted
as $M$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a Noetherian commutative ring $R$, a finitely generated left $R$-module $M$, a submodule $N \subseteq M$, and a minimal primary decomposition $N=Q_1\cap\cdots\cap Q_r$ with each $Q_i$ $\mathfrak p_i$-primary for a prime ideal $\mathfrak p_i$.

[L1] In the Noetherian finite-module setting, a minimal primary decomposition whose component radicals are prime has radical set $\{\mathfrak p_1,\dots,\mathfrak p_r\}=\operatorname{Ass}_R(M/N)$ ([[thm-first-uniqueness-theorem-primary-decomposition]]).

[L2] Assuming the Axiom of Choice, in the Noetherian finite-module setting, localizing a primary component away from its prime radical keeps it, while localizing at a set meeting its radical turns it into the whole localized module ([[lem-localisation-of-a-primary-submodule]]).

[L3] In the Noetherian finite-module setting, a primary component with prime radical is recovered by contracting its localization at a multiplicative set disjoint from that radical ([[lem-contraction-recovers-primary-component-after-localising-away-from-radical]]).

[L4] Localisation commutes with finite intersections of submodules ([[cor-localisation-commutes-with-finite-intersections-of-submodules]]).

[L5] If an ideal is contained in a finite union of prime ideals, then it lies in one of them ([[lem-finite-prime-avoidance]]).

[L6] For a multiplicative subset $S$, the canonical localization map is $\lambda_M:M\to S^{-1}M$, $m\mapsto m/1$ ([[def-localisation-of-a-module]]).

## Proof

**Proof technique:** direct.

1.1 Let $\Sigma \subseteq \operatorname{Ass}_R(M/N)$ be downward-closed, and set $$ S=R\setminus \bigcup_{\mathfrak p \in \Sigma}\mathfrak p. $$ Because the members of $\Sigma$ are prime, $S$ is multiplicative. If $\mathfrak p_i \in \Sigma$, then $S \cap \mathfrak p_i=\varnothing$ by definition. If $\mathfrak p_i \notin \Sigma$ and $S \cap \mathfrak p_i=\varnothing$, then $\mathfrak p_i \subseteq \bigcup_{\mathfrak p \in \Sigma}\mathfrak p$, so [L5] forces $\mathfrak p_i \subseteq \mathfrak p$ for some $\mathfrak p \in \Sigma$. Since $\mathfrak p_i \in \operatorname{Ass}_R(M/N)$ by [L1] and $\Sigma$ is downward-closed, this would imply $\mathfrak p_i \in \Sigma$, a contradiction. Hence $$ S \cap \mathfrak p_i=\varnothing \iff \mathfrak p_i \in \Sigma. $$ [L1, L5, given, algebra]

2.1 By [L4], $$ S^{-1}N=\bigcap_{i=1}^r S^{-1}Q_i. $$ For $\mathfrak p_i \in \Sigma$, step 1.1 and [L2] say that $S^{-1}Q_i$ remains a proper localized primary component. For $\mathfrak p_i \notin \Sigma$, step 1.1 and [L2] give $S^{-1}Q_i=S^{-1}M$. Therefore $$ S^{-1}N=\bigcap_{\mathfrak p_i \in \Sigma}S^{-1}Q_i. $$ When $\Sigma=\varnothing$, the right-hand side is the empty intersection $S^{-1}M$, which matches the fact that $0 \in S$ and hence $S^{-1}N=S^{-1}M=0$. [L2, L4, step 1.1, algebra]

3.1 Let $\lambda_M:M\to S^{-1}M$ be the canonical map of [L6]. Contracting the equality of step 2.1 back to $M$ gives $$ \lambda_M^{-1}(S^{-1}N)=\bigcap_{\mathfrak p_i \in \Sigma}\lambda_M^{-1}(S^{-1}Q_i), $$ because inverse image commutes with intersections. For every $\mathfrak p_i \in \Sigma$, step 1.1 and [L3] identify $\lambda_M^{-1}(S^{-1}Q_i)$ with $Q_i$. Hence $$ \lambda_M^{-1}(S^{-1}N)=\bigcap_{\mathfrak p_i \in \Sigma}Q_i. $$ [L3, L6, step 1.1, step 2.1, algebra]

4.1 The left-hand side of step 3.1 depends only on $N \subseteq M$ and the set $S$, hence only on $N \subseteq M$ and on $\Sigma$. By [L1], any other minimal primary decomposition has the same associated-prime set, so it yields the same $S$ and therefore the same intersection. [L1, step 3.1]

5.1 Thus the intersection of the primary components indexed by any downward-closed subset of $\operatorname{Ass}_R(M/N)$ is intrinsic. [step 4.1] ∎
