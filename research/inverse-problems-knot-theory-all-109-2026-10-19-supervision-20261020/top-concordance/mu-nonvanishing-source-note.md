# Muñoz product-closure calculation: exact source and proof map

Distinct read-only source task; no TOP74 repair cycle, canonical edit, or proof
acceptance. Coordinated target: connected closed surface of every genus
`g ≥ 1`, determinant-one gauge, `c₁(w)=PD[S¹×pt]`, and simultaneous ordinary
eigenvalues `(µ(Σ),µ(pt))=(2g−2,2)`; rational coefficients in the original.

Recovered actual full source: Vicente Muñoz, *Ring structure of the Floer
cohomology of Σ × S¹*, https://arxiv.org/pdf/dg-ga/9710029 (v1, 27 October
1997), fourteen PDF pages. Cached `munoz-ring.pdf`, SHA256
`d9b2429f41c98c023179876f555c1c872db562d46f69251dea7b4ecde7b79c7c`,
with extracted `munoz-ring.txt`. Read the entire extracted paper; visually
checked actual PDF pages 8, 10, 11 for the insertion, signs and recurrences.
This is the authoritative author preprint of the Topology 38 (1999), 517–528
article, DOI https://doi.org/10.1016/S0040-9383(98)00028-7; no comparison with
the final publisher text is claimed. The archive is **dg-ga**, not alg-geom.

Also recovered https://arxiv.org/pdf/dg-ga/9702002, *Gluing formulae for
Donaldson invariants for connected sums along surfaces*, eighteen PDF pages,
cached `munoz-gluing.pdf`, SHA256
`46b4f8b2edf541b4e8edbeb5e5a312972e4a3d8a1ae1b681f36d673a08f6ec1c`.
Read its Proposition 3/Remark 4 and Definition 25/Propositions 26–27 with their
proofs (PDF pp.2–3,14–16), not the entire second paper. The existing KM
*Knots, sutures and excision* cache, §7.1–7.2, was read for the conventions.

## Exact source argument

Muñoz works over **C**, in a **Z/4-graded quotient gauge convention**. KM
identifies this with `I(S¹×Σ)_(w,Σ)`, the fixed part of the degree-four
involution on determinant-one, Z/8-graded `I(S¹×Σ)_w`. It is not the full
group. Muñoz's operators are `α=2µ(Σ)`, `β=−4µ(pt)`.

- Ring paper §3, pp.4–6: gluing pairs relative invariants by
  `D_X^(w,Σ)(z₁z₂)=<φ(X₁,z₁),φ(X₂,z₂)>`, where
  `D^(w,Σ)=D^w+D^(w+Σ)`. The insertion basis is
  `e_s=φ(Σ×D²,Σⁿxᵐγ_i₁…γ_iᵣ)`. Multiplication is multiplication of
  insertions; `φ(A,1)` is the unit. Equation (4) identifies the actual
  surface/point operators with `2φ(A,Σ)` and `−4φ(A,x)`.
- Lemma 11, pp.7–8, gives the **torus quotient** as
  `C[α,β,γ]/(α,β−8,γ)`. Its point eigenvalue is **−2**. The proof uses the
  K3 elliptic fiber and the actual Donaldson values
  `D_S^(w,Σ)(1)=−1`, `D_S^(w,Σ)(Σᵈ)=0` for `d>0`, and
  `D_S^(w,Σ)(x)=2`. Pairing with the complementary relative invariant then
  gives `φ(S°,x)=−2φ(S°,1)`. Two critical points alone do not establish this
  insertion value.
- Proposition 12, p.8, constructs a **nonzero** extremal vector, rather than
  inferring existence from a candidate eigenvalue. It uses
  `C_g=B_g #_(Σ_g) B_g`, with `B_g` obtained from an elliptic surface by
  blowups, and the Donaldson series calculated in gluing Proposition 27.
  For even `g`, set `v=φ(C_g°,Σ+(2g−2))`. For the insertion `z_s` above,
  its pairing is zero if `r>0`, and otherwise
  `−2^(3g−4)(2g−2)^(n+1)2^m`. In particular the pairing with the unit is
  nonzero. Multiplying the insertion by `2Σ` or `−4x` proves
  `αv=4(g−1)v`, `βv=−8v`, `γv=0`. Odd genus has
  `αv=4(g−1)i v`, `βv=+8v`. The paper leaves the analogous odd-genus
  calculation to the reader; gluing Proposition 3 and Remark 4 explicitly
  provide the imaginary-exponential and negative point-insertion branch.
