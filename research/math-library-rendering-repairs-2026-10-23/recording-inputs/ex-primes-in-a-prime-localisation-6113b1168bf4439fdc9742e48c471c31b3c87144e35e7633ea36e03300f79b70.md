---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-primes-in-a-prime-localisation.json
  precheck: pass
id: ex-primes-in-a-prime-localisation
kind: example
title: "Primes inside a localization at a prime"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: literature-derived
generation:
  role: example
deps: [cor-primes-of-a-prime-local-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14 The spectrum of a ring"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 10.17: The spectrum of a ring"
      url: "https://stacks.math.columbia.edu/tag/00DY"
pipeline_run: null
---

## Example

Let $A=k[x,y]$ and let $\mathfrak m=(x,y)$. The prime ideals $(0)$, $(x)$, $(y)$, and $(x+y)$ all lie inside $\mathfrak m$, so they give distinct prime ideals of the localization $A_{\mathfrak m}$.

## Facts & Assumptions

**Given:** A field $k$, the polynomial ring $A=k[x,y]$, and the prime ideal $\mathfrak m=(x,y)$.

[L1] Prime ideals of $A_{\mathfrak m}$ correspond exactly to prime ideals of $A$ contained in $\mathfrak m$ ([[cor-primes-of-a-prime-local-ring]]).

## Verification

**Proof technique:** direct.

1.1 The ideals $(0)$, $(x)$, $(y)$, and $(x+y)$ are prime in $A$, and each is contained in $\mathfrak m$ because their generators lie in $(x,y)$. [given, algebra]

2.1 By [L1], each of these four primes determines a distinct prime ideal of $A_{\mathfrak m}$, and every prime of $A_{\mathfrak m}$ comes from some prime of $A$ contained in $\mathfrak m$. [L1, step 1.1]

3.1 This records a concrete finite family of primes inside the prime localization. [step 2.1] ∎


## Remarks

For the localization map $\iota:A\to A_{\mathfrak m}$, the correspondence in [L1] is $\mathfrak q\mapsto\mathfrak q A_{\mathfrak m}$, with inverse $P\mapsto\iota^{-1}(P)$. The diagram shows the selected primes after extension; upward edges indicate strict ideal inclusion, and transitive inclusions are omitted. It is a finite subposet, not the whole prime spectrum.

```tikz
\begin{tikzpicture}
\node (zero) at (0,0) {$(0)A_{\mathfrak m}$};
\node (x) at (-3,1.6) {$(x)A_{\mathfrak m}$};
\node (y) at (0,1.6) {$(y)A_{\mathfrak m}$};
\node (sum) at (3,1.6) {$(x+y)A_{\mathfrak m}$};
\node (max) at (0,3.2) {$\mathfrak m A_{\mathfrak m}$};
\draw (zero) -- (x);
\draw (zero) -- (y);
\draw (zero) -- (sum);
\draw (x) -- (max);
\draw (y) -- (max);
\draw (sum) -- (max);
\end{tikzpicture}
```

In $A$, the three middle ideals are pairwise incomparable: reducing modulo $(x)$, $(y)$, or $(x+y)$ shows that neither of any two contains the other. Each strictly contains $(0)$ and is strictly contained in $\mathfrak m$. The inclusion-preserving bijection and its inverse preserve these relations after localization. The verification above is independent of this illustration.
