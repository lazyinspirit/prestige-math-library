# Formal replacements for the difficult IV and VI macros

This supplements the typed table. It discharges its algebraic macro obligations IV(b)2, IV(b)3, and VI(b)3 by different complete formal chains. The remaining **global stage-order, exhaustive residual configurations, and termination bookkeeping** in that table still need integration and verification; this file alone is not a complete A8 proof. All identities below hold in a symmetric monoidal category satisfying the indexed axioms and snakes; they are not inferred from evaluations in vector spaces.

Canonical associators are suppressed as in A2. A displayed tensor permutation acts on precisely the named ordered factors. Products such as $xy$ are shorthand for the indicated indexed multiplication. Expressions $\sum p\otimes q$ below are **string-expression notation** for an existing coproduct or copairing and its output wires; no element or linear-sum semantics is required for the formal composite proofs.

## IV(b)2: a return through an open product

For $x$ on a wire $A_{ac}$ and $y$ on a wire $A_{bb}$, define the formal composite
$$
S_{abc}:=(\mu_{abc})(\mu_{abb}\otimes1_{bc})(1_{ab}\otimes\tau_{bc,bb})(\Delta_{abc}\otimes1_{bb}):A_{ac}\otimes A_{bb}\to A_{ac}.
$$
Thus $S_{abc}(x,y)$ denotes the string $\sum p y q$ with $\Delta_{abc}(x)=\sum p_{ab}\otimes q_{bc}$. Its replacement is
$$
S_{abc}=\mu_{acc}(1_{ac}\otimes i_c i_b^*).
$$
Here is the full formal derivation.

1. Frobenius and the right unit give the equality of maps $A_{ac}\to A_{ab}\otimes A_{bc}$
$$
\Delta_{abc}=(\mu_{acb}\otimes1_{bc})(1_{ac}\otimes d_{cb}),\qquad d_{cb}:=\Delta_{cbc}\eta_c.
$$
Indeed apply the second typed Frobenius identity to the product $\mu_{acc}(1_{ac}\otimes\eta_c)=1_{ac}$, with intermediate color $b$.
2. Insert this expression into $S_{abc}$. Indexed associativity twice turns the string $\sum ((xr)y)q$ into $\sum x((ry)q)$, with $d_{cb}$ wires $r:A_{cb},q:A_{bc}$. Every intermediate product has the types
$$
xr\in A_{ab},\quad (xr)y\in A_{ab},\quad ry\in A_{cb},\quad (ry)q\in A_{cc}.
$$
Consequently the whole composite is
$$
S_{abc}=\mu_{acc}(1_{ac}\otimes T_{cb}),
$$
where
$$
T_{cb}:=\mu_{cbc}(\mu_{cbb}\otimes1_{bc})(1_{cb}\otimes\tau_{bc,bb})(d_{cb}\otimes1_{bb}):A_{bb}\to A_{cc}.
$$
3. Symmetry of the indexed copairing is $d_{cb}=\tau_{bc,cb}d_{bc}$. Frobenius and the right unit give
$$
\Delta_{bcb}=(1_{bc}\otimes\mu_{cbb})(d_{bc}\otimes1_{bb}):A_{bb}\to A_{bc}\otimes A_{cb}.
$$
Naturality of the tensor flip therefore identifies the composite defining $T_{cb}$ with $\mu_{cbc}\tau_{bc,cb}\Delta_{bcb}$: both have the ordered output string $(ry)q$. This is a substitution of a formal copairing equality followed by a formal Frobenius equality.
4. The indexed Cardy equation gives
$$
T_{cb}=\mu_{cbc}\tau_{bc,cb}\Delta_{bcb}=i_ci_b^*:A_{bb}\to A_{cc}.
$$
Substitution proves the replacement. It removes the distinguished open coproduct, replacing the return by a zipper and cozipper attached to a single open product. It creates no open coproduct at its completed endpoint.

To obtain the reflected return position, reflect every open wire: $A_{uv}\mapsto A_{vu}$, reverse product order, and replace $\Delta_{uvw}$ by $\tau\Delta_{wvu}$ and $\mu_{uvw}$ by $\mu_{wvu}\tau$. This is an explicitly defined operation on each composite, not a change of endpoint labels on a fixed wire. Associativity, the two separately typed Frobenius axioms, the two snakes and cyclic trace are preserved under this operation, and Cardy is preserved using the copairing flip and cyclicity. Applying the operation to each of the four displayed equalities gives the other return position. Concretely its string is $\sum q y p$ for $x:A_{ca}$, $\Delta_{cba}(x)=\sum q_{cb}\otimes p_{ba}$, and $y:A_{bb}$; the result is $\mu_{caa}(1_{ca}\otimes i_ai_b^*)(x,y)$. Thus its distinct endpoint type is $A_{ca}\otimes A_{bb}\to A_{ca}$ and its window color remains $b$.

## IV(b)3: a return branch ending at a cozipper

