---
dependency_level: 6
id: thm-function-field-weighted-polynomial-family-mean-value
kind: theorem
title: "Weighted Function-Field Mean Values for Polynomial Families"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-function-field-additive-character
  - lem-function-field-character-orthogonality
  - lem-nonsingular-polynomial-congruence-short-scale-bound
  - cor-number-of-monic-irreducible-polynomials-over-a-finite-field
  - thm-holder-inequality-for-integrals
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "T. D. Wooley, Nested efficient congruencing and relatives of Vinogradov's mean value theorem, arXiv:1708.01220v2"
      url: "https://arxiv.org/pdf/1708.01220v2"
      locator: "§17, Theorem 17.1 and its proof; the local proof uses the Wronskian-unit restriction required by the covering argument"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$. Let $q=p^m$ be a prime power with $p>k\ge1$, let $\mathcal O=\mathbb F_q[t]$, and let $\boldsymbol\phi=(\phi_1,\ldots,\phi_k)\in\mathcal O[x]^k$ satisfy $W(x;\boldsymbol\phi)=\det(\phi_j^{(i)}(x))_{1\le i,j\le k}\ne0$. Put $\mathbb T=\{\alpha\in\mathbb F_q((1/t)):\operatorname{ord}\alpha<0\}$, use Haar measure of mass one, and put $e_\infty(\alpha)=\exp(2\pi i\widetilde{\operatorname{Tr}_{\mathbb F_q/\mathbb F_p}(a_{-1}(\alpha))}/p)$, where $a_{-1}(\alpha)$ is the coefficient of $t^{-1}$. Write $\mathcal O_d=\{\nu\in\mathcal O:\deg\nu\le d\}$ with $\deg0=-\infty$. For every $0<s\le k(k+1)/2$, every $\varepsilon>0$, every complex sequence $(a_\nu)_{\nu\in\mathcal O}$, and every integer $d\ge0$,

$$\int_{\mathbb T^k}\left|\sum_{\nu\in\mathcal O_d}a_\nu e_\infty\!\left(\sum_{j=1}^k\alpha_j\phi_j(\nu)\right)\right|^{2s}\,d\boldsymbol\alpha\ll_{q,k,s,\boldsymbol\phi,\varepsilon}(q^d)^\varepsilon\left(\sum_{\nu\in\mathcal O_d}|a_\nu|^2\right)^s.$$

## Statement references

[[def-function-field-additive-character]]

[[def-countable-choice]]

