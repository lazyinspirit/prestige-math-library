# Ordinary finite-index Jones tower: owner construction

This is a proof proposal for root scientific review, not a native attempt or acceptance. Batch 63 genuinely ended at engine time 2026-10-17T17:56:59.943Z; complete actual preimages are indexed in before-index.json. The ordinary-index bounded-frame foundation is authored separately in finite-frame/. No PA-31 root-quotient argument is duplicated: its existing owner supplies the actual completed interfaces.

## 1. Exact corrected input

Let N⊂M be II1 factors with their faithful normal normalized traces, and let H=L²(M). Write L_x and R_x for left and right multiplication; R_xR_y=R_{yx}, and J(x)=x*. The ordinary Jones index is dim_N H for the right N action, defined by the canonical semifinite trace on End_N(H) normalized to give dimension 1 to L²(N). It is finite, λ=[M:N]<∞. The finite-frame supplier must prove, rather than assume, the finite amplification projection model, trace-preserving expectation, standard commutant identity, bounded pull-down and finite bounded Parseval frame u_j∈M. Its conclusions are

B=End_N H=W*(L(M),e), e:H→L²(N), Tr_B(e)=1, Tr_B(1)=λ,

x=Σ_j u_j E_N(u_j*x), 1=Σ_j u_j e u_j*, and τ_B(xey)=λ⁻¹τ_M(yx).

The native definition's extremality clause was vacuous: restricting the normalized trace of B to LEFT M gives τ_M automatically because M is a factor. The intended extremality condition is

τ_B(R_a)=τ_M(a), for a∈N'∩M.

Indeed R_a=Ja*J belongs to B exactly when a commutes with N. This is equivalent, by J, to equality of the normalized trace on the commutant of the LEFT N action and τ_M on N'∩M, the convention in Jones §4.1.6. The corrected Definition retains all ordinary finite-index extremal inclusions, without separability, irreducibility, integer-index or supplied-frame assumptions. AC supplies maximal orthogonal families, module decompositions and weak compactness subnet choices explicitly through the foundational suppliers.

## 2. Basic construction and trace: existing sound proof retained

Once the bounded frame is supplied, the native first-stage proof works: e implements E_N; exe=E_N(x)e; every module endomorphism T is Σ_j T(u_j)e u_j*, so B is the basic construction. Its finite-corner trace is faithful normal and normalized by λ. The coordinate trace calculation gives τ_B(xey)=λ⁻¹τ_M(yx). The finite factor trace uniqueness supplier gives τ_B|_M=τ_M. The trace-preserving expectation F:B→M therefore exists and is characterized by τ_M(F(T)x)=τ_B(Tx); applying the Markov formula yields

F(xey)=λ⁻¹xy.                                             (2.1)

Applying F to 1=Σu_j e u_j* gives Σu_j u_j*=λ1. Consequently the original complete Hilbert N module is exactly M, with no extra completion: a finite frame writes every module-limit vector as Σu_j n_j with n_j∈N. Equivalently M≅pN^k with p_ij=E_N(u_i*u_j), the map x↦(E_N(u_i*x))_i and its inverse (n_i)↦Σu_i n_i.

## 3. Explicit dual frame and index preservation

Put v_j=√λ u_j e∈B. For T=xey, equation (2.1) and exe=E_N(x)e give

Σ_j v_j F(v_j*T)=Σ_j u_j e E_N(u_j*x)y=xey.

Both sides extend normally in T; alternatively span MeM already equals B algebraically by the finite frame, so the equality is exact for every T∈B. Thus the v_j are a bounded finite right-M Parseval frame. Its dimension is

Σ_j τ_M(F(v_j*v_j))=Σ_j τ_B(v_j*v_j)
=λ Σ_j τ_B(e u_j*u_j e)=Σ_j τ_M(u_j*u_j)=λ.

The projection matrix q_ij=F(v_i*v_j) gives B≅qM^k, and its L² completion gives dim_M L²(B)=λ. Hence M⊂B is an ordinary finite-index inclusion with the same index, and the foundational first-stage construction applies again. B is a II1 factor: it is a nonzero corner of a finite matrix algebra over the II1 factor N. The foundation proves corners remain factors and diffuse. No extremality is needed for this frame propagation or the Jones relations below.

## 4. Extremality propagates with the correct right-action trace

Let C=End_M L²(B), with normalized trace τ_C from the dual frame. Since B=R(N)' and M'=R(M) on H, each c∈M'∩B has the form c=R_a, uniquely for a∈N'∩M. The trace-preserving expectation has E_N(a)=τ_M(a)1: it commutes with N, whose center is scalar, and it preserves the trace. Accordingly ece=τ_M(a)e.

