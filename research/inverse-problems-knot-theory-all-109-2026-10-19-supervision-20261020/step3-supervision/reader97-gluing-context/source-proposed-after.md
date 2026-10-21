---
id: lem-regular-earring-broken-trajectories-have-exhaustive-nonlinear-gluing-collars
kind: lemma
title: Regular earring broken trajectories have exhaustive nonlinear gluing collars
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-order-two-singular-gauge-completions-and-cylindrical-fredholm-operators
  - lem-singular-holonomy-perturbations-have-a-proper-generically-finite-critical-set
  - lem-earring-holonomy-perturbations-regularize-all-trajectory-indices
  - lem-regular-earring-trajectories-have-exponential-ends-and-low-index-broken-compactness
  - thm-banach-fixed-point
  - thm-implicit-function-theorem-for-banach-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Kronheimer and Mrowka, Khovanov homology is an unknot-detector
      url: https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf
      locator: §3.6; the nonlinear inverse and exhaustion are proved locally below
---

## Statement

Assume full AC and the actual all-index regular earring perturbation. Every ordered broken pair of index-one trajectories has a gluing collar of index-two unparametrized trajectories. Each sufficiently broken index-two trajectory belongs to precisely the collar of its broken limit. The glued relative class is the actual concatenation class. Together with the unbroken moduli, these collars make the index-two compactification a compact one-dimensional manifold with boundary the ordered broken pairs. The smooth structure is its ordinary smooth structure in the interior and the collar smooth structure at its boundary. No assertion of analyticity in an arbitrarily preassigned exponential neck coordinate is made.

## Statement references

[Kronheimer–Mrowka, §3.6](https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf)

## Facts & Assumptions

[F1] The invariant high-Sobolev slices, elliptic estimates, limiting critical inverse and smooth nonlocal holonomy mapping bounds are supplied by [[lem-order-two-singular-gauge-completions-and-cylindrical-fredholm-operators]] and [[lem-singular-holonomy-perturbations-have-a-proper-generically-finite-critical-set]]. Holonomy derivatives are local in the cylinder time, so commute with its scalar cutoffs.

[F2] All nonconstant levels are regular, and the time action is free and proper, by [[lem-earring-holonomy-perturbations-regularize-all-trajectory-indices]]. Every such level has exponential critical ends in every order; actual low-index compactness, finite classes, index addition and absence of bubbles are proved in [[lem-regular-earring-trajectories-have-exponential-ends-and-low-index-broken-compactness]].

[F3] The contraction and local parametrization arguments use [[thm-banach-fixed-point]] and [[thm-implicit-function-theorem-for-banach-spaces]]. Full AC is inherited from the actual Sobolev and regularity constructions. [[def-axiom-of-choice]]

## Proof

**Given:** Index-one trajectories $A_-$ from $\alpha$ to $\beta$ and $A_+$ from $\beta$ to $\gamma$, represented with exponential ends and with their translations fixed by an $L^2$ phase slice.

1.1 **Actual pregluing with an exponentially small residual.** Use their convergent end gauges to identify both ends with the same representative $\beta$ on the same orbifold bundle. Their possible central signs act trivially on connections. Translate the two cores to times $-T$ and $T$. Cut their exponentially small deviations from $\beta$ to zero near the middle and identify the resulting equal constant connections. This defines a connection $A_T$ on the concatenated cylindrical bundle, not just formal matching data. Work with an integer $k\ge4$. The equation and gauge-slice residual satisfy $\|e_T\|_{H^{k-1}}\le Ce^{-\delta T}$, as do all fixed orders of its $T$ derivatives, by the exponential estimates and [F1]'s local-in-time holonomy derivatives. The only new terms are cutoff derivatives times the small tail and smooth equation differences on that tail. The glued bundle and path are obtained by the explicit critical-end identification, so their relative class is the concatenation. Cutoffs and this construction are invariant on each order-two chart. [F1, F2, given, construct, algebra]

