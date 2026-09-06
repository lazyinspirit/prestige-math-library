---
id: ex-ext-one-of-z-mod-n-by-an-abelian-group-as-extension-classes
kind: example
title: "Ext one of Z modulo n by an abelian group as extension classes"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
deps: [lem-ext-one-of-z-mod-n-by-z-is-z-mod-n, thm-yoneda-ext-one-is-naturally-isomorphic-to-derived-ext-one]
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapters 3–4"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
pipeline_run: frontier-31a
---
## Example

Combine the cyclic Ext calculation with the Yoneda Ext-one theorem to interpret A/nA as equivalence classes of extensions of Z/n by A.

## Facts & Assumptions

**Given:** An abelian group $A$, $n\ge2$, and an element $a\in A$.

## Verification

**Proof technique:** direct.

1.1 Put $E_a=(A\oplus\mathbb Z)/\langle(a,-n)\rangle$. The maps $A\to E_a$, $x\mapsto[(x,0)]$, and $E_a\to\mathbb Z/n\mathbb Z$, $[(x,k)]\mapsto[k]$, give an exact sequence $0\to A\to E_a\to\mathbb Z/n\mathbb Z\to0$. [given, construct]

2.1 Replacing $a$ by $a+nb$ gives an equivalent extension by changing the lift of $1\bmod n$ by the image of $b\in A$. Conversely the connecting class is the residue of $a$ modulo $nA$. Thus the derived/Yoneda correspondence identifies $A/nA$ with these extension classes. [step 1.1, algebra] ∎
