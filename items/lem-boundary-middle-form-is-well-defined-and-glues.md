---
id: lem-boundary-middle-form-is-well-defined-and-glues
kind: lemma
title: "The boundary middle form is well defined and glues"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-boundary-middle-form-and-signature, thm-poincare-lefschetz-duality, thm-mayer-vietoris-sequence-in-singular-cohomology, lem-relative-middle-cup-products-are-symmetric, lem-relative-cap-evaluation-identity, lem-collared-gluing-has-relative-excision-and-evaluation-maps, lem-compact-oriented-boundary-manifolds-have-finite-dimensional-cohomology, lem-integral-middle-cohomology-vanishing-implies-real-vanishing, def-middle-dimensional-intersection-form, def-signature-of-a-closed-oriented-four-k-manifold, thm-sylvesters-law-of-inertia, def-axiom-of-choice, cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]
justified_by: []
aliases: []
landmark: false
dependency_level: 8
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John Milnor, On Manifolds Homeomorphic to the 7-Sphere, Annals of Mathematics 64 (1956), 399-405"
      url: "https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf"
      locator: "printed pp. 400-401, the middle form of a bounding manifold and its behaviour under gluing"
    - title: "Allen Hatcher, Algebraic Topology, Cambridge University Press 2002 (complete book)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 3.3, Poincare-Lefschetz duality and the nonsingular pairing of middle cohomology"
---

## Statement

Assume the Axiom of Choice as inherited from Poincare-Lefschetz duality. The
boundary middle form $Q_W$ of [[def-boundary-middle-form-and-signature]] is
well defined and symmetric on its image $I$ and is nondegenerate there. If
$W,W'$ are compact oriented eight-manifolds with identified oriented boundary
$M$ satisfying $H^3(M;\mathbb Z)=H^4(M;\mathbb Z)=0$, then
$N=W\cup_M(-W')$ is closed oriented and
$$\sigma(N)=\sigma(W)-\sigma(W').$$

## Facts & Assumptions

**Given:** Compact oriented eight-manifolds $W,W'$ with common oriented boundary $M=\partial W=\partial W'$ satisfying the integral vanishing, and the classes $A=H^4(W,M;\mathbb R)$, $B=H^4(W;\mathbb R)$, $j:A\to B$, $I=\operatorname{im}j$.

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]).

[L1] Poincare-Lefschetz duality identifies $A$ with $H_4(W;\mathbb R)$, and evaluation identifies $B$ with its full linear dual ([[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]]). Since these spaces are finite-dimensional by [L3], this gives a perfect pairing $A\times B\to\mathbb R$ by $T(a,x)=\langle a\smile x,[W,M]\rangle$, and the relative cap/evaluation identity identifies it with the cap pairing determined by $[W,M]$ ([[thm-poincare-lefschetz-duality]], [[lem-relative-cap-evaluation-identity]]).

[L2] The relative middle-degree cup product is symmetric, because both factors have degree four: $a\smile b=b\smile a$ ([[lem-relative-middle-cup-products-are-symmetric]]).

[L3] $A$ and $B$ are finite-dimensional over $\mathbb R$ ([[lem-compact-oriented-boundary-manifolds-have-finite-dimensional-cohomology]]), and integral vanishing of $H^3,H^4$ of $M$ implies the corresponding real vanishing ([[lem-integral-middle-cohomology-vanishing-implies-real-vanishing]]).

[L4] The collared gluing of $W$ and $W'$ along $M$ gives the closed oriented $N=W\cup_M(-W')$, with excision and evaluation comparisons and the restrictions $[W,M]$ and $-[W',M]$ of $[N]$ ([[lem-collared-gluing-has-relative-excision-and-evaluation-maps]]).

[L5] The closed middle intersection form and closed signature of a closed oriented four-$k$-manifold are defined by Poincare duality, and Sylvester's law of inertia makes the signature additive on orthogonal direct sums with a sign for negated summands ([[def-middle-dimensional-intersection-form]], [[def-signature-of-a-closed-oriented-four-k-manifold]], [[thm-sylvesters-law-of-inertia]]).

[L6] Mayer-Vietoris computes $H^*(N;\mathbb R)$ from the collar cover $U,V$ ([[thm-mayer-vietoris-sequence-in-singular-cohomology]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L3] the pairing $T$ on the finite-dimensional spaces $A\times B$ is perfect; by [L2] it satisfies $T(a,jb)=T(b,ja)$ for all $a,b\in A$, since $j$ is restriction of the second factor to $I$. [L1, L2, L3, A1]

2.1 Well-definedness of $Q_W$: if $j(a-a')=0$, then for every $b\in A$, $T(a-a',jb)=T(b,j(a-a'))=0$ by step 1.1 and additivity; since $jb$ ranges over $I$, the functional $T(a-a',\cdot)$ vanishes on $I$, so $Q_W(x,y)=T(a,y)$ is independent of the lift $a$ of $x$; symmetry of $Q_W$ follows from the same identity with $x=ja$, $y=jb$. [step 1.1]

3.1 Nondegeneracy: suppose $x=j(a)\in I$ satisfies $Q_W(x,y)=0$ for all $y\in I$; then $T(a,jb)=0$ for every $b\in A$, so $T(b,j a)=T(a,jb)=0$ for every $b$, and perfectness of $T$ in the $B$ variable forces $x=ja=0$; hence $I$ has zero radical and $Q_W$ is already nondegenerate on $I$, so the quotient in the definition is the identity. [step 2.1, L1]

4.1 By [L3] the integral vanishing on $M$ implies the real vanishing, so the maps $j_W:H^4(W,M;\mathbb R)\to H^4(W;\mathbb R)$ and $j_{W'}$ are isomorphisms; hence $I=B$ on both sides. [step 3.1, L3]

5.1 By [L6] and [L4] the restriction $H^4(N;\mathbb R)\to H^4(W;\mathbb R)\oplus H^4(W';\mathbb R)$ is an isomorphism, and the closed middle form of $N$ restricts to the block form $Q_W\oplus(-Q_{W'})$: same-side products evaluate as the two boundary forms by the evaluation comparison of [L4], while the cross products vanish because the corresponding relative product lies in $H^8(N,N)=0$. [step 4.1, L4, L6]

6.1 By [L5] and step 5.1 the signature of the closed form on $N$ is the signature of $Q_W\oplus(-Q_{W'})$, which by Sylvester inertia is $\sigma(W)-\sigma(W')$; hence $\sigma(N)=\sigma(W)-\sigma(W')$. [step 5.1, L5]

7.1 Therefore the boundary middle form is well defined, symmetric and nondegenerate on $I$, and the glued closed manifold has signature the difference of the two boundary signatures, as asserted. [step 3.1, step 6.1, L4] ∎
