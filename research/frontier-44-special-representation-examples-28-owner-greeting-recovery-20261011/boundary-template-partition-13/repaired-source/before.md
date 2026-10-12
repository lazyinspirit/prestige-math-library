---
id: lem-type-a-nilpotent-orbit-closures-are-normal-via-chain-varieties
kind: lemma
title: "Type-A nilpotent orbit closures are normal via chain varieties"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-nilpotent-endomorphism, thm-nilpotent-jordan-string-basis,
       def-classical-complex-matrix-lie-algebras,
       lem-orbit-map-fibres-and-stabilizer-dimension,
       thm-jacobian-criterion-affine-variety,
       thm-parameters-and-regular-sequences-in-cohen-macaulay-modules,
       thm-polynomial-extension-of-cohen-macaulay-rings,
       thm-regular-quotients-and-cohen-macaulayness, thm-krull-height-theorem,
       lem-serre-r-zero-s-one-characterises-reducedness,
       thm-serre-normality-criterion, thm-weyls-complete-reducibility-theorem,
       thm-schur-weyl-double-centralizer, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hanspeter Kraft and Claudio Procesi, Closures of conjugacy classes of matrices are normal, Inventiones Math. 53 (1979) 227-247"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0053/LOG_0017.pdf"
      locator: "Sections 1-5, printed pp. 227-245: the ab/ba-string dimension computations, the chain equations and their smooth open stratum, the stratum dimension estimates, the complete-intersection and Cohen-Macaulay argument, the invariant quotient by the product of GL(U_i), and the deduction of normality of the orbit closure. Section 6, printed pp. 245-246, supplies only the companion covariant-extension result. A second, mirror-quiver reading of the same construction is in the locally recorded reconstruction owner-category-o-batch17-vust-local-proof.md, Sections 2-4."
    - title: "W. Borho and H. Kraft, Ueber Bahnen und deren Deformationen bei linearen Aktionen reduktiver Gruppen, Comment. Math. Helv. 54 (1979) 61-104"
      url: "https://doi.org/10.1007/BF02566256"
      locator: "Section 3: dim O_mu = N^2 - sum_i (2i-1) mu_i for a nilpotent orbit of type mu and the parity of codimensions of nilpotent orbit closures; quoted here only in the form already carried by the published orbit-dimension item of the library."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $e$ be a nilpotent endomorphism of a
finite-dimensional complex vector space $V$ ([[def-nilpotent-endomorphism]]),
let $X=\overline{\mathrm{GL}(V)\cdot e}$ be the closure in
$\operatorname{End}_{\mathbb C}(V)$ of its conjugacy orbit
([[def-classical-complex-matrix-lie-algebras]]), and let
$\partial X=X\setminus\mathrm{GL}(V)\cdot e$. Then $\mathbb C[X]$ is a reduced
irreducible normal domain and $\operatorname{codim}_X\partial X\ge2$. This
holds for every Jordan type, not only the regular nilpotent cone.

The proof uses the *chain schemes*: if the Jordan partition of $e$ has column
lengths $q_1\ge\cdots\ge q_t>0$, put $n_i=q_t+\cdots+q_{t-i+1}$ and
$U_i=\mathbb C^{n_i}$ for $0\le i\le t$. Let $M=\prod_{i=1}^{t-1}\bigl(\operatorname{Hom}(U_i,U_{i+1})\times\operatorname{Hom}(U_{i+1},U_i)\bigr)$
with coordinates $(A_i,B_i)$ and let $Z\subseteq M$ be the closed subscheme
$B_1A_1=0$, $B_iA_i=A_{i-1}B_{i-1}$ $(2\le i<t)$. Then $Z$ is a complete
intersection, smooth outside a closed subset of codimension $\ge2$, reduced,
irreducible and normal, and the invariant ring $\mathbb C[Z]^H$ under
$H=\prod_{i<t}\mathrm{GL}(U_i)$ is the coordinate ring of $X$ via the end map
$\theta=A_{t-1}B_{t-1}$.

## Facts & Assumptions

