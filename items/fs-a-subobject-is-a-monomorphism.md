---
id: fs-a-subobject-is-a-monomorphism
kind: false-statement
title: "FALSE: A subobject is a monomorphism rather than an equivalence class of representatives"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-subobject-and-quotient-object, thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence]
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, definition 4.7.5"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

**False claim.** A subobject of an object $C$ is an individual monomorphism
into $C$, rather than an equivalence class of monomorphisms under mutual
factorisation.

## Facts & Assumptions

**Given:** The set $X=\{0,1\}$ and singleton sets $A=\{0\}$ and
$B=\{*\}$.

[L1] A subobject is an equivalence class of monomorphisms into a fixed object under mutual factorisation ([[def-subobject-and-quotient-object]]).

[L2] Mutually factoring monomorphisms have unique inverse factor maps and represent the same subobject ([[thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence]]).

## Refutation

**Proof technique:** counterexample.

1.1 Let $m:A\to X$ send $0$ to $0$, and let $n:B\to X$ send $*$ to $0$. Both maps are injective, and an injection $f$ in $\mathbf{Set}$ is monic: if $f\circ g=f\circ h$ then $f(g(x))=f(h(x))$ for every $x$, so $g(x)=h(x)$ by injectivity and $g=h$. They are nonetheless different morphisms, because their domains differ. [given]

2.1 The unique bijections $u:A\to B$ and $v:B\to A$ satisfy $m=n\circ u$ and $n=m\circ v$. Thus $m$ and $n$ mutually factor and [L2] makes their factor maps inverse isomorphisms. [step 1.1, L2]

3.1 Consequently the two different monomorphisms determine one equivalence class $[m]=[n]$, which is the subobject prescribed by [L1]. The individual monomorphisms are representatives, not the subobject itself. [step 2.1, L1] ∎
