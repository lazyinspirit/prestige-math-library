---
id: ex-kostant-n-cohomology-for-sl2
kind: example
title: "Kostant cohomology for sl2"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [thm-kostant-nilradical-cohomology-theorem, cor-kostant-cohomology-in-degrees-zero-and-top, lem-extremal-weight-cochain-for-a-weyl-element-is-closed, def-special-linear-lie-algebra-sl-two, thm-root-sl-two-triple, thm-finite-dimensional-representations-of-sl-two, def-weyl-vector-rho-for-a-chosen-positive-system, def-integral-dominant-and-strictly-dominant-weights, def-weight-and-weight-space-of-a-lie-algebra-representation, def-root-reflections-and-the-weyl-group-action, def-length-and-longest-element-of-a-finite-weyl-group, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Peter Woit, Lie Algebra Cohomology and the Borel–Weil–Bott Theorem (Math G4344, Spring 2012), printed pp.1–7"
      url: "https://www.math.columbia.edu/~woit/LieGroups-2012/borelweilbott.pdf"
      locator: "printed p.4, Theorem 1, specialized locally to sl2; the cochain weights are computed here"
    - title: "Faisal Al-Faisal, On the Representation Theory of Semisimple Lie Groups (University of Waterloo MMath thesis, 2010), §3.4 printed pp.73–77"
      url: "https://www.collectionscanada.gc.ca/obj/thesescanada/vol2/OWTU/TC-OWTU-5421.pdf"
      locator: "§3.4, printed pp.73–77, the rank-one specialization of Theorem 3.4.1"
---

## Example

Assume the Axiom of Choice, inherited from Kostant's theorem ([[def-axiom-of-choice]]). Let $\mathfrak g=\mathfrak{sl}_2(\mathbb C)$, with Cartan subalgebra
$\mathfrak h=\mathbb C H$, positive root $\alpha$, Weyl vector
$\rho=\alpha/2$, fundamental weight $\omega=\alpha/2$, and $\lambda=m\omega$
with $m\in\mathbb Z_{\ge0}$, so that $V=L(m\omega)$ has dimension $m+1$ and
$\mathfrak n^+=\mathbb C e_\alpha$. The Weyl group is $\{1,s\}$ with
$s\cdot\lambda=s(\lambda+\rho)-\rho=-\lambda-2\rho=-(m+2)\omega$. Kostant's
theorem gives
$$H^0(\mathfrak n^+,V)=\mathbb C_{m\omega},\qquad H^1(\mathfrak n^+,V)=\mathbb C_{-(m+2)\omega},\qquad H^k(\mathfrak n^+,V)=0\ (k\ge2),$$
with generators $v_{m\omega}$ and $\varepsilon_\alpha\otimes v_{s\lambda}$,
where $v_{s\lambda}\in V_{s\lambda}$ has weight $s\lambda=-m\omega$. This
verifies the sign of the dot action, the $\rho$-shift and the top degree in the
smallest rank, and shows that the degree-one weight is $-(m+2)\omega$, not
$-m\omega$.

## Verification

**Given:** The Axiom of Choice; $\mathfrak g=\mathfrak{sl}_2(\mathbb C)$ with the usual basis $H,e,f$ and positive root $\alpha$, the Weyl group $\{1,s\}$, a nonnegative integer $m$, the module $V=L(m\omega)$ of dimension $m+1$, and $\mathfrak n^+=\mathbb C e_\alpha$.

[L1] $s\rho=-\rho$, $s\alpha=-\alpha$, and the dot action is $s\cdot\lambda=s(\lambda+\rho)-\rho$ ([[def-root-reflections-and-the-weyl-group-action]], [[def-weyl-vector-rho-for-a-chosen-positive-system]], [[def-special-linear-lie-algebra-sl-two]], [[thm-root-sl-two-triple]]).

[L2] $H^k(\mathfrak n^+,V)=\bigoplus_{\ell(w)=k}\mathbb C_{w\cdot\lambda}$ for $k=0,1$ and $H^k=0$ for $k\ge2$, since $|\Phi^+|=1$ and the Weyl group has the two elements $1,s$ of lengths $0,1$ ([[thm-kostant-nilradical-cohomology-theorem]], [[cor-kostant-cohomology-in-degrees-zero-and-top]], [[def-length-and-longest-element-of-a-finite-weyl-group]]).

[L3] $V=L(m\omega)$ is finite dimensional of dimension $m+1$, the weight $s\lambda=-m\omega$ occurs in $V$ with multiplicity one, and in degree one the extremal cochain of [[lem-extremal-weight-cochain-for-a-weyl-element-is-closed]] is $\gamma_s=\varepsilon_\alpha\otimes v_{s\lambda}$ ([[thm-finite-dimensional-representations-of-sl-two]], [[def-weight-and-weight-space-of-a-lie-algebra-representation]]).

1.1 $1\cdot\lambda=1(\lambda+\rho)-\rho=\lambda=m\omega$, and by [L1] $s\cdot\lambda=s(\lambda+\rho)-\rho=-\lambda-2\rho=-m\omega-\alpha=-(m+2)\omega$; since $|\Phi^+|=1$ and $\ell(1)=0$, $\ell(s)=1$, [L2] gives the displayed cohomology. [L1, L2]

1.2 In degree one, the generator is $\varepsilon_\alpha\otimes v_{s\lambda}$: its exterior factor has weight $-\alpha$ and $v_{s\lambda}$ has weight $s\lambda=-m\omega$, so the total weight $-\alpha-m\omega=-(m+2)\omega$ is the dot weight, confirming the $\rho$-shift; the degree-zero generator is the highest vector $v_{m\omega}$. [L1, L2, L3]

2.1 Counting: $\dim H^0=1$, $\dim H^1=1$, and $H^k=0$ for $k\ge2$, matching the top degree $|\Phi^+|=1$; the degree-one weight is $-(m+2)\omega=-m\omega-\alpha$, strictly below $-m\omega$, so the exterior root shift cannot be dropped. [L2, step 1.2] ∎
