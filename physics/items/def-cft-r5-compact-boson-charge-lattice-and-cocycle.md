---
id: def-cft-r5-compact-boson-charge-lattice-and-cocycle
kind: definition
title: Compact-boson momentum-winding lattice and cocycle
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: mathematics
library: mathematics
physical_scope: null
deps:
  - def-cft-r5-charged-heisenberg-fock-space
dependency_roles:
  def-cft-r5-charged-heisenberg-fock-space: mathematical-premise
justified_by:
  - lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches 1988, arXiv:hep-th/9108028v1
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: Section 8.1, printed pp. 111–114, momentum-winding charges, the even unimodular Lorentzian lattice, and vertex operators.
    - title: Pavel Mnev and Nicolai Reshetikhin, Lecture notes on conformal field theory
      url: https://academicweb.nd.edu/~pmnev/f22/CFT_book.pdf
      locator: Sections 6.1.5–6.1.6, printed pp. 198–200, momentum-winding sectors and the Lorentzian charge lattice.
verification:
  precheck: n/a
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $r>0$ be a dimensionless parameter in the Ginsparg worldsheet normalization. For $q=(m,n)\in\mathbb Z^2$ define

$$p_L(q;r)=\frac{m}{2r}+nr,\qquad p_R(q;r)=\frac{m}{2r}-nr,\qquad \Gamma_r=\{(p_L(q;r),p_R(q;r)):q\in\mathbb Z^2\}.$$

Equip $\mathbb R^2$ with the Lorentzian bilinear form

$$B((u_L,u_R),(v_L,v_R))=u_Lv_L-u_Rv_R.$$

For $q=(m,n)$ and $q'=(m',n')$ put

$$\varepsilon(q,q')=(-1)^{mn'}.$$

Let $\bar P=\mathbb C[\bar x_1,\bar x_2,\ldots]$ be an independent copy of the polynomial core $P$ in [[def-cft-r5-charged-heisenberg-fock-space]], with $\langle\bar x^u,\bar x^v\rangle=\mathbf1_{u=v}\prod_{k\ge1}k^{u_k}u_k!$. Its right-moving modes act by $\bar a_{-k}g=\bar x_k g$ and $\bar a_k g=k\,\partial g/\partial\bar x_k$ for $k\ge1$. Define the algebraic charge-indexed space
$$\mathcal H_r^{\mathrm{alg}}=\bigoplus_{q_0\in\mathbb Z^2}\mathcal F_{q_0}^{\mathrm{alg}},\qquad \mathcal F_{q_0}^{\mathrm{alg}}=P\otimes_{\mathbb C}\bar P,$$
where each summand is a separately labelled copy. On the $q_0$ summand, $a_0$ acts by $p_L(q_0;r)$ and $\bar a_0$ by $p_R(q_0;r)$; left and right modes act on the first and second tensor factors, respectively. For each $q\in\mathbb Z^2$, define the charge shift on elementary tensors by
$$U_q(f\otimes g\text{ in the }q_0\text{ summand})=\varepsilon(q,q_0)\,f\otimes g\text{ in the }(q+q_0)\text{ summand}.$$

For $s\in\mathbb R$ define the left and right oscillator exponentials coefficientwise on the polynomial cores by

$$E^-_s(z)=\exp\!\left(\sum_{k\ge1}\frac{s\,a_{-k}z^k}{k}\right),\qquad E^+_s(z)=\exp\!\left(-\sum_{k\ge1}\frac{s\,a_kz^{-k}}{k}\right),$$

$$\bar E^-_s(\bar z)=\exp\!\left(\sum_{k\ge1}\frac{s\,\bar a_{-k}\bar z^k}{k}\right),\qquad \bar E^+_s(\bar z)=\exp\!\left(-\sum_{k\ge1}\frac{s\,\bar a_k\bar z^{-k}}{k}\right).$$

For $z\in D:=\mathbb C\setminus(-\infty,0]$, use the principal branch $z^\alpha=\exp(\alpha\operatorname{Log}z)$ and $\bar z^\alpha=\exp(\alpha\overline{\operatorname{Log}z})$. Define the lattice vertex field on the $q_0$ summand by

$$V_q(z,\bar z)= E^-_{p_L(q;r)}(z)E^+_{p_L(q;r)}(z) \bar E^-_{p_R(q;r)}(\bar z)\bar E^+_{p_R(q;r)}(\bar z) \,U_q\,z^{p_L(q;r)a_0}\bar z^{p_R(q;r)\bar a_0}.$$

The exponentials are formal power series in their displayed variables, acting coefficientwise on $P\otimes\bar P$; for any fixed input polynomial, each $E^+$ and $\bar E^+$ has finite action. For radially ordered products use
$$\mathcal R=\{(z,w)\in D^2:0<|w|<|z|\}.$$
On $\mathcal R$, define the branch of $(z-w)^\alpha$ by $\exp\bigl(\alpha(\operatorname{Log}z+\log(1-w/z))\bigr)$, where $\log(1-w/z)=-\sum_{k\ge1}(w/z)^k/k$; use the conjugate branch for $\bar z-\bar w$. These branches are well defined because $|w/z|<1$. The cocycle $\varepsilon$ is part of the field normalization.

## Definition references

[[def-cft-r5-charged-heisenberg-fock-space]]

[Ginsparg, Section 8.1](https://arxiv.org/pdf/hep-th/9108028v1)

[Mnev–Reshetikhin, Sections 6.1.5–6.1.6](https://academicweb.nd.edu/~pmnev/f22/CFT_book.pdf)

## Remarks

The parameter $r$ is not a dimensional target-space length. The bilinear form is Lorentzian, not Euclidean. The definition of $\Gamma_r$ and $\varepsilon$ supplies the zero-mode labels and phases absent from the vacuum Heisenberg VOA alone.
