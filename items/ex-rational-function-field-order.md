---
id: ex-rational-function-field-order
kind: example
title: "The rational function field $\\mathbb{R}(t)$ ordered by the eventual sign is an ordered field, worked out"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-rational-function-field-as-a-fraction-field, cex-ordered-field-not-archimedean, def-ordered-field, def-field, def-archimedean-field, lem-of-square-positive, lem-of-sign-rules, lem-of-inverse-positive, lem-of-q-embeds, thm-reals-ordered-field, thm-polynomial-degree-of-a-product-over-a-domain, def-polynomial-degree-leading-coefficient-and-monic, lem-of-abs-value, def-abs-value]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-13
    scope: published-dependency-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "D. J. Eck, Axioms for the Real Numbers"
      url: "https://math.hws.edu/eck/math331/guide2020/04-axioms-for-R.html"
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "Field of fractions (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Field_of_fractions"
    - title: "Archimedean property (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Archimedean_property"
pipeline_run: null
---

## Example

Let $\mathbb{R}(t)$ be the field of fractions ([[cor-rational-function-field-as-a-fraction-field]]) of the polynomial ring
$\mathbb{R}[t]$, and let

$$P \;=\; \{\, f \in \mathbb{R}(t) : f \ne 0 \text{ and } f(x) > 0 \text{ for all sufficiently large real } x \,\}.$$

[[cex-ordered-field-not-archimedean]] proves that $(\mathbb{R}(t), P)$ is an
ordered field and that it is not Archimedean. This example works the order out
in usable form. Three things are established below:

1. **A computation rule.** For $f = p/q$ with $p, q \in \mathbb{R}[t]$ nonzero,
   $f \in P$ exactly when $\operatorname{lc}(p)\operatorname{lc}(q) > 0$, where
   $\operatorname{lc}$ is the leading coefficient. So comparing two rational
   functions is comparing one product of two real numbers.
2. **That the rule is independent of the representative** $p/q$ chosen, which is
   what makes it a definition of a function on $\mathbb{R}(t)$ and not merely on
   pairs.
3. **The two elements that make the field interesting**: $t$, which exceeds
   every canonical natural, and $1/t$, which is positive and lies below every
   positive rational. An element of the second kind is called an
   *infinitesimal*, and its existence is exactly the failure of the Archimedean
   property ([[def-archimedean-field]]).

## Facts & Assumptions

**Given:** The field $\mathbb{R}(t)$ of fractions of $\mathbb{R}[t]$, whose elements are written $p/q$ with $p, q \in \mathbb{R}[t]$ and $q \ne 0$, with $p/q = p'/q'$ exactly when $pq' = p'q$; and the set $P$ above. For a nonzero $p \in \mathbb{R}[t]$, $\operatorname{lc}(p)$ denotes its leading coefficient.

[L1] $(\mathbb{R}(t), P)$ is an ordered field, and $n \cdot 1 < t$ for every natural $n$, so it is not Archimedean ([[cex-ordered-field-not-archimedean]], [[def-ordered-field]], [[def-archimedean-field]]).

[L2] For a commutative ring $R$ and a nonzero $f \in R[x]$, $\deg f$ is the largest index carrying a nonzero coefficient and $\operatorname{lc}(f)$ is that coefficient ([[def-polynomial-degree-leading-coefficient-and-monic]]). For a field $F$ the polynomial ring $F[t]$ is an integral domain ([[cor-rational-function-field-as-a-fraction-field]]), and $\mathbb{R}$ is a field ([[thm-reals-ordered-field]], [[def-field]]). If $R$ is an integral domain and $f, g \in R[x]$ are nonzero, then $fg \ne 0$, $\deg(fg) = \deg f + \deg g$ and $\operatorname{lc}(fg) = \operatorname{lc}(f)\operatorname{lc}(g)$ ([[thm-polynomial-degree-of-a-product-over-a-domain]]).

[L3] In $\mathbb{R}$, a nonzero square is positive ([[lem-of-square-positive]]); a product of two nonzero reals is positive exactly when both are positive or both are negative ([[lem-of-sign-rules]]).

[L4] In an ordered field, $f < g$ means $g - f \in P$; a positive element has a positive inverse ([[lem-of-inverse-positive]], [[def-ordered-field]]).

[L5] The canonical embedding of $\mathbb{Q}$ into an ordered field is an order embedding, so a rational $q > 0$ names a positive element $q \cdot 1$ of $\mathbb{R}(t)$ ([[lem-of-q-embeds]]).

