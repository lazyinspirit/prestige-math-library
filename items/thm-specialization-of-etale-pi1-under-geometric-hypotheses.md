---
id: thm-specialization-of-etale-pi1-under-geometric-hypotheses
kind: theorem
title: "Smooth proper specialization of the étale fundamental group"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - def-etale-fundamental-group-and-fibre-functor
  - thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets
  - thm-proper-smooth-complete-dvr-finite-etale-cover-equivalence
  - lem-smooth-proper-complete-dvr-geometric-generic-connectedness
  - thm-purity-of-branch-locus-for-finite-normal-covers
  - thm-finite-integral-closure-in-a-finite-separable-extension
  - lem-etale-specialization-trait-through-a-specialization
  - lem-etale-specialization-proper-geometric-finite-etale-invariance
  - lem-etale-specialization-geometric-basepoint-interface
  - lem-tame-dvr-inertia-and-abhyankar-ramification-killing
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "SGA 1, Exposé X §§2–3, Theorem 3.8 and Corollary 3.9"
      url: https://arxiv.org/pdf/math/0206203
    - title: "Stacks Project, Fundamental Groups of Schemes §§16 and 30, Lemma 16.4 and Theorem 30.3"
      url: https://stacks.math.columbia.edu/download/pione.pdf
---

## Statement

Assume AC. Let $S$ be locally Noetherian and $f:X\to S$ smooth and proper, with geometrically connected nonempty fibres. Properness includes finite type; over this base $f$ is also of finite presentation. Let $s_1$ generalize $s_0$, namely $s_0\in\overline{\{s_1\}}$. Choose algebraically closed extensions $\Omega_i/\kappa(s_i)$, geometric fibres $X_{\bar s_i}=X\times_S\operatorname{Spec}\Omega_i$, and geometric basepoints $\bar x_i$ on them. Choose a trait representing this specialization, algebraically closed field-comparison data and compatible fibre-functor paths. There is then a specialization homomorphism
$$\operatorname{sp}:\pi_1^{\mathrm{et}}(X_{\bar s_1},\bar x_1)\longrightarrow\pi_1^{\mathrm{et}}(X_{\bar s_0},\bar x_0).$$
It is surjective. If $\operatorname{char}\kappa(s_0)=0$, it is an isomorphism. If $\operatorname{char}\kappa(s_0)=p>0$, it induces an isomorphism on maximal prime-to-$p$ quotients, meaning the inverse limits of the finite continuous quotient groups of order prime to $p$. Changing a chosen basepoint path conjugates the resulting identification. Independence from unspecified geometric specialization data is not asserted. The homomorphism goes from the generalizing geometric fibre to the special geometric fibre.

## Facts & Assumptions

**Given:** AC and the complete data and hypotheses of the Statement.

[F1] A specialization of points on a locally Noetherian scheme is represented by a complete Noetherian DVR trait with algebraically closed residue field ([[lem-etale-specialization-trait-through-a-specialization]]). To compare its geometric generic fibre with the original $X_{\bar s_1}$, take a common algebraically closed overfield of its fraction field and $\Omega_1$ over $\kappa(s_1)$; do the same for its residue field and $\Omega_0$ over $\kappa(s_0)$. Such overfields exist because the tensor product of two field extensions over a field is nonzero, a prime quotient is a domain and its fraction field has an algebraic closure under AC. Proper smooth geometric-field invariance identifies their finite étale cover categories, including finite purely inseparable coefficient removal ([[lem-etale-specialization-proper-geometric-finite-etale-invariance]]). Transport chosen geometric basepoints through these comparisons and choose paths on the connected geometric fibres. The inverse-special-restriction/generic-pullback cover functor, its resulting generic-to-special homomorphism, path conjugacy and compatibility with same-residue trait extensions are [[lem-etale-specialization-geometric-basepoint-interface]]. For coincident points use the common geometric-field comparison and a basepoint path directly; it is an isomorphism.

[F2] Finite étale covers have the proved fibre-functor/profinite-set classification. Covers of a smooth proper family over a complete DVR are equivalent to covers of the closed fibre, and a connected closed-fibre cover remains connected on the geometric generic fibre, so specialization over that trait is surjective ([[def-etale-fundamental-group-and-fibre-functor]], [[thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets]], [[thm-proper-smooth-complete-dvr-finite-etale-cover-equivalence]], [[lem-smooth-proper-complete-dvr-geometric-generic-connectedness]]).

