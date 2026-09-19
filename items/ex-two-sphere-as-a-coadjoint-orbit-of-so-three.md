---
id: ex-two-sphere-as-a-coadjoint-orbit-of-so-three
kind: example
title: The two-sphere as a coadjoint orbit of SO(3)
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-coadjoint-orbits-are-symplectic-manifolds, prop-coadjoint-orbit-inclusion-is-an-equivariant-moment-map, ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups, def-cross-product-in-r3, def-coadjoint-representation-of-a-lie-group, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.5, Example 7.26, printed page 92
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Homework 17 and §22.4, printed pages 139--140
proof_strategy: direct
---

## Example

Identify $\mathfrak{so}(3)$ with $\mathbb R^3$ by $v\mapsto(u\mapsto v\times u)$,
so that the bracket becomes the cross product, the adjoint and coadjoint
actions become the standard rotation action of $SO(3)$ on $\mathbb R^3$, and
$\mathfrak{so}(3)^*$ is identified with $\mathbb R^3$ compatibly. Then the
coadjoint orbits are the origin and the spheres $S^2_r=\{v:|v|=r\}$ of radius
$r>0$. If $D_r:S^2\to S_r^2$ is the dilation $D_r(x)=rx$, then on the
sphere the KKS form $\omega_r$ satisfies

$$\omega_{r,\alpha}(\xi_{\mathcal O}(\alpha),\eta_{\mathcal O}(\alpha))=\alpha\cdot(\xi\times\eta),\qquad D_r^*\omega_r=r\,\omega_{S^2},\qquad |\alpha|=r,$$

and the inclusion $S^2_r\hookrightarrow\mathbb R^3$ is an equivariant moment
map for the rotation action.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the identification of $\mathfrak{so}(3)$ and $\mathfrak{so}(3)^*$ with $\mathbb R^3$, and a covector $\alpha\ne0$.

[F1] $SO(3)$ is an embedded Lie group with Lie algebra $\mathfrak{so}(3)$; under the identification, the bracket is the cross product and the coadjoint action is the standard rotation action of $SO(3)$ on $\mathbb R^3$. [[ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups]], [[def-cross-product-in-r3]], [[def-coadjoint-representation-of-a-lie-group]].

[F2] Coadjoint orbits carry the KKS form $\omega_\beta(\xi_{\mathcal O}(\beta),\eta_{\mathcal O}(\beta))=\beta([\xi,\eta])$, which is symplectic and $G$-invariant, and the orbit inclusion is an equivariant moment map. [[thm-coadjoint-orbits-are-symplectic-manifolds]], [[prop-coadjoint-orbit-inclusion-is-an-equivariant-moment-map]].

[F3] The standard area form of the unit sphere satisfies $\omega_{S^2}(u,v)=\hat\alpha\cdot(u\times v)$ at the point $\hat\alpha$, where $u,v$ are tangent vectors, and it is rotation invariant. [[def-cross-product-in-r3]], [[ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups]].



## Verification

**Proof technique:** direct.

1.1 By [F1] the coadjoint orbit of $\alpha$ is the set of vectors of the same length, hence the sphere $S^2_r$ of radius $r=|\alpha|$ when $\alpha\ne0$, and the origin when $\alpha=0$. [F1, given]

2.1 At the point $\alpha$ the fundamental fields are $\xi_{\mathcal O}(\alpha)=\alpha([\xi,\cdot])=\alpha\cdot(\xi\times\cdot)$, so the KKS form takes the value $\omega_{r,\alpha}(\xi_{\mathcal O}(\alpha),\eta_{\mathcal O}(\alpha))=\alpha\cdot(\xi\times\eta)$ by [F2]. Write $\alpha=r\hat\alpha$. Dilation intertwines the rotation actions, hence $d(D_r^{-1})_\alpha\xi_{\mathcal O}(\alpha)=\xi_{\mathcal O}(\hat\alpha)$ and similarly for $\eta$. Therefore [F3] gives $$\omega_{r,\alpha}(\xi_{\mathcal O}(\alpha),\eta_{\mathcal O}(\alpha))=r\,\omega_{S^2,\hat\alpha}\bigl(d(D_r^{-1})_\alpha\xi_{\mathcal O}(\alpha),d(D_r^{-1})_\alpha\eta_{\mathcal O}(\alpha)\bigr),$$ which is exactly $D_r^*\omega_r=r\omega_{S^2}$. [step 1.1, F2, F3, algebra]

3.1 Consequently the total area of the coadjoint orbit $S^2_r$ is $4\pi r$, and the form is nondegenerate and closed by [F2]; the rotation action is transitive on the sphere and preserves the form, as required of a coadjoint orbit. [step 2.1, F2, F3]

4.1 By [F2] the inclusion $S^2_r\hookrightarrow\mathbb R^3$ is an equivariant moment map for the rotation action with this KKS form; explicitly, for $\alpha$ of length $r$ and $\xi\in\mathbb R^3$, $d\langle\Phi,\xi\rangle_\alpha(\eta_{\mathcal O})=\alpha\cdot(\eta\times\xi)=-\omega_\alpha(\xi_{\mathcal O},\eta_{\mathcal O})$, which is the moment equation of the library convention. [step 2.1, F2, F3] ∎
