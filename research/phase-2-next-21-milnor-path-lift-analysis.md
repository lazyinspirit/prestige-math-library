# Owner analysis: choice-free path lifting for the specific Milnor bundle

Status: a local derivation route for group b to check and author after b-2's
handoff. This is not an item, proof contract, scope receipt, or acceptance.
It preserves the unqualified weak loop-space comparison while respecting the
AC hypothesis on the *general* published numerable-bundle theorem.

Milnor's authored `thm-milnor-join-model-is-a-contractible-free-g-space`
constructs canonical principal charts `U_i={t_i>0}` and a support-subordinate
numeration `(rho_i)` indexed by `i in N`. The published
`thm-numerable-fiber-bundles-are-hurewicz-fibrations` proves a regular lifting
function in seven steps. Its only AC use is choosing a well-order on an
arbitrary set of finite chart words. For this *specific* countable chart
family, order finite words of natural numbers first by length and then
lexicographically. Every other step can be transcribed without AC:

1. For a finite word `T=(i_1,...,i_n)` and `J_j=[(j-1)/n,j/n]`, set
   `lambda_T(alpha)=min_j min_{u in J_j} rho_{i_j}(alpha(u))` on the compact-open
   path space. The published proof's compact-open argument gives continuity;
   `supp(lambda_T)` lies in the open set `V_T` of paths staying in each
   corresponding `U_{i_j}` on `J_j`. Finite subcovers of the *one* compact
   interval show every path has a positive `lambda_T`. For fixed length, only
   finitely many words can occur near one path, by local finiteness of
   `(rho_i)` on its compact image.
2. Put `gamma_T=max(0,lambda_T-|T| sum_{|R|<|T|}lambda_R)`. The least length
   with positive `lambda` supplies a positive `gamma`; one such shorter word
   bounds all sufficiently longer `gamma` away from the path. Thus the entire
   family is locally finite. Normalize to `w_T=gamma_T/sum_R gamma_R`; its
   support remains inside `V_T`.
3. For a path in `V_T`, transport a point successively through the finitely
   many principal charts on the subintervals `J_j`; call the result
   `L_T(alpha,e,s,t)`. It is continuous, equivariant, and *regular*:
   `L_T(alpha,e,s,s)=e`. Chart transitions at the common endpoints agree.
4. With the explicit length-lex order, set `a_T=sum_{R<T}w_R` and
   `b_T=a_T+w_T`. At each path, its finitely many positive-weight intervals
   `[a_T,b_T]` are consecutive and cover `[0,1]`. Transport through them in
   order, truncating endpoints at `t`, to get `Lambda(e,alpha,t)`. Zero-weight
   intervals act as identity. Local finiteness reduces continuity near every
   path to a fixed finite chart composition, so `Lambda` is a jointly
   continuous, equivariant, regular lifting function. None of these steps
   selects an element from an indexed family.

The published `thm-long-exact-sequence-of-homotopy-groups-of-a-fibration`
uses first-loop-first composition and defines its component boundary by
`[e_0]·[gamma]^{-1}`. If the lift from `e_0` ends at `e_0 g`, use the based map
`partial(gamma)=g^{-1}` to match that connecting convention, and verify the
higher homotopy-group sign under the same convention. Alternatively call
`gamma↦g` the endpoint-transport weak equivalence and explicitly distinguish
it from the LES boundary. Contractibility of `EG` then gives the positive
degree isomorphisms and component bijection; AC is needed only for the
separate CW-type/Whitehead upgrade exactly as currently stated.

The group lead must check each point-set continuity claim and the exact
published chart/loop conventions, then put the necessary local derivation and
direct dependencies in the item and contract. Citing the AC-stated general
theorem alone is insufficient for the choice-free first clause.
