# Researcher 03 — EGNO, *Tensor Categories*

## Source identity, retrieval, and reading are distinct

- **Source:** Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor
  Ostrik, *Tensor Categories*, Mathematical Surveys and Monographs 205,
  American Mathematical Society, 2015.  The title page, four authors, series,
  publisher, ISBN, and 2015 copyright occur in the cached body.
- **Author-final URL fetched and rechecked:**
  <https://math.mit.edu/~etingof/egnobookfinal.pdf>.  On 2026-09-07 it returned
  `200 OK`, `Content-Type: application/pdf`, `Content-Length: 3067397`, and
  the byte stream hashed to
  `a40d076197b666d8b3b231ac59748a95f9b311d49ce57f4024c0da8308796db3`.
- **Cached complete body:**
  `scratchpad/source-cache/braid-groups/egno-tensor-categories.pdf`; the same
  SHA-256.  `mutool info` reports 362 PDF pages.  The paired full extraction
  `egno-tensor-categories.txt` has 173,327 words and reaches the back-cover
  text after the index (including the terminal index entry “Yang-Baxter
  equation, 196”).  The PDF itself repeatedly identifies this as the authors'
  final version made available with AMS permission.  This establishes complete
  retrieval/body validation, **not** complete reading.
- **Actually read:** title/copyright/contents; §§2.7--2.10, printed pp. 35--42;
  §4.7, pp. 73--75; §§8.1--8.3, pp. 195--200; §8.9, pp. 214--216; and
  §8.10, pp. 216--218.  I did not read the remaining chapters or use them as
  evidence.

## Existing ownership: do not recreate category-theory foundations

The published library already owns the following exact material, so BG-11 must
depend on it rather than mint synonyms.

| EGNO material actually read | Published owner and disposition |
|---|---|
| Def. 2.7.1, pp. 35--36: an action is a monoidal functor `Cat(G) -> Aut(C)` with compositors `gamma_{g,h}` | `def-group-action` is the generic supplier.  BG-12 may add only the category-valued specialization `def-weak-action-of-a-group-on-a-category`; cite EGNO §2.7 and make its monoidal-functor/compositor pentagon explicit. |
| Thm. 2.8.5 and Thm. 2.9.2, pp. 36--40: strictification and ordinary monoidal coherence | `thm-mac-lane-strictification` and its page own this.  It is **not** a proof of coherence for chosen isomorphisms between arbitrary braid-generator functors. |
| Defs. 2.10.1--2.10.2, Def. 2.10.11, pp. 40--42: duals and rigidity | `def-left-dual-and-right-dual-object`, `def-rigid-object-and-rigid-monoidal-category`; inline/inherited. |
| Defs. 4.7.1, 4.7.7--4.7.8, 4.7.11, 4.7.14; Prop. 4.7.3; Thm. 4.7.15, pp. 73--75 | `def-the-categorical-trace-of-a-morphism-into-the-double-dual`, `def-pivotal-structure`, `def-the-dimension-of-an-object-relative-to-a-pivotal-structure`, `def-spherical-structure`, `thm-basic-properties-of-the-categorical-trace`, and `thm-in-a-spherical-category-the-left-and-right-traces-agree`; inline/inherited. |
| Defs. 8.1.1--8.1.2 and Prop. 8.1.10, pp. 195--197 | `def-braiding`, `def-braided-monoidal-category`, `thm-in-a-strict-braided-monoidal-category-the-braiding-satisfies-the-yang-baxter-equation`; inline/inherited. |
| Def. 8.1.7, p. 196 | `def-braided-monoidal-functor`; inline/inherited.  BG-11's proposed intertwiner is a legitimate *application* of its defining square, not a replacement definition. |
| Ex. 8.2.4, Rem. 8.2.5, Ex. 8.2.7, pp. 197--198 | `def-the-braid-category`, `thm-the-braid-category-is-the-free-strict-braided-monoidal-category-on-one-generator`, and `thm-braided-coherence-via-underlying-braids`; inline/inherited. |
| Formula (8.30), Prop. 8.9.3, pp. 214--215 | `thm-a-braided-rigid-category-has-a-drinfeld-morphism`; inline/inherited. |
| Def. 8.10.1 and the sentence after (8.35), pp. 216--218 | `def-twist-and-ribbon-structure` and `thm-a-twist-on-a-braided-rigid-category-is-the-same-thing-as-a-pivotal-structure-of-drinfeld-type`; inline/inherited. |

