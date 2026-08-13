# subjects-01 — abstract-algebra source harvest: MODULE THEORY

Topic: tensor products of modules over a possibly noncommutative ring; chain conditions,
composition series, semisimplicity, Wedderburn–Artin, the Jacobson radical, Nakayama;
modules over a PID, Smith normal form, the structure theorem, and rational/Jordan
canonical form. Plus the gaps two already-published pages left behind: `Hom_R(M,N)` as an
`R`-module, `R`-algebras, the Z-modules/abelian-groups and F-modules/vector-spaces
dictionaries, the second/third isomorphism and correspondence theorems for modules,
`End_R(M)` and `End_R(R) ≅ R^op`, integral elements via the determinant trick, and
"every f.g. nonzero module has a maximal proper submodule".

Everything below was read from the source. Where I could not obtain a source it is marked
`UNOBTAINED` with what was tried. Where a heading list is reconstructed rather than read
off the source's own printed table of contents, that is stated explicitly.

---

## PART 0 — Source register (what actually resolved)

| # | source | URL that resolved | status |
|---|---|---|---|
| S1 | Keith Conrad, expository blurbs | index `https://kconrad.math.uconn.edu/blurbs/`, files `https://kconrad.math.uconn.edu/blurbs/linmultialg/<name>.pdf` and `.../ringtheory/<name>.pdf`, plus `https://kconrad.math.uconn.edu/blurbs/zorn1.pdf` | **26 blurbs downloaded and text-extracted**; PDF bookmark outlines read verbatim (list in §1.1) |
| S2 | Robert B. Ash, *Abstract Algebra: The Basic Graduate Year*, **Ch. 4** (Module Fundamentals), **Ch. 7** (Introducing Algebraic Number Theory, §7.5 only), **Ch. 9** (Introducing Noncommutative Algebra) | `https://web.archive.org/web/2023/https://faculty.math.illinois.edu/~r-ash/Algebra/Chapter4.pdf`, `.../Chapter7.pdf`, `.../Chapter9.pdf` | full text of all three. **`faculty.math.illinois.edu` does not respond directly (curl returns 0 bytes); Wayback works.** |
| S3 | Robert B. Ash, *A Course In Commutative Algebra*, Ch. 0–3 | `https://web.archive.org/web/2023/https://faculty.math.illinois.edu/~r-ash/ComAlg/ComAlg0.pdf` … `ComAlg3.pdf` | fetched; used only as a cross-check, not harvested |
| S4 | Pete L. Clark, *Commutative Algebra* (391 pp) | `https://web.archive.org/web/2023/http://alpha.math.uga.edu/~pete/integral2015.pdf` | full PDF; printed TOC read verbatim; **Ch. 3 (Modules) and Ch. 8 (Noetherian rings) read in full**. `alpha.math.uga.edu` is dead; only the Wayback copy works |
| S5 | J.S. Milne, *A Primer of Commutative Algebra* (113 pp, v4.03) | `https://www.jmilne.org/math/xnotes/CA.pdf` | full PDF; PDF bookmark outline verbatim; §1, §3, §10, §11, §16 read |
| S6 | Allen Altman & Steven Kleiman, *A Term of Commutative Algebra* (266 pp) | `https://web.mit.edu/18.705/www/13Ed.pdf` (also `13Ed-2up.pdf`) | full PDF; printed TOC verbatim. This is the MIT 18.705 text and the modern replacement for Atiyah–Macdonald |
| S7 | William Crawley-Boevey, *Noncommutative algebra*, Bielefeld University WS 2016/17 (88 pp) | `https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf` | full PDF; §-headings transcribed from the text (no PDF outline). **This is my primary source for the NONCOMMUTATIVE tensor product** |
| S8 | Robert Wisbauer, *Foundations of Module and Ring Theory: A Handbook for Study and Research* (616 pp; German ed. 1988, English ed. 1991) | `https://www.math.uni-duesseldorf.de/~wisbauer/book.pdf` | full PDF; printed TOC verbatim with page numbers; §12, §20 read |
| S9 | Alexander Duncan, *MATH 742 Modules and Wedderburn Theory*, Spring 2023 (33 pp) | `https://duncan.math.sc.edu/s23/math742/notes/modules.pdf` | full PDF; §-headings and every numbered result transcribed |
| S10 | Michael Artin, *Noncommutative Rings* class notes (MIT 18.706, Spring 2023 reissue of the Berkeley Math 251 notes; 104 pp) | `https://ocw.mit.edu/courses/18-706-noncommutative-algebra-spring-2023/mit18_706_s23_notes_by_michael_artin.pdf` (mirror `https://math.mit.edu/~zyun/Artin_notes.pdf`) | fetched; **not harvested** — see §5 gaps |
| S11 | T.Y. Lam, *A First Course in Noncommutative Rings*, 2nd ed. (GTM 131) | `https://d-nb.info/962205567/04` | **printed TOC only**, verbatim with page numbers (§1.5) |
| S12 | Dummit & Foote, *Abstract Algebra*, 3rd ed. | `https://proofwiki.org/wiki/Book:David_S._Dummit/Abstract_Algebra/Third_Edition` (fetched with a browser UA; WebFetch got 403) | **section titles only**; see §1.6 |
| S13 | The Stacks Project, Ch. 10 "Commutative Algebra" | `https://stacks.math.columbia.edu/tag/00AO` | complete section list (168 sections) obtained; individual tags addressable at `https://stacks.math.columbia.edu/tag/<tag>` |
| S14 | Patrick Brosnan, *Rational Canonical and Jordan Forms* (Univ. of Maryland, Math 405) (10 pp) | `https://math.umd.edu/~pbrosnan/Teach/405-15-01/can.pdf` | full text; every numbered result transcribed |
| S15 | Rob Donnelly, *The Structure of Finitely-generated Modules over a P.I.D.* (Murray State) (23 pp) | `https://campus.murraystate.edu/academic/faculty/rdonnelly/Research/StructureTheorem.pdf` | fetched; used as a cross-check |
| S16 | Reed College Math 332 notes, *Modules over a PID* and *Canonical Forms in Linear Algebra* | `https://people.reed.edu/~jerry/332/24modpid.pdf`, `https://people.reed.edu/~jerry/332/25jordan.pdf` | fetched; cross-check |

`UNOBTAINED`, with what was tried:

- **Atiyah & Macdonald, *Introduction to Commutative Algebra*.** No legitimate open copy
  resolved. Tried three mirrors (`tandvorst.nl`, `math.mit.edu/~sqin/18.705/`,
  `math.hkust.edu.hk`) — 000/404/404. **The chapter list is nonetheless recorded verbatim
  in §1.4b**, because Pete Clark's introduction quotes it in full. Altman–Kleiman (S6) is
  the intended modern replacement and I read that instead; the commission's request for
  A&M's "exact hypotheses" is served by S6 and S5, which are equally precise.
- **Anderson & Fuller, *Rings and Categories of Modules*.** No open copy, and no TOC
  resolved from `d-nb.info` or Springer. **Wisbauer (S8) is the substitute**: it is a
  full monograph in the same tradition (category-theoretic module theory over a
  not-necessarily-commutative ring), it is legitimately author-hosted, and its TOC is
  richer than Anderson–Fuller's for the semisimple/radical/Noetherian material.
- **Lang, *Algebra*, Ch. III, XVI, XVII.** Springer's `link.springer.com/content/pdf/bfm…`
  front-matter route now returns a 3 038-byte error page for every ISBN tried (this route
  worked for the Galois harvest in the same run — it has since broken). Only the chapter
  names, known from Duncan's and Clark's citations, are available. **UNOBTAINED.**
- **Rotman, *Advanced Modern Algebra*.** No open copy or TOC resolved. **UNOBTAINED.**
- **Ash, *Abstract Algebra*, Chapter 10 (Introducing Homological Algebra).** Not on
  Wayback at all (`archive.org/wayback/available` returns `"archived_snapshots": {}`), and
  the live host does not respond. This is the chapter where Ash would have done tensor
  products and Ext/Tor. **UNOBTAINED**; Crawley-Boevey §4 and Clark Ch. 3 cover the same
  ground.
- **A Keith Conrad blurb on rational/Jordan canonical form.** There is none: I probed
  `linmultialg/{jordanform,canonicalforms,rationalcanonical,jordan,cyclicmodules}.pdf`,
  all 404, and grepped the blurb index for "Jordan" and "canonical" — no hits. S14/S16
  fill this.

---

## PART 1 — Canonical-coverage harvest (source-anchored heading enumerations)

### 1.1 Keith Conrad blurbs — the module-theory set

Read range: **the whole of each file listed.** Headings below are the PDF's own bookmark
outline, verbatim; where a file has no outline that is stated. Titles are as printed on
the blurb index page.

**`linmultialg/moduleintro.pdf` — "Introduction to modules" (18 pp).**
```
1. Introduction
2. Basic definitions
3. Linear independence, bases, and free modules
4. Abelian groups vs. modules
5. Isomorphisms of ideals as modules
6. Applications to linear algebra
```
Named: Ex 1.1 (the ideal (2, 1+√−5) in Z[√−5]) · **Def 1.2** R-module (commutative R) ·
Ex 1.3–1.7 · **Def 2.1** R-linear combination · **Def 2.3** spanning set ·
**Def 2.6** finitely generated · **Def 2.7** R-linear map · Ex 2.8–2.11 ·
**Def 2.13** isomorphism · **Def 2.15** kernel/image · **Def 2.16** submodule ·
**Def 2.19** quotient module · **Def 2.20** direct sum · **Def 3.1** linear independence ·
**Rem 3.2** (independence ≠ "no element is a combination of the others" without division) ·
Ex 3.3–3.7 · Ex 4.1–4.5 (torsion) · Ex 5.1, **Thm 5.2** (over a domain, ideals I ≅ J as
modules ⟺ I = cJ for c ∈ K^×; I ≅ R ⟺ I is nonzero principal) · Ex 5.3 (the conjugate
ideals p, q in Z[√−5]) · Ex 6.1, 6.2 · **Thm 6.3** V_A ≅ V_B as F[T]-modules ⟺ B = UAU^{-1}.

