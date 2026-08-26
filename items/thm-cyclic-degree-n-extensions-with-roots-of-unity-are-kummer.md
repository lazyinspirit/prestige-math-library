---
id: thm-cyclic-degree-n-extensions-with-roots-of-unity-are-kummer
kind: theorem
title: "If $\\mu_n\\subseteq F$ and $\\operatorname{char}F\\nmid n$, then a degree-$n$ extension is cyclic exactly when it is $F(\\alpha)$ with $\\alpha^n\\in F$ and $x^n-\\alpha^n$ irreducible"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lagrange-resolvent, thm-dedekind-linear-independence-of-characters, prop-splitting-field-of-x-n-minus-a, thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity, thm-finite-galois-extension-characterizations, thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots, def-extension-degree-and-finite-extension]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Proposition 5.27"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
    - title: "J. Ash, Basic Abstract Algebra, Section 6.7"
      url: "https://faculty.math.illinois.edu/~r-ash/Algebra.html"
pipeline_run: null
---

## Statement

Let $F$ be a field, let $n\ge1$, assume $\operatorname{char}F\nmid n$, and
assume $F$ contains a primitive $n$-th root of unity. For a finite extension
$K/F$ of degree $n$, the following are equivalent:

1. $K/F$ is cyclic.
2. There exists $\alpha\in K$ such that $K=F(\alpha)$, $\alpha^n\in F$, and
   $x^n-\alpha^n$ is irreducible over $F$.

## Facts & Assumptions

**Given:** A field $F$, an integer $n\ge1$, a primitive $n$-th root of unity $\zeta\in F$, and a finite extension $K/F$ of degree $n$.

[F1] The Lagrange resolvent is $R_{\sigma,\zeta}(x)=\sum_{i=0}^{n-1}\zeta^{-i}\sigma^i(x)$ ([[def-lagrange-resolvent]]).

[L1] Distinct characters are linearly independent ([[thm-dedekind-linear-independence-of-characters]]).

[L2] If an extension contains one nonzero root $\alpha$ of $x^n-a$, then all roots are $\zeta^i\alpha$, and the splitting field is obtained by adjoining $\alpha$ and the relevant roots of unity ([[prop-splitting-field-of-x-n-minus-a]]).

[L3] When $\operatorname{char}F\nmid n$, the polynomial $x^n-1$ is separable and a splitting field has cyclic root-of-unity group of order $n$ ([[thm-separability-of-x-n-minus-one-and-the-order-of-the-group-of-roots-of-unity]]).

[L4] A finite extension is Galois exactly when it is the splitting field of a separable polynomial ([[thm-finite-galois-extension-characterizations]]).

[L5] Embeddings of a simple algebraic extension correspond to the distinct roots of the minimal polynomial ([[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]).

## Proof

**Proof technique:** direct.

1.1 For the forward direction, assume $K/F$ is cyclic and choose a generator $\sigma$ of $\operatorname{Gal}(K/F)$. The distinct powers $1,\sigma,\dots,\sigma^{n-1}$ are distinct characters $K^\times\to K^\times$, so [L1] makes the resolvent operator $R_{\sigma,\zeta}$ of [F1] nonzero. Choose $\gamma\in K$ with $\alpha:=R_{\sigma,\zeta}(\gamma)\ne0$. [F1, L1, choose]

1.2 For the converse direction, assume $K=F(\alpha)$, $\alpha^n=a\in F$, and $x^n-a$ is irreducible. If $\alpha=0$, then $a=0$ and the irreducible polynomial is $x^n$, which forces $n=1$. Hence $K=F$, so the extension is cyclic. Assume from now on that $\alpha\ne0$. Then $[K:F]=n$, and [L2] shows every root of $x^n-a$ is $\zeta^i\alpha$ with $\zeta^i\in F$. Because [L3] makes the $n$ roots of $x^n-1$ distinct, these roots $\zeta^i\alpha$ are distinct as well. Hence all roots of $x^n-a$ already lie in $K$, and the polynomial is separable, so $K$ is its splitting field and [L4] makes $K/F$ Galois. [L2, L3, L4, algebra]

2.1 In the nonzero case of step 1.2, the root $\zeta\alpha$ of the irreducible polynomial $x^n-a$ determines, by [L5], an $F$-embedding $K=F(\alpha)\to K$ sending $\alpha$ to $\zeta\alpha$, hence an automorphism $\tau$ of $K/F$. Its powers send $\alpha$ to $\zeta^i\alpha$, so $\tau$ has order $n$. Because $[K:F]=n$ and a finite Galois extension has at most $[K:F]$ automorphisms, $\operatorname{Gal}(K/F)=\langle\tau\rangle$ is cyclic of order $n$. [step 1.2, L4, L5, algebra]

2.2 Because $$\sigma(\alpha)=\sum_{i=0}^{n-1}\zeta^{-i}\sigma^{i+1}(\gamma)=\zeta\alpha,$$ the element $\alpha^n$ is fixed by $\sigma$ and hence by the whole cyclic Galois group, so $\alpha^n\in F$. If $0<d<n$ and $\alpha^d\in F$, then $$\alpha^d=\sigma(\alpha^d)=\zeta^d\alpha^d,$$ so $\zeta^d=1$, contradicting primitivity of $\zeta$. Therefore no smaller positive power of $\alpha$ lies in $F$. The minimal polynomial of $\alpha$ divides $x^n-\alpha^n$ and has degree $n=[K:F]$, so it is exactly $x^n-\alpha^n$ and $K=F(\alpha)$. [step 1.1, algebra]

3.1 Steps 2.2 and 2.1 prove the equivalence. [step 2.2, step 2.1] ∎

## Remarks

- **The irreducibility clause is what forces degree exactly $n$.** Without it, adjoining one $n$-th root can produce a proper divisor of $n$.