This confirms the plan's basic ownership boundary: BG-11 may own the
application from an object/Yang--Baxter operator to a braid representation and
the carefully qualified closure construction, but not braidings, duality,
trace, pivotality, sphericality, the Drinfeld morphism, or ribbon structure.

## Exact harvest and disposition

| Material read; exact locator | What it establishes and an authorable proof route | Disposition |
|---|---|---|
| §2.7, Defs. 2.7.1--2.7.2, pp. 35--36 | A weak category action is not a homomorphism into literal equalities: it has autoequivalences and coherent `gamma_{g,h}:T_gT_h -> T_{gh}`.  The monoidal-functor axioms are the pentagon and unit equations. | **Included** only in BG-12 `def-weak-action-of-a-group-on-a-category`; inherit general group-action language. |
| §2.8 Thm. 2.8.5, pp. 36--39; §2.9 Thm. 2.9.2, pp. 39--40 | Strictification handles associators/unitors.  The coherence theorem compares composites made only from associators, unitors, and inverses. | **Inline/inherited**; do not use as the categorical-generator coherence theorem. |
| §2.10 Defs. 2.10.1--2.10.2, Prop. 2.10.5, Def. 2.10.11, pp. 40--42 | Evaluation/coevaluation and zig-zags type duality; rigidity requires both duals; duals are unique up to unique compatible isomorphism. | **Inline/inherited**.  It is a prerequisite for any closure trace, not a new BG-11 item. |
| §4.7 Def. 4.7.1, Prop. 4.7.3, Defs. 4.7.7--4.7.8, 4.7.11, 4.7.14, Thm. 4.7.15, pp. 73--75 | A bare trace has type `Tr_L(a)` for `a:V -> V**`; pivotal `a_V` turns an endomorphism into a traceable map; cyclicity has the double-dual correction; sphericality equates the resulting left/right traces. | **Inline/inherited**.  BG-11 must use the pivotal map induced by its ribbon structure, not write `Tr(f)` in a merely braided category. |
| §8.1 Defs. 8.1.1--8.1.2, Def. 8.1.7, Prop. 8.1.10, pp. 195--197 | Hexagons and naturality give the strict Yang--Baxter equation; diagram (8.5) is the braided-functor square.  Prop. 8.1.10's proof is exactly: two hexagon triangles plus the middle naturality square. | **Included** as source support for existing BG-11 Yang--Baxter/local-operator/functor-intertwiner applications; the underlying definitions/results remain inherited. |
| §8.2 Ex. 8.2.4, Rem. 8.2.5, Exercise 8.2.7, pp. 197--198 | `sigma_i` is the local `c_{V,V}`.  Thus it gives `B_n -> Aut(V^n)` in a strict braided category; Exercise 8.2.7 is braided coherence for canonical composites. | **Included** for `cor-an-object-of-a-braided-category-carries-canonical-braid-actions`; **inline** for the existing braid category/coherence owners. |
| §8.3 Def. 8.3.1 and Rem. 8.3.2, pp. 198--199 | A quasitriangular Hopf algebra has invertible universal `R` satisfying (8.8), hence quantum YBE `R12 R13 R23 = R23 R13 R12`; triangular means `R^{-1}=R21`. | **Deferred** to a named future quantum-groups/quasitriangular-Hopf track: BG-11 currently develops categorical and object-level operators, not a Hopf-algebra construction.  Do not silently identify the universal equation with the checked-operator Artin form without applying the flip/braiding convention. |
| §8.9 Lemma 8.9.1, formula (8.30), Prop. 8.9.3, pp. 214--215 | The Drinfeld map `u_X:X -> X**` is built by cup--crossing--cap and obeys `u_X tensor u_Y = u_{X tensor Y} c_{Y,X}c_{X,Y}` in strict notation. | **Inline/inherited**.  It explains why a twist, rather than a bare braiding, produces a pivotal trace. |
| §8.10 Def. 8.10.1, Rems. 8.10.3--8.10.4, Prop. 8.10.6, and (8.35), pp. 216--218 | A ribbon category is braided rigid with a dual-compatible twist.  Framed tangles are universal: a ribbon tensor category and object `X` give a unique ribbon-preserving monoidal functor from framed tangles; hence an `End(1)`-valued framed-link invariant.  Formula (8.35) says `j_X=u_X theta_X` is pivotal precisely when `theta` is a twist. | **Included with correction** in BG-11's closure material, as detailed below.  The categorical definitions remain inherited. |

