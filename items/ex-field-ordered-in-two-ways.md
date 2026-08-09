---
id: ex-field-ordered-in-two-ways
kind: example
title: "$\\mathbb{Q}(\\sqrt{2})$ carries exactly two distinct field orders, exchanged by the conjugation $\\sqrt{2} \\mapsto -\\sqrt{2}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field, def-field, def-rationals, thm-of-square-roots, fs-sqrt2-rational, lem-of-square-positive, cor-of-one-positive, lem-of-sign-rules, lem-of-inverse-positive, lem-of-add-order, lem-of-naturals-positive, lem-of-q-embeds, def-complete-ordered-field, thm-reals-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "Quadratic field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quadratic_field"
    - title: "Formally real field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Formally_real_field"
pipeline_run: null
---

## Example

Let $u := \sqrt 2 \in \mathbb{R}$ ([[thm-of-square-roots]]) and

$$F \;:=\; \mathbb{Q}(\sqrt 2) \;=\; \{\, a + bu : a, b \in \mathbb{Q} \,\} \;\subseteq\; \mathbb{R}.$$

Then $F$ is a field, every element of it is $a + bu$ for exactly one pair
$(a,b)$ of rationals, and the **conjugation**
$\sigma(a + bu) := a - bu$ is a field automorphism of $F$.

$F$ carries **exactly two** positive cones ([[def-ordered-field]]):

$$P_1 \;=\; \{\, x \in F : x > 0 \text{ in } \mathbb{R} \,\}, \qquad P_2 \;=\; \{\, x \in F : \sigma(x) \in P_1 \,\},$$

and $\sigma$ exchanges them. They differ: $u \in P_1$ and $u \notin P_2$. In the
second order $\sqrt 2$ is *negative*, and indeed lies below every positive
rational, while $-\sqrt 2$ is positive; the rationals themselves are ordered the
same way in both.

The point of the example is that an order is extra structure on a field, not a
property of it: the same field is an ordered field in two inequivalent ways, and
no algebraic property of $F$ can distinguish $u$ from $-u$.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its order, $u = \sqrt 2$, the set $F$ above, and the map $\sigma(a+bu) = a - bu$.

[L1] $\mathbb{R}$ is a complete ordered field and every $a \ge 0$ in it has a unique $s \ge 0$ with $s^2 = a$; in particular $u > 0$ and $u^2 = 2$ ([[thm-of-square-roots]], [[def-complete-ordered-field]], [[thm-reals-ordered-field]]).

[L2] No rational squares to $2$ ([[fs-sqrt2-rational]], [[def-rationals]]); in particular $u \notin \mathbb{Q}$.

[L3] Field axioms and arithmetic ([[def-field]]); a positive cone is a subset $P$ satisfying trichotomy, exactly one of $x \in P$, $x = 0$, $-x \in P$, and closure under addition and multiplication, and $x < y$ means $y - x \in P$ ([[def-ordered-field]]).

[L4] In any ordered field: $0 < 1$ ([[cor-of-one-positive]]); $n \cdot 1 > 0$ for $n \ge 1$ ([[lem-of-naturals-positive]]); a nonzero square is positive ([[lem-of-square-positive]]); a positive element has a positive inverse ([[lem-of-inverse-positive]]); a product of two positives or of two negatives is positive and a product of a positive and a negative is negative ([[lem-of-sign-rules]]); sums of positives are positive and adding a constant preserves the order ([[lem-of-add-order]]). In each clause above, [[lem-of-sign-rules]] and [[lem-of-add-order]] state the STRICT forms and only those; the nonstrict forms used below are those together with the equality cases, which trichotomy settles, the order being total ([[def-ordered-field]]).

[L5] $\mathbb{Q}$ embeds in any ordered field as $\{(p \cdot 1)(q\cdot 1)^{-1}\}$, compatibly with the field operations ([[lem-of-q-embeds]]).

## Verification

**Proof technique:** direct.

1.1 $u \in \mathbb{R}$ satisfies $u > 0$ and $u^2 = 2$, and $u \notin \mathbb{Q}$. [L1, L2]

1.2 In every ordered field the positivity of a rational is forced: $n \cdot 1 > 0$ for $n \ge 1$, so for positive integers $p, q$ the element $(p\cdot 1)(q\cdot 1)^{-1}$ is positive, and hence a rational is in the positive cone exactly when it is positive in the usual sense. [L4, L5]

