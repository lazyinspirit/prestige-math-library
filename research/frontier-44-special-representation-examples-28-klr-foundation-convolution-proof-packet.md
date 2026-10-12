# Local correspondence proof and integration boundary

The five supplier item bodies are in `research/frontier-44-special-representation-examples-28-klr-foundation-convolution-drafts/items/`. The exact A/B inventory, proofcontracts, existing prerequisites, collision checks, and this author's affected-consumer checks are in the sibling `-inventory-proofcontracts.json`. Source bodies and actual reading scope are bound in `-source-readings.json`. All are drafts.

## Exact convention

For source-first corner `(i,j)`, `Li=fi!kXi[di]`, `Ext^r(Li,Lj)=Hom(Li,Lj[r])`, and `Phi` has Borel–Moore degree `di+dj-r`. Multiplication is `alpha*beta=beta[r] after alpha`. At approximation `U/G` of complex dimension `b`, the ordinary BM degree is `di+dj+2b-r`, with middle diagonal dimension `dj+b`; the output ordinary BM degree remains `di+dk+2b-r-s`. Equivariant dualizing objects restrict to the ordinary dualizing object on X. Quotient-stack dimensional dualizing normalization is different and must not be silently substituted.

## Typed triple diagram

Set `A=Xi×E Xj`, `B=Xj×E Xk`, `C=Xi×E Xk`, `T=Xi×E Xj×E Xk`.

```
                T ----a----> A
                |            |
                b            q
                |            |
                v            v
                B ----u----> Xj

T --h--> C --ell--> Xi       pa=ell h
T --b--> B --v----> Xk       vb=mh
A --p--> Xi, C --m--> Xk
```

The top square is Cartesian. All projections named here are proper; in particular h is the base change of fj. Let `t=r+dj-di`, `w=s+dk-dj`. Under the adjunction/base-change corner chain, alpha and beta become `U:q!kA→kXj[t]`, `V:v!kB→kXk[w]`. The product correspondence on T is the explicit map

```
(vb)!kT = v!b!a*kA
  --v!BC--> v!u*q!kA
  --v!u*U--> v!kB[t]
  --V[t]--> kXk[t+w].
```

Here BC is the standard proper-base-change isomorphism `b!a*→u*q!`. The kernel adjoint is

```
kT --a*kappa--> a*q!kXj[t]
   --mate(BC)--> b!u*kXj[t]=b!kB[t]
   --b!lambda[t]--> (vb)!kXk[t+w].
```

In these last two lines superscript exceptional pullbacks are written `!` adjacent to the functor name; `(vb)!` at the right of the kernel line means exceptional inverse image, whereas the first line's `(vb)!kT` means proper direct image. The item body uses unambiguous TeX superscripts/subscripts. The mate of BC is a morphism, not an asserted isomorphism. Its explicit adjunction evaluation is what makes the two kernel descriptions equal.

Push to C by `kC→h*kT` followed by the dualizing trace counit `h!h^!m^!k→m^!k`. Equivalently, the cohomological-correspondence representative is

```
m!kC --m!unit_h--> m!h*kT=(vb)!kT --W--> kXk[t+w].
```

The product square is

```
Hom_E(fi!ki,fj!kj[t]) × Hom_E(fj!kj,fk!kk[w]) --composition--> Hom_E(fi!ki,fk!kk[t+w])
          | adjunction+BC                                      | adjunction+BC
          v                                                    v
Hom_Xj(q!kA,kj[t]) × Hom_Xk(v!kB,kk[w]) -------U_C-----------> Hom_Xk(m!kC,kk[t+w])
          | adjunction+positive orientation                     | adjunction+positive orientation
          v                                                    v
BM_{2dj-t}(A) × BM_{2dk-w}(B) -------------h*Delta!-----------> BM_{2dk-t-w}(C).
```

