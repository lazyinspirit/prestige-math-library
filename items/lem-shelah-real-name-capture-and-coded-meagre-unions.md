---
id: lem-shelah-real-name-capture-and-coded-meagre-unions
kind: lemma
title: Real names are captured and coded meagre unions are absorbed
status: draft
origin: pipeline
deps: [thm-shelah-ch-omega-one-sweet-construction, thm-countable-subsets-of-omega-one-are-bounded, thm-forcing-theorem, lem-forcing-monotonicity-density-and-decision, lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets, thm-canonical-definable-global-well-order-of-l, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Main Lemma 7.14 and Claim 7.15, pp. 42-43"}
---

## Statement

In the generic extension by the final algebra $B$ of the CH-length construction,
every name for a real, for a Borel code, or for a countable sequence of ordinals
is equivalent to a name over some $B_\alpha$. Consequently, for every such
sequence $s$, a later $\mathrm{UM}$ quotient makes the union of all meagre Borel
sets coded in $V[s]$ meagre. When the construction starts over $L$, the choices
made by the generic on the countably many deciding antichains for $s$ are coded
by one real, while the ground-model name and antichain enumerations have ordinal
codes; hence $s$ is definable from that real and finitely many ordinals.

## Facts & Assumptions

**Given:** A $B$-generic filter $G$ over a ground model $V$, the CH-length chain $(B_\alpha)_{\alpha<\omega_1}$ of [[thm-shelah-ch-omega-one-sweet-construction]] with union $B$, and a $B$-name $\dot s$ for a real, a Borel code, or a countable sequence of ordinals.

[F1] [[thm-shelah-ch-omega-one-sweet-construction]]: the sweetness-model chain is continuous, each $B_\alpha=BA(P_\alpha)$ is a complete subalgebra of $B$, the final identity is $B=\bigcup_{\alpha<\omega_1}B_\alpha$, and $B$ is ccc. Arbitrarily late successor quotients carry the canonical UM presentation; in particular, every antichain in $B$ is countable.

[F2] [[thm-forcing-theorem]]: forcing is definable and satisfies the truth lemma.

[F3] [[lem-forcing-monotonicity-density-and-decision]]: for each formula the conditions deciding it are dense; with [[def-axiom-of-choice]], one may extend a maximal antichain inside each such dense set.

[F4] [[thm-countable-subsets-of-omega-one-are-bounded]] with [[def-axiom-of-choice]]: a countable set of ordinals below $\omega_1$ is bounded, and the countably many birth stages of the data of a name can be enumerated.

[F5] [[lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets]]: a $\mathrm{UM}$ quotient absorbs all ground-model closed nowhere-dense sets into a single coded meagre envelope.

[F6] [[thm-canonical-definable-global-well-order-of-l]]: in a constructible ground every forcing name, antichain and enumeration used below has a canonical ordinal code; the same well-order is computed internally in $L$.

## Proof

1.1 Capture of reals: let $\dot x$ be a $B$-name for a real. For each $n<\omega$, [F3] makes the set of conditions deciding the value of $\dot x(n)$ dense; use Choice to take a maximal antichain $A_n$ in that dense set, labelled by the decided value $0$ or $1$. Each $A_n$ is countable by the ccc in [F1]. Thus $A=\bigcup_{n<\omega}A_n$ is countable, and the set of stages in which its members occur is countable and bounded by some $\alpha<\omega_1$ by [F4]. Since $B_\alpha$ is complete in $B$, every $A_n$ remains maximal in $B_\alpha$. The labelled antichains therefore define a $B_\alpha$-name $\dot x_\alpha$; for every generic $G$, the unique member of $A_n\cap G$ gives both $\dot x_G(n)$ and $(\dot x_\alpha)_{G\cap B_\alpha}(n)$, so the two names have the same value coordinatewise. Hence every real name is equivalent to a $B_\alpha$-name. [F1, F2, F3, F4]

2.1 Capture of countable ordinal sequences and Borel codes: for a name forced to be a function from $\omega$ to the ordinals, apply [F3] to each coordinate and choose a maximal antichain every member of which decides that coordinate as a check ordinal. The forcing theorem guarantees that this deciding set is dense; no upper bound on the decided ordinals is assumed in advance. The union of the antichains is countable by [F1] and Choice, so [F4] bounds the birth stages of all its Boolean conditions below one $\alpha$. The ordinal labels are ground objects and may be used unchanged in the resulting $B_\alpha$-name. A Borel-code name is a name for a hereditarily countable code; decide the entries of a fixed real/ordinal coding in the same way. [F1, F2, F3, F4, step 1.1]

3.1 Suppose now that the ground is $L$. The original name $\dot s$ is a ground set, and [F6] assigns it an ordinal code. For every coordinate choose the $<_L$-least maximal deciding antichain and its $<_L$-least enumeration $\langle a_{n,k}:k<\omega\rangle$ (padding a finite antichain). The entire sequence of labelled enumerations is a constructible set and therefore has one further ordinal code. The generic meets exactly one $a_{n,k}$ for each $n$; encode the resulting sequence of indices $k(n)$ by one real $r$. From $r$ and the two ordinal codes, the canonical $L$ well-order reconstructs the name, every labelled antichain, and hence every value $s(n)$. Thus $s$ is definable from one real and finitely many ordinals. This argument uses the complete stage embeddings to locate the antichains; it does not claim that an ultrafilter on an arbitrary countably generated complete algebra is generated by algebra generators. [F1, F2, F6, step 2.1]

3.2 Absorption at a later UM quotient: let $\alpha$ capture $s$, so $s\in V[G\cap B_\alpha]$. Choose $\beta\ge\alpha$ for which the next quotient has the canonical UM presentation from [F1]. Then every closed nowhere-dense code in $V[s]\subseteq V[G\cap B_\beta]$ is old for that exact UM forcing. By [F5], their union is contained in one meagre $F_\sigma$ envelope coded by the quotient generic. Every meagre Borel code includes a countable closed-nowhere-dense cover, so the same envelope contains the union of all meagre Borel sets coded in $V[s]$. No transport of absorption through bare forcing equivalence is invoked. [F1, F5, step 2.1]

4.1 The steps above prove the capture clauses and the absorption clause, and step 3.1 gives the constructible real-and-ordinal presentation; this is the Statement. [step 3.1, step 3.2] ∎
