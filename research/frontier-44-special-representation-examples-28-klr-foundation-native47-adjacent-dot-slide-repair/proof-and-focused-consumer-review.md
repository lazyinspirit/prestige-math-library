# Native47 adjacent unequal-color dot-slide restoration

This is the first focused repair packet for the newly identified native47 supplier defect, with the new supplier scope limited to two rounds. It neither resets nor spends an old global-theorem repair round. No native manifest, canonical plan, readiness record, gate, state, or frozen author packet is changed by this packet. Root integrates the proposal. Existing foundational assumptions and unresolved theorem acceptance remain unchanged.

## Exact defect and guarded literal restoration

The native Definition is `def-quiver-full-flag-incidence-varieties-and-geometric-klr-generators`. The current manifest SHA256 is `cb3853207ed9d32ffff20ce60c0d2d71d0da35e29fb311e7e3e90ccded2af1a7`. The native item does not yet have an authored `items/` carrier. Its current item hash is `551d106e2cb2e0a903aa04aaf376291f3992827dff43b412fc4fe5e0fc4a9756` using the documented canonical JSON encoding. Its only proposed change is one substring of `statement`; all metadata, dependencies, sign conventions and other item fields are preserved exactly.

Before:

> the distinct-color dot slides $\tau_rx_t=x_{s_r(t)}\tau_r$ for $t\notin\{r,r+1\}$ when $\nu_r\ne\nu_{r+1}$

After:

> the distinct-color dot slides $(\tau_rx_t-x_{s_r(t)}\tau_r)e_\nu=0$ for every $1\le t\le m$ when $\nu_r\ne\nu_{r+1}$ (in particular $\tau_rx_re_\nu=x_{r+1}\tau_re_\nu$ and $\tau_rx_{r+1}e_\nu=x_r\tau_re_\nu$)

On nonadjacent positions this is the existing relation restricted to its word idempotent; the new content is exactly the two adjacent equations. The new quantifier is the quantifier in the original reviewed realization contract, not a new parameter convention. Multiplying on each word idempotent makes the color qualification explicit. No relation in an equal-color corner changes.

The prospective item hash is `ed0127620501d108fa774db9f9c02b367cdbad32264b1523faa1a4d7f902ad4e`. `guarded-statement-replacement.json` contains the exact old/new literals, all raw input guards, selector, occurrence count, and item encoding. `candidate47.pages.json` differs from the frozen current47 preimage in exactly this one field. It is a research candidate, not an applied manifest or a readiness receipt.

## Why the omitted equations are necessary

Take distinct vertices $i,j$, no arrows, and $\beta=\alpha_i+\alpha_j$. Then $Q_{ij}=Q_{ji}=1$, and there are just two word idempotents. In $M_2(k[u,v,a,b])$ put

$$e_{ij}=\begin{pmatrix}1&0\\0&0\end{pmatrix},\quad e_{ji}=\begin{pmatrix}0&0\\0&1\end{pmatrix},\quad x_1=\begin{pmatrix}u&0\\0&a\end{pmatrix},\quad x_2=\begin{pmatrix}v&0\\0&b\end{pmatrix},\quad \tau_1=\begin{pmatrix}0&1\\1&0\end{pmatrix}.$$

These matrices satisfy orthogonal idempotents, the unit, commuting word-preserving dots, word-intertwining crossings and $\tau_1^2=1$. For length two there is no braid relation, far crossing, nonadjacent dot, or equal-color mixed relation to check. Thus they satisfy every listed finite-weight relation of the defective presentation. Give $u,v,a,b$ degree two and $\tau_1$ degree zero, so the grading also causes no obstruction. But

$$\tau_1x_1-x_2\tau_1=\begin{pmatrix}0&a-v\\u-b&0\end{pmatrix}\ne0,\qquad \tau_1x_2-x_1\tau_1=\begin{pmatrix}0&b-u\\v-a&0\end{pmatrix}\ne0.$$

