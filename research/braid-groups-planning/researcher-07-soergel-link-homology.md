# Researcher 07 — Soergel, matrix-factorization, and HHH audit

**Commission:** braid-groups planning, researcher 07.  
**Audit date:** 2026-09-07.  
**Scope:** BG-16, BG-18, BG-19 and their HA-22/HA-23 interfaces only. This is
an evidence and dependency audit, not a scaffold or library edit. I made no
change to either plan, to `pages.json`, to runtime state, or to content.

## Bottom line

The four cached primary texts support the intended mathematical endpoint, but
the present plan is not ready to integrate without repair. The two blocking
problems are mechanical as well as mathematical:

1. `research/braid-groups-planning/pages.json` is an obsolete 28-page
   inventory. It has neither BG-16 nor BG-18 nor BG-19 (indeed it ends with
   `soergel-bimodules-and-rouquier-complexes` and
   `braid-categorifications-and-link-homology`), while the prose plan has the
   new 19 A/B pairs. This violates the commission's exact-page contract.
2. The braid source manifest contains EW and KR, but omits both Khovanov
   `math/0510265v3` and Beliakova--Putyra--Wehrli `1605.03523`, although BG-19
   and HA-23 use them load-bearingly. The cached full texts are real and
   verified below; they must be added to the retained manifest and linked to
   this report before a source gate can pass.

There are also three non-negotiable proof seams: define the rank-two longest
Soergel summand before using it; prove two-sided finite projectivity before
Rouquier derived tensor; and insert the missing unreduced/trivial-polynomial
comparison before claiming the KR--HHH comparison. The final B-page
“counterexample” is not presently a counterexample: it gives no complex with
a surviving higher differential.

## Source retrieval, identity, and full-body verification

No source was downloaded in this audit. The four pre-existing PDFs were
checked directly with `file`, `sha256sum`, and `mutool info`; `mutool draw -F
txt` successfully extracted the complete physical page range of every PDF.
Thus “full body verified” means an actual PDF signature, the stated physical
page count, and a nonempty extraction through the final page/references. It
does **not** mean that every page was read.

