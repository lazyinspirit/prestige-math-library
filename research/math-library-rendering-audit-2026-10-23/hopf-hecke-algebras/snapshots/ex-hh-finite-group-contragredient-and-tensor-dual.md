---
id: ex-hh-finite-group-contragredient-and-tensor-dual
kind: example
title: "The tensor product and contragredient dual of a finite-group module"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 6
deps: [def-field, def-group, def-hh-module-category-and-tensor-action, thm-hh-bialgebra-module-tensor-coherence, def-hh-left-dual-of-a-finite-hopf-module, thm-hh-left-dual-evaluation-coevaluation-and-triangle-identities, def-algebraic-dual-and-linear-functional]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Let $C_2=\{1,s\}$ with $s^2=1$, let $H=k[C_2]$, and give $V=ke_0\oplus ke_1$ the representation $s e_0=e_1$, $s e_1=e_0$. With $\Delta(g)=g\otimes g$, $\varepsilon(g)=1$, and $S(g)=g^{-1}$ on group elements, the tensor product action is diagonal. The left-dual action in this page's convention is the contragredient action $(g\cdot f)(v)=f(g^{-1}v)$.

## Facts & Assumptions

**Given:** A field $k$, the group $C_2=\{1,s\}$ with $s^2=1$, $H=k[C_2]$, the displayed two-dimensional representation $V$, and its basis dual $e^0,e^1$.

[F1] [[def-group]]: a group has an associative multiplication and an identity and each element has an inverse.

[F2] [[def-hh-module-category-and-tensor-action]]: the tensor action is $h(v\otimes w)=\sum h_{(1)}v\otimes h_{(2)}w$ and the unit acts by the counit.

[F3] [[def-hh-left-dual-of-a-finite-hopf-module]]: the dual action is $(h\cdot f)(v)=f(S(h)v)$ and the coevaluation tensor is $\sum_i e_i\otimes e^i$.

[F4] [[thm-hh-left-dual-evaluation-coevaluation-and-triangle-identities]]: for a finite-dimensional module these evaluation and coevaluation maps are $H$-linear and satisfy both triangle identities.

## Verification

**Given:** The data in Facts & Assumptions.

1.1 The group algebra $H$ has basis $1,s$ and relation $s^2=1$. Define $\Delta(1)=1\otimes1$, $\Delta(s)=s\otimes s$, $\varepsilon(1)=\varepsilon(s)=1$, and $S(1)=1$, $S(s)=s$, extending linearly. For $a,b,c,d\in k$, both $\Delta((a+bs)(c+ds))$ and $\Delta(a+bs)\Delta(c+ds)$ equal $(ac+bd)1\otimes1+(ad+bc)s\otimes s$; both $\varepsilon((a+bs)(c+ds))$ and $\varepsilon(a+bs)\varepsilon(c+ds)$ equal $(a+b)(c+d)$. These maps preserve units. Coassociativity and the two counit identities hold on $1,s$ by direct substitution, hence on $H$ by linearity. Also $S(s)s=sS(s)=1$ and the same holds for $1$, so both antipode identities hold on the basis and then on all of $H$. Thus these formulas give the required Hopf structure. [F1, given, algebra]

2.1 The operator $s$ on $V$ squares to the identity, so the stated action defines a unital $H$-module. The diagonal tensor action sends $e_i\otimes e_j$ to $e_{1-i}\otimes e_{1-j}$ because $\Delta(s)=s\otimes s$; applying it twice fixes every basis tensor. The unit module has $s$ acting by $1$. [F2, given, step 1.1]

2.2 Since $S(s)=s^{-1}=s$, $(s\cdot e^0)(e_0)=e^0(e_1)=0$ and $(s\cdot e^0)(e_1)=e^0(e_0)=1$, hence $s\cdot e^0=e^1$. Similarly $s\cdot e^1=e^0$. This is exactly the contragredient action, and it squares to the identity, so it is a left $H$-module. [F3, step 1.1, algebra]

3.1 The evaluation pairing is invariant because $\operatorname{ev}(s\cdot(e^i\otimes e_j))=\operatorname{ev}(e^{1-i}\otimes e_{1-j})=\delta_{1-i,1-j}=\delta_{i,j}=\varepsilon(s)\operatorname{ev}(e^i\otimes e_j)$. The coevaluation tensor $e_0\otimes e^0+e_1\otimes e^1$ is fixed by $s$, since $s$ interchanges its two summands; it is therefore $H$-linear. Since $1,s$ span $H$, these checks prove linearity for all $h\in H$. [F2, F3, given, step 2.1, step 2.2]

4.1 The two triangle composites send $e_j$ to $\sum_i e_i e^i(e_j)=e_j$ and send $e^j$ to $\sum_i e^j(e_i)e^i=e^j$. The basis vectors span $V$ and $V^*$, so both composites are identities; this also verifies the finite-group instance of [F4]. [F3, F4, step 3.1, algebra] ∎
