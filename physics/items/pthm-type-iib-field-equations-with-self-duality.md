---
id: pthm-type-iib-field-equations-with-self-duality
kind: physics-theorem
title: Type IIB Field Equations with Five Form Self Duality
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 11
domain: physics
library: physics
deps:
- def-supergravity-conventions-and-normalizations
- post-type-iib-two-derivative-supergravity-pseudoaction
- post-type-iib-fiveform-self-duality-constraint
- lem-type-iib-weighted-einstein-hilbert-variation
- lem-type-iib-pform-kinetic-metric-variation
- lem-type-iib-local-variation-test
- pthm-type-iib-bianchi-identities
- def-type-iib-lorentzian-hodge-star
- thm-type-iib-lorentzian-hodge-star-properties
- thm-the-exterior-derivative-squares-to-zero
- thm-the-exterior-derivative-is-a-graded-derivation
- thm-wedge-product-is-associative-and-graded-commutative
- lem-supergravity-compact-metric-variation
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-type-iib-two-derivative-supergravity-pseudoaction: physical-assumption
  post-type-iib-fiveform-self-duality-constraint: physical-assumption
  lem-type-iib-weighted-einstein-hilbert-variation: mathematical-premise
  lem-type-iib-pform-kinetic-metric-variation: mathematical-premise
  lem-type-iib-local-variation-test: mathematical-premise
  pthm-type-iib-bianchi-identities: physical-result
  def-type-iib-lorentzian-hodge-star: mathematical-premise
  thm-type-iib-lorentzian-hodge-star-properties: mathematical-premise
  thm-the-exterior-derivative-squares-to-zero: mathematical-premise
  thm-the-exterior-derivative-is-a-graded-derivation: mathematical-premise
  thm-wedge-product-is-associative-and-graded-commutative: mathematical-premise
  lem-supergravity-compact-metric-variation: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free
      notation, arXiv:1607.00327v3
    url: https://arxiv.org/pdf/1607.00327v3
    locator: §7.1, Theorem 7.2(a)–(f), printed pp. 37–39; full action variations are reconstructed below.
  - title: 'Colin Sterckx, Modave Lecture notes: Introduction to Exceptional Field Theory, arXiv:2410.19600v1'
    url: https://arxiv.org/pdf/2410.19600v1
    locator: §3.2.3, equations (3.33)–(3.35), PDF pp. 31–32; independent Einstein-frame field basis and equations, translated
      with the explicit Weyl and dilaton conventions.
physical_scope: Conditional local source-free classical field equations of the selected massless two-derivative type IIB bosonic
  pseudoaction. Potentials and variations are smooth on a contractible patch and variations are compactly supported. No brane
  currents, loop or higher-derivative corrections, global flux quantization, or empirical claim is included.
aliases: []
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $U\subseteq\mathbb R^{10}$ be a contractible oriented coordinate patch, and use the field strengths, string-frame metric, norms, and curvature convention of *Type IIB Two Derivative Supergravity Pseudoaction* and *Supergravity Conventions And Normalizations*. A compactly supported independent variation means a jointly smooth family $(g_s(t),\Phi(t),B_2(t),C_0(t),C_2(t),C_4(t))$ for $t$ near $0$, equal to its value at $0$ outside one common compact set $K\subset U$, with $g_s(t)$ Lorentzian of inertia $(9,1,0)$. Each field is varied separately while the other five are held fixed; the self-duality constraint is imposed only on the stationary field configuration at $t=0$, not along the unconstrained variation. Stationarity means that each first-variation density, which is compactly supported in $K$, has zero coordinate integral. Every smooth compactly supported tangent variation is admissible by taking a linear path for the scalar, potential, or inverse metric and restricting $t$ to a sufficiently small interval. A configuration is stationary precisely when, after the separate constraint *Type IIB Five Form Self Duality Constraint*, the following source-free equations hold:

