---
id: lem-author-d026a7b99ace-rr-and-global-square
kind: lemma
title: Supported RR and the actual support-to-global application
status: draft
domain: mathematics
deps:
  - lem-author-d026a7b99ace-positive-coordinates
  - lem-author-d026a7b99ace-supported-chern-map
  - lem-author-d026a7b99ace-positive-rr-coefficient
  - lem-author-d026a7b99ace-actual-edge
  - thm-author-d026a7b99ace-supported-rr
  - def-third-edge-map
  - lem-third-graded-isomorphism
  - math:def-axiom-of-choice
  - lem-author-80f982ded420-normal-point-strata
  - lem-author-80f982ded420-clopen-filtered-products
  - prop-perfect-k-localization-input
  - lem-author-b747b28c359f-elmanto-morrow-complexes
  - lem-author-ab0a6fc202cb-clopen-derived-descent
  - prop-motivic-graded-spectral-sequence
  - def-motivic-filtration
dependency_roles:
  lem-author-d026a7b99ace-positive-coordinates: mathematical-premise
  lem-author-d026a7b99ace-supported-chern-map: mathematical-premise
  lem-author-d026a7b99ace-positive-rr-coefficient: mathematical-premise
  lem-author-d026a7b99ace-actual-edge: mathematical-premise
  thm-author-d026a7b99ace-supported-rr: mathematical-premise
  def-third-edge-map: mathematical-premise
  lem-third-graded-isomorphism: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-author-80f982ded420-normal-point-strata: mathematical-premise
  lem-author-80f982ded420-clopen-filtered-products: mathematical-premise
  prop-perfect-k-localization-input: mathematical-premise
  lem-author-b747b28c359f-elmanto-morrow-complexes: mathematical-premise
  lem-author-ab0a6fc202cb-clopen-derived-descent: mathematical-premise
  prop-motivic-graded-spectral-sequence: mathematical-premise
  def-motivic-filtration: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 24
---

## Statement
Assume the Axiom of Choice and the fixed site and universe bounds of the motivic and support constructions. Let $k$ be algebraically closed of arbitrary characteristic, let $X$ be a finite-type $k$-scheme of pure dimension three, and let $x$ be a smooth closed point, with closed immersion $i:\operatorname{Spec}k(x)\hookrightarrow X$. Write $u_x=[i_*k(x)]$ for the positive supported residue class and $\delta_x$ for the positive fundamental point-cycle class. For this pair, $c_{3,x}(nu_x)=2n\delta_x$ and $\epsilon_{3,x}c_{3,x}(nu_x)=2nu_x$ for every $n\in\mathbb Z$. If, in addition, $X$ is normal and affine, write $\iota_K:K_{0,x}(X)\to K_0(X)$ and $\iota_H:H^{6,3}_x(X,\mathbb Z)\to H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$ for forgetting support. For every $z\in K_{0,x}(X)$ and $b\in H^{6,3}_x(X,\mathbb Z)$, both squares with support-to-global commute:
$$c_3(\iota_Kz)=\iota_Hc_{3,x}(z),\qquad \epsilon_3(\iota_Hb)=\iota_K\epsilon_{3,x}(b),$$
where the second equality is viewed in $K_0(X)$ via the image-filtration inclusion. Thus the global composite equals twice the residue-sheaf class on every such point generator, whether or not support-to-global is injective. The same supported formulas and global equalities hold for a normal affine finite-type $k$-scheme $X$ of dimension three with lower-dimensional components, provided $x$ lies on a three-dimensional component: compute on the pure clopen union $X_3$ of those components and extend the point class by zero.

## Facts & Assumptions
[F1] [[thm-author-d026a7b99ace-supported-rr]] supplies the actual supported RR formula and its refined-pushforward normalizations; [[lem-author-d026a7b99ace-positive-rr-coefficient]] identifies the rank value as $2n$. The RR input's residue-object normalization sends $n$ to $nu_x$ in K theory. Its fundamental-cycle normalization, with divisor normalization and composition, sends $1$ to the positive motivic point class $\delta_x$; the coefficient helper checks the positive sign by its integral projective-space test. [[lem-author-d026a7b99ace-positive-coordinates]] defines these same generators through the residue object and the actual supported-cycle model. The compatibility with refined Gysin is supplied by the RR input, rather than inferred from an abstract purity isomorphism.

