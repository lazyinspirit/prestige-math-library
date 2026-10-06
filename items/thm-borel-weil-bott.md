---
id: thm-borel-weil-bott
kind: theorem
title: The Borel-Weil-Bott theorem
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps:
- lem-singular-dot-weights-have-zero-line-bundle-cohomology
- lem-rank-one-cohomology-shifts-across-a-simple-wall
- lem-a-regular-weight-has-a-unique-dominant-dot-translate
- thm-borel-weil
- thm-serre-duality-smooth-projective-variety-locally-free-sheaves
- lem-flag-variety-canonical-bundle-weight-minus-two-rho
- def-borel-character-equivariant-line-bundle
- def-dot-action-facets-and-single-wall-translation-data
- def-integral-dominant-and-strictly-dominant-weights
- def-length-and-longest-element-of-a-finite-weyl-group
- prop-highest-weight-of-the-dual-representation
- def-axiom-of-choice
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
    - title: "Jacob Lurie, A Proof of the Borel-Weil-Bott Theorem"
      url: "https://www.math.harvard.edu/~lurie/papers/bwb.pdf"
      locator: "Printed p. 3, Theorem 5 and its proof: the reduced-word chain, the singular case, and the Serre-duality finish"
    - title: "George Boxer and Vincent Pilloni, Notes on Higher Coleman Theory (Montreal 2020)"
      url: "https://www.imo.universite-paris-saclay.fr/~vincent.pilloni/montrealnotes.pdf"
      locator: "Theorem 1.1 and Remark 1.2, printed p. 3: the regular/singular dichotomy and the single nonvanishing degree"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\lambda\in X^*(T)$.
If $\lambda+\rho$ is not regular, then $H^i(X,\mathcal L_\lambda)=0$ for all
$i\ge0$. If $\lambda+\rho$ is regular, let $w$ be the unique element of $W$
with $w\cdot\lambda$ dominant; then
$$H^{\ell(w)}(X,\mathcal L_\lambda)\cong L(w\cdot\lambda)^*,\qquad H^i(X,\mathcal L_\lambda)=0\ \ (i\ne\ell(w)),$$
and these are the only nonvanishing cohomology groups of
$\mathcal L_\lambda$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the group $G$, its Borel $B$, the flag variety $X=G/B$ of dimension $N=|\Phi^+|$, a weight $\lambda\in X^*(T)$ and the bundle $\mathcal L_\lambda$.

[F1] If $\lambda+\rho$ is not regular, then $H^i(X,\mathcal L_\lambda)=0$ for all $i\ge0$ ([[lem-singular-dot-weights-have-zero-line-bundle-cohomology]]).

[F2] For a simple root $\alpha$, if $\langle\nu,\alpha^\vee\rangle\ge-1$ then $H^i(X,\mathcal L_\nu)\cong H^{i+1}(X,\mathcal L_{s_\alpha\cdot\nu})$ for all $i\ge0$; equivalently, if $\langle\nu,\alpha^\vee\rangle\le-1$ then $H^{i+1}(X,\mathcal L_\nu)\cong H^i(X,\mathcal L_{s_\alpha\cdot\nu})$ for all $i\ge0$ ([[lem-rank-one-cohomology-shifts-across-a-simple-wall]]).

[F3] If $\mu=\lambda+\rho$ is regular there is a unique $w$ with $w\mu$ dominant, $N(\mu)=\ell(w)$, and a reduced expression $w=s_{i_{\ell}}\cdots s_{i_1}$ with $\ell=N(\mu)$ whose partial products $w_j=s_{i_j}\cdots s_{i_1}$ satisfy $N(w_j\mu)=N(\mu)-j$ and are regular for every $j$; the step from $j$ to $j+1$ chooses a simple root $\alpha_{i_{j+1}}$ with $\langle w_j\mu,\alpha_{i_{j+1}}^\vee\rangle<0$ ([[lem-a-regular-weight-has-a-unique-dominant-dot-translate]]).

[F4] If $\nu$ is dominant integral then $H^0(X,\mathcal L_\nu)\cong L(\nu)^*$ and $H^i(X,\mathcal L_\nu)=0$ for $i>0$ ([[thm-borel-weil]]).

[F5] Serre duality: with $\omega_X\cong\mathcal L_{-2\rho}$ the canonical bundle of $X$, there is a functorial perfect pairing $H^i(X,\mathcal L_\lambda)\times H^{N-i}(X,\mathcal L_{-\lambda-2\rho})\to\mathbb C$ for $0\le i\le N$, so $H^i(X,\mathcal L_\lambda)^*\cong H^{N-i}(X,\mathcal L_{-\lambda-2\rho})$; outside that range both groups vanish ([[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]], [[lem-flag-variety-canonical-bundle-weight-minus-two-rho]], [[def-borel-character-equivariant-line-bundle]]).

