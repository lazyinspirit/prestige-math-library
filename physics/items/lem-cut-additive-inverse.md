---
id: lem-cut-additive-inverse
kind: lemma
title: "For a cut $A$, $-A$ is a cut and $A + (-A) = 0^{*}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cut-addition, def-dedekind-cut, lem-cut-add-well-defined, lem-rat-archimedean, thm-rat-ordered-field, thm-well-ordering-principle]
aliases: []
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
    - title: "E. Landau, Foundations of Analysis"
      url: "https://bookstore.ams.org/chel-79"
    - title: "M. Girotti, Addendum — Construction of $\\mathbb{R}$ via Dedekind's method (MATH 317, Advanced Calculus of One Variable)"
      url: "https://mathemanu.github.io/ConstructionofR.pdf"
    - title: "Math 331 course handout: Dedekind Cuts and Real Numbers (Hobart and William Smith Colleges)"
      url: "https://math.hws.edu/~mitchell/Math331S14/DedekindCutsHandOUt.pdf"
pipeline_run: null
---

## Statement

For every Dedekind cut $A$, the set
$-A = \{\, p \in \mathbb{Q} : \exists\, r \in \mathbb{Q},\ r > 0,\ -p - r \notin A \,\}$
([[def-cut-addition]]) is again a Dedekind cut, and
$A + (-A) = 0^{*}$, where $0^{*} = \{\, q \in \mathbb{Q} : q < 0 \,\}$. Thus every
cut has an additive inverse and $(\mathbb{R}, +)$ is a group.

## Facts & Assumptions

**Given:** A Dedekind cut $A$; $-A := \{\, p \in \mathbb{Q} : \exists\, r > 0,\ -p - r \notin A \,\}$, $\ A + (-A) := \{\, a + p : a \in A,\ p \in -A \,\}$, and $0^{*} := \{\, q \in \mathbb{Q} : q < 0 \,\}$ ([[def-cut-addition]]).

[A1] Cut axioms (C1)–(C3), and the restatement that for $a \in A$ and $b \notin A$ one has $a < b$; the contrapositive of (C2): if $x \notin A$ and $y > x$ then $y \notin A$ ([[def-dedekind-cut]]).

[A2] A nonempty set $K \subseteq \mathbb{Z}$ with $k < M$ for every $k \in K$, where $M \in \mathbb{Z}$, has a greatest element: $\{\, M - k : k \in K \,\}$ is then a nonempty set of positive integers, so it has a least element $M - n$ by "every nonempty subset $S \subseteq \mathbb{N}$ has a least element" ([[thm-well-ordering-principle]]), and that $n$ is the greatest element of $K$.

[L1] $\mathbb{Q}$ is Archimedean: for every rational $x$ there is a natural number $n$ with $x < n$ ([[lem-rat-archimedean]]).

[L2] $\mathbb{Q}$ is a totally ordered field; addition, negation, and scaling by positive rationals respect the order ([[thm-rat-ordered-field]]).

[L3] If $A$ and $-A$ are cuts then $A + (-A)$ is a cut ([[lem-cut-add-well-defined]]).

## Proof

**Proof technique:** direct.

1.1 (C1, nonempty) $A \neq \mathbb{Q}$, so pick $s \notin A$; then $p_{0} := -s - 1$ satisfies $-p_{0} - 1 = s \notin A$ with witness $r = 1 > 0$, so $p_{0} \in -A$ and $-A \neq \varnothing$. [A1, choose]

1.2 (C1, proper) $A \neq \varnothing$, so pick $a \in A$; then $-a \notin -A$, for if $-a \in -A$ there were $r > 0$ with $a - r = -(-a) - r \notin A$, yet $a - r < a \in A$ forces $a - r \in A$ by (C2), a contradiction. Hence $-A \neq \mathbb{Q}$. [A1, L2]

1.3 (C2, downward closed) If $p \in -A$ with witness $r > 0$ (so $-p - r \notin A$) and $q < p$, then $-q - r > -p - r$, so $-q - r \notin A$ by the contrapositive of (C2); thus $q \in -A$ with the same $r$. [A1, L2]

1.4 (C3, no greatest) If $p \in -A$ with witness $r > 0$, set $t := p + r/2 > p$; then $-t - r/2 = -p - r \notin A$, so $t \in -A$ with witness $r/2 > 0$, and $t > p$. [A1, L2]

1.5 ($A + (-A) \subseteq 0^{*}$) For $a \in A$ and $p \in -A$ with witness $r > 0$: since $-p - r \notin A$ while $a \in A$, the restatement gives $a < -p - r$, so $a + p < -r < 0$; hence $a + p \in 0^{*}$. [A1, L2]

1.6 (setup) Fix $v \in 0^{*}$ and put $w := -v/2$, so $w > 0$ since $v < 0$; by (C1) choose $a_{0} \in A$ (as $A \neq \varnothing$) and $b_{0} \notin A$ (as $A \neq \mathbb{Q}$). [A1, L2, choose]

2.1 ($-A$ is a cut) $-A$ satisfies (C1)–(C3), so $-A$ is a Dedekind cut. [step 1.1, step 1.2, step 1.3, step 1.4, A1]

2.2 (bounded above) Apply [L1] to the rational $b_{0}/w$: there is a natural $M$ with $b_{0}/w < M$, so $b_{0} < Mw$ since $w > 0$; because $b_{0} \notin A$ and $Mw > b_{0}$, the contrapositive of (C2) gives $Mw \notin A$, whence any $k \in \mathbb{Z}$ with $kw \in A$ satisfies $k < M$ (else $k \ge M$ gives $kw \ge Mw$, so $kw \notin A$ by the contrapositive of (C2)), so $K := \{\, k \in \mathbb{Z} : kw \in A \,\}$ is bounded above by $M$. [step 1.6, L1, L2, A1]

2.3 (nonempty) Apply [L1] to the rational $-a_{0}/w$: there is a natural $N$ with $-a_{0}/w < N$, so $-Nw < a_{0}$ since $w > 0$; because $a_{0} \in A$ and $-Nw < a_{0}$, (C2) gives $-Nw \in A$, so $-N \in K$ and $K \neq \varnothing$. [step 1.6, L1, L2, A1]

3.1 (greatest element) $K$ is a nonempty set of integers bounded above, so by [A2] it has a greatest element $n$; then $nw \in A$ because $n \in K$, while $n + 1 > n$ gives $n + 1 \notin K$, i.e. $(n+1)w \notin A$. [step 2.2, step 2.3, A2]

4.1 ($0^{*} \subseteq A + (-A)$) With $n$ from step 3.1, set $p := -(n+2)w$; the witness $r = w > 0$ gives $-p - w = (n+1)w \notin A$, so $p \in -A$, while $nw \in A$, and $nw + p = nw - (n+2)w = -2w = v$. Hence $v = nw + p \in A + (-A)$; as $v \in 0^{*}$ was arbitrary, $0^{*} \subseteq A + (-A)$. [step 3.1, A1, L2]

5.1 The inclusions of steps 1.5 and 4.1 give $A + (-A) = 0^{*}$; with $-A$ a cut (step 2.1) and $A + (-A)$ therefore a cut [L3], $A$ has additive inverse $-A$. [step 1.5, step 4.1, step 2.1, L3] ∎
