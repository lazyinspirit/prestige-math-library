---
id: lem-frobenius-sewing-derived-moves
kind: lemma
title: "Typed algebraic derivations of the Frobenius sewing moves"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-frobenius-object-and-knowledgeable-sewing-data, lem-elementary-surface-sewing-relations]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
axiom_use: "Choice-free finite-dimensional algebra over an arbitrary field. No semisimplicity or characteristic restriction is used."
sources:
  references:
    - title: "Aaron D. Lauda and Hendryk Pfeiffer, Open-closed strings: Two-dimensional extended TQFTs and Frobenius algebras, arXiv:math/0510664v3"
      url: "https://arxiv.org/pdf/math/0510664v3"
      locator: "§3.5, PDF pp. 22–26, equations (3.47)–(3.74); the local proof expands the snake, (3.55), window, handle, and cozipper-rotation calculations."
    - title: "Joachim Kock, Frobenius algebras and 2D topological quantum field theories, complete minicourse notes"
      url: "https://mat.uab.cat/~kock/TQFT/FS.pdf"
      locator: "§2.4.2–2.4.12, PDF pp. 26–30, for the duality and Frobenius contractions."
    - title: "Gregory W. Moore and Graeme Segal, D-branes and K-theory in 2D topological field theory, arXiv:hep-th/0609042v1"
      url: "https://arxiv.org/pdf/hep-th/0609042v1"
      locator: "§2.1–2.4, PDF pp. 5–12, for the independent pairing and sewing conventions."
---

## Statement

For S-colored knowledgeable data of [[def-frobenius-object-and-knowledgeable-sewing-data]], all of the following identities follow from its typed equations: open and closed evaluation/coevaluation snakes; symmetry and cyclic invariance of the pairings and their adjoint copairings; both zipper/cozipper pairing and copairing transports; coalgebra and counit preservation by each cozipper; sliding of closed-window and handle operators; the Cardy reduction of an open handle through the closed sector; and cyclic rotation of an open product followed by a cozipper. In particular, define
$$
b_{ab}:=\epsilon_a\mu_{aba}:A_{ab}\otimes A_{ba}\to k,
\qquad d_{ab}:=\Delta_{aba}\eta_a:k\to A_{ab}\otimes A_{ba}.
$$
Both maps to algebraic duals induced by $b_{ab}$ and $b_{ba}$ are isomorphisms. With $b_C=\epsilon_C\mu_C$, $d_C=\Delta_C\eta_C$, $W_a=i_a^*i_a:C\to C$, $H=\mu_C\Delta_C:C\to C$, and $O_a=\mu_{aaa}\Delta_{aaa}:A_{aa}\to A_{aa}$, the typed consequences include
$$
\Delta_Ci_a^*=(i_a^*\otimes i_a^*)\Delta_{aaa},\qquad
\epsilon_Ci_a^*=\epsilon_a,\qquad
i_a^*O_a=W_ai_a^*.
$$
The lemma is algebraic: it assumes the relations already proved in [[lem-elementary-surface-sewing-relations]] and uses no diagram as a proof.

## Facts & Assumptions

**Given:** A field $k$, a color set $S$, and S-colored knowledgeable data satisfying all typed equations 1–7 of the linked definition.

[F1] Each $A_{ab}$ is finite-dimensional; its maps have the displayed sources and targets, and its composition, Frobenius, trace, centrality, adjunction, and Cardy equations are exactly those in [[def-frobenius-object-and-knowledgeable-sewing-data]].

[F2] The closed object $C$ is a commutative Frobenius object, and the indexed elementary sewing relations hold as the equations listed in the definition ([[lem-elementary-surface-sewing-relations]]).

[F3] In a Frobenius object $(X,\mu,\eta,\Delta,\epsilon)$, the two Frobenius equalities, unit equations, and counit equations have the associator and unitor types displayed in [[def-frobenius-object-and-knowledgeable-sewing-data]].

## Proof

