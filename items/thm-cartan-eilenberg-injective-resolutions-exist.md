---
id: "thm-cartan-eilenberg-injective-resolutions-exist"
kind: "theorem"
title: "Cartan-Eilenberg injective resolutions exist"
deps: ["def-cartan-eilenberg-injective-resolution-of-a-bounded-below-complex", "def-dependent-choice", "thm-enough-injectives-gives-injective-resolutions", "lem-inductive-horseshoe-step", "thm-the-opposite-of-an-abelian-category-is-abelian"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Weibel, Definition 5.7.1 and Lemma 5.7.2, printed pp.145–146; cohomology variant 5.7.9"
      url: "https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf"
    - title: "Sharifi, Theorem 4.3.2"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
landmark: true
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
proof_strategy: "direct"
---

## Statement

A bounded-below complex $K$ in an abelian category with enough injectives has a Cartan–Eilenberg injective resolution relative to supplied compatible successive choices of embeddings and horseshoe lifts. DC supplies these choices in three countable construction passes when the admissible finite data in each pass form a set with the serial extension relations described below. In particular this applies to categories whose objects and arrows are sets in a fixed ambient universe, with DC in that ambient set theory. No global choice of resolutions for all complexes is asserted.

## Facts & Assumptions

**Given:** $K^p=0$ for $p<b$, enough injectives, and either supplied successive choices or DC on the set of admissible construction data.

[F1] The required resolutions concern terms, cycles, boundaries and cohomology, with degreewise split short exact sequences ([[def-cartan-eilenberg-injective-resolution-of-a-bounded-below-complex]]).

[F2] A supplied chain of embeddings of successive cokernels gives an injective resolution ([[thm-enough-injectives-gives-injective-resolutions]]).

[F3] In an abelian category, passing the choice-free one-degree projective horseshoe step to the opposite category reverses it into a one-degree injective horseshoe step: from the current compatible short exact sequence of cokernels and chosen next side injectives it produces the middle biproduct injective term, the compatible maps, and the next short exact sequence of cokernels ([[lem-inductive-horseshoe-step]], [[thm-the-opposite-of-an-abelian-category-is-abelian]]).

[F4] DC gives a chain from a prescribed initial state of a nonempty set with an entire relation ([[def-dependent-choice]]).

## Proof

1.1 Put $B^p=\operatorname{im}d_K^{p-1}$, $Z^p=\ker d_K^p$ and $H^p=Z^p/B^p$. The differential factors as $K^p\twoheadrightarrow B^{p+1}\rightarrowtail Z^{p+1}\rightarrowtail K^{p+1}$. Thus the two exact sequences to resolve are $0\to B^p\to Z^p\to H^p\to0$ and $0\to Z^p\to K^p\to B^{p+1}\to0$. At $p=b$, $B^b=0$. [given, F1]

2.1 Assemble resolutions $U^{p,\bullet}$ of $B^p$ and $V^{p,\bullet}$ of $H^p$ from successive injective embeddings of their cokernels, setting $U^{b,\bullet}=0$; F2 verifies the assembled complexes. For $0\to B^p\to Z^p\to H^p\to0$, successive applications of the dual one-degree step F3 assemble $W^{p,\bullet}$ together with a degreewise split exact sequence $0\to U^{p,\bullet}\to W^{p,\bullet}\to V^{p,\bullet}\to0$. Apply the same step to $0\to Z^p\to K^p\to B^{p+1}\to0$ to assemble $I^{p,\bullet}$ in $0\to W^{p,\bullet}\to I^{p,\bullet}\to U^{p+1,\bullet}\to0$. In the supplied-data branch, all embeddings and compatible next-degree lifts just named are part of the supplied successive choices. In the DC branch, they are selected from the nonempty sets supplied by enough injectives and F3, with the serial accounting given below. [F2, F3, step 1.1]

3.1 Define $h:I^{p,\bullet}\to I^{p+1,\bullet}$ as projection onto $U^{p+1,\bullet}$ followed by inclusion into $W^{p+1,\bullet}$ and then $I^{p+1,\bullet}$. The next projection kills this image, so $h^2=0$. These arrows are cochain maps in the resolution direction, so $hv=vh$. Their kernels, images and cohomology objects in every vertical degree are respectively $W^{p,q}$, $U^{p+1,q}$ and $V^{p,q}$. Their augmentations are exactly the factorizations of $d_K$ in step 1.1. Every required term is injective and the two degreewise sequences split by the horseshoe construction. [F1, F3, step 1.1, step 2.1]

4.1 Here is the countable-choice accounting for steps 2.1–3.1. Use three successive DC applications, each to a set of finite compatible states with an entire extension relation. In the first pass, enumerate the pairs $(p,q)$ with $p\ge b$, $q\ge0$ and construct the side resolutions $U^{p,\bullet}$ and $V^{p,\bullet}$ one embedding at a time. At each task only the preceding vertical cokernel of that same side resolution is needed, so an order by increasing $p-b+q$, with the degree-$q-1$ task first, is serial by enough injectives and F2. The zero resolution $U^{b,\bullet}=0$ needs no selections. In the second pass all side resolutions are now available: enumerate $(p,q)$ again and use F3 successively in $q$ to construct $W^{p,\bullet}$ for $0\to B^p\to Z^p\to H^p\to0$. In the third pass all $W^{p,\bullet}$ and $U^{p+1,\bullet}$ are available: enumerate $(p,q)$ and use F3 successively in $q$ to construct $I^{p,\bullet}$ for $0\to Z^p\to K^p\to B^{p+1}\to0$. In each horseshoe pass, the degree-$q$ side terms are already fixed and the degree-$q-1$ middle cokernel is already constructed, so every finite state has a next extension. A fixed diagonal enumeration of each countable task set reaches every task; the unions of the three DC chains supply exactly the compatible data used in steps 2.1–3.1. Supplied successive choices give the same three passes in ZF. This does not select resolutions simultaneously for a proper class of complexes. [F2, F3, F4, step 2.1, step 3.1]

5.1 Set everything to zero for $p<b$ and $q<0$. Step 3.1 now verifies every clause of the Cartan–Eilenberg definition. For the zero complex one may take all data zero, and for a complex in one degree one may take its ordinary injective resolution in that column. Translating $p$ to $p-b$ yields nonnegative indices without an upper bound on $K$. [F1, step 3.1, step 4.1] ∎
