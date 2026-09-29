---
id: lem-flat-morphisms-stable-composition
kind: lemma
title: "Flatness is stable under composition"
status: draft
origin: pipeline
deps:
  - def-flat-morphism-schemes
  - lem-flatness-affine-local-source-target
  - prop-transitivity-of-flatness-under-change-of-rings
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
    - title: "The Stacks Project, Morphisms of Schemes, Sections 29.25-29.26"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapters 25-26"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Let $f:Y\to S$ and $g:X\to Y$ be flat morphisms of schemes. Then the
composite $f\circ g:X\to S$ is flat. If $f$ and $g$ are flat at $g(x)$ and $x$
respectively, then $f\circ g$ is flat at $x$; the empty-source and identity
cases are covered.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] $f$ is flat at $x$ when the local ring map $\mathcal O_{S,f(x)}\to\mathcal O_{X,x}$ makes $\mathcal O_{X,x}$ flat over $\mathcal O_{S,f(x)}$, and flat when this holds everywhere ([[def-flat-morphism-schemes]]).

[F2] Let $f:X\to S$, $U=\operatorname{Spec}B\subseteq X$ and $V=\operatorname{Spec}A\subseteq S$ be affine with $f(U)\subseteq V$. Then $f$ is flat at $x\in U$ if and only if $B_{\mathfrak q}$ is flat over $A_{\mathfrak p}$ with $\mathfrak q$ the prime of $x$ and $\mathfrak p=\mathfrak q\cap A$ ([[lem-flatness-affine-local-source-target]]).

[F3] Let $R\to S$ be a flat ring map. If $N$ is a flat $S$-module, then $N$, viewed as an $R$-module, is flat over $R$; consequently a composite of flat ring homomorphisms is flat ([[prop-transitivity-of-flatness-under-change-of-rings]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in X$ and put $y=g(x)$, $s=f(y)$. Choose an affine open $U=\operatorname{Spec}A\subseteq S$ containing $s$; then $f^{-1}(U)$ is an open neighbourhood of $y$, so choose an affine open $V=\operatorname{Spec}B\subseteq f^{-1}(U)$ containing $y$; then $g^{-1}(V)$ is an open neighbourhood of $x$, so choose an affine open $W=\operatorname{Spec}C\subseteq g^{-1}(V)$ containing $x$. The charts give ring maps $A\to B\to C$ with $f(W)\subseteq V\subseteq U$. [F2]

2.1 Let $\mathfrak n$ be the prime of $W$ defining $x$, $\mathfrak m=\mathfrak n\cap B$ the prime of $V$ defining $y$, and $\mathfrak p=\mathfrak m\cap A$ the prime of $U$ defining $s$. Since $g$ is flat at $x$, [F2] gives $C_{\mathfrak n}$ flat over $B_{\mathfrak m}$; since $f$ is flat at $y$, [F2] gives $B_{\mathfrak m}$ flat over $A_{\mathfrak p}$. The localisation $C_{\mathfrak n}$ is also the localisation of the $B_{\mathfrak m}$-module $C\otimes_BB_{\mathfrak m}$ at $\mathfrak n$, so it is a flat $B_{\mathfrak m}$-module, and [F3] applied to the composite of flat ring maps $A_{\mathfrak p}\to B_{\mathfrak m}\to C_{\mathfrak n}$ makes $C_{\mathfrak n}$ flat over $A_{\mathfrak p}$. [F2, F3, step 1.1]

3.1 The affine charts $W=\operatorname{Spec}C$ over $U=\operatorname{Spec}A$ satisfy $(f\circ g)(W)\subseteq U$, and step 2.1 exhibits flatness of $C_{\mathfrak n}$ over $A_{\mathfrak p}$, so [F2] gives that $f\circ g$ is flat at the arbitrary point $x$. By [F1] the composite $f\circ g$ is flat. [F1, F2, step 2.1]

4.1 Degenerate cases are consistent: if $X$ is empty the composite has empty source and is flat vacuously; if $f$ or $g$ has empty source the pointwise hypotheses are vacuous; if both are identities the composite is the identity, and step 2.1 reads that $A_{\mathfrak p}$ is flat over itself. The argument makes no choice principle available or necessary, fixing one point and one nested chain of charts at a time. [F1, F2, step 2.1] $\square$
