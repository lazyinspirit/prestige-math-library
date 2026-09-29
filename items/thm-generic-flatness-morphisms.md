---
id: thm-generic-flatness-morphisms
kind: theorem
title: "Generic flatness for finite type morphisms over Noetherian integral bases"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - lem-generic-freeness-finite-type-algebra-module
  - lem-flatness-affine-local-source-target
  - def-locally-noetherian-and-noetherian-scheme
  - def-locally-finite-type-and-finite-type-morphism
  - def-integral-scheme
  - thm-affine-fibre-product-tensor-ring
  - def-quasi-compact-and-quasi-separated-morphism
  - cor-free-modules-are-projective-and-flat
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.26 (flat morphisms, descent)"
      url: https://stacks.math.columbia.edu/tag/01U2
    - title: "The Stacks Project, Commutative Algebra, Section 10.40 (faithfully flat descent)"
      url: https://stacks.math.columbia.edu/download/algebra.pdf
    - title: "The Stacks Project, Commutative Algebra, Section 10.108 (generic flatness)"
      url: https://stacks.math.columbia.edu/download/algebra.pdf
---

## Statement

Assume the Axiom of Choice (AC). Let $f:X\to S$ be a morphism of finite
type ([[def-locally-finite-type-and-finite-type-morphism]]) whose base $S$ is a
Noetherian integral scheme ([[def-locally-noetherian-and-noetherian-scheme]],
[[def-integral-scheme]]). Then there exists a dense open subscheme $U\subseteq
S$ such that the restriction $f^{-1}(U)\to U$ is flat.

The open set produced is a finite union of nonempty principal opens and may
meet parts of $S$ over which the fibre of $f$ is empty; no nonemptiness of
fibres is used.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] Assume AC. If $A$ is a Noetherian domain, $B$ a finitely generated $A$-algebra and $M$ a finitely generated $B$-module, then there is a nonzero $a\in A$ with $M_a$ free over $A_a$ ([[lem-generic-freeness-finite-type-algebra-module]]).

[F2] An integral scheme is nonempty and every nonempty affine open of it is the spectrum of a domain ([[def-integral-scheme]]).

[F3] A morphism is of finite type when it is locally of finite type and quasi-compact; equivalently it is affine-locally given by finite-type ring maps, and inverse images of affine opens are quasi-compact ([[def-locally-finite-type-and-finite-type-morphism]], [[def-quasi-compact-and-quasi-separated-morphism]]).

[F4] On affine charts $U=\operatorname{Spec}B\subseteq X$ over $V=\operatorname{Spec}A\subseteq S$ the morphism is flat at every point of $U$ if and only if $B$ is flat over $A$ ([[lem-flatness-affine-local-source-target]]).

[F5] For an affine chart $\operatorname{Spec}B$ over $\operatorname{Spec}A$ and $g\in A$, the inverse image of $D(g)$ is $\operatorname{Spec}(B\otimes_AA_g)=\operatorname{Spec}B_g$: fibre products of affine schemes are computed by tensor products ([[thm-affine-fibre-product-tensor-ring]]).

[F6] Free modules are flat ([[cor-free-modules-are-projective-and-flat]]).

## Proof

**Proof technique:** direct.

1.1 Since $S$ is integral and Noetherian, affine opens form a basis and $S$ is quasi-compact; choose finitely many affine opens $\operatorname{Spec}A_1,\dots,\operatorname{Spec}A_r$ covering $S$, so that each $A_i$ is a Noetherian domain by [F2]. [F2, F3]

1.2 For each $i$ the open $f^{-1}(\operatorname{Spec}A_i)$ is quasi-compact by [F3]; choose a finite affine open cover $\operatorname{Spec}B_{i1},\dots,\operatorname{Spec}B_{is_i}$ of it, so the induced ring maps $A_i\to B_{ij}$ are of finite type. [F3]

1.3 Apply [F1] to the Noetherian domain $A_i$, the finitely generated $A_i$-algebra $B_{ij}$ and the finitely generated $B_{ij}$-module $M=B_{ij}$: there is $0\ne g_{ij}\in A_i$ with $(B_{ij})_{g_{ij}}$ free, hence flat, over $(A_i)_{g_{ij}}$. [F1, F6]

2.1 For each $i$ put $g_i=\prod_{j=1}^{s_i}g_{ij}\in A_i$, with the empty product $g_i=1$ when $s_i=0$, and set $U_i=D(g_i)\subseteq\operatorname{Spec}A_i$. Since $A_i$ is a domain and every $g_{ij}$ is nonzero, $g_i\ne0$, so $U_i$ is a nonempty principal open. Put $U=U_1\cup\cdots\cup U_r\subseteq S$. Each $U_i$ is a nonempty open subset of the irreducible space $S$, hence is dense in $S$; therefore $U$ is a dense open subset of $S$ and is a finite union of nonempty principal opens. [F2, step 1.3]

2.2 Fix $i$ and $j$. The inverse image of $U_i=D(g_i)$ **inside the source chart** $\operatorname{Spec}B_{ij}$ is $\operatorname{Spec}(B_{ij})_{g_i}$ by [F5]. Since $g_i$ is a multiple of $g_{ij}$, this is the base change $(B_{ij})_{g_{ij}}\otimes_{(A_i)_{g_{ij}}}(A_i)_{g_i}$; the free $(A_i)_{g_{ij}}$-basis from step 1.3 remains a free basis after this base change. Thus $(B_{ij})_{g_i}$ is free, hence flat by [F6], over $(A_i)_{g_i}=\Gamma(U_i,\mathcal O_S)$. By [F4], $f$ is flat on this restricted source chart. [F4, F5, F6, step 1.3, algebra]

3.1 For each $i$, the source charts $\operatorname{Spec}B_{ij}$ from step 1.2 cover the whole inverse image $f^{-1}(\operatorname{Spec}A_i)$, so their restrictions $\operatorname{Spec}(B_{ij})_{g_i}$ cover the whole inverse image $f^{-1}(U_i)$. If $s_i=0$, that inverse image is empty and flatness there is vacuous. Step 2.2 makes every nonempty restricted chart flat over $U_i$. As the $U_i$ cover $U$, flatness is local on source and target by [F4], and $f^{-1}(U)\to U$ is flat. [F4, step 1.2, step 2.1, step 2.2]

4.1 The construction uses only the algebra maps $A_i\to B_{ij}$; no fibre of $f$ is assumed nonempty, and where $B_{ij}$ is the zero ring the lemma [F1] still supplies a nonzero $g_{ij}$ with $(B_{ij})_{g_{ij}}=0$ free over $(A_i)_{g_{ij}}$, so charts with empty fibres are included in $U$ without harm. The Axiom of Choice is used exactly through [F1], as the Statement declares. [F1, step 1.3] $\square$
