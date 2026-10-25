---
id: "lem-forcing-monotonicity-density-and-decision"
kind: "lemma"
title: "Monotonicity, density, and decision for forcing"
deps: ["def-forcing-relation-for-formulas", "def-dense-open-sets-and-model-generic-filters", "def-forcing-relation-for-atomic-formulas"]
justified_by: []
forward_refs: []
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Neeman, Forcing (2011), section 1, Theorem 1.16 and its complete atomic/formula proof, Lemmas 1.17 and 1.25–1.28, pp.4–9; section 2.1, Lemma 2.2 through Theorem 2.6, pp.10–11"
      url: "https://www.math.ucla.edu/~ineeman/223s.1.11s/223s-spring11-lecture-notes-6-5.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF, for each fixed membership formula $\varphi$ and tuple of names:

- If $p\Vdash\varphi$ and $q\le p$, then $q\Vdash\varphi$.
- If $\{q:q\Vdash\varphi\}$ is dense below p, then $p\Vdash\varphi$.
- $\{q:q\Vdash\varphi\text{ or }q\Vdash\neg\varphi\}$ is dense in P.

In addition, if $G$ is M-generic, $p\in G$, and $D\in M$ is dense below p, then $G\cap D\ne\varnothing$. The same assertion applies to $D\cap\{q:q\le p\}$.

## Facts & Assumptions

**Given:** ZF, a nonempty forcing preorder P, and fixed names and a fixed formula. The final genericity assertion uses transitive ZF M containing P and its order.

[F1] [[def-forcing-relation-for-formulas]] defines conjunction, negation and existential forcing.

[F2] [[def-forcing-relation-for-atomic-formulas]] defines atomic forcing by common-extension and density conditions.

[F3] [[def-dense-open-sets-and-model-generic-filters]] defines density and nonempty, upward closed, internally directed generic filters.

## Proof

1.1 Every atomic forcing clause persists to stronger conditions: in the subset clause the tested common extensions below q are a subset of those below p, and equality is the conjunction of two such requirements; membership restricts its tested extensions in the same way. For density closure of subset, given $\langle u,s\rangle\in\sigma$ and $q\le p,s$, choose $a\le q$ forcing the subset, then apply its clause with that entry and common extension a. For equality, take a densely available condition forcing equality and perform this argument separately for each subset direction. For membership, given $q\le p$, first refine to a condition forcing membership and then refine once more to its equality/coefficient witness. These arguments prove atomic persistence and density closure. [F2, F3]

1.2 If D is dense below p, the set $D'=\{q\in D:q\le p\}\cup\{q:q\perp p\}$ is dense in P. Indeed a condition compatible with p has a common extension, which can be refined into D; an incompatible condition already belongs to the second set. For $D,p\in M$, Separation makes $D'\in M$. A generic G containing p meets $D'$, and directedness prevents it from meeting its incompatible part. Thus it meets $D\cap\{q:q\le p\}$. [F3]

2.1 Induct on formula complexity for persistence and density closure. For conjunction, persistence holds for each conjunct by induction; if conjunction is forced densely, each conjunct is forced densely and hence at p by induction. For negation, no extension of p forcing $\psi$ implies the same at every stronger condition. If negation is forced densely below p, a hypothetical $q\le p$ forcing $\psi$ has an extension r forcing its negation; persistence of $\psi$ makes r force $\psi$, contradicting the negation clause at r itself. [F1, step 1.1]

3.1 For an existential, let $W=\{r:\exists\sigma\ (r\Vdash\psi(\sigma,\vec\tau))\}$. Forcing the existential means W is dense below p. It is then dense below every stronger condition, proving persistence. If conditions below p forcing the existential are dense below p, any $q\le p$ has a refinement a below which W is dense, and hence a further refinement in W. Thus W is dense below p, proving density closure. Together with step 2.1, this completes the induction. [F1, F3, step 2.1]

4.1 Given any p, either some $q\le p$ forces $\varphi$, or no such q exists and p forces $\neg\varphi$ by definition. This proves external decision density. When the parameters belong to M, Separation inside M instead forms the set decided by $\Vdash^M$; F1 does not identify that set with the external one for quantified formulas. No condition forces both $\varphi$ and $\neg\varphi$, because p is one of its own extensions. All refinements used above are finitely many existential instantiations; no choice principle is used. [F1, step 3.1] ∎
