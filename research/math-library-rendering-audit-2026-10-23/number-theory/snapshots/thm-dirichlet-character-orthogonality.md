---
id: thm-dirichlet-character-orthogonality
kind: theorem
title: "Orthogonality relations for Dirichlet characters modulo q"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-dirichlet-character-modulo-q, lem-dirichlet-character-values, thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional, thm-first-orthogonality-relation-for-irreducible-complex-characters, thm-second-column-orthogonality-relation-for-irreducible-complex-characters, cor-the-regular-character-gives-the-sum-of-squares-formula]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Chapter 4, Theorem 4.10"
      url: "https://kskedlaya.org/ant/chap-primes-in-ap.html"
    - title: "Andrew V. Sutherland, Number Theory I, Corollary 18.16"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
verification:
  audited: 2026-09-05
  precheck: pass
---

## Statement

Let $G=(\mathbb Z/q\mathbb Z)^\times$, and let the sum range over all Dirichlet
characters modulo $q$.

1. For unit classes $a,b\in G$,
   $$\sum_{\chi\bmod q}\chi(a)\overline{\chi(b)}= \begin{cases} \varphi(q),&a=b,\\ 0,&a\ne b. \end{cases}$$
2. For Dirichlet characters $\chi,\psi$ modulo $q$,
   $$\sum_{a\in G}\chi(a)\overline{\psi(a)}= \begin{cases} \varphi(q),&\chi=\psi,\\ 0,&\chi\ne\psi. \end{cases}$$

## Facts & Assumptions

**Given:** The finite abelian group $G=(\mathbb Z/q\mathbb Z)^\times$.

[L1] Dirichlet characters modulo $q$ are exactly the one-dimensional complex characters of $G$ ([[def-dirichlet-character-modulo-q]], [[thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional]]).

[L2] Irreducible complex characters satisfy $\langle\chi,\psi\rangle=\delta_{\chi\psi}$ ([[thm-first-orthogonality-relation-for-irreducible-complex-characters]]).

[L3] For a finite group, the column orthogonality sum is $\sum_i\chi_i(g)\overline{\chi_i(h)}=|C_G(g)|$ when $g,h$ are conjugate and $0$ otherwise ([[thm-second-column-orthogonality-relation-for-irreducible-complex-characters]]).

[L4] The sum of the squares of the irreducible character degrees is $|G|$ ([[cor-the-regular-character-gives-the-sum-of-squares-formula]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], every irreducible complex character of $G$ has degree $1$, and then [L4] shows that their number is $|G|=\varphi(q)$ because $|G|=\sum_i1^2$. Thus the irreducible complex characters of $G$ are exactly the Dirichlet characters modulo $q$. Since $G$ is abelian, every conjugacy class is a singleton and every centralizer is all of $G$. [L1, L4, given, algebra]

2.1 Applying [L2] to the character group of $G$ gives $\frac1{|G|}\sum_{a\in G}\chi(a)\overline{\psi(a)}=\delta_{\chi\psi}$, which is exactly the second displayed formula because $|G|=\varphi(q)$. Applying [L3] to the same irreducible character list and using step 1.1 turns the centralizer size into $|G|=\varphi(q)$ and conjugacy into literal equality of elements, which yields the first displayed formula. [L2, L3, step 1.1, algebra] ∎
