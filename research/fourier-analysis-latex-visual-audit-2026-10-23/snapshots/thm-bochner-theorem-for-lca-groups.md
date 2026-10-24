---
id: thm-bochner-theorem-for-lca-groups
kind: theorem
title: Bochner's theorem for LCA groups
dependency_level: 9
deps:
- def-fourier-transform-on-an-lca-group
- def-positive-definite-function-on-an-abelian-group
- def-radon-measure-on-an-lch-space
- def-regular-complex-borel-measure-on-an-lch-space
- lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite
- lem-fourier-stieltjes-transforms-determine-finite-radon-measures
- lem-positive-definite-functions-give-positive-bounded-functionals-on-the-transform-core
- lem-bochner-functional-extends-and-has-a-radon-representing-measure
- lem-lca-haar-measure-is-inversion-invariant
- lem-character-evaluation-pairing-is-jointly-continuous
- def-pontryagin-dual-and-compact-open-topology
- lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
- lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- def-compact-support-c-c-and-c-zero-on-an-lch-space
- def-dependent-choice
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
  - title: "T. W. Koerner, Topological Groups (author PDF, Internet Archive snapshot of the dpmms.cam.ac.uk Topg.pdf file)"
    url: "https://web.archive.org/web/2024id_/https://www.dpmms.cam.ac.uk/~twk10/Topg.pdf"
  - title: "Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C.2-C.3 (course-hosted full text)"
    url: "https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice and Dependent Choice. Let $G$ be a locally compact Hausdorff abelian group with dual $\widehat G$. A continuous function $\phi:G\to\mathbb C$ is positive definite if and only if there is a unique finite positive Radon measure $\mu$ on $\widehat G$ with
$$\phi(x)=\int_{\widehat G}\gamma(x)\,d\mu(\gamma)\qquad(x\in G),$$
and then $\mu(\widehat G)=\phi(0)$. The measure is called the representing measure of $\phi$.

## Facts & Assumptions

**Given:** The Axiom of Choice and Dependent Choice, a locally compact Hausdorff abelian group $G$ with Haar measure $m_G$ and dual $\widehat G$, and a continuous function $\phi:G\to\mathbb C$.

[F1] If $\mu$ is a finite positive Radon measure on $\widehat G$, then $\phi_\mu(x):=\int_{\widehat G}\gamma(x)\,d\mu(\gamma)$ is continuous and positive definite, and $\phi_\mu(0)=\mu(\widehat G)$ ([[lem-fourier-stieltjes-transform-of-a-positive-measure-is-positive-definite]], [[def-positive-definite-function-on-an-abelian-group]], [[def-radon-measure-on-an-lch-space]]).

[F2] If $\phi$ is continuous and positive definite with $k=\phi(0)$, then the transform-core functional $F_\phi$ of the preceding lemmas extends uniquely to a bounded positive linear functional $L$ on $C_0(\widehat G)$ with norm $k$, there is a finite positive Radon measure $\mu_\phi$ on $\widehat G$ with $L(H)=\int_{\widehat G}H\,d\mu_\phi$ for all $H\in C_0(\widehat G)$ and $\mu_\phi(\widehat G)=k$, and for every $f\in L^1(G,m_G)$ one has $F_\phi(\widehat f)=L_\phi(f)=\int_Gf(x)\phi(-x)\,dm_G(x)$ ([[lem-positive-definite-functions-give-positive-bounded-functionals-on-the-transform-core]], [[lem-bochner-functional-extends-and-has-a-radon-representing-measure]], [[def-fourier-transform-on-an-lca-group]]).

[F3] Two finite regular complex Borel measures on $\widehat G$ with the same inverse transform $x\mapsto\int_{\widehat G}\gamma(x)\,d\sigma(\gamma)$ are equal ([[lem-fourier-stieltjes-transforms-determine-finite-radon-measures]], [[def-regular-complex-borel-measure-on-an-lch-space]]).

