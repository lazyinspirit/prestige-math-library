---
id: ex-nondiscrete-ordered-subgroup-valuation
kind: example
title: "A nondiscrete rank-one valuation from incommensurate values"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-totally-ordered-abelian-group, def-valuation-on-a-field, def-valuation-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Example (26.12)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "M. Mustata, Commutative Algebra, Examples 8.11-8.12"
      url: "https://websites.umich.edu/~mmustata/CAnotes.pdf"
pipeline_run: null
---

## Example

Let $\Gamma=\mathbb Z+\mathbb Z\sqrt2\subset\mathbb R$ with the usual order.
There is a valuation on a field with value group $\Gamma$. The associated
valuation ring has rank one but is not discrete.

## Facts & Assumptions

**Given:** A field $k$ and the ordered subgroup $\Gamma=\mathbb Z+\mathbb Z\sqrt2\subset\mathbb R$.

[F1] A totally ordered abelian group has a translation-invariant total order ([[def-totally-ordered-abelian-group]]).

[F2] A valuation is a map to a totally ordered abelian group adjoined with $\infty$ satisfying the valuation laws ([[def-valuation-on-a-field]]).

[F3] A valuation ring is the nonnegative locus of such a valuation ([[def-valuation-ring]]).

## Verification

**Proof technique:** direct.

1.1 As in the previous example, form the group algebra $k[t^\Gamma]$ and its fraction field $K$. For a nonzero finite sum $f=\sum_{\gamma\in\Gamma} a_\gamma t^\gamma$, let $v(f)$ be the least element of its support. The same minimum-support argument as before gives $v(fg)=v(f)+v(g)$ and $v(f+g)\ge\min\{v(f),v(g)\}$, so extending by $v(f/g)=v(f)-v(g)$ and $v(0)=\infty$ yields a valuation on $K$ with value group $\Gamma$. Its nonnegative locus is therefore a valuation ring. [F1, F2, F3, given, algebra]

2.1 The ordered group $\Gamma$ has no least positive element. Indeed, $0<\sqrt2-1<1$, so any least positive element $\varepsilon$ would satisfy $0<\varepsilon<1$. Choose $n=\lceil1/\varepsilon\rceil$, so $n>1$ and $0\le n\varepsilon-1<\varepsilon$. Equality $n\varepsilon-1=0$ would give $\varepsilon=1/n$. But $1/n$ cannot lie in $\Gamma$: if $1/n=a+b\sqrt2$ with $a,b\in\mathbb Z$, then $nb\sqrt2=1-na$ is rational, so $b=0$ and then $na=1$, impossible for $n>1$. Thus $0<n\varepsilon-1<\varepsilon$, contradicting minimality. Hence the valuation is not discrete. [step 1.1, algebra] ∎
