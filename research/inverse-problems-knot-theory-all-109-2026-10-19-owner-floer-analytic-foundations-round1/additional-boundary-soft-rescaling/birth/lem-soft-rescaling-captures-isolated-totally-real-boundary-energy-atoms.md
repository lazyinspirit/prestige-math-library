---
id: lem-soft-rescaling-captures-isolated-totally-real-boundary-energy-atoms
kind: lemma
title: "Soft rescaling captures an isolated totally real boundary energy atom"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-smooth-strip-compactness-away-from-energy-concentration, lem-rescaled-strip-energy-concentration-produces-a-finite-energy-bubble, lem-finite-energy-almost-complex-puncture-removability, lem-small-local-energy-cylinder-neck-collapse, lem-soft-rescaling-captures-isolated-interior-energy-atoms]
dependency_level: 7
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Aleksey Zinger, Notes on J-Holomorphic Maps"
      url: "https://arxiv.org/abs/1706.00331"
      locator: "Interior soft-rescaling proof on printed pages 39–46 read in full; boundary adaptation is proved locally below"
---

## Statement

Assume Countable Choice. Let $(X,g)$ be compact and $L\subset X$ a fixed compact totally real submanifold. On the closed upper half-disk let smooth almost complex families $J_n(z,x)$ converge smoothly locally to $J_\infty$, with uniform coefficient bounds, and suppose $J_n(s,x)=J_b(x)$ for real $s$ and $x\in L$, independent of $n,s$. Let smooth solutions $u_n:B_1^+\to X$, smooth up to the straight boundary with values there on $L$, have uniformly bounded energy and converge smoothly locally off $0$, including boundary points, to a solution $u$ smoothly filled at $0$. Suppose concentric half-disk energies have limits with positive atom mass $m$ at $0$.

There is a uniform $h>0$ such that $m\ge h$ and, after a subsequence, real centers $a_n\to0$, positive scales $\rho_n\to0$, an autonomous $J_\infty(0,x)$-holomorphic disk $v$ with boundary on $L$, and finitely many child atoms $Z\subset\overline{\mathbb H}$ have these properties. The rescaled maps $v_n(w)=u_n(a_n+\rho_nw)$ converge smoothly locally off $Z$ to $v$, on the upper half-plane including its straight boundary. Moreover
$$\lim_{R\to\infty}\lim_nE_g(v_n;B_R^+)=m=E_g(v)+\sum_{z\in Z}m_z,\qquad v(\infty)=u(0).$$
Every child has mass at least $h$. Boundary children satisfy $m_z\le m-h$; interior children satisfy $m_z\le m$. If $v$ is constant then
$$|Z\cap\mathbb R|+2|Z\cap\mathbb H|\ge2.$$
Thus the constant disk is stable after including its parent boundary node at infinity. The connecting half-annuli have vanishing energy and image diameter. The same $h$ works for descendants. These conclusions constitute one actual boundary soft-rescaling step.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The actual smooth maps, compact boundary geometry, fixed boundary structures, coefficient convergence, filled base, and isolated positive mass in the statement.

[F1] The local proof of [[lem-smooth-strip-compactness-away-from-energy-concentration]] gives smooth subsequences off finitely many genuine concentration points on disks and half-disks with these fixed boundary structures. Its actual bootstrap includes boundary derivatives.

[F2] [[lem-rescaled-strip-energy-concentration-produces-a-finite-energy-bubble]] proves local normalized blowup to an autonomous plane or half-plane map with positive energy. [[lem-finite-energy-almost-complex-puncture-removability]] fills finite and infinite punctures of these actual finite-energy maps to spheres or disks.

[F3] [[lem-small-local-energy-cylinder-neck-collapse]] gives energy and image-diameter collapse for actual half-cylinder necks with both edges on $L$ and the fixed $J_b$ stipulated here.

[F4] The interior local rescaling, mass and quantum arguments are fully proved in [[lem-soft-rescaling-captures-isolated-interior-energy-atoms]].

## Proof

1.1 Fix a uniform quantum $h_0>0$ for the normalized plane and half-plane bubbles of [F2]. Every nonconstant autonomous disk or sphere for these limiting structures also has energy bounded below uniformly: in its plane or half-plane parametrization choose a finite point with nonzero derivative and translate and dilate to make its norm one, preserving the half-plane when necessary. If that point is farther than a fixed small distance from the boundary use the interior epsilon estimate; otherwise use the boundary half-radius estimate. Either the relevant small-energy threshold fails, giving a positive energy bound already, or its derivative estimate gives one. This is the same actual lower-bound argument in [F2], and needs no assumed global gradient bound. Decrease $h_0$ to cover these cases. Fix $h\le h_0$ smaller than one eighth of the boundary neck threshold in [F3]. All constants are uniform under the compact coefficient bounds. [F2, F3, F4, given, construct, algebra]

