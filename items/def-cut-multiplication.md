---
id: def-cut-multiplication
kind: definition
title: "Multiplication and reciprocals of Dedekind cuts"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-dedekind-cut, def-real-dedekind, def-cut-order, def-cut-addition]
aliases: []
verification:
  precheck: n/a
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
    - title: "Construction of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Construction_of_the_real_numbers"
    - title: "M. Girotti, Addendum — Construction of $\\mathbb{R}$ via Dedekind's method (MATH 317, Advanced Calculus of One Variable)"
      url: "https://mathemanu.github.io/ConstructionofR.pdf"
pipeline_run: null
---

## Definition

Multiplication of Dedekind cuts ([[def-dedekind-cut]], [[def-real-dedekind]]) is
defined first for nonnegative cuts, then extended to all cuts by their signs
([[def-cut-order]]) via the absolute value.

**Positive case.** For cuts $A, B > 0^{*}$ (strictly positive),

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

- The product formula is stated only for strictly positive cuts $A, B > 0^{*}$:
  then there exist positive $a \in A$, $b \in B$, so the positive products $ab$
  are nonempty and, because $A, B$ have no greatest element (axiom (C3)),
  $A \cdot B$ has none either; together with downward closure this makes
  $A \cdot B$ a genuine cut, the clause $\{q \le 0\}$ being absorbed below those
  positive products. The formula is deliberately not applied at the boundary
  $A = 0^{*}$ or $B = 0^{*}$, where $\{q \le 0\}$ would leave $0$ as a greatest
  element and so fail to be a cut; products with a zero factor are supplied
  instead by the first sign rule, $A \cdot B = 0^{*}$, so the operation is well
  posed on all cuts.
- On the rational embedding $q \mapsto q^{*}$ the operation agrees with
  $\mathbb{Q}$: $(pq)^{*} = p^{*} \cdot q^{*}$ ([[lem-rat-cut-embeds]]); with
  $q^{*} \cdot (1/q)^{*} = 1^{*}$ that gives $(q^{*})^{-1} = (1/q)^{*}$ for
  $q > 0$, the reciprocal being the one supplied by [[lem-cut-reciprocal]].
- That these operations send cuts to cuts and satisfy the field axioms (
  commutativity, associativity, distributivity over addition, identity $1^{*}$,
  and $A \cdot A^{-1} = 1^{*}$ for every $A \ne 0^{*}$) is
  [[thm-reals-dedekind-field]].
