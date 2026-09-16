---
id: fs-two-connected-lie-groups-with-the-same-dynkin-diagram-are-isomorphic
kind: false-statement
title: The same Dynkin diagram forces isomorphic connected Lie groups
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups, def-countable-choice, fs-dynkin-diagrams-classify-all-real-semisimple-lie-algebras, thm-existence-of-each-classified-root-system]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, SU(2) and SO(3)"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "Exercises 2.8-2.10 and §3.10, printed pp. 24-25 and 44-45"
    - title: "Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I, Lectures 19-24"
      url: "https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf"
      locator: "Lecture 20 and Exercise 3.9 on SU(2) and SO(3)"
landmark: false
proof_strategy: counterexample
---

## Statement

False: connected Lie groups with the same Dynkin diagram need not be
isomorphic. Assume countable choice; the assumption is inherited from the
covering-group supplier used in the refutation
([[def-countable-choice]]).

## Facts & Assumptions

**Given:** The connected Lie groups $\operatorname{SU}(2)$ and $\operatorname{SO}(3)$ and their Lie algebras.

[L1] Conjugation on imaginary quaternions defines a twofold covering homomorphism $\operatorname{SU}(2)\to\operatorname{SO}(3)$ whose differential is an isomorphism $\mathfrak{su}(2)\cong\mathfrak{so}(3)$; the groups are connected and are not isomorphic, because $\operatorname{SU}(2)$ is simply connected while $\pi_1(\operatorname{SO}(3))\cong\mathbb Z/2$ ([[ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups]]).

[L2] The complexification of $\mathfrak{su}(2)$ is $\mathfrak{sl}_2(\mathbb C)$, whose root system with respect to a Cartan subalgebra is $A_1$ ([[fs-dynkin-diagrams-classify-all-real-semisimple-lie-algebras]], [[thm-existence-of-each-classified-root-system]]).

## Proof

**Proof technique:** counterexample.

1.1 By [L1] the groups $\operatorname{SU}(2)$ and $\operatorname{SO}(3)$ are connected Lie groups with isomorphic Lie algebras, namely $\mathfrak{su}(2)\cong\mathfrak{so}(3)$, and they are not isomorphic. [L1, algebra]

2.1 The complexified Lie algebra of both groups is $\mathfrak{sl}_2(\mathbb C)$: for $\mathfrak{su}(2)$ this is [L2], and the complexification of $\mathfrak{so}(3)$ agrees with that of the isomorphic algebra $\mathfrak{su}(2)$. Hence the Dynkin diagram attached to the complexified Lie algebra of each group is the $A_1$ diagram. [L2, step 1.1, algebra]

3.1 Thus the two connected groups have the same Dynkin diagram $A_1$ but are not isomorphic, which refutes the claim; the missing global information is the lattice data of the simply connected form, here the central subgroup $\{\pm I\}$. The proof uses countable choice only through the covering-group supplier of [L1], and introduces no further choice. [step 1.1, step 2.1, algebra] ∎
