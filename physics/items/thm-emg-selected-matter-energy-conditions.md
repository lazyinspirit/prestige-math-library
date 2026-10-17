---
id: thm-emg-selected-matter-energy-conditions
kind: theorem
title: EM, dust and perfect-fluid energy inequalities
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
proof_strategy: direct
deps:
  - def-emg-matter-formal-systems
  - def-emg-pointwise-energy-conditions
  - def-gr-smooth-lorentzian-objects
  - def-emg-lorentzian-forms
  - lem-gr-observer-projection-decomposition
dependency_roles:
  def-emg-matter-formal-systems: mathematical-premise
  def-emg-pointwise-energy-conditions: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
forward_refs: [ex-emgmath-ml-b03]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), §1.4.1, equation (1.111), PDF p. 36 (printed p. 30)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Maxwell stress tensor convention; its energy-condition derivations are not substituted for the local component proof here."
    - title: "David Tong, General Relativity, full author-hosted lecture notes, 2019, §§4.5.3–4.5.4 and §4.5.7, equations (4.52)–(4.55), (4.60)–(4.62), PDF pp. 190–194 and 201–204 (printed pp. 183–187 and 194–197)"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "Maxwell and perfect-fluid tensors, and WEC, NEC, SEC, DEC definitions and perfect-fluid conditions. Tong's SEC curvature form is related to the trace-reversed tensor through Einstein's equation; no Einstein equation is assumed in this mathematical theorem."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Use the energy-condition definitions of [[def-emg-pointwise-energy-conditions]] and the matter and Maxwell tensor definitions of [[def-emg-matter-formal-systems]]. At every point of an oriented time-oriented Lorentzian domain, the Maxwell tensor $T_{\mathrm{EM}}$ of that definition is symmetric, trace-free, and satisfies WEC, NEC, SEC and DEC. Its observer energy density and energy flux in a positively oriented orthonormal rest frame are

$$u=\frac{|E|^2/c^2+|B|^2}{2\mu_0},\qquad \frac{E\times B}{\mu_0c},$$

and the DEC flux is future causal or zero. A charged-dust tensor with $\rho\ge0$ satisfies all four conditions. For a perfect-fluid tensor with rest energy density $\epsilon$ and pressure $p$, the exact pointwise conditions are

$$\mathrm{WEC}\iff \epsilon\ge0\text{ and }\epsilon+p\ge0,\quad \mathrm{NEC}\iff\epsilon+p\ge0,$$

$$\mathrm{SEC}\iff\epsilon+p\ge0\text{ and }\epsilon+3p\ge0,\quad \mathrm{DEC}\iff\epsilon\ge|p|.$$

At a point, finite sums of tensors satisfying any one of these conditions still satisfy that condition; in particular $T_{\mathrm{EM}}+T_m$ satisfies all four for nonnegative dust. No general matter positivity assumption is made, and adding $T_{\mathrm{EM}}$ to an arbitrary fluid need not repair a violated fluid inequality.

## Facts & Assumptions

**Given:** A smooth Lorentzian metric and the tensors, observer, field, and energy-condition definitions of [[def-emg-matter-formal-systems]]. For dust, assume $\rho\ge0$; for a perfect fluid, use the displayed rest-frame tensor with real $\epsilon,p$.

[F1] [[def-emg-matter-formal-systems]]: $T_{\mathrm{EM}}^{ab}=\mu_0^{-1}(F^{ac}F^b{}_c-\tfrac14g^{ab}F_{cd}F^{cd})$; the observer convention is $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$; the matter tensors have the displayed dust and perfect-fluid forms.

[F2] [[def-emg-pointwise-energy-conditions]]: WEC, NEC, SEC and DEC have the exact pointwise definitions used in the Statement; in particular DEC requires $-T^a{}_bv^b$ to be future causal or zero for every future timelike $v$.

[F3] [[def-gr-smooth-lorentzian-objects]], [[def-emg-lorentzian-forms]] and [[lem-gr-observer-projection-decomposition]]: each tangent space has signature $(-,+,+,+)$; a future unit observer $n$ has a positive-definite rest space $n^\perp$, so choosing an orthonormal basis there and orienting it gives a positively oriented orthonormal basis with time vector $n$. The time orientation selects the future cone.

[A1] Dust uses $\rho\ge0$ only in the dust clauses. No sign restriction is assumed for $\epsilon$ or $p$ before deriving the perfect-fluid equivalences.

## Proof

1.1 In a positively oriented orthonormal frame with future unit time vector $n=e_0$, the convention in [F1] gives $F_{0i}=-E_i/c$, $F_{ij}=\epsilon_{ijk}B_k$, and $F_{ab}F^{ab}=2(|B|^2-|E|^2/c^2)$. Substitution in the tensor formula yields $T^{00}_{\mathrm{EM}}=u$ and $T^{0i}_{\mathrm{EM}}=\epsilon_{ijk}E_jB_k/(\mu_0c)$. Symmetry follows because $g_{cd}F^{ac}F^{bd}$ is symmetric in $a,b$; its trace is $\mu_0^{-1}(F_{cd}F^{cd}-\tfrac14\cdot4F_{cd}F^{cd})=0$. [F1, F3, algebra]

