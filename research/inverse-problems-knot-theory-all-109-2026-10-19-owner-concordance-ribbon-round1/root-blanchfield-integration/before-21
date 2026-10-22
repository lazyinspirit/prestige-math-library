---
id: lem-standard-infection-cobordisms-have-boundary-generated-second-homology
kind: lemma
title: Ordinary homology of standard infection and connected-sum cobordisms
status: draft
origin: session
deps: [thm-excision-and-mayer-vietoris-with-local-coefficients, thm-compact-collared-manifold-local-coefficient-lefschetz-duality-in-zf, thm-compact-oriented-manifold-local-coefficient-duality-in-zf, def-cup-and-cap-products-with-local-coefficient-pairings]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Cha, Amenable L2-theoretic methods and knot concordance
      url: https://arxiv.org/pdf/1010.1058
      locator: Section4.3, construction of E and C, preprint pages17–18
    - title: Cha and Kim, Iterated satellite operators on the knot concordance group
      url: https://arxiv.org/pdf/2402.04629v2
      locator: Lemma4.14, printed page18
---

## Statement

Let $P\cup\eta$ be a smooth oriented two-component link in $S^3$ with unknotted axis $\eta$, and let $K$ be a smooth oriented knot. Supply disjoint closed product tubes and positive meridian/preferred zero-linking-longitude peripheral data for the knots and axis. Write $P(K)$ for infection along $\eta$ with the untwisted companion $K$. For a knot $L$, write $M(L)$ for its actual chosen zero-longitude filling, with the orientation extending its exterior. Let $w=\operatorname{lk}(P,\eta)$.

There is a compact oriented smooth cobordism $E$ with
$$\partial E=M(P)\sqcup M(K)\sqcup(-M(P(K))).$$
For any commutative unital coefficient ring $R$, it has $H_1(E;R)=R$ and $H_2(E;R)=R^2$. The two first boundary components induce the displayed basis in degree two. If $s_L=\alpha_L\cap[M(L)]$ where $\alpha_L\in H^1(M(L);R)$ evaluates as $1$ on the positive meridian, then, in those coordinates,
$$i_*s_{P(K)}=i_*s_P+w\,i_*s_K.$$
In degree one the meridians of $P$, $K$ and $P(K)$ map to $1,w,1$, respectively.

