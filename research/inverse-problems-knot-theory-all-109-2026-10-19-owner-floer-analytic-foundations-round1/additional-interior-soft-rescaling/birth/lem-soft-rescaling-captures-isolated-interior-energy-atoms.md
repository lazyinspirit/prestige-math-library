---
id: lem-soft-rescaling-captures-isolated-interior-energy-atoms
kind: lemma
title: "Soft rescaling captures an isolated interior energy atom"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-smooth-strip-compactness-away-from-energy-concentration, lem-rescaled-strip-energy-concentration-produces-a-finite-energy-bubble, lem-finite-energy-almost-complex-puncture-removability, lem-small-local-energy-cylinder-neck-collapse]
dependency_level: 6
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
      locator: "Complete proofs of Lemma 5.2, Corollary 5.3 and Proposition 5.5, printed pages 39–46, read in full"
---

## Statement

Assume Countable Choice. Fix compact $(X,g)$ and smooth almost complex families $J_n(z,x)$ on $B_1\times X$, converging smoothly locally to $J_\infty$ and having uniform coefficient bounds on smaller closed disks. Let smooth solutions $u_n:B_1\to X$ have uniformly bounded energy and converge smoothly locally on $B_1\setminus\{0\}$ to a solution $u$ smooth at $0$. Suppose the limits of $E_g(u_n;B_r)$ exist for small $r>0$ and their limit as $r\downarrow0$ is $m>0$.

There is a uniform constant $h>0$ depending only on these geometric bounds such that $m\ge h$ and, after a subsequence, there are centers $z_n\to0$, scales $\rho_n\to0$, an autonomous $J_\infty(0,\cdot)$-holomorphic sphere $v$, a finite set $Z\subset\mathbb C$, and positive masses $m_z$ for $z\in Z$, satisfying:

- $v_n(w)=u_n(z_n+\rho_n w)$ converges smoothly locally on $\mathbb C\setminus Z$ to $v$;
- $\lim_{R\to\infty}\lim_n E_g(v_n;B_R)=m=E_g(v)+\sum_{z\in Z}m_z$, and $v(\infty)=u(0)$;
- each $m_z$ is the energy atom of $v_n$ at $z$, and $h\le m_z\le m-h$;
- if $v$ is constant, then $|Z|\ge2$.

The constant $h$ can be chosen uniformly for subsequent rescalings of these data. A constant sphere therefore has at least three attachment points when infinity is included. This is a single actual rescaling step, not an assumed compactification theorem.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The compact geometric bounds, actual equation, smooth convergence off zero, filled limit, and positive energy atom in the statement.

[F1] The local proof of [[lem-smooth-strip-compactness-away-from-energy-concentration]] extracts smooth limits off finitely many concentration points by countable energy limits, target-global epsilon estimates, actual chart bootstrap and countable diagonals. Its proof is local in source disks and thus applies on an exhaustion by such disks as detailed below.

[F2] [[lem-rescaled-strip-energy-concentration-produces-a-finite-energy-bubble]] gives the local distance-weighted maximum and normalized rescaling construction. [[lem-finite-energy-almost-complex-puncture-removability]] fills its finite-energy plane bubbles to spheres and fills finite-energy punctures of the limiting maps.

[F3] [[lem-small-local-energy-cylinder-neck-collapse]] proves actual energy and image-diameter collapse on buffered cylindrical annuli whose local energies and explicit source variation are sufficiently small.

## Proof

1.1 We fix a positive quantum once. The normalized bubble in [F2] has derivative norm one at a point and finite energy. The actual interior epsilon estimate at a fixed-radius disk about that point bounds its energy below by a positive constant $h_0$, independent of rescaling. Also every nonconstant autonomous sphere for a limiting target structure has energy at least $h_0$ after possibly decreasing $h_0$: choose a finite planar point with nonzero derivative, translate and dilate its source to make that norm one, and apply the same epsilon estimate. That estimate needs no global derivative bound for this lower bound; if its small-energy threshold fails it already supplies a positive lower bound. The structures $J_\infty(0,x)$ and their descendants retain the same uniform target bounds, so this quantum is uniform. Choose $h\le h_0$ also smaller than one eighth of the local-energy threshold in [F3]. [F2, F3, given, construct, algebra]

