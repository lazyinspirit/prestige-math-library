---
id: fs-there-is-exactly-one-extraspecial-group-of-each-admissible-order
kind: false-statement
title: "FALSE: for each $n\\ge1$ there is exactly one extraspecial group of order $p^{1+2n}$ up to isomorphism"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-classification-of-extraspecial-two-groups, thm-classification-of-extraspecial-p-groups-for-odd-p, def-order-in-a-group, def-exponent-of-a-finite-group]
aliases: []
landmark: false
proof_strategy: contradiction
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
## Statement refuted

for each $n\ge1$ there is exactly one extraspecial group of order $p^{1+2n}$ up to isomorphism.

## Facts & Assumptions

**Given:** The proposed claim together with the witness named in the Statement refuted.

[L1] For each $n\ge1$ there are exactly two extraspecial groups of order $2^{1+2n}$ up to isomorphism, with $2^{2n}+2^{n}$ and $2^{2n}-2^{n}$ solutions of $x^2=1$ ([[thm-classification-of-extraspecial-two-groups]]).

[L2] For odd $p$ and each $n\ge1$ there are exactly two extraspecial groups of order $p^{1+2n}$ up to isomorphism, one of exponent $p$ and one of exponent $p^2$ ([[thm-classification-of-extraspecial-p-groups-for-odd-p]]).

[L3] **The order of a finite group.** Let $G$ be a group whose underlying set is finite, so that $G \approx n$ for some $n \in \mathbb{N}$. ([[def-order-in-a-group]]).

[L4] For a finite group $G$, its **exponent** is $$\exp(G)=\min\{n\in\mathbb N:n>0\text{ and }g^n=e\text{ for every }g\in G\}.$$ The set is nonempty by, and gives its least member; powers use. ([[def-exponent-of-a-finite-group]]).


## Refutation

**Proof technique:** contradiction.

1.1 The claim asserts uniqueness up to isomorphism at each order $p^{1+2n}$. [assume-contra]

2.1 Both classifications produce two types at each such order, separated by the count of square roots of the identity when $p=2$ and by the exponent when $p$ is odd. [L1, L2, L3, L4, step 1.1, discharge-contradiction] ∎
