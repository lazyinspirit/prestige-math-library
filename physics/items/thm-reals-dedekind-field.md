---
id: thm-reals-dedekind-field
kind: theorem
title: "The Dedekind reals form a field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-real-dedekind, def-dedekind-cut, def-cut-order, def-cut-addition, def-cut-multiplication, lem-cut-add-well-defined, lem-cut-additive-inverse, lem-cut-order-total, lem-rat-cut-embeds, thm-rat-field, thm-rat-ordered-field, lem-cut-reciprocal]
aliases: []
landmark: true
short: "ℝ field"
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
    - title: "M. Girotti, Addendum — Construction of $\\mathbb{R}$ via Dedekind's method (MATH 317, Advanced Calculus of One Variable)"
      url: "https://mathemanu.github.io/ConstructionofR.pdf"
    - title: "Construction of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Construction_of_the_real_numbers"
pipeline_run: null
---

## Statement

The set $\mathbb{R}$ of Dedekind cuts of $\mathbb{Q}$ ([[def-real-dedekind]]),
with cut addition and cut multiplication ([[def-cut-addition]],
[[def-cut-multiplication]]), is a field.

## Facts & Assumptions

**Given:** Cuts $A, B, C \in \mathbb{R}$, the cut $0^{*}$ (additive identity) and $1^{*}$ (multiplicative identity).

[L1] Nonnegative product: for $A, B > 0^{*}$, $A \cdot B = \{q \le 0\} \cup \{ab : a \in A,\, b \in B,\, a > 0,\, b > 0\}$ ([[def-cut-multiplication]]).

[L2] Sign rules and reciprocal: $A \cdot B = 0^{*}$ if $A$ or $B$ is $0^{*}$; $A \cdot B = |A||B|$ for equal signs and $-(|A||B|)$ for opposite signs; and $A^{-1} = -((-A)^{-1})$ when $A < 0^{*}$ ([[def-cut-multiplication]]).

[L3] Absolute value: $|A| = A$ if $A \ge 0^{*}$ and $|A| = -A$ otherwise, so $|A| \ge 0^{*}$ ([[def-cut-multiplication]]).

[L4] Addition: $A + B = \{a + b : a \in A,\, b \in B\}$, with inverse $-A$ ([[def-cut-addition]]).

[L5] $(\mathbb{R}, +)$ is an abelian group: $+$ is well defined, commutative, associative, with identity $0^{*}$ ([[lem-cut-add-well-defined]]) and inverses $A + (-A) = 0^{*}$ ([[lem-cut-additive-inverse]]).

[L6] Inclusion totally orders $\mathbb{R}$, so exactly one of $A > 0^{*}$, $A = 0^{*}$, $A < 0^{*}$ holds ([[lem-cut-order-total]]).

[L7] $\mathbb{Q}$ is a field: rational multiplication is commutative, associative, distributes over addition, and every nonzero rational is invertible ([[thm-rat-field]]); its order is total, $x \le y$ implies $x + z \le y + z$, and $0 < x$, $0 < y$ imply $0 < xy$ ([[thm-rat-ordered-field]]).

[L8] The embedding $q \mapsto q^{*}$ is an injective ring map with $(pq)^{*} = p^{*} \cdot q^{*}$ and $1^{*} \ne 0^{*}$ ([[lem-rat-cut-embeds]]).

[L9] Multiplicative inverse of a positive cut: for $A > 0^{*}$, the reciprocal $A^{-1}$ is a cut with $A^{-1} > 0^{*}$ and $A \cdot A^{-1} = 1^{*}$ ([[lem-cut-reciprocal]]).

[L10] Negation is an additive homomorphism on $(\mathbb{R}, +)$: $-(X + Y) = (-X) + (-Y)$, since $\bigl((-X) + (-Y)\bigr) + (X + Y) = 0^{*}$ by commutativity, associativity, and the inverse law, so $(-X) + (-Y)$ is the unique additive inverse of $X + Y$ ([[lem-cut-add-well-defined]], [[lem-cut-additive-inverse]]).

