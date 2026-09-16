---
id: thm-prikry-property
kind: theorem
title: The Prikry property
status: published
origin: pipeline
deps:
  - def-prikry-forcing-and-direct-extension
  - lem-normal-measure-rowbottom-homogeneity
  - lem-forcing-monotonicity-density-and-decision
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Karagila, Forcing lecture notes, Section 9.2, Lemmas 9.11–9.12"
      url: https://karagila.org/files/Forcing-2023.pdf
---

## Statement

Let $U$ be a normal measure on $\kappa$, and let $\mathbb P_U$ be Prikry
forcing. For every $p\in\mathbb P_U$ and every forcing-language sentence
$\varphi$, there is a direct extension $q\le^*p$ which decides $\varphi$.

## Facts & Assumptions

**Given:** ZFC, $p=(s,A)$ in $\mathbb P_U$, and a fixed sentence $\varphi$ (with any name parameters fixed). The stronger-below convention is in force.

[F1] [[def-prikry-forcing-and-direct-extension]]: Conditions with a fixed stem are compatible by intersecting their measure-one upper parts.

[F2] [[lem-normal-measure-rowbottom-homogeneity]]: A family of finite-set colourings into fewer than $\kappa$ colours is simultaneously homogeneous on one measure-one set.

[F3] [[lem-forcing-monotonicity-density-and-decision]]: Conditions deciding a fixed sentence are dense, forcing persists to stronger conditions, and a sentence forced densely below a condition is forced by that condition.

## Proof

1.1 For each $n<\omega$ and $t\in[A]^n$, listed increasingly, colour $t$ by $0$ if some upper part $B_t$ makes $(s^\frown t,B_t)$ a condition forcing $\varphi$, by $1$ if some such condition forces $\neg\varphi$, and by $2$ if neither exists. Colours $0$ and $1$ cannot both apply: two witnesses have the same stem, so F1 gives a common extension, while persistence would make that extension force both alternatives. By F2, shrink $A$ to one $A'\in U$ on which every arity-colouring is constant, and set $q=(s,A')\le^*p$. [F1, F2]

2.1 Decision density below $q$ gives a condition $r\le q$ deciding $\varphi$. Let $n$ be the number of entries which the stem of $r$ adds after $s$, and let $t$ be that increasing $n$-tuple. Then $t\in[A']^n$ and its colour is $0$ or $1$, according to the decision made by $r$; it is not $2$. Write $\varepsilon\in\{0,1\}$ for this homogeneous colour at arity $n$. [F3, step 1.1]

3.1 For every $m<\omega$, the homogeneous colour at arity $n+m$ is also $\varepsilon$. Indeed, start with a witness at $t$ having colour $\varepsilon$ and choose $m$ further increasing points from its measure-one upper part intersected with $A'$; strengthening by those points preserves its decision, so the resulting $(n+m)$-tuple has colour $\varepsilon$. Homogeneity at that arity gives the claim, including $m=0$. Only finite selection is made here; the arbitrary simultaneous measure-one choices occurred inside F2 and are the precise AC use propagated from [[def-axiom-of-choice]]. [F1, F2, F3, step 2.1]

4.1 Let $a\le q$ be arbitrary and let $m$ be the number of its new stem entries after $s$. Extend that stem by $n$ points from its upper part. Its resulting $(m+n)$-tuple has colour $\varepsilon$ by step 3.1, so a same-stem witness forces the corresponding alternative. Intersecting the two upper parts as in F1 gives a common strengthening of $a$ which forces that alternative. Thus that alternative is dense below $q$, and F3 implies that $q$ itself forces it. Hence $q$ decides $\varphi$ without changing the stem of $p$. [F1, F3, step 3.1] $\square$

