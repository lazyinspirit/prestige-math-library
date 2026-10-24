---
id: lem-qftx-n1-chiral-superspace-identities
kind: lemma
title: Chiral-coordinate solution and supersymmetry covariance
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-qftx-n1-chiral-superfield
  - def-qftx-superspace-grassmann-algebra
  - lem-qftx-grassmann-coefficient-calculus
  - def-qftx-super-poincare-algebra-4d
dependency_roles:
  def-qftx-n1-chiral-superfield: mathematical-premise
  def-qftx-superspace-grassmann-algebra: mathematical-premise
  lem-qftx-grassmann-coefficient-calculus: mathematical-premise
  def-qftx-super-poincare-algebra-4d: mathematical-premise
dependency_level: 3
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Stephen P. Martin, A Supersymmetry Primer, version 7"
      url: "https://arxiv.org/pdf/hep-ph/9709356v7"
      locator: "§§4.2–4.4, printed pp. 33–42, chiral covariant derivative, chiral coordinates and component expansion."
    - title: "S. J. Gates Jr., M. T. Grisaru, M. Roček and W. Siegel, Superspace, or One Thousand and One Lessons in Supersymmetry"
      url: "https://arxiv.org/pdf/hep-th/0108200"
      locator: "§3.4, printed pp. 83–85, derivative algebra; §§3.5–3.6, printed pp. 89–96, chiral-coordinate representation and components."
verification:
  precheck: pending
---

## Statement

For the smooth finite Grassmann-valued superspace and left-derivative conventions in the chiral-superfield definition, the covariant derivatives obey $\{D_\alpha,D_\beta\}=0$, $\{\bar D_{\dot\alpha},\bar D_{\dot\beta}\}=0$, and $\{D_\alpha,\bar D_{\dot\beta}\}=-2i\sigma^\mu_{\alpha\dot\beta}\partial_\mu$, where $D_\alpha=\partial^L_{\theta^\alpha}+i\sigma^\mu_{\alpha\dot\gamma}\bar\theta^{\dot\gamma}\partial_\mu$ and $\bar D_{\dot\beta}$ is as defined there. The kernel of both $\bar D_{\dot\alpha}$ consists exactly of the fields independent of $\bar\theta$ when written in the nilpotently shifted coordinate $y^\mu=x^\mu+i\theta^\alpha\sigma^\mu_{\alpha\dot\alpha}\bar\theta^{\dot\alpha}$; hence every chiral field has the unique four-component expansion stated there. The supercharges $Q_\alpha,\bar Q_{\dot\alpha}$ anticommute with each $\bar D_{\dot\beta}$, so the defined supersymmetry transformation preserves chirality and induces a unique smooth component transformation.

## Statement references

