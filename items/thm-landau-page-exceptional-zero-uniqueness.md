---
id: thm-landau-page-exceptional-zero-uniqueness
kind: theorem
title: At most one real primitive Dirichlet character has a real zero in the common range
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - lem-dirichlet-character-values
  - lem-dirichlet-l-logarithmic-derivative-series
  - thm-riemann-zeta-continuation-to-the-right-half-plane
  - lem-real-dirichlet-l-log-derivative-zero-kernel-bound
  - lem-product-of-distinct-primitive-real-characters-is-nonprincipal
  - def-von-mangoldt-function
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-algebra-of-complex-derivatives
  - lem-extreme-value-theorem-from-compactness
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: contradiction
sources:
  references:
    - title: Sheng-Chi Liu, Lecture Notes in Analytic Number Theory
      url: https://bpb-us-w2.wpmucdn.com/faculty.umaine.edu/dist/1/19/files/2022/08/analyticnumbertheory.pdf
      locator: Theorem 31.1.1 (Landau), proof and Page corollary, printed pp. 79–80.
    - title: Ian Petrow, Introduction to Analytic Number Theory
      url: https://www.homepages.ucl.ac.uk/~ucahpet/IANTnotes2018.pdf
      locator: Chapter 9, Theorem 9.3 proof, zero-free region and multiplicity of one real zero for a fixed character, printed pp. 72–73; not used for the cross-character uniqueness step.
    - title: Philippe Michel, Analytic Number Theory and Families of L-functions, Park City lecture notes
      url: https://www.epfl.ch/labs/tan/wp-content/uploads/2018/10/Parkcitylectures.pdf
      locator: The Landau/Page theorem and proof, printed p. 21; positivity lemma 1.2.1, printed pp. 18–19.
    - title: "Jan-Hendrik Evertse, Analytic Number Theory: Prime Number Theory"
      url: https://pub.math.leidenuniv.nl/~evertsejh/ant20-6.pdf
      locator: Complete Chapter 6, printed pp. 165–178; Theorem 6.3.3 statement only, treated here as scope context, not as proof.
---




## Statement

There is an absolute constant $c>0$ such that, for every real $Q\ge3$, at most one primitive real nonprincipal Dirichlet character of conductor $q\le Q$ has a real zero $\beta\in(0,1)$ of its $L$-function satisfying $\beta>1-c/\log Q$.

## Statement references

Sheng-Chi Liu, *Lecture Notes in Analytic Number Theory*, Theorem 31.1.1 and Page corollary, printed pp. 79–80.

Philippe Michel, *Analytic Number Theory and Families of L-functions*, Park City lecture notes, Landau/Page theorem and proof, printed p. 21.

Jan-Hendrik Evertse, *Analytic Number Theory: Prime Number Theory*, Theorem 6.3.3, printed pp. 175–176 (statement only).

## Facts & Assumptions

**Given:** A real $Q\ge3$, primitive real nonprincipal Dirichlet characters, and real zeros in $(0,1)$.

[F1] A real Dirichlet character takes values in $\{-1,0,1\}$, vanishing exactly on nonunits ([[lem-dirichlet-character-values]]).

[F2] If $\psi$ is a real Dirichlet character modulo $m$, then for every real $\sigma>1$, $L(\sigma,\psi)>0$ and $$-\frac{L'(\sigma,\psi)}{L(\sigma,\psi)}=\sum_{n\ge1}\frac{\Lambda(n)\psi(n)}{n^\sigma}$$ ([[lem-dirichlet-l-logarithmic-derivative-series]]).

[F3] The zeta function has a simple pole at $s=1$ of residue $1$ ([[thm-riemann-zeta-continuation-to-the-right-half-plane]]).

[F4] For a real nonprincipal character modulo $m\ge3$ and $1<\sigma\le2$, retaining a specified real zero $\beta\in(0,1)$ of its primitive ancestor gives $-L'(\sigma,\psi)/L(\sigma,\psi)\le C\log m-1/(\sigma-\beta)$; with no retained zero the upper bound is $C\log m$ ([[lem-real-dirichlet-l-log-derivative-zero-kernel-bound]]).

[F5] For distinct primitive real nonprincipal characters modulo $q_1,q_2$, their pointwise product is a real nonprincipal character modulo $q_1q_2$ ([[lem-product-of-distinct-primitive-real-characters-is-nonprincipal]]).

[F6] The von Mangoldt function is nonnegative on positive integers ([[def-von-mangoldt-function]]).

[F7] The natural logarithm is increasing, has $\log 1=0$, and satisfies $\log(xy)=\log x+\log y$ for positive $x,y$ ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]]).

