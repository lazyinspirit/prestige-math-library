---
id: def-drinfeld-hopf-pairing-between-positive-and-negative-quantum-halves
kind: definition
title: "The Drinfeld pairing between the positive and negative quantum halves"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-root-height-completion-for-weightwise-quasi-r-intertwiners, def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half, thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral, def-lusztig-divided-power-integral-form, lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions, thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra, lem-lusztig-and-kashiwara-normalizations-match-by-root-color]
justified_by: []
aliases: []
landmark: false
dependency_level: 9
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Masaki Kashiwara, On crystal bases of the q-analogue of universal enveloping algebras, Duke Mathematical Journal 63 (1991), 465–516"
      url: "https://webpages.math.luc.edu/~ptingley/oldseminars/QuantumGroupsSpring2011/Kashiwara91.pdf"
      locator: "§3.2, printed pp. 479–481: the pairing on the negative half and its relation to the coproduct conventions; §1.3 for the involution conventions."
    - title: "Antoine Lacabanne, Drinfeld Double of Quantum Groups, Tilting Modules and Z-Modular Data Associated to Complex Reflection Groups, arXiv:1807.00770v2"
      url: "https://arxiv.org/pdf/1807.00770v2"
      locator: "§1.5–1.7, printed pp. 6–10: the pairing on the two halves of the double, its properties (Proposition 1.7 and the displayed divided-power norm $(E_i^r,F_i^r)=q_i^{-r(r-1)/2}/[r]_{q_i}!(q_i-q_i^{-1})^r$), and the dual bases used for $\\Theta_\\mu$."
    - title: "George Lusztig, Introduction to Quantum Groups (Progress in Mathematics 110, Birkhauser, 1993; second printing 1994; author-hosted scan)"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "§§1.2.2–1.2.3 printed3/PDF12 and §§1.2.5–1.2.12 printed4–7/PDF13–16: full twisted half coproduct/form and bar; §4.1.2 printed35/PDF44: exact quasi-R coevaluation scalar. Full normalization transport is proved locally."
---

## Definition

Let $B_K$ be the normalized Kashiwara half form of [[thm-the-negative-half-bilinear-form-is-symmetric-nondegenerate-and-integral]] on $U_q^-$, and let $\iota:U_q^+\to U_q^-$ be the algebra isomorphism $E_i\mapsto F_i$ (equivalently, the library's signed Chevalley involution composed with the compensating degree sign, [[lem-quantum-serre-relations-are-stable-under-the-chevalley-involutions]]). For $x\in U_q^+$ of degree $\nu\in Q_+$ and $y\in U_q^-$ of degree $-\nu$ define
$$D(x,y):=d_\nu^{-1}B_K(\iota x,y),\qquad d_\nu:=\prod_i(q_i-q_i^{-1})^{\nu_i},$$
and set $D(x,y):=0$ when the degrees are not opposite. Then $D$ is homogeneous and bilinear, $D(E_i,F_j)=\delta_{ij}(q_i-q_i^{-1})^{-1}$, and
$$D(E_i^{(n)},F_i^{(n)})=\frac{q_i^{-n(n-1)/2}}{[n]_i!\,(q_i-q_i^{-1})^n},$$
by [[lem-lusztig-and-kashiwara-normalizations-match-by-root-color]], with $\iota(E_i^{(n)})=F_i^{(n)}$ and $q_i^{-n(n-1)/2}/[n]_i!=1/[n]_{q_i^2}!$ for the geometric factorial of that item. The pairing with generator value $1$ is the $B_K$-transport $B_K(\iota x,y)$ ([[def-the-lusztig-kashiwara-bilinear-form-on-the-negative-quantum-half]]); it is not this quasi-$R$/Drinfeld normalization. The completed normalized tensor of [[def-root-height-completion-for-weightwise-quasi-r-intertwiners]] uses the $D$-dual bases.

On the simple-root Borel extensions the toral normalization is $D(K_\nu,K_\mu)=q^{(\nu,\mu)}$ for $\nu,\mu\in\mathbb Z_{\ge0}I$ (the embedded simple-root toral directions), with mixed toral/root generator pairings $0$ and counit normalization $D(1,1)=1$; the Hopf adjunction identities use $\Delta$ on the negative Borel and $\Delta^{\mathrm{op}}$ on the positive Borel ([[thm-the-drinfeld-jimbo-formulas-define-a-hopf-algebra]]). No pairing on arbitrary extra toral directions of $P^\vee$ is asserted. The divided-power integral form constrained here is that of [[def-lusztig-divided-power-integral-form]]; no integrality of $D$ is claimed.

## Remarks

The sign of $\iota$ is fixed by $\iota(E_i)=F_i$: the alternative $\iota(E_i)=-F_i$ would change the generator value of $D$. The degree scalar $d_\nu$ is the reciprocal of the "generator value $1$" normalization and is exactly the color-degree factor of the normalization dictionary; this is why the $D$-coevaluation carries the coefficient $q_i-q_i^{-1}$ on the $i$-th axis.

