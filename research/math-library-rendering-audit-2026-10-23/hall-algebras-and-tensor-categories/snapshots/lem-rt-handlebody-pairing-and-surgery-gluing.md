---
id: lem-rt-handlebody-pairing-and-surgery-gluing
kind: lemma
title: "RT handlebody pairings and surgery gluing"
status: published
dependency_level: 13
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-rt-state-spaces, def-fusion-and-multifusion-category, thm-basic-properties-of-the-categorical-trace, thm-in-a-spherical-category-the-left-and-right-traces-agree, lem-balancing-and-hopf-link-character-identity, lem-relative-three-bordism-surgery-presentation, lem-multicolored-ribbon-coupon-evaluation, lem-kirby-color-full-band-slide-and-coupon-identity, lem-colored-fr-surgery-and-coupon-cancellation, lem-modular-gauss-sums-and-kirby-color, lem-rt-capped-operator-normalization-and-composition, def-axiom-of-choice, def-countable-choice]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §§5.1–5.7"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
    - title: "V. G. Turaev, Quantum Invariants of Knots and 3-Manifolds, Chapters II–IV"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf"
---

## Statement

Assume full AC and its inherited countable-choice consequences. For the state spaces of [[def-rt-state-spaces]], composition is a perfect pairing

$$\operatorname{Hom}(\mathbf1,X)\times\operatorname{Hom}(X,\mathbf1)\longrightarrow\mathbb C,\qquad(v,w)\longmapsto wv.$$

The categorical trace of $1_{i\otimes i^*}$ is $d_i^2$, and $\operatorname{tr}(1_H)=\sum_i d_i^2=D^2$ for $H=\bigoplus_i i\otimes i^*$. Distinguish that trace from the actual standard-cap geometric Gram form on a connected genus-$g$ surface:

$$Q_t(y_j,x_i)=\delta_{ij}D^{g-1}d(i)^{-1}y_ix_i,\qquad N_t|_i=Q_t^{-1}|_i=D^{1-g}d(i)1.$$

Here $i$ is the full handle-color tuple, $d(i)=\prod_r d_{i_r}$, and the inverse is in composition-dual coordinates. For disconnected surfaces take tensor products and empty value $\mathbb C$.

For every compact parametrized colored ribbon bordism, capping against all testing states, taking the surgery-color sum with closed normalization $D^{-m-b_0(M)}\kappa^{-\sigma(B)}$, and applying $N_{\rm out}$ defines a unique linear map $Z_\alpha(M)$. It is independent of the marked surgery presentation, all auxiliary coupon bases and their complete identity resolutions. It retains the prescribed boundary caps, parametrizations, colors and actual coupon morphisms. These maps satisfy the cylinder, ball, empty and disjoint-union laws, and the actual stacked-presentation law of [[lem-rt-capped-operator-normalization-and-composition]]. The identification of its signature defect with the Maslov correction is a separate supplier.

## Facts & Assumptions

**Given:** A complex modular ribbon fusion category and fixed marked reference caps, with meridian Lagrangians $\alpha$.

[F1] Finite semisimplicity, trace additivity/multiplicativity and spherical dual dimensions are [[def-fusion-and-multifusion-category]], [[thm-basic-properties-of-the-categorical-trace]], [[thm-in-a-spherical-category-the-left-and-right-traces-agree]] and [[lem-balancing-and-hopf-link-character-identity]].

[F2] [[lem-relative-three-bordism-surgery-presentation]] proves existence and complete marked decorated comparison by O1/O2/O3, exterior ribbon isotopy and open strands over the actual surgery longitudes, for arbitrary fundamental groups and the specified output map.

[F3] [[lem-multicolored-ribbon-coupon-evaluation]] gives the full colored framed coupon evaluator. [[lem-kirby-color-full-band-slide-and-coupon-identity]] proves the full Kirby-color band slide and fixed open-strand/coupon identity, including the lifted $Y^*\otimes Y$ identity before taking its mate.

[F4] [[lem-modular-gauss-sums-and-kirby-color]] gives $p_\pm=D\kappa^{\pm1}$, $p_+p_-=D^2$ and the blow-up factors. [[lem-colored-fr-surgery-and-coupon-cancellation]] gives signed Fenn–Rourke reduction, arbitrary-knot zero-meridian circumcision with factor $D^2$, and the full $R_{ij}(E_{i^*\otimes j})=\delta_{ij}(D^2/d_i)1$ identity.

[F5] [[lem-rt-capped-operator-normalization-and-composition]] proves the exact $Q,N$, block projection for disconnected boundaries, raw testing-functional map, cylinders/balls/empty/tensor laws and actual stacked-graph formula, without assuming presentation completeness.

[A1] Full AC is inherited from [F2]'s geometric and duality suppliers; countable choice is inherited from [F3]'s tangle evaluator ([[def-axiom-of-choice]], [[def-countable-choice]]). All Hom decompositions and sums here are finite.

## Proof

