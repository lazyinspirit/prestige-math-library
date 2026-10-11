---
id: lem-string-ideal-triples-are-balanced
kind: lemma
title: "The string-ideal triples are balanced: the induction step (Kashiwara 7.4.1 / JKK 10.4)"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-balanced-triple-and-globalization-map, def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules, def-kashiwara-lattices-lambda-and-infinity, lem-balanced-triple-linear-algebra-over-the-projective-line, lem-crystal-operators-commute-with-highest-weight-projection-modulo-q, lem-finite-support-regularization-of-quantum-label-weight-modules, lem-integral-crystal-residues-of-the-negative-half-represent-the-crystal-basis, lem-string-ideal-decomposition-of-the-integral-lattices, thm-crystal-basis-of-the-negative-half, thm-grand-loop-existence-of-highest-weight-crystal-bases]
justified_by: []
aliases: []
landmark: false
dependency_level: 11
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Mathematical Journal 63 (1991), 465–516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§7.4, printed pp. 513–515 (PDF pp. 49–51): Proposition 7.4.1 with its proof and Corollary 7.4.2."
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§10, printed pp. 55–57: Proposition 10.4, Corollary 10.6 and equation (10.2) with the surrounding estimates."
---

## Statement

Fix a root degree $\alpha$ of height $r$. Assume integral balancedness and global lifts in every degree of height $<r$ for both the negative half and all dominant highest modules, including based-quotient compatibility there and the negative-half string-ideal membership of each lower lift $G_\infty(b)$ whenever $b\in\tilde f_i^n\mathcal B_\infty$. Then for every $i\in I$ and $n\ge1$:

(i) the image string ideal $J_{(i,n)}^A$ in each highest module $V(\lambda)$, with its rational zero- and infinity-chart intersections, is integrally balanced in degree $\lambda-\alpha$, and its balanced $\mathbb Z$-intersection maps isomorphically to the $\mathbb Z$-span of $\mathcal B_\lambda\cap\tilde f_i^n\mathcal B_\lambda$ in that degree;

(ii) the half ideal $I_{(i,n)}^A$ is integrally balanced in degree $-\alpha$, with balanced intersection mapping isomorphically to the $\mathbb Z$-span of $\mathcal B_\infty\cap\tilde f_i^n\mathcal B_\infty$; and

(iii) their Laurent extensions are free $A$-modules with the adapted global lifts.

Freeness, the chart intersections and the eventual module saturation $J_{(i,n)}^A=V_A(\lambda)\cap F_i^nV(\lambda)$ are conclusions, not hypotheses.

## Facts & Assumptions

**Given:** The height-$r$ induction setting, the string ideals $I_{(i,n)}^A\subseteq U_A^-$ and $J_{(i,n)}^A\subseteq V_A(\lambda)$ of [[lem-string-ideal-decomposition-of-the-integral-lattices]], the chart data of [[def-balanced-triple-and-globalization-map]] and [[def-integral-residue-lattices-of-the-negative-half-and-highest-weight-modules]].

[F1] Chart algebra ([[lem-balanced-triple-linear-algebra-over-the-projective-line]]): the integral chart-extension lemma (generation criterion and relative criterion) turns a finite free simultaneous integral residue basis with injective chart images into balancedness, free Laurent extensions and adapted bases.

