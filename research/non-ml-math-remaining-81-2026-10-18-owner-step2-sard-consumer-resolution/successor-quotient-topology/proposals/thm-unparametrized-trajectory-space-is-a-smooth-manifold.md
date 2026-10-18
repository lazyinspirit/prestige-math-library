---
id: thm-unparametrized-trajectory-space-is-a-smooth-manifold
kind: theorem
title: "The unparametrized trajectory space is a smooth manifold"
status: published
verification:
  audited: 2026-09-07
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: ["def-morse-smale-pair", "prop-parametrized-morse-trajectory-space-is-a-manifold", "def-unparametrized-morse-trajectory-moduli-space", "lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories", "thm-transverse-fibre-product-theorem", "def-downward-gradient-like-vector-field", "def-parametrized-morse-trajectory-space", "lem-stable-and-unstable-manifolds-are-flow-invariant", "thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces", "thm-fundamental-theorem-on-flows", "thm-a-regular-level-set-is-an-embedded-submanifold", "thm-parametrized-implicit-function-theorem-with-higher-regularity", "def-quotient-topology"]
proof_strategy: direct
sources:
  references:
    - title: "Michèle Audin and Mihai Damian, Morse Theory and Floer Homology, §2.2.b"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
---

## Statement

For a Morse--Smale pair and distinct critical points $p,q$, $\mathcal M(p,q)$ is a smooth manifold, possibly empty. When nonempty, it has dimension $\lambda(p)-\lambda(q)-1$. If $\lambda(p)-\lambda(q)\le0$, then $\mathcal M(p,q)=\varnothing$.

## Facts & Assumptions

**Given:** A Morse--Smale pair and distinct critical points $p,q$, with no nonemptiness assumption.

[F1] The parametrized space is a smooth manifold, possibly empty; when nonempty its dimension is $\lambda(p)-\lambda(q)$, and a negative index difference forces emptiness ([[prop-parametrized-morse-trajectory-space-is-a-manifold]]).

[F2] Parametrized trajectories are full nonconstant flow lines with the specified critical endpoint limits, evaluation at zero identifies them with the point-marked stable/unstable intersection, and $df(X)<0$ off the critical set ([[def-parametrized-morse-trajectory-space]], [[def-downward-gradient-like-vector-field]]). The uniqueness-of-level-representative argument in steps 1.1–2.1 of [[lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories]] uses only continuity, endpoint limits and strict decrease; that bijection argument is repeated below without assuming ambient regularity of the chosen value.

[F3] Stable and unstable manifolds are flow invariant, and their smooth immersion charts are transported local-disk charts; the global flow is jointly smooth. These charts give a smooth time-translation action on their transverse fibre product and a smooth evaluation map ([[lem-stable-and-unstable-manifolds-are-flow-invariant]], [[thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces]], [[thm-fundamental-theorem-on-flows]], [[thm-transverse-fibre-product-theorem]]).

[F4] A nonempty fibre of a smooth map at a regular value is an embedded submanifold of the source with codimension equal to the target dimension ([[thm-a-regular-level-set-is-an-embedded-submanifold]]).

[F5] A scalar equation with nonzero time derivative has a locally unique smooth hitting time, with all finite-dimensional variables retained as parameters ([[thm-parametrized-implicit-function-theorem-with-higher-regularity]]).

[F6] For the orbit projection $q:P\to P/\mathbb R$, the quotient topology has $U$ open exactly when $q^{-1}(U)$ is open in $P$; in particular $q$ is continuous ([[def-quotient-topology]]). The moduli Definition initially specifies only an orbit set ([[def-unparametrized-morse-trajectory-moduli-space]]).

## Proof

**Proof technique:** direct.

1.1 Put $P=\widetilde{\mathcal M}(p,q)$. If $P=\varnothing$, its orbit set $\mathcal M(p,q)$ is empty and has the empty smooth structure; no dimension is assigned by a negative formula. Assume henceforth that $P$ is nonempty. No point of a trajectory is critical: flow uniqueness would then make it constant, contradicting its distinct endpoint limits. In the transported immersion charts of [F3], the action $t\cdot\gamma=\gamma(\,\cdot+t)$ is smooth and evaluates to $\Phi_t(\gamma(0))$. Its tangent vector $V$ on the fibre product evaluates to $X(\gamma(0))\ne0$, so $V$ is nonzero. Hence the dimension of the nonempty smooth manifold $P$ is at least one. By [F1], this dimension is $\lambda(p)-\lambda(q)$; in particular an index difference at most zero forces $P$, and therefore its orbit set, to be empty. [F1, F2, F3, given, cases]

2.1 In the nonempty case strict decrease and the endpoint limits imply $f(p)>f(q)$. Set $c=(f(p)+f(q))/2$, without imposing any global regular-value condition on the ambient function $f$, and put $h=f\circ\operatorname{ev}_0:P\to\mathbb R$. This map is smooth by [F3]. For every $\gamma\in P$, the flow tangent vector of step 1.1 satisfies $dh_\gamma(V)=df_{\gamma(0)}(X)<0$, so $h$ is a submersion. For each trajectory, continuity and its two endpoint limits give a finite time $t_0$ with $f(\gamma(t_0))=c$, and strict decrease makes $t_0$ unique. In particular $h^{-1}(c)$ is nonempty. Apply [F4] to $h$, whose scalar target has dimension one: this slice is an embedded codimension-one submanifold of $P$, of dimension $\lambda(p)-\lambda(q)-1\ge0$. [F1, F2, F3, F4, step 1.1, construct, algebra]

3.1 Translating each trajectory by its unique time $t_0$ from step 2.1 gives exactly one representative in $h^{-1}(c)$. Conversely, two representatives in the same time orbit can both lie in that slice only if their translation is zero. This is the level-representative bijection, using only the continuity and strict-decrease part of [F2]. Put $S=h^{-1}(c)$. The same equation $h(t\cdot\gamma)=c$, now with $\gamma$ varying in a chart of the entire $P$, has nonzero time derivative at every solution. By [F5] its unique hitting time $\tau(\gamma)$ is smooth locally on $P$; uniqueness patches these local functions globally. It satisfies $\tau(s\cdot\gamma)=\tau(\gamma)-s$, so $r(\gamma)=\tau(\gamma)\cdot\gamma$ is a smooth orbit-invariant map $P\to S$ restricting to the identity on $S$. Let $q:P\to P/\mathbb R$ carry the quotient topology [F6]. The induced inverse $\bar r:P/\mathbb R\to S$ is continuous: for every open $U\subseteq S$, $q^{-1}(\bar r^{-1}(U))=r^{-1}(U)$ is open, and [F6] applies. Conversely $q|_S$ is continuous, and these two maps are inverses. Thus the slice bijection is a homeomorphism for the quotient topology. Transport its smooth structure to $\mathcal M(p,q)$; its underlying topology is precisely that quotient topology, and its dimension is the one in step 2.1. Any other $c'$ strictly between the endpoint values gives the same smooth structure: the equation $h(t\cdot\gamma)=c'$ has nonzero derivative in $t$, so [F5] makes the unique hitting time smooth locally on the first slice; uniqueness patches these local times, and the smooth flow action gives mutually inverse smooth change-of-slice maps. Thus the construction and the empty case prove the full statement without Sard's theorem, an ambient regular level, or an added choice hypothesis. [F2, F3, F5, F6, step 1.1, step 2.1, construct] ∎
