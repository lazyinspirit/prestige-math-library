---
id: lem-author-14463ef2f4e5-valuation-center
kind: lemma
title: A valuation overring has a center
status: published
domain: mathematics
deps:
  - def-valuative-dimension-and-boundedness
  - math:def-field-of-fractions
  - math:thm-field-of-fractions-is-a-field-and-the-domain-embeds
  - math:def-left-right-and-two-sided-ideal
  - math:def-prime-and-maximal-ideals
  - math:def-localisation-at-a-prime-ideal
  - math:thm-universal-property-of-localisation
  - math:thm-localisation-at-a-prime-is-local
dependency_roles:
  def-valuative-dimension-and-boundedness: mathematical-premise
  math:def-field-of-fractions: mathematical-premise
  math:thm-field-of-fractions-is-a-field-and-the-domain-embeds: mathematical-premise
  math:def-left-right-and-two-sided-ideal: mathematical-premise
  math:def-prime-and-maximal-ideals: mathematical-premise
  math:def-localisation-at-a-prime-ideal: mathematical-premise
  math:thm-universal-property-of-localisation: mathematical-premise
  math:thm-localisation-at-a-prime-is-local: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 6
---

## Statement
Let $D$ be a domain and $V$ a valuation overring in $K=\operatorname{Frac}(D)$. Then $V$ is local, meaning it has a unique maximal ideal $\mathfrak m$, and if $\mathfrak q=\mathfrak m\cap D$, the inclusion $D\subseteq V$ extends to a local inclusion $D_{\mathfrak q}\subseteq V$. Here local means that the inverse image of the maximal ideal of $V$ is the maximal ideal of $D_{\mathfrak q}$.

## Facts & Assumptions
**Given:** A domain $D$ and a valuation overring $V$ in its fraction field.

**Goal:** Construct its center $\mathfrak q$ and the stated local inclusion.

[F1] For each nonzero $x\in K$, either $x$ or $x^{-1}$ lies in $V$. [[def-valuative-dimension-and-boundedness]]

[F2] The fraction field $K=\operatorname{Frac}(D)$ is the localization of $D$ at its nonzero elements; it is a field, and $d\mapsto d/1$ is an injective unital ring homomorphism. We identify $D$ with this subring of $K$. [[math:def-field-of-fractions]] [[math:thm-field-of-fractions-is-a-field-and-the-domain-embeds]]

[F3] In a commutative ring $R$, an ideal $I$ is a subset containing $0$, closed under addition and additive inverses, and satisfying $ri\in I$ for every $r\in R$ and $i\in I$; it is proper if $I\ne R$. [[math:def-left-right-and-two-sided-ideal]] A prime ideal is proper and satisfies $ab\in\mathfrak p\Rightarrow a\in\mathfrak p$ or $b\in\mathfrak p$; a maximal ideal is maximal among proper ideals. A unit $u$ of a ring means an element admitting $v$ with $uv=vu=1$, and a nonunit is any other element. [[math:def-prime-and-maximal-ideals]]

[F4] For a prime ideal $\mathfrak q\subset D$, the localization $D_{\mathfrak q}$ has fractions $a/s$ with $s\in D\setminus\mathfrak q$. A unital homomorphism from $D$ taking these denominators to units extends uniquely to this localization by $a/s\mapsto f(a)f(s)^{-1}$. [[math:def-localisation-at-a-prime-ideal]] [[math:thm-universal-property-of-localisation]]

[F5] The ring $D_{\mathfrak q}$ is local with unique maximal ideal $\mathfrak qD_{\mathfrak q}=\{a/s:a\in\mathfrak q,\ s\notin\mathfrak q\}$. [[math:thm-localisation-at-a-prime-is-local]]

## Proof
1.1 Let $\mathfrak m$ be the set of nonunits of $V$. If $a$ is a nonunit and $v\in V$, then $va$ cannot be a unit, since an inverse of $va$ would give an inverse of $a$. If nonunits $a,b$ have nonzero sum, [F1] gives either $a/b\in V$ or $b/a\in V$ when both are nonzero; in the first case $a+b=b(1+a/b)$ is a nonunit, and similarly in the second. The zero cases are immediate, and $-a$ is a nonunit whenever $a$ is. Thus $\mathfrak m$ is a proper ideal: it contains $0$ and does not contain $1$. Every proper ideal contains only nonunits: if it contained a unit $u$, absorption would put $u^{-1}u=1$ in it and hence every ring element in it. Thus $\mathfrak m$ contains every proper ideal and is the unique maximal ideal. It is prime because two elements outside it are units and their product is a unit. [F1, F2, F3, given, algebra]

2.1 Its inverse image $\mathfrak q=\mathfrak m\cap D$ contains $0$, is closed under addition and additive inverses, and absorbs multiplication by elements of $D$, since $\mathfrak m$ has these properties in $V$. It excludes $1$, so it is a proper ideal. If $ab\in\mathfrak q$ for $a,b\in D$, primality of $\mathfrak m$ gives $a\in\mathfrak q$ or $b\in\mathfrak q$. Thus $\mathfrak q$ is prime. Every element of $D\setminus\mathfrak q$ maps to a unit of $V$, so [F4] extends the inclusion to a well-defined unital homomorphism $D_{\mathfrak q}\to V$ by $a/s\mapsto as^{-1}$. Here $s\ne0$, since $0\in\mathfrak q$, and this is the same fraction in $K$. If its image is zero, then $a=0$ in $K$, hence in $D$ by [F2], and $a/s=0$ in the localization. The homomorphism is therefore injective. A fraction $a/s$ maps into $\mathfrak m$ exactly when $a\in\mathfrak q$: multiplication by the unit $s$ preserves membership in $\mathfrak m$. By [F5] its inverse image is precisely the unique maximal ideal $\mathfrak qD_{\mathfrak q}$, proving the asserted local inclusion. [F2, F3, F4, F5, given, step 1.1, algebra] ∎
