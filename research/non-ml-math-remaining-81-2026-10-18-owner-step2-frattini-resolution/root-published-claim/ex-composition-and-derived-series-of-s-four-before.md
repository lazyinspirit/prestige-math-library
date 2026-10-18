---
id: ex-composition-and-derived-series-of-s-four
kind: example
title: "Composition and derived series of $S_4$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-composition-series-composition-factors-and-length, def-derived-series-solvable-group-and-derived-length, cor-derived-subgroups-of-symmetric-and-alternating-groups, thm-quotient-abelian-iff-contains-commutator-subgroup, thm-derived-subgroup-is-characteristic-and-abelianization-is-universal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Example

Let $V_4=\{1,(12)(34),(13)(24),(14)(23)\}\le A_4$ and $K=\langle(12)(34)\rangle$. Then
$$S_4\triangleright A_4\triangleright V_4\triangleright K\triangleright1$$
is a composition series with factor orders $2,3,2,2$, while the derived series is $S_4\triangleright A_4\triangleright V_4\triangleright1$.

## Facts & Assumptions

**Given:** The displayed subgroups of $S_4$.

[F1] A composition series is a strict subnormal chain with simple factors ([[def-composition-series-composition-factors-and-length]]).

[F2] Derived length is the least index at which the derived series is trivial ([[def-derived-series-solvable-group-and-derived-length]]).

[L2] $S_4'=A_4$ ([[cor-derived-subgroups-of-symmetric-and-alternating-groups]]).

[L3] For $N\trianglelefteq G$, the quotient $G/N$ is abelian if and only if $G'\le N$ ([[thm-quotient-abelian-iff-contains-commutator-subgroup]]).

[L4] The derived subgroup of a group is characteristic and hence normal ([[thm-derived-subgroup-is-characteristic-and-abelianization-is-universal]]).

## Verification

**Proof technique:** direct.

1.1 The displayed terms have orders $24,12,4,2,1$. Each is normal in the preceding term: $A_4$ is the sign kernel, $V_4$ is normal in $A_4$, and $K$ is normal in the abelian group $V_4$. [given, algebra]

1.2 By [L2], $S_4'=A_4$. The quotient $A_4/V_4$ has order three and is abelian, so [L3] gives $A_4'\le V_4$. Direct calculation gives $[(123),(124)]=(12)(34)$; normality of $A_4'$ from [L4] and conjugation by $A_4$ then put all three nonidentity elements of $V_4$ in $A_4'$. Thus $A_4'=V_4$, while $V_4'=1$ because $V_4$ is abelian. The derived series is therefore the displayed chain of length three by [F2]. [L2, L3, L4, F2, algebra]

2.1 The adjacent quotient orders are $2,3,2,2$, so the quotients are simple and the chain is a composition series by [F1]. [step 1.1, F1, algebra]

3.1 Thus the composition length is four while the derived length is three; the two series measure different features of $S_4$. [step 2.1, step 1.2] ∎
