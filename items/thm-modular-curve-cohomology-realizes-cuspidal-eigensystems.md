---
id: thm-modular-curve-cohomology-realizes-cuspidal-eigensystems
kind: theorem
title: "Modular-curve cohomology realizes cuspidal Hecke eigensystems"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - def-normalized-cuspidal-eigenform-over-gl2
  - def-full-level-modular-curve-moduli-problem-and-universal-elliptic-curve
  - def-constructible-l-adic-sheaf-on-a-scheme
  - def-compactly-supported-etale-cohomology
  - def-modular-curve-parabolic-etale-cohomology-for-eigenforms
  - def-ordinary-etale-cohomology-of-a-constructible-l-adic-sheaf
  - def-axiom-of-choice
forward_refs:
  - thm-full-level-modular-curve-system-has-compatible-parabolic-cohomology-and-hecke-action
  - thm-modular-curve-moduli-representability-compactification-and-good-reduction
  - thm-modular-curve-parabolic-etale-cohomology-finiteness-and-galois-continuity
  - thm-shimura-isomorphism-for-modular-curves-with-symmetric-power-local-systems
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Pierre Deligne, Formes modulaires et représentations ℓ-adiques"
      url: "https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf"
      locator: "§§2.10 and 3.10–3.11, full 20-page article; the Shimura comparison is stated in §2.10 and cited to Shimura."
    - title: "Fred Diamond and John Im, Modular Forms and Modular Curves"
      url: "https://wstein.org/edu/Fall2003/252/references/diamond-im/Diamond-Im_Modular_forms_and_modular_curves.pdf"
      locator: "Chapter 12 §12.2, scanned printed pp. 106–113; general-weight Eichler cohomology comparison and its cited inputs."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 10, full weight-two Eichler–Shimura discussion, printed pp. 115–127; it does not supply the all-weight symmetric-power proof."
---

## Statement

Assume AC. Let $N\ge1$, $k\ge2$, and let $f(z)=\sum_{n\ge1}a_n e^{2\pi inz}$ be a normalized cuspidal Hecke eigenform of weight $k$, level $\Gamma_0(N)$, and nebentypus $\chi$ over a number field $E$. Fix a prime $\ell$ and a field embedding $\iota_\ell:E\hookrightarrow\overline{\mathbb Q}_\ell$. For every integer $M\ge3$ divisible by $N$, let $Y(M)$ be the fine full-level-$M$ modular curve, let $\pi_M:\mathcal E_M\to Y(M)$ be its universal elliptic curve, and choose a proper compactification $Y(M)_{\overline{\mathbb Q}}\hookrightarrow X(M)_{\overline{\mathbb Q}}$ by cusps. Put $\mathcal V_{k-2,\ell,M}:=\operatorname{Sym}^{k-2}R^1(\pi_M)_*\mathbb Q_\ell$. The transition maps as $M$ varies give a direct system of parabolic cohomology groups, and the Hecke correspondences act on that system. Its simultaneous eigenspace with eigenvalues $\iota_\ell(a_n)$ contains a two-dimensional vector space $W_{f,\ell}$ over a finite extension of $\mathbb Q_\ell$; it is stable under $G_{\mathbb Q}$, its action is continuous, and it is unramified at every prime $p\nmid N\ell$.

## Statement references

[[def-normalized-cuspidal-eigenform-over-gl2]]

[[def-full-level-modular-curve-moduli-problem-and-universal-elliptic-curve]]

[[def-modular-curve-parabolic-etale-cohomology-for-eigenforms]]

[Deligne, *Formes modulaires et représentations ℓ-adiques*, §§2.10, 3.10–3.11](https://publications.ias.edu/sites/default/files/5_FormesModulaires.pdf)

[Diamond–Im, *Modular Forms and Modular Curves*, Chapter 12 §12.2](https://wstein.org/edu/Fall2003/252/references/diamond-im/Diamond-Im_Modular_forms_and_modular_curves.pdf)

[Milne, *Modular Functions and Modular Forms*, Chapter 10](https://www.jmilne.org/math/CourseNotes/MF.pdf)

## Facts & Assumptions

**Given:** AC; the normalized eigenform $f$ over $E$; a prime $\ell$; an embedding $\iota_\ell$; the directed system of full-level modular curves with level divisible by $N$, its universal curves, and its compactifications; and the fixed-compactification parabolic cohomology definition.

[A1] [[def-axiom-of-choice]]: AC is assumed by the global absolute-Galois-group convention used for $G_{\mathbb Q}$.

[F1] [[def-normalized-cuspidal-eigenform-over-gl2]]: $a_1=1$ and $T_nf=a_nf$ for every $n\ge1$, with $f$ cuspidal of weight $k\ge2$, level $\Gamma_0(N)$, and character $\chi$ over the specified number field $E$.

[F2] [[def-full-level-modular-curve-moduli-problem-and-universal-elliptic-curve]]: it defines the full-level-$M$ moduli problem and tautological curve; representability and compactification are not proved by the definition.

[F3] [[def-modular-curve-parabolic-etale-cohomology-for-eigenforms]]: parabolic cohomology is the image of $H_c^1(Y_{\overline{\mathbb Q}},\mathcal V)$ in $H^1(Y_{\overline{\mathbb Q}},\mathcal V)$ for the fixed compactification; the definition asserts no finiteness, comparison, or Galois-continuity result.

[F4] [[def-constructible-l-adic-sheaf-on-a-scheme]]: constructibility of the coefficient sheaf is a category condition and does not supply cohomological finiteness or smooth proper base change.

[L1] `thm-modular-curve-moduli-representability-compactification-and-good-reduction` is proposed to supply the level structure, compactification, universal family and its good reduction outside $N$. It is absent; small levels require a fine full-level cover, which is not supplied locally.

[L2] `thm-modular-curve-parabolic-etale-cohomology-finiteness-and-galois-continuity` is proposed to supply finite-dimensionality, compatibility across full levels and compactifications, the continuous $G_{\mathbb Q}$ action, and the unramified assertion on the cohomology group. It is absent. The batch-25 proper-base-change/finiteness theorem and compact-support independence theorem are current drafts with `proof: not-supplied`. The current derived étale category definition explicitly leaves compatibility of pullback, extension by zero, and proper pushforward to separate proofs.

[L3] `thm-shimura-isomorphism-for-modular-curves-with-symmetric-power-local-systems` is proposed to identify the $f$-eigenspace with the two-dimensional cuspidal cohomology summand in all weights $k\ge2$. It is absent. Deligne §2.10 states the comparison and cites Shimura; Diamond–Im §12.2 gives a proof route with external cohomological inputs; Milne Ch. 10 is only weight two.

[L4] The present statement already fixes the coefficient field $E$ and an embedding in its given data. The proof obligation for this stated scope does not require a universal algebraicity theorem for eigenforms with no specified coefficient field.

[L5] `thm-full-level-modular-curve-system-has-compatible-parabolic-cohomology-and-hecke-action` is proposed to supply the direct-system transition maps and Hecke actions used in the statement. It is absent; no compatibility across the level tower is claimed as proved.
