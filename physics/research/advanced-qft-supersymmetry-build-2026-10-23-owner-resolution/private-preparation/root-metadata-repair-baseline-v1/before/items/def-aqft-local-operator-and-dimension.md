---
id: def-aqft-local-operator-and-dimension
kind: definition
title: Finite-jet local operators and engineering dimension
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 0
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps: [def-reductive-and-linearly-reductive-over-c]
dependency_roles:
  def-reductive-and-linearly-reductive-over-c: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "C. P. Burgess, Introduction to Effective Field Theory"
      url: "https://arxiv.org/pdf/hep-th/0701053"
    - title: "Matthias Neubert, Effective Field Theory and Heavy Quark Physics (2004 TASI Lectures)"
      url: "https://arxiv.org/pdf/hep-ph/0512222"
verification:
  precheck: n/a
---
## Definition

Use natural units $c=\hbar=1$ on four-dimensional Minkowski space $M=\mathbb R^{1,3}$ with coordinates $x^0=ct,x^1,x^2,x^3$ and metric $\eta=\operatorname{diag}(-1,1,1,1)$. Fix a complex affine algebraic group $G$ with no nontrivial closed normal unipotent subgroup, where unipotent means that every nonzero finite-dimensional rational module has a nonzero fixed vector; this is the reductive hypothesis. Fix a finite set $I$ of field species. For each $i\in I$, fix a finite-dimensional complex $\mathbb Z/2$-graded vector space $\Phi_i=\Phi_i^{\bar 0}\oplus\Phi_i^{\bar 1}$, a field parity, and an algebraic representation $\rho_i:G\to\operatorname{GL}(\Phi_i)$. Include the declared spacetime-index action in $G$ or in its specified finite-dimensional representation data. A field configuration assigns smooth component functions on $M$ to the even generators and formal odd Grassmann generators with smooth coefficient functions to the odd generators.

Fix a derivative cutoff $r\geq0$, a maximum polynomial field degree $q\geq0$, and a rational engineering weight $\Delta_i$ for each field species. A derivative $\partial_\mu$ has engineering weight one, and an $s$-jet generator is a component of $\partial_{\mu_1}\cdots\partial_{\mu_s}\phi_i(x)$ for $0\leq s\leq r$. If covariant derivatives are used, their finite jet generators and $G$-action are included explicitly in the same data. Let $J_r$ be the resulting finite-dimensional $\mathbb Z/2$-graded vector space with its specified algebraic representation $\rho_r:G\to\operatorname{GL}(J_r)$. Its polynomial algebra is the supercommutative algebra $P_r=\operatorname{Sym}(J_{r,\bar 0}^{*})\otimes\Lambda(J_{r,\bar 1}^{*})$: even generators commute and odd generators anticommute. For a fixed weight $D\in\mathbb Q$, let $P_{r,q,D}$ be the complex span of monomials of total engineering weight $D$ and total polynomial degree at most $q$.

A local operator in this finite-order data is an element of $P_{r,q,D}$ evaluated at $x$ on the $r$-jet of the fields. A scalar operator invariant under the declared symmetries is an element of $V_{r,q,D}=P_{r,q,D}^{G}$. Engineering dimension means this assigned mass weight; it is not a statement about an observed quantity. In four dimensions a term with operator $\mathcal O_D$ has the convention $C\mathcal O_D/\Lambda^{D-4}$, where $\Lambda$ has mass dimension one and $C$ is dimensionless. Reality conditions, when required for a real action, are additional conjugation data on $V_{r,q,D}$.

## Definition references

[[def-reductive-and-linearly-reductive-over-c|Reductive and linearly reductive complex algebraic groups]]

[Burgess, §§2.1–2.2](https://arxiv.org/pdf/hep-th/0701053)

[Neubert, §2](https://arxiv.org/pdf/hep-ph/0512222)
