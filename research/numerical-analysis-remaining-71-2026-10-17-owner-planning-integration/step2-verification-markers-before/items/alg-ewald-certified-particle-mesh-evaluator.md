---
id: alg-ewald-certified-particle-mesh-evaluator
kind: algorithm
title: "Certified three-dimensional particle-mesh Ewald evaluator"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 6
deps: [alg-na-computed-fast-transforms-and-convolution, def-countable-choice, def-ewald-pme-cardinal-assignment-model, def-ewald-three-dimensional-periodic-source-data, def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma, thm-ewald-pme-reciprocal-energy-force-error-bound, thm-ewald-total-pme-error-certificate, thm-na-arbitrary-length-fft-correctness-and-cost]
justified_by: [lem-ewald-certified-particle-mesh-evaluator-terminates]
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Multi-Level Ewald: A hybrid multigrid / Fast Fourier Transform approach to the electrostatic particle-mesh problem (2011)"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3202610/"
      locator: "§2.1, equations (1)–(7): direct/reciprocal split and particle-to-mesh, FFT convolution, and force interpolation pipeline."
    - title: "Markus Deserno and Christian Holm, How to mesh up Ewald sums (I): A theoretical and numerical comparison of various particle mesh routines (1998)"
      url: "https://arxiv.org/pdf/cond-mat/9807099"
      locator: "§§2–4 and Appendices B, E: assignment support, aliasing, differentiation alternatives, cutoff tradeoffs, and the RMS limits of numerical accuracy estimates."
---

## Definition

Assume Countable Choice. Inputs are a full-rank real cell matrix $A$, a finite
neutral configuration of pairwise-distinct torus positions $x_i$ and real
charges $q_i$, an Ewald parameter $\alpha>0$, cutoffs $R,K_c\ge1$, integers
$M_r\ge1$, an order $P\ge2$, a mesh-self-correction flag, an optional off-source
query point $x$, requested nonnegative tolerances for each requested output,
and integer controller indices $J_R\ge\lfloor R\rfloor$,
$J_K\ge\lfloor K_c\rfloor$, and $J_A\ge1$. The inputs must satisfy
$2\alpha^2J_R(J_R+1)\ge3$ and
$(2\alpha^2)^{-1}J_K(J_K+1)\ge3$ for the shell controllers. The arithmetic
interface is one fixed instance of
[[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]],
with representable set $\mathbb F$ and certified outward enclosures for every
finite arithmetic node, elementary-function evaluation, transform phase, and
final arithmetic radius. There is an optional positive integer enclosure-work
cap $B_{\mathrm{encl}}$, defaulting to $1$ when omitted. Each non-transform
validation, enclosure, or comparison request executes its supplied certificate
lookup/evaluation program for at most $B_{\mathrm{encl}}$ program
instructions, including control-flow steps. Its numerical primitives are exact
rational arithmetic/comparisons, fixed-format rounded operations, and reads of
finite supplied certificate data. Elementary functions
and refinement loops are implemented through these counted instructions, not
as uncapped oracle calls. On exhaustion, unavailable data, a nonfinite bound,
an uncertified required divisor or an unresolved comparison, return
`arithmetic-inconclusive`, except where an explicit cutoff, transform, or
window-denominator branch below names its more specific status. Do not retry
with larger budgets inside a run. A larger cap may be supplied for another
run; no accepted enclosure loses its required soundness. Supplied finite
certificate data and the cap are part of the arithmetic interface, so this
rule does not impose a precision or accuracy restriction on successful outputs. Every particle and optional query point also has a
certified representative interval in $[0,1)^3$ after reduction modulo the
cell. Transform calls use common controls: an exact rational phase tolerance
$\tau$ with $0<\tau\le1/4$, integer exponent limits $e_{\min}\le e_{\max}$,
integer precision $p_0\ge2$, finite integer cap $p_{\max}\ge p_0$, integer
elementary-series cap $J_{\mathrm{phase}}\ge1$, and integer radix-two depth
$d_{\max}\ge0$ required by
[[alg-na-computed-fast-transforms-and-convolution]]. Every vector passed to a
transform has real and imaginary coordinates in $\mathbb F$, and the outward
enclosures include phase and arithmetic errors from the entire transform call.
If $\sum_iq_i\ne0$ is certified, return `nonneutral`. Otherwise check
neutrality, distinctness, full rank, valid scalar/integer controls, and the
required input enclosures using the bounded interface above. A certified
violation of these input conditions returns `invalid-input`; unavailable or
unresolved evidence returns `arithmetic-inconclusive`. If a query point is
certified to be a source image, return `collision` for that potential query;
if its off-source status is unresolved, return `arithmetic-inconclusive`.
A controller inequality that is certified false is `invalid-input`; an
unresolved one is `arithmetic-inconclusive`.

