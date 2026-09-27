---
id: lem-standard-open-affine-chart-of-a-projective-quotient
kind: lemma
title: "The standard open $D_+(f)$ of a projective quotient is the affine chart $\\operatorname{Spec}((S_f)_0)$"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-projective-scheme-from-a-homogeneous-quotient, lem-localisation-of-a-graded-ring-at-a-homogeneous-element, def-graded-ring-and-graded-module, def-homogeneous-polynomial-and-homogeneous-ideal, def-prime-and-maximal-ideals, def-affine-scheme-spectrum, def-scheme, thm-gluing-affine-schemes, thm-global-sections-affine-scheme, prop-iterated-localisation, thm-universal-property-of-localisation, cor-localisation-is-unique-up-to-unique-isomorphism, lem-projective-standard-chart-prime-and-local-ring-correspondence]
justified_by: []
aliases: []
landmark: false
short: "general standard opens of Proj are affine"
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 27.8: Projective schemes (tag 01M3), Lemma 27.8.4"
      url: "https://stacks.math.columbia.edu/tag/01M3"
    - title: "J. S. Milne, Algebraic Geometry v6.10, Chapter 6 (Proj and its standard affine charts)"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
pipeline_run: frontier-35-ten-categories
verification:
  audited: 2026-09-27
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited from the affine
structure sheaves on the standard charts of
[[def-projective-scheme-from-a-homogeneous-quotient]]. Let $k$ be a field, let $I\subseteq k[x_0,\ldots,x_n]$ be a homogeneous ideal,
let $S=k[x_0,\ldots,x_n]/I$ carry its standard grading with the images of the
variables in degree one, and let $X=\operatorname{Proj}S$ have standard charts
$D_+(x_i)=\operatorname{Spec}(A_i)$, $A_i=(S_{x_i})_0$
([[def-projective-scheme-from-a-homogeneous-quotient]]). Let $f\in S$ be
homogeneous of degree $d\ge1$, and inside the localization $S_f$ let
$(S_f)_0$ be the degree-zero part of the grading in which $f$ has degree $d$
([[def-graded-ring-and-graded-module]]). Then:

1. $D_+(f):=\{x\in X:f\notin\mathfrak p_x\}$, where $\mathfrak p_x$ is the
   homogeneous prime defining $x$, is an open subscheme of $X$, and
   $D_+(f)\cap D_+(x_i)=D_+(fx_i)$. Inside the chart
   $D_+(x_i)=\operatorname{Spec}(A_i)$ this open subscheme is the distinguished
   open $\operatorname{Spec}\bigl((A_i)_{f/x_i^d}\bigr)$ determined by the
   degree-zero element $f/x_i^d\in A_i$.
2. $D_+(f)$ is affine, canonically $\operatorname{Spec}\bigl((S_f)_0\bigr)$:
   the maps of affine schemes
   $\operatorname{Spec}\bigl((S_{fx_i})_0\bigr)\to\operatorname{Spec}(A_i)$
   induced by the localizations inside $S_{fx_i}$ glue over the standard charts
   to an isomorphism
   $\operatorname{Spec}\bigl((S_f)_0\bigr)\to D_+(f)\subseteq X$, and on the
   piece $D_+(fx_i)$ the two descriptions agree through the identification
   $(S_{fx_i})_0=((S_f)_0)_{x_i^d/f}=(A_i)_{f/x_i^d}$ of subrings of
   $S_{fx_i}$.
3. Consequently $\Gamma(D_+(f),\mathcal O_X)=(S_f)_0$, and this identification
   is compatible with the chart rings: it restricts on
   $D_+(fx_i)$ to the canonical localizations of $(S_f)_0$, of $A_i$ and of
   $(S_{fx_i})_0$. For $f=x_i$ one recovers the standard chart
   $D_+(x_i)=\operatorname{Spec}(A_i)$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a field $k$, a homogeneous ideal $I\subseteq k[x_0,\ldots,x_n]$, the
