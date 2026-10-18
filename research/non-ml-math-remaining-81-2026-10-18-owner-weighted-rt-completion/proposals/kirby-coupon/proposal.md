# Kirby and coupon algebra: proved pieces and exact remaining obligations

Scientific proposal, 2026-10-18. Only this proposal directory is owned. No canonical content, runtime, metadata, readiness or gate was changed. This is **not a completed proof of the weighted RT theorem**. The subsequent [rt-cap-normalization.md](rt-cap-normalization.md) closes the boundary Gram/cap/cylinder and algebraic gluing gaps originally recorded in §§6–8 below. [signature-maslov.md](signature-maslov.md) contains the cycle2 repaired Wall/cap-reference proof accepted by root as bounded local mathematics; its corrected weight action is κ^{+n}, superseding every provisional κ^{-n} comment below. [ribbon-evaluator-and-band-slide.md](ribbon-evaluator-and-band-slide.md) now proposes complete multicolor/coupon evaluation and the actual band-slide identity, pending root review. Read those continuations and proposed-items/ for current claims; the original gap ledger below is historical. The local algebra below is complete; the unresolved bridge in §8 is genuine and must not be hidden by citing a meridian projector as a band-slide proof.

## 1. Contract and types

Use a complex spherical ribbon fusion category with simple unit, simple labels I, nonzero dimensions d_i, dual i*, invertible unnormalized Hopf matrix s, D²=Σ_i d_i²≠0, chosen D, p_±=Σ_i θ_i^{±1}d_i², and κ=p_+/D. Consume the actual native lemmas proving balancing, s²=D²C, and p_+p_−=D². No positivity or unitarity is assumed. All bases below are finite, so their choices introduce no infinite choice principle. Existing framed-evaluator choices remain those of its suppliers.

Work in the strict model already supplied by the repaired evaluator; alternatively insert its tensor constraints throughout. For left dual X*, write b_X:1→X⊗X*, e_X:X*⊗X→1, and right evaluation r_X=e_{X*}(j_X⊗1):X⊗X*→1. Thus r_Xb_X=d_X. Define, for a:X⊗Z→Y⊗Z,

ptr_Z(a)=(1_Y⊗r_Z)(a⊗1_{Z*})(1_X⊗b_Z):X→Y.

This explicitly specifies each closing arc. Naturality and interchange imply ptr_Z((f⊗1)a(g⊗1))=f ptr_Z(a)g. Closure in stages is obtained by substituting b_{Z⊗T}=(1_Z⊗b_T⊗1_{Z*})b_Z and its nested right evaluation; the adjacent intermediate factors cancel by the duality snakes. Put M_{X,Z}=c_{Z,X}c_{X,Z}:X⊗Z→X⊗Z.

The actual published functor carrier has a single generator color X and no arbitrary coupon generators in its Statement. Consequently a multicolored coupon extension must be authored or stated as an additional proved supplier: assign each coupon its declared morphism, and check coupon interchange/composition, naturality of c and θ, and the two dual-mate equations against a complete colored coupon-tangle presentation. The present identities are categorical composite identities and do not assume that this missing geometric extension was already supplied by that Statement.

## 2. Semisimple coupon resolutions, with the dimension factors

For every object X choose e_{k,a}:k→X and p^{k,a}:X→k from an actual finite direct-sum decomposition, with p^{k,a}e_{l,b}=δ_{kl}δ_{ab}1_k and Σ_{k,a}e_{k,a}p^{k,a}=1_X. These equations follow by composing the inclusion/projection matrices. For f:X→Y, insert both resolutions to obtain the exact coupon identity

f=Σ_{k,a,b} e^Y_{k,b}(p_Y^{k,b}f e^X_{k,a})p_X^{k,a}.

Every middle term is a scalar multiple of 1_k. Off-diagonal simple-label terms vanish by Schur's lemma. This proves change-of-basis independence and coupon composition for an arbitrary finite network: expand at every internal edge, compose adjacent projection/inclusion pairs, and sum their Kronecker deltas. Tensoring or pre/post-composing preserves every equality. A graph with oriented reversed edges is handled by taking the dual maps; applying the dual functor reverses the composite and preserves the displayed identity.

