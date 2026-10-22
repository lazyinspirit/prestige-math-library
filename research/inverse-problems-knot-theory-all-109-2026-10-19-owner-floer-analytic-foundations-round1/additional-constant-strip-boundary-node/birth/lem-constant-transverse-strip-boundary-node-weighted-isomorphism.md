---
id: lem-constant-transverse-strip-boundary-node-weighted-isomorphism
kind: lemma
title: "The constant transverse strip has an actual weighted boundary-node inverse"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-transverse-linear-strip-cauchy-riemann-isomorphism, lem-real-boundary-strip-cauchy-riemann-inverse-with-free-end-constants, lem-strip-fredholm-index-agrees-in-higher-sobolev-spaces, lem-countable-choice-weighted-strip-sobolev-algebra-and-composition, thm-weyl-lemma-for-the-laplacian]
dependency_level: 7
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Ozsvath and Zoltan Szabo, Holomorphic disks and topological invariants for closed three-manifolds"
      url: "https://arxiv.org/abs/math/0101206"
      locator: "Boundary-degeneration gluing in Sections 3.7 and 10; the actual constant-strip nodal operator is proved below as a prerequisite only"
---

## Statement

Assume Countable Choice. On $S=\mathbb R\times[0,1]$ take $D_0=\partial_s+i\partial_t$ with target $\mathbb C^m$, $m\ge1$, lower boundary $\mathbb R^m$ and upper boundary $i\mathbb R^m$. Its two infinite ends have fixed zero limits. Remove the boundary point $p=(0,0)$, write $z=s+it$ near it, and choose its holomorphic cylindrical coordinate
$$z=-e^{-\pi\zeta},\qquad\zeta=\sigma+i\tau,\quad\sigma>\sigma_0,\quad0\le\tau\le1.$$
Both edges of this new end have real boundary values. Fix $0<\delta<\pi$ and an integer $q\ge0$.

