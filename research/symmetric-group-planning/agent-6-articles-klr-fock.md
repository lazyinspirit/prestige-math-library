# Agent 6 — cyclotomic Hecke/KLR, Fock-space, and categorification sources

## Agent record

| field | record |
|---|---|
| canonical agent/task name | /root/symmetric_scaffold/symr_articles_klr_fock |
| model | gpt-5.6-terra |
| reasoning effort | high |
| exact assignment | Retrieve and inspect complete authoritative articles and author/university notes on type-A/cyclotomic Hecke algebras, quiver Hecke/KLR algebras, level-one Fock spaces/crystals/global bases, and categorification of symmetric-group/Hecke representation theory; distinguish ungraded/graded and characteristic-zero/positive-characteristic assertions. |
| start state | Read CLAUDE.md, README.md, commission, report contract, RG-13, the RL quantum-affine boundary, ownership seams, and completed reports 3 and 4. RG-13 is planned/unbuilt and owns generic type-A Hecke presentation, basis, specialisation and Tits deformation only. RL-12--15 are planned classical Kac--Moody pages, not quantum/crystal/global-basis suppliers. |
| completion state | Five complete arXiv PDFs were fetched, SHA/page/end-matter validated, text extracted, and read in exact ranges below. This is the sole tracked file written. |

## Conventions and ownership

Fix an algebraically closed field F and ξ in F×. Quantum characteristic e is the least positive integer with 1+ξ+...+ξ^(e-1)=0, or e=0 if none exists. The type-A quiver has I=Z/eZ and arrows i→i+1 for e>0, and is the infinite line for e=0. Degenerate ξ=1 and nondegenerate ξ≠1 cyclotomic Hecke algebras are separate constructions; if char F=p and ξ=1 then e=p. At level one Λ=Λ_0, H_d^Λ=F S_d degenerately and is the finite type-A Iwahori--Hecke algebra otherwise.

Use v for the Fock/global-basis grading parameter, reserving ξ for the Hecke parameter. A shift M⟨r⟩ gives [M⟨r⟩]=v^r[M]. Thus an ungraded Grothendieck group is a v=1 specialisation, not the same integral lattice as its graded version.

Inherit only RG-13's generic Hecke material. New SYMR material owns cyclotomic quotients, block idempotents, KLR presentation/grading, the Hecke--KLR theorem, Fock/crystal/global basis, Ariki categorification, and graded decomposition results. Classical RL pages cannot silently supply quantum theory. Braid topology, Rouquier complexes, Soergel actions, and link homology are excluded.

## Full-text evidence

All originals and MuPDF text extractions are under:

/home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/klr-fock-articles/

Every counted PDF renders all stated pages, ends in %%EOF, and has terminal bibliography/references or complete notes/exercises. None is a preview or abstract. MuPDF extraction succeeded without OCR; displayed formulas were checked against PDF renderings when extraction order was unclear.

### S1 — explicit blockwise Hecke--KLR isomorphism

- Jonathan Brundan and Alexander Kleshchev, Blocks of cyclotomic Hecke algebras and Khovanov--Lauda algebras, arXiv:0808.2032v3 (2008); Inventiones Mathematicae 178 (2009), 451--484. Source type: article/preprint. Legitimate URL: https://arxiv.org/pdf/0808.2032
- Original absolute path: /home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/klr-fock-articles/brundan-kleshchev-2008-blocks-cyclotomic-hecke-kl.pdf; SHA-256 c9a24757f7f3d1e18bac5dba5c22abb4129bf75f4b7e690ad74a3b907da922b0; 32 PDF pages. Page 32 ends complete references.
- Extraction: brundan-kleshchev-2008-blocks-cyclotomic-hecke-kl.txt, 3,063 lines.
- Actually read: Introduction/Main Theorem pp. 1--5; §2.2 pp. 5--6; degenerate §§3.1--3.5 pp. 7--19; nondegenerate §§4.1--4.5 pp. 19--27; level-one seminormal §5 pp. 27--29; base change §6/references pp. 29--32.