[F2] [[lem-author-d026a7b99ace-supported-chern-map]] supplies the actual Chern support/global square. [[lem-author-d026a7b99ace-actual-edge]] supplies the actual supported edge and positive normalization.

[F3] [[lem-third-graded-isomorphism]] and [[def-third-edge-map]] supply the global $p_3$ isomorphism and edge. Support fibers of the augmented tower preserve the stage-to-layer and stage-to-zero maps.

[F4] [[lem-author-80f982ded420-normal-point-strata]] supplies the pure normal affine clopen union $X_3$ and the actual zero extension of its residue classes. [[lem-author-80f982ded420-clopen-filtered-products]] gives product decompositions of the augmented stages; their graded cofibers give the corresponding motivic decomposition. [[math:def-axiom-of-choice]] supplies the inherited Choice premise of the point-coordinate, coefficient and edge constructions.

[F5] For the potentially nonaffine punctured open, [[prop-perfect-k-localization-input]] supplies K-localization on qcqs schemes with quasi-compact open complement. [[lem-author-b747b28c359f-elmanto-morrow-complexes]] supplies derived Nisnevich motivic sheaves at every nonnegative weight, and [[lem-author-ab0a6fc202cb-clopen-derived-descent]] gives their finite-clopen products, including value zero on the empty scheme. [[def-motivic-filtration]] identifies stage zero with K, and [[prop-motivic-graded-spectral-sequence]] supplies the natural stage-to-layer triangles on qcqs schemes. These inputs are invoked under the Choice and size premises of the statement.


**Given:** The finite-type pure threefold, smooth closed point, field, Choice and size hypotheses above; also normality and affineness for the global assertion. For the final extension use the stated normal affine threefold and a smooth closed point on its three-dimensional clopen part.

**Goal:** Compute supported operations and identify the exact global maps used by the pending consumer.

## Proof
1.1 The positive-coordinate supplier in [F1], under the assumptions in [F4], supplies a smooth affine pure three-dimensional neighbourhood $V$ of the closed point $x$. Its point immersion is regular of codimension three, so apply [F1] to $x\hookrightarrow V$ with $q=d=3$, $r=0$ and $a=n$. Using [F1] and excision gives $c_{3,x}(nu_x)=2n\delta_x$. Apply the generator equality in [F2] to obtain $\epsilon_{3,x}c_{3,x}(nu_x)=2nu_x$. This proves additivity of this supported $c_3$ as well; no general additivity of higher Chern operations is assumed. [F1, F2, F4]

1.2 The first global square is the one constructed in [F2]. For the edge square, the support-to-global maps of $F^3K$, its graded cofiber, and $K$ commute with the actual projection and augmentation. Since both supported and global $p_3$ are isomorphisms, their inverses commute on $\pi_0$ as well. Compose with stage augmentation to get precisely the edge equality of the statement. In particular $\iota_Ku_x=[i_*k(x)]$ lies in the third image filtration. [F2, F3]

1.3 For the nonpure case, [F4] gives $X=X_3\amalg Y$ with $x\in X_3$. Put $U=X\setminus\{x\}$ and $U_3=X_3\setminus\{x\}$, so $U=U_3\amalg Y$. All these schemes and opens are Noetherian, hence qcqs; $U_3$ need not be affine. Extension by zero from either clopen piece is exact on perfect complexes and identifies its perfect category with the supported category on that piece. The K-localization sequence in [F5] for $U_3\subseteq U$ is split by zero extension from $U_3$. Consequently actual restrictions give $K(U)\simeq K(U_3)\times K(Y)$. The derived sheaf and clopen descent in [F5] give the corresponding product of motivic complexes in each nonnegative weight. [F4, F5]

