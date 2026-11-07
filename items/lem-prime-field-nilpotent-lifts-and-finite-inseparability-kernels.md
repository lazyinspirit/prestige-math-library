---
id: lem-prime-field-nilpotent-lifts-and-finite-inseparability-kernels
kind: lemma
title: Prime-field lifts and finite inseparability kernels
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
- def-geometric-regularity-for-noetherian-algebras-and-maps
- def-axiom-of-choice
- thm-regular-local-rings-are-domains-and-cohen-macaulay
- def-kahler-differentials-algebra
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 07E5
    url: https://stacks.math.columbia.edu/tag/07E5
    locator: Source-backed local reconstruction; exact actual proof and reading limits are the bound proof_source_parts. No linked prerequisite or whole-chapter reading is asserted; source citation is not an external theorem import.
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. Let $p$ be a prime. For every field $K$ of characteristic $p$, every $\mathbf F_p$-algebra $B$ and every nilpotent ideal $J\subseteq B$, each $\mathbf F_p$-algebra map $K\to B/J$ lifts to a map $K\to B$. For every Noetherian local $k$-algebra $(C,\mathfrak n,K)$ geometrically regular in the Noetherian sense over a field $k$ of characteristic $p$, the kernel of $K\otimes_k\Omega_{k/\mathbf F_p}\to\Omega_{K/\mathbf F_p}$ injects into $\mathfrak n/\mathfrak n^2$, so its dimension is at most $\dim C$. The proof also supplies the absolute cotangent sequence and the finite-extension differential-index calculation used for these conclusions.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F2] The following existing interface is used at its literal public scope: [[thm-regular-local-rings-are-domains-and-cohen-macaulay]].

[F3] The following existing interface is used at its literal public scope: [[def-kahler-differentials-algebra]].

[F4] General Noetherian geometric regularity is tested after finite field extensions. [[def-geometric-regularity-for-noetherian-algebras-and-maps]]

## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 A field `K` of characteristic `p` has a p-basis `T`: the monomials with finite support and exponents `<p` form a basis over `K^p`. Choose a maximal p-independent set using AC. It spans because, if `a` were outside `K^p(T)`, its polynomial `X^p-a^p` would be irreducible there, and adjoining `a` would preserve p-independence. Each finite p-monomial algebra over the coefficient field is already a field (finite-dimensional domain), so these monomials span `K^p(T)` itself. Iterating the p-expansion shows that, for every `q=p^N`, the monomials `T^e`, `0<=e<q`, form a basis over `K^q`: successively expand the pth-root coefficients and use injectivity of Frobenius for uniqueness. [F1, F2, F3, given, construct, algebra]

2.1 Let `B` be an `F_p`-algebra, let `J` be nilpotent, and let `phi:K -> B/J` be given. Fix `q=p^N` with `J^q=0`. The rule `b mod J -> b^q` is a well-defined ring map from `B/J` to `B`, because changing a lift by `j in J` changes the qth power by `j^q=0`. Choose lifts `t_t in B` of the images of the p-basis elements, using the displayed AC. For the unique finite q-expansion `a=sum_e a_e^q T^e`, define `Phi(a)=sum_e (any lift of phi(a_e))^q t^e`. The coefficient powers are independent of their lifts. This is a ring map: the field presentation over `K^q` has exactly the relations `T_t^q=t^q`, and the chosen lifts satisfy those relations against the just-defined coefficient-field map; alternatively multiply two expansions and carry exponents `>=q` into qth-power coefficients. Reduction is `phi`, and `Phi(1)=1`. Thus every field of characteristic `p` is formally smooth over `F_p` in this exact nilpotent lifting sense, for arbitrary quotient rings, with no Noetherian assumption on `B`. [F1, F2, F3, step 1.1, given, construct, algebra]

3.1 The same p-expansion with `q=p` proves that `Omega_(K/F_p)` has basis `dT`. A derivation is determined arbitrarily on `T`, and the p-expansion differentiates with its qth-power coefficients constant. The relations have zero derivatives and impose no restriction. It also shows `d a=0` exactly when `a in K^p`. [F1, F2, F3, step 2.1, given, construct, algebra]

