---
id: def-set-coded-formal-derivation
kind: definition
title: "Formal proofs from sentence theories"
status: published
origin: pipeline
deps: [def-set-coded-terms-and-formulas, def-theories-models-and-semantic-consequence, def-free-variables-and-syntactic-substitution]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014), sections 1H.1–1H.2, printed pages 34–35; adapted to the published primitive syntax"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
---

## Definition

Fix a set signature $L$ and a set $T$ of $L$-sentences, as in
[[def-theories-models-and-semantic-consequence]]. Use exactly the finite
syntax of [[def-set-coded-terms-and-formulas]]: negation, conjunction and
existential quantification are primitive. In particular,
$\forall x\phi$ abbreviates $\neg\exists x\neg\phi$ and
$\phi\to\psi$ abbreviates $\neg(\phi\land\neg\psi)$.
Equality below between displayed formulas means equality after expansion of
these abbreviations, not equivalence under first-order semantics.

The logical axioms are all instances of the following schemes. Terms are
arbitrary $L$-terms and formulas may have free variables. Substitution and
the free-for condition are those of
[[def-free-variables-and-syntactic-substitution]].

1. Every propositional tautology instance: substitute formulas for the
   letters of a finite Boolean expression whose value is true for every
   Boolean valuation. Expand Boolean abbreviations first. A quantified
   subformula may be substituted as a whole; first-order validity is not
   the definition of a tautology here.
2. $\forall x\phi\to\phi[t/x]$, when $t$ is free for $x$ in $\phi$.
3. $\forall x(\phi\to\psi)\to(\phi\to\forall x\psi)$, when
   $x\notin\operatorname{FV}(\phi)$.
4. $\phi[t/x]\to\exists x\phi$, when $t$ is free for $x$ in $\phi$.
5. $t=t$.
6. $s=t\to(\phi[s/x]\to\phi[t/x])$, when both $s$ and $t$ are free
   for $x$ in $\phi$.

There are exactly three inference rules:

- Modus ponens: from $\phi$ and $\phi\to\psi$, infer $\psi$.
- Universal generalization: from $\phi$, infer $\forall x\phi$.
- Restricted existential elimination: from $\phi\to\psi$, infer
  $\exists x\phi\to\psi$, provided $x\notin\operatorname{FV}(\psi)$.

A formal derivation from $T$ is a nonempty finite list of formulas, with
each line annotated as an assumption in $T$, a displayed axiom instance,
or an application of one of these rules to specified earlier line indices.
Rule parameters and substitution data are part of the finite annotation.
Write $T\vdash\theta$ when such a derivation ends with $\theta$, and
$\vdash\theta$ when $T=\varnothing$. All formulas, finite annotations
and finite lists range over sets; imposing the displayed line conditions
therefore specifies a set of proof codes, without a choice principle.

The premise that $T$ consists of sentences matters. For the same formal
line rules applied to additional open assumptions, semantic soundness and
discharge require restrictions: a generalized or existentially eliminated
variable must not occur free in the undischarged assumptions on which that
line depends. The sentence deduction theorem automatically satisfies this
restriction; an open-assumption deduction theorem must check both rules.

Existential introduction is an axiom scheme, not a consequence silently
imported from completeness. Neither replacement inside an existential
quantifier nor quantified double-negation equivalence is part of the syntax
convention; each must be derived from these rules when used. Soundness,
deduction, fresh-constant proof transformations and completeness are separate
proof obligations for this specified calculus. Domains are nonempty, as in
the structure convention; no model-existence theorem is assumed here.
