# A8 complete graph reduction proposal

This replaces the unstable simultaneous I–XI sweep by an explicit finite graph reduction using the same elementary relations and the complete typed local table. It preserves the full colored, boundary-relative statement, including empty black boundary. It is a proposal for parent review and integration, not a native readiness record. A6 must have the parent's formal symmetric-monoidal scope and faithful bending proof: identities of scalar evaluations alone cannot supply the equalities below.

The table is appended after this proof. Its LP stage labels document the correspondence of individual moves; the proof below uses the stronger first-event deletion and spanning-tree procedure, so no simultaneous sweep or bounded-height assertion is needed for termination. The complete hard macro calculations are supplied inline in steps 2.2–2.4. In the formulas $1_{ab}$ means $1_{A_{ab}}$, all associators/unitors follow A2, and tensor permutations keep each marked factor intact. The formal notation $\sum p\otimes q$ names output wires of a coproduct, not an appeal to vector-space elements.

## Proof

**Given:** A compact oriented colored surface with the exact marked black boundary and collars of [F1], and its finite word in the **formal symmetric monoidal presentation** of the ten surface generators and elementary relations. No chosen finite-dimensional linear evaluation is assumed to detect equality of surfaces.

1.1 Bend every outgoing open interval into an incoming interval with reversed endpoint order, and every incoming closed circle into an outgoing circle, keeping the original slot markings and the explicit symmetry maps. The formal snakes give inverse unbending; geometrically these are the boundary-relative pairing/copy-pairing surfaces of [F3]–[F4]. It suffices to treat a connected surface with open source and closed target. By [F2] it has a finite expression in the ten generators. Delete its open units and counits by $\eta_a=i_a\eta_C$ and $\epsilon_a=\epsilon_Ci_a^*$. This deletes one open extremum at a time and creates none. Expand every packaged open window $O_{ab}^{s}=\mu_{asb}\Delta_{asb}$ when counting open coproducts. The resulting expression is a finite directed acyclic graph of typed wires and generator occurrences. Acyclicity follows from its expression by tensor and composition, not from any assertion about the undirected graph. [given, F2, F3, F4, construct]

1.2 If open coproducts remain, choose one $\Delta_{abc}:A_{ac}\to A_{ab}\otimes A_{bc}$ with no open coproduct in its strict directed downstream graph. Such a choice exists because the graph is finite and acyclic. This is the consequence for which LP uses a minimum **downstream** height; the source's height convention is toward the target. (The original carrier's upstream-height convention reverses the required inequalities.) Until its outputs encounter a cozipper, their open continuation wires cannot branch: the only vertex with multiple open outputs is an open coproduct, absent downstream by the choice. Each path therefore passes through a chain of open products, eventually reaching either the other path at a product, or a cozipper. There is no open exterior target, no remaining open counit, and no other generator accepting an open wire. In particular a zipper cannot be the next vertex on an open wire, since its domain is $C$. [step 1.1, F2, F3, construct]

1.3 Choose a first event consisting either of the first merge of these two open paths or of a cozipper reached by either path. More precisely take a minimal such event in any topological ordering of the finite downstream graph. Before this event, every additional input feeding the open-product paths is independent of the two distinguished coproduct outputs. If an additional input depended on one of them through an open path, that would already be a merge; if it depended on one through a closed path, that path would already have passed through a cozipper. Either possibility contradicts the first-event choice. Thus all intervening side inputs can be retained as independent typed input blocks, even if their upstream expressions share other suppliers or contain coproducts that are not downstream of the marked one. Indexed associativity flattens each path into its actual ordered word without changing that order. We can therefore isolate the marked coproduct and this first event as a subexpression with independent side-input blocks and with the rest of the original expression attached to its output ports. The three finite possibilities are an uncrossed merge, a crossed merge, or a cozipper event, with the two left/right cozipper positions distinct. [step 1.2, F2, construct]

