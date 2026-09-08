---
id: thm-set-language-first-order-soundness
kind: theorem
title: "Soundness for arbitrary set signatures"
status: draft
origin: pipeline
deps: [def-set-coded-formal-derivation, lem-formula-substitution-satisfaction, lem-satisfaction-coincidence, def-theories-models-and-semantic-consequence]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Moschovakis, Theorem 1H.4 p36; local semantic verification of all six axiom schemes and three rules."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
proof_strategy: direct
---

## Statement

In ZF, for any set signature and sentence theory $T$, if $T\vdash\phi$, every nonempty set structure satisfying $T$ satisfies $\phi$ under every assignment. Consequently a theory with a model is consistent.

## Facts & Assumptions

**Given:** A nonempty $L$-structure $M\models T$, an arbitrary assignment $s$, and a finite derivation from $T$.

[F1] The six axiom schemes and three rules are in [[def-set-coded-formal-derivation]].

[F2] Free-for substitution satisfies $M,s\models\alpha[t/x]$ iff $M,s[x:=\llbracket t\rrbracket_s]\models\alpha$. ([[lem-formula-substitution-satisfaction]])

[F3] Satisfaction depends only on free variables, and sentence truth is assignment-independent. ([[lem-satisfaction-coincidence]])

[F4] Semantic consequence quantifies over nonempty set structures and every assignment. ([[def-theories-models-and-semantic-consequence]])

## Proof

1.1 Assumptions in $T$ are true at every assignment by the hypothesis and coincidence. Boolean tautologies are true under the Boolean values of their constituent formulas. Reflexivity is true because a term's value equals itself. For equality substitution, if $s_0=t_0$ is true, their denotations agree; updating $x$ with either value gives the same assignment, so F2 gives equal truth values for the two substituted formulas. Thus its implication is true. [F1, F2, F3]

1.2 Universal instantiation is true: the universal truth clause includes the particular value $\llbracket t\rrbracket_s$, and F2 identifies the instance. Existential introduction is true: a true instance supplies precisely that value as a witness by F2. For distribution, if $\forall x(\alpha\to\beta)$ and $\alpha$ are true at $s$, then $\alpha$ stays true at every $s[x:=a]$ because $x$ is not free in it. The universal premise gives $\beta$ at each such assignment, hence $\forall x\beta$ at $s$. [F1, F2, F3]

2.1 Induct on proof lines with the invariant “true under every assignment in $M$.” MP preserves this invariant by the implication truth table. For generalization, the invariant for its premise holds at each $s[x:=a]$, so its universal conclusion holds at $s$. [F1, step 1.1, step 1.2]

3.1 For existential elimination, suppose $M,s\models\exists x\alpha$. Take one witness $a$. The invariant for the earlier implication $\alpha\to\beta$ applies at $s[x:=a]$, giving $\beta$ there. Since the rule requires $x$ absent from $\operatorname{FV}(\beta)$, F3 gives $\beta$ at $s$. If the existential antecedent is false the conclusion is true by its Boolean clause. This verifies the third rule and finishes the induction. [F1, F3, step 2.1]

4.1 Thus the last line is true at every assignment in every model of $T$, exactly F4. No such model satisfies $\bot=\exists v_0\neg(v_0=v_0)$, because every candidate witness equals itself. A proof of $\bot$ would contradict the established invariant, so any theory with a model is consistent. Only one witness was used for one implication in step 3.1; no family of witnesses or AC is required. [F4, step 3.1] ∎
