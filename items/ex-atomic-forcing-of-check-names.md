---
id: "ex-atomic-forcing-of-check-names"
kind: "example"
title: "Atomic forcing of check names"
deps: ["def-forcing-relation-for-atomic-formulas", "lem-atomic-forcing-relation-is-well-founded-and-definable", "def-check-names-and-the-canonical-generic-name"]
justified_by: []
forward_refs: []
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Neeman, Forcing (2011), section 1, Theorem 1.16 and its complete atomic/formula proof, Lemmas 1.17 and 1.25–1.28, pp.4–9; section 2.1, Lemma 2.2 through Theorem 2.6, pp.10–11"
      url: "https://www.math.ucla.edu/~ineeman/223s.1.11s/223s-spring11-lecture-notes-6-5.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Example

In ZF, for every nonempty forcing preorder P, ground sets x,y and $p\in P$,

$$p\Vdash\check x=\check y\ \Longleftrightarrow\ x=y,\qquad p\Vdash\check x\in\check y\ \Longleftrightarrow\ x\in y.$$

Use all-conditions check names; the computation does not assume generics exist.

## Facts & Assumptions

**Given:** P nonempty, p in P and sets x,y. If working over a transitive ground model, x,y and P belong to it and all clauses are internal there.

[F1] [[def-forcing-relation-for-atomic-formulas]] gives the expanded subset/equality clauses and dense membership clause.

[F2] [[lem-atomic-forcing-relation-is-well-founded-and-definable]] licenses the unique atomic recursion and atomic absoluteness.

[F3] [[def-check-names-and-the-canonical-generic-name]] has each entry $\langle\check u,s\rangle$ for every $u\in x$ and every $s\in P$.

## Verification

1.1 Induct on the sorted pair of membership ranks of x,y to compute equality. If $x=y$, given any entry $\langle\check u,s\rangle\in\check x$ and any $q\le p,s$, take the entry $\langle\check u,q\rangle\in\check y$ and r=q. The induction hypothesis gives $q\Vdash\check u=\check u$, since u is a member of both x and y and both ranks decreased. Thus both subset clauses hold at p. If $x\ne y$, choose a member u of one of the two differences, say $u\in x\setminus y$. The entry $\langle\check u,p\rangle\in\check x$ and common extension q=p have no witness in $\check y$: every $v\in y$ differs from u, and the equality induction says no r forces $\check u=\check v$. The subset clause fails, hence so does equality. The other difference gives the symmetric failure. If both sets are empty the two subset clauses are vacuous, starting the induction. [F1, F2, F3]

2.1 Suppose $x\in y$. For any $q\le p$, the entry $\langle\check x,q\rangle\in\check y$ together with r=q is a membership witness: equality of $\check x$ with itself was proved in step 1.1 for every ground x and every condition. Hence p forces membership. If $x\notin y$, every candidate $v\in y$ differs from x, so step 1.1 excludes its equality witness at every r. The membership witness set is empty and cannot be dense below p, since p itself has no refinement in it. Thus no condition forces membership. [F1, F3, step 1.1]

3.1 These are exactly both biconditionals. For example, putting $x=\varnothing$ and $y=\{\varnothing\}$ gives forced membership and failed equality at every condition, while $x=y=\varnothing$ gives forced equality and failed membership. The coefficient computations above use no maximal antichain, generic existence or AC. [step 1.1, step 2.1] ∎