2.1 For an uncrossed merge the flattened product has the form $L p Y q R$, where $\Delta_{abc}(x)=\sum p_{ab}\otimes q_{bc}$ and $Y$ has type $A_{bb}$. The outer words $L,R$ remain in the context. Associativity isolates the sandwich $pYq$. For a crossed merge the flattened word has the form $L q Y p R$, where $Y$ has type $A_{ca}$; again isolate the middle sandwich. These are the two possible orders of the two distinguished wires in an ordered product. At a cozipper event the flattened input has the form $L p R$, or $L q R$. The cyclic cozipper identity moves the external block $L$ round the trace, yielding $pY$ or $Yq$, with $Y$ the indexed product of the remaining side inputs in its preserved cyclic order. Thus the four typed identities in the following steps exhaust the first-event configurations, including paths of arbitrary finite length. [step 1.3, F3, F4, algebra]

2.2 The uncrossed sandwich has the formal identity
$$
\sum pYq=\mu_{acc}(x,i_ci_b^*(Y)):A_{ac}\otimes A_{bb}\to A_{ac}.
$$
Here is its full derivation. Frobenius and the unit give $\Delta_{abc}=(\mu_{acb}\otimes1_{bc})(1_{ac}\otimes d_{cb})$, with $d_{cb}=\Delta_{cbc}\eta_c$. Write the copairing output wires as $r:A_{cb},q:A_{bc}$. Associativity changes $((xr)Y)q$ to $x((rY)q)$. The copairing symmetry is $d_{cb}=\tau_{bc,cb}d_{bc}$, and Frobenius gives $\Delta_{bcb}=(1_{bc}\otimes\mu_{cbb})(d_{bc}\otimes1_{bb})$. Consequently the formal composite with output string $\sum(rY)q$ is exactly $\mu_{cbc}\tau_{bc,cb}\Delta_{bcb}$, which is $i_ci_b^*$ by the colored Cardy equation. This proves the identity as an equality of composites. For a crossed sandwich, the first Frobenius identity with labels $(a,b,c,a)$ is
$$
\Delta_{aba}\mu_{aca}=(1_{ab}\otimes\mu_{bca})(\Delta_{abc}\otimes1_{ca}).
$$
Compose with $\mu_{bab}\tau_{ab,ba}$. Colored Cardy then gives the separately typed identity
$$
\sum qYp=i_bi_a^*\mu_{aca}(x,Y):A_{ac}\otimes A_{ca}\to A_{bb}.
$$
Both replacements remove the marked open coproduct and create no open coproduct at their completed endpoints. Reflected external positions are handled by tensoring these equalities with $L,R$ and composing with their ordered products. If the uncrossed side word is empty, take $Y=\eta_b$ in the derivation and simplify $i_b^*\eta_b=i_b^*i_b\eta_C=W_b\eta_C$; the endpoint is $\mu_{acc}(1_{ac}\otimes i_cW_b\eta_C)$ and has no open unit or coproduct. If the crossed side word is empty, its type $A_{ca}$ forces $a=c$; use $Y=\eta_a$ and the unit equation to obtain $i_bi_a^*x$, precisely Cardy. No open unit is retained in either result. [step 2.1, F3, F4, algebra]

2.3 For a left cozipper event the exact subexpression, after the cyclic rotation of step 2.1, is
$$
F_{abc}:=(i_a^*\mu_{aba}\otimes1_{bc})(1_{ab}\otimes\tau_{bc,ba})(\Delta_{abc}\otimes1_{ba}):A_{ac}\otimes A_{ba}\to C\otimes A_{bc}.
$$
Indexed cyclicity $i_a^*\mu_{aba}=i_b^*\mu_{bab}\tau_{ab,ba}$ and tensor naturality give
$$
F_{abc}=(i_b^*\otimes1_{bc})(\mu_{bab}\otimes1_{bc})(1_{ba}\otimes\Delta_{abc})\tau_{ac,ba}.
$$
The second Frobenius identity with labels $(b,a,b,c)$ changes the middle two factors to $\Delta_{bbc}\mu_{bac}$. Finally the copairing transport yields
$$
F_{abc}=(1_C\otimes\mu_{bbc})(1_C\otimes i_b\otimes1_{bc})(d_C\otimes1_{bc})\mu_{bac}\tau_{ac,ba}.
$$
For clarity the transport is formal: $\Delta_{bbc}=(1_{bb}\otimes\mu_{bbc})(d_{bb}\otimes1_{bc})$, and $(i_b^*\otimes1_{bb})d_{bb}=(1_C\otimes i_b)d_C$. Thus no open coproduct remains at the completed endpoint. The output types are still $C\otimes A_{bc}$, so any downstream continuation, including a later zipper or reconnection, is attached unchanged. [step 2.1, F3, F4, algebra]