Define $\mathcal X_{q,\delta}^{\mathrm{node}}$ as the actual weak section space with the stated zeroth real boundary traces, ordinary $H^{q+1}$ norm outside a smaller node half-disk (including both unweighted infinite strip ends), and on the node end an expansion
$$\xi=c+v,\qquad c\in\mathbb R^m,\qquad e^{\delta\sigma}v\in H^{q+1}.$$
Use the sum of those norms and $|c|$ with fixed overlap cutoffs; do not impose additional higher normal traces or a higher-norm smooth-closure condition. Define $\mathcal Y_{q,\delta}^{\mathrm{node}}$ by ordinary $H^q$ off that half-disk and the rescaled forcing condition
$$f_{\mathrm{cyl}}(\zeta)=\overline{z'(\zeta)}f(z(\zeta)),\qquad e^{\delta\sigma}f_{\mathrm{cyl}}\in H^q.$$
These are Hilbert spaces with equivalent choices of fixed overlap cutoffs. The actual operator
$$D_0:\mathcal X_{q,\delta}^{\mathrm{node}}\longrightarrow\mathcal Y_{q,\delta}^{\mathrm{node}}$$
is a bounded real isomorphism, with a bounded inverse $Q_{q,\delta}$. Its free-node Fredholm index is zero, and its kernel is zero. The asymptotic constant $c$ is a bounded linear evaluation on its full domain; for $q\ge1$ it is the genuine continuous value at the filled boundary point. For $q=0$ it means the specified weighted asymptotic constant, not an asserted pointwise trace on arbitrary $H^1$ sections.

For the fixed-node subspace $c=0$, the same operator has zero kernel and closed range of real codimension $m$, with index $-m$. More precisely
$$\Lambda_{q,\delta}(f)=\operatorname{ev}_p Q_{q,\delta}f$$
is bounded and onto $\mathbb R^m$, and its kernel is exactly that range. Restricting $Q_{q,\delta}$ to this kernel gives its bounded range inverse. Thus imposing a node value is a genuine finite-dimensional constraint on this constant-strip problem, rather than an assumption of node-evaluation surjectivity on its zero kernel. No boundary-disk regularity, nonlinear attachment gluing or degeneration count is asserted.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The actual constant product-strip operator, node chart, positive subgap weight and the weak Sobolev spaces in the statement.

[F1] [[lem-transverse-linear-strip-cauchy-riemann-isomorphism]] gives the actual whole-strip $H^1\to L^2$ inverse for the outer transverse planes. [[lem-strip-fredholm-index-agrees-in-higher-sobolev-spaces]] supplies its actual higher inverses with only zeroth boundary traces.

[F2] [[lem-real-boundary-strip-cauchy-riemann-inverse-with-free-end-constants]] gives an actual inverse for a whole both-real strip with independent real constants at its two ends and exponential remainders, at weights below $\pi$. The forcing is unrestricted in higher $H^q$; no extra forcing-edge trace is imposed.

[F3] [[lem-countable-choice-weighted-strip-sobolev-algebra-and-composition]] gives actual finite-jet extensions, weak boundary traces, multiplication and local $H^2$ supremum estimates. [[thm-weyl-lemma-for-the-laplacian]] makes a distributionally harmonic $L^1_{\mathrm{loc}}$ function smooth. A weak $D_0$ solution is harmonic by applying $\partial_s-i\partial_t$, so this applies to it.

## Proof

1.1 The norm definitions give real Hilbert spaces: on the node end use the closed derivative graph for the weighted remainder together with the finite coordinate $c$, and on the remaining strip use its ordinary derivative graphs; agreement of weak sections on the fixed overlap is closed by their local $L^2$ norms. The trace constraints are closed by [F3]. The constant is unique because a nonzero real constant is not in $H^0_\delta$ on a positive half-cylinder. Changing fixed overlaps changes only bounded smooth multipliers on compact annuli, so yields equivalent norms. The source product rule and conformal change give exactly $D_{0,\zeta}\xi=\overline{z'}D_{0,z}\xi$, not an unrescaled forcing. It is bounded in the indicated norms, including the constant part whose node-end derivative is zero. Moreover every domain section extends as a global unpunctured $H^1$ section. On the node patch conformal invariance gives $\|d\xi\|_{L^2(dA_z)}=\|dv\|_{L^2(dA_\zeta)}$ up to the fixed normalization, and $dA_z=|z'|^2dA_\zeta$ bounds its function norm by $|c|+\|v\|_{H^1_\delta}$. For weak extension across the one removed point use cutoffs zero for $|z|<\epsilon$, one for $|z|>\sqrt\epsilon$, with gradient norm $O(|\log\epsilon|^{-1/2})$. Integration by parts against a fixed test has error bounded by the local $L^2$ norm of $\xi$ times this gradient norm, tending to zero. Thus the derivatives extend weakly with no point measure. Its boundary condition holds almost everywhere on both full edges. Reflect the real and imaginary components in the usual $H^1$ boundary-compatible manner, convolve, and cut off longitudinally as in [F3], to place it in the exact completed domain in [F1]. Similarly every target lies globally in $L^2$: on the node end $$\int|f(z)|^2dA_z=\int|f_{\mathrm{cyl}}(\zeta)|^2dA_\zeta.$$ These inclusions have bounded norms. [F1, F3, given, construct, algebra]

2.1 For a target $f$ solve the actual unpunctured equation by [F1], giving the unique global $H^1$ section $\xi=Qf$ and $\|\xi\|_{H^1}\le C\|f\|_{\mathcal Y_{q,\delta}^{\mathrm{node}}}$. We prove its node expansion directly. Extend the half-cylinder forcing $f_{\mathrm{cyl}}$ to a full both-real strip as a higher-Sobolev forcing, with support bounded on the negative side. For $q=0$ zero extension after a finite cutoff is enough; for higher $q$ use the finite reflected linear combination matching derivatives through order $q-1$ at the finite cut, then a negative-side cutoff, as in [F3]. These operations are in the longitudinal variable and place no condition on forcing at the real horizontal edges. The whole forcing has bounded two-sided weighted $H^q$ norm. Apply [F2]. Its particular solution has a real positive-end constant $c_+$ and weighted $H^{q+1}$ remainder. Subtract the global real constant $c_+$, obtaining on the positive end a particular solution $h$ with zero node constant and $\|h\|_{H^{q+1}_\delta}\le C\|f_{\mathrm{cyl}}\|_{H^q_\delta}$, with a slightly larger fixed end patch understood. Under the node coordinate this particular solution is locally $H^1$ up to the puncture by the same conformal estimate as step 1.1. [F1, F2, F3, step 1.1, construct, algebra]

3.1 The difference $w=\xi-h$ is a weak homogeneous solution on the punctured half-disk, is locally $H^1$ there including the puncture by step 1.1, and has real trace on its straight boundary. Reflect by $w(\overline z)=\overline{w(z)}$. The real trace makes this a weak $H^1$ extension and cancels the seam terms in the distributional Cauchy–Riemann equation; this follows first by integration by parts away from the puncture and then by its logarithmic cutoffs. Thus it solves $D_0w=0$ on the full disk, and [F3] makes it smooth and holomorphic. Its Taylor coefficients are real, with expansion $w=c+\sum_{r\ge1}a_rz^r$. The constant satisfies $|c|\le C\|w\|_{H^1}$ on a fixed disk. All positive Taylor modes become $a_r(-1)^re^{-r\pi\zeta}$. For a smaller fixed disk their derivatives of every fixed order have weighted cylinder-square sums bounded by a fixed multiple of the original disk $H^1$ norm: integrate each mode on one fixed annulus using angular Parseval, and on the smaller disk the extra factor $e^{-r\pi(\sigma-\sigma_1)}$ dominates every fixed power of $r$. The remaining positive-end integral converges because $\delta<\pi$. Consequently $w-c\in H^{q+1}_\delta$, with controlled norm, and $c\in\mathbb R^m$. Combined with step 2.1 this proves the actual expansion $\xi=c+v$ and the bound for $|c|$ and its weighted remainder. There was no assumption of a pre-existing point evaluation for the initial weak solution. [F2, F3, step 1.1, step 2.1, construct, algebra]

4.1 The remaining ordinary higher norm is also bounded. On a fixed annulus around the node, steps 2.1–3.1 already give the required $H^{q+1}$ estimates. Choose a real smooth cutoff $\chi$ zero near the node and one off that annulus. Then $D_0(\chi\xi)=\chi f+(\chi_s+i\chi_t)\xi$ lies in the ordinary global $H^q$ target with the required bound, and $\chi\xi$ lies in the unpunctured completed $H^1$ domain. The actual higher inverse in [F1] makes $\chi\xi$ globally $H^{q+1}$ with the same type of bound. Together with step 3.1 this proves a bounded inverse $Q_{q,\delta}$ on the stated spaces. Its kernel is zero because every domain section lies in the unpunctured $H^1$ domain, where [F1] is injective. All this applies for $q=0$ as well, and imposes no higher normal traces. For $q\ge1$, the weighted remainder has $H^2$ norm on each unit cylinder patch controlled by its global weighted norm. The uniform local supremum estimate in [F3] therefore gives $|v(\sigma,\tau)|\le Ce^{-\delta\sigma}\|v\|_{H^2_\delta}$ on smaller such patches, including the edges. It tends uniformly to zero, so the filled value is genuinely $c$. For $q=0$ we retain only the bounded asymptotic-coordinate evaluation. [F1, F3, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 Finally the bounded evaluation on the full domain is onto: for $c\in\mathbb R^m$ choose $L(c)=\chi_p c$, with a real cutoff supported in the node half-disk and equal to one near $p$. It has lower real boundary, vanishes near the upper edge and both infinite ends, and has node expansion $c$ plus a compactly supported cylindrical remainder. This is a bounded linear right inverse of evaluation. Thus its kernel is a closed codimension-$m$ domain subspace. Since the full $D_0$ is an isomorphism, its restriction has zero kernel and closed codimension-$m$ range. The stated functional $\Lambda=\operatorname{ev}_pQ_{q,\delta}$ has exactly that range as kernel, and is onto because $\Lambda(D_0L(c))=c$. The restricted inverse is the full inverse on this kernel. Its index is consequently $-m$, while the unrestricted node problem has index zero. These are actual operator conclusions; in particular the zero kernel of the constant-strip problem does not itself provide free node-evaluation directions. The proof uses the specified CC inverses, finite extensions and convergent Taylor series only. [step 1.1, step 4.1, construct, algebra] ∎
