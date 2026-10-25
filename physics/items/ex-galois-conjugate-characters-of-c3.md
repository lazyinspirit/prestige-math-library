---
id: ex-galois-conjugate-characters-of-c3
kind: example
title: "The two nontrivial characters of $C_3$ form one rational representation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group, def-character-of-a-complex-representation, def-schur-index-of-an-irreducible-character, thm-character-of-an-irreducible-over-a-nonsplitting-field, def-axiom-of-choice]
proof_strategy: computation
sources:
  references:
    - title: "Gabor Wiese, Galois Representations, Section 2.5"
      url: "https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (ex-galois-conjugate-characters-of-c3). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Example

For $C_3=\langle g\mid g^3=1\rangle$ and $\zeta=e^{2\pi i/3}$, the characters
$\chi(g)=\zeta$ and $\overline\chi(g)=\zeta^2$ are Galois conjugate.  Their sum
is afforded over $\mathbb Q$ by the action of $g$ on $\mathbb Q^2$ with matrix
$$\begin{pmatrix}0&-1\\1&-1\end{pmatrix}.$$
Thus the rational Galois orbit occurs with multiplicity one. Each of the two
characters also has an explicit one-dimensional model over its character
field $\mathbb Q(\zeta)$, with scalar-extension multiplicity one. Under the
Axiom of Choice, the general Schur-index definition therefore gives
$m_{\mathbb Q(\zeta)}(\chi)=m_{\mathbb Q(\zeta)}(\overline\chi)=1$.

## Facts & Assumptions

**Given:** $C_3$, $g$, and $\zeta$ as displayed.

[L1] Over a nonsplitting field, an irreducible character orbit occurs with a common scalar-extension multiplicity ([[thm-character-of-an-irreducible-over-a-nonsplitting-field]]).

[L2] Under AC, the Schur index is the multiplicity attached to the unique irreducible representation over the character field ([[def-schur-index-of-an-irreducible-character]]).

## Verification

**Proof technique:** computation.

1.1 The displayed matrix has characteristic polynomial $x^2+x+1$, hence eigenvalues $\zeta,\zeta^2$, and its cube is the identity. It therefore gives a rational $C_3$-representation with complex character $\chi+\overline\chi$. Since $x^2+x+1$ has no rational root, this representation has no invariant rational line and is irreducible over $\mathbb Q$. [algebra]

2.1 The orbit appears once, so [L1] identifies its scalar-extension multiplicity over $\mathbb Q$ as $1$. Over $K=\mathbb Q(\zeta)$, the maps $g\mapsto\zeta$ and $g\mapsto\zeta^2$ each define an irreducible one-dimensional $K$-representation whose complex scalar extension has multiplicity one. These explicit computations use no choice principle. Under AC, [L2] identifies each attached representation and multiplicity with its Schur index over $K$, giving the two asserted values. [L1, L2, step 1.1, algebra] ∎
