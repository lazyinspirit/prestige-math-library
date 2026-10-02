---
id: cex-setwise-puncture-preservation-does-not-define-the-pure-mapping-class-group
kind: counterexample
title: "Setwise puncture preservation does not imply purity"
status: draft
origin: pipeline
landmark: false
deps: [def-pure-mapping-class-group-of-a-punctured-disk,
       def-boundary-fixed-mapping-class-group-of-a-punctured-disk,
       ex-a-half-twist-as-a-punctured-disk-homeomorphism,
       def-elementary-geometric-half-twist,
       def-finite-symmetric-group-and-permutation-notation,
       def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, section 1.3, author manuscript pp. 5-7"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Juan Gonzalez-Meneses, Basic results on braid groups, section 1.4, printed pp. 6-7"
      url: "https://arxiv.org/pdf/1010.0321"
verification:
  precheck: pass
---

## Statement refuted

**Refuted claim:** for the punctured disc, preserving the marked set $Q_n$
setwise is the same as being pure. Precisely: every homeomorphism $f$ of $D^2$
that fixes $\partial D^2$ pointwise and satisfies
$f(\{q_1,\dots,q_n\})=\{q_1,\dots,q_n\}$ is isotopic rel $\partial D^2$ through homeomorphisms preserving $Q_n$ setwise at every time to a
homeomorphism that fixes every $q_i$ individually, so that
$$\operatorname{PMod}(D^2,Q_n;\partial D^2) =\operatorname{Mod}(D^2,Q_n;\partial D^2);$$
equivalently, every class of the setwise stabiliser is a pure class.

The witness is the explicit supported positive half twist $H_1$ of
[[ex-a-half-twist-as-a-punctured-disk-homeomorphism]]. For $n\ge2$ and an
adjacent index $i$, the class of $H_1$ lies in
$\operatorname{Mod}(D^2,Q_n;\partial D^2)$ but not in
$\operatorname{PMod}(D^2,Q_n;\partial D^2)$: the homeomorphism $H_1$ fixes
$\partial D^2$ pointwise and preserves $Q_n$ setwise, yet it exchanges $q_i$
and $q_{i+1}$ and fixes all other marked points, so it induces the transposition
of $i$ and $i+1$ rather than the identity permutation of the marked set.

**What is and is not claimed.** What fails is exactly the implication "setwise
preservation $\Rightarrow$ purity" and the resulting equality of the two groups.
Nothing here asserts that the transposition is the only permutation that can
occur, and nothing here computes an isotopy invariant beyond the permutation
of the marked set.

## Facts & Assumptions

**Given:** The Axiom of Choice, the natural number $n\ge2$, the adjacent index
$1\le i\le n-1$, the base configuration $Q_n=(q_1,\dots,q_n)$, and the explicit
homeomorphism $H_1$ of
[[ex-a-half-twist-as-a-punctured-disk-homeomorphism]] with its collar function
and support disc $U_i$.

[F1] The explicit half rotation $H$ of the example satisfies: every $H_s$ is a
homeomorphism of $D^2$ fixing $\partial D^2$ pointwise and fixing every point
outside the support disc $U_i$; on the two adjacent punctures
$H_s(q_i)=m_i+h(-\cos\pi s,-\sin\pi s)$ and
$H_s(q_{i+1})=m_i+h(\cos\pi s,\sin\pi s)$; every other base point is fixed
throughout; and at $s=1$ the two moving punctures are exchanged, so $H_1$
preserves $Q_n$ setwise and lies in
$\operatorname{Homeo}^+(D^2,\partial D^2;Q_n)$
([[ex-a-half-twist-as-a-punctured-disk-homeomorphism]]).

[F2] $\operatorname{Homeo}^+(D^2,\partial D^2;\hat Q_n)$ denotes the subgroup of
homeomorphisms fixing $\partial D^2$ pointwise **and every marked point**, and
$\operatorname{PMod}(D^2,Q_n;\partial D^2)$ is its set of path components; the
inclusion of the pointwise stabiliser into the setwise stabiliser induces an
injection, so $\operatorname{PMod}(D^2,Q_n;\partial D^2)$ is identified with
the subgroup of $\operatorname{Mod}(D^2,Q_n;\partial D^2)$ consisting of the
classes whose permutation of $Q_n$ is trivial; the permutation induced by a
representative is locally constant along a path in the setwise stabiliser,
because each strand $s\mapsto f_s(q_j)$ is continuous and lands in the finite
discrete set $\{q_1,\dots,q_n\}$
([[def-pure-mapping-class-group-of-a-punctured-disk]]).

[F3] $\operatorname{Homeo}^+(D^2,\partial D^2;Q_n)$ is the setwise stabiliser
of $Q_n$ in the boundary-fixing group, on $\partial D^2$ each element fixes the
circle pointwise, each $f$ in it has a unique permutation $\pi(f)\in S_n$ with
$f(q_j)=q_{\pi(f)(j-1)+1}$ for $1\le j\le n$, using the identification $\kappa(j)=j-1$ of point labels with $\{0,\dots,n-1\}$, and
$\operatorname{Mod}(D^2,Q_n;\partial D^2)$ is its set of isotopy classes, two
elements being isotopic exactly when they are joined by a path in this
stabiliser ([[def-boundary-fixed-mapping-class-group-of-a-punctured-disk]]).

[F4] The standard positive half twist $\sigma_i$ is a braid whose endpoint
permutation exchanges the point labels $i$ and $i+1$, that is, it is the transposition $(i-1\ i)$ in $S_n$; this is not the identity
permutation ([[def-elementary-geometric-half-twist]],
[[def-finite-symmetric-group-and-permutation-notation]]).

[F5] The Axiom of Choice is assumed
([[def-axiom-of-choice]]).

## Counterexample

1.1 **The witness and the permutation it induces.** By [F1], which is available under the standing Axiom of Choice [F5], the homeomorphism $H_1$ fixes $\partial D^2$ pointwise, fixes every point outside $U_i$, and satisfies $H_1(q_i)=q_{i+1}$, $H_1(q_{i+1})=q_i$, and $H_1(q_k)=q_k$ for $k\notin\{i,i+1\}$, so $H_1$ preserves the marked set $Q_n$ setwise and its unique permutation $\pi(H_1)\in S_n$ of [F3] is the transposition $(i-1\ i)$ on $\{0,\dots,n-1\}$ (exchanging point labels $i$ and $i+1$), which differs from the identity permutation by [F4]; in particular $H_1$ does not fix every marked point individually, and $H_1$ is a member of the setwise stabiliser but not of the pointwise stabiliser of [F2]. [F1, F2, F3, F4, F5]

1.2 **The permutation is an isotopy invariant.** Let $s\mapsto f_s$ be any path in $\operatorname{Homeo}^+(D^2,\partial D^2;Q_n)$, so that it is an isotopy rel $\partial D^2$ from $f_0$ to $f_1$; for each label $j$ the map $s\mapsto f_s(q_j)$ is continuous and takes values in the finite set $\{q_1,\dots,q_n\}$, which is discrete in the subspace topology, hence is constant on the connected interval $I$; therefore each $\pi(f_s)$ is defined and independent of $s$, and every representative of the isotopy class of $f_0$ induces the same permutation $\pi(f_0)$. [F2, F3]

2.1 **The class is not pure.** Since $H_1$ lies in the setwise stabiliser, its class $[H_1]$ lies in $\operatorname{Mod}(D^2,Q_n;\partial D^2)$ by [F3], and by step 1.2 every representative of $[H_1]$ induces the transposition of $i$ and $i+1$ on the marked set; this permutation is not trivial by [F4], so by the identification of [F2] the class $[H_1]$ is not an element of $\operatorname{PMod}(D^2,Q_n;\partial D^2)$. [F2, F4, step 1.1, step 1.2]

3.1 **Conclusion.** Step 1.1 exhibits a homeomorphism fixing $\partial D^2$ pointwise that preserves $Q_n$ setwise without fixing its points, and step 2.1 shows that its isotopy class lies outside $\operatorname{PMod}(D^2,Q_n;\partial D^2)$; hence setwise preservation of the punctures does not imply purity, not even for a single representative class, and the two subgroups of $\operatorname{Mod}(D^2,Q_n;\partial D^2)$ are distinct whenever $n\ge2$, with $\operatorname{PMod}$ the strict subgroup of classes of trivial permutation. ∎ [step 2.1, F2]

## Remarks

- The witness is the geometric half twist: the isotopy class of the positive
  braid generator $\sigma_i$ acts on the marked set by a transposition, while
  the boundary-fixed pure subgroup is by definition the part of the mapping
  class group acting trivially. The distinction is visible already for $n=2$,
  where the only non-identity permutation is the transposition realised by the
  half twist.
- The discreteness of the permutation is what makes the counterexample robust:
  no isotopy rel $\partial D^2$ can convert the transposition into the identity,
  because the strands would have to leave the marked set, which the setwise
  condition forbids.
