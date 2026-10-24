---
id: thm-montague-levy-finite-reflection
kind: theorem
title: "Montague–Lévy reflection for a finite formula family"
status: published
origin: pipeline
deps: [lem-finite-formula-witness-rank-bounds, lem-finite-formula-witness-criterion, def-cumulative-hierarchy-stages, prop-cumulative-hierarchy-transitivity-and-growth, thm-recursion]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Geschke, Models of Set Theory — Theorem 4.3, complete proof pp10–11; Freiburg Theorem 3.5.10 pp53–54"
      url: "https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf"
---


## Statement

In ZF, for each fixed finite family $\Phi$ and every ordinal $\alpha$, some $\beta>\alpha$ makes $\Phi$ absolute between $V_\beta$ and $V$, for all tuples in $V_\beta$. More generally the same holds between $W_\beta$ and $W$ for a definable increasing continuous hierarchy of sets exhausting a definable nonempty class $W$. For an empty class, the relativization statement is interpreted as a scheme rather than satisfaction in an empty structure.

## Facts & Assumptions

[F1] [[lem-finite-formula-witness-rank-bounds]]: For a fixed finite family of formulas and each ordinal $\alpha$, there is a definable ordinal $b(\alpha)>\alpha$ such that every true existential instance with parameters in $V_\alpha$ has a witness of rank below $b(\alpha)$. More generally, for a definable increasing exhaustive hierarchy of sets $W_\gamma$ with union $W$, the witnesses in $W$ can be bounded by a single stage $W_{b(\alpha)}$ for parameters in $W_\alpha$.

[F2] [[lem-finite-formula-witness-criterion]]: Let $\Phi$ be a finite family of membership formulas closed under subformulas, and let $\varnothing\ne C\subseteq D$ have actual restricted membership. All formulas of $\Phi$ agree between $C,D$ iff whenever $\exists x\,\psi(x,\bar a)\in\Phi$ is true in $D$ with $\bar a\in C$, some $b\in C$ satisfies $\psi^D(b,\bar a)$. Definable-class versions are schemes.

[F3] [[prop-cumulative-hierarchy-transitivity-and-growth]]: In ZF without Foundation, every $V_\alpha$ is transitive and $\alpha\le\beta$ implies $V_\alpha\subseteq V_\beta$. Also $V_\alpha\cap\operatorname{Ord}=\alpha$, and both $\alpha$ and $V_\alpha$ belong to $V_{\alpha+1}\setminus V_\alpha$.

[F4] [[def-cumulative-hierarchy-stages]]: In ZF without Foundation define the cumulative hierarchy by

$$V_0=\varnothing,\qquad V_{\alpha+1}=\mathcal P(V_\alpha),\qquad V_\lambda=\bigcup_{\beta<\lambda}V_\beta\quad(\lambda\text{ a nonzero limit ordinal}).$$

For each ordinal $\theta$, use the set well-order recursion schema on $\theta+1$. On histories of domain $0$ return $\varnothing$; on domain $\beta+1$ return the power set of the last value; on nonzero limit domains return the union of the range. Each is a unique set. Recursions on different ordinal intervals agree on overlaps by the uniqueness clause applied to the smaller interval. Hence the definition of $V_\alpha$ as the value at $\alpha$ is uniform and independent of the chosen interval. Power Set is used at successors and Replacement and Union at limits. The notation $\langle V_\alpha:\alpha\in\operatorname{Ord}\rangle$ denotes a definable class function, not a set sequence.

Conventions and prerequisites: thm-transfinite-recursion, lem-ordinal-basics, def-limit-ordinal.

## Proof

**Given:** Ambient ZF, a fixed finite family, an ordinal bound, and the stated hierarchy hypotheses.

1.1 Expand abbreviations and close $\Phi$ under subformulas; the resulting family is still finite. Take the definable witness bound $b$ from F1 for this family. Start $\beta_0>\alpha$, increasing it if necessary so that $W_{\beta_0}$ is nonempty in the general nonempty-class case. For $V$, $\beta_0=\alpha+1$ suffices. [F1, given]

2.1 Define $\beta_{n+1}=b(\beta_n)$ and $\beta=\sup_{n\in\omega}\beta_n$. This definable class recursion yields a set sequence in ZF as follows: induction on $n$ gives a unique finite attempt of length $n+1$; extending the attempt applies the definable function $b$ once. Uniqueness makes its endpoint a functional formula, so Replacement on $\omega$ collects all endpoints. Union gives their supremum. Thus no fixed set containing all possible ordinals and no choice function is required. Strict increase implies $\beta>\alpha$ and makes $\beta$ a nonzero limit ordinal. [F1, step 1.1]

3.1 Continuity and monotonicity give $W_\beta=\bigcup_n W_{\beta_n}$: any earlier index is below some $\beta_n$. A finite tuple from this union is contained in one stage, by taking the maximum of finitely many indices; the empty tuple is in every stage. If an existential from the closed family is true in $W$ at that tuple, F1 gives a witness in $W_{\beta_{n+1}}\subseteq W_\beta$. [F1, step 2.1]

4.1 The finite witness criterion F2 therefore gives agreement for every member of the closed family, hence for $\Phi$. For $V$, F3 supplies the increasing transitive hierarchy and its limit clause is F4; Foundation supplies exhaustion. Power Set constructs successor stages, Separation and Replacement construct the rank bounds, and Infinity, Replacement and Union supply step 2.1. For an empty $W$ every positive-arity tuple assertion is vacuous and closed-formula relativizations agree because both domains are empty. The entire construction is choice-free. [F2, F3, F4, step 3.1] ∎
