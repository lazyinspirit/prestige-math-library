---
id: pthm-ten-dimensional-ns-ns-field-equations
kind: physics-theorem
title: Ten Dimensional NS NS Field Equations
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
deps:
  - def-supergravity-conventions-and-normalizations
  - post-ten-dimensional-ns-ns-supergravity-action
  - lem-supergravity-compact-metric-variation
  - lem-supergravity-compact-test-coefficient-vanishing
  - lem-supergravity-lorentzian-variations-realize-all-directions
dependency_roles:
  def-supergravity-conventions-and-normalizations: formulation-prerequisite
  post-ten-dimensional-ns-ns-supergravity-action: physical-assumption
  lem-supergravity-compact-metric-variation: mathematical-premise
  lem-supergravity-compact-test-coefficient-vanishing: mathematical-premise
  lem-supergravity-lorentzian-variations-realize-all-directions: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Conditional source-free Euler–Lagrange equations of the adopted ten-dimensional tree-level two-derivative NS–NS action. No RR fields, localized or magnetic sources, higher-derivative corrections, string loops, or claim of empirical validity are included."
sources:
  references:
    - title: "M. J. D. Hamilton, The field and Killing spinor equations of M-theory and type IIA/IIB supergravity in coordinate-free notation, arXiv:1607.00327v3"
      url: "https://arxiv.org/pdf/1607.00327v3"
      locator: "§6.1, Theorem 6.2(b)–(d), especially (c) the Ricci-form metric equation, (b) the dilaton equation, and (d) the NS two-form equation after setting RR fields to zero. The local proof here independently derives the equations; the printed Einstein-form coefficient in Theorem 6.2(a) is not used because its displayed dilaton-trace coefficient differs from the action variation."
    - title: "Colin Sterckx, Modave Lecture notes: Introduction to Exceptional Field Theory, arXiv:2410.19600v1"
      url: "https://arxiv.org/pdf/2410.19600v1"
      locator: "§3.2.1, equation (3.10), printed p. 29; independent string-frame action and field-normalization comparison."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $U\subseteq\mathbb R^{10}$ be an oriented chart with smooth string-frame Lorentzian metric $G_{MN}$ of signature $(-+\cdots+)$, smooth real dimensionless dilaton $\Phi$, and smooth antisymmetric potential components $B_{MN}$, $M,N=0,\ldots,9$. Set
$
H_{MNP}=3\partial_{[M}B_{NP]},\quad f=e^{-2\Phi},\quad X=G^{MN}\partial_M\Phi\,\partial_N\Phi,\quad H^2=H_{MNP}H^{MNP},
$
with indices raised by $G$, Levi-Civita connection $\nabla$, and $\Box\Phi=G^{MN}\nabla_M\nabla_N\Phi$. Define
$
D:=R+4\Box\Phi-4X-\frac1{12}H^2.
$
Use the adopted local action
$$
S=\frac1{2\kappa_0^2}\int_U d^{10}x\,\sqrt{-G}\,e^{-2\Phi}\left(R+4X-\frac1{12}H^2\right)
$$
and signed form norm $|F_p|_G^2=(1/p!)F_{M_1\ldots M_p}F^{M_1\ldots M_p}$. In length-valued coordinates, the adopted component normalization makes $B_{MN}$ dimensionless and $H_{MNP}$ of dimension length$^{-1}$. A configuration is stationary for this local variational model when the first variation of that action vanishes for every independent smooth compactly supported variation of $G^{MN}$, $\Phi$, and $B_{MN}$, through Lorentzian metrics. Then stationarity is equivalent to
$
R_{MN}+2\nabla_M\nabla_N\Phi-\frac14H_{MPQ}H_N{}^{PQ}=0,\qquad
\nabla_M\!\left(e^{-2\Phi}H^{MNP}\right)=0,\qquad
D=0.
$
The two-form equation is equivalently $d(e^{-2\Phi}\star_G H_3)=0$, where the Hodge star uses the convention $\alpha\wedge\star_G\beta=\langle\alpha,\beta\rangle_G\mathrm{vol}_G$ fixed by the earlier supergravity conventions definition. Independently of stationarity, $dH_3=0$ holds wherever the smooth potential $B_2$ is defined. These are conditional deductions in the adopted model.

## Statement references

[[post-ten-dimensional-ns-ns-supergravity-action]]

[[def-supergravity-conventions-and-normalizations]]

## Facts & Assumptions

**Given:** The smooth fields on $U$, the action postulate, and stationarity under all independent compactly supported variations stated above.

