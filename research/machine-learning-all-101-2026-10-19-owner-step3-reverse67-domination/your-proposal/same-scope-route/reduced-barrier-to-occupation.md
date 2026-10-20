# Exact reduced deterministic import and completed implication

Research reduction, not an active-build proof supplier. Existence of the barrier below remains unproved locally. Root assigned separate prerequisite authoring and legitimate source retrieval; no consumer review was delegated.

Let m≥2. For every nonnegative f∈Cc∞(R×R^m), the sufficient deterministic import is a nonnegative v with bounded weak v_t,Dv,D²v such that, for every constant positive-semidefinite α,

v_t+α:D²v−(1+trα)v+(detα)^{1/(m+1)} f≤0 almost everywhere,

and on every fixed [0,T] the bounds v,|Dv|≤C_{m,T}||f||_{m+1} hold. A common full-measure set for all α may be obtained from rational positive-semidefinite matrices by continuity. This is a fixed-discount, fixed-clock fragment of Krylov2018 Theorem2.2.4 quoted in full as used on arXiv2005.08831 PDFp7. No citation-only claim of local proof is made.

An equivalent sufficient Monge–Ampère existence core is a nonnegative Sobolev v with

S=v−v_t≥0, H=vI−D²v≥0, S detH≥[f/(m+1)]^{m+1}, sup_[0,T]v≤C_{m,T}||f||_{m+1}.

Indeed AM–GM applied to S and the m eigenvalues of α^{1/2}Hα^{1/2} gives S+tr(αH)≥(m+1)(S detα detH)^{1/(m+1)}≥(detα)^{1/(m+1)}f. This is precisely the required linear inequality. Singular matrices follow directly or by a positive-definite approximation.

The gradient bound is not an extra existence theorem: for a smooth globally nonnegative v with H≥0, restrict to any line w(z)=v(t,x+zξ). Then w''≤w. The variation-of-constants formula compares w with w(0)cosh z+w'(0)sinh z on both sides of zero, giving w(z)≤w(0)cosh z+w'(0)sinh z. If |w'(0)|>w(0), the right side becomes negative in one direction, contradicting w≥0. Hence |ξ·Dv|≤v for every unit ξ, and |Dv|≤v. Apply this to nonnegative mollifications for Sobolev v. This proves the gradient reduction, not the existence or height estimate of the MA majorant.

Now let Z=Z_0+M+B, with continuous local M and finite-variation B, and bracket density 2a_u. Let τ≤T stop it so A=E∫_0^τ tr a_u du and V=E Var(B)_[0,τ] are finite. Z_0 is arbitrary F_0 measurable; no moment or boundedness is needed. Assume a_u≥ηI before τ.

Take a nonnegative unit-mass compact smooth spacetime mollifier ρ_ε(t,x)=ε^{−(m+1)}ρ(t/ε,x/ε), not the source's displayed scaling typo, and put v_ε=v*ρ_ε, f_ε=f*ρ_ε. The linear constant-α inequalities survive convolution for every α. On the finite time interval, v_ε,|Dv_ε|≤C_{m,T+1}||f||_{m+1}, with a harmless uniform constant for ε≤1. Itô and the bracket convention give

d[e^{−u}v_ε(u,Z_u)] = e^{−u}(v_{ε,t}+a_u:D²v_ε−v_ε)du + e^{−u}Dv_ε·dB_u + e^{−u}Dv_ε·dM_u.

The stopped stochastic integral is a true square-integrable martingale because the gradient is bounded and the expected stopped trace bracket is finite. The linear inequality therefore gives, after discarding the nonnegative terminal value,

E∫_0^τ e^{−u}(det a_u)^{1/(m+1)} f_ε(u,Z_u)du ≤ C_{m,T+1}(1+A+V)||f||_{m+1}.

No exponential-moment or squared-drift assumption has been used. Let ε↓0: f_ε→f uniformly, and (det a)^{1/(m+1)}≤C_m(1+tr a) makes the integrand uniformly integrable under the stopped expectation. Thus the same estimate holds for f. The lower determinant bound and e^{−u}≥e^{−T} give

E∫_0^τ f(u,Z_u)du ≤ C_{m,T,η}(1+A+V)||f||_{m+1}.       (*)

For an open set O in a fixed bounded time-state box, smooth cutoffs 0≤f_n≤1 supported in O and equal to one on its exhausting compact cores converge pointwise to 1_O. Apply (*) and dominated convergence under the finite occupation measure; ||f_n||_{m+1}≤|O|^{1/(m+1)}. Hence μ(O)≤C|O|^{1/(m+1)}. Lebesgue outer regularity now gives μ(N)=0 for every null Borel N in the box. Exhaust boxes to obtain stopped spacetime occupation absolute continuity. This extension uses only elementary smooth cutoffs, DCT and outer regularity, not dual-Lp representation.

For d=1, append an independent scalar Brownian coordinate and apply the m=2 result. The bracket remains uniformly positive; its stopped expected trace adds at most T and no drift variation. For a null set N⊂[0,T]×R, each N×[−R,R] is null in the enlarged spacetime. The enlarged occupation statement and R↑∞ show E∫_0^τ1_N(u,Z_u)du=0. This preserves the original d≥1 scope.

Exact unresolved core: existence and height bound of the Sobolev MA/Bellman majorant. The actual fully read existing Alexandrov theorem only gives a.e Peano second differentiability of a prescribed semiconvex function; it does not produce this majorant, its MA measure, or its height estimate. The actual AM–GM theorem supplies only the displayed algebra. No existing heat maximum principle has been asserted to supply the missing existence theorem.