2.1 $F$ is a subfield of $\mathbb{R}$: it contains $0$ and $1$, is closed under subtraction, and $(a+bu)(c+du) = (ac + 2bd) + (ad + bc)u$ gives closure under multiplication; for $a + bu \ne 0$ one has $a^2 - 2b^2 \ne 0$, since $b \ne 0$ would otherwise give $(a/b)^2 = 2$ against [L2] while $b = 0$ forces $a \ne 0$, and then $(a+bu)^{-1} = (a - bu)(a^2-2b^2)^{-1} \in F$. [step 1.1, L2, L3]

2.2 The representation is unique: $a + bu = a' + b'u$ with $b \ne b'$ would give $u = (a-a')(b'-b)^{-1} \in \mathbb{Q}$, against step 1.1; so $b = b'$ and then $a = a'$. [step 1.1, L2, L3]

3.1 $\sigma$ is therefore a well-defined map $F \to F$, and it is a field automorphism: it is additive by inspection, $\sigma(1) = 1$, and $\sigma(a+bu)\sigma(c+du) = (ac+2bd) - (ad+bc)u = \sigma\big((a+bu)(c+du)\big)$; moreover $\sigma \circ \sigma$ is the identity, so $\sigma$ is a bijection. [step 2.1, step 2.2, L3]

3.2 Let $Q$ be any positive cone on $F$. Since $u \ne 0$, exactly one of $u \in Q$, $-u \in Q$ holds. [step 2.1, L3]

4.1 $Q$ is determined by that choice. Suppose $u \in Q$ (the other case is the same with $u$ replaced by $-u$, which also squares to $2$). Let $x = a + bu \ne 0$. If $b = 0$ then $x$ is a nonzero rational and step 1.2 decides it. If $b \ne 0$ then $x = b(u + c)$ with $c := a/b \in \mathbb{Q}$, and by [L4] the membership of $x$ is decided by those of $b$ and of $u + c$; for $c \ge 0$ one has $u + c \in Q$, while for $c < 0$, writing $e := -c > 0$, the identity $(u-e)(u+e) = 2 - e^2$ with $u + e \in Q$ and $2 - e^2 \ne 0$ shows that $u - e \in Q$ exactly when $2 - e^2 > 0$, a condition on a rational decided by step 1.2. So $Q$ is uniquely determined, and there are at most two positive cones on $F$. [step 1.2, step 2.1, step 3.2, L2, L3, L4]

4.2 Both occur. $P_1$ is a positive cone on $F$, being the restriction to the subfield $F$ of the positive cone of $\mathbb{R}$; and $P_2 = \sigma^{-1}(P_1)$ is one because $\sigma$ is a field automorphism, so trichotomy and closure transfer along it. They are distinct: $u \in P_1$ by step 1.1, whereas $\sigma(u) = -u \notin P_1$, so $u \notin P_2$. [step 1.1, step 2.1, step 3.1, L3]

5.1 Hence $F$ carries exactly two positive cones, $P_1$ and $P_2$, and since $\sigma$ is an involution, $P_2 = \sigma(P_1)$ and $P_1 = \sigma(P_2)$: the conjugation exchanges the two orders. [step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **Two orders, one field, and no way to tell them apart algebraically.** The
  automorphism $\sigma$ carries $(F,P_1)$ isomorphically onto $(F,P_2)$ as an
  *ordered* field, so the two ordered fields are isomorphic even though the two
  orders on the underlying $F$ are different subsets. That is the precise sense
  in which an order is not determined by the field: what is determined here is
  the order up to isomorphism, not the order itself.

- **Contrast with $\mathbb{Q}$ and with $\mathbb{R}$**, each of which carries
  exactly one order. For $\mathbb{Q}$ this is step 1.2: every rational is a
  quotient of canonical naturals, so its sign is forced. For $\mathbb{R}$ it is
  [[thm-of-square-roots]]: the positives are exactly the nonzero squares, and
  the squares are fixed by the field structure alone. $\mathbb{Q}(\sqrt 2)$ sits
  between the two and has room for exactly two, because $2$ acquires a square
  root while $F$ still has elements that are not squares.

- **What decides an order on $F$ is a single bit**, the sign of $u$, after which
  every other comparison reduces to a comparison of rationals. That is also
  why there are exactly two and not more: the sign of $u$ is the only free
  choice, and both of its values are realised.
