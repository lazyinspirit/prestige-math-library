---
id: thm-etale-formally-etale-finite-presentation
kind: theorem
title: "Etale morphisms are the formally etale morphisms locally of finite presentation"
status: published
origin: pipeline
deps:
  - def-etale-morphism-schemes
  - thm-etale-equivalent-flat-unramified-fp
  - def-unramified-morphism-finite-type
  - thm-formally-unramified-differentials-zero
  - def-formally-etale-morphism
  - def-formally-smooth-morphism
  - def-formally-unramified-morphism
  - thm-smooth-morphism-formally-smooth-finite-presentation
  - def-smooth-morphism-schemes
  - def-locally-finite-presentation-morphism
  - cor-derivations-represented-by-differentials
  - def-kahler-differentials-algebra
  - lem-sheaf-differentials-affine-compatibility
  - def-sheaf-relative-differentials
  - def-closed-immersion-schemes
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 29.36.5 and Section 29.35 (tags 02G4, 02H9)"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapter 26 (etale = formally etale + locally finitely presented)"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). A morphism of schemes
$f\colon X\to S$ is \'etale ([[def-etale-morphism-schemes]]) if and only if it
is locally of finite presentation ([[def-locally-finite-presentation-morphism]])
and formally \'etale ([[def-formally-etale-morphism]]).

The formal \'etaleness convention is the one fixed in the earlier definition:
formally \'etale means formally smooth and formally unramified
([[def-formally-smooth-morphism]], [[def-formally-unramified-morphism]]), so
that every square-zero lifting problem for $f$ admits lifts Zariski locally on
the test scheme and any two such local lifts agree on the overlaps of their
domains of definition; the local lifts then glue to a single lift. No flatness
or finite type hypothesis is part of formal \'etaleness, and the two directions
of the equivalence are proved by exhibiting the local lift from a standard
smooth chart (forward) and by reducing formal smoothness to smoothness with the
vanishing differentials (reverse).

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] \'Etale at $x$ means smooth at $x$ of relative dimension $0$: locally of finite presentation at $x$, flat at $x$, and geometric regularity of the fibre at $x$ of local dimension $0$; $f$ is \'etale when this holds at every point, and then $f$ is locally of finite presentation ([[def-etale-morphism-schemes]]).

[F2] Assume AC. If $f$ is locally of finite presentation, then $f$ is \'etale at $x$ if and only if $f$ is flat at $x$ and unramified at $x$ in the sense of locally finite type plus formal unramifiedness at $x$ ([[thm-etale-equivalent-flat-unramified-fp]]).

[F3] For an arbitrary morphism, formal unramifiedness is equivalent to the vanishing of the sheaf of relative differentials: $f$ is formally unramified if and only if $\Omega_{X/S}=0$, and a morphism is unramified exactly when it is locally of finite type and $\Omega_{X/S}=0$ ([[thm-formally-unramified-differentials-zero]], [[def-unramified-morphism-finite-type]], [[def-sheaf-relative-differentials]]).

[F4] $f$ is formally \'etale when it is formally smooth and formally unramified; equivalently every square-zero lifting problem has a lift Zariski locally on the test scheme and any two local lifts agree on overlaps, so that they glue to a unique global lift ([[def-formally-etale-morphism]], [[def-formally-smooth-morphism]], [[def-formally-unramified-morphism]]).

[F5] Assume AC. A morphism is smooth if and only if it is locally of finite presentation and formally smooth ([[thm-smooth-morphism-formally-smooth-finite-presentation]]).

[F6] A morphism is smooth at $x$ when it is locally of finite presentation at $x$, flat at $x$ and the fibre is geometrically regular at $x$; in particular a smooth morphism is locally of finite presentation and flat at every point ([[def-smooth-morphism-schemes]]).

[F7] For a ring map $A\to B$, composition with the universal derivation is a bijection $\operatorname{Hom}_B(\Omega_{B/A},M)\to\operatorname{Der}_A(B,M)$ for every $B$-module $M$, so $\Omega_{B/A}=0$ exactly when every $A$-derivation of $B$ into every $B$-module vanishes; on an affine chart $\operatorname{Spec}B$ over $\operatorname{Spec}A$ the sheaf $\Omega_{X/S}$ is the sheaf attached to $\Omega_{B/A}$ ([[cor-derivations-represented-by-differentials]], [[def-kahler-differentials-algebra]], [[lem-sheaf-differentials-affine-compatibility]]).