**`linmultialg/tensorprod.pdf` — "Tensor products I" (60 pp).**
```
1. Introduction
2. Bilinear Maps
3. Construction of the Tensor Product
4. Examples of Tensor Products
5. General Properties of Tensor Products
6. Base Extension
7. Tensors in Physics
References
```
Named (§2–§6; §7 skipped as out of scope): Ex 2.1 (B(v,w) = vw^⊤) ·
**Def 3.1** the tensor product by its universal mapping property ·
**Thm 3.2** existence (free module on M×N modulo the bilinearity relations) ·
**Thm 3.3** elementary tensors from spanning sets span · Ex 3.4 ·
**Thm 3.5** m⊗0 = 0 = 0⊗n · Ex 3.6 (Q ⊗_Z A = 0 for torsion A) · **Rem 3.7** (Whitney) ·
**Thm 4.1** Z/aZ ⊗_Z Z/bZ ≅ Z/dZ, d = (a,b) · Ex 4.2 (Z/3 ⊗ Z/5 = 0) ·
**Thm 4.3** R/I ⊗_R R/J ≅ R/(I+J) · **Rem 4.4** · **Thm 4.5**, Ex 4.6 ((Z/nZ) ⊗ A ≅ A/nA) ·
**Rem 4.7** · **Thm 4.9** (free ⊗ free is free on the products of basis elements) ·
Ex 4.10–4.13, 4.16 · **Thm 4.15** (unique representation over a free factor) ·
**Thm 4.18** M ≠ 0 finitely generated ⟹ M^{⊗k} ≠ 0 · Ex 4.19, **Ex 4.20** ((Q/Z)^{⊗2} = 0
— the finite-generation hypothesis in 4.18 is necessary) · **Thm 4.21** K ⊗_R V ≅ V for a
K-vector space V over a domain R with fraction field K · Ex 4.22, **Ex 4.24** (I = (2,√10)
in Z[√10]: I ≇ R but I ⊗_R K ≅ R ⊗_R K) · **Thm 4.25** and **Rem 4.26** (the domain
hypothesis is necessary: in R ⊗_R R, ab = 0 gives a⊗b = 0) · **Thm 4.27**,
**Cor 4.28** (M_tor = ker(M → K ⊗_R M)) · Ex 4.29 (Dehn/Hilbert's 3rd problem) ·
**Thm 5.1** commutativity · **Thm 5.2** associativity · **Thm 5.3, 5.4** distributes over
direct sums · **Rem 5.5** (**fails for direct products**) · **Thm 5.6** (multilinear
factorization) · **Thm 5.7 Hom–tensor adjunction** Bil_R(M,N;P) ≅ Hom_R(M⊗N,P) ≅
Hom_R(M,Hom_R(N,P)) · **Cor 5.8** · **Thm 5.9** M^∨ ⊗ N → Hom_R(M,N), an isomorphism for
M,N finite free · **Rem 5.10** (fails otherwise: R = Z/p², M = N = R/pR) ·
Ex 5.11–5.16 (tensor rank) · **Thm 5.17, Cor 5.18, Ex 5.19** ·
**Thm 6.3, 6.4** (S ⊗_R M is an S-module) · Ex 6.5 ((R/I) ⊗ M ≅ M/IM as R/I-modules) ·
**Thm 6.7** base extension of a free module is free with basis 1⊗e_i · Ex 6.8, 6.9 ·
**Thm 6.11** (commutes with direct sums) and the two counterexamples for direct products ·
**Ex 6.19** (well-definedness of rank via tensoring to R/m — **explicitly uses Zorn**) ·
**Thm 6.21, Cor 6.22, Ex 6.23, 6.24** · **Thm 6.26** (bimodule-flavoured isomorphisms) ·
**Thm 6.30** the universal property of base extension · **Thm 6.31** Hom_R(M,N) ≅
Hom_S(S⊗_R M, N) · **Rem 6.32** (this is Frobenius reciprocity) · **Thm 6.33**
HomS(M⊗_R N, P) ≅ Hom_R(M, Res(Hom_S(N,P))) · **Ex 6.35** −⊗_R N ⊣ Hom_R(N,−).

**`linmultialg/tensorprod2.pdf` — "Tensor products II" (43 pp).**
```
1. Introduction
2. Tensor Products of Linear Maps
3. Flat Modules
4. Tensor Products of Linear Maps and Base Extension
5. Vector Spaces
6. Tensor Contraction
7. Tensor Product of R-Algebras
8. The Tensor Algebra of an R-module
References
```
Named: Ex 2.1 · **Thm 2.3** (eigenvalues λ+µ and λµ) · **Thm 2.5** the map
Hom(M,M′) ⊗ Hom(N,N′) → Hom(M⊗N, M′⊗N′), iso for finite free · **Thm 2.6** functoriality ·
Ex 2.7, **Cor 2.8/2.9** (det(φ⊗ψ) formulas) · **Thm 2.11** (⊗ of isomorphisms) ·
**Thm 2.12** (⊗ of surjections is surjective) · **Ex 2.13** (⊗ of an injection need not be
injective: Z/p → Z/p² by ×p) · Ex 2.14, 2.15 · **Ex 2.16** (M → N injective with
M^{⊗2} → N^{⊗2} not injective: I = (X,Y) ⊂ A[X,Y]) · **Rem 2.17** (I torsion-free, I^{⊗2}
not) · **Thm 2.19 + Rem 2.20** (kernel of φ⊗ψ for surjective φ,ψ; the formula is wrong
without surjectivity) · Ex 2.24, **Cor 2.25**, Ex 2.26 ·
**Def 3.1 flat** · **Thm 3.2** free ⟹ flat (no finiteness needed) ·
**Thm 3.3** the fraction field of a domain is flat · Ex 3.4 ·
**Thm 3.6** M flat ⟹ I ⊗_R M ≅ IM · **Ex 3.7** a nonzero torsion abelian group is not flat ·
**Rem 3.8** (Q/Z is not flat) · **Ex 3.9** (over a domain, a nonzero torsion module is not
flat) · **Thm 3.10** N flat ⟹ ker(1⊗φ) = N ⊗ ker φ · **Thm 3.11** ⊗ of flats is flat ·
**Thm 3.12, Cor 3.13** · **Thm 4.1** R ≠ 0 commutative: R^m ≅ R^n ⟹ m = n; a surjection
R^m ↠ R^n forces m ≥ n · **Thm 4.2** over a PID the free rank d = dim_K(K ⊗_R M) ·
Ex 4.3, **Thm 4.4** (the matrix of φ_S is the matrix of φ), Ex 4.5, 4.7 ·
**Thm 5.3, 5.5, Cor 5.6, Rem 5.7, Lem 5.10, Thm 5.11** (v_1⊗⋯⊗v_k = 0 ⟺ some v_i = 0 —
**vector spaces only**) · **Cor 5.12, Thm 5.15, Cor 5.18** (S_k acts on V^{⊗k}) ·
§6 contraction · **Thm 7.1** the R-algebra structure on A ⊗_R B · **Cor 7.2** ·
Ex 7.3 (C ⊗_R C ≅ C × C), **Ex 7.5** (the cross-product algebra: the construction still
works, but the result is not unital or associative), Ex 7.6–7.12, **Cor 7.14** ·
**Lem 7.15, Thm 7.16/7.17**, Ex 7.18 (R ⊗_Q Q(√2) ≅ R × R), Ex 7.20 ·
**Thm 7.22, 7.23** · **Thm 8.1** (graded-algebra criterion), **Lem 8.2**, **Thm 8.3** ·
**Def 8.4 tensor algebra** T(M) = ⨁_{k≥0} M^{⊗k} · Ex 8.6 (free ⟹ noncommuting
polynomial ring) · **Thm 8.8** the universal property of T(M).

**`linmultialg/modulesoverPID.pdf` — "Modules over a PID" (25 pp).**
```
1. Preliminary results
2. Submodules of a finite free module
3. Applications to matrix groups
4. Finitely generated modules
5. Cardinality and Index over a PID
References
```
Named: **Lem 1.1** (invariance of rank over a nonzero commutative ring) · **Lem 1.2** ·
**Thm 2.1** over a PID, a submodule of a free module of rank n is generated by ≤ n
elements · **Thm 2.2** it is free of rank ≤ n · **Non-example 2.3** (fails over every
non-PID) · **Rem 2.4** (holds for infinite rank too, by Zorn) · **Rem 2.5** ·
**Cor 2.6** f.g. torsion-free over a PID ⟹ finite free · **Cor 2.7** · **Cor 2.9** (M/N
torsion-free ⟹ every basis of N extends to a basis of M) · Ex 2.10 (Z[⁴√2] over Z[√2]) ·
**Def 2.12 aligned bases** · **Thm 2.14 (the stacked/aligned basis theorem)** with the
divisibility chain a₁|a₂|⋯|a_m · Ex 2.15 · **Cor 2.16** (equal rank ⟺ M/M′ torsion) ·
**Def 3.1, Thm 3.6** (normalizers of GL_n(A) and SL_n(A) in GL_n(K)) ·
**Thm 4.1 (structure theorem)** M ≅ F ⊕ T, T ≅ ⨁_{j} A/(a_j) with a₁|⋯|a_m ·
**Cor 4.3** · **Ex 4.4** (the free part is *not* a canonical submodule) ·
**Ex 4.7** (∏_p Z/(p): the torsion submodule is **not** a direct summand — finite
generation is essential) · **Rem 4.8**, **Ex 4.9, Rem 4.10** ·
**Def 5.1 A-cardinality**, Ex 5.2–5.6, **Thm 5.7** (well-definedness of the A-cardinality
= uniqueness half of the structure theorem), Ex 5.8–5.11, **Cor 5.12** ·
**Def 5.14 A-index**, Ex 5.16, 5.17, **Thm 5.18** (multiplicativity of the index) ·
**Thm 5.19/5.22** the determinant formula for the index, Ex 5.20, 5.21 ·
**Cor 5.23, 5.24**, Ex 5.26 (a set of n vectors is a Z-basis of Z^n ⟺ det = ±1) ·
**Def 5.27 primary cardinality**, **Thm 5.29, Cor 5.30, Thm 5.31**, Ex 5.32.

**`linmultialg/alignedbases.pdf` — "Simultaneously aligned bases" (4 pp).** No §-headings.
Named: **Ex 1** (two submodules of R² with *no* simultaneously aligned bases) ·
**Lem 2** · **Thm 3** · **Ex 4** (any finite set of nonzero ideals in a ring of integers
does have simultaneously aligned Z-bases).

**`linmultialg/noetherianmod.pdf` — "Noetherian modules" (10 pp).**
```
1. Introduction
2. Properties of Noetherian modules
3. Noetherian rings
4. Finitely generated modules over a Noetherian ring
References
```
Named: Ex 1.1–1.3 (**Ex 1.3**: R = Z[X], I = (2,X) — a f.g. submodule needing more
generators than the ambient module) · **Def 1.4 Noetherian = every submodule f.g.** ·
Ex 1.5, 1.6 · **Thm 1.7** the three equivalents (all submodules f.g. / ACC / maximal
condition) · **Thm 2.1** submodules · **Thm 2.2** quotients · **Thm 2.3** the
short-exact-sequence criterion · **Thm 2.4, Cor 2.5** direct sums ·
**Thm 2.8** a surjective endomorphism of a Noetherian module is injective ·
**Thm 3.1–3.5** (Noetherian rings; R/I; a surjective self-map of a Noetherian ring is an
isomorphism) · **Thm 3.6/Cor 3.8/Cor 3.9 (Hilbert basis theorem)** · Rem 3.9, 3.10 ·
**Thm 4.1** over a Noetherian ring, Noetherian ⟺ finitely generated ·
**Thm 4.3, Ex 4.4, Cor 4.5, Cor 4.6** (Hom_R(M,N) is Noetherian; **Ex 4.4** shows the
Noetherian hypothesis on R is needed).

**`ringtheory/noetherian-ring.pdf` — "Noetherian rings" (9 pp).**
```
1. Introduction
2. Examples
3. Properties of Noetherian rings
References
```
Named: **Def 1.1** R Noetherian = every ideal f.g. · **Thm 3.1** the three equivalents ·
Rem 3.2 · **Thm 3.3** (Noetherian domain ⟹ irreducible factorizations exist) · Rem 3.4 ·
**Thm 3.5** R/I · **Thm 3.6 (Hilbert basis theorem)**, **Cor 3.9** · Ex 3.11 ·
Rem 3.15 · **Def 3.16 primary ideal**, Ex 3.18 · **Def 3.19 irreducible ideal** ·
**Thm 3.21** every proper ideal is a finite intersection of irreducibles ·
**Lem 3.22**, **Thm 3.23** irreducible ⟹ primary in a Noetherian ring ·
**Thm 3.24 (Lasker–Noether existence)**.

**`linmultialg/splittingmodules.pdf` — "Splitting of short exact sequences for modules"
(6 pp).** §1 Introduction · §2 When a Short Exact Sequence Splits · §3 Consequences.

**`linmultialg/stablyfree.pdf` — "Stably free modules" (6 pp).** §1 Introduction ·
§2 Proof of Theorem 1.1 · §3 When Stably Free Modules Must Be Free ·
Appendix A. Theorems of Gabel and Bass.

**`linmultialg/dualmod.pdf` — "Dual modules" (19 pp).** §1 Introduction · §2 Examples ·
§3 Duals, Direct Sums, and Direct Products · §4 Dual Bases and Double Duality ·
§5 Dual Maps · §6 Pairings.

**`linmultialg/universalmapping.pdf` — "Universal mapping properties" (24 pp).**
§1 Cyclic groups · §2 Quotient groups · §3 The abelianization of a group ·
§4 Direct product of groups · §5 Review and initial/final objects ·
§6 Universal mapping properties with rings · **§7 Universal mapping properties with
modules** · Appendix A.

**`linmultialg/extmod.pdf` — "Exterior powers" (47 pp).** §1 Introduction ·
§2 Symmetric and alternating functions · §3 Exterior powers of modules ·
§4 Spanning sets for exterior powers · §5 Exterior powers of linear maps ·
§6 Determinants · §7 Exterior powers and linear independence · §8 The wedge product ·
**§9 The Künneth formula and modules over a PID** · §10 The exterior algebra ·
Appendix A. **`linmultialg/extmodbaseextn.pdf` — "Base extension and exterior powers"
(3 pp)**, no §-headings.

**`ringtheory/algebras.pdf` — "Algebras" (11 pp).** §1 Definitions and Examples ·
§2 Basic Results. **Def 1.1**: a k-algebra is a possibly noncommutative ring with
identity that is also a k-vector space with α(ab) = (αa)b = a(αb). Ex 1.2–1.6
(M_d(k), k[G], Hom_k(V,V), C([0,1],R)).

**`ringtheory/ringdefs.pdf` (6 pp)** — §1 Introduction · §2 Subrings · §3 Ring
homomorphisms · §4 Ideals · **Appendix A. Rings without identity**.
**`ringtheory/ideals.pdf` (17 pp)** — §1 Introduction · §2 Principal ideals ·
§3 Ideals = Kernels, Quotient Rings · §4 The quotient is isomorphic to the image ·
§5 Ideals of Polynomials · §6 Prime and Maximal Ideals · §7 The real numbers as a
quotient ring.

**`grouptheory/finite-abelian.pdf` — "Classification of finite abelian groups" (7 pp).**
§1 Introduction · §2 Decomposable and Indecomposable finite abelian groups ·
§3 Classification of indecomposable finite abelian groups · §4 Comparing two
indecomposable decompositions · **Appendix A. Fitting's Lemma**.
This is a *module-free* route to the finite-abelian-group classification and is worth
knowing exists.

**`linmultialg/semisimple.pdf` — "Semisimple operators" (7 pp).** No §-headings.
**Warning for disposition:** despite the title, this blurb is about a *linear operator*
being semisimple (its minimal polynomial is squarefree), **not** about semisimple modules
or rings. Do not cite it for §2's semisimplicity material.

**`linmultialg/minpolyandappns.pdf` (15 pp)** — §1 Introduction · §2 Diagonalizable
Operators · §3 Distinct Eigenvalues and Diagonalizability · §4 The Minimal Polynomial ·
§5 Simultaneous Diagonalizability · §6 Nilpotent Operators · §7 Computing the Minimal
Polynomial.
**`linmultialg/dimension.pdf` (7 pp)** — §1 Introduction · §2 Comparing bases ·
§3 Dimension of subspaces. **`linmultialg/dualspaceinfinite.pdf` (4 pp)**, no §-headings.
**`linmultialg/complexification.pdf` (14 pp)** — §1 Introduction · §2 Complexifying with
Direct Sums · §3 Complexifying with Tensor Products · §4 Conjugations on Complex Vector
Spaces. **`linmultialg/univid.pdf` / `univid2.pdf`** — universal identities, used for the
Cayley–Hamilton theorem over a general commutative ring.
**`ringtheory/quaternionalg.pdf` (21 pp)** — §1 Introduction · §2 Hamilton's Quaternions ·
§3 Quaternion Algebras: Introduction · §4 Isomorphisms Between Quaternion Algebras ·
§5 Isomorphism and Norms · Appendix A · **Appendix B. Conjugates in a division ring**.
**`grouptheory/maschke.pdf` (3 pp)**, no §-headings.
**`zorn1.pdf` — "Zorn's lemma and some applications" (30 pp)** — §1 Introduction ·
§2 Applications to group theory · **§3 Applications to ideals** · **§4 Applications to
bases of vector spaces** · §5 Application to connected components · **§6 Equivalences and
controversies with Zorn's lemma** · Appendix A. Application to metric spaces.

### 1.2 Robert Ash, *Abstract Algebra: The Basic Graduate Year*

Read range: **Chapter 4 in full, Chapter 7 §7.5 in full, Chapter 9 in full.** Ash's own
printed numbering, verbatim.

**Chapter 4, Module Fundamentals.**
```
4.1 Modules and Algebras
  4.1.1 Definitions and Comments · 4.1.2 Some Basic Properties of Modules · 4.1.3 Examples
  4.1.4 Definitions and Comments · 4.1.5 Examples · 4.1.6 Definitions and Comments
  4.1.7 Definitions and Comments · 4.1.8 Another Way to Describe an Algebra
4.2 The Isomorphism Theorems For Modules
  4.2.1 Factor Theorem For Modules · 4.2.2 First Isomorphism Theorem For Modules
  4.2.3 Second Isomorphism Theorem For Modules · 4.2.4 Third Isomorphism Theorem For Modules
  4.2.5 Correspondence Theorem For Modules · 4.2.6 Definitions and Comments · 4.2.7 Lemma
4.3 Direct Sums and Free Modules
  4.3.1 Direct Products · 4.3.2 Definitions · 4.3.3 Proposition · 4.3.4 Definitions and Comments
  4.3.5 Theorem · 4.3.6 Some Key Properties of Free Modules
4.4 Homomorphisms and Matrices
  4.4.1 The Correspondence Between Homomorphisms and Matrices
  4.4.2 Preparation For The Smith Normal Form
4.5 Smith Normal Form
4.6 Fundamental Structure Theorems
  4.6.1 Simultaneous Basis Theorem · 4.6.2 Corollary · 4.6.3 Fundamental Decomposition Theorem
  4.6.4 Finite Abelian Groups · 4.6.5 Definitions and Comments
  4.6.6 Abelian Groups Specified by Generators and Relations
4.7 Exact Sequences and Diagram Chasing
  4.7.1 Definitions and Comments · 4.7.2 The Five Lemma · 4.7.3 Corollary: The Short Five Lemma
  4.7.4 Proposition · 4.7.5 Corollary
```

**Chapter 7, §7.5 only, "Noetherian and Artinian Modules and Rings".** Ash states
explicitly at 7.5.1: *"In this section, rings are not assumed commutative."*
```
7.5.1 Definitions and Comments (acc, dcc)
7.5.2 Proposition (acc ⟺ maximal condition; dcc ⟺ minimal condition)
7.5.3 Proposition (Noetherian ⟺ every submodule finitely generated)
7.5.4 Definitions and Comments (Noetherian/Artinian RING; left vs right)
7.5.5 Examples (PID; Z; F[X]; F[X₁,X₂,…])
7.5.6 Remark · 7.5.7 Proposition (N and M/N) · 7.5.8 Corollary (finite direct sums)
7.5.9 Corollary (f.g. module over a Noetherian/Artinian ring)
7.5.10 Definitions (series, composition series, equivalence)
7.5.11 Jordan-Hölder Theorem For Modules
7.5.12 Theorem (composition series ⟺ Noetherian and Artinian)
7.5.13 Proposition (AKLB: A Noetherian and integrally closed ⟹ B Noetherian)
```

**Chapter 9, Introducing Noncommutative Algebra.**
```
9.1 Semisimple Modules
  9.1.1 Definition (simple) · 9.1.2 Theorem (the three equivalents defining semisimple)
  9.1.3 Proposition (submodules and quotients)
9.2 Two Key Theorems
  9.2.1 Schur's Lemma · 9.2.2 Lemma · 9.2.3 Comments (End_R(V^n) ≅ M_n(End_R(V)))
  9.2.4 Theorem (Jacobson)  [the density theorem]
  9.2.5 Corollary (M faithful simple and finite-dimensional over D ⟹ End_D(M) ≅ R)
9.3 Simple and Semisimple Rings
  9.3.1 Definitions and Comments · 9.3.2 Proposition · 9.3.3 Proposition
  9.3.4 Beginning the Decomposition · 9.3.5 – 9.3.14  [unnamed numbered steps]
9.4 Further Properties of Simple Rings, Matrix Rings, and Endomorphisms
  9.4.1 Lemma · 9.4.2 Corollary · 9.4.3 Lemma · 9.4.4 Corollary · 9.4.5 Proposition
  9.4.6 Corollary · 9.4.7 Theorem (R simple ⟹ R ≅ End_D(V) ≅ M_n(D^o))
9.5 The Structure of Semisimple Rings
  9.5.1 Wedderburn Structure Theorem · 9.5.2 Theorem (M_n(D) is simple)
  9.5.3 Informal Introduction to Group Representations · 9.5.4 The Regular Representation
  9.5.5 The Role of Semisimplicity · 9.5.6 Definitions and Comments · 9.5.7 Proposition
  9.5.8 Example
9.6 Maschke's Theorem
  9.6.1 Lemma · 9.6.2 Lemma · 9.6.3 Maschke's Theorem · 9.6.4 Definition
  9.6.5 Proposition · 9.6.6 Theorem
9.7 The Jacobson Radical
  9.7.1 Definitions and Comments · 9.7.2 Proposition (M semisimple ⟹ J(M) = 0)
  9.7.3 Proposition (J(R) = ∩ annihilators of simple modules) · 9.7.4 Corollary (two-sided)
  9.7.5 Definitions and Comments (quasi-regular) · 9.7.6 Lemma
  9.7.7 Proposition (J(R) is the largest two-sided ideal of quasi-regular elements)
  9.7.8 Corollary (left and right Jacobson radicals coincide)
  9.7.9 Theorem (semisimple + finite length ⟺ Artinian + J(M) = 0)
  9.7.10 Corollary (R semisimple ⟺ R Artinian and J(R) = 0)
  9.7.11 Definitions and Comments (nil vs nilpotent) · 9.7.12 Lemma · 9.7.13 Proposition
9.8 Theorems of Hopkins-Levitzki and Nakayama
  9.8.1 Theorem (Hopkins and Levitzki) · 9.8.2 Nakayama's Lemma, Version 1
  9.8.3 Lemma · 9.8.4 Nakayama's Lemma, Version 2
  9.8.5 Proposition (commutative local ring: minimal generating sets)
```

### 1.3 Pete L. Clark, *Commutative Algebra* — printed TOC, verbatim

Read range: **Chapter 3 (Modules, pp. 35–92) and Chapter 8 (Noetherian rings, pp.
165–194) in full**, plus the whole printed TOC. The relevant portion, verbatim:

```
Chapter 3. Modules 35
  1. Basic definitions 35
  2. Finitely presented modules 40
  3. Torsion and torsionfree modules 42
  4. Tensor and Hom 43
  5. Projective modules 45
  6. Injective modules 52
  7. Flat modules 59
  8. Nakayama's Lemma 62
  9. Ordinal Filtrations and Applications 67
  10. Tor and Ext 74
  11. More on flat modules 82
  12. Faithful flatness 88
Chapter 8. Noetherian rings 165
  1. Chain conditions on partially ordered sets 165
  2. Chain conditions on modules 166
  3. Semisimple modules and rings 167
  4. Normal Series 170
  5. The Krull-Schmidt Theorem 171
  6. Some important terminology 175
  7. Introducing Noetherian rings 176
  8. Theorems of Eakin-Nagata, Formanek and Jothilingam 177
  9. The Bass-Papp Theorem 180
  10. Artinian rings: structure theory 181
  11. The Hilbert Basis Theorem 184
  12. Monomial Ideals 185
  13. The Krull Intersection Theorem 188
  14. Krull's Principal Ideal Theorem 190
  15. The Dimension Theorem, following [BMRH] 193
  16. The Artin-Tate Lemma 193
Chapter 16. Principal rings and Bézout domains 303
  1. Principal ideal domains 303
  2. Structure theory of principal rings 305
  3. Euclidean functions and Euclidean rings 308
  4. Bézout domains 310
Chapter 20. Dedekind domains 341 … 6. Modules over a Dedekind domain 346 …
Chapter 21. Prüfer domains 351 … 3. Modules over a Prüfer domain 356
```

**Warning for disposition.** Clark's Chapter 3 is *not* organised as a numbered
theorem list with §-anchored names: much of the content is in numbered `Exercise`s, and
`Theorem 3.n` numbering runs continuously across the chapter rather than restarting per
section. Cite by number, not by section.

### 1.3b Clark, *Commutative Algebra* — named results in Ch. 3 and Ch. 8

**Ch. 3 (Modules).** `Proposition 3.1` (End(M) is a ring) · `Theorem 3.2` (left
submodules of R = left ideals) · **`Theorem 3.3`** (a module with a basis is ≅ ⨁_S R; the
universal property of the free module) · **`Proposition 3.4`** every R-module is free ⟺ R
is a field · `Proposition 3.5` (finitely presented: the equivalents) · `Proposition 3.6`
(Matsumura: 0 → K → N → M → 0 with M finitely presented and N f.g. ⟹ K f.g.) ·
`Theorem 3.7` (R-Mod is abelian; coherent modules; left Noetherian) ·
**`Proposition 3.8`** (over a domain: M/M[tors] is torsionfree; for f.g. M, embeds in a
f.g. free ⟺ torsionfree) · `Proposition 3.9` (⊗ commutes with direct limits) ·
**`Proposition 3.10`** the five equivalents defining **projective** ·
`Proposition 3.11` (f.g. projective ⟺ image of an idempotent matrix) ·
**`Proposition 3.12` (Dual Basis Lemma)** · **`Theorem 3.13`** f.g. over a PID: free ⟺
torsionfree · **`Corollary 3.14`** f.g. projective over a PID is free ·
`Lemma 3.15`, **`Theorem 3.16`** f.g. projective over a **local** ring is free ·
`Lemma 3.17`, `Proposition 3.18` (comaximal ideals: I ⊕ J ≅ R ⊕ IJ) ·
`Example 3.19` (Swan), `Example 3.20` (Quillen–Suslin) ·
**`Proposition 3.21`** the equivalents defining **injective** ·
**`Theorem 3.22` (Baer's Criterion [Ba40])** · `Example 3.23` (Q and Q/Z are divisible;
Q is uniquely divisible, Q/Z is not) · **`Proposition 3.24`** injective ⟹ divisible, and
the converse over a PID · `Lemma 3.25, 3.26` (every Z-module embeds in an injective) ·
**`Lemma 3.27` (Injective Production Lemma)**, `Theorem 3.28` (enough injectives) ·
`Proposition 3.29, 3.30` (essential extensions), **`Theorem 3.31`** injective ⟺ no proper
essential extension · `Theorem 3.32`, `Proposition 3.35` (injective envelopes) ·
`Proposition 3.37` (a direct sum is flat ⟺ each summand is) ·
**`Proposition 3.38`** over a domain, flat ⟹ torsionfree ·
**`Example 3.39`** k[x,y], I = ⟨x,y⟩ is torsionfree and **not flat** ·
**`Proposition 3.40`** projective ⟹ flat · **`Proposition 3.41`** (the determinant trick /
Cayley–Hamilton for φ(M) ⊂ IM) · **`Theorem 3.42` (Nakayama's Lemma)** ·
**`Corollary 3.43`, `Corollary 3.44`** (generators mod JM generate M) ·
`Corollary 3.46` (a f.g. idempotent ideal is generated by an idempotent) ·
**`Theorem 3.47`** every f.g. module is **Hopfian** (a surjective endomorphism is
injective) · `Theorem 3.48`, `Corollary 3.49` ·
`Theorem 3.50`, `Corollary 3.51, 3.52` (trace ideals) · `Lemma 3.53` ·
**`Theorem 3.54`** over a **local** ring, for finitely presented M: free ⟺ projective ⟺
flat ⟺ m ⊗ M → mM injective · `Lemma 3.55` (Transfinite Dévissage), `Corollary 3.56` ·
`Example 3.57` (a PID is a hereditary ring), **`Theorem 3.58`** (a submodule of a direct
sum of hereditary modules is a direct sum) — **this is the general form of "submodules of
free modules over a PID are free"** · `Corollary 3.64` (f.g. torsionfree over a PID is
free, re-derived).

**Ch. 8 (Noetherian rings)** — section titles above; the load-bearing sections for this
commission are §1 chain conditions on posets, §2 chain conditions on modules,
**§3 Semisimple modules and rings**, §4 Normal Series, **§5 The Krull–Schmidt Theorem**,
§7 Introducing Noetherian rings, **§10 Artinian rings: structure theory**,
§11 The Hilbert Basis Theorem.

### 1.4 Altman & Kleiman, *A Term of Commutative Algebra* — printed TOC, verbatim

Read range: **§4, §5, §8, §9, §16, §19** plus the whole printed TOC. Each numbered
section is one lecture and is self-contained.

```
1. Rings and Ideals 1
2. Prime Ideals 7
3. Radicals 11
4. Modules 17
5. Exact Sequences 24
   Appendix: Fitting Ideals 30
6. Direct Limits 35
7. Filtered Direct Limits 42
8. Tensor Products 48
9. Flatness 54
10. Cayley–Hamilton Theorem 60
11. Localization of Rings 66
12. Localization of Modules 72
13. Support 77
14. Krull–Cohen–Seidenberg Theory 84
15. Noether Normalization 88
   Appendix: Jacobson Rings 93
16. Chain Conditions 96
17. Associated Primes 101
18. Primary Decomposition 106
19. Length 112
20. Hilbert Functions 116
   Appendix: Homogeneity 122
21. Dimension 124
22. Completion 130
23. Discrete Valuation Rings 138
   Appendix: Cohen–Macaulayness 143
24. Dedekind Domains 148
25. Fractional Ideals 152
26. Arbitrary Valuation Rings 157
Solutions 162 … Bibliography 249 … Disposition of the Exercises in [3] 250 … Index 253
```

Altman–Kleiman is entirely **commutative** (they fix that in §1) and every exercise has a
complete solution at the back — which makes it the best "exact hypotheses, full proof"
source in this harvest for the commutative half of page 1.

### 1.4b Atiyah & Macdonald — chapter list (transcribed from Clark's introduction)

I could not obtain A&M itself (§0). Clark quotes its chapter titles verbatim in his
introduction, and I transcribe them from there so the scaffolder can see the de-facto
standard shape of the material:

```
1. Rings and Ideals   2. Modules   3. Rings and Modules of Fractions
4. Primary Decomposition   5. Integral Dependence and Valuations
6. Chain Conditions   7. Noetherian Rings   8. Artin Rings
9. Discrete Valuation Rings and Dedekind Domains   10. Completions   11. Dimension Theory
```
Clark also records: "The entire text is 126 pages, and a distinctive feature is that a
substantial portion of the text is devoted to exercises." **Do not cite A&M for a
statement; cite Altman–Kleiman or Milne, which I actually read.**

### 1.5 T.Y. Lam, *A First Course in Noncommutative Rings*, 2nd ed. — printed TOC, verbatim

Read range: **the printed table of contents only** (I could not obtain the text).
Verbatim, with page numbers:

```
CHAPTER 1  Wedderburn-Artin Theory 1
  §1. Basic Terminology and Examples 2        Exercises for §1 22
  §2. Semisimplicity 25                        Exercises for §2 29
  §3. Structure of Semisimple Rings 30         Exercises for §3 45
CHAPTER 2  Jacobson Radical Theory 48
  §4. The Jacobson Radical 50                  Exercises for §4 63
  §5. Jacobson Radical Under Change of Rings 67  Exercises for §5 77
  §6. Group Rings and the J-Semisimplicity Problem 78   Exercises for §6 98
CHAPTER 3  Introduction to Representation Theory 101
  §7. Modules over Finite-Dimensional Algebras 102   Exercises for §7 116
  §8. Representations of Groups 117            Exercises for §8 137
  §9. Linear Groups 141                        Exercises for §9 152
CHAPTER 4  Prime and Primitive Rings 153
  §10. The Prime Radical; Prime and Semiprime Rings 154   Exercises for §10 168
  §11. Structure of Primitive Rings; the Density Theorem 171  Exercises for §11 188
  §12. Subdirect Products and Commutativity Theorems 191  Exercises for §12 198
CHAPTER 5  Introduction to Division Rings 202
  §13. Division Rings 203 · §14. Some Classical Constructions 216
  §15. Tensor Products and Maximal Subfields 238 · §16. Polynomials over Division Rings 248
CHAPTER 6  Ordered Structures in Rings 261
  §17. Orderings and Preorderings in Rings 262 · §18. Ordered Division Rings 270
CHAPTER 7  Local Rings, Semilocal Rings, and Idempotents 279
  §19. Local Rings 279 · §20. Semilocal Rings 296
     Appendix: Endomorphism Rings of Uniserial Modules 302
  §21. The Theory of Idempotents 308 · §22. Central Idempotents and Block Decompositions 326
CHAPTER 8  Perfect and Semiperfect Rings 335
  §23. Perfect and Semiperfect Rings 336
  §24. Homological Characterizations of Perfect and Semiperfect Rings 347
  §25. Principal Indecomposables and Basic Rings 359
References 370 · Name Index 373 · Subject Index 377
```

### 1.6 Dummit & Foote, *Abstract Algebra*, 3rd ed. — section titles

Read range: **section titles only** (no legitimate open copy; see §0). The relevant
parts, verbatim as ProofWiki records them:

```
Part III — MODULES AND VECTOR SPACES
Chapter 10  Introduction to Module Theory
  10.1 Basic Definitions and Examples
  10.2 Quotient Modules and Module Homomorphisms
  10.3 Generation of Modules, Direct Sums, and Free Modules
  10.4 Tensor Products of Modules
  10.5 Exact Sequences — Projective, Injective, and Flat Modules
Chapter 11  Vector Spaces
  11.1 Definitions and Basic Theory · 11.2 The Matrix of a Linear Transformation
  11.3 Dual Vector Spaces · 11.4 Determinants
  11.5 Tensor Algebras, Symmetric and Exterior Algebras
Chapter 12  Modules over Principal Ideal Domains
  12.1 The Basic Theory · 12.2 The Rational Canonical Form · 12.3 The Jordan Canonical Form
Part V (relevant portions)
Chapter 15  Commutative Rings and Algebraic Geometry
  15.1 Noetherian Rings and Affine Algebraic Sets · … · 15.4 Localization
Chapter 16  Artinian Rings, Discrete Valuation Rings, and Dedekind Domains
  16.1 Artinian Rings · 16.2 Discrete Valuation Rings · 16.3 Dedekind Domains
Chapter 17  Introduction to Homological Algebra and Group Cohomology
  17.1 Introduction to Homological Algebra — Ext and Tor · 17.2 The Cohomology of Groups
  17.3 Crossed Homomorphisms and H¹(G,A) · 17.4 Group Extensions, Factor Sets and H²(G,A)
Part VI
Chapter 18  Representation Theory and Character Theory
  18.1 Linear Actions and Modules over Group Rings
  18.2 Wedderburn's Theorem and Some Consequences
  18.3 Character Theory and the Orthogonality Relations
Chapter 19  Examples and Applications of Character Theory
  19.1 Characters of Groups of Small Order · 19.2 Theorems of Burnside and Hall
  19.3 Introduction to the Theory of Induced Characters
Appendix I: Cartesian Products and Zorn's Lemma · Appendix II: Category Theory
```

**Note for the commission's page 1.** D&F **10.4** is where the noncommutative tensor
product lives in the standard reference, and **10.5** carries projective/injective/flat.
The tensor/symmetric/exterior algebras are in **11.5**, not in Chapter 10.

### 1.7 William Crawley-Boevey, *Noncommutative algebra* — §-headings, verbatim

Read range: **§1 in full (pp. 1–14, i.e. §§1.1–1.13)**, plus the §-headings of §2–§4.
Headings transcribed from the text (no PDF outline):

```
1 Basics of rings and modules
  1.1 Rings · 1.2 Modules · 1.3 Exact sequences · 1.4 Algebras · 1.5 Hom spaces
  1.6 Products and sums · 1.7 Generators and relations · 1.8 Finitely generated modules
  1.9 Simple and semisimple modules · 1.10 An exotic example · 1.11 Tensor products
  1.12 Idempotents · 1.13 Non-unital rings
2 Constructions of algebras
  2.1 Tensor algebras and free algebras · 2.2 Free products of algebras
  2.3 Matrix algebras and nth roots · 2.4 Path algebras · 2.5 Representations of quivers
  2.6 Submodules of free modules for path algebras · 2.7 Power series
  2.8 Algebras given by quivers with relations · 2.9 Diamond lemma
  2.10 Skew polynomial rings · 2.11 Weyl algebra · 2.12 Group algebras
  2.13 Invariant rings · 2.14 Skew group algebras · 2.15 Graded and filtered rings
  2.16 Localization
3 Module categories
  3.1 Categories · 3.2 Monomorphisms and epimorphisms · 3.3 Functors
  3.4 Natural transformations · 3.5 Equivalences of categories
  3.6 Universal constructions and additive categories
  3.7 Abelian categories and exact functors · 3.8 Projective modules · 3.9 Injective modules
  3.10 Flat modules · 3.11 Envelopes and covers · 3.12 Morita Equivalence
4 Homological algebra
  4.1 Complexes · 4.2 Ext · 4.3 Description of Ext¹ using short exact sequences
  4.4 Global dimension · 4.5 Tor · 4.6 Global dimension for noetherian rings
```

Crawley-Boevey states results as unnumbered "Properties (1)…(8)" or as a bare
`Lemma`/`Theorem` under a section heading rather than as numbered theorems; cite as
"Crawley-Boevey §1.11(2)" or "Crawley-Boevey §1.6 Lemma".

**Named results in the range I read.** §1.1 the isomorphism theorems for rings, the
opposite ring, M_n(R)^op ≅ M_n(R^op) by transpose · §1.2 left/right modules, bimodules,
restriction of scalars, the three isomorphism theorems for modules · §1.3 exact sequences,
the **Snake Lemma** · §1.4 algebras · **§1.5 Lemma** Hom_R(R,M) ≅ M and
**End_R(R) ≅ R^op** · **§1.6** the axiom of choice, **Zorn's lemma**, the well-ordering
theorem (*"We shall freely use the axiom of choice"*), and the **Lemma**
Hom_R(X, ∏Y_i) ≅ ∏Hom_R(X,Y_i), Hom_R(⨁X_i, Y) ≅ ∏Hom_R(X_i,Y), with the explicit
consequence **End_R(X₁⊕⋯⊕X_n) ≅ the n×n array with (i,j) entry Hom(X_j,X_i)** and
End_R(Xⁿ) ≅ M_n(End_R(X)) · §1.7 generators and relations, free modules ·
§1.8 finitely generated modules · **§1.9 Schur's Lemma**, the **Theorem** giving the three
equivalents for semisimple (sketched via Zorn, citing P.M. Cohn *Algebra 2* §4.2 for full
details), the **Corollary** (submodules and quotients), the **Theorem** that over a
division ring every module is free and semisimple, and the **Artin–Wedderburn Theorem** in
four-equivalent form (transcribed in §2.4a) · **§1.10 Specker's theorem (1950)**:
Hom_Z(Z^N, Z) is free with basis the coordinate projections, hence **Z^N is not free** ·
**§1.11 Tensor products**, Properties (1)–(8) · **§1.12 Idempotents**, the Peirce
decomposition, the bijection {idempotents in End_R(M)} ↔ {decompositions M = X ⊕ Y}, and
eRe ≅ End_R(Re)^op.

### 1.8 Robert Wisbauer, *Foundations of Module and Ring Theory* — printed TOC, verbatim

Read range: **§12 in full, §20 in full**, plus the whole printed TOC. Verbatim with page
numbers (relevant chapters only; the full 56-section list runs to p. 576):

```
Chapter 1  Elementary properties of rings
  1 Basic notions 1 · 2 Special elements and ideals in rings 7 · 3 Special rings 14
  4 Chain conditions for rings 26 · 5 Algebras and group rings 30
Chapter 2  Module categories
  6 Elementary properties of modules 36 · 7 The category of R-modules 43
  8 Internal direct sum 57 · 9 Product, coproduct and subdirect product 64
  10 Pullback and pushout 73 · 11 Functors, Hom-functors 80
  12 Tensor product, tensor functor 90
Chapter 3  Modules characterized by the Hom-functor
  13 Generators, trace 105 · 14 Cogenerators, reject 112
  15 Subgenerators, the category σ[M] 118 · 16 Injective modules 127
  17 Essential extensions, injective hulls 137 · 18 Projective modules 148
  19 Superfluous epimorphisms, projective covers 159
Chapter 4  Notions derived from simple modules
  20 Semisimple modules and rings 165 · 21 Socle and radical of modules and rings 174
  22 The radical of endomorphism rings 185 · 23 Co-semisimple and good modules and rings 190
Chapter 5  Finiteness conditions in modules
  24 The direct limit 196 · 25 Finitely presented modules 207
  26 Coherent modules and rings 214 · 27 Noetherian modules and rings 221
  28 Annihilator conditions 230
Chapter 6  Dual finiteness conditions
  29 The inverse limit 238 · 30 Finitely copresented modules 248
  31 Artinian and co-noetherian modules 253 · 32 Modules of finite length 265
Chapter 7  Pure sequences and derived notions
  33 P-pure sequences, pure projective modules 274 · 34 Purity in σ[M], R-MOD and Z-MOD 281
  35 Absolutely pure modules 297 · 36 Flat modules 304 · 37 Regular modules and rings 313
  38 Copure sequences and derived notions 322
Chapter 8  Modules described by means of projectivity
  39 (Semi)hereditary modules and rings 328 · 40 Semihereditary and hereditary domains 341
  41 Supplemented modules 348 · 42 Semiperfect modules and rings 371
  43 Perfect modules and rings 382
Chapter 9  Relations between functors
  44 Functorial morphisms 393 · 45 Adjoint pairs of functors 399
  46 Equivalences of categories 413 · 47 Dualities between categories 425
  48 Quasi-Frobenius modules and rings 445
Chapter 10  Functor rings
  49 Rings with local units 464 · 50 Global dimensions of modules and rings 476
  51 The functor Hom(V,−) 485 · 52 Functor rings of σ[M] and R-MOD 506
  53 Pure semisimple modules and rings 521 · 54 Modules of finite representation type 531
  55 Serial modules and rings 539 · 56 Homo-serial modules and rings 560
Bibliography 576 · Index 599
```

Wisbauer numbers by **paragraph within a section** (e.g. `12.3 Tensor product of
homomorphisms`, `12.4 Tensor product and direct sums`), not by "Theorem n". Cite as
"Wisbauer 12.4".

### 1.9 J.S. Milne, *A Primer of Commutative Algebra* — PDF bookmark outline, verbatim

Read range: **§1, §3, §10, §11, §16.**
```
1 Rings and algebras · 2 Ideals · 3 Noetherian rings · 4 Unique factorization
5 Rings of fractions · 6 Integral dependence · 7 The going-up and going-down theorems
8 Noether's normalization theorem · 9 Direct and inverse limits · 10 Tensor Products
11 Flatness · 12 Finitely generated projective modules
13 Zariski's lemma and the Hilbert Nullstellensatz · 14 The spectrum of a ring
15 Jacobson rings and max spectra · 16 Artinian rings
17 Quasi-finite algebras and Zariski's main theorem. · 18 Dimension theory for finitely
generated k-algebras · 19 Primary decompositions · 20 Dedekind domains
21 Dimension theory for noetherian rings · 22 Regular local rings · 23 Flatness and fibres
24 Completions · A Solutions to the exercises. · References · Index
```
Named results in §10–§11: **Prop 10.1** (identity object, associativity, commutativity —
i.e. the symmetric monoidal structure) · Prop 10.2 (⊗ commutes with direct limits) ·
Ex 10.6 (the category of A-modules with ⊗ is symmetric monoidal) ·
**Prop 11.1** (right exactness of M ⊗ −) · **Def 11.2 flat, faithfully flat** ·
Ex 11.5 (k[X,X⁻¹] is flat over k[X]; k[X]/(X) is not) · Ex 11.6 (direct limits of flats
are flat) · **Prop 11.7** (faithfully flat detects exactness) ·
Cor 11.9, Cor 11.10, **Prop 11.11** (the faithfully flat descent sequence) ·
Cor 11.12, Prop 11.13, **Prop 11.14** (S⁻¹A ⊗_A M ≅ S⁻¹M; localization is flat) ·
Cor 11.15, **Cor 11.16** (flatness is local) · Prop 11.17–11.20 ·
**Thm 11.21 (generic flatness)**.

### 1.10 Alexander Duncan, *MATH 742 Modules and Wedderburn Theory* — §-headings and results

Read range: **the whole 33-page document.** Duncan's convention, stated up front:
*"all rings and algebras are unital (have an identity element) but are not necessarily
commutative. We will reserve k for a commutative ring, which will usually be a field or Z."*
```
1 Warm up: Matrix Algebra over a Field
  1.1 Ideals · 1.2 Idempotents
2 The Group Ring
  2.1 Modules of the Group Ring · 2.2 Center of the Group Ring
  2.3 Decomposition of the Complex Group Algebra · 2.4 Idempotents of the Group Ring
3 Bimodules and Tensor Products
4 Wedderburn Decomposition
5 Central Simple Algebras
  5.1 Quaternion Algebras · 5.2 Cyclic Algebras · 5.3 Brauer groups over special fields
```
Named: Ex 1.1 · **Def 1.2** simple / indecomposable / semisimple module ·
**Prop 1.3** left ideals of M_n(k) ↔ subspaces of kⁿ · **Cor 1.6** every one-sided ideal
of M_n(k) is principal · **Def 1.7** simple ring · **Prop 1.8** M_n(k) is a simple ring ·
**Def 1.9** idempotent, orthogonal, primitive · **Def 1.11** the center ·
**Def 2.1** group ring · **Prop 2.5** a k-representation of G = a left kG-module ·
**Thm 2.7 (Maschke restated)** · **Prop 2.8** the center of kG has the class-sum basis ·
**Thm 2.10** CG ≅ ⨁ End_C(W_i) · **Cor 2.11** CG ≅ ⨁ M_{n_i}(C) · Ex 2.13 (RG for
G = Z/3: R ⊕ C, so the corollary is special to C) · **Prop 2.14** the primitive central
idempotents · **Def 3.1** k-algebra (with π(k) ⊆ Z(R)) · **Def 3.2** opposite ring ·
Ex 3.3 (End(V)^op ≅ End(V^∨)) · **Exercise 3.4** an explicit R with R ≇ R^op ·
**Def 3.5** (R,S)-bimodule · Ex 3.7, 3.8 · **Def 3.9** Hom for left vs right modules ·
**Prop 3.12** tensor products exist and are unique up to unique isomorphism ·
**Thm 3.13 (Tensor–Hom Adjunction)** in the four-ring bimodule form ·
**Def 3.15 restriction of scalars**, Ex 3.16 · **Def 3.17 extension of scalars**, Ex 3.18 ·
**Exercise 3.19** kG ⊗_{kH} W ≅ Hom_{kH}(kG,W) ·
**Def 4.2** composition series · **Thm 4.3 (Jordan–Hölder)** ·
**Prop 4.5** finite-dimensional k-algebra: f.g. modules are Noetherian and Artinian ·
**Lem 4.6** the equivalents for semisimple · **Lem 4.7** submodules and quotients ·
**Lem 4.8** every f.g. left A-module is semisimple ⟺ ᴀA is semisimple ·
**Cor 4.10** · **Lem 4.11** Hom(⨁M_i, ⨁N_j) ≅ ⨁ Hom(M_i,N_j) ·
**Lem 4.12** · **Lem 4.13** A^op ≅ End_A(ᴀA) · **Lem 4.14** M_n(A)^op ≅ M_n(A^op) ·
**Cor 4.15** the equivalents for a semisimple finite-dimensional algebra ·
**Def 5.1** central simple algebra · **Prop 5.2, 5.3** · **Lem 5.4** Z(A⊗B) = Z(A)⊗Z(B) ·
**Lem 5.5** A central simple, B simple ⟹ A ⊗_k B simple · **Lem 5.6** A ⊗_k A^op ≅ M_n(k) ·
**Def 5.7 Brauer group** · **Prop 5.9** the five equivalents for central simple.

### 1.11 Patrick Brosnan, *Rational Canonical and Jordan Forms* — §-headings and results

Read range: **the whole 10-page document.** Brosnan works over an arbitrary field F with
V a finite-dimensional F-vector space and T ∈ L(V), and **does not go through the general
PID structure theorem**: he proves the canonical forms directly by F[x]-module arguments.
```
1. Introduction · 2. Polynomials · 3. Cyclic subspaces and companion matrices
4. Rational canonical form · 5. Jordan form
```
Named: **Def 2.1** gcd (the monic generator of the ideal) · Lem 2.2, Cor 2.3 ·
**Thm 2.4** p,q coprime: p | qf ⟺ p | f · Cor 2.5 · **Def 2.6** irreducible ·
**Thm 2.7** Euclid's lemma · **Def 2.9**, Prop 2.10, **Thm 2.11** (over an algebraically
closed field the monic irreducibles are x − a) ·
**Def 3.1/3.2** Ann(T) and min(T) · **Def 3.3** T-stable subspace · Lem 3.5, Def 3.6 ·
Prop 3.7, **Prop 3.8** (W T-stable ⟹ min(W) | min(V)) ·
**Prop 3.9** for a cyclic V = F[T]α with min(α) of degree n: (α, Tα, …, T^{n−1}α) is a
basis and T has the companion matrix in it · **Def 3.10 companion matrix** ·
**Thm 3.11** for cyclic V, min(T) = char(T) ·
**Lem 4.1, Lem 4.3, Lem 4.4** (coprime minimal polynomials: sums are direct, min
multiplies) · **Thm 4.5** there is an α ∈ V with min(α) = min(V) ·
**Lem 4.6, Lem 4.7**, **Thm 4.8** (a cyclic subspace generated by such an α is a direct
summand by a **dual-space** argument) · **Thm 4.9 (Cayley–Hamilton)** as a corollary ·
**Prop 4.11** the product of the elementary divisors is the characteristic polynomial ·
**Def 4.12** nilpotent, **Prop 4.13** the nilpotent companion matrix ·
**Thm 5.1** the primary decomposition V = ⨁ ker(T − a_i)^{d_i} · **Cor 5.2** ·
**Thm 5.4** reducing xI − T by row/column operations to a diagonal matrix of monic
polynomials (**this is Smith normal form over F[x], stated but with the reduction only
sketched**) · Ex 5.5.

