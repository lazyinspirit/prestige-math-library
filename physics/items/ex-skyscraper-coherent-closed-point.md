---
id: ex-skyscraper-coherent-closed-point
kind: example
title: A coherent closed-point skyscraper
status: published
origin: pipeline
deps:
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - lem-associated-sheaf-stalk-localization
  - def-closed-point-scheme
  - def-axiom-of-choice
  - def-associated-sheaf-module-affine-scheme
  - thm-associated-module-sheaf-exists
  - lem-associated-sheaf-sections-basic-open
  - def-quasi-coherent-module-scheme
  - def-finite-type-finite-presentation-module-sheaf
  - def-locally-noetherian-and-noetherian-scheme
  - def-noetherian-ring-and-module
  - def-fibre-of-module-at-point
  - def-residue-field-scheme-point
  - cor-residue-field-of-a-localisation-at-a-prime
  - thm-localisation-of-modules-commutes-with-quotients-and-sums
  - def-localisation-at-a-prime-ideal
  - def-localisation-of-a-module
  - def-principal-localisation
  - thm-localisation-equivalence-and-ring-laws
  - def-prime-and-maximal-ideals
  - def-prime-spectrum-and-vanishing-sets
  - def-principal-distinguished-subset-of-spectrum
  - def-affine-scheme-spectrum
  - def-skyscraper-sheaf-abelian-group
  - def-module-on-ringed-space
  - def-sheaf-on-topological-space
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "The Stacks Project, Cohomology of Schemes §30.9"
      url: "https://stacks.math.columbia.edu/tag/01XY"
    - title: "The Stacks Project, Properties of Schemes, §§28.20, 28.26"
      url: "https://stacks.math.columbia.edu/download/properties.pdf"
pipeline_run: frontier-36-complete
---

## Example

Assume the Axiom of Choice, inherited from the associated-sheaf construction
and the coherence theorem ([[def-axiom-of-choice]]). Let $A$ be a Noetherian
commutative ring ([[def-noetherian-ring-and-module]]) and let
$\mathfrak m\subseteq A$ be a maximal ideal; write
$k=A/\mathfrak m$ for the residue field and put
$$X=\operatorname{Spec}A,\qquad M=A/\mathfrak m,\qquad \mathcal F=\widetilde M,$$
the associated sheaf of the cyclic module $M$
([[def-associated-sheaf-module-affine-scheme]],
[[thm-associated-module-sheaf-exists]]). Let
$i:\{\mathfrak m\}\hookrightarrow X$ be the inclusion of the one-point
subspace and $i_*(A/\mathfrak m)$ the skyscraper sheaf at the closed point
$\mathfrak m$ with value $A/\mathfrak m$
([[def-skyscraper-sheaf-abelian-group]]). Then:

1. $\mathcal F$ is a coherent $\mathcal O_X$-module
   ([[def-quasi-coherent-module-scheme]]): $A$ is Noetherian, so $X$ is
   locally Noetherian, and $M$ is cyclic, hence of finite type; by the
   equivalence of coherence with finite type over a locally Noetherian base
   ([[thm-coherent-sheaves-abelian-noetherian-scheme]]),
   $\mathcal F$ is coherent.
2. Its stalks are
   $$\mathcal F_{\mathfrak p}\cong\begin{cases}A/\mathfrak m,&\mathfrak p=\mathfrak m,\\ 0,&\mathfrak p\neq\mathfrak m,\end{cases}$$
   and the stalk at the closed point is the residue field
   $\kappa(\mathfrak m)=A_{\mathfrak m}/\mathfrak m A_{\mathfrak m}\cong
   A/\mathfrak m$ ([[lem-associated-sheaf-stalk-localization]],
   [[def-residue-field-scheme-point]]).
3. The fibre at the closed point is
   $\mathcal F(\mathfrak m)\cong A/\mathfrak m$
   ([[def-fibre-of-module-at-point]]).
4. Consequently $\mathcal F\cong i_*(A/\mathfrak m)$: the sheaf is the
   skyscraper at the closed point, and since its one-point fibre at
   $\mathfrak m$ is $A/\mathfrak m$ by (3), it is the direct image
   $\mathcal F\cong i_*(\mathcal F(\mathfrak m))$ of that fibre along the
   inclusion of the closed point ([[def-closed-point-scheme]]).