## BG-11 audit: the closure theorem needs replacement

The planned `def-ribbon-closure-evaluation-of-a-braid-endomorphism` can be
made well typed, but it must use the ribbon-induced pivotal comparison

$$j_X=u_X\theta_X:X\longrightarrow X^{\vee\vee},$$

and define the scalar as the left categorical trace of
`j_{X^{tensor n}}` composed with the braid endomorphism (or an explicitly
equivalent fully closed ribbon diagram).  It must declare a chosen left dual and
whether the positive braid generator is the source's over-crossing.  The proposed
dependency on the existing trace/ribbon/Drinfeld items should reflect that typing.

More importantly, the proposed theorem
`thm-ribbon-closure-evaluation-is-invariant-under-categorical-markov-moves` is
too strong as written.  EGNO Remark 8.10.3 says exactly that the construction is
an invariant of **framed** links.  A Markov stabilization changes the ribbon
framing by a positive or negative kink; it is not a framed-link isotopy.  EGNO
does not state a universal ordinary-trace Markov-II theorem or supply its
normalizing scalar.

Use the following two-level replacement.

1. **Framed statement (unconditional).**  In a ribbon tensor category, the
   ribbon evaluation of the closure is invariant under framed-tangle isotopy.
   This is EGNO Remark 8.10.3, p. 216--217, via the universal
   ribbon-preserving functor from the framed-tangle category.  It supports a
   BG-11 theorem/remark about *framed, oriented, `X`-coloured links*, not a
   theorem invoking both ordinary Markov stabilizations.

2. **Unframed Markov statement (conditional, with the actual scalars).**
   Work over a field with `End(1)=k`; let `X` be a colour for which
   `theta_X=lambda id_X` with `lambda in k^times`.  A sufficient commonplace
   hypothesis is that `X` is absolutely simple (`End(X)=k`), since `theta_X`
   is an automorphism.  Put

   $$t_n(\beta)=\operatorname{Tr}_L\!\left(j_{X^{\otimes n}}\rho_n(\beta)\right).$$

   With the diagram convention in which positive stabilization closes to the
   positive ribbon kink represented by `theta_X`, the ribbon cup--crossing--cap
   identities give

   $$t_{n+1}(\iota(\beta)\sigma_n)=\lambda t_n(\beta),\qquad
     t_{n+1}(\iota(\beta)\sigma_n^{-1})=\lambda^{-1}t_n(\beta).$$

   Cyclicity gives Markov-I/conjugation invariance.  Since the exponent sum
   satisfies `w(\iota(\beta)\sigma_n^{\pm1})=w(\beta)\pm1`, the normalized
   quantity

   $$J_X(\widehat\beta)=\lambda^{-w(\beta)}t_n(\beta)$$

   is invariant under the two stabilizations and conjugation, hence is an
   oriented unframed link invariant after BG-10's Markov theorem.  If the
   adopted drawing identifies `theta` with the opposite curl, exchange
   `lambda` and `lambda^{-1}` consistently; the authored proof must include
   the local kink diagram that fixes this sign.

   No nonzero quantum-dimension condition is needed for invariance itself.
   If the intended normalization also demands that the `X`-coloured unknot
   have value one, additionally require
   `d_X=Tr_L(j_X)` to be invertible and use `d_X^{-1}J_X`.  Without the scalar
   twist condition, the local closure inserts the endomorphism `theta_X`, not
   a common scalar, so a writhe-only normalization cannot in general be
   asserted.  In particular, the ordinary ribbon trace is not universally
   invariant under either `+` or `-` stabilization; even in the scalar case it
   changes by the displayed factors unless `lambda=1`.

