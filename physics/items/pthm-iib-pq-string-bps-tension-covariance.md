---
id: pthm-iib-pq-string-bps-tension-covariance
kind: physics-theorem
title: Iib Pq String Bps Tension Covariance
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 7
domain: physics
library: physics
deps:
  - def-iib-axiodilaton-and-pq-string-charge
dependency_roles:
  def-iib-axiodilaton-and-pq-string-charge: formulation-prerequisite
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
physical_scope: "Conditional algebraic covariance of the source-reported classical type-IIB BPS (p,q)-string tension at a constant asymptotic axiodilaton, in the explicit Schwarz charge and Einstein-frame convention. It is not a proof of full quantum S-duality, a quantum Hilbert-space equivalence, or a claim about varying asymptotic moduli."
sources:
  references:
    - title: "J. H. Schwarz, An SL(2,Z) Multiplet of Type IIB Superstrings, arXiv:hep-th/9508143v5"
      url: "https://arxiv.org/pdf/hep-th/9508143v5"
      locator: "§2, equations (8)–(21), especially (16)–(21): charge transformation and the source-reported Einstein-frame tension formula."
    - title: "Angel M. Uranga, Introduction to String Theory, full lecture notes"
      url: "https://members.ift.uam-csic.es/auranga/Lect.pdf"
      locator: "§14.3.1, printed pp. 290–291: independent account of the classical IIB SL(2,R) field covariance and the conjectural exact SL(2,Z) extension. Its charge-basis convention is not substituted for Schwarz's."
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

Let $\tau_\infty=C_{0,\infty}+i e^{-\Phi_\infty}\in\mathbb H$ be the constant asymptotic type-IIB axiodilaton, and let $Q=(p,q)^{\mathsf T}\in\mathbb Z^2\setminus\{0\}$ be a charge label in the ordered NS–NS/RR source basis. Assume the source-reported classical BPS family and its Einstein-frame tension formula

$$T^{(E)}_{p,q}=T_F\sqrt{e^{\Phi_\infty}(p-qC_{0,\infty})^2+e^{-\Phi_\infty}q^2}=T_F\frac{|p-q\tau_\infty|}{\sqrt{\operatorname{Im}\tau_\infty}}.$$

For every $\Lambda=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\mathrm{SL}(2,\mathbb Z)$, transform the asymptotic modulus and charge together by $\tau'=(a\tau_\infty+b)/(c\tau_\infty+d)$ and $(p',q')^{\mathsf T}=\Lambda(p,q)^{\mathsf T}$. Then the normalized central-charge factor transforms by the unit phase $\mathcal Z_{p',q'}(\tau')=\frac{|c\tau_\infty+d|}{c\tau_\infty+d}\mathcal Z_{p,q}(\tau_\infty)$, and the Einstein-frame tension is invariant. This is a conditional algebraic calculation for the classical protected family, not an assertion that $\mathrm{SL}(2,\mathbb Z)$ is proved to act as an exact equivalence on the complete type-IIB quantum theory.

## Statement references

[[def-iib-axiodilaton-and-pq-string-charge]]

[Schwarz, §2, equations (16)–(21)](https://arxiv.org/pdf/hep-th/9508143v5)

[Uranga, §14.3.1](https://members.ift.uam-csic.es/auranga/Lect.pdf)

## Facts & Assumptions

**Given:** A constant asymptotic $\tau_\infty\in\mathbb H$, an integer source charge $Q=(p,q)^{\mathsf T}$, $T_F>0$, a matrix $\Lambda\in\mathrm{SL}(2,\mathbb Z)$, the simultaneous transformations in the Statement, and the source-reported BPS tension formula there.

[F1] [[def-iib-axiodilaton-and-pq-string-charge]]: $\tau_\infty=C_{0,\infty}+i e^{-\Phi_\infty}$, $\operatorname{Im}\tau_\infty>0$, $Q=(p,q)^{\mathsf T}$ in the ordered NS–NS/RR basis, $Q'=\Lambda Q$, and $\mathcal Z_{p,q}=(p-q\tau_\infty)/\sqrt{\operatorname{Im}\tau_\infty}$.

[A1] Adopt Schwarz's source-reported classical source-coupled BPS family: for integer charges $(p,q)$ and constant asymptotic $\tau_\infty$, the Einstein-frame tension is $T^{(E)}_{p,q}=T_F\sqrt{e^{\Phi_\infty}(p-qC_{0,\infty})^2+e^{-\Phi_\infty}q^2}$. Primitive charges label the elementary string solutions; a nonprimitive vector denotes the source's neutrally stable multiple-string threshold with multiplicity $\gcd(|p|,|q|)$. This is a physical premise, not a deduction that the full quantum theory has the proposed duality. [Schwarz, §2, equations (16)–(21)](https://arxiv.org/pdf/hep-th/9508143v5).

## Proof

1.1 Set $\tau'=(a\tau_\infty+b)/(c\tau_\infty+d)$ and $(p',q')=(ap+bq,cp+dq)$. The lower row $(c,d)$ is nonzero because $ad-bc=1$. If $c\tau_\infty+d=0$, then $c=0$ would force $d=0$, while $c\ne0$ would force $\tau_\infty=-d/c\in\mathbb R$; both contradict $\operatorname{Im}\tau_\infty>0$ or the determinant condition. Expanding and using $ad-bc=1$ gives $(c\tau_\infty+d)(p'-q'\tau')=(c\tau_\infty+d)(ap+bq)-(a\tau_\infty+b)(cp+dq)=p-q\tau_\infty$. Hence $p'-q'\tau'=(p-q\tau_\infty)/(c\tau_\infty+d)$. Since $\Lambda$ and $\Lambda^{-1}$ have integer entries, a common divisor of $p',q'$ divides $p,q$ and conversely, so primitivity and the multiple-string gcd are preserved. [given, F1, A1, algebra]

2.1 Multiplying numerator and denominator of $\tau'$ by $c\overline{\tau_\infty}+d$ gives $\operatorname{Im}\tau'=\operatorname{Im}((a\tau_\infty+b)(c\overline{\tau_\infty}+d))/|c\tau_\infty+d|^2=(ad-bc)\operatorname{Im}\tau_\infty/|c\tau_\infty+d|^2=\operatorname{Im}\tau_\infty/|c\tau_\infty+d|^2>0$. Thus the transformed modulus remains in $\mathbb H$ and its positive square-root normalization is defined. [given, F1, step 1.1, algebra]

3.1 Combining steps 1.1 and 2.1 yields $\mathcal Z_{p',q'}(\tau')=\frac{(p-q\tau_\infty)/(c\tau_\infty+d)}{\sqrt{\operatorname{Im}\tau_\infty}/|c\tau_\infty+d|}=\frac{|c\tau_\infty+d|}{c\tau_\infty+d}\mathcal Z_{p,q}(\tau_\infty)$. The factor has modulus one, so $|\mathcal Z_{p',q'}(\tau')|=|\mathcal Z_{p,q}(\tau_\infty)|$ and [A1] gives $T_{p',q'}^{(E)}=T_{p,q}^{(E)}$. Finally, $|p-q\tau_\infty|^2/\operatorname{Im}\tau_\infty=((p-qC_{0,\infty})^2+q^2e^{-2\Phi_\infty})/e^{-\Phi_\infty}=e^{\Phi_\infty}(p-qC_{0,\infty})^2+e^{-\Phi_\infty}q^2$, which verifies the two displayed forms of the tension. [given, F1, A1, step 1.1, step 2.1, algebra] ∎
