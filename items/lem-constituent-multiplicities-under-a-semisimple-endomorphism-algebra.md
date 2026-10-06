---
id: lem-constituent-multiplicities-under-a-semisimple-endomorphism-algebra
kind: lemma
title: "Constituent multiplicities are dimensions of simple modules over the endomorphism algebra"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-semisimple-module
  - def-endomorphism-ring-of-a-module
  - prop-endomorphisms-form-a-ring
  - thm-equivalent-characterizations-of-semisimple-modules
  - thm-finitely-generated-semisimple-modules-are-finite-direct-sums-of-simple-modules
  - thm-schurs-lemma-for-modules
  - thm-endomorphism-ring-of-a-finite-direct-sum-as-hom-matrices
  - thm-wedderburn-artin-theorem
  - thm-simple-modules-over-semisimple-rings
  - cor-the-complex-numbers-are-an-algebraic-closure-of-the-reals
  - cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jay Taylor, Finite Reductive Groups - Theorem 5.21 and the paragraph after (1.7) of Curtis, printed pp. 45-46"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Proposition 10.8 and its proof (parametrisation of a Harish-Chandra series by irreducible representations of the endomorphism algebra), printed pp. 43-44"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Ivan Losev, Lecture 8: Representations of GL_n(F_q) - Section 2.1 (simple summands of a module with semisimple endomorphism algebra), PDF pp. 3-4"
      url: "https://ivanloseu.github.io/RT/RT8.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $A$ be a finite-dimensional semisimple $\mathbb C$-algebra, let $M$ be a
finite-dimensional semisimple $A$-module and put
$E:=\operatorname{End}_A(M)$ ([[def-semisimple-module]],
[[def-endomorphism-ring-of-a-module]]). Let $r\ge0$ and let $V_1,\dots,V_r$ be
pairwise non-isomorphic simple $A$-modules with
$$M\cong\bigoplus_{i=1}^rV_i^{\oplus m_i},\qquad m_i\ge1.$$
Then:

1. $E$ is a semisimple $\mathbb C$-algebra, and there is an isomorphism
$E\cong\prod_{i=1}^r\operatorname M_{m_i}(\mathbb C)$; for $r=0$ both sides are
the zero algebra;
2. for every $i$ the space $S_i:=\operatorname{Hom}_A(V_i,M)$, a left
$E$-module by postcomposition, is a simple $E$-module of dimension $m_i$, and
$i\mapsto S_i$ is a bijection from $\{1,\dots,r\}$ onto the set of isomorphism
classes of simple $E$-modules;
3. the multiplicity $m_i$ of $V_i$ in $M$ equals $\dim_{\mathbb C}S_i$;
consequently the constituents of $M$ are indexed by the isomorphism classes of
simple $E$-modules, and the constituent attached to a simple $E$-module $S$ has
multiplicity $\dim_{\mathbb C}S$. If $E'$ is a semisimple algebra abstractly
isomorphic to $\operatorname{End}_A(M)$, the indexing transports along any such
isomorphism, dimension being preserved. No choice principle is used.

## Facts & Assumptions

**Given:** A finite-dimensional semisimple $\mathbb C$-algebra $A$, a
finite-dimensional semisimple $A$-module $M$, the algebra
$E=\operatorname{End}_A(M)$, pairwise non-isomorphic simple $A$-modules
$V_1,\dots,V_r$ and an isomorphism $M\cong\bigoplus_iV_i^{\oplus m_i}$.

[F1] Schur's lemma for modules: a nonzero homomorphism between simple modules is
an isomorphism, and the endomorphism ring of a simple module is a division
ring ([[thm-schurs-lemma-for-modules]]).

[F2] A finitely generated semisimple module is an internal direct sum of
finitely many simple submodules, so it has an isotypic decomposition into its
non-isomorphic simple constituents ([[def-semisimple-module]],
[[thm-finitely-generated-semisimple-modules-are-finite-direct-sums-of-simple-modules]]).

[F3] Endomorphisms of a finite direct sum $\bigoplus_jM_j$ correspond to
matrices $(f_{ij})$ with entries $f_{ij}\in\operatorname{Hom}_A(M_j,M_i)$, with
composition given by matrix multiplication, and $E=\operatorname{End}_A(M)$ is
a unital ring under pointwise addition and composition
([[thm-endomorphism-ring-of-a-finite-direct-sum-as-hom-matrices]],
[[prop-endomorphisms-form-a-ring]]).

[F4] Over an algebraically closed field every endomorphism of a nonzero
finite-dimensional vector space has an eigenvalue; $\mathbb C$ is algebraically
closed ([[cor-positive-dimensional-operator-over-an-algebraically-closed-field-has-an-eigenvalue]],
[[cor-the-complex-numbers-are-an-algebraic-closure-of-the-reals]]).

[F5] Wedderburn-Artin: a nonzero unital ring is semisimple exactly when it is a
product of finitely many matrix rings over division rings, and the simple left
modules of such a product are the column modules of its factors, one class per
factor ([[thm-wedderburn-artin-theorem]],
[[thm-simple-modules-over-semisimple-rings]]).



