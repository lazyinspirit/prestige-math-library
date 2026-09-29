---
id: cex-unramified-not-flat-closed-immersion
kind: counterexample
title: "Unramified of finite presentation does not imply flat or etale"
status: published
origin: pipeline
deps:
  - def-etale-morphism-schemes
  - thm-etale-equivalent-flat-unramified-fp
  - def-unramified-morphism-finite-type
  - thm-formally-unramified-differentials-zero
  - thm-conormal-exact-sequence-algebra
  - cor-derivations-represented-by-differentials
  - def-kahler-differentials-algebra
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - def-flat-morphism-schemes
  - def-closed-immersion-schemes
  - def-locally-finite-type-and-finite-type-morphism
  - def-finitely-presented-module-and-algebra
  - cor-tensor-product-with-a-quotient-ring
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.36 and Lemma 29.36.7 (unramified does not imply flat)"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapter 26 (closed immersions are unramified but usually not flat)"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Let $k$ be a field, put $A=k[t]$ and let
$$f\colon\operatorname{Spec}k\longrightarrow\operatorname{Spec}A$$
be the morphism induced by the quotient $A\to A/(t)=k$; it is the closed
immersion cutting out the origin, the closed point $(t)\in\operatorname{Spec}A$
([[def-closed-immersion-schemes]]).

1. $f$ is of finite presentation and unramified
   ([[def-unramified-morphism-finite-type]]): the algebra $k=A/(t)$ is a
   finitely presented $A$-algebra, and $\Omega_{k/A}=0$ because
   $\Omega_{A/A}=0$ and the conormal sequence of $A\to A\to k$ is exact.
2. $f$ is not flat ([[def-flat-morphism-schemes]]): the inclusion of ideals
   $(t)\hookrightarrow A$ is injective, but after tensoring over $A$ with $k$
   it becomes the zero map $(t)\otimes_Ak\cong k\to A\otimes_Ak\cong k$, which
   is not injective; hence $k$ is not a flat $A$-module.
3. Consequently $f$ is not \'etale, although it is unramified of finite
   presentation. So the implication "unramified $\Rightarrow$ \'etale" is
   false, and the flatness clause in the flat-plus-unramified description of
   \'etaleness cannot be dropped.

Assume the Axiom of Choice for the flat-plus-unramified criterion of
statement 3.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] The K\"ahler differentials of $A$ over itself vanish: for $A\to A$ the identity every $A$-derivation of $A$ into every $A$-module is zero, since the whole ring is the image of $A$ and derivations annihilate that image; the universal property of $\Omega_{A/A}$ makes it represent these derivations, so $\Omega_{A/A}=0$ ([[def-kahler-differentials-algebra]], [[cor-derivations-represented-by-differentials]]).

[F2] For $A\to P$ and an ideal $I\subseteq P$ with $B=P/I$, the conormal sequence $I/I^2\to B\otimes_P\Omega_{P/A}\to\Omega_{B/A}\to0$ is exact ([[thm-conormal-exact-sequence-algebra]]).

[F3] A morphism is formally unramified if and only if its sheaf of relative differentials vanishes, and it is unramified exactly when it is locally of finite type and formally unramified, equivalently locally of finite type with $\Omega_{X/S}=0$ ([[thm-formally-unramified-differentials-zero]], [[def-unramified-morphism-finite-type]]).

[F4] A module $M$ over a commutative ring $R$ is flat exactly when tensoring with $M$ preserves exact sequences, in particular when it preserves injectivity of every injection of $R$-modules; $M\otimes_R(R/I)\cong M/IM$ for an ideal $I$ ([[def-flat-and-faithfully-flat-modules-and-ring-maps]], [[cor-tensor-product-with-a-quotient-ring]]). A morphism of schemes is flat at a point when the corresponding stalk is flat over the base stalk, and for the affine morphism $\operatorname{Spec}B\to\operatorname{Spec}A$ this holds exactly when $B$ is flat over $A$ at every point ([[def-flat-morphism-schemes]]).

[F5] Assume AC. For a locally finitely presented morphism, \'etale at $x$ is equivalent to flat at $x$ and unramified at $x$; in particular an \'etale morphism is flat at every point ([[thm-etale-equivalent-flat-unramified-fp]], [[def-etale-morphism-schemes]]).

[F6] A quotient of a polynomial algebra by a finitely generated ideal is a finitely presented algebra, hence of finite type; $k[t]/(t)$ is such a quotient ([[def-finitely-presented-module-and-algebra]], [[def-locally-finite-type-and-finite-type-morphism]]).

[F7] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Setup and finite presentation. Let $A=k[t]$, $P=A$, $I=(t)\subseteq A$ and $B=A/I=k$, so that the quotient map $A\to B$ induces the closed immersion $f$ of the Statement. Since $I=(t)$ is generated by one element, $B$ is a finitely presented $A$-algebra by [F6], and the induced morphism is of finite presentation, in particular locally of finite type. [F6]

2.1 Unramifiedness. By [F1] one has $\Omega_{A/A}=0$; applying the conormal sequence [F2] to $A\to P=A$ and $I=(t)$ gives the exact sequence $(t)/(t)^2\to k\otimes_A\Omega_{A/A}\to\Omega_{k/A}\to0$ in which the middle term vanishes, so $\Omega_{k/A}=0$ as the cokernel of a map from a zero module. By [F3] the vanishing of the differentials makes the algebra map $A\to k$ formally unramified, and with finite type from step 1.1 it is unramified; on the scheme level $f$ is unramified. This gives claim 1. [F1, F2, F3, step 1.1]

2.2 Non-flatness. The ideal $(t)\subseteq A$ is a free $A$-module of rank one via $a\mapsto at$, so $(t)\otimes_Ak\cong A\otimes_Ak\cong k$ by [F4] applied with $M=A$ and $I=(t)$, which is nonzero because $k$ is a field. The inclusion $\iota\colon(t)\hookrightarrow A$ is injective, and $\iota\otimes_A\mathrm{id}_k$ sends $t\otimes1$ to $t\otimes1=1\otimes t=1\otimes0=0$ in $A\otimes_Ak$, hence is the zero map $k\to k$, which is not injective. By [F4] tensoring with the $A$-module $k$ therefore does not preserve injections, so $k$ is not flat over $A$, and the affine morphism $f\colon\operatorname{Spec}k\to\operatorname{Spec}A$ is not flat. This gives claim 2. [F4, step 1.1]

3.1 Not \'etale. The morphism $f$ is locally of finite presentation by step 1.1 and unramified by step 2.1, but not flat by step 2.2. By [F5] (AC), \'etaleness at a point would require flatness at that point; hence $f$ is not \'etale at its single point, and in particular not \'etale. So a finite presentation, unramified morphism need not be \'etale, which is claim 3: the flatness clause is indispensable. [F5, step 2.1, step 2.2]

4.1 Choice accounting. The Axiom of Choice [F7] is assumed in the Statement and used exactly through the flat-plus-unramified criterion [F5] in step 3.1; the conormal computation, the tensor computation and the unramifiedness argument of steps 1.1, 2.1 and 2.2 are choice-free. [F5, F7, step 3.1] $\square$