[Wooley, Theorem 17.1](https://arxiv.org/pdf/1708.01220v2)

## Facts & Assumptions

**Given:** Countable Choice and the finite field, polynomial family, degree bound, coefficients and parameters in the Statement. Set $T=k(k+1)/2$.

[F1] Continuous and finite function-field character averages impose exact polynomial equalities and congruences, respectively ([[lem-function-field-character-orthogonality]], [[def-function-field-additive-character]]).

[F2] If $W(\nu;\boldsymbol\phi)$ is a unit modulo a monic irreducible $\pi$ on the support, and each class modulo $\pi^{\lceil B/k\rceil}$ contains at most $M$ supported points, the normalized finite $2T$-moment is at most $C_{k,\delta}Q^{\delta B}M^T$, where $Q=q^{\deg\pi}$ and the threshold and constant are uniform over the places and polynomial families ([[lem-nonsingular-polynomial-congruence-short-scale-bound]]).

[F3] The number $N_q(r)$ of monic irreducibles of degree $r$ satisfies $rN_q(r)=\sum_{h\mid r}\mu(h)q^{r/h}$ ([[cor-number-of-monic-irreducible-polynomials-over-a-finite-field]]).

[F4] On a probability space, Hölder gives $\int|F|^{2s}\le(\int|F|^{2T})^{s/T}$ for $0<s<T$ ([[thm-holder-inequality-for-integrals]]).

[A1] Countable Choice is used for the normalized Radon Haar probability and its finite products, constructed by the character-orthogonality supplier; no full Axiom of Choice is used ([[def-countable-choice]], [[lem-function-field-character-orthogonality]]).

## Proof

1.1 Under [A1], the stated normalized Radon Haar measure and finite product are well-defined. Truncate the weights to $\mathcal O_d$. The all-zero sequence is immediate. Otherwise put $\rho^2=\sum_{\nu\in\mathcal O_d}|a_\nu|^2>0$ and normalize the sum by $\rho$. Prove the bound first for the integer moment $T$; [F4] then gives every smaller real $s$, using an error budget $\varepsilon T/s$ at $T$ if necessary. Let $Z=\{\nu\in\mathcal O:W(\nu;\boldsymbol\phi)=0\}$; the polynomial root bound over the fraction field gives $|Z|\le\deg_xW$. The root bound follows by successive division by $x-\nu$ for distinct roots. Cauchy's inequality bounds the normalized contribution of $Z\cap\mathcal O_d$ in modulus by $|Z|^{1/2}$. Thus the full normalized $2T$-moment is at most a fixed constant times $1$ plus the moment with those roots removed. [given, A1, F4, algebra]

2.1 If $\nu\in\mathcal O_d$, each coefficient polynomial of the fixed $W(x)$ has fixed degree in $t$, so $\deg_tW(\nu)\le C_0+D_0d$ whenever $W(\nu)\ne0$, for constants depending only on $W$. Hence for every $2T$-tuple $\boldsymbol x,\boldsymbol y\in(\mathcal O_d\setminus Z)^T$ the product $\Xi=\prod_{i=1}^TW(x_i)W(y_i)$ is a nonzero polynomial of degree at most $C+Dd$. Put $r=\lceil2(\log(d+2))^2\rceil$ and let $\mathcal P_r$ comprise all monic irreducibles of degree $r$. From [F3], $rN_q(r)\ge q^r-rq^{r/2}$, because each term with divisor $h\ge2$ has magnitude at most $q^{r/2}$ and there are at most $r$ such divisors. Consequently, for all sufficiently large $d$, the product of the distinct polynomials in $\mathcal P_r$ has degree greater than $C+Dd$. Some $\pi\in\mathcal P_r$ therefore does not divide $\Xi$. Also $|\mathcal P_r|\le q^r$ and $r=o(d)$. [F3, step 1.1, choose, algebra]

3.1 Expand the normalized root-free $2T$-moment using [F1]. It is the sum over the exact polynomial equations $\sum_i(\phi_j(x_i)-\phi_j(y_i))=0$, with complex weight $\rho^{-2T}\prod_i a_{x_i}\overline{a_{y_i}}$. The absolute value of that sum is at most the sum of the absolute values of its terms. By step 2.1 every such solution has a place $\pi\in\mathcal P_r$ for which every $W(x_i)$ and $W(y_i)$ is nonzero modulo $\pi$. For each $\pi$, define the restricted coefficients $b_{\nu,\pi}=|a_\nu|\mathbf1_{\{\nu\in\mathcal O_d,\ W(\nu)\not\equiv0\pmod\pi\}}$. They are nonnegative, and their squared mass is at most $\rho^2$. Their continuous $2T$-moment counts the selected exact solutions with precisely the absolute weights. Summing these moments over $\pi\in\mathcal P_r$ therefore bounds the root-free moment. The Wronskian-unit restriction is part of this definition, so the following Taylor transfer applies on its entire support. [F1, step 1.1, step 2.1, algebra]

4.1 For each $\pi\in\mathcal P_r$, choose $B=\lceil k(d+1)/r\rceil$. Then $r\lceil B/k\rceil\ge d+1$. Distinct polynomials of degree at most $d$ cannot be congruent modulo $\pi^{\lceil B/k\rceil}$: their nonzero difference has degree at most $d$, smaller than the modulus. Thus $M=1$ in [F2]. The exact equations counted in step 3.1 imply their congruences modulo $\pi^B$. Since the weights $b_{\nu,\pi}$ are nonnegative, [F1] bounds the continuous moment above by the finite congruence moment. Applying [F2] with $\delta=\varepsilon/(8k)$ bounds the normalized selected moment by $C_{k,\delta}q^{\delta rB}$, where $rB\le k(d+1)+r$. The threshold is satisfied uniformly for large $d$ because $B\to\infty$. [F1, F2, step 3.1, algebra]

5.1 There are at most $q^r$ selected places, so steps 3.1 and 4.1 bound the normalized root-free moment by $Cq^{r+\delta(k(d+1)+r)}\le Cq^{\varepsilon d}$ for all sufficiently large $d$, since $r=o(d)$. Step 1.1 adds only a fixed constant, and restoring $\rho^{2T}$ proves the critical estimate. For the finitely many smaller $d$, the direct bound $|\sum_{\mathcal O_d}a_\nu e_\infty(\cdot)|^2\le q^{d+1}\rho^2$ gives the same assertion after enlarging a constant depending only on the fixed parameters. Finally apply the probability-space inequality [F4] as in step 1.1 to obtain all real $0<s\le T$. [step 1.1, step 2.1, step 3.1, step 4.1, F4, algebra] ∎
