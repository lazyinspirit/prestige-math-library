# Agent 5 — modular symmetric-group articles and notes report

## Agent record

| field | record |
|---|---|
| canonical agent/task name | `/root/symmetric_scaffold/symr_articles_modular` |
| model | `gpt-5.6-terra` |
| reasoning effort | `high` |
| exact assignment | Retrieve and read complete authoritative articles and author/university notes on modular simple modules, cores/quotients and blocks, decomposition matrices, modular branching, and its crystal interpretation; audit interfaces and preserve all convention distinctions. |
| start state | Read `CLAUDE.md`, `README.md`, the symmetric-group commission and report contract, the completed ordinary/symmetric-function/seminormal reports, the planning audit, RG-8--RG-11, and the published modular/projective-cover and Brauer/decomposition page interfaces. |
| completion state | Seven complete source documents were downloaded to the ignored assigned cache (six counted; one university thesis retained as an explicitly non-counted defect cross-check), SHA-256 checked, page-count/end-matter checked, text extracted, and the exact ranges below read. This is the only tracked file written. |

## Boundary and conventions audit

The published page `modular-representations-and-projective-covers` supplies the splitting
`p`-modular system, lattice reduction, radicals/socles/heads, projective covers, and
vertices/sources. `brauer-characters-and-decomposition-matrices` supplies Brauer
characters, the general decomposition map/numbers/matrix, Cartan relation, and primitive
central-idempotent block partition. They do **not** supply symmetric-group Specht forms,
the labels of the simple modules, core blocks, abaci, or modular branching. Those are the
new track's legitimate additions, and must depend on these published pages rather than
repeat their general proofs.

RG-8--RG-11 are **planned, empty-inventory** characteristic-zero suppliers: diagrams,
dominance, Young/tabloid and Specht construction, ordinary branching, and hooks. They are
not published. A modular page may inherit the integral Specht construction only once those
items exist, but must add the field `k` of characteristic `p>0`, the invariant-form radical,
and the different simple/branching conclusions. RG-13 is likewise only the planned generic
Hecke interface. The cellular/Hecke and KLR material in Kleshchev is an interface for
agents 3/6, not permission to duplicate their proposed pages.

Throughout the direct symmetric-group statements use a splitting (equivalently here,
algebraically closed is safest) field `k` of prime characteristic `p>0`, and left modules in
the proposed prose. The sources often use right modules; no conclusion changes after
opposites are taken. A partition is **p-regular** if no positive part occurs `p` or more
times. It is **p-restricted** if `lambda_i-lambda_(i+1)<p` for every `i` (equivalently,
`lambda'` is p-regular). These are not synonyms.

The conventional James module is
`D^lambda=S^lambda/(S^lambda cap (S^lambda)^perp)` and is nonzero exactly for
p-regular `lambda`. Kleshchev's level-one *cellular* notation instead uses dual Spechts
and labels simples by p-restricted `mu`; his precise translation (Kleshchev Remark 5.5) is
`D^lambda ~= D(lambda') tensor sgn`. Thus a page using p-regular labels must transpose and
sign-twist before importing a p-restricted good-node or crystal statement. In characteristic
two the sign is trivial, but the transpose still is not.

## Full-text evidence

All paths below are absolute and lie under the required ignored cache. Each original begins
with a valid PDF header, was processed by `mutool draw -F txt` without OCR, and its output
was used for the stated reading; page images were checked where abacus layouts or formulae
were ambiguous. `mutool info` supplied page counts. The final extracted pages were also
checked for the stated references/index/end matter, so none is an abstract, preview, or a
truncated chapter.

### Counted source 1 — proof-bearing modular textbook cross-check

* G. D. James, *The Representation Theory of the Symmetric Groups*, Lecture Notes in
  Mathematics 682, Springer-Verlag, 1978; **textbook**. Legitimate complete University of
  Minnesota CSE copy: <https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf>.