| key | bibliographic identity and authoritative URL | cache / SHA-256 | PDF/full-body check | sections actually read in this audit |
|---|---|---|---|---|
| EW2013 | Ben Elias and Geordie Williamson, *Soergel Calculus*, arXiv:1309.0865v1. [PDF](https://arxiv.org/pdf/1309.0865) | `scratchpad/source-cache/braid-groups/elias-williamson-soergel-calculus.pdf` `e610a4fa938a7cc9fbe349fb60cea9118a492064b62bfd59ad18951fff491ade` | PDF-1.4; 83 pp; full extraction 198,983 bytes. PDF metadata title identifies arXiv:1309.0865v1. | Introduction §§1.1--1.6 (PDF/printed pp.1--13); §§2.1--2.4 (pp.13--18); §§3.1--3.5 (pp.18--29), especially Assumption 3.7, Def. 3.8, Claim 3.9, Def./discussion 3.4, Thms. 3.14--3.15. I also checked the rank-two locator in §5.2 (pp.41--45), not all of §§4--7. |
| KR2005 | Mikhail Khovanov and Lev Rozansky, *Matrix factorizations and link homology II*, arXiv:math/0505056v2. [PDF](https://arxiv.org/pdf/math/0505056) | `scratchpad/source-cache/braid-groups/khovanov-rozansky-link-homology-ii.pdf` `1b6580406c3d35b59f8fb18e5fba40460fe574cab85d94edf705c6c4bb2d0cbe` | PDF-1.4; 37 pp; full extraction 59,618 bytes. | §1 pp.1--13; §2 pp.14--16; §3 pp.16--18; §4 pp.18--19; §5 pp.19--23; §6 pp.23--35; §7 pp.35--36. In particular, I read the statement and proof chain for Props. 1--8 and Thms. 1--2, not merely headings. |
| Kh2006 | Mikhail Khovanov, *Triply-graded link homology and Hochschild homology of Soergel bimodules*, arXiv:math/0510265v3. [abstract](https://arxiv.org/abs/math/0510265), [PDF](https://arxiv.org/pdf/math/0510265v3) | `scratchpad/source-cache/homological-algebra-enrichment/khovanov-0510265.pdf` `548a0eece08bd967c0f4f44754210f765a970010d14e5ad97917668c7d9476a5` | PDF-1.4; 19 pp; full extraction 36,068 bytes. | “Hochschild homology” pp.1--2; “Soergel bimodules” pp.3--4; “Soergel bimodules and a braid group action” pp.4--5; “Link homology” and proof of Thm. 1 pp.6--10; Prop. 4 pp.11--12; the two-strand calculation pp.14--16. |
| BPW2016 | Anna Beliakova, Krzysztof K. Putyra, Stephan M. Wehrli, *Quantum Link Homology via Trace Functor I*, arXiv:1605.03523. [abstract](https://arxiv.org/abs/1605.03523), [PDF](https://arxiv.org/pdf/1605.03523) | `scratchpad/source-cache/homological-algebra-enrichment/beliakova-putyra-wehrli-160503523.pdf` `3781e14d2bde557cf95aae6aae89238d816a81f5264407b19b7e81c1e5483ece` | PDF-1.4; 85 pp; full extraction 217,831 bytes. Title/author metadata agrees with the article. | §§3.8.3--3.8.6, PDF/printed pp.36--39, including equations (3.34)--(3.44), not the paper's quantum or surface-application proof corpus. |

`research/braid-groups-planning/source-manifest.json` currently records the
first two sources only (keys `EW2013`, `KR2005`). Its word-count claims are
consistent in scale with the complete extraction, but its KR `read` field says
“headings” and “architecture” while the intended BG-18 rows need the actual
calculations in §§1--7. Replace that entry's read/not-read fields with the
honest ranges above if those calculations are adopted as proof routes. Add
Kh2006 and BPW2016 with the cache, hashes, 19/85-page counts, full-body checks,
and precise read ranges in this table.

## Heading-disposition ledger

“Included” means the content belongs to a named proposed row after the repairs
below; “supplier” means it belongs to HA/RG rather than being re-minted; and
“not harvested” means I did not read it beyond the listed locator.

| source heading actually read | disposition | exact planning destination / restriction |
|---|---|---|
| EW §§1.1, 2.1--2.4 (Hecke algebra, KL basis/generators, trace) | supplier | Generic Hecke presentation/basis remains RG-13. BG-16 may state the explicit normalization map only; it must not treat EW's (H_s) as RG-13's (T_i) without a displayed conversion. |
| EW §§1.2--1.5 (Hecke category, Soergel bimodules, diagrams, consequences) | included with locator repair | BG-16 definitions and split (K_0) theorem. The general diagrammatic presentation is not a licence to claim an unshown six-valent matrix calculation. |
| EW §3.1 | included | `def-type-a-reflection-realization-and-polynomial-ring`; specialize explicitly to the standard type-A realization over **Q**. |
| EW §3.2, Assumption 3.7 and Def. 3.8 | included | field/realization hypotheses and Demazure-surjectivity route. Do not replace “Soergel realization” by bare “characteristic zero” in the general theorem; for the chosen Q type-A realization give the direct specialization argument. |
| EW §3.3, Claim 3.9 | included | rank-two freeness over (R^{s_i}), hence the missing two-sided finite-free lemma for (B_i). |
| EW §3.4 | included | (B_s=R\otimes_{R^s}R(1)), Bott--Samelson objects, additive graded Karoubi closure. It explicitly says SBim is additive, not abelian. |
| EW §3.5, Thms. 3.14--3.15 and (3.6) | included | rank-one split, indecomposable classification assumptions, and the split-Grothendieck Hecke isomorphism. |
| EW §5.2 (checked only for locator) | repair needed | It discusses Jones--Wenzl/rank-two machinery and says calculations are lengthy; it is not a citation to “six-valent maps and matrix composites are verified in §§3.3--3.5.” Use its actual §5.2 locator plus a fully read type-A calculation, or narrow the local proof claim. |
| KR §1, pp.1--7 | included | MF convention, arcs/wide edges, marked graphs, χ maps, crossing complexes, and (CH\) / trigraded homology. |
| KR §§1--2, pp.10--16 | included | row operations, variable exclusion (Prop. 3), and the actual χ-map rewrite. |
| KR §3, pp.16--18 | included | marking invariance (Prop. 1) with its actual proof. |
| KR §§4--6, pp.18--35 | included | braid-oriented Reidemeister I, IIa, III proof chain: Props. 4--5, 6, and 8. IIb is deliberately excluded. |
| KR §7, pp.35--36 and Thm. 2 pp.8--10 | included | Euler characteristic, (F), normalization, and HOMFLYPT statement. |
| Kh2006 pp.1--2 | HA supplier | ordinary Hochschild/Koszul computation belongs to HA-22; BG-19 consumes the named HA items. |
| Kh2006 pp.3--5 | included | reduced (R), unreduced (R'), (B_i,B'_i), maps, and Rouquier generators. |
| Kh2006 pp.6--10 | included | termwise HH definition; Theorem 1; regular-sequence and local-to-global KR comparison; exact trigrading dictionary. |
| Kh2006 pp.11--12 | included | Type-A rank-one/distant/rank-two decompositions (Prop. 4), an essential corrective source for BG-16. |
| Kh2006 pp.14--16 | included only for examples | two-strand HHH example, not a general comparison proof. |
| BPW §3.8.3 | excluded | twisted coinvariants are outside the ordinary HH supplier. |
| BPW §3.8.4, (3.36)--(3.40) | included | ordinary Hochschild chains, the `Rep` projectivity condition, double-bar comparison, cyclicity up to chain homotopy. |
| BPW §3.8.5 | excluded | quantum/twisted deformation is not licensed for BG-19. |
| BPW §3.8.6, (3.44) | included | termwise HH is the **second spectral-sequence page**, distinct from total Hochschild homology. |

## Exact mathematical audit and repair ledger

| priority | target rows / problem | evidence and defect | exact repair required |
|---|---|---|---|
| BLOCKER | `pages.json` versus BG-16--19 | JSON has 28 obsolete pages and no IDs for the prose-plan BG-10--19 pages. Its legacy aggregate pages cannot satisfy the owner-required inventory/companion/prerequisite check. | Regenerate `pages.json` from the 19 A/B pairs in `plan-braid-groups-track.md`, preserving A/B companions and page prerequisites. Do this only by the lead with authority; no item arrays should be populated. |
| BLOCKER | BG-16, `def-type-a-reflection-realization-and-polynomial-ring` | It says “characteristic-zero field (k)” but BG-19/Khovanov, all comparison maps, and KR are over (ℚ). EW's general Thm. 3.15 assumes a “Soergel realization”; char. 0 alone is not the stated general hypothesis. | Make the load-bearing chain Q-linear: set (k=\mathbb Q) in BG-16/17/19, (R=\mathbb Q[x_1,\dots,x_n]), and state the standard permutation realization's required properties. If a char.-zero generalization is wanted, add a separate base-change theorem with its own source and do not feed it into HHH. |
| BLOCKER | BG-16, rank-two theorem | `B_{i,i+1,i}` occurs in `thm-rank-two-type-a-soergel-bimodule-decompositions` but has no definition. EW §3.5 gives (3.6) and the abstract categorification theorem; it does **not** provide the claimed explicit six-valent/idempotent matrix verification at the cited §§3.3--3.5. Kh2006 Prop. 4, pp.11--12 gives the precise type-A statement (in its shift convention): (B_iB_{i+1}B_i\cong B_{i,i+1}\oplus B_i) and its reverse, with (B_{i,i+1}=R\otimes_{R^{S_3}}R\{-3\}) after Khovanov's shift normalization. | Insert before the theorem a definition of the rank-two longest summand in the **EW convention** (translate the above to (R\otimes_{R^{S_3}}R(3)), after independently checking the chosen shift notation). Change the theorem to depend on it. Cite Kh2006 Prop. 4 pp.11--12 and EW §3.5 pp.27--29; use actual EW §5.2 / a fully read type-A diagrammatic calculation only if local six-valent maps and idempotent composites are genuinely authored. Otherwise state the decomposition as the sourced result and do not promise an unprovided matrix proof. |
| HIGH | BG-16, rank-one and (K_0) normalization | EW uses (B_s=R\otimes_{R^s}R(1)), (M(1)_d=M_{d+1}), and ([B_s]^2=(v+v^{-1})[B_s]). Kh2006 initially uses unshifted (B_i), then replaces it by a shifted object to match (C'_i). RG-13 uses (T_i), not EW's (H_i)/KL generator. | Keep `lem-the-rank-one...` as (B_iB_i\cong B_i(1)\oplus B_i(-1)), but add a one-line formula giving (H_i=vT_i+v) (equivalently (T_i=v^{-1}H_i-1), subject to the exact RG-13 quadratic normalization). The theorem must map the declared KL generator, then translate; it must not say simply “map the Hecke generator to ([B_i]).” |
| HIGH | BG-17 derived tensor premise | `def-positive-and-negative-rouquier-generator-complexes` says to “verify” two-sided finite projectivity but its dependencies do not contain such a result. A definition cannot discharge the premise of HA-20.4. EW Claim 3.9 says (R) is free of rank two over (R^s); §3.4 then makes (B_s) finite free on each outer (R)-side. | Add `lem-type-a-soergel-generators-are-finite-free-on-each-side`, depending on the type-A realization and simple (B_i), before BG-17. Prove (R\cong R^{s_i}\oplus R^{s_i}(-2)), hence (R\otimes_{R^{s_i}}R(1)) is finite free as a left and as a right (R)-module. Then point BG-17's derived-functor definition to it and HA-20.4. |
| HIGH | BG-18 page prerequisites | It declares a page-level prerequisite on `rouquier-complexes-and-categorical-braid-relations`, but no BG-18 row uses any Rouquier result. KR's MF theory has an independent braid-group action and should not be forced after BG-17. | Remove that page prerequisite; retain `oriented-links-braid-closures-and-markov-equivalence` and the complex/graded-MF suppliers. If common graded-bimodule/totalization content is needed, cite HA-18/HA-20 directly rather than the unrelated Rouquier page. |
| BLOCKER | BG-18, negative crossing maps: explicit source-conflict resolution | KR PDF p.6 has an internally inconsistent prose display: following “the cone of χ_0 or χ_1, depending on whether positive or negative,” its negative display prints χ_0. Figure 6, the matrices defining χ_1 in (6), and the later IIa proof resolve the intended convention: the negative crossing is (0\to C(\Gamma_1)\{0,-2\}\xrightarrow{\chi_1}C(\Gamma_0)\{0,-2\}\to0), with (C(\Gamma_1)\{0,-2\}) in cohomological degree 0 and (C(\Gamma_0)\{0,-2\}) in degree 1. The positive crossing is (0\to C(\Gamma_0)\{0,2\}\xrightarrow{\chi_0}C(\Gamma_1)\to0), with (C(\Gamma_1)) in degree 0. The current BG-18 negative row copies the p.6 typo: it uses (C(\Gamma_0)\xrightarrow{\chi_0}C(\Gamma_1)). | Correct the negative crossing row to the Figure-6/matrices-(6)/IIa-proof convention above. Record the p.6 display as a source typo in retained evidence; do not silently normalize it. Audit every downstream negative-stabilization, IIa, Euler-sign, and trigrading calculation against this corrected complex before authoring. The crossing definition must depend on `def-chi-zero-and-chi-one-wide-edge-morphisms`, and the IIa proof must use χ_1 on the negative factor. |
| HIGH | BG-18, exact Markov/Reidemeister shifts | KR Prop. 4 is (C(D_1)\cong C(D_2)\{1,1\}[1]) for the IA picture; Prop. 5 has no shift for IB; Prop. 6 (IIa) and Prop. 8 (III) give equivalences. The current theorem says “record exact shifts” but carries none. KR Thm. 1 is only “up to an overall shift.” | Split a `lem-braid-oriented-kink-shifts` item, explicitly keyed to the source's IA/IB diagrams and its crossing convention, before the Markov theorem. Then make the Markov-invariance theorem assemble braid relations/cancellation, conjugation, both stabilizations, and the named shift lemma. The final result must be “up to overall trigrading shift” unless an explicit fractional normalization is separately constructed. |
| MEDIUM | BG-18, link-invariance dependency chain | `lem-khovanov-rozansky-complex-is-invariant-under-braid-conjugation` uses only a verbal annular-cut rotation. KR p.8 lists conjugation as a Markov move, while the paper derives the invariant through the full braid diagram/Markov chain. | Keep conjugation separate as required, but add a source-grounded chain-level cyclic-permutation/closure-cut identification. The item should depend on marking invariance and the marked-graph tensor associator, not merely `def-markov...`. |
| HIGH | BG-19, unreduced/reduced comparison | `def-reduced-type-a-polynomial-ring-for-hhh` mentions (R'=R\otimes\mathbb Q[x_1]), but defines neither (B'_i) nor the tensor-product relation (B'_i\cong B_i\otimes\mathbb Q[x_1]). Yet the next two comparison lemmas use (B'(D)), “remove the trivial polynomial direction,” and appeal to the KR (a=0) Koszul complex without an item that performs this specialization. Kh2006 pp.3--4 and pp.7--9 make all of these steps explicit. | Insert (i) `def-unreduced-type-a-soergel-bimodule-and-trivial-polynomial-factor` and (ii) `lem-a-zero-specialization-of-closed-kr-factorizations-is-the-wide-edge-koszul-complex`. Make the closed-MOY comparison depend on both, then state the (B'(D)\leftrightarrow B(D)\otimes\mathbb Q[x_1]) map and the reduction precisely. |
| HIGH | BG-19, Koszul regularity | The current `lem-wide-edge-koszul-sequence-is-regular` says every new relation is “(x-f) or monic symmetric pair,” but Kh2006 Lemma 1 proves only the *first (rm)* layer relations are regular. The final (m) closure differences are not folded into that lemma; they form the diagonal Koszul complex computing HH. | Rename/scope the lemma to “first (rm) layer relations are regular,” use Kh2006 Lemma 1 pp.7--8 exactly, and make a separate following lemma identify the remaining (x_{0,j}-x_{r,j}) Koszul complex with the HA-22 diagonal HH computation. Do not call the combined sequence regular unless a proof and statement of its quotient are supplied. |
| BLOCKER | BG-19, comparison differentials and exact grading shifts | Kh2006 p.9 says: undo the built-in KR shift ((-1,1,0)) by shifting (H) by ((1,-1,0)); the third gradings match; HHH Hochschild degree is **minus** KR Koszul degree; KR's second degree equals HHH polynomial degree minus HHH Hochschild degree. The current lemma only says “translate ... by exact sign/shift dictionary,” and the theorem/corollaries never state it. | Replace the placeholder prose by that full dictionary (including which coordinate is which and the global ((1,-1,0)) correction), and make `thm-hhh...` state the comparison in those coordinates. Rename `cor-hhh-is-an-oriented-link-invariant-up-to-normalized-grading-shift` to “up to overall trigrading shift,” unless the fractional normalization mentioned by Kh2006 is separately built. |
| HIGH | BG-19, termwise HH versus hyperhomology | Kh2006 pp.6--7 defines exactly the termwise construction (H^j(HH_h(R,F^\bullet))). BPW §3.8.6, eq. (3.44), calls this the **second page** of the spectral sequence of the total Hochschild bicomplex. HA-23.3--23.5 correctly retains this distinction. | Keep the separate termwise item and its HA-22.8/HA-23.3 dependencies. Do not say HHH is Hochschild hyperhomology or a three-graded form of its abutment. The BG-19 comparison theorem must use termwise HH only. |
| BLOCKER | BG-19 B counterexample | `cex-termwise...` asserts higher differentials “need not” vanish but supplies no actual (A,F^\bullet), differential, or nonzero (d_r). BPW only identifies the E2 page; it does not provide the proposed counterexample. A conditional possibility is not a counterexample. | Either replace it with a remark stating the non-identification and cite BPW (3.44), **or** supply an independently sourced explicit bounded bimodule complex with a computed nonzero higher differential and make that calculation the counterexample. It cannot remain a B `counterexample` as written. |
| MEDIUM | HA-22/HA-23 interface | BG-19 uses HA-22's diagonal resolution and HA-23's E2 distinction correctly in broad direction. HA-23.6--23.8 should not be treated as a generic theorem for arbitrary bimodules: BPW §3.8.4 works in `Rep`, whose 1-morphisms are finitely generated projective **as right modules**, and establishes the double-bar homotopy equivalence (3.37)--(3.39). | Preserve HA-23's explicit sidedness/finite-projectivity hypotheses; change its BPW locator to §§3.8.4--3.8.6, eqs. (3.36)--(3.44), pp.37--39. BG-19 should not consume derived cyclicity for the KR--HHH comparison. Its only current use is the repaired non-identification remark/example. |
| MEDIUM | HA-22 general bar-projectivity phrasing | HA-22.4 says general field-algebra bar terms are free “after supplying k-bases,” while the commission's no-global-choice convention requires named data rather than an invisible class-sized choice. The consuming polynomial (R) has a canonical monomial basis, so this does not block the braid application. | For HA's general theorem, make a basis/free-module hypothesis explicit or formulate it with a supplied projective bar resolution. For BG-19 cite the polynomial diagonal Koszul resolution, whose finite free terms are explicit, not an unqualified general bar-freeness claim. |

## Required locator corrections

1. BG-16's “EW §§1.2, 3.2” for the simple (B_i) should be **EW §3.4,
   PDF/printed pp.24--25**; the rank-one split is **EW (3.6), p.28**.
2. BG-16's rank-two “EW diagrammatic rank-two relations and §§3.3--3.5”
   is inadequate for the stated six-valent/idempotent proof. Cite **Kh2006
   Prop. 4, pp.11--12** for the exact type-A decompositions and **EW §5.2,
   pp.41--45** only for the diagrammatic rank-two/Jones--Wenzl context.
3. BG-16's Grothendieck theorem is accurately **EW Thm. 3.15, pp.27--29**,
   with realization hypotheses from §§3.1--3.2. It is not “EW §§1.3--1.6.”
4. BG-18 definitions are **KR pp.1--7**; row operations/variable exclusion
   are **KR §1, pp.10--13, Prop. 3**; χ-map rewrite is **§2, pp.14--16**;
   marking is **§3, pp.16--18**; I/IIa/III are **§§4--6, pp.18--35**;
   Euler characteristic is **§7, pp.35--36**. “Theorem 1 setup pp.7--8”
   does not by itself support the conjugation chain map.
5. BG-19's Kh2006 comparison locator must be **Theorem 1 and proof,
   pp.6--10**, including Lemma 1 pp.7--8 and the paragraph immediately after
   the proof on p.9--10; the rank-two example is **Prop. 4 pp.11--12**.
6. HA-23/BGW's BPW locator is **§§3.8.4--3.8.6, pp.37--39,
   equations (3.36)--(3.44)**. Eq. (3.44), not the whole section in general,
   is the direct E2-page evidence.

## Bounded HA-20--HA-23 interface verdict

**Verdict: conditionally ready for BG-19 after two exact HA wording repairs;
not a licence to identify HHH with total hyperhomology.** The boundedness,
sign, and spectral-page direction are correct. The two repairs are necessary
to make the bar/Tor handedness unambiguous and to state BPW's projectivity
condition faithfully.

| interface point | check | verdict / repair |
|---|---|---|
| HA-20.1 totalized tensor | For cochain (F^i) and (G^j), (d_{F\otimes G}=d_F\otimes1+(-1)^i1\otimes d_G) has degree (+1); the two mixed terms cancel. This is exactly the convention BG-17 needs for tensors of Rouquier complexes. | **Ready.** Retain the degree-zero internal differentials and distinguish the internal shift from cochain shift. |
| HA-20.4 tensor side conditions | A (B\)-(A) bimodule complex tensors on the right over (A). Right-(A) flatness controls quasi-isomorphisms/exactness; finite projective left-(B) terms control finite-projective output. The plan states both. | **Ready, conditional on the new BG-16 finite-free-on-each-side lemma.** It is correct not to infer (A^e)-projectivity from these sidewise properties. |
| HA-22.1, 22.4, 22.6, 22.7 bar handedness | The right (A^e=A\otimes A^{op})-action is (m\cdot(a\otimes b^{op})=bma); the left action is ((a\otimes b^{op})m=amb). With (\operatorname{Bar}_n(A)=A^{\otimes(n+2)}) viewed as a **right** (A^e)-resolution, its outer action is ((a_0\otimes\cdots\otimes a_{n+1})\cdot(a\otimes b^{op})=ba_0\otimes\cdots\otimes a_{n+1}a). Then (\operatorname{Bar}(A)\otimes_{A^e}M\to M\otimes A^{\otimes n}), ((a_0\otimes\cdots\otimes a_{n+1})\otimes m\mapsto(a_{n+1}ma_0)\otimes a_1\otimes\cdots\otimes a_n), is balanced and transports the bar differential to the listed Hochschild boundary. | **Repair HA-22.4:** it currently writes terms as (A^e\otimes_kA^{\otimes n}), which visually suggests a left resolution, while HA-22.6/22.7 use a right one. Say explicitly “(A^{\otimes n}\otimes_kA^e) as a free right (A^e)-module” (or state the corresponding left convention everywhere). Retain the displayed right action and Tor order (\operatorname{Tor}^{A^e}_n(A,M)). |
| HA-22 bar projectivity | Over a field, bar terms are free over (A^e) once the intervening vector space is supplied as free. Under the no-global-choice policy, this cannot be silently a class-indexed choice for arbitrary (A). For the actual polynomial (R), the monomial basis and the finite diagonal Koszul resolution are explicit. | **Repair general HA wording** as in the ledger: use supplied bases/a supplied projective bar resolution. **BG-19 is safe** when it consumes the explicit polynomial diagonal Koszul resolution, not general bar freeness. |
| HA-23.1 total Hochschild complex/sign | With (F^i) cochain and Hochschild chains (C_j(A,F^i)), total degree (i-j) makes both (d_F) and (b:C_j\to C_{j-1}) degree (+1). (d_{tot}=d_F+(-1)^ib) squares to zero because the two differentials commute before the sign. The (i,j) split is only a filtration, so only total plus internal degree is automatic. | **Ready.** This is the correct distinction for the BG-19 warning. |
| HA-23.3--23.5 spectral sequence | Filtering so (b) is first gives (E_1^{i,-j}=HH_j(A,F^i)) and (E_2^{i,-j}=H^i(HH_j(A,F^\bullet))), abutting in total degree (i-j). Bounded (i) makes each total-degree filtration finite even though the bar direction is unbounded. BPW §3.8.6, (3.44), calls the termwise construction the second page. | **Ready.** Higher differentials/extensions remain possible; BPW proves the page identification, not their vanishing. |
| HA-23.6--23.8 cyclicity | BPW §3.8.4 works in `Rep`: for (N:A\to B) it requires finite projectivity as a **right (B)-module**, and for (N':B\to A) as a **right (A)-module**. Its double-bar resolutions (3.37)--(3.39) give the homotopy equivalence and its double rotation is chain homotopic to identity. Plan language “finite projective on each indicated left/right side” is stronger than necessary but ambiguous. | **Repair wording:** spell out the two right-side conditions (and add left-side conditions only where HA-20 output-projectivity needs them). The claimed derived version is acceptable only with the separately stated K-flat/projective hypotheses and a proof that ordinary tensor computes each derived tensor. BG-19 does not need this cyclicity theorem to prove the KR--HHH comparison. |
| Derived hyperhomology versus HHH | BPW distinguishes total (CH_\bullet(A,C^\bullet)), a triangulated shadow on bounded complexes in `Rep`, from componentwise HH, its Lefschetz/HHH shadow at E2. Kh2006 uses the latter termwise construction. | **Ready only with the existing separation preserved.** No BG theorem may deduce the Kh2006 comparison or link invariance from HA-23 hyperhomology/cyclicity alone. The current B `counterexample` still needs the repair stated above. |

## Dependency outcome

After the listed repairs, the acyclic load-bearing direction should be:

`HA-18 → HA-20 → HA-22 → HA-23` supplies grading/tensor, bounded
bimodule complexes, diagonal HH, and the termwise-vs-total distinction;
`RG-13 → BG-16 → BG-17` supplies the Hecke convention then Soergel/Rouquier;
and independently `BG-11 → BG-18` supplies Markov closure theory. BG-19
then consumes **BG-16/17 (Q-linear reduced Rouquier complexes), BG-18
(reduced KR comparison target), HA-22, and HA-23**. It must not make BG-18
depend on BG-17 merely for narrative order, and no HA page should acquire a
dependency back on a braid page.

The final HHH theorem is soundly shaped only after it explicitly says:

> Khovanov's termwise-Hochschild (HHH), over the reduced type-A
> polynomial ring over Q, is isomorphic to the **reduced** KR theory with
> the stated ​(1,-1,0) correction and the two stated degree translations;
> hence it is an oriented-link invariant up to the source's overall
> trigrading shift.

That is different from total Hochschild hyperhomology and from KR's
unreduced theory with its trivial polynomial direction.

## Follow-up closure audit — EW classification, Hom formula, and exact normalization

### Additional source ranges actually read

I re-opened EW2013 and read the following additional sections, rather than
inferring their proofs from Theorems 3.14--3.15 alone:

- §5.2--§5.3, PDF/printed pp.42--46: Jones--Wenzl morphisms, the rank-two
  relation (5.16), the map to bimodules, and its reliance on earlier dihedral
  and type-A checks;
- §6.1--§6.3, pp.57--64: construction of light leaves, localization
  upper-triangularity (Prop. 6.6), linear independence (Cor. 6.8), and double
  leaves;
- §6.4--§6.7, pp.64--70: Theorem 6.11 / Prop. 6.12 / Cor. 6.13, the
  diagrammatic character (6.3)--(6.4), Krull--Schmidt Lemma 6.24,
  classification Theorem 6.25, K0 Cor. 6.26--6.27, and equivalence Theorem
  6.28;
- §7.1--§7.4, pp.70--82: the negative-positive decomposition and grand
  induction that prove the spanning half of Theorem 6.11.

The EW source-manifest entry must accordingly replace “not read: full
light-leaves induction and all diagrammatic relations in Sections 4--7” by the
more precise statement above. I did **not** read every calculation in §§4,
5.4--5.6, or every case in §7, but I did read the theorem statements and their
proof joints through the grand-induction conclusion.

### What EW actually proves, and the indispensable joints

The following is the source-supported chain for the standard type-A realization
over \(\mathbb Q\). It is not a short consequence of rank-one/rank-two direct
sum formulas.

1. EW §3.4, pp.24--27 defines Bott--Samelson bimodules, SBim as the graded
   additive Karoubi closure, standard bimodules, and standard filtrations. It
   states the classical Soergel character/Hom results under a **Soergel
   realization**; this is not a local proof of them.
2. EW §5 supplies the diagrammatic category \(D\), rank-two
   Jones--Wenzl/idempotent machinery, and a monoidal functor
   \(D\to\mathrm{BSBim}\). The cited text itself says the rank-two calculations
   are too long to duplicate (§5.2) and cites the dihedral/type-A work for the
   detailed checks.
3. EW §§6.1--6.3 proves light-leaves independence after localization. The
   final spanning assertion is not available there: Theorem 6.11 is initially
   assumed for the rest of §6.
4. EW §7 proves that missing spanning assertion by the negative-positive/
   maxwidth grand induction. Therefore Theorem 6.11 gives a free graded
   \(R\)-basis of \(\operatorname{Hom}_D(B_{\underline x},B_{\underline y})\),
   and Cor. 6.13 gives the Hom freeness used in later steps.
5. Under **complete local** \(k\), EW §6.5 uses the double-leaves basis to
   define the diagrammatic character. Lemma 6.24 gives Krull--Schmidt;
   Theorem 6.25 gives the one new indecomposable \(B_w\) for every \(w\), up
   to shift; Cor. 6.26 makes the character an isomorphism
   \([\operatorname{Kar}(D)]\cong\mathcal H\).
6. EW §6.7 additionally assumes a **Soergel realization over a field**.
   Theorem 6.28 identifies \(\operatorname{Kar}(D)\) with actual SBim. Its
   proof uses the full Hom-rank comparison / Libedinsky generation theorem (or
   the alternative in Remark 6.29), not a rank-two computation alone. Combining
   5 and 6 yields the SBim classification, Hom formula, and split \(K_0\)
   theorem. For \(k=\mathbb Q\), a field is a complete local ring and the
   standard faithful type-A reflection realization supplies the stated setting.

**Disposition:** the desired theorem is source-supported, but the current
BG-16 row's promised proof route is materially too narrow. “Rank-one,
distant, rank-two decompositions, then Bott--Samelson/indecomposable characters
for spanning and independence” omits the entire light-leaves spanning theorem,
Krull--Schmidt/idempotent analysis, and equivalence-to-bimodules step. It must
take one of these honest forms:

- **narrow local theorem:** prove only that the three low-rank decompositions
  induce a homomorphism from the type-A Hecke algebra in its KL generators to
  split \(K_0\) of the additive monoidal category generated by the \(B_i\);
  no injectivity, basis, classification, or Hom-rank formula is claimed; or
- **full sourced theorem:** retain the \(K_0\) isomorphism but add explicit
  predecessor/recorded-result infrastructure for (a) the diagrammatic category
  and its functor to SBim, (b) the double-leaves Hom-basis theorem, (c)
  Krull--Schmidt/classification, and (d) the character/equivalence theorem.
  The authored BG-16 proof may explain the use of these results but cannot
  pretend to reproduce EW §§5--7 in one short proof row.

For this commission's no-gap gate, I recommend the latter only if the
full light-leaves infrastructure is deliberately scaffolded. Otherwise split the
present theorem into a locally proved Hecke-relation proposition and an honestly
recorded external categorification theorem, with the exact EW source statement.

### Exact Type-A rank-two summand and shift

EW uses \(M(1)_d=M_{d+1}\), whereas Khovanov's braces have
\(M\{r\}_d=M_{d-r}\). Hence EW \((r)\) equals Khovanov \(\{-r\}\).
Khovanov 0510265, Prop. 4 (pp.11--12), defines in its convention
\(B_{i,i+1}=R\otimes_{R^{S_3}}R\{-3\}\). The exact object in the EW/BG-16
convention is therefore

\[
B_{i,i+1,i}:=B_{w_0^{\{i,i+1\}}}
 =R\otimes_{R^{\langle s_i,s_{i+1}\rangle}}R(3).
\]

It has the decompositions, without additional shifts,

\[
B_iB_{i+1}B_i\cong B_{i,i+1,i}\oplus B_i,
\qquad
B_{i+1}B_iB_{i+1}\cong B_{i,i+1,i}\oplus B_{i+1}.
\]

This agrees with EW's \(B_s=R\otimes_{R^s}R(1)\) and (3.6), and with
Kh2006 Prop. 4 after the stated translation. Add this definition before the
rank-two theorem; do not call it merely a symbol introduced inside that theorem.

### Exact conversion from EW to RG-13

RG-13 fixes \((T_i-q)(T_i+1)=0\), i.e.
\(T_i^2=(q-1)T_i+q\). EW §2.1 uses the standard generator with
\(T_{i,\mathrm{EW}}^2=(v^{-2}-1)T_{i,\mathrm{EW}}+v^{-2}\), then sets
\(H_i=vT_{i,\mathrm{EW}}\), and its KL simple generator is
\(\underline H_i=H_i+v\). Thus the only compatible identification is

\[
q=v^{-2},\qquad T_i=T_{i,\mathrm{EW}},\qquad
\underline H_i=v(T_i+1),\qquad T_i=v^{-1}\underline H_i-1.
\]

Under it,
\([​B_i​]\leftrightarrow\underline H_i=v(T_i+1)\), and the
rank-one decomposition becomes exactly

\[
[B_i]^2=(v+v^{-1})[B_i].
\]

This calculation follows from \((T_i-v^{-2})(T_i+1)=0\); it is not valid if
RG-13 calls its generic parameter \(v\) rather than \(q=v^{-2}\). BG-16
must therefore name the RG-13 parameter substitution in the statement and use
the **KL generator** \(\underline H_i\), not ambiguous “the Hecke generator.”
