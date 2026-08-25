---
id: ex-the-heisenberg-group-of-order-twenty-seven
kind: example
title: "The Heisenberg group of order $27$ has exponent $3$ and thirteen subgroups of order $3$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-heisenberg-group-of-order-p-cubed, prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed, prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p, def-exponent-of-a-finite-group, def-order-in-a-group, thm-lagrange]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
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

The Heisenberg group of order $27$ has exponent $3$ and thirteen subgroups of order $3$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the Example.

[F1] The Heisenberg group of order $p^3$ is the set $(\mathbb Z/p)^3$ with $(a,b,c)(a',b',c')=(a+a',b+b',c+c'+ab')$ ([[def-heisenberg-group-of-order-p-cubed]]).

[L1] The Heisenberg multiplication makes $(\mathbb Z/p)^3$ a nonabelian group of order $p^3$ ([[prop-the-heisenberg-group-of-order-p-cubed-is-a-nonabelian-group-of-order-p-cubed]]).

[L2] The Heisenberg group of order $p^3$ is extraspecial, and for odd $p$ it has exponent $p$ ([[prop-the-heisenberg-group-of-order-p-cubed-is-extraspecial-and-has-exponent-p-for-odd-p]]).

[L3] For a finite group $G$, its **exponent** is $$\exp(G)=\min\{n\in\mathbb N:n>0\text{ and }g^n=e\text{ for every }g\in G\}.$$ The set is nonempty by, and gives its least member; powers use. ([[def-exponent-of-a-finite-group]]).

[L4] **The order of a finite group.** Let $G$ be a group whose underlying set is finite, so that $G \approx n$ for some $n \in \mathbb{N}$. ([[def-order-in-a-group]]).

[L5] $$|G|=[G:H]\,|H|.$$ ([[thm-lagrange]]).


## Verification

**Proof technique:** direct.

1.1 Instantiate the multiplication at $p=3$ to obtain a nonabelian group of order twenty-seven. [F1, L1]

1.2 Every nonidentity element cubes to the identity, since three is odd and the general exponent statement applies. [L2, L3]

2.1 The twenty-six nonidentity elements therefore fall into thirteen subgroups of order three, each containing two of them. [L4, L5, step 1.2, algebra] ∎
