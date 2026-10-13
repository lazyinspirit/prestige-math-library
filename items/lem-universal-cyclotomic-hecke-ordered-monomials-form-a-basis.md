---
id: lem-universal-cyclotomic-hecke-ordered-monomials-form-a-basis
kind: lemma
title: "Universal cyclotomic Hecke ordered monomials form a basis"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 16
deps: [def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules,
       lem-cyclotomic-hecke-bounded-ordered-monomials-span,
       thm-cyclotomic-hecke-central-sectors-are-isomorphic-to-type-a-cyclotomic-klr-algebras,
       lem-cyclic-type-a-cyclotomic-klr-regular-hom-norm-gives-total-dimension,
       thm-existence-of-finite-fields,
       thm-multiplicative-group-of-a-finite-field-is-cyclic,
       thm-polynomial-division-algorithm-over-a-field]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Brundan and Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov-Lauda algebras, arXiv:0808.2032v4"
      url: "https://arxiv.org/pdf/0808.2032"
      locator: "Actual retrieved v4, pp. 1–27 and 31–32 read; local source-interface calculations are reproduced in the strategy. No reading of pp. 28–30 is claimed."
---

## Statement

Let $R=\mathbb Z[z^{\pm1},U_1^{\pm1},\dots,U_\ell^{\pm1}]$ with $\ell\ge1$,
and let $H_n$ be the actual nondegenerate cyclotomic presentation of
[[def-arbitrary-level-cyclotomic-hecke-murphy-cell-and-schur-modules]] at the
first polynomial $\prod_a(X_1-U_a)$. Then $H_n$ is a free $R$-module with
indexed $R$-basis
$$X^aT_w,\qquad 0\le a_r<\ell,\ w\in S_n .$$
This basis specializes to every commutative $R$-algebra. Rank zero is $R$ with
the singleton empty word. The separate level-zero positive-rank quotient is
zero with the empty family.

## Facts & Assumptions

**Given:** The universal Laurent parameter ring $R$, the nondegenerate
cyclotomic presentation $H_n$ with the first-variable polynomial
$\prod_a(X_1-U_a)$, and the bounded ordered family
$\mathcal B=\{X^aT_w:0\le a_r<\ell,\ w\in S_n\}$.

[F1] The images of the bounded ordered monomials span $H_n$ over any base ring
with invertible parameter: the Bernstein product identities transport the
first polynomial to a zero relation with leading coefficient
$z^{r-1}X_r^\ell$ and remainders of $r$-exponent below $\ell$ involving no
variable above $r$, and reverse-lexicographic induction terminates because the
leading coefficients are units of $R$; inverse variables are polynomials by
the unit constant term of the first polynomial and the invertible finite Hecke
generators ([[lem-cyclotomic-hecke-bounded-ordered-monomials-span]]).

[F2] For a finite cyclic type-A field parameter, the sector isomorphism
$H^\Lambda_\alpha\cong R^\Lambda_\alpha$
([[thm-cyclotomic-hecke-central-sectors-are-isomorphic-to-type-a-cyclotomic-klr-algebras]])
combined with the KLR total dimension gives
$\dim_FH^\Lambda_n=\ell^nn!$
([[lem-cyclic-type-a-cyclotomic-klr-regular-hom-norm-gives-total-dimension]]).

[F3] For every prime power $q$ there is a finite field $\mathbb F_q$, whose
multiplicative group is cyclic of order $q-1$
([[thm-existence-of-finite-fields]],
[[thm-multiplicative-group-of-a-finite-field-is-cyclic]]); the Euler function
satisfies $\varphi(N)\ge\sqrt{N/2}$, and a nonzero polynomial over a field has
at most its degree roots ([[thm-polynomial-division-algorithm-over-a-field]]).

## Proof

**Proof technique:** direct.

**Given:** The universal presentation, the bounded family $\mathcal B$, and

the suppliers of [F1]–[F3].