[F4] For $f\in C_c(G)$ and the finite measure $\mu_\phi$, Fubini gives $\int_{\widehat G}\widehat f\,d\mu_\phi=\int_Gf(x)\bigl(\int_{\widehat G}\gamma(-x)\,d\mu_\phi(\gamma)\bigr)dm_G(x)$; the function $x\mapsto\int_{\widehat G}\gamma(x)\,d\mu_\phi(\gamma)$ is continuous because $|\mu_\phi|$ is inner regular and characters converge uniformly on compact sets; and a continuous function on $G$ annihilated by every nonnegative compactly supported bump is identically zero, since Haar measure is positive on nonempty open sets and Urysohn cutoffs exist ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[def-radon-measure-on-an-lch-space]], [[lem-character-evaluation-pairing-is-jointly-continuous]], [[def-pontryagin-dual-and-compact-open-topology]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]], [[lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set]], [[def-compact-support-c-c-and-c-zero-on-an-lch-space]]).

[F5] Haar measure is invariant under the substitution $x\mapsto-x$ ([[lem-lca-haar-measure-is-inversion-invariant]], [[def-dependent-choice]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 (The easy direction.) Assume $\phi(x)=\int_{\widehat G}\gamma(x)\,d\mu(\gamma)$ for a finite positive Radon measure $\mu$. Then by [F1] $\phi$ is continuous and positive definite with $\phi(0)=\mu(\widehat G)$; this proves the reverse implication and the mass identity for that direction. [F1]

1.2 (The converse: construction of the measure.) Assume $\phi$ continuous and positive definite, and put $k:=\phi(0)$. By [F2] there is a finite positive Radon measure $\mu_\phi$ on $\widehat G$ with $\mu_\phi(\widehat G)=k$, representing the extension $L$ of $F_\phi$ on $C_0(\widehat G)$, and with $\int_{\widehat G}\widehat f\,d\mu_\phi=F_\phi(\widehat f)=\int_Gf(x)\phi(-x)\,dm_G(x)$ for every $f\in L^1(G,m_G)$. [F2]

2.1 (The representation $\phi=\check\mu_\phi$.) Let $f\in C_c(G)\subseteq L^1(G,m_G)$ and put $\Psi(x):=\int_{\widehat G}\gamma(x)\,d\mu_\phi(\gamma)$. By [F4], Fubini and step 1.2 give $$0=\int_Gf(x)\phi(-x)\,dm_G(x)-\int_{\widehat G}\widehat f\,d\mu_\phi=\int_Gf(x)\bigl(\phi(-x)-\Psi(-x)\bigr)dm_G(x).$$ Replacing $f$ by $f(-\cdot)$, which still ranges over $C_c(G)$, and using the inversion invariance of Haar measure [F5] yields $\int_Gf(x)(\phi-\Psi)(x)\,dm_G(x)=0$ for every $f\in C_c(G)$. The function $D:=\phi-\Psi$ is continuous by hypothesis and [F4]. If $D(y_0)\ne0$, choose $c\in\mathbb C$ with $|c|=1$ and $\operatorname{Re}(cD(y_0))>0$; continuity gives a nonempty open neighbourhood $V$ of $y_0$ on which $\operatorname{Re}(cD)>0$. Choose a nonzero nonnegative bump $f\in C_c(G)$ supported in $V$. Since Haar measure is positive on nonempty open sets, $\int_G f(x)\operatorname{Re}(cD(x))\,dm_G(x)>0$, contradicting $c\int_G f(x)D(x)\,dm_G(x)=0$. Thus $D=0$, so $\phi(x)=\Psi(x)=\int_{\widehat G}\gamma(x)\,d\mu_\phi(\gamma)$ for every $x\in G$. [F2, F4, F5, step 1.2]

2.2 (Uniqueness of the representing measure.) Suppose finite positive Radon measures $\mu,\nu$ on $\widehat G$ satisfy $\int_{\widehat G}\gamma(x)\,d\mu(\gamma)=\int_{\widehat G}\gamma(x)\,d\nu(\gamma)$ for every $x\in G$. Then $\sigma:=\mu-\nu$ is a finite regular complex Borel measure whose inverse transform vanishes identically, so $\sigma=0$ by [F3], that is, $\mu=\nu$. [F3, step 1.1]

3.1 (Conclusion.) Step 2.1 proves that every continuous positive definite $\phi$ has a representing finite positive Radon measure $\mu_\phi$ with $\mu_\phi(\widehat G)=\phi(0)$ by step 1.2, step 2.2 proves uniqueness, and step 1.1 proves the converse direction and its mass identity. [step 1.1, step 1.2, step 2.1, step 2.2] ∎
