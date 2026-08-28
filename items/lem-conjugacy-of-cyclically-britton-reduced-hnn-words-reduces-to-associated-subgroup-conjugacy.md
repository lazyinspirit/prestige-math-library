---
id: lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy
kind: lemma
title: "Conjugacy between cyclically Britton-reduced HNN words reduces to base-group conjugacy after cyclic permutation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cyclically-britton-reduced-hnn-word,
       lem-equivalent-hnn-presentation-with-associated-subgroups,
       lem-cyclic-permutations-of-a-cyclically-britton-reduced-hnn-word-are-conjugate,
       thm-hnn-normal-form-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
---

## Statement

Let $u$ and $v$ be cyclically Britton-reduced HNN words of positive
stable-letter length in the associated-subgroup notation. If $u$ and $v$ are
conjugate in the HNN extension, then some cyclic permutation $u'$ of $u$ is
conjugate to $v$ by an element of the base group $A$.

## Facts & Assumptions

**Given:** The cyclically Britton-reduced words $u$ and $v$ of positive stable-letter length.

[L1] A cyclically Britton-reduced word has no pin across its two ends. ([[def-cyclically-britton-reduced-hnn-word]])

[L2] Cyclic permutations of a positive-length cyclically Britton-reduced word are conjugate to it and remain cyclically Britton-reduced. ([[lem-cyclic-permutations-of-a-cyclically-britton-reduced-hnn-word-are-conjugate]])

[L3] Every element has a unique transversal normal form relative to chosen
transversals. ([[thm-hnn-normal-form-theorem]])

## Proof

**Proof technique:** direct.

1.1 We first record the boundary calculation used below. Let $p=a_0t^{\varepsilon_1}a_1\cdots t^{\varepsilon_n}a_n$ be cyclically Britton-reduced with $n>0$, and write a positive-length Britton-reduced conjugator as $y=bt^\delta z$, where $|z|_t=|y|_t-1$. At the two interfaces with $p$ in $y^{-1}py$, only $t^\delta$ and $t^{-\delta}$ from this first syllable of $y$ can participate. A pin at the $y^{-1},p$ interface has the literal form $t^{-\delta}(b^{-1}a_0)t^{\varepsilon_1}$ with $\varepsilon_1=\delta$; a pin at the $p,y$ interface has the literal form $t^{\varepsilon_n}(a_nb)t^\delta$ with $\varepsilon_n=-\delta$. In either case the relation $tct^{-1}=\phi(c)$ or its inverse removes the displayed pair. The untouched copy of $t^\delta$ becomes the opposite end syllable, and a direct substitution of the same relation shows that the remaining central word is a base-group conjugate of the corresponding literal cyclic permutation $p_1$ of $p$. Absorb that base conjugacy into $z$ to obtain $y^{-1}py=y_1^{-1}p_1y_1$ with $|y_1|_t=|y|_t-1$. The two signs cover the two associated subgroups, and [L1] and [L2] show that $p_1$ is again cyclically Britton-reduced. If neither interface is a pin, the displayed word is Britton-reduced, because its three factors already are, and it has stable-letter length $|p|_t+2|y|_t$. [L1, L2, algebra]

2.1 Let $n=|u|_t$ and $r=|v|_t$. Among all equations $y^{-1}py=q$, with $p$ a cyclic permutation of $u$, $q$ a cyclic permutation of $v$, and $y$ Britton-reduced, choose one minimizing $|y|_t$; the original conjugacy supplies such an equation. If $|y|_t>0$ and a boundary pin occurs, step 1.1 shortens $y$ while rotating $p$, contrary to the choice. If no pin occurs, step 1.1 gives a Britton-reduced representative of $q$ of length $n+2|y|_t$. Normalizing a Britton-reduced word by [L3] only transfers associated-subgroup coefficients and performs no stable-letter cancellation, so uniqueness in [L3] gives $r=n+2|y|_t$. Apply the same alternatives to $p=yqy^{-1}$. A boundary pin now shortens the same chosen conjugator while rotating $q$, again contradicting minimality; no boundary pin gives $n=r+2|y|_t$, incompatible with the preceding equality. Thus $|y|_t=0$, and [L3] also gives $n=r$. [L1, L2, L3, step 1.1, given, choose, algebra]

2.2 Now keep $v$ fixed. Among all equations $x^{-1}u'x=v$, with $u'$ a cyclic permutation of $u$ and $x$ Britton-reduced, choose one minimizing $|x|_t$. Such equations exist by the hypothesis. If $|x|_t>0$ and a boundary pin occurs, step 1.1 produces $x_1^{-1}u''x_1=v$ with $u''$ a cyclic permutation of $u$ and $|x_1|_t=|x|_t-1$, contradicting the choice. [L1, L2, step 1.1, given, choose]

3.1 If instead no boundary pin occurs, step 1.1 makes $x^{-1}u'x$ a Britton-reduced word of length $n+2|x|_t$. It represents $v$, whose Britton-reduced length is $n$ by step 2.1. As in step 2.1, [L3] makes these lengths equal, a contradiction. Hence $|x|_t=0$, so $x\in A$, and the chosen cyclic permutation $u'$ is conjugate to $v$ by a base-group element as required. [L3, step 1.1, step 2.1, step 2.2, contradiction] ∎