### 1.12 The Stacks Project, Chapter 10 "Commutative Algebra" — section list

Read range: **the chapter's section list (168 sections) and tag 00D4.** The sections
relevant to this commission, in the project's own numbering:

```
10.3 Basic notions · 10.4 Snake lemma · 10.5 Finite modules and finitely presented modules
10.6 Ring maps of finite type and of finite presentation · 10.7 Finite ring maps
10.8 Colimits · 10.9 Localization · 10.10 Internal Hom
10.11 Characterizing finite and finitely presented modules
10.12 Tensor products · 10.13 Tensor algebra · 10.14 Base change · 10.15 Miscellany
10.16 Cayley-Hamilton · 10.19 The Jacobson radical of a ring · 10.20 Nakayama's lemma
10.31 Noetherian rings · 10.39 Flat modules and flat ring maps
10.40 Supports and annihilators · 10.51 More Noetherian rings · 10.52 Length
10.53 Artinian rings · 10.75 Tor groups and flatness · 10.77 Projective modules
10.78 Finite projective modules · 10.81 Characterizing flatness
10.82 Universally injective module maps · 10.93 Characterizing projective modules
```
The Stacks Project is **commutative throughout** (its §10.2 "Conventions" fixes that), so
it cannot serve the noncommutative half of page 1. Its value here is that each statement
is tag-addressable with fully explicit hypotheses.

