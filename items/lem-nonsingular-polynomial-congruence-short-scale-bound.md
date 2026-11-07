---
dependency_level: 5
id: lem-nonsingular-polynomial-congruence-short-scale-bound
kind: lemma
title: "Nonsingular Polynomial Congruence Bounds at Short Scales"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-spaced-polynomial-weighted-congruence-mean-values
  - cor-spaced-polynomial-critical-congruence-concentration
  - lem-function-field-character-orthogonality
  - thm-holder-inequality-for-integrals
  - thm-bezout-identity
  - thm-bezout-identity-for-polynomials
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "T. D. Wooley, Nested efficient congruencing and relatives of Vinogradov's mean value theorem, arXiv:1708.01220v2"
      url: "https://arxiv.org/pdf/1708.01220v2"
      locator: "Polynomial specialization of Theorem 11.1, its proof, and the corresponding transfer in §17"
---

## Statement

Let $k\ge1$, and take either $R=\mathbb Z$ with a prime $\pi=p>k$ and $Q=p$, or $R=\mathbb F_q[t]$ with $\operatorname{char}\mathbb F_q>k$, a monic irreducible $\pi$, and $Q=q^{\deg\pi}$. For $B\ge1$, define the probability average $\mathcal A_B$ on $u\in(R/\pi^B R)^k$. In the integer case write $\chi_B(u\cdot v)=\exp(2\pi i\,u\cdot v/p^B)$; in the polynomial case write $\chi_B(u\cdot v)=e_\infty(u\cdot v/\pi^B)$. Let $\boldsymbol\phi\in R[x]^k$, let $S\subset R$ be finite, and assume $W(n;\boldsymbol\phi)=\det(\phi_j^{(i)}(n))_{1\le i,j\le k}$ is a unit modulo $\pi$ for every $n\in S$. Suppose each residue class modulo $\pi^{\lceil B/k\rceil}$ contains at most $M\ge1$ elements of $S$. For every $\varepsilon>0$ and $0<s\le k(k+1)/2$, there are constants $C$ and $B_0$ depending only on $k,s,\varepsilon$ such that, whenever $B\ge B_0$ and $(a_n)_{n\in S}$ are arbitrary complex numbers,

$$\mathcal A_B\left|\sum_{n\in S}a_n\chi_B(u\cdot\boldsymbol\phi(n))\right|^{2s}\le C Q^{\varepsilon B}M^s\left(\sum_{n\in S}|a_n|^2\right)^s.$$

In particular, $C,B_0$ are independent of the prime, finite field, irreducible polynomial, polynomial family, coefficients and support.

## Statement references

[[def-spaced-polynomial-weighted-congruence-mean-values]]

[[lem-function-field-character-orthogonality]]

