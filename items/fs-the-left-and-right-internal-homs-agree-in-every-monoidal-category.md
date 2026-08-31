---
id: fs-the-left-and-right-internal-homs-agree-in-every-monoidal-category
kind: false-statement
title: "FALSE: the left and right internal homs agree in every monoidal category"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-left-closed-and-right-closed-monoidal-category, def-bimodule, thm-universal-property-of-module-tensor-products]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory, Section 1.5"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
---

## Statement

The left and right internal homs agree in every monoidal category.

## Facts & Assumptions

**Given:** Let $R$ be the ring of upper-triangular $2\times2$ matrices over a field $k$, let $N=ke_{12}\subset R$, and work in the monoidal category of $R$-bimodules with tensor product $\otimes_R$. Set $X:=R/N$ and $Y:=R$.

[L1] Left and right internal homs are defined separately as right adjoints to $X\otimes-$ and $-\otimes X$ ([[def-left-closed-and-right-closed-monoidal-category]]).

[L2] An $(R,R)$-bimodule has commuting left and right actions, and balanced pairings induce unique maps from tensor products ([[def-bimodule]], [[thm-universal-property-of-module-tensor-products]]).

## Refutation

**Proof technique:** direct.

1.1 For bimodules $A,X,Y$, a bimodule map $h:A\otimes_RX\to Y$ corresponds to the bimodule map $$a\longmapsto(x\longmapsto h(a\otimes x))$$ from $A$ to $\operatorname{Hom}_{-R}(X,Y)$, where $(r\varphi s)(x)=r\varphi(sx)$. The inverse is evaluation, $(a,x)\mapsto\varphi_a(x)$; balancing and the two bimodule actions make both constructions well defined by [L2]. Thus $\operatorname{Hom}_{-R}(X,-)$ is right adjoint to $-\otimes_RX$. Similarly, maps $X\otimes_RA\to Y$ correspond to maps $A\to\operatorname{Hom}_{R-}(X,Y)$, with $(r\psi s)(x)=\psi(xr)s$. Hence [L1] identifies these as the right and left internal homs respectively. [L1, L2, given, construct, algebra]

2.1 A right $R$-linear map $f:R/N\to R$ is determined by $a:=f(1+N)$, and it is well defined exactly when $aN=0$. Thus $[X,Y]\cong\operatorname{ann}_\ell(N)=\left\{\begin{smallmatrix}0&b\\0&c\end{smallmatrix}:b,c\in k\right\}$. [step 1.1, given, algebra]

2.2 A left $R$-linear map $g:R/N\to R$ is determined by $b:=g(1+N)$, and it is well defined exactly when $Nb=0$. Thus $\langle X,Y\rangle\cong\operatorname{ann}_r(N)=\left\{\begin{smallmatrix}a&b\\0&0\end{smallmatrix}:a,b\in k\right\}$. [step 1.1, given, algebra]

3.1 These two bimodules are not isomorphic: every element of $\operatorname{ann}_r(N)$ is annihilated on the left by $e_{22}$, while $e_{22}\cdot e_{22}=e_{22}\neq0$ in $\operatorname{ann}_\ell(N)$. By [L1], the left and right internal homs therefore need not agree. [step 2.1, step 2.2, L1, algebra]

4.1 Hence the statement is false. [step 3.1] ∎
