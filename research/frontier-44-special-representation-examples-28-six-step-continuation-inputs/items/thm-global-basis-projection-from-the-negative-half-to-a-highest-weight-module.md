---
id: thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module
kind: theorem
title: "The based quotient: projection of the lower global basis to a highest weight module"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules, def-kashiwara-lattices-lambda-and-infinity, def-lower-global-basis-of-a-quantum-highest-weight-module, lem-crystal-operators-commute-with-highest-weight-projection-modulo-q, lem-negative-half-reversal-preserves-integral-and-crystal-lattices, lem-quantum-highest-weight-serre-quotient-is-integrable, lem-string-ideal-decomposition-of-the-integral-lattices, lem-string-ideal-triples-are-balanced, thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis, thm-integrable-quantum-highest-weight-module-exists-and-is-unique, thm-the-highest-weight-crystal-triple-is-balanced]
justified_by: []
aliases: []
landmark: false
dependency_level: 15
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Mathematical Journal 63 (1991), 465–516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§0, Theorem 5, printed p. 466 (the projection $(i)$–$(iv)$) and Lemma 7.5.2, printed p. 516 (PDF p. 52); §7.5, printed pp. 515–516."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "Remark 10.8(i), printed p. 59: $G_\\infty(b)v_\\lambda=G_\\lambda(\\pi_\\lambda(b))$; Proposition 7.34 and the final step of $Y(r)$, printed pp. 58–59; Lemma 10.7."
---

## Statement

Let $\lambda\in P^+$, let $\pi_\lambda:U_q^-\to V(\lambda)$, $\pi_\lambda(P)=Pv_\lambda$, and let $G_\infty(b)$, $G_\lambda(\beta)$ be the lower global bases of $U_A^-$ and $V_A(\lambda)=U_A^-v_\lambda$ of [[def-lower-global-basis-of-a-quantum-highest-weight-module]]. Then:

(i) $\pi_\lambda:U_A^-\to V_A(\lambda)$ is a based quotient over $A=\mathbb Z[q,q^{-1}]$: $\pi_\lambda(G_\infty(b))=0$ if its crystal image $\pi_\lambda(b)\in\mathcal B(\lambda)\cup\{0\}$ is $0$, and $\pi_\lambda(G_\infty(b))=G_\lambda(\pi_\lambda(b))$ otherwise; consequently the kernel of $\pi_\lambda$ on $U_A^-$ is the $A$-span of exactly the killed lower global elements, the surviving elements map bijectively onto the integral highest-module basis $G_\lambda(\mathcal B(\lambda))$, the module weight components are finite free over $A$, and the compatible zero/infinity chart and residue projections have the crystal compatibility of the completed grand loop, all for every symmetrizable datum with the explicit label and auxiliary-realization convention;

(ii) more precisely, the integral kernel is
$$\ker\bigl(\pi_\lambda|_{U_A^-}\bigr)=\sum_{i\in I}\sum_{s>\lambda(h_i)}U_A^-F_i^{(s)}=\sum_{i\in I}\bigl(U_A^-\cap U_q^-F_i^{\lambda(h_i)+1}\bigr),$$
so the integral highest-module presentation uses all divided right powers beyond each highest limit, not just an ordinary power with a nonunit factorial.

## Facts & Assumptions

**Given:** The balanced triples of [[thm-the-highest-weight-crystal-triple-is-balanced]] with lower global bases and the projection rule $G_\infty(b)\mapsto G_\lambda(\pi_\lambda(b))$ or $0$; the string ideals $I_{(i,n)}^A=U_A^-\cap F_i^nU_q^-$ of [[lem-string-ideal-decomposition-of-the-integral-lattices]] with their adapted global bases ([[lem-string-ideal-triples-are-balanced]]); the reversal anti-involution $\star$ ([[lem-negative-half-reversal-preserves-integral-and-crystal-lattices]]); the projection compatibility and lattice statements of [[lem-crystal-operators-commute-with-highest-weight-projection-modulo-q]] and [[def-kashiwara-lattices-lambda-and-infinity]]; and the field Serre kernel of [[thm-integrable-quantum-highest-weight-module-exists-and-is-unique]].

[F1] Based projection ([[thm-the-highest-weight-crystal-triple-is-balanced]]): $\pi_\lambda(G_\infty(b))=0$ exactly when $\pi_\lambda(b)=0$, and $=G_\lambda(\pi_\lambda(b))$ otherwise; $G_\infty(\mathcal B(\infty))$ is an $A$-basis of $U_A^-$ and $G_\lambda(\mathcal B(\lambda))$ is an $A$-basis of $V_A(\lambda)$; the surviving residues $\pi_\lambda(b)$ biject onto $\mathcal B(\lambda)$.