4.1 For every finite extension `K'/K`, the map `gamma: K' tensor_K Omega_(K/F_p) -> Omega_(K'/F_p)` has finite-dimensional kernel and cokernel of the same dimension. For a simple separable extension, its monic minimal polynomial has nonzero derivative, so its differential equation eliminates the added generator differential and imposes no relation on the old module: both dimensions are zero. A simple purely inseparable extension has the form `K'=K[u]`, `u^(p^e)=a`, with `a notin K^p`; its presentation gives `Omega_(K'/F_p) = [K' tensor Omega_(K/F_p)]/(K' da) direct_sum K' du`. By step 3.1, `da!=0`, so kernel and cokernel both have dimension one. A general finite extension is a finite tower of a separable simple extension and simple purely inseparable extensions, followed by finitely many such generators if needed. For composable linear maps with finite kernel/cokernel, the kernel-minus-cokernel dimension adds, by the finite exact kernel/cokernel sequence. Thus the conclusion holds for the tower. This argument does not subtract infinite vector-space dimensions. [F1, F2, F3, step 3.1, given, construct, algebra]

5.1 Let `(C,n,K)` be any local `F_p`-algebra. The sequence `0 -> n/n^2 -> Omega_(C/F_p) tensor_C K -> Omega_(K/F_p) -> 0` is exact. To check the first injection rather than presume it, lift the identity map of `K` to `C/n^2` by step 2.1. This identifies that square-zero algebra with `K direct_sum n/n^2`. Derivations to any `K`-vector space are precisely a derivation of `K` together with a `K`-linear map from `n/n^2`. The universal property gives the displayed sequence, split after that lift. Replacing `C` by `C/n^2` does not change the middle module: differentials of `n^2` vanish after tensoring with `K`. [F1, F2, F3, step 4.1, given, construct, algebra]

6.1 Let `(C,n,K)` be Noetherian local and geometrically regular over a subfield `k` of characteristic `p`. We prove that `Omega_(k/F_p) tensor_k K -> Omega_(C/F_p) tensor_C K` is injective. Take any finite p-independent list `a_1,...,a_s` in `k`; equivalently their absolute differentials are independent, by step 3.1. Put `k'=k(a_1^(1/p),...,a_s^(1/p))`. It has the presentation with exactly `s` equations `Z_i^p-a_i`, by p-independence. Set `C'=C tensor_k k'`. It is finite free over `C` and radicial: a common pth power of each element belongs to `C`, giving the order-preserving unique prime above each prime. In particular it is local, its residue `K'` is finite purely inseparable over `K`, and its dimension equals that of `C`. By geometric regularity in [F4] it is regular. Both cotangent spaces `n/n^2` and `n'/(n')^2` therefore have the same finite dimension. [F1, F2, F3, F4, step 5.1, given, construct, algebra]

7.1 Apply step 5.1 to `C` and `C'`, tensoring the first row with `K'`. The three natural vertical maps form an exact-row diagram. The map on left cotangent spaces has kernel/cokernel of equal dimension because both spaces have that same finite dimension. The map on right field differentials has kernel/cokernel of equal finite dimension by step 4.1. The explicit polynomial presentation of `C'/C` gives the middle differential map `beta` a kernel generated by the images of `da_i` and cokernel `K'^s`: in absolute differentials the relations are `-da_i` and the new `dZ_i` are free. The finite kernel/cokernel exact sequence of this diagram therefore gives `dim ker(beta)=dim coker(beta)=s`. Hence those `s` images `da_i` are independent. Every finite subset of a p-basis of `k` can be used as this list. All their images are independent, proving the claimed injection for the whole module. This is a dimension calculation on finite kernels and cokernels only; the two full absolute differential modules may be infinite dimensional. [F1, F2, F3, step 6.1, given, construct, algebra]

8.1 Define the concrete inseparability-relation space `V(K/k)=ker[ Omega_(k/F_p) tensor_k K -> Omega_(K/F_p) ]`. By step 6.1 it injects into the middle module of step 5.1, and its image belongs to the kernel of that module's map to `Omega_(K/F_p)`. Thus `V(K/k) embeds in n/n^2`. It is finite dimensional, of dimension at most the dimension of the regular local ring `C`. This is exactly the finite-kernel assertion needed in the Artinian approximation construction. No cotangent-complex notation is needed to establish it. [F1, F2, F3, step 7.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. Completion and readiness are tracked in the run’s item record.
