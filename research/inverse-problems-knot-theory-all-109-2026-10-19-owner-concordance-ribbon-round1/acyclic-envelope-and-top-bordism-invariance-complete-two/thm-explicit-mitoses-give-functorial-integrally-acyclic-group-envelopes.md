---
id: thm-explicit-mitoses-give-functorial-integrally-acyclic-group-envelopes
kind: theorem
title: Explicit mitoses give functorial integrally acyclic group envelopes
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
aliases: []
deps:
  - def-axiom-of-choice
  - def-hnn-extension-and-stable-letter
  - cor-the-base-group-embeds-in-its-hnn-extension
  - prop-universal-property-of-an-hnn-extension
  - def-unnormalized-homogeneous-bar-resolution
  - lem-diagonal-bar-coinvariants-compute-group-homology
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jae Choon Cha, A topological approach to Cheeger-Gromov universal bounds for von Neumann rho-invariants
      url: https://arxiv.org/pdf/1405.1805
      locator: Complete printed pages 11–14 and 25–34 read; Theorem 2.1 and section 5. The chain homotopies and their signs are proved locally below.
---

## Statement

Assume AC. There is an explicit functor $A$ from groups to groups and a natural transformation $\iota:\mathrm{id}\to A$ such that each $\iota_G:G\to A(G)$ is injective and
$$H_j(A(G);\mathbb Z)=0\quad(j>0),\qquad H_0(A(G);\mathbb Z)=\mathbb Z.$$
One may take $A(G)$ to be the increasing union of the iterated mitoses $G_0=G$, $G_{r+1}=m(G_r)$, where
$$m(K)=\langle K,u,t\mid [h,ugu^{-1}]=1,\ t g t^{-1}=gugu^{-1}\ (g,h\in K)\rangle.$$
For every $n\ge0$ there is a specified partial chain homotopy, in degrees at most $n$, between the trivial homomorphism and $G\hookrightarrow G_n$ on integral unnormalized bar chains. It is zero in degree zero, has finite values on every basis simplex, and is natural in $G$. In particular every integral positive-degree bar cycle from any stage bounds after finitely many further mitoses. If $G$ is countable, $A(G)$ is countable.

## Statement references

[[def-unnormalized-homogeneous-bar-resolution]]

