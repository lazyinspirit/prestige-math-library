---
id: thm-augmented-finite-volume-hyperbolic-holonomy-coordinates
kind: theorem
title: Augmented holonomy coordinates at a complete finite-volume hyperbolic structure
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-adjoint-hyperbolic-ltwo-one-forms-are-exact
  - lem-commuting-affine-peripheral-holonomy-logarithm-factorization
  - thm-poincare-lefschetz-duality-with-local-coefficients
  - thm-pair-long-exact-sequences-with-local-coefficients
  - lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice
  - thm-holomorphic-implicit-function-theorem
  - thm-existence-of-geodesically-convex-neighborhoods
  - lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it
  - lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking
  - thm-smooth-partitions-of-unity-exist-on-manifolds
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Pere Menal-Ferrer and Joan Porti, Twisted cohomology for hyperbolic three
        manifolds
      url: https://arxiv.org/pdf/1001.2242
      locator: Theorems 0.1, 0.3–0.4 and Section 4; obstruction cocycles and the
        analytic smoothness argument are supplied explicitly below
    - title: Pere Menal-Ferrer and Joan Porti, Local coordinates for SL(n,C) character
        varieties of finite volume hyperbolic 3-manifolds
      url: https://arxiv.org/pdf/1111.4338
      locator: Theorem 1.1, Corollary 1.3, Proposition 3.4 and Section 4; specialized
        here to the adjoint PSL2 case
dependency_level: 1
---

## Statement

Assume the Axiom of Choice. Let $M=\Gamma\backslash\mathbb H^3$ be a connected oriented complete finite-volume hyperbolic three-manifold, with a compact smooth core $N$ and $k\ge1$ standard rank-two torus cusp ends. Thus $M$ is the interior of $N$ and each end has metric $dt^2+e^{-2t}g_i$, where $g_i$ is a flat torus metric. Let $\rho_0:\pi_1(N)\to G=\mathrm{PSL}_2(\mathbb C)$ be its holonomy. Choose a positively oriented basis $(\mu_i,\lambda_i)$ for each oriented horotorus, so its translation lattice can be normalized to $\langle1,\tau_i^0\rangle$ with $\operatorname{Im}\tau_i^0>0$.

The germ of representations modulo conjugacy at $[\rho_0]$ is a smooth complex manifold of dimension $k$. The functions $s_i(\rho)=\operatorname{tr}^2\rho(\mu_i)$ are local holomorphic coordinates near their values $s_i=4$. Trace squared is well defined in $G$, independently of an $SL_2$ lift.

Augment a nearby representation by choosing one common invariant line for each peripheral subgroup, and quotient these data by simultaneous conjugacy. The germ of this augmented space at the complete representation and its unique peripheral fixed lines is a smooth complex $k$-manifold. It has holomorphic coordinates $u=(u_1,\ldots,u_k)$, where $u_i$ is the eigenvalue-ratio logarithm for $\mu_i$ on the selected line, and the forgetful map is
$$s_i=4\cosh^2(u_i/2).$$
The corresponding logarithms $v_i$ for $\lambda_i$ are holomorphic and satisfy
$$v_i(u)=\tau_i(u)u_i,\qquad \tau_i(0)=\tau_i^0,\qquad \operatorname{Im}\tau_i(u)>0$$
on a sufficiently small neighborhood. In particular $u_i=0$ if and only if $v_i=0$, and for $k=1$ one has $v(u)=\tau^0u+O(u^2)$. No positive or nondegenerate ideal triangulation is assumed. The statement concerns the augmented space, not a single-valued eigenvalue logarithm on the ordinary conjugacy quotient.

## Statement references

[[lem-adjoint-hyperbolic-ltwo-one-forms-are-exact]]

[[lem-commuting-affine-peripheral-holonomy-logarithm-factorization]]

[[thm-poincare-lefschetz-duality-with-local-coefficients]]

[[thm-holomorphic-implicit-function-theorem]]

