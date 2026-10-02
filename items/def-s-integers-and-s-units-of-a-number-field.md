---
id: def-s-integers-and-s-units-of-a-number-field
kind: definition
title: S-integers and S-units of a number field
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-dedekind-domain
  - def-fractional-ideal
  - def-number-field
  - def-prime-ideal-valuations-on-fractional-ideals
  - def-ring-of-integers-of-a-number-field
  - lem-ring-units-form-a-group
  - lem-nonzero-number-field-ideal-has-finite-quotient
  - thm-clearing-denominators-for-an-algebraic-number
  - thm-integral-closure-is-integrally-closed
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-ring-of-integers-free-of-rank-degree
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 5 p.90: the ring O_K(S) and the group U(S) of S-units; Theorem 5.11 uses a finite set S of prime ideals."
    - title: "J. S. Milne, Algebraic Number Theory v3.08, arithmetic prerequisites"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Proposition 2.6 and Corollary 2.7 (fraction field); Proposition 2.29 (integral basis); Chapter 3 (local valuations); p.90 (S-integers and S-units)."
    - title: "Jurgen Neukirch, Algebraic Number Theory (Springer, 1999)"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "§I.11 pp.70-71: O_K(X), the S-units, and Corollary (11.7) with a finite set of prime ideals."
    - title: "Jean-Francois Biasse and Christine Van Vredendaal, Fast multiquadratic S-unit computation"
      url: "https://msp.org/obs/2019/2-1/obs-v2-n1-p07-s.pdf"
      locator: "§2F p.106: the definitions of S-integers and S-units."
verification:
  precheck: pass
---

## Definition

Let $K$ be a number field ([[def-number-field]]), and let $S$ be a finite set of
nonzero prime ideals of $\mathcal O_K$ ([[def-ring-of-integers-of-a-number-field]]);
only finite primes belong to $S$. Write $v_{\mathfrak p}$ for the prime-ideal
valuation of a nonzero fractional ideal
([[def-prime-ideal-valuations-on-fractional-ideals]]) and, for
$x\in K^{\times}$, write $v_{\mathfrak p}(x):=v_{\mathfrak p}\bigl((x)\bigr)$
for the principal fractional ideal $(x)$ ([[def-fractional-ideal]]).

The **ring of $S$-integers** of $K$ is

$$\mathcal O_{K,S}=\{0\}\cup\{\,x\in K^{\times}: v_{\mathfrak p}(x)\ge0 \text{ for every nonzero prime }\mathfrak p\notin S\,\},$$

and the **group of $S$-units** is

$$\mathcal O_{K,S}^{\times}=\{\,x\in K^{\times}: v_{\mathfrak p}(x)=0 \text{ for every nonzero prime }\mathfrak p\notin S\,\}$$

with the group structure inherited from $K^{\times}$
([[lem-ring-units-form-a-group]]).

**No infinite place belongs to $S$.** Only nonzero prime ideals, that is finite
places, are admitted into $S$; a real or complex place is never a member. The
archimedean places are already carried by the logarithmic embedding, so
admitting them into $S$ would count them twice. Consequently the rank formula of
the $S$-unit theorem is $r_1+r_2-1+|S|$, with $|S|$ the number of finite primes
chosen.

**The description via the fractional ideal is the one used below.**
$\mathcal O_{K,S}$ consists of $0$ and the nonzero elements of $K$ whose
principal fractional ideal involves no prime outside $S$ in a denominator, and an element $x$ of
$\mathcal O_{K,S}^{\times}$ is precisely an element of $K^{\times}$ whose
principal fractional ideal involves no prime outside $S$ at all, in numerator
or denominator. This intrinsic description, and not a localisation, is the one
the S-unit theorem consumes; it also makes visible why $S$ is a set of finite
primes only.

## Well-definedness

Put $R=\mathcal O_K$. By
[[thm-clearing-denominators-for-an-algebraic-number]], every $x\in K$ has
$mx\in R$ for a positive integer $m$, so $K=\operatorname{Frac}(R)$.
For $x\ne0$, $(x)=xR$ is consequently a nonzero fractional ideal: it is an
$R$-submodule of $K$ and $m(x)\subseteq R$.

The Dedekind property can also be established without Choice. By
[[thm-ring-of-integers-free-of-rank-degree]], $R\cong\mathbb Z^n$ additively,
where $n=[K:\mathbb Q]\ge1$. Every subgroup of $\mathbb Z^n$ has a finite
integer basis (the finite induction in that theorem, steps 1.2, 2.3 and 3.2).
Thus every ideal of $R$ is finitely generated over $R$, so $R$ is Noetherian.
It is an integrally closed domain by
[[thm-integral-closure-is-integrally-closed]]. For every nonzero prime
$\mathfrak p$, $R/\mathfrak p$ is a finite domain by
[[lem-nonzero-number-field-ideal-has-finite-quotient]], hence a field: multiplication
by any nonzero element is injective on this finite set and therefore surjective.
Thus every nonzero prime is maximal. Moreover $R/2R$ has $2^n>1$ elements;
among its proper ideals one of largest cardinality is maximal, and its inverse
image is a nonzero prime of $R$. Together with the prime $(0)$ this proves
$\dim R=1$, so $R$ is Dedekind ([[def-dedekind-domain]]).

To justify the local valuation without the Choice-qualified general
invertibility theorem, use the local calculation in
[[thm-number-field-integral-ideal-factorisation-in-zf]], steps 2.1--6.1,
with the nonzero integral ideal $\mathfrak a=\mathfrak p$.
It proves that $R_{\mathfrak p}$ has maximal ideal $(\pi)$ and each nonzero
element is uniquely $u\pi^k$, with $u$ a unit and $k\ge0$. Its fraction field
is $K$, so each $x\in K^\times$ is uniquely $u\pi^j$ with $j\in\mathbb Z$.
Hence $(x)_{\mathfrak p}=\pi^jR_{\mathfrak p}$, exactly the valuation used
in the Definition. Changing $\pi$ by a unit does not change $j$.
Multiplication adds these exponents, inversion negates them, and
$v_{\mathfrak p}(x)\ge0$ is equivalent to $x\in R_{\mathfrak p}$.
Consequently $\mathcal O_{K,S}$ is the intersection of these local subrings
over $\mathfrak p\notin S$, and $x$ is a unit of that intersection precisely
when both $x$ and $x^{-1}$ belong to it, equivalently all those exponents vanish.
This verifies the ring and group assertions without selecting uniformizers
simultaneously; the construction uses no Choice.
