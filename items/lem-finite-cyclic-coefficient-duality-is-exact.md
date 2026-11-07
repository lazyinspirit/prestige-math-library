---
dependency_level: 0
id: lem-finite-cyclic-coefficient-duality-is-exact
kind: lemma
title: Exact duality for finite modules over a cyclic coefficient ring
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Grothendieck et al., SGA 5, Exposé I, Section 5
      url: https://grothendiecksga.com/read/sga5/en/I-5.html
      locator: Finite coefficient duality used in Theorem 5.1 and its local pairings
---

## Statement

Let $n\geq1$, $A=\mathbb Z/n\mathbb Z$, and let $D(M)=\operatorname{Hom}_A(M,A)$ for a finite $A$-module $M$. Then $|D(M)|=|M|$, the evaluation map $M\to D(D(M))$ is an isomorphism, and $D$ is an exact contravariant functor on finite $A$-modules. For a bounded cochain complex $B$ of finite $A$-modules, the dual complex is $(DB)^r=\operatorname{Hom}_A(B^{-r},A)$ with differential $d^r(\phi)=(-1)^{r+1}\phi d_B^{-r-1}$. Its cohomology is canonically $H^r(DB)=D(H^{-r}(B))$. These assertions do not require the modules to be free or perfect.

## Statement references

[[cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules]]

[SGA 5, Exposé I, Section 5](https://grothendiecksga.com/read/sga5/en/I-5.html)

## Facts & Assumptions

**Given:** The ring, finite modules and bounded finite-module complex in the statement.

[F1] Every finite abelian group is a finite direct sum of finite cyclic groups. [[cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules]]

## Proof

1.1 The action of $A$ on an $A$-module is induced by its additive-group action by integers. By [F1], a finite $A$-module is therefore a finite direct sum of modules $\mathbb Z/d\mathbb Z$ with $d\mid n$: each cyclic generator has order dividing $n$ because multiplication by $n$ is zero. An additive homomorphism between such modules is $A$-linear. [given, F1, algebra]

2.1 An $A$-linear map from $\mathbb Z/d\mathbb Z$ to $A$ is determined by the image of $1$, and the possible images form the ideal $(n/d)A$, which has exactly $d$ elements. This dual separates the elements of $\mathbb Z/d\mathbb Z$: its map sending $1$ to $n/d$ is injective. Duals commute with finite direct sums, so $|D(M)|=|M|$ and $D(M)$ separates the elements of every finite $M$. [step 1.1, algebra]

3.1 Evaluation $M\to D(D(M))$ is $A$-linear and injective by separation. Applying the cardinality identity twice gives $|D(D(M))|=|M|$, so evaluation is an isomorphism. It is natural because evaluation of a composite is composition with evaluation. [step 2.1, algebra]

3.2 For an exact sequence $0\to L\to M\to N\to0$ of finite modules, the elementary restriction and quotient rules for homomorphisms give an exact sequence $0\to D(N)\to D(M)\to D(L)$ at the first two terms: a homomorphism vanishes on $L$ precisely when it factors through $N$. The image of the last map has cardinality $|D(M)|/|D(N)|=|M|/|N|=|L|=|D(L)|$. Thus that map is surjective and duality is exact. [step 2.1, algebra]

4.1 Write $Z^i=\ker d_B^i$ and $B^i_{\mathrm{bd}}=\operatorname{im}d_B^{i-1}$. Apply exact duality to $0\to Z^i\to B^i\to B^{i+1}_{\mathrm{bd}}\to0$ and $0\to B^i_{\mathrm{bd}}\to Z^i\to H^i(B)\to0$. A dual cocycle is exactly a functional vanishing on $B^i_{\mathrm{bd}}$. Its restriction to $Z^i$ therefore defines a functional on $H^i(B)$, and every such functional extends to $B^i$ by the surjectivity established in step 3.2. The kernel consists exactly of functionals vanishing on $Z^i$, namely the dual coboundaries by the first sequence. The displayed differential signs do not change these kernels or images. Consequently $H^{-i}(DB)=D(H^i(B))$, naturally in the complex. For $n=1$ all modules are zero and the same assertions hold. This proves every claim. [given, step 3.1, step 3.2, algebra] ∎

## Remarks

This coefficient lemma supplies exact finite-group duality, not a geometric étale duality theorem or a categorical trace on arbitrary finite-module complexes. For $n=\ell^r$ with $r>1$, a module such as $\mathbb Z/\ell\mathbb Z$ is allowed here even though it is not perfect over $\mathbb Z/\ell^r\mathbb Z$.
