---
id: ex-hochschild-homology-of-the-ground-field
title: Hochschild homology of the ground field
kind: example
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-hochschild-chain-complex-of-a-bimodule, prop-hochschild-degree-zero-is-bimodule-coinvariants, def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring, cor-finite-iterated-tensor-products-represent-multilinear-maps, thm-unit-isomorphisms-for-module-tensor-products]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9, §9.1.1"
      url: https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

Let $k$ be a field and give $A=k$ its regular $k$-bimodule. Then

$$HH_0(k,k)\cong k,\qquad HH_j(k,k)=0\quad(j>0).$$

## Facts & Assumptions

**Given:** A field $k$, considered as a unital associative algebra over itself and with its regular bimodule.

[F1] The Hochschild chain terms are $C_0(A,M)=M$ and $C_n(A,M)=M\otimes_k A^{\otimes_k n}$ for $n\geq1$ ([[def-hochschild-chain-complex-of-a-bimodule]]).

[F2] On $m\otimes a_1\otimes\cdots\otimes a_n$, the faces are the first action $(ma_1)\otimes a_2\otimes\cdots\otimes a_n$, the internal products $m\otimes a_1\otimes\cdots\otimes(a_i a_{i+1})\otimes\cdots\otimes a_n$, and the last cyclic action $(a_n m)\otimes a_1\otimes\cdots\otimes a_{n-1}$ ([[def-hochschild-chain-complex-of-a-bimodule]]).

[F3] Set $b_0=0$; for $n\geq1$, the Hochschild boundary is $b_n=\sum_{i=0}^n(-1)^i\delta_i^{(n)}$ ([[def-hochschild-chain-complex-of-a-bimodule]]).

[F4] Hochschild homology is $HH_n(A,M)=H_n(C_\bullet(A,M))$ ([[def-hochschild-chain-complex-of-a-bimodule]]).

[F5] There is a canonical isomorphism $HH_0(A,M)\cong M/\operatorname{span}_k\{am-ma:a\in A,m\in M\}$ ([[prop-hochschild-degree-zero-is-bimodule-coinvariants]]).

[F6] For zero variables, the diagonal Koszul sequence and exterior generators are empty, $R=k$, $R^e=k$, and the complex is $k$ in degree zero with identity augmentation ([[def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring]]).

[F7] A finite parenthesized tensor product represents multilinear maps, and different parenthesizations are related by canonical isomorphisms preserving pure tensors ([[cor-finite-iterated-tensor-products-represent-multilinear-maps]]).

[F8] The maps $k\otimes_kV\to V$ and $V\otimes_kk\to V$ given by scalar actions are isomorphisms ([[thm-unit-isomorphisms-for-module-tensor-products]]).

## Proof

**Proof technique:** direct.

1.1 For $n\geq1$, write a pure tensor in $C_n(k,k)$ as $c_0\otimes\cdots\otimes c_n$. The multilinear product map $\phi_n(c_0\otimes\cdots\otimes c_n)=c_0\cdots c_n$ is well-defined by [F7] and is an isomorphism by repeated application of the tensor-unit maps [F8]; its inverse sends $c$ to $c\otimes1\otimes\cdots\otimes1$. Indeed, the balancing relations let each scalar factor move to the first slot, so the composite with $\phi_n$ is the identity in either order. For $n=0$, use the identity $C_0(k,k)=k$. Thus identify every chain group with $k$. [F1, F7, F8, given, algebra]

2.1 Under these identifications every face $\delta_i^{(n)}$ preserves the product of the scalar entries: the first and last formulas in [F2] use the regular scalar actions, while each internal formula multiplies two scalars. Hence each face is $\operatorname{id}_k$, so by [F3], $b_n=\sum_{i=0}^n(-1)^i\operatorname{id}_k$; pairing consecutive terms gives $b_n=0$ for odd $n$ and $b_n=\operatorname{id}_k$ for even $n\geq2$. Also $b_0=0$. In particular, $b_1=0$ and $b_2=\operatorname{id}_k$. [F2, F3, step 1.1, given, algebra]

3.1 Since $C_0(k,k)=k$ and $b_0=b_1=0$, the degree-zero homology is $k$. Equivalently, [F5] gives the quotient by the span of $ab-ba$, which is zero because $k$ is commutative. If $j>0$ is even, then $b_j=\operatorname{id}_k$, so the cycle group is zero. If $j$ is odd, then $b_j=0$ and $b_{j+1}=\operatorname{id}_k$, so every cycle is a boundary. By [F4], these are exactly $HH_0(k,k)\cong k$ and $HH_j(k,k)=0$ for $j>0$. [F1, F3, F4, F5, step 2.1, given, algebra]

4.1 Let $K$ be the diagonal Koszul complex for the zero-variable polynomial ring $R=k$. By [F6], $K$ is $k$ in degree zero and zero in positive degrees, with identity augmentation. The maps $p:C_\bullet(k,k)\to K$ and $i:K\to C_\bullet(k,k)$ are identity in degree zero and zero in positive degrees for $p$, and the degree-zero identity inclusion for $i$. Define $h_n:C_n(k,k)\to C_{n+1}(k,k)$ to be the identity under [F1]'s scalar identifications when $n$ is odd and zero when $n$ is even; put $h_{-1}=0$. For $n=0$, $b_1h_0+h_{-1}b_0=0=\operatorname{id}-ip$. For $n>0$, the parity formulas in step 2.1 give $b_{n+1}h_n+h_{n-1}b_n=\operatorname{id}_{C_n}$. Thus $h$ is a chain homotopy from $\operatorname{id}_{C_\bullet}$ to $ip$, and $C_\bullet(k,k)$ is chain-homotopy equivalent to the empty diagonal Koszul complex. Its homology matches the calculation in step 3.1. This direct comparison uses no general AC-bearing polynomial comparison theorem and no choice. [F1, F2, F3, F6, step 2.1, step 3.1, given, algebra] ∎

## Source notes

Weibel, *An Introduction to Homological Algebra*, §9.1.1, printed p. 300/PDF p. 0, lines 6–19, gives the unnormalized Hochschild chain and face conventions and the degree-zero coinvariant formula. It does not perform the alternating sum calculation for $A=k$; the scalar identifications, parity calculation, and chain homotopy above are supplied directly here.