[F1] The convention fixes the curvature, scalar wave operator, signed $p$-form norm, $H_3=dB_2$, and the oriented Lorentzian Hodge star by $\alpha\wedge\star_G\beta=\langle\alpha,\beta\rangle_G\mathrm{vol}_G$ ([[def-supergravity-conventions-and-normalizations]]).

[A1] Adopt the local action $ S=\frac1{2\kappa_0^2}\int_U\sqrt{-G}\,e^{-2\Phi} \left(R+4G^{MN}\partial_M\Phi\partial_N\Phi-\frac1{12}H_{MNP}H^{MNP}\right)d^{10}x $ with no source, RR, loop, or higher-derivative terms ([[post-ten-dimensional-ns-ns-supergravity-action]]).

[F2] For a compactly supported inverse-metric variation $q^{MN}$, the first variation of $\int\sqrt{-G}\,fR\,d^{10}x$, with fixed smooth $f$, has coefficient $ f\left(R_{MN}-\tfrac12G_{MN}R\right)+G_{MN}\Box f-\nabla_M\nabla_Nf $ against $q^{MN}$; moreover, the chart integral of a compactly supported smooth coordinate divergence is zero ([[lem-supergravity-compact-metric-variation]]).

[F6] The same inverse-metric variation changes the density by $\delta\sqrt{-G}=-\tfrac12\sqrt{-G}\,G_{MN}q^{MN}$ ([[lem-supergravity-compact-metric-variation]]).

[F3] If continuous coefficient components pair to zero with every smooth compactly supported test vector under a positive continuous weight, then every component vanishes pointwise ([[lem-supergravity-compact-test-coefficient-vanishing]]).

[F4] Every smooth compactly supported symmetric inverse-metric direction is realized by a smooth family of Lorentzian metrics for sufficiently small parameter ([[lem-supergravity-lorentzian-variations-realize-all-directions]]).

[F5] The convention has $\alpha'>0$ and $2\kappa_0^2=(2\pi)^7\alpha'^4>0$, so the common action coefficient is nonzero ([[def-supergravity-conventions-and-normalizations]]).

## Proof

**Proof technique:** direct; vary the inverse metric, dilaton, and two-form independently, integrate compactly supported derivatives by parts, and extract each continuous Euler coefficient with [F3].

1.1 Put $f=e^{-2\Phi}$ and $C_0=(2\kappa_0^2)^{-1}$. For an inverse-metric variation $q^{MN}=\delta G^{MN}$, [F6] gives $\delta\sqrt{-G}=-\tfrac12\sqrt{-G}G_{MN}q^{MN}$. Also $\delta X=q^{MN}\partial_M\Phi\partial_N\Phi$ and $\delta H^2=3H_{MPQ}H_N{}^{PQ}q^{MN}$, since each inverse metric contributes the same contraction by antisymmetry. The scalar-kinetic and three-form terms in the metric variation, divided by $C_0\sqrt{-G}$, therefore have coefficient $f(4\partial_M\Phi\partial_N\Phi-2G_{MN}X-\tfrac14H_{MPQ}H_N{}^{PQ}+\tfrac1{24}G_{MN}H^2)$. The trace coefficient $1/24$ is $(-1/12)(-1/2)$, and the tensor coefficient $-1/4$ is $(-1/12)3$. [given, F1, A1, F6, algebra]

1.2 Hold $G,B$ fixed and vary $\Phi$ by a compactly supported $\delta\Phi$. Then $\delta f=-2f\delta\Phi$ and $\delta X=2\nabla^M\Phi\,\nabla_M\delta\Phi$, so, after factoring out $C_0\sqrt{-G}$, the pre-integration-by-parts coefficient is $f(-2R-8X+\tfrac16H^2)\delta\Phi+8f\nabla^M\Phi\,\nabla_M\delta\Phi$. The vector $f\nabla^M\Phi\,\delta\Phi$ is compactly supported. The divergence integral identity in [F2] therefore gives $8\int_U\sqrt{-G}f\nabla^M\Phi\nabla_M\delta\Phi=-8\int_U\sqrt{-G}(\Box\Phi-2X)f\delta\Phi$. Combining coefficients yields the dilaton variation $-2C_0\int_U\sqrt{-G}fD\delta\Phi\,d^{10}x$. [given, A1, F1, F2, algebra]

1.3 Hold $G,\Phi$ fixed and vary the antisymmetric potential by compactly supported $\delta B_{NP}$. Smoothness and the coordinate definition of $d$ give $\delta H_{MNP}=3\nabla_{[M}\delta B_{NP]}$. Antisymmetry makes the three terms equal in contraction, hence $\delta S_B=-\frac1{2\kappa_0^2}\int_U\sqrt{-G}\frac f2H^{MNP}\nabla_M\delta B_{NP}\,d^{10}x=\frac1{2\kappa_0^2}\int_U\sqrt{-G}\frac12\nabla_M(fH^{MNP})\delta B_{NP}\,d^{10}x$, by integration by parts for the compactly supported vector $fH^{MNP}\delta B_{NP}$ and [F2]. [given, A1, F1, F2, algebra]

