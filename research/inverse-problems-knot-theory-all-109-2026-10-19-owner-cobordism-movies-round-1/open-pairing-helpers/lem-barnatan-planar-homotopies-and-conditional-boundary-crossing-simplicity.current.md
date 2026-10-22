---
id: lem-barnatan-planar-homotopies-and-conditional-boundary-crossing-simplicity
kind: lemma
title: "Planar homotopies and conditional simplicity under boundary crossings"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
justified_by: []
aliases: []
deps: [def-barnatan-open-tangle-cobordism-complexes]
dependency_level: 1
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dror Bar-Natan, Khovanov's homology for tangles and cobordisms, sections 3–6 and 8.3"
      url: "https://arxiv.org/pdf/math/0410495v2"
---

## Statement

In the open Bar-Natan categories, planar totalization defines operations on bounded complexes and on their homotopy categories, preserving internal degrees and homotopy equivalences. Simplicity is invariant under an internal degree zero chain homotopy equivalence. In particular let $A$ and $B$ be the operations of adjoining a fixed boundary crossing complex and its proposed inverse, each using precisely two adjacent boundary legs. Suppose local internal degree zero chain homotopy equivalences of their two possible composites with the straight two-strand identity complex have been supplied. Then a complex $C$ is simple if and only if $A(C)$ is simple. This is a conditional assertion about these local inverse equivalences; it does not assert Reidemeister invariance or provide crossing complexes or their inverse maps.

## Statement references

[[def-barnatan-open-tangle-cobordism-complexes]]

[Bar-Natan, Theorem 2 and equation (3), and Lemmas 8.7–8.9](https://arxiv.org/pdf/math/0410495v2)

## Facts & Assumptions

**Given:** The planar totalization convention, and, for the final assertion, the two stated local inverse equivalences, with internal degree zero maps and homotopies.

[F1] [[def-barnatan-open-tangle-cobordism-complexes]] supplies the categories, grading, shifts, homotopies, simplicity and planar operations.

## Proof

1.1 Vertical gluing subtracts the Euler characteristic of the common smoothing, which is $|B|/2$, so $\chi(C'\circ C)-|B|/2=(\chi(C')-|B|/2)+(\chi(C)-|B|/2)$. For a planar template with input boundary sizes $b_i$ and output size $b_0$, its curtain has Euler characteristic $(b_0+\sum_i b_i)/2$, and gluing the inserted surfaces subtracts $\sum_i b_i$ from Euler characteristic. Thus the output degree is $\sum_i(\chi(C_i)-b_i/2)$. Circle curtains contribute zero throughout. S, T and four-tube are homogeneous (a tube lowers Euler characteristic by two); planar insertion and stacking take each local relation to the same local relation in a larger surface. They therefore descend to degree-additive multilinear operations on the quotient and its shifts and finite sums. [F1, algebra]

1.2 Let $u:C\to C'$ and $v:C'\to C$ have $vu\simeq1_C$ and $uv\simeq1_{C'}$. Conjugation $[f]\mapsto[vfu]$ identifies the degree zero endomorphism rings of $C'$ and $C$: the inverse is $[g]\mapsto[ugv]$, and each composite reduces to the identity using the two inverse equations. These ring maps preserve identity and integral scalars, hence carry units to units and $\pm1$ to $\pm1$. Therefore simplicity of either complex implies simplicity of the other. [F1, algebra]

2.1 On a summand of multidegree $(r_i)$ in the total complex, applying the $i$th differential twice gives zero. For $i<j$, the coefficient for first applying $d_i$ and then $d_j$ is the negative of that for applying them in the reverse order, because only the first route increments the exponent preceding $d_j$. The two underlying surfaces agree by interchange of disjoint insertions. Hence the total differential squares to zero. Boundedness and finite direct sums ensure that each displayed total term is a finite sum. Shifts add, so every differential still has internal degree zero. Associativity of insertion and of the total degree sum identifies nested totalizations, and the sign exponent is the sum over earlier factors in either grouping. [F1, step 1.1, algebra]

3.1 For a homogeneous cochain map $f$ of degree $a$ in slot $i$, its insertion is multiplied by $(-1)^{a\sum_{j<i}r_j}$. In particular chain maps of cochain degree zero insert with no sign. If $h$ is a homotopy in that slot, insert it with sign $(-1)^{\sum_{j<i}r_j}$, since its degree is $-1$. In $dH+Hd$, the terms differentiating slot $i$ combine to insert $dh+hd$, with the two prefix signs cancelling. A term differentiating an earlier slot acquires one extra minus from the change in prefix degree; a term differentiating a later slot acquires one extra minus from the decrease in slot $i$ degree. Thus all other-slot terms cancel. Consequently insertion sends $f-g=dh+hd$ to the corresponding homotopy relation. Replacing several inputs successively proves the assertion for all inputs. Applied to both inverse equations, it shows that inserted homotopy equivalences remain homotopy equivalences. [F1, step 2.1, algebra]

4.1 For adjoining inverse boundary crossings, insert each assumed local inverse equivalence into the surrounding complex. Step 3.1 supplies natural isomorphisms $BA\cong\operatorname{Id}$ and $AB\cong\operatorname{Id}$ on the homotopy categories: naturality is the interchange identity between a map in the surrounding slot and the local degree zero map in the crossing slot. The two adjacent legs are precisely what makes these local replacements straight identity templates. No relation for any other Reidemeister move enters. [given, step 3.1, construct]

5.1 For completeness these functors identify endomorphism rings. If $\eta_C:C\to BA(C)$ is the natural isomorphism, applying $B$ followed by conjugation by $\eta_C$ is a left inverse to the endomorphism map induced by $A$, by naturality. Thus $A$ is faithful. The isomorphism $AB\cong\operatorname{Id}$ gives faithfulness of $B$ in the same way. If $f:A(C)\to A(C)$, set $g=\eta_C^{-1}B(f)\eta_C$. Naturality of $\eta$ gives $B(A(g))=\eta_C g\eta_C^{-1}=B(f)$; faithfulness of $B$ implies $A(g)=f$. Hence the endomorphism map is also surjective. It is a unital ring isomorphism preserving all integral scalars. Units are therefore $\pm1$ on one side exactly when they are so on the other, proving the final assertion. [step 1.2, step 4.1, algebra] ∎