**Given:** AC; a finite-dimensional complex vector space $V$ of dimension $N$, a nilpotent $e\in\operatorname{End}(V)$ of Jordan type $\eta$ with column lengths $q_1\ge\cdots\ge q_t>0$, $q_1+\cdots+q_t=N$, the spaces $U_i=\mathbb C^{n_i}$, $n_i=q_t+\cdots+q_{t-i+1}$, and the chain scheme $Z\subseteq M$ of the Statement.

[F1] Jordan strings: every nilpotent endomorphism has a Jordan-string basis; conjugacy classes in $\operatorname{End}(V)$ are $\mathrm{GL}(V)$-orbits, and nilpotent elements form a closed cone; the nilpotency index of a type-$\eta$ element is the largest part $\eta_1=t$ ([[thm-nilpotent-jordan-string-basis]], [[def-nilpotent-endomorphism]], [[def-classical-complex-matrix-lie-algebras]]).

[F2] Orbit dimension and boundary: $\dim G=\dim G_x+\dim O_x$ for the orbit of a closed point under a connected smooth group, and $\overline{O_x}\setminus O_x$ is a union of orbits of strictly smaller dimension; an orbit of a connected group is irreducible, so its closure is irreducible ([[lem-orbit-map-fibres-and-stabilizer-dimension]]).

[F3] Nilpotent type invariants: for a nilpotent $x$ of type $\mu$, $\operatorname{rank}x^k=\sum_i\max(\mu_i-k,0)=N-\sum_{j\le k}\mu'_j$; the conditions $\operatorname{rank}x^k\le\operatorname{rank}e^k$ for all $k$ are equivalent to $\mu\trianglelefteq\eta$ (dominance of partitions, equivalently $\mu'\trianglerighteq\eta'$); and $\dim O_\mu=N^2-\sum_i(2i-1)\mu_i=N^2-\sum_j(\mu'_j)^2$ ([[thm-nilpotent-jordan-string-basis]], [[lem-orbit-map-fibres-and-stabilizer-dimension]], [[def-nilpotent-endomorphism]]).

[F4] Jacobian criterion for $A=P/I$: at a closed point $\mathfrak m$, $A_{\mathfrak m}$ is regular iff $\operatorname{rank}J(\mathfrak m)=n-\dim A_{\mathfrak m}$. Krull's height theorem: every minimal prime over an ideal generated by $c$ elements has height at most $c$. Cohen-Macaulay: a quotient of a polynomial ring by a regular sequence is Cohen-Macaulay; a Cohen-Macaulay ring satisfies $(S_j)$ for all $j$; homogeneous localization detects injectivity of graded maps; and a finitely generated module over a local Cohen-Macaulay ring whose parameter system has length equal to the dimension satisfies the parameter theorem ([[thm-jacobian-criterion-affine-variety]], [[thm-krull-height-theorem]], [[thm-parameters-and-regular-sequences-in-cohen-macaulay-modules]], [[thm-polynomial-extension-of-cohen-macaulay-rings]], [[thm-regular-quotients-and-cohen-macaulayness]]).

[F5] Serre conditions: a Noetherian ring is reduced iff it satisfies $(R_0)$ and $(S_1)$, and normal iff it satisfies $(R_1)$ and $(S_2)$ ([[lem-serre-r-zero-s-one-characterises-reducedness]], [[thm-serre-normality-criterion]]).

[F6] Invariants: finite-dimensional rational $\mathrm{GL}_n(\mathbb C)$-modules are completely reducible, and the $\mathrm{GL}(U)$-invariants of tensor powers of $U$ and $U^*$ are the permutation contractions (Schur-Weyl double centralizer); invariant vectors of rational quotients lift to invariant vectors ([[thm-weyls-complete-reducibility-theorem]], [[thm-schur-weyl-double-centralizer]]).



## Proof

**Proof technique:** direct.

**Given:** The nilpotent $e$, its Jordan partition $\eta$ with columns $q_1\ge\cdots\ge q_t>0$, the spaces $U_i$ of dimensions $n_i$, and the chain scheme $Z$ of the Statement.

