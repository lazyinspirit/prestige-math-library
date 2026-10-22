---
id: lem-group-power-laws
kind: lemma
title: "Exponent laws in a group: $g^{m+n} = g^{m}g^{n}$ and $(g^{m})^{n} = g^{mn}$ for all $m, n \\in \\mathbb{Z}$, and $(gh)^{n} = g^{n}h^{n}$ **when $g$ and $h$ commute**"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-group-power, def-group, def-semigroup-and-monoid, lem-group-inverse-laws, thm-induction-principle, thm-int-comm-ring, thm-int-ordered-ring, def-integers, def-int-operations, def-int-order, lem-nat-embeds-int, lem-nat-trichotomy, def-natural-numbers, def-nat-addition, def-nat-order, lem-nat-add-commutative]
justified_by: []
aliases: [lem-exponent-laws-in-a-group]
landmark: false
short: "exponent laws; $(gh)^n$ needs commuting"
proof_strategy: induction
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
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "Group (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Group_(mathematics)"
pipeline_run: null
---

## Statement

Let $G$ be a group ([[def-group]]) with identity $e$, let $g, h \in G$, and let
powers be as in [[def-group-power]]. For all $m, n \in \mathbb{Z}$:

1. $g^{m+n} = g^{m} g^{n}$;
2. $g^{-m} = (g^{m})^{-1}$;
3. $(g^{m})^{n} = g^{mn}$;
4. $g^{m} g^{n} = g^{n} g^{m}$: any two powers of one element commute;
5. **if $gh = hg$** then $(gh)^{n} = g^{n} h^{n}$.

Claim 5 is **false in general without its hypothesis**: in a group in which $g$
and $h$ do not commute the equation can fail already at $n = 2$, and a witness is
recorded on the companion page.

Claims 1 and 3 hold in any monoid ([[def-semigroup-and-monoid]]) for exponents in
$\mathbb{N}$, and so does claim 5 for exponents in $\mathbb{N}$ under the same
commuting hypothesis; only the extension to negative exponents needs inverses.

## Facts & Assumptions

**Given:** A group $G$ with identity $e$ and elements $g, h \in G$; powers $g^{n}$ for $n \in \mathbb{N}$ defined by $g^{0} = e$ and $g^{\sigma(n)} = g^{n} g$, and $g^{x}$ for $x \in \mathbb{Z}$ defined by $g^{\iota(k)} = g^{k}$ and $g^{-\iota(k)} = (g^{k})^{-1}$ for $\iota(k) > 0$ ([[def-group-power]]). Throughout, $\iota : \mathbb{N} \to \mathbb{Z}$ is the embedding of [[lem-nat-embeds-int]], and a natural number written where an integer is expected means its image under $\iota$.

[L1] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L2] The group laws: associativity, the two-sided identity $e$, and two-sided inverses ([[def-group]], [[def-semigroup-and-monoid]]).

[L3] $(uv)^{-1} = v^{-1}u^{-1}$, $(u^{-1})^{-1} = u$ and $e^{-1} = e$ in a group ([[lem-group-inverse-laws]]).

[L4] $\iota$ is injective, preserves addition, multiplication and order, and its image is exactly the set of nonnegative integers; $\iota(0) = 0$ and $\iota(1) = 1$ ([[lem-nat-embeds-int]], [[def-int-operations]]).

[L5] $\mathbb{Z}$ is a commutative ring: addition and multiplication are associative and commutative, $x + 0 = x$, $x \cdot 1 = x$, multiplication distributes over addition, and every $x$ has an additive inverse $-x$ ([[thm-int-comm-ring]], [[def-int-operations]]); every integer is $[(a,b)]$ for naturals $a, b$, and then $[(a,b)] = \iota(a) - \iota(b)$ ([[def-integers]]).

