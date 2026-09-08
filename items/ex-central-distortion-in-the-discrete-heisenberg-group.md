---
id: ex-central-distortion-in-the-discrete-heisenberg-group
kind: example
title: The Heisenberg center is quadratically distorted
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft)
      url: https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf
      locator: Corollary 12.39, pp.322–323; Heisenberg specialization
status: draft
origin: pipeline
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
proof_strategy: direct
deps: ["ex-bass-dimension-of-the-discrete-heisenberg-group", "thm-last-lower-central-term-has-exact-weighted-distortion"]
---
## Example

In the integer Heisenberg group with horizontal generators x,y and central z=[x,y], $\sqrt{|m|}\le |z^m|_{x,y}\le12\sqrt{|m|}$ for every nonzero integer m, and $|z^0|=0$. Therefore the distortion of the center is quadratic.

For all integers $a,b$, the explicit commutator identity is $[x^a,y^b]=z^{ab}$.

## Facts & Assumptions

**Given:** Use the triples and generators of the preceding Heisenberg example, and intrinsic generator z for its center.

[F1] The product law is $(a,b,c)(a^{\prime},b^{\prime},c^{\prime})=(a+a^{\prime},b+b^{\prime},c+c^{\prime}+ab^{\prime})$ and z generates the center ([[ex-bass-dimension-of-the-discrete-heisenberg-group]]).

[F2] An infinite last term in a class-two group has quadratic distortion ([[thm-last-lower-central-term-has-exact-weighted-distortion]]).

## Verification

1.1 For integers a,b the commutator formula gives $[x^a,y^b]=z^{ab}$. For $m\ge1$ put $q=\lceil\sqrt m\rceil$ and write $m=aq+r$ with $0\le r<q$ and $0\le a\le q$. Then $[x^a,y^q][x^r,y]=z^{aq+r}=z^m$. Its length is at most $2a+2q+2r+2\le6q$. Since $q\le\sqrt m+1\le2\sqrt m$ for $m\ge1$, this is at most $12\sqrt m$. In particular $m=1$ gives the word $[x,y]$ of length four. Thus the stated upper bound holds. [F1, algebra]

1.2 For a horizontal word of length n let (a_j,b_j,c_j) be the prefix value after j letters, starting at zero. Multiplication by x or its inverse changes only a by 1; multiplication by y or its inverse changes b by 1 and changes c by plus or minus the preceding a. Therefore $|a_j|\le j$ and $|c_n|\le\sum_{j=0}^{n-1}j=n(n-1)/2\le n^2$. If the word represents z^m, its final c is m, so $|m|\le n^2$ and $n\ge\sqrt{|m|}$. [F1, algebra]

2.1 Invert the word of step 1.1 for negative m; it represents z^m with unchanged length. At m=0 use the empty word. Intrinsically $|z^m|_{z}=|m|$, since the exponent sum of an intrinsic n-letter word has absolute value at most n and m identical signed letters attain |m|. Thus $\Delta(n)\le n^2$. For $n\ge18$ choose $m=\lfloor(n/12)^2\rfloor$; then $m\ge n^2/288$ and the upper length bound puts z^m in B(n). Hence $n^2/288\le\Delta(n)\le n^2$ for $n\ge18$. This also verifies the hypotheses and conclusion of F2, since the center is infinite and equals gamma_2. [F2, step 1.1, step 1.2] ∎

## Source notes

[Druţu–Kapovich, Lectures on Geometric Group Theory (585-page draft)](https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf), Corollary 12.39, pp.322–323; Heisenberg specialization. Draft Corollary 12.39 is specialized to a directly calculated rectangular commutator word; the lower estimate is obtained from the prefix matrix recurrence.
