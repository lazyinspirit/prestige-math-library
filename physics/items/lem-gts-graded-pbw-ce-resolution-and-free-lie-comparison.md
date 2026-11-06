---
id: lem-gts-graded-pbw-ce-resolution-and-free-lie-comparison
kind: lemma
title: Graded PBW, the CE resolution, and the free Lie comparison
status: published
origin: session
pipeline_run: conformal-field-theory-string-theory-step3-fresh-2026-11-04
domain: mathematics
library: physics
deps:
  - def-axiom-of-choice
  - def-gts-cohomological-differential-graded-lie-algebra
  - def-shifted-coalgebra-l-infinity-algebra
  - lem-shuffle-coproduct-coassociative-cocommutative-conilpotent
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-gts-cohomological-differential-graded-lie-algebra: mathematical-premise
  def-shifted-coalgebra-l-infinity-algebra: mathematical-premise
  lem-shuffle-coproduct-coassociative-cocommutative-conilpotent: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jacob Lurie, Derived Algebraic Geometry X: Formal Moduli Problems"
      url: https://www.math.ias.edu/~lurie/papers/DAG-X.pdf
      locator: Construction 2.2.1, Remarks 2.2.2–2.2.5, Proposition 2.2.7 with proof and Lemmas 2.2.8–2.2.9; Construction 2.2.13 and Remark 2.2.14 fix the coaugmented CE-chain/cochain convention. The graded PBW and contraction arguments are reconstructed below.
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 1
---

## Statement

Assume AC and let $k$ be a characteristic-zero field. For every unbounded cohomological dg Lie algebra $\mathfrak g$, the PBW filtration on its enveloping algebra satisfies $\operatorname{gr}U(\mathfrak g)\cong\operatorname{Sym}(\mathfrak g)$. Write $\bar S^c(W)=\bigoplus_{r\ge1}S^r(W)$ for the reduced coalgebra specified in [[def-shifted-coalgebra-l-infinity-algebra]], and set $C_*(\mathfrak g)=k\oplus\bar S^c(\mathfrak g[1])$, with coaugmentation $1\in k$, counit $\epsilon(1)=1$, $\epsilon(\bar S^c)=0$, and coproduct $\Delta(c)=1\otimes c+c\otimes1+\bar\Delta(c)$ on positive symmetric lengths. For homogeneous $x,y\in\mathfrak g$, the degree-$+1$ coderivation $Q$ is zero on $1$ and has corestrictions $q_1(sx)=-s(dx)$ and $q_2(sx\odot sy)=(-1)^{|x|+1}s[x,y]$, with all other $q_r$ zero; here $|sx|=|x|-1$, and [F3] fixes the coderivation convention. Let $U(\mathfrak g)$ be the differential graded quotient of $T_k(\mathfrak g)$ by $xy-(-1)^{|x||y|}yx-[x,y]$. Define the degree-$+1$ map $\tau:C_*(\mathfrak g)\to U(\mathfrak g)$ by $\tau(1)=0$, $\tau(sx)=x$, and $\tau=0$ on symmetric lengths other than one. The augmented Chevalley--Eilenberg module is the left $U(\mathfrak g)$-module
$$K(\mathfrak g)=U(\mathfrak g)\otimes_k C_*(\mathfrak g),\qquad D(u\otimes c)=d_Uu\otimes c+(-1)^{|u|}u\otimes Q(c)+(-1)^{|u|}\sum_{(c)}u\tau(c_{(1)})\otimes c_{(2)},$$
where $\Delta(c)=\sum_{(c)}c_{(1)}\otimes c_{(2)}$ is the coaugmented coproduct. Its augmentation is induced by the enveloping augmentation and the coalgebra counit. This module resolves the trivial left $U(\mathfrak g)$-module $k$ and computes $k\otimes^{\mathbf L}_{U(\mathfrak g)}k$. For every complex $V$, the natural inclusion of primitive generators
$$k\oplus V[1]\longrightarrow C_*(\operatorname{FreeLie}(V))$$
is a coalgebra quasi-isomorphism. Its full linear dual is an equivalence of augmented commutative dg algebras $C^*(\operatorname{FreeLie}(V))\to k\oplus V^\vee[-1]$.

## Statement references

[[def-axiom-of-choice]]

[[def-gts-cohomological-differential-graded-lie-algebra]]

[[def-shifted-coalgebra-l-infinity-algebra]]

[[lem-shuffle-coproduct-coassociative-cocommutative-conilpotent]]

## Facts & Assumptions

**Given:** The field, AC and unbounded complexes.

[F1] [[def-axiom-of-choice]] allows homogeneous basis and splitting choices.

[F2] [[def-gts-cohomological-differential-graded-lie-algebra]] gives the signed skew, Jacobi and differential identities.

[F3] [[def-shifted-coalgebra-l-infinity-algebra]] gives the suspension and coderivation conventions.

[F4] [[lem-shuffle-coproduct-coassociative-cocommutative-conilpotent]] supplies the symmetric coalgebra and its primitives.

## Proof

