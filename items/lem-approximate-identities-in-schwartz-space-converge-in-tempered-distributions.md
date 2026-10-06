---
id: lem-approximate-identities-in-schwartz-space-converge-in-tempered-distributions
kind: lemma
title: "Schwartz approximate identities converge in the sense of tempered distributions"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-schwartz-space-and-its-seminorms, def-schwartz-topology-and-convergence, def-tempered-distribution, def-convolution-of-a-tempered-distribution-with-a-schwartz-function, def-countable-choice, lem-schwartz-dilations-preserve-schwartz-space, lem-schwartz-parameter-pairing-and-integral-interchange, thm-finite-seminorm-bound-characterizes-tempered-distributions, cor-schwartz-convolution-and-product-transform-laws, lem-schwartz-functions-and-all-derivatives-are-integrable, cor-c-one-change-of-variables-for-l-one-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Shai Dekel, Gerard Kerkyacharian, George Kyriazis, Pencho Petrushev, A New Proof of the Atomic Decomposition of Hardy Spaces, Constructive Theory of Functions (Sozopol 2016), pp. 59-73"
      url: "https://people.math.sc.edu/pencho/Publications/DKKP-Sozopol-2016.pdf"
      locator: "section 2, printed p. 62 (PDF p. 4): the assertion $f=\\lim_{j\\to\\infty}\\varphi_j*\\varphi_j*f$ with convergence in $\\mathcal S'$"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "appendix, item 19, p. 84: the classical approximate-identity statement"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice. Let $n\ge1$, let $\Phi\in\mathcal S(\mathbb R^n)$ satisfy
$\int_{\mathbb R^n}\Phi=1$, and for $t>0$ write
$\Phi_t(x)=t^{-n}\Phi(x/t)$. Then for every $f\in\mathcal S'(\mathbb R^n)$ and
every $\psi\in\mathcal S(\mathbb R^n)$,
$$\langle\Phi_t*f,\psi\rangle\longrightarrow\langle f,\psi\rangle \qquad(t\downarrow0),$$
where the pairing is against the smooth convolution function of
[[def-convolution-of-a-tempered-distribution-with-a-schwartz-function]]; in
other words $\Phi_t*f\to f$ in $\mathcal S'$ as $t\downarrow0$. Consequently for
every sequence $t_j\downarrow0$ one has $\Phi_{t_j}*f\to f$ in $\mathcal S'$.
If in addition $\Phi*\Phi$ denotes the everywhere-defined Schwartz convolution,
then $\Phi_t*\Phi_t*f=(\Phi*\Phi)_t*f\to f$ in $\mathcal S'$ as $t\downarrow0$,
the dyadic instance being $\Phi_{2^{-j}}*\Phi_{2^{-j}}*f\to f$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $\Phi\in\mathcal S$ with $\int\Phi=1$, $f\in\mathcal S'$, $\psi\in\mathcal S$; the seminorms and topology of [[def-schwartz-space-and-its-seminorms]] and [[def-schwartz-topology-and-convergence]]; the convolution of [[def-convolution-of-a-tempered-distribution-with-a-schwartz-function]].

[F1] For fixed $t>0$, $\Phi_t\in\mathcal S$, $\int\Phi_t=\int\Phi=1$, and the translated and reflected family $x\mapsto\Phi_t(x-\cdot)$ is smooth into $\mathcal S$: derivatives in $x$ correspond to derivatives of $\Phi_t$ ([[lem-schwartz-dilations-preserve-schwartz-space]], [[lem-schwartz-parameter-pairing-and-integral-interchange]]).

[F2] For $f\in\mathcal S'$ there are $C\ge0$ and integers $N,M$ with $|\langle f,h\rangle|\le C\max_{|\alpha|\le N,|\beta|\le M}p_{\alpha\beta}(h)$ for all $h\in\mathcal S$ ([[thm-finite-seminorm-bound-characterizes-tempered-distributions]]).

[F3] $C_c^\infty\subseteq\mathcal S$ and Schwartz functions and all their polynomial multiples are integrable; in particular $\int|\Phi(w)|(1+|w|)^{N+1}\,dw<\infty$ for every $N$ ([[lem-schwartz-functions-and-all-derivatives-are-integrable]]).