[L6] The order on $\mathbb{Z}$ is total and compatible with addition, so exactly one of $0 \le x$, $x < 0$ holds, and $x < 0$ implies $0 < -x$ ([[thm-int-ordered-ring]], [[def-int-order]]).

[L7] On $\mathbb{N}$: addition satisfies $m + 0 = m$ and $m + \sigma(n) = \sigma(m+n)$, so $\sigma(n) = n + 1$ ([[def-nat-addition]], [[def-natural-numbers]]); it is commutative ([[lem-nat-add-commutative]]); $m \le n$ means $m + k = n$ for some $k$ ([[def-nat-order]]); and exactly one of $a < b$, $a = b$, $b < a$ holds ([[lem-nat-trichotomy]]).

## Proof

**Proof technique:** induction.

1.1 Natural exponents, base of claim 1: for every $m \in \mathbb{N}$, $g^{m+0} = g^{m} = g^{m} e = g^{m} g^{0}$. [base, given, L2, L7]

1.2 Natural exponents, inductive hypothesis for claim 1: fix $n \in \mathbb{N}$ and assume $g^{m+n} = g^{m} g^{n}$ for every $m \in \mathbb{N}$ and every $g$. [ih]

1.3 Suppose $gh = hg$; base of the commuting sub-claim: $g h^{0} = g e = e g = h^{0} g$. [base, given, L2]

1.4 Inductive hypothesis of the commuting sub-claim: assume $g h^{n} = h^{n} g$. [ih]

1.5 Base of claim 5 for natural exponents: $(gh)^{0} = e = e \cdot e = g^{0} h^{0}$. [base, given, L2]

1.6 Inductive hypothesis of claim 5 for natural exponents: assume $gh = hg$ and $(gh)^{n} = g^{n} h^{n}$. [ih]

1.7 If $uv = vu$ in $G$ then $u v^{-1} = v^{-1} u$: multiplying $uv = vu$ on the left and on the right by $v^{-1}$ gives $v^{-1}(uv)v^{-1} = v^{-1}(vu)v^{-1}$, and regrouping both sides gives $v^{-1} u = u v^{-1}$. Consequently $u^{-1} v^{-1} = (vu)^{-1} = (uv)^{-1} = v^{-1} u^{-1}$. [L2, L3]

1.8 Claim 2 for a nonnegative exponent. If $k = 0$ then $-\iota(0) = 0$, so $g^{-\iota(0)} = g^{0} = e$ and $(g^{0})^{-1} = e^{-1} = e$. If $k \ne 0$ then $0 < \iota(k)$ because $\iota$ preserves the order, so $-\iota(k) < 0$ and the second clause of the definition gives $g^{-\iota(k)} = (g^{k})^{-1}$ directly. [given, L3, L4, L6]

1.9 Claim 3 for a nonnegative second exponent, base: $(g^{x})^{0} = e = g^{0} = g^{x \cdot 0}$, since $x \cdot 0 = 0$ in $\mathbb{Z}$. [base, given, L5]

1.10 Claim 3 for a nonnegative second exponent, inductive hypothesis: assume $(g^{x})^{\iota(n)} = g^{x \iota(n)}$ for this $n \in \mathbb{N}$ and every $x \in \mathbb{Z}$. [ih]

2.1 Successor step for claim 1 with natural exponents: $g^{m+\sigma(n)} = g^{\sigma(m+n)} = g^{m+n} g = (g^{m} g^{n}) g = g^{m}(g^{n} g) = g^{m} g^{\sigma(n)}$; by induction, $g^{m+n} = g^{m} g^{n}$ for all $m, n \in \mathbb{N}$, in any monoid. [step 1.2, given, L1, L2, L7]

2.2 Successor step for the commuting sub-claim: $g h^{\sigma(n)} = g(h^{n} h) = (g h^{n})h = (h^{n} g)h = h^{n}(gh) = h^{n}(hg) = (h^{n} h)g = h^{\sigma(n)} g$; by induction $g h^{n} = h^{n} g$ for every $n \in \mathbb{N}$ whenever $gh = hg$. [step 1.3, step 1.4, given, L1, L2]