1.1 The Jordan chain. $\operatorname{rank}(e^k)=q_{k+1}+\cdots+q_t=n_{t-k}$ for $0\le k\le t$ and $0$ for $k\ge t$, so $U_i:=\operatorname{im}(e^{t-i})$ has dimension $n_i$, and $U_0=0\subseteq U_1\subseteq\cdots\subseteq U_t=V$ with $e(U_i)\subseteq U_{i-1}$. Taking $A_i:U_i\hookrightarrow U_{i+1}$ the inclusion and $B_i=e|_{U_{i+1}}$ gives a point of $Z$ with $B_1A_1=e^{2}|_{\operatorname{im}e^{t-1}}=0$ and $B_iA_i=e|_{U_i}=A_{i-1}B_{i-1}$, whose end map $\theta=A_{t-1}B_{t-1}=e$ has type $\eta$. Hence $Z\ne\varnothing$. [F1, F3, construct]

1.2 $Z$ is cut out by $c=\sum_{i<t}n_i^2$ equations in the affine space $M$ of dimension $2\sum_{i<t}n_in_{i+1}$. Put $D:=2\sum_{i<t}n_in_{i+1}-\sum_{i<t}n_i^2$. The differential at a point $(A_i,B_i)$ sends a tangent vector $(X_i,Z_i)\in\operatorname{Hom}(U_i,U_{i+1})\oplus\operatorname{Hom}(U_{i+1},U_i)$ to the family $Y_i=Z_iA_i+B_iX_i-X_{i-1}B_{i-1}-A_{i-1}Z_{i-1}$ in $\bigoplus_{i<t}\operatorname{Hom}(U_i,U_i)$. At step $i=1$ the linear map $(Z_1,X_1)\mapsto Z_1A_1+B_1X_1$ is onto $\operatorname{Hom}(U_1,U_1)$ whenever $A_1$ is injective (then the image contains all maps factoring through $A_1$, and $\ker A_1=0$, so it is everything) or $B_1$ is surjective (then $B_1\operatorname{Hom}(U_2,U_1)=\operatorname{Hom}(U_1,U_1)$). Inductively, at step $i$ the terms involving $X_{i-1},Z_{i-1}$ have already been fixed, and the same argument applies to the residual; hence the differential is surjective whenever each $A_i$ is injective or each $B_i$ is surjective. [F4, algebra, construct]

1.3 Nilpotent pairs and alternating strings. A pair $(A:U\to W,\ B:W\to U)$ gives a $\mathbb Z/2$-graded nilpotent operator $T=\begin{pmatrix}0&A\\B&0\end{pmatrix}$ on $U\oplus W$. Building the Jordan strings of $T$ with homogeneous complements at each step (possible in characteristic zero because kernels and images are graded) decomposes $T$ into a direct sum of alternating strings, i.e. finite sequences $u_0,w_0,u_1,w_1,\dots$ with $Au_k=w_k$, $Bw_k=u_{k+1}$; suppressing the $u$'s gives the Jordan diagram of $BA$ and suppressing the $w$'s that of $AB$. A string begins and ends with letters of the two types according to whether $\dim U\le\dim W$; $A$ is injective iff every string ends in $W$, and $B$ is surjective iff every string begins in $W$. [F1, algebra, construct]

1.4 The pair-orbit dimension. For strings $S_i$ of lengths $L_i$, a graded map $S_i\to S_j$ is a sum of $\min(r_i,r_j)+\min(s_i,s_j)$ elementary shifts of even or odd degree, where $r_i,s_i$ are the numbers of the two letters; when $L_i=L_j$ is odd and the endpoint letters have opposite type the two counts differ by $1$. Summing the differences of even and odd parts of the graded Hom spaces over all ordered pairs gives $\dim\mathfrak{gl}(U\oplus W)-\dim O_{(A,B)}=(\dim U-\dim W)^2$ for the $\mathrm{GL}(U)\times\mathrm{GL}(W)$-orbit $O_{(A,B)}$ of $(A,B)$, so the pair orbit has half the dimension of the full nilpotent orbit of $T$; moreover the stabilizers are unit groups of even endomorphism algebras, principal open subsets of vector spaces, hence smooth connected irreducible. The correction term when comparing with a product of ordinary Jordan orbits is $2\Delta$, $\Delta=\sum_{k\ \mathrm{odd}}a_kb_k$ where $a_k,b_k$ count odd-length strings beginning with the two letter types, so that if the pair orbit projects to ordinary orbits $C_\alpha,C_\beta$ of $BA,AB$ then $\dim O_{(A,B)}=\dim U\dim W+\frac12(\dim C_\alpha+\dim C_\beta)-\Delta$. [F1, F2, F3, algebra]

