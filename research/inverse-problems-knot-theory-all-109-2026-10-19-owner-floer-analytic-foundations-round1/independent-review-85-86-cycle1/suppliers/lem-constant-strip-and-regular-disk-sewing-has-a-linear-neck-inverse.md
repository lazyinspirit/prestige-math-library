---
id: lem-constant-strip-and-regular-disk-sewing-has-a-linear-neck-inverse
kind: lemma
title: "Constant strip and regular disk sewing has a controlled linear neck inverse"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [def-countable-choice, lem-real-boundary-node-caps-have-bounded-incoming-outgoing-response-maps, lem-finite-real-boundary-cauchy-riemann-neck-has-an-explicit-zero-mode-inverse, lem-generator-punctured-boundary-disk-weighted-fredholm-and-node-evaluation, lem-geometric-oriented-disk-cauchy-riemann-fredholm-and-higher-regularity, lem-strip-fredholm-index-agrees-in-higher-sobolev-spaces]
dependency_level: 11
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Statement

Assume Countable Choice. Take the actual constant-strip cap and regular node-fixed index-two disk cap, with phases and exact real-boundary collars, of the cap response theorem. Sew their cut circles by a real-boundary cylinder $[0,T]\times[0,1]$. At its right end use the disk coordinate with the reflected transverse parameter $\tau_d=1-t$ and reversed longitudinal parameter, so the coordinate change is holomorphic. Identify their vector bundles by their common exact node frame and use the actual Cauchy--Riemann symbol transformation on forcings. Let $P_T$ equal the actual component operators on the fixed caps and $D_0$ on this cylinder; these coincide on their exact collar overlaps.

Use weak $H^1$ sections with the actual zeroth physical real boundary traces, fixed zero limits at the original strip ends, and matched traces at the seams. Impose the two fixed compact disk-core phases to be zero. Use the sum of fixed-cap and ordinary-cylinder Sobolev square norms, with fixed collar overlaps; the constant mode on the finite cylinder is part of that ordinary function norm. For all sufficiently large $T$, the actual sewn operator is a bounded isomorphism
$$P_T:X_T^{\ell=0,H^1}\longrightarrow Y_T^{L^2},\qquad \|P_T^{-1}\|\le C(1+T).$$
Without the two phases it is onto with two-dimensional kernel and real Fredholm index two. For each fixed integer $q\ge0$, the same inverse maps the actual $H^q$ target to $H^{q+1}$ sections, with only the original zeroth physical traces and phases, and
$$\|P_T^{-1}f\|_{H^{q+1}}\le C_q(1+T)\|f\|_{H^q}.$$
The constants are independent of sufficiently large $T$. No extra normal trace or forcing-edge condition is imposed.

This is a sewn geometric linear operator, not yet nonlinear holomorphic-disk attachment. If the strip node is $z=0$ and the punctured disk coordinate is $w=-1/\zeta$, the source plumbing $zw=-\epsilon$ with fixed cut radius $r$ realizes this sewn surface as the actual original strip: the disk core has coordinate $z=\epsilon\zeta$ and the neck length is $T=\pi^{-1}\log(r^2/\epsilon)$. No uniformization theorem is used in this identification.

## Statement references

[[lem-real-boundary-node-caps-have-bounded-incoming-outgoing-response-maps]]

[[lem-finite-real-boundary-cauchy-riemann-neck-has-an-explicit-zero-mode-inverse]]

## Facts & Assumptions

**Given:** The actual cap operators, their fixed collars and disk phases, exact node frames, the cylinder length and the explicit weak glued domains. The operator is smooth across seams because both expressions are exactly $D_0$ there after the holomorphic symbol transformation.