[Cha, Theorem 2.1 and section 5](https://arxiv.org/pdf/1405.1805)

## Facts & Assumptions

**Given:** AC, arbitrary groups, and homomorphisms. Products, free products and relative group presentations have their usual algebraic meanings. A chain homotopy from $a$ to $b$ has boundary $b-a$.

[A1] [[def-axiom-of-choice]] supplies the coset transversals in the HNN embedding supplier and implies the DC used by the supplied-resolution interpretation of group homology. The finite chain constructions below require no further choices.

[F1] [[def-hnn-extension-and-stable-letter]], [[cor-the-base-group-embeds-in-its-hnn-extension]] and [[prop-universal-property-of-an-hnn-extension]] give the relative presentation, base-group injection and extending homomorphisms for each HNN extension with injective associated maps.

[F2] The homogeneous bar complex has alternating vertex-deletion boundary. Passing to diagonal coinvariants and using consecutive increments identifies it with the free abelian complex $C_n(K)$ on all tuples $[g_1,\ldots,g_n]$, including identity entries, whose faces drop the first or last entry or replace consecutive entries by their product. Its homology is $H_*(K;\mathbb Z)$, naturally in $K$. [[def-unnormalized-homogeneous-bar-resolution]], [[lem-diagonal-bar-coinvariants-compute-group-homology]]

## Proof

1.1 Put $B=K\times K$. First adjoin $u$ with $u(g,1)u^{-1}=(1,g)$, an HNN extension between the two injective copies of $K$ in $B$. Next adjoin $t$ with $t(g,1)t^{-1}=(g,g)$; these associated maps remain injective after the first extension. By [F1], $B$ embeds after both adjunctions. Eliminating $(1,g)$ using the first relation leaves precisely the displayed presentation of $m(K)$: commutation between the two factors gives $[h,ugu^{-1}]=1$, and the diagonal relation becomes $tgt^{-1}=gugu^{-1}$. Conversely those relations define the commuting homomorphisms $(g,h)\mapsto g uhu^{-1}$ and satisfy both HNN relations, so the two presentation maps are inverse on generators. Thus $k_K:K\to m(K)$ is injective. [A1, F1, given, algebra]

1.2 We give the chain constructions needed for integral acyclicity, rather than using a field Kunneth splitting. The tuples of [F2] form a simplicial set $BK$: inserting $1$ gives degeneracies and the stated faces satisfy $d_i d_j=d_{j-1}d_i$ for $i<j$, by associativity, including the two end faces. Hence the alternating boundary squares to zero by pairing these faces. A tuple specifies a simplicial map from the standard simplicial simplex $\Delta^n$: a face edge from vertex $i$ to vertex $j$ is labelled by the product $g_{i+1}\cdots g_j$, with the empty product $1$. This uniquely describes all faces and degeneracies. Products obey $B(K\times L)=BK\times BL$ exactly. We use these unnormalized simplicial chains also for the finite standard simplex models below. [F2, algebra, construct]

2.1 A homomorphism $f:K\to L$ extends to $m(f)$ by applying $f$ to the old generators and sending $u,t$ to the respectively named generators. Every defining relation is preserved. Uniqueness on generators gives $m(1)=1$, $m(fg)=m(f)m(g)$ and $m(f)k_K=k_Lf$. Iterating gives a functorial sequence of injections $G_r\to G_{r+1}$. Its colimit may be represented as the disjoint union of the pairs $(r,g)$ modulo equality after transport to a common later stage; multiplication at a common stage is well-defined, and the stage maps are injective. This defines $A$ and the natural injective $\iota$. [F1, step 1.1, algebra, construct]

2.2 For simplices $x,y$ of common dimension $n$, define the Alexander-Whitney map by $$D(x,y)=\sum_{i=0}^n x[0,\ldots,i]\otimes y[i,\ldots,n].$$ Define the shuffle $E(x\otimes y)$, for dimensions $p,q$, as the sum over the monotone lattice paths from $(0,0)$ to $(p,q)$ of their product simplices, with sign $(-1)^v$, where $v$ counts pairs consisting of a vertical step before a horizontal step. The coordinate simplex maps interpret a path vertex $(a,b)$ by the corresponding vertices of $x,y$, allowing repeated vertices. These formulas are natural. For $D$, the tensor boundary terms inside each front or back face reproduce the corresponding faces of $(x,y)$; the extra terms cutting at $i$ and $i+1$ cancel with opposite signs. Thus $dD=Dd$. For $E$, a face deleting the junction of steps of different types occurs in exactly the two paths interchanging those steps, with opposite signs. The remaining faces delete a vertex between two horizontal steps or between two vertical steps, or a first or last path vertex. These are exactly the shuffles of $dx\otimes y+(-1)^p x\otimes dy$, with the displayed signs, including paths with a zero-length coordinate. Consequently $dE=Ed$. Both maps agree with inverse identification of vertices in degree zero. [step 1.2, algebra, construct]

2.3 For $v\in L$, write $\mu_v(h)=vhv^{-1}$. The homomorphism $\mu_v$ is chain homotopic to the identity on $C(L)$ by the finite formula $$S_v[h_1,\ldots,h_j]=\sum_{i=0}^j(-1)^i[h_1,\ldots,h_i,v^{-1},\mu_v(h_{i+1}),\ldots,\mu_v(h_j)].$$ Indeed faces wholly before the inserted entry cancel with $S_vd$, as do those wholly after it with the shifted sign. The two faces crossing the inserted entry in adjacent summands cancel because $h_i v^{-1}=v^{-1}\mu_v(h_i)$. The only unpaired end faces are $\mu_v[h_1,\ldots,h_j]$ and $-[h_1,\ldots,h_j]$. Hence $dS_v+S_vd=\mu_v-1$, also in degree zero where both sides vanish. These formulas commute with any homomorphism taking $v$ to its specified image. [step 1.2, algebra, construct]

3.1 There is a specified natural homotopy $P$ with $dP+Pd=1-ED$ and $P_0=0$. Here are its model fillings. A simplex of $\Delta^n\times\Delta^n$ is a weakly increasing sequence of pairs in $\{0,\ldots,n\}^2$. Prepending $(0,0)$ defines a cone $c$; direct deletion gives $dc+cd=1-v\epsilon$, with $v\epsilon$ the augmentation projection onto that vertex, zero in positive degrees. Having defined $P$ below degree $n$, take the universal diagonal simplex $a_n$ in this product, set $z=(1-ED)a_n-P da_n$, and define $P a_n=cz$. For $n>0$, $dz=0$ by the lower identity and step 2.2; for $n=0$ set $P a_0=0$ since $z=0$. Thus $dP a_n=z$. For arbitrary $(x,y)$ push this fixed model chain forward by their uniquely specified simplex maps and extend linearly. The same rule defines its values on faces, so the identity holds on every generator. Composition of the simplex maps proves naturality. This construction does not require simplices to be nondegenerate, and every output is finite. [step 1.2, step 2.2, algebra, construct]

3.2 Suppose $\phi:\Pi\to K$ has a specified partial chain homotopy $Q$ with $dQ+Qd=\phi-e$ through degree $n-1$, where $n\ge1$, $e$ is the trivial homomorphism and $Q_0=0$. On $C(B\Pi\times B\Pi)$ put $L_1(x,y)=x\otimes[\ ]$, $L_2(x,y)=[\ ]\otimes y$ and $L=D-L_1-L_2$. Each is a chain map: the endpoint maps drop the other coordinate and tensor with the zero-cycle $[\ ]$. For positive degree $j$, $L$ has only tensor bidegrees $(i,j-i)$ with $1\le i\le j-1$. In degree zero $L=-[\ ]\otimes[\ ]$, which is killed by $Q\otimes\phi$ because $Q_0=0$. Therefore on degrees at most $n$ the signed tensor differential gives $$d((Q\otimes\phi)L)+(Q\otimes\phi)Ld=((\phi-e)\otimes\phi)L.$$ The terms involving the differential of the second factor cancel; the first factor only uses the stipulated identity below $n$. [step 2.2, given, algebra]

4.1 In step 3.2 let $U=\phi\times\phi$ and $V=e\times\phi$, as maps from $\Pi\times\Pi$ to $K\times K$. Set $$T=P(U-V)+E(Q\otimes\phi)L.$$ By naturality of $D$ and step 3.1, the boundary of the first summand is $(1-ED)(U-V)$. By step 3.2 the second boundary is $E((\phi-e)\otimes\phi)L$. Subtracting the $L$ contributions leaves the two endpoint terms: $E((\phi-e)\otimes\phi)L_1=\phi\times e-e\times e$ and $E((\phi-e)\otimes\phi)L_2=0$, since $\phi$ and $e$ agree on the vertex. Thus $$dT+Td=\phi\times\phi-\phi\times e-e\times\phi+e\times e$$ through degree $n$. Also $T_0=0$, using $P_0=Q_0=0$. All identities concern actual unnormalized chains; a trivial homomorphism is not replaced by the zero chain map. [step 2.2, step 3.1, step 3.2, algebra, construct]

5.1 Let $k=k_K$, and let $F:K\times K\to m(K)$ be $F(g,h)=k(g)u k(h)u^{-1}$, a homomorphism since its two factor images commute. On $\Pi$ let $i(g)=(g,1)$, $j(g)=(1,g)$, and $\delta(g)=(g,g)$. Put $a=F(\phi\times\phi)i=k\phi$, $b=F(\phi\times\phi)j=\mu_u a$, and $c=F(\phi\times\phi)\delta=\mu_t a$. The last two equalities are precisely the mitosis relations. Composing step 4.1 with $F$ and $\delta$ gives $d(FT\delta)+(FT\delta)d=c-a-b+e$. Step 2.3 gives boundaries $c-a$ for $S_ta$ and $b-a$ for $S_ua$. Consequently the explicit formula $$R=-FT\delta+S_ta-S_ua$$ satisfies $dR+Rd=a-e=k\phi-e$ through degree $n$. In degree zero, the two conjugation terms are $[t^{-1}]-[u^{-1}]$, independent of the single input vertex, while $FT\delta$ is zero there. To arrange zero degree-zero homotopy, replace $S_ta-S_ua$ in this formula by its difference from $(S_t-S_u)e$. Its boundary is unchanged, since $\mu_t e=\mu_u e=e$. Thus the required normalized formula is $$R=-FT\delta+(S_t-S_u)(a-e),\qquad R_0=0.$$ This supplies a full explicit one-degree improvement, with its sign checked by the three displayed boundary identities. [step 1.1, step 2.3, step 4.1, algebra, construct]

6.1 For $n=0$ the identity and trivial homomorphisms $G\to G$ agree on $C_0(G)=\mathbb Z$, so $Q^0=0$ is a partial homotopy through degree zero. Given $Q^{n-1}$ between the trivial map and $G\to G_{n-1}$, apply step 5.1 with $\Pi=G$, $K=G_{n-1}$, and $\phi$ that inclusion, obtaining $Q^n$. Each $Q^n_0=0$, so the induction applies at every stage. All constructions use finite sums, fixed simplex cones, named stable letters, and composition of natural maps. The formulas for $P,S,T,R$ therefore commute with a homomorphism on the original group; no choices of null-homology primitives are made in this induction. [step 2.1, step 3.1, step 2.3, step 5.1, induction]

7.1 If $z\in C_j(G_r)$ is a cycle with $j>0$, apply step 6.1 to $G_r$ with $n=j$. Its image in $C_j(G_{r+j})$ differs from $e(z)$ by $dQ^jz$. The latter trivial-image cycle lies in the image of $C_*(1)$. This unnormalized point complex has one generator $e_l$ in each degree, with $de_l=e_{l-1}$ for positive even $l$ and zero for odd $l$. Its positive-degree contraction is $b e_l=e_{l+1}$ for odd $l$ and zero for positive even $l$, with $b e_0=0$; it satisfies $db+bd=1$ in positive degrees. Thus $e(z)$ bounds and so does the transported $z$. This handles identity entries without discarding degenerate simplices. [F2, step 6.1, algebra]

8.1 Every bar chain in $A(G)$ is a finite sum of tuples involving finitely many group elements. All those elements belong to a common stage, and injectivity of the stage maps means that an equation $dz=0$ in the union is already the identical equation in that stage's free bar complex. Step 7.1 then fills it at a later stage. Hence the positive integral bar homology of $A(G)$ vanishes; the unique vertex makes $H_0=\mathbb Z$. The identification [F2] yields the stated group homology. Countability follows because a group generated by a countable set has countably many finite words, each mitosis adds just two generators, and a countable union of countable explicitly generated groups is countable under [A1]. The trivial group, finite groups, arbitrary cardinalities and degree zero are all covered by the same constructions. [A1, F2, step 2.1, step 7.1] ∎

## Remarks

This group-theoretic result supplies no manifold bordism realization, topological bordism homology axiom, signature index theorem or rho independence. Those are separate prerequisites for applications to signature defects. The normalized homotopy in the proof fixes both its boundary sign and its degree-zero value explicitly.