---

## PART 2 — The mathematics, with exact hypotheses, proof strategies, prerequisites

Throughout: **"ring" means associative with 1, and modules are unital (1·m = m)** unless
said otherwise. That is the convention of every source in this harvest except where
noted in PART 3. `R` is a general ring, `A` a commutative ring, `k` a field, `D` a
division ring.

### 2.1 The definitional groundwork the published pages left out

**Hom_R(M,N) as an R-module — and exactly when that works.** Ash 4.4.1 states the trap
precisely and is the source to follow:
> Hom_R(M,N) is always an **abelian group**. Attempting to define (sf)(x) = s·f(x) gives
> (sf)(rx) = srf(x) while r·(sf)(x) = rsf(x), and *"the two expressions can disagree if R
> is not commutative."* So Hom_R(M,N) is an R-module **when R is commutative**, and in
> general only an abelian group.

*Prerequisites:* nothing. *The honest general statement* (Duncan Ex 3.8; Crawley-Boevey
§1.5): if M is an (R,S)-bimodule and N is an (R,T)-bimodule then Hom_R(M,N) is an
(S,T)-bimodule. Duncan Ex 3.8 in the cleanest special case: Hom_k(V,W) is an
(End_k(W), End_k(V))-bimodule via f·g·h = f∘g∘h.

**End_R(M) as a ring, and End_R(R) ≅ R^op.** Ash 4.4.1 and Ash §4.4 Problem 4;
Duncan Lem 4.13; Crawley-Boevey §1.5.
> For a free R-module M of rank n, End_R(M) ≅ M_n(R^o), the n×n matrices over the
> **opposite** ring; if R is commutative, End_R(M) ≅ M_n(R) (Ash §4.4 Prob. 6, 7).
> With n = 1: **End_R(R) ≅ R^op** (Ash §4.4 Prob. 4; Duncan Lem 4.13 as a k-algebra
> isomorphism A^op ≅ End_A(ᴀA)).

*Proof strategy* (Ash 4.4.1, 9.4.1): a homomorphism h: R → M out of the regular module is
determined by h(1), and h(r) = rh(1); composing two such reverses the order, which is
exactly the opposite multiplication. *Prerequisite:* only the module axioms.
Duncan Lem 4.14: **M_n(A)^op ≅ M_n(A^op)** via transpose — needed to convert
End_D(V) ≅ M_n(D^op) between the two standard shapes of Wedderburn's theorem.

**R-algebras.** Two definitions in the harvest, and they are **not** the same:
- Conrad `algebras` **Def 1.1**: a *k*-algebra (k a **field**) is a possibly
  noncommutative ring with identity that is also a k-vector space with
  α(ab) = (αa)b = a(αb).
- Duncan **Def 3.1**: for k a **commutative ring**, a k-algebra is a possibly
  noncommutative ring R with a ring homomorphism π: k → R such that **π(k) ⊆ Z(R)**.
- Ash 4.1.8 "Another Way to Describe an Algebra" gives the same equivalence.
- Crawley-Boevey §1.4 and Milne CA §1 ("Rings and algebras") agree with Duncan.
**Recommendation:** adopt Duncan's, which specialises correctly to Conrad's and is the
one the tensor-product-of-algebras theorem needs.

**The two dictionary theorems.** Conrad `moduleintro` §4 "Abelian groups vs. modules"
proves: *a Z-module is exactly an abelian group*, the Z-action being forced
(n·m = m + ⋯ + m). Clark **Exercise 3.15**: *"the terms k-module and vector space over k
are synonymous"* for k a field. Clark **Prop 3.4** upgrades this to a characterisation:
for a commutative ring R, **every R-module is free ⟺ R is a field**. (Clark's remark
after Prop 3.4: in the noncommutative case the same argument only gives that R is a
*simple ring*, and there are noncommutative counterexamples — so this is genuinely a
commutative statement.) The general framing (Clark Ex 3.5, Prop 3.1): a left R-module
structure on an abelian group M is the same as a ring homomorphism R → End(M), and a
right R-module structure is the same as a homomorphism R^op → End(M).

**The isomorphism and correspondence theorems for modules.** Ash 4.2.1–4.2.5 names them:
Factor Theorem, First, Second (L/(L∩N) ≅ (L+N)/N), Third ((M/N)/(L/N) ≅ M/L),
Correspondence Theorem. Crawley-Boevey §1.2 states all three in one block for a general
(noncommutative) ring and notes they hold verbatim for right modules and bimodules.
*Proof strategy:* verbatim from the group-theoretic versions, plus the observation that
every subgroup is normal here so no normality hypothesis is needed. *Prerequisite:* the
group isomorphism theorems and the fact that a submodule is a subgroup closed under
scaling.

**Every f.g. nonzero module has a maximal proper submodule.** Ash 9.7.1:
> If M is finitely generated, then every submodule N of M is contained in a maximal
> submodule, **by Zorn's lemma**. *[If the union of a chain of proper submodules is M,
> then the union contains all the generators, hence some member of the chain contains all
> the generators, a contradiction.]* Taking N = 0, J(M) is a proper submodule of M.
> Since R is finitely generated (by 1_R), **J(R) is always a proper left ideal.**

*Exact hypotheses:* M finitely generated **and nonzero**; R arbitrary (not assumed
commutative). *Choice strength:* Zorn — see §2.9. The proof is exactly one line beyond
Zorn: a chain of proper submodules has proper union because a generator would otherwise
already lie in one member of the chain.

### 2.2 The tensor product over a possibly noncommutative ring

**The setting.** Crawley-Boevey §1.11 and Wisbauer 12.1–12.2 are the two sources here,
and they agree exactly.
> Let R be a ring, X a **right** R-module and Y a **left** R-module. X ⊗_R Y is the
> additive group generated by symbols x⊗y (x ∈ X, y ∈ Y) subject to
> (x + x′)⊗y = x⊗y + x′⊗y, x⊗(y + y′) = x⊗y + x⊗y′, and **(xr)⊗y = x⊗(ry)** for all
> r ∈ R.

**The output is only an abelian group.** This is the single most important hypothesis
point on page 1 and both sources say it explicitly. Wisbauer 12.2 constructs
M ⊗_R N = F/K where F is the free **Z**-module on M × N, K the submodule generated by
the three families of relations, and observes: *"the image of τ, Im τ = {m⊗n}, is a
generating set of M ⊗_R N **as a Z-module**"* — and that τ itself is **not surjective**.
The extra structure comes from bimodules, not from R:

- (Crawley-Boevey §1.11(1)) If R is a K-algebra (K = Z if R is only a ring), then
  X ⊗_R Y is a K-module via λ(x⊗y) = xλ⊗y.
- (§1.11(2)) If X is an **S-R-bimodule**, then X ⊗_R Y is a **left S-module** via
  s(x⊗y) = (sx)⊗y. Dually, if Y is an **R-T-bimodule**, X ⊗_R Y is a **right T-module**.
- If R is commutative, every left module is an R-R-bimodule and the two coincide, which
  is why Conrad `tensorprod` can work with a single R throughout.

**The universal property, correctly stated.** Crawley-Boevey §1.11(1): a map
φ: X × Y → Z is **R-balanced** if φ(xr,y) = φ(x,ry) for all x,y,r, and K-bilinear if it is
K-linear in each argument. Then
> Hom_K(X ⊗_R Y, Z) ≅ B_{K,R}(X,Y,Z),
sending θ to (x,y) ↦ θ(x⊗y) and φ to the map sending Σx_i⊗y_i to Σφ(x_i,y_i).
**In the commutative case** Conrad `tensorprod` Def 3.1 states the same thing with
"bilinear" alone (bilinearity over a commutative R already forces balancedness).

**Well-definedness obligations — exactly what has to be checked.** The commission asked
for this precisely; here is the honest list, read off the two constructions.

For the *construction*:
1. F, the free Z-module (Wisbauer) or free R-module (Conrad Thm 3.2) on the **set**
   M × N, exists — no hypotheses.
2. K, the subgroup/submodule generated by the three relation families, is a
   subgroup/submodule — immediate.
3. τ(m,n) := [m,n] + K is balanced/bilinear — this *is* the content of the three relation
   families and needs no argument.
4. Im τ generates F/K — because the [m,n] generate F.

