---
id: lem-ip-calderon-boundary-trace-quotient-identification
kind: lemma
title: Boundary trace quotient and chart norm equivalence
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-fractional-sobolev-space-on-a-compact-c-one-boundary
  - def-hk-and-hk-zero-notation
  - def-wkp-zero-as-a-sobolev-closure
  - thm-bounded-right-inverse-for-the-sobolev-trace
  - thm-kernel-of-the-trace-is-w-one-p-zero
  - thm-sharp-trace-theorem-for-w-one-p
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Petru Mironescu, Fine properties of functions: an introduction (author-hosted 89-page edition)"
      url: "https://math.univ-lyon1.fr/~mironescu/resources/introduction_fine_properties_functions_2005.pdf"
      locator: "Chapter 11, Theorem 25 and Remark 12, printed pp. 77–79: boundedness, surjectivity and right inverses for the fractional trace."
    - title: "Pedro Caro, Andoni García and Juan Manuel Reyes, Stability of the Calderón problem for less regular conductivities"
      url: "https://arxiv.org/pdf/1205.2487"
      locator: "Section 1, printed pp. 2–3: the boundary trace is represented by the quotient H1(Ω)/H01(Ω)."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $n\ge2$ and let $\Omega\subset\mathbb R^n$ be a nonempty bounded connected open set whose boundary is covered by finitely many $C^1$ graph charts. Give $H^1(\Omega;\mathbb K)=W^{1,2}(\Omega;\mathbb K)$ its Sobolev norm, let $H_0^1(\Omega;\mathbb K)$ be the $H^1$-closure of $C_c^\infty(\Omega;\mathbb K)$, and let $W^{1/2,2}(\partial\Omega;\mathbb K)$ have the finite-chart Slobodeckij norm. Define $\mathcal D(\Omega):=H^1(\Omega;\mathbb K)/H_0^1(\Omega;\mathbb K)$ with its quotient norm. The trace induces a bounded linear bijection $\overline T:\mathcal D(\Omega)\to W^{1/2,2}(\partial\Omega;\mathbb K)$ with bounded inverse, so these two norms are equivalent under the induced identification. The induced map after quotienting by constants is also a bounded linear bijection $\mathcal D(\Omega)/\mathbb K\mathbf1\to W^{1/2,2}(\partial\Omega;\mathbb K)/\mathbb K$, with equivalent quotient norms. A continuous linear functional on $W^{1/2,2}(\partial\Omega;\mathbb K)$ descends to the constant quotient exactly when it annihilates constants, and its descended functional has the quotient dual norm.

## Statement references

[[thm-kernel-of-the-trace-is-w-one-p-zero|The trace kernel is the zero-boundary Sobolev closure.]]

[[thm-sharp-trace-theorem-for-w-one-p|The trace range at exponent $1-1/p$ is the fractional boundary space.]]

[[thm-bounded-right-inverse-for-the-sobolev-trace|The fractional trace has a bounded right inverse.]]

[[def-fractional-sobolev-space-on-a-compact-c-one-boundary|The boundary norm is the finite-chart Slobodeckij norm.]]

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; the bounded $C^1$ domain; the trace operator $T$; and the quotient spaces in the statement.

[F1] The trace is bounded from $H^1(\Omega)$ into $W^{1/2,2}(\partial\Omega)$ and is onto. ([[thm-sharp-trace-theorem-for-w-one-p]])

[F2] The kernel of the trace is exactly $H_0^1(\Omega)$, the closure of compactly supported smooth functions. ([[thm-kernel-of-the-trace-is-w-one-p-zero]], [[def-wkp-zero-as-a-sobolev-closure]])

[F3] There is a bounded right inverse $R:W^{1/2,2}(\partial\Omega)\to H^1(\Omega)$ with $TRf=f$. ([[thm-bounded-right-inverse-for-the-sobolev-trace]])

[F4] The trace-page boundary norm is a finite-chart Slobodeckij norm on almost-everywhere boundary classes. ([[def-fractional-sobolev-space-on-a-compact-c-one-boundary]])

[A1] The Axiom of Choice and Countable Choice are assumed at the cited trace and boundary-space interfaces. ([[def-axiom-of-choice]], [[def-countable-choice]])

## Proof

**Given:** The data in the statement.

1.1 If $u-v\in H_0^1(\Omega)$, then [F2] gives $Tu=Tv$, so $\overline T[u]:=Tu$ is well-defined on $\mathcal D(\Omega)$. By [F1], $\|\overline T[u]\|_{W^{1/2,2}(\partial\Omega)}\le C\|u\|_{H^1(\Omega)}$ for every representative $u$; taking the infimum over its coset gives $\|\overline T[u]\|\le C\|[u]\|_{\mathcal D}$. If $\overline T[u]=0$, [F2] gives $u\in H_0^1$, hence $[u]=0$; thus the induced map is injective. [F1, F2, F4, given, algebra]

1.2 By [F1], every $f\in W^{1/2,2}(\partial\Omega)$ is $Tu$ for some $u\in H^1(\Omega)$, so $\overline T$ is onto. More quantitatively, choose the lift $Rf$ from [F3]. Then $\overline T[Rf]=f$ and $\|[Rf]\|_{\mathcal D}\le\|Rf\|_{H^1}\le C\|f\|_{W^{1/2,2}}$, proving that the inverse is bounded. [A1, F1, F3, given, construct]

2.1 The trace of a constant function is that same constant, so $\overline T$ maps the closed constant subspace $\mathbb K\mathbf1\subset\mathcal D(\Omega)$ onto the constant subspace of $W^{1/2,2}(\partial\Omega)$. The bounded isomorphism and its bounded inverse from steps 1.1–1.2 therefore induce a bounded isomorphism on the two quotient spaces, with equivalent quotient norms. [step 1.1, step 1.2, given, algebra]

2.2 If $\ell$ is a continuous linear functional on $W^{1/2,2}(\partial\Omega)$ that annihilates constants, then $\dot\ell([f]):=\ell(f)$ is independent of the representative because $\ell(f+c)=\ell(f)$ for every constant $c$. By the quotient-norm definition, $|\dot\ell([f])|\le\|\ell\|\inf_c\|f+c\|_{W^{1/2,2}}$, so $\dot\ell$ is continuous with quotient dual norm at most $\|\ell\|$. Conversely, any functional that factors as $\ell=\varphi\circ q$ vanishes on constants because $q(c)=0$; and $|\varphi(qf)|\le\|\varphi\|\|qf\|\le\|\varphi\|\|f\|$ because the quotient map $q$ has norm at most one. Hence $\|\ell\|\le\|\varphi\|$, while the first inequality gives $\|\varphi\|\le\|\ell\|$ for the induced functional. This proves the equivalence and equality of dual norms. [given, algebra]
