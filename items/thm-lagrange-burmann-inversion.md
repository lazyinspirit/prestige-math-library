---
id: thm-lagrange-burmann-inversion
kind: theorem
title: "Lagrange–Bürmann inversion extracts coefficients of a compositional inverse and of functions of it"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-formal-compositional-inverse, lem-formal-residue-identities, prop-coefficient-extraction-linearity-and-extensionality, thm-formal-power-series-unit-criterion, thm-rat-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Benjamin Sambale, An Invitation to Formal Power Series"
      url: "https://link.springer.com/article/10.1365/s13291-022-00256-6"
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
pipeline_run: null
---

## Statement

Let $K$ be a field containing $\mathbb Q$, let $\phi\in K\llbracket u\rrbracket$ have $\phi(0)\ne0$, and let $w\in xK\llbracket x\rrbracket$ be the unique solution of

$$w=x\phi(w).$$

Then for $H\in K\llbracket u\rrbracket$ and $n\ge1$,

$$[x^n]H(w)=\frac1n[u^{n-1}]H'(u)\phi(u)^n.$$

In particular, for $1\le k\le n$,

$$[x^n]w^k=\frac{k}{n}[u^{n-k}]\phi(u)^n,$$

and this coefficient is $0$ when $k>n$.

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[F1] A formal power series is a unit exactly when its constant coefficient is a unit ([[thm-formal-power-series-unit-criterion]]).

[F2] For a commutative ring $R$ and $f\in xR\llbracket x\rrbracket$, there is a unique $g\in xR\llbracket x\rrbracket$ with $f\circ g=x=g\circ f$ exactly when $[x]f$ is a unit ([[thm-formal-compositional-inverse]]).

[F3] Formal residues satisfy integration by parts, and Laurent substitution with nonzero linear term satisfies $\operatorname{res}_x((F\circ g)Dg)=\operatorname{res}_x(F)$ over a field containing $\mathbb Q$ ([[lem-formal-residue-identities]]).

## Proof

**Proof technique:** formal residues.

1.1 Put $\psi(u)=u/\phi(u)$. Its linear coefficient is $\phi(0)^{-1}\ne0$, so it has a unique compositional inverse $w$; the inverse identity $\psi(w)=x$ is exactly $w=x\phi(w)$. [given, F1, F2]

1.2 Coefficient extraction is residue extraction: $[x^n]H(w)=\operatorname{res}_x(H(w)x^{-n-1})$. Change variables $x=\psi(u)$ to obtain $\operatorname{res}_u(H(u)\psi(u)^{-n-1}\psi'(u))$. [given, F3]

2.1 Since $D(\psi^{-n})=-n\psi^{-n-1}\psi'$, integration by parts transforms step 1.2 into $\frac1n\operatorname{res}_u(H'(u)\psi(u)^{-n})$. Substituting $\psi(u)=u/\phi(u)$ gives $\frac1n\operatorname{res}_u(H'(u)u^{-n}\phi(u)^n)=\frac1n[u^{n-1}]H'(u)\phi(u)^n$. [step 1.2, given, F3]

3.1 Taking $H(u)=u^k$ gives the second formula. If $k>n$, the requested exponent $n-k$ is negative while $\phi(u)^n$ is a power series, so the coefficient is $0$; the same vanishing also follows from $\operatorname{ord}_x(w^k)=k>n$. [step 2.1, given]

4.1 Steps 1.1-3.1 prove existence, uniqueness, the general Lagrange–Bürmann formula, and both ranges of the power specialization. [step 1.1, step 2.1, step 3.1] ∎
