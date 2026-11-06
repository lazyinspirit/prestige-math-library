---
id: lem-gts-elliptic-product-isogeny-and-restriction-order
kind: lemma
title: Elliptic product isogeny rescaling and restriction order
status: published
origin: pipeline
domain: mathematics
library: physics
axiom_use: ZF + AC
proof_strategy: direct
deps:
  - def-axiom-of-choice
  - def-gts-bridgeland-stability-condition-with-support-property
  - lem-gts-rational-elliptic-product-parameters-and-support
  - lem-gts-isotrivial-fibre-stability-restriction-from-torsion-invariance
  - lem-gts-compact-adjoint-induced-stability
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Chunyi Li, A remark on stability conditions on smooth projective varieties
      url: https://arxiv.org/pdf/2601.22994v1
      locator: Definition2.1, Lemmas2.2–2.3 and5.3, Proposition5.4; Sections 2–3 and 5–6 consulted for the present repair. The exact restricted uniqueness and branch supplier replaces the blanket injectivity used there.
pipeline_run: conformal-field-theory-string-theory-step3-fresh-2026-11-04
category: string-theory
dependency_level: 6
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-gts-bridgeland-stability-condition-with-support-property: mathematical-premise
  lem-gts-rational-elliptic-product-parameters-and-support: mathematical-premise
  lem-gts-isotrivial-fibre-stability-restriction-from-torsion-invariance: mathematical-premise
  lem-gts-compact-adjoint-induced-stability: mathematical-premise
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume AC and use the rational conditions $\sigma_{a,b}$ on the product $X=E^n$, finite-index intersection image lattice $\Lambda_n=\operatorname{im}(n!(c_I)_I)\subseteq\mathbb Z^{2^n}$, norm, and divisor $H=\sum_iH_i$ of the rational product-parameter lemma. For slicings put $\sigma\preceq\omega$ when $\mathcal P_\sigma(\theta)\subseteq\mathcal P_\omega(( -\infty,\theta])$ for all $\theta$, and $\sigma\prec\omega$ when the endpoint is strict. Intervals here mean finite HN extension closures. Write $\sigma\otimes L$ for transport by tensoring with the line $L$.

For every effective sum $D=\sum_{i,j}\{q_{ij}\}\times\prod_{k\ne i}E_k$ of factor point divisors, $\sigma_{a,b}\preceq\sigma_{a,b}\otimes\mathcal O(D)$. If $L$ has numerical first Chern class $H$, tensoring gives $\sigma_{a,b}\otimes L=\sigma_{a,b+1}$.

Let $\pi_m:X\to X$ be multiplication by $m\geq1$. Define $\pi_m^\sharp\sigma$ by inverse slicing along $\pi_{m*}$ and charge $Z\pi_{m*}$, and $(\pi_m)_\sharp\sigma$ by inverse slicing along $\pi_m^*$ and charge $Z\pi_m^*$. Both are locally finite support-property conditions, with their actual coimage lattices and inherited norms. They satisfy
$$\pi_m^\sharp\sigma_{a,b}=\sigma_{m^2a,m^2b},\qquad (\pi_m)_\sharp\sigma_{a,b}=m^{2n}\sigma_{a/m^2,b/m^2},$$
where a positive scalar changes only the charge. In particular these operations are inverse on these slicings and preserve $\preceq,\prec$ whenever their two inputs are defined.

For each integer $N\geq1$ there are rational $a>0,b$ such that
$$\sigma_{a,b}\otimes L^N\prec\sigma_{a,b}[1].$$
These conditions are invariant under factor reflections and permutations, and all skyscrapers are semistable of phase one, with the full finite-lattice norm support specified above.

## Statement references

[[lem-gts-rational-elliptic-product-parameters-and-support]]

[[lem-gts-compact-adjoint-induced-stability]]

## Facts & Assumptions

**Given:** The Statement's data, line-action convention and inverse-slicing conventions.

[F1] [[lem-gts-rational-elliptic-product-parameters-and-support]] supplies the rational family, its actual Pic0 and translation symmetries, semistable phase-one points, full intersection support, restricted HRS uniqueness, and its nearby rational branch identification.

[F2] [[lem-gts-isotrivial-fibre-stability-restriction-from-torsion-invariance]], proof1.1, supplies the support-over-finitely-many-base-points argument from actual invariance under all torsion lines of that base. It applies to HN factors of a factor-divisor-supported complex, whose slicing truncations commute with the flat-line action. No arbitrary restriction theorem is assumed.

[F3] [[lem-gts-compact-adjoint-induced-stability]] supplies inverse-image slicing along an exact conservative functor $F$ between the stated smooth-projective bounded categories, when the compact adjoint hypotheses and $FL(\mathcal P(\theta))\subseteq\mathcal P([\theta,\infty))$ hold. It supplies the HN triangles and support on the image of $vF$. For the isogeny, both adjunctions are finite flat and its relative dualizing line is trivial. Its compactness, bounded-reflection and adjoint hypotheses are checked below.

[F4] [[def-gts-bridgeland-stability-condition-with-support-property]] fixes the slicing and finite-HN conventions. [[def-axiom-of-choice]] is inherited from F1 and F3.

