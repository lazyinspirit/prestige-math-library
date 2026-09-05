---
id: lem-quotient-spectrum-map-is-closed
kind: lemma
title: "The spectrum of a quotient is a closed subspace"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-zariski-closed-set-axioms, thm-prime-spectrum-of-a-quotient-bijection]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 14.4(a)"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Lemma 10.17.7"
      url: "https://stacks.math.columbia.edu/tag/00DY"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $R$ be a commutative ring, let $I\trianglelefteq R$, and let $\pi:R\to R/I$ be the quotient map. Then contraction along $\pi$ is a homeomorphism from $\operatorname{Spec}(R/I)$ onto the closed subset $V(I)\subseteq\operatorname{Spec}(R)$.

## Facts & Assumptions

**Given:** A commutative ring $R$, an ideal $I\trianglelefteq R$, and the quotient map $\pi:R\to R/I$.

[L1] Contraction along $\pi$ is an inclusion-preserving bijection from $\operatorname{Spec}(R/I)$ onto $V(I)$, with inverse $\mathfrak p\mapsto\mathfrak p/I$ ([[thm-prime-spectrum-of-a-quotient-bijection]]).

[L2] In a Zariski spectrum, the closed sets are precisely the vanishing sets ([[lem-zariski-closed-set-axioms]]).

[A1] A subset of $V(I)$ is closed in the subspace topology exactly when it has the form $V(I)\cap V(J)=V(I+J)$ for some ideal $J\trianglelefteq R$.

## Proof

**Proof technique:** direct.

1.1 By [L1], contraction gives a bijection $c:\operatorname{Spec}(R/I)\to V(I)$. [L1]

1.2 Let $J$ be an ideal of $R$ containing $I$. If $\mathfrak q\in\operatorname{Spec}(R/I)$ has contraction $\mathfrak p=\pi^{-1}(\mathfrak q)$, then $$ \mathfrak q\supseteq J/I \quad\Longleftrightarrow\quad \mathfrak p\supseteq J. $$ Therefore $$ c\bigl(V_{R/I}(J/I)\bigr)=V_R(J). $$ Since $V_R(J)\subseteq V_R(I)$, this is closed in the subspace $V(I)$. [L1, given, algebra]

2.1 By [L2], every closed subset of $\operatorname{Spec}(R/I)$ has the form $V_{R/I}(K)$ for some ideal $K\trianglelefteq R/I$. Writing $J=\pi^{-1}(K)$, one has $K=J/I$, so step 1.2 shows that $c$ sends every closed subset of $\operatorname{Spec}(R/I)$ to a closed subset of $V(I)$. [L2, step 1.2]

2.2 Conversely, let $C\subseteq V(I)$ be closed. By [A1], $C=V(I+J)$ for some ideal $J\trianglelefteq R$. Since $I+J$ contains $I$, step 1.2 gives $$ C=V_R(I+J)=c\bigl(V_{R/I}((I+J)/I)\bigr), $$ so $c^{-1}$ also carries closed sets to closed sets. [A1, step 1.2]

3.1 The bijection $c$ and its inverse both preserve closed sets, so $c$ is a homeomorphism from $\operatorname{Spec}(R/I)$ onto the closed subspace $V(I)$. [step 1.1, step 2.1, step 2.2] ∎

