---
id: thm-kostant-nilradical-cohomology-theorem
kind: theorem
title: "Kostant's nilradical cohomology theorem"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [lem-each-kostant-extremal-harmonic-space-is-one-dimensional, lem-extremal-weight-cochain-for-a-weyl-element-is-closed, lem-kostant-laplacian-is-scalar-on-weight-components, prop-a-normalizer-acts-on-lie-algebra-cohomology, lem-positive-root-pairings-of-a-dominant-integral-weight, def-integral-dominant-and-strictly-dominant-weights, def-weyl-vector-rho-for-a-chosen-positive-system, def-length-and-longest-element-of-a-finite-weyl-group, def-weight-and-weight-space-of-a-lie-algebra-representation, prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one, thm-highest-weight-classification-of-finite-dimensional-irreducible-representations, def-chevalley-eilenberg-cochains, def-lie-algebra-cohomology, def-axiom-of-choice]
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
    - title: "Faisal Al-Faisal, On the Representation Theory of Semisimple Lie Groups (University of Waterloo MMath thesis, 2010), §3.4 printed pp.73–77"
      url: "https://www.collectionscanada.gc.ca/obj/thesescanada/vol2/OWTU/TC-OWTU-5421.pdf"
      locator: "§3.4, printed p.73, Theorem 3.4.1 (Kostant) with Remark 3.4.2; printed p.76, Remark 3.4.6(i) on the dimension count"
    - title: "Peter Woit, Lie Algebra Cohomology and the Borel–Weil–Bott Theorem (Math G4344, Spring 2012), printed pp.1–7"
      url: "https://www.math.columbia.edu/~woit/LieGroups-2012/borelweilbott.pdf"
      locator: "printed p.4, Theorem 1 for finite-dimensional irreducible highest-weight coefficients"
---

## Statement

Assume the Axiom of Choice. Let $\mathfrak g$ be a finite-dimensional complex semisimple Lie algebra with Cartan subalgebra $\mathfrak h$, chosen positive system $\Phi^+$ and $\mathfrak n^+=\bigoplus_{\alpha>0}\mathfrak g_\alpha$, and let $\lambda\in\Lambda^+$ be dominant integral with $V=L(\lambda)$. Then for every $k\ge0$ there is an isomorphism of $\mathfrak h$-modules
$$H^k(\mathfrak n^+,V)\cong\bigoplus_{w\in W:\,\ell(w)=k}\mathbb C_{w\cdot\lambda},$$
where $\mathbb C_\mu$ is the one-dimensional $\mathfrak h$-module of weight $\mu$ and $w\cdot\lambda=w(\lambda+\rho)-\rho$. Equivalently, $H^k(\mathfrak n^+,V)$ is multiplicity free with weights exactly the pairwise distinct weights $w\cdot\lambda$ over the length-$k$ elements, and $\dim H^k(\mathfrak n^+,V)=\#\{w\in W:\ell(w)=k\}$.

## Facts & Assumptions

**Given:** The Axiom of Choice; the finite-dimensional data $(\mathfrak g,\mathfrak h,\Phi^+,\lambda,V=L(\lambda))$ and the operators $d,\delta,\square$ of [[lem-kostant-laplacian-is-scalar-on-weight-components]].

[F1] The harmonic projection identifies $H^k(\mathfrak n^+,V)$ with the harmonic cochains $\ker\square\cap C^k(\mathfrak n^+,V)$, and these are spanned by the extremal cochains: $\ker\square\cap C^k=\bigoplus_{\ell(w)=k}\mathbb C\gamma_w$ ([[lem-each-kostant-extremal-harmonic-space-is-one-dimensional]]).

[F2] Each $\gamma_w$ is a nonzero cocycle of weight $w\cdot\lambda=w(\lambda+\rho)-\rho$ ([[lem-extremal-weight-cochain-for-a-weyl-element-is-closed]]).

[F3] The identifications $H^k\cong\ker\square\cap C^k$ and the direct sum are isomorphisms of $\mathfrak h$-modules: the $\mathfrak h$-action of [[prop-a-normalizer-acts-on-lie-algebra-cohomology]] commutes with $d$, the harmonic projection is obtained from the $\mathfrak h$-stable subspaces $\operatorname{im}d$ and $\ker\square$, and the displayed identity for $\square$ in [[lem-kostant-laplacian-is-scalar-on-weight-components]] exhibits $\square$ as a polynomial in operators $\Theta(H)$ that commute with one another, so $\square$ commutes with the $\mathfrak h$-action as well.

[F4] The dot weights are pairwise distinct: $\lambda+\rho$ is regular, with trivial stabilizer, by ([[lem-positive-root-pairings-of-a-dominant-integral-weight]], [[def-integral-dominant-and-strictly-dominant-weights]], [[def-weyl-vector-rho-for-a-chosen-positive-system]]); and each weight space $V_{w\lambda}$ is one-dimensional ([[prop-weyl-orbit-of-the-highest-weight-gives-extremal-weights-with-multiplicity-one]], [[thm-highest-weight-classification-of-finite-dimensional-irreducible-representations]], [[def-weight-and-weight-space-of-a-lie-algebra-representation]], [[def-length-and-longest-element-of-a-finite-weyl-group]], [[def-chevalley-eilenberg-cochains]], [[def-lie-algebra-cohomology]]).

## Proof

**Proof technique:** combine the one-dimensional harmonic spaces with the weight computation for the extremal cochains.

1.1 By [F1] the space $H^k(\mathfrak n^+,V)$ is isomorphic to $\bigoplus_{\ell(w)=k}\mathbb C\gamma_w$, and by [F3] this isomorphism is $\mathfrak h$-linear. [F1, F3]

2.1 Each summand $\mathbb C\gamma_w$ is the one-dimensional $\mathfrak h$-module of weight $w\cdot\lambda$ by [F2], and the weights $w\cdot\lambda$ for distinct Weyl elements $w$ are pairwise distinct by the regularity of $\lambda+\rho$ recorded in [F4]. Hence the direct sum in step 1.1 is exactly $\bigoplus_{\ell(w)=k}\mathbb C_{w\cdot\lambda}$ as an $\mathfrak h$-module. [F2, F4, step 1.1]

3.1 Counting dimensions in step 2.1 gives $\dim H^k(\mathfrak n^+,V)=\#\{w\in W:\ell(w)=k\}$ and shows that the multiplicity of every occurring weight is one; in particular $H^k(\mathfrak n^+,V)$ is multiplicity free with the stated weights, and all groups are finite dimensional because $W$ is finite. [F4, step 2.1] ∎ 
