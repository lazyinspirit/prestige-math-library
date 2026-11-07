---
id: lem-derived-twisted-local-models-yield-azumaya-over-infinite-field
kind: lemma
title: "Derived twisted local models yield Azumaya algebras over infinite fields"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-axiom-of-choice
  - thm-smooth-affine-commutative-groups-have-etale-fppf-comparison
  - thm-abelian-sheaves-on-a-site-have-enough-injectives
  - lem-site-slice-restriction-locality-and-composition
  - lem-infinite-field-ample-cone-avoidance-with-prescribed-fibres
  - lem-twisted-kernel-removes-prescribed-singular-points
  - lem-nonsurjective-matrix-locus-has-expected-codimension
  - thm-pgl-torsors-classify-azumaya-algebras
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the actual site, coherent induction and PGL suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. J. de Jong, A result of Gabber"
      url: "https://www.math.columbia.edu/~dejong/papers/2-gabber.pdf"
      locator: "§2.5–2.14 and §3.6–3.22, resolution gerbe and codimension induction; the supplied-local-model infinite-field case is reconstructed here."
verification: {}
---

## Statement

Assume AC. Let $k$ be an infinite field, let $X$ be an integral quasi-projective finite-type $k$-scheme, and let $\alpha\in H^2_{\mathrm{et}}(X,\mathbb G_m)$ be torsion. Choose an fppf injective resolution $\mathbb G_m\to I^0\to I^1\to I^2\to\cdots$ and a cocycle $\tau\in I^2(X)$ representing $\alpha$. A coherent $\alpha$-twisted module means coherent quasi-coherent modules $E_s$ functorial under base change for every local object $s\in I^1(T)$ with $ds=\tau|_T$, with compatible isomorphisms for arrows $a\in I^0(T)$ satisfying $da=s-t$, such that every automorphism $u\in\mathbb G_m(T)$ acts on $E_s$ by multiplication by $u$. Assume that for every finite set $T$ of closed points of $X$ there is such a coherent twisted module of positive generic rank, locally free on a dense open and near $T$. Then $\alpha$ is represented by an Azumaya algebra on $X$. No ordinary Čech representative of $\alpha$ is assumed; the local-model hypothesis is an explicit premise.

## Facts & Assumptions

**Given:** The infinite field, integral quasi-projective scheme, torsion cohomology class, actual resolution and local-model hypothesis in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] Étale and fppf $\mathbb G_m$ cohomology agree on Noetherian schemes; actual injective resolutions and exact slice restrictions exist. [[thm-smooth-affine-commutative-groups-have-etale-fppf-comparison]] [[thm-abelian-sheaves-on-a-site-have-enough-injectives]] [[lem-site-slice-restriction-locality-and-composition]]

[F2] High ample twists admit a section avoiding a supplied high-codimension cone and taking prescribed values at finitely many points. [[lem-infinite-field-ample-cone-avoidance-with-prescribed-fibres]]

[F3] The supplied-map twisted kernel calculation is valid étale locally, and the nonsurjective matrix locus has the stated codimension. [[lem-twisted-kernel-removes-prescribed-singular-points]] [[lem-nonsurjective-matrix-locus-has-expected-codimension]]

[F4] PGL torsors classify Azumaya algebras and identify the scalar splitting obstruction with their cohomological class; faithfully flat algebra descent is effective. [[thm-pgl-torsors-classify-azumaya-algebras]] [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]

## Proof

**Proof technique:** perform the codimension induction on the actual resolution groupoid, then descend endomorphism algebras.

1.1 By [F1], use the fppf resolution in the Statement to represent $\alpha$ by $\tau$. Its local objects $s$ and arrows $a$ form a $\mathbb G_m$-banded groupoid: exactness of the resolution gives local objects and arrows, and automorphisms are $\ker(I^0\to I^1)=\mathbb G_m$. Descent follows because the covering-nerve complex is locally split and $I^0$ is injective. If $n\alpha=0$, choose $b\in I^1(X)$ with $db=n\tau$. Addition followed by subtraction of $b$ identifies the groupoid of $n$-fold twists with the trivial $\mathbb G_m$-groupoid. Consequently the tensor product of $n$ $\alpha$-twisted modules is an ordinary module, and $\mathcal H om$ of two equally twisted modules is ordinary; these assertions are checked on local objects and scalar automorphisms. [A1, F1, given, choose, construct, algebra]

2.1 Put $d=\dim X$. For $c\ge1$, let $H(c)$ mean that for every finite closed-point set $T$ there is a coherent $\alpha$-twisted module of positive constant rank off a closed nonfree locus of codimension at least $c$, and locally free near $T$. The supplied hypothesis is $H(1)$. Assume $H(c)$ and construct $F_1,\dots,F_{n+1}$ successively, each free at $T$ and at one selected closed point of every codimension-$c$ component of every previous nonfree locus. For each new $F_i$ choose one closed point on every codimension-$c$ component of its nonfree locus outside all previous nonfree loci. This is possible because otherwise that component would equal a previous component, whose selected point is free for $F_i$; nonempty opens of finite-type $k$-schemes contain closed points. Thus at a point selected for $F_i$ all other $F_j$ are free. [A1, step 1.1, given, choose, construct, algebra]

3.1 By direct sums normalize all generic ranks to a common $r>0$, then enlarge $r$ until $nr^{n+1}+1>d$. Form $G_1=\bigoplus_iF_i^{\oplus r^n}$ and $G_2=\bigotimes_iF_i$, using the trivialization of the $n$-fold twist from step 1.1 to regard both as equally twisted. Their Hom is an ordinary coherent sheaf $\mathcal H$. On the common free open $U$ its nonsurjective maps form a closed cone of geometric fibre codimension $nr^{n+1}+1$ by [F3]. At each selected point for $F_i$, the tensor of the other $n$ free twisted factors is an ordinary rank-$r^n$ bundle; a local basis supplies the identity-block value in $\mathcal H$ without trivializing the individual twists. By [F2], after a high ample twist there is a global map $G_1\to G_2\otimes L$ with those fibre values and surjective on $U$. [A1, F2, F3, step 1.1, step 2.1, choose, construct, algebra]

4.1 The kernel is a coherent $\alpha$-twisted module. On each local groupoid object it is the ordinary kernel, and scalar-compatible arrows glue these kernels. By the local calculation in [F3], applied after trivializing the groupoid and $L$ étale locally, the kernel is locally free of positive rank on $U$ and at all selected points. Its nonfree locus is contained in the union of the $F_i$ nonfree loci and omits a selected point on every codimension-$c$ component; hence it has codimension at least $c+1$. It is locally free near $T\subseteq U$. Thus $H(c+1)$ holds, and finite induction yields a positive-rank locally free $\alpha$-twisted module on all of $X$. [F3, step 2.1, step 3.1, algebra]

5.1 For each local object $s$, the endomorphism algebra $\mathcal E nd(E_s)$ is unchanged by scalar automorphisms. Local arrows identify these algebras independently of the arrow chosen, so [F4] glues them to an Azumaya algebra $\mathcal A$ on $X$. Its local splitting modules $E_s$ have the same scalar band and triple-arrow defect as the resolution groupoid of $\tau$; by the PGL obstruction identification in [F4], their cohomological class is $\alpha$. The construction did not replace $\alpha$ by an ordinary Čech class and did not prove the supplied local-model hypothesis. [F4, step 1.1, step 4.1, algebra] ∎
