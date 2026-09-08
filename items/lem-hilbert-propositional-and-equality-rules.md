---
id: lem-hilbert-propositional-and-equality-rules
kind: lemma
title: "Derived propositional, quantifier and equality rules"
status: published
origin: pipeline
deps: [def-set-coded-formal-derivation]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Moschovakis, §§1H.5–1H.10 pp36–38; explicit local derivations for the adapted axiom schemes."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
proof_strategy: direct
---

## Statement

In the fixed calculus, Boolean identity, double negation, contraposition, conjunction introduction/elimination and explosion are derivable. Equality is symmetric and transitive and permits free-for formula substitution. Existential introduction, existential monotonicity, quantified double-negation replacement and fresh-variable quantifier renaming are derivable without completeness. Monotonicity means: from $T\vdash\phi\to\psi$ infer $T\vdash\exists x\phi\to\exists x\psi$. Renaming uses a variable $y$ absent from $\phi$.

## Facts & Assumptions

**Given:** A sentence theory $T$; formulas and free-for substitutions in the stated calculus.

[F1] Boolean tautology instances, both quantifier axioms, restricted distribution, reflexivity and formula equality substitution, with MP, generalization and restricted existential elimination, are specified in [[def-set-coded-formal-derivation]].

## Proof

1.1 The formulas $A\to A$, $A\to\neg\neg A$, $\neg\neg A\to A$, $(A\to B)\to(\neg B\to\neg A)$, $A\to(B\to A\land B)$, $A\land B\to A$, $A\land B\to B$, and $A\to(\neg A\to B)$ are Boolean tautologies, hence axioms. Applying MP to the displayed antecedents gives the asserted rules. Reflexivity gives $v_0=v_0$; generalization gives $\forall v_0(v_0=v_0)$, which is literally $\neg\bot$ for $\bot=\exists v_0\neg(v_0=v_0)$. From $\bot$ and this theorem, the last tautology yields any formula. Conversely contradictory formulas yield $\bot$ by the same tautology with $B=\bot$. [F1]

1.2 Suppose $y$ occurs nowhere in $\phi$. Instantiation gives $\forall x\phi\to\phi[y/x]$. Generalize $y$ and use restricted distribution, with $y$ absent from $\forall x\phi$, to obtain $\forall x\phi\to\forall y\phi[y/x]$. Conversely instantiate $\forall y\phi[y/x]$ at $x$. The substitution is free-for and returns $\phi$: each new free $y$ is at an originally free $x$ position, hence below no $x$ binder. Generalizing $x$ and distributing gives the converse implication, since $x$ is not free in $\forall y\phi[y/x]$. [F1]

2.1 Choose a variable $z$ absent from the displayed terms. Apply equality substitution to the formula $z=s$: $s=t\to(s=s\to t=s)$. Reflexivity and Boolean commutation of antecedents give $s=t\to t=s$. For transitivity use the formula $s=z$: $t=u\to(s=t\to s=u)$. MP gives $s=u$ from $s=t,t=u$. More generally the stated free-for formula substitution is already an axiom, and two MP applications give its inference; symmetry gives the reverse inference. [F1, step 1.1]

2.2 The axiom $\phi[t/x]\to\exists x\phi$ followed by MP proves existential introduction whenever $t$ is free for $x$. Given a proved $\phi\to\psi$, combine it with the instance $\psi\to\exists x\psi$ (substitution $x/x$) using the Boolean composition tautology. This gives $\phi\to\exists x\psi$. Existential elimination now gives $\exists x\phi\to\exists x\psi$, since $x$ is not free in its consequent. Apply this to each of $\neg\neg\phi\to\phi$ and $\phi\to\neg\neg\phi$ from step 1.1. The resulting two implications prove $\exists x\neg\neg\phi\leftrightarrow\exists x\phi$. [F1, step 1.1]

3.1 For existential renaming, introduction gives $\phi[y/x]\to\exists x\phi$; eliminate $y$, which is absent from the consequent. For the reverse direction introduction at $x$ gives $\phi\to\exists y\phi[y/x]$ by the same inverse-substitution calculation as step 1.2; eliminate $x$, which is absent from this consequent. Thus both renaming implications are theorems, including vacuous binders. No semantic equivalence has been substituted for a syntactic rule. [F1, step 1.2] ∎