[L11] A cut $A$ is positive iff $0^{*} < A$, and $0^{*} < A$ holds exactly when $0 \in A$; in that case (C3) supplies $a \in A$ with $a > 0$ ([[def-cut-order]], [[def-dedekind-cut]]).

## Proof

**Proof technique:** direct.

1.1 For $A, B > 0^{*}$, $A \cdot B$ is a cut: it is nonempty and proper, downward closed because any $0 < y < ab$ equals $(y/b)\,b$ with $0 < y/b < a$ in $A$ (so the positive part of $A \cdot B$ is exactly $\{ab : a \in A, b \in B, a, b > 0\}$), and it has no greatest element because $A$ has none: given $ab$ with $a \in A$, $b \in B$, $a, b > 0$, choose $a' \in A$ with $a' > a$, and then $a'b \in A \cdot B$ with $a'b > ab$ since $b > 0$; and $0^{*} \cdot B = 0^{*}$ by the sign rule, so multiplication of nonnegatives lands in $\mathbb{R}$. [L1, L2, L6, L7, L11]

1.2 On nonnegatives multiplication is commutative: $A \cdot B$ and $B \cdot A$ are the same set, since $\{ab\} = \{ba\}$ by commutativity of rational multiplication. [L1, L7]

1.3 Identity on nonnegatives: $A \cdot 1^{*} = A$ for $A \ge 0^{*}$. For $x \in A$ with $x > 0$ pick $a \in A$, $a > x$ (no greatest element), so $x = a \cdot (x/a)$ with $0 < x/a < 1$, giving $A \subseteq A \cdot 1^{*}$; conversely $a r < a \in A$ for $0 < r < 1$ forces $ar \in A$, so $A \cdot 1^{*} \subseteq A$; the $0^{*}$ case is the sign rule. [L1, L7]

1.4 $1^{*} \ne 0^{*}$, as the embedding is injective and $1 \ne 0$ in $\mathbb{Q}$. [L8]

1.5 For the reverse inclusion of distributivity, dispose of degenerate cases: if $A = 0^{*}$ then $A \cdot B = A \cdot C = A \cdot (B + C) = 0^{*}$, so $A \cdot B + A \cdot C = 0^{*} = A \cdot (B + C)$; if $B = 0^{*}$ then $A \cdot B = 0^{*}$ and $B + C = 0^{*} + C = C$ (additive identity), so $A \cdot B + A \cdot C = 0^{*} + A \cdot C = A \cdot C = A \cdot (B + C)$, and symmetrically if $C = 0^{*}$. [L2, L4, L5]

1.6 Sign rule: for all cuts $X, Y$, $(-X) \cdot Y = -(X \cdot Y)$ and $X \cdot (-Y) = -(X \cdot Y)$; indeed $|-X| = |X|$ so both sides keep magnitude $|X| |Y|$, while negating one factor toggles the same-sign versus opposite-sign classification of the pair and hence flips the product's sign in the definition $A \cdot B = 0^{*}$ / $|A| |B|$ / $-(|A| |B|)$ (the $0^{*}$ case being immediate), so in particular $X \cdot Y = -(|X| \cdot Y)$ whenever $X < 0^{*}$. [L2, L3, L6]

2.1 On nonnegatives multiplication is associative: by step 1.1 the positive elements of $A \cdot B$ are exactly the products $ab$, so those of $(A \cdot B) \cdot C$ are the $(ab)c = abc$, and likewise $A \cdot (B \cdot C)$ has positive part the $a(bc) = abc$; both sides are thus $\{q \le 0\} \cup \{abc : a \in A, b \in B, c \in C,\, a,b,c > 0\}$, by associativity of rational products. [step 1.1, L1, L7]

