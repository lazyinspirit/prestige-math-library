---
id: lem-two-extensions-with-the-same-ext-class-are-equivalent
kind: lemma
title: "Two extensions with the same Ext class are equivalent"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-balanced-ext-bifunctor, def-class-of-an-extension-in-derived-ext-one, lem-equivalent-extensions-have-the-same-ext-class, lem-every-ext-one-class-is-represented-by-an-extension, def-pullback-and-pushout-of-an-extension]
proof_strategy: direct
verification:
  audited: 2026-09-06
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
## Statement

Assume the Axiom of Dependent Choice and the balanced-Ext hypotheses of
[[def-balanced-ext-bifunctor]]. Two extensions of $M$ by $N$ with the same
derived $\operatorname{Ext}^1(M,N)$ class are equivalent.

## Facts & Assumptions

**Given:** Extensions $e,e'$ of $M$ by $N$ whose connecting classes agree.

## Proof

**Proof technique:** direct.

1.1 Choose a projective presentation $0\to\Omega M\xrightarrow{i}P\twoheadrightarrow M\to0$. Projectivity lifts $P\to M$ through the middle epimorphism of each extension. Restricting those lifts to $\Omega M$ gives maps $f,f':\Omega M\to N$. In the cokernel description of $\operatorname{Ext}^1(M,N)$, equality of the two classes says $f-f'=t i$ for some $t:P\to N$. [given, construct]

2.1 Each original extension is equivalent to the pushout of the projective presentation along its map $f$ or $f'$. The relation $f-f'=ti$ induces an isomorphism between these two pushouts, represented on $P\oplus N$ by $(p,n)\mapsto(p,n-t(p))$; it fixes both endpoint maps. Composing the endpoint- identity equivalences proves that $e$ and $e'$ are equivalent. [step 1.1, algebra] ∎
