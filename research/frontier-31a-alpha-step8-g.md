# Frontier 31a Step 8 — group g adjudication

## Result

All 31 assigned rejection tuples for batches 7, 12, and 20 were read against
the frozen item bytes, their page conventions, and every dependency implicated
by the objection. The outcomes are 20 `confirmed_fatal`, 6
`confirmed_nonfatal`, and 5 `false_positive`. Each judge-confirmed fatal
licensed one minimal repair to its rejected item.

All five Step-7 reader warnings were dispositioned: three are
`covered_by_rejection`, one is independently `confirmed_fatal`, and one is
`nonfatal`. The independent fatal repaired the undefined “well-pointed”
hypothesis in the suspension corollary. Thus 21 items changed and 21 matching
rows, `frontier-31a-S8-g-001` through `frontier-31a-S8-g-021`, were appended to
`research/defect-ledger.jsonl`. No defect lay outside group g, so there were no
cross-group alerts, published repairs, scope changes, deletions, or
reading-order changes.

## Judge-rejection adjudications

| item | outcome | exact decision and disposition |
|---|---|---|
| `cex-one-subdivision-depth-does-not-make-all-singular-simplices-cover-small` | `confirmed_fatal` (`logic`) | The zigzag did not ensure a non-small summand survived coefficient cancellation. Fixed integer coefficients and a witness for which every dyadic summand is non-small with positive coefficient; rejudge. |
| `cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient` | `confirmed_fatal` (`other`) | “Good pair” was undefined and the quotient comparison was not constructed. Stated the closed deformation-neighborhood hypothesis and supplied the excision comparison; rejudge. |
| `cor-homology-of-spheres` | `confirmed_fatal` (`logic`) | The unreduced degree-zero formula wrongly included `S^0`. Separated `H_0(S^0;G)=G\oplus G` from the connected positive-dimensional case; rejudge. |
| `cor-suspension-isomorphism-in-reduced-singular-homology` | `confirmed_nonfatal` | The reduced Mayer–Vietoris segment follows immediately from the supplied unreduced sequence by inserting the augmentation in degree zero; the two cone terms then vanish in reduced homology. Fatal-only rule: no judge-licensed edit. The distinct undefined-hypothesis warning below independently licensed a repair. |
| `def-barycenter-and-affine-cone-on-a-singular-chain` | `confirmed_fatal` (`other`) | An arbitrary boundary chain in `X` cannot canonically be joined to the barycenter of a simplex. Made an affine lift in the standard simplex part of the cone input; rejudge. |
| `def-barycentric-subdivision-prism-homotopy` | `false_positive` | This item defines `b_n` as the affine cone on arbitrary chains in the convex standard simplex before applying it; it does not use the narrower `b_\sigma` interface alleged by the rejection. No edit. |
| `def-mayer-vietoris-connecting-class` | `confirmed_fatal` (`other`) | The construction lacked its coefficient group, open-cover hypothesis, and degree range. Fixed an abelian group `G`, `X=U\cup V` with `U,V` open, and `n\geq1`; rejudge. |
| `def-morse-trajectory-from-p-to-q` | `confirmed_fatal` (`other`) | A negative gradient trajectory was invoked without the Riemannian metric determining the gradient. Fixed a metric `g` and the vector field `-\operatorname{grad}_g f`; rejudge. |
| `def-negative-gradient-trajectory-of-a-morse-function` | `confirmed_fatal` (`logic`) | The claimed equivalence with an ODE admitted proper restrictions of maximal flow lines. Added maximality of the interval of definition to the ODE characterization; rejudge. |
| `def-singular-chain-complex-of-a-pair` | `confirmed_fatal` (`other`) | Only quotient groups were specified, so the named chain complex lacked its differential. Defined the quotient boundary and linked its well-definedness lemma; rejudge. |
| `ex-cover-small-chains-for-the-two-arc-cover-of-a-circle` | `confirmed_fatal` (`logic`) | Subdividing only at the arc endpoints did not make the closed edges lie in either open arc. Chose points in the two overlap components and paths carried separately by `U` and `V`; rejudge. |
| `ex-fusion-rules-for-a-supplied-finite-simple-family` | `confirmed_fatal` (`dependency_citation`) | The cited example did not state that `k` was the complete simple family. Derived that assertion directly from finite-dimensional bases; rejudge. |
| `ex-mayer-vietoris-computation-of-sphere-homology` | `confirmed_nonfatal` | As in the suspension item, the reduced sequence used here is the immediate augmented-chain form of the supplied unreduced Mayer–Vietoris sequence. No edit. |
| `ex-relative-homology-of-a-disk-and-its-boundary` | `confirmed_fatal` (`logic`) | For `n=1`, the connector lands isomorphically on the augmentation kernel, not all of `H_0(S^0;G)`. Identified that kernel and parameterized the classes by arbitrary `g\in G`; rejudge. |
| `ex-relative-homology-of-an-interval-and-its-endpoints` | `confirmed_fatal` (`other`) | The example used a distinguished `1` and cyclic generator for arbitrary `G`. Replaced it by `g\in G` and the exact kernel map `g\mapsto(-g,g)`; rejudge. |
| `ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces` | `confirmed_fatal` (`dependency_citation`) | The fusion-category dependency did not supply uniqueness of the simple class. Derived the sole-simple assertion directly from a basis decomposition; rejudge. |
| `lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision` | `false_positive` | The proof pulls the open cover back along each simplex to the compact metric domain `\Delta^n`; the Lebesgue-number and mesh arguments are applied there, not to arbitrary `X`. No edit. |
| `lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant` | `confirmed_nonfatal` | The omitted compact-continuation argument is local and immediate: convergence to a compact limit point gives a common short existence interval, and finitely many iterations give any fixed time; applying the same argument to negative time gives equality. No edit. |
| `lem-singular-boundary-descends-to-relative-chains` | `false_positive` | The opened singular-boundary convention sets negative chain groups to zero and `\partial_0=0`, so the degree-zero map is defined. No edit. |
| `lem-stable-and-unstable-manifolds-are-flow-invariant` | `confirmed_nonfatal` | The local-flow group law and inverse follow directly from the uniqueness part of the opened maximal-flow theorem and are also derived in its proof; the omitted one-line invocation is nonfatal. No edit. |
| `prop-relative-homology-of-the-empty-and-total-subspace` | `false_positive` | The page summary globally fixes an abelian coefficient group `G`, so the proposition is typed under the page convention. No edit. |
| `thm-an-exact-k-linear-strong-monoidal-functor-out-of-a-tensor-category-is-faithful` | `confirmed_fatal` (`logic`) | The local multitensor definition admits the zero target, whose strong monoidal zero functor is not faithful. Required a nonzero target unit and aligned the proof; rejudge. |
| `thm-cover-small-inclusion-is-a-chain-homotopy-equivalence` | `confirmed_fatal` (`logic`) | Independent subdivision depths on simplices did not define a chain map when face depths differed. Replaced the construction by Hatcher’s depth-dependent prism correction; rejudge. |
| `thm-cover-small-singular-chains-compute-singular-homology` | `confirmed_nonfatal` | The prism and subdivision operators preserve a simplex’s image support, hence preserve cover-small chains; this immediately supplies the alleged missing subcomplex boundary. No edit. |
| `thm-excision-for-singular-homology` | `confirmed_nonfatal` | The same support preservation makes the small-chain homotopies preserve chains in `A` and `A-Z`, so they descend to the displayed relative quotients. No edit. |
| `thm-left-and-right-dual-objects-are-isomorphic-in-a-semisimple-multitensor-category` | `confirmed_fatal` (`logic`) | One displayed transposition used the left dual where the right dual was required, and the arbitrary-field dimension claim was not justified. Corrected the transposition and proved the Hom-dimension equality from semisimple decompositions over arbitrary `k`; rejudge. |
| `thm-long-exact-sequence-of-a-pair-in-singular-homology` | `confirmed_fatal` (`logic`) | The statement claimed naturality although this item proved only exactness and the next theorem owns naturality. Removed that overclaim; rejudge. |
| `thm-naturality-of-singular-mayer-vietoris` | `confirmed_fatal` (`other`) | The theorem permitted a set map although the induced singular-chain map requires continuity. Required a continuous cover-preserving map; rejudge. |
| `thm-simplicial-and-singular-homology-agree-for-simplicial-complexes` | `false_positive` | The page summary globally fixes the abelian group `G`, so both complexes and the comparison map have a declared coefficient object. No edit. |
| `thm-tensoring-with-a-dualizable-object-preserves-projectives` | `confirmed_fatal` (`logic`) | The proof used a left dual for both tensor orientations. Used a left dual for `P\otimes X` and a right dual for `X\otimes P`; rejudge. |
| `thm-the-unit-object-of-a-multitensor-category-is-semisimple` | `confirmed_fatal` (`logic`) | The proof falsely identified each component-unit endomorphism field with `k`. Replaced this by the field-factor decomposition of the finite-dimensional commutative reduced endomorphism algebra; rejudge. |