2.1 Starting at stage zero, the K-product of step 1.3 and the natural triangles of [F5] inductively give $F^jK(U)\simeq F^jK(U_3)\times F^jK(Y)$ for every $j\geq0$: the stage-$j$ and layer-$j$ product equivalences imply the stage-$(j+1)$ equivalence by taking fibers. These are restriction maps, compatible with transitions, graded comparisons and augmentations. Together with the products on $X$ in [F4], they identify restriction from $X$ to $U$ with the product of restriction from $X_3$ to $U_3$ and the identity on $Y$. Taking fibers therefore identifies the supported augmented towers at $x$ on $X$ and $X_3$; applying the same argument to the motivic-complex restrictions identifies their supported complexes. This supplies the claimed support identifications on the possibly nonaffine open. [F4, F5, step 1.3]

3.1 These restrictions preserve the residue objects and fundamental point classes. Apply steps 1.1–1.2 on the pure normal affine threefold $X_3$. The supported Chern operations and their support-to-global squares transport along step 2.1 by [F2]. Globally, the Chern operations are pointed and natural for restriction, so a zero-extended point class has zero Chern coordinate on $Y$. For the edge, the global $p_3$ maps on $X$ and $X_3$ are isomorphisms by [F3]. Given a motivic class with coordinates $(b_3,0)$, the stage class with coordinates $(p_{3,X_3}^{-1}b_3,0)$ maps to it by naturality of the stage projections and the product decompositions. Uniqueness of the inverse of $p_{3,X}$ identifies this as its inverse image; no isomorphism assertion on $Y$ is needed. Augmentation also preserves these coordinates. Thus both global squares and the supported identities extend from $X_3$ to $X$ exactly as stated. [F2, F3, F4, step 1.1, step 1.2, step 2.1]

4.1 Apply the two squares to $z=nu_x$ and its supported Chern image. In the pure case steps 1.1–1.2, and in the nonpure case step 3.1, give $\epsilon_3c_3(n[i_*k(x)])=\iota_K\epsilon_{3,x}c_{3,x}(nu_x)=2n[i_*k(x)]$. This applies a support-forgetting map to a supported equality and never cancels one, so it remains valid when the global point class vanishes. [step 1.1, step 1.2, step 3.1] ∎

For this proof repair, the current named supplier arguments and the direct point-factor proposition and third-Chern corollary were inspected. Elmanto–Morrow, arXiv:2309.08463v1, printed pp. 2–3, the opening of Theorem 1.1 and part (1), were read in primary PDF text for the qcqs prime-field domain, derived Nisnevich sheaves and natural graded filtration. Navarro, arXiv:1901.09337v1, Example 1.1, §§2.1–2.2, Theorem 2.3, Definition 2.4 and Theorem 3.1 with its proof, printed pp. 3–8, were read in primary PDF text for the current supported application and normalization. The deeper constructions, universal computations and coefficient-spectrum comparisons remain inputs of the existing suppliers; no reconstruction or fresh whole-supplier review is claimed. Their source-version and background-error qualifications are preserved. The exact coverage-resolution packet and genuine prior responses were inspected as proposals, without acceptance credit.

## Reading limits
For this proof repair, the current named supplier arguments and the direct point-factor proposition and third-Chern corollary were inspected. Elmanto–Morrow, arXiv:2309.08463v1, printed pp. 2–3, the opening of Theorem 1.1 and part (1), were read in primary PDF text for the qcqs prime-field domain, derived Nisnevich sheaves and natural graded filtration. Navarro, arXiv:1901.09337v1, Example 1.1, §§2.1–2.2, Theorem 2.3, Definition 2.4 and Theorem 3.1 with its proof, printed pp. 3–8, were read in primary PDF text for the current supported application and normalization. The deeper constructions, universal computations and coefficient-spectrum comparisons remain inputs of the existing suppliers; no reconstruction or fresh whole-supplier review is claimed. Their source-version and background-error qualifications are preserved. The exact coverage-resolution packet and genuine prior responses were inspected as proposals, without acceptance credit.