1.5 Invariants of one pair. For a vector space $U$ and a two-term complex space $W=\operatorname{Hom}(U,U')\times\operatorname{Hom}(U',U)$ with the $\mathrm{GL}(U)$-action $(A,B)\mapsto(Ag^{-1},gB)$, the invariant ring is $\mathbb C[W]^{\mathrm{GL}(U)}=\mathbb C[(AB)_{ij}]$, the polynomials in the entries of $AB$: entry functions of $AB$ are plainly invariant, and conversely every invariant is a sum of bihomogeneous components, the maximal torus of $\mathrm{GL}(U)$ forces the bidegrees in $A$ and $B$ to be equal, and after polarization a bidegree-$(k,k)$ invariant is a $\mathrm{GL}(U)$-invariant tensor in $(U^*\otimes U')^{\otimes k}\otimes(U\otimes U'^*)^{\otimes k}$, which by the Schur-Weyl contraction description of [F6] is a sum of products of traces of words in the matrix $AB$, hence a polynomial in its entries. [F6, algebra]

2.1 The open subscheme $Z^\circ=\{(A_i,B_i)\in Z:\text{for all }i<t,\ A_i\text{ injective or }B_i\text{ surjective}\}$ is nonempty by step 1.1 and, by step 1.2 and the Jacobian criterion [F4], its closed points are regular of local dimension $\dim M-\operatorname{rank}J=D$; since $Z^\circ$ is open in $Z$, it is smooth of pure dimension $D$. [F4, step 1.1, step 1.2]

2.2 The chain stratification. Each point of $Z$ has a pair type at each index $i<t$; compatibility through the identifications of adjacent $U_i$'s cuts $Z$ into finitely many locally closed strata $Z_\lambda$, indexed by compatible sequences of pair diagrams. The projection of $Z_\lambda$ to the product of the corresponding ordinary nilpotent orbits is locally trivial with irreducible fibres: locally one trivialises by fixing bases through nonvanishing rank minors, and the fibres are quotients of the connected stabilizer unit groups of step 1.4. Iterating the fibre products shows that each nonempty stratum is smooth and irreducible and that $\dim Z_\lambda=\sum_{i<t}n_in_{i+1}+\frac12\dim C_{\sigma(\lambda)}-\sum_i\Delta_i$, where $\sigma(\lambda)$ is the Jordan type of the final end map and the integer corrections $\Delta_i\ge0$ are those of step 1.4. [step 1.4, algebra]

2.3 Domination. For a point of $Z$ the $k$-th power of $\theta=A_{t-1}B_{t-1}$ factors as $A_{t-1}B_{t-1}A_{t-2}B_{t-2}\cdots A_{t-k}B_{t-k}\cdots$, which by the equations $B_iA_i=A_{i-1}B_{i-1}$ equals a product of maps through $U_{t-k}$; hence $\operatorname{rank}\theta^k\le n_{t-k}$ for every $k$, with $n_{t-k}=0$ for $k\ge t$. By [F3], written in the conjugate partition $\eta'=(q_1,q_2,\dots)$, this says $\sigma'_{\le k}\ge\eta'_{\le k}$ for all $k$, i.e. the type $\sigma$ of $\theta$ is dominated by $\eta$. [F3, step 1.3, algebra]

