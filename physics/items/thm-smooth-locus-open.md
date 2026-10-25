---
id: thm-smooth-locus-open
kind: theorem
title: "The smooth locus is open"
status: published
origin: pipeline
deps:
  - def-smooth-locus-morphism
  - thm-jacobian-criterion-smooth-morphism
  - def-locally-finite-presentation-morphism
  - def-affine-scheme-spectrum
  - def-principal-distinguished-subset-of-spectrum
  - def-affine-open-subscheme
  - def-axiom-of-choice
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
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.34 (smooth morphisms, tags 01V4-01V9)"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Section 25.3"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Assume the Axiom of Choice (AC). Let $f:X\to S$ be a morphism locally of
finite presentation ([[def-locally-finite-presentation-morphism]]) and let
$\operatorname{Sm}(f)\subseteq X$ be its smooth locus
([[def-smooth-locus-morphism]]). Then $\operatorname{Sm}(f)$ is an open subset
of $X$, and the restriction of $f$ to this open subset is a smooth morphism.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] For $f:X\to S$ locally of finite presentation the smooth locus
$\operatorname{Sm}(f)=\{x\in X:\text{the morphism }f\text{ is smooth at }x\}$ is a subset of $X$;
$f$ is smooth exactly when $\operatorname{Sm}(f)=X$, $X=\varnothing$ gives
$\operatorname{Sm}(f)=\varnothing$, and smoothness at a point is a germ
condition, so it is preserved by restricting the source to an open neighbourhood
of the point ([[def-smooth-locus-morphism]]).

[F2] Assume AC. For $f:X\to S$ locally of finite presentation and $x\in X$
with $s=f(x)$, smoothness of $f$ at $x$ is equivalent to the following: there
are affine opens $U=\operatorname{Spec}C$ of $x$ and $V=\operatorname{Spec}A$ of
$s$ with $f(U)\subseteq V$ and, writing $\mathfrak q$ for the prime of $x$, a
presentation of $C_h$ for some $h\in C\smallsetminus\mathfrak q$ as
$C_h\cong\bigl(A[t_1,\dots,t_m]/(f_1,\dots,f_r)\bigr)_g$ in which some $r\times r$
minor of the Jacobian matrix has image a unit of $C_h$
([[thm-jacobian-criterion-smooth-morphism]]).

[F3] A morphism $f:X\to S$ is locally of finite presentation at $x$ when
there are affine opens $U=\operatorname{Spec}C\subseteq X$ and
$V=\operatorname{Spec}A\subseteq S$ with $x\in U$, $f(U)\subseteq V$ and
$A\to C$ a finitely presented ring map
([[def-locally-finite-presentation-morphism]]).

[F4] For a ring $C$ the distinguished opens $D(h)=\{\mathfrak q:h\notin\mathfrak q\}$
are the basic opens of $\operatorname{Spec}C$
([[def-affine-scheme-spectrum]],
[[def-principal-distinguished-subset-of-spectrum]]), and an open subset of a
scheme carries its open subscheme structure
([[def-affine-open-subscheme]]).

[F5] The Axiom of Choice states that every family of nonempty sets has a
choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Fix $x\in\operatorname{Sm}(f)$, write $\mathfrak q$ for the prime of $C$ corresponding to $x$ in an affine chart, and put $s=f(x)$. By [F2] there are affine opens $U=\operatorname{Spec}C$ of $x$ and $V=\operatorname{Spec}A$ of $s$ with $f(U)\subseteq V$ and, for some $h\in C\smallsetminus\mathfrak q$, a presentation $C_h\cong\bigl(A[t_1,\dots,t_m]/(f_1,\dots,f_r)\bigr)_g$ in which an $r\times r$ Jacobian minor has image a unit of $C_h$. [F2, F3]

2.1 Let $x'\in D(h)\subseteq U$ and let $\mathfrak q'\in\operatorname{Spec}C$ be the corresponding prime; then $h\notin\mathfrak q'$. The same neighbourhoods $U$ and $V$ and the same element $h$ with the same presentation satisfy the criterion of [F2] at $x'$, since the displayed presentation of $C_h$ has its Jacobian minor invertible in $C_h$ and $h\in C\smallsetminus\mathfrak q'$; hence $f$ is smooth at $x'$. As $x'\in D(h)$ was arbitrary, $D(h)\subseteq\operatorname{Sm}(f)$. [F2, step 1.1]

3.1 The set $D(h)$ is open in $U$ by [F4] and contains $x$ by [F2]. Thus every point $x\in\operatorname{Sm}(f)$ has an open neighbourhood $D(h)\subseteq X$ contained in $\operatorname{Sm}(f)$, so $\operatorname{Sm}(f)$ is open in $X$. [F4, step 1.1, step 2.1]

4.1 The restriction $f|_{\operatorname{Sm}(f)}$ is smooth: at each $x\in\operatorname{Sm}(f)$ the morphism $f$ is smooth at $x$ by the definition of the locus, and smoothness at a point is preserved by restricting the source to an open neighbourhood of that point, so the restriction is smooth at every point of $\operatorname{Sm}(f)$, hence smooth. [F1, step 3.1]

5.1 If $X=\varnothing$ then $\operatorname{Sm}(f)=\varnothing$ is open and the empty restriction is smooth by [F1]; otherwise the argument of steps 1.1, 2.1, 3.1 and 4.1 applies at every point of the locus. The Axiom of Choice [F5] is assumed in the Statement and used exactly through the criterion [F2], invoked in steps 1.1 and 2.1. [F1, F2, F5, step 4.1] $\square$
