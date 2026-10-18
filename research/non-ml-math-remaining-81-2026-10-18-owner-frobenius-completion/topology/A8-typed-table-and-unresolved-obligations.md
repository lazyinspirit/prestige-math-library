# A8 typed rewrite work product — incomplete

This is a usable partial case table and a precise gap record. It is **not** a complete replacement proof for A8 and must not be recorded as one. The separate `A8-IV-VI-formal-macro-replacements.md` now supplies the fully typed formal chains for the nonlocal IV and VI return configurations; the global stage and termination obligations below remain. The parent owns algebraic suppliers and final integration. No native carrier has been edited.

## Correction to the height convention

LP Definition 3.21, pp.31–32, counts toward the **target**, below the distinguished generator in the drawings, where source is at the top. It does not count an upstream input tree. An external target leg has height zero; a unary continuation has height $1+h(Y)$; a two-output generator has height $1+h(Y)+h(Z)$. In particular an open multiplication has one continuation in this recursion, while an open comultiplication has two. This is directly visible in the rendered definition: the boxes $Y,Z$ are below the generator. Consequently a Frobenius slide from a coproduct above a product to a product above a coproduct lowers the coproduct's height and raises the product's height. A minimum-height coproduct has no coproduct in its **downstream** continuation. The existing A8 repeatedly uses the opposite direction.

A decomposition is an acyclic graph, not necessarily a tree. Unfolding its downstream branches can duplicate a vertex after a reconvergence. Thus height need not be bounded by its number $G$ of graph vertices. With at most two outputs per vertex, the unfolded tree has depth at most $G$ and at most $2^{G+1}-1$ vertices. This is a sufficient uniform bound whenever the relevant tracked sequence does not increase $G$. It is not itself a proof that every macro sequence preserves $G$: expansion/packaging of pairings, windows and handles must be held fixed when counting. Increasing-height phases need this check for their actual displayed moves; decreasing-height phases only need strict descent in a nonnegative integer.

## Notation and formal status

Use canonical associators and unitors throughout. Put
$$
O_{ab}^{c}=\mu_{acb}\Delta_{acb}:A_{ab}\to A_{ab},\qquad W_c=i_c^*i_c:C\to C,\qquad H=\mu_C\Delta_C.
$$
The color $c$ labels the actual free window, and is not a summed index. The specialization $O_{aa}^{a}$ does not cover all colored configurations. Let $b_{ab}=\epsilon_a\mu_{aba}$ and $d_{ab}=\Delta_{aba}\eta_a$; let $d_C=\Delta_C\eta_C$.

Every identity used below must hold in the formal symmetric monoidal presentation of the surface generators, not merely after evaluating in finite-dimensional vector spaces. A scalar test by nondegenerate vector-space pairings cannot establish a surface diffeomorphism before the classification theorem. A valid supplier can prove the identities by composing formal equalities with pairings/copairings and using the snakes: the operation of bending a strand is injective on Hom sets because its inverse unbending cancels a snake. The parent is preparing this formal scope for A6. Nothing in this file claims that an uncorrected pointwise A6 argument already has that scope.

## Explicit local rows

Each displayed formula includes the domain where its indices might otherwise be ambiguous. Reflected rows are separately typed. Tensor symmetries restore the external marked slot order and retain the identity of each interval factor.

