---
id: lem-pbw-spanning-by-ordered-monomials
kind: lemma
title: PBW spanning by ordered monomials
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-pbw-filtration-on-the-universal-enveloping-algebra, def-linear-basis, def-partial-order, def-pbw-symbol-map-from-the-symmetric-algebra]
landmark: false
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Etingof, MIT 18.745 notes, §13.1, printed pp. 74–75"
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
    - title: "Kirillov, An Introduction to Lie Groups and Lie Algebras, Lemma 5.10, printed pp. 73–74"
      url: https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf
---

## Statement

Let $B$ be a supplied basis of $\mathfrak g$ equipped with a supplied total
order. Then the monomials

$$\iota_{\mathfrak g}(b_1)\cdots\iota_{\mathfrak g}(b_n)\qquad(b_1\leq\cdots\leq b_n),$$

including the empty monomial $1$, span $U(\mathfrak g)$.

## Facts & Assumptions

**Given:** A Lie algebra $\mathfrak g$ with a specified ordered basis $B$.

[L1] Every element of $U(\mathfrak g)$ is a finite linear combination of
images of tensor words ([[def-pbw-filtration-on-the-universal-enveloping-algebra]]).

[L2] In $U(\mathfrak g)$ one has $xy=yx+[x,y]$ for basis elements $x,y$.

[L3] Every bracket $[x,y]\in\mathfrak g$ has a finite expansion in $B$
([[def-linear-basis]]).

## Proof

**Proof technique:** strong well-founded induction on the pair (word length, inversion number), ordered lexicographically.

1.1 Words of length zero or one are ordered, and every word with inversion number zero is weakly increasing. These are the base cases. [base]

1.2 Assume every basis word with strictly smaller pair (length, inversion number) is a linear combination of ordered words. [ih, assume-hyp]

2.1 A nonordered finite word has an adjacent inversion $xy$ with $x>y$. Replace it using [L2] by $yx+[x,y]$. The swapped word has the same length and one fewer inversion, while after the finite basis expansion in [L3] every bracket term has length one less. Step 1.2 therefore rewrites every resulting term as a linear combination of ordered words. [step 1.2, L2, L3, algebra]

3.1 The lexicographic order on pairs of nonnegative integers is well-founded, so steps 1.1–2.1 prove that every basis word is in the ordered span. By [L1], that span is all of $U(\mathfrak g)$; for the empty basis it consists only of $1$. [step 1.1, step 2.1, L1, discharge-induction: step 1.1] ∎
