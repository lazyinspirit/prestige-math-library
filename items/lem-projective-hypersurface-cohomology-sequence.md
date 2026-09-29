---
id: lem-projective-hypersurface-cohomology-sequence
kind: lemma
title: "Hypersurface cohomology sequence"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-compositions-with-k-parts-are-counted-by-binomial-coefficients
  - def-associated-sheaf-graded-module-proj
  - def-associated-sheaf-module-affine-scheme
  - def-axiom-of-choice
  - def-binomial-coefficient
  - def-closed-immersion-schemes
  - def-commutative-ring
  - def-direct-image-sheaf
  - def-polynomial-ring-on-a-family-of-indeterminates
  - def-quasi-coherent-module-scheme
  - def-relative-projective-space-standard-charts
  - def-sheaf-cohomology-derived-global-sections
  - def-sheaf-on-topological-space
  - def-stalk-of-presheaf
  - def-twisting-sheaf-proj
  - lem-associated-sheaf-stalk-localization
  - lem-closed-immersion-affine-quotient-and-base-change
  - lem-closed-immersion-cohomology-pushforward
  - lem-proj-associated-sheaf-basic-sections
  - lem-standard-opens-proj-affine
  - thm-closed-subschemes-projective-space-homogeneous-ideals
  - thm-cohomology-projective-space-twisting-sheaves
  - thm-exactness-of-sheaves-stalkwise
  - thm-long-exact-sequence-sheaf-cohomology
  - thm-localisation-of-modules-is-exact
  - thm-projective-space-as-proj
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Assume the Axiom of Choice as inherited from the cited suppliers
([[def-axiom-of-choice]]). Let $A$ be a commutative ring with $1$
([[def-commutative-ring]]), let $n\ge0$, let $B=A[x_0,\dots,x_n]$ carry the
total-degree grading ([[def-polynomial-ring-on-a-family-of-indeterminates]]),
and let $f\in B$ be homogeneous of degree $d>0$. Let
$X=V_+(f)\subseteq\mathbb P^n_A$ be the closed subscheme cut out by $f$, with
closed immersion $i:X\to\mathbb P^n_A$ ([[def-closed-immersion-schemes]]); by
[[thm-closed-subschemes-projective-space-homogeneous-ideals]] one has
$X=\operatorname{Proj}\bigl(B/(f)\bigr)$ and
$X\cap D_+(x_i)=\operatorname{Spec}\bigl(B_{(x_i)}/(f/x_i^d)\bigr)$.
Assume that for every $i$ the dehomogenisation $f/x_i^d$ is a nonzerodivisor of
the chart ring $B_{(x_i)}$; this hypothesis is automatic when $A=k$ is a field
and $f\ne0$.

Then the multiplication-by-$f$ morphism of $\mathcal O_{\mathbb P^n_A}$-modules
$\mathcal O_{\mathbb P^n_A}(-d)\to\mathcal O_{\mathbb P^n_A}$
([[def-twisting-sheaf-proj]]) together with the structure map
$i^{\sharp}:\mathcal O_{\mathbb P^n_A}\to i_*\mathcal O_X$ of the closed
immersion ([[def-direct-image-sheaf]]) forms a short exact sequence
$$0\to\mathcal O_{\mathbb P^n_A}(-d)\xrightarrow{\cdot f}\mathcal O_{\mathbb P^n_A}\xrightarrow{i^{\sharp}}i_*\mathcal O_X\to0,$$
and hence, by the long exact sequence of sheaf cohomology
([[def-sheaf-cohomology-derived-global-sections]],
[[thm-long-exact-sequence-sheaf-cohomology]]), a long exact sequence
$$\cdots\to H^q(\mathbb P^n_A,\mathcal O(-d))\to H^q(\mathbb P^n_A,\mathcal O)\to H^q(X,\mathcal O_X)\xrightarrow{\partial^q}H^{q+1}(\mathbb P^n_A,\mathcal O(-d))\to\cdots,$$
in which the middle terms are identified by
$H^q(\mathbb P^n_A,i_*\mathcal O_X)\cong H^q(X,\mathcal O_X)$
([[lem-closed-immersion-cohomology-pushforward]]). Substituting the explicit
groups of [[thm-cohomology-projective-space-twisting-sheaves]] this computes
the cohomology of $X$: for every $q\ge1$ the connecting map is an isomorphism
$$H^q(X,\mathcal O_X)\cong H^{q+1}(\mathbb P^n_A,\mathcal O(-d)),$$
so $H^q(X,\mathcal O_X)=0$ for every $q\ge1$ with $q\ne n-1$, while
$$H^{n-1}(X,\mathcal O_X)\cong H^n(\mathbb P^n_A,\mathcal O(-d))\qquad(n\ge2)$$
is the free $A$-module on the $(n+1)$-tuples $(e_0,\dots,e_n)$ of negative
integers with $e_0+\cdots+e_n=-d$. When moreover $A=k$ is a field and
$f\ne0$, the number of such tuples is $\binom{d-1}{n}$
([[cor-compositions-with-k-parts-are-counted-by-binomial-coefficients]],
[[def-binomial-coefficient]]), so for $n\ge2$ one has
$\dim_kH^{n-1}(X,\mathcal O_X)=\binom{d-1}{n}$, which is $0$ for $d\le n$. For $n=1$ the top group occurs in degree zero and sits in the exact sequence displayed next; over a field its dimension is $d$, not $d-1$. In
degree zero the long exact sequence reads
$$0\to H^0(\mathbb P^n_A,\mathcal O(-d))\to A\to H^0(X,\mathcal O_X)\to H^1(\mathbb P^n_A,\mathcal O(-d))\to0,$$
with $H^0(\mathbb P^n_A,\mathcal O(-d))=0$ for $n\ge1$ and
$H^0(\mathbb P^n_A,\mathcal O(-d))\cong A$ for $n=0$, while
$H^1(\mathbb P^n_A,\mathcal O(-d))=0$ for $n\ne1$ and
$H^1(\mathbb P^1_A,\mathcal O(-d))$ free on the $(d-1)$-element set of
negative pairs summing to $-d$ for $d\ge2$. The zero ring, the empty
hypersurface and nonreduced $X$ are included.

