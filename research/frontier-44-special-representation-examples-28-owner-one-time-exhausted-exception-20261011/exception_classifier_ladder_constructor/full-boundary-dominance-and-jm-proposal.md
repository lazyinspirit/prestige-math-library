# Complete full-ladder-boundary dominance and its classifier interface

Run: `frontier-44-special-representation-examples-28`.
Owner exception: `../authorization.json`, one additional bounded pass; the two old ordinary rounds and their history are not reset.
Author: `/root/exception_classifier_ladder_constructor`.
Lead owner: `/root/repair_cell_head_classification`; that owner retains the supplier and every affected consumer. This packet is research-only, and is a proposal for the lead's independent checking and root's integration. It writes no canonical item, state, gate, certification or judgment.

## Verified result

The exact Section 4 full-ladder-boundary proposition in the historical `classification-ladder-constructor/construction-and-exact-gap.md` is now proved universally. In fact its equal-residue-content hypothesis is unnecessary. The missing ingredient is the height bound at a complete ladder boundary: every competing partition dominating the truncated restricted partition has every addable node of the required residue in one of the first T rows. Counting rows proves the simultaneous k-node assertion directly. No regularization theorem, classification theorem, source's unsupported truncation sentence or finite test supplies this proof.

## Proposition and complete proof

Fix an integer e≥2. For a node (s,c), put

`L(s,c)=(e−1)s+c−e`, and `res(s,c)=c−s mod e`.

Let l≥0, i=l mod e, and let α be an e-restricted partition with every occupied node having L<l. Suppose its set A_l of addable nodes on ladder l is nonempty. Let 1≤k≤|A_l|, and obtain δ by adding the bottommost k nodes of A_l. Let β be any partition of |α| dominating α, and obtain γ by adding any k distinct addable i-nodes of β. Then γ dominates δ. No equality of residue contents is required.

1. Put C=l+e−1, T=floor(C/(e−1)), and d=C−(e−1)T, so 0≤d≤e−2. For 1≤s≤T put u_s=C−(e−1)s. The strict ladder cutoff gives α_s≤u_s whenever α_s>0; the same inequality is automatic for α_s=0 since u_s≥0. No positive row of α occurs beyond T, since its endpoint would violate that cutoff. If d=0, row T is also zero.

2. The deficits h_s=u_s−α_s are nonnegative for s≤T and satisfy

`h_(s+1)−h_s=α_s−α_(s+1)−(e−1)≤0`

by restrictedness. An addable ladder-l node in row s has column α_s+1 and therefore h_s=0. Once a deficit is zero, every subsequent deficit through T is zero. Thus after the first ladder-l addable row s_0 all rows through T have α_s=u_s, and each subsequent row is addable because consecutive widths differ by e−1>0. Consequently A_l consists exactly of a terminal interval of rows s_0,s_0+1,…,T. (A first equality row can fail to be addable if its preceding row has the same width, but then the next row starts this terminal interval; this does not affect the assertion.) It follows that δ's k additions occupy rows T−k+1,…,T. Also α has length T if d>0 and length T−1 if d=0, except that T=1,d=0 gives the empty partition, as required.

3. Because β has the same size as α and dominates α, its length is at most the length of α: at the latter row cutoff, α's prefix sum is already |α|, so β's tail must vanish. If d=0, every addable node of β therefore has row at most T. If d>0, the only possible addable row beyond T would be row T+1, with β having exactly T positive rows. That new-row node has residue −T. On the other hand

`i=l mod e=(d+1−T) mod e`.

Since 1≤d+1≤e−1, these residues differ. Thus in both cases **every addable i-node of β has row at most T**.

4. At any row cutoff r≥0, at most max(T−r,0) of γ's k additions can lie below the cutoff, since at most one initial addable node lies in each row. Hence γ's prefix increment is at least

`a(r)=max(0,k−max(T−r,0))`.

The terminal rows T−k+1,…,T show that δ's prefix increment is exactly a(r). Adding this inequality to β's dominating-prefix inequalities proves every prefix inequality γ≥δ. This proves the complete simultaneous k-node proposition.

Every row-length and congruence argument above is over the integers and is uniform in e. There is no appeal to field characteristic, splitting, choice, an abacus charge invariant, or simple-module labels.