[L6] In an ordered field $|u| = u$ when $u \ge 0$ and $|u| = -u$ when $u < 0$ ([[def-abs-value]]), and $-|u| \le u \le |u|$ for every $u$ ([[lem-of-abs-value]]); $\mathbb{R}$ is a totally ordered field ([[thm-reals-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 Let $p \in \mathbb{R}[t]$ be nonzero, with $m = \deg p$ and $a = \operatorname{lc}(p) \ne 0$, so that $p(x) = a x^m + \sum_{i<m} a_i x^i$ for every real $x$. If $m = 0$ then $p(x) = a$ for every $x$. If $m \ge 1$, put $C = \sum_{i<m}|a_i| \ge 0$; for $x \ge 1$ and $i < m$ one has $0 < x^i \le x^{m-1}$, and $-|a_i| \le a_i \le |a_i|$, so $-|a_i| x^{m-1} \le a_i x^i \le |a_i| x^{m-1}$, and adding these $m$ inequalities gives $-C x^{m-1} \le \sum_{i<m} a_i x^i \le C x^{m-1}$. Hence if $a > 0$ then $p(x) \ge a x^m - C x^{m-1} = x^{m-1}(a x - C) > 0$ for every $x > \max(1, C/a)$; and if $a < 0$, the same bound applied to $-p$, whose leading coefficient is $-a > 0$, gives $p(x) < 0$ for every $x > \max(1, C/(-a))$. In every case there is a real $X_p$ such that $p(x) \ne 0$ and $p(x)$ has the sign of $\operatorname{lc}(p)$ for every $x > X_p$. [given, L2, L3, L6, algebra]

1.2 If $p/q = p'/q'$ then $pq' = p'q$, so $\operatorname{lc}(p)\operatorname{lc}(q') = \operatorname{lc}(p')\operatorname{lc}(q)$; multiplying both sides by $\operatorname{lc}(q)\operatorname{lc}(q')$ gives $\operatorname{lc}(p)\operatorname{lc}(q)\cdot\operatorname{lc}(q')^2 = \operatorname{lc}(p')\operatorname{lc}(q')\cdot \operatorname{lc}(q)^2$, and both squares are positive, so $\operatorname{lc}(p)\operatorname{lc}(q)$ and $\operatorname{lc}(p')\operatorname{lc}(q')$ have the same sign. [L2, L3]

2.1 For nonzero $p, q \in \mathbb{R}[t]$ put $X = \max(X_p, X_q)$ with $X_p, X_q$ as in step 1.1: for every $x > X$ neither $p$ nor $q$ vanishes, so $f = p/q$ has a value $f(x) = p(x)/q(x)$ there, and since $p(x)$ has the sign of $\operatorname{lc}(p)$ and $q(x)$ the sign of $\operatorname{lc}(q)$, the sign of that value is the sign of $\operatorname{lc}(p)\operatorname{lc}(q)$; hence $f \in P$ exactly when $\operatorname{lc}(p)\operatorname{lc}(q) > 0$. [step 1.1, L3]

3.1 The rule of step 2.1 is therefore independent of the representative and computes membership in $P$; combined with [L1] it computes the order: $p/q < p'/q'$ exactly when the numerator and denominator of $p'/q' - p/q$, written in any representative, have leading coefficients of positive product. [step 1.2, step 2.1, L1, L4]

3.2 $1/t \in P$, since $\operatorname{lc}(1)\operatorname{lc}(t) = 1 > 0$; equivalently, $t \in P$ and inverses of positives are positive. [step 2.1, L3, L4]

4.1 For every rational $q > 0$: $q \cdot 1 - 1/t = (qt - 1)/t$, whose leading coefficients have product $q \cdot 1 = q > 0$, so $1/t < q \cdot 1$. Together with step 3.2, $0 < 1/t < q\cdot 1$ for every positive rational $q$. [step 2.1, step 3.1, step 3.2, L3, L5]

4.2 For every natural $n$: $t - n \cdot 1$ has leading coefficients with product $1 > 0$, so $n \cdot 1 < t$; and $t^2 - t = t(t-1)$ likewise gives $t < t^2$. [step 2.1, step 3.1, L2, L3]

5.1 So $\mathbb{R}(t)$ is an ordered field, computed by a single product of leading coefficients, in which $t$ is larger than every canonical natural and $1/t$ is a positive infinitesimal. [step 3.1, step 4.1, step 4.2, L1] ∎

## Remarks

- **Why the eventual sign, and not the sign at a point.** Evaluating at a fixed real $x_0$ is not even a function on all of $\mathbb{R}(t)$, since a rational function may have a pole at $x_0$; and even where evaluation is defined, its sign cannot give a positive cone on the field, because the nonzero rational function $t-x_0$ evaluates to $0$, so trichotomy fails. The behaviour at $+\infty$ is one representative-independent, multiplicative choice, and step 1.1 is exactly that statement.

- **What this field is and is not good for.** It is the library's cheapest witness that an ordered field need not be Archimedean, and [[cex-q-not-dense-in-an-ordered-field]] uses the infinitesimal $1/t$ found above to show $\mathbb{Q}$ need not be dense. It is **not** a witness for the completeness failures of [[fs-nested-intervals-implies-lub]] or [[fs-cauchy-complete-implies-lub]]: nothing in this library proves that $\mathbb{R}(t)$ is Cauchy complete or that it has any nested interval property, and in fact it is neither. Those two need the larger field $\mathbb{R}((t^{-1}))$, which is why that field was built ([[ex-cauchy-complete-not-complete-field]]).

- **The order is the one induced from $\mathbb{R}((t^{-1}))$ in spirit but not by any embedding proved here.** Both fields order an element by its behaviour at infinity, and in both the comparison looks at a single coefficient. This library constructs no embedding of one into the other and never uses one.
