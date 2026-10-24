---
id: lem-flat-local-map-faithfully-flat
kind: lemma
title: "A flat local map is faithfully flat"
status: published
origin: pipeline
deps:
  - def-axiom-of-choice
  - thm-proper-ideal-contained-in-maximal-ideal
  - def-flat-morphism-schemes
  - thm-flatness-criteria-by-injections-and-ideals
  - def-local-ring
  - def-flat-and-faithfully-flat-modules-and-ring-maps
  - thm-faithful-flatness-detected-by-nonzero-modules-and-fibres
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Commutative Algebra, Lemma 10.18.7 and Section 10.39 (faithfully flat modules)"
      url: https://stacks.math.columbia.edu/download/algebra.pdf
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.25"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\varphi:(A,\mathfrak m)\to(B,\mathfrak n)$ be a local homomorphism of
nonzero local rings ([[def-local-ring]]) that is flat as a ring map, i.e. $B$
is flat as an $A$-module ([[def-flat-and-faithfully-flat-modules-and-ring-maps]]).
Then $\varphi$ is faithfully flat. Consequently, if a morphism of schemes
$f:X\to S$ is flat at $x\in X$ with $s=f(x)$, then the induced local ring map
$\mathcal O_{S,s}\to\mathcal O_{X,x}$ is faithfully flat.

AC is used to place each proper ideal of $A$ inside a maximal ideal,
which must be its unique maximal ideal.

## Facts & Assumptions


**Given:** AC and a local homomorphism $(A,\mathfrak m)\to(B,\mathfrak n)$ of nonzero local rings that is flat as a ring map, and, for the consequence, a morphism $f:X\to S$ flat at $x\in X$ with $s=f(x)$.

[F1] A local ring is a nonzero commutative ring $R$ with exactly one maximal
ideal ([[def-local-ring]]). Under AC every proper ideal is contained in a
maximal ideal ([[thm-proper-ideal-contained-in-maximal-ideal]]), hence in this
unique maximal ideal.

[F2] An $R$-module $M$ is faithfully flat if a sequence of $R$-modules is
exact exactly when its tensor with $M$ is exact
([[def-flat-and-faithfully-flat-modules-and-ring-maps]]).

[F3] Assume the Axiom of Choice for the maximal-ideal detection step. For a
flat $R$-module $M$ the following are equivalent: $M$ is faithfully flat, and
$N\otimes_RM\ne0$ for every nonzero $R$-module $N$. The implication from the
second condition to the first is proved in step 1.4 of the source without the
maximal-ideal choice, which is used only to pass between the nonzero-module and
the residue-field conditions ([[thm-faithful-flatness-detected-by-nonzero-modules-and-fibres]]).

[F4] For an $R$-module $M$ the following are equivalent: $M$ is flat; and for
every injection $K\hookrightarrow N$ of $R$-modules the induced map
$K\otimes_RM\to N\otimes_RM$ is injective
([[thm-flatness-criteria-by-injections-and-ideals]]).

[F5] A morphism $f:X\to S$ is flat at $x$ if $\mathcal O_{X,x}$ is a flat
$\mathcal O_{S,f(x)}$-module for the local ring map, and flat if this holds at
every point ([[def-flat-morphism-schemes]]); the rings $\mathcal O_{S,s}$ and
$\mathcal O_{X,x}$ are local rings ([[def-local-ring]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varphi:(A,\mathfrak m)\to(B,\mathfrak n)$ be a local homomorphism of nonzero local rings, that is $\varphi(\mathfrak m)\subseteq\mathfrak n$, and assume $B$ flat as an $A$-module. If $I\subsetneq A$ is a proper ideal, then $I\subseteq\mathfrak m$ by [F1], hence $IB\subseteq\mathfrak mB\subseteq\mathfrak n\subsetneq B$ because $\mathfrak n$ is a proper ideal of the nonzero ring $B$; in particular $IB\ne B$. [F1]

2.1 We claim that $N\otimes_AB\ne0$ for every nonzero $A$-module $N$. Choose $0\ne x\in N$ and put $\mathfrak a=\operatorname{Ann}_A(x)=\{a:ax=0\}$, a proper ideal of $A$ since $1\notin\mathfrak a$; by [F1] $\mathfrak a\subseteq\mathfrak m$. The $A$-linear map $A/\mathfrak a\to N$, $\overline a\mapsto ax$, is injective with nonzero image, and $(A/\mathfrak a)\otimes_AB\cong B/\mathfrak a B$, which is nonzero because $\mathfrak a B\subseteq\mathfrak mB\subseteq\mathfrak n\subsetneq B$ as in step 1.1. Since $B$ is flat, [F4] makes the induced map $B/\mathfrak aB\to N\otimes_AB$ injective, so $N\otimes_AB\ne0$. The containment of $\mathfrak a$ in $\mathfrak m$ uses the AC-qualified assertion in [F1]. [F1, F4, step 1.1]

3.1 By the equivalence of [F3] applied to the flat $A$-module $B$, the nonvanishing proved in step 2.1 is exactly the second condition, so $B$ is faithfully flat over $A$. The assumed AC licenses [F3] and, separately, the proper-ideal containment in [F1]. [F2, F3, step 2.1]

4.1 Now let $f:X\to S$ be flat at a point $x\in X$ and put $s=f(x)$. By [F5] the local ring map $\mathcal O_{S,s}\to\mathcal O_{X,x}$ is flat, and by [F5] and [F1] the two rings are nonzero local rings; applying step 3.1 to this local homomorphism gives that $\mathcal O_{X,x}$ is faithfully flat over $\mathcal O_{S,s}$, which is the geometric assertion. [F1, F5, step 3.1] $\square$