For *every map out of a tensor product* (Conrad's standing warning after Thm 4.1:
*"To define a linear map out of M ⊗_R N sending all elementary tensors m⊗n to specific
places, **always back up** and start with a map out of M × N"*):
5. Define the intended map first on the **product** M × N, as a function of the pair.
6. Check it is **additive in each variable separately**.
7. Check it is **R-balanced** (or bilinear, in the commutative case).
8. Only then invoke the universal property to get the induced map on M ⊗_R N; uniqueness
   is automatic because elementary tensors generate.
9. To prove two maps out of M ⊗_R N agree, check on elementary tensors — legitimate,
   because they generate (Conrad Thm 3.3).
10. **You may not check anything by "choosing a representation" of a tensor.** Wisbauer
    12.2 states the reason: *"m⊗n only represents a coset and m, n are not uniquely
    determined. Also a presentation of zero in M ⊗_R N is not unique."*

**What is true of elementary tensors and what is not.** Conrad Thm 3.5: m⊗0 = 0 = 0⊗n
(same proof as a·0 = 0 in a ring). Conrad Thm 3.3: if {x_i} spans M and {y_j} spans N
then {x_i ⊗ y_j} spans M ⊗_R N. Conrad Thm 4.9: if M and N are **free** with bases
{e_i}, {f_j}, then {e_i ⊗ f_j} is a **basis** of M ⊗_R N. Conrad Thm 5.11: over a
**field**, v₁⊗⋯⊗v_k = 0 ⟺ some v_i = 0 — **and this is false over a general ring**
(Conrad Rem 4.26's example: in R ⊗_R R with ab = 0 and a,b ≠ 0, a⊗b = 0).

**The basic isomorphisms** (Crawley-Boevey §1.11(3)–(6); Conrad §5; Milne Prop 10.1;
Wisbauer 12.4–12.6). All hold over a general ring in the stated bimodule form.
- X ⊗_R R ≅ X (x⊗r ↦ xr) and R ⊗_R Y ≅ Y.
- **Direct sums:** (⨁_i X_i) ⊗_R Y ≅ ⨁_i (X_i ⊗_R Y) and X ⊗_R (⨁_i Y_i) ≅ ⨁_i (X⊗_R Y_i).
  Hence R^{(I)} ⊗_R R^{(J)} ≅ R^{(I×J)}.
  **Direct products fail** — Conrad Rem 5.5, with two witnesses (§4 below).
- **Quotients:** for a submodule X′ ⊆ X, (X/X′) ⊗_R Y ≅ coker(X′ ⊗ Y → X ⊗ Y).
  Hence for a **right** ideal I: (R/I) ⊗_R Y ≅ Y/IY; for a **left** ideal J:
  X ⊗_R (R/J) ≅ X/XJ; and (R/I) ⊗_R (R/J) ≅ R/(I + J).
  Crawley-Boevey's own example: **(Z/2Z) ⊗_Z (Z/3Z) = 0**.
- **Associativity across two rings:** for X_S, {}_S Y_R, {}_R Z:
  X ⊗_S (Y ⊗_R Z) ≅ (X ⊗_S Y) ⊗_R Z.
- **Commutativity** M ⊗ N ≅ N ⊗ M requires R **commutative** (Conrad Thm 5.1). Over a
  general ring there is no such map — the two sides are not even the same kind of object.

**Right exactness, and the exact failure of left exactness.** Milne Prop 11.1 (commutative
form): for 0 → N′ → N → N″ → 0 exact, M ⊗ N′ → M ⊗ N → M ⊗ N″ → 0 is exact. Conrad
Thm 2.12: a tensor product of surjections is surjective; Conrad **Ex 2.13** is the minimal
counterexample to injectivity: α: Z/pZ → Z/p²Z given by α(x) = px is injective, and
1 ⊗ α: Z/pZ ⊗ Z/pZ → Z/pZ ⊗ Z/p²Z is the map a⊗x ↦ pa⊗x = 0, hence zero on a nonzero
module. *Prerequisite for right exactness:* the quotient isomorphism above.

**Hom–tensor adjunction, in three increasingly general forms.**
1. (Conrad Thm 5.7, commutative) Bil_R(M,N;P) ≅ Hom_R(M ⊗_R N, P) ≅ Hom_R(M, Hom_R(N,P)),
   i.e. **− ⊗_R N ⊣ Hom_R(N,−)** (Conrad Ex 6.35).
2. (Crawley-Boevey §1.11(2)) for X an S-R-bimodule and Z a left S-module,
   Hom_S(X ⊗_R Y, Z) ≅ Hom_R(Y, Hom_S(X,Z)); dually for Y an R-T-bimodule,
   Hom_T(X ⊗_R Y, Z) ≅ Hom_R(X, Hom_T(Y,Z)).
3. (Duncan **Thm 3.13**, the four-ring form) M an (R,S)-bimodule, N an (S,U)-bimodule,
   P an (R,V)-bimodule ⟹ Hom_R(M ⊗_S N, P) ≅ Hom_S(N, Hom_R(M,P)) naturally.
*Proof strategy in all three:* both sides are identified with the module of
bilinear-balanced maps M × N → P satisfying the appropriate one-sided linearity; the
identification in each direction is by currying, and one checks the two constructions are
mutually inverse. **Crawley-Boevey states this identification explicitly** —
*"Both sides correspond to the subset of B_{K,R}(X,Y,Z) consisting of bilinear balanced
maps which are also S-linear in the first argument."* That is the cheapest honest route.

**Base change / extension of scalars.** For a ring map f: R → S (commutative case: Conrad
`tensorprod` §6; general case: Duncan Def 3.15/3.17).
- **Restriction of scalars** (Duncan Def 3.15, Conrad Thm 6.3): a left S-module is a left
  R-module via r·n := f(r)n, and every S-linear map is R-linear.
- **Extension of scalars** (Duncan Def 3.17, Conrad Thm 6.4): S ⊗_R M carries a unique
  S-module structure with s′(s⊗m) = s′s ⊗ m, compatible with the R-structure
  (rt = f(r)t).
- **Conrad Thm 6.7:** if F is free over R with basis {e_i}, then S ⊗_R F is free over S
  with basis {1 ⊗ e_i}. Hence S ⊗_R Rⁿ ≅ Sⁿ (Ex 6.8), S ⊗_R R[X] ≅ S[X] (Ex 6.9).
- **Conrad Thm 6.30/6.31 (the universal property and the adjunction):** the map
  M → S ⊗_R M, m ↦ 1⊗m, is universal among R-linear maps from M to S-modules; and
  Hom_R(M,N) ≅ Hom_S(S ⊗_R M, N) as S-modules. Conrad Rem 6.32 records that this **is**
  Frobenius reciprocity when R = C[H] ⊆ S = C[G]; Duncan Ex 3.18/3.19 gives the same
  statement for kH ⊆ kG, and Exercise 3.19 notes the finite-index coincidence
  kG ⊗_{kH} W ≅ Hom_{kH}(kG, W).
- **Conrad Thm 4.4:** the matrix of φ_S with respect to the base-changed bases is
  **literally the same matrix** as that of φ. This is the reason base change is
  computationally free, and the cheapest bridge to the linear-algebra pages.

**Tensor products of algebras.** Conrad `tensorprod2` **Thm 7.1**: for A, B algebras over
a **commutative** R there is a unique multiplication on A ⊗_R B with
(a⊗b)(a′⊗b′) = aa′ ⊗ bb′, and 1⊗1 is the identity. Cor 7.2: commutative ⊗ commutative is
commutative. Crawley-Boevey §1.11(7) states the same for K-algebras R, S and adds two
facts worth having: **M_n(K) ⊗_K S ≅ M_n(S)**, and *"an R-S-bimodule (for which the two
actions of K agree) is the same thing as a left R ⊗_K S^op-module."*
*Well-definedness obligation:* the multiplication must be built as a map out of
(A ⊗ B) ⊗ (A ⊗ B), i.e. from a **four-variable** map A × B × A × B → A ⊗ B that is
R-multilinear — Conrad's Thm 5.6 (multilinear factorization) is the prerequisite, and
Conrad **Ex 7.5** is the cautionary example: the same construction applied to
(R³, cross product) produces a well-defined multiplication that is **neither associative
nor unital**, so the "algebra" conclusion genuinely uses associativity and unitality of A
and B.
Examples worth carrying: C ⊗_R C ≅ C × C (Ex 7.3); R ⊗_Q Q(√2) ≅ R × R (Ex 7.18);
Q(√2) ⊗_Q Q(√3) ≅ Q(√2)[X]/(X²−3), **a field** (Ex 7.20);
R/I ⊗_R R/J ≅ R/(I+J) as R-algebras (Ex 7.7); R[X] ⊗_R R[Y] ≅ R[X,Y] (Ex 7.8);
Duncan Lem 5.4 Z(A ⊗_k B) = Z(A) ⊗_k Z(B) and Lem 5.6 A ⊗_k A^op ≅ M_n(k) for A central
simple.

**The tensor algebra.** Conrad `tensorprod2` §8: **Thm 8.1** gives a criterion for a
graded family {M_k} with multiplications µ_{k,ℓ} to assemble into an R-algebra;
**Lem 8.2** produces the maps β_{k,ℓ}: M^{⊗k} × M^{⊗ℓ} → M^{⊗(k+ℓ)}; **Thm 8.3** concludes
that ⨁_{k≥0} M^{⊗k} is an R-algebra; **Def 8.4** names it T(M); **Ex 8.6** identifies T(F)
for F free of rank n with the polynomial ring in n **noncommuting** indeterminates; and
**Thm 8.8** is the universal property: every R-linear map M → A into an R-algebra extends
uniquely to an R-algebra map T(M) → A. Stacks 10.13 "Tensor algebra" is the
tag-addressable cross-reference. **Cost note:** this is genuinely eight results deep and
is the natural split point if page 1 approaches the 60-item ceiling.

**Flat modules.** Conrad `tensorprod2` **Def 3.1**: N is flat if for every injective
φ: M → M′ the map 1⊗φ: N ⊗_R M → N ⊗_R M′ is injective. Milne **Def 11.2** is identical
and adds **faithfully flat** (flat, and M ⊗_A N = 0 ⟹ N = 0).
- **Thm 3.2** free ⟹ flat, **with no finiteness hypothesis on the basis** (Conrad says so
  explicitly).
- **Prop 3.40 (Clark)** projective ⟹ flat, because a projective is a direct summand of a
  free and Prop 3.37 says a direct sum is flat ⟺ each summand is.
- **Thm 3.3** the fraction field K of a domain R is a flat R-module. *Conrad flags that
  this is not a special case of "free ⟹ flat"* — K is generally not free over R.
- **Thm 3.6** M flat ⟹ I ⊗_R M ≅ IM for every ideal I.
- **Thm 3.10** N flat ⟹ ker(1 ⊗ φ) = N ⊗ ker φ.
- **Thm 3.11** a tensor product of two flat modules is flat; **Thm 3.12/Cor 3.13** for
  tensor products of injective maps between flats.
- **Prop 3.38 (Clark)** over a domain, flat ⟹ torsionfree; **the converse is false**
  (Clark **Ex 3.39**, §4 below).
- **Thm 3.54 (Clark)** over a **local** ring, for a **finitely presented** module,
  free ⟺ projective ⟺ flat ⟺ (m ⊗ M → mM injective). Both hypotheses are load-bearing.
- Milne Prop 11.14: localization S⁻¹A is flat over A; Cor 11.16: **flatness is a local
  property**.

### 2.3 Chain conditions

**Definitions.** Ash 7.5.1/7.5.2, in a section that says up front *"rings are not assumed
commutative"*:
> M satisfies **acc** if every increasing chain of submodules stabilizes; **dcc** if every
> decreasing chain stabilizes. **Prop 7.5.2:** acc ⟺ every nonempty collection of
> submodules has a **maximal** element (this defines *Noetherian*); dcc ⟺ every nonempty
> collection has a **minimal** element (this defines *Artinian*).
> **Prop 7.5.3:** M is Noetherian ⟺ **every submodule of M is finitely generated.**
> **7.5.4:** R is Noetherian/Artinian if it is so as a module over itself; *"If we need to
> distinguish between R as a left, as opposed to right, R-module, we will refer to a left
> Noetherian and a right Noetherian ring."*

Conrad `noetherianmod` **Def 1.4** takes "every submodule is finitely generated" as the
**definition** and proves the three-way equivalence at **Thm 1.7**; Conrad
`noetherian-ring` **Def 1.1** and **Thm 3.1** do the same for rings. Wisbauer §27 is
"Noetherian modules and rings", §31 "Artinian and co-noetherian modules", §32 "Modules of
finite length". Altman–Kleiman §16 is "Chain Conditions". **See PART 3 for the
definitional flashpoint.**

**Behaviour in short exact sequences.** Ash **7.5.7** (and Conrad `noetherianmod`
**Thm 2.3**): for N ⊆ M, **M is Noetherian ⟺ N and M/N are Noetherian**; same for
Artinian. *Proof strategy:* (⟸) given a chain M_i in M, take i large enough that both
{M_i ∩ N} and {M_i + N} have stabilised, then a two-line diagram chase gives
M_i = M_{i+1}. *This one proposition is the engine for everything else:*
- Ash 7.5.8 / Conrad Cor 2.5: finite direct sums.
- Ash 7.5.9 / Conrad **Thm 4.1**: over a Noetherian ring, **M is Noetherian ⟺ M is
  finitely generated** (a f.g. module is a quotient of R^k).
- Conrad Thm 3.5: R Noetherian ⟹ R/I Noetherian.
- Conrad **Thm 2.8 / 3.3** and Clark **Thm 3.47**: a **surjective** endomorphism of a
  Noetherian module is injective; Clark's version is stronger and needs no chain
  condition: **every finitely generated module is Hopfian**, proved by making M an
  R[t]-module with t acting as f and applying Nakayama.

**Composition series and Jordan–Hölder.** Ash 7.5.10 defines a series
M = M₀ ≥ M₁ ≥ ⋯ ≥ M_n = 0, calls it a composition series when each M_i/M_{i+1} is simple,
and calls two series equivalent when they have the same length and the same factors up to
isomorphism and rearrangement. *By convention the zero module has a composition series.*
> **Ash 7.5.11 (Jordan–Hölder for modules):** if M has a composition series, any two
> composition series are equivalent; and any strictly decreasing sequence of submodules
> refines to a composition series.
> **Ash 7.5.12:** M has a composition series ⟺ M is **both** Noetherian **and** Artinian.

*Proof strategy* (Ash): the group-theoretic development transfers verbatim — the
Zassenhaus lemma, the Schreier refinement theorem, then Jordan–Hölder — and *no normality
hypothesis is needed because every submodule of a module is "normal"*. Ash flags the
irritation of a transfer proof and supplies the one genuinely new step: a composition
series of length n cannot coexist with a longer series, by Schreier plus "S has no proper
refinements". Duncan **Thm 4.3** states the same theorem for a left module over a
k-algebra. Clark Ch. 8 §4 "Normal Series" and §5 "The Krull–Schmidt Theorem" carry the
finer decomposition uniqueness. Altman–Kleiman §19 "Length" is the commutative account.
*Prerequisites:* the correspondence theorem and the second isomorphism theorem.

**Hopkins–Levitzki.** Ash **9.8.1**: R Artinian and M finitely generated ⟹ M is **both**
Artinian and Noetherian; in particular **an Artinian ring is Noetherian**.
*Proof strategy:* J = J(R) is nilpotent (Ash 9.7.13), so the filtration
M ⊇ JM ⊇ J²M ⊇ ⋯ ⊇ JⁿM = 0 has each factor an R/J-module; R/J is Artinian with zero
radical, hence semisimple (9.7.9/9.7.10), so each factor has a composition series; splice.
*Prerequisites:* the Jacobson radical, nilpotence of J(R) for Artinian R, and 7.5.7.
**The converse is false** — Z is Noetherian and not Artinian (Ash 7.5.5).

### 2.4 Simple and semisimple modules; Schur; Wedderburn–Artin

**Simple.** Ash 9.1.1: M ≠ 0 with no submodules but 0 and M. Ash §9.1 Prob. 3: M is
simple ⟺ M ≅ R/I for a **maximal left ideal** I. Prob. 4: ⟺ M is cyclic and every nonzero
element generates. Prob. 1: **R is simple as a module over itself ⟺ R is a division ring.**

**Semisimple — the three characterisations.** Ash **9.1.2**, the theorem the commission
asked for, stated with its exact hypotheses (M ≠ 0):
> (a) M is a **sum** of simple modules; (b) M is a **direct sum** of simple modules;
> (c) **every submodule of M is a direct summand.**

*Proof strategy.* (a)⟹(b): **Zorn's lemma** on the subsets J ⊆ I for which Σ_{j∈J} M_j is
direct; maximality plus simplicity of M_i forces N ∩ M_i = M_i for i ∉ J. (b)⟹(c): the
same Zorn argument applied to N + M(J), and Ash notes the useful refinement that *the
complement N′ can be taken to be a direct sum of some of the original M_i*. (c)⟹(a):
three observations — (1) property (c) is inherited by submodules, (2)
D = A⊕B⊕C ⟹ A = (A+B)∩(A+C), (3) **every nonzero submodule contains a simple submodule**
(again by Zorn) — then N := the sum of all simple submodules has a complement containing
no simple submodule, hence is 0. *Choice strength:* Zorn is used **three times** and Ash
does not attempt to avoid it.
Ash **9.1.3**: nonzero submodules and quotients of semisimple modules are semisimple.
Ash §9.1 Prob. 8: M is semisimple ⟺ **every short exact sequence 0 → N → M → P → 0
splits**. Duncan Lem 4.6/4.7 restate all of this for finite-dimensional algebras.
Clark Ch. 8 §3 and Wisbauer §20 are the two book-length treatments in the harvest.

**Schur's lemma.** Ash **9.2.1**, in two parts:
> (a) f ∈ Hom_R(M,N) with M, N **simple** ⟹ f is either identically 0 or an isomorphism.
> (b) M simple ⟹ **End_R(M) is a division ring.**
*Proof:* one line each (kernel and image are 0 or everything). *Prerequisite:* none.
Ash §9.2 Prob. 5 records the **third part** usually attached: if M is finite-dimensional
over an **algebraically closed** field F contained in R and M is simple, then every
R-endomorphism of M is multiplication by a scalar λ ∈ F. That extra part **needs
algebraic closedness and finite dimension**; Duncan Ex 2.13 (RG for G = Z/3 gives R ⊕ C)
is the witness that it fails over R.

**Jacobson density.** Ash **9.2.4**: M semisimple, A = End_R(M), f ∈ End_A(M), and
m₁,…,m_n ∈ M ⟹ **there exists r ∈ R with f(m_i) = r m_i for all i**.
*Proof strategy:* Ash **9.2.2** first proves the single-element case (M = Rm ⊕ N by
semisimplicity; the projection π lies in A, so f(m) = f(πm) = πf(m) ∈ Rm); then the
n-element case follows by applying 9.2.2 to Mⁿ, where f^{(n)} is represented by the
**scalar matrix** fI and so commutes with everything in End_R(Mⁿ) ≅ M_n(End_R(M))
(Ash 9.2.3). *Prerequisite:* Ash 9.2.3, the isomorphism End_R(Vⁿ) ≅ M_n(End_R(V)), which
is Ash §4.4 Prob. 3 — pure bookkeeping. Ash calls End_A(M) the **double centralizer**
of R and explains why: End_R(M) is the endomorphisms commuting with R, End_A(M) those
commuting with End_R(M).
Ash **9.2.5 (the double-centraliser corollary)**: M a **faithful simple** R-module,
D = End_R(M), and M **finite-dimensional as a D-vector space** ⟹ **End_D(M) ≅ R**.
*Ash's parenthetical prerequisite, worth quoting:* *"the standard results that every
vector space over a field has a basis, and any two bases have the same cardinality, carry
over if the field is replaced by a division ring."*

**Wedderburn–Artin: which proof is cheapest, and exactly what it needs.** The commission
asked this directly, and the answer is **not** the double-centraliser route. There are two
genuinely different proofs in this harvest and one is about four times cheaper.

#### 2.4a The cheap route (Crawley-Boevey §1.9) — RECOMMENDED

Crawley-Boevey states the theorem as a four-way equivalence for an arbitrary ring:
> **Artin–Wedderburn Theorem.** For a ring R, TFAE:
> (i) R is **left artinian and its Jacobson radical is zero**;
> (ii) R is **semisimple as an R-module**;
> (iii) **every** R-module is semisimple;
> (iv) R is isomorphic to a **finite direct product of matrix rings over division rings**.

His sketch of (ii) ⟹ (iv), transcribed, is the whole proof:
> *"If (ii) holds then, since R is finitely generated as a module (by 1), it must be a
> finite direct sum of simples. Collecting terms we can write
> R = S₁⊕⋯⊕S₁ ⊕ S₂⊕⋯⊕S₂ ⊕ ⋯ ⊕ S_n⊕⋯⊕S_n where S₁,…,S_n are non-isomorphic simples and
> there are n_i copies of each S_i. Then by Schur's lemma and the last statement in §1.6,
> one gets End_R(R) ≅ ∏_{i=1}^{n} M_{n_i}(D_i) with D_i = End_R(S_i). **Now take the
> opposite ring to get R**, giving (iv)."*

And the converse (iv) ⟹ (ii): if R ≅ ∏ M_{n_i}(D_i) then R = ⨁_i ⨁_{j=1}^{n_i} I_{ij}
where I_{ij} ⊆ M_{n_i}(D_i) is the left ideal of matrices vanishing outside the jth column;
I_{ij} ≅ D_i^{n_i} as a module of column vectors, which is **simple** because D_i is a
division ring.

**Its complete prerequisite list is four items, none of them deep:**
1. **Schur's lemma** (Crawley-Boevey §1.9; Ash 9.2.1) — two lines, no hypotheses.
2. **End_R(R) ≅ R^op** (Crawley-Boevey **§1.5 Lemma**: Hom_R(R,M) ≅ M by θ ↦ θ(1); with
   M = R this is a ring isomorphism onto R^op, and he adds the useful parenthetical
   *"(If we used right modules, we wouldn't need the opposite here.)"*).
3. **End_R(X₁⊕⋯⊕X_n) ≅ the matrix of Hom's** (Crawley-Boevey **§1.6 Lemma**, printed as an
   explicit n×n array with (i,j) entry Hom(X_j,X_i); the special case is
   End_R(Xⁿ) ≅ M_n(End_R(X))). Same as Duncan **Lem 4.11**, Ash **9.2.3**.
4. **A semisimple module is a *finite* direct sum of simples ⟺ it is finitely generated**
   (Ash §9.3 Problems 1–2), applied to R, which is generated by 1.
Plus, to convert between End_D(V) ≅ M_n(D^op) and M_n(D) shapes: **M_n(A)^op ≅ M_n(A^op)**
by transpose (Duncan **Lem 4.14**).

**It uses neither the Jacobson density theorem nor any chain condition**, and it never has
to prove that a simple module is finite-dimensional over its endomorphism division ring —
that finiteness comes free from "1 is a finite sum". Duncan §4 gives exactly this argument
(Lem 4.11 → Lem 4.12 → Lem 4.13 → Lem 4.14 → **Cor 4.15**) but only for a
finite-dimensional k-algebra; Crawley-Boevey's is for an arbitrary ring.
**Recommendation: scaffold this proof.**

#### 2.4b The double-centraliser route (Ash Ch. 9) — the expensive one

Ash reaches the same theorem through the density theorem and an isotypic decomposition.
It is worth recording in full because it *also* proves the density theorem (a result the
library will want anyway) and because it produces the two-sided ideal decomposition
R ≅ ∏ B_i explicitly. Its ingredients, in dependency order:

