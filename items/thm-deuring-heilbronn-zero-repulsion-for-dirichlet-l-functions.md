---
id: thm-deuring-heilbronn-zero-repulsion-for-dirichlet-l-functions
kind: theorem
title: Deuring–Heilbronn zero repulsion for Dirichlet L-functions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-natural-logarithm
- lem-real-dirichlet-l-nonzero-at-one
- thm-dirichlet-l-euler-product
- thm-dirichlet-character-primitive-induction
- lem-dirichlet-character-values
- thm-ftc-second-part
- thm-logarithm-derivative-and-integral
- lem-real-part-power-sum-for-summable-complex-family
- lem-dirichlet-global-zero-powers-and-square-mass
- def-dirichlet-character-modulo-q
- def-primitive-dirichlet-character-and-conductor
- def-principal-dirichlet-character
- thm-complex-exponential-is-entire-with-derivative-itself
- cor-derivative-operators-are-continuous-for-local-uniform-convergence
- lem-continuous-functions-riemann-integrable
- lem-riemann-integral-linearity
justified_by: []
aliases: []
forward_refs: []
dependency_level: 2
sources:
  references:
  - title: Montgomery–Vaughan, Multiplicative Number Theory III, Chapter 28 §28.7
    url: https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf
    locator: Corollary 28.15 and its proof, printed pp. 217–227.
  - title: Asif Zaman, Analytic Estimates for the Chebotarev Density Theorem and Their Applications
    url: https://www.math.toronto.edu/zaman/files/thesis.pdf
    locator: Theorem 6.2.2 and quadratic case §6.3.1, printed pp. 141–142 and 146–148; the real-part power sum and Dirichlet all-zero analytic inputs are proved locally, not imported.
proof_strategy: direct
---

## Statement

There are absolute constants $c_0,c>0$ with the following property. Let $T\ge2$, let $c_1>0$ be the common zero-free constant for the family of primitive Dirichlet $L$-functions of conductor at most $T$, and let $\beta_1$ be its possible unique real simple zero, belonging to a real primitive quadratic character of conductor $q_1\le T$ and satisfying $\beta_1>1-1/(c_1\log T)$. Let $\rho=\beta+i\gamma$ be any other zero of a primitive Dirichlet $L$-function of conductor $q\le T$ with $|\gamma|\le T$, where $\log$ is natural. Then
$$\beta\le1-\frac{\log\!\left(\dfrac{1}{c_0(1-\beta_1)\log T}\right)}{c\log T}.$$

## Statement references

[Montgomery–Vaughan, Corollary 28.15](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** The original parameters and exceptional and target zero conventions. Zero occurrences retain their character label and multiplicity.

[F1] Actual characters are multiplicative, unit-modulus on units and zero on nonunits. They have unique primitive ancestors; the only primitive principal character has conductor one. A real nonprincipal character has $L(1,\chi)\ne0$ ([[def-dirichlet-character-modulo-q]], [[def-primitive-dirichlet-character-and-conductor]], [[def-principal-dirichlet-character]], [[lem-dirichlet-character-values]], [[thm-dirichlet-character-primitive-induction]], [[lem-real-dirichlet-l-nonzero-at-one]]).

[F2] Euler products converge to nonzero $L$-functions on real part greater than one. Exponential has derivative itself, and every fixed holomorphic derivative respects locally uniform convergence ([[thm-dirichlet-l-euler-product]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-derivative-operators-are-continuous-for-local-uniform-convergence]]).

[F3] For any actual character $\eta$ modulo $m$, the full zeros $Z_\eta$ of $(s-1)^{e_\eta}L(s,\eta)$ have real part at most one and specified natural indexing. For $h\ge1$, their exact differentiated logarithmic-derivative sum has principal-pole term $-e_\eta(1+it)^{-h-1}$ at $2+it$, with no analytic remainder; their reciprocal-square mass is at most $C\log(m(|t|+3))$. The conductor-one multiset contains $-2$ ([[lem-dirichlet-global-zero-powers-and-square-mass]]).

[F4] For a specified nonempty summable complex family with $R=\max|z_j|$, $S=\sum|z_j|$ and $M=S/R$, there is an integer $1\le k\le13M$ with $\operatorname{Re}\sum_jz_j^k\ge R^k/53$ ([[lem-real-part-power-sum-for-summable-complex-family]], at $\varepsilon=1$).

