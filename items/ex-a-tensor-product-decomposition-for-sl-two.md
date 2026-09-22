---
id: ex-a-tensor-product-decomposition-for-sl-two
kind: example
title: Clebsch–Gordan decomposition for sl2
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [ex-all-finite-dimensional-irreducible-sl-two-modules, thm-finite-dimensional-representations-of-sl-two, def-special-linear-lie-algebra-sl-two, def-weight-and-weight-space-of-a-lie-algebra-representation, def-irreducible-completely-reducible-and-faithful-lie-algebra-representation, prop-direct-sum-dual-hom-and-tensor-representations]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Alexander Kirillov Jr., An Introduction to Lie Groups and Lie Algebras"
      url: "https://www.math.stonybrook.edu/~kirillov/liegroups/liegroups.pdf"
      locator: "§8.3 and §4.8"
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed."
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter I §3"
proof_strategy: direct
---

## Example

For integers $a,b\ge0$ and the irreducible $\mathfrak{sl}_2$-modules $V(a)$,
$V(b)$ of [[ex-all-finite-dimensional-irreducible-sl-two-modules]],
$$V(a)\otimes V(b)\cong\bigoplus_{i=0}^{\min(a,b)}V(a+b-2i),$$
each summand occurring with multiplicity one.

## Facts & Assumptions

**Given:** The modules $V(n)$ with basis $v_0,\dots,v_n$ and $h$-eigenvalues $n-2k$, and the tensor product $V(a)\otimes V(b)$ with the action $x\cdot(u\otimes w)=x\cdot u\otimes w+u\otimes x\cdot w$ ([[ex-all-finite-dimensional-irreducible-sl-two-modules]], [[prop-direct-sum-dual-hom-and-tensor-representations]]).

[L1] Each $V(n)$ has weights $n,n-2,\dots,-n$, each with multiplicity one ([[ex-all-finite-dimensional-irreducible-sl-two-modules]], [[def-weight-and-weight-space-of-a-lie-algebra-representation]]).

[L2] Every finite-dimensional $\mathfrak{sl}_2$-module is a direct sum of irreducible submodules, and an irreducible submodule with top weight $m\ge0$ has weights $m,m-2,\dots,-m$, each with multiplicity one ([[thm-finite-dimensional-representations-of-sl-two]], [[def-irreducible-completely-reducible-and-faithful-lie-algebra-representation]], [[def-special-linear-lie-algebra-sl-two]]).

## Verification

**Proof technique:** direct.

1.1 The weight multiplicities of the tensor product are $w_m=\#\{(r,s):0\le r\le a,\ 0\le s\le b,\ a+b-2(r+s)=m\}$ by [L1]: the sum $m$ of the two weights $a-2r$ and $b-2s$ occurs once for each such pair. [L1]

1.2 For the right-hand side $\bigoplus_{i=0}^{\min(a,b)}V(a+b-2i)$ the same weight $m$ occurs in the summand $V(a+b-2i)$ exactly when $|m|\le a+b-2i$ and $m\equiv a+b$ modulo $2$, so its multiplicity is $w'_m=\max(0,\min(\min(a,b),\lfloor(a+b-|m|)/2\rfloor)+1)$ in that parity case and $0$ otherwise. [L1, L2]

2.1 The counts agree, $w_m=w'_m$ for every integer $m$. If $m\not\equiv a+b\pmod 2$ or $|m|>a+b$, both counts are zero. Otherwise put $j=(a+b-m)/2$. For $m\ge0$ one has $0\le j\le(a+b)/2$, and the tensor count is $$c_j=\max\bigl(0,\min(j,a)-\max(0,j-b)+1\bigr).$$ A direct case check for $a\le b$ and $a>b$ identifies this with the right-hand count of step 1.2. The identity for $m<0$ follows from the symmetries $w_{-m}=w_m$ and $w'_{-m}=w'_m$ obtained by reflecting the weight strings. [L1, step 1.1, step 1.2]

2.2 Both sides are direct sums of irreducibles and the left side is completely reducible by [L2]; moreover in a completely reducible $\mathfrak{sl}_2$-module the multiplicity $c_n$ of $V(n)$ is determined by the weight multiplicities through $w_n=\sum_{m\ge n,\ m\equiv n\ (2)}c_m$, so that $c_n=w_n-\sum_{m>n,\ m\equiv n\ (2)}c_m$ is recovered by downward induction on $n$. [L1, L2, step 1.1]

3.1 Applying the recovery of step 2.2 to the two modules, whose weight multiplicities agree by step 2.1, gives equal multiplicities of every $V(n)$ and hence the multiplicity-one decomposition $V(a)\otimes V(b)\cong\bigoplus_{i=0}^{\min(a,b)}V(a+b-2i)$. [step 2.1, step 2.2] ∎