[F1] [[lem-real-boundary-node-caps-have-bounded-incoming-outgoing-response-maps]] supplies actual bounded cap inverses and response maps $A_c,E_c,A_d,B_d$ on half-order real Fourier traces. Its construction supplies a particular strip-cap solution with positive trace $p_c$ and constant $e_c$, and a particular zero-phase disk-cap solution with positive trace $p_d$ and constant zero, when the forcing is supported on the cap and extended by zero beyond its cut.

[F2] [[lem-finite-real-boundary-cauchy-riemann-neck-has-an-explicit-zero-mode-inverse]] supplies the actual finite-cylinder mixed spectral inverse, uniform nonzero-mode estimates, its exact mean drift and its $O(1+T)$ full $H^1$ bound.

[F3] The actual weak higher estimates on fixed compact disk patches are proved in [[lem-geometric-oriented-disk-cauchy-riemann-fredholm-and-higher-regularity]] and [[lem-generator-punctured-boundary-disk-weighted-fredholm-and-node-evaluation]]. [[lem-strip-fredholm-index-agrees-in-higher-sobolev-spaces]] supplies the corresponding real-boundary local difference-quotient and equation recovery estimates, with no additional higher physical trace condition. In the exact cylindrical patches their constants are translation invariant.

## Proof

1.1 Split an arbitrary sewn $L^2$ forcing into its two fixed cap restrictions and its cylinder restriction $f_N$. Extend each cap restriction by zero beyond that cap and use the actual inverses in [F1]. Their cut traces are $p_c+e_c$ and $p_d$, respectively, with norms at most a fixed constant times those cap forcing norms. Zero extension of a forcing is legitimate at this level; no higher seam regularity is asserted for these separate particular solutions. Apply [F2] to $f_N$, with positive modes zero at the left end, negative modes zero at the right and initial mean zero. Denote its negative trace at the left by $l$, its positive trace at the right by $r_N$ and its final mean by $d$. The scalar energy identity in [F2] bounds these nonzero traces in their half-order norms uniformly: its nonnegative boundary term is $|\pi n|$ times the square of the one remaining mode end value. Also $$d=\int_0^T(f_N)_0,\qquad |d|\le\sqrt T\|f_N\|_2.$$ This constructs every forcing term needed for matching with precise bounds. [F1, F2, given, construct, algebra]

2.1 Let $J$ exchange positive and negative trace spaces by $\phi_n(1-t)=(-1)^n\phi_{-n}(t)$; it is a real isometry. Write $U_T:G_+\to G_-$ for propagation across the neck followed by this reflection, so $(U_Th)_{-n}=(-1)^ne^{-\pi nT}h_n$ for $n>0$ and $\|U_T\|\le e^{-\pi T}$. If $g_c,g_d$ are the incoming cap data and $c_d$ the disk constant, their other traces from [F1] are $$h_c=p_c+A_cg_c,\quad C=e_c+E_cg_c,\quad h_d=p_d+A_dg_d+B_dc_d.$$ The cylinder's positive homogeneous modes start at $h_c$, its negative homogeneous modes end at $Jh_d$, and its constant starts at $C$. Add the particular cylinder solution in step1.1. Equality of all seam traces is exactly $$g_c=l+U_Th_d,\qquad g_d=Jr_N+U_Th_c,\qquad c_d=C+d.$$ These are identities for actual Fourier traces, including the mean; none suppresses the real zero mode. [F1, F2, step 1.1, construct, algebra]

