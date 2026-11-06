---
id: op-gts-general-hms-for-a-specified-compact-mirror-datum
kind: open-problem
title: General HMS for a specified compact mirror datum
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-hms-landau-ginzburg-categories-examples
dependency_level: 12
deps:
  - def-gts-specified-mathematical-mirror-datum
  - def-gts-compact-calabiyau-manifold-conventions
  - def-gts-r4-09b-multi-object-fukaya-category-of-branes-and-polygon-morphisms
  - def-gts-small-dg-categories-perfect-modules-and-morita-deformation
  - def-gts-symplectic-and-almost-complex-curve-data
  - def-chern-classes-from-the-projective-bundle-relation
  - lem-second-countable-smooth-manifolds-have-cw-homotopy-type
  - def-axiom-of-choice
  - lem-gts-identity-versus-zero-diagram-obstruction
dependency_roles:
  def-gts-specified-mathematical-mirror-datum: mathematical-premise
  def-gts-compact-calabiyau-manifold-conventions: mathematical-premise
  def-gts-r4-09b-multi-object-fukaya-category-of-branes-and-polygon-morphisms: mathematical-premise
  def-gts-small-dg-categories-perfect-modules-and-morita-deformation: mathematical-premise
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
  def-chern-classes-from-the-projective-bundle-relation: mathematical-premise
  lem-second-countable-smooth-manifolds-have-cw-homotopy-type: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  lem-gts-identity-versus-zero-diagram-obstruction: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Maxim Kontsevich, Homological Algebra of Mirror Symmetry
      url: https://arxiv.org/pdf/alg-geom/9411018v1
      locator: printed pp. 18–19, general HMS conjectural formulation
    - title: Denis Auroux, Mirror Symmetry, Lecture 1
      url: https://people.math.harvard.edu/~auroux/18.969-S09/mirrorsymm-lect1.pdf
      locator: complete lecture notes, general HMS conjecture and limits of the examples
    - title: Denis Auroux, Mirror Symmetry, Lecture 18
      url: https://ocw.mit.edu/courses/18-969-topics-in-geometry-mirror-symmetry-spring-2009/61111f696db97ee7a1bc449ae59529c4_MIT18_969s09_lec18.pdf
      locator: complete lecture notes, derived and split-closed Fukaya-category conventions
verification:
  precheck: n/a
  sources_checked:
    date: 2026-11-05
    scope: Recorded source, statement and proof-status review for this open-problem in conformal-field-theory-string-theory-step3-fresh-2026-11-04, within the native reports' stated reading limits. This records no proof or new empirical validation.
    by: gpt-6.1-sol; native-step5-substantive-review; delegated by /root under owner authorization
---

## Open problem

Assume AC. Choose a compact smooth symplectic manifold $(X,\omega)$ and a specified smooth $\omega$-compatible almost-complex structure $J:TX\to TX$: $J^2=-\operatorname{id}$ and $g(v,w)=\omega(v,Jw)$ is a symmetric positive definite metric. Regard $TX$ as a complex vector bundle using $J$, and define $c_1(X,J)=c_1((TX,J))\in H^2(X;\mathbb Z)$ componentwise by the topological Chern-class convention on CW-type bases; smooth manifolds here are second countable and have CW homotopy type. Require $c_1(X,J)=0$. No choice-independence assertion is needed because $J$ is supplied data.

For a fixed mirror datum $(X,\omega,\Lambda)\leftrightarrow(Y,\mathcal O_Y)$ with these data, $Y$ smooth projective with $K_Y\cong\mathcal O_Y$, compatible gradings and coefficient completion, and a weakly unobstructed Fukaya A-infinity category specified, ask whether there exists a split-closed quasi-equivalence

$$D^\pi\mathcal F(X,\omega;\Lambda)\simeq D^b\operatorname{Coh}(Y)$$

compatible with the mirror-parameter map in the following specified sense. In addition to the geometric mirror datum, supply small parameter categories $P_A,P_B$ and a functor $\Phi:P_A\to P_B$ representing its map $\varphi:U_A\to U_B$. Concretely, specify parameter points $t_a:1\to U_A$ and $s_b:1\to U_B$ in the declared parameter category, with $s_{\Phi(a)}=\varphi t_a$; the morphisms in $P_A,P_B$ are the chosen parameter transitions and their geometric identifications are part of the datum. Require a common coefficient ring after the declared base changes, and diagrams $\mathcal A:P_A\to\mathscr D$ and $\mathcal B:P_B\to\mathscr D$. Here $\mathscr D$ is the category obtained from small dg categories and dg functors by formally inverting quasi-equivalences; a dg functor is a quasi-equivalence when it induces quasi-isomorphisms on all Hom complexes and is essentially surjective on $H^0$. The value $\mathcal A(a)$ is a specified dg enhancement of the split-closed derived Fukaya category at $t_a$, and $\mathcal B(b)$ is a specified dg enhancement of the coherent derived category at $s_b$. An enhancement here means a dg category with a specified equivalence from its $H^0$ to the indicated triangulated category. Supply the transition morphisms and functor laws for these diagrams; they are additional hypotheses, not data inferred from $\varphi$ alone. For such additional diagram data, the parameter problem is to determine whether a comparison exists, to identify obstructions when it does not, and to construct it when existence holds. No assertion that every supplied pair of diagrams admits a comparison is made. The requested comparison, when it exists, is a natural isomorphism $F:\mathcal A\Rightarrow\mathcal B\circ\Phi$ in $\mathscr D$: each $F_a$ is an isomorphism there, and for every $u:a\to a'$ one requires $\mathcal B(\Phi u)F_a=F_{a'}\mathcal A(u)$. At the distinguished parameter this must induce the displayed equivalence. Even pointwise quasi-equivalence of the fibres is only a necessary condition for this diagram problem. This fixes the compatibility condition at the level of the localized dg category; no extra analytic flat connection or chain-level higher naturality is implicit. A single specified pair is the case of terminal parameter categories. This asks for a comparison for the specified data, and does not assert that every $X$ has a mirror $Y$.

## Open problem references

[[def-gts-specified-mathematical-mirror-datum]]

[[def-gts-compact-calabiyau-manifold-conventions]]

[[def-gts-r4-09b-multi-object-fukaya-category-of-branes-and-polygon-morphisms]]

[[def-gts-small-dg-categories-perfect-modules-and-morita-deformation]]

[[def-gts-symplectic-and-almost-complex-curve-data]]

[[def-chern-classes-from-the-projective-bundle-relation]]

[[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]]

[[def-axiom-of-choice]]

## Status

The single-pair equivalence question is the general HMS question motivated by the cited Kontsevich formulation. The extra diagram problem is a locally specified extension of that formulation; existence for arbitrary transition diagrams is not a conjecture attributed to Kontsevich. The proved identity-versus-zero transition obstruction is recorded separately in [[lem-gts-identity-versus-zero-diagram-obstruction]]: identical fibres do not suffice for an isomorphism of the supplied diagrams. Such elementary obstructions must be separated from the unresolved equivalence problem for a genuine geometric mirror pair and from the additional geometric conditions needed for family compatibility. The source-specific elliptic, quartic, quintic and toric-subcategory theorems on the companion A page have their own hypotheses and do not solve this question. Its log-surface material provides geometric and categorical interfaces, without a log-surface equivalence theorem in that page inventory. The exact multi-object Fukaya category and source-specific analytic construction remain prerequisites rather than consequences of the question. Reviewed 2026-10-26; no proof or refutation is supplied here.