2.4 The right cozipper position has type $A_{ac}\otimes A_{cb}\to A_{ab}\otimes C$ and the composite
$$
G_{abc}:=(1_{ab}\otimes i_c^*\mu_{cbc})(1_{ab}\otimes\tau_{bc,cb})(\Delta_{abc}\otimes1_{cb}).
$$
Cyclicity changes $i_c^*(Yq)$ to $i_b^*(qY)$. The first Frobenius identity with labels $(a,b,c,b)$ then gives
$$
G_{abc}=(1_{ab}\otimes i_b^*)\Delta_{abb}\mu_{acb}
$$
$$
=(\mu_{abb}\otimes1_C)(1_{ab}\otimes i_b\otimes1_C)(1_{ab}\otimes d_C)\mu_{acb}.
$$
The last equality uses $\Delta_{abb}=(\mu_{abb}\otimes1_{bb})(1_{ab}\otimes d_{bb})$ and $(1_{bb}\otimes i_b^*)d_{bb}=(i_b\otimes1_C)d_C$. Empty side words give the corresponding direct cozipper transport after the unit is canceled. Every external interval type is retained; the change from cozipper basepoint $c$ to $b$ is precisely the stated cyclic identity. [step 2.1, F3, F4, algebra]

2.5 Replace the first-event subexpression by the applicable equality from steps 2.2–2.4, then repeat the selection of step 1.2. Each completed replacement deletes one actual open coproduct occurrence and creates none; arbitrary side-input and downstream blocks are attached by tensor and composition, so they are not duplicated. The finite number of actual open coproduct vertices is therefore a strictly decreasing outer measure. This terminates with no open coproduct. It also eliminates every packaged open window, because its coproduct was included in that count. This gives the full purpose of LP stages II–IV without assuming that simultaneously normalized configurations persist through later rewrites, and without a generator-count bound for a sweep that might expand macros. [step 1.2, step 1.3, step 2.2, step 2.3, step 2.4, induction]

3.1 In the resulting expression every connected subgraph consisting of open wires and open products is a finite product tree: products have one output, and no open coproduct can branch an open wire. Its leaves are exterior incoming intervals or zipper outputs; its root is a cozipper, because there is no exterior outgoing interval or open counit. Unary identity segments are ignored. A component with no product is one leaf feeding one cozipper. For each tree, associativity flattens its leaf products in their actual cyclic boundary order. If a zipper is its sole leaf, $i_a^*i_a=W_a$ removes it. Otherwise indexed centrality and associativity move a selected zipper leaf $i_s(c)$ successively through the adjacent open products to the basepoint of the cozipper. The precise centrality equality is
$$
\mu_{aab}(i_a\otimes1_{ab})=\mu_{abb}(1_{ab}\otimes i_b)\tau_{C,A_{ab}}:C\otimes A_{ab}\to A_{ab}.
$$
Removing the zipper from a cyclic word leaves a correctly indexed cyclic word of the remaining leaves: its two neighboring free labels had been the same basepoint color. Thus it reduces to a terminal zipper/product/cozipper configuration with one remaining diagonal open input. [step 2.5, F2, F3, F4, construct]

3.2 The terminal equality is
$$
i_a^*\mu_{aaa}(i_a\otimes1_{aa})=\mu_C(1_C\otimes i_a^*):C\otimes A_{aa}\to C.
$$
To prove it formally, bend its target by $b_C$, retaining a full additional $C$ input. On $C\otimes C\otimes A_{aa}$, pairing adjunction, invariance, the zipper algebra equation, pairing adjunction again, and closed invariance give in order
$$
b_C(1\otimes i_a^*\mu_{aaa}(i_a\otimes1))=b_a(i_a\otimes\mu_{aaa}(i_a\otimes1))=b_a(\mu_{aaa}(i_a\otimes i_a)\otimes1)
$$
$$
=b_a(i_a\mu_C\otimes1)=b_C(\mu_C\otimes i_a^*)=b_C(1\otimes\mu_C(1\otimes i_a^*)).
$$
Faithful unbending cancels the closed snake and proves the equality. Centrality gives the reflected input order $i_a^*\mu_{aaa}(1\otimes i_a)=\mu_C(i_a^*\otimes1)$. Each completed removal deletes one zipper and creates none; each preceding push crosses a finite number of products on its unique path to the cozipper. Repeating terminates by the number of zipper leaves. No open coproduct or extremum is created. [step 3.1, F3, F4, algebra]

