---
id: ex-complex-k-ahss-for-complex-projective-space
kind: example
title: Complex K-AHSS for complex projective space
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["def-axiom-of-choice", "thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory", "thm-reduced-k-theory-exact-sequence-of-a-cofibration", "thm-schubert-cells-give-the-stable-grassmannian-cw-structure", "def-schubert-cells-in-real-and-complex-grassmannians", "thm-cellular-cochains-compute-cohomology-with-local-coefficients", "thm-an-exact-couple-generates-a-spectral-sequence", "def-exact-couple", "thm-hopf-line-calculation-of-k-zero-of-the-two-sphere", "thm-complex-bott-periodicity", "def-external-product-in-complex-k-theory", "prop-ahss-collapse-determines-only-the-associated-graded-object", "lem-cw-quotients-and-collapse-of-a-contractible-subcomplex", "prop-relative-cw-inclusions-are-cofibrations", "lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient"]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from complex K-theory."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Vector Bundles & K-Theory, Propositions 2.23–2.24, printed pp. 66–68"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Propositions 2.23–2.24, printed pp. 66–68"
verification:
  audited: 2026-09-22
---

## Example

Assume AC. For $n\ge0$ and $\mathbb{CP}^n$ the complex $K$-theory Atiyah–Hirzebruch spectral
sequence collapses at $E_2$, the group $K^1(\mathbb{CP}^n)$ vanishes, and
$$K^0(\mathbb{CP}^n)\cong\mathbb Z[\alpha]/(\alpha^{n+1}),\qquad \alpha=[L]-1,$$
where $L$ is the tautological complex line. The ring is supplied by the
independent relative-product calculation, not by the additive page.

## Facts & Assumptions

[A1] Assume AC, inherited from the complex $K$-theory suppliers and the cellular cohomology comparison ([[def-axiom-of-choice]]).

[F1] On finite CW pairs, complex $K$-theory has natural cofiber long exact sequences, homotopy invariance, suspension, finite-wedge additivity and coefficients $K^{2j}(*)=\mathbb Z$, $K^{2j+1}(*)=0$ ([[thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory]]). Separately, if $A\hookrightarrow Y$ is a closed based cofibration of compact Hausdorff well-pointed CGWH spaces, reduced $K^0$ has the exact quotient sequence and its successive mapping-cone continuation ([[thm-reduced-k-theory-exact-sequence-of-a-cofibration]]). This second interface is the one used below for the coordinate balls $C_i$, which need not be subcomplexes of the Schubert CW structure.

[F2] The Schubert structure of $\mathbb{CP}^n=\operatorname{Gr}_1(\mathbb C^{n+1})$ is finite CW, with symbols $a=1,\ldots,n+1$ and cells of real dimension $2(a-1)$ ([[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]], [[def-schubert-cells-in-real-and-complex-grassmannians]]).

[F3] Under AC, cellular cochains compute singular cohomology, including constant integral coefficients ([[thm-cellular-cochains-compute-cohomology-with-local-coefficients]]).

[F4] An initial exact couple generates a spectral sequence with $d^r$ of bidegree $(-r,r-1)$ and $E^r=N^r/B^r$, where $N^r=k^{-1}\operatorname{im}i^{r-1}$ and $B^r=j\ker i^{r-1}$ with the specified shifts ([[thm-an-exact-couple-generates-a-spectral-sequence]], [[def-exact-couple]]).

[F5] On $\mathbb{CP}^1=S^2$, the reduced tautological class $\beta=[L]-1$ generates $\widetilde K^0(S^2)$ in the fixed clutching convention. For compact Hausdorff based well-pointed spaces, the reduced external product is defined on their smash product and is natural under based pullback; the $r$-fold product of $\beta$ generates $\widetilde K^0(S^{2r})$ by Bott periodicity ([[thm-hopf-line-calculation-of-k-zero-of-the-two-sphere]], [[def-external-product-in-complex-k-theory]], [[thm-complex-bott-periodicity]]).

[F6] Collapse and convergence identify the associated graded family; they supply no general ring-extension data ([[prop-ahss-collapse-determines-only-the-associated-graded-object]]).

[F7] Consecutive nonempty skeletal quotients retain just their relative cells and the quotient vertex; subcomplex inclusions are cofibrations and their based cofibers are equivalent to the quotients ([[lem-cw-quotients-and-collapse-of-a-contractible-subcomplex]], [[prop-relative-cw-inclusions-are-cofibrations]], [[lem-cofiber-of-a-based-cofibration-is-equivalent-to-the-quotient]]).

## Verification

**Proof technique:** direct.

