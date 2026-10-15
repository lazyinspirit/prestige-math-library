---
id: thm-hh-left-dual-evaluation-coevaluation-and-triangle-identities
kind: theorem
title: "Evaluation, coevaluation, and triangle identities for left duals"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 5
deps: [def-hh-left-dual-of-a-finite-hopf-module, def-hh-module-category-and-tensor-action, def-hh-hopf-algebra-and-antipode, thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication, lem-hh-finite-tensor-duality-and-canonical-coevaluation, thm-universal-property-of-module-tensor-products, def-algebraic-dual-and-linear-functional]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (MIT 18.769 full course lecture notes, 2009)"
      url: "https://ocw.mit.edu/courses/18-769-topics-in-lie-theory-tensor-categories-spring-2009/8a51a9d1b57a35a0e6a5804bdea6e146_MIT18_769S09_notes.pdf"
    - title: "Christoph Schweigert, Hopf algebras, quantum groups and topological field theory (Hamburg University full lecture notes, 2025)"
      url: "https://christophschweigert.github.io/skripten/hskript.pdf"
---

## Statement

Let $H$ be a bialgebra over a field $k$ with antipode $S$, meaning a linear map satisfying

$$\sum S(h_{(1)})h_{(2)}=\varepsilon(h)1_H=\sum h_{(1)}S(h_{(2)}).$$

Let $V$ be a finite-dimensional left $H$-module and give $V^*$ the candidate action and maps of [[def-hh-left-dual-of-a-finite-hopf-module]]. Then $S(ab)=S(b)S(a)$ and $S(1_H)=1_H$; the candidate action makes $V^*$ a left $H$-module; evaluation $V^*\otimes V\to k$ and coevaluation $k\to V\otimes V^*$ are $H$-linear; and the two triangle composites are identities. No bijectivity of $S$ is assumed.

## Facts & Assumptions

**Given:** A field $k$, a bialgebra $H$ with multiplication, unit, comultiplication, counit and antipode $S$, and a finite-dimensional left $H$-module $V$. The antipode identities are exactly the two displayed equations in the Statement.

[F1] [[def-hh-left-dual-of-a-finite-hopf-module]]: the candidate dual action is $(h\cdot f)(v)=f(S(h)v)$, evaluation is $f\otimes v\mapsto f(v)$, and coevaluation is the basis-independent tensor $1\mapsto\sum_i e_i\otimes e^i$.

[F2] [[def-hh-module-category-and-tensor-action]]: the action on a tensor product of left modules is $h\cdot(x\otimes y)=\sum h_{(1)}x\otimes h_{(2)}y$, and the unit action is through $\varepsilon$.

[F3] [[def-algebraic-dual-and-linear-functional]]: $V^*$ is the vector space of all linear maps $V\to k$, with pointwise operations.

[F4] [[lem-hh-finite-tensor-duality-and-canonical-coevaluation]]: for finite-dimensional $V$, $\sum_i e_i\otimes e^i$ corresponds to $\mathrm{id}_V$ independently of the chosen basis; the evaluation and coevaluation maps satisfy both vector-space triangle identities.

[F5] [[thm-universal-property-of-module-tensor-products]]: a bilinear pairing on vector spaces induces a unique linear map from their algebraic tensor product.

[A1] The coproduct is an algebra map, so $\Delta(ab)=\sum a_{(1)}b_{(1)}\otimes a_{(2)}b_{(2)}$ and $\varepsilon(ab)=\varepsilon(a)\varepsilon(b)$; $\Delta$ is coassociative and counital.

## Proof

**Proof technique:** direct.

