---
id: lem-each-kostant-extremal-harmonic-space-is-one-dimensional
kind: lemma
title: "Each extremal harmonic space is one-dimensional"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [lem-extremal-weight-cochain-for-a-weyl-element-is-closed, lem-kostant-laplacian-is-scalar-on-weight-components, prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one, def-weight-and-weight-space-of-a-lie-algebra-representation, def-integral-dominant-and-strictly-dominant-weights, def-chevalley-eilenberg-cochains, def-lie-algebra-cohomology, def-axiom-of-choice]
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
    - title: "Roe Goodman and Nolan Wallach, Symmetry, Representations, and Invariants, GTM 255, Appendix E: Cohomology and Character Formulas, §E.2.1–§E.2.6, printed pp.17–30"
      url: "https://sites.math.rutgers.edu/~goodman/pub/symmetry/appe.pdf"
      locator: "§E.2.4–§E.2.5, printed pp.24–27, Lemma E.2.8, Theorem E.2.9, equation (E.44), and Corollary E.2.10; the harmonic interpretation is supplied by the local Laplacian lemma"
    - title: "Faisal Al-Faisal, On the Representation Theory of Semisimple Lie Groups (University of Waterloo MMath thesis, 2010), §3.4 printed pp.73–77"
      url: "https://www.collectionscanada.gc.ca/obj/thesescanada/vol2/OWTU/TC-OWTU-5421.pdf"
      locator: "§3.4, printed pp.73–76, Lemmas 3.4.3–3.4.5 and Remark 3.4.6(i)"
---

## Statement

Assume the Axiom of Choice. In the setting of
[[lem-kostant-laplacian-is-scalar-on-weight-components]], for every degree
$q\ge0$ the harmonic cochains are spanned by the extremal cochains of the Weyl
elements of length $q$:
$$\ker\square\cap C^q(\mathfrak n^+,V)=\bigoplus_{w\in W:\,\ell(w)=q}\mathbb C\gamma_w,$$
where $\gamma_w$ is the cocycle of
[[lem-extremal-weight-cochain-for-a-weyl-element-is-closed]]. Each summand is
one-dimensional, so $\dim(\ker\square\cap C^q)=\#\{w:\ell(w)=q\}$, and the
harmonic projection gives $H^q(\mathfrak n^+,V)\cong\ker\square\cap C^q$. In
particular the zero eigenspace of $\square$ is exactly the span of the
$\gamma_w$, with one line per element of $W$.

## Facts & Assumptions

**Given:** The setting and notation of [[lem-kostant-laplacian-is-scalar-on-weight-components]], including the extremal cochains $\gamma_w$ of [[lem-extremal-weight-cochain-for-a-weyl-element-is-closed]].

[L1] The Laplacian $\square$ acts on each weight component $C^\bullet_\mu$ actually occurring in the finite cochain space by the scalar $\tfrac12(\|\lambda+\rho\|^2-\|\mu+\rho\|^2)$; the scalar is nonnegative and vanishes exactly for $\mu\in W\cdot\lambda$ ([[lem-kostant-laplacian-is-scalar-on-weight-components]]).

[L2] For every $w\in W$ one has $C^q(\mathfrak n^+,V)_{w\cdot\lambda}=0$ unless $q=\ell(w)$, and $C^{\ell(w)}(\mathfrak n^+,V)_{w\cdot\lambda}=\mathbb C\gamma_w$ with $\gamma_w$ a nonzero cocycle and $W$-distinct dot weights; hence the sum over $w$ is direct ([[lem-extremal-weight-cochain-for-a-weyl-element-is-closed]], [[prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one]]).

[L3] The cochain space $C^q$ decomposes into finitely many orthogonal $\mathfrak h$-weight components, and a diagonalizable operator acts on each weight component by the displayed scalar ([[def-weight-and-weight-space-of-a-lie-algebra-representation]], [[def-chevalley-eilenberg-cochains]]).

[L4] Harmonic representatives identify $H^q(\mathfrak n^+,V)\cong\ker\square\cap C^q$ ([[lem-kostant-laplacian-is-scalar-on-weight-components]], [[def-lie-algebra-cohomology]], [[def-integral-dominant-and-strictly-dominant-weights]]).

## Proof

**Proof technique:** read off the zero eigenspace of the scalar Laplacian weight by weight.

1.1 By [L1] and [L3] the operator $\square$ is diagonalizable on $C^q$ with eigenvalues $\tfrac12(\|\lambda+\rho\|^2-\|\mu+\rho\|^2)$ on $C^q_\mu$, so $\ker\square\cap C^q$ is the direct sum of the weight components $C^q_\mu$ with $\|\mu+\rho\|=\|\lambda+\rho\|$, that is, with $\mu\in W\cdot\lambda$ by the equality case of [L1]. [L1, L3]

2.1 For each $w\in W$ the component at $\mu=w\cdot\lambda$ contributes $C^q_{w\cdot\lambda}$, which by [L2] is $0$ unless $q=\ell(w)$, and is the one-dimensional space $\mathbb C\gamma_w$ when $q=\ell(w)$; the dot weights $w\cdot\lambda$ for distinct $w$ are distinct, so these contributions form a direct sum. [L2, step 1.1]

3.1 Summing the contributions of step 2.1 over all $w\in W$ gives $\ker\square\cap C^q=\bigoplus_{\ell(w)=q}\mathbb C\gamma_w$, each summand one-dimensional, so the dimension is the number of Weyl elements of length $q$; the identification with cohomology is [L4]. The case $q=0$ is included: $\gamma_1=v_\lambda$ spans the invariants, and for the zero Lie algebra all statements reduce to the single line $\mathbb C\gamma_1$ in degree zero. [L2, L4, step 2.1] ∎ 