### S2 — graded categorification and decomposition theorem

- Jonathan Brundan and Alexander Kleshchev, Graded decomposition numbers for cyclotomic Hecke algebras, arXiv:0901.4450v3 (2009); Advances in Mathematics 222 (2009), 1883--1942. Source type: article/preprint. Legitimate URL: https://arxiv.org/pdf/0901.4450
- Original absolute path: /home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/klr-fock-articles/brundan-kleshchev-2009-graded-decomposition.pdf; SHA-256 62e4dddfab3caf89b824cc9b3551ca8a287dc3cac266c443f64ab3eef3fa1266; 57 PDF pages. Terminal pages contain complete references.
- Extraction: brundan-kleshchev-2009-graded-decomposition.txt, 4,942 lines.
- Actually read: KLR projective categorification §§2.3--2.10 pp. 5--10; quantum/global basis and Fock/crystal §§3.1--3.10 pp. 11--24; cyclotomic quotient, Hecke isomorphism, functors, branching §§4.1--4.10 pp. 30--41; Ariki input, Spechts, decomposition/adjustment §§5.1--5.7 pp. 44--57; references pp. 56--57.

### S3 — independent KLR construction and projective categorification

- Mikhail Khovanov and Aaron D. Lauda, A diagrammatic approach to categorification of quantum groups I, arXiv:0803.4121v3 (2008); Representation Theory 13 (2009), 309--347. Source type: article/preprint. Legitimate URL: https://arxiv.org/pdf/0803.4121
- Original absolute path: /home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/klr-fock-articles/khovanov-lauda-2008-diagrammatic-approach-i.pdf; SHA-256 8fffabbb7c5176fd82dc3f4b167a2bacaa50ca2944eec9a6d36d3ccab07abad7; 53 PDF pages. Complete references are terminal.
- Extraction: khovanov-lauda-2008-diagrammatic-approach-i.txt, 4,321 lines.
- Actually read: introduction/Theorem 1.1 pp. 2--4; local diagrams §2.1 pp. 5--9; polynomial representation and basis Theorem 2.5, §§2.2--2.4 pp. 9--22; induction/restriction §2.6 pp. 31--34; K_0 multiplication/comultiplication §§3.1--3.2 pp. 35--43; references.

### S4 — independent expository synthesis

- Alexander Kleshchev, Representation Theory of Symmetric Groups and Related Hecke Algebras, arXiv:0909.4844v1 (2009); Bulletin of the AMS 47 (2010), 419--481. Source type: expository article/preprint, not proof-complete textbook. Legitimate URL: https://arxiv.org/pdf/0909.4844
- Original absolute path: /home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/klr-fock-articles/kleshchev-2009-symmetric-groups-related-hecke.pdf; SHA-256 8685199608967fa7c479e4dd883990b716a6f708e71cf75f6ce4aba41c6f2cab; 66 PDF pages. Complete references end the document.
- Extraction: kleshchev-2009-symmetric-groups-related-hecke.txt, 5,136 lines.
- Actually read: parameters/cyclotomic/block/KLR §§2.1--2.11 pp. 6--17; graded induction/restriction §§6--7 pp. 27--33; quantum/Fock/global basis §§8.1--8.5 pp. 33--39; categorification/decomposition §§9.1--9.5 pp. 39--46; terminal references. It states/cites deep proofs, flagged below.

### S5 — author lecture notes, limited Fock context

