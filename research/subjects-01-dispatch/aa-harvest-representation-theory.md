# subjects-01 — abstract-algebra source harvest: REPRESENTATION THEORY OF FINITE GROUPS

Topic: the group algebra and representations; Maschke's theorem and complete
reducibility; characters and the orthogonality relations; induced representations and
Frobenius reciprocity.

Everything below was read from the source. Where I could not obtain a source it is
marked `UNOBTAINED` with what was tried. Where a heading list is reconstructed rather
than read off the source's own printed table of contents, that is stated explicitly.

**The governing constraint of this commission.** These four pages sit in the algebra
band: no analysis, no ℂ as an analytic object, no e^{2πi/n}, no polar form, no
completeness. Every result below is therefore reported with its *exact* hypothesis on the
ground field k — arbitrary k / char k ∤ |G| / k algebraically closed / μ_e ⊆ k for e the
exponent of G / k = ℂ — and where a source states a result over ℂ *by convention* rather
than *by necessity*, that is said explicitly.

---

## PART 0 — Source register (what actually resolved)

| # | source | URL that resolved | status |
|---|---|---|---|
| **R1** | **Peter Webb, *A Course in Finite Group Representation Theory*, 23 Feb 2016 draft** | `https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf` | **full PDF, 294 pp**, printed TOC + full text of Ch. 1–5 and Ch. 9 extracted. **The single most valuable source for this commission**: it develops the theory over an arbitrary commutative ring R / field k throughout, and flags at each step exactly which hypothesis is being used. |
| **R2** | **Etingof, Golberg, Hensel, Liu, Schwendner, Vaintrob, Yudovina, *Introduction to Representation Theory* (arXiv:0901.0827v5)** | `https://arxiv.org/pdf/0901.0827v5` | **full PDF, 108 pp**, printed TOC + full text of §3 and §4 extracted. Carries the **converse of Maschke** as a proved proposition. |
| **R3** | **Constantin Teleman, *Representation Theory* (Cambridge Part II, Lent 2005)** | `https://math.berkeley.edu/~teleman/math/RepThry.pdf` | **full PDF, 60 pp**, full text extracted. (`file(1)` misreports this as 6 pages; pypdf reads 60.) Carries **Remark 8.18**, the crispest statement in the whole harvest of the χ(g⁻¹)-versus-conjugation question. |
| **R4** | **J.S. Milne, *Group Theory*, Ch. 7 "Representations of finite groups"** | `https://www.jmilne.org/math/CourseNotes/GT.pdf` | **full PDF, 139 pp**, PDF bookmark outline + full text of Ch. 7 extracted. Has a dedicated subsection **"Roots of 1 in fields"** — the algebraic (not analytic) entry point this library needs. |
| **R5** | **Anupam Singh, *Representation Theory of Finite Groups* (arXiv:1001.0462v2, rev. Nov 2022)** | `https://arxiv.org/pdf/1001.0462v2` | **full PDF, 112 pp**, printed TOC extracted. IISER Pune lecture notes; covers Mackey's irreducibility criterion and both induced-representation constructions. |
| **R6** | Keith Conrad, expository blurbs | index `https://kconrad.math.uconn.edu/blurbs/`, files `https://kconrad.math.uconn.edu/blurbs/grouptheory/<name>.pdf`, `.../ringtheory/<name>.pdf`, `.../linmultialg/<name>.pdf` | 10 blurbs downloaded and text-extracted. **`maschke.pdf` = "Maschke's theorem over general fields"** and **`irrepdeg.pdf` = "The degree may not divide the size of the group"** are both directly on this commission's field question. |
| **R7** | J.-P. Serre, *Linear Representations of Finite Groups* (GTM 42, tr. Scott) | `https://d-nb.info/950599417/04` | **printed TOC, verbatim with page numbers**, all three Parts. This is the Deutsche Nationalbibliothek's scan of the printed contents pages; its OCR has some artefacts, flagged inline. Full text `UNOBTAINED`. |
| **R8** | Gordon James & Martin Liebeck, *Representations and Characters of Groups*, 2nd ed. | chapter list via search aggregation (see §1.8 caveat) | **chapter-level only, and NOT read off the publisher's own page** — treat as provisional. |
| **R9** | Dummit & Foote, *Abstract Algebra* | `https://proofwiki.org/wiki/Book:David_S._Dummit/Abstract_Algebra` (fetched with a browser UA; WebFetch got 403) | section titles obtained, **but for the 1st edition (Ch. 15–16), not the 3rd (Ch. 18–19)**. See §1.9. |

`UNOBTAINED`, with what was tried:

- **I.M. Isaacs, *Character Theory of Finite Groups*.** No legitimate open copy. The AMS
  endmatter PDF `https://www.ams.org/books/chel/359/chel359-endmatter.pdf` returns **403**
  to curl. Only a chapter-level list was recoverable, and only from bookseller/aggregator
  listings, so I have **not** transcribed it as a harvest heading enumeration — see §5.
  This is the harvest's most significant gap, because Isaacs is the reference the
  commission named for integrality, degree-divides-order and Burnside. **Mitigation:**
  Webb §3.5 and §3.7 carry the complete integrality chain and the complete Burnside proof
  in full text, and I have transcribed both below, so nothing load-bearing rests on Isaacs.
- **Serre, full text.** Springer's `link.springer.com/content/pdf/bfm%3A…` front-matter
  endpoint returns an HTML interstitial (3 038 bytes) rather than a PDF for both Serre
  (978-1-4684-9458-7) and Fulton–Harris (978-1-4612-0979-9). The DNB scan gave the TOC.
- **Fulton & Harris, *Representation Theory: A First Course*, Ch. 1–3.** Same Springer
  block. No TOC obtained at all. Not load-bearing: F&H's Part I is a ℂ-only treatment and
  is the *least* useful source for a commission whose whole problem is the ground field.
- **Alperin & Bell, *Groups and Representations*.** No open copy found.
- **Andrew Baker's Glasgow notes** (`maths.gla.ac.uk/~ajb/dvi-ps/groupreps.pdf`): **404**.
- **MIT OCW 18.702/18.712.** Not fetched; 18.712's assigned text *is* R2 (Etingof et al),
  which I obtained in full, so the OCW page would add nothing.

**Two textbook/monograph/full-lecture-note sources with a harvestable table of contents,
as required: R1 (Webb, 294 pp, printed TOC) and R2 (Etingof et al, 108 pp, printed TOC).**
R3, R4 and R5 are three more. Wikipedia was not used at all in this harvest.

---

## PART 1 — Canonical-coverage harvest (source-anchored heading enumerations)

### 1.1 Peter Webb, *A Course in Finite Group Representation Theory* — printed TOC, verbatim

Read range: **Chapters 1–5 in full (book pp. 1–84) and Chapter 9 in full (book pp.
140–168)**, plus the printed TOC of the whole book. Verbatim from the printed Contents:

```
1 Representations and Maschke's theorem                                    1
  1.1 Definitions and examples                                             1
  1.2 Semisimple representations                                           6
  1.3 Summary of Chapter 1                                                10
  1.4 Exercises for Chapter 1                                             10
2 Algebras with semisimple modules                                        14
  2.1 Schur's Lemma and Wedderburn's Theorem                              14
  2.2 Summary of Chapter 2                                                18
  2.3 Exercises for Chapter 2                                             18
3 Characters                                                              22
  3.1 The character table                                                 22
  3.2 Orthogonality relations and bilinear forms                          27
  3.3 Consequences of the orthogonality relations                         30
  3.4 The number of simple characters                                     34
  3.5 Algebraic integers and divisibility of character degrees            38
  3.6 The matrix summands of the complex group algebra                    41
  3.7 Burnside's p^a q^b theorem                                          43
  3.8 Summary of Chapter 3                                                45
  3.9 Exercises for Chapter 3                                             46
4 Construction of Characters                                              50
  4.1 Cyclic groups and direct products                                   50
  4.2 Lifting (or inflating) from a quotient group                        53
  4.3 Induction and Restriction                                           54
  4.4 Symmetric and Exterior Powers                                       63
  4.5 The Construction of Character Tables                                67
  4.6 Summary of Chapter 4                                                67
  4.7 Exercises for Chapter 4                                             68
5 Theorems of Mackey and Clifford                                         74
  5.1 Double cosets                                                       74
  5.2 Mackey's theorem                                                    76
  5.3 Clifford's theorem                                                  79
  5.4 Summary of Chapter 5                                                81
  5.5 Exercises for Chapter 5                                             81
6 p-groups and the radical                                                85
  6.1 Cyclic p-groups                                                     85
  6.2 Simple modules for groups with normal p-subgroups                   88
  6.3 Radicals, socles and the augmentation ideal                         89
  6.4 Jennings' theorem                                                   95
  6.5 Summary of Chapter 6                                                97
  6.6 Exercises for Chapter 6                                             97
7 Projective modules for algebras                                        103
  7.1 Characterizations of projective and injective modules              103
  7.2 Projectives by means of idempotents                                107
  7.3 Projective covers, Nakayama's lemma and lifting of idempotents     109
  7.4 The Cartan matrix                                                  116
  7.5 Summary of Chapter 7                                               118
  7.6 Exercises for Chapter 7                                            118
8 Projective modules for group algebras                                  120
  8.1 The behavior of projective modules under induction, restriction
      and tensor product                                                 120
  8.2 Projective and simple modules for direct products of a p-group
      and a p'-group                                                     122
  8.3 Projective modules for groups with a normal Sylow p-subgroup       124
  8.4 Projective modules for groups with a normal p-complement           129
  8.5 Symmetry of the group algebra                                      130
  8.6 Summary of Chapter 8                                               135
  8.7 Exercises for Chapter 8                                            136
9 Splitting fields and the decomposition map                             140
  9.1 Some definitions                                                   141
  9.2 Splitting fields                                                   141
  9.3 The number of simple representations in positive characteristic    145
  9.4 Reduction modulo p and the decomposition map                       148
  9.5 The cde triangle                                                   156
  9.6 Blocks of defect zero                                              161
10 Brauer characters                                                     169
  10.1 The definition of Brauer characters                               169
  10.2 Orthogonality relations and Grothendieck groups                   174
  10.3 The cde triangle in terms of Brauer characters                    181
  10.4 Summary of Chapter 10                                             183
  10.5 Exercises for Chapter 10                                          184
11 Indecomposable modules                                                188
  11.1 Indecomposable modules, local rings and the Krull-Schmidt theorem 188
  11.2 Groups with a normal cyclic Sylow p-subgroup                      192
  11.3 Relative projectivity                                             194
  11.4 Finite representation type                                        201
  11.5 Infinite representation type and the representations of C2 × C2   205
  11.6 Vertices, sources and Green correspondence                        209
  11.7 The Heller operator                                               216
  11.8 Some further techniques with indecomposable modules               219
  11.9 Summary of Chapter 11                                             220
  11.10 Exercises for Chapter 11                                         221
12 Blocks                                                                226
  12.1 Blocks of rings in general                                        227
  12.2 p-blocks of groups                                                230
  12.3 The defect of a block: module theoretic methods                   234
  12.4 The defect of a block: ring theoretic methods                     237
  12.5 The Brauer morphism                                               243
  12.6 Brauer correspondence                                             248
  12.7 Further reading                                                   251
  12.8 Summary of Chapter 12                                             252
  12.9 Exercises for Chapter 12                                          252
A Discrete valuation rings                                               255
  A.1 Exercises for Appendix A                                           259
B Character tables                                                       260
Bibliography                                                             282
Index                                                                    284
```

**Chapter 1's running head in the body is "Representations, Maschke's theorem and
semisimplicity"; the printed TOC entry is the shorter "Representations and Maschke's
theorem". Both are the source's own text.**

### 1.2 Webb — named results in Ch. 1–5 and Ch. 9 (the range read)

Transcribed with Webb's own numbering. Statement text is a faithful shortening except
where quoted. Webb's PDF drops some inter-word spaces; I have reinserted them.

**Ch. 1 (representations, Maschke, semisimplicity).**
`Example 1.1.1` trivial representation, over any commutative ring R ·
`Example 1.1.2` degree-1 representations = homomorphisms G → R^× ·
`Example 1.1.3` S₃ acting on ℝ² as the symmetries of an equilateral triangle ·
`Example 1.1.4` **k = 𝔽_p, V = k², G = C_p** — the non-semisimple example ·
**`Proposition 1.1.5`** a representation of G over R has the structure of a unital
RG-module, and conversely ·
`Example 1.1.6` C₂ = {1,−1}, a representation that IS a direct sum ·
`Example 1.1.7` "provides an example of a subrepresentation that is not a direct
summand" (the C_p one) ·
**`Theorem 1.2.1` (Maschke)** *"Let V be a representation of the finite group G over a
field F in which |G| is invertible. Let W be an invariant subspace of V. Then there
exists an invariant subspace W₁ of V such that V = W ⊕ W₁ as representations."* ·
`Example 1.2.2` every 1-dimensional module over a k-algebra is simple ·
**`Lemma 1.2.3`** U = S₁+⋯+S_n a sum of simples, V ≤ U ⟹ U = V ⊕ S_{i₁} ⊕ ⋯ ⊕ S_{i_r} ·
**`Proposition 1.2.4`** the three equivalents for semisimplicity of a module ·
**`Corollary 1.2.5`** F a field in which |G| is invertible ⟹ every finite-dimensional
FG-module is semisimple ·
`Corollary 1.2.6` socle · `Corollary 1.2.7` uniqueness of isotypic components.

