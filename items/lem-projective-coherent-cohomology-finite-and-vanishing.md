---
id: lem-projective-coherent-cohomology-finite-and-vanishing
kind: lemma
title: "Projective coherent finiteness and large twist vanishing"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-direct-sum-of-a-family-of-modules
  - def-exact-sequence-sheaves
  - def-finite-type-finite-presentation-module-sheaf
  - def-globally-generated-sheaf
  - def-invertible-sheaf
  - def-locally-noetherian-and-noetherian-scheme
  - def-noetherian-ring-and-module
  - def-relative-projective-space-standard-charts
  - def-twisting-sheaf-proj
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - lem-closed-immersion-cohomology-pushforward
  - lem-very-ample-implies-ample
  - def-very-ample-invertible-sheaf-relative
  - lem-eventual-global-generation-coherent-twists
  - lem-invertible-sheaf-dual-tensor-inverse
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-cohomological-dimension-projective-n-space
  - thm-cohomology-projective-space-twisting-sheaves
  - thm-kernels-cokernels-qc-modules
  - thm-long-exact-sequence-sheaf-cohomology
  - thm-projective-space-as-proj
  - thm-support-finite-type-qc-closed
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Sections 30.15-30.16 (Tags 0B5S, 01XS)"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Robin Hartshorne, Algebraic Geometry, Theorem III.5.2"
      url: "https://doi.org/10.1007/978-1-4757-3849-0"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Section 28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a Noetherian
commutative ring, let $n\ge0$, let $X=\mathbb P^n_A$ with twisting sheaves
$\mathcal O_X(m)$ ([[def-twisting-sheaf-proj]],
[[def-relative-projective-space-standard-charts]]) and let $\mathcal G$ be a
coherent $\mathcal O_X$-module ([[def-coherent-module-scheme]]). Then:

1. $H^q(X,\mathcal G)$ is a finite $A$-module for every $q\ge0$;
2. for every $q>0$ there is an integer $m_0=m_0(\mathcal G,q)$ such that
   $H^q(X,\mathcal G(m))=0$ for all $m\ge m_0$, where
   $\mathcal G(m)=\mathcal G\otimes_{\mathcal O_X}\mathcal O_X(m)$.

The same two conclusions hold for a closed subscheme
$i:X\hookrightarrow\mathbb P^n_A$ and a coherent $\mathcal O_X$-module
$\mathcal G$, with $\mathcal O_X(1)=i^*\mathcal O_{\mathbb P^n_A}(1)$ and
$\mathcal G(m)=\mathcal G\otimes_{\mathcal O_X}\mathcal O_X(m)$. The zero
module, the zero ring $A=0$ and the case $n=0$ are included.

## Facts & Assumptions
**Given:** The Axiom of Choice, a Noetherian commutative ring $A$, a coherent sheaf $\mathcal G$ on $\mathbb P^n_A$ (and, for the last clause, a closed subscheme $i:X\hookrightarrow\mathbb P^n_A$ with a coherent $\mathcal G$ on $X$).

[F1] For Noetherian $A$ the scheme $\mathbb P^n_A$ is locally Noetherian: the
standard affine charts are spectra of polynomial rings in finitely many
variables over $A$, which are Noetherian rings, and $\mathbb P^n_A$ is
quasi-compact as it is covered by the $n+1$ standard charts. On a locally
Noetherian scheme a quasi-coherent module is coherent exactly when it is of
finite type, and kernels, cokernels, images and extensions of coherent modules
are coherent.
([[thm-projective-space-as-proj]],
[[def-relative-projective-space-standard-charts]],
[[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]],
[[def-locally-noetherian-and-noetherian-scheme]],
[[thm-coherent-sheaves-abelian-noetherian-scheme]],
[[def-coherent-module-scheme]],
[[def-finite-type-finite-presentation-module-sheaf]])

[F2] The support $\{x:\mathcal H_x\ne0\}$ of a quasi-coherent module of finite
type is closed; in particular a finite-type quasi-coherent module with zero
stalk at a point vanishes on an open neighbourhood of that point.
([[thm-support-finite-type-qc-closed]])

