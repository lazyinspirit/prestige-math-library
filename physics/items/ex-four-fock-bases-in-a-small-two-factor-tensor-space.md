---
id: ex-four-fock-bases-in-a-small-two-factor-tensor-space
kind: example
title: "The four Fock bases in a small two-factor tensor space"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 25
deps:
  - def-dual-canonical-canonical-and-quasi-canonical-fock-bases
  - def-higher-level-wedge-tensor-fock-module
  - thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations
  - thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis
  - thm-parabolic-kl-polynomials-give-the-dual-canonical-transition-matrix
  - def-partition-young-diagram-and-conjugate-partition
  - thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule
  - thm-the-highest-weight-fock-submodule-has-the-qg-global-bases
  - thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan, Dual canonical bases and Kazhdan-Lusztig polynomials, J. Algebra 306 (2006) 17-46 (complete 29-page arXiv v2 article)"
      url: "https://arxiv.org/pdf/math/0509700"
      locator: "Section 4, formulas (4.4)-(4.7), Theorem 4 and Corollary 5 (printed pp. 11-13): the tensor-square bar $\\overline{v_i\\otimes v_j}$, the dual-canonical and canonical bases of $T^2(V_2)$ and the pairing identity $(L_\\alpha,L^*_\\beta)=\\delta_{\\alpha,\\beta}$; complete passage read."
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Sections 2.3 and 2.6 (printed pp. 8-9 and 13-16): the definitions of the four bases and the pairings (2.38)-(2.43); complete passage read."
---

## Example

Take $I=\{0\}$, $I^+=\{0,1\}$ and $\Lambda=2\Lambda_0$ in the conventions of
[[def-higher-level-wedge-tensor-fock-module]], so that
$F=V\otimes V$ has the four monomials $M_{00},M_{01},M_{10},M_{11}$ in the
source normalization of
[[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]].

In the mixed order $(M_{01},M_{10})$, the ordinary bar matrix is
$$B_\psi=\begin{pmatrix}1&s^{-1}-s\\0&1\end{pmatrix},$$
and both source monomial Gram matrices equal $S=B_\psi^{-1}$, i.e.
$S=\begin{pmatrix}1&s-s^{-1}\\0&1\end{pmatrix}$. All unchanged labels satisfy
$L=T=M$. The remaining vectors are
$$L_{10}=M_{10}-s\,M_{01},\qquad T_{10}=M_{10}+s^{-1}M_{01},\qquad P_{01}=M_{01}+s\,M_{10},\qquad P_{10}=M_{10},$$
and the reverse family has
$\widetilde L_{01}=\widetilde M_{01}-s\,\widetilde M_{10}$.

The transition and pairing matrices satisfy
$$\overline{P}^{\,t}S\,L=I,\qquad \widetilde{L}^{\,t}S\,T=I$$
on the four-dimensional space, the four whole families are pairwise different
over $\mathbb Q(s)$, and both $L$ and $T$ are ordinary-bar fixed, unlike the
general quasi-canonical family.

At $t=s^{-1}$ the highest-module form rescaling is
$$B_8(T_{10},T_{10})=1+t^2,\qquad D_{01}=\frac{T_{10}}{s+s^{-1}},\qquad G_{\mathrm{up}}=s\,D_{01}.$$

## Facts & Assumptions

**Given:** The rank-one Fock model $I^+=\{0,1\}$, $\Lambda=2\Lambda_0$, its four monomials in the mixed order $(M_{01},M_{10})$, the source bar $\psi$ and families $L,T,P$ of [[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]], the forms $\langle-,-\rangle$, $C$, $C_0$ and $B_8$, and the projection $\pi$ of [[thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule]].

[F1] Source bar and families ([[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]], [[def-higher-level-wedge-tensor-fock-module]]): the monomial basis and its weights; the triangular charts $d,p$; the delta pairings $\langle P_A,L_B\rangle=\delta_{AB}$, $C(\widetilde L_A,T_B)=\delta_{AB}$.

