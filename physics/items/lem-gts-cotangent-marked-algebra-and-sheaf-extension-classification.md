---
id: lem-gts-cotangent-marked-algebra-and-sheaf-extension-classification
kind: lemma
title: "Marked algebra and sheaf extensions from polynomial presentations"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
page: gts-classical-deformation-cotangent-theory
deps:
  - lem-cotangent-complex-truncation-and-smooth-case
  - def-cotangent-complex-of-a-scheme-morphism
  - def-ext-groups-of-the-cotangent-complex
  - def-axiom-of-choice
dependency_roles:
  lem-cotangent-complex-truncation-and-smooth-case: mathematical-premise
  def-cotangent-complex-of-a-scheme-morphism: mathematical-premise
  def-ext-groups-of-the-cotangent-complex: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Stacks Project, Deformation Theory"
      url: https://stacks.math.columbia.edu/download/defos.pdf
      locator: "Section 2, Lemmas 2.1-2.7 and Remarks 2.4, 2.6; Section 7, Lemmas 7.1-7.8 and Remarks 7.5, 7.7."
    - title: "Stacks Project, The Cotangent Complex"
      url: https://stacks.math.columbia.edu/download/cotangent.pdf
      locator: "Lemma 11.3 (08RB), Remark 11.4 (08UP), Lemmas 18.9 (08T0), 18.10 (08US) and 20.4 (08UW); polynomial-presentation comparison and the standard-resolution face-difference map."
    - title: "Stacks Project, Deformations of ringed spaces and the naive cotangent complex"
      url: https://stacks.math.columbia.edu/tag/08UB
      locator: "Section 91.7, Lemma 91.7.2 (08UB): arbitrary module sheaves are allowed in the generator-refinement argument."
    - title: "Stacks Project, Deformations of ringed spaces and the naive cotangent complex"
      url: https://stacks.math.columbia.edu/tag/0GPZ
      locator: "Section 91.7, Lemma 91.7.4 (0GPZ): square-zero ringed-space extensions with any O_X-module kernel are classified by Ext^1 of the naive cotangent complex."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 0
---

## Statement

Assume the Axiom of Choice. For a ring map $R\to B$, let $\operatorname{Mod}(B)$ be the abelian category of all $B$-modules; for a map of sheaves of rings $R\to B$ on a scheme's underlying space, let $\operatorname{Mod}(B)$ be the abelian category of all sheaves of $B$-modules, without a quasi-coherence restriction. In either case write $D(\operatorname{Mod}(B))$ for its unbounded derived category and define $\operatorname{Ext}^i_B(K,M):=\operatorname{Hom}_{D(\operatorname{Mod}(B))}(K,M[i])$. In the sheaf case, choose a simplicial polynomial sheaf resolution $P_\bullet\to B$ in $R$-algebras: every $P_n$ is a polynomial $R$-algebra sheaf and the augmentation induces $\pi_0(P_\bullet)\cong B$ and $\pi_j(P_\bullet)=0$ for $j>0$. Define the cohomologically indexed cotangent complex by $L_{B/R}=N(\Omega_{P_\bullet/R}\otimes_{P_\bullet}B)$, where normalized simplicial degree $n$ is placed in cohomological degree $-n$ and its differential is the alternating sum of face maps. For a ring map use the same construction on the one-point ringed space. These constructions are independent up to quasi-isomorphism of the chosen functorial resolution. For a $B$-module (or $B$-module sheaf) $M$, isomorphism classes of square-zero extensions of $R$-algebras $0\to M\to E\to B\to0$ with the displayed kernel identification are canonically classified by $\operatorname{Ext}^1_B(L_{B/R},M)$; marked automorphisms are $\operatorname{Der}_R(B,M)=\operatorname{Ext}^0_B(L_{B/R},M)$. In particular this applies to $R=f^{-1}\mathcal O_S$ and $B=\mathcal O_X$. Neither quasi-coherence of the extension nor a global lift of its local sections is assumed.

The classification is compatible with changing the coefficient module, pulling back an extension along a ring or sheaf-algebra map, and restriction to an open subset. For a square-zero surjection $R\twoheadrightarrow A$ with kernel $I$, a map $A\to B$, and an $A$-linear map $c:I\to M$ (where $M$ is an $A$-module through $A\to B$), the extensions whose structural map induces $c$ are precisely the fiber, on isomorphism classes, of restriction to $A$ over the class obtained from $0\to I\to R\to A\to0$ by changing its kernel through $c$.

