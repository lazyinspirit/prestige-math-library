---
id: lem-int-mul-well-defined
kind: lemma
title: "Integer multiplication is well defined"
status: draft
origin: session
deps: [def-integers, def-int-operations]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - "T. Tao, Analysis I, 3rd ed., §4.1"
pipeline_run: null
---

## Statement

The operation $[(a,b)] \cdot [(c,d)] = [(ac+bd,\, ad+bc)]$ on $\mathbb{Z}$
([[def-int-operations]]) is independent of the chosen representatives.

## Proof

**Given:** Pairs with $(a,b) \sim (a',b')$ and $(c,d) \sim (c',d')$ in the sense of [[def-integers]].
**Facts:**
[A1] Addition on $\mathbb{N}$ is commutative and associative.
[A2] Multiplication on $\mathbb{N}$ is commutative.
[A3] Distributivity in $\mathbb{N}$: $x(y+z) = xy + xz$.

1.1 By hypothesis $a + b' = b + a'$; write $s$ for this common value. [given]
1.2 Regrouping and factoring: $(ac+bd) + (a'd+b'c) = c(a+b') + d(b+a')$. [A1, A3]
1.3 Regrouping and factoring: $(ad+bc) + (a'c+b'd) = d(a+b') + c(b+a')$. [A1, A3]
2.1 By step 1.1 both right-hand sides equal $cs + ds$, so $(ac+bd) + (a'd+b'c) = (ad+bc) + (a'c+b'd)$. [step 1.1, step 1.2, step 1.3]
3.1 That equation is precisely the defining relation $(ac+bd,\, ad+bc) \sim (a'c+b'd,\, a'd+b'c)$: the product class is unchanged when the first factor's representative changes. [step 2.1]
4.1 The product formula is symmetric in its two arguments: swapping $(a,b) \leftrightarrow (c,d)$ sends $(ac+bd,\, ad+bc)$ to $(ca+db,\, cb+da)$, the same pair. Hence, by the argument of steps 1.1–3.1 applied to the second factor, the product class is also unchanged when $(c,d)$ is replaced by $(c',d')$. [step 3.1, A1, A2]
5.1 Replacing first $(a,b)$ by $(a',b')$ and then $(c,d)$ by $(c',d')$: $[(a,b)] \cdot [(c,d)] = [(a',b')] \cdot [(c,d)] = [(a',b')] \cdot [(c',d')]$; multiplication is well defined. [step 3.1, step 4.1] ∎