* Cache: `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/modular-articles/james-1978-representation-theory-symmetric-groups.pdf`.
  SHA-256 `e339ca5fb1ff9d78874c21c0dd6f7ce609ef94cc805d9921d824424c0712babc`;
  **161 PDF pages**. The contents runs through chapter 26 and the extracted terminal pages
  contain the references/index through “Young's Rule”; final `%%EOF` is present.
* Actually read: prefatory roadmap/contents; §§9--13, printed pp. 34--51; §§21 and 24,
  pp. 77--85 and 98--104; relevant appendicial matrices. These are proof-bearing for the
  Specht radical quotient and triangularity. Section 21.11 *states* Nakayama's conjecture
  and expressly says it is not proved there; it is not used as a proof source.

### Counted source 2 — university modular notes

* David A. Craven, *Groups, Geometries and Representation Theory*, University of
  Birmingham 4P14b lecture notes, Spring 2013; **lecture notes**. Author's course page
  identifies this as a 42-page course developing ordinary and partly modular symmetric-group
  theory: <https://web.mat.bham.ac.uk/D.A.Craven/groupsgeomreptheory2013.html>. Full text:
  <https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf>.
* Cache: `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/modular-articles/craven-2013-groups-geometries-representation-theory.pdf`.
  SHA-256 `b2b190e9a1928b17d7747985e260cf3e7986d1ba31e906d7918c946ee7c0a8c8`;
  **42 PDF pages**. Text extraction is native and succeeds; the last substantive pages give
  the final Murnaghan--Nakayama proof/examples and references/end matter, not a preview.
* Actually read: chapter 2, §§2.1--2.3, printed pp. 18--27 (PDF pp. 20--29), especially
  Theorems 2.3, 2.11, 2.12, 2.14 and Corollary 2.11. It supplies a short independent
  treatment of radical quotients, the p-regular classification, dominance triangularity and
  the stated core-block theorem; it does not prove the latter.

### Counted source 3 — university notes for abaci and quotients

* Stacey Law (lecturer), notes by Leonard Tomczak, *Representation Theory of Symmetric
  Groups*, Cambridge Part III, Michaelmas 2022; **lecture notes**. Author/university full
  text: <https://math.berkeley.edu/~ltomczak/notes/Mich2022/RepSn_Notes.pdf>.
* Cache: `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/modular-articles/tomczak-2022-representation-theory-symmetric-groups-notes.pdf`.
  SHA-256 `eb7051ab74e7753b1f399ab152535021580b1dd0c3cde7b81376d501aefcb6a6`;
  **76 PDF pages**. Native extraction succeeds. The final pages finish the McKay section,
  exercises/references/end matter are present.
* Actually read: §§2.2--2.3, printed pp. 11--22 (James submodule theorem and the
  radical quotient); §4.1, pp. 53--64 (Definitions and Lemmas 4.1--4.9; Theorems 4.10--4.11;
  Proposition 4.12). This gives the abacus proof of core uniqueness and the quotient/weight
  formula, independently of James/Craven.

### Counted source 4 — original modern Nakayama proof

* William O'Donovan, *A New Proof of Nakayama's Conjecture via Brauer Quotients of Young
  Modules*, arXiv:1708.04365, 2017 version; **preprint**. Full arXiv text:
  <https://arxiv.org/pdf/1708.04365>.
* Cache: `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/modular-articles/odonovan-2017-new-proof-nakayama.pdf`.
  SHA-256 `52583cd8e22d8e5c52b3d2ede984ece5dfcba3e35df2ec786eb6fc39e9ca05e9`;
  **16 PDF pages**. Native extraction succeeds; pp. 15--16 contain acknowledgements and
  the complete bibliography, so the full preprint is present.
* Actually read all pp. 1--16: Theorem 1; §§2--4; §5, especially Propositions 13--15,
  18--19. This is the proof-bearing modern block source. It assumes a field of characteristic
  `p`; it uses Young modules, Brauer quotients, vertices/Brauer correspondence, projective
  covers, duality and the Mullineux map, so its full proof belongs only after those suppliers
  are available.