[F2] The normalized quasi-$R$ supplier [[thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique]] gives $\Theta_{\alpha_0}=(t-t^{-1})E_0\otimes F_0$; the tensor bar is supplied by [[thm-the-qg-tensor-product-bar-is-triangular-and-compatible-with-fock-truncations]], with $t=s^{-1}$. Its fixed-vector equation is $c=B_\psi\bar c$.

[F3] Highest constituent and rescaling ([[thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule]], [[thm-the-highest-weight-fock-submodule-has-the-qg-global-bases]]): the projection $\pi$, the source dual-canonical basis on $\mathrm{Std}^\Lambda$, and the weight rescaling $B_8=s^{-a}C_0$ with $G_{\mathrm{up}}(A)=s^{a}D_A$.

## Verification

**Proof technique:** direct.

1.1 **The bar matrix.** Each natural-factor bar fixes its two coordinate vectors. The only nonconstant quasi-$R$ term acting on this tensor square is $(s^{-1}-s)E_0\otimes F_0$; it takes $M_{10}$ to $(s^{-1}-s)M_{01}$ and kills the other three monomials. Higher terms vanish because $E_0^2=F_0^2=0$ on a natural factor. This gives the displayed $B_\psi$ in the mixed order $(M_{01},M_{10})$. [F2, algebra]

2.1 **The four families.** A vector $M_{10}+cM_{01}$ is bar fixed exactly when $c-\bar c=s^{-1}-s$. The two triangular charts give $c=-s$ for the $s\mathbb Z[s]$-chart and $c=s^{-1}$ for the $s^{-1}\mathbb Z[s^{-1}]$-chart, that is $L_{10}=M_{10}-sM_{01}$ and $T_{10}=M_{10}+s^{-1}M_{01}$. The quasi-canonical family is defined by the inverse transition matrix, giving $P_{01}=M_{01}+sM_{10}$ and $P_{10}=M_{10}$; the reverse reading gives $\widetilde L_{01}=\widetilde M_{01}-s\widetilde M_{10}$. Since the off-diagonal entries are $-s$, $s^{-1}$ and $s$, the four families are pairwise different over $\mathbb Q(s)$. [F1, step 1.1, algebra]

3.1 **The Gram matrices and delta identities.** The defining forms have labelled monomial Gram matrices equal to the inverse ordinary-bar matrix, so $S=B_\psi^{-1}=\begin{pmatrix}1&s-s^{-1}\\0&1\end{pmatrix}$ for both forms, as displayed. Substituting the coefficient matrices of step 2.1 and multiplying the resulting $4\times4$ matrices (which are the identity on the $00$- and $11$-labelled directions) gives $\overline{P}^{\,t}SL=I$ and $\widetilde{L}^{\,t}ST=I$ exactly; these are the delta identities $\langle P_A,L_B\rangle=\delta_{AB}$ and $C(\widetilde L_A,T_B)=\delta_{AB}$ of [F1]. [F1, step 2.1, algebra]

3.2 **The form rescaling.** The mixed-weight vector in the highest constituent is $T_{10}=F_0M_{00}$; its norm under the normalized bilinear form $C_0$ is $[2]_s=s+s^{-1}$, and by [F3] the library polarization gives $B_8(T_{10},T_{10})=s^{-1}[2]_s=1+t^2$ at $t=s^{-1}$. The projected dual-canonical vector is $D_{01}=\pi L_{01}=T_{10}/(s+s^{-1})$, and the library form-dual upper vector is its rescaled $G_{\mathrm{up}}=sD_{01}$, which checks the exact rescaling of [F3] without asserting that the source $D$-family itself is the library upper family. [F3, step 2.1, algebra]

4.1 **Conclusion.** In this four-dimensional model the ordinary bar matrix is $B_\psi$, both Gram matrices are $S=B_\psi^{-1}$, the displayed $L,T,P,\widetilde L$ vectors are the four distinct source families with the stated delta pairings, and the highest-component rescaling checks $B_8(T_{10},T_{10})=1+t^2$, $D_{01}=T_{10}/(s+s^{-1})$ and $G_{\mathrm{up}}=sD_{01}$. [step 1.1, step 2.1, step 3.1, step 3.2] ∎
