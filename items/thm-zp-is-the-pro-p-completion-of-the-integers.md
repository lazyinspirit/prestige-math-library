---
id: thm-zp-is-the-pro-p-completion-of-the-integers
kind: theorem
title: "Zp is the pro-p completion of the integers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-pro-p-completion-of-an-abstract-group, def-canonical-map-from-the-integers-to-zp, thm-concrete-inverse-limit-universal-property-in-groups]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gareth Wilkes, Profinite Groups and Group Cohomology lecture notes"
      url: "https://www.dpmms.cam.ac.uk/~grw46/LectureNotes.pdf"
    - title: "Jordan Bell, The profinite completion of the integers, the p-adic integers, and Prufer p-groups"
      url: "https://jordanbell.info/LaTeX/mathematics/profinite/"
---

## Statement

The pro-$p$ completion of the additive group $\mathbb Z$ is $\mathbb Z_p$, and
the defining completion map is the canonical residue-class map
$\iota:\mathbb Z\to\mathbb Z_p$.

## Facts & Assumptions

**Given:** The additive group $\mathbb Z$.

[F1] The pro-$p$ completion is the inverse limit over normal subgroups with
finite $p$-group quotients ([[def-pro-p-completion-of-an-abstract-group]]).

[L1] The canonical map into $\mathbb Z_p$ is $m\mapsto(m\bmod p^n)_n$
([[def-canonical-map-from-the-integers-to-zp]]).

[L2] Compatible tuples satisfy the inverse-limit universal property
([[thm-concrete-inverse-limit-universal-property-in-groups]]).

## Proof

**Proof technique:** direct.

1.1 Every subgroup of the additive group $\mathbb Z$ has the form $d\mathbb Z$. The quotient $\mathbb Z/d\mathbb Z$ is a finite $p$-group exactly when $d=p^n$ for some $n\ge0$, because every finite quotient of a cyclic group is cyclic. Thus the inverse system in [F1] is exactly the system of quotients $\mathbb Z/p^n\mathbb Z$ with the usual reduction maps. [F1, given, algebra]

2.1 The compatible-tuple inverse limit of the system from step 1.1 is precisely $\mathbb Z_p$, and [L1] is the resulting canonical cone map from $\mathbb Z$ to that inverse limit. By [L2], this is the universal pro-$p$ completion map. Therefore the pro-$p$ completion of $\mathbb Z$ is $\mathbb Z_p$. [L1, L2, step 1.1] ∎
