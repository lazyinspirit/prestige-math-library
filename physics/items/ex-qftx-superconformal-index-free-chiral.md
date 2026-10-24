---
id: ex-qftx-superconformal-index-free-chiral
kind: example
title: Free chiral protected-letter superconformal index
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-bps-indices-examples
deps:
  - def-countable-choice
  - def-qftx-superconformal-index
  - pthm-qftx-superconformal-index-beta-independence
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-superconformal-index: formulation-prerequisite
  pthm-qftx-superconformal-index-beta-independence: physical-result
dependency_level: 5
axiom_base: "ZF + AC_omega"
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Leonardo Rastelli and Shlomo S. Razamat, The supersymmetric index in
        four dimensions"
      url: "https://arxiv.org/pdf/1608.02965"
      locator: "Full 43-page review; §2.3, Table 1 and equations (2.9)–(2.13), printed
        pp. 5–7: the chiral-letter weights, derivative towers,
        equation-of-motion qualification, and Fock-space plethystic exponential.
        The present example states its letter and convergence data explicitly
        and derives the product."
    - title: "Justin Kinney, Juan Maldacena, Shiraz Minwalla, and Suvrat Raju, An
        Index for 4 Dimensional Super Conformal Theories"
      url: "https://arxiv.org/pdf/hep-th/0510251"
      locator: "Full 60-page paper; §3.3, equations (3.10)–(3.12), printed pp. 16–17, for
        the right-handed protected supercharge trace and commuting charges; the
        local example states its own R-charge convention."
physical_scope: "A conditional free, ungauged four-dimensional N=1
  protected-letter/Fock trace on unit S3 with the explicit charge and
  convergence data stated here. It is not a continuum construction,
  gauge-projected index, empirical observation, or universal formula for
  interacting theories."
verification:
  precheck: pending
---

## Example

Assume $\mathrm{AC}_\omega$ and use the right-handed index convention on the unit round $S^3$ from the earlier superconformal-index definition. Take an uncharged free four-dimensional $\mathcal N=1$ chiral model with trivial global gauge group, one complex scalar and one Weyl fermion in its stated chiral multiplet, no spatial boundary, and the directly supplied radial Hilbert-space construction; no path-integral measure is asserted. Its protected-letter data consist of one bosonic scalar letter $\phi$ of charges $(E,J_1,J_2,R)=(1,0,0,\tfrac23)$ and one fermionic conjugate Weyl letter $\bar\psi_{\dot +}$ of charges $(\tfrac32,0,\tfrac12,\tfrac13)$. Its protected one-particle space is specified as follows. Let $\mathbb N_0=\{0,1,2,\ldots\}$. For each $(m,n)\in\mathbb N_0^2$, let $b_{mn}=D_p^mD_q^n\phi$ and $f_{mn}=D_p^mD_q^n\bar\psi_{\dot +}$ be orthonormal basis vectors. The commuting linear mode-shift maps $D_p,D_q$ act on their algebraic span by $D_pb_{mn}=b_{m+1,n}$, $D_pf_{mn}=f_{m+1,n}$, $D_qb_{mn}=b_{m,n+1}$, and $D_qf_{mn}=f_{m,n+1}$. They encode the two protected translation descendants in this specified Hilbert model; no continuum field-operator realization is asserted. Their increments of $(E,J_1,J_2,R)$ are $(1,\tfrac12,\tfrac12,0)$ and $(1,-\tfrac12,\tfrac12,0)$, respectively. The mode charges are

$$
\begin{aligned}(E,J_1,J_2,R)(b_{mn})&=(1+m+n,\tfrac{m-n}{2},\tfrac{m+n}{2},\tfrac23),\\(E,J_1,J_2,R)(f_{mn})&=(\tfrac32+m+n,\tfrac{m-n}{2},\tfrac{1+m+n}{2},\tfrac13),\\(\Delta,J_+,J_-)(b_{mn})&=(0,m+\tfrac13,n+\tfrac13),\\(\Delta,J_+,J_-)(f_{mn})&=(0,m+\tfrac23,n+\tfrac23).\end{aligned}
$$

The protected multiparticle Hilbert space is the completion of the span of orthonormal vectors $|r,s\rangle$ indexed by functions $r:\mathbb N_0^2\to\mathbb N_0$ and $s:\mathbb N_0^2\to\{0,1\}$ that vanish outside a finite subset of $\mathbb N_0^2$. Here $r_{mn}$ and $s_{mn}$ are the bosonic and fermionic occupation numbers; the fermion parity is $(-1)^{\sum_{m,n}s_{mn}}$, and the charge eigenvalues on $|r,s\rangle$ are the sums of the corresponding one-particle eigenvalues with multiplicities $r_{mn},s_{mn}$. Each charge is the maximal diagonal operator in this basis. This defines the symmetric bosonic and exterior fermionic Fock constructions and makes this the complete $\ker\Delta$ sector: assume no additional zero-gap states or relations and no gauge projection. Any orthogonal complement in the full radial Hilbert space consists of positive-gap pairs satisfying the beta-independence theorem, its simultaneous gap/charge eigenbasis and reducing-domain conditions, and its trace-class conditions. For positive fugacities $0<p,q<1$, the single-letter index and full index are