## Restricted ladder word: complete reduction

For an e-restricted λ, number its nodes in increasing L, breaking equal-L ties from lower rows to upper rows, and call the resulting tableau t_λ. Moving right raises L by 1 and moving down raises L by e−1>0, so this tableau is standard.

At a complete ladder boundary l let α_l consist of λ's nodes with L<l and δ_l consist of its nodes with L≤l. These are Young diagrams. Each is e-restricted: its row lengths are the positive parts of the minimum of λ_s and the corresponding affine cutoff bound; two sequences with adjacent differences at most e−1 have a minimum with that same bound. The affine bound terminates with a last positive part at most e−1. This explicitly includes the zero-part boundary.

Every occupied node of restricted λ on ladder l is bottom-packed on that ladder: if c−(e−1)>0, restrictedness gives λ_(s+1)≥λ_s−(e−1)≥c−(e−1), so the next lower ladder position is occupied. Therefore δ_l is obtained from α_l by adding the bottommost a_l=|δ_l\α_l| addable nodes on ladder l. The proposition applies at this boundary.

Now let t be any standard tableau whose complete residue word equals that of t_λ. Group the word into complete ladder blocks. For any such block its a_l letters are all i=l mod e. At the beginning and end of the corresponding block in t let the shapes be β and γ. Every added i-node was already addable at β: adding one i-node can create addable nodes only immediately to its right or below it, of residues i+1 and i−1, both distinct from i for e≥2. Thus the block adds a_l distinct initial addable i-nodes, with at most one per row. Starting from the empty shape, apply the proposition inductively to conclude γ≥δ_l at each completed block. At the final block, the shape μ of t satisfies μ≥λ.

In particular no strictly dominated shape μ<λ has a standard tableau with the residue word of t_λ. **There is no claim of same-shape tableau uniqueness.** For e=2, shape (2,1) has both tableaux with rows 1,3 / 2 and rows 1,2 / 3 and the same word 0,1,1. This proof does not require uniqueness at intermediate single-letter prefixes or the false implication that deleting equally-residued last nodes preserves dominance.

## Arbitrary-field residue transport

Let F be any field, q∈F×, and e its finite quantum characteristic. If q≠1 then e is the multiplicative order of q; for integer a,b,

`[a]_q−[b]_q=q^b[a−b]_q`

(with the usual Laurent extension to negative integers), so equality of the q-integers is equivalent to a≡b mod e. If q=1 and char F=p>0, e=p and [a]_1=a·1_F, giving the same equivalence. Thus equality of the full Murphy JM eigenvalue word is precisely equality of the combinatorial residue word. The proof applies unchanged to q=1 in positive characteristic, to unit q of finite order in any field, and to e=2.

For e=∞ the finite-ladder proposition is unnecessary. The row-reading Murphy cell vector has norm ∏_s[λ_s]_q!, so its norm is nonzero: all positive quantum integers are nonzero by the definition of e. Every λ is e-restricted. For n=0 the algebra, vacuum cell module and form are F,F and multiplication, with norm 1. The full statement retains these cases rather than narrowing to roots of unity or algebraically closed fields.

## Finite joint-primary projection and the maximal cellular label

This is the exact algebraic interface needed for the finite-e nonzero half. It uses the independently proved Murphy cellular structure, triangular JM action, and cellular composition support; it does not use the desired nonzero-label classification.

Assume the local Murphy suppliers establish: (a) commuting L_1,…,L_n; (b) a triangular tableau basis of each cell module M_ν, with joint diagonal eigenvalues c_t(r)=[res_t(r)]_q; and (c) all simple composition factors of M_λ are nonzero cellular heads D_μ with μ≤λ in dominance. For Murphy's reversed cellular order this is the correct direction; the lead must retain its proved local supplier, rather than cite Mathas3.39.

There are finitely many diagonal eigenvalues in F. On the direct sum of the finitely many cell modules, each L_r is annihilated by ∏_a(X−a)^N for sufficiently large common N. Chinese remainder interpolation gives polynomials p_(r,a) which are 1 modulo (X−a)^N and 0 modulo every other factor. For a joint eigenvalue word ξ, let E_ξ=∏_r p_(r,ξ_r)(L_r). On every cell module, E_ξ projects onto the joint-primary ξ subspace. Its matrix in the triangular tableau basis has diagonal 1 exactly at the tableaux with word ξ and 0 elsewhere. It follows that E_ξ M_ν is nonzero exactly when some standard ν-tableau has word ξ. These projections also act compatibly on all subquotients of these modules. If desired, include the regular representation in the finite family when choosing N, making idempotence an equality in H and extending this construction to every H-module.

