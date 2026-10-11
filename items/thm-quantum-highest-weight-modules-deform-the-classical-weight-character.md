---
id: thm-quantum-highest-weight-modules-deform-the-classical-weight-character
kind: theorem
title: "Finitely generated free integral weight lattices and deformation of the classical weight character"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-weyl-kac-character-formula, def-axiom-of-choice, def-kac-moody-integral-and-dominant-integral-weights, def-lower-global-basis-of-a-quantum-highest-weight-module, def-quantum-weight-module-and-integrability, lem-finite-support-regularization-of-quantum-label-weight-modules, lem-local-q-one-deformation-proves-integrable-highest-weight-universality, lem-q-one-toral-specialization-identifies-the-classical-cartan-generators, prop-specialization-at-q-one-recovers-the-classical-enveloping-relations, thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis, thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module, thm-integrable-quantum-highest-weight-module-exists-and-is-unique, thm-serre-presentation-of-a-kac-moody-algebra]
justified_by: []
aliases: []
landmark: false
dependency_level: 16
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Mathematical Journal 63 (1991), 465–516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§6.1, printed pp. 507–509 (PDF pp. 43–45): integral Z[q,q^-1] forms and integral crystal residue lattices; §7.1 Lemmas 7.1.1–7.1.2, printed pp. 509–511 (PDF pp. 45–47): balanced lifting for an arbitrary Z[q,q^-1]-submodule, without assuming its freeness; §§7.2–7.5, printed pp. 511–516 (PDF pp. 47–52): simultaneous integral global construction; §7.5 equations (7.5.5)–(7.5.6), printed p. 515 (PDF p. 51), prove a Z[q,q^-1] basis of the divided-power negative half; Lemma 7.5.2 and its concluding based-quotient argument, printed p. 516 (PDF p. 52), prove the corresponding basis of V_Z(lambda)."
    - title: "Richard Borcherds, Mark Haiman, Theo Johnson-Freyd, Nicolai Reshetikhin and Vera Serganova, Berkeley Lectures on Lie Groups and Quantum Groups (book-length lecture notes, last updated 18 January 2024)"
      url: "https://categorified.net/LieQuantumGroups.pdf"
      locator: "§13.2.1 Theorem 13.2.1.10 and its full proof, printed pp. 316–317: the source sets A=Q[q,q^-1], a PID. It supports the rational/local q=1 comparison, not Z[q,q^-1]-freeness. Corollary 13.2.1.11 gives semisimplicity. Actual global integral module basis: Kashiwara91 §7.5.2 and concluding based-quotient proof (above)."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "Ch. 33, §33.1.2-33.1.3, printed pp. 258-260: Theorem 33.1.3(d), the equality of the weight multiplicities of the integrable highest weight module with those of the simple integrable highest weight representation of the Kac-Moody Lie algebra."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§2-3, printed pp. 8-11: Propositions 2.2, 2.4 and 3.3-3.4 on highest weight modules of dominant integral weights, their weight multiplicities, and their place in $\\mathcal O_{\\mathrm{int}}$."
---

## Statement

For every dominant label weight $\lambda$, let $V_A=U_Av_\lambda=U_A^-v_\lambda$ be the integral highest lattice inside the simple integrable module $L(\lambda)$, over $A=\mathbb Z[q,q^{-1}]$. Then each label-weight component of $V_A$ is finite free of rank $\dim_{\mathbb Q(q)}L(\lambda)_\mu$, not merely torsionfree, and $V_A$ spans the field module. For every characteristic-zero field $k$ specialized at $q=1$, the fibre has the same weight dimensions and is the classical simple integrable highest weight module of the explicitly regularized realization, transported back to the original label lattice; hence its character is the Weyl–Kac character, the finite Weyl character in finite type. The integral quotient $U_A^-/\sum_i\sum_{s>\lambda(h_i)}U_A^-F_i^{(s)}$ is $V_A(\lambda)$; its field extension is $L(\lambda)$ in every symmetrizable type.

## Facts & Assumptions

**Given:** The auxiliary primitive-coroot regular datum and finite-support transport of [[lem-finite-support-regularization-of-quantum-label-weight-modules]]; the exact highest-module existence and Serre presentation of [[thm-integrable-quantum-highest-weight-module-exists-and-is-unique]] and [[thm-serre-presentation-of-a-kac-moody-algebra]]; the local $q=1$ comparison theorems; and the integral global bases of this page.

