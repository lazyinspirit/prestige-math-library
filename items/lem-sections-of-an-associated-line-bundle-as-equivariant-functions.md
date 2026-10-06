---
id: lem-sections-of-an-associated-line-bundle-as-equivariant-functions
kind: lemma
title: Sections of an associated line bundle as equivariant functions
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps:
- def-borel-character-equivariant-line-bundle
- lem-semisimple-flag-torsor-zariski-charts
- lem-semisimple-borel-root-factorization
- def-complex-semisimple-algebraic-group-borel-and-flag-variety
- def-sheaf-cohomology-derived-global-sections
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Joshua Ng (Hoi Hei Jan Sum), The Borel-Weil-Bott Theorem (Chicago REU 2015)"
      url: "https://math.uchicago.edu/~may/REU2015/REUPapers/Ng.pdf"
      locator: "Sections 3-6, printed pp. 6-14: homogeneous vector bundles and local triviality, induced representations and Frobenius reciprocity, and the Borel-Weil theorem"
    - title: "Xiong Rui, Borel-Weil and Borel-Weil-Bott, Lecture 1"
      url: "https://cubicbear.github.io/doc/BorelWeil.pdf"
      locator: "Sections 1.5-1.8, printed pp. 2-4: characters, the associated line bundle, and the identification of sections with functions of prescribed B-equivariance"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $G$ be the connected
simply connected complex semisimple affine algebraic group with Borel
$B=T\ltimes U$ and flag variety $X=G/B$ of
[[def-complex-semisimple-algebraic-group-borel-and-flag-variety]] and
[[lem-semisimple-borel-root-factorization]], and let
$\mathcal L_\lambda=G\times^B\mathbb C_{-\lambda}$ be the Borel-character
equivariant line bundle of [[def-borel-character-equivariant-line-bundle]].
Restriction along the $B$-torsor $G\to X$ of
[[lem-semisimple-flag-torsor-zariski-charts]] identifies the global sections of
$\mathcal L_\lambda$ with the regular functions on $G$ satisfying
$f(gb)=\lambda(b)f(g)$:
$$H^0(X,\mathcal L_\lambda)\cong\{f\in\mathcal O(G):f(gb)=\lambda(b)f(g)\text{ for all }g\in G,\ b\in B\},$$
an isomorphism natural in $\lambda$. Under it the left translation action
$(g_0\cdot f)(g)=f(g_0^{-1}g)$ corresponds to the $G$-action on sections
induced by the equivariant structure, and evaluation at the identity,
$\mathrm{ev}_1(f)=f(1)$, is a $B$-equivariant linear map into the fibre
$\mathbb C_{-\lambda}$ of $\mathcal L_\lambda$ at $eB$, where $B$ acts on the
function space by right translation, $(b\cdot f)(g)=f(gb^{-1})$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the group $G$, its Borel $B=T\ltimes U$, the flag variety $X=G/B$, the quotient map $\pi:G\to X$, $\pi(g)=gB$, the character $\lambda\in X^*(T)$ extended to $B$, and the associated line bundle $\mathcal L_\lambda=G\times^B\mathbb C_{-\lambda}$.

[F1] The orbit map $\pi_B:G\to X$ is a Zariski-locally trivial right $B$-torsor whose fppf sheaf quotient is $X$; its charts are translates of the big-cell chart and finitely many of them cover the quasi-compact variety $X$; on overlaps of charts the two trivializations differ by a morphism into $B$, and every associated bundle, in particular $G\times^B\mathbb C_{-\lambda}$, is Zariski locally trivial on those charts ([[lem-semisimple-flag-torsor-zariski-charts]]).

[F2] The bundle is $\mathcal L_\lambda=(G\times\mathbb C)/{\sim}$ with $(gb,v)\sim(g,\lambda(b)^{-1}v)$, projection $[g,v]\mapsto gB$, left action $g'\cdot[g,v]=[g'g,v]$, right action $[g,v]\cdot b=[gb,v]=[g,\lambda(b)^{-1}v]$, fibre $\mathbb C_{-\lambda}$ at $eB$ on which $b$ acts by $v\mapsto\lambda(b)^{-1}v$, and canonical identifications $\mathcal L_\lambda\otimes\mathcal L_\mu\cong\mathcal L_{\lambda+\mu}$ and $\mathcal L_\lambda^\vee\cong\mathcal L_{-\lambda}$ induced by multiplication of scalars and duality of one-dimensional character modules ([[def-borel-character-equivariant-line-bundle]]).

[F3] $X=G/B$ is the quotient with $B$ acting on $G$ by right translation, so the fibre of $\pi$ over $gB$ is the right coset $gB$, and $\pi$ is $G$-equivariant for left translation on $G$ and on $X$ ([[def-complex-semisimple-algebraic-group-borel-and-flag-variety]], [[lem-semisimple-flag-torsor-zariski-charts]]).

[F4] The global sections of a sheaf $\mathcal F$ on $X$ are $H^0(X,\mathcal F)=\Gamma(X,\mathcal F)$, and $H^0$ is a functor on sheaves; a section of a sheaf on a variety may be specified by regular local sections on an open cover that agree on overlaps ([[def-sheaf-cohomology-derived-global-sections]]).

[F5] The torus character $\lambda$ extends uniquely to a character of $B$, trivial on $U$, and the group law of $X^*(T)$ is written additively, so $-\lambda$ is the character $b\mapsto\lambda(b)^{-1}$ ([[lem-semisimple-borel-root-factorization]], [[def-borel-character-equivariant-line-bundle]]).

## Proof