1. Compute a certified outward upper bound $B_K$ for $\|A^T\|_2K_c/(2\pi)$ and set $N_K=\lceil B_K\rceil$. Enumerate every integer triple in the finite box $[-N_K,N_K]^3$. For each nonzero $k$, compute a certified interval $[d_k^-,d_k^+]$ for $|2\pi A^{-T}k|$ and an interval $[K_c^-,K_c^+]$ for $K_c$. Include $k$ in $\mathcal B_{K_c}$ if $d_k^+\le K_c^-$, exclude it if $d_k^->K_c^+$, and return `cutoff-inconclusive` if neither comparison is certified. Retain from $\mathcal B_{K_c}$ exactly the signed modes satisfying $|k_r|<M_r/2$ for every coordinate and store them in $\mathcal K$. This set is finite, symmetric and injective modulo the mesh. Every other mode in $\mathcal B_{K_c}$ is kept in the finite omitted-mode ledger $\mathcal M_{K_c}=\mathcal B_{K_c}\setminus\mathcal K$; it is never assigned zero error.

2. Initialize the full grid $g$ to zero. Use each particle's supplied certified representative interval $t_i\in[0,1)^3$. For each coordinate $r$, enclose $a=M_rt_{i,r}$ by $[a^-,a^+]$; if $a^+-a^->1$, return `arithmetic-inconclusive`. Enumerate every integer $L_r$ from $\lceil a^- -P\rceil$ through $\lfloor a^+\rfloor$. This finite list contains every translate with $0\le a-L_r\le P$ and has at most $P+2$ entries. For every triple $(L_1,L_2,L_3)$, evaluate $q_i\prod_rW_P(M_rt_{i,r}-L_r)$, reduce $L_r$ modulo $M_r$ to the grid residue $\ell_r$, add the term to $g_\ell$, and store the particle's finite support tuples for later gathers. This Cartesian list computes the periodic assignment exactly because each integer $L_r$ is uniquely $\ell_r+jM_r$. Accumulate all terms that wrap to the same residue; when $P>M_r$, do not drop duplicate contributions. The support is the causal predecessor support of the window, not an unspecified symmetric nearest-node rule.

3. For each coordinate fiber, call [[alg-na-computed-fast-transforms-and-convolution]] with the supplied common transform controls on its representable center vector. If an input cannot be represented, a call returns any `inconclusive` or `range-failure` status, or a normalization scale fails, return `transform-inconclusive` and retain that substatus. Apply the negative-sign unitary tensor DFT
$$\widehat g_M(k)=N_g^{-1/2}\sum_{\ell\in\mathcal G}g_\ell e^{-2\pi i\sum_rk_r\ell_r/M_r},\qquad N_g=M_1M_2M_3,$$
by dividing each returned unnormalised coordinate transform by $\sqrt{M_r}$, with outward enclosures for every scale operation. The required mathematical output convention is the unitary transform. The correctness-and-cost supplier proves the formal exact-constant transform identity; it is not used as a floating-point error bound.

4. For each retained $k$, form the window multiplier
$$D(k)=\prod_{r=1}^3e^{-\pi iPk_r/M_r}\operatorname{sinc}(\pi k_r/M_r)^P$$
and obtain an outward lower bound for $|D(k)|$. If any lower bound is nonpositive, return `denominator-inconclusive` without division. Otherwise set
$$z_k=\frac{\sqrt{N_g}\,\widehat g_M(k)}{\overline{D(k)}},\qquad c_k=\frac{4\pi e^{-|\kappa_k|^2/(4\alpha^2)}}{V|\kappa_k|^2}.$$
Use the conjugated denominator forced by the negative-sign DFT and the causal window. The signed mode representative is used in every window factor; residues are used only as storage indices.

