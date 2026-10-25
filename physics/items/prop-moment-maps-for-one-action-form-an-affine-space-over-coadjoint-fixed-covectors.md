---
id: prop-moment-maps-for-one-action-form-an-affine-space-over-coadjoint-fixed-covectors
kind: proposition
title: Moment maps for one action form an affine space over coadjoint-fixed covectors
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-moment-map-and-component-hamiltonian, def-coadjoint-representation-of-a-lie-group, prop-hamiltonians-for-a-fixed-vector-field-differ-by-a-locally-constant-function, thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 26, §26.4, printed page 167
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.3, Proposition 7.15 and its proof, printed page 85
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$ and let $M$ be connected. Fix a symplectic left
action of $G$ on $(M,\omega)$. If $\mu_1,\mu_2:M\to\mathfrak g^*$ are two
equivariant moment maps for this action, then

$$\mu_1-\mu_2=\delta$$

for a constant $\delta\in(\mathfrak g^*)^G$, the space of coadjoint-fixed
covectors. Conversely, for every equivariant moment map $\mu$ and every
$\delta\in(\mathfrak g^*)^G$, the translate $\mu+\delta$ is again an
equivariant moment map. Hence the set of equivariant moment maps for a fixed
action is either empty or an affine space under $(\mathfrak g^*)^G$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a connected symplectic manifold $(M,\omega)$ with a symplectic $G$-action, and equivariant moment maps $\mu_1,\mu_2$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field interface cited in [F1].

[F1] Each component satisfies $d\mu_i^\xi=-\iota_{\xi_M}\omega$, and the components depend linearly on $\xi$. [[def-moment-map-and-component-hamiltonian]].

[F2] Two Hamiltonians for the same vector field differ by a locally constant function, hence by a constant on each connected component; and $X_H$ is the unique field with $\iota_{X_H}\omega=dH$. [[prop-hamiltonians-for-a-fixed-vector-field-differ-by-a-locally-constant-function]], [[thm-hamiltonian-vector-fields-exist-uniquely-for-smooth-functions]].

[F3] The coadjoint action is $(g\cdot\alpha)(\zeta)=\alpha(\operatorname{Ad}_{g^{-1}}\zeta)$, and $(\mathfrak g^*)^G=\{\delta:g\cdot\delta=\delta\text{ for all }g\in G\}$. [[def-coadjoint-representation-of-a-lie-group]].

## Proof

**Proof technique:** direct.

1.1 Fix $\xi\in\mathfrak g$. By [F1] and [F2] the two components $\mu_1^\xi$ and $\mu_2^\xi$ are Hamiltonian functions for the same vector field $-\xi_M$, namely the unique $X_{\mu_i^\xi}=-\xi_M$; hence $\mu_1^\xi-\mu_2^\xi$ is locally constant, and constant because $M$ is connected. [F1, F2, given]

1.2 Conversely let $\mu$ be an equivariant moment map and $\delta\in(\mathfrak g^*)^G$. The components of $\mu+\delta$ are $\mu^\xi+\delta(\xi)$; adding the constant $\delta(\xi)$ changes no differential, so the component equations hold for $\mu+\delta$ by [F1]. Moreover $$(\mu+\delta)(g\cdot p)=g\cdot\mu(p)+\delta=g\cdot\mu(p)+g\cdot\delta=g\cdot(\mu+\delta)(p)$$ for all $g,p$, so $\mu+\delta$ is equivariant. [F3, F1]

2.1 Define $\delta(\xi):=\mu_1^\xi-\mu_2^\xi$, a real number. Since $\xi\mapsto\mu_1^\xi-\mu_2^\xi$ is linear by [F1], the assignment $\delta:\mathfrak g\to\mathbb R$ is a linear functional, so $\delta\in\mathfrak g^*$ and $\mu_1(p)-\mu_2(p)=\delta$ for every $p\in M$. [step 1.1, F1]

3.1 Both maps are equivariant, so for all $g\in G$ and $p\in M$ $$\delta=\mu_1(g\cdot p)-\mu_2(g\cdot p)=g\cdot\mu_1(p)-g\cdot\mu_2(p)=g\cdot\delta,$$ the last step by linearity of the coadjoint action. Hence $\delta\in(\mathfrak g^*)^G$. [step 2.1, F3]

4.1 Steps 1.1--3.1 show that any two equivariant moment maps differ by an element of $(\mathfrak g^*)^G$, and step 1.2 shows that every translate by an element of $(\mathfrak g^*)^G$ is again an equivariant moment map; hence the solution set is either empty or an affine space under $(\mathfrak g^*)^G$. [step 3.1, step 1.2, A1] ∎