$\begin{aligned} R_{MN}-\frac12g_{MN}R={}&-2\nabla_M\nabla_N\Phi+2(\Box\Phi-|d\Phi|^2)g_{MN}\\ &+\frac12\left(\langle i_MH_3,i_NH_3\rangle-\frac12g_{MN}|H_3|^2\right)\\ &+\frac12e^{2\Phi}\left(G_{1M}G_{1N}-\frac12g_{MN}|G_1|^2\right)\\ &+\frac12e^{2\Phi}\left(\langle i_M\widetilde G_3,i_N\widetilde G_3\rangle-\frac12g_{MN}|\widetilde G_3|^2\right)+\frac14e^{2\Phi}\langle i_M\widetilde G_5,i_N\widetilde G_5\rangle,\\ \Box\Phi={}&2|d\Phi|^2-\frac12|H_3|^2+e^{2\Phi}|G_1|^2+\frac12e^{2\Phi}|\widetilde G_3|^2,\\ d*G_1={}&-H_3\wedge*\widetilde G_3,\qquad d*\widetilde G_5=H_3\wedge\widetilde G_3,\\ d*\widetilde G_3={}&-H_3\wedge\widetilde G_5,\\ d(e^{-2\Phi}*H_3)={}&\widetilde G_3\wedge\widetilde G_5+G_1\wedge*\widetilde G_3,\\ dH_3={}&0,\quad dG_1=0,\quad d\widetilde G_3=H_3\wedge G_1,\quad d\widetilde G_5=H_3\wedge\widetilde G_3,\quad *\widetilde G_5=\widetilde G_5. \end{aligned}$

Here $\nabla$ and $\Box=g^{MN}\nabla_M\nabla_N$ use the string-frame Levi-Civita connection; $|F_p|^2=F_{M_1\ldots M_p}F^{M_1\ldots M_p}/p!$; and $\langle i_MF,i_NF\rangle=F_{M A_2\ldots A_p}F_N{}^{A_2\ldots A_p}/(p-1)!$. The five-form norm vanishes under self-duality because its degree is odd; the metric equation retains the separate rank-two term $\tfrac14e^{2\Phi}\langle i_M\widetilde G_5,i_N\widetilde G_5\rangle$, which can vanish for particular fields, including $\widetilde G_5=0$. Bianchi identities and self-duality are separate from pseudoaction variation.

## Statement references

[[def-supergravity-conventions-and-normalizations]]

[[post-type-iib-two-derivative-supergravity-pseudoaction]]

[[post-type-iib-fiveform-self-duality-constraint]]

[[pthm-type-iib-bianchi-identities]]

[[def-type-iib-lorentzian-hodge-star]]

[[thm-type-iib-lorentzian-hodge-star-properties]]