## Statement references

[Stacks Project, Deformation Theory, Sections 2 and 7](https://stacks.math.columbia.edu/download/defos.pdf)

## Facts & Assumptions

**Given:** the ring or sheaf-algebra data and the marked square-zero convention in the Statement; all rings are commutative and unital.

[F1] [[lem-cotangent-complex-truncation-and-smooth-case]] identifies the two-term conormal complex of a polynomial presentation with $\tau_{\ge-1}L$, and identifies its Ext in degrees zero and one with those of $L$.

[F2] [[def-cotangent-complex-of-a-scheme-morphism]] supplies the scheme-level cotangent construction and affine comparisons; [[def-ext-groups-of-the-cotangent-complex]] defines derived Ext in its stated scope. The broader sheaf-ring resolution and all-module-sheaf derived Ext convention used here are defined explicitly in the Statement.

[F3] The Stacks Project, Section 91.7, Lemma 91.7.2 (08UB) refines every class in $\operatorname{Ext}^1$ of the sheaf naive cotangent complex to a polynomial presentation for an arbitrary module sheaf, and Lemma 91.7.4 (0GPZ) states the square-zero extension classification for every $\mathcal O_X$-module. Together with [F1]'s degree-one comparison between the naive and full cotangent complexes, these verify the non-quasi-coherent coefficient scope used here.

[A1] [[def-axiom-of-choice]] is used for lifts of a set of polynomial generators in the ring case and the resolution and Ext suppliers.

## Proof

**Given:** [F1], [F2], [A1] and the Statement's data. A polynomial sheaf $R[T]$ means the sheafification of the polynomial-algebra presheaf on a sheaf of sets $T$; its stalk at $x$ is $R_x[T_x]$.

1.1 Write $P_T=R[T]\twoheadrightarrow B$, $J_T=\ker(P_T\to B)$, $Q_T=J_T/J_T^2$, $V_T=\Omega_{P_T/R}\otimes_{P_T}B$, and $K_T=[Q_T\xrightarrow d V_T]$ in degrees $-1,0$. In the sheaf case $T\to B$ is any sheaf of sets giving this surjection. We construct actual global comparison maps before checking stalks. Put $P_B=R[B]$ and define $a_T:P_T\to P_B$ by $t\mapsto[\alpha(t)]$, where $\alpha:T\to B$ is the given generator map and $[b]$ is the generator labelled by $b$. The free polynomial sheaf's universal property gives this sheaf-algebra map globally; it preserves augmentation to $B$. It induces a global chain map $j_T:K_T\to K_B$ by $q\mapsto a_T(q)$ modulo $J_B^2$ and $dp\otimes b\mapsto da_T(p)\otimes b$. No local lift is chosen. Next let $P_\bullet\to B$ be the functorial standard simplicial polynomial sheaf resolution defined in the Statement, so $P_0=P_B$. There is a global map $\ell:L_{B/R}\to K_B$: degree zero is the identity on $V_B$, degree $-1$ sends $df\otimes b$ to $(d_0f-d_1f)b$ modulo $J_B^2$, and lower degrees map to zero. Here $\bar f$ denotes the augmentation to $B$; the difference lies in $J_B$ because both face maps have the same augmentation. The identity $d_0(fg)-d_1(fg)\equiv\bar f(d_0g-d_1g)+\bar g(d_0f-d_1f)\pmod{J_B^2}$ verifies that the formula respects differentials and tensor balancing; the simplicial face identities make it kill the alternating boundary from degree $-2$. Thus it is an actual sheaf-complex map. Only now take stalks: polynomial sheafification, the standard resolution, kernels and tensor commute with stalks, and [F1] identifies $\tau_{\ge-1}\ell_x$ as a quasi-isomorphism. The map $(j_T)_x$ is also a quasi-isomorphism: choose, only for this stalk calculation, polynomial lifts of the opposite presentation's generators to obtain an inverse substitution over $B_x$. Either composite and the identity induce the same map to $B_x$. Their difference gives a chain homotopy on the two-term conormal complexes: send $dt$ to the difference of the two substituted values of $t$ modulo the target relation ideal squared. Expanding a relation modulo that square proves the degree $-1$ homotopy identity, and differentiating proves the degree-zero identity. Thus the substitutions are inverse up to chain homotopy. These stalkwise inverse choices are not used as sheaf maps. Consequently the actual global roof $K_T\xrightarrow{j_T}K_B\xleftarrow{\tau_{\ge-1}\ell}\tau_{\ge-1}L_{B/R}$ consists of quasi-isomorphisms. It is strictly compatible with every given sheaf map $r:T'\to T$ over $B$: substitution defines $P_{T'}\to P_T$, and $a_T\circ P(r)=a_{T'}$ on all generators, hence $j_T\circ K(r)=j_{T'}$. Therefore $K(r)$ is a global quasi-isomorphism by two-out-of-three. Stalkwise choices have only verified already defined global maps; they have not been glued to manufacture a comparison. Use this roof to identify degree-zero and degree-one Ext with those of $L$, retaining derived Hom for sheaves. The ring case uses the same formulas. [F1, F2, A1, construct, algebra]

