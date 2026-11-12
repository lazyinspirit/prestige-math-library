---
id: lem-author-4f94f7982b0d-actual-orientation
kind: lemma
title: Actual EM orientation and projective bundle maps on that model
status: published
domain: mathematics
deps:
  - lem-author-4f94f7982b0d-em-p1-model
  - thm-author-4f94f7982b0d-em-graded-input
  - thm-author-4f94f7982b0d-p1-spectrum-input
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-field
  - math:def-scheme-over-base
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-smooth-morphism-schemes
  - math:def-locally-free-sheaf-finite-rank
  - math:def-projective-bundle-scheme
  - lem-adjudicate-a0c3ec58d5af-classical-smooth-site
  - lem-adjudicate-ac7b69b92374-zariski-coefficient-compactness
dependency_roles:
  lem-author-4f94f7982b0d-em-p1-model: mathematical-premise
  thm-author-4f94f7982b0d-em-graded-input: mathematical-premise
  thm-author-4f94f7982b0d-p1-spectrum-input: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:def-field: mathematical-premise
  math:def-scheme-over-base: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:def-smooth-morphism-schemes: mathematical-premise
  math:def-locally-free-sheaf-finite-rank: mathematical-premise
  math:def-projective-bundle-scheme: mathematical-premise
  lem-adjudicate-a0c3ec58d5af-classical-smooth-site: mathematical-premise
  lem-adjudicate-ac7b69b92374-zariski-coefficient-compactness: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 19
formulation_deps:
  - lem-author-4f94f7982b0d-em-p1-model
  - thm-author-4f94f7982b0d-em-graded-input
  - thm-author-4f94f7982b0d-p1-spectrum-input
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-field
  - math:def-scheme-over-base
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-smooth-morphism-schemes
  - math:def-locally-free-sheaf-finite-rank
  - math:def-projective-bundle-scheme
argument_deps:
  - lem-author-4f94f7982b0d-em-p1-model
  - thm-author-4f94f7982b0d-em-graded-input
  - thm-author-4f94f7982b0d-p1-spectrum-input
  - math:def-axiom-of-choice
  - math:def-grothendieck-universe-closure-convention
  - math:def-field
  - math:def-scheme-over-base
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:def-smooth-morphism-schemes
  - math:def-locally-free-sheaf-finite-rank
  - math:def-projective-bundle-scheme
  - lem-adjudicate-a0c3ec58d5af-classical-smooth-site
  - lem-adjudicate-ac7b69b92374-zariski-coefficient-compactness
---

## Statement
Assume the Axiom of Choice and the fixed compatible Grothendieck universes $U\in V\in W$, with $\omega\in U$, and site bounds of the supplied constructions. Let $k$ be a field and $S$ a qcqs classical $k$-scheme. Write $\mathrm{Sm}_S$ for the category of smooth $S$-schemes with qcqs underlying schemes and all $S$-morphisms, with the Zariski topology. An $S$-stack means a sheaf of spaces on this site. Use the supplied non-$\mathbb A^1$ homotopy-commutative ring-spectrum model $\mathcal E_S$. It carries a linear orientation whose first Chern class on every $Y\in\mathrm{Sm}_S$ is exactly the supplied EM class.

This orientation satisfies Annala–Iwasa's reduced projective bundle formula for every $\mathbb P^d_S$ with its coordinate basepoint, $d\geq1$, using powers $1,\ldots,d$. It also satisfies the unreduced bundle formula for every vector bundle $B$ of finite constant rank $r>0$ on an $S$-stack $X$, using powers $0,\ldots,r-1$, pullback along $\mathbb P_X(B)\to X$, and disjoint basepoints. Projectivization parametrizes line quotients and uses their tautological $\mathcal O(1)$. For $d=0$ the reduced formula is the empty equivalence; for $r=0$, use the empty sum and $\mathbb P_X(0)=\varnothing$. For a finite locally free bundle of varying rank the bundle formula holds on its clopen rank strata and glues by Zariski descent. The natural diagonal identifications $\mathcal E_S^{2i,i}(Y)\cong H^{2i,i}_{\rm mot}(Y,\mathbb Z)$, $i\geq0$, preserve the actual products, first Chern classes and projective-bundle maps.

## Statement references
[[lem-author-4f94f7982b0d-em-p1-model]]

[[thm-author-4f94f7982b0d-em-graded-input]]

[[thm-author-4f94f7982b0d-p1-spectrum-input]]

