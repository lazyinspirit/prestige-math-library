---
id: lem-modular-gauss-sums-and-kirby-color
kind: lemma
title: "Modular Gauss sums, the Kirby color, and its slide identity"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-modular-ribbon-category-and-hopf-link-data, lem-simple-ribbon-fusion-dimensions-are-nonzero, lem-balancing-and-hopf-link-character-identity, lem-modular-hopf-matrix-squared, thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor, lem-ribbon-trace-equals-the-framed-closure-evaluation, thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links, def-ribbon-evaluation-of-an-x-colored-closed-braid, def-countable-choice, thm-basic-properties-of-the-categorical-trace, def-fusion-rules]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, and Ostrik, Tensor Categories, §§8.14–8.15"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Bakalov and Kirillov, Lectures on Tensor Categories and Modular Functor, §§4.1 and 5.7"
      url: "https://www.math.stonybrook.edu/~kirillov/tensor/tensor.ps.gz"
---

## Statement

Let $\mathcal C$ be modular with $p_\pm=\sum_i\theta_i^{\pm1}d_i^2$, $D^2=\sum_i d_i^2$, and $\kappa=p_+/D$. Then

$$p_+p_-=D^2,\qquad \kappa^{-1}=p_-/D.$$

The formal Kirby color is $\Omega=\sum_i d_i\,i$. A zero-framed $\Omega$ meridian around a simple strand $j$ acts by $D^2\delta_{j,0}$ times the identity, and a $\pm1$-framed $\Omega$ unknot evaluates to $p_\pm$. Hence the surgery normalization

$$\tau(M_L)=D^{-m-1}\kappa^{-\sigma(B)}F(L_\Omega)$$

is invariant under adding/removing a disjoint $\pm1$-framed $\Omega$ unknot; it gives $\tau(S^3)=D^{-1}$ and $\tau(S^2\times S^1)=1$. The full colored handle-slide identity is also required for invariance under relative Kirby moves; its proof is not completed in this carrier.

## Facts & Assumptions

**Given:** A complex modular ribbon fusion category, a framed colored link evaluation $F$, and a surgery diagram with $m$ components and symmetric linking matrix $B$.

[F1] The balancing character identity is $s_{xi}s_{xj}=d_x\sum_kN_{ij}^ks_{xk}$; also $s_{0i}=d_i$, $s_{i^*j^*}=s_{ij}$, $d_{i^*}=d_i$, and $\theta_{i^*}=\theta_i$ ([[lem-balancing-and-hopf-link-character-identity]]).

[F2] $s^2=D^2C$, where $C_{ij}=\delta_{i,j^*}$, and $D^2\ne0$ ([[lem-modular-hopf-matrix-squared]]).

[F3] All $d_i$ are nonzero; trace is additive and multiplicative on tensor products in this complex braided category; fusion multiplicities satisfy Frobenius reciprocity ([[lem-simple-ribbon-fusion-dimensions-are-nonzero]], [[thm-basic-properties-of-the-categorical-trace]], [[def-fusion-rules]]).

[F4] The framed tangle functor evaluates a colored $\pm1$-framed unknot of color $i$ as $\theta_i^{\pm1}d_i$; closed colored links are invariant under framed isotopy ([[thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor]], [[lem-ribbon-trace-equals-the-framed-closure-evaluation]], [[thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links]], [[def-ribbon-evaluation-of-an-x-colored-closed-braid]]).

[F5] For a simple $X$ and simple $Z$, the partial trace over $Z$ of the double braiding on $X\otimes Z$ is $(s_{XZ}/d_X)1_X$; the trace of the zero-framed $i$-colored unknot is $d_i$ ([[lem-balancing-and-hopf-link-character-identity]], [[lem-ribbon-trace-equals-the-framed-closure-evaluation]]).

[A1] The link-evaluation suppliers use $\mathrm{AC}_\omega$ and no full AC ([[def-countable-choice]]).

## Proof

**Given:** The data in the Statement.

1.1 Pivotal trace additivity and tensor multiplicativity give $d_i d_j=\sum_kN_{ij}^kd_k$. Frobenius reciprocity and the change of variable in the fusion sum then give
$\sum_i d_iN_{ij}^k=\sum_i d_iN_{k,j^*}^{i}=d_kd_{j^*}=d_kd_j.$
Using the balancing formula from [F1] and summing over $i$ yields
$\sum_i\theta_i d_i s_{ij} =\theta_j^{-1}\sum_{i,k}d_iN_{ij}^k\theta_kd_k =\theta_j^{-1}d_jp_+.$
[F1, F3, given, algebra]

1.2 Multiply the last identity by $s_{j^*,k}$ and sum over $j$. By [F1]–[F2],
$\sum_j s_{ij}s_{j^*,k} =\sum_x s_{i^*,x}s_{xk} =(s^2)_{i^*,k} =D^2\delta_{i,k}.$
Therefore $p_+\sum_j\theta_j^{-1}d_js_{j^*,k}=D^2\theta_kd_k$. Reindexing $j$ by $j^*$ and taking $k=0$ gives $p_+p_-=D^2$; since $p_+p_-=D^2\ne0$, both Gauss sums are nonzero and $\kappa^{-1}=p_-/D$. [F1, F2, step 1.1, algebra]

2.1 A simple strand $j$ encircled by a zero-framed simple loop $i$ is the scalar $s_{ij}/d_j$ on $j$ by [F5]. Hence the $\Omega$-meridian acts by
$\frac1{d_j}\sum_i d_is_{ij} =\frac{(s^2)_{0j}}{d_j} =D^2\delta_{j,0},$
where $d_j\ne0$ by [F3]. Thus $D^{-2}$ times this meridian is the projector onto the unit channel. This proves the projector identity from modular inversion. [F2, F3, F5, given, algebra]

2.2 By [F4], a $\pm1$-framed $\Omega$ unknot evaluates to $\sum_i d_i\theta_i^{\pm1}d_i=p_\pm$. For a $+1$ blow-up, the normalization changes by $D^{-1}\kappa^{-1}p_+=1$; for a $-1$ blow-up it changes by $D^{-1}\kappa p_-=p_+p_-/D^2=1$. The empty surgery diagram gives $D^{-1}$. By [F5], a zero-framed unknot colored by $\Omega$ evaluates to $\sum_i d_i^2=D^2$, so its one-component normalization is $D^{-2}D^2=1$, the $S^2\times S^1$ value. [F2, F4, F5, A1, step 1.2, algebra]

3.1 The claimed handle-slide identity must compare the complete coupon-bearing colored tangle before and after a band slide, including the dual-basis resolution at the fused coupons. The projector identity in step 2.1 supplies the needed scalar action on a simple meridian, but this carrier does not yet establish that the full slide diagram reduces to that projector in every channel. It therefore proves the Gauss, projector, and blow-up claims above, but does not prove handle-slide invariance of $\tau$. [step 2.1, step 2.2]

## Unresolved proof obligation

Supply the local coupon and dual-basis calculation identifying the full colored band slide with the projector in step 2.1; then combine it with the relative move theorem in [[lem-relative-three-bordism-surgery-presentation]]. Until that argument is present, the surgery invariant claim is not complete.
