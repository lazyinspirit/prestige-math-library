# Exact A6 proof replacement prepared while native batch81 is live

No native output is changed by this proposal. Replace A6 step 1.2 with the following steps, after re-reading the drained current carrier. Subsequent step references require contract synchronization. All products and evaluations are over the given arbitrary field; no restriction on labels or semisimplicity is introduced.

1.2 The trace equation says $b_{ab}=b_{ba}\tau_{A_{ab},A_{ba}}$. To prove copairing symmetry explicitly, put $d_{ab}(1)=\sum_jp_j\otimes q_j$ and $d_{ba}(1)=\sum_kr_k\otimes s_k$. For arbitrary $x\in A_{ab}$ and $y\in A_{ba}$, contract each proposed tensor in $A_{ab}\otimes A_{ba}$ against
$\phi_y\otimes\psi_x$, where $\phi_y(t)=b_{ba}(y,t)$ and $\psi_x(t)=b_{ab}(x,t)$. The two contractions are respectively
$$
\sum_jb_{ba}(y,p_j)b_{ab}(x,q_j)=b_{ab}(x,y),
$$
$$
\sum_kb_{ba}(y,s_k)b_{ab}(x,r_k)
=\sum_kb_{ab}(s_k,y)b_{ab}(x,r_k)=b_{ab}(x,y).
$$
The first equality uses the second snake for $d_{ab}$; the second uses trace symmetry followed by the first snake for $d_{ba}$. By step 1.1 the maps $y\mapsto\phi_y$ and $x\mapsto\psi_x$ exhaust the two dual spaces. Their tensor products separate tensors, proving the typed equality $d_{ab}=\tau_{A_{ba},A_{ab}}d_{ba}:k\to A_{ab}\otimes A_{ba}$. The same proof gives $d_C=\tau_{C,C}d_C$.

1.3 For $a,b,c\in S$, the full copairing-invariance identity is the following equality of maps $A_{ab}\to A_{ac}\otimes A_{cb}$:
$$
\begin{aligned}
L_{ab}^{c}&:=(\mu_{abc}\otimes1_{A_{cb}})
\alpha^{-1}_{A_{ab},A_{bc},A_{cb}}
(1_{A_{ab}}\otimes d_{bc})\rho^{-1}_{A_{ab}}\\
&=\Delta_{acb}\\
&=(1_{A_{ac}}\otimes\mu_{cab})
\alpha_{A_{ac},A_{ca},A_{ab}}
(d_{ac}\otimes1_{A_{ab}})\lambda^{-1}_{A_{ab}}
=:R_{ab}^{c}.
\end{aligned}
$$
The first composite goes through $A_{ab}\otimes k$, $A_{ab}\otimes(A_{bc}\otimes A_{cb})$, $(A_{ab}\otimes A_{bc})\otimes A_{cb}$. The last goes through $k\otimes A_{ab}$, $(A_{ac}\otimes A_{ca})\otimes A_{ab}$, $A_{ac}\otimes(A_{ca}\otimes A_{ab})$. To prove the first equality, precompose the second typed Frobenius law with labels $(a,b,c,b)$ by $(1_{A_{ab}}\otimes\eta_b)\rho^{-1}_{A_{ab}}$. Its left side becomes $\Delta_{acb}$ by the right unit, and its right side becomes $L_{ab}^{c}$ by $d_{bc}=\Delta_{bcb}\eta_b$. For the last equality precompose the first typed Frobenius law with labels $(a,c,a,b)$ by $(\eta_a\otimes1_{A_{ab}})\lambda^{-1}_{A_{ab}}$. Its left side becomes $\Delta_{acb}$ by the left unit, and its right side becomes $R_{ab}^{c}$ by $d_{ac}=\Delta_{aca}\eta_a$. Thus every displayed map is well typed and the equality follows directly from defining relations, without an implicit transpose. Replacing the three open spaces by $C$ gives both closed copairing invariances with the same associators/unitors.