1. Ash 9.1.2 — the three characterisations of semisimple (Zorn ×3).
2. Ash 9.2.1 — Schur (free).
3. Ash 9.2.3 — End_R(Vⁿ) ≅ M_n(End_R(V)) (free).
4. Ash 9.2.2 + 9.2.4 — Jacobson density (needs 1 and 3).
5. Ash 9.2.5 — the double-centraliser corollary (needs 2, 4, and bases over a division
   ring).
6. Ash 9.3.1 — **his definition**: R is **semisimple** if it is semisimple as a left
   module over itself; R is **simple** if it is semisimple **and** all simple left ideals
   are isomorphic. Ash flags the convention clash explicitly (PART 3).
7. Ash 9.3.2 — over a semisimple ring, **every** nonzero module is semisimple (a quotient
   of a free module).
8. Ash 9.3.3 — for a simple left ideal I and simple module M, either IM = M and I ≅ M, or
   IM = 0.
9. Ash 9.3.4–9.3.14 — the isotypic decomposition: with B_i the sum of all left ideals
   isomorphic to I_i, one gets B_iB_j = 0 (i≠j), R = ΣB_i, each B_i is a **two-sided**
   ideal, there are only **finitely many** isomorphism classes (because 1 is a finite
   sum), R = ⨁_{i=1}^{t} B_i with orthogonal idempotents e_i, B_i = Re_i = e_iR, each B_i
   is a **simple ring**, every simple R-module is isomorphic to some I_i, and finally
   **R ≅ ∏ B_i as rings**.
10. Ash 9.4.5/9.4.6 — a simple ring has no nontrivial two-sided ideals, and its simple
    module V is **faithful**.
11. Ash **9.4.7** — for R simple with simple module V and D = End_R(V), **V is
    finite-dimensional over D**, and R ≅ End_D(V) ≅ M_n(D^o).
    *Proof strategy:* suppose x₁,x₂,… were infinitely many D-independent elements; the
    left ideals I_m = {r : rx_i = 0, i ≤ m} strictly decrease by density (9.2.4); split
    I_m = J_m ⊕ I_{m+1} using semisimplicity; then R = J₀ ⊕ J₁ ⊕ ⋯, but 1 is a finite sum,
    contradiction. **This is the only place where an infinite-dimensionality argument is
    needed, and it uses semisimplicity of R, not a chain condition.**
12. Ash **9.5.1 (Wedderburn structure theorem)** — assembles 9 and 11:
    R semisimple ⟹ R ≅ ∏_{i=1}^{t} B_i with B_i ≅ End_{D_i}(V_i) ≅ M_{n_i}(D_i^o), where
    V₁,…,V_t represent the t isomorphism classes of simple R-modules and D_i = End_R(V_i).
    Also B_iV_j = 0 for i ≠ j and B_iV_i = V_i.
13. Ash **9.5.2** — the converse direction: M_n(D) is a **simple ring** for D a division
    ring (the column ideals C_k are simple left ideals, mutually isomorphic, and their
    direct sum is M_n(D)).

**The Artinian formulation.** Ash's §9.4 Problems 1–5 spell out the bridge to the usual
statement: *"a ring R is simple if and only if R is **Artinian** and has no two-sided
ideals except 0 and R. Thus if a simple ring is defined as one with no nontrivial
two-sided ideals, then the addition of the Artinian condition gives our definition of
simple ring… The result that an Artinian ring with no nontrivial two-sided ideals is
isomorphic to a matrix ring over a division ring (Theorem 9.4.7) is sometimes called the
**Wedderburn–Artin theorem**."* Ash 9.7.10 supplies the other half:
**R is semisimple ⟺ R is Artinian and J(R) = 0.**

**Verdict on the two routes.** §2.4a (Crawley-Boevey/Duncan) proves the theorem for an
arbitrary ring in four cheap prerequisites and no density theorem; §2.4b (Ash) costs steps
1–13 above. **Scaffold §2.4a as the proof of Wedderburn–Artin.** Ash's density theorem
(9.2.2/9.2.4) and double-centraliser corollary (9.2.5) are still worth having as items in
their own right — they are the gateway to primitive rings and the Jacobson density theorem
proper (Lam Ch. 4 §11) — but they should not be made load-bearing prerequisites of
Wedderburn. Note also that Duncan's version is stated only for a **finite-dimensional
k-algebra**; if the library copies Duncan's numbering, the Statement must say so.

**Also cheap and worth carrying** (Crawley-Boevey §1.9): *if R is a field, or more
generally a **division ring**, then every R-module is free and semisimple.* Proof: R is
itself simple as an R-module and is the only simple module up to isomorphism, since for
S simple and 0 ≠ s ∈ S the map r ↦ rs is an isomorphism; so free = semisimple. This is the
sharpest form of "F-modules are exactly F-vector spaces" and it is a **division-ring**
statement, not a field statement.

**Maschke.** Ash 9.6.3; Duncan **Thm 2.7** in the module phrasing: *if G is finite of
order coprime to char k, then every finitely-generated left kG-module is semisimple.*
Conrad `grouptheory/maschke.pdf` is the 3-page standalone.

### 2.5 The Jacobson radical and Nakayama

