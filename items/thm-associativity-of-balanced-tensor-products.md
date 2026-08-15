---
id: thm-associativity-of-balanced-tensor-products
kind: theorem
title: "Associativity of tensor products for compatible bimodules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-bimodule-actions-induced-on-tensor-products, thm-universal-property-of-module-tensor-products, prop-elementary-tensor-formulas-descend-exactly-when-balanced]
aliases: []
landmark: true
short: "Associativity of tensor products"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stacks Project, Section 10.12: Tensor products"
      url: "https://stacks.math.columbia.edu/tag/00CV"
pipeline_run: null
---

## Statement

Let $M$ be a right $R$-module, let ${}_RN_S$ be an $(R,S)$-bimodule, and let $P$ be a left $S$-module. There is a canonical group isomorphism

$$\alpha_{M,N,P}:(M\otimes_RN)\otimes_SP\longrightarrow M\otimes_R(N\otimes_SP)$$

determined by

$$\alpha_{M,N,P}((m\otimes n)\otimes p)=m\otimes(n\otimes p).$$

It respects any compatible outer module actions and is natural in $M,N,P$.

## Facts & Assumptions

**Given:** A right $R$-module $M$, an $(R,S)$-bimodule $N$, and a left $S$-module $P$.

[L1] The outer actions make $M\otimes_RN$ a right $S$-module and $N\otimes_SP$ a left $R$-module, with the stated elementary-tensor formulas ([[thm-bimodule-actions-induced-on-tensor-products]]).

[L2] Balanced pairings induce unique homomorphisms from tensor products ([[thm-universal-property-of-module-tensor-products]]).

[L3] A formula on elementary tensors descends exactly when its underlying pairing is balanced ([[prop-elementary-tensor-formulas-descend-exactly-when-balanced]]).

## Proof

**Proof technique:** direct.

1.1 For fixed $p\in P$, the pairing $(m,n)\mapsto m\otimes(n\otimes p)$ is $R$-balanced: $(mr,n)$ and $(m,rn)$ have the same image by the outer left $R$-action in [L1]. Thus [L2] and [L3] give a homomorphism $a_p:M\otimes_RN\to M\otimes_R(N\otimes_SP)$. [given, L1, L2, L3]

1.2 For fixed $m\in M$, the pairing $(n,p)\mapsto(m\otimes n)\otimes p$ is $S$-balanced, so [L2] and [L3] give $b_m:N\otimes_SP\to(M\otimes_RN)\otimes_SP$. [given, L1, L2, L3]

2.1 The pairing $(x,p)\mapsto a_p(x)$ from $(M\otimes_RN)\times P$ is $S$-balanced. On generators, $a_p((m\otimes n)s)=m\otimes((ns)\otimes p)=m\otimes(n\otimes sp)=a_{sp}(m\otimes n)$ by [L1], and additivity extends the equality to every $x$. Hence [L2] gives $\alpha_{M,N,P}$ with the displayed formula. [step 1.1, L1, L2, L3]

2.2 The pairing $(m,y)\mapsto b_m(y)$ is $R$-balanced. It is enough to check generators $y=n\otimes p$, where $b_{mr}(n\otimes p)=((mr)\otimes n)\otimes p=(m\otimes rn)\otimes p=b_m((rn)\otimes p)=b_m(r(n\otimes p))$ by [L1]. Therefore [L2] gives $\beta:M\otimes_R(N\otimes_SP)\to(M\otimes_RN)\otimes_SP$. [step 1.2, L1, L2, L3]

3.1 The composite $\beta\alpha$ fixes every tensor $(m\otimes n)\otimes p$, and $\alpha\beta$ fixes every tensor $m\otimes(n\otimes p)$; successive applications of uniqueness in [L2] show that these composites are the identity maps. [step 2.1, step 2.2, L2]

3.2 The same elementary-tensor calculation shows compatibility with any outer actions, and replacing $m,n,p$ by their images under compatible homomorphisms proves naturality because both candidate composites agree on all elementary tensors. [step 2.1, step 2.2, L1, L2]

4.1 Thus $\alpha_{M,N,P}$ is the asserted canonical natural isomorphism with inverse $\beta$. [step 3.1, step 3.2] ∎
