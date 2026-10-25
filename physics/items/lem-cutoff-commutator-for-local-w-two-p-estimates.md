---
id: lem-cutoff-commutator-for-local-w-two-p-estimates
kind: lemma
title: The cutoff commutator in the local $W^{2,p}$ estimates
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 0
deps: [def-sobolev-space-wkp-and-its-norm, thm-holder-inequality-for-integrals, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§7.6, the cutoff-and-localization step of the interior $W^{2,p}$ estimate, printed pp. 137-139 (read in full)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "§10.4, the localized equation and its commutator terms, printed pp. 243-247 (read in full)"
    - title: "John Villavert, Elementary Theory and Methods for Elliptic Partial Differential Equations (2017; complete 220-page lecture notes)"
      url: "http://www2.math.ou.edu/~villavert/research%20papers/elementary%20theory%20and%20methods%20for%20elliptic%20partial%20differential%20equations.pdf"
      locator: "Part I of the proof of Theorem 3.7, the cutoff expansion and the absorption of the first-order terms, printed pp. 105-106 (read in full)"
---

## Statement

Assume Countable Choice. Let $n\ge1$, $1<p<\infty$, $R>0$, and let $L=a^{ij}\partial_i\partial_j+b^i\partial_i+c$ have bounded coefficients on $B_R(x_0)$ with $|A|\le\Lambda$, $|b|\le M_b$ and $|c|\le M_c$, where $|A|:=\max_{i,j}|a^{ij}|$. Let $\eta\in C_c^\infty(B_R(x_0))$ satisfy $|D\eta|\le C_1R^{-1}$ and $|D^2\eta|\le C_2R^{-2}$, and let $u\in W^{2,p}(B_R(x_0))$. Then almost everywhere
$$L(\eta u)=\eta\,Lu+(a^{ij}+a^{ji})(\partial_i\eta)\partial_ju+\bigl(a^{ij}\partial_i\partial_j\eta+b^i\partial_i\eta\bigr)u,$$
and consequently
$$\|L(\eta u)-\eta\,Lu\|_{L^p}\le C_n\Bigl(\Lambda C_1R^{-1}\|Du\|_{L^p}+\bigl(\Lambda C_2R^{-2}+M_bC_1R^{-1}\bigr)\|u\|_{L^p}\Bigr).$$
There is no second derivative of $u$ in the commutator.
No symmetry assumption on the principal coefficient matrix $A=(a^{ij})$ is needed.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\ge1$, $1<p<\infty$, $R>0$, coefficients $a^{ij},b^i,c\in L^\infty(B_R(x_0))$ with $|A|\le\Lambda$, $|b|\le M_b$, $|c|\le M_c$, a cutoff $\eta$ as in the statement, and $u\in W^{2,p}(B_R(x_0))$.

[A1] The only choice assumption is Countable Choice $\mathrm{AC}_\omega$; it enters through the Sobolev interfaces below. No full Axiom of Choice is used. ([[def-countable-choice]])

[F1] A function of class $W^{2,p}$ has weak derivatives $D_iu$ and $D_iD_ju$ in $L^p$, and the Sobolev norm is the $p$-sum of their $L^p$ norms; the $L^p$ norm obeys the triangle inequality. ([[def-sobolev-space-wkp-and-its-norm]])

[F2] The operator is $Lu=\sum_{i,j}a^{ij}\partial_i\partial_ju+\sum_i b^i\partial_iu+cu$, with the stated entrywise bounds $|a^{ij}|\le\Lambda$, $|b^i|\le M_b$, and $|c|\le M_c$ almost everywhere. No symmetry of $A=(a^{ij})$ is assumed; in particular $|a^{ij}+a^{ji}|\le2\Lambda$.

[F3] On a set of finite measure, the $L^p$ norm of a product is at most the sup-norm of one factor times the $L^p$ norm of the other. ([[thm-holder-inequality-for-integrals]])

## Proof

**Proof technique:** direct.

1.1 Product rule for the cutoff. Since $\eta\in C_c^\infty(B_R(x_0))$, for every test function $\varphi\in C_c^\infty(B_R(x_0))$ the product $\eta\varphi$ is again a test function; the defining identity for the weak derivative of $u$ therefore gives $\int(\eta u)\partial_i\varphi=\int u\,\partial_i(\eta\varphi)-\int u\,(\partial_i\eta)\varphi=-\int(\eta D_iu+u\,\partial_i\eta)\varphi$, where the classical product rule was used on $\eta\varphi$. Hence $\eta u\in W^{1,p}(B_R(x_0))$ with $D_i(\eta u)=\eta D_iu+u\,\partial_i\eta$ almost everywhere, both terms lying in $L^p$. Applying the same argument to the $W^{1,p}$ function $D_ju$ in place of $u$ gives $D_i(\eta D_ju)=\eta D_iD_ju+(\partial_i\eta)D_ju$, and combining the two identities yields $D_jD_i(\eta u)=\eta D_jD_iu+(\partial_j\eta)D_iu+(\partial_i\eta)D_ju+u\,\partial_i\partial_j\eta$ almost everywhere, all terms in $L^p$. This direct weak-derivative argument does not require $u$ or $D_ju$ to be bounded. [F1, given, algebra]

2.1 Expanding the operator. Multiplying the pointwise equation $Lu=a^{ij}\partial_i\partial_ju+b^i\partial_iu+cu$ by $\eta$ and substituting the product rule of step 1.1 gives, almost everywhere, $$L(\eta u)=a^{ij}\bigl(\eta\partial_i\partial_ju+\partial_j\eta\partial_iu+\partial_i\eta\partial_ju+\partial_i\partial_j\eta\,u\bigr)+b^i\bigl(\eta\partial_iu+\partial_i\eta\,u\bigr)+c\eta u=\eta\,Lu+(a^{ij}+a^{ji})(\partial_i\eta)\partial_ju+\bigl(a^{ij}\partial_i\partial_j\eta+b^i\partial_i\eta\bigr)u,$$ where relabelling $i$ and $j$ in the first cross term gives its coefficient $a^{ji}$; no symmetry assumption is needed. [step 1.1, F2, algebra]

3.1 $L^p$ bound. By [F2] and the cutoff bounds, $|(a^{ij}+a^{ji})\partial_i\eta\,\partial_ju|\le2\Lambda n^2C_1R^{-1}|Du|$ and $|(a^{ij}\partial_i\partial_j\eta+b^i\partial_i\eta)u|\le(\Lambda n^2C_2R^{-2}+M_bnC_1R^{-1})|u|$ almost everywhere. Taking $L^p$ norms, using the triangle inequality of [F1] and the multiplicativity of the norm against bounded factors [F3] gives $\|L(\eta u)-\eta Lu\|_{L^p}\le C_n(\Lambda C_1R^{-1}\|Du\|_{L^p}+(\Lambda C_2R^{-2}+M_bC_1R^{-1})\|u\|_{L^p})$. The dimension constant absorbs the factor $2n^2$ from the nonsymmetric cross coefficient. [step 2.1, F1, F2, F3, algebra]

4.1 Conclusion. The identity of step 2.1 involves only $u$, $Du$ and the coefficient fields, never $D^2u$, and the bound of step 3.1 is exactly the commutator estimate of the statement; the constants depend only on $n$ and the coefficient bounds, not on $u,\eta$ beyond the stated cutoff constants, and no choice beyond [A1] is used. [step 2.1, step 3.1, A1, given] ∎

## Remarks

- The two first-order terms do not cancel: they are the symmetric pair produced by the product rule, and they are the reason a local $W^{2,p}$ estimate needs the interpolation inequality to absorb $R^{-1}\|Du\|_{L^p}$.
- The cutoff is compactly supported in the ball, so $\eta u$ extends by zero to a $W^{2,p}$ function on $\mathbb R^n$; this is the localization used in the interior estimates below.