[F5] Compact continuous Riemann integrals have linearity, order, the supremum bound and FTC; these are applied componentwise for complex integrals. The natural logarithm satisfies $\log x=\int_1^xdu/u$ ([[thm-ftc-second-part]], [[lem-continuous-functions-riemann-integrable]], [[lem-riemann-integral-linearity]], [[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]]).

## Proof

1.1 The exceptional character $\chi_1$ is nonprincipal and real primitive quadratic, of conductor $q_1\le T$. Euler nonvanishing and [F1] give $\beta_1<1$; put $\delta=1-\beta_1>0$. The proof works for every real simple $\beta_1<1$, so it requires no unstated positivity assumption on $\beta_1$ or stronger interpretation of the original common-strip premise. Let the target zero belong to primitive $\chi$ of conductor $q\le T$ and write $\rho=\beta+i\gamma$, $|\gamma|\le T$. By [F3], $\beta\le1$; put $u=1-\beta\ge0$. On actual modulus $e=\operatorname{lcm}(q,q_1)\le T^2$, define the arithmetic product character $\xi(n)=\chi(n)\chi_1(n)$. This equality holds on every integer, including nonunits: an integer is a unit modulo $e$ exactly when it is a unit modulo both factors. The product is principal exactly when $\chi=\chi_1$ as primitive characters, since on units modulo $e$ its being principal says $\chi=\chi_1^{-1}=\chi_1$, and uniqueness of primitive induction identifies their primitive ancestors. Also $\chi$ is principal exactly in the conductor-one case. These two possibilities are mutually exclusive. [F1, F2, F3, given, construct, algebra]

1.2 For any actual character $\eta$, differentiate finite Euler products on $\operatorname{Re}s>1$ and expand each factor's geometric series. The resulting logarithmic derivative is $-\sum_n\Lambda(n)\eta(n)n^{-s}$, where $\Lambda(p^a)=\log p$ and $\Lambda(n)=0$ off prime powers. For each fixed $h\ge1$, on a compact half-plane $\operatorname{Re}s\ge1+\epsilon$ all differentiated series have absolute tails bounded by $\sum_{n>N}(\log n)^{h+1}n^{-1-\epsilon}$, tending to zero by the substitution $x=e^v$ in decreasing integral comparison after finitely many terms. The finite products and their derivatives converge locally uniformly by [F2]; their limits are nonzero there, so the logarithmic derivatives and their derivatives converge too. Thus $$A_h(s,\eta):=\frac{(-1)^h}{h!}(L'/L)^{(h)}(s,\eta)=-\frac1{h!}\sum_{n\ge1}\Lambda(n)(\log n)^h\eta(n)n^{-s}.$$ This derives the complex-character interface directly, rather than invoking a real-character-only logarithmic-derivative theorem. [F1, F2, F5, construct, algebra]

2.1 Sum the four values $A_h(2,\mathbf1)$, $A_h(2,\chi_1)$, $A_h(2+i\gamma,\chi)$ and $A_h(2+i\gamma,\xi)$, with $\mathbf1$ the character modulo one, and take real parts. Step 1.2 gives $$-\frac1{h!}\sum_{n\ge1}\frac{\Lambda(n)(\log n)^h}{n^2}(1+\chi_1(n))\left(1+\operatorname{Re}(\chi(n)n^{-i\gamma})\right)\le0.$$ Both factors in parentheses are nonnegative, because $\chi_1(n)\in\{-1,0,1\}$ and $|\chi(n)|\le1$. Absolute convergence justifies this finite combination for both signs of $\gamma$, also when the target conductor is one. No primitive replacement of $\xi$ is made. [F1, step 1.1, step 1.2, algebra]

3.1 Fix an integer $k\ge1$ and apply [F3] to step 2.1 with $h=2k-1$. From the four full zero multisets, remove one designated occurrence of $\beta_1$ in the unshifted $\chi_1$ copy, pairing it with the base zeta pole. If $\chi=\mathbf1$, there is also a shifted zeta pole; remove the designated occurrence of $\beta_1$ in the shifted $\xi=\chi_1$ copy to pair with it. If $\chi=\chi_1$, there is instead a shifted principal $\xi$ pole; remove the designated occurrence from the shifted $\chi$ copy. If neither case holds, no shifted pole or additional removal occurs. These are exactly all poles, by step 1.1. Each logarithmic-derivative pole has coefficient one, irrespective of the residue of the underlying actual principal $L$-function. Simplicity of $\beta_1$ and the given exclusion of that target specify the removals. Coincident numerical values in different character-labelled copies remain distinct occurrences. In particular the BASE zeta zero $-2$ is never removed, even if $\beta_1=-2$. [F1, F3, given, step 1.1, step 2.1, construct, algebra]

