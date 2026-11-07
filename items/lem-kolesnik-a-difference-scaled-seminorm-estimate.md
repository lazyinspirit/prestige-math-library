---
id: lem-kolesnik-a-difference-scaled-seminorm-estimate
kind: lemma
title: "Scaled smooth approximation for A-process finite differences"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: [thm-newton-leibniz-with-interior-derivative, thm-differentiation-under-the-integral-sign, thm-chain-rule-for-total-derivatives, thm-algebra-of-derivatives, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]
justified_by: []
proof_strategy: direct
axiom_use: "The proof uses the displayed compact calculus suppliers and introduces no additional choice hypothesis."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "G. A. Kolesnik, On the method of exponent pairs"
      url: "https://www.impan.pl/shop/publication/transaction/download/product/104633"
      locator: "§4, the A-process difference phase"
verification: {}
---

## Statement

Let $n\ge1$, $1\le m\le n$, $L\ge0$, and $\alpha_1,\ldots,\alpha_n\in\mathbb R$. Put $g(u)=\prod_{j=1}^n u_j^{\alpha_j}$ on the positive orthant. Let $f$ be a real $C^{L+2}$ function on a neighborhood of $[1,2]^n$, let $\Delta\ge0$, and suppose that for every multiindex $a$ with $|a|\le L+1$,
$$\sup_{u\in[1,2]^n}|\partial^a(f-g)(u)|\le\Delta.$$
For $0<\rho\le1/4$, put $\widetilde v=(v_1,\ldots,v_m,0,\ldots,0)$ and
$$\Phi_\rho(u,v)=\frac{f(u+\rho\widetilde v)-f(u)}\rho,\qquad G(u,v)=\sum_{i=1}^m v_i\partial_i g(u).$$
On the box $1\le u_i\le2-2\rho$ for $i\le m$, $1\le u_j\le2$ for $j>m$, and $1\le v_i\le2$, every mixed derivative in $(u,v)$ of total order at most $L$ satisfies
$$|\partial^a_u\partial^b_v(\Phi_\rho-G)|\le C_{n,m,L,\alpha}(\Delta+\rho).$$
The constant is independent of $f,\Delta,\rho,u,v$. In particular, the leading A-difference is the explicit finite sum of monomials $\sum_i\alpha_i v_i u_i^{-1}\prod_j u_j^{\alpha_j}$, and the estimate remains meaningful when one of its derivatives vanishes. It is an additive scaled-seminorm statement; it does not show that the literal relative monomial class is closed under differencing or prove an exponential-sum estimate for the enlarged class.

## Statement references

[Kolesnik, *On the method of exponent pairs*, §4](https://www.impan.pl/shop/publication/transaction/download/product/104633)

## Facts & Assumptions

**Given:** The dimension, derivative order, exponents, function, error, parameter and box in the Statement.

[F1] A continuously differentiable real function on a compact interval satisfies Newton–Leibniz. [[thm-newton-leibniz-with-interior-derivative]]

[F2] Differentiation under the integral is valid when each derivative is dominated by an integrable bound; finite chain and product rules apply to the smooth integrands. [[thm-differentiation-under-the-integral-sign]] [[thm-chain-rule-for-total-derivatives]] [[thm-algebra-of-derivatives]]

[F3] Continuous functions on compact Euclidean boxes are bounded. [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]

## Proof

1.1 The given bounds on $u,v,\rho$ ensure $u+t\rho\widetilde v\in[1,2]^n$ for $0\le t\le1$. The fundamental theorem of calculus along this segment gives $$\Phi_\rho(u,v)=\sum_{i=1}^m v_i\int_0^1\partial_i f(u+t\rho\widetilde v)\,dt.$$ The same formula holds with $f-g$ in place of $f$. [F1, given, algebra]

2.1 Apply any $\partial_u^a\partial_v^b$ with $|a|+|b|\le L$ to the integral for $f-g$. Differentiating $v_i$ costs at most one derivative; each other $v$ derivative gives a factor $t\rho$, and every resulting derivative of $f-g$ has order at most $L+1$. The finite number of terms, $1\le v_i\le2$, $0\le t,\rho\le1$, and the stated seminorm bounds therefore give a uniform bound $C_{n,m,L}\Delta$. The differentiations are justified by [F2] because the relevant derivatives are continuous and bounded on the compact parameter set. [F2, F3, step 1.1, given, algebra]

3.1 For $f=g$, subtract $G$ inside the integral of step 1.1 and apply the fundamental theorem once more: $$\Phi_{\rho,g}-G=\rho\sum_{i,j\le m}v_iv_j\int_0^1\!\int_0^t\partial_{ij}g(u+s\rho\widetilde v)\,ds\,dt.$$ Every mixed derivative of order at most $L$ of the right side is $O_{n,m,L,\alpha}(\rho)$: all derivatives of $g$ through order $L+2$ are bounded on $[1,2]^n$, and each derivative hitting the shifted argument contributes at most one factor $\rho$. Combine this with step 2.1. The formula for $G$ follows by differentiating the monomial. [F1, F2, F3, step 1.1, step 2.1, given, algebra] ∎