[[math:def-axiom-of-choice]]

[[math:def-grothendieck-universe-closure-convention]]

[[math:def-field]]

[[math:def-scheme-over-base]]

[[math:def-quasi-compact-and-quasi-separated-scheme]]

[[math:def-smooth-morphism-schemes]]

[[math:def-locally-free-sheaf-finite-rank]]

[[math:def-projective-bundle-scheme]]

[[lem-adjudicate-a0c3ec58d5af-classical-smooth-site]]

[[lem-adjudicate-ac7b69b92374-zariski-coefficient-compactness]]

## Facts & Assumptions
[A1] Assume [[math:def-axiom-of-choice]] and the universe convention [[math:def-grothendieck-universe-closure-convention]] with the bounds stated above. These are the inherited hypotheses of [[thm-author-4f94f7982b0d-em-graded-input]] and [[lem-author-4f94f7982b0d-em-p1-model]], retained throughout steps 1.1–3.1; existence of the stipulated universes is an assumption, not a consequence of Choice.

[F1] [[thm-author-4f94f7982b0d-em-graded-input]] supplies $C_n(Y)=\mathbb Z(n)_{\rm mot}(Y)$, $A_n(Y)=C_n(Y)[2n]$ as Eilenberg–Mac Lane spectra, and $A_n=C_n=0$ for $n<0$. It supplies the actual graded products, the pointed Picard-groupoid equivalence $\mathrm{Pic}(Y)\simeq\Omega^\infty(R\Gamma_{\rm Nis}(Y,\mathbb G_m)[1])$ on the small Nisnevich site, and the natural complex map $R\Gamma_{\rm Nis}(Y,\mathbb G_m)[-1]\to C_1(Y)$. Here $\mathrm{Pic}$ is the space of line bundles and their isomorphisms, pointed by the trivial line, rather than its discrete group of components. The supplier's cochain shift, Eilenberg–Mac Lane realization and trivialization at infinity define the actual pointed class $b=c_1(\mathcal O(1))$ and its class-power complex PBF. Its restriction along the prime subfield of $k$ applies on the stated site, also for singular $S$.

[F2] [[thm-author-4f94f7982b0d-p1-spectrum-input]] supplies the motivic category, pointed smash tensor, projective-line suspension $\Sigma_{\mathbb P^1}$, its inverse cotensor, and the orientation criterion: a pointed Picard class restricting to the suspended unit gives a right-module retraction $\mathrm{Pic}\otimes E\to\mathbb P^1\otimes E$. It supplies the reduced PBF and its conditional bundle extension on $S$-stacks. Use its multiplicative coefficient category $\mathrm{St}_S$ of ordinary Zariski sheaves of spaces, without hypercompletion, and its $\mathrm{St}_S$-action. The site identification and both compactness properties required for fundamental coefficient stabilization are supplied by [F4]–[F5]. Orientable spectra are fundamental; the supplied monoidal coefficient adjunction identifies the fundamental space and stable-coefficient models and their module operations. [[lem-author-4f94f7982b0d-em-p1-model]] supplies the actual model $\mathcal E_S$ and its stable-coefficient model $A$ with nonnegative levels $A_n$, bonding by $b$, and product-preserving diagonal identifications. The symbol $\Omega^\infty$ in [F1] is ordinary coefficient realization, distinct from projective-line level evaluation.

[F3] The formulation interfaces are [[math:def-field]], [[math:def-scheme-over-base]], [[math:def-quasi-compact-and-quasi-separated-scheme]], [[math:def-smooth-morphism-schemes]], [[math:def-locally-free-sheaf-finite-rank]] and [[math:def-projective-bundle-scheme]]. In particular, rank is locally constant and the projective bundle uses line quotients, with empty total space in rank zero. The stack and spectrum constructions, including cotensors and disjoint basepoints, are those supplied in [F2].

[F4] [[lem-adjudicate-a0c3ec58d5af-classical-smooth-site]] identifies this classical smooth qcqs site, with all $S$-morphisms, with the native derived smooth site of [F2] over the discrete classical base $S$. It preserves ordinary sheaves of spaces, the pointed Picard and bundle stacks, projective spaces and quotient bundles with their actual tautological lines, pointed tensors/cotensors, and both spectrum constructions. Transport the model and the EM coefficient functors along this identification; their values, products and pointed bonding classes on test schemes are unchanged.

