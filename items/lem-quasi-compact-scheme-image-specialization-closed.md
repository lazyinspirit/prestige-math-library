---
id: lem-quasi-compact-scheme-image-specialization-closed
kind: lemma
title: A quasi-compact image stable under specialization is closed
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-axiom-of-choice
  - def-morphism-of-schemes
  - def-morphism-ringed-spaces
  - def-quasi-compact-and-quasi-separated-morphism
  - def-quasi-compact-and-quasi-separated-scheme
  - def-scheme
  - def-affine-open-subscheme
  - cor-affine-scheme-quasi-compact
  - def-affine-scheme-spectrum
  - def-principal-distinguished-subset-of-spectrum
  - def-specialisation-and-generic-point
  - thm-affine-scheme-ring-anti-equivalence
  - def-morphism-affine-schemes-from-ring-map
  - def-localisation-at-a-prime-ideal
  - def-multiplicative-subset-and-localisation
  - thm-localisation-equivalence-and-ring-laws
  - prop-localisation-zero-equality-and-kernel-criteria
  - thm-proper-ideal-contained-in-maximal-ideal
  - cor-maximal-ideals-are-prime
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Schemes, Lemma 26.19.7 (tag 05JL)"
      url: "https://stacks.math.columbia.edu/tag/05JL"
    - title: "The Stacks Project, Commutative Algebra, Lemma 10.41.5 (tag 00HY)"
      url: "https://stacks.math.columbia.edu/tag/00HY"
---

## Statement

Assume AC. For a quasi-compact morphism $g:Z\to Y$, the image $g(Z)$ is closed
if and only if it is stable under specialization in $Y$.

## Facts & Assumptions

**Given:** AC and a quasi-compact morphism of schemes $g:Z\to Y$.

[F1] A morphism $g$ is quasi-compact when the inverse image of every quasi-compact open of $Y$ is quasi-compact. ([[def-quasi-compact-and-quasi-separated-morphism]])

[F2] Every affine scheme is quasi-compact. ([[cor-affine-scheme-quasi-compact]])

[F3] Every point of a scheme has an affine open neighbourhood. ([[def-scheme]])

[F4] A scheme morphism is a morphism of locally ringed spaces, hence has a continuous underlying map; an open subset of a scheme carries its open subscheme structure. ([[def-morphism-of-schemes]], [[def-morphism-ringed-spaces]], [[def-affine-open-subscheme]])

[F5] A scheme is quasi-compact when its underlying topological space is quasi-compact, so every open cover of it has a finite subcover. ([[def-quasi-compact-and-quasi-separated-scheme]])

[F6] The points of $\operatorname{Spec}A$ are prime ideals, and its basic opens are $D(f)=\{\mathfrak p:f\notin\mathfrak p\}$. ([[def-affine-scheme-spectrum]])

[F7] $D(f)=\{\mathfrak p\in\operatorname{Spec}(R):f\notin\mathfrak p\}$. ([[def-principal-distinguished-subset-of-spectrum]])

[F8] A point $y$ is a specialization of $x$ when $y\in\overline{\{x\}}$. ([[def-specialisation-and-generic-point]])

[F9] A morphism $\operatorname{Spec}B\to\operatorname{Spec}A$ corresponds to a ring map $\varphi:A\to B$. ([[thm-affine-scheme-ring-anti-equivalence]])

[F10] A homomorphism $\varphi:A\to B$ induces the contraction map $\operatorname{Spec}B\to\operatorname{Spec}A$, $\mathfrak q\mapsto\varphi^{-1}\mathfrak q$. ([[def-morphism-affine-schemes-from-ring-map]])

[F11] For a prime $\mathfrak p\subset A$, $A\setminus\mathfrak p$ is multiplicative, and its image under $\varphi$ is multiplicative in $B$. ([[def-localisation-at-a-prime-ideal]], [[def-multiplicative-subset-and-localisation]])

[F12] The localization $S^{-1}B$ is a commutative ring, and every $s/1$ for $s\in S$ is a unit. ([[thm-localisation-equivalence-and-ring-laws]])

[F13] A localization $S^{-1}B$ is the zero ring exactly when $0\in S$. ([[prop-localisation-zero-equality-and-kernel-criteria]])

[F14] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F15] Under AC, every proper ideal of a nonzero commutative ring is contained in a maximal ideal. ([[thm-proper-ideal-contained-in-maximal-ideal]])

[F16] Every maximal ideal of a commutative ring is prime. ([[cor-maximal-ideals-are-prime]])