1.4 Here is the full reversed-factor transpose behind that identity. Set $U=A_{ab}$, $V=A_{bc}$, $W=A_{ac}$, $U^\vee=A_{ba}$, $V^\vee=A_{cb}$, $W^\vee=A_{ca}$. Let $P:(U\otimes V)\otimes(V^\vee\otimes U^\vee)\to(U\otimes U^\vee)\otimes(V\otimes V^\vee)$ be the following specified composite of associators and flips:
$$
\begin{aligned}
(U\otimes V)\otimes(V^\vee\otimes U^\vee)
&\xrightarrow{\alpha_{U,V,V^\vee\otimes U^\vee}}
 U\otimes(V\otimes(V^\vee\otimes U^\vee))\\
&\xrightarrow{1_U\otimes\alpha^{-1}_{V,V^\vee,U^\vee}}
 U\otimes((V\otimes V^\vee)\otimes U^\vee)\\
&\xrightarrow{1_U\otimes\tau_{V\otimes V^\vee,U^\vee}}
 U\otimes(U^\vee\otimes(V\otimes V^\vee))\\
&\xrightarrow{\alpha^{-1}_{U,U^\vee,V\otimes V^\vee}}
 (U\otimes U^\vee)\otimes(V\otimes V^\vee).
\end{aligned}
$$
Thus $P((x\otimes y)\otimes(r\otimes s))=(x\otimes s)\otimes(y\otimes r)$. Define $B=\lambda_k(b_{ab}\otimes b_{bc})P$, a perfect pairing between $U\otimes V$ and $V^\vee\otimes U^\vee$. Its perfection follows from the two finite-dimensional perfect pairings of step 1.1: in dual bases its matrix is a permutation of the tensor product of two invertible pairing matrices, hence invertible. The explicit transpose equality of maps $(U\otimes V)\otimes W^\vee\to k$ is
$$
b_{ac}(\mu_{abc}\otimes1_{A_{ca}})
=B(1_{U\otimes V}\otimes\Delta_{cba}).
$$
For its verification write $d_{ab}(1)=\sum_jp_j\otimes q_j$. Step 1.3 with labels $(c,a,b)$ gives $\Delta_{cba}(z)=\sum_j\mu_{cab}(z,p_j)\otimes q_j$. Therefore the right side at $(x\otimes y)\otimes z$ equals
$$
\sum_jb_{ab}(x,q_j)b_{bc}(y,zp_j)
=\sum_jb_{ab}(x,q_j)b_{ba}(yz,p_j)
=b_{ab}(x,yz)
=b_{ac}(xy,z).
$$
The first intervening equality is indexed associativity under $\epsilon_b$; the next is the second snake for $d_{ab}$; the last is indexed associativity under $\epsilon_a$. This proves the reversed-factor transpose including its exact flip. The pairing invariance itself is the equality $b_{ac}(\mu_{abc}\otimes1)=b_{ab}(1\otimes\mu_{bca})\alpha_{A_{ab},A_{bc},A_{ca}}$ on $(A_{ab}\otimes A_{bc})\otimes A_{ca}$. Hence both the pairing and its coproduct transpose, for every triple of labels, have been expanded as actual typed composites.

## General colored windows: additional necessary completion

Replace the singleton-only window discussion by the following indexed argument. For arbitrary $a,b,t\in S$ put
$$
O_{ab}^{t}:=\mu_{atb}\Delta_{atb}:A_{ab}\to A_{ab},
\qquad e_a^t:=O_{aa}^t\eta_a(1)\in A_{aa}.
$$
For all $a,b,c,t$, the full multiplication slides, as maps $A_{ab}\otimes A_{bc}\to A_{ac}$, are
$$
O_{ac}^t\mu_{abc}
=\mu_{abc}(O_{ab}^t\otimes1_{A_{bc}})
=\mu_{abc}(1_{A_{ab}}\otimes O_{bc}^t).
$$
To prove the first, the first Frobenius law with labels $(a,t,b,c)$ gives
$$
\mu_{atc}\Delta_{atc}\mu_{abc}
=\mu_{atc}(1_{A_{at}}\otimes\mu_{tbc})
 \alpha_{A_{at},A_{tb},A_{bc}}(\Delta_{atb}\otimes1_{A_{bc}})