1.1 By [F1] the map $\pi$ is a Zariski-locally trivial $B$-torsor, so $X$ has a finite open cover by charts $V_i$ on which $\pi$ admits regular sections $\sigma_i:V_i\to G$, with $\pi\circ\sigma_i=\mathrm{id}$; on an overlap $V_i\cap V_j$ the two sections satisfy $\sigma_j(x)=\sigma_i(x)b_{ij}(x)$ for a morphism $b_{ij}:V_i\cap V_j\to B$, because both points lie in the same fibre, which is a right $B$-coset by [F3], and the two trivializations of the associated bundle over the overlap differ by $b_{ij}$, as [F1] records. [F1, F3, given]

2.1 Let $s\in H^0(X,\mathcal L_\lambda)$. Its pullback $\pi^*s$ is a regular section of $\pi^*\mathcal L_\lambda$ over $G$, and the pullback of an associated bundle along the torsor projection is canonically trivial: the map $\tau:G\times\mathbb C\to\pi^*\mathcal L_\lambda$, $\tau(g,v)=(g,[g,v])$, is an isomorphism over $G$, since it is bijective on the fibre $\pi^{-1}(\pi(g))=gB$ by the relation $[gb,v]=[g,\lambda(b)^{-1}v]$ of [F2] and is the identity trivialization over each chart of [F1]. Write $\tau^{-1}(\pi^*s)(g)=(g,f(g))$ for a regular function $f\in\mathcal O(G)$. For $b\in B$ one has $s(\pi(gb))=s(\pi(g))$ by [F3], while $s(\pi(gb))=[gb,f(gb)]$ and $s(\pi(g))=[g,f(g)]=[gb,\lambda(b)f(g)]$ by [F2]; the second coordinate of the class over $gb$ is unique, so $f(gb)=\lambda(b)f(g)$. This defines the map from sections to functions. [F2, F3, F4, step 1.1, algebra, F5]

2.2 Conversely, let $f\in\mathcal O(G)$ satisfy $f(gb)=\lambda(b)f(g)$ for all $g,b$, and define $s(x)=[g,f(g)]$ for any $g$ with $\pi(g)=x$. This is well-defined: every other representative of $x$ is $gb$ with $b\in B$ by [F3], and $[gb,f(gb)]=[gb,\lambda(b)f(g)]=[g,f(g)]$ by [F2]. It is a section: the projection sends $s(x)=[g,f(g)]$ to $gB=x$. It is regular: on a chart $V_i$ of step 1.1 the formula $s(x)=[\sigma_i(x),f(\sigma_i(x))]$ exhibits $s$ as a composition of regular maps into the locally trivial bundle $\mathcal L_\lambda$, and regularity is local on the cover $\{V_i\}$, which is finite by [F1]; since $s$ is a section, the compatibility of the local formulae on overlaps is automatic from well-definedness. [F1, F2, F3, F4, given, algebra]

3.1 The two constructions are inverse: a function $f$ recovered from $s$ satisfies $[g,f(g)]=\pi^*s(g)=s(\pi(g))$, so reconstructing $s$ from $f$ returns the original section, and starting from $f$ the recovered function is $g\mapsto$ second coordinate of $[g,f(g)]$, which is $f(g)$. The identification is natural in $\lambda$: the canonical isomorphism $\mathcal L_\lambda\otimes\mathcal L_\mu\to\mathcal L_{\lambda+\mu}$ of [F2] sends $[g,u]\otimes[g,v]$ to $[g,uv]$, so on sections it corresponds to pointwise multiplication of the functions assigned to $\lambda$ and $\mu$. The dual bundle isomorphism is the fibrewise dual construction; evaluation $\mathcal L_\lambda\otimes\mathcal L_{-\lambda}\to\mathcal O_X$ corresponds to pointwise multiplication of functions with opposite $B$-equivariance. In particular, the dictionary does not identify a dual section with the pointwise reciprocal of an arbitrary section. These constructions are compatible with the trivialization $\tau$ used above. [F2, F4, step 2.1, step 2.2, algebra]

4.1 For left translation: the equivariant structure acts on a section $s$ by $(g_0\cdot s)(x)=g_0\cdot s(g_0^{-1}x)$ and $g_0\cdot[g,v]=[g_0g,v]$ by [F2], so the function of $g_0\cdot s$ is $g\mapsto$ second coordinate of $g_0\cdot[g_0^{-1}g,f(g_0^{-1}g)]$, which is $f(g_0^{-1}g)$; this is the stated left translation action. For the right $B$-action on sections $(b\cdot s)(x)=s(x)\cdot b$, the associated function is $(b\cdot f)(g)=\lambda(b)^{-1}f(g)=f(gb^{-1})$ by [F2], so $\mathrm{ev}_1(b\cdot f)=(b\cdot f)(1)=f(b^{-1})=\lambda(b)^{-1}f(1)=b\cdot(\mathrm{ev}_1 f)$ for the action $v\mapsto\lambda(b)^{-1}v$ on the fibre $\mathbb C_{-\lambda}$ at $eB$; hence $\mathrm{ev}_1$ is $B$-equivariant into that fibre. Nothing here asserts that $\mathrm{ev}_1$ is surjective: it is the zero map whenever the space of such functions is zero, and the present lemma only identifies that space with $H^0(X,\mathcal L_\lambda)$. [F1, F2, F3, step 3.1, algebra] ∎

## Remarks

The statement and proof are scheme-theoretic: $\mathcal O(G)$ is the ring of regular functions and a morphism into the associated bundle is regular over the charts of [F1]. The sign has been arranged so that the fibre at $eB$ is $\mathbb C_{-\lambda}$; passing to the opposite convention replaces $\lambda$ by $-\lambda$ and dualizes the line bundle.
