---
id: fs-two-groups-with-isomorphic-profinite-completions-are-isomorphic
kind: false-statement
title: "FALSE: isomorphic profinite completions force the original groups to be isomorphic"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-profinite-completion-of-an-abstract-group, thm-profinite-completion-is-functorial]
proof_strategy: "direct"
verification:
  audited: 2026-09-01
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

If two groups have isomorphic profinite completions, then the groups are
isomorphic.

## Facts & Assumptions

**Given:** The groups $G=\mathbb Z$ and $H=\mathbb Z\oplus\mathbb Q$.

[L1] The profinite completion is built from all finite quotients of the group
([[def-profinite-completion-of-an-abstract-group]],
[[thm-profinite-completion-is-functorial]]).

## Refutation

**Proof technique:** direct.

1.1 Every homomorphism from the divisible group $\mathbb Q$ to a finite group is trivial: if $F$ is finite of order $m$ and $\phi:\mathbb Q\to F$, then for any $q\in\mathbb Q$ one has $q=mr$ for some $r\in\mathbb Q$, so $\phi(q)=m\phi(r)=0$. Therefore every finite quotient of $H=\mathbb Z\oplus\mathbb Q$ factors through the projection onto $\mathbb Z$. [given, algebra]

2.1 The finite quotients of both $G$ and $H$ are therefore exactly the finite cyclic groups $\mathbb Z/n\mathbb Z$, with the same transition maps. By [L1], both profinite completions are the inverse limit of that same system, namely $\widehat{\mathbb Z}$. But $G$ and $H$ are not isomorphic because $H$ contains a nontrivial divisible subgroup and $G$ does not. [L1, step 1.1]

3.1 Thus nonisomorphic groups can have isomorphic profinite completions. The statement is false. [step 1.1, step 2.1] ∎
