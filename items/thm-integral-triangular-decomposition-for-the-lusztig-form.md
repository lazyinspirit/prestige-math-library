---
id: thm-integral-triangular-decomposition-for-the-lusztig-form
kind: theorem
title: "Integral triangular decomposition and freeness of the Lusztig form"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-drinfeld-hopf-pairing-between-positive-and-negative-quantum-halves, def-lusztig-divided-power-integral-form, lem-divided-power-and-toral-quantum-binomial-reordering-identities, lem-quantum-pascal-recurrence-and-gaussian-integrality, lem-unmodified-integral-torus-has-a-quantum-binomial-basis, thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis, thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing, thm-the-highest-weight-crystal-triple-is-balanced, thm-triangular-decomposition-of-a-quantized-enveloping-algebra]
justified_by: []
aliases: []
landmark: false
dependency_level: 15
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Mathematical Journal 63 (1991), 465–516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§6.1, printed pp. 507–509 (PDF pp. 43–45): integral Z[q,q^-1] forms and integral crystal residue lattices; §7.1 Lemmas 7.1.1–7.1.2, printed pp. 509–511 (PDF pp. 45–47): balanced lifting for an arbitrary Z[q,q^-1]-submodule, without assuming its freeness; §§7.2–7.5, printed pp. 511–516 (PDF pp. 47–52): simultaneous integral global construction; §7.5 equations (7.5.5)–(7.5.6), printed p. 515 (PDF p. 51), prove a Z[q,q^-1] basis of the divided-power negative half; Lemma 7.5.2 and its concluding based-quotient argument, printed p. 516 (PDF p. 52), prove the corresponding basis of V_Z(lambda)."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "Context only: §23.2.2, printed p. 188, and §31.1, printed pp. 245–246, concern the modified algebra dot-U. They are not an unmodified toral or negative-half Z-basis proof. Actual negative-half integral basis proof: Kashiwara91 §7.5 (above); the unmodified torus is proved by the local quantum-binomial supplier."
    - title: "Math 263C Quantum Groups (Stanford, 2022), lecture slides 'Lusztig's quantum group. Tilting modules. The Fusion Category in Action'"
      url: "http://sporadic.stanford.edu/quantum/lecture16.pdf"
      locator: "Contextual integral-form/reordering exposition, attributed to Chari–Pressley §9.3. The actual integral freeness proof in this contract uses Kashiwara91 §§6–7 and the independently proved unmodified toral basis; the slides are not substituted for that proof."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§1, printed p. 6, display (1.7): the Drinfeld-Jimbo triangular decomposition $U_q(\\mathfrak g)\\cong U_q^-(\\mathfrak g)\\otimes U_q^0(\\mathfrak g)\\otimes U_q^+(\\mathfrak g)$ used in step 2."
---

## Statement

Assume the Axiom of Choice, inherited through the crystal/global-basis and generic/classical PBW-rank suppliers. Let $U_A$ be the Lusztig divided-power integral form of [[def-lusztig-divided-power-integral-form]], with its parts $U_A^-,U_A^0,U_A^+$ over $A=\mathbb Z[q,q^{-1}]$. Then:

(i) multiplication $U_A^-\otimes_AU_A^0\otimes_AU_A^+\to U_A$ is an isomorphism;

(ii) the two divided-power halves are free $A$-modules with finite free root components of the classical PBW ranks;

(iii) the unmodified torus has the $A$-basis $K_c\prod_iK_i^{\delta_i}T_{i,0,t_i}$ with $\delta_i\in\{0,1\}$ and $c$ running over a system of representatives of $P^\vee/\sum_i\mathbb Z(d_ih_i)$; hence $U_A$ is free, and the degree-$\beta$ component is $\bigoplus_{\alpha-\gamma=\beta}U_A^-[-\gamma]\otimes_AU_A^0\otimes_AU_A^+[\alpha]$;

(iv) unique coefficients refer to products of chosen basis elements, not to arbitrary sums of simple tensors.

## Facts & Assumptions

**Given:** The divided-power form $U_A\subseteq U_q(\mathfrak g)$ with its half and toral parts, the skew derivations of the halves, and the toral elements $K_h,T_{i,c,t}$ of [[def-lusztig-divided-power-integral-form]].

[F1] Divided-power identities ([[lem-divided-power-and-toral-quantum-binomial-reordering-identities]]): $E^{(a)}E^{(b)}=\binom{a+b}{a}_iE^{(a+b)}$ and $F^{(a)}F^{(b)}=\binom{a+b}{a}_iF^{(a+b)}$; the toral binomials reorder past $E_i,F_i$ by index shifts; and every element of $U_A$ is a finite $A$-linear combination of products $b_-ub_+$ with $b_-\in U_A^-$, $u\in U_A^0$, $b_+\in U_A^+$, i.e. multiplication from the tensor product is surjective.

