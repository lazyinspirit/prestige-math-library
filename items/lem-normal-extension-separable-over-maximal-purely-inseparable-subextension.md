---
id: lem-normal-extension-separable-over-maximal-purely-inseparable-subextension
kind: lemma
title: "A finite normal extension is separable over its purely inseparable fixed field"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-normal-algebraic-extension, def-fixed-field-of-an-automorphism-group, def-relative-field-automorphism-group, lem-artin-fixed-field-lower-degree-bound, lem-artin-fixed-field-upper-degree-bound, prop-finitely-generated-normal-extensions-are-splitting-fields, thm-isomorphisms-extend-to-splitting-fields, thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core, cor-irreducible-polynomial-is-separable-iff-derivative-nonzero, def-purely-inseparable-extension, def-separable-elements-and-separable-extensions, def-repeated-root-and-separable-polynomial, def-finite-galois-extension-and-galois-group, thm-evaluation-kernel-and-minimal-polynomial, thm-root-bound-for-polynomials-over-a-domain, thm-finite-field-extensions-are-algebraic, def-extension-degree-and-finite-extension, def-dimension, def-finitely-generated-field-extension, def-field-extension-generated-subfields-and-simple-extension, def-polynomials-that-split-and-splitting-fields, def-algebraic-and-transcendental-elements, thm-frobenius-endomorphism-and-finite-field-automorphism, thm-simple-algebraic-extension-quotient-power-basis-and-degree, thm-tower-law-for-finite-field-extensions]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Stacks Project, Lemma 9.27.3 (normal extension decomposition)"
      url: "https://stacks.math.columbia.edu/tag/030M"
      locator: "statement of Lemma 9.27.3 and its proof"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 3"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
      locator: "Chapter 3, Theorems 3.4 and 3.10 (fixed fields and normality)"
---

## Statement

Let $M/F$ be a finite normal field extension and let
$E=M^{\operatorname{Aut}(M/F)}$ be the fixed field of its $F$-automorphisms.
Then $E/F$ is finite purely inseparable and $M/E$ is finite Galois, hence in
particular separable. If $F$ has characteristic zero, then $E=F$. The argument
uses only finite groups, finite root sets and finite generating lists, so it is
choice-free.

## Facts & Assumptions

**Given:** a finite normal extension $M/F$, with $G:=\operatorname{Aut}(M/F)$ and fixed field $E:=M^{G}$.

[L1] A finite extension has finite degree $[M:F]=\dim_FM$, a finite-dimensional vector space has a finite basis, and $M=F(\alpha_1,\ldots,\alpha_n)$ for the finitely many basis elements ([[def-extension-degree-and-finite-extension]], [[def-dimension]], [[def-finitely-generated-field-extension]], [[def-field-extension-generated-subfields-and-simple-extension]]).

[L2] For algebraic $a$ over a field $F$ there is a unique monic irreducible minimal polynomial $m_a\in F[x]$, and $f(a)=0$ exactly when $m_a\mid f$ ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[L3] A nonzero polynomial of degree $n$ over an integral domain has at most $n$ roots in that domain ([[thm-root-bound-for-polynomials-over-a-domain]]).

[L4] $\operatorname{Aut}(M/F)$ is a group of $F$-automorphisms of $M$ and $M^{G}$ is the subfield of $G$-fixed elements, with $F\subseteq M^{G}\subseteq M$ ([[def-relative-field-automorphism-group]], [[def-fixed-field-of-an-automorphism-group]]).

[L5] If $G$ is a finite group of automorphisms of a field $K$, then $[K:K^{G}]\ge|G|$ ([[lem-artin-fixed-field-lower-degree-bound]]) and $[K:K^{G}]\le|G|$ ([[lem-artin-fixed-field-upper-degree-bound]]).

[L6] $M/E$ is normal exactly when the minimal polynomial over $E$ of every $\alpha\in M$ splits over $M$ ([[def-normal-algebraic-extension]], [[def-polynomials-that-split-and-splitting-fields]]).

