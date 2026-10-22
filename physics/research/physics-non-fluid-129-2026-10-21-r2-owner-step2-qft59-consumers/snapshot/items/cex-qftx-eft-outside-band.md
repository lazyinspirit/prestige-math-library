---
id: cex-qftx-eft-outside-band
kind: counterexample
domain: mathematics
library: mathematics
title: A derivative truncation needs its energy band
status: draft
origin: pipeline
dependency_level: 3
deps:
  - def-axiom-of-choice
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - thm-qftx-heavy-derivative-bound
  - lem-nrqm-observables-l2-multiplication-spectral-measure
  - def-l-p-space-as-a-quotient-by-null-functions
  - lem-l-two-with-the-integral-pairing-is-a-hilbert-space
justified_by: []
forward_refs: []
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  lem-ac-supplies-sequential-choices-for-probability-constructions: mathematical-premise
  thm-qftx-heavy-derivative-bound: mathematical-premise
  lem-nrqm-observables-l2-multiplication-spectral-measure: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  lem-l-two-with-the-integral-pairing-is-a-hilbert-space: mathematical-premise
physical_scope: Pure mathematics; no physical premises or physical claim.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Matthias Neubert, Effective Field Theory and Heavy Quark Physics"
      url: "https://arxiv.org/pdf/hep-ph/0512222"
      locator: "§2, printed pp.3–5, equations (2)–(10): the Wilsonian local expansion requires retained energies well below the heavy scale."
    - title: "C. P. Burgess, Introduction to Effective Field Theory"
      url: "https://arxiv.org/pdf/hep-th/0701053"
      locator: "§§2.2.1 and 2.2.4, printed pp.20–24: local inverse-mass expansions are truncations with scale power counting."
verification:
  precheck: pending
---

## Statement

Assume AC. Let $dp$ denote Lebesgue measure on the momentum line $\mathbb R$, and let $H=L^2(\mathbb R,dp;\mathbb C)$ be the space of equivalence classes modulo Lebesgue-a.e. equality of complex measurable functions $u$ satisfying $\int_\mathbb R|u(p)|^2\,dp<\infty$, with pairing $\langle u,v\rangle=\int_\mathbb R u(p)\overline{v(p)}\,dp$, linear in its first variable, and induced norm $\|u\|_2=(\int_\mathbb R|u(p)|^2\,dp)^{1/2}$. Define the multiplication operator $A$ by
$$A=M_{p^2},\qquad D(A)=\{u\in H:p^2u\in H\},$$
with $(Au)(p)=p^2u(p)$ almost everywhere. For each integer $r\ge1$, let $A^r$ be multiplication by $p^{2r}$ on $D(A^r):=\{u\in H:p^{2r}u\in H\}$; set $A^0=I$ with $D(A^0)=H$. Fix $M>0$, $0\le E<M$, and let $N$ be a nonnegative integer. This is the no-band case for the low-energy remainder estimate: the polynomial approximation to $(M^2+p^2)^{-1}$ has multiplier remainder
$$r_N(p^2)=M^{-2}\frac{(-p^2/M^2)^{N+1}}{1+p^2/M^2}.$$
Let $r_N(A)$ denote multiplication by $r_N(p^2)$ on the maximal domain $D(r_N(A)):=\{u\in H:r_N(p^2)u\in H\}$. There is a unit vector $u\in\bigcap_{r=0}^{N+1}D(A^r)$ for which
$$\|r_N(A)u\|>M^{-2}(E^2/M^2)^{N+1}.$$
Thus the low-energy factor in the remainder estimate cannot hold uniformly on the full momentum spectrum. Here $p,M,E$ have mass units, $dp$ has mass units, $A$ has mass-squared units, and $\hbar=c=1$. This is a mathematical counterexample to removing the spectral-band hypothesis; it is not a measured physical failure.

## Statement references

[[thm-qftx-heavy-derivative-bound]]

## Facts & Assumptions

**Given:** The complex $L^2$ space, the multiplier operator $A$, $M>0$, $0\le E<M$, and $N\ge0$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[A2] [[lem-ac-supplies-sequential-choices-for-probability-constructions]]: AC implies Countable Choice, which is also required by the multiplication and L2 Hilbert suppliers.

[F1] [[thm-qftx-heavy-derivative-bound]]: its estimate assumes $J$ belongs to the spectral subspace $E_A([0,E^2])H$.

[F2] [[lem-nrqm-observables-l2-multiplication-spectral-measure]]: for real measurable multiplier $m$, $M_m$ on $D(M_m)=\{u:mu\in L^2\}$ is self-adjoint and its spectral projections are multiplication by indicators of $m^{-1}(B)$.

[F3] [[def-l-p-space-as-a-quotient-by-null-functions]]: $L^2$ consists of measurable complex functions modulo equality almost everywhere.

[F4] [[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]]: on complex $L^2$, $\langle f,g\rangle=\int f\overline g$ is a Hilbert-space inner product with $\|f\|_2^2=\int|f|^2$.

## Proof

**Proof technique:** direct multiplier calculation and compactly supported unit vectors.

**Given:** The hypotheses and notation in the Statement.

1.1 By [A1]–[A2], the AC and Countable Choice assumptions of [F2] and [F4] hold. Apply [F2] with $m(p)=p^2$ on the sigma-finite positive-measure space $(\mathbb R,dp)$; sigma-finiteness follows from $\mathbb R=\bigcup_{n\ge1}[-n,n]$ and $[-1,1]$ has positive finite measure. It gives the self-adjoint nonnegative multiplication operator $A$ with the displayed domain and spectral calculus. The multiplier $(M^2+p^2)^{-1}$ is bounded by $M^{-2}$ and maps $H$ into $D(A)$ because $p^2/(M^2+p^2)\le1$; pointwise multiplication then shows it is the two-sided inverse of $M^2I+A$. For $u$ with bounded support, every $A^ru$ is in $H$. Pointwise finite geometric division gives
$$
(M^2+p^2)^{-1}-M^{-2}\sum_{r=0}^{N}(-p^2/M^2)^r=r_N(p^2),
$$
so the remainder on such $u$ is multiplication by $r_N(p^2)$. [A1, A2, F2, F3, F4, given, algebra]

2.1 The target coefficient $C_N:=M^{-2}(E^2/M^2)^{N+1}$ is finite and is strictly less than $M^{-2}$. If $N=0$, $|r_0(q)|=M^{-2}(q/M^2)/(1+q/M^2)\to M^{-2}>C_0$ as $q\to\infty$. If $N\ge1$, $|r_N(q)|=M^{-2}(q/M^2)^{N+1}/(1+q/M^2)\to\infty$. In either case choose $P>0$ so that $|r_N(p^2)|>C_N$ for every $p\in[P,P+M]$, and put $u=M^{-1/2}\mathbf1_{[P,P+M]}$. The interval has Lebesgue measure $M$, so $\|u\|_2^2=M^{-1}\int_P^{P+M}1\,dp=1$; its bounded support puts it in every $D(A^r)$, while
$$\|r_N(A)u\|_2^2=M^{-1}\int_P^{P+M}|r_N(p^2)|^2\,dp>C_N^2.$$
Thus the full-space bound fails. The restriction $E<M$ is precisely what makes the proposed low-energy coefficient smaller than the $N=0$ high-momentum limit; the example does not contradict the band-limited theorem. [A1, F1, F2, F3, F4, step 1.1, algebra] ∎
