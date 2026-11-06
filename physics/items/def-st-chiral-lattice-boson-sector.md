---
id: def-st-chiral-lattice-boson-sector
kind: definition
title: "Even-lattice chiral boson sector"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
category: string-theory
library: physics
dependency_level: 1
domain: mathematics
physical_scope: null
deps:
  - def-positive-even-unimodular-lattice
  - def-vertex-algebra-state-field
justified_by:
  - lem-st-chiral-lattice-boson-sector-properties
dependency_roles:
  def-positive-even-unimodular-lattice: mathematical-premise
  def-vertex-algebra-state-field: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures, arXiv:hep-th/9108028v1"
      url: "https://arxiv.org/pdf/hep-th/9108028v1"
      locator: "Chapter 7, printed pp. 104–107: chiral fermion bosonization and E8/rank-16 even self-dual lattice sectors."
    - title: "Timo Weigand, Introduction to String Theory, Winter term 2011/12"
      url: "https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf"
      locator: "Chapters 6.5–6.9, printed pp. 140–154: RNS spectrum/GSO, Type I projection, and heterotic construction."
verification:
  precheck: n/a
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

## Definition

Let $(V,\langle\cdot,\cdot\rangle)$ be a positive-definite Euclidean space of rank $r\ge1$, and let $\Lambda\subset V$ be a positive-definite even integral full lattice in the sense of the preceding lattice definition. Fix a lattice basis $b_1,\ldots,b_r$ and write $G_{ij}=\langle b_i,b_j\rangle$. The basis is finite model data. Let $V_{\mathbb C}=V\otimes_{\mathbb R}\mathbb C$, extend $\langle\cdot,\cdot\rangle$ complex bilinearly to $V_{\mathbb C}\times V_{\mathbb C}$, and form the algebraic state space
$$\mathcal V_\Lambda=\bigoplus_{\lambda\in\Lambda}\operatorname{Sym}\!\left(\bigoplus_{n\ge1}V_{\mathbb C}t^{-n}\right)|\lambda\rangle,$$
where each vector is a finite polynomial in finitely many negative-mode generators and $|\lambda\rangle$ labels its momentum. The vacuum is $\mathbf1=|0\rangle$, with oscillator polynomial $1$. For $v\in V_\mathbb C$ and a polynomial $P$ in the negative modes, set
$$a^v_0(P|\mu\rangle)=\langle v,\mu\rangle P|\mu\rangle,\qquad a^v_{-n}(P|\mu\rangle)=(vt^{-n})P|\mu\rangle\quad(n>0).$$
For $n>0$, the positive mode kills every momentum vacuum, $a^v_n|\mu\rangle=0$, and acts on $P$ by the derivation determined by $a^v_n(wt^{-m})=n\langle v,w\rangle\delta_{nm}$. Thus $a^v_0$ commutes with all oscillator modes, and these definitions give $[a^v_m,a^w_n]=m\langle v,w\rangle\delta_{m+n,0}I$ on the entire state space. Let $\mathscr D$ be the polynomial derivation $\mathscr D(vt^{-n})=nvt^{-n-1}$. Define translation on each momentum sector by
$$\mathsf T(P|\mu\rangle)=\bigl(\mathscr D P+(\mu t^{-1})P\bigr)|\mu\rangle.$$
In particular $\mathsf T\mathbf1=0$ and $\mathsf T|\mu\rangle=a^\mu_{-1}|\mu\rangle$. Use the vertex-algebra state–field convention specified in Definition references; the lemma below proves that these candidate data satisfy it.

For $\lambda=\sum_i\lambda_i b_i$ and $\mu=\sum_i\mu_i b_i$, set
$$\epsilon(\lambda,\mu)=(-1)^{\sum_{i>j}G_{ij}\lambda_i\mu_j}.$$
Let $U_\lambda(P|\mu\rangle)=\epsilon(\lambda,\mu)P|\lambda+\mu\rangle$. It commutes with all nonzero modes, while $[a^v_0,U_\lambda]=\langle v,\lambda\rangle U_\lambda$. Write $e^\lambda=|\lambda\rangle$. Define the lattice field on a momentum-$\mu$ sector by
$$Y(e^\lambda,z)=\exp\!\left(\sum_{n\ge1}\frac{a^\lambda_{-n}z^n}{n}\right)\exp\!\left(-\sum_{n\ge1}\frac{a^\lambda_nz^{-n}}{n}\right)U_\lambda z^{a^\lambda_0}.$$
The rightmost factor acts first: $z^{a^\lambda_0}(P|\mu\rangle)=z^{\langle\lambda,\mu\rangle}P|\mu\rangle$. All powers and products are formal; opposite radial orders mean the respective binomial expansions, not analytic convergence. Set $Y(\mathbf1,z)=I$ and $Y(a^v_{-1}\mathbf1,z)=J^v(z)=\sum_{m\in\mathbb Z}a^v_mz^{-m-1}$. To specify descendants completely, split $J^v=J^v_-+J^v_+$ using $m<0$ and $m\ge0$, respectively. For $n\ge1$ and any already specified descendant field $B(z)$ put
$$: \frac{\partial_z^{n-1}J^v(z)}{(n-1)!}B(z):=\frac{\partial_z^{n-1}J^v_-(z)}{(n-1)!}B(z)+B(z)\frac{\partial_z^{n-1}J^v_+(z)}{(n-1)!}.$$
Thus zero modes belong to the right-hand, nonnegative-mode part. Define $Y(a^v_{-n}b,z)$ by this expression with $B=Y(b,z)$, starting with the displayed momentum fields and extending linearly on oscillator monomials in a fixed basis order. The lemma proves that this prescription is well-defined and agrees with the reconstructed state-field map. The stress tensor convention is $T(z)=\frac12\sum_{i=1}^r:J^{b_i^*}(z)J^{b_i^*}(z):$ for any orthonormal basis $b_i^*$ of $V$, with $J^v(z)=\sum_{n\in\mathbb Z}a^v_nz^{-n-1}$. This definition asserts no modular transformation or full nonchiral sewing theorem.

## Definition references

[[def-positive-even-unimodular-lattice]]

[[def-vertex-algebra-state-field]]

[[lem-st-chiral-lattice-boson-sector-properties]]

[Ginsparg, Chapter 7](https://arxiv.org/pdf/hep-th/9108028v1)

[Weigand, Chapter 6.9](https://www.thphys.uni-heidelberg.de/courses/weigand/Strings11-12.pdf)

## Remarks

The cocycle depends on the chosen finite lattice basis; the next lemma proves its two-cocycle and locality properties. The direct sum is algebraic, with no completion or analytic convergence claim.
