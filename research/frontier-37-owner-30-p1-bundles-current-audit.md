# B7 projective-line bundle chain: current mathematical audit

## Scope and result

Audited the complete current bodies of these four targets and their declared
direct supplier interfaces:

| Item | Raw SHA-256 |
|---|---|
| `lem-vector-bundle-p1-has-maximal-degree-line-subbundle` | `62ac2f6505e2dbe3d3450331cafaba92d23cdf3198e2616ee79fc419d0d45b5d` |
| `lem-vector-bundle-p1-maximal-line-quotient-locally-free` | `eb878cc8df45c24a28642d3f3b486a174b6fe7a46c0955f411cf3c85dd58ffc4` |
| `lem-vector-bundle-p1-extension-splits` | `732bf2672fa5af8373f5b3759673c9782095093841ca915bddf721c916b36b1c` |
| `thm-birkhoff-grothendieck-vector-bundles-p1` | `9b21cbf30c065fd888a2c4b192d5e44d0c87b7422d681109f547e8734005006f` |

The union of the four targets' declared direct suppliers has 57 unique IDs.
I read the actual target proofs and the supplier interfaces used for the
arbitrary-field, cohomology, Picard, affine-local, and choice arguments. The
current B5 supplier closures are reported by the root as 46/46 closed; old
“not yet authored” notices in historical item prose are not treated as current
mathematical defects.

The existence, local-freeness, splitting, degree indexing, uniqueness, and
arbitrary-field claims in the complete Birkhoff–Grothendieck route are
mathematically sound. There is one standalone contract/proof precision issue
in the first lemma: its proof establishes an invertible subsheaf, but says this
is a line subbundle without proving the quotient locally free. The later
maximal-quotient lemma proves that property for the maximal section used by
the theorem, so this gap does not invalidate the theorem's induction route.

## Item-by-item audit

### `lem-vector-bundle-p1-has-maximal-degree-line-subbundle`

The extremal-degree construction is valid over every field. Eventual global
generation makes
`S = { n in Z : H^0(P^1_k,E(n)) != 0 }` nonempty. For any `n` in `S`, a
nonzero section gives an injection `O(-n) -> E`; left exactness of `H^0`
embeds `H^0(O(-n))` into finite-dimensional `H^0(E)`. The formula for
`h^0(O(d))` then bounds `n` below. Taking `a=min S`, `b=-a` gives the two
stated section conditions, and every injective map `O(d) -> E` has
`-d in S`, hence `d <= b`. These arguments use no algebraic closure,
perfectness, or characteristic restriction.

At proof step 4.1, injectivity only shows that the image is isomorphic to
`O(b)`. It does not by itself show that the quotient is locally free, which
is part of the standard meaning of “line subbundle.” Thus the literal
standalone existence clause is not yet proved under that meaning. The proof
does establish the stronger degree bound for every invertible subsheaf, and
the later quotient lemma supplies local freeness for the selected maximal
map in the Birkhoff–Grothendieck proof.

Two concrete ways to close the standalone contract are:

1. State the result as existence of an invertible subsheaf of maximal degree;
   this is exactly what step 4.1 proves and step 4.2 bounds.
2. Retain “line subbundle” and prove the chosen image is saturated. On the
   regular curve `P^1_k`, saturate the rank-one image in `E`. Locally over a
   DVR, saturation is a rank-one free submodule with torsion-free (therefore
   free) quotient. The saturation is consequently an invertible sheaf and
   its quotient in the image is a finite torsion sheaf. If that torsion is
   nonzero, its positive length, weighted by the residue-field degree at its
   closed support, makes the saturated line's degree strictly greater than
   `b`. By `Pic(P^1_k)=Z`, it is `O(d)` with `d>b`; its inclusion in `E`
   gives a nonzero element of `H^0(E(-d))`, contradicting the minimality of
   `a`. This needs the local DVR saturation/degree-increment argument made
   explicit (or supplied), rather than inferred from injectivity.

### `lem-vector-bundle-p1-maximal-line-quotient-locally-free`

