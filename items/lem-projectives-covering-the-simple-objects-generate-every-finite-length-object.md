---
id: lem-projectives-covering-the-simple-objects-generate-every-finite-length-object
kind: lemma
title: "Projective epimorphisms onto the simples generate every finite-length object"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 1
justified_by: []
aliases: []
deps: [cor-an-additive-category-is-an-ab-enriched-category-with-a-zero-object-and-finite-biproducts, def-abelian-category, def-additive-category, def-biproduct, def-composition-series-and-composition-factors-of-an-object, def-finite-k-linear-abelian-category, def-kernels-and-cokernels-as-equalizers-and-coequalizers, def-locally-finite-k-linear-abelian-category, def-object-of-finite-length, def-preadditive-category, def-projective-object, def-simple-object, def-subobject-and-quotient-object, def-superfluous-subobject-and-projective-cover-in-an-abelian-category, def-the-quotient-of-an-object-by-a-subobject, prop-basic-calculus-of-monomorphisms-and-epimorphisms, prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism, thm-length-is-additive-along-a-subobject]
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, §1.8 (Definitions 1.8.1–1.8.6, Proposition 1.8.10, Corollary 1.8.11, Remark 1.8.7), printed pp.9–11"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Fuchs, Schaumann, Schweigert, Eilenberg–Watts calculus for finite categories and a bimodule Radford S^4 theorem, arXiv:1612.04561v3, §2.1 (Lemma 2.1, Lemma 2.2, Corollary 2.3, equation (2.1)) and §§3.1–3.2 (Definition 3.1, Theorem 3.2)"
      url: "https://arxiv.org/pdf/1612.04561v3"
---

## Statement

Let $\mathcal C$ be a locally finite $k$-linear abelian category with finitely
many isomorphism classes of simple objects, represented by $S_1,\dots,S_n$, and
suppose that for each $i$ a projective epimorphism $Q_i\twoheadrightarrow S_i$
is chosen (for instance the projective cover supplied by
[[def-superfluous-subobject-and-projective-cover-in-an-abelian-category]] when
$\mathcal C$ is finite in the intrinsic sense). Then for every object $X$ of
finite length there are integers $m_i\ge0$ and an epimorphism
$\bigoplus_{i=1}^nQ_i^{m_i}\twoheadrightarrow X$; in particular, with
$P=\bigoplus_iQ_i$, every object of $\mathcal C$ admits an epimorphism
$P^m\twoheadrightarrow X$ for some $m\ge0$. Only the finitely many chosen maps
$Q_i\twoheadrightarrow S_i$ are selected, and no other choice is used.

## Facts & Assumptions

**Given:** A field $k$, a locally finite $k$-linear abelian category $\mathcal C$, simple representatives $S_1,\dots,S_n$ for all isomorphism classes of simple objects of $\mathcal C$, and chosen projective epimorphisms $\varphi_i:Q_i\twoheadrightarrow S_i$, $i=1,\dots,n$.

[F1] An object has finite length exactly when it admits a composition series $0=X_0<X_1<\cdots<X_\ell=X$ with simple factors $X_j/X_{j-1}$; the length $\ell(X)$ is the number of factors, the truncation $0=X_0<\cdots<X_j$ is a composition series of $X_j$ so that $\ell(X_j)=j$, and lengths are additive along a subobject ([[def-object-of-finite-length]], [[def-composition-series-and-composition-factors-of-an-object]], [[thm-length-is-additive-along-a-subobject]]).

[F2] The quotient of an object $X$ by a subobject represented by $m:M\rightarrowtail X$ is $\operatorname{coker}(m)$, written $X/M$, and its defining map is the cokernel map ([[def-the-quotient-of-an-object-by-a-subobject]], [[def-subobject-and-quotient-object]]).

[F3] A cokernel $c:B\to C$ of $f:A\to B$ satisfies $cf=0$, and every $h$ with $hf=0$ factors as $h=\bar hc$ for a unique $\bar h$ ([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]]).

[F4] A projective object $Q$ has the lifting property: for every epimorphism $e:E\twoheadrightarrow M$ and every $f:Q\to M$ there is $\tilde f:Q\to E$ with $e\tilde f=f$ ([[def-projective-object]]).

[F5] Identities are epic, composites of epimorphisms are epic, and split epimorphisms are epic ([[prop-basic-calculus-of-monomorphisms-and-epimorphisms]]).

[F6] A biproduct $\bigoplus_{i}A_i$ is simultaneously a product and a coproduct with injections and projections satisfying the biproduct identities, and biproducts are associative and commutative up to canonical isomorphism; in particular a morphism out of a biproduct is determined by its components, and an inclusion of a subfamily of summands is split by the corresponding projection ([[def-biproduct]], [[prop-biproducts-are-associative-commutative-and-unital-up-to-canonical-isomorphism]], [[cor-an-additive-category-is-an-ab-enriched-category-with-a-zero-object-and-finite-biproducts]]).

[F7] $\mathcal C$ is abelian, hence additive and preadditive: its hom-sets are abelian groups, composition is bilinear, and there is a zero object ([[def-abelian-category]], [[def-additive-category]], [[def-preadditive-category]]).