2.1 Let $M_n=\max_{\overline{B_{1/2}}}|du_n|_g$ and choose a maximizing point $z_n$. After a subsequence $M_n\to\infty$ and $z_n\to0$. Otherwise a subsequence bounded on $B_{1/2}$, together with [F1], would converge smoothly also at zero, forcing its atom mass to vanish; smooth convergence away from zero forces any unbounded maximizing sequence toward zero. The local rescaling construction in [F2] produces a normalized plane bubble at zero: choose radii $r_n\to0$ with $r_nM_n\to\infty$ and $|z_n|/r_n\to0$, maximize $(r_n-|z|)|du_n(z)|$, and rescale by the gradient at that maximum. On expanding disks the rescaled derivative is at most two and equals one at the center; [F1] gives a smooth nonconstant plane limit. Its energy is at most $m$, because every fixed rescaled disk lies in an original disk shrinking to zero and energies of any fixed original disk tend to $m+E_g(u;B_r)$ as proved next. By step 1.1 its energy is at least $h$, proving $m\ge h$. [F1, F2, step 1.1, construct, algebra]

3.1 Write $M(r)=\lim_nE_g(u_n;B_r)$. Smooth convergence on compact annuli gives $M(r)-M(r')=E_g(u;B_r\setminus B_{r'})$ for $0<r'<r$ in the stated range. Letting $r'\downarrow0$ yields $$M(r)=m+E_g(u;B_r).$$ In particular it is continuous in $r$. For any centers $z_n\to0$, the inclusions $B_{r-\epsilon}\subset B_r(z_n)\subset B_{r+\epsilon}$ for large $n$ and then $\epsilon\downarrow0$ give $$\lim_n E_g(u_n;B_r(z_n))=m+E_g(u;B_r).$$ The same sandwich proves convergence on moving annuli of fixed positive radii to their $u$ energies. These identities also justify the upper energy bound in step 2.1 by containment in arbitrarily small fixed disks. [given, construct, algebra]