[F3] The identity closed immersion $\mathbb P^n_A\to\mathbb P^n_A$ exhibits $\mathcal O(1)$ as H-very ample relative to the affine base; the projection is quasi-compact by its finite standard affine cover, so $\mathcal O(1)$ is ample by [[lem-very-ample-implies-ample]] and [[def-very-ample-invertible-sheaf-relative]]. Global generation and eventual generation: $\mathcal H$ is globally
generated when its evaluation map
$\Gamma(X,\mathcal H)\otimes_{\mathbb Z}\mathcal O_X\to\mathcal H$ is
surjective, and for a coherent $\mathcal G$ on $\mathbb P^n_A$ projective over
the Noetherian ring $A$ the twist $\mathcal G(m)$ is globally generated for all
$m\ge m_1(\mathcal G)$.
([[def-globally-generated-sheaf]],
[[lem-eventual-global-generation-coherent-twists]])

[F4] Twists: $\mathcal O_X(m)$ is invertible, with
$\mathcal O_X(m)\otimes\mathcal O_X(-m)\cong\mathcal O_X$; tensoring by an
invertible module is exact and preserves coherence, because on an open cover
the twisting module is trivial and exactness and coherence are local. The
cohomology of twists on projective space is known: for every $d$,
$H^q(\mathbb P^n_A,\mathcal O(d))=0$ unless $q=0$ or $q=n$, with
$H^0(\mathbb P^n_A,\mathcal O(d))$ free of finite rank for every $d$, and it is
zero for $d<0$ when $n\ge1$; for $n=0$ it is $A$ for every $d$. The top group
$H^n(\mathbb P^n_A,\mathcal O(d))$ is free of finite rank (possibly zero) for
every $d$; moreover $H^q(\mathbb P^n_A,\mathcal F)=0$ for every
$q>n$ and every quasi-coherent $\mathcal F$.
([[def-invertible-sheaf]], [[lem-invertible-sheaf-dual-tensor-inverse]],
[[thm-cohomology-projective-space-twisting-sheaves]],
[[thm-cohomological-dimension-projective-n-space]],
[[def-exact-sequence-sheaves]],
[[def-direct-sum-of-a-family-of-modules]])

[F5] The long exact sequence: a short exact sequence of sheaves of modules
$0\to\mathcal A\to\mathcal B\to\mathcal C\to0$ on a scheme yields an exact
sequence of abelian groups
$\cdots\to H^q(X,\mathcal A)\to H^q(X,\mathcal B)\to H^q(X,\mathcal C)\to
H^{q+1}(X,\mathcal A)\to\cdots$.
([[thm-long-exact-sequence-sheaf-cohomology]])

[F6] Over a Noetherian ring, submodules and quotient modules of finite modules
are finite.
([[def-noetherian-ring-and-module]])

[F7] Closed immersions preserve cohomology and coherence of pushforwards: for a
closed immersion $i:X\to Y$ and a quasi-coherent $\mathcal G$ on $X$ one has
$H^q(X,\mathcal G)\cong H^q(Y,i_*\mathcal G)$ for all $q\ge0$, and if $Y$ is
locally Noetherian and $\mathcal G$ is coherent then $i_*\mathcal G$ is
coherent.
([[lem-closed-immersion-cohomology-pushforward]])

[F8] A map $\mathcal O_X^{\oplus N}\to\mathcal H$ is surjective if and only if
its cokernel is zero, and the cokernel of a map of quasi-coherent finite-type
modules is quasi-coherent of finite type; its support is closed by [F2].
([[thm-kernels-cokernels-qc-modules]])

[F9] The Axiom of Choice states that every family of nonempty sets has a
choice function. ([[def-axiom-of-choice]])



## Proof

**Proof technique:** direct: use global generation of a high twist to present a coherent sheaf as a quotient of a finite sum of line bundles, then run two descending inductions on the cohomological degree, one for vanishing of high twists and one for finiteness; transport the result along a closed immersion for the subscheme clause.

1.1 Setup. Since $A$ is Noetherian, $X=\mathbb P^n_A$ is locally Noetherian and quasi-compact by [F1]. Fix a coherent $\mathcal G$; by [F1] it is quasi-coherent of finite type, and so are all its twists by [F4]. [F1, F4]