Thus a single closed point can support a coherent module sheaf whose only
nonzero sections live on the open neighbourhoods of that point, and on the
affine base the corresponding module is the residue field.

## Facts & Assumptions

**Given:** The Axiom of Choice; a Noetherian commutative ring $A$; a maximal
ideal $\mathfrak m\subseteq A$; the field $k=A/\mathfrak m$; the scheme
$X=\operatorname{Spec}A$ with its distinguished opens $D(f)$; the cyclic
module $M=A/\mathfrak m$ with the class of $1$ as a generator; the associated
sheaf $\mathcal F=\widetilde M$; the inclusion
$i:\{\mathfrak m\}\hookrightarrow X$.

[F1] The associated sheaf ([[def-associated-sheaf-module-affine-scheme]],
[[thm-associated-module-sheaf-exists]],
[[lem-associated-sheaf-sections-basic-open]],
[[lem-associated-sheaf-stalk-localization]],
[[def-quasi-coherent-module-scheme]],
[[def-module-on-ringed-space]]): $\mathcal F=\widetilde M$ is a sheaf of
$\mathcal O_X$-modules with $\Gamma(D(f),\mathcal F)=\mathcal F(D(f))\cong M_f$
for every $f\in A$, with restriction the canonical localisation; its stalks
are $\mathcal F_{\mathfrak p}\cong M_{\mathfrak p}$; it is quasi-coherent;
and $\Gamma(X,\mathcal F)\cong M$.

[F2] Localisation and residue fields
([[thm-localisation-of-modules-commutes-with-quotients-and-sums]],
[[def-localisation-at-a-prime-ideal]],
[[def-localisation-of-a-module]],
[[def-principal-localisation]],
[[thm-localisation-equivalence-and-ring-laws]],
[[cor-residue-field-of-a-localisation-at-a-prime]]): for a prime
$\mathfrak p$ one has $(A/\mathfrak m)_{\mathfrak p}\cong
A_{\mathfrak p}/\mathfrak m A_{\mathfrak p}$; every $a\notin\mathfrak p$ is
a unit of $A_{\mathfrak p}$, so $\mathfrak m A_{\mathfrak p}=A_{\mathfrak p}$
whenever $\mathfrak m\not\subseteq\mathfrak p$; the residue field is
$A_{\mathfrak m}/\mathfrak m A_{\mathfrak m}\cong
\operatorname{Frac}(A/\mathfrak m)=\operatorname{Frac}(k)=k$; and for the
principal localisation, $k_f$ is $k$ when the image of $f$ in $k$ is a unit
and is the zero ring when $f\mapsto0$ in $k$.

[F3] Maximal ideals and primes ([[def-prime-and-maximal-ideals]],
[[def-prime-spectrum-and-vanishing-sets]],
[[def-principal-distinguished-subset-of-spectrum]],
[[def-affine-scheme-spectrum]]): a maximal ideal is prime; if
$\mathfrak p$ is prime and $\mathfrak m\subseteq\mathfrak p$ then
$\mathfrak p=\mathfrak m$ by maximality, so every prime
$\mathfrak p\neq\mathfrak m$ satisfies $\mathfrak m\not\subseteq\mathfrak p$;
the points of $X$ are the primes of $A$ and
$D(f)=\{\mathfrak p:f\notin\mathfrak p\}$.

[F4] Noetherian base and coherence
([[def-noetherian-ring-and-module]],
[[def-locally-noetherian-and-noetherian-scheme]],
[[def-finite-type-finite-presentation-module-sheaf]],
[[thm-coherent-sheaves-abelian-noetherian-scheme]]): a scheme with an affine
open cover by spectra of Noetherian rings is locally Noetherian; $M=A/\mathfrak m$
is generated by the class of $1$, hence of finite type; and on a locally
Noetherian scheme a quasi-coherent module is coherent if and only if it is
of finite type.

