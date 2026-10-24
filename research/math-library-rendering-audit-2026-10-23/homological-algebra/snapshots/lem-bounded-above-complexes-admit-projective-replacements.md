---
id: "lem-bounded-above-complexes-admit-projective-replacements"
kind: "lemma"
title: "Bounded above complexes admit projective replacements"
deps: ["lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology", "def-a-category-with-enough-projectives-and-with-enough-injectives", "thm-the-pullback-of-an-epimorphism-is-an-epimorphism", "def-dependent-choice"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://stacks.math.columbia.edu/tag/05T7"
      title: "Lemma 13.15.4, full descending induction"
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

If $\mathcal A$ has enough projectives and $X^n=0$ for $n>b$, there is a termwise epic quasi-isomorphism $p:P\to X$ with each $P^n$ projective and $P^n=0$ for $n>b$. Assume DC for the successive objectwise choices, or supply the successive projective epimorphisms. If only $H^n(X)=0$ for $n>b$, a quasi-isomorphism with this upper bound still exists, without the termwise-epic assertion.

## Facts & Assumptions

**Given:** If $\mathcal A$ has enough projectives and $X^n=0$ for $n>b$, there is a termwise epic quasi-isomorphism $p:P\to X$ with each $P^n$ projective and $P^n=0$ for $n>b$. Assume DC for the successive objectwise choices, or supply the successive projective epimorphisms. If only $H^n(X)=0$ for $n>b$, a quasi-isomorphism with this upper bound still exists, without the termwise-epic assertion.

[F1] Enough projectives means every object is a quotient of a projective ([[def-a-category-with-enough-projectives-and-with-enough-injectives]]).

[F2] The pullback of an epimorphism in an abelian category is an epimorphism ([[thm-the-pullback-of-an-epimorphism-is-an-epimorphism]]).

[F3] DC supplies successive choices for an entire relation on a nonempty set ([[def-dependent-choice]]).

[F4] Upper canonical truncation preserves cohomology through its cut and kills higher cohomology ([[lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology]]).

## Proof

1.1 Start with $P^j=0$ for $j>b$; this includes $X=0$. At stage $n$ maintain the complex and map in degrees $j\geq n$, epic terms, an epimorphism $Z^n(P)\to Z^n(X)$, and cohomology isomorphisms above $n$. The initial stage $n=b+1$ has these properties. [given, algebra]

2.1 Form $E=X^{n-1}\times_{Z^n(X)}Z^n(P)$, where $X^{n-1}\to Z^n(X)$ is its differential. Choose a projective epimorphism $P^{n-1}\twoheadrightarrow E$. Its two components define $p^{n-1}$ and $d_P^{n-1}$, giving $p^nd_P^{n-1}=d_X^{n-1}p^{n-1}$ and $d_P^nd_P^{n-1}=0$. The projection $E\to X^{n-1}$ is epic by pullback stability, hence so is $p^{n-1}$. [F1, F2, step 1.1]

3.1 The subobject of $E$ with second coordinate zero is $Z^{n-1}(X)$; its inverse image in $P^{n-1}$ is exactly $Z^{n-1}(P)$. Pullback stability therefore makes the map on cycles epic. Moreover the image of $d_P^{n-1}$ is precisely the inverse image of $B^n(X)$ inside $Z^n(P)$: this follows by pulling the epimorphism $X^{n-1}\to B^n(X)$ back along $Z^n(P)\to Z^n(X)$. Consequently $H^n(P)\to H^n(X)$ is an isomorphism. Higher degrees stay fixed. [F2, step 2.1, algebra]

4.1 These stages have extensions at every step. For a definable class of possible object choices, first make a set of admissible partial constructions: starting with the initial node, bound ranks of extensions of each node by the least rank with an extension, use Replacement to bound these ranks over each set of nodes, and take all extensions within that bound. The union over the countably many stages is a set with an entire extension relation. DC gives a branch, or supplied epimorphisms give it directly. Every degree stabilizes after finitely many stages and step 3.1 proves that the resulting map is a quasi-isomorphism. This is objectwise existence, not a class-indexed replacement assignment. [F3, step 2.1, step 3.1]

5.1 Under a cohomological upper bound, first replace $X$ by $\tau^{\leq b}X$. Its natural map to $X$ is a quasi-isomorphism; compose with the construction above. The kernel term at the cut explains why the composite need not be epic onto $X^b$. [F4, step 4.1] ∎
