---
id: prop-conjugacy-classes-meet-a-fixed-maximal-torus-in-weyl-orbits
kind: proposition
title: Conjugacy classes meet T in Weyl orbits
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-every-element-of-a-compact-connected-lie-group-lies-in-a-maximal-torus, thm-conjugacy-of-maximal-tori, def-weyl-group-of-a-compact-connected-lie-group, thm-cartans-closed-subgroup-theorem, def-countable-choice, def-axiom-of-choice, def-torus-and-maximal-torus-in-a-compact-lie-group]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter IV §5, conjugacy classes and the analytic Weyl group"
    - title: "Brian Conrad and Aaron Landesman, Compact Lie Groups"
      url: "https://math.stonybrook.edu/~conrad/210CPage/handouts/lie_groups_notes.pdf"
      locator: "§12"
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement

Assume the Axiom of Choice. Let $G$ be a compact connected Lie group with
maximal torus $T$. Every conjugacy class of $G$ meets $T$, and two elements
$t,t'\in T$ are conjugate in $G$ exactly when $t'=w\cdot t$ for some element
$w$ of the Weyl group $W(G,T)=N_G(T)/T$.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice, a compact connected Lie group $G$, a maximal torus $T\le G$, and $t,t'\in T$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]]; it enters through the covering theorem [L1], the conjugacy theorem [L2], and the closed-subgroup theorem used in [L4] via its countable-choice hypothesis.

[L1] Every element of $G$ lies in a maximal torus ([[thm-every-element-of-a-compact-connected-lie-group-lies-in-a-maximal-torus]]).

[L2] Any two maximal tori of $G$ are conjugate ([[thm-conjugacy-of-maximal-tori]]).

[L3] The Weyl group is $W(G,T)=N_G(T)/T$, and $w=gT$ acts on $T$ by $(gT)\cdot t=gtg^{-1}$, which lies in $T$ because $g$ normalizes $T$; the action is well defined ([[def-weyl-group-of-a-compact-connected-lie-group]]).

[L4] For a fixed $x\in G$, the centralizer $C_G(x)$ is closed because it is the equalizer of the continuous maps $g\mapsto gx$ and $g\mapsto xg$. Under countable choice it is therefore an embedded Lie subgroup by [[thm-cartans-closed-subgroup-theorem]], and its identity component $C_G(x)^0$ is a compact connected Lie group. Every connected subgroup of $C_G(x)$ containing the identity lies in this identity component ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Let $x\in G$. By [L1] there is a maximal torus $M$ with $x\in M$, and by [L2] there is $g\in G$ with $M=gTg^{-1}$; then $g^{-1}xg\in T$, so the conjugacy class of $x$ meets $T$. [L1, L2]

1.2 Suppose $t'=gtg^{-1}$ for some $g\in G$. Put $M:=gTg^{-1}$, a maximal torus containing $t'$. Both $T$ and $M$ lie in $C_G(t')$ and, being connected and containing the identity, lie in the compact connected Lie group $H:=C_G(t')^0$ by [L4]. A torus of $H$ properly containing $T$ or $M$ would also be a torus of $G$ properly containing a maximal torus of $G$; hence $T$ and $M$ are maximal tori of $H$. [L4]

2.1 By [L2] applied to the compact connected Lie group $H$, there is $h\in H$ with $hTh^{-1}=M=gTg^{-1}$. Then $n:=g^{-1}h\in N_G(T)$, and since $h$ centralizes $t'$ we obtain $t'=h^{-1}t'h=h^{-1}(gtg^{-1})h=n^{-1}t\,n$; hence $t'$ lies in the $W(G,T)$-orbit of $t$ by [L3]. [L2, L3, step 1.2]

3.1 Conversely, if $t'=ntn^{-1}$ for some $n\in N_G(T)$, then $t'=ntn^{-1}$ is conjugate to $t$ and lies in $T$; hence conjugacy in $G$ between points of $T$ is exactly the orbit relation of the Weyl group action, and by step 1.1 every conjugacy class meets $T$. The Axiom of Choice entered through [L1], [L2], and the countable-choice closed-subgroup input in [L4]. [A1, L3, step 1.1, step 2.1] ∎
