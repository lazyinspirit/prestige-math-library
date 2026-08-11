---
id: lem-colour-focussing-for-arithmetic-progressions
kind: lemma
title: "Finite colour focussing extends equally coloured progressions to a longer monochromatic arithmetic progression"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-product-rule, thm-cardinality-of-a-set-of-functions, thm-induction-principle, def-finite-cardinality, def-nat-order]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "I. B. Leader, Ramsey Theory, Section 1.2, colour-focussing proof"
      url: "https://www.dpmms.cam.ac.uk/~par31/notes/ramsey.pdf"
pipeline_run: null
---

## Statement

Fix positive $m,k$ with $m\ge2$, and suppose that for every positive $q$ there is a finite witness $V(m-1,q)$ forcing a monochromatic $(m-1)$-term arithmetic progression under every $q$-colouring. For each $1\le r\le k$ there is a finite $F(m,k,r)$ such that every $k$-colouring of $\{1,\ldots,F(m,k,r)\}$ has either a monochromatic $m$-term arithmetic progression, or $r$ monochromatic $(m-1)$-term arithmetic progressions of pairwise distinct colours focused at one integer $f$: if $A_i=\{a_i+j d_i:0\le j<m-1\}$, then $a_i+(m-1)d_i=f$ for every $i$.

All differences are positive. The finite product and function-counting used to compare block colour vectors are [[thm-product-rule]] and [[thm-cardinality-of-a-set-of-functions]]; induction and order use [[thm-induction-principle]], [[def-nat-order]] and [[def-finite-cardinality]].

## Facts & Assumptions

**Given:** The parameters and the family of witnesses $V(m-1,q)$ in the Statement.

[L1] If $A$ and $B$ are finite, then $A^{B}$ is finite and $\lvert A^{B}\rvert = \lvert A\rvert^{\lvert B\rvert}$ ([[thm-cardinality-of-a-set-of-functions]]).



## Proof

**Proof technique:** induction.

1.1 For $r=1$ and $m=2$, the singleton progression $\{1\}$ with chosen difference $1$ is focused at $2$. For $m\ge3$, apply $V(m-1,k)$ inside the first half of an interval twice as long. Its monochromatic $(m-1)$-term progression has positive difference at most the length of that half, so its next term still lies in the full interval. In either case there is one focused progression. [base]

1.2 Assume $r>1$. Take $m=2$ first, where the block construction below has nothing to work with: a $1$-term progression of block indices carries no difference. It is not needed. Among any $k+1$ points two share a colour, and two points $a<b$ of one colour are a monochromatic $2$-term progression with difference $b-a>0$, so $F(2,k,r)=k+1$ and the first alternative always holds. Assume from here that $m\ge3$, and let $n=F(m,k,r-1)$. Partition a sufficiently long interval into consecutive blocks of length $2n$. By [L1] there are $k^{2n}$ possible block colour vectors. Use $V(m-1,k^{2n})$ on the sequence of block vectors to obtain identically coloured blocks whose indices are $b,b+t,\ldots,b+(m-2)t$. [ih, L1]

2.1 Apply the induction hypothesis to the **first half** of the first selected block, an interval of length $n=F(m,k,r-1)$. It gives either a monochromatic $m$-term progression, which finishes, or $r-1$ colour-focused progressions $A_i=\{a_i+j d_i:0\le j<m-1\}$ of pairwise distinct colours focused at $f$. Each $A_i$ lies in that first half, so $a_i+(m-2)d_i\le n$ measured from the block start, and $m\ge3$ makes both $a_i$ and $d_i$ at most $n$; hence $f=a_i+(m-1)d_i\le2n$ and **the focus lies in the block**. That is what the block length $2n$ is for, exactly as in step 1.1. For the second alternative define $A_i'=\{a_i+j(d_i+2nt):0\le j<m-1\}$. Its $j$th term occupies the same relative position in block $b+jt$ as the $j$th term of $A_i$ in block $b$, so identical block vectors preserve its colour. [step 1.2, ih]

3.1 The progressions $A_i'$ are focused at $f+(m-1)2nt$. Since $f$ lies in block $b$ by step 2.1, the point $f+j\,2nt$ occupies the same relative position in block $b+jt$ as $f$ does in block $b$, so identical block vectors make $f,f+2nt,\ldots,f+(m-2)2nt$ a monochromatic $(m-1)$-term progression, focused at the same point and coloured as $f$ is. If that colour equals the colour of some $A_i$, then $A_i\cup\{f\}=\{a_i+jd_i:0\le j\le m-1\}$ is a monochromatic $m$-term progression and the first alternative holds. Otherwise the new progression differs in colour from all $r-1$ of the $A_i'$, which already have pairwise distinct colours, and the second alternative contains $r$ focused progressions of distinct colours. [step 2.1]

4.1 The base and step prove the focusing assertion for every $1\le r\le k$. [step 1.1, step 3.1, discharge-induction] ∎
