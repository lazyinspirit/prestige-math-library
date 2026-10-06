---
id: def-milnor-lambda-candidate-from-a-filling
kind: definition
title: "The Milnor lambda candidate from a supplied filling"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-boundary-middle-form-and-signature, def-relative-cup-product, lem-relative-pontryagin-square-equals-mixed-evaluation, thm-long-exact-sequence-of-a-pair-in-singular-cohomology, def-pontryagin-classes-by-complexification, def-axiom-of-choice, lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice, thm-choice-implies-dependent-implies-countable-choice]
justified_by: [thm-milnor-lambda-invariant-is-well-defined-modulo-seven]
aliases: []
landmark: false
dependency_level: 3
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "John Milnor, On Manifolds Homeomorphic to the 7-Sphere, Annals of Mathematics 64 (1956), 399-405"
      url: "https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf"
      locator: "printed pp. 399-401, the invariant lambda = 2 lambda(B) - signature(B) modulo 7 for a bounding manifold B"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem, section 9, printed pp. 109-110"
      url: "https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
      locator: "the role of the bounding manifold in the invariant"
---

## Definition

Assume the Axiom of Choice as inherited from the duality and characteristic-class
suppliers. Let $M$ be a closed oriented smooth seven-manifold with
$$H^3(M;\mathbb Z)=H^4(M;\mathbb Z)=0,$$
and let $W$ be a supplied compact oriented smooth eight-manifold with
$\partial W=M$. AC implies countable choice
([[thm-choice-implies-dependent-implies-countable-choice]]), so $W$ has a
finite CW homotopy model
([[lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice]]);
each connected component is therefore in the path-connected CW-type domain
of [[def-pontryagin-classes-by-complexification]]. More explicitly, the
components $W_\alpha$ are open and path connected by local path connectivity,
and compactness makes their number finite and each component compact. Every
singular simplex lies in one component, so restriction gives a canonical
isomorphism $H^4(W;\mathbb Z)\cong\prod_\alpha H^4(W_\alpha;\mathbb Z)$.
For a possibly disconnected filling, define $p_1(TW)$ to be the unique class
whose restriction to each $W_\alpha$ is $p_1(TW_\alpha)$ from that supplier.
This agrees with its definition for connected $W$ and commutes with
restriction and diffeomorphism pullback componentwise. For empty $W$ it is
the zero class.
The pair sequence
$$H^3(M;\mathbb Z)\to H^4(W,M;\mathbb Z)\xrightarrow{\ j\ }H^4(W;\mathbb Z)\to H^4(M;\mathbb Z)$$
of [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]] shows that
$j$ is an isomorphism: $H^3(M;\mathbb Z)=0$ gives injectivity (uniqueness of a
relative lift) and $H^4(M;\mathbb Z)=0$ gives surjectivity (existence), the
latter because the target group $H^4(M;\mathbb Z)$ is zero. Define
$$\bar p_1(W):=j^{-1}p_1(TW)\in H^4(W,M;\mathbb Z),$$
with $p_1$ the first Pontryagin class
[[def-pontryagin-classes-by-complexification]], and
$$q(W):=\langle\bar p_1(W)\smile\bar p_1(W),[W,M]\rangle,$$
the relative square evaluated on the relative fundamental class as in
[[def-relative-cup-product]]; the identity
$\langle\bar p_1\smile\bar p_1,[W,M]\rangle=\langle\bar p_1\smile j(\bar p_1),[W,M]\rangle$
of [[lem-relative-pontryagin-square-equals-mixed-evaluation]] makes the mixed
form of the evaluation available. Finally define the **filling-level candidate**
$$\lambda_W(M):=2q(W)-\sigma(W)\pmod 7,$$
where $\sigma(W)$ is the boundary signature of
[[def-boundary-middle-form-and-signature]] and the congruence class is taken
in $\mathbb Z/7$.

## Remarks

This definition is conditional on the *supplied* filling $W$: it asserts no
general existence of a compact oriented filling for a manifold satisfying the
cohomology vanishing, and it asserts no independence of the choice of $W$.
Well-definedness modulo seven under a change of filling, and invariance under
orientation-preserving boundary diffeomorphisms, are the content of the
following theorem [[thm-milnor-lambda-invariant-is-well-defined-modulo-seven]].
Orientation reversal of a filling negates both $q$ and $\sigma$ and therefore
negates $\lambda_W$; the class $p_1$ itself is orientation-independent. For
the concrete Milnor bundles the filling $W=D(\xi_{h,j})$ is explicitly
available, so no universal bounding theorem is needed for the exotic-sphere
examples of this page.
