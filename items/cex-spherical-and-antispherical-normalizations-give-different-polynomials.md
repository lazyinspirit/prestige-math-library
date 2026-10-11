---
id: cex-spherical-and-antispherical-normalizations-give-different-polynomials
kind: counterexample
title: "Spherical and antispherical normalizations give different polynomials"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [def-parabolic-kazhdan-lusztig-basis-and-polynomials,
       thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones,
       thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis,
       def-parabolic-hecke-module-and-antispherical-standard-basis,
       thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis,
       def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization,
       def-normalized-type-a-hecke-algebra-and-its-bar-involution,
       def-cg-parabolic-quotient-and-two-sided-minima,
       lem-bruhat-order-basic-properties-for-permutations]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Nicolas Libedinsky and Geordie Williamson, The anti-spherical category (author-hosted complete PDF of the article)"
      url: "https://nicolaslibedinsky.com/wp-content/uploads/2022/01/Antispherical.pdf"
      locator: "Section 2.7 (printed pp. 8-9): the two families m_{y,x} and n_{y,x}, their Deodhar normalizations u=-1 and u=q, and Deodhar's alternating-sum formula; complete passage read."
    - title: "Anders Bjoerner and Francesco Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005 (author-hosted complete 370-page PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 5.1 (printed pp. 134-135): Kazhdan-Lusztig data of S_3; complete passage read."
---

## Statement refuted

**Refuted claim:** the spherical and antispherical parabolic
Kazhdan--Lusztig coefficients of
[[def-parabolic-kazhdan-lusztig-basis-and-polynomials]] agree (equivalently,
either normalization may be substituted for the other in a parabolic or
singular-block multiplicity statement).

The witness is the smallest nontrivial parabolic: $W=S_3$,
$J=\{s_1\}$, $W_J=\{1,s_1\}$, ${}^JW=\{e,s_2,s_2s_1\}$, where

$$n_{e,s_2s_1}=p_{e,s_2s_1}-v\,p_{s_1,s_2s_1}=v^{2}-v^{2}=0\neq m_{e,s_2s_1}=p_{s_1,s_1s_2s_1}=p_{s_1,w_0}=v^{2}.$$

At $v=1$ the antispherical value is $0$ while the spherical value is $1$, so
the antispherical number is not a unit multiple of the spherical one; as
polynomials they differ as well, so the discrepancy is not an artifact of
specializing at $v=1$.

## Facts & Assumptions

**Given:** $W=S_3$ with simple reflections $s_1,s_2$, the parabolic $J=\{s_1\}$, the modules $M^J,N^J$ and coefficients $m_{y,x},n_{y,x}$ of [[def-parabolic-kazhdan-lusztig-basis-and-polynomials]], ${}^JW=\{e,s_2,s_2s_1\}$ ([[def-cg-parabolic-quotient-and-two-sided-minima]], [[def-parabolic-hecke-module-and-antispherical-standard-basis]]).

[F1] Ordinary Kazhdan--Lusztig coefficients: $p_{y,w}=0$ unless $y\le w$, $p_{w,w}=1$, and for $y<w$ one has $p_{y,w}\in v\mathbb Z[v]$ with $p_{y,w}=v^{\ell(w)-\ell(y)}+$ terms of strictly smaller degree and $p_{y,w}\in v^{\ell(w)-\ell(y)}\mathbb Z[v^{-2}]$ ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]); in $S_3$ the values needed below all have length gap at most two, for which the degree and parity bounds force $p_{y,w}=v^{\ell(w)-\ell(y)}$.

[F2] Bruhat comparabilities in $S_3$: $e<w$ for all $w\ne e$, $s_1<s_1s_2$, $s_1<s_2s_1$, $s_1<w_0$, $s_2<s_2s_1$, $s_2<w_0$, $s_1s_2<w_0$, $s_2s_1<w_0$, while $s_1$ and $s_2$ are incomparable, $s_1s_2$ and $s_2s_1$ are incomparable, and $w_0$ is the maximum ([[lem-bruhat-order-basic-properties-for-permutations]]).

[F3] Antispherical alternating sum: $n_{y,x}=\sum_{z\in W_J}(-1)^{\ell(z)}v^{\ell(z)}p_{zy,x}$ for $x,y\in{}^JW$, with $\ell(zy)=\ell(z)+\ell(y)$ ([[thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones]] (1), [[thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis]]).

[F4] Spherical reduction: $m_{y,x}=p_{w_0^Jy,w_0^Jx}$ when $W_J$ is finite with longest element $w_0^J$; here $w_0^J=s_1$ ([[thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones]] (2)).

## Counterexample

**Proof technique:** direct two-term computation in the Hecke algebra of $S_3$.

1.1 For $y=e$ and $x=s_2s_1$ the antispherical alternating sum [F3] has the two terms $z=e$ and $z=s_1$: $n_{e,s_2s_1}=p_{e,s_2s_1}-v\,p_{s_1,s_2s_1}$. By [F1] the first value has length gap two, so $p_{e,s_2s_1}=v^{2}$; the second has gap one (by [F2], $s_1<s_2s_1$), so $p_{s_1,s_2s_1}=v$. Hence $n_{e,s_2s_1}=v^{2}-v\cdot v=0$. [F1, F2, F3, algebra]

1.2 For the same pair the spherical reduction [F4] gives $m_{e,s_2s_1}=p_{s_1e,\,s_1s_2s_1}=p_{s_1,w_0}$; the pair has length gap two by [F2] ($\ell(w_0)-\ell(s_1)=3-1=2$), so by [F1] $p_{s_1,w_0}=v^{2}$ and $m_{e,s_2s_1}=v^{2}$. [F1, F2, F4, algebra]

2.1 Specializing at $v=1$ gives $n_{e,s_2s_1}(1)=0\neq1=m_{e,s_2s_1}(1)$: no unit of $\mathbb Z$ (indeed no unit of $\mathbb C$) multiplied by $0$ gives $1$, so the antispherical value is not a unit multiple of the spherical one; and since the two elements $0$ and $v^{2}$ of $\mathbb Z[v]$ are distinct, they differ as polynomials and not only after specialization. [step 1.1, step 1.2, algebra]

3.1 Consequently the two normalizations cannot be substituted for one another in a multiplicity statement: a singular-block or parabolic multiplicity theorem must fix the side of the parabolic and the corresponding module. In particular the singular-block multiplicity theorem of this page is stated in the spherical normalization, whereas a genuine regular parabolic locally finite category uses the antispherical family; replacing the spherical value $m_{e,s_2s_1}(1)=1$ by the antispherical value $n_{e,s_2s_1}(1)=0$ produces the false multiplicity $0$ for this pair. The computation refutes the normalization-blind claim, not the parabolic basis theorem or the alternating-sum identity that produced the two values. [step 2.1, F3, F4, algebra] ∎