**Given:** $n\ge0$, AC, and $X=\mathbb{CP}^n$ with its Schubert skeleta; put $X^p=\varnothing$ for $p<0$ and $X^p=X$ for $p\ge2n$.

1.1 By [F2], the integral cellular cochains are $\mathbb Z$ in degrees $0,2,\ldots,2n$ and zero elsewhere; every cellular coboundary is zero. By [F3], $H^p(X;\mathbb Z)$ has exactly these groups. This calculation needs no cohomology ring presentation. [A1, F2, F3]

1.2 Construct the additive skeletal sequence directly using the actual $K$-pair sequences of [F1]. In homological indexing put $D_{a,b}=K^{-a-b-1}(X^{-a-1})$, $E_{a,b}=K^{-a-b}(X^{-a},X^{-a-1})$; let $i$ be restriction, $j$ the pair connecting map, and $k$ the forget-relative map. The pair long exact sequences give $\operatorname{im}i=\ker j$, $\operatorname{im}j=\ker k$, $\operatorname{im}k=\ker i$ with exactly the shifts in [F4]. Thus [F4] gives a spectral sequence. Reindex $(p,q)=(-a,-b)$ to obtain $E_1^{p,q}=K^{p+q}(X^p,X^{p-1})$ and $d_r:(p,q)\mapsto(p+r,q-r+1)$. [A1, F1, F4]

1.3 We compute the ring independently of the spectral sequence. Induct on $r$. For $r=0$, the tautological line on the point is trivial, so $\alpha=0$ and $K^0(\mathbb{CP}^0)=\mathbb Z$. Induct simultaneously that $K^1(\mathbb{CP}^{r-1})=0$ and that $1,\alpha,\ldots,\alpha^{r-1}$ is a basis there. The odd part of the pair sequence and the odd sphere coefficient give $K^1(\mathbb{CP}^r)=0$. The cofibration $\mathbb{CP}^{r-1}\subset\mathbb{CP}^r$ has quotient $S^{2r}$ by [F2] and [F7]; [F1] and the even-sphere coefficients give a short exact sequence
$$0\longrightarrow\widetilde K^0(S^{2r})\longrightarrow K^0(\mathbb{CP}^r)\longrightarrow K^0(\mathbb{CP}^{r-1})\longrightarrow0.$$
It remains to identify the kernel generator. Realize $\mathbb{CP}^r$ as the scalar-orbit space of the boundary of $D^2_0\times\cdots\times D^2_r$, and let $C_i$ be the image of the face with the $i$th coordinate on $\partial D^2_i$. Normalizing that coordinate to $1$ identifies $C_i$ with the product of the other disks, so $C_i$ is a closed $2r$-ball, $\mathbb{CP}^r=\bigcup_iC_i$, and $C_i\cap C_j=\partial C_i\cap\partial C_j$. The radial collars of the polydisk faces descend through scalar multiplication and give neighborhood deformation retractions for every $C_i$ and every finite union used below. Thus their inclusions are closed cofibrations of compact Hausdorff CGWH spaces, and the corresponding quotient basepoints are well-pointed. The compact-cofibration exact sequence in [F1], rather than the finite-CW-pair clause, therefore applies. The tautological line has the section obtained by setting its $i$th coordinate equal to $1$ on $C_i$, so exactness gives a relative lift $\alpha_i\in K^0(\mathbb{CP}^r,C_i)$ of $\alpha$. For a compact Hausdorff $Y$ and closed cofibration subspaces $A,B$ whose union is also collared as above, the quotient spaces are based well-pointed and [F5] supplies the reduced product. Pulling it back along the based diagonal $Y/(A\cup B)\to(Y/A)\wedge(Y/B)$ gives
$$K^0(Y,A)\otimes K^0(Y,B)\longrightarrow K^0(Y,A\cup B),$$
whose forget-support image is the ordinary product by naturality of the external product. On $C_0=D^2_1\times\cdots\times D^2_r$, put $\partial_iC_0=\{|z_i|=1\}$. Contracting the other disk coordinates gives a pair equivalence $(C_0,\partial_iC_0)\simeq(D_i^2,\partial D_i^2)$. The two line sections normalized in coordinates $0$ and $i$ differ on this boundary by $z_i$ or its inverse according to clutching direction. Its winding is $\pm1$, so the relative restriction of $\alpha_i$ is the Hopf generator up to sign by [F5]. The lift is unambiguous because $K^{-1}(C_i)=K^{-1}(*)=0$. Hence the relative product $\alpha_1\cdots\alpha_r$ restricts under
$$C_0/\partial C_0\cong (D^2/\partial D^2)^{\wedge r}\cong S^{2r}$$
to the $r$-fold Bott generator and is therefore a generator by [F5]. Put $U=C_1\cup\cdots\cup C_r$. In the scalar-orbit coordinates a point of $U$ has $\max_{j\ge1}|z_j|=1$ and $|z_0|\le1$. The equivariant homotopy $(z_0,z_1,\ldots,z_r)\mapsto((1-t)z_0,z_1,\ldots,z_r)$ retracts $U$ onto the standard $\mathbb{CP}^{r-1}$ given by $z_0=0$. It fixes that subspace. The induced map of relative pair sequences therefore identifies $K^0(\mathbb{CP}^r,U)$ with $K^0(\mathbb{CP}^r,\mathbb{CP}^{r-1})$: on absolute groups it is identity and on subspace groups it is the retraction isomorphism, so exactness gives the relative comparison. Thus this relative generator maps to the kernel generator for restriction to $\mathbb{CP}^{r-1}$, while forgetting support maps it to $\alpha^r$. Therefore $1,\alpha,\ldots,\alpha^r$ is a basis. Take the relative product of all $r+1$ lifts $\alpha_0,\ldots,\alpha_r$. It lies in $K^0(\mathbb{CP}^r,\bigcup_i C_i)=K^0(\mathbb{CP}^r,\mathbb{CP}^r)=0$, and its absolute image is $\alpha^{r+1}$, proving nilpotence without a forward induction. This completes the induction and proves
$$K^0(\mathbb{CP}^n)\cong\mathbb Z[\alpha]/(\alpha^{n+1}).$$
No multiplicative spectral-sequence theorem is used. [F1, F2, F5, F7, construct, algebra]