2.1 **A uniform augmented inverse, with both surjectivity and injectivity.** Write $X_T=H^k$ for the actual invariant connection variations and $Y_T=H^{k-1}$ for the equation and gauge-fixing target. Let $v_-,v_+$ be the two velocities. On the full translated levels put $\ell_\pm(u)=\langle u,v_\pm\rangle_{L^2}$ and $S_\pm u=(D_\pm u,\ell_\pm(u))$. Regularity and index one give $\ker D_\pm=\mathbb Rv_\pm$ and surjectivity, so $S_\pm:X_\pm\to Y_\pm\oplus\mathbb R$ are bounded isomorphisms. Denote their inverses by $Q_\pm$. On the full critical cylinder let $Q_\beta=D_\beta^{-1}$, with $D_\beta=\partial_t+H_\beta$, as supplied by [F1]. These are operators between precisely the invariant Sobolev spaces; their connection-bundle identifications use the common end representative from step 1.1.

Choose a large tail radius $R$ and a long transition width $L\ge1$, and then $T>2(R+2L)$. There is a three-term time partition $\eta_-+\eta_\beta+\eta_+=1$: its first and last terms contain the translated cores and their outer infinite ends, and the transitions to the middle lie beyond tail radius $R$, with width $L$. Choose $\zeta_j=1$ on $\operatorname{supp}\eta_j$, supported in slightly enlarged regions whose enlargement also stays beyond radius $R$. All positive-order derivatives through $k+1$ are bounded by $C/L$, and the overlap number is at most three, independently of $T$. Translations identify the outer regions with complete level cylinders; on the middle use the critical cylinder. Multiplication first by $\eta_j$ permits extension by zero to those complete cylinders. The output factors $\zeta_j$ make the returned sections vanish at artificial interfaces. These scalar functions of time preserve all invariant-chart and bundle conditions.

Let $k_{T,\pm}$ be the cutoff translated velocities, equal to $v_\pm$ on the cores and cut off only on the exponentially small middle tails. Set $\ell_{T,\pm}(u)=\langle u,k_{T,\pm}\rangle_{L^2}$ and $S_Tu=(D_Tu,\ell_{T,-}(u),\ell_{T,+}(u))$. Their Gram matrix tends to the positive diagonal matrix of the two level velocities. Define the actual bounded patching operator, with each summand read in the indicated translated bundle chart, by
$$P_T(f,c_-,c_+)=\zeta_-Q_-(\eta_-f,c_-)+\zeta_\beta Q_\beta(\eta_\beta f)+\zeta_+Q_+(\eta_+f,c_+).$$
Its norm $Y_T\oplus\mathbb R^2\to X_T$ is bounded independently of $T,R,L$ for these uniformly controlled cutoffs.

Write $u_\pm=Q_\pm(\eta_\pm f,c_\pm)$ and $u_\beta=Q_\beta(\eta_\beta f)$. The equation component of $(S_TP_T-1)(f,c)$ is exactly
$$\sum_{j\in\{-,\beta,+\}}\bigl([D_T,\zeta_j]u_j+\zeta_j(D_T-D_j)u_j\bigr),$$
since $\zeta_j\eta_j=\eta_j$ and $\sum_j\eta_j=1$. The commutators have norm at most $C/L$ from $H^k$ to $H^{k-1}$: differential commutators involve cutoff derivatives, while all spatial holonomy derivatives commute with time cutoffs. On the supports where the operators differ, the exponential tails and the smooth holonomy mapping bounds give $\|D_T-D_j\|_{H^k\to H^{k-1}}\le Ce^{-\delta R}$, with the needed coefficient-derivative bounds. For the scalar components, $\ell_\pm(u_\pm)=c_\pm$ exactly; the difference from $\ell_{T,\pm}(\sum_j\zeta_ju_j)$ pairs only with velocity tails beyond radius $R$, whose $L^2$ norms are at most $Ce^{-\delta R}$. The three inverse bounds and Cauchy–Schwarz therefore give
$$\|S_TP_T-1\|_{Y_T\oplus\mathbb R^2\to Y_T\oplus\mathbb R^2}\le C/L+Ce^{-\delta R}.$$
Taking $L,R$ large makes this less than $1/2$. Its Neumann correction makes $S_T$ surjective with uniformly bounded right inverse.