3.1 Parity of dimension drops. For partitions with $\sigma\trianglelefteq\eta$ define $\delta_j=\sigma'_j-\eta'_j$; then $\sum_j\delta_j=0$, all partial sums of $\delta$ are $\ge0$, and $\sum_j(\sigma'_j)^2-\sum_j(\eta'_j)^2=\sum_j\delta_j(\sigma'_j+\eta'_j)$. Each summand is even since $\delta_j\equiv\sigma'_j-\eta'_j\equiv\sigma'_j+\eta'_j\pmod2$; if $\sigma\ne\eta$ the total is positive, so by [F3] the boundary orbits have dimension $\dim X-$ (a positive even integer) $\le\dim X-2$. [F3, step 2.3, algebra]

3.2 The stratum of type $\eta$. Suppose the final end map has type $\eta$. Then all inequalities of step 2.3 are equalities, so for each $k$ the map $\theta^k$ has rank exactly $n_{t-k}$; reading the strings of step 1.3, this forces every string of the final pair to begin and end in the $b$-type, i.e. every row of the final diagram starts and ends in $b$. Each such row must be filled by exactly the available $n_{t-1}$ letters of the other type, and there are exactly $n_{t-1}$ of them, so the internal filling is forced and the first column of every string is then determined; removing the first column and repeating the argument link by link shows that there is exactly one stratum with $\sigma(\lambda)=\eta$. This stratum lies in $Z^\circ$ (a string beginning and ending in $b$ has $A$ injective and $B$ surjective at the corresponding link) and has dimension $D$ by the formula of step 2.2. [step 1.3, step 2.2, step 2.3, algebra]

4.1 All other strata have dimension at most $D-2$. If $\sigma\ne\eta$ and $\dim C_\sigma\ge\dim C_\eta+4$, the formula of step 2.2 gives $\dim Z_\lambda\le\sum_{i<t}n_in_{i+1}+\frac12\dim C_\eta+2=D-2$ because $D=2\sum n_in_{i+1}-\sum n_i^2$ and $\frac12\dim C_\eta=\frac12\sum n_i^2$ (both equals $\frac12(N^2-\dim O_\eta)$). If $\dim C_\sigma=\dim C_\eta+2$ then the conjugate-partition sum expression of [F3] shows that exactly one partial sum $\sigma'_{\le k}$ drops below $\eta'_{\le k}$ by $1$, so exactly one box moves to the next row of the diagram; removing the first column of the diagrams reduces this to the same situation one link lower, and the remaining letter of the other type can then sit only at an end of the shortened row, at an end of the new one-box row, or as a separate row. In the first four placements one of the maps $A_i,B_i$ of the link has maximal rank, so the degeneration passes down the chain; a separate row makes both maps nonmaximal and contributes a correction $\Delta_i\ge1$ of step 1.4 (there is an all-$a$ row and at least one all-$b$ row, so the odd-string counts satisfy $a_kb_k\ge1$). Induction down the links therefore gives $\dim Z_\lambda\le D-2$ in every case outside the $\eta$-stratum. [step 1.4, step 2.2, step 3.1, step 3.2, algebra]

5.1 $Z$ is a complete intersection, reduced and irreducible. Since $Z$ is cut out by $c$ equations, every irreducible component of $Z$ has dimension at least $\dim M-c=D$ by Krull's height theorem [F4]. By steps 3.2 and 4.1 the complement of $Z^\circ$ in $Z$ is a finite union of strata of dimension at most $D-2$, and $Z^\circ$ is smooth of pure dimension $D$ by step 2.1; hence every component of $Z$ meets $Z^\circ$, so every component has dimension exactly $D$. Therefore the $c$ generators form a regular sequence in the polynomial ring $\mathbb C[M]$ and $\mathbb C[Z]$ is Cohen-Macaulay; it is $(R_0)$ because $Z^\circ$ is smooth and $Z^\circ$ equals $Z$ outside a codimension-$\ge2$ closed set, and it is $(S_1)$ as a Cohen-Macaulay ring, so $\mathbb C[Z]$ is reduced by [F5]. The $\eta$-stratum is irreducible of dimension $D$ and contained in $Z^\circ$, and its complement in $Z^\circ$ has dimension at most $D-2$, so the smooth locus $Z^\circ$ has a unique irreducible component of dimension $D$; since every component of $Z$ has dimension $D$ and meets $Z^\circ$, $Z$ is irreducible. [F4, F5, step 2.1, step 3.2, step 4.1]