3.3 The surviving open trees have only exterior incoming interval leaves and one cozipper root. They are precisely the components of the boundary carrying the marked incoming intervals: a product disk concatenates successive interval slots along their common free-edge label, and the cozipper closes that ordered string into one boundary cycle. This follows directly from the generator boundary words in [F3], rather than from a proposed classification theorem. Each tree therefore has the form $T_j=i_{a_0}^*\mu_{a_0a_1\cdots a_q}^{(q)}$ with $a_q=a_0$, keeping its full marked slot and endpoint-color sequence. The cyclic cozipper identity equates all starting points of this same cycle. A cycle cannot be split or reconnected by any preceding replacement because every replacement is an actual boundary-relative equality. Restore their prescribed least-slot order by the explicit symmetry $P$ of [F5]. [step 3.2, F3, F4, F5, construct]

4.1 It remains to normalize a connected graph made entirely of closed Frobenius generators, the closed inputs from these $r$ open-cycle trees, windows $W_s$, and the $n$ exterior closed outputs. The following finite closed-spider fusion proves the purposes of LP stages VII–VIII directly. Write $S_{mn}=\Delta_C^{[n]}\mu_C^{[m]}$ for $m,n\ge0$. If one output of $S_{mn}$ is glued to one input of $S_{pq}$, where $n,p\ge1$ and $m,q\ge0$, then, after retaining the other ports in their marked order, the fusion equality is
$$
(1_C^{\otimes(n-1)}\otimes S_{pq})(S_{mn}\otimes1_C^{\otimes(p-1)})=S_{m+p-1,n+q-1},
$$
with the tensor permutations placing the sewn ports last and first. For completeness this identity is valid in every orientation: bend all remaining ports to inputs. Define $t_k=\epsilon_C\mu_C^{[k]}:C^{\otimes k}\to k$, including $t_0=\epsilon_C\eta_C$. Associativity and commutativity make $t_k$ invariant under all input permutations. Pairing invariance identifies the bent form of every $S_{mn}$ with $t_{m+n}$. Contracting one input of $t_u$ with one of $t_v$ through $d_C$ gives $t_{u+v-2}$ for $u,v\ge1$: reassociate the uncontracted inputs into their two products; pairing invariance moves those products to the two free legs of the contracted $b_C$ pairings, and the snake contracts the middle $d_C$ to the single pairing of the two products. When one list is empty its product is $\eta_C$ and the same equality is the unit/counit equation. This supplies all induction base and empty cases, and proves fusion after faithful unbending. Thus it is a formal consequence of associativity, commutativity, Frobenius, unit/counit and the snakes, not an assumption about all surface morphisms. [step 3.3, F3, F4, F5, algebra]

4.2 There is also a self-gluing equality: joining any one input and output port of $S_{m+1,n+1}$ produces $\Delta_C^{[n]}H\mu_C^{[m]}$, where $H=\mu_C\Delta_C$. Indeed bend its remaining ports to inputs; the self-gluing inserts $d_C$ into two arguments of $t_{m+n+2}$. Commutativity and associativity put those two arguments next to each other; their product is $\mu_Cd_C=H\eta_C$. Frobenius gives $H\mu_C=\mu_C(H\otimes1)=\mu_C(1\otimes H)$, so the contracted map is $\epsilon_CH\mu_C^{[m+n]}$. Faithful unbending gives the displayed equality. Iterating a self-gluing inserts one further $H$ each time; no additional generators or unreduced cases are hidden in this formula. [step 4.1, F4, algebra]

