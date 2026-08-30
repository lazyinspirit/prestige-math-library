---
id: thm-equivalent-characterisations-of-a-dvr
kind: theorem
title: "Equivalent characterizations of a DVR"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-local-ring, def-noetherian-ring, def-principal-ideal-domain, def-krull-dimension-of-a-ring, def-integral-closure-and-integrally-closed-domain, thm-valuation-ring-is-integrally-closed, thm-ideals-in-a-dvr, cor-prime-ideals-and-dimension-of-a-dvr, thm-valuation-ring-characterisations, lem-valuation-ring-is-local, thm-noetherian-ring-ideal-characterisations, thm-noetherian-ring-quotients-and-localisations, thm-nilradical-of-a-noetherian-ring-is-nilpotent, thm-adjugate-identity-over-a-commutative-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem (23.10)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, Proposition 20.2"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a nonfield domain. The following are equivalent.

1. $R$ is a discrete valuation ring.
2. $R$ is a Noetherian valuation ring.
3. $R$ is a one-dimensional Noetherian local integrally closed domain.
4. $R$ is a local principal ideal domain with nonzero maximal ideal.

## Facts & Assumptions

**Given:** A nonfield domain $R$ with fraction field $K$.

[F1] A local ring is a nonzero commutative ring with a unique maximal ideal ([[def-local-ring]]).

[F2] A ring is Noetherian exactly when every ideal is finitely generated ([[thm-noetherian-ring-ideal-characterisations]]).

[F3] A principal ideal domain is an integral domain in which every ideal is principal ([[def-principal-ideal-domain]]).

[F4] A domain is integrally closed when every element of its fraction field integral over it already lies in the domain ([[def-integral-closure-and-integrally-closed-domain]]).

[L1] Valuation rings are integrally closed ([[thm-valuation-ring-is-integrally-closed]]).

[L2] In a valuation ring the ideals are linearly ordered, and every finitely generated ideal is principal ([[thm-valuation-ring-characterisations]]).

[L3] A valuation ring is local ([[lem-valuation-ring-is-local]]).

[L4] In a discrete valuation ring every nonzero ideal is a power of the maximal ideal ([[thm-ideals-in-a-dvr]]).

[L5] A discrete valuation ring has exactly two prime ideals and dimension $1$ ([[cor-prime-ideals-and-dimension-of-a-dvr]]).

[L6] Quotients and localisations of Noetherian rings are Noetherian ([[thm-noetherian-ring-quotients-and-localisations]]).

[L7] The nilradical of a Noetherian ring is nilpotent ([[thm-nilradical-of-a-noetherian-ring-is-nilpotent]]).

[L8] For a positive-size square matrix $A$ over a commutative ring, $A\operatorname{adj}(A)=\det(A)I$ ([[thm-adjugate-identity-over-a-commutative-ring]]).

[F5] Krull dimension is the supremum of the lengths of strict chains of prime ideals ([[def-krull-dimension-of-a-ring]]).

## Proof

**Proof technique:** direct.

1.1 Assume condition 1. Then [L3] makes $R$ local. By [L4], every ideal of $R$ is principal, so [F3] shows that $R$ is a PID; in particular it is condition 4. Because every ideal is principal, [F2] makes $R$ Noetherian, so condition 2 holds as well. By [L1] and [L5], $R$ is integrally closed and one-dimensional, so condition 3 also holds. [F2, F3, L1, L3, L4, L5]

1.2 Assume condition 2. By [L3], the ring is local with maximal ideal $\mathfrak m$. Because $R$ is not a field, $\mathfrak m\ne0$. By [F2], every ideal of $R$ is finitely generated, so choose generators $a_1,\ldots,a_r$ of $\mathfrak m$. By [L2], one of them divides all the others; rename it $\pi$. Then $\mathfrak m=(\pi)$. [F2, L2, L3, given, choose]

1.3 Assume condition 3. Let $\mathfrak m$ be the unique maximal ideal. It is nonzero because $R$ is not a field. Choose $0\ne x\in\mathfrak m$. The quotient $R/xR$ is Noetherian by [L6]. Every prime ideal of $R$ containing $xR$ is nonzero, hence equals $\mathfrak m$ because $\dim R=1$. Therefore the nilradical of $R/xR$ is $\mathfrak m/xR$, so [L7] yields an integer $n\ge1$ with $\mathfrak m^n\subseteq xR$. [F1, F5, L6, L7, given, choose]

1.4 Assume condition 4. Then the ring is local with nonzero maximal ideal $\mathfrak m=(\pi)$. Because every ideal is principal, [F2] makes $R$ Noetherian. Every element outside $\mathfrak m$ is a unit: if $x\notin\mathfrak m$, then $(x)$ is not contained in the unique maximal ideal, so $(x)=R$. Hence every nonunit is a multiple of $\pi$. [F1, F2, F3, given, algebra]

