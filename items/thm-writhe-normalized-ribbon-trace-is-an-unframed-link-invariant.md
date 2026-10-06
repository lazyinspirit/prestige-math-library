---
id: thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant
kind: theorem
title: "The writhe-normalized ribbon trace is an unframed link invariant"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 8
deps: [lem-scalar-twist-controls-the-two-markov-stabilizations, def-exponent-sum-and-writhe-of-a-braid, thm-basic-properties-of-the-categorical-trace, thm-markovs-closed-braid-equivalence-theorem, def-axiom-of-choice, def-ribbon-evaluation-of-an-x-colored-closed-braid, thm-choice-implies-dependent-implies-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (AMS Mathematical Surveys and Monographs 205), author's final version"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.10 Remark 8.10.3, formula (8.35) and the normalized Reshetikhin--Turaev invariant, printed pp. 216--218"
    - title: "V. G. Turaev, Quantum Invariants of Knots and 3-Manifolds (de Gruyter Studies in Mathematics 18, 1994)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/turaev5.pdf"
      locator: "Chapter I §1.5 Lemma 1.5.1(i) (trace cyclicity) and Corollary 2.7.2, printed pp. 21--22 and 43--44"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field and $\mathcal C$ a
$k$-linear ribbon category, with $k$-bilinear tensor product and
$\operatorname{End}_{\mathcal C}(\mathbf 1)=k$, let $X\in\mathcal C$ be
absolutely simple with $\theta_X=\lambda\operatorname{id}_X$,
$\lambda\in k^{\times}$, and let $w$ be the exponent sum
([[def-exponent-sum-and-writhe-of-a-braid]]). For $\beta\in B_n$ put

$$J_X(\widehat\beta):=\lambda^{-w(\beta)}\,t_n(\beta)\in k .$$

For the empty braid $e\in B_0$, $w(e)=0$ and $t_0(e)=1$, so
$J_X(\varnothing)=1$. Its Markov class is isolated because stabilization
requires $n\ge1$.

Then $J_X$ is invariant under conjugation in each $B_n$ and under both
stabilizations $\beta\mapsto\iota_n(\beta)\sigma_n^{\pm1}$ (and hence under
their inverses), so, by Markov's theorem
([[thm-markovs-closed-braid-equivalence-theorem]]), $J_X(\widehat\beta)$
depends only on the oriented unframed link type of the closure $\widehat\beta$:
if $\widehat\beta$ and $\widehat{\beta'}$ are equivalent oriented links then
$J_X(\widehat\beta)=J_X(\widehat{\beta'})$. If in addition the categorical
dimension $d_X=\operatorname{Tr}_L(j_X)$ is a unit of $k$, then
$d_X^{-1}J_X$ is the normalization with value $1$ on the unknot; no
invertibility of $d_X$ is needed for invariance. The Axiom of Choice is used
through Markov's theorem, and it supplies countable choice
([[thm-choice-implies-dependent-implies-countable-choice]]) for the
stabilization lemma; the trace computations themselves are finite.

## Facts & Assumptions

**Given:** a $k$-linear ribbon category $\mathcal C$ with $k$-bilinear tensor product and $\operatorname{End}(\mathbf 1)=k$, an absolutely simple object $X$ with $\theta_X=\lambda\operatorname{id}_X$ and $\lambda\in k^{\times}$, the ribbon evaluation $t_n$, and the exponent sum $w$.

[L1] The ribbon evaluation is $t_n(\beta)=\operatorname{Tr}_L(j_{X^{\otimes n}}\rho_n(\beta))$ with $j=u\theta$ a natural isomorphism, and the trace is cyclic: $\operatorname{Tr}_L(ac)=\operatorname{Tr}_L(c^{\vee\vee}a)$ for $a\colon Y\to Y^{\vee\vee}$ and $c\colon Y\to Y$ ([[def-ribbon-evaluation-of-an-x-colored-closed-braid]], [[thm-basic-properties-of-the-categorical-trace]]).

[L2] For every braid $\beta$ one has $t_{n+1}(\iota_n(\beta)\sigma_n^{\pm1})=\lambda^{\pm1}t_n(\beta)$ ([[lem-scalar-twist-controls-the-two-markov-stabilizations]]); that lemma is stated under countable choice, which AC supplies here ([[thm-choice-implies-dependent-implies-countable-choice]]).

[L3] The exponent sum satisfies $w(\iota_n(\beta)\sigma_n^{\pm1})=w(\beta)\pm1$ and $w(\gamma\beta\gamma^{-1})=w(\beta)$ ([[def-exponent-sum-and-writhe-of-a-braid]]).

[L4] Two braids have equivalent oriented closures if and only if they are related by finitely many conjugations, stabilizations and destabilizations; this is Markov's theorem, proved under the Axiom of Choice ([[thm-markovs-closed-braid-equivalence-theorem]]).

[F1] The Axiom of Choice is assumed ([[def-axiom-of-choice]]); it enters the argument through Markov's theorem [L4] and supplies countable choice for the stabilization lemma [L2] ([[thm-choice-implies-dependent-implies-countable-choice]]). Absolute simplicity makes $\theta_X$ act by the scalar $\lambda$ ([[lem-scalar-twist-controls-the-two-markov-stabilizations]]).

## Proof

**Proof technique:** direct.

1.1 **Conjugation invariance.** Fix $\gamma\in B_n$; write $\rho=\rho_n$ and $j=j_{X^{\otimes n}}$. Then $t_n(\gamma\beta\gamma^{-1})=\operatorname{Tr}_L(j\rho(\gamma)\rho(\beta)\rho(\gamma)^{-1})$. Apply cyclicity [L1] with $a=j\rho(\gamma)$ and $c=\rho(\beta)\rho(\gamma)^{-1}$: $$t_n(\gamma\beta\gamma^{-1})=\operatorname{Tr}_L\bigl((\rho(\beta)\rho(\gamma)^{-1})^{\vee\vee}j\rho(\gamma)\bigr)=\operatorname{Tr}_L\bigl(\rho(\beta)^{\vee\vee}(\rho(\gamma)^{-1})^{\vee\vee}j\rho(\gamma)\bigr).$$ Naturality of $j$ at the morphism $\rho(\gamma)^{-1}$ gives $(\rho(\gamma)^{-1})^{\vee\vee}j=j\rho(\gamma)^{-1}$, so the argument equals $\rho(\beta)^{\vee\vee}j$. Applying cyclicity again, $\operatorname{Tr}_L(\rho(\beta)^{\vee\vee}j)=\operatorname{Tr}_L(j\rho(\beta))=t_n(\beta)$. Since $w(\gamma\beta\gamma^{-1})=w(\beta)$ by [L3], this gives $J_X(\gamma\beta\gamma^{-1})=J_X(\beta)$. [L1, L3, given, algebra]

2.1 **Invariance under stabilizations.** By [L2], $t_{n+1}(\iota_n(\beta)\sigma_n^{\pm1})=\lambda^{\pm1}t_n(\beta)$, while $w(\iota_n(\beta)\sigma_n^{\pm1})=w(\beta)\pm1$ by [L3]. Hence $$\lambda^{-w(\iota_n\beta\sigma_n^{\pm1})}t_{n+1}(\iota_n(\beta)\sigma_n^{\pm1})=\lambda^{-w(\beta)\mp1}\lambda^{\pm1}t_n(\beta)=\lambda^{-w(\beta)}t_n(\beta)=J_X(\widehat\beta).$$ Destabilizations are the inverses of stabilizations, so $J_X$ is also invariant under them. [L2, L3, step 1.1, algebra]

3.1 **Markov's theorem.** Steps 1.1 and 2.1 show that $J_X$ is unchanged by each of the Markov moves and their inverses. By Markov's theorem [L4], two braids are related by such moves exactly when their closures are equivalent oriented links; therefore $J_X(\widehat\beta)$ depends only on the oriented unframed link type of $\widehat\beta$. This uses AC through Markov's theorem, and the countable-choice input to [L2] used in step 2.1 is also supplied by AC, as recorded in [F1] and [L4]. [L4, F1, step 1.1, step 2.1]

4.1 **The normalization clause.** The value $J_X$ is an invariant of oriented links, so multiplying it by a unit $d_X^{-1}$ leaves an invariant. On the closure of the identity $e\in B_1$, which is the unknot, one has $w(e)=0$ and $t_1(e)=\operatorname{Tr}_L(j_X)=d_X$, so $d_X^{-1}J_X(\widehat e)=d_X^{-1}d_X=1$. If $d_X$ is not a unit of $k$, the normalization by $d_X^{-1}$ is not available, but the invariance statement of step 3.1 does not use it. [L1, step 3.1, algebra]

5.1 **Conclusion.** Steps 1.1--2.1 prove that the writhe-normalized ribbon trace is invariant under Markov equivalence and hence an invariant of oriented unframed link types of closures, and step 4.1 gives the further unknot normalization when $d_X$ is invertible. Every categorical computation is finite; the Axiom of Choice is consumed by Markov's theorem and by the countable-choice input to the stabilization lemma. [step 1.1, step 2.1, step 3.1, step 4.1] ∎ 