[F5] Fibres ([[def-fibre-of-module-at-point]],
[[def-residue-field-scheme-point]]): the fibre of an $\mathcal O_X$-module
$\mathcal G$ at $\mathfrak p$ is
$\mathcal G(\mathfrak p)=\mathcal G_{\mathfrak p}/\mathfrak m_{\mathfrak p}
\mathcal G_{\mathfrak p}$, a vector space over $\kappa(\mathfrak p)$; a
morphism of sheaves induces a $\kappa(\mathfrak p)$-linear map on fibres.

[F6] Skyscraper sheaves ([[def-skyscraper-sheaf-abelian-group]]): for a point
$x$ of a topological space and an abelian group $A'$, the skyscraper sheaf
$i_{x,*}A'$ has $(i_{x,*}A')(V)=A'$ for opens $V\ni x$ and $0$ otherwise,
the restriction between two opens containing $x$ being the identity.

[F7] Closed points ([[def-closed-point-scheme]]): the closed points of
$\operatorname{Spec}A$ are exactly the maximal ideals; in particular
$\{\mathfrak m\}$ is closed in $X$.

[F8] The Axiom of Choice is inherited from the associated-sheaf existence
theorem and from the coherence theorem over the locally Noetherian base $X$;
no further choice is made below
([[def-axiom-of-choice]]).

**Proof technique:** direct; compute the localisations of the cyclic module
$A/\mathfrak m$ at all primes, and identify the resulting sheaf with the
skyscraper at the closed point.





## Proof

1.1 Setup: since $A$ is Noetherian and $X=\operatorname{Spec}A$, the scheme $X$ is locally Noetherian by [F4]; the maximal ideal $\mathfrak m$ is prime by [F3], so the residue field $k=A/\mathfrak m$ is a field and $M=A/\mathfrak m$ is generated by the class of $1$, hence is of finite type; therefore $\mathcal F=\widetilde M$ is quasi-coherent by [F1] and coherent by [F4]. [F1, F3, F4]

1.2 Stalk at the closed point: by [F1] and [F2] one has $\mathcal F_{\mathfrak m}\cong M_{\mathfrak m}\cong A_{\mathfrak m}/\mathfrak m A_{\mathfrak m}=\kappa(\mathfrak m)\cong\operatorname{Frac}(A/\mathfrak m)=k=A/\mathfrak m$. [F1, F2]

1.3 Stalks away from the closed point: let $\mathfrak p\neq\mathfrak m$ be a prime; by [F3] $\mathfrak m\not\subseteq\mathfrak p$, so [F2] gives $\mathfrak m A_{\mathfrak p}=A_{\mathfrak p}$ and hence $\mathcal F_{\mathfrak p}\cong A_{\mathfrak p}/\mathfrak m A_{\mathfrak p}=0$. [F1, F2, F3]

1.4 Values of $\mathcal F$ on distinguished opens: for $f\in A$ one has $\mathcal F(D(f))\cong(A/\mathfrak m)_f$ by [F1]. If $f\in\mathfrak m$ then the image of $f$ in the field $k$ is zero, so $(A/\mathfrak m)_f=0$ by [F2]; if $f\notin\mathfrak m$ then the image of $f$ in $k$ is a nonzero element of a field, hence a unit, and $(A/\mathfrak m)_f\cong k$ by [F2]. Thus $\mathcal F(D(f))\cong k$ exactly when $\mathfrak m\in D(f)$, and is $0$ otherwise. [F1, F2]

2.1 Fibre at the closed point: $\mathcal F(\mathfrak m)\cong\mathcal F_{\mathfrak m}/\mathfrak m_{\mathfrak m}\mathcal F_{\mathfrak m}$ by [F5], and by step 1.2 the stalk is the field $k=A/\mathfrak m$ on which the maximal ideal $\mathfrak m_{\mathfrak m}=\mathfrak m A_{\mathfrak m}$ acts by zero, so the fibre is $\mathcal F(\mathfrak m)\cong A/\mathfrak m$, a one-dimensional vector space over $\kappa(\mathfrak m)$. [F5, step 1.2]