## Step-7 reader-warning dispositions

| alert | item | outcome | disposition |
|---|---|---|---|
| `s8a-93b925f4c1ffce51fe33418e` | `thm-an-exact-k-linear-strong-monoidal-functor-out-of-a-tensor-category-is-faithful` | `covered_by_rejection` | The warning and judge rejection identify the same zero-target counterexample; the judge-confirmed fatal repair adds the nonzero-unit hypothesis. |
| `s8a-76e67cbce18449dc106b5592` | `thm-left-and-right-dual-objects-are-isomorphic-in-a-semisimple-multitensor-category` | `covered_by_rejection` | The judge-confirmed fatal repair corrects the dual transposition and, independently of the source’s algebraically closed standing hypothesis, proves the needed dimension equality over arbitrary fields. |
| `s8a-bef3f6664e848ad42bdaec3b` | `cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient` | `covered_by_rejection` | The same undefined decisive hypothesis is repaired under the exact judge licence. |
| `s8a-9572fde0899aae1f37932e53` | `cor-suspension-isomorphism-in-reduced-singular-homology` | `confirmed_fatal` (`other`) | Guard `8b6d947bb4ba0529269d36aaa4d9250d80a3f254b06fb090a85f6cf99fc17eed` repaired to `de232ba7929c99ad2cf539d29f4608e19afd284ff4ba97d4eb8d517491647f89`. The statement now defines well-pointed to mean that the basepoint inclusion is a cofibration. |
| `s8a-7a16928d2f2e586234d0b01d` | `lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant` | `nonfatal` | Compact continuation closes the domain-of-flow omission immediately; no content change was warranted. |

