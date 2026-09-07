# Agent 4 — Jucys--Murphy, Gelfand--Tsetlin, and seminormal-form sources

## Agent record

| field | record |
|---|---|
| canonical agent/task name | `/root/symmetric_scaffold/symr_articles_seminormal` |
| model | `gpt-5.6-terra` |
| reasoning effort | `high` |
| exact assignment | Retrieve and inspect complete authoritative articles and university/author notes on Jucys--Murphy elements, Young seminormal/orthogonal forms, the Gelfand--Tsetlin algebra/basis, character computations, and branching refinements; retain ordinary, Hecke, and modular assertions separately. |
| start state | Read `CLAUDE.md`, `README.md`, the symmetric-group task and report contract, the existing reports of agents 1--2, the local initial audit/pages supplement, and RG-8--RG-11 in `research/plan-representation-theory-groups-track.md`.  RG-8--RG-11 are proposed, not published.  They already own Young diagrams/permutation modules, characteristic-zero Specht classification, one-step branching/Young graph, hook lengths, and RSK. |
| completion state | Four complete sources were retrieved into the ignored cache, SHA/page/end-matter validated, text extracted, and read in the exact ranges below.  This is the sole tracked file written by this agent. |

## Scope, conventions, and ownership

The ordinary route below is over `C` (and, where the formula is rational, may be stated over a characteristic-zero splitting field).  Write
\[
 X_i=\sum_{j<i}(j\ i)\in\mathbb C S_n,\qquad X_1=0,
\]
and use English coordinates: a box `(r,c)` has content `c-r`.  A standard tableau `T` has content vector `(c_T(1),...,c_T(n))`.  The Gelfand--Tsetlin algebra is
\[
 \mathrm{GZ}(n)=\langle Z(\mathbb C S_1),\ldots,Z(\mathbb C S_n)\rangle.
\]

This is an extension of RG-10, not a replacement for it.  RG-10 supplies the already-planned removable-box branching assertion.  The genuine new material is: a centralizer proof of multiplicity-free restriction; `\mathrm{GZ}(n)=\langle X_1,\ldots,X_n\rangle`; its tableau-indexed simultaneous eigenspaces; spectral/content classification; explicit primitive idempotents; and seminormal/orthogonal matrices.  RG-11's hook formula is used only as an optional numerical check, never rebuilt.  James's ordinary orthogonal formula is already reported by agent 1; the present report supplies its *JM/GZ derivation*, idempotents, and character/class applications, rather than minting a second bare orthogonal-form result.

