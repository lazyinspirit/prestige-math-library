---
id: thm-deligne-attaches-l-adic-representation-to-a-cuspidal-eigenform
kind: theorem
title: "Deligne attaches a two-dimensional ℓ-adic representation to a cuspidal eigenform"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - thm-eichler-shimura-congruence-formula-on-modular-curve-cohomology
  - thm-modular-curve-cohomology-realizes-cuspidal-eigensystems
  - def-continuous-finite-coefficient-l-adic-galois-representation
  - def-continuous-l-adic-galois-representation
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Pierre Deligne, Formes modulaires et représentations ℓ-adiques"
      url: "https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf"
      locator: "§§3.1–3.11 and §§4.1–4.9, full article; continuity, cohomological construction, and Frobenius normalization."
    - title: "Fred Diamond and John Im, Modular Forms and Modular Curves"
      url: "https://wstein.org/edu/Fall2003/252/references/diamond-im/Diamond-Im_Modular_forms_and_modular_curves.pdf"
      locator: "Chapter 12 §12.5.1, scanned printed pp. 120–121: Deligne’s theorem and the dual/cohomological convention."
    - title: "Peter Bruin, Modular Curves and Galois Representations"
      url: "https://pub.math.leidenuniv.nl/~bruinpj/Beirut.pdf"
      locator: "§§3.1–3.6, full 17-page notes; attached-representation statement and weight-two construction."
---

## Statement

Assume AC. Let $f$, $N$, $k$, $E$, $\chi$, $\ell$, and $\iota_\ell$ be as in the modular-curve cohomology realization statement, and let $L/\mathbb Q_\ell$ be a finite extension containing $\iota_\ell(E)$. There is a two-dimensional $L$-vector space $V_{f,\ell}$ and a continuous representation

$$\rho_{f,\ell}:G_{\mathbb Q}\longrightarrow\operatorname{GL}_L(V_{f,\ell})$$

which is unramified at every prime $p\nmid N\ell$. With the cohomological action normalized as geometric Frobenius, $V_{f,\ell}$ is the contragredient of the corresponding two-dimensional cuspidal eigenspace in parabolic étale cohomology.

## Statement references

[[thm-modular-curve-cohomology-realizes-cuspidal-eigensystems]]

[[def-continuous-finite-coefficient-l-adic-galois-representation]]

[Deligne, *Formes modulaires et représentations ℓ-adiques*, §§3.1–3.11 and 4.1–4.9](https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf)

[Diamond–Im, *Modular Forms and Modular Curves*, Chapter 12 §12.5.1](https://wstein.org/edu/Fall2003/252/references/diamond-im/Diamond-Im_Modular_forms_and_modular_curves.pdf)

[Bruin, *Modular Curves and Galois Representations*, §§3.1–3.6](https://pub.math.leidenuniv.nl/~bruinpj/Beirut.pdf)

## Facts & Assumptions

**Given:** AC; the continuous two-dimensional $G_{\mathbb Q}$-space $W_{f,\ell}$ supplied by the modular-curve cohomology realization; and a finite coefficient extension $L/\mathbb Q_\ell$ containing the chosen coefficient embedding.

[A1] [[def-axiom-of-choice]]: AC is assumed in the global absolute-Galois-group convention.

[F1] [[thm-modular-curve-cohomology-realizes-cuspidal-eigensystems]]: its current statement asserts that $W_{f,\ell}$ is two-dimensional, carries a continuous $G_{\mathbb Q}$-action, and is unramified at primes $p\nmid N\ell$. Its proof is not supplied.

[F2] [[def-continuous-finite-coefficient-l-adic-galois-representation]]: a continuous homomorphism $G_{\mathbb Q}\to\operatorname{GL}_L(W)$ on a finite-dimensional $L$-space is a continuous $L$-linear Galois representation.

## Proof

1.1 By [F1], $W_{f,\ell}$ has dimension two over $L$. Its dual $W_{f,\ell}^{\vee}=\operatorname{Hom}_L(W_{f,\ell},L)$ also has dimension two: if $(w_1,w_2)$ is a basis, its dual basis has two elements. [A1, F1, given, algebra]

1.2 Define $\rho_{f,\ell}(g)\lambda:=\lambda\circ\rho_W(g^{-1})$ for $g\in G_{\mathbb Q}$ and $\lambda\in W_{f,\ell}^{\vee}$. The group law follows from $\rho_W((gh)^{-1})=\rho_W(h^{-1})\rho_W(g^{-1})$, so this is the contragredient representation. In a basis its matrices are inverse transposes of those of $\rho_W$; inversion and transpose are continuous on $\operatorname{GL}_2(L)$, hence the representation is continuous and satisfies [F2]. [A1, F1, F2, step 1.1, given, construct, algebra]

2.1 For $p\nmid N\ell$, [F1] says inertia acts trivially on $W_{f,\ell}$. The contragredient of the identity action is again the identity, so $\rho_{f,\ell}$ is unramified at $p$. The representation therefore has every stated property. [F1, step 1.2, algebra] ∎
