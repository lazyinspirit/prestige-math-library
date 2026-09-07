---
id: "lem-finite-dimensional-skeletal-exactness-computes-axiomatic-homology"
kind: "lemma"
title: "Finite dimensional skeletal exactness computes axiomatic homology"
deps: ["lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, 15§2, second theorem and full exact-diagram proof, pp.119–120"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "15§2, second theorem and full exact-diagram proof, pp.119–120"
status: "draft"
origin: "pipeline"
proof_strategy: "Induct on dimension to prove vanishing above dimension and stabilization below the attaching dimension. In the three-skeleton diagram send x to the class of rho(y) for any skeletal lift y; check existence, independence, inverse and pair-boundary compatibility. Stop the stabilization at the finite top dimension; no colimit assertion is used here."
---

## Statement

For every finite-dimensional CW pair $(X,A)$ and ordinary theory $h$, there is a canonical isomorphism
$$h_n(X,A)\cong H_n(C_*^h(X,A))$$
for every integer $n$, natural for cellular maps. It is the skeletal lift isomorphism described below and commutes with the homology connecting maps of pairs. The number of cells need not be finite.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] For a CW pair $(X,A)$ and an ordinary theory $h$ with coefficient $G$, put $F_{-1}=A$ and $F_r=A\cup X^r$ for $r\ge0$. Set $$C_r^h(X,A)=h_r(F_r,F_{r-1})\quad(r\ge0),\qquad C_r^h=0\quad(r<0).$$ Each $C_r^h$ is the direct sum of copies of $G$ indexed by the relative $r$-cells. Define $d_0=0$ and for $r\ge1$ let $d_r$ be the triple boundary to $h_{r-1}(F_{r-1},A)$ followed by its map to $h_{r-1}(F_{r-1},F_{r-2})$. Then $d_{r-1}d_r=0$, naturally for cellular maps of CW pairs. ([[lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair]])

## Proof

1.1 Use the filtration and notation of F1. Write $E_q^r=h_q(F_r,A)$. The triple sequence and concentration of $h_q(F_r,F_{r-1})$ in degree $r$ give $E_q^r=0$ for $q<0$ or $q>r$, inductively from $E_q^{-1}=0$. They also give $E_q^{r-1}\to E_q^r$ an isomorphism for $q<r-1$, and a surjection for $q=r-1$. Since the filtration terminates, $E_n^{n+1}\cong h_n(X,A)$, taking $F_r=X$ above the top dimension. [F1]

2.1 For $n\ge0$, $\rho_n:E_n^n\to C_n^h$ is injective since $E_n^{n-1}=0$. Likewise $\rho_{n-1}:E_{n-1}^{n-1}\to C_{n-1}^h$ is injective when $n\ge1$. Exactness then yields $\rho_n(E_n^n)=\ker d_n$; for $n=0$ this says $E_0^0=C_0^h$ since $E_*^{-1}=0$. [F1, step 1.1]

3.1 The surjection $i:E_n^n\to E_n^{n+1}$ has kernel $\operatorname{im}\delta_{n+1}$. Since $\rho_n\delta_{n+1}=d_{n+1}$, define $\alpha(x)=[\rho_n(y)]$ for any lift $i(y)=x$. Two lifts differ by a $\delta_{n+1}$ image, so the class is independent. Every cycle is $\rho_n(y)$ by the preceding step, giving surjectivity. If $\rho_n(y)=d_{n+1}(z)$, injectivity of $\rho_n$ implies $y=\delta_{n+1}(z)$ and hence $x=0$, proving injectivity. [F1, step 2.1]

4.1 Every map of the filtered exact diagrams carries a lift to a lift and commutes with $\rho,\delta,i$, so it commutes with $\alpha$. This proves cellular naturality and uniqueness of the isomorphism defined by the lift rule. For pair boundaries use the same construction on the cofiber sequence $A_+\to X_+\to X_+/A_+\to\Sigma A_+$. Give each suspension cell the cone orientation. Its cellular chain group in degree $n+1$ is the reduced degree-$n$ group of $A_+$, and its boundary is the suspended boundary with the cone sign convention. The cofiber map sends a relative cellular cycle represented by a chain $c$ of $X$ to the suspended class of $dc\in C_{n-1}^h(A)$: the faces outside $A$ cancel because $c$ was a relative cycle. In the exact diagram this is exactly the triple connecting map. Desuspending therefore identifies the axiomatic pair boundary with the chain connecting map $[c]\mapsto[dc]$. The lift construction commutes with suspension because its $\rho$ and $\delta$ maps do. [F1, step 3.1]

5.1 The direct-sum decomposition by relative cells splits $0\to C_*^h(A)\to C_*^h(X)\to C_*^h(X,A)\to0$ degreewise, so the preceding chain-boundary formula is defined for arbitrary $G$, without a flatness assumption. Negative degrees are zero by the first step. Empty pairs and pairs with no relative cells give zero on both sides. [F1, step 1.1, step 4.1] ∎