| Stage / attachment | Directed replacement and type |
|---|---|
| I, open unit | $\eta_a\mapsto i_a\eta_C:k\to A_{aa}$. |
| I, open counit | $\epsilon_a\mapsto\epsilon_Ci_a^*:A_{aa}\to k$. |
| II, adjacent open coproducts | $(\Delta_{abc}\otimes1_{cd})\Delta_{acd}\leftrightarrow(1_{ab}\otimes\Delta_{bcd})\Delta_{abd}:A_{ad}\to A_{ab}\otimes A_{bc}\otimes A_{cd}$, directed so the tracked coproduct moves down to the chosen continuation. |
| II(c)1, uncrossed return | $\mu_{acb}\Delta_{acb}\mapsto O_{ab}^{c}:A_{ab}\to A_{ab}$. This packages two vertices and remembers the window color. |
| II(c)2, crossed return | $\mu_{aba}\tau_{ba,ab}\Delta_{bab}\mapsto i_ai_b^*:A_{bb}\to A_{aa}$. |
| II(c)3, left cozipper output | $(i_a^*\otimes1_{ab})\Delta_{aab}\mapsto(1_C\otimes\mu_{aab})(1_C\otimes i_a\otimes1_{ab})(d_C\otimes1_{ab}):A_{ab}\to C\otimes A_{ab}$. |
| II(c)3, right cozipper output | $(1_{ab}\otimes i_b^*)\Delta_{abb}\mapsto(\mu_{abb}\otimes1_C)(1_{ab}\otimes i_b\otimes1_C)(1_{ab}\otimes d_C):A_{ab}\to A_{ab}\otimes C$. |
| II(c)4, left Frobenius attachment | $(1_{ab}\otimes\mu_{bcd})(\Delta_{abc}\otimes1_{cd})\mapsto\Delta_{abd}\mu_{acd}:A_{ac}\otimes A_{cd}\to A_{ab}\otimes A_{bd}$. |
| II(c)4, right Frobenius attachment | $(\mu_{abc}\otimes1_{cd})(1_{ab}\otimes\Delta_{bcd})\mapsto\Delta_{acd}\mu_{abd}:A_{ab}\otimes A_{bd}\to A_{ac}\otimes A_{cd}$. |
| II(c)5, window on the left output | $(O_{ab}^{s}\otimes1_{bc})\Delta_{abc}\leftrightarrow\Delta_{abc}O_{ac}^{s}:A_{ac}\to A_{ab}\otimes A_{bc}$. |
| II(c)5, window on the right output | $(1_{ab}\otimes O_{bc}^{s})\Delta_{abc}\leftrightarrow\Delta_{abc}O_{ac}^{s}:A_{ac}\to A_{ab}\otimes A_{bc}$. |
| III(a)1, product reassociation | $\mu_{acd}(\mu_{abc}\otimes1_{cd})\leftrightarrow\mu_{abd}(1_{ab}\otimes\mu_{bcd}):A_{ab}\otimes A_{bc}\otimes A_{cd}\to A_{ad}$. Orient for the tracked product to move upward, increasing its downstream height. |
| III(a)2, window on the first input | $\mu_{abc}(O_{ab}^{s}\otimes1_{bc})\leftrightarrow O_{ac}^{s}\mu_{abc}:A_{ab}\otimes A_{bc}\to A_{ac}$. |
| III(a)2, window on the second input | $\mu_{abc}(1_{ab}\otimes O_{bc}^{s})\leftrightarrow O_{ac}^{s}\mu_{abc}:A_{ab}\otimes A_{bc}\to A_{ac}$. |
| III(a)3, two zipper inputs | $\mu_{aaa}(i_a\otimes i_a)\mapsto i_a\mu_C:C\otimes C\to A_{aa}$. Both inputs being diagonal forces the same color $a$. |
| III(b)1, window before cozipper | $i_a^*O_{aa}^{s}\mapsto W_si_a^*:A_{aa}\to C$. Here $s$ is arbitrary; this is stronger than only $s=a$. |
| III(b)2, cozipper after zipper | $i_a^*i_a\mapsto W_a:C\to C$. |
| III(b)3 | The two II(c)3 rows; these remove an open coproduct immediately before a cozipper. |
| III(c), move a window downstream past a coproduct, left output | $\Delta_{abc}O_{ac}^{s}\mapsto(O_{ab}^{s}\otimes1_{bc})\Delta_{abc}:A_{ac}\to A_{ab}\otimes A_{bc}$. The tracked window now has the left output continuation and loses the coproduct from its downstream height. |
| III(c), move a window downstream past a coproduct, right output | $\Delta_{abc}O_{ac}^{s}\mapsto(1_{ab}\otimes O_{bc}^{s})\Delta_{abc}:A_{ac}\to A_{ab}\otimes A_{bc}$. Choose this branch when following that continuation; the window color $s$ is retained. |
| III(c), move a window downstream past a product from its first input | $\mu_{abc}(O_{ab}^{s}\otimes1_{bc})\mapsto O_{ac}^{s}\mu_{abc}:A_{ab}\otimes A_{bc}\to A_{ac}$. This is the forward III(a)2 row. |
| III(c), move a window downstream past a product from its second input | $\mu_{abc}(1_{ab}\otimes O_{bc}^{s})\mapsto O_{ac}^{s}\mu_{abc}:A_{ab}\otimes A_{bc}\to A_{ac}$. |
| VI(b)1, zipper centrality | $\mu_{aab}(i_a\otimes1_{ab})\leftrightarrow\mu_{abb}(1_{ab}\otimes i_b)\tau_{C,A_{ab}}:C\otimes A_{ab}\to A_{ab}$. This changes the endpoint at which the closed input is attached, not its marked slot. |
| VI(b)2, zipper through a product chain | Apply III(a)1 to reassociate the next two open product vertices, then VI(b)1 to move the zipper to the next branch. This is a typed two-step replacement for any consecutive colors $a,b,c$. It does not by itself handle VI(b)3. |
| VII(b), closed associativity | $\mu_C(\mu_C\otimes1)\leftrightarrow\mu_C(1\otimes\mu_C):C^{\otimes3}\to C$, directed for the tracked product to move upward. |
| VII(b), left unit | $\mu_C(\eta_C\otimes1)\mapsto1_C:C\to C$. |
| VII(b), right unit | $\mu_C(1\otimes\eta_C)\mapsto1_C:C\to C$. |
| VII(c), closed return | $\mu_C\Delta_C\mapsto H:C\to C$; $\mu_C\tau\Delta_C\mapsto H$ by closed commutativity. |
| VII(d), left Frobenius attachment | $(1\otimes\mu_C)(\Delta_C\otimes1)\mapsto\Delta_C\mu_C:C^{\otimes2}\to C^{\otimes2}$. |
| VII(d), right Frobenius attachment | $(\mu_C\otimes1)(1\otimes\Delta_C)\mapsto\Delta_C\mu_C:C^{\otimes2}\to C^{\otimes2}$. |
| VII(e), window on first input | $\mu_C(W_s\otimes1)\mapsto W_s\mu_C:C^{\otimes2}\to C$. |
| VII(e), window on second input | $\mu_C(1\otimes W_s)\mapsto W_s\mu_C:C^{\otimes2}\to C$. |
| VII(f), handle on first input | $\mu_C(H\otimes1)\mapsto H\mu_C:C^{\otimes2}\to C$. |
| VII(f), handle on second input | $\mu_C(1\otimes H)\mapsto H\mu_C:C^{\otimes2}\to C$. |
| VIII(c)1, adjacent closed coproducts | $(\Delta_C\otimes1)\Delta_C\leftrightarrow(1\otimes\Delta_C)\Delta_C:C\to C^{\otimes3}$, directed to lower the tracked coproduct. |
| VIII(c)2, first counit | $(\epsilon_C\otimes1)\Delta_C\mapsto1_C:C\to C$. |
| VIII(c)2, second counit | $(1\otimes\epsilon_C)\Delta_C\mapsto1_C:C\to C$. |
| VIII(c)3, window on first output | $(W_s\otimes1)\Delta_C\mapsto\Delta_CW_s:C\to C^{\otimes2}$. |
| VIII(c)3, window on second output | $(1\otimes W_s)\Delta_C\mapsto\Delta_CW_s:C\to C^{\otimes2}$. |
| VIII(c)4, handle on first output | $(H\otimes1)\Delta_C\mapsto\Delta_CH:C\to C^{\otimes2}$. |
| VIII(c)4, handle on second output | $(1\otimes H)\Delta_C\mapsto\Delta_CH:C\to C^{\otimes2}$. |
| IX, window/handle inversion | $W_sH\leftrightarrow HW_s:C\to C$, directed to put every window before every handle in the composite. |
| IX, reorder differently colored windows | $W_sW_t\leftrightarrow W_tW_s:C\to C$. This preserves both colors. |

