---
id: lem-adjoint-representation-of-an-affine-group-scheme
kind: lemma
title: "The adjoint representation of an affine group scheme"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: ["def-axiom-of-choice", "def-lie-algebra-of-a-group-scheme", "lem-lie-algebra-tangent-space-and-functoriality", "lem-general-linear-group-scheme-and-its-coordinate-ring", "thm-affine-schemes-determined-by-functor-of-points", "thm-yoneda-lemma-is-natural-in-both-variables", "def-linear-basis", "def-linear-map", "def-linear-isomorphism-and-invertible-linear-map", "def-group-scheme-over-a-field", "def-functor-of-points-affine-scheme"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "10.18-10.21 and display (61), printed pp. 191-193 (PDF 202-204): the adjoint action, x e^{epsilon X} x^{-1} = e^{epsilon Ad(x)X}, and commutativity of the adjoint diagram."
    - title: "SGA 3, Expose II (M. Demazure), Fibres tangents - Algebres de Lie, corrected 14 October 2024 edition"
      url: "https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp2-14oct24.pdf"
      locator: "Definition 4.1.A, Proposition 4.1.1 and Remarque 4.1.C, printed pp. 59-60: Ad(x)X = i^{-1}(s(x)i(X)s(x)^{-1}) and naturality in the group."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice for the finite-type assertions inherited from the matrix-group supplier. Let $k$ be a field and let $G$ be an affine group scheme of finite type over $k$ with Lie algebra $\mathfrak g=\operatorname{Lie}(G)$ ([[def-lie-algebra-of-a-group-scheme]]). (a) For every commutative $k$-algebra $R$ and $x\in G(R)$, conjugation $y\mapsto xyx^{-1}$ in $G(R[\varepsilon])$ restricts to an $R$-linear automorphism $\operatorname{Ad}(x)$ of $\operatorname{Lie}(G)(R)=\mathfrak g\otimes_kR$, and $x\mapsto\operatorname{Ad}(x)$ is a natural homomorphism of groups; under the identification $\operatorname{Lie}(G)(R)\cong\mathfrak g\otimes_kR$ it is a natural transformation $h_G\to h_{\operatorname{GL}_{\mathfrak g}}$, hence a morphism of $k$-group schemes $\operatorname{Ad}:G\to\operatorname{GL}_{\mathfrak g}$, the **adjoint representation** of $G$. (b) For all $x\in G(R)$ and $X\in\mathfrak g\otimes_kR$ one has $x\,e^{\varepsilon X}\,x^{-1}=e^{\varepsilon\operatorname{Ad}(x)X}$ in $G(R[\varepsilon])$. (c) For a morphism $f:G\to H$ of affine group schemes of finite type over $k$ and all $x\in G(R)$ one has $\operatorname{Ad}_H(f(x))\circ\operatorname{Lie}(f)=\operatorname{Lie}(f)\circ\operatorname{Ad}_G(x)$; equivalently, $\operatorname{Ad}$ is natural in $G$.

## Facts & Assumptions

**Given:** The Axiom of Choice and a field $k$, an affine group scheme $G$ of finite type over $k$, a commutative $k$-algebra $R$, and elements $x\in G(R)$ and $X\in\mathfrak g\otimes_kR$.

[F1] [[lem-lie-algebra-tangent-space-and-functoriality]]: $\operatorname{Lie}(G)(R)=\ker(G(R[\varepsilon])\to G(R))$ is an abelian group whose multiplication is addition for a natural $R$-module structure, and the canonical map $\operatorname{Lie}(G)(R)\to\mathfrak g\otimes_kR$ is an isomorphism of $R$-modules; a morphism $f:G\to H$ induces $k$-linear $\operatorname{Lie}(f)$ with $f_R(e^{\varepsilon X})=e^{\varepsilon\operatorname{Lie}(f)_R(X)}$, and $\mathfrak g$ is finite-dimensional.

[F2] [[def-lie-algebra-of-a-group-scheme]]: $\operatorname{Lie}(G)(R)=\ker(G(R[\varepsilon])\to G(R))$ with elements written $e^{\varepsilon X}$ for $X\in\mathfrak g\otimes_kR$.

[F3] [[def-group-scheme-over-a-field]]: $G(T)$ is a group for every $k$-scheme $T$, naturally in $T$; hence for each $k$-algebra homomorphism $R[\varepsilon]\to R[\varepsilon]$ the induced map of groups is a homomorphism, and $G(R)\to G(R[\varepsilon])$ is a group homomorphism.

[F4] [[thm-yoneda-lemma-is-natural-in-both-variables]] and [[def-functor-of-points-affine-scheme]]: natural transformations between functors of points of affine schemes correspond to morphisms of the representing schemes, $\operatorname{Nat}(h_G,h_{\operatorname{GL}_{\mathfrak g}})\cong h_{\operatorname{GL}_{\mathfrak g}}(G)=\operatorname{Hom}(G,\operatorname{GL}_{\mathfrak g})$.

[F5] [[def-linear-basis]] and [[def-linear-isomorphism-and-invertible-linear-map]]: a finite-dimensional $k$-vector space has a finite basis, and a choice of basis identifies its $R$-linear automorphisms with invertible matrices.

## Proof

1.1 Conjugation preserves the kernel. For $x\in G(R)$ define $c_x:G(R[\varepsilon])\to G(R[\varepsilon])$ by $c_x(y)=xyx^{-1}$, using the group structure of [F3]; it is an automorphism with inverse $c_{x^{-1}}$, and it is induced by the automorphism of the functor $G$ given by conjugation with the image of $x$ under $G(R)\to G(R[\varepsilon])$. Since the reduction $\rho:G(R[\varepsilon])\to G(R)$ is a homomorphism of groups and the image of $x$ in $G(R[\varepsilon])$ reduces to $x$, one has $\rho(c_x(y))=x\rho(y)x^{-1}$; hence $c_x$ maps $\operatorname{Lie}(G)(R)=\ker\rho$ into itself, and so does $c_{x^{-1}}$. Define $\operatorname{Ad}(x):=c_x|_{\operatorname{Lie}(G)(R)}$. [F2, F3, given, construct]

2.1 The maps $\operatorname{Ad}(x)$ and the map $x\mapsto\operatorname{Ad}(x)$. Each $\operatorname{Ad}(x)$ is a group automorphism of $\operatorname{Lie}(G)(R)$ by step 1.1, hence is additive because the group law there is addition by [F1]; it is $R$-linear because the scalar action of $c\in R$ on $\operatorname{Lie}(G)(R)$ is induced by the algebra endomorphism $\varepsilon\mapsto c\varepsilon$ of $R[\varepsilon]$, which commutes with the conjugation $c_x$ since the image of $x$ in $G(R[\varepsilon])$ is fixed by that endomorphism. Moreover $\operatorname{Ad}(xy)=\operatorname{Ad}(x)\circ\operatorname{Ad}(y)$ and $\operatorname{Ad}(e)=\operatorname{id}$ because $c_{xy}=c_x\circ c_y$, and the construction is natural in $R$ because both the group structures and the reduction maps are. Thus $x\mapsto\operatorname{Ad}(x)$ is a natural homomorphism from the group-valued functor $h_G$ to the functor $R\mapsto\operatorname{Aut}_R(\mathfrak g\otimes_kR)$, which under the identification of [F1] is exactly the group of $R$-linear automorphisms of $\operatorname{Lie}(G)(R)$. [F1, F3, step 1.1]

2.2 Clause (b). For $X\in\mathfrak g\otimes_kR$ the element $e^{\varepsilon X}$ of $\operatorname{Lie}(G)(R)$ is fixed by the identification of [F2], and by definition $\operatorname{Ad}(x)$ is the restriction of conjugation by $x$; hence $x\,e^{\varepsilon X}\,x^{-1}=e^{\varepsilon\operatorname{Ad}(x)X}$ in $G(R[\varepsilon])$. [F2, step 1.1]

3.1 Clause (c), naturality. Let $f:G\to H$ be a morphism of affine group schemes of finite type over $k$ and let $x\in G(R)$, $X\in\mathfrak g\otimes_kR$. Applying the group homomorphism $f_{R[\varepsilon]}$ to the identity of clause (b) for $G$ gives $f(x)\,f(e^{\varepsilon X})\,f(x)^{-1}=f(e^{\varepsilon\operatorname{Ad}_G(x)X})$; by the functoriality of $f$ on points and the exponential identity of [F1] this reads $e^{\varepsilon\operatorname{Ad}_H(f(x))\operatorname{Lie}(f)X}=e^{\varepsilon\operatorname{Lie}(f)\operatorname{Ad}_G(x)X}$, and the exponential correspondence $X\mapsto e^{\varepsilon X}$ is injective, so $\operatorname{Ad}_H(f(x))\circ\operatorname{Lie}(f)=\operatorname{Lie}(f)\circ\operatorname{Ad}_G(x)$. [F1, step 2.2]

3.2 The adjoint representation is a morphism. If $\mathfrak g=0$, its automorphism functor is the one-element functor, represented by the trivial group $\operatorname{Spec}k$, and $\operatorname{Ad}$ is its unique morphism. Otherwise, by [F1] the Lie algebra $\mathfrak g$ is finite-dimensional, so by [F5] it has a finite $k$-basis and the functor $R\mapsto\operatorname{Aut}_R(\mathfrak g\otimes_kR)$ is naturally identified with $\operatorname{GL}_n$ for $n=\dim_k\mathfrak g$; by [[lem-general-linear-group-scheme-and-its-coordinate-ring]] this functor is the functor of points of the affine group scheme $\operatorname{GL}_{\mathfrak g}=\operatorname{GL}_n$. The natural transformation of step 2.1 is therefore a natural transformation $h_G\to h_{\operatorname{GL}_{\mathfrak g}}$, and by [F4] it is induced by a morphism of $k$-schemes $\operatorname{Ad}:G\to\operatorname{GL}_{\mathfrak g}$, which is a morphism of group schemes because the transformation is a natural homomorphism of group-valued functors. [F1, F4, F5, step 2.1]

4.1 Conclusion. Steps 1.1, 2.1, 2.2, 3.1 and 3.2 prove (a), (b) and (c): conjugation restricts to an $R$-linear automorphism of the Lie algebra, the assignment is a natural group homomorphism and hence defines the morphism $\operatorname{Ad}:G\to\operatorname{GL}_{\mathfrak g}$ of $k$-group schemes, the identity of (b) is the definition of the restriction, and (c) is the differentiated naturality. The conjugation construction and finite basis selection are choice-free; the finite-type assertion for $\operatorname{GL}_{\mathfrak g}$ inherits Choice from [[lem-general-linear-group-scheme-and-its-coordinate-ring]]. [step 1.1, step 2.1, step 2.2, step 3.1, step 3.2] ∎

## Remarks

The argument uses affineness of $G$ only to phrase the conclusion as a morphism of affine $k$-group schemes; the natural transformation exists for any $k$-group scheme whose Lie algebra is finite-dimensional. The local supplier [[lem-general-linear-group-scheme-and-its-coordinate-ring]] is used in step 3.2 for the explicit model of $\operatorname{GL}_{\mathfrak g}$; it is now authored in batch 13 and its statement contains exactly the identification of $R\mapsto\operatorname{Aut}_R(\mathfrak g\otimes_kR)$ with $\operatorname{GL}_n$ applied there, so the use is reconciled as recorded in the pair report.
