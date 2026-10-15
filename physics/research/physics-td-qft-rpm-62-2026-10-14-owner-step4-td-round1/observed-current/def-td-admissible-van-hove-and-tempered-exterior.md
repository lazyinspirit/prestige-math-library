---
id: "def-td-admissible-van-hove-and-tempered-exterior"
kind: "definition"
title: "Van Hove regions and uniformly tempered exterior preparations"
status: "draft"
origin: "pipeline"
domain: "physics"
library: "physics"
physical_scope: "Classical positional pair-potential models in dimension d at least two, with free walls, periodic walls, or the explicitly bounded deterministic exterior class defined here."
deps: [def-td-stable-tempered-continuum-preparation]
dependency_roles:
  def-td-stable-tempered-continuum-preparation: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Hans-Otto Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction, Probability Theory and Related Fields 99 (1994), 171–195"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
    - title: "David Ruelle, Superstable Interactions in Classical Statistical Mechanics, Communications in Mathematical Physics 18 (1970), 127–159"
      url: "https://www.ihes.fr/~ruelle/PUBLICATIONS/%5B28%5D.pdf"
dependency_level: 4
---

## Definition

Use the dimensionless coordinates, simple configurations, and pair potential of [[def-td-stable-tempered-continuum-preparation]], with $d\geq2$ as stated in this physical scope. The boundary $\partial\Lambda$ is the topological boundary in the Euclidean topology of $\mathbb R^d$, and $\operatorname{dist}(x,\partial\Lambda)=\inf_{y\in\partial\Lambda}|x-y|_2$. For a bounded measurable region $\Lambda$, define its two-sided layer of width $s>0$ by
$$\partial_s\Lambda=\{x\in\mathbb R^d:\operatorname{dist}(x,\partial\Lambda)\leq s\}.$$
A sequence $(\Lambda_k)_{k\geq1}$ of bounded measurable regions is van Hove if $0<|\Lambda_k|<\infty$, $|\Lambda_k|\to\infty$, and, for every fixed $s>0$,
$$\frac{|\partial_s\Lambda_k|}{|\Lambda_k|}\longrightarrow0.$$
This is the two-sided Euclidean boundary-layer condition used by the mathematical shape suppliers; it controls points on both sides of $\partial\Lambda_k$. Increasing volume alone does not imply it. A free wall permits particles only in $\Lambda_k$ and includes no exterior particles. A periodic wall uses the specified periodic cell and its image convention.

For the deterministic exterior class, let $C=[-1/2,1/2)^d$ and $\Lambda_n=[-n-1/2,n+1/2)^d$, with dimensionless volume $V_n=|\Lambda_n|$. A configuration $\zeta\subset\mathbb R^d$ is locally finite if $|\zeta\cap K|<\infty$ for every bounded set $K\subset\mathbb R^d$. For such $\zeta$, write $N_{C+i}(\zeta)=|\zeta\cap(C+i)|$. The parameter $t$ is dimensionless. Given $0\leq t<\infty$, define
$$\Omega(t)=\left\{\zeta:\sum_{i\in\Lambda_n\cap\mathbb Z^d}N_{C+i}(\zeta)^2\leq tV_n\ \text{for every integer }n\geq0\right\}.$$
For an interior finite configuration $\omega\subset\Lambda_n$ and $\zeta\in\Omega(t)$, its exterior interaction is
$$W_n(\omega,\zeta)=\sum_{x\in\omega}\sum_{y\in\zeta\setminus\Lambda_n}\varphi(x-y).$$
This sum is well-defined in $\mathbb R\cup\{+\infty\}$. Indeed, Cauchy--Schwarz and the defining bound for $\Omega(t)$ give $|\zeta\cap\Lambda_m|\leq\sqrt t\,V_m=O_t(m^d)$. Since $\omega$ is finite and bounded, for each fixed $x\in\omega$ and all sufficiently large dyadic shells $2^k\leq |y|_2<2^{k+1}$, one has $|x-y|_2\geq c2^k$ for some $c>0$. The absolute interaction on that shell is at most a constant times $2^{kd}\psi(c2^k)$. These bounds are summable: monotonicity gives $\int_{c2^{k-1}}^{c2^k}r^{d-1}\psi(r)\,dr\geq C_d2^{kd}\psi(c2^k)$ for a constant $C_d>0$, and the tail integral is finite. Only finitely many near exterior points remain; if one contributes $+\infty$, set $W_n=+\infty$, and otherwise the near sum and absolutely convergent tail define $W_n$. A positive infinite value has zero Boltzmann weight. The class $\Omega(t)$ is a fixed uniform bound on exterior cell counts, not permission for an arbitrary volume-filling external potential. The van Hove and uniformly tempered exterior conditions are separate boundary regimes.
