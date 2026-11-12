---
id: lem-smooth-point-motivic-purity
kind: lemma
title: Motivic purity and lower-weight vanishing at a smooth closed point
status: published
domain: mathematics
deps:
  - def-cohomology-with-support
  - lem-author-59b1a831fe59-neighborhood
  - lem-author-59b1a831fe59-actual-support
  - lem-author-59b1a831fe59-cycle-complex
  - lem-author-59b1a831fe59-cancel-twists
  - lem-author-59b1a831fe59-relative-gysin
  - thm-author-59b1a831fe59-classical-derived-input
  - math:def-axiom-of-choice
  - def-article-conventions
  - math:def-perfect-field
  - math:def-smooth-morphism-schemes
  - math:def-closed-point-scheme
  - math:def-extension-degree-and-finite-extension
  - math:def-separable-elements-and-separable-extensions
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  def-cohomology-with-support: mathematical-premise
  lem-author-59b1a831fe59-neighborhood: mathematical-premise
  lem-author-59b1a831fe59-actual-support: mathematical-premise
  lem-author-59b1a831fe59-cycle-complex: mathematical-premise
  lem-author-59b1a831fe59-cancel-twists: mathematical-premise
  lem-author-59b1a831fe59-relative-gysin: mathematical-premise
  thm-author-59b1a831fe59-classical-derived-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-article-conventions: mathematical-premise
  math:def-perfect-field: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-closed-point-scheme: mathematical-premise
  math:def-extension-degree-and-finite-extension: mathematical-premise
  math:def-separable-elements-and-separable-extensions: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: Printed p. 7, Lemma 2.9 proof, first display and following lower-weight
        vanishing sentence; preceding smooth-point excision paragraph
      reading_limits: Read the full frozen printed page 7 text and inspected the
        supplied page-7.png in this assignment, including the preceding
        smooth-locus excision paragraph, Lemma 2.9 and its first purity display
        and lower-weight vanishing sentence. This checks statement provenance
        and hypotheses. Read the actual local supplier interfaces and relevant
        arguments for neighbourhood geometry, coherent restriction comparison,
        cycle computation, relative Gysin and cancellation. Their underlying
        MVW, Voevodsky, Elmanto–Morrow and Bachmann–Elmanto–Morrow source proofs
        were not freshly read or reconstructed here. The negative-weight EM zero
        extension is an explicit local convention, not an additional EM
        construction attributed to the article.
      statement: The proof of Lemma 2.9 identifies motivic cohomology supported at x
        with that on the smooth locus and with residue-field motivic cohomology
        in degree i-2d and weight j-d. It then states vanishing when j-d<0. The
        separate filtered-K conclusion of Lemma 2.9 is not asserted by this
        item.
      hypotheses: The preceding paragraph takes X qcqs over a perfect field k. Lemma
        2.9 assumes X has pure dimension d and x is a closed point in the smooth
        locus. The local item retains these hypotheses, supplies compatible
        Choice and size assumptions for its selected models, treats j>=0 in the
        EM system, and states a separate explicit zero-extension convention for
        negative weights.
dependency_level: 19
formulation_deps:
  - def-cohomology-with-support
  - def-article-conventions
  - math:def-perfect-field
  - math:def-smooth-morphism-schemes
  - math:def-closed-point-scheme
  - math:def-extension-degree-and-finite-extension
  - math:def-separable-elements-and-separable-extensions
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - thm-author-59b1a831fe59-classical-derived-input
argument_deps:
  - def-cohomology-with-support
  - lem-author-59b1a831fe59-neighborhood
  - lem-author-59b1a831fe59-actual-support
  - lem-author-59b1a831fe59-cycle-complex
  - lem-author-59b1a831fe59-cancel-twists
  - lem-author-59b1a831fe59-relative-gysin
  - thm-author-59b1a831fe59-classical-derived-input
  - math:def-smooth-morphism-schemes
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
---

## Statement
Assume AC and the compatible site and universe bounds specified in the Facts & Assumptions. Let $k$ be a perfect field, let $X$ be a qcqs $k$-scheme of pure finite dimension $d$, and let $x\in X$ be a closed point in its smooth locus, meaning that the structure morphism $X\to\operatorname{Spec}k$ is smooth at $x$. Write $L=\kappa(x)$, a finite separable extension of $k$. For every $i\in\mathbb Z$ and $j\geq d$ there is the purity isomorphism
$$H^{i,j}_{\mathrm{mot}}(X/(X\setminus\{x\}),\mathbb Z)\cong H^{i-2d,j-d}_{\mathrm{mot}}(L,\mathbb Z).$$
For every $i$ and $0\leq j<d$, the supported group on the left is zero. If the notation $C_j=0$ and $H^{i,j}=0$ is explicitly adopted for $j<0$, the displayed formula holds for every integer $j$, and the left groups vanish for all $j<d$. This extends the nonnegative EM weight system by zero; it does not assert an unstated negative-weight EM construction.

The quotient notation denotes the actual coherent restriction fiber of the completed support definition. The statement neither requires $x$ to be $k$-rational nor $X$ to be smooth away from an affine neighbourhood of $x$. No separability, perfectness, finite-type-neighbourhood or excision premise is suppressed. For $d=0$ the shift is zero and the argument includes the identity neighbourhood $\operatorname{Spec}L$.

