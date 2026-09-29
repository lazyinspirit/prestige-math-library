---
id: cor-polynomial-diagonal-bimodule-hochschild-homology
kind: corollary
title: Diagonal Hochschild homology of a polynomial ring
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex, lem-exterior-algebra-basis-monomials, def-axiom-of-choice, def-hochschild-chain-complex-of-a-bimodule, def-graded-ring-module-bimodule-and-internal-shift]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9, §9.1.1 and Exercise 9.1.3"
      url: https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, Hochschild homology section"
      url: https://arxiv.org/pdf/math/0510265
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Assume AC. Let $k$ be a field and $R=k[x_1,\ldots,x_n]$ for $n\geq0$,
regarded as its regular bimodule. Give $HH_j(R,R)$ the $R$-module structure
induced by multiplication on the coefficient factor in Hochschild chains.
For $0\leq j\leq n$ there is an isomorphism of $R$-modules
$HH_j(R,R)\cong R\otimes_k\Lambda^j_k(k^n)$, and $HH_j(R,R)=0$ for $j>n$.
For the graded assertion, place $k$ in internal degree $0$ and grade $R$ by
$\deg_{\mathrm{int}}x_i=2$; give each standard exterior generator internal
degree $2$. Then the isomorphism is one of graded $R$-modules and, for
$0\leq j\leq n$,
$$HH_j(R,R)\cong R^{\binom nj}\{2j\}.$$
In particular, for $n=0$ one has
$HH_0(k,k)=k$ and $HH_j(k,k)=0$ for $j>0$.

## Facts & Assumptions

**Given:** AC, a field $k$, $R=k[x_1,\ldots,x_n]$, and the regular $R$-bimodule. For the graded assertion, place $k$ in internal degree $0$ and give each $x_i$ internal degree $2$.

[F1] Under AC, the polynomial Hochschild theorem identifies $HH_j(R,M)$ with the homology of the coefficient diagonal Koszul complex, naturally in $M$; in its graded clause each $\theta_i$ has internal degree $2$ ([[thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex]]).

[F2] For every $p$, the increasing wedges indexed by $p$-subsets form a basis of the $p$th exterior power of a finite free module, and that exterior power vanishes for $p>n$ ([[lem-exterior-algebra-basis-monomials]]).

[F3] AC means every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F4] Hochschild chains have terms $C_n(A,M)=M\otimes_kA^{\otimes_k n}$, and their boundary is the alternating sum of the first action, internal multiplication, and last action faces ([[def-hochschild-chain-complex-of-a-bimodule]]).

[F5] The graded shift is defined by $(N\{r\})_d=N_{d-r}$ ([[def-graded-ring-module-bimodule-and-internal-shift]]).

## Proof

**Proof technique:** direct.

1.1 Apply the polynomial Hochschild theorem with the regular coefficient bimodule. [F1, F3, given] Since $R$ is $k$-central, the theorem applies to $M=R$. Under AC it gives $HH_j(R,R)\cong H_j(\mathcal K_\bullet(R))$, where the coefficient differential deletes $\theta_i$ with coefficient $x_i m-mx_i$. Its naturality in $M$ will also identify the coefficient $R$-module structure below. [F1, F3, given]

2.1 The Hochschild-chain boundary is $R$-linear on the regular coefficient chains. [F4, step 1.1, algebra] For $r\in R$, let $r$ act on $C_q(R,R)=R\otimes_kR^{\otimes_kq}$ by multiplication on the first factor. This action commutes with every face: the first face uses $(rm)a_1=r(ma_1)$, internal faces leave the coefficient unchanged, and the last face uses $a_q(rm)=r(a_qm)$ because $R$ is commutative. Thus each boundary is $R$-linear and the homology inherits this $R$-action. For every $r\in R$, coefficient multiplication $\mu_r(m)=rm$ is an $R$-bimodule endomorphism of $R$. Naturality in [F1] shows the comparison with $H_j(\mathcal K_\bullet(R))$ commutes with $\mu_r$, so it is $R$-linear. [F1, F4, step 1.1, algebra]

2.2 Every differential in the coefficient Koszul complex for $M=R$ is zero. [F1, step 1.1, algebra] For every $m\in R$ and generator $x_i$, commutativity gives $x_i m-mx_i=0$. Hence each coefficient of every Koszul deletion map is zero, so $d_q=0$ for all $q$. [F1, step 1.1, algebra]

3.1 Read homology from the exterior basis. [F1, F2, step 2.2, algebra]
Since all differentials vanish, $H_j(\mathcal K_\bullet(R))=\mathcal K_j(R)$. For $0\leq j\leq n$, the increasing wedges $\theta_I$ with $|I|=j$ form a basis, so $\mathcal K_j(R)=\bigoplus_{|I|=j}R\theta_I \cong R\otimes_k\Lambda^j_k(k^n)$ with rank $\binom nj$. For $j>n$ the exterior power and Koszul term are zero by [F2], giving $HH_j(R,R)=0$. The isomorphism is $R$-linear by step 2.1. [F1, F2, step 2.1, step 2.2, algebra]

4.1 Determine the internal grading and shift. [F1, F5, step 3.1, algebra]
In the graded clause of [F1], each $\theta_i$ has degree $2$, so every $\theta_I$ with $|I|=j$ has degree $2j$. Thus each summand $R\theta_I$ is the internal shift $R\{2j\}$ under [F5], and the isomorphism in step 3.1 preserves internal degree. [F1, F5, step 3.1, algebra]

5.1 Check the empty, one-variable, top, and degree-zero cases. [F1, F2, step 3.1, step 4.1, given] If $n=0$, there is only the empty wedge in degree zero and the complex is $k$ with zero differential, so $HH_0(k,k)=k$ and higher homology vanishes. If $n=1$, the two terms are $R$ and $R\theta_1$; the differential is zero, so $HH_0=R$, $HH_1=R\{2\}$, and higher groups vanish. In general, degree zero uses $\Lambda^0(k^n)=k$ and has no outgoing differential; top degree $j=n$ has one basis wedge of degree $2n$ (the empty wedge when $n=0$); above top degree all terms vanish. The stated AC is used only through [F1]; the zero-differential calculation and exterior basis read-off make no further choices. There is no zero coefficient case because the coefficient is fixed to the nonzero regular module $R$ over a field. This claim is not an equivalence. [F1, F2, F3, step 1.1, step 2.2, step 3.1, step 4.1, algebra] $\square$

## Source comparison

Weibel, *An Introduction to Homological Algebra*, Exercise 9.1.3, printed p.304/PDF p.4, asks for the polynomial Hochschild calculation with the Koszul resolution; it is an exercise prompt, not a proof. Weibel's Exercise 9.1.1, printed p.300/PDF p.1, asks for the commutative-algebra action on Hochschild chains. Khovanov, “Hochschild homology,” PDF p.1, lines 33–62, states the polynomial diagonal Koszul complex and its coefficient contractions. These passages corroborate the conventions; the zero differential, $R$-linearity, exterior-basis calculation, and boundary cases are proved above.
