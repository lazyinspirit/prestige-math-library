---
id: lem-cell-trading-reduces-a-finite-relative-equivalence-to-two-high-cell-degrees
kind: lemma
title: "Cell trading puts a finite relative equivalence in two high degrees"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-elementary-expansion-and-collapse-of-finite-cw-complexes, def-simple-homotopy-equivalence, lem-the-target-inclusion-in-a-cellular-mapping-cylinder-is-simple, lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts, prop-relative-cw-inclusions-are-cofibrations, thm-cellular-approximation-for-maps-of-cw-pairs, thm-long-exact-sequence-of-relative-homotopy-groups, thm-simple-homotopy-equivalences-have-zero-whitehead-torsion, thm-composition-and-sum-formulas-for-whitehead-torsion]
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cohen, §§7.3–7.4, pp.25–27"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/Cohen%2C%20simple-htpy-thry.pdf"
      locator: "§§7.3–7.4, pp.25–27"
    - title: "Davis–Kirk, Theorem 11.31(3) sketch, pp.344–345"
      url: "https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf"
      locator: "Theorem 11.31(3) sketch, pp.344–345"
    - title: "Casson, Theorem 4.7, Chapter 4"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/cassonsimp.pdf"
      locator: "Theorem 4.7, Chapter 4"
---
## Statement

