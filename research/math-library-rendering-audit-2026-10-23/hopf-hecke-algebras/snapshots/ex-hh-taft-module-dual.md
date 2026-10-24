---
id: ex-hh-taft-module-dual
kind: example
title: "A two-dimensional module and its Taft-algebra dual"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 6
deps: [def-field, lem-hh-taft-algebra-pbw-and-hopf-structure, def-hh-module-category-and-tensor-action, def-hh-left-dual-of-a-finite-hopf-module, thm-hh-left-dual-evaluation-coevaluation-and-triangle-identities, def-algebraic-dual-and-linear-functional]
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
---

## Example

Let $N>1$, let $k$ be a field with $\operatorname{char}(k)\nmid N$, and fix a primitive $N$th root of unity $\zeta\in k$. Use the Taft Hopf algebra $T_N(k,\zeta)$ with generators $g,x$, relations $g^N=1$, $x^N=0$, $gx=\zeta xg$, coproduct $\Delta(g)=g\otimes g$, $\Delta(x)=1\otimes x+x\otimes g$, counit $\varepsilon(g)=1$, $\varepsilon(x)=0$, and antipode $S(g)=g^{-1}$, $S(x)=-xg^{-1}$. The example checks a two-dimensional module and computes its left-dual action.

## Facts & Assumptions

**Given:** $N,k,\zeta$ and the displayed Taft Hopf algebra structure, a vector space $V=kv_0\oplus kv_1$, and the algebraic dual basis $v^0,v^1$.

[F1] [[def-hh-module-category-and-tensor-action]]: a left $H$-module is unital, and tensor products use the coproduct action.

[F2] [[def-hh-left-dual-of-a-finite-hopf-module]]: the candidate dual action is $(h\cdot f)(v)=f(S(h)v)$.

[F3] [[thm-hh-left-dual-evaluation-coevaluation-and-triangle-identities]]: for finite-dimensional modules, evaluation, coevaluation, and both triangle maps are $H$-linear/identities.

[F4] [[def-algebraic-dual-and-linear-functional]] defines $V^*$ as the space of linear functionals. Here the dual coordinates are $v^0(av_0+bv_1)=a$ and $v^1(av_0+bv_1)=b$, so $v^i(v_j)=\delta_{ij}$. Linearity gives $f=f(v_0)v^0+f(v_1)v^1$ for every $f\in V^*$, so these functionals span $V^*$.

[A1] The Taft algebra has exactly the displayed generator relations and structural maps; in particular $S(x)=-xg^{-1}$.

## Verification

**Given:** The data in Facts & Assumptions.

1.1 Define $gv_0=v_0$, $gv_1=\zeta^{-1}v_1$, $xv_0=0$, and $xv_1=v_0$. Since $\zeta^N=1$, $g^N$ fixes both basis vectors; since $x^2=0$ and $N>1$, $x^N=0$. On $v_0$, both $gx$ and $\zeta xg$ vanish; on $v_1$, $gxv_1=gv_0=v_0$ and $\zeta xgv_1=\zeta x(\zeta^{-1}v_1)=v_0$. Thus all defining algebra relations hold, so $V$ is a left $T_N(k,\zeta)$-module under the supplied presentation [A1]. [A1, F1, given, algebra]

2.1 The dual action gives $g\cdot v^0=v^0$ and $g\cdot v^1=\zeta v^1$, since $S(g)=g^{-1}$. Also $x\cdot v^0=-\zeta v^1$: evaluated on $v_1$ it is $v^0(S(x)v_1)=v^0(-xg^{-1}v_1)=-\zeta$, and on $v_0$ it is zero. The functional $x\cdot v^1$ vanishes on both basis vectors, so $x\cdot v^1=0$. [A1, F2, F4, step 1.1]

3.1 On $v^0,v^1$, the dual action satisfies $g^N=1$ and $x^N=0$. For the cross relation, on $v^0$ both $g x$ and $\zeta x g$ give $-\zeta^2 v^1$, and on $v^1$ both give zero. Hence the displayed action is a left $T_N(k,\zeta)$-module action. The module is finite-dimensional, so its evaluation and coevaluation maps satisfy the identities in [F3]; explicitly the coevaluation is $v_0\otimes v^0+v_1\otimes v^1$. [A1, F3, step 2.1, algebra]

4.1 Theorem [F3] applies to this finite-dimensional Hopf module and proves the evaluation and coevaluation maps are $H$-linear. The triangle maps send $v_j$ to $\sum_i v_i v^i(v_j)=v_j$ and $v^j$ to $\sum_i v^j(v_i)v^i=v^j$ by [F4]. Thus the computed dual has the specified evaluation, coevaluation, and triangle identities. [F3, F4, step 2.1, step 3.1] ∎
