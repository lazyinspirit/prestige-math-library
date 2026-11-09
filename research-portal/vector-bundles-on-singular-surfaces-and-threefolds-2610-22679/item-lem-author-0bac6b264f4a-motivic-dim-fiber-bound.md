---
title: The global dimension bound for the specified comparison fiber
status: draft
research_item: lem-author-0bac6b264f4a-motivic-dim-fiber-bound
dependency_level: 11
---

PDF p. 4: Motivic dimension vanishing

## Prerequisites

- [lem-author-0bac6b264f4a-motivic-dim-shifted-hypotheses](item-lem-author-0bac6b264f4a-motivic-dim-shifted-hypotheses)
- [thm-author-0bac6b264f4a-motivic-dim-dimension-criterion-input](item-thm-author-0bac6b264f4a-motivic-dim-dimension-criterion-input)
- [lem-author-0bac6b264f4a-motivic-dim-general-interface](item-lem-author-0bac6b264f4a-motivic-dim-general-interface)

## Statement
For every prime field $F$, every Noetherian $F$-scheme $X$ of finite dimension $d$, and every $j\geq0$, the actual comparison fiber satisfies
$$F_{j,F}(X)\in D(\mathbb Z)^{\leq j+d}.$$
Equivalently $H^i(F_{j,F}(X))=0$ for $i>j+d$.

## Facts & Assumptions
**Given:** $F,X,d,j$ as stated and the actual fiber rather than an abstract object with matching groups.

**Goal:** Apply the geometric criterion and undo the normalization with the correct cochain sign.

[F1] [lem-author-0bac6b264f4a-motivic-dim-shifted-hypotheses](item-lem-author-0bac6b264f4a-motivic-dim-shifted-hypotheses) checks all the criterion hypotheses for $W_{j,F}=F_{j,F}[j]$.

[F2] [thm-author-0bac6b264f4a-motivic-dim-dimension-criterion-input](item-thm-author-0bac6b264f4a-motivic-dim-dimension-criterion-input) applies to every finite-dimensional Noetherian scheme over the chosen base ring. [lem-author-0bac6b264f4a-motivic-dim-general-interface](item-lem-author-0bac6b264f4a-motivic-dim-general-interface) specifies the pointwise fiber.

## Proof
1.1 Take the base ring in [F2] to be $F$. A Noetherian scheme is quasi-compact and quasi-separated: it has a finite affine cover, and the intersection of two affine opens is a Noetherian open, hence quasi-compact. Thus $X$ belongs to the criterion’s scheme domain. With all sheaf and relative hypotheses supplied by [F1], the criterion gives $W_{j,F}(X)\in D(\mathbb Z)^{\leq d}$. [F1, F2, given]

2.1 If $i>j+d$, then $i-j>d$. The shift convention gives $H^i(F_{j,F}(X))=H^{i-j}(W_{j,F}(X))=0$ by step 1.1. This is the claimed bound on the actual fiber. No conclusion has been extracted from a spectral sequence abutting to total K-groups. [F1, F2, step 1.1] ∎