- Alexander Kleshchev, Essén Lectures: Representation Theory of Symmetric Groups, arXiv:1401.6156v1 (2014), Uppsala University lecture notes. Source type: author lecture notes, not textbook. Legitimate URL: https://arxiv.org/pdf/1401.6156
- Original absolute path: /home/lazyinspirit/Projects/prestige-math-library/scratchpad/source-cache/symmetric-groups/klr-fock-articles/kleshchev-2014-essen-lectures.pdf; SHA-256 8ed184a63f2688f9320f84c38b233cbff7c24c8eaa08d489bb5af4e9a3a1d9e9; 53 PDF pages, ending in exercises/end matter.
- Extraction: kleshchev-2014-essen-lectures.txt, 3,140 lines.
- Actually read: contents/introduction pp. 1--3; Day Two pp. 17--30; Day Three §3.1 Heisenberg/Boson--Fermion pp. 31--39; exercises/end matter pp. 40--53. It is level-one context only, not KLR/Ariki proof support.

### Retrieval boundary

The original 1996 Ariki article was attempted at its legitimate Project Euclid DOI PDF endpoint. It returned a 1,163-byte HTML/error body masquerading as PDF and failed MuPDF validation, so is not counted or cited. S2 exactly restates Ariki's theorem and records its proof architecture; S4 independently verifies its conventions. No preview or malformed download is evidence.

## Mathematical harvest

### 1. Cyclotomic quotient, blocks, KLR relations, and bridge

**Sources read.** S1 Introduction/Main Theorem pp. 1--5, §§3--4 pp. 7--27; S2 §§4.1--4.3 and Theorem 4.1 pp. 30--32.

For Λ in P+ and α in Q+ of height d, H_d^Λ is the quotient by product_i(X_1-ξ^i)^((Λ,α_i)) if ξ≠1, or by product_i(x_1-i)^((Λ,α_i)) if ξ=1. Generalised X- or x-eigenspaces give e(i); for residue content α, e_α=sum e(i) is primitive central when nonzero and H_α^Λ=e_αH_d^Λ is one block. This is not an entire affine-Hecke equals entire-KLR theorem.

R_α^Λ has e(i), y_1,...,y_d, ψ_1,...,ψ_(d-1). Essential exact relations are:

- y_1^((Λ,α_(i_1)))e(i)=0; idempotence/orthogonality of e(i); ψ_re(i)=e(s_ri)ψ_r.
- Commuting y variables, distant commutation, and equal-residue relations ψ_ry_(r+1)e(i)=(y_rψ_r+1)e(i), y_(r+1)ψ_re(i)=(ψ_ry_r+1)e(i); omit 1 for unequal residues.
- ψ_r squared is 0, e(i), y_(r+1)-y_r, y_r-y_(r+1), or their product, according as residues coincide, are unjoined, have forward arrow, reverse arrow, or form the e=2 double arrow. The adjacent braid has matching correction.

Grading: degree e(i)=0, y_r=2, ψ_re(i)=-a_(i_r,i_(r+1)). S1 proves in separate degenerate/nondegenerate constructions that R_α^Λ is isomorphic to H_α^Λ. S2 independently maps y_re(i) to (1-ξ^(-i_r)X_r)e(i) nondegenerately and (x_r-i_r)e(i) degenerately, compatibly with the tower.

**Proof route.** S1 builds generalized-eigenvalue idempotents and blocks from the affine-Hecke center, introduces intertwining elements and local power-series coordinates inside finite blocks, checks all relations, constructs inverse Hecke generators, and proves mutual inverseness. It resolves the completion/power-series issue locally; do not replace it with a slogan.

**Example/boundary.** Λ=Λ_0,e=0 has y_r=0 on seminormal tableaux and recovers Young/Hoefsmit formulas (S1 §5); that semisimple case does not extend to roots of unity/positive characteristic.

**Disposition.** Proposed A-page atoms: quotient; block-idempotent lemma; KLR presentation/grading; separate degenerate/nondegenerate isomorphisms. B-page: d=2 level-one calculation with e(i), cyclotomic relation and ψ_1 squared. New after RG-13; S1 proof provenance, S2 independent check.

### 2. KLR projectives, induction, and canonical basis boundary