[F5] [[lem-adjudicate-ac7b69b92374-zariski-coefficient-compactness]] proves that ordinary space-valued Zariski sheaves on this native smooth qcqs site have objectwise filtered colimits, compact representables generating under colimits, and projective-line cotensor preserving filtered colimits, including the reduced pointed cotensor. Its hypotheses are Choice, compatible universes and a qcqs native base, all satisfied by [A1] and [F4]. Via [F4] these statements hold for the exact coefficient category in [F2]. Thus compact generation and cotensor preservation are established here, not additional unproved assumptions on $S$.

## Proof
**Given:** The field $k$, qcqs $k$-scheme $S$, site and model of the Statement, and the Choice and universe assumptions and supplied interfaces [A1]–[F5].

**Goal:** Verify the actual orientation, reduced and bundle PBF, and compatibility with the diagonal identifications.

1.1 Use [F4] to identify the sites and all the pointed objects in the following construction. Shift the complex Chern map in [F1] by $2$ and apply $\Omega^\infty$. Composing with its pointed Picard-groupoid equivalence gives $\mathrm{Pic}\to\Omega^\infty A_1$ on this same smooth site, with the small-Nisnevich derived evaluation specified in [F1]. By the model's shift/evaluation rule, $\Omega^\infty A_1$ is projective-line level evaluation of $\Sigma_{\mathbb P^1}\mathcal E_S$. Multiplication therefore gives the module map $\mathrm{Pic}\otimes\mathcal E_S\to\mathbb P^1\otimes\mathcal E_S$ of [F2]. On $\mathcal O(1)$, with its specified trivialization at infinity, this is exactly the bonding class $b$. The unit followed by this bonding map is the suspended unit, so the composite with $[\mathcal O(1)]\otimes\mathrm{id}$ is the identity under the model's bonding equivalence. This is the required linear orientation. Its map on components is the original EM first Chern map by [F1]. [A1, F1, F2, F3, F4, construct]

2.1 For each $d\geq1$ and level $n\geq0$, shift the actual complex PBF in [F1] by $[2n]$. It becomes $A_n(\mathbb P^d_Y)\simeq\bigoplus_{i=0}^d A_{n-i}(Y)$, with the actual class-power components. Pullback along the coordinate section is the identity on the zeroth summand and zero on the positive summands, using the tautological trivialization and pointing in [F1]. Hence its reduced homotopy fiber is $\bigoplus_{i=1}^d A_{n-i}(Y)$. In particular, reduced projective-line cotensor of $A_n$ is $A_{n-1}$ for $n\geq1$, and is zero for $n=0$. Iterating this cotensor gives level $n$ of $\Sigma_{\mathbb P^1}^{-i}A$ as $A_{n-i}$ when $n\geq i$ and zero when $n<i$. Thus the reduced class-power PBF map of [F2] is an equivalence at every level, including all low-level boundary cases. The complex PBF is compatible with multiplication and $b$, so these are maps of the stable-coefficient motivic model, not just unrelated group isomorphisms. [A1, F1, F2, step 1.1]

3.1 The construction of step 1.1 also defines the same linear orientation on $A$ by the coefficient adjunction of [F2]. Both models are therefore fundamental. The qcqs base and ordinary-sheaf convention meet [F5], so its compact generation and projective-line cotensor preservation discharge both hypotheses of the fundamental stabilization equivalence in [F2]. Using the site identification of [F4], that equivalence, including its module compatibility, transports step 2.1 to the required reduced PBF for $\mathcal E_S$, with its actual tautological class. The conditional bundle formula in [F2] now applies to every positive constant rank on an $S$-stack, by its reduction to representables and Zariski descent; it uses line quotients, disjoint basepoints and the zeroth power as stated. For varying rank, the loci of each rank are clopen and cover the base, as is checked on test schemes by [F3]; applying these formulas there and the same descent gives the assertion. In rank zero, [F3] gives the empty projective bundle, whose disjoint-basepoint cotensor is zero, equal to the empty sum in the stable module category of [F2]. Pointed $\mathbb P^0_S$ is the pointed terminal object, so its reduced formula is likewise the empty equivalence. Finally, the model's diagonal identifications preserve the actual graded products and the class used in step 1.1, and consequently preserve all these class-power maps on $Y\in\mathrm{Sm}_S$. This proves the claimed compatibility without assuming affine-torsor detection or $\mathbb A^1$-invariance. [A1, F1, F2, F3, F4, F5, step 1.1, step 2.1] ∎
