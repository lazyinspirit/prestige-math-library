---
id: lem-cft-holomorphic-euler-systems-converge-with-parameters
kind: lemma
title: Convergence of finite logarithmic Euler systems with parameters
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - thm-cauchy-estimates-on-a-polydisc
  - lem-cft-c2-cofinite-modules-finitely-generated
  - lem-cft-locality-to-jacobi-residue-calculus
dependency_roles:
  thm-cauchy-estimates-on-a-polydisc: mathematical-premise
  lem-cft-c2-cofinite-modules-finitely-generated: mathematical-premise
  lem-cft-locality-to-jacobi-residue-calculus: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Gui and Zhang, Analytic Conformal Blocks II
      url: https://arxiv.org/pdf/2411.07707v4
      locator: The matrix-system reduction in Theorem4.9, final step, PDFpp59–60; the analytic convergence argument used there is proved directly below.
dependency_level: 2
---

## Statement

Let U be a complex parameter domain, and let $A_1,...,A_R$ be d-by-d holomorphic matrices on the polydisc $|q_i|<r_i$ times U. Fix a finite set of exponents alpha in $C^{R}$, distinct modulo $Z^{R}$, and nonnegative logarithmic degree bounds $K_i$. Suppose
$$F(q,b)=\sum_\alpha q^\alpha\sum_{n\in\mathbb N^R}q^nP_{\alpha,n}(\log q,b),$$
where each $P_{\alpha ,n}$ is a $C^{d}$-valued polynomial of degree at most $K_i$ in its ith logarithmic variable and its coefficients are holomorphic in b. Assume coefficientwise that $q_i\partial_{q_i}F=A_i F$ for every i. Then this series converges absolutely and locally uniformly, coefficientwise in its finitely many logarithmic monomials, on the universal cover of the punctured polydisc times U. It is a holomorphic solution there. No nonresonance, integrability, commuting constant matrices, or convergence of a formal gauge is assumed; a formal solution is given.

For the module assertion, let $V$ be a C2-cofinite conformal vertex algebra of CFT type over $\mathbb C$, and let $M$ carry $k\ge1$ commuting left $V$-module actions with conformal operators $L_i(0)$. For $\lambda\in\mathbb C^k$ put $M_{[\lambda]}=\{m:(L_i(0)-\lambda_iI)^{n_i}m=0\text{ for some }n_i\ge1\text{ for every }i\}$. Assume the algebraic direct sum $M=\bigoplus_\lambda M_{[\lambda]}$, finite-dimensional joint spaces, and real lower bounds $\operatorname{Re}\lambda_i\ge b_i$ whenever $M_{[\lambda]}\ne0$. These are the admitted generalized joint modules meant here; C2-cofiniteness is a property of $V$. For such a module, the weights have finitely many integer lattice cosets and the nilpotent parts of the component conformal operators have uniform finite exponents on the entire module. Thus its generalized-weight sewing series has precisely a finite exponent set and bounded logarithmic degrees as required above. This last assertion constructs no geometric Ward system.

## Facts & Assumptions

**Given:** The finite matrices, formal solution, fixed exponents and log-degree bounds in the Statement.

[F1] [[thm-cauchy-estimates-on-a-polydisc]] bounds Taylor coefficients of a holomorphic matrix on every smaller closed polydisc, uniformly on compact parameter subsets.

[F2] [[lem-cft-c2-cofinite-modules-finitely-generated]] gives finite generation and finite integer-coset weight support, with lower bounds, for the stated joint modules.

[F3] [[lem-cft-locality-to-jacobi-residue-calculus]] gives the conformal mode-degree commutator. A mode of integer component degree h sends generalized weight lambda to lambda+h.

## Proof

1.1 Work with one alpha. Multiplication by the matrices $A_i$, whose q-powers are nonnegative integers, preserves its exponent coset. Distinct chosen cosets are linearly independent as formal generalized-power series, so the system holds on each alpha-summand. Let B be the finite-dimensional vector space of $C^{d}$-valued polynomials in $L_1,...,L_R$ with degree bounds $K_i$. Give it the sum norm on its coefficients, using a fixed vector norm on $C^{d}$. On B, $\partial _{L_i}$ has norm at most $K_i$. [given, algebra]

