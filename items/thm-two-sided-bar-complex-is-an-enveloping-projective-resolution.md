---
id: thm-two-sided-bar-complex-is-an-enveloping-projective-resolution
kind: theorem
title: The two-sided bar complex is a projective $A^e$-resolution
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-two-sided-bar-resolution-of-an-associative-algebra, def-enveloping-algebra-and-bimodule-module-dictionary, lem-bar-differential-and-augmentation-form-a-complex, cor-every-vector-space-has-a-basis, thm-tensor-product-basis-from-bases, thm-tensor-products-commute-with-arbitrary-direct-sums, thm-unit-isomorphisms-for-module-tensor-products, def-free-module-on-a-set-and-standard-basis, thm-free-modules-are-projective-with-choice-boundary, def-axiom-of-choice, def-left-and-right-modules, def-opposite-ring, thm-modules-over-a-ring-form-an-abelian-category, def-projective-resolution-in-an-abelian-category, cor-finite-iterated-tensor-products-represent-multilinear-maps, def-module-homomorphism-kernel-image-and-cokernel]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9: Hochschild and Cyclic Homology, §9.1.3–9.1.5"
      url: https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, Hochschild homology section"
      url: https://arxiv.org/pdf/math/0510265
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice (AC). Let $k$ be a field and $A$ a unital
associative $k$-algebra. The augmented two-sided bar complex
$$\cdots\longrightarrow\operatorname{Bar}_1(A)\longrightarrow\operatorname{Bar}_0(A)\xrightarrow{\varepsilon}A$$
is a projective resolution of $A$ both as a right and as a left
$A^e=A\otimes_kA^{\mathrm{op}}$-module. The contraction below is $k$-linear;
it is not asserted to be $A^e$-linear.

## Facts & Assumptions

**Given:** AC, a field $k$, and a unital associative $k$-algebra $A$.

[F1] The bar terms, adjacent-multiplication differential, and multiplication augmentation are as defined in [[def-two-sided-bar-resolution-of-an-associative-algebra]].

[F2] Each bar term has the separate outer left and right $A^e$-actions specified in [[def-two-sided-bar-resolution-of-an-associative-algebra]].

[F3] The maps are linear for both outer actions and satisfy $d_{n-1}d_n=0$ and $\varepsilon d_1=0$ ([[lem-bar-differential-and-augmentation-form-a-complex]]).

[F4] The regular bimodule $A$ has the left and right $A^e$-actions specified by the enveloping-algebra dictionary ([[def-enveloping-algebra-and-bimodule-module-dictionary]]).

[F5] Under AC every vector space has a basis ([[cor-every-vector-space-has-a-basis]]).

[F6] The elementary tensors of two bases form a basis of their tensor product ([[thm-tensor-product-basis-from-bases]]).

[F7] Tensor products commute with arbitrary direct sums in either variable ([[thm-tensor-products-commute-with-arbitrary-direct-sums]]).

[F8] $k\otimes_kV\cong V\cong V\otimes_kk$ ([[thm-unit-isomorphisms-for-module-tensor-products]]).

[F9] A module with a basis indexed by $X$ is isomorphic to the free module $R^{(X)}$ ([[def-free-module-on-a-set-and-standard-basis]]).

[F10] Under AC every free module is projective ([[thm-free-modules-are-projective-with-choice-boundary]]).

[F11] AC means every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[F12] A right $E$-module is regarded as a left $E^{\mathrm{op}}$-module by $r^{\mathrm{op}}m:=mr$; conversely a left $E^{\mathrm{op}}$-module gives a right $E$-module ([[def-left-and-right-modules]], [[def-opposite-ring]]).

[F13] For every ring $E$, the category of left $E$-modules is abelian ([[thm-modules-over-a-ring-form-an-abelian-category]]).

[F14] A projective resolution is an exact augmented complex whose terms are projective ([[def-projective-resolution-in-an-abelian-category]]).

[F15] A multilinear prescription on finitely many tensor factors induces a linear map from their tensor product ([[cor-finite-iterated-tensor-products-represent-multilinear-maps]]).

[F16] Kernels and images of module homomorphisms are the usual kernel and image submodules ([[def-module-homomorphism-kernel-image-and-cokernel]]).

## Proof

**Proof technique:** direct.

