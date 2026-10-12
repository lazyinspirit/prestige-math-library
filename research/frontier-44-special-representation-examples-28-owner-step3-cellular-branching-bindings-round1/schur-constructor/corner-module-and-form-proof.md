# Actual Step3 Schur-functor binding: complete corner and form construction

Author: `/root/repair_cell_head_classification/native50_pairing_constructor`.
Run: `frontier-44-special-representation-examples-28`.
Target: `thm-schur-functor-sends-weyl-and-simple-modules-to-specht-and-hecke-simple-modules`.
This is the distinct actual-author binding construction, round 1; it does not reopen source20's historical repairs or approved NEW50. Only this research directory is written. Authentic current item, receipt, suppliers and NEW50 interface are archived and hashed in `authentic-input-and-source-reading.json`.

## What was actually read

Current CLAUDE was read fully. The actual target and its actual `step3b-review` receipt were read, along with the actual Schur definitions, source20 Murphy definition/theorem, cellular classifier, signed Specht definition, and published group-only conjugate-sign proposition. The NEW50 proposed ordinary module/form interfaces were read from its actual round1 proposed manifest. No historical source-attempt or repair counter was changed.

The complete cached Mathas manuscript has 79 PDF pages and SHA256 `8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0`. Printed pages 40–44 were read using extracted text and visual inspection of each whole rendered page (PDF pages 46–50, one-based). This includes the complete proofs of Theorem4.14, Proposition4.15, Theorem4.16 and Proposition4.19 including its p44 continuation. It is not a claim to have read the whole book. The parent owns the full Theorem3.39 classification proof; this construction names that exact separate interface.

Proposition4.19(i) identifies the surviving semistandard basis by evaluation at mω=1. Its proof of (ii) invokes Theorem3.39(ii) and Corollary4.18, rather than providing the explicit form-restriction calculation now supplied below. The source's Theorem4.16 proof computes canonical Schur Gram value1. The source's Theorem4.14 proof and equation4.13 fix composition as ordinary composition of maps: (fg)(x)=f(g(x)), so left multiplication gives H→eSe as an algebra map, not an anti-map.

## Confirmed binding defects and exact prerequisites

1. The target's F4 is a citation-only proof supplier. It must be replaced by the local corner product proof below, with the actual Schur semistandard datum named as a prerequisite.
2. The target invokes a published prime-characteristic symmetric-group proposition for an arbitrary invertible Hecke parameter. That proposition does not have this scope. Use the accepted NEW50 signed conjugate module/form comparison, which supplies Pλ≅C_M(λ')^θ with the unit form factor q^{ell(w0(Sλ'))−ell(wλ)} over every ring.
3. The Schur-definition supplier falsely claims every diagonal semistandard φTT is an orthogonal idempotent. For n=2, shape(2), typeω=(1,1), its diagonal element inside the Hecke corner is m_(2)=1+T1; its square is (1+q)m_(2), not itself. Only the actual projections onto individual summands Mν are the weight idempotents. Also Tν of shapeν is not a partition-shaped semistandard index when ν is an arbitrary unsorted composition. Define these projections as endomorphisms directly. The theorem below needs only e=pω and pλ for a partition λ.
4. The Schur-idempotent supplier calls Se a right S direct summand when proving exactness of X⊗SSe. Se is the left S summand S·e; it is a (S,eSe)-bimodule. Exactness also has the direct elementary proof below.
5. The actual source20 Murphy theorem contains unrelated false proof clauses (for example H=M^(n), whereas M^(n) has rank1 for n≥2). No such clause is consumed. The needed Murphy cell datum is the independently proved NEW50 datum, with exactly the same xλ and m_st normalization, and must be rebound explicitly.
6. The target's multiplicity step refers to nonexistent step1.2. The replacement proof uses the actual preceding numbered steps.

The precise Schur prerequisite is: φ_ST is supported from M^{type(T)} to M^{type(S)}, sends m_{type(T)}h to m_ST h, the semistandard family is a basis, its star swaps S,T, and its right-cell coefficients fix the first index modulo higher shapes. This is the Schur cellular construction recalled in the supplier definition and proved in Mathas4.14 from4.9/4.12 and Murphy theory. This packet proves its entire required corner interface; it does not invent a previously absent general semistandard Hom-basis proof. Parent supplier reconciliation should retain the legitimate semistandard basis and replace the false all-diagonal-idempotent assertion. The separate classifier input is D_M(ν)≠0 iff ν is e-restricted, with the nonzero quotients pairwise distinct; it is parent-owned.