Composition-dual and trace-dual coupons differ. Since tr_k(p^{k,a}e_{k,b})=d_k δ_ab, the trace-dual to e_{k,a} is p^{k,a}/d_k, not p^{k,a}. Therefore the complete trace-dual edge contraction is

1_X=Σ_{k,a} d_k e_{k,a}(p^{k,a}/d_k).

To see the same factors after bending, use the explicit isomorphism B(f)=(f⊗1_{k*})b_k:1→X⊗k* and its inverse B^{-1}(v)=(1_X⊗e_k)(v⊗1_k). The two composites reduce to f and v by the snakes. Close a bent pair f:k→X, g:X→k using r_k: the scalar is tr_k(gf). Thus orthonormal direct-sum coupons produce d_k δ_ab after a trace closure. Dividing the opposite coupon by d_k produces δ_ab. This is valid for arbitrary nonzero complex d_k, without conjugation or a Hermitian basis.

For the unit channel alone choose v_a=e_{0,a}:1→X and w_a=p^{0,a}:X→1. Then w_av_b=δ_ab and P_X=Σ_a v_aw_a is the idempotent projection onto the complete unit isotypic part. It is **not** generally 1_X. On Hom(1,X), however, P_Xv=v, and on Hom(X,1), wP_X=w. These assertions follow by inserting the direct-sum resolution and using Hom(1,k)=0 for k≠0.

## 3. Full arbitrary-coupon signed twist surgery

Define K_+(X)=Σ_i d_i θ_i ptr_i(M_{X,i}). Each summand is natural in X: apply naturality to both crossings and then the displayed partial-trace composition identity. Thus K_+ is a natural endomorphism of the identity functor. On a simple j, the partial-trace lemma gives

K_+(j)=d_j^{-1}Σ_i d_i θ_i s_{ji} 1_j=p_+ θ_j^{-1}1_j.

For completeness, the scalar sum is computed from balancing:

Σ_i d_i θ_i s_{ji}=θ_j^{-1}Σ_{i,k} d_i N_{ji}^k θ_k d_k=θ_j^{-1}d_j Σ_k θ_k d_k².

Here Σ_i d_i N_{ji}^k=d_jd_k follows from Frobenius reciprocity and multiplicativity of dimensions. Naturality with e_{j,a} and the resolution in §2 now gives, for every X,

K_+(X)=Σ_{j,a}e_{j,a}K_+(j)p^{j,a}=p_+ θ_X^{-1}.

This is an equality of complete endomorphisms, not only their traces or their action on a unit channel. In particular, for arbitrary coupons a:A→X and b:X→B,

b θ_X K_+(X)a=p_+ ba.

For r parallel oriented strands take X=X_1^{ε_1}⊗…⊗X_r^{ε_r}, where X^{-}=X*. Expand θ_X by repeated balancing. It includes each individual strand twist and every pairwise crossing in the full twist; the monodromy M_{X,i} expands by the two hexagons into precisely the crossings of one encircling i strand with that whole bunch. This supplies a word in crossings, b_i and r_i for the complete local move. Pre/post-composition allows any coupon network outside the local ball, including coupons joining different members of the bunch.

For the negative version set K_-(X)=Σ_i d_i θ_i^{-1}ptr_i(M_{X,i}^{−1}). On simples, balancing gives M_{j,i}^{−1}=(θ_j⊗θ_i)θ_{j⊗i}^{−1}. Hence

tr_j K_-(j)=Σ_{i,k} d_i θ_i^{-1} θ_j θ_i N_{ji}^k θ_k^{-1}d_k=θ_j d_j p_-.

Dividing by d_j and applying exactly the same naturality/resolution argument gives K_-(X)=p_- θ_X, hence b θ_X^{-1}K_-(X)a=p_-ba. This calculation takes place in the original category with its fixed trace. The negative and positive framings are fixed by the published convention that a positive full ribbon twist evaluates to θ.