[F1] Based quotient and freeness ([[thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module]], [[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]], [[def-lower-global-basis-of-a-quantum-highest-weight-module]]): the projection $\pi_\lambda:U_A^-\to V_A$ is a based quotient, its surviving lower global basis elements form the $A$-basis $G_\lambda(\mathcal B(\lambda))$ of $V_A$, and each finite weight component of $V_A$ is free over $A$ of rank its field dimension.

[F2] Local $q=1$ comparison and classical fibre ([[lem-local-q-one-deformation-proves-integrable-highest-weight-universality]], [[prop-specialization-at-q-one-recovers-the-classical-enveloping-relations]], [[lem-q-one-toral-specialization-identifies-the-classical-cartan-generators]], [[def-quantum-weight-module-and-integrability]]): the local deformation proves the simple quantum highest weight module and its field character with discrete-valuation-ring-free lattices, and at characteristic-zero $q=1$ the specialization identifies the fibre with the classical simple integrable highest weight module of the regularized realization.

[F3] Integral and field quotients ([[thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module]], [[thm-integrable-quantum-highest-weight-module-exists-and-is-unique]]): the integral divided-right-power quotient is $V_A(\lambda)$, and after field extension the singular-vector quotient is the simple integrable module $L(\lambda)$.

[F4] Auxiliary transport ([[lem-finite-support-regularization-of-quantum-label-weight-modules]]): every fixed finite degree is transported into an explicit primitive-coroot regular datum with integral dominant labels and back, preserving ranks and characters, so the perfect-pairing, regularity and fundamental-weight hypotheses used in the source comparisons are available.

[F5] Weyl–Kac character ([[thm-weyl-kac-character-formula]]): the classical simple integrable highest weight module in the regularized realization has the Weyl–Kac character, which in finite type is the finite Weyl character.

[C1] Choice: declared through [[def-axiom-of-choice]] and used only as inherited by the grand loop and the local deformation suppliers; the rank and base-change arguments are choice-free.

## Proof

**Proof technique:** direct.

1.1 **Free weight lattices.** By [F1] the surviving lower global elements $G_\lambda(b)$ form an $A$-basis of $V_A$, so every label-weight component, being the span of the finitely many basis elements of that weight, is a finite free $A$-module of rank equal to the number of surviving crystal classes of that weight; by the bijection of [F1] this number is $\dim_{\mathbb Q(q)}L(\lambda)_\mu$. This proves freeness and spanning, not merely torsionfreeness. [F1]

1.2 **The integral quotient.** By [F3] the kernel of $U_A^-\to V_A(\lambda)$ is exactly $\sum_i\sum_{s>\lambda(h_i)}U_A^-F_i^{(s)}$, so its quotient is the integral lattice $V_A(\lambda)$. Extending to $\mathbb Q(q)$ identifies it with $L(\lambda)$ by the field Serre presentation. The lattice and field module are not identified before that extension. [F3, algebra]

2.1 **The $q=1$ fibre.** With $R=\mathbb Q[q]_{(q-1)}$, the divided-word lattice satisfies $R\otimes_AV_A=V_R$, since each divided-power factorial is an $R$-unit. The local comparison [F2] identifies $V_R/(q-1)V_R$ with the classical simple integrable highest module. A fibre over a characteristic-zero field $k$ is its scalar extension, and [F4] transfers its labels back to the original datum. Thus the fibre identification applies to this actual integral lattice, and step 1.1 preserves every finite weight rank. [F2, F4, step 1.1, algebra]

3.1 **Character.** By [F5] the classical module has the Weyl–Kac character, which equals the finite Weyl character in finite type; since the weight dimensions of the fibre agree with those of the classical module by step 2.1, the specialized character is exactly this Weyl–Kac character. [F5, step 2.1]

4.1 **Conclusion.** The global basis gives finite free integral weight pieces; the exact based kernel gives their integral quotient presentation, and the ordinary-word local lattice identifies their characteristic-zero fibre and its Weyl–Kac character. The auxiliary regularity and inherited Choice hypotheses are those already stated in [F4] and [C1]. [step 1.1, step 1.2, step 2.1, step 3.1, F4, C1] ∎
