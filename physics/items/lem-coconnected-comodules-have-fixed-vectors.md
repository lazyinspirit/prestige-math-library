---
id: lem-coconnected-comodules-have-fixed-vectors
kind: lemma
title: Coconnected Hopf algebras give fixed vectors in every nonzero comodule
dependency_level: 5
deps:
  - def-unipotent-algebraic-group
  - def-coconnected-hopf-algebra
  - def-rational-representation-and-comodule-of-an-affine-group-scheme
  - lem-representations-of-affine-group-schemes-are-comodules
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: published
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
      locator: Theorem 14.5(c) implies (a), printed p. 282
    - title: J. S. Milne, Algebraic Groups (v2.00, 20 December 2015 author-hosted preliminary edition)
      url: https://www.jmilne.org/math/CourseNotes/iAG200.pdf
      locator: Theorem 15.5, implication (c) to (a), printed p. 253
---
## Statement

Let $A$ be a coconnected commutative Hopf algebra over a field $k$, with filtration $C_0\subseteq C_1\subseteq\dots$ as in [[def-coconnected-hopf-algebra]]. If $V\ne0$ is an $A$-comodule with coaction $\rho:V\to V\otimes_kA$, then $V$ has a nonzero vector $v$ with $\rho(v)=v\otimes1$.

In particular, if $G$ is an affine algebraic group over $k$ whose coordinate Hopf algebra $O(G)$ is coconnected, then every nonzero rational representation of $G$ has a nonzero fixed vector; that is, $G$ is unipotent in the sense of [[def-unipotent-algebraic-group]].

## Facts & Assumptions
**Given:** A field $k$, a coconnected commutative Hopf algebra $A$ with filtration $(C_r)$, and a nonzero $A$-comodule $(V,\rho)$.

[F1] $C_0=k\cdot1_A$, $\bigcup_rC_r=A$, and $\Delta(C_r)\subseteq\sum_{i=0}^{r}C_i\otimes_kC_{r-i}$ for all $r\ge0$. ([[def-coconnected-hopf-algebra]])

[F2] A comodule structure is a $k$-linear map $\rho:V\to V\otimes_kA$ satisfying the counit identity $(\operatorname{id}\otimes\varepsilon)\rho=\operatorname{id}_V$ and the coassociativity identity $(\rho\otimes\operatorname{id})\rho=(\operatorname{id}\otimes\Delta)\rho$. The linear span of the image of $\rho$ lies in $V\otimes C_r$ for some $r$ depending on the element. ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]])

[F3] Rational representations of an affine group scheme are exactly its comodules, with fixed vectors corresponding to elements with $\rho(v)=v\otimes1$. ([[lem-representations-of-affine-group-schemes-are-comodules]], [[def-rational-representation-and-comodule-of-an-affine-group-scheme]])

## Proof

**Given:** A field $k$, a coconnected Hopf algebra $A$ with filtration $(C_r)$, and a nonzero comodule $(V,\rho)$.

1.1 For $r\ge0$ put $V_r=\{v\in V:\rho(v)\in V\otimes_kC_r\}$; these are $k$-linear subspaces of $V$ with $V_r\subseteq V_{r+1}$ and, by [F1] and [F2], $\bigcup_rV_r=V$. The space $V_0$ consists exactly of the fixed vectors: if $\rho(v)\in V\otimes C_0=V\otimes k\cdot1$ then $\rho(v)=w\otimes1$ for some $w$, and applying $\operatorname{id}\otimes\varepsilon$ gives $v=w$ by the counit identity, so $\rho(v)=v\otimes1$; conversely a fixed vector lies in $V_0$. [F1, F2]

2.1 I claim that $V_r=0$ implies $V_{r+1}=0$ whenever $r\ge0$. Let $\pi:A\to A/C_r$ be the quotient map. If $v\in V_{r+1}$, then $\rho(v)\in V\otimes C_{r+1}$, and by [F1] every element of $C_{r+1}$ maps to zero under $\pi\otimes\pi$ applied to $\Delta$, because $\Delta(C_{r+1})\subseteq C_r\otimes A+A\otimes C_r$; hence $(\operatorname{id}\otimes\pi\otimes\pi)(\operatorname{id}\otimes\Delta)\rho(v)=0$. By coassociativity [F2] this is $(\operatorname{id}\otimes\pi\otimes\pi)(\rho\otimes\operatorname{id})\rho(v)=0$. Choose a finite expansion $(\operatorname{id}\otimes\pi)\rho(v)=\sum_iv_i\otimes\bar a_i$ with the $v_i$ linearly independent, by taking a finite basis of the span of the first factors of any tensor expansion; then the last identity reads $\sum_i(\operatorname{id}\otimes\pi)\rho(v_i)\otimes\bar a_i=0$. The map $(\operatorname{id}\otimes\pi)\rho$ is injective on $V$ when $V_r=0$, since its kernel is exactly $V_r$; therefore the elements $(\operatorname{id}\otimes\pi)\rho(v_i)$ are linearly independent, so each $\bar a_i=0$, that is, $(\operatorname{id}\otimes\pi)\rho(v)=0$ and hence $\rho(v)\in V\otimes C_r$, i.e. $v\in V_r=0$. Thus $V_{r+1}=0$. [F1, F2, step 1.1]

3.1 Since $V\ne0$, [F2] gives an element $v\ne0$ with $\rho(v)\in V\otimes C_r$ for some $r$, so $V_r\ne0$. Iterating [step 2.1] downwards, $V_0\ne0$: if $V_0=0$ then $V_1=0$, then $V_2=0$, and by induction $V_r=0$ for all $r$, contradicting $V_r\ne0$. By [step 1.1] any nonzero element of $V_0$ is a nonzero fixed vector, which proves the first assertion. The group-theoretic form follows from the comodule dictionary [F3], since for $G$ with $O(G)=A$ the rational representations of $G$ are exactly the $A$-comodules and fixed vectors are the elements with coaction $v\otimes1$. [F3, step 1.1, step 2.1] ∎ 