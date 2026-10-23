# Step 3a reader report — batch 12

Run: `fluid-dynamics-all-47-2026-10-23`  
Role: reader  
Date: 2026-10-23

## Inventory opened

Assigned pages:

- `library/fluid-dynamics/fd-px01.md` (`fd-px01`, A page)
- `library/fluid-dynamics/fd-px01-examples.md` (`fd-px01-examples`, B page)

Assigned items:

- `items/pthm-fd-px01-prediction.md`
- `items/ex-fd-x01-application.md`

Page prerequisites opened: `fd-f02`, `fd-f03`, and `fd-x01` (the last at `library/fluid-dynamics-mathematics/fd-x01.md`). The assigned theorem's direct item prerequisites opened were `thm-fd-x01`, `post-fd-continuum-balances`, `post-fd-boundary-data`, `post-fd-newtonian-fourier`, `def-fd-barotropic-euler-model`, and `def-fd-incompressible-newtonian-model`. Further mathematical/context suppliers opened were `def-fd-x00`, the pinned published `thm-chain-rule`, and the transitive physical definition `def-fd-quantity-and-frame-conventions`. I also opened the batch-12 manifest, proof contracts, cross-batch dependency record, and the `thm-chain-rule` entry in `research/math-imports.json`.

## Review and verdicts

The supplier statements distinguish the adopted continuum, stress, and boundary assumptions from deductions. `def-fd-incompressible-newtonian-model` gives the selected constant-density system and its stress-divergence reduction; `def-fd-barotropic-euler-model` gives the unforced positive-density mass and momentum equations. The mathematical scaling supplier has the needed positive-scale change of variables and chain-rule argument. The imported chain-rule item matches its local import hash.

For `pthm-fd-px01-prediction`, differentiating the incompressible stress gives
$(\operatorname{div}\sigma)_i=-\partial_i p+\mu\Delta u_i+\mu\partial_i\operatorname{div}u$; the final term vanishes under the stated divergence constraint. The time, convection, pressure, and Laplacian terms then have the stated scales, with coefficient $\nu/(UL)=\operatorname{Re}^{-1}$. In the separate barotropic branch, the mass terms scale by $\rho_0U/L$, and dividing momentum by $\rho_0U^2/L$ gives $c^2/U^2=\operatorname{Ma}^{-2}$. The pressure offset is constant, all field rescalings are invertible, positive spatial dilation preserves any existing Euclidean unit normal, and $dx=L^3dX$ gives the total-momentum factor. The assumptions exclude zero denominators and no limit, solution-existence, or empirical conclusion is inferred.

For `ex-fd-x01-application`, the formal parameter arithmetic is correct: $\nu=10^{-6}\,\mathrm{m^2\,s^{-1}}$, $\operatorname{Re}=10^5$, $\operatorname{Ma}=10^{-2}$, and $\operatorname{Ma}^{-2}=10^4$. The periodic shear is divergence-free, has zero convective term, satisfies $\partial_\Theta u^*=-\operatorname{Re}^{-1}u^*$ and $\Delta_Xu^*=-u^*$, and descends through the stated torus quotient. The constant barotropic state has zero pressure gradient and satisfies both equations. The example labels its values as formal inputs, not measurements.

Source checks confirmed the stated Reynolds definition and inertial/viscous comparison in Tong, *Fluid Mechanics*, Part II, §3.3.1, printed pp. 72–73; the Mach definition $M=U/c_0$ in Part III, §4.5.3, printed p. 166; and the usual qualified parameter interpretations in MIT 16.01 F5, pp. 1–4. Washington's *An Introduction to Continuum Mechanics*, Chapter 6, §6.5.3 and §6.7.2, supports the Newtonian stress and Fourier flux forms. Sonin §§1.1–1.3 and Hazel Chapter 4 support the cited material-balance formulations; Tong Part I §2.3.1 supports the stationary/moving-wall impermeability condition. These sources are model-formulation support, not proof that a model describes nature. No empirical data or statistical inference is asserted here.

One nonfatal, uneditable dependency defect remains. The current batch-3 draft `def-fd-quantity-and-frame-conventions` allows an arbitrary open interval $I$ but defines a material motion on $I\times U$ and imposes $\chi(0,a)=a$ without requiring $0\in I$. The definition is not well-formed for allowed intervals excluding zero. It lies in the dependency closure of `pthm-fd-px01-prediction` through `post-fd-continuum-balances`; the local PDE scaling computation does not use the material map. The finding is retained in the JSON output. No other confirmed defect in the assigned items or their uses was found.

### Page verdicts

- `fd-px01`: Pass on its current A-page inventory and empty body; the assigned theorem's equations, dimensions, proof, scope, and conditional physical interpretation are sound. It inherits the nonfatal transitive dependency finding above.
- `fd-px01-examples`: Pass on its current B-page inventory and empty body; the assigned worked example's arithmetic, fields, exact solutions, and empirical qualifications are sound. It inherits the same dependency finding through the theorem.

## Edits and checks

No item or page was edited. No proof contract or judge record changed. The item formatter, reflow, and precheck were not run because there were no item edits. No TikZ/tikzcd diagram occurs in either assigned item; the exposition requires no diagram for these coefficient calculations.

## Limitations and blocker

The cited Powers PDF timed out during retrieval, and the cited combined Tong `fluids.pdf` exceeded the browser fetch limit; the relevant Tong Part I boundary-condition section was available in the author's `fluids1.pdf`. I therefore do not claim to have inspected those exact complete PDF carriers. This does not affect the direct algebraic verification. The first batch read retrieved some dependency files concurrently; the mathematical and physical claims were assessed from prerequisite statements before reaching the theorem and its example. No blocker remains within batch 12.