[F8] A simple object is nonzero and has exactly two subobjects, the zero subobject and its identity; by hypothesis every simple object of $\mathcal C$ is isomorphic to one of $S_1,\dots,S_n$ ([[def-simple-object]], given).



## Proof

**Proof technique:** induction.

1.1 The assertion to be proved by induction on the natural number $p$ is: for every object $Y$ of $\mathcal C$ of length $p$ there are integers $m_i\ge0$ and an epimorphism $\bigoplus_iQ_i^{m_i}\twoheadrightarrow Y$. At $p=0$ a composition series of $Y$ has no factors, so $Y=0$ by [F1]; taking all $m_i=0$, the empty biproduct is the zero object and the identity $0\to Y$ is an epimorphism by [F5], so the assertion holds at $p=0$. [base, F1, F5, F6, given]

1.2 Assume the assertion at the natural number $p$: for every object $Y$ of $\mathcal C$ with $\ell(Y)=p$ there are integers $m_i\ge0$ and an epimorphism $\bigoplus_iQ_i^{m_i}\twoheadrightarrow Y$. [ih]

1.3 Suppose $X$ has length $p+1$ and let $0=X_0<\cdots<X_{p+1}=X$ be a composition series of $X$; then the last factor $S=X_{p+1}/X_p$ is simple by [F1], hence $S\cong S_i$ for some $i$ by [F8], and $\ell(X_p)=p$ by [F1]. [F1, F8, given]

2.1 Successor step. Let $X$ have length $p+1$, with composition series, last simple factor $S\cong S_i$ and $Y:=X_p$ of length $p$ as in step 1.3. By the induction hypothesis of step 1.2 applied to $Y$ there are integers $m_j\ge0$ and an epimorphism $e:W\twoheadrightarrow Y$, where $W:=\bigoplus_jQ_j^{m_j}$ is a finite biproduct of the chosen projectives. The quotient $\pi:X\twoheadrightarrow X/X_p=S$ of [F2] is an epimorphism, and composing the chosen epimorphism $\varphi_i:Q_i\twoheadrightarrow S_i$ with an isomorphism $S_i\cong S$ gives an epimorphism $\varphi:Q_i\twoheadrightarrow S$, so by the lifting property [F4] of the projective $Q_i$ there is $\psi:Q_i\to X$ with $\pi\psi=\varphi$. Let $u:W\oplus Q_i\to X$ be the morphism with components the composite $W\xrightarrow{e}Y\rightarrowtail X$ and $\psi$, which exists and is unique by the biproduct property [F6]. [step 1.2, step 1.3, F2, F4, F6, construct, given]

3.1 The morphism $u$ of step 2.1 is an epimorphism. Let $c:X\to C$ be a morphism with $cu=0$. Composing with the first biproduct injection gives $c\circ u\circ\mathrm{inj}_W=c\circ(\text{inclusion}\circ e)=0$, and $e$ is epic, so $c\circ\text{inclusion}=0$ for the inclusion $X_p\rightarrowtail X$; since $\pi$ is a cokernel of that inclusion by [F2], the universal property [F3] gives $c=\bar c\circ\pi$ for some $\bar c:S\to C$. Then $0=cu$ composed with the second biproduct injection gives $\bar c\circ\pi\circ\psi=\bar c\circ\varphi=0$, and $\varphi$ is epic, so $\bar c=0$ and therefore $c=0$. Since $\mathcal C$ is preadditive [F7], a morphism $u$ with the property that every $c$ satisfying $cu=0$ is zero is an epimorphism: from $gu=hu$ one gets $(g-h)u=0$, hence $g-h=0$. [step 2.1, F3, F5, F7, algebra]

4.1 The source of the epimorphism $u$ of step 3.1 is a finite biproduct of the chosen objects $Q_1,\dots,Q_n$: regrouping its summands by index, $W\oplus Q_i\cong\bigoplus_{i=1}^nQ_i^{m'_i}$ for integers $m'_i\ge0$ by the associativity and commutativity of biproducts [F6]. Hence the successor case holds: $X$ of length $p+1$ admits an epimorphism $\bigoplus_iQ_i^{m'_i}\twoheadrightarrow X$. [step 3.1, F6, given]

5.1 Step 1.1 is the base case and steps 1.3, 2.1, 3.1 and 4.1 pass from $p$ to $p+1$ using the induction hypothesis of step 1.2, so by induction on $p$ every object $X$ of finite length admits an epimorphism $\bigoplus_iQ_i^{m_i}\twoheadrightarrow X$ for suitable integers $m_i\ge0$. For the final clause put $P=\bigoplus_iQ_i$ and $m=\sum_im_i$; by [F6] the power $P^m$ is the biproduct $\bigoplus_iQ_i^m$, whose subfamily of summands $Q_i^{m_i}$ has $\bigoplus_iQ_i^{m_i}$ as a biproduct, and the corresponding projection $P^m\twoheadrightarrow\bigoplus_iQ_i^{m_i}$ is a split epimorphism, hence epic by [F5]; composing it with an epimorphism onto $X$ gives an epimorphism $P^m\twoheadrightarrow X$ by [F5]. The proof selects only finite data (a composition series of the object at hand, finitely many summand indices and biproduct structure maps, and the $n$ supplied epimorphisms $\varphi_i$), so no choice principle is used. [step 1.1, step 4.1, F5, F6, discharge-induction] ∎
