---
id: fs-isomorphic-middle-groups-force-equivalent-group-extensions
kind: false-statement
title: "FALSE: isomorphic middle groups force equivalent extensions with fixed kernel and quotient"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
---

## Statement

If two extensions have isomorphic middle groups, then they are equivalent as
extensions with fixed kernel and fixed quotient.

## Facts & Assumptions

**Given:** The additive cyclic group $E=\mathbb Z/9\mathbb Z$, the kernel group $N=\mathbb Z/3\mathbb Z$, the quotient group $Q=\mathbb Z/3\mathbb Z$, and the inclusion $j:N\to E$ given by $j(\bar a)=\overline{3a}$.

[L1] Equivalence of extensions fixes both the chosen kernel map and the chosen quotient map ([[def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient]]).

## Refutation

**Proof technique:** direct.

1.1 Define two quotient maps $\pi_1,\pi_2:E\to Q$ by $$\pi_1(\bar x)=\bar x\pmod 3,\qquad \pi_2(\bar x)=2\bar x\pmod 3.$$ Both are surjective homomorphisms with kernel $\{\bar0,\bar3,\bar6\}=\operatorname{im}j$, so they give two extensions of $Q$ by $N$ with the same middle group $E$. [given, algebra]

2.1 An equivalence in the sense of [L1] would be an automorphism $\varphi:E\to E$ such that $\varphi\circ j=j$ and $\pi_2\circ\varphi=\pi_1$. Every automorphism of the additive cyclic group $\mathbb Z/9\mathbb Z$ has the form $\varphi(\bar x)=u\bar x$ for a unit $u\in\{1,2,4,5,7,8\}$. The condition $\varphi\circ j=j$ gives $\overline{3u}=\bar3$, so $u\equiv1\pmod 3$. But $\pi_2\circ\varphi=\pi_1$ forces $\overline{2u}=\bar1$ in $Q$, so $u\equiv2\pmod 3$. This is impossible. Therefore the two extensions are not equivalent. [L1, step 1.1, algebra] ∎
