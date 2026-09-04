---
id: lem-a-complement-induces-the-conjugation-action-on-the-kernel
kind: lemma
title: "A complement determines the conjugation action on the kernel"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products, thm-conjugation-is-an-automorphism]
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
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
---

## Statement

Let

$$1\to N\xrightarrow{i}E\xrightarrow{\pi}Q\to1$$

be a split group extension, and let $C\le E$ be a complement to $i(N)$. Then
$\pi|_C:C\to Q$ is an isomorphism, and the formula

$$q\cdot n=i^{-1}\!\bigl(c\,i(n)\,c^{-1}\bigr)\qquad\text{for the unique }c\in C\text{ with }\pi(c)=q$$

defines an action of $Q$ on $N$ by automorphisms.

## Facts & Assumptions

**Given:** The displayed split extension and a complement $C\le E$ to $i(N)$.

[L1] In a split extension, a complement to the kernel is equivalent to a
semidirect-product model, and the quotient map restricts to an isomorphism from
the complement onto the quotient ([[thm-splitting-criteria-via-sections-complements-retractions-and-semidirect-products]]).

[L2] Conjugation by a group element is an automorphism of the group
([[thm-conjugation-is-an-automorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the restriction $\pi|_C:C\to Q$ is an isomorphism. Hence for each $q\in Q$ there is a unique $c\in C$ with $\pi(c)=q$, so the displayed formula is well defined. [given, L1]

2.1 For each $q\in Q$, conjugation by the corresponding $c$ restricts to an automorphism of $i(N)$ by [L2], because $i(N)\trianglelefteq E$ and so $c\,i(N)\,c^{-1}=i(N)$. Transporting that automorphism across the isomorphism $i:N\to i(N)$ gives the displayed automorphism of $N$. Thus the rule lands in $\operatorname{Aut}(N)$. [L2, step 1.1]

3.1 If $q_1,q_2\in Q$ correspond to $c_1,c_2\in C$, then $q_1q_2$ corresponds to $c_1c_2\in C$ because $\pi|_C$ is a homomorphism. Conjugation by $c_1c_2$ is the composite of conjugation by $c_1$ and conjugation by $c_2$; transporting across $i$ gives $(q_1q_2)\cdot n=q_1\cdot(q_2\cdot n)$, and $1_Q\cdot n=n$. So this is an action of $Q$ on $N$ by automorphisms. [L1, step 2.1, algebra] ∎
