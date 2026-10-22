---
id: lem-odd-genus-two-flat-moduli-have-surface-cube-integral-one-half
kind: lemma
title: Odd genus-two flat moduli have surface-cube integral one half
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-adjoint-incidence-insertions-have-rational-cutdown-counts
  - lem-kahler-orientation-and-signed-product-quotient-gluing
  - thm-odd-admissible-ordinary-cobordisms-support-insertion-counts
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Vicente Munoz, Donaldson invariants for connected sums along surfaces of genus 2, Lemma18
      url: https://arxiv.org/pdf/dg-ga/9702004
    - title: William Goldman, Invariant functions on Lie groups and Hamiltonian flows of surface group representations
---

## Statement

Assume full AC. Let $N_2$ be the fixed-odd-determinant moduli of projectively flat rank-two unitary connections on a closed oriented genus-two surface $\Sigma$, modulo determinant-one gauges. Use the fundamental trace $-\operatorname{tr}_{\mathbb C^2}$, and let $\mu(\Sigma)=-p_1(\mathbb E)/4[\Sigma]$ be its universal adjoint class. Orient $N_2$ by its surface symplectic form. Then
$$\int_{N_2}\mu(\Sigma)^3=\frac12.$$
In particular on $S=\Sigma\times\mathbb{CP}^1$, with determinant class $B=[\{p\}\times\mathbb{CP}^1]$ and the lift-dependent Donaldson orientation, the zero-charge projectively flat component gives
$$D_S^{(B,\Sigma)}(\Sigma^3)=-\frac12.$$
This is a flat-connection surface integral and its corresponding six-dimensional cutdown. It does not calculate the ten-dimensional value $D_S^{(B,\Sigma)}(\Sigma^5)$ or the genus-two gluing coefficient.

## Facts & Assumptions

**Given:** The actual oriented surface, odd determinant bundle, product $S$ and the indicated characteristic-class normalization. For numerical Donaldson counts use the geometric rational incidence representatives.

[F1] Universal adjoint incidence representatives and their normalization are [[lem-adjoint-incidence-insertions-have-rational-cutdown-counts]]. The ordinary determinant-one setup is [[thm-odd-admissible-ordinary-cobordisms-support-insertion-counts]]. These provide the actual gauge and insertion conventions, not a precomputed surface intersection number.

[F2] The complex-to-Donaldson orientation factor is $(-1)^{(w^2+K_Sw)/2}$ by [[lem-kahler-orientation-and-signed-product-quotient-gluing]]. Full AC is inherited through the analytic and universal-bundle constructions. [[def-axiom-of-choice]]

## Proof

1.1 **The actual compact smooth surface moduli.** In a punctured polygon for $\Sigma$, the odd determinant condition gives lifts of its four handle holonomies satisfying $[A_1,B_1][A_2,B_2]=-1$. Modulo simultaneous $SU(2)$ conjugation this is the projectively flat unitary moduli with the fixed determinant: parallel transport on the polygon reconstructs the connection, and its sole central mismatch is precisely this minus sign. A positive-dimensional stabilizer would put all four holonomies in one circle, whose commutators are one, a contradiction. The derivative of the relation is onto its three-dimensional Lie algebra: an annihilator transported around the four edges would be a common invariant adjoint vector, again impossible. Hence the relation level is smooth, its effective $SO(3)$ action is free, and its quotient is a smooth compact six-manifold. Compactness follows from compactness of $SU(2)^4$. The same invariant-vector argument gives $H^0(\Sigma;\operatorname{ad}E)=H^2(\Sigma;\operatorname{ad}E)=0$. Cup-product duality on the finite polygon cochains makes
$$\omega(a,b)=-\frac1{4\pi^2}\int_\Sigma\operatorname{tr}(a\wedge b)$$
nondegenerate on its six-dimensional first cohomology; it is the surface symplectic form used for orientation. [F1, given, construct, algebra]

2.1 **Two pants and the odd angle polytope.** Cut the surface into two pants joined along their three boundary circles, so the dual graph has two vertices and three edges. Fix determinant trivializations on the pants. Move the unique odd central mismatch to the second pants; the two lifted product relations are respectively $H_1H_2H_3=1$ and product minus one. Write the conjugacy angle of the first three boundary holonomies as $\theta_i\in[0,\pi]$. For a pants with product one, the allowed angles are
$$\theta_i\le\theta_j+\theta_k,\qquad\theta_1+\theta_2+\theta_3\le2\pi.$$
Indeed conjugate the first holonomy to $\cos\theta_1+i\sin\theta_1$. Write the second as $\cos\theta_2+u\sin\theta_2$, where $u$ is a unit imaginary quaternion. The scalar part of their product is $\cos\theta_1\cos\theta_2-(i\cdot u)\sin\theta_1\sin\theta_2$. Allowing $i\cdot u$ to vary in $[-1,1]$ gives exactly those inequalities. In their strict interior the residual circle about $i$ acts transitively on the allowed choices of $u$, so the pants representation is unique up to conjugation and has stabilizer $\{\pm1\}$. For the odd pants replace its third boundary lift by its negative. Its angle is $\pi-\theta_3$, so it has the reflected allowed tetrahedron. With $x_i=\theta_i/\pi$, the common polytope is
$$P=\{x\in[0,1]^3:|x_1-1/2|+|x_2-1/2|+|x_3-1/2|\le1/2\}.$$
This equality follows by writing the four linear inequalities of each tetrahedron. Its vertices are the six permutations of $(0,1/2,1/2)$ and $(1,1/2,1/2)$. Its volume is $8(1/2)^3/6=1/6$, by dividing it into its eight coordinate octant tetrahedra about the center. [step 1.1, construct, algebra]

