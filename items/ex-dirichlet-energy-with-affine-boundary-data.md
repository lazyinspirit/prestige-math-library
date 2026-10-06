---
id: ex-dirichlet-energy-with-affine-boundary-data
kind: example
title: "The harmonic affine extension minimises the Dirichlet energy"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps: [thm-dirichlet-principle-for-poisson-equation, thm-kernel-of-the-trace-is-w-one-p-zero, thm-lp-trace-operator-on-a-bounded-c-one-domain, thm-poincare-inequality-for-w-one-p-zero, def-hk-and-hk-zero-notation, def-axiom-of-choice, def-wkp-zero-as-a-sobolev-closure, thm-divergence-theorem-for-bounded-c-one-euclidean-domains, thm-holder-inequality-for-integrals]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.2, Example 13.7, printed pp. 299-300"
    - title: "Riccardo Cristoferi, Calculus of Variations: Lecture Notes, Carnegie Mellon University 2016 (complete 133-page notes)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 4 Section 4.1, example (i), printed p. 48"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

**Example.** Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\Omega\subseteq\mathbb R^n$, $n\ge2$, be a bounded $C^1$ domain and let $a(x)=c_0+\ell(x)$ be affine on $\overline\Omega$, so that $\Delta a=0$ and $Da=\ell$ is constant. Then $a$ is the unique minimiser of the Dirichlet energy
$$I(v)=\frac12\int_\Omega|Dv|^2\,dx$$
on the affine trace class $K_{a}=\{v\in H^1(\Omega):Tv=Ta\}$ ([[thm-lp-trace-operator-on-a-bounded-c-one-domain]]): for every $v\in K_a$, $v-a\in H^1_0(\Omega)$ and
$$I(v)=I(a)+\frac12\int_\Omega|D(v-a)|^2\,dx\ \ge\ I(a),$$
with equality if and only if $D(v-a)=0$ almost everywhere, and then $v=a$ almost everywhere by the Poincare inequality on $H^1_0(\Omega)$ ([[thm-poincare-inequality-for-w-one-p-zero]]).

## Facts & Assumptions

**Given:** The Axiom of Choice; a bounded $C^1$ domain $\Omega\subseteq\mathbb R^n$, an affine function $a(x)=c_0+\ell(x)$ on $\overline\Omega$ (so $Da=\ell$ is a constant field and $\Delta a=0$), the Dirichlet energy $I(v)=\tfrac12\int_\Omega|Dv|^2dx$, and the affine trace class $K_a=\{v\in H^1(\Omega):Tv=Ta\}$.

[F1] $K_a$ is nonempty, convex and weakly closed, and $v-a\in H^1_0(\Omega)$ for every $v\in K_a$ by the kernel description $\ker T=H^1_0(\Omega)$ ([[thm-kernel-of-the-trace-is-w-one-p-zero]], [[thm-lp-trace-operator-on-a-bounded-c-one-domain]]).

[F2] Poincare's inequality on $H^1_0(\Omega)$: if $D\eta=0$ almost everywhere for $\eta\in H^1_0(\Omega)$, then $\eta=0$ ([[thm-poincare-inequality-for-w-one-p-zero]]).

[F3] Under the Axiom of Choice, the ultrafilter lemma, Dependent Choice and Hahn--Banach, the Dirichlet principle also identifies an affine-class minimiser with the unique weak solution ([[thm-dirichlet-principle-for-poisson-equation]]). In the zero-forcing case here, $a$ is weakly harmonic with trace $Ta$, since $Da=\ell$ is constant and $\int_\Omega Da\cdot D\varphi=\ell\cdot\int_\Omega D\varphi=0$ for every $\varphi\in H^1_0(\Omega)$ ([[def-hk-and-hk-zero-notation]]).

## Verification

**Proof technique:** direct completion of the square.

1.1 Orthogonality of the cross term. For $v\in K_a$ one has $\eta:=v-a\in H^1_0(\Omega)$ by [F1], and $Da=\ell$ is a constant field, so $\int_\Omega Da\cdot D\eta\,dx=\ell\cdot\int_\Omega D\eta\,dx=0$: each component of $D\eta$ has vanishing integral, because $\eta$ is the $H^1$-limit of functions in $C_c^\infty(\Omega)$ and for those the integral of each partial derivative vanishes by integration by parts against the smooth constant field ([[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]). Passage to the $H^1$ limit is valid since $|\int D_i(\eta-\eta_m)|\le|\Omega|^{1/2}\|D_i(\eta-\eta_m)\|_2\to0$ by Holder ([[thm-holder-inequality-for-integrals]]). [F1, algebra]

2.1 The energy identity. Expanding the square, $|Dv|^2=|Da+D\eta|^2=|Da|^2+2Da\cdot D\eta+|D\eta|^2$, and integrating with step 1.1 gives $I(v)=I(a)+\tfrac12\int_\Omega|D\eta|^2dx\ge I(a)$. [step 1.1, algebra]

3.1 Equality case. Equality holds exactly when $D\eta=0$ almost everywhere, which by [F2] forces $\eta=0$, that is $v=a$ almost everywhere. [F2, step 2.1]

4.1 $a$ is the minimiser. By steps 2.1 and 3.1 every $v\in K_a$ satisfies $I(v)\ge I(a)$ with equality only for $v=a$; since $a\in K_a$, it is the unique minimiser of $I$ on $K_a$. This direct completion-of-the-square argument proves the example's claim. Under the additional choice hypotheses stated in [F3], the general Dirichlet principle also identifies this minimiser with the weak solution; the weak harmonicity of $a$ was checked in [F3]. [F3, step 2.1, step 3.1] ∎
