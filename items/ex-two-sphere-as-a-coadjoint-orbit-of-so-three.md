---
id: ex-two-sphere-as-a-coadjoint-orbit-of-so-three
kind: example
title: The two-sphere as a coadjoint orbit of SO(3)
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-coadjoint-orbits-are-symplectic-manifolds, prop-coadjoint-orbit-inclusion-is-an-equivariant-moment-map, ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups, ex-orthogonal-and-special-orthogonal-lie-groups, def-cross-product-in-r3, def-coadjoint-representation-of-a-lie-group, def-countable-choice]
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

[F1] $SO(3)$ is an embedded Lie group with Lie algebra the skew-symmetric matrices $\mathfrak{so}(3)$, and the cross product on $\mathbb R^3$ is given by its coordinate determinant formula ([[ex-orthogonal-and-special-orthogonal-lie-groups]], [[def-cross-product-in-r3]]). The adjoint and coadjoint actions have their usual definitions ([[def-coadjoint-representation-of-a-lie-group]]); their concrete rotation formulas for the identification used here are verified in step 1.1.

[F2] Coadjoint orbits carry the KKS form $\omega_\beta(\xi_{\mathcal O}(\beta),\eta_{\mathcal O}(\beta))=\beta([\xi,\eta])$, which is symplectic and $G$-invariant, and the orbit inclusion is an equivariant moment map. [[thm-coadjoint-orbits-are-symplectic-manifolds]], [[prop-coadjoint-orbit-inclusion-is-an-equivariant-moment-map]].

[F3] The standard oriented area form of the unit sphere is $\omega_{S^2,\hat\alpha}(u,v)=\hat\alpha\cdot(u\times v)$ for tangent vectors $u,v$; the scalar-triple-product formula makes it rotation invariant. [[def-cross-product-in-r3]].



## Verification

**Proof technique:** direct.

1.1 For $v=(v_1,v_2,v_3)$ put $$\widehat v=\begin{pmatrix}0&-v_3&v_2\\v_3&0&-v_1\\-v_2&v_1&0\end{pmatrix}.$$ Then $\widehat v\,u=v\times u$, and every skew-symmetric $3\times3$ matrix is uniquely of this form. Direct multiplication using the coordinate cross-product formula gives $[\widehat v,\widehat w]=\widehat{v\times w}$. Moreover, for $R\in SO(3)$ the scalar-triple-product identity and $\det R=1$ give $R(v\times u)=(Rv)\times(Ru)$, so $R\widehat vR^{-1}=\widehat{Rv}$. Thus the adjoint action is the standard rotation action. Under the dot-product identification $(\mathbb R^3)^*\cong\mathbb R^3$, orthogonality of $R$ then makes the coadjoint action the same rotation action. [F1, algebra]

2.1 By step 1.1 the coadjoint orbit of $\alpha$ is the set of vectors of the same length, hence the sphere $S^2_r$ of radius $r=|\alpha|$ when $\alpha\ne0$, and the origin when $\alpha=0$. [step 1.1, given]

3.1 With the library's negative-exponential convention for fundamental fields, step 1.1 gives $\xi_{\mathcal O}(\alpha)=\alpha\times\xi$. The KKS formula [F2] therefore reads $\omega_{r,\alpha}(\xi_{\mathcal O}(\alpha),\eta_{\mathcal O}(\alpha))=\alpha\cdot(\xi\times\eta)$. Write $\alpha=r\hat\alpha$. Dilation intertwines the rotation actions, hence $d(D_r^{-1})_\alpha\xi_{\mathcal O}(\alpha)=\xi_{\mathcal O}(\hat\alpha)$ and similarly for $\eta$. The vector identity $\hat\alpha\cdot((\hat\alpha\times\xi)\times(\hat\alpha\times\eta))=\hat\alpha\cdot(\xi\times\eta)$ and [F3] give $$\omega_{r,\alpha}(\xi_{\mathcal O}(\alpha),\eta_{\mathcal O}(\alpha))=r\,\omega_{S^2,\hat\alpha}\bigl(d(D_r^{-1})_\alpha\xi_{\mathcal O}(\alpha),d(D_r^{-1})_\alpha\eta_{\mathcal O}(\alpha)\bigr),$$ which is exactly $D_r^*\omega_r=r\omega_{S^2}$. [step 1.1, step 2.1, F2, F3, algebra]

4.1 Consequently the total area of the coadjoint orbit $S^2_r$ is $4\pi r$, and the form is nondegenerate and closed by [F2]; the rotation action is transitive on the sphere and preserves the form, as required of a coadjoint orbit. [step 3.1, F2, F3]

5.1 By [F2] the inclusion $S^2_r\hookrightarrow\mathbb R^3$ is an equivariant moment map for the rotation action with this KKS form; explicitly, for $\alpha$ of length $r$ and $\xi\in\mathbb R^3$, $d\langle\Phi,\xi\rangle_\alpha(\eta_{\mathcal O})=\alpha\cdot(\eta\times\xi)=-\omega_\alpha(\xi_{\mathcal O},\eta_{\mathcal O})$, which is the moment equation of the library convention. [step 3.1, F2, F3] ∎
