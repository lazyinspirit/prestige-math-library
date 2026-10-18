---
id: ex-lax-friedrichs-fv-monotone-under-cfl
kind: example
title: Lax–Friedrichs flux under the invariant-interval CFL bound
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
aliases: []
deps: [def-bounded-bv-data-on-line, def-monotone-finite-volume-entropy-scheme, thm-extreme-value-metric, cor-mean-value-theorem, def-countable-choice, def-dependent-choice, thm-monotone-finite-volume-entropy-convergence]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jérôme Droniou, A beginner’s course in finite volume approximation of scalar conservation laws, complete lecture note"
      url: "https://math.univ-cotedazur.fr/u/massonr/MAM5/droniou-scalar-hyp.pdf"
      locator: "§2.2.3, pp. 17–18: the Lax–Friedrichs numerical flux and its monotonicity condition; §2.3.3, pp. 22–23: convergence."
    - title: "Siddhartha Mishra, Ulrik S. Fjordholm and Rémi Abgrall, Numerical Methods for Conservation Laws, ETH lecture notes"
      url: "https://metaphor.ethz.ch/x/2019/hs/401-4671-00L/literature/mishra_hyperbolic_pdes.pdf"
      locator: "§4.4.4, p. 49: partial derivatives of the Lax–Friedrichs flux and the CFL condition; §4.6, pp. 55–57: convergence."
---

## Example

Assume $\mathrm{AC}_\omega$, and additionally assume Dependent Choice $\mathrm{DC}$ when $u_0\in L^1(\mathbb R)$.

Let $I=[a_-,a_+]$ be a compact invariant interval, let $f\in C^1(\mathbb R)$,
and choose finite $L,\alpha$ with $|f'(s)|\le L$ on $I$ and $\alpha\ge L$.
The Lax–Friedrichs flux
$$F_{\mathrm{LF}}(a,b):=\frac{f(a)+f(b)}2-\frac\alpha2(b-a)$$
is consistent, nondecreasing in $a$, nonincreasing in $b$, and has coordinate
Lipschitz bounds $L_1=L_2=(L+\alpha)/2$. Thus any bounded BV datum in $I$ and
mesh family satisfying
$$\frac{\tau_m}{h_m}(L+\alpha)\le1,\qquad \frac{\tau_m}{h_m}\ge c_*>0,\qquad h_m,\tau_m\to0$$
falls under [[thm-monotone-finite-volume-entropy-convergence]].

## Facts & Assumptions

**Given:** Countable Choice $\mathrm{AC}_\omega$, the compact interval $I$, $f\in C^1$, constants $L,\alpha$ with $|f'|\le L\le\alpha$ on $I$, bounded BV data $u_0$ in $I$, and the displayed numerical flux; additionally assume Dependent Choice $\mathrm{DC}$ when $u_0\in L^1(\mathbb R)$.

[F1] A continuous real-valued function on a compact interval is bounded, so a finite $L$ exists for $|f'|$ on $I$ ([[thm-extreme-value-metric]]).

[F2] If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then $f(b)-f(a)=f'(c)(b-a)$ for some $c\in(a,b)$ ([[cor-mean-value-theorem]]).

[F3] The full invariant-interval CFL condition uses the sum of coordinate Lipschitz bounds, and under $\mathrm{AC}_\omega$—with DC additionally on the $L^1$ branch—the convergence theorem requires a positive lower bound for $\tau/h$ ([[def-monotone-finite-volume-entropy-scheme]], [[def-countable-choice]], [[def-dependent-choice]], [[thm-monotone-finite-volume-entropy-convergence]]).

[F4] $u_0\in\mathrm{BV}_b(\mathbb R)$ is bounded and has finite translation variation ([[def-bounded-bv-data-on-line]]).

## Verification

1.1 On the diagonal, $F_{\mathrm{LF}}(s,s)=f(s)$, so the flux is consistent. If $a_2=a_1$, the first-coordinate difference is zero; if $a_2>a_1$, the mean-value theorem gives $F_{\mathrm{LF}}(a_2,b)-F_{\mathrm{LF}}(a_1,b)=\frac{f(a_2)-f(a_1)+\alpha(a_2-a_1)}2\ge\frac{\alpha-L}{2}(a_2-a_1)\ge0.$ Thus it is nondecreasing in its first coordinate. [F1, F2, given, algebra]

1.2 If $b_2=b_1$, the second-coordinate difference is zero; if $b_2>b_1$, the mean-value theorem gives $F_{\mathrm{LF}}(a,b_2)-F_{\mathrm{LF}}(a,b_1)=\frac{f(b_2)-f(b_1)-\alpha(b_2-b_1)}2\le-\frac{\alpha-L}{2}(b_2-b_1)\le0,$ so it is nonincreasing in its second coordinate. The mean-value bounds on each variable also give $L_1=L_2=(L+\alpha)/2$. [F1, F2, given, algebra]

2.1 Since $f$ is locally Lipschitz and the flux adds a linear term, $F_{\mathrm{LF}}$ is locally Lipschitz. The displayed flux is consistent by its diagonal formula, and steps 1.1 and 1.2 prove monotonicity with coordinate bounds whose sum is $L+\alpha$. Hence the displayed upper ratio gives the full CFL condition, while the lower ratio and bounded BV data satisfy the remaining hypotheses of [F3]. The convergence theorem applies. [F1, F2, F3, F4, step 1.1, step 1.2, algebra] ∎
