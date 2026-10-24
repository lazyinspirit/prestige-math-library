---
id: lem-p-adic-valuation-on-q
kind: lemma
title: "The $p$-adic valuation extends to the nonzero rationals by $v_p(a/b) := v_p(a) - v_p(b) \\in \\mathbb{Z}$, independently of the representation; it satisfies $v_p(xy) = v_p(x) + v_p(y)$, and $v_p(x+y) \\ge \\min\\{v_p(x), v_p(y)\\}$ whenever $x$, $y$ and $x+y$ are nonzero"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-p-adic-valuation-additive, lem-p-adic-valuation-basic, def-p-adic-valuation,
       def-prime, def-rationals, def-rat-operations, thm-rat-field, lem-int-embeds-rat,
       def-field, lem-int-cancellation, def-nat-addition, lem-nat-add-commutative,
       lem-nat-embeds-int, thm-nat-linear-order, def-nat-order, def-natural-numbers,
       def-integers, def-int-operations, def-int-order, thm-int-comm-ring,
       thm-int-ordered-ring]
justified_by: []
forward_refs: [ex-p-adic-ultrametric]
aliases: [lem-p-adic-valuation-rational]
landmark: false
short: "$v_p$ on $\\mathbb{Q}^{\\times}$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "P-adic valuation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/P-adic_valuation"
    - title: "Valuation (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Valuation_(algebra)"
    - title: "University of Chicago REU notes: p-adic numbers"
      url: "https://www.math.uchicago.edu/~may/VIGRE/VIGRE2011/REUPapers/Herwig.pdf"
    - title: "Jürgen Neukirch, Algebraic Number Theory"
      url: "https://www.math.toronto.edu/~ila/Neukirch_Algebraic_number_theory.pdf"
pipeline_run: null
---

## Statement

Let $p$ be a prime ([[def-prime]]). A rational is a class $[(a,b)]$ of pairs of
integers with $b \ne 0$, written $a/b$ ([[def-rationals]]), and $[(a,b)] \ne 0$
holds exactly when $a \ne 0$ ([[def-rat-operations]]). Write
$\iota : \mathbb{N} \to \mathbb{Z}$ for the embedding of [[lem-nat-embeds-int]]
and $j : \mathbb{Z} \to \mathbb{Q}$, $j(k) = [(k,1)]$, for that of
[[lem-int-embeds-rat]].

For a nonzero rational $x = [(a,b)]$ set

$$v_p(x) \;:=\; \iota\bigl(v_p(a)\bigr) - \iota\bigl(v_p(b)\bigr) \;\in\; \mathbb{Z},$$

with $v_p$ on nonzero integers as in [[def-p-adic-valuation]]. Then:

1. **The value does not depend on the representative**, so $v_p$ is a well
   defined function from the nonzero rationals to $\mathbb{Z}$.
2. **It extends the integer valuation**: $v_p(j(a)) = \iota(v_p(a))$ for every
   nonzero integer $a$.
3. $v_p(xy) = v_p(x) + v_p(y)$ for all nonzero rationals $x, y$.
4. $v_p(x+y) \ge \min\{\, v_p(x),\, v_p(y) \,\}$ whenever $x$, $y$ and $x+y$ are
   all nonzero, the minimum being taken in the totally ordered $\mathbb{Z}$.

Unlike its restriction to $\mathbb{Z}$, this valuation takes **integer** values,
which is why the difference is formed after transporting the two natural numbers
into $\mathbb{Z}$ along $\iota$.

## Facts & Assumptions

**Given:** A prime $p$; nonzero rationals with representatives $x = [(a,b)]$, $y = [(c,d)]$, where $a, b, c, d \in \mathbb{Z}$ are all nonzero.

[L1] $[(a,b)] = [(c,d)]$ exactly when $ad = cb$; $\mathbb{Q}$ consists of such classes with $b \ne 0$ ([[def-rationals]]).

[L2] $[(a,b)] + [(c,d)] = [(ad+cb,\, bd)]$, $[(a,b)] \cdot [(c,d)] = [(ac,\, bd)]$, $0 = [(0,1)]$ and $1 = [(1,1)]$ ([[def-rat-operations]]); $\mathbb{Q}$ is a field ([[thm-rat-field]], [[def-field]]).

[L3] $j(k) = [(k,1)]$ is injective and preserves addition, multiplication and order ([[lem-int-embeds-rat]]).

[L4] For a prime $p$ and nonzero integers $u, w$: $uw \ne 0$ and $v_p(uw) = v_p(u) + v_p(w)$; and $v_p(u+w) \ge \min\{v_p(u), v_p(w)\}$ when $u$, $w$ and $u+w$ are nonzero ([[lem-p-adic-valuation-additive]]).

[L5] $v_p(1) = 0$ ([[lem-p-adic-valuation-basic]], [[def-p-adic-valuation]]).

[L6] $\iota$ is injective and preserves addition, multiplication and order, with image the nonnegative integers and $\iota(0) = 0$, $\iota(1) = 1$ ([[lem-nat-embeds-int]]).

[L7] A product of two nonzero integers is nonzero ([[lem-int-cancellation]]).