### Counted source 5 — modular-branching article

* Jonathan Brundan, “Modular Branching Rules and the Mullineux Map for Hecke Algebras of
  Type A,” *Proceedings of the London Mathematical Society* (3) 77(3) (1998), 551--581,
  DOI <https://doi.org/10.1112/S0024611598000562>; **article**. Complete author-hosted
  manuscript: <https://pages.uoregon.edu/brundan/papers/quantum.pdf>.
* Cache: `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/modular-articles/brundan-1998-modular-branching-mullineux.pdf`.
  SHA-256 `c9739b545e24407fdb93010f56a539a17331596f6e93b1f352619e91ddfe451c`;
  **34 PDF pages** (the superficial `file` estimate is wrong; `mutool info` and the complete
  page stream give 34). Native text extraction succeeds; pp. 32--34 are references/end
  matter.
* Actually read pp. 1--6 (definitions, Theorems 2.5--2.6 and example), pp. 27--31
  (Lemmas 5.2, Theorems 5.3--5.4 and their proof), and used the intervening §§3--4 roadmap
  to identify the quantum-GL/Schur-functor proof bridge. It proves the normal/good node
  criterion in the Hecke setting and specializes at parameter `q=1`, quantum characteristic
  `ell=p`, to the symmetric group.

### Counted source 6 — modern authoritative survey and crystal interface

* Alexander Kleshchev, “Representation Theory of Symmetric Groups and Related Hecke
  Algebras,” arXiv:0909.4844v1, 2009, later *Bulletin of the AMS* 47 (2010), 419--481;
  **preprint/article**. Complete arXiv text: <https://arxiv.org/pdf/0909.4844>.
* Cache: `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/modular-articles/kleshchev-2009-symmetric-groups-related-hecke-algebras.pdf`.
  SHA-256 `8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab`;
  **66 PDF pages**. Native text extraction succeeds; pp. 59--66 contain its bibliography,
  so all end matter is present.
* Actually read §§3.4, 5.3--5.4, 7.4--7.6, 8.3--8.5, 9.4, 10.2--10.4 and 11.1--11.5
  (printed pp. 18--19, 24--25, 31--33, 36--42, 43, 45--47, 50--54). It provides exact
  modern statements and convention translations. It is a survey: the displayed theorems
  credit their original proofs; only claim a proof route from it when a proof is actually
  outlined.

### Non-counted complete defect cross-check

Florian Eisele, *Blocks with Klein Four Defect Groups*, RWTH Aachen dissertation, 2012,
§2.8 (not relabelled as one of the permitted source types, hence **not counted**): university
copy <https://www.math.rwth-aachen.de/~Gabriele.Nebe/diss/eisele.pdf>, cached as
`.../eisele-2012-modular-representation-theory-symmetric-groups-thesis.pdf`, SHA-256
`bdbaba899c2f25dfcbb7eb85ca865d37a9f4c2878fd7fa8205802182c67b89a5`, 129 pages, native
extraction, terminal bibliography/CV present. Read pp. 45--50, Theorem 2.138 and Remark
2.139. It independently confirms the block-weight/defect-group statement below; do not
cite it as a course text or original proof.

## Mathematical harvest and dispositions

### 1. Specht forms, radical quotients, and the simple labels

**Exact statement.** For `lambda |- n`, form the integral tabloid Specht module and reduce
to `S^lambda_k` with its invariant tabloid bilinear form. James §11.1 (printed p. 39),
proved from §§10.3--10.6, states for a field of characteristic `p` (or the characteristic-zero
convention `p=infinity`) that

`D^lambda = S^lambda/(S^lambda cap (S^lambda)^perp)`

