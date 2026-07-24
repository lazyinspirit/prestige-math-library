---
id: def-cut-multiplication
kind: definition
title: "Multiplication and reciprocals of Dedekind cuts"
status: published
origin: session
deps: [def-dedekind-cut, def-real-dedekind, def-cut-order, def-cut-addition]
aliases: []
verification:
  precheck: n/a
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

## Definition

Multiplication of Dedekind cuts ([[def-dedekind-cut]], [[def-real-dedekind]]) is
defined first for nonnegative cuts, then extended to all cuts by their signs
([[def-cut-order]]) via the absolute value.

**Nonnegative case.** For cuts $A, B \ge 0^{*}$,

$$A \cdot B := \{\, q \in \mathbb{Q} : q \le 0 \,\} \;\cup\; \{\, a b : a \in A,\ b \in B,\ a > 0,\ b > 0 \,\}.$$

**Absolute value.** $|A| := A$ if $A \ge 0^{*}$, and $|A| := -A$ otherwise
([[def-cut-addition]] for $-A$); thus $|A| \ge 0^{*}$ always, and $|0^{*}| = 0^{*}$.

**Sign extension.** For arbitrary cuts $A, B$,

- $A \cdot B := 0^{*}$ if $A = 0^{*}$ or $B = 0^{*}$;
- $A \cdot B := |A| \cdot |B|$ if $A, B$ are both $> 0^{*}$ or both $< 0^{*}$;
- $A \cdot B := -\bigl(|A| \cdot |B|\bigr)$ if $A, B$ have opposite signs.

**Identity.** The multiplicative identity is $1^{*} = \{\, r \in \mathbb{Q} : r < 1 \,\}$.

**Reciprocal.** For $A > 0^{*}$,

$$A^{-1} := \{\, p \in \mathbb{Q} : p \le 0 \,\} \;\cup\; \{\, p > 0 : \exists\, s \in \mathbb{Q},\ s > 0,\ s \notin A,\ p < 1/s \,\}.$$

Equivalently, a positive rational $p$ lies in $A^{-1}$ iff $1/p$ is an upper
rational bound of $A$ that is *not* the least one (Rudin's construction). For
$A < 0^{*}$, set $A^{-1} := -\bigl((-A)^{-1}\bigr)$. Division is
$A / B := A \cdot B^{-1}$ for $B \ne 0^{*}$.

## Remarks

- When $A, B > 0^{*}$ there exist positive $a \in A$, $b \in B$, so the positive
  products $ab$ are nonempty and, because $A, B$ have no greatest element
  (axiom (C3)), $A \cdot B$ has none either; together with downward closure this
  makes $A \cdot B$ a genuine cut. The clause $\{q \le 0\}$ is then absorbed
  below those positive products. The degenerate boundary $A = 0^{*}$ (where that
  clause would leave $0$ as a greatest element) is fixed separately by the first
  sign rule, $0^{*} \cdot B = 0^{*}$, so the definition is well posed.
- On the rational embedding $q \mapsto q^{*}$ the operation agrees with
  $\mathbb{Q}$: $(pq)^{*} = p^{*} \cdot q^{*}$, and $(q^{*})^{-1} = (1/q)^{*}$
  for $q > 0$ ([[lem-rat-cut-embeds]]).
- That these operations send cuts to cuts and satisfy the field axioms (
  commutativity, associativity, distributivity over addition, identity $1^{*}$,
  and $A \cdot A^{-1} = 1^{*}$ for every $A \ne 0^{*}$) is
  [[thm-reals-dedekind-field]].