=\mu_{abc}(\mu_{atb}\Delta_{atb}\otimes1_{A_{bc}}).
$$
The last equality is indexed associativity. For the second use the second Frobenius law with labels $(a,b,t,c)$:
$$
\mu_{atc}\Delta_{atc}\mu_{abc}
=\mu_{atc}(\mu_{abt}\otimes1_{A_{tc}})
 \alpha^{-1}_{A_{ab},A_{bt},A_{tc}}(1_{A_{ab}}\otimes\Delta_{btc})
=\mu_{abc}(1_{A_{ab}}\otimes\mu_{btc}\Delta_{btc}).
$$
Set the first or second input to the appropriate unit to obtain
$O_{ab}^t(x)=e_a^t x=x e_b^t$. Consequently for $x\in A_{ab},y\in A_{ba}$,
$$
b_{ab}(O_{ab}^t x,y)
=\epsilon_a(e_a^txy)
=\epsilon_a(xe_b^ty)
=b_{ab}(x,O_{ba}^ty).
$$
Here $e_a^t x=x e_b^t$ is the preceding unit specialization, so this step needs no unproved centrality or extra symmetry.

The coproduct slides, maps $A_{ac}\to A_{ab}\otimes A_{bc}$, are
$$
\Delta_{abc}O_{ac}^t
=(O_{ab}^t\otimes1_{A_{bc}})\Delta_{abc}
=(1_{A_{ab}}\otimes O_{bc}^t)\Delta_{abc}.
$$
Test against $u\in A_{ba}$ and $v\in A_{cb}$ by the perfect output pairing
$\langle r\otimes s,u\otimes v\rangle=b_{ab}(r,u)b_{bc}(s,v)$. The scalar for the left composite is
$\epsilon_a((O_{ac}^tx)vu)=\epsilon_a(x O_{ca}^t(vu))$ by the transpose identity above. By the product slides this is both $\epsilon_a(x (O_{cb}^tv)u)$ and $\epsilon_a(x v(O_{ba}^tu))$. Transposing $O_{bc}^t$ or $O_{ab}^t$ under its opposite pairing gives respectively the rightmost and middle composite. The general coproduct-contraction identity used here is the reversed-factor transpose from step 1.4 with labels renamed: $\langle\Delta_{abc}x,u\otimes v\rangle=\epsilon_a(xvu)$. Since the product pairing is perfect, these scalar equalities prove both typed map equalities.

Finally the colored open-window reduction is, for arbitrary $a,t$,
$$
i_a^*O_{aa}^{t}=W_t i_a^*:A_{aa}\to C,
\qquad W_t=i_t^*i_t.
$$
For $x\in A_{aa}$ write $\Delta_{ata}x=\sum_jr_j\otimes s_j$ with $r_j\in A_{at},s_j\in A_{ta}$. For arbitrary $c\in C$ the scalar pairing of the left side against $c$ is
$$
\begin{aligned}
\sum_j\epsilon_a(i_a(c)r_js_j)
&=\sum_j\epsilon_t(s_j i_a(c)r_j)\\
&=\sum_j\epsilon_t(i_t(c)s_jr_j)\\
&=\epsilon_t(i_t(c)i_t(i_a^*x))\\
&=b_C(c,i_t^*i_t i_a^*x).
\end{aligned}
$$
The first equality is the indexed trace on $A_{at}\otimes A_{ta}$, after associating; the second is centrality on $A_{ta}$; the third is the colored Cardy composite
$i_ti_a^*=\mu_{tat}\tau_{A_{at},A_{ta}}\Delta_{ata}:A_{aa}\to A_{tt}$;
the last is pairing adjunction for $i_t$. Perfectness of $b_C$ proves the reduction. This proves a window of **every** free-boundary color t, not just t=a. In the singleton case it specializes to the existing $i_a^*O_a=W_ai_a^*$ calculation. All color sums here are finite tensor decompositions; none is a sum over S.

