---
id: "lem-radial-geodesics-from-one-point-reach-every-point-under-global-exp-domain"
kind: "lemma"
title: "Radial geodesics from one point reach every point under global exponential domain"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-countable-choice","prop-components-of-a-topological-manifold-are-open-and-at-most-countable","def-riemannian-distance-on-a-connected-manifold","thm-riemannian-distance-is-a-metric","thm-the-riemannian-distance-topology-is-the-manifold-topology","def-riemannian-speed-and-length","prop-length-dominates-endpoint-distance","prop-length-is-additive-under-concatenation-and-invariant-under-reversal","thm-intermediate-value","thm-coordinate-derivations-form-a-basis-of-the-tangent-space","thm-gram-schmidt-orthonormalisation","def-metric-topology","cor-heine-borel-in-the-product-topology","thm-compactness-under-continuous-maps","thm-existence-of-normal-neighborhoods","cor-local-formula-for-distance-from-the-center-of-a-normal-neighborhood","prop-exponential-map-scales-geodesic-time","prop-geodesics-have-constant-speed-for-a-metric-compatible-connection","thm-existence-uniqueness-and-smooth-dependence-of-geodesics","thm-a-length-minimizing-piecewise-smooth-curve-is-a-constant-speed-geodesic-up-to-reparametrization","cor-cauchy-reals-lub-complete"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, Theorem 19.2.1, implication (3) to (5), pp.142--144
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
    - title: Ben Andrews, Geodesics and Completeness, Theorem 11.5.1, implication (3) to (*p), printed pp.107--108
      url: https://maths-people.anu.edu.au/andrews/DG/DG_chap11.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $(M,g)$ be a boundaryless Riemannian manifold, let $p\in M$, and write $C_p$ for the connected component of $p$. Suppose the fibre exponential map is defined on every tangent vector at $p$, so $\mathcal E_p=T_pM$.

For every $q\in C_p$ there is a vector $v\in T_pM$ such that
$$\exp_p(v)=q,\qquad |v|_{g_p}=d_{g|_{C_p}}(p,q),$$
and the radial geodesic $t\mapsto\exp_p(tv)$, $0\le t\le1$, has length $|v|_{g_p}$ and globally minimizes length from $p$ to $q$ inside $C_p$ (equivalently, among all piecewise-$C^1$ curves in $M$ with those endpoints).

More precisely, if $q\ne p$, put $\ell=d_{g|_{C_p}}(p,q)$. The vector can be written $v=\ell u$ with $|u|_{g_p}=1$, and the unit-speed radial geodesic $\gamma(s)=\exp_p(su)$ satisfies
$$d_{g|_{C_p}}(\gamma(s),q)=\ell-s\qquad(0\le s\le\ell).$$

## Facts & Assumptions

**Given:** The boundaryless Riemannian manifold, point $p$, global fibre exponential domain, and target $q\in C_p$ in the statement.

[A1] [[def-countable-choice]] is the assumed $\mathrm{AC}_\omega$.

[F1] [[prop-components-of-a-topological-manifold-are-open-and-at-most-countable]] makes $C_p$ an open connected boundaryless Riemannian manifold after restriction. [[def-riemannian-distance-on-a-connected-manifold]] defines its finite distance $d$, [[thm-riemannian-distance-is-a-metric]] supplies the triangle inequality and separation, and [[thm-the-riemannian-distance-topology-is-the-manifold-topology]] identifies its metric and manifold topologies.

[F2] [[def-riemannian-speed-and-length]] computes the length of a unit-speed segment. [[prop-length-dominates-endpoint-distance]] bounds endpoint distance by curve length, and [[prop-length-is-additive-under-concatenation-and-invariant-under-reversal]] gives the corresponding prefix--suffix calculation.

[F3] Under [A1], [[thm-existence-of-normal-neighborhoods]] supplies a normal exponential neighbourhood at any fixed point. [[cor-local-formula-for-distance-from-the-center-of-a-normal-neighborhood]] identifies tangent radius with global Riemannian distance there.

