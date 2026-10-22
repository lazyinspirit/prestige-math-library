---
id: lem-boundary-disk-attachment-matching-gives-the-actual-scale-and-translation-kernel
kind: lemma
title: "Boundary disk attachment matching gives the actual scale and translation kernel"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-regular-boundary-disk-caps-have-an-actual-nonlinear-response-graph, lem-real-boundary-node-caps-have-bounded-incoming-outgoing-response-maps, lem-regular-boundary-disk-attaches-to-a-constant-strip-by-actual-newton-gluing, lem-node-fixed-boundary-disk-sobolev-moduli-affine-slices-and-cover-index, lem-countable-choice-quantitative-newton-correction-and-smooth-zero-chart]
dependency_level: 13
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume Countable Choice. Use the actual regular boundary-disk attachment data, phases and family $g_\epsilon$ of the Newton gluing theorem, with $T=\pi^{-1}\log(r^2/\epsilon)$. Choose the fixed cap cut sufficiently far in its exact chart. For all sufficiently large $T$, the nonlinear disk-cap response and the linear constant-strip-cap response match through the homogeneous neck in exactly one sufficiently small phase-fixed solution. It is precisely the Newton strip $g_\epsilon$.

The matched fixed disk-cap map differs from $v$ by $O(e^{-\pi T})$ in $H^3$; its derivatives with respect to $T$, of any fixed positive order in the fixed disk-core coordinates, are also $O(e^{-\pi T})$. The analogous assertions hold for the outer constant-strip cap. In particular, at every sufficiently small positive $\epsilon$ the actual fixed-end kernel is precisely
$$\operatorname{span}_{\mathbb R}\{\partial_s g_\epsilon,\ \partial_T g_\epsilon\}.$$
The two parameters given by longitudinal translation and $T$ smoothly parametrize the full local solution space at each such strip; after translation quotient, $T$ is a local coordinate.

Moreover any actual strip having these fixed cap neighborhoods, whose joining neck image lies in the exact chart and whose disk section has the prescribed zero phases, equals this matched strip for that fixed center and scale. This is actual uniqueness in those geometric neighborhoods. It does not yet prove that all strips converging to the nodal disk can be put into them with unique center and scale, or assert a globally injective nodal collar.

## Statement references

[[lem-regular-boundary-disk-caps-have-an-actual-nonlinear-response-graph]]

[[lem-regular-boundary-disk-attaches-to-a-constant-strip-by-actual-newton-gluing]]

## Facts & Assumptions

**Given:** The actual disk $v$, exact generator chart, source plumbing, fixed cap neighborhoods and phases, and the strip path constant on its lower time collar. All incoming and outgoing norms below are the real Fourier $G^{5/2}$ norms.

[F1] [[lem-regular-boundary-disk-caps-have-an-actual-nonlinear-response-graph]] gives the actual smooth disk-cap difference response $\mathcal R(g,c)$ with $\mathcal R(0,0)=0$, bounded derivatives on a small ball, and genuine capture of every actual nearby zero-phase cap. Its derivative at zero is the actual linear response.

[F2] [[lem-real-boundary-node-caps-have-bounded-incoming-outgoing-response-maps]] gives the linear constant-strip response $A_cg,E_cg$ and its unique actual cap section. Its proof and the actual higher node inverse give the same bounded responses on $G^{5/2}$: its inward-extension forcing is smooth on a fixed band and the outgoing expansion has an extra homogeneous collar before its trace.

[F3] [[lem-regular-boundary-disk-attaches-to-a-constant-strip-by-actual-newton-gluing]] gives the actual phase-fixed Newton family, its small correction uniqueness, regularity and full kernel dimension two. [[lem-node-fixed-boundary-disk-sobolev-moduli-affine-slices-and-cover-index]] and [[lem-countable-choice-quantitative-newton-correction-and-smooth-zero-chart]] give actual smooth finite-dimensional zero charts and ordinary finite-dimensional inverse charts.

## Proof

1.1 Write $h_v\in G_+^{5/2}$ for the positive trace of the background disk $q(v)$ at its cut; its constant is zero. It can be made small by choosing that cut far in its actual Taylor tail. Let $U_T:G_+^{5/2}\to G_-^{5/2}$ send $h_n$ to $(-1)^ne^{-\pi nT}h_n$ in mode $-n$. Its norm is at most $e^{-\pi T}$. The homogeneous neck has constant mean, and its positive-to-negative transfers are exactly $U_T$, by the scalar coefficient equation. For incoming constant-cap data $g$, its positive trace is $A_cg$ and its mean is $c=E_cg$. The incoming disk data must therefore be $g_d=U_TA_cg$, its constant must be $c$, and its outgoing actual trace is $h_v+\mathcal R(g_d,c)$. The entire matching problem reduces to the actual equation $$g=\Psi_T(g):=U_T\bigl[h_v+\mathcal R(U_TA_cg,E_cg)\bigr].$$ This retains the same mean on both sides, rather than imposing independent node values. [F1, F2, given, construct, algebra]

