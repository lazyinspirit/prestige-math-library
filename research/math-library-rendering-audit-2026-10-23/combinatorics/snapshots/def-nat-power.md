---
id: def-nat-power
kind: definition
title: "Exponentiation of natural numbers, $m^{n}$, and its agreement with the integer power in $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-recursion, thm-induction-principle, def-nat-addition, def-nat-multiplication,
       lem-nat-mult-associative, lem-nat-mult-commutative, lem-nat-mult-identity,
       def-nat-finite-sum-and-product, lem-nat-finite-sum-laws-and-the-canonical-embedding,
       def-integer-power, def-canonical-natural]
justified_by: []
aliases: []
landmark: false
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/def-nat-power.json
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
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "Empty product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Empty_product"
    - title: "Recursive definition (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Recursive_definition"
pipeline_run: null
---

## Definition

Let $m \in \mathbb{N}$. By the recursion theorem (The recursion theorem) applied to
the set $\mathbb{N}$, the starting element $1$ and the function
$f(x) = x \cdot m$ (Multiplication of natural numbers), there is a unique function
$\mathbb{N} \to \mathbb{N}$, written $n \mapsto m^{n}$, with

$$m^{0} = 1, \qquad m^{\sigma(n)} = m^{n} \cdot m \quad (n \in \mathbb{N}).$$

Both the base and the value are natural numbers, so $m^n \in \mathbb{N}$ for all
$m, n$. In particular $m^{1} = m^{0}\cdot m = m$ and $m^{2} = m \cdot m$.

**Why a new item is needed.** Integer powers $a^m$ defines $a^{n}$ for a
**real** base $a$, so its value is a real number. The counts on this page,
$\lvert A^{B}\rvert$ and $\lvert\mathcal{P}(A)\rvert$ among them, are natural
numbers, and an identity between them has to be an identity in $\mathbb{N}$. The
two operations are related by clause (d) below and by nothing weaker.

**(a) $0^{0} = 1$ and $0^{n} = 0$ for $n \ge 1$.** The first is the base clause.
For the second, $0^{\sigma(n)} = 0^{n}\cdot 0 = 0$, the clause $x \cdot 0 = 0$
being definitional (Multiplication of natural numbers), and every $n \ge 1$ is a
successor.

**(b) $1^{n} = 1$ for every $n$.** Induction: $1^{0} = 1$, and
$1^{\sigma(n)} = 1^{n}\cdot 1 = 1^{n}$ (Zero and one under multiplication,
The principle of mathematical induction).

**(c) $m^{p+q} = m^{p}\,m^{q}$ and $(m p)^{q} = m^{q} p^{q}$.** Both by induction
on $q$, using associativity and commutativity of multiplication
(Multiplication is associative, Multiplication is commutative). For the first, at
$q = 0$ we have $m^{p+0} = m^{p} = m^{p}\cdot 1 = m^{p}m^{0}$, and
$m^{p+\sigma(q)} = m^{\sigma(p+q)} = m^{p+q}\cdot m = (m^{p}m^{q})\cdot m = m^{p}\,m^{\sigma(q)}$,
using $p + \sigma(q) = \sigma(p+q)$ (Addition of natural numbers). For the second, at
$q = 0$ both sides are $1$, and
$(mp)^{\sigma(q)} = (mp)^{q}(mp) = m^{q}p^{q}mp = m^{\sigma(q)}p^{\sigma(q)}$.

**(d) The bridge into $\mathbb{R}$.** With $\iota : \mathbb{N} \to \mathbb{R}$
the canonical natural (The canonical natural $\iota(n) = n \cdot 1_F$ of a field) and $x^{n}$ the integer power
of Integer powers $a^m$,

$$\iota\big(m^{n}\big) = \iota(m)^{n} \qquad (m, n \in \mathbb{N}).$$

Induction on $n$: at $n = 0$ both sides are $1$, since $\iota(1) = 1$; and
$\iota(m^{\sigma(n)}) = \iota(m^{n}\cdot m) = \iota(m^{n})\,\iota(m) = \iota(m)^{n}\iota(m) = \iota(m)^{\sigma(n)}$,
the second equality being the multiplicativity of $\iota$ (clause 0 of
Laws of finite sums and products in $\mathbb{N}$, and $\iota\big(\sum_{k<n} a_k\big) = \sum_{k<n} \iota(a_k)$) and the last the
recursion clause of Integer powers $a^m$.

**(e) $m^{n}$ is a constant product.** $m^{n} = \prod_{k<n} m$, the
$\mathbb{N}$-valued product of the constant list
(Finite sums and finite products of natural numbers, $\sum_{k<n} a_k$ and $\prod_{k<n} a_k$ in $\mathbb{N}$). Induction: at $n = 0$ both sides are $1$,
and $\prod_{k<\sigma(n)} m = \big(\prod_{k<n} m\big)\cdot m = m^{n}\cdot m = m^{\sigma(n)}$.

## Definition references

[[thm-recursion]]

[[def-nat-multiplication]]

[[def-integer-power]]

[[lem-nat-mult-identity]]

[[thm-induction-principle]]

[[lem-nat-mult-associative]]

[[lem-nat-mult-commutative]]

[[def-nat-addition]]

[[def-canonical-natural]]

[[lem-nat-finite-sum-laws-and-the-canonical-embedding]]

[[def-nat-finite-sum-and-product]]

## Remarks

- **$0^{0} = 1$, $0! = 1$ and the empty product are one convention, not three.**
  The value $0^{0} = 1$ here is the base clause of the recursion above; by clause
  (e) it is the empty product of [[def-nat-finite-sum-and-product]]; and
  [[def-integer-power]] adopts $a^{0} = 1$ for **every** real $a$, $0$ included,
  so clause (d) is consistent at $m = n = 0$. The reasons for the convention are
  set out in [[def-integer-power]] and are not repeated here.

- **The laws are the same laws.** Clause (c) is the $\mathbb{N}$-valued form of
  clause 1 of [[lem-power-laws]], which states $a^{m+n} = a^m a^n$,
  $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$ for a base in a field. Only the two
  identities actually used on this page are proved above; the third is available
  in $\mathbb{R}$ through clause (d) whenever it is wanted.

- **The exponent stays a natural number.** Following the convention of
  [[def-finite-sum]], the identification of a natural with its canonical natural
  is deliberately *not* made in an exponent: in $m^n$ and in $\iota(m)^n$ the
  exponent $n$ is a natural number, never a real.
