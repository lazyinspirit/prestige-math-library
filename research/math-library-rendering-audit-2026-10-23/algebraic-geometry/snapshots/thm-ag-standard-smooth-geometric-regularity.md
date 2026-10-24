---
id: "thm-ag-standard-smooth-geometric-regularity"
kind: "theorem"
title: "Locally standard smooth iff flat with geometrically regular fibres"
status: published
origin: "pipeline"
deps: ["def-ag-standard-smooth-algebra", "def-ag-geometrically-regular-algebra-and-fibre", "def-finitely-presented-module-and-algebra", "cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented", "def-axiom-of-choice", "def-regular-noetherian-ring", "lem-ag-standard-smooth-flatness", "lem-ag-standard-smooth-regular-geometric-fibres", "lem-ag-geometrically-regular-fibres-local-presentation", "lem-ag-geometric-regularity-field-tests", "prop-modules-over-a-field-are-projective-flat-and-injective", "thm-flatness-criteria-by-injections-and-ideals", "thm-local-criterion-for-zero-modules-and-maps", "thm-localisations-are-flat", "thm-localisation-of-modules-is-tensor-product", "cor-localisation-commutes-with-kernels-images-and-cokernels", "lem-localisation-preserves-injectivity", "prop-iterated-localisation", "cor-affine-scheme-quasi-compact", "cor-dimension-of-a-finite-polynomial-ring-over-a-field", "cor-affine-domain-maximal-ideal-height-equals-dimension"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Algebra 10.137.16 (tag 00TF), 10.137.5-6 (tags 00T6, 00T7) and 10.137.12 (tag 00TC)"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "Vakil §26.2.2 and proof of §26.2.4, pp.690–693"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  audited: 2026-09-27
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $R\to S$ be a ring map
of finite presentation ([[def-finitely-presented-module-and-algebra]]).

1. **Pointwise criterion.** Let $\mathfrak q\in\operatorname{Spec}S$, put
   $\mathfrak p=\mathfrak q\cap R$ and $\kappa=\kappa(\mathfrak p)$. Then $R\to S$
   is standard smooth at $\mathfrak q$ ([[def-ag-standard-smooth-algebra]]) if
   and only if the local ring homomorphism $R_{\mathfrak p}\to S_{\mathfrak q}$
   is flat and the fibre $S\otimes_R\kappa(\mathfrak p)$ is geometrically regular
   at $\mathfrak q$ ([[def-ag-geometrically-regular-algebra-and-fibre]]).
2. **Global form.** The map $R\to S$ is locally standard smooth if and only if
   $R\to S$ is flat and every fibre $S\otimes_R\kappa(\mathfrak p)$,
   $\mathfrak p\in\operatorname{Spec}R$, is geometrically regular.
3. **Field case.** Let $k$ be a field and $A$ a finite-type $k$-algebra. Then $A$
   is geometrically regular over $k$ if and only if the structure map $k\to A$ is
   locally standard smooth; equivalently, if and only if $A$ admits a standard
   smooth presentation over $k$ at every prime. In that case the relative
   dimension of a standard smooth chart at a prime $\mathfrak q$ is the dimension
   of the regular local ring $A_{\mathfrak q}$ when $\mathfrak q$ is a
   $k$-rational point.

Clause 1 is the pointwise form of the classical equivalence between smoothness
and flatness with geometrically regular fibres; clause 2 is its global form, and
finite presentation is needed in both directions (locally standard smooth maps
are finitely presented by definition, and the fibre condition is only defined for
a finitely presented $R$-algebra). No hypothesis is placed on $R$.

## Facts & Assumptions

**Given:** A ring map $R\to S$ of finite presentation, a prime $\mathfrak q\in\operatorname{Spec}S$ with $\mathfrak p=\mathfrak q\cap R$ and $\kappa=\kappa(\mathfrak p)$, the fibre $F=S\otimes_R\kappa(\mathfrak p)$, a finite-type $k$-algebra $A$ in clause 3, and the Axiom of Choice.

[F1] [[def-ag-standard-smooth-algebra]]: a standard smooth presentation of an $R$-algebra $S$ consists of integers $n\ge c\ge0$, elements $f_1,\dots,f_c$ and $g$ of $R[x_1,\dots,x_n]$ with $S\cong(R[x_1,\dots,x_n]/(f_1,\dots,f_c))_g$ such that some $c\times c$ minor of the Jacobian matrix $(\partial f_j/\partial x_i)$ has image a unit of $S$; $n-c$ is the relative dimension, the invertible minor may be assumed leading, and a further principal localisation may be absorbed. The map $R\to S$ is standard smooth at $\mathfrak q$ when $S_h$ has a standard smooth presentation over $R$ for some $h\notin\mathfrak q$, and locally standard smooth when this holds at every prime; finite presentation of $S$ over $R$ is part of the definition of standard smoothness at a prime, as well as of the fibre condition.

[F2] [[lem-ag-standard-smooth-flatness]]: under the Axiom of Choice, a standard smooth $R$-algebra $S$ is a finitely presented $R$-algebra and is flat over $R$, for every commutative ring $R$.

[F3] [[lem-ag-standard-smooth-regular-geometric-fibres]]: under the Axiom of Choice, for a standard smooth $R$-algebra $S\cong(R[x_1,\dots,x_n]/(f_1,\dots,f_c))_g$ with leading minor a unit, a prime $\mathfrak p\in\operatorname{Spec}R$ and a field extension $K/\kappa(\mathfrak p)$, every local ring $(F_K)_Q$ of the fibre $F_K=(S\otimes_R\kappa(\mathfrak p))\otimes_{\kappa(\mathfrak p)}K$ is a regular local ring with $\dim(F_K)_Q=\operatorname{ht}(Q')-c$, where $Q'\subseteq K[x_1,\dots,x_n]$ is the prime corresponding to $Q$, and every irreducible component of $\operatorname{Spec}F_K$ has dimension $n-c$.

[F4] [[lem-ag-geometrically-regular-fibres-local-presentation]]: under the Axiom of Choice, if $R\to S$ is of finite presentation, $\mathfrak q\in\operatorname{Spec}S$, $\mathfrak p=\mathfrak q\cap R$, the local homomorphism $R_{\mathfrak p}\to S_{\mathfrak q}$ is flat and the fibre $S\otimes_R\kappa(\mathfrak p)$ is geometrically regular at $\mathfrak q$, then there is $g\notin\mathfrak q$ such that $S_g$ admits a standard smooth presentation over $R$; that is, $R\to S$ is standard smooth at $\mathfrak q$.

[F5] [[def-ag-geometrically-regular-algebra-and-fibre]]: a finite-type $k$-algebra $A$ is geometrically regular over $k$ when $A\otimes_kK$ is a regular Noetherian ring for every finitely generated field extension $K/k$; for a finitely presented $R$-algebra $S$, a prime $\mathfrak q$ with $\mathfrak p=\mathfrak q\cap R$, the fibre is $S\otimes_R\kappa(\mathfrak p)$ and it is geometrically regular at $\mathfrak q$ when for every field extension $K/\kappa(\mathfrak p)$ and every prime of $(S\otimes_R\kappa(\mathfrak p))\otimes_{\kappa(\mathfrak p)}K$ lying over the image of $\mathfrak q$ the local ring there is regular; a fibre is geometrically regular when it is geometrically regular at each of its points.

[F6] [[lem-ag-geometric-regularity-field-tests]]: under the Axiom of Choice, for a finite-type $k$-algebra $A$: $A$ is geometrically regular over $k$ if and only if $A$ is regular and $A\otimes_kk'$ is regular for every finite purely inseparable $k'/k$; if $A$ is geometrically regular over $k$ then $A\otimes_kK$ is regular for every field extension $K/k$; and if $A\otimes_kK$ is geometrically regular over $K$ for one field extension $K/k$ then $A$ is geometrically regular over $k$.

[F7] [[prop-modules-over-a-field-are-projective-flat-and-injective]]: under the Axiom of Choice every module over a field $k$ is free, hence projective and flat.

[F8] [[thm-flatness-criteria-by-injections-and-ideals]], [[thm-local-criterion-for-zero-modules-and-maps]]: an $R$-module $M$ is flat if and only if $I\otimes_RM\to M$ is injective for every ideal $I\subseteq R$; and under the Axiom of Choice an $R$-module $M$ is zero if and only if $M_{\mathfrak m}=0$ for every maximal ideal $\mathfrak m\subseteq R$, equivalently for every prime.

[F9] [[thm-localisations-are-flat]]: for a commutative ring $R$ and multiplicative set $T\subseteq R$, the localisation $T^{-1}R$ is a flat $R$-algebra, and a $T^{-1}R$-module is flat over $R$ if and only if it is flat over $T^{-1}R$.

[F10] [[thm-localisation-of-modules-is-tensor-product]], [[cor-localisation-commutes-with-kernels-images-and-cokernels]], [[lem-localisation-preserves-injectivity]], [[prop-iterated-localisation]]: localisation of modules is given by tensoring with the localised ring and commutes with kernels, images and cokernels, so localising preserves injectivity and commutes with base change of scalars; and for multiplicative sets $T,U$ the iterated localisation $(T^{-1}R)_{U}$ is the localisation at the multiplicative set generated by $T$ and $U$.

[F11] [[def-regular-noetherian-ring]]: a commutative Noetherian ring is regular when its localisation at every prime is a regular local ring; this holds vacuously for the zero ring.

[F12] [[def-finitely-presented-module-and-algebra]]: a commutative $R$-algebra $A$ is finitely presented when $A\cong R[x_1,\dots,x_m]/\mathfrak a$ for some $m$ and a finitely generated ideal $\mathfrak a$.

[F13] [[def-axiom-of-choice]]: the Axiom of Choice, assumed in the statement and used through [F2], [F3], [F4], [F6], [F7] and [F8].

[F14] [[cor-affine-scheme-quasi-compact]]: every affine scheme is quasi-compact, so $\operatorname{Spec}S$ and $\operatorname{Spec}A$ are quasi-compact, and a family of principal opens covering either of them has a finite subcover whose elements generate the unit ideal.

[F15] [[cor-dimension-of-a-finite-polynomial-ring-over-a-field]], [[cor-affine-domain-maximal-ideal-height-equals-dimension]]: for a field $k$ one has $\dim k[x_1,\dots,x_n]=n$, and a maximal ideal of a finite-type $k$-domain has height equal to the dimension of that domain; in particular a maximal ideal $Q'$ of $k[x_1,\dots,x_n]$ satisfies $\operatorname{ht}(Q')=n$.







[F16] [[cor-finite-type-algebra-over-noetherian-ring-is-finitely-presented]]: a finite-type algebra over a Noetherian ring is finitely presented; in particular this holds over a field.

## Proof

1.1 Set-up and conventions. Write $F:=S\otimes_R\kappa(\mathfrak p)$ for the fibre over $\mathfrak p$; by [F5] the fibre is defined because $R\to S$ is finitely presented, and "geometrically regular at $\mathfrak q$" means that for every field extension $K/\kappa(\mathfrak p)$ and every prime $Q$ of $F_K=F\otimes_{\kappa(\mathfrak p)}K$ lying over the image of $\mathfrak q$ in $F$, the local ring $(F_K)_Q$ is regular. Since a standard smooth chart at $\mathfrak q$ is by definition a standard smooth presentation of some $S_h$, $h\notin\mathfrak q$ [F1], and since $S_h$ is finitely presented over $R$ when $S$ is [F2, F12], both sides of clause 1 only concern finitely presented $R$-algebras. [F1, F2, F5, F12, given, F13]

1.2 Flatness from a principal cover. Suppose $g_1,\dots,g_k\in S$ generate the unit ideal of $S$ and each $S_{g_i}$ is flat over $R$. Then $S$ is flat over $R$. Indeed, let $I\subseteq R$ be an ideal and let $K:=\ker(I\otimes_RS\to S)$; localising the map at $g_i$ gives the map $I\otimes_RS_{g_i}\to S_{g_i}$ by [F10], which is injective because $S_{g_i}$ is flat over $R$, so $K_{g_i}=0$ for every $i$ by [F10]. If $K\ne0$, then $K_{\mathfrak m}\ne0$ for some maximal ideal $\mathfrak m\subseteq S$ by [F8], and since the $g_i$ generate the unit ideal some $g_i\notin\mathfrak m$; then $K_{\mathfrak m}=(K_{g_i})_{\mathfrak m}=0$ by [F10], a contradiction. Hence $K=0$, so every such multiplication map is injective and $S$ is flat over $R$ by [F8]. [F8, F10, given]

1.3 Clause 1, only-if: flatness at $\mathfrak q$. Assume $R\to S$ is standard smooth at $\mathfrak q$, and choose $g\notin\mathfrak q$ such that $A:=S_g$ has a standard smooth presentation over $R$ [F1]. Then $A$ is flat over $R$ by [F2], so for every ideal $I\subseteq R$ the map $I\otimes_RA\to A$ is injective by [F8]; the localisation $S_{\mathfrak q}=T^{-1}A$ at $T=S\smallsetminus\mathfrak q$ is a localisation of the $R$-module $A$, so $I\otimes_RS_{\mathfrak q}\to S_{\mathfrak q}$ is the localisation of that injective map and is injective by [F10]; hence $S_{\mathfrak q}$ is flat over $R$ by [F8]. Because $R\smallsetminus\mathfrak p$ maps into $T$, the ring $S_{\mathfrak q}$ is an $R_{\mathfrak p}$-algebra, so [F9] upgrades flatness over $R$ to flatness over $R_{\mathfrak p}$: the local homomorphism $R_{\mathfrak p}\to S_{\mathfrak q}$ is flat. [F1, F2, F8, F9, F10, given]

1.4 Clause 3, if direction. Conversely let $k\to A$ be locally standard smooth, and let $\mathfrak q\in\operatorname{Spec}A$; choose $g\notin\mathfrak q$ with $A_g$ standard smooth over $k$ [F1]. For every field extension $K/k$, [F3] applied to the standard smooth $k$-algebra $A_g$ with $\mathfrak p=(0)$ and fibre $(A_g\otimes_kk)\otimes_kK=A_g\otimes_kK$ shows that every local ring of $A_g\otimes_kK$ is regular; a prime $Q\subseteq A\otimes_kK$ lying over $\mathfrak q$ does not contain $\bar g$, and [F10] identifies $(A\otimes_kK)_Q$ with the local ring of $A_g\otimes_kK$ at the corresponding prime, so it is regular. As $K$ was arbitrary, $A$ is geometrically regular at $\mathfrak q$ in the sense of [F5]; in particular, taking $K$ finitely generated over $k$, the finite-type $K$-algebra $A\otimes_kK$ has all its prime localisations regular, so it is a regular Noetherian ring by [F11] and $A$ is geometrically regular over $k$. [F1, F3, F5, F10, F11, given]

2.1 Clause 1, only-if: geometric regularity of the fibre at $\mathfrak q$. Keep the chart $A=S_g$ of step 1.3. Since $R\to S$ is finitely presented, so is the coefficient extension $R\to A$, and $A\otimes_R\kappa(\mathfrak p)\cong(S\otimes_R\kappa(\mathfrak p))_g=F_g$ by [F10]; write $\bar g$ for the image of $g$ in $F$, so $\bar g\notin\mathfrak q_F$, where $\mathfrak q_F\subseteq F$ is the image of $\mathfrak q$. Let $K/\kappa(\mathfrak p)$ be a field extension and let $Q\subseteq F_K$ be a prime lying over $\mathfrak q_F$; then $\bar g\notin Q$, and [F10] identifies $(F_K)_Q$ with the local ring of $(F_K)_{\bar g}=(A\otimes_R\kappa(\mathfrak p))\otimes_{\kappa(\mathfrak p)}K$ at the corresponding prime. That local ring is regular by [F3] applied to the standard smooth $R$-algebra $A$ and the extension $K/\kappa(\mathfrak p)$. Since $K$ and $Q$ were arbitrary, $F$ is geometrically regular at $\mathfrak q$ by [F5]. [F3, F5, F10, step 1.3, given]

3.1 Clause 1, if direction. If $R_{\mathfrak p}\to S_{\mathfrak q}$ is flat and the fibre $F$ is geometrically regular at $\mathfrak q$, then [F4] produces $g\notin\mathfrak q$ with $S_g$ standard smooth over $R$, that is, $R\to S$ is standard smooth at $\mathfrak q$. Steps 1.3 and 2.1 give the converse, so clause 1 holds. [F4, step 1.3, step 2.1]

3.2 Clause 2, only-if. Assume $R\to S$ is locally standard smooth. For each $\mathfrak q\in\operatorname{Spec}S$ choose $g_{\mathfrak q}\notin\mathfrak q$ with $S_{g_{\mathfrak q}}$ standard smooth over $R$ [F1]; the open sets $D(g_{\mathfrak q})$ cover the affine, hence quasi-compact, scheme $\operatorname{Spec}S$ [F14], so finitely many of them, say for $\mathfrak q_1,\dots,\mathfrak q_k$, already cover, and their elements $g_1,\dots,g_k$ generate the unit ideal of $S$. Each $S_{g_i}$ is flat over $R$ by [F2], so $S$ is flat over $R$ by step 1.2. For the fibres, let $\mathfrak p\in\operatorname{Spec}R$ and let $\mathfrak Q\subseteq\operatorname{Spec}F$ be a point of the fibre, with image $\mathfrak q\in\operatorname{Spec}S$; choosing the chart at that $\mathfrak q$ and applying step 2.1 shows that the local ring of the fibre at the prime corresponding to $\mathfrak Q$ — after any field extension of $\kappa(\mathfrak p)$ — is regular, so $F$ is geometrically regular at $\mathfrak q$ and hence the whole fibre over $\mathfrak p$ is geometrically regular by [F5]. As $\mathfrak p$ was arbitrary, $R\to S$ is flat with geometrically regular fibres. [F1, F2, F5, F14, step 1.2, step 2.1]

4.1 Clause 2, if direction. Assume $R\to S$ is flat and every fibre $S\otimes_R\kappa(\mathfrak p)$ is geometrically regular. Fix $\mathfrak q\in\operatorname{Spec}S$, $\mathfrak p=\mathfrak q\cap R$. Flatness of $S$ over $R$ localises: $S_{\mathfrak q}$ is flat over $R$ by [F9, F10] applied to the localisation of the flat $R$-module $S$, hence flat over $R_{\mathfrak p}$ by [F9] since $S_{\mathfrak q}$ is an $R_{\mathfrak p}$-module. The fibre condition is exactly hypothesis 2 of [F4] at $\mathfrak q$, because a fibre that is geometrically regular at each of its points is geometrically regular at $\mathfrak q$ [F5]. So [F4] gives $g\notin\mathfrak q$ with $S_g$ standard smooth over $R$. As $\mathfrak q$ was arbitrary, $R\to S$ is locally standard smooth. [F4, F5, F9, F10, step 3.1]

4.2 Clause 3, only-if. Let $k$ be a field and $A$ a finite-type, hence finitely presented [F16], $k$-algebra that is geometrically regular over $k$; then the local homomorphism $k\to A_{\mathfrak q}$ is flat for every prime $\mathfrak q\subseteq A$ because every $k$-module is flat [F7, F9], and the only prime of $k$ is $(0)$ with residue field $k$, so the fibre is $A\otimes_kk\cong A$. By [F6] the geometric regularity of $A$ over $k$ makes $A\otimes_kK$ a regular ring for **every** field extension $K/k$, not only the finitely generated ones; by [F11] this says precisely that every local ring of $(A\otimes_kk)\otimes_kK$ at a prime lying over a given prime of $A$ is regular, so $A$ is geometrically regular at every prime in the sense of [F5]. Clause 1 (step 3.1) then gives a standard smooth chart of $A$ over $k$ at every prime, that is, $k\to A$ is locally standard smooth. [F5, F6, F7, F9, F11, F16, step 3.1]

5.1 The relative-dimension clause of clause 3. Let $\mathfrak q\in\operatorname{Spec}A$ be a $k$-rational point of the finite-type $k$-algebra $A$, that is $A/\mathfrak q=k$ as $k$-algebras, and let $A_h\cong(k[x_1,\dots,x_n]/(f_1,\dots,f_c))_g$, $h\notin\mathfrak q$, be a standard smooth chart of $A$ over $k$ at $\mathfrak q$ with leading $c\times c$ minor a unit of the localisation [F1]. Write $Q'\subseteq k[x_1,\dots,x_n]$ for the prime corresponding to $\mathfrak q$. The composite $k[x_1,\dots,x_n]\to A_h\to A_{\mathfrak q}\to A_{\mathfrak q}/\mathfrak qA_{\mathfrak q}=k$ is a $k$-algebra map whose kernel is $Q'$, so $k[x]/Q'$ is a $k$-subalgebra of the field $k$ containing the image of $k$, hence equal to $k$; thus $Q'$ is maximal and $\operatorname{ht}(Q')=n$ by [F15]. Applying [F3] to the standard smooth $k$-algebra $A_h$ with $\mathfrak p=(0)$, $K=k$ and the local ring $(A_h)_{\mathfrak q}=A_{\mathfrak q}$ gives $\dim A_{\mathfrak q}=\operatorname{ht}(Q')-c=n-c$, which is the relative dimension of the chart, in the situation of step 1.4. [F1, F3, F15, step 1.4, given] ∎