2.1 On a fixed sufficiently small $G_-^{5/2}$ ball the bounded derivative of $\mathcal R$ gives $\operatorname{Lip}(\Psi_T)\le Ce^{-\pi T}$, and $\|\Psi_T(0)\|\le e^{-\pi T}\|h_v\|$. For large $T$ it maps that ball into itself with Lipschitz constant at most $1/2$. The explicit Picard iterates starting at zero consequently converge, with their geometric difference bound, to its unique fixed point $g_T$. They give $\|g_T\|\le2e^{-\pi T}\|h_v\|$. Thus $g_d=O(e^{-2\pi T})$, $c=O(e^{-\pi T})$, and the actual cap solutions in [F1]–[F2] differ from their backgrounds by $O(e^{-\pi T})$ in their fixed $H^3$ norms. Their traces match all neck modes by step1.1. The homogeneous Fourier cylinder with these traces is an actual map in the exact chart: its sup norm is bounded by its small half-order-above-one trace norms and its constant. For large $T$ all images stay in that chart. Equal traces give a global weak solution; the exact equation near each seam and actual boundary regularity make it smooth there. On the disk core the original $J_t$ equals $J_0$ because the core height tends to zero, as in [F3]. Elsewhere the cap and neck images are in the chart where every $J_t=i$. Thus this constructs an actual strip, not just an equation for formal traces. [F1, F2, F3, step 1.1, construct, algebra]

3.1 It equals the Newton strip in [F3]. Compare it with that theorem's explicit pregluing, in its actual adapted $H^3$ chart. On the fixed caps the difference is $O(e^{-\pi T})$. The background disk outgoing modes continue along the neck with size $O(e^{-\pi\rho})$, where $\rho$ is the disk-end distance. Its part omitted by the pregluing cutoff has $H^3$ norm $O(e^{-\pi T/2})$, by integrating its geometric modes for $\rho\ge T/2-O(1)$. The additional positive and negative homogeneous modes have norm $O(e^{-\pi T})$; the common constant contributes $O(\sqrt T e^{-\pi T})$. Therefore the full difference has adapted norm at most $Ce^{-\pi T/2}$. Its disk-core phases are zero by [F1]. For large $T$ it lies in the radius $c_0/(1+T)$ ball in [F3], so its specified Newton uniqueness makes it exactly $g_\epsilon$. Any other actual nearby cap-and-neck strip with zero phases has the actual cap responses in [F1]–[F2]. Its Fourier modes obey step1.1, and it has the same fixed point by step2.1, proving the stated geometric-neighborhood uniqueness. [F1, F2, F3, step 1.1, step 2.1, construct, algebra]

3.2 These solutions and their fixed-core derivatives have the asserted parameter estimates. For every fixed $k\ge0$, $U_T$ is smooth in operator norm and $\|\partial_T^kU_T\|\le C_ke^{-\pi T}$ for $T\ge1$, since $\sup_{n\ge1}n^ke^{-\pi(n-1)T}$ is bounded. The fixed point equation has $I-d\Psi_T$ inverse given by a Neumann series of norm at most two. The actual smooth implicit theorem in [F3] makes $g_T$ smooth, and differentiating that equation gives $\partial_Tg_T=O(e^{-\pi T})$. Repeated differentiation and induction give the same bound at every fixed order: each term contains a derivative of $U_T$ or an already bounded derivative of the small arguments, and the fixed response derivatives stay bounded on a smaller ball. Smooth dependence of the cap solutions in [F1]–[F2] transfers these estimates to their fixed $H^3$ core maps. This is a statement in fixed component coordinates, not a claim that raw physical derivatives are uniformly bounded on the shrinking inserted core. [F1, F2, F3, step 1.1, step 2.1, construct, algebra]

4.1 Put $\epsilon_T=r^2e^{-\pi T}$. On the fixed disk core the actual material map $G_T(\zeta)=g_{\epsilon_T}(\epsilon_T\zeta)$ satisfies $G_T-v=O(e^{-\pi T})$ and $\partial_TG_T=O(e^{-\pi T})$ in $H^3$, by step3.2. The local $C^1$ estimates therefore imply $$\epsilon_T\partial_sg_{\epsilon_T}(\epsilon_T\zeta)\longrightarrow dv(\partial_{\operatorname{Re}\zeta}),$$ $$\partial_Tg_{\epsilon_T}(\epsilon_T\zeta)=\partial_TG_T(\zeta)+\pi\,dG_T(\zeta)\,\zeta\longrightarrow\pi\,dv(\zeta).$$ Choose an interior core point with $dv\ne0$; such a point exists for a nonconstant holomorphic disk, and the cut may include it. The real vectors $dv(\partial_{\operatorname{Re}\zeta})$ and $dv(\zeta)$ are independent there, since $\operatorname{Im}\zeta>0$ and $dv(i\partial_x)=J_0dv(\partial_x)$. Thus these two actual strip kernel vectors are independent for large $T$. They belong to the kernel because longitudinal translation preserves the equation and the constructed positive-parameter family is smooth; their end derivatives are in the actual fixed-end spaces by [F3]. The full kernel has dimension two by [F3], so they span it. [F1, F3, step 2.1, step 3.1, step 3.2, construct, algebra]

5.1 At each fixed sufficiently large $T$, the map $(b,t)\mapsto g_{\epsilon_t}(s-b,\tau)$ is smooth in the actual fixed-end $H^3$ topology, locally in its two finite-dimensional parameters. The positive-parameter smoothness comes from [F3] or step3.2; translations differentiate these smooth solution families using their higher regularity, not arbitrary rough maps. Its derivative maps the two parameter directions isomorphically onto the kernel by step4.1. The actual regular zero chart in [F3] has dimension two. The ordinary finite-dimensional inverse theorem therefore identifies this parameter map with the full local zero space at that strip. Quotienting its nonzero translation direction leaves $T$ as a local coordinate. This proves local parametrization and the earlier exact cap-neighborhood uniqueness. The additional global assertions excluded in the Statement still require actual nodal convergence to supply and uniquely normalize the fixed geometric cap neighborhoods. [F3, step 3.1, step 3.2, step 4.1, construct, algebra] ∎