6.1 $Z$ is a normal domain. Being reduced and irreducible, $\mathbb C[Z]$ is a domain. Since $Z^\circ$ is smooth and $Z\setminus Z^\circ$ has codimension $\ge2$, the singular locus of $Z$ has codimension $\ge2$, so $\mathbb C[Z]$ satisfies $(R_1)$; being Cohen-Macaulay it satisfies $(S_2)$; by the Serre criterion [F5], $\mathbb C[Z]$ is normal. [F5, step 5.1]

7.1 Invariants of the chain and the conclusion. Let $H=\prod_{i<t}\mathrm{GL}(U_i)$ act on $M$ by $(A_i,B_i)\mapsto(g_{i+1}A_ig_i^{-1},g_iB_ig_{i+1}^{-1})$, which preserves $Z$ and fixes the entries of the end product $\theta=A_{t-1}B_{t-1}$. Eliminate the invariants vertex by vertex: at the first vertex, step 1.5 (applied to the pair $(A_1,B_1)$ with the remaining variables as coefficients) says that the $\mathrm{GL}(U_1)$-invariant generators are the entries of $A_1B_1$ together with all remaining matrix entries; on $Z$ one has $A_1B_1=B_2A_2$, so these generators can be replaced by the entries of $B_2A_2$, and the invariant-lifting statement of [F6] applied to the quotient by the ideal of $Z$ shows that the invariant functions are exactly the invariant functions of the substituted presentation. Repeating at the vertices $2,3,\dots,t-1$ leaves no correction terms at the last vertex: the only surviving invariant generators are the entries of $\theta=A_{t-1}B_{t-1}$, so the pullback along $\theta$ maps $\mathbb C[\,\overline{\theta(Z)}\,]$ onto $\mathbb C[Z]^H$. Moreover the $\eta$-stratum of step 3.2 maps onto the whole conjugacy orbit $\mathrm{GL}(V)\cdot e$: for every Jordan basis of $e$ the chain $U_i=\operatorname{im}(e^{t-i})$ built from it lies in $Z$ and has end map of type $\eta$, and every point of the $\eta$-stratum has an end map conjugate to $e$. Hence the image of $\theta$ is dense in $X=\overline{\mathrm{GL}(V)\cdot e}$, and a dominant morphism of affine schemes has injective pullback, so $\mathbb C[Z]^H\cong\mathbb C[X]$. Finally, an invariant subring of a normal domain is normal: if an element of $\operatorname{Frac}(\mathbb C[Z]^H)$ is integral over $\mathbb C[Z]^H$, it is integral over the normal ring $\mathbb C[Z]$, hence lies in $\mathbb C[Z]$, and it is $H$-fixed because it lies in $\operatorname{Frac}(\mathbb C[Z])^H=\operatorname{Frac}(\mathbb C[Z]^H)$; so it lies in $\mathbb C[Z]^H$. Therefore $\mathbb C[X]$ is a reduced irreducible normal domain, and step 3.1 gives $\operatorname{codim}_X\partial X\ge2$, proving the Lemma. [F2, F3, F6, step 1.5, step 2.3, step 3.1, step 3.2, step 6.1] ∎

## Remarks

- The chain scheme $Z$ plays the role of a simultaneous resolution of all strata of the nilpotent cone: its smooth open part dominates the conjugacy orbit of $e$ through the end map $\theta$, and the invariant quotient collapses the chain data to the orbit closure. No rational-singularity or Hochster-Roberts input is used.

- The dimension estimate of step 1.10 is the ab-string computation of the source: the strata are read off from alternating letter strings, whose graded Hom dimension counts give the correction terms $\Delta_i$; this is where the "smooth outside codimension two" statement is actually proved, and it is the only place where the short-string corner case needs the separate treatment of the last two placements.