[F6] The dot action satisfies $w\cdot\lambda=w(\lambda+\rho)-\rho$ and $s_\alpha\cdot\lambda=s_\alpha(\lambda+\rho)-\rho$; for every $w$ one has $\ell(w_0w)=N-\ell(w)$, and $\ell(w_0w)=\ell((w_0w)^{-1})$ ([[def-dot-action-facets-and-single-wall-translation-data]], [[lem-a-regular-weight-has-a-unique-dominant-dot-translate]], [[def-length-and-longest-element-of-a-finite-weyl-group]]).

## Proof

1.1 Suppose first that $\lambda+\rho$ is not regular. Then [F1] gives $H^i(X,\mathcal L_\lambda)=0$ for all $i\ge0$, which is the first clause of the Statement. [F1, given]

2.1 Now suppose that $\lambda+\rho$ is regular, and let $w$ be the unique element with $w\cdot\lambda$ dominant, which is the complementary case to step 1.1 and exists uniquely by [F3]. Put $\lambda_j=w_j\cdot\lambda$ along the reduced chain of [F3], so that $\lambda_j+\rho=w_j(\lambda+\rho)$ and $\lambda_\ell=w\cdot\lambda$. At the step from $j$ to $j+1$ the chosen simple root satisfies $\langle w_j(\lambda+\rho),\alpha^\vee\rangle\le-1$ by [F3], hence $\langle\lambda_j,\alpha^\vee\rangle=\langle w_j(\lambda+\rho),\alpha^\vee\rangle-1\le-2\le-1$, so the second clause of [F2] applies and gives $H^{i+1}(X,\mathcal L_{\lambda_j})\cong H^i(X,\mathcal L_{\lambda_{j+1}})$ for all $i\ge0$. Composing over the $\ell=\ell(w)$ steps yields $H^{i+\ell}(X,\mathcal L_\lambda)\cong H^i(X,\mathcal L_{w\cdot\lambda})$ for all $i\ge0$. Since $w\cdot\lambda$ is dominant integral, [F4] gives $H^{i+\ell}(X,\mathcal L_\lambda)=0$ for every $i>0$, and for $i=0$ gives $H^{\ell}(X,\mathcal L_\lambda)\cong H^0(X,\mathcal L_{w\cdot\lambda})\cong L(w\cdot\lambda)^*$. Thus the cohomology vanishes above degree $\ell$ and has the asserted value in degree $\ell$. [F2, F3, F4, step 1.1, algebra]

3.1 It remains to exclude nonzero cohomology in degrees $i<\ell$. Consider the weight $\mu=-\lambda-2\rho$. Since $\mu+\rho=-(\lambda+\rho)$ is regular, [F3] applies to $\mu$; let $v$ be the unique element with $v\cdot\mu$ dominant. Then $v\cdot\mu+\rho=v(\mu+\rho)=-v(\lambda+\rho)$, and for $v=w_0w$ this equals $-w_0(w(\lambda+\rho))$: since $w(\lambda+\rho)$ is dominant, $w_0(w(\lambda+\rho))$ is antidominant, so its negative $-w_0(w(\lambda+\rho))$ is dominant; hence $(w_0w)\cdot\mu$ is dominant and uniqueness gives $v=w_0w$. By [F6] the Borel-Weil-Bott degree of $\mu$ is therefore $\ell(w_0w)=N-\ell$. Applying step 2.1 to $\mu$ in place of $\lambda$ gives $H^q(X,\mathcal L_\mu)=0$ for every $q>N-\ell$. By Serre duality [F5], for $0\le i<\ell$ one has $H^i(X,\mathcal L_\lambda)^*\cong H^{N-i}(X,\mathcal L_{\mu})$ with $N-i>N-\ell$, so $H^i(X,\mathcal L_\lambda)=0$. [F3, F5, F6, step 2.1, algebra]

4.1 Combining steps 1.1, 2.1 and 3.1: if $\lambda+\rho$ is not regular all cohomology vanishes; if it is regular, then $H^{\ell(w)}(X,\mathcal L_\lambda)\cong L(w\cdot\lambda)^*$ and $H^i(X,\mathcal L_\lambda)=0$ for every $i\ne\ell(w)$, since degrees above $\ell(w)$ vanish by step 2.1 and degrees below vanish by step 3.1. These are the only nonvanishing cohomology groups, so the theorem is proved. [step 1.1, step 2.1, step 3.1] ∎

## Remarks

The low-degree vanishing is where Serre duality enters: the chain of wall
crossings reaches the dominant translate and controls degrees at least
$\ell(w)$, while the dual bundle $\mathcal L_{-\lambda-2\rho}$ has
Borel-Weil-Bott degree $N-\ell(w)$ and controls the complementary range.
The statement is stated for all $\lambda\in X^*(T)$; the singular case is
exactly the non-regular case of $\lambda+\rho$, in agreement with
[[lem-singular-dot-weights-have-zero-line-bundle-cohomology]].
