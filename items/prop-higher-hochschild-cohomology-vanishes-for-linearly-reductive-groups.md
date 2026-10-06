---
id: prop-higher-hochschild-cohomology-vanishes-for-linearly-reductive-groups
kind: proposition
title: Higher Hochschild cohomology vanishes for linearly reductive groups
dependency_level: 5
deps:
  - def-affine-scheme
  - def-hochschild-cohomology-of-algebraic-groups
  - lem-shapiro-lemma-and-induced-modules-are-acyclic
  - prop-linearly-reductive-iff-h1-vanishes
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Lemma 15.14 and Propositions 15.15-15.16, printed pp. 311-312
    - title: J. S. Milne, Algebraic Groups (v2.00, 20 December 2015 author-hosted preliminary edition)
      url: https://www.jmilne.org/math/CourseNotes/iAG200.pdf
      locator: Lemma 16.14, printed p. 277; Proposition 16.16, printed pp. 277-278
---
## Statement

Let $k$ be a field and let $G$ be a linearly reductive affine algebraic group over $k$ ([[def-affine-scheme]]): every finite-dimensional rational representation of $G$ is a direct sum of simple representations, equivalently $H^1(G,V)=0$ for every finite-dimensional representation $V$ ([[prop-linearly-reductive-iff-h1-vanishes]]). Then
$$H^n(G,V)=0\qquad\text{for all }n\ge1$$
and for every rational representation $V$ of $G$, where $H^\bullet$ is Hochschild cohomology ([[def-hochschild-cohomology-of-algebraic-groups]]).

## Facts & Assumptions

**Given:** A field $k$, a linearly reductive affine algebraic group $G$ over $k$, a rational representation $V$ of $G$, and an integer $n\ge1$.

[F1] Cohomology is computed from the Hochschild complex $C^\bullet(G,M)$; a short exact sequence of rational $G$-modules induces a long exact sequence in cohomology through degreewise tensor exactness. ([[def-hochschild-cohomology-of-algebraic-groups]])

[F2] Every rational representation is the filtered union of its finite-dimensional subrepresentations, and Hochschild cohomology commutes with filtered colimits of coefficient modules: $H^n(G,\varinjlim_iV_i)=\varinjlim_iH^n(G,V_i)$ for directed systems of subrepresentations. (Milne, *Algebraic Groups*, Section 15(e); the colimit statement is the standard exactness of filtered colimits applied degreewise to the rational cochain complex $C^n(G,V)=V\otimes_kO(G)^{\otimes n}$: tensor products commute with filtered colimits, which are exact over a field.)

[F3] Milne's Lemma 15.14: every class $x\in H^n(G,V)$ for finite-dimensional $V$ and $n\ge1$ dies in $H^n(G,W)$ for some finite-dimensional representation $W$ containing $V$. (Milne, *Algebraic Groups*, Lemma 15.14; the vanishing input is [[lem-shapiro-lemma-and-induced-modules-are-acyclic]].)

[F4] $H^1(G,V)=0$ for every finite-dimensional representation $V$ of a linearly reductive $G$. ([[prop-linearly-reductive-iff-h1-vanishes]])

## Proof

**Given:** A field $k$, a linearly reductive affine algebraic group $G$ over $k$, a rational representation $V$, and $n\ge1$.

1.1 By [F2] the representation $V$ is the filtered union of its finite-dimensional subrepresentations $V_i$, and $H^n(G,V)=\varinjlim_iH^n(G,V_i)$. It therefore suffices to prove $H^n(G,W)=0$ for every finite-dimensional representation $W$ and every $n\ge1$; fix such a $W$. [F2]

2.1 I prove $H^n(G,W)=0$ by induction on $n\ge1$. For $n=1$ this is [F4]. For $n\ge2$, let $x\in H^n(G,W)$; by [F3] there is a finite-dimensional representation $U$ containing $W$ such that $x$ maps to zero in $H^n(G,U)$. The short exact sequence $0\to W\to U\to U/W\to0$ of finite-dimensional representations gives, by [F1], the exact sequence $H^{n-1}(G,U/W)\xrightarrow{\delta}H^n(G,W)\to H^n(G,U)$, so $x=\delta(y)$ for some $y\in H^{n-1}(G,U/W)$. By the induction hypothesis and [step 1.1] applied to the finite-dimensional representation $U/W$, the group $H^{n-1}(G,U/W)$ vanishes; hence $y=0$ and $x=0$. Therefore $H^n(G,W)=0$ for all finite-dimensional $W$ and all $n\ge1$, and by [step 1.1] the same holds for every rational representation. [F1, F3, F4, step 1.1] ∎ 