2.1 For a $B$-linear map $u:Q\to M$, give $M\oplus P$ multiplication $(m,p)(n,q)=(\bar p n+\bar q m,pq)$, where $\bar p$ is the image in $B$. Divide by the additive subgroup of pairs $(-u(j),j)$, $j\in J$; it is an ideal because $u(pj)=\bar p u(j)$ and $u(J^2)=0$. Call the resulting algebra $E_u$. Its quotient is $B$ and its kernel is exactly $M$: a pair mapping to zero has $p\in J$ and equals $(m+u(p),0)$, while a graph pair with second component zero has $j=0$. Kernel products vanish. Conversely, a lift $P\to E$ of a presentation gives $u(j)$ by evaluation of $j$ in $E$; this kills $J^2$, is $B$-linear and gives an isomorphism $E_u\to E$. Surjectivity and injectivity follow from the just described exact kernel and quotient, so no surjectivity of $P\to E$ is required. These formulas apply sectionwise followed by sheafification. A sheaf presentation lifting to $E$ always exists: take $T$ to be the underlying sheaf of sets of $E$. In rings lift the chosen generators using AC. [step 1.1, A1, construct, algebra]

3.1 Changing the lifted generators by a map $T\to M$ changes evaluation of a polynomial $j$ by $\sum_t(\partial j/\partial t)\delta_t$, since terms containing two kernel elements vanish. Thus it changes $u$ by $\theta d$, for the corresponding $B$-linear map $\theta:V\to M$. Conversely this formula gives an isomorphism of the two graph quotients. Given two extensions, take a common lifted presentation: in rings use pairs of generator lifts, and in sheaves take $T=E_1\times_B E_2$ as a sheaf of sets. If their maps are $u_1,u_2$, their difference defines a class $[u_2-u_1]\in\operatorname{Ext}^1_B(K,M)$. The triangle $V[0]\to K\to Q[1]\to V[1]$ shows that this class is zero exactly when $u_2-u_1=\theta d$ for a global $\theta:V\to M$. Hence zero difference is exactly existence of a marked isomorphism. Refining presentations preserves the class; common refinements show independence. The strict standard-comparison squares of step 1.1 and the derivative formula just proved show that no choices of generator lifts change it: compare any lifted presentation $T\to E$ with the full generator sheaf underlying $E$ using that given map $T\to E$. It induces an actual polynomial sheaf map and a quasi-isomorphism of conormal complexes by step 1.1, and its relation-evaluation map is the pullback of that for $E$. For two extensions use the full generator sheaf $E_1\times_B E_2$, whose two projections are actual maps and whose map to $B$ is an epimorphism; this avoids assuming that a mere generating sheaf $T\to B$ is itself an epimorphism. [step 1.1, step 2.1, F2, algebra, construct]

