---
id: lem-real-boundary-node-caps-have-bounded-incoming-outgoing-response-maps
kind: lemma
title: "Real-boundary node caps have bounded incoming--outgoing response maps"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-constant-transverse-strip-boundary-node-weighted-isomorphism, lem-generator-punctured-boundary-disk-weighted-fredholm-and-node-evaluation, lem-node-fixed-boundary-disk-sobolev-moduli-affine-slices-and-cover-index, lem-real-boundary-strip-cauchy-riemann-inverse-with-free-end-constants]
dependency_level: 10
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume Countable Choice. Consider either the actual constant transverse strip with one boundary node, or the actual generator-punctured nonconstant autonomous boundary disk. Use their exact node coordinate $\zeta=\sigma+i\tau$, $\sigma\ge0$, $0\le\tau\le1$, with actual operator $D_0=\partial_\sigma+i\partial_\tau$ and real boundary planes on both edges. In the disk case assume its actual compact node-fixed linearization is onto of real index two. Fix any $0<\delta<\pi$.

In the disk case choose two bounded compact-core real phases whose restriction to the affine kernel is invertible. Remove the end beyond a fixed sufficiently large $S$; the remaining source is the cap. In the strip case its two original ends still have fixed zero limits. Let
$$G_-=\{(g_n)_{n<0}:g_n\in\mathbb R^m,\ \sum_{n<0}(1+|n|)|g_n|^2<\infty\},$$
and define $G_+$ similarly for $n>0$. Use $\phi_n(\tau)=e^{-i\pi n\tau}$ and the actual weak $H^1$ trace at $\sigma=S$.

For the strip cap, every incoming negative trace $g\in G_-$ has exactly one homogeneous cap solution with that trace, the real physical boundary conditions and its original zero ends. Its trace is
$$g+A_cg+E_cg,\qquad A_c:G_-\to G_+,\quad E_c:G_-\to\mathbb R^m,$$
with bounded linear response maps. For the disk cap, every incoming $g\in G_-$ and every real constant mode $c$ have exactly one homogeneous cap solution with these traces and zero phases. Its trace is
$$g+A_dg+B_dc+c,$$
where $A_d:G_-\to G_+$ and $B_d:\mathbb R^m\to G_+$ are bounded. All solution maps into cap $H^1$ are bounded.

Moreover $A_c,E_c,A_d$ are norm limits of their finite incoming-mode truncations, with error at most $Ce^{-\pi N}$ after retaining the modes $-1,\ldots,-N$. Their construction uses actual node inverses; no general Calderon projector or arbitrary-choice compactness theorem is a premise. This does not yet sew two caps through a finite neck or prove nonlinear gluing.

## Statement references

[[lem-constant-transverse-strip-boundary-node-weighted-isomorphism]]

[[lem-generator-punctured-boundary-disk-weighted-fredholm-and-node-evaluation]]

## Facts & Assumptions

**Given:** The actual two component operators, exact node charts, weight, cut and, for the disk, the surjective node-fixed index-two condition. Only the original zeroth real physical boundary traces are imposed.

[F1] [[lem-constant-transverse-strip-boundary-node-weighted-isomorphism]] gives the actual bounded free-node inverse $Q_c$, with zero kernel and a bounded asymptotic real constant. Its spaces at level zero are actual weak $H^1$ core and weighted-end spaces.

[F2] [[lem-generator-punctured-boundary-disk-weighted-fredholm-and-node-evaluation]] and [[lem-node-fixed-boundary-disk-sobolev-moduli-affine-slices-and-cover-index]] give the actual weighted disk realizations, equivalence of node-fixed regularity, their bounded range inverses, and the two independent affine kernel sections. Full-kernel node evaluation is onto whenever the node-fixed operator is onto.

[F3] The actual real Fourier basis, Parseval and homogeneous real-boundary end expansion are proved in [[lem-real-boundary-strip-cauchy-riemann-inverse-with-free-end-constants]] and the node inverse proofs in [F1]–[F2]. Homogeneous end solutions with a free constant and subgap exponentially weighted remainder have only positive modes and their real constant.

## Proof

1.1 Fix the disk phases and its inverse explicitly. Its node-fixed weighted kernel has dimension two and is exactly its affine plane by [F2]. Choose a nonnegative compact-core cutoff for which the Gram matrix of those two sections is positive definite, and pair sections with the two cutoff kernel fields. Such a cutoff exists because independent smooth fields have a positive definite integrated Gram matrix on some finite union of interior disks; otherwise a nonzero constant real combination would vanish everywhere. These bounded $L^2$ phases are supported away from the node. The augmented map $(P_d,\ell)$ on the node-fixed domain is a bounded isomorphism: solve with the actual range inverse, then correct the two phases by the kernel. Write $Q_d^0f$ for its solution with zero phases. The full disk operator is onto and full-kernel evaluation is onto by [F2]. Choose a finite basis lift into that kernel and subtract its two affine phase corrections; this gives a bounded lift $L_d:\mathbb R^m\to\ker P_d$ with node constant $c$ and phases zero. Choose $S$ beyond all phase supports and sufficiently far into the exact node charts. These operators and the cut are now fixed. [F2, given, construct, algebra]

