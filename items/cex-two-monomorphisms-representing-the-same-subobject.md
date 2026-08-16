---
id: cex-two-monomorphisms-representing-the-same-subobject
kind: counterexample
title: "Two different monomorphisms can represent the same subobject"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
  truth_risk: "The monomorphisms must be literally distinct yet mutually factor."
  counterexample_search: "Used singleton domains with different underlying elements and wrote both inverse factorisations explicitly."
deps: [def-subobject-and-quotient-object, thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Counterexample

Into $X=\{0,1\}$, the maps $m:\{0\}\to X$, $m(0)=0$, and
$n:\{*\}\to X$, $n(*)=0$, are distinct monomorphisms representing the same
subobject.

## Facts & Assumptions

**Given:** The displayed maps in $\mathbf{Set}$.

[L1] Subobjects are equivalence classes of monomorphisms under mutual factorisation ([[def-subobject-and-quotient-object]]).

[L2] The factor maps between mutually factoring monomorphisms are unique inverse isomorphisms ([[thm-mutual-factorisation-defines-subobject-and-quotient-object-equivalence]]).

## Verification

**Proof technique:** direct.

1.1 Both $m$ and $n$ are injective, and an injection $f$ in $\mathbf{Set}$ is monic: $f\circ g=f\circ h$ gives $f(g(x))=f(h(x))$ for every $x$, hence $g(x)=h(x)$ and $g=h$. They are not the same map, since their domains $\{0\}$ and $\{*\}$ are distinct. [given]

2.1 Let $u:\{0\}\to\{*\}$ and $v:\{*\}\to\{0\}$ be the unique maps. Then $m=n\circ u$ and $n=m\circ v$, so the monomorphisms mutually factor; [L2] also identifies $u$ and $v$ as inverse isomorphisms. [step 1.1, L2]

3.1 By [L1], $[m]=[n]$ even though $m\ne n$. [step 2.1, L1] ∎