[F4] Substitution preserves Lebesgue integrals under Countable Choice, and $\int\Phi=\int\check\Phi$ where $\check\Phi(u)=\Phi(-u)$ ([[cor-c-one-change-of-variables-for-l-one-functions]]).



**Proof technique:** reduce the distributional convergence to a Schwartz-norm estimate for the reflected approximate identity, then apply the finite-seminorm bound.

## Proof

**Proof technique:** direct.

1.1 The reflected approximate identity converges in Schwartz space. Put $\check\Phi(u)=\Phi(-u)$ and $K_t=\check\Phi_t*\psi$, so that $K_t(y)=\int_{\mathbb R^n}\Phi_t(x-y)\psi(x)\,dx=\int_{\mathbb R^n}\check\Phi(w)\psi(y-tw)\,dw$, the last form by the substitution $x=y-tw$. Then $K_t-\psi=\int\check\Phi(w)\bigl(\psi(\cdot-tw)-\psi(\cdot)\bigr)\,dw$ because $\int\check\Phi=\int\Phi=1$ by [F1], [F4]. Fix multi-indices $\alpha,\beta$ and $t\le1$. Differentiating under the integral and applying the mean value theorem along the segment from $y$ to $y-tw$ gives $$|\partial^\beta K_t(y)-\partial^\beta\psi(y)|\le\int_{\mathbb R^n}|\check\Phi(w)|\,t|w|\int_0^1\bigl|\nabla\partial^\beta\psi(y-stw)\bigr|\,ds\,dw .$$ Since $|y^\alpha|\le\sum_{\gamma\le\alpha}\binom{\alpha}{\gamma}|(y-stw)^\gamma|\,(t|w|)^{|\alpha|-|\gamma|}\le(1+t|w|)^{|\alpha|}\sum_{\gamma\le\alpha}\binom{\alpha}{\gamma}|(y-stw)^\gamma|$, taking the supremum in $y$ and using $t\le1$ yields $$p_{\alpha\beta}(K_t-\psi)\le t\,C_\alpha\int_{\mathbb R^n}|\check\Phi(w)|(1+|w|)^{|\alpha|+1}\,dw\cdot\max_{i\le n}\max_{\gamma\le\alpha}p_{\gamma,\beta+e_i}(\psi),$$ with $C_\alpha=\sqrt n\sum_{\gamma\le\alpha}\binom{\alpha}{\gamma}$, and the integral is finite by [F3]. Hence $p_{\alpha\beta}(K_t-\psi)\to0$ as $t\downarrow0$: this is convergence in every Schwartz seminorm, i.e. $K_t\to\psi$ in $\mathcal S$. [F1, F3, F4, algebra]

2.1 The pairing identity. For every $t>0$, $\langle\Phi_t*f,\psi\rangle=\langle f,K_t\rangle$. Indeed, the parameter-pairing lemma applied to $H(x)=\psi(x)\,\Phi_t(x-\cdot)$ and $u=f$ gives $\bigl\langle f,\int H(x)\,dx\bigr\rangle=\int\langle f,\Phi_t(x-\cdot)\rangle\psi(x)\,dx=\int(\Phi_t*f)(x)\psi(x)\,dx$, and $\int H(x)\,dx=K_t$ by the computation of step 1.1; the seminorm majorants required by that lemma are supplied by [F1] and [F3], since $|\psi(x)|(1+|x|)^{N}$ is integrable for every $N$. [F1, F2, F3, step 1.1, given]

3.1 Conclusion. By step 1.1 $K_t\to\psi$ in $\mathcal S$, so the finite-seminorm bound of [F2] gives $\langle f,K_t\rangle\to\langle f,\psi\rangle$; step 2.1 identifies this with $\langle\Phi_t*f,\psi\rangle\to\langle f,\psi\rangle$ as $t\downarrow0$, which is convergence $\Phi_t*f\to f$ in $\mathcal S'$ by the definition of that convergence. Sequences and the dyadic scale $t=2^{-j}$ are instances. For the convolution form, $\Phi*\Phi\in\mathcal S$ by [[cor-schwartz-convolution-and-product-transform-laws]], $\int(\Phi*\Phi)=(\int\Phi)^2=1$, and the substitution $z=tw$ gives $(\Phi*\Phi)_t=\Phi_t*\Phi_t$, so the statement applies to the Schwartz function $\Phi*\Phi$. This proves the lemma. [F1, F2, step 1.1, step 2.1, algebra] ∎