The upper square is verified on maps rather than inferred from equality of vector-space dimensions. The inverse corner map uses `unit_p` then `fi!p*=fj!q!` then `fj!U`. In composition, naturality of `unit_u` moves U past the second unit; BC replaces `u*q!` by `b!a*`. The two inserted units are the composed unit for `pa=ell h`. Taking the left adjoint of the Beck–Chevalley comparison gives the identity on `a*p*ki=kT` by the two triangle equations, so the right-adjoint maps agree. This yields `fi!unit_pa`, then `fk!W`, on either route. Homogeneous shifts compose as `V[t] after U`; after restoring di,dj,dk this is `beta[r] after alpha`, with no interchanged factors or extra `(-1)^(rs)`.

The lower square requires the separately named orientation lemma. For a closed embedding z the injective support model is `z^!=z^{-1}Gamma_Z`, with `RHom(z*kZ,F)=RGamma_Z(F)`. Supported relative cup/cap is therefore the tensor–Hom evaluation. In an ambient complex diagonal chart, the normal relative cohomology is k concentrated in real degree2dj, normalized by the ordered positive complex coordinates; this unique orientation is also the Thom generator. Pulling that same map to the closed support and taking its adjunction mate gives precisely `mate(BC)` in the kernel line. Thus this identifies the genuinely geometrically normalized refined diagonal operation with the kernel operation. It does not define geometric convolution by transporting composition through Phi. Singular supports and nontransverse intersections remain supported throughout.

## Source and construction limits

Ginzburg's complete Proposition5.1 establishes the vector-space chain but explicitly imports CG8.6.7 for multiplication. VV1.8 likewise imports CG8.6.35. The full CG proof has NOT been retrieved or read. Varshavsky's full PDF was recovered and hash checked; complete §§0.2–0.4,1.1 actually read. Its1.1.6(b) provides a complete short proof of proper-pushforward composition by base-change pasting. It is an ℓ-adic source and is supporting formal evidence, not an analytic-equivariant construction theorem or a substitute citation for the exact Ext/BM claim. The local upper-square calculation above and the supplier item are newly reconstructed proofs conditional on the exact foundational constructions.

The following inputs remain assigned upstream, and nothing in this packet certifies that they are already locally proved:

- `thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace`: ordinary/sheaf six-operations construction, localization support model, positively normalized local duality, tensor–Hom, projection/trace, proper BC and its coherent mates.
- `thm-constructible-six-functors-proper-base-change-and-verdier-duality`: restrictions to algebraically constructible objects, constructibility finiteness, dualizing transitivity and complex orientation.
- `lem-cartesian-simplicial-sheaves-model-equivariant-constructible-derived-hom`, supported by `lem-product-general-linear-stiefel-approximations-stabilize-bounded-constructible-hom`: actual equivariant descent/Borel comparison, stabilization compatible with these maps, degreewise finiteness.
- Algebraic stratified topology supplying locally finite CW type at finite Borel approximations for the existing top-Chern=Euler theorem's hypotheses.

The incidence lemma uses the published `lem-flag-variety-of-a-vector-space` and `thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle`. It explicitly inherits AC through those suppliers. Dimension-zero vertex factors are points. There is no imported coherent-sheaf duality, no semismallness, no formality, and no finite-total equivariant-cohomology claim.

## Consumer ownership checks

This author examined each owned new supplier's downstream use rather than assigning a read-only consumer reviewer. The orientation changes affect the definition, product theorem, incidence lemma and signed geometric realization: all use standard positive complex orientation, so VV cotangent/Euler normalization must be an explicitly separate signed generator. The Ext interface affects product and signed KLR identification: both use the total-incidence dimension shift and source-first convention. The product interface affects the original global-basis proof's left modules Ext(L,T): precomposition is the left action for a*b=b∘a. The signed-realization author confirmed its native generators account for the separate VV sign. The original20 owner received the exact normalization and retains the original consumer repair; this packet does not rewrite that consumer or certify its proof. All local draft consumer interfaces have been aligned; ultimate mathematical closure remains contingent on the assigned upstream constructions.