[F4] [[thm-coordinate-derivations-form-a-basis-of-the-tangent-space]] supplies a finite coordinate basis of a positive-dimensional tangent space, and [[thm-gram-schmidt-orthonormalisation]] turns it into one orthonormal basis. [[def-metric-topology]] and [[cor-heine-borel-in-the-product-topology]] put norm balls inside open tangent-coordinate sets and make tangent spheres compact. [[thm-compactness-under-continuous-maps]] gives both compactness of each sphere's exponential image and attainment of the minimum of a continuous real function on that nonempty image.

[F5] [[thm-intermediate-value]] applies to the continuous function $t\mapsto d(x,c(t))$ along a competitor curve. Its continuity follows directly from the triangle inequality in [F1].

[F6] Under [A1], [[prop-exponential-map-scales-geodesic-time]] identifies exponential rays with the corresponding geodesics, [[prop-geodesics-have-constant-speed-for-a-metric-compatible-connection]] gives their speed, and [[thm-existence-uniqueness-and-smooth-dependence-of-geodesics]] gives initial-value uniqueness.

[F7] Under [A1], [[thm-a-length-minimizing-piecewise-smooth-curve-is-a-constant-speed-geodesic-up-to-reparametrization]] says that at a breakpoint of a global piecewise-smooth minimizer, its two nonzero one-sided velocities are positive multiples of the same tangent vector.

[F8] [[cor-cauchy-reals-lub-complete]] supplies a supremum for a nonempty set of real parameters bounded above.

## Proof

**Proof technique:** direct.

1.1 We first prove the local sphere step used at both frontiers. Fix $x,y\in C_p$ with $D=d(x,y)>0$. Their component is positive-dimensional. Choose a coordinate basis of $T_xM$ and orthonormalize it by [F4]. By [F3], $\exp_x$ is a diffeomorphism from an open neighbourhood of $0_x$ onto an open neighbourhood of $x$. In the orthonormal coordinates, [F4] supplies $\rho>0$ whose open norm ball $B_\rho(0_x)$ lies in that source; after restriction, put $U=\exp_x(B_\rho(0_x))$. Thus $\exp_x:B_\rho(0_x)\to U$ is a diffeomorphism and $U$ is open. By [F1], choose $a>0$ with the metric ball $B_d(x,a)\subseteq U$, and fix $$0<\delta<\min\{\rho,a,D\}.$$ [F1, F3, F4, given]

2.1 Put $\Sigma_\delta=\{w\in T_xM:|w|_{g_x}=\delta\}$ and $S_\delta(x)=\exp_x(\Sigma_\delta)$. Since $D>0$, the component is not zero-dimensional, so $\Sigma_\delta$ is nonempty. It is closed and bounded in the orthonormal coordinates and hence compact by [F4]; the normal exponential is continuous, so [F4] makes $S_\delta(x)$ compact. The local distance formula in [F3], together with $B_d(x,a)\subseteq U$, gives the exact equality $$S_\delta(x)=\{z\in C_p:d(x,z)=\delta\}.$$ [F1, F3, F4, step 1.1]

3.1 The function $h:S_\delta(x)\to\mathbb R$, $h(z)=d(z,y)$, is continuous because the triangle inequality gives $|h(z)-h(z')|\le d(z,z')$. By [F4] it attains a minimum at some $z_0\in S_\delta(x)$. The triangle inequality and step 2.1 give $$D=d(x,y)\le d(x,z_0)+d(z_0,y)=\delta+h(z_0),$$ so $h(z_0)\ge D-\delta$. [F1, F4, step 2.1]

