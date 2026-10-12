---
id: thm-highest-weight-components-in-a-tensor-product-crystal
kind: theorem
title: "Highest weight components in a tensor product crystal"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-crystal-tensor-product-weight-epsilon-and-phi-formulas, thm-crystal-basis-tensor-product-rule, lem-tensor-products-of-integrable-weight-modules-are-integrable, thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals, thm-the-highest-weight-crystal-b-lambda-exists, def-highest-weight-element-and-connected-highest-weight-crystal, def-crystal-graph-epsilon-phi-and-weight, def-axiom-of-choice, def-quantum-weight-module-and-integrability]
justified_by: []
aliases: []
landmark: false
dependency_level: 9
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Kyeonghoon Jeong, Seok-Jin Kang and Masaki Kashiwara, Crystal Bases for Quantum Generalized Kac-Moody Algebras, arXiv:math/0305390"
      url: "https://arxiv.org/pdf/math/0305390"
      locator: "§5, printed pp. 19-22, Theorem 5.2 and Example 5.1: the tensor rule and the resulting highest weight components of a tensor product."
    - title: "Sami Assaf, Anne Dranowski and Nicolle Gonzalez, Extremal tensor products of Demazure crystals, arXiv:2210.10236"
      url: "https://arxiv.org/pdf/2210.10236"
      locator: "§5: 'Thus every crystal decomposes as a direct sum of highest weight crystals', together with Theorem 5.1 comparing $B(\\lambda)\\otimes B(\\mu)$ with $V(\\lambda)\\otimes V(\\mu)$."
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Math. J. 63 (1991), no. 2, 465-516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§2.6, printed pp. 478-479, Theorem 3: decomposition of crystal bases of integrable modules into the canonical highest weight crystals."
---

## Statement

**Assume the axiom of choice** ([[def-axiom-of-choice]]), inherited through [[thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals]]. Let $M_1,M_2$ be integrable chosen $P$-graded type-one quantum weight modules with finite-dimensional label-weight spaces and weight sets contained in finite unions of cones, let $(L_1,B_1),(L_2,B_2)$ be crystal bases of $M_1,M_2$, and let $B_1\otimes B_2$ be the crystal of $M_1\otimes M_2$ ([[thm-crystal-basis-tensor-product-rule]], [[lem-tensor-products-of-integrable-weight-modules-are-integrable]]).

(a) **Highest vertices.** For $b=b_1\otimes b_2\in B_1\otimes B_2$ the following are equivalent: (i) $b$ is a highest weight element, i.e. $\tilde e_ib=0$ for every $i\in I$; (ii) $\varepsilon_i(b_1)=0$ and $\varepsilon_i(b_2)\le\langle h_i,wt(b_1)\rangle$ for every $i\in I$; (iii) $\varepsilon_i(b_1\otimes b_2)=0$ for every $i\in I$. In this case $wt(b)=wt(b_1)+wt(b_2)$ is dominant.

(b) **Generated components.** For every highest vertex $b\in B_1\otimes B_2$ of weight $\lambda$, the lowering-generated subcrystal $F(b)$ is a connected component of $B_1\otimes B_2$, is isomorphic as a crystal to the canonical $B(\lambda)=\mathcal B(\lambda)$ of [[thm-the-highest-weight-crystal-b-lambda-exists]], and $\lambda\in P^+$.

(c) **Decomposition.** $B_1\otimes B_2$ is the disjoint union of the subcrystals $F(b)$ over the highest weight elements $b\in B_1\otimes B_2$, each of which is a highest weight crystal in the sense of [[def-highest-weight-element-and-connected-highest-weight-crystal]]; the multiplicity of $B(\lambda)$ as a component equals the multiplicity of $V(\lambda)$ in the tensor product module $M_1\otimes M_2$.

No choice principle beyond the inherited one is used.

## Facts & Assumptions

**Given:** Integrable chosen $P$-graded type-one weight modules $M_1,M_2$ with finite-dimensional label-weight spaces and cone-bounded weight sets ([[def-quantum-weight-module-and-integrability]]), crystal bases $(L_1,B_1),(L_2,B_2)$ and the tensor product crystal $B_1\otimes B_2$ of [[thm-crystal-basis-tensor-product-rule]].

[F1] The tensor $\varepsilon/\varphi$ formulas ([[lem-crystal-tensor-product-weight-epsilon-and-phi-formulas]]): $\varepsilon_i(b_1\otimes b_2)=\max(\varepsilon_i(b_1),\varepsilon_i(b_2)-\langle h_i,wt(b_1)\rangle)$, with $\varepsilon_i,\varphi_i$ finite and nonnegative on every vertex.