- Theorem 10 plus Proposition 12 proves Theorem 14's constants, then
  Theorem 16's presentation. Its recurrence, with `R₀=(1,0,0)`, is
  `R¹_(r+1)=αR¹_r+r²R²_r`,
  `R²_(r+1)=(β+(−1)^(r+1)8)R¹_r+2r/(r+1)R³_r`,
  `R³_(r+1)=γR¹_r`. The full quotient is the sum of primitive exterior
  factors tensored with `C[α,β,γ]/J_(g−k)`.
- Proposition 20, pp.10–11, proves the spectrum from this recurrence.
  Equations (6)–(7) give the Artinian decomposition and show that the
  extremal eigenvalue occurs only in the `k=0` invariant factor. The paper
  does **not** state the one-dimensional conclusion as a separate theorem;
  KM Proposition 7.4 reads it from this proof. Its later symmetric-product
  decomposition is explicitly Conjecture 24 and is unnecessary.

## Explicit finite algebra extracting the simple extremal block

The following fills the dimension step, conditional on the actual presentation,
without using Conjecture 24. Localize `C[α,β,γ]/J_g` at the extremal point
`(a,b,0)`, where `(a,b)=(4(g−1),−8)` for even `g`, and
`(4(g−1)i,+8)` for odd `g`. The value of `R¹_(g−1)` there is nonzero: the
lower-genus spectrum omits this extremal point, or this follows directly from
the recurrence below. Thus `R³_g=γR¹_(g−1)` forces `γ=0`, and `R²_g`
forces `β=b`. After these substitutions, writing `q_r=R¹_r`,

`q_(2m)(α,−8,0)=∏_(j=1)^m(α²−16(2j−1)²)`,

`q_(2m+1)(α,+8,0)=α∏_(j=1)^m(α²+64j²)`.

Both identities follow by induction in the displayed recurrence. At the
extremal root `a` the relevant `q_g` has a simple zero. Its remaining factor
is a unit in the localization, so `α=a`. The localized algebra is therefore
exactly C, including its nilpotent structure. Nonzeroness follows from the
nonzero vector of Proposition 12; lower primitive summands have strictly
smaller extremal eigenvalues. For `g=1` use Lemma 11 directly. This proves
ordinary and generalized extremal multiplicity one in Muñoz's quotient.

For **odd genus**, including the torus, the desired real positive surface
eigenvalue and point eigenvalue `+2` lie in the other involution sector of
the full determinant-one theory. The finite grading argument is: on a
Z/8-graded complex vector space set `D|_(degree j)=exp(πij/4)`. A degree-four
involution anticommutes with `D`, so `D` interchanges its sectors. Conjugation
rotates the degree-two surface operator by `i` or `−i`, and negates the
degree-four point operator. Choose `D` or `D⁻¹` to carry the imaginary
positive extremal eigenvalue to `2g−2`. The opposite sector has the rotated
spectrum, so it contributes no extra vector to that simultaneous eigenpair.
This also sends the torus quotient point value `−2` to the required `+2`.
The actual gauge-quotient/involution/graded-operator identification must still
be supplied in the local theory; linear algebra cannot establish that geometric
identification by itself.

Finally rational descent requires no rational choice of `D`: if the original
finite-dimensional group and both µ operators are defined over Q, its target
simultaneous eigenspace is the kernel of the rational map
`v ↦ ((µ(Σ)−(2g−2))v,(µ(pt)−2)v)`. Tensoring this map with C preserves
its kernel and dimension. Complex dimension one therefore gives Q dimension
one. That is an algebraic consequence once the rational theory is available.

## Remaining local authoring obligations

The source supplies a complete *published-proof route*, not a local proof
already present in the library. Its imports remain substantial: the actual
relative-invariant pairing/product/insertion construction; the insertion-basis
and primitive decomposition; K3/elliptic-surface Donaldson nonvanishing and
point-insertion values; the genus-two gluing calculation used in gluing
Proposition 27; and the quotient-to-determinant-one graded involution bridge.
The ring paper itself cites these results rather than proving all their
analytic foundations. Gluing Proposition 27 in turn uses its [18] genus-two
gluing theorem, elliptic-surface formulas, and admissible identification data.
Its calculation must not be silently promoted to an accepted local supplier.

The new concrete gain is the exact insertion witness, torus sign correction,
primitive/local-algebra multiplicity calculation, and coefficient/gauge
translation. This note claims no local nonvanishing theorem completed and no
unread source proof reviewed.