[L8] $\mathbb{Z}$ is a commutative ring: addition and multiplication are associative and commutative, $x + 0 = x$, and every $x$ has an additive inverse $-x$, with $-(-x) = x$ and $-(u+w) = (-u)+(-w)$; we write $u - w$ for $u + (-w)$ ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]).

[L9] The order on $\mathbb{Z}$ is total, antisymmetric and transitive and is compatible with addition, so $u \le w$ implies $u + z \le w + z$ ([[thm-int-ordered-ring]], [[def-int-order]]).

[L10] The order on $\mathbb{N}$ is total, so any two naturals have a minimum; addition on $\mathbb{N}$ is commutative ([[thm-nat-linear-order]], [[lem-nat-add-commutative]], [[def-nat-order]], [[def-nat-addition]], [[def-natural-numbers]]).

## Proof

**Proof technique:** direct.

1.1 If $x = [(a,b)]$ is a nonzero rational then $a \ne 0$ and $b \ne 0$, so $v_p(a)$ and $v_p(b)$ are both defined. [L1, L2]

2.1 Clause 1. Suppose $[(a,b)] = [(c,d)]$ with all four entries nonzero. Then $ad = cb$, and both sides are nonzero, so [L4] gives $v_p(a) + v_p(d) = v_p(c) + v_p(b)$ in $\mathbb{N}$. Applying the addition-preserving $\iota$ and rearranging in $\mathbb{Z}$ gives $\iota(v_p(a)) - \iota(v_p(b)) = \iota(v_p(c)) - \iota(v_p(d))$. [step 1.1, L1, L4, L6, L7, L8]

2.2 Clause 4. Assume $x$, $y$ and $x+y$ are nonzero. Then $x + y = [(ad+cb,\, bd)]$ with $bd \ne 0$, and $ad + cb \ne 0$ because $x+y \ne 0$; also $ad \ne 0$ and $cb \ne 0$. [step 1.1, L1, L2, L7]

3.1 Clause 2. For a nonzero integer $a$, $j(a) = [(a,1)]$, so $v_p(j(a)) = \iota(v_p(a)) - \iota(v_p(1)) = \iota(v_p(a)) - 0 = \iota(v_p(a))$. [step 2.1, L3, L5, L6, L8]

3.2 Clause 3. $xy = [(ac, bd)]$, with $ac \ne 0$ and $bd \ne 0$, so $v_p(xy) = \iota(v_p(ac)) - \iota(v_p(bd)) = \iota(v_p(a) + v_p(c)) - \iota(v_p(b) + v_p(d))$. [step 1.1, step 2.1, L2, L4, L7]

3.3 By [L4], $v_p(ad + cb) \ge \min\{v_p(ad),\, v_p(cb)\} = \min\{v_p(a) + v_p(d),\ v_p(c) + v_p(b)\}$; applying the order-preserving injection $\iota$ turns this into the same inequality between the corresponding integers. [step 2.2, L4, L6, L10]

4.1 Since $\iota$ preserves addition, that value is $\bigl(\iota(v_p(a)) + \iota(v_p(c))\bigr) - \bigl(\iota(v_p(b)) + \iota(v_p(d))\bigr)$, which rearranges in the commutative ring $\mathbb{Z}$ to $\bigl(\iota(v_p(a)) - \iota(v_p(b))\bigr) + \bigl(\iota(v_p(c)) - \iota(v_p(d))\bigr) = v_p(x) + v_p(y)$. [step 3.2, L6, L8]

4.2 Subtracting the integer $\iota(v_p(b)) + \iota(v_p(d)) = \iota(v_p(bd))$ from both sides, which preserves the order, and using that subtraction of a fixed element commutes with taking the smaller of two integers, gives $v_p(x+y) \ge \min\{\iota(v_p(a)) - \iota(v_p(b)),\ \iota(v_p(c)) - \iota(v_p(d))\} = \min\{v_p(x), v_p(y)\}$. [step 2.2, step 3.3, L4, L6, L8, L9]

5.1 Clauses 1 to 4 are established. [step 2.1, step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **Relation to the published $2$-adic example.** The published [[ex-p-adic-ultrametric]] records that the general $p$-adic machinery is available, but nevertheless develops $p=2$ from parity alone. The present lemma supplies the general algebraic extension: representation-independence is exactly the assertion that $ad=cb$ forces the two candidate values to agree.

- **Nothing metric is stated here, deliberately.** The $p$-adic absolute value $|x|_p = p^{-v_p(x)}$ and the ultrametric it induces need real powers with integer exponents and the definition of a metric space, all of which live far above this page in the library's order; they are not defined here and nothing on this page depends on them. What is proved is the algebra: a homomorphism from the nonzero rationals under multiplication to $\mathbb{Z}$ under addition, satisfying the ultrametric inequality on valuations.

- **The values are integers, not naturals.** $v_p(1/p) = -1$, so the extension genuinely leaves $\mathbb{N}$; that is why the two integer valuations are transported along $\iota$ before being subtracted. As on $\mathbb{Z}$, the value at $0$ is left undefined ([[def-p-adic-valuation]]).