## Formal versus vector-space use: close the supplier-interface gap

A8 needs equations in the **formal symmetric monoidal presentation**, not merely equalities of every finite-dimensional evaluation. The latter would be circular before the TQFT equivalence. The repair must therefore expand A6's Statement/assumptions to assert its displayed map identities in any symmetric monoidal category satisfying the elementary typed sewing equations, with the finite-dimensional nondegeneracy assertions as the Vect specialization. An algebraic notation with formal input letters abbreviates the map from the tensor product of their indicated types; it is never a test on scalar-valued points.

Here is the needed faithful bending calculation. Suppose $V$ has the dual $V^\vee$, evaluation $b_V:V\otimes V^\vee\to\mathbf1$ and coevaluation $d_{V^\vee}:\mathbf1\to V^\vee\otimes V$, with both snakes proved from Frobenius and units as in A6 step 1.1. For $f:U\to V$ define
$$
D(f):=b_V(f\otimes1_{V^\vee}):U\otimes V^\vee\to\mathbf1.
$$
For $h:U\otimes V^\vee\to\mathbf1$ define
$$
J(h):=\lambda_V(h\otimes1_V)
\alpha^{-1}_{U,V^\vee,V}
(1_U\otimes d_{V^\vee})\rho^{-1}_U:U\to V.
$$
Naturality of associators/unitors and the snake on $V$ give $J(D(f))=f$. In detail the composite is the map obtained by tensoring $f$ with $d_{V^\vee}$ and then evaluating $b_V$ on its first two factors; the snake is
$$
\lambda_V(b_V\otimes1_V)\alpha^{-1}_{V,V^\vee,V}
(1_V\otimes d_{V^\vee})\rho^{-1}_V=1_V.
$$
Precomposing this map by $f$ proves the identity. Thus D is injective on Hom sets with no vector-space assumption. For tensor outputs use $V=V_1\otimes V_2$, dual $V_2^\vee\otimes V_1^\vee$, evaluation exactly the reversed-factor P-composite in step 1.4, and coevaluation formed by inserting $d_{V_2^\vee}$ between the two factors of $d_{V_1^\vee}$ (and reassociating). The two constituent snakes cancel successively, so the tensor version of D is also injective.

Consequently every A6 calculation “pair against arbitrary c” is to be rewritten as equality of maps with external factor C: apply D to the two maps, expand adjunction/associativity/centrality/trace as **composites on that external tensor input**, and invoke $JD=1$. Likewise the output-tensor tests in the coproduct and window identities use the displayed P with two external dual factors. The detailed scalar chains above describe each such composite on formal input placeholders; their equalities use only the typed structural equations, and so are equalities of maps in the presentation. In Vect, their same formulas evaluated on pure tensors give the familiar separating-functional proof. Do not claim the formal conclusion just from the latter proof.

For coproduct transpose use the typed Frobenius equations and a unit to express $\Delta_{abc}$ using $d_{ab}$ as in step 1.3, then apply D and the snake. For cozipper coalgebra preservation apply tensor-output D to both sides, use that coproduct transpose, move i across the pairing by adjunction, use the algebra-map relation, and reverse the same coproduct transpose. For the reflected pairing transports precompose the adjunction map by the specified flip; copairing transports follow by applying J, giving the same typed maps as step 2.1. For cyclic cozipper rotation apply D with output C: the resulting maps from the indexed open tensor product tensored with C are equal by indexed trace, associativity and centrality, exactly as the fully spelled chain in A6 step 4.1. These instructions require the final carrier to display the input types and the D/J invocation for each identity, not retain an unexplained “by transposition”.