2.1 Record the actual trace norm. For a section in $H^1$ on a unit node band, its Fourier coefficients $a_n$ satisfy Parseval derivative identities as in [F3]. The one-dimensional endpoint estimate on a subinterval of length $1/|\pi n|$ gives $$|\pi n|\,|a_n(S)|^2\le C\int_{S-1}^S(|a_n'|^2+(\pi n)^2|a_n|^2)\,d\sigma\quad(n\ne0).$$ It follows by writing the endpoint as a value inside that interval plus the integral of its derivative, squaring, and averaging over the interval. The zero-mode trace is bounded by the same elementary estimate on the full unit band, with its function norm retained. Summing proves boundedness of the trace into $G_-\oplus\mathbb R^m\oplus G_+$. Conversely the decaying mode extension used next converges in $H^1$ precisely with these half-order weights. Thus no pointwise trace on arbitrary two-dimensional $H^1$ sections is assumed. Homogeneous weighted end solutions in [F3] have trace $c+\sum_{n>0}h_n\phi_n$ at the cut and no negative modes; this also follows by their scalar coefficient ODEs and weighted integrability. [F3, step 1.1, construct, algebra]

3.1 For an incoming $g\in G_-$ put, on $\sigma\le S$ in the exact collar, $$k_g(\sigma,\tau)=\chi(\sigma)\sum_{n<0}e^{-\pi n(\sigma-S)}g_n\phi_n(\tau),$$ where $\chi=0$ for $\sigma\le S-2$ and $\chi=1$ for $\sigma\ge S-1$, with smooth transitions. Extend it by zero into the rest of the cap. Since $n<0$, these modes decay into the cap, not toward its missing node. Integrating each mode and its derivatives shows $\|k_g\|_{H^1(\mathrm{cap})}\le C\|g\|_{G_-}$. Its actual forcing on the cap is $$F_g=\chi'(\sigma)\sum_{n<0}e^{-\pi n(\sigma-S)}g_n\phi_n,$$ supported in the fixed band $[S-2,S-1]$. Extend THIS forcing by zero on the omitted end and elsewhere on the full component. This is a legitimate weighted $L^2$ forcing, with norm at most $C\|g\|_{G_-}$. It is crucial that the growing incoming section itself is not extended toward the node. The forcing of an incoming tail with $n<-N$ has weighted norm at most $Ce^{-\pi N}\|g\|_{G_-}$, since its entire support has $S-\sigma\ge1$. All these assertions follow first for finite sums and then by their $H^1$ and $L^2$ convergence. [F3, step 1.1, step 2.1, construct, algebra]

4.1 On the strip cap define $u_g=k_g-Q_cF_g$, restricted to that cap. It is homogeneous there. The second term solves a homogeneous equation for $\sigma\ge S-1$, so by step2.1 its cut trace has only positive modes and a constant. Therefore the negative trace of $u_g$ is exactly $g$; define $A_cg$ and $E_cg$ as the negative of those other coefficients of $Q_cF_g$. The solution and these maps are bounded by [F1], step3.1 and the trace estimate. On the disk cap use instead $u_g=k_g-Q_d^0F_g$. Its phases vanish because $k_g$ misses their support and $Q_d^0$ has zero phases. Its homogeneous end correction has zero constant by the node-fixed choice of $Q_d^0$. This defines the bounded positive response $A_dg$. For an arbitrary requested constant $c$, add $L_dc$ from step1.1, restricted to the cap; its trace is $c+B_dc$ with bounded positive-mode response and no negative modes. This constructs every asserted homogeneous cap solution with its precise trace data. [F1, F2, F3, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 These solutions are unique. A strip-cap homogeneous solution with zero incoming trace has only positive modes and a constant at its cut. Extend it onto the omitted end by $c+\sum_{n>0}e^{-\pi n(\sigma-S)}h_n\phi_n$. The $G_+$ trace norm controls its weighted $H^1$ norm for $\delta<\pi$, by integrating the same geometric modes. Matching the weak traces gives a full weak $H^1$ section; integration by parts on the two sides cancels their interface terms and introduces no seam measure in the first-order equation. It belongs to the actual space in [F1] and is homogeneous globally, hence is zero. The disk argument is identical after subtracting $L_dc$ to set the constant to zero: its extension belongs to the actual node-fixed space, is homogeneous and has zero phases, so the inverse from step1.1 makes it zero. Thus incoming negative data and the stated mean and phase conventions determine the solutions, not merely one construction of them. [F1, F2, F3, step 1.1, step 2.1, step 4.1, construct, algebra]

6.1 Finally the positive and constant responses in step4.1 are bounded linear functions of $F_g$ through the specified inverses and fixed-band trace maps. The exponentially small tail estimate in step3.1 therefore gives operator norm error at most $Ce^{-\pi N}$ when the incoming data are truncated to $-1,\ldots,-N$. Each truncation has finite-dimensional domain, so these are actual norm limits of finite-rank responses. The disk constant response $B_d$ already has finite-dimensional domain. This proves the stated cap maps and their bounds using actual inverses and Fourier sums. Sewing the two positive-to-negative traces across a long neck, resolving its constant drift, and nonlinear correction still require their own arguments; none has been inferred from this cap response theorem alone. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, construct, algebra] ∎