## Facts & Assumptions
**Given:** The stated field, scheme, point, indices and choice/size conventions. $H^{i,j}$ is cohomology in degree $i$ of the unshifted coefficient/support complex.

**Goal:** Establish the actual support purity isomorphism and the full lower-weight vanishing range with the correct $(2d,d)$ shift.

[F0] [[def-article-conventions]] supplies $k$-schemes, the qcqs conditions, residue fields and chain dimension; the explicitly stated perfect-field hypothesis replaces its default algebraically closed convention. Pure dimension $d$ means that every irreducible component has dimension $d$, with an irreducible component a maximal nonempty irreducible closed subset. Perfectness is defined by [[math:def-perfect-field]], closedness of $x$ by [[math:def-closed-point-scheme]], and smoothness at $x$ by [[math:def-smooth-morphism-schemes]] for the arbitrary structure morphism. Thus no global locally-finite-presentation hypothesis on $X$ is added. The terms finite and separable for $L/k$ have the meanings of [[math:def-extension-degree-and-finite-extension]] and [[math:def-separable-elements-and-separable-extensions]]; that $L/k$ has these properties is the conclusion of [F1], not an extra assumption.

[A1] Assume [[math:def-axiom-of-choice]] and compatible nested Grothendieck universes with $\omega$ in the smallest universe, containing the scheme and site data, and larger universes for the categories. Use the closure convention of [[math:def-grothendieck-universe-closure-convention]], with existence of sufficiently large bounds separately assumed. Enlarge these bounds compatibly for [[def-cohomology-with-support]] and [[thm-author-59b1a831fe59-classical-derived-input]]. These assumptions discharge the inherited Choice and size premises of [F1]–[F4] whenever those suppliers are invoked below; the group and shift computations require no additional choice.

[F1] [[lem-author-59b1a831fe59-neighborhood]] gives the exact smooth finite-type pair and the actual EM excision equivalence.

[F2] [[lem-author-59b1a831fe59-actual-support]] compares the actual smooth open restriction with the classical and cycle arrows for every nonnegative weight. [[lem-author-59b1a831fe59-cycle-complex]] computes its fixed-point-supported chain complex, including multiplicities and low-weight zero.

[F3] [[lem-author-59b1a831fe59-cancel-twists]] supplies coefficient cancellation over the perfect field for $j\geq d$. [[lem-author-59b1a831fe59-relative-gysin]] identifies the already compared fiber with relative classical Hom and applies the completed Gysin input under its exact hypotheses. The classical category, source motives $M(T)$ and nonnegative Tate twists are specified by [[thm-author-59b1a831fe59-classical-derived-input]]. Its cochain convention is $A[n]^q=A^{q+n}$, with differential $(-1)^n d_A$; cohomology of $A[n]$ in degree $i$ is therefore cohomology of $A$ in degree $i+n$.

[F4] For $j\geq0$, write $C_j(T)=\mathbb Z(j)_{\mathrm{mot}}(T)$ for the unshifted coefficient complex on a qcqs $k$-scheme $T$. [[def-cohomology-with-support]] fixes the current supported object and cohomological indexing. The negative-weight extension is the explicit zero convention in the Statement, agreeing with classical MVW Definition3.1 as recorded by [[thm-author-59b1a831fe59-classical-derived-input]].

## Proof
1.1 With smoothness understood as in [F0] and the foundational assumptions [A1], apply [F1]. It supplies a smooth affine separated finite-type pure-$d$ neighbourhood $V$ and smooth closed point $\operatorname{Spec}L\hookrightarrow V$ of codimension $d$, and identifies the actual point-support complex on $X$ with that on $V$. Thus all subsequent operations apply to the actual restriction arrow and preserve supported cohomology. [A1, F0, F1, F4, given]

2.1 For $j\geq d$, [F2] identifies that arrow with its classical counterpart before taking fibers. Apply [F3] to obtain relative Hom out of the cofiber of $M(V\setminus x)\to M(V)$. The relative-Gysin supplier in [F3] identifies this cofiber with $M(\operatorname{Spec}L)(d)[2d]$; perfect-field cancellation then identifies its coefficient Hom group with weight $j-d$ and degree $i-2d$ on $L$. This proves the displayed formula. Independently, [F2]'s chain calculation identifies the support complex with $C_{j-d}(L)[-2d]$, confirming the same shift directly in the actual support model; no comparison is inferred just from equality of groups. [A1, F1, F2, F3, step 1.1]

3.1 For $0\leq j<d$, [F2] proves that the fixed-support cycle complex has no generators in any degree. Its actual support fiber is therefore zero, so every degree-$i$ group vanishes. This argument does not cancel a positive Tate twist into an undefined negative effective coefficient. If $j<0$, [F4]'s explicit zero extension makes both sides zero; if $0\leq j<d$, it also gives zero to the negative-weight residue-field side. This proves the all-integer notation version exactly under that convention, and completes the original lower-weight assertion. [A1, F2, F4, step 1.1] ∎