## Facts & Assumptions
**Given:** The Axiom of Choice as inherited, a commutative ring $A$ with $1$, an integer $n\ge0$, the graded polynomial ring $B=A[x_0,\dots,x_n]$, a homogeneous $f\in B$ of degree $d>0$, the hypersurface $X=V_+(f)$ with closed immersion $i$, and the hypothesis that each $f/x_i^d$ is a nonzerodivisor of $B_{(x_i)}$.

[F1] The relative projective space is
$\mathbb P^n_A\cong\operatorname{Proj}B$ with $B=A[x_0,\dots,x_n]$ in the
total-degree grading; the standard opens $D_+(x_i)$ are the affine charts
$\operatorname{Spec}B_{(x_i)}$ and they cover $\mathbb P^n_A$, with
$D_+(x_i)\cap D_+(x_j)=D_+(x_ix_j)$ and
$B_{(x_ix_j)}=(B_{(x_i)})_{x_j/x_i}$.
([[thm-projective-space-as-proj]], [[def-relative-projective-space-standard-charts]],
[[lem-standard-opens-proj-affine]])

[F2] The twisting sheaves are $\mathcal O(m)=\widetilde{B(m)}$
([[def-twisting-sheaf-proj]]); the restriction of $\widetilde M$ to $D_+(x_i)$
is the associated sheaf of the $B_{(x_i)}$-module $M_{(x_i)}$, so its sections
on $D_+(x_i)$ are $M_{(x_i)}$, and a degree-zero homomorphism of graded
$B$-modules $\varphi:M\to N$ induces a morphism $\widetilde\varphi$ whose
component on $D_+(x_i)$ is the localisation $\varphi_{(x_i)}$.
([[def-associated-sheaf-graded-module-proj]],
[[lem-proj-associated-sheaf-basic-sections]])

[F3] Since $\deg_B(fa)=\deg_B(a)+d$, the assignment $a\mapsto fa$ is a
degree-zero homomorphism of graded $B$-modules $B(-d)\to B$; multiplication by
$x_i^d$ is an isomorphism of $B_{(x_i)}$-modules
$B(-d)_{(x_i)}\to B_{(x_i)}$ with inverse multiplication by $x_i^{-d}$
(both sides are degree-zero localisations inside $B_{x_i}$), and under this
identification the localised component of $a\mapsto fa$ becomes multiplication
by $f/x_i^d$ on $B_{(x_i)}$. [algebra]