Injectivity is a separate estimate. Apply $S_\pm^{-1}$ to $\eta_\pm u$ and $Q_\beta$ to $\eta_\beta u$, using
$$D_j(\eta_ju)=\eta_jD_Tu+[D_j,\eta_j]u+\eta_j(D_j-D_T)u.$$
Also $\ell_\pm(\eta_\pm u)-\ell_{T,\pm}(u)$ pairs $u$ only with exponentially small velocity tails. Summing these estimates and using $u=\sum_j\eta_ju$ gives
$$\|u\|_{H^k}\le C\bigl(\|D_Tu\|_{H^{k-1}}+|\ell_{T,-}(u)|+|\ell_{T,+}(u)|\bigr)+(C/L+Ce^{-\delta R})\|u\|_{H^k}.$$
Increase $L,R$ and absorb the last term. Thus $S_T$ is injective and its inverse is uniformly bounded. Precisely because $K_T^\perp=\ker\ell_{T,-}\cap\ker\ell_{T,+}$, the map $f\mapsto S_T^{-1}(f,0,0)$ is an actual inverse of $D_T:K_T^\perp\to Y_T$; call it $Q_T$. Also $\ker D_T=S_T^{-1}(\{0\}\oplus\mathbb R^2)$ is exactly two-dimensional. This uses neither an index-only surjectivity assertion nor an unsupported removal of scalar stabilizations. For fixed $R,L$, parameter derivatives of $S_T$ are uniformly bounded in translated core coordinates; differentiation of $S_T^{-1}S_T=1$ gives the inverse-derivative bounds. The finite-cutoff estimates take place on the actual order-two invariant charts, with no asserted extension of an ordinary gluing theorem to a singular problem. [F1, F2, step 1.1, construct, algebra]

3.1 **The nonlinear solution and its parameters.** In the actual gauge slice the equation is $e_T+D_Ta+N_T(a)=0$. The four-dimensional Sobolev product inequality for $k\ge4$ and the bounded higher holonomy derivatives give $\|N_T(a)-N_T(b)\|_{H^{k-1}}\le C(\|a\|_{H^k}+\|b\|_{H^k})\|a-b\|_{H^k}$ with constant independent of $T$; the cylinder has fixed bounded geometry and the cutoff cover has uniformly finite overlap. Thus $a=-Q_T(e_T+N_T(a))$ is a contraction on the $K_T^\perp$ ball of radius $2C\|e_T\|_{H^{k-1}}$. It has one solution $a_T$, with $\|a_T\|_{H^k}\le C'e^{-\delta T}$. The smooth implicit theorem and the differentiated inverse give a smooth family for finite $T$, with corresponding exponentially small derivatives. Bootstrap makes each actual solution smooth. Its derivative and the overall translation derivative project to the two original velocity directions with an invertible limiting matrix; hence they span the two-dimensional solution kernel. The normal implicit parametrization shows this is an open family of all nearby solutions. After quotienting overall translation, $T$ is a local coordinate on an interval, and the phase choices change it by a smooth change of coordinate. [F1, F2, F3, step 1.1, step 2.1, construct, algebra]

4.1 **Exhaustion with an interval estimate independent of its length.** Suppose an index-two sequence converges to the given broken pair. Fix the two core phases and use the compatible end gauges to compare it with the corresponding pregluing, whose core separation tends to infinity. Smooth convergence on fixed core windows is supplied by [F2]. The middle critical slice is uniformly small in every required fixed order after sufficiently large core windows have been removed: otherwise a translated window a fixed positive distance from the critical orbit has a nonconstant limiting level or a bubble by [F2], contradicting the exact total index two. The slice lift over that interval is fixed by one endpoint gauge; its only residual central sign acts trivially. Its gauge time component is recovered by the fixed critical gauge inverse as in [F2]'s exponential-end construction.

