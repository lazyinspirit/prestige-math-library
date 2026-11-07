---
dependency_level: 17
id: lem-primitive-hecke-canonical-product-and-real-zero-sum
kind: lemma
title: Canonical product and real logarithmic derivative of a primitive Hecke completion
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-primitive-hecke-completed-function-is-entire-of-order-one
- thm-hadamard-factorization-for-finite-order-entire-functions
- thm-zero-exponent-is-bounded-by-entire-order
- thm-canonical-product-convergence-from-exponent-sum
- cor-logarithmic-derivative-of-a-normally-convergent-product
- thm-zero-order-factorization-holomorphic-function
- thm-holomorphic-logarithms-homologically-simply-connected-domains
- prop-star-shaped-plane-domains-are-homologically-simply-connected
- thm-boundary-maximum-modulus-principle
- thm-unit-disc-schwarz-lemma-with-rigidity
- cor-cauchy-estimates-taylor-coefficients
- thm-taylor-expansion-holomorphic-function
- def-weierstrass-elementary-factor
- def-axiom-of-choice
- def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: AC and Countable Choice are retained from the accepted number-field, unit-domain and lattice/integration
  suppliers. The original nonvanishing DC hypothesis is obtained from AC by the proved choice implication.
sources:
  references:
  - title: A. R. Weiss, The least prime ideal, §1 equations(1.3)–(1.5)
    url: https://gdz.sub.uni-goettingen.de/download/pdf/PPN243919689_0338/PPN243919689_0338.pdf
    locator: Printed58–59, actual225-page scan physical63–64; formulation only, complete argument is reconstructed
      below from proved local suppliers.
  - title: Jürgen Neukirch, Algebraic Number Theory, VII§8
    url: https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf
    locator: Printed496–503, full unit-domain Mellin and theta-tail construction; used through the independently
      accepted local Hecke suppliers.
---

## Statement

