---
id: fs-the-commutator-pairing-determines-an-extraspecial-p-group-up-to-isomorphism
kind: false-statement
title: "FALSE: two extraspecial $p$-groups whose commutator pairings agree are isomorphic"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-commutator-pairing-of-an-extraspecial-p-group, ex-the-commutator-pairings-of-the-dihedral-and-quaternion-groups-of-order-eight]
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

two extraspecial $p$-groups whose commutator pairings agree are isomorphic.

## Facts & Assumptions

**Given:** The proposed claim together with the witness named in the Statement refuted.

[F1] For an extraspecial $p$-group $P$ with $Z(P)=\langle z\rangle$, the commutator pairing is the map $b_z(\bar x,\bar y)\in\mathbb Z/p$ determined by $[x,y]=z^{b_z(\bar x,\bar y)}$ ([[def-commutator-pairing-of-an-extraspecial-p-group]]).

[L1] The commutator pairings of $\operatorname{Dih}(C_4)$ and $Q_8$ agree, while the groups are not isomorphic ([[ex-the-commutator-pairings-of-the-dihedral-and-quaternion-groups-of-order-eight]]).


## Refutation

**Proof technique:** contradiction.

1.1 The claim asserts that equality of commutator pairings forces an isomorphism of groups. [F1, assume-contra]

2.1 The example [L1] gives two extraspecial groups of order eight with the same commutator pairing and different isomorphism type, contradicting the claim. [L1, step 1.1, discharge-contradiction] ∎