1.1 Give $H\otimes H$ its tensor-product coalgebra, $\Delta_{H\otimes H}(a\otimes b)=\sum(a_{(1)}\otimes b_{(1)})\otimes(a_{(2)}\otimes b_{(2)})$ and counit $\varepsilon\otimes\varepsilon$. The tensor universal property [F5] defines these maps from their bilinear formulas, and the coalgebra identities follow on pure tensors from those for $H$; pure tensors span. Thus convolution on $\operatorname{Hom}_k(H\otimes H,H)$, $(f*g)(z)=\sum f(z_{(1)})g(z_{(2)})$, is associative by coassociativity and associativity of multiplication, with unit $u(\varepsilon\otimes\varepsilon)$, where $u(c)=c1_H$. The pairings $P(a\otimes b)=S(ab)$ and $Q(a\otimes b)=S(b)S(a)$ are bilinear and hence define linear maps by [F5]. The antipode equations applied to $ab$ give $(P*m)(a\otimes b)=\varepsilon(a)\varepsilon(b)1_H=(m*P)(a\otimes b)$, where $m(a\otimes b)=ab$. The same equations give $(Q*m)(a\otimes b)=\sum S(b_{(1)})S(a_{(1)})a_{(2)}b_{(2)}=\varepsilon(a)\varepsilon(b)1_H$ and $(m*Q)(a\otimes b)=\sum a_{(1)}b_{(1)}S(b_{(2)})S(a_{(2)})=\varepsilon(a)\varepsilon(b)1_H$. Hence $P$ and $Q$ are both two-sided convolution inverses of $m$; in any associative unital algebra a two-sided inverse is unique, so $S(ab)=S(b)S(a)$. Substituting $1_H$ into either antipode identity gives $S(1_H)=1_H$. [A1, F5, algebra, construct]

1.2 For $h\in H$, $f\in V^*$ and $v\in V$, the tensor action and evaluation give $\operatorname{ev}(h\cdot(f\otimes v))=\sum (h_{(1)}\cdot f)(h_{(2)}v)=\sum f(S(h_{(1)})h_{(2)}v)=\varepsilon(h)f(v)=h\cdot\operatorname{ev}(f\otimes v)$ by the left antipode identity. Linearity extends this equality from pure tensors to all of $V^*\otimes V$. [A1, F1, F2]

1.3 Fix a finite basis $(e_i)$ of $V$ and its dual basis $(e^i)$. Under the canonical isomorphism $V\otimes V^*\to\operatorname{End}_k(V)$, $x\otimes f\mapsto[y\mapsto f(y)x]$, the tensor $h\cdot\operatorname{coev}(1)=\sum_{(h),i}h_{(1)}e_i\otimes(h_{(2)}\cdot e^i)$ acts on $v$ as $\sum_{(h),i}e^i(S(h_{(2)})v)h_{(1)}e_i=\sum_{(h)}h_{(1)}S(h_{(2)})v=\varepsilon(h)v$ by the dual-basis identity and the right antipode identity. Therefore $h\cdot\operatorname{coev}(1)=\varepsilon(h)\operatorname{coev}(1)=\operatorname{coev}(h\cdot1)$, so coevaluation is $H$-linear. [A1, F1, F2, F4]

2.1 For $h,g\in H$, $v\in V$ and $f\in V^*$, $1_H\cdot f=f$ by $S(1_H)=1_H$, and $(h\cdot(g\cdot f))(v)=f(S(g)S(h)v)=f(S(hg)v)=((hg)\cdot f)(v)$ by step 1.1. The action is linear in each variable from linearity of $S$, the module action on $V$, and [F3]. Thus the candidate formula is a unital left $H$-module action. [A1, F1, F3, step 1.1]

2.2 For $v\in V$, the first triangle composite sends $v$ to $\sum_i e_i\,e^i(v)=v$. For $f\in V^*$, the second sends $f$ to $\sum_i f(e_i)e^i=f$. These are the two identities in [F4], so the triangle identities hold as maps of vector spaces and hence as maps in $H\text{-}\mathrm{Mod}$, since evaluation and coevaluation are $H$-linear by steps 1.2 and 1.3. [F1, F4, step 1.2, step 1.3]

3.1 If $V=0$, its basis is empty, the coevaluation sum is $0$, and both triangle identities are the identity of the zero space. If $V$ is infinite-dimensional, every tensor $\sum_{i=1}^r v_i\otimes f_i\in V\otimes V^*$ corresponds to an endomorphism with image in $\operatorname{span}(v_1,\ldots,v_r)$; the identity on $V$ has infinite-dimensional image, so it cannot be such a tensor. This explains why the finite-dimensional hypothesis is essential for the stated coevaluation. No choice principle is used: only a finite basis of the given finite-dimensional $V$ is used. [F4, step 2.2, algebra] ∎
