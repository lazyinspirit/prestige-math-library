---
id: lem-gts-formal-lagrange-inversion-for-period-maps
kind: lemma
title: Formal Lagrange inversion identities for period coordinates
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
category: string-theory
proof_strategy: direct
deps: []
dependency_roles: {}
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Per Berglund, Tim Gräfnitz, and Michael Lathwood, Gromov-Witten Invariants and Mirror Symmetry for Non-Fano Varieties via Tropical Disks
      url: https://arxiv.org/pdf/2404.16782v3
      locator: §10, Lemmas 10.3 and 10.5; the present proof gives the coefficient argument locally
---

## Statement

Let $A$ be a commutative $\mathbb Q$-algebra and let $f(x)\in1+xA\llbracket x\rrbracket$. There is a unique $u(z)\in zA\llbracket z\rrbracket$ satisfying $u=z f(u)$. For every $n\ge1$,
$$[z^n]u(z)=\frac1n[x^{n-1}]f(x)^n,\qquad [z^n]\log\!\left(\frac{u(z)}z\right)=\frac1n[x^n]f(x)^n.$$
Consequently,
$$\exp\!\left(\sum_{n\ge1}\frac1n[x^n]f(x)^n z^n\right)=\frac{u(z)}z=\sum_{n\ge1}\frac1n[x^{n-1}]f(x)^n z^{n-1}.$$
Here $[x^j]$ means coefficient extraction in a formal power series over $A$.

## Statement references

Per Berglund, Tim Gräfnitz, and Michael Lathwood, §10, Lemma 10.5.

## Facts & Assumptions

**Given:** The formal power series ring $A\llbracket x\rrbracket$ over a commutative $\mathbb Q$-algebra $A$ and coefficient extraction $[x^j]$.

[A1] $f(0)=1$, so $f$ has a formal multiplicative inverse and $\log f$ is defined by its formal expansion over $A$.

## Proof

1.1 Put $w(x)=x/f(x)=x+O(x^2)$. Writing $u(z)=\sum_{n\ge1}u_nz^n$, the coefficient of $z^n$ in $w(u(z))$ is $u_n$ plus a polynomial in $u_1,\ldots,u_{n-1}$. Hence the equations $w(u(z))=z$ determine $u_n$ successively and uniquely, starting with $u_1=1$. The same coefficient recursion gives $u(w(x))=x$. Since $w(u)=u/f(u)=z$, this inverse satisfies $u=zf(u)$; conversely that equation implies $w(u)=z$. [A1, algebra]

2.1 For a Laurent series $G(x)$ with finitely many negative powers, define $\operatorname{Res}_x G(x)\,dx=[x^{-1}]G(x)$. If $w(x)=x+O(x^2)$, then $\operatorname{Res}_z H(z)\,dz=\operatorname{Res}_x H(w(x))w'(x)\,dx$: it suffices to check $H(z)=z^j$; for $j\ne-1$ the substituted expression is a formal derivative, and for $j=-1$, $w'/w=x^{-1}+(\log(w/x))'$ has residue $1$. Applying this change of variable and $w=x/f(x)$ gives, for any $F(x)\in A\llbracket x\rrbracket$ and $n\ge1$,
$$[z^n]F(u(z))=\operatorname{Res}_x F(x)x^{-n-1}f(x)^{n-1}(f(x)-xf'(x))\,dx.$$
The residue of $(F(x)f(x)^nx^{-n})'$ is zero. Expanding that derivative and rearranging the three resulting terms yields
$$\operatorname{Res}_x F(x)x^{-n-1}f(x)^{n-1}(f(x)-xf'(x))\,dx=\frac1n[x^{n-1}]F'(x)f(x)^n.$$
Therefore $[z^n]F(u(z))=\frac1n[x^{n-1}]F'(x)f(x)^n$. [A1, algebra, step 1.1]

3.1 Taking $F(x)=x$ in step 2.1 gives the first coefficient formula and hence $u(z)/z=\sum_{n\ge1}\frac1n[x^{n-1}]f(x)^nz^{n-1}$. Taking $F(x)=\log f(x)$, whose derivative is $f'(x)/f(x)$ by [A1], gives
$$[z^n]\log f(u(z))=\frac1n[x^{n-1}]f(x)^{n-1}f'(x)=\frac1n[x^n]f(x)^n,$$
where the last equality follows by differentiating $f(x)^n$. Since $u/z=f(u)$, exponentiating the coefficient identity proves the remaining equality. [A1, step 2.1, algebra] ∎

## Remarks

The proof is formal and coefficientwise; it asserts no analytic convergence. The commutative $\mathbb Q$-algebra hypothesis supplies division by every positive integer.
