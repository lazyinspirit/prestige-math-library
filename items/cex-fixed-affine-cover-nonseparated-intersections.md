---
id: cex-fixed-affine-cover-nonseparated-intersections
kind: counterexample
title: "A nonseparated affine cover can have nonaffine intersection"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-affine-scheme-spectrum
  - def-principal-distinguished-subset-of-spectrum
  - def-multiplicative-subset-and-localisation
  - def-principal-localisation
  - def-monomials-multidegree-and-total-degree
  - lem-spectrum-localization-open-immersion
  - thm-sections-basic-open-affine-scheme
  - thm-gluing-affine-schemes
  - def-acyclic-cover-for-sheaf
  - thm-leray-acyclic-cover-theorem
  - def-cech-cohomology-open-cover
  - def-cech-cochain-complex-open-cover
  - thm-qc-sheaf-affine-higher-cohomology-vanishes
  - def-quasi-coherent-module-scheme
  - thm-separatedness-gluing-overlap-criterion
  - def-separated-morphism-schemes
  - def-scheme-over-base
  - def-sheaf-cohomology-derived-global-sections
  - def-module-on-ringed-space
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement refuted

Assume the Axiom of Choice ([[def-axiom-of-choice]]). The following implication
is false: *if a scheme $X$ is covered by finitely many affine open subschemes,
then every finite intersection of members of that cover is affine.*

Explicitly, let $k$ be a field and let $\mathbb A^2_k=\operatorname{Spec}k[x,y]$
be the affine plane ([[def-affine-scheme-spectrum]]); put
$$U=D(x)\cup D(y)=\mathbb A^2_k\setminus\{0\},$$
the punctured plane, and let $X$ be the scheme obtained by gluing two
copies $U_1,U_2\cong\mathbb A^2_k$ along the identity of $U$
([[thm-gluing-affine-schemes]]). Then $X$ has the affine two-open cover
$X=U_1\cup U_2$, its intersection $U_1\cap U_2\cong U$ is not affine, and
$X$ is not separated
([[def-separated-morphism-schemes]]). The obstruction is cohomological:
$$H^1(U,\mathcal O_U)\neq0,$$
where $H^1$ is sheaf cohomology
([[def-sheaf-cohomology-derived-global-sections]]); the class of the Laurent
monomial $x^{-1}y^{-1}$ in the Čech quotient
$$k[x^{\pm1},y^{\pm1}]\big/\bigl(k[x^{\pm1},y]+k[x,y^{\pm1}]\bigr)$$
under the cover $\{D(x),D(y)\}$ is nonzero and defines a nonzero class in
$H^1(U,\mathcal O_U)$. This is exactly the point at which separatedness enters
the Čech comparison theorem
[[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]], whose proof
derives the affineness of the intersections from separatedness.

## Facts & Assumptions
**Given:** The Axiom of Choice, a field $k$, the affine plane $X_0=\operatorname{Spec}k[x,y]$, the open subscheme $U=D(x)\cup D(y)$ and the two-open cover $\{D(x),D(y)\}$ of $U$.

[F1] Principal opens of the affine plane: $D(x)=\operatorname{Spec}k[x,y]_x$ and $D(y)=\operatorname{Spec}k[x,y]_y$ are affine, with $D(x)\cap D(y)=D(xy)$ and ring $k[x,y]_{xy}$; more generally $\Gamma(D(f),\mathcal O)=k[x,y]_f$ ([[def-principal-distinguished-subset-of-spectrum]], [[def-multiplicative-subset-and-localisation]], [[def-principal-localisation]], [[lem-spectrum-localization-open-immersion]], [[thm-sections-basic-open-affine-scheme]]). A prime $\mathfrak p\subseteq k[x,y]$ lies in $D(x)\cup D(y)$ if and only if $x\notin\mathfrak p$ or $y\notin\mathfrak p$, i.e. if and only if $\mathfrak p\ne(x,y)$; hence $U$ is the complement of the origin, and the intersection $D(x)\cap D(y)=D(xy)$ is nonempty (it contains the zero ideal).

[F2] Laurent monomials: every element of $k[x,y]_{xy}$ has a unique finite expansion $\sum_{m,n\in\mathbb Z}c_{m,n}x^my^n$; the monomials $x^my^n$ are $k$-linearly independent, because an equation between finitely many of them becomes, after multiplication by a high power of $xy$, the unique expansion of a polynomial; so they form a $k$-basis of $k[x,y]_{xy}$. The subring $k[x,y]_x$ is spanned by those monomials with $n\ge0$, and $k[x,y]_y$ by those with $m\ge0$ ([[def-monomials-multidegree-and-total-degree]], [[def-principal-localisation]]).

[F3] Gluing of affine schemes: affine schemes equipped with open subschemes and isomorphisms on overlaps satisfying the identity and cocycle conditions glue to a scheme, uniquely up to unique isomorphism, and the given affine schemes become an open affine cover. ([[thm-gluing-affine-schemes]])

[F4] Leray acyclic-cover comparison: under the Axiom of Choice, for an open cover indexed by a linearly ordered set that is $\mathcal F$-acyclic, i.e. every nonempty finite intersection $W$ satisfies $H^q(W,\mathcal F|_W)=0$ for all $q>0$, the canonical Čech-to-sheaf comparison $\check H^p(\mathcal U,\mathcal F)\to H^p(X,\mathcal F)$ is an isomorphism for every $p\ge0$ ([[thm-leray-acyclic-cover-theorem]], [[def-acyclic-cover-for-sheaf]]). The ordered Čech complex of a two-member cover $U_0,U_1$ is $0\to\mathcal F(U_0)\oplus\mathcal F(U_1)\xrightarrow{\delta^0} \mathcal F(U_0\cap U_1)\to0$ with $\delta^0(s_0,s_1)=s_1|_{U_0\cap U_1}-s_0|_{U_0\cap U_1}$ ([[def-cech-cochain-complex-open-cover]], [[def-cech-cohomology-open-cover]]).