[F4] For the homogeneous $f$ of degree $d>0$ the subscheme $V_+(f)$ is
$\operatorname{Proj}(B/(f))$ under the canonical closed immersion into
$\operatorname{Proj}B=\mathbb P^n_A$, and its chart on $D_+(x_i)$ is
$\operatorname{Spec}\bigl(B_{(x_i)}/(f/x_i^d)\bigr)$; the structure map of a
closed immersion is surjective, and over an affine open $U=\operatorname{Spec}R$
with $i^{-1}(U)=\operatorname{Spec}(R/K)$ it is the quotient map $R\to R/K$
whose associated sheaves model the pushforward; the structure sheaf of an
affine scheme is the associated sheaf of its coordinate ring.
([[thm-closed-subschemes-projective-space-homogeneous-ideals]],
[[def-closed-immersion-schemes]],
[[lem-closed-immersion-affine-quotient-and-base-change]],
[[def-associated-sheaf-module-affine-scheme]], [[def-direct-image-sheaf]])

[F5] For an exact sequence of $R$-modules $0\to M\to N\to Q\to0$ the sequence
of associated sheaves $0\to\widetilde M\to\widetilde N\to\widetilde Q\to0$ on
$\operatorname{Spec}R$ is exact: at every prime the stalk sequence is the
localisation of the module sequence, which is exact, and exactness of a
sequence of sheaves is detected on stalks.
([[lem-associated-sheaf-stalk-localization]],
[[thm-localisation-of-modules-is-exact]],
[[thm-exactness-of-sheaves-stalkwise]])

[F6] Exactness of a sequence of sheaves, and equality of two morphisms of
sheaves, are local on an open cover: a sequence is exact if and only if its
restrictions to the members of a cover are exact, because exactness is
stalkwise and the stalk at a point of an open set is computed from the
neighbourhoods inside that open set; two morphisms that induce the same map on
each member of a cover coincide by the sheaf axiom.
([[thm-exactness-of-sheaves-stalkwise]], [[def-stalk-of-presheaf]],
[[def-sheaf-on-topological-space]])

[F7] For a short exact sequence of abelian sheaves on a topological space, the
derived-functor cohomology fits into a natural long exact sequence with
connecting maps $\partial^q$; under the Axiom of Choice a functorial injective
resolution datum exists and the sequence is independent of it.
([[thm-long-exact-sequence-sheaf-cohomology]],
[[def-sheaf-cohomology-derived-global-sections]])

[F8] For a closed immersion $i:Z\to Y$ and a quasi-coherent $\mathcal O_Z$-module
$\mathcal F$ there is a canonical isomorphism
$H^q(Z,\mathcal F)\cong H^q(Y,i_*\mathcal F)$ for every $q\ge0$; the structure
sheaf of a scheme is quasi-coherent, since over an affine open it is the
associated sheaf of the coordinate ring.
([[lem-closed-immersion-cohomology-pushforward]],
[[def-quasi-coherent-module-scheme]],
[[def-associated-sheaf-module-affine-scheme]])

[F9] Cohomology of twists on projective space: for every commutative ring $A$,
every $n\ge0$ and every $m\in\mathbb Z$, $H^q(\mathbb P^n_A,\mathcal O(m))=0$
unless $q=0$ or $q=n$; $H^0(\mathbb P^n_A,\mathcal O)\cong A$ and
$H^q(\mathbb P^n_A,\mathcal O)=0$ for all $q\ge1$; for $n=0$ one has
$H^0(\mathbb P^0_A,\mathcal O(m))\cong A$ for every $m$ and all higher groups
vanish; for $n\ge1$ and $m<0$ one has $H^0(\mathbb P^n_A,\mathcal O(m))=0$; and
$H^n(\mathbb P^n_A,\mathcal O(m))$ is the free $A$-module on the Laurent
monomials $x_0^{e_0}\cdots x_n^{e_n}$ with $e_i<0$ for all $i$ and
$\sum_ie_i=m$, which is nonzero precisely when $m\le-n-1$ and $A\ne0$.
([[thm-cohomology-projective-space-twisting-sheaves]])

[F10] The number of compositions of an integer $N\ge1$ into exactly $k\ge1$
positive parts is $\binom{N-1}{k-1}$, and there is none when $k>N$; the
binomial coefficient $\binom{d-1}{n}$ counts
$n$-element subsets of a $(d-1)$-element set, so it vanishes for $d-1<n$ and
agrees with the count of negative exponent tuples summing to $-d$.
([[cor-compositions-with-k-parts-are-counted-by-binomial-coefficients]],
[[def-binomial-coefficient]])



## Proof

**Proof technique:** direct: build the multiplication-by-$f$ morphism from the degree-zero graded map $B(-d)\to B$, verify the displayed sequence chartwise on the standard affine cover using exactness of localisation and of the associated-sheaf functor, identify the cokernel with the pushforward along the closed immersion of $V_+(f)$, and substitute the computed projective-space groups into the long exact sequence.

