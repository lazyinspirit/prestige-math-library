---
id: lem-relative-pontryagin-square-glues-across-a-seven-boundary
kind: lemma
title: "The relative Pontryagin square glues across a seven-dimensional boundary"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-milnor-lambda-candidate-from-a-filling, lem-collared-gluing-has-relative-excision-and-evaluation-maps, thm-mayer-vietoris-sequence-in-singular-cohomology, thm-long-exact-sequence-of-a-pair-in-singular-cohomology, thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes, def-relative-cup-product, prop-relative-cup-products-are-natural-and-compatible-with-connectors, def-axiom-of-choice, lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice, thm-choice-implies-dependent-implies-countable-choice, def-pontryagin-classes-by-complexification, thm-homotopy-invariance-of-vector-bundle-pullback]
justified_by: []
aliases: []
landmark: false
dependency_level: 4
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Milnor, On Manifolds Homeomorphic to the 7-Sphere, Annals of Mathematics 64 (1956), 399-405"
      url: "https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf"
      locator: "printed pp. 400-401, the gluing of two bounding manifolds and the evaluation of the relative square"
    - title: "Allen Hatcher, Algebraic Topology, Cambridge University Press 2002 (complete book)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 3.2, Mayer-Vietoris, printed pp. 149-151; Section 3.3, relative products and duality"
---

## Statement

Assume the Axiom of Choice as inherited from the duality and
characteristic-class suppliers. Let $M$ be a closed oriented smooth
seven-manifold with $H^3(M;\mathbb Z)=H^4(M;\mathbb Z)=0$, let $W,W'$ be compact
oriented smooth eight-manifolds with $\partial W=M=\partial W'$, and put
$N=W\cup_M(-W')$. Then
$$\langle p_1(TN)^2,[N]\rangle=q(W)-q(W'),$$
where $q$ is the relative square of
[[def-milnor-lambda-candidate-from-a-filling]]. Orientation reversal changes
the evaluations on the two sides, not the Pontryagin class itself.

## Facts & Assumptions

**Given:** The manifold $M$ with $H^3(M;\mathbb Z)=H^4(M;\mathbb Z)=0$, the two fillings $W,W'$ and the closed oriented glued manifold $N=W\cup_M(-W')$.

[A1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]).

[L1] Under the vanishing hypotheses the relative-to-absolute maps $j_W:H^4(W,M;\mathbb Z)\to H^4(W;\mathbb Z)$ and $j_{W'}$ are isomorphisms; the classes $\bar p_1(W)=j_W^{-1}p_1(TW)$ and $q(W)=\langle\bar p_1(W)\smile\bar p_1(W),[W,M]\rangle$ are defined by [[def-milnor-lambda-candidate-from-a-filling]], and likewise on the second side. [A1, given]

[L2] For the collared gluing $N=W\cup_M(-W')$ with collar cover $U,V$ there are excision isomorphisms and evaluation comparisons, and $[N]$ restricts to $[W,M]$ on the first side and to $-[W',M]$ on the second ([[lem-collared-gluing-has-relative-excision-and-evaluation-maps]]).

[L3] Mayer-Vietoris for the open cover $U,V$ gives the exact segment $H^3(U\cap V)\to H^4(N)\to H^4(U)\oplus H^4(V)\to H^4(U\cap V)$, and the pair sequences give the exactness used in [L1] ([[thm-mayer-vietoris-sequence-in-singular-cohomology]], [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]]).

