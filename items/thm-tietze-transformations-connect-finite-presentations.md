---
id: thm-tietze-transformations-connect-finite-presentations
kind: theorem
title: "Two finite presentations define isomorphic groups if and only if a finite sequence of Tietze transformations and inverses connects them"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-tietze-transformations, prop-tietze-transformations-preserve-presented-groups, prop-equality-of-words-in-a-presentation, def-relators-relations-and-finite-presentations, prop-canonical-quotient-map, thm-induction-principle]
justified_by: []
aliases: [thm-tietzes-theorem-for-finite-presentations]
landmark: true
proof_strategy: constructive
verification:
  audited: 2026-08-11
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nicholas Touikan, An Introduction to Combinatorial and Geometric Group Theory, Theorem 1.6.2"
      url: "https://ntouikan.ext.unb.ca/MATH6022/IntroCGGT/html_output/sec_homs_tietze.html"
pipeline_run: null
---

## Statement

Let $\mathcal P=\langle X\mid R\rangle$ and
$\mathcal Q=\langle Y\mid S\rangle$ be finite presentations. They present
isomorphic groups if and only if a finite sequence of the transformations and
legal inverses of [[def-tietze-transformations]] connects $\mathcal P$ to
$\mathcal Q$.

## Facts & Assumptions

**Given:** Finite presentations $\mathcal P=\langle X\mid R\rangle$ and $\mathcal Q=\langle Y\mid S\rangle$.

[L1] Each Tietze transformation preserves the isomorphism type of the presented group ([[prop-tietze-transformations-preserve-presented-groups]]).

[L2] In $\langle Z\mid T\rangle$, words $u$ and $v$ represent the same element if and only if $u^{-1}v\in\langle\!\langle T\rangle\!\rangle$ ([[prop-equality-of-words-in-a-presentation]]).

[L3] The canonical map from a group to a quotient group is surjective ([[prop-canonical-quotient-map]]).

[L4] If a property $P$ satisfies $P(0)$ and $P(n)\Rightarrow P(n+1)$ for every natural number $n$, then $P(n)$ holds for every $n\in\mathbb N$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** constructive.

1.1 If a finite sequence of Tietze transformations connects $\mathcal P$ to $\mathcal Q$, composing the isomorphisms supplied by [L1] along that sequence gives an isomorphism between the groups they present; the zero-move case is the identity isomorphism. [L1, L4]

1.2 Conversely, fix an isomorphism $\phi:G_{\mathcal P}\to G_{\mathcal Q}$. If $X\cap Y\neq\varnothing$, first apply one renaming transformation to $\mathcal Q$, replacing $Y$ by a finite set disjoint from $X$, and compose $\phi$ with the induced isomorphism. Write $\mathcal Q=\langle Y\mid S\rangle$ for this renamed presentation; after connecting $\mathcal P$ to it, the inverse renaming returns to the original $\mathcal Q$. By surjectivity in [L3], for each $x\in X$ choose a word $v_x(Y)$ representing $\phi([x])$, and for each $y\in Y$ choose a word $w_y(X)$ representing $\phi^{-1}([y])$; only the finitely many choices indexed by $X\cup Y$ are made, successively by [L4]. [L1, L3, L4, given, choose]

2.1 Starting from $\mathcal P$, add every $y\in Y$ by the dictionary relation $d_y:=y^{-1}w_y(X)$. In the resulting presentation, $v_x(Y)$ and $x$ represent the same element because eliminating the new letters sends $v_x(Y)$ to the representative of $\phi^{-1}(\phi([x]))=[x]$; hence [L2] makes $d_x:=x^{-1}v_x(Y)$ a redundant relator. Add every $d_x$, and then add every $s\in S$, which is redundant because eliminating $Y$ evaluates it as $\phi^{-1}([s])=1$. This is a finite legal sequence from $\mathcal P$ to $\mathcal C:=\langle X\cup Y\mid R\cup S\cup\{d_x:x\in X\}\cup\{d_y:y\in Y\}\rangle$. [L2, step 1.2, L4, construct]

2.2 Starting from $\mathcal Q$, add every $x\in X$ by the dictionary relation $d_x=x^{-1}v_x(Y)$. In that presentation, $w_y(X)$ and $y$ represent the same element because eliminating $X$ evaluates $w_y(X)$ as $\phi(\phi^{-1}([y]))=[y]$, so [L2] licenses adding every $d_y$; each $r\in R$ is then redundant because eliminating $X$ evaluates it as $\phi([r])=1$. Thus another finite legal sequence runs from $\mathcal Q$ to the same presentation $\mathcal C$. [L2, step 1.2, L4, construct]

3.1 Reverse the sequence of step 2.2. Each relator is deleted in reverse order while the earlier relators that originally forced it remain, so the redundant-relator inverse condition is satisfied. Each dictionary generator is deleted only after every later-added relator containing it has been removed, leaving that generator in its dictionary relation alone, so the dictionary inverse condition is satisfied. Hence there is a finite legal sequence from $\mathcal C$ to the renamed $\mathcal Q$. Concatenate it with step 2.1 and, when step 1.2 used a renaming, append that renaming's legal inverse. The resulting finite sequence connects the original $\mathcal P$ to the original $\mathcal Q$. [step 1.2, step 2.1, step 2.2, L4]

4.1 Step 1.1 proves the forward implication and steps 1.2 through 3.1 construct the reverse implication, so the two conditions are equivalent. [step 1.1, step 3.1, discharge-construct] ∎

## Remarks

The finiteness hypothesis is used to make the representative selections and the additions in steps 1.2 through 2.2 into finite sequences. No choice principle is used: each selection is from a single nonempty fibre, repeated a finite number of times.