The local-freeness argument is valid for arbitrary `k`. After twisting the
maximal extension, the long exact sequence and
`H^0(O(-1))=H^1(O(-1))=0` give `H^0(F(-b-1))=0`. If `F(-b)` had a nonzero
local section annihilated by a nonzero function, the proof restricts to a
standard affine chart and a principal neighborhood, tensors with a frame of
`O(-1)`, and obtains a nonzero local section of `F(-b-1)`. The zero locus of
the function is a finite set of closed points of `P^1_k`; gluing the section
with zero off that set gives a nonzero global section, a contradiction. This
establishes torsion-freeness without requiring the nonzero-germ locus of a
section to be open.

On each chart the ring is `k[t]` or `k[u]`. Coherence gives local finite
generation; quasi-compactness gives a finite principal-open cover. Lifting
generators on each localization and using that the covering functions
generate the unit ideal proves the module of sections is finitely generated.
It is torsion-free by the preceding argument, hence free over the chart PID.
The quotient is therefore finite locally free. The stalk sequence then
shows its rank is `r-1`. The finite-point and localization steps hold over
arbitrary fields, including non-algebraically-closed fields.

### `lem-vector-bundle-p1-extension-splits`

The induction is correctly indexed. For
`0 -> O(c) -> E -> direct_sum O(c_i) -> 0`, with each `c_i <= c`, choose a
minimal `c_r` and twist by `-c_r`. The remaining quotient summands have
degrees `c_i-c_r >= 0`, and the kernel has degree `c-c_r >= 0`; their
`H^1` groups vanish. The long exact sequence first lifts the unit section
from the `O` summand to `E(-c_r)`. The resulting retraction splits off that
summand. Its complement is the extension with kernel `O(c-c_r)` and the
remaining quotient summands, whose degrees are at most `c-c_r`; induction
then gives the claimed splitting. Twisting back restores `O(c)` and the
original summands. These steps are valid over arbitrary fields; no Ext
classification or characteristic assumption is hidden in the proof.

### `thm-birkhoff-grothendieck-vector-bundles-p1`

The proof's rank induction correctly uses the maximal section, normalizes it
to `O -> M`, applies the quotient lemma to obtain a finite locally free
quotient, and uses `H^0(W(-1))=0` to show every summand in the inductive
decomposition of `W` has degree `n_i <= 0`. The extension-splitting lemma
then applies with `c=0`; twisting back gives `O(b)` and the `O(n_i+b)`
summands. The quotient lemma itself checks local freeness of the chosen
maximal image, so the theorem's induction does not rely on the unsupported
standalone wording at step 4.1 of the first lemma.

The uniqueness calculation is consistent: for
`E = direct_sum O(a_i)`,
`h^0(E(m))-h^0(E(m-1)) = #{i : a_i >= -m}`. Evaluating at `m=-t` recovers
`#{i : a_i >= t}` for every integer `t`, which determines the multiset.
Rank one is covered by the arbitrary-field Picard classification. The
equivalence between finite locally free sheaves and geometric vector
bundles transfers the result to the stated language.

## Choice and provenance

The targets retain the Axiom of Choice inherited from their cited
cohomology, global-generation, affine, curve, Picard, and related suppliers.
The arguments make only the recorded finite choices; they add no
perfect-field or algebraic-closure hypothesis. The target front matter marks
the statements literature-derived and proofs AI-altered, citing Artin,
*Introduction to Algebraic Geometry*, Chapter 8, and Vakil, *The Rising Sea*.
I checked the latter's full text: §18.5.5, Theorem 18.5.6, pp. 516–518 gives
the arbitrary-field splitting theorem and the standard proof route through
maximal degree, locally free quotient, and extension splitting; the details
are assigned in Exercises 18.5.E–I. The target's broad Vakil chapter range
can be made more precise to that location if citation refinement is later
authorized. This audit made no target, supplier, carrier, receipt, scope,
or check changes.

## Follow-up: authorized repairs