3.1 **The exact twist lattice.** On the strict interior of $P$ both pants are irreducible. Given their representations, a gluing identification at edge $i$ is a member $\exp(\phi_i n_i)$ of the boundary holonomy's centralizer, where $n_i$ is its unit imaginary axis and $\phi_i\in\mathbb R/2\pi\mathbb Z$. The remaining gauge transformations on either pants are its two central elements. The simultaneous central transformation on both vertices acts trivially on all gluings; minus one on just one vertex adds $\pi$ to ALL three $\phi_i$. Thus the generic twist fiber is
$$ (\mathbb R/2\pi\mathbb Z)^3\big/\langle(\pi,\pi,\pi)\rangle.$$
There is no quotient by three independent half-turns: changing only one edge's lift changes a genuine surface holonomy. The quotient has exactly one half the volume of the ordinary three-torus. These coordinates give the entire moduli above each interior angle, since restrictions determine each pants up to conjugation and the three centralizer identifications are all its remaining gluing data. The boundary of $P$ has measure-zero inverse image in the smooth six-manifold: in the explicit pants model a boundary equality makes at least one pants reducible, its centralizer increases from a finite group to a circle, and its gluing quotient loses at least one of the interior six dimensions. At an angle endpoint it loses further dimensions. The finite face stratification therefore consists of smooth images of parameter spaces of dimension at most five. No six-dimensional part of the compact moduli was omitted from the integral. [step 1.1, step 2.1, construct, algebra]

4.1 **Chern--Weil and twist normalization.** In a local universal connection the mixed curvature has components $a,b$ in two moduli directions. Expanding its square gives the surface-slant form
$$-\frac1{4\pi^2}\int_\Sigma\operatorname{tr}(a\wedge b),$$
because the adjoint trace is four times the fundamental trace and $\mu=-p_1/4$. Thus $[\omega]=\mu(\Sigma)$ with the sign in step 1.1. A twist variation along the $i$th neck is the infinitesimal gauge generated by $\chi\,n_i$, with a cutoff $\chi$ changing from zero to one across that neck. Integration by parts pairs it only with the variation of its boundary holonomy. Since $\operatorname{tr}(n_i^2)=-2$ and that holonomy is $\exp(\theta_i n_i)$, the resulting pairing is $d\theta_i/(2\pi^2)$. Disjoint collars have zero cross-pairings. Consequently on an interior angle chart
$$\omega=\sum_{i=1}^3\frac{d\theta_i\wedge d\phi_i}{2\pi^2}+\beta,$$
where $\beta$ has two angle legs. A different section of the twist torus may change $\beta$, but it cannot change the top-volume coefficient: wedging in even one such term leaves fewer than three twist legs, so the resulting six-form vanishes. We obtain
$$\frac{\omega^3}{3!}=\frac{d\theta_1\,d\phi_1\,d\theta_2\,d\phi_2\,d\theta_3\,d\phi_3}{(2\pi^2)^3}$$
with the symplectic orientation. All factors have been calculated with the fundamental trace; no Killing-form normalization is substituted. [F1, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 **The numerical integral.** The angle volume is $\pi^3/6$ by step 2.1, while the twist volume is $(2\pi)^3/2$ by step 3.1. Step 4.1 therefore gives
$$\int_{N_2}\frac{\mu(\Sigma)^3}{3!}=\frac{\pi^3}{6}\frac{(2\pi)^3}{2(2\pi^2)^3}=\frac1{12}.$$
The measure-zero complementary strata contribute zero to this smooth top-degree form. Multiplication by $3!$ proves the claimed integral $1/2$. In particular the half arises from the actual simultaneous central gauge in the twist fiber; deleting that quotient would give the incorrect value one. [step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 **The corresponding ruled-surface cutdown.** On $S=\Sigma\times\mathbb{CP}^1$ the determinant class $B$ has square zero. In the zero-charge sector $p_1(\operatorname{ad}E)=0$, so an ASD adjoint connection has zero curvature by its energy identity. Its projectively flat representations are exactly those on $\Sigma$, because $\mathbb{CP}^1$ is simply connected. Its moduli is therefore precisely $N_2$. It is regular: flat-coefficient Hodge theory and the product cochain decomposition give $H^2(S;\operatorname{ad}E)=H^2(\Sigma;\operatorname{ad}E)\oplus H^0(\Sigma;\operatorname{ad}E)H^2(\mathbb{CP}^1)=0$, and hence the self-dual obstruction space vanishes as well. There is no bubble, since its total trace-free energy is zero. Its surface incidence class restricts to the same universal $\mu(\Sigma)$ just integrated. The canonical class is $K_S=2B-2\Sigma$, so [F2] gives orientation sign $(-1)^{K_SB/2}=-1$. Thus its rational three-surface cutdown is $-1/2$. The other determinant extension $B+\Sigma$ has $p_1\equiv(B+\Sigma)^2\equiv2\pmod4$ and cannot have this six-dimensional index sector, which would require $p_1=0$. Therefore the quotient sum gives the same value. This establishes this actual genus-two numerical seed without invoking a nonzero higher-energy moduli calculation. [F1, F2, step 1.1, step 4.1, step 5.1, construct, algebra] ∎

## Authoring boundary

This is a new explicit genus-two angle/twist integral. Its count is the six-dimensional zero-energy ruled-surface moduli, not the ten-dimensional insertion count. It neither computes $D(\Sigma^5)=-2$ nor proves the blowup relative-invariant vectors used to determine the gluing coefficient. No accepted source was reread, no canonical content was edited, and no independent acceptance is claimed.
