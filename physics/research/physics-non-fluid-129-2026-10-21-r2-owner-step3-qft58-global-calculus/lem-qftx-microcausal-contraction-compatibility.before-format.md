---
id: lem-qftx-microcausal-contraction-compatibility
kind: lemma
title: "Canonical compatibility of microcausal cross contractions and smooth self contractions"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-countable-choice
  - def-qftx-polynomial-microcausal-functionals
  - def-qftx-wavefront-hadamard
  - lem-qftx-global-microlocal-pullback
  - thm-qftx-wavefront-product
  - thm-local-finite-order-characterization-of-distributions
  - thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier
  - thm-fourier-inversion-on-schwartz-space
  - lem-schwartz-parameter-pairing-and-integral-interchange
  - thm-tensor-product-distributions-and-iterated-pairings
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-dominated-convergence
  - lem-test-function-cutoffs-and-euclidean-localization
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-polynomial-microcausal-functionals: mathematical-premise
  def-qftx-wavefront-hadamard: mathematical-premise
  lem-qftx-global-microlocal-pullback: mathematical-premise
  thm-qftx-wavefront-product: mathematical-premise
  thm-local-finite-order-characterization-of-distributions: mathematical-premise
  thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier: mathematical-premise
  thm-fourier-inversion-on-schwartz-space: mathematical-premise
  lem-schwartz-parameter-pairing-and-integral-interchange: mathematical-premise
  thm-tensor-product-distributions-and-iterated-pairings: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  lem-test-function-cutoffs-and-euclidean-localization: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory"
      url: "https://arxiv.org/pdf/1208.1428"
      locator: "Section5, PDF pp.21\u201323, equations52\u201365, microcausal cone condition and normal-ordering conventions. Retrieved complete42-page PDF and read these pages; the finite singular-cross/smooth-self matching construction and compatibility proof are local, not imported from the regular-functional formulas."
verification:
  precheck: pending
---

## Statement

Assume Countable Choice and use the globally hyperbolic Lorentzian manifold, density $\mu_g$ and positive-frequency Hadamard relation of [[def-qftx-wavefront-hadamard]]. Let $a\in\mathcal E'(M^p)$ and $b\in\mathcal E'(M^q)$, $p,q\ge0$, be polynomial coefficient kernels whose nonzero wavefront tuples avoid the all-future and all-past causal cones, with zero entries allowed in those cones. Degree-zero kernels are scalars. Label their slots by two distinct original blocks, $A$ and $B$.

Take a finite matching of some of the $p+q$ labelled slots: each slot belongs to at most one edge. Each singular edge joins one slot of $A$ to one slot of $B$, in that order, and has kernel $W$ with $\operatorname{WF}(W)\subseteq\mathcal C_g^+$. Every other edge has a smooth kernel on $M^2$; such an edge may join two slots within either original block or cross between the blocks. No symmetry of these smooth kernels is required for the construction. Multiply $a\otimes b$ by these pulled-back edge kernels and integrate each matched variable against $\mu_g$, retaining the unmatched slots as output variables.

This prescription gives a canonical compactly supported distribution on the unmatched slots. All products and intermediate integrations required by any ordering of these edge contractions are admissible and give the same result as the simultaneous prescription. Here an edge contraction removes its two distinct labelled original slots; no operation duplicates an original coefficient kernel or contracts a removed slot again. The conclusion also includes first contracting smooth edges in each input and then making cross-block singular contractions. The output kernel again avoids the two microcausal cones. Permuting labelled slots or differentiating a finite polynomial functional in external smooth directions gives the corresponding permutation or finite Leibniz expansion of these same kernels.

Consequently all coefficientwise rearrangements of cross-factor $D_W$ contractions and smooth $\Gamma_K$ contractions used in the Hadamard-change formula are canonical on compactly supported polynomial microcausal functionals. This statement does not define a self-contraction $\Gamma_W$ on that class: a mixed future/past wavefront tuple of an individual coefficient need not be transverse to a singular two-point kernel.

## Statement references

[[def-qftx-polynomial-microcausal-functionals]]

[[def-qftx-wavefront-hadamard]]

[[thm-qftx-wavefront-product]]

## Facts & Assumptions

**Given:** The two original coefficient blocks, disjoint labelled matching, compact supports, and singular-cross/smooth-edge restrictions in the Statement.

[A1] Assume Countable Choice only. [[def-countable-choice]]

[F1] Microcausal polynomial derivative kernels have compact support and avoid the closed all-future and all-past cones, including their zero entries. Their coefficient kernels have the same property: evaluating $F^{(r)}(0)$ extracts $r!f_r$. [[def-qftx-polynomial-microcausal-functionals]]

