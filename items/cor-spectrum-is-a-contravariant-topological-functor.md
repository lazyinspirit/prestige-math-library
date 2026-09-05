---
id: cor-spectrum-is-a-contravariant-topological-functor
kind: corollary
title: "The prime-spectrum construction is a contravariant functor to topological spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-zariski-closed-set-axioms, thm-prime-spectrum-map-by-contraction]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Lemma 10.17.4"
      url: "https://stacks.math.columbia.edu/tag/00DY"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

For every ring homomorphism $\varphi:R\to A$, contraction defines a continuous map $$ \operatorname{Spec}(\varphi):\operatorname{Spec}(A)\longrightarrow\operatorname{Spec}(R). $$ These maps satisfy $$ \operatorname{Spec}(\operatorname{id}_R)=\operatorname{id}_{\operatorname{Spec}(R)} \quad\text{and}\quad \operatorname{Spec}(\psi\circ\varphi)=\operatorname{Spec}(\varphi)\circ\operatorname{Spec}(\psi), $$ so $\operatorname{Spec}$ is a contravariant functor from commutative rings to topological spaces.

## Facts & Assumptions

**Given:** Ring homomorphisms $\varphi:R\to A$ and $\psi:A\to B$ of commutative rings.

[L1] For every ideal $I\trianglelefteq R$, $$ \operatorname{Spec}(\varphi)^{-1}(V(I))=V(IA), $$ so contraction pulls back vanishing sets to vanishing sets ([[thm-prime-spectrum-map-by-contraction]]).

[L2] The Zariski-closed subsets are exactly the vanishing sets ([[lem-zariski-closed-set-axioms]]).

## Proof

**Proof technique:** direct.

1.1 Let $Z\subseteq\operatorname{Spec}(R)$ be closed. By [L2], $Z=V(I)$ for some ideal $I\trianglelefteq R$. Then [L1] gives $\operatorname{Spec}(\varphi)^{-1}(Z)=\operatorname{Spec}(\varphi)^{-1}(V(I))=V(IA)$, which is closed in $\operatorname{Spec}(A)$ by [L2]. Therefore $\operatorname{Spec}(\varphi)$ is continuous. [L1, L2]

1.2 For a prime ideal $\mathfrak p\subseteq R$ one has $\operatorname{Spec}(\operatorname{id}_R)(\mathfrak p)=\operatorname{id}_R^{-1}(\mathfrak p)=\mathfrak p$, so $\operatorname{Spec}(\operatorname{id}_R)=\operatorname{id}_{\operatorname{Spec}(R)}$. [given, algebra]

1.3 For a prime ideal $\mathfrak q\subseteq B$, one has $\operatorname{Spec}(\psi\circ\varphi)(\mathfrak q)=(\psi\circ\varphi)^{-1}(\mathfrak q)=\varphi^{-1}(\psi^{-1}(\mathfrak q))=\operatorname{Spec}(\varphi)(\operatorname{Spec}(\psi)(\mathfrak q))$. Hence $\operatorname{Spec}(\psi\circ\varphi)=\operatorname{Spec}(\varphi)\circ\operatorname{Spec}(\psi)$. [given, algebra]

2.1 Steps 1.1, 1.2, and 1.3 prove that $\operatorname{Spec}$ is a contravariant functor to topological spaces. [step 1.1, step 1.2, step 1.3] ∎
