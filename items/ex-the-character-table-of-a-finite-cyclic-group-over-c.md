---
id: ex-the-character-table-of-a-finite-cyclic-group-over-c
kind: example
title: "The character table of a finite cyclic group over $\\mathbb C$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-vietas-formulas-for-a-split-monic-polynomial, ex-the-irreducible-complex-characters-of-a-finite-cyclic-group-are-the-n-powers-of-a-primitive-nth-root, thm-first-orthogonality-relation-for-irreducible-complex-characters, thm-second-column-orthogonality-relation-for-irreducible-complex-characters]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.3"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Section 4.1"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Example

For $G=\langle g\rangle$ cyclic of order $n$ and $\zeta$ a primitive $n$-th
root of unity, the character table has rows $\chi_k$ and columns $g^{m}$ with
entry $\zeta^{km}$ ($0\le k,m\le n-1$). Both orthogonality relations hold,
and the squared degrees sum to $n=|G|$.

## Facts & Assumptions

**Given:** A cyclic group $G=\langle g\rangle$ of order $n\ge1$ and a primitive $n$-th root of unity $\zeta$.

[F1] The irreducible characters are $\chi_k(g^{m})=\zeta^{km}$ for $0\le k\le n-1$, pairwise distinct ([[ex-the-irreducible-complex-characters-of-a-finite-cyclic-group-are-the-n-powers-of-a-primitive-nth-root]]).

[F2] Vieta's formulas: if the monic $f(t)=t^{n}+a_1t^{n-1}+\cdots+a_n$ splits as $\prod_{i=1}^{n}(t-\alpha_i)$, then $a_1=-\sum_i\alpha_i$ ([[cor-vietas-formulas-for-a-split-monic-polynomial]]).

[F3] The first orthogonality relation reads $\langle\chi_i,\chi_j\rangle=\delta_{ij}$ ([[thm-first-orthogonality-relation-for-irreducible-complex-characters]]).

[F4] The second orthogonality relation reads $\sum_i\chi_i(g)\overline{\chi_i(h)}=|C_G(g)|$ when $h$ is conjugate to $g$ and $0$ otherwise ([[thm-second-column-orthogonality-relation-for-irreducible-complex-characters]]).

[A1] In $\mathbb C[x]$, $t^{n}-1=\prod_{m=0}^{n-1}(t-\zeta^{m})$, because the two sides have the same degree, the same roots, and are monic.

## Verification

**Proof technique:** direct.

1.1 By [F1] the entry in row $\chi_k$ and column $g^{m}$ is $\zeta^{km}$, so the table has the stated shape. [F1, given]

1.2 If $n=1$, then $G$ is trivial and $\sum_{m=0}^{n-1}\zeta^{km}=1$ for the unique value $k=0$. Assume now that $n>1$. Then the polynomial $t^{n}-1$ has coefficient $0$ at $t^{n-1}$, so [A1] and [F2] give $\sum_{m=0}^{n-1}\zeta^{m}=0$. More generally, if $k\equiv0\pmod n$ then $\sum_{m=0}^{n-1}\zeta^{km}=n$; if $0<k<n$, the element $\eta=\zeta^{k}$ has order $n/d$, where $d=\gcd(k,n)$, so $$ \sum_{m=0}^{n-1}\zeta^{km}=d\sum_{r=0}^{n/d-1}\eta^r. $$ Here $n/d>1$, and the inner sum vanishes by the same Vieta argument applied to $t^{n/d}-1$. Thus $\sum_{m=0}^{n-1}\zeta^{km}$ is $n$ when $k\equiv0\pmod n$ and $0$ otherwise. [F2, A1, given, algebra]

2.1 Row orthogonality: by [F3] and step 1.1, $\delta_{kl}=\langle\chi_k,\chi_l\rangle=\frac{1}{n}\sum_m\zeta^{km} \overline{\zeta^{lm}}=\frac{1}{n}\sum_m\zeta^{(k-l)m}$, and the last sum is $n$ when $k\equiv l\pmod n$ and $0$ otherwise by step 1.2, which matches $\delta_{kl}$. [F3, step 1.1, step 1.2, algebra]

2.2 Column orthogonality: by [F4] and step 1.1, $\sum_k\chi_k(g^{m})\overline{\chi_k(g^{m'})}=\sum_k\zeta^{k(m-m')}$, which is $n$ when $m\equiv m'\pmod n$ and $0$ otherwise by step 1.2; since $G$ is abelian every centralizer is $G$, so this is exactly $|C_G(g)|\delta_{mm'}$. [F4, step 1.1, step 1.2, algebra]

3.1 All $n$ degrees are $1$, so $\sum_kn_k^{2}=n=|G|$. [F1, step 1.1, algebra] ∎