1.1 Decompose $X$ as $\mathbf1^{\oplus r}\oplus\bigoplus_{i\ne0}i^{\oplus r_i}$ using [F1]. The unit-copy inclusions $x_a$ and projections $y^a$ satisfy $y^ax_b=\delta_{ab}$ and identify the two Hom spaces with $\mathbb C^r$ and its full dual. Every other simple summand contributes zero. Thus composition is perfect, including $r=0$. Trace additivity, multiplicativity and $d_{i^*}=d_i$ give $\operatorname{tr}(1_{i\otimes i^*})=d_i^2$ and $\operatorname{tr}(1_H)=D^2$. This is a categorical closed trace; it does not identify a geometric opposite-cap pairing with that trace. [F1, given, algebra]

2.1 By [F2] choose an actual presentation of each connected component with its fixed boundary handlebodies and testing coupons. The finite evaluation [F3] is linear in each coupon. Perfectness from step 1.1 therefore determines a unique raw operator from its testing functional. The tensor-Hom inclusions and unit-channel projections of [F5] retain exactly the tensor product of connected state spaces at a disconnected boundary. The calculation of [F5] gives $Q,N$ as displayed: its full meridian identity kills unmatched handle tuples and contributes $D^{2g}/d(i)$ on a matched tuple; its cylinder has $g$ zero-framed surgery annuli, hence multiplying by $D^{-g-1}$ gives $Q$. All $D,d_i$ are nonzero. Applying the inverse $N$ produces the unique normalized map and not merely a scalar class of maps. [F2, F3, F5, step 1.1, construct]

3.1 Test two presentations against the same arbitrary incoming and outgoing coupons. By [F2], their specified marked identification is a finite sequence of the actual moves listed there. An O1 move adds $m\mapsto m+1$, $\sigma\mapsto\sigma+\epsilon$ and evaluation factor $p_\epsilon=D\kappa^\epsilon$, so its normalized multiplier is $D^{-1}\kappa^{-\epsilon}p_\epsilon=1$. O2 changes the linking matrix by an integral unimodular band congruence, hence keeps signature and $m$; its complete coupon-bearing evaluation is unchanged by [F3]. For O3 the added $K_f,U_0$ block has linking form $\left[\begin{smallmatrix}f&1\\1&0\end{smallmatrix}\right]$ after separating its two core directions from the old form by completing squares. That block has determinant $-1$ and signature zero; the count increases by two. The full circumcision identity [F4] multiplies evaluation by $D^2$, canceling $D^{-2}$. This identity applies to the arbitrary knot and to every exterior color/coupon in the actual support. Exterior isotopy is [F3]; an open strand over a surgery longitude is precisely its lifted open-strand/coupon identity after bending the fixed strand and applying the actual exterior coupons. It is not an assumption that arbitrary coupon families are dinatural. Thus every allowed move preserves every tested normalized functional. [F2, F3, F4, step 2.1, algebra]

4.1 [F2] retains the complete output identification, all collar ribbons and fixed caps, so the comparison in step 3.1 applies to these exact testing states, with no unnoticed boundary mapping class. It follows by perfectness that the operators agree. Changing a computational coupon basis replaces $x_a$ by $\sum_bx_bA_{ba}$ and $y^a$ by $\sum_b(A^{-1})_{ab}y^b$; the complete finite identity resolution $\sum_ax_ay^a$ is unchanged. Object simple-summand resolutions are unchanged by the same matrix calculation. Actual coupon morphisms remain fixed. Therefore all auxiliary decompositions used in the computation give the same map. This establishes existence, uniqueness and the asserted full presentation independence. [F1, F2, F3, step 1.1, step 3.1, algebra]

5.1 Apply [F5] to a cylinder and to the two empty-graph balls: the cylinder word $D^{2g}/d(i)$ multiplied by $D^{-2g}d(i)$ is the identity on every multiplicity block, the outgoing ball is $1\in\mathbb C$, the incoming ball is multiplication by $D^{-1}$, and their glued sphere is $\tau(S^3)=D^{-1}$. Empty bordism gives $1$ and disjoint union tensors all factors. These are now laws of the well-defined operators, since step 4.1 allows their local models as presentations of any such bordism. [F5, step 2.1, step 4.1, algebra]

6.1 Likewise choose the actual stacked presentations in [F5] for arbitrary composable bordisms. Their cap-annulus, disconnected-family projectors and all $N$ factors prove $Z_\alpha(M_2M_1)=\kappa^{\sigma(B_1)+\sigma(B_2)-\sigma(B_{\rm comp})}Z_\alpha(M_2)Z_\alpha(M_1)$. Replacing any of these presentations preserves both sides by step 4.1; thus this is a law for the constructed maps. [F5] includes disconnected incidence components, empty surfaces and singular linking matrices, so no connectedness, positivity or nonsingularity restriction is introduced. This proves every stated assertion while leaving only the separately specified signature-to-Maslov identification to its actual supplier. [F5, A1, step 4.1, step 5.1, algebra] ∎
