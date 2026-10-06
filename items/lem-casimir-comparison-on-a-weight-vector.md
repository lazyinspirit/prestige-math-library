---
id: lem-casimir-comparison-on-a-weight-vector
kind: lemma
title: The Casimir comparison on a weight space
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
justified_by: []
aliases: []
deps: [def-axiom-of-choice, def-quadratic-casimir-element, prop-the-quadratic-casimir-element-is-central, prop-casimir-eigenvalue-on-a-highest-weight-module, prop-opposite-root-spaces-bracket-to-the-killing-dual-line, prop-killing-form-pairs-only-opposite-root-spaces, def-killing-form-of-a-semisimple-lie-algebra, lem-finite-semisimple-cartan-root-and-string-structure, def-weight-and-weight-space-of-a-lie-algebra-representation, prop-root-vectors-shift-weight-spaces, thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra, thm-highest-weight-classification-of-finite-dimensional-irreducible-representations, def-weyl-vector-rho-for-a-chosen-positive-system, thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "A. Moreau, Representation Theory of Lie Algebras (M2, Université Paris-Saclay, 2025--2026)"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/M2-RepTh2025.pdf"
      locator: "§11.2--11.3, printed pp. 79--82 (Lemma 11.5, the trace of the Cartan part on a weight space; Lemma 11.6)"
    - title: "P. Etingof, Lie Groups and Lie Algebras II (MIT 18.755, Spring 2024), complete lectures"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
      locator: "§26.4, printed p. 141 (Lemma 26.6 and its proof: C acts on a highest weight module by (λ, λ+2ρ))"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\mathfrak g$ be a
finite-dimensional complex semisimple Lie algebra with Cartan subalgebra
$\mathfrak h$ and root system $\Phi$ with a chosen positive system $\Phi^+$,
and let $C\in U(\mathfrak g)$ be the quadratic Casimir element of
[[def-quadratic-casimir-element]]. Let $h_1,\dots,h_r$ and $h^1,\dots,h^r$ be
bases of $\mathfrak h$ dual with respect to the Killing form $B$ of
[[def-killing-form-of-a-semisimple-lie-algebra]], so that
$B(h_j,h^k)=\delta_{jk}$, and for every $\alpha\in\Phi^+$ choose
$e_\alpha\in\mathfrak g_\alpha$ and
$f_\alpha\in\mathfrak g_{-\alpha}$ with $B(e_\alpha,f_\alpha)=1$; then
$[e_\alpha,f_\alpha]=H_\alpha$ is the Killing-dual vector of $\alpha$
([[prop-opposite-root-spaces-bracket-to-the-killing-dual-line]]). Then
$$C=\sum_{j=1}^r h_jh^j+\sum_{\alpha\in\Phi^+}\bigl(e_\alpha f_\alpha+f_\alpha e_\alpha\bigr)$$
in $U(\mathfrak g)$, and for every dominant integral
$\lambda\in\Lambda^+$ and every $\mu\in\mathfrak h^*$, writing
$m_\lambda(\mu)=\dim L(\lambda)_\mu$ for the multiplicity of $\mu$ as a weight
of the finite-dimensional simple module $L(\lambda)$
([[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]]),
$$\operatorname{tr}_{L(\lambda)_\mu}(C)=m_\lambda(\mu)(\mu,\mu)+\sum_{\alpha\in\Phi^+}\operatorname{tr}_{L(\lambda)_\mu}\bigl(e_\alpha f_\alpha+f_\alpha e_\alpha\bigr).$$
Since $C$ acts on $L(\lambda)$ by the scalar $(\lambda,\lambda+2\rho)$
([[prop-casimir-eigenvalue-on-a-highest-weight-module]]), where $\rho$ is the
Weyl vector ([[def-weyl-vector-rho-for-a-chosen-positive-system]]) and the
pairing on $\mathfrak h^*$ is the one induced by $B$, also
$\operatorname{tr}_{L(\lambda)_\mu}(C)=m_\lambda(\mu)(\lambda,\lambda+2\rho)$,
hence
$$\bigl((\lambda,\lambda+2\rho)-(\mu,\mu)\bigr)m_\lambda(\mu)=\sum_{\alpha\in\Phi^+}\operatorname{tr}_{L(\lambda)_\mu}\bigl(e_\alpha f_\alpha+f_\alpha e_\alpha\bigr).$$

## Facts & Assumptions

**Given:** The Axiom of Choice, such $\mathfrak g$ and $\mathfrak h$ with chosen positive system $\Phi^+$, the Casimir element $C$, the two dual bases $h_j,h^j$ of $\mathfrak h$, and vectors $e_\alpha,f_\alpha$ with $B(e_\alpha,f_\alpha)=1$ for each $\alpha\in\Phi^+$; also $\lambda\in\Lambda^+$ and $\mu\in\mathfrak h^*$.

[A1] The Axiom of Choice is assumed; it enters through the root-space theory supplying [F1] and [F3] and through the classification of [F6] ([[def-axiom-of-choice]]).

[F1] Under Choice, the supplied Cartan subalgebra is maximal toral by [[thm-cartan-subalgebras-of-complex-semisimple-lie-algebras-are-exactly-maximal-toral-subalgebras]]. Hence $\mathfrak g$ has the finite root-space decomposition $\mathfrak g=\mathfrak h\oplus\bigoplus_{\alpha\in\Phi}\mathfrak g_\alpha$, every root space is one-dimensional, $B$ restricts nondegenerately to $\mathfrak h$, pairs opposite root spaces perfectly, and pairs no other two weight spaces, and the Killing-dual vector $H_\alpha$ satisfies $B(H_\alpha,h)=\alpha(h)$ for $h\in\mathfrak h$ ([[lem-finite-semisimple-cartan-root-and-string-structure]]).

[F2] For any $B$-dual bases $x_1,\dots,x_n$ and $x^1,\dots,x^n$ of $\mathfrak g$ one has $C=\sum_i x_ix^i$, independent of the choice of dual bases ([[def-quadratic-casimir-element]]).

[F3] If $x\in\mathfrak g_\alpha$ and $y\in\mathfrak g_{-\alpha}$, then $[x,y]=B(x,y)H_\alpha$, and $B(x,y)=0$ whenever $x\in\mathfrak g_\alpha$, $y\in\mathfrak g_\beta$ with $\alpha+\beta\ne0$ ([[prop-opposite-root-spaces-bracket-to-the-killing-dual-line]], [[prop-killing-form-pairs-only-opposite-root-spaces]]).

[F4] $V_\mu=\{v\in V:H\cdot v=\mu(H)v\text{ for all }H\in\mathfrak h\}$ for every representation $V$ of $\mathfrak g$ ([[def-weight-and-weight-space-of-a-lie-algebra-representation]]); if $x\in\mathfrak g_\alpha$ then $x\cdot v\in V_{\mu+\alpha}$ for $v\in V_\mu$ ([[prop-root-vectors-shift-weight-spaces]]); and the action of $\mathfrak g$ extends to a unital action of $U(\mathfrak g)$ under which a product $xy$ acts by composition of the operators ([[thm-lie-algebra-representations-are-equivalent-to-unital-modules-over-the-enveloping-algebra]]).

[F5] The Killing form induces a pairing $(\ ,\ )$ on $\mathfrak h^*$ and $\mu(H_\alpha)=(\mu,\alpha)$ for every $\mu\in\mathfrak h^*$ and every root $\alpha$ ([[def-killing-form-of-a-semisimple-lie-algebra]], [[prop-casimir-eigenvalue-on-a-highest-weight-module]]).

[F6] For $\lambda\in\Lambda^+$ the module $L(\lambda)$ is a cyclic highest-weight module of highest weight $\lambda$, and $C$ acts on it by the scalar $(\lambda,\lambda+2\rho)$; it is finite-dimensional, so each $L(\lambda)_\mu$ is finite-dimensional ([[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]], [[prop-casimir-eigenvalue-on-a-highest-weight-module]], [[prop-the-quadratic-casimir-element-is-central]]).

## Proof

**Proof technique:** direct.

1.1 The union $\{h_1,\dots,h_r\}\cup\{e_\alpha\}_{\alpha\in\Phi^+}\cup\{f_\alpha\}_{\alpha\in\Phi^+}$ is a basis of $\mathfrak g$, because [F1] decomposes $\mathfrak g$ into $\mathfrak h$ and the one-dimensional root spaces, and its $B$-dual basis is $\{h^1,\dots,h^r\}\cup\{f_\alpha\}\cup\{e_\alpha\}$, because $B(h_j,h^k)=\delta_{jk}$ by hypothesis, $B(e_\alpha,f_\beta)=\delta_{\alpha\beta}$ by [F3] and $B(e_\alpha,f_\alpha)=1$, and every other pairing of these vectors vanishes by [F3]; with [F2] this gives the displayed expansion of $C$. [F1, F2, F3, algebra, A1]

2.1 The element $h_jh^j$ acts on $L(\lambda)_\mu$ by the scalar $\mu(h_j)\mu(h^j)$ by [F4], so the trace of the Cartan part is $\dim L(\lambda)_\mu\sum_j\mu(h_j)\mu(h^j)$; to identify the sum, let $H_\mu\in\mathfrak h$ be the vector with $B(H_\mu,h)=\mu(h)$, which exists and is unique because $B$ is nondegenerate on $\mathfrak h$, and note that $B(H_\mu,h^j)=\mu(h^j)$, so the vector $\sum_jB(H_\mu,h^j)h_j$ pairs with each $h^k$ as $B(H_\mu,h^k)$ and therefore equals $H_\mu$; applying $B(H_\mu,\cdot)$ gives $\sum_j\mu(h_j)\mu(h^j)=B(H_\mu,H_\mu)=(\mu,\mu)$ by symmetry of $B$ and the definition of the induced pairing, while $\mu(H_\alpha)=B(H_\mu,H_\alpha)=(\mu,\alpha)$ by the same definition. [F1, F4, F5, step 1.1, algebra]

2.2 Since the trace is linear and $C$ is the sum of the Cartan part and the root part by step 1.1, $\operatorname{tr}_{L(\lambda)_\mu}(C)=\operatorname{tr}_{L(\lambda)_\mu}\bigl(\sum_jh_jh^j\bigr)+\sum_{\alpha\in\Phi^+}\operatorname{tr}_{L(\lambda)_\mu}(e_\alpha f_\alpha+f_\alpha e_\alpha)$. [step 1.1, algebra]

3.1 Combining steps 2.1 and 2.2, $\operatorname{tr}_{L(\lambda)_\mu}(C)=m_\lambda(\mu)(\mu,\mu)+\sum_{\alpha\in\Phi^+}\operatorname{tr}_{L(\lambda)_\mu}(e_\alpha f_\alpha+f_\alpha e_\alpha)$, and by [F6] the same trace equals $m_\lambda(\mu)(\lambda,\lambda+2\rho)$; subtracting the Cartan term from both expressions for the trace gives the stated comparison identity. [step 2.1, step 2.2, F6] ∎ 