[F2] String-ideal structure ([[lem-string-ideal-decomposition-of-the-integral-lattices]]): $I_{(i,n)}^A=\bigoplus_{l\ge n}F_i^{(l)}(\ker e_i'\cap U_A^-)$, the boundary generation identity $(M_A)_\mu=\sum_{k\ge n}F_i^{(k)}(M_A)_{\mu+k\alpha_i}$ for $\langle h_i,\mu\rangle=-n\le-1$, and the integral residue of $I_{(i,n)}^A\cap\mathcal L(\infty)$ as the free $\mathbb Z$-span of $\mathcal B_\infty\cap\tilde f_i^n\mathcal B_\infty$.

[F3] Lower-height hypotheses: for every degree of height $<r$, the triples of the half and of the highest modules are integrally balanced with global lifts $G_\infty(b),G_\lambda(b)$; the based-quotient compatibility holds there; and $G_\infty(b)\in I_{(i,1)}^A$ whenever $\tilde e_ib\ne0$.

[F4] Grand loop and projection ([[thm-grand-loop-existence-of-highest-weight-crystal-bases]], [[lem-crystal-operators-commute-with-highest-weight-projection-modulo-q]], [[def-kashiwara-lattices-lambda-and-infinity]]): $\pi_\lambda$ carries $\mathcal L(\infty)$ onto $\mathcal L(\lambda)$, commuting with lowering modulo $q$ on all residues and with raising on surviving residues, and the completed crystal theorem supplies the rational crystal structures.

[F5] Auxiliary regular datum and half transport ([[lem-finite-support-regularization-of-quantum-label-weight-modules]], [[thm-crystal-basis-of-the-negative-half]]): the auxiliary primitive-coroot datum admits dominant labels with arbitrarily large simple-coroot coordinates. For such a label, in the selected degree $-\alpha$ the highest-weight projection has zero kernel and identifies the field components, the integral-form components and the string-ideal components with their degree-$\lambda-\alpha$ images. The zero charts are identified by the large-weight projection calculation of [[thm-grand-loop-existence-of-highest-weight-crystal-bases]], Proof 3.2 and 5.1; bar gives the infinity-chart identification. No global field isomorphism or vanishing of the quantum Serre relations is asserted.

[C1] Choice: the Axiom of Choice is used only through the supplied grand-loop and crystal-basis results ([[def-axiom-of-choice]]); no additional selection is made here.

## Proof

**Proof technique:** induction.

1.1 **Descending setup and the extension engine.** Fix the degree $\lambda-\alpha$ of height $r$ and work by descending induction on $n\ge1$: for $n$ strictly larger than the height of the degree, $J_{(i,n)}^A=0=I_{(i,n)}^A$ is trivially balanced, so assume $J_{(i,n+1)}^A$ balanced with its adapted basis. The chart-extension engine [F1], in the relative form with $N=J_{(i,n+1)}^A$, will produce the balancedness and basis statements as soon as a finite free module $F$ with the two injective chart images and the generation property is exhibited. [F1, F2]

1.2 **The boundary regime.** Put $\mu=\lambda-\alpha$ and $n_0=-\mu(h_i)$. When $n_0\ge1$, [F2] gives $J_{(i,n_0)}^A{}_\mu=V_A(\lambda)_\mu$. For $1\le n<n_0$, both $J_{(i,n)}^A{}_\mu$ and its field string space equal the corresponding objects at $n_0$, since every admissible position at $\mu$ is at least $n_0$. Thus, after proving balancedness at $n_0$ by the next steps, these smaller $n$ inherit it. It suffices to perform the relative induction for $n\ge1$ with $n+\mu(h_i)\ge0$, including equality. [F2, algebra]

1.3 **Decomposition of the next ideal.** From this point assume $n+\mu(h_i)\ge0$. By definition $J_{(i,n)}^A=F_i^{(n)}V_A(\lambda)_{\mu+n\alpha_i}+J_{(i,n+1)}^A$, and the first summand is generated by the images $\varphi_b:=F_i^{(n)}G_\infty(b)v_\lambda$ for those $b\in\mathcal B_\infty$ of degree $-\alpha+n\alpha_i$ with $\tilde e_ib=0$ and $\pi_\lambda(b)\ne0$; the remaining generators with $\tilde e_ib\ne0$ have $G_\infty(b)\in I_{(i,1)}^A$ by [F3], so their $F_i^{(n)}$-multiples are integral Gaussian multiples and lie in $J_{(i,n+1)}^A$ ([[def-lusztig-divided-power-integral-form]]). [F2, F3, algebra]

1.4 **Simultaneous quotient lifts.** In the half decomposition the projection to position zero is $P_i=1-\tilde f_i\tilde e_i$, so it preserves $\mathcal L(\infty)$ by [F4]. For a lower-height global lift $G_\infty(b)$ with $\tilde e_ib=0$, its primitive component $P_iG_\infty(b)$ has residue $b$. Therefore $F_i^{(n)}P_iG_\infty(b)=\tilde f_i^nP_iG_\infty(b)$ lies in the zero lattice, with residue $\tilde f_i^nb$. The remaining integral string components, after multiplication by $F_i^{(n)}$, lie in $I_{(i,n+1)}^A$ by [F2]. Projection gives $\varphi_b\in\mathcal L(\lambda)+J_{(i,n+1)}^A$. Since $\varphi_b$ is bar fixed and the next ideal is bar stable, it also belongs to $\psi(\mathcal L(\lambda))+J_{(i,n+1)}^A$. These are quotient-chart memberships; membership in the two charts themselves is not presumed. [F2, F3, F4]

2.1 **The new residue classes and injections.** The condition $n+\mu(h_i)\ge0$ makes the module string at every surviving top class have length at least $n$, so $\tilde f_i^n\pi_\lambda(b)$ is nonzero and sits at exactly position $n$; these classes biject onto $(\mathcal B_\lambda\cap\tilde f_i^n\mathcal B_\lambda)\setminus\tilde f_i^{n+1}\mathcal B_\lambda$ by the completed crystal partial inverses and the lower-degree based quotient. By the descending balancedness of $J_{(i,n+1)}^A$, its rational zero-residue has basis the higher positions, so the finite free $\mathbb Z$-module $F=\bigoplus_b\mathbb Z\varphi_b$ maps injectively into $(L_0+J_{(i,n+1)})/(qL_0+\mathbb QJ_{(i,n+1)})$; the infinity injection is its bar image under step 1.4. [F1, F4, step 1.4]

3.1 **Balancedness of the module ideal.** Applying the relative chart-extension criterion [F1] to $M=J_{(i,n)}^A$, $N=J_{(i,n+1)}^A$ and $F$ as in step 2.1 proves integral balancedness of $J_{(i,n)}^A$ in degree $\mu$, the exact integral residue sequence, and the $\mathbb Z$-basis consisting of the new $n$-positions together with all higher positions; finite $A$-freeness of the Laurent extension follows as a conclusion. This proves (i) and the module part of (iii). [F1, step 2.1]

4.1 **The half ideal.** For the negative half, choose the auxiliary explicit regular dominant datum of [F5] with all coordinates large compared with the height-$r$ degree; take $\lambda(h_j)\ge r$ for every $j$, large enough also for the chart isomorphism of [F5]. The highest-weight kernel is generated by singular vectors of degrees $(\lambda(h_j)+1)\alpha_j$, whose heights exceed $r$ (the calculation in [F5]); thus its component at $-\alpha$ vanishes. In this degree, $\pi_\lambda$ identifies the field spaces and sends $(U_A^-)[-\alpha]$ onto $V_A(\lambda)_{\lambda-\alpha}$ and $(I_{(i,n)}^A)[-\alpha]$ onto $(J_{(i,n)}^A)_{\lambda-\alpha}$ by their defining images. It identifies the rational charts and commutes with bar. Transporting the already-proved balanced module triple and its signed-free residue basis of step 3.1 back along this isomorphism proves the half statements (ii) and the half part of (iii), with the residue $\mathbb Z$-span of $\mathcal B_\infty\cap\tilde f_i^n\mathcal B_\infty$ from [F2]. No global half basis and no saturation equality was assumed. [F2, F5, step 3.1]

5.1 **Conclusion.** Steps 1.1–1.2 reduce the problem and dispose of the nonpositive-string regime; steps 1.3–3.1 prove the module balancedness, residue basis and freeness; step 4.1 transports the result to the half; thus (i)–(iii) hold in degree $\alpha$ under the stated height-$<r$ hypotheses, and the saturation identification remains a conclusion of the completed construction. [step 1.1, step 1.2, step 1.3, step 1.4, step 2.1, step 3.1, step 4.1] ∎