**Definition and the two descriptions.** Ash 9.7.1: **J(R) := the intersection of all
maximal left ideals**; more generally J(M) := the intersection of all maximal submodules
of M, with J(M) := M if there are none. Ash **9.7.3**: **J(R) is also the intersection of
the annihilators of all simple R-modules** — proved from "simple modules are R/I for I a
maximal left ideal". Ash **9.7.4**: hence **J(R) is a two-sided ideal**.
Ash **9.7.7**: **J(R) is the largest two-sided ideal consisting entirely of quasi-regular
elements** (a is quasi-regular if 1 − a is invertible; 9.7.5/9.7.6 reduce "left
quasi-regular" to "quasi-regular"). Ash **9.7.8**: therefore **J(R) equals the
intersection of all maximal *right* ideals** — the left/right asymmetry in the definition
is only apparent. *This is the cleanest resolution of the flashpoint in PART 3.*
Stacks **10.19** "The Jacobson radical of a ring" is the commutative tag-addressable
cross-reference; Lam Ch. 2 §4 is the book treatment (TOC only).

**Radical versus semisimplicity.** Ash **9.7.2**: M semisimple ⟹ J(M) = 0 (*"in a sense,
the Jacobson radical is an obstruction to semisimplicity"*). Ash **9.7.9**: for M ≠ 0,
M is semisimple of **finite length** ⟺ M is **Artinian with J(M) = 0**. Ash **9.7.10**:
R is semisimple ⟺ R is Artinian and J(R) = 0.
Ash **9.7.11–9.7.13**: nil vs nilpotent ideals; **every nil left ideal is contained in
J(R)**; and **if R is Artinian then J(R) is nilpotent**, hence is the largest nilpotent
ideal and every nil ideal is nilpotent. *Proof of 9.7.13:* J ⊇ J² ⊇ ⋯ stabilises at Jⁿ =
J^{2n}; if Jⁿ ≠ 0, pick a minimal left ideal N with JⁿN ≠ 0 and x ∈ N with Jⁿx ≠ 0; then
Jⁿx = N by minimality, so cx = x for some c ∈ Jⁿ ⊆ J, and 1 − c is invertible by 9.7.7,
forcing x = 0.

**Nakayama, in the two versions the harvest supplies.**
> **Ash 9.8.2 (Version 1).** M a **finitely generated** R-module, I a **two-sided** ideal
> with I ⊆ J(R). If IM = M then M = 0.
> **Ash 9.8.4 (Version 2).** N ⊆ M with M/N finitely generated, I a two-sided ideal
> contained in J(R), M = N + IM ⟹ M = N.

*Proof strategy for Version 1:* take a minimal generating set x₁,…,x_n; write
x_n = Σ c_j x_j with c_j ∈ I; then (1 − c_n)x_n = Σ_{j<n} c_j x_j, and 1 − c_n is
invertible by 9.7.7. Ash flags exactly why I must be two-sided: *"Since I is a **right**
ideal, c_j ∈ I ⊆ J(R). (We need I to be a **left** ideal to make IM a legal submodule of
M.)"* Version 2 follows from Version 1 via Ash 9.8.3.
**The commutative statement** (Clark **Thm 3.42**, Milne, Stacks 10.20): R a commutative
ring, J an ideal, M finitely generated with JM = M ⟹ there is x ≡ 1 (mod J) with xM = 0;
**Cor 3.43**: if J is contained in every maximal ideal and JM + N = M then M = N;
**Cor 3.44**: elements whose images span M/JM span M. Clark derives all three from
**Prop 3.41**, the **determinant trick**: for M f.g., I an ideal and φ an endomorphism with
φ(M) ⊆ IM, φ satisfies φⁿ + a_{n−1}φ^{n−1} + ⋯ + a₀ = 0 with a_i ∈ I. Clark's
Exercise 3.58 asks the reader to decide whether to call Prop 3.41 the Cayley–Hamilton
theorem; Altman–Kleiman §10 is literally titled "Cayley–Hamilton Theorem" and Stacks
**10.16** likewise. **This is the same determinant trick the commission wants for
integrality** — see §2.6.
**Local-ring application.** Ash 9.8.5: R a commutative local ring with maximal ideal J,
k = R/J, M f.g., V = M/JM ⟹ (i) V is a finite-dimensional k-vector space; (ii) a basis of
V lifts to a **minimal** generating set of M; (iii) any two minimal generating sets have
the same cardinality. Clark **Thm 3.16** (f.g. projective over a local ring is free) and
**Thm 3.54** are the sharpened forms.

### 2.6 Integral elements and algebraic integers via the determinant trick

Ash **7.1** is the section, and Clark Ch. 14 §1 the book treatment. Ash 7.1.2 and Clark
**Thm 3.6** (in his *Field Theory* notes, and Prop 3.41 here) give the standard
equivalents:
> Let A ⊆ B be commutative rings and x ∈ B. TFAE: (i) x is **integral** over A, i.e.
> satisfies a **monic** polynomial with coefficients in A; (ii) A[x] is a **finitely
> generated A-module**; (iii) A[x] is contained in a subring C of B that is a f.g.
> A-module; (iv) there is a **faithful** A[x]-module M that is finitely generated as an
> A-module.

*Proof strategy (the determinant trick).* (iv)⟹(i): let m₁,…,m_n generate M over A; write
x·m_i = Σ a_{ij} m_j; then (xI − (a_{ij})) kills the column vector (m_i), so multiplying by
the adjugate gives det(xI − (a_{ij}))·m_i = 0 for all i, hence det(xI − (a_{ij})) = 0 by
faithfulness — and expanding the determinant is a monic degree-n relation for x over A.
*Prerequisites:* the adjugate identity adj(N)·N = det(N)·I over a **commutative** ring
(Conrad `linmultialg/extmod` §6 "Determinants" proves this in the module setting; Conrad
`univid`/`univid2` prove Cayley–Hamilton over a general commutative ring by the
universal-identity trick), and nothing else.
Ash **7.1.4** "Transitivity of Integral Extensions"; Ash 7.1.6/7.1.7 (the set of integral
elements is a subring, i.e. the **integral closure**); Clark Ch. 14 §2 "Integral closure of
domains", §4 "Integrally closed domains". **Algebraic integers** are the case A = Z,
B = a number field. Ash **7.5.13** connects it back to chain conditions: in the AKLB setup
with A integrally closed and Noetherian, B is Noetherian — *in particular the ring of
algebraic integers in a number field is Noetherian*.
**Commission note:** the determinant trick is *the same argument* as Clark Prop 3.41
behind Nakayama. Scaffolding them as one lemma with two corollaries is the cheap move,
and Altman–Kleiman §10 and Stacks 10.16 both organise it that way.

### 2.7 Modules over a PID

**Submodules of free modules.** Conrad `modulesoverPID`:
> **Thm 2.1.** A a **PID**: every submodule of a free A-module of rank n is generated by
> at most n elements.
> **Thm 2.2.** …and is **free of rank ≤ n**.
> **Rem 2.4.** The theorem holds for infinite-rank free modules too; **that proof uses
> Zorn's lemma**.
> **Non-example 2.3.** Theorem 2.2 is **always false if A is not a PID, even for the
> A-module A itself**: if A is not a domain it has a nonfree ideal by zero divisors; if it
> is a domain with a nonprincipal ideal I, then I needs ≥ 2 generators and any two
> elements of a domain satisfy a relation, so I is not free.

Clark **Thm 3.58** is the general version: for hereditary modules M_i, every submodule of
⨁M_i is itself a direct sum of submodules of the M_i; a PID is a hereditary ring
(Clark Ex 3.57).

**Torsion, torsion-free, and the two directions that need finiteness.**
Conrad **Cor 2.6** / Clark **Thm 3.13**: over a PID, **finitely generated** torsion-free
⟹ free. Clark's Prop 3.8b is the mechanism: a f.g. torsionfree module over a domain embeds
in a f.g. free module. **The finiteness is essential:** Q is a torsion-free Z-module and is
not free (Conrad's remark after Cor 2.6; Clark **Exercise 3.20** proves Q does not embed in
any f.g. free Z-module). Clark **Cor 3.14**: f.g. projective over a PID is free.
Conrad **Cor 2.9**: if M/N is torsion-free then **every basis of N extends to a basis of
M** (Ex 2.10: Z[√2] inside Z[⁴√2]). Conrad **Cor 2.16**: M and M′ have the same rank ⟺
M/M′ is torsion.

**The stacked-basis / aligned-basis theorem.** Conrad **Def 2.12** and **Thm 2.14**:
> A a PID, M finite free of rank n > 1, M′ a **nonzero** submodule of rank m ≤ n. Then
> there is a basis v₁,…,v_n of M and nonzero a₁,…,a_m ∈ A with
> M = ⨁_{i=1}^{n} Av_i and M′ = ⨁_{j=1}^{m} A a_j v_j. One can further arrange
> **a₁ | a₂ | ⋯ | a_m**.

*Proof strategy, in four steps (Conrad, after [6, §1.5]).*
- **Step 1.** The set S = {φ(M′) : φ ∈ Hom_A(M,A)} of ideals is not {0} (some coordinate
  function is nonzero on M′) and **has a maximal member (a) = ψ(M′)**. Conrad's
  justification is worth quoting because it is what makes the proof choice-free:
  *"Each nonzero ideal of A is contained in only finitely many ideals of A since A is a
  PID: if (x) is a nonzero ideal then (x) ⊆ (y) if and only if y | x. Up to unit
  multiples, there are only finitely many possible y since x has only finitely many
  factors up to unit multiples."*
- **Step 2.** a | φ(v′) for every φ, where v′ ∈ M′ has ψ(v′) = a. (Write (a, φ(v′)) = (b);
  then b = (xψ + yφ)(v′), so (a) ⊆ (b) ⊆ (xψ+yφ)(M′), and maximality forces (a) = (b).)
- **Step 3.** There is e₁ ∈ M with ψ(e₁) = 1 (all coordinates of v′ are divisible by a).
- **Step 4.** M = Ae₁ ⊕ ker ψ and M′ = Aae₁ ⊕ (M′ ∩ ker ψ); induct on the rank.
*Prerequisites:* the dual module and coordinate functions; that A is a PID **and a UFD**
(Step 1 uses unique factorization, not merely principality). *No Zorn, no dcc, no
Euclidean algorithm.*

**Smith normal form — PID versus Euclidean domain, exactly as the commission asked.**
- **Ash §4.4.2 + §4.5** is the **matrix/algorithmic** account: he sets up the relations
  matrix U = AX, notes that changing basis by an invertible P and generators by an
  invertible Q replaces A by QAP⁻¹, defines **equivalent** matrices, and asserts that two
  matrices are equivalent iff they have the same Smith normal form. He then says outright:
  *"We will try to convey the basic ideas via a numerical example. This will allow us to
  give informal but convincing proofs of some major theorems. **A formal development is
  given in Jacobson, Basic Algebra I, Chapter 3.** All our computations will be in the ring
  of integers, but we will indicate how the results can be extended to an arbitrary
  principal ideal domain."* The algorithm is: bring the smallest positive entry to the
  1-1 position, pivot to clear its row and column, peel off, repeat, and finally arrange
  divisibility.
  Ash §4.4 Prob. 1 supplies the exact invertibility hypothesis over Z: *P has an inverse
  with integer entries ⟺ P is **unimodular**, det P = ±1.*
- **The cost difference is real and is exactly this.** Over a **Euclidean domain** the
  pivoting step terminates because the Euclidean function strictly decreases, so the proof
  **is** an algorithm and gives P and Q explicitly. Over a general **PID** there is no
  division algorithm and Ash's row-reduction argument does not run; the existence proof is
  Conrad Thm 2.14, which replaces "repeatedly reduce" by "**take a maximal element of a
  set of ideals**" and is therefore **non-constructive** even though it is choice-free.
  The divisibility chain a₁|⋯|a_m falls out of the maximality in both cases.
- **Over F[x] specifically** Brosnan **Thm 5.4** states the reduction of xI − T to a
  diagonal of monic polynomials by row and column operations — F[x] is Euclidean, so the
  algorithmic route is available and this is how a computational treatment of canonical
  forms proceeds.
**Recommendation:** state the theorem over a PID, prove existence by Conrad's dual-module
argument, and record the Euclidean case as a separate constructive corollary. Do not let a
Euclidean-domain proof carry a PID-hypothesis Statement — that is exactly the
title-overclaim failure the house rules call fatal.

**The structure theorem.** Conrad **Thm 4.1**:
> A a PID, M a **finitely generated** A-module ⟹ M ≅ F ⊕ T with F finite free and T a
> f.g. torsion module, and T ≅ ⨁_{j=1}^{m} A/(a_j) with nonzero a_j and **a₁ | ⋯ | a_m**
> (invariant-factor form).

Ash **4.6.1 "Simultaneous Basis Theorem"**, **4.6.2 Corollary**, **4.6.3 "Fundamental
Decomposition Theorem"**, **4.6.4 "Finite Abelian Groups"**, and Ash's numbered summary
statement *"(**) every finitely generated torsion-free module over a PID is free"*, are the
same content organised as: Smith normal form ⟹ simultaneous bases ⟹ decomposition ⟹ the
abelian-group classification.
**Elementary-divisor form**: Conrad **Ex 5.32** derives it from the invariant-factor form
by the Chinese remainder theorem: a = uπ₁^{k₁}⋯π_r^{k_r} ⟹
A/(a) ≅ A/(π₁^{k₁}) ⊕ ⋯ ⊕ A/(π_r^{k_r}).
**Uniqueness.** Conrad's route is via two numerical invariants:
- the free rank d = **dim_K(K ⊗_A M)** (`tensorprod2` **Thm 4.2**) — a genuinely slick
  proof, and a reason to build page 1 before page 3;
- the **A-cardinality** card_A(T) = (a₁a₂⋯a_m) (`modulesoverPID` **Def 5.1**), proved
  well-defined at **Thm 5.7**, with **Thm 5.18** giving multiplicativity in a tower and
  **Thm 5.19/5.22** the determinant formula for the index;
- the **primary cardinality** ω_A(T) = Σ_{(π)} dim_{A/(π)}(T/πT) (**Def 5.27**), with
  **Thm 5.29** (Ann_A(T) ≠ 0 and only finitely many π contribute), **Cor 5.30**
  (ω_A(T) = 0 ⟺ T = 0) and **Thm 5.31** (additivity).

**Two warnings that belong on the page.**
- Conrad **Ex 4.4**: the decomposition M = F ⊕ T is **not canonical as a submodule** —
  Z × Z/(2) equals ⟨(1,0)⟩ ⊕ (0 ⊕ Z/2) and also ⟨(1,1)⟩ ⊕ (0 ⊕ Z/2), with different free
  parts. Only the *isomorphism type* is well defined.
- Conrad **Ex 4.7**: for M = ∏_p Z/(p) the torsion submodule is **not a direct summand**.
  **Rem 4.8**: the same construction works over any PID with infinitely many
  non-associate irreducibles. This is the counterexample showing finite generation is not
  cosmetic.

### 2.8 Rational and Jordan canonical form

**The module setup.** Conrad `moduleintro` §6 and **Thm 6.3**: for A ∈ M_n(F), let V_A be
Fⁿ made an F[T]-module by T·v = Av. Then **V_A ≅ V_B as F[T]-modules ⟺ B = UAU⁻¹ for some
U ∈ GL_n(F)**. So classifying operators up to similarity = classifying f.g. torsion
F[x]-modules up to isomorphism, and the structure theorem does it.

**Brosnan's route (S14), which does *not* go through the general PID theorem.**
- **Prop 3.9 / Def 3.10.** V = F[T]α cyclic with min(α) = xⁿ + a_{n−1}x^{n−1} + ⋯ + a₀ ⟹
  (α, Tα, …, T^{n−1}α) is a basis and the matrix of T in it is the **companion matrix**.
- **Thm 3.11.** For cyclic V, min(T) = char(T).
- **Lem 4.3/4.4.** Coprime minimal polynomials ⟹ the sum of the corresponding stable
  subspaces is direct and min multiplies.
- **Thm 4.5.** There is α ∈ V with min(α) = min(T,V).
- **Thm 4.8.** F[T]α is then a **direct summand** by a T-stable complement — proved via
  the **dual space** V* and the transpose operator T*.
- **Thm 4.9.** Cayley–Hamilton falls out as a corollary.
- **Prop 4.11.** The product of the elementary divisors is the characteristic polynomial.
- **§5.** Over an **algebraically closed** F the irreducibles are x − a (Thm 2.11), so the
  primary decomposition **Thm 5.1** V = ⨁ ker(T − a_i)^{d_i} plus the nilpotent companion
  matrix **Prop 4.13** gives the Jordan form.
*Exact hypotheses:* rational canonical form needs only that F is a **field** and
dim V < ∞. **Jordan canonical form needs F algebraically closed** (or, in the usual
refinement, that the characteristic polynomial splits over F) — Brosnan states this as a
standing hypothesis of §5.

D&F organise it the other way: 12.1 the general PID theory, then 12.2 rational canonical
form, then 12.3 Jordan canonical form — which is what the commission's page 3 asks for.
**Both routes are honest**; Brosnan's is shorter but does not reuse page 3's machinery,
and it is worth recording in the scaffold notes which one the page is claiming.

### 2.9 Where choice is used — a per-result note

The commission asked for a choice-strength note. This is the honest reading of what the
sources actually say; **where a source does not state the strength, I say so rather than
assert it.**

| result | choice used, as the source proves it | source's own words |
|---|---|---|
| Every vector space has a basis | **AC**; Conrad `zorn1` §4 is the Zorn proof and §6 discusses the equivalence | `zorn1` §4 "Applications to bases of vector spaces"; §6 "Equivalences and controversies with Zorn's lemma" |
| Every nonzero commutative ring has a maximal ideal | **Zorn** | Conrad `zorn1` §3; Milne *FT* Prop 6.3 and Rem 6.4 (from the Galois harvest) explicitly says Zorn ⟺ existence of maximal ideals |
| Every f.g. nonzero module has a maximal proper submodule | **Zorn**, applied to the poset of proper submodules; the chain-union argument uses only finite generation | Ash 9.7.1 states "by Zorn's lemma" and gives the chain argument in brackets |
| Rank is well defined (R^m ≅ R^n ⟹ m = n, R ≠ 0 commutative) | **Zorn**, via a maximal ideal | Conrad `tensorprod` **Ex 6.19** says "Pick a maximal ideal m in R (**Zorn's lemma**)"; `tensorprod2` Thm 4.1 and `modulesoverPID` Lem 1.1 give the same proof |
| Semisimple: (a)⟺(b)⟺(c) | **Zorn, three times** | Ash 9.1.2 uses Zorn in (a)⟹(b), in (b)⟹(c), and in observation (3) of (c)⟹(a) |
| Baer's criterion | **Zorn** (the standard maximal-extension argument) | Clark **Thm 3.22** [Ba40]; Clark's proof is the Zorn argument |
| Submodules of a **finite-rank** free module over a PID are free | choice-free induction on the rank | Conrad Thm 2.2 |
| Submodules of an **infinite-rank** free module over a PID are free | **Zorn** | Conrad **Rem 2.4**: "The proof for infinite bases uses Zorn's lemma [5, pp. 650–651]" |
| Stacked/aligned bases over a PID (Thm 2.14) | **choice-free**: the maximal element of S is produced by a *finiteness* argument (a nonzero ideal of a PID sits in only finitely many ideals), not by Zorn or by DC | Conrad Thm 2.14 Step 1, quoted in §2.7 |
| Structure theorem for f.g. modules over a PID | choice-free **given** Thm 2.14 and Thm 2.2 | Conrad Thm 4.1 builds on 2.14/2.2 only |
| "ACC ⟹ every nonempty family of submodules has a maximal element" | **NOT established choice-free by any source here.** Ash 7.5.2's proof is "choose M₁; if not maximal choose M₂ > M₁; continue inductively" — a **dependent-choice** argument, and Ash does not flag it | Ash 7.5.2; Conrad `noetherianmod` Thm 1.7 proves the same equivalence the same way |
| "Maximal condition ⟹ ACC" and "maximal condition ⟹ every submodule f.g." | choice-free | Ash 7.5.2, 7.5.3 (the second direction of 7.5.3 is a finite construction) |

**A flag the scaffolder must not skip.** The middle row above is a genuine gap: the
three-way equivalence "every submodule f.g. ⟺ ACC ⟺ maximal condition" is proved in
**every** source here by an argument that picks an infinite strictly increasing chain,
which is dependent choice, and **no source in this harvest states its choice strength.**
The library's own convention is that AC, countable choice and dependent choice are
already-adopted axioms, so this is not a blocker — but a page that *asserts* the
equivalence is choice-free without a source would be asserting something I could not
verify. **Do not put a choice-strength claim in a Statement without a source.**

### 2.10 Things a good source covers that the commission's list did not mention

These came up repeatedly in the harvest and are cheap given what the pages already build.

- **Krull–Schmidt** (Clark Ch. 8 §5; Conrad `finite-abelian` §4 + Appendix A **Fitting's
  Lemma**). The uniqueness of an indecomposable decomposition. Conrad's `finite-abelian`
  gives a **module-free** proof of the finite-abelian-group classification via Fitting's
  lemma, which is a genuinely different route from the PID structure theorem and a
  candidate corollary.
- **The Hopfian property** (Clark **Thm 3.47**): every f.g. module over any commutative
  ring has the property that a surjective endomorphism is injective, with **no chain
  condition**. This strictly generalises Conrad `noetherianmod` Thm 2.8 and is a two-line
  Nakayama application.
- **Idempotents and the Peirce decomposition** (Crawley-Boevey §1.12; Duncan §1.2, §2.4):
  the bijection {idempotents in End_R(M)} ↔ {decompositions M = X ⊕ Y}; a complete family
  of orthogonal idempotents ↔ a direct sum decomposition; eRe ≅ End_R(Re)^op, *"not a
  subring of R since the identity element is different"*. This is the natural language for
  the Wedderburn decomposition and is used in Ash 9.3.9–9.3.10 without being named.
- **Projective, injective, flat as a trio.** Clark Prop 3.10 (5 equivalents for
  projective), Prop 3.21 + Thm 3.22 Baer (injective), Def/Prop 3.37–3.40 (flat), and the
  containments free ⟹ projective ⟹ flat with the standard separating examples. D&F 10.5
  bundles them into one section; Crawley-Boevey §3.8–3.10 does the same.
- **Finitely presented modules** (Clark §3.2; Altman–Kleiman §5; Stacks 10.5) — the
  hypothesis that actually makes the local flat/free/projective equivalence true
  (Clark Thm 3.54).
- **The Hilbert basis theorem** (Conrad `noetherian-ring` Thm 3.6/Cor 3.9;
  `noetherianmod` §3; Clark Ch. 8 §11; Stacks 10.31). Conrad Rem 3.9 records that Hilbert
  proved it in 1890 "as a pure existence theorem in a few pages, not by an algorithmic
  process. This is what first made Hilbert famous." The formal power series version
  R[[X₁,…,X_n]] is also Noetherian (Rem 3.10/3.15).
- **Lasker–Noether existence** (Conrad `noetherian-ring` Thm 3.21/3.23/3.24): in a nonzero
  Noetherian ring every proper ideal is a finite intersection of irreducible ideals, and
  every irreducible ideal is primary. Cheap given ACC, and Clark Ch. 10 / Altman–Kleiman
  §18 carry the uniqueness.
- **Artinian ring structure** (Milne §16; Clark Ch. 8 §10; Stacks 10.53; D&F 16.1):
  the commutative half of Hopkins–Levitzki plus "every prime ideal of a commutative
  Artinian ring is maximal" (Ash §9.8 Prob. 3) and "only finitely many maximal ideals"
  (Prob. 4).
- **Central simple algebras and the Brauer group** (Duncan §5; Lam Ch. 5 §15): the natural
  sequel to Wedderburn and a clean place to *stop*, i.e. an explicit `deferred` boundary.

---

## PART 3 — Convention disagreements, named, with the sources on each side

| Flashpoint | Position A | Position B | Notes |
|---|---|---|---|
| **Does "ring" mean unital?** | **Unital, always.** Conrad `tensorprod` §1: *"We always work with rings having a multiplicative identity and modules are assumed to be unital: 1·m = m."* Crawley-Boevey §1.1: *"We consider rings R which are unital."* Duncan: *"all rings and algebras are unital … but are not necessarily commutative."* Clark Ch. 1 §1 adopts commutative-with-unity. Milne CA §1. | Conrad `ringdefs` has an **Appendix A "Rings without identity"**; Crawley-Boevey has a whole §1.13 "Non-unital rings"; Wisbauer's Ch. 10 §49 treats "Rings with local units" and his preface says the σ[M] approach *"also apply to rings without units and comprise the module theory for s-unital rings"*. | **No live disagreement** — every source in this harvest works unitally by default and treats the non-unital case as a labelled extension. Clark Ch. 1 §1 also records the historical point that associativity of multiplication has only been part of "ring" *"for at least fifty years"*. Adopt unital; say so once. |
| **Left vs right modules** | **Left by default.** Clark: *"when we say R-module at all, it will be understood to mean a **left** R-module"* (after Ex 3.6). Crawley-Boevey §1.2 defines left first. Ash works with left modules and left ideals throughout Ch. 9. Duncan reserves both and says so per statement. | Wisbauer writes **homomorphisms of right modules on the left and of left modules on the right** (12.3, referring to his 6.4) — an unusual but internally consistent convention that makes the tensor product read left-to-right. | **The one place it is not a convention but a hypothesis is the tensor product**: X ⊗_R Y needs X a **right** module and Y a **left** module (Crawley-Boevey §1.11; Wisbauer 12.1), and there is no way to state it otherwise. Crawley-Boevey §1.2: *"a right R-module … apart from notation, it is the same thing as a left R^op-module. If R is commutative, the notions coincide."* |
| **Noetherian: ACC or "every submodule f.g."?** | **"Every submodule is finitely generated" as the definition.** Conrad `noetherianmod` **Def 1.4** and `noetherian-ring` **Def 1.1**; the ACC and maximal-condition characterisations are then **Thm 1.7 / Thm 3.1**. | **ACC as the definition.** Ash **7.5.1/7.5.2** defines acc/dcc first and says *"The following conditions … are equivalent, and define a Noetherian module"*, listing acc and the maximal condition; "every submodule f.g." is then his **Prop 7.5.3**. | Clark's Ch. 8 §§1–2 develop "Chain conditions on partially ordered sets" then "on modules", i.e. Ash's order; Wisbauer §27 and Altman–Kleiman §16 likewise front the chain condition. **This matters for the library** because the commission says this library *mints* the definition here: the choice fixes which statement is a Definition and which is a Theorem, and it also determines whether the definition is choice-free (see §2.9). **Recommendation: define by "every submodule f.g." (Conrad), so the definition is choice-free, and prove the ACC/maximal-condition equivalence as a theorem, noting DC.** |
| **"Simple ring"** | **Ash 9.3.1:** *"We say that the ring R is simple if R is **semisimple** and all simple left ideals of R are isomorphic. [The definition of simple ring varies in the literature. An advantage of our choice (**also favored by Lang and Bourbaki**) is that we avoid an awkward situation in which a ring is simple but not semisimple.]"* | **Duncan Def 1.7 / the majority convention:** R is simple if it has no two-sided ideals except 0 and R. Under this, a simple ring need not be semisimple. | **This is a real, named clash and the sources say so.** Ash's §9.4 Problems 1–5 prove the bridge: *"a ring R is simple [in Ash's sense] if and only if R is **Artinian** and has no two-sided ideals except 0 and R."* So the two definitions differ exactly by an Artinian hypothesis. Also note Duncan's warning: *"Be careful about a possible ambiguity with regard to the word 'simple'"* — M_n(k) is a simple **ring** but is not simple as a **module** over itself. |
| **"Semisimple ring": left or right, and does it matter?** | Ash 9.3.1 defines it via the **left** regular module; Lam's Ch. 1 §2–3 likewise. | Wisbauer §20 is titled "Semisimple modules **and rings**" and treats the sidedness explicitly. | **It does not matter, and Ash proves why**: 9.7.10 says R is semisimple ⟺ R is **Artinian with J(R) = 0**, and 9.7.8 says the left and right Jacobson radicals coincide; combined with the left-right symmetry of the Artinian condition for semisimple rings via Wedderburn (R ≅ ∏M_{n_i}(D_i), which is visibly left-right symmetric), left semisimple ⟺ right semisimple. **The scaffolder should state the sidedness in the definition and record the symmetry as a theorem, not assume it.** |
| **Jacobson radical: maximal left ideals or annihilators of simples?** | **Ash 9.7.1 (definition):** J(R) = the intersection of all **maximal left ideals**. | **Ash 9.7.3 (theorem):** J(R) = the intersection of the **annihilators of all simple R-modules**. Stacks **10.19** and Lam §4 take various starting points. | These are **equivalent, and Ash proves it in six lines**; and **9.7.8** adds that the same set is the intersection of all maximal *right* ideals, via the quasi-regularity characterisation **9.7.7**. So the flashpoint is only about which is the Definition. **Recommendation:** define via maximal left ideals (cheapest to state), and carry 9.7.3, 9.7.4 (two-sidedness) and 9.7.8 (left/right symmetry) as immediate theorems. |
| **Invariant factors: which way does divisibility run?** | **a₁ | a₂ | ⋯ | a_m** (each divides the next). Conrad `modulesoverPID` Thm 2.14 and Thm 4.1; Ash §4.5 (*"the main diagonal entries are, from the top, a₁,…,a_r … where the a_i are nonzero and a_i divides a_{i+1} for all i"*). | No source in this harvest runs it the other way. | **No live disagreement among the harvested sources**, but the literature does contain the reverse order, and it matters because a Statement asserting "a₁ | a₂ | ⋯" and a proof producing the reverse would be a real defect. Conrad also notes (footnote to Thm 2.14) that *"The condition a₁|a₂|⋯|a_m plays an important role in the proof of the theorem, but it is not used in any applications presented later except for Theorem 3.6"* — so it is cheap to carry and cheap to drop, but not cheap to get backwards. |
| **"Flat"** | Conrad `tensorprod2` Def 3.1 and Milne Def 11.2 agree exactly: N is flat if M ↪ M′ ⟹ N ⊗ M ↪ N ⊗ M′. | Wisbauer §36 and Crawley-Boevey §3.10 define it for modules over a noncommutative ring, where one must say **which side** is being tensored. | The commutative definition is unambiguous; the noncommutative one is not, and a page mixing them silently would be wrong. Milne additionally defines **faithfully flat**; Clark Ch. 3 §12 has "Faithful flatness". |
| **Whether Hom_R(M,N) is an R-module** | Ash 4.4.1 is explicit that it is **only an abelian group** for noncommutative R. Crawley-Boevey §1.5, Duncan Def 3.9. | Conrad `tensorprod` writes Hom_R(M,N) as an R-module throughout — legitimately, since he fixes R **commutative** in §1. | Not a disagreement, a **scope difference**. But it is exactly the gap the commission says the published pages left, and a page that quotes Conrad's Thm 5.7 without carrying his commutativity hypothesis would be asserting something false. |
| **"Algebra"** | k a **field**, A a k-vector space with α(ab) = (αa)b = a(αb): Conrad `algebras` Def 1.1. | k a **commutative ring**, with a homomorphism π: k → A landing in **Z(A)**: Duncan Def 3.1; Milne CA §1; Crawley-Boevey §1.4. | Duncan's is strictly more general and specialises correctly. Clark Ch. 1 §1 uses "algebra" in yet a **third** sense — a possibly non-associative ring — and says so: *"A general algebra which satisfies (AM) will be called simply an algebra"*, reserving "general algebra" for the non-associative case. **Three senses of the word in this harvest; pick one and say which.** |
| **Notation for the opposite ring** | R^op: Crawley-Boevey §1.1, Duncan Def 3.2, Clark Ex 3.5 | R^o: Ash 4.4.1, 9.4.7 | Cosmetic; pick one. |

---

## PART 4 — Hypothesis-sensitivity and counterexample seeds

These are the places where a commonly quoted statement becomes **false** if a hypothesis is
dropped. Each is a candidate `ex-` / counterexample item, and each is sourced.

1. **A module with no basis.** The commission's request. Cheapest witnesses, in
   increasing sharpness:
   (a) **Z/nZ as a Z-module** (n > 1): every element is killed by n, so no nonempty set is
   independent, and the module is nonzero (Conrad `moduleintro` Ex 3.4-style).
   (b) **Any ideal that is not principal**: Conrad `moduleintro` **Ex 3.7**, the ideal
   p = (2, 1+√−5) in Z[√−5] — {2, 1+√−5} spans p but is **linearly dependent**, since
   (1+√−5)·2 + (−2)·(1+√−5) = 0; and p is not principal so no single element spans.
   (c) Conrad `modulesoverPID` **Non-example 2.3** makes it a theorem: *if A is not a PID
   then A itself, as an A-module, has a submodule that is not free.*
   (d) Clark **Prop 3.4**: every R-module is free **⟺ R is a field**. So over any
   commutative ring that is not a field there is a non-free module, namely R/I for a
   nonzero proper ideal I.
2. **A f.g. module over a non-Noetherian ring with a non-f.g. submodule.** Conrad
   `noetherianmod` **Ex 1.1** gives the general recipe: *"a commutative ring that has an
   ideal that is not finitely generated"* is a f.g. module (by 1) with a non-f.g.
   submodule. Concrete: **R = F[X₁,X₂,X₃,…]** with the ideal (X₁,X₂,X₃,…) (Ash **7.5.5
   Ex. 4** uses the same ring for a non-stabilising ascending chain
   (X₁) ⊂ (X₁,X₂) ⊂ ⋯). Conrad's more interesting examples: **Ex 1.2**, the ring of
   entire functions on C, and the remark that *"non-Noetherian rings need not be really
   huge, there is a non-Noetherian ring contained in Q[X]: the ring of integral-valued
   polynomials Int(Z) = {f ∈ Q[X] : f(Z) ⊆ Z}."*
   Related and worth carrying separately: Conrad **Ex 1.3**, R = Z[X] and I = (2,X) — a
   f.g. submodule of a f.g. module **needing more generators than the ambient module**.
3. **Z/2 ⊗_Z Z/3 = 0.** Conrad `tensorprod` **Thm 4.1**: Z/aZ ⊗_Z Z/bZ ≅ Z/dZ with
   d = (a,b), so the tensor product vanishes ⟺ (a,b) = 1. Crawley-Boevey §1.11(5) gives
   the same with the one-line proof (R/I)⊗(R/J) ≅ R/(I+J) and 2Z + 3Z = Z. Conrad
   **Ex 4.2** spells out what the vanishing *means*: every Z-bilinear map
   Z/3 × Z/5 → A is identically zero.
4. **The failure of injectivity of M′ ⊗ N → M ⊗ N.** Conrad `tensorprod2` **Ex 2.13**:
   α: Z/pZ → Z/p²Z, α(x) = px, is injective; 1 ⊗ α on Z/pZ ⊗ − is the zero map on a
   nonzero module. A second, structurally different one, **Ex 2.14/2.15**: the inclusion
   pZ ↪ Z is injective but Z/pZ ⊗ pZ → Z/pZ ⊗ Z sends the **nonzero** element 1⊗p to
   1⊗p = p(1⊗1) = 0. And **Ex 2.16**, the sharpest: R = A[X,Y], I = (X,Y); the inclusion
   I ↪ R is injective but I^{⊗2} → R^{⊗2} is not. **Rem 2.17** adds that for A a domain,
   I is torsion-free while I^{⊗2} is not: X(X⊗Y) = X⊗XY = Y(X⊗X), so X⊗Y − Y⊗X is a
   nonzero torsion element.
5. **Q/Z as a divisible non-projective (and non-flat) module.** Clark **Ex 3.23**: Q and
   Q/Z are divisible Z-modules; Q is uniquely divisible and Q/Z is not. Clark
   **Prop 3.24**: over a domain, injective ⟹ divisible, and over a **PID** the converse
   holds — so Q/Z **is injective** as a Z-module. Conrad `tensorprod2` **Ex 3.7 / Rem 3.8**:
   *any nonzero torsion abelian group is **not flat**, so Q/Z is not flat*, and hence not
   projective. **Q itself is the commission's other example**: Conrad **Thm 3.3** (the
   fraction field of a domain is flat) gives flatness, and Q is not projective over Z
   because a projective Z-module is a submodule of a free hence free (Clark Cor 3.14 with
   the PID case), while Q is not free (Clark **Exercise 3.20**). Conrad
   `tensorprod` **Ex 4.20**: (Q/Z)^{⊗2} = 0 even though Q/Z ≠ 0 — the finite-generation
   hypothesis in Thm 4.18 is essential.