standard graded quotient $S=k[x_0,\ldots,x_n]/I$, the projective scheme
$X=\operatorname{Proj}S$ with standard charts $D_+(x_i)=\operatorname{Spec}(A_i)$,
$A_i=(S_{x_i})_0$, and a homogeneous element $f\in S$ of degree $d\ge1$.

[L1] The points of $X$ are the homogeneous primes $\mathfrak p\subseteq S$ with
$S_+\nsubseteq\mathfrak p$; the standard charts $D_+(x_i)$ are the affine
schemes $\operatorname{Spec}(A_i)$, whose points correspond to the homogeneous
primes $\mathfrak p$ with $x_i\notin\mathfrak p$; the subset
$D_+(x_ix_j)\subseteq D_+(x_i)$ is the locus where $x_j/x_i$ is invertible, and
these identifications of charts with a common localization agree and satisfy the
cocycle condition
([[def-projective-scheme-from-a-homogeneous-quotient]],
[[lem-projective-standard-chart-prime-and-local-ring-correspondence]]).

[L2] A prime ideal is a proper ideal whose complement is multiplicative
([[def-prime-and-maximal-ideals]]). For a homogeneous prime $\mathfrak p$
avoiding $x_i$, let $\mathfrak q\subseteq A_i$ be its corresponding chart
prime. A homogeneous $g\in S_m$ belongs to $\mathfrak p$ exactly when the
degree-zero element $g/x_i^m$ belongs to $\mathfrak q$, equivalently when its
image is zero in $A_i/\mathfrak q$. Thus $g$ is nonzero at this *point*
exactly when $g/x_i^m\notin\mathfrak q$; no claim that $g/x_i^m$ is a unit of
the whole chart ring is needed
([[def-homogeneous-polynomial-and-homogeneous-ideal]],
[[lem-projective-standard-chart-prime-and-local-ring-correspondence]]).

[L3] Localization is exact and commutes with itself: for multiplicative subsets
$M\subseteq N\subseteq S$ the ring $(M^{-1}S)_{N^{-1}S\text{-images}}$ is
canonically $N^{-1}S$, and iterated localization in any order gives canonically
isomorphic rings ([[prop-iterated-localisation]],
[[cor-localisation-is-unique-up-to-unique-isomorphism]]); the universal
property determines the comparison maps
([[thm-universal-property-of-localisation]]); moreover, for a homogeneous
element $g$ of degree $\delta\ge1$ the localisation $S_g$ is graded with
$(S_g)_n=\{s/g^m:s\in S_{n+m\delta}\}$ and degree-preserving localisation maps,
so the degree-zero parts used below are well defined
([[lem-localisation-of-a-graded-ring-at-a-homogeneous-element]]).

[L4] Affine schemes glue: if a collection of affine schemes
$\operatorname{Spec}(B_j)$ with compatible open immersions on overlaps is given,
the gluing is a scheme, and a morphism from an affine scheme into a scheme is
determined by compatible ring maps on an affine open cover
([[thm-gluing-affine-schemes]], [[def-affine-scheme-spectrum]],
[[def-scheme]]).



## Proof

**Proof technique:** direct.

1.1 For a homogeneous prime $\mathfrak p\subseteq S$ with $S_+\nsubseteq\mathfrak p$ one has $D_+(f)\cap D_+(x_i)=D_+(fx_i)$: a point of $D_+(x_i)$ is such a prime with $x_i\notin\mathfrak p$, and $f\notin\mathfrak p$ and $x_i\notin\mathfrak p$ hold together exactly when $fx_i\notin\mathfrak p$. Under the chart correspondence of [L1] and [L2], this condition is $f/x_i^d\notin\mathfrak q$ for the corresponding prime $\mathfrak q\subseteq A_i$, so the intersection is a distinguished open in $D_+(x_i)$. Since the standard charts cover $X$, $D_+(f)$ is open in $X$. [L1, L2]