2.2 Values of $\mathcal F$ on arbitrary opens: let $U\subseteq X$ be open; the distinguished opens inside $U$ form an open cover of $U$, and by [F1] the restriction $\mathcal F(D(g))\to\mathcal F(D(h))$ for $D(h)\subseteq D(g)\subseteq U$ is the canonical localisation map $M_g\to M_h$, which under the identifications of step 1.4 is the identity of $k$ whenever $g,h\notin\mathfrak m$, and is the map $k\to0$ or $0\to0$ otherwise. If $\mathfrak m\in U$, choose $D(f_0)\subseteq U$ with $f_0\notin\mathfrak m$, which exists because the distinguished opens form a basis of the topology; for $c\in k$ the elements $c\in\mathcal F(D(g))$ for $g\notin\mathfrak m$ and $0\in\mathcal F(D(g))$ for $g\in\mathfrak m$ form a compatible family, since $D(g)\cap D(h)=D(gh)$ and $gh\notin\mathfrak m$ holds exactly when both $g,h\notin\mathfrak m$ ($\mathfrak m$ is prime by [F3]), so they glue to a unique $\varphi(c)\in\mathcal F(U)$; the map $\varphi$ is injective because $\varphi(c)|_{D(f_0)}=c$, and it is surjective because for $s\in\mathcal F(U)$ with $c=s|_{D(f_0)}$ and any distinguished $D(g)\subseteq U$ the two sections $s|_{D(g)}$ and $\varphi(c)|_{D(g)}$ of $\mathcal F(D(g))$ agree after restriction to $D(f_0 g)\subseteq D(g)$: if $g\notin\mathfrak m$ then both equal $c$ in $\mathcal F(D(f_0g))\cong k$ by the identity computed above, and if $g\in\mathfrak m$ then $f_0g\in\mathfrak m$ as well and both are $0$; in the case $g\notin\mathfrak m$ the restriction $\mathcal F(D(g))\to\mathcal F(D(f_0g))$ is the identity of $k$ and hence injective, and in the case $g\in\mathfrak m$ the group $\mathcal F(D(g))$ is $0$ by step 1.4, so in both cases $s|_{D(g)}=\varphi(c)|_{D(g)}$; since a section of the sheaf $\mathcal F$ over $U$ is determined by its restrictions to the cover by distinguished opens, $s=\varphi(c)$ and $\mathcal F(U)\cong k$. If $\mathfrak m\notin U$, then $g\in\mathfrak m$ for every distinguished $D(g)\subseteq U$ (else $\mathfrak m\in D(g)\subseteq U$), so the restriction of any $s\in\mathcal F(U)$ to each member of the covering family is zero by step 1.4 and $s=0$ by separatedness; hence $\mathcal F(U)=0$. For opens $U'\subseteq U$ both containing $\mathfrak m$ the restriction $\mathcal F(U)\to\mathcal F(U')$ carries $\varphi_U(c)$ to $\varphi_{U'}(c)$ because the gluing is given by the same formula over the distinguished opens inside $U'$, so under these isomorphisms it is the identity of $k$; consequently $\mathcal F\cong i_*(A/\mathfrak m)$, compatibly with all restrictions. [F1, F2, F3, F6, step 1.4]

3.1 Conclusion: by step 1.1 the sheaf $\mathcal F=(A/\mathfrak m)^{\sim}$ is coherent, by steps 1.2 and 1.3 its stalk is $A/\mathfrak m$ at $\mathfrak m$ and zero at every other point, by step 2.1 its fibre at the closed point $\mathfrak m$ is $A/\mathfrak m$, and by step 2.2 it is the skyscraper sheaf $i_*(A/\mathfrak m)=i_*(\mathcal F(\mathfrak m))$, the direct image of its one-point fibre under the inclusion of the closed point of [F7]; the example is verified. [F7, step 1.1, step 2.1, step 2.2]

4.1 Choice accounting: the ring $A$, the maximal ideal $\mathfrak m$, the module $M=A/\mathfrak m$ and the point $\mathfrak m$ are given data, and no chart, section or isomorphism is selected by an infinite simultaneous choice; the skyscraper identification is canonical on every open by the components exhibited in step 2.2, and the only Axiom of Choice is the inherited one recorded in [F8]. [F8] ∎
