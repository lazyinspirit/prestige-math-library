---
id: lem-henselian-integer-model-completions-have-geometrically-regular-fibres
kind: lemma
title: Regular formal fibres of henselian integer models
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-geometric-regularity-for-noetherian-algebras-and-maps
- lem-prime-field-nilpotent-lifts-and-finite-inseparability-kernels
- lem-ordinary-henselization-completion-and-separable-fibres
- def-axiom-of-choice
- thm-flatness-of-noetherian-completion
- thm-noetherianity-of-adic-completion
- cor-completion-commutes-with-finite-quotients-and-submodules
- thm-regular-local-rings-are-domains-and-cohen-macaulay
- thm-completion-preserves-regular-local-rings
- thm-localisation-and-polynomial-extension-of-regular-rings
- thm-primitive-element-theorem-for-finite-separable-extensions
- lem-regular-local-regular-quotient-ideal-is-parameter-generated
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 07PV
    url: https://stacks.math.columbia.edu/tag/07PV
    locator: Source-backed local reconstruction; exact actual proof and reading limits are the bound proof_source_parts. No linked prerequisite or whole-chapter reading is asserted; source citation is not an external theorem import.
dependency_level: 2
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. For R the localization at a prime of a finite-type Z-algebra, the maximal-ideal completion R→Rhat is regular in the Noetherian sense of [[def-geometric-regularity-for-noetherian-algebras-and-maps]]. The same holds for the completion map of its ordinary henselization. No regularity of R is assumed.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[lem-prime-field-nilpotent-lifts-and-finite-inseparability-kernels]].

[F2] The following existing interface is used at its literal public scope: [[lem-ordinary-henselization-completion-and-separable-fibres]].

[F3] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F4] The following existing interface is used at its literal public scope: [[thm-flatness-of-noetherian-completion]].

[F5] The following existing interface is used at its literal public scope: [[thm-noetherianity-of-adic-completion]].

[F6] The following existing interface is used at its literal public scope: [[cor-completion-commutes-with-finite-quotients-and-submodules]].

[F7] The following existing interface is used at its literal public scope: [[thm-regular-local-rings-are-domains-and-cohen-macaulay]].

[F8] The following existing interface is used at its literal public scope: [[thm-completion-preserves-regular-local-rings]].

[F9] The following existing interface is used at its literal public scope: [[thm-localisation-and-polynomial-extension-of-regular-rings]].

[F10] The following existing interface is used at its literal public scope: [[thm-primitive-element-theorem-for-finite-separable-extensions]].

[F11] For a Noetherian map, regularity means flatness and regular fibres after every finite residue-field extension. [[def-geometric-regularity-for-noetherian-algebras-and-maps]]

[F12] In a regular local ring the quotient by an initial part of a regular system of parameters is regular. [[lem-regular-local-regular-quotient-ideal-is-parameter-generated]]

## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 First take a polynomial local ring P=Z[x_1,…,x_d]_q and write C=Phat for its maximal-adic completion. The ring Z is regular: its localizations at zero and at a rational prime are respectively Q and a DVR with its one-generator maximal ideal. Thus P is regular by [F9], and C is Noetherian regular local by [F5] and [F8]. For a rational prime ℓ∈q, P/ℓP is a localization of F_ℓ[x], hence regular local; its completion identifies with C/ℓC by [F6] and is regular by [F8]. Also C⊗_Z Q is a localization of C and therefore is a regular Noetherian ring. This identifies all regular ambient rings needed below. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, given, construct, algebra]

2.1 Each original coordinate derivation D_i=∂/∂x_i maps P to P, using the quotient rule for the denominators outside q. If m is the maximal ideal of P, the Leibniz rule gives D_i(m^(a+1))⊂m^a for every a≥0. It therefore defines compatible maps P/m^(a+1)→P/m^a, and passing to the inverse limit gives an actual derivation Dhat_i:C→C. Its addition and Leibniz identities hold in each finite quotient and hence in C. No sequence of arbitrarily selected lifts is needed. Dhat_i is Z-linear and agrees with the original partial derivative on polynomials. It descends to C/ℓC and extends to C⊗Q by the same quotient rule. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 1.1, given, construct, algebra]