[Wooley, Theorem 11.1 and §17](https://arxiv.org/pdf/1708.01220v2)

## Facts & Assumptions

**Given:** The rings, finite averages, polynomial family, support, coefficients and parameters in the Statement. Set $T=k(k+1)/2$.

[F1] Uniform critical congruence concentration for spaced polynomial families holds in both rings: at modulus $L$, a $\pi^c$-spaced rank-$k$ family with $c\ge\tau L$ and a finite complex sequence satisfies $U^{L}\le C_{k,\tau,\eta}Q^{\eta L}U^{L,\lceil L/k\rceil}$, for $L$ sufficiently large in terms of $k,\tau,\eta$, uniformly in the admissible ring and place ([[cor-spaced-polynomial-critical-congruence-concentration]], [[def-spaced-polynomial-weighted-congruence-mean-values]]).

[F2] Finite function-field averages impose exactly congruence modulo $\pi^L$ ([[lem-function-field-character-orthogonality]]). For integers the same identity follows from the finite geometric sum: $p^{-L}\sum_{u\bmod p^L}\exp(2\pi i uh/p^L)$ equals one if $p^L\mid h$, and otherwise is zero.

[F3] Hölder's inequality holds for probability integrals and finite probability sums; applying it to $|F|^{2s}$ and $1$ gives $\mathcal A|F|^{2s}\le(\mathcal A|F|^{2T})^{s/T}$ when $s<T$ ([[thm-holder-inequality-for-integrals]]).

[F4] Bézout's identity in the respective rings makes every element not divisible by $\pi$ invertible modulo $\pi^B$ ([[thm-bezout-identity]], [[thm-bezout-identity-for-polynomials]]).

## Proof

1.1 The concrete pairings in [F2] identify the averages with the character averages in [F1]. Indeed, their $|R/(\pi^B)|$ characters are distinct and orthogonal by [F2], and so form a basis of the complex functions on the finite quotient. Any additional distinct additive character would be orthogonal to every basis element: translate its quotient with each listed character by an element where that quotient is not one to make its sum vanish. This is impossible for a nonzero function. The same argument applies coordinatewise. The zero coefficient sequence gives zero on both sides. Otherwise put $\rho^2=\sum_{n\in S}|a_n|^2>0$ and divide the sum by $\rho$. It suffices first to prove the bound at $s=T$, since [F3] with the error budget $\varepsilon T/s$ then gives the stated bound for each $s<T$. Choose $0<\tau<\min\{1/(2k),\varepsilon/(4T)\}$, put $c=\lceil\tau B\rceil$, $L=B-kc$ and $H=\lceil L/k\rceil=\lceil B/k\rceil-c$, and take $B$ large enough that $L,H\ge1$. Then $c\ge\tau L$, so [F1] applies at modulus $L$ for all sufficiently large $B$, uniformly in the ring and place. [given, F1, F2, F3, choose, algebra]

2.1 For $\xi\bmod\pi^c$, write $\rho_c(\xi)^2=\sum_{n\equiv\xi}|a_n|^2$ and $f_c(u;\xi)=\rho_c(\xi)^{-1}\sum_{n\equiv\xi}a_n\chi_B(u\cdot\boldsymbol\phi(n))$, taking $f_c=0$ for a zero mass. Set $w_\xi=\rho_c(\xi)^2/\rho^2$. Cauchy followed by convexity gives $|\rho^{-1}\sum_n a_n\chi_B(u\cdot\boldsymbol\phi(n))|^{2T}\le Q^{cT}\sum_\xi w_\xi|f_c(u;\xi)|^{2T}$: first square and bound the unweighted residue sum by $Q^c\sum_\xi w_\xi|f_c|^2$, then use $\sum w_\xi=1$. Hence the normalized moment is at most $Q^{cT}\sum_\xi w_\xi I(\xi)$, where $I(\xi)=\mathcal A_B|f_c(u;\xi)|^{2T}$. [step 1.1, F3, algebra]

2.2 Fix a residue of positive mass and choose a representative $\xi\in R$. Polynomial expansion gives $\phi_j(\xi+z)-\phi_j(\xi)=\sum_{l\ge1}\omega_{lj}z^l$ with $\omega_{lj}\in R$. For $1\le l\le k$, $\omega_{lj}=\phi_j^{(l)}(\xi)/l!$ because these factorials are units modulo $\pi$. The matrix $\Omega=(\omega_{lj})_{1\le l,j\le k}$ has determinant $W(\xi;\boldsymbol\phi)/\prod_{l=1}^kl!$, a unit modulo $\pi$: every supported $n$ in this class satisfies $n\equiv\xi\pmod\pi$. By [F4], its adjugate gives an inverse modulo $\pi^B$. Taking these linear combinations of the $\phi_j$ makes the first $k$ coefficient rows the identity modulo $\pi^B$. Substituting $z=\pi^cy$, and dividing the $j$-th transformed equation by $\pi^{cj}$, gives polynomials $\Psi_j(y)=y^j+\pi^c\Xi_j(y)$ with $\Xi_j\in R[y]$: all terms of index greater than $k$ gain at least $\pi^{c(k+1-j)}$, and the erroneous first $k$ rows are multiples of $\pi^B$ before substitution. Therefore the original rank-$k$ equations modulo $\pi^B$ imply $\sum_{i=1}^T(\Psi_j(y_i)-\Psi_j(z_i))\equiv0\pmod{\pi^L}$ for each $j$. No factorial of index greater than $k$ is inverted; the expansion there uses its integral polynomial coefficients. [given, F4, step 1.1, algebra]

3.1 At each fixed $u$, set $b_y(u)=a_{\xi+\pi^cy}\chi_B(u\cdot\boldsymbol\phi(\xi+\pi^cy))$ and define $g(u,v)=\rho_c(\xi)^{-1}\sum_y b_y(u)\chi_L(v\cdot\boldsymbol\Psi(y))$. The sequence has finite support and mass $\rho_c(\xi)$, independent of $u$. Expanding the integer moment $2T$ and using [F2] twice gives the exact identity $I(\xi)=\mathcal A_B\mathcal A_L|g(u,v)|^{2T}$. Indeed the outer average imposes the original equations modulo $\pi^B$, which imply the added equations modulo $\pi^L$ by step 2.2, so the additional average removes no surviving term. This argument preserves every complex weight, with conjugation on the second tuple, and does not compare signed weighted solution sets. [F2, step 2.1, step 2.2, algebra]

4.1 Apply [F1] to $\boldsymbol\Psi$ and the sequence $b(u)$ for each $u$. For the fine mean at exponent $H$, a residue $y\equiv\eta\pmod{\pi^H}$ corresponds to a single original class $n\equiv\xi+\pi^c\eta\pmod{\pi^{c+H}}$. It contains at most $M$ supported points. Cauchy's inequality gives $|f_H(v;\eta;b(u))|^2\le M$ for every nonzero-mass class; the zero-mass convention gives the same bound otherwise. The fine mean, being a mass-weighted probability average, is therefore at most $M^T$. Uniformity in the complex sequence makes this valid for every phase twist $u$, so $I(\xi)\le C_{k,\tau,\eta}Q^{\eta L}M^T$. [F1, step 1.1, step 3.1, algebra]

5.1 Choose $\eta=\varepsilon/4$. Since $Tc+\eta L\le(T\tau+\eta)B+T\le\varepsilon B$ for all sufficiently large $B$, step 2.1 and $\sum_\xi w_\xi=1$ give the normalized bound $C Q^{\varepsilon B}M^T$. Restore the mass $\rho^{2T}$. The constants and thresholds depend only on $k,\varepsilon$ because the parameter choices and [F1] are uniform over the places and rings. The reduction of step 1.1 proves every stated $s$, and the zero-sequence case was already settled. [step 1.1, step 2.1, step 4.1, algebra] ∎
