---
id: cor-total-ramification-in-a-prime-power-cyclotomic-field
kind: corollary
title: Total ramification at a prime-power cyclotomic level
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - lem-prime-power-cyclotomic-integral-structure
  - thm-cyclotomic-ring-of-integers
  - prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate
  - thm-monic-polynomial-division
  - thm-first-isomorphism-theorem-rings
  - thm-quotient-is-field-iff-ideal-maximal
  - cor-maximal-ideals-are-prime
  - thm-z-mod-p-is-a-field
  - def-prime-above-and-residue-degree
  - def-ring-of-integers-of-a-number-field
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory, Proposition 6.2(c) and proof, pp. 96-97"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
      locator: "Ch. 6, Proposition 6.2(c): (p) = (1-zeta)^e in O_{Q(zeta_{p^r})} and 1-zeta generates a prime ideal with residue field F_p."
    - title: "Conrad-Landesman, Math 154 Algebraic Number Theory, Corollary 10.7"
      url: "https://math.stanford.edu/~conrad/154Page/handouts/undergraduate-number-theory.pdf"
      locator: "Ch. 10, Corollary 10.7, p. 58: Z[zeta]/(zeta-1) = Z/pZ, so (zeta-1) is prime and is the unique prime containing p."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

For a prime $p$ and an integer $a\ge1$, put $K=\mathbb Q(\zeta_{p^{a}})$ and
$\lambda=1-\zeta_{p^{a}}$. Then
$$p\mathcal O_K=(\lambda)^{\varphi(p^{a})},$$
and the principal ideal $\lambda\mathcal O_K$ is the unique prime ideal of
$\mathcal O_K$ lying above $p$, with residue field $\mathcal O_K/\lambda\mathcal O_K\cong\mathbb F_p$.

## Facts & Assumptions

**Given:** A prime $p$, an integer $a\ge1$, $e:=\varphi(p^{a})$, a primitive
$p^{a}$-th root of unity $\zeta=\zeta_{p^{a}}$, $K:=\mathbb Q(\zeta)$,
$\lambda:=1-\zeta$ and $R:=\mathbb Z[\zeta]=\mathcal O_K$.

[F1] $\mathcal O_K=R=\mathbb Z[\zeta]$ and $pR=(\lambda)^{e}$; moreover
$1,\zeta,\dots,\zeta^{e-1}$ is an integral basis of $\mathcal O_K$
([[lem-prime-power-cyclotomic-integral-structure]],
[[thm-cyclotomic-ring-of-integers]]).

[F2] $\Phi_{p^{a}}\in\mathbb Z[t]$ is monic of degree $e$ and
$\Phi_{p^{a}}(1)=p$
([[prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate]]).

[F3] Division by the monic polynomial $t-1$ in $\mathbb Z[t]$ writes every
$f\in\mathbb Z[t]$ uniquely as $f=q\cdot(t-1)+f(1)$ with $q\in\mathbb Z[t]$
and constant remainder $f(1)$ ([[thm-monic-polynomial-division]]); hence the
evaluation homomorphism $\mathbb Z[t]\to\mathbb Z$, $f\mapsto f(1)$, is a
surjective ring homomorphism with kernel $(t-1)$, so
$\mathbb Z[t]/(t-1)\cong\mathbb Z$ ([[thm-first-isomorphism-theorem-rings]]).

[F4] An ideal $M$ of a commutative ring $R$ is maximal if and only if $R/M$ is
a field ([[thm-quotient-is-field-iff-ideal-maximal]]), and every maximal ideal
is prime ([[cor-maximal-ideals-are-prime]]). Also $\mathbb Z/p$ is a field
([[thm-z-mod-p-is-a-field]]).

[F5] A nonzero prime $\mathfrak P$ of $\mathcal O_K$ lies above $p$ when
$\mathfrak P\cap\mathbb Z=p\mathbb Z$, and its residue degree is
$[\mathcal O_K/\mathfrak P:\mathbb F_p]$
([[def-prime-above-and-residue-degree]]).

## Proof

**Proof technique:** direct.

1.1 Under the presentation $R=\mathbb Z[\zeta]=\mathbb Z[t]/(\Phi_{p^{a}})$ with $t\mapsto\zeta$, the element $\lambda=1-\zeta$ corresponds to the class of $1-t$, so $R/\lambda R\cong\mathbb Z[t]/(\Phi_{p^{a}},\,t-1)$; sending $t$ to $1$ via [F3] identifies this quotient with $\mathbb Z/(\Phi_{p^{a}}(1))=\mathbb Z/p\mathbb Z=\mathbb F_p$. [F1, F2, F3, F4]

2.1 Since $R/\lambda R\cong\mathbb F_p$ is a field, $\lambda R$ is a maximal and hence prime ideal of $R$, and it is proper; consequently $\lambda R\cap\mathbb Z$ is a proper ideal of $\mathbb Z$ containing $p\mathbb Z$ (as $p R=(\lambda)^{e}\subseteq\lambda R$ by [F1]) and therefore equals $p\mathbb Z$, so $\lambda R$ lies above $p$ with residue field $\mathcal O_K/\lambda\mathcal O_K\cong\mathbb F_p$, of residue degree $1$. [F1, F4, F5, step 1.1]

3.1 If $\mathfrak P$ is any prime ideal of $R$ with $p\in\mathfrak P$, then $\lambda^{e}\in\lambda^{e}R=pR\subseteq\mathfrak P$, so $\lambda\in\mathfrak P$ because $\mathfrak P$ is prime, hence $\lambda R\subseteq\mathfrak P$; as $\lambda R$ is maximal and $\mathfrak P$ is proper, $\mathfrak P=\lambda R$. Thus $\lambda R$ is the unique prime above $p$. [F1, F4, step 2.1]

4.1 Combining [F1] with steps 2.1 and 3.1, $p\mathcal O_K=(\lambda)^{\varphi(p^{a})}$ and $\lambda\mathcal O_K$ is the unique prime of $\mathcal O_K$ above $p$, with residue field $\mathbb F_p$. For $p=2$, $a=1$ this reads $K=\mathbb Q$, $\lambda=2$, $e=1$, and $2\mathbb Z$ is the unique prime above $2$ with residue field $\mathbb F_2$. [F1, step 2.1, step 3.1] ∎

## Remarks

- **Total ramification.** The exponent equals the degree
  $[\mathbb Q(\zeta_{p^{a}}):\mathbb Q]=\varphi(p^{a})$, and the residue degree
  is $1$, so $p$ is totally ramified; the equality $p\mathcal O_K=(\lambda)^{e}$
  exhibits the ramification index without invoking any general ramification
  theory beyond the definitions.
- **The quotient computation is the only place where $\Phi_{p^{a}}(1)=p$ is
  used**, and it also shows that no prime other than $\lambda\mathcal O_K$ can
  contain $p$.
