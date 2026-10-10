---
id: ex-sr-low-speed-expansion-at-beta-one-fifth
kind: example
domain: physics
title: 'Worked low-speed correspondence at $|w|=c/5$'
status: draft
origin: session
dependency_level: 17
deps: [pthm-sr-newtonian-p-e-correspondence, lem-sr-uniform-low-speed-expansion-of-observer-quantities, lem-sr-uniform-low-speed-taylor-remainder, lem-sr-energy-momentum-observer-identities, thm-sr-proper-time-and-observer-decomposition, def-sr-newtonian-comparison-quantities, def-rational-power, lem-rational-power-laws]
dependency_roles:
  pthm-sr-newtonian-p-e-correspondence: physical-result
  lem-sr-uniform-low-speed-expansion-of-observer-quantities: mathematical-premise
  lem-sr-uniform-low-speed-taylor-remainder: mathematical-premise
  lem-sr-energy-momentum-observer-identities: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-sr-newtonian-comparison-quantities: formulation-prerequisite
  def-rational-power: mathematical-premise
  lem-rational-power-laws: mathematical-premise
aliases: []
landmark: false
proof_strategy: direct
physical_scope: 'Numerical specialisation of pthm-sr-newtonian-p-e-correspondence for a single massive particle state with |w|=c/5 in a named inertial frame of the flat model, in SI conventions. The displayed decimals are rounded values of exact radical expressions, not measurements; no experimental value, uncertainty or precision claim is made, and no other state or frame is covered.'
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: 'B. Crowell, Special Relativity, revision 2020-12-10 (author-published undergraduate textbook, 246 PDF pages); signature (+---) converted to (-+++) and c = 1 formulas restored to x^0 = c t; Section 4.2 pp. 82-86 (relativistic kinetic energy; Example 5 p. 86, the Newtonian prediction eV = (1/2)mv^2), Section 4.3.3 Example 8 p. 91 (the Newtonian limit v = p/m), Section 4.3.4 p. 96 (p = m gamma v; the momentum of a material particle approaches infinity as its speed approaches c) and problems 11-12 p. 116 (expand K = m(gamma-1) and p = m gamma v in Taylor series; show the first terms are the nonrelativistic expressions)'
      url: 'https://archive.org/download/sr_20220102/sr.pdf'
    - title: 'S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997); signature (-+++) with c = 1. Chapter 1 printed p. 27, equations (1.98)-(1.101) (PDF p. 34): for small v, p^0 = m + (1/2)mv^2 (rest energy plus kinetic energy) and p^1 = mv (Newtonian momentum); Chapter 4 printed pp. 105-106 (PDF pp. 112-113): the Newtonian limit, the slow-motion condition (4.10) and the weak static field'
      url: 'https://arxiv.org/pdf/gr-qc/9712019'
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Example

Specialise [[pthm-sr-newtonian-p-e-correspondence]] to one massive particle of mass $m>0$ whose coordinate velocity $w$ in a named inertial frame satisfies $|w|/c=1/5$, so that $z=1/25$ and $z_0=z$. Then $\gamma_w=(1-1/25)^{-1/2}=5/\sqrt{24}=5\sqrt6/12\approx1.0206207262$ and $K(z_0)=\tfrac38(25/24)^{5/2}\approx0.4152916366$ ([[def-rational-power]], [[lem-rational-power-laws]]); all decimals below are rounded and all inequalities are between the exact expressions.

(a) [Rate of the expansion at $z=1/25$] $\gamma_w-1-\tfrac z2=5\sqrt6/12-51/50\approx0.0006207262$, while the bound of [[lem-sr-uniform-low-speed-taylor-remainder]] is $K(z_0)z^2=\tfrac38(25/24)^{5/2}/625\approx0.0006644666$, so the remainder bound holds. Precisely, the fractional overestimate of the positive remainder is $K(z_0)z^2/R(z)-1\approx0.0704665951$, about $7\%$.