6. **Torsion-free does not imply flat.** Clark **Example 3.39**: k a field, R = k[x,y],
   I = ⟨x,y⟩. I is torsionfree (every ideal of a domain is) and is **not flat**. This is
   the crispest separation of the two conditions and pairs with Prop 3.38 (flat ⟹
   torsionfree over a domain).
7. **A ring that is right Noetherian and not left Noetherian.** **This harvest does not
   contain one.** Ash 7.5.4 explicitly reserves the vocabulary — *"we will refer to a left
   Noetherian and a right Noetherian ring… This problem will not arise until Chapter 9"* —
   but no source I read exhibits a separating example. Duncan **Exercise 3.4** does give
   a closely related asymmetric ring: R = {(a b; 0 c) : a ∈ **Z**, b, c ∈ **Q**} ⊂ M₂(Q),
   with the exercise *"Prove that R is not isomorphic to R^op"*; this is the standard
   triangular-matrix construction from which the Noetherian asymmetry is usually derived,
   but **Duncan does not prove the Noetherian claim and I did not verify it.** See §5.
8. **A non-semisimple ring; k[x]/(x²).** Ash 7.5.5 Ex. 2 and §9.1 Prob. 4/5 point the way:
   Z is not semisimple (Ash §9.3 Prob. 4 asks it directly), and neither is Z/nZ for n not
   squarefree (Prob. 5). The commission's **k[x]/(x²)** is the sharpest: it is a
   4-line-checkable local Artinian ring whose radical is (x) ≠ 0, so J(R) ≠ 0 and
   Ash 9.7.10 gives non-semisimplicity immediately; equivalently the submodule (x) is not
   a direct summand, contradicting Ash 9.1.2(c). It is also the standard witness that
   **Artinian does not imply semisimple** and that **Hopkins–Levitzki's converse is the
   only implication available**.
9. **The failure of the structure theorem over a non-PID.** Conrad **Non-example 2.3**
   makes this a theorem rather than an example. The commission's two witnesses:
   (a) **Z[√−5]** with p = (2, 1+√−5): a torsion-free f.g. module that is **not free**
   (Conrad `moduleintro` Ex 3.7 shows it is not free; Ex 1.1 is the same ideal). Conrad
   `tensorprod` **Ex 4.24** adds the sharpest form of the failure: for R = Z[√10] and
   I = (2,√10), **I ≇ R as R-modules but I ⊗_R K ≅ R ⊗_R K** — so tensoring up to the
   fraction field destroys exactly the information the structure theorem would need.
   (b) **k[x,y]** with (x,y): Clark **Ex 3.39** (not flat), Conrad `tensorprod2`
   **Ex 2.16/Rem 2.17** (I torsion-free with I^{⊗2} not torsion-free). Clark
   **Example 3.20** records the Quillen–Suslin context: over k[t₁,…,t_n] with n ≥ 2 the
   structure of projectives is *"much less clear"*.
10. **Direct products break what direct sums preserve.** Conrad `tensorprod` **Rem 5.5**
    and the two witnesses after **Thm 6.11**: *"Q ⊗_Z ∏_{i≥1} Z/p^iZ is nonzero but
    ∏_{i≥1}(Q ⊗_Z Z/p^iZ) is 0."* This is the canonical warning that M ⊗ ∏N_i → ∏(M⊗N_i)
    is not an isomorphism.
11. **M^∨ ⊗ N → Hom(M,N) is not an isomorphism without finite freeness.** Conrad
    `tensorprod` **Rem 5.10**: p prime, R = Z/p²Z, M = N = R/pR — *"the map may not be an
    isomorphism, or even injective or surjective."* **Ex 5.12** sharpens it: M ⊗ M and
    Bil(M^∨,M^∨;R) are abstractly isomorphic (both ≅ M) but **the natural map between them
    is identically 0**. A very good "isomorphic ≠ naturally isomorphic" example.
12. **Hom_R(M,N) need not be finitely generated over a non-Noetherian R.** Conrad
    `noetherianmod` **Ex 4.4** (used to prove Cor 4.6 can fail); it is a **dual module**
    example, so a f.g. module can have a non-f.g. dual.
13. **The torsion submodule need not be a direct summand.** Conrad `modulesoverPID`
    **Ex 4.7**: M = ∏_p Z/(p). **Rem 4.8**: works over any PID with infinitely many
    non-associate irreducibles. **Ex 4.9/Rem 4.10** gives an f.g.-free-adjacent variant
    over Z[x] (and over R[x] for any domain R that is not a field).
14. **The free part of the structure theorem is not a canonical submodule.** Conrad
    **Ex 4.4**: Z × Z/(2) = ⟨(1,0)⟩ ⊕ (0 ⊕ Z/2) = ⟨(1,1)⟩ ⊕ (0 ⊕ Z/2). Only the iso type
    is well defined. A very cheap and very instructive `ex-` item.
15. **Two submodules can fail to have *simultaneously* aligned bases.** Conrad
    `alignedbases` **Example 1**: R a PID that is not a field, π a prime, and inside R²
    M′ = R(1,0) + R(0,π²), M″ = R(π,0) + R(1,π). *There is no single basis of R² aligning
    both.* This is the natural boundary of the stacked-basis theorem and the commission's
    page 3 should carry it.
16. **Schur part (c) fails without algebraic closedness.** Duncan **Ex 2.13**: for
    G = Z/3, **RG ≅ R ⊕ C** — the endomorphism ring of a simple module is C, not R, so
    "every R-endomorphism is a scalar" fails. Ash §9.2 Prob. 5 states the hypothesis
    (algebraically closed **and** finite-dimensional) that makes it true.
17. **A finite direct sum of simples is not the same as semisimple + finitely generated
    unless you say so.** Ash §9.3 Problems 1 and 2: a semisimple module is a **finite**
    direct sum of simples ⟺ it is finitely generated. Ash §9.4 Problems 6 and 7 pair this
    with "has a composition series". Getting the finiteness quantifier wrong here is a
    classic silent error.
18. **An Artinian module that is not Noetherian.** Ash §7.5 Problems 1–2: fix a prime p,
    let A ⊆ Q/Z be the p-power torsion (the **Prüfer group** Z(p^∞)) and A_n the subgroup
    of order pⁿ. Then A is **not Noetherian** (Prob. 1) and **every proper subgroup is
    some A_n**, so A **is Artinian** (Prob. 2). Ash's own comment: *"This situation cannot
    arise for rings, where Artinian implies Noetherian."* This is the counterexample that
    makes Hopkins–Levitzki non-vacuous.
19. **A Noetherian ring that is not Artinian.** Ash 7.5.5 Ex. 2: **Z**, with
    Z ⊃ (2) ⊃ (4) ⊃ (8) ⊃ ⋯. And Ex. 3: F[X], with (X) ⊃ (X²) ⊃ ⋯. Ex. 4:
    F[X₁,X₂,…] is **neither**.
20. **A well-defined multiplication on a tensor product need not be an algebra.** Conrad
    `tensorprod2` **Ex 7.5**: R³ with the cross product. The construction of Thm 7.1 runs
    and produces a unique bilinear multiplication on R³ ⊗_R R³, but *"except for its last
    paragraph (which is about multiplicative identities and associativity)"* — the result
    is neither unital nor associative. Exactly the right example for "what does the
    hypothesis buy?".
21. **Base change can change the module structure.** Conrad `tensorprod` **Ex 6.20**:
    R = Z, S = Z[√d] for nonsquare d ≡ 1 mod 4, I = (2, 1+√d). The two S-module structures
    on S ⊗_Z I (scaling on the left factor versus the right) are **different** if
    I ⊕ I ≇ S². A subtle and genuinely useful warning about "the" S-module structure.
22. **Z^N is not a free Z-module (Specker, 1950).** Crawley-Boevey **§1.10**, with a full
    two-page proof, following Scheja–Storch *Lehrbuch der Algebra* Teil 1, 2nd ed.,
    Satz III.C.4, p. 230. The mechanism is worth stating because it is a genuinely
    different kind of argument from the rest of this harvest: for M free, say M ≅ R^{(I)},
    Hom_R(M,R) ≅ R^I is **either finitely generated (if R = 0 or I is finite) or
    uncountable**; and Specker's theorem says Hom_Z(Z^N, Z) is free with the **countable**
    basis (π_i), π_i(a) = a_i. Hence Z^N cannot be free. This is the sharpest available
    "a torsion-free module over a PID need not be free" and complements Q (which fails for
    a different reason — non-finite-generation, Clark Exercise 3.20).
    Crawley-Boevey also points at Rickard's MathOverflow answer to question 218113: the
    Z-module A of bounded sequences in Z[√2] satisfies **A ≅ A ⊕ Z² but A ≇ A ⊕ Z**.
23. **Positive worked examples to carry.** Z/aZ ⊗ Z/bZ ≅ Z/gcd(a,b) (Conrad Thm 4.1) ·
    (Z/nZ) ⊗_Z A ≅ A/nA (Ex 4.6) · R[X] ⊗_R R[Y] ≅ R[X,Y] (Ex 4.12, 7.8) ·
    S ⊗_R R[X] ≅ S[X] (Ex 4.16, 6.9) · C ⊗_R C ≅ C × C (Ex 7.3) · R ⊗_Q Q(√2) ≅ R × R
    (Ex 7.18) · Q(√2) ⊗_Q Q(√3) ≅ Q(√2)[X]/(X²−3), a field (Ex 7.20) ·
    M_n(K) ⊗_K S ≅ M_n(S) (Crawley-Boevey §1.11(7)) ·
    CG ≅ ⨁_i M_{n_i}(C) (Duncan Cor 2.11) · the aligned bases for
    Z[i] ⊃ (1+2i) with index 5 (Conrad `modulesoverPID` Ex 2.13, 5.20) ·
    the Smith-normal-form worked example giving F/K ≅ Z₂ ⊕ Z₄ ⊕ Z from the relations
    2x₁+2x₂+8x₃ = 0, −2x₁+2x₂+4x₃ = 0 (Ash 4.6.6).

---

## PART 5 — Gaps in this harvest that the scaffolder should know about

1. **A right-Noetherian-not-left-Noetherian ring is NOT in this harvest.** The commission
   asked for it by name. Ash reserves the vocabulary (7.5.4: *"we will refer to a left
   Noetherian and a right Noetherian ring"*) but exhibits nothing. Lam Ch. 1 §1 exercises
   are the classical home of the example and **I have only Lam's TOC**. I checked
   Crawley-Boevey §1.10 "An exotic example" — **it is not this**; it is **Specker's theorem
   (1950)**, that Hom_Z(Z^N, Z) is free on the coordinate projections, whose point is that
   **Z^N is not a free Z-module** (a free module's dual is either f.g. or uncountable).
   The nearest thing in hand is **Duncan Exercise 3.4**, the ring
   R = {(a b; 0 c) : a ∈ Z, b,c ∈ Q} ⊂ M₂(Q), set as an exercise to show **R ≇ R^op** —
   this is the standard triangular construction from which the Noetherian asymmetry is
   usually derived, but **Duncan does not state or prove the Noetherian claim and I did not
   verify it.** **Do not scaffold this counterexample from memory.** Obtain Lam, read
   Wisbauer §27, or route it to `deferred` with an honest reason.
2. **Atiyah–Macdonald, Lang, Rotman, and Anderson & Fuller were all UNOBTAINED** (§0).
   Everything the commission wanted from them is available in Altman–Kleiman (S6), Milne
   (S5), Clark (S4), Wisbauer (S8) or Crawley-Boevey (S7), all of which I read. But **no
   result in this harvest may be cited to A&M, Lang, Rotman or Anderson & Fuller** — the
   only thing I have from those four is A&M's chapter list, transcribed at second hand
   from Clark's introduction and labelled as such.
3. **Michael Artin's 18.706 notes (S10) were downloaded but not harvested.** 104 pages,
   on-topic for the noncommutative half (density theorem, semisimple rings, central simple
   algebras), and freely available at the OCW URL in §0. If the scaffolder wants a second
   independent treatment of Wedderburn beyond Ash and Duncan, **this is the cheapest one
   to add** and it is legitimately open.
4. **Wisbauer was harvested at TOC depth plus §12 and §20 only.** It is 616 pages and is
   the single most complete source here for semisimple/radical/Noetherian/Artinian/flat
   over a noncommutative ring. §21 (socle and radical), §27 (Noetherian), §31 (Artinian),
   §32 (finite length) and §36 (flat) are all directly on point and unread. If any page-2
   statement needs a noncommutative hypothesis pinned down, go there first.
5. **Clark Ch. 8 was read but its individual results are not transcribed above** — only
   its section list. Ch. 8 §3 (semisimple modules and rings), §5 (Krull–Schmidt) and §10
   (Artinian rings: structure theory) are the three the commission's page 2 would want,
   and I recorded the section titles rather than the numbered statements. Ash Ch. 9 covers
   the same ground and **is** transcribed, so this is a redundancy gap, not a hole.
6. **Ash's Smith normal form is admittedly informal.** He says so himself:
   *"We will try to convey the basic ideas via a numerical example… informal but
   convincing proofs… A formal development is given in Jacobson, Basic Algebra I, Chapter
   3."* **Do not cite Ash §4.5 as a proof of the existence of Smith normal form.** Use
   Conrad `modulesoverPID` Thm 2.14 for the PID statement (a real proof, transcribed in
   §2.7) and treat the algorithmic Euclidean version as a separate, separately proved
   corollary. **Jacobson, Basic Algebra I, Ch. 3 is UNOBTAINED.**
7. **No source here proves the choice-strength of "ACC ⟺ maximal condition".** §2.9 spells
   this out. Every source proves it by an argument that is dependent choice, and none
   flags it. A Statement claiming a choice strength for this equivalence would be
   unsourced.
8. **Ash Chapter 10 (homological algebra) is not archived anywhere**, so Ash's own
   treatment of Ext/Tor and of the projective/injective/flat trio is unavailable.
   Crawley-Boevey §4 and Clark Ch. 3 §§5–7, §10 cover it; both are in hand.
9. **The Rieffel proof of Wedderburn–Artin specifically** — the short argument via the
   double centraliser of a minimal left ideal, published by Rieffel in 1965 — **is not in
   this harvest under that name.** Ash 9.2.2/9.2.4/9.2.5/9.4.7 is a double-centraliser
   argument and is the same idea, but Ash never calls it Rieffel's proof and does not
   cite him. If the library wants an item titled "Rieffel's proof", it needs a source that
   actually attributes it; **do not attach Rieffel's name to Ash's argument on my say-so.**
10. **`linmultialg/semisimple.pdf` is a trap.** It is about semisimple *operators*
    (squarefree minimal polynomial), not semisimple modules or rings. A scaffolder
    scanning the Conrad index by title would pick it up for page 2 and it would be wrong.
11. **Conrad has no blurb on rational or Jordan canonical form** (§0 records the five
    URLs I probed and the index grep). Page 3's canonical-form material rests on Brosnan
    (S14), the Reed notes (S16), Donnelly (S15) and D&F 12.2/12.3 (section titles only).
    Brosnan is the one I transcribed in full and is the only one of the four whose every
    numbered result is recorded above.
12. **The `alignedbases` blurb is 4 pages and has no §-headings**; its Example 1 (the two
    submodules with no simultaneously aligned bases) is the load-bearing content and is
    transcribed at PART 4 item 15. Its Theorem 3 is a criterion involving commuting
    diagonalizable operators that I did not chase down; **its exact hypotheses are not
    recorded here.**
