---
id: thm-hilbert-symbol-is-symmetric-bilinear-and-nondegenerate
kind: theorem
title: "The Hilbert symbol is a symmetric bilinear nondegenerate pairing"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-equivalent-definitions-of-the-hilbert-symbol, lem-hilbert-symbol-depends-only-on-square-classes, thm-real-hilbert-symbol-formula, thm-odd-p-hilbert-symbol-formula, thm-two-adic-hilbert-symbol-formula]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Andrew V. Sutherland, 18.782 Lecture 10, Corollary 10.10"
      url: "https://math.mit.edu/classes/18.782/2013fa/LectureNotes10.pdf"
    - title: "Sam Raskin, Introduction to the Arithmetic Theory of Quadratic Forms, section 4.4"
      url: "https://www.samraskin.net/forms.pdf"
verification:
  precheck: pass
---

## Statement

For each rational place $v$, the Hilbert symbol induces a symmetric bilinear
pairing

$$
Q_v^\times/(Q_v^\times)^2\times Q_v^\times/(Q_v^\times)^2\to\{\pm1\},
$$

and this pairing is nondegenerate.

## Facts & Assumptions

**Given:** A place $v$ of $\mathbb Q$.

[L1] The symbol depends only on square classes
([[lem-hilbert-symbol-depends-only-on-square-classes]]).

[L2] The explicit formulas are known at the real place, the odd prime places,
and the $2$-adic place ([[thm-real-hilbert-symbol-formula]],
[[thm-odd-p-hilbert-symbol-formula]], [[thm-two-adic-hilbert-symbol-formula]]).

[L3] The norm criterion is one of the equivalent definitions
([[lem-equivalent-definitions-of-the-hilbert-symbol]]).

## Proof

**Proof technique:** direct.

1.1 Step [L1] descends the symbol to square classes. Symmetry is immediate from the defining equation $ax^2+by^2=1$. The explicit formulas of [L2] are multiplicative in each argument on the square-class group, so they give bilinearity at every rational place. [L1, L2, given, algebra]

2.1 To prove nondegeneracy, fix a nonsquare class $c$. Over $\mathbb R$, [L2] shows that $(-1,c)_\infty=-1$ when $c<0$. Over $\mathbb Q_p$ for odd $p$, write $c=p^\gamma w$: if $\gamma$ is odd, choose a nonsquare unit $u$ so that [L2] gives $(u,c)_p=-1$; if $\gamma$ is even, then $w$ is a nonsquare unit and [L2] gives $(p,c)_p=-1$. Over $\mathbb Q_2$, the classes of $-1,2,5$ generate the square-class group and [L2] shows that each nontrivial class is detected by one of them. Hence no nontrivial square class pairs trivially with every other one. [L2, L3, step 1.1, algebra] ∎
