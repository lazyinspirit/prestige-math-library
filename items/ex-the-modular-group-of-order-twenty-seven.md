---
id: ex-the-modular-group-of-order-twenty-seven
kind: example
title: "The modular group of order $27$ has exponent $9$ and exactly three cyclic subgroups of order $9$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-the-order-p-automorphism-of-a-cyclic-group-of-order-p-squared, def-modular-group-of-order-p-cubed, prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p, def-exponent-of-a-finite-group, def-order-in-a-group, thm-lagrange]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups (Hilary Term 2008), 48 pp."
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, 62 pp."
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
    - title: "D. Kaur and A. Kulshrestha, Characters of real special 2-groups (arXiv:1510.06583v1)"
      url: "https://arxiv.org/pdf/1510.06583"
---
## Example

The modular group of order $27$ has exponent $9$ and exactly three cyclic subgroups of order $9$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the Example.

[F1] The modular group of order $p^3$ is the external semidirect product $C_{p^2}\rtimes_\alpha C_p$ for the order-$p$ automorphism $a\mapsto a^{1+p}$ ([[def-modular-group-of-order-p-cubed]]).

[L1] For every prime $p$ the map $a\mapsto a^{1+p}$ is an automorphism of order $p$ of a cyclic group of order $p^2$ ([[lem-the-order-p-automorphism-of-a-cyclic-group-of-order-p-squared]]).

[L2] The modular group of order $p^3$ is extraspecial, and its exponent is $p^2$ ([[prop-the-modular-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-squared-for-odd-p]]).

[L3] For a finite group $G$, its **exponent** is $$\exp(G)=\min\{n\in\mathbb N:n>0\text{ and }g^n=e\text{ for every }g\in G\}.$$ The set is nonempty by, and gives its least member; powers use. ([[def-exponent-of-a-finite-group]]).

[L4] **The order of a finite group.** Let $G$ be a group whose underlying set is finite, so that $G \approx n$ for some $n \in \mathbb{N}$. ([[def-order-in-a-group]]).

[L5] $$|G|=[G:H]\,|H|.$$ ([[thm-lagrange]]).


## Verification

**Proof technique:** direct.

1.1 At $p=3$ the automorphism is $a\mapsto a^{4}$ and the group has the twenty-seven elements $a^ib^j$ with $0\le i<9$, $0\le j<3$. [F1, L1]

1.2 The exponent is nine because $a$ has order nine and every cube lies in the centre. [F1, L2, L3]

2.1 The elements of order nine are those $a^ib^j$ with $i$ not divisible by three, and they fall into exactly three cyclic subgroups of order nine. [L2, L4, L5, step 1.2, step 1.1, algebra] ∎
