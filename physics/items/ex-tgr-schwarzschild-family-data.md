---
id: ex-tgr-schwarzschild-family-data
kind: example
title: Schwarzschild and charged endpoint algebra
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 10
deps:
  - def-tgr-horizon-screen-family
  - prop-tgr-kn-first-law-smarr
  - prop-emg-xs-kn-horizon-data
  - lem-tgr-schwarzschild-horizon-data
dependency_roles:
  def-tgr-horizon-screen-family: mathematical-premise
  prop-tgr-kn-first-law-smarr: mathematical-premise
  prop-emg-xs-kn-horizon-data: mathematical-premise
  lem-tgr-schwarzschild-horizon-data: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), complete 238-page lecture notes"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.114)–(7.155), printed pp. 207–215 (PDF pp. 213–221), for Kerr/Schwarzschild family parameters, area and surface-gravity context; the charged endpoint is checked from the exact local supplier."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 3.3, equations (3.18)–(3.21), and Section 4 equations (4.1)–(4.2), printed pp. 16–21 (PDF pp. 17–22), for charged horizons, area and family work terms."
    - title: "Robert M. Wald, The Thermodynamics of Black Holes, Living Reviews in Relativity 4 (2001), 6"
      url: https://arxiv.org/pdf/gr-qc/9912119
      locator: "Section 2, PDF pp. 6–8, on stationary first-law scope; its global hypotheses are not used for this algebraic example."
verification:
  precheck: pending
---

## Example

Take the nonrotating slice $a=0$ of the parameter family in [[def-tgr-horizon-screen-family]].

- If $q=0$ and $m>0$, then $r_+=2m$, $D=4m^2$, $A=16\pi m^2$, $\kappa_{\rm KN}=1/(4m)$, and $j=\Omega_{\rm KN}=\Phi_{\rm KN}=0$. The local horizon data are exactly those proved in [[lem-tgr-schwarzschild-horizon-data]]. The first-law identity becomes $dm=\kappa_{\rm KN}\,dA/(8\pi)$, and the Smarr identity becomes $m=\kappa_{\rm KN}A/(4\pi)$.
- If $q^2<m^2$, put $s=\sqrt{m^2-q^2}$ and $r_+=m+s$. Then $D=r_+^2$, $A=4\pi r_+^2$, $\kappa_{\rm KN}=s/r_+^2$, $\Phi_{\rm KN}=q/r_+$, and $j=\Omega_{\rm KN}=0$. The family identities reduce to $dm=\kappa_{\rm KN}\,dA/(8\pi)+\Phi_{\rm KN}\,dq$ and $m=\kappa_{\rm KN}A/(4\pi)+\Phi_{\rm KN}q$.
- At the boundary $q^2=m^2$ with $m>0$, the exact double-root supplier gives $r_+=m$, $D=m^2$, $A=4\pi m^2$, $\kappa_{\rm KN}=0$, and $\Phi_{\rm KN}=q/m$. This is a boundary value, not an assertion about attaining the extremal parameter in a physical process.

## Facts & Assumptions

**Given:** The real parameter family and its strict subextremal formulas, the separately checked zero-rotation zero-charge point, and the exact double-root geometric supplier.

[F1] [[def-tgr-horizon-screen-family]]: $r_+=m+\sqrt{m^2-a^2-q^2}$, $D=r_+^2+a^2$, $A=4\pi D$, $j=ma$, $\kappa_{\rm KN}=(r_+-m)/D$, $\Omega_{\rm KN}=a/D$, and $\Phi_{\rm KN}=qr_+/D$ on $m^2>a^2+q^2$.

[F2] [[prop-tgr-kn-first-law-smarr]]: on the strict parameter domain,
$$dm=\frac{\kappa_{\rm KN}}{8\pi}\,dA+\Omega_{\rm KN}\,dj+\Phi_{\rm KN}\,dq,\qquad m=\frac{\kappa_{\rm KN}A}{4\pi}+2\Omega_{\rm KN}j+\Phi_{\rm KN}q.$$

[F3] [[prop-emg-xs-kn-horizon-data]]: for $M>0$ and $M^2\ge a^2+q^2>0$, the selected outer horizon has $r_H=M+\sqrt{M^2-a^2-q^2}$, area $4\pi(r_H^2+a^2)$, $\kappa_H=\sqrt{M^2-a^2-q^2}/(r_H^2+a^2)$, and constant potential $q r_H/(r_H^2+a^2)$; the equality case is the double root with $\kappa_H=0$.

[F4] [[lem-tgr-schwarzschild-horizon-data]]: at $a=q=0$, the smooth ingoing KN specialization has the null Killing horizon $r=2m$, area $16\pi m^2$ and signed surface gravity $1/(4m)$.

## Verification

1.1 On $a=q=0$, $s=\sqrt{m^2}=m$ because $m>0$, so $r_+=2m$ and $D=4m^2$. Substitution in [F1] gives $A=16\pi m^2$, $\kappa_{\rm KN}=1/(4m)$, and $j=\Omega_{\rm KN}=\Phi_{\rm KN}=0$; [F4] independently verifies the geometric horizon data at this point. [F1, F4, given, algebra]

2.1 Differentiating $A=16\pi m^2$ gives $dA=32\pi m\,dm$, whence $\kappa_{\rm KN}dA/(8\pi)=dm$ and $\kappa_{\rm KN}A/(4\pi)=m$. Thus both family identities in [F2] reduce to the stated Schwarzschild formulas. [step 1.1, F2, algebra]

2.2 On $a=0$ with $q^2<m^2$, $s=\sqrt{m^2-q^2}>0$, so [F1] gives $r_+=m+s$, $D=r_+^2$, $A=4\pi r_+^2$, $\kappa_{\rm KN}=s/r_+^2$, $\Phi_{\rm KN}=q/r_+$ and $j=\Omega_{\rm KN}=0$. For Smarr, $\kappa_{\rm KN}A/(4\pi)+\Phi_{\rm KN}q=s+q^2/r_+=s+(m^2-s^2)/(m+s)=s+(m-s)=m$. For the first law, differentiate $s^2=m^2-q^2$ to obtain $s\,ds=m\,dm-q\,dq$, and hence $dr_+=dm+ds=(r_+/s)dm-(q/s)dq$. Therefore $\kappa_{\rm KN}dA/(8\pi)+\Phi_{\rm KN}dq=(s/r_+^2)(8\pi r_+\,dr_+)/(8\pi)+(q/r_+)dq=(s/r_+)dr_++(q/r_+)dq=dm$. [F1, F2, step 1.1, algebra]

3.1 At $q^2=m^2$ and $m>0$, the strict parameter formula has the continuous boundary values $s\to0$, $r_+\to m$, $D\to m^2$, $A\to4\pi m^2$, $\kappa_{\rm KN}\to0$, and $\Phi_{\rm KN}\to q/m$. Independently, [F3] supplies this selected-model double-root data exactly, since $M=m>0$ and $M^2=a^2+q^2>0$. This verifies the boundary formula without extending the open-family differential identity or making a process claim. [F1, F3, step 2.2, algebra] ∎

## Remarks

The open-family first law and Smarr formula concern exact parameter identities. The extremal line is a boundary of that open family; the example makes no statement about how, or whether, a physical process can reach it.