1.1 For each $a,b$, write $d_{ab}(1)=\sum_j p_j\otimes q_j$ and take $x\in A_{ab}$. Apply the first typed Frobenius identity with labels $(a,b,a,b)$ to $\eta_a(1)\otimes x$. The left unit equation gives $\Delta_{abb}(x)$; the right-hand composite gives $\sum_jp_j\otimes\mu_{bab}(q_j,x)$. Applying $1_{A_{ab}}\otimes\epsilon_b$ and the right counit to this equality gives
$$
\sum_jp_j\,b_{ba}(q_j,x)=x.
$$
This is the typed snake
$$
(1_{A_{ab}}\otimes b_{ba})\,\alpha_{A_{ab},A_{ba},A_{ab}}\,(d_{ab}\otimes1_{A_{ab}})=1_{A_{ab}},
$$
where the associator maps $(A_{ab}\otimes A_{ba})\otimes A_{ab}$ to $A_{ab}\otimes(A_{ba}\otimes A_{ab})$. Apply the second Frobenius identity with labels $(b,a,b,a)$ to $y\otimes\eta_a(1)$, then apply $\epsilon_b\otimes1_{A_{ba}}$ and the left counit. For $y\in A_{ba}$ and the same $d_{ab}(1)=\sum_jp_j\otimes q_j$, this gives $\sum_j b_{ba}(y,p_j)q_j=y$, which is the other typed snake
$$
(b_{ba}\otimes1_{A_{ba}})\,\alpha^{-1}_{A_{ba},A_{ab},A_{ba}}\,(1_{A_{ba}}\otimes d_{ab})=1_{A_{ba}}.
$$
The closed object $C$ has the same two snakes with $b_C$ and $d_C$: apply its uncolored Frobenius identities to $\eta_C\otimes x$ and $x\otimes\eta_C$ and then use its two counits.
Writing $d_{ab}(1)=\sum_jp_j\otimes q_j$, the first snake says $x\mapsto(y\mapsto b_{ab}(x,y))$ has inverse $\phi\mapsto\sum_jp_j\phi(q_j)$, because $b_{ab}(x,q_j)=b_{ba}(q_j,x)$. The second says $y\mapsto(x\mapsto b_{ba}(y,x))$ has inverse $\psi\mapsto\sum_j\psi(p_j)q_j$. Thus both induced maps to the opposite algebraic duals are isomorphisms. [given, F1, F3, algebra]

1.2 The trace equation in [F1] is $b_{ab}=b_{ba}\tau$. In particular $b_{aa}$ is symmetric. A tensor is determined by its contractions against all functionals on its first factor. Since the snakes make each pairing perfect, the flipped tensor $\tau d_{ba}$ has the same two contractions as $d_{ab}$; hence $d_{ab}=\tau d_{ba}$. Associativity gives cyclic invariance with all colors retained: for $x\in A_{ab}$, $y\in A_{bc}$, and $z\in A_{ca}$,
$$
b_{ac}(\mu_{abc}(x,y),z)
=\epsilon_a((xy)z)
=\epsilon_a(x(yz))
=b_{ab}(x,\mu_{bca}(y,z)).
$$
The middle equality is the indexed associativity equation, and the first and last expressions have the stated typed pairings. Transposing this identity through the snakes in step 1.1 gives the matching cyclic invariance of the copairings; explicitly it says that the two ways of inserting $d_{ab}$ before or after an indexed product have the same contraction against every product of dual vectors. Nondegeneracy makes those contractions separating, so the tensors are equal. [step 1.1, F1, algebra]