[F2] Each nonzero Hadamard wavefront pair has a future-null covector in the first slot and a past-null covector in the second. The metric density is smooth and positive. [[def-qftx-wavefront-hadamard]]

[F3] Global microlocal pullback, smooth approximation with explicit common finite-order and regular-cone bounds, coordinate invariance, localization and controlled sequential limits are proved locally. [[lem-qftx-global-microlocal-pullback]]

[F4] The binary product is diagonal pullback with its wavefront sum bound; compact coordinate pushforward has the zero-vertical-covector wavefront bound. [[thm-qftx-wavefront-product]]

[F5] Compact distributions have finite order and polynomial Fourier bounds; Fourier inversion and seminorm-dominated distribution parameter pairing hold with the displayed $2\pi$ convention. [[thm-local-finite-order-characterization-of-distributions]] [[thm-fourier-transform-of-a-compactly-supported-distribution-is-a-smooth-polynomially-bounded-multiplier]] [[thm-fourier-inversion-on-schwartz-space]] [[lem-schwartz-parameter-pairing-and-integral-interchange]]

[F6] Independent tensor-distribution pairings associate. Absolutely integrable scalar Fubini and dominated convergence hold. [[thm-tensor-product-distributions-and-iterated-pairings]] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]] [[thm-dominated-convergence]]

[F7] Compact chart subsets admit smooth support cutoffs. [[lem-test-function-cutoffs-and-euclidean-localization]]

## Proof

**Given:** [A1] and [F1]–[F7].

1.1 We prove the finite-family product estimate needed for compatibility; pairwise criteria alone will not be substituted for it. The empty family has ordinary product one. In a zero-dimensional configuration chart all local distributions are scalars, so products and integrations are finite scalar operations; the following frequency argument is for $s,d\ge1$. Let $v_1,\ldots,v_s$ be localized distributions on one $d$-dimensional chart, and suppose that no tuple $\eta_j\in\Gamma_j\cup\{0\}$, not all zero, has $\sum_j\eta_j=0$, where the closed cones $\Gamma_j$ contain their wavefront directions over the compact base patch. If every $\Gamma_j$ is empty, all factors are smooth by [F3]; take $G_j=\varnothing$ and $c=1$. Every tuple of total size $R>0$ then has a regular factor of size at least $R/s$, so the first alternative below applies, and no minimum over an empty permitted set is taken. Otherwise, on $\sum_j|\eta_j|=1$ the permitted tuples form a nonempty compact set, so the norm of the sum has a positive minimum $c$. Choose slightly larger conic neighborhoods $G_j$ retaining a lower bound $c/2$ on this compact set; shrink the base patch first if the cones vary with the base point. This follows by taking a convergent subsequence of any alleged violating normalized tuples and using closedness of each wavefront set. The transforms $\widehat v_j$ have bounds $C_j(1+|\eta_j|)^{m_j}$ everywhere and arbitrary rapid bounds off $G_j$, by [F3] and [F5]. Put $R=\sum_j|\eta_j|$. For a sufficiently small fixed $\delta>0$, every frequency tuple either has an index $j$ with $\eta_j\notin G_j$ and $|\eta_j|\ge\delta R$, or satisfies $|\sum_j\eta_j|\ge cR/4$. Indeed, otherwise discard all frequencies outside their $G_j$; their total norm is below $s\delta R$, while the remaining cone frequencies have sum norm at least $(c/2)(1-s\delta)R$. Subtracting the discarded sum proves the assertion when $s\delta(1+c/2)<c/4$. [F3, F5, given, algebra]

2.1 For a compactly supported smooth test $h$, consider
$$\int_{(\mathbb R^d)^s}\left(\prod_{j=1}^s\widehat v_j(\eta_j)\right)\widehat h\!\left(-\sum_j\eta_j\right)d\eta_1\cdots d\eta_s.$$
It is absolutely convergent. In the first region of step 1.1, use arbitrary rapid decay of the indicated comparable-size regular factor and polynomial bounds for the others; in the second, use arbitrary rapid decay of $\widehat h$. For every prescribed $Q$ both bounds are at most $C_Qp_{n_Q}(h)(1+R)^{-Q}$ after increasing the rapid exponent above $Q+\sum_jm_j$; the finite region $R\le1$ has the same bound with a larger constant. Choose $Q>sd$. Integration proves a finite-seminorm distribution estimate. For smooth compact factors the value is exactly $\int h\prod_jv_j$ by Fourier inversion and absolutely integrable Fubini. Approximate every $v_j$ by the controlled smooth sequences in [F3], with independent approximation indices. Their uniform bounds give the same integrable majorant. Each Fourier factor converges pointwise, so dominated convergence identifies every joint or iterated approximation limit with this one integral. This defines a simultaneous product and proves its invariance under reordering the factors. [A1, F3, F5, F6, step 1.1, construct, algebra]

