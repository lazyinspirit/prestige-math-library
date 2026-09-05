---
id: lem-localisation-spectrum-map-homeomorphism-onto-image
kind: lemma
title: "The spectrum of a localisation is the subspace of primes disjoint from the denominator set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-zariski-closed-set-axioms, thm-prime-spectrum-of-a-localisation-bijection]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Lemma 10.17.5"
      url: "https://stacks.math.columbia.edu/tag/00DY"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $R$ be a commutative ring, let $S\subseteq R$ be multiplicative, and let $\lambda:R\to S^{-1}R$ be the localisation map. Then contraction along $\lambda$ is a homeomorphism from $\operatorname{Spec}(S^{-1}R)$ onto the subspace $$ X:=\{\mathfrak p\in\operatorname{Spec}(R):\mathfrak p\cap S=\varnothing\}. $$

## Facts & Assumptions

**Given:** A commutative ring $R$, a multiplicative subset $S\subseteq R$, and the localization map $\lambda:R\to S^{-1}R$.

[L1] Contraction along $\lambda$ is an inclusion-preserving bijection from $\operatorname{Spec}(S^{-1}R)$ onto $X$, with inverse $\mathfrak p\mapsto S^{-1}\mathfrak p$ ([[thm-prime-spectrum-of-a-localisation-bijection]]).

[L2] In a Zariski spectrum, the closed sets are precisely the vanishing sets ([[lem-zariski-closed-set-axioms]]).

[A1] If $K\trianglelefteq S^{-1}R$ and $I=\lambda^{-1}(K)$, then $K=S^{-1}I$.

[A2] A subset of $X$ is closed in the subspace topology exactly when it has the form $X\cap V(I)$ for some ideal $I\trianglelefteq R$.

## Proof

**Proof technique:** direct.

1.1 By [L1], contraction gives a bijection $c:\operatorname{Spec}(S^{-1}R)\to X$. [L1]

1.2 Let $I\trianglelefteq R$. If $\mathfrak q\in\operatorname{Spec}(S^{-1}R)$ has contraction $\mathfrak p$, then the inverse description in [L1] gives $\mathfrak q=S^{-1}\mathfrak p$. Therefore $$ \mathfrak q\supseteq S^{-1}I \quad\Longleftrightarrow\quad \mathfrak p\supseteq I, $$ and hence $$ c\bigl(V_{S^{-1}R}(S^{-1}I)\bigr)=X\cap V_R(I). $$ [L1, given, algebra]

2.1 By [L2], every closed subset of $\operatorname{Spec}(S^{-1}R)$ has the form $V_{S^{-1}R}(K)$ for some ideal $K\trianglelefteq S^{-1}R$. With $I=\lambda^{-1}(K)$, assumption [A1] gives $K=S^{-1}I$, so step 1.2 shows that $c$ sends every closed subset of $\operatorname{Spec}(S^{-1}R)$ to a closed subset of $X$. [L2, A1, step 1.2]

2.2 Conversely, if $C\subseteq X$ is closed, then [A2] gives $C=X\cap V_R(I)$ for some ideal $I\trianglelefteq R$. Step 1.2 then yields $$ C=c\bigl(V_{S^{-1}R}(S^{-1}I)\bigr), $$ so $c^{-1}$ also preserves closed sets. [A2, step 1.2]

3.1 The bijection $c$ and its inverse both preserve closed sets, so $c$ is a homeomorphism from $\operatorname{Spec}(S^{-1}R)$ onto the subspace $X$. [step 1.1, step 2.1, step 2.2] ∎