3.1 We prove a prime-field polynomial conormal lemma. Let F be Q or F_ℓ, W=F[u_1,…,u_N], J a prime of W and K=Frac(W/J). Put U=W_J and n=JU. The local ring U is regular by [F9]. There is an F-algebra coefficient section K→U/n². For F=F_ℓ this is exactly the nilpotent field-lifting construction [F1]. For F=Q, choose a finite transcendence basis T of K/Q; K is finite separable over Q(T). Lift the finitely many T-elements arbitrarily to U/n². Every nonzero rational polynomial in their residues is nonzero in K and hence is a unit in the local square-zero ring, so these lifts define Q(T)→U/n². Choose a primitive element of the finite separable extension. Lift its simple minimal-polynomial root by the finite square-zero Newton correction. This extends to the desired K-section. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 2.1, given, construct, algebra]

4.1 The coefficient section identifies U/n² with the square-zero algebra K⊕n/n², compatibly with its F-map. Derivations to a K-vector space are thus precisely a derivation of K over F together with a K-linear functional on n/n². The universal differential property gives the exact split sequence 0→n/n²→Ω_(U/F)⊗_U K→Ω_(K/F)→0. Here Ω_(U/F)⊗K=K^N, with the images of the original polynomial-coordinate differentials as basis. Choose f_1,…,f_r from a finite generating list of J whose images form a basis of n/n²; r=dim(U). Their derivative vectors are linearly independent in K^N by the injection just proved. Hence some r×r minor Δ of their ORIGINAL polynomial-coordinate Jacobian is not in J. This does not apply an existential Jacobian criterion to an arbitrary redundant presentation. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 3.1, given, construct, algebra]

5.1 Finite Nakayama gives JU=(f_1,…,f_r)U. The W-module J/(f_1,…,f_r) is finite and its localization at J is zero. Choose one a∉J killing its finite generating list after localization. Then J_a=(f_1,…,f_r)_a. We have proved the exact original-coordinate presentation needed later: finitely many actual polynomials f_i∈J, one a∉J and one nonzero Jacobian minor Δ∉J. It works over BOTH prime fields and for every prime J, not merely separable finite residue extensions. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 4.1, given, construct, algebra]

6.1 Fix now p∈Spec(P) and a finite extension L/κ(p). Its characteristic is either0 or the rational prime ℓ contained in p (and then also in q). Put F=Q or F_ℓ accordingly, and let p0 be the induced prime of F[x]. Then κ(p)=Frac(F[x]/p0). Choose finitely many algebraic field generators z_1,…,z_s of L over κ(p). The polynomial map W=F[x,z]→L has prime kernel J, whose contraction to F[x] is p0. For S=F[x] minus p0, its localization has S^(-1)(W/J)=κ(p)[z_1,…,z_s]=L. The last equality holds because a finite algebraic extension is already generated as an algebra by any finite field-generating list; inverses of nonzero algebraic elements are polynomials by their monic equations. Thus the finite field L is represented with the ORIGINAL x-coordinates retained. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 5.1, given, construct, algebra]

7.1 Set A=C⊗_Z F. By step 1.1 it is regular Noetherian, in either residue characteristic. The formal fibre after this finite field extension is exactly C⊗_P L ≅ S^(-1)(A[z]/J A[z]). Indeed localization outside q was already performed in P and all its denominators remain units after the further S-localization; reducing modulo ℓ or inverting the nonzero integers gives precisely A. Tensoring the displayed polynomial presentation of L gives the formula. No approximation or unidentified map of completions occurs here. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 6.1, given, construct, algebra]

8.1 Apply steps 3.1–5.1 to this W and J. Let b be any prime of the fibre ring in step 7.1, and let Q be its inverse image in A[z]. Its contraction to W is EXACTLY J. In fact that fibre is an L-algebra, and every element of W outside J maps to a nonzero element of the field L and therefore to a unit in every nonzero fibre localization. Consequently both a and Δ from step 5.1 are outside Q, even though a and Δ need not lie in the multiplicative set S. Thus the ideal J in the regular local ring V=A[z]_Q is generated by those same f_1,…,f_r. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 7.1, given, construct, algebra]