[F2] Saturated string ideals and reversal ([[lem-string-ideal-decomposition-of-the-integral-lattices]], [[lem-string-ideal-triples-are-balanced]], [[lem-negative-half-reversal-preserves-integral-and-crystal-lattices]]): the ideal $I_{(i,n)}^A=U_A^-\cap F_i^nU_q^-$ has the free adapted decomposition over the global basis; reversal preserves $U_A^-$, commutes with $\psi$, preserves the crystal lattice and maps $I_{(i,n)}^A$ onto the saturated right ideal
$$R_{(i,n)}^A:=U_A^-\cap U_q^-F_i^n=\sum_{s\ge n}U_A^-F_i^{(s)},$$
adapted to a signed subset $\pm G_\infty(\mathcal B_{(i,n)}^{\mathrm R})$ of one global basis: each $\star G_\infty(b)$ is bar fixed with integral residue of norm $1$, hence residue $\pm b'$, and balanced uniqueness gives $\star G_\infty(b)=\pm G_\infty(b')$.

[F3] Projection compatibility ([[lem-crystal-operators-commute-with-highest-weight-projection-modulo-q]], [[def-kashiwara-lattices-lambda-and-infinity]]): $\pi_\lambda(\mathcal L(\infty)_{-\alpha})=\mathcal L(\lambda)_{\lambda-\alpha}$, the map on residues is the crystal bijection onto $\mathcal B(\lambda)\cup\{0\}$, and the bar involution commutes with $\pi_\lambda$; the grand loop supplies these statements for every $\lambda\in P^+$.

[F4] Field Serre kernel ([[thm-integrable-quantum-highest-weight-module-exists-and-is-unique]], [[lem-quantum-highest-weight-serre-quotient-is-integrable]]): on $U_q^-$ the kernel of $\pi_\lambda$ is $\sum_iU_q^-F_i^{\lambda(h_i)+1}$, the sum of the singular-vector ideals at each simple root.

[C1] Choice: the Axiom of Choice is used only through the completed grand loop and the negative-half form suppliers of [F1] and [F3] ([[def-axiom-of-choice]]); the ideal, reversal and intersection computations below are choice-free.

## Proof

**Proof technique:** direct.

1.1 **The based quotient.** Since $G_\infty(\mathcal B(\infty))$ is an $A$-basis of $U_A^-$ and $\pi_\lambda$ is $A$-linear, the kernel of $\pi_\lambda$ on $U_A^-$ is the $A$-span of the basis elements mapped to $0$, and the surviving basis elements map onto $V_A(\lambda)$; by [F1] the killed elements are exactly those with $\pi_\lambda(b)=0$, the surviving images are exactly the $A$-basis $G_\lambda(\mathcal B(\lambda))$, and the correspondence is bijective on residues. The weight components of $V_A(\lambda)$ are finite free over $A$ because they have the finite basis $G_\lambda(\mathcal B(\lambda)_\mu)$, and the chart and residue projections are the compatible maps of [F3]. This proves (i). [F1, F3]

1.2 **The field kernel and its saturated ideals.** By [F4] the field kernel of $\pi_\lambda$ on $U_q^-$ is $\sum_iU_q^-F_i^{s_i}$ with $s_i:=\lambda(h_i)+1$. By [F2] each $U_q^-F_i^{s_i}$ is the field span of the signed global family of the saturated right ideal $R_{(i,s_i)}^A=U_A^-\cap U_q^-F_i^{s_i}$, and the field span of a sum of subspaces is the span of the union of their spanning subsets of the single global basis. Intersecting with the free $A$-lattice $U_A^-$ gives exactly the $A$-span of that union, i.e. $\ker(\pi_\lambda|_{U_A^-})=\sum_iR_{(i,s_i)}^A$. [F2, F4]

2.1 **The divided-power form of the kernel.** By [F2] again, $R_{(i,s)}^A=\sum_{t\ge s}U_A^-F_i^{(t)}$ for every $s$, since every element of $U_A^-\cap U_q^-F_i^{s}$ is an integral combination of products $uF_i^{(t)}$ with $t\ge s$ and conversely each $U_A^-F_i^{(t)}\subseteq U_A^-\cap U_q^-F_i^{s}$ for $t\ge s$. Substituting $s=s_i=\lambda(h_i)+1$ into step 1.2 gives $\ker(\pi_\lambda|_{U_A^-})=\sum_i\sum_{s>\lambda(h_i)}U_A^-F_i^{(s)}$, the asserted integral presentation by all divided right powers beyond each highest limit. [F2, step 1.2]

3.1 **Conclusion.** Step 1.1 proves the based quotient, kernel-description, basis bijection, finiteness and chart compatibility of (i); steps 1.2 and 2.1 prove the exact integral kernel of (ii), using the reversal symmetry between left string ideals and saturated right ideals and avoiding any unproved commutation of integral intersections with sums. The Choice use is confined to [C1]. [step 1.1, step 1.2, step 2.1, C1] ∎