Let $L\subset K$ be finite connected CW complexes with the inclusion a homotopy
equivalence. Relative to $L$, finitely many elementary expansions and collapses
transform $(K,L)$ into a pair $(K',L)$ whose relative cells occur only in two
adjacent degrees $n,n+1$ with $n\ge3$. The deformation respects the homotopy class
and transports the relative torsion. The low-dimensional $0$- and $1$-cell cases
are included, using connectedness and the induced $\pi_1$-isomorphism.

## Facts & Assumptions

**Given:** Finite connected CW complexes $L\subset K$ whose inclusion is a homotopy equivalence.

[F1] An elementary expansion of dimension $n\ge1$ is an inclusion $X\hookrightarrow Y$ of CW complexes equipped with a homeomorphism of ball pairs $\Phi:(D^n,D^{n-1}_+)\to(Q^n,Q^{n-1})$ and a continuous map $\varphi:Q^n\to Y$ that is a characteristic map for a new $n$-cell and restricts on $Q^{n-1}$ to a characteristic map for a new $(n-1)$-cell, with all remaining boundary values in $X$. The new $(n-1)$-cell is the free face; the restriction is homeomorphic on its interior, while boundary identifications in its closure are allowed ([[def-elementary-expansion-and-collapse-of-finite-cw-complexes]]).

[F2] An elementary collapse is the inverse formal operation removing the two new cells of an elementary expansion. A finite sequence of elementary expansions and collapses, performed relative to the cells retained at each step, is a formal deformation ([[def-elementary-expansion-and-collapse-of-finite-cw-complexes]]).

[F3] For every based pair $(X,A,x_0)$ the sequence $$\cdots\to\pi_n(A)\xrightarrow{i_*}\pi_n(X)\xrightarrow{j_*}\pi_n(X,A)\xrightarrow{\partial}\pi_{n-1}(A)\to\cdots\to\pi_1(X,A)\xrightarrow{\partial}\pi_0(A)\xrightarrow{i_*}\pi_0(X)$$ is exact at each term with an incoming and outgoing arrow ([[thm-long-exact-sequence-of-relative-homotopy-groups]]).

[F4] A map of CW pairs $f:(X,A)\to(Y,B)$ that is continuous and cellular on $A$, with $X\setminus A$ having finitely many cells, is homotopic rel $A$ through maps of pairs to a cellular map $g$ with $g(X^n)\subseteq Y^n$ for every $n$, and two cellular maps homotopic rel $A$ admit a cellular homotopy rel $A$ with the prescribed endpoints. These finite-relative-source assertions hold without any choice principle ([[thm-cellular-approximation-for-maps-of-cw-pairs]]).

[F5] If $A\subset X$ is a CW subcomplex whose inclusion is a homotopy equivalence, then $X$ strongly deformation retracts onto $A$ ([[lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts]]).

[F6] A map $f:X\to Y$ of finite CW complexes is a simple homotopy equivalence if it is homotopic to a finite composite of maps each of which is an elementary expansion, an elementary collapse, or a cellular isomorphism ([[def-simple-homotopy-equivalence]]).

[F7] Every simple homotopy equivalence $f:X\to Y$ of finite CW complexes has $\tau(f)=0$ in $\mathrm{Wh}(\pi_1(Y,y))$ ([[thm-simple-homotopy-equivalences-have-zero-whitehead-torsion]]).

[F8] For homotopy equivalences $f:X\to Y$ and $g:Y\to Z$ of finite CW complexes one has $\tau(g\circ f)=\tau(g)+g_*\tau(f)$ in $\mathrm{Wh}(\pi_1(Z,z))$ ([[thm-composition-and-sum-formulas-for-whitehead-torsion]]).

[F9] For a cellular map $f:X\to Y$ of finite CW complexes the target inclusion $i_Y:Y\hookrightarrow M_f$ is a finite composite of elementary expansions; if $f$ is a homotopy equivalence then $\tau(f)=p_*\tau(i_X)$ for the canonical retraction $p$ ([[lem-the-target-inclusion-in-a-cellular-mapping-cylinder-is-simple]]).

[F10] If $(X,A)$ is a relative CW complex then $A\hookrightarrow X$ has the homotopy extension property, hence is a cofibration ([[prop-relative-cw-inclusions-are-cofibrations]]).




## Proof

**Proof technique:** direct.

1.1 Since the inclusion is a homotopy equivalence, it induces isomorphisms $\pi_r(L)\to\pi_r(K)$ for every $r\ge1$ and a bijection $\pi_0(L)\to\pi_0(K)$; exactness of [F3] at $\pi_r(K,L)$ for $r\ge1$ then forces $\pi_r(K,L)=0$, and connectivity of $K$ together with $L\ne\emptyset$ makes every vertex of $K$ the endpoint of a path in $K$ from a vertex of $L$. [F3]

2.1 For $r=0$ let $e^0$ be a relative vertex; the path of step 1.1 starting at $e^0$ is a homotopy $H:D^0\times I\to K$ with $H_0$ the identity on the point and $H_1(D^0)\subseteq L$, the boundary condition being vacuous. [given, step 1.1]

2.2 Suppose all relative cells of $K$ outside $L$ have dimension at least $r$, and let $e^r$ be a relative $r$-cell with attaching map $\varphi:S^{r-1}\to K^{(r-1)}=L^{(r-1)}$. For $r\ge2$, injectivity of $\pi_{r-1}(L)\to\pi_{r-1}(K)$ makes $\varphi$ null-homotopic in $L$, so choose a filling $\Psi:D^r\to L$ with boundary $\varphi$. The sphere obtained by gluing $\Phi$ to the reverse of $\Psi$ represents a class of $\pi_r(K)$; surjectivity of $\pi_r(L)\to\pi_r(K)$ permits changing $\Psi$ by a sphere map in $L$ until this glued sphere is null. The resulting null-homotopy is precisely a homotopy $H:D^r\times I\to K$ from $\Phi$ into $L$ **fixing its entire boundary**. For $r=1$, choose a path in connected $L$ between the endpoints of $\Phi$ and use the isomorphism $\pi_1(L)\to\pi_1(K)$ to homotope the two paths rel endpoints; the separate $r=0$ case is handled by the vertex path. [F3, step 1.1]

3.1 Put $W=L\cup\overline{e^r}$, with its actual CW structure inherited from $K$. Extend the homotopy of step 2.2 (or the vertex path of step 2.1) by the identity on $L$ to a map $\widehat H:W\times I\to K$; it descends through the attaching identifications because the boundary track is fixed. Its endpoint is a retraction $a:W\to L$. Apply [F4] to $a$ relative to $L$, obtaining a cellular $a':W\to L$ and a homotopy rel $L$ from $a$ to $a'$. Concatenate with $\widehat H$, and apply the cellular-homotopy clause of [F4] to the maps $W\hookrightarrow K$ and $W\xrightarrow{a'}L\hookrightarrow K$, relative to $L$. Both endpoint maps and the fixed $L$ track are cellular. Restriction along the characteristic map $\Phi:D^r\to W$ now gives a homotopy $H$ with $H_0=\Phi$, $H_t|_{\partial D^r}=\varphi$, $H_1(D^r)\subseteq L^{(r)}$ and $H(D^r\times I)\subseteq K^{(r+1)}$, since $\Phi(D^r)\subseteq W^{(r)}$. Its boundary lies in $L\cup\overline{e^r}$. This applies approximation on $W$, not on a sphere whose attaching map might be noncellular. [F4, step 2.1, step 2.2]

4.1 Write $Q=D^r\times I$, an $(r+1)$-ball. Attach an $(r+1)$-cell $a$ to $K$ by $H|_{\partial Q}$, whose image lies in $(L\cup\overline{e^r})\cap K^{(r)}$ by the endpoint and boundary bounds of step 3.1. Then attach an $(r+2)$-cell using a boundary sphere written as two $(r+1)$-disks glued along their boundary: map one disk by $H:Q\to K^{(r+1)}$ and the other by the characteristic map of $a$, with matching boundary parameterizations. This defines a CW complex $M$ and an elementary expansion $K\hookrightarrow M$, with $a$ as its free face. The subspace $L\cup\overline{e^r}\cup\overline a$ is a subcomplex. Denote $a$ by $e^{r+1}$ below. [F1, step 3.1]

5.1 In the subcomplex $C:=L\cup\overline{e^r}\cup\overline{e^{r+1}}\subseteq M$ the cell $e^r$ is a free face of $e^{r+1}$: the attaching map of $e^{r+1}$ restricts on the face $D^r\times\{0\}$ to the characteristic map $\Phi$ of $e^r$, a homeomorphism from the open disk onto $e^r$, and maps the complementary part $\partial D^r\times I\cup D^r\times\{1\}$ into $L$ by step 3.1; no other cell of $C$ has the interior of $e^r$ in its closure, since $e^r\notin L$ and $e^{r+1}$ is the only other cell of $C$ outside $L$. Hence $C\searrow L$ is an elementary collapse and $C$ is an elementary expansion of $L$ of dimension $r+1$. [F1, F2, step 4.1]

6.1 By [F5] and [F10] the pair $(C,L)$ admits a strong deformation retraction $G:C\times I\to C$ with $G_0=\mathrm{id}_C$, $G_1(C)\subseteq L$ and $G_t|_L=\mathrm{id}_L$. First apply [F4] to the endpoint retraction $G_1:(C,L)\to(L,L)$ to obtain a cellular map $g:C\to L$ homotopic to $G_1$ relative to $L$. The subspace $A=C\times\{0\}\cup L\times I\cup C\times\{1\}$ is a CW subcomplex of $C\times I$, so its inclusion is a cofibration by [F10]. Extend the endpoint homotopy from $G_1$ to $g$ across $C\times I$ by HEP while retaining the bottom identity and the fixed $L\times I$ track. This produces a deformation from $\mathrm{id}_C$ to $g$, fixed on $L$, whose restriction to all of $A$ is cellular. Now apply [F4] to this prism map relative to $A$ to make the entire homotopy cellular without changing its bottom, side or top. With the product CW structure, $C^{(m)}\times I$ lies in the $(m+1)$-skeleton of $C\times I$, so the resulting homotopy satisfies $G(C^{(m)}\times I)\subseteq C^{(m+1)}$; its endpoint $G_1=g$ satisfies $G_1(C^{(m)})\subseteq L^{(m)}$ for every $m$. The later push uses both this endpoint bound and the $+1$ prism bound: if an attaching sphere lands in $C^{(k-1)}$, its side track lands in $C^{(k)}$. No degree-$m$ bound on the full track is asserted. [F4, F5, F10, step 5.1]

7.1 Push claim. Let $\varphi_0:S^{k-1}\to C^{(k-1)}$ be any map, put $X:=C\cup_{\varphi_0}D^k$ with characteristic map $\Phi_0$ of its new cell, and put $Z:=L\cup_{G_1\varphi_0}D^k$ with characteristic map $\Phi_1$; then $X$ and $Z$ are related by finitely many elementary expansions and collapses. Indeed $Y$ is the complex $C$ with the cell attached along $G_1\varphi_0$ and $Z$ is the complex $L$ with that cell attached, so $Y$ is obtained from $Z$ by adding back the elementary expansion pair; moreover $\Phi_1|_{S^{k-1}}=G_1\varphi_0$ matches $G(\varphi_0(x),t)$ at $t=1$. [step 6.1]

8.1 In the situation of step 7.1 build $J$ from $X$ by attaching a further $k$-cell $\hat e$ along $G_1\varphi_0$ and a $(k+1)$-cell $\Pi$ whose boundary disk $\partial(D^k\times I)$ is glued by the usual three pieces: the face $D^k\times\{0\}$ by $\Phi_0$, the face $D^k\times\{1\}$ by the characteristic map of $\hat e$, and the side $S^{k-1}\times I$ by $(x,t)\mapsto G(\varphi_0(x),t)$, which is legitimate as a CW attaching map because $\varphi_0(S^{k-1})\subseteq C^{(k-1)}$ and the $+1$ bound of step 6.1 puts its side track in $C^{(k)}\subseteq X^{(k)}$; the two end values agree with the corresponding face maps. Then $X\hookrightarrow J$ is an elementary expansion of dimension $k+1$ with free face $\hat e$, and likewise $Y\hookrightarrow J$ is an elementary expansion of dimension $k+1$ with free face the $k$-cell of $X$; both use [F1], the side values lying in $C$. [F1, step 6.1, step 7.1]

9.1 In $Y$ the closure of the new $k$-cell meets $C$ exactly in $G_1\varphi_0(S^{k-1})\subseteq L$, so it is disjoint from the interior of $e^r$; therefore the interior of $e^r$ lies in the closure of no cell of $Y$ other than $\overline{e^r}$ and $\overline{e^{r+1}}$, and the elementary collapse of step 5.1 is still available in $Y$: $Y\searrow Z$. Reading the move of step 8.1 followed by the collapse just constructed gives a formal deformation $X\hookrightarrow J\searrow Y\searrow Z$, so $X$ and $Z$ are related by elementary expansions and collapses. [F2, step 5.1, step 8.1]

10.1 Transport along a deformation. If $D_0,\dots,D_m$ is a formal deformation of finite CW complexes in which each collapse step admits the cellular retraction data of step 6.1, and $\varphi:S^{k-1}\to D_0^{(k-1)}$ is an attaching map, then $D_0\cup_\varphi D^k$ is related by elementary expansions and collapses to $D_m\cup_{\psi}D^k$, where $\psi$ is obtained from $\varphi$ by composing with the cellular inclusions of the expansion steps and the time-one maps of the collapse steps. This is proved by induction on $m$: a collapse step is step 9.1 applied with $C:=D_0$ and $L:=D_1$, an expansion step changes no attaching data because $D_0\cup_\varphi D^k\subseteq D_1\cup_\varphi D^k$ differs only by the expansion pair, and the induction hypothesis is then applied to the remaining steps with the transported attaching map, which is legitimate because the time-one maps are cellular on the complex they contract. [step 9.1]

11.1 Trading one cell. Take $C=L\cup\overline{e^r}\cup\overline{e^{r+1}}$ as in step 5.1 and attach the relative cells of $K$ other than $e^r$ in their original CW order, followed by the new $(r+2)$-cell of $M$. This is a legitimate relative CW filtration over $C$: every old cell's attaching image lies in the earlier old skeleta (now including $C$), and the last cell attaches by $H(D^r\times I)\subseteq K^{(r+1)}$, which is present by then. It is not asserted that the other old relative cells of degrees $r$ and $r+1$ lie in $C$, nor that the new last cell attaches to $C$ alone. Repeatedly applying step 10.1 to push each attaching map across the collapse $C\searrow L$ produces a formal deformation from $M$ to a complex $K':=L\cup d_1'\cup\dots\cup d_s'$ in which each $d_j'$ has the same dimension as the corresponding old cell, and the final new cell has dimension $r+2$. This is the finite push construction in Cohen’s cell-trading construction, printed pp.25–26. [step 3.1, step 4.1, step 5.1, step 10.1]

12.1 Consequences for the trading step. By steps 4.1 and 11.1 the complexes $K$ and $K'$ are related by finitely many elementary expansions and collapses, and every move is performed relative to the cells retained by the previous steps and fixes $L$; the relative cells of $K'$ over $L$ are the relative cells of $K$ other than $e^r$, each with the same dimension, together with one cell of dimension $r+2$. Hence $K'$ has one relative $r$-cell fewer than $K$, has no relative cells of dimension below $r$, and agrees with $K$ in the number of relative cells in every degree other than $r$ and $r+2$. [step 4.1, step 11.1]

13.1 For the iteration, let $K^{(1)}$ be a finite CW complex containing $L$ and related to $K$ by a formal deformation fixing $L$; the composite of the moves restricts to the identity on $L$ and is a homotopy equivalence $f:K\to K^{(1)}$, so applying step 1.1 to the pairs $(K,L)$ and $(K^{(1)},L)$ and using exactness of [F3] at $\pi_r(K^{(1)},L)$ for $r\ge1$ gives $\pi_r(K^{(1)},L)=0$ as well. [F3, step 1.1, step 12.1]

14.1 Iterating step 12.1 for $r=0,1,2$ using the data of steps 2.1, 2.2 and 13.1 removes all relative cells of dimension at most two and yields a finite CW complex $K^{(1)}\supseteq L$, related to $K$ by finitely many elementary expansions and collapses relative to $L$, all of whose relative cells have dimension at least three. [step 2.1, step 2.2, step 12.1, step 13.1]

15.1 Choose once and for all an integer $n\ge\max(4,\dim K^{(1)}+1)$. For each $r=3,4,\ldots,n-1$ in this finite list, apply step 12.1 to every relative $r$-cell then present. Each trade deletes one $r$-cell and creates only an $(r+2)$-cell, so no later trade creates a cell in a degree already processed. By step 13.1 the required relative homotopy groups remain zero. At the end no relative cell has degree below $n$, while every old cell had degree at most $\dim K^{(1)}<n$ and every created cell has degree at most $n+1$. Thus the only possible relative degrees are $n,n+1$, exactly the fixed-target argument of Cohen’s two-layer reduction, printed pp.26–27. [step 12.1, step 13.1, step 14.1]

16.1 Torsion transport. The composite $f:K\to K'$ of the moves of the deformation is a finite composite of elementary expansions, elementary collapses and identities between finite CW complexes, hence a simple homotopy equivalence by [F6] and satisfies $\tau(f)=0$ in $\mathrm{Wh}(\pi_1K')$ by [F7]; writing $i:L\hookrightarrow K$ and $i':L\hookrightarrow K'$ for the inclusions, $i'=f\circ i$ and [F8] give $\tau(i')=\tau(f)+f_*\tau(i)=f_*\tau(i)$, so the relative torsion is transported by $f_*$. [F6, F7, F8, F9, step 15.1]

17.1 By steps 14.1, 15.1 and 16.1 the finitely many elementary expansions and collapses constructed above carry $(K,L)$ to a pair $(K',L)$ whose relative cells lie only in two adjacent degrees $n,n+1$ with $n\ge3$, the deformation fixes $L$ and hence respects the homotopy class of the inclusion, and the relative torsion is transported along it; the cells of dimension $0$ and $1$ were removed in the first iteration using the connectedness data of step 2.1 and the $\pi_1$-isomorphism of step 1.1. ∎ [step 1.1, step 2.1, step 14.1, step 15.1, step 16.1]