2.2 The preceding bounds also give the common finite-order and regular-cone estimates for all intermediate products. To check the latter, replace $h$ by $h(x)e^{-2\pi i x\cdot\xi}$. If an output cone avoids every nonzero sum of covectors from the selected $\Gamma_j\cup0$, compactness of normalized tuples implies that either a comparable-size factor is in a regular cone or $|\xi-\sum_j\eta_j|$ is comparable to $|\xi|+R$. Use rapid decay of that factor or of $\widehat h(\xi-\sum_j\eta_j)$ exactly as in step 2.1. Taking exponents arbitrarily large gives uniform rapid decay in that output cone. Noncancellation makes the cone sums locally closed away from zero: bounded output covectors bound the sum of the norms of input covectors, by step 1.1, and thus allow a convergent subsequence. Weak convergence on tests was already proved. Hence the intermediate products converge in the explicitly controlled sense of [F3]. For two factors this limit equals the product in [F4], because controlled tensor approximants and the diagonal pullback in [F3] have precisely that smooth limit. Group any subset first and repeat: its sum cone satisfies the next product condition whenever the full simultaneous condition holds. Controlled continuity and the common multi-frequency integral therefore prove every such iterated product agrees with the simultaneous one. These arguments are local; [F3], using the same transformed approximants and finite support partitions, makes the product cutoff- and coordinate-independent. [F3, F4, F5, F6, step 1.1, step 2.1, algebra]

3.1 We prove that the Statement's matching actually satisfies the simultaneous condition. Pull $a$, $b$ and each edge kernel to the full configuration space $M^{p+q}$ by their coordinate projections; these projections are submersions, so [F3] applies without a conormal restriction. The coefficient tensor has compact support. Insert edge cutoffs equal to one near the projections of that compact support; all later expressions then have one fixed compact support neighborhood. A possible zero-sum covector of these factors consists of a tuple $\alpha\in\operatorname{WF}(a)\cup0$ in block $A$, a tuple $\beta\in\operatorname{WF}(b)\cup0$ in block $B$, and, on each nonzero singular edge, a pair $(k,-\ell)$ with $k,\ell$ future null by [F2]. All smooth edges have zero wavefront covectors. Because the matching slots are disjoint, the zero-sum equations say that each $A$ entry is past null or zero, each $B$ entry is future null or zero, and every unused entry is zero. If any singular edge is nonzero, both full coefficient tuples are nonzero and forbidden by [F1]. If every singular edge is zero, disjointness of the two coefficient blocks forces $\alpha=\beta=0$ too. Thus there is no nonzero simultaneous zero sum. Closedness and compactness on each small product-chart patch give exactly the enlarged cones and estimates in steps 1.1–2.2. A compact coefficient support needs only finitely many such patches; no global cone over unrelated base points is assumed. [A1, F1, F2, F3, F4, F7, step 1.1, step 2.1, step 2.2, construct]

4.1 Compact pushforward is compatible with these controlled limits. For a coordinate projection $\pi(x,z)=x$ and a common compact support, multiply the smooth density in the integrated $z$ variables by one fixed compact cutoff equal to one there. Testing $\pi_*t_j$ against $h(x)|dx|$ is then testing $t_j$ against a single fixed-support smooth density. Weak convergence and a uniform finite-order bound follow directly. In local charts its output Fourier transform is the full transform of this fixed smooth localization of $t_j$ evaluated at vertical covector zero. If the output compact base/cone avoids the projected input cone with zero vertical covector, finite compact vertical covers and the uniform regular-cone bounds for $t_j$ give arbitrary rapid output decay. Thus $\pi_*t_j$ converges controlled with exactly the projected cone in [F4]. For smooth compact distributions, integration in any order agrees by ordinary Fubini; for the controlled limits the same equality follows by applying the continuous test pairings just proved. This includes output dimension zero, where pushforward is the scalar total pairing. [F3, F4, F6, F7, given, algebra]

