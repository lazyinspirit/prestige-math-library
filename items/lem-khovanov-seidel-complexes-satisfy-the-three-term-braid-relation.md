---
id: lem-khovanov-seidel-complexes-satisfy-the-three-term-braid-relation
kind: lemma
title: "The three-term braid relation"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps:
  - lem-khovanov-seidel-complexes-satisfy-far-commutativity
  - def-khovanov-seidel-positive-and-negative-twist-complexes
  - lem-khovanov-seidel-generator-complexes-are-mutually-inverse
  - thm-khovanov-seidel-u-functors-satisfy-temperley-lieb-relations
  - thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex
  - def-signed-totalization-of-graded-a-m-bimodule-actions
  - lem-graded-balanced-tensor-and-shift-isomorphisms
  - def-khovanov-seidel-beta-and-gamma-bimodule-maps
  - lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Theorem 2.5, equations (2.11)-(2.13)"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Theorem 2.5 and its proof, printed pp. 13-14"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Fix $m\ge1$, let $R_i,R_{i+1}$ be the positive twist complexes of
[[def-khovanov-seidel-positive-and-negative-twist-complexes]], and use the
balanced totalization of
[[def-signed-totalization-of-graded-a-m-bimodule-actions]]. For $1\le i\le m-1$
there is a homotopy equivalence of complexes of graded $(A_m,A_m)$-bimodules
$$R_i\otimes_{A_m}R_{i+1}\otimes_{A_m}R_i\;\simeq\;R_{i+1}\otimes_{A_m}R_i\otimes_{A_m}R_{i+1},$$
hence an isomorphism of endofunctors of $C_m$
$$R_iR_{i+1}R_i\cong R_{i+1}R_iR_{i+1}.$$
Together with the far-commutativity lemma
[[lem-khovanov-seidel-complexes-satisfy-far-commutativity]] and the inverse-pair
lemma [[lem-khovanov-seidel-generator-complexes-are-mutually-inverse]], this is
the braid relation for the generators of the action.

## Facts & Assumptions
**Given:** An integer $m\ge1$, an index $1\le i\le m-1$, the twist complexes $R_i,R_{i+1}$ with the bimodules $U_i,U_{i+1}$ and the maps $\beta,\gamma$ of [[def-khovanov-seidel-beta-and-gamma-bimodule-maps]], and the balanced tensor and corner identifications of [[lem-graded-balanced-tensor-and-shift-isomorphisms]].

[L1] $R_i=[U_i\xrightarrow{\beta_i}A_m]$ and $R_i^{-1}=[A_m\xrightarrow{\gamma_i}U_i\{-1\}]$ are bounded complexes of graded $(A_m,A_m)$-bimodules with degree-zero differentials and two-sided finite graded projective terms ([[def-khovanov-seidel-positive-and-negative-twist-complexes]]).

[L2] $R_i\otimes_{A_m}R_i^{-1}\simeq A_m\simeq R_i^{-1}\otimes_{A_m}R_i$, and more precisely the proof of that statement exhibits $R_i\otimes_{A_m}R_i^{-1}\cong T_{-1}\oplus A_m\oplus T_1$ with $T_{-1},T_1$ two-term complexes with invertible differentials; the same holds with $i$ replaced by $i+1$ ([[lem-khovanov-seidel-generator-complexes-are-mutually-inverse]]).

[L3] The balanced tensor of graded bimodules is associative and unital, and the totalization of tensor products of bounded complexes is a bounded complex functorial in each variable, compatible with these identifications ([[lem-graded-balanced-tensor-and-shift-isomorphisms]], [[def-signed-totalization-of-graded-a-m-bimodule-actions]]).

[L4] A two-term complex with invertible differential is contractible, and splitting off a contractible direct summand does not change the homotopy type ([[thm-homological-gaussian-elimination-splits-off-a-contractible-two-term-complex]]).

