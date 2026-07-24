---
id: lem-cut-add-well-defined
kind: lemma
title: "Cut addition: $A+B$ is a cut, commutative and associative, with identity $0^{*}$"
status: published
origin: session
deps: [def-cut-addition, def-dedekind-cut, thm-rat-ordered-field]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Appendix: construction of ℝ)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://bookstore.ams.org/chel-79"
pipeline_run: null
---

## Statement

For Dedekind cuts $A, B$, the sumset $A + B = \{\, a + b : a \in A,\ b \in B \,\}$
([[def-cut-addition]]) is again a Dedekind cut. Addition of cuts is commutative
and associative, and $0^{*} = \{\, q \in \mathbb{Q} : q < 0 \,\}$ is a two-sided
identity: $A + 0^{*} = A$ for every cut $A$.

## Facts & Assumptions

**Given:** Dedekind cuts $A, B, C$; $A + B := \{\, a + b : a \in A,\ b \in B \,\}$ and $0^{*} := \{\, q \in \mathbb{Q} : q < 0 \,\}$ ([[def-cut-addition]]).

[A1] Cut axioms (C1)–(C3), and the restatement that for $a \in A$ and $b \notin A$ one has $a < b$; the contrapositive of (C2): if $x \notin A$ and $y > x$ then $y \notin A$ ([[def-dedekind-cut]]).

[L1] $\mathbb{Q}$ is a commutative, associative, totally ordered field; in particular addition is commutative and associative and the order is translation-invariant ([[thm-rat-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 (C1) $A + B$ is proper and nonempty: choosing $a \in A$, $b \in B$ gives $a + b \in A + B$, so $A + B \neq \varnothing$; choosing $a' \notin A$, $b' \notin B$, every $a \in A$, $b \in B$ satisfies $a < a'$ and $b < b'$, hence $a + b < a' + b'$, so $a' + b' \notin A + B$ and $A + B \neq \mathbb{Q}$. [A1, L1]

1.2 (C2) $A + B$ is downward closed: if $s = a + b \in A + B$ with $a \in A$, $b \in B$, and $q < s$, then $q - a < b$, so $q - a \in B$ by (C2) for $B$; hence $q = a + (q - a) \in A + B$. [A1, L1]

1.3 (C3) $A + B$ has no greatest element: given $s = a + b \in A + B$, (C3) for $A$ yields $a' \in A$ with $a' > a$, whence $a' + b \in A + B$ and $a' + b > a + b = s$. [A1, L1]

1.4 Commutativity and associativity descend from $\mathbb{Q}$: $A + B = \{a + b\} = \{b + a\} = B + A$, and $(A + B) + C = \{(a + b) + c\} = \{a + (b + c)\} = A + (B + C)$. [L1]

1.5 $A + 0^{*} \subseteq A$: for $a \in A$ and $q \in 0^{*}$ (so $q < 0$), $a + q < a$, hence $a + q \in A$ by (C2). [A1, L1]

1.6 $A \subseteq A + 0^{*}$: given $a \in A$, (C3) supplies $r \in A$ with $r > a$; then $a - r < 0$, so $a - r \in 0^{*}$, and $a = r + (a - r) \in A + 0^{*}$. [A1, L1]

2.1 $A + B$ satisfies (C1)–(C3), so it is a Dedekind cut. [step 1.1, step 1.2, step 1.3, A1]

2.2 The two inclusions give the identity law $A + 0^{*} = A$. [step 1.5, step 1.6]

3.1 Hence $A + B$ is a cut, and cut addition is commutative and associative with two-sided identity $0^{*}$. [step 2.1, step 1.4, step 2.2] ∎
