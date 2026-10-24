---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-the-nine-lemma-verified-on-a-diagram-of-cyclic-groups.json
  precheck: pass
id: ex-the-nine-lemma-verified-on-a-diagram-of-cyclic-groups
kind: example
title: "The nine lemma verified on a diagram of cyclic groups"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-nine-lemma-in-an-abelian-category,
       thm-abelian-groups-form-an-abelian-category]
justified_by: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Exercise 1.3.2"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
pipeline_run: frontier-24
---

## Example

In $\mathbf{Ab}$, take the commutative $3\times 3$ diagram whose top row is
the zero short exact sequence
$$0 \to 0 \to 0 \to 0 \to 0,$$
whose middle and bottom rows are both
$$0 \to \mathbb Z/2 \to \mathbb Z/4 \to \mathbb Z/2 \to 0,$$
whose vertical maps from the top row to the middle row are zero, and whose
vertical maps from the middle row to the bottom row are identities. Then each
column is short exact, and the nine lemma says that the top row is short exact
if and only if the bottom row is.

## Facts & Assumptions

**Given:** The cyclic-group $3 \times 3$ diagram just described.

[L1] Abelian groups form an abelian category ([[thm-abelian-groups-form-an-abelian-category]]).

[L2] The nine lemma applies to any such $3 \times 3$ diagram ([[thm-nine-lemma-in-an-abelian-category]]).

## Verification

1.1 In this diagram the middle and bottom rows are the standard short exact sequence $$0 \to \mathbb Z/2 \to \mathbb Z/4 \to \mathbb Z/2 \to 0,$$ and each column is one of the short exact sequences $$0 \to 0 \to G \xrightarrow{1_G} G \to 0$$ with $G\in\{\mathbb Z/2,\mathbb Z/4\}$ or the zero sequence. Hence all three columns and the middle row are short exact in $\mathbf{Ab}$. [L1, algebra]

2.1 The top row is the zero short exact sequence and the bottom row is the standard short exact sequence above, so both outer rows are short exact. This agrees with [L2], which predicts that under the hypotheses verified in step 1.1 the two outer rows stand or fall together. [L2, step 1.1, algebra]

3.1 Thus this cyclic-group diagram is a concrete instance of the nine lemma. [step 2.1] ∎

## Remarks

The diagram in the example is displayed below. Write $i:\mathbb Z/2\to\mathbb Z/4$ for $i([x]_2)=[2x]_4$ and $q:\mathbb Z/4\to\mathbb Z/2$ for $q([x]_4)=[x]_2$. Every unlabelled arrow is the unique zero map to or from a zero group.

```tikzcd
0 \arrow[r] & 0 \arrow[r] \arrow[d] & 0 \arrow[r] \arrow[d] & 0 \arrow[r] \arrow[d] & 0 \\
0 \arrow[r] & \mathbb Z/2 \arrow[r,"i"] \arrow[d,"1"'] & \mathbb Z/4 \arrow[r,"q"] \arrow[d,"1"'] & \mathbb Z/2 \arrow[r] \arrow[d,"1"'] & 0 \\
0 \arrow[r] & \mathbb Z/2 \arrow[r,"i"] & \mathbb Z/4 \arrow[r,"q"] & \mathbb Z/2 \arrow[r] & 0
```

The upper squares commute because their two composites are zero; the lower squares commute because the vertical maps are identities. Here $i$ is injective, $q$ is surjective, and $\operatorname{im}i=\{[0]_4,[2]_4\}=\ker q$. Thus the two nonzero rows are short exact, as are the columns $0\to0\to G\xrightarrow{1_G}G\to0$. The verification above is independent of this illustration.
