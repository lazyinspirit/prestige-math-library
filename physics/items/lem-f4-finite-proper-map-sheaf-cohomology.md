---
id: lem-f4-finite-proper-map-sheaf-cohomology
kind: lemma
title: Finite Proper Maps Preserve Sheaf Cohomology
domain: mathematics
library: physics
category: string-theory
dependency_level: 0
physical_scope: >-
  Pure sheaf-cohomology lemma for closed finite-fiber maps of Hausdorff spaces;
  no physical interpretation is assigned.
deps:
  - def-axiom-of-choice
  - def-direct-image-sheaf
  - def-flasque-sheaf
  - def-sheaf-on-topological-space
  - thm-godement-resolution-flasque
  - thm-flasque-sheaves-acyclic
  - thm-exactness-of-sheaves-stalkwise
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-direct-image-sheaf: mathematical-premise
  def-flasque-sheaf: mathematical-premise
  def-sheaf-on-topological-space: mathematical-premise
  thm-godement-resolution-flasque: mathematical-premise
  thm-flasque-sheaves-acyclic: mathematical-premise
  thm-exactness-of-sheaves-stalkwise: mathematical-premise
status: published
origin: session
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "The Stacks Project Authors, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
      locator: "§12, Flasque sheaves, and §30, Godement resolution: flasque resolutions and their cohomological use. The finite-fiber stalk calculation for the map below is proved locally."
---

## Statement

Assume the Axiom of Choice. Let $f:X\to Y$ be a continuous closed map between
Hausdorff spaces, and suppose every fiber $f^{-1}(y)$ is finite. For every
sheaf of abelian groups $\mathcal F$ on $X$, there are natural isomorphisms
$
H^q(Y,f_*\mathcal F)\longrightarrow H^q(X,\mathcal F)
$
is an isomorphism for every integer $q\ge0$. Here the direct image is defined
by $(f_*\mathcal F)(U)=\mathcal F(f^{-1}U)$ for each open $U\subseteq Y$.
In particular, this applies to a finite normalization map of a compact
Hausdorff complex curve. No algebraic or analytic comparison theorem is
asserted.

## Facts & Assumptions

**Given:** The Axiom of Choice, Hausdorff spaces $X,Y$, a continuous closed
finite-fiber map $f:X\to Y$, and a sheaf of abelian groups $\mathcal F$ on $X$.

[A1] The Axiom of Choice is the stated set-theoretic premise
([[def-axiom-of-choice]]).

[F1] Under AC, the Godement complex gives a flasque resolution of a sheaf and
computes its sheaf cohomology ([[thm-godement-resolution-flasque]]).

[F2] The direct image is defined by
$(f_*\mathcal G)(U)=\mathcal G(f^{-1}U)$, with restrictions induced from
$\mathcal G$ ([[def-direct-image-sheaf]]).

[F3] A sequence of sheaves is exact if and only if its sequence on every
stalk is exact ([[thm-exactness-of-sheaves-stalkwise]]).

[F4] A sheaf is flasque when every restriction map from a larger open to a
smaller open is surjective ([[def-flasque-sheaf]]).

[F5] A flasque abelian sheaf has zero higher cohomology on every open subspace
([[thm-flasque-sheaves-acyclic]]).

[F6] Compatible local sections of a sheaf glue uniquely
([[def-sheaf-on-topological-space]]).

## Proof

**Given:** The hypotheses and objects in the Statement.

1.1 The direct image $f_*\mathcal F$ is a sheaf: for an open cover of an open
$U\subseteq Y$, the inverse-image opens cover $f^{-1}U$; compatible
$\mathcal F$-sections glue uniquely by [F6]. Now fix $y\in Y$ and list its
finite fiber as
$f^{-1}(y)=\{x_1,\ldots,x_n\}$. There is a canonical map
$(f_*\mathcal F)_y\to\prod_{j=1}^n\mathcal F_{x_j}$ sending a germ of a
section near $f^{-1}(y)$ to its germs at these points. It is surjective:
represent any finite tuple of germs on neighborhoods $U_j$ of $x_j$, shrink
these finitely many neighborhoods to pairwise disjoint open neighborhoods
$V_j\subseteq U_j$, and put $V=\bigcup_jV_j$. Since $f$ is closed,
$Y\setminus f(X\setminus V)$ is an open neighborhood $W$ of $y$ and
$f^{-1}(W)\subseteq V$. The chosen sections restrict to a section on the
disjoint open cover $f^{-1}(W)=\bigcup_j(f^{-1}(W)\cap V_j)$, so they glue
and realize the given tuple. The map is injective: if a representative on
$f^{-1}(U)$ has zero germ at each $x_j$, choose neighborhoods
$O_j\subseteq f^{-1}(U)$ on which it vanishes, shrink to disjoint
$V_j\subseteq O_j$, and replace $U$ by the
neighborhood $U\setminus f(X\setminus\bigcup_jV_j)$. The representative
then vanishes on that full inverse image, so its direct-image germ is zero.
If the fiber is empty, $Y\setminus f(X)$ is a neighborhood on which the
direct image is zero, giving the same formula with an empty product. Thus
$(f_*\mathcal F)_y\cong\prod_{x\in f^{-1}(y)}\mathcal F_x$. [given, F2, F6, construct]

2.1 Apply the stalk formula of step 1.1 to a short exact sequence of sheaves
on $X$. On each $y$ its pushed stalk sequence is a finite product of the
exact stalk sequences at points of $f^{-1}(y)$; finite products of abelian
groups preserve exactness. By [F3], direct image is therefore an exact
functor on sheaves of abelian groups. It also sends a flasque sheaf $\mathcal G$
to a flasque sheaf: if $U'\subseteq U$ are open in $Y$, the restriction
$(f_*\mathcal G)(U)\to(f_*\mathcal G)(U')$ is the restriction
$\mathcal G(f^{-1}U)\to\mathcal G(f^{-1}U')$, which is surjective because
$f^{-1}U'\subseteq f^{-1}U$ are open and $\mathcal G$ is flasque [F4].
[F2, F3, F4, step 1.1]

3.1 Let $\mathcal F\to C^\bullet(\mathcal F)$ be the Godement flasque
resolution from [F1]. Exactness of $f_*$ from step 2.1 makes
$f_*\mathcal F\to f_*C^\bullet(\mathcal F)$ a resolution, and step 2.1
makes every term flasque. By [F5], this is a cohomology-acyclic resolution
on $Y$. Hence $H^q(Y,f_*\mathcal F)$ is the cohomology of
$\Gamma(Y,f_*C^\bullet(\mathcal F))$. The direct-image definition [F2]
identifies each term $\Gamma(Y,f_*C^p(\mathcal F))$ with
$\Gamma(X,C^p(\mathcal F))$, whose cohomology is $H^q(X,\mathcal F)$ by
[F1]. These termwise identifications commute with the resolution maps,
giving the asserted isomorphism for all $q\ge0$. [A1, F1, F2, F5, step 2.1] ∎