9.1 The extended coordinate derivations of step 2.1, together with the ordinary ∂/∂z_j, are derivations of A[z] and of V after the quotient-rule localization. On every f_i∈F[x,z] they give its usual coordinate partial derivatives, including the r selected Jacobian columns. Let v be the maximal ideal of V. If Σ c_i f_i belongs to v², apply each of these selected derivations and reduce modulo v. The terms (D c_i)f_i vanish modulo v because f_i∈v, and D(v²)⊂v by the Leibniz rule. We obtain the invertible Jacobian matrix times the column of residues of the c_i equal to zero. Hence every c_i lies in v. This proves that f_1,…,f_r are linearly independent in v/v². [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 8.1, given, construct, algebra]

10.1 V is a regular local ring by regular polynomial extension/localization in [F9]. Extend the independent classes of the f_i to a basis of its maximal cotangent space. Their lifts give a regular parameter system, by finite Nakayama and the definition of regular local ring. Therefore f_1,…,f_r form part of such a system. The quotient V/(f_1,…,f_r) is regular by [F12], and it is exactly the local ring at b of C⊗_P L. Since b was arbitrary, that fibre ring is regular. If it is zero there are no primes and regularity is vacuous. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, step 9.1, given, construct, algebra]

11.1 This proof applies to every p and every finite L/κ(p), including inseparable finite extensions in positive characteristic. The field L is treated as a finitely generated extension of its perfect PRIME field, not assumed separable over κ(p). The original coordinates are kept in its presentation so their derivations really extend to the completed ambient ring. Hence P→Phat has geometrically regular fibres. It is flat by [F4]. Ordinary regularity of Phat was used only as an ambient input; the finite field presentation and derivation argument provide the actual missing formal-fibre conclusion. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 10.1, given, construct, algebra]

12.1 Now let B be an arbitrary finite-type Z-algebra and fix q_B. Choose a finite polynomial presentation B=Z[x]/I, and let q be the inverse-image prime. Then R=B_(q_B)=P/IP for P=Z[x]_q. Its completion is Rhat≅Phat/IPhat by [F6], since P is Noetherian and I finitely generated. This is the actual base change Phat⊗_P R; no regularity of the possibly singular quotient R is required. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 11.1, given, construct, algebra]

13.1 Flatness of P→Phat survives that quotient base change, giving flat R→Rhat. For p_R∈Spec(R), let p⊂P be its inverse image. The residue fields are canonically the same, and for every finite L/κ(p_R) one has Rhat⊗_R L = Phat⊗_P L. This is regular by step 11.1. Therefore R→Rhat has geometrically regular fibres at every prime. This is precisely the quotient/localization passage needed for the finite-type Z models; it does not claim all finite-type stability properties for arbitrary G-rings. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 12.1, given, construct, algebra]

14.1 Apply the already constructed ordinary-henselization transfer [F2] to this Noetherian local R. It proves H is Noetherian, Hhat=Rhat, and H→Hhat flat with geometrically regular fibres. The residue extensions appearing there are only separable algebraic and may have infinite degree; its finite-subfield/direct-factor proof handles finite extensions over them. Thus the RF endpoint needed for the specified henselian finite-type Z models is supplied at explicit AC scope. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, step 13.1, given, construct, algebra]

15.1 The argument includes mixed-characteristic models, positive-characteristic singular quotients and arbitrary primes in their spectra. The finite p-power field directions are handled by the prime-field conormal lift, and no regularity of the original finite-type algebra was assumed. No mixed-characteristic coefficient ring, universal catenarity, general Popescu smoothing, SF bad-prime iteration, full A5 finite-cover effectivity or original unqualified25 closure is asserted. All map identities above are the actual quotient, localization and completion maps. This completes the Statement at its explicit AC scope. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 1.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. Completion and readiness are tracked in the run’s item record.
