---
id: lem-relative-tensor-product-from-separability-idempotent
kind: lemma
title: A separability idempotent constructs the balanced relative tensor product
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-separable-algebra-and-bimodule-in-fusion-category
  - def-semisimple-object-and-semisimple-abelian-category
  - def-fusion-and-multifusion-category
  - def-simple-object
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Douglas and Reutter, Fusion 2-Categories and a State-Sum Invariant for 4-Manifolds, §§1.3 and 1.4
      url: https://arxiv.org/pdf/1812.11933
    - title: Décoppet and Yu, Fiber 2-Functors and Tambara-Yamagami Fusion 2-Categories, §2.3
      url: https://arxiv.org/pdf/2306.08117
---

## Statement

Let $\mathcal C$ be a fusion category over an algebraically closed field $k$, let $B$ be a separable algebra object, and let $X$ be an $A$-$B$ bimodule and $Y$ a $B$-$D$ bimodule. Put $e_B=\sigma_B\eta_B:\mathbf1\to B\otimes B$. The endomorphism
$$p_{X,Y}=(r_X\otimes l_Y)\circ(1_X\otimes e_B\otimes1_Y):X\otimes Y\to X\otimes Y$$
is idempotent. Its image, with the induced map $q_B:X\otimes Y\to\operatorname{im}(p_{X,Y})$, is the relative tensor product $X\otimes_B Y$: for every object $Z$, composition with $q_B$ gives a bijection from morphisms $\operatorname{im}(p_{X,Y})\to Z$ to maps $X\otimes Y\to Z$ balanced over $B$. The result is independent up to a unique canonical isomorphism of the chosen splitting of $p_{X,Y}$.

## Facts & Assumptions


**Given:** A fusion category $\mathcal C$ over an algebraically closed field $k$, a separable algebra $B$, and bimodules $X,Y$ as in the statement.

[F1] [[def-separable-algebra-and-bimodule-in-fusion-category]]: The separability section is a $B$-$B$ bimodule map and $m_B\sigma_B=1_B$; balanced maps equalize the right action on $X$ and the left action on $Y$.

[F2] [[def-semisimple-object-and-semisimple-abelian-category]]: Every object in a semisimple category is a finite direct sum of simple objects.

[F3] [[def-fusion-and-multifusion-category]]: A fusion category is a finite semisimple tensor category over the stated field.

[F4] [[def-simple-object]]: A simple object is nonzero and has no subobjects other than zero and itself.

## Proof

1.1 Since $\sigma_B$ is a bimodule map and $m_B\sigma_B=1_B$, the element $e_B=\sigma_B\eta_B$ satisfies $m_B e_B=\eta_B$ and the centrality equation $((m_B\otimes1_B)\circ(1_B\otimes e_B))=((1_B\otimes m_B)\circ(e_B\otimes1_B)):B\to B\otimes B.$ Associators are inserted in the displayed composite according to source and target. This equation says, in element notation, $\sum_i b x_i\otimes y_i=\sum_i x_i\otimes y_i b$ for $e_B=\sum_i x_i\otimes y_i$. [F1, given]

2.1 The centrality equation gives $p_{X,Y}(r_X\otimes1_Y)=p_{X,Y}(1_X\otimes l_Y)$: on an elementary tensor, both maps apply the equality $\sum_i b x_i\otimes y_i=\sum_i x_i\otimes y_i b$ between the middle factors. Thus $p_{X,Y}$ is balanced. If $f:X\otimes Y\to Z$ is balanced, then $f p_{X,Y}(x\otimes y)=\sum_i f(x x_i\otimes y_i y)=\sum_i f(x\otimes x_i y_i y)=f(x\otimes y),$ where the first equality is the definition of $p$, the second is balancing, and the third uses $m_Be_B=\eta_B$, the unit action on $Y$. This calculation is an equality of composites of action maps, so it does not depend on element notation. Taking $f=p_{X,Y}$ proves $p_{X,Y}^2=p_{X,Y}$. [F1, given, step 1.1, algebra]

3.1 Write $X\otimes Y$ as a finite direct sum of pairwise nonisomorphic simple objects using [F2]. A nonzero morphism between simple objects has kernel either zero or the whole source and image either zero or the whole target by [F4]; nonzero excludes the latter kernel and former image, so the morphism is an isomorphism. Thus distinct simple summands have zero Hom spaces, and $\operatorname{End}(S)$ is a finite-dimensional division algebra over $k$. For any $u\in\operatorname{End}(S)$, its minimal polynomial splits over the algebraically closed field $k$; the equation $\prod_j(u-\lambda_j1)=0$ and absence of zero divisors imply $u=\lambda_j1$ for some root $\lambda_j$, so $\operatorname{End}(S)=k$. Therefore $p_{X,Y}$ is a finite block matrix of $k$-linear idempotents on the multiplicity spaces. For each such idempotent $P:V\to V$, every $v\in V$ is $Pv+(v-Pv)$ with $Pv\in\operatorname{im}P$ and $v-Pv\in\ker P$, while $\operatorname{im}P\cap\ker P=0$; hence $V=\operatorname{im}P\oplus\ker P$ and $P$ splits. Taking these splittings over all blocks gives $X\otimes Y\xrightarrow{q_B}P\xrightarrow{i}X\otimes Y$ with $i q_B=p_{X,Y}$ and $q_B i=1_P$. Since $p_{X,Y}$ equalizes the two action maps, $q_B$ does too: apply the monomorphism $i$ to the two composites from $X\otimes B\otimes Y$ and use step 2.1. Hence $q_B$ is balanced. [F2, F3, F4, step 2.1, construct, algebra]

4.1 If $f:X\otimes Y\to Z$ is any balanced map, step 2.1 gives $f p_{X,Y}=f$. Therefore $\widetilde f=f i:P\to Z$ satisfies $\widetilde f q_B=f i q_B=f p_{X,Y}=f$. It is unique because $q_B i=1_P$: any $g:P\to Z$ with $gq_B=f$ must satisfy $g=gq_Bi=fi$. Thus $P$ has the balanced universal property. [step 2.1, step 3.1, algebra]

5.1 Any other splitting of the same idempotent has the same universal property. The unique maps between the two representing objects that preserve their universal balanced maps are inverse, since each composite preserves that same universal map and uniqueness in step 4.1 forces it to be the identity. This proves canonical independence of the splitting. [step 4.1, algebra] ∎
