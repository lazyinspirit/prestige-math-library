---
id: "thm-classical-principal-open-coordinate-ring-localization"
kind: "theorem"
title: "Regular functions on a principal open are the principal localization"
status: "draft"
origin: "pipeline"
deps: ["thm-classical-affine-nullstellensatz-correspondence", "thm-classical-polynomial-functions-equal-coordinate-ring", "lem-classical-principal-opens-form-affine-basis", "def-classical-regular-function-on-open-set", "lem-classical-regular-functions-locality-and-gluing", "def-principal-localisation", "thm-universal-property-of-localisation", "prop-localisation-zero-equality-and-kernel-criteria", "thm-generated-ideal-description-in-a-commutative-ring", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry v6.10, Lemma 3.10 and Proposition 3.11, pp. 61–62"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
landmark: false
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice, inherited from the Nullstellensatz route. For every affine algebraic set $X$, $A=k[X]$ and $f\in A$, the map $$A_f\longrightarrow\mathcal O_X(D_X(f)),\qquad a/f^r\longmapsto(x\mapsto a(x)/f(x)^r)$$ is an isomorphism of unital $k$-algebras. If $D_X(f)=\varnothing$, then $f=0$ in the reduced ring $A$, and both sides are zero rings.

## Facts & Assumptions

**Given:** AC, an algebraically closed field $k$, an affine algebraic set $X$, $A=k[X]$, and $f\in A$.

[F1] Relative Nullstellensatz gives $I_X(V_X(H))=\sqrt H$ for every ideal of $A$ ([[thm-classical-affine-nullstellensatz-correspondence]]).

[F2] Equality of polynomial functions on all of $X$ is equality in $A$ ([[thm-classical-polynomial-functions-equal-coordinate-ring]]).

[F3] Principal opens form a basis ([[lem-classical-principal-opens-form-affine-basis]]).

[F4] Regular sections have local quotient expressions ([[def-classical-regular-function-on-open-set]]).

[F5] Regular sections form algebras ([[lem-classical-regular-functions-locality-and-gluing]]).

[F6] A map inverting the denominators extends uniquely to the localization ([[thm-universal-property-of-localisation]]).

[F7] A fraction is zero when some allowed denominator annihilates its numerator ([[prop-localisation-zero-equality-and-kernel-criteria]]).

[F8] An ideal membership has a finite sum expression ([[thm-generated-ideal-description-in-a-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 Restriction $A\to\mathcal O_X(D(f))$ is a unital algebra map. The function $1/f$ is regular on $D(f)$, so F6 extends restriction to the displayed map. If $a/f^r$ maps to zero, $a$ vanishes on $D(f)$; hence $fa$ vanishes everywhere on $X$, since $f=0$ outside $D(f)$. F2 gives $fa=0$ in $A$, and F7 makes the fraction zero. This proves injectivity without cancellation in $A$. [F2, F4, F5, F6, F7, given, algebra]

1.2 Fix $s\in\mathcal O_X(D(f))$. At each point take a local expression $s=g/h$ and refine its neighbourhood to $D(a)\subseteq D(f)\cap D(h)$ by F3. The inclusion $V_X(h)\subseteq V_X(a)$ gives $a\in\sqrt{(h)}$ by F1. Thus $a^e=hb$ for some $e\ge1,b\in A$. On $D(a)$, set $t=a^e$ and $c=gb$; then $D(t)=D(a)$ and $s=c/t$. [F1, F3, F4, given, algebra]

2.1 Consider the set of all pairs $(t,c)$ obtained in step 1.2; their opens $D(t)$ cover $D(f)$ and are contained in it. Thus $f$ vanishes on the simultaneous zero locus of the $t^2$. By F1, $f\in\sqrt{(t^2:\ (t,c)\text{ as above})}$. F8 supplies finitely many of these pairs $(t_i,c_i)$ and $u_i\in A$ with $f^N=\sum_{i=1}^m u_i t_i^2$, for some $N\ge1$. No compactness theorem or simultaneous choice of neighbourhoods is needed. [F1, F8, step 1.2]

3.1 For $p\in D(f)$ and each selected pair, if $t_i(p)\ne0$ then $c_i(p)=s(p)t_i(p)$; if $t_i(p)=0$ then both $c_i(p)t_i(p)$ and $s(p)t_i(p)^2$ are zero. Hence $\sum_i u_i(p)c_i(p)t_i(p)=s(p)\sum_i u_i(p)t_i(p)^2=s(p)f(p)^N$. Division by the nonzero scalar $f(p)^N$ shows that $(\sum_i u_i c_i t_i)/f^N$ maps to $s$. This proves surjectivity. [step 1.2, step 2.1, algebra]

4.1 If $D(f)$ is empty, $f$ is the zero function on $X$, hence zero in $A$ by F2. Localizing at 0 is the zero ring by F7; the empty domain has one function and its algebra is zero. If $f=1$, the same construction gives global sections and $A_1=A$. Together with injectivity and surjectivity this proves all cases. [F2, F7, step 1.1, step 3.1] ∎


## Sources

Source comparison: Milne, *Algebraic Geometry*, v6.10, Lemma 3.10 and Proposition 3.11, pp. 61–62. Conventions here distinguish arbitrary affine algebraic sets from nonempty irreducible varieties.
