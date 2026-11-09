---
id: lem-author-d026a7b99ace-actual-edge
kind: lemma
title: The actual supported third edge sends the positive point class to its
  residue object
status: published
domain: mathematics
deps:
  - lem-author-d026a7b99ace-positive-coordinates
  - thm-author-16f30f6b95cb-supported-slice-positive-cycle-input
  - thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison
  - lem-author-16f30f6b95cb-augmented-filtered-support-transport
  - def-motivic-filtration
  - def-third-edge-map
  - math:def-axiom-of-choice
  - lem-smooth-point-motivic-purity
  - prop-motivic-graded-spectral-sequence
  - lem-filtered-support-exactness
  - def-cohomology-with-support
dependency_roles:
  lem-author-d026a7b99ace-positive-coordinates: mathematical-premise
  thm-author-16f30f6b95cb-supported-slice-positive-cycle-input: mathematical-premise
  thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison: mathematical-premise
  lem-author-16f30f6b95cb-augmented-filtered-support-transport: mathematical-premise
  def-motivic-filtration: mathematical-premise
  def-third-edge-map: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-smooth-point-motivic-purity: mathematical-premise
  prop-motivic-graded-spectral-sequence: mathematical-premise
  lem-filtered-support-exactness: mathematical-premise
  def-cohomology-with-support: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 22
sources:
  references:
    - title: Kahn and Levine, Motives of Azumaya algebras, published final, JIMJ 9
        (2010), 481–599
      url: https://webusers.imj-prg.fr/~bruno.kahn/preprints/Azumaya-final.pdf
      locator: Notation p.487; Lemmas 2.3.1–2.3.2 pp.499–500; Definition 3.1.5 p.503;
        §5.9 pp.531–532 before Lemma 5.9.1; Lemma 6.2.1 p.535.
      statement: Codimension-at-least-q support gives the stage-q augmentation
        equivalence; the leading map uses its inverse. Ordinary field K0 uses
        dimension.
      hypotheses: Perfect base; smooth quasi-projective finite-type ambient; closed
        support. Apply with q=3 and W the closed point in the smooth affine
        threefold V.
      reading_limits: This round read these statements and definitions, the
        coefficient passage and Lemma 6.2.1 generic-restriction construction in
        the primary PDF text. The deeper comparison proofs remain imported
        through the existing supplier; no whole-paper reading or reconstruction
        is claimed.
    - title: Levine, The homotopy coniveau tower, arXiv:math/0510334v1 (2005)
      url: https://arxiv.org/pdf/math/0510334v1
      locator: §8.3 pp.46–47 through (8.3.1); Theorem 9.0.3 and Remark 9.0.4 p.47.
      statement: Over a perfect field, the augmentation-adjoint
        stable-coniveau-to-slice comparison is an isomorphism.
      hypotheses: Use the KGL realization and its coherent augmented tower as
        specified by the existing supported-slice supplier.
      reading_limits: Read the §8.3 opening construction through (8.3.1), Theorem
        9.0.3 statement and Remark 9.0.4 in v1 PDF text. The §9.1 proof was not
        reconstructed; no reading of the published 2008 version is claimed.
    - title: Elmanto and Morrow, Motivic cohomology of equicharacteristic schemes,
        arXiv:2309.08463v1
      url: https://arxiv.org/html/2309.08463v1
      locator: Remark 3.6; Construction 4.36; Theorem 6.1(2), Remark 6.3, Corollary
        6.4 and footnote 12.
      statement: Construction 4.36 is a filtered equivalence on regular Noetherian
        prime-field schemes. Remark 3.6 states the cdh-KH/slice comparison.
      hypotheses: Both V and V minus x are regular Noetherian over the prime field of
        k; smoothness over that prime field is not required here.
      reading_limits: Read these displayed statements, Construction 4.36, Remark 3.6,
        Remark 6.3 and the Corollary 6.4 proof/footnote in v1 HTML. The
        arbitrary-field bridge is attributed to then-in-preparation [7], whose
        proof was not read or reconstructed.
---

## Statement
Assume the Axiom of Choice and the fixed site and universe bounds of the motivic and support constructions. Let $k$ be algebraically closed of arbitrary characteristic, let $X$ be a finite-type $k$-scheme of pure dimension three, and let $x$ be a smooth closed point. Let $i:\operatorname{Spec}k(x)\hookrightarrow X$ be the closed immersion. Write $u_x=[i_*k(x)]\in K_{0,x}(X)$ and let $\delta_x\in H^{6,3}_x(X,\mathbb Z)$ be the positive fundamental point-cycle class. Put $F^3_xK(X)=\operatorname{fib}(F^3_{\mathrm{mot}}K(X)\to F^3_{\mathrm{mot}}K(X\setminus\{x\}))$, and define $K_x(X)$ by the analogous restriction fiber of $K$. For this pair, the actual stage augmentation $a_{3,x}:F^3_xK(X)\to K_x(X)$ is an equivalence and its stage-to-layer map induces an isomorphism $p_{3,x}:\pi_0F^3_xK(X)\to H^{6,3}_x(X,\mathbb Z)$. The supported edge $\epsilon_{3,x}=\pi_0a_{3,x}\circ p_{3,x}^{-1}$ satisfies $\epsilon_{3,x}(\delta_x)=u_x$. It is the inverse of the actual inverse-augmentation leading projection, not an independent group identification.

## Facts & Assumptions
[F1] [[thm-author-16f30f6b95cb-supported-slice-positive-cycle-input]] is explicitly a codimension-$q$ theorem. For a smooth affine neighbourhood $V$, integral support $\{x\}$ and $q=3$, its leading map is stage augmentation inverse followed by slice projection, with coefficient $K_0^x(V)\to G_0(x)\to K_0(k(x))\xrightarrow{\dim}\mathbb Z$.

