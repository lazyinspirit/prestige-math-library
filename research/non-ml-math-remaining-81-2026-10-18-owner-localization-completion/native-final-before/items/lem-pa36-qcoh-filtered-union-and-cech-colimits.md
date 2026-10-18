---
id: lem-pa36-qcoh-filtered-union-and-cech-colimits
kind: lemma
title: Quasicoherent modules are filtered unions of coherent subsheaves and cohomology commutes with these colimits
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - thm-affine-quasi-coherent-equivalence
  - def-axiom-of-choice
  - def-coherent-module-scheme
  - def-filtered-category-and-filtered-colimit
  - def-locally-noetherian-and-noetherian-scheme
  - def-quasi-coherent-module-scheme
  - def-sheaf-cohomology-derived-global-sections
  - def-very-ample-invertible-sheaf-relative
  - lem-filtered-colimits-of-abelian-groups-are-exact
  - lem-semisimple-projective-orbit-flag-quotients
  - thm-cech-computes-qc-cohomology-separated-scheme-affine-cover
  - thm-coherent-sheaves-abelian-noetherian-scheme
  - thm-semisimple-flag-variety-smooth-projective
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "The Stacks Project, Properties of Schemes, Lemma 28.23.3"
      url: "https://stacks.math.columbia.edu/tag/01PD"
      locator: "Lemma 28.23.3; a quasi-coherent sheaf is the directed colimit of its finite-type quasi-coherent subsheaves"
    - title: "The Stacks Project, Cohomology of Schemes, Lemma 30.9.1"
      url: "https://stacks.math.columbia.edu/tag/01XY"
      locator: "Lemma 30.9.1; on a locally Noetherian scheme, coherent is equivalent to quasi-coherent and finite type"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
      locator: "§19.1(vi)–(vii); affine-cover cohomology and the stated filtered-colimit property, whose full proof is supplied here"
---

## Statement

Assume the Axiom of Choice. Let $X=G/B$ be the projective flag variety of
[[def-complex-semisimple-algebraic-group-borel-and-flag-variety]], and let
$\mathcal M$ be a quasi-coherent $\mathcal O_X$-module. Then $\mathcal M$ is
the filtered union of its coherent $\mathcal O_X$-submodules. If
$\mathcal M=\varinjlim_j\mathcal F_j$ is any filtered colimit of
quasi-coherent modules, then for every $q\ge0$ the canonical map
$$\varinjlim_j H^q(X,\mathcal F_j)\longrightarrow H^q(X,\mathcal M)$$
is an isomorphism.

## Facts & Assumptions

**Given:** The Axiom of Choice, the projective flag variety $X$, a
quasi-coherent module $\mathcal M$, and, for the second assertion, a filtered
diagram $\mathcal F_j$ in $\operatorname{QCoh}(X)$ with colimit $\mathcal M$.

[F1] $X$ is a Noetherian, quasi-compact separated scheme; its highest-weight
orbit construction embeds it as a closed subvariety of a projective space, so
the restricted $\mathcal O(1)$ is very ample and its standard opens give a
finite affine cover ([[thm-semisimple-flag-variety-smooth-projective]],
[[lem-semisimple-projective-orbit-flag-quotients]],
[[def-very-ample-invertible-sheaf-relative]]).

[F2] On an affine open $\operatorname{Spec}A$, quasi-coherent modules are
associated sheaves of $A$-modules; sections commute with filtered colimits
under this equivalence ([[thm-affine-quasi-coherent-equivalence]],
[[def-quasi-coherent-module-scheme]]).

[F3] On a locally Noetherian scheme, a quasi-coherent module of finite type is
coherent ([[thm-coherent-sheaves-abelian-noetherian-scheme]],
[[def-coherent-module-scheme]],
[[def-locally-noetherian-and-noetherian-scheme]]).

[F4] The finite affine cover in [F1] computes quasi-coherent cohomology by its
ordered Cech complex ([[thm-cech-computes-qc-cohomology-separated-scheme-affine-cover]]).

[F5] Filtered colimits of abelian groups are exact and commute with the
cohomology of a cochain complex ([[lem-filtered-colimits-of-abelian-groups-are-exact]]).

## Proof

1.1 Choose a very ample embedding $X\hookrightarrow\mathbb P^N$ and its
standard affine cover $U_i=X\cap D_+(x_i)$. For a section
$s\in\Gamma(U_i,\mathcal M)$, each overlap $U_i\cap U_j$ is the principal
open $D(x_i/x_j)$ in the affine $U_j$. By [F2] write
$s|_{U_i\cap U_j}=m_j/(x_i/x_j)^{r_j}$ for some
$m_j\in\Gamma(U_j,\mathcal M)$. There are finitely many $j$, so choose a
common $r\ge r_j$. With $x_j$ as the frame of $L=\mathcal O_X(1)$ on $U_j$,
the section $m_j\otimes x_j^r$ of $\mathcal M\otimes L^r$ extends
$s\otimes x_i^r$ from $U_i\cap U_j$ to $U_j$. On an overlap $U_j\cap U_k$,
the two extensions agree after inverting $x_i$, because both restrict to
$s\otimes x_i^r$ there. Their difference is therefore killed by some power
of $x_i$ in the quasi-coherent module of sections on that affine overlap.
There are finitely many overlaps, so one further common power kills all
differences; multiplying every local extension by that power of $x_i$
makes them agree and they glue to a global section of $\mathcal M\otimes
L^n$ whose restriction to $U_i$ is $s\otimes x_i^n$. Thus each local section
on a standard chart is locally in the image of a global map
$L^{-n}\to\mathcal M$. [F1, F2, choose, construct]

1.2 Take the direct sum of the maps $L^{-n}\to\mathcal M$ produced by [step
1.1] for all standard charts and all their local sections. At every stalk
this map is surjective because the standard charts cover $X$ and their
sections generate the associated modules. Hence $\mathcal M$ is the union of
the images of finite subsums: the indexing set of finite subsums is filtered,
their transition maps are inclusions, and their colimit is the image of the
surjection. Each finite subsum is a finite direct sum of invertible sheaves,
so its image is a finite-type quasi-coherent submodule of $\mathcal M$; it is
coherent by [F3]. This proves the first assertion. [F1, F3, step 1.1,
construct]

2.1 Fix the finite affine cover from [F1]. Every finite intersection is
affine, and [F2] identifies sections on it with module sections; these
sections commute with the filtered colimit. Therefore the ordered Cech
complex of $\mathcal M$ is the degreewise filtered colimit of the ordered
Cech complexes of $\mathcal F_j$. The cover computes sheaf cohomology by [F4],
and exactness of filtered colimits in [F5] gives
$$H^q(X,\mathcal M)=H^q(\varinjlim_j C^\bullet(U,\mathcal F_j))
\cong\varinjlim_j H^q(C^\bullet(U,\mathcal F_j))
\cong\varinjlim_j H^q(X,\mathcal F_j)$$
for every $q\ge0$. The finite cover and degreewise finite sums are essential;
no interchange with an infinite product is used. [F1, F2, F4, F5] ∎