Define
$$
F_{abc}:=(i_a^*\mu_{aba}\otimes1_{bc})(1_{ab}\otimes\tau_{bc,ba})(\Delta_{abc}\otimes1_{ba}):A_{ac}\otimes A_{ba}\to C\otimes A_{bc}.
$$
In string notation $F_{abc}(x,y)=\sum i_a^*(p y)\otimes q$, where $x:A_{ac}$, $y:A_{ba}$ and $\Delta_{abc}(x)=\sum p_{ab}\otimes q_{bc}$. Its exact chain is
$$
F_{abc}=(i_b^*\otimes1_{bc})(\mu_{bab}\otimes1_{bc})(1_{ba}\otimes\Delta_{abc})\tau_{ac,ba}
$$
$$
=(i_b^*\otimes1_{bc})\Delta_{bbc}\mu_{bac}\tau_{ac,ba}
$$
$$
=(1_C\otimes\mu_{bbc})(1_C\otimes i_b\otimes1_{bc})(d_C\otimes1_{bc})\mu_{bac}\tau_{ac,ba}.
$$
The first equality is the indexed cyclic cozipper identity $i_a^*\mu_{aba}=i_b^*\mu_{bab}\tau_{ab,ba}$, with the untouched $A_{bc}$ wire carried by tensor naturality. The second is the second Frobenius identity with labels $(b,a,b,c)$:
$$
(\mu_{bab}\otimes1_{bc})(1_{ba}\otimes\Delta_{abc})=\Delta_{bbc}\mu_{bac}.
$$
The third is the left cozipper transport from the table, with endpoints $(b,c)$. Its types are, in order,
$$
A_{ac}\otimes A_{ba}\to A_{ba}\otimes A_{ac}\to A_{bc}\to C\otimes A_{bc}.
$$
The distinguished open coproduct has disappeared. The other branch $A_{bc}$ may be plugged into any downstream continuation throughout this equality; tensoring by and composing with that continuation preserves the equality and its colors. This handles the arbitrary box in LP's diagram without a hidden assumption that it is an identity.

The other cozipper branch has the separately typed formula $A_{ac}\otimes A_{cb}\to A_{ab}\otimes C$:
$$
G_{abc}:=(1_{ab}\otimes i_c^*\mu_{cbc})(1_{ab}\otimes\tau_{bc,cb})(\Delta_{abc}\otimes1_{cb}).
$$
It denotes $\sum p\otimes i_c^*(yq)$. Cyclicity gives $i_c^*(yq)=i_b^*(qy)$, then the first Frobenius identity with labels $(a,b,c,b)$ gives
$$
G_{abc}=(1_{ab}\otimes i_b^*)(1_{ab}\otimes\mu_{bcb})(\Delta_{abc}\otimes1_{cb})=(1_{ab}\otimes i_b^*)\Delta_{abb}\mu_{acb}.
$$
The reflected cozipper transport now gives
$$
G_{abc}=(\mu_{abb}\otimes1_C)(1_{ab}\otimes i_b\otimes1_C)(1_{ab}\otimes d_C)\mu_{acb}.
$$
Again no open coproduct remains at the endpoint. The named color of the transported cozipper changes from $c$ to $b$ by the explicit cyclic equality, while every external interval keeps its original type.

## VI(b)3: terminal zipper, product, cozipper

After pushing a zipper through the finite open product chain by centrality and associativity, its last open portion has type $C\otimes A_{aa}\to C$, or its reflected input order. The required equality is
$$
i_a^*\mu_{aaa}(i_a\otimes1_{aa})=\mu_C(1_C\otimes i_a^*).
$$
This is a formal module equality. It admits the following full proof using the faithful bending operation, not vector-space points. Let $b_a=\epsilon_a\mu_{aaa}$, $b_C=\epsilon_C\mu_C$. Bend the target $C$ of either proposed map by composing with $b_C$ and a new, untouched $C$ input on the left. The resulting maps have domain $C\otimes C\otimes A_{aa}$. The left one transforms as follows:
$$
b_C(1_C\otimes i_a^*\mu_{aaa}(i_a\otimes1_{aa}))
=b_a(i_a\otimes\mu_{aaa}(i_a\otimes1_{aa}))
$$
$$
=b_a(\mu_{aaa}(i_a\otimes i_a)\otimes1_{aa})
=b_a(i_a\mu_C\otimes1_{aa})
$$
$$
=b_C(\mu_C\otimes i_a^*)
=b_C(1_C\otimes\mu_C(1_C\otimes i_a^*)).
$$
The justifications, in order, are pairing adjunction, invariance of the open pairing (associativity), the zipper algebra equation, pairing adjunction again, and invariance of the closed pairing. These are equalities of maps on the full test object $C\otimes C\otimes A_{aa}$. Bending is injective because its formal inverse inserts $d_C$ and cancels the snake, so the original two maps are equal. For the other input order, centrality and the tensor flip give
$$
i_a^*\mu_{aaa}(1_{aa}\otimes i_a)=\mu_C(i_a^*\otimes1_C):A_{aa}\otimes C\to C.
$$
Thus a completed terminal elimination replaces one zipper by a closed multiplication and creates no new zipper. If the final product chain is an indexed cycle $A_{a_0a_1}\otimes\cdots\otimes A_{a_{q-1}a_0}$, associativity groups the open product into one $A_{a_0a_0}$ input; indexed centrality moves the zipper's attachment from one successive endpoint to the next until it is based at $a_0$. The same module equality applies with $a=a_0$. Each move keeps the cycle's full endpoint sequence; the closed input slot is restored by the explicit tensor symmetries. This proves the bent terminal case that a zipper-distance argument needs.

## Remaining global check

The three completed endpoint replacements above decrease respectively the number of open coproducts (IV) or the number of zippers (VI). They are therefore compatible with the required outer induction. They do not prove by themselves that every residual diagram reaches one of the named configurations under II–III, or that a repeated normalizing sweep preserves the generator-count convention needed by its increasing-height subphases. The parent must integrate those finite incidence/termination checks rather than change this file's status to a complete proof merely because the hard identities are now present.