The functor M↦M E_ξ on the relevant subquotients is exact as an F-vector-space-valued functor: it preserves kernels, and a lift x of any y=yE_ξ can be replaced by xE_ξ to prove surjectivity. No centrality of E_ξ and no stability of the primary subspace under all of H are asserted or needed.

For restricted λ choose ξ to be the word of t_λ. Then E_ξ M_λ≠0. By the ladder proof, E_ξ M_μ=0 for every μ<λ. Consequently E_ξ D_μ=0 for μ<λ, since D_μ is a quotient of M_μ. Apply the exact projection functor to a finite composition series of M_λ. Since its image on M_λ is nonzero, some simple constituent has nonzero image. By cellular support that constituent is D_μ for μ≤λ; exclusion forces μ=λ. Hence D_λ≠0. This is the maximal-cellular-label argument with the full joint word; it is not a generic semisimplicity argument and it does not assume the classifier.

## Sign/conjugation interface and limits of this packet

The finite-e result is in Murphy's e-restricted normalization. The ordinary Dipper–James normalization in the owned definition is S^λ=(M_(λ'))^θ and D^λ=(D_(λ'))^θ, where θ(T_i)=−q T_i^−1=(q−1)−T_i. Pullback along an algebra automorphism is exact and preserves nonzero modules and simplicity, and λ is e-regular iff λ' is e-restricted. Consequently the nonzero criterion passes to the full e-regular statement over the same arbitrary field. Conjugation alone is not a module isomorphism, and q=1 specializes θ to the sign twist.

The lead still owns the converse vanishing proof using actual Gram-entry divisibility, the proved cellular support/interface, all affected consumers and the semisimplicity clause. This packet does not certify any of those other proofs, and in particular supplies no false product-of-hooks formula for Gram determinants. The ladder obstruction itself is completely resolved by the universal proof above.

## Actual source reading

Read CLAUDE.md fully, README.md fully, SCHEMA.md fully, and the relevant WORKFLOW controls (including exact scoped authoring, history preservation and guarded recovery); no build command was run. Read the exact owner authorization and the historical Section4 gap packet. Read current canonical classifier, Specht/cell-form definition and restricted/regular definition as dependency context, not as newly accepted proofs.

Viewed the actual cached Mathas printed pp.31,32,33,34 images in the old owner directory, not extracted snippets. Page31 finishes the seminormal proposition and starts the arbitrary-field irreducible section. Page32 gives Lemma3.35, the ladder definition, the (4,3),e3 diagram and Lemma3.37. The displayed ladder formula conflicts with that diagram; the diagram corresponds to L=(e−1)s+c−e. Pages32–33 contain the single-node deletion/truncation sentence that the historical gap packet correctly rejects without a proved full-word argument. Page33 gives Lemma3.38's Gram-entry divisibility proof. Page34 gives Theorem3.39, Corollary3.40, and the sign/dual normalization note. None of their classifier assertions was substituted for the local boundary proof. No reading of the published AMS book or other inaccessible full source is claimed.

## Durable handoff state

Objective: construct the exact missing universal full-boundary dominance lemma and identify its noncircular finite-JM route to nonzero restricted Murphy heads.

Verified state: complete integer-combinatorial proof above; same-residue-content premise is unnecessary. Lead independently checked the critical height/residue/counting argument by message. No independent consumer reviewer was assigned, no canonical files changed, no previous rounds reset, and no gate or engine control attempted.

Blockers: none for the boundary lemma. Full classifier acceptance still depends on the lead's owned converse Gram-entry proof and local cellular/JM supplier checks, followed by that owner's consumer maintenance and root integration.

Next action: lead checks this packet, incorporates the concise lemma and exact joint-primary argument into its disjoint draft, preserves arbitrary-field/unit-q/e=∞/n=0 scope and sign convention, then hands its complete owned repair to root.
