---
id: def-complete-boolean-algebra-and-regular-open-sets
kind: definition
title: Completeness, regular opens, and order continuity
status: draft
origin: pipeline
deps: [def-boolean-algebra-for-stone-duality, def-boolean-homomorphism-and-quotient, def-topological-space]
justified_by: [thm-regular-open-sets-form-a-complete-boolean-algebra]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Fremlin, Measure Theory, 313H–313L and 314O–314P, Chapter 31, pp. 25–27 and 37–38"
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap31.pdf
---

## Definition

A [[def-boolean-algebra-for-stone-duality|Boolean algebra]] $B$ is **complete**, or **Dedekind complete**, if every subset $A\subseteq B$ has a least upper bound $\bigvee A$. Complements then give greatest lower bounds by $\bigwedge A=\neg\bigvee\{\neg a:a\in A\}$. The empty bounds are $\bigvee\varnothing=0$ and $\bigwedge\varnothing=1$. The one-element Boolean algebra is allowed.

For a [[def-topological-space|topological space]] $X$, $\operatorname{int}E$ is the union of the open subsets of $E$, and $\overline E$ is the intersection of the closed subsets containing $E$. An open set $U$ is **regular open** if $U=\operatorname{int}\overline U$. Write $\operatorname{RO}(X)$ for the set of regular open subsets, ordered by inclusion. Its proposed operations, justified by [[thm-regular-open-sets-form-a-complete-boolean-algebra]], are

$$\bigvee\mathcal U=\operatorname{int}\overline{\bigcup\mathcal U},\qquad \bigwedge\mathcal U=\operatorname{int}\bigcap\mathcal U,\qquad \neg U=\operatorname{int}(X\setminus U)=X\setminus\overline U.$$

Here the empty union is $\varnothing$ and the empty intersection is $X$; finite meets will be ordinary finite intersections, and the bounds will be $\varnothing,X$. No separation axiom on $X$ is assumed.

A [[def-boolean-homomorphism-and-quotient|Boolean homomorphism]] $h:B\to C$ is **order-continuous** if it preserves every supremum and infimum that exists in $B$: whenever $b=\bigvee_B A$ exists, $h(b)=\bigvee_C h[A]$, and likewise for infima. This includes empty families. An **order-dense Boolean embedding** $i:B\to C$ is an injective Boolean homomorphism such that each $0<c\in C$ has some $b\in B$ with $0<i(b)\le c$. A **Boolean completion** is such an embedding into a complete Boolean algebra. This definition asserts neither existence of a completion nor extension of a homomorphism.
