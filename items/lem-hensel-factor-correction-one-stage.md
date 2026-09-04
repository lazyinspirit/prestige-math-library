---
id: lem-hensel-factor-correction-one-stage
kind: lemma
title: "One correction step raises factor lifting by one ideal power"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-coprime-factor-bezout-lift, lem-hensel-factor-lift-leading-coefficient-normalisation]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Chapter 22"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "Melvin Hochster, The structure theory of complete local rings"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Structure.pdf"
pipeline_run: null
---

## Statement

Let $A$ be a commutative ring, let $I \subseteq A$ be an ideal, let
$f,g,h \in A[T]$ with $f$ monic and $g,h$ monic of degrees $m,n$, and let
$r \ge 1$. Assume:

1. $\deg f=m+n$,
2. $f-gh \in I^r[T]$, and
3. there exist $a,b \in A[T]$ with $ag+bh \equiv 1 \pmod I$.

Then there exist $u,v \in I^r[T]$ with $\deg u < m$ and $\deg v < n$ such that
for $g'=g+u$ and $h'=h+v$ one has
$$f-g'h' \in I^{r+1}[T].$$

## Facts & Assumptions

**Given:** A commutative ring $A$, an ideal $I$, monic polynomials $f,g,h$ as
above, an integer $r \ge 1$, an error term $e=f-gh \in I^r[T]$, and a lifted
Bezout relation $ag+bh \equiv 1 \pmod I$, with $\deg f=m+n$.

[L1] A coprime residue factorization admits such a lifted Bezout identity
modulo $I$ ([[lem-coprime-factor-bezout-lift]]).

[L2] Corrections of degrees $<m$ and $<n$ preserve the monicity and degrees of
the factors ([[lem-hensel-factor-lift-leading-coefficient-normalisation]]).

## Proof

**Proof technique:** solve the linearized correction equation modulo $I^{r+1}$.

1.1 Put $M=I^r/I^{r+1}$, viewed as an $A/I$-module, and write $\varepsilon\in M[T]$ for the class of $e=f-gh$. Since $f$ and $gh$ are monic of the same degree $m+n$, one has $\deg\varepsilon<m+n$. Multiplying $ag+bh\equiv1\pmod I$ by $\varepsilon$ gives $$\varepsilon=(a\varepsilon)g+(b\varepsilon)h\quad\text{in }M[T].$$ [L1, given, algebra]

2.1 Divide $b\varepsilon\in M[T]$ by the monic polynomial $g$ to write $$b\varepsilon=qg+\bar u,\qquad \deg\bar u<m.$$ Substitution in step 1.1 gives $$\varepsilon=\bar u h+\bar v g,\qquad \bar v:=a\varepsilon+qh.$$ The polynomial $\varepsilon-\bar u h=\bar v g$ has degree less than $m+n$; because $g$ is monic of degree $m$, this forces $\deg\bar v<n$. Lift $\bar u,\bar v$ coefficientwise to polynomials $u,v\in I^r[T]$ with the same degree bounds. [step 1.1, choose, algebra]

3.1 Set $g'=g+u$ and $h'=h+v$. Then $$g'h'=gh+uh+vg+uv.$$ By step 2.1, the first three terms agree with $f$ modulo $I^{r+1}$, while $uv \in I^{2r}[T] \subseteq I^{r+1}[T]$ because $r \ge 1$. Hence $f-g'h' \in I^{r+1}[T]$. By [L2], $g'$ and $h'$ remain monic of degrees $m,n$. [L2, step 2.1, given, algebra]

4.1 Therefore one Hensel correction step improves a lift modulo $I^r$ to a lift modulo $I^{r+1}$ without changing the prescribed degrees. [step 3.1] ∎
