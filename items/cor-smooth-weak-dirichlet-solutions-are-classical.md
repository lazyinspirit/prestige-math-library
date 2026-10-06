---
id: cor-smooth-weak-dirichlet-solutions-are-classical
kind: corollary
title: "Smooth weak Dirichlet solutions are classical"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 9
deps: [thm-higher-order-boundary-regularity-for-dirichlet-problems, thm-higher-order-sobolev-embedding, lem-sobolev-trace-agrees-with-continuous-boundary-values, thm-kernel-of-the-trace-is-w-one-p-zero, def-weak-dirichlet-solution-for-a-divergence-form-operator, def-sobolev-extension-domain-and-extension-operator, thm-extension-theorem-for-bounded-smooth-domains, def-axiom-of-choice, def-countable-choice]
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 4.12, Corollary 4.32, printed p. 116 (read in full)"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 5, Section 5.2, Theorem 5.11, printed p. 113 (read in full)"
---

## Statement

Assume the Axiom of Choice (for the Sobolev embedding and the trace
characterisation) and Countable Choice. Let $\Omega\subset\mathbb R^n$ be a
bounded $C^\infty$ domain, $n\ge2$, $\mathbb K\in\{\mathbb R,\mathbb C\}$,
and suppose $a^{ij},b^i,c,f$ extend to $C^\infty$ functions on a
neighbourhood of $\overline\Omega$. If $u\in H^1_0(\Omega)$ is a weak
solution of $Lu=f$ with zero boundary values
([[def-weak-dirichlet-solution-for-a-divergence-form-operator]]), then
$u\in H^m(\Omega)$ for every $m$; $u$ agrees almost everywhere with a
function $\widetilde u\in C^\infty(\overline\Omega)$ satisfying $Lu=f$
pointwise in $\Omega$, and $\widetilde u|_{\partial\Omega}=0$. The boundary
values are those of the continuous representative, consistent with the trace
characterisation of [[thm-kernel-of-the-trace-is-w-one-p-zero]]; the
statement asserts no pointwise boundary condition for the Sobolev class
itself.

## Facts & Assumptions

**Given:** the Axiom of Choice and Countable Choice; the bounded $C^\infty$ domain; the coefficients and datum extending smoothly to a neighbourhood of the closure; and the zero-trace weak solution $u$.

[F1] Higher-order boundary regularity: for every integer $k\ge0$, smooth coefficients supply the $W^{k+1,\infty}$ bounds on $\Omega$ and the datum lies in $H^k(\Omega)$, so $u\in H^{k+2}(\Omega)$ with a bound depending only on $n,k,\Omega$ and the coefficient bounds. ([[thm-higher-order-boundary-regularity-for-dirichlet-problems]])

[F2] Sobolev embedding on the bounded $C^\infty$ domain: $\Omega$ is a bounded extension domain, so for $m>n/2$ every class in $H^m(\Omega)$ has a continuous representative; more generally $H^m(\Omega)\subset C^\ell(\overline\Omega)$ for $m>\ell+n/2$, so all derivatives up to order $\ell$ have continuous representatives. ([[thm-higher-order-sobolev-embedding]], [[def-sobolev-extension-domain-and-extension-operator]], [[thm-extension-theorem-for-bounded-smooth-domains]])

[F3] Trace and zero boundary values: $u\in H^1_0(\Omega)$ has zero trace, and the trace of a class with a continuous representative is the restriction of that representative to $\partial\Omega$. ([[thm-kernel-of-the-trace-is-w-one-p-zero]], [[lem-sobolev-trace-agrees-with-continuous-boundary-values]])

## Proof

1.1 Every Sobolev order. Fix $m\in\mathbb N$. Since $a^{ij},b^i,c$ and $f$ extend smoothly to a neighbourhood of $\overline\Omega$, their restrictions to $\Omega$ are of class $C^\infty(\Omega)$ with bounded derivatives of every order on $\Omega$, and $f\in H^m(\Omega)$; [F1] with $k=m$ gives $u\in H^{m+2}(\Omega)$. As $m$ was arbitrary, $u\in H^m(\Omega)$ for every $m$. [F1]

2.1 A smooth representative up to the boundary. Fix $\ell\in\mathbb N$ and choose $m>\ell+n/2$. By step 1.1, $u\in H^m(\Omega)$, and [F2] gives a representative of $u$ whose derivatives up to order $\ell$ are continuous on $\overline\Omega$; these representatives are compatible for different $\ell$ (they are weak derivatives of one another on $\Omega$ and continuous), so they determine a function $\widetilde u\in C^\infty(\overline\Omega)$ with $\widetilde u=u$ a.e. on $\Omega$. [F2, step 1.1]

3.1 The equation pointwise. Since $u\in H^2(\Omega)$, the strong form $Lu=f$ holds a.e. on $\Omega$ with the a.e. expression $(D_ia^{ij})D_ju+a^{ij}D_iD_ju$; both sides are continuous functions on $\Omega$ for the representative $\widetilde u$ and the smooth data, and continuous functions agreeing a.e. agree everywhere, so $L\widetilde u=f$ pointwise in $\Omega$. [F1, step 2.1]

3.2 Boundary values. The class $u$ lies in $H^1_0(\Omega)$, so its trace vanishes; on the other hand the trace of a Sobolev class with a continuous representative equals the restriction of that representative, so the restriction of $\widetilde u$ is zero surface-almost-everywhere. If it were nonzero at a boundary point, continuity would make it nonzero on a relatively open boundary patch, which has positive surface measure by the boundary graph parametrization. Hence $\widetilde u|_{\partial\Omega}=0$ at every boundary point. [F3, step 2.1]

4.1 Conclusion. Under $C^\infty$ boundary regularity and $C^\infty$ data extending to the closure, the weak zero-trace solution is the Sobolev class of a function $\widetilde u\in C^\infty(\overline\Omega)$ that solves the equation pointwise and vanishes on the boundary; the Axiom of Choice enters through the embedding and trace interfaces of [F2] and [F3], and Countable Choice through the Sobolev interfaces of [F1]. [step 2.1, step 3.1, step 3.2] ∎

## Source notes

Hunter's Corollary 4.32 (printed p. 116) and Laugesen's Theorem 5.11 (printed p. 113) state this conclusion; the proof bootstraps the higher-order boundary estimate and then applies the Sobolev embedding and the trace characterisation. The scaffold listed Morrey's inequality; the proof uses only the higher-order embedding on the bounded extension domain $\Omega$.