[F3] [[lem-tame-dvr-inertia-and-abhyankar-ramification-killing]] supplies the exact ramification input: for a finite Galois cover of the generic fibre, vertical DVR inertia is tame in residue characteristic zero, and is tame for groups of order prime to residue characteristic $p$. A further finite separable extension of the trait fraction field, with ramification index divisible by the finitely many tame inertia orders, makes the normalized cover unramified over the generic points of the special fibre. The normalized extension rings are complete DVRs, and their residue fields remain $k$ because $k$ is algebraically closed.

[F4] A normal Noetherian domain has finite integral closure in a finite separable generic extension. Purity makes a finite normal cover of a regular scheme étale if it is étale in codimension one ([[thm-finite-integral-closure-in-a-finite-separable-extension]], [[thm-purity-of-branch-locus-for-finite-normal-covers]]).

[F5] AC is retained ([[def-axiom-of-choice]]), with its exact inherited uses in [F1]–[F4] and the compactness use of the classification in [F2].

## Proof

1.1 Apply [F1] to reduce to a smooth proper trait family $X/R$ with algebraically closed residue field and geometric generic fibre $X_{\bar K}$. Choose the basepoint identifications in that reduction. The cover equivalence $\operatorname{FEt}(X)\simeq\operatorname{FEt}(X_k)$ of [F2] defines the specialization map by first pulling an extended special cover back to the geometric generic fibre; on fundamental groups this is the indicated generic-to-special direction. The connectedness assertion of [F2] proves surjectivity. If the two original points coincide, [F1] identifies it with a path isomorphism, already satisfying every conclusion. [F1, F2, construct]

2.1 Let $G$ be a finite group whose order is prime to $p=\operatorname{char}k>0$, or any finite group if $\operatorname{char}k=0$. A continuous homomorphism from $\pi_1(X_{\bar K})$ to $G$ is represented by a finite étale $G$-torsor via [F2]. It descends to $X_L$ for a finite separable extension $L/K$: the finitely many presentations, gluing maps, group-action maps and torsor identities on a finite affine cover and its intersections involve only finitely many coefficients. A finite purely inseparable part can be discarded by unique étale lifting along radicial field extensions, which is part of [F1]'s geometric-field invariance. Replace $R$ by its complete DVR normalization $R'$ in $L$, and normalize $X_{R'}$ in the generic torsor algebra. By [F4] that normalization is finite and normal. The total space $X_{R'}$ is regular, by the smooth-over-regular-base argument in [F2]'s proper-cover proof. The cover is already étale over the generic fibre; its only possible codimension-one ramification is vertical. [F1, F2, F3, F4, step 1.1, construct]

3.1 Apply [F3] to a further finite trait extension $R''/R'$ to kill that vertical tame ramification. Normalize again, using [F4]. The result is finite normal and étale at every codimension-one point: the horizontal ones lie over the generic fibre, and the vertical ones are unramified by [F3] and hence étale over their DVR bases. Purity in [F4] makes the whole cover finite étale over $X_{R''}$. Its $G$-action extends uniquely by normalization, and the torsor identity extends because both sides are finite étale covers and their morphism is an isomorphism on the dense generic fibre. By [F2], restriction to the closed fibre is an equivalence for both $X_R$ and $X_{R''}$; their common closed fibre is $X_k$. Hence this $G$-torsor is the pullback of one on $X_R$ determined by that closed torsor, and its geometric generic fibre is the original torsor. Thus every such homomorphism to $G$ factors through specialization (with the stated basepoint-path conventions). [F2, F3, F4, step 2.1, construct]

4.1 In characteristic zero, step 3.1 applies to every finite quotient of the profinite generic fundamental group. Its kernel under specialization lies in the intersection of the kernels of all finite quotient maps, which is trivial for a profinite group by [F2]. Together with surjectivity this proves the full isomorphism. In characteristic $p>0$, the same argument applies exactly to all finite quotients of order prime to $p$. Factorization in step 3.1 and surjectivity in step 1.1 identify the finite continuous prime-to-$p$ quotient systems of the generic and special groups, including their transition maps. Their inverse limits are therefore canonically isomorphic as profinite groups. Transporting this back through [F1] proves the complete original statement. The AC use is precisely [F5]. [F1, F2, F5, step 1.1, step 3.1] ∎