The root released the two exact item repairs and this report. The maximal-line
lemma now retains its stated “line subbundle” conclusion and proves saturation
directly, without depending on the later quotient lemma. The Picard corollary
retains its statement and Choice qualifier while declaring the actual
Cartier/Picard/degree suppliers it already used.

### Maximal-degree line subbundle

Before: raw SHA-256
`62ac2f6505e2dbe3d3450331cafaba92d23cdf3198e2616ee79fc419d0d45b5d`;
Statement-block SHA-256
`b89e5fae4096701ade70398289657d9aba4fd22e56ee41ad916339a83961d351`.
After: raw SHA-256
`fbb43ace1eb29cb929198cdab3e0c6d4bd7bb477e4861ae03d46d917dd15ebf1`;
Statement-block SHA-256
`b89e5fae4096701ade70398289657d9aba4fd22e56ee41ad916339a83961d351`.

For any `phi: O(b) -> E` that is nonzero, if all its local coefficients at a
closed point `p` lay in the maximal ideal, division by a uniformizer would
extend `phi` to a nonzero map `O(b) tensor O(p) -> E`. The actual degree and
Picard suppliers identify this source with `O(b + [kappa(p):k])`. Its nonzero
section of `E(-b-[kappa(p):k])` contradicts the minimality of `a=-b`. Hence a
coefficient is a unit at every closed point. A local basis change makes the
image a direct summand there; at the generic point the nonzero map also has a
local direct-summand image. This proves locally free quotient and injective
image for every such `phi`. For any line subbundle of degree `d`, Picard
classification identifies it with `O(d)`; its inclusion gives `-d in S`,
so `d <= b`.

The new direct dependencies are `thm-local-ring-smooth-curve-dvr`,
`def-cartier-divisor`, `def-effective-cartier-divisor`,
`def-invertible-sheaf-of-cartier-divisor`, `lem-cartier-divisor-addition-tensor`,
`lem-projective-line-divisors-classified-by-degree`,
`cor-degree-descends-picard-curve`, and `cor-picard-projective-line-integers`.
These expose the DVR uniformizer, point Cartier equation, associated line,
positive residue-field degree, and arbitrary-field Picard-degree
classification used in the proof. The Choice premise now records the added
DVR and degree/Picard suppliers.

### Picard group of the projective line

Before: raw SHA-256
`711e328e212e01870011351b49c4775e4ab7059cde6e5aed14c0b499fc0c0de0`.
After: raw SHA-256
`29ea0879af8e57dbc91f006d4be7416255837eaf1c070e09021365a4d1705a49`;
Statement-block SHA-256
`002f75292288e379c89c123be136e1a05bb17289c3574fd4bf53ff2aca5107e6`.

The direct dependencies now include the four current suppliers actually
invoked in the previous Facts [F5]:
`thm-cartier-divisors-mod-principal-to-picard`,
`def-invertible-sheaf-of-cartier-divisor`,
`lem-cartier-divisor-addition-tensor`, and
`cor-degree-descends-picard-curve`. Removed the stale “not yet authored”
supplier-obligations text from the Statement and Facts, and changed proof
references from a flagged obligation to the actual dictionary and degree
interfaces. The statement and inherited Choice qualifier are unchanged.

### Selected local checks

- `precheck` on the two targets: the first attempt found that the new subbundle
  step needed an explicit dependency on the extremal-degree step. Added its
  `[step 3.1]` citation; the targeted retry passed. The final targeted pass on
  both items passed (2 checked, 0 failing).
- `rendercheck` on both targets passed, including frontmatter parsing and
  KaTeX parsing.
- `citecheck` reported one heuristic add-order warning on the Picard target's
  phrase “compatibility with addition.” It is justified: the proof invokes the
  group homomorphism/tensor-product compatibility in the declared actual
  dictionary and `lem-cartier-divisor-addition-tensor`. I left the warning
  intact rather than adding an unrelated order dependency or disguising the
  mathematical step.
- No repo-wide dependency check or gate was run.
