---
id: thm-canonical-ramsey-theorem-for-pairs
kind: theorem
title: "Canonical Ramsey theorem for pairs: on an infinite subset a colouring is constant, injective, left-dependent, or right-dependent"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-infinite-ramsey-on-the-naturals, def-ramsey-colouring-and-arrow-notation, def-injection-surjection-bijection, def-countable]
justified_by: []
aliases: []
landmark: true
short: "Canonical Ramsey theorem for pairs"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "I. B. Leader, Ramsey Theory, Theorem 4"
      url: "https://www.dpmms.cam.ac.uk/~par31/notes/ramsey.pdf"
pipeline_run: null
---

## Statement

Let $c:[\mathbb N]^2\to C$ be a colouring by an arbitrary set of colours. There is an infinite $M\subseteq\mathbb N$ ([[def-countable]]) on which exactly one of the following canonical descriptions holds, writing every pair as $i<j$:

1. **constant:** all pairs have one colour;
2. **injective:** distinct pairs have distinct colours ([[def-injection-surjection-bijection]]);
3. **left-dependent:** $c(\{i,j\})=c(\{k,l\})$ if and only if $i=k$;
4. **right-dependent:** $c(\{i,j\})=c(\{k,l\})$ if and only if $j=l$.

The finite auxiliary colourings below use the homogeneous-set convention of [[def-ramsey-colouring-and-arrow-notation]].

## Facts & Assumptions

**Given:** An arbitrary colouring $c:[\mathbb N]^2\to C$.

[L1] Every finite colouring of $[\mathbb N]^k$ has an infinite monochromatic set, in ZF ([[thm-infinite-ramsey-on-the-naturals]]).

## Proof

**Proof technique:** direct.

1.1 Colour each $i<j<k<l$ according as $c(ij)=c(kl)$. By [L1], thin to an infinite set on which this answer is constant. If it is yes, any two pairs can be compared through a third pair lying to their right, so $c$ is constant. Henceforth the answer is no: separated pairs have different colours. [L1]

1.2 On the set from step 1.1, thin by [L1] for the relation $c(il)=c(jk)$ on $i<j<k<l$. The constant answer cannot be yes: on six ordered points it would give $c(x_2x_3)=c(x_1x_6)=c(x_4x_5)$, contradicting step 1.1. Thus every such nested pair has different colours. [step 1.1, L1]

1.3 Thin again for the relation $c(ik)=c(jl)$. A constant yes answer on six points similarly gives $c(x_1x_3)=c(x_2x_5)=c(x_4x_6)$, again contradicting step 1.1. Thus crossing pairs have different colours. [step 1.1, L1]

2.1 Successively thin triples so that each of the relations $c(ij)=c(ik)$, $c(ik)=c(jk)$ and $c(ij)=c(jk)$ has a constant truth value for $i<j<k$. The last relation cannot be always true, since four points would then make two separated pairs equal by transitivity. [step 1.1, L1]

2.2 If both of the first two relations were always true, the last would also be true, which step 2.1 excludes. If only the first is always true, equality of colours is exactly equality of left endpoints; if only the second is always true, it is exactly equality of right endpoints. The converse implications follow from the corresponding always-true relation, while pairs with different relevant endpoints are covered by steps 1.1-1.3 and the always-false triple relations. [step 1.1, step 1.2, step 1.3, step 2.1]

3.1 If both first relations are always false, any two distinct pairs are separated, nested, crossing, or share exactly one endpoint; steps 1.1-1.3 and the triple relations show their colours differ, so $c$ is injective. Together with the constant case and step 2.2, this yields one of the four canonical forms on an infinite set. [step 1.1, step 1.2, step 1.3, step 2.1, step 2.2] ∎

