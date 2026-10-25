---
id: lem-etale-neighbourhood-isolated-fibre-point-finite
kind: lemma
title: "Finite neighbourhood of an isolated fibre point after elementary etale change"
status: published
origin: pipeline
deps:
  - def-etale-morphism-schemes
  - def-finite-morphism-schemes
  - lem-finite-morphism-affine
  - def-locally-finite-type-and-finite-type-morphism
  - def-scheme-theoretic-fibre
  - thm-affine-fibre-product-tensor-ring
  - lem-fibre-product-open-restriction
  - lem-points-of-scheme-fibre-product-residue-tensors
  - def-quasi-finite-at-a-prime-for-finite-type-algebras
  - lem-etale-stable-base-change-composition
  - ex-localization-etale-open-immersion
  - def-elementary-etale-neighbourhood
  - lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite
  - lem-clopen-subset-gives-idempotent-decomposition
  - lem-coprime-polynomial-factorization-lifts-etale-locally
  - thm-algebraic-zariski-main-localization
  - thm-lying-over
  - cor-noether-normalisation-module-finiteness
  - cor-dimension-preserved-by-integral-extensions
  - cor-dimension-of-a-finite-polynomial-ring-over-a-field
  - def-affine-scheme-spectrum
  - def-local-ring
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Algebra, Lemma 10.145.2 (tag 00UJ): etale local structure of quasi-finite ring maps"
      url: https://stacks.math.columbia.edu/tag/00UJ
    - title: "The Stacks Project, Algebra, Lemma 10.122.2 (tag 00PK): isolated points in fibres and quasi-finiteness"
      url: https://stacks.math.columbia.edu/tag/00PK
    - title: "The Stacks Project, Algebra, Lemma 10.145.1 (tag 00UI) and Definition 10.143.1 (tag 00U1)"
      url: https://stacks.math.columbia.edu/tag/00UI
    - title: "The Stacks Project, More on Morphisms, Section 37.41 (etale neighbourhoods) and Morphisms, Section 29.21"
      url: https://stacks.math.columbia.edu/download/more-morphisms.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $f\colon X\to S$ be
a morphism locally of finite type
([[def-locally-finite-type-and-finite-type-morphism]]), let $x\in X$ and put
$s=f(x)$. Assume that $x$ is an isolated point of the scheme-theoretic fibre
$X_s$ ([[def-scheme-theoretic-fibre]]).

Then there exist

1. a scheme $U$ with an \'etale morphism $\varphi\colon U\to S$
   ([[def-etale-morphism-schemes]]) and a point $u\in U$ with $\varphi(u)=s$
   and $\kappa(u)=\kappa(s)$, so that $(\varphi,u)\colon(U,u)\to(S,s)$ is an
   elementary \'etale neighbourhood
   ([[def-elementary-etale-neighbourhood]]), and
2. an open subscheme $V\subseteq X_U=X\times_SU$ containing the point
   $x_U=(x,u)$,

such that

i. $V\to U$ is finite ([[def-finite-morphism-schemes]]), and
ii. the fibre $V_u=V\times_U\operatorname{Spec}\kappa(u)$ consists of exactly
   one point, namely the image of $x_U$, and its residue field is the original
   residue field: since $\kappa(u)=\kappa(s)$ the canonical map
   $\kappa(x)\to\kappa(x_U)$ is an isomorphism.

No separatedness of $f$ is needed, $X$ need not be quasi-compact over $S$,
and no Noetherian hypothesis is imposed; the neighbourhood produced is
affine over an affine \'etale neighbourhood when that is convenient. The
empty source case is vacuous, and if $X_s$ has exactly the one point $x$ the
conclusion describes an open finite neighbourhood of $x$.

