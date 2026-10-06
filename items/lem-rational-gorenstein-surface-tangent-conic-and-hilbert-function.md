---
id: lem-rational-gorenstein-surface-tangent-conic-and-hilbert-function
kind: lemma
title: "The tangent conic of a rational Gorenstein surface singularity"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 13
deps: [
          cor-degree-additive-proper-curve, def-axiom-of-choice, def-dependent-choice,
                    def-hilbert-function-and-hilbert-series,
                    lem-rational-normal-surface-point-blowup-normal-and-fibre-cohomology,
                    lem-rational-singular-point-blowup-canonical-pullback-surjective,
                    lem-regular-base-surface-cartier-curve-canonical-adjunction,
                    thm-cohomology-projective-space-twisting-sheaves,
                    thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Sections 54.8\u201354.9: complete source arguments with local prerequisite replacements"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. Let $A$ be a nonregular rational normal local surface domain in the permitted canonical-module setting, with $\omega_A\cong A$. Then its point blowup is normal with trivial canonical module. Its exceptional conormal $L$ has degree two and $\dim_\kappa\mathfrak m^n/\mathfrak m^{n+1}=2n+1$. For a minimal generating triple of $\mathfrak m$, the associated graded ring is $\kappa[T_1,T_2,T_3]/(q)$ for one nonzero quadratic $q$, so the exceptional fibre is its plane conic.

## Facts & Assumptions

**Given:** A nonregular rational normal local surface domain $(A,\mathfrak m,\kappa)$ in the permitted canonical-module setting with $\omega_A\cong A$, its ordinary point blowup $f\colon X\to\operatorname{Spec}A$, exceptional divisor $E$ and tautological ideal $I=\mathcal O_X(1)$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *def-hilbert-function-and-hilbert-series.* Let $S=\bigoplus_{n\ge0}S_n$ be a graded ring and $M=\bigoplus_{n\in\mathbb Z}M_n$ a graded $S$-module. Assume each homogeneous piece $M_n$ has finite length as an $S_0$-module and that $M_n=0$ for all sufficiently negative $n$. The **Hilbert function** of $M$ is  ([[def-hilbert-function-and-hilbert-series]])

[F4] *lem-rational-normal-surface-point-blowup-normal-and-fibre-cohomology.* Assume AC and DC. For a rational permitted normal local surface domain $(A,\mathfrak m,\kappa)$, its ordinary point blowup $X$ is normal. Its exceptional fibre $E$ is a projective pure CM curve, its tautological conormal line $L=\mathcal O_E(1)$ is very ample, and $H^1(E,L^n)=0$, $H^0(E,L^n)=\mathfrak m^n/\mathfrak m^{n+1}$ for $n\ge0$. ([[lem-rational-normal-surface-point-blowup-normal-and-fibre-cohomology]])

[F5] *lem-rational-singular-point-blowup-canonical-pullback-surjective.* Assume AC and DC. For a nonregular rational normal local surface domain in the permitted regular-base dualizing setting, let $f:X\to\operatorname{Spec}A$ be its ordinary point blowup, $E$ its exceptional divisor and $I=O_X(1)$. Then $H^1(X,\omega_X\otimes I^n)=0$ for $n\ge0$ and the canonical evaluation $f^*\omega_A\to\omega_X$ is surjective. ([[lem-rational-singular-point-blowup-canonical-pullback-surjective]])

[F6] *lem-regular-base-surface-cartier-curve-canonical-adjunction.* Assume AC and DC. For a normal projective surface modification $X$ over a finite normal local domain $A$ of a regular two-dimensional local ring $R$, let $E$ be a Cartier closed fibre with residue field $\kappa$ and conormal $L=O_X(-E)|_E$. ([[lem-regular-base-surface-cartier-curve-canonical-adjunction]])

[F7] *cor-degree-additive-proper-curve.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field and let $C$ be a proper $k$-scheme (def-proper-morphism) whose underlying topological space has dimension at most one (def-dimension-noetherian-topological-space). For all invertible $\mathcal O_C$-modules $\mathcal L$ and $\mathcal M$ (def-invertible-sheaf): 1. ([[cor-degree-additive-proper-curve]])

[F8] *thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme.* Assume AC. Let $k$ be a field and let $X$ be a projective, pure $d$-dimensional Cohen–Macaulay $k$-scheme. Let $D_X=\omega_X[d]$ be its normalized dualizing complex, and let $t_X:H^d(X,\omega_X)\to k$ be its trace. ([[thm-serre-duality-for-coherent-sheaves-on-projective-cm-scheme]])

[F9] *thm-cohomology-projective-space-twisting-sheaves.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a commutative ring with $1$ (def-commutative-ring), let $n\ge0$, let $d\in\mathbb Z$ and let $X=\mathbb P^n_A\cong\operatorname{Proj}A[x_0,\dots,x_n]$ be relative projective space (def-relative-projective-space-standard-charts, def-polynomial-ring-on-a-family-of-indeterminates), with twisting sheaf  ([[thm-cohomology-projective-space-twisting-sheaves]])

## Proof

1.1 The canonical evaluation $f^*\omega_A\to\omega_X$ is surjective, and $\omega_A\cong A$ makes its source $\mathcal O_X$; since $\omega_X$ is torsion-free of generic rank one, the surjection $\mathcal O_X\to\omega_X$ is an isomorphism, so the point blowup has trivial canonical module. [F5, given]

2.1 The point-blowup helper gives that $X$ is normal, that $E$ is a projective pure Cohen--Macaulay curve with $H^0(E,\mathcal O_E)=\kappa$ and $H^1(E,\mathcal O_E)=0$, and that $L=I|_E$ is very ample with $H^1(E,L^n)=0$ and $H^0(E,L^n)=\mathfrak m^n/\mathfrak m^{n+1}$ for $n\ge0$; Cartier adjunction, together with the trivial canonical module, gives $\omega_E=\omega_X|_E\otimes L^{-1}=L^{-1}$. [F4, F6, step 1.1]

3.1 Since $L$ is globally generated and nontrivial, let $0\ne s\in H^0(E,L^{-1})$ and choose a finite family of global sections generating $L$. If every product of one of these sections with $s$ were zero, then on the open set where each generator is a frame it would force $s=0$; these opens cover $E$, a contradiction. Thus some $t\in H^0(E,L)$ has $ts\ne0$. As $H^0(E,\mathcal O_E)=\kappa$, this product is a unit, so the homomorphism $L\xrightarrow{s}\mathcal O_E$ is surjective and hence an isomorphism, contradicting that the very ample line bundle $L$ is nontrivial. Therefore $H^0(E,L^{-1})=0$, while Serre duality gives $H^1(E,L^{-1})=H^1(E,\omega_E)=H^0(E,\mathcal O_E)^\vee$ of dimension one. [F4, F8, step 2.1]

4.1 Therefore $\chi(E,L^{-1})=-1$ and $\chi(E,\mathcal O_E)=1$, so the degree satisfies $\deg_E L^{-1}=\chi(L^{-1})-\chi(\mathcal O_E)=-2$, and additivity of degree gives $\deg_E L=-\deg_E L^{-1}=2$; tensor-power additivity then gives $\chi(E,L^n)=1+2n$, hence $\dim_\kappa\mathfrak m^n/\mathfrak m^{n+1}=2n+1$ for every $n\ge0$. [F7, step 3.1]

5.1 In particular $\dim_\kappa\mathfrak m/\mathfrak m^2=3$ and $\dim_\kappa\mathfrak m^2/\mathfrak m^3=5$; the natural surjection $\kappa[T_1,T_2,T_3]\to\operatorname{gr}_{\mathfrak m}A$ therefore has a nonzero quadratic $q$ in its kernel, and because the degree-two part of the polynomial ring has dimension six and that of $\operatorname{gr}_{\mathfrak m}A$ has dimension five, the quadratic part of the kernel is spanned by $q$. [F3, step 4.1]

6.1 Multiplication by a nonzero quadratic in the polynomial ring is injective, so the quotient $\kappa[T_1,T_2,T_3]/(q)$ has degree-$n$ dimension $\binom{n+2}{2}-\binom{n}{2}=2n+1$; the induced surjection onto $\operatorname{gr}_{\mathfrak m}A$ is thus a map of vector spaces of equal finite dimension in every degree, hence an isomorphism, so $\operatorname{gr}_{\mathfrak m}A\cong\kappa[T_1,T_2,T_3]/(q)$. [F3, step 5.1]

7.1 Taking Proj identifies the exceptional fibre $E$ with the plane conic $\{q=0\}\subseteq\mathbb P^2_\kappa$; the resolution $0\to\mathcal O(-2)\to\mathcal O\to\mathcal O_{\{q=0\}}\to0$ together with the projective-space cohomology calculation reproduces the same Hilbert function $2n+1$, confirming the identification, and the Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, F9, step 6.1] ∎

## Remarks

- Nonregularity gives $\deg_E L=2$, which is what makes the tangent conic a genuine conic rather than a line.
- The argument avoids applying smooth-curve Riemann--Roch to a possibly nonreduced exceptional curve.