2.2 Distributivity on nonnegatives, inclusion $\subseteq$ for $A, B, C \ge 0^{*}$: a positive element of $A \cdot (B + C)$ is $a \cdot w$ with $a \in A$, $w \in B + C$, $a, w > 0$, and $w = b + c$ for some $b \in B$, $c \in C$; then $a \cdot w = ab + ac$ where $ab \in A \cdot B$ and $ac \in A \cdot C$ (each product lies in the positive part of its factor product when positive, otherwise in that product's $\{q \le 0\}$ clause), so $a \cdot w \in A \cdot B + A \cdot C$; with the $\{q \le 0\}$ clause this gives $A \cdot (B + C) \subseteq A \cdot B + A \cdot C$. [L1, L4, L7, step 1.1]

2.3 For the reverse inclusion assume $A, B, C > 0^{*}$, the degenerate cases being step 1.5; then $A \cdot B$ and $A \cdot C$ each contain a positive rational and, being downward-closed cuts (step 1.1), contain positive rationals arbitrarily close to $0$. [L1, L11, step 1.1, step 1.5]

2.4 Every $A \ne 0^{*}$ has a multiplicative inverse: for $A > 0^{*}$ the reciprocal $A^{-1}$ satisfies $A \cdot A^{-1} = 1^{*}$; for $A < 0^{*}$ we have $-A > 0^{*}$ and $A^{-1} = -((-A)^{-1})$, so applying the sign rule to both factors gives $A \cdot A^{-1} = (-A) \cdot (-A)^{-1} = 1^{*}$ by the reciprocal of the positive cut $-A$. [L2, L3, L9, step 1.6]

3.1 Take $u \in A \cdot B + A \cdot C$ with $u > 0$, say $u = s + t$ with $s \in A \cdot B$, $t \in A \cdot C$: if $t \le 0$, pick a positive $t' \in A \cdot C$ with $t' < u$ (available by step 2.3) and set $s' := u - t'$, so $0 < s' \le s$ (since $t \le 0$ gives $s \ge u > s'$) and $s' \in A \cdot B$ by downward closure, then replace $(s, t)$ by $(s', t')$; symmetrically if $s \le 0$; so we may assume $s, t > 0$. [L4, step 1.1, step 2.3]

3.2 The nonnegative laws now extend by signs: $A \cdot B$ and $B \cdot A$ share magnitude $|A| |B| = |B| |A|$ and the same sign, hence are equal (step 1.2); $(A \cdot B) \cdot C$ and $A \cdot (B \cdot C)$ share magnitude $|A| |B| |C|$ and the sign given by the product of the three factor signs, hence are equal (step 2.1); and $A \cdot 1^{*} = A$, since $1^{*} > 0^{*}$ leaves the sign of $A$ unchanged and $|A| \cdot 1^{*} = |A|$ (step 1.3). [L2, L3, step 1.2, step 1.3, step 2.1]

4.1 With $s, t > 0$ from step 3.1, step 1.1 gives $s = a_{1} b_{1}$ and $t = a_{2} c_{1}$ with $a_{1}, a_{2} \in A$, $b_{1} \in B$, $c_{1} \in C$ all positive; set $a := \max(a_{1}, a_{2})$, so $a \in A$ and $a > 0$. [L11, step 1.1, step 3.1]

5.1 Put $b := s/a$ and $c := t/a$: then $0 < b = a_{1} b_{1}/a \le b_{1}$, so $b \in B$, and $0 < c = a_{2} c_{1}/a \le c_{1}$, so $c \in C$, both by downward closure; hence $u = s + t = ab + ac = a(b + c)$ with $b + c \in B + C$, $b + c > 0$, $a \in A$, $a > 0$, so $u \in A \cdot (B + C)$. [L1, L4, L7, step 4.1]

6.1 Hence for $A, B, C > 0^{*}$ and $u \in A \cdot B + A \cdot C$: if $u \le 0$ then $u \in A \cdot (B + C)$ by its $\{q \le 0\}$ clause, and if $u > 0$ then $u \in A \cdot (B + C)$ by step 5.1, so $A \cdot B + A \cdot C \subseteq A \cdot (B + C)$; with step 2.2 this gives $A \cdot (B + C) = A \cdot B + A \cdot C$, an equality that also holds in the degenerate cases of step 1.5, so distributivity holds for all $A, B, C \ge 0^{*}$. [L1, step 1.5, step 2.2, step 5.1]

