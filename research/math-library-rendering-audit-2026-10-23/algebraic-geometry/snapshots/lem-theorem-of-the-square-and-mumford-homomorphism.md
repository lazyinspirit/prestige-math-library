---
id: lem-theorem-of-the-square-and-mumford-homomorphism
kind: lemma
title: "The theorem of the square and the Mumford homomorphism into the Picard group"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - lem-nonaffine-theorem-of-the-cube-for-abelian-variety
  - def-picard-group-scheme
  - def-abelian-variety-over-a-field
  - def-rigidified-relative-picard-functor-and-dual-abelian-variety
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, v2.00 (2008), I.5.5-I.5.6 (theorem of the square)"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
---

## Statement

Assume the Axiom of Choice. Let $A$ be an abelian variety over a field $k$ ([[def-abelian-variety-over-a-field]]), let $\mathcal L$ be an invertible sheaf on $A$ ([[def-picard-group-scheme]]), and let $t_a:A\to A$ denote translation by $a\in A(k'')$ for a field extension $k''/k$. Then the **theorem of the square** holds:
$$t_{a+b}^*\mathcal L\otimes\mathcal L\;\cong\;t_a^*\mathcal L\otimes t_b^*\mathcal L$$
for all $a,b\in A(k'')$, functorially in $k''$. Consequently the **Mumford map**
$$\varphi_{\mathcal L}:A(k'')\longrightarrow\operatorname{Pic}(A_{k''}),\qquad a\longmapsto[t_a^*\mathcal L\otimes\mathcal L^{-1}],$$
is a group homomorphism and lands in the degree-zero part of the rigidified Picard functor ([[def-rigidified-relative-picard-functor-and-dual-abelian-variety]]); it is compatible with field extension.

## Facts & Assumptions

**Given:** AC, an abelian variety $A$ over $k$, an invertible sheaf $\mathcal L$ on $A$, a field extension $k''/k$ and points $a,b\in A(k'')$.

[F1] For an invertible sheaf $\mathcal L$ on $A$, the cube theorem gives $m_{123}^*\mathcal L\otimes m_1^*\mathcal L\otimes m_2^*\mathcal L\otimes m_3^*\mathcal L\cong m_{12}^*\mathcal L\otimes m_{13}^*\mathcal L\otimes m_{23}^*\mathcal L$ on $A^3$, where $m_I$ sums the indexed coordinates ([[lem-nonaffine-theorem-of-the-cube-for-abelian-variety]]). The supplier assumes AC and DC; AC implies DC, since a choice function on the nonempty successor sets of a serial relation defines a sequence by recursion.

[F2] The Picard group $\operatorname{Pic}$ consists of isomorphism classes of invertible sheaves with tensor product, and the rigidified relative Picard functor and its degree-zero part are as defined in [[def-rigidified-relative-picard-functor-and-dual-abelian-variety]], [[def-picard-group-scheme]].

## Proof

**Proof technique:** direct: specialise the cube theorem to the standard three maps and read off the homomorphism property.

1.1 Pull the identity of [F1] back along $A_{k''}\to(A_{k''})^3$, $x\mapsto(x,a,b)$. Its factors involving $x$ are $t_{a+b}^*\mathcal L$, $\mathcal L$, $t_a^*\mathcal L$ and $t_b^*\mathcal L$. The remaining factors are the constant line bundles with fibres $\mathcal L_a$, $\mathcal L_b$ and $\mathcal L_{a+b}$, each a one-dimensional $k''$-vector space and therefore isomorphic to the trivial line bundle. Removing these constant factors gives $t_{a+b}^*\mathcal L\otimes\mathcal L\cong t_a^*\mathcal L\otimes t_b^*\mathcal L$. Although trivializations of the constant factors need not be canonical, the resulting equality of Picard classes is canonical and is preserved by field extension. [F1, given, algebra]

2.1 The square identity shows that $\varphi_{\mathcal L}(a+b)=[t_{a+b}^*\mathcal L\otimes\mathcal L^{-1}]=[t_a^*\mathcal L\otimes\mathcal L^{-1}][t_b^*\mathcal L\otimes\mathcal L^{-1}]=\varphi_{\mathcal L}(a)\varphi_{\mathcal L}(b)$ in $\operatorname{Pic}(A_{k''})$: expand the first factor using the square identity and cancel $\mathcal L\otimes\mathcal L^{-1}$. Hence $\varphi_{\mathcal L}$ is a group homomorphism, and it is natural in $k''$ because the constructions and $\mathcal L$ are defined over $k$. [F1, F2, step 1.1, algebra]

3.1 For degree zero: $\varphi_{\mathcal L}(a)$ is represented by the difference of the two line bundles $t_a^*\mathcal L$ and $\mathcal L$, which occur as fibres of the connected family $\mathcal L$ over $A$ under the translation family; hence its geometric-fibre restrictions are algebraically equivalent to zero, and $\varphi_{\mathcal L}$ lands in the algebraically trivial subfunctor of [F2], i.e. in the degree-zero part of the rigidified Picard functor. [F2, step 2.1, algebra] ∎ 