$$i_\chi(p,q)=\frac{(pq)^{1/3}-(pq)^{2/3}}{(1-p)(1-q)},\qquad \mathcal I_\chi(p,q)=\prod_{m,n\ge0}\frac{1-(pq)^{2/3}p^mq^n}{1-(pq)^{1/3}p^mq^n},$$

where the double product is the limit of its finite rectangular partial products. These formulas describe the specified protected-letter model only; they assert no interacting or gauge-projected index.

## Example references

[Rastelli and Razamat, §2.3](https://arxiv.org/pdf/1608.02965)

[Kinney et al., §3](https://arxiv.org/pdf/hep-th/0510251)

## Facts & Assumptions

**Given:** The unit-radius right-handed index convention and the free protected-letter/Fock data stated in the Example; $p,q\in(0,1)$ are dimensionless.

[A1] Assume $\mathrm{AC}_\omega$, as required by the Hilbert, basis, and trace suppliers. [[def-countable-choice]]

[A2] The free model supplies the orthonormal one-particle modes and mode-shift maps stated in the Example, together with the finite-support bosonic/fermionic occupation basis, additive charges, and parity. These occupation states exhaust $\ker\Delta$; there is no gauge projection or further zero-gap relation. Any orthogonal complement consists of positive-gap pairs satisfying the beta-independence theorem, its joint eigenbasis/reducing-domain conditions, and its trace-class assumptions. This is exact model input for the example, not a theorem about a general SCFT.

[F1] [[def-qftx-superconformal-index]]: $\Delta=E-2J_2-\tfrac32R$, $J_+=J_1+J_2+R/2$, $J_-=J_2-J_1+R/2$, and the admissible weighted supertrace is the signed $p^{J_+}q^{J_-}$ trace on $\ker\Delta$ when its weighted diagonal sum converges.

[F2] [[pthm-qftx-superconformal-index-beta-independence]]: under exact positive-energy pairing and the weighted trace-class hypothesis, the full superconformal heat supertrace equals its absolutely convergent weighted trace on $\ker\Delta$ for every $\beta>0$.

## Verification

**Given:** [A1]–[A2], [F1]–[F2], and the charge assignments in the Example.

1.1 For the scalar letter, $\Delta=E-2J_2-\tfrac32R=1-0-1=0$ and $J_+=J_-=1/3$, so its signed fugacity weight is $(pq)^{1/3}$. [F1, A2, given, algebra]

1.2 For $\bar\psi_{\dot +}$, $\Delta=\tfrac32-1-\tfrac12=0$ and $J_+=J_-=\tfrac12+\tfrac16=2/3$; its fermion parity contributes the negative weight $-(pq)^{2/3}$. Each $D_p$ adds one to $J_+$ and zero to $J_-$, while each $D_q$ adds zero to $J_+$ and one to $J_-$, and both preserve $\Delta=0$. [F1, A2, given, algebra]

2.1 Summing the scalar and fermion towers gives $i_\chi(p,q)=\sum_{m,n\ge0}((pq)^{1/3}-(pq)^{2/3})p^mq^n$. Since $0<p,q<1$, the geometric sums are $\sum_{m,n\ge0}p^mq^n=((1-p)(1-q))^{-1}$, yielding the displayed single-letter formula. [step 1.1, step 1.2, algebra]

3.1 For a bosonic letter of weight $x$, all occupations contribute $1+x+x^2+\cdots=(1-x)^{-1}$; for a fermionic letter, the two allowed occupations contribute $1-x$. Applying these factors to each derivative mode produces the rectangular partial product in the Statement. For finite mode sets this is an ordinary product of occupation sums; passage to the infinite product requires absolute convergence. [A2, step 2.1, algebra]

4.1 By [A1] and [F1], the trace is the supplied-basis trace of a trace-class weighted heat operator, with absolutely summable diagonal. Put $a=(pq)^{1/3}<1$ and $b=(pq)^{2/3}<1$. The total absolute bosonic and fermionic mode weights are $a/((1-p)(1-q))$ and $b/((1-p)(1-q))$, both finite. Because $-\log(1-x)\le x/(1-a)$ for $0\le x\le a$ and $\log(1+y)\le y$ for $y\ge0$, the absolute Fock partition product converges; hence the signed product and the protected-sector trace converge absolutely. The increasing finite mode sets exhaust all finite-support occupation states, so their absolute occupation sums converge to this finite product and justify the signed infinite trace/product identity. This proves protected-sector convergence for the stated fugacity range; convergence of any additional positive-gap sector remains the independent hypothesis in [A2]. Under that hypothesis, [F2] identifies the protected trace with the full superconformal heat supertrace, independent of $\beta$. [A1, F1, F2, A2, step 2.1, step 3.1, algebra] ∎