For the II(c)3 rows the equality can be derived without vector-space testing. For example, Frobenius plus the unit gives $\Delta_{aab}=(1_{aa}\otimes\mu_{aab})(d_{aa}\otimes1_{ab})$. Apply $i_a^*$ to its first factor and use the copairing transport $(i_a^*\otimes1_{aa})d_{aa}=(1_C\otimes i_a)d_C$. The reflected formula follows from $\Delta_{abb}=(\mu_{abb}\otimes1_{bb})(1_{ab}\otimes d_{bb})$ and $(1_{bb}\otimes i_b^*)d_{bb}=(i_b\otimes1_C)d_C$. These are formal equalities of composites. The colored window slides need the full indexed formal A6 supplier, including arbitrary $s$.

## What the finite incidence enumeration actually says

For the output of an open coproduct, the next nonidentity elementary vertex can be an open coproduct, an open product, an open counit, or a cozipper. A zipper cannot be an immediate neighbor on such an output because its domain is $C$. Closed generators likewise cannot be adjacent there. A target interval is excluded after bending to open source and closed target. Open counits are excluded by I. When both outputs enter the same product, there are two distinct possibilities: uncrossed $O_{ab}^s$ and crossed Cardy. When exactly one enters a product, the left and right II(c)4 rows apply. If a packaged open window is treated as a vertex, its two positions are precisely II(c)5. This gives the true finite II incidence list. The three residual configurations in LP (3.101) are a product on one branch with a possible return from the other branch (two reflected positions), or a coproduct on a branch; they are not a free terminal open-coproduct tail at the exterior target.