[F5] Affine vanishing: under the Axiom of Choice, on an affine scheme every quasi-coherent module has vanishing higher cohomology ([[thm-qc-sheaf-affine-higher-cohomology-vanishes]]). The structure sheaf $\mathcal O_U$ is quasi-coherent as an $\mathcal O_U$-module, and so are its restrictions to the open affine subschemes $D(x),D(y),D(xy)$ ([[def-quasi-coherent-module-scheme]], [[def-module-on-ringed-space]]).

[F6] Separatedness criterion: for a morphism $f:X\to S$ and affine opens $U',V'\subseteq X$ lying over one and the same affine open of $S$, if $f$ is separated then $U'\cap V'$ is affine. In particular, in a separated scheme any two affine opens lying over a common affine open of the base have affine intersection ([[thm-separatedness-gluing-overlap-criterion]], [[def-separated-morphism-schemes]], [[def-scheme-over-base]]).



## Counterexample

**Proof technique:** direct: the punctured plane is covered by the two affine charts $D(x),D(y)$ with affine overlap $D(xy)$, so the cover is acyclic for the structure sheaf and the Leray comparison computes $H^1$ as the Čech cokernel; the Laurent monomial $x^{-1}y^{-1}$ has negative exponents in both variables and hence survives. Gluing two affine planes along the punctured plane gives the nonseparated scheme with affine two-open cover.

1.1 The cover $\{D(x),D(y)\}$ of $U$ is a finite affine open cover: $D(x)$ and $D(y)$ are affine by [F1] and they cover $U$ by definition of $U$. [F1]

1.2 Its nonempty finite intersections are $D(x)$, $D(y)$ and $D(x)\cap D(y)=D(xy)$, all affine by [F1]. [F1]

1.3 The cover is $\mathcal O_U$-acyclic: on each of these three affine open subschemes the restriction of the quasi-coherent module $\mathcal O_U$ is quasi-coherent, so its higher cohomology vanishes by [F5]. [F5, 1.2]

1.4 By the Leray comparison [F4] applied to this two-member ordered cover and the sheaf $\mathcal O_U$, the canonical map $\check H^1(\{D(x),D(y)\},\mathcal O_U)\to H^1(U,\mathcal O_U)$ is an isomorphism. [F4, 1.3]

1.5 Computing the Čech group: by [F4], $\check H^1=k[x,y]_{xy}/\operatorname{im}\delta^0$ with $C^0=k[x,y]_x\oplus k[x,y]_y$, $C^1=k[x,y]_{xy}$ and $\delta^0(f,g)=g-f$, so $\operatorname{im}\delta^0=k[x,y]_x+k[x,y]_y$ as a subgroup of $k[x,y]_{xy}$. [F1, F4]

1.6 The monomial $x^{-1}y^{-1}$ is not in this image: by [F2] the monomials $x^my^n$ form a $k$-basis of $k[x,y]_{xy}$, the subspace $k[x,y]_x$ is spanned by those with $n\ge0$ and $k[x,y]_y$ by those with $m\ge0$, so their sum is spanned by the monomials with $m\ge0$ or $n\ge0$ and does not contain $x^{-1}y^{-1}$, whose exponents are both $-1$. Hence $x^{-1}y^{-1}$ has nonzero class in $\check H^1$, and by 1.4 a nonzero class in $H^1(U,\mathcal O_U)$; in particular $H^1(U,\mathcal O_U)\ne0$. [F2, 1.4, 1.5]

1.7 Consequently $U$ is not affine: if $U$ were affine, the quasi-coherent module $\mathcal O_U$ would have $H^1(U,\mathcal O_U)=0$ by [F5], contradicting 1.6. [F5, 1.6]

1.8 Construction of $X$: take two copies $U_1,U_2$ of $\mathbb A^2_k$ with open subschemes corresponding to $U$, glued along the identity isomorphism; the identity and cocycle conditions are automatic, so by [F3] there is a scheme $X$ with open affine subschemes $U_1,U_2$ covering $X$ and $U_1\cap U_2\cong U$. [F1, F3]

1.9 $X$ is not separated: if $X\to\operatorname{Spec}\mathbb Z$ were separated, then by the criterion [F6] applied to the two affine opens $U_1,U_2$ of $X$, which both lie over the affine open $\operatorname{Spec}\mathbb Z$ of the base, their intersection $U_1\cap U_2$ would be affine; this contradicts 1.7. [F6, 1.7, 1.8]

2.1 Boundary and choice accounting. The field $k$ is arbitrary, including $k=\mathbb F_2$; the zero ideal is a prime in $D(xy)$, so the displayed rings are nonzero, while the origin is the distinct closed point $V(x,y)=\{(x,y)\}$. The Axiom of Choice is a hypothesis and is consumed exactly through the Leray comparison [F4] and affine vanishing [F5], which are stated under AC; the gluing of 1.8, the Čech computation of 1.5-1.6 and the criterion application of 1.9 make no further choices. [F3, F4, F5, 1.6, 1.8] ∎