7.1 Distributivity for $A \ge 0^{*}$ with $B, C \le 0^{*}$: writing $B = -|B|$, $C = -|C|$ so that $B + C = (-|B|) + (-|C|) = -(|B| + |C|)$ by [L10], the sign rule and nonnegative distributivity give $A \cdot (B + C) = -(A \cdot (|B| + |C|)) = -(A \cdot |B| + A \cdot |C|) = (-(A \cdot |B|)) + (-(A \cdot |C|)) = A \cdot B + A \cdot C$, the last equality using that negation is an additive homomorphism. [L3, L5, L10, step 6.1, step 1.6]

7.2 Distributivity for $A \ge 0^{*}$ with $B \ge 0^{*} \ge C$ and $D := B + C \ge 0^{*}$: then $B = D + |C|$ with $D, |C| \ge 0^{*}$, so $A \cdot B = A \cdot D + A \cdot |C|$ by nonnegative distributivity, whence $A \cdot D = A \cdot B - A \cdot |C| = A \cdot B + A \cdot C$ because $A \cdot C = -(A \cdot |C|)$ by the sign rule; that is $A \cdot (B + C) = A \cdot B + A \cdot C$. [L3, L4, L5, step 6.1, step 1.6]

7.3 Distributivity for $A \ge 0^{*}$ with $B \ge 0^{*} \ge C$ and $D := B + C < 0^{*}$: then $|C| = B + |D|$ with $B, |D| \ge 0^{*}$, so $A \cdot |C| = A \cdot B + A \cdot |D|$ by nonnegative distributivity, giving $A \cdot C = -(A \cdot |C|) = (-(A \cdot B)) + (-(A \cdot |D|))$ and $A \cdot D = -(A \cdot |D|)$ by the sign rule, whence $A \cdot B + A \cdot C = -(A \cdot |D|) = A \cdot D = A \cdot (B + C)$. [L3, L4, L5, step 6.1, step 1.6]

8.1 Distributivity for $A \ge 0^{*}$ and arbitrary $B, C$: if $B, C \ge 0^{*}$ this is step 6.1; if $B, C \le 0^{*}$ it is step 7.1; otherwise one factor is $\ge 0^{*}$ and the other $\le 0^{*}$, say $B \ge 0^{*} \ge C$ (else exchange $B, C$ using commutativity of $+$), and then it is step 7.2 or step 7.3 according as $B + C \ge 0^{*}$ or $B + C < 0^{*}$; by the sign trichotomy these cases are exhaustive, so $A \cdot (B + C) = A \cdot B + A \cdot C$. [L5, L6, step 6.1, step 7.1, step 7.2, step 7.3]

9.1 Distributivity for $A < 0^{*}$: the sign rule gives $A \cdot (B + C) = -(|A| \cdot (B + C))$ and $A \cdot B + A \cdot C = (-(|A| \cdot B)) + (-(|A| \cdot C)) = -(|A| \cdot B + |A| \cdot C)$, while $|A| \ge 0^{*}$ makes step 8.1 apply to give $|A| \cdot (B + C) = |A| \cdot B + |A| \cdot C$, so the two negated cuts coincide and $A \cdot (B + C) = A \cdot B + A \cdot C$. [L3, L5, L10, step 1.6, step 8.1]

10.1 By the sign trichotomy every cut $A$ is either $\ge 0^{*}$ (step 8.1) or $< 0^{*}$ (step 9.1), so $A \cdot (B + C) = A \cdot B + A \cdot C$ holds for all cuts $A, B, C$. [L6, step 8.1, step 9.1]

11.1 Thus $(\mathbb{R}, +)$ is an abelian group (L5), multiplication is commutative and associative with identity $1^{*} \ne 0^{*}$ (step 3.2, step 1.4), distributes over addition (step 10.1), and every nonzero cut is invertible (step 2.4): $\mathbb{R}$ is a field. [L5, step 1.4, step 3.2, step 10.1, step 2.4] ∎
