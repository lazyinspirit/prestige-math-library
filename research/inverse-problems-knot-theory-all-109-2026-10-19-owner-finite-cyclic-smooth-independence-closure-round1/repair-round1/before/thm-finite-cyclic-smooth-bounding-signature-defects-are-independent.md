---
id: thm-finite-cyclic-smooth-bounding-signature-defects-are-independent
kind: theorem
title: Finite cyclic smooth bounding signature defects are independent
status: draft
origin: session
deps: [thm-compact-twisted-signature-operators-give-additive-bundle-indices, lem-finite-cyclic-von-neumann-signatures-are-character-averages, lem-signature-additivity-under-gluing, thm-canonical-finite-cyclic-knot-defects-equal-seifert-signature-averages, thm-universal-cover-existence, thm-deck-group-of-a-universal-cover-is-the-fundamental-group, thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations, thm-seifert-van-kampen]
proof_strategy: direct
axiom_use: "The standing full AC convention is retained. All index arguments concern compact closed smooth manifolds and finite cyclic covers; the gluing uses the actual entire-boundary smooth additivity supplier. No nonsmooth TOP extension or arbitrary-group index theorem is asserted."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Cochran, Orr and Teichner, Structure in the classical knot concordance group
      url: https://arxiv.org/pdf/math/0206059
      locator: "Appendix5 finite cyclic signature formula; the particular smooth bordism-independence argument here uses the preceding finite-order bundle index proof rather than importing a general L2 index theorem."
---

## Statement

Assume AC and let $G=\mathbb Z/d$ for any positive integer $d$. For every compact closed oriented smooth four-manifold $X$ and homomorphism $\psi:\pi_1(X)\to G$ (componentwise if needed),
$$\operatorname{sign}^{(2)}_G(X,\psi)=\operatorname{sign}(X).$$
Surjectivity is not required.

Let $M$ be a closed connected oriented smooth three-manifold and $\phi:\pi_1(M)\to G$. Suppose $(W_i,\psi_i)$, $i=0,1$, are compact connected oriented smooth four-manifolds with their entire boundary identified with $M$, supplied smooth collars, and coefficient homomorphisms extending the same based $\phi$. Then
$$\operatorname{sign}^{(2)}_G(W_0,\psi_0)-\operatorname{sign}(W_0)=\operatorname{sign}^{(2)}_G(W_1,\psi_1)-\operatorname{sign}(W_1).$$
Whenever such a smooth extension exists, denote this common value by $\rho^{\mathrm{sm}}_d(M,\phi)$. In particular, for the actual zero surgery of every finite smooth oriented disk-band knot with its supplied first-variable positive-push matrix $V$ and positive meridional map $\phi_d$,
$$\rho^{\mathrm{sm}}_d(M_K,\phi_d)=\frac1d\sum_{r=0}^{d-1}\operatorname{sign}\bigl((1-\zeta_d^r)V+(1-\zeta_d^{-r})V^T\bigr),\qquad\zeta_d=e^{2\pi i/d}.$$
All singular character forms, the zero trivial-character term, $d=1$ and even $d$ are included.

These assertions establish independence among the indicated **smooth** bounding extensions. They assert neither existence of such an extension for every pair $(M,\phi)$, identification with an analytic eta invariant, independence from nonsmooth TOP bounding manifolds, an infinite-cyclic average nor a closed-index assertion for arbitrary groups.

## Facts & Assumptions

**Given:** The finite cyclic group and actual smooth geometric and coefficient data above.

[F1] Compact twisted signature operators define an integer-valued additive smooth bundle index. Every actual finite-character line has finite tensor order, so its index is the untwisted signature; the Hodge/chirality calculation identifies that index with its actual character intersection signature. [[thm-compact-twisted-signature-operators-give-additive-bundle-indices]]

[F2] The finite cyclic regular algebra splits by its explicit Fourier idempotents, each of trace $1/d$; for surjective coefficient maps the actual finite-cover signature is the sum of character signatures and its von Neumann signature is their normalized mean, including radicals. The finite algebra calculation, extended explicitly to possibly disconnected covers below, is what is used for nonsurjective maps. [[lem-finite-cyclic-von-neumann-signatures-are-character-averages]]

[F3] For compact oriented smooth four-manifolds glued along their common entire boundary and matching coefficient homomorphisms, ordinary and $L^2$ signatures subtract under $W_0\cup_M(-W_1)$, with the stated convention. [[lem-signature-additivity-under-gluing]]

[F4] The actual finite disk-band construction bounds the oriented zero surgery with the extending positive meridian map, and its canonical defect equals the displayed first-push signature average for every $d$. [[thm-canonical-finite-cyclic-knot-defects-equal-seifert-signature-averages]]