[F8] Holomorphic functions obey the quotient rule; a continuous real-valued function on a closed interval is bounded ([[thm-algebra-of-complex-derivatives]], [[lem-extreme-value-theorem-from-compactness]]).

## Proof

**Given:** The cutoff $Q\ge3$ and the character and zero conventions in the statement.

1.1 Suppose two distinct primitive real nonprincipal characters $\chi_1,\chi_2$ of conductors $q_1,q_2$ have real zeros $\beta_1,\beta_2\in(0,1)$. Put $m=q_1q_2$ and $\psi(n)=\chi_1(n)\chi_2(n)$. By [F5], $\psi$ is real and nonprincipal modulo $m$. [assume-contra, F5, given, algebra]

2.1 For real $\sigma>1$, [F2] and [F6] give $$0\le\sum_{n\ge1}\frac{\Lambda(n)}{n^\sigma}(1+\chi_1(n))(1+\chi_2(n))=-\frac{\zeta'}{\zeta}(\sigma)-\frac{L'}{L}(\sigma,\chi_1)-\frac{L'}{L}(\sigma,\chi_2)-\frac{L'}{L}(\sigma,\psi).$$ The series is absolutely convergent; its summands are nonnegative because [F1] makes each factor $1+\chi_j(n)$ nonnegative, including when $n$ is not a unit. Expanding the product and applying [F2] term by term gives the identity. [F1, F2, F6, step 1.1, algebra]

3.1 Put $H=\log(q_1q_2)$. Formula [F3] writes $\zeta(s)=1/(s-1)+h(s)$ near $1$, where $h(s)=1-s\int_1^\infty\{x\}x^{-s-1}dx$ is holomorphic. Set $u(s)=1+(s-1)h(s)$, so $u(1)=1$. Continuity on the real axis gives a fixed $r\in(0,1/2]$ such that $|u(\sigma)-1|<1/2$ for $1\le\sigma\le1+r$; hence $u$ is nonzero there. By [F8], $u'/u$ is continuous and bounded on this closed real interval, and the identity $-\zeta'/\zeta=1/(\sigma-1)-u'/u$ gives a uniform absolute $O(1)$ remainder for $1<\sigma\le1+r$. Applying [F4] to $\chi_1,\chi_2$ with their selected zeros and to the nonprincipal product $\psi$ without a selected zero, and using $\log m=H$ from [F7], yields $$0\le\frac1{\sigma-1}-\frac1{\sigma-\beta_1}-\frac1{\sigma-\beta_2}+C_0H$$ for $1<\sigma\le1+r$ and an absolute $C_0\ge1$; the $O(1)$ remainder is absorbed because $H\ge\log9$. [F3, F4, F7, F8, step 2.1, algebra]

4.1 Choose $a=\min\{r\log9/2,1/100,1/(100C_0)\}$ and $b=a/100$, and set $\sigma=1+a/H$. Since $H\ge\log9$, this has $1<\sigma\le1+r/2$. If both $\beta_j>1-b/H$, then $\sigma-\beta_j<(a+b)/H$, so step 3.1 yields $$0\le H\left(\frac1a-\frac2{a+b}+C_0\right)<0,$$ because $b=a/100$ and $C_0a\le1/100$. This contradiction proves $\min(\beta_1,\beta_2)\le1-b/\log(q_1q_2)$. [F7, step 3.1, algebra]

5.1 If two characters of conductors at most $Q$ had zeros above $1-c/\log Q$ with $c=b/2$, then $\log(q_1q_2)\le2\log Q$ would give both zeros above $1-b/\log(q_1q_2)$, contradicting step 4.1. Thus at most one such primitive character exists. [step 4.1, algebra, contradiction, discharge-contradiction] ∎

