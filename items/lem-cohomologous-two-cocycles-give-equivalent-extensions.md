---
id: lem-cohomologous-two-cocycles-give-equivalent-extensions
kind: lemma
title: "Cohomologous two-cocycles give equivalent extensions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-changing-the-section-changes-the-factor-set-by-a-coboundary, def-twisted-product-extension-from-a-two-cocycle, lem-twisted-product-is-a-group-iff-the-factor-set-is-a-two-cocycle, def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient]
proof_strategy: iff
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Statement

Let $f$ and $f'$ be normalized two-cocycles. Then the twisted products
$M\times_f G$ and $M\times_{f'} G$ are equivalent extensions with fixed kernel
and quotient if and only if $f'-f$ is a two-coboundary.

## Facts & Assumptions

**Given:** Normalized two-cocycles $f,f':G\times G\to M$.

[L1] A twisted product is a group exactly when its factor set is a normalized two-cocycle ([[lem-twisted-product-is-a-group-iff-the-factor-set-is-a-two-cocycle]]).

[F1] The twisted-product extension and its kernel and quotient maps are defined in [[def-twisted-product-extension-from-a-two-cocycle]].

[F2] Extension equivalence fixes the chosen kernel and quotient maps ([[def-equivalence-of-group-extensions-with-fixed-kernel-and-quotient]]).

[L2] Changing a section changes the factor set by a coboundary ([[lem-changing-the-section-changes-the-factor-set-by-a-coboundary]]).

## Proof

**Proof technique:** iff.

1.1 Suppose $f'=f+\delta u$. Define $\Phi:M\times_f G\to M\times_{f'} G$ by $\Phi(m,g)=(m-u(g),g)$. Using the product formulas from [F1], the identity $f'=f+\delta u$, and [L1], one checks directly that $$ \Phi\bigl((m,g)(n,h)\bigr)=\Phi(m,g)\Phi(n,h). $$ The inverse is $(m,g)\mapsto(m+u(g),g)$, so $\Phi$ is a group isomorphism. It fixes the kernel and quotient maps, so [F2] makes the two extensions equivalent. [L1, F1, F2, given, algebra]

1.2 Conversely, suppose $\Phi:M\times_f G\to M\times_{f'} G$ is an extension equivalence. Because [F2] fixes quotient and kernel, $\Phi$ has the form $\Phi(m,g)=(m+u(g),g)$ for a unique normalized one-cochain $u$. Comparing the image of $(0,g)(0,h)$ under $\Phi$ with the product of the images gives $$ f'(g,h)=f(g,h)-g\cdot u(h)+u(gh)-u(g)=f(g,h)+(\delta(-u))(g,h). $$ So $f'-f$ is a coboundary. [F1, F2, L2, given, algebra]

2.1 Step 1.1 proves the forward implication and step 1.2 proves the reverse implication. [step 1.1, step 1.2] ∎