**Ch. 2 (Schur, Wedderburn).**
**`Theorem 2.1.1` (Schur's Lemma)** — stated in **two parts**: over *any* ring A with 1,
Hom_A(S₁,S₂) = 0 unless S₁ ≅ S₂ and End_A(S₁) is a **division ring**; *and* if A is a
finite-dimensional algebra over an **algebraically closed** field k, End_A(S₁) ≅ k ·
**`Lemma 2.1.2`** End_A(_AA) ≅ A^op ·
**`Theorem 2.1.3` (Artin–Wedderburn)** A finite-dimensional over a field k with every
finite-dimensional module semisimple ⟹ A ≅ M_{n₁}(D₁) ⊕ ⋯ ⊕ M_{n_r}(D_r) with
D_i = End_A(S_i)^op; and D_i = k for all i when k is algebraically closed ·
**`Corollary 2.1.4`** the S_i are a complete set of simples; **when k is algebraically
closed** n_i = dim_k S_i and dim_k A = n₁² + ⋯ + n_r² ·
**`Corollary 2.1.5`** the group-algebra restatement: (1) kG is a direct sum of matrix
algebras over division rings whenever |G| is invertible in k; (2) *"Suppose in addition
that k is algebraically closed"* — then d_i = multiplicity of S_i in the regular
representation and Σd_i² = |G| ·
`Corollary 2.1.7` simple representations of an abelian group over an algebraically
closed field have degree 1 · `Example 2.1.6` the three simple ℝS₃-modules.

**Ch. 3 (characters).**
**`Proposition 3.1.1`** the seven basic properties of a complex character (χ(1) = deg;
χ(g⁻¹) = conj χ(g); χ constant on conjugacy classes; |χ(g)| ≤ χ(1); …) — **stated over
ℂ** ·
`Example 3.1.2` the character table of S₃ ·
**`Proposition 3.1.3`** χ_{V⊕W} = χ_V + χ_W, χ_{V⊗W} = χ_V·χ_W, χ_{V*} = conj χ_V,
χ_{Hom(V,W)} = conj(χ_V)·χ_W — **parts (1)–(3) stated for a general ring R**, part (4)
for a field ·
**`Lemma 3.2.1`** *"Over any ring R, Hom_R(V,W)^G = Hom_{RG}(V,W)."* ·
**`Lemma 3.2.2`** *"Let V be an RG-module where R is a ring in which |G| is invertible.
Then (1/|G|)Σ_{g∈G} g : V → V^G is a map of RG-modules which is projection onto the
fixed points… When R is a field of characteristic zero we have tr((1/|G|)Σg) = dim V^G."*
**This is the load-bearing lemma of the whole subject, and its two hypotheses are
different: |G| invertible for the projection, characteristic zero for the trace formula.**
·
**`Theorem 3.2.3` (Row orthogonality relations)** ⟨χ_V, χ_W⟩ = 1 if V ≅ W, 0 otherwise,
for simple **complex** V, W · `Corollary 3.3.1` multiplicities · `Example 3.3.2` S₃ ·
**`Corollary 3.3.3`** two complex representations are isomorphic ⟺ same character ·
**`Corollary 3.3.4`** V is simple ⟺ ⟨χ,χ⟩ = 1 (**over ℂ**) · `Example 3.3.5` the S₄
character table · `Lemma 3.3.6` · **`Corollary 3.3.7`** Σd_i² = |G| and Σd_iχ_i(g) = 0
for g ≠ 1 ·
**`Lemma 3.4.1`** for any commutative ring R, Z(RG) has as basis the conjugacy class sums
· `Lemma 3.4.2` the class sums x̄_i ·
**`Theorem 3.4.3`** the three numbers — # simple complex characters, # isomorphism types
of simple ℂG-modules, # conjugacy classes — are equal ·
**`Corollary 3.4.4` (Column orthogonality relations)** · `Example 3.4.5` ·
**`Theorem 3.5.1`** integrality: (1) the two equivalents; (2) integral elements form a
subring; (3) **ℤ is integrally closed in ℚ**; (4) **every character value χ(g) is an
algebraic integer** ·
**`Proposition 3.5.2`** Z(ℤG) is integral over ℤ ·
**`Proposition 3.5.3`** ρ_i(x) = (1/d_i)·tr(ρ_i(x))·I for x ∈ Z(ℂG) — the **central
character** ω_i ·
**`Theorem 3.5.4`** *"The degrees d_i of the simple complex representations of G all
divide |G|."* ·
`Proposition 3.6.1` primitive central idempotents ·
**`Theorem 3.6.2`** the explicit formula for the primitive central idempotent
e_i = (d_i/|G|)Σ_g χ_i(g⁻¹)g ·
**`Theorem 3.7.1` (Burnside's p^a q^b theorem)** *"Let G be a group of order p^a q^b
where p and q are primes. Then G is solvable."* — proof in **seven numbered steps**,
transcribed in §2.9 below.

**Ch. 4 (construction of characters).**
**`Theorem 4.1.2`** the simple complex representations of G₁ × G₂ are exactly the
V_i ⊗ W_j — followed immediately by Webb's own warning: *"Theorem 4.1.2 is false in
general when the field over which we are working is not algebraically closed (see
Exercise 10)."* ·
`Example 4.1.3`, **`Corollary 4.1.4`** the character table of a direct product is the
tensor product of the character tables ·
**`Theorem 4.1.5`** G abelian ⟺ all simple **complex** representations have degree 1 ·
**`Proposition 4.2.1`** *"The degree 1 representations of any finite group G **over any
field** are precisely the degree 1 representations of G/G′, lifted to G."* — the one
theorem in this chapter Webb explicitly formulates to be field-independent ·
**`Example 4.2.2`** *"Neither implication of Theorem 4.1.5 holds if we do not assume that
our representations are defined over an algebraically closed field of characteristic prime
to |G|"* — with the two witnesses (rotation by 2π/3 over ℝ; a p-group in characteristic p)
·
**`Proposition 4.3.1`** V↑^G_H = RG ⊗_{RH} V decomposes as ⊕_{i=1}^{|G:H|} g_i ⊗ V as
R-modules, and G permutes the summands transitively with Stab(1 ⊗ V) = H ·
**`Proposition 4.3.2`** the **converse/characterization**: if M is an RG-module with an
R-submodule V such that M = ⊕{gV} and H = {g : gV = V}, then M ≅ V↑^G_H ·
`Example 4.3.3`, `Example 4.3.4` permutation modules as induced modules ·
**`Proposition 4.3.5` (the induced character formula)**
χ↑^G_H(g) = (1/|H|)Σ_{t ∈ G, t⁻¹gt ∈ H} χ(t⁻¹gt) = Σ_{t ∈ [G/H], t⁻¹gt ∈ H} χ(t⁻¹gt) ·
`Example 4.3.6` S₃ over ⟨(123)⟩ · **`Lemma 4.3.7`** the ring-theoretic adjunctions ·
**`Corollary 4.3.8`** (1) Frobenius reciprocity, **both** adjunctions; (2) transitivity of
induction; (3) transitivity of restriction; (4) the projection formula
V↑^G_H ⊗_R W ≅ (V ⊗_R W↓^G_H)↑^G_H; **(5) induced ≅ coinduced**, V↑^G_H ≅ Hom_{RH}(RG,V)
— **all five over an arbitrary commutative ring R** ·
**`Corollary 4.3.9`** the character translations of 4.3.8(1)–(4), **over ℂ** ·
`Example 4.3.10`, `Example 4.3.11` ·
**`Proposition 4.4.2`** Sym and Λ, for a field k with **char k ∤ n** ·
**`Proposition 4.4.3`** χ_{Λ²V}(g) = ½(χ(g)² − χ(g²)), χ_{S²V}(g) = ½(χ(g)² + χ(g²)),
**over ℂ**.

**Ch. 5 (Mackey, Clifford).**
`Proposition 5.1.1`, `Proposition 5.1.3` double cosets ·
**`Theorem 5.2.1` (Mackey decomposition formula)** ·
`Proposition 5.2.3` permutation modules and double cosets ·
**`Theorem 5.3.1` (Weak form of Clifford's theorem)** — *"Let k be **any** field, U a
simple kG-module…"* · `Theorem 5.3.3` (abelian groups over any algebraically closed field).

**Ch. 9 (splitting fields).**
**`Proposition 9.2.1`** a module over E ⊗_F A can be written over a finite subextension K
· **`Example 9.2.2`** the cyclic group: ℚC_n splits into simples of dimension > 1 ·
`Definition` **absolutely simple**; **splitting field for A** = every simple E ⊗_F A-module
is absolutely simple · `Proposition 9.2.5` the criterion End = k ·
**`Theorem 9.2.6`** every finite-dimensional F-algebra has a splitting field of **finite**
degree over F ·
**`Theorem 9.2.7` (Brauer)** *"Let G be a finite group, F a field, and suppose that F
contains a primitive mth root of unity, where m is the exponent of G. Then F is a
splitting field for G."* — **Webb states it and explicitly does not prove it** ("we state
the result, but will not use it and do not prove it"; it is deduced from Brauer's
induction theorem) ·
**`Theorem 9.2.8` (Noether–Deuring)** E ⊗_F U ≅ E ⊗_F V ⟹ U ≅ V ·
`Lemma 9.3.1`, `Lemma 9.3.2`, `Proposition 9.3.3`, `Lemma 9.3.4`, `Lemma 9.3.5` ·
**`Theorem 9.3.6` (Brauer)** over a splitting field of characteristic p, the number of
simple kG-modules is the number of **p-regular** conjugacy classes · `Corollary 9.3.7` ·
`Lemma 9.4.1`–`Proposition 9.4.3` (reduction mod p, the decomposition map).

**Appendix B** is a table of printed **character tables** (book pp. 260–281) — a ready
source of worked examples and of the D₄/Q₈ coincidence.

### 1.3 Etingof–Golberg–Hensel–Liu–Schwendner–Vaintrob–Yudovina, *Introduction to Representation Theory* — printed TOC, verbatim (§1–§4 range read)

Read range: **§3 in full (pp. 33–46) and §4.1–§4.11 (pp. 47–58)**, plus the printed TOC of
the whole document. Verbatim, with the source's own page numbers:

```
1 Basic notions of representation theory                                     5
  1.1 What is representation theory?                                         5
  1.2 Algebras                                                               7
  1.3 Representations                                                        7
  1.4 Ideals                                                                10
  1.5 Quotients                                                             11
  1.6 Algebras defined by generators and relations                          11
  1.7 Examples of algebras                                                  11
  1.8 Quivers                                                               13
  1.9 Lie algebras                                                          15
  1.10 Tensor products                                                      17
  1.11 The tensor algebra                                                   19
  1.12 Hilbert's third problem                                              19
  1.13 Tensor products and duals of representations of Lie algebras         20
  1.14 Representations of sl(2)                                             20
  1.15 Problems on Lie algebras                                             21
2 General results of representation theory                                  23
  2.1 Subrepresentations in semisimple representations                      23
  2.2 The density theorem                                                   24
  2.3 Representations of direct sums of matrix algebras                     24
  2.4 Filtrations                                                           25
  2.5 Finite dimensional algebras                                           26
  2.6 Characters of representations                                         27
  2.7 The Jordan-Hölder theorem                                             28
  2.8 The Krull-Schmidt theorem                                             29
  2.9 Problems                                                              30
  2.10 Representations of tensor products                                   31
3 Representations of finite groups: basic results                           33
  3.1 Maschke's Theorem                                                     33
  3.2 Characters                                                            34
  3.3 Examples                                                              35
  3.4 Duals and tensor products of representations                          36
  3.5 Orthogonality of characters                                           37
  3.6 Unitary representations. Another proof of Maschke's theorem for
      complex representations                                               38
  3.7 Orthogonality of matrix elements                                      39
  3.8 Character tables, examples                                            40
  3.9 Computing tensor product multiplicities using character tables        42
  3.10 Problems                                                             43
4 Representations of finite groups: further results                         47
  4.1 Frobenius-Schur indicator                                             47
  4.2 Frobenius determinant                                                 48
  4.3 Algebraic numbers and algebraic integers                              49
  4.4 Frobenius divisibility                                                51
  4.5 Burnside's Theorem                                                    52
  4.6 Representations of products                                           54
  4.7 Virtual representations                                               54
  4.8 Induced Representations                                               54
  4.9 The Mackey formula                                                    55
  4.10 Frobenius reciprocity                                                56
  4.11 Examples                                                             57
  4.12 Representations of Sn                                                58
  4.13 Proof of Theorem 4.36                                                59
  4.14 Induced representations for Sn                                       60
  4.15 The Frobenius character formula                                      61
  4.16 Problems                                                             63
  4.17 The hook length formula                                              63
  4.18 Schur-Weyl duality for gl(V)                                         64
  4.19 Schur-Weyl duality for GL(V)                                         65
  4.20 Schur polynomials                                                    66
  4.21 The characters of Lλ                                                 66
  4.22 Polynomial representations of GL(V)                                  67
  4.23 Problems                                                             68
  4.24 Representations of GL2(Fq)                                           68
    4.24.1 Conjugacy classes in GL2(Fq)                                     68
    4.24.2 1-dimensional representations                                    70
    4.24.3 Principal series representations                                 71
    4.24.4 Complementary series representations                             73
  4.25 Artin's theorem                                                      75
  4.26 Representations of semidirect products                               76
5 Quiver Representations                                                    78
6 Introduction to categories                                                98
7 Structure of finite dimensional algebras                                 106
```

### 1.3b Etingof et al — named results in §3 and §4.1–§4.11

**`Theorem 3.1` (Maschke)** *"Let G be a finite group and k a field whose characteristic
does not divide |G|. Then: (i) The algebra k[G] is semisimple. (ii) There is an
isomorphism of algebras ψ : k[G] → ⊕_i End V_i …, and one has |G| = Σ_i dim(V_i)²."*
**Note that (ii), as stated, silently needs End V_i in place of a general matrix algebra
over a division ring — i.e. it presupposes an algebraically closed k; §3 opens by fixing
k = ℂ for the character theory.** ·
**`Proposition 3.2` (the converse)** *"If k[G] is semisimple, then the characteristic of k
does not divide |G|."* — proved by the ε∘Λ argument with Λ(1) = Σ_{g∈G} g ·
**`Example 3.3`** G = ℤ/pℤ over char-p k: every irreducible is trivial ·
`Problem 3.4` the p-group generalisation ·
`Theorem 3.5` (Frobenius determinant/other), `Proposition 3.6`, `Proposition 3.7` ·
**`Theorem 3.8`** (χ_V, χ_W) = dim Hom_G(W,V), and orthonormality for irreducibles ·
**`Theorem 3.9`** the **second** (column) orthogonality relation, Σ_V χ_V(g)conj χ_V(h) =
|Z_g| or 0 · `Definition 3.10`, `Theorem 3.11` (unitary structure), `Theorem 3.12`
(unitary ⟹ completely reducible) · `Theorem 3.13`–`3.16` matrix-element orthogonality ·
**`Theorem 4.1`–`4.4`** Frobenius–Schur indicator · `Theorem 4.5` Frobenius determinant ·
**§4.3** algebraic numbers and algebraic integers (`Proposition 4.10`–`Theorem 4.15`) ·
**§4.4 Frobenius divisibility** — `Theorem 4.16`: dim V divides |G| ·
**§4.5 Burnside's Theorem** — `Theorem 4.19`: any group of order p^a q^b is solvable ·
§4.8 Induced Representations · §4.9 The Mackey formula · §4.10 Frobenius reciprocity.

### 1.4 Constantin Teleman, *Representation Theory* (Cambridge Part II, Lent 2005) — section headings, verbatim

Read range: **§1–§18 in full** (the finite-group half; §19–§24 are compact/Lie groups and
Schur–Weyl and were skimmed only). The source numbers *lectures*, and within them uses
both `n.m` for results and `(n.m)` for unnumbered subsection headings. Transcribed as
printed:

```
1  What is Representation Theory?
   (1.3) Example: Tautological action of Perm(X) on X
   (1.4) Linearity.
   (1.6) Example: The general linear group
2  Lecture
   (2.1) Concrete realisation of isomorphism classes
   (2.4) Example: Representations of Z.
   (2.5) Example: the cyclic group of order n
   (2.7) Example: Finite abelian groups
   (2.9) Subrepresentations and Reducibility
   (2.13) Example
3  Complete Reducibility and Unitarity
   (3.2) Example: the regular representation
   (3.4) Unitarity
   (3.12) Alternative proof of Complete Reducibility
4  Schur's Lemma
   (4.3) Schur's Lemma over other fields
   (4.9) Application: Finite abelian groups revisited
5  Isotypical Decomposition
   (5.1) Example: Representations of D6
   (5.2) Decomposition into isotypical components
   (5.6) Operations on representations
6  Tensor products
   (6.6) The tensor product of two linear maps
7  Examples and complements
   (7.1) Example: Decomposing the tensor square of a representation
   (7.2) The symmetric group action on tensor powers
8  The character of a representation
   (8.6) The representation ring
   (8.9) Orthogonality of characters
   (8.19) The representation ring again
9  The Regular Representation
   (9.6) The Group algebra
10 The character table
   (10.3) Example: The cyclic group Cn of order n
11 Groups of order pq
   (11.1) The group Fp,q.
   (11.5) Representations.
   (11.6) The character table
12 The alternating group A5
13 Integrality in the group algebra
14 Induced Representations
15 Induced characters and Frobenius Reciprocity
   (15.1) Character formula for Ind^G_H
   (15.6) Frobenius Reciprocity
16 Mackey theory
   (16.4) Mackey's irreducibility criterion
   (16.8) Examples
17 Nilpotent groups and p-groups
   (17.2) Examples
   (17.9) Example
18 Burnside's p^a q^b theorem
   (18.1) Additional comments
   (18.3) Burnside's theorem
19 Topological groups
   (19.3) Orthonormality of characters
   (19.8) A compact group: U(1)
   (19.13) Character theory
   (19.16) Digression: Fourier series
20 The group SU(2)
21 Irreducible characters of SU(2)
22 Some SU(2)-related groups
23 The unitary group*
24 The symmetric group and Schur-Weyl duality*
```

**Named results in §1–§18 that matter here.** `1.1 Proposition`, `1.7`, `1.8 Proposition`
· `2.2 Proposition`, `2.6 Proposition`, `2.8 Proposition`, `2.15 Proposition` (every
complex representation of a finite abelian group is completely reducible) ·
**`3.1 Theorem`** every **complex** representation of a finite group is completely
reducible · `3.6 Theorem (Unitary Criterion)`, `3.7 Lemma`, `3.8 Theorem`,
**`3.9 Remark`** (dim V < ∞ is unnecessary for finite G but cannot be dropped in general)
· **`3.10 Theorem (Weyl's unitary trick)`** · **`3.13 Lemma`** — the analysis-free proof:
*"Let V be a finite-dimensional representation of the finite group G over a field of
characteristic not dividing |G|. Then every invariant subspace W ⊆ V has an invariant
complement W′ ⊆ V."*, prefaced by *"The following argument makes no appeal to inner
products, and so has the advantage of working over more general ground fields."* ·
**`4.1 Theorem (Schur's lemma over ℂ)`**, `4.2 Corollary`, `4.4 Definition`,
`4.5 Definition`, **`4.6 Theorem (Schur's Lemma)`** — *"If V is an irreducible
finite-dimensional G-representation over k, then End_G(V) is a finite-dimensional
division algebra over k."*, **`4.7 Proposition`** the only finite-dimensional division
algebra over ℂ is ℂ, **`4.8 Remark`** over ℝ there are exactly three (ℝ, ℂ, ℍ) and *all
three occur* as End_G of an irreducible of a finite group ·
**`4.10 Theorem`** + the following paragraph: *"As one might expect from the failure of
Schur's lemma, this proposition is utterly false over other ground fields. For example,
over the reals, the two irreducible representations of ℤ/3 have dimensions 1 and 2."* ·
`5.3 Lemma`, `5.4 Theorem`, **`5.5 Remark`** (*"When the ground field is not ℂ, we must
allow the appropriate division rings to…"*) , `5.8 Proposition` ·
`6.2`, `6.3`, `6.5`, `6.7 Proposition`, `6.8 Remark` · `7.3`–`7.8` (Sym, Λ) ·
`8.1 Proposition`, `8.2 Proposition`, `8.4 Theorem (First properties)`, `8.5 Remark`,
`8.8 Proposition`, **`8.10 Theorem (Orthogonality of characters)`**, `8.11`–`8.14
Corollary`, **`8.15 Corollary (Irreducibility criterion)`** ‖χ_V‖² = 1, `8.16 Lemma`,
**`8.18 Remark`** — the key field remark, quoted in full in §2.5 below — `8.20 Remark` ·
`9.1 Proposition`, `9.2 Proposition`, **`9.3 Theorem (Completeness of characters)`**,
`9.4 Lemma`, `9.7 Proposition`, **`9.9 Theorem`** (ℂ[G] ≅ ⊕End(V), as G×G-representations),
`9.10 Lemma`, `9.11 Remark` ·
**`10.1 Proposition (The second orthogonality relations)`**, `10.2 Remark`.

### 1.5 J.S. Milne, *Group Theory* — Chapter 7 subsection headings, verbatim from the PDF bookmark outline

Read range: **Chapter 7 in full** (book pp. 100–119). The PDF's own bookmark outline:

```
7 Representations of finite groups
  Matrix representations
  Roots of 1 in fields
  Linear representations
  Maschke's theorem
  The group algebra; semisimplicity
  Semisimple modules
  Simple F-algebras and their modules
  Semisimple F-algebras and their modules
  The representations of G
  The characters of G
  The character table of a group
  Exercises
```

**Named results.** `Example 7.1` (a) the quaternion group in GL₂(ℂ); (b) the permutation
representation of S_n and Cayley's theorem; **(c) C_n → F^× needs an nth root of 1 in F,
and in characteristic p the only pth root of 1 is 1, so σ^i ↦ (1 i; 0 1) is the faithful
substitute** · `Aside 7.2` (Burnside problem) · **the subsection "Roots of 1 in fields"**:
μ_n(F) is a cyclic subgroup of F^×; if char F | n then |μ_n(F)| < n; otherwise Xⁿ − 1 is
separable and one can always arrange |μ_n(F)| = n by extending F, **either by replacing a
subfield F of ℂ by F[ζ] with ζ = e^{2πi/n}, or by replacing F by F[X]/(g(X)) for g an
irreducible factor of Xⁿ − 1 not dividing X^m − 1 for any proper divisor m of n** — *the
second route is the purely algebraic one this library needs* · `Example 7.3` (a) a
representation of C_n over F containing a primitive nth root of 1 diagonalises;
(b) a finite abelian G of exponent n and F ⊇ μ_n: representations = G^∨-gradings ·
**`Theorem 7.4` (Maschke)** *"…If the characteristic of F does not divide |G|, then every
G-invariant subspace W of V has a G-invariant [complement]"* · `Proposition 7.38`
dim Z(F[G]) = # conjugacy classes, **over any field F** · `Remark 7.39` class functions ·
**"In the remainder of this chapter, we assume that F is an algebraically closed field of
characteristic zero (e.g., ℂ)"** — Milne's explicit standing hypothesis, stated in the
text · `Proposition 7.40` F[G] ≅ ∏ M_{f_i}(F) · **`Theorem 7.41`** (a) # simples =
# conjugacy classes; (b) multiplicity of S in the regular representation = dim S;
(c) Σf_i² = |G| · `Lemma 7.42` · **`Proposition 7.43`** the simple characters are linearly
independent over F — **proved via the central idempotents e_j, with no inner product and
no conjugation** · **`Proposition 7.44`** two F[G]-modules are isomorphic ⟺ their
characters are equal · **`Aside 7.45`** the two counterexamples to 7.44 in characteristic
p (see §4 below) · `Proposition 7.46` virtual characters · **`Proposition 7.47`** the
simple characters are an F-basis for the class functions — again with no inner product ·
**"We now assume that F is a subfield of ℂ stable under complex conjugation c ↦ c̄"** —
Milne's explicit hypothesis *for the inner product only* · `Lemma 7.48` ( | ) is an inner
product · `Lemma 7.49` π = (1/|G|)Σa is a projector onto V^G · **`Proposition 7.50`**
dim_F V^G = (1/|G|)Σ_a χ_V(a) · **`Theorem 7.51`** dim_F Hom_{F[G]}(V,W) = (χ_V | χ_W) ·
**`Corollary 7.52`** orthonormality · **"Throughout this subsection, F = ℂ"** — the
character-table subsection, with `Example 7.53` (C₃) and `Example 7.54` (S₃).

### 1.6 Anupam Singh, *Representation Theory of Finite Groups* (arXiv:1001.0462v2) — printed TOC, verbatim

Read range: printed TOC in full; §1 (Introduction) in full; the rest consulted
selectively. Verbatim, with the source's own page numbers:

```
Chapter 1. Introduction                                                      7
  1.1. Written in December 2022                                              7
  1.2. Written in December 2009                                              7
Chapter 2. Representation of a Group                                        11
  2.1. Commutator Subgroup and One Dimensional Representations              14
Chapter 3. Maschke's Theorem                                                17
Chapter 4. Schur's Lemma                                                    23
Chapter 5. Representation Theory of Finite Abelian Groups over C            25
  5.1. Example of Representation over Q                                     27
Chapter 6. The Group Algebra k[G]                                           29
Chapter 7. Constructing New Representations                                 31
  7.1. Subrepresentation of a Representation                                31
  7.2. Sum of Representations                                               31
  7.3. Adjoint Representation                                               31
  7.4. Restriction of a Representation                                      33
  7.5. Lift of a Representation                                             33
  7.6. Tensor Product of two Representations                                33
  7.7. Decomposition of the Representation V ⊗ V                            35
  7.8. Induced Representation                                               37
Chapter 8. Matrix Elements                                                  41
Chapter 9. Character Theory                                                 43
Chapter 10. Orthogonality Relations                                         45
Chapter 11. Main Theorem of Character Theory                                49
  11.1. Regular Representation                                              49
  11.2. The Number of Irreducible Representations                           50
  11.3. Artin-Wedderburn Decomposition                                      51
  11.4. Exercises on Character Table                                        52
Chapter 12. Examples                                                        55
  12.1. Groups having Large Abelian Subgroups                               56
  12.2. Character Table of Some Groups                                      57
  12.3. Characters of Direct Product                                        61
Chapter 13. Character Table of S5                                           63
Chapter 14. Restriction of a Representation                                 65
  14.1. Character Table of A5                                               66
Chapter 15. Central Characters                                              69
  15.1. Algebraic Integers                                                  71
Chapter 16. Burnside's p^a q^b Theorem                                      73
  16.1. Solvable Groups                                                     75
Chapter 17. Induced Representation                                          79
  17.1. Induced Representations from Subgroups                              79
  17.2. Construction of Induced Representation                              81
Chapter 18. Character of the Induced Representation                         83
  18.1. Induced Representation via Tensor Product                           84
  18.2. Induced Representations via Invariant-functions                     85
Chapter 19. Fröbenius Reciprocity                                           87
Chapter 20. Mackey's Irreducibility Criteria                                91
  20.1. Restriction of an Induced Representation                            91
  20.2. Mackey-Wigner Irreducibility Criteria                               93
Chapter 21. Representations of a Semidirect Product - Wigner's Little
            Group Method                                                    97
  21.1. Representations of groups of order pq and p^3                       98
Chapter 22. Characters of the group GL2(q)                                 101
  22.1. Conjugacy classes in GL2(q)                                        102
  22.2. Parabolic Induction - preparation                                  103
  22.3. The principal series representations                               103
  22.4. The Steinberg Representations                                      106
  22.5. Cuspidal representations                                           108
  22.6. Characters of GL2(q)                                               109
Bibliography                                                               111
```

**Singh's §18 is the source in this harvest that most explicitly enumerates the THREE
constructions of the induced representation** — the coset model (Ch. 17.2), the tensor
model k[G] ⊗_{k[H]} V (§18.1), and the invariant-functions/coinduced model (§18.2) —
which is precisely the "two constructions and their agreement" the commission asks for,
plus a third. Singh's own stated pedagogical aim, quoted from §1.2: *"The aim to start
with an arbitrary field was to give the feeling that the theory is dependent on the base
field and it gets considerably complicated if we move away from characteristic 0
algebraically closed field. This we illustrate by giving an example of a higher
dimensional irreducible representation of cyclic group over ℚ while all its irreducible
representations are one dimensional over ℂ."* — that example is §5.1, and it is one of
the counterexample seeds the commission asked for.

### 1.7 Keith Conrad blurbs — titles and section headings

All at `https://kconrad.math.uconn.edu/blurbs/<dir>/<file>.pdf`. Titles are Conrad's own,
transcribed from the index page. Several of these files carry no numbered §-headings; that
is stated where true.

| file | Conrad's own title | pp. | §-headings |
|---|---|---|---|
| `grouptheory/maschke.pdf` | **Maschke's theorem over general fields** | 3 | none; four numbered results — see below |
| `grouptheory/irrepdeg.pdf` | **The degree may not divide the size of the group** | 3 | none; Theorems 1–4 |
| `grouptheory/charthy.pdf` | Characters of finite abelian groups | 33 | §1 Introduction · §2 Classical Fourier analysis · §3 Finite Abelian Group Characters · §4 Finite Fourier series (+ further §§) |
| `grouptheory/affineheisrep.pdf` | Representations of affine and Heisenberg group over finite fields | 6 | §1 Representations of Aff(𝔽_q) · §2 Representations of Heis(𝔽_q) |
| `grouptheory/schurzass.pdf` | Schur-Zassenhaus theorem | 5 | no numbered §-headings |
| `ringtheory/algebras.pdf` | Algebras | 11 | §1 Definitions and Examples · §2 Basic Results |
| `linmultialg/semisimple.pdf` | Semisimple operators | 7 | no numbered §-headings |
| `linmultialg/splittingmodules.pdf` | Splitting of short exact sequences for modules | 6 | §1 Introduction · §2 When a Short Exact Sequence Splits · §3 Consequences |
| `linmultialg/complexification.pdf` | Complexification | 14 | §1 Introduction · §2 Complexifying with Direct Sums · §3 Complexifying with Tensor Products · §4 Conjugations on Complex Vector Spaces |
| `linmultialg/bilinearform.pdf` | Bilinear forms | 63 | (obtained, not harvested — convention reference only) |

**`maschke.pdf` — named results.** `Theorem 1` *"Let V be a finite-dimensional k-vector
space on which there is a representation of a finite group G. If |G| ≠ 0 in k then each
k[G]-submodule W of V has a complementary k[G]-submodule."* — proved by averaging the
**projection**, explicitly *not* by averaging a bilinear form, with the reason given:
*"an orthogonal subspace relative to a nondegenerate bilinear form need not be
complementary to the original subspace… For example, on k² with the nondegenerate bilinear
form ⟨(x,y),(x′,y′)⟩ = xx′ − yy′, the subspace W = k(1,1) has W^⊥ = W."* ·
`Example 2` a worked char-2 check that the naive averaged map fails ·
**`Example 3`** the standard counterexample: char k = p, G = ℤ/(p) acting on k² by
a·(x,y) = (x+ay, y); W = k(1,0) has no complement ·
**`Theorem 4`** *"Let k be a field with prime characteristic p, G be a finite group of
p-power order, and V be a finite-dimensional k-vector space on which there is a nontrivial
representation of G. Then some subrepresentation of V does not have a complementary
subrepresentation."* — with the explicit caveat *"This theorem is about groups with order
equal to a power of p, not groups with the weaker property of having order divisible by p."*

**`irrepdeg.pdf` — named results.** Opening sentence, verbatim: *"Any irreducible
finite-dimensional representation of a finite group over ℂ (or more generally over an
algebraically closed field whose characteristic doesn't divide the size of the group) has
degree dividing the size of the group. This can fail for representations in positive
characteristic. To see this explicitly, we'll find a 5-dimensional irreducible
representation of SL₂(𝔽₁₃) in characteristic 13. Note the size of the group is
2³·3·7·13 = 2184, which is not divisible by 5."* · `Theorem 1` (the SL₂-stable-subspace
lemma via the diagonal torus g_t) · `Theorem 2` V_{d,2} is an irreducible SL₂(ℂ)-module ·
`Theorem 3`, `Theorem 4` the characteristic-p transfer.

### 1.8 James & Liebeck, *Representations and Characters of Groups*, 2nd ed. — chapter list

**CAVEAT, stated plainly: this list was NOT read off the publisher's own contents page.**
`cambridge.org` returned HTTP 500 to WebFetch. The list below came from search-result
aggregation of bookseller listings. It is included because the *shape* of the book is
useful for disposition purposes, but **no disposition should cite it as a read source**,
and no page numbers are available.

```
1 Groups and homomorphisms          17 Normal subgroups and lifted characters
2 Vector spaces and linear          18 Some elementary character tables
  transformations                   19 Tensor products
3 Group representations             20 Restriction to a subgroup
4 FG-modules                        21 Induced modules and characters
5 FG-submodules                     22 Algebraic integers
6 Group algebras                    23 Real representations
7 FG-homomorphisms                  24 Summary of properties of character tables
8 Maschke's theorem                 25 Characters of groups of order pq
9 Schur's lemma                     26 Characters of some p-groups
10 Irreducible modules and the      27 Character table of the simple group of
   group algebra                       order 168
11 More on the group algebra        28 Character table of GL(2,q)
12 Conjugacy classes                29 Permutations and characters
13 Characters                       30 Applications to group theory
14 Inner products of characters     31 Burnside's theorem
15 The number of irreducible        32 An application of representation theory
   characters                          to molecular vibration
16 Character tables and
   orthogonality relations
```

### 1.9 Dummit & Foote, *Abstract Algebra* — section titles

Obtained from ProofWiki's bibliographic entry, fetched with a browser user-agent
(WebFetch got 403). **The transcribed page is the FIRST edition, where representation
theory is Chapters 15–16, not the 3rd edition's Chapters 18–19.** Verbatim as printed
there:

```
Part V - INTRODUCTION TO THE REPRESENTATION THEORY OF FINITE GROUPS
Chapter 15  Representation Theory and Character Theory
  15.1 Linear Actions and Modules over Group Rings
  15.2 Projective and Injective Modules
  15.3 Statement of Wedderburn's Theorem and Some Consequences
  15.4 Character Theory and the Orthogonality Relations
Chapter 16  Examples and Applications of Character Theory
  16.1 Characters of Groups of Small Order
  16.2 Theorems of Burnside and Hall
  16.3 Introduction to the Theory of Induced Characters
```

In the 3rd edition these become Chapter 18 (three sections: Linear Actions and Modules
over Group Rings; Wedderburn's Theorem and Some Consequences; Character Theory and the
Orthogonality Relations — the projective/injective section having migrated to Ch. 17) and
Chapter 19 (same three sections). **I did not obtain a 3rd-edition contents page, so treat
the 3rd-edition renumbering as reported, not read.**

### 1.10 J.-P. Serre, *Linear Representations of Finite Groups* — printed TOC, verbatim with page numbers

Read range: the printed contents pages only (full text `UNOBTAINED`). Source: the
Deutsche Nationalbibliothek scan `https://d-nb.info/950599417/04`. Its OCR mangles a
handful of glyphs (`regulär` for `regular`, `Symmetrie` for `Symmetric`, `©4` for `S₄`,
`2l4` for `A₄`, `D„Ä`/`C„` for the subscripted dihedral/cyclic families, `reeiprocity`,
`irredueibility`, `produets`, `thefield`); I have transcribed the OCR as it stands and
flagged those artefacts rather than silently repairing them.

```
Part I   Representations and Characters                                    1
1 Generalities on linear representations                                   3
  1.1 Definitions                                                          3
  1.2 Basic examples                                                       4
  1.3 Subrepresentations                                                   5
  1.4 Irreducible representations                                          7
  1.5 Tensor product of two representations                                7
  1.6 Symmetrie Square and alternating Square                              9      [sic: Symmetric square]
2 Character theory                                                        10
  2.1 The character of a representation                                   10
  2.2 Schur's lemma; basic applications                                   13
  2.3 Orthogonality relations for characters                              15
  2.4 Decomposition of the regulär representation                         17      [sic: regular]
  2.5 Number of irreducible representations                               18
  2.6 Canonical decomposition of a representation                         21
  2.7 Explicit decomposition of a representation                          23
3 Subgroups, products, induced representations                            25
  3.1 Abelian subgroups                                                   25
  3.2 Product of two groups                                               26
  3.3 Induced representations                                             28
4 Compact groups                                                          32
  4.1 Compact groups                                                      32
  4.2 Invariant measure on a compact group                                32
  4.3 Linear representations of compact groups                            33
5 Examples                                                                35
  5.1 The cyclic Group Cn        35     5.2 The group C„          36           [sic]
  5.3 The dihedral group Dn      36     5.4 The group D„Ä         38           [sic]
  5.5 The group D„               39     5.6 The group D„Ä         40           [sic]
  5.7 The alternating group 2l4  41     5.8 The Symmetrie group ©4 42          [sic: A4, S4]
  5.9 The group of the cube      43
Bibliography: Part I                                                      44
Part II  Representations in Characteristic Zero                           45
6 The group algebra                                                       47
  6.1 Representations and modules                                         47
  6.2 Decomposition of C[G]                                               48
  6.3 The center of C[G]                                                  50
  6.4 Basic properties of integers                                        50
  6.5 Integrality properties of characters. Applications                  52
7 Induced representations; Mackey's criterion                             54
  7.1 Induction                                                           54
  7.2 The character of an induced representation; the reeiprocity formula 55   [sic]
  7.3 Restriction to subgroups                                            58
  7.4 Mackey's irredueibility criterion                                   59   [sic]
8 Examples of induced representations                                     61
  8.1 Normal subgroups; applications to the degrees of the irreducible
      representations                                                     61
  8.2 Semidirect produets by an abelian group                             62   [sic]
  8.3 A review of some classes of finite groups                           63
  8.4 Sylow's theorem                                                     65
  8.5 Linear representations of supersolvable groups                      66
9 Artin's theorem                                                         68
  9.1 The ring R(G)   68   9.2 Statement of Artin's theorem               70
  9.3 First proof     70   9.4 Second proof of (i) => (ii)                72
10 A theorem of Brauer                                                    74
  10.1 p-regular elements; p-elementary subgroups                         74
  10.2 Induced characters arising from p-elementary subgroups             75
  10.3 Construction of characters                                         76
  10.4 Proof of theorems 18 and 18'                                       78
  10.5 Brauer's theorem                                                   78
11 Applications of Brauer's theorem
  11.1 Characterization of characters      11.2 A theorem of Frobenius
  11.3 A converse to Brauer's theorem      11.4 The spectrum of A ⊗ R(G)
12 Rationality questions
  12.1 The rings R_K(G) and R_K(G)         12.2 Schur indices
  12.3 Realizability over cyclotomic fields 12.4 The rank of R_K(G)
  12.5 Generalization of Artin's theorem   12.6 Generalization of Brauer's theorem
  12.7 Proof of theorem 28
13 Rationality questions: examples
  13.1 The field Q      13.2 The field R
Bibliography: Part II
Part III  Introduction to Brauer Theory
14 The groups R_K(G), R_k(G), and P_k(G)
  14.1 The rings R_K(G) and R_k(G)   14.2 The groups P_k(G) and P_A(G)
  14.3 Structure of P_k(G)           14.4 Structure of P_A(G)
  14.5 Dualities                     14.6 Scalar extensions
15 The cde triangle
  15.1 Definition of c: P_k(G) → R_k(G)   15.2 Definition of d: R_K(G) → R_k(G)
  15.3 Definition of e: P_k(G) → R_K(G)   …
```

**The single most important structural fact in Serre's TOC for this commission: Serre's
Part I §2.3 "Orthogonality relations for characters" precedes the group algebra entirely
(that is Part II §6.1), and Serre's *Chapter 12, "Rationality questions", with §12.2
"Schur indices" and §12.3 "Realizability over cyclotomic fields", is the canonical home of
exactly the ground-field question this commission is asking.*** That chapter is where the
literature puts "which field do you actually need", and no page in this scaffold should
claim to settle it.

---

## PART 2 — The mathematics, with exact hypotheses, proof strategies, prerequisites

Throughout: **G is a finite group**, **k is a field**, **R is a commutative ring with 1**,
**e = exp(G)** is the exponent of G (the lcm of the element orders), and **μ_n(k)** is the
group of roots of X^n − 1 in k. Every statement below carries the *weakest* hypothesis a
harvested source actually uses, and where a source states more than it needs, that is said.

### 2.0 The four hypothesis levels, and which results live at which

This is the spine of the whole commission. Sorted from weakest to strongest:

| level | hypothesis | what becomes available |
|---|---|---|
| **H0** | R an arbitrary commutative ring | representations = RG-modules; sub/quotient; ⊕, ⊗_R, dual, Hom; permutation and regular representations; induction/restriction and **all** of Frobenius reciprocity, transitivity, the projection formula and induced ≅ coinduced; Z(RG) has the class sums as an R-basis; degree-1 representations = degree-1 representations of G/[G,G] |
| **H1** | k a field with **|G| invertible in k** (⟺ char k = 0 or char k ∤ |G|) | Maschke; complete reducibility; kG semisimple; Artin–Wedderburn kG ≅ ⊕M_{n_i}(D_i) over division rings D_i; the averaging projector V → V^G; #simple kG-modules ≤ #conjugacy classes |
| **H2** | H1 **plus k a splitting field for G** (End_{kG}(S) = k for every simple S) | D_i = k; kG ≅ ⊕M_{d_i}(k); Σd_i² = |G|; multiplicity of S_i in kG is d_i; ⟨χ,χ⟩ = 1 ⟺ irreducible; #simples = #conjugacy classes; simple characters are a k-basis of the class functions; column orthogonality; simple representations of G₁×G₂ are the V_i ⊗ W_j |
| **H2′** | **μ_e(k) has order e** (k contains a primitive eth root of 1), char k ∤ |G| | **implies H2**, by Brauer's splitting-field theorem (Webb Thm 9.2.7 — *stated, not proved, in this harvest*). This is the hypothesis the commission wants, and it is a genuine theorem, not a definition |
| **H3** | k = ℂ, or k a subfield of ℂ closed under complex conjugation | the Hermitian form ⟨χ,ψ⟩ = (1/|G|)Σχ(g)·conj ψ(g); |χ(g)| ≤ χ(1); χ(g) = χ(1) ⟺ g ∈ ker ρ; Burnside's p^aq^b theorem |

**Crucial:** the whole of §§2.1–2.8 and §§2.11–2.12 below lives at H0–H2′. Only §2.9
(Burnside) and §2.10 (normal subgroups from the table) genuinely reach H3, and §2.10 only
for its *sharp* form.

**H2 is strictly weaker than "k algebraically closed", and Webb makes the distinction
explicitly** (Ch. 2, after Theorem 2.1.1): *"At other times requiring k to be
algebraically closed is too strong, but we still want k to have the property that
End_A(S) = k for all simple A-modules S. In this case we call k a splitting field for the
k-algebra A."* And Webb Ch. 9 records that 𝔽_p and ℚ are already splitting fields for S₃
in every characteristic, so the μ_e hypothesis is sufficient but far from necessary.

### 2.1 The group algebra, and representations as k[G]-modules

**Definition (any R).** RG (equivalently R[G]) is the free R-module on the set G with
multiplication extending that of G bilinearly. It is an R-algebra, free of rank |G|, and it
is commutative iff G is.

**Proposition (Webb 1.1.5; Milne, "Linear representations"; Teleman 9.7; Serre §6.1).**
A representation of G over R — i.e. a group homomorphism ρ : G → GL(V) for V an
R-module — *is the same thing as* a unital RG-module. Morphisms of representations
correspond to RG-module homomorphisms, and "equivalent"/"isomorphic" correspond.
**Hypothesis: none beyond R commutative with 1.** Proof: extend ρ R-linearly; conversely
restrict the module action to G ⊆ (RG)^×.

**Subrepresentation, quotient, irreducible.** A subrepresentation is an RG-submodule; V is
**simple/irreducible** if V ≠ 0 and its only submodules are 0 and V (Webb §1.2). Webb notes
(§1.2) that over a field the simple A-modules are exactly the A/I for I a maximal left
ideal, so a finite-dimensional algebra has only finitely many isomorphism types of simples
and they are all finite-dimensional. **No field hypothesis needed for the definition.**

**The regular representation** is RG as a left module over itself. **The permutation
representation** RΩ of a G-set Ω has basis Ω with G permuting it; the regular
representation is the case Ω = G (Webb Example 4.3.4). Webb Example 4.3.4 also records the
identification **RΩ ≅ R↑^G_{G_ω} for a transitive Ω**, and Webb Ch. 3 Exercise 7 develops
the permutation character (number of fixed points).

**Direct sums, tensor products, duals, Hom.** For RG-modules V, W:
V ⊕ W; V ⊗_R W with g(v⊗w) = gv⊗gw; V* = Hom_R(V,R) with (gf)(v) = f(g^{-1}v);
Hom_R(V,W) with (gf)(v) = g·f(g^{-1}v). **All at H0.** The identity making Hom useful is
**Webb Lemma 3.2.1: over any ring R, Hom_R(V,W)^G = Hom_{RG}(V,W).**

**Degree-1 representations and G/[G,G].**
**Proposition (Webb 4.2.1).** *"The degree 1 representations of any finite group G over any
field are precisely the degree 1 representations of G/G′, lifted to G via G → G/G′."*
Proof in one line: a homomorphism G → GL(1,k) = k^× lands in an abelian group, so its
kernel contains the derived subgroup. **This is the one statement in the character-theory
core that is genuinely field-free**, and the scaffolder should say so. (How *many* there
are is field-dependent: |Hom(G/G′, k^×)| = |G/G′| exactly when μ_{exp(G/G′)}(k) is full.)

### 2.2 Maschke's theorem — and its exact converse

**Theorem (Maschke).** Sources agree on the statement and disagree only on packaging.
Webb Thm 1.2.1: *"Let V be a representation of the finite group G over a field F **in which
|G| is invertible**. Let W be an invariant subspace of V. Then there exists an invariant
subspace W₁ of V such that V = W ⊕ W₁ as representations."* Etingof Thm 3.1: *"…k a field
whose characteristic does not divide |G|. Then k[G] is semisimple."* Milne Thm 7.4, Teleman
Lemma 3.13, Conrad `maschke.pdf` Theorem 1 (stated as "|G| ≠ 0 in k") — same content.

**The hypothesis "|G| invertible in k" and "char k ∤ |G|" are equivalent for a field**
(char 0 ⟹ always; char p ⟹ |G| ≠ 0 in k iff p ∤ |G|).

**Proof strategy — and this is the one place the commission's no-analysis constraint bites
in the standard literature.** There are two proofs in circulation:

1. **The averaging-a-projection proof** (Webb 1.2.1, Etingof 3.1, Milne 7.4, Teleman 3.13,
   Conrad Thm 1). Take *any* vector-space projection π : V → W, set
   π′ = (1/|G|)Σ_{g∈G} g π g^{-1}; then π′ is a G-equivariant projection onto W and
   ker π′ is the invariant complement. **Works over any field with |G| invertible. No inner
   product, no ordering, no conjugation.** Teleman prefaces his version with exactly the
   right sentence: *"The following argument makes no appeal to inner products, and so has
   the advantage of working over more general ground fields."*
2. **The averaging-a-Hermitian-form proof** (Etingof §3.6, Teleman §3.4 "Unitarity",
   Conrad's opening paragraph). Average a Hermitian inner product and take W^⊥. **Requires
   ℂ (or ℝ) and positivity, and is unusable here.**

**Conrad `maschke.pdf` explains precisely why proof 2 cannot be repaired by using a
bilinear form instead of a Hermitian one**, and gives the counterexample: on k² with
⟨(x,y),(x′,y′)⟩ = xx′ − yy′, the subspace W = k(1,1) satisfies W^⊥ = W, so W ⊕ W^⊥ ≠ k².
**The scaffolder should take proof 1 and record Conrad's remark as the reason.**

**The converse (Etingof Proposition 3.2).** *"If k[G] is semisimple, then the
characteristic of k does not divide |G|."* Proof: write k[G] = k ⊕ ⊕_{i≥2}End V_i; the
trivial module k has, by Schur, a one-dimensional space of maps in and out of k[G],
spanned by Λ(1) = Σ_{g∈G} g and by the augmentation ε with ε(g) = 1; then ε∘Λ(1) = |G|,
so if |G| = 0 in k the split injection Λ has no left inverse — contradiction.
**This is the cheapest correct converse in the harvest and it is entirely algebraic.**

**Conrad's partial converse at the level of representations (Theorem 4).** *"Let k be a
field with prime characteristic p, G a finite group of p-power order, and V a
finite-dimensional k-vector space with a nontrivial representation of G. Then some
subrepresentation of V does not have a complementary subrepresentation."* Its proof needs
only the fixed-point count for a p-group acting on a finite set. **Conrad flags the exact
scope: this is about |G| = p^n, not merely p | |G|.**

**Complete reducibility (Webb Prop 1.2.4 + Cor 1.2.5).** The three-way equivalence — U is a
direct sum of finitely many simples ⟺ U is a sum of finitely many simples ⟺ U has finite
composition length and every submodule is a direct summand — holds **over any ring A with
1**; Maschke plus the equivalence gives Cor 1.2.5, *"Let F be a field in which |G| is
invertible. Then every finite dimensional FG-module is semisimple."* The finiteness
hypotheses in Webb's statements are there only to avoid Zorn's lemma and can be removed
(Webb's Ch. 1 Exercise 14).

### 2.3 Schur's lemma, in both forms, and Artin–Wedderburn

**Theorem (Schur, general form; Webb 2.1.1 first half, Teleman 4.6).** *"Let A be a ring
with 1 and let S₁, S₂ be simple A-modules. Then Hom_A(S₁,S₂) = 0 unless S₁ ≅ S₂, in which
case End_A(S₁) is a **division ring**."* **Hypothesis: none.** Proof: kernel and image are
submodules.

**Theorem (Schur, split form; Webb 2.1.1 second half, Teleman 4.1+4.7, Serre §2.2).**
*"If A is a finite-dimensional algebra over an **algebraically closed** field k, then every
A-module endomorphism of S₁ is multiplication by a scalar, so End_A(S₁) ≅ k."* Proof: θ has
an eigenvalue λ in k, and θ − λI is a singular A-endomorphism of a simple module, hence 0.
**The hypothesis actually used is "every element of End_A(S) has an eigenvalue in k",
which is exactly the splitting-field condition (H2), weaker than algebraic closure.**
Teleman gives the equivalent route: over ℂ the only finite-dimensional division algebra is
ℂ (Prop 4.7), and *"over the reals, there are three finite-dimensional division algebras,
namely ℝ, ℂ and ℍ. All of these can occur as endomorphism algebras of irreducibles of
finite groups"* (Remark 4.8).

**Theorem (Artin–Wedderburn; Webb 2.1.3).** *"Let A be a finite-dimensional algebra over a
field k with the property that every finite-dimensional module is semisimple. If
_AA ≅ S₁^{n₁} ⊕ ⋯ ⊕ S_r^{n_r} then A ≅ M_{n₁}(D₁) ⊕ ⋯ ⊕ M_{n_r}(D_r) where
D_i = End_A(S_i)^op. Furthermore, if k is algebraically closed then D_i = k for all i."*
Proof strategy, and it is worth copying: (i) **Lemma 2.1.2**, End_A(_AA) ≅ A^op, i.e. every
endomorphism of the regular module is right multiplication; (ii) a direct-sum decomposition
turns End into a matrix of Hom's; (iii) Schur kills the off-diagonal blocks. **Prerequisite
chain: simple modules → Schur → End(_AA) ≅ A^op → matrix decomposition.** No field
hypothesis until the last sentence.

**Corollary (Webb 2.1.4 / 2.1.5).** For k a field in which |G| is invertible, kG is a
direct sum of matrix algebras over division rings; **and *if in addition k is a splitting
field*** (Webb writes "algebraically closed", but only uses D_i = k), n_i = dim_k S_i and
**Σ_i d_i² = |G|**, with d_i also equal to the multiplicity of S_i in the regular
representation.

**The centre.** **Lemma (Webb 3.4.1; Milne Prop 7.38).** *"For any commutative ring R, the
centre Z(RG) has as an R-basis the conjugacy class sums x̄_i = Σ_{h ∼ x_i} h."* Milne
proves the same over an arbitrary field. **Hypothesis: none.** Consequently
dim_k Z(kG) = #conjugacy classes **over every field**, which is the field-free half of the
"number of irreducibles" theorem.

### 2.4 The number of irreducibles, and where the field enters

**Theorem (Webb 3.4.3; Milne 7.41(a); Teleman 9.3; Serre §2.5).** For **k a splitting field
with |G| invertible** (Webb and Milne both state it for ℂ; Milne's standing hypothesis is
"F algebraically closed of characteristic zero"), the following three numbers are equal:
#simple characters, #isomorphism types of simple kG-modules, #conjugacy classes of G.
Proof: kG ≅ ⊕M_{d_i}(k) ⟹ dim Z(kG) = r; and dim Z(kG) = #conjugacy classes by the class-sum
lemma. **The splitting hypothesis is where it can fail** — see §4.

**Harvested inequality without a splitting hypothesis (Webb Ch. 3, Exercise 6(b)).**
*"Let G be a finite group and k a field in which |G| is invertible. Show that the number of
simple representations of kG is at most the number of conjugacy classes of G."*
**This is the correct general statement, and it is what a page over an unspecified k must
say.**

**Milne's field-free half.** Milne proves **Prop 7.43** (the simple characters are linearly
independent over F) and **Prop 7.47** (they form an F-basis of the class functions)
**using only the central idempotents e_j of F[G] ≅ ∏M_{f_i}(F)** — no inner product, no
conjugation, no orthogonality. That is the cheapest route to "the simple characters span
the class functions" and the scaffolder should prefer it to the orthogonality route.

### 2.5 Characters, class functions, and the inner product — THE CONJUGATION QUESTION

This is the single most dangerous place in the four pages, exactly as the commission
anticipated. Here is what the careful sources actually do.

**Definition.** χ_V(g) = tr(ρ(g)), a function G → k. It is a **class function** (constant on
conjugacy classes) because tr(ab) = tr(ba); **no field hypothesis** (Webb 3.1.1(6), Milne).

**Webb §3.2 — the treatment to copy.** Webb defines, on the ℂ-vector space of class
functions, the **Hermitian** form
> ⟨χ, ψ⟩ = (1/|G|) Σ_{g∈G} χ(g)·conj(ψ(g))

and then says, verbatim: *"If χ and ψ happen to be characters of a representation we have
χ(g) = conj χ(g^{-1}), ψ* is the character of the contragredient representation, and in
this case we obtain further expressions for the bilinear form:
⟨χ,ψ⟩ = (1/|G|)Σχ(g^{-1})ψ(g) = (1/|G|)Σχ(g)ψ(g^{-1}) = (1/|G|)Σ conj(χ(g))·conj(ψ(g)) =
⟨ψ,χ⟩ … **We emphasize that we have assumed that χ and ψ are actually characters of
representations to obtain these equalities.**"*

**Teleman Remark 8.18 — the crispest statement in the harvest, quoted in full:**
> *"The inner product of characters can be defined over any ground field k of characteristic
> not dividing |G|, by using χ(g^{-1}) in lieu of conj(χ(g)). We have used Schur's Lemma
> over ℂ in establishing Part (3) of Lemma 8.16, although not for Parts 1 and 2. Hence, the
> orthogonality of characters of non-isomorphic irreducibles holds over any such field k,
> but orthonormality ‖χ‖² = 1 can fail if k is not algebraically closed. The value of the
> square depends on the decomposition of the representation in the algebraic closure k̄.
> This can be determined from the division algebra D_V = End^G_k(V) and the Galois theory of
> its centre, which will be a finite extension field of k. See, for instance, Serre's book
> for more detail."*

**Milne — the third independent treatment.** Milne proves everything he can with no pairing
at all (Prop 7.43, 7.47), and then writes, as an explicit standing hypothesis in the text:
*"We now assume that F is a subfield of ℂ stable under complex conjugation c ↦ c̄"*, and
only then defines (f₁|f₂) = (1/|G|)Σ f₁(a)·conj f₂(a). **Milne is thus the source that most
sharply separates "what needs a conjugation" from "what does not".**

**So the correct statement for this library, and the two sources for it:**

> **Definition (the bilinear pairing).** For k a field with |G| invertible and class
> functions φ, ψ : G → k, set ⟨φ, ψ⟩ := (1/|G|) Σ_{g∈G} φ(g^{-1}) ψ(g).
> This is a **symmetric k-bilinear form**, defined with no conjugation and no ordering.
>
> **Theorem.** For k of characteristic 0 and V, W finite-dimensional kG-modules,
> ⟨χ_V, χ_W⟩ = dim_k Hom_{kG}(V, W).
>
> **Corollary.** ⟨χ_V, χ_W⟩ = 0 for non-isomorphic simple V, W (over any such k), and
> ⟨χ_V, χ_V⟩ = dim_k End_{kG}(V) = dim_k D_V. This equals 1 **iff k is a splitting field for
> that module**, i.e. iff V is absolutely simple.

**The proof of the theorem — this is the analysis-free proof, and it is Webb's.** Two
ingredients, both stated with their exact hypotheses by Webb:
- **Webb Lemma 3.2.1 (any ring R):** Hom_R(V,W)^G = Hom_{RG}(V,W).
- **Webb Lemma 3.2.2 (two different hypotheses, deliberately separated):** if |G| is
  invertible in R, π := (1/|G|)Σ_{g∈G} g is an RG-module map V → V^G which is a projection
  onto V^G, so V^G is a direct summand; **and if R is a field of characteristic zero,
  tr(π) = dim V^G.**
Then χ_{Hom_k(V,W)}(g) = χ_V(g^{-1})·χ_W(g), so
tr(π on Hom_k(V,W)) = (1/|G|)Σ χ_V(g^{-1})χ_W(g) = ⟨χ_V,χ_W⟩, while the same trace equals
dim_k Hom_k(V,W)^G = dim_k Hom_{kG}(V,W). **Nothing here uses ℂ, an ordering, or a
conjugation.** Webb's Theorem 3.2.3 is exactly this argument with the Hermitian notation
laid over it.

**Why char 0 and not merely |G| invertible.** The step tr(π) = dim_k V^G computes the trace
of an idempotent, which equals its rank *as an element of the prime field*. In char p that
only gives dim V^G mod p. So the pairing theorem is a **characteristic-zero** theorem; over
char p the correct replacement is Brauer character theory (Webb Ch. 10), which is out of
scope.

**When do the two forms agree?** Over a conjugation-stable subfield of ℂ:
χ(g^{-1}) = conj χ(g) **for characters** (Webb 3.1.1(5); proof: the eigenvalues of ρ(g) are
roots of unity, so λ^{-1} = conj λ). Hence for characters the bilinear and the Hermitian
forms give the same number. **For arbitrary class functions they differ**, and Webb records
the discrepancy explicitly at the end of §4.3: with induction/restriction extended to
arbitrary class functions, *"the formulas of Corollary 4.3.9 hold for arbitrary class
functions – except that in part (1) the numbers from the different equations are not equal
(as stated there), but are complex conjugates of each other."*

**The trap, stated plainly for the scaffolder.** A page over an abstract splitting field k
must not write conj(χ(g)), must not write |χ(g)|, and must not assert ⟨χ,χ⟩ ≥ 0 or
"⟨χ,χ⟩ = 1 ⟺ irreducible" without an absolute-irreducibility hypothesis. Every one of
those is a false statement over a general k, and Teleman 8.18 names the exact failure.

### 2.6 The orthogonality relations

**Row (first) orthogonality.** Webb Thm 3.2.3, Serre §2.3, Teleman 8.10, Etingof 3.8,
Milne 7.51/7.52. Stated over ℂ by all five. **The correct general form is the ⟨χ_V,χ_W⟩ =
dim_k Hom_{kG}(V,W) theorem of §2.5**, of which "1 if V ≅ W, 0 otherwise" is the H2
specialisation via Schur.

**Column (second) orthogonality.** Webb Cor 3.4.4, Teleman Prop 10.1, Etingof Thm 3.9:
Σ_{χ irreducible} χ(g)·conj χ(h) = |C_G(g)| if g ∼ h, and 0 otherwise. **Prerequisite: the
character table is square, i.e. #simples = #classes (H2).** The standard proof is "the row
orthogonality says the matrix U with U_{χ,g} = χ(g)/√|C_G(g)| has orthonormal rows; a square
matrix with orthonormal rows has orthonormal columns" (Etingof's Remark after 3.9) — note
the **√|C_G(g)|**, which is a normalisation convenience, not a necessity: Webb's Cor 3.4.4
and Teleman's Prop 10.1 both state it without square roots, as
Σ_χ χ(g)conj χ(h) = |C_G(g)|δ. **The scaffolder should use the square-root-free form**;
in the bilinear normalisation it reads Σ_χ χ(g)χ(h^{-1}) = |C_G(g)|·[g ∼ h].
Etingof's own proof of 3.9 is a **trace computation on ℂ[G] with the operator x ↦ gxh^{-1}**
— no square roots, no unitarity — and is the one to copy.

**Consequences (all at H2 unless noted).** Multiplicity of a simple in a given module is
⟨χ,χ_i⟩ (Webb 3.3.1); **two representations are isomorphic ⟺ same character** (Webb 3.3.3,
Milne 7.44) — see §4 for the two ways this fails in char p; **irreducibility criterion**
⟨χ,χ⟩ = 1 (Webb 3.3.4, Teleman 8.15); **the regular character** χ_reg(g) = |G| if g = 1 and
0 otherwise (Milne, explicit), whence Σd_i² = |G| and Σd_iχ_i(g) = 0 for g ≠ 1
(Webb 3.3.7).

**The primitive central idempotents.** Webb Thm 3.6.2 gives e_i = (d_i/|G|)Σ_g χ_i(g^{-1})g.
**Note the formula is naturally written with χ_i(g^{-1}), not with a conjugate** — Webb
observes it is "(up to a scalar) the same formula used in the proof of Theorem 3.5.4". This
is a good place for the scaffolder to make the bilinear convention pay off.

### 2.7 Integrality — the exact chain of lemmas

The commission asked for this chain explicitly. **Webb §3.5 gives it complete and I
transcribe the dependency order:**

1. **`Theorem 3.5.1(1)`** s ∈ S is integral over a subring R ⟺ R[s] sits inside an
   R-submodule M of S that is finitely generated over R with sM ⊆ M. Proof (⟸) is the
   **adjugate/determinant trick**: from sx_i = Σλ_{ij}x_j, the matrix A = sI − (λ_{ij})
   kills the vector x, so adj(A)Ax = det(A)x = 0, and since 1 is an R-combination of the
   x_i, det(A) = 0. **Prerequisites: adjugate matrix, adj(A)A = det(A)I.**
2. **`Theorem 3.5.1(2)`** the integral elements form a **subring** (via R[a,b] finitely
   generated by the products x_iy_j).
3. **`Theorem 3.5.1(3)`** {x ∈ ℚ : x integral over ℤ} = ℤ — the rational root theorem.
   **This is the step that converts integrality into an actual divisibility.**
4. **`Theorem 3.5.1(4)`** every character value χ(g) is an algebraic integer, because it is
   a sum of eigenvalues of ρ(g), each a root of X^n − 1 for n = ord(g).
   **Hypothesis: ρ(g) must be diagonalisable with eigenvalues in the field, i.e. μ_n ⊆ k
   and char k ∤ n.** Over ℂ automatic; over a general k this is exactly H2′.
5. **`Proposition 3.5.2`** Z(ℤG) is integral over ℤ, because every commutative subring of
   ℤG is a subgroup of the finitely generated free abelian group ℤG, hence a finitely
   generated ℤ-module — condition 1(b). Hence Σλ_i x̄_i is integral over ℤ whenever the
   λ_i are algebraic integers.
6. **`Proposition 3.5.3` (the central characters ω_i).** For x ∈ Z(kG),
   ρ_i(x) = (1/d_i)·tr(ρ_i(x))·I; writing x = Σa_g g, ρ_i(x) = (1/d_i)Σ_g a_g χ_i(g)·I.
   **Hypothesis: Schur's lemma in split form, i.e. H2.** Applied to a class sum C̄,
   ω_i(C̄) = |C|χ_i(g)/d_i, and by 5 + 6 **this is an algebraic integer** — this is
   Etingof's Proposition 4.17 in different notation.

**Theorem (degree divides order; Webb 3.5.4, Etingof 4.16, Serre §6.5).**
*"The degrees d_i of the simple representations all divide |G|."* Webb's proof:
put x = Σ_g χ_i(g^{-1})g ∈ Z(kG) (central because the coefficients are class functions);
then ρ_i(x) = (1/d_i)Σ_g χ_i(g^{-1})χ_i(g)·I = (|G|/d_i)·I **using ⟨χ_i,χ_i⟩ = 1**;
x is integral over ℤ·1 by 5, so |G|/d_i is integral over ℤ; it is rational, so by 3 it is
an integer.

> **FINDING OF FIRST IMPORTANCE FOR THE SCAFFOLDER: this proof uses no absolute value, no
> conjugation, no ordering and no ℂ.** Every ingredient is available at **H2′** — μ_e ⊆ k,
> char k = 0. Written in the bilinear normalisation the element is x = Σ_g χ_i(g^{-1})g and
> the identity used is ⟨χ_i,χ_i⟩ = 1, which at H2′ is a theorem. **The commission's page 3
> can state and prove "d_i divides |G|" over any characteristic-zero field containing μ_e,
> and should, because stating it over ℂ would be stating it weaker than the proof gives.**
> Etingof's proof (4.16/4.17) is a variant using Σ_i λ_iχ_V(g_{C_i}) = |G|/dim V and is
> equally analysis-free.

**A necessary caution the commission asked about.** Conrad `irrepdeg.pdf` opens with the
exact scope: *"Any irreducible finite-dimensional representation of a finite group over ℂ
(or more generally over an algebraically closed field whose characteristic doesn't divide
the size of the group) has degree dividing the size of the group. This can fail for
representations in positive characteristic."* and constructs a **5-dimensional irreducible
representation of SL₂(𝔽₁₃) in characteristic 13**, where |G| = 2³·3·7·13 = 2184 is not
divisible by 5. So the char k ∤ |G| hypothesis is not decorative.

### 2.8 Burnside's p^a q^b theorem — and the exact archimedean cost

**Theorem (Webb 3.7.1; Teleman 18.4; Etingof 4.20; Serre §8.x via James–Liebeck Ch. 31).**
*"Let G be a group of order p^a q^b where p and q are primes. Then G is solvable."*

**Three independent proofs harvested (Webb §3.7, Teleman §18.3, Etingof §4.5).** They agree
on the architecture:

- **Step A (group theory).** A minimal counterexample is simple, non-abelian, not of prime
  power order. There is a non-identity g whose conjugacy class has size q^d, d > 0 — take
  1 ≠ g ∈ Z(P) for P a Sylow p-subgroup, so C_G(g) ⊇ P. **Prerequisites: Sylow, the centre
  of a p-group is nontrivial, orbit–stabiliser, solvability closed under extension.**
- **Step B (column orthogonality + integrality).** From 1 + Σ_{χ≠1} χ(1)χ(g) = 0: if every
  nontrivial χ with q ∤ χ(1) had χ(g) = 0, then 1/q would be an algebraic integer,
  contradicting ℤ integrally closed. So fix χ with q ∤ χ(1) and χ(g) ≠ 0.
- **Step C (Bézout).** q^d·χ(g)/χ(1) is an algebraic integer (Prop 3.5.2 + 3.5.3); choose
  λq^d + μχ(1) = 1; then χ(g)/χ(1) = λ·(q^dχ(g)/χ(1)) + μχ(g) is an algebraic integer.
- **Step D (THE ARCHIMEDEAN STEP).** ζ := χ(g)/χ(1) is a nonzero algebraic integer, and
  every algebraic conjugate of ζ is again an average of χ(1) roots of unity (Galois permutes
  roots of unity). Each therefore has **absolute value ≤ 1** by the triangle inequality. The
  product of the conjugates is a nonzero rational integer, so has absolute value ≥ 1; hence
  all conjugates have absolute value exactly 1, so **|χ(g)| = χ(1)**.
- **Step E.** |χ(h)| = χ(1) ⟺ ρ(h) is scalar (equality case of the triangle inequality for
  a sum of roots of unity), so H = {h : |χ(h)| = χ(1)} is normal and contains g ≠ 1;
  simplicity forces H = G and ker ρ = 1, so G is abelian — contradiction.

Etingof isolates Step D as **Lemma 4.22**: *"If ε₁,…,ε_n are roots of unity such that
(1/n)(ε₁+⋯+ε_n) is an algebraic integer, then either ε₁ = ⋯ = ε_n or ε₁+⋯+ε_n = 0."*
Teleman isolates it as **Prop 18.6**: *"|χ(g)| = χ(1) if and only if χ(g)/χ(1) is a
non-zero algebraic integer."* **All three sources use the complex absolute value here, and
none offers an alternative.**

> **HONEST ANSWER TO THE COMMISSION'S QUESTION.**
> **There is no route to Burnside in this harvest that avoids an archimedean input.** The
> pure field-norm argument gets you N(ζ) ∈ ℤ \ {0} — Webb does exactly this — but the step
> that converts that into information is *"all conjugates have absolute value ≤ 1, so
> |N(ζ)| ≤ 1"*, and there is no substitute for it inside cyclotomy + algebraic integers
> alone. (Teleman also records the historical fact: *"It was not given a purely
> group-theoretic proof until 1972."* — the Goldschmidt/Bender/Matsuyama proof, which is a
> substantial piece of finite group theory and not cheaper.)
>
> **BUT the cost in THIS library is much lower than "importing analysis", and the
> scaffolder should know exactly why.** The published item
> `items/lem-complex-conjugation-and-modulus-laws.md` already establishes, for ℂ = ℝ[i]:
> conjugation is an involutive real-field automorphism; z·conj z = |z|²; |z| ≥ 0 with
> |z| = 0 ⟺ z = 0; **|zw| = |z||w|**; and **|z+w| ≤ |z| + |w|** — proved from
> **Lagrange's identity** and the ordered-field facts `lem-of-square-monotone`,
> `lem-of-square-positive`, `thm-of-square-roots`. **That is ordered-field algebra, not
> analysis.** So Step D is affordable, and what it actually costs is:
> 1. work inside ℂ (or a subfield of ℂ) rather than an abstract splitting field — an
>    honest and necessary restriction of the page's scope;
> 2. a new small lemma: **|ζ| = 1 for every root of unity in ℂ** (from |ζ|^n = 1 with
>    |ζ| > 0 in ℝ);
> 3. a new small lemma: **the equality case**, |z₁+⋯+z_n| = n for |z_i| = 1 ⟹ all z_i
>    equal. The published lemma's proof already contains Lagrange's identity, which is
>    exactly what an equality-case argument needs, but **the equality case is not itself
>    published** and must be built;
> 4. ℚ(μ_m)/ℚ normal (so all algebraic conjugates stay inside and are again sums of roots
>    of unity), and ℤ integrally closed in ℚ.
>
> **Recommendation.** Scaffold Burnside as a **ℂ-only** result on page 3, with a
> reader-facing remark saying so, and scaffold the degree-divides-order theorem at H2′
> (§2.7) where it genuinely belongs. Do **not** state Burnside over an abstract splitting
> field: it would be a title asserting more than the proof gives, which is a fatal defect
> under this repo's rules.

**One further place the same archimedean step appears, and it is easy to miss.**
Webb Prop 3.1.1(3) *"|χ(g)| ≤ χ(1), with equality if and only if ρ(g) is scalar
multiplication"* and (4) *"χ(g) = χ(1) if and only if ρ(g) = 1"* both rest on the triangle
inequality. Part (4) — the one used for "kernels are visible in the character table" — has
a **purely algebraic substitute** if it is wanted at H2′: for λ_i ∈ μ_m in characteristic 0,
Σ_{i=1}^d λ_i = d forces every λ_i = 1, which can be proved by taking Tr_{ℚ(ζ_m)/ℚ} of both
sides and using the ordering of **ℤ** (Ramanujan-sum bound |Tr(ζ^a)| ≤ φ(m) with equality
above only at a ≡ 0). **That substitute is real work (Möbius, φ, Ramanujan sums) and I did
not find it carried out in any harvested source** — see §5.

### 2.9 Normal subgroups from the character table

**Webb Prop 3.1.1(4)** gives ker ρ = {g ∈ G : χ(g) = χ(1)}, and Webb's text immediately
after adds: *"We will see in Exercise 7 that **all** normal subgroups of a finite group may
be found from knowledge of the characters of representations, as intersections of the
kernels of simple characters. This means that whether or not a group is simple may be
easily read from this information on characters."*
**Statement to scaffold:** for N ⊴ G, N = ∩{ker χ_i : N ⊆ ker χ_i}; equivalently the normal
subgroups of G are exactly the intersections of kernels of simple characters.
**Proof strategy:** the simple characters of G/N are exactly the simple characters of G with
N in the kernel (lifting, Webb §4.2), and a group is trivial iff the intersection of the
kernels of its simple characters is trivial (which follows from faithfulness of the regular
representation). **Hypothesis: H2 (so that lifting gives all simple characters of G/N),
plus H3 for the "χ(g) = χ(1)" form of the kernel** — or H2′ plus the algebraic substitute
above.
**This is the standard illustration that the character table does *not* determine G but
does determine its normal-subgroup lattice; the D₈/Q₈ example (§4.7) is the discriminating
witness and both facts should sit on the same page.**

### 2.10 Induction and restriction — the two constructions and their agreement

**Restriction.** For H ≤ G and an RG-module W, W↓^G_H is W with the action restricted.
**H0.**

**Induction, model A (tensor / extension of scalars).** V↑^G_H := RG ⊗_{RH} V, with G acting
by left multiplication on RG (Webb §4.3; Serre §7.1 for the module version; Singh §18.1).
**H0 — R an arbitrary commutative ring.**

**Induction, model B (the explicit direct sum over cosets).** Webb **Proposition 4.3.1**
makes the two agree: choosing coset representatives g₁H, …, g_{|G:H|}H,
> V↑^G_H = ⊕_{i=1}^{|G:H|} g_i ⊗ V as R-modules, each g_i ⊗ V ≅ V as R-modules; if V is
> R-free then rank_R V↑^G_H = |G:H|·rank_R V; and for x ∈ G, x(g_i ⊗ V) = g_j ⊗ V where
> xg_i = g_j h with h ∈ H. The action of G on the set of these submodules is transitive, and
> Stab_G(1 ⊗ V) = H.

**Model B as a *characterisation* — this is what the commission means by "their
agreement".** Webb **Proposition 4.3.2**: *"Let M be an RG-module that has an R-submodule V
with the property that M is the direct sum of the R-submodules {gV : g ∈ G}. Let
H = {g ∈ G : gV = V}. Then M ≅ V↑^G_H."* **This is Serre's definition of an induced
representation turned into a theorem about the tensor model, and it is the exact bridge the
commission asked for. Prove Prop 4.3.1, then Prop 4.3.2, and the two constructions are
identified once and for all, over any R.**

**Model C (coinduction / invariant functions).** Webb **Corollary 4.3.8(5)**:
V↑^G_H ≅ Hom_{RH}(RG, V) as RG-modules, with explicit mutually inverse maps
g ⊗ v ↦ φ_{g,v} (where φ_{g,v}(x) = (xg)v if x ∈ Hg^{-1}, else 0) and
θ ↦ Σ_{g ∈ [G/H]} g ⊗ θ(g^{-1}). **H0, and Webb flags that this one is "special for group
representations" — it is not an instance of the general ring-theoretic adjunctions.** Singh
§18.2 is a second source ("Induced Representations via Invariant-functions").

**The induced character formula.** **Webb Proposition 4.3.5** (over ℂ; Serre §7.2;
Teleman §15.1):
> χ↑^G_H(g) = (1/|H|) Σ_{t ∈ G, t^{-1}gt ∈ H} χ(t^{-1}gt) = Σ_{t ∈ [G/H], t^{-1}gt ∈ H} χ(t^{-1}gt).

**Proof strategy (trace on a block matrix, no analysis):** by Prop 4.3.1 the only summands
t ⊗ V contributing to the diagonal are those with g(t⊗V) = t⊗V, i.e. t^{-1}gt ∈ H, and on
such a summand g acts as ρ(t^{-1}gt). **Hypothesis: a field where trace makes sense — i.e.
this formula is valid over any field, but its *usefulness* (recovering the module) needs
H2′ and char 0.** The two displayed forms agree because {t : t^{-1}gt ∈ H} is a union of
left cosets of H.

**Frobenius reciprocity.** **Webb Corollary 4.3.8(1), over an arbitrary commutative ring R:**
> Hom_{RG}(V↑^G_H, W) ≅ Hom_{RH}(V, W↓^G_H) **and** Hom_{RG}(W, V↑^G_H) ≅ Hom_{RH}(W↓^G_H, V).

**The first is the ⊗–Hom adjunction for the ring map RH → RG and needs nothing; the second
is genuinely special to group algebras and follows from induced ≅ coinduced (4.3.8(5)).**
**Webb Corollary 4.3.9(1)** is the character form over ℂ: ⟨χ↑^G_H, ψ⟩_G = ⟨χ, ψ↓^G_H⟩_H and
⟨ψ, χ↑^G_H⟩_G = ⟨ψ↓^G_H, χ⟩_H, *"In fact, all four numbers are equal"* — but see the caveat
in §2.5: for arbitrary class functions they are conjugates, not equal.

**Transitivity of induction and of restriction; the projection formula.**
Webb Cor 4.3.8(2), (3), (4): (V↑^K_H)↑^G_K ≅ V↑^G_H; (W↓^G_K)↓^K_H = W↓^G_H;
V↑^G_H ⊗_R W ≅ (V ⊗_R W↓^G_H)↑^G_H, in particular R↑^G_H ⊗_R W ≅ (W↓^G_H)↑^G_H.
**All at H0.** Webb's explicit mutually inverse maps for (4) are
(g⊗v)⊗w ↦ g⊗(v⊗g^{-1}w) and its inverse — worth copying verbatim, since the naive map is
not well defined.

**Applications the sources actually carry.** Permutation modules are induced from the
trivial module of a point stabiliser (Webb 4.3.4); RG·H̄ ≅ R↑^G_H where H̄ = Σ_{h∈H} h, and
more generally RG·H̃ ≅ ρ*↑^G_H for a linear character ρ of H (Webb Ch. 4 Ex. 11 — a good
cheap corollary); the 2-dimensional characters of D₈ and Q₈ are induced from linear
characters of index-2 subgroups (Webb Appendix B); every irreducible representation of a
p-group is induced from a 1-dimensional representation of a subgroup (Teleman Thm 17.5) —
and **Teleman's warning that this is false for general finite groups**, which is exactly
what Brauer's induction theorem repairs (Teleman 18.2).

### 2.11 Mackey's formula and Mackey's irreducibility criterion

**Theorem (Mackey decomposition; Webb 5.2.1).**
> *"Let H, K be subgroups of G and V a representation for K **over a commutative ring R**.
> Then (V↑^G_K)↓^G_H ≅ ⊕_{g ∈ [H\G/K]} (g(V↓^K_{H^g ∩ K}))↑^H_{H ∩ ^gK} as RH-modules."*

**H0.** Webb's proof is a two-line consequence of Props 4.3.1 and 4.3.2 once one computes
Stab_H(g ⊗ V) = H ∩ ^gK. **Prerequisite: double cosets (Webb §5.1), and the conjugated
module ^gV.**

**Theorem (Mackey's irreducibility criterion; Teleman 16.5; Serre §7.4; Singh Ch. 20).**
> *"Ind^G_H W is irreducible if and only if (i) W is irreducible, and (ii) for each
> s ∈ S \ H (S a set of double-coset representatives), the representations W_s and
> Res^{H_s}_H W are disjoint (no common irreducible constituent)."*
Here H_s = sHs^{-1} ∩ H. **Corollary 16.7 (H normal):** Ind^G_H W is irreducible ⟺ W is
irreducible and W ≇ W_s for all s ∈ G \ H.

**Proof strategy (Teleman's, and it is short):** ⟨Ind W, Ind W⟩ = ⟨Res Ind W, W⟩ (Frobenius)
= Σ_s ⟨Ind^H_{H_s}W_s, W⟩ (Mackey) = Σ_s ⟨Res^{H_s}_H W, W_s⟩ (Frobenius again), each term a
non-negative integer, the s = 1 term being ‖χ_W‖².
**Hypothesis: H2 plus char 0** — the argument needs ⟨·,·⟩ to take *non-negative integer*
values on characters and needs ‖χ_W‖² = 1 ⟺ irreducible, i.e. it needs a splitting field.
Teleman's proof also uses *"the dot product of characters is an integer (hence real)"*,
which is an honest use of ℂ that can be replaced by the bilinear dim-Hom reading.

> **AFFORDABILITY VERDICT the commission asked for.** Mackey's criterion is affordable on
> page 4 **if and only if** page 4 already has: Mackey's formula (cheap, H0, two lines from
> 4.3.1/4.3.2), Frobenius reciprocity in character form (cheap), the fact that ⟨χ,ψ⟩ is a
> non-negative integer for characters (= dim Hom, already proved in §2.5), and the
> irreducibility criterion ⟨χ,χ⟩ = 1 (H2). Every one of these is on the page's own path
> anyway. **I recommend including it.** The only real cost is the double-coset machinery
> and the conjugated module ^gV, which are each a short definition plus a short lemma.

### 2.12 Splitting fields — the honest catalogue

**Definitions (Webb §9.2).** A simple A-module U is **absolutely simple** iff E ⊗_F U is
simple for every field extension E ⊇ F. E ⊇ F is a **splitting field for A** iff every
simple E ⊗_F A-module is absolutely simple; for A = kG one says splitting field for G.
Equivalent working criterion (Webb Prop 9.2.5): End_A(U) = k.

**Theorem (Webb 9.2.6).** Every finite-dimensional F-algebra has a splitting field of
**finite degree** over F. (Via Prop 9.2.1: a module over E ⊗_F A with E/F algebraic can
already be written over a finite subextension.)

**Theorem (Brauer; Webb 9.2.7).** *"Let G be a finite group, F a field, and suppose that F
contains a primitive mth root of unity, where m is the exponent of G. Then F is a splitting
field for G."*
**Webb states this and explicitly does not prove it** — *"We state the result, but will not
use it and do not prove it"* — because the proof goes through **Brauer's induction
theorem**. Webb adds the sharpening: *"Often smaller splitting fields than these can be
found… For example, in every characteristic the prime field is a splitting field for S₃ —
the same is in fact true for all the symmetric groups. However, if we require that a field
be a splitting field not only for G but also for all of its subgroups, then ℚ(e^{2πi/m})
and 𝔽_p(ζ) are the smallest possibilities, since a cyclic group of order n requires the
presence of a primitive nth root of 1 in a splitting field."*

> **SCAFFOLDING CONSEQUENCE, and it is a big one.** The commission's preferred hypothesis
> "k contains μ_e" is **exactly right as a sufficient condition**, but the theorem that makes
> it sufficient — Brauer's — is **out of reach**: it needs Brauer induction, which needs
> §§9–11 of Serre. Three honest options for the scaffold:
> 1. **Take "k is a splitting field for G" as the hypothesis** (End_{kG}(S) = k for every
>    simple S) and prove everything from it. This is Webb's own device, it is a definition
>    rather than a theorem, and it costs nothing. **Recommended.**
> 2. Take k algebraically closed of characteristic 0. Simplest, but throws away the
>    interesting cases and makes the "μ_e" story invisible.
> 3. Take μ_e ⊆ k and cite Brauer's theorem as a `rem-` item with `proved_here: false`.
>    **Permitted by the library's narrow last resort but not necessary**, since option 1
>    dominates it: with option 1 the μ_e case is recoverable *for abelian groups and for
>    every group whose representations one actually writes down*, because for cyclic groups
>    "μ_n ⊆ k ⟹ splitting" is elementary (Webb Ch. 2 Ex. 11: kC_n ≅ k[X]/(X^n − 1), and by
>    CRT + separability the simple degrees are the degrees of the irreducible factors of
>    X^n − 1 over k).
> **Do NOT state Brauer's splitting theorem as though it were proved. Webb, the most
> careful source here, refuses to.**

**Theorem (Noether–Deuring; Webb 9.2.8).** If E ⊗_F U ≅ E ⊗_F V then U ≅ V. Useful, quoted
by Webb from a reference, not proved.

**Positive characteristic (out of scope but must not be misstated).** **Theorem (Brauer;
Webb 9.3.6):** over a splitting field of characteristic p, the number of simple kG-modules
equals the number of **p-regular** conjugacy classes. So "#simples = #classes" is a
characteristic-zero statement, full stop.

---

## PART 3 — Convention disagreements, named, with the sources on each side

| Flashpoint | Position A | Position B | Notes / what the library should do |
|---|---|---|---|
| **Representation = homomorphism, or = module?** | **Homomorphism first:** Serre Part I §1.1 (modules do not appear until Part II §6.1, p. 47); Webb §1.1 (*"A (linear) representation of G (over R) is a group homomorphism ρ : G → GL(V)"*), then **Prop 1.1.5** identifies them; Milne, "Linear representations"; Teleman 1.5 | **Module first:** Etingof §1.2–§1.3 defines algebras and their representations, and a group representation *is* a k[G]-module by definition; Dummit & Foote §18.1 title is "Linear Actions and **Modules over Group Rings**" | The two are equivalent (Webb 1.1.5) and the equivalence is itself a theorem worth an item. **Recommendation: define the homomorphism, prove the equivalence, then work with modules** — the module language is what makes Maschke/Wedderburn/induction painless, and page 1 already names both. Serre's ordering (characters before the group algebra) is the outlier and would force the library to prove orthogonality twice. |
| **Left or right modules; composition order** | **Left modules, maps compose right-to-left:** Webb states it as a standing convention — *"unless otherwise stated, modules will be left modules and morphisms will be composed reading from right to left, so that matrices in GL(n,R) are thought of as acting from the left on column vectors"* | Right modules appear only transiently, e.g. Webb's own proof of Prop 4.3.1 uses RG as a **right** RH-module | No real disagreement, but induction is defined as RG ⊗_{RH} V with RG a **(RG, RH)-bimodule**, so the scaffold must be explicit about sides or the tensor product is ill-formed. **State the bimodule structure once, in the definition item.** |
| **The inner product's conjugation** | **Hermitian:** ⟨χ,ψ⟩ = (1/\|G\|)Σχ(g)·conj ψ(g) — Webb §3.2, Etingof §3.5, Teleman §8.9, Milne (under the explicit hypothesis "F a subfield of ℂ stable under complex conjugation"), Serre §2.3 | **Bilinear:** ⟨χ,ψ⟩ = (1/\|G\|)Σχ(g^{-1})ψ(g) — Webb §3.2 *derives* it for characters; **Teleman Remark 8.18 recommends it as the general-field definition**; Webb's central-idempotent formula (Thm 3.6.2) and his degree-divides-order proof (Thm 3.5.4) are both naturally written in it | **This library must use the bilinear form as the definition** and record the Hermitian form as a ℂ-only coincidence. See §2.5. Which argument is antilinear is itself a convention: Etingof's footnote 4 says *"We agree that Hermitian forms are linear in the first argument and antilinear in the second one"*; Webb writes ⟨χφ,ψ⟩ = ⟨χ, φ*ψ⟩ with φ*(g) = conj φ(g). |
| **"Character": any representation, or only irreducible?** | **Any representation:** Webb §3.1 (*"the character of a representation ρ"*), Milne (*"we obtain a function χ_V on G … called the character of ρ"*), Serre §2.1, Etingof §3.2, Teleman §8. All then say **"simple character"** or **"irreducible character"** for the special case | Some elementary treatments reserve "character" for the irreducible ones, and "character of a finite abelian group" (Conrad `charthy.pdf`) means a homomorphism G → S¹, i.e. a **degree-1** character | Follow A: character = trace of any representation; **irreducible/simple character** for the special case. Webb's word is "simple", Milne's is "simple (or irreducible)", Serre's and Etingof's is "irreducible". **Pick one and never mix** — a title saying "the character" when the proof needs irreducibility is exactly the fatal-title defect this repo's step-6 audit looks for. |
| **Notation for induction** | **Arrows:** Webb writes V↑^G_H and W↓^G_H, and explains the choice: *"In many books the notation V^G is used for this induced module, but for us this conflicts with the notation for fixed points"* | **Functor names:** Serre §7.1, Teleman §14, Etingof §4.8, Singh Ch. 17 all write Ind^G_H and Res^G_H | Webb's warning is real and this library has V^G in play (the averaging projector). **Recommendation: Ind^G_H / Res^G_H**, which nobody misreads, and never V^G for the induced module. |
| **Which construction *is* the induced representation** | **Tensor:** Webb §4.3 (RG ⊗_{RH} V is the definition); Etingof §4.8; Singh §18.1 | **Coset direct sum:** Serre §3.3/§7.1 defines Ind as a module W containing V with W = ⊕_{σ ∈ G/H} σV — i.e. Webb's **Prop 4.3.2** *is* Serre's definition; Singh Ch. 17.2 gives the coset model as the construction | They agree (Webb 4.3.1 + 4.3.2), and a third model, Hom_{RH}(RG,V), agrees too (Webb 4.3.8(5), Singh §18.2). **Scaffold the tensor model as the definition and both others as theorems** — that ordering makes Frobenius reciprocity a one-line adjunction. |
| **Is Schur's lemma stated over an algebraically closed field only?** | **No — two-part statement:** Webb Thm 2.1.1 (division ring over *any* ring; = k over an algebraically closed field); Teleman 4.6 + 4.1 + 4.7 (the same split, with 4.3 titled *"Schur's Lemma over other fields"*) | **Yes — ℂ-only:** Serre §2.2 states it for ℂ; Etingof's Corollary 1.17 is over an algebraically closed field | Follow A. The general form is free (kernel/image are submodules) and it is what makes the whole ground-field discussion possible. **The library should state the general form first, then the split form with the splitting-field hypothesis rather than algebraic closure.** |
| **"Splitting field" vs "algebraically closed"** | **Splitting field, and it is weaker:** Webb §2.1 and Ch. 9 | **Algebraically closed:** Milne (standing hypothesis for Ch. 7's second half), Etingof, Serre Part I | Webb's own note — *"At other times requiring k to be algebraically closed is too strong, but we still want k to have the property that End_A(S) = k"* — is the one to adopt. |
| **Dihedral group naming** | **D_{2n} = order 2n:** Teleman §11 (D_{2n}), Webb writes **D₈** for the group of order 8 (Appendix B: *"D₈ = ⟨x,y \| x⁴ = y² = 1, yxy^{-1} = x^{-1}⟩"*) | **D_n = symmetries of the n-gon, order 2n:** Serre's TOC §5.3 "The dihedral group D_n"; Conrad `dihedral.pdf`; the commission's own brief says "D₄ and Q₈" | **The commission's D₄ is Webb's D₈.** Any citation of Webb's Appendix B must translate. This is a real collision and a live source of false statements. |
| **Exponent** | *"the least common multiple of the orders of its elements"* — Webb §9.2 | (no disagreement found) | Needed for the μ_e hypothesis; make it a definition item. |
| **`kG` vs `k[G]`** | `kG`, `RG`: Webb throughout | `k[G]`, `ℂ[G]`, `F[G]`: Etingof, Milne, Teleman, Singh (whose Ch. 6 is titled "The Group Algebra k[G]") | Cosmetic; pick one. |
| **Definition of "solvable"** | **composition factors cyclic:** Webb §3.7 (*"a group G is solvable if it has a composition series in which all of the composition factors are cyclic"*) | **abelian successive quotients:** Etingof Def 4.18 (a chain of nested normal subgroups with G_{i+1}/G_i abelian) | Equivalent for finite groups, but *not* the same definition, and the library already has `composition-series-and-solvable-groups` published — **use the library's existing definition and do not re-import Webb's**. |

---

## PART 4 — Hypothesis-sensitivity and counterexample seeds

Each of these is a place where a commonly quoted statement becomes **false** if a hypothesis
is dropped. Each is a candidate `cex-`/`ex-` item. Sources are given for every one.

1. **Maschke fails when char k = p divides |G| — the standard witness.**
   **Conrad `maschke.pdf` Example 3** (and identically **Webb Example 1.1.4/1.1.7**,
   **Etingof Example 3.3**): let char k = p, G = ℤ/(p), and let G act on V = k² by
   a·(x,y)ᵀ = (1 a; 0 1)(x,y)ᵀ = (x+ay, y)ᵀ. Then W = k·(1,0)ᵀ is a subrepresentation with
   **no complementary subrepresentation**: a complement would be 1-dimensional and would
   have to be an eigenspace of (1 1; 0 1), whose only eigenvalue in k is 1 and whose
   1-eigenspace is W itself. **This is the item the commission asked for.**
2. **The stronger failure: a p-group in characteristic p has *only* the trivial irreducible.**
   **Conrad `maschke.pdf` Theorem 4**: for |G| = p^n and char k = p, *every* nontrivial
   representation has a non-split subrepresentation. Proof: a finite p-group acting on a
   finite set has a number of fixed points divisible by p, so every nonzero module has a
   trivial 1-dimensional submodule; if everything split, V would be a sum of trivials.
   **Also Etingof Problem 3.4; Webb Prop 6.3 (referenced in Example 4.2.2).**
   **Conrad's own scope caveat must be copied:** *"This theorem is about groups with order
   equal to a power of p, not groups with the weaker property of having order divisible
   by p."*
3. **The averaged-bilinear-form proof of Maschke cannot be repaired.**
   **Conrad `maschke.pdf`, opening discussion:** on k² with the nondegenerate bilinear form
   ⟨(x,y),(x′,y′)⟩ = xx′ − yy′, the subspace W = k(1,1) has **W^⊥ = W**, so W ⊕ W^⊥ ≠ k².
   A one-line witness that "orthogonal complement" is not a legitimate substitute for
   "invariant complement" without positivity.
4. **Irreducible but not absolutely irreducible: rotation by 2π/3 over ℝ.**
   **Webb Example 4.2.2** (*"over ℝ the 2-dimensional representation of the cyclic group
   ⟨x \| x³ = 1⟩, in which x acts as rotation through 2π/3, is simple since there is no
   1-dimensional subspace stable under the group action. We need to pass to ℂ to split it as
   a sum of two representations of degree 1"*); **Teleman §4.9** (*"over the reals, the two
   irreducible representations of ℤ/3 have dimensions 1 and 2"*); **Singh §5.1** ("Example of
   Representation over ℚ"). **Note for this library: the rotation matrix has entries
   involving √3/2, so the honest algebra-band presentation is C₃ acting on
   ℝ[X]/(X²+X+1) ≅ ℂ by multiplication, or on ℚ[X]/(X²+X+1) over ℚ — no trigonometry
   required and the same phenomenon.**
5. **Σd_i² = |G| is FALSE over a non-splitting field.** For k = ℝ and G = C₃:
   ℝC₃ ≅ ℝ[X]/(X³−1) ≅ ℝ × ℝ[X]/(X²+X+1) ≅ ℝ × ℂ, so there are **two** simple modules, of
   ℝ-dimensions 1 and 2, and 1² + 2² = 5 ≠ 3 = |G|. What survives is Σ_i n_i·dim_k S_i = |G|
   with n_i the multiplicity in the regular module, here 1·1 + 1·2 = 3. **Source for the
   computation: Webb Ch. 2 Exercise 11(a),(b),(d)** — kC_n ≅ k[X]/(X^n − 1), and for
   char k ∤ n the simple degrees are the degrees of the irreducible factors of X^n − 1 over
   k; part (d) is exactly *"When k = ℝ and n is odd show that G has (n−1)/2 simple
   representations of degree 2 as well as the trivial representation of degree 1. When
   k = ℝ and n is even show that G has (n−2)/2 simple representations of degree 2 as well as
   two simple representations of degree 1. If S is one of the simple representations of
   degree 2 show that End_{kG}(S) = ℂ."*
6. **#irreducibles ≠ #conjugacy classes over ℚ or ℝ.** C₃ has 3 conjugacy classes but only
   2 simple ℝ-modules (item 5). **Webb Example 9.2.2** is the source's own framing:
   *"If G = ⟨g⟩ is cyclic of order n then g acts on ℂG as a direct sum of 1-dimensional
   eigenspaces… Since these lie outside ℚ (if n ≥ 3), the regular representation of ℚG is a
   direct sum of simple modules but some of them have dimension greater than 1."*
   **Webb Ch. 2 Exercise 11(c) gives the sharp ℚ-statement:** *"When n is prime and k = ℚ,
   use irreducibility of X^{n−1} + X^{n−2} + ⋯ + X + 1 to show that G has a simple module S
   of degree n − 1, and that End_{kG}(S) ≅ ℚ(e^{2πi/n})."* So ℚC_p has exactly 2 simple
   modules against p conjugacy classes. (Webb writes the field as ℚ(e^{2πi/n}); **for this
   library it is ℚ[X]/(Φ_n), and the scaffolder must make that substitution everywhere Webb
   names a cyclotomic field by its analytic generator.**) **The harvested general inequality is
   Webb Ch. 3 Exercise 6(b): over any k with |G| invertible, #simples ≤ #classes.**
7. **Schur's lemma's split form fails over a non-algebraically-closed field — with a
   *non-commutative* endomorphism ring.** **Webb Ch. 2 Exercise 12:** let ℍ be the real
   quaternion algebra, Q₈ = {±1,±i,±j,±k} acting on ℍ by left multiplication, so ℍ is a
   4-dimensional ℝQ₈-module. Then **End_{ℝQ₈}(ℍ) ≅ ℍ** and ℍ is **simple** as a
   representation of Q₈ over ℝ; consequently ℝQ₈ ≅ ℝ⁴ ⊕ ℍ and **ℝQ₈ has no simple
   representation of dimension 2**. **Teleman Remark 4.8** independently records that all
   three finite-dimensional real division algebras ℝ, ℂ, ℍ occur as End_G of an irreducible
   of a finite group. **This is the crispest "Schur fails" witness in the harvest: the
   endomorphism ring is not merely bigger than k, it is not even commutative.**
8. **The degree need not divide |G| in positive characteristic.**
   **Conrad `irrepdeg.pdf`:** an explicit **5-dimensional irreducible representation of
   SL₂(𝔽₁₃) in characteristic 13**, where |SL₂(𝔽₁₃)| = 2³·3·7·13 = 2184 and 5 ∤ 2184. It is
   the space V_{5,2} of homogeneous degree-5 polynomials in two variables, with the action
   (A·f)(X,Y) = f(A^{-1}(X,Y)ᵀ). **This is the counterexample that shows the char k ∤ |G|
   hypothesis in the degree theorem is load-bearing.**
9. **Characters do not determine the module in characteristic p — two different failures.**
   **Milne Aside 7.45:** (i) the representation σ^i ↦ (1 i; 0 1) of C_p in characteristic p
   is nontrivial *but has the same character as the trivial representation*; (ii) even when
   char F does not divide |G|, for any representation V the character of **pV** (p copies of
   V) is identically zero. Milne also records the repair: **the Brauer–Nesbitt theorem** —
   if ρ₁, ρ₂ are semisimple representations of an F-algebra A with ρ₁(a) and ρ₂(a) having
   the same characteristic polynomial for every a ∈ A, then ρ₁ ≅ ρ₂.
10. **The simple representations of G₁ × G₂ are NOT all V_i ⊗ W_j over a non-algebraically
    closed field.** **Webb states the failure immediately after Theorem 4.1.2** and gives
    the exercise: **Ch. 4 Exercise 10** — *"Show that every simple representation of C₃ × C₃
    over ℝ has dimension 1 or 2. Deduce that if V is a simple 2-dimensional representation
    of C₃ over ℝ then V ⊗ V is not a simple ℝ[C₃ × C₃]-module."* (Indeed V ⊗_ℝ V is
    4-dimensional and ℂ ⊗_ℝ ℂ ≅ ℂ × ℂ.)
11. **"All simple representations have degree 1" does NOT imply abelian.**
    **Webb Example 4.2.2**: over a field of characteristic p, a p-group has only the trivial
    simple representation (Webb Prop 6.3), so every simple has degree 1 while the group can
    be non-abelian. And the converse half of Theorem 4.1.5 fails too, by item 4. **Webb's
    own sentence:** *"Neither implication of Theorem 4.1.5 holds if we do not assume that
    our representations are defined over an algebraically closed field of characteristic
    prime to |G|."*
12. **D₄ and Q₈ have the same character table but are not isomorphic — the standard witness
    that the character table does not determine the group.** Transcribed verbatim from
    **Webb Appendix B**, where the two groups are presented as
    D₈ = ⟨x,y | x⁴ = y² = 1, yxy^{-1} = x^{-1}⟩ and Q₈ = ⟨x,y | x⁴ = 1, x² = y², yxy^{-1} = x^{-1}⟩
    (**Webb's D₈ is the commission's D₄**), and the printed table is shared:

    | | 1 | x² | x | y | xy |
    |---|---|---|---|---|---|
    | \|C_G(g)\| | 8 | 8 | 4 | 4 | 4 |
    | χ₁ | 1 | 1 | 1 | 1 | 1 |
    | χ_{1a} | 1 | 1 | 1 | −1 | −1 |
    | χ_{1b} | 1 | 1 | −1 | 1 | −1 |
    | χ_{1c} | 1 | 1 | −1 | −1 | 1 |
    | χ₂ | 2 | −2 | 0 | 0 | 0 |

    **Webb's own explanation, which is the proof and should be reproduced:** *"In both cases
    the derived subgroup is ⟨x²⟩ with a C₂ × C₂ quotient, so that the four 1-dimensional
    characters look the same in both cases. There remains a fifth character which is
    determined by orthogonality relations, so the character tables must be the same."*
    (Both 2-dimensional characters are induced from a linear character of an index-2 subgroup
    not containing x² in its kernel.) **The groups are non-isomorphic because D₈ has five
    elements of order 2 and Q₈ has one.** Note also that the *normal subgroup lattices* are
    both recovered correctly from the shared table (§2.9) — which is precisely why "normal
    subgroups yes, isomorphism type no" is the right slogan.
13. **A real-valued character need not come from a real representation.**
    **Webb Ch. 3 Exercise 5, bracketed note, verbatim:** *"The quaternion group of order 8 in
    its action on the algebra of quaternions provides an example of a complex representation
    that is not equivalent to a real representation, but whose character is real-valued…
    the representation has complex dimension 2, but there is no basis over ℂ for the
    representation space such that the group acts by matrices with real entries. A
    real-valued character does not necessarily come from a real representation."*
    (This is Schur index 2; the systematic invariant is the **Frobenius–Schur indicator**,
    Etingof §4.1.) **Exercise 5 also gives the correct statement:** every element of G is
    conjugate to its inverse ⟺ every character of G is real-valued.
14. **⟨χ,χ⟩ = 1 is not the irreducibility criterion over a general field.**
    **Teleman Remark 8.18**, quoted in §2.5: orthogonality of distinct irreducible characters
    survives over any k with char k ∤ |G| using the χ(g^{-1}) form, *"but orthonormality
    ‖χ‖² = 1 can fail if k is not algebraically closed"*. Concretely, for the 2-dimensional
    simple ℝC₃-module V, End_{ℝC₃}(V) ≅ ℂ, so ⟨χ_V,χ_V⟩ = 2, not 1.
15. **Frobenius reciprocity's two forms are not literally equal for arbitrary class
    functions.** **Webb, end of §4.3:** *"the formulas of Corollary 4.3.9 hold for arbitrary
    class functions – except that in part (1) the numbers from the different equations are
    not equal (as stated there), but are complex conjugates of each other."* A page that
    extends induction from characters to class functions must state this.
16. **Positive worked examples to carry.** S₃ over ℝ and over ℂ (Webb Examples 1.1.3, 2.1.6,
    3.1.2 — and Webb's Ch. 9 note that **the prime field is a splitting field for S₃ in
    every characteristic**, which is a striking counterpoint to the μ_e hypothesis); the
    S₄ character table built by hand (Webb Example 3.3.5); the character table of a direct
    product as a tensor product (Webb Cor 4.1.4); A₄ over ℂ and over 𝔽₂ (Webb Appendix B);
    A₅ (Teleman §12, Singh §14.1); groups of order pq (Teleman §11, Singh §21.1); the
    induced character of a linear character of ⟨(123)⟩ ≤ S₃ (Webb Example 4.3.6);
    C_n over an arbitrary k via kC_n ≅ k[X]/(X^n − 1) (Webb Ch. 2 Ex. 11) — **this last one
    is the single best worked example for a library that wants to make the ground field
    visible, because CRT plus the factorisation of X^n − 1 over k reads off the entire
    answer with no character theory at all.**

---

## PART 5 — Gaps in this harvest that the scaffolder should know about

1. **Isaacs, *Character Theory of Finite Groups*, was not obtained** — the AMS endmatter PDF
   403s and there is no open copy. That is the commission's named reference for integrality,
   degree-divides-order and Burnside. **Mitigation is complete for the mathematics** (Webb
   §3.5 and §3.7 carry both in full text, transcribed above; Etingof §4.3–4.5 and Teleman
   §13/§18 are two more independent treatments), **but no heading enumeration for Isaacs
   exists in this harvest**, so no `coverage.json` disposition may cite it as read. If the
   scaffolder wants Isaacs's chapter list for context only, the chapter titles reported by
   aggregators are: 1 Algebras, modules, and representations · 2 Group representations and
   characters · 3 Characters and integrality · 4 Products of characters · 5 Induced
   characters · 6 Normal subgroups · 7 T.I. sets and exceptional characters · 8 Brauer's
   theorem · 9 Changing the field · 10 The Schur index · 11 Projective representations ·
   12 Character degrees · 13 Character correspondence · 14 Linear groups · 15 Changing the
   characteristic · Appendix: Some character tables. **Reported, not read.**
2. **Fulton & Harris Ch. 1–3 was not obtained at all** (Springer front-matter endpoint
   returns HTML). No loss for this commission: F&H Part I is ℂ-only and would contribute
   nothing on the ground-field question, which is the whole difficulty here.
3. **James & Liebeck's chapter list (§1.8) was not read off the publisher's page.**
   Do not cite it as a read source.
4. **Dummit & Foote: the section titles harvested are the 1st edition's (Ch. 15–16), not the
   3rd's (Ch. 18–19).** The section *titles* coincide except that 1st-ed §15.2
   "Projective and Injective Modules" is not part of the 3rd edition's Ch. 18.
5. **Brauer's splitting-field theorem (Webb 9.2.7) is stated but proved by nobody in this
   harvest.** Webb explicitly declines; it needs Brauer's induction theorem (Serre Ch. 10).
   **This is the single most consequential gap**, because "k contains μ_e ⟹ k is a splitting
   field" is exactly the hypothesis the commission prefers. See §2.12 for the three ways out;
   **option 1 (take "splitting field" as the hypothesis) is the one I recommend and it needs
   no external citation at all.**
6. **The Witt–Berman theorem was NOT harvested from any source.** The statement I believe to
   be correct — over a field k of characteristic 0, the number of simple kG-modules equals
   the number of **k-conjugacy classes** (orbits of conjugacy classes under g ↦ g^j for
   j in the image of Gal(k(μ_e)/k) → (ℤ/e)^×) — appears in this harvest **only as a search
   summary, not as read text**. Webb Ch. 3 Exercise 6(b) carries only the inequality
   (#simples ≤ #classes) and Webb Thm 9.3.6 carries only the characteristic-p analogue
   (p-regular classes over a splitting field). **Do not scaffold Witt–Berman on the strength
   of this harvest.** If it is wanted, it needs its own source pass.
7. **The algebraic substitute for the archimedean step is not in any harvested source.**
   For the *equality* case (Σ of d roots of unity equals d ⟹ all are 1) a purely
   order-on-ℤ argument via Tr_{ℚ(ζ_m)/ℚ} and Ramanujan sums exists, but **no source here
   carries it**, and it needs Möbius, φ and the Ramanujan-sum evaluation. For the
   *inequality* case that Burnside needs, **no algebraic substitute exists in this harvest
   at all**, and all three harvested proofs (Webb Step 6, Teleman 18.6, Etingof 4.22) use
   the complex absolute value. See §2.8 for the recommended route and its exact cost.
8. **The library's published roots-of-unity item is the analytic one.**
   `items/thm-complex-nth-roots-and-roots-of-unity.md` and `items/cor-sum-of-roots-of-unity.md`
   both go through ζ = exp(2πi/n). A page here that needs "|ζ| = 1 for ζ^n = 1" should prove
   it directly from `lem-complex-conjugation-and-modulus-laws` (|ζ|^n = 1 with |ζ| a positive
   real forces |ζ| = 1) rather than citing the exponential. **The equality case of the
   triangle inequality is not published and must be built** (§2.8).
9. **Character-table computation as a topic is thin here.** Webb §4.5 "The Construction of
   Character Tables" is a single short section pointing at the exercises; the worked tables
   live in Webb Appendix B, Teleman §§10–12, Singh §§12–14, and Serre §5. If the scaffold
   wants substantial worked tables it should harvest Webb Appendix B directly — I read only
   the D₈/Q₈, A₄ and SD₁₆ entries.
10. **Clifford's theorem and the Frobenius–Schur indicator are in scope-adjacent territory
    and cheap.** Webb Thm 5.3.1 (weak Clifford) is stated *"Let k be **any** field"* and is a
    two-paragraph proof; Etingof §4.1 develops the Frobenius–Schur indicator in three pages.
    Neither is on the commission's list. **Both are natural `deferred` entries with a real
    reason: Clifford belongs with Mackey on a normal-subgroup page, and Frobenius–Schur is a
    real-vs-complex question that needs the Schur index to be honest.**
11. **Teleman's file misreports its own length to `file(1)`** (6 pages vs the true 60). If a
    later session re-fetches it, use pypdf's page count, not `file`.
12. **Not fetched, and possibly worth a later pass:** `kconrad.math.uconn.edu/blurbs/`
    also carries `grouptheory/CstarqZ.pdf`, `linmultialg/hurwitzrepnthy.pdf` (title on the
    index page is just "representation theory") and `ringtheory/quaternionalg.pdf`, none of
    which I opened. Serre's Part II Ch. 12 "Rationality questions" (§12.2 Schur indices,
    §12.3 Realizability over cyclotomic fields) is the literature's own home for this
    commission's central question and **its full text was not obtained**; if a future session
    wants to state anything sharp about minimal fields of realisability, that chapter is
    where to go.