Likewise, for any finite nonempty list of knots $K_1,\ldots,K_q$ with the same supplied peripheral data, there is a compact oriented smooth cobordism $C$ from $\bigsqcup_j M(K_j)$ to $M(K_1\#\cdots\#K_q)$, with $H_1(C;R)=R$ and $H_2(C;R)=R^q$. The incoming degree-two classes are its coordinate basis and the outgoing class maps to their sum. In particular, for $X=E$ or $C$, the outgoing inclusions are injective on $H_1,H_2$ and the union of incoming components surjects onto $H_2(X;R)$.

The peripheral and framing data are supplied, rather than selected by an existence theorem. Their subsequent construction and the homology assertions use no additional choice principle. This is an ordinary-coefficient assertion; arbitrary twisted-coefficient boundary generation is not asserted.

## Facts & Assumptions

**Given:** The finite smooth knot data, product tubes and zero-linking peripheral systems in the Statement; all subsequent homology has constant coefficients $R$.

[F1] The small-chain Mayer–Vietoris exact sequences hold for these product-collared gluings, with no choice axiom. [[thm-excision-and-mayer-vietoris-with-local-coefficients]]

[F2] Oriented cap duality and its boundary formula hold for compact collared manifolds and their closed boundaries, retaining constant $R$ actions by forgetting to abelian groups. [[thm-compact-collared-manifold-local-coefficient-lefschetz-duality-in-zf]], [[thm-compact-oriented-manifold-local-coefficient-duality-in-zf]], [[def-cup-and-cap-products-with-local-coefficient-pairings]]

## Proof

1.1 The elementary peripheral homology calculation is as follows. In $S^3=X_L\cup N(L)$, the degree-three orientation connector to $H_2(\partial N(L);R)$ is an isomorphism, represented by cutting a fundamental cycle along the torus. Mayer–Vietoris therefore gives $H_2(X_L;R)=0$ and an isomorphism $H_1(\partial N(L);R)\to H_1(X_L;R)\oplus H_1(N(L);R)$. The preferred longitude is zero in the exterior by its supplied peripheral property, while the positive meridian generates its $R$ summand. Thus $H_1(X_L;R)=R[\mu_L]$. The cohomology sequence gives the dual statement in degree one, with its generator evaluating as $1$ on $\mu_L$. Filling the preferred longitude gives, by the same two sequences, $H_1(M(L);R)=R[\mu_L]$ and $H^1(M(L);R)=R[\alpha_L]$. Closed cap duality [F2] identifies $H_2(M(L);R)$ with $R[s_L]$. The same exterior calculation with two removed tubes says that their meridians freely generate degree one. Filling one removed tube by its original solid torus drops that meridian coordinate and preserves the other one. Since $\lambda_P$ is zero in the one-knot exterior $X_P$, its $\mu_P$ coordinate on the two-component exterior is zero: $[\lambda_P]=v[\mu_\eta]$ for some integer $v$. Similarly $\lambda_\eta$ has zero $\mu_\eta$ coordinate; after filling the tube of $\eta$, its remaining coordinate is the class of the parallel axis in $X_P$, which by the definition of $w$ is $w[\mu_P]$. Thus $[\lambda_\eta]=w[\mu_P]$. Equality of $v$ and $w$ is not needed anywhere in this proof. These computations use finite torus/sphere product chains and the exact sequences, not a choice of Seifert surfaces. [F1, F2, given, construct, algebra]

2.1 Let $V_K$ be the filling solid torus in $M(K)$. Glue $M(P)\times[0,1]$ and $M(K)\times[0,1]$ along $N(\eta)\times\{0\}$ and $V_K\times\{0\}$ so that $\lambda_\eta$ maps to $\mu_K$ and $\mu_\eta$ to $\lambda_K$. The map extends over the solid tori: their core coordinates agree and their meridian disks agree up to the orientation fixed by the exterior filling. With the orientation on $V_K$ induced by the oriented filling, this is an orientation-reversing map of the boundary solid tori, as required for gluing the oriented four-dimensional products. The remaining bottom boundary is $(M(P)\setminus\operatorname{int}N(\eta))\cup X_K$. Its unfilled knot exterior is the infection exterior: it glues $X_K$ in place of $N(\eta)$ with the stated peripheral exchange. By step 1.1, the exchanged relation kills $\mu_\eta$, while $\mu_K=w\mu_P$; therefore the old longitude $\lambda_P=v\mu_\eta$ is still zero. Since the axis is unknotted, its exterior is a solid torus whose meridian is $\lambda_\eta$; after the peripheral exchange this fills the meridian $\mu_K$ of $K$, recovering $S^3$. The image of $P$ is the defined infection knot $P(K)$. The unchanged filling at $P$ is exactly its preferred zero-longitude filling, so the remaining boundary is $-M(P(K))$. Near the gluing-torus edge the local four-dimensional model is a product of that torus and two half-planes glued along one boundary ray. Rescaling the sector angle identifies it with a half-plane; this supplies the usual rounded smooth boundary chart and a collar, and is a product construction over the supplied torus. Away from this edge the existing product charts persist. Thus the finite gluing gives the stated smooth oriented collared cobordism, not merely a formal sum of boundary manifolds. [given, step 1.1, construct, algebra]

3.1 The product homotopies descend to a deformation retraction of $E$ onto $M(P)\cup_{N(\eta)=V_K}M(K)$, taking each interval coordinate to zero. In its Mayer–Vietoris sequence the solid torus has $H_2=0$ and $H_1=R$. Its degree-one map into $R[\mu_P]\oplus R[\mu_K]$ sends $1$ to $(w,-1)$, which is injective over every $R$. The degree-zero difference map is injective too. Exactness consequently gives $H_2(E;R)=H_2(M(P);R)\oplus H_2(M(K);R)=R^2$ and $H_1(E;R)=(R^2)/R(w,-1)=R$. The first meridian maps to its generator and the second to $w$ times it. The outgoing meridian of $P(K)$ is the original meridian of $P$ away from the infection torus, so its image is that same generator. Hence its degree-one inclusion is an isomorphism. [F1, step 1.1, step 2.1, construct, algebra]

4.1 The cohomology Mayer–Vietoris sequence identifies $H^1(E;R)$ with the pairs $(a\alpha_P,b\alpha_K)$ satisfying $wa-b=0$: the preceding degree-zero difference map is surjective, and the following restriction to the common solid torus is $(a,b)\mapsto wa-b$. Let $\alpha$ be the resulting unique class restricting to $(\alpha_P,w\alpha_K)$. On the outgoing component it evaluates as $1$ on its meridian by step 3.1, so restricts there to $\alpha_{P(K)}$. Relative duality and the cap boundary identity give
$$\partial(\alpha\cap[E,\partial E])=-\alpha|_{\partial E}\cap[\partial E]=-s_P-w\,s_K+s_{P(K)}.$$
The cohomology-first cap boundary formula contributes the initial minus sign because $\alpha$ has degree one; the boundary orientations in step 2.1 give the displayed signs of the component classes. This is the boundary of a relative three-class, so its image in $H_2(E;R)$ is zero. It follows that $i_*s_{P(K)}=i_*s_P+w\,i_*s_K$. Its first coordinate is $1$, which proves the outgoing degree-two map injective even for a coefficient ring with zero divisors. The incoming degree-two surjectivity was already an isomorphism in step 3.1. [F1, F2, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 Realize connected sum as infection along a positive meridian of the first knot, whose winding number is $1$: the meridional disk meets one oriented arc, and replacing its straight product arc by the untwisted companion arc is precisely the connected-sum construction. Thus step 2.1 with this axis gives the two-knot connected-sum cobordism. For $q=1$ use a product. Inductively glue the next such infection piece to the current outgoing boundary. Equivalently attach the next surgery product along the meridional filling solid torus of the current outgoing manifold. Mayer–Vietoris has again a common solid torus whose degree-one map has the new component coordinate $-1$, and degree-two group zero. Hence each attachment adds one independent incoming $H_2$ generator and keeps $H_1=R$, with every meridian mapping to $1$. Step 4.1 with $w=1$ says that the new outgoing degree-two generator is the previous outgoing generator plus the new incoming generator. Induction therefore gives exactly the claimed coordinate basis and sum for arbitrary finite $q$. Orientation-reversed pieces are covered as well: reflection of the ambient sphere, reversing the knot orientation when taking the concordance inverse, preserves the zero slope and identifies its surgery with the oppositely oriented surgery manifold. The reflected product and filling give the same construction for a signed finite list. [F1, F2, step 2.1, step 3.1, step 4.1, construct, algebra]

6.1 The only choices made after the supplied tubes and peripheral data were finite gluing parameters and individual representatives of exact-sequence classes. All homology and cohomology identities were proved with constant coefficients; no twisted surjectivity was inferred from them. The product-torus corner charts and outgoing collars are explicit and are independent of any proper locally flat annulus neighborhood theorem. Thus these computations prove precisely the ordinary inclusion properties needed for the boundary-cokernel gluing inequality, in the full finite infection and connected-sum scope stated above. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, algebra] ∎