## Facts & Assumptions
**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] For a nonzero finite-type algebra $D$ over a field $K$, Noether normalization gives algebraically independent $z_1,\dots,z_d\in D$ with $D$ module-finite over $K[z_1,\dots,z_d]$ ([[cor-noether-normalisation-module-finiteness]]). Injective integral extensions preserve Krull dimension ([[cor-dimension-preserved-by-integral-extensions]]), and $\dim K[z_1,\dots,z_d]=d$ ([[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]). The basic opens $D(h)$ form a basis in an affine spectrum ([[def-affine-scheme-spectrum]]), and the local ring at a prime is its prime localization ([[def-local-ring]]).

[F2] Local algebraic Zariski Main gives, for a finite-type map $A\to B$ quasi-finite at $\mathfrak q$ and $B^0=\operatorname{Int}_A(B)$, an element $g\in B^0\setminus\mathfrak q$ with $(B^0)_g\cong B_g$ ([[thm-algebraic-zariski-main-localization]]). A clopen singleton in an affine spectrum comes from an idempotent and splits its ring into two factors ([[lem-clopen-subset-gives-idempotent-decomposition]]). A coprime factorization of a monic polynomial over $\kappa(\mathfrak p)$ lifts after an everywhere étale affine $A$-algebra $A'$ with a chosen prime $\mathfrak p'$ satisfying $\kappa(\mathfrak p')=\kappa(\mathfrak p)$ ([[lem-coprime-polynomial-factorization-lifts-etale-locally]]). If $C\to D$ is integral, every prime of $C$ containing its kernel lifts to a prime of $D$ ([[thm-lying-over]]); consequently the image of $V_D(J)$ is the closed set $V_C(\ker(C\to D/J))$. A finite-type algebra generated by integral elements is module-finite ([[lem-algebra-generated-by-finitely-many-integral-elements-is-module-finite]]).

[F3] Affine charts of a locally finite type morphism and their fibres: every point of $X$ has affine neighbourhoods $U=\operatorname{Spec}B\subseteq X$ and $V=\operatorname{Spec}A\subseteq S$ with $f(U)\subseteq V$ and $A\to B$ of finite type, and for the corresponding prime $\mathfrak q\subseteq B$ over $\mathfrak p\subseteq A$ the fibre product $\operatorname{Spec}B\times_{\operatorname{Spec}A}\operatorname{Spec}\kappa(\mathfrak p)$ is canonically $\operatorname{Spec}(B\otimes_A\kappa(\mathfrak p))$ and is an open subscheme of the fibre $X_s$ ([[def-locally-finite-type-and-finite-type-morphism]], [[def-scheme-theoretic-fibre]], [[thm-affine-fibre-product-tensor-ring]], [[lem-fibre-product-open-restriction]]).

[F4] Points of a fibre product over a common base point: for morphisms $X\to S$ and $Y\to S$, a point of $X\times_SY$ over $x\in X$, $y\in Y$, $s\in S$ corresponds to a prime $\mathfrak r$ of $\kappa(x)\otimes_{\kappa(s)}\kappa(y)$, and its residue field is canonically $\kappa(\mathfrak r)$ ([[lem-points-of-scheme-fibre-product-residue-tensors]]).

[F5] A morphism $\operatorname{Spec}C\to\operatorname{Spec}R'$ over an affine base is finite exactly when $C$ is a module-finite $R'$-algebra ([[def-finite-morphism-schemes]], [[lem-finite-morphism-affine]]).

[F6] \'Etale morphisms are stable under composition and base change; an open immersion is \'etale; and a morphism is an elementary \'etale neighbourhood of $(S,s)$ when it is \'etale and the chosen point has residue field $\kappa(s)$ ([[lem-etale-stable-base-change-composition]], [[ex-localization-etale-open-immersion]], [[def-elementary-etale-neighbourhood]]).

[F7] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).





## Proof

**Proof technique:** direct.

1.1 Reduction to a finite-type affine chart. Choose an affine open $V_0=\operatorname{Spec}A\subseteq S$ with $s\in V_0$ and an affine open $U_0=\operatorname{Spec}B\subseteq X$ with $x\in U_0$ and $f(U_0)\subseteq V_0$; this is possible by [F3] because $f$ is locally of finite type. Then $A\to B$ is of finite type, and the prime $\mathfrak q\subseteq B$ of $x$ lies over the prime $\mathfrak p\subseteq A$ of $s$. Under the identification of [F3] the chart fibre $\operatorname{Spec}(B\otimes_A\kappa(\mathfrak p))$ is an open subscheme of $X_s$ containing the point $x$; since $x$ is isolated in $X_s$, the corresponding point $\overline{\mathfrak q}$ is isolated in $\operatorname{Spec}(B\otimes_A\kappa(\mathfrak p))$. [F3]

2.1 Quasi-finiteness at $\mathfrak q$. Put $K=\kappa(\mathfrak p)$ and $F=B\otimes_AK$, a finite-type $K$-algebra. Since the fibre point $\overline{\mathfrak q}$ is isolated, a basic open $D_F(h)$ contains it and no other point by [F1]. The nonzero finite-type algebra $F_h$ therefore has a one-point spectrum and dimension $0$. Noether normalization [F1] makes it finite over a polynomial ring $K[z_1,\dots,z_d]$, and dimension preservation plus the polynomial dimension formula in [F1] force $d=0$. Thus $F_h$ is a finite-dimensional $K$-algebra. As its spectrum has the single point $\overline{\mathfrak q}$, it is local and its localization at that point is itself; this local ring is $B_{\mathfrak q}/\mathfrak pB_{\mathfrak q}$ by [F3]. Hence the fibre local algebra is finite over $K$, precisely the quasi-finiteness condition at $\mathfrak q$ ([[def-quasi-finite-at-a-prime-for-finite-type-algebras]]). [F1, F3, step 1.1]

3.1 The local integral closure. Put $B^0=\operatorname{Int}_A(B)$. By [F2] applied to step 2.1, choose $g\in B^0\setminus\mathfrak q$ with $(B^0)_g\cong B_g$. Write $K=\kappa(\mathfrak p)$, $F_0=B^0\otimes_AK$ and $F=B\otimes_AK$. Every element of $F_0$ is integral over $K$, so every prime of $F_0$ is maximal: its quotient is an integral domain algebraic over a field, hence a field. Let $\mathfrak q_0$ be the contraction of the selected point of $F$. It is closed in $\operatorname{Spec}F_0$; it is also open, because the localization at $g$ identifies an open neighbourhood of it with the isolated singleton in $\operatorname{Spec}F$ from step 1.1. Thus $\{\mathfrak q_0\}$ is clopen. The same localization shows that the selected point of $F$ is the only point over $\mathfrak q_0$. [F2, step 1.1, step 2.1]

4.1 An element separating the selected fibre point. By [F2], a fibre idempotent $e\in F_0$ is $1$ at $\mathfrak q_0$ and $0$ at every other fibre prime. Write $e$ as a fraction of an element of $B^0$ with denominator from $A\setminus\mathfrak p$, and choose $t\in B^0$ whose image in $F_0$ is a nonzero scalar multiple of $e$. Thus $t$ is nonzero at $\mathfrak q_0$ and zero at every other fibre prime. Since $t$ is integral over $A$, choose a monic $P\in A[T]$ with $P(t)=0$. Over $K$, factor $\bar P=T^eH$ with $H(0)\ne0$; if needed multiply $P$ by $T$ so $e\ge1$. The selected nonzero value of $t$ is a root of $H$, so $\deg H\ge1$, and $T^e$ and $H$ are coprime over $K$. [F2, step 3.1]

5.1 The étale factorization and finite component. Apply the coprime lifting part of [F2] to $\bar P=T^eH$ to obtain an everywhere étale $A$-algebra $A'$ and a prime $\mathfrak p'$ with $\kappa(\mathfrak p')=K$, together with monic coprime $I,H'\in A'[T]$ with $P=IH'$ and reductions $I\bmod\mathfrak p'=T^e$, $H'\bmod\mathfrak p'=H$. In $D_0=A'\otimes_AB^0$ and $D=A'\otimes_AB$, the equations $I(t)H'(t)=0$ and $a(t)I(t)+b(t)H'(t)=1$ yield product decompositions. Let $C_0=D_0/(H'(t))$ and $C=D/(H'(t))$ be the selected factors: on the fibre over $\mathfrak p'$, $H'(t)$ vanishes exactly at the selected point, while $I(t)$ vanishes at all the other points. Thus $C_0$ and $C$ each have exactly one prime over $\mathfrak p'$, and the prime of $C$ lies over the original $\mathfrak q$. Base changing $(B^0)_g\cong B_g$ and taking these factors gives $(C_0)_g\cong C_g$. The algebra $C_0$ is integral over $A'$, while $C$ is finite type over $A'$. [F2, step 3.1, step 4.1]

6.1 Finite after one base shrink. The closed subset $V_{C_0}(g)$ has closed image in $\operatorname{Spec}A'$: apply the lying-over assertion of [F2] to the integral quotient map $A'\to C_0/gC_0$ to identify its image with $V(\ker(A'\to C_0/gC_0))$. The selected prime $\mathfrak p'$ is outside this image, since the unique prime of $C_0$ over it avoids $g$. Choose $a\in A'\setminus\mathfrak p'$ such that $D(a)$ misses the image. Then $g$ is a unit in $(C_0)_a$, so $(C_0)_a\cong C_a$ by step 5.1. The ring $C_a$ is both integral and finite type over $A'_a$, hence module-finite by [F2]. Replacing $A',C$ by these localizations, we obtain the finite selected factor with exactly one point over $\mathfrak p'$. [F2, step 5.1]

7.1 The elementary étale neighbourhood. Put $U=\operatorname{Spec}A'_a$ and $u=\mathfrak p'A'_a$ as in step 6.1. The ring map $A\to A'$ is étale everywhere by [F2], and principal localization preserves étaleness by [F6], so $U\to\operatorname{Spec}A$ is étale. Composing with the open immersion $\operatorname{Spec}A\subseteq S$ gives an étale map $\varphi:U\to S$. Moreover $\kappa(u)=\kappa(\mathfrak p')=\kappa(\mathfrak p)=\kappa(s)$, so $(U,u)\to(S,s)$ is an elementary étale neighbourhood. [F2, F6, step 5.1, step 6.1]

7.2 The open finite piece. Put $U=\operatorname{Spec}A'_a$ and $u=\mathfrak p'A'_a$. The affine chart base change $\operatorname{Spec}(A'_a\otimes_AB)$ is open in $X_U$ by [F3]. Its product decomposition from step 5.1 has the selected factor $V=\operatorname{Spec}C_a$, which is open and closed in that chart, hence open in $X_U$. The unique point of $V_u$ lies over $x$ by step 5.1 and is the canonical fibre-product point $(x,u)$ because $\kappa(u)=\kappa(s)$. [F3, F4, step 5.1, step 6.1]

8.1 $V\to U$ is finite. The base $U=\operatorname{Spec}A'_a$ is affine and $A'_a\to C_a$ is module-finite by step 6.1, so $V\to U$ is finite by [F5]. [F5, step 6.1, step 7.2]

8.2 The fibre $V_u$ and its residue field. The fibre $V_u=V\times_U\operatorname{Spec}\kappa(u)$ is $\operatorname{Spec}(C_a\otimes_{A'_a}\kappa(\mathfrak p'))$, and by step 5.1 the ring $C_a$ has exactly one prime over $\mathfrak p'$; hence $V_u$ consists of exactly one point, necessarily the image of $x_U$ by step 7.2. For its residue field, apply [F4] to the fibre product $X\times_SU$ at the point $x_U$ over $x\in X$ and $u\in U$: the residue field is $\kappa(\mathfrak r)$ for a prime $\mathfrak r$ of $\kappa(x)\otimes_{\kappa(s)}\kappa(u)$, and since $\kappa(u)=\kappa(s)$ by step 7.1 this tensor product is $\kappa(x)\otimes_{\kappa(s)}\kappa(s)=\kappa(x)$, whose spectrum is a single point with residue field $\kappa(x)$. Hence the unique point of $V_u$ has residue field $\kappa(x)$, the original residue field of $x$. [F4, step 5.1, step 7.1]

9.1 Choice accounting and conclusion. The Axiom of Choice [F7] is assumed in the Statement. It is used exactly through [F1], [F2] and the cited Zariski Main and coprime-factorisation proofs and through the \'etale stability statement [F6]; the chart choices of step 1.1 are finitely many selections, and later steps use only finite choices. Steps 3.1--7.2 produce the elementary \'etale neighbourhood $(U,u)\to(S,s)$ of claim 1, the open subscheme $V\subseteq X_U$ of claim 2 with $V\to U$ finite, and the one-point fibre $V_u$ with residue field $\kappa(x)$; the empty-source case of the Statement is vacuous because there is no point $x$ to treat. [F1, F2, F6, F7, step 8.1, step 8.2] $\square$