[F5] Smooth manifolds have universal covers by the path-class construction, since their coordinate balls are simply connected. Compact smooth manifolds have finite boundary-compatible triangulations. Matching homomorphisms glue by Van Kampen. [[thm-universal-cover-existence]] The universal deck group is the fundamental group with its stated traversal convention. [[thm-deck-group-of-a-universal-cover-is-the-fundamental-group]] [[thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations]] [[thm-seifert-van-kampen]]

## Proof

1.1 First take $X$ connected. The homomorphism $\psi$ gives an actual finite principal $G$-cover, even if its image is proper: form $(\widetilde X\times G)/\pi_1(X)$ using the action $\gamma\cdot(x,g)=(\gamma x,\psi(\gamma)g)$, which is an action since $G$ is abelian, and retain right translation on the $G$ factor as the specified free fiber-transitive deck action. Over any simply connected coordinate ball choose one universal sheet; the quotient is that ball times the finite set $G$. These local identifications have locally constant sheet permutations, so define the smooth covering structure and orientation. At a chosen basepoint the lift of a loop $\gamma$ ends at $[\gamma\widetilde x,g]=[\widetilde x,\psi(\gamma)g]$, so this is the actual prescribed monodromy rather than its inverse. Its degree is exactly $d$, and its total space may be disconnected. It is compact by finitely many compact lift closures of smaller evenly covered charts. Pull back a Riemannian metric. By [F5] the base pair, and therefore its finite cover, have actual finite cellular complexes. Thus every Hilbert-module complex in [F2] is simply finite-dimensional in this application. A compact disconnected $X$ has finitely many components (its connected coordinate charts have a finite covering subfamily), so the subsequent construction applies on each and signatures add. [F5, given, construct]

2.1 Apply the projections $e_r=d^{-1}\sum_{k=0}^{d-1}\zeta_d^{-rk}t^k$ to the finite regular complex of step1.1. Their orthogonality, sum one and traces $1/d$ are the finite geometric-sum identities in [F2]; none uses surjectivity. Kernels, images and middle homology split literally by these projections, and every image is closed. Sesquilinearity makes different components orthogonal, so the positive and negative projections have trace $d^{-1}$ times the sum of their component ranks; the same statement holds after removing each component's radical. This proves the character-mean formula also for the actual possibly disconnected principal cover, without silently applying [F2]'s surjectivity hypothesis in a larger scope. Each character block is the one computed by [F1] on this actual finite cover, with a positive covering normalization. It has signature $\operatorname{sign}(X)$. If the cohomology pullback convention in [F1] reverses a character, all characters are still included and complex conjugation preserves each inertia count. The normalized sum of these $d$ identical integers is $\operatorname{sign}(X)$, proving the closed-index equality for every $\psi$. This step used only finite cyclic character lines; no approximation or general-group closed-index theorem is involved. [F1, F2, step 1.1, algebra]

3.1 For the bounding data, use their supplied collars to form the closed smooth oriented manifold $X=W_0\cup_M(-W_1)$. The coefficient homomorphisms agree on the common based boundary group, so [F5] gives the actual glued homomorphism $\psi:\pi_1(X)\to G$. The intersection is the connected full boundary collar; no injectivity of its group maps is required. Apply [F3] in precisely its smooth entire-boundary scope. It says $\operatorname{sign}^{(2)}_G(X,\psi)=\operatorname{sign}^{(2)}_G(W_0,\psi_0)-\operatorname{sign}^{(2)}_G(W_1,\psi_1)$ and $\operatorname{sign}(X)=\operatorname{sign}(W_0)-\operatorname{sign}(W_1)$. Step2.1 identifies the two left sides. Rearranging gives the asserted equality of defects, without any surjectivity restriction on the boundary map or extensions. Hence the value is well-defined among all the supplied smooth extensions whenever at least one exists. [F3, F5, step 2.1, construct, algebra]

4.1 For the knot data, [F4] supplies an actual smooth bounding extension with the exact oriented zero-surgery boundary and positive meridional coefficient homomorphism. Thus the smooth common value of step3.1 exists, and evaluation on this particular extension is [F4]'s displayed average. Its proof treats nontrivial roots directly even when the Alexander form is singular, and treats the trivial character by a separate ordinary metabolic calculation; no invalid specialization at $t=1$ is introduced here. The convention is $\operatorname{sign}^{(2)}-\operatorname{sign}$ throughout. The construction and equality now justify the indicated smooth finite-cyclic rho notation, but they do not compare it with a defect from a nonsmooth TOP bounding manifold or with an eta definition. All broader analytic and topological independence obligations remain separate. [F4, step 3.1, algebra] ∎