[Menal-Ferrer and Porti, Twisted cohomology](https://arxiv.org/pdf/1001.2242)

[Menal-Ferrer and Porti, Local coordinates](https://arxiv.org/pdf/1111.4338)

## Facts & Assumptions

**Given:** Full AC, the finite-volume quotient, its supplied compact core and standard cusp models, the complete holonomy and the positively oriented peripheral bases.

[A1] AC supplies DC and Countable Choice for the listed suppliers, finite-dimensional choices and the sequence of formal extensions below. [[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] Every closed smooth square-integrable one-form with values in the homogeneous-metric adjoint bundle has a smooth square-integrable primitive. [[lem-adjoint-hyperbolic-ltwo-one-forms-are-exact]]

[F2] The compact core has a finite CW model, and the local-coefficient pair sequence and Poincaré–Lefschetz duality apply. Over $\mathbb C$, the invariant nondegenerate pairing $\operatorname{tr}(AB)$ identifies the adjoint local system with its dual. [[lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice]], [[thm-pair-long-exact-sequences-with-local-coefficients]], [[thm-poincare-lefschetz-duality-with-local-coefficients]]

[F3] A holomorphic equation with invertible partial Jacobian has a unique local holomorphic solution. [[thm-holomorphic-implicit-function-theorem]]

[F4] Commuting affine holonomies $w\mapsto e^{u_i}w+a_i$ and $w\mapsto e^{v_i}w+b_i$, with nonzero complete translations and nonreal complete ratio, satisfy $v_i=\tau_i u_i$ for a holomorphic $\tau_i$ extending that ratio, on arbitrary reduced analytic parameter spaces. [[lem-commuting-affine-peripheral-holonomy-logarithm-factorization]]

[F5] Under the inherited countable-choice hypothesis, every point has arbitrarily small strongly geodesically convex neighborhoods. A countable relatively compact coordinate cover and its locally finite shrinking, followed by finite convex refinements of the compact shrinking cores, give a locally finite good cover; finite intersections remain strongly convex. A subordinate smooth partition of unity exists. [[thm-existence-of-geodesically-convex-neighborhoods]], [[lem-every-open-cover-of-a-manifold-has-a-countable-cover-by-relatively-compact-coordinate-balls-subordinate-to-it]], [[lem-a-countable-coordinate-ball-cover-has-a-countable-locally-finite-shrinking]], [[thm-smooth-partitions-of-unity-exist-on-manifolds]]

## Proof

1.1 The complete holonomy is irreducible and its adjoint invariants vanish. Indeed one cusp subgroup is a rank-two translation lattice fixing $\infty$. If all of $\Gamma$ fixed $\infty$, its elements would be similarities $z\mapsto az+b$. An element with $|a|\ne1$ would conjugate a fixed nonzero lattice translation to translations tending to the identity, contradicting discreteness. An element with $|a|=1$ and $a\ne1$ is elliptic about a vertical line, impossible in a torsion-free discrete group. Hence all elements would be translations, and the quotient would have infinite volume as height tends to zero. This contradicts the finite-volume hypothesis. Thus some element does not fix $\infty$. A traceless matrix invariant under the cusp group is a multiple of $E=\left(\begin{smallmatrix}0&1\\0&0\end{smallmatrix}\right)$, by direct commutation with a nontrivial unipotent. A nonzero such matrix invariant under all of $\Gamma$ would force preservation of its kernel line, hence of $\infty$, a contradiction. Thus $H^0(M;E_{\operatorname{Ad}\rho_0})=0$. The same argument excludes a common invariant line for the holonomy matrices. The group centralizer in $G$ is trivial as well: a Möbius map commuting with the cusp translations fixes $\infty$ and is itself a translation, by its affine formula; a nonidentity such translation has unique fixed point $\infty$, so commuting with the entire group would force the whole group to fix $\infty$. [given, algebra]

1.2 We specify the cohomology comparisons being used. The flat adjoint bundle has local parallel frames, obtained on simply connected balls by trivializing its defining covering construction. In such frames its differential is the componentwise ordinary exterior differential; integration of forms over simplices is compatible with the constant transition matrices and with Stokes. The usual local Poincaré contraction is explicit: integrate contraction by the radial vector along radial coordinate segments. A locally finite good cover by sufficiently small strongly convex metric balls therefore gives a Čech double complex whose form columns resolve the parallel local sections. Its positive Čech rows are contracted by $(hc)_{i_0\ldots i_{r-1}}=\sum_j\phi_jc_{ji_0\ldots i_{r-1}}$, for a subordinate partition of unity. The small-singular-cochain double complex has the same degree-zero columns, since every intersection is contractible; subdivision makes singular simplices subordinate to the cover, and the Čech rows contract by assigning a containing index to each small simplex. The two edge comparisons identify flat de Rham cohomology with singular cohomology with this local system, naturally for restrictions. These constructions also apply to compact support and to collars, so relative classes are represented by forms supported away from the ends. Finally $M$ is aspherical, with universal cover $\mathbb H^3$ contractible. Its lifted cellular or singular chains form a free resolution of $\mathbb C$ as a $\mathbb C\Gamma$-module; comparison of free resolutions by successive lifts gives the same cohomology as group cocycles. In degree one, this comparison is concretely integration of an equivariant closed form along a lifted group loop. These arguments establish the coefficient comparisons, rather than invoking an unproved twisted de Rham theorem. [A1, F2, F5, given, construct, algebra]

1.3 The representation scheme of a torus is smooth near its noncentral complete peripheral pair. Use local $SL_2$ lifts $A,B$ of the two generators, both near nontrivial commuting unipotents; their commutator is $I$ because its sign is locally constant and is positive at the basepoint. Choose a fixed vector $v$ with $v,Av$ independent at that point and hence nearby. For a commuting matrix $B$, write $Bv=av+bAv$; commutation then forces $B=aI+bA$ by applying both sides to the basis $v,Av$. This argument works over truncated power-series rings too, because the basis determinant is a unit. Put $C=A-(\operatorname{tr}A)I/2$ and write $B=\alpha I+\beta C$. Its determinant condition is $\alpha^2-\beta^2((\operatorname{tr}A)^2/4-1)=1$. At the complete pair $\alpha=1$, so [F3] solves uniquely for $\alpha$ in terms of $A$ and $\beta$. Thus the commuting-pair scheme is locally a smooth four-dimensional space, parametrized by the three coordinates of $A$ and one of $\beta$. In particular every representation over $\mathbb C[t]/(t^{n+1})$ near this pair extends one order further. [F3, given, construct, algebra]

2.1 Write $E_0=E_{\operatorname{Ad}\rho_0}$. The restriction $r_1:H^1(N;E_0)\to H^1(\partial N;E_0)$ is injective. If a closed smooth form represents a class in its kernel, on each cusp tail it equals $d_{E_0}b_i$ for a smooth section, by step 1.2. Subtract $d_{E_0}(\chi_i b_i)$ using a cutoff equal to one sufficiently far along that end and zero near the core. The resulting cohomologous closed form is compactly supported, hence square integrable, and is exact by [F1]. Thus the original class is zero. Equivalently the map $H^1(N,\partial N;E_0)\to H^1(N;E_0)$ vanishes. By [F2], its transpose, up to the harmless cap-boundary sign, is the map $H^2(N,\partial N;E_0)\to H^2(N;E_0)$, so that map also vanishes. The pair sequence therefore gives $r_2:H^2(N;E_0)\to H^2(\partial N;E_0)$ injective. It is onto because its cokernel embeds in $H^3(N,\partial N;E_0)$, which is dual to $H^0(N;E_0)=0$ by step 1.1. [A1, F1, F2, step 1.1, step 1.2, algebra]

2.2 We give the full obstruction construction. Suppose $\rho^{(n)}$ is a representation over $\mathbb C[t]/(t^{n+1})$ with constant term $\rho_0$. Choose arbitrary one-order lifts $\widetilde\rho(\gamma)$ of its values. The defect is uniquely $\widetilde\rho(\gamma)\widetilde\rho(\delta)\widetilde\rho(\gamma\delta)^{-1}=I+t^{n+1}c(\gamma,\delta)$ modulo $t^{n+2}$, with $c$ in the adjoint Lie algebra; this expression is read in the identity chart of $G$. Associativity gives $c(\gamma,\delta)+c(\gamma\delta,\epsilon)=\operatorname{Ad}_{\rho_0(\gamma)}c(\delta,\epsilon)+c(\gamma,\delta\epsilon)$, exactly the group two-cocycle relation. Replacing the lift at $\gamma$ by $(I+t^{n+1}b(\gamma))\widetilde\rho(\gamma)$ changes $c$ by $b(\gamma)+\operatorname{Ad}_{\rho_0(\gamma)}b(\delta)-b(\gamma\delta)$. Hence a one-order extension exists if and only if the class $[c]\in H^2(\Gamma;\operatorname{Ad}\rho_0)$ vanishes. The formulas commute with restriction to every subgroup. [A1, step 1.2, construct, algebra]

3.1 At a cusp the adjoint invariants are $\mathbb CE$, of dimension one. Torus duality and the Euler characteristic of a finite cellular local system give $\dim H^0(T_i;E_0)=\dim H^2(T_i;E_0)=1$ and $\dim H^1(T_i;E_0)=2$. Indeed every cell contributes three coefficient dimensions, so the alternating chain dimension is $3\chi(T_i)=0$. The pair sequence and step 2.1 give a short exact sequence $0\to H^1(N;E_0)\to H^1(\partial N;E_0)\to H^2(N,\partial N;E_0)\to0$. The last group is dual to the first by [F2]. Consequently $\dim H^1(N;E_0)=k$, while $r_2$ identifies $H^2(N;E_0)$ with $\mathbb C^k$. All these spaces are finite dimensional by the finite CW model in [F2]. [F2, step 1.1, step 2.1, algebra]

3.2 On each peripheral subgroup the obstruction in step 2.2 is zero by the smooth formal chart of step 1.3. The map on $H^2$ restricting to all peripheral subgroups is injective by step 2.1 and the comparisons in step 1.2, so the global obstruction vanishes. Starting with any first-order cocycle, repeat step 2.2 and choose corrections at each order. AC supplies this countable recursive sequence. Every first-order representation tangent vector therefore has a full formal representation curve with that tangent. No convergence assertion about this curve is needed. [A1, step 1.2, step 2.1, step 1.3, step 2.2, algebra]

4.1 We compute the cusp classes and trace derivatives. Normalize the cusp lattice as $z=x+\tau_i^0 y$, with deck translations $x\mapsto x+1$ and $y\mapsto y+1$, and put $F=\left(\begin{smallmatrix}0&0\\1&0\end{smallmatrix}\right)$, $H=\operatorname{diag}(1,-1)$ and $n(z)=\left(\begin{smallmatrix}1&z\\0&1\end{smallmatrix}\right)$. The forms $\eta_i=dx\otimes E$ and $\omega_i=dz\otimes\operatorname{Ad}_{n(z)}F$ are equivariant and closed: $E$ is translation invariant and the polynomial $\operatorname{Ad}_{n(z)}F=F+zH-z^2E$ depends only on $z$, so its derivative wedges to zero with $dz$. Their trace-paired cup product is $\operatorname{tr}(\eta_i\wedge\omega_i)=\tau_i^0dx\wedge dy$, while each self-pairing is zero. Thus these two classes are independent and form a basis by step 3.1. The form $\eta_i$ is square integrable on its cusp: at height $t$, $|dx|$ grows as $e^t$ and the homogeneous norm of $E$ decays as $e^{-t}$, whereas volume decays as $e^{-2t}$. [step 3.1, given, construct, algebra]

5.1 Let $L$ be the span of the $k$ classes $\eta_i$ in $H^1(\partial N;E_0)$. The image of $r_1$ meets $L$ only in zero. If a global closed form restricts cohomologically to a combination of these $\eta_i$, subtract exact cutoff terms on the ends as in step 2.1 to arrange equality with that combination on each tail. The resulting global form is square integrable by step 4.1 and compactness of the remaining core, hence exact by [F1]. Since both $H^1(N;E_0)$ and the span of the $\omega_i$ have dimension $k$, there is a global cohomology basis whose boundary images are $\omega_i+\sum_jc_{ij}\eta_j$. [F1, step 2.1, step 3.1, step 4.1, algebra]

6.1 A group one-cocycle $a$ represents the infinitesimal representation $(I+\epsilon a(\gamma))\rho_0(\gamma)$ modulo $\epsilon^2$, as direct multiplication verifies; infinitesimal conjugacies are precisely coboundaries. Thus representation tangent vectors modulo infinitesimal conjugacy are $H^1(N;E_0)$. For the positive local lift of the normalized cusp meridian, $\rho_0(\mu_i)=n(1)$, integration in step 1.2 gives $a_{\eta_i}(\mu_i)=E$ and $a_{\omega_i}(\mu_i)=\int_0^1(F+xH-x^2E)\,dx=F+H/2-E/3$. Therefore $d\operatorname{tr}_{\mu_i}(\eta_i)=\operatorname{tr}(En(1))=0$ and $d\operatorname{tr}_{\mu_i}(\omega_i)=1$. For trace squared the latter derivative is $4$, since the complete trace is $2$. Classes supported at other cusps contribute only their own restrictions. By the basis in step 5.1, $(ds_1,\ldots,ds_k)$ is an isomorphism from $H^1(N;E_0)$ to $\mathbb C^k$. This is a tangent calculation; smoothness is proved next. [step 1.2, step 4.1, step 5.1, algebra]

7.1 Here is why formal integrability implies analytic smoothness in this setting, without an approximation theorem for formal solutions. Take a finite presentation from [F2] and express its relators near $\rho_0$ as an analytic map $R:\mathbb C^{3g}\to\mathbb C^{3r}$ by using local coordinates on $G$ for the generators and the identity logarithm for each relator. Put $K_0=\ker dR_0$, choose a complement $W$ in the source and a projection $\pi$ onto $\operatorname{im}dR_0$ in the target. By [F3], the equation $\pi R(z,w)=0$ has the unique solution $w=\psi(z)$, with $z\in K_0$, $\psi(0)=0$ and $d\psi_0=0$. Thus the representation germ is the zero set of $\kappa(z)=(I-\pi)R(z,\psi(z))$. If $\kappa$ were nonzero, let $P_d$ be its first nonzero homogeneous Taylor term. A formal representation curve of arbitrary tangent $a\in K_0$, supplied by step 3.2, has $z(t)=ta+O(t^2)$ and $w(t)=\psi(z(t))$; the latter identity follows recursively from the invertible partial Jacobian defining $\psi$. Its relators then give $P_d(a)=0$. This holds for every $a\in K_0$, contradicting that $P_d$ is a nonzero polynomial. Hence $\kappa$ vanishes identically by convergence of its analytic Taylor series. The representation scheme is smooth with tangent $K_0=Z^1(\Gamma;\operatorname{Ad}\rho_0)$ and dimension $k+3$: $H^1$ has dimension $k$, and the coboundaries have dimension three because the invariants vanish in step 1.1. [A1, F2, F3, step 1.1, step 3.1, step 6.1, step 3.2, algebra]

8.1 To pass to ordinary conjugacy, choose three linear coordinate conditions transverse to the conjugation orbit at $\rho_0$. The orbit derivative is injective by step 1.1. The analytic inverse theorem, equivalently [F3] applied to the conjugation map, gives a local product of a three-dimensional identity neighborhood in $G$ and a slice $S$ of dimension $k$. This slice represents the actual conjugacy quotient germ. To exclude extra identifications by large conjugations, suppose instead that arbitrarily near $\rho_0$ there were conjugate pairs requiring conjugators away from the identity in $G$. Choose such a sequence, lift its conjugators to nonzero matrices and normalize their Euclidean matrix norms to one. After a subsequence the normalized matrices have a nonzero limit $P$. Choose local lifts of the finitely many generator matrices. Their intertwining equations have signs $\pm1$; after another subsequence each sign is fixed. If $P$ had rank one, these equations would make its kernel a common invariant line of the limiting holonomy matrices, contradicting step 1.1. Thus $P$ is invertible, and its projective class centralizes the complete holonomy. That projective centralizer is trivial by step 1.1, so the conjugators tend projectively to the identity, a contradiction. The local product uniqueness therefore excludes all extra slice identifications after shrinking. This proves smoothness of the ordinary quotient germ. By step 6.1 the trace-squared map on $S$ has invertible differential, and [F3] makes $(s_1,\ldots,s_k)$ its holomorphic coordinates. [F3, step 1.1, step 6.1, step 7.1, construct, algebra]

9.1 Let $u\in\mathbb C^k$ be small. Step 8.1 gives a unique slice representation $\rho(u)$ whose trace-squared coordinates are $s_i=4\cosh^2(u_i/2)$; it depends holomorphically on $u$. Choose local $SL_2$ lifts $A_i(u)$ of $\rho(u)(\mu_i)$ with trace near $2$. Their traces equal $2\cosh(u_i/2)$, because their squares agree and the near-$2$ branch is unique. Thus $e^{u_i/2}$ is an eigenvalue. The matrix $A_i(u)-e^{u_i/2}I$ has rank one throughout a small neighborhood, including $u_i=0$, since it has zero determinant and stays near a nonzero rank-one matrix. A fixed nonzero column of its adjugate gives a holomorphic kernel line $\ell_i(u)$ after shrinking. This line is invariant under the whole peripheral subgroup by commutation. Conversely, given a nearby slice representation with a chosen peripheral line, its meridian eigenvalue on that line is holomorphic and near $1$; its unique near-zero ratio logarithm defines $u_i$. The trace relation forces precisely the representation just constructed, and the rank-one kernel forces precisely its chosen line. Both constructions are holomorphic: the eigenvalue is read by applying the matrix to a local nonzero vector of the line. They are inverse maps on the augmented germ. Hence that germ is smooth of dimension $k$ with coordinates $u$. [F3, step 1.3, step 8.1, construct, algebra]

10.1 The local lift of $\rho(u)(\lambda_i)$ commutes with $A_i(u)$: the commutator sign is locally constant and positive at the complete point. It acts on $\ell_i(u)$ by a nonzero holomorphic eigenvalue near its complete value; choose its sign to make this value $1$, and define $v_i$ as twice its near-zero logarithm. Choose a holomorphic change of frame sending $\ell_i(u)$ to $\mathbb Ce_1$, by adjoining a fixed complementary vector and normalizing the determinant locally. The resulting peripheral Möbius maps fix $\infty$ and act on its finite complement as $z\mapsto e^{u_i}z+a_i(u)$ and $z\mapsto e^{v_i}z+b_i(u)$. At $u=0$, their translations satisfy $a_i(0)\ne0$ and $b_i(0)/a_i(0)=\tau_i^0$. Apply [F4] to get $v_i=\tau_i(u)u_i$ with $\tau_i$ holomorphic and $\tau_i(0)=\tau_i^0$. Positivity of the imaginary part persists on a sufficiently small common neighborhood. For one cusp the holomorphic Taylor expansion gives $v(u)=\tau^0u+O(u^2)$. All constructions used representation matrices and cusp models; none used an ideal triangulation, or a positivity assumption about tetrahedra. [F4, step 9.1, given, algebra] ∎

## Source reading and precise scope

The complete 29-page *Twisted cohomology* paper and the complete 13-page *Local coordinates* paper were read, together with Kapovich's full Sections 8.8 and 8.10 (printed pp. 179–190, obtained from PDF pages 200–211 by OCR). The present proof supplies the degree-one analytic vanishing through its local supplier, constructs the obstruction cocycles rather than citing their existence, and replaces the source's Artin-approximation invocation with the lowest-nonzero-Taylor-term argument in step 7.1.

This theorem gives the full analytic representation and augmented holonomy germ. Its geometric inputs are the compact core and standard cusp models. It does not assert a positive ideal triangulation exists, does not identify the unaugmented quotient with the eigenvalue-coordinate cover, and does not by itself construct the completed Dehn-filled metric. Those geometric realizations remain separate suppliers.
