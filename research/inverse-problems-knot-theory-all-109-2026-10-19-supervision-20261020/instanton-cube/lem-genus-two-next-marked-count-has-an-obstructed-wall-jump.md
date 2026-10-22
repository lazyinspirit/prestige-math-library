---
id: lem-genus-two-next-marked-count-has-an-obstructed-wall-jump
kind: lemma
title: The next genus-two marked count has an obstructed wall jump
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-odd-admissible-ordinary-cobordisms-support-insertion-counts
  - lem-adjoint-incidence-insertions-have-rational-cutdown-counts
  - lem-kahler-orientation-and-signed-product-quotient-gluing
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Vicente Munoz, Donaldson invariants for connected sums along surfaces of genus2, discussion after Lemma18
      url: https://arxiv.org/abs/dg-ga/9702004
---

## Statement

Assume full AC and the ordinary rational incidence and determinant-orientation conventions below. Let $S=C\times\mathbb{CP}^1$, with $C$ of genus two, and let $\Sigma,B$ denote the two factor classes. For determinant $B$ and $c_2=1$, use the product Kahler polarization $H_\rho=\rho\Sigma+B$. For a sufficiently small generic chamber perturbation on each side of $\rho=2$, the actual dimension-fourteen mixed count satisfies
$$D_{\rho>2}^{B}(\Sigma^6B)-D_{\rho<2}^{B}(\Sigma^6B)=-\frac12.$$
Both parameters here are close to two. This is a wall jump, not an absolute value of either chamber invariant. The opposite obstruction complex is retained in the calculation.

## Facts & Assumptions

**Given:** The homology orientation and rational normalization $\mu=-p_1(\operatorname{ad}\mathbb E)/4$ used in the ordinary construction, and the product complex structure on $S$.

[F1] Ordinary elliptic slice, finite-dimensional regularization, Uhlenbeck compactness, incidence cutdowns and determinant-line gluing conventions are those constructed in [[thm-odd-admissible-ordinary-cobordisms-support-insertion-counts]] and [[lem-adjoint-incidence-insertions-have-rational-cutdown-counts]]. The reducible wall is treated explicitly below; it is not ruled out by an odd-end hypothesis. Full AC is inherited. [[def-axiom-of-choice]]

[F2] The Kahler complex-symbol comparison is $(-1)^{(w^2+K_Sw)/2}$ in [[lem-kahler-orientation-and-signed-product-quotient-gluing]].

## Proof

1.1 **The only reducible and its actual deformation complex.** A split determinant-$B$ bundle has lines $L=a\Sigma+bB+M$ and $Q=-a\Sigma+(1-b)B-M$, with $M$ flat on $C$. Its adjoint Pontryagin number is $4a(2b-1)$. Equality with $-4$ forces, up to interchanging the lines, $a=1,b=0$. Its slope equality is exactly $\rho=2$. Write this split as
$$L=O_{\mathbb{CP}^1}(1)\otimes M,\qquad Q=O_{\mathbb{CP}^1}(-1)\otimes N M^{-1},\qquad \deg N=1.$$
The fixed reducible manifold is $J=\operatorname{Pic}^0(C)$. Its diagonal tangent is the real harmonic one-form space of $C$; its diagonal obstruction is the real self-dual harmonic line. The metric parameter crosses that line transversely. The off-diagonal Kahler elliptic complex is the Dolbeault complex of $LQ^{-1}$ and $QL^{-1}$. Its positive-weight index bundle is $V_+=3W$, where $W=R^1p_*(M^2N^{-1})$ has rank two. Its opposite-weight index is the virtual bundle
$$V_-=Rp_*(NM^{-2}).$$
Indeed $H^0(\mathbb{CP}^1,O(2))$ has dimension three and $H^1(\mathbb{CP}^1,O(-2))$ dimension one. Thus in the opposite direction the actual kernel is $H^0(C,NM^{-2})$ and obstruction is $H^1(C,NM^{-2})$. Both jump on the Picard theta divisor. Replacing this virtual index by zero because its rank is zero would change the wall count. [F1, given, construct, algebra]