## 1. Right corner convention and exactness

Let H=H_{R,q}(S_n), d≥n, M=⊕ν Mν, S=End_H(M), using (fg)(x)=f(g(x)). All module actions on Weyl and Hecke modules are on the right. Let pν be the actual projection onto the summand Mν, and e=pω, where ω=(1^n,0^{d−n}) and Mω=H. Then e²=e. Restriction to H identifies eSe with End_H(H_H). Each such endomorphism is left multiplication by its value at1, so

ρ:H→eSe,  ρ(h)(a)=ha,

is an algebra isomorphism: ρ(h)ρ(k)=ρ(hk). There is no opposite algebra in this right-module convention. The right action on Xe is x·h=xρ(h).

For a short exact sequence 0→X'→X→X''→0 of right S-modules, applying right multiplication by e remains injective on X', and is onto X''e because if y∈X''e and x lifts y then xe lifts y. If xe maps to0, it lies in X' and is fixed by e, hence lies in X'e. Thus X↦Xe is exact. The natural tensor identification X⊗SSe→Xe is x⊗se↦xse, with inverse xe↦x⊗e. Se is explicitly a left S summand and a right eSe module.

## 2. Actual corner basis, higher ideals and Weyl modules

For the Schur semistandard element, the support formula gives

 e φ_ST e = δ_{type(S),ω} δ_{type(T),ω} φ_ST.

For a partition λ, typeω semistandard λ-tableaux are exactly standard λ-tableaux: the labels1,…,n occur once each, so row weakness is strict and column strictness gives the ordinary standard conditions. Each fibre defining m_ST is therefore a singleton. For standard s,t of shapeλ,

φ_st|_H(a)=m_st a, and ρ^{-1}(φ_st)=m_st.

In particular the corner of the higher Schur ideal J^{▷λ} is exactly the higher Murphy ideal I^{▷λ}, underρ. This is equality of basis spans, not just an assertion that some higher maps vanish.

Let Wλ be the right Schur cell module with semistandard basis w_T, the coefficients being read with any fixed first index. Using the actual projection e on the domain of φ_{Tλ,T} gives

 w_T e = δ_{type(T),ω} w_T.

Hence Wλe has basis (w_t)_{t∈Stdλ}. To determine its H action, read the Schur right-cell law using a first index s of typeω; the coefficient-independence axiom permits this instead of the original fixed Tλ. Then φ_st ρ(h), restricted to H and evaluated at1, is m_st h. The higher ideal corresponds exactly to I^{▷λ}. Therefore the right action coefficients are the independent Murphy right-cell coefficients. The explicit map

 Ψλ:Wλe→C_M(λ),   Ψλ(w_t)=c_t

is an H-isomorphism over every commutative ring R with unitq. It is compatible with base change and contains no generic semisimplicity argument or sign twist.

## 3. Exact restriction of the cell form

Let Bλ be the Schur cell form and Gλ the Murphy cell form. The Schur cell product, whose coefficient is independent of the outer indices, reads

 φ_as φ_tb ≡ Bλ(w_s,w_t) φ_ab  (mod J^{▷λ}).

Choose all four indices a,s,t,b standard of shapeλ and typeω. All three maps belong to eSe. Applyρ^{-1} and evaluate the resulting endomorphism at1. This gives

 m_as m_tb ≡ Bλ(w_s,w_t) m_ab  (mod I^{▷λ}).

The independent Murphy cell law identifies its coefficient uniquely as Gλ(c_s,c_t). Thus

 Bλ(x,y)=Gλ(Ψλx,Ψλy) for every x,y∈Wλe.

The factor is exactly1 in these cell normalizations. The computation uses maps H→H and evaluation at1, so there is no choice of an h with mνh=m_ST, no inverse quantum factorial, and no left/right ambiguity involving evaluation at mλ. The original target's mixed-type product can be replaced by this simpler four-index argument.

