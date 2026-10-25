---
id: lem-yangian-rtt-component-commutator-form
kind: lemma
title: "The RTT relation has an explicit component commutator form"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-yangian-gl-n-rtt-presentation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "A. I. Molev, M. L. Nazarov, and G. I. Olshanski, Yangians and classical Lie algebras"
      url: "https://arxiv.org/pdf/hep-th/9409025"
      locator: "§1.8: the component form of the RTT relations for Y(gl_N)."
    - title: "L. D. Faddeev, How Algebraic Bethe Ansatz Works for Integrable Model"
      url: "https://arxiv.org/pdf/hep-th/9605187"
      locator: "§3: component RTT relations in the fundamental rational model."
---

## Statement

For the presentation in [[def-yangian-gl-n-rtt-presentation]], set $x=u-v$. For every $1\le i,j,k,l\le N$, its matrix RTT relation is equivalent coefficientwise to

$$x[t_{ij}(u),t_{kl}(v)]=i\bigl(t_{kj}(v)t_{il}(u)-t_{kj}(u)t_{il}(v)\bigr).$$

## Facts & Assumptions

**Given:** The two-auxiliary-leg RTT matrix relation with $R_N(x)=xI+iP_N$.

[F1] [[def-yangian-gl-n-rtt-presentation]]: $R_N(x)=xI+iP_N$ with the auxiliary flip $P_N(e_a\otimes e_b)=e_b\otimes e_a$, and $R_{12}(u-v)T_1(u)T_2(v)=T_2(v)T_1(u)R_{12}(u-v)$.

## Proof

1.1 In the coefficient of the auxiliary row $(i,k)$ and column $(j,l)$, the $xI$ part of the left side is $x t_{ij}(u)t_{kl}(v)$ and the $iP$ part is $i t_{kj}(u)t_{il}(v)$, because the flip sends the row $(i,k)$ to $(k,i)$. On the right side the corresponding terms are $x t_{kl}(v)t_{ij}(u)$ and $i t_{kj}(v)t_{il}(u)$, since the flip acts on the column. Thus equality of those matrix entries gives $x t_{ij}(u)t_{kl}(v)+i t_{kj}(u)t_{il}(v)=x t_{kl}(v)t_{ij}(u)+i t_{kj}(v)t_{il}(u)$. [given, F1, algebra]

2.1 Subtract the two $x$-terms and move the two $i$-terms to the other side. The result is exactly the displayed commutator relation. Conversely, if that relation holds for every four indices, the coefficient computation in step 1.1 makes every auxiliary matrix entry of the RTT difference zero, hence the full matrix relation holds. [given, F1, step 1.1, algebra] ∎
