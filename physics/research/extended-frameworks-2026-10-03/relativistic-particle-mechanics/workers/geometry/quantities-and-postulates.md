# Primitive/derived declarations, SI and postulates

The primitive designation is local to the prescribed-background particle formulation. Geometry is stipulated mathematical input, and physical adoption is a postulate; a derived quantity's SI unit is not evidence of physical fundamentality.

| Quantity | Mathematical type/domain | Status | SI units and construction |
|---|---|---|---|
| c | positive scalar constant | primitive conversion/model constant | m/s |
| M,g,time orientation | smooth manifold and Lorentz covariant two-tensor; smooth timelike orientation field | prescribed background input | x^a in m; dimensionless g_ab in length charts |
| m | positive scalar for massive body; zero label for separate null action sector | primitive particle parameter | kg; constant unless exchange law is explicitly adopted |
| x | C2 map from interval to M; future timelike or null nonzero tangent | dynamical field | coordinate components m |
| σ | arbitrary increasing curve label | gauge choice | s in normalized action convention; only its actual interval is asserted |
| τ | positive-integral proper-time coordinate on timelike curve | derived geometric functional, adopted clock reading separately | s; c^-1∫sqrt(-g(x',x'))dσ |
| U | section of x*TM on timelike curve | derived | m/s; dx/dτ; g(U,U)=-c² |
| A | section of x*TM | derived | m/s²; D_τU; U-orthogonal |
| e | positive function on parameter interval | auxiliary varied field, gauge density | kg^-1 if σ in s; e_s=e φ' |
| P massive | section of x*TM | derived mechanical observable | kg m/s; mU=T/e on action solutions |
| P null | nonzero future null section | primitive initial momentum scale with derived transport evolution | kg m/s; T/e; independent of proper time |
| λ | affine coordinate from e | derived/gauge-origin choice | s/kg; dλ=e dσ; dx/dλ=P |
| n | future g-unit vector in T_pM | chosen observer input | dimensionless in length-component convention; physical velocity cn |
| h_n | endomorphism of T_pM | derived | dimensionless; v↦v+g(n,v)n |
| q_n | vector in n-perpendicular positive rest space | derived observer observable | kg m/s; h_n(P) |
| E_n | positive scalar at event/observer pair | derived observer observable | J; -c g(P,n) |
| w_n | vector in n-perpendicular | derived observer observable | m/s; c²q_n/E_n; massive norm<c and null norm=c |
| γ_n | scalar for massive motion only | derived | dimensionless; E_n/(mc²) |
| f,F | smooth shell vector field / four-force along curve | prescribed law / derived derivative | N; D_τP; force orthogonality assumed for constant mass |
| f_3 | inertial spatial vector on massive path | derived observer force | N; dp/dt; valid flat coordinate work law |
| Γ, R | connection coordinate coefficients, curvature tensor | derived background geometry | m^-1, m^-2 in length charts |
| K | Killing vector field on background | optional symmetry input | must explicitly declare normalization; dimensionless rest time-translation convention gives -c g(K,P) in J |
| S_m,S_e | scalar path action | adopted model functional | J s; -mc∫ℓ, (1/2)∫(e^-1g(T,T)-em²c²) |
| L,ε,φ,Φ | length scale, small scalar, smooth stationary scalar, weak potential | prescribed reduction input / derived potential | m, dimensionless, dimensionless, m²/s²; Φ=εc²φ |

Postulate candidates P-GA through P-GD are formulated in the final section of `foundations-and-actions.md`. S1 supplies exact inherited ideal-clock and SR covariance scope; G7 supplies Einstein adoption only when the separate background equation is invoked. No experiment is used as a logical supplier. Any future reported clock/particle measurement must retain preparation, apparatus/force/background regime and stated statistical/systematic uncertainty; an ideal-clock postulate alone supplies no accuracy estimate for an actual apparatus.