2.1 Put $M(r)=\lim_nE_g(u_n;B_r^+)$. Annular smooth convergence and the smooth filling of $u$ give, exactly by subtracting two radii and shrinking the inner one, $$M(r)=m+E_g(u;B_r^+).$$ This is continuous in $r$. For any real centers $a_n\to0$, inclusions between half-disks of radii $r\pm\epsilon$ then give $$\lim_nE_g(u_n;B_r^+(a_n))=m+E_g(u;B_r^+).$$ Moving half-annuli of fixed positive radii likewise converge in energy to the corresponding base half-annuli. Any shrinking half-neighborhood has energy limsup at most $m$ by containment in arbitrarily small fixed half-disks. [given, construct, algebra]

3.1 Maximize $|du_n|_g$ on the closed half-disk of radius $1/2$, writing its maximum $M_n$ and a maximizing point $z_n=x_n+iy_n$. The positive atom forces $M_n\to\infty$ after a subsequence; otherwise uniform gradient bounds and [F1] would give smooth convergence across zero and no atom. Smooth convergence off zero gives $z_n\to0$. The normalized local blowup construction of [F2] then produces a nonconstant autonomous plane or half-plane bubble of energy at least $h$, and at most $m$ by step 2.1. Hence $m\ge h$. Set $a_n=x_n\in\mathbb R$; these are the boundary centers used from now on. [F1, F2, step 1.1, step 2.1, construct, algebra]

