---
page: cm-math-balances
title: Cm Math Balances
status: draft
items: [lem-cm-derivative-of-pairings-of-curves, thm-cm-center-of-mass-and-kinetic-splitting, thm-cm-momentum-and-angular-momentum-balance, thm-cm-work-energy-balance, thm-cm-variable-mass-momentum-balance, thm-cm-compact-continuation-for-locally-lipschitz-odes, cor-cm-finite-time-breakdown-requires-escape, lem-cm-piecewise-c1-jump-derivative, thm-cm-impulse-restitution-and-energy-loss]
examples: []
requires: ["picard-lindelof-and-first-order-odes","regular-surfaces-and-surface-integrals","the-total-derivative","compactness-in-metric-spaces","completeness-and-uniform-continuity","countability-and-uncountability","distributions-test-functions-and-differentiation","fourier-transform-convolution-and-approximate-identities","properties-of-the-integral-and-the-working-ftc","rn-as-a-normed-space","the-derivative-and-mean-value-theorems","the-inverse-function-theorem-completed","the-lebesgue-integral-and-the-convergence-theorems","the-maximal-function-and-lebesgue-differentiation","foundations-of-the-real-numbers","measurable-functions-and-simple-approximation","metric-spaces","monotone-sequences-and-cauchy-completeness","normed-and-banach-spaces","rings-subrings-and-integral-domains","roots-and-rational-powers","the-riemann-integral","topology-of-r"]
---

The finite-balance and continuation layer of the non-relativistic classical
mechanics collection, all of it mathematics: the algebraic identities behind
centre-of-mass and kinetic-energy splittings, momentum, angular-momentum and
work-energy balances for finitely many labelled curves, the compact-continuation
criterion for locally Lipschitz ordinary differential equations, and the
distributional and algebraic machinery of an isolated impulse. Every item on
this page carries `domain: mathematics` and depends only on mathematical
suppliers; nothing here asserts that the adopted balances describe nature, and
the physical reading of masses, forces, impulses and energies remains with the
consuming classical-mechanics pages.

The differentiation layer is [[lem-cm-derivative-of-pairings-of-curves]], which
proves the sum, scalar-multiple, inner-product, cross-product and squared-norm
rules for differentiable curves in $\mathbb R^3$. On it rest the balance
identities: [[thm-cm-center-of-mass-and-kinetic-splitting]] introduces the
centre of mass $X$, proves $\sum_im_i\rho_i=0$ and the splitting
$\sum_im_i\lVert x_i'\rVert_2^2=M\lVert X'\rVert_2^2+\sum_im_i\lVert\rho_i'\rVert_2^2$,
with the two-body reduced-mass identity
$\sum_im_i\lVert\rho_i'\rVert_2^2=\mu\lVert r'\rVert_2^2$;
[[thm-cm-momentum-and-angular-momentum-balance]] derives
$P'=\sum_if_i$ and
$J'=\sum_ix_i\times f_i+\sum_{i<j}(x_i-x_j)\times f_{ij}$ from antisymmetric
pair forces and shows that pairwise central forces kill the internal torque
term; and [[thm-cm-work-energy-balance]] proves
$\frac{d}{dt}(K+U(t,x(t)))=\partial_tU(t,x(t))+\sum_i\langle d_i,x_i'\rangle$
for forces $m_ix_i''=-\nabla_{x_i}U+d_i$, with the autonomous conserved case.
The variable-mass material accounting is [[thm-cm-variable-mass-momentum-balance]],
whose two adopted balance identities imply
$mv'=F+r_{\mathrm{in}}(w_{\mathrm{in}}-v)-r_{\mathrm{out}}(w_{\mathrm{out}}-v)$
and exhibit why $(mv)'=F$ alone is not the open-system law.

The continuation layer is the pair [[thm-cm-compact-continuation-for-locally-lipschitz-odes]]
and [[cor-cm-finite-time-breakdown-requires-escape]]: a solution of
$x'=F(t,x)$ whose graph stays in a compact subset of the open domain near a
finite endpoint $b$ extends past $b$ (and the autonomous trapped-state case is
clause 2), while a non-extendable solution must leave every compact subset of
the domain as the endpoint is approached. The criterion is about compact
trapping, not about pointwise finiteness or boundedness of $F$.

The impulse layer begins with [[lem-cm-piecewise-c1-jump-derivative]], which
computes the distributional derivative of a piecewise $C^1$ function with a
jump, $(u_p)'=u_{p'_{\mathrm{reg}}}+[p]\delta_{t_*}$, and declares the Axiom of
Countable Choice used by the Lebesgue-integration suppliers it cites. On it
rests [[thm-cm-impulse-restitution-and-energy-loss]]: under the isolated
reciprocal impulse model, the momentum jumps are $\pm J$, total momentum is
preserved, the restitution law determines the post-impulse velocities uniquely,
and the kinetic-energy change is
$-\frac{1-e^2}{2}\mu\lVert v_2^--v_1^-\rVert_2^2$. The adopted impulse model is
stated as a mathematical hypothesis about pairings against smooth test
functions; no contact or restitution law is derived from smooth forces.

The companion page [[cm-math-balances-examples]] records explicit arithmetic
checks of the impulse formulas, a rocket computation, and worked continuation
boundary cases.
