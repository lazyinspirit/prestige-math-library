---
id: ex-quaternion-character-has-schur-index-two
kind: example
title: "The faithful quaternion character has Schur index two"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quaternion-group-of-order-eight, def-character-of-a-complex-representation, def-schur-index-of-an-irreducible-character, thm-character-of-an-irreducible-over-a-nonsplitting-field, thm-schur-index-equals-division-algebra-index]
proof_strategy: computation
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Gabor Wiese, Galois Representations, Section 2.5"
      url: "https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf"
---

## Example

For $Q_8=\{\pm1,\pm i,\pm j,\pm k\}$, its faithful complex irreducible
character has values $\chi(1)=2$, $\chi(-1)=-2$, and $\chi(\pm i)=\chi(\pm j)=
\chi(\pm k)=0$.  It is rational-valued, but $m_{\mathbb Q}(\chi)=2$.

## Facts & Assumptions

**Given:** $Q_8$ with generators $i,j$ satisfying $i^2=j^2=-1$ and $ij=-ji$.

[L1] The Schur index is the common scalar-extension multiplicity of the complex constituents of an irreducible representation over the character field ([[def-schur-index-of-an-irreducible-character]]).

## Verification

**Proof technique:** computation.

1.1 In the usual complex model, $i$ and $j$ have eigenvalues $i,-i$, so their traces, and those of their negatives, are $0$; $-1$ acts as $-I_2$.  Hence the displayed character is rational-valued. [algebra]

1.2 Let $\mathbb H_{\mathbb Q}=\mathbb Q+\mathbb Qi+\mathbb Qj+\mathbb Qk$ and let $Q_8$ act on it by left multiplication.  The norm $q\bar q=a^2+b^2+c^2+d^2$ is nonzero for every nonzero rational quaternion, so $\mathbb H_{\mathbb Q}$ is a division algebra.  A $Q_8$-stable rational subspace is therefore a left ideal (the elements of $Q_8$ span $\mathbb H_{\mathbb Q}$), and this four-dimensional rational representation is irreducible. [algebra]

2.1 The trace of left multiplication is $4$ at $1$, $-4$ at $-1$, and $0$ at the other six elements.  Thus the complexification of the irreducible rational representation in step 1.2 has character $2\chi$ (equivalently, $\mathbb H_{\mathbb Q}\otimes_{\mathbb Q}\mathbb C\cong M_2(\mathbb C)$ is two copies of the natural module under left multiplication).  By [L1], its common scalar-extension multiplicity is $m_{\mathbb Q}(\chi)=2$. [L1, step 1.1, step 1.2, algebra] ∎
