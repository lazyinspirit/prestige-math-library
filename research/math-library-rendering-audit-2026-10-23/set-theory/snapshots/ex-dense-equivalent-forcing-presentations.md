---
id: "ex-dense-equivalent-forcing-presentations"
kind: "example"
title: "Dense-equivalent forcing presentations"
deps: ["lem-separative-quotient-of-a-forcing-preorder", "def-complete-boolean-algebra-and-regular-open-sets", "thm-forcing-theorem", "def-forcing-name-valuation-and-generic-extension", "thm-check-name-evaluation-and-generic-reconstruction"]
justified_by: []
forward_refs: []
provenance:
  statement: "ai-altered"
  proof: "ai-generated"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Karagila, Forcing (2023), Definitions 2.28–2.33 and Propositions 2.30–2.32, Theorem 2.34, printed pp.11–13; explicit local argument"
      url: "https://karagila.org/files/Forcing-2023.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

Let $P=\{1,a,a',b\}$, with reflexivity, $a\le a'\le a$, all three of $a,a',b$ below 1, and no other comparisons. Its separative quotient has three conditions $1,A,B$, where $A=\{a,a'\}$ and $B=\{b\}$ are incompatible atoms below 1. Its regular-open Boolean algebra is

$$\operatorname{RO}(P)=\{\varnothing,A,B,P\}.$$

All three forcing presentations give the ground model as their generic extension, and their corresponding names and forced formulas agree. This is a direct finite computation in ZF, independent of a general dense-name translation theorem.

## Facts & Assumptions

**Given:** The displayed finite preorder, contained with its order in a transitive ZF ground model M. Its four elements are distinct.

[F1] [[lem-separative-quotient-of-a-forcing-preorder]] defines $p\le^*q$ by compatibility of every extension of p with q.

[F2] [[def-complete-boolean-algebra-and-regular-open-sets]] defines regular opens by $U=\operatorname{int}\overline U$ and excludes no zero until passing to a nonzero forcing order.

[F3] [[thm-forcing-theorem]] characterizes forcing by truth in all generics through a condition when such generics exist through every condition.

[F4] [[def-forcing-name-valuation-and-generic-extension]] gives name recursion and valuation.

[F5] [[thm-check-name-evaluation-and-generic-reconstruction]] recovers every ground set from its check name.

## Verification

1.1 The conditions a and a' have the same extension set A, hence are mutually $\le^*$-equivalent. Neither is equivalent to b, which is incompatible with both. Also 1 is not $\le^*$-below either atom: the other atom witnesses failure. Thus the quotient classes are exactly $\{1\},A,B$, with the two atom classes below the top. [F1]

1.2 Downward open subsets of P are exactly $\varnothing,A,B,A\cup B,P$. The closure of A is $A\cup\{1\}$, since a condition is in its closure exactly when its extension cone meets A; its interior is A because the cone below 1 also includes b. Likewise B regularizes to B. The set $A\cup B$ meets every cone, so its closure and regularization are P. Therefore the regular opens are exactly the four sets displayed. Their meets are intersections, their complements exchange A and B and exchange empty and P, and $A\vee B=P$. The nonzero order is the same three-point order as the quotient; Boolean zero is omitted. [F2]

2.1 Every P-generic meets the ground dense set $A\cup B$. If it meets A, upward closure and the mutual inequalities force it to be $G_A=\{1,a,a'\}$; if it meets B it is $G_B=\{1,b\}$. It cannot meet both by directedness. Conversely these two filters meet every dense set: such a set must contain some member of A and must contain b, by testing a and b themselves. Hence these are exactly the generics. The quotient generics are $\{1,A\},\{1,B\}$ and the Boolean generics are $\{P,A\},\{P,B\}$, by the identical atom argument. They exist through every condition. All six filters are finite sets in M. [step 1.1, step 1.2]

3.1 Let $e:P\to\operatorname{RO}(P)^+$ send 1 to P, a and a' to A, and b to B. Recursively replace each coefficient s of a name by e(s), translating its subnames at the same time. For the listed corresponding generic pair $(G_A,H_A)$ or $(G_B,H_B)$, s belongs to the first filter exactly when e(s) belongs to the second. Induction on name rank in F4 therefore proves equality of valuations. For the quotient use the identical construction with coefficients replaced by their classes. Conversely replace coefficients A,B and the top by the fixed representatives a,b and 1 respectively, recursively on names; the same coefficient test proves agreement in the reverse direction. These are three explicitly fixed representatives, not a choice from an arbitrary family of classes. [F4, step 2.1]

3.2 For each of these finite ground filters, valuation of a name in M can be performed internally in M and agrees with the external recursion by induction on subnames. Thus all name values lie in M. F5 gives the reverse inclusion, so each generic extension is M itself. [F4, F5, step 2.1]

4.1 By step 2.1 generics exist through every condition, so F3 applies. The generic lists correspond bijectively and, by step 3.1, translated parameters have equal values in the identical models of step 3.2. Therefore the truth test in all corresponding generics gives equal forced formulas at corresponding conditions. For instance the top has two generic tests, whereas either atom has just its one test; duplicate a and a' give the same test. This completes the quotient, Boolean and name computations without AC. [F3, step 2.1, step 3.1, step 3.2] ∎