1.2 Base of both inductions. By [F4] one has $H^q(X,\mathcal F)=0$ for every $q>n$ and every quasi-coherent $\mathcal F$, in particular for coherent ones; this is the base case $q=n+1$ of both descending inductions below. [F4]

1.3 A finite presentation by line bundles. By [F3] there is $m_1$ such that $\mathcal G(m_1)$ is globally generated, so the evaluation map $\Gamma(X,\mathcal G(m_1))\otimes_{\mathbb Z}\mathcal O_X\to\mathcal G(m_1)$ is surjective. For each point $x$ choose finitely many global sections generating the finitely generated stalk $\mathcal G(m_1)_x$; the cokernel of the induced map $\mathcal O_X^{\oplus N_x}\to\mathcal G(m_1)$ is quasi-coherent of finite type with zero stalk at $x$, hence vanishes on an open neighbourhood of $x$ by [F2] and [F8], and finitely many such neighbourhoods cover the quasi-compact space $X$ by [F1]. The union of the corresponding finite sets of sections gives $N<\infty$ and a surjection $p:\mathcal O_X^{\oplus N}\to\mathcal G(m_1)$; twisting by the invertible module $\mathcal O_X(-m_1)$ is exact and preserves coherence by [F4], so it yields an exact sequence $$0\longrightarrow\mathcal K\longrightarrow\mathcal E\xrightarrow{\ q\ }\mathcal G\longrightarrow0,\qquad \mathcal E=\mathcal O_X(-m_1)^{\oplus N},$$ with $\mathcal K$ coherent by [F1] and [F4]. [F1, F2, F3, F4, F8]

2.1 Vanishing of high twists in positive degrees. We prove by descending induction on $q$ the statement $V(q)$: for every coherent $\mathcal F$ there is $m_0(\mathcal F,q)$ with $H^q(X,\mathcal F(m))=0$ for all $m\ge m_0(\mathcal F,q)$. For $q>n$ this holds with $m_0=0$ for every $\mathcal F$ by 1.2. Assume $q\ge1$ and $V(q+1)$. Apply 1.3 to $\mathcal F$: there are $a\ge0$ and a coherent $\mathcal K$ with an exact sequence $0\to\mathcal K\to\mathcal O_X(-a)^{\oplus N}\to\mathcal F\to0$; twisting by $\mathcal O_X(m)$ and applying [F5] gives the exact segment $$H^q(X,\mathcal O_X(m-a))^{\oplus N}\longrightarrow H^q(X,\mathcal F(m))\longrightarrow H^{q+1}(X,\mathcal K(m))\longrightarrow H^{q+1}(X,\mathcal O_X(m-a))^{\oplus N}.$$ By [F4], $H^q(X,\mathcal O_X(m-a))=0$ for every $m$ when $1\le q<n$, and for $q=n$ when $m-a\ge-n$; for $q>n$ it vanishes by 1.2. Likewise $H^{q+1}(X,\mathcal O_X(m-a))=0$ for $m$ large: $q+1\ge2$, and if $q+1<n$ the group vanishes for all $m$, if $q+1=n$ it vanishes for $m-a\ge-n$, and if $q+1>n$ it vanishes by 1.2. Hence for $m$ large the outer groups vanish and exactness gives $H^q(X,\mathcal F(m))\cong H^{q+1}(X,\mathcal K(m))$, which is zero for $m\ge m_0(\mathcal K,q+1)$ by $V(q+1)$. Thus $V(q)$ holds, and with 1.2 the induction proves (2) for every $q>0$. [F4, F5, step 1.2, step 1.3]

