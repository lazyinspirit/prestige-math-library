---
id: lem-ip-mean-zero-neumann-problem-wellposedness
kind: lemma
title: Mean-zero weak Neumann problem for uniformly elliptic conductivities
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-ip-calderon-admissible-conductivity-class
  - def-surface-integral-on-a-compact-c-one-hypersurface
  - lem-ip-calderon-boundary-trace-quotient-identification
  - lem-surface-integral-is-independent-of-c-one-boundary-charts
  - thm-extension-theorem-for-bounded-smooth-domains
  - thm-lax-milgram
  - thm-poincare-wirtinger-on-bounded-connected-extension-domains
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Luca Rondi, On the regularization of the inverse conductivity problem with discontinuous conductivities"
      url: "https://www.aimsciences.org/article/doi/10.3934/ipi.2008.2.397"
      locator: "§2.1, weak Neumann problem and boundary dual formulation."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Theorem 3.29 (Poincaré inequality) and Theorem 4.12 (Lax–Milgram), printed pp. 78–79 and 98–99."
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $d\ge2$, let $\Omega\subset(0,1)^d$ be nonempty, bounded, connected and $C^1$, and let $\gamma\in L^\infty(\Omega;\mathbb R)$ satisfy $0<m\le\gamma\le M<\infty$ almost everywhere. Let $\mathcal D(\Omega)=H^1(\Omega;\mathbb C)/H_0^1(\Omega;\mathbb C)$ be the complex trace quotient and write $\dot{\mathcal D}=\mathcal D(\Omega)/\mathbb C\mathbf1$. Let $\dot{\mathcal D}^{*}$ denote the continuous conjugate-linear dual of $\dot{\mathcal D}$. For each $F\in\dot{\mathcal D}^{*}$ there is a unique weak solution class $[u]\in H^1(\Omega;\mathbb C)/\mathbb C\mathbf1$ satisfying
$$\int_\Omega\gamma\nabla u\cdot\overline{\nabla v}\,dx=F([\operatorname{Tr}v])\qquad(v\in H^1(\Omega)).$$
The resulting solution operator $\mathscr R_\gamma:\dot{\mathcal D}^{*}\to\dot{\mathcal D}$ is bounded. Its unique representative whose boundary trace has surface mean zero solves the same weak equation. In particular, for $f\in L^2(\partial\Omega)$ with $\int_{\partial\Omega}f\,dS=0$, the functional $F_f([g])=\int_{\partial\Omega}f\overline g\,dS$ is admissible and defines the mean-zero Neumann-to-Dirichlet map on mean-zero $L^2$ fluxes.

## Statement references

[[def-ip-calderon-admissible-conductivity-class|The real uniformly elliptic conductivity bounds.]]

[[lem-ip-calderon-boundary-trace-quotient-identification|The trace quotient and its constant quotient.]]

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice, $\Omega$, $\gamma$, and $F\in\dot{\mathcal D}^{*}$ as in the statement.

[F1] The hypotheses stated above give a real coefficient with $m\le\gamma\le M$ almost everywhere; these bounds make the weak form bounded and coercive. No narrower conductivity class is used for this estimate.

[F2] On a bounded connected extension domain, subtracting the volume mean gives $\|v-v_\Omega\|_{L^2}\le C\|\nabla v\|_{L^2}$. ([[thm-poincare-wirtinger-on-bounded-connected-extension-domains]])

[F3] The trace is bounded from $H^1(\Omega)$ to $H^{1/2}(\partial\Omega)$ and the trace quotient norm is equivalent to the boundary norm; constants correspond under the quotient identification. ([[lem-ip-calderon-boundary-trace-quotient-identification]])

[F4] A bounded coercive sesquilinear form on a Hilbert space and a bounded conjugate-linear functional have a unique weak solution with norm at most the functional norm divided by the coercivity constant. ([[thm-lax-milgram]])

[F5] Every bounded $C^1$ domain is a Sobolev extension domain, and its compact boundary has finite positive surface measure. ([[thm-extension-theorem-for-bounded-smooth-domains]], [[def-surface-integral-on-a-compact-c-one-hypersurface]], [[lem-surface-integral-is-independent-of-c-one-boundary-charts]])

[A1] The Axiom of Choice is used at the Poincaré and trace interfaces. ([[def-axiom-of-choice]])

[A2] Countable Choice is used at the Lax–Milgram interface. ([[def-countable-choice]])

## Proof

**Given:** The data in the statement.

1.1 Let $V=\{v\in H^1(\Omega):\int_\Omega v\,dx=0\}$, a closed Hilbert subspace of $H^1(\Omega)$. By [F2], $\|v\|_{H^1}\le C_0\|\nabla v\|_2$ on $V$, where $C_0=(1+C^2)^{1/2}$. By [F1], the form $a_\gamma(u,v)=\int_\Omega\gamma\nabla u\cdot\overline{\nabla v}$ is bounded on $V$ and $a_\gamma(v,v)\ge m\|\nabla v\|_2^2\ge mC_0^{-2}\|v\|_{H^1}^2$. Thus it is bounded and coercive on $V$. [A1, F1, F2, given, algebra]

2.1 Define $\ell_F(v)=F([\operatorname{Tr}v])$ for $v\in V$. By [F3], the quotient trace norm of $[\operatorname{Tr}v]$ is at most $C_1\|v\|_{H^1}$, so $|\ell_F(v)|\le C_1\|F\|\|v\|_{H^1}$; hence $\ell_F$ is bounded on $V$. Applying [F4] to step 1.1 gives a unique $u_0\in V$ with $a_\gamma(u_0,v)=\ell_F(v)$ for every $v\in V$. [A2, F3, F4, step 1.1, given]

3.1 For arbitrary $v\in H^1(\Omega)$ write $v=v_0+c$ with $v_0=v-v_\Omega\in V$ and $c=v_\Omega$. Gradients are unchanged by adding $c$, and $F$ acts on the trace quotient by constants, so the equation for $u_0$ on $V$ implies it for every $v\in H^1$. If $u_1$ represents another solution class, put $w=(u_1-u_0)-(u_1-u_0)_\Omega\in V$. Subtracting the two weak equations gives $a_\gamma(w,v)=0$ for all $v\in V$; setting $v=w$ and using coercivity from step 1.1 gives $w=0$. Thus the solution is unique modulo constants. [F1, step 1.1, step 2.1, algebra]

4.1 The estimate in [F4] and step 2.1 give $\|u_0\|_{H^1}\le C_0^2C_1m^{-1}\|F\|$. The bounded trace map [F3] therefore makes the solution class in $\dot{\mathcal D}$ a bounded linear function of $F$. By [F5], the compact smooth boundary has finite positive surface measure. Subtracting the surface mean of $\operatorname{Tr}u_0$ selects one representative with boundary mean zero; this constant shift preserves the weak equation and is the only such shift. For mean-zero $f\in L^2(\partial\Omega)$, Cauchy–Schwarz and the trace bound show $F_f$ is continuous, and its zero mean makes it independent of the representative modulo constants. This proves the final assertion. [F3, F4, F5, step 2.1, step 3.1, given, algebra] ∎