These are the full arbitrary-coupon generalized Fenn–Rourke signed blowdown identities. Unlike an unframed Reidemeister-I argument, the equations retain the twist explicitly.

## 4. Exact signature and closed normalization for this move

Let the eliminated surgery component have framing ε=±1 and linking vector ℓ with all other surgery components. Write B=[[ε,ℓᵗ],[ℓ,A]]. The change of basis replacing each other attaching vector x by x−εℓ_x u gives the congruence B≅[ε]⊕(A−εℓℓᵗ). The number of components drops by one and σ(B) drops by ε. Section 3 shows that removing the signed circle and applying the compensating full twist divides F by p_ε. Consequently the ratio in the closed normalization is D^{-1}κ^{-ε}p_ε=1. No assumption κ=1 is made. A bordism weight n carried unchanged through this local presentation move contributes the same factor κ^{-n} on both sides.

The matrix calculation concerns surgery components; crossings with external graph strands are already handled by §3, so graph coupons do not contribute extra signature terms.

## 5. Circumcision and the local paired-handle unit-channel contraction

Define E_X=Σ_i d_i ptr_i(M_{X,i}). It is natural, and on simple j its scalar is (Σ_i d_i s_{ji})/d_j=D²δ_{j0}, by s²=D²C. Inserting the direct-sum resolution proves the full object identity E_X=D²P_X. In particular

D^{-2} w E_X v=wv

for every v:1→X and w:X→1, including arbitrary coupon networks realizing those maps. More generally Σ_a v_aw_a=P_X proves that the complete sum of dual unit coupons is precisely the same projector. This is the full coupon contraction for the **specified local unit-channel cancellation**, including its D factor; it does not assert that any geometric paired-handle diagram has this local word without a topological proof.

For relative circumcision, introduce an arbitrary newly framed knot K and a small zero-framed meridian U that encircles only K. Color both by Ω. For each simple K-color j, U acts by D²δ_{j0}. The j=0 coefficient is d_0=1 and a unit-colored knot with any framing or crossings acts as the empty graph. The entire graph evaluation, with arbitrary external coupons, is therefore multiplied by D². If K has framing f and linking vector ℓ with the old surgery link, its new linking matrix is

B'=[[A,ℓ,0],[ℓᵗ,f,1],[0,1,0]].

Replace each old vector x by x−ℓ_x u, where u denotes the meridian vector. This removes the old/K cross terms without changing A. Thus B'≅A⊕[[f,1],[1,0]]. The last block has determinant −1, one positive and one negative eigenvalue, and signature zero. Two added surgery components contribute D^{-2}, exactly canceling D². This proves normalized circumcision invariance algebraically. No assumption about K being unknotted, nullhomotopic, or disjoint from all old linking circles is used; the small U is disjoint from them and the external graph.

## 6. What is and is not the handlebody pairing

The composition pairing Hom(1,X)×Hom(X,1)→C is perfect, by the unit-channel basis in §2. A trace of 1_{i⊗i*} equals d_i², but it is not the pairing of the cup b_i with its opposite cap: r_i b_i=d_i. Nor is it a calculation of the geometric Heegaard pairing on a boundary state space.

This distinction forces a normalization correction in the actual native carriers. Their combination of (a) raw composition pairing, (b) cap functional D^{-m-1}κ^{-σ-n}F, and (c) no boundary-dependent cap rescaling cannot satisfy the TQFT axioms. For S², V=C. The ball cap functional of the empty surgery diagram is D^{-1}. Raw pairing therefore represents the ball by D^{-1}. Applying the same rule to the reverse ball gives D^{-1} as a functional, so gluing gives D^{-2}. But their closed S³ value is D^{-1}. For any allowed category with D≠1 these disagree. Equivalently the capped cylinder gives D^{-1} rather than the identity unless its boundary pairing/caps carry additional normalization. For a consistent sphere convention one may choose the geometric sphere pairing Q(v,w)=D^{-1}wv and ball vector 1; this repairs the sphere calculation, but the general genus pairing must still be computed.