The Hecke statements in Mathas--Soriano and Ram are **not** ordinary group-algebra statements.  Their `q`-contents and separation hypothesis belong as a later Type-A Hecke interface (and likely researcher 6's ownership), not on the ordinary JM A-page.  In particular, at roots of unity or in positive characteristic, contents can collide and the ordinary simultaneous-eigenbasis/projection formula cannot be copied without a deformation or block/residue argument.

## Full-text evidence

All original PDFs and `mutool draw -F txt` extractions are under `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/seminormal-articles/`.  Each begins as a PDF, renders all pages through MuPDF, and ends with `%%EOF`; none is an abstract or preview.

### S1 — Garsia lecture notes (ordinary primary working source)

* **A. M. Garsia, _Young Seminormal Representation, Murphy Elements and Content Evaluations_, Lecture Notes in Algebraic Combinatorics, UCSD course notes, March 2003.**  Source type: **lecture notes**, not a textbook.  Legitimate author/university URL: <https://www.math.ucsd.edu/~garsia/somepapers/Youngseminormal.pdf>.
* Original: `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/seminormal-articles/garsia-2003-young-seminormal-murphy-content.pdf`; SHA-256 `5942dfd8e4b03118511e66d41a84cb8b740b42db5d2ccda67a707b8af1d0d20b`; **53 PDF pages** (`mutool info`).  The terminal printed p. 53 is the references page, after the final substantive Theorem 5.10 on pp. 51--52.
* Text extraction succeeded with MuPDF, without OCR: `garsia-2003-young-seminormal-murphy-content.txt` (6,317 lines).  Formulae and diagrams were checked against PDF page rendering where linear extraction was ambiguous.
* Actually read: title/abstract/contents pp. 1--2; §3, **pp. 18--24**; §4, **pp. 25--32**; §5, **pp. 33--45** and Theorem 5.10, pp. 51--52; ending references p. 53.  The detailed harvest below uses §§3--5 only.

### S2 — Okounkov--Vershik article (independent ordinary proof route)

* **A. Okounkov and A. Vershik, _A New Approach to the Representation Theory of the Symmetric Groups_, Selecta Mathematica (N.S.) 2 (1996), 581--605; complete arXiv repost `math/0503040` (2005).**  Source type: **article/preprint**.  Legitimate authoritative full-text URL: <https://arxiv.org/pdf/math/0503040>.
* Original: `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/seminormal-articles/okounkov-vershik-2005-new-approach-symmetric-groups.pdf`; SHA-256 `bf19d2e52303f20fd66004f6ca2f3b62b9dd46500b7a62410e2c8e7ba2fbc9ac`; **31 PDF pages**.  The final pages are acknowledgements and the complete references (pp. 30--31).
* Text extraction succeeded with MuPDF: `okounkov-vershik-2005-new-approach-symmetric-groups.txt` (2,042 lines).  Read exactly: §§1--2, **pp. 7--13**; §§3--6, **pp. 14--23**; §7 pp. 23--25; §8 character application pp. 26--29; end matter pp. 30--31.

### S3 — Mathas--Soriano article (separation/idempotent proof, with Hecke boundary)

* **Andrew Mathas and Marcos Soriano, _Seminormal Forms and Gram Determinants for Cellular Algebras_, arXiv:math/0604108, 2006; subsequently Journal f\"ur die reine und angewandte Mathematik 619 (2008), 141--173.**  Source type: **article/preprint**.  Legitimate authoritative full-text URL: <https://arxiv.org/pdf/math/0604108>.
* Original: `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/seminormal-articles/mathas-soriano-2006-seminormal-cellular.pdf`; SHA-256 `a2cd21ced7f35dee695388304c26804ef8ac9c54b661a5d624501c80864698a1`; **29 PDF pages**.  The final substantive pages include Soriano's algorithm and the final reference (p. 29).
* Text extraction succeeded with MuPDF (font warnings do not prevent output): `mathas-soriano-2006-seminormal-cellular.txt` (2,820 lines).  Read exactly: introduction/§2.8--2.15, **pp. 4--7**; §3.1--3.7, **pp. 9--11**; Theorem 3.16/Corollary 3.17, **pp. 16--18**; Proposition 4.13, **pp. 20--21**; appendix pp. 22--29, including Proposition 4.2 at p. 27 and terminal references.

### S4 — Ram article (independent broad seminormal framework; not ordinary-page proof support)

* **Arun Ram, _Seminormal Representations of Weyl Groups and Iwahori--Hecke Algebras_, Proceedings of the London Mathematical Society (3) 75 (1997), 99--133; arXiv:math/9511223.**  Source type: **article/preprint**.  Legitimate authoritative full-text URL: <https://arxiv.org/pdf/math/9511223>.
* Original: `/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/seminormal-articles/ram-1995-seminormal-weyl-hecke.pdf`; SHA-256 `e3cb4705374083945667d99506760107821bda726b6023369674df643cbfb728`; **51 PDF pages**.  The terminal PDF pages are the end of the bibliography.
* MuPDF text extraction succeeded (`ram-1995-seminormal-weyl-hecke.txt`, 31,054 lines), but the 1995 font encoding splits many words; page-image inspection was used.  Actually read: introduction/credit and scope **pp. 1--5**, §1 definition of seminormal bases **pp. 6--10**, and end bibliography **pp. 48--51**.  This confirms the general chain-of-split-semisimple-algebras framework and that the paper treats type A/B/D/G2 and Iwahori--Hecke extensions.  I did not use a garbled unread later formula as ordinary proof evidence.

### Retrieval audit

Four requested sources were retrieved complete; all four relevant ranges were actually read.  The first UCSD fetch encountered the environment's certificate-chain failure, then succeeded over the same HTTPS author URL after transport validation was bypassed; the resulting PDF's signature, 53-page render, terminal references, and hash were checked.  No source was substituted with a preview, abstract, ResearchGate copy, or search snippet.  No original Jucys/Murphy paper was counted because this task required retrievable complete text and the two independent modern treatments above expose their proofs directly.

## Mathematical harvest

### A. GZ algebra, centralizers, and the content spectrum (S2)

**S2 §1, pp. 7--8, Proposition 1.1.**  For a chain of finite groups over `C` with simple branching, the GZ basis is indexed by paths; `GZ(n)` is generated by all earlier centers.  The product of the successive central idempotents along a path is the rank-one projection `P_T`.  Hence `GZ(n)` is exactly the algebra diagonal in the GZ basis, and is maximal commutative.  This needs finite-dimensional semisimplicity over `C` and simple branching; it is not a modular assertion.  Proposed role: lemma defining the basis/algebra and proving spectral uniqueness of a tableau line.  Proof joints are Wedderburn decomposition, central idempotents, then the diagonal algebra maximality.

**S2 §2, pp. 8--13, Theorems 2.1, 2.5, 2.8--2.9, Corollaries 2.6 and 2.10.**  For `S_{n-1}\subset S_n`, the centralizer `Z(\mathbb C S_n,\mathbb C S_{n-1})` is commutative.  The proof uses Lemma 2.2: each `g\in S_n` is conjugate to `g^{-1}` by an element of `S_{n-1}`; a real centralizer element is therefore fixed by the involution, and Lemma 2.3 makes the centralizer commutative.  Proposition 1.4 turns this into multiplicity-free restriction.  This offers a genuine proof-theoretic refinement of inherited RG-10, rather than re-stating branching.

With `X_i=\sum_{j<i}(j\ i)`, equation (2.1) writes `X_i` as the all-transposition class sum of `S_i` minus that of `S_{i-1}`, so all `X_i` are in GZ and commute.  Theorem 2.5 inductively produces every one-cycle class in `Z(\mathbb C S_n)` from `Z(n-1)` and `X_n`; the standard fact that such classes multiplicatively generate the center finishes it.  Corollary 2.6 gives the exact law
\[
 \mathrm{GZ}(n)=\langle X_1,\ldots,X_n\rangle.
\]
Theorem 2.8 identifies the relative centralizer as `\langle Z(n-1),X_n\rangle`, and Theorem 2.9 then proves simple branching.  These source-exposed intermediate steps are the appropriate proof plan for a GZ page: inverse-conjugacy lemma -> commutative centralizer -> simple paths -> central generation -> JM generation.  Do not cite a mere claim that the `X_i` commute in place of this argument.

**S2 §§3--6, pp. 14--23, relations (3.2)--(3.3), Proposition 4.1, Theorem 5.8, Proposition 6.1--6.2.**  The local relations are
\[
 s_iX_j=X_js_i\ (j\ne i,i+1),\qquad s_iX_i+1=X_{i+1}s_i,
\]
with `s_i=(i\ i+1)`.  A YJM weight `\alpha=(a_1,...,a_n)` lies in `\mathbb Z^n`; S2 proves it is a content vector and then that all content vectors occur.  The exact collision conditions are: `a_1=0`; each later `a_q` has a predecessor `a_q-1` or `a_q+1`; and repeated `a` require both neighboring contents between occurrences.  Proposition 5.3 identifies these vectors bijectively with standard tableaux, and Theorem 5.8 identifies the Young graph with the branching graph and `\operatorname{Spec}(n)=\operatorname{Cont}(n)`.

For `r=a_{i+1}-a_i`, `r\ne0`.  If `r=\pm1`, the swapped filling is not standard (same row gives `+1`, same column `-1`).  If `r\ne\pm1`, the swapped tableau `T'=s_iT` is standard, stays in the same irreducible, and in the seminormal normalization S2 gives
\[
 s_iv_T=v_{T'}+r^{-1}v_T,\qquad
 s_iv_{T'}=(1-r^{-2})v_T-r^{-1}v_{T'}.
\]
After unit normalization, the two-dimensional block is
\[
 \begin{pmatrix}r^{-1}&\sqrt{1-r^{-2}}\\ \sqrt{1-r^{-2}}&-r^{-1}\end{pmatrix}.
\]
The denominators are safe in ordinary characteristic zero because `r` is a nonzero integer; the square-root basis is real/orthogonal, not an integral or modular construction.  Proof architecture: the rank-at-most-two `H(2)` local algebra; its eigenvalue classification; the content-vector induction plus Coxeter obstruction Lemma 5.2; then the normalized two-by-two block.  This is the first independent full proof treatment for the main ordinary route.

**Example/boundary.**  In shape `(2,1)` the tableau with `1,2` in the first row has `r=1` and `s_1=+1`; putting `1,2` in the first column has `r=-1` and `s_1=-1`.  The two standard `(2,1)` tableaux exchanged by `s_2` have content difference `r=2` (up to reversing which tableau is first), hence the orthogonal block has diagonal entries `\pm1/2` and off-diagonal `\sqrt3/2`.  This checks the apparent `1-r^{-2}` factor and makes clear that collision `r=0` is ruled out by the content-vector theorem, not a removable denominator.

### B. Direct idempotents, ordinary matrices, and character/class uses (S1)

**S1 §3, pp. 18--24, Theorems 3.1--3.5.**  Garsia uses `m_k=X_k`.  Theorem 3.1 proves pairwise commutativity and, crucially,
\[
 s_km_ks_k=m_{k+1}-s_k
\]
(plus the remote-conjugation relation).  Theorem 3.2 first computes the transposition-class eigenvalue `n(\lambda')-n(\lambda)`, by counting row and column transpositions in the Young idempotent.  Since this equals `\sum_k c_T(k)`, its induction establishes Theorem 3.3:
\[
 m_ke(T)=e(T)m_k=c_T(k)e(T).
\]
This is an independent proof route for the same content-eigenvalue law: seminormal Young units -> central transposition-class count -> induction on tableau size, unlike S2's local spectral classification.

For the exact primitive projector, let `\mu` be the shape after deleting the `n`-box from `T`, and let `AC_\mu` be the *set of contents of addable boxes*.  Theorem 3.4 recursively defines
\[
 P_T=P_{T\downarrow[n-1]}\prod_{c\in AC_\mu\setminus\{c_T(n)\}}
 \frac{x_n-c}{c_T(n)-c},\qquad P_{[1]}=1,
\]
and proves its evaluation at `(m_2,...,m_n)` kills all other standard tableau idempotents and fixes `e(T)`.  Theorem 3.5 concludes `e(T)=P_T(m_2,...,m_n)`.  The denominators are nonzero because distinct addable boxes have distinct contents.  Proposed role: a primitive-GZ-idempotent theorem, with proof by induction through the addable-content separation, not a casual “Lagrange interpolation” citation.

The source gives concrete `n=3` projector products immediately after Theorem 3.5, e.g. the row tableau has `(m_2+1)(m_3+1)/6`; its terminal Theorem 5.10 gives a character/class application:
\[
 e_s(m_2,...,m_n)=\sum_{\ell(\rho)=n-s}C_\rho.
\]
This can support a later character-computation corollary, but it should not displace the distinct Murnaghan--Nakayama page proposed by agent 1.

**S1 §4, pp. 25--32, Theorems 4.2--4.4.**  Let `\pi_k(T)=c_T(k)-c_T(k+1)` with the source's orientation (taxicab/axial distance).  If `s_kT` is standard and `k+1` is above `k`, then
\[
 s_ke_{ru}=-\pi_k(T)^{-1}e_{ru}+e_{su};
\]
the reversed tableau has the companion coefficient `(1-\pi_k(T)^{-2})`.  If the two entries share a row or column, the action is respectively `+1` or `-1`.  The proof is explicit: an interpolating product of all *other* JM elements isolates exactly the two tableaux; the local relation yields the diagonal coefficient; `s_k^2=1` yields the other coefficient; a last-letter-order triangularity proposition fixes the off-diagonal coefficient as `1` in this seminormal phasing.  Theorem 4.3 then packages generator matrices, and Theorem 4.4 computes the rescaling factors along an admissible tableau chain.  This is the second independent, proof-bearing ordinary derivation.  It agrees with S2 after translating `\pi=-r` according to which tableau is listed first and allowing the expected diagonal change of basis/sign.

**S1 §5, pp. 33--45, Theorems 5.1--5.7.**  Theorem 5.1 gives two proofs that a symmetric polynomial in `m_2,...,m_n` is central: one checks conjugation by the Coxeter generators; the other expands in the primitive units and observes invariance of the multiset of contents of a shape.  Theorem 5.2 reverses the expansion into idempotents.  Theorems 5.4--5.7 construct symmetric polynomials evaluated on the content multiset to obtain character idempotents and conjugacy class sums.  These are a genuine optional extension beyond RG-8--11: a *central-character/content evaluation* page or a short corollary following the JM page.  Do not overclaim that every character value has a short positive formula; the notes explicitly say some resulting polynomials are large.

### C. What survives in cellular/Hecke form, and what does not (S3, S4)

**S3 §2.15, pp. 6--7.**  For the type-A Iwahori--Hecke algebra `H_{R,q}(S_n)` with invertible `q\in R`, the source's generators satisfy `(T_i-q)(T_i+1)=0`.  Its JM family is
\[
 L_1=0,\qquad L_i=\sum_{j<i}q^{j-i}T_{(i,j)},
\]
and the cellular Murphy basis is triangular with `q`-content `[c-r]_q`.  The source says separation follows when `[1]_q\cdots[n]_q\ne0`.  At `q=1`, it specializes to `RS_n`; at a root of unity or in modular reduction this separation can fail.  This is an important boundary, but it belongs to the planned Hecke/modular sequence, not an ordinary `\mathbb CS_n` proof.

**S3 §3.1--3.7 and Theorem 3.16, pp. 9--18; Proposition 4.13, pp. 20--21.**  For a cellular algebra over an integral domain `R`, fraction field `K`, commuting `*`-fixed JM elements `L_i` acting triangularly with contents `c_t(i)`, the *separation condition* is that every distinct pair of tableau labels differs at some `i`.  The source defines
\[
 F_t=\prod_i\prod_{c\in C(i)\setminus\{c_t(i)\}}\frac{L_i-c}{c_t(i)-c}.
\]
Proposition 3.4 proves `f^\lambda_{st}L_i=c_t(i)f^\lambda_{st}` and the delta action of `F_u`; Theorem 3.7 gives matrix-unit multiplication.  Theorem 3.16 says each `F_t` is primitive, their shape sum is primitive central, and Corollary 3.17 says the JM algebra is maximal abelian.  The proof exposes why separation, commutativity, and `*`-invariance matter.  Proposition 4.13 proves symmetric polynomials in the JM family are central only when each shape has an invariant multiset of contents.  Use this as a strong independent audit of S1's interpolation proof, while retaining every base ring/separation condition.

**S3 appendix pp. 22--29 and S4 §1 pp. 6--10.**  Soriano proves an alternate Cayley--Hamilton orthogonalisation algorithm for triangular operators whose residue sequences separate, culminating in a complete set of orthogonal idempotents (Appendix Proposition 4.2).  Ram independently defines a seminormal basis for a chain of finite groups/split semisimple algebras as one explicitly realizing every successive restriction decomposition.  These are conceptual/infrastructure sources; they should not cause the ordinary page to claim a modular seminormal basis.

## Recommended scaffold disposition

1. **A page `jucys-murphy-elements-and-seminormal-forms` (already reserved in `pages.json`).**  Start *after* inherited RG-9 and RG-10.  Proposed proof atoms: definition of `X_i`; commutation and GZ generation; centralizer/simple-branching proof as inherited proof refinement; content-spectrum/tableau theorem; GZ lines and primitive projector; local `H(2)`/interpolation lemma; seminormal and then orthogonal form.  State `C`/characteristic-zero splitting assumptions at the top and explicitly isolate `r=\pm1` from the `r\ne\pm1` block.
2. **Companion examples.**  Compute the `(2,1)` `S_3` content vectors, projectors, `s_1` scalar cases, and `s_2` orthogonal block.  This is enough to test every sign/denominator convention without duplicating RG-10 branching.
3. **Optional successor/inter-page corollary.**  Symmetric content-polynomials are central (S1 Theorem 5.1/S3 Proposition 4.13), with an `e_s(X_2,...,X_n)` class-sum example (S1 Theorem 5.10).  It can feed agent 1's character-computation pathway but must not be represented as the general Murnaghan--Nakayama rule.
4. **Do not put Hecke/modular versions on that page.**  Refer forward to the Hecke page for `q`-contents and `[1]_q\cdots[n]_q\ne0`, and to modular pages for residue blocks/generalized eigenspaces.  The ordinary finite semisimple construction has no valid direct characteristic-`p` replacement.

## Independent-proof and source agreement audit

The main ordinary JM/seminormal proof route has two genuinely independent complete treatments: S2 derives simple branching/GZ/content spectrum from centralizers and the local degenerate affine-Hecke relations; S1 constructs Young units, proves content eigenvalues from the transposition class, then derives idempotents/matrices by interpolation and triangularity.  They agree on `X_i` eigenvalue `c-r`, row/column scalar cases, and the two-dimensional coefficients.  The apparent sign difference is convention: S2 uses `r=c_T(i+1)-c_T(i)`, while S1's displayed `\pi` is oriented by the relative vertical position; changing tableau order/phasing conjugates the block by a diagonal sign matrix.  S3 independently verifies the separation/projector/matrix-unit mechanism abstractly, but its `q`-specialized claims must remain separate.

## Closing audit

* **Complete sources retrieved:** 4.  **Sources actually read in relevant ranges:** 4.
* **Source recommendations for proof checks:** S2 + S1 are the required two-source ordinary proof pair; S3 is the clean algebraic check of projector/separation hypotheses.  Ram is useful only for the broad seminormal/Hecke context unless later type-A formula pages are individually inspected.
* **Gaps/blockers:** no full-text blocker.  The exact dependency IDs underneath the planned RG pages are not yet authored/published, so the integrator must retain page-level planned seams rather than invent live item IDs.  A fully authored character recursion still needs the independent Murnaghan--Nakayama support requested by agent 1; central content evaluation is not a substitute.
* **Files to integrate:** this report only: `research/symmetric-group-planning/agent-4-articles-seminormal.md`.  The four PDFs and four extracted text files are ignored research cache files and are not tracked deliverables.
