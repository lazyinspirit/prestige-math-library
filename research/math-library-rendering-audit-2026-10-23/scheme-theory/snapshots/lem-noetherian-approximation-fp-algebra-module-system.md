---
id: lem-noetherian-approximation-fp-algebra-module-system
kind: lemma
title: Finite presentation data descend to Noetherian algebra and module stages
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-finitely-presented-module-and-algebra
  - thm-hilbert-basis-theorem
  - thm-noetherian-ring-quotients-and-localisations
  - thm-right-exactness-of-tensor-products
  - thm-localisation-of-modules-is-exact
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  references:
    - title: "The Stacks Project, Algebra, Lemma 10.127.18 (tag 00R1), finite-presentation approximation"
      url: https://stacks.math.columbia.edu/tag/00R1
    - title: "The Stacks Project, Algebra, Lemma 10.127.13 (tag 00QX), local approximation with modules"
      url: https://stacks.math.columbia.edu/tag/00QX
---

## Statement

Assume the Axiom of Choice. Let $R\to S$ be a finitely presented ring
map, and let $M$ be a finitely presented $S$-module. There is a directed
system $(R_i\to S_i,M_i)$ with the following properties.

1. Each $R_i$ is a finitely generated $\mathbb Z$-algebra, each
   $S_i$ is a finitely presented $R_i$-algebra, and each $M_i$ is a
   finitely presented $S_i$-module. In particular the stage rings are
   Noetherian.
2. For $i\le j$, the maps
   $S_i\otimes_{R_i}R_j\to S_j$ and
   $M_i\otimes_{S_i}S_j\to M_j$ are isomorphisms. The colimits are
   $R$, $S$, and $M$, respectively.
3. For primes $\mathfrak q\subseteq S$ and
   $\mathfrak p=\mathfrak q\cap R$, write
   $\mathfrak p_i=\mathfrak p\cap R_i$ and
   $\mathfrak q_i=\mathfrak q\cap S_i$. Then
   $(R_i)_{\mathfrak p_i}\to(S_i)_{\mathfrak q_i}$ is a system of
   Noetherian local maps with colimit
   $R_{\mathfrak p}\to S_{\mathfrak q}$, and the localized modules
   have colimit $M_{\mathfrak q}$. For $i\le j$,
   $(S_i)_{\mathfrak q_i}\otimes_{(R_i)_{\mathfrak p_i}}
   (R_j)_{\mathfrak p_j}\to(S_j)_{\mathfrak q_j}$ is a localization,
   and the corresponding module transition is base change.

This lemma constructs the approximating system. It does not assert that
flatness at the colimit descends to a finite stage.

## Facts & Assumptions

**Given:** The finitely presented algebra and module, and, for clause 3,
the specified primes.

[F1] Finite presentation of an algebra gives finitely many polynomial
variables and equations; finite presentation of a module gives a finite
matrix presentation ([[def-finitely-presented-module-and-algebra]]).

[F2] A finitely generated $\mathbb Z$-algebra, its finite-type algebra,
and their localizations are Noetherian by Hilbert basis and localization
([[thm-hilbert-basis-theorem]],
[[thm-noetherian-ring-quotients-and-localisations]]).

[F3] Tensor products carry a finite presentation to its coefficient
base change by right exactness, and localization commutes with the
cokernel of a finite matrix ([[thm-right-exactness-of-tensor-products]],
[[thm-localisation-of-modules-is-exact]]).

## Proof

**Proof technique:** put all finite coefficients in one stage and
localize the resulting exact base-change system at contracted primes.

1.1 Choose presentations $S\cong R[X_1,\ldots,X_n]/(f_1,\ldots,f_u)$ and $S^a\xrightarrow{D}S^b\to M\to0$ as in [F1]. The coefficients of the $f_j$ and of representatives in $R[X_1,\ldots,X_n]$ for the finitely many entries of $D$ form a finite subset $E\subseteq R$. Let $\Lambda$ be the directed set of finite subsets $i\subseteq R$ containing $E$, ordered by inclusion, and put $R_i=\mathbb Z[i]\subseteq R$. The images of the same polynomial equations and matrix coefficients over $R_i$ define $S_i=R_i[X_1,\ldots,X_n]/(f_{1,i},\ldots,f_{u,i})$ and $M_i=\operatorname{coker}(S_i^a\xrightarrow{D_i}S_i^b)$. [F1]

2.1 For $i\subseteq j$, the equations and matrix entries at stage $j$ are the images of those at stage $i$. By [F3], tensoring their finite presentations gives canonical isomorphisms $S_i\otimes_{R_i}R_j\cong S_j$ and $M_i\otimes_{S_i}S_j\cong M_j$. Every element of $R$ lies in some $R_i$, so $R=\varinjlim R_i$; applying the same finite presentations gives $S=\varinjlim S_i$ and $M=\varinjlim M_i$. Each $R_i$ is finitely generated over $\mathbb Z$, and [F2] makes $R_i$ and $S_i$ Noetherian. This proves clauses 1 and 2. [F2, F3, step 1.1]

3.1 The contractions $\mathfrak p_i$ and $\mathfrak q_i$ are compatible primes, with $\mathfrak q_i\cap R_i=\mathfrak p_i$. Localize the system at their complements. Any numerator of $R_{\mathfrak p}$ or $S_{\mathfrak q}$ occurs at some stage, and any denominator outside the selected prime already occurs outside its contracted stage prime; therefore $R_{\mathfrak p}=\varinjlim(R_i)_{\mathfrak p_i}$ and $S_{\mathfrak q}=\varinjlim(S_i)_{\mathfrak q_i}$. The same argument for representatives of module elements, using exact localization [F3], gives $M_{\mathfrak q}=\varinjlim(M_i)_{\mathfrak q_i}$. [F3, step 2.1]

4.1 For $i\le j$, the source of the asserted local transition is the localization of $S_i\otimes_{R_i}R_j=S_j$ obtained by inverting $S_i\setminus\mathfrak q_i$ and $R_j\setminus\mathfrak p_j$. Both sets avoid $\mathfrak q_j$. Localizing this ring once more at the prime induced by $\mathfrak q_j$ yields exactly $(S_j)_{\mathfrak q_j}$; hence the transition is a localization. Localizing the matrix presentation and using [F3] yields $(M_i)_{\mathfrak q_i}\otimes_{(S_i)_{\mathfrak q_i}}(S_j)_{\mathfrak q_j}\cong(M_j)_{\mathfrak q_j}$. This proves clause 3. [F3, step 2.1, step 3.1]

5.1 If $R$ or $S$ is the zero ring, the global construction still uses the same finite equations and matrices; there are no primes for clause 3. The Axiom of Choice only selects the finite presentations and their finite lifts; no infinite stage selection is needed. The next flatness-descent result must be proved separately before this approximation can be used to transfer flatness hypotheses. [F1, step 2.1, step 4.1] $\square$
