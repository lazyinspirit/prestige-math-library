---
id: lem-associated-primes-from-a-minimal-primary-decomposition
kind: lemma
title: "The radicals in a minimal primary decomposition are exactly the associated primes of the quotient"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-primary-decomposition-minimal-and-isolated-components, thm-associated-primes-in-a-short-exact-sequence, thm-primary-submodule-characterisations, thm-existence-of-associated-primes]
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
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Lemma (18.19) and Theorem (18.20)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Theorem 19.19"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
---

## Statement

Let $R$ be a Noetherian commutative ring, let $M$ be a finitely generated left
$R$-module, and let
$$ N=Q_1\cap\cdots\cap Q_r $$
be a minimal primary decomposition in which each $Q_i$ is $\mathfrak p_i$-primary.
Assume each $\mathfrak p_i$ is a prime ideal.
Then
$$ \operatorname{Ass}_R(M/N)=\{\mathfrak p_1,\dots,\mathfrak p_r\}. $$

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$, a finitely generated left $R$-module $M$, and a minimal primary decomposition $N=Q_1\cap\cdots\cap Q_r$ with each $Q_i$ $\mathfrak p_i$-primary for a prime ideal $\mathfrak p_i$.

[L1] In a minimal primary decomposition, the component radicals are pairwise distinct and no component is redundant ([[def-primary-decomposition-minimal-and-isolated-components]]).

[L2] Associated primes of a submodule lie in those of the ambient module, and associated primes of a direct sum are the union of those of the summands ([[thm-associated-primes-in-a-short-exact-sequence]]).

[L3] If $Q_i$ is $\mathfrak p_i$-primary, then $\operatorname{Ass}_R(M/Q_i)=\{\mathfrak p_i\}$ ([[thm-primary-submodule-characterisations]]).

[L4] Every nonzero module over a Noetherian ring has an associated prime ([[thm-existence-of-associated-primes]]).

## Proof

**Proof technique:** direct.

1.1 Let $$ \delta:M/N\longrightarrow \bigoplus_{i=1}^r M/Q_i $$ be the diagonal map. Its kernel is zero, because $m+N$ maps to zero exactly when $m \in Q_i$ for every $i$, that is, when $m \in N$. Thus $\delta$ is injective. By [L3] and the direct-sum part of [L2], $$ \operatorname{Ass}_R\!\left(\bigoplus_{i=1}^r M/Q_i\right)=\{\mathfrak p_1,\dots,\mathfrak p_r\}. $$ Since $M/N$ is a submodule of that direct sum, the left-inclusion part of [L2] gives $$ \operatorname{Ass}_R(M/N)\subseteq \{\mathfrak p_1,\dots,\mathfrak p_r\}. $$ [L2, L3, construct, algebra]

1.2 Fix $i$. Put $I_i=\bigcap_{j\ne i}Q_j$. By [L1], the decomposition is irredundant, so $I_i \nsubseteq Q_i$ and therefore $I_i/N \neq 0$. The map $$ I_i/N \longrightarrow M/Q_i,\qquad m+N \longmapsto m+Q_i $$ is injective because its kernel is $(I_i \cap Q_i)/N=N/N=0$. Hence $I_i/N$ is a nonzero submodule of $M/Q_i$. By [L2] and [L3], $$ \operatorname{Ass}_R(I_i/N)\subseteq \operatorname{Ass}_R(M/Q_i)=\{\mathfrak p_i\}. $$ Fact [L4] makes $\operatorname{Ass}_R(I_i/N)$ nonempty, so $\operatorname{Ass}_R(I_i/N)=\{\mathfrak p_i\}$. Applying [L2] again to the inclusion $I_i/N \hookrightarrow M/N$ yields $\mathfrak p_i \in \operatorname{Ass}_R(M/N)$. [L1, L2, L3, L4, choose, algebra]

2.1 Step 1.2 shows every $\mathfrak p_i$ belongs to $\operatorname{Ass}_R(M/N)$, and step 1.1 gives the reverse inclusion. Therefore $\operatorname{Ass}_R(M/N)=\{\mathfrak p_1,\dots,\mathfrak p_r\}$. [step 1.1, step 1.2] ∎
