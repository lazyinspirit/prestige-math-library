---
id: "lem-lc-scott-quotients-are-sets-and-membership-is-setlike"
kind: "lemma"
title: "Scott coding and set-likeness of ultrapower membership"
deps: ["def-lc-scott-ultrapower-and-class-embedding-convention", "def-filter"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Monk Propositions 17.1–17.2 p.341; Marks Definition 23.4 p.93
      url: https://euclid.colorado.edu/~monkd/jech.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF the Scott representatives are nonempty sets, equality of representatives is equivalent to U-equivalence of functions, their coordinate membership relation E is well-defined, and every E-predecessor collection is a set.

## Facts & Assumptions

**Given:** ZF. Minimum attained rank yields a set representative, finite equality intersections give relation invariance, and deterministic patching into union ran(g) plus empty bounds every predecessor by a set of functions.

[F1] [[def-lc-scott-ultrapower-and-class-embedding-convention]]: Scott representatives are the equivalent functions of least membership rank; E uses U-large coordinate membership.

[F2] [[def-filter]]: A filter contains its base set, omits empty, and is closed under binary intersections and supersets.

## Proof

1.1 U-equivalence is reflexive and symmetric, and transitive because the intersection of two coordinate equality sets is contained in the third. The function f itself witnesses a possible representative rank; minimize within rank(f)+1 among ranks attained by equivalent functions. The least rank rho is attained, and Separation in $V_{\rho+1}$ forms all equivalent functions of rank rho, a nonempty set. Equivalent f,g have the same equivalence class and hence the same minimum-rank set. Conversely equal Scott sets have a common representative, so f and g are equivalent by transitivity. [F1, F2]

2.1 If f,f-prime and g,g-prime are respectively equivalent, their coordinate membership truth sets agree on the intersection of their two equality sets, which is in U. A truth set agreeing there with a U-large set is U-large by intersection and upward closure; this implication is symmetric. Thus E does not depend on the selected functions representing either Scott set. [F2, step 1.1]

3.1 Fix g and put $A=\bigcup\operatorname{ran}(g)\cup\{\varnothing\}$. If [f] E [g], replace f by $h(i)=f(i)$ when $f(i)\in g(i)$ and by empty otherwise. Then h maps I to the set A and is U-equivalent to f. All predecessors are consequently among $\{[h]_U:h\in{}^I A\}$, a set by Replacement on the set of functions. Separate those satisfying E with [g] to get exactly the predecessor collection. The fallback is fixed empty, so this bounding argument uses no AC. [F1, step 1.1, step 2.1] ∎