[F8] A square-zero thickening is a closed immersion $i\colon T_0\hookrightarrow T$ with ideal sheaf $\mathcal I=\ker(\mathcal O_T\to i_*\mathcal O_{T_0})$ satisfying $\mathcal I^2=0$ ([[def-closed-immersion-schemes]], [[def-formally-unramified-morphism]]); on affine charts it is an ideal $I\subseteq C$ with $I^2=0$, and two $A$-algebra maps $B\to C$ that agree modulo $I$ are exactly the affine form of two lifts agreeing on $T_0$. Agreement of two morphisms is a condition local on the test scheme, and morphisms into a scheme agree as soon as they agree on an open cover of the test scheme.

[F9] The Axiom of Choice states that every family of nonempty sets has a choice function; it is assumed in the smooth--formally smooth equivalence and in the \'etale--flat--unramified equivalence used below ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Forward direction, formal smoothness. Assume $f$ \'etale. Then $f$ is locally of finite presentation and smooth at every point by [F1], hence smooth [F6]; [F5] (AC) then shows that $f$ is formally smooth. [F1, F5, F6]

1.2 Forward direction, vanishing differentials. Assume $f$ \'etale. At every point $x$ the morphism $f$ is locally of finite presentation, flat and unramified, the last by [F2] (AC) in the forward direction; by [F3] this means $\Omega_{X/S,x}=0$. As $x$ ranges over $X$ the sheaf of relative differentials vanishes: $\Omega_{X/S}=0$, and on every affine chart $\operatorname{Spec}B$ over $\operatorname{Spec}A$ the module $\Omega_{B/A}$ is zero by [F7]. [F1, F2, F3, F7]

1.3 Reverse direction. Assume now that $f$ is locally of finite presentation and formally \'etale (AC). By [F4] $f$ is formally smooth and formally unramified; [F5] applied to the formally smooth morphism turns local finite presentation into smoothness, so $f$ is smooth, and consequently locally of finite presentation and flat at every point by [F6]. By [F3] the formal unramifiedness gives $\Omega_{X/S}=0$, hence $f$ is unramified at every point (it is locally of finite presentation, in particular locally of finite type); [F2] then gives that $f$ is \'etale at every point. [F2, F3, F4, F5, F6]

2.1 Forward direction, uniqueness of lifts. Let $i\colon T_0\hookrightarrow T$ be a square-zero thickening, let $u,v\colon T\to X$ be $S$-morphisms with $u|_{T_0}=v|_{T_0}$; we show $u=v$. Agreement is local on $T$ [F8], so fix $t\in T$ and put $y:=u(t)=v(t)$ (equality holds because a square-zero thickening has the same underlying space as $T$: the underlying map of a closed immersion is injective with image the closed set where the stalk of $\mathcal I$ is not the whole local ring, and a square-zero ideal has no stalk equal to the whole local ring, for that would force the local ring $0$). Choose affine opens $\operatorname{Spec}A=V\subseteq S$ around $f(y)$ and $\operatorname{Spec}B=U\subseteq X$ around $y$ with $f(U)\subseteq V$; then $W:=u^{-1}(U)\cap v^{-1}(U)$ is an open neighbourhood of $t$ and we may replace $T$ by an affine open $\operatorname{Spec}C\subseteq W$ containing $t$, so that $u,v$ correspond to $A$-algebra maps $\varphi,\psi\colon B\to C$ agreeing modulo the square-zero ideal $I\subseteq C$ of $T_0\cap T$. Define $D:=\varphi-\psi\colon B\to I$. For $b,b'\in B$ one computes $D(bb')=\varphi(b)\varphi(b')-\psi(b)\psi(b')=\varphi(b)D(b')+D(b)\psi(b')$, and since $\varphi(b)-\psi(b)\in I$ and $I^2=0$ the elements $\varphi(b)$ and $\psi(b)$ act in the same way on $I$, so $D$ is an $A$-derivation of $B$ into the $C$-module $I$. By [F7] and the vanishing $\Omega_{B/A}=0$ of step 1.2, $D=0$, so $\varphi=\psi$ and $u=v$ on $\operatorname{Spec}C$; as $t$ was arbitrary, $u=v$ on $T$. [F7, F8, step 1.2]

3.1 Forward direction, conclusion. By steps 1.1 and 2.1 the \'etale morphism $f$ is formally smooth (local existence of lifts) and formally unramified (uniqueness of lifts agreeing on a square-zero thickening), hence formally \'etale by [F4]; it is locally of finite presentation by [F1]. This proves the 'only if' direction. [F1, F4, step 1.1, step 2.1]

4.1 Summary. The Axiom of Choice [F9] is assumed in the Statement and is used exactly through [F5] in steps 1.1 and 1.3 and through [F2] in steps 1.2 and 1.3; steps 2.1 and 3.1 use only the universal property of differentials and the definition of formal \'etaleness, and add no choice. [F2, F5, F9, step 1.1, step 1.2, step 1.3] $\square$