(b) [Energy and kinetic energy] $E_n(P)-mc^2=mc^2(5\sqrt6/12-1)\approx0.0206207262\,mc^2$ while $N_K(m,w)=\tfrac1{50}mc^2=0.02\,mc^2$; the deviation $\approx0.0006207262\,mc^2$ obeys the bound $K(z_0)z\,m|w|^2=mc^2K(z_0)z^2\approx0.0006644666\,mc^2$ (all in units of $mc^2$).

(c) [Momentum] $|q_n(P)|=m\gamma_w|w|=\tfrac{\sqrt6}{12}mc\approx0.2041241452\,mc$ while $|N_p(m,w)|=mc/5=0.2\,mc$; the deviation is $\approx0.0041241452\,mc$ against the bound $(\tfrac12+K(z_0)z)z\,mc/5\approx0.0041328933\,mc$.

(d) [Momentum-to-velocity inversion] $|w-q_n(P)/m|/|w|=\gamma_w-1=5\sqrt6/12-1\approx0.0206207262$, within the bound $(\tfrac12+K(z_0)z)z\approx0.0206644666$ of clause (d) of the theorem.

The state is admissible: $z=1/25<1$, and $w$ of norm $c/5$ is realized in a frame chart by the hypothesis; the case $|w|=c$ is not considered, and the numbers carry no empirical content.

## Facts & Assumptions

**Given:** A massive particle state $P=mU$ of [[pthm-sr-newtonian-p-e-correspondence]] with constant $m>0$ in a named inertial frame, with coordinate velocity $w$ satisfying $|w|/c=1/5$, so $z=|w|^2/c^2=1/25$ and the speed bound $z_0=z$.

[L1] The correspondence theorem at the state, for $z_0=z=1/25$ and $K(z_0)=\tfrac38(1-z_0)^{-5/2}$: $E_n(P)=mc^2+N_K(m,w)+R_E$ with $|R_E|\le K(z_0)zm|w|^2$; $T_n(P)=N_K(m,w)+R_E$ with $|T_n(P)-N_K(m,w)|\le2K(z_0)zN_K(m,w)$; $q_n(P)=N_p(m,w)+R_q$ with $|R_q|\le(\tfrac12+K(z_0)z_0)z|N_p(m,w)|$; $w=q_n(P)/(m\gamma_w)$ and $|w-q_n(P)/m|=(\gamma_w-1)|w|\le(\tfrac12+K(z_0)z_0)z|w|$ ([[pthm-sr-newtonian-p-e-correspondence]]\,(a)-(d)).

[L2] The uniform Taylor remainder: $\gamma_w=(1-z)^{-1/2}$, $\gamma_w-1=\tfrac z2+R(z)$ and $|R(z)|\le K(z_0)z^2$ ([[lem-sr-uniform-low-speed-taylor-remainder]]).

[L3] The observer identities: $E_n(P)=mc^2\gamma_w$, $T_n(P)=mc^2(\gamma_w-1)$ and $|q_n(P)|=mc\sqrt{\gamma_w^2-1}=m\gamma_w|w|$ ([[lem-sr-energy-momentum-observer-identities]]\,(b)).

[L4] The comparison quantities: $N_K(m,w)=\tfrac12m|w|^2$ and $N_p(m,w)=mw$, so $|N_p(m,w)|=m|w|$ ([[def-sr-newtonian-comparison-quantities]]).

[L5] The Lorentz factor of the state's coordinate velocity: $\gamma_w=(1-|w|^2/c^2)^{-1/2}$ ([[thm-sr-proper-time-and-observer-decomposition]]\,(e)).

[L6] Rational powers: $(a/b)^{-1/2}=(b/a)^{1/2}=b^{1/2}a^{-1/2}$ for $a,b>0$, $(25/24)^{5/2}=(25/24)^2(25/24)^{1/2}$, and $(24/25)^{1/2}=\sqrt{24}/5=2\sqrt6/5$ ([[def-rational-power]], [[lem-rational-power-laws]]).



## Verification

**Proof technique:** direct.