4.2 All intermediate operations in an edge-contraction order are admissible, including those after earlier integrations. Every such intermediate kernel is the product of some of the original factors, pushed forward over some already matched variables, with the other original slots still labelled. Its possible wavefront covectors lift, by [F4], to sums of original factor covectors with zero entries in those previously integrated slots. If a later product had opposite covectors, insert that opposing factor and put zero in the other, as yet unused, factors. Lifting the zero vertical entries gives a nonzero simultaneous zero-sum tuple for a subset of the original factors, contradicting step 3.1 (a subset is included in the full condition by zero entries for the omitted factors). Thus the later product is transverse. The same argument applies when a smooth self-contraction in one coefficient has first been pushed forward and is then tensored with the other coefficient: the zero-covector obstruction lifts to the original coefficient block and its zero integrated entries. Product support stays inside the compact coefficient supports and their projections. Consequently each step has the controlled continuity from steps 2.2 and 4.1. Choose the common smooth approximants with the original slot structure preserved: regularize $a$ on its own $p$-slot block, $b$ on its own $q$-slot block, and each singular edge on its own two slots. Before lifting an edge, multiply by a pair-slot cutoff equal to one near the projection of one fixed compact neighborhood of the coefficient supports; leave every smooth edge unchanged. Pull these approximants back by the corresponding coordinate projections. These are submersions, so [F3] transfers controlled convergence; steps 2.2 and 4.1 give the same intrinsic product and pushforward limits. No arbitrary full-configuration smoothing or cutoff is introduced into a factor. At the smooth level the integrand is the product of the two original coefficient functions and the edge functions of their own labelled slots. A later edge has no dependence on slots removed by an earlier edge, because the edges form a matching; the as-yet unused other coefficient block likewise has no such slot. Thus precisely those later factors may be taken outside the earlier integration. Common compact coefficient supports make every relevant integrand integrable, and ordinary Fubini proves equality of the partial and simultaneous contractions. Taking the controlled limits proves equality with the canonical simultaneous product followed by pushforward, for every permitted edge order. This is a limit proof on the singular coefficient class, not an appeal to density of smooth coefficient kernels in the test-function topology. [F3, F4, F6, step 2.2, step 3.1, step 4.1, algebra]

5.1 The output is microcausal. Suppose a nonzero output wavefront covector were all future causal. Its lift before the final pushforward has these external entries and zero entries in every integrated slot. In the product wavefront sum from step 2.2, each singular edge then requires a past-null or zero coefficient entry in block $A$ and a future-null or zero coefficient entry in block $B$. Every other integrated coefficient entry is zero because its edge is smooth. Thus the full $B$ coefficient tuple, including its external entries, is all future. If any singular edge is nonzero it is a nonzero forbidden tuple. If all singular edges are zero, a nonzero output must instead come from a nonzero all-future tuple in at least one coefficient block, again forbidden. For an all-past output use block $A$ when a singular edge is nonzero and the identical no-edge argument otherwise. This proves exclusion of both cones, including cases where all external covectors of one block vanish. Compactness follows from the coefficient support and its projection, not from a global support assumption on $W$ or a smooth edge. [F1, F2, F4, step 2.2, step 3.1, step 4.2, algebra]

6.1 Relabeling slots is a diffeomorphism of the full configuration space. Smooth multiplication and integration commute with that relabeling, and the identical controlled-limit argument from [F3] and step 4.2 proves it for these distributions. For a polynomial functional, expand its finite coefficient expression before differentiation. A directional derivative selects one of the still uncontracted original slots and inserts its smooth direction there; the finite product rule assigns each labelled external direction to exactly one original coefficient block. Multiplication by these smooth directions and compact integration have the same controlled bounds, so the identity persists after every contraction. Symmetrizing remaining slots is a finite average of the proved permutation identity. For degree-zero coefficients there are no slots in that block and hence no incident singular edge; empty matchings give the original tensor and ordinary multiplication, and zero coefficients give zero. This proves all asserted derivative and permutation rules without a choice of representations or an infinite series limit. [F1, F3, F6, step 4.2, step 5.1, algebra]

7.1 The singular edges in every coefficient of $D_W$ connect the two original functional blocks. Each application of a smooth $\Gamma_K$, including one applied after multiplication of the two functionals, pairs two remaining slots and hence gives either a smooth self-edge or a smooth cross edge of exactly the stated class. Every original slot is removed at most once. Steps 3.1 and 4.2 prove admissibility and equality of all those coefficient contractions, and step 6.1 supplies their finite Leibniz and permutation identities. Finite polynomial degree makes all sums at each coefficient finite, so these are precisely the compatibility rules needed for the finite Wick-change rearrangement. None of this treats a singular self-edge: such an edge would place opposite future/past entries in one coefficient tuple and would evade the contradiction in step 3.1. The distinction in the Statement is therefore essential. [F1, F2, step 3.1, step 4.2, step 6.1, algebra] ∎

## Remarks

The simultaneous noncancellation condition in step 1.1 is proved for the actual matching in step 3.1, and every later use after a pushforward is checked again in step 4.2. No claim that arbitrary pairwise-defined distribution products may be regrouped is used. Smooth changes of a Hadamard kernel have exactly the self-contraction regularity required here.
