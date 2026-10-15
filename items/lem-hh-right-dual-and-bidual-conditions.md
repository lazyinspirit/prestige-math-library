---
id: lem-hh-right-dual-and-bidual-conditions
kind: lemma
title: "Right duals and the antipode twist on biduals"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 6
deps: [thm-hh-left-dual-evaluation-coevaluation-and-triangle-identities, thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication, def-hh-hopf-algebra-and-antipode, def-hh-module-category-and-tensor-action, lem-hh-finite-tensor-duality-and-canonical-coevaluation, thm-universal-property-of-module-tensor-products, def-algebraic-dual-and-linear-functional]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (MIT 18.769 full course lecture notes, 2009)"
      url: "https://ocw.mit.edu/courses/18-769-topics-in-lie-theory-tensor-categories-spring-2009/8a51a9d1b57a35a0e6a5804bdea6e146_MIT18_769S09_notes.pdf"
    - title: "Christoph Schweigert, Hopf algebras, quantum groups and topological field theory (Hamburg University full lecture notes, 2025)"
      url: "https://christophschweigert.github.io/skripten/hskript.pdf"
---

## Statement

Let $H$ be a Hopf algebra over a field $k$ with antipode $S$, and assume for the right-dual construction that $S$ is bijective. Let $V$ be a finite-dimensional left $H$-module and let $V^*=\operatorname{Hom}_k(V,k)$ be its algebraic dual. In this page's convention, define the right-dual action on $V^*$ by

$$ (h\cdot f)(v):=f(S^{-1}(h)\cdot v), $$

with evaluation $\widetilde{\operatorname{ev}}:V\otimes V^*\to k$, $v\otimes f\mapsto f(v)$, and coevaluation $\widetilde{\operatorname{coev}}:k\to V^*\otimes V$, $1\mapsto\sum_i e^i\otimes e_i$. These maps are $H$-linear and satisfy the two right-dual triangle identities. The bijectivity hypothesis is used only for this $S^{-1}$ construction; the left-dual construction earlier on the page needs no such hypothesis.

Let $j_V:V\to V^{**}$ be the ordinary vector-space bidual map, $j_V(v)(f)=f(v)$, where $V^{**}$ has the twice-applied left-dual action. Then

$$ h\cdot j_V(v)=j_V(S^2(h)\cdot v). $$

For a fixed finite-dimensional module $V$, $j_V$ is $H$-linear exactly when $h$ and $S^2(h)$ act identically on $V$ for every $h$. Thus $S^2=\mathrm{id}_H$ is sufficient for $j_V$ to be $H$-linear on every finite-dimensional module. If $H$ itself is finite-dimensional, the converse follows by taking its regular module. If an invertible group-like element $p$ satisfies $S^2(h)=php^{-1}$, then $j_{p,V}(v):=j_V(p\cdot v)$ is a natural monoidal $H$-module isomorphism $V\to V^{**}$ on finite-dimensional modules.

## Facts & Assumptions

**Given:** A field $k$, a Hopf algebra $H$ with antipode $S$, a bijective $S$, a finite-dimensional left $H$-module $V$, and, for the final assertion, an invertible group-like $p\in H$ with $S^2(h)=php^{-1}$.

[F1] [[thm-hh-left-dual-evaluation-coevaluation-and-triangle-identities]]: for the left-dual action $h\cdot f(v)=f(S(h)v)$, $S$ is antimultiplicative, evaluation and coevaluation are $H$-linear, and the two left-dual triangle identities hold without assuming $S$ bijective.

[F2] [[def-hh-module-category-and-tensor-action]]: tensor products carry the diagonal action from $\Delta$, and the unit module carries the action from $\varepsilon$.

[F3] [[lem-hh-finite-tensor-duality-and-canonical-coevaluation]]: finite dual bases give canonical tensors corresponding to identity maps, and the vector-space evaluation and coevaluation maps satisfy the two triangle identities.

[F4] [[thm-universal-property-of-module-tensor-products]]: bilinear pairings define linear evaluation maps on algebraic tensor products.

[F5] [[def-algebraic-dual-and-linear-functional]]: $V^*=\operatorname{Hom}_k(V,k)$ is the space of all $k$-linear functionals, with pointwise operations.

[A1] The antipode equations are $\sum S(h_{(1)})h_{(2)}=\varepsilon(h)1_H=\sum h_{(1)}S(h_{(2)})$, and $S$ is bijective.

[A2] In the pivot branch, $\Delta(p)=p\otimes p$, $\varepsilon(p)=1$, $p$ is invertible, and $S^2(h)=php^{-1}$ for every $h$.

## Proof

**Proof technique:** direct.