2.1 By [F2], the weighted curvature term has metric coefficient $f(R_{MN}-\tfrac12G_{MN}R)+G_{MN}\Box f-\nabla_M\nabla_N f$ against $q^{MN}$. Adding the matter coefficient from step 1.1 gives the full metric coefficient, after division by $C_0\sqrt{-G}$. [step 1.1, F2, algebra]

2.2 Let $\varepsilon_{M_1\ldots M_{10}}$ be the oriented metric volume tensor. The stated Hodge convention gives $(\star_G H)_{M_1\ldots M_7}=\frac1{3!}\varepsilon_{N_1N_2N_3M_1\ldots M_7}H^{N_1N_2N_3}$. Using $(d\omega)_{A_0\ldots A_7}=8\nabla_{[A_0}\omega_{A_1\ldots A_7]}$, define $(\delta K)_{NP}:=-\nabla^M K_{MNP}$ for a 3-form $K$. Substitution of the epsilon expression and contraction in an oriented orthonormal frame, where raising the single time index changes the volume-tensor sign, gives $\delta K=\star_Gd\star_GK$; equivalently the Hodge-sign exponent $10(3+1)+1+1=42$ is even. Hence $[\star_Gd(f\star_GH)]_{NP}=-\nabla_M(fH^M{}_{NP})$. The Hodge star is invertible, so the component equation is equivalent to $d(f\star_GH)=0$. [F1, step 1.3, algebra]

3.1 The chain rule gives $f^{-1}\nabla_M\nabla_N f=-2\nabla_M\nabla_N\Phi+4\partial_M\Phi\partial_N\Phi$ and $f^{-1}\Box f=-2\Box\Phi+4X$. Substitute these into step 2.1. The $\partial_M\Phi\partial_N\Phi$ terms cancel, and the metric-proportional terms combine to $-\tfrac12 fG_{MN}D$. Thus the symmetric metric coefficient is $\mathcal M_{MN}=f(R_{MN}+2\nabla_M\nabla_N\Phi-\tfrac14H_{MPQ}H_N{}^{PQ}-\tfrac12G_{MN}D)$. [step 2.1, given, algebra]

4.1 By [F4], every compactly supported symmetric inverse-metric test direction in the metric variation is realized by an admissible metric family. Stationarity therefore makes the first-variation pairings vanish for all such independent tests. Divide out the common nonzero factor $C_0$ by [F5]. For unordered index pairs $M\le N$, define test components $q^{MN}$ freely and coefficient components $A_{MN}:=\mathcal M_{MM}$ if $M=N$, and $A_{MN}:=2\mathcal M_{MN}$ if $M<N$; then $\mathcal M_{MN}q^{MN}=\sum_{M\le N}A_{MN}q^{MN}$. Thus [F3] applies and gives $\mathcal M_{MN}=0$. The dilaton coefficient is $-2fD$, tested as a one-component vector. For $N<P$, antisymmetry gives $\tfrac12T^{MN}\delta B_{MN}=T^{NP}\delta B_{NP}$ after summing the two ordered terms, where $T^{NP}:=\nabla_M(fH^{MNP})$; hence [F3] applied to these independent pair components gives $T^{NP}=0$. Since $f=e^{-2\Phi}>0$, $fD=0$ also gives $D=0$. [given, F3, F4, F5, step 3.1, step 1.2, step 1.3]

5.1 With $D=0$, the metric equation $\mathcal M_{MN}=0$ from step 4.1 reduces, after division by $f>0$, to $R_{MN}+2\nabla_M\nabla_N\Phi-\tfrac14H_{MPQ}H_N{}^{PQ}=0$. Conversely, if this metric equation, $D=0$, and the two-form equation hold, the first-variation coefficients in steps 3.1, 1.2, and 1.3 all vanish, so every compactly supported first variation is zero. [step 3.1, step 1.2, step 1.3, step 4.1, algebra]

6.1 Finally $dH_3=d(dB_2)=0$: in components, antisymmetrizing the second partial derivatives of the smooth $B_{MN}$ gives zero because mixed partial derivatives commute. This is an identity of the local potential, independent of stationarity and not an additional Euler–Lagrange equation. [F1, algebra] ∎
## Remarks

The action is a source-free tree-level, leading two-derivative truncation. The equations are conditional variational consequences in that model; they are not empirical proofs and do not apply across localized or magnetic sources without additional current and boundary data.
