---
id: "thm-godement-resolution-flasque"
kind: "theorem"
title: "Godement terms are flasque and compute cohomology"
status: published
origin: pipeline
deps: [def-godement-resolution, thm-flasque-sheaves-acyclic, def-flasque-sheaf, thm-acyclic-resolution-theorem-for-right-derived-functors, def-acyclic-sheaf-global-sections, def-sheaf-cohomology-derived-global-sections, thm-abelian-sheaves-have-enough-injectives, def-global-sections-functor-sheaves, lem-section-zero-if-all-germs-zero, def-germ-of-section, def-skyscraper-sheaf-abelian-group, def-kernel-cokernel-image-sheaves, def-sheaf-on-topological-space, thm-abelian-sheaves-form-abelian-category, def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
verification:
  audited: 2026-09-27
---

## Statement

Assume the Axiom of Choice, let $X$ be a topological space and let
$\mathcal F$ be a sheaf of abelian groups on $X$ with Godement resolution
$$0\to\mathcal F\xrightarrow{\ \varepsilon\ }C^0(\mathcal F)\xrightarrow{\ d^0\ } C^1(\mathcal F)\xrightarrow{\ d^1\ }\cdots$$
([[def-godement-resolution]]). Then

1. every term $C^n(\mathcal F)$ is flasque
   ([[def-flasque-sheaf]]);
2. the coaugmented complex is exact, so that $0\to\mathcal F\to C^\bullet(\mathcal F)$
   is a resolution of $\mathcal F$ by flasque sheaves;
3. for every $q\ge0$ there is an isomorphism
   $$H^q(X,\mathcal F)\cong H^q\bigl(\Gamma(X,C^\bullet(\mathcal F))\bigr),$$
   natural in $\mathcal F$, where $H^q(X,-)$ is sheaf cohomology from the
   supplied functorial injective resolution datum on $\mathrm{Ab}(X)$
   ([[def-sheaf-cohomology-derived-global-sections]]).

In particular the Godement complex is a $\Gamma$-acyclic resolution of
$\mathcal F$ ([[def-acyclic-sheaf-global-sections]]) that computes sheaf
cohomology.

## Facts & Assumptions

[F1] For a sheaf of abelian groups $\mathcal E$ on $X$ and a section $s$ over an open $U$, one has $s=0$ if and only if all of its germs $s_x$ vanish ([[lem-section-zero-if-all-germs-zero]], [[def-germ-of-section]]).

[F2] Restriction maps of a skyscraper sheaf $i_{x,*}A$ are the identity on $A$ when both opens contain $x$, and the zero map to $0$ when the smaller open does not contain $x$; hence a product of skyscraper sheaves has restriction maps given by the corresponding projections ([[def-skyscraper-sheaf-abelian-group]]).

[F3] The cokernel sheaf of a morphism $\varphi$ is the sheafification of the objectwise cokernel presheaf, and kernel and cokernel are taken in the abelian category $\mathrm{Ab}(X)$ ([[def-kernel-cokernel-image-sheaves]], [[thm-abelian-sheaves-form-abelian-category]]).

[F4] A presheaf is a sheaf exactly when sections glue uniquely over open covers: if $s_i\in\mathcal E(W_i)$ agree on the pairwise intersections of a cover, there is a section over the union restricting to each $s_i$, and it is unique ([[def-sheaf-on-topological-space]]).

[F5] A flasque abelian sheaf $\mathcal E$ on a space $U$ satisfies $H^q(U,\mathcal E|_U)=0$ for every $q>0$ ([[thm-flasque-sheaves-acyclic]], [[def-acyclic-sheaf-global-sections]]).

[F6] Let $I$ be a supplied injective resolution datum, $F$ an additive left exact functor and $0\to A\to J^0\to J^1\to\cdots$ an $F$-acyclic resolution of $A$ whose successive cokernels all lie in the domain of $I$; then $R_I^nF(A)\cong H^n(F(J^\bullet_{\mathrm{del}}))$ for every $n\ge0$ ([[thm-acyclic-resolution-theorem-for-right-derived-functors]]).

[F7] In ZF the Axiom of Choice implies the Axiom of Dependent Choice ([[thm-choice-implies-dependent-implies-countable-choice]]), the hypothesis under which the flasque-acyclicity and acyclic-resolution theorems are stated.

[F8] Assuming AC, $\mathrm{Ab}(X)$ has enough injectives and carries one functorial injective resolution datum, so every abelian sheaf on $X$ lies in the domain of that datum ([[thm-abelian-sheaves-have-enough-injectives]], [[def-sheaf-cohomology-derived-global-sections]]).

## Proof

**Given:** The Axiom of Choice, a topological space $X$, and a sheaf of abelian groups $\mathcal F$ on $X$ with its Godement resolution as displayed.

1.1 For an open $V\subseteq X$ the assignment $V\mapsto\prod_{x\in V}\mathcal E_x$ with the evident projections as restriction maps is a sheaf: locality and gluing are checked coordinate by coordinate in the product of groups, using [F4] at each point, and by [F2] it is the product of the skyscraper sheaves $i_{x,*}\mathcal E_x$ in $\mathrm{Ab}(X)$. Moreover the germ maps $\mathcal E(V)\to\prod_{x\in V}\mathcal E_x$, $s\mapsto(s_x)_{x\in V}$, are compatible with restrictions by the second half of [F1], so they define a morphism $\varepsilon_{\mathcal E}:\mathcal E\to C^0(\mathcal E)$ [F1]. [F1, F2, F4]

1.2 For every abelian sheaf $\mathcal E$ on $X$ the germ map $\varepsilon_{\mathcal E}$ is injective: if $s\in\mathcal E(V)$ maps to $0$, all germs $s_x$ with $x\in V$ vanish, so $s=0$ by [F1]; hence $\ker(\varepsilon_{\mathcal E})=0$ and $\varepsilon_{\mathcal E}$ is a monomorphism in the abelian category $\mathrm{Ab}(X)$ [F3]. Consequently the cokernel $Q(\mathcal E)=\operatorname{coker}(\varepsilon_{\mathcal E})$ fits into a short exact sequence $0\to\mathcal E\to C^0(\mathcal E)\to Q(\mathcal E)\to0$ in $\mathrm{Ab}(X)$ [F3]. [F1, F3]

2.1 Every term $C^0(\mathcal E)$ is flasque: for open $U\subseteq V$ the restriction map $\prod_{x\in V}\mathcal E_x\to\prod_{x\in U}\mathcal E_x$ is the projection on the coordinates in $U$ [F2, step 1.1], which is surjective. Hence each term $C^n(\mathcal F)=C^0(Q^{n-1}(\mathcal F))$ of the Godement resolution is flasque, which is assertion 1. [F2, step 1.1]

2.2 The coaugmented complex is exact. At $\mathcal F$ this is the injectivity of $\varepsilon_{\mathcal F}$ from step 1.2. In degree $n\ge0$ write $q_n:C^n(\mathcal F)\to Q^n(\mathcal F)$ for the quotient morphism, so that $d^n=\varepsilon_{Q^n}\circ q_n$ by the definition of the Godement differential and $q_n$ is the cokernel of the monomorphism $\varepsilon_{Q^{n-1}}$ of step 1.2; by the exactness of $0\to Q^{n-1}(\mathcal F)\to C^n(\mathcal F)\xrightarrow{q_n}Q^n(\mathcal F)\to0$ in $\mathrm{Ab}(X)$ [F3] one has $\operatorname{im}(d^{n-1})=\operatorname{im}(\varepsilon_{Q^{n-1}})=\ker(q_n)$, while $\ker(d^n)=\ker(\varepsilon_{Q^n}\circ q_n)=\ker(q_n)$ because $\varepsilon_{Q^n}$ is a monomorphism by step 1.2. Hence $\operatorname{im}(d^{n-1})=\ker(d^n)$ and the complex is exact at every term, which is assertion 2. [F3, step 1.2, given] [F3, step 1.2]

3.1 By [F7] AC gives DC. Each term $C^n(\mathcal F)$ is flasque by step 2.1, hence $\Gamma$-acyclic on $X$ by [F5]; the successive cokernels of the resolution are $Z^0=\mathcal F$ and $Z^{q+1}=Q^q(\mathcal F)$ for $q\ge0$, which are abelian sheaves on $X$, hence lie in the domain of the supplied injective resolution datum by [F8]. Applying [F6] to the additive left exact functor $\Gamma(X,-)$ ([[def-global-sections-functor-sheaves]]), the datum and the acyclic resolution $0\to\mathcal F\to C^\bullet(\mathcal F)$ gives $H^q(X,\mathcal F)=R^q\Gamma(X,\mathcal F)\cong H^q(\Gamma(X,C^\bullet(\mathcal F)))$ for every $q\ge0$, with the naturality supplied by the functoriality of the Godement construction recorded in [[def-godement-resolution]]. This is assertion 3. ∎ [F5, F6, F7, F8, step 2.1, step 2.2] [F5, F6, F7, F8] ∎