[F2] Integral negative-half basis ([[thm-the-highest-weight-crystal-triple-is-balanced]], [[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]]): the lower global basis $G_\infty(\mathcal B(\infty))$ is an $A$-basis of $U_A^-$, and each finite root component $U_A^-[-\gamma]$ is a free $A$-module of rank $\dim_{\mathbb Q(q)}U_q^-[-\gamma]$. The positive half is carried to the negative half by the algebra isomorphism $\iota:E_i\mapsto F_i$ of [[def-drinfeld-hopf-pairing-between-positive-and-negative-quantum-halves]], so $U_A^+$ is free with finite free root components as well.

[F3] Unmodified integral torus ([[lem-unmodified-integral-torus-has-a-quantum-binomial-basis]], [[lem-quantum-pascal-recurrence-and-gaussian-integrality]]): the displayed family $K_c\prod_iK_i^{\delta_i}T_{i,0,t_i}$ is an $A$-basis of $U_A^0$, with Gaussian-integral coefficients and Laurent-extremal independence.

[F4] Field triangular decomposition ([[thm-triangular-decomposition-of-a-quantized-enveloping-algebra]], and the Drinfeld–Jimbo decomposition display (1.7) of Jeong–Kang–Kashiwara, §1, printed p. 6): the natural map $U_q^-\otimes_{\mathbb Q(q)}U_q^0\otimes_{\mathbb Q(q)}U_q^+\to U_q(\mathfrak g)$ is an isomorphism of $\mathbb Q(q)$-vector spaces, with homogeneous components of the stated shape.

[F5] Classical PBW ranks ([[thm-generic-quantum-serre-halves-have-classical-pbw-ranks-and-a-nondegenerate-hopf-pairing]]): the field dimension of each homogeneous component of the generic quantum half equals the classical PBW rank $\dim_{\mathbb C}U(\mathfrak n^\pm)[\pm\alpha]$; this identification carries that theorem's stated Choice hypothesis, in addition to the inherited crystal/global-basis use of [F2].

[C1] Choice: the Axiom of Choice is inherited through the crystal/global-basis suppliers of [F2] and the rank supplier [F5], as declared in [[def-axiom-of-choice]]; the explicit tensor, localization and toral-basis computations add no choice use.

## Proof

**Proof technique:** direct.

1.1 **Freeness of the factors.** By [F2] the negative half is a direct sum of free $A$-modules $U_A^-[-\gamma]$ of finite rank; by the transport $\iota$ the same holds for $U_A^+$; and by [F3] the unmodified torus $U_A^0$ has the displayed $A$-basis. Each factor is therefore a free $A$-module, and the half factors have finite free root components; the toral degree-zero component can have infinite rank. [F2, F3]

1.2 **Surjectivity of the multiplication map.** The spanning statement of [F1] says that every element of $U_A$ is a finite $A$-linear combination of products $b_-ub_+$; grouping the factors according to root degree exhibits $U_A$ as the image of $U_A^-\otimes_AU_A^0\otimes_AU_A^+\to U_A$, so the map is surjective. [F1]

2.1 **Injectivity by field decomposition and torsion-freeness.** Extending scalars along $A\hookrightarrow\mathbb Q(q)$ gives the field multiplication map, which is an isomorphism by [F4]. If $x$ lay in the kernel of the integral map, its image in $U_q^-\otimes U_q^0\otimes U_q^+$ would lie in the kernel of the field isomorphism after extension and hence would be $0$; but the source is a free, hence torsion-free, $A$-module, so the natural map from it to its $\mathbb Q(q)$-extension is injective, forcing $x=0$. Thus the multiplication map is an isomorphism, proving (i). [F4, step 1.1, step 1.2]

3.1 **Toral basis, freeness and the homogeneous form.** Statement (iii) is the combination of the toral basis [F3] with the factorization of step 2.1; since a tensor product of free modules is free, $U_A$ is free, and restricting the isomorphism to homogeneous components gives the displayed degree-$\beta$ decomposition, with $U_A^0$ contributing only degree $0$. Unique coefficients are those of the products of the chosen basis elements of the three factors, not of arbitrary sums of simple tensors, because the isomorphism is one of $A$-modules with the displayed direct-sum decomposition. [F3, step 2.1]

4.1 **Ranks and conclusion.** The ranks of the half components are their field dimensions by [F2]; by [F5], applied with its stated Choice hypothesis [C1], those dimensions equal the classical PBW ranks, proving (ii). Steps 1.1–3.1 prove (i), (iii) and (iv); no torsionfree-to-free conversion over the non-PID ring $A$ and no modified dot-$U$ basis was used, since freeness came from explicit bases. [F2, F5, step 3.1, C1] ∎
