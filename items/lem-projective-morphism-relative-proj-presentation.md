---
id: lem-projective-morphism-relative-proj-presentation
kind: lemma
title: "A projective morphism has a relative Proj presentation"
status: published
origin: pipeline
deps:
  - def-projective-morphism-pre-proj
  - def-relative-proj-quasi-coherent-graded-algebra
  - thm-projective-space-as-proj
  - thm-closed-subschemes-projective-space-homogeneous-ideals
  - def-axiom-of-choice
  - def-symmetric-algebra-qc-module
  - lem-projective-space-saturation-local-criterion
  - def-very-ample-invertible-sheaf-relative
  - def-quasi-coherent-module-scheme
  - lem-associated-sheaf-sections-basic-open
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Constructions of Schemes, Sections 27.8-27.21"
      url: https://stacks.math.columbia.edu/download/constructions.pdf
    - title: "The Stacks Project, Lemma 31.32.1 (Tag 0801)"
      url: https://stacks.math.columbia.edu/tag/0801
    - title: "The Stacks Project, Morphisms of Schemes, Sections 29.38, 29.40"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice as inherited from the relative-Proj and closed
subscheme constructions ([[def-axiom-of-choice]]). Let $f:X\to S$ be an
H-projective morphism ([[def-projective-morphism-pre-proj]]). Then:

1. There is an integer $n\ge0$ and the graded quasi-coherent
   $\mathcal O_S$-algebra
   $$\mathcal A=\operatorname{Sym}_{\mathcal O_S}\bigl(\mathcal O_S^{\,n+1}\bigr)$$
   ([[def-symmetric-algebra-qc-module]]) with
   $\operatorname{Proj}_S\mathcal A=\mathbb P^n_S$
   ([[def-relative-proj-quasi-coherent-graded-algebra]]), such that $X$
   admits a closed $S$-immersion
   $$X\hookrightarrow\operatorname{Proj}_S\mathcal A;$$
   equivalently, H-projectivity is the case of a closed subscheme of a
   relative Proj of a free graded algebra on $n+1$ generators in degree one.
2. If $S=\operatorname{Spec}R$ is affine, then every such closed immersion has
   image $\operatorname{Proj}(R[x_0,\dots,x_n]/J)$ for a unique
   $\mathfrak b$-saturated homogeneous ideal
   $J\subseteq R[x_0,\dots,x_n]$, $\mathfrak b=(x_0,\dots,x_n)$
   ([[thm-closed-subschemes-projective-space-homogeneous-ideals]]).
3. For arbitrary $S$, every such closed immersion with image $Z$ has a
   global quotient presentation
   $$Z\cong\operatorname{Proj}_S(\mathcal A/\mathcal I),$$
   where $\mathcal I\subseteq\mathcal A=\mathcal O_S[x_0,\dots,x_n]$ is a
   quasi-coherent homogeneous ideal sheaf. It can be chosen canonically so
   that on every affine open of $S$ its homogeneous ideal is the saturated
   ideal in (2). No extra hypothesis on $S$ or global generation of the ideal
   sheaf is required; the quotient here is a sheaf of graded algebras on $S$.

## Facts & Assumptions

**Given:** An H-projective morphism $f:X\to S$, an integer $n\ge0$ with a closed $S$-immersion $X\to\mathbb P^n_S$, and the Axiom of Choice as inherited.

[A1] The Axiom of Choice states that every family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F1] $f$ is H-projective if for some $n\ge0$ it factors as a closed immersion $X\to\mathbb P^n_S$ followed by the structure morphism $\mathbb P^n_S\to S$. ([[def-projective-morphism-pre-proj]])

[F2] $\operatorname{Sym}_{\mathcal O_S}(\mathcal O_S^{n+1})$ is a quasi-coherent graded $\mathcal O_S$-algebra which on an affine open $U=\operatorname{Spec}R\subseteq S$ restricts to the polynomial algebra $R[x_0,\dots,x_n]$ with its total-degree grading, the generators corresponding to the standard basis of $R^{n+1}$. ([[def-symmetric-algebra-qc-module]])