2.3 Claim 2 in general. If $0 \le x$ then $x = \iota(k)$ and step 1.8 gives $g^{-x} = (g^{k})^{-1} = (g^{x})^{-1}$. If $x < 0$ then $0 < -x$, so $-x = \iota(k)$ and by definition $g^{x} = (g^{k})^{-1}$, whence $(g^{x})^{-1} = g^{k} = g^{-x}$. This is claim 2. [step 1.8, given, L3, L4, L6]

3.1 Successor step for claim 5 with natural exponents: assuming $gh = hg$, $(gh)^{\sigma(n)} = (gh)^{n}(gh) = (g^{n} h^{n})(gh) = g^{n}((h^{n} g)h) = g^{n}((g h^{n})h) = (g^{n} g)(h^{n} h) = g^{\sigma(n)} h^{\sigma(n)}$, the fourth equality being step 2.2 applied to $g$ and $h^{n}$; by induction $(gh)^{n} = g^{n} h^{n}$ for every $n \in \mathbb{N}$. [step 1.5, step 1.6, step 2.2, given, L1, L2]

3.2 Normal form. Let $x \in \mathbb{Z}$ and write $x = \iota(a) - \iota(b)$ with $a, b \in \mathbb{N}$, possible since $x = [(a,b)]$ for some naturals. Then $g^{x} = g^{a}(g^{b})^{-1}$. Indeed, by trichotomy either $b \le a$, say $a = b + c$, in which case $x = \iota(c)$ and $g^{a}(g^{b})^{-1} = (g^{b} g^{c})(g^{b})^{-1} = (g^{c} g^{b})(g^{b})^{-1} = g^{c} = g^{x}$, using step 2.1 twice together with commutativity of addition on $\mathbb{N}$; or $a < b$, say $b = a + c$ with $c \ne 0$, in which case $x = -\iota(c)$ and $g^{a}(g^{b})^{-1} = g^{a}(g^{a} g^{c})^{-1} = g^{a}\bigl((g^{c})^{-1}(g^{a})^{-1}\bigr) = \bigl((g^{c})^{-1} g^{a}\bigr)(g^{a})^{-1} = (g^{c})^{-1} = g^{x}$, the third equality using step 1.7 with $u = g^{a}$ and $v = g^{c}$, which commute by step 2.1. [step 1.7, step 2.1, step 1.8, given, L2, L3, L4, L5, L7]

4.1 Claim 1 for integer exponents. Write $x = \iota(a) - \iota(b)$ and $y = \iota(c) - \iota(d)$, so $x + y = \iota(a+c) - \iota(b+d)$. By step 3.2 and step 2.1, $g^{x+y} = g^{a+c}(g^{b+d})^{-1} = (g^{a} g^{c})(g^{b} g^{d})^{-1} = (g^{a} g^{c})\bigl((g^{d})^{-1}(g^{b})^{-1}\bigr)$. On the other side $g^{x} g^{y} = \bigl(g^{a}(g^{b})^{-1}\bigr)\bigl(g^{c}(g^{d})^{-1}\bigr) = (g^{a} g^{c})\bigl((g^{b})^{-1}(g^{d})^{-1}\bigr)$, moving $(g^{b})^{-1}$ past $g^{c}$ by step 1.7, since $g^{b}$ and $g^{c}$ commute by step 2.1. Finally $(g^{b})^{-1}(g^{d})^{-1} = (g^{d})^{-1}(g^{b})^{-1}$ by step 1.7 again, so the two sides agree. [step 1.7, step 2.1, step 3.2, L2, L3, L4, L5]

