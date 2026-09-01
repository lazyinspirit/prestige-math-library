---
id: thm-free-groups-are-residually-finite
kind: theorem
title: "Free groups are residually finite"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-finite-residual-and-residually-finite-group, thm-reduced-words-form-the-free-group, thm-free-groups-unique-up-to-unique-isomorphism, def-cyclically-reduced-word, lem-cyclic-reduction-normal-form]
proof_strategy: "direct"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Statement

Free groups are residually finite.

## Facts & Assumptions

**Given:** A free group $F(X)$ and a nonidentity element $g\in F(X)$.

[F1] The finite residual is trivial exactly when every nonidentity element is
omitted by some finite-index normal subgroup
([[def-finite-residual-and-residually-finite-group]]).

[L1] Every nontrivial element of a free group is conjugate to a cyclically
reduced word, and cyclic reduction preserves triviality
([[lem-cyclic-reduction-normal-form]], [[def-cyclically-reduced-word]],
[[thm-reduced-words-form-the-free-group]], [[thm-free-groups-unique-up-to-unique-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], replace $g$ by a conjugate and assume it is represented by a nontrivial cyclically reduced word $w=x_1\cdots x_n$ in finitely many letters. Build a finite pointed labelled graph with distinct vertices $v_0,\ldots,v_n$ and a distinguished path from $v_{k-1}$ to $v_k$ labelled $x_k$. Because $w$ is reduced, these prescribed edges define partial injective transitions. Complete each partial transition to a permutation of the finite vertex set, so every vertex has exactly one incoming and one outgoing edge of each used label. [L1, given, construct]

2.1 Reading words from $v_0$ gives an action of the free group on the finite vertex set. The word $w$ sends $v_0$ to the distinct vertex $v_n$. Therefore the induced homomorphism $F(X)\to \operatorname{Sym}(V)$ does not kill $g$. [step 1.1, algebra]

3.1 The kernel of that finite permutation action has finite index and omits $g$. Since $g\ne1$ was arbitrary, [F1] shows that the finite residual is trivial. Hence free groups are residually finite. [F1, step 2.1] ∎
