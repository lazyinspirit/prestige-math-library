---
id: thm-general-polynomial-of-degree-n-has-galois-group-s-n
kind: theorem
title: "The general polynomial of degree $n$ has Galois group $S_n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-fundamental-theorem-of-symmetric-polynomials, cor-rational-function-field-as-a-fraction-field, thm-galois-group-embeds-in-the-symmetric-group-on-the-roots, thm-finite-galois-extension-characterizations, thm-artin-fixed-field-degree-theorem]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Theorems 5.38-5.40"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
    - title: "J. Ash, Basic Abstract Algebra, Section 6.8"
      url: "https://faculty.math.illinois.edu/~r-ash/Algebra.html"
pipeline_run: null
---

## Statement

Let $F$ be a field and let $X_1,\dots,X_n$ be algebraically independent over
$F$. Write $e_1,\dots,e_n$ for the elementary symmetric polynomials in the
$X_i$, let

$$E:=F(e_1,\dots,e_n)\subseteq L:=F(X_1,\dots,X_n),$$

and let

$$g(t):=\prod_{i=1}^n (t-X_i)=t^n-e_1t^{n-1}+\cdots+(-1)^ne_n\in E[t].$$

Then $L$ is the splitting field of $g$ over $E$, and

$$\operatorname{Gal}(L/E)\cong S_n.$$

## Facts & Assumptions

**Given:** The field $F$, the indeterminates $X_1,\dots,X_n$, the rational function field $L=F(X_1,\dots,X_n)$, the subfield $E=F(e_1,\dots,e_n)$, and the polynomial $g(t)$ above.

[L1] Every symmetric polynomial is uniquely a polynomial in the elementary symmetric polynomials ([[thm-fundamental-theorem-of-symmetric-polynomials]]).

[L2] For every field $A$, the one-variable rational function field $A(t)$ is the field of fractions of $A[t]$ ([[cor-rational-function-field-as-a-fraction-field]]).

[L3] Artin's fixed-field theorem says that if a finite automorphism group $G$ acts on a field $L$, then $[L:L^G]=|G|$ and $\operatorname{Aut}(L/L^G)=G$ ([[thm-artin-fixed-field-degree-theorem]]).

[L4] A finite extension is Galois exactly when it is the splitting field of a separable polynomial ([[thm-finite-galois-extension-characterizations]]).

## Proof

**Proof technique:** direct.

1.1 The polynomial $g(t)$ belongs to $E[t]$ by construction and splits in $L$ with roots $X_1,\dots,X_n$. Since $L$ is generated over $F$ by the $X_i$, it is generated over $E$ by those same roots, so $L$ is the splitting field of $g$ over $E$. [given, algebra]

1.2 Every permutation $\pi\in S_n$ acts on $L$ by $\pi(X_i)=X_{\pi(i)}$. Because each $e_j$ is symmetric, [L1] makes every $e_j$ fixed by this action, so $S_n\le \operatorname{Aut}(L/E)$. [L1, algebra]

2.1 Conversely, let $h\in L^{S_n}$. Iterating [L2] and clearing coefficient denominators writes $h=f/g$ with $f,g\in F[X_1,\dots,X_n]$ and $g\ne0$. Put $D:=\prod_{\pi\in S_n}\pi(g)$. Then $D$ is a nonzero symmetric polynomial, and $$hD=f\prod_{\substack{\pi\in S_n\\\pi\ne1}}\pi(g)$$ is also a polynomial. Both $h$ and $D$ are fixed by $S_n$, so $hD$ is symmetric as well. By [L1], both $D$ and $hD$ are polynomials in $e_1,\dots,e_n$, hence $h=(hD)/D\in F(e_1,\dots,e_n)=E$. The reverse inclusion is already in step 1.2, so $L^{S_n}=E$. Now [L3] yields $[L:E]=|S_n|=n!$ and $\operatorname{Aut}(L/E)=S_n$. [L1, L2, L3, algebra]

3.1 Step 1.1 makes $L/E$ the splitting field of $g$, and step 2.1 identifies its full automorphism group with $S_n$. Therefore $\operatorname{Gal}(L/E)\cong S_n$. [step 1.1, step 2.1, L4] ∎