Assume AC and Countable Choice. Let $K$ be a number field and $\chi$ a primitive finite-order ray-class Hecke character of modulus $\mathfrak f$. Let $\Lambda(s,\chi)$ be its full completion with conductor power $(|d_K|N\mathfrak f_0)^{s/2}$, real factors $\Gamma_{\mathbb R}(s+\epsilon_i)$ and complex factors $\Gamma_{\mathbb C}(s)$. Put $\delta_\chi=1$ for the trivial character and $0$ otherwise, and $\Xi_\chi(s)=[s(s-1)]^{\delta_\chi}\Lambda(s,\chi)$, with $\Gamma_{\mathbb R}(z)=\pi^{-z/2}\Gamma(z/2)$ and $\Gamma_{\mathbb C}(z)=2(2\pi)^{-z}\Gamma(z)$. Its zeros form an infinite discrete multiset $\mathcal Z_\chi$, each counted with its order, with $0\notin\mathcal Z_\chi$ and $0\le\operatorname{Re}\rho\le1$. For every $\eta>0$,
$$\sum_{\rho\in\mathcal Z_\chi}|\rho|^{-1-\eta}<\infty.$$
There are constants $A_\chi,B_\chi\in\mathbb C$ such that
$$\Xi_\chi(s)=e^{A_\chi+B_\chi s}\prod_{\rho\in\mathcal Z_\chi}(1-s/\rho)e^{s/\rho},\qquad B_\chi=\frac{\Xi_\chi'(0)}{\Xi_\chi(0)}.$$
The product converges normally on $\mathbb C$, and away from its zeros the series
$$\frac{\Xi_\chi'(s)}{\Xi_\chi(s)}=B_\chi+\sum_{\rho\in\mathcal Z_\chi}\left(\frac1{s-\rho}+\frac1\rho\right)$$
converges absolutely locally uniformly. Moreover,
$$\operatorname{Re}B_\chi=-\sum_{\rho\in\mathcal Z_\chi}\operatorname{Re}\frac1\rho,\qquad \operatorname{Re}\frac{\Xi_\chi'(s)}{\Xi_\chi(s)}=\sum_{\rho\in\mathcal Z_\chi}\operatorname{Re}\frac1{s-\rho}.$$
Both real-part sums converge absolutely locally uniformly away from the zeros; the first sum is finite. These sums include every zero of the completion, including any boundary zero not separately excluded. They do not assume a zero-free region.

## Facts & Assumptions

**Given:** The primitive completion and AC/CC branch in the Statement.

[F1] This completion has order $1$, the stated global upper bound and real-axis $\tfrac n2r\log r+O(r)$ lower asymptotic, is nonzero at $0,1$, and has zeros in the closed critical strip, symmetric under $\rho\mapsto1-\bar\rho$. It satisfies $\Xi_\chi(s)=W_\chi\overline{\Xi_\chi(1-\bar s)}$. [[lem-primitive-hecke-completed-function-is-entire-of-order-one]]

[F2] The nonzero zero multiset of a finite-order entire function has finite reciprocal sums for every exponent larger than its order. Hadamard factorization gives an exponential polynomial of degree at most the order's integer part and a fixed-genus canonical product. [[thm-zero-exponent-is-bounded-by-entire-order]] [[thm-hadamard-factorization-for-finite-order-entire-functions]]

[F3] A genus-one product converges normally if the reciprocal square sum is finite, with exactly its prescribed zeros; on zero-free compact sets its logarithmic derivative is the uniformly convergent sum of the factor logarithmic derivatives. [[thm-canonical-product-convergence-from-exponent-sum]] [[cor-logarithmic-derivative-of-a-normally-convergent-product]] [[def-weierstrass-elementary-factor]]

[F4] Matching zero orders remove quotient singularities; a zero-free entire function has an entire logarithm because the plane is star-shaped. [[thm-zero-order-factorization-holomorphic-function]] [[thm-holomorphic-logarithms-homologically-simply-connected-domains]] [[prop-star-shaped-plane-domains-are-homologically-simply-connected]]

[F5] Boundary maximum modulus, the unit-disc Schwarz lemma, Taylor expansion and Cauchy coefficient estimates hold. [[thm-boundary-maximum-modulus-principle]] [[thm-unit-disc-schwarz-lemma-with-rigidity]] [[thm-taylor-expansion-holomorphic-function]] [[cor-cauchy-estimates-taylor-coefficients]]

[A1] AC and CC are retained from the number-field analytic completion; listing the discrete zero multiset is permitted on this branch. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

**Given:** The data above.

1.1 A nonzero entire function has isolated finite-order zeros by [F4], so the zeros in each closed disc are finite. Under [A1] they can be listed with multiplicity if infinite. By [F1]–[F2], every reciprocal sum of exponent $1+\eta>1$ is finite, in particular the reciprocal square sum. [A1, F1, F2, F4, given, algebra]

2.1 To cover the finite-zero case without hiding it in an infinite-product convention, suppose its zeros were the finite list $\rho_1,\ldots,\rho_N$, possibly empty, and put $P_0(s)=\prod_j(1-s/\rho_j)$. By [F4], $\Xi_\chi/P_0=e^g$ for some entire $g$. On sufficiently large circles $|s|=R$, $|P_0(s)|\ge cR^N$, so [F1] gives $\operatorname{Re}g(s)\le C R\log(R+3)$. Put $u=g-g(0)$ and $a_R=1+\max_{|s|=R}\operatorname{Re}u(s)\ge1$, where [F5] applied to $e^u$ gives the last inequality and the interior bound $\operatorname{Re}u<a_R$. The function $h_R=u/(2a_R-u)$ maps the radius-$R$ disc into the unit disc and vanishes at $0$. Schwarz [F5] gives $|h_R(s)|\le|s|/R$, hence $|u(s)|\le2a_R$ for $|s|\le R/2$. Thus $|g(s)|\le C'R\log(R+3)$ there. Cauchy [F5] makes each Taylor coefficient of degree $k\ge2$ at most $C'R\log(R+3)/(R/2)^k\to0$. Therefore $g$ is affine. But then $\Xi_\chi=e^gP_0$ has $\log|\Xi_\chi(r)|=O(r+\log r)$ on the positive axis, contradicting the positive $\tfrac n2r\log r$ term in [F1]. Thus the zero multiset is infinite. [F1, F4, F5, step 1.1, construct, algebra]

3.1 Apply Hadamard [F2] to this order-one function. There is no factor $s^m$ because [F1] gives $\Xi_\chi(0)\ne0$, and the exponential polynomial has degree at most one. Its genus-one product is the stated one, normally convergent by [F3] and step 1.1. Each factor has logarithmic derivative $1/(s-\rho)+1/\rho$. For $s$ in a compact set with $|s|\le R$ and all sufficiently large $|\rho|>2R$, its absolute value is $|s/(\rho(s-\rho))|\le2R/|\rho|^2$. The finitely many remaining terms are holomorphic away from the zeros, so [F3] and this bound prove the complex series identity with absolute local uniform convergence. At $s=0$ every summand is zero, giving the displayed value of $B_\chi$. [F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 Write $\rho=\beta+i\gamma$. Since $0\le\beta\le1$, $0\le\operatorname{Re}(1/\rho)=\beta/|\rho|^2\le|\rho|^{-2}$, which is summable by step 1.1. On any compact zero-free set, $\operatorname{Re}(1/(s-\rho))=(\operatorname{Re}s-\beta)/|s-\rho|^2$ is bounded in absolute value by $C_R|\rho|^{-2}$ for all sufficiently large zeros; the remaining terms are finite. Thus both real-part sums converge absolutely locally uniformly, and the real part of step 3.1 equals $c_\chi+\sum_\rho\operatorname{Re}(1/(s-\rho))$, with $c_\chi=\operatorname{Re}B_\chi+\sum_\rho\operatorname{Re}(1/\rho)$. [F1, step 1.1, step 3.1, algebra]

5.1 Choose $s_0=1/2+it_0$ on the critical line that is not a zero: a compact segment has only finitely many zeros, so a rational $t_0$ in that segment avoiding them exists. Differentiating the same-character reflection in [F1] gives $\Xi_\chi'/\Xi_\chi(s_0)=-\overline{\Xi_\chi'/\Xi_\chi(s_0)}$, hence its real part is zero. In the absolutely convergent real sum of step 4.1, the terms for $\rho$ and $1-\bar\rho$ cancel: their real numerators at $s_0$ are opposite and their denominators equal. Zeros on the critical line contribute zero individually, since $s_0$ is not a zero. Therefore that whole sum is zero, so $c_\chi=0$. This proves both real identities everywhere off the zero set, without omitting central or possible boundary zeros and without an unproved estimate for the exponential constant. [F1, step 2.1, step 4.1, choose, algebra] ∎