4.1 Suppose $h(z_0)>D-\delta$ and put $\kappa=(h(z_0)-D+\delta)/2>0$. The infimum definition of $D$ in [F1] supplies one piecewise $C^1$ curve $c:[b_0,b_1]\to C_p$ from $x$ to $y$ with $L(c)<D+\kappa$. By [F5], the continuous function $t\mapsto d(x,c(t))$, whose endpoint values are $0$ and $D$, takes the value $\delta$ at some $\tau$. Step 2.1 puts $c(\tau)$ in $S_\delta(x)$. By [F2], $$L(c|_{[b_0,\tau]})\ge\delta,\qquad d(c(\tau),y)\le L(c|_{[\tau,b_1]})=L(c)-L(c|_{[b_0,\tau]})<D-\delta+\kappa<h(z_0),$$ contradicting the minimality of $z_0$. Therefore $$d(x,y)=\delta+d(z_0,y).$$ This proves the local sphere step without choosing a sequence of approximate minimizers. [F1, F2, F5, step 2.1, step 3.1, assume-contra, discharge-contradiction]

5.1 Return to $p,q$. If $q=p$, take $v=0_p$; the radial curve is constant, has length and distance zero, and is minimizing. Suppose $q\ne p$ and put $\ell=d(p,q)>0$. Apply steps 1.1--4.1 with $x=p$, $y=q$, and a sufficiently small $\varepsilon$ in place of $\delta$. There are $z_\varepsilon\in S_\varepsilon(p)$ and a unit vector $u\in T_pM$ with $$z_\varepsilon=\exp_p(\varepsilon u),\qquad \ell=\varepsilon+d(z_\varepsilon,q).$$ [F1, F3, step 1.1, step 2.1, step 4.1]

6.1 Because $\mathcal E_p=T_pM$, every $su$ belongs to $\mathcal E_p$. By [F6], $\gamma(s)=\exp_p(su)$ is therefore defined for every real $s$ and is the geodesic with initial velocity $u$. Its image is connected and contains $p$, so it lies in $C_p$ and the distance $d$ used below is defined on it. Its speed is constantly one, so [F2] gives $L(\gamma|_{[r,s]})=s-r$ whenever $0\le r\le s$. [F1, F2, F6, given, step 5.1]

7.1 Define $$A=\{t\in[0,\ell]:\ell=t+d(\gamma(t),q)\}.$$ Step 5.1 says $\varepsilon\in A$. If $t\in A$ and $0\le s\le t$, then [F1]--[F2] give $$s+d(\gamma(s),q)\le s+d(\gamma(s),\gamma(t))+d(\gamma(t),q)\le t+d(\gamma(t),q)=\ell,$$ whereas $$\ell=d(p,q)\le d(p,\gamma(s))+d(\gamma(s),q)\le s+d(\gamma(s),q).$$ Thus equality holds throughout, $s\in A$, and $d(p,\gamma(s))=s$; in particular every prefix ending at a parameter in $A$ is minimizing. [F1, F2, step 5.1, step 6.1]

8.1 By [F8], $T=\sup A$ exists and $\varepsilon\le T\le\ell$. We claim $T\in A$. Given $\eta>0$, the definition of supremum supplies $t\in A$ with $T-\eta<t\le T$; otherwise $T-\eta$ would be a smaller upper bound. The triangle inequality and step 6.1 give $$|d(\gamma(T),q)-d(\gamma(t),q)|\le d(\gamma(T),\gamma(t))\le T-t<\eta.$$ Since $d(\gamma(t),q)=\ell-t$, the difference between $d(\gamma(T),q)$ and $\ell-T$ has absolute value less than $2\eta$. If that difference were nonzero, taking $\eta$ smaller than one third of its absolute value would be impossible. Hence $d(\gamma(T),q)=\ell-T$ and $T\in A$. [F1, F2, F8, step 6.1, step 7.1]

9.1 Suppose, for contradiction, that $T<\ell$, and put $x=\gamma(T)$. Carry out steps 1.1--4.1 for $x,q$, choosing $$0<\delta<\min\{T,\ell-T\}$$ as well as smaller than the local normal and metric radii there. We obtain $z_0=\exp_x(\delta w)$ for a unit $w\in T_xM$, with radial segment $\sigma(s)=\exp_x(sw)$, $0\le s\le\delta$, and $$d(x,q)=\delta+d(z_0,q)=\ell-T.$$ [F3, F4, step 1.1, step 2.1, step 4.1, step 8.1, assume-contra]