[L7] $\alpha\in M$ is separable over $E$ when it is algebraic over $E$ with separable minimal polynomial, and $M/E$ is separable when every element is separable; a polynomial is separable when it has no repeated root in a splitting field ([[def-separable-elements-and-separable-extensions]], [[def-repeated-root-and-separable-polynomial]]). A finite extension is Galois when it is normal and separable ([[def-finite-galois-extension-and-galois-group]]).

[L8] A finite extension is algebraic, and in a tower of finite extensions degrees multiply ([[thm-finite-field-extensions-are-algebraic]], [[thm-tower-law-for-finite-field-extensions]], [[def-algebraic-and-transcendental-elements]]).

[L9] If $M/F$ is normal with $M=F(\alpha_1,\ldots,\alpha_m)$ and $p_j$ is the minimal polynomial of $\alpha_j$ over $F$, then $M$ is a splitting field over $F$ of $p_1\cdots p_m$ ([[prop-finitely-generated-normal-extensions-are-splitting-fields]]).

[L10] If $\sigma:F\to F'$ is a field isomorphism, $0\ne f\in F[x]$ and $E/F$, $E'/F'$ are splitting fields of $f$ and $\sigma_*f$, then $\sigma$ extends to an isomorphism $E\to E'$ ([[thm-isomorphisms-extend-to-splitting-fields]]).

[L11] In characteristic $p>0$ every nonconstant irreducible $f\in F[x]$ is uniquely $f(x)=g(x^{p^{e}})$ with $g$ irreducible, separable and $e$ maximal ([[thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core]]); in characteristic zero every irreducible polynomial is separable, because an irreducible polynomial is separable exactly when its derivative is nonzero and the derivative of a nonconstant polynomial of characteristic zero does not vanish ([[cor-irreducible-polynomial-is-separable-iff-derivative-nonzero]], [[def-repeated-root-and-separable-polynomial]]).

[L12] In a field of characteristic $p>0$ the map $z\mapsto z^{p^{n}}$ is injective ([[thm-frobenius-endomorphism-and-finite-field-automorphism]]), and a finite extension in characteristic $p>0$ is purely inseparable when every element satisfies $\alpha^{p^{n}}\in F$ for some $n$ ([[def-purely-inseparable-extension]]).

[L13] If $a$ is algebraic over $F$ with minimal polynomial $m_a$ of degree $n$, then $F(a)$ consists of the elements $c_0+c_1a+\cdots+c_{n-1}a^{n-1}$ and is isomorphic to $F[x]/(m_a)$ ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

## Proof

**Proof technique:** direct.
1.1 The group $G=\operatorname{Aut}(M/F)$ is finite. By [L1] choose $\alpha_1,\ldots,\alpha_n\in M$ with $M=F(\alpha_1,\ldots,\alpha_n)$; by [L8] and [L2] each $\alpha_i$ has a minimal polynomial $m_i$ over $F$. Every $\sigma\in G$ fixes $F$ and is a field homomorphism, so it is determined by the images $\sigma(\alpha_1),\ldots,\sigma(\alpha_n)$, since these generate $M$ over $F$; and $\sigma(\alpha_i)$ is a root of $m_i$, because applying $\sigma$ to $m_i(\alpha_i)=0$ gives $m_i(\sigma(\alpha_i))=0$ as $\sigma$ fixes the coefficients of $m_i$. By [L3] the polynomial $m_i$ has at most $\deg m_i$ roots in $M$, so the map $\sigma\mapsto(\sigma(\alpha_1),\ldots,\sigma(\alpha_n))$ injects $G$ into the finite product of these root sets; hence $G$ is finite. [L1, L2, L3, L8, construct]