5. For every tensor-transform call in this step, use [[alg-na-computed-fast-transforms-and-convolution]] with the same model and controls as in Step 3, divide each coordinate output by $\sqrt{M_r}$, and propagate a failed or unrepresentable subcall or failed normalization as `transform-inconclusive`. Form mode arrays on the full mesh-frequency grid, placing retained signed modes in their unique residues and setting all other entries to zero. Set $v^U_k=c_kz_k/D(k)$ on $\mathcal K$. Apply the per-coordinate unitary normalization to the negative-sign tensor DFT of $\overline{v^U}$, conjugate the output, and multiply by $\sqrt{N_g}$; the inverse-transform target array is $u_\ell=\sum_{k\in\mathcal K}v^U_ke^{2\pi i\sum_rk_r\ell_r/M_r}$. If a query point was supplied, use its supplied representative $t_x$ and the finite-support routine of Step 2 to compute the off-source mesh potential $\operatorname{Re}\sum_{\ell\in\mathcal G}w_\ell(t_x)u_\ell$. For forces set $v^F_k=c_k\overline{z_k}/\overline{D(k)}$ on $\mathcal K$, zero elsewhere, and apply the same per-coordinate normalization to its negative-sign tensor DFT, then multiply by $\sqrt{N_g}$ to form $\lambda_\ell=\sum_{k\in\mathcal K}v^F_ke^{-2\pi i\sum_rk_r\ell_r/M_r}$. Evaluate $\nabla_xw_\ell$ by differentiating the finite support products on the selected mesh box and applying $A^{-T}$; aggregate all tuple derivative contributions by residue, retaining duplicate wraps. Then $F_{M,i}=-q_i\operatorname{Re}\sum_{\ell\in\mathcal G}\lambda_\ell\nabla_xw_\ell(t_i)$, gathering only the at most $(P+2)^3$ candidate support contributions per particle. For $P=2$ at a knot, use the one-sided derivative from the adjacent box immediately to the right in each knot coordinate (box index $\lfloor M_rt_r\rfloor$ modulo $M_r$), consistently for the full derivative vector and both correction factors. Determine this right-hand mesh-box index by the bounded certificate interface, allowing a supplied exact knot equality; if its floor/branch cannot be certified, return `arithmetic-inconclusive`. This is the selected branch from the assignment definition and is not asserted to be a classical gradient. Computed enclosures retain outward bounds on residual imaginary parts. The mesh energy is $E_{M,\mathcal K}=\frac12\sum_{k\in\mathcal K}c_k|z_k|^2$.

   If mesh-self correction is enabled, place $h_k=c_k/|D(k)|^2$ on retained residues and zero elsewhere. Apply the same normalized negative-sign tensor DFT to $h$ and multiply by $\sqrt{N_g}$ to form the cyclic kernel $\gamma_d=\sum_{k\in\mathcal K}h_ke^{-2\pi i\sum_rk_rd_r/M_r}$. For each particle evaluate $S_i=\sum_{\ell,m}w_\ell(t_i)w_m(t_i)\gamma_{\ell-m}$ over all support-residue pairs, retaining duplicate-wrap contributions, and set $C_M=\frac12\sum_iq_i^2(S_i-\sum_{k\in\mathcal K}c_k)$. Replace the mesh energy by $E_{M,\mathcal K}-C_M$. Replace the uncorrected force by $F_{M,i}+q_i^2\sum_{\ell,m}w_\ell(t_i)\nabla_xw_m(t_i)\gamma_{\ell-m}$, using the same selected derivative branch. The equality of this finite cyclic-kernel computation with the correction and its branch derivative is proved in [[thm-ewald-pme-reciprocal-energy-force-error-bound]]. Outward enclosures include the kernel transform, local products, derivative-window factors, and subtraction.

6. For each query/particle pair and particle pair, use certified representatives $t_a,t_b\in[0,1)^3$. If $|A(t_a-t_b+\ell)|\le R$, then $|\ell|\le\|A^{-1}\|_2R+\sqrt3$. Compute an outward upper bound $B_R$ for the right-hand side, set $N_R=\lceil B_R\rceil$, and for each required query or particle pair enumerate every integer index in $[-N_R,N_R]^3$. For each candidate compute an outward interval $[r^-,r^+]$ for its image distance and an interval $[R^-,R^+]$ for $R$; include the image if $r^+\le R^-$, exclude it if $r^->R^+$, and return `cutoff-inconclusive` otherwise. Use these finite lists to compute the real potential when requested, real energy, and real force, excluding exactly the own zero-image term $(j,\ell)=(i,0)$ from energy and force before any singular kernel division. For every other retained image certify a positive lower distance bound before dividing; otherwise return `arithmetic-inconclusive`. Keep the force convention as the finite sum of differentiated retained pair kernels; do not differentiate the hard-cutoff membership indicator. Add the ordinary Ewald energy constant $-\alpha\sum_iq_i^2/\sqrt\pi$ to the total energy. The point-source potential is only returned off all source images.

7. Compute $M_R=\lfloor R\rfloor$ and $M_K=\lfloor K_c\rfloor$; if either floor is not determined by its certified enclosure, return `cutoff-inconclusive`. Construct finite $U_3$ real and reciprocal shell controllers with the supplied $J_R,J_K$. For each retained mode, compute outward bounds for $A_k$ and $B_k$ by summing the source/derivative alias terms through $|n_r|\le J_A$ and adding the supplier's finite p-series remainders; for $P=2$, use its finite derivative-window controller. Use $H_k=0$ for the declared analytic-window gather in both force branches; place all finite arithmetic errors in the supplied radii $\varepsilon_{F,i}$. Include every omitted mode in $\mathcal M_{K_c}$ and the mesh-self correction if enabled. Add the actual outward arithmetic radii for all spread, transform, solve, gather, summation, and correction nodes. The outward enclosures for finite controllers themselves use the bounded enclosure interface above; its name does not authorize an unbounded oracle or refinement search. If a required arithmetic radius or controller enclosure is unavailable, return `arithmetic-inconclusive`. Otherwise retain the computed intervals and total error radii for the final output. Use the same bounded interface for tolerance comparisons: return `certified` when every requested radius is certified to meet its tolerance, `certified-over-tolerance` when at least one is certified to exceed it, and `arithmetic-inconclusive` if neither decision is certified. The total-certificate theorem proves the error bounds and formal operation-count properties for this evaluation; operation counts do not certify accuracy.
