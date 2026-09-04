---
id: thm-nonabelian-first-cohomology-classifies-complements-as-a-pointed-set
kind: theorem
title: "Nonabelian first cohomology classifies complements as a pointed set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-a-graph-subgroup-is-a-complement-exactly-for-a-crossed-homomorphism, def-first-nonabelian-cohomology-as-a-pointed-set]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Chaoli Li, Class field theory: proofs"
      url: "https://www.math.columbia.edu/~chaoli/docs/ClassFieldTheory2.html"
    - title: "David A. Craven, Finite Group Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
---

## Statement

Let $G$ act on a group $M$. Then the pointed set
$H^1_{\mathrm{nab}}(G,M)$ is in canonical bijection with the
$M$-conjugacy classes of complements to the canonical copy of $M$ in
$M\rtimes G$, with the basepoint corresponding to the canonical complement
$\{(1,g):g\in G\}$.

## Facts & Assumptions

**Given:** An action of $G$ on a group $M$.

[L1] A graph subset is a complement exactly when its defining map is a crossed
homomorphism ([[lem-a-graph-subgroup-is-a-complement-exactly-for-a-crossed-homomorphism]]).

[L2] Nonabelian first cohomology is the orbit set of crossed homomorphisms
under the action $(a*z)(g)=a z(g)(g\cdot a)^{-1}$
([[def-first-nonabelian-cohomology-as-a-pointed-set]]).

## Proof

**Proof technique:** direct.

1.1 For a nonabelian crossed homomorphism $z$, the graph $\Gamma_z$ is a complement by [L1]. Conversely, every complement gives a unique graph map by the same lemma. So complements correspond exactly to nonabelian crossed homomorphisms. [given, L1]

2.1 Conjugating $(z(g),g)$ by $(a,1)$ in $M\rtimes G$ gives $(a,1)(z(g),g)(a,1)^{-1}=\bigl(a z(g)(g\cdot a)^{-1},g\bigr)$, which is the graph of the cocycle $(a*z)(g)$ from [L2]. Hence $M$-conjugate complements correspond exactly to $M$-orbits of cocycles. [L2, step 1.1, algebra]

3.1 The trivial cocycle has graph $\{(1,g):g\in G\}$, the canonical complement to $M$. Therefore the bijection of step 2.1 respects the distinguished basepoint and is an isomorphism of pointed sets. [L1, L2, step 2.1] ∎
