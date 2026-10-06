---
id: thm-casselman-osborne-nilradical-cohomology-constraint
kind: theorem
title: "The Casselman–Osborne constraint on weights of nilradical cohomology"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [lem-central-actions-on-nilradical-cohomology-factor-through-harish-chandra, def-harish-chandra-projection, lem-harish-chandra-projection-computes-highest-weight-scalars, lem-central-action-on-a-cyclic-highest-weight-module-is-scalar, prop-harish-chandra-projection-is-multiplicative-on-the-center, def-central-character-of-a-lie-algebra-module, cor-central-characters-are-dot-weyl-orbits, thm-highest-weight-classification-of-finite-dimensional-irreducible-representations, def-integral-dominant-and-strictly-dominant-weights, def-weight-and-weight-space-of-a-lie-algebra-representation, prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces, prop-a-normalizer-acts-on-lie-algebra-cohomology, def-axiom-of-choice]
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
    - title: "Faisal Al-Faisal, On the Representation Theory of Semisimple Lie Groups (University of Waterloo MMath thesis, 2010), §3.3 printed pp.71–73"
      url: "https://www.collectionscanada.gc.ca/obj/thesescanada/vol2/OWTU/TC-OWTU-5421.pdf"
      locator: "§3.3, printed p.72, Theorem 3.3.1 on the central action; §3.4, printed p.76, proof of Theorem 3.4.1 deriving equality of central characters and dot-orbit membership"
    - title: "Peter Woit, Lie Algebra Cohomology and the Borel–Weil–Bott Theorem (Math G4344, Spring 2012), printed pp.1–7"
      url: "https://www.math.columbia.edu/~woit/LieGroups-2012/borelweilbott.pdf"
      locator: "printed p.4, Theorem 1 and discussion of the central-action approach; the weight constraint is derived locally"
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex
semisimple Lie algebra with Cartan subalgebra $\mathfrak h$, positive system
$\Phi^+$, $\mathfrak n^+=\bigoplus_{\alpha\in\Phi^+}\mathfrak g_\alpha$,
$\lambda\in\Lambda^+$ dominant integral, and $V=L(\lambda)$ the
finite-dimensional irreducible module of highest weight $\lambda$
([[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]]).
If $\mu\in\mathfrak h^*$ is an $\mathfrak h$-weight of $H^p(\mathfrak n^+,V)$
for some $p\ge0$, then $\chi_\mu=\chi_\lambda$, where
$\chi_\nu\colon Z(U(\mathfrak g))\to\mathbb C$ is the central character
$z\mapsto\nu(\operatorname{pr}(z))$ attached to the highest weight $\nu$.
Equivalently,
$$\mu\in W\cdot\lambda=\{w(\lambda+\rho)-\rho:w\in W\}$$
by [[cor-central-characters-are-dot-weyl-orbits]]. This constrains every degree
independently of the harmonic computation below.

## Facts & Assumptions

**Given:** The Axiom of Choice; the finite-dimensional $\mathfrak g$-module $V=L(\lambda)$; a central element $z\in Z(U(\mathfrak g))$; and a class $\omega\in H^p(\mathfrak n^+,V)$ of $\mathfrak h$-weight $\mu$.

[F1] The module $V$ is finite-dimensional and irreducible with highest weight $\lambda$, and every central element acts on a cyclic highest-weight module by a scalar; for the highest vector $v_\lambda$ one has $zv_\lambda=\operatorname{pr}(z)(\lambda)v_\lambda$ ([[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]], [[lem-central-action-on-a-cyclic-highest-weight-module-is-scalar]], [[lem-harish-chandra-projection-computes-highest-weight-scalars]], [[def-harish-chandra-projection]]).

[F2] A central character of a module $M$ is a unital algebra homomorphism $\chi:Z(U(\mathfrak g))\to\mathbb C$ such that every $z$ acts by $\chi(z)\operatorname{id}_M$ ([[def-central-character-of-a-lie-algebra-module]]).

[F3] For every $z\in Z(U(\mathfrak g))$, every $p\ge0$ and every class $\omega\in H^p(\mathfrak n^+,V)$, $z\cdot\omega=\operatorname{pr}(z)\cdot\omega$, where the left side multiplies cochain values by $z$ and the right side is the $\mathfrak h$-action of the normalizer-action proposition applied to $\operatorname{pr}(z)\in S(\mathfrak h)$ ([[lem-central-actions-on-nilradical-cohomology-factor-through-harish-chandra]], [[prop-a-normalizer-acts-on-lie-algebra-cohomology]]).

[F4] The cohomology $H^p(\mathfrak n^+,V)$ is an $\mathfrak h$-module, so its $\mathfrak h$-weight spaces are defined; for a weight vector of weight $\mu$, every $h\in\mathfrak h$ acts by the scalar $\mu(h)$, hence every polynomial $f\in S(\mathfrak h)$ acts by $\mu(f)$ ([[prop-a-normalizer-acts-on-lie-algebra-cohomology]], [[def-weight-and-weight-space-of-a-lie-algebra-representation]], [[prop-finite-dimensional-representations-of-a-complex-semisimple-lie-algebra-decompose-into-weight-spaces]]).

[F5] The central characters obtained from highest weights are equal exactly on dot-Weyl orbits: $\chi_\nu=\chi_\xi$ if and only if $\xi\in W\cdot\nu$ ([[cor-central-characters-are-dot-weyl-orbits]], [[def-integral-dominant-and-strictly-dominant-weights]], [[prop-harish-chandra-projection-is-multiplicative-on-the-center]]).

## Proof

**Proof technique:** compare the central action on the coefficient module with the Cartan action on a cohomology weight vector.

1.1 The central element $z$ acts on the whole finite-dimensional irreducible module $V$ by the scalar $\chi_\lambda(z)=\operatorname{pr}(z)(\lambda)$: by [F1] it acts on the highest vector by that scalar, and cyclicity propagates the scalar to every vector because $z$ commutes with the action of $U(\mathfrak g)$. [F1, F2]

2.1 On the other hand, step 1.1 identifies the left-hand action of $z$ on cochain values with the scalar $\chi_\lambda(z)$, so for the cohomology class $\omega$ of weight $\mu$ the identity of [F3] gives $\chi_\lambda(z)\,\omega=z\cdot\omega=\operatorname{pr}(z)\cdot\omega$, while the $\mathfrak h$-action of the polynomial $\operatorname{pr}(z)\in S(\mathfrak h)$ on the weight vector $\omega$ is multiplication by the scalar $\mu(\operatorname{pr}(z))=\chi_\mu(z)$ by [F4]. [F3, F4, step 1.1]

3.1 Since $\omega\neq0$, step 2.1 forces $\chi_\lambda(z)=\chi_\mu(z)$ for every $z\in Z(U(\mathfrak g))$, that is $\chi_\lambda=\chi_\mu$. By [F5] equality of central characters is equivalent to $\mu\in W\cdot\lambda$, which is the displayed reformulation. [F5, step 2.1] ∎ 