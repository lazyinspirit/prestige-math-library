---
id: fs-every-special-p-group-is-extraspecial
kind: false-statement
title: "FALSE: every special $p$-group is extraspecial"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-special-and-extraspecial-p-groups, def-center-of-a-group]
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

every special $p$-group is extraspecial.

## Facts & Assumptions

**Given:** The proposed claim together with the witness named in the Statement refuted.

[F1] A finite $p$-group $P$ is special when $Z(P)=P'=\Phi(P)$ is elementary abelian, and extraspecial when in addition $P$ is nonabelian and this common subgroup has order $p$ ([[def-special-and-extraspecial-p-groups]]).

[L1] $$Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}.$$ ([[def-center-of-a-group]]).


## Refutation

**Proof technique:** contradiction.

1.1 The claim asserts that a special $p$-group always has centre of order $p$. [F1, assume-contra]

2.1 The direct product of two Heisenberg groups is special with centre of order $p^2$, refuting the claim. [F1, L1, step 1.1, discharge-contradiction] ∎