For the RIGHT action R_c on L²(B), compute its normalized module trace in the dual frame:

τ_C(R_c)=λ⁻¹Σ_j τ_B(v_j* v_j c)
=Σ_j τ_B(e u_j*u_j e c)
=Σ_j τ_B(e u_j*u_j e c e)
=τ_M(a) Σ_j τ_B(e u_j*u_j e)=τ_M(a).

The inserted final e is justified by traciality: for A=eAe, τ_B(Ac)=τ_B(Ace). The last sum is λ⁻¹Σ_jτ_M(u_j*u_j)=1. Original extremality gives τ_B(c)=τ_B(R_a)=τ_M(a), so τ_C(R_c)=τ_B(c) for every c∈M'∩B. This is exactly extremality of M⊂B. Conversely the same calculation shows equivalence. Iteration therefore preserves the full extremal hypothesis, rather than merely the existence of a trace.

## 5. Both adjacent Jones relations, separately

On L²(B), let f be the orthogonal projection onto L²(M). The basic-construction compression identity is fTf=F(T)f for T∈B. In particular

fef=F(e)f=λ⁻¹f.                                          (5.1)

The reverse sandwich is not inferred by exchanging e and f. For the dense vectors T=xey∈B⊂L²(B),

efe(T)=e F(exey)=λ⁻¹ e E_N(x)y=λ⁻¹ E_N(x)e y=λ⁻¹ e(T).

Since span MeM=B by the frame and all three operators are bounded, this proves

efe=λ⁻¹e.                                                (5.2)

These arguments apply at every iterated inclusion. Set M_{-1}=N, M_0=M and recursively M_i=W*(M_{i-1},e_i), where e_i:L²(M_{i-1})→L²(M_{i-2}). Identify earlier algebras with their left action in later standard representations. For j≥i+2, the projection e_j commutes with M_{j-2}, hence with e_i∈M_i⊂M_{j-2}; this proves distant commutation. Each e_i is a self-adjoint projection by construction. Both adjacent relations are e_i e_{i+1}e_i=λ⁻¹e_i and e_{i+1}e_i e_{i+1}=λ⁻¹e_{i+1}.

Thus δ=√λ>0 and U_i=δe_i satisfy U_i²=δU_i, U_i U_{i±1}U_i=U_i, and distant commutation. The generator-presentation/diagram-algebra equivalence gives compatible unital *-representations TL_n(C,δ)→M_{n-1} (e_1,...,e_{n-1} lie in M_{n-1}). No surjectivity onto M_{n-1} or a relative commutant is asserted. Trace compatibility follows either from the locally proved Markov-trace uniqueness theorem or its normal-form proof: for x in the earlier tower, τ_i(xU_i)=δ⁻¹τ_{i-1}(x), and normalization fixes the unit. Therefore the pullback is exactly the normalized diagram closure trace, and positivity follows from the faithful positive tower trace.

## 6. Boundaries and consumer consequences

λ≥1 because τ_B(e)=λ⁻¹≤1. If λ=1, faithfulness gives e=1, whence M=N, and all later inclusions and projections are identities; the same formulas hold. No excluded zero projection or empty frame is used: λ>0 and the frame spans 1. Noninteger λ uses projection corners throughout; it is never rounded to a vector-space dimension. For each finite tower stage the displayed finite dual frame is available. No uniform finite frame size across infinitely many stages is claimed. Extremality is needed for its propagation assertion, not for the ordinary finite-index Jones representation itself.

Actual direct and indirect consumers of the changed input Definition must be scanned across the frontier. The local coordinate-frame lemma and amplification example retain their formulas after the input is strengthened to ordinary index; the example's extremality calculation must be corrected to the right-action trace. The quotient tower theorem is a separate positive-root consumer of PA-31's completed algebraic matrix units, not a consequence of this II1 construction.

## 7. Actual source use

Parent fetched Jones, Planar Algebras I, arXiv math/9909027, full PDF122pages, and read all §4.1 (printed/PDF81–92), including the assumptions/basis identities/extremality/tower notation and the complete later rotation arguments. The source assumes the finite basis and standard tower facts; it is not claimed to prove their existence here. Parent fetched Penneys, Exercises in Quantum Algebra, fullPDF66pages, and read PDF21–24 and31–34 in full. Its finite-dimensional tower proof contains apparent index/scale typos in the adjacent calculation; the local independent calculations (5.1)–(5.2) above supply both relations and do not import those typos. Its §4.3 explicitly sketches the II1 facts without proving the foundational basis theorem. The AP book fullPDF338pages is available locally; the finite-frame delegate records exact full arguments actually read and reconstructed. No external theorem is silently elevated to a local proved supplier.
