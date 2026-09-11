---
id: "ex-ping-pong-for-two-loxodromics"
kind: "example"
title: "Ping pong for two loxodromics"
deps: ["def-free-group", "thm-reduced-words-form-the-free-group"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Canary Theorem 7.3 pp.32–33"
      url: "https://websites.umich.edu/~canary/lecnotespublic.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

If independent loxodromics satisfy the four uniform pole-neighbourhood inclusions, sufficiently large positive powers generate a rank-two free subgroup. Explicitly, it suffices that a group acts on a set $Z$, with elements $g,h$ and four supplied pairwise disjoint nonempty sets $U_g^+,U_g^-,U_h^+,U_h^-$, and an integer $N\ge1$ such that for every integer $n\ge N$,
$$g^n(Z\setminus U_g^-)\subseteq U_g^+,\quad g^{-n}(Z\setminus U_g^+)\subseteq U_g^-,\quad h^n(Z\setminus U_h^-)\subseteq U_h^+,\quad h^{-n}(Z\setminus U_h^+)\subseteq U_h^-.$$
Then $\langle g^p,h^q\rangle$ is free on those two elements for every $p,q\ge N$. The geometric existence of these domains and inclusions is a hypothesis of this example.

## Facts & Assumptions

**Given:** The action, elements, four domains and four displayed uniform inclusions.

[F1] The free-group universal property is defined in [[def-free-group]], and its reduced-word realization is proved in [[thm-reduced-words-form-the-free-group]].

## Verification

1.1 Fix integers $p,q\ge N$ and set $A=g^p$, $B=h^q$. For letters $s\in\{A,A^{-1},B,B^{-1}\}$ write $D_s$ for the corresponding one of the four domains. The assumed inclusions say precisely $s(Z\setminus D_{s^{-1}})\subseteq D_s$. Every $D_s$ is nonempty, and distinct letter domains are disjoint. [given]

2.1 Let $w=s_1\cdots s_l$ be any nonempty reduced word in these formal letters. Choose a letter $t$ different from both $s_1$ and $s_l^{-1}$; among four letters at most two are excluded. Choose $z\in D_t$. Apply the word to $z$ from right to left. Since $t\ne s_l^{-1}$, the first application sends $z$ into $D_{s_l}$. Inductively, a point in $D_{s_{j+1}}$ lies outside $D_{s_j^{-1}}$ because reducedness means $s_{j+1}\ne s_j^{-1}$ and the domains are disjoint. Thus applying $s_j$ sends it into $D_{s_j}$. Finally $wz\in D_{s_1}$, disjoint from the initial domain $D_t$. Therefore $wz\ne z$, so the group element represented by $w$ is not the identity. This works also for $l=1$. [step 1.1, given]

3.1 By F1 there is a homomorphism from the reduced-word free group on two formal generators to the ambient group sending them to $A,B$. Its image is $\langle A,B\rangle$: every product of $A,B$ and their inverses is an image, and such products form that subgroup. Step 2.1 shows its kernel has no nonempty reduced word; by F1 the empty word is the only remaining element. The map is therefore injective and identifies its image with the rank-two free group. For instance the reduced commutator word $ABA^{-1}B^{-1}$ is nonidentity by exactly the same domain test, rather than by an assumed independence theorem. Only one point from one specified nonempty domain was needed for each word, so AC is not used. [step 2.1, F1] ∎