is nonzero iff `lambda` is p-regular. James Theorem 11.5 then says these `D^lambda`, for
all p-regular `lambda |- n`, are a complete inequivalent set of absolutely irreducible
modules (and `S_n` splits over every field). Craven §2.3, Theorem 2.12/Corollary 2.14,
and Tomczak §2.2, Theorems 2.5 and 2.7, independently agree on the radical quotient and
irreducibility; Craven gives the same p-regular labeling.

**Proof architecture actually read.** The universal James submodule theorem first gives
that the quotient by the form radical is zero or irreducible. James §10 defines the Gram
gcd `g_lambda`; Lemma 10.4 sandwiches it between factorial products from equal row lengths,
and Corollary 10.5 says `p | g_lambda` precisely when `lambda` is p-singular. Theorem 11.1
therefore gives nonzero exactly in the p-regular case. Lemma 11.3 uses the reversed-row
tableau and a nonzero scalar `e_{t*} kappa_t` to force the dominance relation on a nonzero
map into a tabloid quotient. This makes `D^lambda` labels inequivalent. Completeness uses
the number of p-regular conjugacy classes plus the splitting/absolute-irreducibility facts;
James identifies those latter general representation-theory results separately rather than
silently proving them. Tomczak gives the submodule theorem proof (antisymmetrizer has
one-dimensional image or annihilates) and explicitly flags the external Brauer class-count.

**Worked boundary.** James Example 11.7 computes the Gram rank for `(2,2)`: it is zero
in characteristic 2, one in characteristic 3, and two for `p>3`. Thus merely constructing a
Specht module does not make a simple, and “nonzero quotient” is characteristic-sensitive.

**Disposition.** Proposed `SYMR` modular-Specht A-page core: define the form/radical and
`D^lambda`, prove the Gram p-regular criterion and dominance separation, then invoke the
published Brauer simple-count theorem for completeness. Dependencies: planned RG-8/9
integral tabloid/Specht definitions; published modular-radical/projective-cover page; published
Brauer-character page. Do not restate general radical or projective-cover theory.

### 2. Decomposition matrix: exact unitriangular information and the open boundary

**Exact statement.** With rows indexed by all `lambda |- n`, columns by p-regular `mu`,
and `d_{lambda,mu}=[S^lambda:D^mu]`, James §12.1--12.3 says every composition factor of
`M^lambda` is `D^nu` with `nu` dominating `lambda`, and if `lambda` is p-regular its head is
the unique `D^lambda` (once). Consequently `d_{lambda,mu}=0` unless `mu` dominates
`lambda`, and `d_{lambda,lambda}=1` for p-regular `lambda`; with p-regular rows first in
dictionary order the matrix is lower unitriangular in James's orientation. Craven Corollary
2.11 independently gives lower triangularity in its row/column convention. A final scaffold
must declare its matrix orientation rather than call it simply “upper triangular.”

**Proof architecture.** James uses the exact/dual relation between `M^lambda/S^lambda`
and the orthogonal Specht complement, applies Lemma 11.3 to every factor, then inserts the
radical quotient in the middle of the resulting series. That is a composition-series proof,
not an assertion from ordinary characters. The `S_3` matrices in James Example 12.4 give
the explicit `p=2`, `p=3`, and `p>3` contrast.

**Unsolved boundary.** Do **not** promise general modular decomposition numbers. James
§24 opens by saying the general composition factors were unknown (and criticizes then-known
complete algorithms). The modern correct refinement is Kleshchev §§9.4--9.5: in
characteristic zero at a root of unity, Ariki/canonical bases determine graded Hecke
decomposition numbers (Theorem 9.9); §10 introduces nontrivial adjustment matrices on
reduction to positive characteristic and only states James's conjecture in its range. Hence
the ordinary group algebra in arbitrary defining characteristic has no general closed
combinatorial solution. Record low-weight/algorithmic cases only with a precise source.

