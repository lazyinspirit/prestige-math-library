---
id: lem-strong-transcendence-descends-to-minimal-prime-quotients
kind: lemma
title: Strong transcendence descends to reduced minimal-prime quotients
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-strongly-transcendental-element, def-nilradical-and-reduced-ring, cor-nilradical-as-intersection-of-primes, lem-radical-commutes-with-localisation, cor-primes-of-a-prime-local-ring, def-localisation-at-a-prime-ideal, prop-localisation-zero-equality-and-kernel-criteria, def-quotient-ring, prop-canonical-quotient-ring-map, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Commutative Algebra, Section 10.123, Lemma 10.123.8"
      url: "https://stacks.math.columbia.edu/tag/00PI"
      locator: "Section 10.123, Lemma 10.123.8 with its complete proof"
    - title: "J. S. Milne, A Primer of Commutative Algebra, version 4.03, Section 17"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
verification:
  audited: 2026-09-27
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $R\subseteq S$ be an
inclusion of reduced commutative rings ([[def-nilradical-and-reduced-ring]]),
let $x\in S$ be strongly transcendental over $R$
([[def-strongly-transcendental-element]]), let $\mathfrak q\subseteq S$ be a
minimal prime and let $\mathfrak p=R\cap\mathfrak q$ be its contraction to $R$.
Then the image of $x$ in the domain $S/\mathfrak q$ is strongly transcendental
over the subring $R/\mathfrak p\subseteq S/\mathfrak q$
([[def-quotient-ring]]).

The minimality of $\mathfrak q$ is essential: the local ring $S_{\mathfrak q}$
is then a field, which is what lets one clear a denominator outside
$\mathfrak q$, and the annihilator-sensitive form of strong transcendence is
what makes the clearing argument work without assuming that $S$ is a domain.

## Facts & Assumptions

**Given:** The Axiom of Choice; an inclusion of reduced commutative rings $R\subseteq S$, an element $x\in S$ strongly transcendental over $R$, a minimal prime $\mathfrak q\subseteq S$ and $\mathfrak p=R\cap\mathfrak q$.

[L1] For $R\subseteq S$ and $x\in S$, strong transcendence of $x$ over $R$ means that $u(a_0+a_1x+\cdots+a_kx^k)=0$ with $u\in S$ and $a_i\in R$ implies $ua_i=0$ for all $i$ ([[def-strongly-transcendental-element]]).

[L2] The nilradical $\operatorname{Nil}(R)$ of a commutative ring is the radical of the zero ideal, so $x\in\operatorname{Nil}(R)$ means $x^n=0$ for some $n\ge1$, and $R$ is reduced when $\operatorname{Nil}(R)=(0)$ ([[def-nilradical-and-reduced-ring]]).

[L3] The nilradical of a commutative ring is the intersection of all of its prime ideals; this is the point where the Axiom of Choice is used, through the existence of primes avoiding a given element ([[cor-nilradical-as-intersection-of-primes]]).

[L4] For a commutative ring $R$, a multiplicative subset $S\subseteq R$ and an ideal $I\trianglelefteq R$ one has $S^{-1}\sqrt I=\sqrt{S^{-1}I}$ as ideals of $S^{-1}R$ ([[lem-radical-commutes-with-localisation]]).

[L5] For a commutative ring $R$ and a prime $\mathfrak p\in\operatorname{Spec}(R)$, contraction along $R\to R_{\mathfrak p}$ is an inclusion-preserving bijection from $\operatorname{Spec}(R_{\mathfrak p})$ onto the set of primes $\mathfrak q\subseteq\mathfrak p$ of $R$; the inverse sends $\mathfrak q$ to $\mathfrak q R_{\mathfrak p}$ ([[cor-primes-of-a-prime-local-ring]]).

[L6] For a multiplicative subset $S$ of a commutative ring $R$ and $r\in R$, the image of $r$ in $S^{-1}R$ is zero if and only if $ur=0$ for some $u\in S$ ([[prop-localisation-zero-equality-and-kernel-criteria]]).

[L7] For a prime $\mathfrak p\subseteq R$ the localisation $R_{\mathfrak p}$ is $(R\setminus\mathfrak p)^{-1}R$, with elements fractions $r/s$ for $s\notin\mathfrak p$ ([[def-localisation-at-a-prime-ideal]]).

[L8] For an ideal $I$ of a commutative ring $R$ the quotient ring $R/I$ has elements the cosets $r+I$, and the canonical projection $R\to R/I$, $\pi(r)=r+I$, is a surjective ring homomorphism with kernel $I$ ([[def-quotient-ring]], [[prop-canonical-quotient-ring-map]]).