[L5] Corner computations: ${}_jP\otimes_{A_m}P_k\cong e_jA_me_k$; for the pair $(j,k)=(i+1,i)$ this is $\mathbb Z(i+1|i)$ with $(i+1|i)$ of degree $1$, for $(j,k)=(i,i+1)$ it is $\mathbb Z(i|i+1)$ with $(i|i+1)$ of degree $0$, and it vanishes for $|j-k|>1$ ([[lem-graded-balanced-tensor-and-shift-isomorphisms]], [[lem-the-khovanov-seidel-algebra-has-the-four-m-plus-one-path-basis]]).



## Proof

**Proof technique:** direct.

1.1 *The two relations are equivalent.* Assume first $R_iR_{i+1}R_i\cong R_{i+1}R_iR_{i+1}$, that is, an isomorphism in the homotopy category of tensor complexes. Composing on the right with $R_i^{-1}$ and using the inverse-pair lemma [L2] to cancel $R_iR_i^{-1}\simeq A_m$ at the two ends of both sides gives $R_iR_{i+1}\simeq R_{i+1}R_iR_{i+1}R_i^{-1}$; composing on the left with $R_{i+1}^{-1}$ and cancelling $R_{i+1}^{-1}R_{i+1}\simeq A_m$ gives $R_{i+1}^{-1}R_iR_{i+1}\simeq R_iR_{i+1}R_i^{-1}$. Conversely the same two cancellations applied to this isomorphism recover the braid relation. Hence it suffices to prove the displayed symmetric relation, which is the symmetric relation displayed in the source's proof. [L2]

2.1 *Normal form of the left-hand side.* By [L3] and the definition of the cone, tensoring the two-term complex $R_i=[U_i\to A_m]$ with the complex $R_{i+1}$ inside the triple tensor exhibits $R_{i+1}^{-1}R_iR_{i+1}$ as the cone of the chain map $g\colon R_{i+1}^{-1}\otimes_{A_m}U_i\otimes_{A_m}R_{i+1}\to R_{i+1}^{-1}\otimes_{A_m}R_{i+1}$ induced by $\beta_i$, with all identifications canonical. The target splits as $A_m\oplus(\text{acyclic})$ by [L2] applied at $i+1$, and splitting off the contractible summand [L4] leaves the cone of the induced map to $A_m$. Using the corner computations [L5] one obtains the isomorphisms of complexes $R_{i+1}^{-1}\otimes_{A_m}P_i\cong[P_i\xrightarrow{(i|i+1)}P_{i+1}]$ and ${}_iP\otimes_{A_m}R_{i+1}\cong[{}_{i+1}P\xrightarrow{(i|i+1)}{}_iP]$, with $P_i$, respectively ${}_iP$, placed in degree $0$; these are the two displays in the source's proof. Tensoring the left $(A_m,\mathbb Z)$ and right $(\mathbb Z,A_m)$ complexes over $\mathbb Z$ and using [L5] for the outer corners $e_iA_me_i$ and $e_{i+1}A_me_{i+1}$ gives the four-term complex $C=[0\to P_i\otimes_{\mathbb Z}{}_{i+1}P\xrightarrow{\partial^{-1}}(P_i\otimes_{\mathbb Z}{}_iP)\oplus(P_{i+1}\otimes_{\mathbb Z}{}_{i+1}P)\xrightarrow{\partial^{0}}P_{i+1}\otimes_{\mathbb Z}{}_iP\to0]$ with terms in homological degrees $-1,0,1$, together with a chain map $e\colon C\to A_m$ concentrated in degree $0$, so that the left-hand side of step 1.1 is homotopy equivalent to the cone of $e$. [step 1.1, L2, L3, L4, L5]