4.1 Using the generator-refinement mechanism of [F3], every class $\eta\in\operatorname{Ext}^1_B(K_T,M)$ can be represented by a conormal map after an actual global refinement of the generators. Its image in $\operatorname{Ext}^1_B(V_T,M)$ is represented by a module-sheaf extension $0\to M\to H\xrightarrow{p}V_T\to0$. Use the generator map $e:T\to V_T$, $t\mapsto dt\otimes1$, to define the sheaf fiber product $T'=T\times_{V_T}H$. Its projections $r:T'\to T$ and $h:T'\to H$ are global sheaf maps satisfying $ph=er$, and $r$ is an epimorphism since it is a pullback of $p$. Thus $P_{T'}\to B$ is still an epimorphism: its stalk generators include lifts of all generators of $P_T\to B$. The actual substitution map $P(r):P_{T'}\to P_T$ induces $K(r):K_{T'}\to K_T$, and step 1.1 proves this global map is a quasi-isomorphism compatible with the standard-resolution roof. Pull back $\eta$ along it. The free $B$-module sheaf $V_{T'}$ on $T'$ has a global $B$-linear map $\widetilde h:V_{T'}\to H$ extending $h$. Its composite with $p$ is the actual map $V_{T'}\to V_T$. Hence the pulled-back module extension $H\times_{V_T}V_{T'}\to V_{T'}$ has the explicit global splitting $v'\mapsto(\widetilde h(v'),v')$. No section of $r$ and no splitting of $H\to V_T$ is asserted. The image of the pulled-back $\eta$ in $\operatorname{Ext}^1_B(V_{T'},M)$ is therefore zero. The long exact sequence of $V_{T'}[0]\to K_{T'}\to Q_{T'}[1]$ represents it by a global morphism $Q_{T'}\to M$. Step 2.1 now constructs its extension, and step 1.1 identifies its class with the original $\eta$ via actual comparison maps. In rings $V_T$ is free and projective, so this refinement is unnecessary. Taking the split extension $M\oplus B$ as zero, step 3.1 proves bijectivity. This construction also works when $H$ is a nonsplit module-sheaf extension: it is its pullback to $V_{T'}$, not $H$ itself, that is split. [step 1.1, step 2.1, step 3.1, F2, F3, construct, algebra]

4.2 A marked automorphism of $E$ has form $e\mapsto e+D(\bar e)$. To see this, subtract its identity map: the difference has values in $M$ and vanishes on the marked kernel. Multiplying two elements gives exactly $D(bb')=bD(b')+b'D(b)$, and the structure map gives $D(R)=0$. Conversely that identity makes the displayed map an $R$-algebra homomorphism. Its inverse is obtained with $-D$, and composition adds derivations. By the definition of differentials these derivations are $\operatorname{Hom}_B(\Omega_{B/R},M)$; by [F1] and the degree-zero truncation of derived Hom this is $\operatorname{Ext}^0_B(L_{B/R},M)$. The same calculation on sections defines sheaf derivations and their global group. [F1, F2, step 3.1, algebra]

5.1 Addition agrees with addition of classes: take the fiber product $E_u\times_BE_v$, whose kernel is $M\oplus M$, and change that kernel by the sum map $M\oplus M\to M$. On a common lifted presentation its conormal evaluation is $u+v$. Changing a kernel by $a:M\to M'$ similarly replaces $u$ by $au$. Pullback along $B_1\to B_2$ replaces an evaluation map by its composition with $J_1/J_1^2\to J_2/J_2^2$: take $T_2$ to be the underlying sheaf of sets of the whole extension $E_2$, with its identity evaluation $T_2\to E_2$, and set $T_1=B_1\times_{B_2}T_2$. The projection $T_1\to T_2$ gives the actual polynomial sheaf map, while the pair of the $B_1$-projection and the $E_2$-evaluation maps lifts $T_1$ into $E_2\times_{B_2}B_1$. Both $T_2\to B_2$ and $T_1\to B_1$ are epimorphisms of sheaves, so these are presentations; all maps are the displayed global projections. The comparisons to the standard complex commute as in step 1.1. These formulas prove the claimed naturality, including restrictions. All comparisons are independent of presentation by step 3.1. [step 2.1, step 3.1, step 4.1, algebra]

6.1 Finally pull an extension of $B$ back to $A$, giving $E\times_B A$. Its induced kernel map from $I$ is $c_E$. The class of $R\to A$, with its kernel changed by $c$, is represented by the pushout $(M\oplus R)/\{(-c(i),i):i\in I\}$, with multiplication as in step 2.1 using the $A$-action on $M$. If $c_E=c$, the map $(m,r)\mapsto(m+r_E,\bar r)$ is a marked isomorphism from this pushout to $E\times_B A$. Conversely an isomorphism of these $R$-algebra extensions forces $c_E=c$ by evaluating each $i\in I$ through the structural $R$-map. Step 5.1 identifies these operations with the corresponding Ext restriction and coefficient maps. Thus the desired extensions are precisely the asserted fiber. There is no additional choice of an $R$-map into $E$: an $R$-algebra already includes it. This proves every assertion. [step 2.1, step 4.1, step 5.1, step 4.2, algebra] ∎
