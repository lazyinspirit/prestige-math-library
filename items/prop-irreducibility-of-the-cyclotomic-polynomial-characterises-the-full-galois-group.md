---
id: prop-irreducibility-of-the-cyclotomic-polynomial-characterises-the-full-galois-group
kind: proposition
title: "$\\Phi_n$ is irreducible over $K$ exactly when $[K(\\zeta_n):K]=\\varphi(n)$, exactly when the embedding into $(\\mathbb Z/n)^\\times$ is onto"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-cyclotomic-polynomial, thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient, thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity, thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n, thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity, def-cyclotomic-extension, thm-evaluation-kernel-and-minimal-polynomial, thm-simple-algebraic-extension-quotient-power-basis-and-degree, def-irreducible-and-prime-elements-in-a-domain, thm-finite-galois-extension-characterizations, def-unit-group-modulo-n-and-euler-totient, def-extension-degree-and-finite-extension, def-roots-of-unity-in-a-field, def-ring-characteristic, def-polynomial-degree-leading-coefficient-and-monic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Lemma 5.9"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
    - title: "K. Conrad, Cyclotomic Extensions (expository blurb), Section 2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/cyclotomic.pdf"
pipeline_run: null
---

## Statement

Let $K$ be a field and $n\ge1$ with $\operatorname{char}K\nmid n$
([[def-ring-characteristic]]), let $E=K(\mu_n)$ ([[def-cyclotomic-extension]]),
and let $\zeta\in E$ be a primitive $n$-th root of unity
([[def-roots-of-unity-in-a-field]]). The following are equivalent.

1. The image of $\Phi_n$ in $K[t]$ ([[def-cyclotomic-polynomial]]) is irreducible
   ([[def-irreducible-and-prime-elements-in-a-domain]]).
2. $[K(\zeta):K]=\varphi(n)$ ([[def-extension-degree-and-finite-extension]],
   [[def-unit-group-modulo-n-and-euler-totient]]).
3. The embedding
   $\operatorname{Gal}(E/K)\to(\mathbb Z/n)^{\times}$ of
   [[thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n]] is an
   isomorphism.

## Facts & Assumptions

**Given:** A field $K$, an integer $n\ge1$ with $\operatorname{char}K\nmid n$, the extension $E=K(\mu_n)$, a primitive $n$-th root of unity $\zeta\in E$, and the minimal polynomial $m_\zeta\in K[t]$ of $\zeta$ over $K$.

[L1] The image of $\Phi_n$ in $K[t]$ has as its roots in $E$ exactly the primitive $n$-th roots of unity in $E$ ([[thm-the-roots-of-the-cyclotomic-polynomial-are-the-primitive-roots-of-unity]]).

[L2] $\Phi_n$ is monic of degree $\varphi(n)$ ([[thm-cyclotomic-polynomials-are-monic-integer-polynomials-of-degree-euler-totient]], [[def-polynomial-degree-leading-coefficient-and-monic]]); reduction into $K[t]$ preserves both.

[L3] For $a$ algebraic over $K$ there is a unique monic irreducible $m_a\in K[t]$ with $f(a)=0$ if and only if $m_a\mid f$ ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[L4] If $a$ is algebraic over $K$ with minimal polynomial of degree $m$, then $[K(a):K]=m$ ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[L5] For this $n\ge1$, $E/K$ is finite Galois and $\sigma\mapsto[a_\sigma]_n$ is an injective homomorphism $\operatorname{Gal}(E/K)\to(\mathbb Z/n)^{\times}$ ([[thm-the-cyclotomic-galois-group-embeds-in-the-unit-group-modulo-n]]); moreover $E=K(\zeta)$ for every primitive $n$-th root $\zeta$ ([[thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity]]).

[L6] $\bigl|(\mathbb Z/n)^{\times}\bigr|=\varphi(n)$ ([[def-unit-group-modulo-n-and-euler-totient]]), and $|\operatorname{Gal}(E/K)|=[E:K]$ for a finite Galois extension ([[thm-finite-galois-extension-characterizations]]).

[L7] In an integral domain, an irreducible element is a nonzero nonunit every one of whose factorisations has a unit factor ([[def-irreducible-and-prime-elements-in-a-domain]]).

## Proof

**Proof technique:** direct.

1.1 $\zeta$ is a root of the image of $\Phi_n$ in $K[t]$ by [L1], so $m_\zeta$ divides that image by [L3]; both are monic, and $m_\zeta$ has positive degree because $\zeta\ne0$ is not a root of a nonzero constant. Write the image of $\Phi_n$ as $m_\zeta\,g$ with $g\in K[t]$ monic. [L1, L2, L3]

1.2 For the equivalence of clauses 2 and 3: by [L5] one has $E=K(\zeta)$ and the embedding is injective into a group of order $\varphi(n)$ by [L6], so it is surjective if and only if $|\operatorname{Gal}(E/K)|=\varphi(n)$; and $|\operatorname{Gal}(E/K)|=[E:K]=[K(\zeta):K]$ by [L6]. An injective homomorphism onto its target is an isomorphism. [L5, L6]

2.1 For the implication from clause 1 to clause 2: if the image of $\Phi_n$ is irreducible, then in the factorisation of step 1.1 one factor is a unit by [L7], and $m_\zeta$ is not, so $g$ is a nonzero constant; both $m_\zeta g$ and $m_\zeta$ being monic forces $g=1$ and $m_\zeta=\Phi_n$. Hence $[K(\zeta):K]=\deg m_\zeta=\varphi(n)$ by [L2] and [L4]. [step 1.1, L2, L4, L7]

2.2 For the implication from clause 2 to clause 1: if $[K(\zeta):K]=\varphi(n)$ then $\deg m_\zeta=\varphi(n)=\deg\Phi_n$ by [L2] and [L4], so $g$ in step 1.1 is monic of degree $0$, that is $g=1$ and the image of $\Phi_n$ equals $m_\zeta$, which is irreducible by [L3]. [step 1.1, L2, L3, L4]

3.1 Steps 2.1 and 2.2 give the equivalence of clauses 1 and 2, and step 1.2 the equivalence of clauses 2 and 3; so all three are equivalent. [step 2.1, step 2.2, step 1.2] ∎

## Remarks

- **This is a criterion, not a theorem about $\mathbb Q$.** Over $\mathbb Q$ all three clauses hold for every $n$ ([[thm-cyclotomic-polynomials-are-irreducible-over-the-rationals]]), but over $\mathbb F_q$ they hold only when the class of $q$ generates $(\mathbb Z/n)^{\times}$ ([[cor-the-reduced-cyclotomic-polynomial-is-irreducible-exactly-when-q-generates-the-unit-group]]).