1.2 In a fluid rest frame $T^{ab}=\operatorname{diag}(\epsilon,p,p,p)$. For a future timelike vector $v=(v^0,\mathbf v)$, $v^0>|\mathbf v|$, its quadratic form is $T(v,v)=\epsilon((v^0)^2-|\mathbf v|^2)+(\epsilon+p)|\mathbf v|^2$. Thus $\epsilon\ge0$ and $\epsilon+p\ge0$ suffice for WEC; past timelike vectors give the same value as their negatives. Necessity follows by taking $v=(1,0,0,0)$, which forces $\epsilon\ge0$, and then $v=(1,r,0,0)$ with $r\uparrow1$: if $\epsilon+p<0$, the displayed value tends to that negative number, so is negative for some $r<1$. For a nonzero future null $\ell$, $T(\ell,\ell)=(\epsilon+p)|\boldsymbol\ell|^2$, so NEC is equivalent to $\epsilon+p\ge0$. [F1, F2, F3, algebra]

1.3 The mixed tensor of the perfect fluid is $T^a{}_b=\operatorname{diag}(-\epsilon,p,p,p)$ in the same frame. Hence $-T^a{}_bv^b=(\epsilon v^0,-p\mathbf v)$. If $\epsilon\ge|p|$, then its time component is nonnegative and its squared norm is $-\epsilon^2(v^0)^2+p^2|\mathbf v|^2\le-\epsilon^2((v^0)^2-|\mathbf v|^2)\le0$; it is therefore future causal or zero for every $v^0>|\mathbf v|$. Conversely the rest vector forces $\epsilon\ge0$, while requiring the vector to be causal for $(1,r,0,0)$ gives $\epsilon^2-p^2r^2\ge0$ for every $0<r<1$. Letting $r\uparrow1$ yields $\epsilon\ge|p|$. This proves DEC iff $\epsilon\ge|p|$. [F1, F2, F3, algebra]

2.1 Put $a=E/c$ and $b=B$. For any future unit observer used as the time vector of such a frame, the observer energy current $-T^a{}_bn^b$ has components $(u,(a\times b)/\mu_0)$. The component identity $|a\times b|^2=|a|^2|b|^2-(a\cdot b)^2$ and $(|a|-|b|)^2\ge0$ give $|a\times b|/\mu_0\le |a||b|/\mu_0\le (|a|^2+|b|^2)/(2\mu_0)=u$. Its time component is nonnegative and its squared norm is $-u^2+|a\times b|^2/\mu_0^2\le0$, so it is future causal or zero for every future unit observer. Every future timelike $v$ is a positive multiple of a future unit vector; the current scales by that same positive factor, proving DEC for all such $v$. [step 1.1, F1, F3, algebra]

2.2 The trace is $-\epsilon+3p$. The trace-reversed tensor $T_{ab}-\tfrac12(g^{cd}T_{cd})g_{ab}$ has rest energy density $(\epsilon+3p)/2$ and pressure $(\epsilon-p)/2$. Applying the WEC equivalence from step 1.2 to this tensor gives SEC iff $\epsilon+3p\ge0$ and $\epsilon+p\ge0$. [step 1.2, F1, F2, algebra]

3.1 For a future timelike $v$, DEC gives a future-causal $J^a=-T^a{}_bv^b$. In the rest frame of $v$, $v=(v^0,0,0,0)$ with $v^0>0$ and $J^0\ge0$, so $T_{ab}v^av^b=-g(J,v)=v^0J^0\ge0$; this proves WEC for future timelike vectors, and $T(-v,-v)=T(v,v)$ proves it for past timelike vectors too. For a nonzero future null $\ell$, vectors $\ell+\delta n$ are future timelike for every $\delta>0$ and tend to $\ell$, so continuity of the quadratic form proves NEC. Since $T_{\mathrm{EM}}$ has zero trace by step 1.1, its trace-reversed tensor equals itself; SEC is therefore WEC. [step 1.1, step 2.1, F1, F2, F3, algebra]

3.2 For dust, write $\epsilon=\rho c^2$ and $p=0$; then $T_m^{ab}=\epsilon U^aU^b/c^2$ is the perfect-fluid tensor. Steps 1.2–3.1 give all four conditions because $\rho\ge0$. [A1, step 1.2, step 1.3, step 2.2, algebra]

4.1 For a finite family, the future causal cone in an orthonormal frame consists of $(t,\mathbf x)$ with $t\ge|\mathbf x|$. If $J_i=(t_i,\mathbf x_i)$ lie in this cone, then $\sum_i t_i\ge\sum_i|\mathbf x_i|\ge|\sum_i\mathbf x_i|$, so their sum is future causal. Since the DEC current is linear in $T$, finite sums preserve DEC. The WEC and NEC inequalities are linear in $T$, and trace reversal is linear in $T$, so finite sums preserve WEC, NEC and SEC as well. Therefore the Maxwell and nonnegative-dust conclusions add. [step 2.1, step 3.1, step 3.2, F2, F3, algebra] ∎
## Remarks

- The strong condition here is defined on the trace-reversed tensor and uses no Einstein field equation. This avoids importing a physical postulate into a mathematical statement.
- The vector $E\times B/(\mu_0c)$ in the Statement is the spatial component of the observer energy-current, with SI units $\mathrm{J\,m^{-3}}$. The physical SI energy-flux vector is $E\times B/\mu_0$, in $\mathrm{W\,m^{-2}}$; it is $c$ times that current component.
- A magnetic field parallel to one spatial axis has principal stresses $(u,u,-u)$; Example [[ex-emgmath-ml-b03]] verifies the anisotropy and its consequence for perfect-fluid form.