The extra elements are killed by the geometric polynomial action, which swaps the adjacent variables. Hence the defective intrinsic presentation has a nonzero kernel in the proposed geometric map even in this minimal allowed quiver. Geometric faithfulness is faithfulness of the convolution algebra; it cannot remove that kernel in a larger abstract presentation.

## Full-scope local verification of the restored equations

Fix any allowed word with $i=\nu_r\ne\nu_{r+1}=j$ and any arrow multiplicity $h_{ij}\ge0$. The already stated native operator is

$$T_r=M_A s_r:P_\nu\longrightarrow P_{s_r\nu},\qquad A=(x_r-x_{r+1})^{h_{ij}}.$$

Dots act by multiplication. For every $1\le t\le m$ and every polynomial $f$,

$$T_r(x_tf)=A\,s_r(x_tf)=A\,x_{s_r(t)}s_r(f)=x_{s_r(t)}T_r(f).$$

Taking $t=r$ and $t=r+1$ gives the two missing relations. Taking other $t$ gives the preexisting commuting-dot relation. This calculation works for arbitrary parallel arrows, arrows in both directions, zero arrow multiplicities, all finite dimension vectors and every characteristic-zero field, without changing $Q_{ij}=(-1)^{h_{ij}}(u-v)^{h_{ij}+h_{ji}}$. Both sides have degree $-a_{ij}+2$. The equal-color divided difference and mixed constants remain untouched. The first-coordinate/source convention, opposite shifted Yoneda multiplication, BM orientation and generator normalization remain untouched as well.

The geometric action is faithful by the existing geometric PBW supplier; consequently the operator equalities give equalities of the geometric classes. This restores the claimed quotient map from the corrected intrinsic presentation. This use of faithfulness transfers a verified operator equality to convolution; it does not claim faithfulness of the defective presentation.

## Actual direct and indirect consumers

The exact reverse `deps` closure, across all 736 current native manifest items and separately the complete canonical planned graph, is the supplier plus the following five batch47 items. The edge list, item/statement/strategy hashes and complete manifest-scan guards are in `consumer-graph-and-current-hashes.json`. Definition `justified_by` links remain discharge metadata and are not turned into a forward dependency or an original10 page cycle. A repository text search found no references to any closure ID in canonical `items/` or `library/` carriers.

1. `thm-quiver-flag-relative-position-strata-give-a-faithful-geometric-pbw-basis`: the setting and chosen geometric generators come from the Definition. Its claim and Steps 1–4 are about geometric convolution, its faithful action and relative-position closure basis. The additional abstract quotient equations do not change those geometric varieties or classes. This focused change requires no alteration of its statement or strategy. It remains the upstream faithfulness input used to transfer the explicitly verified equations.

2. `thm-quiver-flag-convolution-generators-satisfy-the-signed-klr-relations`: the statement says every relation of the intrinsic presentation holds. Strategy Step 1 already states all slides and uses $sM_f=M_{sf}s$; Step 2 supplies $A s_r$ for unequal colors; Step 5 transfers operator identities via geometric faithfulness. The displayed computation above instantiates precisely the two additional equations. No consumer text change is needed. The corrected Definition now agrees with this existing proof obligation.

3. `thm-signed-klr-algebra-is-the-equivariant-ext-algebra-of-quiver-flag-complexes`: Step 1 now has a quotient map respecting these equations. Step 3's operation “move dots left across crossings by the mixed and slide relations” was unavailable for adjacent unequal dots in the defective quotient; it is now available with no lower-crossing correction on unequal colors. Equal-color corrections and the square/braid reductions are unchanged. Thus this particular obstruction to its intrinsic spanning argument is removed, without depending on any original10 theorem. No other part of that normal-form argument is newly audited by this packet.

4. `ex-equal-color-quiver-flag-correspondence-is-nilhecke`: only the unique equal-color word is used. The new unequal-color equations are vacuous. Its stated nilHecke operators and mixed relations are unaffected; no text change follows from this supplier repair.