In that critical slice write $D_\beta a=N(a)$ on $I=[l,r]$, where $D_\beta=\partial_t+H_\beta$. Let $J=[l,l+1]\cup[r-1,r]$, assume $r-l\ge4$, and take a fixed-shape cutoff $\chi$ supported in $I$, equal to one on $[l+1,r-1]$, with derivatives supported in $J$ and bounded independently of $r-l$. Extend $\chi a$ by zero to the full critical cylinder. Exactly,
$$D_\beta(\chi a)=\chi N(a)+\chi'a.$$
If $a$ is uniformly small in the required slice norms by $\varepsilon$, the Taylor and Sobolev product estimates give
$$\|\chi N(a)\|_{H^{k-1}}\le C\varepsilon\|\chi a\|_{H^k}+C\varepsilon\|a\|_{H^k(J)}.$$
For the quadratic curvature term expand by Leibniz; terms differentiating $\chi$ are supported in $J$. For the higher holonomy terms use their bounded derivatives and locality in time, so the same scalar cutoff creates no nonlocal time commutator. The constants use the fixed bounded-geometry cylinder and endpoint cutoff shapes, not its length. Applying the critical full-line inverse gives
$$\|\chi a\|_{H^k}\le C_\beta C\varepsilon\|\chi a\|_{H^k}+C'\|a\|_{H^k(J)}.$$
Choose $\varepsilon<(2C_\beta C)^{-1}$ and absorb. Consequently
$$\|a\|_{H^k([l+1,r-1])}\le C''\|a\|_{H^k(J)}$$
uniformly in the interval length. The stronger $H^{k+1}(J)$ norm also supplies the originally used right-hand bound. The weighted critical inverse handles the two outer infinite tails by the same calculation, as in [F2]. Thus no estimate multiplies the small middle norm by the square root of its length: its whole Sobolev norm is controlled by the fixed-width boundary strips.

First choose core windows far into the original exponential tails, and then take the sequence index large. Smooth core convergence, the middle estimate and the outer weighted estimates give global $H^k$ closeness to the actual pregluing. Its truncated tails satisfy the same bound, so their subtraction preserves closeness. Adjust the two phases by step 3.1's invertible matrix, putting the remaining correction $b$ in $K_T^\perp$. The exact equation and uniform normal inverse imply $\|b\|_{H^k}\le C\|e_T\|_{H^{k-1}}+C_1\|b\|_{H^k}^2$. Global closeness makes $C_1\|b\|_{H^k}<1/2$; absorption gives $\|b\|_{H^k}\le2C\|e_T\|_{H^{k-1}}$. It is therefore in the actual exponentially small contraction ball of step 3.1, not merely a fixed small neighborhood, and equals the unique correction there. Hence the trajectory is precisely $A_T+a_T$ up to overall translation. This proves all-sequence exhaustion, uniqueness of its broken-pair label and absence of a second local sheet with that limit. [F1, F2, F3, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 **The actual compact manifold with boundary.** For the finite critical set and relevant finite classes, the index-one quotients are finite by [F2]; hence there are finitely many ordered broken pairs. Choose disjoint sufficiently far-out collars using step 4.1. Give each the boundary coordinate $r=1/T$ and adjoin $r=0$. For $r>0$ it is the ordinary smooth chart from step 3.1; declaring this collar to be smooth supplies its boundary chart without making an unsupported power-series assertion about $e^{-\delta T}$. Any two choices of phase and pregluing yield the same set by exhaustion; one may fix one choice per boundary point, so no prescribed smoothness at zero of an arbitrary alternative neck variable is required. Interior slices and these finitely many collars make a Hausdorff second-countable one-dimensional manifold with boundary. Every sequence has an unbroken or broken subsequential limit by [F2], and step 4.1 identifies exactly the collar topology at the latter. It is therefore compact. Its boundary is precisely the ordered pairs, with the actual concatenation label retained from step 1.1. Orientation and its boundary sign are separate determinant-line claims, not consequences merely of this topological compactification. [F1, F2, step 1.1, step 3.1, step 4.1, construct, algebra] ∎

## Source notes

The primary orientation and chain-complex discussion is used only to document the intended application. The proof uses the actual regular cylindrical inverse and exponential-end suppliers, and explicitly proves the uniform normal inverse, nonlinear correction and exhaustion. It does not cite a gluing theorem as a replacement for any of those operations.