1.1 Spanning over $R$. By [F1] the family $\mathcal B$ spans $H_n$ over the universal ring $R$: every element is an $R$-combination of the bounded ordered monomials with $0\le a_r<\ell$ and $w\in S_n$. The calculation uses no field division and therefore holds over $R$; for $n=0$ the singleton empty word gives $H_0=R$, and for $\ell=0$, $n>0$ the quotient is zero with the empty family. [F1, algebra]

1.2 Independence by finite-field specialization. Suppose $\sum_b f_bb=0$ is a nontrivial relation in $H_n$ with $f_b\in R$, not all zero. Fix $b_0$ with $f:=f_{b_0}\ne0$ and multiply the relation by a Laurent monomial so that $f\in\mathbb Z[z,U_1,\dots,U_\ell]$; choose a prime $p$ for which some nonzero integer coefficient of $f$ survives modulo $p$, and view $f$ as a polynomial in $U_1,\dots,U_\ell$ with coefficients in $\mathbb F_p[z]$; let $g(z)\ne0$ be one of those coefficients. By [F3] the number of primitive elements of $\mathbb F_{p^d}^\times$ is $\varphi(p^d-1)$, which is unbounded and satisfies $\varphi(N)\ge\sqrt{N/2}$ (factor $N$ over prime powers: each factor $\varphi(r^a)^2/r^a=r^{a-2}(r-1)^2\ge1$ except $r=2$, $a=1$, where it is $1/2$). Choose $d$ with $\varphi(p^d-1)>\deg g$ and $p^d-1$ larger than every $U$-degree of $f$; then some primitive $z\in\mathbb F_{p^d}^\times$ avoids the roots of $g$. Repeated one-variable root bounds on the nonzero-coordinate grid (each $U_a$ is constrained to be a power $z^{c_a}\ne0$, and the remaining polynomial in the next variable has degree bounded by the $U$-degree of $f$) supply $U_a=z^{c_a}\ne0$ with $f(z,U_1,\dots,U_\ell)\ne0$ in $\mathbb F_{p^d}$. This specialization is exactly an allowed finite cyclic type-A field parameter: $z$ has order $e=p^d-1\ge2$, and the cyclotomic charges $c_a$ lie in $\mathbb Z/e\mathbb Z$. [F1, F3, algebra]

2.1 The specialized basis forces a contradiction. Over the field $\mathbb F_{p^d}$ with the parameter and charges of step 1.2, the early explicit BK maps identify the direct sum of the Hecke central sectors with the standard homogeneous cyclic KLR algebra, whose total dimension is $\ell^nn!$ by [F2]. The bounded spanning of step 1.1 provides exactly $\ell^nn!$ ordered words $X^aT_w$, so over the specialized field the family $\mathcal B$ is a basis; specializing the assumed relation forces $f_b(z,U)=0$ for every $b$, and in particular $f(z,U)=0$, contradicting the choice of $z,U$ in step 1.2. Hence the relation was trivial, the family $\mathcal B$ is $R$-linearly independent, and with step 1.1 it is an $R$-basis of $H_n$. [F2, step 1.1, step 1.2, algebra]

3.1 Base change and boundary cases. Formation of the presented algebra commutes with arbitrary base change: the presentation is a quotient of a free algebra and its specialized ideal is precisely the specialized relation ideal, so the $R$-basis $\mathcal B$ specializes to a basis of $H_n\otimes_RR'$ for every commutative $R$-algebra $R'$ (in particular for the LM deformation DVR with $z=q_Ht$ and $U_a=Q_at^{na}$). No integral freeness was inferred from generic rank, no flatness was assumed, and no Schur or primitive-block classification was used. [step 1.1, step 2.1] ∎

## Remarks

The independence proof is a density argument: algebraic relations over the
universal Laurent ring are witnessed in arbitrarily large finite fields with
primitive parameter, where the exact dimension $\ell^nn!$ is available from
the independent KLR theory. The dependency order is essential: the
primitive-free spectral/projector sectors and the explicit field maps precede
the field norm, which precedes this universal PBW statement; the universal
basis then feeds the local canonical trace and the Murphy/semistandard/Schur
constructions. No choice principle is used (the finite fields and roots are
chosen by explicit bounded searches).