[F2] [[thm-author-16f30f6b95cb-lowweight-augmented-slice-comparison]] and [[lem-author-16f30f6b95cb-augmented-filtered-support-transport]] identify the actual EM augmented tower and its support projections with that classical tower on smooth pairs. [[lem-author-d026a7b99ace-positive-coordinates]] fixes both current coordinates and their excision equivalences. For arbitrary $k$, the tower bridge uses the regular-Noetherian comparison of EM Theorem 6.1(2)/Remark 6.3 and the stated slice identification of Remark 3.6; that identification is explicitly attributed in v1 to then-in-preparation [7], whose proof is not reconstructed here.

[F3] [[math:def-axiom-of-choice]] is the inherited assumption used by the positive-coordinate supplier and by the perfect-K and motivic constructions in [[def-motivic-filtration]]. The fixed size bounds are those of these constructions; the edge notation agrees with [[def-third-edge-map]].

[F4] [[lem-smooth-point-motivic-purity]] gives $H^{a,j}_x(Y,\mathbb Z)=0$ for every integer $a$ and $0\leq j<3$ for each pure-three-dimensional pair used here, including $Y=X$ and the smooth affine neighbourhood $Y=V$. [[prop-motivic-graded-spectral-sequence]] supplies the actual natural graded triangles. [[lem-filtered-support-exactness]] identifies their restriction fibers as the supported graded triangles. [[def-cohomology-with-support]] fixes the actual support model and $\pi_n\operatorname{gr}^j_xK=H^{2j-n,j}_x$. These assertions use the same Choice and compatible size premises as [F3].


**Given:** The stated finite-type pure threefold, smooth closed point, algebraically closed and hence perfect field, Axiom of Choice, and fixed site and universe bounds.

**Goal:** Identify the actual supported augmentation and edge on X before transporting the local positive generator.

## Proof
1.1 The finite-type schemes and their open complements are noetherian and qcqs, so [F4] applies to the actual restricted tower on $X$. For $j=0,1,2$ and every $n\in\mathbb Z$, it gives $\pi_n\operatorname{gr}^j_xK(X)=H^{2j-n,j}_x(X,\mathbb Z)=0$. A spectrum with all homotopy groups zero is zero. Thus the three supported graded triangles make $F^3_xK(X)\to F^2_xK(X)\to F^1_xK(X)\to F^0_xK(X)$ equivalences. Stage zero is $K_x(X)$ by the actual stage-zero identifications on $X$ and its complement. Their composite is exactly $a_{3,x}$, so this augmentation is an equivalence on the possibly singular ambient X. [F3, F4, given]

2.1 Choose the smooth affine pure-three-dimensional finite-type neighbourhood $V$ of $x$ from [F2]. The same argument as step 1.1 gives the actual stage-three augmentation equivalence on $V$. The local ring at $x$ is regular of dimension three, so its point support is integral of codimension three; $V$ is quasi-projective over the perfect field. Apply [F1] at $q=3$ and transport through the actual augmented comparison in [F2]. Its resulting inverse-augmentation leading map $\psi_{x,V}:K_{0,x}(V)\to H^{6,3}_x(V)$ is an isomorphism taking the positive residue class to the positive point cycle. Its domain, projection and sign are the specified actual maps. [F1, F2, F4, step 1.1]

3.1 Restriction from $X$ to $V$ commutes with augmentations and stage-to-layer maps by the actual natural triangles and support construction in [F4]. The K-support and motivic-support restrictions are equivalences by [F2]. Because both stage-three augmentations are equivalences by steps 1.1 and 2.1, their commuting square also makes the stage-three support restriction an equivalence. Consequently the leading map $\psi_{x,X}=p_{3,x}(\pi_0a_{3,x})^{-1}$ is identified by the actual support restrictions with $\psi_{x,V}$. It is therefore an isomorphism taking $u_x$ to $\delta_x$, with the generators transported by [F2]. This establishes the global supported normalization without inferring stage excision merely from K-theory excision. [F2, F4, step 1.1, step 2.1]

4.1 Since $a_{3,x}$ is an equivalence and $\psi_{x,X}$ is an isomorphism, the equality $p_{3,x}=\psi_{x,X}\pi_0a_{3,x}$ makes $p_{3,x}$ an isomorphism. Inverting this equality gives $\epsilon_{3,x}=\pi_0a_{3,x}\,p_{3,x}^{-1}=\psi_{x,X}^{-1}$ and hence $\epsilon_{3,x}(\delta_x)=u_x$. These are the actual augmented tower maps, consistent with the supported version of the global edge notation in [F3]. [F3, step 1.1, step 3.1] ∎

The Statement is unchanged. Lower-weight point purity supplies the actual stage-three augmentation equivalence on X; the local slice normalization is then transported through the resulting commuting restriction diagrams. The two direct consumers were inspected and use precisely this same edge and generator. Existing source-version qualifications in [F2], including EM v1 Remark 3.6, remain binding. No fresh reconstruction or independent acceptance of the imported slice or purity inputs is asserted.

## Maintenance scope
The Statement is unchanged. Lower-weight point purity supplies the actual stage-three augmentation equivalence on X; the local slice normalization is then transported through the resulting commuting restriction diagrams. The two direct consumers were inspected and use precisely this same edge and generator. Existing source-version qualifications in [F2], including EM v1 Remark 3.6, remain binding. No fresh reconstruction or independent acceptance of the imported slice or purity inputs is asserted.
