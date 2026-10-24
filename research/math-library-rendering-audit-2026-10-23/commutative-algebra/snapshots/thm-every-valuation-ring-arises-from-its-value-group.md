---
id: thm-every-valuation-ring-arises-from-its-value-group
kind: theorem
title: "A valuation ring is recovered from its value group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-valuation-on-a-field, def-value-group-of-a-valuation-ring, thm-valuation-ring-characterisations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "M. Mustata, Commutative Algebra, Proposition 8.6"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., (26.11)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $V\subseteq K$ be a valuation ring, and let $\Gamma:=K^\times/V^\times$ be
its value group. Define an order on $\Gamma$ by
$$ \overline x\le\overline y \Longleftrightarrow y/x\in V. $$
Then this order is well defined, total, and translation-invariant, so $\Gamma$
is a totally ordered abelian group.

If $v:K\to\Gamma\cup\{\infty\}$ is defined by $v(0)=\infty$ and
$v(x)=\overline x$ for $x\in K^\times$, then $v$ is a valuation on $K$, and its
valuation ring is exactly $V$.

## Facts & Assumptions

**Given:** A valuation ring $V$ in a field $K$, and the quotient group $\Gamma=K^\times/V^\times$.

[L1] A valuation on a field is a map to a totally ordered abelian group adjoined with $\infty$ satisfying the exact-zero, multiplicative, and ultrametric laws ([[def-valuation-on-a-field]]).

[L2] The value group of $V$ is the quotient group $K^\times/V^\times$, and $\overline x\le\overline y$ is intended to mean $y/x\in V$ ([[def-value-group-of-a-valuation-ring]]).

[A1] If $u\in V^\times$, then for every $z\in K^\times$ one has $z\in V$ if and only if $uz\in V$.

## Proof

**Proof technique:** direct.

1.1 The order relation of [L2] is well defined on cosets: if $x'=ux$ and $y'=vy$ with $u,v\in V^\times$, then $y'/x'=(v/u)(y/x)$, and [A1] shows that $y'/x'\in V$ exactly when $y/x\in V$. [L2, A1, given]

1.2 The order is reflexive because $x/x=1\in V$. It is antisymmetric because if $\overline x\le\overline y$ and $\overline y\le\overline x$, then both $y/x$ and $x/y$ lie in $V$, so $y/x$ is a unit of $V$. Hence $x$ and $y$ represent the same coset in $\Gamma$. [A1, given, algebra]

1.3 The order is transitive because $y/x\in V$ and $z/y\in V$ imply $z/x=(z/y)(y/x)\in V$. It is total because $V$ is a valuation ring: for any $x,y\in K^\times$, the quotient $y/x$ either lies in $V$ or has inverse $x/y$ in $V$. It is translation-invariant because $\overline x+\overline z\le\overline y+\overline z$ is equivalent to $(yz)/(xz)=y/x\in V$. Thus $\Gamma$ is a totally ordered abelian group. [L2, given, algebra]

2.1 Define $v(0)=\infty$ and $v(x)=\overline x$ for $x\ne0$. Then $v(x)=\infty$ exactly when $x=0$, and for $x,y\ne0$ one has $v(xy)=\overline{xy}=\overline x+\overline y=v(x)+v(y)$. If $x+y=0$, then $v(x+y)=\infty\ge\min\{v(x),v(y)\}$. Otherwise, after swapping $x$ and $y$ if needed, step 1.3 gives $v(x)\le v(y)$, so $y/x\in V$ and $x+y=x(1+y/x)$ with $1+y/x\in V$; hence $v(x+y)\ge v(x)=\min\{v(x),v(y)\}$. Therefore $v$ satisfies the valuation axioms of [L1]. [L1, step 1.3, algebra]

3.1 The nonnegative locus of $v$ is exactly $V$: for $x\in K^\times$, the condition $0\le v(x)$ means $\overline 1\le\overline x$, which by [L2] is equivalent to $x\in V$. Since $0\in V$ as well, the valuation ring of $v$ is precisely $V$. [L1, L2, step 2.1, algebra] ∎
