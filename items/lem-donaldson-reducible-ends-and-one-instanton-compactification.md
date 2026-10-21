---
id: lem-donaldson-reducible-ends-and-one-instanton-compactification
kind: lemma
title: Reducible ends and compactification of the one-instanton moduli space
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-asd-moduli-fredholm-index-and-lattice-setup
  - def-axiom-of-choice
  - lem-asd-regularity-perturbation-and-orientability
  - lem-uhlenbeck-compactness-and-removable-singularities
  - lem-taubes-positive-definite-instanton-existence
  - lem-reducible-charge-one-su-two-connections-admit-controlled-projective-links
  - thm-taubes-small-instanton-gluing-and-compactified-end
  - lem-high-sobolev-coulomb-slices-for-irreducible-su-two-connections
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Simon K. Donaldson, An Application of Gauge Theory to the Topology of 4-Manifolds
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf
      locator: §§II.1–II.4 and III.3–III.4, printed pp. 287–294 and 302–315; reducible slices, spectral flow, and Taubes end
---

## Statement

Assume full AC. Let $X$ be a closed simply connected oriented smooth Riemannian four-manifold with positive-definite intersection form, and let $P\to X$ be an $SU(2)$ bundle with $c_2(P)[X]=-1$. Use the unbased $H^3/H^4$ quotient and the determinant-line orientation. There is a compatible perturbation procedure as follows: prepare the finitely many reducible circle-slice obstruction maps by arbitrarily small equivariant finite-rank smoothing perturbations, and make a further generic bounded smoothing perturbation on finitely many bounded irreducible slice collars in a middle region. The procedure is fixed near the prepared reducibles and vanishes on the entire small-instanton end. The further choices may be made arbitrarily small; they form a relatively open dense transverse class on the prescribed smaller middle collars.

The resulting regular irreducible zero set is an oriented five-manifold. Its ideal completion is compact, has one small-instanton boundary stratum identified with $X$, and has exactly the finitely many prepared reducible cone points, with no other strata. A neighborhood of each cone point is a cone on $\mathbb{CP}^2$. Delete smaller open cone neighborhoods and add the small-instanton boundary. The result is a smooth compact oriented five-manifold with boundary $X$ and one projective-plane link for each actual reducible orbit, with their induced orientations. Each projective link has one of the two complex-orientation signs; no common sign or numerical spectral-flow computation is asserted. The orientation on the component with the small-instanton end can be chosen so that this boundary is $X$ with its given orientation. The number of projective links is at most $b_2(X)$.

## Statement references

[Donaldson, *An Application of Gauge Theory to the Topology of 4-Manifolds*, §§II.1–II.4 and III.3–III.4](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/donaldson.pdf)

## Facts & Assumptions

[F1] The original equation, charge and unbased conventions are fixed by [[def-asd-moduli-fredholm-index-and-lattice-setup]].

[F2] The actual reducible classification, its bound by $b_2(X)$, and equivariant finite obstruction perturbations with local cone $\mathbb C^3/S^1$ are proved in [[lem-reducible-charge-one-su-two-connections-admit-controlled-projective-links]].

[F3] On finite bounded irreducible slice collars, bounded smoothing sections give open dense transversality and an oriented five-dimensional zero set. The proof applies around any fixed bounded smoothing section, using its actual compact zero-container and finite cokernel directions. [[lem-asd-regularity-perturbation-and-orientability]]

[F4] Unperturbed ideal compactness and the full inverse small-instanton collar, including exhaustion and uniqueness, are proved in [[lem-uhlenbeck-compactness-and-removable-singularities]] and [[thm-taubes-small-instanton-gluing-and-compactified-end]].

[F5] The high-order Coulomb Green estimate and compact $H^4\hookrightarrow H^3$ inclusion hold also at a reducible smooth center, after retaining its finite kernel term in the estimate. Full AC is inherited from the analytic and topological providers. [[lem-high-sobolev-coulomb-slices-for-irreducible-su-two-connections]] [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]] [[def-axiom-of-choice]]

## Proof

**Given:** The manifold, bundle, sign and quotient in the Statement, with full AC.

1.1 **Prepare precisely the actual reducibles.** Apply [F2] to their finite set and choose disjoint bounded invariant slice neighborhoods. Its constructed smoothing section $\sigma_r$ is supported in their union and vanishes at the central reducible points. On smaller neighborhoods its zeros are equivariant smooth graphs over $\mathbb C^3$; the punctured quotients are smooth oriented five-manifolds, and cutting their graph-radius gives projective links. There are no additional reducible solutions inside these slice neighborhoods: the stabilizer of a nearby orbit is a subgroup of the center's circle by the local slice construction; a reducible orbit must therefore be fixed by that circle. On its fixed diagonal subspace the equivariant off-diagonal perturbation is zero. The diagonal equation is the abelian self-dual equation, whose only local slice solution is the center because its $H^1$ is zero. Outside these neighborhoods the equation remains unperturbed, so [F2] lists all remaining reducibles. The construction is bounded and smooth into $H^3$ in these finitely many slices. [F1, F2, F5, given, construct, algebra]

