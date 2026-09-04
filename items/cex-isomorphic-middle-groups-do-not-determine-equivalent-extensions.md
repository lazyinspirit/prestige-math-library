---
id: cex-isomorphic-middle-groups-do-not-determine-equivalent-extensions
kind: counterexample
title: "The cyclic group Z/9 supports inequivalent extensions of C_3 by C_3"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [fs-isomorphic-middle-groups-force-equivalent-group-extensions]
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

## Statement refuted

If two extensions of the same kernel and quotient have isomorphic middle
groups, then they are equivalent as extensions.

The cyclic group $\mathbb Z/9\mathbb Z$ supports two inequivalent extensions of
$C_3$ by $C_3$.

## Facts & Assumptions

**Given:** The additive cyclic group $E=\mathbb Z/9\mathbb Z$, together with $N=Q=\mathbb Z/3\mathbb Z$ and the inclusion $j:N\to E$ given by $j(\bar a)=\overline{3a}$.

[L1] The false claim under refutation is [[fs-isomorphic-middle-groups-force-equivalent-group-extensions]].

## Counterexample

**Proof technique:** direct.

1.1 Let $\pi_1,\pi_2:E\to Q$ be the surjective homomorphisms $$\pi_1(\bar x)=\bar x\pmod 3,\qquad \pi_2(\bar x)=2\bar x\pmod 3.$$ Both have kernel $\operatorname{im}j=\{\bar0,\bar3,\bar6\}$, so $$0\to N\xrightarrow{j}E\xrightarrow{\pi_1}Q\to0,\qquad 0\to N\xrightarrow{j}E\xrightarrow{\pi_2}Q\to0$$ are two extensions of $Q$ by $N$ with the same middle group $E$. [given, algebra]

2.1 The middle groups are literally identical, but the two extension structures are not equivalent. Indeed, any automorphism of $E=\mathbb Z/9\mathbb Z$ is multiplication by a unit $u\in\{1,2,4,5,7,8\}$. If it fixed the kernel inclusion, then $u\equiv1\pmod 3$; if it also carried $\pi_1$ to $\pi_2$, then $2u\equiv1\pmod 3$, so $u\equiv2\pmod 3$, impossible. Thus [L1] is false. [L1, step 1.1, algebra] ∎