4.2 Claim 5 for a negative exponent: assume $gh = hg$ and let $n < 0$, so $-n = \iota(k)$ with $k \in \mathbb{N}$. Then $(gh)^{n} = \bigl((gh)^{-n}\bigr)^{-1} = (g^{k} h^{k})^{-1} = (h^{k})^{-1}(g^{k})^{-1} = h^{n} g^{n}$ by claim 2 and step 3.1; and $g^{k}$ and $h^{k}$ commute, by step 2.2 applied twice, so their inverses commute by step 1.7, giving $h^{n} g^{n} = g^{n} h^{n}$. With step 3.1 this proves claim 5 for every $n \in \mathbb{Z}$. [step 1.7, step 2.2, step 3.1, step 2.3, L3, L6]

5.1 Claim 4. By claim 1 and commutativity of addition in $\mathbb{Z}$, $g^{x} g^{y} = g^{x+y} = g^{y+x} = g^{y} g^{x}$. [step 4.1, L5]

5.2 Claim 3, successor step: $(g^{x})^{\sigma(n)} = (g^{x})^{n} g^{x} = g^{x\iota(n)} g^{x} = g^{x\iota(n) + x} = g^{x(\iota(n) + 1)} = g^{x \iota(\sigma(n))}$, using the hypothesis, then claim 1, then distributivity in $\mathbb{Z}$, then $\iota(\sigma(n)) = \iota(n+1) = \iota(n) + 1$. By induction, $(g^{x})^{y} = g^{xy}$ for every $x \in \mathbb{Z}$ and every $y \ge 0$. When $x = \iota(m)$ is itself nonnegative the two exponents $x\iota(n)$ and $x$ occurring here are nonnegative as well, so the appeal to claim 1 is an appeal to its monoid form, step 2.1, and the computation uses no inverse; that is the natural-exponent case, valid in any monoid. [step 4.1, step 2.1, step 1.9, step 1.10, given, L1, L4, L5, L7]

6.1 Claim 3 for a negative second exponent: let $y < 0$, so $0 < -y$. Applying claim 2 to the element $g^{x}$ gives $(g^{x})^{y} = \bigl((g^{x})^{-y}\bigr)^{-1}$, which by step 5.2 equals $\bigl(g^{x(-y)}\bigr)^{-1} = \bigl(g^{-(xy)}\bigr)^{-1} = \bigl((g^{xy})^{-1}\bigr)^{-1} = g^{xy}$, using claim 2 once more and then $(u^{-1})^{-1} = u$. Together with step 5.2 this is claim 3. [step 2.3, step 5.2, L3, L5, L6]

7.1 Claims 1 to 5 are established: claim 1 in step 4.1, claim 2 in step 2.3, claim 3 in step 6.1, claim 4 in step 5.1 and claim 5 in steps 3.1 and 4.2; the natural-exponent forms of claims 1, 3 and 5 are steps 2.1, 5.2 and 3.1, and use no inverses. [step 2.1, step 3.1, step 2.3, step 4.1, step 5.1, step 5.2, step 6.1, step 4.2, discharge-induction] ∎

## Remarks

- **The commuting hypothesis in claim 5 is not a technicality.** Without it the law fails, and the title of this item carries the hypothesis for that reason. The published [[lem-power-laws]] states the corresponding law without a hypothesis, and is correct because it is about a field, where multiplication is commutative by definition; nothing there transfers to a general group.

- **Where each law is really used.** Claim 1 is what makes $x \mapsto g^{x}$ a homomorphism from $(\mathbb{Z},+)$ and hence what makes cyclic subgroups behave; claim 4 is why every cyclic group is abelian ([[lem-cyclic-subgroup-is-the-set-of-powers]]); claim 2 is what lets every statement about negative exponents be reduced to a statement about natural ones, which is how the case analysis above is kept finite.

- The proof splits an arbitrary integer as $\iota(a) - \iota(b)$ rather than by cases on its sign wherever possible. That is deliberate: the normal form of step 3.2 is proved once and then every integer identity is a computation with natural powers and inverses.