2.1 **Compactness for this prepared equation and a genuine middle region.** The supports in step 1.1 are in bounded $H^3$ slice balls. For a zero in such a ball the equation $d_{A_i}^-a=-F_{A_i}^--(a\wedge a)^--\sigma_r(a)$ has bounded $H^3$ right side, since $H^3$ is an algebra and the section is uniformly $H^3$ bounded. Together with $d_{A_i}^*a=0$, the Green estimate [F5] bounds $a$ in $H^4$. Thus zeros there have compact $H^3$ closure, including along the edges of the support. Any sequence of zeros outside these balls is unperturbed, so [F4] supplies its smooth or ideal subsequence. The bounded balls cannot approach an ideal point: their curvature has a uniform $L^4$ bound from the $H^3$ bound, so its energy on a ball of volume tending to zero tends uniformly to zero by Holder. Therefore a sufficiently small whole ideal collar from [F4] misses all the supports. The prepared equation is literally unperturbed there, retaining its entire regular end. Delete a smaller portion of that collar and smaller reducible cone neighborhoods. The remaining zero set is compact and irreducible, by the two sequence arguments just given. Cover this compact set by finitely many bounded irreducible Coulomb-slice collars, avoiding the protected smaller end and cone neighborhoods, and choose larger/smaller radii as in [F3]. [F2, F3, F4, F5, step 1.1, construct, algebra]

3.1 **Relative middle transversality with all ends preserved.** Apply the finite-dimensional cokernel-direction and Sard proof of [F3] to $\Phi+\sigma_r$ on these middle collars, multiplying its new directions by bumps supported there. The fixed $\sigma_r$ is allowed in those charts: transition gauges on bounded chart sets have uniform $H^4$ bounds, and its original finite smooth target vectors and coordinate cutoffs consequently have uniformly bounded $H^3$ representatives. The derivative is a compact perturbation of the original Fredholm slice derivative, so its index remains five. The actual compact zero-container in [F3] and its positive-minimum argument exclude all new middle zeros outside the chosen smaller covering neighborhoods when the finite parameters are small. Around the protected cone and ideal collars the equation and its regularity remain exactly as in steps 1.1–2.1; on the compact transition overlaps, openness of surjectivity preserves their regularity. Thus a sufficiently small regular finite parameter makes every irreducible zero transverse. The same proof gives openness and density for all further allowed small middle sections. Both perturbations are zero outside the finite original and middle slice neighborhoods. For every resulting zero sequence in their union the same bounded-section $H^4$ estimate gives a converging $H^3$ subsequence; outside their union [F4] applies unchanged. This proves compactness of the full ideal completion and excludes any other ends, without applying an unperturbed compactness theorem to a nonzero perturbation. [F2, F3, F4, F5, step 1.1, step 2.1, construct, algebra]

4.1 **The actual smooth cut bordism.** The determinant line orients the transverse irreducible zero set by [F3], and its compact-derivative homotopy includes the fixed reducible preparation. At the ideal stratum, [F4]'s actual center-scale diffeomorphism and homeomorphic ideal extension provide a smooth collar $X\times[0,\lambda_0)$. At each reducible, [F2]'s graph-radius coordinate gives the smooth punctured cone collar $(0,\delta)\times\mathbb{CP}^2$. Delete its part of radius less than a smaller positive number. These finitely many collars are disjoint from each other and from the ideal collar. Step 3.1 makes the remaining interior compact up to the displayed collars, so the cut completion is a compact smooth five-manifold with exactly those boundary components. The induced boundary orientation on each projective link is its complex orientation or its negative. On the unique component meeting the connected ideal boundary choose the determinant orientation's global sign so this boundary orientation agrees with the given orientation of $X$; arbitrary other components cause no additional boundary strata. The number of links is exactly the number of actual reducibles, bounded by [F2]. This proves the compatible perturbation, compactified-strata and smooth cut-bordism assertions. [F2, F3, F4, step 1.1, step 2.1, step 3.1, construct, algebra] ∎

## Source notes

Donaldson's actual printed280–281, full reducible and perturbation argument on287–295, full end proof on300–311 and Appendix312–314 were read. Two necessary corrections to the original formalization are explicit: arbitrary regular perturbations need not preserve the prescribed end, and the raw compactification has reducible cone points rather than being a smooth manifold there. The controlled procedure and deleting cone neighborhoods give the actual source's smooth bordism. The source explicitly leaves its projective boundary signs undetermined at this stage; the induced determinant orientations suffice for the subsequent signature inequality, without fabricating a spectral-flow calculation.