**Sources read.** S3 Theorem 1.1 pp. 2--4, Theorem 2.5 pp. 18--22, §2.6 pp. 31--34, §§3.1--3.2 pp. 35--43; S2 Theorems 2.7 and 5.19 pp. 9--10 and 54--55.

S3 defines R(ν) diagrammatically over Z. The polynomial representation proves a homogeneous basis, and induction R(ν) tensor R(ν') to R(ν+ν') plus restriction preserves projectives. The exact theorem is γ:A f to K_0(R-pmod), a graded twisted-bialgebra isomorphism: divided powers go to projectives, induction is multiplication, restriction twisted coproduct.

This is specifically the group of finitely generated graded projectives, not simples or arbitrary finite modules. S3's canonical-basis equals indecomposable-projective statement is Conjecture 1.2 in its stated tree/C scope. S2 Theorem 5.19 proves the usable refinement in type A, char F=0: canonical basis equals self-dual indecomposable graded projectives. S4 Theorems 9.1--9.2 corroborate this distinction but cite proofs.

**Disposition.** Use S3's diagram/basis/induction argument as KLR proof plan, then S2 for the type-A canonical-projective theorem. Exclude KLR 2-category braid or link content.

### 3. Level-one Fock action, crystals, and global bases

**Sources read.** S2 §§3.1--3.8 pp. 11--20; S4 §§8.1--8.5 pp. 33--39.

At level one choose charge k, Λ=Λ_k. F(Λ) has Q(v)-basis M_λ indexed by partitions. If d_A counts addable minus removable i-nodes below a removable A, and d_B the corresponding count above an addable B:

E_iM_λ=sum_A v^(d_A(λ))M_(λ without A);
F_iM_λ=sum_B v^(-d_B(λ))M_(λ with B);
K_iM_λ=v^(d_i(λ))M_λ.

Here g is affine sl_e for e>0 and sl-infinity for e=0. The narrow required U_v(g) has E_i,F_i,K_i plus quantum Serre and [E_i,F_j]=delta_ij(K_i-K_i^-1)/(v-v^-1); this is not inherited from RL.

Order addable/removable i-nodes by rows and cancel -+ pairs. e-tilde removes leftmost surviving minus and f-tilde adds rightmost surviving plus. The empty component is the highest-weight crystal: e-restricted partitions at finite e and all partitions at e=0. The quotient π:F(Λ) to V(Λ) maps the empty partition to the highest vector. Balanced-triple/global-basis construction gives bar-invariant dual-canonical D_λ on the restricted component, dual to canonical basis. Fock space itself need not be irreducible.

**Example.** At e=3, charge 0, f-tilde_0(empty)=(1); its next addable residues are 1 and 2. The B-page should draw initial arrows and a cancellation. At e=0 there is no periodic residue collision.

**Disposition.** A-page: narrow quantum-group definition, Fock action, signature crystal, quotient/highest component, global/dual-global bases. B-page: e=3 charge-0 graph. S2 proof source and S4 independent treatment. This is the needed quantum-affine interface, not a broad quantum-group track.

### 4. Cyclotomic induction/restriction and two Grothendieck groups

**Sources read.** S2 §§4.1--4.10 pp. 30--41, especially Theorem 4.18.

R_α^Λ is R_α modulo y_1^((Λ,α_(i_1)))e(i). Block embeddings give exact biadjoint ungraded e_i,f_i and degree-corrected graded E_i,F_i; they preserve finite modules/projectives. Divided powers are exact and E_i^n is [n]! times E_i^(n), likewise F.

The precise categorification is a square from V(Λ)_A to K_0(Proj R^Λ), and from K_0(Rep R^Λ) to V(Λ)^*_A. The map from projectives to modules is injective and becomes an isomorphism only after Q(v)-extension. The maps commute with divided powers/bar duality and identify Shapovalov with Cartan pairing. Projective covers are canonical-side data; simples are dual-canonical-side data.

