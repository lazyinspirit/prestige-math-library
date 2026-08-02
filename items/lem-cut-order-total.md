---
id: lem-cut-order-total
kind: lemma
title: "Inclusion totally orders the Dedekind reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cut-order, def-dedekind-cut, thm-rat-ordered-field]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Appendix: construction of ℝ)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Math 331 course handout: Dedekind Cuts and Real Numbers (Hobart and William Smith Colleges)"
      url: "https://math.hws.edu/~mitchell/Math331S14/DedekindCutsHandOUt.pdf"
    - title: "Dedekind cut (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dedekind_cut"
pipeline_run: null
---

## Statement

Set inclusion totally orders the Dedekind reals ([[def-cut-order]]): the relation
$A \le B :\Leftrightarrow A \subseteq B$ on cuts ([[def-dedekind-cut]]) is
reflexive, antisymmetric (with antisymmetry delivering set equality $A = B$),
and transitive, and it is moreover **total**: for any two cuts $A, B$, either
$A \subseteq B$ or $B \subseteq A$.

## Facts & Assumptions

**Given:** Dedekind cuts $A, B \in \mathbb{R}$, ordered by inclusion ([[def-cut-order]]).

[A1] Set inclusion $\subseteq$ is a partial order on any family of sets: reflexive ($A \subseteq A$), antisymmetric (mutual inclusion $A \subseteq B$, $B \subseteq A$ gives $A = B$), and transitive.

[A2] The order on $\mathbb{Q}$ is total ([[thm-rat-ordered-field]]): for rationals $x, y$ exactly one of $x < y$, $x = y$, $y < x$ holds.

[L1] Downward closure (C2): if $p \in A$ and $q < p$ then $q \in A$, and likewise for $B$ ([[def-dedekind-cut]]).

## Proof

**Proof technique:** direct.

1.1 The relation $\le$ is set inclusion, and $\subseteq$ is reflexive, antisymmetric (mutual inclusion $A \subseteq B$ and $B \subseteq A$ forces the set equality $A = B$), and transitive; hence $\le$ is a partial order on $\mathbb{R}$. [A1]

1.2 It remains to establish totality. Fix cuts $A, B$; if $A \subseteq B$ there is nothing to prove, so assume $A \not\subseteq B$. It suffices to show $B \subseteq A$. [suffices: B ⊆ A when A ⊄ B]

2.1 Since $A \not\subseteq B$, choose a rational $x$ with $x \in A$ and $x \notin B$. [step 1.2, choose]

3.1 Every $y \in B$ satisfies $y < x$: otherwise $x \le y$ by trichotomy, and then downward closure of $B$ places $x \in B$ (directly if $x < y$, or as $x = y \in B$), contradicting $x \notin B$. [step 2.1, L1, A2]

4.1 Fix any $y \in B$. From $y < x$ together with $x \in A$, downward closure of $A$ gives $y \in A$; as $y \in B$ was arbitrary, $B \subseteq A$. [step 2.1, step 3.1, L1]

5.1 Thus for all cuts $A, B$, $A \subseteq B$ or $B \subseteq A$, so $\le$ is total; combined with the partial-order properties, set inclusion is a total order on $\mathbb{R}$. [step 1.1, step 1.2, step 4.1] ∎
