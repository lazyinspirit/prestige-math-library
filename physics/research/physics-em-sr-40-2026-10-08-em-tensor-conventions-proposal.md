# Electromagnetic tensor conventions proposal

Run `physics-em-sr-40-2026-10-08`. Proposal-only review of live batch 23; batches 12/23 were still writing when assigned. Preserve the adopted tensor, potential and force conventions. Only `physics-em-sr-40-2026-10-08-em-tensor-conventions-proposal.*` artifacts are written. Integration must compare the drained native baseline with the saved manifest/object hashes; no native manifest, readiness, plan, import, history, task or engine mutation and no commit.

## Adopted convention and exact repair

The native clause (a) adopts, in signature `diag(−1,1,1,1)` and orientation `epsilon0123=+1`,

$$F_{0i}=-E_i/c,\quad F_{i0}=E_i/c,\quad F_{ij}=\epsilon_{ijk}B_k,\quad F^{0i}=E_i/c,\quad F^{i0}=-E_i/c.$$

That choice is correct for the adopted `A^mu=(phi/c,A)` and covector `A_mu=(-phi/c,A)`, with `F=dA`, and for the adopted equation `m dU/dtau=q Phi(U)`. Keep it intact. Current clause (b) wrongly treats `F_i0` as negative. The exact observer values from the earlier SR definition are

$$e_i=F_{i0}=+E_i/c,\qquad b_i=(*F)_{i0}=-B_i,\qquad e_0=b_0=0.$$

Use the SR theorem's general algebra, not its optional SI identification, to obtain

$$I_1=\tfrac12F_{ab}F^{ab}=|B|^2-|E|^2/c^2,\qquad I_2=F_{ab}(*F)^{ab}=+4E\cdot B/c,$$

$$F\wedge F=-2(E\cdot B)\varepsilon/c=-\tfrac12 I_2\varepsilon.$$

For the same physical `(E,B)`, S8's optional tensor has `F_optional^{i0}=E_i/c`, `F_optional^{ij}=−epsilon_ijk B_k`, hence `F_optional=−F_adopted` in **all six** components. It is not a magnetic-only sign change. Linearity of the Lorentz component law means simultaneous negation of the entire tensor leaves the same recovered E/B boost formulas, while quadratic expressions are unchanged. The observer pair changes from `(-E/c,+B)` in S8's optional identification to `(+E/c,−B)` in the adopted identification. The tensor definition must explain that complete dictionary explicitly.

A sign witness: choose `E=(c,0,0)`, `B=(1,0,0)`, so `F01=−1`, `F23=+1`, `e1=+1`, `b1=−1`, `I1=0`, `I2=+4`, and the standard square wedge is `−2epsilon`. Both the sign and the factor follow by direct expansion with the standard four-form convention from the repaired SR theorem.

## Preserve the force coupling

The actual native direct consumer is `post-em-lorentz-coupling`. It adopts `q Phi(U)` with `eta(Phi(u),w)=F(w,u)` and `Phi(U)^mu=eta^{mu alpha}F_alpha beta U^beta=F^{mu nu}U_nu`. For a massive velocity `U=gamma(c,v)`, the adopted tensor gives

$$\Phi(U)^0=\gamma E\cdot v/c,\qquad \Phi(U)^i=\gamma[E_i+(v\times B)_i].$$

Thus the physical spatial force and power readings in that postulate agree with the adopted component convention. Antisymmetry gives `eta(U,Phi(U))=0`, as the pinned local contraction supplier promises. The direct consumer is reviewed on its full statement/strategy and needs no sign adjustment or interface edit. Preserve its external-field, positive-mass, constant-charge, no-self-force and continuum-matter qualification clauses. Changing the adopted tensor sign while keeping `q Phi` would change the physical force, so no such change is proposed.

## C1 potential branch: complete weak mixed-derivative proof

Clause (a) already requires `F in Ck`, `k≥1`. Clause (c) allows a `C1` four-potential whose exterior derivative equals that `C1` field. A general `C1` potential need only produce continuous components; the representation hypothesis here additionally retains the stated `C1` field regularity. This does not require the potential itself to be `C2`, and that original branch must be preserved.

The pointwise component computation uses only first derivatives:

$$F_{0i}=\partial_0A_i-\partial_iA_0=(\partial_tA_i+\partial_i\varphi)/c=-E_i/c,\quad F_{ij}=\partial_iA_j-\partial_jA_i=\epsilon_{ijk}B_k.$$

For closedness set `H_lambda mu nu=partial_lambda F_mu nu+partial_mu F_nu lambda+partial_nu F_lambda mu`, a continuous function since `F` is `C1`. Fix a smooth compactly supported scalar test `psi` in the four-dimensional inertial region. The earlier **choice-free** `lem-sr-compact-variation-and-fundamental-lemma` (b), applied with its compactly supported factor `psi`, gives

$$\int H_{\lambda\mu\nu}\psi=-\int[F_{\mu\nu}\partial_\lambda\psi+F_{\nu\lambda}\partial_\mu\psi+F_{\lambda\mu}\partial_\nu\psi].$$

