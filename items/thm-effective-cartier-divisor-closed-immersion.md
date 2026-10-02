---
id: thm-effective-cartier-divisor-closed-immersion
kind: theorem
title: "Effective Cartier divisors are closed subschemes cut out by regular equations"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-effective-cartier-divisor
  - def-ideal-sheaf
  - def-invertible-sheaf
  - thm-gluing-affine-schemes
  - def-closed-immersion-schemes
  - thm-affine-closed-immersions-quotient-rings
  - lem-closed-immersion-local-on-target
  - def-scheme
  - def-scheme
  - def-affine-scheme
  - def-sheaf-on-topological-space
  - lem-cartier-divisor-local-equation-equivalence
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Divisors, §31.14 Lemmas 14.1–14.2 and §31.16"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 §§15.1–15.3"
      url: "https://math.stanford.edu/~vakil/216blog/FOAgoct2111public.pdf"
---

## Statement

Let $X$ be a scheme.

1. Every effective Cartier divisor $D$ on $X$
   ([[def-effective-cartier-divisor]]) determines a closed immersion
   $i_D:Z_D\hookrightarrow X$ ([[def-closed-immersion-schemes]]). Writing
   $I_D=\ker(\mathcal O_X\to (i_D)_*\mathcal O_{Z_D})$ for its ideal sheaf, one
   has $I_D|_{U_i}=f_i\mathcal O_{U_i}$ for every local-equation datum
   $\{(U_i,f_i)\}$ of $D$, and $I_D$ is an invertible $\mathcal O_X$-module
   ([[def-invertible-sheaf]]). The construction of $Z_D$ depends only on $D$,
   not on the datum.

2. Conversely, let $Z\hookrightarrow X$ be a closed subscheme which is
   **locally cut out by nonzerodivisors**, meaning that every point of $X$ has
   an affine open neighbourhood $U=\operatorname{Spec}A$ such that
   $Z\cap U=\operatorname{Spec}(A/fA)$ for some nonzerodivisor $f\in A$
   ([[thm-affine-closed-immersions-quotient-rings]]). Then the local equations
   $f$ form an effective Cartier divisor $D_Z$ on $X$, and
   $I_{D_Z}=I_Z$; in particular the closed subscheme cut out by $D_Z$ is $Z$
   itself.

## Facts & Assumptions

**Given:** A scheme $X$, and for part 2 a closed subscheme $Z\hookrightarrow X$ locally cut out by nonzerodivisors.

[F1] An effective Cartier divisor $D$ is represented by a local-equation datum $\{(U_i,f_i)\}$ with $f_i\in\mathcal O_X(U_i)$ and with multiplication by the germ $(f_i)_x$ injective on $\mathcal O_{X,x}$ for every $x\in U_i$; the local principal ideal sheaves $f_i\mathcal O_{U_i}$ agree on overlaps ([[def-effective-cartier-divisor]]).

[F2] An ideal sheaf is a subsheaf $\mathcal I\subseteq\mathcal O_X$ whose values are ideals, compatibly with restriction ([[def-ideal-sheaf]]).

[F3] An $\mathcal O_X$-module is invertible if and only if every point has an open neighbourhood on which it admits a generator, i.e. a section inducing an isomorphism with $\mathcal O_U$ ([[def-invertible-sheaf]]).

[F4] A morphism $i:Z\to X$ is a closed immersion when its underlying map is a homeomorphism onto a closed subset and $\mathcal O_X\to i_*\mathcal O_Z$ is surjective ([[def-closed-immersion-schemes]]).

[F5] For a ring $A$, every quotient map $A\to A/I$ yields a closed immersion $\operatorname{Spec}(A/I)\to\operatorname{Spec}A$, and every closed immersion into $\operatorname{Spec}A$ is of this form for a unique ideal $I\subseteq A$, up to unique isomorphism over $\operatorname{Spec}A$ ([[thm-affine-closed-immersions-quotient-rings]]).

[F6] A morphism is a closed immersion if and only if its restriction to the members of an open cover of the target is a closed immersion ([[lem-closed-immersion-local-on-target]]).

