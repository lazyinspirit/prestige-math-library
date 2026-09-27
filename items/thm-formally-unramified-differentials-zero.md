---
id: "thm-formally-unramified-differentials-zero"
kind: "theorem"
title: "Formal unramifiedness iff Omega vanishes"
status: draft
origin: "pipeline"
deps: ["def-formally-unramified-morphism", "lem-differentials-diagonal-ideal-square", "thm-sheaf-differentials-universal-property", "def-diagonal-morphism-scheme", "def-sheaf-relative-differentials", "lem-sheaf-differentials-affine-compatibility", "def-kernel-cokernel-image-sheaves", "def-scheme-over-base", "def-closed-immersion-schemes"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Algebra, Lemma 10.148.3 (tag 00UO) and Stacks More on Morphisms, Lemma 37.6.7"
      url: "https://stacks.math.columbia.edu/tag/00UO"
---

## Statement

Let $f\colon X\to S$ be a morphism of schemes. Then $f$ is formally unramified
([[def-formally-unramified-morphism]]) if and only if
$\Omega_{X/S}=0$ ([[def-sheaf-relative-differentials]]). No finite-type,
finite-presentation, flatness or separatedness hypothesis is imposed on $f$, and
no existence of lifts is asserted in either direction.

## Facts & Assumptions

**Given:** A morphism of schemes $f\colon X\to S$.

[F1] [[def-formally-unramified-morphism]]: $f$ is formally unramified if for every square-zero thickening $i\colon T_0\hookrightarrow T$ over $S$ and every $S$-morphism $T_0\to X$ there is at most one $S$-morphism $T\to X$ restricting to it; over affine opens $\operatorname{Spec}B\to\operatorname{Spec}A$ this says that two $A$-algebra maps $B\to C$ into a ring $C$ with square-zero ideal $I$ that agree modulo $I$ are equal.

[F2] [[lem-differentials-diagonal-ideal-square]]: for a ring map $A\to B$ and $J=\ker(B\otimes_AB\to B)$ one has $J/J^2\cong\Omega_{B/A}$ via $[1\otimes b-b\otimes1]\mapsto\mathrm db$.

[F3] [[thm-sheaf-differentials-universal-property]]: for every $\mathcal O_X$-module $\mathcal G$ the map $u\mapsto u\circ\mathrm d_{X/S}$ is a bijection $\operatorname{Hom}_{\mathcal O_X}(\Omega_{X/S},\mathcal G)\cong\operatorname{Der}_S(\mathcal O_X,\mathcal G)$.

[F4] [[lem-sheaf-differentials-affine-compatibility]]: for an affine open $\operatorname{Spec}B\subseteq X$ lying over an affine open $\operatorname{Spec}A\subseteq S$ one has $\Gamma(\operatorname{Spec}B,\Omega_{X/S})=\Omega_{B/A}$; hence $\Omega_{X/S}=0$ if and only if $\Omega_{B/A}=0$ for all such charts.

[F5] [[def-sheaf-relative-differentials]]: an $S$-derivation $\mathcal O_X\to\mathcal G$ is additive, satisfies Leibniz, and kills the image of the structure map from $\mathcal O_S$.

[F6] [[def-closed-immersion-schemes]] and [[def-scheme-over-base]]: a closed immersion with ideal sheaf $\mathcal I=\ker(\mathcal O_T\to i_*\mathcal O_{T_0})$ is a square-zero thickening when $\mathcal I^2=0$; a morphism is determined by its map of structure sheaves, so two morphisms of schemes are equal exactly when their sheaf maps are.

## Proof

**Proof technique:** direct.

1.1 Assume $\Omega_{X/S}=0$; we show that lifts are unique. Let $i\colon T_0\hookrightarrow T$ be a square-zero thickening over $S$ and let $a_0\colon T_0\to X$ be an $S$-morphism with two $S$-morphism lifts $a,b\colon T\to X$. Since $a$ and $b$ have the same underlying map on points, the direct images $a_*\mathcal O_T$ and $b_*\mathcal O_T$ are the same sheaf of rings $\mathcal F=\mathcal O_T$ pushed forward along this common map, and both $a^{\sharp}$ and $b^{\sharp}$ are maps $\mathcal O_X\to\mathcal F$; the difference $\delta:=b^{\sharp}-a^{\sharp}$ is a morphism of sheaves of abelian groups valued in $\mathcal G:=a_*\mathcal I$, where $\mathcal I=\ker(\mathcal O_T\to i_*\mathcal O_{T_0})$, because $a$ and $b$ agree on $T_0$ after composition with $\mathcal O_T\to i_*\mathcal O_{T_0}$. The sheaf $\mathcal G$ is an $\mathcal O_X$-module through $a^{\sharp}$, and $\delta$ is an $S$-derivation: it is additive, and for local sections $x,y$ of $\mathcal O_X$ one has $\delta(xy)=b^{\sharp}(x)\delta(y)+\delta(x)a^{\sharp}(y)=a^{\sharp}(x)\delta(y)+a^{\sharp}(y)\delta(x)$, since $b^{\sharp}(x)-a^{\sharp}(x)\in\mathcal G$ and $\mathcal G^2\subseteq a_*\mathcal I^2=0$. It kills the image of $\mathcal O_S$ because $a$ and $b$ are $S$-morphisms. By [F3] with $\mathcal G$ and $\Omega_{X/S}=0$, $\operatorname{Der}_S(\mathcal O_X,\mathcal G)=\operatorname{Hom}_{\mathcal O_X}(0,\mathcal G)=0$, so $\delta=0$, that is $b^{\sharp}=a^{\sharp}$; by [F6] $a=b$. Hence $f$ is formally unramified. [F1, F3, F5, F6]

1.2 Assume $f$ formally unramified; we show $\Omega_{B/A}=0$ on every affine chart. Let $U=\operatorname{Spec}B\subseteq X$ be affine over an affine open $V=\operatorname{Spec}A\subseteq S$, put $B'=(B\otimes_AB)/J^2$ with $J=\ker(B\otimes_AB\to B)$, and let $q\colon B'\to B$ be the quotient. The ideal $J/J^2=\ker q$ has square zero, so $\operatorname{Spec}B\to\operatorname{Spec}B'$ is a square-zero thickening over $A$; the two $A$-algebra maps $p_1(b)=b\otimes1$ and $p_2(b)=1\otimes b$ from $B$ to $B'$ both compose with $q$ to the identity, so the $S$-morphisms $c_i\colon\operatorname{Spec}B'\to\operatorname{Spec}B\hookrightarrow X$ induced by $p_i$ agree on $\operatorname{Spec}B$. By [F1] applied to this thickening, $c_1=c_2$, and therefore the maps on global sections agree: $p_1=p_2$. Hence $b\otimes1=1\otimes b$ in $B'$ for all $b\in B$, that is $J/J^2=0$, and [F2] gives $\Omega_{B/A}=0$. [F1, F2, F6]

2.1 Conclusion. Step 1.1 proves that $\Omega_{X/S}=0$ implies that $f$ is formally unramified and step 1.2 that a formally unramified $f$ has $\Omega_{B/A}=0$ on every affine chart, hence $\Omega_{X/S}=0$ by [F4]. This proves the equivalence; nowhere were finiteness, flatness or separatedness used, and no lift was constructed, only used for uniqueness in step 1.1. [F1, F4, step 1.1, step 1.2] ∎
