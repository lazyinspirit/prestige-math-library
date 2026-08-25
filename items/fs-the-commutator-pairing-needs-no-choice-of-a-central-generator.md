---
id: fs-the-commutator-pairing-needs-no-choice-of-a-central-generator
kind: false-statement
title: "FALSE for odd $p$: the scalar-valued commutator pairing needs no choice of a central generator"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-commutator-pairing-of-an-extraspecial-p-group, lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating, def-center-of-a-group, thm-z-mod-p-is-a-field]
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

for odd $p$, the scalar-valued commutator pairing of an extraspecial
$p$-group is defined without choosing a generator of its centre.

## Facts & Assumptions

**Given:** The proposed claim together with the witness named in the Statement refuted.

[F1] For an extraspecial $p$-group $P$ with $Z(P)=\langle z\rangle$, the commutator pairing is the map $b_z(\bar x,\bar y)\in\mathbb Z/p$ determined by $[x,y]=z^{b_z(\bar x,\bar y)}$ ([[def-commutator-pairing-of-an-extraspecial-p-group]]).

[L1] The commutator pairing is independent of the coset representatives, is $\mathbb F_p$-bilinear on $P/Z(P)$, and is alternating ([[lem-the-commutator-pairing-is-well-defined-biadditive-and-alternating]]).

[L2] $$Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}.$$ ([[def-center-of-a-group]]).

[L3] For every prime $p$, the operations of addition and multiplication on $\mathbb Z/p$ make it a field. ([[thm-z-mod-p-is-a-field]]).


## Refutation

**Proof technique:** contradiction.

1.1 Let $p$ be odd. The claim asserts that the scalar-valued pairing is independent of the generator of the centre used to define it. [F1, L2, assume-contra]

2.1 Replacing $z$ by $z^{c}$ multiplies every value by $c^{-1}$, so only the pairing up to that scaling is choice-free; the scalar-valued map itself changes. [F1, L1, L3, step 1.1, discharge-contradiction] ∎

## Remarks

At $p=2$ the centre has a unique nonidentity element and hence a unique
generator, so there is no choice to make. The refuted claim is restricted to
odd $p$, where the centre has more than one generator.
