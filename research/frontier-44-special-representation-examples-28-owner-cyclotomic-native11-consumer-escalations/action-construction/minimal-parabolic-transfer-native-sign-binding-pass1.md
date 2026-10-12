# Normative source-to-native sign binding for the action and transfer constructions

Same first pass, author `/root/repair_klr_global_basis/cyclotomic_action_construction`, run `frontier-44-special-representation-examples-28`. Earlier research files are preserved as authentic source-convention constructions. This new binding corrects their previous false claim that chronological right append identified source and native crossings without a sign. Chronological order does not remove the crossing sign.

The actual native10 KLR Definition is the record `def-quiver-hecke-klr-algebra-for-a-symmetrizable-cartan-datum` in `research/frontier-44-special-representation-examples-28-batch-10.pages.json`. Its clause(6) has τ_a x_a−x_{a+1}τ_a=+1 and τ_a x_{a+1}−x_aτ_a=−1 at equal colors. Its clause(7) uses denominator x_{a+2}−x_a, opposite to KK's source braid correction. All constructions now require the following dictionary.

## Graded algebra and ideals

Write κ for KK/Rouquier/Webster source crossings and τ for native crossings. Let θ fix all dots, idempotents and Q coefficients and send

$$\theta(\kappa_a)=-\tau_a$$

for **all color pairs**. The source mixed constants change to the native constants. Quadratic relations are unchanged because they have two crossing signs; the braid defect changes sign because it has three. Far commutativity, idempotent transport, grading and first-strand powers or arbitrary monic a_j(x_1) ideals are unchanged. Thus θ is a graded algebra isomorphism and identifies each source cyclotomic quotient with the corresponding native quotient. For a fixed reduced word, θ(κ_w)=(-1)^{ℓ(w)}τ_w. No alteration of Q, t_ij, weights, fields or cyclotomic polynomials is made.

## Two coherent map naming choices

Choice A, preferred for importing the trace/model notes: keep κ as an explicitly defined native abbreviation κ=−τ. Every source formula remains literal after replacing its symbol κ by that abbreviation. In particular the same-end crossing is **−aτ_n b**, the equal-color g is (y−x)+(y−x)²τ, and the source recurrence has its plus sign. Source canonical rho is built from this negative native crossing. It is still a genuine degree-zero crossing mate of κ in the native category.

Choice B, if the owner wants P,Q and the crossing written using the positive native τ: define

$$P_n(u)=u\,a(x_1)\tau_1\cdots\tau_n,$$

$$g_a^{\mathrm n}e(\omega)=\begin{cases}\tau_ae(\omega)&\omega_a\ne\omega_{a+1},\\[(x_a-x_{a+1})-(x_a-x_{a+1})^2\tau_a]e(\omega)&\omega_a=\omega_{a+1},\end{cases}\qquad Q_n(v)=v g_n^{\mathrm n}\cdots g_1^{\mathrm n}.$$

These satisfy θ(P_s)=(-1)^nP_n and θ(Q_s)=(-1)^nQ_n, because g_a^n=−θ(g_a^s) in both color cases. Therefore Q_nP_n=a(t), P_nQ_n=b(t), and all injectivity/projectivity arguments remain exactly true. The raw source g with κ replaced by positive τ would not be an intertwiner and must never be used. The g_a^n dot and braid-intertwining identities follow by θ, with the two g minus signs canceling on both sides of its braid identity.

The degrees are unchanged: deg P_n=s=(α_i|2Λ−β), deg Q_n=−(α_i|β)+2δp, and the common product has t-degree λ_i−⟨h_i,β⟩+2p. Its leading scalar c=∏_{j≠i}t_{i,j;−a_ij,0}^{β_j} is unchanged. All monic torsion and finite-dimensional/string arguments transport, including arbitrary characteristic two where the signs coincide.

## Exact coefficient, recurrence and snake-map signs in Choice B

Let F_n(z)=aτ_nb, E(z)=ab, and B_n be the coefficient of τ_n…τ_1 in the opposite-end PBW sequence. The source maps transport as θ(F_s)=−F_n and θ(B_s)=(-1)^n B_n. The ordinary unit η and multiplication counit ε are unchanged. The source same-end cokernel projection C is unchanged, because the images of F_n and −F_n coincide and the polynomial complement is identical. Since both P and B have the same (-1)^n factor,

$$\mathcal A_n B_n=C P_n,\qquad\mathcal A_n=\theta(\mathcal A_s).$$