[F7] Affine schemes equipped with open subschemes and isomorphisms on overlaps satisfying the identity and cocycle conditions glue to a scheme, uniquely up to unique isomorphism, and the given affine schemes become an open affine cover ([[thm-gluing-affine-schemes]]).

[F8] Every point of a scheme has an affine open neighbourhood. An affine scheme has a presentation $(\operatorname{Spec}A,\mathcal O_{\operatorname{Spec}A})$, and this presentation identifies its global sections with $A$ ([[def-scheme]], [[def-affine-scheme]]).

[F9] Sections of a sheaf that agree on the members of an open cover glue uniquely; a subsheaf of $\mathcal O_X$ may be described by local conditions that are compatible with restriction ([[def-sheaf-on-topological-space]]).

[F10] If two local-equation data induce the same section of $\mathcal K_X^{\times}/\mathcal O_X^{\times}$, then on a common refinement their equations differ by regular units ([[lem-cartier-divisor-local-equation-equivalence]]).

## Proof

1.1 **Affine setup.** Let $D$ be effective with datum $\{(U_i,f_i)\}$ as in [F1]. Refine the cover by affine opens $U_i=\operatorname{Spec}A_i$ and write $f_i\in A_i$. For every overlap $W_{ij}=U_i\cap U_j$, the Cartier datum gives $f_i/f_j\in\mathcal O_X(W_{ij})^{\times}$, so $f_i\mathcal O_{W_{ij}}=f_j\mathcal O_{W_{ij}}$. No affineness of $W_{ij}$ is needed. [F1, F8]

1.2 **The converse datum.** Now let $Z\hookrightarrow X$ be locally cut out by nonzerodivisors. Cover $X$ by affine opens $U_i=\operatorname{Spec}A_i$ with $Z\cap U_i=\operatorname{Spec}(A_i/f_iA_i)$ for nonzerodivisors $f_i\in A_i$. Then $I_Z|_{U_i}=f_i\mathcal O_{U_i}$ by [F5], and the sections $f_i$ are regular: a nonzerodivisor of $A_i$ remains a nonzerodivisor after localisation at every prime, so its germ at each point of $U_i$ is a nonzerodivisor. [F1, F5, F8, algebra]

2.1 **The glued ideal sheaf.** Let $\mathcal I_D$ be the subsheaf of $\mathcal O_X$ whose sections over an open $V$ are the $s\in\mathcal O_X(V)$ with $s|_{V\cap U_i}\in f_i\mathcal O_X(V\cap U_i)$ for every $i$. This is a subsheaf with ideal values, hence an ideal sheaf, and $\mathcal I_D|_{U_i}=f_i\mathcal O_{U_i}$: on $U_i$ every $s$ lies in $f_i\mathcal O_{U_i}$ by the condition $i$, while the conditions for $j$ add nothing because $f_j\mathcal O_{U_j}$ and $f_i\mathcal O_{U_i}$ agree on $U_i\cap U_j$ by step 1.1. [F2, F9, step 1.1]

2.2 **The affine pieces.** For each $i$ let $Z_i=\operatorname{Spec}(A_i/f_iA_i)$ and let $j_i:Z_i\to U_i$ be the closed immersion induced by the quotient map $A_i\to A_i/f_iA_i$; by [F5] the ideal of $j_i$ is $f_iA_i$, and its structure sheaf is the quotient. On the overlap $W_{ij}$, the restrictions of the ideals generated by $f_i$ and $f_j$ are equal by step 1.1. Their quotient sheaves therefore define the same closed subscheme of $W_{ij}$, giving canonical overlap isomorphisms $Z_i\times_{U_i}W_{ij}\cong Z_j\times_{U_j}W_{ij}$. These isomorphisms satisfy the cocycle conditions because they are induced by equality of the restricted ideal sheaves. [F5, step 1.1]

3.1 **Invertibility.** For every $i$, multiplication $m_i:\mathcal O_{U_i}\to\mathcal I_D|_{U_i}$, $a\mapsto f_i a$, is an isomorphism: it is injective because $f_i$ is regular by [F1], and it is surjective because every section of $f_i\mathcal O_{U_i}$ is of the form $f_i a$ by definition of the principal ideal sheaf. Hence $\mathcal I_D$ is invertible. [F1, F3, step 2.1]