[F2] Crystal graph conventions ([[def-crystal-graph-epsilon-phi-and-weight]]): $\tilde e_ib=0$ if and only if $\varepsilon_i(b)=0$, and $\varphi_i(b)=\varepsilon_i(b)+\langle h_i,wt(b)\rangle$ for all $b$.

[F3] The tensor rule theorem ([[thm-crystal-basis-tensor-product-rule]]) and the integrability lemma ([[lem-tensor-products-of-integrable-weight-modules-are-integrable]]): $(L_1\otimes L_2,B_1\otimes B_2)$ is a crystal basis of $M_1\otimes M_2$, and $M_1\otimes M_2$ is integrable with finite-dimensional label-weight spaces and cone-bounded weight set.

[F4] Uniqueness and decomposition ([[thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals]], under the inherited AC): any crystal basis of an integrable module $M$ with finite-dimensional label-weight spaces and cone-bounded weight set decomposes, through an isomorphism $\Phi:M\to\bigoplus_jV(\lambda_j)$, into the canonical components $\mathcal B(\lambda_j)$; each component has a unique highest weight element, of dominant weight $\lambda_j$, equal to the lowering-generated subcrystal of that element; and $\#\{j:\lambda_j=\lambda\}=[M:V(\lambda)]$.

[F5] The canonical component ([[thm-the-highest-weight-crystal-b-lambda-exists]]): $\mathcal B(\lambda)$ is a highest weight crystal of highest weight $\lambda$; every of its vertices is an iterated lowering image of its highest element, and it has no other highest weight element.

[F6] The definition of highest weight elements, $F(b)$ and highest weight crystals ([[def-highest-weight-element-and-connected-highest-weight-crystal]]).

[F7] The axiom of choice ([[def-axiom-of-choice]]), used only through [F4].

## Proof

**Proof technique:** direct.

1.1 The three highest-vertex conditions are equivalent. By [F1], $\tilde e_i(b_1\otimes b_2)\ne0$ if and only if $\varepsilon_i(b_1\otimes b_2)=\max(\varepsilon_i(b_1),\varepsilon_i(b_2)-\langle h_i,wt(b_1)\rangle)>0$, which happens exactly when $\varepsilon_i(b_1)>0$ or $\varepsilon_i(b_2)>\langle h_i,wt(b_1)\rangle$; hence (i), "$\tilde e_ib=0$ for all $i$", is equivalent to (ii), and by [F2] also to (iii). If these hold, then for every $i$ one has $\langle h_i,wt(b)\rangle=\varphi_i(b)-\varepsilon_i(b)=\varphi_i(b)\ge0$ because $\varepsilon_i(b)=0$ and $\varphi_i(b)$ is a finite nonnegative integer by [F1]; hence $wt(b)=wt(b_1)+wt(b_2)$ is dominant. This proves (a). [F1, F2, given]

2.1 Generated components are canonical. Let $b\in B_1\otimes B_2$ be a highest vertex of weight $\lambda$. Apply [F4] to $M=M_1\otimes M_2$ with crystal basis $(L_1\otimes L_2,B_1\otimes B_2)$, whose hypotheses hold by [F3]: $B_1\otimes B_2$ decomposes into components $\mathcal B(\lambda_j)$, and each component has a unique highest weight element $b_{\lambda_j}$ and equals $F(b_{\lambda_j})$. Since $b$ is a highest vertex, it is the highest element of its component, so that component is $\mathcal B(\lambda)$ with $\lambda=wt(b)$; consequently $F(b)$ is a connected component of $B_1\otimes B_2$ isomorphic to $\mathcal B(\lambda)$, and $\lambda\in P^+$ by (a) and [F4]. This proves (b). [step 1.1, F3, F4, F5]

3.1 The decomposition and multiplicities. By [F4] the components of $B_1\otimes B_2$ are exactly the $\mathcal B(\lambda_j)=\Phi^{-1}(\mathcal B(\lambda_j))$, indexed by the simple constituents $V(\lambda_j)$ of $M_1\otimes M_2$; by [F5] each has a unique highest weight element, namely its standard highest element, and no other highest weight elements exist in the crystal. Hence the highest weight elements of $B_1\otimes B_2$ are exactly those elements, and the disjoint union of the subcrystals $F(b)$ over them is the whole crystal, each $F(b)$ being a highest weight crystal in the sense of [F6]. The multiplicity of $B(\lambda)$ among the components equals $\#\{j:\lambda_j=\lambda\}=[M_1\otimes M_2:V(\lambda)]$ by the multiplicity clause of [F4]. The axiom of choice is used only through [F4], where it is already declared; no new nonconstructive selection occurs. [step 2.1, F4, F5, F6, F7] ∎