1.1 Choose and order a homogeneous basis of $\mathfrak g$. In its tensor algebra rewrite $xy$ for an inverted pair as $(-1)^{|x||y|}yx+[x,y]$, and rewrite the square of an odd basis vector $x$ as $[x,x]/2$. Order reductions first by word length and then by inversions. A bracket term has smaller length, and a swapped term has fewer inversions, so reduction terminates, even for an infinite basis, since every expression is finite. Disjoint reductions commute. For three distinct adjacent letters the difference of the two overlapping reductions is the signed Jacobi expression. For an odd repeated letter the overlap is $[x,[x,z]]-\tfrac12[\,[x,x],z]=0$; the triple-odd overlap is $[x,[x,x]]=0$. These follow from graded Jacobi in characteristic zero. The overlaps with an even repeated letter have no square reduction and reduce to the same signed Jacobi expression. Induction on the reduction order therefore gives unique reduced expressions. The ordered monomials, with odd basis vectors occurring at most once, form a basis for $U(\mathfrak g)$. Their leading terms give $\operatorname{gr}U(\mathfrak g)=\operatorname{Sym}(\mathfrak g)$, compatibly with the internal differential. [F1, F2, algebra]

1.2 The displayed formulas define a differential graded left $U(\mathfrak g)$-module. The Koszul signs in $\Delta$ are those of [F4]. The coderivation identity and $Q^2=0$ follow from [F3] and the dg Lie identities [F2]. In the expansion of $D^2$, the internal/internal terms use $d^2=0$; internal/action and internal/bracket terms use the differential derivation identity; the two-action terms cancel the action of the bracket by the defining relation $xy-(-1)^{|x||y|}yx=[x,y]$ of $U(\mathfrak g)$ in the Statement; and three-input terms are graded Jacobi. The coaugmentation term gives the unit summand, so $K(0)=k$. [F2, F3, F4, given, algebra, construct]

2.1 Filter $K$ by total number of enveloping letters plus suspended letters. The internal and action terms preserve this filtration degree, and bracket terms lower it. Its associated graded is $\operatorname{Sym}(\mathfrak g)\otimes\operatorname{Sym}(\mathfrak g[1])$, with differential $d_0=d_{\rm int}+\delta$, where $\delta(sx)=x$ and $\delta(x)=0$. Here $sx$ has degree $|x|-1$, and $d_{\rm int}(sx)=-s(dx)$. On this graded commutative algebra the degree $-1$ derivation $h$ given by $h(x)=sx$, $h(sx)=0$ satisfies $d_{\rm int}h+hd_{\rm int}=0$ and $\delta h+h\delta=E$, the derivation counting total letters. These identities hold on generators and hence on the whole algebra. Therefore $h/w$ contracts the positive weight-$w$ part for $d_0$; weight zero is $k$. The division is permitted in characteristic zero, for both even and odd generators. [F1, F2, F3, step 1.2, algebra]

3.1 If an augmentation-zero cycle in $K$ has largest weight $w>0$, the contraction in step 2.1 writes its weight-$w$ part as a boundary in the associated graded. Lift that primitive to $K$ and subtract its differential. The new cycle has smaller largest weight. Iterating reaches weight zero, where augmentation zero means zero. This proves exactness of $K\to k$ without an unbounded spectral-sequence convergence assumption. To justify derived tensor products, filter instead by suspended length: the internal differential preserves length and the other terms lower it. Every associated quotient is $U\otimes W$ for a $k$-complex $W$. Such a module is homotopically projective because $\operatorname{Hom}_U(U\otimes W,E)=\operatorname{Hom}_k(W,E)$ is acyclic for acyclic $E$, which is contractible over a field. A compatible nullhomotopy extends across successive length levels by correcting its defect in this acyclic Hom complex. Induction gives a nullhomotopy on the union. Thus $K$ is homotopically projective and the resolution computes $k\otimes_U^{\mathbf L}k=C_*(\mathfrak g)$. [F1, F2, step 2.1, algebra]

4.1 For $\mathfrak g=\operatorname{FreeLie}(V)$, the universal properties identify $U(\mathfrak g)=T(V)$. Concatenation gives a dg-exact sequence $0\to T(V)\otimes V\to T(V)\to k\to0$: every positive word has a unique last letter, and this decomposition commutes with the internal differential. The cone resolution $P=T(V)\otimes(k\oplus V[1])$, whose extra differential sends $sv$ to $v$, is homotopically projective by its two-step free-complex filtration. There is a natural $U$-module chain map $P\to K$ sending $1$ to $1\otimes1$ and $sv$ to the length-one suspended generator. It commutes with both internal and action differentials, and induces the identity on the augmentation $k$. Since both are homotopically projective resolutions, this map is a homotopy equivalence: its acyclic homotopically projective cone has nullhomotopic identity, by the extension argument of step 3.1. Tensoring with $k$ therefore gives the asserted natural quasi-isomorphism $k\oplus V[1]\to C_*(\mathfrak g)$. [F1, F2, F3, step 3.1, algebra]

5.1 The last map preserves coaugmentation and coproduct because every suspended generator is primitive in [F4]; its domain has no products of two suspended generators. Full linear duality over a field is exact (acyclic complexes split) and takes that coalgebra map to the augmented commutative algebra map in the Statement. Products, rather than finite-support duals, are used in each total cochain degree. Thus the assertion holds for arbitrary unbounded $V$; the finite positive case is included. [F1, F3, F4, step 4.1, algebra] ∎