1.1 The morphism of sheaves. By [F3] and [F2] the degree-zero graded map $a\mapsto fa$ induces a morphism $\phi=\widetilde{(\cdot f)}:\mathcal O(-d)=\widetilde{B(-d)}\to\widetilde B=\mathcal O$ whose component on the chart $D_+(x_i)$ is the localised map $B(-d)_{(x_i)}\to B_{(x_i)}$, $a/x_i^k\mapsto fa/x_i^k$. [F2, F3]
1.2 Chartwise form and injectivity. Transporting the source of the component along the isomorphism of [F3], multiplication by $x_i^d$, exhibits $\phi|_{D_+(x_i)}$ as multiplication by $f_i:=f/x_i^d$ on $B_{(x_i)}$; hence $\phi|_{D_+(x_i)}$ is injective if and only if $f_i$ is a nonzerodivisor of $B_{(x_i)}$, and by the locality of exactness [F6] $\phi$ is injective if and only if this holds for every $i$, which is the stated hypothesis. In the field case $B_{(x_i)}=k[x_j/x_i:j\ne i]$ is a polynomial ring over a field, hence a domain, and $f_i\ne0$ because $f\ne0$ and localisation of a domain at a nonzero element is injective; so the hypothesis is automatic then. [F1, F2, F3, F6]
2.1 The cokernel on a chart. On the affine chart $D_+(x_i)=\operatorname{Spec}B_{(x_i)}$ the module sequence $0\to B_{(x_i)}\xrightarrow{\cdot f_i}B_{(x_i)}\to B_{(x_i)}/(f_i)\to0$ is exact, so by [F5] the restriction of $0\to\mathcal O(-d)\xrightarrow{\phi}\mathcal O$ to the chart is short exact with cokernel the associated sheaf of $B_{(x_i)}/(f_i)$; its last map is the quotient map. [F5, step 1.2]
3.1 The structure map on a chart. By [F4] the closed immersion restricts over $D_+(x_i)$ to the canonical closed immersion with coordinate ring $B_{(x_i)}/(f_i)$, so the component of $i^{\sharp}$ on the chart is the quotient map $B_{(x_i)}\to B_{(x_i)}/(f_i)$ with kernel the principal ideal $(f_i)$; hence $(i_*\mathcal O_X)|_{D_+(x_i)}$ is the associated sheaf of $B_{(x_i)}/(f_i)$ and $\ker(i^{\sharp}|_{D_+(x_i)})=\operatorname{im}(\phi|_{D_+(x_i)})$ inside $\mathcal O|_{D_+(x_i)}$. [F4, step 2.1, algebra]
4.1 The short exact sequence. On each chart of the cover $D_+(x_i)$ the maps $\phi$ and $i^{\sharp}$ satisfy $\ker i^{\sharp}=\operatorname{im}\phi$ by [step 3.1], and $i^{\sharp}$ is surjective on each chart by [F4]; by the locality of exactness [F6] the sequence $0\to\mathcal O(-d)\xrightarrow{\phi}\mathcal O\xrightarrow{i^{\sharp}}i_*\mathcal O_X\to0$ is short exact. This is the displayed short exact sequence. [F4, F6, step 2.1, step 3.1]
5.1 The long exact sequence. Applying [F7] to the short exact sequence of [step 4.1] gives the long exact sequence with connecting maps $\partial^q:H^q(\mathbb P^n_A,i_*\mathcal O_X)\to H^{q+1}(\mathbb P^n_A,\mathcal O(-d))$, whose other terms are $H^q(\mathbb P^n_A,\mathcal O(-d))$ and $H^q(\mathbb P^n_A,\mathcal O)$. [F7, step 4.1]
6.1 The cohomology of the hypersurface. Since $\mathcal O_X$ is quasi-coherent by [F8], the closed-immersion isomorphism gives $H^q(X,\mathcal O_X)\cong H^q(\mathbb P^n_A,i_*\mathcal O_X)$ for every $q\ge0$; composing with [step 5.1] replaces the third term of the long exact sequence by $H^q(X,\mathcal O_X)$ and identifies $\partial^q$ with a map $H^q(X,\mathcal O_X)\to H^{q+1}(\mathbb P^n_A,\mathcal O(-d))$. [F8, step 5.1]
7.1 Substitution of the explicit groups. By [F9], $H^q(\mathbb P^n_A,\mathcal O)=0$ and $H^{q+1}(\mathbb P^n_A,\mathcal O)=0$ for every $q\ge1$, so exactness of the sequence of [step 6.1] at $H^q(\mathbb P^n_A,i_*\mathcal O_X)$ and $H^{q+1}(\mathbb P^n_A,\mathcal O(-d))$ makes $\partial^q$ an isomorphism for $q\ge1$; in degree zero the same sequence reads $0\to H^0(\mathbb P^n_A,\mathcal O(-d))\to A\to H^0(X,\mathcal O_X)\to H^1(\mathbb P^n_A,\mathcal O(-d))\to0$ because $H^0(\mathbb P^n_A,\mathcal O)\cong A$ and $H^1(\mathbb P^n_A,\mathcal O)=0$ by [F9]. Moreover $H^0(\mathbb P^n_A,\mathcal O(-d))=0$ for $n\ge1$ and $d>0$ by [F9], while for $n=0$ it is $\cong A$, and $H^1(\mathbb P^n_A,\mathcal O(-d))=0$ for $n\ne1$ since then $1$ is neither $0$ nor $n$. [F9, step 6.1]
8.1 Vanishing and the top group. For $q\ge1$, [F9] gives $H^{q+1}(\mathbb P^n_A,\mathcal O(-d))=0$ unless $q+1\in\{0,n\}$, and $q+1\ge2>0$, so $H^q(X,\mathcal O_X)=0$ for every $q\ge1$ with $q\ne n-1$, and for $n\ge2$ the remaining positive-degree group is $H^{n-1}(X,\mathcal O_X)\cong H^n(\mathbb P^n_A,\mathcal O(-d))$, the free $A$-module on the $(n+1)$-tuples of negative integers with sum $-d$ by [F9]. For $A=k$ a field these tuples correspond bijectively to the compositions of $d$ into $n+1$ positive parts via $g_i=-e_i$, and [F10] counts them by $\binom{d-1}{n}$, which is $0$ when $d-1<n$, i.e. for $d\le n$; hence for $n\ge2$ one has $\dim_kH^{n-1}(X,\mathcal O_X)=\binom{d-1}{n}$ and this group vanishes for $d\le n$. When $n=1$, every $q\ge1$ group vanishes by the same connecting-map argument, while degree zero has the exact sequence $0\to A\to H^0(X,\mathcal O_X)\to H^1(\mathbb P^1_A,\mathcal O(-d))\to0$ from step 7.1. For $A=k$ a field, the last group has dimension $d-1$ by [F9, F10] (including $d=1$, when it is zero), so $\dim_kH^0(X,\mathcal O_X)=d$. [F9, F10, step 7.1]
9.1 Boundaries and choice accounting. If $A=0$ then $\mathbb P^n_A=\varnothing$, $X=\varnothing$ and every sheaf and group above is zero, so the sequence and all isomorphisms hold. If $A=k$ is a field and $n=0$, then $f=cx_0^d$ with $c\ne0$ and $X=\operatorname{Spec}\bigl(k/(c)\bigr)=\varnothing$: the chart sequence is $0\to k\xrightarrow{c}k\to0\to0$, the long exact sequence reads $0\to k\xrightarrow{\cong}k\to H^0(X,\mathcal O_X)=0\to H^1(\mathbb P^0,\mathcal O(-d))=0$, and $H^q(X,\mathcal O_X)=0=H^{q+1}(\mathbb P^0,\mathcal O(-d))$ for all $q\ge1$. For general $A$ and $n=0$ the chart ring is $A$ and $X=\operatorname{Spec}(A/(c))$ for the scalar $c$ with $f=cx_0^d$, so $H^0(X,\mathcal O_X)\cong A/(c)$ and the degree-zero sequence is exact by construction of the cokernel; the case $f=x_0^d$ has $c=1$ and $X=\operatorname{Spec}(A/(1))=\varnothing$. Over a field and $n\ge2$, $d\le n$ gives $\binom{d-1}{n}=0$. Nonreduced examples are covered, e.g. $f=x_1^d$ over a field for $n\ge1$; when $n=1$ its degree-zero section space has dimension $d$ by step 8.1, and when $n\ge2$ the top positive-degree group is computed by the stated isomorphism. The Axiom of Choice is consumed exactly through the suppliers [F7] and [F8] and the twist computation [F9]; no resolution, chart or trivialisation is chosen in this proof. [F7, F8, F9, F10, step 7.1, step 8.1, cases: zero ring and n=0 and d<=n and nonreduced f] ∎
