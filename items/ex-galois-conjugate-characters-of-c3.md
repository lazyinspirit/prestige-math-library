---
id: ex-galois-conjugate-characters-of-c3
kind: example
title: "The two nontrivial characters of $C_3$ form one rational representation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-group, def-character-of-a-complex-representation, def-schur-index-of-an-irreducible-character, thm-character-of-an-irreducible-over-a-nonsplitting-field]
proof_strategy: computation
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  references:
    - title: "Gabor Wiese, Galois Representations, Section 2.5"
      url: "https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf"
---

## Example

For $C_3=\langle g\mid g^3=1\rangle$ and $\zeta=e^{2\pi i/3}$, the characters
$\chi(g)=\zeta$ and $\overline\chi(g)=\zeta^2$ are Galois conjugate.  Their sum
is afforded over $\mathbb Q$ by the action of $g$ on $\mathbb Q^2$ with matrix
$$\begin{pmatrix}0&-1\\1&-1\end{pmatrix}.$$
Thus the rational Galois orbit occurs with multiplicity one; in particular the
Schur index of either character over its character field $\mathbb Q(\zeta)$ is one.

## Facts & Assumptions

**Given:** $C_3$, $g$, and $\zeta$ as displayed.

[L1] Over a nonsplitting field, an irreducible character orbit occurs with its Schur-index multiplicity ([[thm-character-of-an-irreducible-over-a-nonsplitting-field]]).

## Verification

**Proof technique:** computation.

1.1 The displayed matrix has characteristic polynomial $x^2+x+1$, hence eigenvalues $\zeta,\zeta^2$, and its cube is the identity.  It therefore gives a rational $C_3$-representation with complex character $\chi+\overline\chi$. [L1, algebra]

2.1 The orbit appears once, so [L1] identifies its scalar-extension multiplicity over $\mathbb Q$ as $1$.  Since the one-dimensional character itself is defined over $\mathbb Q(\zeta)$, its Schur index over its character field is also $1$. [L1, step 1.1, algebra] ∎