[L9] The Axiom of Choice is the assertion that every family of nonempty sets has a choice function; it is assumed in this item and used exactly through [L3] ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 We work under [L9]. Set $\overline R=R/\mathfrak p$ and $\overline S=S/\mathfrak q$, and let $\overline x$ denote the image of $x$ in $\overline S$ by [L8]. Since $\mathfrak p=R\cap\mathfrak q$ is the kernel of the composite $R\to S\to S/\mathfrak q$, the map $\overline R\to\overline S$ induced by the inclusion is injective, so $\overline R$ is a subring of $\overline S$; both are domains, hence reduced by [L2]. [given, L2, L8]

1.2 The localisation $S_{\mathfrak q}$ is reduced. Indeed, applying [L4] to the ideal $I=(0)$ of $S$ gives $S^{-1}\sqrt{(0)}=\sqrt{S^{-1}(0)}$ for the multiplicative subset $S\setminus\mathfrak q$ of [L7], that is, the extension of $\operatorname{Nil}(S)=(0)$ is $\operatorname{Nil}(S_{\mathfrak q})$; the extension of the zero ideal is zero, so $\operatorname{Nil}(S_{\mathfrak q})=(0)$ by [L2]. [given, L2, L4, L7]

1.3 By [L5] the primes of $S_{\mathfrak q}$ correspond bijectively to the primes of $S$ contained in $\mathfrak q$. Since $\mathfrak q$ is a minimal prime, the only prime of $S$ contained in $\mathfrak q$ is $\mathfrak q$ itself, so $\mathfrak qS_{\mathfrak q}$ is the unique prime ideal of $S_{\mathfrak q}$. [given, L5, L7]

2.1 By [L3] applied to the ring $S_{\mathfrak q}$, its nilradical is the intersection of its prime ideals; by step 1.3 that intersection is the single ideal $\mathfrak qS_{\mathfrak q}$, so $\operatorname{Nil}(S_{\mathfrak q})=\mathfrak qS_{\mathfrak q}$. By step 1.2 the nilradical is zero, hence $\mathfrak qS_{\mathfrak q}=0$. In particular the image in $S_{\mathfrak q}$ of every element of $\mathfrak q$ is a member of $\mathfrak qS_{\mathfrak q}=0$, hence is zero. [step 1.2, step 1.3, L3]

2.2 Now let $\overline u\in\overline S$ and $\overline a_0,\ldots,\overline a_k\in\overline R$ satisfy $\overline u(\overline a_0+\overline a_1\overline x+\cdots+\overline a_k\overline x^k)=0$ in $\overline S$. Choose preimages $u\in S$ and $a_i\in R$ under the quotient maps of [L8]; then $u(a_0+a_1x+\cdots+a_kx^k)\in\mathfrak q$, because its image in $\overline S$ is the left-hand side of the assumed relation. [given, step 1.1, L8, algebra]

3.1 By step 2.1 the image of the element $u(a_0+a_1x+\cdots+a_kx^k)\in\mathfrak q$ in $S_{\mathfrak q}$ is zero, so the kernel criterion [L6] applied to the localisation $S\to S_{\mathfrak q}$ at the multiplicative subset $S\setminus\mathfrak q$ of [L7] provides $u'\in S\setminus\mathfrak q$ with $u'u(a_0+a_1x+\cdots+a_kx^k)=0$ in $S$. [step 2.1, step 2.2, L6, L7]

4.1 The element $x$ is strongly transcendental over $R$ by hypothesis, so [L1] applied to the vanishing product of step 3.1 with multiplier $u'u\in S$ gives $u'ua_i=0$ in $S$ for every $i$. [given, step 3.1, L1]

5.1 Since $u'u a_i=0\in\mathfrak q$ and $u'\notin\mathfrak q$, the primality of $\mathfrak q$ gives $ua_i\in\mathfrak q$ for every $i$. Passing to $\overline S$ by [L8], this says $\overline u\,\overline a_i=0$ in $\overline S$ for every $i$. [step 4.1, L8, algebra]

6.1 Steps 2.2, 5.1 and the discussion of step 1.1 show: for every $k\ge0$, every multiplier $\overline u\in\overline S$ and all $\overline a_i\in\overline R$, the vanishing $\overline u(\overline a_0+\cdots+\overline a_k\overline x^k)=0$ implies $\overline u\overline a_i=0$ for all $i$. By [L1] the image $\overline x$ is strongly transcendental over $\overline R=R/\mathfrak p$ inside $\overline S=S/\mathfrak q$, which is the assertion; the Axiom of Choice was assumed in step 1.1 and used only through [L3] in step 2.1. ∎ [step 1.1, step 2.2, step 5.1, L1]