Authentic BK §4.4 equation (4.4.5), printed p85, explicitly uses a **renormalized** pairing: D^{-g} times categorical evaluation with an additional d_i^{-1} endomorphism on each i⊗i* handle summand. This is further evidence that the raw local trace d_i² in the native carrier is insufficient. BK's special-link convention also weights uncolored open arcs; its coefficients cannot be transplanted unchanged into the present uniform closed-cap prescription. A complete conversion must state the cap embeddings, arc weights and geometric boundary pairing together and then check the cylinder.

The algebra needed once that geometric Gram matrix is known is exact: if Q has matrix G on bases v_a and u_b, define Q-duals u^a=Σ_b(G^{-1})_{ba}u_b. Then Σ_a v_a Q(−,u^a)=id and every glued coupon contraction is the matrix equality GG^{-1}=I. This yields all factors without a positivity assumption, but it does not identify G geometrically.

## 7. Exact topology and anomaly interfaces consumed

A topology supplier may use the generalized Fenn–Rourke moves of §3, with its signed local ribbon words, plus fixed-boundary isotopy and circumcision of §5. It must prove that every pair of presentations of the same collared, parametrized graph bordism is connected by those moves, or provide an explicit reduction of every admitted colored band slide to them. No such completeness statement is proved by the algebra above.

For a gluing proof, the topology supplier must give an explicit relative surgery diagram for the glued bordism and a finite cancellation sequence. It must specify (i) each removed meridian and its local word E_X, (ii) the actual unit-channel coupons v and w or the trace-dual coupons of §2, (iii) all added/removed surgery components and their matrices, (iv) the cap arc weights determining the geometric pairing Q, and (v) the intersection-form signature defect. Only then does §5 legitimately cancel a paired 1/2-handle; the words 'dual handlebodies cancel' do not supply (i)–(iv).

Parent is correcting weighted composition to use the middle gluing surface. With R_1⊂overline H_0⊕H_1 and R_2⊂overline H_1⊕H_2, the intended Maslov term is μ(R_1λ_0,λ_1,R_2^tλ_2) with parent's specified Wall-form sign. To combine κ^{-n} with κ^{-σ}, the required gluing identity has total exponents agree: the difference in surgery signatures, including the caps' reference forms, must be the negative of the added weight correction after all explicit local eliminations. This proposal proves the local signed blowdown and hyperbolic-circumcision changes only. It does not infer the global Wall identity from matrix congruence in a disjoint local ball.

## 8. Exact remaining gap and integration instruction

The following are **not closed** here:

* An explicit algebraic proof of the actual Ω-colored band-slide identity independent of a geometric reduction to the generalized Fenn–Rourke moves. Section 3 is stronger than a simple meridian computation but is a different local move. Neither the source's drawings nor an unproved claim that the moves are equivalent fills this gap.
* The relative presentation/completeness theorem, including any required circumcision, with genuine relative Cerf proof. This is separately owned by topology constructor.
* The complete paired-boundary-handlebody diagram reduction and its geometric Gram matrix, cap weights, and resulting cylinder normalization. The native closed-cap formula with raw composition pairing fails the explicit sphere test in §6.
* The global signature/Maslov comparison for that specific cap convention. Parent owns its corrected middle-space form and cocycle; the geometry still must match it.
* The multicolored arbitrary-coupon geometric evaluator extension, unless independently authored in another supplier. The published single-X Statement does not state that extension.

Thus these sections can supply new **proved algebraic helper claims** (complete signed twist-surgery composite; trace-dual coupon resolution; arbitrary-object meridian projection; normalized circumcision) and can replace incorrect native claims about d_i². They cannot honestly remove the unresolved proof obligation from the RT/TQFT theorem yet. This is established mathematics awaiting complete local construction, not an open problem and not an anomaly-free restriction.
