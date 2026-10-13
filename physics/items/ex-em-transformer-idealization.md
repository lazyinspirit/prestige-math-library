---
id: ex-em-transformer-idealization
kind: example
title: "Two-circuit mutual inductance, the perfect-linkage bound and ideal-transformer limitations"
domain: physics
status: published
origin: session
dependency_level: 21
proof_strategy: direct
deps:
  - post-em-circuit-approximation
  - pthm-em-inductance-reciprocity
  - pthm-em-inductor-energy
  - def-em-steady-current-regime
  - def-em-si-conventions
  - thm-algebra-of-derivatives
  - def-euclidean-inner-product
  - def-countable-choice
dependency_roles:
  post-em-circuit-approximation: physical-assumption
  pthm-em-inductance-reciprocity: physical-result
  pthm-em-inductor-energy: physical-result
  def-em-steady-current-regime: formulation-prerequisite
  def-em-si-conventions: formulation-prerequisite
  thm-algebra-of-derivatives: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-countable-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Richard Fitzpatrick, Classical Electromagnetism: An intermediate level course (University of Texas at Austin; complete course book, 364 pp.)"
      url: http://www.physics.ntua.gr/ph03/doc/Fitzpatrick.R.@.Classical.Electromagnetism.pdf
      locator: '§7.4 printed pp. 222-225 (the two-solenoid mutual inductance $M=\mu_0N_1N_2\pi r^2l$, $M=\sqrt{L_1L_2}$ under perfect linkage and the warning that flux leakage reduces $M$); read in the fetched complete 364-page course book.'
    - title: "David J. Griffiths, Introduction to Electrodynamics, 3rd edition (Prentice Hall 1999, 596 pp.; full scanned text)"
      url: https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf
      locator: '§7.2.3 printed pp. 310-317 (reciprocity $M_{21}=M_{12}$ and the Neumann formula; Problem 7.20, where the equality of the two mutual inductances is confirmed); read in the stamped 596-page scan.'
    - title: "David Tong, Electromagnetism, University of Cambridge Part II Mathematical Tripos lecture notes (Lent Term 2015, 236 pp.)"
      url: https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf
      locator: '§4.1.2 printed pp. 71-73 (inductance and the magnetostatic energy of a coil, used to identify the mutual term in the stored energy); read in the retained complete text of the 236-page printing.'
physical_scope: 'Conditional two-circuit bookkeeping and smooth-profile realization: the reciprocal energy and instantaneous power, the exact positive-semidefinite bound $|M|\le\sqrt{L_1L_2}$ and the sign-correct perfect-linkage null direction for either winding orientation, the positive common-flux model and its signed reversal, and failure of a universal voltage ratio under strict linkage with accidental histories retained. No physical leakage or loss mechanism and no measurement is asserted.'
---

## Example

