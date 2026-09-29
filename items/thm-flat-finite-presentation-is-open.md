---
id: thm-flat-finite-presentation-is-open
kind: theorem
title: "Flat finite-presentation morphisms are open"
status: published
origin: pipeline
deps:
  - def-flat-morphism-schemes
  - def-locally-finite-presentation-morphism
  - def-open-morphism-schemes
  - lem-flatness-affine-local-source-target
  - lem-finite-presentation-image-constructible
  - lem-constructible-stable-generalisation-open
  - thm-flat-going-down
  - thm-localisations-are-flat
  - prop-transitivity-of-flatness-under-change-of-rings
  - lem-flat-morphisms-stable-base-change
  - lem-base-change-locally-finite-type-presentation
  - def-base-change-morphism-schemes
  - def-affine-scheme-spectrum
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
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 29.26.10 (tag 01UA) and Section 29.24 (tags 01U0, 01U1)"
      url: https://stacks.math.columbia.edu/tag/01UA
    - title: "The Stacks Project, Commutative Algebra, Section 10.41 (tags 00HY, 00I0, 00I1)"
      url: https://stacks.math.columbia.edu/download/algebra.pdf
---

## Statement

Assume the Axiom of Choice (AC). Let $f:X\to S$ be a morphism of schemes that
is flat ([[def-flat-morphism-schemes]]) and locally of finite presentation
([[def-locally-finite-presentation-morphism]]). Then $f$ is universally open
([[def-open-morphism-schemes]]); in particular $f$ is open. No further
hypothesis is imposed on $X$, $S$ or $f$.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] A morphism $f:X\to S$ is flat at $x$ when $\mathcal O_{X,x}$ is flat over
$\mathcal O_{S,f(x)}$ along the induced local homomorphism, and flat when this
holds at every point; a morphism with empty source is flat
([[def-flat-morphism-schemes]]).

[F2] A morphism $f:X\to S$ is locally of finite presentation at $x$ when
there are affine opens $U=\operatorname{Spec}B\subseteq X$ and
$V=\operatorname{Spec}A\subseteq S$ with $x\in U$, $f(U)\subseteq V$ and
$A\to B$ a finitely presented ring map; $f$ is locally of finite presentation
when this holds at every point ([[def-locally-finite-presentation-morphism]]).

[F3] A morphism of schemes is open when its underlying map of topological
spaces is an open map, and universally open when every base-changed projection
$X\times_ST\to T$ over an arbitrary $T\to S$ is open
([[def-open-morphism-schemes]]).

[F4] For affine charts $U=\operatorname{Spec}B$, $V=\operatorname{Spec}A$ with
$f(U)\subseteq V$ the morphism $f$ is flat at every point of $U$ if and only if
$B$ is flat over $A$; in particular
$\operatorname{Spec}B\to\operatorname{Spec}A$ is flat if and only if $A\to B$
is flat ([[lem-flatness-affine-local-source-target]]).

[F5] Assume AC. If $A\to B$ is a finitely presented ring map and $b\in B$,
then the image of the distinguished open $D(b)\subseteq\operatorname{Spec}B$
under $\operatorname{Spec}B\to\operatorname{Spec}A$ is a constructible subset of
$\operatorname{Spec}A$ ([[lem-finite-presentation-image-constructible]]).

[F6] Assume AC. Let $E\subseteq\operatorname{Spec}A$ be constructible. If $E$
is stable under specialisation then $E$ is closed, and if $E$ is stable under
generalisation then $E$ is open
([[lem-constructible-stable-generalisation-open]]).

[F7] Assume AC. A flat ring homomorphism $R\to S$ satisfies going down:
given primes $\mathfrak p_1\subseteq\mathfrak p_2$ of $R$ and
$\mathfrak q_2\in\operatorname{Spec}S$ contracting to $\mathfrak p_2$, there
exists $\mathfrak q_1\subseteq\mathfrak q_2$ with
$\mathfrak q_1\cap R=\mathfrak p_1$ ([[thm-flat-going-down]]).

[F8] Every localisation $R\to S^{-1}R$ is flat, and a composite of flat ring
homomorphisms is flat ([[thm-localisations-are-flat]],
[[prop-transitivity-of-flatness-under-change-of-rings]]).

[F9] Flatness of morphisms is stable under arbitrary base change, and so is
local finite presentation ([[lem-flat-morphisms-stable-base-change]],
[[lem-base-change-locally-finite-type-presentation]]).

