---
id: lem-balanced-knot-whitney-index-differences-equal-twice-total-mark-differences
kind: lemma
title: "Balanced knot Whitney index differences equal twice total marked-degree differences"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-countable-choice
  - def-admissible-pointed-heegaard-floer-data
  - lem-balanced-multipointed-knot-diagrams-in-s-three-are-admissible
  - lem-balanced-boundary-disk-domains-have-twice-component-sum-maslov-index
  - lem-equal-whitney-domains-have-equal-boundary-windings-and-fredholm-index
  - lem-smooth-relative-whitney-homotopies-preserve-strip-fredholm-index
  - lem-continuous-whitney-classes-admit-relative-smooth-fixed-end-models
  - lem-multipointed-symmetric-product-spheres-have-index-shift-two-k
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks, link invariants and the multi-variable Alexander polynomial"
      url: "https://arxiv.org/abs/math/0512286"
      locator: "Relative Maslov and Alexander marked-degree differences; actual smooth periodic insertions proved locally below"
---

## Statement

Assume Countable Choice. Fix an actual balanced multipointed diagram of one oriented knot in $S^3$, of genus $h$, with $k$ ordered pairs of marks and $m=h+k-1>0$, with the smooth pointed-data convention. Fix its surface complex structure, product-integrable generator charts and nearly symmetric tame target data. For any two REALIZED continuous Whitney classes $u,v$ with the same ordered generators, let $D(u),D(v)$ be their integral region domains and let $\mu(u),\mu(v)$ be their actual fixed-end real indices before translation, defined using smooth fixed-end representatives. Then
$$\mu(u)-\mu(v)=2\sum_{i=1}^k(n_{w_i}(u)-n_{w_i}(v))=2\sum_{i=1}^k(n_{z_i}(u)-n_{z_i}(v)).$$
All signed marked degrees are allowed. Thus $\mu-2\sum n_w$ and $\sum n_z-\sum n_w$ depend only on the ordered endpoints among realized classes. In particular every actual same-generator class has $\mu=2\sum n_w=2\sum n_z$. No clean incidence presentation, disjointness of the two endpoint coordinate sets, holomorphic representative, or vanishing marked multiplicity is assumed.

This is an endpoint-difference formula. It does not identify the general region Euler/corner expression, choose an absolute grading normalization, prove that every generator pair admits a Whitney class, or establish analytic counts, cancellation, invariance or comparison. If $m=0$, the point target has only constant maps and the same equalities read zero equals zero.

## Facts & Assumptions

**Given:** The actual balanced diagram in $S^3$, its cyclic cut components $A_i,B_i$, and the two realized classes with the same ordered endpoints.

[F1] Every full-curve periodic domain is an integral sum $P=\sum a_iA_i+\sum b_iB_i$. Each component contains one $w$ and one $z$ mark, so its two total marked degrees are both $\sum a_i+\sum b_i$. ([[lem-balanced-multipointed-knot-diagrams-in-s-three-are-admissible]])

[F2] For $k\ge2$ every individual $A_i$ and $B_i$ is realized by an actual smooth based disk on its own product torus, at any prescribed generator, with boundary Maslov index two. All signed one-torus classes have the proved twice-component-sum index. ([[lem-balanced-boundary-disk-domains-have-twice-component-sum-maslov-index]])

[F3] Equal-domain same-end smooth Whitney models have equal actual strip indices. For arbitrary same-end models their coefficient jumps are their actual labelled boundary-path winding differences. The required finite polygon data are supplied for the actual embedded balanced input. A smooth sphere has determinant degree $(m+1-h)n_z$. ([[lem-equal-whitney-domains-have-equal-boundary-windings-and-fredholm-index]], [[lem-multipointed-symmetric-product-spheres-have-index-shift-two-k]])

[F4] Smooth fixed-end indices are physical squared-determinant boundary windings, additive under concatenation, with constant index zero and source reversal changing sign. Every actual continuous Whitney class has a smooth fixed-end model; its actual holomorphic-strip index agrees with that model when applicable. ([[lem-smooth-relative-whitney-homotopies-preserve-strip-fredholm-index]], [[lem-continuous-whitney-classes-admit-relative-smooth-fixed-end-models]])

