---
id: prop-kac-moody-root-spaces-are-finite-dimensional
kind: proposition
title: "Kac moody root spaces are finite dimensional"
status: draft
origin: pipeline
deps: ["def-kac-moody-algebra-associated-to-a-gcm", "prop-contragredient-algebra-has-a-triangular-decomposition"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — Theorem 1.3.3(iv), §1.4, pp.14–19"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
proof_strategy: direct
---

## Statement

Let $\Delta=\{\beta\in Q\setminus\{0\}:\mathfrak g_\beta\ne0\}$. Then $\mathfrak g=\mathfrak h\oplus\bigoplus_{\beta\in\Delta}\mathfrak g_\beta$, every root has one sign, and $\dim\mathfrak g_\beta\le n^{|\operatorname{ht}\beta|}$. The only roots on the line $\mathbb C\alpha_i$ are $\pm\alpha_i$, and their spaces are $\mathbb Ce_i$ and $\mathbb Cf_i$.

## Facts & Assumptions

**Given:** The maximal Cartan-disjoint quotient for a finite GCM.

[F1] The quotient is by the split graded ideal and the Cartan embeds. ([[def-kac-moody-algebra-associated-to-a-gcm]]).

[F2] The two free halves and Cartan give the full grading. ([[prop-contragredient-algebra-has-a-triangular-decomposition]]).

## Proof

1.1 Quotient each homogeneous component of F2 by its intersection with $\mathfrak r$. The split graded ideal has no zero component, so the resulting zero part is $\mathfrak h$ and all remaining parts have strictly positive or strictly negative degree. Every element still has finite support. [F1, F2]

2.1 Every bracket of length $m$ is a linear combination of right-nested brackets of length $m$: apply $[ [u,v],w]=[u,[v,w]]-[v,[u,w]]$ repeatedly to reduce the left bracket length. There are $n^m$ choices of letters for such a bracket. Thus the total height-$m$ subspace of either half, and hence each of its degree quotients, has dimension at most $n^m$. [F2, step 1.1]

3.1 Independence of the roots makes a lattice point on $\mathbb C\alpha_i$ an integer multiple of $\alpha_i$. A bracket word at positive degree $k\alpha_i$ uses only $e_i$; all words of length $k>1$ vanish since $[e_i,e_i]=0$. Degree $\alpha_i$ is spanned by $e_i$ and is nonzero since $[e_i,f_i]=h_i\ne0$. The negative statement follows in the same way. If $\beta>0$ is not $\alpha_i$ and its simple reflection is a root, some coefficient at $j\ne i$ is positive and remains unchanged by the reflection; the one-sign property forces the reflected root to stay positive. [F1, F2, step 1.1, step 2.1] ∎

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), Theorem 1.3.3(iv), §1.4, pp.14–19.