For the input of an open product, immediate predecessors are an open product, open coproduct, unit, zipper, or packaged open window, or an external input. A cozipper cannot be a direct predecessor because its output is $C$. Product, window and double-zipper cases are covered above; coproduct cases require applying the appropriate II table with attention to whether the legs reconverge. This last observation is not an independent proof that every simultaneous normalization terminates or preserves the claimed residual forms.

For an input of a closed product after VI, immediate predecessors are a closed product, closed coproduct, closed unit, cozipper, window or handle, or an external input. External closed inputs are excluded by bending. The table deals with products, coproducts, units, windows and handles; cozipper outputs are retained as normal terminals. There are no other elementary output types equal to $C$ after zippers have been removed.

For an output of a closed coproduct after VI–VII, immediate successors are a closed coproduct, closed product, counit, window or handle, or an external output. A zipper successor has been removed in VI. Closed products and reconverging handles in the disallowed orientation must be excluded by the exact VII residual configuration argument; that argument cannot be replaced merely by listing the generator types. After those exclusions the VIII rows cover the remaining cases and external outputs terminate the tree.

## Exact remaining obligations

1. Integrate the formal sandwich identity supplied in `A8-IV-VI-formal-macro-replacements.md` for LP IV(b)2. The new proof bypasses the source's rotations by an exact Frobenius/copairing/Cardy calculation, giving the complete deletion equality in both return positions.
2. Integrate the two complete cozipper-return chains in that file for IV(b)3, including their changed cozipper basepoint colors. Still show that those and the sandwich return configurations are exhaustive after III and the minimum-**downstream**-height choice.
3. Integrate the fully formal bent module identity in that file for VI(b)3. The completed equality removes the last zipper at a cozipper without vector-space scalar testing. Still connect its applicability to every residual product cycle after the finite zipper push.
4. Bind each tracked increasing-height phase to a fixed elementary or packaged generator-count convention and verify its moves do not increase that bound. The formal pairings used during a macro derivation can be temporary, but its completed endpoints must satisfy the asserted bound. Explain how normalizing all occurrences preserves the already attained residual forms, or use a justified outer induction instead of asserting persistence.
5. After IV deletes a coproduct, restart II–III exactly as LP IV(c)–(e), and prove the restarts never increase the number of open coproduct occurrences under the chosen packaging convention. Scalar evaluations cannot replace the formal equality used at deletion.
6. Finish VII/VIII residual-form exclusions with the actual adjacency words, then X–XI empty-source/target cases. In particular, the surviving unit is an **initial** unit when the whole connected component has empty source; the surviving counit is a **terminal** counit when it has empty target. A statement that a counit's own source is the empty word is ill-typed.

These are local authoring gaps in an established theorem, not an open mathematical problem. This work product does not permit a narrower closed/uncolored substitute or a ready assertion for A8–A10.
