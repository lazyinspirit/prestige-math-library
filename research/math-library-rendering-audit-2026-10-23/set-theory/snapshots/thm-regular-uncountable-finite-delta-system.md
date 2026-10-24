---
id: "thm-regular-uncountable-finite-delta-system"
kind: "theorem"
title: "The finite delta-system lemma at a regular uncountable cardinal"
status: published
origin: "pipeline"
deps: ["def-finite-delta-system", "thm-cofinality-basics", "cor-cardinal-absorption", "thm-transfinite-recursion", "def-axiom-of-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Theorem 9.20, printed pp77–78"
      url: "https://euclid.colorado.edu/~monkd/jech.pdf"
justified_by: []
forward_refs: []
proof_strategy: "direct"
verification:
  audited: 2026-09-09
  precheck: "pass"
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
---

## Statement

In ZFC, if $\kappa$ is regular uncountable and $\mathcal F$ consists of $\kappa$ distinct finite sets, then some $\kappa$-element subfamily is a delta system.

## Facts & Assumptions

**Given:** Such $\kappa$ and $\mathcal F$. AC is used to well-order sets and choose injections for cardinal estimates.

[F1] A delta system has a fixed pairwise intersection for all distinct members. [[def-finite-delta-system]]

[F2] A cofinal subset of a limit ordinal $\lambda$ has size at least $\operatorname{cf}(\lambda)$. [[thm-cofinality-basics]]

[F3] For an infinite cardinal $\mu$, $\mu\cdot\mu=\mu$. [[cor-cardinal-absorption]]

[F4] Transfinite recursion defines a function from a specified rule on earlier values. [[thm-transfinite-recursion]]

[A1] Assume AC. [[def-axiom-of-choice]]

## Proof

1.1 A union of fewer than $\kappa$ sets each of size less than $\kappa$ has size less than $\kappa$. Indeed the set of their cardinalities has size less than $\kappa$, so by regularity and F2 it is bounded below $\kappa$. Choose an infinite cardinal $\mu<\kappa$ bounding these sizes and the size of the index set. AC selects injections of the sets into $\mu$; assigning each element its least containing index in a fixed well-order injects the union into the product of the index set and $\mu$. Its cardinality is at most $\mu\cdot\mu=\mu<\kappa$. Empty index sets give empty union directly. [A1, F2, F3, given]

2.1 Write $\mathcal F_n=\{a\in\mathcal F:|a|=n\}$. If every $\mathcal F_n$ had size less than $\kappa$, step 1.1, applied to the countable index set and uncountable $\kappa$, would give $|\mathcal F|<\kappa$. Hence some $\mathcal F_n$ has size $\kappa$. It remains to prove the result for uniform size $n$, by induction on $n$. Size zero cannot occur with $\kappa$ distinct sets; for size one all members are pairwise disjoint, giving root $\varnothing$. [F1, step 1.1]

3.1 Suppose the uniform-size assertion holds at $n$, and $\mathcal G$ consists of $\kappa$ distinct sets of size $n+1$. If some $x$ belongs to $\kappa$ members, delete $x$ from those members. Deletion is injective on sets containing $x$, since adjoining $x$ recovers the original set. The resulting $\kappa$ distinct $n$-element sets have a delta subsystem with root $r$ by the induction hypothesis. Reattach $x$; for distinct members $a,b$ the intersection is $(a\setminus\{x\})\cap(b\setminus\{x\})\cup\{x\}=r\cup\{x\}$. [F1, step 2.1]

4.1 In the remaining situation each $x$ belongs to fewer than $\kappa$ members of $\mathcal G$. Fix a bijective enumeration of $\mathcal G$ by $\kappa$. At stage $\gamma<\kappa$, let $U$ be the union of the previously selected sets. By step 1.1, $|U|<\kappa$. The sets intersecting $U$ form the union, over $x\in U$, of fewer-than-$\kappa$ sized subfamilies, so again fewer than $\kappa$ members are excluded. Also exclude all previously selected sets. Fewer than $\kappa$ candidates are excluded in total, leaving a candidate; select the least index. Recursion gives $\kappa$ distinct pairwise disjoint members, a delta system with empty root. [A1, F1, F4, step 1.1, step 3.1]

5.1 The two alternatives in steps 3.1 and 4.1 exhaust the possibilities and prove the uniform-size successor assertion. Induction with the zero and one cases from step 2.1 proves it at every finite size. Applying it to the subfamily found in step 2.1 proves the theorem. [step 2.1, step 3.1, step 4.1] ∎
