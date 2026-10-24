---
id: ex-adjunction-between-preorders-computed
kind: example
title: 'A floor-division and multiplication adjunction between natural-number preorders'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-galois-connection, def-natural-numbers, def-nat-order, def-nat-multiplication, thm-division-algorithm-in-z]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Tom Leinster, Basic Category Theory, Section 2.1'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Example

Fix $m\in\mathbb N$ with $m>0$. On the preorder $(\mathbb N,\le)$ define

$$F(n)=mn,\qquad G(r)=\left\lfloor\frac r m\right\rfloor.$$

Then $F\dashv G$. Its unit and counit are $n\le G(F(n))$ and $F(G(r))\le r$, and in fact $G(F(n))=n$, $FGF=F$, and $GFG=G$.

## Facts & Assumptions

**Given:** Natural numbers $m,n,r$ with $m>0$.

[F1] The natural numbers are the smallest inductive set, with $0=\varnothing$ and successor $\sigma(n)=n\cup\{n\}$ ([[def-natural-numbers]]).

[F2] Natural order is defined by $a\le b$ exactly when $a+d=b$ for some $d\in\mathbb N$ ([[def-nat-order]]).

[F3] Natural multiplication is determined by $a\cdot0=0$ and $a\cdot\sigma(b)=a\cdot b+a$ ([[def-nat-multiplication]]).

[F4] For integers $a$ and $b>0$, there is a unique pair $(q,s)$ with $a=qb+s$ and $0\le s<b$; moreover $b$ divides $a$ exactly when $s=0$ ([[thm-division-algorithm-in-z]]).

[F5] A Galois connection between preorders satisfies $F(a)\le b$ exactly when $a\le G(b)$, with unit $a\le GF(a)$ and counit $FG(b)\le b$ ([[def-galois-connection]]).

## Verification

**Proof technique:** direct.

1.1 Apply [F4] to $r$ and $m$, viewing naturals as nonnegative integers, and write uniquely $r=qm+s$ with $0\le s<m$. Define $G(r)=q$. [F1, F4, construct]

2.1 If $mn\le r$, [F2] gives $r=mn+d$. Divide $d$ by $m$ as $d=tm+s'$ with $0\le s'<m$. Then $r=(n+t)m+s'$, so uniqueness in [F4] gives $q=n+t$ and $n\le q$. [step 1.1, F2, F3, F4, algebra]

2.2 Conversely, if $n\le q$, write $q=n+t$ by [F2]. Then $r=qm+s=mn+(tm+s)$, so [F2] gives $mn\le r$. Hence $F(n)\le r$ exactly when $n\le G(r)$. [step 1.1, F2, F3, algebra]

3.1 The equivalence in steps 2.1 and 2.2 is the condition [F5], so $F\dashv G$. Taking $r=mn$ gives quotient $n$ and remainder $0$, hence $G(F(n))=n$; the counit is $mG(r)\le r$. [step 2.1, step 2.2, F4, F5]

4.1 The equality $GF=1$ gives $FGF=F$, while applying $G$ to the counit formula and using the quotient $q=G(r)$ gives $GFG=G$. When $m=1$, every remainder is $0$ and both maps are the identity; the assumption $m>0$ excludes division by zero. [step 3.1, F4] ∎
