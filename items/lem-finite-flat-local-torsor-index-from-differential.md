---
id: lem-finite-flat-local-torsor-index-from-differential
kind: lemma
title: "Finite-flat local torsor index from an isogeny differential"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-smooth-affine-commutative-groups-have-etale-fppf-comparison
  - thm-galois-h1-of-smooth-connected-group-over-finite-field-vanishes
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
justified_by: []
proof_strategy: direct
axiom_use: "AC and DC are assumed for the supplied fppf and smooth-group cohomology interfaces."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, second edition"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "III §1, printed pp. 241–243, for the local-duality setting; the finite-field and Jacobian index calculation is reconstructed here."
verification: {}
---

## Statement

Assume AC and DC. Let $R$ be the ring of integers of a characteristic-zero complete discretely valued field with finite residue field $k$ of size $q$. Let $N$ be a commutative finite flat $R$-group, and let $0\to N\to H\xrightarrow{\phi}H'\to0$ be an fppf-exact sequence with $H,H'$ smooth affine commutative of finite presentation and geometrically connected fibres, and $\phi$ finite locally free. If $J$ is the determinant of the map of invariant differentials in integral bases, then $J\ne0$ and
$$\#H^1_{\mathrm{fppf}}(R,N)=\#N(R)\,q^{v_R(J)}.$$
The quotient $H'(R)/\phi H(R)$ represents this cohomology group.

## Facts & Assumptions

**Given:** Exactly the complete local ring, finite group and supplied smooth isogeny in the Statement.

[A1] The Axiom of Choice and Dependent Choice are assumed. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] The fppf cohomology of a smooth affine group over a Henselian DVR with finite residue field equals that of its special fibre in positive degree. [[thm-smooth-affine-commutative-groups-have-etale-fppf-comparison]]

[F2] A smooth connected finite-type group over a finite field has trivial first cohomology. [[thm-galois-h1-of-smooth-connected-group-over-finite-field-vanishes]]

[F3] Faithfully flat descent is effective for finite locally free modules and algebras. [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]

## Proof

**Proof technique:** compute the residue-point ratio and apply the constant Jacobian on small group charts.

1.1 The long exact fppf sequence and [F1]–[F2] give $H^1(R,H)=H^1(k,H_k)=0$, so $H^1(R,N)=H'(R)/\phi H(R)$. Since the characteristic-zero generic finite group is étale, the generic differential of $\phi$ is invertible; thus $J\ne0$. Smoothness and Hensel lifting make the reduction maps $H(R)\to H(k)$ and $H'(R)\to H'(k)$ surjective. [A1, F1, F2, given, algebra]

1.2 For any commutative finite $k$-group scheme $G$, its reduced subscheme is a finite étale subgroup: $k$ is perfect, so reduction commutes with products and the reduced coordinate algebra is finite separable. It maps isomorphically to the étale component quotient, giving $G=G^0\times G_{\mathrm{red}}$. A $G^0$-torsor is finite by fppf descent [F3] and geometrically connected after a trivializing extension; its reduced residue field is purely inseparable over $k$, hence is $k$, so the torsor has a $k$-point. Therefore $H^1(k,G)=H^1(k,G_{\mathrm{red}})$. For the finite étale group, the continuous Frobenius resolution gives $H^1(k,G_{\mathrm{red}})=\operatorname{coker}(F-1)$ on the finite geometric group, and $G(k)=\ker(F-1)$. A self-map of a finite group has kernel and cokernel of equal size, hence $\#H^1(k,G)=\#G(k)$. [F3, given, construct, algebra]

2.1 The exact fibre sequence and [F2] give $0\to N(k)\to H(k)\to H'(k)\to H^1(k,N)\to0$. Applying step 1.2 to $N_k$ shows $\#H(k)=\#H'(k)$. [F2, step 1.2, algebra]

3.1 Give $H(R)$ and $H'(R)$ the Haar measures induced by bases of their invariant top differentials. Every residue point has one smooth chart with measure $q^{-d}$, so step 2.1 shows the total measures are equal. To compute the image measure, choose a sufficiently deep congruence chart around the identity. In coordinates the isogeny has linear term $D$ with $\det D=J$ and higher terms integral. Choose $m$ so that the congruence subgroup meets the finite kernel only in the identity and multiplication by $D^{-1}$ makes the nonlinear part strictly contracting on $\pi^mR^d$; successive approximation then identifies the image of that ball with $D\pi^mR^d$. Elementary row and column operations over the DVR give its volume as $|J|_R$ times the source volume. Translation and invariance give the same factor on every coset of that congruence subgroup, so the image is open and the total pushforward counts each point exactly $\#N(R)$ times. Therefore $\mu_{H'}(\phi H(R))=|J|_R\mu_H(H(R))/\#N(R)$. [step 1.1, step 2.1, construct, algebra]

4.1 The finite index of the open image is the ratio of the equal total target measure to its image measure. Step 3.1 gives $[H'(R):\phi H(R)]=\#N(R)|J|_R^{-1}=\#N(R)q^{v_R(J)}$. Step 1.1 identifies this index with the asserted cohomology order. The trivial group and dimension zero have $J=1$ in empty coordinates and are included. [step 1.1, step 3.1, algebra] ∎