3.2 **Gluing.** The affine schemes $Z_i$ with the open subschemes $Z_i\times_{U_i}W_{ij}$ and the canonical identifications supplied by step 2.2 satisfy the identity and cocycle conditions, so by [F7] they glue to a scheme $Z_D$ which is covered by open subschemes identified with the $Z_i$, with overlaps identified with the common closed subschemes of step 2.2. The local morphisms $j_i:Z_i\to U_i\subseteq X$ agree on these overlaps, so they glue to a morphism $i_D:Z_D\to X$: continuous maps that agree on an open cover glue topologically, and the structure-sheaf maps $\mathcal O_X|_{U_i}\to (j_i)_*\mathcal O_{Z_i}$ agree on overlaps and glue by the sheaf axiom. [F7, F9, step 2.2]

3.3 **Independence of the datum.** If $\{(V_k,g_k)\}$ is another local-equation datum for $D$, [F10] gives a common refinement on which the equations differ by regular units. They therefore generate the same ideal sheaf there, so the ideals glued in step 2.1 agree and define the same closed subscheme. [F2, F4, F7, F10, step 2.1]
4.1 **The glued morphism is a closed immersion with ideal $\mathcal I_D$.** The restriction of $i_D$ over $U_i$ is the closed immersion $j_i$ ([[def-affine-scheme]]), so $i_D$ is a closed immersion by [F6]. Its ideal sheaf is $\mathcal I_D$: on $U_i$ the kernel of $\mathcal O_{U_i}\to(j_i)_*\mathcal O_{Z_i}$ is $f_i\mathcal O_{U_i}$ by [F5], and $\mathcal I_D|_{U_i}=f_i\mathcal O_{U_i}$ by step 2.1; these local identifications agree on overlaps by step 2.2 and glue. In particular $I_D=\mathcal I_D$ is locally generated by the local equations $f_i$ and is invertible by step 3.1. [F4, F5, F6, step 2.1, step 3.1, step 2.2]


5.1 **The datum is Cartier.** For each pair $i,j$, the two ideals $f_i\mathcal O_{W_{ij}}=I_Z|_{W_{ij}}=f_j\mathcal O_{W_{ij}}$ agree on the overlap, so $f_i=u_{ij}f_j$ and $f_j=v_{ij}f_i$ for sections $u_{ij},v_{ij}\in\mathcal O_X(W_{ij})$; substituting gives $u_{ij}v_{ij}f_j=f_j$, and since $f_j$ is regular on $W_{ij}$ (step 1.2) one gets $u_{ij}v_{ij}=1$, so $u_{ij}$ is a unit. Hence $\{(U_i,f_i)\}$ is a local-equation datum with regular equations and unit ratios, i.e. an effective Cartier divisor $D_Z$, and its ideal sheaf is $\mathcal I_{D_Z}=I_Z$ by the construction of steps 2.1 and 4.1. [F1, step 2.1, step 4.1, step 1.2]

6.1 **Conclusion.** Part 1 is steps 1.1, 2.1–4.1 and 3.3: every effective Cartier divisor determines a closed immersion $i_D:Z_D\hookrightarrow X$ whose ideal sheaf is locally generated by its equations and is invertible, independently of the chosen datum. Part 2 is steps 1.2 and 5.1: a closed subscheme locally cut out by nonzerodivisors gives an effective Cartier divisor $D_Z$ with $I_{D_Z}=I_Z$, so the closed subscheme cut out by $D_Z$ is $Z$ itself. [step 3.3, step 4.1, step 5.1] ∎

The construction uses no choice principle: the covers are given, the equations on overlaps are determined up to units, and the gluing theorem [F7] glues the given pieces. In particular, for the zero effective divisor the equations are units, $\mathcal I_D=\mathcal O_X$, the pieces $Z_i$ are empty, and $Z_D=\varnothing$; and for $X=\varnothing$ both constructions are vacuous.