Thus the plan should replace its one claimed “categorical Markov moves” proof
by (i) a framed-link theorem and (ii) a separately conditional normalized
Markov-trace theorem, plus a counterexample/example comparing an unframed
stabilization before normalization.  The latter should depend on the scalar
theorem, not merely on a trace definition.  This keeps BG-10 as sole owner of
the topological Markov classification while BG-11 supplies the categorical
calculation.

## BG-12 coherence audit: braided coherence is the wrong theorem

The dependency of
`lem-coherent-generator-data-descends-to-a-weak-braid-group-action` on
`thm-braided-coherence-via-underlying-braids` is not legitimate.  The existing
theorem, faithfully reflecting EGNO Exercise 8.2.7, compares only canonical
morphisms made from associators, unitors, braidings, and their inverses in one
braided monoidal category.  BG-12 instead starts with arbitrary autoequivalences
and *chosen* natural isomorphisms between composites.  There is no ambient
braiding whose coherence turns all paths in the Artin presentation 2-complex
into equal natural transformations.

Rouquier is the appropriate source, but only for the specific construction he
proves.  In *Categorification of the braid groups*, §3.2, pp. 6--10,
Proposition 3.2 gives the Coxeter braid-relation isomorphisms and Lemma 3.3
gives inverses.  The text immediately calls this only an action “up to
isomorphism” (Proposition 3.4).  Section 3.3.1 then rigidifies it: for every
two word decompositions it chooses the uniquely normalized isomorphism
`gamma_{t,u}` by comparison in the derived category; the compatible
`m_{v,v'}` and `m_1` are the actual coherence data.  Rouquier Theorem 3.5,
p. 10, proves that these form an action, explicitly a monoidal functor from the
strict monoidal category `B_W` to endofunctors.  Theorem 3.7, p. 10, then makes
the resulting 2-braid category strict rigid monoidal.  Its assumptions are a
finite Coxeter system, a faithful reflection representation, and invertibility
of `2m_{st}` when finite (automatic in the stated characteristic-zero setting);
they must not be erased.

Recommended plan disposition:

- Keep `def-weak-action-of-a-group-on-a-category`, sourced to EGNO Def. 2.7.1.
- Remove `thm-braided-coherence-via-underlying-braids` from the dependencies of
  the proposed descent lemma.  Do not state a general descent theorem merely
  from far-commutation and 3-term isomorphisms unless the complete coherent
  2-presentation and all higher compatibility data are specified and proved.
- Either delete the general lemma and let the Khovanov--Seidel/Rouquier theorem
  establish its own coherent action, or narrow it to the Rouquier complexes
  with the above hypotheses and make the proof route the normalized
  `gamma_{t,u}`, `m_{v,v'}`, `m_1` construction of Rouquier §3.3.1/Theorem
  3.5.  The Khovanov--Seidel page must then name its independently supplied
  coherent chain isomorphisms, rather than inherit braided coherence.

This change preserves the plan's warning that equality in `K_0` does not prove
functor/complex isomorphism, and makes the proposed Rouquier endpoint honestly
dependent on chain maps, homotopies, and their coherence.

## Convention and proof hazards for authoring

- EGNO's checked categorical braid operator is `c_{X,X}`.  A quantum-Hopf
  `R` convention usually needs a flip before it becomes this operator; do not
  interchange the quantum YBE `R12 R13 R23 = R23 R13 R12` with the Artin-form
  YBE without declaring that conversion.
- Strictification permits suppressing associators, but transport maps must be
  restored when returning to the original category.  It never turns arbitrary
  categorical action isomorphisms into equalities.
- The categorical trace is typed on a map to a double dual.  In a ribbon
  setting explicitly use `j=u theta`; neither a braiding alone nor rigidity
  alone supplies an unqualified endomorphism trace with the needed monoidal
  behavior.
- Sphericality is useful when one wants left/right trace agreement, but it is
  not the missing hypothesis for Markov-II.  The missing datum is the twist
  eigenvalue (or, more generally, a specified Markov-trace partial-closure
  scalar) and its writhe normalization.
- The exact plus/minus scalar is diagram-convention sensitive.  Fix it by the
  local ribbon-kink computation before using `lambda^{-w}`; never state both
  stabilization factors without that diagram.
