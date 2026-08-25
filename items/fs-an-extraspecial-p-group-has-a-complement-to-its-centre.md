---
id: fs-an-extraspecial-p-group-has-a-complement-to-its-centre
kind: false-statement
title: "FALSE: the centre of an extraspecial $p$-group has a complement"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-an-extraspecial-p-group-has-no-complement-to-its-centre, def-internal-semidirect-product]
aliases: []
landmark: false
proof_strategy: contradiction
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
## Statement refuted

the centre of an extraspecial $p$-group has a complement.

## Facts & Assumptions

**Given:** The proposed claim together with the witness named in the Statement refuted.

[L1] The centre of an extraspecial $p$-group has no complement ([[cor-an-extraspecial-p-group-has-no-complement-to-its-centre]]).

[L2] In this situation $H$ is called a **complement** to $N$ in $G$. ([[def-internal-semidirect-product]]).


## Refutation

**Proof technique:** contradiction.

1.1 The claim asserts the existence of a subgroup meeting the centre trivially and multiplying with it to the whole group. [L2, assume-contra]

2.1 Such a subgroup would be isomorphic to the elementary abelian central quotient, hence abelian, forcing the whole group to be abelian. [L1, L2, step 1.1, discharge-contradiction] ∎