S2 Theorems 4.9, 4.11--4.12 classify simples by restricted multipartitions and give graded branching leading q-integer terms. They invoke Grojnowski/deep input, so treat classification/branching as recorded theorem after proving formal functor/Grothendieck identities.

**Disposition.** Categorification page depends on KLR and Fock pages, never a braid page; it must never call the two groups simply one Grothendieck group.

### 5. Ariki at v=1, graded refinement, adjustment matrices

**Sources read.** S2 Theorems 5.1, 5.9, 5.14--5.18 pp. 45--54; S4 Theorems 9.4--9.10 pp. 41--44.

**Ungraded characteristic zero.** S2 Theorem 5.1 restates Ariki's deep geometric theorem: char F=0 implies δ:V(Λ)_Z to K_0(Proj H^Λ) sends canonical basis to indecomposable projectives; the dual sends simple classes to dual-canonical basis. Theorem 5.9 gives [S(μ):D(λ)]=d_(λ,μ)(1), with d the Fock/global transition coefficient. This is v=1 and char-zero only. S2 does not reproduce the geometric proof; S4 is independent exposition.

**Graded characteristic zero.** S2 Theorems 5.14--5.15 prove [S(μ):D(λ)]_v=d_(λ,μ)(v), including source dominance vanishing, if char F=0. S4 Theorem 9.9 independently states it. Graded Spechts have homogeneous tableau bases and q-character sum_T v^(deg T)i_T.

**Positive characteristic.** S2 §5.6 does not make d the general modular decomposition matrix. Characteristic-zero simple lattices reduce to J(μ) and produce bar-invariant graded adjustment coefficients a_(λ,μ)(v), nonnegative, with

[S(μ):D-dot(λ)]_v = sum_ν a_(λ,ν)(v)d_(ν,μ)(v).

At level one ξ=1, v=1 is James's adjustment matrix. Theorem 5.18 identifies simple labellings but does not make a identity. The source's absence of a known non-integral example is historical, not a vanishing theorem.

**Disposition.** Separate three items: ungraded Ariki char 0; graded char-0 theorem; positive-char adjustment factorisation/boundary. The first two are deep recorded results with exact citation; the third forbids claims of a solved general modular formula.

## Agreement and closing audit

- S1 and S2 agree on blockwise Hecke--KLR; S1 proves the degenerate/nondegenerate formulas, S2 independently fixes normalized y/tower convention. Keep ξ distinct from v.
- S3 and S2 independently treat KLR projectives. S3 canonical-basis refinement remains conjectural at its scope; use S2 type-A char-0 theorem.
- S2 and S4 independently agree on Fock/categorification conventions and characteristic-zero restriction. S4 cites deep results and is corroboration, not sole proof source. S5 is only Fock context.
- Stated-without-proof/deep inputs: Ariki geometric theorem in S2, Grojnowski classification in S2 Theorem 4.9, and S4's cited survey theorems. Label them recorded deep results. S1/S3 expose core algebra/polynomial proof routes.
- No source supports braid-specific categorical actions, Soergel/Rouquier/link-homology claims, or arbitrary-positive-characteristic canonical-basis decomposition formulas.

| closing field | audit |
|---|---|
| complete sources retrieved | 5 |
| sources actually read in relevant ranges | 5; S5's limited relevance explicitly recorded |
| retrieval failure/replacement | Original Ariki DOI PDF invalid and excluded; S2 exact restatement/proof architecture plus S4 independent exposition used |
| substantive gaps | Original geometric Ariki proof not reproduced; RL not quantum supplier; adjustment matrices prevent a universal modular formula |
| independent proof checks | S1+S2 Hecke--KLR; S3+S2 KLR/projectives; S2+S4 Fock/categorification conventions |
| files to integrate | research/symmetric-group-planning/agent-6-articles-klr-fock.md only; PDFs/extractions/page texts are ignored cache |
