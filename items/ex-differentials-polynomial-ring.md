---
id: "ex-differentials-polynomial-ring"
kind: "example"
title: "Differentials of k[x,y]"
status: draft
origin: "pipeline"
pipeline_run: frontier-35-ten-categories
deps: ["lem-differentials-polynomial-algebra-free", "def-derivation-algebra"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Stacks Algebra 10.131.14"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "Vakil 22.2.3, p.575"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Example

Let $k$ be a commutative ring and let $P=k[x,y]$ be the polynomial algebra on
the two indeterminates $x,y$. Then
$$\Omega_{P/k}=P\,\mathrm dx\oplus P\,\mathrm dy,$$
the free $P$-module on the two differentials, and for all integers $a,b\ge0$
$$\mathrm d\bigl(x^{a}y^{b}\bigr) =a\,x^{a-1}y^{b}\,\mathrm dx+b\,x^{a}y^{b-1}\,\mathrm dy,$$
where the integer coefficients $a$ and $b$ are read in $k$ through the ring map
$\mathbb Z\to k$, and where a term with exponent $0$ is read as $0$ (for $a=0$
the $x$-term is $0$, and for $b=0$ the $y$-term is $0$). Since $k$ need not
have characteristic $0$, an integer coefficient can vanish: if $k$ has
characteristic $p$ and $p\mid a$, the class $a\in k$ is $0$ and the
$\mathrm dx$-coefficient of $\mathrm d(x^{a})$ vanishes.

## Facts & Assumptions

**Given:** A commutative ring $k$, the polynomial algebra $P=k[x,y]$ over $k$, the derivations $\partial/\partial x$ and $\partial/\partial y$ of $P$ that are $k$-linear, and the integers $a,b\ge0$.

[F1] [[lem-differentials-polynomial-algebra-free]] with $n=2$: $\Omega_{P/k}$ is a free $P$-module with basis $\mathrm dx,\mathrm dy$; the derivations $\partial/\partial x,\partial/\partial y$ satisfy $\partial x/\partial x=1$, $\partial y/\partial x=0$, $\partial x/\partial y=0$, $\partial y/\partial y=1$; and for every $f\in P$ one has $\mathrm df=(\partial f/\partial x)\,\mathrm dx+(\partial f/\partial y)\,\mathrm dy$.

[F2] [[def-derivation-algebra]]: a $k$-derivation $D\colon P\to M$ into a $P$-module $M$ is additive, satisfies the Leibniz rule $D(fg)=fD(g)+gD(f)$, and annihilates $k$, that is $D(c)=0$ for every $c\in k$; in particular $D(1)=0$.

## Verification

1.1 By [F1] the module $\Omega_{P/k}$ is free with basis $\mathrm dx,\mathrm dy$ over $P$, and $\mathrm df=(\partial f/\partial x)\mathrm dx+(\partial f/\partial y)\mathrm dy$ for every $f\in P$. [F1, given]

1.2 We compute the partial derivatives of the powers of the variables: $\partial(x^{n})/\partial x=n\,x^{n-1}$ for every $n\ge0$, where the case $n=0$ reads $\partial(1)/\partial x=0$, and $\partial(y^{m})/\partial x=0$ for every $m\ge0$. Indeed, $\partial(1)/\partial x=0$ because $1\in k$ is annihilated by a $k$-derivation [F2], and if $\partial(x^{n-1})/\partial x=(n-1)x^{n-2}$ then the Leibniz rule [F2] and $\partial x/\partial x=1$ [F1] give $\partial(x^{n})/\partial x=\partial(x\cdot x^{n-1})/\partial x=x^{n-1}+x\,(n-1)x^{n-2}=n\,x^{n-1}$; the same induction with $\partial y/\partial x=0$ gives $\partial(y^{m})/\partial x=0$. Interchanging the roles of $x$ and $y$ gives $\partial(x^{n})/\partial y=0$ and $\partial(y^{m})/\partial y=m\,y^{m-1}$. [F1, F2, induction]

2.1 Multiplying out with the Leibniz rule: $\partial(x^{a}y^{b})/\partial x=y^{b}\,\partial(x^{a})/\partial x+x^{a}\,\partial(y^{b})/\partial x=a\,x^{a-1}y^{b}$, the term being $0$ when $a=0$, and likewise $\partial(x^{a}y^{b})/\partial y=x^{a}\,\partial(y^{b})/\partial y=b\,x^{a}y^{b-1}$, the term being $0$ when $b=0$. [step 1.2, F2]

3.1 Substituting step 2.1 into the formula of step 1.1 gives $\mathrm d(x^{a}y^{b})=a\,x^{a-1}y^{b}\,\mathrm dx+b\,x^{a}y^{b-1}\,\mathrm dy$ for all $a,b\ge0$, with the integer coefficients evaluated in $k$: if $k$ has characteristic $p$ and $p\mid a$, then $a=0$ in $k$ and the $\mathrm dx$-term vanishes, while the class $x^{a-1}y^{b}$ remains meaningful for $a\ge1$ and the case $a=0$ is handled as $0$. Since $\mathrm dx,\mathrm dy$ form a basis of the free module $\Omega_{P/k}$, the formula determines $\mathrm d$ on every monomial and, by additivity and $k$-linearity of the universal derivation, on all of $P$; in particular $\mathrm dx$ and $\mathrm dy$ are $k$-linearly independent elements of $\Omega_{P/k}$. [step 1.1, step 2.1] ∎
