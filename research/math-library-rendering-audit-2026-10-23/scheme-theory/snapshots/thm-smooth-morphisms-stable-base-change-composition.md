---
id: thm-smooth-morphisms-stable-base-change-composition
kind: theorem
title: "Smoothness survives base change and composition"
status: published
origin: pipeline
deps:
  - def-smooth-morphism-schemes
  - def-relative-dimension-smooth-morphism
  - thm-jacobian-criterion-smooth-morphism
  - thm-ag-standard-smooth-base-change-composition
  - thm-affine-fibre-product-tensor-ring
  - lem-base-change-open-closed-immersions
  - def-open-immersion-schemes
  - def-affine-open-subscheme
  - def-base-change-morphism-schemes
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.34 (smooth morphisms, tags 01V4-01V9) and Section 29.24"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Sections 25.3 and 26.1"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice (AC). Let $f:X\to S$ and $g:Y\to X$ be morphisms of
schemes and let $h:S'\to S$ be an arbitrary morphism, with base change
$f_{S'}:X\times_SS'\to S'$ as in [[def-base-change-morphism-schemes]].

1. If $f$ is smooth ([[def-smooth-morphism-schemes]]), then $f_{S'}$ is
   smooth.
2. If $f$ and $g$ are smooth, then the composite $f\circ g:Y\to S$ is smooth.
3. If $f$ is smooth at $x=g(y)$ and $g$ is smooth at $y$, then the relative
   dimensions ([[def-relative-dimension-smooth-morphism]]) add:
   $$\operatorname{reldim}_{f\circ g}(y)=\operatorname{reldim}_f(g(y))+\operatorname{reldim}_g(y).$$

The third clause is the chartwise additivity of relative dimensions; no
hypothesis is placed on $h$, and $X$, $S$, $S'$, $Y$ may be empty.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] A morphism $f:X\to S$ is smooth at $x$ when it is locally of finite
presentation at $x$, flat at $x$, and the scheme-theoretic fibre over $f(x)$ is
geometrically regular at $x$; $f$ is smooth when this holds at every point
([[def-smooth-morphism-schemes]]).

[F2] Assume AC. Let $f:X\to S$ be locally of finite presentation and let
$x\in X$ with $s=f(x)$. Then $f$ is smooth at $x$ if and only if there are
affine opens $U=\operatorname{Spec}C$ of $x$ and $V=\operatorname{Spec}A$ of $s$
with $f(U)\subseteq V$ and, for $\mathfrak q\subset C$ the prime of $x$, a
presentation of $C_h$ for some $h\in C\smallsetminus\mathfrak q$ as
$C_h\cong\bigl(A[t_1,\dots,t_m]/(f_1,\dots,f_r)\bigr)_g$ in which some $r\times r$
minor of the Jacobian has image a unit of $C_h$; such a chart is flat and
exhibits relative dimension $m-r$ at $x$
([[thm-jacobian-criterion-smooth-morphism]]).

[F3] Let $R\to S$ and $S\to T$ be ring maps with standard smooth presentations
of relative dimensions $n-c$ and $m-d$. Base change: for any ring map
$R\to R'$ the algebra $R'\otimes_RS$ is standard smooth over $R'$ with the same
parameters and relative dimension, and if $R\to S$ is standard smooth at a prime
$\mathfrak q$ then $R'\to R'\otimes_RS$ is standard smooth at every prime over
$\mathfrak q$. Composition: $T$ carries a standard smooth $R$-presentation of
relative dimension $(n-c)+(m-d)$, and if $R\to S$ is standard smooth at
$\mathfrak q$ and $S\to T$ is standard smooth at $\mathfrak n$ over
$\mathfrak q$, then $R\to T$ is standard smooth at $\mathfrak n$
([[thm-ag-standard-smooth-base-change-composition]]).

[F4] For localizations of finitely presented algebras the relative dimension
of a standard smooth presentation at a prime equals the relative dimension of
the corresponding smooth morphism at the corresponding point, both being the
local dimension of the fibre in the convention of
[[def-relative-dimension-smooth-morphism]]; in particular the value is
independent of the chosen presentation
([[thm-jacobian-criterion-smooth-morphism]]).

[F5] For ring maps $A\to B$ and $A\to A'$ there is a canonical isomorphism
$\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}A'\cong
\operatorname{Spec}(B\otimes_AA')$ compatible with the projections
([[thm-affine-fibre-product-tensor-ring]]).

[F6] A morphism is an open immersion when it identifies its source with an
open subscheme of its target ([[def-open-immersion-schemes]]); open immersions
remain open immersions after arbitrary base change
([[lem-base-change-open-closed-immersions]]), and a composite of two open
immersions is again an open immersion, since a composite of identifications with
open subschemes identifies with an open subscheme
([[def-affine-open-subscheme]]).

[F7] For a morphism $h:S'\to S$ the base change of $f:X\to S$ is the second
projection $X\times_SS'\to S'$ ([[def-base-change-morphism-schemes]]).

[F8] The Axiom of Choice states that every family of nonempty sets has a
choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 We prove clause 1. Let $h:S'\to S$ be arbitrary and let $y\in X\times_SS'$ with images $x\in X$ and $s'\in S'$, and put $s=f(x)=h(s')$. Choose affine opens $V=\operatorname{Spec}A\subseteq S$ containing $s$, then $U=\operatorname{Spec}B\subseteq X$ containing $x$ with $f(U)\subseteq V$, and then $W=\operatorname{Spec}A'\subseteq S'$ containing $s'$ with $h(W)\subseteq V$. [F1, F7, given]

1.2 We prove clauses 2 and 3. Let $y\in Y$ with images $x=g(y)\in X$ and $s=f(x)\in S$. Choose affine opens $V=\operatorname{Spec}A\subseteq S$ containing $s$, then $U=\operatorname{Spec}B\subseteq X$ containing $x$ with $f(U)\subseteq V$, and then $Z=\operatorname{Spec}C\subseteq Y$ containing $y$ with $g(Z)\subseteq U$. [F1, given]

2.1 By [F5] the fibre product $U\times_VW$ is the affine scheme $\operatorname{Spec}(B\otimes_AA')$, and by [F6] the canonical morphism $U\times_VW\to X\times_SS'$ is an open immersion: it factors as $U\times_VW\to X\times_SW\to X\times_SS'$, where the second arrow is a base change of the open immersion $W\subseteq S'$ and the first is a base change of the open immersion $U\subseteq X$ (using $U\times_VW=U\times_SW$ because $U\to S$ and $W\to S$ both factor through $V$), and a composite of open immersions is an open immersion. Hence $\operatorname{Spec}(B\otimes_AA')$ is identified with an affine open subscheme $U'\subseteq X\times_SS'$ containing $y$, and $f_{S'}(U')\subseteq W$. [F5, F6, F7, step 1.1]

2.2 By the forward direction of [F2] applied to $f$ at $x$ and to $g$ at $y$, the ring map $A\to B$ has a standard smooth presentation at the prime of $x$ and $B\to C$ has one at the prime of $y$. By the composition clause of [F3] the map $A\to C$ is standard smooth at the prime of $y$, and the composed presentation has relative dimension equal to the sum of the relative dimensions of the two presentations. [F2, F3, step 1.2]

3.1 Since $f$ is smooth at $x$, [F2] provides, after shrinking the chart of step 1.1 if necessary, a standard smooth presentation of $B_h$ over $A$ at the prime $\mathfrak q\subset B$ of $x$, of some relative dimension $m-r$. By the base-change clause of [F3] the algebra $A'\otimes_AB=B\otimes_AA'$ is standard smooth over $A'$ at every prime lying over $\mathfrak q$, in particular at the prime $\mathfrak q'$ corresponding to $y\in U'$. [F2, F3, step 1.1, step 2.1]

3.2 By the backward direction of [F2] applied with the chart $Z\to V$, the composite $f\circ g$ is smooth at $y$, and the chart of step 2.2 exhibits relative dimension equal to that sum at $y$. [F2, step 2.2]

4.1 The chart $U'=\operatorname{Spec}(B\otimes_AA')\to W=\operatorname{Spec}A'$ of steps 2.1 and 3.1 is an affine chart for $f_{S'}$ at $y$ whose ring map is standard smooth at $\mathfrak q'$, so the backward direction of the criterion [F2] gives that $f_{S'}$ is smooth at $y$. As $y$ was arbitrary, $f_{S'}$ is smooth, proving clause 1. [F2, step 3.1]

4.2 By [F4] each standard smooth chart at a smooth point exhibits the relative dimension of the corresponding smooth morphism at that point. Hence, writing $m=\operatorname{reldim}_f(g(y))$ and $n=\operatorname{reldim}_g(y)$, the two presentations chosen in step 2.2 have relative dimensions $m$ and $n$, their composite has relative dimension $m+n$, and this is $\operatorname{reldim}_{f\circ g}(y)$; this proves clause 3. [F2, F4, step 2.2, step 3.2]

5.1 Finally, if $f$ and $g$ are smooth, then every $y\in Y$ satisfies the hypotheses of steps 1.2, 2.1, 2.2, 3.2 and 4.2, so $f\circ g$ is smooth at every point of $Y$, proving clause 2. The empty-source cases are vacuous: if $Y$, $X$ or $S'$ is empty the relevant assertions have no points to check. The Axiom of Choice [F8] is assumed in the Statement and used exactly through the criterion [F2], invoked in steps 3.1, 4.1, 2.2 and 3.2. [F1, F2, F8, step 4.2] $\square$