1.1 Since $S$ is antimultiplicative by [F1] and bijective by [A1], $S^{-1}$ is also antimultiplicative: applying $S$ to $S^{-1}(g)S^{-1}(h)$ gives $hg$, so injectivity gives $S^{-1}(hg)=S^{-1}(g)S^{-1}(h)$. Also $S^{-1}(1_H)=1_H$. [A1, F1, algebra]

1.2 For $h\in H$, $f\in V^*$, $h\cdot j_V(v)(f)=j_V(v)(S(h)\cdot f)=(S(h)\cdot f)(v)=f(S^2(h)v)=j_V(S^2(h)v)(f)$. Thus the bidual formula holds. For finite-dimensional $V$, $j_V$ is a vector-space isomorphism by [F3], so it is $H$-linear exactly when $S^2(h)v=hv$ for all $h,v$. In particular $S^2=\mathrm{id}_H$ suffices for all finite-dimensional modules. If $H$ is finite-dimensional and this condition holds for every finite-dimensional module, apply it to the regular module $H$ and $v=1_H$ to get $S^2(h)=h$. [F1, F3, algebra]

2.1 For $h,g\in H$, $v\in V$, and $f\in V^*$, $1_H\cdot f=f$ and $(h\cdot(g\cdot f))(v)=f(S^{-1}(g)S^{-1}(h)v)=f(S^{-1}(hg)v)=((hg)\cdot f)(v)$ by step 1.1. Linearity follows from linearity of $S^{-1}$, the action on $V$, and the algebraic dual operations [F5]. Thus $V^*$ is a left $H$-module. [A1, F5, step 1.1]

2.2 Applying $S^{-1}$ to the two antipode equations in [A1], and using antimultiplicativity of $S^{-1}$ from step 1.1, yields $\sum S^{-1}(h_{(2)})h_{(1)}=\varepsilon(h)1_H$ and $\sum h_{(2)}S^{-1}(h_{(1)})=\varepsilon(h)1_H$. [A1, step 1.1, algebra]

2.3 Under [A2], $h\cdot j_{p,V}(v)=j_V(S^2(h)pv)=j_V(php^{-1}pv)=j_V(phv)=j_{p,V}(h\cdot v)$, and $j_{p,V}$ is bijective because both $j_V$ and multiplication by $p$ on $V$ are bijective. If $f:V\to W$ is $H$-linear, then $f(pv)=pf(v)$, so $j_p$ is natural. Finally $p$ acts on $V\otimes W$ by $p\otimes p$ because it is group-like; therefore $j_{p,V\otimes W}(v\otimes w)$ corresponds to $j_{p,V}(v)\otimes j_{p,W}(w)$ under the canonical finite tensor-dual identification [F3]. Since $\varepsilon(p)=1$, the same compatibility holds on the unit object. Thus $j_p$ is monoidal. [A2, F2, F3, step 1.2]

3.1 For $v\in V$ and $f\in V^*$, $\widetilde{\operatorname{ev}}(h\cdot(v\otimes f))=\sum f(S^{-1}(h_{(2)})h_{(1)}v)=\varepsilon(h)f(v)=h\cdot\widetilde{\operatorname{ev}}(v\otimes f)$ by the first identity in step 2.2. The bilinear evaluation descends to $V\otimes V^*$ by [F4], so it is $H$-linear. [F2, F4, step 2.2]

3.2 Let $\Theta:V^*\otimes V\to\operatorname{End}_k(V)$ send $f\otimes v$ to $[x\mapsto f(x)v]$. By [F3], $\sum_i e^i\otimes e_i$ corresponds to $\mathrm{id}_V$. For $x\in V$, the image under $\Theta$ of $h\cdot\sum_i e^i\otimes e_i$ is $\sum_i (h_{(1)}\cdot e^i)(x)\,h_{(2)}e_i=\sum h_{(2)}S^{-1}(h_{(1)})x=\varepsilon(h)x$ by step 2.2 and the dual-basis identity. Hence $h\cdot\widetilde{\operatorname{coev}}(1)=\varepsilon(h)\widetilde{\operatorname{coev}}(1)=\widetilde{\operatorname{coev}}(h\cdot1)$; coevaluation is $H$-linear. [A1, F2, F3, step 2.2]

4.1 On $v\in V$, the first triangle composite gives $\sum_i e^i(v)e_i=v$; on $f\in V^*$, the second gives $\sum_i f(e_i)e^i=f$. These dual-basis expansions prove the two right-dual triangle identities. [F3, step 3.1, step 3.2]

5.1 If $V=0$, all dual spaces and coevaluation tensors are zero and the identities above are the unique maps on zero spaces. If $V$ is one-dimensional, the dual-basis sums have one term and the same computations apply. Choosing a basis of the given finite-dimensional space uses no arbitrary-index choice. The involutive-antipode implication is proved in step 1.2; its converse is stated only when $H$ is finite-dimensional. [A1, A2, step 4.1, step 1.2, step 2.3] ∎