[Martin, §§4.2–4.4](https://arxiv.org/pdf/hep-ph/9709356v7).

[Gates et al., §§3.4 and 3.6](https://arxiv.org/pdf/hep-th/0108200).

Four-dimensional N=1 chiral superfield on flat superspace: [[def-qftx-n1-chiral-superfield]].

Four-dimensional N=1 superspace Grassmann algebra and Berezin integration: [[def-qftx-superspace-grassmann-algebra]].

## Facts & Assumptions

**Given:** Smooth coefficient functions in $\mathscr S$, the ordered four-generator Grassmann algebra, and the operators and shifted coordinate in the chiral-superfield definition.

[F1] [[def-qftx-n1-chiral-superfield]]: $\mathscr S=C^\infty(\mathbb R^{1,3},\mathcal A\otimes\Lambda_4)$, the left derivatives remove the specified generator with the ordered sign, and $y=x+i\theta\sigma\bar\theta$ uses a finite Taylor substitution.

[F2] [[lem-qftx-grassmann-coefficient-calculus]]: the four left Grassmann derivatives are odd derivations and anticommute on the finite exterior algebra.

[F3] [[def-qftx-super-poincare-algebra-4d]]: $\sigma^\mu_{\alpha\dot\alpha}$ are fixed numerical matrices and commute with all coefficient variables and spacetime derivatives.

## Proof


**Given:** [F1]–[F3], with all spacetime derivatives acting on smooth coefficient functions.

1.1 The left derivatives with respect to distinct odd generators anticommute by [F2]; each $\partial_\mu$ commutes with them and with every other $\partial_\nu$ because the coefficient functions are smooth. Expanding the displayed formulas for $D$ and $\bar D$, the only nonzero mixed terms in $\{D_\alpha,\bar D_{\dot\beta}\}$ are $\{\partial^L_{\theta^\alpha},-i\theta^\gamma\sigma^\mu_{\gamma\dot\beta}\partial_\mu\}=-i\sigma^\mu_{\alpha\dot\beta}\partial_\mu$ and $\{i\sigma^\mu_{\alpha\dot\gamma}\bar\theta^{\dot\gamma}\partial_\mu,-\partial^L_{\bar\theta^{\dot\beta}}\}=-i\sigma^\mu_{\alpha\dot\beta}\partial_\mu$. Their sum is the stated mixed anticommutator. In each same-type anticommutator, the derivative-only terms vanish by [F2], the terms with one coordinate and one derivative cancel or are zero because the differentiated coordinate is of the other type, and the products of two identical-type odd coordinates vanish after symmetrization. Thus both same-type anticommutators are zero. [F1, F2, F3, algebra]

2.1 With $y=x+i\theta\sigma\bar\theta$, the left derivative gives $\partial^L_{\bar\theta^{\dot\alpha}}y^\mu=-i\theta^\beta\sigma^\mu_{\beta\dot\alpha}$: the minus sign comes from differentiating the rightmost odd factor past the left odd $\theta^\beta$. The finite Taylor definition and ordinary algebra therefore give, on functions expressed in $(y,\theta,\bar\theta)$, $\partial^L_{\bar\theta^{\dot\alpha}}|_x=\partial^L_{\bar\theta^{\dot\alpha}}|_y-i\theta^\beta\sigma^\mu_{\beta\dot\alpha}\partial_{y^\mu}$ and $\partial_{x^\mu}=\partial_{y^\mu}$. Substitution into $\bar D$ cancels the two $\theta\sigma\partial_y$ terms, leaving $\bar D_{\dot\alpha}=-\partial^L_{\bar\theta^{\dot\alpha}}|_y$. [F1, F2, step 1.1, algebra]

2.2 Direct expansion of $Q_\alpha$ against $\bar D_{\dot\beta}$ gives two opposite terms: $\{\partial^L_{\theta^\alpha},-i\theta^\gamma\sigma^\mu_{\gamma\dot\beta}\partial_\mu\}=-i\sigma^\mu_{\alpha\dot\beta}\partial_\mu$ and $\{-i\sigma^\mu_{\alpha\dot\gamma}\bar\theta^{\dot\gamma}\partial_\mu,-\partial^L_{\bar\theta^{\dot\beta}}\}=+i\sigma^\mu_{\alpha\dot\beta}\partial_\mu$, so $\{Q_\alpha,\bar D_{\dot\beta}\}=0$. All other terms vanish by the same independent-generator and odd-square identities. The two barred operators $\bar Q_{\dot\alpha}$ and $\bar D_{\dot\beta}$ also anticommute: their barred derivative parts anticommute, their $\theta\partial_x$ parts anticommute, and each barred derivative anticommutes with each $\theta$ factor because it differentiates a different generator. Therefore $\bar D_{\dot\beta}(\delta_{\epsilon,\bar\epsilon}\Phi)=0$ whenever $\bar D_{\dot\beta}\Phi=0$, accounting for the odd parameter crossing the odd derivative. [F1, F2, F3, step 1.1, algebra]

3.1 Expand a function in the unique ordered basis of $\Lambda_4$ with coefficients in $C^\infty(\mathbb R^{1,3},\mathcal A)$. In $(y,\theta,\bar\theta)$ coordinates, $\bar D_{\dot\alpha}\Phi=0$ for both dotted indices means both left derivatives in the barred generators vanish. For a fixed generator, distinct basis monomials containing it map under its derivative to distinct basis monomials not containing it, with coefficients $+1$ or $-1$; hence its derivative has zero kernel exactly on the span of monomials not containing it. Applying this to both barred generators shows $\Phi$ is independent of $\bar\theta$. The remaining ordered basis is $1,\theta^1,\theta^2,\theta^1\theta^2$, so its coefficients are unique and give the four displayed component functions and parities. [F1, F2, step 2.1, algebra]

4.1 The transformed field is smooth because it is a finite linear combination of spacetime derivatives of smooth coefficient functions, and it is chiral by step 2.2. Applying the unique basis expansion in step 3.1 to this transformed field yields one and only one tuple of four smooth components. This is the component transformation defined in the chiral-superfield definition; no field equation or quantum operator-domain assertion is involved. [F1, step 3.1, step 2.2, algebra] ∎
