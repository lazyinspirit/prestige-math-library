---
id: ex-finite-power-map-affine-line
kind: example
title: Finite power map of the affine line
status: draft
origin: pipeline
deps:
  - cor-polynomial-ring-over-a-field-is-a-pid
  - cor-rational-function-field-as-a-fraction-field
  - def-affine-scheme-spectrum
  - def-algebraic-and-transcendental-elements
  - def-finite-morphism-schemes
  - def-finite-type-and-module-finite-algebras
  - def-principal-localisation
  - def-prime-spectrum-and-vanishing-sets
  - def-principal-distinguished-subset-of-spectrum
  - def-repeated-root-and-separable-polynomial
  - def-ring-characteristic
  - def-scheme-over-base
  - def-separable-elements-and-separable-extensions
  - lem-zariski-closed-set-axioms
  - lem-spectrum-localization-open-immersion
  - lem-zero-in-a-localised-module
  - thm-affine-scheme-ring-anti-equivalence
  - thm-characteristic-of-a-field-is-zero-or-prime
  - thm-evaluation-kernel-and-minimal-polynomial
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: Stacks Project, Morphisms of Schemes, Definition 29.45.1 (tag 01WH)
      url: https://stacks.math.columbia.edu/tag/01WH
    - title: 'Ravi Vakil, Foundations of Algebraic Geometry, 2011 public draft, §8.3.6 Example 1: Branched covers'
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
---

## Statement

Let $k$ be a field. For each integer $n\ge1$, the map $t\mapsto t^n$ defines
a finite morphism $\mathbb A^1_k\to\mathbb A^1_k$. On coordinate rings,
$k[s]\to k[t]$ sends $s$ to $t^n$, and $k[t]$ is free of rank $n$ over
$k[s]$ with basis $1,t,\ldots,t^{n-1}$. If $\operatorname{char}(k)=p>0$
divides $n$, the generic extension $k(t)/k(s)$ is inseparable. The exponent
$n=0$ gives the constant map $t\mapsto1$, which is not finite onto the whole
affine line.

## Facts & Assumptions

**Given:** A field $k$, the affine lines $\mathbb A^1_k=\operatorname{Spec}k[s]$ and $\operatorname{Spec}k[t]$, and the ring map $\varphi_n:k[s]\to k[t]$ with $\varphi_n(s)=t^n$ (or $\varphi_0(s)=1$).

[F1] For a base scheme $S$ the relative affine space $\mathbf A^1_S$ of [[def-scheme-over-base]] has $\mathbf A^1_{\operatorname{Spec}A}=\operatorname{Spec}A[t]$ over $\operatorname{Spec}A$; the affine line $\mathbb A^1_k$ of this example is that scheme, $\operatorname{Spec}k[t]$, with structure morphism induced by $k\hookrightarrow k[t]$. ([[def-scheme-over-base]])

[F2] A ring map $A\to B$ induces the corresponding morphism $\operatorname{Spec}B\to\operatorname{Spec}A$ ([[thm-affine-scheme-ring-anti-equivalence]]).

[F3] A morphism is finite when every affine target open has affine inverse image and its coordinate algebra is module-finite ([[def-finite-morphism-schemes]]).

[F4] Module-finite means finitely generated as a module over the base ring ([[def-finite-type-and-module-finite-algebras]]).

[F5] Every ideal of $k[s]$ is principal ([[cor-polynomial-ring-over-a-field-is-a-pid]]).

[F6] The closed subsets of $\operatorname{Spec}A$ are exactly the vanishing sets $V(I)$ ([[lem-zariski-closed-set-axioms]]; [[def-prime-spectrum-and-vanishing-sets]]).

[F7] $D(g)$ is the complement of $V((g))$ ([[def-principal-distinguished-subset-of-spectrum]]).

[F8] The localization map identifies $D(g)$ with $\operatorname{Spec}A_g$ ([[lem-spectrum-localization-open-immersion]]).

[F9] Elements of $A_g$ are fractions with denominator a power of $g$ ([[def-principal-localisation]]).

[F10] $A_0$ is the zero ring ([[def-principal-localisation]]).

[F11] A localized module fraction is zero exactly when some denominator annihilates its numerator ([[lem-zero-in-a-localised-module]]).

[F12] For a field $k$, $k(t)=\operatorname{Frac}(k[t])$ and likewise for $k(s)$ ([[cor-rational-function-field-as-a-fraction-field]]).

[F13] The characteristic is the least positive $m$ with $m\cdot1_k=0$, when such an $m$ exists ([[def-ring-characteristic]]).

[F14] A positive characteristic of a field is prime ([[thm-characteristic-of-a-field-is-zero-or-prime]]).

[F15] An element satisfying a nonzero polynomial over the base field is algebraic ([[def-algebraic-and-transcendental-elements]]).

