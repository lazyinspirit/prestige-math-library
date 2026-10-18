---
id: thm-temperley-lieb-complex-semisimplicity-classification
kind: theorem
title: "Complex Temperley–Lieb semisimplicity by the order of q squared"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - lem-temperley-lieb-link-state-gram-determinant
  - lem-temperley-lieb-cell-forms-detect-semisimplicity-over-c
  - def-temperley-lieb-quantum-integers-and-quantum-characteristic
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§4, Propositions 4.5–4.9, PDF pp. 20–21: Gram determinant, generic semisimplicity, and q²=1 and q²=−1 cases."
    - title: "K. Iohara, G. I. Lehrer, and R. B. Zhang, The Jones Quotients of the Temperley-Lieb Algebras"
      url: "https://arxiv.org/pdf/1702.08128"
      locator: "§2, printed pp. 2–3: nonsemisimplicity threshold at order ℓ≥3 and the distinction at n=ℓ−1."
---

## Statement

Let $q\in\mathbb C^\times$, $\delta=q+q^{-1}$, and let $\ell$ be the order of $q^2$ when $q^2$ is a root of unity, with $\ell=\infty$ otherwise. For every finite $n$:

1. if $\ell=1$ (equivalently $q^2=1$ and $\delta=\pm2$), then $\mathrm{TL}_n(\mathbb C,\delta)$ is semisimple;
2. if $\ell=2$ (equivalently $q^2=-1$ and $\delta=0$), then it is semisimple exactly when $n=0$ or $n$ is odd;
3. if $3\le\ell<\infty$, then it is semisimple exactly when $n<\ell$;
4. if $\ell=\infty$, then it is semisimple.

In particular, the phrase “$q$ is a root of unity” alone is not a fixed-rank nonsemisimplicity criterion.

## Facts & Assumptions

**Given:** The complex parameter convention $\delta=q+q^{-1}$, the determinant formula for all link-state cell forms, and the criterion that the algebra is semisimple exactly when every such form is nondegenerate.

[F1] The determinant formula and its polynomial-continuation convention ([[lem-temperley-lieb-link-state-gram-determinant]]).

[F2] The link-state forms detect semisimplicity over $\mathbb C$ ([[lem-temperley-lieb-cell-forms-detect-semisimplicity-over-c]]).

[F3] For $q\ne\pm1$, $[r]_q=0$ exactly when $q^{2r}=1$; at $q=\pm1$, $[r]_q=rq^{r-1}$ ([[def-temperley-lieb-quantum-integers-and-quantum-characteristic]]).

## Proof
**Proof technique:** Split into the four possible orders of $q^2$ and the rank cases at order two and above.

1.1 Case $\ell=\infty$. No positive quantum integer vanishes by [F3], so every factor in [F1] is nonzero and [F2] gives semisimplicity at every rank. [F1, F2, F3, given, assume-case]

1.2 Case $\ell=1$. Then $q=\pm1$ and $[r]_q=rq^{r-1}\ne0$ for every positive $r$ by [F3]. Every Gram determinant in [F1] is nonzero, so [F2] gives semisimplicity at every rank. [F1, F2, F3, assume-case]

1.3 Case $3\le\ell<\infty$ and $n<\ell$. For every allowed $p$, each denominator index $j$ and each numerator index $n-2p+1+j$ in [F1] is positive and less than $\ell$. Neither vanishes by [F3], so all forms are nondegenerate and [F2] gives semisimplicity. [F1, F2, F3, assume-case, algebra]

1.4 Case $3\le\ell<\infty$ and $n\ge\ell$. Write $n=a\ell+s$ with $a\ge1$ and $0\le s<\ell$. If $s=0$, take $p=j=1$; if $1\le s\le\ell-2$, take $p=j=s+1$; if $s=\ell-1$, take $p=\ell-1,j=\ell-2$. In every case $1\le j\le p<\ell$ and $p\le\lfloor n/2\rfloor$: for $s=0$, $p=1$ and $n\ge3$; for $1\le s\le\ell-2$, $2p=2s+2\le\ell+s\le n$; and for $s=\ell-1$, $2p=2\ell-2\le2\ell-1\le n$. Direct substitution gives $n-2p+1+j=a\ell$. The exponent $d_{n,p-j}$ is positive because $p-j$ is $0$ or $1$, and $[j]_q\ne0$ because $j<\ell$. Thus the determinant in [F1] is zero, one form is degenerate, and [F2] gives nonsemisimplicity. [F1, F2, F3, assume-case, choose, algebra]

1.5 Case $\ell=2$. At $n=0$, $\mathrm{TL}_0=\mathbb C$ is semisimple. For even $n\ge2$, $p=j=1$ gives $\det G_{n,1}=[n]_q/[1]_q=0$, so [F2] gives nonsemisimplicity. If $n$ is odd, then $n-2p+1=2m>0$ for every allowed $p$. For odd $j$, both quantum integers in each factor of [F1] are nonzero; for $j=2k$, numerator and denominator have simple zeros at $q^2=-1$, and their ratio tends to $(-1)^m(m+k)/k\ne0$. Hence all continued determinants are nonzero and [F2] gives semisimplicity for odd $n$. [F1, F2, F3, assume-case, algebra]

2.1 The cases $\ell=\infty$, $\ell=1$, $3\le\ell<\infty$ with $n<\ell$ or $n\ge\ell$, and $\ell=2$ exhaust all possibilities. Steps 1.1–1.5 prove exactly the branches in the Statement, including the rank-zero order-two endpoint. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, cases-exhaustive] ∎