## Proof

1.1 Use [F4] to take smooth fixed-end models for $u,v$, with common constant tails. Their domain difference is periodic by the full-curve winding assertion [F3]. Thus [F1] gives $P=D(u)-D(v)=\sum a_iA_i+\sum b_iB_i$. Evaluation at the actual cyclic marks gives both total marked differences equal to $s=\sum a_i+\sum b_i$, including when several marks lie in one region. No positivity or index restriction is used in this identity of integral chains. [F1, F3, F4, given, construct, algebra]

1.2 We give the boundary insertion comparison needed here explicitly. Let $d$ be a smooth disk based at a generator $x$ on either one of its product tori. Flatten a small boundary interval at its node to the constant $x$ by a real scalar cutoff in a smooth adapted torus chart. Flatten a small interval on the corresponding horizontal edge of the constant negative tail of $v$ in the same way; that tail is already constant. Remove the two constant intervals and join their collars, reversing the induced interval orientations. The oriented boundary connected sum of the strip rectangle and the disk is again a strip rectangle with the same distinguished ends. A finite smooth collar parametrization and rounding give an actual smooth fixed-end map. On the joined collars the map is constant, and on all other horizontal edges it has the required torus boundary. This works on either horizontal side. In both cases the disk inherits its ORIGINAL source orientation: oriented boundary gluing reverses the interval orientations, rather than reflecting the disk. Hence relative divisor degrees add with a PLUS sign on both sides. In determinant frames constant near the gluing interval the physical real tangent phases there are identical. The two copies of that constant interval cancel, while the inserted disk contributes its positively traversed squared phase loop. The end caps are untouched. Consequently the new strip index is $\mu(v)+\mu_L(d)$, on either the alpha or beta side. This is a boundary winding calculation, not a holomorphic gluing or regularity assertion. [F3, F4, construct, algebra]

2.1 Suppose $k\ge2$. Insert the actual based unit disks of [F2] at the negative constant tail, $a_i$ times on the alpha side and $b_i$ times on the beta side. For negative exponents precompose the disk by a reflection fixing its node; this reverses both its domain degree and its boundary phase. There are finitely many insertions, whose constant intervals may be chosen disjoint or successive. Step 1.2 gives an actual model $v_P$ with domain $D(v)+P=D(u)$ and index $\mu(v_P)=\mu(v)+2s$. The equal-domain assertion [F3] therefore gives $\mu(u)=\mu(v_P)$. Together with step 1.1 this proves both marked-degree formulas. The construction realizes only the periodic correction already given by [F1]; it does not assert realization of an arbitrary nonperiodic formal chain. [F1, F2, F3, step 1.1, step 1.2, construct, algebra]

2.2 If $k=1$, [F1] instead says $P=c\Sigma$. Every coefficient jump is zero. By [F3] each labelled boundary-path difference has zero angular winding, so real argument lifts give alpha and beta boundary homotopies relative endpoints. Glue $u$, those torus cylinders, and the orientation reversal of $v$ to an actual sphere, smoothing the constant seams as in [F3]. Its divisor degree is $c$, since the boundary cylinders avoid the point divisor. Here $m=h$, so its determinant degree is $c$ by [F3]. Comparing the two disk frames across the cylinders leaves twice this sphere clutch degree as the difference of the physical capped boundary phase windings. Thus $\mu(u)-\mu(v)=2c$, while each total marked difference is $c$. This case uses only an actual sphere obtained from the given classes; it presumes no sphere of any other degree exists. [F1, F3, F4, step 1.1, construct, algebra]

3.1 Taking $v$ to be the actual constant model proves the same-generator assertion, using its zero domain and zero index from [F4]. Steps 2.1 and 2.2 show the two endpoint-dependent quantities are independent of the realized class. The passage back to continuous classes and to actual holomorphic linearizations is exactly [F4]; no formal-domain index or Euler/corner expression has replaced that actual index. For $m=0$ the target is a point and all the claimed degrees and indices are zero directly. All constructions beyond the stated Countable Choice suppliers were finite. [F4, step 2.1, step 2.2, algebra] ∎