10.1 Concatenate $\gamma|_{[0,T]}$ with $\sigma$. By [F2], [F3], and step 6.1 its length is $T+\delta$. On the other hand, the triangle inequality and step 9.1 give $$\ell=d(p,q)\le d(p,z_0)+d(z_0,q)=d(p,z_0)+\ell-T-\delta,$$ so $d(p,z_0)\ge T+\delta$. The concatenated curve therefore has length exactly $d(p,z_0)=T+\delta$ and is globally minimizing. Every one of its subarcs is also minimizing, since a shorter replacement would shorten the full curve by finite additivity. [F1, F2, F3, step 6.1, step 9.1]

11.1 The entire concatenation in step 10.1 is a piecewise smooth global minimizer, with the unit vectors $\gamma'(T)$ and $w$ as its nonzero one-sided velocities at its sole possible corner $x$. By [F7] these vectors are positive multiples of the same tangent vector; because both have norm one, they are equal. Initial-value uniqueness in [F6] now gives $$\sigma(s)=\gamma(T+s)\qquad(0\le s\le\delta).$$ [F6, F7, step 6.1, step 9.1, step 10.1]

12.1 Thus $z_0=\gamma(T+\delta)$, and step 9.1 becomes $$\ell=(T+\delta)+d(\gamma(T+\delta),q).$$ So $T+\delta\in A$, contradicting that $T$ is an upper bound of $A$. Therefore $T=\ell$. Since $T\in A$, [F1] gives $d(\gamma(\ell),q)=0$ and hence $\gamma(\ell)=q$. [F1, F8, step 8.1, step 9.1, step 11.1, discharge-contradiction]

13.1 Step 7.1 and $T=\ell$ show $d(\gamma(s),q)=\ell-s$ and $d(p,\gamma(s))=s$ for every $s\in[0,\ell]$. Hence the unit-speed radial curve $\gamma|_{[0,\ell]}$ has length $\ell=d(p,q)$ and is minimizing. Put $v=\ell u$. By [F6], $\exp_p(v)=\gamma(\ell)=q$, and $t\mapsto\exp_p(tv)=\gamma(\ell t)$ has length $\ell=|v|_{g_p}$. [F1, F2, F6, step 5.1, step 6.1, step 7.1, step 12.1]

14.1 Every piecewise-$C^1$ curve from $p$ has connected image and therefore stays in $C_p$, so minimizing inside $C_p$ is equivalent to minimizing among such curves in $M$ with these endpoints. Empty $M$ supplies no $p$. In dimension zero each component is an open singleton, so only the constant case of step 5.1 occurs; dimension one is covered because its positive-radius tangent sphere has two points. Zero distance and zero velocity were handled in step 5.1, all normal and metric radii were chosen strictly below their open endpoints, and the parameter endpoints $0,\ell$ were included in steps 8.1 and 12.1. No converse is claimed. Assumption [A1] is used exactly through [F3], [F6], and [F7] for the already-constructed normal/exponential, global-geodesic, and minimizer-regularity results. Each compact minimum, basis, radius, and near-minimizing curve is instantiated only at one of finitely many fixed stages; the sphere-crossing and supremum arguments select no sequence or arbitrary family, so no further choice is used. [A1, F1, F3, F4, F5, F6, F7, F8, step 4.1, step 5.1, step 8.1, step 12.1, step 13.1] ∎

## Source locator

Datar, Theorem 19.2.1, implication (3) to (5), printed pp.142--144, supplies the compact first sphere, its distance-minimizing point, the additive distance identity, and the maximal radial endpoint argument. Andrews, Theorem 11.5.1, implication (3) to (*p), printed pp.107--108 (PDF pp.7--8), independently supplies the fixed-target set $A$, its downward closure, and the local continuation. The proof above makes their abbreviated assertions that every competitor crosses the small sphere and that the concatenated minimizer has no corner explicit, and it replaces both sequential limit choices by one attained compact minimum and a supremum argument.