4.3 Keep each colored window as a unary vertex and choose an undirected spanning tree of the finite connected closed graph, treating the marked input/output ports as external legs. A window slides through every closed product and coproduct by the typed window relations, so it can be carried along the chosen tree to a distinguished central strand while retaining its label. Its passage through a unit, counit or an edge with a bent orientation is the same formal relation after bending with a snake. Contract the spanning-tree edges between the Frobenius vertices by step 4.1; each contraction lowers the number of vertices by one and never identifies or permutes marked external slots. If needed insert an identity spider $S_{11}$ to give a vertex to a component consisting initially of a single strand. Every remaining internal edge now self-glues two ports of the one spider, so apply step 4.2 once per such edge. This algorithm terminates by the finite tree-edge count followed by the finite remaining-edge count. It gives
$$
\Delta_C^{[n]}H^g W_{s_1}\cdots W_{s_w}\mu_C^{[r]}.
$$
The window operators commute because their formal closed-module slide identifies each with multiplication by its own state $W_s\eta_C$ in the commutative object $C$; the same argument slides them across $H$. Hence their order is immaterial, while each color and multiplicity is retained. This is the finite inversion-ordering purpose of LP IX without a repeated normalization sweep. [step 4.1, step 4.2, F4, construct]

4.4 The exponent $g$ is the genus of the original component. After window vertices are suppressed, a connected graph with $v$ vertices and $e$ internal edges has $e-v+1$ non-tree edges. Fusing one tree seam between two genus-zero spiders makes one genus-zero spider, as its planar cut models show. Closing two of its circle ports leaves Euler characteristic unchanged and lowers the number of full boundary components by two, so it raises genus by one. Each window $W_s=i_s^*i_s$ is an annulus-with-window: its genus is zero, it contributes one free boundary circle of color $s$, and it changes Euler characteristic by minus one while leaving the graph's first Betti number unchanged as a unary insertion. Each open tree $T_j$ is genus zero and replaces one closed input circle by exactly one mixed open boundary cycle. Thus the surface built by the algorithm has exactly the original boundary partition and boundary cycles, the original free-window multiplicities, and genus $e-v+1=g$. These assertions also follow from the fact that every contraction was an actual boundary-relative equality. No colored arc is identified with a different color. [step 3.3, step 4.3, F1, F3, F4, construct]

5.1 In the empty cases, $r=0$ means there is no exterior source after bending, and the initial closed spider product is precisely $\mu_C^{[0]}=\eta_C$; $n=0$ means there is no exterior target, and its final closed spider coproduct is precisely $\Delta_C^{[0]}=\epsilon_C$. These are already included in the fusion and self-gluing formulas, rather than inferred from an ill-typed assertion that a counit's own domain is empty. In particular a connected component with no black boundary is exactly $\epsilon_CH^gW_M\eta_C$. Combining steps 3.3–4.4, the resulting full composite is exactly the candidate word $N(M)$ in [F5]. Unbend the original marked slots using the inverse snakes of step 1.1. [step 1.1, step 3.3, step 4.1, step 4.2, step 4.3, step 4.4, F5, algebra]

5.2 Every finite transformation above is a formal consequence of the elementary boundary-relative equalities of [F3] and formally derived identities of [F4]; it therefore gives equality of actual surface morphisms. Hence $[M]=[N(M)]$. If two connected surfaces have the listed identical marked data, [F5] gives the same word for both, so they are equal. Conversely, an orientation-preserving diffeomorphism relative to all black parameterizations preserves each component, its genus, its colored free circles, and the cyclic orders and complete color sequences of the marked intervals. The same data are therefore necessary. For a disconnected surface apply the finite argument separately to each connected component, tensor the resulting words, and restore the original marked source and target orders by their symmetry cylinders. This proves both the full colored classification and the stated tensor formula, including components without marked black slots. [step 5.1, F1, F3, F4, F5] ∎

## Typed local move table

The complete finite table from the companion work product is appended below. Its stage headings are a cross-reference to the source proof, not a requirement to run the old simultaneous sweep. The proof above supplies a terminating order of use and the missing nonlocal return identities. In particular it retains both corrected colored Frobenius directions, both cozipper branches, all four positions of an open window, and all closed unit/counit and window/handle positions.

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