2.1 Pairing adjunction in [F1] is the equality of maps $C\otimes A_{aa}\to k$
$$
b_C(1_C\otimes i_a^*)=b_{aa}(i_a\otimes1_{A_{aa}}).
$$
Precomposing with the flip and using the symmetries of $b_C$ and $b_{aa}$ gives its reflected equality $b_C(i_a^*\otimes1_C)=b_{aa}(1_{A_{aa}}\otimes i_a)$ on $A_{aa}\otimes C$. A map between finite-dimensional paired spaces is determined by its adjoint. The two snakes from step 1.1 therefore give both copairing transports:
$$
(i_a\otimes1_C)d_C=(1_{A_{aa}}\otimes i_a^*)d_{aa}:k\to A_{aa}\otimes C,
$$
$$
(1_C\otimes i_a)d_C=(i_a^*\otimes1_{A_{aa}})d_{aa}:k\to C\otimes A_{aa}.
$$
For example, pairing the first tensor equality against $u\in A_{aa}^*$ and $c\in C^*$ reduces it to the first adjunction equality; the second reduces to the reflected equality. Since products of such functionals separate tensors, the tensor equalities follow. This is both transports, including the one stated as an exercise in the source. [step 1.1, step 1.2, F1, algebra]

2.2 Pair the proposed cozipper coalgebra identity against arbitrary $c,d\in C$ using the nondegenerate pairing $b_C\otimes b_C$. For any Frobenius object, the snake and Frobenius identities imply
$$
(b_X\otimes b_X)(u\otimes v,\Delta_X(x))=b_X(vu,x)
$$
with the multiplication and tensor order shown. Hence the left side of $\Delta_Ci_a^*=(i_a^*\otimes i_a^*)\Delta_{aaa}$ pairs to $b_C(dc,i_a^*x)$. The right side pairs to $b_{aa}(i_a(d)i_a(c),x)=b_{aa}(i_a(dc),x)$, because $i_a$ preserves multiplication and $C$ is commutative. Pairing adjunction makes this $b_C(dc,i_a^*x)$ as well. Nondegeneracy proves the coproduct equality. Setting the first argument of pairing adjunction to $1_C$ gives $\epsilon_C(i_a^*x)=\epsilon_a(x)$ for every $x$, proving counit preservation. [step 1.1, step 2.1, F1, F2, F3, algebra]

3.1 The relation $i_a^*(i_a(c)x)=c\,i_a^*(x)$ holds for $c\in C$, $x\in A_{aa}$. To prove it, pair both sides against arbitrary $d\in C$. Pairing adjunction, the unital algebra equation for $i_a$, centrality, and associativity give
$$
b_C(d,i_a^*(i_a(c)x))
=b_{aa}(i_a(d),i_a(c)x)
=b_{aa}(i_a(dc),x)
=b_C(d,c\,i_a^*(x)).
$$
The middle equality uses $i_a(d)i_a(c)=i_a(dc)$ and $C$-commutativity; the last uses associativity of $b_C$. Since $b_C$ is nondegenerate by step 1.1 with the closed object, equality against every $d$ proves the claim. Thus $W_a=i_a^*i_a$ is multiplication by $w_a:=W_a(1_C)$ and is a $C$-bimodule map. The Frobenius identities for $C$ then slide $W_a$ across either leg of $\mu_C$ and $\Delta_C$; for example $W_a\mu_C=\mu_C(W_a\otimes1_C)=\mu_C(1_C\otimes W_a)$ and $(W_a\otimes1_C)\Delta_C=(1_C\otimes W_a)\Delta_C=\Delta_CW_a$. [step 1.1, step 2.1, F1, F2, F3, algebra]

3.2 Let $H=\mu_C\Delta_C$ and $O_a=\mu_{aaa}\Delta_{aaa}$. For any Frobenius object $X$ and $x,y\in X$, the first and second Frobenius identities respectively give
$$
\mu\Delta(xy)=x\,\mu\Delta(y),
\qquad
\mu\Delta(xy)=\mu\Delta(x)\,y.
$$
For example, the first formula expands $\Delta(xy)$ as $(x\otimes1)\Delta(y)$ and then multiplies its two factors; the second expands it as $\Delta(x)(1\otimes y)$. Thus $H$ is a $C$-bimodule map and $O_a$ an $A_{aa}$-bimodule map. Their coproduct slides follow by composing the two typed Frobenius identities with $\Delta$:
$$
\Delta\mu\Delta=(\mu\otimes1)(1\otimes\Delta)\Delta
=(1\otimes\mu)(\Delta\otimes1)\Delta.
$$
By coassociativity, the outer expressions are $(O\otimes1)\Delta$ and $(1\otimes O)\Delta$. Since $W_a$ is multiplication by $w_a$ and $H$ is a $C$-bimodule map, $W_aH=HW_a$. These are the required closed-window and handle slides. [step 1.1, step 3.1, F1, F3, algebra]