1.2 Inside the chart $D_+(x_i)=\operatorname{Spec}(A_i)$ the element $f$ has degree-zero dehomogenization $f/x_i^d\in A_i$, and a prime $\mathfrak q\subseteq A_i$ corresponds to a point of $D_+(fx_i)$ exactly when $f/x_i^d\notin\mathfrak q$ by [L2], so $D_+(fx_i)=\operatorname{Spec}\bigl((A_i)_{f/x_i^d}\bigr)$ is the distinguished open subscheme of $\operatorname{Spec}(A_i)$ determined by $f/x_i^d$. [L1, L2]

1.3 Put $B=(S_f)_0$ and $u_i=x_i^d/f\in B$. Inside $S_{fx_i}$ the degree-zero subrings $(S_{fx_i})_0$, $B_{u_i}$ and $(A_i)_{f/x_i^d}$ coincide. Indeed, write a degree-zero fraction as $s/(f^a x_i^b)$ with $s$ homogeneous of degree $ad+b$. Choose $c$ with $dc\ge b$. Then
$$\frac{s}{f^a x_i^b}=\left(\frac{s x_i^{dc-b}}{f^{a+c}}\right)u_i^{-c},$$
and the parenthesized fraction has degree zero, proving membership in $B_{u_i}$. The same fraction equals
$$\left(\frac{s}{x_i^{ad+b}}\right)\left(\frac{f}{x_i^d}\right)^{-a},$$
with a degree-zero parenthesized fraction in $A_i$, proving membership in $(A_i)_{f/x_i^d}$. The reverse inclusions into $(S_{fx_i})_0$ follow from degree preservation of localization. These equalities include the zero-ring case. [L3]

1.4 The elements $u_0,\ldots,u_n$ generate the unit ideal of $B=(S_f)_0$. To see this, put $N=n+1$. Every monomial of degree $Nd$ in the variables $x_0,\ldots,x_n$ is divisible by some $x_i^d$: otherwise all exponents are at most $d-1$, and the total degree is at most $(n+1)(d-1)<Nd$. Write the homogeneous representative of $f^N$ in the polynomial ring as $\sum_i x_i^d g_i$, with $g_i$ homogeneous of degree $(N-1)d$, and pass to $S_f$. Dividing by $f^N$ gives
$$1=\sum_i (x_i^d/f)(g_i/f^{N-1})=\sum_i u_i(g_i/f^{N-1})$$
in $B$. Therefore the distinguished opens $D_B(u_i)$ cover $\operatorname{Spec}B$. [L1, L3]

2.1 The ring maps $A_i\to(S_{fx_i})_0=B_{u_i}$ are localizations of $A_i$ and are compatible on overlaps: in $S_{fx_ix_j}$ all comparisons become the identity of the canonical localization of $B$, so the cocycle condition holds. [L3, step 1.3]

3.1 By step 1.4 the opens $D_B(u_i)=\operatorname{Spec}(B_{u_i})$ cover $\operatorname{Spec}B$. The maps from these pieces induced by step 2.1 agree on their overlaps and hence glue to a morphism $\operatorname{Spec}B\to X$. By steps 1.2 and 1.3 each piece maps isomorphically onto $D_+(fx_i)=D_+(f)\cap D_+(x_i)$, and those opens cover $D_+(f)$ because the $D_+(x_i)$ cover $X$. The local inverses agree on overlaps by the same localization identity, so the glued morphism is an isomorphism onto $D_+(f)$. [L1, L4, step 1.2, step 1.3, step 1.4, step 2.1]

4.1 The isomorphism of step 3.1 identifies global sections of the structure sheaf on $D_+(f)$ with the global sections of $\operatorname{Spec}((S_f)_0)$, namely $(S_f)_0$, and the restriction maps to the pieces $D_+(fx_i)$ are the localizations displayed in step 2.1; taking $f=x_i$ gives $d=1$ and $(S_{x_i})_0=A_i$, so the standard chart is recovered. AC is used only through the construction of the affine structure sheaves in [L1]; the finite localization and gluing calculations themselves make no choice. [L1, step 1.3, step 3.1] ∎