[F3] $\operatorname{Proj}_S\mathcal A$ is constructed by gluing the absolute Proj schemes $\operatorname{Proj}\Gamma(U,\mathcal A)$, and for the polynomial algebra over an affine base this is $\mathbb P^n_R$: $\operatorname{Proj}R[x_0,\dots,x_n]\cong\mathbb P^n_R$, compatibly with restriction to affine opens. ([[def-relative-proj-quasi-coherent-graded-algebra]], [[thm-projective-space-as-proj]])

[F4] For $S=\operatorname{Spec}R$ the closed subschemes of $\mathbb P^n_R$ are exactly the $V_+(J)$ for homogeneous ideals $J\subseteq R[x_0,\dots,x_n]$, and $V_+(J)=V_+(J')$ if and only if $J^{\mathrm{sat}}=J'^{\mathrm{sat}}$; every closed subscheme arises from a unique saturated homogeneous ideal. ([[thm-closed-subschemes-projective-space-homogeneous-ideals]])

[F5] For a homogeneous $h$ of degree $d$, membership in a saturated ideal $J\subset R[x_0,\dots,x_n]$ is equivalent to $h/x_i^d\in J_{(x_i)}$ for all $i=0,\dots,n$. ([[lem-projective-space-saturation-local-criterion]])

[F6] The chart frames of $\mathcal O(1)$ satisfy $e_i=(x_i/x_j)e_j$, and the coordinate sections generate it; homogeneous polynomials of degree $d\ge0$ therefore give sections of $\mathcal O(d)$, with coefficient $h/x_i^d$ on the $i$th chart. ([[def-very-ample-invertible-sheaf-relative]])

[F7] On $\operatorname{Spec}R$ an associated module sheaf has sections $M_r$ on every distinguished open $D(r)$. Thus a sheaf with these compatible sections on the distinguished-open basis is the associated sheaf of $M$, and is quasi-coherent. ([[lem-associated-sheaf-sections-basic-open]], [[def-quasi-coherent-module-scheme]])

## Proof

**Proof technique:** direct: identify the relative projective space with the Proj of the symmetric algebra chart by chart, then invoke the defining closed immersion and, over an affine base, the saturated-ideal correspondence.

1.1 Charts of the symmetric algebra. Let $\mathcal A=\operatorname{Sym}_{\mathcal O_S}(\mathcal O_S^{n+1})$ and let $U=\operatorname{Spec}R\subseteq S$ be affine. By [F2] the restriction $\mathcal A|_U$ is the polynomial algebra $\Gamma(U,\mathcal A)=R[x_0,\dots,x_n]$ with the standard generators $x_i$ in degree one, so $\operatorname{Proj}\Gamma(U,\mathcal A)=\operatorname{Proj}R[x_0,\dots,x_n]$. [F2, algebra]

1.2 Define the global ideal intrinsically. Put $Z=i(X)$ for the fixed closed immersion. For each $d\ge0$ and open $T\subseteq S$, let $\mathcal I_d(T)$ consist of sections of $\mathcal A_d(T)$ whose polynomial section of $\mathcal O(d)$ vanishes on $Z\times_S T$, using [F6]. This is a sheaf: vanishing can be checked on an open cover, and the polynomial-section maps commute with restriction. The direct sum $\mathcal I=\bigoplus_{d\ge0}\mathcal I_d$ is a homogeneous ideal subsheaf of $\mathcal A$, since multiplying a vanishing polynomial section by any polynomial section still vanishes. Over an affine $U=\operatorname{Spec}R$, write $B=R[x_0,\dots,x_n]$ and let $K_i\subset B_{(x_i)}$ be the chart ideals of $Z_U$. Then $\mathcal I_d(U)=\{h\in B_d:h/x_i^d\in K_i\text{ for every }i\}$, which is $(J_U)_d$ for the saturated ideal $J_U$ supplied by [F4], by [F5]. [F4, F5, F6, construct]

2.1 Identification of the relative Proj. Step 1.1 identifies the affine-local pieces of $\operatorname{Proj}_S\mathcal A$ with the corresponding absolute Proj schemes, and the gluing isomorphisms of [F3] restrict the coefficients and preserve the polynomial variables; by [F3] this gives a canonical isomorphism $$\operatorname{Proj}_S\operatorname{Sym}_{\mathcal O_S}(\mathcal O_S^{\,n+1})\;\cong\;\mathbb P^n_S$$ over $S$, agreeing with the standard charts on each affine piece. [F3, step 1.1]

2.2 Quasi-coherence on the base. Fix $r\in R$. On the base open $D(r)$ the chart ideals are $(K_i)_r$: restricting the affine quotient $B_{(x_i)}/K_i$ localises its ring at $r$. A homogeneous polynomial over $R_r$ can be written $h/r^k$ with $h\in B_d$. It belongs to $\mathcal I_d(D(r))$ exactly when $h/x_i^d$ belongs to $(K_i)_r$ for every $i$. For each of the finitely many charts this is equivalent to $r^{a_i}h/x_i^d\in K_i$ for some $a_i\ge0$. Taking $a=\max_i a_i$ gives $r^a h\in(J_U)_d$ by step 1.2. Thus $\mathcal I_d(D(r))=((J_U)_d)_r$, with the usual restriction maps. This argument also works if the base or a chart is empty. By [F7], $\mathcal I_d|_U=\widetilde{(J_U)_d}$. Hence $\mathcal I$ is a quasi-coherent graded ideal sheaf, and $\mathcal A/\mathcal I$ is quasi-coherent since on each affine $U$ its degree pieces are the associated modules of $(B/J_U)_d$; the quotient identification follows on the distinguished-open basis by localisation of module quotients. [F5, F7, step 1.2, algebra]

3.1 The closed immersion. By [F1] there are $n\ge0$ and a closed $S$-immersion $X\to\mathbb P^n_S$; composing with the isomorphism of step 2.1 exhibits $X$ as a closed subscheme of the relative Proj of the symmetric algebra on $n+1$ degree-one generators. Conversely, a closed $S$-immersion into that relative Proj becomes a closed $S$-immersion into $\mathbb P^n_S$ under step 2.1, so [F1] makes its source H-projective. This proves the equivalence in claim (1). [F1, step 2.1]

3.2 The affine base case. If $S=\operatorname{Spec}R$, then by step 2.1 the closed immersion is a closed subscheme $Z\hookrightarrow\operatorname{Proj}R[x_0,\dots,x_n]=\mathbb P^n_R$, and by [F4] there is a unique saturated homogeneous ideal $J\subseteq R[x_0,\dots,x_n]$ with $Z=\operatorname{Proj}(R[x_0,\dots,x_n]/J)$; equivalently $Z=V_+(J)$. This is claim (2). [F4, step 2.1]

3.3 Recover the closed subscheme. On every affine $U$ of the base, [F4] identifies $Z_U$ with $\operatorname{Proj}(B/J_U)$ as a closed subscheme of $\mathbb P^n_U$. Step 2.2 identifies the quotient algebra sheaf on $U$ with the algebra associated to $B/J_U$. The relative Proj gluing [F3] therefore gives $\operatorname{Proj}_S(\mathcal A/\mathcal I)=Z$: the local identifications agree on overlaps because on each standard chart they are the same quotient map defining the given closed subscheme. This proves (3). [F3, F4, step 2.2]

4.1 Conclusion. Steps 1.1 and 2.1 identify $\operatorname{Proj}_S\operatorname{Sym}(\mathcal O_S^{n+1})$ with $\mathbb P^n_S$, step 3.1 records the defining closed immersion of the H-projective morphism, and step 3.2 gives the saturated homogeneous ideal description over an affine base, while steps 1.2, 2.2 and 3.3 construct the global quasi-coherent homogeneous ideal and its quotient presentation over an arbitrary base. The Axiom of Choice [A1] is inherited from the relative-Proj and closed-subscheme constructions; no choice is made here. [A1, step 2.1, step 3.1, step 3.2, step 1.2, step 2.2, step 3.3]
\qed