2.2 Finiteness. We prove by descending induction on $q$ the statement $F(q)$: $H^q(X,\mathcal F)$ is a finite $A$-module for every coherent $\mathcal F$. For $q>n$ this is 1.2. Assume $q\le n$ and $F(q+1)$, and apply 1.3 to $\mathcal F$ to get $0\to\mathcal K\to\mathcal O_X(-a)^{\oplus N}\to\mathcal F\to0$. By [F4] each $H^q(X,\mathcal O_X(-a))$ and each $H^{q+1}(X,\mathcal O_X(-a))$ is a finite free $A$-module (possibly zero), so $H^q$ and $H^{q+1}$ of $\mathcal E=\mathcal O_X(-a)^{\oplus N}$ are finite $A$-modules, being finite direct sums; and $H^{q+1}(X,\mathcal K)$ is finite by $F(q+1)$. The exact segment of [F5], $$H^q(X,\mathcal E)\to H^q(X,\mathcal F)\to H^{q+1}(X,\mathcal K)\to H^{q+1}(X,\mathcal E),$$ gives a short exact sequence from the image of $H^q(X,\mathcal E)$ in $H^q(X,\mathcal F)$ to $H^q(X,\mathcal F)$ and then to the kernel of $H^{q+1}(X,\mathcal K)\to H^{q+1}(X,\mathcal E)$. The first term is a quotient of the finite module $H^q(X,\mathcal E)$, and the last is a submodule of the finite module $H^{q+1}(X,\mathcal K)$, hence both are finite by [F6]. Lifting finite generators of the last term and adjoining finite generators of the first proves that $H^q(X,\mathcal F)$ is finite. The induction gives (1) for every $q\ge0$. [F4, F5, F6, step 1.2, step 1.3]

3.1 The closed subscheme clause. Let $i:X\hookrightarrow\mathbb P^n_A$ be a closed immersion and $\mathcal G$ coherent on $X$. By [F7] the pushforward $i_*\mathcal G$ is coherent on $\mathbb P^n_A$ and $H^q(X,\mathcal G)\cong H^q(\mathbb P^n_A,i_*\mathcal G)$ for all $q$, so (1) for $\mathcal G$ follows from 2.2 applied to $i_*\mathcal G$. For the twists, fix $m$; the identity $i_*(\mathcal G(m))\cong(i_*\mathcal G)(m)$ holds, because on an affine open $U=\operatorname{Spec}R$ of $\mathbb P^n_A$ contained in a standard chart the twisting module $\mathcal O(1)$ is free of rank one, so $i^{-1}(U)$ also lies where $i^*\mathcal O(1)$ is free; writing $i^{-1}(U)=\operatorname{Spec}(R/I)$ one has $\Gamma(i^{-1}U,\mathcal G(m))=\Gamma(i^{-1}U,\mathcal G)$ and $(i_*\mathcal G)(m)(U)=\Gamma(i^{-1}U,\mathcal G)\otimes_R R$, which agree, and on principal opens $D(f)\subseteq U$ both sides are the corresponding localisation with the same restriction maps; since the opens $U$ contained in standard charts form a basis, the two sheaves are equal. Hence $H^q(X,\mathcal G(m))\cong H^q(\mathbb P^n_A,(i_*\mathcal G)(m))$, which vanishes for $q>0$ and $m$ large by 2.1 applied to the coherent sheaf $i_*\mathcal G$. [F7, step 2.1, step 2.2]

4.1 Boundaries and choice accounting. If $\mathcal G=0$ then all groups vanish and $m_0=0$ works. If $A=0$ then $\mathbb P^n_A=\varnothing$ and $X=\varnothing$ for the closed subscheme clause, all groups are zero and finite over the zero ring, and the statements hold vacuously. If $n=0$ then $X=\operatorname{Spec}A$ is affine and $H^q=0$ for $q>0$ by [F4]; degree zero is $\Gamma(X,\mathcal G)$, a finite $A$-module for coherent $\mathcal G$ by [F1] and [F6] (for a closed subscheme of $\operatorname{Spec}A$ the pushforward is a finite module over the Noetherian ring). For $q=n\ge1$ the threshold in 2.1 includes the constraint $m\ge a-n$ from $H^n(\mathcal O_X(m-a))$, so finitely many small twists may be nonzero and the threshold is not effective. The Axiom of Choice [F9] is consumed through the affine charts, the finite generating selections in 1.3 and the long exact sequence; the inductions use no further choice of ideals or resolutions. [F1, F4, F6, F9, step 1.3, step 2.1] ∎