The central polynomials S,W, scalar γ=((−1)^p c)^{-1}, and φ_k=mathcal A(t^k) are unchanged. With y_k^n=τ_n…τ_1x_1^k, define P_n(y_k^n)=F_n(ψ_k^n)+φ_k. Then

$$\psi_k^{\mathrm n}=-\theta(\psi_k^{\mathrm s}),\qquad F_n(z)t=F_n(z(x_n\otimes1))-E(z),$$

and the actual native recurrence is

$$\psi_{k+1}^{\mathrm n}=\psi_k^{\mathrm n}(x_n\otimes1),\qquad\phi_{k+1}=t\phi_k-E(\psi_k^{\mathrm n}).$$

Hence for h=−r≤0, E(ψ_k^n)=0 for k<r−1 and E(ψ_{r−1}^n)=−γ^{-1}. The negative terminal counit matrix has anti-diagonal **−γ^{-1}**, still a unit. Its finite triangular inverse and the stated graded commutator isomorphisms remain valid. The native connecting map t^j↦G(ψ_j^n) is the negative of the transported source connecting map. The positive polynomial remainders and every summand degree are unchanged.

The comparison square uses P_n at β and P'_n at β−i, with F_n on the middle vertical arrow. The latter P' has n−1 crossings. Transporting the source square gives equal factor (-1)^n on P L and F P', so the native square is commutative. This verifies that no hidden mismatch remains between the two comparison rows.

## Canonical rho and second-map formulas

Transported source rho uses σ_s=−F_n. Thus its positive physical-weight map is (−F_n,Σt^kη) and its negative map is (−F_n,(ε x^k)_k). Both are the exact rho maps used by the trace model and the endpoint comparison, now interpreted in native terms. The positive-native-crossing versions (F_n,Σt^kη) and (F_n,(εx^k)_k) differ respectively by multiplying the FE input or the EF output by−1. They are also isomorphisms, but inverse formulas and candidate second-map definitions must be adjusted together.

If all second maps are **transported source maps**, their triangles remain proven under θ. For clarity, in Rouquier weight m=−h their expression through a rho written with positive native F_n is:

* m<0, second counit on HG: (-1)^{m+1} times the last identity coefficient of the positive physical rho inverse; unchanged from the source.
* m≥0, second counit c is the unique map whose class after precomposition by F_n is (-1)^m ε x^m, rather than the source (-1)^{m+1}ε x^m, because σ_s=−F_n.
* m>0, second unit on GH: (-1)^{m+1} times the inverse last counit-component inclusion; unchanged from the source.
* m≤0, second unit u has class after postcomposition by F_n equal to (-1)^{m+1}Hx^{−m}η, rather than the source (-1)^m Hx^{−m}η.

No sign-free candidate formula is asserted at the boundary m=0; the quotient formulas above supply it. Equivalently retain Choice A and all four source formulas without these rewrites. The normalized H=Eproj, m=−h dictionary and adjunction shifts are unchanged. Source κ-nil-Hecke actions in the full normal-form proof become native −τ actions; every matrix/basis determinant gains only the explicitly transported unit signs. Primitive idempotents are unchanged:

$$(-1)^{\ell(w_0)}\kappa_{w_0}\,\mathrm{staircase}\xmapsto{\theta}\tau_{w_0}\,\mathrm{staircase}.$$

## Minimal-parabolic polynomial operators and transfer

All polynomial-model faithfulness assertions in `minimal-parabolic-transfer-normalform-and-boundary-pass1.md` are to be read with Choice A or with the corresponding substitution on **each** operator. A source unequal-color crossing π or multiplication by Q becomes the native generator **−π** or multiplication by **−Q**. Their quadratic composite is still Q. The mixed residue single-crossing cap formula has one minus sign, as in the trace helper's normative `native-sign-dictionary-pass1.md`; compositions of two sideways crossings have two signs and retain t_ij or t_ji. The double-mate ratio is unchanged: if M²(κ)=rκ, then κ=−τ and linearity gives M²(τ)=rτ.

The downward PBW/bubble faithfulness proof is unaffected: θ multiplies each PBW leading coefficient by (-1)^{ℓ(w)}, a unit. The negative word-generator induction is unaffected: rho and mixed commutator maps remain isomorphisms with the transported signs. The actual ideal-intersection transfer lemma remains unproved here; sign transport does not close it. The ordinary and monic bubble dictionaries must both use the transported source diagrams and native first-strand ideals, which θ identifies exactly.