## Proof

**Given:** F1–F4.

1.1 The order calculus follows directly from HN and Hom vanishing. An inequality $\sigma\preceq\omega$ bounds the largest $\omega$ phase of every $\sigma$-semistable by its $\sigma$ phase. Applying this to the finitely many $\sigma$-HN factors bounds $\phi^+_\omega(E)\leq\phi^+_\sigma(E)$ for every $E$. Conversely testing semistables recovers the definition. Equivalently every $\omega$-semistable $E$ has $\phi_\omega(E)\leq\phi^-_\sigma(E)$: if its last $\sigma$-HN quotient had smaller phase, its $\omega$-phases would all be smaller, contradicting the nonzero last quotient map from $E$. The reverse implication follows by the dual first-HN-map argument. The strict forms follow with the same nonzero maps and finite strict maxima/minima. These characterizations prove transitivity, transitivity mixing one strict and one nonstrict inequality, and invariance under every exact autoequivalence. They also give the lower-phase bound for all objects by applying the second characterization to finite $\omega$-HN filtrations. [F4, algebra]

1.2 Multiplication by $m$ is the finite étale quotient by $K_m=X[m]$, of degree $d=m^{2n}$. Its trace pairing identifies its dualizing line with the trivial line: on local étale sheets the pairing is the sum of coordinate products. The two exact adjoint composites decompose as
$$\pi_m^*\pi_{m*}E\cong\bigoplus_{g\in K_m}g^*E,\qquad \pi_{m*}\pi_m^*E\cong\bigoplus_{\chi\in\widehat K_m}E\otimes L_\chi.$$
The first equality is finite étale base change along $X\times_{\pi_m,X,\pi_m}X=\coprod_g\operatorname{Gr}(g)$. For the second, decompose the finite étale algebra $\pi_{m*}\mathcal O_X$ by character projectors $d^{-1}\sum_g\chi(g)^{-1}g$; each eigensheaf has rank one, and its character power makes it torsion in Pic0. Both detecting functors are conservative, since each displayed composite contains the identity summand. For F3 take the ambient categories to be unbounded derived quasi-coherent complexes; coproducts and mapping telescopes are formed on complexes and preserve compatible triangles. On a smooth projective variety every bounded coherent complex is perfect; its finite locally free local models make it compact (global Hom is computed on a finite affine Cech cover), as in F1's compact-generator construction. Both functors preserve coproducts. Finite faithfully flat pullback reflects bounded coherence by faithfully flat descent of the finitely many coherent cohomology modules; finite pushforward reflects it because it is restriction of scalars along a finite algebra, and a module finite over the smaller ring is finite over the larger ring. Thus the bounded-reflection hypothesis holds in both directions. The left adjoint to the detecting $F=\pi_{m*}$ is $L=\pi_m^*$; the left adjoint to $F=\pi_m^*$ is $L=\pi_{m*}$ by the displayed finite-etale trace duality. F1 preserves all summands as slicings, so the two adjoint composites have exactly their original phases, verifying F3's required lower-phase condition in both directions. F3 now gives actual inverse-image conditions and their HN filtrations. Support is precisely the inherited bound on $\operatorname{im}(v\pi_{m*})$ or $\operatorname{im}(v\pi_m^*)$, not an assertion about an unproved larger lattice. [F1, F3, construct, algebra]

1.3 A line $L$ of numerical class $H$ gives $Z_{a,b}(E\otimes L^{-1})=Z_{a,b+1}(E)$. Transport preserves torsion-flat invariance and phase-one points, so restricted uniqueness identifies $\sigma_{a,b}\otimes L=\sigma_{a,b+1}$. The same proof works for integral powers and for any line numerically equivalent to them: their difference is in Pic0 on the product, and F1 gives actual invariance. This also shows that $\pi_m^*L$ and $L^{m^2}$ act identically on the slicing. [F1, algebra]

2.1 We prove the factor Bayer inequality for any actually base-Pic0-invariant condition, hence for F1's conditions. Write $i:D=\{q\}\times M\hookrightarrow C\times M$ and let $F$ be semistable of phase $\theta$. Its divisor triangle is $i_*Li^*F[-1]\to F(-D)\to F\to i_*Li^*F$. Let $G$ be the highest HN factor of $i_*Li^*F$. Every base-flat line fixes that whole object, so uniqueness of HN makes it fix $G$. F2's support argument puts $G$ over finitely many points of $C$; splitting into its disjoint-fibre-supported summands and projecting the HN filtration to any fibre other than $q$ would give an HN filtration of zero there. Thus $G$ is supported set-theoretically on $D$. The line $\mathcal O(D)$ is trivial on an open neighbourhood of $q$ in $C$, so it is trivial on this support and on its formal thickenings. Apply $\operatorname{Hom}(G,-)$ to $F\to i_*Li^*F\to F(-D)[1]$. The nonzero highest HN map yields a nonzero map $G\to F$ or $G\to F(-D)[1]$; the latter Hom group identifies with $\operatorname{Hom}(G,F[1])$ by that trivialization. Hence $\phi(G)\leq\theta+1$. The original triangle gives $\phi^+(F(-D))\leq\max(\theta,\phi(G)-1)\leq\theta$. Equivalently $\phi^+_{\sigma\otimes\mathcal O(D)}(F)\leq\theta$, proving $\sigma\preceq\sigma\otimes\mathcal O(D)$. This applies successively to point divisors on every factor; step1.1 gives all their effective sums. [F1, F2, F4, step 1.1, construct]