**Disposition.** One triangularity theorem plus `S_3` (or James's `p=3, S_5`) matrix B-page
example is warranted. The general decomposition computation is an explicit frontier remark,
not an item called an algorithm. This extends, rather than duplicates, the published general
definition of `D`; it consumes that definition.

### 3. p-abacus, cores, quotients and weight

**Exact statement.** Tomczak §4.1 defines beta-sets and the `e`-abacus. Moving a bead up
one position on its runner removes an `e`-hook. Theorem 4.10 (printed p. 60) proves that
sliding all beads up gives a unique `e`-core `C_e(lambda)`, independently of the sequence
of e-hook removals. Theorem 4.11 gives a bijection from hooks of `lambda` whose lengths
are divisible by `e` to hooks of its `e`-quotient `(lambda^(0),...,lambda^(e-1))`, preserving
the quotient after removal and dividing hook length by `e`. Proposition 4.12 proves

`|lambda| = |C_e(lambda)| + e sum_i |lambda^(i)|`.

For `e=p`, define p-weight as `w_p(lambda)=sum_i |lambda^(i)|=(n-|C_p(lambda)|)/p`, the
number of p-hooks removed. This is valid combinatorics for every positive `e`; primality is
needed only when it is tied to characteristic-p block theory.

**Proof architecture.** A beta-set maps a hook to a bead-gap pair `(b,g)`, of length `b-g`.
Divisibility by `e` means same runner, which maps exactly to a hook in one quotient
component. Sliding all beads to runner tops is unique, proving core uniqueness; the
bead-gap bijection then gives the quotient formula and an induction proves the hook-removal
count. The source's full `e=3`, `lambda=(6,5,2,1^3)` example computes core `(3,1)` and
quotient `((2,1),empty,(1))`; its formatting must be rechecked from the PDF before reuse.

**Disposition.** A new combinatorial A page may prove beta-set/abacus equivalence, unique
core, quotient and size/weight formula with a complete small abacus B example. It can use
RG-8 diagrams and RG-11 hooks but must not claim a block conclusion until the next result.

### 4. Nakayama blocks, block weight, and defect

**Exact statement.** O'Donovan Theorem 1 (p. 1) says that for `F` of characteristic prime
`p`, blocks of `F S_n` are indexed by pairs `(gamma,w)` with `gamma` a p-core and
`n=|gamma|+pw`; `S^lambda` lies in `(gamma,w)` iff `c_p(lambda)=gamma`. Thus at fixed `n`,
“same p-core” already forces the same p-weight; do not state an extra independent
same-weight hypothesis. Craven Theorem 2.12 states the same conclusion but gives no proof;
James Theorem 21.11 also states, and expressly does not prove, its version.

The non-counted complete Eisele cross-check, Theorem 2.138/Remark 2.139 (pp. 49--50),
records that a weight-`w` block has a defect group conjugate to a Sylow p-subgroup of
`S_{pw}` and numerical defect `v_p((pw)!)`; it is abelian iff `w<p`. This is the correct
meaning of “weight/defect”; weight is not generally equal to numerical defect (only in the
abelian-defect range does the familiar simplification occur).

**Proof architecture actually read.** O'Donovan is the proof source. It proves the Brauer
quotient description of Young modules (Theorem 4) by induction and fixed-point/Brauer
quotient calculations; §4 connects a summand in a normalizer block to its block via Brauer
correspondence. The Nakayama induction then: (i) treats `n<p`; (ii) compares Young modules
of the same p-type through their common vertex and quotient (Proposition 13); (iii) removes
a p-cycle to bridge different p-types (Proposition 14); and (iv) handles projective
p-restricted labels using dual Spechts, Mullineux, dominance and projective lifts
(Propositions 15, 18, 19). The p-core cases are simple projectives of defect zero. This
route is substantial and needs the published vertices/sources plus later Brauer-correspondent
theory; it should not be disguised as a one-page elementary abacus proof.

**Disposition.** State a source-backed Nakayama theorem on a blocks page, but initially mark
its long proof as deferred to the block-theory supplier (or make a clearly scoped advanced
proof page only after the needed Young-module/Brauer-quotient infrastructure is scaffolded).
The abacus proof of core uniqueness is local and can precede it. The block page should state
the defect-group consequence and the `w<p` abelian criterion, citing a legitimate future
proof source before claiming proof.

### 5. Modular branching: normal, good, conormal and cogood nodes

**Exact statement in p-restricted convention.** Let `mu` be p-restricted and label the
simple `D(mu)` in Kleshchev's dual-Specht convention. For residue `i in Z/pZ`, order all
addable/removable i-nodes from top to bottom, write `+`/`-`, repeatedly cancel a `-` left of
a `+`, and retain the reduced signature. The remaining `-` are normal nodes; the leftmost
is good. The remaining `+` are conormal; the rightmost is cogood (Kleshchev §3.4,
pp. 18--19, §11.4 pp. 53--54).

Kleshchev Theorem 11.6 says for p-restricted `mu |- d` and `nu |- d-1`:
`[E_i D(mu):D(nu)]` is nonzero iff `nu=mu-A` for a normal i-node `A`; then it equals the
number of normal i-nodes weakly below `A`. Moreover `Hom(S(nu),E_iD(mu))` is nonzero iff
that `A` is normal. Theorem 11.7 is the induction dual: for `nu=mu+B`, it occurs in
`F_iD(mu)` iff `B` is conormal, with multiplicity the number of conormal i-nodes weakly
above `B`; the Specht Hom formulation is also stated. These are exact composition
multiplicity statements, not direct-sum decompositions.

Kleshchev Theorem 7.4 adds the exact head/socle result in graded cyclotomic-Hecke notation:
if `epsilon_i(mu)>0`, `E_iD(mu)` has simple socle `D(tilde e_i mu)<epsilon_i-1>` and
simple head `D(tilde e_i mu)<1-epsilon_i>`; similarly `F_i` with `phi_i`. Its leading
Grothendieck multiplicity is `[epsilon_i]`/`[phi_i]`; after forgetting grading, the good/cogood
simple occurs with multiplicity `epsilon_i`/`phi_i`. In particular the uncoloured restriction
has one socle constituent per good residue, not one constituent per normal node.

**Independent proof-bearing treatment.** Brundan Theorems 2.5--2.6 give the same
normal/good restriction conclusion for `ell`-restricted labels over a splitting field for the
type-A Hecke algebra: `Hom(S^mu,D^lambda down)` is one-dimensional exactly at normal
removals, while `Hom(D^mu,D^lambda down)` is one-dimensional exactly at good removals;
the socle is the direct sum over good removals. At parameter `q=1`, `ell=p`, this is the
symmetric-group assertion after the p-restricted convention is retained. Its Theorems
5.3--5.4 prove the criterion: lowering operators construct the relevant high-weight vector;
an injection/matching condition `B downarrow C` is equivalent to non-radical survival, then
to normality; reducibility of the generated `U(n-1)` module separates good from merely
normal. Example 2.8 calculates `lambda=(6,4,4,3,2)` for `ell=3,4`.

**Disposition.** Proposed modular-branching A page: define residue/signature with a
diagrammatic cancellation example; state the normal/conormal multiplicity theorem; state
the good/cogood socle/head theorem separately; include one restriction and one induction
example. It must be downstream of p-restricted/p-regular translation and cannot reuse
RG-10's characteristic-zero multiplicity-free branching. A full proof is later, through
Hecke/Schur-functor or KLR/categorification infrastructure; the source's proof route is
recorded, not claimed available from RG-8--11.

### 6. Crystal interpretation and its limit

**Exact statement.** For level one, parameter `xi=1`, characteristic `p`, Kleshchev
§11.2 (Theorem 11.2) says the isomorphism classes of irreducibles across all ranks, with
`tilde E_i=soc E_i`, `tilde F_i=soc F_i`, and the `epsilon_i,phi_i,wt` functions, form the
highest-weight crystal of `V(Lambda_0)` for affine type `A_{p-1}^{(1)}`. §3.4 identifies its
restricted-partition realization via good/cogood nodes. Thus deleting a good node is the
crystal `tilde e_i`, adding a cogood node is `tilde f_i`; all p-restricted labels are obtained
from empty by successive cogood additions. The theorem is cited to Grojnowski, and is
stated in the survey, not proved there.

**Important boundary.** Kleshchev §11.2 explicitly distinguishes inductively labeled
simples `dot D(mu)` from cellular radical-quotient simples `D(mu)`; their identification is
nontrivial (Ariki/graded arguments). Do not use “the crystal labels the Specht quotient” as
an elementary proof. Likewise canonical-basis decomposition numbers in §9.4 require
characteristic zero for the Hecke algebra, and positive-characteristic reduction requires the
adjustment-matrix layer of §10.

**Disposition.** Make the crystal a clearly labelled advanced interface page/remark with
dependencies on the Fock-space/KLR work owned by agent 6. The modular branching page may
use its *combinatorial* good/cogood operations without depending on a quantum-affine proof;
the crystal theorem should point forward, avoiding a cyclic dependency.

## Source agreement, omissions, and ownership

* James, Craven and Tomczak agree on the conventional p-regular radical quotient.
  Kleshchev/Brundan use p-restricted labels because their cell Specht is dual; the exact
  transpose/sign translation is explicit in Kleshchev Remark 5.5 and is mandatory.
* Tomczak proves core uniqueness/quotient combinatorics. O'Donovan proves the block theorem
  by a completely different Young-module/Brauer-quotient route. This is the desired
  independent treatment split: abacus gives a canonical combinatorial core, not the block
  classification by itself.
* Craven and James state Nakayama but do not prove it in the read sections. Kleshchev is a
  survey and credits the original results. Only O'Donovan is used here as a complete modern
  proof route for the block theorem; Brundan is a complete proof route for the Hecke branching
  criterion.
* The published general modular pages remain owners of p-modular systems, radicals,
  projective covers, Brauer characters/decomposition map, Cartan, and abstract block
  idempotents. The new track owns only their symmetric-group specialization/extensions.
* RG-8--11 remain planned ordinary suppliers; this report neither treats them as published
  nor duplicates their Specht construction, dominance definition, hook formula, or ordinary
  branching. RG-13/agent 3 owns the broader Hecke/cellular base; agent 6 owns Fock/KLR and
  categorification. The interface is acyclic: ordinary tableau/Specht base -> modular
  radicals/cores/branching -> Hecke/Fock crystal interpretation.

## Closing audit

* **Complete counted sources retrieved:** 6 (one textbook cross-check, two university note
  sets, and three full articles/preprints, including one modern arXiv proof); **relevant ranges actually
  read:** all 6. One complete university dissertation was retained as a non-counted defect
  cross-check rather than misclassified.
* **Retrieval failures/replacements:** none. Every listed source delivered full PDF text; no
  preview, abstract page, or snippet was counted. `pdfinfo` was unavailable, so `mutool info`,
  PDF EOF, end matter, and successful native text extraction were the validation method.
* **Proof/prerequisite gaps:** an elementary full proof of Nakayama requires Young modules,
  Brauer quotients/correspondence and projective lifts beyond the two published modular
  interfaces; modular branching's proof uses Schur functors/quantum `GL_n` (Brundan) or
  later KLR/categorification. State these now; schedule proofs only when those suppliers are
  scaffolded. General defining-characteristic decomposition numbers remain open.
* **Recommended independent proof checks:** James §§10--12 for simple labels and
  triangularity; Tomczak §4.1 for the abacus proof; O'Donovan §§2--5 for Nakayama;
  Brundan §§2 and 5 for normal/good nodes; Kleshchev §§7, 9--11 for the exact graded and
  crystal boundaries.
* **Files to integrate:** only this report,
  `research/symmetric-group-planning/agent-5-articles-modular.md`. Cache PDFs and `.txt`
  extractions are ignored under `scratchpad/source-cache/symmetric-groups/modular-articles/`.