2.1 **An actual local cutdown gives the equivariant residue.** In a compact family of Coulomb slices over $J$, add finitely many smooth off-diagonal obstruction sections to make the normal elliptic operator surjective. Keep those auxiliary variables and their obstruction equations. Compactness of $J$ gives a uniform inverse on its complementary subspace. The contraction construction then identifies nearby ASD solutions with zeros of the resulting finite-dimensional circle-equivariant obstruction section; it does not require the varying opposite kernel to be a vector bundle. Its diagonal equation has leading term
$$c(2-\rho)+\|v_+\|^2-\|v_-\|^2,$$
with $c>0$ after a positive rescaling. Thus increasing $\rho$ creates the positive-weight side. Resolve and generically cut the universal incidences before taking the circle quotient. For a small fixed slice sphere, the parameterized zero set with the fixed zero section removed is an oriented cobordism between the two chamber cutdowns and that sphere's quotient cutdown. Its latter count is unchanged by equivariant homotopies of the stabilized obstruction section keeping this boundary transverse. In a finite-dimensional free circle approximation, the Thom class of each retained obstruction bundle divides by the Thom class of each retained deformation bundle. Integration in the circle direction extracts the coefficient of $u^{-1}$, since the positive-weight projective orientation is normalized by $\int_{\mathbb{CP}^n}u^n=1$. Consequently the local complex-oriented jump for an equivariant insertion $f(u)$ is
$$\int_J\operatorname*{Res}_{u=0}\frac{f(u)}{e_u(V_+)e_{-u}(V_-)}.$$
This finite-dimensional identity includes the Euler classes of the auxiliary equations; adding an acyclic stabilizing pair cancels its two Thom factors. It therefore depends on the actual elliptic index complexes from step 1.1 and is valid across their kernel jumps, not just off the theta divisor. [F1, step 1.1, construct, algebra]

3.1 **The normal classes include the opposite obstruction.** Normalize the Poincare class $\eta$ so that $\int_C\eta^2=-2\theta$ and $\int_J\theta^2=2$. Fibre integration of $\exp(\pm2\eta)$ with the degree-one determinant and the Todd class of $C$ gives
$$\operatorname{ch}(W)=2+4\theta,\qquad\operatorname{ch}(V_+)=6+12\theta,\qquad\operatorname{ch}(V_-)=-4\theta.$$
There are no higher Chern-character terms because two $C$-legs already exhaust the fibre integration. For a complex index bundle, the splitting principle gives $e_u(E)=u^{\mathrm{rk}E}\exp(c_1(E)/u-\operatorname{ch}_2(E)/u^2+\cdots)$. Hence
$$e_u(V_+)e_{-u}(V_-)=u^6\exp(16\theta/u),\qquad\frac1{e_u(V_+)e_{-u}(V_-)}=u^{-6}\left(1-\frac{16\theta}{u}+\frac{128\theta^2}{u^2}\right).$$
In particular the coefficient sixteen is not the coefficient twelve of $V_+$ alone. [step 1.1, step 2.1, algebra]

4.1 **The actual universal insertions and orientation fix the jump.** At the split family the equivariant line difference is $2\Sigma-B+2\eta+u$. Slanting its square with the two factor surfaces gives
$$\mu(\Sigma)=u/2+2\theta,\qquad\mu(B)=-u.$$
Thus the numerator for the required incidence is $f(u)=-u(u/2+2\theta)^6$. Multiplication with step 3.1's inverse Euler factor has $u^{-1}$ coefficient
$$\left(-2+6-\frac{15}{4}\right)\theta^2=\frac14\theta^2.$$
Its integral is $1/2$. Here $K_S=2B-2\Sigma$, so [F2]'s determinant orientation for $w=B$ is $(-1)^{-1}=-1$. The ordinary oriented wall jump is therefore $-1/2$. [F2, step 2.1, step 3.1, algebra]

5.1 **No uncounted ideal or second wall contributes to this jump.** The path of metrics is confined to a small interval about two. Step 1.1 classifies its only reducible. Ordinary bubbling has codimension four before incidence, and the surface-incidence compensation of [F1] preserves at least that codimension; hence bubbles are absent from the zero- and one-dimensional fully cut spaces used here. Parameter compactness confines every irreducible failure of ordinary continuation to the reducible slices already treated in step 2.1. The remaining boundary is exactly the two chamber counts. This proves their difference, with all seven surface constraints retained. It leaves the lower-chamber absolute invariant undetermined. In particular it is insufficient by itself to fix the long-neck marked coefficient $N_{33}'(0)$; an actual lower-chamber count or another absolute geometric calibration is still required. [F1, step 1.1, step 2.1, step 4.1, construct, algebra]