3.3 The Cardy relation says $i_ai_a^*=\mu_{aaa}\tau\Delta_{aaa}$. For $x\in A_{aa}$ and $c\in C$, cyclicity of the symmetric open trace and centrality of $i_a(c)$ give
$$
b_C(c,i_a^*O_ax)
=\epsilon_a(i_a(c)\,\mu_{aaa}\Delta_{aaa}x)
=\epsilon_a(i_a(c)\,\mu_{aaa}\tau\Delta_{aaa}x).
$$
For the middle equality, write $\Delta x=\sum_jx_j\otimes y_j$; the two scalar expressions are $\sum_j\epsilon_a(i_a(c)x_jy_j)$ and $\sum_j\epsilon_a(i_a(c)y_jx_j)$. Cyclicity moves $y_j$ to the front in the first expression, and centrality moves $i_a(c)$ back to the front, giving the second. Cardy changes the final term to $\epsilon_a(i_a(c)i_a(i_a^*x))$. Pairing adjunction makes this $b_C(c,W_ai_a^*x)$. Nondegeneracy of $b_C$ proves the typed equality $i_a^*O_a=W_ai_a^*$. This is the open-handle reduction used when a cozipper follows an open handle. [step 1.1, step 2.1, step 3.1, F1, F2, algebra]

4.1 For $q\ge1$, let $\mu^{(q)}_{a_0\dots a_q}:A_{a_0a_1}\otimes\cdots\otimes A_{a_{q-1}a_q}\to A_{a_0a_q}$ be the iterated product, parenthesized to the left; indexed associativity makes it independent of parenthesization after the canonical associators. When $a_q=a_0$, the map $i_{a_0}^*\mu^{(q)}$ is invariant under cyclic rotation of the factors together with their endpoint labels. The claim is immediate for $q=1$. For $q\ge2$, put $X=i_{a_0}(c)x_1\in A_{a_0a_1}$ and $Y=x_2\cdots x_q\in A_{a_1a_0}$. Pair the original value against $c\in C$; pairing adjunction gives $\epsilon_{a_0}(XY)$. The indexed trace equation gives $\epsilon_{a_0}(XY)=\epsilon_{a_1}(YX)$. Centrality says $Y i_{a_0}(c)=i_{a_1}(c)Y$, so the latter is $\epsilon_{a_1}(i_{a_1}(c)Yx_1)$, which is the pairing against $c$ of the cyclically rotated cozipper output. Since $b_C$ is nondegenerate, those outputs in $C$ agree. In the singleton case this is
$$
i^*\mu_A^{(q)}(x_1,\ldots,x_q)
=i^*\mu_A^{(q)}(x_2,\ldots,x_q,x_1).
$$
This proves the cyclic cozipper rotation without assuming that $A_{aa}$ is commutative. [step 1.1, step 2.1, step 3.1, F1, F2, algebra]

4.2 Every operation just derived is local to the labels occurring on its factors. The snakes pair $A_{ab}$ only with $A_{ba}$; the products and coproducts preserve the concatenated endpoint sequence; $i_a$ and $i_a^*$ meet only at the matching color $a$; $W_a$ and $O_a$ retain their color; and the Cardy equation uses exactly $A_{ba}\otimes A_{ab}$ before the flip. Consequently inserting any derived move into a larger composite changes no free-boundary label or black parameterization. This checks the color side condition required when the identities are used in surface normal-form reductions. [F1, step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 3.2, step 3.3, step 4.1] ∎