2.1 In the situations of steps 1.2 and 1.4, the ring is a Noetherian local domain with nonzero principal maximal ideal $\mathfrak m=(\pi)$. Let $0\ne x\in R$. If $x$ is not a unit, the maximal-ideal description gives $x=\pi x_1$. If $x_1$ is not a unit, write $x_1=\pi x_2$, and continue. This process stops, for otherwise $(x)\subsetneq(x_1)\subsetneq(x_2)\subsetneq\cdots$ would be a strict ascending chain of ideals, contradicting Noetherianity. Thus every nonzero element has the form $u\pi^n$ with $u$ a unit and $n\ge0$. If $u\pi^n=u'\pi^m$ with units $u,u'$, then $n=m$, for otherwise a positive power of the nonunit $\pi$ would equal a unit. [step 1.2, step 1.4, algebra]

3.1 In the same situations, every nonzero ideal $I$ of $R$ is $(\pi^n)$ for a unique integer $n\ge0$: choose $0\ne x\in I$ whose exponent in step 2.1 is minimal, say $x=u\pi^n$. Then $\pi^n=u^{-1}x\in I$. For any nonzero $y\in I$, write $y=u'\pi^m$ by step 2.1; minimality gives $m\ge n$, so $y\in(\pi^n)$. Hence $I=(\pi^n)$. Therefore step 1.2 already yields condition 4. [step 1.2, step 2.1, given, choose, algebra]

3.2 Under condition 4, let $x=a/b\in K^\times$ with $a,b\in R\setminus\{0\}$. By step 2.1, write $a=u\pi^m$ and $b=v\pi^n$. Then $x=(uv^{-1})\pi^{m-n}$. If $m\ge n$, then $x\in R$; if $m<n$, then $x^{-1}\in R$. Thus $R$ is a valuation ring, and step 1.4 already makes it Noetherian. Therefore condition 2 holds. [step 1.4, step 2.1, algebra]

4.1 Return to condition 3. Choose $n\ge1$ minimal with $\mathfrak m^n\subseteq xR$. If $n=1$, then $\mathfrak m=(x)$, so steps 1.3 and 3.1 give condition 4. Suppose instead that $n>1$, and choose $y\in\mathfrak m^{n-1}\setminus xR$. Then $y\mathfrak m\subseteq\mathfrak m^n\subseteq xR$, so $z:=y/x\in K$ satisfies $z\mathfrak m\subseteq R$ while $z\notin R$. [step 1.3, step 3.1, choose, algebra]

4.2 Under condition 4, define $v:K\to\mathbb Z\cup\{\infty\}$ by $v(0)=\infty$ and $v(x)=m-n$ when $x=(uv^{-1})\pi^{m-n}$ as in step 3.2. The uniqueness part of step 2.1 makes this well defined. Multiplicativity is immediate from exponents. If $v(x)\le v(y)$, write $x=u\pi^m$ and $y=u'\pi^n$ with $m\le n$; then $x+y=\pi^m(u+u'\pi^{n-m})$, and the bracket lies in $R$, so $v(x+y)\ge m=\min\{v(x),v(y)\}$. Because $v(\pi)=1$, this valuation is surjective, and its nonnegative locus is exactly $R$. Therefore condition 1 holds. [step 2.1, algebra]

5.1 Still under condition 3, suppose also that $z\mathfrak m\subseteq\mathfrak m$. Because $R$ is Noetherian, [F2] lets us choose generators $b_1,\ldots,b_r$ of $\mathfrak m$. Write $zb_j=\sum_{i=1}^r c_{ij}b_i$ with $c_{ij}\in R$. In matrix form this is $(zI_r-C)\mathbf b=0$. By [L8], $\det(zI_r-C)\mathbf b=0$. Choose an index $j$ with $b_j\ne0$; since $R$ is a domain, the equality $\det(zI_r-C)b_j=0$ forces $\det(zI_r-C)=0$. This is a monic polynomial equation for $z$ with coefficients in $R$, so $z$ is integral over $R$. Because $z\in K$ and condition 3 says $R$ is integrally closed, [F4] then forces $z\in R$, a contradiction. Hence $z\mathfrak m\nsubseteq\mathfrak m$. [F2, F4, L8, step 4.1, given, choose, algebra]

6.1 By step 5.1, choose $a\in\mathfrak m$ with $az\notin\mathfrak m$. Since $z\mathfrak m\subseteq R$, the element $u:=az$ lies in $R$. Being outside the maximal ideal, $u$ is a unit. For every $b\in\mathfrak m$, the element $zb$ lies in $R$, so $b=u^{-1}a(zb)\in aR$. Thus $\mathfrak m\subseteq aR\subseteq\mathfrak m$, and $\mathfrak m=aR$ is principal. Together with step 1.3, step 3.1 now gives condition 4. [F1, step 1.3, step 3.1, step 4.1, step 5.1, algebra]

7.1 Step 1.1 proves $(1)\Rightarrow(2),(1)\Rightarrow(3),(1)\Rightarrow(4)$; steps 1.2 and 3.1 prove $(2)\Rightarrow(4)$; step 3.2 proves $(4)\Rightarrow(2)$; step 4.2 proves $(4)\Rightarrow(1)$; and steps 1.3 to 6.1 prove $(3)\Rightarrow(4)$. Therefore all four conditions are equivalent. [step 1.1, step 1.2, step 3.1, step 3.2, step 4.2, step 6.1] ∎