2.1 The fixed field $E=M^{G}$ satisfies $F\subseteq E\subseteq M$ by [L4], and $[M:E]=|G|$: both bounds $[M:E]\ge|G|$ and $[M:E]\le|G|$ hold by [L5], applied to the finite group $G$ of automorphisms of $M$. In particular $M/E$ is a finite extension of degree $|G|$. [L4, L5, step 1.1, algebra]

3.1 The extension $M/E$ is finite Galois. It is finite by step 2.1. For $\alpha\in M$ let $\alpha^{G}:=\{\sigma(\alpha):\sigma\in G\}$ be its finite $G$-orbit and put $f:=\prod_{\beta\in\alpha^{G}}(T-\beta)\in M[T]$, a monic polynomial of degree $|\alpha^{G}|$ with $f(\alpha)=0$ whose roots in $M$ are the distinct elements of the orbit. Every $\sigma\in G$ permutes $\alpha^{G}$, hence fixes the coefficients of $f$, which are the elementary symmetric functions of the orbit; those coefficients therefore lie in $E=M^{G}$, that is $f\in E[T]$. It follows that the minimal polynomial $m$ of $\alpha$ over $E$, whose existence and divisibility property are given by [L2], divides $f$ in $E[T]$; being a divisor of a polynomial that is a product of distinct linear factors, $m$ itself is a product of distinct linear factors over $M$. Thus the minimal polynomial over $E$ of every $\alpha\in M$ splits over $M$ with distinct roots, so $M/E$ is normal by [L6] and separable by [L7]. Therefore $M/E$ is finite Galois by [L7]. [L2, L6, L7, step 2.1, algebra]

4.1 The extension $E/F$ is purely inseparable, and $E=F$ in characteristic zero. Since $M/F$ is finite it is algebraic by [L8], and by [L1] and [L9] $M$ is a splitting field over $F$ of the product $p_1\cdots p_n$ of the minimal polynomials of a finite generating list of $M/F$. Let $a\in E$ with minimal polynomial $q$ over $F$, and let $b\in M$ be any root of $q$. The assignment $a\mapsto b$ defines an isomorphism $F(a)\to F(b)$ of $F$-extensions: the $F$-algebra map $F[T]\to M$ with $T\mapsto b$ kills $q$ and so factors through $F[T]/(q)\cong F(a)$ by [L13], and it is injective because $F(a)$ is a field. Moreover $M$ is a splitting field of $p_1\cdots p_n$ over both $F(a)$ and $F(b)$, since all roots of the $p_j$ lie in $M$ and generate it over $F$, hence also over each of these intermediate fields. By [L10] applied over the base field $F(a)$ the isomorphism $a\mapsto b$ extends to an isomorphism $M\to M$, which is an $F$-automorphism because it fixes $F$; so $b=\sigma(a)=a$ for this $\sigma\in G$, since $a$ lies in the fixed field $E$. Hence $q$ has exactly one distinct root in $M$, and by normality of $M/F$ it has all its roots in $M$ by [L6]. If $F$ has characteristic $p>0$, write $q(T)=g(T^{p^{e}})$ as in [L11] with $g$ irreducible and separable; the distinct roots of $q$ in $M$ correspond bijectively to the roots of $g$ in $M$, because $z\mapsto z^{p^{e}}$ is injective by [L12], so $g$ has exactly one root and $\deg g=1$; writing $g(T)=T-\beta$ with $\beta\in F$ gives $q(T)=T^{p^{e}}-\beta$ and hence $a^{p^{e}}=\beta\in F$. Thus every element of $E$ has a $p$-power in $F$, so $E/F$ is purely inseparable by [L12]. If instead $F$ has characteristic zero, then the irreducible $q$ is separable by [L11], so $q$ has $\deg q$ distinct roots in $M$ by [L7]; having exactly one root forces $\deg q=1$ and $a\in F$. Hence $E=F$ in characteristic zero. This proves all three clauses of the statement. [L1, L6, L7, L8, L9, L10, L11, L12, L13, step 2.1, cases] ∎