Assume the lumped circuit model of [[post-em-circuit-approximation]] with the units of [[def-em-si-conventions]], and let $L=\begin{pmatrix}L_1&M\\M&L_2\end{pmatrix}$ be a constant symmetric block of its inductance matrix with $L_1,L_2>0$. Let $I_1,I_2:J\to\mathbb R$ be $C^1$ currents on a nonempty interval $J$ (each extending to a $C^1$ map on an open interval containing $J$, as in the model's conventions) with terminal voltages $V_\alpha=\sum_\beta L_{\alpha\beta}\dot I_\beta$. Assume Countable Choice ($\mathrm{AC}_\omega$, [[def-countable-choice]]) for the realization and bounded-linking clauses (b), inherited from the linkage and energy suppliers.

(a) [Energy and instantaneous power] the stored inductive bookkeeping energy is
$$W(t)=\tfrac12L_1I_1(t)^2+\tfrac12L_2I_2(t)^2+MI_1(t)I_2(t),$$
and $V_1I_1+V_2I_2=\dot W$ by part (a) of [[pthm-em-inductor-energy]]; the mutual term increases the energy for currents of the same sign and decreases it for opposite signs (as the sign of the product $I_1I_2$ indicates when $M>0$).

(b) [Perfect linkage and the bound] if the two currents are realised by fixed compact smooth conserved profiles of the class of [[def-em-steady-current-regime]](b) with linkage matrix $L$ as in [[pthm-em-inductance-reciprocity]], then $W(t)\ge0$ for all currents, and evaluating the quadratic form on both $(\sqrt{L_2},-\sqrt{L_1})$ and $(\sqrt{L_2},+\sqrt{L_1})$ gives the bound
$$|M|\le\sqrt{L_1L_2};$$
moreover if $M=s\sqrt{L_1L_2}$ with $s\in\{+1,-1\}$ (perfect linkage), the null direction $I=(\sqrt{L_2},-s\sqrt{L_1})$ has $J_I=0$ pointwise by the vanishing clause of [[pthm-em-inductance-reciprocity]](c).

(c) [Ideal common-flux model] if $M=\sqrt{L_1L_2}$, choose any $\Lambda>0$ in henries and set $N_1:=\sqrt{L_1/\Lambda}$, $N_2:=\sqrt{L_2/\Lambda}$; then $L_1=\Lambda N_1^2$, $L_2=\Lambda N_2^2$ and $M=\Lambda N_1N_2$. Writing $\Phi_c:=\Lambda(N_1I_1+N_2I_2)$ for the common flux linkage, the terminal voltages are
$$V_1=N_1\dot\Phi_c,\qquad V_2=N_2\dot\Phi_c,\qquad\text{i.e.}\qquad \frac{V_1}{N_1}=\frac{V_2}{N_2}=\dot\Phi_c,$$
and the stored energy is $W=\Phi_c^2/(2\Lambda)$; equivalently the induced emfs $e_\alpha:=-V_\alpha$ satisfy $e_1/N_1=e_2/N_2=-\dot\Phi_c$. Here $N_1,N_2>0$ are dimensionless real effective winding factors, rather than asserted integer turn counts; $\Phi_c$ has unit Wb. This is the explicitly adopted common-linkage ('ideal transformer') model with effective ratio $N_1:N_2$.

(d) [Limitations] for an imperfect realized linkage, $|M|<\sqrt{L_1L_2}$, the perfect common-flux voltage ratio is not an identity for all current histories; a particular history can nevertheless satisfy that ratio accidentally (including both voltages zero). Reversing the second winding retains $s=-1$: with $M=s\sqrt{L_1L_2}$ put $\Phi_c=\Lambda(N_1I_1+sN_2I_2)$ and obtain $V_1/N_1=V_2/(sN_2)=\dot\Phi_c$, with the same energy $\Phi_c^2/(2\Lambda)$. The positive-orientation model (c) remains as stated. Winding resistance, hysteresis and core loss, stray capacitance, magnetising current and finite permeability are outside the declared model and are not inferred from it. No measurement is involved; the statements are conditional computations in the ideal model. Regularity on a non-open interval uses the stated $C^1$ neighbourhood extension; if the interval is a singleton its terminal-voltage jets are those of a specified extension, not derivatives inferred from its value restriction.

## Verification

**Proof technique:** direct expansion, the reciprocity theorem, and an explicit derivative-vector contradiction for the strict-linkage non-identity.

**Given:** The lumped model data, the constant symmetric block $L=\begin{pmatrix}L_1&M\\M&L_2\end{pmatrix}$ with $L_1,L_2>0$, the interval $J$, the $C^1$ currents $I_1,I_2$ with open-neighbourhood extension, the terminal voltages $V_\alpha=\sum_\beta L_{\alpha\beta}\dot I_\beta$ and $\mathrm{AC}_\omega$ for clauses (b).

[A1] Countable Choice, written $\mathrm{AC}_\omega$, says every sequence of nonempty sets has a choice function. ([[def-countable-choice]]).

[F1] The adopted lumped model carries the Faraday branch relation $V=L\dot I$: each terminal potential is the rate of change of the branch flux linkage $LI$; the matrix and terminal data are declared model data. ([[post-em-circuit-approximation]]).

[F2] For constant symmetric $L$ and a $C^1$ current $I$ with open-neighbourhood extension, $\int_{t_0}^{t_1}\langle V,I\rangle\,dt=\frac12\langle I(t_1),LI(t_1)\rangle-\frac12\langle I(t_0),LI(t_0)\rangle$ with $V=L\dot I$, and for a smooth compact conserved-profile realization the quadratic form equals the frozen magnetic field energy $\frac1{2\mu_0}\int|B_{J_I(t)}|^2$ at each time. ([[pthm-em-inductor-energy]]).

[F3] For fixed compact smooth conserved profiles $j_1,\dots,j_n$ with linkage matrix $L=(L_{\alpha\beta})$ one has $U(I)=\frac12\int\langle J_I,A_{J_I}\rangle=\frac12\sum_{\alpha,\beta}L_{\alpha\beta}I_\alpha I_\beta=\frac1{2\mu_0}\int|B_{J_I}|^2\ge0$, and $U(I)=0$ exactly when $J_I=\sum_\alpha I_\alpha j_\alpha=0$ pointwise; the matrix is positive definite exactly when the profiles are pointwise linearly independent. ([[pthm-em-inductance-reciprocity]]).

[F4] The compact smooth current class consists of the currents $J\in C_c^\infty(\Omega;\mathbb R^3)$ with $\operatorname{div}J=0$, extended by zero to $\mathbb R^3$. ([[def-em-steady-current-regime]]).

[F5] The Euclidean inner product is $\langle x,y\rangle=\sum_kx_ky_k$; in particular for $I=(I_1,I_2)$ and the block $L$ one has $\langle I,LI\rangle=L_1I_1^2+2MI_1I_2+L_2I_2^2$. ([[def-euclidean-inner-product]]).

[F6] Sums, scalar multiples and products of differentiable functions are differentiable, with the sum, scalar and product rules. ([[thm-algebra-of-derivatives]]).

[F7] The SI units are those of the framework: $V$ in volts, $I$ in amperes, $t$ in seconds, $L$ in henries and $M$ in henries. ([[def-em-si-conventions]]).

1.1 Clause (a): by [F5], $\frac12\langle I(t),LI(t)\rangle=\frac12L_1I_1^2+MI_1I_2+\frac12L_2I_2^2$, which is the displayed $W(t)$. Differentiating termwise with the product and scalar rules of [F6] gives $\dot W=L_1I_1\dot I_1+M(\dot I_1I_2+I_1\dot I_2)+L_2I_2\dot I_2=(L_1\dot I_1+M\dot I_2)I_1+(M\dot I_1+L_2\dot I_2)I_2=V_1I_1+V_2I_2$, since $[L\dot I]_\alpha=V_\alpha$; the sign reading of the mutual term is immediate from $W=\frac12L_1I_1^2+\frac12L_2I_2^2+MI_1I_2$ for $M>0$. [F1, F2, F5, F6, algebra]

1.2 Clause (b): under the realization hypothesis, $W(t)=\frac12\sum_{\alpha,\beta}L_{\alpha\beta}I_\alpha(t)I_\beta(t)=U(I(t))\ge0$ at each $t$ by [F3], the block $L$ being by hypothesis the linkage matrix of the two profiles. Substituting $I=(\sqrt{L_2},-\sqrt{L_1})$ gives $W=L_1L_2-M\sqrt{L_1L_2}\ge0$, that is $M\le\sqrt{L_1L_2}$; substituting $I=(\sqrt{L_2},+\sqrt{L_1})$ gives $W=L_1L_2+M\sqrt{L_1L_2}\ge0$, that is $M\ge-\sqrt{L_1L_2}$; together, $|M|\le\sqrt{L_1L_2}$. If $M=s\sqrt{L_1L_2}$ and $I=(\sqrt{L_2},-s\sqrt{L_1})$, the same expansion gives $W=L_1L_2-sM\sqrt{L_1L_2}=L_1L_2-L_1L_2=0$, so by the vanishing clause of [F3] the associated current $J_I$ vanishes pointwise. [A1, F3, F4, algebra, cases]

1.3 Clause (c): with $N_1=\sqrt{L_1/\Lambda}$ and $N_2=\sqrt{L_2/\Lambda}$ one has $L_1=\Lambda N_1^2$, $L_2=\Lambda N_2^2$ and $M=\sqrt{L_1L_2}=\Lambda N_1N_2$ because $N_1N_2=\sqrt{L_1L_2}/\Lambda$. Hence, using $V_\alpha=\sum_\beta L_{\alpha\beta}\dot I_\beta$, $V_1=L_1\dot I_1+M\dot I_2=\Lambda N_1(N_1\dot I_1+N_2\dot I_2)=N_1\dot\Phi_c$ and $V_2=M\dot I_1+L_2\dot I_2=\Lambda N_2(N_1\dot I_1+N_2\dot I_2)=N_2\dot\Phi_c$ with $\Phi_c=\Lambda(N_1I_1+N_2I_2)$; dividing by $N_1,N_2>0$ gives the common ratio, and $e_\alpha=-V_\alpha$ reverses the common sign. For the energy, $W=\frac12L_1I_1^2+MI_1I_2+\frac12L_2I_2^2=\frac12\Lambda(N_1I_1+N_2I_2)^2=\Phi_c^2/(2\Lambda)$ by the displayed relations and the binomial expansion. [F5, F6, algebra]

1.4 Clause (d), strict-linkage non-identity: suppose $|M|<\sqrt{L_1L_2}$ and $V_2=kV_1$ held for all $C^1$ currents on $J$; then $\sum_\beta L_{2\beta}\dot I_\beta=k\sum_\beta L_{1\beta}\dot I_\beta$ for every such current. Fix any point $t_0\in J$ (any point when $J$ is a singleton) and, for each vector $a=(a_1,a_2)\in\mathbb R^2$, take the affine history $I(t)=c+(t-t_0)a$ (any fixed $c\in\mathbb R^2$) on $J$, which is the restriction of the affine map of $t$ on $\mathbb R$ and hence carries the stated $C^1$ open-neighbourhood extension with $\dot I\equiv a$; substituting gives $(L_{21}-kL_{11})a_1+(L_{22}-kL_{12})a_2=0$ for all $a$, hence $L_{21}=kL_{11}$ and $L_{22}=kL_{12}$, i.e. $\operatorname{row}_2L=k\operatorname{row}_1L$. Then $L_1k=M$ and $L_2=kM=M^2/L_1$, so $L_1L_2-M^2=0$, contradicting $L_1L_2-M^2>0$ from $|M|<\sqrt{L_1L_2}$; hence no such $k$ makes the ratio a universal identity. Accidental satisfaction occurs: any history with $\dot I$ in the kernel of the nonzero functional $a\mapsto(L_{21}-kL_{11})a_1+(L_{22}-kL_{12})a_2$ satisfies $V_2=kV_1$ at every time, that kernel containing the nonzero vector $(L_{22}-kL_{12},-(L_{21}-kL_{11}))$ because the row difference is nonzero; in particular the constant currents give $V_1=V_2=0$. For the reversed winding with $M=s\sqrt{L_1L_2}$, put $\Phi_c=\Lambda(N_1I_1+sN_2I_2)$; then $V_1=L_1\dot I_1+M\dot I_2=\Lambda N_1(N_1\dot I_1+sN_2\dot I_2)=N_1\dot\Phi_c$ and $V_2=M\dot I_1+L_2\dot I_2=\Lambda sN_2(N_1\dot I_1+sN_2\dot I_2)=sN_2\dot\Phi_c$ because $s^2=1$, so $V_1/N_1=V_2/(sN_2)=\dot\Phi_c$, and $W=\frac12\Lambda(N_1I_1+sN_2I_2)^2=\Phi_c^2/(2\Lambda)$. [F5, F6, algebra, cases]

2.1 Steps 1.1-1.4 establish (a)-(d): steps 1.1-1.2 give (a) and the bound and null-direction clauses of (b), and steps 1.3-1.4 give the common-flux model (c) and the limitations (d). The computation is conditional on the adopted lumped model [F1], its units are [F7], and no leakage, loss, material or measurement claim is added; the terminal-voltage jets on a singleton interval are those of the specified extension. Countable Choice is used only through the realization clause (b), via [F3]; the algebraic clauses (a), (c) and (d) are choice-free. [A1, F1, F7, step 1.1, step 1.2, step 1.3, step 1.4] ∎

## Source notes

Fitzpatrick §7.4, printed pp. 222-225, computes the two-solenoid mutual inductance and records perfect linkage $M=\sqrt{L_1L_2}$ with the leakage warning; Griffiths §7.2.3, printed pp. 310-317, derives reciprocity and the Neumann formula; Tong §4.1.2, printed pp. 71-73, gives the single-coil energy and its field-energy representation; the mutual term here is obtained by local expansion of the linkage quadratic form. The example separates what is proved for the declared smooth compact profiles (the PSD bound and the null direction) from what is adopted as the common-flux ideal-transformer model, and it proves the failure of a universal voltage ratio under strict linkage by exhibiting the forced row proportionality and its contradiction; no physical transformer behaviour, loss mechanism or measurement is asserted.