Since e*=e, contravariance gives Bλ(xe,y(1−e))=Bλ(x, y(1−e)e)=0. Consequently

 Wλ=Wλe⊕Wλ(1−e)

is an orthogonal decomposition. If x∈Wλe, then x pairs trivially with the second summand, and it is in the radical of the restricted form precisely when it pairs trivially with the first summand. Therefore

 rad_form(Wλe)=rad_form(Wλ)∩Wλe=rad_form(Wλ)e.

For the last equality, the inclusion from right to left follows from the fact that the form radical is an S-submodule; conversely an x in the intersection satisfies x=xe. This is a full proof of the radical identity even if the corner form is identically zero.

For the unique semistandard Tλ of shape/typeλ, φ_{Tλ,Tλ} sends mλh to mλh on Mλ and is zero on all other summands. Thus it is pλ, an actual idempotent. Its square and the Schur cell product give Bλ(w_Tλ,w_Tλ)=1. Hence the Weyl cell form is never identically zero. Its form quotient Lλ is nonzero and is its unique simple head: if x is outside the form radical, choose y with Bλ(x,y)=1; the cellular rank-one action xφ_{uv}=Bλ(x,w_u)w_v and the finite expansion of y show that x generates every basis vector. Every proper submodule is therefore contained in the form radical, which is the unique maximal proper submodule. This is precisely the nonzero-form case; no assertion about actual heads of zero-form Hecke cells is made.

Exactness now gives

 Lλe ≅ Wλe/(rad_form Wλ)e ≅ C_M(λ)/rad_form C_M(λ)=D_M(λ).

This remains true when D_M(λ)=0: the nonzero Schur simple Lλ is then killed by the Schur functor. It does not say that the actual head of the zero-form Hecke cell is zero.

## 4. Nonvanishing, multiplicities and the correct ordinary dictionary

Invoke the parent's separately proved classifier interface with e=e(F,q): D_M(ν)≠0 iff ν is e-restricted; those nonzero quotients are pairwise non-isomorphic simples. Step3 then gives Lνe≠0 exactly for theseν. Apply the exact functor to any finite composition series of Wλ. Each factor Lν goes to D_M(ν) if nonzero, and otherwise to0. Delete repeated members of the resulting filtration. Its factors are the nonzero simple D_M(ν), so pairwise distinctness and Jordan–Hölder give

 [Wλ:Lν]=[C_M(λ):D_M(ν)]  for every e-restricted ν.

This does not assert preservation of multiplicities for labels whose simple is killed.

The accepted NEW50 isomorphism is Φα:Pα→C_M(α')^θ with its actual module-and-form normalization, including every zero quotient. Applying θ to Φα gives

 C_M(α')≅Pα^θ,

and the unit-scaled form identity gives D_M(α')≅D_DJ(α)^θ. No extra contragredient dual occurs in these conjugate formulas; the distinct same-shape identity is C_M(α)≅Pα^circ. The page's signed-cell Specht Sα is C_M(α')^θ and its ordinary historical DJ ideal Pα is identified with it byΦα.

Thus

 F(W^{α'})≅(Sα)^θ≅Pα^θ,
 F(L^{α'})≅(Dα)^θ,

where the second is nonzero iff α is e-regular and is zero otherwise. For e-regular β,

 [W^{α'}:L^{β'}]=[C_M(α'):D_M(β')]=[Sα:Dβ]=[Pα:D_DJ(β)].

The middle equality twists both modules by the same involutive θ, an exact equivalence, and the final equality uses the genuine NEW50 module/form bridge. This arbitrary-unit-q dictionary does not rely on the published group-only proposition. Atq=1, θ is tensoring with sign; in characteristic2 it becomes trivial atq=1. All zero-quotient cases and the empty partition are retained. At n=0, every relevant basis has one vector, e=1 and both forms have value1.

## Completion and remaining ownership

The actual corner-module and form-restriction proofs are complete, including right/left conventions, radical equality, all zero cases, nonzero Schur heads, composition multiplicities and the NEW50 ordinary dictionary. No unresolved corner scalar or lattice issue remains. Final theorem integration still requires the parent's classifier proof and explicit reconciliation of the Schur semistandard prerequisite and supplier corrections above. No canonical item, native record, plan, state, coverage, gate or historical proof receipt was written by this constructor.