## Proof

**Proof technique:** direct.

1.1 Write $M=\bigoplus_{i=1}^rM_i$ with $M_i\cong V_i^{\oplus m_i}$ for each $i$, the isotypic decomposition supplied by [F2]. For $j\ne i$ Schur's lemma over $\mathbb C$ gives $\operatorname{Hom}_A(V_j,M_i)=0$, because a nonzero such map would be an isomorphism from the simple module $V_j$ onto a simple submodule of $M_i$, which is a direct sum of copies of $V_i$; and $\operatorname{Hom}_A(V_i,M_i)\cong\operatorname{Hom}_A(V_i,V_i)^{m_i}$ because the finite direct sum $M_i$ is a biproduct, with the components read off by the inclusions and projections of the $m_i$ copies of $V_i$. With $D_i:=\operatorname{End}_A(V_i)$ a division ring by [F1], this identifies $\operatorname{Hom}_A(V_i,M)$ with $D_i^{m_i}$ as a $\mathbb C$-vector space. [F1, F2, algebra]

2.1 Each $D_i$ is a finite-dimensional $\mathbb C$-division algebra: it is a $\mathbb C$-algebra because $A$ is one and the action is $\mathbb C$-linear, and it is finite-dimensional because $V_i$ is a quotient of the finite-dimensional algebra $A$, hence finite-dimensional over $\mathbb C$. For $0\ne T\in D_i$ the left multiplication $L_T:D_i\to D_i$ is a $\mathbb C$-linear endomorphism of a nonzero finite-dimensional $\mathbb C$-space, so it has an eigenvalue $\lambda$ by [F4]; then $T-\lambda$ is not invertible, so $T=\lambda$ and $T\in\mathbb C$; hence $D_i=\mathbb C$. In particular $\dim_{\mathbb C}\operatorname{Hom}_A(V_i,M)=m_i$ by step 1.1. [F1, F4, step 1.1, algebra]

3.1 The matrix description of endomorphisms of the finite direct sum $M=\bigoplus_iM_i$ from [F3], together with the vanishing $\operatorname{Hom}_A(V_j,M_i)=0$ for $j\ne i$ of step 1.1, gives a $\mathbb C$-algebra isomorphism $E\cong\prod_{i=1}^r\operatorname{End}_A(M_i)$; applying the matrix description again inside each isotypic block, and $D_i=\mathbb C$ from step 2.1, gives $\operatorname{End}_A(M_i)\cong\operatorname M_{m_i}(\operatorname{End}_A(V_i))=\operatorname M_{m_i}(\mathbb C)$, so $E\cong\prod_i\operatorname M_{m_i}(\mathbb C)$. If $r=0$ then $M=0$, $E=0$ is semisimple by the definition of [[def-semisimple-module]] read for the zero ring, and the statement is the empty product; if $r\ge1$ then $E\ne0$ and Wedderburn-Artin [F5] applied to the product of matrix rings over the division rings $\mathbb C$ shows that $E$ is semisimple. This proves assertion (1). [F3, F5, step 1.1, step 2.1, algebra]

4.1 The space $S_i=\operatorname{Hom}_A(V_i,M)$ is a left $E$-module by postcomposition $(e\cdot f)(v)=e(f(v))$, since a composite of $A$-linear maps is $A$-linear, and by step 1.1 it is $\mathbb C$-linearly isomorphic to $\operatorname{End}_A(V_i)^{m_i}=\mathbb C^{m_i}$. Under the isomorphism $E\cong\prod_i\operatorname M_{m_i}(\mathbb C)$ of step 3.1 and this identification, an endomorphism $e=(e^{(1)},\dots,e^{(r)})$ acts on the $i$-th component of $M$ through the matrix $e^{(i)}$ acting on $\mathbb C^{m_i}$ by matrix multiplication; hence $S_i$ is precisely the natural column module $\mathbb C^{m_i}$ of the $i$-th matrix factor of $E$, a simple $E$-module, and by [F5] these column modules represent all isomorphism classes of simple $E$-modules, one per factor. Therefore $i\mapsto S_i$ is a bijection onto those classes and $\dim_{\mathbb C}S_i=m_i$: assertions (2) and (3). [F5, step 1.1, step 2.1, step 3.1, algebra]

5.1 Assertion (1) is step 3.1, and assertions (2) and (3) are step 4.1 together with the identification $\dim_{\mathbb C}\operatorname{Hom}_A(V_i,M)=m_i$ of step 2.1; this proves everything asserted for $E=\operatorname{End}_A(M)$. If $E'$ is semisimple and $\varphi:E'\to E$ is an algebra isomorphism, the map $S\mapsto S$ with $E'$-action $e'\cdot f:=\varphi(e')\cdot f$ identifies the simple $E'$-modules with the simple $E$-modules and preserves dimensions, so the indexing and multiplicities transport along $\varphi$; the same argument applies to any abstract isomorphism onto $\operatorname{End}_A(M)$. Every step used only finite-dimensional $\mathbb C$-linear algebra, the cited structure theorems and explicit component projections, so no choice principle is used. [step 3.1, step 4.1] ∎ 