[L4] Pontryagin classes are natural on CW bases and $p_1$ is orientation-independent ([[thm-naturality-stability-and-mod-two-reduction-of-pontryagin-classes]]). AC implies $\mathrm{AC}_\omega$, so all compact smooth manifolds here have finite CW homotopy models ([[thm-choice-implies-dependent-implies-countable-choice]], [[lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice]]). Classes on path-connected CW-type bases are defined by transport ([[def-pontryagin-classes-by-complexification]]). For a map $f:A\to B$, choose model equivalences $a:X\to A$, $b:Y\to B$ and a homotopy inverse $b'$ of $b$. Then $bb'fa\simeq fa$, so their pulled-back bundles are isomorphic ([[thm-homotopy-invariance-of-vector-bundle-pullback]]). Naturality for $b'fa:X\to Y$ and invertibility of $a^*$ prove naturality for $f$ after transport. For a possibly disconnected compact smooth manifold, its finitely many open path-connected components each have finite CW type; define $p_1$ componentwise as in [L1]. The naturality calculation applies on each component, and the singular-cochain product decomposition assembles the resulting equalities. Thus the same formula applies to the inclusions of the smooth halves here, including disconnected fillings.

[L5] Relative cup products are natural and compatible with the excision and connector maps ([[def-relative-cup-product]], [[prop-relative-cup-products-are-natural-and-compatible-with-connectors]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the maps $j_W,j_{W'}$ are integral isomorphisms, so $\bar p_1(W)$ and $\bar p_1(W')$ and the relative squares $q(W),q(W')$ are defined. [L1, A1]

2.1 With the collar cover $U,V$ of [L2], the identifications $U\simeq W$, $V\simeq W'$, $U\cap V\simeq M$ turn the Mayer-Vietoris segment [L3] into $0=H^3(M)\to H^4(N)\to H^4(W)\oplus H^4(W')\to H^4(M)=0$, so restriction to the two halves is an isomorphism $H^4(N)\cong H^4(W)\oplus H^4(W')$. [step 1.1, L2, L3]

3.1 For $x\in H^4(W)$ define $L_W(x)=j_VE_W(j_W^{-1}x)$, using the inverse excision map of [L2], and similarly $L_{W'}(x')=j_UE_{W'}(j_{W'}^{-1}x')$; their restrictions are $(x,0)$ and $(0,x')$ respectively, because the extended relative class vanishes on the opposite side, and by step 2.1 they are the unique classes with those restrictions. [step 2.1, L2]

3.2 The tangent bundles of $N$ restrict to $TW$ and $TW'$ on the two halves: on a collar both tangent bundles are $TM\oplus\mathbb R$ with the normal coordinate reversed at the seam, and the derivative of the gluing identification gives a real bundle isomorphism; by [L4] the Pontryagin class is unchanged, so $p_1(TN)$ restricts to $p_1(TW)$ and $p_1(TW')$. [step 2.1, L2, L4]

4.1 By step 3.1 and step 3.2 the class $L_W(p_1(TW))+L_{W'}(p_1(TW'))$ has the same restrictions as $p_1(TN)$; the uniqueness in step 2.1 gives $p_1(TN)=L_W(p_1(TW))+L_{W'}(p_1(TW'))$. [step 3.1, step 3.2]

4.2 For relative classes $a\in H^4(W,M;\mathbb Z)$ and $b\in H^4(W',M;\mathbb{Z})$, the product $E_W(a)\smile E_{W'}(b)\in H^8(N,V\cup U)=H^8(N,N)=0$ lies in a zero group, because $U\cup V=N$; hence the cross products $L_W(x)\smile L_{W'}(x')$ and its reverse vanish in $H^8(N;\mathbb Z)$. [step 3.1, L2, L5]

5.1 By the evaluation comparison of [L2] and naturality of the relative products [L5], the same-side evaluation satisfies $\langle L_W(x)\smile L_W(y),[N]\rangle=\langle j_W^{-1}x\smile y,[W,M]\rangle$, which for $x=y=p_1(TW)$ is $q(W)$; on the second side the restriction of $[N]$ is $-[W',M]$, so the evaluation is $-q(W')$. [step 4.1, step 4.2, L2, L5]

6.1 Expanding the square in step 4.1 and using that both cross products vanish by step 4.2 gives $p_1(TN)^2=L_W(p_1(TW))^2+L_{W'}(p_1(TW'))^2$; evaluating on $[N]$ with step 5.1 yields $\langle p_1(TN)^2,[N]\rangle=q(W)-q(W')$, as asserted. [step 4.1, step 4.2, step 5.1] ∎