4.1 Let $\mu=m-h/2>0$. Choose the smallest radius $\rho_n$ with $E_g(u_n;B_{\rho_n}^+(a_n))=\mu$. It exists for large $n$ by the continuous radius-energy function, which begins at zero and exceeds $\mu$ at every small fixed radius eventually by step 2.1. The first solution is attained and $\rho_n\to0$, without a uniqueness claim. The maps $v_n(w)=u_n(a_n+\rho_n w)$ are defined on an exhaustion of the upper half-plane; their source coefficients converge smoothly locally to $J_\infty(0,x)$, and their boundary structure is exactly $J_b$. Their unit half-disk energy is exactly $\mu$. [step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 Apply [F1] on a countable exhaustion of the closed half-plane by disks and half-disks. Countable energy limits and disjoint neighborhoods bound the number of concentration points by the global energy bound divided by the epsilon threshold. Outside them actual epsilon estimates, target compactness, and the local higher bootstrap give a smooth diagonal limit, including boundary derivatives. Remove exceptional points at which some further subsequence has bounded gradients on a neighborhood, at most finitely many times. Thus there is a finite genuine concentration set $Z\subset\overline{\mathbb H}$ and $v_n\to v$ smoothly off it. Extract energy limits on small countably many radii about each point and on exhaustion half-disks. [F1, step 4.1, construct, algebra]

6.1 Every child atom $m_z$ is at least $h$: normalize a gradient blowup in a small neighborhood of that point by [F2], obtaining a plane or half-plane bubble of energy at least $h$ and at most that mass by containment and annular energy differences. The limit $v$ has finite energy by exhaustion. By [F2] it fills across every finite interior or boundary puncture and across infinity to a smooth autonomous disk with boundary on $L$. Its coefficient is $J_\infty(0,x)$. Smooth annular convergence and the filled map show that child disk or half-disk energy limits extend from rational to every small radius and equal $m_z$ plus the filled limit's energy. [F2, step 1.1, step 2.1, step 5.1, construct, algebra]

7.1 No energy escapes at infinity in this rescaling. For small fixed $d>0$, the half-annulus $\rho_n<|z-a_n|<d$ has limiting energy $h/2+E_g(u;B_d^+)$, below the neck threshold after reducing $d$. The holomorphic coordinate $z=a_n+e^{\sigma+i\tau}$ makes it a half-cylinder with $0\le\tau\le\pi$, both physical edges on $L$, boundary structure $J_b$, and explicit source coefficient derivatives bounded by $Cd$. Every cylindrical patch has energy at most the total half-annulus energy. Thus [F3], applied with unit buffers at the radial ends, gives for fixed $R\ge e^2$ and all large $n$ $$\begin{aligned}E_g(u_n;B_{d/R}^+(a_n)\setminus B_{R\rho_n}^+(a_n))&\le CR^{-c},\\ \operatorname{diam}_g u_n(\overline{B_{d/R}^+(a_n)\setminus B_{R\rho_n}^+(a_n)})&\le CR^{-c/2}.\end{aligned}$$ Constants are independent of $d,R,n$ in the stated ranges. The small source-variation condition follows from the factor $|z-a_n|\le d$ in every cylindrical source derivative and the original uniform smooth bounds. [F3, step 2.1, step 4.1, construct, algebra]

8.1 Subtract the moving fixed half-annulus between radii $d/R$ and $d$ in step 2.1 from the total half-disk. Step 7.1 yields $$m-CR^{-c}\le\liminf_nE_g(v_n;B_R^+)\le\limsup_nE_g(v_n;B_R^+)\le m+E_g(u;B_d^+).$$ Let $d\downarrow0$ and then $R\to\infty$. A countable radius extraction and monotone sandwiches provide the inner limits at other radii; the only remaining possibly exceptional radii are the finitely many $|z|$, $z\in Z$, whose bounded energy sequences can also be extracted. Therefore $$\lim_{R\to\infty}\lim_nE_g(v_n;B_R^+)=m.$$ Partitioning a large half-disk into small disjoint disks about interior points of $Z$, half-disks about boundary points, and their complement, then using smooth convergence and shrinking those neighborhoods gives $$E_g(v)+\sum_{z\in Z}m_z=m.$$ The partitions are finite, so no uncontrolled infinite-sum limit is used. [step 2.1, step 5.1, step 6.1, step 7.1, algebra]

9.1 The same diameter estimate proves $v(\infty)=u(0)$. Choose large $R$ with the boundary point $R$ outside $Z$ and compare the two points $a_n+d/R$ and $a_n+R\rho_n$ on the closed half-annulus. Smooth boundary convergence gives $$d_g(u(d/R),v(R))\le CR^{-c/2}.$$ Let $d\downarrow0$ and then $R\to\infty$, using the smooth base filling and disk filling at infinity from step 6.1. Thus the parent and rescaled disk meet at the same point of $L$. The estimates of step 7.1 give precisely the claimed vanishing neck energy and image diameter. [step 6.1, step 7.1, algebra]

10.1 It remains to check disk stability; a constant disk may have a single interior child, which must not be excluded. Suppose $v$ is constant. Then $Z$ is nonempty by step 8.1, and a genuine child supplies points with $|dv_n|\to\infty$. Since the original gradient maximum is $M_n$, it follows that $M_n\rho_n\to\infty$ after a subsequence. Its maximizing point in the rescaled coordinates is $q_n=iy_n/\rho_n$. We show these heights cannot tend to infinity. If they did, then $M_ny_n=(M_n\rho_n)(y_n/\rho_n)\to\infty$. The maps $$w\mapsto u_n(z_n+w/M_n)$$ would be defined on expanding full disks, with derivative norm at most one everywhere there and equal to one at zero. Indeed their distance from the physical boundary is $M_ny_n\to\infty$, and their distance from the outer half-disk boundary also tends to infinity. By [F1] and [F2] they have a nonconstant plane limit of energy at least $h$. A fixed large disk of that normalized bubble has energy greater than $h/2$ for all large $n$. In the $v_n$ coordinates it lies outside every fixed $B_A^+$, because its center height tends to infinity and its radius is $O((M_n\rho_n)^{-1})\to0$. [F1, F2, step 3.1, step 5.1, step 8.1, construct, algebra]

11.1 This contradicts the capture identity in step 8.1. More explicitly choose $A$ so that $\lim_nE_g(v_n;B_A^+)>m-h/8$, then choose a fixed original $d$ so small that $E_g(u;B_d^+)<h/8$. For large $n$, the escaping normalized bubble disk lies in $B_d^+(a_n)\setminus B_{A\rho_n}^+(a_n)$, whose energy limsup is less than $h/4$ by step 2.1, contrary to its energy greater than $h/2$. Hence a subsequence has $q_n\to iH$ with finite $H\ge0$. The diverging gradient at $q_n$ and smooth convergence off $Z$ imply $iH\in Z$. [step 2.1, step 8.1, step 10.1, algebra]

12.1 If the constant disk had just one boundary child and no interior children, then $iH$ from step 11.1 would be that real child and thus would equal zero. Its mass is at most $\mu$, since $E_g(v_n;B_1^+)=\mu$. But step 8.1 would give its mass equal to $m>\mu$, a contradiction. Therefore a constant disk either has an interior child or at least two boundary children, proving $|Z\cap\mathbb R|+2|Z\cap\mathbb H|\ge2$. For a nonconstant disk its energy is at least $h$ by step 1.1, so all child masses are at most $m-h$. For a constant disk with any boundary child there must be at least one other child, unless the excluded configuration occurs; the other's mass is at least $h$, giving that boundary child's mass at most $m-h$. Every interior child is at most $m$ by step 8.1. This proves all mass and stability assertions. [step 1.1, step 4.1, step 6.1, step 8.1, step 11.1, algebra]

13.1 Subsequent rescalings retain the same fixed boundary structure and autonomous limits among the compact target structures. Their explicit source derivatives decrease, so the same smaller $h$ works for every descendant. All selections involved finite maxima, first attained radius solutions, and countable subsequences and diagonals. Thus the construction uses only Countable Choice and completes the stated actual boundary soft-rescaling step. [step 1.1, step 4.1, step 5.1, step 12.1, construct] ∎