2.1 For even $p$ in $0\le p\le2n$, the relative quotient is $S^p$, with the $p=0$ term interpreted as the absolute group of the single vertex. For odd $p$ the successive skeleta agree, and outside this range the relative groups vanish. The quotient identifications [F7], suspension and coefficients [F1] therefore give $E_1^{p,q}=\mathbb Z$ precisely when $p$ is in that even range and $q$ is even, and zero otherwise. Every differential raises total degree by one, so every possible source of a nonzero differential has a zero target. Induction on the page gives $d_r=0$ for every $r\ge1$ and the same support on all pages. By step 1.1, the resulting second page has $E_2^{p,q}\cong H^p(X;\mathbb Z)$ for even $q$ and zero for odd $q$. In particular the K-AHSS collapses at $E_2$. [F1, F2, F7, step 1.1, step 1.2]

2.2 For completeness verify the finite abutment from the actual couple. Fix $p,q$, $t=p+q$, and use $(a,b)=(-p,-q)$. The formulas of [F4] give the stable numerator $N^\infty=k^{-1}\operatorname{im}(K^t(X)\to K^t(X^p))$ once the upper skeleton is $X$, and the stable denominator $B^\infty=jK^{t-1}(X^{p-1})=\ker k$ once the lower skeleton is empty. Thus $k$ identifies $E_\infty^{p,q}$ with $\operatorname{im}(K^t(X)\to K^t(X^p))\cap\ker(K^t(X^p)\to K^t(X^{p-1}))$. Restriction from $F^pK^t(X):=\ker(K^t(X)\to K^t(X^{p-1}))$ surjects onto this intersection and has kernel $F^{p+1}K^t(X)$. Hence $E_\infty^{p,q}\cong F^pK^t(X)/F^{p+1}K^t(X)$. The filtration is nested by functoriality, equals the whole group for $p\le0$, and is zero for $p>2n$. [F1, F4, step 1.2]

3.1 By step 2.1 every stable quotient in total degree one vanishes. The finite filtration of step 2.2 then has equal adjacent stages, so its whole group is its zero final stage: $K^1(X)=0$. In total degree zero its nonzero quotients are $\mathbb Z$ in columns $0,2,\ldots,2n$, while step 1.3 supplies the actual ring with the exact tautological-line convention $\alpha=[L]-1$. [step 1.3, step 2.1, step 2.2]

4.1 The collapse and vanishing are proved in steps 2.1 and 3.1, and the ring presentation is step 1.3, not an inference from the additive page, consistently with [F6]. For $n=0$ the point has only column zero, $K^1=0$, and $L$ is trivial, so $\alpha=0$ and $K^0=\mathbb Z$. AC enters only through [A1]. This proves all assertions. [A1, F6, step 1.3, step 2.1, step 3.1] ∎

## Source notes

[Hatcher](https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf), Propositions 2.23–2.24, printed pp. 66–68, proves the even-cell additive calculation and the tautological-line ring presentation by relative products. The additive exact-couple computation above uses only actual finite K-pair sequences and the even-cell support; it requires no general multiplicative AHSS theorem.