4.1 For the remaining union of zero occurrences, set $z_j=(2+i\tau_j-\omega_j)^{-2}$, where the associated evaluation height $\tau_j$ is zero or $\gamma$. Finite unions of the specified natural indexings in [F3] give one specified natural indexing by a fixed pairing map, and deletion of the specified occurrences requires no choice. Every zero has real part at most one, so $|z_j|\le1$. The four mass bounds in [F3], for actual moduli $1,q_1,q,e\le T^2$ and heights of modulus at most $T$, give $$S:=\sum_j|z_j|\le C_*L,\qquad L:=\log(10T^3),$$ with an absolute $C_*>0$. The retained base zeta zero $-2$ supplies $z=1/16$, so the family is nonempty and its attained maximum satisfies $R\ge1/16$, whence $M=S/R\le16C_*L$. The target occurrence remains: the only shifted $\chi$ occurrence removed could have been precisely the excluded exceptional zero. Its node is $(2+i\gamma-\rho)^{-2}=(1+u)^{-2}$, so $R\ge(1+u)^{-2}$. Multiplicities, trivial target zeros and arbitrarily negative target real parts are all included. [F3, F4, step 1.1, step 3.1, construct, algebra]

5.1 The exact zero identity and the removals of step 3.1 show $$\operatorname{Re}\sum_jz_j^k\le1-(1+\delta)^{-2k}+a\operatorname{Re}\left((1+i\gamma)^{-2k}-(1+\delta+i\gamma)^{-2k}\right),$$ where $a=1$ if there is a shifted principal pole and $a=0$ otherwise. For any real $v$, componentwise FTC and the integral triangle inequality give $$|(1+iv)^{-2k}-(1+\delta+iv)^{-2k}|\le2k\int_1^{1+\delta}|x+iv|^{-2k-1}dx\le2k\delta.$$ The integral triangle inequality follows from [F5] by multiplying its complex value by one unit scalar making that value real nonnegative and then using order on the real part; all integrands here are continuous. The same estimate at $v=0$ bounds the first difference. Hence $$\operatorname{Re}\sum_jz_j^k\le4k\delta.$$ This is valid for every $\delta>0$, with no assumption that $k\delta$ is small. All zero sums converge absolutely by step 4.1. [F3, F5, step 2.1, step 3.1, step 4.1, algebra]

6.1 Apply [F4] to the nonempty family of step 4.1. Fix an absolute $A\ge\max(1,208C_*)$. There exists $1\le k\le13M\le AL$ with $\operatorname{Re}\sum_jz_j^k\ge R^k/53$. Since $\log(1+u)\le u$ by [F5], the target-node bound gives $$R^k\ge(1+u)^{-2k}\ge e^{-2ku}\ge e^{-2ALu}.$$ Combining this positive REAL-PART lower bound with step 5.1 yields $$\delta L\ge\frac{e^{-2ALu}}{212A}.$$ The base zeta anchor, rather than a target-near-one restriction or a separate lower bound for $\delta$, was used to bound $k$. Character-dependent qualitative order constants never enter: only the uniform square mass of [F3] enters $A$. [F3, F4, F5, step 4.1, step 5.1, algebra]

7.1 For $T\ge2$, $3\log T\le L\le7\log T$, since $10\le2^4$. Therefore step 6.1 implies $$\delta\log T\ge\frac{e^{-14Au\log T}}{1484A}.$$ Set the absolute constants $c=14A$ and $c_0=1484A$. Natural logarithms and rearrangement give $$\beta\le1-\frac{\log(1/[c_0(1-\beta_1)\log T])}{c\log T},$$ exactly the original conclusion. All logarithm arguments are positive. When its numerator is nonpositive the same derivation is valid, without any additional case assumption. The original threshold and common-zero-free parameter $c_1$ identify the specified exceptional zero and were not otherwise needed. The proof covers every original target zero, conductor one, both height signs, the $T=2$ endpoint and all multiplicities, while assuming no choice premise. [F5, given, step 1.1, step 6.1, algebra] ∎

## Remarks

The complete local proof is supplied for independent review. It uses the two local real-part power-sum/global-zero helpers, and bypasses the separate log-free-density, Landau–Page and classical-zero-free theorems formerly listed as premises. Their proofs, all accepted upstream bodies and all other density claims are unchanged. This proof establishes no log-free density, Heath–Brown, Guth–Maynard or prime-interval theorem.

