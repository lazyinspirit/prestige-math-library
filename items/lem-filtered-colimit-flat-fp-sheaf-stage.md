---
id: lem-filtered-colimit-flat-fp-sheaf-stage
kind: lemma
title: "Finite-stage descent of relative flatness for a finitely presented sheaf"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-finite-type-finite-presentation-module-sheaf
  - thm-affine-quasi-coherent-equivalence
  - lem-filtered-colimit-fp-scheme-stage
  - lem-noetherian-approximation-fp-algebra-module-system
  - lem-eventual-flatness-noetherian-local-approximation
  - lem-flat-locus-open-finitely-presented-algebra
  - lem-base-change-quasi-compact-morphisms
  - thm-flatness-is-local
  - thm-flatness-criteria-by-injections-and-ideals
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Limits of Schemes, Lemma 32.10.4 (Tag 05LY)"
      url: "https://stacks.math.columbia.edu/tag/05LY"
    - title: "The Stacks Project, Algebra, Lemma 10.168.1(3) (Tag 02JO)"
      url: "https://stacks.math.columbia.edu/tag/02JO"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(A_i)_{i\in I}$ be
a directed system of finitely generated $\mathbb Z$-algebras with
$A=\varinjlim_iA_i$. Fix a morphism $X_i\to\operatorname{Spec}A_i$ of finite
presentation and a finitely presented quasi-coherent
$\mathcal O_{X_i}$-module $\mathcal F_i$
([[def-finite-type-finite-presentation-module-sheaf]]). If the pullback
$\mathcal F$ to $X=X_i\times_{A_i}A$ is flat over $A$ at every point, then
for some $j\ge i$ its pullback $\mathcal F_j$ to
$X_j=X_i\times_{A_i}A_j$ is flat over $A_j$ at every point.

The transition maps need not be flat or injective. The empty source and zero
sheaf are included.

## Facts & Assumptions

**Given:** The directed system of finite-type $\mathbb Z$-algebras, the
finite-presentation stage scheme and sheaf, and pointwise base-flatness at
the limit.

[F1] An affine chart of a finite-presentation stage scheme has a finitely
presented coordinate algebra over its base, and affine quasi-coherent sheaves
are modules; a finitely presented quasi-coherent sheaf corresponds to a
finitely presented module on each affine chart
([[lem-filtered-colimit-fp-scheme-stage]],
[[thm-affine-quasi-coherent-equivalence]],
[[def-finite-type-finite-presentation-module-sheaf]]).

[F2] For a finitely presented algebra-module pair over the directed
Noetherian stages, contractions of a limit prime give a directed system of
Noetherian local pairs with the required localization/base-change transitions;
flatness of its limit module over the limit local base appears at a finite
local stage
([[lem-noetherian-approximation-fp-algebra-module-system]],
[[lem-eventual-flatness-noetherian-local-approximation]]).

[F3] The flat locus of a finitely presented module over a finitely presented
algebra is open, and a point of it has a principal-open neighbourhood inside
that locus ([[lem-flat-locus-open-finitely-presented-algebra]]).

[F4] Flatness is local on the base and survives base change and localization;
a quasi-compact scheme admits finite subcovers of open covers
([[thm-flatness-is-local]],
[[thm-flatness-criteria-by-injections-and-ideals]],
[[lem-base-change-quasi-compact-morphisms]]).

## Proof

**Proof technique:** use local eventual flatness at each limit prime, open
the flat locus at a finite stage, and eliminate the remaining closed stage
locus by a finite unit-ideal identity.

1.1 Choose a finite affine cover $X_i=\bigcup_{a=1}^mU_{a,i}$, with $U_{a,i}=\operatorname{Spec}B_{a,i}$. By [F1], every $B_{a,i}$ is a finitely presented $A_i$-algebra and $\mathcal F_i|_{U_{a,i}}$ corresponds to a finitely presented $B_{a,i}$-module $M_{a,i}$. The charts and modules at later stages and at the limit are their base changes. [F1]

2.1 Fix one chart and a prime $\mathfrak q\subseteq B_a$ at the limit, and set $\mathfrak p=\mathfrak q\cap A$. Its module stalk $(M_a)_{\mathfrak q}$ is flat over $A_{\mathfrak p}$: the given $A$-flatness localizes, and the stalk is naturally an $A_{\mathfrak p}$-module. Let $\mathfrak p_j,\mathfrak q_j$ be the contracted primes at later stages. Each $A_j$ is Noetherian because it is finite type over $\mathbb Z$, and $B_{a,j}$ is Noetherian because it is finite type over $A_j$. The localized pairs $(A_j)_{\mathfrak p_j}\to(B_{a,j})_{\mathfrak q_j}$ with modules $(M_{a,j})_{\mathfrak q_j}$ have the localization/base-change transitions and colimit stated in [F2]. Apply its eventual-flatness conclusion to obtain $j(\mathfrak q)$ at which $(M_{a,j(\mathfrak q)})_{\mathfrak q_{j(\mathfrak q)}}$ is flat over $(A_{j(\mathfrak q)})_{\mathfrak p_{j(\mathfrak q)}}$. This is the relative flatness condition at that stage point. [F1, F2, F4, step 1.1]

3.1 By [F3], the flat locus of $M_{a,j(\mathfrak q)}$ in $\operatorname{Spec}B_{a,j(\mathfrak q)}$ contains a principal open $D(g_{\mathfrak q})$ around $\mathfrak q_{j(\mathfrak q)}$. Its pullback to $\operatorname{Spec}B_a$ contains $\mathfrak q$ and is flat. As $\mathfrak q$ varies, these pulled-back principal opens cover the entire limit chart. [F3, F4, step 2.1]

4.1 The limit chart is quasi-compact, so choose finitely many $\mathfrak q_1,\ldots,\mathfrak q_r$ whose pulled-back principal flats cover it, and pass to a common stage $j$ where their corresponding stage principal opens are defined. Let $U_j$ be their union and let $I_j$ be the ideal generated by their finitely many defining functions. The pullback of $U_j$ is all of $\operatorname{Spec}B_a$, so $I_jB_a=B_a$. Choose a finite identity $1=\sum_{k=1}^n c_ks_k$ in $B_a$ with $s_k\in I_j$. Each coefficient and this one equality occur at some later stage $k\ge j$; hence $I_jB_{a,k}=B_{a,k}$ and the pullback of $U_j$ is **all** of the stage chart $\operatorname{Spec}B_{a,k}$. Flatness holds on all of that chart, since it held on $U_j$ and survives base change. If the limit chart is empty, the same argument with the empty open gives $B_{a,k}=0$, so the stage chart becomes empty. [F2, F3, F4, step 3.1]

5.1 Repeat step 4.1 for the finitely many affine charts and choose one common later stage. The resulting $\mathcal F_j$ is flat over $A_j$ at every point of $X_j$. If $\mathcal F_i=0$, it is flat at every stage without enlargement. The only directed choices were finite; AC is declared for the local supplier framework. No nonflat transition was treated as a faithfully flat map. The Stacks 05LY/02JO references verify the scope of this local proof but are not proof premises. [F1, F2, F3, F4, step 1.1, step 4.1] ∎
