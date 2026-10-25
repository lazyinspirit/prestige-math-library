---
id: "ex-dvrs-as-regular-local-rings"
kind: "example"
title: "dvrs as regular local rings"
deps: ["def-discrete-valuation-ring", "def-discrete-valuation", "def-valuation-on-a-field", "def-uniformising-parameter", "def-embedding-dimension-and-regular-local-ring", "def-regular-system-of-parameters", "def-associated-graded-ring-and-module"]
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Example 12.10, p.116"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
provenance:
  statement: ai-generated
  proof: ai-altered
status: published
origin: "pipeline"
generation:
  role: example
proof_strategy: "Explicit algebraic derivation"
---

## Example

A DVR $R$ with uniformizer $t$ and residue field $k$ is regular local of dimension one, with regular system $(t)$ and $\operatorname{gr}_{(t)}R\cong k[T]$.

## Facts & Assumptions

**Given:** A DVR $R=\{a\in K:v(a)\ge0\}$ in a field $K$, with discrete valuation $v$, uniformizer $t$ of value $1$, and residue field $k$.

[F1] A DVR is the nonnegative-value ring of a surjective integer-valued valuation; $v(ab)=v(a)+v(b)$ and $v(a^{-1})=-v(a)$ for $a\ne0$. A uniformizer has value $1$ ([[def-discrete-valuation-ring]], [[def-discrete-valuation]], [[def-valuation-on-a-field]], [[def-uniformising-parameter]]).

[F2] Regular local means that dimension equals cotangent dimension; a minimal maximal-ideal generating tuple of that length is a regular system of parameters ([[def-embedding-dimension-and-regular-local-ring]], [[def-regular-system-of-parameters]]). The associated graded ring has degree-$n$ piece $(t^n)/(t^{n+1})$ and multiplication induced from $R$ ([[def-associated-graded-ring-and-module]]).

## Verification

1.1 Every nonzero $a\in R$ is $t^{v(a)}u$ with $v(u)=0$, so $u$ is a unit. Thus the nonunits form $(t)$, the unique maximal ideal. In each nonzero ideal, choose an element of least valuation; it divides every element of that ideal and hence generates it. The zero ideal is principal too, so $R$ is Noetherian. A nonzero proper prime contains some $t^nu$ with $n\ge1$, hence contains $t$ and equals $(t)$. Since $R\subseteq K$ is a domain and $(t)\ne0$, its only primes are $(0)$ and $(t)$, giving dimension one. These choices are of one element for a fixed ideal, not of a family. [F1, given, algebra]

2.1 Since $t\notin(t^2)$ by valuation, the map $k=R/(t)\to(t)/(t^2)$ sending $a+(t)$ to $at+(t^2)$ is bijective: surjectivity is immediate, and cancellation proves injectivity. Thus the cotangent dimension is one, $R$ is regular local, and its minimal generating tuple $(t)$ is a regular system of parameters. [F1, F2, step 1.1, algebra]

3.1 For each $n\ge0$, the map $a+(t)\mapsto at^n+(t^{n+1})$ is well-defined and identifies $k$ with $(t^n)/(t^{n+1})$, again by cancellation and principality. Multiplication of these classes agrees with polynomial multiplication. Hence the graded map $k[T]\to\operatorname{gr}_{(t)}R$ sending $T$ to $t+(t^2)$ is an isomorphism in every degree, and therefore an isomorphism of graded rings. No choice principle is used. [F2, step 1.1, step 2.1, algebra] ∎
