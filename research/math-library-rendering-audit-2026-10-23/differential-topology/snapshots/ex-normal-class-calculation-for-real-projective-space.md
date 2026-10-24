---
id: ex-normal-class-calculation-for-real-projective-space
kind: example
title: "Normal-class calculation for real projective space"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["thm-real-projective-space-stiefel-whitney-nonimmersion-obstruction", "lem-the-inverse-of-one-plus-the-generator-in-a-truncated-mod-two-polynomial-ring", "thm-mod-two-real-projective-bundle-theorem", "cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms", "def-real-projective-bundle-and-tautological-line", "def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold", "def-axiom-of-choice"]
justified_by: []
dependency_level: 6
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Annals of Mathematics Studies 74, Princeton University Press; complete text)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "SS4, printed pp. 43-48 (Lemma 4.4, Theorem 4.5, Corollary 4.6, the immersion paragraph, Theorem 4.8); SS11, printed pp. 119-136 (Theorem 11.3, Corollary 11.12, Wu's formula and Corollary 11.15); SS15, printed pp. 173-178 (Theorem 15.3, Corollary 15.5, Corollary 15.8)"
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (lecture notes, 30 June 2022; complete 46-page text)"
      url: "https://math.stanford.edu/~ralph/immersions-final.pdf"
      locator: "SS1-3.1, PDF pp. 4-13: Proposition 1, Theorem 2 (Hirsch-Smale), Corollary 3 (k-dimensional inverse of the tangent bundle), Theorems 4-5, Corollary 10 (normal Stiefel-Whitney nonimmersion test) and the RP^{2^k} example, Theorem 11 (Massey)"
    - title: "Arkadiy Skopenkov, Embedding and Knotting of Manifolds in Euclidean Spaces (arXiv:math/0604045)"
      url: "https://arxiv.org/pdf/math/0604045"
      locator: "SS1-2, article pp. 1-13; the subsection 'The Whitney obstruction' on article pp. 11-12 (modulo 2 and integral Whitney obstructions, normal Stiefel-Whitney classes, Pontryagin classes p_i as embedding obstructions), and the knotting boundary in SS2-3 and SS5"
---

## Example

Assume AC. In $H^*(\mathbb{RP}^9;\mathbb F_2)=\mathbb F_2[a]/(a^{10})$, the normal total class is $$\bar w(\mathbb{RP}^9)=(1+a)^{-10}=\sum_{i\in S_9}a^i=1+a^2+a^4+a^6,$$ because $S_9=\{0,2,4,6\}$: these are exactly the integers $0\le i\le9$ whose binary digits have no overlap with $9=1001_2$. The highest nonzero term is $\bar w_6(\mathbb{RP}^9)=a^6\neq0$, so $\mathbb{RP}^9$ does not immerse in $\mathbb R^{9+k}$ for $k\le5$, i.e. not in $\mathbb R^{14}$, in agreement with the classical computation. For the small case $\mathbb{RP}^4$ one gets $\bar w(\mathbb{RP}^4)=(1+a)^{-5}=1+a+a^2+a^3$, so $\mathbb{RP}^4$ does not immerse in $\mathbb R^5$ or $\mathbb R^6$.

## Facts & Assumptions

**Given:** The rings $H^*(\mathbb{RP}^m;\mathbb F_2)=\mathbb F_2[a]/(a^{m+1})$ for $m=9$ and $m=4$, and AC.

[F1] For every $m\ge1$ the normal total class is $\bar w(\mathbb{RP}^m)=(1+a)^{-(m+1)}=\sum_{i\in S_m}a^i$ with $S_m=\{0\le i\le m:i\wedge m=0\}$ and digitwise AND, and the highest nonzero term is $\bar w_{d(m)}=a^{d(m)}$ with $d(m)=\max S_m$; $\mathbb{RP}^m$ then does not immerse in $\mathbb R^{m+k}$ for any $k<d(m)$ ([[thm-real-projective-space-stiefel-whitney-nonimmersion-obstruction]], [[lem-the-inverse-of-one-plus-the-generator-in-a-truncated-mod-two-polynomial-ring]], [[def-normal-stiefel-whitney-and-pontryagin-classes-of-a-closed-manifold]]).

[F2] For the trivial rank-$(m+1)$ bundle over the one-point base the projective-bundle theorem gives $P(\varepsilon^{m+1})=\mathbb{RP}^m$ and the ring $H^*(\mathbb{RP}^m;\mathbb F_2)=\mathbb F_2[a]/(a^{m+1})$ free on $1,a,\dots,a^m$, the relation classes $c_i\in H^i(\mathrm{pt};\mathbb F_2)$ vanishing for $i\ge1$ by the dimension axiom for singular cohomology; hence the powers $1,a,\dots,a^m$ are linearly independent, so a coefficient displayed as $1$ gives a nonzero class ([[thm-mod-two-real-projective-bundle-theorem]], [[cor-singular-cohomology-satisfies-the-eilenberg-steenrod-cohomology-axioms]], [[def-real-projective-bundle-and-tautological-line]]). AC is the hypothesis of the suppliers ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

1.1 For $m=9=1001_2$ the condition $i\wedge 9=0$ for $0\le i\le9$ excludes exactly the binary digit positions $0$ and $3$, so $i$ ranges over the numbers with digits only among positions $1$ and $2$, that is $i\in\{0,2,4,6\}$; hence $S_9=\{0,2,4,6\}$ and, by [F1], $$\bar w(\mathbb{RP}^9)=(1+a)^{-10}=1+a^2+a^4+a^6.$$ [F1]

2.1 The top nonzero term is $\bar w_6(\mathbb{RP}^9)=a^6$, nonzero by [F2]; hence $d(9)=6$ and [F1] forbids an immersion of $\mathbb{RP}^9$ into $\mathbb R^{9+k}$ for every $k<6$, in particular $k=5$: there is no immersion into $\mathbb R^{14}$. [F1, F2, step 1.1]

3.1 For $m=4=100_2$ the condition $i\wedge4=0$ for $0\le i\le4$ allows exactly $i\in\{0,1,2,3\}$, so $S_4=\{0,1,2,3\}$, $d(4)=3$, and $$\bar w(\mathbb{RP}^4)=(1+a)^{-5}=1+a+a^2+a^3.$$ The top nonzero term is $\bar w_3=a^3\neq0$, so $\mathbb{RP}^4$ does not immerse in $\mathbb R^{4+k}$ for $k<3$, in particular not in $\mathbb R^{5}$ or $\mathbb R^{6}$. The computations concern the class calculations only; no assertion is made about higher-codimension immersions or about embeddings. [F1, F2, step 1.1] ∎
