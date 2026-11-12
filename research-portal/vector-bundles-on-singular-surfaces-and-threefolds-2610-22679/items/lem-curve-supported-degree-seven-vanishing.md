---
id: lem-curve-supported-degree-seven-vanishing
kind: lemma
title: Supported degree-seven vanishing
status: published
domain: mathematics
deps:
  - lem-author-8a080e7d9445-geometry
  - lem-author-8a080e7d9445-restriction-diagram
  - lem-author-8a080e7d9445-support-fiber
  - lem-author-8a080e7d9445-chow-restriction
  - lem-author-8a080e7d9445-degree-seven-les
  - math:def-axiom-of-choice
  - def-article-conventions
  - def-cohomology-with-support
  - def-motivic-cohomology
  - math:def-smooth-locus-morphism
  - math:def-integral-scheme
dependency_roles:
  lem-author-8a080e7d9445-geometry: mathematical-premise
  lem-author-8a080e7d9445-restriction-diagram: mathematical-premise
  lem-author-8a080e7d9445-support-fiber: mathematical-premise
  lem-author-8a080e7d9445-chow-restriction: mathematical-premise
  lem-author-8a080e7d9445-degree-seven-les: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-article-conventions: mathematical-premise
  def-cohomology-with-support: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  math:def-smooth-locus-morphism: mathematical-premise
  math:def-integral-scheme: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: Printed p. 13, Proposition 6.1 and the first vanishing paragraph of its
        proof
      statement: For an affine threefold X over an algebraically closed field k and an
        integral curve T in its smooth locus, the proof establishes
        H^{7,3}_mot(X/(X minus T), Z)=0 by excision to the smooth locus,
        surjectivity of degree-six restriction, and smooth degree-seven
        vanishing.
      hypotheses: X is an affine finite-type k-scheme of dimension three; k is
        algebraically closed; T is an integral curve closed in X and contained
        in the smooth locus. The local item separately makes Choice, size
        bounds, and support-fiber indexing explicit.
      reading_limits: For this repair, read the frozen article extraction at
        Proposition 6.1 and inspected supplied PDF image page-13.png. Checked
        the curve hypotheses and the first vanishing paragraph. The broader
        closed-integral-subset formulation is a locally authored application of
        the declared geometry, restriction, support, Chow, and degree-seven
        suppliers, not a theorem attributed verbatim to the article. This
        reading does not reconstruct the comparison or localization foundations
        or establish an article-author defect.
dependency_level: 17
---

## Statement
Assume the Axiom of Choice and the completed size conventions. Let $X$ be an affine finite-type threefold over an arbitrary algebraically closed field $k$, let $U=X_{\mathrm{smooth}}$, and let $T\subset X$ be a closed integral subset contained in $U$ (in particular the curve of Proposition6.1). Then
$$H^{7,3}_{\mathrm{mot}}(X/(X\setminus T),\mathbb Z)=0.$$
The quotient notation denotes the actual support fiber of the completed definition. The proof identifies the actual smooth restriction with Chow restriction before using its surjectivity.

## Facts & Assumptions
[A1] The assumed [[math:def-axiom-of-choice]] and fixed size bounds discharge the inherited hypotheses of the five supplied comparison and support prerequisites [F1] and the support definition [F3] at their applications in steps 1.1–2.1. The exact-sequence deduction makes no additional choice.

**Given:** The hypotheses in the statement, with the Axiom of Choice and fixed universe and site-size bounds of the supplied interfaces.

**Goal:** Identify the actual smooth restriction and support maps and prove the stated vanishing.

[F1] [[lem-author-8a080e7d9445-geometry]] supplies the qcqs open pair, the smooth separated finite-type schemes $U$ and $V=U\setminus T$, and perfectness of $k$. [[lem-author-8a080e7d9445-restriction-diagram]] identifies the actual degree-six restriction with Chow restriction. [[lem-author-8a080e7d9445-support-fiber]] supplies the actual support-fiber equivalence and excision. [[lem-author-8a080e7d9445-chow-restriction]] proves surjectivity of that actual degree-six restriction. [[lem-author-8a080e7d9445-degree-seven-les]] applies the support long exact sequence and smooth degree-seven vanishing to prove vanishing of the supported degree-seven group on $U$ and, by excision, on $X$. All five suppliers allow any closed subset $T\subseteq U$ closed in $X$.

[F2] [[def-article-conventions]] supplies the algebraically closed field, affine finite-type scheme and dimension conventions; threefold means dimension three. The notation $X_{\mathrm{smooth}}$ is the smooth locus of $X\to\operatorname{Spec}k$ in [[math:def-smooth-locus-morphism]]. The geometry supplier in [F1] verifies local finite presentation and gives this locus its open subscheme structure. Use the reduced induced closed-subscheme structure on $T$ as in [F1]; integral means nonempty, reduced and irreducible, as in [[math:def-integral-scheme]]. No assumption of integrality or reducedness on $X$ is imposed.

[F3] [[def-cohomology-with-support]] fixes the universe and site-size conventions and defines the unshifted weight-three support spectrum $M_3(X/(X\setminus T))$ as the homotopy fiber of restriction from $M_3(X)$ to $M_3(X\setminus T)$. Thus the quotient notation in the statement means $H^{a,3}_{\mathrm{mot}}(X/(X\setminus T),\mathbb Z)=H^{a,3}_{\mathrm{mot},T}(X,\mathbb Z)=\pi_{-a}M_3(X/(X\setminus T))$. On qcqs schemes, [[def-motivic-cohomology]] defines the ordinary motivic groups and restriction maps used in [F1]. The geometry supplier makes $X,U,U\setminus T,X\setminus T$ qcqs, so no arbitrary-open extension is needed here.

## Proof
1.1 Apply the geometry supplier in [F1] to the data interpreted in [F2], retaining [A1]. It gives the qcqs schemes and smooth pair over the perfect field $k$, without any finite-generation assumption on $k$ over its prime field. For $V=U\setminus T$, the restriction-diagram supplier identifies the actual motivic degree-six restriction $H^{6,3}_{\mathrm{mot}}(U,\mathbb Z)\to H^{6,3}_{\mathrm{mot}}(V,\mathbb Z)$ with Chow restriction before using surjectivity. The support-fiber supplier supplies excision with the unshifted indexing of [F3]. [given, A1, F1, F2, F3]

2.1 Under these same hypotheses, the Chow-restriction supplier in [F1] proves surjectivity of that actual restriction. The degree-seven-les supplier in [F1] applies the support long exact sequence with this surjectivity and smooth degree-seven vanishing, and gives $H^{7,3}_{\mathrm{mot},T}(U,\mathbb Z)=0$. Its excision identification gives $H^{7,3}_{\mathrm{mot},T}(X,\mathbb Z)=0$. By the notation in [F3], this is exactly the group in the statement. [A1, F1, F3, step 1.1] ∎

## External input
The article, printed p. 13, Proposition 6.1 and the first vanishing paragraph of its proof, establishes this supported degree-seven vanishing for integral-curve support. The present closed-integral-subset formulation and explicit choice, size and indexing conventions are a local adaptation supported by [F1]–[F3]. Its proof is the local application above; the article attribution is limited to its curve setting.