5. `ex-signed-two-direction-multiedge-quiver-flag-crossing`: its displayed unequal operators are of the form $A s_r$, so the restored slides hold for them as well. The correction does not change its displayed braid polynomial or operator products. A separate concrete dimension typo was noticed while reading this actual consumer: the native Step 1 writes $d_{(i,i,j)}=1+4=5$, whereas the unchanged Definition gives $1+2h_{ji}=3$; the native Statement also writes $d_{s_2s_1\nu}-d_{s_1\nu}=-1$, but $s_1\nu=(j,i,i)$ and $s_2$ fixes that word, so this difference is zero. Root authorized their focused repair under this same affected-consumer ownership, with a distinct first1/max2 example scope. The Definition-only candidate leaves them untouched; the separate guarded example proposal and combined candidate correct them. The intended valid comparison is $d_{s_2\nu}-d_\nu=3-4=-1$. See `example-dimension-focused-repair.md` for exact arbitrary-polynomial and dimension checks.

All direct consumers are listed above; the additional indirect edges are PBW→relations, PBW→Ext, relations→Ext and relations→both examples. No native consumer outside this closure is hidden by a narrower page selection.

## Current49 and old10/future typed use

The four current49 statement/strategy texts were read in full for this focused consumer check. They define incidence via their own compactification lemma; its semisimplicity corollary consumes that lemma and constructible/perverse suppliers. Neither its dependencies nor its proof clauses use the intrinsic signed presentation or a dot-slide relation. The added equations change neither incidence data nor $L_\nu$, so there is no affected current49 presentation proof to repair.

The current20-item original10 manifest contains no registered dependency on the Definition or its five-consumer closure, and no textual reference to those IDs. Its original generic algebra Definition already has both adjacent unequal-color slides in relation (6). Its held global strategy still explicitly requires the full semisimple quiver-flag Ext realization; it has not been rewritten to claim the new native suppliers are accepted.

The original reviewer's durable local geometric bridge proposal is a prospective typed consumer, not a current native edge. Its specialized-presentation sentence requires equality of the original relations and the intrinsic relations; this exact omitted pair previously prevented that sentence from being instantiated. After restoration, original relation (6) and the intrinsic all-position unequal-color relation agree, with identical equal-color constants, signed $Q$, native braid quotient and grading. The proposal's primary faithful-image argument compares the same projections, dot multiplications and $A s_r$ operators; the new equations hold by the displayed calculation. No original10 text change, generic-presentation dependency added to native47, or new bridge theorem is necessary for this repair. Its other required foundation and semisimplicity inputs retain their actual native statuses. Original global final-sufficiency review remains with the original reviewer through root.

## Sources actually consulted and checks still required

This turn read the complete current Definition, all five actual batch47 consumer statement/strategy texts, all four current49 texts, the current original10 generic Definition and polynomial theorem, the held original10 global strategy, and the complete original realization contracts/derivation and original geometric-bridge proposal. The original source-evidence JSON was read as historical evidence only. No new full-paper reading, independent source audit, foundational proof acceptance or native readiness certification is asserted. No new paper consultation was necessary: the omitted relation and its repair are settled by the elementary multiplication/permutation computation above. Earlier full-source scopes remain exactly as recorded in their original evidence; a historical citation is not substituted for this local proof.

The local integrity check verifies one literal occurrence, exactly one changed item field, identical consumers and metadata, and equality of native and canonical reverse closures. Root should rehash the stated preimages immediately before integration; reject any changed input and refresh the review rather than silently applying the candidate. After integration, the supplier and the actual five-consumer closure need their ordinary dependency-ordered Step1 readiness refresh and normal scoped metadata/check battery. If the consumer example correction is integrated separately, include its exact field guards and rerun its local arithmetic check. No passing engine gate or readiness decision is fabricated here, and no old repair history is erased.
