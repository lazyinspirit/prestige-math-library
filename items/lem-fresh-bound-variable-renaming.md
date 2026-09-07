---
id: lem-fresh-bound-variable-renaming
kind: lemma
title: "Fresh bound-variable renaming preserves truth"
status: draft
origin: pipeline
deps: ["lem-formula-substitution-satisfaction"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Weiss, An Introduction to Set Theory (2014) \u2014 chapter 1 pp.16\u201318."
      url: "https://www.math.toronto.edu/~weiss/Set_Theory.pdf"
---

## Statement

If $z\ne y$ is absent from $\operatorname{Var}(\psi)$, then $z$ is free for $y$ in $\psi$, and $\exists y\psi$ and $\exists z(\psi[z/y])$ have the same truth in every structure and assignment. Here raw substitution replaces only occurrences free in $\psi$, hence only those bound by the displayed outer binder. A least fresh variable exists outside any specified finite set of variables.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] If $t$ is free for $x$ in $\phi$, then for every structure $\mathcal M$ and assignment $s$, $$\mathcal M,s\models\phi[t/x]\iff\mathcal M,s[x:=\llbracket t\rrbracket_s]\models\phi.$$ ([[lem-formula-substitution-satisfaction]])

## Proof

1.1 No binder in $\psi$ uses $z$, so substitution introduces no capture. At an assignment $s[z:=a]$, the free-for identity gives truth of $\psi[z/y]$ exactly when $\psi$ is true at $s[z:=a][y:=a]$. [F1]

2.1 Since $z$ is absent from $\psi$, coincidence (as used in the free-for lemma) removes the update at $z$ when evaluating $\psi$. The last assignment therefore gives the same truth as $s[y:=a]$. Quantifying over the same $a\in M$ proves the claimed equivalence. Inner binders for $y$ were untouched by the raw substitution rule. [F1, step 1.1]

3.1 A finite set of variable indices is bounded in $\omega$, by induction over its finite listing and taking successive maxima. There is an index outside it, and the least such index is uniquely specified by the natural order. This proves the fresh-variable assertion without choosing from a family of sets. [given] ∎

