---
id: lem-cft-r5-compact-boson-lattice-is-even-self-dual-and-local
kind: lemma
title: The compact-boson lattice is even, unimodular, and mutually local
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: mathematics
physical_scope: null
deps:
  - def-cft-r5-compact-boson-charge-lattice-and-cocycle
  - lem-cft-r5-charged-heisenberg-fock-module
dependency_roles:
  def-cft-r5-compact-boson-charge-lattice-and-cocycle: mathematical-premise
  lem-cft-r5-charged-heisenberg-fock-module: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Paul Ginsparg, Applied Conformal Field Theory, Les Houches 1988, arXiv:hep-th/9108028v1
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: Section 8.1, printed pp. 113–114, even self-dual Lorentzian lattice and local vertex operators.
    - title: Pavel Mnev and Nicolai Reshetikhin, Lecture notes on conformal field theory
      url: https://academicweb.nd.edu/~pmnev/f22/CFT_book.pdf
      locator: Sections 6.1.5–6.1.6 and 6.3.11.4, printed pp. 199–200 and 221–222, lattice sectors and the current/vertex-operator map.
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

For every $r>0$, the charge lattice $\Gamma_r$ with bilinear form $B$ is even, integral, and self-dual. The cocycle $\varepsilon$ is associative. For finite-energy polynomial input and output vectors, the vertex-field matrix coefficients converge absolutely and locally uniformly on nested radial domains; their radial OPEs are associative, and the two radial orders agree by analytic continuation exchanging insertions away from the diagonal (bosonic radial locality). The target-radius duality

$$r'=(2r)^{-1},\qquad T(m,n)=(n,m)$$

preserves the left-moving charge and reverses the right-moving charge; after the phase $\chi(m,n)=(-1)^{mn}$ it preserves the local OPE coefficients.

## Statement references

[Ginsparg, Section 8.1](https://arxiv.org/pdf/hep-th/9108028v1)

[Mnev–Reshetikhin, Section 6.3.11.4](https://academicweb.nd.edu/~pmnev/f22/CFT_book.pdf)

## Facts & Assumptions

**Given:** $r>0$, the charge labels $q=(m,n)\in\mathbb Z^2$, and the charged Fock modes.

[F1] [[def-cft-r5-compact-boson-charge-lattice-and-cocycle]] defines $\Gamma_r$, $B$, $\varepsilon$, the charge shifts, the vertex operators, and their radial branches.

[F2] [[lem-cft-r5-charged-heisenberg-fock-module]] proves the unbarred relation $[a_k,a_{-\ell}]=k\delta_{k\ell}I$.

## Proof

**Given:** $r>0$.

1.1 For $q=(m,n)$ and $q'=(m',n')$, expansion of the two squares gives $B(\lambda_r(q),\lambda_r(q'))=p_L(q;r)p_L(q';r)-p_R(q;r)p_R(q';r)=mn'+nm'$. In the basis $e_1=\lambda_r(1,0)$, $e_2=\lambda_r(0,1)$, the Gram matrix is $\begin{pmatrix}0&1\\1&0\end{pmatrix}$. Thus every pairing is integral and $B(\lambda_r(q),\lambda_r(q))=2mn\in2\mathbb Z$. If $x=ae_1+be_2$ pairs integrally with both basis vectors, then $B(x,e_1)=b\in\mathbb Z$ and $B(x,e_2)=a\in\mathbb Z$; hence $x\in\Gamma_r$. This proves self-duality. For the oscillator calculation, the unbarred modes satisfy the relation in [F2]. Realize the independent right-moving copy on $\bar P=\mathbb C[\bar x_1,\bar x_2,\ldots]$ by $\bar a_{-k}g=\bar x_k g$, $\bar a_k g=k\,\partial g/\partial\bar x_k$ for $k\ge1$, and $\bar a_0g=p_Rg$. The same multiplication-differentiation calculation gives $[\bar a_m,\bar a_n]=m\delta_{m+n,0}I$; on $P\otimes\bar P$, the unbarred and barred modes act on separate factors, so $[a_m,\bar a_n]=0$. [given, F1, F2, algebra]

2.1 Bilinearity of the exponent gives $\varepsilon(q,q')\varepsilon(q+q',q'')=(-1)^{mn'+(m+m')n''}=(-1)^{m'n''+m(n'+n'')}=\varepsilon(q',q'')\varepsilon(q,q'+q'')$. Therefore the charge-shift products are associative. [F1, step 1.1, algebra]

3.1 For $u=w/z$ with $|u|<1$, the unbarred and barred oscillator commutators from [F1] and [F2] give $E^+_{s}(z)E^-_{t}(w)=E^-_{t}(w)E^+_{s}(z)\exp(-st\sum_{k\ge1}u^k/k)=E^-_{t}(w)E^+_{s}(z)(1-u)^{st}$. The scalar series is normally convergent on every compact subset of $|u|<1$, since $\sum_{k\ge1}|u|^k/k$ converges uniformly when $|u|\le c<1$. For fixed polynomial input, each annihilation exponential has finite differential action; pairing against a fixed polynomial output selects only finitely many creation coefficients. Hence every finite-energy matrix coefficient of an ordered product is a finite combination of derivatives of these normally convergent contraction factors and polynomial powers. It is absolutely and locally uniformly convergent on compact nested radial domains. Moving the zero-mode factors through the charge shifts supplies $z^{st}$ and its barred analogue, so the leading factor is $(z-w)^{st}(\bar z-\bar w)^{s't'}$ on the branches in [F1]. The remaining normal-ordered exponential is the field of charge $q+q'$ and its descendants. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Exchanging two insertions by a half-turn multiplies the left/right branch factors by $e^{\pi iB(q,q')}$. The cocycle ratio is $\varepsilon(q,q')/\varepsilon(q',q)=(-1)^{mn'-m'n}=(-1)^{mn'+nm'}$, and $B(q,q')=mn'+nm'\in\mathbb Z$, so the cocycle and branch factors multiply to $1$. Thus the finite-energy radial matrix coefficients agree after analytic continuation exchanging the insertions away from the diagonal. The field spin is $\frac12(p_L^2-p_R^2)=mn\in\mathbb Z$. The two-cocycle identity in step 2.1 and the normally convergent contraction factors in step 3.1 make finite iterated radial OPEs independent of bracketing on nested radial domains. [F1, F2, step 1.1, step 2.1, step 3.1, algebra]

5.1 With $r'=(2r)^{-1}$ and $T(m,n)=(n,m)$, $p_L(Tq;r')=n/(2r')+mr'=nr+m/(2r)=p_L(q;r)$ and $p_R(Tq;r')=nr-m/(2r)=-p_R(q;r)$. The phase $\chi(q)=(-1)^{mn}$ satisfies $\chi(q+q')/(\chi(q)\chi(q'))=(-1)^{mn'+m'n}=\varepsilon(Tq,Tq')/\varepsilon(q,q')$. Consequently $V_q\mapsto\chi(q)V_{Tq}$ together with sign reversal of every right-moving oscillator preserves the OPE, the vacuum, and both conformal weights. It is bijective because $T$ is an involution of $\mathbb Z^2$. [F1, step 2.1, step 3.1, algebra] ∎
