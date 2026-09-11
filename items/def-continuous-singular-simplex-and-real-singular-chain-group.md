---
id: "def-continuous-singular-simplex-and-real-singular-chain-group"
kind: "definition"
title: "Continuous singular simplex and real singular chain group"
deps: ["def-singular-simplex-and-singular-chain-group-with-coefficients"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "DG-16 item 1; Hatcher §3.1 or Park §2 as applicable; source audit limitations in batch notes"
status: "draft"
origin: "pipeline"
---

## Definition

For a topological space $X$ and integer $k\ge0$, let $S_k(X)$ be the set of continuous maps $\Delta^k\to X$ from the standard simplex, as in [[def-singular-simplex-and-singular-chain-group-with-coefficients]]. Define
$$C_k(X;\mathbb R)=\mathbb R^{(S_k(X))}=\left\{a:S_k(X)\to\mathbb R:\{\sigma:a(\sigma)\ne0\}\text{ is finite}\right\}.$$
Addition and scalar multiplication are pointwise. Write $[\sigma]$ for the function equal to $1$ at $\sigma$ and $0$ elsewhere. Every chain has the unique expression $\sum_\sigma a_\sigma[\sigma]$ over its finite support. Set $C_k(X;\mathbb R)=0$ for $k<0$.

This is the real specialization of the cited tensor convention: the balanced bilinear map $(\sum n_\sigma[\sigma],r)\mapsto\sum rn_\sigma[\sigma]$ induces
$$C_k(X;\mathbb Z)\otimes_{\mathbb Z}\mathbb R\longrightarrow\mathbb R^{(S_k(X))}.$$
Its inverse sends $\sum a_\sigma[\sigma]$ to $\sum[\sigma]\otimes a_\sigma$. Additivity follows by collecting the finite union of supports; the tensor relations show the composites fix every $[\sigma]\otimes r$ and every $a[\sigma]$. Thus these are inverse real-linear maps. No basis selection or axiom of choice is used: the simplex basis is part of the definition.

If $X=\varnothing$ there are no simplices and the chain space is zero in every degree. If $X$ is one point, there is one simplex in every nonnegative degree and its chain space is $\mathbb R$. Constant and degenerate simplices are retained; this is the unnormalized convention.