2.2 The induced conditions retain torsion-flat invariance. For the inverse slicing along $\pi_m^*$, projection against tensoring is literal. For that along $\pi_{m*}$, write a torsion line upstairs as $\pi_m^*M$ with $M$ torsion downstairs; this is possible because a finite character on the source lattice extends to the finite-index target lattice by choosing finite-order roots. Projection formula then proves invariance. Translations similarly commute with $\pi_{m*}$ and $\pi_m^*$ after choosing a translation lift under the surjective isogeny. Points in the $\pi_{m*}$ inverse slicing push to points; points in the $\pi_m^*$ inverse slicing pull to direct sums of reduced points. They are therefore semistable of phase one in both conditions; multiplying the charge by a positive number does not alter this phase. [F1, F3, step 1.2, algebra]

2.3 The operations are inverse on these slicings even before using their parameter formulas. For example $E$ lies in the inverse slicing detected by $\pi_{m*}\pi_m^*$ precisely when $\bigoplus_\chi E\otimes L_\chi$ lies in $\mathcal P(\theta)$. If $E$ lies there, every summand does by invariance. Conversely the identity summand belongs there because phase categories are closed under direct summands: its HN filtration would otherwise contribute a forbidden phase to the sum. The translation composite is identical. If $\sigma\preceq\omega$ and both inverse-image data are conditions, their HN filtrations are carried by the detecting exact functor to the ambient HN filtrations with the same ordered phases; conservativity keeps every nonzero factor nonzero. Applying the largest-phase characterization of step1.1 proves order preservation. Strict inequalities are preserved by the same finite maximum argument. [F1, F3, step 1.1, step 1.2, algebra]

3.1 In degree $2j$, multiplication by $m$ acts by $m^{2j}$, since it multiplies degree-one cohomology by $m$ and the cohomology ring is the exterior algebra of that of the elliptic factors. Trace/pullback gives the pushforward factor $m^{2n-2j}$. Thus expansion of the exponential gives
$$Z_{a,b}\pi_m^*=m^{2n}Z_{a/m^2,b/m^2},\qquad Z_{a,b}\pi_{m*}=Z_{m^2a,m^2b}.$$
These are also equalities on every intersection coordinate, so the charges factor through their precise coimage lattices. The restricted uniqueness of F1, with the actual invariance and point semistabilities proved in step2.2, identifies the entire slicings with the rational conditions in the Statement. This is the required global identification argument at these particular charges; equality of the displayed polynomials alone would not suffice. [F1, step 1.2, step 2.2, algebra]

4.1 Start with $\sigma_{1,0}$. By F1's branch identification there is $\epsilon>0$ such that the rational condition $\sigma_{1,\delta}$ has slicing distance less than one from it whenever $0<\delta<\epsilon$ is rational. Consequently $\sigma_{1,\delta}\prec\sigma_{1,0}[1]$: an object of the first slicing of phase $\theta$ has old largest phase strictly less than $\theta+1$, which is phase strictly less than $\theta$ for the shifted condition. Choose $m$ with $1/m^2<\epsilon$. Steps3.1 and1.3 identify
$$(\pi_m)_\sharp\bigl(\pi_m^\sharp\sigma_{1,0}\otimes L\bigr)=m^{2n}\sigma_{1,1/m^2}.$$
The positive scalar is irrelevant to this order. Apply $\pi_m^\sharp$ to this strict comparison and use step2.3 to obtain $\sigma_{m^2,0}\otimes L\prec\sigma_{m^2,0}[1]$. Every datum used here is a defined stability condition by steps1.2–1.3. [F1, step 3.1, step 2.3, step 1.3, construct]

5.1 Choose $k$ with $k^2\geq N$ and apply $\pi_k^\sharp$ to step4.1. Projection formula gives $\pi_k^\sharp(\tau\otimes L)=(\pi_k^\sharp\tau)\otimes\pi_k^*L$; its charge and slicing equalities are direct from the detecting functor $\pi_{k*}$. Hence $\sigma_{k^2m^2,0}\otimes L^{k^2}\prec\sigma_{k^2m^2,0}[1]$. Step2.1, applied repeatedly and transported by line powers, gives $\sigma\otimes L^N\preceq\sigma\otimes L^{k^2}$. Mixed transitivity yields the claimed restriction-$N$ inequality, with explicit possible parameters $(a,b)=(k^2m^2,0)$. The factor reflections/permutations, point phases and finite-lattice support are exactly F1's actual conclusions and are retained by these choices. [F1, step 1.1, step 2.1, step 3.1, step 2.3, step 1.3, step 4.1, algebra] ∎