3.1 Substitute $c_d=e_c+E_cg_c+d$. The equations for $g=(g_c,g_d)$ become $g=b_T+N_Tg$, where $$b_T=(l+U_T(p_d+B_d(e_c+d)),\ Jr_N+U_Tp_c),$$ $$N_T=\begin{pmatrix}U_TB_dE_c&U_TA_d\\U_TA_c&0\end{pmatrix}.$$ All cap maps are fixed bounded operators by [F1], so $\|N_T\|\le Ce^{-\pi T}$. For sufficiently large $T$ it is at most $1/2$ and the explicit convergent series $g=\sum_{j\ge0}N_T^jb_T$ is the unique solution. Step1.1 and boundedness of $e^{-\pi T}\sqrt T$ give $\|g\|\le C\|f\|_2$, $|C|\le C\|f\|_2$ and $|c_d|\le C(1+\sqrt T)\|f\|_2$. Form the two actual cap solutions from [F1] with these data and the two particular cap solutions. On the cylinder use the explicit solution of step2.1. Its mean is $C$ plus the primitive in [F2], whose $H^1$ norm is at most $C(1+T)\|f\|_2$. Integrating the homogeneous nonzero modes bounds their $H^1$ norms by the half-order norms of $h_c$ and $h_d$, hence by $C(1+\sqrt T)\|f\|_2$. The cap solution bounds in [F1] give the same or smaller bound there. Altogether the claimed $C(1+T)$ estimate holds. [F1, F2, step 1.1, step 2.1, construct, algebra]

4.1 The matching traces put this piecewise section in the actual global weak $H^1$ space. This can be checked in collar coordinates by integration by parts on the two sides: equal traces cancel the seam boundary terms, leaving precisely the piecewise $L^2$ derivatives and no interface measure. The same argument for the first-order operator gives $P_Tu=f$ distributionally. Conversely any zero-phase solution has the cap responses in [F1] and a cylinder solution with exactly the Fourier propagation in step2.1, by uniqueness of each scalar ODE. It therefore solves the same uniquely determined system in step3.1 and is the constructed solution. This proves actual bijectivity and the inverse bound at level zero. Dropping the phases gives an onto operator. The two phase functionals on the full domain are onto $\mathbb R^2$: choose two fixed disk-core supported smooth sections whose phase Gram matrix is invertible and extend by zero. Given any requested phase pair, subtract the zero-phase inverse applied to the operator of such a lift; the resulting kernel section has exactly that phase pair. The phase-zero kernel is zero, so this identifies the full kernel with $\mathbb R^2$. Its index is two. [F1, F2, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 For an actual globally $H^q$ forcing, bootstrap the just-constructed global weak solution, not the separately zero-extended cap forcings. On fixed cap patches use [F3]. On neck windows use its translation-invariant weak real-boundary estimates; near the seams the actual operator is the same smooth $D_0$, so there is no corner or coefficient jump. A cover by unit windows and slightly larger windows has overlap bounded independently of $T$. Squaring and summing the local estimates, together with the finitely many fixed cap estimates and the original transverse end estimates, gives $$\|u\|_{H^{q+1}}\le C_q(\|f\|_{H^q}+\|u\|_{H^1}).$$ Bounded overlap controls the sums by the global norms; the number of windows introduces no extra factor. Combine with step3.1. This gives the claimed higher inverse with the same linear neck-length growth. The source space remains exactly the weak intersection with the zeroth physical traces and phases; no forcing condition on an artificial seam has been introduced. [F3, step 3.1, step 4.1, construct, algebra]

6.1 Finally verify the concrete source identification in the Statement. Cut the strip half-disk at $|z|=r$ and the punctured disk at $|w|=r$. The plumbing $zw=-\epsilon$ identifies their half-annuli by a holomorphic transition with the two physical real edges reversed. Since $w=-1/\zeta$ on the entire punctured disk source, its core is inserted into the original strip by $z=\epsilon\zeta$. The intervening half-annulus has radii $\epsilon/r$ and $r$, and its logarithmic conformal length is exactly $\pi^{-1}\log(r^2/\epsilon)$. These inserted core, annulus and original strip exterior cover the actual strip and agree on their written coordinate overlaps. Their bundle frames and forcing symbol transformations are the prescribed ones, so the sewn operator is a concrete geometric linear operator on that surface. This proves no nonlinear zero or gluing exhaustion theorem: those still require an actual preglued map, residual estimates and correction. [step 2.1, step 4.1, step 5.1, construct, algebra] ∎