[F10] For an $S$-scheme $X$ and a morphism $T\to S$ the base change is the
fibre product $X_T=X\times_ST$ with structure map the second projection
([[def-base-change-morphism-schemes]]).

[F11] For a ring $B$ the distinguished opens $D(b)=\{\mathfrak q:b\notin\mathfrak q\}$
form a basis of the topology of $\operatorname{Spec}B$
([[def-affine-scheme-spectrum]]).

[F12] The Axiom of Choice states that every family of nonempty sets has a
choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 We first prove the affine claim: if $A\to B$ is a flat homomorphism of finite presentation, then $\operatorname{Spec}B\to\operatorname{Spec}A$ is open. Fix $b\in B$ and let $E_b\subseteq\operatorname{Spec}A$ be the image of the distinguished open $D(b)\subseteq\operatorname{Spec}B$ under the map of spectra. [given]

1.2 Now let $f:X\to S$ be flat and locally of finite presentation. Cover $X$ by affine opens $U_i=\operatorname{Spec}B_i$ such that $f(U_i)\subseteq V_i$ for affine opens $V_i=\operatorname{Spec}A_i\subseteq S$ with $A_i\to B_i$ of finite presentation, as [F2] allows; by [F4] and flatness of $f$ each $A_i\to B_i$ is flat. [F1, F2, F4]

2.1 The homomorphism $A\to B_b$ is flat: $A\to B$ is flat by hypothesis, the localisation $B\to B_b$ is flat by [F8], and a composite of flat ring homomorphisms is flat by [F8]. [F8, step 1.1]

2.2 By [F5] the set $E_b$ is constructible in $\operatorname{Spec}A$. [F5, step 1.1]

3.1 The set $E_b$ is stable under generalisation. Let $\mathfrak p\in E_b$ and let $\mathfrak p'\subseteq\mathfrak p$ be a prime of $A$. Choose $\mathfrak q\in D(b)$ with $\mathfrak q\cap A=\mathfrak p$. Since $b\notin\mathfrak q$, the prime $\mathfrak q$ determines a prime $\mathfrak q_2\in\operatorname{Spec}(B_b)$ contracting to $\mathfrak p$, and [F7] applied to the flat homomorphism $A\to B_b$ of step 2.1 produces $\mathfrak q_1\subseteq\mathfrak q_2$ with $\mathfrak q_1\cap A=\mathfrak p'$; as $b\notin\mathfrak q_1$ the prime $\mathfrak q_1$ defines a point of $D(b)$ lying over $\mathfrak p'$, so $\mathfrak p'\in E_b$. [F1, F7, step 2.1]

4.1 By step 2.2 the set $E_b$ is constructible and by step 3.1 it is stable under generalisation, so [F6] shows that $E_b$ is open in $\operatorname{Spec}A$. Since $b\in B$ was arbitrary, the image of every distinguished open of $\operatorname{Spec}B$ is open. [F6, step 2.2, step 3.1]

5.1 Every open subset of $\operatorname{Spec}B$ is a union of distinguished opens by [F11], and the image of a union is the union of the images, so by step 4.1 the image of every open subset of $\operatorname{Spec}B$ is open in $\operatorname{Spec}A$. This proves the affine claim that $\operatorname{Spec}B\to\operatorname{Spec}A$ is open. [F11, step 4.1]

6.1 For each $i$ the affine claim of step 5.1 makes the restriction $f|_{U_i}:U_i\to V_i$ open, hence also the map $U_i\to S$ is open in the sense of [F3], since $V_i$ is open in $S$. [F3, step 5.1, step 1.2]

7.1 Consequently $f$ is open: for an open $W\subseteq X$ one has $W=\bigcup_i(W\cap U_i)$, so $f(W)=\bigcup_i f(W\cap U_i)$, and each $f(W\cap U_i)$ is open in $S$ by step 6.1 applied to the open subset $W\cap U_i\subseteq U_i$, which is exactly the openness required of $f$ by [F3]. [F3, step 6.1]

8.1 Finally let $T\to S$ be an arbitrary morphism and form the base change $f_T:X\times_ST\to T$ of [F10]. By [F9] the morphism $f_T$ is again flat and locally of finite presentation, so step 7.1 applies to $f_T$ and shows that $f_T$ is open. As $T\to S$ was arbitrary, $f$ is universally open by the definition recorded in [F3]. The Axiom of Choice [F12] is used exactly through [F5], [F6] and [F7], each invoked above. [F3, F9, F10, F12, step 7.1] $\square$