2.1 For the module assertion, F2 supplies finitely many generators. Replace them by their finitely many joint generalized-weight components, still a finite generating set. On a joint weight lambda define $N_i=L_i(0)-\lambda _i$. F3 shows that $N_i$ commutes with every component mode as an operator between the appropriate generalized-weight spaces: the scalar weight shift exactly cancels the conformal commutator. Independently of the fixed formal-solution bounds $K_i$ in step 1.1, choose nonnegative integers $J_i$ for $1\le i\le k$ so that $J_i+1$ is at least the nilpotence exponent of $N_i$ on every chosen generator. Then $N_i^{J_i+1}$ annihilates every mode word on those generators, and hence $N_i^{J_i+1}=0$ on the whole module. No boundedness of dimensions of all weight spaces is being inferred from this argument. [F2, F3, algebra]

2.2 Expand $A_i(q,b)=\sum _{m\ge 0} A_{i,m}(b)q^{m}$. The coefficient equation at n is $$\big((\alpha_i+n_i)I-A_{i,0}+\partial_{L_i}\big)P_{\alpha,n}=\sum_{0<m\le n}A_{i,m}P_{\alpha,n-m}.$$ Here $m\le n$ is componentwise and $m>0$ means m is not the zero vector. Fix a compact parameter subset H. The norms of all $A_{i,0}$ on H and the finitely many alpha_i and $K_i$ have one bound. For $|n|=\sum n_i$ sufficiently large, choose i with $n_i\ge |n|/R$. The operator on the left is $n_i$ I plus a uniformly bounded operator on B. Its geometric-series inverse has norm at most $2/n_i\le 2R/|n|$. This choice uses no relations between the $A_i$. Resonances at the finitely many smaller n cause no difficulty because their formal coefficients have already been given. [given, step 1.1, algebra]

3.1 Choose radii $0<s_i<\rho _i<r_i$. F1 gives a constant $M_H$ such that $\|A_{i,m}(b)\|\le M_H\prod_j\rho_j^{-m_j}$ for every i,m,b in H. Put $$d_n=\sup_{b\in H}\|P_{\alpha,n}(\cdot,b)\|,\qquad e_n=d_n\prod_j s_j^{n_j},\qquad t_j=s_j/\rho_j<1.$$ For large |n|, step 2.2 gives $$e_n\le\frac{2RM_H}{|n|}\sum_{0<m\le n}\Big(\prod_jt_j^{m_j}\Big)e_{n-m}.$$ The full positive sum $S=\sum_{m>0}\prod_jt_j^{m_j}=\prod_j(1-t_j)^{-1}-1$ is finite. Choose N larger than the inverse threshold in step 2.2 and larger than 2RM_H S. Choose $C_H$ bounding all $e_n$ with $|n|\le N$. Induction on |n| then yields $e_n\le C_H$ for every n, since every n-m on the right has smaller total degree and the displayed bound is at most $C_H$ times 2RM_H S/|n|. [F1, step 2.2, algebra]

4.1 To obtain convergence on a prescribed compact q-subset choose smaller radii $u_i<s_i$ containing that subset. Step 3.1 gives $$\sum_n d_n\prod_i u_i^{n_i}\le C_H\prod_i(1-u_i/s_i)^{-1}<\infty.$$ There are only finitely many alpha and logarithmic monomials. Their factors $q^\alpha $ and powers of the chosen logarithms are bounded on every compact subset of the covering domain. Thus the entire series is absolutely locally uniformly convergent with the stated coefficient bounds. The same argument on slightly larger compact subsets permits termwise q and parameter differentiation by Cauchy's formula; its sum is holomorphic and solves the system. Since $s_i,\rho _i$ can approach $r_i$ arbitrarily closely, this is convergence on the entire allowed punctured polydisc, not merely some unspecified neighborhood of zero. [F1, step 3.1, algebra]

5.1 F2 gives finitely many joint integer cosets and coordinatewise lower bounds. In each occurring coset choose a representative alpha and subtract its coordinatewise minimum integer shifts; the resulting representative need not occur, but every occurring weight has the form alpha+n with n in $N^{R}$. Keep one representative per distinct coset. Step 2.1 bounds every logarithmic degree in $q^{L(0)}$ by the separately chosen module bound $J_i$. Consequently, when the generalized-weight sewing series satisfies an actual finite matrix Euler system, apply the already proved formal-series assertion afresh with $R=k$ and log-degree bounds $K_i:=J_i$. That assertion holds for every choice of nonnegative finite bounds, so this application needs no relation between the module bounds $J_i$ and the bounds of the initially given formal solution $F$. It proves convergence of this module series. The existence of that geometric matrix system and its holomorphic coefficient domain are separate obligations. [F2, step 2.1, step 4.1, algebra] ∎