[F16] For an algebraic element, its minimal polynomial divides every polynomial that annihilates it ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[F17] A field extension is separable only if every element is separable ([[def-separable-elements-and-separable-extensions]]).

[F18] A polynomial is separable when it has no repeated root in any extension field ([[def-repeated-root-and-separable-polynomial]]).

## Proof

**Proof technique:** direct exponent calculation, followed by localization.

1.1 For $n\ge1$, every exponent $m\ge0$ has a unique form $m=qn+i$ with $q\ge0$ and $0\le i<n$. Thus each polynomial in $k[t]$ has a unique expression $\sum_{i=0}^{n-1} f_i(t^n)t^i$ with $f_i\in k[s]$. Existence follows by grouping its monomials by their remainder modulo $n$; uniqueness follows because the exponents $qn+i$ are distinct for distinct pairs $(q,i)$. Taking only the $i=0$ term also shows that the ring map $k[s]\to k[t]$, $s\mapsto t^n$, is injective. Therefore $1,t,\ldots,t^{n-1}$ is a free $k[s]$-basis of rank $n$. [F1, algebra]
1.2 Suppose $\operatorname{char}(k)=p>0$ and $p\mid n$. By [F13], $p\cdot1_k=0$, and by [F14], $p$ is prime; set $r=n/p$, so $0<r<n$. In the generic extension $k(s)\subseteq k(t)$, let $\alpha=t^r$. It satisfies $\alpha^p=s$, hence is algebraic by [F15]. It is not in $k(s)$: if $t^r=P(t^n)/Q(t^n)$ for $P,Q\in k[s]$ and $Q\ne0$, then $t^rQ(t^n)=P(t^n)$. Every exponent on the left is congruent to $r$ modulo $n$, while every exponent on the right is divisible by $n$; since $0<r<n$, equality is impossible. Let $m_\alpha$ be its minimal polynomial. By [F16], $m_\alpha\mid X^p-s$. In an algebraic closure, $X^p-s=(X-\alpha)^p$ because $\alpha^p=s$. Since $\alpha\notin k(s)$, $m_\alpha$ has degree at least $2$; all its roots are $\alpha$, so it has a repeated root. By [F17] and [F18], $\alpha$ is inseparable over $k(s)$, so the generic extension is not separable. [F12, F13, F14, F15, F16, F17, F18, algebra]
1.3 For $n=0$, the coordinate map is $k[s]\to k[t]$, $s\mapsto1$. The $k[s]$-module action on $k[t]$ factors through $k[s]/(s-1)\cong k$, so if it were finitely generated as a $k[s]$-module then $k[t]$ would be finite-dimensional over $k$. This is impossible because $1,t,t^2,\ldots$ are linearly independent over $k$. The finite-morphism condition already fails on the whole target affine open, so the constant map is not finite. [F3, F4, algebra]
2.1 Let $U\subseteq\operatorname{Spec}k[s]$ be any affine open. Its closed complement is $V(I)$ for an ideal $I$ by [F6], and [F5] writes $I=(g)$, so $U=D(g)$ by [F7]. This includes $U=\varnothing$ with $g=0$ and the whole target with $g=1$. For $g\ne0$, [F2] and [F8] identify its inverse image with $D(g(t^n))=\operatorname{Spec}k[t]_{g(t^n)}$ and its coordinate map with $k[s]_g\to k[t]_{g(t^n)}$. The image $g(t^n)$ is nonzero by step 1.1. Every localized element is $h(t)/g(t^n)^N$ by [F9]; writing $h$ in the basis from step 1.1 shows that the localized basis spans over $k[s]_g$. To prove independence, clear the coefficient denominators in a relation. By [F11], some power of $g(t^n)$ then kills the resulting numerator. The ring $k[t]$ is a domain, since leading coefficients of nonzero polynomials over $k$ multiply to a nonzero coefficient, so this power can be cancelled. The original basis independence then makes every coefficient zero. Thus the localized algebra is module-finite over $k[s]_g$. If $g=0$, [F10] gives the zero coordinate ring on the empty inverse image and empty target open, and the zero module is finite. By [F3] and [F4], these checks on every affine target open prove finiteness. [F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 1.1, algebra]
3.1 At $n=1$, the basis is $\{1\}$ and the map is the identity; the generic extension is $k(t)/k(t)$ and is separable. The proof uses no choice: the basis is explicit, an arbitrary affine target open is handled one at a time, and the characteristic argument uses one explicit element. The empty target open is handled in step 2.1, and there is no empty-source case or interval endpoint. The source is nonempty because $k[t]$ is a domain and $(0)$ is prime. [F12, step 1.1, step 2.1, step 1.2, step 1.3] $\square$