## Proof

**Proof technique:** direct.

1.1 If $g(Z)$ is closed and $x\in g(Z)$, then $\overline{\{x\}}\subseteq g(Z)$. Thus every specialization of a point of $g(Z)$ is again in $g(Z)$, so the image is stable under specialization. [F8]

1.2 Assume that $g(Z)$ is stable under specialization, and let $y\in\overline{g(Z)}$. Choose an affine open $U=\operatorname{Spec}A\subseteq Y$ containing $y$ by [F3]. Since $U$ is open, every open neighbourhood of $y$ in $U$ is also open in $Y$; therefore $y$ lies in the closure in $U$ of $g(Z)\cap U$. [F3, given]

2.1 The affine open $U$ is quasi-compact by [F2], so [F1] makes $Z_U=g^{-1}(U)$ quasi-compact. It is an open subscheme of $Z$ by [F4]. Its affine open neighbourhoods cover it by [F3], and [F5] gives a finite affine open cover $Z_U=\bigcup_{i=1}^n W_i$; empty members may be discarded. [F1, F2, F3, F4, F5, step 1.2]

3.1 The image $g(Z)\cap U$ is the finite union of the images $g(W_i)$. Some $g(W_i)$ has $y$ in its closure in $U$: otherwise, for each of the finitely many $i$ there would be an open neighbourhood of $y$ disjoint from $g(W_i)$, and the finite intersection of those neighbourhoods would miss their union, contradicting step 1.2. Fix such an $i$ and write $W_i=\operatorname{Spec}B$. By [F9] the restricted morphism is induced by a ring map $\varphi:A\to B$, and its image in $U$ has $y$ in its closure. [F3, F9, step 1.2, step 2.1]

4.1 Let $\mathfrak p\subset A$ be the prime corresponding to $y$, and put $S=\varphi(A\setminus\mathfrak p)$. Suppose $S^{-1}B=0$. By [F13], $0\in S$, so $\varphi(f)=0$ for some $f\notin\mathfrak p$. Every prime $\mathfrak q\subset B$ then contains $\varphi(f)$, and [F10] shows its image lies outside $D(f)$. But $D(f)$ is a basic open neighbourhood of $y$ by [F6, F7], contradicting that $y$ lies in the closure of the image of $\operatorname{Spec}B$. Thus $S^{-1}B$ is nonzero. [F6, F7, F10, F11, F13, step 3.1, algebra]

5.1 The zero ideal of the nonzero commutative ring $S^{-1}B$ is proper. By [F14, F15], AC supplies a maximal ideal $\mathfrak m$ of $S^{-1}B$, which is prime by [F16]. Its contraction $\mathfrak q\subset B$ along $B\to S^{-1}B$ is prime by [F10]. It avoids $S$, since each $s/1$ with $s\in S$ is a unit by [F12] and a proper prime ideal contains no unit. Hence $\mathfrak p':=\varphi^{-1}(\mathfrak q)$ is a prime contained in $\mathfrak p$: every $a\notin\mathfrak p$ has $\varphi(a)\in S$ and so is not in $\mathfrak q$. [F10, F12, F14, F15, F16, step 4.1, algebra]

6.1 The point $\mathfrak p'$ lies in the image of $\operatorname{Spec}B$. Since $\mathfrak p'\subseteq\mathfrak p$, every basic open $D(f)$ containing $\mathfrak p$ also contains $\mathfrak p'$, by [F6, F7]. Thus $\mathfrak p\in\overline{\{\mathfrak p'\}}$ in $U$, so $y$ is a specialization of the image point in $Y$ as well: every open neighbourhood of $y$ in $Y$ restricts to one in the open set $U$. Stability under specialization then gives $y\in g(Z)$. [F6, F7, F8, step 5.1]

7.1 Every point of $\overline{g(Z)}$ belongs to $g(Z)$ by steps 1.2--6.1, so $g(Z)$ is closed. Together with step 1.1 this proves both directions. The empty source has empty image and satisfies both conditions; if an affine chart is the zero ring it is empty and can be discarded. A zero localization in step 4.1 is excluded by the closure argument. If $A$ is a field, then $\mathfrak p=(0)$ is its only prime, so the inclusion $\mathfrak p'\subseteq\mathfrak p$ in step 5.1 is equality and the same proof handles a one-point affine target. The only AC use is prime existence in step 5.1; only a finite affine cover and a single chart from its finite list are used. [step 1.1, step 1.2, step 2.1, step 4.1, step 5.1, step 6.1] ∎
