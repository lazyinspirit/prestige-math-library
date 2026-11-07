---
id: ex-menon-first-frequency-character-uniformity
kind: example
title: "Menon's first frequency regime for every small-modulus character"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - lem-menon-first-prime-frequency-bound
  - lem-dirichlet-polynomial-threshold-partition-is-finite
  - lem-dirichlet-character-arithmetic-function-characterization
  - lem-dirichlet-character-values
  - thm-canonical-prime-factorisation
sources:
  references:
    - title: "Siddarth Menon, Improved bounds for multiplicative functions in almost all short intervals"
      url: "https://arxiv.org/pdf/2607.15574v1"
      locator: "Equation (1.4), Proposition 3.1, and equation (3.4)"
---

## Example

Set $\kappa=(2^{25}-2)^{-1}$, $\varepsilon=\kappa/2$, $\eta=\kappa/8$, so $\alpha_1=\varepsilon/2-3\eta/2=\kappa/16$. Fix $B>0$, $X\ge10$, $3\le P_1<Q_1\le3X$, $1\le T\le X$, $1\le T_0\le T$, any positive integer $q\le(\log X)^B$, any Dirichlet character $\chi$ modulo $q$, and $z\in\{-1,1\}$. Write $\Omega(n)$ for the total number of prime factors with multiplicity, including $\Omega(1)=0$. Take any finite family of other prime ranges, each disjoint from $[P_1,Q_1]$. Let $S'$ be the positive integers with a prime divisor in every other range, and $S$ those in $S'$ with a prime divisor in $[P_1,Q_1]$.

Use the lemma's bins with
$$D=(\log(2Q_1))^{1/3}P_1^{-\kappa/24},\quad H=\max\{1,D^{-1}\},\quad c_p=z\chi(p),$$
and put
$$\mathcal T_1=\{t\in[T_0,T]:|Q_v(1+it)|\le e^{-\kappa v/(16H)}\text{ for every bin }v\}.$$
Then
$$\int_{\mathcal T_1}\left|\sum_{\substack{X\le n\le3X\\n\in S}}\chi(n)z^{\Omega(n)}n^{-1-it}\right|^2dt\ll_\kappa\left(1+\frac{TQ_1}{X}\right)\frac{(\log(2Q_1))^{1/3}}{P_1^{\kappa/24}}+\frac1{P_1}.$$
This is uniform over all the displayed characters and moduli, including principal and imprimitive characters and $q=1$. In fact, this first-regime estimate needs no restriction on $q$; the remaining regimes must still be proved in the parent's fixed-$B$ range.

## Facts & Assumptions

**Given:** The displayed parameters, character, and finite prime ranges.

[F1] The first-prime bound holds for every fixed $0<\alpha<1/2$ under its coefficient relation. [[lem-menon-first-prime-frequency-bound]]

[F2] Finite Boolean combinations of Dirichlet-polynomial threshold sets on a compact interval have finitely many interval components and isolated points. [[lem-dirichlet-polynomial-threshold-partition-is-finite]]

[F3] Character values have modulus at most one and satisfy $\chi(mn)=\chi(m)\chi(n)$, including on nonunits. [[lem-dirichlet-character-arithmetic-function-characterization]] [[lem-dirichlet-character-values]]

[F4] Unique prime factorization gives $\Omega(mp)=\Omega(m)+1$ for every prime $p$. [[thm-canonical-prime-factorisation]]

## Verification

1.1 Set $a_n=b_n=\mathbf1_{S'}(n)\chi(n)z^{\Omega(n)}$. All these coefficients and $c_p=z\chi(p)$ have modulus at most one by [F3]. For $p\in[P_1,Q_1]$, multiplication by $p$ cannot introduce or remove divisibility by a prime in any of the disjoint other ranges. Thus $\mathbf1_{S'}(mp)=\mathbf1_{S'}(m)$. Combining this with [F3–F4] gives $a_{mp}=b_mc_p$, even when $\chi(p)=0$. The lemma's additional condition $\omega(n)>0$ now turns $\mathbf1_{S'}$ exactly into $\mathbf1_S$. [F3, F4, given, construct, algebra]

2.1 The set $\mathcal T_1$ is a finite intersection of weak threshold sets on $[T_0,T]$. It is closed by continuity of each finite polynomial, and [F2] makes it a finite union of compact intervals and points. Each of its bin bounds is precisely the hypothesis of [F1] at $\alpha=\kappa/16$. Finally $2\alpha/3=\kappa/24=\varepsilon/3-\eta$. Apply [F1] with $c=3$ to get the displayed estimate. Neither the coefficient bounds nor the constant used a conductor, primitivity, nonprincipality, or a choice principle. [F1, F2, step 1.1, given, algebra] ∎
