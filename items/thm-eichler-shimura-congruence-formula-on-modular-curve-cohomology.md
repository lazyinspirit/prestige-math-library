---
id: thm-eichler-shimura-congruence-formula-on-modular-curve-cohomology
kind: theorem
title: "Eichler–Shimura congruence formula on modular-curve cohomology"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - thm-modular-curve-cohomology-realizes-cuspidal-eigensystems
  - def-hecke-operator-on-congruence-forms
  - thm-hecke-preserves-cuspidality-on-congruence-subgroups
  - def-arithmetic-frobenius-coset
  - def-axiom-of-choice
forward_refs:
  - lem-eichler-shimura-frobenius-verschiebung-relations-on-modular-curve-cohomology
  - thm-shimura-isomorphism-for-modular-curves-with-symmetric-power-local-systems
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Pierre Deligne, Formes modulaires et représentations ℓ-adiques"
      url: "https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf"
      locator: "§§4.1–4.9, especially the complete discussion in §§4.8–4.9 and Theorem 4.9."
    - title: "Fred Diamond and John Im, Modular Forms and Modular Curves"
      url: "https://wstein.org/edu/Fall2003/252/references/diamond-im/Diamond-Im_Modular_forms_and_modular_curves.pdf"
      locator: "Chapter 12 §§12.2 and 12.5.1, scanned printed pp. 106–113 and 120–123; weight-two congruence relation and general theorem statement."
    - title: "Peter Bruin, Modular Curves and Galois Representations"
      url: "https://pub.math.leidenuniv.nl/~bruinpj/Beirut.pdf"
      locator: "§§2.2–2.4 and §3.6, full 17-page notes; the general theorem statement and weight-two Frobenius–Hecke relation."
---

## Statement

Assume AC. Let $f$, $W_{f,\ell}$, $N$, $k$, $E$, $\iota_\ell$, and $\chi$ be as in the modular-curve cohomology realization statement. For every prime $p\nmid N\ell$, let $F_p^{\mathrm{geom}}$ be the action of geometric Frobenius, the inverse of arithmetic Frobenius, on $W_{f,\ell}$. The Eichler–Shimura congruence formula asserts

$$\det\!\left(XI-F_p^{\mathrm{geom}}\mid W_{f,\ell}\right)=X^2-\iota_\ell(a_p)X+\iota_\ell(\chi(p))p^{k-1}.$$

## Statement references

[[thm-modular-curve-cohomology-realizes-cuspidal-eigensystems]]

[[def-arithmetic-frobenius-coset]]

[Deligne, *Formes modulaires et représentations ℓ-adiques*, §§4.1–4.9](https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf)

[Diamond–Im, *Modular Forms and Modular Curves*, Chapter 12 §§12.2, 12.5.1](https://wstein.org/edu/Fall2003/252/references/diamond-im/Diamond-Im_Modular_forms_and_modular_curves.pdf)

[Bruin, *Modular Curves and Galois Representations*, §§2.2–2.4, 3.6](https://pub.math.leidenuniv.nl/~bruinpj/Beirut.pdf)

## Facts & Assumptions

**Given:** AC; the two-dimensional continuous cohomological eigenspace and Hecke action from the preceding modular-curve statement; a prime $p\nmid N\ell$; and arithmetic Frobenius normalized by $x\mapsto x^p$ on the residue field.

[A1] [[def-axiom-of-choice]]: AC is inherited from the global Galois-group convention.

[F1] [[thm-modular-curve-cohomology-realizes-cuspidal-eigensystems]]: the current statement asserts that $W_{f,\ell}$ is two-dimensional, $G_{\mathbb Q}$-stable and unramified at $p\nmid N\ell$, with the Hecke eigensystem of $f$.

[F2] [[def-hecke-operator-on-congruence-forms]] defines the normalized Hecke operator $T_p$ on invariant holomorphic functions; [[thm-hecke-preserves-cuspidality-on-congruence-subgroups]] establishes its action on the cusp space.

[F3] [[def-arithmetic-frobenius-coset]]: arithmetic Frobenius is the residue power map $x\mapsto x^p$, and geometric Frobenius is its inverse.

[L1] `lem-eichler-shimura-frobenius-verschiebung-relations-on-modular-curve-cohomology` is proposed to supply the good-reduction correspondence calculation, including the Frobenius/Verschiebung relation and the determinant normalization in the symmetric-power local system. It is absent. Deligne §§4.8–4.9 give the route but rely on the modular model, specialization and cohomological comparison inputs listed in the preceding theorem.

[L2] `thm-shimura-isomorphism-for-modular-curves-with-symmetric-power-local-systems` remains required to identify the correct two-dimensional eigenspace for every $k\ge2$; it is absent and is not supplied by the weight-two Jacobian argument.
