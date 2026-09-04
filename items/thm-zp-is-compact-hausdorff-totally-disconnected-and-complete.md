---
id: thm-zp-is-compact-hausdorff-totally-disconnected-and-complete
kind: theorem
title: "Zp is Hausdorff, totally disconnected, and complete, and compact assuming Choice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-inverse-limit-topology-equals-the-p-adic-metric-topology, thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected, lem-coordinatewise-addition-and-negation-make-zp-a-topological-abelian-group]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jordan Bell, The profinite completion of the integers, the p-adic integers, and Prufer p-groups"
      url: "https://jordanbell.info/LaTeX/mathematics/profinite/"
    - title: "Gareth Wilkes, Profinite Groups and Group Cohomology lecture notes"
      url: "https://www.dpmms.cam.ac.uk/~grw46/LectureNotes.pdf"
---

## Statement

The space $\mathbb Z_p$ is Hausdorff, totally disconnected, and complete for
the $p$-adic metric. Assuming the Axiom of Choice, it is also compact.

## Facts & Assumptions

**Given:** A Cauchy sequence $(x^{(m)})_{m\ge0}$ in $\mathbb Z_p$; for the compactness clause, also the Axiom of Choice.

[L1] An inverse limit of finite discrete groups is Hausdorff, compact, and totally disconnected ([[thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]]).

[L2] The inverse-limit and $p$-adic metric topologies on $\mathbb Z_p$ agree ([[thm-inverse-limit-topology-equals-the-p-adic-metric-topology]]).

[L3] Coordinatewise addition and negation make $\mathbb Z_p$ a topological abelian group ([[lem-coordinatewise-addition-and-negation-make-zp-a-topological-abelian-group]]).

## Proof

**Proof technique:** direct.

1.1 By construction, $\mathbb Z_p$ is an inverse limit of the finite discrete groups $\mathbb Z/p^n\mathbb Z$. Therefore [L1] gives that $\mathbb Z_p$ is Hausdorff and totally disconnected, and also compact under the extra Choice hypothesis named in the Statement. The group structure from [L3] is already compatible with this topology. [L1, L3, given, algebra]

1.2 Fix $n\ge1$. Since the sequence is Cauchy and [L2] identifies the metric balls with the cylinder neighbourhoods, there exists $M_n$ such that for all $m,r\ge M_n$ the first $n$ coordinates of $x^{(m)}$ and $x^{(r)}$ agree. Let $a_n$ be that eventual common $n$-th coordinate. The compatibility of the $x^{(m)}$ forces the tuple $a=(a_n)_{n\ge1}$ itself to be compatible, hence an element of $\mathbb Z_p$. [L2, given, choose, construct]

2.1 For each $n$ and every $m\ge M_n$, the first $n$ coordinates of $x^{(m)}$ and $a$ agree, so step 1.2 gives $d_p(x^{(m)},a)\le p^{-n}$. Given $\varepsilon>0$, choose $n$ with $p^{-n}<\varepsilon$; then every $m\ge M_n$ satisfies $d_p(x^{(m)},a)<\varepsilon$. Thus $x^{(m)}\to a$ in the $p$-adic metric. Every Cauchy sequence therefore converges, so $\mathbb Z_p$ is complete. [step 1.2, L2, algebra]

3.1 Steps 1.1 and 2.1 prove the stated properties. [step 1.1, step 2.1] ∎
