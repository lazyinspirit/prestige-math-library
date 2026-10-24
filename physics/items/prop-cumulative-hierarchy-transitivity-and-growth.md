---
id: prop-cumulative-hierarchy-transitivity-and-growth
kind: proposition
title: "Transitivity and growth of hierarchy stages"
status: published
origin: pipeline
deps: ["def-cumulative-hierarchy-stages", "thm-transfinite-induction"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Marks, Set Theory, Berkeley edition \u2014 7.2 p.34."
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---

## Statement

In ZF without Foundation, every $V_\alpha$ is transitive and $\alpha\le\beta$ implies $V_\alpha\subseteq V_\beta$. Also $V_\alpha\cap\operatorname{Ord}=\alpha$, and both $\alpha$ and $V_\alpha$ belong to $V_{\alpha+1}\setminus V_\alpha$.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] In ZF without Foundation define the cumulative hierarchy by $$V_0=\varnothing,\qquad V_{\alpha+1}=\mathcal P(V_\alpha),\qquad V_\lambda=\bigcup_{\beta<\lambda}V_\beta\quad(\lambda\text{ a nonzero limit ordinal}).$$ For each ordinal $\theta$, use the set well-order recursion schema on $\theta+1$. On histories of domain $0$ return $\varnothing$; on domain $\beta+1$ return the power set of the last value; on nonzero limit domains return the union of the range. Each is a unique set. Recursions on different ordinal intervals agree on overlaps by the uniqueness clause applied to the smaller interval. Hence the definition of $V_\alpha$ as the value at $\alpha$ is uniform and independent of the chosen interval. Power Set is used at successors and Replacement and Union at limits. The notation $\langle V_\alpha:\alpha\in\operatorname{Ord}\rangle$ denotes a definable class function, not a set sequence. Conventions and prerequisites: thm-transfinite-recursion, lem-ordinal-basics, def-limit-ordinal. ([[def-cumulative-hierarchy-stages]])

[F2] Let $(W, <)$ be a well-order (def-well-order) and let $S \subseteq W$ satisfy the following: for every $a \in W$, if $W_{<a} \subseteq S$ then $a \in S$ (def-initial-segment). Then $S = W$. In property form: if a property $P$ of elements of $W$ satisfies "whenever $P(x)$ holds for every $x < a$, it holds at $a$", then $P(a)$ holds for every $a \in W$. **This is a theorem of ZF.** No form of the Axiom of Choice is used. Choice is perfectly available at this point in the library, since Zorn's lemma is proved from it on the previous page; the claim made here is about this proof, which never invokes it. ([[thm-transfinite-induction]])

## Proof

1.1 Induct on ordinal stages, applying set transfinite induction on each sufficiently long ordinal interval. The empty stage is transitive. If $T$ is transitive then $T\subseteq\mathcal P(T)$ and $\mathcal P(T)$ is transitive: $z\in y\subseteq T$ implies $z\in T$ and thus $z\subseteq T$. A union of transitive sets is transitive. These observations establish transitivity and, simultaneously, nesting at successors and limits. [F1, F2]

2.1 A second induction gives $V_\alpha\cap\operatorname{Ord}=\alpha$. At zero both are empty. An ordinal $\gamma$ lies in $V_{\beta+1}$ iff $\gamma\subseteq V_\beta$, iff all its ordinal members belong to $\beta$, iff $\gamma\le\beta$; thus the intersection is $\beta+1$. At a nonzero limit the intersection is the union of the earlier ordinal intersections, namely the limit itself. [F1, F2, step 1.1]

3.1 Consequently $\alpha\subseteq V_\alpha$ but $\alpha\notin V_\alpha$, and hence $\alpha\in V_{\alpha+1}$. Also $V_\alpha\subseteq V_\alpha$ gives $V_\alpha\in V_{\alpha+1}$. To exclude $V_\alpha\in V_\alpha$, observe that any $u\in V_\alpha$ is a subset of some $V_\beta$ with $\beta<\alpha$: this holds at successors directly, at limits by passing to an earlier stage, and at zero vacuously. If $u=V_\alpha$, then $\alpha\subseteq V_\alpha\subseteq V_\beta$, making $\alpha\in V_{\beta+1}\subseteq V_\alpha$, a contradiction. [F1, step 1.1, step 2.1] ∎