3.1 *The normal complex and its chain map.* Put $a=(i|i+1)$, a degree-zero forward arrow. In the complex $C$ of step 2.1 the differentials, after the indicated corner identifications, are
$$\partial^{-1}(x\otimes y)=(x\otimes a y,\ xa\otimes y),\qquad \partial^0(u,v)=\ell_a(u)-r_a(v),$$
where $\ell_a(x\otimes y)=xa\otimes y$ on $U_i$ and $r_a(x'\otimes y')=x'\otimes a y'$ on $U_{i+1}$. All path endpoints match these modules, and the two products in $\partial^0\partial^{-1}$ cancel. A degree-zero map $e:U_i\oplus U_{i+1}\to A_m$ is determined by $e(e_i\otimes e_i)=a_1e_i$ and $e(e_{i+1}\otimes e_{i+1})=a_2e_{i+1}$, since the degree-zero corner $e_jA_me_j$ is $\mathbb Ze_j$. Evaluating $e\partial^{-1}$ on $e_i\otimes e_{i+1}$ gives $(a_1+a_2)a$, so the chain-map condition is $a_1+a_2=0$. [L1, L3, L5, step 2.1, algebra]

4.1 *Why the coefficient is a unit.* The cone of $e$ is an invertible bimodule complex by [L2], with explicit inverse homotopies that remain valid after reduction modulo any prime $p$. Over $k=\mathbb F_p$, the degree-zero centre of $A_m\otimes k$ is $k$: commuting with the vertex idempotents removes every off-diagonal forward-arrow term, and a diagonal element $\sum_j b_j e_j$ commutes with each nonzero adjacent arrow only if $b_j=b_{j+1}$. Thus the degree-zero endomorphism ring of the unit bimodule complex is $k$, with no nontrivial idempotent. Tensoring with an invertible object is an equivalence of the homotopy category, so it transports the endomorphism ring of the cone to that of the unit; the cone cannot split into two nonzero homotopy summands. If $p$ divides $a_1$, then $a_2=-a_1$ also vanishes modulo $p$ and the cone is $A_m\otimes k\oplus C_k[1]$. The second summand is nonzero in the homotopy category: tensor $C_k$ on both outer sides with $(A_m/J)\otimes k$, where $J$ is the arrow ideal. Its arrow differentials become zero and its nonzero vertex tensor terms remain nonzero. An additive tensor functor preserves a contracting homotopy, so this zero-differential complex proves that $C_k$ was not contractible. This contradicts the preceding indecomposability. Hence no prime divides $a_1$, so $a_1=\pm1$; if $a_1=0$, any prime gives the same contradiction. Changing the sign of the target $A_m$ if necessary yields $a_1=1$, $a_2=-1$. This is the precise connected-algebra argument behind the source's characteristic-$p$ normalization, rather than a false assertion about all equivalences of categories. [L1, L2, L5, step 3.1, algebra]

5.1 *The second conjugate.* For $R_iR_{i+1}R_i^{-1}$, the two corner complexes are $[P_i\to P_{i+1}]$ in degrees $-1,0$ and $[{}_{i+1}P\to{}_iP]$ in degrees $0,1$, with the same forward-arrow maps. Their tensor over $\mathbb Z$ has the same terms as $C$. Its initial differential has signs $(-,+)$ and its final differential signs $(+,+)$; the degreewise sign maps $1$, $\operatorname{diag}(-1,1)$ and $-1$ identify it with the $C$ of step 3.1. The target inverse-pair complex again cancels to $A_m$, giving the cone of a degree-zero map $f:C\to A_m$. Its values are $b_1e_i,b_2e_{i+1}$, the chain condition gives $b_1+b_2=0$, and step 4.1 applies to this invertible conjugate as well, so after the target sign normalization $b_1=1,b_2=-1$. Consequently $f=e$ on both cyclic summands and hence everywhere. The two cones are isomorphic, and the inverse cancellations of step 1.1 give the full triple braid relation. [L1, L2, L3, L4, L5, step 1.1, step 2.1, step 3.1, step 4.1, algebra]

6.1 *Conclusion.* The two triple tensor complexes are homotopy equivalent, so in the homotopy category $C_m$ the three-term braid relation holds; passing to the induced functors gives $R_iR_{i+1}R_i\cong R_{i+1}R_iR_{i+1}$. The identifications used are canonical, and no choice principle is used. [step 5.1, L3] ∎

