# Independent contracted-Bianchi normalization computation

With the actual dimension-four decomposition in the production Schouten Definition(a), write `t=tr_gamma S=R/3`. Then `Ric=S+(t/2)gamma`. The torsion-free contracted second Bianchi identity is `div Ric=(1/2)dR=(3/2)dt`, giving `div S=dt`.

Diverging the decomposition in its first slot gives

`div R_jkl = div C_jkl + (1/2)[(partial_k t)gamma_jl-(partial_l t)gamma_jk + nabla_k S_jl-nabla_l S_jk]`.

The actual curvature contracted Bianchi identity gives

`div R_jkl = nabla_k Ric_jl-nabla_l Ric_jk = nabla_k S_jl-nabla_l S_jk +(1/2)[(partial_k t)gamma_jl-(partial_l t)gamma_jk]`.

Subtracting these expressions yields

`div C_jkl=(1/2)(nabla_k S_jl-nabla_l S_jk)`.

Thus the vanishing residual is exactly

`F_jkl=nabla_i(C^i_jkl-delta^i_[k S_l]j)`

with brackets of weight one half. It is not the divergence of the full prescribed Riemann tensor. This independently checks the actual E3d scaffold sign; it does not prove the whole off-shell torsion subsidiary double-divergence identity.

For normalized reduction density r, define the flux defect independently of the physical stress-tensor symbol by `q_j=nabla_i(r U^i U_j)`. Since U is unit, `q=U(r)+r chi` and `q_j=q U_j+r nabla_U U_j`; its spatial projection is `r nabla_U U_j`. This matches the generalized splitting coefficients that already multiply q by kappa. The present production `kappa^(-1) div T` conflicts with these normalized identities. The reduced evolution does not itself set every zero quantity to zero: it sets time torsion/curvature and symmetric evolution projections, while the subsidiary theorem propagates the remaining constrained errors. The current residual Definition(c) sentence claiming the reduced system sets z=0 must be corrected when the residual interface is repaired.