1.1 Define $h_{-1}:A\to\operatorname{Bar}_0(A)$ by $h_{-1}(a)=1\otimes a$, and for $n\geq0$ define $$h_n(a_0\otimes\cdots\otimes a_{n+1})=1\otimes a_0\otimes\cdots\otimes a_{n+1}.$$ The formulas are $k$-multilinear, so [F15] makes them well-defined $k$-linear maps. In $d_{n+1}h_n$, the first face is the identity term $a_0\otimes\cdots\otimes a_{n+1}$. Every later face, with index $r\geq1$, is $-h_{n-1}$ applied to the face of index $r-1$ in $d_n$, since $(-1)^r=-(-1)^{r-1}$. For $n=0$, this gives $d_1h_0(a_0\otimes a_1)=a_0\otimes a_1-1\otimes a_0a_1$, while $h_{-1}\varepsilon(a_0\otimes a_1)=1\otimes a_0a_1$. For $n=1$, $d_2h_1(a_0\otimes a_1\otimes a_2)=a_0\otimes a_1\otimes a_2-1\otimes a_0a_1\otimes a_2+1\otimes a_0\otimes a_1a_2$, and $h_0d_1(a_0\otimes a_1\otimes a_2)=1\otimes a_0a_1\otimes a_2-1\otimes a_0\otimes a_1a_2$. In general the same opposite-sign pairing yields $$d_{n+1}h_n+h_{n-1}d_n=1\quad(n\geq0),$$ where $d_0:=\varepsilon$, and $\varepsilon h_{-1}=1_A$. If $A=k$, [F8] identifies every bar term with $k$ and every face with the identity, so $d_n=(\sum_{r=0}^n(-1)^r)1_k$ is zero for odd $n$ and the identity for even $n$. [F1, F8, F15, given, algebra]

1.2 By the assumed AC [F11] and the basis theorem [F5], choose a $k$-basis $B$ of $A$. For every $n\geq1$, [F6] applied inductively gives the basis of $A^{\otimes_k n}$ consisting of tensors $b_1\otimes\cdots\otimes b_n$ with $b_i\in B$. For $n=0$, use the basis $\{1_k\}$ of $A^{\otimes_k0}=k$. Let $B_n$ denote these basis index sets. Using [F7]–[F9], $$A^{\otimes_k n}\otimes_k A^e\cong\bigoplus_{B_n}(k\otimes_k A^e)\cong(A^e)^{(B_n)}$$ as right $A^e$-modules, where the canonical map on pure tensors is $$((a_1\otimes\cdots\otimes a_n)\otimes(a\otimes b^{\mathrm{op}}))\longmapsto b\otimes a_1\otimes\cdots\otimes a_n\otimes a.$$ For $n=0$, it sends $1_k\otimes(a\otimes b^{\mathrm{op}})$ to $b\otimes a$. The inverse extracts the middle tensor and the two outer factors; multilinearity makes both maps well-defined by [F15]. By [F2], multiplication by $c\otimes d^{\mathrm{op}}$ sends the outer factors to $db$ and $ac$ on each side, so this isomorphism respects the right action. By [F12], this right free module is a free left $(A^e)^{\mathrm{op}}$-module. [F1, F2, F5, F6, F7, F8, F9, F11, F12, F15, given, algebra]

2.1 Similarly, $$A^e\otimes_k A^{\otimes_k n}\cong\bigoplus_{B_n}(A^e\otimes_k k)\cong(A^e)^{(B_n)}$$ as left $A^e$-modules, by the map $$((a\otimes b^{\mathrm{op}})\otimes(a_1\otimes\cdots\otimes a_n))\longmapsto a\otimes a_1\otimes\cdots\otimes a_n\otimes b.$$ For $n=0$, it sends $(a\otimes b^{\mathrm{op}})\otimes1_k$ to $a\otimes b$. The inverse extracts the two outer factors and the middle tensor. Left multiplication by $c\otimes d^{\mathrm{op}}$ sends those outer factors to $ca$ and $bd$ on both sides, by [F2], and [F15] makes the maps well-defined. Thus, using the separate outer actions in [F1]–[F2] and the basis in step 1.2, every bar term is free on both sides. [step 1.2, F1, F2, F6, F7, F8, F9, F15, given, algebra]

2.2 If $z\in\ker\varepsilon$, step 1.1 gives $z=d_1h_0(z)$. If $n\geq1$ and $z\in\ker d_n$, it gives $z=d_{n+1}h_n(z)$. Conversely, each image lies in the next kernel by [F3]. Also $\varepsilon h_{-1}=1_A$, so $\varepsilon$ is onto. The augmented bar complex is therefore exact as a complex of $k$-vector spaces. Since each differential and the augmentation are $A^e$-linear by [F3] and the target actions are those of [F4], these elementwise kernel-image equalities are exactness in both module categories by [F12] and [F16]. The contraction need not be $A^e$-linear. [step 1.1, F3, F4, F12, F16, given, algebra]

3.1 By the assumed AC [F11], each free module in steps 1.2 and 2.1 is projective by [F10], applying that theorem to the ring $A^e$ for left modules and $(A^e)^{\mathrm{op}}$ for right modules via [F12]. Therefore every bar term is projective in both module categories. [step 1.2, step 2.1, F10, F11, F12, given]

4.1 By [F13], the left $A^e$-module category and the left $(A^e)^{\mathrm{op}}$-module category are abelian; by [F12] the latter is the right $A^e$-module category. Steps 2.2 and 3.1 give exactness and termwise projectivity in each category. Thus [F14] makes $\operatorname{Bar}(A)\to A$ a projective resolution on both sides. AC is used to obtain a basis of $A$ and for projectivity of free modules with arbitrary basis; the contracting homotopy and exactness calculation are choice-free. [step 2.2, step 3.1, F11, F12, F13, F14, given] $\square$
