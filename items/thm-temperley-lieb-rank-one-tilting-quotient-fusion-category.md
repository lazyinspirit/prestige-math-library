---
id: thm-temperley-lieb-rank-one-tilting-quotient-fusion-category
kind: theorem
title: "The rank-one tilting quotient is the truncated fusion category"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-temperley-lieb-rank-one-lusztig-tilting-category
  - lem-temperley-lieb-rank-one-weyl-and-dual-weyl-filtrations
  - lem-temperley-lieb-rank-one-tilting-character-and-dimension
  - lem-negligible-morphisms-form-a-tensor-ideal-by-partial-trace
  - def-negligible-morphism-in-a-pivotal-category
  - thm-basic-properties-of-the-categorical-trace
  - lem-temperley-lieb-rank-one-ribbon-structure-from-the-finite-r-series
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stephen F. Sawin, Quantum Groups at Roots of Unity and Modularity"
      url: "https://arxiv.org/pdf/math/0308281"
      locator: "Theorem 5 and full proof, printed pp. 25–26: semisimple ribbon quotient of the type-1 tilting category."
    - title: "Henning Haahr Andersen and Daniel Tubbenhauer, Diagram Categories for Uq-Tilting Modules at Roots of Unity"
      url: "https://arxiv.org/pdf/1409.2799"
      locator: "§§2.4–2.5 and §4.4, PDF pp. 10–16 and 41–46: rank-one tilting characters and diagram quotient comparison."
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§4.7, Theorem 4.7.15, printed pp. 109–110: spherical left/right trace comparison over an algebraically closed field."
verification:
  precheck: escalated
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

For every $\ell\ge3$, let $\mathcal T_\ell$ be the full finite-dimensional integrable type-1 tilting category of [[def-temperley-lieb-rank-one-lusztig-tilting-category]], and $\mathcal N_\ell$ its negligible ideal. The quotient with the same objects and morphism spaces $\operatorname{Hom}_{\mathcal T_\ell}(X,Y)/\mathcal N_\ell(X,Y)$ is a finite semisimple ribbon category. Its simple objects are exactly $T(0),\ldots,T(\ell-2)$, of pivotal dimensions $[a+1]_q$, and

$$[T(a)][T(b)]=\sum_{\substack{|a-b|\le c\le\min(a+b,2\ell-4-a-b)\\c\equiv a+b\ (2)}}[T(c)]\qquad(0\le a,b\le\ell-2).$$

Here a fusion category means a $\mathbb C$-linear rigid semisimple monoidal category with simple unit and finitely many simple isomorphism classes. The quotient is spherical with the specified positive pivotal dimensions and inherits the full ribbon structure, including even $\ell$.

## Facts & Assumptions

**Given:** The full toral-character tilting category, all $\ell\ge3$, and the pivotal negligible pairing.

[F1] [[def-temperley-lieb-rank-one-lusztig-tilting-category]] specifies the category. [[lem-temperley-lieb-rank-one-weyl-and-dual-weyl-filtrations]] proves its tensor stability, full indecomposable classification, tensor Weyl factors and Ext orthogonality.

[F2] [[lem-temperley-lieb-rank-one-tilting-character-and-dimension]] proves retained simplicity, positive dimensions and zero trace for every endomorphism of each outside indecomposable.

[F3] [[def-negligible-morphism-in-a-pivotal-category]] defines the pairing. The full tilting category is braided by [F4], so the braided alternative of [[lem-negligible-morphisms-form-a-tensor-ideal-by-partial-trace]] proves its tensor-ideal property before taking any quotient. No sphericality of the quotient is assumed to construct it.

[F4] [[lem-temperley-lieb-rank-one-ribbon-structure-from-the-finite-r-series]] proves the full braiding, duality, positive-$K$ pivotal map and ribbon twist on all tiltings.

[F5] [[thm-basic-properties-of-the-categorical-trace]] gives cyclicity and additivity of the pivotal trace.

## Proof

1.1 By [F1] every object decomposes into finitely many indecomposable $T(m)$. By [F2], all $T(m)$ with $m\ge\ell-1$ have negligible identities and become zero. For retained $a$, $T(a)=\Delta(a)=\nabla(a)$ is simple; Hom orthogonality in [F1] gives $\operatorname{Hom}(T(a),T(b))=\delta_{ab}\mathbb C$. Thus the subcategory of retained sums has rectangular matrix Hom spaces. Its trace on each endomorphism block is $[a+1]$ times the ordinary matrix trace, by [F2,F5]. These nonzero weights make the pairing with the reverse Hom space nondegenerate. Consequently a morphism is negligible exactly when its retained-to-retained block vanishes; all its other blocks factor through negligible summands and are negligible by [F3]. Hence the quotient is precisely the semisimple category of retained sums, with the asserted complete simple list. [F1, F2, F3, F5, given, algebra]

2.1 The tensor product and composition descend by the tensor-ideal property [F3]. The unit $T(0)$ has scalar endomorphisms and dimension $1$, so is simple and survives. The dual of $T(m)$ is an indecomposable tilting of the same highest weight: its character is symmetric, duality preserves indecomposability, and [F1] classifies it as $T(m)$. Thus duality preserves both the retained and negligible parts of step 1.1; it descends, and the evaluation/coevaluation snakes remain identities in the quotient. The invertible braidings, pivotal maps and dual-compatible twist of [F4] descend by naturality and [F3]. The quotient is therefore rigid and ribbon. Left and right pivotal traces on retained simples are respectively the sums of their $K$ and $K^{-1}$ weight eigenvalues; symmetric strings make them equal to $[a+1]$. Additivity and the matrix-block description prove equality on all endomorphisms, so the quotient is spherical. [F1, F2, F3, F4, F5, step 1.1, algebra]

3.1 Put $k=\ell-2$, $S_a=[T(a)]$ for $0\le a\le k$, and $x=S_1$. The tensor filtration [F1] for $V\otimes\Delta(a)$ has factors $\Delta(a+1),\Delta(a-1)$, omitting the negative label at $a=0$. For $a\le k$ these factors are simple tiltings, including $\Delta(\ell-1)$ at the boundary, by [F2]. Their extensions split by [F1]'s Ext orthogonality, since each is both Weyl and dual Weyl. Hence in the quotient $xS_a=S_{a-1}+S_{a+1}$ with $S_{-1}=S_{k+1}=0$, $S_0=1$. For $k=1$ this says $x^2=1$. Define integer polynomials $P_0=1$, $P_1=x$, $P_{a+1}=xP_a-P_{a-1}$. Then $S_a=P_a(x)$ and $P_{k+1}(x)=0$. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Induction with this recurrence gives the polynomial identity $P_aP_b=\sum_{c=|a-b|,\ |a-b|+2,\ldots,a+b}P_c$: for $b=0$ it is immediate, and subtracting the preceding $b-1$ identity from $x$ times the $b$ identity cancels its two interior shifted sums and leaves the $b+1$ endpoints. Modulo $P_{k+1}=0$, the same recurrence gives $P_{k+1+j}=-P_{k+1-j}$. The terms above $k$ in the product sum therefore cancel the retained terms from $2k+2-a-b$ upwards, with matching parity; a possible term $P_{k+1}$ is zero. The remaining indices are precisely $|a-b|\le c\le\min(a+b,2k-a-b)$ of parity $a+b$. The simple classes are independent by step 1.1, so this class identity is the actual direct-sum multiplicity rule, not merely a character prediction. Since $2k=2\ell-4$, it is the displayed formula. All arguments preserve every $\ell\ge3$ and complete the theorem. [F1, step 1.1, step 3.1, induction, algebra] ∎