[Hamilton, §7.1, Theorem 7.2](https://arxiv.org/pdf/1607.00327v3)

[Sterckx, §3.2.3, equations (3.33)–(3.35)](https://arxiv.org/pdf/2410.19600v1)

## Facts & Assumptions

**Given:** Smooth source-free fields and potentials on a contractible oriented Lorentzian ten-dimensional patch, the exact pseudoaction and norm convention in [F1], compactly supported independent variations of all six bosonic fields, and the separate five-form constraint.

[F1] [[post-type-iib-two-derivative-supergravity-pseudoaction]]: $S_{NS}=(2\kappa_0^2)^{-1}\int\operatorname{vol}_{g_s}e^{-2\Phi}(R+4|d\Phi|^2-\tfrac12|H_3|^2)$, the RR terms have coefficient $-(4\kappa_0^2)^{-1}$ and bracket $|G_1|^2+|\widetilde G_3|^2+\tfrac12|\widetilde G_5|^2$, and the Chern–Simons term is $-(4\kappa_0^2)^{-1}\int C_4\wedge H_3\wedge G_3$.

[F2] [[post-type-iib-fiveform-self-duality-constraint]]: impose $*\widetilde G_5=\widetilde G_5$ only after variation; in ten-dimensional Lorentzian signature $|\widetilde G_5|^2=0$ but the contraction $\langle i_M\widetilde G_5,i_N\widetilde G_5\rangle$ need not be zero.

[F3] [[lem-type-iib-weighted-einstein-hilbert-variation]]: for $f=e^{-2\Phi}$ and $q^{MN}=\delta g^{MN}$, the weighted curvature coefficient is $fG_{MN}+g_{MN}\Box f-\nabla_M\nabla_Nf$.

[F4] [[lem-type-iib-pform-kinetic-metric-variation]]: a term $\operatorname{vol}_g A|F_p|^2$ with metric-independent $A,F_p$ varies with coefficient $A(\langle i_MF_p,i_NF_p\rangle-\tfrac12g_{MN}|F_p|^2)$.

[F5] [[lem-type-iib-local-variation-test]]: if a continuous coordinate coefficient pairs to zero under every compactly supported test variation on an open ten-dimensional chart, it vanishes pointwise.

[F6] [[pthm-type-iib-bianchi-identities]]: the four Bianchi identities in the Statement follow from $d^2=0$ and the potential definitions; they are not Euler–Lagrange equations.

[F7] [[def-type-iib-lorentzian-hodge-star]] and [[thm-type-iib-lorentzian-hodge-star-properties]]: the star is the metric Lorentzian Hodge operator, and $*^2=1$ on five-forms.

[F8] [[thm-the-exterior-derivative-squares-to-zero]]: for every smooth form $\omega$, $d^2\omega=0$; in particular, the potential definition $G_3=dC_2$ gives $dG_3=0$.

[F9] [[thm-the-exterior-derivative-is-a-graded-derivation]] and [[thm-wedge-product-is-associative-and-graded-commutative]]: exterior differentiation obeys the graded product rule and degree exchanges have sign $(-1)^{rs}$.

[F10] [[def-supergravity-conventions-and-normalizations]]: use signature $(-,+,\ldots,+)$, the factorial p-form norm, $2\kappa_0^2=(2\pi)^7\alpha'^4$, and the declared string-frame metric and curvature conventions; $\kappa_0$ is held fixed in field variations.

[F11] [[lem-supergravity-compact-metric-variation]] states and proves the exact chart identity $\int_U\partial_MJ^M\,d^{10}x=0$ for every smooth compactly supported vector-density $J^M$ on an open chart $U$. Its proof 4.1 extends by zero to a box and uses Fubini and the one-dimensional fundamental theorem of calculus. We use that identity below for the coefficient densities of compactly supported exact top forms, not a global boundaryless Stokes theorem.

## Proof

1.1 By [F6], $dH_3=0$, $dG_1=0$, $d\widetilde G_3=H_3\wedge G_1$, and $d\widetilde G_5=H_3\wedge\widetilde G_3$. [F6]

1.2 The final equation $*\widetilde G_5=\widetilde G_5$ is the independent postulate [F2], with the Hodge operator fixed by [F7]. Its odd degree and [F9] give $\widetilde G_5\wedge\widetilde G_5=0$; the Hodge-pairing definition in [F7] then gives $|\widetilde G_5|^2=0$. This does not imply the rank-two tensor $\langle i_M\widetilde G_5,i_N\widetilde G_5\rangle$ vanishes. [F2, F7, F9, algebra]

1.3 Let $q^{MN}=\delta g^{MN}$. Apply [F3] to the $e^{-2\Phi}R$ term and [F4] to $4|d\Phi|^2$, $-|H_3|^2/2$, and each RR kinetic term, with the norm and string-frame curvature convention fixed by [F10]. Expanding $\nabla_M\nabla_N(e^{-2\Phi})=e^{-2\Phi}(4\partial_M\Phi\partial_N\Phi-2\nabla_M\nabla_N\Phi)$ and $\Box(e^{-2\Phi})=e^{-2\Phi}(4|d\Phi|^2-2\Box\Phi)$, the NS metric coefficient, after removing its common $e^{-2\Phi}$, is $G_{MN}+2\nabla_M\nabla_N\Phi-2(\Box\Phi-|d\Phi|^2)g_{MN}-\tfrac12(\langle i_MH_3,i_NH_3\rangle-\tfrac12g_{MN}|H_3|^2)$. The RR coefficient in the same normalization is $-\tfrac12e^{2\Phi}$ times the $G_1$ and $\widetilde G_3$ stress brackets, and $-\tfrac14e^{2\Phi}\langle i_M\widetilde G_5,i_N\widetilde G_5\rangle$. The Chern–Simons integral has no metric and contributes zero. [F1, F3, F4, F10, algebra]

1.4 First make the compact-support identity needed by all the following integrations explicit. In an oriented chart with coordinates $x^0,\ldots,x^9$, every smooth compactly supported nine-form has the unique expression $\beta=\sum_{M=0}^9(-1)^M J^M dx^0\wedge\cdots\wedge\widehat{dx^M}\wedge\cdots\wedge dx^9$. Coordinate differentiation gives $d\beta=(\partial_MJ^M)dx^0\wedge\cdots\wedge dx^9$, so [F11] proves $\int d\beta=0$. In particular, for an $r$-form variation $a$ of compact support and a smooth $(9-r)$-form $B$, [F9] gives $$\int da\wedge B=(-1)^{r+1}\int a\wedge dB.$$ Every exact term discarded below contains a compactly supported variation (or its derivative), so its nine-form primitive has compact support even if the background fields do not. For the scalar kinetic term, write $w=\sqrt{|\det g|}$ and use the compact vector-density $J^M=w e^{-2\Phi}\varphi g^{MN}\partial_N\Phi$. Its zero divergence integral and $\partial_M(wV^M)=w\nabla_MV^M$ give $\int w e^{-2\Phi}\langle d\Phi,d\varphi\rangle=-\int w\varphi\nabla_M(e^{-2\Phi}\nabla^M\Phi)$. Thus no compact-support boundary term is being assumed away. For a compactly supported scalar variation $\varphi=\delta\Phi$, the NS density variation before integration by parts is proportional to $e^{-2\Phi}[-2(R+4|d\Phi|^2-\tfrac12|H_3|^2)\varphi+8\langle d\Phi,d\varphi\rangle]$. Integrating the last term once gives the scalar coefficient $-2R+8|d\Phi|^2+|H_3|^2-8\Box\Phi$, or equivalently $R+4\Box\Phi-4|d\Phi|^2-\tfrac12|H_3|^2=0$. The RR terms and Chern–Simons term contain no explicit $\Phi$ in this unshifted string-frame convention. [F1, F9, F11, algebra]

2.1 Vary $C_0$ by a compactly supported scalar $u$. Then $\delta G_1=du$ and $\delta\widetilde G_3=-uH_3$. The RR variation is $-c\int[2du\wedge*G_1-2uH_3\wedge*\widetilde G_3]$, where $c=(4\kappa_0^2)^{-1}$ is held fixed by [F10]. Since $du\wedge*G_1=d(u*G_1)-u\,d*G_1$ by [F9], compact support removes the exact term and leaves $2cu\,(d*G_1+H_3\wedge*\widetilde G_3)$. Applying [F5] proves the first RR equation. [F1, F5, F9, F10, F11, step 1.4, algebra]

2.2 Vary $C_4$ by a compactly supported four-form $a_4$. Then $\delta\widetilde G_5=da_4$ and the varying action is $-c\int[da_4\wedge*\widetilde G_5+a_4\wedge H_3\wedge G_3]$. Integration by parts uses $d(a_4\wedge*\widetilde G_5)=da_4\wedge*\widetilde G_5+a_4\wedge d*\widetilde G_5$, so stationarity and [F5] yield $d*\widetilde G_5=H_3\wedge G_3=H_3\wedge\widetilde G_3$, the second equality following from $H_3\wedge H_3=0$. [F1, F5, F9, F11, step 1.4, algebra]

2.3 Vary $C_2$ by a compactly supported two-form $a_2$. The field definitions give $\delta\widetilde G_3=da_2$ and $\delta\widetilde G_5=-\tfrac12H_3\wedge a_2+\tfrac12da_2\wedge B_2$. Using [F9] to integrate the RR and Chern–Simons terms by parts yields $\delta S=c\int a_2\wedge[2d*\widetilde G_3+H_3\wedge*\widetilde G_5+\tfrac12B_2\wedge d*\widetilde G_5-G_5\wedge H_3]$. The last term is from $\delta(C_4\wedge H_3\wedge G_3)$ and keeps raw $G_5=dC_4$. [F1, F9, F11, step 1.4, algebra]

2.4 Vary $B_2$ by a compactly supported two-form $b_2$. For the Chern–Simons term, $G_3=dC_2$ and [F8] give $dG_3=d^2C_2=0$. Thus $$d(C_4\wedge b_2\wedge G_3)=G_5\wedge b_2\wedge G_3+C_4\wedge db_2\wedge G_3+C_4\wedge b_2\wedge dG_3=G_5\wedge b_2\wedge G_3+C_4\wedge db_2\wedge G_3,$$ whose integral vanishes because $b_2$ is compactly supported. Consequently $-c\int C_4\wedge db_2\wedge G_3=+c\int b_2\wedge G_5\wedge G_3=-c\int b_2\wedge G_3\wedge G_5$, where exchanging the degrees $5$ and $3$ contributes $(-1)^{15}=-1$. The NS variation is $2c\int b_2\wedge d(e^{-2\Phi}*H_3)$. The $\widetilde G_3$ kinetic variation, after one integration by parts, is $2c\int b_2\wedge[-G_1\wedge*\widetilde G_3-C_0d*\widetilde G_3]$. The five-form kinetic variation together with this Chern–Simons contribution is $2c\int b_2\wedge[-\tfrac12G_3\wedge*\widetilde G_5-\tfrac14C_2\wedge d*\widetilde G_5-\tfrac12G_3\wedge G_5]$. The kinetic terms follow by differentiating $\widetilde G_3=G_3-C_0H_3$ and $\widetilde G_5=G_5-\tfrac12H_3C_2+\tfrac12G_3B_2$, then applying [F9]. [F1, F8, F9, F11, step 1.4, algebra]

2.5 Stationarity makes the integral of this continuous symmetric coefficient against every compactly supported symmetric $q^{MN}$ vanish; [F5] makes the coefficient zero pointwise. Rearranging gives exactly the metric equation in the Statement, with the factor $1/4$ for the five-form coming from both its action coefficient $1/2$ and the RR prefactor. [F5, step 1.3, algebra]

3.1 Use step 2.2, the self-duality [F2], and the identity $G_5=\widetilde G_5+\tfrac12H_3\wedge C_2-\tfrac12G_3\wedge B_2$. Since $-G_5\wedge H_3=H_3\wedge G_5$, the bracket in step 2.3 becomes $2d*\widetilde G_3+2H_3\wedge\widetilde G_5$: the $-\tfrac12H_3\wedge G_3\wedge B_2$ term from $H_3\wedge G_5$ cancels $+\tfrac12B_2\wedge H_3\wedge G_3$. By [F5] this is zero exactly when $d*\widetilde G_3=-H_3\wedge\widetilde G_5$. [F2, F5, step 2.2, step 2.3, F9, algebra]

3.2 Trace the metric equation from step 2.5. In ten dimensions $g^{MN}\langle i_MF_p,i_NF_p\rangle=p|F_p|^2$ by summing the $p$ antisymmetric slots. Using [F2] and $|\widetilde G_5|^2=0$ gives $-4R=18\Box\Phi-20|d\Phi|^2-|H_3|^2-2e^{2\Phi}|G_1|^2-e^{2\Phi}|\widetilde G_3|^2$. Substitute $R=4|d\Phi|^2+\tfrac12|H_3|^2-4\Box\Phi$ from step 1.4, collect terms, and divide by $-2$ to obtain the dilaton equation in the Statement. [F2, step 2.5, step 1.4, algebra]

4.1 Substitute steps 2.2 and 3.1 into the coefficient in step 2.4. The terms $-C_0d*\widetilde G_3$ and $-G_1\wedge*\widetilde G_3$ combine to $-G_1\wedge*\widetilde G_3+C_0H_3\wedge\widetilde G_5$. In the remaining terms use $*\widetilde G_5=\widetilde G_5$ and $G_5=\widetilde G_5+\tfrac12H_3C_2-\tfrac12G_3B_2$; $G_3\wedge G_3=0$ and $C_2\wedge H_3\wedge G_3=-G_3\wedge H_3\wedge C_2$ make the $C_2$ terms cancel, leaving $-G_3\wedge\widetilde G_5$. Thus the total coefficient is $d(e^{-2\Phi}*H_3)-G_1\wedge*\widetilde G_3-(G_3-C_0H_3)\wedge\widetilde G_5$. By [F5] it vanishes exactly when the NS equation in the Statement holds. [F2, F5, step 2.2, step 3.1, step 2.4, F9, algebra]

5.1 Steps 1.1, 1.2, 1.3, 1.4, 2.1, 2.2, 2.3, 2.4, 2.5, 3.1, 3.2, 4.1 prove all Bianchi, metric, dilaton, RR, and NS equations under the stated compact-support hypotheses; step 1.2 keeps self-duality separate from variation. The pointwise converse from the displayed equations to stationarity follows by substituting their zero coefficients into the first variations, while the forward direction used [F5]. No source term or higher-order term was varied. [F1, F2, F5, step 1.1, step 1.2, step 2.5, step 3.2, step 2.1, step 2.2, step 3.1, step 4.1] ∎