## Primary sources consulted

- Etingof, Gelaki, Nikshych, and Ostrik, *Tensor Categories*,
  <https://math.mit.edu/~etingof/egnobookfinal.pdf>: §4.3, especially
  Theorems 4.3.1 and 4.3.8, supplies the standard unit-semisimplicity argument;
  §4.8, Proposition 4.8.1, supplies left/right dual isomorphism in the source’s
  standing algebraically closed setting; and §4.16 explicitly marks that
  field restriction. The local repairs therefore prove the required
  arbitrary-field refinements instead of silently importing the stronger
  source scope.
- Hatcher, *Algebraic Topology*, Chapter 2,
  <https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf>: Proposition 2.21 defines
  `D_m=\sum_{0\leq i<m}TS^i`, chooses a least subdivision depth for each
  simplex, and uses the boundary correction
  `\rho\sigma=S^m\sigma+D_m(\partial\sigma)-D(\partial\sigma)`; its construction
  preserves support. Proposition 2.22 gives the quotient theorem under the
  closed deformation-neighborhood definition of a good pair. The augmented
  chain-complex discussion gives the reduced Mayer–Vietoris form used in the
  two nonfatal decisions.
- May, *A Concise Course in Algebraic Topology*, revised edition,
  <https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf>: §14.3 uses a
  nondegenerately based space—equivalently here, a basepoint inclusion that is
  a cofibration—and supplies the natural reduced suspension isomorphism.

## Rejudge targets

The exact changed-item target set is:

- `cex-one-subdivision-depth-does-not-make-all-singular-simplices-cover-small`
- `cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient`
- `cor-homology-of-spheres`
- `cor-suspension-isomorphism-in-reduced-singular-homology`
- `def-barycenter-and-affine-cone-on-a-singular-chain`
- `def-mayer-vietoris-connecting-class`
- `def-morse-trajectory-from-p-to-q`
- `def-negative-gradient-trajectory-of-a-morse-function`
- `def-singular-chain-complex-of-a-pair`
- `ex-cover-small-chains-for-the-two-arc-cover-of-a-circle`
- `ex-fusion-rules-for-a-supplied-finite-simple-family`
- `ex-relative-homology-of-a-disk-and-its-boundary`
- `ex-relative-homology-of-an-interval-and-its-endpoints`
- `ex-the-grothendieck-ring-of-finite-dimensional-vector-spaces`
- `thm-an-exact-k-linear-strong-monoidal-functor-out-of-a-tensor-category-is-faithful`
- `thm-cover-small-inclusion-is-a-chain-homotopy-equivalence`
- `thm-left-and-right-dual-objects-are-isomorphic-in-a-semisimple-multitensor-category`
- `thm-long-exact-sequence-of-a-pair-in-singular-homology`
- `thm-naturality-of-singular-mayer-vietoris`
- `thm-tensoring-with-a-dualizable-object-preserves-projectives`
- `thm-the-unit-object-of-a-multitensor-category-is-semisimple`

The first 20 are judge-confirmed fatal repairs. The suspension corollary is
the additional independently reader-licensed repair. No other assigned item
is a rejudge target.

## Validation and blockers

- Focused precheck on the 21 changed items: 16 proof-bearing items checked,
  zero failures; definition-only files were correctly omitted by that checker.
- Focused rendercheck on all 21 changed items: zero errors and zero warnings.
- Focused manifest audit on batches 7, 12, and 20: 226 dependency
  relationships over 97 items, zero defects.
- Defect-ledger closure check: 628 `frontier-31a` rows checked, zero errors.
- The required Step-8 scope check was run. It reports eight unanswered reader
  warnings, all owned by other groups; every group-g rejection and warning is
  closed.
- The required whole-level Step-8 guard was run after restoring group g's
  append-only rows. It reports 101 unlicensed changes, all owned by groups b,
  c, or h, and no group-g error. Those out-of-group items were not modified
  here.
- No group-local mathematical or access blocker remains.