4.1 Put $\mu=m-h/2>0$. For each large $n$ let $\rho_n$ be the smallest radius with $E_g(u_n;B_{\rho_n}(z_n))=\mu$, restricting to a small fixed disk contained in $B_1$. Such a radius exists: radius-zero energy is zero, energy varies continuously with radius, and step 3.1 makes the energy at any sufficiently small fixed radius eventually greater than $\mu$. The first solution is attained by continuity on a compact interval, so no strict monotonicity or uniqueness of all solutions is needed. The same fixed-radius argument gives $\rho_n\to0$. Define $v_n(w)=u_n(z_n+\rho_n w)$. Its domains contain each fixed planar disk eventually and its coefficient converges smoothly there to $J_\infty(0,x)$. Its energy on the unit disk is exactly $\mu$. [step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 Apply the local extraction argument of [F1] to $v_n$ on an exhaustion of $\mathbb C$. Explicitly, diagonally extract limits of energies on a countable basis of disks and of total energies on exhaustion disks. Points at which every such neighborhood has limiting energy at least the epsilon threshold form a finite set: disjoint neighborhoods about any finite selection have total energy bounded by the original global bound, so their number is uniformly bounded. Away from that finite set the actual epsilon estimates give uniform first derivatives on smaller patches; compact target finite nets and a countable dense source set give local uniform convergence, and the actual local bootstrap then gives all derivative bounds and a countable smooth diagonal limit. Remove any exceptional point where a further subsequence has bounded gradients on one neighborhood, repeating at most finitely many times. Thus the remaining finite set $Z$ consists only of genuine gradient blowup points, and $v_n\to v$ smoothly on compact subsets of $\mathbb C\setminus Z$. Further countable extraction gives energy limits on small rational-radius disks about each $z\in Z$. [F1, step 4.1, construct, algebra]

6.1 Each $z\in Z$ has an atom $m_z\ge h$. To see this, repeat the local distance-weighted rescaling construction of step 2.1 in a small disk about that point. Its smooth normalized plane bubble has energy at least $h$ by step 1.1 and at most the atom mass by the disk containment argument of step 3.1. The limit $v$ has finite energy on $\mathbb C\setminus Z$ by exhaustion and the global bound. By [F2] it extends smoothly across the finitely many points of $Z$ and across infinity, hence is an autonomous holomorphic sphere. Annular smooth convergence and this extension show that energy limits on all small disks about each $z$ exist, not just rational ones, by the continuity/sandwich argument of step 3.1. This defines each $m_z$ independently of the chosen small radii. [F2, step 1.1, step 2.1, step 3.1, step 5.1, construct, algebra]

7.1 We now prove that no energy escaped at infinity in this rescaling. Fix a small original radius $d>0$. By steps 3.1 and 4.1, the annulus $$A_n=\{\rho_n<|z-z_n|<d\}$$ has limiting energy $h/2+E_g(u;B_d)$. Choose $d$ small enough that this is below half the neck threshold of [F3]; it remains below that threshold for all large $n$. Write $z=z_n+e^{\sigma+i\tau}$ on $A_n$. This is a holomorphic cylinder coordinate with period $2\pi$, and conformal invariance preserves energy. Its explicit source derivatives of $J_n(z_n+e^{\sigma+i\tau},x)$ are bounded by $Cd$, uniformly in $n$, so are below the [F3] variation threshold after reducing $d$. Uniform coefficient bounds of the needed orders persist. Every fixed-radius cylindrical patch has energy bounded by the total annulus energy. Apply [F3] after removing a unit buffer at each end. For $R\ge e^2$ and all large $n$ it gives $$\begin{aligned}E_g(u_n;B_{d/R}(z_n)\setminus B_{R\rho_n}(z_n))&\le C R^{-c},\\ \operatorname{diam}_g u_n(\overline{B_{d/R}(z_n)\setminus B_{R\rho_n}(z_n)})&\le C R^{-c/2},\end{aligned}$$ with constants independent of $d,R,n$ in this range. [F3, step 3.1, step 4.1, construct, algebra]

8.1 By the moving fixed-annulus convergence of step 3.1, the energy of $B_d(z_n)\setminus B_{d/R}(z_n)$ tends to $E_g(u;B_d\setminus B_{d/R})$. Hence step 7.1 gives, for every large $R$, $$m-CR^{-c}\le\liminf_n E_g(v_n;B_R)\le\limsup_n E_g(v_n;B_R)\le m+E_g(u;B_d).$$ The upper bound follows just by inclusion in $B_d(z_n)$. Letting $d\downarrow0$ proves the upper bound $m$; the lower bound is independent of $d$. A further countable radius diagonal, extended to other radii by the smooth annular convergence away $Z$, provides the indicated inner limits. Then $R\to\infty$ proves $$\lim_{R\to\infty}\lim_nE_g(v_n;B_R)=m.$$ This is the actual energy capture statement. [step 3.1, step 5.1, step 7.1, algebra]

9.1 Choose $R$ larger than all $|z|$ for $z\in Z$ and avoiding any exceptional circle if needed. Partition $B_R$ into disjoint small disks about these points and their complement. Smooth convergence gives the complement energy, while the disk energies equal their atom masses plus the energy of the filled smooth limit, by the same annulus argument as step 3.1. Shrinking their radii and then letting $R\to\infty$ in step 8.1 yields $$E_g(v)+\sum_{z\in Z}m_z=m.$$ All sums are finite, so no exchange of an uncontrolled infinite sum with a limit occurs. [step 3.1, step 6.1, step 8.1, algebra]

10.1 The diameter estimate in step 7.1 proves the node connection. For fixed large $R$ outside $Z$, compare the two radial points $z_n+d/R$ and $z_n+R\rho_n$ in that closed annulus. Passage to $n\to\infty$ gives $$d_g(u(d/R),v(R))\le CR^{-c/2}.$$ First let $d\downarrow0$ using the filled original limit and then let $R\to\infty$ using the filled limit $v(\infty)$ from step 6.1. The inequality gives $u(0)=v(\infty)$. This proves actual connection of the two components, not merely equality of total energies. [step 6.1, step 7.1, algebra]

11.1 If $v$ is nonconstant, step 1.1 and step 9.1 give $E_g(v)\ge h$ and hence $m_z\le m-h$ for every child. Suppose $v$ is constant. Then $Z$ is nonempty by step 9.1. At any $z\in Z$ there are nearby points with $|dv_n|\to\infty$. The original center $z_n$ maximizes $|du_n|$ on $B_{1/2}$, and all fixed rescaled compact sets eventually lie there. Thus $|dv_n(0)|$ is at least these diverging values, so $0\in Z$. But $E_g(v_n;B_1)=\mu=m-h/2$ implies $m_0\le\mu<m$. If $Z$ had only this one point, step 9.1 would give $m_0=m$, a contradiction. Therefore $|Z|\ge2$; since each child mass is at least $h$, every child is at most $m-h$ in this case as well. This proves the stability and energy-drop assertions. [step 1.1, step 2.1, step 4.1, step 5.1, step 6.1, step 9.1, algebra]

12.1 All lower bounds, epsilon thresholds and neck constants used above depend only on compact target and uniform coefficient bounds. Subsequent rescalings have autonomous limits among the same pointwise structures and their explicit source derivatives decrease, so the same smaller $h$ remains valid. The construction involved finitely many choices of centers at each stage and countable extractions only; it therefore stays within Countable Choice. This completes the single soft-rescaling step with every claimed mass, limit and node property. [step 1.1, step 4.1, step 5.1, step 11.1, construct] ∎