1.1 The numeric data. With $z=1/25$ and $z_0=z$, [L5] and [L6] give $$\gamma_w=\Bigl(\tfrac{24}{25}\Bigr)^{-1/2}=\Bigl(\tfrac{25}{24}\Bigr)^{1/2}=\frac{5}{\sqrt{24}}=\frac{5}{2\sqrt6}=\frac{5\sqrt6}{12},$$ and $K(z_0)=\tfrac38(25/24)^{5/2}$; the statement records the ten-place rounded values of these exact expressions. [given, L5, L6, algebra]

2.1 Clause (a). By [L2] with $z=1/25$, the exact remainder and the exact bound are $$\gamma_w-1-\frac z2=R(z)=\frac{5\sqrt6}{12}-\frac{51}{50},\qquad K(z_0)z^2=\frac38\Bigl(\frac{25}{24}\Bigr)^{5/2}\frac1{625},$$ the remainder is positive because $\gamma_w^2=25/24>(51/50)^2$ (cross multiplication gives $62500>62424$) and both quantities are positive by [L5], so $(\gamma_w-51/50)(\gamma_w+51/50)>0$ with positive second factor, hence $\gamma_w>51/50$; its absolute value is at most the bound by [L2], and the statement records the ten-place rounded values of the two exact expressions and of the fractional overestimate $K(z_0)z^2/R(z)-1$. [step 1.1, L2, L5, algebra]

2.2 Clause (c). By [L3] and [L4], $|q_n(P)|=m\gamma_w|w|=m\cdot\tfrac{5\sqrt6}{12}\cdot\tfrac c5=\tfrac{\sqrt6}{12}mc$ and $|N_p(m,w)|=m|w|=mc/5$, so the exact deviation is $mc(\sqrt6/12-1/5)$; the bound of [L1] clause (c) is $$\Bigl(\frac12+K(z_0)z\Bigr)z\,\frac{mc}5=\Bigl(\frac12+\frac{K(z_0)}{25}\Bigr)\frac1{25}\frac{mc}5,$$ and it dominates the deviation; the statement records the ten-place rounded values of both exact expressions. [step 1.1, L1, L3, L4, algebra]

2.3 Clause (d). By [L1], $w=q_n(P)/(m\gamma_w)$ exactly and $|w-q_n(P)/m|=(\gamma_w-1)|w|$, so the relative deviation is $\gamma_w-1=5\sqrt6/12-1$, which by [L1] clause (d) is at most $(\tfrac12+K(z_0)z)z=(\tfrac12+K(z_0)/25)/25$; the statement records the ten-place rounded values of these two exact expressions. [step 1.1, L1, algebra]

3.1 Clause (b). By [L1] and [L3], $E_n(P)-mc^2=mc^2(\gamma_w-1)=mc^2(5\sqrt6/12-1)$ and $N_K(m,w)=\tfrac12m(c/5)^2=mc^2/50$, so the exact deviation is $mc^2(\gamma_w-1-\tfrac1{50})=mc^2(5\sqrt6/12-51/50)$, which is the remainder of step 2.1 and obeys the bound $K(z_0)zm|w|^2=mc^2K(z_0)z^2$ of [L1] clause (a); the statement records the ten-place rounded values of the deviation and of this bound. [step 1.1, step 2.1, L1, L3, L4, algebra]

4.1 Conclusion of the worked instance. The state satisfies the hypotheses of [[pthm-sr-newtonian-p-e-correspondence]] with $z=1/25<1$ and $z_0=z$; clauses (a)-(d) have been evaluated at the exact radical values $\gamma_w=5\sqrt6/12$ and $K(z_0)=\tfrac38(25/24)^{5/2}$, every displayed inequality of the statement is the corresponding exact inequality of [[lem-sr-uniform-low-speed-taylor-remainder]] or of the correspondence theorem at this data, and the decimals are the ten-place roundings of the displayed exact expressions. The numbers are a numerical illustration of the conditional correspondence for this one state and carry no empirical content or precision claim. [step 2.1, step 3.1, step 2.2, step 2.3, given] ∎
