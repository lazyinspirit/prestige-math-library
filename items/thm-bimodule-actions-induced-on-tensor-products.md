---
id: thm-bimodule-actions-induced-on-tensor-products
kind: theorem
title: "A commuting outer scalar action descends to a tensor product"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bimodule, thm-universal-property-of-module-tensor-products, prop-elementary-tensor-formulas-descend-exactly-when-balanced]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Dennis, Week 1 recap on tensor products"
      url: "https://math.uchicago.edu/~may/PEOPLE/DENNIS/week1a.pdf"
pipeline_run: null
---

## Statement

Let $M$ be a right $R$-module and let ${}_RN_S$ be an $(R,S)$-bimodule. There is a unique right $S$-module structure on $M\otimes_RN$ satisfying

$$(m\otimes n)s=m\otimes(ns).$$

Dually, if ${}_SM_R$ is an $(S,R)$-bimodule and $N$ is a left $R$-module, there is a unique left $S$-module structure satisfying

$$s(m\otimes n)=(sm)\otimes n.$$

If both outer actions are present, they commute, so the tensor product is an $(S,T)$-bimodule in the evident handed situation.

## Facts & Assumptions

**Given:** A right $R$-module $M$, an $(R,S)$-bimodule $N$, and, for the dual assertion, an $(S,R)$-bimodule $M'$ and a left $R$-module $N'$.

[L1] In a bimodule the left and right scalar actions commute: $(rn)s=r(ns)$ ([[def-bimodule]]).

[L2] Every balanced pairing into an abelian group induces a unique homomorphism from the tensor product ([[thm-universal-property-of-module-tensor-products]]).

[L3] An elementary-tensor prescription descends exactly when the corresponding pairing is balanced ([[prop-elementary-tensor-formulas-descend-exactly-when-balanced]]).

## Proof

**Proof technique:** direct.

1.1 For fixed $s\in S$, the pairing $(m,n)\mapsto m\otimes(ns)$ is additive in both variables and is balanced because $(mr)\otimes(ns)=m\otimes r(ns)=m\otimes(rn)s$ by [L1]. [given, L1, algebra]

1.2 The left-handed construction is identical: for fixed $s\in S$, the pairing $(m',n')\mapsto(sm')\otimes n'$ is balanced by the commuting actions, and the induced maps satisfy the left module laws on elementary tensors. [L1, L2, L3, algebra]

2.1 By [L2] and [L3], step 1.1 induces an additive endomorphism $x\mapsto xs$ of $M\otimes_RN$ with $(m\otimes n)s=m\otimes(ns)$. [step 1.1, L2, L3]

3.1 On every elementary tensor one has $(x(s+s'))=xs+xs'$, $(xs)s'=x(ss')$, and $x1_S=x$, using the right $S$-module laws of $N$. In each identity the two sides are additive maps that induce the same balanced pairing, so uniqueness in [L2] makes them equal on all $x$. Thus step 2.1 defines a right $S$-module structure. [step 2.1, L2, algebra]

4.1 When a left $S$-action and a right $T$-action are both present, $s((m\otimes n)t)=(sm)\otimes(nt)=(s(m\otimes n))t$ on elementary tensors, so the actions commute. [step 3.1, step 1.2, algebra]

5.1 The formulas determine every action map on generators, so uniqueness follows from [L2]. [step 2.1, step 1.2, L2] ∎
