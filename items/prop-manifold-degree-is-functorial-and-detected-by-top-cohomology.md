---
id: "prop-manifold-degree-is-functorial-and-detected-by-top-cohomology"
kind: "proposition"
title: "Manifold degree is functorial and detected in top cohomology"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-degree-of-a-map-between-oriented-closed-manifolds","prop-singular-chains-and-homology-are-covariantly-functorial","prop-singular-cohomology-is-contravariantly-functorial","thm-poincare-duality-for-oriented-topological-manifolds","prop-zero-th-singular-homology-is-free-on-path-components","def-cap-product-with-cohomology-first","def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, §3.3, pp.258–259
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $f:M\to N$ and $g:N\to P$ be continuous maps between nonempty connected closed integrally oriented $n$-manifolds. Then
$$\deg(\operatorname{id}_M)=1,\qquad\deg(g\circ f)=\deg(g)\deg(f).$$
Reversing exactly one of the source or target orientations changes the degree sign, while reversing both leaves it unchanged. These assertions are choice-free.

Assume AC for the following top-cohomology assertion. There is a unique $u_M\in H^n(M;\mathbb Z)$ with $\langle u_M,[M]\rangle=1$, and similarly for $N$. These generate their top cohomology groups, and
$$f^*u_N=\deg(f)u_M.$$
Thus the action on top cohomology detects exactly the degree, including degree zero. AC is inherited only from Poincaré duality's atlas selection and local UCT.

## Facts & Assumptions

[F1] [[def-degree-of-a-map-between-oriented-closed-manifolds]] gives the unique integer coefficient of $f_*[M]$ in $[N]$, including its orientation sign conventions.

[F2] [[prop-singular-chains-and-homology-are-covariantly-functorial]] gives induced homomorphisms, identity and composition on homology.

[F3] [[prop-singular-cohomology-is-contravariantly-functorial]] gives pullback by cochain precomposition with $f_\#$.

[F4] [[thm-poincare-duality-for-oriented-topological-manifolds]] gives $H^n(M;\mathbb Z)\cong H_0(M;\mathbb Z)$ by fundamental cap under AC.

[F5] [[prop-zero-th-singular-homology-is-free-on-path-components]] identifies $H_0$ with the free group on path components, sending a point to its component generator.

[F6] [[def-cap-product-with-cohomology-first]] says top-degree cap evaluates a cochain on a simplex and keeps its final vertex.

[F7] [[def-axiom-of-choice]] is assumed for the use of [F4] only.

## Proof

**Given:** $M,N,P,f,g$ as in the statement, and their integral fundamental classes. AC is not used until step 1.3.

1.1 By [F2], $(\operatorname{id}_M)_*[M]=[M]$, so uniqueness in [F1] gives degree one. For the composite, linearity and functoriality give $$(g\circ f)_*[M]=g_*(\deg(f)[N])=\deg(f)\deg(g)[P].$$ The coefficient is unique by [F1], proving the product formula in $\mathbb Z$. If either degree is zero, this same equality gives zero for the composite. [F1, F2, given]

1.2 Negating the source fundamental class negates its image by [F2], hence its coordinate by [F1]. If the target class is replaced by $-[N]$, the same image $d[N]$ has coordinate $-d$ relative to the new class. Applying both changes gives $d$ again. These statements include $d=0$, where negation has no effect. [F1, F2, given]

1.3 Now assume [F7]. A nonempty connected manifold is path-connected: the points reachable by a path from a fixed point form an open set, because each point has a path-connected coordinate-ball neighborhood and paths can be extended inside it. Every other reachability class is open for the same reason, so the first class has open complement. Connectedness forces it to be the whole manifold. Thus [F5] identifies $H_0(M;\mathbb Z)$ with $\mathbb Z$ by total-coefficient augmentation. For an $n$-cocycle $\alpha$ and fundamental cycle $z=\sum_i m_i\sigma_i$, [F6] gives $$\epsilon(\alpha\cap z)=\sum_i m_i\alpha(\sigma_i)=\alpha(z).$$ Hence [F4] followed by this augmentation is precisely the evaluation map $E_M:H^n(M;\mathbb Z)\to\mathbb Z$, $a\mapsto\langle a,[M]\rangle$. It is an isomorphism, so $u_M=E_M^{-1}(1)$ exists uniquely and generates the entire group, not just a quotient modulo torsion. The same argument applies to $N$. [F1, F4, F5, F6, F7, given]

2.1 Let $\beta$ be a cocycle representing $u_N$ and $z$ a cycle representing $[M]$. By [F3], evaluation of $f^*u_N$ on $z$ is $(\beta f_\#)(z)=\beta(f_\#z)$. The chain $f_\#z$ represents $f_*[M]=\deg(f)[N]$ by [F1] and [F2]. Cocycle evaluation ignores a boundary since $\beta\partial=0$, so this value is $\deg(f)\langle u_N,[N]\rangle=\deg(f)$. Thus $E_M(f^*u_N)=\deg(f)=E_M(\deg(f)u_M)$. Injectivity of $E_M$ in step 1.3 proves the asserted equality. In particular degree zero gives zero pullback on the generator, and if the pullback is zero its evaluation makes the degree zero. [F1, F2, F3, step 1.3]

3.1 The degree identities are steps 1.1 and 1.2, and cohomology detection is step 2.1. For $n=0$, the manifolds are points, and [F1] gives degree $\epsilon_M\epsilon_N$; the normalized zero-cochain has value $\epsilon_M$ on the source point, so pullback value $\epsilon_N$ equals $\epsilon_M\epsilon_N\epsilon_M$, verifying the formula explicitly. Empty manifolds are excluded by [F1]'s scalar-degree hypothesis. Coefficients are $\mathbb Z$, so zero-ring ambiguity does not arise. Degenerate simplices obey the evaluation computation in step 1.3. There is no AC in the identity, composition or orientation calculations; [F7] is used only through [F4] for the top-cohomology isomorphism. [F1, F3, F4, F6, F7, step 1.1, step 1.2, step 1.3, step 2.1] ∎
