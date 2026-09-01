---
id: thm-local-criterion-for-flatness-ideal-form
kind: theorem
title: "For an $R$-finite module over a local map, flatness modulo $I$ and injectivity of $I \\otimes M \\to M$ imply flatness"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-equational-criterion-for-flatness, cor-nakayama-generators-modulo-an-ideal, thm-nakayama-lemma, thm-finite-generation-and-finite-presentation-over-a-noetherian-ring, thm-right-exactness-of-tensor-products, thm-unit-isomorphisms-for-module-tensor-products]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Stacks Project, Lemma 10.99.10"
      url: "https://stacks.math.columbia.edu/tag/00MD"
    - title: "Stacks Project, Lemma 10.99.7"
      url: "https://stacks.math.columbia.edu/tag/00MD"
---

## Statement

Assume the Axiom of Choice.

Let $R\to S$ be a local homomorphism of Noetherian local rings, let $I\subsetneq R$
be an ideal, and let $M$ be a finite $S$-module that is also finitely generated
as an $R$-module. Assume:

1. $M/IM$ is flat over $R/I$;
2. the multiplication map
   $$
   I\otimes_R M\to M
   $$
   is injective.

Then $M$ is flat over $R$.

## Facts & Assumptions

**Given:** The Axiom of Choice, a local map of Noetherian local rings $R\to S$, a proper ideal $I\subsetneq R$, and a finite $S$-module $M$ that is finitely generated as an $R$-module and satisfies the two hypotheses.

[L1] The equational criterion characterizes flatness by lifting finite relations on generators ([[thm-equational-criterion-for-flatness]]).

[L2] For a finite module over a local ring, lifts of generators modulo the maximal ideal generate the module under the assumed Choice boundary ([[cor-nakayama-generators-modulo-an-ideal]]).

[L3] Over a Noetherian ring, kernels of maps from finite free modules to finite modules are finitely generated ([[thm-finite-generation-and-finite-presentation-over-a-noetherian-ring]]).

[L4] Tensor products are right exact, and $J\otimes_R R^r\cong J^r$ for every ideal $J$ and integer $r\ge0$ ([[thm-right-exactness-of-tensor-products]], [[thm-unit-isomorphisms-for-module-tensor-products]]).

[L5] If $K$ is a finite module over a local ring and $\mathfrak mK=K$, then $K=0$ ([[thm-nakayama-lemma]]).

## Proof

**Proof technique:** direct.


1.1 Let $\mathfrak m$ be the maximal ideal of $R$. We first prove that the multiplication map $\mathfrak m\otimes_R M\to M$ is injective. Take an element $z=\sum_{i=1}^n f_i\otimes x_i$ in its kernel, so $f_i\in\mathfrak m$ and $\sum_i f_ix_i=0$. Reducing modulo $I$, the module $M/IM$ is flat over $R/I$, so [L1] applied over $R/I$ yields elements $\overline y_1,\ldots,\overline y_t\in M/IM$ and coefficients $\overline a_{ij}\in R/I$ with $$ \overline x_i=\sum_{j=1}^t \overline a_{ij}\overline y_j \quad\text{and}\quad \sum_{i=1}^n (\overline f_i)\overline a_{ij}=0 \text{ for every }j. $$ Choose lifts $y_j\in M$ and $a_{ij}\in R$. Then $x_i-\sum_j a_{ij}y_j\in IM$ and $\sum_i f_ia_{ij}\in I$ for every $j$. Writing each $x_i-\sum_j a_{ij}y_j$ as a finite sum of terms $b\,m$ with $b\in I$, one sees that $z$ is the image in $\mathfrak m\otimes_R M$ of an element of $I\otimes_R M$ whose product in $M$ is also $0$. Hypothesis 2 makes that element zero, hence $z=0$. [L1, given, choose, algebra]


1.2 Let $k=R/\mathfrak m$. Choose elements $x_1,\ldots,x_r\in M$ whose images form a $k$-basis of $M/\mathfrak mM$. By [L2], these elements generate $M$, so they define a surjection $$ \pi:F:=R^r\twoheadrightarrow M. $$ Let $K:=\ker(\pi)$. Because $R$ is Noetherian, [L3] makes $K$ finitely generated. [L2, L3, given, choose]


2.1 Tensoring the exact sequence $K\to F\to M\to0$ with the ideal $\mathfrak m$ gives an exact sequence $$ \mathfrak m\otimes_R K \longrightarrow \mathfrak m\otimes_R F \longrightarrow \mathfrak m\otimes_R M \longrightarrow 0 $$ by [L4]. Step 1.1 identifies $\mathfrak m\otimes_R M$ with its image $\mathfrak mM\subseteq M$, and [L4] identifies $\mathfrak m\otimes_R F$ with $\mathfrak mF$. Under these identifications, the kernel of $\mathfrak mF\to\mathfrak mM$ is exactly $K\cap\mathfrak mF$, while the image of $\mathfrak m\otimes_R K$ is $\mathfrak mK$. Therefore $$ K\cap\mathfrak mF=\mathfrak mK. $$ [L4, step 1.1, step 1.2, algebra]


3.1 The induced map $F/\mathfrak mF\to M/\mathfrak mM$ sends the standard basis of $k^r$ to the chosen basis from step 1.2, so it is an isomorphism. Its kernel is $$ (K+\mathfrak mF)/\mathfrak mF \cong K/(K\cap\mathfrak mF)=K/\mathfrak mK $$ by step 2.1. Hence $K/\mathfrak mK=0$, so $\mathfrak mK=K$. Now [L5] gives $K=0$. Therefore $\pi$ is an isomorphism, $M\cong R^r$ is free, and in particular $M$ is flat over $R$. [L5, step 1.2, step 2.1, algebra]


4.1 Thus $M$ is flat over $R$. [step 3.1] ∎