Substitute `F_mu nu=partial_mu A_nu−partial_nu A_mu`, then apply the same integration-by-parts supplier with the compactly supported factors `partial_lambda psi`, `partial_mu psi`, `partial_nu psi`. The right side becomes

$$\int A_\nu(\partial_\mu\partial_\lambda\psi-\partial_\lambda\partial_\mu\psi)+A_\mu(\partial_\lambda\partial_\nu\psi-\partial_\nu\partial_\lambda\psi)+A_\lambda(\partial_\nu\partial_\mu\psi-\partial_\mu\partial_\nu\psi)=0.$$

Only derivatives of the **smooth test** are commuted, using the exact published `thm-clairaut-schwarz-mixed-partials` with its `C2` hypothesis. No second derivative of `A` has been assumed. The SR supplier's continuous fundamental lemma (a) then gives `H_lambda mu nu=0` at every point. This is the distributional mixed-derivative cancellation proved directly with the available compact-support Riemann test identities and continuous classical output. It invokes no representative-selection theorem, no unproved regular-distribution injection and no choice axiom. The proposal adds those two genuine mathematical suppliers, plus the exact spatial divergence/curl definition used in the potential dictionary. Closedness is spelled out as the cyclic component identity, without assuming global potential existence or Maxwell dynamics.

## Actual Maxwell and future consumer sign dictionary

The adopted vacuum postulate remains unchanged. Under its classical equations, with `j=(c rho,J)` and `epsilon0=(mu0 c²)^−1`, direct component differentiation gives

$$\partial_\mu F^{\mu0}=-\operatorname{div}E/c=-\mu_0c\rho=-\mu_0j^0,$$

$$\partial_\mu F^{\mu i}=\partial_tE_i/c^2-(\operatorname{curl}B)_i=-\mu_0J_i=-\mu_0j^i.$$

Thus the correct sourced equation is `partial_mu F^{mu nu}=−mu0 j^nu`, equivalently `partial_nu F^{mu nu}=+mu0 j^mu`. These are the same equation with different contracted slots. They must not be confused. This sign already matches the actual research C2 component proof for `pthm-em-tensor-maxwell-equivalence`.

With this orientation and star, `(*F)0i=B_i`, `(*F)ij=epsilon_ijk E_k/c`, hence `(*F)^{0i}=−B_i`, `(*F)^{i0}=+B_i`. Its divergence is zero exactly when `div B=0` and `partial_t B+curl E=0`. Equivalently the cyclic derivative has `H123=div B` and `H0ij=epsilon_ijk(partial_t B+curl E)_k/c`. This checks every homogeneous identity against the adopted signs. The same component identities hold in a weak branch by linearity of distributional derivatives, under that branch's own definitions and assumptions; this definition does not assert them for general fields without the Maxwell postulate.

For a sufficiently differentiable potential, `partial_mu F^{mu nu}=Box A^nu−partial^nu(partial_mu A^mu)`, with `Box=−c^−2 partial_t²+Delta`. Consequently the Lorenz-gauge equation is `Box A^nu=−mu0 j^nu`, equivalently `(c^−2 partial_t²−Delta)A^nu=+mu0 j^nu`. This is a downstream sign mapping, not an added regularity or gauge-existence claim here. The standard quadratic field stress tensor is unchanged by whole-tensor negation; its research C5 matter-force term `f^nu=F^{nu lambda}j_lambda` agrees with `(J·E/c,rho E+J×B)` for the adopted tensor. Field stress divergence is `−f`, matter divergence is `+f` under that separately adopted matter balance. The research field-action definition also agrees: its interaction term is $+j^\mu A_\mu=-\rho\varphi+J\cdot A$ in $S=c^{-1}\int[-F^2/(4\mu_0)+j^\mu A_\mu]$. Smooth compact variations give $\partial_\mu F^{\mu\nu}=-\mu_0j^\nu$, with the same adopted sign. This is a checked future interface under its own variational hypotheses. No physical sign is changed elsewhere automatically.

The JSON distinguishes the native current consumer closure from research-only future consumers. Future tensor-Maxwell equivalence, field boosts, covariant stress, particle coupling and observer-field use must consume this dictionary when their native scaffolds exist; this lane does not invent authored future carriers or mutate research history.

## Evidence and limits

Read the live batch-23 tensor object, its full local force consumer, its relevant SI/source/field/Maxwell premises, and the exact repaired S8/contraction/compact-test suppliers. Read the full statement of the added published mixed-partial and spatial curl suppliers. All direct imported snapshot/original hashes are compared with pinned receipts. Mathematical test cancellation is independently derived, rather than relabeling a research promise as accepted proof.

For comparison I read bounded passages of the **existing** cached Tong full text: printed pp106–107, equations (5.15)–(5.16), and pp111–113, dual/invariant/Maxwell equations (5.23)–(5.26). This saved historical text has different section numbering from batch23's cited 2026 printing. Its tensor convention is the negative of the adopted one, and its printed positive sourced-divergence equation must be converted accordingly. The saved text is contextual corroboration only: no claim of a fresh retrieval or of reading the newly stamped 2026 printing is made. The native source metadata are preserved as the writer's recorded evidence, not recertified by this lane. All scope and empirical qualifications are preserved; no readiness, proof audit, publication or source gate success is claimed.
